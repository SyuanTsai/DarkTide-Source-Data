import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
// Scenario: The fixed start instructions describe how to prepare input repositories.
// Purpose: Protect the startup steps and report contract from regressions.
test('UnitT10_fixed start instructions contain expected steps and report', () => {
  const text = readFileSync('docs/pipeline/START.md', 'utf8');
  assert.match(text, /## 提示詞/);
  assert.match(text, /### 第 0 步之前：環境設定/);
  assert.ok(text.includes('不在任何 Git repo 內的本機絕對目錄'));
  assert.ok(text.includes('需要封存到 Google 雲端時，跑完後再上傳'));
  for (const name of ['DARKTIDE_PIPELINE_CLOUD_DIR', 'DARKTIDE_SOURCE_CODE_REPO', 'DARKTIDE_PRIVATE_REPO', 'DARKTIDE_GLOSSARY_FILE']) assert.ok(text.includes(name), name);
  assert.ok(text.includes('Invoke-Git -C $sourceRepo pull --ff-only'));
  assert.ok(text.includes('Invoke-Git -C $privateRepo fetch origin'));
  assert.ok(text.includes('Invoke-Git -C $privateRepo rev-parse --verify $privateRef'));
  assert.ok(!text.includes('git -C $privateRepo status --short'));
  assert.ok(!text.includes('git -C $privateRepo branch --show-current'));
  assert.ok(!text.includes('git -C $privateRepo symbolic-ref'));
  assert.ok(text.includes('- 第 8 步的回報數字由 `node pipeline/check-version.mjs --summary` 重新檢查相同輸入（接續時同樣加上 `--commit $run.sourceCommit --text-batch $run.textBatch`）的版本後產生（不寫入狀態檔）；停止或沒有新版本時項目數皆為 0，其餘引用狀態檔摘要。'));
  for (const phrase of ['5a. damage profile 抽查', '由 astra', '每個武器家族至少抽一個 profile', '近戰多 target', '遠程 near／far', 'powerLevel 明示與未明示', '不得 write 或 commit', 'Source-Code commit 與 path:line', '來源值、輸出值']) assert.ok(text.includes(phrase), phrase);
  assert.ok(text.indexOf('5a. damage profile 抽查') < text.indexOf('6. 寫入：'));
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

test('first 1.13.4 run uses the verified migration baseline and gates writes', () => {
  const text = readFileSync('docs/pipeline/START.md', 'utf8');
  for (const phrase of ['syp-391-v3/baseline/data', 'node pipeline/diff.mjs --data-dir $migrationBaselineData', 'baseline 項目均為 unchanged', '其餘均為 added', '後續版本正常執行', '寫入 repo 前先確認', '第 5a 步抽查完成並一致', "node pipeline/verify.mjs --previous-dir (Join-Path $migrationBaselineData '1.13.4')", "node pipeline/write.mjs --previous-dir (Join-Path $migrationBaselineData '1.13.4')"]) assert.ok(text.includes(phrase), phrase);
});

// Scenario: The operator prepares verify and reports translation conflicts.
// Purpose: Prevent unintended public issue creation and preserve the reporting decision.
test('UnitT20_verify documents issue creation and conflict reporting', () => {
  const text = readFileSync('docs/pipeline/START.md', 'utf8');
  const step5 = text.slice(text.indexOf('5. 檢查：'), text.indexOf('5a. damage profile 抽查'));
  for (const phrase of ['預設 `--issues off`', '公開的 Mods repo', '對外發布', '`--issues create`', '`translationConflicts`', '第 8 步', '使用者決定']) assert.ok(step5.includes(phrase), phrase);
  assert.ok(text.includes('譯名衝突：N 組（是否已建立 Issue）'));
});
