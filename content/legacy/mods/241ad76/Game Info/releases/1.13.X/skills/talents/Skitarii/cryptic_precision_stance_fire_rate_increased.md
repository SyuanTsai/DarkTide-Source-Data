# 彈藥盤點之旨(Writ of Ammunition Enumeration)：原始碼依據

[English](en/cryptic_precision_stance_fire_rate_increased.md)

[返回玩家說明](README.md#cryptic_precision_stance_fire_rate_increased)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_precision_stance_fire_rate_increased)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_precision_stance_fire_rate_increased`；名稱鍵：`loc_talent_cryptic_precision_stance_fire_rate_increased`；描述鍵：`loc_talent_cryptic_precision_stance_fire_rate_increased_desc`。
- 節點：`node_9f2a7af2-4bde-47c2-a856-379c9ca8e034`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Talent 同時掛上 base 與 delayed 兩個條件式模板。base 提供 +0.15 ranged_attack_speed，條件為精準姿態關鍵字生效；delayed 提供兩數差值 0.30 - 0.15 = +0.15。
- delayed 模板在偵測姿態剛啟動時設 start time=t+4；姿態保持時，達到該時間才啟用額外加成。姿態中斷時清除狀態、計時歸零並撤除額外加成；重新啟動會重新計時。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：338–372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L338-L372)
- [scripts/settings/talent/talent_settings_cryptic.lua：110–114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L110-L114)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：587–604](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L587-L604)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：606–641](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L606-L641)
- [scripts/utilities/action/action_handler.lua：402–423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L423)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：338–372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L338-L372)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：940–962](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L940-L962)

## 算例條件與待確認事項

- **射速算例**：原本每秒 5 發，單看受此倍率影響的射速，初期為 5 × 1.15 = 5.75 發／秒；4 秒後為 5 × 1.30 = 6.5 發／秒。其他動作與武器限制另計。
- 30%是兩個射速效果合計；延遲效果只在姿態連續啟動4秒後生效。
- 此處為遠程射速修正，沒有宣稱提高傷害或裝填速度。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`305b77d8`。
- 已逐項比對本機同一描述鍵的繁中與英文，觸發、作用方向及數值占位一致；主文補充實際分母、時間與限制，省略細節不列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_precision_stance_fire_rate_increased.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/ac9ea4d6-352f-4ad1-95f2-a2de10d39d2d)

圖片僅供技能辨識，不作機制證據。

