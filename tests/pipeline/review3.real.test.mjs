import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {cli} from './helpers.mjs';
import {assertRevokedEndpoint} from './pinned-numeric-expectations.mjs';

// Scenario: pinned source and text batch are extracted in sequence twice.
// Purpose: protect review3/review4/review5 unknown evidence, referential integrity and byte determinism.
test('InterT80_review3_review4_review5 pinned extraction twice and concrete findings',{skip:process.env.PIPELINE_REAL_SMOKE!=='1'},t=>{
 const dir=mkdtempSync(path.join(tmpdir(),'syp385-review3-')),state=path.join(dir,'state.json');
 const common=['--text-batch','25606770','--work-dir',dir,'--state',state];
 const text=['--private-repo',process.env.DARKTIDE_PRIVATE_REPO,'--private-ref','origin/master',...common];
 const args=['--source-code-repo',process.env.DARKTIDE_SOURCE_CODE_REPO,'--commit','ba6c148f3c2768ca3ce20d846a12e56e2f433f3e',...common];
 const categories=['text','skills','weapons','blessings','terms'],first=new Map();
 for(let pass=0;pass<2;pass++)for(const category of categories) {
  const r=cli(`extract-${category}.mjs`,category==='text'?text:args);assert.equal(r.status,0,r.stderr+r.stdout);
  const bytes=readFileSync(path.join(dir,`extract/${category}.json`));
  if(pass)assert.ok(bytes.equals(first.get(category)),category+' byte equality');else first.set(category,bytes);
 }
 const count=xs=>xs.reduce((a,k)=>(a[k]=(a[k]??0)+1,a),{});
 const unknown=n=>!n||typeof n!=='object'?0:Number(n.value===null&&Boolean(n.unknown))+Object.values(n).reduce((sum,v)=>sum+unknown(v),0);
 const data=Object.fromEntries([...first].map(([k,v])=>[k,JSON.parse(v)]));
 const weapons=data.weapons.items;
 function stats(key){return weapons.find(w=>w.key===key).values.bars.flatMap(b=>b.stats);}
 // Scenario: the same review3-review5 targets depend on revoked shared tables.
 // Purpose: require explicit unknown markers instead of accepting stale endpoints.
 for(const [weapon,keys]of [
  ['chainsword_p1_m1',['damage.action_right_heavy_smiter']],
  ['chainsword_p1_m2',['damage.action_left_heavy','damage.action_right_heavy']],
  ...['ogryn_heavystubber_p2_m1','ogryn_heavystubber_p2_m2','ogryn_heavystubber_p2_m3'].map(k=>[k,['spread.base']]),
  ['ogryn_thumper_p1_m2',['damage.action_shoot_hip','explosion.action_shoot_hip','explosion.action_shoot_zoomed']],
  ...['ogryn_club_p1_m1','ogryn_club_p1_m2','ogryn_club_p1_m3'].map(k=>[k,['damage.action_push']]),
  ['arc_rifle_p1_m1',['weapon_chain_lightning.action_shoot_braced','weapon_chain_lightning.action_shoot_hip']],
  ['ogryn_rippergun_p1_m1',['damage.action_shoot_hip']],
  ['forcestaff_p4_m1',['explosion.action_shoot_charged']],
  ['autogun_p1_m1',['recoil.base']],
  ['ogryn_heavystubber_p1_m2',['spread.base']],
  ['crowbar_p1_m1',['damage.action_light_1']],
  ['ogryn_gauntlet_p1_m1',['explosion.action_shoot_zoomed']],
 ])for(const key of keys)assertRevokedEndpoint(data.weapons,weapon,key);
 assert.equal(unknown(data.skills.items),1361);
 const stimm=data.skills.items.find(i=>i.key==='broker_ability_stimm_field_sub_2');
 assert.deepEqual(stimm?.values.params.stacks,{value:null,unknown:'DYNAMIC_VALUE'});
 const ids=new Set(data.skills.items.map(i=>i.id));
 for(const skill of data.skills.items)assert.ok(skill.values.parents.every(id=>ids.has(id)),skill.id);
 for(const key of ['psyker_crits_regen_toughness_movement_speed','psyker_toughness_on_melee','psyker_toughness_on_vent','psyker_toughness_on_warp_kill']) {
  const skill=data.skills.items.find(i=>i.key===key);assert.ok(skill);assert.ok(!skill.values.parents.some(p=>p.endsWith(':not_selected')));
 }
 const summary={};
 for(const category of categories) {
  const d=data[category];summary[category]={items:d.items?.length??Object.values(d.resources).reduce((n,r)=>n+Object.keys(r).length,0),unknown:unknown(d.items),problems:count(d.problems.map(p=>p.code))};
 }
 summary.weapons.stats=weapons.reduce((n,w)=>n+stats(w.key).length,0);
 summary.weapons.unresolvedReasons=count(data.weapons.problems.filter(p=>p.code==='UNRESOLVED_STAT').map(p=>p.reason));
 summary.weapons.notApplicable=data.weapons.problems.filter(p=>p.code==='NOT_APPLICABLE_STAT').reduce((n,p)=>n+Number(/：([0-9]+) 筆/.exec(p.message)[1]),0);
 t.diagnostic(JSON.stringify({artifact:dir,summary}));
});
