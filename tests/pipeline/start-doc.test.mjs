import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
// Scenario: The fixed start instructions describe how to prepare input repositories.
// Purpose: Protect the startup steps and report contract from regressions.
test('UnitT10_fixed start instructions contain expected steps and report', () => {
  const text = readFileSync('docs/pipeline/START.md', 'utf8');
  assert.match(text, /## 提示詞/);
  assert.match(text, /### 第 0 步之前：環境設定/);
  for (const name of ['DARKTIDE_PIPELINE_CLOUD_DIR', 'DARKTIDE_SOURCE_CODE_REPO', 'DARKTIDE_PRIVATE_REPO', 'DARKTIDE_GLOSSARY_FILE']) assert.ok(text.includes(name), name);
  assert.ok(text.includes('Invoke-Git -C $sourceRepo pull --ff-only'));
  assert.ok(text.includes('Invoke-Git -C $privateRepo fetch origin'));
  assert.ok(text.includes('Invoke-Git -C $privateRepo rev-parse --verify $privateRef'));
  assert.ok(!text.includes('git -C $privateRepo status --short'));
  assert.ok(!text.includes('git -C $privateRepo branch --show-current'));
  assert.ok(!text.includes('git -C $privateRepo symbolic-ref'));
  assert.ok(text.includes('- 第 8 步的回報數字由 `node pipeline/check-version.mjs --summary` 重新檢查相同輸入（接續時同樣加上 `--commit $run.sourceCommit --text-batch $run.textBatch`）的版本後產生（不寫入狀態檔）；停止或沒有新版本時項目數皆為 0，其餘引用狀態檔摘要。'));
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
