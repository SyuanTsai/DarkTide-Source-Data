# Darktide 內容更新：固定啟動提示詞

> 使用方式：在 DarkTide-Source-Data repo 根目錄開一個 AI 對話（Claude Code 或 Codex 皆可），把本檔「提示詞」一節整段貼上。不需要其他說明。

## 提示詞

你要執行 Darktide 內容更新流程（SPEC v1，Jira SYP-382）。工作目錄是 DarkTide-Source-Data repo 根目錄。全程用繁體中文回報。流程中沒有人工核准步驟；遇到下面寫明的停止條件才停。

### 規則

1. 數值只能來自腳本輸出，你不可以自己推算或改數字。第 4 步研究邏輯、寫說明；第 5a 步由獨立審查者（也就是和撰寫說明不同的 AI 執行環境）對照來源抽查數值。
2. 每完成一個項目就更新狀態檔，中斷後重跑本提示詞會從狀態檔接續，不重做已完成的項目。
3. 不修改 `pipeline/` 下的腳本。腳本回報找不到預期結構時，照第 5 步的降級規則處理並在回報中列出。
4. 不把大型 JSON 整個讀進對話；需要時用指令只輸出要看的項目。
5. 官方原文逐字照抄；譯名用官方中文；沒有官方中文時才用 Mods repo 的 `Referneces/Translation.md`。

獨立審查者的工具不限。例如在 Codex 用 astra，在 Claude Code 另開子代理；這些只是範例，不是必要條件。

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
   - 輸出「沒有新版本」或 run 已 completed，且接續模式仍有未提交的流程產物：跳到第 5a 步抽查，再接續第 6 步的 validate 與交付，不重做 AI 說明或 write。
   - 輸出「沒有新版本」且沒有待提交產物：直接跳到第 8 步回報後結束。
   - 輸出 Source-Code commit 與解包批次版本不一致：整批停止，跳到第 8 步。
2. 取數與官方文字：依序執行
   - `node pipeline/extract-text.mjs`
   - `node pipeline/extract-skills.mjs`
   - `node pipeline/extract-weapons.mjs`
   - `node pipeline/extract-blessings.mjs`
   - `node pipeline/extract-terms.mjs`
3. 差異：第一次正式執行 1.13.4 時，使用已驗證的 repo 外遷移 baseline 作為前版資料；路徑可依環境設定：

   ```powershell
   $migrationBaselineData = 'F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/migration/syp-391-v3/baseline/data'
   if (-not (Test-Path -LiteralPath (Join-Path $migrationBaselineData 'current.json') -PathType Leaf)) { throw '找不到遷移 baseline，停止執行' }
   node pipeline/diff.mjs --data-dir $migrationBaselineData
   if ($LASTEXITCODE -ne 0) { throw 'diff 失敗' }
   ```

   確認 diff 中 baseline 項目均為 unchanged，其餘均為 added，且沒有 changed／removed；不符立即停止並查明原因。後續版本正常執行 `node pipeline/diff.mjs`，使用 repo 的 `data/`。diff 會列出新增／變動／移除的項目，並把清單寫進狀態檔。
4. 說明：對狀態檔中還沒寫好說明的每個項目（`node pipeline/diff.mjs --pending` 會列出），讀取腳本給的該項目輸入，寫出五節說明（效果／條件／計算／補充／額外）與勘誤，存到腳本指定的位置，然後執行 `node pipeline/diff.mjs --mark-described <項目 id>`。一次處理一個項目。沒有新說明而上一版有同 id 時，verify 會先嘗試組合：非說明欄位取新 extract，explanation／citations／errata 取上一版；有本次 lockedEffect 時 effect 改用新官方文字並將 effectOrigin 設為 official；沒有時保留原值。組合不強制每段有 citation，但既有 citation 仍須檢查；通過逐項與合併後檢查才採用，否則退回整筆沿用。`V_NOT_DESCRIBED` 本身不阻擋組合；首次新增且沒有上一版仍會排除。
   - 1.1.0／1.2.0 祝福／技能輸入有 `lockedEffect` 時，`effect` 逐字照抄該全文，只另外撰寫 `conditions`／`calculation`／`notes`／`extra` 四節實際運作機制；candidate 會強制使用鎖定效果並設定 `effectOrigin: "official"`。
   - AI input 的 `dataSchemaVersion` 表示資料版本，AI I/O 外層仍為 1.0.0。1.2.0 技能／祝福輸出選填 `citations: [{section,text,codeRefs,valueRefs}]`；每個本次撰寫的非空機制段落必須有同 section 引用，非官方 effect 也適用。text 須出現在段落中，codeRefs 須來自輸入 source.codeRefs，valueRefs 須可解析並有 source.valueSources。只讀來源位置與雜湊不能當數值。
   - 所有版本的勘誤使用 `{locale,official,corrected,valueRefs:[...],sources:[{path,line}],anchor?}`，兩個陣列至少一筆，禁止單數 valueRef。anchor 可選 `official/name/displayParameter`；displayParameter 須指定 param，祝福另指定 tier；跨 item 使用 itemId，valueRefs 在該 item.values 解析。詳細形狀與版本限制見 pipeline/README.md 的「schema 1.2.0」。
   - 有 `effectTask: "translate-official-en"` 時，依 `item.official.en` 與 `item.values` 翻譯效果，再寫四節機制；pipeline 會標示為「非官方翻譯」（`unofficial-translation`）。官方英文、繁中都沒有時，依 values 與 source 撰寫效果，未知值寫明未知，不可猜；pipeline 會標示為「非官方翻譯」。未知值不猜測。AI 輸出不得包含 `effectOrigin`。
5. 檢查：第一次正式執行 1.13.4 時執行 `node pipeline/verify.mjs --previous-dir (Join-Path $migrationBaselineData '1.13.4')`，讓 candidate 與檢查使用同一份 baseline；後續版本執行 `node pipeline/verify.mjs`。未通過或沒有新說明的單一項目會先嘗試上述組合，組合失敗才保留上一版整筆內容並記錄原因；這不算失敗，繼續下一步。若輸出「整批停止」，跳到第 8 步。
   - `verify.mjs` 預設 `--issues off`，不建立 Issue。從 verify 報告的 `translationConflicts` 取得衝突清單，在第 8 步回報中列出；使用者決定要建立時，才另外執行 `--issues create`，在遠端公開的 Mods repo 建立 Issue，屬於對外發布。
5a. damage profile 抽查：由獨立審查者（也就是和撰寫說明不同的 AI 執行環境）對照本次固定 Source-Code commit，逐一檢查抽樣的 damage profile 與來源位置、override 後的 attack／impact 端點及 binding 的 powerLevel；每個武器家族至少抽一個 profile，抽樣須涵蓋近戰多 target、遠程 near／far、powerLevel 明示與未明示。若任一類型不存在，記錄原因。記錄每筆的武器家族、武器／profile id、Source-Code commit 與 path:line、抽查欄位、來源值、輸出值及一致／不一致結果。任何不一致或無法完成必要抽查時立即整批停止，跳到第 8 步回報，不得 write 或 commit；回報列出上述明細及原因。接續已 completed 的 run 也須先抽查再 commit。
6. 寫入：寫入 repo 前先確認第 3 步 diff 使用正確的資料目錄與結果、所有待寫項目均已撰寫或由 verify 完成組合／整筆沿用／排除決策，並已檢視組合失敗原因、第 5 步 verify 沒有整批停止，且第 5a 步抽查完成並一致；任何一項不符即停止。第一次正式執行 1.13.4 時執行 `node pipeline/write.mjs --previous-dir (Join-Path $migrationBaselineData '1.13.4')`，後續版本執行 `node pipeline/write.mjs`；再執行 `node pipeline/validate.mjs`。接續已 completed 的 run 時從 validate 開始。通過後執行以下 pwsh 指令，只加入該 run 的檔案，再 commit（訊息：`data: <遊戲版本> 內容更新`）、`git push`。

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
- 組合採用 N／退回 N（由 verify 報告的 combined 與組合失敗後 kept-previous 計數）
- 保留上一版的項目：<id>：<原因>（逐項列出；沒有寫「無」）
- 保留上一版的類別：<類別>：<原因>（沒有寫「無」）
- 官方原文 warning：<id>：<原文用字與官方名稱，或原文方向數字與 values>（逐項列出；沒有寫「無」）
- 譯名衝突：N 組（是否已建立 Issue）
- damage profile 抽查：<獨立審查者抽樣範圍與逐筆家族、武器／profile id、commit、path:line、欄位、來源值、輸出值及結果；未執行或不足時列原因>
- 需要使用者處理的事：<逐項列出；沒有寫「無」>
- commit：<hash 或「未 commit」>
```

## 附註

- 第 8 步的回報數字由 `node pipeline/check-version.mjs --summary` 重新檢查相同輸入（接續時同樣加上 `--commit $run.sourceCommit --text-batch $run.textBatch`）的版本後產生（不寫入狀態檔）；停止或沒有新版本時項目數皆為 0，其餘引用狀態檔摘要。
- 本檔只寫一般步驟與固定指令。各指令由 WP2～WP4b 實作；指令執行失敗時，視為整批停止並回報。
- 環境變數與路徑設定請見「第 0 步之前：環境設定」。

開 PR 或驗收前必須執行真實來源完整測試：在 PowerShell 設定 `$env:PIPELINE_REAL_SMOKE='1'`，再執行 `node --test tests/pipeline/cryptic-brittleness-fingerprints.test.mjs tests/pipeline/cryptic-brittleness-reads.test.mjs`，並執行 `node --test tests/pipeline/review33.real.test.mjs` 核對固定來源 binding 行號。預設未設定時 fingerprint／reads 的真實來源案例不會執行，小型 fixture 仍會執行。

## 同版本重產（獨立路徑）

同一遊戲版本已 completed，但取數腳本更新時，check-version 會回報「沒有新版本」。只有使用者要求同版本重產時才走本段；不修改 check-version，也不執行上面的第 0、1 步。原提示詞規則、第 4 步撰寫要求、第 5a 步抽查及第 8 步回報格式照用。以下指令在 repo 根目錄的同一個 pwsh 7 子程序執行；任何非零退出碼或 PowerShell 錯誤立即停止，依原第 8 步回報交給使用者。全程不 pull、fetch、push，不自動更新來源或切換分支。

### 重產 A：隔離、固定輸入與不可變 baseline

下列路徑與固定輸入是 1.13.4 範例。先核對使用者要求的版本、來源 commit、文字批次及 manifest；新任務換一個尚未使用的外部目錄。工作目錄範例格式為 `F:/GitFile/DarkTide-Pipeline-Regen/<版本>-<工單>`。工作目錄不可位於任何含 `.git` 的上層資料夾下（包含空的 `.git` 資料夾），否則下方檢查會停止。重產進行中只使用外部 state，repo 的 data/state 在最後驗證通過前不寫入。

```powershell
$ErrorActionPreference = 'Stop'
function Invoke-RegenNode {
  & node @args
  if ($LASTEXITCODE -ne 0) { throw "node 失敗（exit $LASTEXITCODE）" }
}
function Invoke-RegenGit {
  & git @args
  if ($LASTEXITCODE -ne 0) { throw "git 失敗（exit $LASTEXITCODE）" }
}
Get-ChildItem Env: | Where-Object {
  $_.Name -in @('GH_TOKEN','GITHUB_TOKEN','GH_ENTERPRISE_TOKEN') -or $_.Name -like 'DARKTIDE_*'
} | ForEach-Object { Remove-Item -LiteralPath "Env:$($_.Name)" }
$repo = (Get-Location).Path
$cloud = 'F:/GitFile/DarkTide-Pipeline-Regen/1.13.4-syp403'
$stage = Join-Path $cloud 'staging-root'
$work = Join-Path $cloud 'extract-work'
$state = Join-Path $stage 'pipeline/state.json'
$prev = Join-Path $cloud 'immutable-baseline/1.13.4'
$sourceRepo = 'F:/GitFile/Persion - Games/Darktide-Source-Code'
$privateRepo = 'F:/GitFile/Persion - Games/DARKTIDE User Setting'
$glossary = 'F:/GitFile/Persion - Games/Warhammer-40-000-DARKTIDE-Mods/Referneces/Translation.md'
$gameVersion = '1.13.4'
$sourceCommit = 'e46b8926cfa3fa35503e4b80b15aab7a804314e4'
$textBatch = '26101089'
$privateRef = (Invoke-RegenGit -C $privateRepo rev-parse --verify 'origin/master^{commit}').Trim()
if (-not (Test-Path -LiteralPath $cloud -PathType Container)) { throw '外部工作根目錄不存在，需要使用者處理' }
$ancestor = Get-Item -LiteralPath $cloud
while ($null -ne $ancestor) {
  if (Test-Path -LiteralPath (Join-Path $ancestor.FullName '.git')) { throw '外部工作根目錄不可在 Git repo 內' }
  $ancestor = $ancestor.Parent
}
foreach ($path in @($stage, $work, (Split-Path $prev))) {
  if (Test-Path -LiteralPath $path) { throw "目錄已存在，不可覆寫或重建 baseline：$path；接續時沿用既有 state/baseline，勿重跑初始化" }
}
$isolation = Join-Path $cloud ('isolation-' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path (Join-Path $isolation 'bin'), (Join-Path $isolation 'gh-config') -Force | Out-Null
Copy-Item -LiteralPath 'C:/Windows/System32/whoami.exe' -Destination (Join-Path $isolation 'bin/gh.exe')
Set-Content -LiteralPath (Join-Path $isolation 'bin/gh.cmd') -Value '@exit /b 1' -Encoding ascii
$env:GH_CONFIG_DIR = Join-Path $isolation 'gh-config'
$env:PATH = "$(Join-Path $isolation 'bin');$env:PATH"
if ([IO.Path]::GetFullPath((Get-Command gh).Source) -ne [IO.Path]::GetFullPath((Join-Path $isolation 'bin/gh.exe'))) { throw 'gh 未解析至隔離 shim' }
$repoState = Get-Content -Raw -LiteralPath (Join-Path $repo 'pipeline/state.json') | ConvertFrom-Json
if ($repoState.run.status -ne 'completed' -or $repoState.lastProcessed.gameVersion -ne $gameVersion) { throw '不是已完成的同版本，交給使用者確認' }
# 核對本機 Git 固定輸入及 manifest，不更新任何來源。
Invoke-RegenNode --input-type=module -e 'import {resolveSourceCode,resolvePrivate} from "./pipeline/lib/inputs.mjs"; const [repo,commit,priv,ref,batch,game]=process.argv.slice(1); const s=resolveSourceCode({repo,ref:commit}),p=resolvePrivate({repo:priv,ref,batch}); if(s.commit!==commit||s.gameVersion!==game||p.gameVersion!==game)throw Error("固定來源版本不一致");' $sourceRepo $sourceCommit $privateRepo $privateRef $textBatch $gameVersion
$repoPaths = @('pipeline/state.json','data/current.json') + @('skills','weapons','blessings','terms' | ForEach-Object { "data/$gameVersion/$_.json" })
$repoHashes = @($repoPaths | ForEach-Object { [pscustomobject]@{Path=$_;Hash=(Get-FileHash -LiteralPath (Join-Path $repo $_)).Hash} })
New-Item -ItemType Directory -Path $stage, (Split-Path $prev) | Out-Null
Copy-Item -LiteralPath (Join-Path $repo 'data') -Destination (Join-Path $stage 'data') -Recurse
Copy-Item -LiteralPath (Join-Path $repo "data/$gameVersion") -Destination $prev -Recurse
Invoke-RegenNode --input-type=module -e 'import {readState,startRun,writeState} from "./pipeline/lib/state.mjs"; const [repo,state,gameVersion,sourceCommit,textBatch]=process.argv.slice(1); const old=await readState(repo+"/pipeline/state.json"); await writeState(state,startRun({...old,run:null},{gameVersion,sourceCommit,textBatch}));' $repo $state $gameVersion $sourceCommit $textBatch
# baseline 必須逐檔吻合複製前的 repo；最後搬回前再核對兩邊是否有並行改寫。
foreach ($entry in $repoHashes) {
  if ((Get-FileHash -LiteralPath (Join-Path $repo $entry.Path)).Hash -ne $entry.Hash) { throw '初始化期間 repo 已變更，停止' }
  if ($entry.Path.StartsWith("data/$gameVersion/")) {
    if ((Get-FileHash -LiteralPath (Join-Path $prev (Split-Path $entry.Path -Leaf))).Hash -ne $entry.Hash) { throw 'baseline 與複製前來源不符，停止' }
  }
}
$repoHashes | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $cloud 'repo-before.json') -Encoding utf8
$baselineHashes = @('skills','weapons','blessings','terms' | ForEach-Object { [pscustomobject]@{Path="$_.json";Hash=(Get-FileHash -LiteralPath (Join-Path $prev "$_.json")).Hash} })
$baselineHashes | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $cloud 'baseline-before.json') -Encoding utf8
```

baseline 是重產前的固定快照，後續 verify／write 必須一直使用 `$prev`；不可拿已經覆寫的 repo 或 staging `data/<版本>` 當回退基準。中斷接續時重新設定以上路徑、固定 ref 與隔離環境，載入既有 `$state` 及雜湊紀錄；不可重新初始化或覆寫 baseline。baseline 遺失、雜湊不同、state 固定輸入不符時停止交給使用者。

### 重產 B：extract → diff → pending

```powershell
Invoke-RegenNode pipeline/extract-text.mjs --state $state --work-dir $work --private-repo $privateRepo --private-ref $privateRef --text-batch $textBatch
foreach ($category in @('skills','weapons','blessings','terms')) {
  Invoke-RegenNode "pipeline/extract-$category.mjs" --state $state --work-dir $work --source-code-repo $sourceRepo
}
Invoke-RegenNode pipeline/diff.mjs --state $state --work-dir $work --data-dir (Join-Path $repo 'data') --cloud-dir $cloud --glossary $glossary
$pending = @(Invoke-RegenNode pipeline/diff.mjs --state $state --cloud-dir $cloud --pending --json | ConvertFrom-Json)
$pending | Select-Object id,input,output
```

diff 的前版指向 repo `data/`；後續所有 candidate／verify／write 的回退則使用未變的 `$prev`。檢查四類 extract 版本一致、來源 metadata、added/changed/removed/unchanged 與預期相符；結果出乎預期、來源不一致或腳本失敗時停止交給使用者。

### 重產 C：沿原第 4 步寫說明

逐項讀 `$pending` 提供的 input，嚴格照原第 4 步寫入它指定的 output，不能用佔位說明跳過。每完成一個就立即標記；沒有新說明的項目交由 verify 嘗試組合，再依原第 6 步檢視最終決策。然後重新讀 pending：

```powershell
foreach ($entry in $pending) {
  # 先讀取此 input、完成原第 4 步說明並存入 output；本區塊不會自動生成說明。
  if (-not (Test-Path -LiteralPath $entry.output -PathType Leaf)) {
    Write-Output "尚無新說明，交由 verify 組合／整筆沿用／排除：$($entry.id)"
    continue
  }
  Invoke-RegenNode pipeline/diff.mjs --state $state --cloud-dir $cloud --mark-described $entry.id
}
$pending = @(Invoke-RegenNode pipeline/diff.mjs --state $state --cloud-dir $cloud --pending --json | ConvertFrom-Json)
if ($pending.Count -ne 0) { Write-Output "尚無新說明 $($pending.Count) 項；verify 決策後，寫入前依原第 6 步檢視" }
```

### 重產 D：verify → 原第 5a 步 → write → validate

```powershell
foreach ($entry in (Get-Content -Raw -LiteralPath (Join-Path $cloud 'baseline-before.json') | ConvertFrom-Json)) {
  if ((Get-FileHash -LiteralPath (Join-Path $prev $entry.Path)).Hash -ne $entry.Hash) { throw 'baseline 已變更，停止' }
}
Invoke-RegenNode pipeline/verify.mjs --root $stage --state $state --cloud-dir $cloud --previous-dir $prev --translation $glossary --issues off
$report = Get-Content -Raw -LiteralPath (Join-Path $cloud "$gameVersion/verify/report.json") | ConvertFrom-Json
if ($report.result -eq 'halted') { throw 'verify 整批停止，需要使用者處理' }
$report.items | Where-Object decision -ne 'pass' | Select-Object id,decision,failures
$report.categories | ConvertTo-Json -Depth 6
```

此時必須依原第 5a 步由獨立審查者（也就是和撰寫說明不同的 AI 執行環境）完成 damage profile 抽查、記錄逐筆證據並確認一致，才可執行下一區塊。抽查不足／不一致、保留或排除項目需要人工決策、譯名衝突未能確定，均停止交給使用者。單項保留仍須通過最終 schema；目前暫時允許 retainedFrom 與發布檔頭為同版本，只禁止比檔頭新；SYP-420 完成時恢復必須早於發布遊戲版本的規則。

```powershell
# 僅在原第 5a 步抽查完成且一致後執行。
Invoke-RegenNode pipeline/write.mjs --root $stage --state $state --cloud-dir $cloud --previous-dir $prev
Invoke-RegenNode pipeline/validate.mjs --root $stage
```

### 重產 E：帶回 repo、驗證與 commit

先檢查 staging 已 completed，並確定 repo 與不可變 baseline 都未遭並行改寫；任一檢查失敗停止交給使用者。搬回只包含這次版本的四個檔、current 與 state；舊版本不搬回。

```powershell
$done = Get-Content -Raw -LiteralPath $state | ConvertFrom-Json
if ($done.run.status -ne 'completed' -or $done.run.gameVersion -ne $gameVersion) { throw 'staging run 未完成' }
foreach ($entry in (Get-Content -Raw -LiteralPath (Join-Path $cloud 'repo-before.json') | ConvertFrom-Json)) {
  if ((Get-FileHash -LiteralPath (Join-Path $repo $entry.Path)).Hash -ne $entry.Hash) { throw 'repo 產物已變更，停止搬回' }
}
foreach ($entry in (Get-Content -Raw -LiteralPath (Join-Path $cloud 'baseline-before.json') | ConvertFrom-Json)) {
  if ((Get-FileHash -LiteralPath (Join-Path $prev $entry.Path)).Hash -ne $entry.Hash) { throw 'baseline 已變更，停止搬回' }
}
foreach ($category in @('skills','weapons','blessings','terms')) {
  Copy-Item -LiteralPath (Join-Path $stage "data/$gameVersion/$category.json") -Destination (Join-Path $repo "data/$gameVersion/$category.json")
}
Copy-Item -LiteralPath (Join-Path $stage 'data/current.json') -Destination (Join-Path $repo 'data/current.json')
Copy-Item -LiteralPath $state -Destination (Join-Path $repo 'pipeline/state.json')
Invoke-RegenNode pipeline/validate.mjs
Invoke-RegenGit diff --stat -- @repoPaths
Invoke-RegenGit add -- @repoPaths
Invoke-RegenGit commit -m 'SYP-403' -m 'fix(data): regenerate the same game version with updated extractors' -m 'zh-TW:' -m '修正(data)：使用更新後的取數腳本重產相同遊戲版本'
```

依當次分支／任務更換 commit 的 ticket 與描述，SYP 不記錄工時。hook 失敗立即停止，保留現場交給使用者，不繞過。若搬回中斷，不可重做 baseline 或盲目重試初始化；交由使用者依外部完整 staging 與原始雜湊確認恢復。確認第 5a 步已由獨立審查者抽查並通過，最後沿原第 8 步格式回報；本獨立路徑不 push。
