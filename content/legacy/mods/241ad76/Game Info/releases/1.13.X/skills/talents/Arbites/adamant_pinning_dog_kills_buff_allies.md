# 猛犬氣場(Canine Morale)：原始碼依據

[English](en/adamant_pinning_dog_kills_buff_allies.md)

[返回玩家說明](README.md#adamant_pinning_dog_kills_buff_allies)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_pinning_dog_kills_buff_allies)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_pinning_dog_kills_buff_allies`；名稱鍵：`loc_talent_adamant_pinning_dog_kills_buff_allies`；描述鍵：`loc_talent_adamant_pinning_dog_kills_buff_allies_description`。
- 節點：`node_4137c1d3-f155-4dbb-ae2f-01eeae998353`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 只追蹤自己companion的pounce目標；on_kill必須命中目前被追蹤目標，不接受其他隊友單獨擊殺。Attack將companion擊殺送給owner；pounce_finish清除目標。
- 觸發時coherency集合含自己；每個對象加入max1、refresh、5秒子buff，韌性倍率.8，update以.1*dt/5恢復最大韌性，仍套通用恢復修正。

## 原始碼依據

- [scripts/utilities/attack/attack.lua：216–223](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L216-L223)
- [scripts/utilities/attack/attack.lua：669–709](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L709)
- [scripts/utilities/attack/attacking_unit_resolver.lua：33–43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attacking_unit_resolver.lua#L33-L43)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua：202–232](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L202-L232)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2984–3004](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2984-L3004)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/extension_systems/coherency/coherency_system.lua：188–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/settings/talent/talent_settings_adamant.lua：445–449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L445-L449)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2940–2983](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2940-L2983)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2933–2960](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2933-L2960)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：2096–2121](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2096-L2121)

## 算例條件與待確認事項

- **算例**：最大韌性 100 時，每秒恢復 100 × 10% ÷ 5 = 2 點，完整 5 秒共 10 點，最多補滿；只計本效果，原本 100 點韌性傷害變成 100 × 0.8 = 80 點。
- 若壓制解除與死亡發生在同一更新，觸發仍取決於事件處理順序；未進行遊戲內邊界測試。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6250ddd6`。
- 繁中與英文的壓制中擊殺條件相符；犬本身的擊殺歸屬與時間重新計時屬補充，不判為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_pinning_dog_kills_buff_allies.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/fc2bbfe4-50b8-4c9c-b775-20f1c2c33792)

圖片僅供技能辨識，不作機制證據。

