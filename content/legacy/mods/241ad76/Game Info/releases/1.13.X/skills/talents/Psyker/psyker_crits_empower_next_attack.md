# 完美時機(Perfect Timing)：原始碼依據

[English](en/psyker_crits_empower_next_attack.md)

[返回玩家說明](README.md#psyker_crits_empower_next_attack)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_crits_empower_next_attack)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_crits_empower_next_attack`；名稱鍵：`loc_talent_psyker_crits_empower_next_attack`；描述鍵：`loc_talent_psyker_damage_on_crit_stacking_desc`。
- 節點：`node_70bf8f4f-c0be-4c83-9c62-4b47ef5e3300`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_critical_strike 設旗標，on_hit 透過 specific_proc_func 加入 damage=.03 的 buff。max_stacks=5、duration=10、refresh_duration_on_stack=true。泛用 damage 屬性參與加算增傷階段。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2929–2975](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2929-L2975)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1192–1235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1192-L1235)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：203–231](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L203-L231)

## 算例條件與待確認事項

- **傷害算例**：只比較此增傷階段，其餘倍率固定為 1。基準 100 點、無其他加成時，100 × (1 + 15%) = 115 點；原有 25% 同階段加成時，從 125 變成 100 × (1 + 25% + 15%) = 140 點。
- on_hit 的入口有 params.is_critical_strike，但實際 specific_proc_func 檢查 template_data.crit 或 template_context.is_critical_strike；直接標示為暴擊的特殊命中是否都有對應事件，仍需逐武器實測，不保證每一顆暴擊彈丸獨立加層。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`62b2dfb3`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_crits_empower_next_attack.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/3c19e5ea-ccab-46a3-9763-c8d4075c6332)

圖片僅供技能辨識，不作機制證據。

