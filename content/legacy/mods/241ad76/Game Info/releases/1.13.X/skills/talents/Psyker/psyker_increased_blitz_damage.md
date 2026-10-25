# 念力之握(Psykinetic Grip)：原始碼依據

[English](en/psyker_increased_blitz_damage.md)

[返回玩家說明](README.md#psyker_increased_blitz_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_increased_blitz_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_increased_blitz_damage`；名稱鍵：`loc_talent_psyker_increased_blitz_damage`；描述鍵：`loc_talent_psyker_increased_blitz_damage_desc`。
- 節點：`node_c63246bc-9c76-437f-be2a-c8072ecc474b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 分別給smite_damage、chain_lightning_damage、psyker_throwing_knives_damage_multiplier=.2，在各傷害類型所屬的damage_stat_buffs加算階段生效。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3829–3840](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3829-L3840)
- [scripts/settings/talent/talent_settings_psyker.lua：109–111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L109-L111)
- [scripts/utilities/attack/damage_calculation.lua：477–526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L477-L526)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2672–2700](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2672-L2700)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：2188–2212](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2188-L2212)

## 算例條件與待確認事項

- **傷害算例**：只比較此增傷階段，其餘倍率固定為 1。基準 100 點、無其他加成時，100 × (1 + 20%) = 120 點；原有 25% 同階段加成時，從 125 變成 100 × (1 + 25% + 20%) = 145 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`9b44cc81`。
- 繁中「對……造成的……傷害」把三種閃擊寫成受攻擊的對象；實際是提高顱腦崩裂、懲戒與靈能攻擊本身造成的傷害。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_increased_blitz_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/e66044cc-0b83-4f85-86ff-84661f076941)

圖片僅供技能辨識，不作機制證據。

