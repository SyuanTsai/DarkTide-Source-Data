# 好運連連(Lucky Streak)：原始碼依據

[English](en/ogryn_crit_damage_increase.md)

[返回玩家說明](README.md#ogryn_crit_damage_increase)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_crit_damage_increase)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_crit_damage_increase`；名稱鍵：`loc_talent_ogryn_crit_damage_increase`；描述鍵：`loc_talent_ogryn_crit_damage_increase_desc`。
- 節點：`node_68a16449-f5c8-47a2-bae3-6a6eb858f0b5`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- critical_strike_damage .75加入critical_damage_stat_buff，於_finesse_boost_damage對base_finesse_damage套用，並與weakspot/finesse同階段加算。不直接放大整筆base_damage。
- 100+50/20算例已固定進入finesse buff階段的兩部分；忽略後續特殊減傷、護甲改變與傷害下限。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3510–3516](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3510-L3516)
- [scripts/settings/talent/talent_settings_ogryn.lua：161–163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L161-L163)
- [scripts/utilities/attack/damage_calculation.lua：672–782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2737–2752](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2737-L2752)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1747–1769](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1747-L1769)

## 算例條件與待確認事項

- **傷害算例**：假設固定條件下，原傷害由 100 點基礎與 50 點暴擊額外傷害組成，原本合計 150 點；生效後為 100 + 50 × 1.75 = 187.5 點，相對提高 25%。若額外部分只有 20 點，則由 120 變成 135 點，只提高 12.5%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c90c5cb1`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_crit_damage_increase.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/de5091de-3dd6-455b-875a-55228eb4d67e)

圖片僅供技能辨識，不作機制證據。

