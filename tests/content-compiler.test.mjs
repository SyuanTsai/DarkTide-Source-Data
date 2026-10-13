import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { compileSource } from '../scripts/content/compile.mjs';

const fixedInput = {
  fixtureOnly: true,
  schemaVersion: '2.0.0',
  gameReleaseId: 'fixture-game-1',
  gameVersion: 'fixture-preview',
  sourceRefs: [{ sourceId: 'fixture:snapshot:a', fixtureOnly: true }],
  records: [{
    recordId: 'fixture:claim:cooldown',
    owner: 'source',
    kind: 'claim',
    gameReleaseId: 'fixture-game-1',
    payload: {
      targetRef: 'fixture:skill:cooldown',
      property: 'cooldown',
      value: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
      context: {},
      basis: 'unknown',
      evidenceRefs: ['fixture:evidence:a']
    },
    sourceRefs: ['fixture:snapshot:a'],
    reviewState: 'pending'
  }, {
    recordId: 'fixture:evidence:a',
    owner: 'source',
    kind: 'evidence',
    gameReleaseId: 'fixture-game-1',
    payload: { sourceRef: 'fixture:snapshot:a', safeSummary: 'Synthetic fixture only; not game evidence.' },
    sourceRefs: ['fixture:snapshot:a'],
    reviewState: 'pending'
  }, {
    recordId: 'fixture:skill:cooldown',
    owner: 'source',
    kind: 'skill',
    gameReleaseId: 'fixture-game-1',
    payload: { claimRefs: [] },
    sourceRefs: ['fixture:snapshot:a'],
    reviewState: 'pending'
  }]
};

// Scenario: The same fixed source authoring is compiled twice in preview mode.
// Purpose: Keep generated files byte-for-byte reproducible for source pins and retries.
test('UnitT00_generates_identical_bytes_for_fixed_source_input', () => {
  const first = compileSource(fixedInput);
  const second = compileSource(fixedInput);
  const encodeFiles = result => [...result.files].map(([name, bytes]) => [name, bytes.toString('base64')]);

  assert.deepEqual(encodeFiles(first), encodeFiles(second));
});

// Scenario: A source record contains an unknown typed value and has only a pending fixture review.
// Purpose: Preserve unknown as unknown and prevent fixture or pending content from entering a formal release.
test('UnitT10_preserves_unknown_values_and_blocks_formal_fixture_output', () => {
  const preview = compileSource(fixedInput);
  const technical = JSON.parse(preview.files.get('technical.json').toString('utf8'));
  const value = technical.records[0].payload.value;

  assert.deepEqual(value, { status: 'unknown', reasonCode: 'NOT_VERIFIED' });
  assert.equal(preview.publicationEligible, false);
  assert.throws(() => compileSource(fixedInput, { mode: 'formal' }), /formal source output requires/);
});

// Scenario: A record declares itself approved without a receipt tied to its content digest.
// Purpose: Ensure an editable approval flag cannot replace a content review receipt.
test('UnitT20_rejects_manual_approval_without_review_receipt', () => {
  const approved = structuredClone(fixedInput);
  approved.records[0].reviewState = 'approved';

  assert.throws(() => compileSource(approved), /matching review receipt/);
});

// Scenario: A record claims ownership outside the Source repository boundary.
// Purpose: Prevent two repositories from authoring the same technical record.
test('UnitT25_rejects_record_with_conflicting_owner', () => {
  const conflicting = structuredClone(fixedInput);
  conflicting.records[0].owner = 'web';

  assert.throws(() => compileSource(conflicting), /owner must be source/);
});

// Scenario: A Source technical record nests Web presentation text below a technical payload object.
// Purpose: Keep each content field with its single owner even when data is nested.
test('UnitT30_rejects_nested_web_owned_fields_in_source_payload', () => {
  const mixedOwner = structuredClone(fixedInput);
  mixedOwner.records[0].payload.metadata = {
    detailSections: { effects: [{ text: 'synthetic' }] }
  };

  assert.throws(() => compileSource(mixedOwner), /Web-owned field/);
});

// Scenario: A technical record includes a Source-owned presentation record kind.
// Purpose: Reject web presentation, localization, announcement, and unknown kinds at the Source boundary.
test('UnitT32_rejects_nontechnical_source_record_kinds', () => {
  for (const kind of ['presentation', 'term-localization', 'announcement', 'weapon-stat', 'curve', 'future-unknown']) {
    const mixedOwner = structuredClone(fixedInput);
    mixedOwner.records.push({
      recordId: 'fixture:content:extra',
      owner: 'source',
      kind,
      gameReleaseId: 'fixture-game-1',
      payload: { name: 'Synthetic presentation text.' },
      sourceRefs: [],
      reviewState: 'pending'
    });
    assert.throws(() => compileSource(mixedOwner), /unsupported Source record kind/);
  }
});

// Scenario: A technical claim includes an unallowlisted raw-text alias.
// Purpose: Keep arbitrary payload keys from flowing into public generated documents.
test('UnitT35_rejects_unallowlisted_payload_fields', () => {
  const unsafe = structuredClone(fixedInput);
  unsafe.records[0].payload.rawText = 'Synthetic private-looking text.';

  assert.throws(() => compileSource(unsafe), /payload field is not allowed/);
});

// Scenario: A public source reference contains an absolute local filesystem path.
// Purpose: Keep machine-local private paths out of the shared repository contract.
test('UnitT36_rejects_absolute_source_reference_paths', () => {
  const localPath = structuredClone(fixedInput);
  localPath.sourceRefs[0].path = 'C:/Users/private/raw.json';

  assert.throws(() => compileSource(localPath), /repository-relative path/);
});

// Scenario: A claim references a record ID absent from the fixed authoring set.
// Purpose: Reject dangling cross-record references before generating a manifest.
test('UnitT40_rejects_unresolved_record_references', () => {
  const dangling = structuredClone(fixedInput);
  dangling.records[2].payload.claimRefs = ['fixture:claim:missing'];

  assert.throws(() => compileSource(dangling), /unresolved claimRefs reference/);
});

// Scenario: One fixture-only package uses the minimum v17-A shapes for a claim, blessing tier, weapon, stat definition/curve, and term.
// Purpose: Keep the Source POC on the shared contract while preserving identity and unknowns without deriving game facts.
test('UnitT48_preserves_minimum_v17_A_technical_shapes', () => {
  const compatible = structuredClone(fixedInput);
  const common = (recordId, kind, payload) => ({
    recordId, owner: 'source', kind, gameReleaseId: 'fixture-game-1', payload,
    sourceRefs: ['fixture:snapshot:a'], reviewState: 'pending'
  });
  compatible.records = [
    common('fixture:skill:a', 'skill', { claimRefs: ['fixture:claim:a'] }),
    common('fixture:claim:a', 'claim', {
      targetRef: 'fixture:skill:a', property: 'syntheticProperty',
      value: { status: 'unknown', reasonCode: 'NOT_VERIFIED' }, context: {}, basis: 'unknown',
      evidenceRefs: ['fixture:evidence:a']
    }),
    fixedInput.records[1],
    common('fixture:blessing:a', 'blessing', { variantRefs: ['fixture:variant:a'] }),
    common('fixture:variant:a', 'blessing-variant', {
      blessingRef: 'fixture:blessing:a', weaponRefs: ['fixture:weapon:a'], definedTiers: [1, 2],
      obtainableTiers: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
      tierValues: [
        { tier: 1, value: { status: 'known', decimal: '0.02', unit: 'ratio' } },
        { tier: 2, value: { status: 'known', decimal: '0.03', unit: 'ratio' } }
      ]
    }),
    common('fixture:weapon:a', 'weapon', {
      familyId: 'fixture:family:a', markId: 'fixture:mark:a', templateKey: 'fixture_template',
      statRefs: ['fixture:stat:a'], attackProfileRefs: [],
      dataCoverage: { status: 'partial', missing: [{ field: 'attackProfileRefs', reasonCode: 'NOT_IMPORTED' }] }
    }),
    common('fixture:stat:a', 'stat-definition', {
      quantity: 'damage', inputUnit: 'rating', outputUnit: 'damage',
      theoreticalInputRange: { status: 'known', min: '0', max: '100', unit: 'rating', inclusive: true },
      obtainableInputRange: { status: 'unknown', reasonCode: 'NOT_VERIFIED' }, curveRef: 'fixture:curve:a'
    }),
    common('fixture:curve:a', 'stat-curve', {
      inputUnit: 'rating', outputUnit: 'damage', knots: [{ x: '0', y: '100' }, { x: '100', y: '140' }],
      interpolation: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
      edgePolicy: { status: 'unknown', reasonCode: 'NOT_VERIFIED' }
    }),
    common('fixture:term:a', 'term', {
      termKey: 'fixture_term', contextKey: 'fixture_context',
      technicalDefinitionEn: 'Synthetic term definition.', claimRefs: []
    })
  ];

  const technical = JSON.parse(compileSource(compatible).files.get('technical.json').toString('utf8'));
  const byId = new Map(technical.records.map(record => [record.recordId, record]));
  assert.deepEqual(byId.get('fixture:claim:a').payload, compatible.records[1].payload);
  assert.deepEqual(byId.get('fixture:variant:a').payload, compatible.records[4].payload);
  assert.deepEqual(byId.get('fixture:weapon:a').payload, compatible.records[5].payload);
  assert.deepEqual(byId.get('fixture:stat:a').payload, compatible.records[6].payload);
  assert.deepEqual(byId.get('fixture:curve:a').payload, compatible.records[7].payload);
  assert.deepEqual(byId.get('fixture:term:a').payload, compatible.records[8].payload);
  assert.equal(technical.fixtureOnly, true);
  assert.equal(technical.publicationEligible, false);
  assert.deepEqual(byId.get('fixture:variant:a').payload.obtainableTiers, { status: 'unknown', reasonCode: 'NOT_VERIFIED' });
});

// Scenario: The checked-in fixture is compiled through the same CLI contract used for a reproducible source package.
// Purpose: Prevent the shared sample file from drifting back to alternate record names or losing A-required identity fields.
test('UnitT49_compiles_the_checked_in_v17_A_fixture_as_preview_only', () => {
  const fixture = JSON.parse(readFileSync(new URL('../content/authoring/w01-preview.json', import.meta.url), 'utf8'));
  const technical = JSON.parse(compileSource(fixture).files.get('technical.json').toString('utf8'));
  const kinds = new Set(technical.records.map(record => record.kind));

  assert.equal(technical.fixtureOnly, true);
  assert.equal(technical.publicationEligible, false);
  assert.equal(kinds.has('stat-definition'), true);
  assert.equal(kinds.has('stat-curve'), true);
  assert.equal(kinds.has('weapon-stat'), false);
  assert.equal(kinds.has('curve'), false);
  assert.equal(technical.gameChanges[0].entityKind, 'claim');
  assert.match(technical.records[0].payload.technicalDefinitionEn, /Synthetic/);
});

// Scenario: A technical record uses a singular reference that has no target.
// Purpose: Validate both singular and plural references before releasing the manifest.
test('UnitT45_rejects_unresolved_scalar_references', () => {
  const dangling = structuredClone(fixedInput);
  dangling.records[0].payload.targetRef = 'fixture:skill:missing';

  assert.throws(() => compileSource(dangling), /unresolved targetRef reference/);
});

// Scenario: A weapon records a typed known min/max range with unit, step, and inclusivity metadata.
// Purpose: Preserve range inputs without treating them as a scalar or calculating a result.
test('UnitT47_preserves_known_weapon_range_without_calculation', () => {
  const ranged = structuredClone(fixedInput);
  ranged.records.push({
    recordId: 'fixture:weapon:range',
    owner: 'source',
    kind: 'weapon',
    gameReleaseId: 'fixture-game-1',
    payload: {
      familyId: 'fixture:family:range',
      markId: 'fixture:mark:range',
      templateKey: 'fixture_weapon_range',
      statRefs: [],
      attackProfileRefs: [],
      dataCoverage: { status: 'partial', missing: [] },
      theoreticalInputRange: {
        status: 'known', min: '0', max: '100', unit: 'rating', step: '0.5', inclusive: true
      }
    },
    sourceRefs: [],
    reviewState: 'pending'
  });

  const technical = JSON.parse(compileSource(ranged).files.get('technical.json').toString('utf8'));
  const weapon = technical.records.find(record => record.recordId === 'fixture:weapon:range');
  assert.deepEqual(weapon.payload.theoreticalInputRange, {
    status: 'known', min: '0', max: '100', unit: 'rating', step: '0.5', inclusive: true
  });
});

// Scenario: The technical payload changes but no explicit game-change record is authored.
// Purpose: Keep a data revision from being reported as an official game-content change.
test('UnitT50_does_not_derive_game_changes_from_a_data_revision', () => {
  const changed = structuredClone(fixedInput);
  changed.records[0].payload.value.reasonCode = 'DIFFERENT_SOURCE_GAP';
  const first = JSON.parse(compileSource(fixedInput).files.get('game-changes.json').toString('utf8'));
  const second = JSON.parse(compileSource(changed).files.get('game-changes.json').toString('utf8'));

  assert.notEqual(first.sourceRevision, second.sourceRevision);
  assert.deepEqual(first.changes, []);
  assert.deepEqual(second.changes, []);
});

// Scenario: One explicit pending change record names a reviewed source record and safe evidence reference.
// Purpose: Keep the same change ID in the generated technical record without adding MOD-impact fields.
test('UnitT60_generates_explicit_game_change_without_mod_impact', () => {
  const withChange = structuredClone(fixedInput);
  withChange.gameChanges = [{
    changeId: 'fixture:change:alpha',
    owner: 'source',
    gameReleaseId: 'fixture-game-1',
    entityKind: 'claim',
    recordId: 'fixture:claim:cooldown',
    operation: 'modified',
    comparison: { fromGameVersion: 'fixture-before', toGameVersion: 'fixture-after' },
    changedFields: [{ field: 'example', before: 'fixture-before', after: 'fixture-after', unit: 'fixture' }],
    evidenceRefs: ['fixture:evidence:a'],
    verificationMethod: 'fixture',
    reviewState: 'pending'
  }];
  const output = JSON.parse(compileSource(withChange).files.get('game-changes.json').toString('utf8'));

  assert.equal(output.changes[0].changeId, 'fixture:change:alpha');
  assert.equal(output.changes[0].reviewState, 'pending');
  assert.equal(Object.hasOwn(output.changes[0], 'impact'), false);
});

import { createHash } from 'node:crypto';

function testCanonical(value) {
  if (Array.isArray(value)) return value.map(testCanonical);
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map(key => [key, testCanonical(value[key])]));
  }
  return value;
}

function testDigest(value) {
  return createHash('sha256').update(JSON.stringify(testCanonical(value), null, 2) + '\n').digest('hex');
}

function approvedWithBoundReceipts() {
  const authoring = structuredClone(fixedInput);
  authoring.fixtureOnly = false;
  authoring.sourceRefs[0] = {
    sourceId: 'fixture:snapshot:a',
    fixtureOnly: false,
    safeSummary: 'Pinned synthetic snapshot.',
    snapshot: { build: 'fixture-build-a', commit: 'fixture-commit-a' }
  };
  authoring.records[0].reviewState = 'approved';
  authoring.records[1].reviewState = 'approved';
  authoring.records[2].reviewState = 'approved';

  const releaseDependency = { gameReleaseId: authoring.gameReleaseId, gameVersion: authoring.gameVersion };
  const sourceDependency = {
    type: 'source',
    id: authoring.sourceRefs[0].sourceId,
    content: authoring.sourceRefs[0]
  };
  const evidence = authoring.records[1];
  const evidenceDependency = {
    type: 'record',
    id: evidence.recordId,
    content: {
      recordId: evidence.recordId,
      kind: evidence.kind,
      gameReleaseId: evidence.gameReleaseId,
      payload: evidence.payload,
      sourceRefs: evidence.sourceRefs
    }
  };
  const skill = authoring.records[2];
  const skillDependency = {
    type: 'record',
    id: skill.recordId,
    content: {
      recordId: skill.recordId,
      kind: skill.kind,
      gameReleaseId: skill.gameReleaseId,
      payload: skill.payload,
      sourceRefs: skill.sourceRefs
    }
  };
  for (const item of authoring.records) {
    const reviewable = {
      recordId: item.recordId,
      kind: item.kind,
      gameReleaseId: item.gameReleaseId,
      payload: item.payload,
      sourceRefs: item.sourceRefs
    };
    const dependencies = item.recordId === 'fixture:claim:cooldown'
      ? [evidenceDependency, skillDependency, sourceDependency]
      : [sourceDependency];
    authoring.reviewReceipts ??= [];
    authoring.reviewReceipts.push({
      targetId: item.recordId,
      targetDigest: testDigest({ targetId: item.recordId, reviewable }),
      dependenciesDigest: testDigest({ gameRelease: releaseDependency, dependencies }),
      reviewer: 'fixture-reviewer',
      reviewedAt: '2026-10-13T00:00:00.000Z',
      dimensions: ['fixture-contract']
    });
  }

  const unrelated = {
    recordId: 'fixture:curve:independent',
    owner: 'source',
    kind: 'stat-curve',
    gameReleaseId: authoring.gameReleaseId,
    payload: {
      inputUnit: 'rating', outputUnit: 'damage', knots: [{ x: '0', y: '0' }],
      interpolation: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
      edgePolicy: { status: 'unknown', reasonCode: 'NOT_VERIFIED' }
    },
    sourceRefs: [],
    reviewState: 'approved'
  };
  authoring.records.push(unrelated);
  authoring.reviewReceipts.push({
    targetId: unrelated.recordId,
    targetDigest: testDigest({
      targetId: unrelated.recordId,
      reviewable: {
        recordId: unrelated.recordId,
        kind: unrelated.kind,
        gameReleaseId: unrelated.gameReleaseId,
        payload: unrelated.payload,
        sourceRefs: unrelated.sourceRefs
      }
    }),
    dependenciesDigest: testDigest({ gameRelease: releaseDependency, dependencies: [] }),
    reviewer: 'fixture-reviewer',
    reviewedAt: '2026-10-13T00:00:00.000Z',
    dimensions: ['fixture-contract']
  });
  return authoring;
}

// Scenario: An approved claim depends on evidence and a pinned source snapshot with stable IDs.
// Purpose: Invalidate the claim receipt when safe evidence or build/snapshot content changes under an unchanged ID.
test('UnitT70_stales_receipts_when_dependency_contents_change', () => {
  const original = approvedWithBoundReceipts();
  const originalResult = compileSource(original);
  const originalTechnical = JSON.parse(originalResult.files.get('technical.json').toString('utf8'));
  assert.equal(originalTechnical.records[0].reviewState, 'approved');
  assert.equal(originalTechnical.records[3].reviewState, 'approved');
  assert.equal(originalResult.publicationEligible, true);

  const changedEvidence = structuredClone(original);
  changedEvidence.records[1].payload.safeSummary = 'Changed synthetic evidence under the same ID.';
  const evidenceResult = compileSource(changedEvidence);
  const evidenceTechnical = JSON.parse(evidenceResult.files.get('technical.json').toString('utf8'));
  assert.equal(evidenceTechnical.records[0].reviewState, 'stale');
  assert.equal(evidenceTechnical.records[3].reviewState, 'approved');
  assert.equal(evidenceResult.publicationEligible, false);
  assert.throws(() => compileSource(changedEvidence, { mode: 'formal' }), /formal source output requires/);

  const changedSnapshot = structuredClone(original);
  changedSnapshot.sourceRefs[0].snapshot.build = 'fixture-build-b';
  const snapshotResult = compileSource(changedSnapshot);
  const snapshotTechnical = JSON.parse(snapshotResult.files.get('technical.json').toString('utf8'));
  assert.equal(snapshotTechnical.records[0].reviewState, 'stale');
  assert.equal(snapshotTechnical.records[3].reviewState, 'approved');
  assert.equal(snapshotResult.publicationEligible, false);
  assert.throws(() => compileSource(changedSnapshot, { mode: 'formal' }), /formal source output requires/);

  const changedRelease = structuredClone(original);
  changedRelease.gameVersion = 'fixture-preview-next';
  const releaseResult = compileSource(changedRelease);
  const releaseTechnical = JSON.parse(releaseResult.files.get('technical.json').toString('utf8'));
  assert.equal(releaseTechnical.records[0].reviewState, 'stale');
  assert.equal(releaseTechnical.records[2].reviewState, 'stale');
  assert.equal(releaseResult.publicationEligible, false);
});
