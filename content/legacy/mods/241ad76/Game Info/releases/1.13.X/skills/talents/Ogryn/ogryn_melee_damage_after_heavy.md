# 擊潰他們(Beat Them Back)：原始碼依據

[English](en/ogryn_melee_damage_after_heavy.md)

[返回玩家說明](README.md#ogryn_melee_damage_after_heavy)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_melee_damage_after_heavy)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_melee_damage_after_heavy`；名稱鍵：`loc_talent_ogryn_melee_damage_after_heavy_name`；描述鍵：`loc_talent_ogryn_melee_damage_after_heavy_desc`。
- 節點：`node_61ced339-890a-4513-942d-0a003e0b1217`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- sweep_finish num_hit_units>0且is_heavy；active5 melee_damage.15 allow_proc_while_active。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2881–2913](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2881-L2913)
- [scripts/settings/talent/talent_settings_ogryn.lua：87–90](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L87-L90)
- [scripts/utilities/attack/damage_calculation.lua：278–300](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L300)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2249–2268](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2249-L2268)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1799–1821](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1799-L1821)

## 算例條件與待確認事項

- **傷害算例**：基礎 100 點變成 115 點；同階段已有 20% 時為 100 × (1 + 20% + 15%) = 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ee301680`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_melee_damage_after_heavy.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/373afc07-72d5-4815-91c0-0e5d0d02d279)

圖片僅供技能辨識，不作機制證據。

