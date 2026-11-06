import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
test('fixed start instructions contain expected steps and report', () => {
  const text = readFileSync('docs/pipeline/START.md', 'utf8');
  assert.match(text, /## 提示詞/);
  for (let i = 0; i <= 8; i++) assert.match(text, new RegExp(`^${i}\\. `, 'm'));
  for (const word of [
    'pipeline/check-version.mjs',
    'pipeline/verify.mjs',
    'pipeline/write.mjs',
    'pipeline/validate.mjs',
    '遊戲版本',
    '結果',
    '更新項目數',
    '保留上一版的項目',
    '保留上一版的類別',
    '需要使用者處理的事',
    'commit',
  ])
    assert.ok(text.includes(word), word);
  for (const word of ['MCP', 'subagent', '子代理', 'Claude Code 專用', 'Codex 專用'])
    assert.ok(!text.includes(word));
});

function slashCommands(text) {
  return [...text.matchAll(/(?:^|\s)(\/[a-zA-Z][^\s]*)/gm)]
    .map((match) => match[1])
    .filter((token) => !/[/.]/.test(token.slice(1)));
}
test('slash command detection excludes paths', () => {
  assert.deepEqual(slashCommands('/commit'), ['/commit']);
  for (const path of ['pipeline/check-version.mjs', 'docs/pipeline/START.md', 'data/1.13.4']) {
    assert.deepEqual(slashCommands(path), []);
  }
  assert.deepEqual(slashCommands(readFileSync('docs/pipeline/START.md', 'utf8')), []);
});
