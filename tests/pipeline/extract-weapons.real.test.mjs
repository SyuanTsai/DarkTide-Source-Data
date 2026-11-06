import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {cli} from './helpers.mjs';
test('real weapon smoke',{skip:process.env.PIPELINE_REAL_SMOKE!=='1'},t=>{
 const dir=mkdtempSync(path.join(tmpdir(),'syp385-weapons-'));t.after(()=>rmSync(dir,{recursive:true,force:true}));const state=path.join(dir,'state.json');
 const run=(s,a)=>{const r=cli(s,a);assert.equal(r.status,0,r.stderr+r.stdout);};
 run('extract-text.mjs',['--private-repo','F:/GitFile/Persion - Games/DARKTIDE User Setting','--private-ref','origin/master','--text-batch','25606770','--work-dir',dir,'--state',state]);
 const args=['--source-code-repo','F:/GitFile/Persion - Games/Darktide-Source-Code','--commit','ba6c148f3c2768ca3ce20d846a12e56e2f433f3e','--text-batch','25606770','--work-dir',dir,'--state',state];run('extract-weapons.mjs',args);const file=path.join(dir,'extract/weapons.json'),first=readFileSync(file),data=JSON.parse(first);assert.equal(data.status,'ok');assert.equal(data.items.length,137);assert.ok(data.items.filter(x=>x.values.bars.length).length>=124);assert.ok(data.items.filter(x=>x.name.origin==='official').length>=120);const counts={items:data.items.length,actions:data.items.reduce((n,x)=>n+x.values.actions.length,0),stats:data.items.reduce((n,x)=>n+x.values.bars.reduce((a,b)=>a+b.stats.length,0),0),unknown:data.items.reduce((n,x)=>n+Object.values(x.values.params).filter(p=>p.unknown).length,0),official:data.items.filter(x=>x.name.origin==='official').length,problems:{}};for(const p of data.problems) counts.problems[p.code]=(counts.problems[p.code]??0)+1;t.diagnostic(JSON.stringify(counts));run('extract-weapons.mjs',args);assert.deepEqual(readFileSync(file),first);
});
