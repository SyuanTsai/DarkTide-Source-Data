import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
  buildPsykerCandidate,
  buildPsykerImportBundle,
  buildPsykerImportManifest
} from '../scripts/content/contract-w05-psyker.mjs';
import { validateSourceContractFromDisk } from '../scripts/content/contract-validator.mjs';

const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const authoringPath = path.join(sourceRoot, 'content', 'authoring', 'w01-real-representative-candidate.json');
const skillId = 'darktide:skill:psyker:brain-burst-improved';
const historicalReleaseId = 'darktide:1.13.1';
const currentReleaseId = 'darktide:1.13.2';
const compatibilityId = 'darktide:release-compatibility:psyker:scoped-cited-code';

const refIds = (refs) => refs.map((ref) => ref.recordId);
const rawGitCodeFixture = [
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
  { sourceId: 'public-code:warp-charge-ba6c148', path: 'scripts/utilities/warp_charge.lua', gitBlobSha1: '18b479af32968f8ba5f5e93b042fb3da616b7389', bytes: 17675, sha256: 'ac53a24303fc73a00a5e9c796e693f72c2f377e3c51d2e251df7729607f25890' }
];

// Scenario: Given the fixed W01 representative input and its pinned source manifest, when the Psyker mapper builds v2, it retains only the complete Psyker closure and preserves each authored claim's exact meaning and source lineage.
// Purpose: Prevent a partial import, accidental broad import, build fabrication, or semantic drift in the first real W05 candidate.
test('UnitT10_projects-fixed-psyker-closure-with-original-claims-and-pending-review', async () => {
  const authoring = JSON.parse(await readFile(authoringPath, 'utf8'));
  const skillInput = authoring.records.find((record) => record.recordId === skillId);
  const contract = await buildPsykerCandidate({ sourceRoot });
  const manifest = await buildPsykerImportManifest({ sourceRoot });
  const skill = contract.records.find((record) => record.recordId === skillId);
  const claimIds = skillInput.payload.claimRefs;
  const selectedClaims = authoring.records.filter((record) => claimIds.includes(record.recordId));
  const termId = skillInput.payload.termRef;
  const evidenceIds = [...new Set(selectedClaims.flatMap((record) => record.payload.evidenceRefs))].sort();
  const originalClosureIds = [skillId, termId, ...claimIds, ...evidenceIds].sort();
  const mappedOriginalIds = contract.records.filter((record) => originalClosureIds.includes(record.recordId)).map((record) => record.recordId).sort();

  assert.equal(contract.schemaVersion, '2.0.0');
  assert.equal(contract.contractKind, 'source-technical');
  assert.equal(contract.fixtureOnly, false);
  assert.equal(contract.publicationEligible, false);
  assert.deepEqual(contract.reviewReceipts, []);
  assert.deepEqual(mappedOriginalIds, originalClosureIds);
  assert.equal(contract.records.filter((record) => record.kind === 'claim').length, 4);
  assert.equal(contract.records.filter((record) => record.kind === 'evidence').length, 10);
  assert.equal(contract.records.filter((record) => record.kind === 'term').length, 1);
  assert.equal(contract.records.filter((record) => record.kind === 'release-compatibility').length, 1);
  assert.equal(contract.records.length, 17);
  assert.deepEqual(refIds(skill.payload.claimRefs), claimIds);
  assert.deepEqual(refIds(skill.payload.termRefs), [termId]);
  assert.equal(skill.payload.nameKey, 'loc_talent_psyker_brain_burst_improved');
  assert.ok(contract.records.every((record) => record.reviewState === 'pending'));
  assert.ok(contract.records.every((record) => record.owner === 'source'));
  assert.ok(contract.gameReleases.every((release) => release.gameBuild === 'UNVERIFIED'));
  assert.deepEqual(contract.gameReleases.map((release) => release.gameVersion), ['1.13.1', '1.13.2']);
  assert.deepEqual(contract.gameReleases.map((release) => release.snapshot.commit), [
    '7e662fcda16219d775b84af50322be2e9cd9d62e',
    'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e'
  ]);
  assert.equal(contract.gameReleases[0].snapshot.manifestSha256, contract.gameReleases[1].snapshot.manifestSha256);
  assert.equal(contract.gameReleases[0].snapshot.contentSha256, contract.gameReleases[1].snapshot.contentSha256);

  for (const authoredClaim of selectedClaims) {
    const imported = contract.records.find((record) => record.recordId === authoredClaim.recordId);
    assert.deepEqual(imported.payload.value, authoredClaim.payload.value);
    assert.deepEqual(imported.payload.context, authoredClaim.payload.context);
    assert.equal(imported.payload.basis, authoredClaim.payload.basis);
    assert.equal(imported.payload.property, authoredClaim.payload.property);
    assert.equal(imported.payload.targetRef.recordId, authoredClaim.payload.targetRef);
    assert.equal(imported.payload.targetRef.gameReleaseId, currentReleaseId);
    assert.deepEqual(refIds(imported.payload.evidenceRefs), authoredClaim.payload.evidenceRefs);
    assert.ok(imported.payload.evidenceRefs.filter((ref) => evidenceIds.includes(ref.recordId) && ref.recordId.includes('legacy-analysis'))
      .every((ref) => ref.gameReleaseId === historicalReleaseId && ref.compatibilityRef === compatibilityId));
    const legacySource = imported.sourceRefs.find((ref) => ref.sourceId === 'legacy:mods:psyker:brain-burst-improved:analysis-en');
    if (authoredClaim.sourceRefs.includes('legacy:mods:psyker:brain-burst-improved:analysis-en')) {
      assert.equal(legacySource.gameReleaseId, historicalReleaseId);
      assert.equal(legacySource.compatibilityRef, compatibilityId);
    } else {
      assert.equal(legacySource, undefined);
    }
  }

  const archiveEvidence = contract.records.filter((record) => record.kind === 'evidence' && evidenceIds.includes(record.recordId) && record.recordId.includes('legacy-analysis'));
  assert.equal(archiveEvidence.length, 6);
  for (const record of archiveEvidence) {
    const original = authoring.records.find((item) => item.recordId === record.recordId);
    const expectedSources = original.sourceRefs.map((sourceId) => sourceId.startsWith('public-code:')
      ? sourceId.replace(/-ba6c148$/u, '-at-7e662fc')
      : sourceId);
    assert.equal(record.gameReleaseId, historicalReleaseId);
    assert.equal(record.payload.evidenceKind, 'public-data');
    assert.equal(record.payload.sourceRef.sourceId, 'legacy:mods:psyker:brain-burst-improved:analysis-en');
    assert.equal(record.payload.sourceRef.gameReleaseId, historicalReleaseId);
    assert.deepEqual(record.sourceRefs.map((source) => source.sourceId), expectedSources);
    assert.ok(record.sourceRefs.every((source) => source.gameReleaseId === historicalReleaseId));
  }

  const compatibility = contract.records.find((record) => record.recordId === compatibilityId);
  assert.equal(compatibility.gameReleaseId, currentReleaseId);
  assert.equal(compatibility.payload.fromGameReleaseId, historicalReleaseId);
  assert.equal(compatibility.payload.toGameReleaseId, currentReleaseId);
  assert.match(compatibility.payload.rationale, /15 unique files cited/u);
  assert.match(compatibility.payload.rationale, /Steam-build|Steam build/u);
  assert.ok(contract.sourceRefs.every((source) => source.gameBuild === 'UNVERIFIED'));
  assert.equal(contract.sourceRefs.filter((source) => source.sourceKind === 'public-code').length, 30);
  assert.equal(contract.sourceRefs.filter((source) => source.sourceKind === 'public-code' && source.gameReleaseId === historicalReleaseId).length, 15);
  assert.equal(contract.sourceRefs.filter((source) => source.sourceKind === 'public-code' && source.gameReleaseId === currentReleaseId).length, 15);
  assert.equal(contract.sourceRefs.filter((source) => source.sourceKind === 'archive').length, 1);
  assert.equal(contract.sourceRefs.filter((source) => source.sourceKind === 'public-data').length, 1);
  assert.equal(contract.sourceRefs.length, 32);
  assert.ok(contract.sourceRefs.every((source) => !('fixtureOnly' in source)));
  assert.ok(contract.sourceRefs.every((source) => source.tool.sha256 === manifest.sources.mapper.sha256));
  assert.ok(contract.sourceRefs.filter((source) => source.sourceKind !== 'public-code')
    .every((source) => !('repository' in source) && !('commit' in source) && !('path' in source)));
  assert.equal(manifest.sourceCodeComparison.uniqueFileCount, 15);
  assert.equal(manifest.sourceCodeComparison.allCitedBlobsIdentical, true);
  assert.equal(manifest.sourceCodeComparison.steamBuildEquivalenceEstablished, false);
  assert.equal(manifest.sourceCodeComparison.selectedFileManifestSha256, '28bcb2490b628da9506e0face79266ec8714e919789b9cdb4ee471098f709e38');
  assert.equal(manifest.sourceCodeComparison.selectedFileContentSha256, '7124405ac4d524ee52d99fe936fb7b62bb9bc78a457648401f92be8964734052');
  assert.match(manifest.sourceCodeComparison.metadataBasis, /raw Git object bytes/u);
  assert.match(manifest.sourceCodeComparison.provenanceMetadataNote, /CRLF checkout representation/u);
  const mapperBytes = await readFile(new URL('../scripts/content/contract-w05-psyker.mjs', import.meta.url));
  const mapperSha256 = createHash('sha256').update(Buffer.from(mapperBytes.toString('utf8').replaceAll('\r\n', '\n'), 'utf8')).digest('hex');
  assert.equal(manifest.sources.mapper.sha256, mapperSha256);
  assert.deepEqual(manifest.sourceCodeComparison.files.map((row) => ({
    sourceId: row.sourceId,
    path: row.path,
    gitBlobSha1: row.currentGitBlobSha1,
    bytes: row.byteCount,
    sha256: row.artifactSha256
  })), [...rawGitCodeFixture].sort((left, right) => left.path < right.path ? -1 : left.path > right.path ? 1 : 0));
  assert.equal(manifest.archive.files.length, 2);
  assert.equal(manifest.archive.files[0].sha256, '0865a4c7c71e2fc21ed2c1c8d19c87e5cfbea3523a7ae957684ba5ce7d420403');
  assert.equal(manifest.archive.files[1].sha256, 'cedc22b9acc3f69d0ef1906ce254b60ad5782d42699b636c2348ca80841acbef');
  assert.deepEqual(manifest.skillIdentity, {
    recordId: skillId,
    nameKey: 'loc_talent_psyker_brain_burst_improved',
    field: 'display_name',
    observedValue: 'loc_talent_psyker_brain_burst_improved',
    sourceId: 'public-code:psyker-talents-ba6c148',
    repository: 'https://github.com/Aussiemon/Darktide-Source-Code',
    commit: 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e',
    path: 'scripts/settings/ability/archetype_talents/talents/psyker_talents.lua',
    lineStart: 231,
    lineEnd: 239
  });
  assert.deepEqual(manifest.sources.sourceReferenceOccurrences.map((row) => ({
    recordId: row.recordId,
    gameReleaseId: row.gameReleaseId,
    sourceIdsInInputOrder: row.sourceIdsInInputOrder
  })), [skillId, ...claimIds, termId, ...evidenceIds].map((recordId) => {
    const original = authoring.records.find((record) => record.recordId === recordId);
    const isHistorical = original.kind === 'evidence' && original.recordId.includes('legacy-analysis');
    return {
      recordId,
      gameReleaseId: isHistorical ? historicalReleaseId : currentReleaseId,
      sourceIdsInInputOrder: original.sourceRefs.map((sourceId) => isHistorical && sourceId.startsWith('public-code:')
        ? sourceId.replace(/-ba6c148$/u, '-at-7e662fc')
        : sourceId)
    };
  }));
});

// Scenario: Given a candidate with complete field-level and cross-release references, when the repository's v2 validator checks it, it accepts the pending candidate while deriving publication ineligibility.
// Purpose: Verify the mapper output against the real schema and semantic validator, including the explicit historical-analysis compatibility edge.
test('InterT10_validates-real-pending-candidate-and-cross-release-source-closure', async () => {
  const contract = await buildPsykerCandidate({ sourceRoot });
  const result = await validateSourceContractFromDisk(contract, { sourceRoot });

  assert.equal(result.valid, true, JSON.stringify(result.issues, null, 2));
  assert.equal(result.publicationEligible, false);
  assert.equal(result.recordCount, 17);
  assert.equal(result.releaseCount, 2);
  assert.equal(result.sourceRefCount, 32);
});

// Scenario: Given a fixed W01 source file whose bytes have drifted from the pinned candidate, when the mapper reads the import root, it rejects the change before producing a candidate.
// Purpose: Ensure regeneration cannot silently change the historical evidence and source closure.
test('UnitT20_rejects-drift-in-fixed-W01-input-bytes', async () => {
  const tempRoot = await import('node:fs/promises').then(({ mkdtemp }) => mkdtemp(path.join(os.tmpdir(), 'w05-psyker-')));
  try {
    const relativeFiles = [
      'content/authoring/w01-real-representative-candidate.json',
      'content/legacy/mods/241ad76/psyker/provenance.json',
      'content/legacy/mods/241ad76/psyker/en/psyker_brain_burst_improved.md',
      'content/legacy/mods/241ad76/psyker/psyker_brain_burst_improved.md'
    ];
    for (const relativePath of relativeFiles) {
      const destination = path.join(tempRoot, relativePath);
      await mkdir(path.dirname(destination), { recursive: true });
      await copyFile(path.join(sourceRoot, relativePath), destination);
    }
    const inputPath = path.join(tempRoot, relativeFiles[0]);
    await writeFile(inputPath, (await readFile(inputPath, 'utf8')) + ' ', 'utf8');
    await assert.rejects(buildPsykerCandidate({ sourceRoot: tempRoot }), /W01 candidate Git bytes SHA-256 mismatch/u);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

// Scenario: Given pinned text inputs represented with either LF Git bytes or a CRLF checkout, when the mapper rebuilds the W05 bundle, it produces byte-for-byte equivalent contract and manifest objects.
// Purpose: Keep the public Git artifact pins stable across checkout line-ending settings without normalizing the archived bilingual evidence.
test('UnitT30_rebuilds-identically-from-lf-and-crlf-pinned-text-inputs', async () => {
  const tempRoot = await import('node:fs/promises').then(({ mkdtemp }) => mkdtemp(path.join(os.tmpdir(), 'w05-psyker-eol-')));
  const lfRoot = path.join(tempRoot, 'lf');
  const crlfRoot = path.join(tempRoot, 'crlf');
  const relativeFiles = [
    'content/authoring/w01-real-representative-candidate.json',
    'content/legacy/mods/241ad76/psyker/provenance.json',
    'content/legacy/mods/241ad76/psyker/en/psyker_brain_burst_improved.md',
    'content/legacy/mods/241ad76/psyker/psyker_brain_burst_improved.md'
  ];
  try {
    for (const relativePath of relativeFiles) {
      const bytes = await readFile(path.join(sourceRoot, relativePath));
      const lfPath = path.join(lfRoot, relativePath);
      const crlfPath = path.join(crlfRoot, relativePath);
      await mkdir(path.dirname(lfPath), { recursive: true });
      await mkdir(path.dirname(crlfPath), { recursive: true });
      if (relativePath.endsWith('.json')) {
        const text = bytes.toString('utf8').replaceAll('\r\n', '\n');
        await writeFile(lfPath, text.replaceAll('\r\n', '\n'), 'utf8');
        await writeFile(crlfPath, text.replaceAll('\n', '\r\n'), 'utf8');
      } else {
        await writeFile(lfPath, bytes);
        await writeFile(crlfPath, bytes);
      }
    }

    const baseline = await buildPsykerImportBundle({ sourceRoot });
    const lfBundle = await buildPsykerImportBundle({ sourceRoot: lfRoot });
    const crlfBundle = await buildPsykerImportBundle({ sourceRoot: crlfRoot });
    assert.deepEqual(lfBundle, baseline);
    assert.deepEqual(crlfBundle, baseline);
    assert.equal(lfBundle.manifest.sourceInput.sha256, '5201134d9913af3e89b437046bb6cfdd96bac92ab1c49a86e296d3051abf77bf');
    assert.equal(lfBundle.manifest.sources.provenanceSha256, 'f1b1cbcb70ae8df1d9e2f33b270d98edd3a1d99951e011a271d4f09df9ea3286');
    assert.equal(lfBundle.contract.publicationEligible, false);
    assert.ok(lfBundle.contract.gameReleases.every((release) => release.gameBuild === 'UNVERIFIED'));
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

// Scenario: Given freshly generated outputs or an existing candidate/manifest edited by a reviewer, when the CLI writes the W05 bundle, it is idempotent for identical bytes and refuses either changed output before touching either file.
// Purpose: Prevent regeneration from silently discarding a manual candidate edit or partially replacing the paired outputs.
test('InterT20_cli-preflights-both-output-files-and-refuses-overwrite', async () => {
  const tempRoot = await import('node:fs/promises').then(({ mkdtemp }) => mkdtemp(path.join(os.tmpdir(), 'w05-psyker-cli-')));
  const relativeFiles = [
    'content/authoring/w01-real-representative-candidate.json',
    'content/legacy/mods/241ad76/psyker/provenance.json',
    'content/legacy/mods/241ad76/psyker/en/psyker_brain_burst_improved.md',
    'content/legacy/mods/241ad76/psyker/psyker_brain_burst_improved.md',
    'scripts/content/contract-w05-psyker.mjs'
  ];
  const candidateRelative = 'content/authoring/v2/w05-psyker.json';
  const manifestRelative = 'docs/contracts/w05/psyker-import.json';
  const cliPath = path.join(tempRoot, relativeFiles.at(-1));
  const candidatePath = path.join(tempRoot, candidateRelative);
  const manifestPath = path.join(tempRoot, manifestRelative);
  const runCli = () => execFileSync(process.execPath, [cliPath, '--write'], { cwd: tempRoot, encoding: 'utf8' });
  const assertRefused = (expectedLabel) => assert.throws(runCli, (error) => {
    assert.equal(error.status, 1);
    assert.match(String(error.stderr), /Refusing to overwrite existing W05 output with different bytes/u);
    assert.match(String(error.stderr), new RegExp(expectedLabel.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&'), 'u'));
    return true;
  });

  try {
    for (const relativePath of relativeFiles) {
      const destination = path.join(tempRoot, relativePath);
      await mkdir(path.dirname(destination), { recursive: true });
      await copyFile(path.join(sourceRoot, relativePath), destination);
    }

    runCli();
    const originalCandidate = await readFile(candidatePath);
    const originalManifest = await readFile(manifestPath);
    runCli();
    assert.deepEqual(await readFile(candidatePath), originalCandidate);
    assert.deepEqual(await readFile(manifestPath), originalManifest);

    const editedCandidateObject = JSON.parse(originalCandidate.toString('utf8'));
    const editedClaim = editedCandidateObject.records.find((record) => record.kind === 'claim');
    editedClaim.payload.value.decimal = '9.75';
    const editedCandidate = Buffer.from(JSON.stringify(editedCandidateObject, null, 2) + '\n', 'utf8');
    await writeFile(candidatePath, editedCandidate);
    const candidateBeforeRefusal = await readFile(candidatePath);
    assertRefused(candidateRelative);
    assert.deepEqual(await readFile(candidatePath), candidateBeforeRefusal);
    assert.deepEqual(await readFile(manifestPath), originalManifest);

    await writeFile(candidatePath, originalCandidate);
    const editedManifest = Buffer.concat([originalManifest, Buffer.from(' \n', 'utf8')]);
    await writeFile(manifestPath, editedManifest);
    const candidateBeforeManifestRefusal = await readFile(candidatePath);
    const manifestBeforeRefusal = await readFile(manifestPath);
    assertRefused(manifestRelative);
    assert.deepEqual(await readFile(candidatePath), candidateBeforeManifestRefusal);
    assert.deepEqual(await readFile(manifestPath), manifestBeforeRefusal);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});
