# SYP-403 schema 1.2.0 驗收證據

分支：`codex/SYP-403-mechanics`；基準：`93185bf9c070da578701fa398e85da9a08b8d4c4`。僅修改指定 worktree 的格式層、測試與文件；保留並完成 terra 的 C6 改動。未改 extractor 取數邏輯、正式 data，未 push，未建立 Issue／PR。

## 執行隔離

所有測試及腳本先清除 GH_TOKEN、GITHUB_TOKEN、GH_ENTERPRISE_TOKEN 與 DARKTIDE_*，GH_CONFIG_DIR 使用新建空暫存目錄。將 whoami.exe 複製為 gh.exe，gh.cmd 使用 `@exit /b 1`，兩者位於 PATH 最前方，實測 `issue create` 都 exit 1。新增的 verify CLI 一律 `--issues off`；既有 Issue 測試僅使用假 runner 或 DARKTIDE_TEST 防護。全程不安裝、不下載、不修改全域設定、不跳過 hooks。

Bootstrap 僅執行一次並成功（AI instructions are up to date；更新檢查 rate-limit 不重試），沒有建立額外 runtime commit。

## 規則與正負例對照

負例以可通過的 canonical fixture 為基底，變異目標規則；刪除來源時將 citation 改用另一種合法引用，避免多項語意錯誤掩蓋測試。每個表格負例前先確認基底合法；各細項名稱完整列於文末。

| 規則 | 正例／負例測試（schema12.test.mjs；另註整合檔） |
|---|---|
| C0 支援三版本、拒絕未知版本、C1～C4 舊版禁用 | UnitT40_schema12 accepts mechanics sources codeRefs citations in both categories；UnitT41_C0 unsupported version／old mechanics／old valueSources／old codeRefs／old citations；UnitT45_C0 C4 versions optional fields and either citation reference kind；UnitT60_C5 new errata shape all versions and anchor forms |
| C1 類別、兩層 mechanics、key 深度／pattern、param 型別、null／unknown／unit | UnitT42_C1 mechanics param variants key depth and category restrictions；UnitT43_C2 tier mechanics escaped pointers and canonical array indexes；UnitT41_C1 與 UnitT44_C1 各細項 |
| C2 object、pointer pattern、非空來源、path／line／禁止額外 key | UnitT40、UnitT41_C2 與 UnitT44_C2 各細項 |
| C2 mechanics（含 tier）必須有來源；所有 pointer 必須解析 | UnitT41_C2 mechanics requires source／pointer must resolve；UnitT43_C2 tier mechanics escaped pointers and canonical array indexes |
| C3 ref id／必填欄位／sha256／無行號與額外 key | UnitT40、UnitT41_C3 與 UnitT44_C3 各細項 |
| C3 path、symbol 與 ref id 一致 | UnitT41_C3 path equality；UnitT41_C3 symbol equality（皆先驗證合法基底） |
| C4 citation 形狀、section、非空 text、兩種 refs、唯一性、合計至少一筆 | UnitT41_C4、UnitT44_C4 各細項；UnitT45_C0 C4 versions optional fields and either citation reference kind |
| C4 子字串／codeRef 存在／valueRef 存在且有來源 | UnitT70_C4 text substring／code ref exists／value ref exists／value ref source exists（皆先驗證合法引用） |
| V-CITE 各非空 section、非官方 effect、官方 effect 豁免、舊說明豁免 | UnitT71_V-CITE every generated section official exception and unchanged exemption；schema12-io.test.mjs 的兩個 InterT90（正例寫入、負例只保留單項目） |
| verify 數字掃描／T_COVERAGE 含兩層 mechanics 與數字陣列 | UnitT50_mechanics numbers and tier coverage（有說明／缺值說明各一例） |
| source.valueSources／codeRefs／files 的行號與 hash 不供數字引用 | UnitT51_source metadata cannot supply numbers；既有 UnitT15_來源行號與結構數字不得推導說明 |
| C5 新形狀適用所有版本、拒絕單數 valueRef | UnitT60_C5 new errata shape all versions and anchor forms；UnitT61_C5 singular valueRef；UnitT80、UnitT81 AI I/O 正負例 |
| C5 非空 valueRefs／sources、型別、來源位置、封閉物件 | UnitT60 與 UnitT61_C5 各細項 |
| C5 anchor field／locale／text／occurrence／itemId 形狀與解析 | UnitT60、UnitT61_C5 各細項；UnitT63_C5 cross item references resolve against target values；UnitT64_C5 cross item corrections are rechecked after target fallback；兩個 InterT90 的跨類別目標 |
| C5 displayParameter param／tier 必填與定位；其他 field 禁止兩者 | UnitT61_C5 display param required／display param resolves／blessing tier required／blessing tier range／display tier resolves；UnitT62_C5 non-display anchors forbid param and tier |
| C5 勘誤只更正有差異的官方數字，未知值與來源行號不得用於更正 | UnitT65_C5 corrections require official numbers and derivable corrected numbers；既有 InterT74_勘誤數字引用與跨語系數字涵蓋；InterT75_勘誤只能引用合法遊戲數值；InterT31／32／33 勘誤降級測試；InterT90 displayParameter／跨 item 正例 |
| C6 模板一個數值只影響 mechanics 或 codeRefs 引用者 | UnitT20_template value changes affect only dependent items（changed a、c；b unchanged） |
| C6 行號位移不影響 fingerprint | UnitT30_line shifts do not change fingerprints（contentHash 相等、diffCategory unchanged） |
| C6 非數字函式本體變動僅影響 codeRefs 引用者；canonical 順序 | UnitT10_code reference fingerprints detect changed definitions（values 相同、sha 改變；codeRefs 重排 hash 相同） |
| candidate／write／state 原樣傳遞，缺 citations 不寫 key | UnitT80_AI schema and candidate preserve citations and new errata；UnitT81_AI input validates mechanics provenance and previous errata；兩個 InterT90 實際 CLI 全鏈 |

## 測試與相容性結果

- 基準 93185bf 的隔離副本：node --test tests/pipeline/ → 512 tests，473 pass、0 fail、39 skip。
- 最終標準入口：node --test tests/pipeline/ → 618 tests，579 pass、0 fail、39 skip。總數 512 → 618，新增 106 個測試，兩個新檔均 import 至 tests/pipeline/index.js。
- PIPELINE_REAL_SMOKE=1 + node --test tests/pipeline/ → 576 tests，573 pass、3 fail、0 skip；3 個失敗均為原版即存在的過時 real 斷言，修正後以三個原入口重新擷取兩次驗證：3 pass、0 fail、0 skip，無未解決失敗。該長測試啟動時的新契約案例為較早快照；最終新增案例由上述完整標準入口及 106 個專項測試驗證，並以 PIPELINE_REAL_SMOKE=1 再跑最終 106 個案例，全部通過。
- 修正後重跑命令（PIPELINE_REAL_SMOKE=1）：node --test tests/pipeline/extract-blessings.real.test.mjs tests/pipeline/review2.real.test.mjs tests/pipeline/review3.real.test.mjs。
- START.md 指定入口：PIPELINE_REAL_SMOKE=1 + node --test tests/pipeline/cryptic-brittleness-fingerprints.test.mjs tests/pipeline/cryptic-brittleness-reads.test.mjs → 33 pass、0 fail、0 skip。
- START.md 指定入口：PIPELINE_REAL_SMOKE=1 + node --test tests/pipeline/review33.real.test.mjs → 1 pass、0 fail、0 skip。
- node pipeline/validate.mjs → OK。三組 examples、每組四類共 12 檔，checkDataFile 全部 valid。
- TDD 初始 30 個契約測試為 4 pass、26 fail；AI input 與陣列／型別強化另有失敗測試先行。最後全部通過。

| 93185bf data/1.13.4 | 比對筆數 | contentHash 差異 |
|---|---:|---:|
| skills | 618 | 0 |
| weapons | 137 | 0 |
| blessings | 682 | 0 |
| terms | 103 | 0 |
| 合計 | 1540 | 0 |

比對直接用 git show 93185bf 的資料及 diff-core.mjs，與現行 contentHash 逐筆比較；canonical-json 未修改。正式 data 檔位元內容也與基準一致。舊 0.0.0-example、1.1.0-example 僅 blessings 的舊 errata 遷移為 valueRefs/sources；diff baseline fixture 同步遷移。

## 舊 real 斷言的基準證據

完整 real 初跑的三個失敗均非本包取數回歸。以 93185bf 的原版 pipeline，在固定 Source-Code ba6c148f3c2768ca3ce20d846a12e56e2f433f3e、localization 25606770 重新取四類資料，整個 JSON 位元組與本包初跑的輸出完全相同（含 values、unknown、來源與 problems）。extractor 與數值解析模組沒有修改。

- 祝福原版 real smoke 同樣因 12 !== 20 失敗；新斷言固定 12 個 DYNAMIC_MANIPULATION、三個祝福 id，並保留二次擷取位元組一致性。
- skills 原版完整輸出同樣只有 8 個 unknown；原有四個 veteran 外部寫入降級參數仍逐一斷言為 DYNAMIC_VALUE。
- thumper 的三筆 DYNAMIC_VALUE 均是 DAMAGE_ACTION_UNKNOWN（action_inspect、action_inspect_3p、action_unwield），而非 UNRESOLVED_STAT。修正為禁止數值解析的 DYNAMIC_VALUE，並精確斷言這三個動作診斷，原有端點檢查全部保留。

原版四類完整 extract SHA256：

- skills：e2bcea8accecf5483497c5320cc3d502aa186708115608d40304271392e5827a（618 筆，逐位元相同）
- weapons：a9e9d8045e8cade84070789ed7f27b45e948cabfb55dcc6e3786ef47b0538959（137 筆，逐位元相同）
- blessings：6b1f45e2b881bca5a76daea0d83f9fbdce7d1d345a6f2ef7bcd5d5aaf0951467（682 筆，逐位元相同）
- terms：6522ff3f203ddeacc14191b40ad1ca69280b6b9064444f56e349cf8e6fdb1f70（103 筆，逐位元相同）

## 九項回歸實驗

使用 `node tests/helpers/schema12-regression.mjs`，在本 worktree 的 .pipeline-work 隔離副本逐項移除檢查。每項都是 assertion failure（exit 1），非語法錯誤；每次 finally 還原原文，最後再次跑 baseline 並比對還原檔案。原工作檔全程沒有 mutation。

| 移除項目 | 失敗數 | 失敗測試 |
|---|---:|---|
| 版本限制 | 5 | UnitT41_C0 old mechanics；UnitT41_C0 old valueSources；UnitT41_C0 old codeRefs；UnitT41_C0 old citations；UnitT45_C0 C4 versions optional fields and either citation reference kind |
| mechanics 與 valueSources 對應 | 2 | UnitT41_C2 mechanics requires source；UnitT43_C2 tier mechanics escaped pointers and canonical array indexes |
| codeRefs path／symbol 一致性 | 2 | UnitT41_C3 path equality；UnitT41_C3 symbol equality |
| fingerprint 納入 codeRefs | 2 | UnitT10_code reference fingerprints detect changed definitions；UnitT20_template value changes affect only dependent items |
| fingerprint 排除 valueSources | 1 | UnitT30_line shifts do not change fingerprints |
| citations 子字串檢查 | 1 | UnitT70_C4 text substring |
| V-CITE | 1 | UnitT71_V-CITE every generated section official exception and unchanged exemption |
| errata 拒收單數 valueRef | 4 | UnitT60_C5 new errata shape all versions and anchor forms；UnitT61_C5 singular valueRef；UnitT80_AI schema and candidate preserve citations and new errata；UnitT81_AI input validates mechanics provenance and previous errata |
| displayParameter 必須有 param／tier | 2 | UnitT61_C5 display param required；UnitT61_C5 blessing tier required |

還原後：pass。

## 略過與外部輸入

標準入口的 39 個 skip 均因沒有設定 PIPELINE_REAL_SMOKE=1；相同 real 案例已於 opt-in 完整測試執行。逐項如下（原因相同：明確 opt-in 才讀取真實來源）：

- skills real pinned commit: coverage and identical bytes
- InterT90_real blessings pinned smoke
- InterT90_real weapon smoke
- real pinned source/private smoke
- InterT90_review2 pinned text → skills → weapons → blessings → terms twice and concrete findings
- InterT80_review3_review4_review5 pinned extraction twice and concrete findings
- InterT10_real cloned stubber bindings retain their source lines
- InterT10_pinned sources supplement both ratios and account for every read
- InterT20_matching fingerprints still require the static proof
- InterT30_review18 registry dynamic refuses changed sources
- InterT30_review18 registry ratio refuses changed sources
- InterT30_review18 registry passive removed refuses changed sources
- InterT30_review18 ipairs shadow refuses changed sources
- InterT30_review18 ScriptUnit member refuses changed sources
- InterT30_review18 keyword missing refuses changed sources
- InterT30_review18 keyword dynamic refuses changed sources
- InterT30_review20 shadow FixedFrame refuses changed sources
- InterT30_review20 shadow talent_settings refuses changed sources
- InterT30_review20 shadow group_to_keywords refuses changed sources
- InterT30_review20 shadow group_keywords refuses changed sources
- InterT30_review20 shadow BuffSettings refuses changed sources
- InterT30_review20 shadow TalentSettings refuses changed sources
- InterT30_review20 dependency ScriptUnit refuses changed sources
- InterT30_review20 dependency ipairs refuses changed sources
- InterT30_review20 dynamic constructor refuses changed sources
- InterT30_review20 dynamic fallback constructor refuses changed sources
- InterT30_review20 dynamic assignment refuses changed sources
- InterT30_review20 registry alias refuses changed sources
- InterT30_review20 registry dynamic key refuses changed sources
- InterT30_review20 registry nested stat refuses changed sources
- InterT30_review20 FixedFrame member refuses changed sources
- InterT30_review20 arc callback refuses changed sources
- InterT30_review20 static ratio 0.02 refuses changed sources
- InterT30_comment-only source change refuses changed sources
- InterT40_unlisted same-class definition retains T_NUMBER
- InterT50_reordered talent scan retains T_NUMBER
- InterT60_actual definition identity mismatch refuses supplementation
- InterT10_review23_effective talent mutations refuse both supplements
- InterT20_review23_tree require of an unlisted callback writer refuses both supplements

外部輸入不足的選填比較區塊：

- PIPELINE_VALUES_BASELINE 未提供：review3.real.test.mjs 的四類舊 extract.values 對照區塊未執行（不是 Node test skip）。本次另外完成 93185bf／1.13.4 的 1540 筆 hash 比較，以及相同 ba6c148 固定輸入的原版四類完整 extract 逐位元比較，涵蓋所有 values。
- PIPELINE_WEAPON_BASELINE 未提供：review3.real.test.mjs 的 pre-fix 武器端點對照區塊未執行（不是 Node test skip）。
- 固定 Source-Code 與 Private localization 批次在本機可讀；START 兩個入口無略過。review2/review3 real 測試改用既有 resolveSourceRepo/resolvePrivateRepo，讓清除 DARKTIDE_* 後仍能解析既有唯讀來源。

## 設計取捨

- AI I/O 外層維持 1.0.0；新增選填 dataSchemaVersion 供 mark-described 精確選擇資料契約，舊輸入沿用原判斷。舊 AI input source 的既有寬鬆形狀保留，只對新 valueSources/codeRefs 加形狀限制。
- V-CITE 以匹配本輪 state 的 added/changed 判定 AI 產出；完全顯式 candidate 介面沒有 state 時，與 previous 的 explanation/citations 比較，新增或不同內容視為本次產出。空白字元段落視為無內容。
- displayParameter 不推算 UI 數字：用 values.params 的 key，祝福再選指定 tier.params，文字採 String(value) 做 occurrence 定位；不猜測本包未產生的格式規則。
- 跨 item 的 errata 於單檔驗證、diff、candidate verify、最終合併與 write 都使用同版本完整 item 集合；最終 fallback 後再次解析，避免引用已排除的目標。
- 勘誤 corrected 中每個數字都必須能由 valueRefs 的已知遊戲值推導；比舊單數值採 any-match 更嚴格，既有測試仍通過。
- C3 Lua 去註解／去空白雜湊算法僅文件化；本包不實作 extractor，C6 使用 fixture 已計算的 sha256，後續 extractor spec 再補端對端。
- state 不保存重複的 AI 內容，沿既有 inputHash／stage／outcome 傳遞；真正的 citations/errata 由 AI output → candidate → merged → write 原樣保存。

## 新測試完整名稱

- InterT90_schema12 CLI citation success preserves AI fields
- InterT90_schema12 CLI citation failure retains only its item
- UnitT40_schema12 accepts mechanics sources codeRefs citations in both categories
- UnitT41_C0 unsupported version
- UnitT41_C0 old mechanics
- UnitT41_C0 old valueSources
- UnitT41_C0 old codeRefs
- UnitT41_C0 old citations
- UnitT41_C1 key pattern
- UnitT41_C1 null requires unknown
- UnitT41_C1 param rejects extra
- UnitT41_C2 mechanics requires source
- UnitT41_C2 pointer must resolve
- UnitT41_C2 pointer syntax
- UnitT41_C2 nonempty locations
- UnitT41_C2 line positive
- UnitT41_C2 location rejects extra
- UnitT41_C3 path equality
- UnitT41_C3 symbol equality
- UnitT41_C3 sha256 lowercase
- UnitT41_C3 no line
- UnitT41_C3 ref id pattern
- UnitT41_C4 section enum
- UnitT41_C4 text nonempty
- UnitT41_C4 refs nonempty
- UnitT41_C4 refs unique
- UnitT41_C4 no extra
- UnitT50_mechanics numbers and tier coverage
- UnitT51_source metadata cannot supply numbers
- UnitT42_C1 mechanics param variants key depth and category restrictions
- UnitT43_C2 tier mechanics escaped pointers and canonical array indexes
- UnitT44_C1 mechanics object
- UnitT44_C1 value required
- UnitT44_C1 unknown enum
- UnitT44_C1 unknown only null
- UnitT44_C1 unit pattern
- UnitT44_C2 valueSources object
- UnitT44_C2 locations array
- UnitT44_C2 path required
- UnitT44_C2 path nonempty
- UnitT44_C2 line required
- UnitT44_C2 line integer
- UnitT44_C3 codeRefs object
- UnitT44_C3 path required
- UnitT44_C3 symbol required
- UnitT44_C3 sha256 required
- UnitT44_C3 sha256 length
- UnitT44_C4 citations array
- UnitT44_C4 section required
- UnitT44_C4 text required
- UnitT44_C4 codeRefs required
- UnitT44_C4 valueRefs required
- UnitT44_C4 codeRefs array
- UnitT44_C4 valueRefs array
- UnitT44_C4 codeRefs syntax
- UnitT44_C4 valueRefs syntax
- UnitT44_C4 valueRefs unique
- UnitT45_C0 C4 versions optional fields and either citation reference kind
- UnitT60_C5 new errata shape all versions and anchor forms
- UnitT61_C5 singular valueRef
- UnitT61_C5 valueRefs required
- UnitT61_C5 valueRefs nonempty
- UnitT61_C5 valueRefs resolves
- UnitT61_C5 sources required
- UnitT61_C5 sources nonempty
- UnitT61_C5 sources line positive
- UnitT61_C5 sources no extra
- UnitT61_C5 sources path nonempty
- UnitT61_C5 sources line integer
- UnitT61_C5 official string
- UnitT61_C5 corrected string
- UnitT61_C5 locale enum
- UnitT61_C5 errata no extra
- UnitT61_C5 locale matches
- UnitT61_C5 display param required
- UnitT61_C5 display param resolves
- UnitT61_C5 display param pattern
- UnitT61_C5 blessing tier required
- UnitT61_C5 blessing tier range
- UnitT61_C5 display tier resolves
- UnitT61_C5 anchor occurrence positive
- UnitT61_C5 anchor occurrence exists
- UnitT61_C5 anchor text nonempty
- UnitT61_C5 anchor field enum
- UnitT61_C5 anchor field required
- UnitT61_C5 anchor locale required
- UnitT61_C5 anchor text required
- UnitT61_C5 anchor occurrence required
- UnitT61_C5 anchor item exists
- UnitT61_C5 anchor item pattern
- UnitT61_C5 anchor no extra
- UnitT62_C5 non-display anchors forbid param and tier
- UnitT63_C5 cross item references resolve against target values
- UnitT64_C5 cross item corrections are rechecked after target fallback
- UnitT65_C5 corrections require official numbers and derivable corrected numbers
- UnitT70_C4 text substring
- UnitT70_C4 code ref exists
- UnitT70_C4 value ref exists
- UnitT70_C4 value ref source exists
- UnitT71_V-CITE every generated section official exception and unchanged exemption
- UnitT72_citation validation tolerates malformed explanation types
- UnitT80_AI schema and candidate preserve citations and new errata
- UnitT81_AI input validates mechanics provenance and previous errata
- UnitT10_code reference fingerprints detect changed definitions
- UnitT20_template value changes affect only dependent items
- UnitT30_line shifts do not change fingerprints

原始執行紀錄保留於本 worktree 的 `.pipeline-work/schema12/`（ignored），包含 baseline-tests.log、full-pass.log、real-full.log、START 兩份 log、compatibility.json，以及 mutations-final.log 指向的逐項 TAP 與 results.json。
