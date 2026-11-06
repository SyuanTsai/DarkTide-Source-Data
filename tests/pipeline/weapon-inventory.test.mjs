import { test } from 'node:test';
import assert from 'node:assert/strict';
import { playerWeaponTemplates, weaponPattern, bespokeTraitDefinitions, bespokeTraitsForTemplate } from '../../pipeline/lib/weapon-inventory.mjs';
import { createSourceReader } from '../../pipeline/lib/source-reader.mjs';
import { fixture,put,commit } from './helpers.mjs';

test('player inventory excludes nonplayer groups and grenade abilities; preserves unregistered', t => {
  const f=fixture(t),root='scripts/settings/equipment/weapon_templates/';
  for (const dir of ['bot_weapons','combat_abilities','ability','abilities','devices','grenades','luggables','pocketables','unarmed']) put(f.source,`${root}${dir}/bad_p1_m1.lua`,'local weapon_template = {}\nreturn weapon_template');
  put(f.source,`${root}guns/grenade_p1_m1.lua`,'local weapon_template = {}\nweapon_template.is_grenade_ability_weapon = true\nreturn weapon_template');
  put(f.source,`${root}guns/helper.lua`,'-- local weapon_template = {}\n-- return weapon_template');
  const reader=createSourceReader({repo:f.source,commit:commit(f.source)}),list=playerWeaponTemplates(reader);
  assert.deepEqual(list.map(x => [x.name,x.registered]),[['autogun_p1_m1',true],['autogun_p1_m2',false]]);
  assert.deepEqual(weaponPattern('autogun_p1_m1'),{family:'autogun_p1',mark:'m1'});
  assert.deepEqual(weaponPattern('a_m1_part_m22'),{family:'a_m1_part',mark:'m22'});
  assert.throws(() => weaponPattern('bad'),{name:'StructureError'});
  assert.equal(bespokeTraitDefinitions(reader).length,2);
  const traits=bespokeTraitsForTemplate(reader,list[0]);
  assert.deepEqual(traits.map(t => t.traitKey),['weapon_trait_bespoke_direct','weapon_trait_bespoke_one','weapon_trait_bespoke_two']);
  assert.ok(traits.every(t => t.file && t.line>=1));
});


test('bespoke references only append to traits; direct appended keys keep source lines', t => {
  const f=fixture(t),file='scripts/settings/equipment/weapon_templates/guns/autogun_p1_m1.lua';
  put(f.source,file,`local Traits = require("scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_test")
local weapon_template = {}
weapon_template.traits = {}
local list = table.ukeys(Traits)
table.append(weapon_template.other, list)
table.append(weapon_template.traits, {"weapon_trait_bespoke_added"})
return weapon_template`);
  const reader=createSourceReader({repo:f.source,commit:commit(f.source)}),rows=bespokeTraitsForTemplate(reader,{file});
  assert.deepEqual(rows,[{traitKey:'weapon_trait_bespoke_added',file,line:6}]);
});
