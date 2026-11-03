import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { createReviewReceipt, validateSourceContractFromDisk } from '../contract-validator.mjs';
import { buildContractCandidate } from '../contract-w05-build.mjs';
import { mergeGenericBlessingsCandidate } from './generic-blessings.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const CANDIDATE_RELATIVE = path.join('content', 'imports', 'generic', 'blessings-candidates.json');
const TEXT_RELATIVE = path.join('content', 'imports', 'generic', 'blessings-text.json');
const AUTHORING_RELATIVE = path.join('content', 'authoring', 'v2', 'w07-weapons.json');
const PINNED_COMMIT = 'e46b8926cfa3fa35503e4b80b15aab7a804314e4';
const PUBLIC_REPOSITORY = 'https://github.com/Aussiemon/Darktide-Source-Code';
const DEFAULT_SOURCE_CODE_REPO = process.env.DARKTIDE_SOURCE_CODE_REPO ?? 'F:/GitFile/Persion - Games/Darktide-Source-Code';
const lexical = (left, right) => left < right ? -1 : left > right ? 1 : 0;

function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort(lexical).map((key) => [key, canonicalize(value[key])]));
  return value;
}

export function canonicalJsonBytes(value) {
  return Buffer.from(JSON.stringify(canonicalize(value), null, 2) + '\n', 'utf8');
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function traitBlessingId(traitName) {
  const match = /^weapon_trait_bespoke_(.+)_p(\d+)_(.+)$/u.exec(traitName);
  if (!match) throw new Error(`Cannot derive a generic blessing ID from trait ${traitName}`);
  return `darktide:blessing:${match[1]}:p${match[2]}-${match[3].replaceAll('_', '-')}`;
}

function isFoundName(trait) {
  return typeof trait?.nameKey === 'string' && trait.nameKey.length > 0 && trait.nameHash !== 'NOT_FOUND';
}

function collectRecordClosure(records, rootIds) {
  const byId = new Map(records.map((record) => [record.recordId, record]));
  const selectedIds = new Set(rootIds);
  for (const recordId of selectedIds) {
    const record = byId.get(recordId);
    if (!record) throw new Error(`Candidate is missing selected record ${recordId}`);
    const visit = (value) => {
      if (Array.isArray(value)) return value.forEach(visit);
      if (!value || typeof value !== 'object') return;
      if (typeof value.recordId === 'string' && byId.has(value.recordId)) selectedIds.add(value.recordId);
      Object.values(value).forEach(visit);
    };
    visit(record.payload);
  }
  return records.filter((record) => selectedIds.has(record.recordId));
}

function sourceIdsFor(records) {
  const sourceIds = new Set();
  const visit = (value) => {
    if (Array.isArray(value)) return value.forEach(visit);
    if (!value || typeof value !== 'object') return;
    if (typeof value.sourceId === 'string') sourceIds.add(value.sourceId);
    Object.values(value).forEach(visit);
  };
  records.forEach(visit);
  return sourceIds;
}

function normalizedName(blessing, nameKey, sourceId) {
  const copy = structuredClone(blessing);
  copy.payload.nameKey = nameKey;
  if (!copy.sourceRefs.some((source) => source.sourceId === sourceId)) copy.sourceRefs.push({ sourceId, gameReleaseId: copy.gameReleaseId });
  copy.dataCoverage.missing = copy.dataCoverage.missing.filter((missing) => missing.field !== '/payload/nameKey');
  copy.dataCoverage.status = copy.dataCoverage.missing.length === 0 ? 'complete' : 'partial';
  return copy;
}

function git(sourceCodeRepo, args, options = {}) {
  const normalized = path.resolve(sourceCodeRepo).replaceAll('\\', '/');
  return execFileSync('git', ['-c', `safe.directory=${normalized}`, '-C', path.resolve(sourceCodeRepo), ...args], { maxBuffer: 64 * 1024 * 1024, ...options });
}

function sourceIdForPath(sourcePath) {
  return `public-code:generic-blessings-${path.posix.basename(sourcePath, '.lua').replaceAll('_', '-')}-${PINNED_COMMIT.slice(0, 12)}`;
}

function discoverNameKeyEvidence(candidate, text, sourceCodeRepo) {
  const keys = [...new Set(text.traits.filter(isFoundName).map((trait) => trait.nameKey))];
  let grep = '';
  try { grep = git(sourceCodeRepo, ['grep', '-n', '-F', ...keys.flatMap((key) => ['-e', key]), PINNED_COMMIT, '--', 'scripts/'], { encoding: 'utf8' }); }
  catch (error) { if (error.status !== 1) throw error; }
  const locations = new Map();
  for (const line of grep.split(/\r?\n/u)) {
    const match = /^(?:[^:]+:)?(scripts\/[^:]+):(\d+):(.*)$/u.exec(line);
    if (!match) continue;
    for (const key of keys) if (match[3].includes(key) && !locations.has(key)) locations.set(key, { path: match[1], line: Number(match[2]) });
  }
  if (locations.size === 0) return { byKey: new Map(), sourceRefs: [], sourceSnapshots: [] };

  const files = new Map();
  for (const sourcePath of new Set([...locations.values()].map((item) => item.path))) {
    const tree = git(sourceCodeRepo, ['ls-tree', PINNED_COMMIT, '--', sourcePath], { encoding: 'utf8' }).trim();
    const blob = /^\d+\s+blob\s+([0-9a-f]{40})\t/u.exec(tree)?.[1];
    if (!blob) throw new Error(`Pinned source is missing localization evidence path ${sourcePath}`);
    const bytes = git(sourceCodeRepo, ['cat-file', 'blob', `${PINNED_COMMIT}:${sourcePath}`]);
    files.set(sourcePath, { blob, sha256: sha256(bytes) });
  }
  const rows = [...files.entries()].map(([sourcePath, file]) => ({ path: sourcePath, ...file })).sort((left, right) => lexical(left.path, right.path));
  const snapshot = {
    snapshotId: `generic-blessings-name-keys-1.13.4-${PINNED_COMMIT.slice(0, 12)}`,
    commit: PINNED_COMMIT,
    manifestSha256: sha256(Buffer.from(JSON.stringify(rows), 'utf8')),
    contentSha256: sha256(Buffer.from(rows.map((row) => `${row.path}\0${row.sha256}\n`).join(''), 'utf8'))
  };
  const template = candidate.sourceRefs.find((source) => source.commit === PINNED_COMMIT);
  if (!template) throw new Error('Candidate lacks a pinned generic blessing source-ref template.');
  const sourceRefs = rows.map((row) => ({
    sourceId: sourceIdForPath(row.path), gameReleaseId: template.gameReleaseId, sourceKind: 'public-code',
    repository: PUBLIC_REPOSITORY, publicUrl: `${PUBLIC_REPOSITORY}/blob/${PINNED_COMMIT}/${row.path}`,
    commit: PINNED_COMMIT, path: row.path, gameBuild: template.gameBuild, snapshot,
    tool: structuredClone(template.tool), artifactSha256: row.sha256,
    safeSummary: `Pinned public Lua source contains one or more blessing localization name keys; exact matching lines were recorded during approval-package preparation.`
  }));
  const sourceByPath = new Map(sourceRefs.map((source) => [source.path, source]));
  return {
    byKey: new Map([...locations.entries()].map(([key, location]) => [key, { sourceId: sourceByPath.get(location.path).sourceId, ...location }])),
    sourceRefs,
    sourceSnapshots: [{ gameReleaseId: template.gameReleaseId, snapshot }]
  };
}

function buildSubset(candidate, text, { nameKeyEvidenceByKey = new Map(), nameKeySourceRefs = [], nameKeySourceSnapshots = [] } = {}) {
  if (!Array.isArray(candidate?.records) || !Array.isArray(text?.traits)) throw new Error('Candidate and blessing text inputs must each contain records or traits arrays.');
  const traitsByBlessingId = new Map();
  for (const trait of text.traits) {
    if (!isFoundName(trait)) continue;
    const blessingId = traitBlessingId(trait.traitName);
    if (traitsByBlessingId.has(blessingId)) throw new Error(`Multiple text traits map to ${blessingId}`);
    traitsByBlessingId.set(blessingId, trait);
  }
  const candidateIds = new Set(candidate.records.map((record) => record.recordId));
  const selectedBlessingIds = [...traitsByBlessingId.keys()].filter((recordId) => candidateIds.has(recordId));
  if (selectedBlessingIds.length !== traitsByBlessingId.size) {
    const missing = [...traitsByBlessingId.keys()].filter((recordId) => !candidateIds.has(recordId));
    throw new Error(`Text traits do not map to candidate blessings: ${missing.join(', ')}`);
  }

  const selected = collectRecordClosure(candidate.records, selectedBlessingIds).map((record) => {
    const trait = traitsByBlessingId.get(record.recordId);
    const evidence = trait && nameKeyEvidenceByKey.get(trait.nameKey);
    return evidence ? normalizedName(record, trait.nameKey, evidence.sourceId) : structuredClone(record);
  });
  const sourceIds = sourceIdsFor(selected);
  const sourceRefs = [];
  const seenSourceIds = new Set();
  for (const source of [...candidate.sourceRefs, ...nameKeySourceRefs]) {
    if (sourceIds.has(source.sourceId) && !seenSourceIds.has(source.sourceId)) {
      seenSourceIds.add(source.sourceId);
      sourceRefs.push(source);
    }
  }
  const snapshotIds = new Set(sourceRefs.map((source) => source.snapshot?.snapshotId).filter(Boolean));
  const releaseIds = new Set(selected.map((record) => record.gameReleaseId));
  const subset = {
    schemaVersion: candidate.schemaVersion,
    contractKind: candidate.contractKind,
    fixtureOnly: candidate.fixtureOnly,
    publicationEligible: false,
    gameReleases: candidate.gameReleases.filter((release) => releaseIds.has(release.gameReleaseId)),
    sourceSnapshots: [...(candidate.sourceSnapshots ?? []), ...nameKeySourceSnapshots].filter((item) => snapshotIds.has(item.snapshot?.snapshotId)),
    sourceRefs,
    records: selected,
    tombstones: [],
    reviewReceipts: []
  };
  subset.records.sort((left, right) => lexical(left.recordId, right.recordId));
  subset.sourceRefs.sort((left, right) => lexical(left.sourceId, right.sourceId));
  return { subset, traitsByBlessingId };
}

function reviewTargetsFor(records) {
  return records.flatMap((record) => (record.reviewTargets ?? []).map((target) => ({
    recordId: record.recordId,
    gameReleaseId: record.gameReleaseId,
    fieldPath: target.fieldPath,
    dimension: target.dimension
  }))).sort((left, right) => lexical(JSON.stringify(left), JSON.stringify(right)));
}

function summaryFor(subset, traitsByBlessingId) {
  const blessings = subset.records.filter((record) => record.kind === 'blessing');
  const variants = subset.records.filter((record) => record.kind === 'blessing-variant');
  const count = (kind) => subset.records.filter((record) => record.kind === kind).length;
  const sources = { 'retained-1.13.1': 0, term: 0, raw: 0 };
  for (const trait of traitsByBlessingId.values()) sources[trait.nameSource] = (sources[trait.nameSource] ?? 0) + 1;
  const variantsByBlessingId = new Map(variants.map((variant) => [variant.payload.blessingRef.recordId, variant]));
  return {
    blessingCount: blessings.length,
    variantCount: variants.length,
    claimCount: count('claim'),
    evidenceCount: count('evidence'),
    nameKey: {
      publiclyVerified: blessings.filter((record) => typeof record.payload.nameKey === 'string').length,
      unknown: blessings.filter((record) => typeof record.payload.nameKey !== 'string').length,
      textTraitsMatched: traitsByBlessingId.size
    },
    weaponRefsMissing: variants.filter((record) => record.dataCoverage.missing.some((missing) => missing.field.startsWith('/payload/weaponRefs'))).length,
    unknownTierValueBlessings: blessings.filter((blessing) => variantsByBlessingId.get(blessing.recordId)?.payload.tierValues.some((tier) => tier.value.status === 'unknown')).length,
    nameSourceDistribution: sources
  };
}

function legacyMarkdownFor(packageDocument, traitsByBlessingId) {
  const { subset, summary } = packageDocument;
  const variants = new Map(subset.records.filter((record) => record.kind === 'blessing-variant').map((record) => [record.recordId, record]));
  const lines = [
    '# Generic blessing approval review package',
    '',
    `- Package digest: \`${packageDocument.packageDigest}\``,
    `- Blessings: ${summary.blessingCount}; variants: ${summary.variantCount}; claims: ${summary.claimCount}; evidence: ${summary.evidenceCount}`,
    `- Name keys: ${summary.nameKey.known} known; ${summary.nameKey.unknown} unknown; ${summary.nameKey.textTraitsMatched} matched text traits.`,
    `- Variants with missing weaponRefs coverage: ${summary.weaponRefsMissing}`,
    `- Review targets: ${packageDocument.reviewTargets.length}`,
    '',
    '## Five examples',
    ''
  ];
  for (const blessing of subset.records.filter((record) => record.kind === 'blessing').slice(0, 5)) {
    const trait = traitsByBlessingId.get(blessing.recordId);
    const variant = variants.get(blessing.payload.variantRefs[0]?.recordId);
    const tiers = (variant?.payload.tierValues ?? []).map((tier) => {
      const value = tier.value;
      return value.status === 'known' ? `T${tier.tier}=${value.decimal} ${value.unit}` : `T${tier.tier}=unknown`;
    }).join(', ');
    lines.push(`- ${trait?.nameZhTw ?? 'NOT_FOUND'} — \`${blessing.recordId}\``, `  - ${tiers || 'No tier values.'}`);
  }
  return lines.join('\n') + '\n';
}

function markdownFor({ subset, summary, packageDigest, reviewTargetCount }, traitsByBlessingId) {
  const variants = new Map(subset.records.filter((record) => record.kind === 'blessing-variant').map((record) => [record.recordId, record]));
  const blessings = subset.records.filter((record) => record.kind === 'blessing');
  const unknown = blessings.filter((blessing) => variants.get(blessing.payload.variantRefs[0]?.recordId)?.payload.tierValues.some((tier) => tier.value.status === 'unknown'));
  const examples = [...blessings.filter((blessing) => !unknown.includes(blessing)).slice(0, 8), ...unknown.slice(0, 2)];
  const lines = [
    '# Generic blessing approval review package',
    '',
    `- Package digest: \`${packageDigest}\``,
    `- Blessings: ${summary.blessingCount}; variants: ${summary.variantCount}; claims: ${summary.claimCount}; evidence: ${summary.evidenceCount}`,
    `- Name keys with public evidence: ${summary.nameKey.publiclyVerified}; unknown: ${summary.nameKey.unknown}; text matches: ${summary.nameKey.textTraitsMatched}.`,
    `- Review targets: ${reviewTargetCount}`,
    '',
    '## 10 examples',
    ''
  ];
  for (const blessing of examples) {
    const trait = traitsByBlessingId.get(blessing.recordId);
    const variant = variants.get(blessing.payload.variantRefs[0]?.recordId);
    const unresolved = trait?.unresolvedPlaceholders?.length ? `；未解占位符：${trait.unresolvedPlaceholders.join(', ')}` : '';
    const unknownTier = variant?.payload.tierValues.some((tier) => tier.value.status === 'unknown') ? '；含 unknown tier value' : '';
    lines.push(`- 繁中：${trait?.nameZhTw ?? 'NOT_FOUND'}`, `  - English: ${trait?.nameEn ?? 'NOT_FOUND'}`, `  - 說明：${trait?.descriptionZhTw ?? 'NOT_FOUND'}${unresolved}${unknownTier}`);
  }
  lines.push('', '## 需要留意', '', `- weaponRefs 缺漏：${summary.weaponRefsMissing}`, `- 含 unknown tier value 的祝福：${summary.unknownTierValueBlessings}`, `- 名稱來源：retained-1.13.1 ${summary.nameSourceDistribution['retained-1.13.1'] ?? 0}；詞表 ${summary.nameSourceDistribution.term ?? 0}；RAW ${summary.nameSourceDistribution.raw ?? 0}`);
  return lines.join('\n') + '\n';
}

async function readJson(filename) {
  return JSON.parse(await readFile(filename, 'utf8'));
}

export async function prepareGenericBlessingsApproval({ root = ROOT, outputDir, sourceCodeRepo = DEFAULT_SOURCE_CODE_REPO, nameKeyEvidenceByKey } = {}) {
  if (!outputDir) throw new Error('outputDir is required.');
  const [candidateBytes, textBytes] = await Promise.all([
    readFile(path.join(root, CANDIDATE_RELATIVE)),
    readFile(path.join(root, TEXT_RELATIVE))
  ]);
  const candidate = JSON.parse(candidateBytes.toString('utf8'));
  const text = JSON.parse(textBytes.toString('utf8'));
  const discovered = nameKeyEvidenceByKey === undefined ? discoverNameKeyEvidence(candidate, text, sourceCodeRepo) : {
    byKey: nameKeyEvidenceByKey, sourceRefs: [], sourceSnapshots: []
  };
  const { subset, traitsByBlessingId } = buildSubset(candidate, text, {
    nameKeyEvidenceByKey: discovered.byKey,
    nameKeySourceRefs: discovered.sourceRefs,
    nameKeySourceSnapshots: discovered.sourceSnapshots
  });
  const packageDigest = sha256(canonicalJsonBytes(subset));
  const reviewTargets = reviewTargetsFor(subset.records);
  const summary = summaryFor(subset, traitsByBlessingId);
  const packageDocument = {
    schema: 'generic-blessings-approval-review-package/1',
    packageDigest,
    inputSha256: { candidate: sha256(candidateBytes), text: sha256(textBytes) },
    summary,
    recordIds: subset.records.map((record) => record.recordId)
  };
  const destination = path.resolve(outputDir);
  await mkdir(destination, { recursive: true });
  await Promise.all([
    writeFile(path.join(destination, 'review-package.json'), canonicalJsonBytes(packageDocument)),
    writeFile(path.join(destination, 'review-package.md'), markdownFor({ subset, summary, packageDigest, reviewTargetCount: reviewTargets.length }, traitsByBlessingId))
  ]);
  return { package: packageDocument, subset, outputPaths: [path.join(destination, 'review-package.json'), path.join(destination, 'review-package.md')] };
}

function assertApproval(approval, packageDigest) {
  if (approval?.decision !== 'approved') throw new Error('Approval decision must be approved.');
  if (approval?.reviewer?.kind !== 'human' || typeof approval.reviewer.id !== 'string' || approval.reviewer.id.length === 0) throw new Error('Approval must name a human reviewer.');
  if (typeof approval.reviewedAt !== 'string' || Number.isNaN(Date.parse(approval.reviewedAt))) throw new Error('Approval must contain a valid reviewedAt timestamp.');
  if (approval?.reviewedPackage?.packageDigest !== packageDigest) throw new Error('Approval packageDigest does not match the recomputed review package.');
}

export async function applyGenericBlessingsApproval({ root = ROOT, approvalPath, sourceCodeRepo = DEFAULT_SOURCE_CODE_REPO, nameKeyEvidenceByKey } = {}) {
  if (!approvalPath) throw new Error('approvalPath is required.');
  const [candidate, text, authoring, approval] = await Promise.all([
    readJson(path.join(root, CANDIDATE_RELATIVE)),
    readJson(path.join(root, TEXT_RELATIVE)),
    readJson(path.join(root, AUTHORING_RELATIVE)),
    readJson(approvalPath)
  ]);
  const discovered = nameKeyEvidenceByKey === undefined ? discoverNameKeyEvidence(candidate, text, sourceCodeRepo) : {
    byKey: nameKeyEvidenceByKey, sourceRefs: [], sourceSnapshots: []
  };
  const { subset } = buildSubset(candidate, text, {
    nameKeyEvidenceByKey: discovered.byKey,
    nameKeySourceRefs: discovered.sourceRefs,
    nameKeySourceSnapshots: discovered.sourceSnapshots
  });
  const packageDigest = sha256(canonicalJsonBytes(subset));
  assertApproval(approval, packageDigest);

  const merged = mergeGenericBlessingsCandidate({ authoringBundles: [authoring], candidate: subset });
  const selectedIds = new Set(subset.records.map((record) => record.recordId));
  for (const record of merged.records) if (selectedIds.has(record.recordId)) record.reviewState = 'approved';
  const targets = reviewTargetsFor(subset.records);
  const newReceipts = targets.map((target) => createReviewReceipt(merged, target, {
    decision: 'approved', reviewer: approval.reviewer, reviewedAt: approval.reviewedAt
  }));
  merged.reviewReceipts.push(...newReceipts);
  merged.publicationEligible = true;

  const validation = await validateSourceContractFromDisk(merged, { sourceRoot: ROOT });
  if (!validation.valid || !validation.publicationEligible) throw new Error(`Approved merge is not a publishable source contract:\n${JSON.stringify(validation.issues, null, 2)}`);
  const formalOutputRoot = await mkdtemp(path.join(os.tmpdir(), 'generic-blessings-approval-formal-'));
  let formalBuild;
  try {
    // v2 formal packages are built through the current contract builder.  The
    // older compile.mjs API accepts only its pre-v2 single-release shape.
    formalBuild = await buildContractCandidate({
      baseline: structuredClone(merged), authoring: structuredClone(merged), candidate: structuredClone(merged),
      outRoot: formalOutputRoot, mode: 'formal'
    });
  } finally {
    await rm(formalOutputRoot, { recursive: true, force: true });
  }
  const bytes = Buffer.from(JSON.stringify(merged, null, 2) + '\n', 'utf8');
  await writeFile(path.join(root, AUTHORING_RELATIVE), bytes);
  return { packageDigest, addedReceiptCount: newReceipts.length, w07Bytes: bytes.length, validation, formalReceipt: formalBuild.receipt };
}

function option(argv, name) {
  const index = argv.indexOf(name);
  return index === -1 ? undefined : argv[index + 1];
}

async function runCli(argv) {
  const prepare = argv.includes('--prepare');
  const apply = argv.includes('--apply');
  if (prepare === apply) throw new Error('Use exactly one of --prepare or --apply.');
  if (prepare) {
    if (argv.length !== 3 || !option(argv, '--output-dir')) throw new Error('Usage: node scripts/content/imports/generic-blessings-approval.mjs --prepare --output-dir <dir>');
    const result = await prepareGenericBlessingsApproval({ outputDir: option(argv, '--output-dir') });
    process.stdout.write(`Prepared ${result.package.summary.blessingCount} blessings; package digest ${result.package.packageDigest}.\n${result.outputPaths.join('\n')}\n`);
    return;
  }
  if (argv.length !== 2 || !option(argv, '--approval')) throw new Error('Usage: node scripts/content/imports/generic-blessings-approval.mjs --apply --approval <human-approval.json>');
  const result = await applyGenericBlessingsApproval({ approvalPath: option(argv, '--approval') });
  process.stdout.write(`Applied ${result.addedReceiptCount} review receipts; w07-weapons.json is ${result.w07Bytes} bytes.\n`);
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  runCli(process.argv.slice(2)).catch((error) => {
    process.stderr.write(String(error.message || error) + '\n');
    process.exitCode = 1;
  });
}
