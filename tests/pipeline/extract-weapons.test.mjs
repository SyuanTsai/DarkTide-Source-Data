import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import path from 'node:path';
import {fixture,put,commit,cli} from './helpers.mjs';
test('weapon extraction preserves static values and pinned output',t=>{
 const f=fixture(t), base='scripts/settings/equipment/weapon_templates/';
 put(f.source,base+'guns/autogun_p1_m1.lua',`local weapon_template = {}\nweapon_template.keywords = {"ranged"}\nweapon_template.base_stats = { test_stat = { display_name = "loc_stat", recoil = { base = { recoil_trait_templates.example } }, damage = { base = { damage_trait_templates.missing } } } }\nweapon_template.displayed_attacks = {primary = {type="shoot", display_name="loc_ranged"}, secondary = {type="aim"}, special = {type="special"}}\nreturn weapon_template\n`);
 put(f.source,base+'weapon_trait_templates/recoil_trait_templates.lua',`local recoil_trait_templates = {}\nrecoil_trait_templates.example = {{"recoil_modifier", {lerp_basic=0.123456, lerp_perfect=0.987654}}}\nreturn recoil_trait_templates\n`);
 put(f.source,base+'guns/autogun_p1_m2.lua',`local weapon_template = {}\nweapon_template.base_stats = { bar = {} }\nweapon_template.displayed_attacks = { primary = {type="melee"} }\nreturn weapon_template\n`);
 const sha=commit(f.source);assert.equal(cli('extract-text.mjs',f.textArgs).status,0);const args=f.sourceArgs.map(x=>x===f.sha?sha:x),run=()=>cli('extract-weapons.mjs',args);let r=run();assert.equal(r.status,0,r.stderr);const file=path.join(f.work,'extract/weapons.json'),first=readFileSync(file),data=JSON.parse(first);assert.equal(data.status,'ok');const w=data.items.find(x=>x.key==='autogun_p1_m1');assert.equal(w.id,'darktide:weapon:autogun_p1_m1');assert.equal(w.values.family,'autogun_p1');assert.equal(w.values.mark,'m1');assert.deepEqual(w.values.actions.map(x=>x.slot),['primary','secondary','special']);assert.deepEqual(w.values.bars[0].stats[0],{key:'recoil.base.recoil_modifier',max:0.987654,min:0.123456,name:{en:null,zh:null}});assert.ok(data.problems.some(x=>x.code==='UNRESOLVED_STAT'));assert.equal(data.problems.filter(x=>x.code==='ARCHETYPES_NOT_EXPOSED').length,1);assert.equal(w.name.en,'Autogun');r=run();assert.equal(r.status,0,r.stderr);assert.deepEqual(readFileSync(file),first);
});

import './extract-weapons.real.test.mjs';
