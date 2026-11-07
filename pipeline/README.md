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

中間檔目錄使用已存在、不在任何 Git repo 內的本機絕對目錄，檔案放在遊戲版本子目錄；需要封存到 Google 雲端時，跑完後再上傳。`F:\GitFile\Persion - Games\DarkTide-Pipeline-Work` 僅為範例。

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
| `--cloud-dir` | `DARKTIDE_PIPELINE_CLOUD_DIR`；需要中間檔預設路徑時才解析 |
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

相容舊介面：同時明確指定 candidate-dir、extract-dir、version-info，且未使用中間檔目錄設定時，可無 state／cloud 執行。此模式未指定 report 時不存報告，未指定 out-dir 時使用結束即清除的自有暫存目錄。一般無參數流程或有中間檔目錄設定時使用上表預設值。

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

- Source-Code：`--source-code-repo` > `DARKTIDE_SOURCE_CODE_REPO` > 預設解析的 `Darktide-Source-Code`；`--commit` 預設為 `HEAD`。commit subject 必須以 `Added Version <版本>` 開頭。
- Private：`--private-repo` > `DARKTIDE_PRIVATE_REPO` > 預設解析的 `DARKTIDE User Setting`；ref 為 `--private-ref` > `DARKTIDE_PRIVATE_REF` > `origin/master`。批次為 `--text-batch`，未指定時選該 ref 的 `localization/` 最大數字目錄。程式不 fetch 或 checkout。
- `--state` 預設 `pipeline/state.json`。extract-text 未指定的 batch 與 gameVersion 取 state.run；其他 extractor 未指定的 commit、batch 與 gameVersion 取 state.run。沒有 run 時須明確提供 `--commit`、`--text-batch`，否則提示先跑 check-version。

兩個預設 repo 路徑均先找 Source-Data 相鄰目錄，再找往上兩層的目錄；都不存在時使用相鄰路徑。`node pipeline/print-repos.mjs` 唯讀輸出實際解析路徑（JSON）。

依 `docs/pipeline/START.md` 先設定環境並更新來源 repo，再執行 check-version → extract-text → 各類 extractor → extract-terms。check-version 先比對 Source-Code 與 manifest 遊戲版本；不一致 exit 2 且不寫 state。相同已完成輸入不重建 run；running/halted 的相同輸入保留進度並接續。`--json` 輸出機器可讀狀態，`--summary` 只讀 state 顯示結果。

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

cryptic 的電弧手榴彈／電擊每層脆弱值補收，須同時通過既有靜態證明與 e46b892 全文 SHA-256 釘選（完整 **478 檔及 3 個目錄清單**見 `lib/cryptic-brittleness-sources.json`）。範圍是這次 **extract-skills 整體實際讀取集合**：主抽取器、所有技能樹及其 require 閉包、獨立 proof resolver，以及任何經由 reader 的檔案讀取與 `reader.list()` 掃描；不是只有兩條 proof 的引用鏈。主抽取器與 proof 共用 reader 快照，直到全部讀取結束才比對內容與完整集合並提交補值／來源 trace；預檢讀取不計入實際集合。任一釘選檔內容改變或缺失、多讀或少讀檔案／目錄、目錄清單成員或順序變動，或實際定義不符，都回報 `BRITTLENESS_SOURCE_CHANGED`（引用鏈來源已變更，需重新核實）及 `files`／`directories`，兩筆回到原本的 `T_NUMBER`。主抽取器與獨立 proof 仍共用最後定義優先的選取邏輯，並核對實際定義的檔案、位置與原文；完整集合檢查額外涵蓋來源位置相同但有效 AST 或綁定已被其他模組改寫的情況。值與行號仍由解析取得，指紋不提供保底值。清單擴大表示**技能相關來源一有變動就需要重新核實**，即使只改 BOM、空白或註解亦同。

遊戲更新後，於 repository 根目錄以 pwsh 7／Node 24 執行以下流程：

1. 固定欲核實的 Source-Code commit，執行候選收集腳本。以下為 e46b892 的可重現範例；更新時替換 commit 與輸出目錄（輸出檔已存在時會拒絕覆寫）。腳本以 Git blob 原始 bytes（含 BOM）計算 SHA-256，**不套用舊 pins**，先走與正式抽取共用的完整主抽取遍歷，再重新選取定義並完成兩條獨立靜態證明，收集兩者的全部讀檔與有序目錄清單後才輸出 `candidate-pins.json` 與 `pins-diff.json`；不會覆寫正式清單。後者包含相對於正式清單的檔案／目錄新增、移除、內容或順序變更，以及實際定義位置、解析參數和引用鏈 trace。

   ```powershell
   node scripts/cryptic-brittleness-pins.mjs `
     --source-repo 'F:/GitFile/Persion - Games/Darktide-Source-Code' `
     --source-commit e46b8926cfa3fa35503e4b80b15aab7a804314e4 `
     --output-dir 'F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/cryptic-brittleness/pins-e46b892-review'
   ```

2. 人工核對（或交 astra review）兩份 JSON 與指定 commit 的差異：確認實際選用的 talent、special rule／passive → registry → `rending_debuff.stat_buffs.rending_multiplier` 及套用層數仍成立，解析值為 `0.025` 且與官方 2.5% 相符。e46b892 的值位於 `weapon_buff_templates.lua:374`，但後續版本須依 trace 重新找位置；不能把它當保底行號。靜態證明失敗時腳本不輸出候選，應先審查來源與證明邏輯；不得關閉檢查或直接採用舊 pins。
3. 核對無誤後，才明確將候選的完整 `sourceCommit`、`files`、`directories` 更新至 `pipeline/lib/cryptic-brittleness-sources.json`。再次用相同 commit 和新輸出目錄跑腳本，確認候選與正式清單逐項一致，檔案與目錄差異均為零。
4. 執行 `node --test tests/pipeline/`，確認來源／清單／選用定義反例仍拒收，再跑 `node tests/pipeline/cryptic-brittleness.acceptance.mjs` 的固定 e46b892 驗收（618 筆、其餘 616 筆 byte 相同、重跑一致、兩筆 checkText／checkValues 通過）。該 acceptance 固定舊 commit；核實新版時，還須另以新版 commit 及對應文字批次驗證兩條引用鏈與預期項目差異，保留舊來源回歸結果。

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

#### schema 1.1.0：曲線與連段

四類 extractor 的資料檔一律寫 `schemaVersion: "1.1.0"`，同次發布四檔必須一致。驗證器仍接受 1.0.0：該版禁止 `values.curves`、`values.attackCombos` 與 `bars[].stats[].curveId`；1.1.0 三者必填。`schema/examples/1.1.0-example/` 提供新版範例，原 1.0.0 範例保留。current 索引 schema 同樣接受 1.0.0／1.1.0，保留舊索引相容；`state.json` 與 text 中間檔有獨立契約，維持 1.0.0。

資料檔的 `explanation.effectOrigin` 為選填，僅 schema 1.1.0 以上的 blessings、skills 可使用；值限 `official` 或 `unofficial-translation`。此欄位由 pipeline 設定，AI output 不得包含；1.0.0、weapons 與 terms 均不得包含。缺少欄位仍為合法資料。

`values.curves[]` 與實際輸出的 bar stat 一一對應，id 為 `<barId>.<statKey>`、依 id 排序。輸入是 `base_stat_value`、ratio 0～1，knots 僅含 0／1，直接重用 WP2 min／max，不再解析一次端點。線性曲線可在端點間內插；陣列沿用 WP2 拆成 `.1`、`.2` 等純量 stat。source 指向 lerp_basic 所在檔案／行（常數則指該數值）。未證實單位時 outputUnit 為 null。

無法證實線性的曲線以 `interpolation: "unknown"`、兩個 output 都為 null 並記原因；原有 stat min／max 保留。`LERP_T_OUT_OF_RANGE` 表示單筆 tweak 權重超出 [0,1]；`NONLINEAR_COMBINATION` 表示多筆累積在區間內發生 clamp，無法以兩端點重建；未觸發 clamp 的逐筆線性相加保持 linear；damage profile 使用相同判定；`NONLINEAR_LERP` 保留供無法以 tweak 線性表示的 lerp 來源使用，目前沒有輸出此原因。曲線仍沿用 WP2「相關 bar 同時變動」語意，不足以重建各 bar 獨立變動的完整傷害公式，缺口見 [公式盤點](../docs/pipeline/weapon-damage-formula-gaps.md)。未解析而進 params 的 stat 不建立曲線。

`values.attackCombos[]` 依 light、heavy 輸入追蹤 action 圖。起點採 `start_input = start_attack`，沒有時才使用有 light/heavy 邊的其他明確 start_input。多起點時 steps 為空、unknown 為 `CHAIN_START_AMBIGUOUS`；受 start 必須為字串的結構限制，start/source 指向來源順序第一個候選，不能視為已確認的唯一入口。連段從已進入 start action 的狀態開始；後續轉入 action（含返回 start）才檢查 action condition。windup 不列入 steps，沿 `start_attack` 推進；只有 kind 可靜態確認的 sweep 或具有靜態 damage profile 的傷害 action 列入。`loopsTo` 是 steps 的零起算索引；無循環為 null。純遠程無此結構則為空陣列。時間不影響順序，未使用時間選分支。原始碼語意依 `scripts/settings/equipment/weapon_templates/default_melee_action_input_setup.lua`、`melee_action_input_setup_mid.lua` 與 `scripts/utilities/action/action_handler.lua` 的 `_valid_action_from_action_input`、`_validate_single_chain_action` 核對；`_anim_end_event` 的 callback 僅控制動畫收尾，不是連段條件。

step 的 profile 綁定重用 WP2 require/catalog 邏輯，唯一靜態 profile 才填值，否則 `damageProfile: null` 及 `DAMAGE_PROFILE_BINDING_NOT_FOUND`。displayed_attacks 必須能以明確 action_name 對應 display_name 才填名稱；群組 gestalt 名稱不推定為每個 action 的名稱。

連段原因碼：`CONDITIONAL_CHAIN`（chain validation／action condition／running action state requirement）、`CHAIN_TARGET_NOT_FOUND`（缺目標）、`CHAIN_START_AMBIGUOUS`（多起點）、`CHAIN_CYCLE_WITHOUT_ATTACK`（無攻擊循環）、`DYNAMIC_VALUE`（函式／動態邊或 kind），另保留既有 `REFERENCE_NOT_FOUND`。遇不確定分支保留已證實的 steps 前綴。`CURVE_UNKNOWN`、`COMBO_UNKNOWN` problems 均帶 reason，可直接彙總；profile unknown 由 steps 的 `damageProfileUnknown` 統計。

`PIPELINE_REAL_SMOKE=1 node --test tests/pipeline/extract-weapons.real.test.mjs` 驗證 schema、curve 一一對應、近戰輕重擊覆蓋及兩次 byte 相同，並只印彙總及少量抽樣。

固定來源 `ba6c148`／文字批次 `25606770` 的基準為 137 把武器、25,372 條曲線、146 組連段；73 把近戰中，light／heavy 各 55 把有至少一個已確認攻擊 step（75.34%，包含帶 unknown 的已確認前綴）。real smoke 的兩種連段覆蓋門檻均設為 70%，保留條件分支的保守 unknown，不以空 steps 充作覆蓋。

`extract-weapons.mjs` 讀取玩家武器模板、官方文字與靜態 trait 列，先建立整把武器的貢獻表；min／max 為所有相關屬性條同時 0%／100% 時的遊戲實際值；同一路徑多條會累加後 clamp 到 0～1，再對實際基礎模板內插，固定數字列也參與累加。保留固定值與陣列的各元素。`lib/weapon-stats.mjs` 處理 registry、require、movement state 繼承及 damage profile parent/overrides；damage key 包含實際 profile／override 名稱；profile 專屬 lerp override 整份優先於通用 action 貢獻，只有被選用的來源參與累加；相同語意來源只輸出一次，所有有貢獻的 bar 都保留該 stat。無法靜態解析的數值記為 unknown，`UNRESOLVED_STAT.reason` 區分缺參照、函式與條件算式；movement sentinel 依遊戲設定展開並套用繼承。不存在且遊戲不讀取的路徑略過，每把武器以一筆 `NOT_APPLICABLE_STAT` 彙總數量，未註冊模板仍會輸出。
