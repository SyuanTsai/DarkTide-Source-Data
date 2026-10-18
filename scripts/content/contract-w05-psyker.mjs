import { createHash } from 'node:crypto';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DATA_SOURCE_REPOSITORY = 'https://github.com/SyuanTsai/DarkTide-Source-Data';
const DATA_SOURCE_COMMIT = '67a175213c5222eb389672cc46aff9f93aed0f73';
const CODE_REPOSITORY = 'https://github.com/Aussiemon/Darktide-Source-Code';
const HISTORICAL_CODE_COMMIT = '7e662fcda16219d775b84af50322be2e9cd9d62e';
const CURRENT_CODE_COMMIT = 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e';
const MODS_REPOSITORY = 'https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods';
const MODS_COMMIT = '241ad76ce62330472aa423055a5b85db59bb6c0d';
const TOOL_NAME = 'w05-psyker-contract-mapper';
const TOOL_VERSION = '1.0.0';
const UNVERIFIED_BUILD = 'UNVERIFIED';
const EXPECTED_W01_SHA256 = '5201134d9913af3e89b437046bb6cfdd96bac92ab1c49a86e296d3051abf77bf';
const EXPECTED_PROVENANCE_SHA256 = 'f1b1cbcb70ae8df1d9e2f33b270d98edd3a1d99951e011a271d4f09df9ea3286';
const EXPECTED_HISTORICAL_CONTENT_SHA256 = '7124405ac4d524ee52d99fe936fb7b62bb9bc78a457648401f92be8964734052';
const EXPECTED_MANIFEST_SHA256 = '28bcb2490b628da9506e0face79266ec8714e919789b9cdb4ee471098f709e38';

const CODE_ARTIFACTS = Object.freeze([
  { sourceId: 'public-code:action-damage-target-ba6c148', path: 'scripts/extension_systems/weapon/actions/action_damage_target.lua', gitBlobSha1: '893011d7446d0ee3b4e6791bb8f5845c8daf4265', bytes: 8335, sha256: 'd5de5cbe6da6799fce363add729f8b50adf5c76e87bc445540fa69d1736a4625' },
  { sourceId: 'public-code:action-smite-targeting-ba6c148', path: 'scripts/extension_systems/weapon/actions/action_smite_targeting.lua', gitBlobSha1: '47c655fe4fe405532c417cdbd1122c400220744b', bytes: 7156, sha256: '0afa04420eacef88aa7e6046bd5a7f1f5bea1c288cd0b0d6e30aa78556e386b4' },
  { sourceId: 'public-code:charge-action-module-ba6c148', path: 'scripts/extension_systems/weapon/actions/modules/charge_action_module.lua', gitBlobSha1: '97a088567030c6dcfee114158ab9a065a8e7a923', bytes: 5299, sha256: '5b52ee91566fffe6093f95d63f065767a6d7c2a7eaf1f587f340f54ac855cc5f' },
  { sourceId: 'public-code:psyker-smite-targeting-module-ba6c148', path: 'scripts/extension_systems/weapon/actions/modules/psyker_smite_targeting_action_module.lua', gitBlobSha1: '383d5b48cc38be66730bb1e31ea597c1cd675e61', bytes: 3045, sha256: '2193328969ffbe2a5e6308bdfc9f4b10d9d19bb4759620731922a8ef2c3c4f88' },
  { sourceId: 'public-code:warp-charge-action-module-ba6c148', path: 'scripts/extension_systems/weapon/actions/modules/warp_charge_action_module.lua', gitBlobSha1: 'f2e3f34a6a0f8859dd7ea14f4647daf2e936fb95', bytes: 2132, sha256: 'bdf8fed3d1911de504fb1f1bdb024efb80c61c0a07004a4bb7c165ed38fd2dd2' },
  { sourceId: 'public-code:psyker-talents-ba6c148', path: 'scripts/settings/ability/archetype_talents/talents/psyker_talents.lua', gitBlobSha1: '10c18111bd0aa5283511a6b78b8244d041182c33', bytes: 94173, sha256: '30579fbf2807c1e3ca9bb6fff71aaa11b16c304776d388dde9398d58d7e87cca' },
  { sourceId: 'public-code:psyker-abilities-ba6c148', path: 'scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua', gitBlobSha1: 'fb1626cbfe5dcc01f6733434557515fa3026e26a', bytes: 5569, sha256: '37d7b5a55795eb13401496d9918fbdef053abd2b9688e7e38aba3f06b44f8b41' },
  { sourceId: 'public-code:psyker-buff-templates-ba6c148', path: 'scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua', gitBlobSha1: 'a4c87abf254c520ad57bd09df718d6ac458dd7d5', bytes: 142738, sha256: 'ac4fab1cf0d01e67252c8a97e4b64aaf92106780a079c287104a7c489376a93e' },
  { sourceId: 'public-code:psyker-damage-profile-ba6c148', path: 'scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua', gitBlobSha1: 'bf3cfb8939ca682cc1604d9d5cb37b506d11a19d', bytes: 21687, sha256: '04e6cf69ab2fcd5277e53c0d364d634cc9098b7c959e30f8ef8845ad03a48955' },
  { sourceId: 'public-code:weapon-charge-templates-ba6c148', path: 'scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua', gitBlobSha1: '8c0d08ae230c2db8b9fd28741daa57a188e544e7', bytes: 10009, sha256: '781af55855ec0b9e0483dd2bee266c3c03856c9708daac3067835db5b9c57055' },
  { sourceId: 'public-code:psyker-smite-action-ba6c148', path: 'scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua', gitBlobSha1: '09bae668c991438b9b72e9ef0549cc650bcd6ccd', bytes: 17508, sha256: '20bfcffee8fbfcffe0e9a54b699cade17064ddc2a3ad0469e7e5e6607b2f8912' },
  { sourceId: 'public-code:psyker-tree-ba6c148', path: 'scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua', gitBlobSha1: '657003b3b9c92f83fb7dedf7fb5b1d91360049f2', bytes: 56160, sha256: '38c600a3a4b6e5c78f2739e961402c16faf6d7bbfbcb0c273b66b1f69b526856' },
  { sourceId: 'public-code:damage-calculation-ba6c148', path: 'scripts/utilities/attack/damage_calculation.lua', gitBlobSha1: '0befe848712f85d0ae723168d8807d04b6aa280c', bytes: 50718, sha256: '0619a6fb71e770a72979747fd63f8f0a6919422f9bf8697c30923ede13c0b55d' },
  { sourceId: 'public-code:shared-overheat-warp-charge-ba6c148', path: 'scripts/utilities/shared_overheat_and_warp_charge_functions.lua', gitBlobSha1: 'b55bc8f7fa0235e81d4df4c02e6c7323f3f4f2d2', bytes: 3108, sha256: '01abab597c8c6d088757d6650037259e9494c3a539337793b9825e6a63644fc6' },
  { sourceId: 'public-code:warp-charge-ba6c148', path: 'scripts/utilities/warp_charge.lua', gitBlobSha1: '18b479af32968f8ba5f5e93b042fb3da616b7389', bytes: 17675, sha256: 'ac53a24303fc73a00a5e9c796e693f72c2f377e3c51d2e251df7729607f25890'
  }
]);

const HISTORICAL_RELEASE_ID = 'darktide:1.13.1';
const CURRENT_RELEASE_ID = 'darktide:1.13.2';
const SKILL_ID = 'darktide:skill:psyker:brain-burst-improved';
const COMPATIBILITY_ID = 'darktide:release-compatibility:psyker:scoped-cited-code';
const PROVENANCE_EVIDENCE_ID = 'darktide:evidence:psyker:scoped-code-snapshot-compatibility';
const LEGACY_ANALYSIS_SOURCE_ID = 'legacy:mods:psyker:brain-burst-improved:analysis-en';

const ARCHIVE_FILE_SPECS = Object.freeze([
  {
    archivePath: 'en/psyker_brain_burst_improved.md',
    sourcePath: 'Game Info/releases/1.13.X/skills/talents/Psyker/en/psyker_brain_burst_improved.md',
    dataRepositoryPath: 'content/legacy/mods/241ad76/psyker/en/psyker_brain_burst_improved.md',
    gitBlobSha1: 'e9b9fa2183b5310343f831f0dc55737d13c5a570',
    sha256: '0865a4c7c71e2fc21ed2c1c8d19c87e5cfbea3523a7ae957684ba5ce7d420403',
    bytes: 18196,
    usedForClaims: true
  },
  {
    archivePath: 'psyker_brain_burst_improved.md',
    sourcePath: 'Game Info/releases/1.13.X/skills/talents/Psyker/psyker_brain_burst_improved.md',
    dataRepositoryPath: 'content/legacy/mods/241ad76/psyker/psyker_brain_burst_improved.md',
    gitBlobSha1: 'c79b6f1dc3873621f904cbd7e389fc15b1a2f7c0',
    sha256: 'cedc22b9acc3f69d0ef1906ce254b60ad5782d42699b636c2348ca80841acbef',
    bytes: 14563,
    usedForClaims: false
  }
]);

const COMPATIBILITY_RATIONALE = 'The pinned public code snapshots have identical Git blob IDs for exactly the 15 unique files cited by the archived English analysis. This bounded comparison supports reusing those code references across the 1.13.1 and 1.13.2 snapshots only; it does not establish whole-repository, full-game, Steam-build, or runtime equivalence. Both precise Steam build mappings remain UNVERIFIED.';
const PROVENANCE_SAFE_SUMMARY = 'The pinned Source Data provenance file records identical Git blobs at the public code commits for exactly the 15 unique files cited by the archived English analysis (28 citation locators). This scope does not establish whole-repository, full-game, Steam-build, or runtime equivalence; precise Steam build mappings remain UNVERIFIED.';

const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const normalizedTextBytes = (value) => Buffer.from(value.toString('utf8').replaceAll('\r\n', '\n'), 'utf8');
const textArtifactSha256 = (value) => sha256(normalizedTextBytes(value));
const compareText = (left, right) => left < right ? -1 : left > right ? 1 : 0;
const rootFromModule = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const fileText = (value) => JSON.stringify(value, null, 2) + '\n';
const ref = (recordId, gameReleaseId, compatibilityRef) => {
  const value = { recordId, gameReleaseId };
  if (compatibilityRef) value.compatibilityRef = compatibilityRef;
  return value;
};
const sourceLink = (sourceId, gameReleaseId, compatibilityRef) => {
  const value = { sourceId, gameReleaseId };
  if (compatibilityRef) value.compatibilityRef = compatibilityRef;
  return value;
};
const coverage = () => ({ status: 'complete', missing: [] });
const targets = (...pairs) => pairs.map(([fieldPath, dimension]) => ({ fieldPath, dimension }));
const mapReference = (sourceId, { compatibility = false } = {}) => {
  if (sourceId === LEGACY_ANALYSIS_SOURCE_ID) {
    return sourceLink(sourceId, HISTORICAL_RELEASE_ID, compatibility ? COMPATIBILITY_ID : undefined);
  }
  if (!sourceId.startsWith('public-code:')) throw new Error('Unsupported source ID in selected W01 closure: ' + sourceId);
  return sourceLink(sourceId, CURRENT_RELEASE_ID);
};

function assertExpectedDigest(label, actual, expected) {
  if (actual !== expected) throw new Error(label + ' SHA-256 mismatch: expected ' + expected + ', found ' + actual);
}

async function readPinnedInputs(sourceRoot) {
  const authoringPath = path.join(sourceRoot, 'content', 'authoring', 'w01-real-representative-candidate.json');
  const provenancePath = path.join(sourceRoot, 'content', 'legacy', 'mods', '241ad76', 'psyker', 'provenance.json');
  const authoringBytes = await readFile(authoringPath);
  const provenanceBytes = await readFile(provenancePath);
  const authoringSha256 = textArtifactSha256(authoringBytes);
  assertExpectedDigest('W01 candidate Git bytes', authoringSha256, EXPECTED_W01_SHA256);
  const provenanceSha256 = textArtifactSha256(provenanceBytes);
  assertExpectedDigest('Legacy provenance Git bytes', provenanceSha256, EXPECTED_PROVENANCE_SHA256);

  const authoring = JSON.parse(authoringBytes.toString('utf8'));
  const provenance = JSON.parse(provenanceBytes.toString('utf8'));
  if (authoring.gameReleaseId !== CURRENT_RELEASE_ID || authoring.gameVersion !== '1.13.2') {
    throw new Error('The pinned W01 candidate no longer identifies the expected 1.13.2 source snapshot.');
  }
  if (provenance.legacyArchive?.repository !== MODS_REPOSITORY || provenance.legacyArchive?.commit !== MODS_COMMIT
    || provenance.legacyArchive?.gameRelease !== '1.13.1') {
    throw new Error('The archived Mods source pin differs from the fixed public provenance.');
  }
  if (provenance.sourceCodeComparison?.repository !== CODE_REPOSITORY
    || provenance.sourceCodeComparison?.historical?.commit !== HISTORICAL_CODE_COMMIT
    || provenance.sourceCodeComparison?.target?.commit !== CURRENT_CODE_COMMIT
    || provenance.sourceCodeComparison?.uniqueFileCount !== CODE_ARTIFACTS.length
    || provenance.sourceCodeComparison?.allCitedBlobsIdentical !== true) {
    throw new Error('The scoped code comparison no longer matches the fixed public code snapshot pins.');
  }

  const archiveArtifacts = [];
  for (const expected of ARCHIVE_FILE_SPECS) {
    const bytes = await readFile(path.join(sourceRoot, ...expected.dataRepositoryPath.split('/')));
    assertExpectedDigest('Archive artifact ' + expected.archivePath, sha256(bytes), expected.sha256);
    if (bytes.byteLength !== expected.bytes) throw new Error('Archive byte count mismatch for ' + expected.archivePath);
    const provenanceFile = provenance.legacyArchive.files.find((file) => file.archivePath === expected.archivePath);
    if (!provenanceFile || provenanceFile.sha256 !== expected.sha256 || provenanceFile.gitBlobSha1 !== expected.gitBlobSha1
      || provenanceFile.bytes !== expected.bytes || provenanceFile.sourcePath !== expected.sourcePath) {
      throw new Error('Archive metadata differs from the pinned safe provenance for ' + expected.archivePath);
    }
    archiveArtifacts.push({ ...expected });
  }

  const codeRows = [];
  for (const expected of CODE_ARTIFACTS) {
    const provenanceFile = provenance.sourceCodeComparison.files.find((file) => file.sourceId === expected.sourceId);
    if (!provenanceFile || provenanceFile.path !== expected.path
      || provenanceFile.historicalBlobSha1 !== expected.gitBlobSha1
      || provenanceFile.currentBlobSha1 !== expected.gitBlobSha1) {
      throw new Error('Code artifact mapping differs from the pinned citation comparison for ' + expected.sourceId);
    }
    codeRows.push({ ...expected });
  }
  if (provenance.sourceCodeComparison.files.length !== codeRows.length
    || provenance.sourceCodeComparison.citationLocatorCount !== 28) {
    throw new Error('The fixed citation comparison must contain exactly 15 files and 28 citation locators.');
  }

  const manifestRows = [...codeRows].sort((a, b) => compareText(a.path, b.path)).map((item) => ({
    path: item.path,
    gitBlobSha1: item.gitBlobSha1,
    byteCount: item.bytes,
    artifactSha256: item.sha256
  }));
  const manifestSha256 = sha256(Buffer.from(JSON.stringify(manifestRows), 'utf8'));
  assertExpectedDigest('Selected-code manifest', manifestSha256, EXPECTED_MANIFEST_SHA256);

  return {
    authoring,
    provenance,
    authoringSha256,
    provenanceSha256,
    archiveArtifacts,
    codeRows,
    manifestRows,
    manifestSha256,
    contentSha256: EXPECTED_HISTORICAL_CONTENT_SHA256
  };
}

function snapshots(input) {
  const hashSet = {
    manifestSha256: input.manifestSha256,
    contentSha256: input.contentSha256
  };
  return {
    historical: {
      snapshotId: 'psyker-cited-code-1.13.1-15-files',
      commit: HISTORICAL_CODE_COMMIT,
      ...hashSet
    },
    current: {
      snapshotId: 'psyker-cited-code-1.13.2-15-files',
      commit: CURRENT_CODE_COMMIT,
      ...hashSet
    }
  };
}

function requiredClosure(authoring) {
  const recordById = new Map(authoring.records.map((record) => [record.recordId, record]));
  const skill = recordById.get(SKILL_ID);
  if (!skill || skill.kind !== 'skill') throw new Error('The fixed W01 candidate is missing the Psyker skill record.');
  const claimIds = skill.payload.claimRefs;
  const termId = skill.payload.termRef;
  const claims = claimIds.map((id) => {
    const item = recordById.get(id);
    if (!item || item.kind !== 'claim') throw new Error('The Psyker skill has a dangling or wrong-kind claim reference: ' + id);
    return item;
  });
  const term = recordById.get(termId);
  if (!term || term.kind !== 'term') throw new Error('The Psyker skill has a dangling or wrong-kind term reference.');
  const evidenceIds = [...new Set(claims.flatMap((claim) => claim.payload.evidenceRefs))].sort(compareText);
  const evidence = evidenceIds.map((id) => {
    const item = recordById.get(id);
    if (!item || item.kind !== 'evidence') throw new Error('A Psyker claim has a dangling or wrong-kind evidence reference: ' + id);
    return item;
  });
  const selected = [skill, ...claims, term, ...evidence];
  if (selected.length !== 15 || new Set(selected.map((item) => item.recordId)).size !== selected.length) {
    throw new Error('The fixed Psyker closure must contain exactly one skill, four claims, one term, and nine evidence records.');
  }
  if (claims.length !== 4 || evidence.length !== 9) throw new Error('The fixed Psyker closure is incomplete.');
  return { skill, claims, term, evidence, selected, recordById };
}

function historicalCodeSourceId(sourceId) {
  if (!sourceId.endsWith('-ba6c148')) throw new Error('Expected a current pinned code source ID: ' + sourceId);
  return sourceId.slice(0, -'-ba6c148'.length) + '-at-7e662fc';
}

function selectedSources(closure, sourceMap) {
  const usedIds = new Set(closure.selected.flatMap((record) => record.sourceRefs));
  const codeIds = [...usedIds].filter((id) => id.startsWith('public-code:')).sort(compareText);
  if (codeIds.length !== CODE_ARTIFACTS.length) throw new Error('The selected W01 closure must retain all 15 cited public-code sources.');
  if (!usedIds.has(LEGACY_ANALYSIS_SOURCE_ID) || usedIds.size !== codeIds.length + 1) {
    throw new Error('The selected W01 closure must retain its English legacy-analysis archive source.');
  }
  const historicalCodeIds = [...new Set(closure.evidence
    .filter((record) => record.recordId.includes('legacy-analysis'))
    .flatMap((record) => record.sourceRefs)
    .filter((sourceId) => sourceId.startsWith('public-code:'))
    .map(historicalCodeSourceId))].sort(compareText);
  if (historicalCodeIds.length !== CODE_ARTIFACTS.length) {
    throw new Error('The archived analysis source refs must preserve all 15 cited historical code files.');
  }
  const artifactIds = new Set(CODE_ARTIFACTS.map((item) => item.sourceId));
  if (codeIds.some((id) => !artifactIds.has(id))) throw new Error('The selected W01 closure contains an unmapped public-code source.');
  for (const sourceId of usedIds) if (!sourceMap.has(sourceId)) throw new Error('The selected W01 closure has a missing source record: ' + sourceId);
  return { usedIds, codeIds, historicalCodeIds };
}

function makeCodeSource(source, artifact, releaseId, commit, snapshot, tool, historical = false) {
  const safeSummary = historical
    ? source.safeSummary + ' The pinned citation comparison reports this exact Git blob at both the historical 1.13.1 code commit and current 1.13.2 code commit; this is limited to the cited file.'
    : source.safeSummary;
  return {
    sourceId: historical ? historicalCodeSourceId(source.sourceId) : source.sourceId,
    gameReleaseId: releaseId,
    sourceKind: 'public-code',
    repository: CODE_REPOSITORY,
    publicUrl: CODE_REPOSITORY + '/blob/' + commit + '/' + artifact.path,
    commit,
    path: artifact.path,
    gameBuild: UNVERIFIED_BUILD,
    snapshot: structuredClone(snapshot),
    tool,
    artifactSha256: artifact.sha256,
    safeSummary
  };
}

function makeArchiveSource(source, artifact, snapshot, tool) {
  const publicPath = 'content/legacy/mods/241ad76/psyker/' + artifact.archivePath;
  return {
    sourceId: source.sourceId,
    gameReleaseId: HISTORICAL_RELEASE_ID,
    sourceKind: 'archive',
    publicUrl: DATA_SOURCE_REPOSITORY + '/blob/' + DATA_SOURCE_COMMIT + '/' + publicPath,
    gameBuild: UNVERIFIED_BUILD,
    snapshot: structuredClone(snapshot),
    tool,
    artifactSha256: artifact.sha256,
    safeSummary: source.safeSummary + ' The byte-exact archive artifact is preserved in Source Data at its pinned public data snapshot; its provenance retains the original Mods repository pin.'
  };
}

function makeProvenanceSource(input, snapshot, tool) {
  const sourcePath = 'content/legacy/mods/241ad76/psyker/provenance.json';
  return {
    sourceId: 'public-data:psyker-scoped-release-compatibility-provenance',
    gameReleaseId: CURRENT_RELEASE_ID,
    sourceKind: 'public-data',
    publicUrl: DATA_SOURCE_REPOSITORY + '/blob/' + DATA_SOURCE_COMMIT + '/' + sourcePath,
    gameBuild: UNVERIFIED_BUILD,
    snapshot: structuredClone(snapshot),
    tool,
    artifactSha256: input.provenanceSha256,
    safeSummary: PROVENANCE_SAFE_SUMMARY
  };
}

function recordSourceLinks(record, { historicalEvidence = false, claim = false } = {}) {
  if (historicalEvidence) {
    return record.sourceRefs.map((sourceId) => sourceId === LEGACY_ANALYSIS_SOURCE_ID
      ? sourceLink(sourceId, HISTORICAL_RELEASE_ID)
      : sourceLink(historicalCodeSourceId(sourceId), HISTORICAL_RELEASE_ID));
  }
  return record.sourceRefs.map((sourceId) => mapReference(sourceId, { compatibility: claim }));
}

function mapRecord(record, closure, { compatibilityId = COMPATIBILITY_ID } = {}) {
  const historicalEvidence = record.kind === 'evidence' && record.recordId.includes('legacy-analysis');
  const gameReleaseId = historicalEvidence ? HISTORICAL_RELEASE_ID : CURRENT_RELEASE_ID;
  let payload;
  if (record.kind === 'skill') {
    payload = {
      nameKey: 'loc_talent_psyker_brain_burst_improved',
      claimRefs: record.payload.claimRefs.map((id) => ref(id, CURRENT_RELEASE_ID)),
      termRefs: [ref(record.payload.termRef, CURRENT_RELEASE_ID)]
    };
  } else if (record.kind === 'claim') {
    payload = {
      targetRef: ref(record.payload.targetRef, CURRENT_RELEASE_ID),
      property: record.payload.property,
      value: structuredClone(record.payload.value),
      context: structuredClone(record.payload.context),
      basis: record.payload.basis,
      evidenceRefs: record.payload.evidenceRefs.map((id) => {
        const target = closure.recordById.get(id);
        const isHistorical = target?.kind === 'evidence' && target.recordId.includes('legacy-analysis');
        return ref(id, isHistorical ? HISTORICAL_RELEASE_ID : CURRENT_RELEASE_ID, isHistorical ? compatibilityId : undefined);
      })
    };
  } else if (record.kind === 'term') {
    payload = {
      termKey: record.payload.termKey,
      contextKey: record.payload.contextKey,
      technicalDefinitionEn: record.payload.technicalDefinitionEn,
      claimRefs: record.payload.claimRefs.map((id) => ref(id, CURRENT_RELEASE_ID))
    };
  } else if (record.kind === 'evidence') {
    const sourceId = historicalEvidence ? LEGACY_ANALYSIS_SOURCE_ID : record.payload.sourceRef;
    const sourceReleaseId = historicalEvidence ? HISTORICAL_RELEASE_ID : CURRENT_RELEASE_ID;
    payload = {
      evidenceKind: historicalEvidence ? 'public-data' : 'code-observed',
      sourceRef: sourceLink(sourceId, sourceReleaseId),
      safeSummary: record.payload.safeSummary
    };
  } else {
    throw new Error('Unsupported kind in selected W01 closure: ' + record.kind);
  }

  const sourceRefs = recordSourceLinks(record, { historicalEvidence, claim: record.kind === 'claim' });
  if (record.kind === 'claim') {
    for (const source of sourceRefs) {
      if (source.gameReleaseId === HISTORICAL_RELEASE_ID && !source.compatibilityRef) source.compatibilityRef = compatibilityId;
    }
  }
  return {
    recordId: record.recordId,
    kind: record.kind,
    owner: 'source',
    gameReleaseId,
    payload,
    sourceRefs,
    dataCoverage: coverage(),
    reviewTargets: record.kind === 'skill'
      ? targets(['/payload/nameKey', 'identity'], ['/payload/claimRefs', 'evidence'], ['/payload/termRefs', 'evidence'])
      : record.kind === 'claim'
        ? targets(['/payload/targetRef', 'identity'], ['/payload/value', 'technical'], ['/payload/context', 'context'], ['/payload/basis', 'technical'], ['/payload/evidenceRefs', 'evidence'])
        : record.kind === 'term'
          ? targets(['/payload', 'technical'], ['/payload/claimRefs', 'evidence'])
          : targets(['/payload', 'evidence']),
    reviewState: 'pending'
  };
}

function makeCompatibilityRecords(provenanceSourceId) {
  const evidence = {
    recordId: PROVENANCE_EVIDENCE_ID,
    kind: 'evidence',
    owner: 'source',
    gameReleaseId: CURRENT_RELEASE_ID,
    payload: {
      evidenceKind: 'public-data',
      sourceRef: sourceLink(provenanceSourceId, CURRENT_RELEASE_ID),
      safeSummary: PROVENANCE_SAFE_SUMMARY
    },
    sourceRefs: [sourceLink(provenanceSourceId, CURRENT_RELEASE_ID)],
    dataCoverage: coverage(),
    reviewTargets: targets(['/payload', 'evidence']),
    reviewState: 'pending'
  };
  const compatibility = {
    recordId: COMPATIBILITY_ID,
    kind: 'release-compatibility',
    owner: 'source',
    gameReleaseId: CURRENT_RELEASE_ID,
    payload: {
      fromGameReleaseId: HISTORICAL_RELEASE_ID,
      toGameReleaseId: CURRENT_RELEASE_ID,
      evidenceRefs: [ref(PROVENANCE_EVIDENCE_ID, CURRENT_RELEASE_ID)],
      rationale: COMPATIBILITY_RATIONALE
    },
    sourceRefs: [sourceLink(provenanceSourceId, CURRENT_RELEASE_ID)],
    dataCoverage: coverage(),
    reviewTargets: targets(['/payload', 'compatibility'], ['/payload/evidenceRefs', 'evidence']),
    reviewState: 'pending'
  };
  return [evidence, compatibility];
}

async function buildBundle({ sourceRoot = rootFromModule } = {}) {
  const input = await readPinnedInputs(path.resolve(sourceRoot));
  const closure = requiredClosure(input.authoring);
  const oldSourceMap = new Map(input.authoring.sourceRefs.map((source) => [source.sourceId, source]));
  const { usedIds, codeIds, historicalCodeIds } = selectedSources(closure, oldSourceMap);
  const snapshotSet = snapshots(input);
  const tool = {
    name: TOOL_NAME,
    version: TOOL_VERSION,
    sha256: textArtifactSha256(await readFile(fileURLToPath(import.meta.url)))
  };
  const artifactBySource = new Map(input.codeRows.map((artifact) => [artifact.sourceId, artifact]));
  const sources = [];
  for (const sourceId of historicalCodeIds) {
    const currentSourceId = codeIds.find((candidate) => historicalCodeSourceId(candidate) === sourceId);
    sources.push(makeCodeSource(oldSourceMap.get(currentSourceId), artifactBySource.get(currentSourceId),
      HISTORICAL_RELEASE_ID, HISTORICAL_CODE_COMMIT, snapshotSet.historical, tool, true));
  }
  for (const sourceId of codeIds) {
    sources.push(makeCodeSource(oldSourceMap.get(sourceId), artifactBySource.get(sourceId),
      CURRENT_RELEASE_ID, CURRENT_CODE_COMMIT, snapshotSet.current, tool));
  }
  const legacySource = oldSourceMap.get(LEGACY_ANALYSIS_SOURCE_ID);
  const englishArchive = input.archiveArtifacts.find((item) => item.usedForClaims);
  sources.push(makeArchiveSource(legacySource, englishArchive, snapshotSet.historical, tool));
  const provenanceSource = makeProvenanceSource(input, snapshotSet.current, tool);
  sources.push(provenanceSource);
  sources.sort((a, b) => {
    const releaseCompare = (a.gameReleaseId === HISTORICAL_RELEASE_ID ? 0 : 1) - (b.gameReleaseId === HISTORICAL_RELEASE_ID ? 0 : 1);
    return releaseCompare || compareText(a.sourceId, b.sourceId);
  });

  const records = closure.selected.map((record) => mapRecord(record, closure));
  records.push(...makeCompatibilityRecords(provenanceSource.sourceId));
  const contract = {
    schemaVersion: '2.0.0',
    contractKind: 'source-technical',
    fixtureOnly: false,
    publicationEligible: false,
    gameReleases: [
      {
        gameReleaseId: HISTORICAL_RELEASE_ID,
        gameVersion: '1.13.1',
        gameBuild: UNVERIFIED_BUILD,
        releaseOrder: 1,
        snapshot: snapshotSet.historical
      },
      {
        gameReleaseId: CURRENT_RELEASE_ID,
        gameVersion: '1.13.2',
        gameBuild: UNVERIFIED_BUILD,
        releaseOrder: 2,
        snapshot: snapshotSet.current
      }
    ],
    sourceRefs: sources,
    records,
    tombstones: [],
    reviewReceipts: []
  };
  const manifest = {
    schemaVersion: 'w05-psyker-import/1.0.0',
    status: 'pending',
    publicationEligible: false,
    buildMapping: {
      gameBuild: UNVERIFIED_BUILD,
      preciseSteamBuildEstablished: false,
      restriction: 'This candidate is scoped to pinned public-code snapshots and the byte-exact 1.13.1 analysis archive. UNVERIFIED is an explicit quarantine marker; publication must reject it.'
    },
    sourceInput: {
      path: 'content/authoring/w01-real-representative-candidate.json',
      sha256: input.authoringSha256,
      originalRecordCount: input.authoring.records.length,
      projectedOriginalRecordCount: closure.selected.length,
      projectedIds: closure.selected.map((record) => record.recordId).sort(compareText)
    },
    archive: {
      repository: MODS_REPOSITORY,
      commit: MODS_COMMIT,
      gameRelease: '1.13.1',
      canonicalBytes: 'Raw Git blob bytes from the fixed Mods commit; the two archived language files are protected against EOL conversion.',
      files: input.archiveArtifacts.map((file) => ({
        archivePath: file.archivePath,
        sourcePath: file.sourcePath,
        dataRepositoryPath: file.dataRepositoryPath,
        gitBlobSha1: file.gitBlobSha1,
        sha256: file.sha256,
        bytes: file.bytes,
        usedForClaims: file.usedForClaims
      }))
    },
    sourceCodeComparison: {
      repository: CODE_REPOSITORY,
      historical: { gameRelease: '1.13.1', commit: HISTORICAL_CODE_COMMIT },
      current: { gameRelease: '1.13.2', commit: CURRENT_CODE_COMMIT },
      uniqueFileCount: input.provenance.sourceCodeComparison.uniqueFileCount,
      citationLocatorCount: input.provenance.sourceCodeComparison.citationLocatorCount,
      allCitedBlobsIdentical: input.provenance.sourceCodeComparison.allCitedBlobsIdentical,
      steamBuildEquivalenceEstablished: false,
      fullGameEquivalenceEstablished: false,
      runtimeEquivalenceEstablished: false,
      metadataBasis: 'Every listed byte count and artifact SHA-256 is measured from raw Git object bytes at the pinned public code commit; local checkout EOL conversion is excluded.',
      provenanceMetadataNote: 'The archived Source Data provenance records identical cited-file Git blob IDs, but its earlier byte counts and artifact hashes reflect a CRLF checkout representation. This import uses the raw Git byte metadata below.',
      selectedFileManifestSha256: input.manifestSha256,
      selectedFileContentSha256: input.contentSha256,
      contentDigestAlgorithm: 'SHA-256 over ordinally sorted selected paths, a NUL byte, exact raw file bytes, and a trailing NUL byte per file.',
      files: input.codeRows.map((file) => ({
        sourceId: file.sourceId,
        path: file.path,
        historicalGitBlobSha1: file.gitBlobSha1,
        currentGitBlobSha1: file.gitBlobSha1,
        byteCount: file.bytes,
        artifactSha256: file.sha256
      })).sort((a, b) => compareText(a.path, b.path))
    },
    skillIdentity: {
      recordId: SKILL_ID,
      nameKey: 'loc_talent_psyker_brain_burst_improved',
      field: 'display_name',
      observedValue: 'loc_talent_psyker_brain_burst_improved',
      sourceId: 'public-code:psyker-talents-ba6c148',
      repository: CODE_REPOSITORY,
      commit: CURRENT_CODE_COMMIT,
      path: 'scripts/settings/ability/archetype_talents/talents/psyker_talents.lua',
      lineStart: 231,
      lineEnd: 239
    },
    sourceSnapshots: {
      historical: snapshotSet.historical,
      current: snapshotSet.current,
      manifestAlgorithm: 'SHA-256 of compact JSON rows sorted by repository-relative path with keys path, gitBlobSha1, byteCount, artifactSha256.'
    },
    sources: {
      dataRepository: DATA_SOURCE_REPOSITORY,
      dataCommit: DATA_SOURCE_COMMIT,
      provenancePath: 'content/legacy/mods/241ad76/psyker/provenance.json',
      provenanceSha256: input.provenanceSha256,
      mapper: {
        name: TOOL_NAME,
        version: TOOL_VERSION,
        sha256: tool.sha256
      },
      sourceIds: [...new Set([...historicalCodeIds, ...usedIds, provenanceSource.sourceId])].sort(compareText),
      sourceIdMappings: codeIds.map((sourceId) => ({
        originalW01SourceId: sourceId,
        currentSourceId: sourceId,
        historicalSourceId: historicalCodeSourceId(sourceId),
        historicalCommit: HISTORICAL_CODE_COMMIT,
        currentCommit: CURRENT_CODE_COMMIT
      })).sort((a, b) => compareText(a.originalW01SourceId, b.originalW01SourceId)),
      sourceReferenceOccurrences: closure.selected.map((record) => ({
        recordId: record.recordId,
        gameReleaseId: record.kind === 'evidence' && record.recordId.includes('legacy-analysis') ? HISTORICAL_RELEASE_ID : CURRENT_RELEASE_ID,
        sourceIdsInInputOrder: record.sourceRefs.map((sourceId) =>
          record.kind === 'evidence' && record.recordId.includes('legacy-analysis') && sourceId.startsWith('public-code:')
            ? historicalCodeSourceId(sourceId)
            : sourceId)
      }))
    },
    compatibility: {
      recordId: COMPATIBILITY_ID,
      fromGameReleaseId: HISTORICAL_RELEASE_ID,
      toGameReleaseId: CURRENT_RELEASE_ID,
      rationale: COMPATIBILITY_RATIONALE,
      scope: 'Only the 15 code files cited by the archived English analysis; no whole-game, Steam-build, or runtime equivalence.'
    },
    review: {
      reviewState: 'pending',
      receipts: 0,
      fabricatedHumanReceipts: false
    }
  };
  return { contract, manifest };
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
    const existing = existingBytes[index];
    if (existing && !existing.equals(outputs[index].bytes)) {
      throw new Error('Refusing to overwrite existing W05 output with different bytes: ' + outputs[index].label);
    }
  }
  return existingBytes;
}

export async function buildPsykerCandidate(options = {}) {
  return (await buildBundle(options)).contract;
}

export async function buildPsykerImportManifest(options = {}) {
  return (await buildBundle(options)).manifest;
}

export async function buildPsykerImportBundle(options = {}) {
  return buildBundle(options);
}

async function runCli(argv) {
  if (argv.length !== 1 || argv[0] !== '--write') {
    throw new Error('Usage: node scripts/content/contract-w05-psyker.mjs --write');
  }
  const { contract, manifest } = await buildBundle();
  const candidatePath = path.join(rootFromModule, 'content', 'authoring', 'v2', 'w05-psyker.json');
  const manifestPath = path.join(rootFromModule, 'docs', 'contracts', 'w05', 'psyker-import.json');
  await mkdir(path.dirname(candidatePath), { recursive: true });
  await mkdir(path.dirname(manifestPath), { recursive: true });
  const outputs = [
    { path: candidatePath, label: 'content/authoring/v2/w05-psyker.json', bytes: Buffer.from(fileText(contract), 'utf8') },
    { path: manifestPath, label: 'docs/contracts/w05/psyker-import.json', bytes: Buffer.from(fileText(manifest), 'utf8') }
  ];
  const existingBytes = await preflightOutputs(outputs);
  for (let index = 0; index < outputs.length; index += 1) {
    if (existingBytes[index] === undefined) {
      await writeFile(outputs[index].path, outputs[index].bytes, { flag: 'wx' });
    }
  }
  process.stdout.write(JSON.stringify({
    candidatePath: path.relative(rootFromModule, candidatePath).replaceAll(path.sep, '/'),
    manifestPath: path.relative(rootFromModule, manifestPath).replaceAll(path.sep, '/'),
    recordCount: contract.records.length,
    sourceRefCount: contract.sourceRefs.length,
    build: UNVERIFIED_BUILD,
    publicationEligible: false,
    toolSha256: manifest.sources.mapper.sha256
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
