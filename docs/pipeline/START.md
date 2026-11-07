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

- 必填：`$env:DARKTIDE_PIPELINE_CLOUD_DIR = 'F:\GitFile\Persion - Games\DarkTide-Pipeline-Work'`（僅為範例）。請使用已存在、不在任何 Git repo 內的本機絕對目錄，供 diff、verify、write 使用；中間檔放在遊戲版本子目錄。需要封存到 Google 雲端時，跑完後再上傳。
- 選填：`$env:DARKTIDE_SOURCE_CODE_REPO = 'C:\path\to\Darktide-Source-Code'`；未設定時由腳本依相鄰目錄優先、往上兩層次之解析。
- 選填：`$env:DARKTIDE_PRIVATE_REPO = 'C:\path\to\DARKTIDE User Setting'`；未設定時由腳本依相鄰目錄優先、往上兩層次之解析。
- 選填：`$env:DARKTIDE_GLOSSARY_FILE = 'C:\path\to\Translation.md'`；未設定時為 Source-Data repo 的 `../Warhammer-40-000-DARKTIDE-Mods/Referneces/Translation.md`。

必填變數未設定、不是絕對路徑或目錄不存在時，AI 直接回報「需要使用者處理」及原因後結束，不要建立目錄。選填變數只在需要覆寫預設路徑時設定；若兩個候選路徑均不存在，腳本使用相鄰路徑。

### 步驟

0. 更新輸入來源：在 Source-Data repo 根目錄執行以下整個區塊。路徑由與取數腳本共用的唯讀解析器提供；Source-Code 使用 `HEAD`，Private 使用 `origin/master` 或指定的 ref。

   ```powershell
   function Invoke-Git {
     git @args
     if ($LASTEXITCODE -ne 0) { throw "git $args 失敗（exit $LASTEXITCODE）" }
   }
   $reposJson = node pipeline/print-repos.mjs
   if ($LASTEXITCODE -ne 0) { throw '來源 repo 路徑解析失敗' }
   $repos = $reposJson | ConvertFrom-Json -ErrorAction Stop
   $sourceRepo = $repos.sourceRepo
   $privateRepo = $repos.privateRepo

   $status = @(Invoke-Git status --porcelain=v1 -z --untracked-files=all)
   $records = @(($status -join "`n") -split "`0" | Where-Object { $_ -ne '' })
   $resume = @($records).Count -ne 0
   $run = $null
   if (Test-Path -LiteralPath pipeline/state.json) {
     $run = (Get-Content -Raw -LiteralPath pipeline/state.json | ConvertFrom-Json -ErrorAction Stop).run
   }
   $artifactPaths = @('pipeline/state.json')
   if ($run) {
     if ($run.gameVersion -notmatch '^\d+(?:\.\d+){1,3}$' -or $run.sourceCommit -notmatch '^[0-9a-f]{40}$' -or $run.textBatch -notmatch '^\d+$') { throw 'state.run 固定輸入無效' }
     $artifactPaths += 'data/current.json'
     $artifactPaths += @('skills', 'weapons', 'blessings', 'terms' | ForEach-Object { "data/$($run.gameVersion)/$_.json" })
   }
   if (-not $resume) {
     Invoke-Git pull --ff-only
   } else {
     for ($i = 0; $i -lt $records.Count; $i++) {
       $entry = $records[$i]
       $paths = @($entry.Substring(3))
       if ($entry.Substring(0, 2) -match '[RC]') {
         $i++
         if ($i -ge $records.Count) { throw '無法解析 Source-Data 狀態' }
         $paths += $records[$i]
       }
       foreach ($path in $paths) {
         if (-not ($artifactPaths -ccontains $path)) {
           throw 'Source-Data 工作目錄不乾淨'
         }
       }
     }
   }
   if ($resume -and -not $run) { throw '接續模式缺少 state.run' }
   if (-not $resume) {
   $status = @(Invoke-Git -C $sourceRepo status --short)
   if ($status.Count -ne 0) { throw 'Source-Code 工作目錄不乾淨' }
   Invoke-Git -C $sourceRepo fetch origin
   $branch = Invoke-Git -C $sourceRepo branch --show-current
   $default = Invoke-Git -C $sourceRepo symbolic-ref --short refs/remotes/origin/HEAD
   if (-not $branch -or $default -ne "origin/$branch") { throw 'Source-Code 不在遠端預設分支' }
   Invoke-Git -C $sourceRepo pull --ff-only
   Invoke-Git -C $privateRepo fetch origin
   $privateRef = if ($env:DARKTIDE_PRIVATE_REF) { $env:DARKTIDE_PRIVATE_REF } else { 'origin/master' }
   Invoke-Git -C $privateRepo rev-parse --verify $privateRef
   }
   ```

   接續模式不更新 Source-Data、Source-Code 或 Private；若要放棄進行中的 run，請使用者自行處理，AI 不執行 reset、stash 或 checkout。

   任何一步失敗或 `throw` 後立即整批停止，跳到第 8 步，並在「需要使用者處理的事」列出原因。Private 的工作目錄及目前分支不影響腳本讀取，不檢查也不切換。不得 reset、stash、checkout 或切換分支。
1. 版本與狀態：接續時執行 `node pipeline/check-version.mjs --commit $run.sourceCommit --text-batch $run.textBatch`；新 run 執行 `node pipeline/check-version.mjs`。固定輸入無法讀取時立即整批停止。接續時各取數腳本依 state.run 讀取相同 commit 與批次；Private ref 必須仍可讀到該批次，否則停止。
   - 輸出「沒有新版本」或 run 已 completed，且接續模式仍有未提交的流程產物：跳到第 6 步的 validate 與交付，不重做 AI 說明或 write。
   - 輸出「沒有新版本」且沒有待提交產物：直接跳到第 8 步回報後結束。
   - 輸出 Source-Code commit 與解包批次版本不一致：整批停止，跳到第 8 步。
2. 取數與官方文字：依序執行
   - `node pipeline/extract-text.mjs`
   - `node pipeline/extract-skills.mjs`
   - `node pipeline/extract-weapons.mjs`
   - `node pipeline/extract-blessings.mjs`
   - `node pipeline/extract-terms.mjs`
3. 差異：執行 `node pipeline/diff.mjs`，它會列出新增／變動／移除的項目，並把清單寫進狀態檔。
4. 說明：對狀態檔中還沒寫好說明的每個項目（`node pipeline/diff.mjs --pending` 會列出），讀取腳本給的該項目輸入，寫出五節說明（效果／條件／計算／補充／額外）與勘誤，存到腳本指定的位置，然後執行 `node pipeline/diff.mjs --mark-described <項目 id>`。一次處理一個項目。
   - 1.1.0 祝福／技能輸入有 `lockedEffect` 時，`effect` 逐字照抄該全文，只另外撰寫 `conditions`／`calculation`／`notes`／`extra` 四節實際運作機制；candidate 會強制使用鎖定效果並設定 `effectOrigin: "official"`。
   - 有 `effectTask: "translate-official-en"` 時，依 `item.official.en` 與 `item.values` 翻譯效果，再寫四節機制；pipeline 會標示為「非官方翻譯」（`unofficial-translation`）。未知值不猜測。AI 輸出不得包含 `effectOrigin`。
5. 檢查：執行 `node pipeline/verify.mjs`。未通過的單一項目會保留上一版內容並記錄原因；這不算失敗，繼續下一步。若輸出「整批停止」，跳到第 8 步。
6. 寫入：執行 `node pipeline/write.mjs`，再執行 `node pipeline/validate.mjs`。接續已 completed 的 run 時從 validate 開始。通過後執行以下 pwsh 指令，只加入該 run 的檔案，再 commit（訊息：`data: <遊戲版本> 內容更新`）、`git push`。

   ```powershell
   $run = (Get-Content -Raw -LiteralPath pipeline/state.json | ConvertFrom-Json -ErrorAction Stop).run
   if (-not $run -or $run.gameVersion -notmatch '^\d+(?:\.\d+){1,3}$') { throw 'state.run 版本無效' }
   $artifactPaths = @('pipeline/state.json', 'data/current.json')
   $artifactPaths += @('skills', 'weapons', 'blessings', 'terms' | ForEach-Object { "data/$($run.gameVersion)/$_.json" })
   Invoke-Git add -- @artifactPaths
   ```
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

- 第 8 步的回報數字由 `node pipeline/check-version.mjs --summary` 重新檢查相同輸入（接續時同樣加上 `--commit $run.sourceCommit --text-batch $run.textBatch`）的版本後產生（不寫入狀態檔）；停止或沒有新版本時項目數皆為 0，其餘引用狀態檔摘要。
- 本檔只寫一般步驟與固定指令。各指令由 WP2～WP4b 實作；指令執行失敗時，視為整批停止並回報。
- 環境變數與路徑設定請見「第 0 步之前：環境設定」。
