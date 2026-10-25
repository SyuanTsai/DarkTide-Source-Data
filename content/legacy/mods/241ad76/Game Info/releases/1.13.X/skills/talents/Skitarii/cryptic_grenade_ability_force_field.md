# 整合型艾曼納圖斯力場(Integrated Refraction Emitter)：原始碼依據

[English](en/cryptic_grenade_ability_force_field.md)

[返回玩家說明](README.md#cryptic_grenade_ability_force_field)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_grenade_ability_force_field)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_grenade_ability_force_field`；名稱鍵：`loc_talent_cryptic_grenade_ability_force_field`；描述鍵：`loc_talent_cryptic_grenade_ability_force_field_cooldown_desc`。
- 節點：`node_17da808e-f2f1-4684-8bc9-dce16aa14756`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 能力資料設定3次上限，每次消耗75點、每秒恢復1點；因此缺1次需75秒，3次全空需225秒。所有次數共用恢復進度，不是三條同時進行的75秒冷卻。
- ActionActivateForceShield 在玩家位置建立隨身力場，持續8秒；開始及結束各建立一次半徑5公尺的 cryptic_force_field_explosion，命中施加 cryptic_discharge_shock。期間buff提供 suppression_immune 與 count_as_dodge_vs_ranged。
- 動作類別雖有 capacitance_cost_when_empty 分支，但目前 cryptic_force_field 兩個動作均未提供此欄位，且能力 can_be_wielded_when_depleted=false；不將其描述成用盡次數後能改耗電容量的有效功能。
- 力場 health extension 記錄吸收遠程攻擊的次數，供額外電容量恢復與結束電弧使用；這些升級不屬基礎效果。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：780–831](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L780-L831)
- [scripts/settings/talent/talent_settings_cryptic.lua：164–181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L164-L181)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：169–194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L169-L194)
- [scripts/settings/ability/ability_templates/cryptic_force_field.lua：27–60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_force_field.lua#L27-L60)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua：21–84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L21-L84)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua：103–141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L103-L141)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1250–1293](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1250-L1293)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：278–298](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L278-L298)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua：68–100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L68-L100)
- [scripts/extension_systems/force_field/cryptic_personal_force_field_unit_extension.lua：39–52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/cryptic_personal_force_field_unit_extension.lua#L39-L52)
- [scripts/extension_systems/force_field/force_field_system.lua：170–220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/force_field_system.lua#L170-L220)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：835–880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L835-L880)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1317–1320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1317-L1320)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：780–831](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L780-L831)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：183–212](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L183-L212)

## 算例條件與待確認事項

- 冷卻算例：每格耗費75點能力資源、每秒恢復1點；用掉1格需75秒補回，用掉3格需75×3=225秒補滿，假設沒有其他冷卻修正。
- 力場期間免疫壓制並有遠程閃避判定；本說明不將其擴張為對所有傷害免疫。
- 傷害與電擊跳數仍取決於共用設定與目標；未進行遊戲內測試。
- 類別中的耗盡替代成本分支未由此能力動作設定啟用。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1988edfa`。
- 本機中英均描述吸收遠程攻擊、8秒持續、3次使用及75秒恢復。來源補明5公尺起訖電擊、共用恢復進度；未展開這些細節不視為錯譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical/cryptic_grenade_ability_force_field.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/d45e19a1-d480-42db-bd0c-70ed43aba9aa)

圖片僅供技能辨識，不作機制證據。

