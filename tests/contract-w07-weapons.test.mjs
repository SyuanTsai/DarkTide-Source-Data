import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  loadContractSchema,
  loadRepresentativeFixture,
  createReviewReceipt,
  computeReviewDigests,
  validateSourceContract
} from '../scripts/content/contract-validator.mjs';

const schema = await loadContractSchema();
const fixture = await loadRepresentativeFixture();
const SOURCE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w01 = JSON.parse(await readFile(new URL('../content/authoring/w01-real-representative-candidate.json', import.meta.url), 'utf8'));
const w07Weapons = JSON.parse(await readFile(new URL('../content/authoring/v2/w07-weapons.json', import.meta.url), 'utf8'));
const LEGACY_W07_RELEASE_ID = 'darktide:1.13.2';
const FROZEN_W07_BASE_COMMIT = 'a2f613edb37ea2653ed08d1fc1f65ea62a669528';
const FROZEN_W07_BASE_PATH = 'content/authoring/v2/w07-weapons.json';
const FROZEN_W07_BASE_BYTES = 6513034;
const FROZEN_W07_BASE_SHA256 = 'cc7975845b98eb3b82e24357c29f72e47569f063efd4f4ab10bd701798057d77';
const validate = (candidate) => validateSourceContract(candidate, { schema });
const isW13RangedRecord = (record) => record.recordId === 'darktide:weapon:lasgun:p1-m1'
  || record.recordId === 'darktide:damage-profile:lasgun-p1:default_lasgun_killshot'
  || record.recordId === 'darktide:damage-profile:lasgun-p1:lasgun_p1_m1_killshot'
  || record.recordId.startsWith('darktide:attack-profile:lasgun:p1:lasgun_p1_m1:')
  || record.recordId.startsWith('darktide:stat-curve:lasgun-p1-m1-ammo-')
  || record.recordId.startsWith('darktide:stat-definition:lasgun-p1-m1-ammo-');
const selectedCodeSnapshot = (snapshotId = 'fixture-selected-code-snapshot') => ({
  snapshotId,
  commit: 'a'.repeat(40),
  manifestSha256: 'b'.repeat(64),
  contentSha256: 'c'.repeat(64)
});
function bindSelectedCodeSnapshot(candidate, { gameReleaseId = 'fixture-r2', sourceId = 'fixture-public-code-r2', snapshot = selectedCodeSnapshot() } = {}) {
  candidate.sourceSnapshots = [{ gameReleaseId, snapshot: structuredClone(snapshot) }];
  const source = candidate.sourceRefs.find((item) => item.sourceId === sourceId);
  assert.ok(source, `Missing selected public-code source ${sourceId}`);
  source.commit = snapshot.commit;
  source.snapshot = structuredClone(snapshot);
  return source;
}

// Scenario: A real W01 chainaxe claim carries all five typed weapon context fields and a source display pair, while an attack profile identifies its pinned weapon template.
// Purpose: Preserve the exact typed W01 claim facts and allow an identity-safe templateKey branch without weakening the legacy itemKey branch.
test('UnitT00_real-chainaxe-context-display-and-template-identity-validate', () => {
  const candidate = structuredClone(fixture);
  const sourceClaim = w01.records.find((record) => record.recordId === 'darktide:claim:chainaxe:p1-m1-armor-penetration-light-super_armor-60');
  assert.ok(sourceClaim, 'The pinned W01 chainaxe claim must be present');

  const weaponRef = { recordId: 'fixture:weapon:alpha', gameReleaseId: 'fixture-r1' };
  const targetClaim = candidate.records.find((record) => record.recordId === 'fixture:claim:damage');
  targetClaim.payload.targetRef = weaponRef;
  targetClaim.payload.property = sourceClaim.payload.property;
  targetClaim.payload.value = structuredClone(sourceClaim.payload.value);
  targetClaim.payload.context = {
    weaponRef,
    weaponStat: sourceClaim.payload.context.weaponStat,
    comparisonStat: structuredClone(sourceClaim.payload.context.comparisonStat),
    attackMode: sourceClaim.payload.context.attackMode,
    profile: sourceClaim.payload.context.profile,
    armorClass: sourceClaim.payload.context.armorClass
  };
  targetClaim.payload.displayValue = structuredClone(sourceClaim.payload.displayValue);
  targetClaim.payload.displayFormat = sourceClaim.payload.displayFormat;

  const attack = candidate.records.find((record) => record.recordId === 'fixture:attack:alpha');
  delete attack.payload.itemKey;
  attack.payload.templateKey = 'fixture_template';

  const result = validate(candidate);
  assert.equal(result.valid, true, JSON.stringify(result.issues, null, 2));
});
// Scenario: A current-release public-code source uses a separately declared, release-scoped 34-file code snapshot while the game release retains its original snapshot.
// Purpose: Preserve the W06 release snapshot and reject provenance that is not bound to an exact declared source snapshot.
test('UnitT01_source-snapshot-can-coexist-with-fixed-release-snapshot', () => {
  const candidate = structuredClone(fixture);
  bindSelectedCodeSnapshot(candidate);

  const result = validate(candidate);
  assert.equal(result.valid, true, JSON.stringify(result.issues, null, 2));
});

// Scenario: A selected public-code snapshot is undeclared, shadows a release snapshot, crosses releases, or differs in identity/hash/commit.
// Purpose: Keep alternate source snapshots exact, unique, release-scoped and pinned to the same public-code commit.
test('UnitT02_selected-source-snapshot-rejects-unbound-or-inconsistent-provenance', () => {
  const unknownRelease = structuredClone(fixture);
  unknownRelease.sourceSnapshots = [{ gameReleaseId: 'fixture-r99', snapshot: selectedCodeSnapshot() }];
  assert.ok(validate(unknownRelease).issues.some((issue) => issue.code === 'unknown-source-snapshot-release'));

  const releaseShadow = structuredClone(fixture);
  const releaseSnapshot = releaseShadow.gameReleases.find((item) => item.gameReleaseId === 'fixture-r1').snapshot;
  releaseShadow.sourceSnapshots = [{ gameReleaseId: 'fixture-r1', snapshot: structuredClone(releaseSnapshot) }];
  assert.ok(validate(releaseShadow).issues.some((issue) => issue.code === 'duplicate-source-snapshot'));

  const crossRelease = structuredClone(fixture);
  bindSelectedCodeSnapshot(crossRelease, { gameReleaseId: 'fixture-r1' });
  assert.ok(validate(crossRelease).issues.some((issue) => issue.code === 'source-snapshot-release'));

  const unknownId = structuredClone(fixture);
  const unknownIdSource = unknownId.sourceRefs.find((item) => item.sourceId === 'fixture-public-code-r2');
  unknownIdSource.snapshot.snapshotId = 'fixture-undeclared-snapshot';
  assert.ok(validate(unknownId).issues.some((issue) => issue.code === 'snapshot-mismatch'));

  const hashMismatch = structuredClone(fixture);
  const hashMismatchSource = bindSelectedCodeSnapshot(hashMismatch);
  hashMismatchSource.snapshot.contentSha256 = 'd'.repeat(64);
  assert.ok(validate(hashMismatch).issues.some((issue) => issue.code === 'source-snapshot-mismatch'));

  const missingSnapshotCommit = structuredClone(fixture);
  const missingSnapshotCommitSource = bindSelectedCodeSnapshot(missingSnapshotCommit);
  delete missingSnapshotCommitSource.snapshot.commit;
  assert.ok(validate(missingSnapshotCommit).issues.some((issue) => issue.code === 'source-snapshot-commit-required'));

  const missingSourceCommit = structuredClone(fixture);
  const missingSourceCommitRef = bindSelectedCodeSnapshot(missingSourceCommit);
  delete missingSourceCommitRef.commit;
  assert.ok(validate(missingSourceCommit).issues.some((issue) => issue.path.startsWith('/sourceRefs/') && issue.message === 'Missing required property commit'));

  const commitMismatch = structuredClone(fixture);
  bindSelectedCodeSnapshot(commitMismatch).commit = 'e'.repeat(40);
  assert.ok(validate(commitMismatch).issues.some((issue) => issue.code === 'commit-mismatch'));
});

// Scenario: A weapon preserves a known stat-to-template mapping and its raw trait parameter range beside the frozen claims.
// Purpose: Keep original min/max mapping evidence distinct from claim samples and from panel or obtainable-tier ranges.
test('UnitT03_weapon-stat-binding-preserves-raw-trait-range-and-source-locators', () => {
  const candidate = structuredClone(fixture);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  const claim = candidate.records.find((record) => record.recordId === 'fixture:claim:r2');
  const weaponRef = { recordId: weapon.recordId, gameReleaseId: weapon.gameReleaseId };
  claim.payload.context = {
    ...claim.payload.context,
    weaponRef,
    weaponStat: 'chainaxe_dps_stat',
    attackMode: 'light',
    profile: 'fixture-profile',
    armorClass: 'armored'
  };
  weapon.payload.claimRefs = [...(weapon.payload.claimRefs ?? []), { recordId: claim.recordId, gameReleaseId: claim.gameReleaseId }];
  const sourceRef = { sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' };
  weapon.payload.statBindings = [{
    statKey: 'chainaxe_dps_stat',
    bindings: [{
      property: claim.payload.property,
      action: 'action_left_down_light',
      mode: 'light',
      profileKey: 'fixture-profile',
      armorClass: 'armored',
      weaponLocator: { sourceRef, path: 'fixture.lua', line: 1702, fieldPath: 'weapon_template.base_stats.chainaxe_dps_stat.damage.action_left_down_light' },
      traitTemplateKey: 'default_melee_dps_stat',
      traitLocator: { sourceRef, path: 'fixture.lua', line: 648, fieldPath: 'damage_trait_templates.default_melee_dps_stat' },
      traitParameterRange: { status: 'known', min: '0.25', max: '0.75', unit: 'ratio' },
      claimRefs: [{ recordId: claim.recordId, gameReleaseId: claim.gameReleaseId }]
    }]
  }];

  const result = validate(candidate);
  assert.equal(result.valid, true, JSON.stringify(result.issues, null, 2));
});

// Scenario: A pinned trait-parameter range has its endpoints reversed.
// Purpose: Reject malformed raw source bounds without treating them as UI or drop ranges.
test('UnitT04_weapon-stat-binding-rejects-inverted-source-range', () => {
  const candidate = structuredClone(fixture);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  weapon.payload.statBindings = [{
    statKey: 'chainaxe_dps_stat',
    bindings: [{
      property: 'fixture.damage',
      weaponLocator: { sourceRef: { sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' }, path: 'fixture.lua', line: 1702, fieldPath: 'weapon_template.base_stats.chainaxe_dps_stat' },
      traitTemplateKey: 'default_melee_dps_stat',
      traitLocator: { sourceRef: { sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' }, path: 'fixture.lua', line: 648, fieldPath: 'damage_trait_templates.default_melee_dps_stat' },
      traitParameterRange: { status: 'known', min: '0.75', max: '0.25', unit: 'ratio' }
    }]
  }];

  const result = validate(candidate);
  assert.ok(result.issues.some((issue) => issue.code === 'weapon-stat-range-inverted'));
});

// Scenario: A stat mapping claims a source field from a different weaponStat than the mapping declares.
// Purpose: Keep raw stat-to-claim relations aligned with the owning weapon and existing typed claim context.
test('UnitT05_weapon-stat-binding-rejects-claim-context-mismatch', () => {
  const candidate = structuredClone(fixture);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  const claim = candidate.records.find((record) => record.recordId === 'fixture:claim:r2');
  claim.payload.context = {
    ...claim.payload.context,
    weaponRef: { recordId: weapon.recordId, gameReleaseId: weapon.gameReleaseId },
    weaponStat: 'chainaxe_armor_pierce_stat'
  };
  weapon.payload.statBindings = [{
    statKey: 'chainaxe_dps_stat',
    bindings: [{
      property: claim.payload.property,
      weaponLocator: { sourceRef: { sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' }, path: 'fixture.lua', line: 1702, fieldPath: 'weapon_template.base_stats.chainaxe_dps_stat' },
      traitTemplateKey: 'default_melee_dps_stat',
      traitLocator: { sourceRef: { sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' }, path: 'fixture.lua', line: 648, fieldPath: 'damage_trait_templates.default_melee_dps_stat' },
      traitParameterRange: { status: 'known', min: '0.25', max: '0.75', unit: 'ratio' },
      claimRefs: [{ recordId: claim.recordId, gameReleaseId: claim.gameReleaseId }]
    }]
  }];

  const result = validate(candidate);
  assert.ok(result.issues.some((issue) => issue.code === 'weapon-stat-claim-binding'));
});

// Scenario: A field-path prefix merely starts with a stat key that belongs to another field.
// Purpose: Prevent adjacent key names from passing the weapon-stat source identity guard.
test('UnitT06_weapon-stat-binding-rejects-prefix-key-collision', () => {
  const candidate = structuredClone(fixture);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  weapon.payload.statBindings = [{
    statKey: 'chainaxe_dps_stat',
    bindings: [{
      property: 'fixture.damage',
      weaponLocator: { sourceRef: { sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' }, path: 'fixture.lua', line: 1702, fieldPath: 'weapon_template.base_stats.chainaxe_dps_stat_shadow' },
      traitTemplateKey: 'default_melee_dps_stat',
      traitLocator: { sourceRef: { sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' }, path: 'fixture.lua', line: 648, fieldPath: 'damage_trait_templates.default_melee_dps_stat' },
      traitParameterRange: { status: 'known', min: '0.25', max: '0.75', unit: 'ratio' }
    }]
  }];

  const result = validate(candidate);
  assert.ok(result.issues.some((issue) => issue.code === 'weapon-stat-source-field'));
});

// Scenario: A binding names an attack action absent from the selected weapon-template field path.
// Purpose: Keep action-specific source mappings tied to the exact action field rather than a neighboring action.
test('UnitT07_weapon-stat-binding-rejects-action-field-mismatch', () => {
  const candidate = structuredClone(fixture);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  weapon.payload.statBindings = [{
    statKey: 'chainaxe_dps_stat',
    bindings: [{
      property: 'fixture.damage',
      action: 'action_left_down_light',
      weaponLocator: { sourceRef: { sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' }, path: 'fixture.lua', line: 1702, fieldPath: 'weapon_template.base_stats.chainaxe_dps_stat.damage.action_left_heavy' },
      traitTemplateKey: 'default_melee_dps_stat',
      traitLocator: { sourceRef: { sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' }, path: 'fixture.lua', line: 648, fieldPath: 'damage_trait_templates.default_melee_dps_stat' },
      traitParameterRange: { status: 'known', min: '0.25', max: '0.75', unit: 'ratio' }
    }]
  }];

  const result = validate(candidate);
  assert.ok(result.issues.some((issue) => issue.code === 'weapon-stat-action-binding'));
});

// Scenario: A chainaxe retains its original displayed-attack summary separately from executable action/profile bindings.
// Purpose: Preserve player-facing summary segments while keeping their scope explicitly descriptive.
test('UnitT08_weapon-payload-preserves-display-summary-segments', () => {
  const candidate = structuredClone(fixture);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  const summary = structuredClone(w01.records.find((record) => record.kind === 'weapon' && record.recordId === 'darktide:weapon:chainaxe:p1-m1').payload.displayedAttacks[0]);
  summary.sourceRefs = [{ sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' }];
  summary.evidenceRefs = [{ recordId: 'fixture:evidence:r2', gameReleaseId: 'fixture-r2' }];
  weapon.payload.displayedAttacks = [summary];

  const result = validate(candidate);
  assert.equal(result.valid, true, JSON.stringify(result.issues, null, 2));
  assert.equal(weapon.payload.displayedAttacks[0].scope, 'display-summary');
});

// Scenario: A source profile is available only as ordered raw leaves and cannot truthfully be reduced to numeric damage segments.
// Purpose: Allow a typed raw-source profile branch without inventing an unknown segment or evaluating source aliases.
test('UnitT09_damage-profile-preserves-raw-source-definition', () => {
  const candidate = structuredClone(fixture);
  const profile = candidate.records.find((record) => record.kind === 'damage-profile');
  assert.ok(profile, 'The v2 fixture must include its legacy damage-profile record');
  const release = candidate.gameReleases.find((item) => item.gameReleaseId === profile.gameReleaseId);
  const baseCodeSource = candidate.sourceRefs.find((item) => item.sourceId === 'fixture-public-code-r2');
  const profileSource = {
    ...structuredClone(baseCodeSource),
    sourceId: 'fixture-profile-code-r1',
    gameReleaseId: profile.gameReleaseId,
    gameBuild: release.gameBuild,
    commit: release.snapshot.commit,
    snapshot: structuredClone(release.snapshot),
    path: 'fixture.lua',
    publicUrl: 'https://example.invalid/synthetic/game-code/blob/' + release.snapshot.commit + '/fixture.lua'
  };
  candidate.sourceRefs.push(profileSource);
  const sourceRef = { sourceId: profileSource.sourceId, gameReleaseId: profileSource.gameReleaseId };
  profile.sourceRefs = [sourceRef];
  profile.payload = {
    profileKey: 'fixture-profile',
    rawSourceDefinition: {
      sourceRef,
      path: 'fixture.lua',
      line: 12,
      fieldPath: 'damage_templates.fixture_profile',
      leaves: [
        { line: 13, fieldPath: 'damage_templates.fixture_profile.targets.1.power_distribution.attack.1', rawValue: '80' },
        { line: 14, fieldPath: 'damage_templates.fixture_profile.targets.1.power_distribution.attack.2', rawValue: '140' },
        { line: 15, fieldPath: 'damage_templates.fixture_profile.crit_mod', rawValue: 'chain_sword_crit_mod' }
      ]
    }
  };

  const result = validate(candidate);
  assert.equal(result.valid, true, JSON.stringify(result.issues, null, 2));
  assert.equal('segments' in profile.payload, false);
});

// Scenario: A profile tries to mix materialized segments with its raw source-definition representation.
// Purpose: Require one explicit owner representation so raw tables cannot be mistaken for calculated segments.
test('UnitT10_damage-profile-rejects-mixed-legacy-and-raw-source-shapes', () => {
  const candidate = structuredClone(fixture);
  const profile = candidate.records.find((record) => record.kind === 'damage-profile');
  profile.payload.rawSourceDefinition = {
    sourceRef: profile.sourceRefs[0],
    path: 'fixture.lua',
    line: 12,
    fieldPath: 'damage_templates.fixture_profile',
    leaves: [{ line: 13, fieldPath: 'damage_templates.fixture_profile.crit_mod', rawValue: 'chain_sword_crit_mod' }]
  };

  assert.equal(validate(candidate).valid, false);
});

// Scenario: A weapon's raw dodge output table contains two ordered interpolation points and unit-backed claims elsewhere.
// Purpose: Preserve source keys and point order as a table, distinct from the trait parameter range.
test('UnitT11_weapon-raw-stat-table-preserves-ordered-source-points', () => {
  const candidate = structuredClone(fixture);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  const sourceRef = { sourceId: 'fixture-public-code-r2', gameReleaseId: 'fixture-r2' };
  weapon.payload.statTables = [{
    statKey: 'chainaxe_mobility_stat',
    templateKey: 'smiter_plus',
    sourceLocator: { sourceRef, path: 'fixture.lua', line: 51, fieldPath: 'weapon_dodge_templates.smiter_plus' },
    properties: [{
      property: 'distance_scale',
      unit: 'ratio',
      sourceLocator: { sourceRef, path: 'fixture.lua', line: 52, fieldPath: 'weapon_dodge_templates.smiter_plus.distance_scale' },
      orderedValues: [
        { key: 'lerp_basic', rawValue: '0.85' },
        { key: 'lerp_perfect', rawValue: '1.05' }
      ]
    }]
  }];

  const result = validate(candidate);
  assert.equal(result.valid, true, JSON.stringify(result.issues, null, 2));
  assert.deepEqual(weapon.payload.statTables[0].properties[0].orderedValues.map((point) => point.key), ['lerp_basic', 'lerp_perfect']);
});

// Scenario: A curated profile references an alias table that was omitted from the fixed W07 input.
// Purpose: Fail closed when transitive table data is missing instead of emitting an incomplete weapon bundle.
test('UnitT12_w07-facts-reject-missing-transitive-alias-table', async () => {
  const { validateCuratedWeaponFacts } = await import('../scripts/content/contract-w07-weapons.mjs');
  const facts = JSON.parse(await readFile(new URL('../content/imports/w07/weapon-source-facts.json', import.meta.url), 'utf8'));
  facts.referencedAliasTables = facts.referencedAliasTables.filter((row) => row.aliasTableKey !== 'damage_lerp_values.lerp_0_25');

  assert.throws(() => validateCuratedWeaponFacts(facts), /Missing selected alias table/);
});

// Scenario: A raw damage profile names an invented source path or an unresolved/mistyped parent profile.
// Purpose: Keep W07 raw definition headers, leaves and typed parent links bound to real same-release public-code records.
test('UnitT13_raw-profile-provenance-and-parent-binding-rejects-mismatches', () => {
  const makeRawCandidate = (parentRawValue) => {
    const candidate = structuredClone(fixture);
    const profile = candidate.records.find((record) => record.kind === 'damage-profile');
    const release = candidate.gameReleases.find((item) => item.gameReleaseId === profile.gameReleaseId);
    const baseSource = candidate.sourceRefs.find((item) => item.sourceId === 'fixture-public-code-r2');
    const source = {
      ...structuredClone(baseSource),
      sourceId: 'fixture-profile-code-r1',
      gameReleaseId: profile.gameReleaseId,
      gameBuild: release.gameBuild,
      commit: release.snapshot.commit,
      snapshot: structuredClone(release.snapshot),
      path: 'fixture.lua',
      publicUrl: 'https://example.invalid/synthetic/game-code/blob/' + release.snapshot.commit + '/fixture.lua'
    };
    candidate.sourceRefs.push(source);
    const sourceRef = { sourceId: source.sourceId, gameReleaseId: source.gameReleaseId };
    profile.sourceRefs = [sourceRef];
    const leaves = [{
      line: 13,
      fieldPath: 'damage_templates.fixture_profile.targets.1.power_distribution.attack.1',
      rawValue: '80',
      sourceRef,
      path: source.path
    }];
    if (parentRawValue) leaves.push({
      line: 14,
      fieldPath: 'damage_templates.fixture_profile.parent_template_name',
      rawValue: parentRawValue,
      sourceRef,
      path: source.path
    });
    profile.payload = {
      profileKey: 'fixture-profile',
      rawSourceDefinition: {
        sourceRef,
        path: source.path,
        line: 12,
        fieldPath: 'damage_templates.fixture_profile',
        leaves
      }
    };
    return { candidate, profile };
  };

  const inventedPath = makeRawCandidate();
  inventedPath.profile.payload.rawSourceDefinition.path = 'invented.lua';
  assert.ok(validate(inventedPath.candidate).issues.some((issue) => issue.code === 'damage-profile-source-provenance'));

  const missingParent = makeRawCandidate('DamageProfileTemplates.other_profile');
  assert.ok(validate(missingParent.candidate).issues.some((issue) => issue.code === 'damage-profile-parent-binding'));

  const wrongKind = makeRawCandidate('DamageProfileTemplates.other_profile');
  wrongKind.profile.payload.rawSourceDefinition.parentProfileRef = { recordId: 'fixture:weapon:alpha', gameReleaseId: 'fixture-r1' };
  assert.ok(validate(wrongKind.candidate).issues.some((issue) => issue.code === 'damage-profile-parent-binding'));

  const wrongKey = makeRawCandidate('DamageProfileTemplates.other_profile');
  wrongKey.profile.payload.rawSourceDefinition.parentProfileRef = { recordId: wrongKey.profile.recordId, gameReleaseId: wrongKey.profile.gameReleaseId };
  assert.ok(validate(wrongKey.candidate).issues.some((issue) => issue.code === 'damage-profile-parent-binding'));

  const wrongRelease = makeRawCandidate('DamageProfileTemplates.other_profile');
  wrongRelease.profile.payload.rawSourceDefinition.parentProfileRef = { recordId: wrongRelease.profile.recordId, gameReleaseId: 'fixture-r2' };
  assert.ok(validate(wrongRelease.candidate).issues.some((issue) => issue.code === 'damage-profile-parent-binding'));
});

// Scenario: A sticky movement curve uses the source time parameter but labels it as a ratio.
// Purpose: Keep the known t coordinate in seconds while retaining ratio units for movement modifiers.
test('UnitT14_sticky-movement-curve-requires-seconds-for-time', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);
  const attack = candidate.records.find((record) => record.kind === 'attack-profile' && record.payload.stickyBindings.some((item) => item.state === 'defined'));
  const sticky = attack.payload.stickyBindings.find((item) => item.state === 'defined');
  sticky.definition.movementCurve.points[0].t.unit = 'ratio';

  const result = validate(candidate);
  assert.ok(result.issues.some((issue) => issue.code === 'sticky-curve-time-unit'));
});

// Scenario: Chainaxe sticky override rows refer to table aliases through the literal table.clone wrapper.
// Purpose: Keep every reachable table in the bundle and preserve explicit typed alias references without evaluating Lua.
test('UnitT15_w07-profile-table-clone-aliases-are-closed-and-bound', async () => {
  const { buildW07WeaponBundle, validateCuratedWeaponFacts } = await import('../scripts/content/contract-w07-weapons.mjs');
  const facts = JSON.parse(await readFile(new URL('../content/imports/w07/weapon-source-facts.json', import.meta.url), 'utf8'));
  const aliases = validateCuratedWeaponFacts(facts).aliasKeys;
  const { candidate } = await buildW07WeaponBundle();
  for (const profileKey of [
    'heavy_chainaxe_sticky',
    'heavy_chainaxe_sticky_last_quick',
    'heavy_chainaxe_active_sticky',
    'heavy_chainaxe_active_sticky_last',
    'light_chainaxe_sticky',
    'light_chainaxe_sticky_last_quick',
    'light_chainaxe_active_sticky',
    'light_chainaxe_active_sticky_last'
  ]) {
    const profile = candidate.records.find((record) => record.kind === 'damage-profile' && record.payload.profileKey === profileKey);
    const wrapperRows = facts.profileDefinitions.find((item) => item.profileKey === profileKey).rows
      .filter((row) => /^table\.clone\([A-Za-z0-9_]+\)$/.test(row.rawValue));
    assert.ok(wrapperRows.length > 0, profileKey + ' must retain its literal clone rows');
    const aliasKeys = wrapperRows.map((row) => row.rawValue.match(/^table\.clone\(([A-Za-z0-9_]+)\)$/)[1]);
    for (const aliasKey of aliasKeys) {
      assert.ok(aliases.includes(aliasKey), profileKey + ' must include reachable alias ' + aliasKey);
      assert.ok(profile.payload.rawSourceDefinition.tables.some((table) => table.tableKey === aliasKey), profileKey + ' must retain table ' + aliasKey);
    }
  }
});

// Scenario: A damage-trait stat row has several declared profile branches, while the archived claim set covers only some branches.
// Purpose: Keep every exact source branch and concrete profile property without joining claims to substring-similar profiles.
test('UnitT35_w07-damage-trait-rows-retain-the-full-exact-profile-closure', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const facts = JSON.parse(await readFile(new URL('../content/imports/w07/weapon-source-facts.json', import.meta.url), 'utf8'));
  const { candidate } = await buildW07WeaponBundle();
  const weapons = new Map(candidate.records.filter((record) => record.kind === 'weapon')
    .map((record) => [record.payload.markId, record]));
  let checkedRows = 0;
  for (const mark of ['m1', 'm2']) {
    const weapon = weapons.get(facts.weaponTemplateKeys[mark]);
    for (const row of facts.weaponStatFacts[mark].rows.filter((item) =>
      item.fieldPath.includes('.damage.action_') && item.rawValue.startsWith('damage_trait_templates.'))) {
      checkedRows++;
      const segments = row.fieldPath.split('.damage.')[1].split('.');
      const action = segments[0];
      const overrideProfile = segments[1] === 'overrides' ? segments[2] : undefined;
      const expectedProfiles = overrideProfile
        ? [overrideProfile]
        : [...new Set(facts.actionBindings[mark].profileBindings
          .filter((binding) => binding.fieldPath.startsWith('weapon_template.actions.' + action + '.'))
          .map((binding) => binding.profileKey).filter(Boolean))];
      const stat = weapon.payload.statBindings.find((group) => group.statKey === row.statKey);
      const mapped = stat.bindings.filter((binding) => binding.weaponLocator.fieldPath === row.fieldPath);
      const actualProfiles = [...new Set(mapped.map((binding) => binding.profileKey))];
      assert.deepEqual(actualProfiles.sort(), expectedProfiles.sort(), mark + ':' + row.fieldPath);
      assert.ok(mapped.length > 0, 'Every selected profile must resolve at least one concrete trait target: ' + row.fieldPath);
      assert.ok(mapped.every((binding) => binding.property.startsWith('damage_templates.')),
        'Trait rows must not leave a marker or weapon-template path: ' + row.fieldPath);
    }
  }
  assert.equal(checkedRows, 66);
});

// Scenario: A W07 stat mapping locator uses an adjacent action field name with the mapped action as a prefix.
// Purpose: Require exact action path segments and a supported action slot for template-bound weapon mappings.
test('UnitT16_w07-stat-action-locator-rejects-adjacent-action-prefix', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.payload.statBindings?.some((group) => group.bindings.some((item) => item.action)));
  const binding = weapon.payload.statBindings.flatMap((group) => group.bindings).find((item) => item.action);
  binding.weaponLocator.fieldPath = binding.weaponLocator.fieldPath.replace('.damage.' + binding.action, '.damage.' + binding.action + '_evil');

  const result = validate(candidate);
  assert.ok(result.issues.some((issue) => issue.code === 'weapon-stat-action-binding'));
});

// Scenario: A source binding's typed profileRef points to a different same-release damage profile than its raw source key.
// Purpose: Keep action profile identity tied to both the pinned literal and the listed damageProfileRefs.
test('UnitT17_w07-action-profile-source-binding-must-match-literal-and-listed-ref', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);
  const attack = candidate.records.find((record) => record.kind === 'attack-profile' && record.payload.templateKey && record.payload.sourceBindings?.length);
  const binding = attack.payload.sourceBindings[0];
  const originalKey = binding.rawValue;
  const other = candidate.records.find((record) => record.kind === 'damage-profile' && record.gameReleaseId === attack.gameReleaseId && record.payload.profileKey !== originalKey);
  binding.profileRef = { recordId: other.recordId, gameReleaseId: other.gameReleaseId };
  attack.payload.damageProfileRefs.push({ recordId: other.recordId, gameReleaseId: other.gameReleaseId });

  const result = validate(candidate);
  assert.ok(result.issues.some((issue) => issue.code === 'attack-source-binding-profile'));
});

// Scenario: A typed decimal in a raw profile table disagrees with its pinned numeric raw value.
// Purpose: Keep numeric projections mechanically consistent with their retained source token.
test('UnitT18_w07-profile-table-decimal-must-match-raw-value', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);
  const profile = candidate.records.find((record) => record.kind === 'damage-profile'
    && record.payload.rawSourceDefinition.tables.some((table) => table.orderedValues.some((point) => point.decimal !== undefined)));
  const point = profile.payload.rawSourceDefinition.tables.flatMap((table) => table.orderedValues).find((item) => item.decimal !== undefined);
  point.decimal = '999';

  const result = validate(candidate);
  assert.ok(result.issues.some((issue) => issue.code === 'w07-raw-decimal-binding'));
});

// Scenario: A mapped weapon stat table adds a decimal projection to a nonnumeric raw token.
// Purpose: Prevent curated UI-facing table facts from asserting numeric values absent from the pinned source.
test('UnitT19_w07-weapon-stat-table-rejects-decimal-for-nonnumeric-source', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.payload.templateKey
    && record.payload.statTables?.some((table) => table.properties.some((property) =>
      property.orderedValues.some((point) => point.decimal !== undefined))));
  const point = weapon.payload.statTables.flatMap((table) => table.properties).flatMap((property) => property.orderedValues)
    .find((item) => item.decimal !== undefined);
  point.rawValue = 'table.clone(non_numeric_source_alias)';

  const result = validate(candidate);
  assert.ok(result.issues.some((issue) => issue.code === 'w07-raw-decimal-binding'));
});

// Scenario: Sticky duration, instance count and movement time use values in mismatched units.
// Purpose: Preserve the direct sticky binding's source dimensions for duration, count and movement curve coordinates.
test('UnitT20_w07-sticky-direct-definition-enforces-source-units', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);
  const attack = candidate.records.find((record) => record.kind === 'attack-profile' && record.payload.stickyBindings.some((item) => item.state === 'defined'));

  const durationCase = structuredClone(candidate);
  durationCase.records.find((record) => record.recordId === attack.recordId).payload.stickyBindings
    .find((item) => item.state === 'defined').definition.duration.unit = 'ratio';
  assert.ok(validate(durationCase).issues.some((issue) => issue.code === 'sticky-duration-unit'));

  const instancesCase = structuredClone(candidate);
  instancesCase.records.find((record) => record.recordId === attack.recordId).payload.stickyBindings
    .find((item) => item.state === 'defined').definition.instances.unit = 'ratio';
  assert.ok(validate(instancesCase).issues.some((issue) => issue.code === 'sticky-instance-unit'));

  const curveCase = structuredClone(candidate);
  const sticky = curveCase.records.find((record) => record.recordId === attack.recordId).payload.stickyBindings.find((item) => item.state === 'defined');
  sticky.definition.movementCurve.startModifier.unit = 's';
  assert.ok(validate(curveCase).issues.some((issue) => issue.code === 'sticky-curve-modifier-unit'));
});

// Scenario: Either chainaxe mark loses a raw weapon trait-template locator or one of its five stat families.
// Purpose: Ensure all directly imported trait bindings survive in the formal statBindings projection without invented claims.
test('UnitT21_w07-five-stat-bindings-cover-every-pinned-trait-locator', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const facts = JSON.parse(await readFile(new URL('../content/imports/w07/weapon-source-facts.json', import.meta.url), 'utf8'));
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);

  const expectedStatKeys = [
    'chainaxe_dps_stat',
    'chainaxe_armor_pierce_stat',
    'chainaxe_defence_stat',
    'chainaxe_sawing_stat',
    'chainaxe_mobility_stat'
  ];
  for (const mark of ['m1', 'm2']) {
    const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.payload.markId.endsWith('_' + mark));
    const bindings = weapon.payload.statBindings;
    assert.deepEqual(bindings.map((group) => group.statKey).sort(), expectedStatKeys.slice().sort());
    const actualPaths = [...new Set(bindings.flatMap((group) => group.bindings.map((binding) => binding.weaponLocator.fieldPath)))].sort();
    const expectedPaths = facts.weaponStatFacts[mark].rows
      .filter((row) => /_trait_templates\./.test(row.rawValue))
      .map((row) => row.fieldPath)
      .sort();
    assert.equal(expectedPaths.length, mark === 'm1' ? 48 : 26);
    assert.deepEqual(actualPaths, expectedPaths);
  }
});

// Scenario: Weapon defense, dodge and sprint outputs or their trait parameter ranges are assigned generic or cross-property units.
// Purpose: Preserve each pinned property's own range, order and unit, including the constant defense stamina parameter.
test('UnitT22_w07-trait-ranges-and-output-units-remain-property-specific', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);

  for (const weapon of candidate.records.filter((record) => record.kind === 'weapon')) {
    const defense = weapon.payload.statBindings.find((group) => group.statKey === 'chainaxe_defence_stat').bindings;
    const rangeFor = (suffix) => defense.find((binding) => binding.property.endsWith(suffix)).traitParameterRange;
    assert.deepEqual(rangeFor('stamina_modifier'), { status: 'not-applicable' });
    assert.deepEqual(rangeFor('sprint_cost_per_second'), { status: 'known', min: '0.25', max: '0.75', unit: 'ratio' });
    assert.deepEqual(rangeFor('block_cost_default.inner'), { status: 'known', min: '0', max: '1', unit: 'ratio' });
    assert.deepEqual(rangeFor('block_cost_default.outer'), { status: 'known', min: '0', max: '1', unit: 'ratio' });
    assert.deepEqual(rangeFor('push_cost'), { status: 'known', min: '0', max: '1', unit: 'ratio' });

    const tableProperties = new Map(weapon.payload.statTables.flatMap((table) => table.properties.map((property) => [property.property, property])));
    assert.equal(tableProperties.get('sprint_cost_per_second').unit, 'stamina-point-per-second');
    assert.equal(tableProperties.get('block_cost_default.inner').unit, 'stamina-point');
    assert.equal(tableProperties.get('block_cost_default.outer').unit, 'stamina-point');
    assert.equal(tableProperties.get('push_cost').unit, 'stamina-point');
    assert.equal(tableProperties.get('stamina_modifier').unit, 'stamina-point');
    assert.equal(tableProperties.get('diminishing_return_start').unit, 'dodge-count');
    assert.equal(tableProperties.get('sprint_forward_acceleration').unit, 'normalized-speed-per-second');
    const movementTable = weapon.payload.statTables.find((table) => table.tableKey === 'movement_curve_modifier_trait_templates.default_movement_curve_modifier_stat');
    assert.ok(movementTable);
    assert.deepEqual(movementTable.properties.find((property) => property.property === 'modifier').unit, { status: 'not-applicable' });
    const movementRange = movementTable.properties.find((property) => property.property === 'modifier.traitParameterRange');
    assert.equal(movementRange.unit, 'ratio');
    assert.deepEqual(movementRange.orderedValues.map((row) => [row.key, row.decimal]), [['min', '0.05'], ['max', '0.95']]);

    const mobility = weapon.payload.statBindings.find((group) => group.statKey === 'chainaxe_mobility_stat').bindings;
    assert.ok(mobility.some((binding) => binding.traitTemplateKey === 'dodge_trait_templates.default_dodge_stat'
      && binding.traitParameterRange.status === 'known' && binding.traitParameterRange.min === '0.25' && binding.traitParameterRange.max === '0.75'));
    assert.ok(mobility.some((binding) => binding.traitTemplateKey === 'sprint_trait_templates.default_sprint_stat'
      && binding.traitParameterRange.status === 'known' && binding.traitParameterRange.min === '0.05' && binding.traitParameterRange.max === '0.95'));
  }
});

// Scenario: A selected source profile contains one of the twelve known numeric mechanic vectors outside attack, impact or power-distribution paths.
// Purpose: Preserve those exact ordered raw points as typed declarative tables without interpreting profile overrides.
test('UnitT23_w07-retains-all-twelve-additional-profile-vectors', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const facts = JSON.parse(await readFile(new URL('../content/imports/w07/weapon-source-facts.json', import.meta.url), 'utf8'));
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);

  const expectedGroups = new Map();
  for (const profile of facts.profileDefinitions) {
    for (const row of profile.rows) {
      const match = row.fieldPath.match(/^(.*)\.(\d+)$/);
      if (!match || !/^-?\d+(?:\.\d+)?$/.test(row.rawValue)
        || !/(?:armor_damage_modifier\.impact\.\[armor_types\.super_armor\]|boost_curve_multiplier_finesse|power_level_multiplier|stagger_duration_modifier)$/.test(match[1])) continue;
      const key = profile.profileKey + '\u0000' + match[1];
      const group = expectedGroups.get(key) ?? { profileKey: profile.profileKey, tableKey: match[1], rows: [] };
      group.rows.push({ ordinal: Number(match[2]), rawValue: row.rawValue, decimal: row.rawValue, line: row.line, fieldPath: row.fieldPath });
      expectedGroups.set(key, group);
    }
  }
  assert.equal(expectedGroups.size, 12);

  for (const group of expectedGroups.values()) {
    const record = candidate.records.find((item) => item.kind === 'damage-profile' && item.payload.profileKey === group.profileKey);
    const table = record.payload.rawSourceDefinition.tables.find((item) => item.tableKey === group.tableKey);
    assert.ok(table, group.profileKey + ' must preserve ' + group.tableKey);
    const expectedRows = group.rows.sort((left, right) => left.ordinal - right.ordinal);
    assert.deepEqual(table.orderedValues.map((point) => ({
      ordinal: point.ordinal,
      rawValue: point.rawValue,
      decimal: point.decimal,
      line: point.sourceLocator.line,
      fieldPath: point.sourceLocator.fieldPath
    })), expectedRows);
    if (group.tableKey.endsWith('.stagger_duration_modifier')) {
      assert.equal(table.unit, 's');
    } else {
      assert.equal(table.unit, 'ratio');
    }
  }
});

// Scenario: A W07 weapon drops its optional sourceRows while a typed stat-table decimal disagrees with the retained raw token.
// Purpose: Keep raw/decimal consistency validation attached to the weapon stat table owner, not an optional sibling field.
test('UnitT24_w07-stat-table-decimal-guard-cannot-be-bypassed-by-removing-source-rows', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.payload.templateKey);
  delete weapon.payload.sourceRows;
  const point = weapon.payload.statTables.flatMap((table) => table.properties).flatMap((property) => property.orderedValues)
    .find((item) => item.decimal !== undefined);
  point.decimal = '999';

  assert.ok(validate(candidate).issues.some((issue) => issue.code === 'w07-raw-decimal-binding'));
});

// Scenario: A parent profile token begins with a known template key but continues with an unimported expression.
// Purpose: Require the full source token to be a plain identifier or exact supported namespace literal before binding a parent.
test('UnitT25_w07-parent-profile-literal-rejects-trailing-expression', () => {
  const candidate = structuredClone(fixture);
  const profile = candidate.records.find((record) => record.kind === 'damage-profile');
  const release = candidate.gameReleases.find((item) => item.gameReleaseId === profile.gameReleaseId);
  const baseSource = candidate.sourceRefs.find((item) => item.sourceId === 'fixture-public-code-r2');
  const source = {
    ...structuredClone(baseSource),
    sourceId: 'fixture-profile-code-r1',
    gameReleaseId: profile.gameReleaseId,
    gameBuild: release.gameBuild,
    commit: release.snapshot.commit,
    snapshot: structuredClone(release.snapshot),
    path: 'fixture.lua',
    publicUrl: 'https://example.invalid/synthetic/game-code/blob/' + release.snapshot.commit + '/fixture.lua'
  };
  candidate.sourceRefs.push(source);
  const sourceRef = { sourceId: source.sourceId, gameReleaseId: source.gameReleaseId };
  profile.sourceRefs = [sourceRef];
  profile.payload = {
    profileKey: 'other_profile',
    rawSourceDefinition: {
      sourceRef,
      path: source.path,
      line: 12,
      fieldPath: 'damage_templates.fixture_profile',
      leaves: [{
        line: 14,
        fieldPath: 'damage_templates.fixture_profile.parent_template_name',
        rawValue: 'DamageProfileTemplates.other_profile + unimported_expression',
        sourceRef,
        path: source.path
      }],
      parentProfileRef: { recordId: profile.recordId, gameReleaseId: profile.gameReleaseId }
    }
  };

  assert.ok(validate(candidate).issues.some((issue) => issue.code === 'damage-profile-parent-binding'));
});

// Scenario: An action profile raw binding is a valid template namespace followed by an unimported expression.
// Purpose: Require exact source-profile literals so a regex prefix cannot establish an incorrect typed dependency.
test('UnitT26_w07-action-profile-literal-rejects-trailing-expression', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validate(candidate).valid, true);
  const attack = candidate.records.find((record) => record.kind === 'attack-profile' && record.payload.templateKey && record.payload.sourceBindings?.length);
  const binding = attack.payload.sourceBindings[0];
  const originalKey = String(binding.rawValue).replace(/^['"]|['"]$/g, '');
  binding.rawValue = 'DamageProfileTemplates.' + originalKey + '.unimported_expression';

  assert.ok(validate(candidate).issues.some((issue) => issue.code === 'attack-source-binding-profile'));
});

// Scenario: One Mk IV heavy-special continuation changes while a sibling Mk IV action and a DPS claim still point at the same weapon identity.
// Purpose: Keep identity-only weapon dependencies from fanning one action edit out to unrelated stat and action review targets.
test('UnitT27_w07-action-continuation-digest-does-not-fan-out-through-weapon-identity', () => {
  const heavy = w07Weapons.records.find((record) => record.kind === 'attack-profile'
    && record.payload.action === 'action_heavy_special'
    && record.payload.markId === 'chainaxe_p1_m1');
  const sibling = w07Weapons.records.find((record) => record.kind === 'attack-profile'
    && record.payload.action === 'action_left_down_light'
    && record.payload.markId === 'chainaxe_p1_m1');
  const statClaim = w07Weapons.records.find((record) => record.kind === 'claim'
    && record.payload.context?.weaponRef?.recordId === 'darktide:weapon:chainaxe:p1-m1'
    && record.payload.context?.weaponStat === 'chainaxe_dps_stat');
  assert.ok(heavy && sibling && statClaim, 'Pinned Mk IV action and stat records must be present');
  const reviewTarget = (record, fieldPath, dimension) => ({
    recordId: record.recordId,
    gameReleaseId: record.gameReleaseId,
    fieldPath,
    dimension,
  });
  const heavyTarget = reviewTarget(heavy, '/payload/continuations', 'technical');
  const siblingTarget = reviewTarget(sibling, '/payload/continuations', 'technical');
  const statTarget = reviewTarget(statClaim, '/payload/value', 'technical');
  const before = {
    heavy: computeReviewDigests(w07Weapons, heavyTarget),
    sibling: computeReviewDigests(w07Weapons, siblingTarget),
    stat: computeReviewDigests(w07Weapons, statTarget),
  };

  const changed = structuredClone(w07Weapons);
  const changedHeavy = changed.records.find((record) => record.recordId === heavy.recordId);
  changedHeavy.payload.continuations[0].conditions[0].rawValue = '999';
  const after = {
    heavy: computeReviewDigests(changed, heavyTarget),
    sibling: computeReviewDigests(changed, siblingTarget),
    stat: computeReviewDigests(changed, statTarget),
  };

  assert.notDeepEqual(after.heavy, before.heavy, 'The edited action target must become stale');
  assert.deepEqual(after.sibling, before.sibling, 'An unrelated action target must keep its digest');
  assert.deepEqual(after.stat, before.stat, 'An unrelated stat target must keep its digest');
});

// Scenario: A derived damage profile points to a typed parent profile whose ordered source table contains numeric raw points.
// Purpose: Preserve full parent-profile dependencies so editing a parent table stales the derived profile and its action consumers.
test('UnitT28_w07-derived-damage-profile-keeps-parent-table-numeric-dependency', () => {
  const child = w07Weapons.records.find((record) => record.kind === 'damage-profile'
    && record.payload.rawSourceDefinition?.parentProfileRef);
  assert.ok(child, 'A pinned derived damage profile must be present');
  const parentRef = child.payload.rawSourceDefinition.parentProfileRef;
  const parent = w07Weapons.records.find((record) => record.recordId === parentRef.recordId
    && record.gameReleaseId === parentRef.gameReleaseId);
  const point = parent?.payload.rawSourceDefinition?.tables?.flatMap((table) => table.orderedValues)
    .find((item) => item.decimal !== undefined && item.rawValue !== undefined);
  assert.ok(parent && point, 'The typed parent profile must expose a numeric source point');
  const target = {
    recordId: child.recordId,
    gameReleaseId: child.gameReleaseId,
    fieldPath: '/payload/rawSourceDefinition',
    dimension: 'technical',
  };
  const before = computeReviewDigests(w07Weapons, target);
  const changed = structuredClone(w07Weapons);
  const changedParent = changed.records.find((record) => record.recordId === parent.recordId);
  const changedPoint = changedParent.payload.rawSourceDefinition.tables.flatMap((table) => table.orderedValues)
    .find((item) => item.ordinal === point.ordinal && item.decimal === point.decimal);
  changedPoint.decimal = '999';
  changedPoint.rawValue = '999';

  const after = computeReviewDigests(changed, target);
  assert.notEqual(after.dependenciesDigest, before.dependenciesDigest);
});

// Scenario: Every legacy W07 review target is resolved after the separate W13 ranged addition.
// Purpose: Keep the exact 797 approved/legacy review targets stable without creating synthetic W13 approvals.
test('UnitT29_w07-legacy-review-targets-resolve-and-create-synthetic-receipts', () => {
  const frozenBytes = execFileSync('git', ['-C', SOURCE_ROOT, 'show', `${FROZEN_W07_BASE_COMMIT}:${FROZEN_W07_BASE_PATH}`], {
    encoding: null,
    maxBuffer: 16 * 1024 * 1024
  });
  assert.equal(frozenBytes.byteLength, FROZEN_W07_BASE_BYTES, 'The pinned historical W07 bytes must be complete');
  assert.equal(createHash('sha256').update(frozenBytes).digest('hex'), FROZEN_W07_BASE_SHA256,
    'The legacy target scope must come from the exact frozen W07 Git blob');
  const frozenW07 = JSON.parse(frozenBytes.toString('utf8'));
  const frozenTargets = frozenW07.records.flatMap((record) => (record.reviewTargets ?? []).map((target) => ({
    recordId: record.recordId,
    gameReleaseId: record.gameReleaseId,
    ...target
  })));
  assert.equal(frozenTargets.length, 797, 'The frozen W07 Git blob defines exactly 797 legacy review targets');

  const currentRecords = new Map(w07Weapons.records.map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record]));
  const targets = frozenTargets.map(({ recordId, gameReleaseId, ...target }) => {
    const currentRecord = currentRecords.get(`${gameReleaseId}\0${recordId}`);
    assert.ok(currentRecord, `The expanded candidate must retain the frozen W07 record ${gameReleaseId}:${recordId}`);
    const currentTarget = currentRecord.reviewTargets.find((item) => item.fieldPath === target.fieldPath && item.dimension === target.dimension);
    assert.deepEqual(currentTarget, target, `The expanded candidate must retain the frozen W07 target ${gameReleaseId}:${recordId}:${target.fieldPath}`);
    return { recordId, gameReleaseId, ...currentTarget };
  });
  assert.equal(targets.length, 797, 'The pinned W07 candidate must retain all 797 review targets');

  const receipts = targets.map((target) => createReviewReceipt(w07Weapons, target, {
    reviewer: { kind: 'human', id: 'synthetic-red-green-probe-only' },
    reviewedAt: '2026-10-19T00:00:00Z'
  }));

  assert.equal(receipts.length, targets.length);
  assert.ok(receipts.every((receipt) => /^[a-f0-9]{64}$/u.test(receipt.targetDigest)
    && /^[a-f0-9]{64}$/u.test(receipt.dependenciesDigest)));
});

// Scenario: The pinned W07 public-code snapshot is mirrored at a different commit with the same selected artifact bytes.
// Purpose: Ignore only a verified permalink commit segment while keeping artifact and repository-relative path changes reviewable.
test('UnitT30_w07-verified-public-code-commit-rebase-keeps-review-digest-stable', () => {
  const snapshotEntry = w07Weapons.sourceSnapshots.find((item) => item.snapshot.snapshotId === 'chainaxe-weapons-1.13.2-37-files');
  assert.ok(snapshotEntry, 'The selected W07 public-code snapshot must be present');
  const sourceIndex = w07Weapons.sourceRefs.findIndex((item) => item.sourceKind === 'public-code'
    && item.snapshot.snapshotId === snapshotEntry.snapshot.snapshotId);
  assert.ok(sourceIndex >= 0, 'A public-code source must use the selected W07 snapshot');
  const source = w07Weapons.sourceRefs[sourceIndex];
  const linkedRecord = w07Weapons.records.find((record) => record.sourceRefs.some((link) => link.sourceId === source.sourceId)
    && record.reviewTargets.some((target) => {
      try {
        computeReviewDigests(w07Weapons, { recordId: record.recordId, gameReleaseId: record.gameReleaseId, ...target });
        return true;
      } catch { return false; }
    }));
  assert.ok(linkedRecord, 'A review target must directly depend on a pinned W07 source');
  const target = linkedRecord.reviewTargets.map((entry) => ({
    recordId: linkedRecord.recordId,
    gameReleaseId: linkedRecord.gameReleaseId,
    ...entry
  })).find((entry) => {
    try { computeReviewDigests(w07Weapons, entry); return true; } catch { return false; }
  });
  assert.ok(target);
  const before = computeReviewDigests(w07Weapons, target);
  const oldCommit = source.commit;
  const rebased = structuredClone(w07Weapons);
  const nextCommit = 'd'.repeat(40);
  const rebasedSnapshot = rebased.sourceSnapshots.find((item) => item.snapshot.snapshotId === snapshotEntry.snapshot.snapshotId);
  rebasedSnapshot.snapshot.commit = nextCommit;
  for (const item of rebased.sourceRefs.filter((candidate) => candidate.sourceKind === 'public-code'
    && candidate.snapshot.snapshotId === snapshotEntry.snapshot.snapshotId)) {
    assert.equal(item.commit, oldCommit, 'The selected W07 refs must share the pinned source commit');
    const commitPath = `/blob/${oldCommit}/`;
    assert.ok(item.publicUrl.includes(commitPath), 'The public permalink must expose the exact verified commit segment');
    item.commit = nextCommit;
    item.snapshot.commit = nextCommit;
    item.publicUrl = item.publicUrl.replace(commitPath, `/blob/${nextCommit}/`);
  }
  assert.equal(validate(rebased).valid, true, JSON.stringify(validate(rebased).issues, null, 2));
  assert.deepEqual(computeReviewDigests(rebased, target), before);

  const artifactChanged = structuredClone(rebased);
  artifactChanged.sourceRefs[sourceIndex].artifactSha256 = 'e'.repeat(64);
  assert.notDeepEqual(computeReviewDigests(artifactChanged, target), before, 'A true source artifact change must remain reviewable');

  const pathChanged = structuredClone(rebased);
  pathChanged.sourceRefs[sourceIndex].path += '.changed';
  assert.notDeepEqual(computeReviewDigests(pathChanged, target), before, 'A repository-relative source path change must remain reviewable');

  const mismatchedUrl = structuredClone(rebased);
  const mismatchedSource = mismatchedUrl.sourceRefs[sourceIndex];
  mismatchedSource.publicUrl = mismatchedSource.publicUrl.replace(`/blob/${nextCommit}/`, `/blob/${oldCommit}/`);
  assert.notDeepEqual(computeReviewDigests(mismatchedUrl, target), before, 'An unverified URL commit must not be blindly normalized');

  const assertUnknownRepositoryRebaseStaysStale = (repository) => {
    const unknownBase = structuredClone(w07Weapons);
    const unknownSource = unknownBase.sourceRefs[sourceIndex];
    unknownSource.repository = repository;
    unknownSource.publicUrl = `${repository}/blob/${oldCommit}/${unknownSource.path}`;
    const unknownBefore = computeReviewDigests(unknownBase, target);

    const unknownRebased = structuredClone(unknownBase);
    const rebasedSource = unknownRebased.sourceRefs[sourceIndex];
    rebasedSource.commit = nextCommit;
    rebasedSource.snapshot.commit = nextCommit;
    rebasedSource.publicUrl = rebasedSource.publicUrl.replace(`/blob/${oldCommit}/`, `/blob/${nextCommit}/`);
    assert.notDeepEqual(computeReviewDigests(unknownRebased, target), unknownBefore, 'Unknown repositories must retain the commit-bearing URL dependency');
  };
  assertUnknownRepositoryRebaseStaysStale('https://example.invalid/synthetic/game-code');
  assertUnknownRepositoryRebaseStaysStale('https://github.com/OtherOwner/OtherGameCode');

  const fragmentBase = structuredClone(rebased);
  fragmentBase.sourceRefs[sourceIndex].publicUrl += '#L120';
  const fragmentDigest = computeReviewDigests(fragmentBase, target);
  const fragmentChanged = structuredClone(fragmentBase);
  fragmentChanged.sourceRefs[sourceIndex].publicUrl = fragmentChanged.sourceRefs[sourceIndex].publicUrl.replace('#L120', '#L121');
  assert.notDeepEqual(computeReviewDigests(fragmentChanged, target), fragmentDigest, 'Permalink line fragments must remain reviewable');
});



// Scenario: W07 imports the exact static minion hit-schema closure and resolves each chainaxe action against input, fallback and damage-profile data.
// Purpose: Reject the previous W07 shape with empty target refs and no static action/input resolution.
test('UnitT31_w07-action-input-and-target-static-closure-is-complete', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  const weapons = candidate.records.filter((record) => record.kind === 'weapon' && record.payload.markId?.startsWith('chainaxe_p1_m'));
  const targets = candidate.records.filter((record) => record.kind === 'target-profile' && record.payload.sourceStatic);
  const attacks = candidate.records.filter((record) => record.kind === 'attack-profile' && record.payload.markId?.startsWith('chainaxe_p1_m'));

  assert.equal(weapons.length, 2);
  assert.equal(targets.length, 52, 'Every registry minion needs a typed static hit-schema record');
  assert.equal(attacks.length, 16);
  for (const weapon of weapons) {
    const closure = weapon.payload.actionProfileResolution;
    assert.ok(closure, 'Each chainaxe weapon needs actionProfileResolution');
    assert.equal(closure.inputSetup.setupKey, 'melee_action_input_setup_mid');
    assert.ok(closure.inputSetup.inputEntries.length > 0);
    assert.ok(closure.inputSetup.hierarchyRaw.rawValue.length > 0);
    assert.ok(closure.localActions.length > 0);
    assert.ok(closure.fallbackActions.length > 0);
    assert.equal(weapon.payload.actionContinuations.length, closure.staticClosure.literalContinuationEdgeCount);
  }
  for (const attack of attacks) {
    assert.equal(attack.payload.targetProfileRefs.length, 52);
    assert.equal(attack.payload.actionResolution.startInput, null, 'These 16 damage-bound action rows do not declare a direct start_input');
    assert.ok(attack.payload.actionResolution.entryBindings.length > 0, 'Each damage-bound action must retain its exact incoming continuation rows');
    assert.deepEqual(attack.payload.actionResolution.entryBindings, candidate.records
      .find((record) => record.kind === 'weapon' && record.payload.markId === attack.payload.markId).payload.actionContinuations
      .filter((edge) => edge.toAction === attack.payload.action));
    assert.ok(attack.payload.actionResolution.branchBindings.length > 0);
    assert.equal(attack.payload.actionResolution.targetApplicability, 'all-static-registry-minion-hit-schemas');
  }
  for (const target of targets) {
    const sourceStatic = target.payload.sourceStatic;
    assert.equal(sourceStatic.breedType, 'minion');
    assert.ok(sourceStatic.registryLocator.path.endsWith('/breeds.lua'));
    assert.ok(sourceStatic.rawHitZones.rawValue.length > 0);
    assert.ok(sourceStatic.hitZones.length > 0);
    assert.ok(sourceStatic.hitZones.every((zone) => Array.isArray(zone.actors) && typeof zone.actorsRawValue === 'string' && zone.rawSource.rawValue.length > 0 && zone.actorsLocator.path));
    assert.ok(sourceStatic.baseArmorClassRef.recordId);
  }
});

// Scenario: Four W07 source curves use normalized parameter endpoints while preserving raw source ordinals and endpoint tokens.
// Purpose: Prevent raw array slots 1/2 from being misrepresented as player input values or as the item-stat range.
test('UnitT32_w07-curves-preserve-normalized-axis-and-source-boundary-provenance', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  const curves = candidate.records.filter((record) => record.kind === 'stat-curve' && record.recordId.includes('chainaxe-p1'));
  assert.equal(curves.length, 4);
  for (const curve of curves) {
    assert.equal(curve.payload.inputUnit, 'ratio');
    assert.deepEqual(curve.payload.knots.map((knot) => knot.input), ['0', '1']);
    assert.deepEqual(curve.payload.knots.map((knot) => knot.sourceOrdinal), [1, 2]);
    assert.deepEqual(curve.payload.knots.map((knot) => knot.rawEndpoint), curve.payload.knots.map((knot) => knot.output));
    assert.equal(curve.payload.interpolation.value, 'linear');
    assert.equal(curve.payload.edgePolicy.value, 'extrapolate');
    assert.ok(curve.payload.callsiteLocators.some((locator) => locator.path.endsWith('/math.lua')));
  }
  const boostTables = candidate.records.filter((record) => record.kind === 'damage-profile').flatMap((record) => record.payload.rawSourceDefinition.tables.filter((table) => table.tableKey === 'PowerLevelSettings.boost_curves.default'));
  assert.ok(boostTables.length > 0);
  for (const table of boostTables) {
    assert.equal(table.unit, 'ratio');
    assert.deepEqual(table.curveSemantics.knots.map((knot) => [knot.sourceOrdinal, knot.input]), [[1, '0'], [2, '0.25'], [3, '0.5'], [4, '0.75'], [5, '1']]);
    assert.deepEqual(Object.fromEntries(['min', 'max', 'minInclusive', 'maxInclusive', 'unit'].map((key) => [key, table.curveSemantics.referenceAxis[key]])),
      { min: '0', max: '1', minInclusive: true, maxInclusive: true, unit: 'ratio' });
    assert.deepEqual(Object.fromEntries(['min', 'minInclusive', 'max', 'maxInclusive', 'unit', 'predicate', 'transform']
      .map((key) => [key, table.curveSemantics.callerInput[key]])),
    { min: '0', minInclusive: false, max: '1', maxInclusive: true, unit: 'ratio', predicate: 'finesse_boost_amount > 0', transform: 'math.min(finesse_boost_amount, 1)' });
    assert.equal(table.curveSemantics.interpolation.value, 'piecewise-linear');
    assert.deepEqual(table.curveSemantics.referenceAxis.sourceLocators.map(({ path, line, endLine }) => ({ path, line, endLine })), [
      { path: 'scripts/utilities/attack/damage_calculation.lua', line: 208, endLine: 217 }
    ]);
    assert.deepEqual(table.curveSemantics.interpolation.sourceLocator, table.curveSemantics.referenceAxis.sourceLocators[0]);
    assert.deepEqual(table.curveSemantics.callerInput.sourceLocators.map(({ path, line, endLine }) => ({ path, line, endLine })), [
      { path: 'scripts/utilities/attack/damage_calculation.lua', line: 700, endLine: 704 }
    ]);
  }
  const definitions = candidate.records.filter((record) => record.kind === 'stat-definition' && record.payload.curveRef?.recordId.includes('chainaxe-p1'));
  assert.equal(definitions.length, 4);
  for (const definition of definitions) {
    assert.equal(definition.payload.panelInputRange.status, 'not-applicable');
    assert.equal(definition.payload.obtainableInputRange.reasonCode, 'NOT_EXPOSED_BY_SOURCE');
    assert.ok(definition.payload.rangeEvidence.checkedSources.length > 0);
    assert.match(definition.payload.rangeEvidence.serverBoundary, /server/i);
  }
});



// Scenario: Static action input assignment rows point to the preceding blank line rather than their exact source lines.
// Purpose: Keep source locators attached to the real pinned assignment bytes for both chainaxe marks.
test('UnitT33_w07-input-setup-assignment-locators-point-to-the-exact-lines', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  const expected = {
    chainaxe_p1_m1: { action_inputs: 33, action_input_hierarchy: 34, 'action_inputs.start_attack.buffer_time': 35 },
    chainaxe_p1_m2: { action_inputs: 31, action_input_hierarchy: 32 }
  };
  for (const weapon of candidate.records.filter((record) => record.kind === 'weapon' && expected[record.payload.markId])) {
    const rows = weapon.payload.actionProfileResolution.inputSetup.setupSources.filter((row) => row.sourceLocator.path.endsWith('/' + weapon.payload.markId + '.lua'));
    for (const [suffix, line] of Object.entries(expected[weapon.payload.markId])) {
      const row = rows.find((item) => item.sourceLocator.fieldPath === 'weapon_template.' + suffix);
      assert.ok(row, 'Missing input setup source ' + suffix);
      assert.equal(row.sourceLocator.line, line);
      assert.ok(row.rawValue.startsWith('weapon_template.' + suffix + ' ='));
    }
  }
});

// Scenario: Stat-table bindings with a stat-data vector but no W01 display claim retain unresolved marker paths.
// Purpose: Resolve each pinned action/profile or override/template path into its concrete damage-profile property.
test('UnitT34_w07-stat-table-semantics-covers-every-binding-property', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  const weapons = candidate.records.filter((record) => record.kind === 'weapon' && record.payload.markId?.startsWith('chainaxe_p1_m'));
  for (const weapon of weapons) {
    for (const stat of weapon.payload.statBindings) {
      const semantics = weapon.payload.statTableSemantics.find((group) => group.statKey === stat.statKey);
      assert.ok(semantics, 'Missing semantic group for ' + stat.statKey);
      const uniqueProperties = new Set(stat.bindings.map((binding) => binding.property));
      for (const property of uniqueProperties) assert.equal(semantics.bindings.filter((binding) => binding.property === property).length, 1, 'Property must have exactly one semantic row: ' + stat.statKey + ':' + property);
      assert.ok(![...uniqueProperties].some((property) => /^damage\.action_/.test(property)), 'Raw trait-vector marker must resolve to a profile property');
    }
    const dps = weapon.payload.statBindings.find((group) => group.statKey === 'chainaxe_dps_stat');
    const ap = weapon.payload.statBindings.find((group) => group.statKey === 'chainaxe_armor_pierce_stat');
    const saw = weapon.payload.statBindings.find((group) => group.statKey === 'chainaxe_sawing_stat');
    const normalPushProfile = weapon.payload.markId.endsWith('_m1') ? 'light_chainaxe_pushfollowup_tank' : 'chainaxe_light_stab';
    assert.ok(dps.bindings.some((binding) => binding.profileKey === normalPushProfile
      && binding.property.includes('.targets[1].power_distribution.attack')));
    assert.ok(ap.bindings.some((binding) => binding.profileKey === normalPushProfile
      && binding.property.includes('.targets[1].armor_damage_modifier.attack[armor_types.armored]')));
    assert.ok(saw.bindings.some((binding) => binding.profileKey === 'light_chainaxe_sticky'
      && binding.property === 'damage_templates.default_light_chainaxe.targets[1].power_distribution.attack'));
  }
});

// Scenario: The generated W07 manifest distinguishes imported static enemy/action coverage from excluded execution and checked server-attainability limits.
// Purpose: Prevent a stale NOT_IMPORTED statement from hiding completed static facts or making client preview imply player-obtainable ranges.
test('UnitT36_w07-manifest-separates-static-coverage-from-execution-and-attainability', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { manifest } = await buildW07WeaponBundle();
  assert.deepEqual(manifest.sourceInput.staticCoverage, {
    breedRegistryEntries: 59,
    minionBreeds: 52,
    excludedNonMinionBreeds: 7,
    hitZones: 624,
    zoneActors: 1232,
    armorEnumIdentities: 8,
    minionUsedArmorIdentities: 7,
    havocArmorOverrideEntries: 10,
    targetProfiles: 52,
    staticModifierRules: 3,
    selectedAttackProfiles: 16
  });
  assert.equal(manifest.executionBoundaries.length, 3);
  assert.equal(manifest.executionBoundaries.some((item) => /enemy|hit.?zone|weakspot/i.test(item.field)), false);
  const attainable = manifest.verificationLimits.find((item) => item.field === 'serverGeneratedOrPlayerObtainableStatRanges');
  assert.equal(attainable.status, 'unknown');
  assert.equal(attainable.reasonCode, 'NOT_EXPOSED_BY_SOURCE');
  assert.ok(attainable.checkedSources.includes('scripts/managers/data_service/services/crafting_service.lua'));
  assert.ok(attainable.checkedSources.includes('scripts/managers/data_service/services/store_service.lua'));
  const markdown = await readFile(new URL('../docs/contracts/w07/source-import.md', import.meta.url), 'utf8');
  assert.match(markdown, /52 minion hit schemas/);
  assert.match(markdown, /Server-generated and player-obtainable stat ranges remain unknown/);
  assert.match(markdown, /Static enemy hit-zone, armor, weakspot, multiplier, and .*relationships are imported/);
  assert.doesNotMatch(markdown, /Enemy-specific hit-zone.*NOT_IMPORTED/u);
});

// Scenario: The fixed W13 lasgun addition is either still pending or has current human review receipts.
// Purpose: Keep the new 9 records and 26 targets separate from the exact legacy W07 set across later approval.
test('UnitT37_w13-ranged-review-targets-remain-current-and-separate-from-legacy-set', () => {
  const records = w07Weapons.records.filter((record) => record.gameReleaseId === LEGACY_W07_RELEASE_ID && isW13RangedRecord(record));
  const targets = records.flatMap((record) => (record.reviewTargets ?? []).map((target) => ({
    recordId: record.recordId,
    gameReleaseId: record.gameReleaseId,
    ...target
  })));
  assert.equal(records.length, 9);
  assert.equal(targets.length, 26);
  assert.ok(records.every((record) => record.gameReleaseId === LEGACY_W07_RELEASE_ID
    && ['pending', 'approved', 'rejected', 'stale'].includes(record.reviewState)));

  const targetKeys = new Set(targets.map((target) => `${target.gameReleaseId}\0${target.recordId}\0${target.fieldPath}\0${target.dimension}`));
  const receipts = w07Weapons.reviewReceipts.filter((receipt) => receipt.target.gameReleaseId === LEGACY_W07_RELEASE_ID
    && isW13RangedRecord({ recordId: receipt.target.recordId }));
  const recordsById = new Map(records.map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record]));
  assert.ok(receipts.every((receipt) => targetKeys.has(`${receipt.target.gameReleaseId}\0${receipt.target.recordId}\0${receipt.target.fieldPath}\0${receipt.target.dimension}`)));
  assert.equal(new Set(receipts.map((receipt) => `${receipt.target.gameReleaseId}\0${receipt.target.recordId}\0${receipt.target.fieldPath}\0${receipt.target.dimension}`)).size, receipts.length);
  assert.ok(receipts.every((receipt) => ['approved', 'rejected'].includes(receipt.decision) && receipt.reviewer.kind === 'human'
    && !/synthetic|probe|fixture/iu.test(receipt.reviewer.id)));
  for (const receipt of receipts) {
    const recordKey = `${receipt.target.gameReleaseId}\0${receipt.target.recordId}`;
    if (recordsById.get(recordKey)?.reviewState === 'approved') {
      assert.equal(receipt.decision, 'approved');
      assert.deepEqual(computeReviewDigests(w07Weapons, receipt.target), {
        targetDigest: receipt.targetDigest,
        dependenciesDigest: receipt.dependenciesDigest
      });
    }
  }
  for (const record of records.filter((item) => item.reviewState === 'approved')) {
    const recordReceipts = receipts.filter((receipt) => receipt.target.gameReleaseId === record.gameReleaseId
      && receipt.target.recordId === record.recordId);
    assert.equal(recordReceipts.length, record.reviewTargets.length);
    assert.ok(recordReceipts.every((receipt) => receipt.decision === 'approved'));
  }
  const expectedPublicationState = !w07Weapons.fixtureOnly
    && w07Weapons.records.every((record) => record.reviewState === 'approved')
    && w07Weapons.tombstones.every((item) => item.reviewState === 'approved');
  assert.equal(w07Weapons.publicationEligible, expectedPublicationState);
});
