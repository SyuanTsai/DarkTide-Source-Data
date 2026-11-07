import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { buildTerms } from '../../pipeline/extract-terms.mjs';
import { validateExtractItems } from '../../pipeline/lib/extract-output.mjs';

const buff = 'scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua';
test('collects the exact psyker parameter context, without merging same names', async t => {
  const dir = await mkdtemp(path.join(tmpdir(), 'term-context-'));
  t.after(() => rm(dir, {recursive:true,force:true}));
  const files = {
    'scripts/settings/archetype/archetypes/veteran_archetype.lua': 'local archetype_data = { archetype_name = "loc_name", archetype_description = "loc_desc" }',
    'scripts/settings/ui/ui_weapon_pattern_settings.lua': 'local ui_weapon_patterns_settings = { gun = { display_name = "loc_gun" } }',
    'scripts/test/terms.lua': 'return { "loc_glossary_term_smite_damage_multiplier", "loc_glossary_talent_aura" }',
    [buff]: 'templates.other = { stat_buffs = { [stat_buffs.smite_damage_multiplier] = 2 } }\ntemplates.psyker_brain_burst_improved = { stat_buffs = { [stat_buffs.smite_damage_multiplier] = 1.5 } }'
  };
  const reader = {list: prefix => Object.keys(files).filter(x => x.startsWith(prefix)), exists: f => f in files, read: f => files[f]};
  const envelope = {sourceCommit:'a'.repeat(40),textBatch:'100',gameVersion:'1.2.3'};
  const result = await buildTerms({reader,text:{lookup:()=>null},envelope,workDir:dir});
  const term = result.items.filter(x => x.id === 'darktide:term:psyker:smite-damage-multiplier-parameter');
  assert.equal(term.length,1);
  assert.equal(term[0].values.context,'psyker_brain_burst_improved.stat_buffs');
  assert.deepEqual(term[0].values.params,{});
  assert.deepEqual(term[0].name,{en:'smite_damage_multiplier',zh:null,origin:'internal'});
  assert.equal(term[0].source.files[0].line,2);
  assert.ok(result.items.some(x => x.id === 'darktide:term:keyword:smite_damage_multiplier'));
  assert.deepEqual(validateExtractItems('terms',[...result.items].sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0),envelope),[]);
  files[buff] = files[buff].replace('[stat_buffs.smite_damage_multiplier] = 1.5', '[stat_buffs.renamed] = 1.5');
  await assert.rejects(buildTerms({reader,text:{lookup:()=>null},envelope,workDir:dir}), /smite_damage_multiplier/);
  delete files[buff];
  await assert.rejects(buildTerms({reader,text:{lookup:()=>null},envelope,workDir:dir}), /psyker_buff_templates/);
});
