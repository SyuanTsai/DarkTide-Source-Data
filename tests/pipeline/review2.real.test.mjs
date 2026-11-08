import {resolveSourceRepo,resolvePrivateRepo} from '../../pipeline/lib/inputs.mjs';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {cli} from './helpers.mjs';

// Scenario: pinned source and text are extracted through all five stages twice.
// Purpose: preserve review2 endpoints/review5 recovery and review7 external-table revocation.
test('InterT90_review2 pinned text → skills → weapons → blessings → terms twice and concrete findings',{skip:process.env.PIPELINE_REAL_SMOKE!=='1'},t=>{
 const dir=mkdtempSync(path.join(tmpdir(),'syp385-review2-')),state=path.join(dir,'state.json');
 const common=['--text-batch','25606770','--work-dir',dir,'--state',state];
 const text=['--private-repo',resolvePrivateRepo(),'--private-ref','origin/master',...common];
 const args=['--source-code-repo',resolveSourceRepo(),'--commit','ba6c148f3c2768ca3ce20d846a12e56e2f433f3e',...common];
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
 for(const [key,n] of [['bolter_p1_m1',4],['bolter_p1_m2',8]]) {
  const zeros=stats(key).filter(s=>/\.offset_random_range\.4\.(pitch|yaw)$/.test(s.key)&&s.min===0&&s.max===0);
  assert.equal(zeros.length,n,key);
 }
 endpoint('flamer_p1_m1','.targets.1.power_distribution.attack',[18.75,26.25]);
 endpoint('ogryn_powermaul_p1_m1','ogryn_powermaul_activated_impact.radius',[4,8]);
 endpoint('forcestaff_p1_m1','force_staff_ball.power_distribution.attack',[90,150]);
 endpoint('autogun_p1_m1','spread.base.still.immediate_spread.shooting.1.pitch',[0.55,0.325]);
 // Scenario: a write to the imported damage_settings table revokes all member dependencies.
 // Purpose: require exactly the four review7 display-param downgrades, retaining other known values; mechanics unknowns are independent.
 assert.equal(unknown(data.skills.items.map(i=>i.values.params)),8);
 for(const [key,params]of [
  ['veteran_increased_damage_based_on_range',['ranged_close','ranged_far']],
  ['veteran_ranged_power_out_of_melee',['radius']],
  ['veteran_replenish_toughness_outside_melee',['range']],
 ])for(const param of params)assert.deepEqual(data.skills.items.find(i=>i.key===key).values.params[param],{value:null,unknown:'DYNAMIC_VALUE'},key+'.'+param);
 const focus=data.skills.items.find(i=>i.key==='broker_ability_focus_sub_2');
 assert.equal(focus.values.params.damage.value,3);
 const summary={};
 for(const category of categories) {
  const d=data[category];summary[category]={items:d.items?.length??Object.values(d.resources).reduce((n,r)=>n+Object.keys(r).length,0),unknown:unknown(d.items),problems:count(d.problems.map(p=>p.code))};
 }
 summary.weapons.stats=weapons.reduce((n,w)=>n+stats(w.key).length,0);
 summary.weapons.unresolvedReasons=count(data.weapons.problems.filter(p=>p.code==='UNRESOLVED_STAT').map(p=>p.reason));
 summary.weapons.notApplicable=data.weapons.problems.filter(p=>p.code==='NOT_APPLICABLE_STAT').reduce((n,p)=>n+Number(/：([0-9]+) 筆/.exec(p.message)[1]),0);
 t.diagnostic(JSON.stringify({artifact:dir,summary}));
});
