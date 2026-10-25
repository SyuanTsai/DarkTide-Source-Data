# 強化能量循環(Augmented Power-Cycle)：原始碼依據

[English](en/cryptic_increased_passive_cooldown_regen.md)

[返回玩家說明](README.md#cryptic_increased_passive_cooldown_regen)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_increased_passive_cooldown_regen)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_increased_passive_cooldown_regen`；名稱鍵：`loc_talent_cryptic_increased_passive_cooldown_regen`；描述鍵：`loc_talent_cryptic_increased_passive_cooldown_regen_desc`。
- 節點：`node_b540e7b8-df34-4676-b412-e95eec0b05b0`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦設定 cooldown_percent_regen_per_second=0.01；模板將其換算為 combat_ability_resource_regen_modifier 的 +0.5：基準冷卻50秒 ÷ (1 / 0.01) = 0.5。此 stat buff 是 additive multiplier，故預設修正1變為1.5，並乘上基礎電容量恢復率。
- 護教軍電能發射器每道成本50、最多3道、基礎恢復1資源點/秒；資源池容量由 max_charges × cost_per_charge 得150。加成後以1.5點/秒恢復，資源仍以小數累進，但可用完整道數按 floor(資源 / 50) 計算。
- 這個恢復倍率套用於目前戰鬥技能資源。精準姿態設有啟動期間每秒1點的持續成本，所以同時選取本天賦時，僅就此持續成本而言淨恢復為每秒0.5點；姿態本身的啟動與射擊耗電仍另計。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1652–1674](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1652-L1674)
- [scripts/settings/talent/talent_settings_cryptic.lua：1–13](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L1-L13)
- [scripts/settings/talent/talent_settings_cryptic.lua：444–446](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L444-L446)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2073–2089](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2073-L2089)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：70–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L91)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：116–130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L116-L130)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：846–869](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L846-L869)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1323–1345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1323-L1345)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1652–1674](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1652-L1674)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1486–1512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1486-L1512)

## 算例條件與待確認事項

- **時間算例**：沒有其他加成或持續消耗時，一份從空補滿需 100% ÷ 3% ≈ 33.33 秒，三份全空補滿需 300% ÷ 3% = 100 秒。
- 1%是以單道50點成本換算的額外恢復速率，不是每秒補滿整個三道資源池的1%。
- 例算假設戰鬥技能未啟動、沒有暫停恢復或其他恢復倍率／持續消耗；實際恢復會由能力目前狀態共同決定。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`34a7eed6`。
- 已逐項比對本機同一描述鍵的繁中與英文，觸發、作用方向及數值占位一致；主文補充實際分母、時間與限制，省略細節不列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_increased_passive_cooldown_regen.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/39f22717-a782-4201-b5b3-f63a166bedd1)

圖片僅供技能辨識，不作機制證據。

