import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {cli} from './helpers.mjs';
import {validateExtractItems} from '../../pipeline/lib/extract-output.mjs';

// Scenario: fixed real source and text batch are extracted twice.
// Purpose: verify inventory, numeric coverage, official names and byte stability.
test('InterT90_real weapon smoke',{skip:process.env.PIPELINE_REAL_SMOKE!=='1'},t=>{
 const dir=mkdtempSync(path.join(tmpdir(),'syp385-weapons-'));
 t.after(()=>rmSync(dir,{recursive:true,force:true}));
 const state=path.join(dir,'state.json');
 const run=(script,args)=>{const result=cli(script,args);assert.equal(result.status,0,result.stderr+result.stdout);};
 run('extract-text.mjs',['--private-repo',process.env.DARKTIDE_PRIVATE_REPO||'F:/GitFile/Persion - Games/DARKTIDE User Setting','--private-ref','origin/master','--text-batch','25606770','--work-dir',dir,'--state',state]);
 const args=['--source-code-repo',process.env.DARKTIDE_SOURCE_CODE_REPO||'F:/GitFile/Persion - Games/Darktide-Source-Code','--commit','ba6c148f3c2768ca3ce20d846a12e56e2f433f3e','--text-batch','25606770','--work-dir',dir,'--state',state];
 run('extract-weapons.mjs',args);
 const file=path.join(dir,'extract/weapons.json'),first=readFileSync(file),data=JSON.parse(first);
 assert.equal(data.status,'ok');
 assert.deepEqual(validateExtractItems('weapons',data.items,data),[]);
 assert.equal(data.items.length,137);
 assert.ok(data.items.filter(x=>x.values.bars.length).length>=124);
 assert.ok(data.items.filter(x=>x.name.origin==='official').length>=120);
 const counts={items:data.items.length,actions:0,stats:0,unknown:0,official:0,problems:{},unresolvedReasons:{}};
 for(const item of data.items) {
  counts.actions+=item.values.actions.length;
  counts.unknown+=Object.values(item.values.params).filter(p=>p.unknown).length;
  counts.official+=Number(item.name.origin==='official');
  for(const bar of item.values.bars) {
   counts.stats+=bar.stats.length;
   assert.equal(new Set(bar.stats.map(x=>x.key)).size,bar.stats.length);
   for(const stat of bar.stats)assert.ok(Number.isFinite(stat.min)&&Number.isFinite(stat.max));
  }
 }
 for(const problem of data.problems) {
  counts.problems[problem.code]=(counts.problems[problem.code]??0)+1;
  if(problem.code==='UNRESOLVED_STAT') {
   assert.equal(typeof problem.reason,'string');
   counts.unresolvedReasons[problem.reason]=(counts.unresolvedReasons[problem.reason]??0)+1;
  }
 }
 assert.ok(counts.stats>0,'真實資料必須解析出數值 stats');
 const summary={weapons:data.items.length,curves:0,curveUnknown:0,curveReasons:{},combos:0,comboUnknown:0,comboReasons:{},damageProfileUnknown:0,melee:0,light:0,heavy:0};
 for(const item of data.items){
  const v=item.values;
  summary.curves+=v.curves.length;summary.combos+=v.attackCombos.length;
  for(const curve of v.curves)if(curve.unknown){summary.curveUnknown++;summary.curveReasons[curve.unknown]=(summary.curveReasons[curve.unknown]??0)+1;}
  for(const combo of v.attackCombos){if(combo.unknown){summary.comboUnknown++;summary.comboReasons[combo.unknown]=(summary.comboReasons[combo.unknown]??0)+1;}summary.damageProfileUnknown+=combo.steps.filter(s=>s.damageProfileUnknown).length;}
  for(const bar of v.bars)for(const stat of bar.stats)assert.equal(v.curves.filter(c=>c.id===stat.curveId&&c.bar===bar.id&&c.stat===stat.key).length,1);
  assert.equal(v.curves.length,v.bars.reduce((n,b)=>n+b.stats.length,0));
  if(v.params.keywords?.value.includes('melee')){summary.melee++;for(const kind of ['light','heavy'])if(v.attackCombos.some(c=>c.kind===kind&&c.steps.length))summary[kind]++;}
 }
 t.diagnostic('SYP-394 '+JSON.stringify(summary));
 for(const item of data.items.filter(i=>['combatknife_p1_m1','combatsword_p1_m1'].includes(i.key)))t.diagnostic(JSON.stringify({weapon:item.key,combos:item.values.attackCombos.map(c=>({kind:c.kind,start:c.start,steps:c.steps.map(s=>({action:s.action,input:s.input,profile:s.damageProfile,unknown:s.damageProfileUnknown})),loopsTo:c.loopsTo,unknown:c.unknown})),curves:item.values.curves.filter(c=>c.interpolation==='linear').slice(0,1)}));
 assert.ok(summary.melee>0);
 assert.ok(summary.light/summary.melee>=0.7,'大多數近戰必須有輕擊 steps');
 assert.ok(summary.heavy/summary.melee>=0.7,'大多數近戰必須有重擊 steps');
 t.diagnostic(JSON.stringify(counts));
 const samples={};
 for(const p of data.problems.filter(x=>x.code==='UNRESOLVED_STAT'))if((samples[p.reason]??=[]).length<3)samples[p.reason].push({id:p.id,key:p.key});
 t.diagnostic(JSON.stringify(samples));
 run('extract-weapons.mjs',args);
 assert.deepEqual(readFileSync(file),first);
});
