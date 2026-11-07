import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { checkDataFile } from '../../pipeline/lib/data-files.mjs';
import { loadSchemas } from '../../pipeline/lib/json-schema.mjs';

const read = path => JSON.parse(readFileSync(path, 'utf8'));
const profiles = read('tests/pipeline/fixtures/damage-profiles-contract.json');
const weapons = () => read('pipeline/schema/examples/1.1.0-example/weapons.json');
const check = (category, file) => checkDataFile(category, stringifyCanonical(file));

// Scenario: the frozen consumer contract is compared with the embedded definitions.
// Purpose: keep all nested rules identical, including powerLevel and unknown constraints.
test('UnitT05_schema definitions match the approved consumer contract', () => {
  const contract = read('tests/pipeline/fixtures/damage-profiles.schema.json');
  const common = read('pipeline/schema/common.schema.json');
  const rewrite = value => Array.isArray(value) ? value.map(rewrite)
    : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([key, child]) =>
      [key, key === '$ref' ? child.replace('#/$defs/', '#/$defs/damageProfile_') : rewrite(child)])) : value;
  for (const [key, definition] of Object.entries(contract.$defs))
    assert.deepEqual(common.$defs[`damageProfile_${key}`], rewrite(definition));
  const {$schema, $defs, ...shape} = contract;
  assert.deepEqual(common.$defs.damageProfiles, rewrite(shape));
  assert.equal(loadSchemas('tests/pipeline/fixtures').validate('damage-profiles.schema.json', profiles).valid, true);
});

// Scenario: a 1.1 weapon contains the approved contract example.
// Purpose: accept valid profile data while rejecting malformed nested values.
test('UnitT10_accepts contract profiles and rejects malformed values', () => {
  const file = weapons();
  file.items[0].values.damageProfiles = structuredClone(profiles);
  file.items[0].values.attackCombos = [];
  assert.equal(check('weapons', file).valid, true);
  file.items[0].values.damageProfiles[0].distributions[0].attack.min = 'bad';
  assert.equal(check('weapons', file).valid, false);
});

// Scenario: ranged bindings or unknown endpoints violate conditional contract rules.
// Purpose: reject plausible-looking values that consumers must refuse.
test('UnitT15_rejects invalid bindings and unknown endpoint combinations', () => {
  const mutations = [
    p => { delete p[1].bindings[0].powerLevel; },
    p => { p[0].bindings[0].powerLevel = p[1].bindings[0].powerLevel; },
    p => { p[1].bindings[0].template = null; },
    p => { p[0].distributions[0].attack.kind = 'unknown'; },
    p => { p[0].source.line = 0; },
    p => { p[0].distributions[0].attack.extra = true; },
  ];
  for (const mutate of mutations) {
    const file = weapons();
    file.items[0].values.damageProfiles = structuredClone(profiles);
    mutate(file.items[0].values.damageProfiles);
    assert.equal(check('weapons', file).valid, false);
  }
});

// Scenario: profiles appear in old weapons or another category.
// Purpose: protect version and category boundaries.
test('UnitT20_rejects profiles outside modern weapons', () => {
  const old = read('pipeline/schema/examples/0.0.0-example/weapons.json');
  old.items[0].values.damageProfiles = [];
  assert.equal(check('weapons', old).valid, false);
  const skills = read('pipeline/schema/examples/1.1.0-example/skills.json');
  skills.items[0].values.damageProfiles = [];
  assert.equal(check('skills', skills).valid, false);
});

// Scenario: a combo references a profile missing from the profile array.
// Purpose: prevent dangling references in Source-Data.
test('UnitT30_rejects dangling combo profile references', () => {
  const file = weapons();
  const values = file.items[0].values;
  values.damageProfiles = structuredClone(profiles);
  values.attackCombos = [{id:'light',kind:'light',start:'start',steps:[{action:'start',input:'light',name:{en:null,zh:null},damageProfile:'missing',damageProfileUnknown:null}],loopsTo:null,unknown:null,source:{path:'example.lua',line:1}}];
  assert.equal(check('weapons', file).valid, false);
  values.attackCombos[0].steps[0].damageProfile = profiles[0].id;
  assert.equal(check('weapons', file).valid, true);
});
