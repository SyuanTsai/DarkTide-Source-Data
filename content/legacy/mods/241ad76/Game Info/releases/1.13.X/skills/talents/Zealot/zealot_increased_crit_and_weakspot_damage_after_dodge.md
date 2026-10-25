# 決鬥者(Duellist)：原始碼依據

[English](en/zealot_increased_crit_and_weakspot_damage_after_dodge.md)

[返回玩家說明](README.md#zealot_increased_crit_and_weakspot_damage_after_dodge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_increased_crit_and_weakspot_damage_after_dodge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_increased_crit_and_weakspot_damage_after_dodge`；名稱鍵：`loc_talent_zealot_increased_finesse_post_dodge`；描述鍵：`loc_talent_zealot_duelist_new_desc`。
- 節點：`node_664d1608-49a2-47bc-8aa6-b2c9b655e865`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- proc_buff的active_duration3，on_successful_dodge後finesse_modifier_bonus=.5；無cooldown，因此共用_can_activate直接true，可重置active_start_time。
- _finesse_boost_damage先形成base_finesse_damage，再把finesse_modifier_bonus與適用弱點／暴擊同階段加成相加後乘入F；即B+F*(1+s+.5)。弱點且暴擊時先合成曲線，不可把+.5重複算兩遍。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4357–4377](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4357-L4377)
- [scripts/utilities/attack/damage_calculation.lua：672–782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：173–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L184)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1305–1338](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1305-L1338)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：486–513](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L486-L513)

## 算例條件與待確認事項

- **弱點算例**：固定未暴擊、沒有其他加成，基礎部分 100、弱點額外部分 50，原有 150 點變成 100 + 50 × 1.5 = 175 點，整次增加約 16.67%。額外部分若為 100，則 200 → 250 點，增加 25%。
- 示例以同一次命中的部位與護甲作基準，不把身體傷害當B；未對特定武器實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b41ec4a9`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_increased_crit_and_weakspot_damage_after_dodge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/dcdcc79a-ad1b-4fb3-9ac1-a6fcc1a71a56)

圖片僅供技能辨識，不作機制證據。

