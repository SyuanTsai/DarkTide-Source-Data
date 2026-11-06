import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync,readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { root,cli } from './helpers.mjs';

test('skills real pinned commit: coverage and identical bytes',{skip:process.env.PIPELINE_REAL_SMOKE!=='1'},t=>{
  const dir=mkdtempSync(path.join(tmpdir(),'syp385-skills-real-'));
  const state=path.join(dir,'state.json');
  const run=(script,args)=>{const v=cli(script,args);assert.equal(v.status,0,v.stderr+v.stdout);return v;};
  run('extract-text.mjs',['--private-repo','F:/GitFile/Persion - Games/DARKTIDE User Setting','--private-ref','origin/master','--text-batch','25606770','--work-dir',dir,'--state',state]);
  const args=['--source-code-repo','F:/GitFile/Persion - Games/Darktide-Source-Code','--commit','ba6c148f3c2768ca3ce20d846a12e56e2f433f3e','--text-batch','25606770','--work-dir',dir,'--state',state];
  run('extract-skills.mjs',args);
  const bytes=readFileSync(path.join(dir,'extract/skills.json')),data=JSON.parse(bytes);
  assert.equal(data.status,'ok');assert.ok(data.items.length>=550 && data.items.length<=700,`${data.items.length} items`);
  const official=data.items.filter(i=>i.name.origin==='official').length;
  assert.ok(official/data.items.length>=0.9,`${official}/${data.items.length} official names`);
  run('extract-skills.mjs',args);assert.deepEqual(readFileSync(path.join(dir,'extract/skills.json')),bytes);
  const count=(xs,key)=>xs.reduce((a,x)=>(a[key(x)]=(a[key(x)]??0)+1,a),{});
  const params=data.items.flatMap(i=>Object.values(i.values.params));
  t.diagnostic(JSON.stringify({items:data.items.length,archetypes:count(data.items,i=>i.values.archetype),excluded:data.excluded.length,params:params.length,unknown:params.filter(p=>p.value===null).length,official,problems:count(data.problems,p=>p.code),artifact:path.relative(root,dir)}));
});
