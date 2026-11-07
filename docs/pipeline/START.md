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

### 第 0 步之前：環境設定

以下指令使用 PowerShell 7（pwsh），在 Source-Data repo 根目錄執行。設定目前程序的環境變數，並把範例路徑換成實際路徑：

- 必填：`$env:DARKTIDE_PIPELINE_CLOUD_DIR = 'C:\path\to\existing-cloud-directory'`。必須是已存在的絕對目錄，供 diff、verify、write 使用。
- 選填：`$env:DARKTIDE_SOURCE_CODE_REPO = 'C:\path\to\Darktide-Source-Code'`；未設定時為 Source-Data repo 的 `../Darktide-Source-Code`。
- 選填：`$env:DARKTIDE_PRIVATE_REPO = 'C:\path\to\DARKTIDE User Setting'`；未設定時為 Source-Data repo 的 `../DARKTIDE User Setting`。
- 選填：`$env:DARKTIDE_GLOSSARY_FILE = 'C:\path\to\Translation.md'`；未設定時為 Source-Data repo 的 `../Warhammer-40-000-DARKTIDE-Mods/Referneces/Translation.md`。

必填變數未設定、不是絕對路徑或目錄不存在時，AI 直接回報「需要使用者處理」及原因後結束，不要建立目錄。選填變數只在需要覆寫預設路徑時設定；worktree 的預設路徑相對於該 worktree。

### 步驟

0. 更新輸入來源：先執行 Source-Data 的 `git status --short`，確認沒有輸出，再執行 `git pull --ff-only`。接著以環境變數或預設值決定其他 repo 路徑：

   ```powershell
   $sourceRepo = if ($env:DARKTIDE_SOURCE_CODE_REPO) { $env:DARKTIDE_SOURCE_CODE_REPO } else { Join-Path (Get-Location) '../Darktide-Source-Code' }
   $privateRepo = if ($env:DARKTIDE_PRIVATE_REPO) { $env:DARKTIDE_PRIVATE_REPO } else { Join-Path (Get-Location) '../DARKTIDE User Setting' }
   ```

   對 Source-Code 依序執行下列檢查及 fetch；每個 Git 指令都必須成功，`status` 不得有輸出。取得的目前分支必須與 `origin/HEAD` 指向的遠端預設分支一致，無法判定也算失敗。

   ```powershell
   git -C $sourceRepo status --short
   git -C $sourceRepo fetch origin
   git -C $sourceRepo branch --show-current
   git -C $sourceRepo symbolic-ref --short refs/remotes/origin/HEAD
   ```

   分支確認方式：例如預設分支輸出為 `origin/master` 時，目前分支必須是 `master`。通過後，執行 `git -C $sourceRepo pull --ff-only`；Source-Code 腳本讀取 `HEAD`。

   Private 只需 fetch 並確認指定的 ref 可解析：

   ```powershell
   git -C $privateRepo fetch origin
   $privateRef = if ($env:DARKTIDE_PRIVATE_REF) { $env:DARKTIDE_PRIVATE_REF } else { 'origin/master' }
   git -C $privateRepo rev-parse --verify $privateRef
   ```

   腳本只讀取 Private 的 `origin/master` 或 `DARKTIDE_PRIVATE_REF` 指定的 ref，不受目前分支與工作目錄影響，因此不檢查也不切換。任何一步失敗，包括工作目錄不乾淨、無法 fast-forward、不在預設分支、fetch 失敗或 Private ref 無法解析，立即整批停止，跳到第 8 步，並在「需要使用者處理的事」列出原因。不得 reset、stash、checkout 或切換分支。
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

- 第 8 步的回報數字由 `node pipeline/check-version.mjs --summary` 重新檢查相同輸入的版本後產生（不寫入狀態檔）；停止或沒有新版本時項目數皆為 0，其餘引用狀態檔摘要。
- 本檔只寫一般步驟與固定指令。各指令由 WP2～WP4b 實作；指令執行失敗時，視為整批停止並回報。
- 環境變數與路徑設定請見「第 0 步之前：環境設定」。
