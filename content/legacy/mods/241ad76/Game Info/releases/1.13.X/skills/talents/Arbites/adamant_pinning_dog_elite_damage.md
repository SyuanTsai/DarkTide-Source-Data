# 篩選目標(Target Selection)：原始碼依據

[English](en/adamant_pinning_dog_elite_damage.md)

[返回玩家說明](README.md#adamant_pinning_dog_elite_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_pinning_dog_elite_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_pinning_dog_elite_damage`；名稱鍵：`loc_talent_adamant_pinning_dog_elite_damage`；描述鍵：`loc_talent_adamant_pinning_dog_elite_damage_description`。
- 節點：`node_021a58e4-4b06-40cb-b978-3823adbd5a15`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- pounce/finish記錄與清除自己的犬壓制目標；on_kill的attacked_unit必須同目標，並通過elite_or_special判斷。companion擊殺經AttackingUnitResolver轉owner事件。
- 子buff max1、refresh、duration8，damage_vs_elites=.15及damage_vs_specials=.15分別加入一般傷害階段。

## 原始碼依據

- [scripts/utilities/attack/attack.lua：216–223](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L216-L223)
- [scripts/utilities/attack/attack.lua：669–709](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L709)
- [scripts/utilities/attack/attacking_unit_resolver.lua：33–43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attacking_unit_resolver.lua#L33-L43)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua：202–232](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L202-L232)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2783–2798](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2783-L2798)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：120–133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/utilities/attack/damage_calculation.lua：334–355](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L355)
- [scripts/settings/talent/talent_settings_adamant.lua：454–457](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L454-L457)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2749–2782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2749-L2782)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2893–2912](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2893-L2912)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：2043–2069](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2043-L2069)

## 算例條件與待確認事項

- **傷害算例**：對符合條件的目標，基礎 100 點傷害變成 115 點；同階段已有 25% 加成時，則為 100 × (1 + 25% + 15%) = 140 點。
- 若壓制解除與死亡發生在同一更新，觸發仍取決於事件處理順序；未進行遊戲內邊界測試。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0b95c919`。
- 繁中與英文的壓制中擊殺條件相符；犬本身的擊殺歸屬與時間重新計時屬補充，不判為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_pinning_dog_elite_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/4b7cf064-ea83-4334-a484-a222e22af7a3)

圖片僅供技能辨識，不作機制證據。

