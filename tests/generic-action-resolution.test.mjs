import assert from 'node:assert/strict';
import test from 'node:test';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import { makeAttackActionResolution } from '../scripts/content/contract-w07-weapons.mjs';
import { assertAttackActionResolution, makeAttackActionResolutionPatch, mergeGenericWeaponCandidate } from '../scripts/content/imports/generic-weapon-templates.mjs';
import { buildActionResolutionCandidate, inspectActionResolutions } from '../scripts/content/imports/generic-action-resolution-approval.mjs';

function fixture(origin = 'weapon-template') {
  const sourceRef = { sourceId: 'fixture:source', gameReleaseId: 'fixture:release' };
  const sourceLocator = { sourceRef, path: 'fixture.lua', line: 1, fieldPath: 'actions' };
  const startInput = { inputKey: 'attack', sourceLocator };
  const incoming = [1, 2].map(line => ({ fromAction: `idle_${line}`, toAction: 'attack', inputKey: 'attack', sourceLocator: { ...sourceLocator, line }, conditions: [] }));
  const outgoing = { fromAction: 'attack', toAction: 'idle', inputKey: 'release', sourceLocator, conditions: [{ fieldPath: 'condition', rawValue: 'check()', sourceLocator }] };
  const profile = {
    recordId: 'fixture:profile', gameReleaseId: sourceRef.gameReleaseId, kind: 'attack-profile',
    payload: { action: 'attack', continuations: [outgoing, outgoing],
      damageProfileRefs: [{ recordId: 'fixture:damage', gameReleaseId: sourceRef.gameReleaseId }],
      sourceBindings: [{ branch: 'default', profileRef: { recordId: 'fixture:damage', gameReleaseId: sourceRef.gameReleaseId }, rawValue: 'fixture_damage', sourceLocator }]
    }, sourceRefs: [],
    dataCoverage: { status: 'partial', missing: [{ field: '/payload/actionResolution', reasonCode: 'NOT_IMPORTED' }, { field: '/runtime', reasonCode: 'NOT_IMPORTED' }] },
    reviewTargets: [{ fieldPath: '/payload/action', dimension: 'technical' }], reviewState: 'approved'
  };
  const weapon = {
    recordId: 'fixture:weapon', gameReleaseId: sourceRef.gameReleaseId, kind: 'weapon',
    payload: { familyId: 'fixture', attackProfileRefs: [{ recordId: profile.recordId, gameReleaseId: profile.gameReleaseId }], actionContinuations: [...incoming, outgoing, outgoing],
      actionProfileResolution: { staticClosure: { profileBindingCount: 1 }, localActions: origin === 'weapon-template' ? [{ action: 'attack', startInput }] : [], fallbackActions: origin === 'base-template-settings' ? [{ action: 'attack', startInput: null }] : [] }
    }, reviewTargets: [], reviewState: 'approved'
  };
  return { profile, weapon, sourceRef };
}

test('minimal action patch reuses chainaxe resolution and preserves unrelated fields', () => {
  const { profile, weapon, sourceRef } = fixture();
  const original = structuredClone(profile);
  const { patch } = makeAttackActionResolutionPatch(profile, weapon);
  assert.deepEqual(profile, original);
  assert.deepEqual(patch.fields, [{ fieldPath: '/payload/actionResolution', value: makeAttackActionResolution(profile, weapon) }]);
  assert.deepEqual(patch.reviewTargets, [{ fieldPath: '/payload/actionResolution', dimension: 'technical' }]);
  assert.deepEqual(patch.dataCoverage.missing, [original.dataCoverage.missing[1]]);
  assert.deepEqual(patch.sourceRefs, [sourceRef]);
  const authoring = { records: [profile, weapon], reviewReceipts: [], gameReleases: [], sourceRefs: [], sourceSnapshots: [], tombstones: [] };
  const { candidate } = buildActionResolutionCandidate(authoring);
  const pending = mergeGenericWeaponCandidate(authoring, candidate);
  assert.equal(pending.records[0].reviewState, 'pending');
  assert.deepEqual(pending.records[0].payload.actionResolution.branchBindings, original.payload.sourceBindings);
  assert.deepEqual(pending.records[0].payload.continuations, original.payload.continuations);
  assert.equal(inspectActionResolutions(pending).missingActionResolution, 0);
  assert.equal(inspectActionResolutions(pending).bindingMismatch, 0);
  assert.equal(buildActionResolutionCandidate(pending).candidate.patches.length, 0);
});

test('fallback ownership preserves absent start input and writes nonempty branch bindings', () => {
  const { profile, weapon } = fixture('base-template-settings');
  const value = makeAttackActionResolution(profile, weapon);
  assert.equal(value.origin, 'base-template-settings');
  assert.equal(value.startInput, null);
  assert.deepEqual(value.branchBindings, profile.payload.sourceBindings);
  assert.equal(value.inputBindings.length, 1);
  assert.equal(value.runtimeConditions[0].execution, 'not-evaluated');
  assertAttackActionResolution(profile, weapon, value);
  delete profile.payload.sourceBindings;
  value.branchBindings = [];
  assertAttackActionResolution(profile, weapon, value);
  assert.throws(() => makeAttackActionResolution(profile, weapon), /nonempty source bindings/);
});

test('legacy source bindings use the generic parser and only the listed matching damage profile', () => {
  const { profile, weapon, sourceRef } = fixture();
  delete profile.payload.sourceBindings;
  const original = structuredClone(profile);
  const damage = { recordId: 'fixture:damage', gameReleaseId: profile.gameReleaseId, kind: 'damage-profile', payload: { profileKey: 'fixture_damage' } };
  const context = {
    template: { path: 'fixture.lua', source: 'weapon_template.actions = { attack = { damage_profile = DamageProfileTemplates.fixture_damage } }' },
    resolveSource: () => sourceRef, indirectProfileCatalog: new Map(),
    recordsByKey: new Map([[`${damage.gameReleaseId}\0${damage.recordId}`, damage]])
  };
  const { patch } = makeAttackActionResolutionPatch(profile, weapon, context);
  assert.deepEqual(profile, original);
  const bindings = patch.fields.find(f => f.fieldPath === '/payload/sourceBindings').value;
  assert.equal(bindings.length, 1);
  assert.deepEqual(bindings[0].profileRef, profile.payload.damageProfileRefs[0]);
  assert.equal(bindings[0].rawValue, 'fixture_damage');
  assert.equal(bindings[0].sourceLocator.fieldPath, 'weapon_template.actions.attack.damage_profile');
  assert.ok(patch.reviewTargets.some(t => t.fieldPath === '/payload/sourceBindings' && t.dimension === 'technical'));
  assert.deepEqual(patch.fields.find(f => f.fieldPath === '/payload/actionResolution').value.branchBindings, bindings);
  damage.payload.profileKey = 'unlisted_damage';
  assert.match(makeAttackActionResolutionPatch(profile, weapon, context).unresolved.reason, /matches 0 existing damageProfileRefs/);
  context.template.source = 'weapon_template.actions = { attack = {} }';
  assert.match(makeAttackActionResolutionPatch(profile, weapon, context).unresolved.reason, /no direct profile bindings/);
  assert.deepEqual(profile, original);
});

test('unresolved owners retain missing markers and report weapon, profile, action and reason', () => {
  for (const count of [0, 2]) {
    const { profile, weapon } = fixture();
    weapon.payload.actionProfileResolution.localActions = Array.from({ length: count }, () => ({ action: 'attack' }));
    const original = structuredClone(profile);
    const { patch, unresolved } = makeAttackActionResolutionPatch(profile, weapon);
    assert.equal(patch, undefined);
    assert.deepEqual(unresolved, { weapon: weapon.recordId, profile: profile.recordId, action: 'attack', reason: `Expected one action row; found ${count}` });
    assert.deepEqual(profile, original);
    assert.throws(() => assertAttackActionResolution(profile, weapon, { origin: 'weapon-template' }), /exactly one/);
  }
});

test('Source check rejects incorrect row origin, start input, input order, entry order, scope and branches', () => {
  const { profile, weapon } = fixture();
  const value = makeAttackActionResolution(profile, weapon);
  for (const mutate of [
    v => { v.origin = 'base-template-settings'; },
    v => { v.startInput = null; },
    v => { v.inputBindings.reverse(); },
    v => { v.entryBindings.reverse(); },
    v => { v.targetApplicability = 'all'; },
    v => { v.branchBindings = [{ unexpected: true }]; },
    v => { v.runtimeConditions[0].execution = 'evaluated'; }
  ]) {
    const invalid = structuredClone(value); mutate(invalid);
    assert.throws(() => assertAttackActionResolution(profile, weapon, invalid), /action/);
  }
  profile.payload.sourceBindings = [{ profileRef: { recordId: 'damage', gameReleaseId: profile.gameReleaseId } }];
  assert.throws(() => assertAttackActionResolution(profile, weapon, value), /branchBindings/);
  assertAttackActionResolution(profile, weapon, makeAttackActionResolution(profile, weapon));
});

test('apply CLI accepts the approval option and rejects a missing file before writing', () => {
  const result = spawnSync(process.execPath, ['scripts/content/imports/generic-action-resolution-approval.mjs', '--apply', '--approval', path.join(os.tmpdir(), 'syp-287-missing-approval-file.json')], { encoding: 'utf8' });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /ENOENT/);
  assert.doesNotMatch(result.stderr, /Usage:/);
});
