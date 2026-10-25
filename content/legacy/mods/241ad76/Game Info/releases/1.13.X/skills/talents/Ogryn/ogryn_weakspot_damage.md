# 精準打擊(Strike True)：原始碼依據

[English](en/ogryn_weakspot_damage.md)

[返回玩家說明](README.md#ogryn_weakspot_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_weakspot_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_weakspot_damage`；名稱鍵：`loc_talent_ogryn_weakspot_damage`；描述鍵：`loc_talent_ogryn_weakspot_damage_desc`。
- 節點：`node_82121611-7178-4ee6-827c-3a0b82f36d0e`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- melee_weakspot_power_modifier .1；PowerLevel要求weakspot且attack_type melee，與general/melee等power modifiers加算。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3147–3153](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3147-L3153)
- [scripts/settings/talent/talent_settings_ogryn.lua：118–120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L118-L120)
- [scripts/utilities/attack/power_level.lua：25–61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L61)
- [scripts/utilities/attack/power_level.lua：63–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2633–2648](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2633-L2648)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2225–2253](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2225-L2253)

## 算例條件與待確認事項

- **威力算例**：原威力 500，命中弱點時變成 500 × 1.1 = 550；若同階段已有 20% 威力加成，則為 500 × (1 + 20% + 10%) = 650。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`658a5b8e`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_weakspot_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/dae8db6d-b212-4abd-a84b-246c0910e0b3)

圖片僅供技能辨識，不作機制證據。

