import { createHash } from 'node:crypto';
import { lstat, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateSourceContract, loadContractSchema } from './contract-validator.mjs';
import { sha256Canonical } from './contract-w05-merge.mjs';

const SOURCE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const CHANGE_ENTITY_KINDS = new Set([
  'skill', 'blessing', 'blessing-variant', 'weapon', 'attack-profile', 'stat-definition',
  'stat-curve', 'damage-profile', 'armor-class', 'target-profile', 'modifier-rule', 'claim',
]);
const TYPED_DECIMAL_FIELDS = new Set(['decimal', 'min', 'max', 'step']);

function isObject(value) { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function compareText(left, right) { return left < right ? -1 : left > right ? 1 : 0; }
function escapePointer(value) { return String(value).replace(/~/gu, '~0').replace(/\//gu, '~1'); }
function normalizeDecimal(value) {
  if (typeof value !== 'string' || !/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?$/u.test(value)) return value;
  const negative = value.startsWith('-');
  const unsigned = negative ? value.slice(1) : value;
  const [whole, fraction = ''] = unsigned.split('.');
  const normalizedWhole = whole.replace(/^0+(?=\d)/u, '');
  const normalizedFraction = fraction.replace(/0+$/u, '');
  const isZero = /^0+$/u.test(normalizedWhole) && normalizedFraction === '';
  return `${negative && !isZero ? '-' : ''}${normalizedWhole}${normalizedFraction ? `.${normalizedFraction}` : ''}`;
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (!isObject(value)) return value;
  const knownTypedValue = value.status === 'known';
  return Object.fromEntries(Object.keys(value)
    .sort(compareText)
    .map(key => [key, knownTypedValue && TYPED_DECIMAL_FIELDS.has(key) ? normalizeDecimal(value[key]) : stable(value[key])]));
}
function equalSemantic(left, right) { return JSON.stringify(stable(left)) === JSON.stringify(stable(right)); }

function normalizeLocalReleaseReferences(value, recordGameReleaseId) {
  if (Array.isArray(value)) return value.map(item => normalizeLocalReleaseReferences(item, recordGameReleaseId));
  if (!isObject(value)) return value;
  const localRecordRef = typeof value.recordId === 'string' && value.gameReleaseId === recordGameReleaseId;
  return Object.fromEntries(Object.entries(value)
    .filter(([key]) => !(localRecordRef && key === 'gameReleaseId'))
    .map(([key, child]) => [key, normalizeLocalReleaseReferences(child, recordGameReleaseId)]));
}

function diffValues(before, after, pointer) {
  if (equalSemantic(before, after)) return [];
  if (isObject(before) && isObject(after)) {
    const keys = [...new Set([...Object.keys(before), ...Object.keys(after)])].sort(compareText);
    return keys.flatMap(key => {
      if (before.status === 'known' && after.status === 'known' && TYPED_DECIMAL_FIELDS.has(key)
          && normalizeDecimal(before[key]) === normalizeDecimal(after[key])) return [];
      const left = Object.hasOwn(before, key) ? before[key] : undefined;
      const right = Object.hasOwn(after, key) ? after[key] : undefined;
      const childPointer = `${pointer}/${escapePointer(key)}`;
      if (left === undefined || right === undefined) {
        return [{ path: childPointer, before: left === undefined ? { present: false } : stable(left), after: right === undefined ? { present: false } : stable(right) }];
      }
      return diffValues(left, right, childPointer);
    });
  }
  // Arrays are semantic ordered values: a changed order or member is reported as one field change.
  return [{ path: pointer || '/', before: stable(before), after: stable(after) }];
}

function recordKey(record) {
  if (!isObject(record) || typeof record.recordId !== 'string' || typeof record.kind !== 'string') return null;
  return `${record.kind}\u0000${record.recordId}`;
}

/** Compare source-owned gameplay payloads; only envelope metadata is outside the comparison. */
export function compareSemanticRecords(beforeRecords, afterRecords) {
  if (!Array.isArray(beforeRecords) || !Array.isArray(afterRecords)) throw new TypeError('beforeRecords and afterRecords must be arrays');
  const makeMap = rows => {
    const result = new Map();
    for (const row of rows) {
      const key = recordKey(row);
      if (!key) throw new Error('semantic comparison contains a record without kind and recordId');
      if (result.has(key)) throw new Error('semantic comparison contains duplicate record identity');
      result.set(key, row);
    }
    return result;
  };
  const before = makeMap(beforeRecords);
  const after = makeMap(afterRecords);
  const keys = [...new Set([...before.keys(), ...after.keys()])].sort(compareText);
  const changes = [];
  for (const key of keys) {
    const left = before.get(key);
    const right = after.get(key);
    const record = right ?? left;
    if (!CHANGE_ENTITY_KINDS.has(record.kind)) continue;
    const leftPayload = left ? normalizeLocalReleaseReferences(left.payload, left.gameReleaseId) : undefined;
    const rightPayload = right ? normalizeLocalReleaseReferences(right.payload, right.gameReleaseId) : undefined;
    const operation = left && right ? 'modified' : right ? 'added' : 'removed';
    const changedFields = !left || !right
      ? [{ path: '/payload', before: left ? stable(leftPayload) : { present: false }, after: right ? stable(rightPayload) : { present: false } }]
      : diffValues(leftPayload, rightPayload, '/payload');
    if (changedFields.length) changes.push({
      entityKind: record.kind,
      recordId: record.recordId,
      operation,
      changedFields,
    });
  }
  return changes;
}

function buildIdentityVerified(releases) {
  return releases.every(release => typeof release.gameBuild === 'string' && release.gameBuild.trim() !== ''
    && release.gameBuild.trim().toUpperCase() !== 'UNVERIFIED'
    && typeof release.snapshot?.snapshotId === 'string' && release.snapshot.snapshotId !== ''
    && /^[a-f0-9]{40}$/u.test(release.snapshot.commit)
    && /^[a-f0-9]{64}$/u.test(release.snapshot.manifestSha256)
    && /^[a-f0-9]{64}$/u.test(release.snapshot.contentSha256));
}

function publicEvidence(record, contract) {
  const recordMap = new Map(contract.records.map(row => [`${row.gameReleaseId}\u0000${row.recordId}`, row]));
  const sourceMap = new Map(contract.sourceRefs.map(row => [`${row.gameReleaseId}\u0000${row.sourceId}`, row]));
  return (record.payload.evidenceRefs ?? []).map(ref => {
    const evidence = recordMap.get(`${ref.gameReleaseId}\u0000${ref.recordId}`);
    const sourceRef = evidence?.payload?.sourceRef;
    const source = sourceRef && sourceMap.get(`${sourceRef.gameReleaseId}\u0000${sourceRef.sourceId}`);
    const publicUrl = safePublicUrl(source?.publicUrl);
    return {
      evidenceRecordId: ref.recordId,
      evidenceKind: evidence?.payload?.evidenceKind ?? null,
      safeSummary: evidence?.payload?.safeSummary ?? null,
      ...(publicUrl ? { publicUrl } : {}),
      ...(source?.repository && source?.path ? { repository: source.repository, path: source.path } : {}),
      ...(source?.commit || source?.snapshot?.commit ? { sourceCommit: source.commit ?? source.snapshot.commit } : {}),
      ...(source?.snapshot?.snapshotId ? { sourceSnapshotId: source.snapshot.snapshotId } : {}),
      ...(source?.gameReleaseId ? { sourceGameReleaseId: source.gameReleaseId } : {}),
    };
  });
}

function safePublicUrl(value) {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || !url.hostname || url.username || url.password) return null;
    return url.href;
  } catch { return null; }
}

function correctionReferences(record, recordMap) {
  const supersedesChangeRef = record.payload.supersedesChangeRef;
  if (!supersedesChangeRef) return {};
  const chain = [];
  const seen = new Set([`${record.gameReleaseId}\u0000${record.recordId}`]);
  let ref = supersedesChangeRef;
  while (ref) {
    const key = `${ref.gameReleaseId}\u0000${ref.recordId}`;
    if (seen.has(key)) break;
    seen.add(key);
    const previous = recordMap.get(key);
    if (!previous || previous.kind !== 'game-change') break;
    chain.push({
      changeId: previous.recordId,
      gameReleaseId: previous.gameReleaseId,
      ...(previous.payload.supersedesChangeRef ? { supersedesChangeRef: structuredClone(previous.payload.supersedesChangeRef) } : {}),
    });
    ref = previous.payload.supersedesChangeRef;
  }
  return { supersedesChangeRef: structuredClone(supersedesChangeRef), correctionChain: chain };
}

/**
 * Inspect one ordered pair of releases in an already assembled Source v2 contract.
 * The validator derives review state from receipts; this function never trusts an approved flag alone.
 */
export function analyzeGameChangeTransition(contract, {
  fromGameReleaseId,
  toGameReleaseId,
  schema,
  sourceRoot = SOURCE_ROOT,
} = {}) {
  const validation = validateSourceContract(contract, { schema, sourceRoot });
  if (!validation.valid) {
    const details = validation.issues.map(issue => `${issue.path} [${issue.code}]`).join('; ');
    throw new Error(`Source contract validation failed${details ? `: ${details}` : ''}`);
  }
  const empty = classification => ({
    classification,
    sourceRevision: null,
    targetRelease: null,
    comparison: null,
    candidates: [],
    candidateChanges: [],
    confirmedChanges: [],
    webPublicationState: 'not-web-published',
  });
  const to = contract.gameReleases.find(row => row.gameReleaseId === toGameReleaseId);
  if (!to) return empty('unknown-comparison');
  const targetRelease = {
    gameReleaseId: to.gameReleaseId,
    gameVersion: to.gameVersion,
    gameBuild: to.gameBuild,
    releaseOrder: to.releaseOrder,
    snapshot: structuredClone(to.snapshot),
  };
  if (fromGameReleaseId === undefined || fromGameReleaseId === null || fromGameReleaseId === '') {
    return { ...empty('baseline'), targetRelease };
  }
  const from = contract.gameReleases.find(row => row.gameReleaseId === fromGameReleaseId);
  if (!from || from.gameReleaseId === to.gameReleaseId || from.releaseOrder >= to.releaseOrder) {
    return { ...empty('unknown-comparison'), targetRelease };
  }
  const comparison = {
    fromGameReleaseId: from.gameReleaseId,
    fromGameVersion: from.gameVersion,
    fromGameBuild: from.gameBuild,
    fromSnapshotId: from.snapshot.snapshotId,
    fromCommit: from.snapshot.commit,
    fromManifestSha256: from.snapshot.manifestSha256,
    toGameReleaseId: to.gameReleaseId,
    toGameVersion: to.gameVersion,
    toGameBuild: to.gameBuild,
    toSnapshotId: to.snapshot.snapshotId,
    toCommit: to.snapshot.commit,
    toManifestSha256: to.snapshot.manifestSha256,
  };
  const result = { ...empty('unknown-comparison'), targetRelease, comparison };
  if (!buildIdentityVerified([from, to])) return result;
  if (from.snapshot.snapshotId === to.snapshot.snapshotId
      || (from.snapshot.manifestSha256 === to.snapshot.manifestSha256 && from.snapshot.contentSha256 === to.snapshot.contentSha256)) {
    return { ...result, classification: 'database-revision' };
  }

  const beforeRecords = contract.records.filter(row => row.gameReleaseId === from.gameReleaseId && row.kind !== 'game-change');
  const afterRecords = contract.records.filter(row => row.gameReleaseId === to.gameReleaseId && row.kind !== 'game-change');
  const candidates = compareSemanticRecords(beforeRecords, afterRecords);
  const changeRecords = contract.records.filter(row => row.kind === 'game-change'
    && row.gameReleaseId === to.gameReleaseId
    && row.payload.comparison.fromGameReleaseId === from.gameReleaseId
    && row.payload.comparison.toGameReleaseId === to.gameReleaseId);
  const recordMap = new Map(contract.records.map(row => [`${row.gameReleaseId}\u0000${row.recordId}`, row]));
  const canConfirm = contract.fixtureOnly !== true && validation.publicationEligible === true;
  const confirmedChanges = canConfirm
    ? changeRecords.filter(row => row.reviewState === 'approved').map(row => ({
      changeId: row.recordId,
      entityKind: recordMap.get(`${row.payload.entityRef?.gameReleaseId}\u0000${row.payload.entityRef?.recordId}`)?.kind ?? null,
      entityRef: structuredClone(row.payload.entityRef),
      operation: row.payload.operation,
      changedFields: structuredClone(row.payload.changedFields ?? []),
      comparison: {
        ...structuredClone(row.payload.comparison),
        fromCommit: from.snapshot.commit,
        fromManifestSha256: from.snapshot.manifestSha256,
        toCommit: to.snapshot.commit,
        toManifestSha256: to.snapshot.manifestSha256,
      },
      verificationMethod: row.payload.verificationMethod,
      reviewState: row.reviewState,
      evidence: publicEvidence(row, contract),
      ...correctionReferences(row, recordMap),
    }))
    : [];
  const candidateChanges = changeRecords.filter(row => !confirmedChanges.some(change => change.changeId === row.recordId))
    .map(row => ({
      changeId: row.recordId,
      entityRef: structuredClone(row.payload.entityRef),
      reviewState: row.reviewState,
      ...correctionReferences(row, recordMap),
    }));
  const classification = confirmedChanges.length > 0 ? 'confirmed-game-change'
    : candidates.length > 0 || candidateChanges.length > 0 ? 'review-required'
      : 'snapshot-changed-no-recorded-game-change';
  return {
    ...result,
    classification,
    candidates,
    candidateChanges,
    confirmedChanges,
  };
}

function sha256(bytes) { return createHash('sha256').update(bytes).digest('hex'); }
function parseJson(bytes, label) {
  try { return JSON.parse(bytes.toString('utf8')); }
  catch (error) { throw new Error(`${label} is not valid UTF-8 JSON: ${error.message}`); }
}

/** Verify the immutable W05 package before creating the W12 source-only derived log. */
export async function verifyW05TechnicalPackage(packageDirectory, { sourceRoot = SOURCE_ROOT } = {}) {
  const root = path.resolve(packageDirectory);
  const [technicalBytes, manifestBytes, receiptBytes] = await Promise.all([
    readFile(path.join(root, 'technical.json')),
    readFile(path.join(root, 'source-manifest.json')),
    readFile(path.join(root, 'source-receipt.json')),
  ]);
  const technical = parseJson(technicalBytes, 'technical.json');
  const manifest = parseJson(manifestBytes, 'source-manifest.json');
  const receipt = parseJson(receiptBytes, 'source-receipt.json');
  if (manifest.schema !== 'w05-source-manifest/1' || receipt.schema !== 'w05-source-build-receipt/1') throw new Error('W05 package schema is unsupported');
  if (manifest.sourceRevision !== receipt.sourceRevision || receipt.manifestSha256 !== sha256(manifestBytes)) throw new Error('W05 source manifest and receipt do not match');
  if (!Array.isArray(manifest.files) || manifest.files.length === 0) throw new Error('W05 source manifest has no artifact file list');
  const seenPaths = new Set();
  for (const file of manifest.files) {
    if (!isObject(file) || typeof file.path !== 'string' || file.path.length === 0
        || file.path.includes('\\') || path.posix.isAbsolute(file.path) || path.win32.isAbsolute(file.path)
        || file.path.split('/').some(part => part === '' || part === '.' || part === '..')
        || !Number.isSafeInteger(file.sizeBytes) || file.sizeBytes < 0 || !/^[a-f0-9]{64}$/u.test(file.sha256)
        || seenPaths.has(file.path)) throw new Error('W05 source manifest contains an invalid or duplicate artifact entry');
    seenPaths.add(file.path);
    const artifactPath = path.resolve(root, ...file.path.split('/'));
    const relativeArtifact = path.relative(root, artifactPath);
    if (!relativeArtifact || relativeArtifact === '..' || relativeArtifact.startsWith('..' + path.sep) || path.isAbsolute(relativeArtifact)) {
      throw new Error('W05 source manifest artifact path escapes package directory');
    }
    const artifactStat = await lstat(artifactPath);
    if (!artifactStat.isFile() || artifactStat.isSymbolicLink()) throw new Error('W05 source manifest artifact is not a regular file');
    const artifactBytes = await readFile(artifactPath);
    if (artifactBytes.byteLength !== file.sizeBytes || sha256(artifactBytes) !== file.sha256) {
      throw new Error(`W05 artifact bytes do not match source manifest: ${file.path}`);
    }
  }
  const technicalEntry = manifest.files.find(file => file.path === 'technical.json');
  if (!technicalEntry || technicalEntry.sizeBytes !== technicalBytes.byteLength || technicalEntry.sha256 !== sha256(technicalBytes)) throw new Error('W05 technical bytes do not match the source manifest');
  const schema = await loadContractSchema({ sourceRoot });
  const validation = validateSourceContract(technical, { schema, sourceRoot });
  if (!validation.valid || receipt.validation?.result !== 'valid'
      || receipt.validation?.contractSha256 !== sha256Canonical(technical)
      || receipt.validation?.publicationEligible !== validation.publicationEligible) {
    throw new Error('W05 technical contract or validator receipt is invalid');
  }
  if (receipt.sourceRevision !== manifest.sourceRevision || receipt.mode !== manifest.mode
      || receipt.publicationEligible !== validation.publicationEligible
      || receipt.buildIdentityVerified !== manifest.buildIdentity?.verified) throw new Error('W05 publication receipt metadata is inconsistent');
  return Object.freeze({
    technical,
    sourceRevision: manifest.sourceRevision,
    mode: manifest.mode,
    publicationEligible: validation.publicationEligible,
    buildIdentityVerified: manifest.buildIdentity?.verified === true && receipt.buildIdentityVerified === true,
    fixtureOnly: technical.fixtureOnly === true,
    manifestSha256: sha256(manifestBytes),
    validation,
  });
}

export function createTechnicalChangelog(packageInfo, options = {}) {
  const transition = analyzeGameChangeTransition(packageInfo.technical, options);
  const report = {
    schemaVersion: 'w12-source-game-changes/1.0.0',
    sourceRevision: packageInfo.sourceRevision,
    sourceManifestSha256: packageInfo.manifestSha256,
    sourcePackageMode: packageInfo.mode,
    sourcePublicationEligible: packageInfo.publicationEligible,
    sourceBuildIdentityVerified: packageInfo.buildIdentityVerified,
    webPublicationState: 'not-web-published',
    classification: transition.classification,
    targetRelease: transition.targetRelease,
    comparison: transition.comparison,
    candidates: transition.candidates,
    candidateChanges: transition.candidateChanges,
    confirmedChanges: packageInfo.mode === 'formal' && packageInfo.publicationEligible && packageInfo.buildIdentityVerified
      ? transition.confirmedChanges : [],
  };
  return report;
}

export function renderTechnicalChangelogMarkdown(report) {
  const lines = [
    '# Source game content change record', '',
    `Source revision: ${markdownCode(report.sourceRevision)}`,
    `Web publication: ${markdownInline(report.webPublicationState)}`,
    `Classification: ${markdownInline(report.classification)}`,
    '',
  ];
  if (report.targetRelease) {
    const target = report.targetRelease;
    lines.push(`Target release: ${markdownCode(target.gameVersion)} (${markdownCode(target.gameReleaseId)})`,
      `- Build: ${markdownCode(target.gameBuild)}`,
      `- Snapshot: ${markdownCode(target.snapshot.snapshotId)}`,
      `- Commit: ${markdownCode(target.snapshot.commit)}`,
      `- Manifest SHA-256: ${markdownCode(target.snapshot.manifestSha256)}`,
      `- Content SHA-256: ${markdownCode(target.snapshot.contentSha256)}`, '');
  }
  if (!report.confirmedChanges.length) lines.push('No confirmed Source game changes are included in this Source output.', '');
  for (const change of report.confirmedChanges) {
    lines.push(`## ${markdownInline(change.changeId)}`, '',
      `- Operation: ${markdownInline(change.operation)}`,
      `- Entity: ${markdownInline(change.entityKind ?? 'source record')} / ${markdownCode(change.entityRef?.recordId ?? 'unresolved')}`,
      `- Comparison: ${markdownInline(change.comparison.fromGameVersion)} (${markdownCode(change.comparison.fromGameBuild)}, ${markdownCode(change.comparison.fromSnapshotId)}, commit ${markdownCode(change.comparison.fromCommit)}) → ${markdownInline(change.comparison.toGameVersion)} (${markdownCode(change.comparison.toGameBuild)}, ${markdownCode(change.comparison.toSnapshotId)}, commit ${markdownCode(change.comparison.toCommit)})`,
      `- Verification: ${markdownInline(change.verificationMethod)}`,
      `- Source evidence: ${change.evidence.map(renderEvidenceMarkdown).join('; ') || 'none listed'}`,
      '',
      '| Field | Before | After | Unit |', '| --- | --- | --- | --- |');
    for (const field of change.changedFields) lines.push(`| ${markdownCell(field.field)} | ${markdownCell(field.before)} | ${markdownCell(field.after)} | ${markdownCell(field.unit ?? 'unspecified')} |`);
    if (change.supersedesChangeRef) {
      const chain = (change.correctionChain ?? []).map(item => markdownCode(item.changeId)).join(' → ');
      lines.push(`- Supersedes: ${markdownCode(change.supersedesChangeRef.recordId)}; correction chain: ${chain || 'unresolved'}`);
    }
    lines.push('');
  }
  lines.push('This Source-only output is not a Web publication receipt and does not declare a contentVersion.', '');
  return lines.join('\n');
}

function markdownCell(value) {
  const serialized = JSON.stringify(value);
  return (serialized ?? 'null').replace(/\\/gu, '\\\\').replace(/\|/gu, '\\|').replace(/[\r\n]+/gu, ' ');
}

function markdownInline(value) {
  return String(value ?? '').replace(/\\/gu, '\\\\').replace(/([`*_{}\[\]()#+.!<>|])/gu, '\\$1').replace(/[\r\n]+/gu, ' ');
}

function markdownCode(value) {
  return `\`${String(value ?? '').replace(/`/gu, '\\`').replace(/[\r\n]+/gu, ' ')}\``;
}

function renderEvidenceMarkdown(item) {
  const name = markdownCode(item.evidenceRecordId);
  const details = [
    item.evidenceKind ? markdownInline(item.evidenceKind) : null,
    item.safeSummary ? markdownInline(item.safeSummary) : null,
  ].filter(Boolean).join(': ');
  const source = item.publicUrl ? `[public source](<${item.publicUrl}>)` : 'public link unavailable';
  const identity = [item.sourceSnapshotId, item.sourceCommit].filter(Boolean).map(markdownCode).join(' / ');
  const release = item.sourceGameReleaseId ? `release ${markdownCode(item.sourceGameReleaseId)}` : null;
  return [name, details || null, source, release, identity || null].filter(Boolean).join(' — ');
}

async function writeImmutable(filePath, bytes) {
  await mkdir(path.dirname(filePath), { recursive: true });
  try {
    const existing = await readFile(filePath);
    if (!existing.equals(bytes)) throw new Error('W12 output already exists with different bytes');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    await writeFile(filePath, bytes, { flag: 'wx' });
  }
}

export async function writeTechnicalChangelog({ packageDirectory, outDirectory, fromGameReleaseId, toGameReleaseId, sourceRoot = SOURCE_ROOT } = {}) {
  if (!packageDirectory || !outDirectory || !toGameReleaseId) throw new Error('packageDirectory, outDirectory and toGameReleaseId are required');
  const input = path.resolve(packageDirectory);
  const output = path.resolve(outDirectory);
  const relativeOutput = path.relative(input, output);
  const outputIsInsidePackage = relativeOutput === '' || (relativeOutput !== '..'
    && !relativeOutput.startsWith('..' + path.sep) && !path.isAbsolute(relativeOutput));
  if (outputIsInsidePackage) {
    throw new Error('W12 output must stay outside the immutable W05 package directory');
  }
  const packageInfo = await verifyW05TechnicalPackage(input, { sourceRoot });
  const report = createTechnicalChangelog(packageInfo, { fromGameReleaseId, toGameReleaseId, sourceRoot });
  report.sourceRevision = packageInfo.sourceRevision;
  const jsonBytes = Buffer.from(JSON.stringify(report, null, 2) + '\n', 'utf8');
  const markdownBytes = Buffer.from(renderTechnicalChangelogMarkdown(report), 'utf8');
  const outputDirectory = path.join(output, packageInfo.sourceRevision);
  await writeImmutable(path.join(outputDirectory, 'game-changes.json'), jsonBytes);
  await writeImmutable(path.join(outputDirectory, 'game-changes.md'), markdownBytes);
  return { report, outputDirectory, files: ['game-changes.json', 'game-changes.md'] };
}
