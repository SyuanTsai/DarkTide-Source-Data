# 內容更新流程

SPEC v1 固定腳本：

- `check-version.mjs`：檢查版本及狀態。
- `extract-text.mjs`：擷取官方文字。
- `extract-skills.mjs`：擷取技能。
- `extract-weapons.mjs`：擷取武器。
- `extract-blessings.mjs`：擷取祝福。
- `extract-terms.mjs`：擷取術語。
- `diff.mjs`：記錄差異及說明進度。
- `verify.mjs`：檢查項目及降級。
- `write.mjs`：寫入正式資料。

WP1 提供 `lib/`、`schema/`、`validate.mjs` 與 `state.json`；WP2 提供版本檢查與取數；WP3 記錄差異與說明進度；WP4 檢查並降級；WP4b 寫入正式資料。上述固定腳本皆已實作。

狀態依序為 `extracted`、`described`、`verified`、`written`。相同版本與來源可接續執行並保留項目進度；輸入雜湊改變時重設該項目。完成或保留上一版的項目不再列為待處理。

Canonical JSON 的物件 key 按 UTF-16 排序，陣列保持順序；使用 compact JSON 並以一個換行結尾。

## 差異（WP3）

`node pipeline/diff.mjs` 讀取 state.run、extract 與目前正式資料，將新增／變動／移除登記至 state；沿用項目不需重寫說明。

| 參數 | 預設值／作用 |
| --- | --- |
| `--state` | `<repo>/pipeline/state.json` |
| `--work-dir` | `<repo>/.pipeline-work/<ver>`，讀取 `extract/<category>.json` |
| `--data-dir` | `<repo>/data`，由 current.json 找上一版 |
| `--cloud-dir` | `DARKTIDE_PIPELINE_CLOUD_DIR`，須為已存在的絕對目錄 |
| `--glossary` | `DARKTIDE_GLOSSARY_FILE`，再用 `<repo>/../Warhammer-40-000-DARKTIDE-Mods/Referneces/Translation.md` |
| `--pending` | 只列待寫說明及輸入／輸出路徑 |
| `--json` | 搭配 `--pending` 輸出 JSON |
| `--mark-described <id>` | 驗證 AI 輸出的 schema、id、inputHash 與資料結構後，推進至 described |

輸出為 `<cloud>/<ver>/extract/`、`diff/diff.json`、`ai/input/<itemFileName(id)>`；AI 將說明寫入 `ai/output/<itemFileName(id)>`。exit 0 表示成功（可包含缺檔或類別結構降級），exit 1 表示參數、狀態、IO 或驗證失敗。

## 檢查（WP4）

`node pipeline/verify.mjs` 由 state.run 推出版本，組裝候選檔，再逐項檢查數值、文字、勘誤與最終資料。未通過的項目保留上一版；沒有上一版則排除。類別缺檔或結構不符時整類保留，首版則輸出空檔。四類皆會產生新版本檔頭。

| 參數 | 預設值／作用 |
| --- | --- |
| `--root` | repo 根目錄 |
| `--state` | `<root>/pipeline/state.json`；無 run 時提示先跑 check-version |
| `--cloud-dir` | `DARKTIDE_PIPELINE_CLOUD_DIR`；需要雲端預設路徑時才解析 |
| `--version-info` | 由 run 推出 sourceGameVersion、textGameVersion、sourceCommit、textBatch；指定時讀 JSON 檔 |
| `--extract-dir` | `<cloud>/<ver>/extract` |
| `--candidate-dir` | 未指定時由 extract、diff/diff.json、ai/output 與上一版組裝至 `<cloud>/<ver>/candidate` |
| `--previous-dir` | `<root>/data/current.json` 的 path；`none` 表示沒有上一版 |
| `--translation` | `DARKTIDE_GLOSSARY_FILE`，再用 `<root>/../Warhammer-40-000-DARKTIDE-Mods/Referneces/Translation.md` |
| `--report` | `<cloud>/<ver>/verify/report.json` |
| `--out-dir` | `<cloud>/<ver>/verify/out`，其內 `data/<ver>/<category>.json` 是與 write 相同的正式資料預覽 |
| `--issues` | `create`；可用 `off` 或 `dry-run` |
| `--mods-repo` | `SyuanTsai/Warhammer-40-000-DARKTIDE-Mods`，譯名衝突 Issue 目的地 |
| `--mods-commit` | 未指定時從譯名表所在 repo 解析 commit；dry-run 不執行外部指令 |
| `--build-cmd` | 預設不執行；指定時設定 `DARKTIDE_DATA_ROOT` 為 out-dir 後執行 |

候選檔只包含沿用說明的 unchanged 項目，及通過 AI schema、id、最新 inputHash 的新增／變動輸出；缺少或過期輸出由 verify 記錄 `V_NOT_DESCRIBED`。errata 與 anchor 不做轉換。自動組裝只會清除本輪無效類別的四個固定候選檔，不刪其他檔。

報告的 `categories.<category>.candidateSha256` 記錄實際候選檔原始 bytes 的 SHA-256，無檔為 null；`previousGameVersion` 記錄合併所用的上一版，供寫入中斷或完成後重跑。exit 0 表示通過或部分降級；exit 2 表示參數、狀態或 IO 錯誤；exit 3 表示整批停止，不應執行 write。

相容舊介面：同時明確指定 candidate-dir、extract-dir、version-info，且未使用雲端設定時，可無 state／cloud 執行。此模式未指定 report 時不存報告，未指定 out-dir 時使用結束即清除的自有暫存目錄。一般無參數流程或有雲端設定時使用上表雲端預設值。

在 `*-worktrees/` 的 worktree 中執行時，請用 `--translation <Translation.md>`（或 `DARKTIDE_GLOSSARY_FILE`）指定譯名表；相鄰 Mods repo 的預設位置通常不同。diff 對應的覆寫參數是 `--glossary`。

## 寫入（WP4b）

`node pipeline/write.mjs` 先核對 state.run 與報告版本、候選檔雜湊及 current 版本，再用與 verify 相同的 composeFinal 組出四類並全部驗證。任何最終資料驗證錯誤均在寫入前停止。

中斷後接續時，已寫入項目必須與新的檢查報告一致；若衝突，請將說明改回能通過檢查的內容後重跑 verify。

| 參數 | 預設值／作用 |
| --- | --- |
| `--root` | repo 根目錄，正式資料位於 `<root>/data` |
| `--state` | `<root>/pipeline/state.json` |
| `--cloud-dir` | `DARKTIDE_PIPELINE_CLOUD_DIR`；report 與 candidate-dir 均指定時不需要 |
| `--report` | `<cloud>/<ver>/verify/report.json` |
| `--candidate-dir` | `<cloud>/<ver>/candidate` |
| `--previous-dir` | current.json 的 path；current 已是本輪版本時使用報告的 previousGameVersion；`none` 表示沒有上一版 |

依 skills、weapons、blessings、terms 順序原子寫入 `<root>/data/<ver>/<category>.json`，每類完成後更新 state checkpoint。removed 項目逐步推進至 written；整類降級的未完成項目記錄 kept-previous 與原因。最後原子寫入 current.json（versions 合集按版本排序），再 completeRun。相同 bytes 不重寫；中斷後可接續。已 completed 的相同輸入僅允許輸出完全相符的唯讀重跑，避免第二次改寫任何檔案。

`retainedFrom: { gameVersion, sourceCommit, textBatch }` 記錄保留項目最早的來源，連續保留不更新此欄位。validate 對這些項目的 source.commit／source.text.batch 比對 retainedFrom，而其 gameVersion 必須早於檔頭；普通項目仍須符合檔頭的 commit／batch。排序、id、anchor、valueRef 等其餘檢查完全相同。此為選填欄位，既有 1.0.0 資料不需遷移。

exit 0 表示完成；exit 1 表示候選檔變動、版本倒退、資料驗證或寫入錯誤；exit 2 表示參數、狀態、報告版本或輸入錯誤；halted 報告 exit 3 並印「檢查結果為整批停止，不寫入」。完成後執行 `node pipeline/validate.mjs`。輸出摘要不含時間戳，列出每類項目數、保留項目及原因、保留類別與空檔類別。

## 取數腳本（WP2）

需要 Node 24 與 Git，不執行 Lua、不下載資料，也不安裝套件。所有來源檔案從已解析的 commit 物件讀取，工作目錄中的未提交修改不影響取數。

輸入來源與優先序：

- Source-Code：`--source-code-repo` > `DARKTIDE_SOURCE_CODE_REPO` > 相對本 repo 的 `../Darktide-Source-Code`；`--commit` 預設為 `HEAD`。commit subject 必須以 `Added Version <版本>` 開頭。
- Private：`--private-repo` > `DARKTIDE_PRIVATE_REPO` > `../DARKTIDE User Setting`；ref 為 `--private-ref` > `DARKTIDE_PRIVATE_REF` > `origin/master`。批次為 `--text-batch`，未指定時選該 ref 的 `localization/` 最大數字目錄。程式不 fetch 或 checkout。
- 預設路徑相對於本 worktree；使用位於 `*-worktrees/` 的 worktree 時，通常需明確傳入上述 repo 路徑或設定環境變數。
- `--state` 預設 `pipeline/state.json`。extract-text 未指定的 batch 與 gameVersion 取 state.run；其他 extractor 未指定的 commit、batch 與 gameVersion 取 state.run。沒有 run 時須明確提供 `--commit`、`--text-batch`，否則提示先跑 check-version。

依 `docs/pipeline/START.md` 執行 check-version → extract-text → 各類 extractor → extract-terms。check-version 先比對 Source-Code 與 manifest 遊戲版本；不一致 exit 2 且不寫 state。相同已完成輸入不重建 run；running/halted 的相同輸入保留進度並接續。`--json` 輸出機器可讀狀態，`--summary` 只讀 state 顯示結果。

輸出位於 `.pipeline-work/<版本>/extract/`（已忽略），可用 `--work-dir` 覆寫：

- `text.json`：`schemaVersion/category/batch/gameVersion/privateRefCommit/manifestSha256/resources/problems`。每個資源的 hash 對應 `{en,zh}`，逐字保留文字與 placeholder，不附加 suffix。逐檔驗證 manifest 的 sha256 與 rows；輸入損壞 exit 1。相同 hash 在同語系有不同文字時，該資源的兩語均設 null，記錄 `DUP_HASH`。
- `<category>.json`：`schemaVersion/category/gameVersion/sourceCommit/textBatch/scriptVersion/status/reason/problems/excluded/items`。item 僅包含 `id/key/name/official/values/source`，不存 explanation 或 errata。所有 JSON 使用 canonical writer；items 依 id 的 UTF-16 順序排序，problems/excluded 依 canonical JSON 字串排序。
- 結構不符時寫 `status: "structure-mismatch"`、原因及空 items，stdout 印「結構不符：…（該類別保留上一版）」，exit 0。若 state.run 的版本／commit／batch 相符，只把該類別設成 kept-previous；成功只設類別 ok，絕不寫 state.items。參數、IO、驗證錯誤 exit 1。

### 共用 lib 介面

- `errors.mjs`：`new StructureError(category, code, detail)`，用於預期的來源結構變動。
- `inputs.mjs`：`REPO_ROOT`、`parseArgs(argv, spec)`（spec 的值為 `value` 或 `flag`）、`resolveSourceCode({repo,ref})`、`resolvePrivate({repo,ref,batch})`、`workDir({root,override,gameVersion})`。來源 resolver 分別回傳 `{repo,commit,gameVersion,subject}` 與 `{repo,ref,refCommit,batch,manifest,gameVersion}`。
- `source-reader.mjs`：`createSourceReader({repo,commit})`，commit 必須是完整 40 位 SHA。回傳 `commit/list(prefix)/exists(path)/read(path)`；快取檔案樹與 blob、移除檔案開頭 BOM，拒絕絕對路徑、`..` 路徑元件及反斜線。
- `lua-static-reader.mjs`：原有靜態 Lua reader 的完整副本，所有 export 與行為不變。支援 table、literal、reference 與來源位置；不執行 Lua。
- `lua-closure.mjs`：`parseRequires(source)` 回傳普通物件 `{alias: "scripts/...lua"}`；`resolveReference(reader,file,dottedRef)` 追蹤同檔 locals 與 require 返回 table，回傳 `{node,file,line}`。不支援、檔案不存在或循環時回 null，呼叫端必須標記 unknown，不得猜值。
- `official-text.mjs`：`murmur64(str)` 回傳 BigInt；`locHash(key)` 回傳八位小寫 hex。`loadTextIndex(file)` 回傳 `{batch,lookup(key)}`；lookup 為 `{en,zh,resource,hash}`，未找到回 null；items/ui 同 hash 文字不同回 `{conflict:true,hash}`，呼叫端需記 `TEXT_CONFLICT`。
- `extract-output.mjs`：`itemId(category,...parts)` 接受複數類別（skills/weapons/blessings/terms）；`validateExtractItems(category,items,envelope?)` 回傳 errors，驗證時暫補五節 explanation 與空 errata。請傳入實際 envelope；省略時以 items 的 commit/batch 與暫時版本 `0.0` 驗證形狀。`writeExtract({workDir,category,envelope,items,problems,excluded})` 驗證、排序並寫檔，重複 id 或 schema 錯誤丟錯。`runExtractCli({category,scriptVersion,build})` 處理共同 CLI、文字索引及結構降級，build 接收 `{reader,text,envelope,workDir}`，回傳 `{items,problems,excluded}`。
- `weapon-inventory.mjs`：`playerWeaponTemplates(reader)` 回傳依 name 排序的 `{name,file,registered}[]`，涵蓋未註冊檔案，排除 bot、ability（含 combat_abilities）、devices、grenades、luggables、pocketables、unarmed 與 grenade ability 模板。`weaponPattern(name)` 依最後 `_m<數字>` 回傳 `{family,mark}`。`bespokeTraitsForTemplate(reader,template)` 接受上述 entry 或檔案路徑，解析指派／append 到 traits 的 bespoke 模組及直接字串 trait。`bespokeTraitDefinitions(reader)` 掃描 `_create_entry` registry 的全部 bespoke 定義。兩者回傳排序後的 `{traitKey,file,line}[]`，file/line 優先指向定義位置。

`nameFromText(text, locKey, fallbackKey)` 是所有 extractor 共用的名稱規則，回傳 `{name, problem}`：

- 官方英文是字串：`origin: "official"`、en 為官方英文、zh 為官方中文或 null。
- 沒有官方英文：`origin: "internal"`、en 為 fallbackKey（必須與 item.key 相同）、zh 為 null；只有官方中文時回傳 `MISSING_EN_TEXT` problem。
- 文字衝突：採內部名稱並回傳 `TEXT_CONFLICT` problem。
- 呼叫端將非 null problem 加上 item 的 id 後加入 problems。`official.en/zh` 各語系獨立保留，查不到為 null，不受名稱規則限制；衝突時均為 null。不改 common schema。

extract-terms 的 keyword 包含兩種 glossary 前綴；碰到同名時分別加 `:term`／`:glossary`。skill-type 直接掃描 talent 字串，class 讀 archetype_name，weapon-type 讀 UI patterns，並連結同 family 的武器 id。class 的 official 使用 archetype_description，其餘使用該 loc key。所有來源出現位置均記錄 path/line；動態拼接前綴只記 `DYNAMIC_KEY`。skills/weapons extract 缺少或非 ok 時記 `DEPENDENCY_UNAVAILABLE`；武器 refs 為空，不把它當結構不符。

### 技能取數

`extract-skills.mjs` 動態發現職業與 broker stimm 樹，只輸出樹節點引用的天賦，未引用定義列入 `excluded`。技能專用 `skill-*` 模組靜態解析 require、table 路徑、enum/computed key、常值四則運算、merge/clone 與 stimm 資料 DSL，不執行 Lua。百分比保留顯示數值，tier 保留完整陣列；傷害計算、lerp、條件或不支援的函式保留 `DYNAMIC_VALUE` 與問題原因。名稱使用共用官方文字政策，多段說明以換行串接，來源記錄實際讀取檔案與行號。

PowerShell 設定 `$env:PIPELINE_REAL_SMOKE='1'` 後執行 `node --test tests/pipeline/`，亦會驗證固定技能 commit／文字批次的項目範圍、官方英文名稱比例及重跑 byte 一致，並印出各職業與問題統計。

### 驗證

只執行 `node --test tests/pipeline/`，假 repo 測試在自有暫存目錄建立 Git repo 與具正確 sha256/rows 的四份 JSONL，完成後清理該暫存目錄。

真實驗證在 pwsh 執行：

```powershell
$env:PIPELINE_REAL_SMOKE='1'
node --test tests/pipeline/real-smoke.test.mjs
```

固定 commit `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e` 的 inventory 應為 137 個玩家模板、135 個 registered、693 個 bespoke 定義。Private 固定 `origin/master` 的 batch `25606770`；測試驗證 extract-text 與 extract-terms 各執行兩次的 byte 一致。該 Source-Code 是 1.13.2、文字批次是 1.13.1，因此 check-version 應 exit 2。extract 測試明確傳入 commit/batch，輸出只存在測試自有暫存目錄，略過時不需要真實 repo。

### 祝福取數

`extract-blessings.mjs` 從固定 Source-Code commit 擷取玩家武器的 bespoke 祝福；無玩家武器的定義列入 excluded，無法靜態解析的參數標示為 unknown。先執行 extract-text，再使用共用取數參數執行。

祝福專用 `blessing-buff-index.mjs` 依 BuffTemplates registry 的載入／合併順序建立靜態索引，支援跨 require 的 clone、merge、add_missing、local 常數、enum key 與後續欄位覆寫，保留實際數值來源；不執行 Lua。`UNRESOLVED_VALUE` 的 message 以 `[原因代碼]` 開頭，區分函式產生、條件／執行期運算、動態 manipulation、缺少模組／模板／路徑等情況。

`blessing-text.mjs` 只採用 text index 確有 hash 的候選 key，涵蓋 family 前綴、parent／child／數字尾碼與跨武器同 stem 共用。固定來源 `ba6c148` 與文字批次 `25606770` 實測官方英文名稱為 511；合法候選無額外命中，因此 real smoke 的名稱門檻依 spec2b 改為 511。UI 從 master data 的 `trait_item.display_name` 取名稱，缺少 trait→loc key 對照時保留內部名稱，不由英文文字反猜。以 `PIPELINE_REAL_SMOKE=1 node --test tests/pipeline/extract-blessings.real.test.mjs` 驗證真實資料與兩次輸出 byte 一致。

### 武器取數

`extract-weapons.mjs` 讀取玩家武器模板、官方文字與靜態 trait 列，先建立整把武器的貢獻表；min／max 為所有相關屬性條同時 0%／100% 時的遊戲實際值；同一路徑多條會累加後 clamp 到 0～1，再對實際基礎模板內插，固定數字列也參與累加。保留固定值與陣列的各元素。`lib/weapon-stats.mjs` 處理 registry、require、movement state 繼承及 damage profile parent/overrides；damage key 包含實際 profile／override 名稱；profile 專屬 lerp override 整份優先於通用 action 貢獻，只有被選用的來源參與累加；相同語意來源只輸出一次，所有有貢獻的 bar 都保留該 stat。無法靜態解析的數值記為 unknown，`UNRESOLVED_STAT.reason` 區分缺參照、函式與條件算式；movement sentinel 依遊戲設定展開並套用繼承。不存在且遊戲不讀取的路徑略過，每把武器以一筆 `NOT_APPLICABLE_STAT` 彙總數量，未註冊模板仍會輸出。
