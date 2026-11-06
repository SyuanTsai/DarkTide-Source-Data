# Darktide 內容更新：固定啟動提示詞

> 使用方式：在 DarkTide-Source-Data repo 根目錄開一個 AI 對話（Claude Code 或 Codex 皆可），把本檔「提示詞」一節整段貼上。不需要其他說明。

## 提示詞

你要執行 Darktide 內容更新流程（SPEC v1，Jira SYP-382）。工作目錄是 DarkTide-Source-Data repo 根目錄。全程用繁體中文回報。流程中沒有人工核准步驟；遇到下面寫明的停止條件才停。

### 規則

1. 數值只能來自腳本輸出，你不可以自己推算或改數字。你的工作只有第 4 步：研究邏輯、寫說明。
2. 每完成一個項目就更新狀態檔，中斷後重跑本提示詞會從狀態檔接續，不重做已完成的項目。
3. 不修改 `pipeline/` 下的腳本。腳本回報找不到預期結構時，照第 5 步的降級規則處理並在回報中列出。
4. 不把大型 JSON 整個讀進對話；需要時用指令只輸出要看的項目。
5. 官方原文逐字照抄；譯名用官方中文；沒有官方中文時才用 Mods repo 的 `Referneces/Translation.md`。

### 步驟

0. 確認工作目錄乾淨：`git status --short` 沒有輸出，並執行 `git pull --ff-only`。
1. 版本與狀態：執行 `node pipeline/check-version.mjs`。
   - 輸出「沒有新版本」：直接跳到第 8 步回報後結束。
   - 輸出 Source-Code commit 與解包批次版本不一致：整批停止，跳到第 8 步。
2. 取數與官方文字：依序執行
   - `node pipeline/extract-text.mjs`
   - `node pipeline/extract-skills.mjs`
   - `node pipeline/extract-weapons.mjs`
   - `node pipeline/extract-blessings.mjs`
   - `node pipeline/extract-terms.mjs`
3. 差異：執行 `node pipeline/diff.mjs`，它會列出新增／變動／移除的項目，並把清單寫進狀態檔。
4. 說明：對狀態檔中還沒寫好說明的每個項目（`node pipeline/diff.mjs --pending` 會列出），讀取腳本給的該項目輸入，寫出五節說明（效果／條件／計算／補充／額外）與勘誤，存到腳本指定的位置，然後執行 `node pipeline/diff.mjs --mark-described <項目 id>`。一次處理一個項目。
5. 檢查：執行 `node pipeline/verify.mjs`。未通過的單一項目會保留上一版內容並記錄原因；這不算失敗，繼續下一步。若輸出「整批停止」，跳到第 8 步。
6. 寫入：執行 `node pipeline/write.mjs`，再執行 `node pipeline/validate.mjs`，通過後 `git add data pipeline/state.json`、commit（訊息：`data: <遊戲版本> 內容更新`）、`git push`。
7. 部署：不需要你操作；Web 的 CI 會讀取 Source-Data 這次的 commit 建置並部署。
8. 回報：在這個對話中用以下格式回報，然後結束。

```
## Darktide 內容更新回報
- 遊戲版本：<版本>（Source-Code <commit 前 7 碼>，解包批次 <批次>）
- 結果：完成／沒有新版本／整批停止（原因）
- 更新項目數：技能 N、武器 N、祝福 N、術語 N
- 保留上一版的項目：<id>：<原因>（逐項列出；沒有寫「無」）
- 保留上一版的類別：<類別>：<原因>（沒有寫「無」）
- 需要使用者處理的事：<逐項列出；沒有寫「無」>
- commit：<hash 或「未 commit」>
```

## 附註

- 第 8 步的回報數字由 `node pipeline/check-version.mjs --summary` 從狀態檔產生，直接引用即可。
- 本檔只寫一般步驟與固定指令。各指令由 WP2～WP4 實作；尚未實作的指令執行失敗時，視為整批停止並回報。
