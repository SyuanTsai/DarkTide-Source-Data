# SYP-385 spec12b 驗證證據

來源 commit：`ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`；text batch：`25606770`；比較基準：`7d89f5334bd80e72cb8a30ac8b1fc40dbbf174fc`。

完整逐筆清單（含 id、路徑、原值、新值、原因、problem、provenance 及 census 所有位置）：[report.json](C:/Users/carsu/AppData/Local/Temp/syp385-spec12b-evidence-dVoCic/report.json)。

擷取目錄：`C:\Users\carsu\AppData\Local\Temp/syp385-spec12-two-pass-aEKGnz`；兩輪 byte 驗證見同目錄 `verification.json`。

## 類別彙總

| 類別 | 項目 | 官方名稱 | unknown（基準→目前） | values 改變項目 | 原有值轉 unknown |
|---|---:|---:|---:|---:|---:|
| skills | 618 | 618 | 56→1361 | 587 | 1305 |
| weapons | 137 | 134 | 71→4065 | 137 | 25372 |
| blessings | 682 | 511 | 20→3941 | 660 | 3921 |
| terms | 102 | 102 | 0→0 | 0 | 0 |

已知數值改值：0 筆；原有值轉 unknown：30598 筆；其他差異：4128 筆。武器以一組 min/max endpoint 計一筆降級；多個端點可合併至同一 unknown 標記，因此降級筆數不等於 unknown 標記淨增數。

所有項目的名稱、官方文字、及排除 params/stats 後的 values 結構均與基準逐項相同（runner 使用深度相等斷言）。技能官方名稱 618/618，既有 90% 門檻保留。

## Problems 依 code 計數

- skills：`{"MISSING_DEFINITION":1,"SHADOWED_DEFINITION":1,"UNRESOLVED_VALUE":1361}`
- weapons：`{"ARCHETYPES_NOT_EXPOSED":1,"DUPLICATE_STAT":119,"UNREGISTERED_TEMPLATE":2,"UNRESOLVED_STAT":4061}`
- blessings：`{"UNRESOLVED_VALUE":3941}`
- terms：`{}`

## 原有值轉 unknown：各類別依原因計數

reason 取自新輸出的對應 problem；DYNAMIC_VALUE 為白名單撤銷數值證據的輸出標記。provenance 與 census 保留來源及各不可信形式位置，詞法候選不等同於執行期因果。

### skills

| 原因 | 筆數 |
|---|---:|
| DYNAMIC_VALUE | 93 |
| binding 未驗證 | 13 |
| talent_overrides 無法解析 | 21 |
| 不支援運算 * | 9 |
| 不支援運算 + | 6 |
| 不支援運算 - | 15 |
| 不支援運算 / | 3 |
| 未解析索引 adamant | 195 |
| 未解析索引 broker | 74 |
| 未解析索引 cryptic | 210 |
| 未解析索引 cryptic_discharge_aoe_electrocution | 1 |
| 未解析索引 ogryn_1 | 27 |
| 未解析索引 ogryn_2 | 30 |
| 未解析索引 ogryn_grenade_box_cluster | 1 |
| 未解析索引 ogryn_grenade_frag | 1 |
| 未解析索引 ogryn_shared | 52 |
| 未解析索引 psyker | 41 |
| 未解析索引 psyker_2 | 21 |
| 未解析索引 psyker_3 | 12 |
| 未解析索引 psyker_overcharge_increased_movement_speed | 1 |
| 未解析索引 psyker_overcharge_reduced_warp_charge | 1 |
| 未解析索引 psyker_overcharge_stance | 4 |
| 未解析索引 smoke_grenade | 1 |
| 未解析索引 undefined | 1 |
| 未解析索引 veteran | 10 |
| 未解析索引 veteran_2 | 43 |
| 未解析索引 veteran_3 | 8 |
| 未解析索引 zealot | 71 |
| 未解析索引 zealot_2 | 28 |
| 未解析索引 zealot_3 | 28 |
| 無法靜態解析參照或值 | 284 |

### weapons

| 原因 | 筆數 |
|---|---:|
| DYNAMIC_VALUE | 25372 |

### blessings

| 原因 | 筆數 |
|---|---:|
| CONDITIONAL_EXPRESSION | 1432 |
| PATH_MISSING | 16 |
| RUNTIME_REFERENCE | 2142 |
| TEMPLATE_MISSING | 331 |

### terms

| 原因 | 筆數 |
|---|---:|

## 原有值轉 unknown：前 50 筆

| id | 路徑 | 原值 | 新值 | 原因 |
|---|---|---|---|---|
| darktide:skill:adamant:adamant_ammo_belt | values.params.ammo | `{"unit":"percent","value":25}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_area_buff_drone_improved | values.params.cooldown | `{"value":60}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_area_buff_drone_improved | values.params.duration | `{"value":20}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_area_buff_drone_improved | values.params.impact | `{"unit":"percent","value":30}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_area_buff_drone_improved | values.params.range | `{"value":7.5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_area_buff_drone_improved | values.params.recoil | `{"unit":"percent","value":-25}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_area_buff_drone_improved | values.params.suppression | `{"unit":"percent","value":30}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_area_buff_drone_improved | values.params.toughness | `{"unit":"percent","value":7.5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_armor | values.params.toughness | `{"value":25}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge | values.params.cooldown | `{"value":20}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge | values.params.damage | `{"unit":"percent","value":25}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge | values.params.duration | `{"value":6}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge | values.params.range | `{"value":3.75}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge | values.params.stagger | `{"unit":"percent","value":50}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge_cooldown_reduction | values.params.cooldown | `{"value":0.5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge_cooldown_reduction | values.params.cooldown_elite | `{"value":1}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge_cooldown_reduction | values.params.max_cooldown | `{"value":5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge_longer_distance | values.params.distance | `{"value":7.5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 不支援運算 + |
| darktide:skill:adamant:adamant_charge_toughness | values.params.stamina | `{"unit":"percent","value":15}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge_toughness | values.params.stamina_max | `{"unit":"percent","value":75}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge_toughness | values.params.toughness | `{"unit":"percent","value":20}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_charge_toughness | values.params.toughness_max | `{"unit":"percent","value":100}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_cleave_after_push | values.params.cleave | `{"unit":"percent","value":75}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_cleave_after_push | values.params.duration | `{"value":5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_clip_size | values.params.clip_size | `{"unit":"percent","value":15}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_close_kills_restore_toughness | values.params.toughness | `{"unit":"percent","value":5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_companion_coherency | values.params.tdr | `{"unit":"percent","value":7.5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_companion_focus_elite | values.params.damage | `{"unit":"percent","value":25}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_companion_focus_ranged | values.params.damage | `{"unit":"percent","value":50}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_crit_chance_on_kill | values.params.crit_chance | `{"unit":"percent","value":2}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_crit_chance_on_kill | values.params.duration | `{"value":10}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_crit_chance_on_kill | values.params.max_stacks | `{"value":8}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_crits_rend | values.params.rending | `{"unit":"percent","value":20}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_damage_after_reloading | values.params.damage | `{"unit":"percent","value":15}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_damage_after_reloading | values.params.duration | `{"value":5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_damage_reduction_after_elite_kill | values.params.duration | `{"value":5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_damage_vs_staggered_aura | values.params.damage_vs_stagger | `{"unit":"percent","value":10}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_damage_vs_suppressed | values.params.damage_vs_suppressed | `{"unit":"percent","value":25}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_disable_companion | values.params.attack_speed | `{"unit":"percent","value":10}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_disable_companion | values.params.charges | `{"value":1}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_disable_companion | values.params.damage | `{"unit":"percent","value":20}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_disable_companion | values.params.grenade_time | `{"value":45}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_disable_companion | values.params.tdr | `{"unit":"percent","value":15}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_disable_companion | values.params.time | `{"value":60}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_disable_companion | values.params.time_shock_mine | `{"value":90}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_dodge_grants_damage | values.params.damage | `{"unit":"percent","value":15}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_dodge_grants_damage | values.params.duration | `{"value":5}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_dodge_improvement | values.params.dodge | `{"value":1}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_dodge_improvement | values.params.dodge_duration | `{"unit":"percent","value":25}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |
| darktide:skill:adamant:adamant_dog_applies_brittleness | values.params.stacks | `{"value":6}` | `{"unknown":"DYNAMIC_VALUE","value":null}` | 未解析索引 adamant |

## F4 深複製隔離比對

只套用深複製修正的隔離輸出有以下兩筆變更；最終保守輸出中，這兩筆均為 DYNAMIC_VALUE。

| id | 路徑 | 基準 | 僅修正深複製 |
|---|---|---|---|
| darktide:skill:psyker:psyker_empowered_ability | values.params.chance | `{"unit":"percent","value":15}` | `{"unit":"percent","value":10}` |
| darktide:skill:psyker:psyker_empowered_grenades_passive_improved | values.params.proc_chance_before | `{"unit":"percent","value":15}` | `{"unit":"percent","value":10}` |

## 不可信形式盤點

固定 commit，四個 build 透過 reader.read 實際讀取的 Lua union；逐 token 計數，含函式 body 與未使用的回傳。non-whitelisted-call 是詞法候選，含另有 body proof 的 local／有限 DSL；不宣稱全都導致撤銷。

實際讀取 Lua：5191 檔。

| 形式 | 次數 |
|---|---:|
| computed-index | 61115 |
| non-whitelisted-call | 135829 |
| parenthesized-prefix | 16 |

F3 指定函式的詞法呼叫數：`{"unpack":551,"table.unpack":0,"select":151,"rawget":365,"setmetatable":67,"next":105}`。

## 輸出 SHA-256

| 類別 | 7d89f53 基準 | 目前 |
|---|---|---|
| text | 57ccd6004b9d61d727ed81587cf0fa3c5fa4a212c29938dc86fb67f53d1d25d4 | 57ccd6004b9d61d727ed81587cf0fa3c5fa4a212c29938dc86fb67f53d1d25d4 |
| skills | 3d626a3c826708818ab4606afccfa8312aa61eb93995ac7bc94d6dd7a6db3514 | c82b919d7f7e9cce02e7332b73ef6f1f42417885d37f6bb9cb0319016b2a270d |
| weapons | f19a870312debf904e4300cd72642ac4a2aa6c83e6698aba21421889ffe0f6fd | 5686c3de1d2b6ae6e219d0bf9405766947fd336012fe127b3726f11c1241959f |
| blessings | 6803714c302e8c31f41040ded68984895c60cccf23bc0647a8f713dc9026205e | a7ae76b6d65b05f7e60c9e177473c4a3bc48d31306bdec99de6c7577c33df27d |
| terms | 547e3da5ec440adb275ceca9c02574b95f1800ad90cd617b3b447c22e6ca6193 | 547e3da5ec440adb275ceca9c02574b95f1800ad90cd617b3b447c22e6ca6193 |

## 與規格的差異及限制

依 spec12b 主控決定只撤銷數值證據，保留名稱及結構；字串編碼的具體數字（例如 5、10%）亦屬數值。明確結構寫入仍走既有結構／problem 機制。未降低官方名稱門檻。

固定來源的所有 weapon stat endpoints 均因保守規則轉 unknown；獨立的彈藥值仍保留。真實 smoke 因此改驗證明確 unknown 標記、對應 problem 與獨立數值，原有正常數值案例仍由 fixture 保護。詞法盤點包含未執行路徑及已有 body proof 的候選，不宣稱每次出現均會造成實際撤銷。

## 已完成的驗證

- `node --test tests/pipeline/`：151 項，145 通過、6 個 real smoke 跳過、0 失敗。
- 設定指定的兩個 repository 環境變數及 `PIPELINE_REAL_SMOKE=1`，以 `node --test` 執行六個 `*.real.test.mjs`：6 通過、0 跳過、0 失敗。
- `node tests/pipeline/review8-validation.mjs run`：text→skills→weapons→blessings→terms 兩輪、五檔 byte 相同；SHA-256 與本報告的 current hashes 相同。
- `node tests/pipeline/review8-validation.mjs report <baseline> <current> <clone-only>`：四類全部項目逐項比對，名稱、官方文字及結構相等斷言全部通過。
- `git diff --cached --check`：通過。未新增套件或執行 Lua。新增測試針對本次保守化、結構分離及 clone 回歸；報告產生器以實際 pinned 輸出驗證。

一般測試紀錄：[unit log](C:/Users/carsu/AppData/Local/Temp/syp385-spec12b-unit-complete.log)；六項真實 smoke：[real log](C:/Users/carsu/AppData/Local/Temp/syp385-spec12b-acceptance-real.log)；兩輪驗證：[verification.json](C:/Users/carsu/AppData/Local/Temp/syp385-spec12-two-pass-aEKGnz/verification.json)。

text resources：items 13,293、ui 16,620，unknown 0、problems 0。

基準五檔的 SHA-256 已與上一輪 review8 的 `review8-IZk6c6/extract/` 逐檔核對，全部一致。沒有 checkout、reset 或改動其他 worktree。

與規格不同之處：無未經授權的行為差異；採用 spec12b 核准的數值／結構分離。盤點採詞法形式候選口徑，包含未執行路徑，不等同於實際執行／撤銷次數。

## 修改檔案

- `pipeline/extract-blessings.mjs`
- `pipeline/extract-weapons.mjs`
- `pipeline/lib/blessing-buff-index.mjs`
- `pipeline/lib/blessing-values.mjs`
- `pipeline/lib/lua-effects.mjs`
- `pipeline/lib/lua-static-reader.mjs`
- `pipeline/lib/skill-lua.mjs`
- `pipeline/lib/skill-structure.mjs`
- `pipeline/lib/weapon-stats.mjs`
- `pipeline/spec12-review8-evidence.md`
- `tests/pipeline/extract-blessings.real.test.mjs`
- `tests/pipeline/extract-skills.test.mjs`
- `tests/pipeline/extract-weapons.real.test.mjs`
- `tests/pipeline/extract-weapons.test.mjs`
- `tests/pipeline/fixtures/review8/adamant-clone.lua`
- `tests/pipeline/fixtures/review8/computed-index.lua`
- `tests/pipeline/fixtures/review8/deep-clone.lua`
- `tests/pipeline/fixtures/review8/parenthesized-call.lua`
- `tests/pipeline/fixtures/review8/parenthesized-member.lua`
- `tests/pipeline/fixtures/review8/shallow-copy.lua`
- `tests/pipeline/fixtures/review8/unmodeled-return.lua`
- `tests/pipeline/index.js`
- `tests/pipeline/pinned-numeric-expectations.mjs`
- `tests/pipeline/review1.test.mjs`
- `tests/pipeline/review2.real.test.mjs`
- `tests/pipeline/review2.test.mjs`
- `tests/pipeline/review3.real.test.mjs`
- `tests/pipeline/review3.test.mjs`
- `tests/pipeline/review4.test.mjs`
- `tests/pipeline/review8-validation.mjs`
- `tests/pipeline/review8.test.mjs`
