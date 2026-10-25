# 猛砸爆裂(Bash and Blast)：原始碼依據

[English](en/ogryn_melee_improves_ranged.md)

[返回玩家說明](README.md#ogryn_melee_improves_ranged)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_melee_improves_ranged)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_melee_improves_ranged`；名稱鍵：`loc_talent_ogryn_melee_improves_ranged`；描述鍵：`loc_talent_ogryn_melee_improves_ranged_desc`。
- 節點：`node_b8096b53-1713-464f-83f5-ea40310afd3b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_melee_kill加child，max5 duration10 refresh ranged_damage .03每層。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3337–3363](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3337-L3363)
- [scripts/settings/talent/talent_settings_ogryn.lua：142–146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L142-L146)
- [scripts/utilities/attack/damage_calculation.lua：278–320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L320)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2554–2577](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2554-L2577)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2171–2193](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2171-L2193)

## 算例條件與待確認事項

- **傷害算例**：滿層時，基礎 100 點遠程傷害變成 115 點；同階段另有 20% 加成時為 100 × (1 + 20% + 5 × 3%) = 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`01fff66e`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_melee_improves_ranged.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/fdf1eb1f-b76f-4452-beac-f2205fc32d2b)

圖片僅供技能辨識，不作機制證據。

