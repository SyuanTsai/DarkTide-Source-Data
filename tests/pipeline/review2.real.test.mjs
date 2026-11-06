import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {cli} from './helpers.mjs';
import {assertRevokedEndpoint} from './pinned-numeric-expectations.mjs';

// Scenario: pinned source and text are extracted through all five stages twice.
// Purpose: preserve review2 endpoints/review5 recovery and review7 external-table revocation.
test('InterT90_review2 pinned text → skills → weapons → blessings → terms twice and concrete findings',{skip:process.env.PIPELINE_REAL_SMOKE!=='1'},t=>{
 const dir=mkdtempSync(path.join(tmpdir(),'syp385-review2-')),state=path.join(dir,'state.json');
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
 // Scenario: computed writes can alias shared helpers across the pinned closure.
 // Purpose: each former known endpoint has a DYNAMIC_VALUE marker and problem.
 for(const [key,kinds] of [
  ['bolter_p1_m1',['recoil.base','recoil.alternate_fire']],
  ['bolter_p1_m2',['recoil.base','recoil.alternate_fire']],
  ['flamer_p1_m1',['damage.action_shoot']],
  ['ogryn_powermaul_p1_m1',['explosion.action_left_light']],
  ['forcestaff_p1_m1',['damage.action_trigger_explosion']],
  ['autogun_p1_m1',['spread.base']],
 ])for(const kind of kinds)assertRevokedEndpoint(data.weapons,key,kind);
 // Scenario: a write to the imported damage_settings table revokes all member dependencies.
 // Purpose: retain review7 downgrades and require the complete spec12 conservative count.
 assert.equal(unknown(data.skills.items),1361);
 for(const [key,params]of [
  ['veteran_increased_damage_based_on_range',['ranged_close','ranged_far']],
  ['veteran_ranged_power_out_of_melee',['radius']],
  ['veteran_replenish_toughness_outside_melee',['range']],
 ])for(const param of params)assert.deepEqual(data.skills.items.find(i=>i.key===key).values.params[param],{value:null,unknown:'DYNAMIC_VALUE'},key+'.'+param);
 const focus=data.skills.items.find(i=>i.key==='broker_ability_focus_sub_2');
 assert.deepEqual(focus.values.params.damage,{value:null,unknown:'DYNAMIC_VALUE'});
 const summary={};
 for(const category of categories) {
  const d=data[category];summary[category]={items:d.items?.length??Object.values(d.resources).reduce((n,r)=>n+Object.keys(r).length,0),unknown:unknown(d.items),problems:count(d.problems.map(p=>p.code))};
 }
 summary.weapons.stats=weapons.reduce((n,w)=>n+stats(w.key).length,0);
 summary.weapons.unresolvedReasons=count(data.weapons.problems.filter(p=>p.code==='UNRESOLVED_STAT').map(p=>p.reason));
 summary.weapons.notApplicable=data.weapons.problems.filter(p=>p.code==='NOT_APPLICABLE_STAT').reduce((n,p)=>n+Number(/：([0-9]+) 筆/.exec(p.message)[1]),0);
 t.diagnostic(JSON.stringify({artifact:dir,summary}));
});
