import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { canonicalJsonBytes, compileSource, sha256 } from '../scripts/content/compile.mjs';
import { loadAuthoring, parseBuildOptions } from '../scripts/content/build.mjs';

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

// Scenario: A pinned non-fixture Psyker parameter claim and a pending fixture are compiled into both Markdown documents.
// Purpose: Keep real pending content clearly unapproved without labeling it synthetic, while preserving the fixture banner.
test('UnitT51_marks_real_pending_markdown_unapproved_without_fixture_label', () => {
  const releaseId = 'darktide:1.13.2';
  const sourceId = 'public-code:psyker-buff-templates-ba6c148';
  const idMap = new Map([
    ['fixture:claim:cooldown', 'darktide:claim:psyker:brain-burst-improved-smite-damage-multiplier'],
    ['fixture:evidence:a', 'darktide:evidence:psyker:brain-burst-improved-smite-damage-multiplier-code'],
    ['fixture:skill:cooldown', 'darktide:skill:psyker:brain-burst-improved']
  ]);
  const realPending = structuredClone(fixedInput);
  realPending.fixtureOnly = false;
  realPending.gameReleaseId = releaseId;
  realPending.gameVersion = '1.13.2';
  realPending.sourceRefs = [{
    sourceId,
    fixtureOnly: false,
    safeSummary: 'Pinned public Psyker buff-template source.',
    repository: 'https://github.com/Aussiemon/Darktide-Source-Code',
    commit: 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e',
    path: 'scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua',
    snapshot: { commit: 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e' }
  }];
  realPending.records = realPending.records.map(record => ({
    ...record,
    recordId: idMap.get(record.recordId),
    gameReleaseId: releaseId,
    payload: { ...record.payload },
    sourceRefs: [sourceId]
  }));
  const claim = realPending.records.find(record => record.kind === 'claim');
  claim.payload.property = 'template.stat_buffs.smite_damage_multiplier';
  claim.payload.targetRef = idMap.get('fixture:skill:cooldown');
  claim.payload.value = { status: 'known', decimal: '1.5', unit: 'ratio' };
  claim.payload.basis = 'code-observed';
  claim.payload.evidenceRefs = [idMap.get('fixture:evidence:a')];
  const evidence = realPending.records.find(record => record.kind === 'evidence');
  evidence.payload.sourceRef = sourceId;
  evidence.payload.safeSummary = 'The pinned public code assigns decimal 1.5 to the Psyker Smite stat parameter.';

  const realFiles = compileSource(realPending).files;
  const fixtureFiles = compileSource(fixedInput).files;

  for (const name of ['analysis.md', 'game-changes.md']) {
    const pendingMarkdown = realFiles.get(name).toString('utf8');
    assert.match(pendingMarkdown, /> \*\*Pending review:\*\* not approved for publication\./);
    assert.doesNotMatch(pendingMarkdown, /Fixture only \/ pending|synthetic contract output/);

    const fixtureMarkdown = fixtureFiles.get(name).toString('utf8');
    assert.match(fixtureMarkdown, /> \*\*Fixture only \/ pending:\*\* synthetic contract output; not approved game facts\./);
  }
});

// Scenario: A real candidate keeps record identities and references when its release metadata changes.
// Purpose: Follow v17-A identity scope: uniqueness is (recordId, gameReleaseId), while recordId stays release-stable.
test('UnitT52_keeps_candidate_record_identity_stable_across_release_metadata', async () => {
  const candidate = await loadAuthoring('w01-real-claim-candidate.json');
  const expectedIds = [
    'darktide:term:psyker:smite-damage-multiplier-parameter',
    'darktide:skill:psyker:brain-burst-improved',
    'darktide:claim:psyker:brain-burst-improved-smite-damage-multiplier',
    'darktide:evidence:psyker:brain-burst-improved-smite-damage-multiplier-code'
  ];
  const identityProjection = input => ({
    sourceIds: input.sourceRefs.map(source => source.sourceId),
    records: input.records.map(record => ({
      recordId: record.recordId,
      sourceRefs: record.sourceRefs,
      payloadRefs: Object.fromEntries(Object.entries(record.payload).filter(([key]) => /Refs?$/.test(key)))
    }))
  });
  const before = identityProjection(candidate);
  const nextRelease = structuredClone(candidate);
  nextRelease.gameReleaseId = 'darktide:1.13.3';
  nextRelease.gameVersion = '1.13.3';
  for (const record of nextRelease.records) record.gameReleaseId = nextRelease.gameReleaseId;

  assert.deepEqual(candidate.records.map(record => record.recordId), expectedIds);
  assert.deepEqual(before.records.map(record => record.payloadRefs), [
    { claimRefs: [expectedIds[2]] },
    { termRef: expectedIds[0], claimRefs: [expectedIds[2]] },
    { targetRef: expectedIds[1], evidenceRefs: [expectedIds[3]] },
    { sourceRef: 'public-code:psyker-buff-templates-ba6c148' }
  ]);
  assert.deepEqual(identityProjection(nextRelease), before);
});
// Scenario: The default build input and the explicitly selected review candidate are loaded through the allowlisted CLI options.
// Purpose: Preserve the fixture bytes while keeping the real candidate pending and blocked from formal output.
test('UnitT80_selects_the_pending_candidate_without_changing_the_default_fixture_hash', async () => {
  const defaultOptions = parseBuildOptions([]);
  const candidateOptions = parseBuildOptions(['--input', 'w01-real-claim-candidate.json']);
  const defaultAuthoring = await loadAuthoring(defaultOptions.input);
  const candidateAuthoring = await loadAuthoring(candidateOptions.input);
  const defaultResult = compileSource(defaultAuthoring);
  const candidateResult = compileSource(candidateAuthoring);
  const candidateTechnical = JSON.parse(candidateResult.files.get('technical.json').toString('utf8'));

  assert.deepEqual(defaultOptions, { mode: 'preview', input: 'w01-preview.json' });
  assert.equal(defaultResult.sourceRevision, '94d2e7767bf60d56793a6b9a910376c975fef3439afe5931fbb03d763913ef4b');
  assert.equal(defaultResult.manifestSha256, '27a06a383ab06ab0d15720bd2b0a3e0e8e905755679665a32988ca704c80acb6');
  assert.equal(candidateResult.fixtureOnly, false);
  assert.equal(candidateResult.publicationEligible, false);
  assert.deepEqual(candidateAuthoring.gameChanges, []);
  assert.deepEqual(candidateAuthoring.reviewReceipts, []);
  assert.equal(candidateTechnical.records.length, 4);
  assert.equal(candidateTechnical.records.every(record => record.reviewState === 'pending'), true);
  assert.throws(() => compileSource(candidateAuthoring, { mode: 'formal' }), /formal source output requires/);
});

// Scenario: CLI callers provide path-like, arbitrary, repeated, or unknown build flags.
// Purpose: Restrict builds to the two public authoring names and prevent traversal or ambiguous input selection.
test('UnitT81_rejects_unsafe_or_duplicate_build_options', async () => {
  for (const input of ['../private-proof.json', 'C:\\private\\proof.json', 'private-proof.zip']) {
    assert.throws(() => parseBuildOptions(['--input', input]), /input must be exactly/);
    await assert.rejects(loadAuthoring(input), /input must be exactly/);
  }
  assert.throws(() => parseBuildOptions(['--input', 'w01-preview.json', '--input', 'w01-real-claim-candidate.json']), /usage:/);
  assert.throws(() => parseBuildOptions(['--mode', 'preview', '--mode', 'formal']), /usage:/);
  assert.throws(() => parseBuildOptions(['--unknown', 'value']), /usage:/);
});

// Scenario: A pinned public-code representative candidate is selected through the existing allowlisted build interface.
// Purpose: Keep the third preview pending, constrain the Psyker term/claim edits, and preserve prior artifact revisions.
test('UnitT82_selects_pending_representative_candidate_and_preserves_existing_revisions', async () => {
  const inputName = 'w01-real-representative-candidate.json';
  const options = parseBuildOptions(['--mode', 'preview', '--input', inputName]);
  const authoring = await loadAuthoring(options.input);
  const fourRecordAuthoring = await loadAuthoring('w01-real-claim-candidate.json');
  const result = compileSource(authoring);
  const technical = JSON.parse(result.files.get('technical.json').toString('utf8'));

  assert.deepEqual(options, { mode: 'preview', input: inputName });
  assertPsykerPrefixChangesAreScoped(authoring.records, fourRecordAuthoring.records);
  const changedSkill = structuredClone(authoring.records);
  changedSkill[1].payload.claimRefs.push('darktide:claim:unapproved:skill');
  assert.throws(() => assertPsykerPrefixChangesAreScoped(changedSkill, fourRecordAuthoring.records), assert.AssertionError);
  const changedEvidence = structuredClone(authoring.records);
  changedEvidence[3].payload.safeSummary += ' Unreviewed alteration.';
  assert.throws(() => assertPsykerPrefixChangesAreScoped(changedEvidence, fourRecordAuthoring.records), assert.AssertionError);
  assert.deepEqual(authoring.sourceRefs.slice(0, fourRecordAuthoring.sourceRefs.length), fourRecordAuthoring.sourceRefs);
  assert.equal(authoring.fixtureOnly, false);
  assert.deepEqual(authoring.gameChanges, []);
  assert.deepEqual(authoring.reviewReceipts, []);
  assert.equal(result.fixtureOnly, false);
  assert.equal(result.publicationEligible, false);
  assert.equal(technical.records.length, 19);
  assert.equal(technical.records.every(record => record.reviewState === 'pending'), true);
  assert.throws(() => compileSource(authoring, { mode: 'formal' }), /formal source output requires/);

  const fixture = compileSource(await loadAuthoring('w01-preview.json'));
  const fourRecordCandidate = compileSource(await loadAuthoring('w01-real-claim-candidate.json'));
  assert.equal(fixture.sourceRevision, '94d2e7767bf60d56793a6b9a910376c975fef3439afe5931fbb03d763913ef4b');
  assert.equal(fixture.manifestSha256, '27a06a383ab06ab0d15720bd2b0a3e0e8e905755679665a32988ca704c80acb6');
  assert.equal(fourRecordCandidate.sourceRevision, '2a2e9b3f731358c01fb103bde759bf03be726e3e15aa0b623821d8c717d68c11');
  assert.equal(fourRecordCandidate.manifestSha256, '86f617d2ec13cdd905641e7d7230fd1b2d650be6243e2ffde9ad756f57cc6307');
});

// Scenario: A chainaxe template provides literal blessing tiers, a duration binding, and two ordered raw parameter tables.
// Purpose: Preserve only source-observed values, explicit unknowns, and the limited P1 M1 template link without calculating runtime behavior.
test('UnitT83_preserves_representative_blessing_weapon_and_raw_tables', async () => {
  const authoring = await loadAuthoring('w01-real-representative-candidate.json');
  const result = compileSource(authoring);
  const technical = JSON.parse(result.files.get('technical.json').toString('utf8'));
  const byId = new Map(technical.records.map(record => [record.recordId, record]));
  const sourcesById = new Map(authoring.sourceRefs.map(source => [source.sourceId, source]));
  const blessingId = 'darktide:blessing:chainaxe:p1-movement-speed-on-activation';
  const variantId = 'darktide:blessing-variant:chainaxe:p1-movement-speed-on-activation';
  const weaponId = 'darktide:weapon:chainaxe:p1-m1';
  const traitSourceId = 'public-code:chainaxe-p1-traits-ba6c148';
  const traitSource = sourcesById.get(traitSourceId);
  assert.equal(traitSource.commit, 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e');
  assert.equal(traitSource.path, 'scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua');
  assert.match(traitSource.safeSummary, /9670e08685d0aa90ddbc1b4577756a0b0365b610/);
  const variant = byId.get(variantId);

  assert.deepEqual(byId.get(blessingId).payload.variantRefs, [variantId]);
  assert.deepEqual(variant.payload.blessingRef, blessingId);
  assert.deepEqual(variant.payload.weaponRefs, [weaponId]);
  assert.deepEqual(variant.payload.definedTiers, [1, 2, 3, 4]);
  assert.deepEqual(variant.payload.obtainableTiers, { status: 'unknown', reasonCode: 'NOT_VERIFIED' });
  assert.deepEqual(variant.payload.tierValues.map(item => [item.tier, item.value.decimal, item.value.unit]), [
    [1, '0.17', 'ratio'], [2, '0.18', 'ratio'], [3, '0.19', 'ratio'], [4, '0.2', 'ratio']
  ]);

  const durationClaim = byId.get('darktide:claim:chainaxe:p1-movement-speed-on-activation-duration');
  const durationEvidenceId = 'darktide:evidence:chainaxe:p1-movement-speed-on-activation-code';
  assert.equal(durationClaim.payload.targetRef, variantId);
  assert.equal(durationClaim.payload.property, 'template.buff_override.active_duration');
  assert.deepEqual(durationClaim.payload.value, { status: 'known', decimal: '2', unit: 's' });
  assert.equal(durationClaim.payload.basis, 'code-observed');
  assert.deepEqual(durationClaim.payload.evidenceRefs, [durationEvidenceId]);
  assert.equal(byId.get(durationEvidenceId).payload.sourceRef, traitSourceId);
  assert.match(byId.get(durationEvidenceId).payload.safeSummary, /lines 119-143/);
  assert.match(byId.get(durationEvidenceId).payload.safeSummary, /active_duration.*2/);

  const weapon = byId.get(weaponId).payload;
  assert.deepEqual({ familyId: weapon.familyId, markId: weapon.markId, templateKey: weapon.templateKey }, {
    familyId: 'chainaxe_p1', markId: 'chainaxe_p1_m1', templateKey: 'chainaxe_p1_m1'
  });
  assert.equal(Object.hasOwn(weapon, 'theoreticalInputRange'), false);
  assert.deepEqual(weapon.dataCoverage, {
    status: 'partial',
    missing: [{ field: 'action/profile override resolution', reasonCode: 'NOT_IMPORTED' }]
  });

  const attackStat = byId.get('darktide:stat-definition:chainaxe-p1-m1-default-light-attack-power-table');
  const attackCurve = byId.get('darktide:stat-curve:chainaxe-p1-m1-default-light-attack-power-table');
  assert.equal(attackStat.payload.quantity, 'damage_templates.default_light_chainaxe.targets[1].power_distribution.attack');
  assert.equal(attackStat.payload.inputUnit, 'point');
  assert.equal(attackStat.payload.outputUnit, 'point');
  assert.deepEqual(attackStat.payload.theoreticalInputRange, {
    status: 'known', min: '1', max: '2', unit: 'point', step: '1', inclusive: true
  });
  assert.deepEqual(attackStat.payload.obtainableInputRange, { status: 'unknown', reasonCode: 'NOT_VERIFIED' });
  assert.deepEqual(attackCurve.payload.knots, [{ x: '1', y: '80' }, { x: '2', y: '140' }]);
  assert.deepEqual(attackCurve.payload.interpolation, { status: 'unknown', reasonCode: 'NOT_VERIFIED' });
  assert.deepEqual(attackCurve.payload.edgePolicy, { status: 'unknown', reasonCode: 'NOT_VERIFIED' });
  const profileSource = sourcesById.get('public-code:chainaxe-default-light-profile-ba6c148');
  assert.equal(profileSource.path,
    'scripts/settings/equipment/weapon_templates/chain_axes/settings_templates/chain_axe_damage_profile_templates.lua');
  assert.match(profileSource.safeSummary, /damage_lerp_values\.lerp_1_5/);

  const armorStat = byId.get('darktide:stat-definition:chainaxe-p1-m1-default-light-armored-parameter-table');
  const armorCurve = byId.get('darktide:stat-curve:chainaxe-p1-m1-default-light-armored-parameter-table');
  assert.equal(armorStat.payload.quantity,
    'damage_templates.default_light_chainaxe.targets[1].armor_damage_modifier.attack[armor_types.armored]');
  assert.equal(armorStat.payload.inputUnit, 'point');
  assert.equal(armorStat.payload.outputUnit, 'ratio');
  assert.deepEqual(armorCurve.payload.knots, [{ x: '1', y: '1.035' }, { x: '2', y: '1.965' }]);
  assert.deepEqual(armorCurve.payload.interpolation, { status: 'unknown', reasonCode: 'NOT_VERIFIED' });
  assert.deepEqual(armorCurve.payload.edgePolicy, { status: 'unknown', reasonCode: 'NOT_VERIFIED' });
  assert.deepEqual(sourcesById.get('public-code:damage-profile-settings-ba6c148').path,
    'scripts/settings/damage/damage_profile_settings.lua');
  assert.deepEqual(weapon.statRefs, [attackStat.recordId, armorStat.recordId]);
});

// Scenario: Callers try paths, arbitrary filenames, or repeated input flags while selecting the new preview.
// Purpose: Keep the CLI limited to the three checked-in authoring inputs and prevent private-path loading or ambiguous builds.
test('UnitT84_rejects_unsafe_or_duplicate_representative_build_options', async () => {
  for (const input of ['../private-proof.json', 'C:\\private\\proof.json', 'w01-real-representative-candidate.json/../../private-proof.json']) {
    assert.throws(() => parseBuildOptions(['--input', input]), /input must be exactly/);
    await assert.rejects(loadAuthoring(input), /input must be exactly/);
  }
  assert.throws(() => parseBuildOptions([
    '--input', 'w01-real-representative-candidate.json', '--input', 'w01-preview.json'
  ]), /usage:/);
});

// Scenario: The representative preview adds values derived from pinned official description-format bindings.
// Purpose: Keep display parameters and the bounded smite multiplier path Source-owned, provenance-closed, pending, and separate from runtime outcomes.
test('UnitT85_records_official_description_format_values_with_source_closure', async () => {
  const authoring = await loadAuthoring('w01-real-representative-candidate.json');
  const previousRecords = authoring.records.slice(0, 13);
  const previousSources = authoring.sourceRefs.slice(0, 6);
  const result = compileSource(authoring);
  const technical = JSON.parse(result.files.get('technical.json').toString('utf8'));
  const byId = new Map(technical.records.map(record => [record.recordId, record]));
  const sourcesById = new Map(authoring.sourceRefs.map(source => [source.sourceId, source]));

  assert.equal(sha256(canonicalJsonBytes(previousRecords)), '7f0426604bf9dce25f425306051436763caa76c025ae263ec048103a59a1db78');
  assert.equal(sha256(canonicalJsonBytes(previousSources)), 'e966620ba975058711b508c8401165d49a23b1124ec3d33e7d5bb20cbccb34a8');
  assert.equal(technical.records.length, 19);
  assert.equal(technical.sourceRefs.length, 10);
  assert.equal(authoring.gameChanges.length, 0);
  assert.deepEqual(authoring.reviewReceipts, []);
  assert.equal(result.fixtureOnly, false);
  assert.equal(result.publicationEligible, false);
  assert.equal(technical.records.every(record => record.reviewState === 'pending'), true);
  assert.throws(() => compileSource(authoring, { mode: 'formal' }), /formal source output requires/);

  const psykerClaim = byId.get('darktide:claim:psyker:brain-burst-improved-description-display-percent');
  const psykerEvidenceId = 'darktide:evidence:psyker:brain-burst-improved-description-display-percent-code';
  const psykerEvidence = byId.get(psykerEvidenceId);
  assert.equal(psykerClaim.payload.targetRef, 'darktide:skill:psyker:brain-burst-improved');
  assert.equal(psykerClaim.payload.property, 'description.format_values.damage.display_percent');
  assert.deepEqual(psykerClaim.payload.value, { status: 'known', decimal: '50', unit: 'percent' });
  assert.deepEqual(psykerClaim.payload.context, {});
  assert.equal(psykerClaim.payload.basis, 'code-derived');
  assert.deepEqual(psykerClaim.payload.evidenceRefs, [
    'darktide:evidence:psyker:brain-burst-improved-smite-damage-multiplier-code', psykerEvidenceId
  ]);
  assert.deepEqual(psykerClaim.sourceRefs, [
    'public-code:psyker-talents-ba6c148',
    'public-code:psyker-buff-templates-ba6c148',
    'public-code:talent-layout-parser-ba6c148'
  ]);
  assert.equal(psykerEvidence.payload.sourceRef, 'public-code:psyker-talents-ba6c148');
  assert.deepEqual(psykerEvidence.sourceRefs, [
    'public-code:psyker-talents-ba6c148', 'public-code:talent-layout-parser-ba6c148'
  ]);
  assert.match(psykerEvidence.payload.safeSummary, /description-format value is 50 percent/);
  assert.match(psykerEvidence.payload.safeSummary, /not a final damage/);

  const multiplierClaim = byId.get('darktide:claim:psyker:brain-burst-improved-smite-damage-multiplier');
  const multiplierEvidenceId = 'darktide:evidence:psyker:brain-burst-improved-smite-damage-multiplier-code';
  const calculationEvidenceId = 'darktide:evidence:psyker:brain-burst-improved-smite-damage-calculation-code';
  const actionEvidenceId = 'darktide:evidence:psyker:smite-action-damage-type-code';
  const calculationSourceId = 'public-code:damage-calculation-ba6c148';
  const smiteActionSourceId = 'public-code:psyker-smite-action-ba6c148';
  assert.equal(multiplierClaim.payload.property, 'template.stat_buffs.smite_damage_multiplier');
  assert.deepEqual(multiplierClaim.payload.value, { status: 'known', decimal: '1.5', unit: 'ratio' });
  assert.deepEqual(multiplierClaim.payload.context, {});
  assert.deepEqual(multiplierClaim.payload.evidenceRefs, [
    multiplierEvidenceId, calculationEvidenceId, actionEvidenceId
  ]);
  assert.deepEqual(multiplierClaim.sourceRefs, [
    'public-code:psyker-buff-templates-ba6c148', calculationSourceId, smiteActionSourceId
  ]);
  const calculationSource = sourcesById.get(calculationSourceId);
  assert.equal(calculationSource.commit, 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e');
  assert.equal(calculationSource.path, 'scripts/utilities/attack/damage_calculation.lua');
  assert.match(calculationSource.safeSummary, /0befe848712f85d0ae723168d8807d04b6aa280c/);
  assert.match(calculationSource.safeSummary, /lines 506-514/);
  const smiteActionSource = sourcesById.get(smiteActionSourceId);
  assert.equal(smiteActionSource.commit, 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e');
  assert.equal(smiteActionSource.path, 'scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua');
  assert.match(smiteActionSource.safeSummary, /09bae668c991438b9b72e9ef0549cc650bcd6ccd/);
  assert.match(smiteActionSource.safeSummary, /lines 538-562/);

  const calculationEvidence = byId.get(calculationEvidenceId);
  assert.equal(calculationEvidence.payload.sourceRef, calculationSourceId);
  assert.deepEqual(calculationEvidence.sourceRefs, [calculationSourceId]);
  assert.match(calculationEvidence.payload.safeSummary, /damage_type.*damage_types\.smite/);
  assert.match(calculationEvidence.payload.safeSummary, /multiplies.*damage_multiplier/);
  const actionEvidence = byId.get(actionEvidenceId);
  assert.equal(actionEvidence.payload.sourceRef, smiteActionSourceId);
  assert.deepEqual(actionEvidence.sourceRefs, [smiteActionSourceId]);
  assert.match(actionEvidence.payload.safeSummary, /psyker_smite_kill/);
  assert.match(actionEvidence.payload.safeSummary, /damage_types\.smite/);
  const smiteTerm = byId.get('darktide:term:psyker:smite-damage-multiplier-parameter');
  assert.match(smiteTerm.payload.technicalDefinitionEn, /damage_types\.smite/);
  assert.match(smiteTerm.payload.technicalDefinitionEn, /damage_multiplier/);
  assert.match(smiteTerm.payload.technicalDefinitionEn, /does not resolve.*final damage/i);
  assert.deepEqual(smiteTerm.sourceRefs, [
    'public-code:psyker-buff-templates-ba6c148', calculationSourceId, smiteActionSourceId
  ]);

  const movementClaim = byId.get('darktide:claim:chainaxe:p1-movement-speed-on-activation-tier1-display-percent');
  const movementEvidenceId = 'darktide:evidence:chainaxe:p1-movement-speed-on-activation-tier1-display-percent-code';
  const movementEvidence = byId.get(movementEvidenceId);
  assert.equal(movementClaim.payload.targetRef, 'darktide:blessing-variant:chainaxe:p1-movement-speed-on-activation');
  assert.equal(movementClaim.payload.property, 'description.format_values.movement_speed.defined_tier_1_display_percent');
  assert.deepEqual(movementClaim.payload.value, { status: 'known', decimal: '17', unit: 'percent' });
  assert.deepEqual(movementClaim.payload.context, {});
  assert.equal(movementClaim.payload.basis, 'code-derived');
  assert.deepEqual(movementClaim.payload.evidenceRefs, [
    'darktide:evidence:chainaxe:p1-movement-speed-on-activation-code', movementEvidenceId
  ]);
  assert.deepEqual(movementClaim.sourceRefs, [
    'public-code:chainaxe-p1-traits-ba6c148', 'public-code:trait-value-parser-ba6c148'
  ]);
  assert.equal(movementEvidence.payload.sourceRef, 'public-code:chainaxe-p1-traits-ba6c148');
  assert.deepEqual(movementEvidence.sourceRefs, [
    'public-code:chainaxe-p1-traits-ba6c148', 'public-code:trait-value-parser-ba6c148'
  ]);
  assert.match(movementEvidence.payload.safeSummary, /defined tier 1.*0\.17/);
  assert.match(movementEvidence.payload.safeSummary, /description-format value is 17 percent/);
  assert.match(movementEvidence.payload.safeSummary, /not verified obtainable or game-tested/);

  const talentParser = sourcesById.get('public-code:talent-layout-parser-ba6c148');
  assert.equal(talentParser.commit, 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e');
  assert.equal(talentParser.path, 'scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua');
  assert.match(talentParser.safeSummary, /1cd7b67b1069b12325b58f48f5c8f66afbbbaff1/);
  assert.match(talentParser.safeSummary, /lines 379-403/);
  const traitParser = sourcesById.get('public-code:trait-value-parser-ba6c148');
  assert.equal(traitParser.commit, 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e');
  assert.equal(traitParser.path, 'scripts/utilities/trait_value_parser.lua');
  assert.match(traitParser.safeSummary, /6b72f166b74f834256c79736059a03401087baa5/);
  assert.match(traitParser.safeSummary, /lines 8-20/);
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

function assertPsykerPrefixChangesAreScoped(candidateRecords, baselineRecords) {
  const candidate = candidateRecords.slice(0, 4);
  const baseline = baselineRecords.slice(0, 4);
  assert.deepEqual(candidate.map(record => record.recordId), baseline.map(record => record.recordId));
  assert.deepEqual(candidate[1], baseline[1]);
  assert.deepEqual(candidate[3], baseline[3]);

  const termWithoutAuthorizedChanges = structuredClone(candidate[0]);
  termWithoutAuthorizedChanges.payload.technicalDefinitionEn = baseline[0].payload.technicalDefinitionEn;
  termWithoutAuthorizedChanges.sourceRefs = baseline[0].sourceRefs;
  assert.deepEqual(termWithoutAuthorizedChanges, baseline[0]);

  const claimWithoutAuthorizedChanges = structuredClone(candidate[2]);
  claimWithoutAuthorizedChanges.payload.evidenceRefs = baseline[2].payload.evidenceRefs;
  claimWithoutAuthorizedChanges.sourceRefs = baseline[2].sourceRefs;
  assert.deepEqual(claimWithoutAuthorizedChanges, baseline[2]);
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
