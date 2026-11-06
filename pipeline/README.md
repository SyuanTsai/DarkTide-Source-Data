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

WP1 提供 `lib/`、`schema/`、`validate.mjs` 與 `state.json`；WP2 本次補上 check-version、extract-text、extract-terms 與取數共用 lib，其餘腳本由後續規格實作。

狀態依序為 `extracted`、`described`、`verified`、`written`。相同版本與來源可接續執行並保留項目進度；輸入雜湊改變時重設該項目。完成或保留上一版的項目不再列為待處理。

Canonical JSON 的物件 key 按 UTF-16 排序，陣列保持順序；使用 compact JSON 並以一個換行結尾。

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

### 驗證

只執行 `node --test tests/pipeline/`，假 repo 測試在自有暫存目錄建立 Git repo 與具正確 sha256/rows 的四份 JSONL，完成後清理該暫存目錄。

真實驗證在 pwsh 執行：

```powershell
$env:PIPELINE_REAL_SMOKE='1'
node --test tests/pipeline/real-smoke.test.mjs
```

固定 commit `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e` 的 inventory 應為 137 個玩家模板、135 個 registered、693 個 bespoke 定義。Private 固定 `origin/master` 的 batch `25606770`；測試驗證 extract-text 與 extract-terms 各執行兩次的 byte 一致。該 Source-Code 是 1.13.2、文字批次是 1.13.1，因此 check-version 應 exit 2。extract 測試明確傳入 commit/batch，輸出只存在測試自有暫存目錄，略過時不需要真實 repo。
