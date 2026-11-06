import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { cli } from './helpers.mjs';

test('real blessings pinned smoke', {skip:process.env.PIPELINE_REAL_SMOKE !== '1'}, t => {
  const dir=mkdtempSync(path.join(tmpdir(),'syp385-blessings-'));
  const source='F:/GitFile/Persion - Games/Darktide-Source-Code', priv='F:/GitFile/Persion - Games/DARKTIDE User Setting';
  const run=(script,args)=>{const r=cli(script,args); assert.equal(r.status,0,r.stderr+r.stdout); return r;};
  run('extract-text.mjs',['--private-repo',priv,'--private-ref','origin/master','--text-batch','25606770','--work-dir',dir,'--state',path.join(dir,'state.json')]);
  const args=['--source-code-repo',source,'--commit','ba6c148f3c2768ca3ce20d846a12e56e2f433f3e','--text-batch','25606770','--work-dir',dir,'--state',path.join(dir,'state.json')];
  run('extract-blessings.mjs',args); const first=readFileSync(path.join(dir,'extract/blessings.json')), data=JSON.parse(first);
  assert.equal(data.status,'ok'); assert.equal(data.items.length+data.excluded.length,693);
  const unknown=x=>!x||typeof x!=='object'?0:(x.value===null&&x.unknown?1:0)+Object.values(x).reduce((n,v)=>n+unknown(v),0);
  t.diagnostic(JSON.stringify({items:data.items.length,excluded:data.excluded.length,unknown:unknown(data.items),official:data.items.filter(x=>x.name.origin==='official').length,problems:data.problems.reduce((a,p)=>(a[p.code]=(a[p.code]||0)+1,a),{})}));
  run('extract-blessings.mjs',args); assert.deepEqual(readFileSync(path.join(dir,'extract/blessings.json')),first);
  assert.ok(data.items.filter(x=>x.name.origin==='official').length>=600);
});
