# 士氣高昂(Pumped Up)：原始碼依據

[English](en/ogryn_damage_reduction_on_high_stamina.md)

[返回玩家說明](README.md#ogryn_damage_reduction_on_high_stamina)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_damage_reduction_on_high_stamina)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_damage_reduction_on_high_stamina`；名稱鍵：`loc_talent_ogryn_damage_reduction_on_high_stamina_name`；描述鍵：`loc_talent_ogryn_damage_reduction_on_high_stamina_desc`。
- 節點：`node_ab33a2d5-d40f-4d6e-bb73-47f0b3994608`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- current_fraction>.75，damage_taken_multiplier .875，持續條件式無疊層/CD。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2973–2997](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2973-L2997)
- [scripts/settings/talent/talent_settings_ogryn.lua：80–83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L80-L83)
- [scripts/utilities/attack/damage_calculation.lua：587–612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2174–2196](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2174-L2196)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1719–1746](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1719-L1746)

## 算例條件與待確認事項

- **減傷算例**：此階段原本 100 點傷害變成 100 × 0.875 = 87.5 點；若另有獨立 20% 減傷，則為 100 × 0.875 × 0.8 = 70 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ab8d5e62`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_damage_reduction_on_high_stamina.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/15edb762-d209-407d-8bd5-fc0672bd5ef8)

圖片僅供技能辨識，不作機制證據。

