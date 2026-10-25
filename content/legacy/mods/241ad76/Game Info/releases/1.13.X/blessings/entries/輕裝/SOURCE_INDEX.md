# 輕裝：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| tier-autogun_p1 | [tier-autogun_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L546-L575) |
| wrapper-autogun_p1 | [wrapper-autogun_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L43) |
| tier-autogun_p2 | [tier-autogun_p2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L284-L313) |
| wrapper-autogun_p2 | [wrapper-autogun_p2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p2_buff_templates.lua#L22) |
| tier-lasgun_p3 | [tier-lasgun_p3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua#L168-L197) |
| wrapper-lasgun_p3 | [wrapper-lasgun_p3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p3_buff_templates.lua#L15) |
| tier-needlepistol_p1 | [tier-needlepistol_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L459-L488) |
| wrapper-needlepistol_p1 | [wrapper-needlepistol_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L20) |
| neighboring-speed-template | [neighboring-speed-template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1556-L1564) |
| actual-base-template | [actual-base-template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1565-L1574) |
| conditional-all | [conditional-all](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L11-L25) |
| held-slot | [held-slot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| stamina-threshold | [stamina-threshold](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L80-L92) |
| sprinting-state | [sprinting-state](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L194-L214) |
| current-stamina-fraction | [current-stamina-fraction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L163-L174) |
| percentage-formatter | [percentage-formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L20) |
| trait-override-formatter | [trait-override-formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L112) |
| conditional-keyword-evaluation | [conditional-keyword-evaluation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L830) |
| buff-derived-state-rebuild | [buff-derived-state-rebuild](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L353) |
| player-buff-fixed-update | [player-buff-fixed-update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| ranged-dodge-keyword | [ranged-dodge-keyword](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L100-L121) |
| hitscan-undodgeable | [hitscan-undodgeable](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L143-L198) |
| sprint-speed-consumer | [sprint-speed-consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua#L150-L157) |
| ui-import-autogun_p1_m1 | [ui-import-autogun_p1_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17) |
| ui-trait-append-autogun_p1_m1 | [ui-trait-append-autogun_p1_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
| ui-import-autogun_p1_m2 | [ui-import-autogun_p1_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L16) |
| ui-trait-append-autogun_p1_m2 | [ui-trait-append-autogun_p1_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L764-L766) |
| ui-import-autogun_p1_m3 | [ui-import-autogun_p1_m3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L16) |
| ui-trait-append-autogun_p1_m3 | [ui-trait-append-autogun_p1_m3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L765-L767) |
| ui-import-autogun_p2_m1 | [ui-import-autogun_p2_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L16) |
| ui-trait-append-autogun_p2_m1 | [ui-trait-append-autogun_p2_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L812-L814) |
| ui-import-autogun_p2_m2 | [ui-import-autogun_p2_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L17) |
| ui-trait-append-autogun_p2_m2 | [ui-trait-append-autogun_p2_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L863-L865) |
| ui-import-autogun_p2_m3 | [ui-import-autogun_p2_m3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L16) |
| ui-trait-append-autogun_p2_m3 | [ui-trait-append-autogun_p2_m3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L817-L819) |
| ui-import-lasgun_p3_m1 | [ui-import-lasgun_p3_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L15) |
| ui-trait-append-lasgun_p3_m1 | [ui-trait-append-lasgun_p3_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L730-L732) |
| ui-import-lasgun_p3_m2 | [ui-import-lasgun_p3_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m2.lua#L15) |
| ui-trait-append-lasgun_p3_m2 | [ui-trait-append-lasgun_p3_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m2.lua#L740-L742) |
| ui-import-lasgun_p3_m3 | [ui-import-lasgun_p3_m3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m3.lua#L15) |
| ui-trait-append-lasgun_p3_m3 | [ui-trait-append-lasgun_p3_m3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m3.lua#L726-L728) |
| ui-import-needlepistol_p1_m1 | [ui-import-needlepistol_p1_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L17) |
| ui-trait-append-needlepistol_p1_m1 | [ui-trait-append-needlepistol_p1_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L791-L793) |
| ui-import-needlepistol_p1_m2 | [ui-import-needlepistol_p1_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L17) |
| ui-trait-append-needlepistol_p1_m2 | [ui-trait-append-needlepistol_p1_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L788-L790) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

固定來源中四個 own trait tier 各自讀取 `conditional_threshold`，I–IV 分別覆寫 0.80、0.70、0.60、0.50；`format_type = percentage` 只把這個小數格式化為 80%、70%、60%、50%。這些數值沒有寫入 sprint 或一般 movement stat。

四份武器 wrapper 都只 clone 同一 `class_name = buff` 模板。模板以 `ConditionalFunctions.all` 同時要求 item slot 正在 wielded、角色處於 sprinting state、且 `conditional_threshold <= stamina.current_fraction`。耐力輸入是目前剩餘 fraction，所以 equality 合格；停衝、換手或低於門檻都會令 gate false。模板加入的 keyword 是 `count_as_dodge_vs_ranged`，不是 `damage_immune`，也沒有命中/擊殺 listener、active duration、堆疊上限或冷卻。

Buff extension 在玩家 fixed update 重建 keywords；條件首次成立後，新的 ranged Dodge 查詢讀到 cache 才能使用效果。條件持續時狀態保持開啟；離開任一條件時在更新後關閉，再次符合時恢復。這個時序不聲稱變化當 frame 的命中一定讀到新狀態。

固定來源的 `Dodge.is_dodging` 在 ranged attack type 上讀取 `count_as_dodge_vs_ranged`。server hitscan 先判斷 attack profile 是否 `is_undodgeable`，只有可閃避路徑才進行 ranged Dodge 查詢。因此本頁把適用範圍限在實際採用 ranged Dodge helper 的可閃避判定，不將 RAW 的「immunity」擴成所有遠程傷害都無效。

同一來源附近另有 `increased_sprint_speed` proc template，會寫 `sprint_movement_speed`；四個本項 wrapper 並未 clone 它。本項的遊戲效果是 ranged Dodge keyword，沒有任何 sprint speed stat override。

設 `f` 為目前剩餘耐力比例，`q` 為該級的 `conditional_threshold`。實際 gate 為：`手持相符祝福武器 AND 正在衝刺 AND q <= f`。I–IV 的 `q` 分別為 0.80、0.70、0.60、0.50；比較包含等號。

這裡沒有速度加成、傷害倍率或傷害百分比可代入。實際 sprint movement consumer 可讀取 `sprint_movement_speed`，但本祝福模板沒有寫該 stat；不能把耐力 threshold 當成加速數字。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_056`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_056.png)｜[Issue附件](https://github.com/user-attachments/assets/7b70f115-a9ff-4025-9533-f2626ca9266a)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 步兵自動槍等級覆寫 | [步兵自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L546-L575) |
| 步兵自動槍Buff接入 | [步兵自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L43) |
| UI 步兵自動槍 | [UI 步兵自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L648) |
| 步兵自動槍 阿格里皮娜 Mk I匯入 | [步兵自動槍 阿格里皮娜 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17) |
| 步兵自動槍 阿格里皮娜 Mk I接入 | [步兵自動槍 阿格里皮娜 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
| 步兵自動槍 弗拉克斯 Mk V匯入 | [步兵自動槍 弗拉克斯 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L16) |
| 步兵自動槍 弗拉克斯 Mk V接入 | [步兵自動槍 弗拉克斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L764-L766) |
| 步兵自動槍 哥倫努 Mk VIII匯入 | [步兵自動槍 哥倫努 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L16) |
| 步兵自動槍 哥倫努 Mk VIII接入 | [步兵自動槍 哥倫努 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L765-L767) |
| 槍托自動槍等級覆寫 | [槍托自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L284-L313) |
| 槍托自動槍Buff接入 | [槍托自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p2_buff_templates.lua#L22) |
| UI 槍托自動槍 | [UI 槍托自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L671) |
| 槍托自動槍 弗拉克斯 Mk II匯入 | [槍托自動槍 弗拉克斯 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L16) |
| 槍托自動槍 弗拉克斯 Mk II接入 | [槍托自動槍 弗拉克斯 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L812-L814) |
| 槍托自動槍 格拉亞 Mk IV匯入 | [槍托自動槍 格拉亞 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L17) |
| 槍托自動槍 格拉亞 Mk IV接入 | [槍托自動槍 格拉亞 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L863-L865) |
| 槍托自動槍 阿格里皮娜 Mk VIII匯入 | [槍托自動槍 阿格里皮娜 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L16) |
| 槍托自動槍 阿格里皮娜 Mk VIII接入 | [槍托自動槍 阿格里皮娜 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L817-L819) |
| 偵察鐳射槍等級覆寫 | [偵察鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua#L168-L197) |
| 偵察鐳射槍Buff接入 | [偵察鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p3_buff_templates.lua#L15) |
| UI 偵察鐳射槍 | [UI 偵察鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L915) |
| 偵察鐳射槍 奧克塔蘭 Mk VIc匯入 | [偵察鐳射槍 奧克塔蘭 Mk VIc匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L15) |
| 偵察鐳射槍 奧克塔蘭 Mk VIc接入 | [偵察鐳射槍 奧克塔蘭 Mk VIc接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L730-L732) |
| 偵察鐳射槍 奧克塔蘭 Mk XII匯入 | [偵察鐳射槍 奧克塔蘭 Mk XII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m2.lua#L15) |
| 偵察鐳射槍 奧克塔蘭 Mk XII接入 | [偵察鐳射槍 奧克塔蘭 Mk XII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m2.lua#L740-L742) |
| 偵察鐳射槍 奧克塔蘭 Mk XIV匯入 | [偵察鐳射槍 奧克塔蘭 Mk XIV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m3.lua#L15) |
| 偵察鐳射槍 奧克塔蘭 Mk XIV接入 | [偵察鐳射槍 奧克塔蘭 Mk XIV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m3.lua#L726-L728) |
| 針彈手槍等級覆寫 | [針彈手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L459-L488) |
| 針彈手槍Buff接入 | [針彈手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L20) |
| UI 針彈手槍 | [UI 針彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L961) |
| 針彈手槍 布蘭克斯 MkVI匯入 | [針彈手槍 布蘭克斯 MkVI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L17) |
| 針彈手槍 布蘭克斯 MkVI接入 | [針彈手槍 布蘭克斯 MkVI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L791-L793) |
| 針彈手槍 布蘭克斯 MKII匯入 | [針彈手槍 布蘭克斯 MKII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L17) |
| 針彈手槍 布蘭克斯 MKII接入 | [針彈手槍 布蘭克斯 MKII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L788-L790) |
