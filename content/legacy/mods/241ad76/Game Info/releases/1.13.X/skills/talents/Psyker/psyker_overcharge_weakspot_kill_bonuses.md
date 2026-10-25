# 預知未來(Precognition)：原始碼依據

[English](en/psyker_overcharge_weakspot_kill_bonuses.md)

[返回玩家說明](README.md#psyker_overcharge_weakspot_kill_bonuses)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_overcharge_weakspot_kill_bonuses)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_overcharge_weakspot_kill_bonuses`；名稱鍵：`loc_ability_psyker_overcharge_weakspot`；描述鍵：`loc_ability_psyker_overcharge_weakspot_description`。
- 節點：`node_17c2bf3f-7235-4e00-be33-5931be3bb011`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦啟用 psyker_overchage_stance_weakspot_kills 特殊規則。注視期間每秒令 stacks 上升；有效弱點擊殺時 bonus_stacks 加一。注視buff的 lerp_t_func 以 min(max_stacks, stacks+bonus_stacks)/max_stacks 計算，因此額外弱點擊殺秒數會立即增加主動期傷害lerp；同一規則啟用條件式靈巧傷害lerp，亦立即增加靈巧加成。停止條件仍為反噬達100%，bonus_stacks 不改變啟動持續時間或停止條件。離開時以同一合計層數建立buff，持續10秒。每層傷害及靈巧欄位各為0.01，最高30層。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：582–615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L582-L615)
- [scripts/settings/talent/talent_settings_psyker.lua：5–15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L5-L15)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1043–1068](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1043-L1068)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1120–1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1120-L1149)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1151–1159](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1151-L1159)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1195–1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1195-L1199)
- [scripts/utilities/attack/damage_calculation.lua：663–801](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L663-L801)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：582–615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L582-L615)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：590–615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L590-L615)

## 算例條件與待確認事項

- **疊層算例：**注視累積 8 層時完成一次弱點擊殺，變成 8 + 1 = 9 層；不會因此延長注視的實際持續時間。
- **傷害算例：**靈巧加成作用於弱點或暴擊的額外傷害。只看 30% 靈巧加成，假設一般傷害 100、額外傷害 50，150 點會變成 100 + 50 × 1.30 = 165 點，整次命中增加 10%；注視的其他加成另計。
- 弱點擊殺只增加bonus_stacks，不會改變反噬累積或結束時點。
- 達到30層後再取得bonus不會提升上限。
- 靈巧加成只對命中攻擊流程中的靈巧部分生效；完整最終傷害受武器、目標、弱點和暴擊條件影響。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`492219ab`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_overcharge_weakspot_kill_bonuses.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/41b92eae-77a3-481e-af12-783845ce49c4)

圖片僅供技能辨識，不作機制證據。

