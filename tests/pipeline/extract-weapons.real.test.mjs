import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {cli} from './helpers.mjs';

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
 // Spec12 pinned closure revokes all stat endpoints, retaining independent ammo values.
 assert.equal(counts.stats,0);assert.equal(counts.unknown,4065);
 assert.equal(counts.problems.UNRESOLVED_STAT,4061);
 assert.equal(counts.unresolvedReasons.DYNAMIC_VALUE,4061);
 assert.deepEqual(data.items.find(i=>i.key==='bolter_p1_m1').values.params.ammo_clip,{value:[10,20]});
 t.diagnostic(JSON.stringify(counts));
 const samples={};
 for(const p of data.problems.filter(x=>x.code==='UNRESOLVED_STAT'))if((samples[p.reason]??=[]).length<3)samples[p.reason].push({id:p.id,key:p.key});
 t.diagnostic(JSON.stringify(samples));
 run('extract-weapons.mjs',args);
 assert.deepEqual(readFileSync(file),first);
});
