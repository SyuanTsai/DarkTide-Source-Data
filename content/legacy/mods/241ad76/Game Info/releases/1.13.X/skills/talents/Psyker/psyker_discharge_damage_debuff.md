# 亞空間爆發(Warp Rupture)：原始碼依據

[English](en/psyker_discharge_damage_debuff.md)

[返回玩家說明](README.md#psyker_discharge_damage_debuff)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_discharge_damage_debuff)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_discharge_damage_debuff`；名稱鍵：`loc_talent_psyker_shout_damage_per_warp_charge`；描述鍵：`loc_talent_psyker_discharge_damage_debuff_description`。
- 節點：`node_685300ac-9564-437d-9611-de94d66ec880`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 命中目標時，尖嘯特殊規則對目標施加 psyker_discharge_damage_debuff。模板 max_stacks=1、持續8秒，stat_buffs.damage=-0.1 且 damage_taken_multiplier=1.1。天賦文字把這兩個倍率呈現為目標傷害降低10%和承受傷害提高10%。這兩項影響目標攻防不同欄位，不能只說成單一「受到傷害增加」效果。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：376–409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L376-L409)
- [scripts/settings/talent/talent_settings_psyker.lua：128–132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L128-L132)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：446–455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L446-L455)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua：108–111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L108-L111)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua：179–185](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L179-L185)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：376–409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L376-L409)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：542–565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L542-L565)

## 算例條件與待確認事項

- 忽略其它增傷/減傷；以目標原本造成100點傷害、承受100點傷害作示意。 造成傷害100×0.9=90；受到傷害100×1.1=110。 目標對玩家的示例傷害為90，玩家對該目標的示例傷害為110，效果維持8秒。
- 示例只展示兩個倍率本身；實際戰鬥結果還會受目標護甲、傷害類型與其它統計欄位影響。
- 程式碼顯示buff上限1層；重新計時/覆蓋時的精確計時邊界未在此做遊戲內測試。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c5561004`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_discharge_damage_debuff.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/8a145b7f-771a-42b6-a809-56650cd24f7e)

圖片僅供技能辨識，不作機制證據。

