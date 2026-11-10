import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync, readFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { checkNumbers } from '../../pipeline/lib/verify/numbers.mjs';
import { createCodeNumbers } from '../../pipeline/lib/verify/code-numbers.mjs';
import { normalizeLua } from '../../pipeline/lib/mechanics-code-refs.mjs';
import { runVerify } from '../../pipeline/lib/verify/index.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';

const hasNumberFailure = r => r.failures.some(f => f.code === 'T_NUMBER');
function check(values, text, citations = [], codeNumbers) {
  return checkNumbers(values, text, undefined, ['', text, '', '', ''], { citations, codeNumbers });
}

// Scenario: read a 1.13.4 extract reference at its recorded commit. Purpose: verify the real hash and symbol resolver together.
test('InterT60_真實版本的程式引用可驗證', {skip: process.env.PIPELINE_REAL_SMOKE !== '1'}, () => {
  const root = 'F:/GitFile/DarkTide-Pipeline-Regen/1.13.4-syp403/1.13.4/ai/input';
  const file = 'darktide=skill=adamant=adamant_dog_applies_brittleness.json';
  const item = JSON.parse(readFileSync(join(root, file), 'utf8')).item;
  const lookup = createCodeNumbers();
  assert.ok(Object.keys(item.source.codeRefs).some(id => lookup(item, id).length > 0));
});
function cite(...refs) { return [{ section: 'conditions', valueRefs: refs.map(x => `/${x}`) }]; }
const cases = [
  ['UnitT10_同段引用比例可推算倍率', {a:0.15}, '1.15', cite('a'), false],
  ['UnitT20_同段引用整數可推算複利', {a:0.05,b:4}, '1.2155', cite('a','b'), false],
  ['UnitT30_同段引用兩值可加總', {a:100,b:25}, '125', cite('a','b'), false],
  ['UnitT40_同段引用兩值可相乘', {a:1.5,b:2}, '3', cite('a','b'), false],
  ['UnitT50_其他段引用不可作運算元', {a:0.15}, '1.15', [{section:'notes',valueRefs:['/a']}], true],
  ['UnitT60_三個運算元不可加總', {a:11,b:23,c:47}, '81', cite('a','b','c'), true],
  ['UnitT70_不可巢狀運算', {a:2,b:3,c:7}, '35', cite('a','b','c'), true],
  ['UnitT80_次方指數必須同段引用', {a:0.05,b:4}, '1.2155', cite('a'), true],
  ['UnitT90_無引用段落不可使用新規則', {a:0.15}, '1.15', [], true],
];
for (const [name, values, text, citations, expected] of cases) {
  // Scenario: check a number against values and section citations. Purpose: enforce the permitted calculation boundary.
  test(name, () => assert.equal(hasNumberFailure(check(values, text, citations)), expected));
}
function fixture(t, raw = '{ range = 12.5, chance = 0.4 }') {
  const dir = mkdtempSync(join(tmpdir(), 'syp420-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const git = (...args) => execFileSync('git', ['-C', dir, ...args], {stdio:'pipe'}).toString().trim();
  git('init');
  writeFileSync(join(dir, 'fixture.lua'), `fixture = ${raw} -- 99\n`);
  git('add', 'fixture.lua');
  git('-c', 'user.name=Test', '-c', 'user.email=test@example.invalid', 'commit', '-m', 'fixture');
  const commit = git('rev-parse', 'HEAD');
  const sha256 = createHash('sha256').update(normalizeLua(raw)).digest('hex');
  const item = { source: { commit, codeRefs: { ref: {path:'fixture.lua', symbol:'fixture', sha256} } } };
  return {dir, item};
}
const codeCitation = [{section:'conditions', codeRefs:['ref']}];
for (const [name, text, mutation, expected] of [
  ['InterT10_固定程式段字面量可接受', '12.5', null, false],
  ['InterT20_固定程式段字面量可換算百分比', '40%', null, false],
  ['InterT30_程式段沒有字面量時拒絕', '12.6', null, true],
  ['InterT40_程式段雜湊不符時拒絕', '12.5', 'hash', true],
  ['InterT50_來源不可讀時拒絕', '12.5', 'missing', true],
]) {
  // Scenario: query a cited Lua definition in a temporary pinned Git repo. Purpose: reject missing or unverifiable source evidence.
  test(name, t => {
    const {dir,item} = fixture(t);
    if (mutation === 'hash') item.source.codeRefs.ref.sha256 = '0'.repeat(64);
    const lookup = createCodeNumbers({repo: mutation === 'missing' ? join(dir,'missing') : dir});
    assert.equal(hasNumberFailure(check({},text,codeCitation,id => lookup(item,id))), expected);
  });
}

// Scenario: verify a batch containing a bad code hash and another item. Purpose: reject the token without stopping the batch.
test('InterT70_雜湊不符不停止整批驗證', async t => {
  const {dir, item: sourceItem} = fixture(t);
  const root = join(dir, 'batch'), candidateDir = join(root, 'candidate'), extractDir = join(root, 'extract');
  mkdirSync(candidateDir, {recursive:true}); mkdirSync(extractDir, {recursive:true});
  const commit = sourceItem.source.commit, meta = {gameVersion:'1.2.0', sourceCommit:commit, textBatch:'batch'};
  const save = (file, value) => writeFileSync(file, stringifyCanonical(value));
  let targetId;
  for (const category of ['skills','weapons','blessings','terms']) {
    const sample = JSON.parse(readFileSync(new URL(`../../pipeline/schema/examples/0.0.0-example/${category}.json`, import.meta.url)));
    const items = sample.items.map(x => ({...x, source:{...x.source, commit, text:{...x.source.text, batch:'batch'}}}));
    if (category === 'skills') {
      const item = items[0];
      targetId = item.id;
      item.source.codeRefs = structuredClone(sourceItem.source.codeRefs);
      item.source.codeRefs.ref.sha256 = '0'.repeat(64);
      item.explanation.conditions = '範圍12.5公尺';
      item.citations = [{section:'conditions', text:'範圍12.5公尺', codeRefs:['ref'], valueRefs:[]}];
    }
    save(join(candidateDir, `${category}.json`), {...sample, ...meta, items});
    save(join(extractDir, `${category}.json`), {category, status:'ok', reason:null, items:structuredClone(items)});
  }
  const versionInfo=join(root,'version.json'), translation=join(root,'translation.md');
  save(versionInfo, {...meta, sourceGameVersion:'1.2.0', textGameVersion:'1.2.0'});
  writeFileSync(translation, '# 譯名\n');
  const result=await runVerify({root, candidateDir, extractDir, versionInfo, translation, previousDir:'none', sourceCodeRepo:dir, issues:'off'});
  assert.notEqual(result.report.result, 'halted');
  assert.ok(result.report.items.find(row => row.id === targetId)?.failures.some(f => f.code === 'T_NUMBER'));
  assert.ok(result.report.items.length > 1);
});

for (const [name, raw, text, expected] of [
  ['InterT80_負字面量接受負數', '{ x = -12.5 }', '-12.5', false],
  ['InterT81_負字面量接受負百分比', '{ x = -0.125 }', '-12.5%', false],
  ['InterT82_負字面量拒絕明確正數', '{ x = -12.5 }', '+12.5', true],
  ['InterT83_負字面量接受無符號數', '{ x = -12.5 }', '12.5', false],
  ['InterT84_二元減法不產生負字面量', '{ a = 5 - 2 }', '-2', true],
]) {
  // Scenario: verify a number against a pinned Lua literal. Purpose: preserve unary signs without treating subtraction as a negative literal.
  test(name, t => {
    const {dir, item} = fixture(t, raw);
    const lookup = createCodeNumbers({repo: dir});
    assert.equal(hasNumberFailure(check({}, text, codeCitation, id => lookup(item, id))), expected);
  });
}
