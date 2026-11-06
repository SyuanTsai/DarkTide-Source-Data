import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseArgs } from '../../pipeline/lib/inputs.mjs';
import { createSourceReader } from '../../pipeline/lib/source-reader.mjs';

test('argument parsing rejects unknown, repeated, and missing options', () => {
  assert.deepEqual(parseArgs(['--file', 'x', '--json'], {file:'value', json:'flag'}), {file:'x',json:true});
  assert.throws(() => parseArgs(['--bad'], {}));
  assert.throws(() => parseArgs(['--file'], {file:'value'}));
  assert.throws(() => parseArgs(['--json','--json'], {json:'flag'}));
});

test('source reader rejects non-SHA commits before consulting Git', () => {
  assert.throws(() => createSourceReader({repo:'.',commit:'HEAD'}), /40/);
});
import { resolveSourceCode,resolvePrivate,workDir } from '../../pipeline/lib/inputs.mjs';
import { fixture,commit,put } from './helpers.mjs';
import { StructureError } from '../../pipeline/lib/errors.mjs';
import {siblingRepo} from '../../pipeline/lib/inputs.mjs';
import {mkdirSync} from 'node:fs';
import path from 'node:path';

test('review worktree defaults search adjacent then one parent higher, preserving missing path',t=>{
 const f=fixture(t),root=path.join(f.dir,'worktrees','task');mkdirSync(root,{recursive:true});
 assert.equal(siblingRepo('missing',root),path.join(f.dir,'worktrees','missing'));
 for(const name of ['Darktide-Source-Code','DARKTIDE User Setting']) {
  mkdirSync(path.join(f.dir,name));assert.equal(siblingRepo(name,root),path.join(f.dir,name));
  mkdirSync(path.join(f.dir,'worktrees',name));assert.equal(siblingRepo(name,root),path.join(f.dir,'worktrees',name));
 }
});

test('resolves commit version, maximum numeric batch, pinned blobs and validates source paths', t => {
  const f=fixture(t),s=resolveSourceCode({repo:f.source,ref:'master'});
  assert.equal(s.commit,f.sha);assert.equal(s.gameVersion,'1.2.3');
  assert.equal(resolvePrivate({repo:f.priv,ref:'master'}).batch,'100');
  const reader=createSourceReader({repo:f.source,commit:f.sha});
  const file='scripts/test/terms.lua',original=reader.read(file);put(f.source,file,'changed');
  assert.equal(reader.read(file),original);assert.equal(reader.exists(file),true);
  assert.deepEqual(reader.list('scripts/test/'),[file]);assert.throws(() => reader.read('missing'),StructureError);
  for (const p of ['../a','/a','C:/a','a\\b','a/../b']) assert.throws(() => reader.exists(p));
  assert.ok(workDir({root:f.dir,gameVersion:'1.2.3'}).endsWith(path.join('.pipeline-work','1.2.3')));
  assert.equal(workDir({override:f.work}),f.work);
  commit(f.source,'wrong subject');assert.throws(() => resolveSourceCode({repo:f.source}),StructureError);
});

test('manifest missing/invalid is a structural mismatch', t => {
  const f=fixture(t);assert.throws(() => resolvePrivate({repo:f.priv,ref:'master',batch:'101'}),StructureError);
  put(f.priv,'localization/100/manifest.json','{}');commit(f.priv,'bad manifest');
  assert.throws(() => resolvePrivate({repo:f.priv,ref:'master'}),StructureError);
});
