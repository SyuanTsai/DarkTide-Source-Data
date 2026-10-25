# 大爆炸(Big Boom)：原始碼依據

[English](en/ogryn_increase_explosion_radius.md)

[返回玩家說明](README.md#ogryn_increase_explosion_radius)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_increase_explosion_radius)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_increase_explosion_radius`；名稱鍵：`loc_talent_ogryn_increase_explosion_radius`；描述鍵：`loc_talent_ogryn_increase_explosion_radius_desc`。
- 節點：`node_1af9b61a-cb71-4510-9513-f46c0d73a4b0`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- explosion_radius_modifier .275；Explosion._calculate_radii對radius與close_radius同乘累加modifier。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：761–768](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L761-L768)
- [scripts/utilities/attack/explosion.lua：470–503](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L470-L503)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1824–1847](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1824-L1847)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1129–1154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1129-L1154)

## 算例條件與待確認事項

- **範圍算例**：原半徑 4 公尺，變成 4 × 1.275 = 5.1 公尺；以沒有遮擋的平面圓形估算，面積變成原本的 1.275² ≈ 1.626 倍，約增加 62.6%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`15f7867d`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_increase_explosion_radius.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/c6421034-209b-4fab-857d-541fa0667d8b)

圖片僅供技能辨識，不作機制證據。

