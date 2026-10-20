import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildPsykerImportBundle } from './contract-w05-psyker.mjs';

const CURRENT_RELEASE_ID = 'darktide:1.13.2';
const CODE_REPOSITORY = 'https://github.com/Aussiemon/Darktide-Source-Code';
const CURRENT_CODE_COMMIT = 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e';
const TOOL_NAME = 'w06-skills-blessings-contract-mapper';
const TOOL_VERSION = '1.0.0';
const UNVERIFIED_BUILD = 'UNVERIFIED';
const EXPECTED_CURRENT_MANIFEST_SHA256 = '1f5d669eb90d117bee30ce4399d975ca274ecb0092cc4e3b457225a374f6b33a';
const EXPECTED_CURRENT_CONTENT_SHA256 = '71b643339af89547c47c84453382723d63a1c7cb1936f68e314a06dd124fca9a';
const rootFromModule = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const normalizedTextBytes = (value) => Buffer.from(value.toString('utf8').replaceAll('\r\n', '\n'), 'utf8');
const textArtifactSha256 = (value) => sha256(normalizedTextBytes(value));
const compareText = (left, right) => left < right ? -1 : left > right ? 1 : 0;
const fileText = (value) => JSON.stringify(value, null, 2) + '\n';
const recordRef = (recordId, gameReleaseId = CURRENT_RELEASE_ID) => ({ recordId, gameReleaseId });
const sourceLink = (sourceId, gameReleaseId = CURRENT_RELEASE_ID) => ({ sourceId, gameReleaseId });
const completeCoverage = () => ({ status: 'complete', missing: [] });
const reviewTargets = (...pairs) => pairs.map(([fieldPath, dimension]) => ({ fieldPath, dimension }));

const NEW_CODE_SOURCES = Object.freeze([
  {
    sourceId: 'public-code:chainaxe-p1-traits-ba6c148',
    path: 'scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua',
    gitBlobSha1: '9670e08685d0aa90ddbc1b4577756a0b0365b610',
    byteCount: 9029,
    artifactSha256: '555cb142923641ebce2c014641272597175623a4f7a457fced63404d025ddf10'
  },
  {
    sourceId: 'public-code:talent-layout-parser-ba6c148',
    path: 'scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua',
    gitBlobSha1: '1cd7b67b1069b12325b58f48f5c8f66afbbbaff1',
    byteCount: 24186,
    artifactSha256: 'b178d9ef211c6d6a52db9c74feedf3cc0b83b6f916de1eaffe9f893072e2a790'
  },
  {
    sourceId: 'public-code:trait-value-parser-ba6c148',
    path: 'scripts/utilities/trait_value_parser.lua',
    gitBlobSha1: '6b72f166b74f834256c79736059a03401087baa5',
    byteCount: 6929,
    artifactSha256: '29c84a0ea78f0fa10e90973fd345fbe3b1aad77c931df796601a5a1861685b30'
  }
]);

const W06_ADDED_RECORD_IDS = Object.freeze([
  'darktide:claim:psyker:brain-burst-improved-description-display-percent',
  'darktide:evidence:psyker:brain-burst-improved-description-display-percent-code',
  'darktide:blessing:chainaxe:p1-movement-speed-on-activation',
  'darktide:blessing-variant:chainaxe:p1-movement-speed-on-activation',
  'darktide:claim:chainaxe:p1-movement-speed-on-activation-duration',
  'darktide:evidence:chainaxe:p1-movement-speed-on-activation-code',
  'darktide:claim:chainaxe:p1-movement-speed-on-activation-tier1-display-percent',
  'darktide:evidence:chainaxe:p1-movement-speed-on-activation-tier1-display-percent-code',
  'darktide:claim:chainaxe:p1-movement-speed-on-activation-tier2-display-percent',
  'darktide:evidence:chainaxe:p1-movement-speed-on-activation-tier2-display-percent-code',
  'darktide:claim:chainaxe:p1-movement-speed-on-activation-tier3-display-percent',
  'darktide:evidence:chainaxe:p1-movement-speed-on-activation-tier3-display-percent-code',
  'darktide:claim:chainaxe:p1-movement-speed-on-activation-tier4-display-percent',
  'darktide:evidence:chainaxe:p1-movement-speed-on-activation-tier4-display-percent-code'
]);

const NEW_CODE_SAFE_SUMMARIES = Object.freeze({
  'public-code:chainaxe-p1-traits-ba6c148': 'Pinned public code blob 9670e08685d0aa90ddbc1b4577756a0b0365b610, lines 92-145: the P1 movement-speed-on-activation trait defines tier literals 0.17, 0.18, 0.19, and 0.2; each override includes active_duration = 2 (lines 119-143). Code observation only; no runtime effect is established.',
  'public-code:talent-layout-parser-ba6c148': 'Fixed public code blob 1cd7b67b1069b12325b58f48f5c8f66afbbbaff1, lines 379-403 and 629-635: the talent layout parser applies configured value manipulation or percentage scaling and renders the configured prefix. This describes presentation formatting only.',
  'public-code:trait-value-parser-ba6c148': 'Fixed public code blob 6b72f166b74f834256c79736059a03401087baa5, lines 8-20 and 99-105: the trait value parser applies custom value manipulation or default percentage scaling and renders the configured prefix. This describes presentation formatting only.'
});

function assertExpectedDigest(label, actual, expected) {
  if (actual !== expected) throw new Error(label + ' SHA-256 mismatch: expected ' + expected + ', found ' + actual);
}

function getPinnedRawCodeManifest(w05Manifest) {
  const previousRows = w05Manifest.sourceCodeComparison.files.map((item) => ({
    path: item.path,
    gitBlobSha1: item.currentGitBlobSha1,
    byteCount: item.byteCount,
    artifactSha256: item.artifactSha256
  }));
  const rowsByPath = new Map(previousRows.map((item) => [item.path, item]));
  for (const item of NEW_CODE_SOURCES) {
    if (rowsByPath.has(item.path)) throw new Error('W06 code source unexpectedly overlaps the W05 15-file snapshot: ' + item.path);
    rowsByPath.set(item.path, {
      path: item.path,
      gitBlobSha1: item.gitBlobSha1,
      byteCount: item.byteCount,
      artifactSha256: item.artifactSha256
    });
  }
  const rows = [...rowsByPath.values()].sort((left, right) => compareText(left.path, right.path));
  if (rows.length !== 18) throw new Error('The W06 current code snapshot must contain exactly 18 selected files.');
  const manifestSha256 = sha256(Buffer.from(JSON.stringify(rows), 'utf8'));
  assertExpectedDigest('W06 current-code manifest', manifestSha256, EXPECTED_CURRENT_MANIFEST_SHA256);
  return { rows, manifestSha256, contentSha256: EXPECTED_CURRENT_CONTENT_SHA256 };
}

function makeNewCodeSource(source, artifact, snapshot, tool) {
  if (source.path !== artifact.path || source.commit !== CURRENT_CODE_COMMIT || source.repository !== CODE_REPOSITORY) {
    throw new Error('W01 source pin differs from the frozen W06 code metadata: ' + artifact.sourceId);
  }
  return {
    sourceId: artifact.sourceId,
    gameReleaseId: CURRENT_RELEASE_ID,
    sourceKind: 'public-code',
    repository: CODE_REPOSITORY,
    publicUrl: CODE_REPOSITORY + '/blob/' + CURRENT_CODE_COMMIT + '/' + artifact.path,
    commit: CURRENT_CODE_COMMIT,
    path: artifact.path,
    gameBuild: UNVERIFIED_BUILD,
    snapshot: structuredClone(snapshot),
    tool,
    artifactSha256: artifact.artifactSha256,
    safeSummary: NEW_CODE_SAFE_SUMMARIES[artifact.sourceId]
  };
}

function mapNewRecord(record, sourceMap) {
  const sourceRefs = record.sourceRefs.map((sourceId) => {
    if (!sourceMap.has(sourceId)) throw new Error('W06 record has a missing W01 source: ' + sourceId);
    return sourceLink(sourceId);
  });
  const base = {
    recordId: record.recordId,
    kind: record.kind,
    owner: 'source',
    gameReleaseId: CURRENT_RELEASE_ID,
    sourceRefs,
    dataCoverage: completeCoverage(),
    reviewState: 'pending'
  };

  if (record.kind === 'claim') {
    return {
      ...base,
      payload: {
        targetRef: recordRef(record.payload.targetRef),
        property: record.payload.property,
        value: structuredClone(record.payload.value),
        context: structuredClone(record.payload.context),
        basis: record.payload.basis,
        evidenceRefs: record.payload.evidenceRefs.map((id) => recordRef(id))
      },
      reviewTargets: reviewTargets(
        ['/payload/targetRef', 'identity'],
        ['/payload/value', 'technical'],
        ['/payload/context', 'context'],
        ['/payload/basis', 'technical'],
        ['/payload/evidenceRefs', 'evidence']
      )
    };
  }

  if (record.kind === 'evidence') {
    return {
      ...base,
      payload: {
        evidenceKind: 'code-observed',
        sourceRef: sourceLink(record.payload.sourceRef),
        safeSummary: record.payload.safeSummary
      },
      reviewTargets: reviewTargets(['/payload', 'evidence'])
    };
  }

  if (record.kind === 'blessing') {
    return {
      ...base,
      payload: {
        nameKey: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
        variantRefs: record.payload.variantRefs.map((id) => recordRef(id))
      },
      dataCoverage: {
        status: 'partial',
        missing: [{ field: '/payload/nameKey', reasonCode: 'NOT_VERIFIED' }]
      },
      reviewTargets: reviewTargets(['/payload/nameKey', 'identity'], ['/payload/variantRefs', 'evidence'])
    };
  }

  if (record.kind === 'blessing-variant') {
    return {
      ...base,
      payload: {
        blessingRef: recordRef(record.payload.blessingRef),
        weaponRefs: [],
        definedTiers: structuredClone(record.payload.definedTiers),
        obtainableTiers: structuredClone(record.payload.obtainableTiers),
        tierValues: structuredClone(record.payload.tierValues)
      },
      dataCoverage: {
        status: 'partial',
        missing: [{ field: '/payload/weaponRefs', reasonCode: 'NOT_IMPORTED' }]
      },
      reviewTargets: reviewTargets(
        ['/payload/blessingRef', 'identity'],
        ['/payload/weaponRefs', 'evidence'],
        ['/payload/definedTiers', 'technical'],
        ['/payload/obtainableTiers', 'context'],
        ['/payload/tierValues', 'technical']
      )
    };
  }

  throw new Error('Unsupported record kind in fixed W06 projection: ' + record.kind);
}

function makeManifestMarkdown(manifest) {
  const tierValues = manifest.blessingProjection.tiers.map((item) => 'Tier ' + item.tier + ': ' + item.displayPercent + '%').join('; ');
  return [
    '# W06 Source import candidate',
    '',
    'Status: pending review. This is a technical-data candidate and is not publication eligible.',
    '',
    'The fixed W01 input contains ' + manifest.sourceInput.originalRecordCount + ' records. W06 projects ' +
      manifest.sourceInput.projectedOriginalRecordCount + ' W01 records into Source contract v2, then retains the two W05 compatibility records; the resulting contract has ' +
      manifest.contractRecordCount + ' records. All candidate records remain pending and there are no review receipts.',
    '',
    'The Psyker skill keeps its existing four claims and adds the code-derived 50% description display parameter. That display value is not a final damage value. The Chainaxe P1 variant records defined tiers ' +
      tierValues + ' and a template active_duration parameter of 2 seconds. Tier availability, runtime effect, localized description compatibility, and the precise Steam build remain unverified.',
    '',
    'The blessing localization name key is explicitly unknown with NOT_VERIFIED coverage because the input does not supply a verified localization key. The original W01 weapon association ' +
      manifest.weaponAssociations[0].recordId + ' is preserved here with status NOT_IMPORTED because weapon catalog import belongs to W07; the Source candidate leaves weaponRefs empty and marks that field NOT_IMPORTED.',
    '',
    'The current 1.13.2 selected-code snapshot now covers exactly 18 raw Git files. This is a data-snapshot scope revision from the W05 15-file current snapshot; it does not claim a game change. The historical 1.13.1 snapshot and the W05 cited-code compatibility comparison remain limited to the original 15 files. Neither snapshot establishes a precise Steam build, whole-game equivalence, or runtime equivalence.',
    '',
    'Current snapshot manifest SHA-256: ' + manifest.currentCodeSnapshot.manifestSha256,
    '',
    'Current snapshot content SHA-256: ' + manifest.currentCodeSnapshot.contentSha256,
    '',
    'Selected current code files: ' + manifest.currentCodeSnapshot.files.length + '.',
    ''
  ].join('\n');
}

async function buildBundle({ sourceRoot = rootFromModule } = {}) {
  const w05 = await buildPsykerImportBundle({ sourceRoot });
  const candidatePath = path.join(path.resolve(sourceRoot), 'content', 'authoring', 'w01-real-representative-candidate.json');
  const candidateBytes = await readFile(candidatePath);
  const candidateSha256 = textArtifactSha256(candidateBytes);
  assertExpectedDigest('W06 W01 candidate Git bytes', candidateSha256, w05.manifest.sourceInput.sha256);
  const authoring = JSON.parse(candidateBytes.toString('utf8'));
  const candidateById = new Map(authoring.records.map((record) => [record.recordId, record]));
  for (const recordId of W06_ADDED_RECORD_IDS) {
    if (!candidateById.has(recordId)) throw new Error('The fixed W01 candidate is missing required W06 record: ' + recordId);
  }
  const extraIds = W06_ADDED_RECORD_IDS.filter((recordId) => w05.manifest.sourceInput.projectedIds.includes(recordId));
  if (extraIds.length) throw new Error('A W06-only record unexpectedly overlaps the frozen W05 projection: ' + extraIds.join(', '));

  const currentCode = getPinnedRawCodeManifest(w05.manifest);
  const currentSnapshot = {
    snapshotId: 'psyker-skills-blessings-1.13.2-18-files',
    commit: CURRENT_CODE_COMMIT,
    manifestSha256: currentCode.manifestSha256,
    contentSha256: currentCode.contentSha256
  };
  const contract = structuredClone(w05.contract);
  const currentRelease = contract.gameReleases.find((release) => release.gameReleaseId === CURRENT_RELEASE_ID);
  if (!currentRelease) throw new Error('The W05 base contract is missing the current release.');
  currentRelease.snapshot = structuredClone(currentSnapshot);
  for (const source of contract.sourceRefs) {
    if (source.gameReleaseId === CURRENT_RELEASE_ID) source.snapshot = structuredClone(currentSnapshot);
  }
  const sourceMap = new Map(authoring.sourceRefs.map((source) => [source.sourceId, source]));
  const oldCurrentSourceIds = new Set(contract.sourceRefs.filter((source) => source.gameReleaseId === CURRENT_RELEASE_ID).map((source) => source.sourceId));
  const newSources = NEW_CODE_SOURCES.map((artifact) => {
    if (oldCurrentSourceIds.has(artifact.sourceId)) throw new Error('W06 source already exists in the W05 base: ' + artifact.sourceId);
    const source = sourceMap.get(artifact.sourceId);
    if (!source) throw new Error('Fixed W01 candidate is missing W06 source metadata: ' + artifact.sourceId);
    return { artifact, source };
  });
  const tool = {
    name: TOOL_NAME,
    version: TOOL_VERSION,
    sha256: textArtifactSha256(await readFile(fileURLToPath(import.meta.url)))
  };
  contract.sourceRefs.push(...newSources.map(({ source, artifact }) => makeNewCodeSource(source, artifact, currentSnapshot, tool)));
  contract.sourceRefs.sort((left, right) => {
    const releaseCompare = (left.gameReleaseId === 'darktide:1.13.1' ? 0 : 1) - (right.gameReleaseId === 'darktide:1.13.1' ? 0 : 1);
    return releaseCompare || compareText(left.sourceId, right.sourceId);
  });

  const skillId = 'darktide:skill:psyker:brain-burst-improved';
  const displayClaimId = W06_ADDED_RECORD_IDS[0];
  const skill = contract.records.find((record) => record.recordId === skillId);
  if (!skill || skill.kind !== 'skill') throw new Error('The W05 base contract is missing the fixed Psyker skill.');
  skill.payload.claimRefs.push(recordRef(displayClaimId));
  const addedRecords = W06_ADDED_RECORD_IDS.map((recordId) => mapNewRecord(candidateById.get(recordId), sourceMap));
  contract.records.push(...addedRecords);

  const originalProjectedIds = [...new Set([...w05.manifest.sourceInput.projectedIds, ...W06_ADDED_RECORD_IDS])].sort(compareText);
  const manifest = structuredClone(w05.manifest);
  manifest.schemaVersion = 'w06-skills-blessings-import/1.0.0';
  manifest.sourceInput = {
    ...manifest.sourceInput,
    projectedOriginalRecordCount: originalProjectedIds.length,
    projectedIds: originalProjectedIds
  };
  manifest.sourceSnapshots.current = structuredClone(currentSnapshot);
  manifest.sources.mapper = { name: TOOL_NAME, version: TOOL_VERSION, sha256: tool.sha256 };
  manifest.sources.sourceIds = [...new Set(contract.sourceRefs.map((source) => source.sourceId))].sort(compareText);
  manifest.sources.sourceReferenceOccurrences = [
    ...manifest.sources.sourceReferenceOccurrences,
    ...addedRecords.map((record) => ({
      recordId: record.recordId,
      gameReleaseId: record.gameReleaseId,
      sourceIdsInInputOrder: (candidateById.get(record.recordId).sourceRefs ?? []).slice()
    }))
  ];
  manifest.currentCodeSnapshot = {
    repository: CODE_REPOSITORY,
    commit: CURRENT_CODE_COMMIT,
    snapshotId: currentSnapshot.snapshotId,
    scope: 'Exactly 18 selected current-code files: the W05 cited 15-file projection plus the three W06 code sources. This is not a full repository, game, Steam-build, or runtime equivalence claim.',
    previousW05Snapshot: {
      snapshotId: 'psyker-cited-code-1.13.2-15-files',
      manifestSha256: w05.contract.gameReleases.find((release) => release.gameReleaseId === CURRENT_RELEASE_ID).snapshot.manifestSha256,
      contentSha256: w05.contract.gameReleases.find((release) => release.gameReleaseId === CURRENT_RELEASE_ID).snapshot.contentSha256,
      fileCount: 15
    },
    manifestSha256: currentCode.manifestSha256,
    contentSha256: currentCode.contentSha256,
    contentDigestAlgorithm: 'SHA-256 over ordinally sorted selected paths, a NUL byte, exact raw Git blob bytes, and a trailing NUL byte per file.',
    manifestAlgorithm: 'SHA-256 of compact JSON rows sorted by repository-relative path with keys path, gitBlobSha1, byteCount, artifactSha256.',
    files: currentCode.rows,
    addedW06Sources: NEW_CODE_SOURCES.map((item) => ({
      sourceId: item.sourceId,
      path: item.path,
      gitBlobSha1: item.gitBlobSha1,
      byteCount: item.byteCount,
      artifactSha256: item.artifactSha256
    }))
  };
  manifest.contractRecordCount = contract.records.length;
  manifest.blessingProjection = {
    blessingRecordId: 'darktide:blessing:chainaxe:p1-movement-speed-on-activation',
    variantRecordId: 'darktide:blessing-variant:chainaxe:p1-movement-speed-on-activation',
    localizationKey: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
    tiers: [1, 2, 3, 4].map((tier) => ({
      tier,
      ratio: ['0.17', '0.18', '0.19', '0.2'][tier - 1],
      displayPercent: [17, 18, 19, 20][tier - 1],
      obtainable: { status: 'unknown', reasonCode: 'NOT_VERIFIED' }
    })),
    activeDurationParameter: { decimal: '2', unit: 's', runtimeEffectVerified: false }
  };
  manifest.weaponAssociations = [{
    recordId: 'darktide:weapon:chainaxe:p1-m1',
    blessingVariantId: 'darktide:blessing-variant:chainaxe:p1-movement-speed-on-activation',
    status: 'NOT_IMPORTED',
    reasonCode: 'NOT_IMPORTED',
    reason: 'The original W01 association is retained as provenance, but W07 weapon catalog import is outside the W06 Source closure.'
  }];
  manifest.review = { reviewState: 'pending', receipts: 0, fabricatedHumanReceipts: false };
  manifest.steamBuild = { status: 'UNVERIFIED', preciseBuildEstablished: false };
  const markdown = makeManifestMarkdown(manifest);
  return { contract, manifest, markdown };
}

async function preflightOutputs(outputs) {
  const existingBytes = await Promise.all(outputs.map(async (output) => {
    try {
      return await readFile(output.path);
    } catch (error) {
      if (error?.code === 'ENOENT') return undefined;
      throw error;
    }
  }));
  for (let index = 0; index < outputs.length; index += 1) {
    if (existingBytes[index] && !existingBytes[index].equals(outputs[index].bytes)) {
      throw new Error('Refusing to overwrite existing W06 output with different bytes: ' + outputs[index].label);
    }
  }
  return existingBytes;
}

export async function buildSkillsBlessingsBundle(options = {}) {
  return buildBundle(options);
}

export async function writeSkillsBlessingsOutputs({ outRoot = rootFromModule, bundle } = {}) {
  const result = bundle ?? await buildBundle({ sourceRoot: outRoot });
  const root = path.resolve(outRoot);
  const outputs = [
    {
      path: path.join(root, 'content', 'authoring', 'v2', 'w06-skills-blessings.json'),
      label: 'content/authoring/v2/w06-skills-blessings.json',
      bytes: Buffer.from(fileText(result.contract), 'utf8')
    },
    {
      path: path.join(root, 'docs', 'contracts', 'w06', 'source-import.json'),
      label: 'docs/contracts/w06/source-import.json',
      bytes: Buffer.from(fileText(result.manifest), 'utf8')
    },
    {
      path: path.join(root, 'docs', 'contracts', 'w06', 'source-import.md'),
      label: 'docs/contracts/w06/source-import.md',
      bytes: Buffer.from(result.markdown, 'utf8')
    }
  ];
  const existingBytes = await preflightOutputs(outputs);
  for (let index = 0; index < outputs.length; index += 1) {
    if (existingBytes[index] === undefined) {
      await mkdir(path.dirname(outputs[index].path), { recursive: true });
      await writeFile(outputs[index].path, outputs[index].bytes, { flag: 'wx' });
    }
  }
  return outputs.map((output) => output.label);
}

async function runCli(argv) {
  if (argv.length !== 1 || argv[0] !== '--write') {
    throw new Error('Usage: node scripts/content/contract-w06-skills.mjs --write');
  }
  const bundle = await buildBundle();
  const outputPaths = await writeSkillsBlessingsOutputs({ outRoot: rootFromModule, bundle });
  process.stdout.write(JSON.stringify({
    outputs: outputPaths,
    recordCount: bundle.contract.records.length,
    sourceRefCount: bundle.contract.sourceRefs.length,
    currentCodeFileCount: bundle.manifest.currentCodeSnapshot.files.length,
    build: UNVERIFIED_BUILD,
    publicationEligible: false,
    toolSha256: bundle.manifest.sources.mapper.sha256
  }) + '\n');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    await runCli(process.argv.slice(2));
  } catch (error) {
    process.stderr.write(error.message + '\n');
    process.exitCode = 1;
  }
}
