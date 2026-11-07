# SYP-391 spec40：cryptic review23 修正

## spec40 實作計畫

- 目標／範圍：R23-01，釘選這次 extract-skills 主抽取器與獨立 proof resolver 實際讀取的完整檔案及有序目錄清單。只修改本 worktree，實跑輸出限指定工作根；不改 state、verify、schema、不安裝下載、不 push、不改寫歷史、不略過 hook。
- 證據／修改點：目前 `buildSkills` 在建立 proof audit 前已讀取技能樹；定義的 file/start/line/raw 相同仍可能有不同的有效 AST。於 `source-reader.mjs` 共用快照記錄，audit 在主抽取前建立；延後補值與來源 trace 的提交，直到主抽取及兩條 proof 全部完成，再比較內容及讀取集合（含多讀、少讀及目錄順序）。
- 變更：抽出共用的主抽取遍歷供正式抽取與候選腳本使用。候選收集不套舊 pins，走完整主遍歷及兩條 proof；保留既有靜態證明與實際 definition 核對。README 說明技能相關來源變更皆需重新核實；正式清單依固定 e46b892 重新收集並核對原始 Git blob。
- TDD／驗證：先加入 review23 兩個完整 buildSkills 反例（有效 talent 改寫、tree require 清單外 callback writer）及少讀集合的單元案例，確認 Red；再完成 Green。維持 review18／20／21 拒收測試，接入 index。候選對 e46b892 重產零差異；固定 e46b892／dd430f5／26101089 驗收 618 筆（兩筆 0.025，616 筆完整 bytes 不變，重跑一致，checkText／checkValues／schema 通過）；最後 `node --test tests/pipeline/`。
- 風險／交付：完整集合會增加且任何相關來源異動都須重新核實；預檢不算實際抽取讀取，避免掩蓋少讀。查核 Source-Code 的 fs／Git 旁路。新增指定訊息及 Co-Authored-By 的 commit；可回退該 commit 恢復原行為，無資料遷移。

## spec40 完成紀錄

- R23-01：`source-reader.mjs` 提供共用檔案／目錄快照；正式 audit 於主抽取前建立，完整涵蓋主 resolver、技能樹、require 閉包及獨立 proof。兩筆 value／trace 暫存至全部遍歷完成，最後核對內容與集合相等（含少讀）才提交；預檢不計入實際讀取。
- Red：`spec40-red.log` 確認兩個 review23 完整 buildSkills 反例均錯補 0.025，以及少讀集合缺少拒收 API，3 項全失敗。Green：相同 3 項全通過，報告 tree 與清單外 callback writer，拒收並保留 T_NUMBER；35 項小型 fixture／候選清單測試亦通過。新模組已接入 `tests/pipeline/index.js`。
- 新清單 **478 檔、3 份目錄清單**：原 438 檔無移除、無指紋變動，新增 40 檔（含 8 份技能樹、layout parser、ability templates 及其依賴）。目錄前綴為 talents（8 筆）、abilities（7 筆）、`scripts/ui/views/`（331 筆），保留掃描順序。已另以 e46b892 Git blob 核對全部 478 個原始 SHA-256，以 Git ls-tree 核對全部目錄清單。`spec40-pins-check` 重產候選與正式 JSON bytes 相同，檔案／目錄增刪改均為零。
- 來源旁路查核：主抽取器與 skill／Lua／effects 相依模組沒有直接 fs 或其他 Git 通道讀取 Source-Code 內容；Lua 原始內容統一由 source reader 的 Git cat-file 取得，目錄由 reader.list 記錄。CLI 的 rev-parse／log 僅解析 commit 與版本 metadata，official-text 的 fs 讀取是已抽出的 Private 文字 JSON；acceptance 的 git show 僅載入舊版抽取器程式作比對基準。
- 固定 e46b892／Private dd430f5／batch 26101089 驗收通過：618 筆中只有兩筆補 0.025（解析來源仍為 `weapon_buff_templates.lua:374`），checkText／checkValues／schema 全通過；其餘 616 筆 canonical bytes 與 contentHash 相同；兩次完整輸出 bytes 相同，SHA-256 `600c4ad4484df0a32069025edd4d91ae511c17c92ad39deae4e53ae4ad17707d`。實際讀取集合與 478 檔／3 目錄 pins 完全相等。
- 最終 `node --test tests/pipeline/`：**378 項，372 通過、6 項既有 opt-in real-smoke 略過、0 失敗**；review18／20／21 與 review23 的反例全部拒收。`git diff --check` 通過。
- 所有實跑及暫存證據限指定工作根：`spec40-red.log`、`spec40-green-reads.log`、`spec40-unit.log`、`spec40-pins-review/`、`spec40-pins-verified.json`、`spec40-pins-check/`、`spec40-acceptance.log`、`acceptance.json`、`spec40-pipeline-tests.log`。正式 state SHA-256 維持 `ceb6b1a612492c32397ce7d8da1959dda7968d93d59bad093ee13c62910bd5e3`；verify／schema／official-effect 無變更。

# SYP-391 spec37：cryptic review21 修正

## spec37 實作計畫

- 目標／範圍：修正 R21-01 的實際定義選取落差，交付 R21-02 可重現的候選 pins 產生流程；只改本 worktree，不改正式 state、verify 或 schema。
- 證據／修改點：`skill-structure.mjs` 依 talents 清單順序選取最後一份同職業定義；`extract-skills.mjs` 未將實際 definition 交給 helper。抽出共用的定義掃描，讓獨立 proof resolver 用相同選取規則，並比對傳入定義的檔案、位置與原文。
- 變更：audit 同時釘選實際讀檔原始 SHA-256 與 `reader.list()` 的完整結果及順序。預檢全部 pins，證明後再拒絕清單外讀檔／掃描。新增獨立腳本，不套用舊 pins，執行共用的完整靜態證明後輸出候選 JSON、檔案／目錄增刪改與引用鏈證據；正式清單僅在核對差異後明確更新。
- TDD／驗證：先加入完整 buildSkills 清單外同職業定義、清單順序改變、實際定義身分不符與目錄增刪反例，及 fixture 候選 pins 的手寫預期，確認 Red 再實作 Green。沿用 review18／20 全部反例，跑固定 e46b892 候選 pins 零差異、618 筆驗收（兩筆 0.025 且 checkText/checkValues 通過、616 筆 byte 相同、重跑一致），最後跑 `node --test tests/pipeline/`。
- 風險／交付：共用選取掃描會新增實際依賴，完整保留收集到的 pins；目錄順序亦影響最後覆蓋，故不得排序後再比較。所有實跑／暫存輸出限指定 work root。依指定訊息新增 commit，不 amend、不 push、不略過 hooks。回退此 commit 即恢復原補收行為。

## spec37 完成紀錄

- R21-01：抽取器傳入實際 definition；獨立 proof resolver 使用共用掃描規則，核對檔案、start、line、raw。audit 新增目錄預檢與證明掃描快照，清單增刪、順序改變及定義身分不符皆回報 `BRITTLENESS_SOURCE_CHANGED`。先確認 5 個新增案例 Red，再完成實作；真實來源測試涵蓋清單外同職業檔先／後選取、純順序變動與實際位置不符。
- R21-02：`scripts/cryptic-brittleness-pins.mjs` 不套用舊 pins，先完成實際選用定義的兩條靜態證明，再輸出候選清單、增刪改報告及引用鏈 trace。fixture 手寫的 9 檔指紋／1 目錄預期通過，另驗證差異報告與證明失敗拒絕產生候選；README 提供收集、人工或 astra 核對、明確更新及重跑測試步驟。
- 固定 e46b892 的 proof 實讀聯集為 **438 檔、2 目錄**：原 423 檔無移除、無內容指紋變更；新增 7 個其他職業／base talents、7 個 abilities 及 `lunge_templates.lua`，皆已另以 Git blob 核對原始 SHA-256。核對兩筆實際定義位於 cryptic talents 的 985／1988 行，最終 ratio 仍解析自 `weapon_buff_templates.lua:374`，為 `0.025`。更新正式清單後重新執行腳本，候選與正式 JSON **byte 相同**，檔案／目錄的新增、移除、變更均為零。
- 重新核對 Private dd430f5／batch 26101089 的 manifest checksum 與列數。最終版 acceptance 通過：618 筆只改兩筆，其餘 **616 筆完整 canonical bytes 與 contentHash 相同**，兩次輸出 byte 相同，SHA-256 仍為 `600c4ad4484df0a32069025edd4d91ae511c17c92ad39deae4e53ae4ad17707d`；兩筆 `checkText`／`checkValues`／schema 全通過，proof 實際讀檔及掃描清單與 pins 完全相等。
- 最終 `node --test tests/pipeline/`：**375 項，369 通過、6 項既有 opt-in real-smoke 略過、0 失敗**。review18／20 的全部既有反例與 review21 新增反例均拒收，保留 `T_NUMBER`。本次新增 8 個測試，既有 index 匯入的兩個 cryptic 模組共 65 項在本機實際執行。
- 證據均位於指定工作根：`spec37-red.log`、`spec37-pins-review/`、`spec37-pins-check/`、`spec37-extract-text.log`、`spec37-acceptance-final.log`、`acceptance.json`、`spec37-pipeline-tests.log`。`pipeline/state.json` SHA-256 維持 `ceb6b1a612492c32397ce7d8da1959dda7968d93d59bad093ee13c62910bd5e3`；verify、schema、official-effect 均無變更。

# SYP-391 spec33：cryptic 引用鏈檔案指紋釘選

## spec33 實作計畫

- 目標／範圍：兩筆補收只有在 e46b892 全文 SHA-256 與既有靜態證明皆通過時才成立。其餘技能、verify、schema 與正式 state 不變。
- 證據／修改點：`skill-brittleness.mjs` 現在只釘選 arc tokens 與 passive table；terra 的 UnitT70 已實跑 Red，0.02 仍補收。`SkillResolver` 的 effects guard 會遞迴讀取 require，故用獨立 resolver 與記錄 reader，避免共用快取造成漏記。
- 變更：程式收集證明實際讀過的來源檔，產生固定 e46b892 的完整清單；檢查所有釘選檔的原始 bytes，證明結束後再比較實際讀檔集合，新增依賴亦拒收。失敗回報 `BRITTLENESS_SOURCE_CHANGED` 與排序的檔案清單，保留 T_NUMBER。參數與行號仍由解析產生。
- TDD／驗證：沿用合理的 UnitT70 Red，補齊 review18 七例與 review20 所有腳本變體、額外讀檔、缺檔、空白／BOM 變更及靜態證明失敗案例；小 fixture 必須經正式指紋閘門拒收，真實 e46b892 另跑正例。跑 index 全套與手動 618 技能驗收（616 byte 相同、重跑一致、兩筆 checkText/checkValues）。
- 風險／交付：完整 require closure 可能較大，必須由程式列出並保留全部依賴，不人工縮減。全部實跑輸出限指定 work root；不 push、不略過 hooks。新增指定訊息的 commit；來源更新後須人工重新核實與更新指紋。

以下保留初版實作與驗收背景；spec33 的全文指紋閘門優先於舊版允許註解／行號變動的行為。

## spec33 完成紀錄

- 程式自動走訪兩條證明，實際讀檔聯集為 **423 檔**；`pipeline/lib/cryptic-brittleness-sources.json` 保存完整路徑與固定 e46b892 Git blob 的原始 SHA-256。423 檔皆含 BOM，故 `source-reader.mjs` 增加唯讀的 `readBytes()`，保持原本提供給解析器的文字不變。
- helper 的獨立 resolver 經記錄 reader 取得來源快照；檢查所有釘選檔後執行原靜態證明，最後再次檢查實際讀到的檔案，通過才寫入 value／trace。清單外檔案、缺檔、全文變更皆回報來源已變更。小型 fixture 不再能冒充完整來源。
- terra 的 UnitT70 已確認 Red 並沿用；新增依賴讀取與 raw bytes 的 Red 後完成 Green。review18 七例、review20 所有反例腳本變體已接入 index；正式來源測試 27 項通過（24 個 review 變體、1 個註解變更、正例與第二層靜態證明各 1）。
- `node tests/pipeline/cryptic-brittleness.acceptance.mjs` 通過：e46b892／dd430f5／26101089 重抽 618 筆，兩筆補 0.025、checkText／checkValues／schema 通過，其餘 616 筆 canonical bytes 與 contentHash 相同；兩次整份輸出 byte 相同，SHA-256 `600c4ad4484df0a32069025edd4d91ae511c17c92ad39deae4e53ae4ad17707d`。證明實際讀檔集合與 423 個 pins 完全相等，完整清單納入工作根 `acceptance.json`。
- `pipeline/state.json` SHA-256 仍為 `ceb6b1a612492c32397ce7d8da1959dda7968d93d59bad093ee13c62910bd5e3`。實跑輸出限指定工作根。README 已說明遊戲更新後須重新核實指紋。
- 最終 `node --test tests/pipeline/`：**367 項，361 通過、6 項既有 opt-in real-smoke 略過、0 失敗**。27 項 cryptic 正式來源測試在本機實際執行，未略過。執行時將 `TEMP`／`TMP` 指到工作根 `spec33-tmp`，使用 Windows 反斜線絕對路徑，與既有暫存輸出斷言一致。原始 bytes／BOM／快取隔離亦有獨立 Git reader 回歸測試。

## 目標與實作

依 inv4 的來源追查，僅補收 `cryptic_arc_grenades_brittleness` 與 `cryptic_electrocution_applies_brittleness`。在 `pipeline/extract-skills.mjs` 的 `skillParams` 後呼叫 `pipeline/lib/skill-brittleness.mjs`，成功時加入 `brittleness_per_stack`（ratio），並在彙整 `source.files` 前加入解析所得的證據行號。值來自最終 buff registry 的 `rending_debuff.stat_buffs.rending_multiplier`，沒有數值或行號保底，沒有修改 schema、展開器或 verify。

辨識採用既有有限 helper 的 token fingerprint 做法，不執行 Lua：

- 手榴彈：核對 talent 的 special rule；精確比對完整電弧模組，涵蓋 rule → context → callback 註冊 → `rending_debuff` 呼叫及所有中間綁定；核對設定表的套用層數與 talent 參數相同。
- 電擊：核對 talent 的 passive → 最終 registry 的同名 template；精確比對完整 passive table，並核對有效欄位、事件、函式捕捉的 settings／keyword／FixedFrame 匯入及最終綁定，拒絕後續改寫或遮蔽；核對套用層數。
- 最後核對 registry 的武器 buff 匯入與實際 template 身分，靜態解析有限數值。失敗只回報 `BRITTLENESS_SOURCE_UNPROVEN`，不新增參數或 unknown，原有 `T_NUMBER` 繼續生效。

token fingerprint 不含空白、註解或行號。手榴彈模組採保守的全文 token 比對，未來即使是無關 token 改動也會停止補收，須重新審查引用鏈後更新證明。沒有通用函式執行或全 buff 補收。保留原 `SCRIPT_VERSION`，使本次影響僅限兩筆，其他技能的完整 bytes 保持不變。

## TDD 與回歸

先加入 fixture 與接入 `tests/pipeline/index.js`，確認缺少 `brittleness_per_stack` 的 Red，再實作至 Green。fixture 保存 e46b892 的完整電弧模組、原 passive table 與兩個 talent；其餘相依設定縮成可獨立執行的資料。

`tests/pipeline/cryptic-brittleness.test.mjs` 覆蓋：兩筆成功及來源、移除補值仍失敗、只改 candidate 被拒絕、rule／passive／callback／debuff／捕捉綁定中斷、函式／動態／非有限值、來源改為 0.02、缺檔、行號位移與無關技能不變。沒有放寬檢查或加入豁免。

可重現指令（pwsh 7、Node 24，於 repository 根目錄）：

```powershell
node --test tests/pipeline/cryptic-brittleness.test.mjs
node tests/pipeline/cryptic-brittleness.acceptance.mjs
node --test tests/pipeline/
```

## 固定來源實跑紀錄

- 基準程式：`b133bd0`，Source-Code：`e46b8926cfa3fa35503e4b80b15aab7a804314e4`，以 Git object 唯讀存取。
- Private `origin/master`：`dd430f524dfd089e013f87cbc20be754af6979d4`，文字批次 `26101089`；`extract-text.mjs` 重新核對 manifest checksum 與各語言列數。
- 工作根：`F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/cryptic-brittleness/`。state 參數也指定此根，不改寫正式 pipeline state。
- 對基準與正式 helper 各重抽 618 筆，只有指定兩筆新增 ratio `0.025`；移除此欄後，兩筆其餘 values 與基準相同。其餘 616 筆的完整項目 canonical bytes 與 contentHash 相同，effectFormats／problems／excluded 也相同。
- 兩次正式補收的整份 extract bytes 相同，SHA-256：`af1dd2ff74cda73ad651c38c2d23935a4ab2caf456a822e35a3abcd0d2dd505b`。
- CLI `extract-skills.mjs` 以相同固定來源及工作根實跑兩次，與 acceptance API 的輸出 bytes 完全相同；結果另存 `cli-acceptance.json`。
- 兩筆 `checkText`、`checkValues`、extract／candidate schema 全通過。移除來源值及來源值為 0.02 的控制仍是 `T_NUMBER`，只改 candidate 仍是 `V_FIELD_CHANGED`，errata 保持空陣列。
- 來源值：`scripts/settings/buff/weapon_buff_templates.lua:374`，registry 匯入 `scripts/settings/buff/buff_templates.lua:31`。手榴彈套用與 rule：`arc_grenade_chain_lightning_source.lua:79、123`；電擊 settings／套用：`cryptic_buff_templates.lua:2555、2557`。行號均由解析節點或已核實 token 取得。
- 正式 `pipeline/state.json` SHA-256 維持 `ceb6b1a612492c32397ce7d8da1959dda7968d93d59bad093ee13c62910bd5e3`。
- 目標 fixture 測試 5 個全通過；最終 `node --test tests/pipeline/` 共 314 個，308 通過、6 個既有 opt-in real-smoke 跳過、0 失敗。指定來源的 618 筆 acceptance 與 CLI 實跑另已完成。

完整逐筆來源、616 個不變 ID、兩筆展開文字、前後 contentHash 與正負例檢查結果保存在工作根的 `acceptance.json`。沒有發布、push 或資料遷移；回退本次 commit 即恢復兩筆原本的缺值失敗。
