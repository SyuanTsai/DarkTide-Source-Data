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

`node pipeline/verify.mjs` 由 state.run 推出版本，組裝候選檔，再逐項檢查數值、文字、勘誤與最終資料。未通過或沒有新說明的項目先嘗試組合；組合失敗才整筆保留上一版，沒有上一版則排除。類別缺檔或結構不符時整類保留，首版則輸出空檔。四類皆會產生新版本檔頭。

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
| `--issues` | `off`；可用 `create`（必須明確指定，會在公開的 Mods repo 建立 Issue，屬於對外發布，需要使用者同意）或 `dry-run` |
| `--mods-repo` | `SyuanTsai/Warhammer-40-000-DARKTIDE-Mods`，譯名衝突 Issue 目的地 |
| `--mods-commit` | 未指定時從譯名表所在 repo 解析 commit；dry-run 不執行外部指令 |
| `--build-cmd` | 預設不執行；指定時設定 `DARKTIDE_DATA_ROOT` 為 out-dir 後執行 |

候選檔只包含沿用說明的 unchanged 項目，及通過 AI schema、id、最新 inputHash 的新增／變動輸出；缺少或過期輸出由 verify 記錄 `V_NOT_DESCRIBED`。errata、anchor 與選填 citations 原樣傳遞，沒有 citations 時不寫該 key。自動組裝只會清除本輪無效類別的四個固定候選檔，不刪其他檔。

報告的 `categories.<category>.candidateSha256` 記錄實際候選檔原始 bytes 的 SHA-256，無檔為 null；`previousGameVersion` 記錄合併所用的上一版，供寫入中斷或完成後重跑。exit 0 表示通過或部分降級；exit 2 表示參數、狀態或 IO 錯誤；exit 3 表示整批停止，不應執行 write。

相容舊介面：同時明確指定 candidate-dir、extract-dir、version-info，且未使用中間檔目錄設定時，可無 state／cloud 執行。此模式未指定 report 時不存報告，未指定 out-dir 時使用結束即清除的自有暫存目錄。一般無參數流程或有中間檔目錄設定時使用上表預設值。

在 `*-worktrees/` 的 worktree 中執行時，請用 `--translation <Translation.md>`（或 `DARKTIDE_GLOSSARY_FILE`）指定譯名表；相鄰 Mods repo 的預設位置通常不同。diff 對應的覆寫參數是 `--glossary`。

## 拆開沿用說明（WP8）

項目原本會 `kept-previous`，且 extract 與上一版都有同 id 時，先組合為 `combined`：key、name、official、values、source（含 codeRefs／valueSources）與 aliases 等所有非說明欄位取新 extract；explanation、citations、errata 取上一版。組合項不帶 retainedFrom，發布資料看起來和一般項目一樣，schema 與 key 集合完全不變；標記只存在 state。

組合項和一般候選項共用 checkValues、checkText（鎖定效果、數字推導、譯名與 errata）、checkCitations，以及 schema／verifyMerged 輸出檢查。citations 的 codeRefs／valueRefs 必須能在新 source／values 找到，errata anchor 也必須仍存在於新官方文字。V_NOT_DESCRIBED 本身不使組合失敗。任何檢查失敗便退回整筆 kept-previous；報告的 combinationFailures 保存既有 failure code，包含合併後才發現的 O_MERGED_INVALID。整類 kept-previous 維持整類沿用，不嘗試組合。摘要列出「組合採用 N／退回 N」。

`pipeline/state.json` 的選填頂層 `retainedExplanations[id]` 形狀為 `{category, explanationFrom:{gameVersion,sourceCommit,textBatch}, valuesFingerprint, valuesChanged}`；run.items[id] 同步選填 explanationFrom 與 valuesChanged。最早說明來源依序取既有標記、上一版 retainedFrom、上一版檔頭；valuesFingerprint 用 diff 現有 contentHash 演算法僅對 values 計算，保存寫說明時的 values 基準。valuesChanged 比較實際發布 values 與此基準，所以整筆退回時不會錯用未發布的 extract。

頂層 map 跨 startRun、新版本、registerItem 因 inputHash 改變而重建、移除過期登記仍保留；再次組合或整筆沿用時維持最早來源與原 values 基準。unchanged 候選項通過不清除；只有 explanation 真正改寫且以一般候選項通過 verify 才清除兩層標記。首次使用新 state schema 不需改寫既有 state，舊檔仍可讀；必須沿用同一份 state，另建外部 state 時也須攜帶既有 map。

後續 diff／fingerprint 照發布資料中的新 values 與既有 key／name／official／aliases／codeRefs 雜湊判斷變動；沿用說明或 state 標記本身不會造成 changed。valuesChanged 僅表示 values 與該份說明基準有差異，不代表本輪 diff 的 changed。

唯讀查詢：`node pipeline/retained-explanations.mjs`，或 `node pipeline/retained-explanations.mjs --state <外部 state.json>`。輸出所有說明沿用中的 id、類別、explanationFrom、valuesChanged（JSON）；valuesChanged=true 在前，其次依 id，無需 cloud 或執行中的 run，也不寫入任何檔案。SYP-420 完成時，要一併確認這份清單已經清空。

## 寫入（WP4b）

`node pipeline/write.mjs` 先核對 state.run 與報告版本、候選檔雜湊、組合所用 extract 雜湊及 current 版本，再用與 verify 相同的 composeFinal 組出四類並全部驗證。任何最終資料驗證錯誤均在寫入前停止。

中斷後接續時，已寫入項目必須與新的檢查報告一致；若衝突，請將說明改回能通過檢查的內容後重跑 verify。

| 參數 | 預設值／作用 |
| --- | --- |
| `--root` | repo 根目錄，正式資料位於 `<root>/data` |
| `--state` | `<root>/pipeline/state.json` |
| `--cloud-dir` | `DARKTIDE_PIPELINE_CLOUD_DIR`；report 與 candidate-dir 均指定時不需要 |
| `--report` | `<cloud>/<ver>/verify/report.json` |
| `--candidate-dir` | `<cloud>/<ver>/candidate` |
| `--extract-dir` | candidate-dir 的相鄰 `extract`；有 combined 決策才讀取，SHA-256 必須與 verify 報告相同 |
| `--previous-dir` | current.json 的 path；current 已是本輪版本時使用報告的 previousGameVersion；`none` 表示沒有上一版 |

依 skills、weapons、blessings、terms 順序原子寫入 `<root>/data/<ver>/<category>.json`，每類完成後更新 state checkpoint。removed 項目逐步推進至 written；整類降級的未完成項目記錄 kept-previous 與原因。最後原子寫入 current.json（versions 合集按版本排序），再 completeRun。相同 bytes 不重寫；中斷後可接續。已 completed 的相同輸入僅允許輸出完全相符的唯讀重跑，避免第二次改寫任何檔案。

`retainedFrom: { gameVersion, sourceCommit, textBatch }` 記錄保留項目最早的來源，連續保留不更新此欄位。validate 對這些項目的 source.commit／source.text.batch 比對 retainedFrom，而其 gameVersion 暫時允許等於檔頭（同版本重產），仍不可比檔頭新；恢復條件：SYP-420 完成（留言 12724）。普通項目仍須符合檔頭的 commit／batch。排序、id、anchor、valueRefs 等其餘檢查完全相同。此為選填欄位，既有 1.0.0 資料不需遷移。

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

### Lua 靜態解析器前提

技能、祝福與武器共用的整個 Lua 靜態解析器假設：遊戲設定模組不會透過任何函式呼叫（包括 callback、計算 key 取得的別名、括號呼叫）改寫跨模組的共用設定表。在此前提下，無法理解的 override、動態值與其他無法證實的結構仍須 fail-closed，標記 unknown 或回報 problems，不猜測數值。

Table constructor 的計算 key 必須有字面值或靜態常數證明；可解析且未失效的 imported enum 字串／數字欄位也屬於證明。無法證明的 key 會標記 `hasUnknownKeys`，從該表讀取任何欄位都傳遞 `DYNAMIC_VALUE`。未知計算 key 的讀取保留所有可能值及共用表別名，後續寫入或傳給可能修改資料的函式會使所有可能共用表失效；已證明的 key 則精確讀取。

本次靜態解析驗收以 e46b892 實際使用的設定語法與固定產出為範圍；未在該版來源出現的 Lua 寫法不在保證範圍內，由 START.md 抽查把關。

已知限制以測試記錄：透過函式呼叫改寫共用表的寫法（例如 review17／19／24 的反例）不在上述保證範圍內；解析器可能仍輸出 known。安全網是依 [START.md](../docs/pipeline/START.md) 的 astra 逐 profile 抽查對照 Source-Code，並在每次遊戲更新時進行人工驗收；發現不一致即停止。

### 技能取數

cryptic 的電弧手榴彈／電擊每層脆弱值補收，須同時通過既有靜態證明與 e46b892 全文 SHA-256 釘選（完整 **478 檔、3 個目錄清單及兩個技能名稱／描述的雙語文字 hash**見 `lib/cryptic-brittleness-sources.json`）。範圍是 **原始 display-param 取數與 brittleness proof 的完整實際讀取集合**：主抽取器、所有技能樹及其 require 閉包、獨立 proof resolver，以及任何經由 reader 的檔案讀取與 `reader.list()` 掃描；不是只有兩條 proof 的引用鏈。主抽取器與 proof 共用 reader 快照，直到全部讀取結束才比對內容與完整集合並提交補值／來源 trace；預檢讀取不計入實際集合。任一釘選檔內容改變或缺失、多讀或少讀檔案／目錄、目錄清單成員或順序變動，實際定義不符，或實際文字鍵／內容變更，都回報 `BRITTLENESS_SOURCE_CHANGED`（引用鏈來源已變更，需重新核實）及 `files`／`directories`，兩筆回到原本的 `T_NUMBER`。主抽取器與獨立 proof 仍共用最後定義優先的選取邏輯，並核對實際定義的檔案、位置與原文；完整集合檢查額外涵蓋來源位置相同但有效 AST 或綁定已被其他模組改寫的情況。值與行號仍由解析取得，指紋不提供保底值。SYP-403 的 mechanics／codeRefs 在這份 proof 完成後另行遍歷，不納入上述 pins；其依據由 valueSources／codeRefs 每次重新產生，proof 拒收的兩筆不經 mechanics 補回被拒數字。清單擴大表示**原取數鏈相關來源一有變動就需要重新核實**，即使只改 BOM、空白或註解亦同。

遊戲更新後，於 repository 根目錄以 pwsh 7／Node 24 執行以下流程：

1. 固定欲核實的 Source-Code commit，執行候選收集腳本。以下為 e46b892 的可重現範例；更新時替換 commit 與輸出目錄（輸出檔已存在時會拒絕覆寫）。腳本以 Git blob 原始 bytes（含 BOM）計算 SHA-256，**不套用舊 pins**，先走與正式抽取共用的完整主抽取遍歷，再重新選取定義並完成兩條獨立靜態證明，收集兩者的全部讀檔與有序目錄清單後才輸出 `candidate-pins.json` 與 `pins-diff.json`；不會覆寫正式清單。後者包含相對於正式清單的檔案／目錄新增、移除、內容或順序變更，文字鍵與雙語字串 hash 的差異，以及實際定義位置、解析參數和引用鏈 trace。

   ```powershell
   node scripts/cryptic-brittleness-pins.mjs `
     --source-repo 'F:/GitFile/Persion - Games/Darktide-Source-Code' `
     --source-commit e46b8926cfa3fa35503e4b80b15aab7a804314e4 `
     --text-file 'F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/cryptic-brittleness/extract/text.json' `
     --output-dir 'F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/cryptic-brittleness/pins-e46b892-review'
   ```

2. 人工核對（或交 astra review）兩份 JSON 與指定 commit 的差異：確認實際選用的 talent、special rule／passive → registry → `rending_debuff.stat_buffs.rending_multiplier` 及套用層數仍成立，解析值為 `0.025` 且與官方 2.5% 相符。e46b892 的值位於 `weapon_buff_templates.lua:374`，但後續版本須依 trace 重新找位置；不能把它當保底行號。靜態證明失敗時腳本不輸出候選，應先審查來源與證明邏輯；不得關閉檢查或直接採用舊 pins。
3. 核對無誤後，才明確將候選的完整 `sourceCommit`、`files`、`directories`、`text` 更新至 `pipeline/lib/cryptic-brittleness-sources.json`。再次用相同 commit 和新輸出目錄跑腳本，確認候選與正式清單逐項一致，檔案、目錄與文字差異均為零。
4. 執行 `node --test tests/pipeline/`，確認反例仍拒收。以新 commit 和對應文字索引執行 `node tests/pipeline/cryptic-brittleness.acceptance.mjs --source-commit <新 commit> --text-file <text.json>`；省略 commit 時預設使用正式 pins 的 commit。確認兩筆補值、checkText／checkValues 通過、其他項目 byte 相同且重跑一致。e46b892 的基準另驗證 618 筆中其餘 616 筆不變。更新 pins 後，舊 commit 因來源不符被拒收屬預期行為。

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

祝福的 Lua trait 定義沒有 master-data 的 display_name／description 綁定，不能僅憑文字相似推導改名或不同武器的對應。`pipeline/data/blessing-text-keys.json` 以完整 trait key 區分武器，每筆包含 trait、name、description 和非空 evidence（repo 相對路徑與行號）；只收有逐 trait 既有對照的證據，不收僅依效果或 stem 推定的鍵。遊戲更新時，核對逐 trait 的 legacy 對照或其他可靠 master-data 證據及當次文字批次，再新增或更新對照和驗收 fixture；來源沒有綁定時保留待確認。

五組原因分別處理：改名／詞序及依武器分 key 使用明確對照；命名空間（loc_trait_、loc_）、continous／continuous 與 description 的 _new_desc／_and_bonus_stats_desc 以通用候選處理，獨立 stem 仍需對照。優先使用對照表；已解析的既有候選保留以維持相容，缺值才使用新增通用候選。新增候選多個命中則保留 null 並回報 AMBIGUOUS_TEXT_KEY。對照的 key 若缺 en、zh 或衝突回報 MAPPING_TEXT_MISSING；來源不存在 trait 回報 MAPPING_TRAIT_MISSING。舊版候選維持原有順序以保護已發布結果。

以 `PIPELINE_REAL_SMOKE=1 node --test tests/pipeline/extract-blessings.real.test.mjs` 驗證固定真實資料與輸出 byte 一致。

### 武器取數

#### schema 1.2.0

支援資料版本為 `1.0.0`、`1.1.0`、`1.2.0`。四類 extractor 一律輸出 `schemaVersion: "1.2.0"`，同次正式發布四檔版本必須一致。以下 mechanics、valueSources、codeRefs、citations 僅允許 1.2.0 的 skills、blessings；weapons、terms 不帶這些新欄位，出現時仍拒收。skills、blessings extractor 自 scriptVersion 1.2.0 產出機制與程式指紋。正式資料不會因執行 extractor 自動更新。`schema/examples/1.2.0-example/` 是示意資料，展示兩層 mechanics 與 displayParameter 勘誤錨點。

跨版本保留僅允許已支援舊版 `1.0.0`／`1.1.0` 單向提升至目前目標 `1.2.0`；相同 schema 的歷史發布仍可重播。verify 從本次 candidate／extract 取得共同發布目標並記入報告；全部缺少時使用目前目標 1.2.0，不沿用前版或已被 diff 標為 missing 的 cloud 舊檔版本。write 使用該目標重建；單項失敗與整類 kept-previous 都採用相同政策。保留項目沿用原 explanation、errata、citations、source 及既有 retainedFrom，沒有 retainedFrom 時依原規則記錄前版來源，不標成重新產生。降版、未知／未來版本、提升到非目前目標或提升後不合法的資料均 fail-closed，不發布。提升不補造欄位：例如合法的 1.0.0 weapons 缺少 1.1 以上必填的 curves、attackCombos、curveId，不能只改封套就發布為 1.2。最終仍須通過 schema、引用及四類版本一致檢查；current 索引格式不變。

- C1：skills 的 `values.mechanics`、blessings 的 `values.mechanics` 與 `values.tiers[].mechanics` 為選填 object。key 符合 `^[a-z][a-z0-9_]*(\.[a-z0-9_]+){0,7}$`；value 完全沿用 param（`value/unit?/unknown?`），null 必須有現有 unknown enum。weapons、terms 不接受 mechanics。
- C2：僅 skills、blessings 可選填 `source.valueSources`；weapons、terms 出現時拒收，包含空物件。此欄位將相對於 values 的 JSON Pointer 對應至非空 `[{path,line}]`。pointer pattern 為 `^(/([^~/]|~[01])*)+$`；path 非空、line 為正整數，禁止額外 key。每個 mechanics（含 tier）必須有對應來源，每個 pointer 必須可解析；這是 Source-Data 額外驗證。不納入 fingerprint。
- C3：僅 skills、blessings 可選填 `source.codeRefs`；weapons、terms 出現時拒收，包含空物件。key 為 `<path>#<symbol>`，pattern 為 `^[A-Za-z0-9_./-]+#[A-Za-z0-9_.:\[\]-]+$`。value 僅含必填 `path/symbol/sha256`；path、symbol 必須與 key 一致，sha256 為 64 個小寫 hex，不含行號。extractor 取完整 Lua symbol 定義（table constructor 或 function 本體），去除字串外的行註解與各種長括號註解，再去除所有 `\s`，以 UTF-8 算 sha256。
- C4：skills、blessings 可選填 item 層 `citations`，每筆僅含 `section/text/codeRefs/valueRefs`。section 為 `effect/conditions/calculation/notes/extra`，text 非空，兩種 refs 都是唯一元素陣列，合計至少一筆。verify 要求 text 為對應 explanation 段落的子字串、codeRef 存在於 source.codeRefs、valueRef 可解析且在 source.valueSources 有 key。Web、Extension 不顯示 citations。
- V-CITE：1.2.0 skills／blessings 本次由 AI 撰寫的 `conditions/calculation/notes/extra` 每個非空段落都須至少一筆同 section citation；非 `official` 的 effect 也適用。違反沿既有單項目降級流程，保留上一版；新項目沒有上一版則排除。未重新產生的舊說明不追補覆蓋。
- C5：**所有版本**的 errata 一律使用 `{locale,official,corrected,valueRefs,sources,anchor?}`；禁止單數 `valueRef` 與額外 key。valueRefs 為至少一筆 values JSON Pointer，sources 為至少一筆 `{path,line}`；來源針對固定 Source-Code e46b892。anchor 僅含 `field/locale/text/occurrence/itemId?/param?/tier?`，locale 須相同、text 非空、occurrence 為正整數。field 限 `official/name/displayParameter`；displayParameter 必須有 param；blessings 須指定存在的 1..4 tier，先查該階的 params key，再查根層 values.params key，其他項目只查根層 values.params key。其他 field 禁止 param、tier。itemId 須符合 item id pattern，目標存在於同版本任一類別；valueRefs 改在該目標的 values 解析。displayParameter 的 text 以查得的指定 param 顯示值定位。verify 仍拒絕未知參數、無官方數字差異或無法由引用值推導的勘誤。舊 examples 的單數 valueRef 已遷移，正式資料無 errata，未變動。
- C6：沿原 key/name/official/values/aliases fingerprint，只有存在 source.codeRefs 時才額外加入 `{codeRefs:{refId:sha256}}`，使用 canonical JSON。沒有 codeRefs 的 item 雜湊保持逐位元相同；source.files、valueSources 與其行號不納入。

AI I/O 的外層 schemaVersion 仍為 `1.0.0`；AI input 增加選填 `dataSchemaVersion`，新輸入明示資料版本，並保留 item 的 values/source 與 previous 的 citations。AI output 新增同形狀選填 citations，errata 使用 C5，effectOrigin 仍由 pipeline 決定。candidate/write 原樣傳遞 citations 與 errata；state 仍只記錄階段、結果與 inputHash。數字掃描可使用兩層 mechanics 推導說明數字；T_NUMBER 另接受同段 citation 的 valueRefs 所指有限數字，經單層的 1±x、x^n、(1+x)^n、兩數相加或相乘及一次百分比換算得到的結果；指數 n 須是同段引用的 2 至 20 整數。也接受同段 codeRefs 所指固定 commit 的完整 symbol 中的 Lua 數字字面量或其百分比，須先核對 sha256 並排除註解。缺少 citation、來源或雜湊不符時不適用新規則。T_DIRECTION 不變；T_COVERAGE 只檢查 params 與 tiers[].params。來源行號與 sha256 不可供說明引用。

#### 固定 mechanics 取數（SYP-403）

mechanics 是扁平 `key → param`，沒有巢狀規則物件。template 名、talent override 索引、條件欄位與 blessing tier 都保留；相同數值不去重。前綴外的段落沿用來源欄位名稱，最多八段；更深的尾段以底線連接並檢查碰撞。blessing tier override 放在該 tier 的 mechanics（key 含 `override`），預設模板仍留在 item 層。

| key 前綴 | 來源結構 | 連結規則 |
| --- | --- | --- |
| `buff.<template>.` | BuffTemplates 的純量、duration、max_stacks、child_duration、刷新旗標、talent_overrides | talent 的 passive／buff 名、trait buffs key、明示子 buff 名，以及已連結 callback 的字面 buff 名；保留各覆寫路徑 |
| `stat_rule.<template>.` | stat_buffs、proc_stat_buffs、conditional_stat_buffs、lerped_stat_buffs、stepped_stat_buffs；BuffSettings.stat_buff_types | 原始值與 stat 類型分別取數；lerped 保留端點，stepped 保留每個 step，不能當作最終值 |
| `stat_rule.distance.`／`stat_rule.stagger_count.` | DamageSettings 與 damage_calculation | 只有已連結的近／遠距或 stagger_count stat 才收對應消費式與界線 |
| `finesse.<template>.` | 明確白名單 stat 與 `_finesse_boost_damage` | 先辨識該 stat 的實際消費式，再辨識額外傷害乘式；scope=`finesse_bonus`，同時爆擊與弱點走同一次 finesse 計算。power／stagger weakspot stat 分別留在 `stat_rule.<template>.<path>.<stat>.consumer_stage` 的 power_level_input／stagger_reduction |
| `ability.<context>.` | PlayerAbilities、ability template、W1 weapon actions、charge templates | 直接 player_ability 參照、archetype 明示的 base talent，或相同 ability stat 的消費關係；不同 action／鎖定模式分開 |
| `ammo.<template>.` | ammo_reserve_capacity 與 WeaponExtension 分開的 reserve／clip 指派 | reserve_bonus 為原始比例；floor 和 affects_clip=false 需對應的 reserve 及 clip 消費式證明 |
| `area_buff.drone.` | area_buff_drone.deployable.relation_init_data 與 ProximityAreaBuffDrone | allied／enemy、improved、兩個升級保留原名；離開與 destroy 的移除呼叫各自辨識 |
| `area_buff.stimm_field.` | broker stimm_field life_time、interval、corruption_heal_amount | 名目上限由這三個來源作固定四則運算，不保證實際 tick 數 |

enum／boolean 的辨識條件也寫在 `mechanics*.mjs` 註解：

- aggregation 直接取 `stat_buff_types` 的字串，不能從 stat 名猜加乘。minion 的固定生成 loop 只寫 `damage_vs_`／`damage_taken_by_`；對其他 stat 是 no-op，生成前綴若與明示值碰撞，只接受與該 loop 完全相同的類型。投影保留原行號，其餘程式照常經共用 resolver 的 binding／mutation 檢查。broker stimm 使用與原 extractor 相同的有限 DSL key 集合。
- `restart_shared_timer` 需明示 refresh_duration_on_stack=true，或已辨識 parent class 的子 buff timer 重設分支。`restart_proc_active_window` 需標準 ProcBuff 與 allow_proc_while_active=true。單一 proc_stat_buffs 貢獻的 boolean 由 ProcBuff 的 `_calculate_stat_buffs` 呼叫判定。
- `removed_stacks=1` 限定有 duration、max_stacks>1、refresh_duration_on_remove_stack=true 的 buff class；須辨識到期、完成後要求移除、移除後重設時間的分支，以及完整 `Buff.remove_stack` 方法內的 `current_stack_count - 1`。UI 欄位無法提供此計數。
- activated parent 的 missed-sweep／successful-sweep 規則，要求整個 callback 恰為 `return params.num_hit_units > 0`，並核對 parent 的刪除／刷新分支。target-number parent 的 shared timer 由 last_hit_time 欄位判定。stepped cap 只接受完整的常值 min/max return。
- floor／ceil、嚴格大於、離開移除、傷害／韌性結算階段等，採固定 token 序列辨識；註解不是證據，數字需是 number token。動態欄位輸出 DYNAMIC_VALUE；來源不存在、形狀不符或規則不匹配回報 MECHANICS_UNKNOWN，不能沿用舊數字。

每一 mechanics 的 values 相對 JSON Pointer 都有 valueSources；數值沿 resolver trace 記實際常數及參照來源。行號只存在來源欄位。codeRefs 每次由原始碼重新建立：使用詞法 symbol 路徑（匿名 return table 為 `return_table`，重複定義以固定序號區分），收錄連結鏈的表及表內明示名稱函式一層；inline function 已在表雜湊中。無法確定的 symbol 略過並在 stdout 統計。正規化先用 Lua tokenizer 排除字串外註解，再去除所有 whitespace（包括字串內的 whitespace），依 C3 計算 UTF-8 SHA-256，不保存行號或時間。

通用數字驗證 helper `lib/mechanics-coverage.mjs` 只比對呼叫端明確指定的語意欄位（可限制 tier pointer），禁止掃整個模板尋找同值。單位換算也須逐欄位明示：identity、absolute、percent（×100）、absolute_percent、bonus_multiplier（1+ratio）、remaining_multiplier（1-ratio）、reduction_percent（abs(1-ratio)×100）。假設輸入和算例結果不寫入 values。常值規則的來源乘積（如 raw stat × max_stacks）保留所有輸入的 resolver trace；固定多行規則的 valueSources 收錄每個匹配 token 所在行，不能將首尾行視為範圍。

#### schema 1.1.0：曲線與連段

四類 extractor 現在一律輸出 `schemaVersion: "1.2.0"`；weapons、terms 不帶 mechanics、valueSources、codeRefs、citations，同次正式發布四檔仍必須一致。驗證器仍接受 1.0.0：該版禁止 `values.curves`、`values.attackCombos` 與 `bars[].stats[].curveId`；weapons 自 1.1.0 起三者必填。`schema/examples/1.1.0-example/` 提供曲線與連段範例，原 1.0.0 範例保留。current 索引 schema 接受 1.0.0／1.1.0／1.2.0，保留舊索引相容；current 索引的 `schemaVersion` 必須與其指向的四個資料檔一致。`state.json` 與 text 中間檔有獨立契約，維持 1.0.0。

資料檔的 `explanation.effectOrigin` 為選填，僅 schema 1.1.0 以上的 blessings、skills 可使用；值限 `official` 或 `unofficial-translation`。此欄位由 pipeline 設定，AI output 不得包含；1.0.0、weapons 與 terms 均不得包含。缺少欄位仍為合法資料。

`values.curves[]` 與實際輸出的 bar stat 一一對應，id 為 `<barId>.<statKey>`、依 id 排序。輸入是 `base_stat_value`、ratio 0～1，knots 僅含 0／1，直接重用 WP2 min／max，不再解析一次端點。線性曲線可在端點間內插；陣列沿用 WP2 拆成 `.1`、`.2` 等純量 stat。source 指向 lerp_basic 所在檔案／行（常數則指該數值）。未證實單位時 outputUnit 為 null。

無法證實線性的曲線以 `interpolation: "unknown"`、兩個 output 都為 null 並記原因；原有 stat min／max 保留。`LERP_T_OUT_OF_RANGE` 表示單筆 tweak 權重超出 [0,1]；`NONLINEAR_COMBINATION` 表示多筆累積在區間內發生 clamp，無法以兩端點重建；未觸發 clamp 的逐筆線性相加保持 linear；damage profile 使用相同判定；`NONLINEAR_LERP` 保留供無法以 tweak 線性表示的 lerp 來源使用，目前沒有輸出此原因。曲線仍沿用 WP2「相關 bar 同時變動」語意，不足以重建各 bar 獨立變動的完整傷害公式，缺口見 [公式盤點](../docs/pipeline/weapon-damage-formula-gaps.md)。未解析而進 params 的 stat 不建立曲線。

`values.attackCombos[]` 依 light、heavy 輸入追蹤 action 圖。起點採 `start_input = start_attack`，沒有時才使用有 light/heavy 邊的其他明確 start_input。只有原本會得到 `CHAIN_START_AMBIGUOUS` 的多候選連段，才嘗試依 `invalid_start_action_for_stat_calculation` 排除替代入口；候選 action 表必須是封閉、靜態可證明的表，候選的 `start_input` 與排除旗標也必須可靜態判定。旗標只接受缺省、`nil`、`false` 或 literal `true`；只有明示 `true` 的 action 會排除。排除後恰剩一個候選才從它執行原 walker；剩 0 個、超過 1 個、表有未知 key／動態內容或旗標值不明時，仍輸出空 steps 與 `CHAIN_START_AMBIGUOUS`。抽取問題中的 `COMBO_START_EXCLUDED` note 會列出選用的普通／素質計算用入口及排除的 action 名稱，不增加 `attackCombos` schema 欄位。這描述普通、已就緒情境下的連段語意（`special_active=false`、非衝刺、非滑行，相關時間門檻已滿足），不表示執行期所有狀態都只有一個可用入口。

連段從已進入 start action 的狀態開始；後續轉入 action（含返回 start）才檢查 action condition。windup 不列入 steps，沿 `start_attack` 推進；只有 kind 可靜態確認的 sweep 或具有靜態 damage profile 的傷害 action 列入。`loopsTo` 是 steps 的零起算索引；無循環為 null。純遠程無此結構則為空陣列。時間不影響順序，未使用時間選分支。原始碼語意依 `scripts/settings/equipment/weapon_templates/default_melee_action_input_setup.lua`、`melee_action_input_setup_mid.lua` 與 `scripts/utilities/action/action_handler.lua` 的 `_valid_action_from_action_input`、`_validate_single_chain_action` 核對；`_anim_end_event` 的 callback 僅控制動畫收尾，不是連段條件。

1.1.0 武器可選填 `values.damageProfiles[]`，保存來源明示的 attack／impact 原始數值與動作或模板綁定；hitScan／projectile 的明示 powerLevel 保存在各自的 binding。數值附來源位置，缺值以 unknown 原因表示；這些是原始數值，不是最終傷害。

新版 `extract-weapons` 一律輸出此陣列，依 profile id 排序；distributions 保留 root、各 target／default target 與 near／far，bindings 保留個別 action 和模板情境（例如 hip／ADS），shotshell／flamerGas／explosion 不附 powerLevel。不讀取共用 `grenade_ability_*` 動作。繼承採來源的 clone，再依 override 列順序指定末端欄位；指定整表時整表替換，不深層合併。中間路徑必須已存在；無法證明的 override key、列或集合使該模板 fail closed，不能略過並沿用 parent 數值。動態值用 `DYNAMIC_VALUE`，來源未明示用 `NOT_EXPOSED_BY_SOURCE`，找不到的 profile 用 `NOT_VERIFIED`，並以 `DAMAGE_PROFILE_UNKNOWN`／`DAMAGE_BINDING_UNKNOWN` problems 回報無法確認的結構或綁定。數值保留原始端點，不套用素質、powerLevel、護甲、buff 或執行期傷害公式。

`WeaponTweaks.create_new` 的 `num_keys = #row - 1` 使可證明長度為 0／1 的 row 不執行寫入；這類靜態 no-op 可安全保留，與無法解讀的 row 不同。nil 或無法證明非 nil 的末值可能改變 Lua `#row` 邊界，使寫入路徑也無法確認，因此整個 override 模板 fail closed。透過 alias 取得的 parent 表也先隔離再寫入。無法靜態展開的 action 另記 `DAMAGE_ACTION_UNKNOWN`（例如執行期建構的 inspect／unwield），不代表已輸出 profile 的端點缺失；輸出不是完整執行期 action 圖譜。私有 profile clone 無法證明與其來源 id 相同時回報 unknown／problems，不套用原 profile 的數值。

step 的 profile 綁定重用 WP2 require/catalog 邏輯，唯一靜態 profile 才填值，否則 `damageProfile: null` 及 `DAMAGE_PROFILE_BINDING_NOT_FOUND`。displayed_attacks 必須能以明確 action_name 對應 display_name 才填名稱；群組 gestalt 名稱不推定為每個 action 的名稱。

連段原因碼：`CONDITIONAL_CHAIN`（chain validation／action condition／running action state requirement）、`CHAIN_TARGET_NOT_FOUND`（缺目標）、`CHAIN_START_AMBIGUOUS`（多起點）、`CHAIN_CYCLE_WITHOUT_ATTACK`（無攻擊循環）、`DYNAMIC_VALUE`（函式／動態邊或 kind），另保留既有 `REFERENCE_NOT_FOUND`。遇不確定分支保留已證實的 steps 前綴。`COMBO_START_EXCLUDED` 是抽取診斷 note，記錄採用普通起點時排除的替代 action；`CURVE_UNKNOWN`、`COMBO_UNKNOWN` problems 均帶 reason，可直接彙總；profile unknown 由 steps 的 `damageProfileUnknown` 統計。

`PIPELINE_REAL_SMOKE=1 node --test tests/pipeline/extract-weapons.real.test.mjs` 驗證 schema、curve 一一對應、近戰輕重擊覆蓋及兩次 byte 相同，並只印彙總及少量抽樣。

固定來源 `ba6c148`／文字批次 `25606770` 的基準為 137 把武器、25,372 條曲線、146 組連段；73 把近戰中，light／heavy 各 55 把有至少一個已確認攻擊 step（75.34%，包含帶 unknown 的已確認前綴）。real smoke 的兩種連段覆蓋門檻均設為 70%，保留條件分支的保守 unknown，不以空 steps 充作覆蓋。

`extract-weapons.mjs` 讀取玩家武器模板、官方文字與靜態 trait 列，先建立整把武器的貢獻表；min／max 為所有相關屬性條同時 0%／100% 時的遊戲實際值；同一路徑多條會累加後 clamp 到 0～1，再對實際基礎模板內插，固定數字列也參與累加。保留固定值與陣列的各元素。`lib/weapon-stats.mjs` 處理 registry、require、movement state 繼承及 damage profile parent/overrides；damage key 包含實際 profile／override 名稱；profile 專屬 lerp override 整份優先於通用 action 貢獻，只有被選用的來源參與累加；相同語意來源只輸出一次，所有有貢獻的 bar 都保留該 stat。無法靜態解析的數值記為 unknown，`UNRESOLVED_STAT.reason` 區分缺參照、函式與條件算式；movement sentinel 依遊戲設定展開並套用繼承。不存在且遊戲不讀取的路徑略過，每把武器以一筆 `NOT_APPLICABLE_STAT` 彙總數量，未註冊模板仍會輸出。

開 PR 或驗收前必須執行真實來源完整測試：在 PowerShell 設定 `$env:PIPELINE_REAL_SMOKE='1'`，再執行 `node --test tests/pipeline/cryptic-brittleness-fingerprints.test.mjs tests/pipeline/cryptic-brittleness-reads.test.mjs`，並執行 `node --test tests/pipeline/review33.real.test.mjs` 核對固定來源 binding 行號。預設未設定時 fingerprint／reads 的真實來源案例不會執行，小型 fixture 仍會執行。
