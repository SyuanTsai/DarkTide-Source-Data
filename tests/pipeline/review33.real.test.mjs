import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createSourceReader} from '../../pipeline/lib/source-reader.mjs';
import {resolveSourceRepo} from '../../pipeline/lib/inputs.mjs';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';

// Scenario: e46b892 clones each of the three heavy stubber hit scan templates.
// Purpose: verify actual binding and source-file locations against the pinned Lua lines.
test('InterT10_real cloned stubber bindings retain their source lines',{skip:process.env.PIPELINE_REAL_SMOKE!=='1'},()=>{
 const reader=createSourceReader({repo:resolveSourceRepo(),commit:'e46b8926cfa3fa35503e4b80b15aab7a804314e4'});
 const engine=createWeaponStats(reader),dir='scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/';
 const path=dir+'settings_templates/ogryn_heavystubber_hitscan_templates.lua';
 for(const [mark,line] of [[1,53],[2,60],[3,68]]) {
  const key=`ogryn_heavystubber_p2_m${mark}`,file=dir+key+'.lua',files=[],problems=[];
  const profiles=engine.damageProfiles({actions:engine.actions(file),file,id:key,files,problems});
  const binding=profiles.flatMap(p=>p.bindings).find(b=>b.template===key+'_braced');
  assert.deepEqual(binding?.source,{path,line});assert.ok(files.some(f=>f.path===path&&f.line===line));
  assert.match(reader.read(path).split(/\r?\n/)[line-1],new RegExp('damage_profile.*'+key.replace('_p2_','_damage_p2_')));
 }
});
