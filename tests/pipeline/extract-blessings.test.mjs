import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fixture, put, commit, cli } from './helpers.mjs';
import { expression } from '../../pipeline/lib/blessing-values.mjs';

test('安全運算只接受單一受限運算式',()=>{
  assert.equal(expression({raw:'function (value) return math.floor(value * 100) end'},0.126),12);
  assert.equal(expression({raw:'function (value) return os.execute(value) end'},1),null);
  assert.equal(expression({raw:'function (value) return value; return 1 end'},1),null);
});
test('結構不符時寫入降級結果並 exit 0',t=>{
  const f=fixture(t); let r=cli('extract-text.mjs',f.textArgs); assert.equal(r.status,0,r.stderr);
  r=cli('extract-blessings.mjs',f.sourceArgs); assert.equal(r.status,0,r.stderr);
  assert.equal(JSON.parse(readFileSync(path.join(f.work,'extract/blessings.json'))).status,'structure-mismatch');
});
test('tier 與無武器排除、固定輸入重複一致',t=>{
  const f=fixture(t);
  put(f.source,'scripts/utilities/trait_value_parser.lua','local FIND_VALUE_FUNCTIONS = { trait_override = function() end, buff_template = function() end, rarity_value = function() end }');
  put(f.source,'scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua', '_create_entry("scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_test")\n_create_entry("scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_unused")');
  put(f.source,'scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_unused.lua', 'local templates = {}\ntemplates.weapon_trait_bespoke_unused_p1_test = {}\nreturn templates');
  put(f.source,'scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_test.lua',`local templates = {}
templates.weapon_trait_bespoke_gun_p1_test = { format_values = { damage = { format_type = "percentage", find_value = { find_value_type = "trait_override", buff_template_name = "buff", path = { "damage" } } }, missing = { format_type = "number", find_value = { find_value_type = "trait_override", buff_template_name = "buff", path = { "absent" } } }, fixed = { format_type = "number", value = 2 } }, buffs = { buff = { { damage = 0.1 }, { damage = 0.2 }, { damage = 0.3 }, { damage = 0.4 } } } }
return templates`);
  const sha=commit(f.source), args=[...f.sourceArgs]; args[3]=sha;
  let r=cli('extract-text.mjs',f.textArgs); assert.equal(r.status,0,r.stderr);
  r=cli('extract-blessings.mjs',args); assert.equal(r.status,0,r.stderr); const file=path.join(f.work,'extract/blessings.json'), first=readFileSync(file), data=JSON.parse(first);
  assert.equal(data.status,'ok'); assert.equal(data.items.length,1); assert.equal(data.excluded[0].reason,'no-player-weapon'); assert.deepEqual(data.items[0].values.tiers.map(t=>t.params.damage.value),[10,20,30,40]);
  assert.equal(data.items[0].values.params.fixed.value,2); assert.equal(data.items[0].values.tiers[0].params.missing.unknown,'DYNAMIC_VALUE');
  assert.ok(data.problems.some(p=>p.code==='UNRESOLVED_VALUE')); assert.equal(data.items[0].name.origin,'internal');
  r=cli('extract-blessings.mjs',args); assert.equal(r.status,0,r.stderr); assert.deepEqual(readFileSync(file),first);
});
