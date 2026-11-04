import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, realpath } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { readAuthoringBundle, writeAuthoringBundle } from '../lib/authoring-bundle.mjs';
import { computeReviewDigests, validateSourceContractFromDisk } from '../contract-validator.mjs';
import { createRecordDependencyWalker } from '../lib/authoring-walk.mjs';
import { loadGenericWeaponTemplateCandidate, mergeGenericWeaponCandidate } from './generic-weapon-templates.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const REVIEW = 'content/reviews/syp-287-generic-weapons';
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const key = x => JSON.stringify([x.gameReleaseId, x.recordId]);
const targetKey = x => JSON.stringify([x.gameReleaseId, x.recordId, x.fieldPath, x.dimension]);
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object' ? Object.fromEntries(Object.keys(x).sort(compare).map(k => [k, canonical(x[k])])) : x;
const digestCanonical = x => Array.isArray(x) ? `[${x.map(digestCanonical).join(',')}]` : x && typeof x === 'object' ? `{${Object.keys(x).sort().map(k => `${JSON.stringify(k)}:${digestCanonical(x[k])}`).join(',')}}` : JSON.stringify(x);
export const canonicalJsonBytes = x => Buffer.from(JSON.stringify(canonical(x), null, 2) + '\n');
const sha256 = x => createHash('sha256').update(x).digest('hex');
const targets = records => records.flatMap(r => (r.reviewTargets ?? []).map(t => ({ recordId: r.recordId, gameReleaseId: r.gameReleaseId, ...t })));
function pointer(obj, p) { return p.slice(1).split('/').reduce((v,k) => v?.[k.replaceAll('~1','/').replaceAll('~0','~')], obj); }
function digestContext(contract) {
  const items = new Map([...contract.records, ...contract.tombstones].map(item => [key(item), item]));
  const recordKeys = new Set(contract.records.map(key));
  const walk = createRecordDependencyWalker(contract);
  const dependencies = new Map(), cache = new Map();
  return target => {
    const id = key(target), targetId = targetKey(target);
    if (cache.has(targetId)) return cache.get(targetId);
    let result;
    if (!dependencies.has(id)) {
      const closure = walk(items.get(id));
      const scoped = { ...contract, records: closure.filter(item => recordKeys.has(key(item))), tombstones: closure.filter(item => !recordKeys.has(key(item))) };
      result = computeReviewDigests(scoped, target);
      dependencies.set(id, result.dependenciesDigest);
    } else {
      const value = pointer(items.get(id), target.fieldPath);
      if (value === undefined) throw new Error(`Review field path does not exist: ${target.fieldPath}`);
      result = { targetDigest: sha256(typeof value === 'string' ? value : digestCanonical(value)), dependenciesDigest: dependencies.get(id) };
    }
    cache.set(targetId, result);
    return result;
  };
}
function collectClosure(candidate) {
  const records = new Map(candidate.records.map(r => [key(r), r]));
  const ids = new Set(candidate.records.filter(r => r.kind === 'weapon').map(key));
  function visit(v) { if (!v || typeof v !== 'object') return; if (v.recordId && v.gameReleaseId && records.has(key(v))) ids.add(key(v)); for (const child of Object.values(v)) visit(child); }
  candidate.patches.forEach(visit);
  for (const id of ids) visit(records.get(id));
  return candidate.records.filter(r => ids.has(key(r)));
}
function assertValid(v, label) { if (!v.valid) throw new Error(`${label} is invalid: ${JSON.stringify(v.issues.slice(0, 12))}`); }
function short(v) { const s = JSON.stringify(v); return (s === undefined ? '∅' : s.length > 100 ? s.slice(0, 97) + '...' : s).replaceAll('|', '\\|').replaceAll('\n', ' '); }
function markdown(doc, digest, bytes) {
  const counts = records => Object.entries(records.reduce((o,r)=>(o[r.kind]=(o[r.kind]??0)+1,o),{})).sort(([a],[b])=>compare(a,b)).map(([k,v])=>`${k}: ${v}`).join('; ');
  const gaps = Object.entries(doc.coverageGaps).map(([k,v])=>`${k}: ${Array.isArray(v) ? v.length : 0}`).join('；');
  const lines = ['# Generic weapon-template approval review package', '', `- Package digest: \`${digest}\``, `- New records: ${doc.newRecords.length} (${counts(doc.newRecords)})`, `- Patched records: ${doc.patchedRecords.length} (${counts(doc.patchedRecords.map(x=>x.after))})`, `- Dependency-stale records: ${doc.restaledRecords.length} (${counts(doc.restaledRecords.map(x=>x.record))})`, `- Review targets: ${doc.reviewTargets.length}`, `- Added bytes in the compact pending contract, excluding receipts: ${doc.addedBytes}`, `- Review package bytes: ${bytes}`, '', '## New marks', '', '| familyId | markId | templateKey | displayed attacks |', '| --- | --- | --- | ---: |'];
  for (const r of doc.newRecords.filter(r=>r.kind==='weapon')) lines.push(`| ${r.payload.familyId} | ${r.payload.markId} | ${r.payload.templateKey} | ${(r.payload.displayedAttacks ?? []).length} |`);
  lines.push('', '## Patch examples', '', '| Record | Field | Before | After |', '| --- | --- | --- | --- |');
  for (const p of doc.patchedRecords.flatMap(p=>p.fields.map(f=>({id:p.after.recordId,...f}))).slice(0,10)) lines.push(`| ${p.id} | ${p.fieldPath} | ${short(p.before)} | ${short(p.after)} |`);
  lines.push('', '## Dependency-stale examples', '');
  for (const r of doc.restaledRecords.slice(0,5)) lines.push(`- \`${r.record.recordId}\` (${r.record.kind}): ${r.patchedDependencies.map(x=>`\`${x.recordId}\``).join(', ')}`);
  const unresolved = [...doc.newRecords, ...doc.patchedRecords.map(x=>x.after)].filter(r=>r.dataCoverage?.missing?.length);
  const unresolvedExamples = unresolved.slice(0, 5).map(r=>`\`${r.recordId}\``).join('、');
  const missingCounts = new Map();
  for (const r of unresolved) for (const field of new Set(r.dataCoverage.missing.map(m=>m.field ?? m.reasonCode))) {
    const entry = missingCounts.get(field) ?? { count: 0, kinds: new Map() };
    entry.count++; entry.kinds.set(r.kind, (entry.kinds.get(r.kind) ?? 0) + 1); missingCounts.set(field, entry);
  }
  lines.push('', '## \u672a\u89e3\u6790\u8986\u84cb', '', '| \u6b04\u4f4d\u8def\u5f91\u6216\u539f\u56e0\u4ee3\u78bc | \u8a18\u9304\u6578 | \u7a2e\u985e\uff08\u8a18\u9304\u6578\uff09 |', '| --- | ---: | --- |');
  for (const [field, entry] of [...missingCounts].sort((a,b)=>b[1].count-a[1].count || compare(a[0],b[0])).slice(0,15)) lines.push(`| ${field.replaceAll('|','\\|')} | ${entry.count} | ${[...entry.kinds].sort(([a],[b])=>compare(a,b)).map(([k,n])=>`${k}: ${n}`).join('; ')} |`);
  const weaponFields = new Map();
  for (const r of unresolved.filter(r=>r.kind==='weapon')) for (const m of r.dataCoverage.missing) {
    const id = `${m.field ?? m.reasonCode} (${m.reasonCode})`;
    weaponFields.set(id, (weaponFields.get(id) ?? new Set()).add(key(r)));
  }
  lines.push('', '\u7db2\u7ad9\u6b66\u5668\u6b04\u4f4d\u4e2d\u6a19\u8a18\u70ba\u7f3a\u6f0f\u7684\u9805\u76ee\uff08\u4f9d weapon \u8a18\u9304\u8a08\u6578\uff09\uff1a', '');
  for (const [field, ids] of [...weaponFields].sort(([a],[b])=>compare(a,b))) lines.push(`- \`${field}\`\uff1a${ids.size} \u7b46 weapon \u8a18\u9304\u3002`);
  lines.push('', '## 需要留意', '', `- index.json coverage gaps: ${gaps}；詳細項目見 review-package.json。`, `- 含 unresolved coverage 的記錄：${unresolved.length}（${counts(unresolved)}）；例如 ${unresolvedExamples}。完整清單可透過 --full-out 產生的完整 JSON 查閱。`, '- 這些 patch 可能改變網站顯示的 attack、stat 與其他武器值；完整 before／after 欄位列於 --full-out 產生的完整 JSON。', '');
  return lines.join('\n');
}
export async function buildWeaponApprovalPackage({ authoring, candidate, coverageGaps = {}, validate = true, sourceRoot = ROOT }) {
  const selected = collectClosure(candidate);
  const subset = { ...candidate, records: selected };
  const pending = mergeGenericWeaponCandidate(authoring, subset);
  if (validate) assertValid(await validateSourceContractFromDisk(pending, { sourceRoot }), 'Pending merge');
  const originals = new Map(authoring.records.map(r=>[key(r),r]));
  const mergedByKey = new Map(pending.records.map(r=>[key(r),r]));
  const patchKeys = new Set(candidate.patches.map(key));
  const digest = digestContext(pending);
  const walk = createRecordDependencyWalker(pending, { details: true });
  const stale = [];
  for (const receipt of authoring.reviewReceipts) {
    const actual = digest(receipt.target);
    if (receipt.targetDigest !== actual.targetDigest || receipt.dependenciesDigest !== actual.dependenciesDigest) stale.push(receipt);
  }
  const staleKeys = new Set(stale.map(r=>targetKey(r.target)));
  const restaled = new Map();
  for (const receipt of stale) {
    const id = key(receipt.target);
    if (patchKeys.has(id)) continue;
    if (!restaled.has(id)) {
      const patchedDependencies = walk(mergedByKey.get(id)).filter(({item})=>patchKeys.has(key(item)))
        .map(({item,mode})=>({recordId:item.recordId,gameReleaseId:item.gameReleaseId,mode}));
      if (!patchedDependencies.length) throw new Error(`Stale receipt without patched dependency: ${id}`);
      restaled.set(id, { record: originals.get(id), reason: 'dependency digest changed after patched weapon merge', patchedDependencies, reviewTargets: [] });
    }
    restaled.get(id).reviewTargets.push(receipt.target);
  }
  const patchedRecords = candidate.patches.map(p=>({ before: originals.get(key(p)), after: mergedByKey.get(key(p)), fields: p.fields.map(f=>({fieldPath:f.fieldPath, before:pointer(originals.get(key(p)),f.fieldPath) ?? null, after:f.value})) }));
  if (patchedRecords.some(p=>!p.before || !p.after)) throw new Error('Missing patched record');
  const newTargets = targets(selected);
  const patchedTargets = targets(patchedRecords.map(p=>p.after)).filter(t=>!authoring.reviewReceipts.some(r=>targetKey(r.target)===targetKey(t)) || staleKeys.has(targetKey(t)));
  const reviewTargets = [...newTargets, ...patchedTargets, ...[...restaled.values()].flatMap(r=>r.reviewTargets)].sort((a,b)=>compare(targetKey(a),targetKey(b)));
  if (new Set(reviewTargets.map(targetKey)).size !== reviewTargets.length) throw new Error('Duplicate review target');
  const addedBytes = Buffer.byteLength(JSON.stringify(pending)) - Buffer.byteLength(JSON.stringify({ ...authoring, reviewReceipts: [] }));
  const document = { schema: 'generic-weapon-templates-approval-review-package/1', newRecords: selected, patchedRecords, restaledRecords: [...restaled.values()], gameReleases: subset.gameReleases, sourceRefs: subset.sourceRefs, sourceSnapshots: subset.sourceSnapshots, reviewTargets, coverageGaps, addedBytes };
  const countKinds = records => records.reduce((o,r)=>(o[r.kind]=(o[r.kind]??0)+1,o),{});
  const summary = { newRecords: selected.length, newRecordsByKind: countKinds(selected), patchedRecords: patchedRecords.length, patchedRecordsByKind: countKinds(patchedRecords.map(p=>p.after)), restaledRecords: restaled.size, restaledRecordsByKind: countKinds([...restaled.values()].map(r=>r.record)), reviewTargets: reviewTargets.length, addedBytes };
  const compact = { summary, newRecords: selected.map(r=>({recordId:r.recordId,gameReleaseId:r.gameReleaseId,kind:r.kind,sha256:sha256(canonicalJsonBytes(r))})), patchedRecords: patchedRecords.map(p=>({recordId:p.after.recordId,gameReleaseId:p.after.gameReleaseId,beforeSha256:sha256(canonicalJsonBytes(p.before)),afterSha256:sha256(canonicalJsonBytes(p.after)),changedFields:p.fields.map(f=>f.fieldPath)})), restaledRecords: [...restaled.values()].map(r=>({recordId:r.record.recordId,gameReleaseId:r.record.gameReleaseId,kind:r.record.kind,reason:r.reason})), reviewTargets: reviewTargets.map(t=>({...t,...digest(t)})), coverageGaps };
  return { document: compact, fullDocument: document, pending, stale, packageDigest: sha256(canonicalJsonBytes(compact)) };
}
async function inputs(root) {
  const [authoring, candidate, index] = await Promise.all([readAuthoringBundle(root), loadGenericWeaponTemplateCandidate({outputDir:path.join(root,'content/imports/generic')}), readFile(path.join(root,'content/imports/generic/weapon-templates/index.json'),'utf8').then(JSON.parse)]);
  return { authoring: authoring.bundle, candidate, coverageGaps: index.coverageGaps };
}
export async function prepareGenericWeaponApproval({ root = ROOT, outputDir = path.join(root, REVIEW), fullOut, inputData } = {}) {
  if (fullOut) {
    const repo = await realpath(root);
    const dest = path.resolve(fullOut);
    let ancestor = dest, realAncestor;
    while (true) { try { realAncestor = await realpath(ancestor); break; } catch (e) { if (e.code !== 'ENOENT') throw e; const parent = path.dirname(ancestor); if (parent === ancestor) throw e; ancestor = parent; } }
    const resolved = path.resolve(realAncestor, path.relative(ancestor, dest));
    const within = (base, target) => { const rel = path.relative(base, target); return rel === '' || (!rel.startsWith('..' + path.sep) && rel !== '..' && !path.isAbsolute(rel)); };
    if (within(repo, dest) || within(repo, resolved)) throw new Error('--full-out must be outside the repository.');
    await mkdir(dest,{recursive:true});
    if (within(repo, await realpath(dest))) throw new Error('--full-out must be outside the repository.');
  }
  const built = await buildWeaponApprovalPackage({ ...(inputData ?? await inputs(root)), sourceRoot: ROOT });
  const bytes = canonicalJsonBytes(built.document);
  await mkdir(outputDir,{recursive:true});
  await writeFile(path.join(outputDir,'review-package.json'),bytes);
  await writeFile(path.join(outputDir,'review-package.md'),markdown(built.fullDocument,built.packageDigest,bytes.length));
  if (fullOut) await writeFile(path.join(fullOut,'review-package.json'),canonicalJsonBytes(built.fullDocument));
  return built;
}
export function assertApproval(approval, digest) {
  if (approval?.decision !== 'approved') throw new Error('Approval decision must be approved.');
  if (approval?.reviewer?.kind !== 'human' || typeof approval.reviewer.id !== 'string' || !approval.reviewer.id.trim() || /^(?:system|automation|fixture|ai|assistant)$/iu.test(approval.reviewer.id)) throw new Error('Approval must name a human reviewer.');
  if (typeof approval.reviewedAt !== 'string' || Number.isNaN(Date.parse(approval.reviewedAt))) throw new Error('Approval must contain a valid reviewedAt timestamp.');
  if (approval?.reviewedPackage?.packageDigest !== digest) throw new Error('Approval packageDigest does not match the recomputed review package.');
}
export function approveWeaponMerge({ authoring, built, approval }) {
  assertApproval(approval,built.packageDigest);
  const merged = built.pending;
  const original = new Map(authoring.records.map(r=>[key(r),r]));
  const selected = new Set([...built.document.newRecords.map(key), ...built.document.patchedRecords.map(key)]);
  for (const record of merged.records) record.reviewState = selected.has(key(record)) ? 'approved' : original.get(key(record))?.reviewState ?? record.reviewState;
  const originalTombstones = new Map(authoring.tombstones.map(r=>[key(r),r]));
  for (const record of merged.tombstones) record.reviewState = originalTombstones.get(key(record))?.reviewState ?? record.reviewState;
  const replaced = new Set(built.document.reviewTargets.map(targetKey));
  merged.reviewReceipts = authoring.reviewReceipts.filter(r=>!replaced.has(targetKey(r.target)));
  for (const {targetDigest, dependenciesDigest, ...target} of built.document.reviewTargets) merged.reviewReceipts.push({target:structuredClone(target),targetDigest,dependenciesDigest,decision:'approved',reviewer:structuredClone(approval.reviewer),reviewedAt:approval.reviewedAt});
  merged.publicationEligible = !merged.fixtureOnly;
  return merged;
}
export async function applyGenericWeaponApproval({ root = ROOT, approvalPath } = {}) {
  if (!approvalPath) throw new Error('An approval path is required.');
  let data = await inputs(root);
  let built = await buildWeaponApprovalPackage({...data,sourceRoot:ROOT});
  const approval = JSON.parse(await readFile(approvalPath,'utf8'));
  assertApproval(approval,built.packageDigest);
  const savedHash = createHash('sha256');
  for await (const chunk of createReadStream(path.join(root,REVIEW,'review-package.json'))) savedHash.update(chunk);
  if (savedHash.digest('hex')!==built.packageDigest) throw new Error('Saved review package differs from recomputed package.');
  const packageDigest = built.packageDigest, reviewTargetCount = built.document.reviewTargets.length;
  let merged = approveWeaponMerge({authoring:data.authoring,built,approval});
  data = null; built = null;
  let validation = await validateSourceContractFromDisk(merged,{sourceRoot:ROOT});
  assertValid(validation,'Approved merge');
  if (!validation.publicationEligible) throw new Error('Approved merge is not publication eligible.');
  validation = null;
  await writeAuthoringBundle(root,merged);
  merged = null;
  const readback = (await readAuthoringBundle(root)).bundle;
  const checked = await validateSourceContractFromDisk(readback,{sourceRoot:ROOT});
  assertValid(checked,'Authoring readback');
  if (!checked.publicationEligible) throw new Error('Authoring readback is not publication eligible.');
  return {packageDigest,reviewTargetCount,validation:checked};
}
async function cli(args) {
  if ((args.length===1 || (args.length===3 && args[1]==='--full-out')) && args[0]==='--prepare') { const r=await prepareGenericWeaponApproval({fullOut:args[2]}); console.log(JSON.stringify({digest:r.packageDigest,newRecords:r.document.newRecords.length,patchedRecords:r.document.patchedRecords.length,restaledRecords:r.document.restaledRecords.length,reviewTargets:r.document.reviewTargets.length,addedBytes:r.document.summary.addedBytes})); return; }
  if (args.length===3 && args[0]==='--apply' && args[1]==='--approval') { const r=await applyGenericWeaponApproval({approvalPath:path.resolve(args[2])}); console.log(JSON.stringify({digest:r.packageDigest,reviewTargets:r.reviewTargetCount})); return; }
  throw new Error('Usage: --prepare [--full-out <dir>] | --apply --approval <file>');
}
if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href===import.meta.url) cli(process.argv.slice(2)).catch(e=>{console.error(e.message);process.exitCode=1;});
