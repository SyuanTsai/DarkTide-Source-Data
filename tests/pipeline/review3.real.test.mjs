import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {cli} from './helpers.mjs';

// Scenario: pinned source and text batch are extracted in sequence twice.
// Purpose: protect review3 values, referential integrity and byte determinism.
test('InterT80_review3 pinned extraction twice and concrete findings',{skip:process.env.PIPELINE_REAL_SMOKE!=='1'},t=>{
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
 function endpoint(weapon,suffix,expected) {
  const found=stats(weapon).filter(s=>s.key.endsWith(suffix));assert.ok(found.length,weapon+suffix);
  assert.ok(found.some(s=>JSON.stringify([s.min,s.max])===JSON.stringify(expected)),JSON.stringify(found));
 }
 for(const key of ['chainsword_p1_m1','chainsword_p1_m2']) {
  const actions=key.endsWith('m1')?['action_right_heavy_smiter']:['action_left_heavy','action_right_heavy'];
  for(const action of actions)for(const [armor,expected] of [['armored',[0.576,1.052]],['super_armor',[0.344,0.6755]]]) {
   const found=stats(key).filter(s=>s.key.includes('.'+action+'.heavy_chainsword_smiter.targets.1.')&&s.key.endsWith('.'+armor));
   assert.ok(found.some(s=>JSON.stringify([s.min,s.max])===JSON.stringify(expected)),JSON.stringify({key,action,armor,found}));
  }
 }
 for(const key of ['ogryn_heavystubber_p2_m1','ogryn_heavystubber_p2_m2','ogryn_heavystubber_p2_m3']) {
  const yaw=stats(key).filter(s=>s.key.endsWith('spread.base.still.immediate_spread.shooting.1.yaw'));
  assert.ok(yaw.length,key);if(key.endsWith('m1'))assert.deepEqual([yaw[0].min,yaw[0].max],[0.078,0.078]);
  assert.ok(!data.weapons.problems.some(p=>p.code==='UNRESOLVED_STAT'&&p.id?.endsWith(':'+key)&&p.reason==='CONDITIONAL_OR_EXPRESSION'));
 }
 endpoint('ogryn_thumper_p1_m2','ogryn_thumper_p1_m2_default_instant.power_distribution_ranged.attack.near',[100,200]);
 assert.ok(!data.weapons.problems.some(p=>p.code==='UNRESOLVED_STAT'&&p.id?.endsWith(':ogryn_thumper_p1_m2')&&p.reason==='BASE_TEMPLATE_PARSE_FAILED'));
 for(const key of ['ogryn_club_p1_m1','ogryn_club_p1_m2','ogryn_club_p1_m3']) {
  endpoint(key,'action_push.ogryn_push.power_distribution.impact',[8.4,15.6]);
  endpoint(key,'action_push.default_push.power_distribution.impact',[8.2,11.8]);
 }
 const angles=stats('arc_rifle_p1_m1').filter(s=>s.key.endsWith('.max_angle'));
 assert.equal(angles.length,2);for(const s of angles)assert.deepEqual([s.min,s.max],[0.436332312999,1.2217304764]);
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
