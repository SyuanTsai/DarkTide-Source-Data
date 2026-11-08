# SYP-403 mechanics 驗證證據

來源為 e46b8926cfa3fa35503e4b80b15aab7a804314e4，官方文字批次 26101089（1.13.4）。Private 重新 extract-text 的 resources 與指定文字索引逐位元 canonical 相同，problems=0。

測試隔離：三個 GH token 及所有 DARKTIDE_* 先清除；空白 GH_CONFIG_DIR；whoami.exe 複製的 gh.exe 與內容為 @exit /b 1 的 gh.cmd 位於 PATH 最前，兩者 issue create／執行都 exit 1。所有輸出在系統暫存目錄，data/ 不變，未對外寫入。

## 回歸實驗

每次只移除一個規則，執行新測試，最後還原原始 bytes。完整紀錄見 SYP-403-mechanics-mutations.json。

| 移除規則 | 被測試攔截 | 失敗測試（例） | 已還原 |
| --- | --- | --- | --- |
| F1-skills | true | UnitT10_mechanics preserve templates overrides sources and fail closed | true |
| F1-blessings | true | UnitT80_blessing tier mechanics retain exact override sources | true |
| B1-skills | true | InterT10_mechanics extract and diff isolate template numeric changes | true |
| B1-blessings | true | UnitT80_blessing tier mechanics retain exact override sources | true |
| B2-skills | true | UnitT10_mechanics preserve templates overrides sources and fail closed | true |
| B2-blessings | true | UnitT80_blessing tier mechanics retain exact override sources | true |
| F3-skills | true | UnitT40_finesse scope requires the named extra damage expression | true |
| F3-blessings | true | UnitT80_blessing tier mechanics retain exact override sources | true |
| W1-skills | true | UnitT92_brain burst links base ability actions and charge templates | true |
| A1-skills | true | UnitT30_ammo floor and clip isolation require explicit consumers | true |
| D1-skills | true | UnitT94_drone removal derives from relation and explicit exit call | true |
| valueSources | true | InterT10_mechanics extract and diff isolate template numeric changes | true |
| one-level-functions | true | InterT30_mechanics extract and diff detect named function body changes | true |
| normalization | true | InterT20_mechanics extract and diff ignore whitespace and comments | true |
| fail-closed | true | UnitT10_mechanics preserve templates overrides sources and fail closed | true |

## 新增測試名稱

- InterT10_CLI extract then diff isolates number changes
- InterT20_CLI extract then diff isolates trivia changes
- InterT30_CLI extract then diff isolates function changes
- InterT10_mechanics extract and diff isolate template numeric changes
- InterT20_mechanics extract and diff ignore whitespace and comments
- InterT30_mechanics extract and diff detect named function body changes
- UnitT10_mechanics preserve templates overrides sources and fail closed
- UnitT20_codeRefs normalize Lua according to C3
- UnitT30_ammo floor and clip isolation require explicit consumers
- UnitT40_finesse scope requires the named extra damage expression
- UnitT50_parent buff lifecycle requires sweep predicate and class branches
- UnitT60_coverage rejects missing constants and records editorial inputs
- UnitT70_codeRefs skip overwritten names and stop at one function level
- UnitT80_blessing tier mechanics retain exact override sources
- UnitT90_stat rules preserve lerped endpoints and discrete steps
- UnitT92_brain burst links base ability actions and charge templates
- UnitT94_drone removal derives from relation and explicit exit call
- UnitT96_overload fixed helper chain links allied stats without recursive hashes
- UnitT97_cooldown timer exposes strict ticks and resource cap
- UnitT98_grenade capacities and default charge use retain separate sources
- InterT40_real brain burst preserves charge peril and strict lock threshold
- InterT50_real ammo belt preserves reserve floor and clip scope
- InterT60_real drone preserves charge both upgrades and removal

## 真實資料與補回對照

以 scripts/mechanics-acceptance.mjs 比對最後原始碼重新產出的 verified1/verified2 extract 與 data/1.13.4；再以 pipeline/validate.mjs --root <暫存 validate-root> 驗證，結果 OK。只在暫存目錄補上 explanation／errata 與統一驗證檔頭，正式 data/ 沒有改動。

| 類別 | 項數 | 舊欄位差異 | 兩次 bytes 相同 | schema | mechanics keys | valueSources | codeRefs | 略過 symbol |
| --- | ---: | ---: | --- | --- | ---: | ---: | ---: | ---: |
| blessings | 682 | 0 | true | 1.2.0（0 errors） | 17967 | 17967/17967 | 10807 | 564 |
| skills | 618 | 0 | true | 1.2.0（0 errors） | 15983 | 15983/15983 | 12273 | 979 |

比較逐筆去除 mechanics（含 tier）、valueSources、codeRefs、source.scriptVersion，僅比較 extractor 產出的 item 欄位，不比較正式資料的 explanation。schemaVersion 是外層版本，不參與此舊欄位比較。

| 組 | covered | 盤點 | notCovered |
| --- | ---: | ---: | ---: |
| F1-skills | 164 | 166 | 2 |
| F1-blessings | 36 | 40 | 4 |
| B1-skills | 33 | 33 | 0 |
| B1-blessings | 69 | 69 | 0 |
| B2-skills | 132 | 132 | 0 |
| B2-blessings | 127 | 127 | 0 |
| F3-skills | 48 | 48 | 0 |
| F3-blessings | 21 | 21 | 0 |
| W1-skills | 26 | 26 | 0 |
| A1-skills | 5 | 5 | 0 |
| D1-skills | 10 | 10 | 0 |

補回 **671/677**。六筆未覆蓋均為距離端點：有效 DamageSettings 經共用 resolver 判為 DYNAMIC_VALUE；另外以現有 shared binding guard 預檢 315 個來源及 require 閉包，ranged_close／ranged_far 的 intact 均為 false。沒有把檔案內的 12.5／30 當作保底。這是未達補回目標的已知缺口，沒有放寬驗收。逐筆原因、所有數字的比對與算例排除在指定的 repo 外 coverage JSON／MD。

- darktide:skill:veteran:veteran_increased_damage_based_on_range missing[0]：非算例數字未找到：12.5；有效 DamageSettings 距離欄位由共用靜態 resolver 判為 DYNAMIC_VALUE；不以局部常數作保底
- darktide:skill:veteran:veteran_increased_damage_based_on_range missing[1]：非算例數字未找到：30；有效 DamageSettings 距離欄位由共用靜態 resolver 判為 DYNAMIC_VALUE；不以局部常數作保底
- darktide:blessing:weapon_trait_bespoke_arc_rifle_p1_consecutive_hits_increases_close_damage missing[2]：非算例數字未找到：12.5；非算例數字未找到：30；有效 DamageSettings 距離欄位由共用靜態 resolver 判為 DYNAMIC_VALUE；不以局部常數作保底
- darktide:blessing:weapon_trait_bespoke_autogun_p1_consecutive_hits_increases_close_damage missing[1]：非算例數字未找到：12.5；非算例數字未找到：30；有效 DamageSettings 距離欄位由共用靜態 resolver 判為 DYNAMIC_VALUE；不以局部常數作保底
- darktide:blessing:weapon_trait_bespoke_lasgun_p3_consecutive_hits_increases_close_damage missing[1]：非算例數字未找到：12.5；非算例數字未找到：30；有效 DamageSettings 距離欄位由共用靜態 resolver 判為 DYNAMIC_VALUE；不以局部常數作保底
- darktide:blessing:weapon_trait_bespoke_laspistol_p1_consecutive_hits_increases_close_damage missing[1]：非算例數字未找到：12.5；非算例數字未找到：30；有效 DamageSettings 距離欄位由共用靜態 resolver 判為 DYNAMIC_VALUE；不以局部常數作保底

## 三個抽查頁

標準入口包含 InterT40／50／60_real：顱腦崩裂逐項斷言 2、3、3、0.2、0.3、0.09、0.25、0.25 與 strict_greater；彈藥腰帶斷言 0.25／floor／affects_clip=false；天鷹使節斷言 max_charges=1、兩個升級的五個 stat 與 remove_on_exit=true。三項在完整 real 入口與最後版本的 mechanics real 入口均通過。

## 完整入口

標準測試 **624 → 647**。最後版本執行 `node --test tests/pipeline/`：647 tests、605 pass、0 fail、42 gated real skips。這 42 項是未設定 PIPELINE_REAL_SMOKE 的預期隔離，不是缺少輸入。

`PIPELINE_REAL_SMOKE=1 node --test tests/pipeline/`：**647 tests、647 pass、0 fail、0 skip**。START 指定的 fingerprints／reads real 入口另跑 33 pass，review33 real 入口另跑 1 pass，皆 0 fail／0 skip。沒有因缺外部輸入而略過的測試；review3 中額外的 PIPELINE_VALUES_BASELINE／PIPELINE_WEAPON_BASELINE 選用歷史快照未設定，skills／blessings 另以指定的 data/1.13.4 逐筆比對。

完整 real 執行後，另補強字串 token 與 Lua 語法 token 的區分：既有 UnitT20 加入有 timeout 的子程序，確保 `"{"`／`"function"` 不被誤認為定義，先驗證原實作失敗，再修正至通過。其後重新執行標準 647 項、mechanics real 20 項（20 pass、0 fail、0 skip）、全部 15 個回歸實驗，以及兩次真實 extract／coverage／validate；真實輸出與完整 real 執行時的輸出逐位元相同。未宣稱完整 647 項 real 在此詞法防護後再次執行。

可重現的驗收入口（先套用本次隔離環境，extract 路徑變數僅設在子程序）：

```text
node --test tests/pipeline/
PIPELINE_REAL_SMOKE=1 node --test tests/pipeline/
PIPELINE_REAL_SMOKE=1 node --test tests/pipeline/mechanics.test.mjs
node scripts/mechanics-acceptance.mjs <first-extract> <second-extract> data/1.13.4 <report.json> <temporary-validate-root>
node pipeline/validate.mjs --root <temporary-validate-root>
node scripts/mechanics-coverage.mjs <inventory.json> <extract-dir> <coverage.json>
node scripts/mechanics-mutations.mjs <temporary-output-dir>
```

其中 PIPELINE_REAL_SMOKE 的表示法是環境變數記法，Windows 實際以子程序的 `$env:PIPELINE_REAL_SMOKE='1'` 設定。技術紀錄位於本機暫存目錄 `C:/Users/carsu/AppData/Local/Temp/syp403-00cffbc3-f1f9-4296-81c8-0993f0a7cb41`：real-head.log、start-fingerprints-reads.log、start-review33.log、standard-release.log、mechanics-real-release.log、acceptance.json、validate.log 與 mutations/。暫存紀錄不作長期保存保證，關鍵結果保留於本文及版本化的 mutations JSON。

## 設計取捨與限制

- 固定 extractor 不讀取盤點檔；coverage 腳本只驗收，不提供生產數值。保留 template、tier／talent override 與條件欄位身分。
- codeRefs 每次由來源詞法定義重建，名稱函式追一層；未知符號計數略過。特殊 overload 的數值連結可辨識兩個固定 helper，程式雜湊仍維持一層。
- 共用既有 parser／mutation guard；距離端點未知保持 fail-closed。其餘 raw／名目計算不是完整最終傷害或執行期保證。
- 原有 brittleness pins 驗證先完成，新增讀取在之後進行；被原 proof 拒收的兩個技能不透過 mechanics 補回被拒的數字。
- skills／blessings raw extract 升 1.2.0；weapons／terms 維持 1.1.0。四類正式發布仍需同版檔頭，本次沒有執行 diff／verify／write 正式發布流程。
