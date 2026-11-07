import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { buildTerms } from '../../pipeline/extract-terms.mjs';
import { validateExtractItems } from '../../pipeline/lib/extract-output.mjs';

const buff = 'scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua';
const talent = 'scripts/settings/ability/archetype_talents/talents/psyker_talents.lua';
const damage = 'scripts/utilities/attack/damage_calculation.lua';
const smite = 'scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua';
// Scenario: collect the parameter and its evidence, then invalidate each required structure.
// Purpose: protect context and reject unverified or missing source references.
test('UnitT10_collects the exact psyker parameter context and verified sources', async t => {
  const dir = await mkdtemp(path.join(tmpdir(), 'term-context-'));
  t.after(() => rm(dir, {recursive:true,force:true}));
  const files = {
    'scripts/settings/archetype/archetypes/veteran_archetype.lua': 'local archetype_data = { archetype_name = "loc_name", archetype_description = "loc_desc" }',
    'scripts/settings/ui/ui_weapon_pattern_settings.lua': 'local ui_weapon_patterns_settings = { gun = { display_name = "loc_gun" } }',
    'scripts/test/terms.lua': 'return { "loc_glossary_term_smite_damage_multiplier", "loc_glossary_talent_aura" }',
    [buff]: 'templates.other = { stat_buffs = { [stat_buffs.smite_damage_multiplier] = 2 } }\ntemplates.psyker_brain_burst_improved = { stat_buffs = { [stat_buffs.smite_damage_multiplier] = 1.5 } }',
    [talent]: 'psyker_brain_burst_improved = { format_values = { damage = { find_value = { buff_template_name = "psyker_brain_burst_improved", find_value_type = "buff_template", path = { "stat_buffs", stat_buffs.smite_damage_multiplier } } } } }',
    [damage]: 'local is_smite_attack = damage_type == damage_types.smite\nlocal smite_damage_multiplier_stat_buff = is_smite_attack and attacker_stat_buffs.smite_damage_multiplier or 1\ndamage_multiplier = damage_multiplier * smite_damage_multiplier_stat_buff',
    [smite]: 'damage_profile = DamageProfileTemplates.psyker_smite_kill, damage_type = damage_types.smite,'
  };
  const reader = {list: prefix => Object.keys(files).filter(x => x.startsWith(prefix)), exists: f => f in files, read: f => files[f]};
  const envelope = {sourceCommit:'a'.repeat(40),textBatch:'100',gameVersion:'1.2.3'};
  const result = await buildTerms({reader,text:{lookup:()=>null},envelope,workDir:dir});
  const term = result.items.filter(x => x.id === 'darktide:term:psyker:smite-damage-multiplier-parameter');
  assert.equal(term.length,1);
  assert.equal(term[0].values.context,'psyker_brain_burst_improved.stat_buffs');
  assert.deepEqual(term[0].values.params,{});
  assert.deepEqual(term[0].name,{en:'smite_damage_multiplier',zh:null,origin:'internal'});
  assert.deepEqual(term[0].source.files, [{path:talent,line:1},{path:buff,line:2},{path:smite,line:1},{path:damage,line:1},{path:damage,line:2},{path:damage,line:3}]);
  assert.ok(result.items.some(x => x.id === 'darktide:term:keyword:smite_damage_multiplier'));
  assert.deepEqual(validateExtractItems('terms',[...result.items].sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0),envelope),[]);
  const original = files[buff];
  for (const value of ['select(2, { [stat_buffs.smite_damage_multiplier] = 1.5 }, {})', 'function() return { [stat_buffs.smite_damage_multiplier] = 1.5 } end']) {
    files[buff] = original.replace('{ [stat_buffs.smite_damage_multiplier] = 1.5 }', value);
    await assert.rejects(buildTerms({reader,text:{lookup:()=>null},envelope,workDir:dir}), {name:'StructureError'});
  }
  files[buff] = original;
  files[buff] = original.replace('= 1.5', '= function() return 1.5 end');
  await assert.rejects(buildTerms({reader,text:{lookup:()=>null},envelope,workDir:dir}), {name:'StructureError'});
  files[buff] = original;
  const originalDamage = files[damage];
  files[damage] = originalDamage.replace('damage_multiplier = damage_multiplier * smite_damage_multiplier_stat_buff', 'damage_multiplier = 1');
  await assert.rejects(buildTerms({reader,text:{lookup:()=>null},envelope,workDir:dir}), {name:'StructureError'});
  files[damage] = originalDamage;
  files[buff] = files[buff].replace('[stat_buffs.smite_damage_multiplier] = 1.5', '[stat_buffs.renamed] = 1.5');
  await assert.rejects(buildTerms({reader,text:{lookup:()=>null},envelope,workDir:dir}), /smite_damage_multiplier/);
  delete files[buff];
  await assert.rejects(buildTerms({reader,text:{lookup:()=>null},envelope,workDir:dir}), /psyker_buff_templates/);
});
