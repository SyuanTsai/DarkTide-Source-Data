import { actionProfileBindingCount } from '../contract-w07-weapons.mjs';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { readAuthoringBundle, readAuthoringBundleAtCommit, writeAuthoringBundle } from '../lib/authoring-bundle.mjs';
import { validateSourceContractFromDisk } from '../contract-validator.mjs';
import { assertAttackActionResolution, makeAttackActionResolutionPatch, createAttackSourceBindingContext } from './generic-weapon-templates.mjs';
import { buildWeaponApprovalPackage, canonicalJsonBytes, assertApproval, approveWeaponMerge } from './generic-weapon-templates-approval.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const DEFAULT_SOURCE_REPO = 'F:/GitFile/Persion - Games/Darktide-Source-Code';
const key = r => `${r.gameReleaseId}\0${r.recordId}`;

export function inspectActionResolutions(authoring) {
  const records = new Map(authoring.records.map(r => [key(r), r]));
  const weapons = authoring.records.filter(r => r.kind === 'weapon' && r.payload.actionProfileResolution);
  const unique = new Set();
  const result = { weapons: weapons.length, profileReferences: 0, uniqueProfiles: 0, missingActionResolution: 0, originRowMismatch: 0, missingProfile: 0, bindingMismatch: 0 };
  for (const weapon of weapons) for (const ref of weapon.payload.attackProfileRefs ?? []) {
    result.profileReferences++; unique.add(key(ref));
    const profile = records.get(key(ref));
    if (!profile) { result.missingProfile++; continue; }
    const resolution = profile.payload.actionResolution;
    if (!resolution) { result.missingActionResolution++; continue; }
    const closure = weapon.payload.actionProfileResolution;
    const rows = resolution.origin === 'weapon-template' ? closure.localActions : resolution.origin === 'base-template-settings' ? closure.fallbackActions : [];
    if (rows.filter(r => r.action === profile.payload.action).length !== 1) { result.originRowMismatch++; continue; }
    try { assertAttackActionResolution(profile, weapon); } catch { result.bindingMismatch++; }
  }
  result.uniqueProfiles = unique.size;
  return result;
}

export function buildActionResolutionCandidate(authoring, parserContext) {
  const records = new Map(authoring.records.map(r => [key(r), r]));
  const patches = new Map(), unresolved = [], families = {};
  for (const weapon of authoring.records.filter(r => r.kind === 'weapon' && r.payload.actionProfileResolution)) {
    for (const ref of weapon.payload.attackProfileRefs ?? []) {
      const profile = records.get(key(ref));
      if (!profile) throw new Error(`Missing profile: ${ref.recordId}`);
      const result = makeAttackActionResolutionPatch(profile, weapon,
        profile.payload.sourceBindings?.length ? undefined : parserContext?.forWeapon(weapon), authoring.records);
      if (result.unresolved) { unresolved.push(result.unresolved); continue; }
      if (!result.patch) continue;
      const previous = patches.get(key(ref));
      if (previous && !canonicalJsonBytes(previous).equals(canonicalJsonBytes(result.patch))) throw new Error(`Conflicting shared profile: ${ref.recordId}`);
      if (!previous) families[weapon.payload.familyId] = (families[weapon.payload.familyId] ?? 0) + 1;
      patches.set(key(ref), result.patch);
    }
  }
  for (const weapon of authoring.records.filter(r => r.kind === 'weapon' && r.payload.actionProfileResolution)) {
    const profiles = (weapon.payload.attackProfileRefs ?? []).map(ref => {
      const profile = records.get(key(ref));
      const patch = patches.get(key(ref));
      const binding = patch?.fields.find(f => f.fieldPath === '/payload/sourceBindings');
      return binding ? { ...profile, payload: { ...profile.payload, sourceBindings: binding.value } } : profile;
    });
    const count = actionProfileBindingCount(profiles);
    if (count !== weapon.payload.actionProfileResolution.staticClosure.profileBindingCount) {
      const resolution = structuredClone(weapon.payload.actionProfileResolution);
      resolution.staticClosure.profileBindingCount = count;
      patches.set(key(weapon), { recordId: weapon.recordId, gameReleaseId: weapon.gameReleaseId, fields: [{ fieldPath: '/payload/actionProfileResolution', value: resolution }], sourceRefs: weapon.sourceRefs, dataCoverage: weapon.dataCoverage, reviewTargets: [{ fieldPath: '/payload/actionProfileResolution', dimension: 'technical' }] });
    }
  }
  return {
    candidate: { schemaVersion: 'generic-weapon-template-candidate/1.0.0', records: [], patches: [...patches.values()].sort((a,b) => a.recordId.localeCompare(b.recordId, 'en')), gameReleases: [], sourceRefs: parserContext?.sourceRefs ?? [], sourceSnapshots: [], tombstones: [] },
    coverageGaps: { unresolvedActionResolutions: unresolved }, families
  };
}

export async function prepareActionResolution({ root = ROOT, writeAuthoring = false, base, sourceCodeRepo = process.env.DARKTIDE_SOURCE_CODE_REPO ?? DEFAULT_SOURCE_REPO } = {}) {
  // --base makes the same review package reproducible after pending authoring is written.
  const { bundle: authoring } = base
    ? await readAuthoringBundleAtCommit((commit, name) => execFileSync('git', ['show', `${commit}:${name}`], { cwd: root, maxBuffer: 32 * 1024 * 1024 }), base)
    : await readAuthoringBundle(root);
  const before = inspectActionResolutions(authoring);
  const parserContext = createAttackSourceBindingContext({ authoring, sourceCodeRepo });
  const data = buildActionResolutionCandidate(authoring, parserContext);
  const built = await buildWeaponApprovalPackage({ authoring, ...data, sourceRoot: root });
  const added = built.fullDocument.patchedRecords.filter(r => r.before.kind === 'attack-profile' && !r.before.payload.actionResolution).length;
  const changedWeapons = built.fullDocument.patchedRecords.filter(r => r.before.kind === 'weapon').map(r => r.before.recordId);
  const byKey = new Map(authoring.records.map(r => [key(r), r]));
  const stale = new Set(built.stale.map(r => key(r.target)));
  for (const patch of data.candidate.patches) {
    const profile = byKey.get(key(patch));
    for (const field of patch.fields) profile.payload[field.fieldPath.slice('/payload/'.length)] = field.value;
    profile.sourceRefs = patch.sourceRefs;
    profile.dataCoverage = patch.dataCoverage;
    for (const target of patch.reviewTargets) if (!profile.reviewTargets.some(t => t.fieldPath === target.fieldPath && t.dimension === target.dimension)) profile.reviewTargets.push(target);
    profile.reviewState = 'pending';
  }
  authoring.sourceRefs.push(...data.candidate.sourceRefs);
  // Preserve earlier approval evidence; changed dependencies derive stale record states.
  for (const record of [...authoring.records, ...authoring.tombstones]) if (stale.has(key(record))) record.reviewState = 'stale';
  authoring.publicationEligible = false;
  const validation = await validateSourceContractFromDisk(authoring, { sourceRoot: root });
  {
    const mismatches = validation.issues.filter(i => i.code === 'review-state-mismatch');
    const groups = {};
    const details = mismatches.map(i => {
      const [, collection, index] = i.path.split('/');
      const record = authoring[collection][Number(index)];
      const group = `${record.kind ?? collection} / ${i.path.replace(/\/\d+\//, '/*/')}`;
      groups[group] = (groups[group] ?? 0) + 1;
      return { recordId: record.recordId, fieldPath: '/reviewState', set: record.reviewState, derived: i.message.match(/derived as (\w+)/)?.[1] };
    });
    console.error(JSON.stringify({ mismatchCount: mismatches.length, groups, first10: details.slice(0, 10), otherIssues: validation.issues.filter(i => i.code !== 'review-state-mismatch').reduce((a,i) => (a[i.code] = (a[i.code] ?? 0) + 1, a), {}) }));
    if (!validation.valid) throw new Error('Pending authoring invalid');
  }
  const after = inspectActionResolutions(authoring);
  if (after.originRowMismatch || after.bindingMismatch || after.missingProfile) throw new Error(`Invalid action bindings: ${JSON.stringify(after)}`);
  const unresolved = data.coverageGaps.unresolvedActionResolutions;
  const sourceBindingRepairs = data.candidate.patches.filter(p => p.fields.some(f => f.fieldPath === '/payload/sourceBindings')).map(p => p.recordId);
  const out = path.join(root, 'content/reviews/syp-287-action-resolution');
  const summary = {
    before, after, added, patched: data.candidate.patches.length, sourceBindingRepairs: sourceBindingRepairs.length, closureChangedWeapons: changedWeapons.length, unresolved: unresolved.length,
    pendingRecords: authoring.records.filter(r => r.reviewState === 'pending').length,
    staleRecords: authoring.records.filter(r => r.reviewState === 'stale').length,
    dependencyReviewRecords: built.document.restaledRecords.length,
    dependencyReviewTargets: built.fullDocument.restaledRecords.reduce((n,r) => n + r.reviewTargets.length, 0),
    reviewTargets: built.document.reviewTargets.length, digest: built.packageDigest
  };
  const lines = ['# Action resolution 核准審查包', '',
    `- 前置量測：${before.weapons} 把武器、${before.uniqueProfiles} 個 attack profile、${before.missingActionResolution} 個缺少 actionResolution；origin／row 不符 ${before.originRowMismatch}。`,
    `- 補上的 profile：${added}；修補記錄：${summary.patched}；無法解析：${unresolved.length}。`,
    `- 修補後：缺少 actionResolution ${after.missingActionResolution}；origin／row 不符 ${after.originRowMismatch}；其他 action 綁定不符 ${after.bindingMismatch}。`,
    `- 待審查目標：${summary.reviewTargets}；依賴重審：${summary.dependencyReviewRecords} 筆記錄／${summary.dependencyReviewTargets} 個目標。`,
    `- 記錄狀態：pending ${summary.pendingRecords}；stale ${summary.staleRecords}；publicationEligible=false。新增的 actionResolution 目標沒有 approved receipt。`,
    `- Package digest：\`${built.packageDigest}\`（沿用 generic weapon approval 的 canonicalJsonBytes + SHA-256）。`,
    `- 補 sourceBindings 的 profile：${sourceBindingRepairs.length}。使用同一 pinned parser，僅綁定既有 damageProfileRefs 中 profileKey 相同的 damage-profile；branchBindings 非空且等於 sourceBindings。`,
    '', '## 武器家族', '', '| 家族 | 修補 profile 數 |', '| --- | ---: |',
    ...Object.entries(data.families).sort().map(([family, count]) => `| ${family} | ${count} |`),
    '', `## 補 sourceBindings 的 ${sourceBindingRepairs.length} 個 profile`, '',
    ...sourceBindingRepairs.map(id => `- \`${id}\``),
    '', `## 閉包計數改變的 ${changedWeapons.length} 把武器`, '', ...changedWeapons.map(id => `- \`${id}\``),
    '', '## 無法解析清單', '',
    ...(unresolved.length ? unresolved.map(x => `- ${x.weapon} / ${x.profile} / ${x.action}：${x.reason}`) : ['- 無（0 筆）。']),
    '', '## 重現方式', '',
    `\`node scripts/content/imports/generic-action-resolution-approval.mjs --prepare --base ${base ?? 'ee4c300'}\``,
    '', '本包僅供人工審查，未套用核准；既有 receipts 原樣保留，依賴變動依驗證器規則標示 stale。', ''];
  await mkdir(out, { recursive: true });
  await writeFile(path.join(out, 'review-package.json'), canonicalJsonBytes(built.document));
  await writeFile(path.join(out, 'review-package.md'), lines.join('\n'));
  if (writeAuthoring) await writeAuthoringBundle(root, authoring);
  return summary;
}

// Compare the entire pending graph while allowing the expected derived review states.
export function approveActionResolution({ current, base, built, approval }) {
  const receiptsEqual = (left, right) => {
    if (left.length !== right.length) return false;
    const sorted = receipts => receipts
      .map(receipt => canonicalJsonBytes(receipt))
      .sort((a, b) => Buffer.compare(a, b));
    const sortedLeft = sorted(left);
    const sortedRight = sorted(right);
    return sortedLeft.every((receipt, index) => receipt.equals(sortedRight[index]));
  };
  const normalize = bundle => {
    const copy = structuredClone(bundle);
    for (const item of [...copy.records, ...copy.tombstones]) delete item.reviewState;
    for (const collection of [copy.records, copy.tombstones]) collection.sort((a, b) => key(a).localeCompare(key(b), 'en'));
    delete copy.publicationEligible;
    delete copy.reviewReceipts;
    return canonicalJsonBytes(copy);
  };
  if (!normalize(current).equals(normalize(built.pending)) ||
      !receiptsEqual(current.reviewReceipts, base.reviewReceipts)) {
    throw new Error('Current authoring differs from the reviewed pending graph.');
  }
  // Dependency-stale records are also covered by the review package.
  const document = { ...built.document, patchedRecords: [...built.document.patchedRecords, ...built.document.restaledRecords] };
  return approveWeaponMerge({ authoring: current, built: { ...built, document, pending: structuredClone(current) }, approval });
}

export async function applyActionResolution({ root = ROOT, approvalPath, base = 'ee4c300', sourceCodeRepo = process.env.DARKTIDE_SOURCE_CODE_REPO ?? DEFAULT_SOURCE_REPO } = {}) {
  if (!approvalPath) throw new Error('An approval path is required.');
  const approval = JSON.parse(await readFile(approvalPath, 'utf8'));
  const authoring = (await readAuthoringBundleAtCommit((commit, name) => execFileSync('git', ['show', `${commit}:${name}`], { cwd: root, maxBuffer: 32 * 1024 * 1024 }), base)).bundle;
  const parserContext = createAttackSourceBindingContext({ authoring, sourceCodeRepo });
  const built = await buildWeaponApprovalPackage({ authoring, ...buildActionResolutionCandidate(authoring, parserContext), sourceRoot: root });
  assertApproval(approval, built.packageDigest);
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path.join(root, 'content/reviews/syp-287-action-resolution/review-package.json'))) hash.update(chunk);
  if (hash.digest('hex') !== built.packageDigest) throw new Error('Saved review package differs from recomputed package.');
  const current = (await readAuthoringBundle(root)).bundle;
  const merged = approveActionResolution({ current, base: authoring, built, approval });
  const validation = await validateSourceContractFromDisk(merged, { sourceRoot: root });
  if (!validation.valid || !validation.publicationEligible) throw new Error(`Approved merge is invalid: ${JSON.stringify(validation.issues.slice(0, 12))}`);
  await writeAuthoringBundle(root, merged);
  const checked = await validateSourceContractFromDisk((await readAuthoringBundle(root)).bundle, { sourceRoot: root });
  if (!checked.valid || !checked.publicationEligible) throw new Error('Authoring readback is invalid.');
  return { packageDigest: built.packageDigest, reviewTargetCount: built.document.reviewTargets.length };
}

async function cli(args) {
  if (args.length === 3 && args[0] === '--apply' && args[1] === '--approval') {
    console.log(JSON.stringify(await applyActionResolution({ approvalPath: path.resolve(args[2]) })));
    return;
  }
  if (args.length === 1 && args[0] === '--check') {
    const result = inspectActionResolutions((await readAuthoringBundle(ROOT)).bundle);
    console.log(JSON.stringify(result));
    if (result.missingActionResolution || result.originRowMismatch || result.bindingMismatch || result.missingProfile) process.exitCode = 1;
    return;
  }
  if (args.shift() !== '--prepare') throw new Error('Usage: --check | --prepare [--base <commit>] [--source-code-repo <path>] [--write-authoring] | --apply --approval <file>');
  let base, sourceCodeRepo, writeAuthoring = false;
  while (args.length) {
    const arg = args.shift();
    if (arg === '--write-authoring') writeAuthoring = true;
    else if (arg === '--base' && args[0] && !args[0].startsWith('--')) base = args.shift();
    else if (arg === '--source-code-repo' && args[0] && !args[0].startsWith('--')) sourceCodeRepo = args.shift();
    else throw new Error(`Unknown or incomplete option: ${arg}`);
  }
  console.log(JSON.stringify(await prepareActionResolution({ base, sourceCodeRepo, writeAuthoring })));
}
if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) cli(process.argv.slice(2)).catch(error => { console.error(error.message); process.exitCode = 1; });
