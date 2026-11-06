import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseRequires,resolveReference } from '../../pipeline/lib/lua-closure.mjs';
const files={
 'scripts/a.lua':'local B = require("scripts/b")\nlocal A = {own = {n = 3}, imported = B.values}\nreturn A',
 'scripts/b.lua':'local values = {c = 42}\nlocal export = {values = values}\nreturn export',
 'scripts/c.lua':'local D = require("scripts/d")\nreturn D',
 'scripts/d.lua':'local C = require("scripts/c")\nreturn C',
};
const reader={read(f){if (!(f in files)) {const e=new Error('missing');e.name='StructureError';throw e;} return files[f];}};
test('require aliases ignore comments and strings, and resolve static local/imported chains', () => {
  assert.deepEqual(parseRequires('-- local X = require("bad")\nlocal Y = require("scripts/b")\nlocal Z = require \'scripts/a\''),{Y:'scripts/b.lua',Z:'scripts/a.lua'});
  const own=resolveReference(reader,'scripts/a.lua','A.own.n'); assert.equal(own.node.value,3);assert.equal(own.file,'scripts/a.lua');assert.equal(own.line,2);
  const imported=resolveReference(reader,'scripts/a.lua','A.imported.c');assert.equal(imported.node.value,42);assert.equal(imported.file,'scripts/b.lua');
  assert.equal(resolveReference(reader,'scripts/a.lua','A.missing'),null);
  assert.equal(resolveReference(reader,'scripts/c.lua','D.values'),null);
});
