# 動能排斥(Kinetic Repulsion)：原始碼依據

[English](en/cryptic_force_field_capacitance_restore.md)

[返回玩家說明](README.md#cryptic_force_field_capacitance_restore)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_force_field_capacitance_restore)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_force_field_capacitance_restore`；名稱鍵：`loc_talent_cryptic_force_field_health_damage_limit`；描述鍵：`loc_talent_cryptic_force_field_capacitance_restore`。
- 節點：`node_4a240e77-1a0d-4833-ad5c-82bec1eca8c2`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 這個節點掛載 special rule cryptic_force_field_generates_capacitance_based_on_hits_blocked。力場的 health extension 僅在 attack_type 為 ranged，或 damage_profile.count_as_ranged_attack 為真時增加攻擊計數並進入恢復分支；每次最多增加0.025，單一力場物件的 _capacitance_restored 累積上限為0.75，建立下一個力場物件時歸零。恢復呼叫明確指定 combat_ability 並使用 restore_ability_charge_percentage，因此百分比以一格戰鬥技能充能資源成本為基準，再由共用能力資源系統限制在最大資源內；不是補充閃擊欄位的力場使用次數，也不是按傷害量恢復。若同時擁有「電流抗性」，兩項效果共用相同的遠程攻擊吸收判定，但各自記錄不同資源／輸出。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：892–919](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L892-L919)
- [scripts/settings/talent/talent_settings_cryptic.lua：164–180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L164-L180)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua：24–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L24-L39)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua：68–100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L68-L100)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1081–1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1317–1320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1317-L1320)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：892–919](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L892-L919)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1912–1935](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1912-L1935)

## 算例條件與待確認事項

- 每次遠程攻擊吸收恢復0.025份電容量，最多0.75份；30次達到上限。
- 只計遠程攻擊或被標記為遠程的攻擊，不按傷害量計；每次力場最多恢復0.75份。
- 恢復對象是 combat_ability 電容量，不是艾曼納圖斯力場的使用次數。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e9096586`。
- 固定原始碼顯示每次合格攻擊恢復0.025、單次力場累計最多0.75，並恢復戰鬥技能資源；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。繁中描述所省略的攻擊分類與消耗端屬補充細節，不按明確翻譯錯誤處理。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_force_field_capacitance_restore.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/9eb6e468-224f-4d7c-b696-cc58aa08f532)

圖片僅供技能辨識，不作機制證據。

