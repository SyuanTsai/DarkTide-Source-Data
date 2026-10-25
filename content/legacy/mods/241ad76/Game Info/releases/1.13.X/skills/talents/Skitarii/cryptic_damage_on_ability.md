# 莫比亞導體(Moebian Conductor)：原始碼依據

[English](en/cryptic_damage_on_ability.md)

[返回玩家說明](README.md#cryptic_damage_on_ability)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_damage_on_ability)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_damage_on_ability`；名稱鍵：`loc_talent_cryptic_damage_on_ability`；描述鍵：`loc_talent_cryptic_damage_on_ability_desc`。
- 節點：`node_ab833650-8296-4bca-b5ac-b347ca72b960`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_combat_ability、allow_proc_while_active、proc_stat damage0.15 active10；不讀num_charges。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/talent/talent_settings_cryptic.lua：611–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L611-L614)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3258–3272](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3258-L3272)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2471–2490](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2471-L2490)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2097–2126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2097-L2126)

## 算例條件與待確認事項

- **傷害算例**：基礎傷害 100、有 25% 同階段加成時，100 × (1 + 25% + 15%) = 140 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d9e47181`。
- 雙語一致；補充觸發種類、非按消耗份數加倍。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_damage_on_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/78378820-be56-4a92-bd07-f6275c55fa47)

圖片僅供技能辨識，不作機制證據。

