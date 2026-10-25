# 血色迷障(Blinded by Blood)：原始碼依據

[English](en/zealot_bled_enemies_take_more_damage.md)

[返回玩家說明](README.md#zealot_bled_enemies_take_more_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_bled_enemies_take_more_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_bled_enemies_take_more_damage`；名稱鍵：`loc_talent_zealot_bled_enemies_take_more_damage`；描述鍵：`loc_talent_zealot_bled_enemies_take_more_damage_desc`。
- 節點：`node_3f11f576-443e-42b0-b6f9-cedcafb6a224`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 監聽on_buff_added、on_buff_stack_added、on_max_stack_refresh_buff，CheckProcFunctions要求template_name==bleed，再查side_system:is_enemy。effect單層、5秒、refresh true、damage_taken_multiplier1.15；是目標承傷階段，非攻擊者damage相加。
- BuffExtensionBase把事件傳給self及additional_arguments.owner_unit；Scourge加bleed時owner_unit是施加者。因此是自己施加的流血事件，不是全場所有流血敵人自動吃易傷。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2191–2235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2191-L2235)
- [scripts/settings/talent/talent_settings_zealot.lua：70–74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L70-L74)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：748–750](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L748-L750)
- [scripts/utilities/attack/damage_calculation.lua：590–610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/extension_systems/buff/buff_extension_base.lua：1346–1372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L1346-L1372)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2050–2073](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2050-L2073)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1646–1671](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1646-L1671)

## 算例條件與待確認事項

- **傷害算例**：敵人原本承受 100 點傷害，變成 100 × 1.15 = 115 點。若你先有另一階段的 20% 傷害加成，則 100 × 1.2 × 1.15 = 138 點。
- 是否接收到事件由施加來源的buff事件發送決定；不把全場任意隊友的流血概括成自動觸發。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fb00baf2`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_bled_enemies_take_more_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/4b9e6b94-1960-44a0-aca5-40446806c270)

圖片僅供技能辨識，不作機制證據。

