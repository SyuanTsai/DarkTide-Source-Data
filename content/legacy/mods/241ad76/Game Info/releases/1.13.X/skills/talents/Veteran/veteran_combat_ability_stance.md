# 火力齊射(Volley Fire)：原始碼依據

[English](en/veteran_combat_ability_stance.md)

[返回玩家說明](README.md#veteran_combat_ability_stance)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_combat_ability_stance`；名稱鍵：`loc_talent_veteran_2_combat_ability`；描述鍵：`loc_ability_veteran_base_ability_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L11-L36)：`start`，花費 0 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L206-L247)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

職業基礎天賦與起始節點都使用 veteran_combat_ability_stance。實際基礎 buff 取 combat_ability_base 的0.15／0.15／0.5，不能用format_values引用的0.25直接描述起始效果。姿態主buff另套散布-.38、後座-.24、晃動乘.4及免疫關鍵字；退出條件是disabled，不是換武器。施放切副武器槽，但沒有掛載自動裝填特殊規則。

能力成本30、每秒自然回1，沒有pause_cooldown_settings，動作開始即消耗；所以冷卻與6秒姿態重疊。ranged_damage進一般傷害加算階段；ranged_weakspot_damage只加在弱點finesse部分。玩家的兩個傷害例子各自固定前一階段輸入，並非把兩者結果直接相加的完整武器公式。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 206–247 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L206-L247)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 7–24 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L24)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 65–72 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L65-L72)
- [scripts/settings/talent/talent_settings_veteran.lua，第 73–100 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L73-L100)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 85–109 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L85-L109)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 202–207 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L202-L207)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 296–315 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L296-L315)
- [scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua，第 91–112 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L91-L112)
- [scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua，第 180–198 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L180-L198)
- [scripts/utilities/attack/damage_calculation.lua，第 284–320 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L320)
- [scripts/utilities/attack/damage_calculation.lua，第 715–782 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L715-L782)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua，第 826–869 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L826-L869)
- [scripts/extension_systems/weapon/actions/action_ability_base.lua，第 25–43 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_ability_base.lua#L25-L43)
- [scripts/settings/ability/ability_templates/veteran_combat_ability.lua，第 90–106 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/veteran_combat_ability.lua#L90-L106)

## 百分比與實際傷害增幅

- **程式推導**：ranged_damage=.15 與 ranged_weakspot_damage=.15 作用位置不同；一般傷害先結算，再計算並加回 finesse。不可把兩項合成「整筆弱點傷害+30%」，也不能只用1.15代表能力總增幅。
- 玩家弱點例只隔離 ranged_weakspot_damage 這一項：保持上游條件與 B=100、F=40 不變、無暴擊或其他 finesse 加成，140→146，相對增幅6/140≈4.29%。它不是施放前後的完整對照；完整對照須重算 ranged_damage 對 B 及 F 的影響，包括 finesse 的 max 與下限分支。

- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 296–323 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L296-L323)
- [scripts/utilities/attack/damage_calculation.lua，第 60–95 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L95)
- [scripts/utilities/attack/damage_calculation.lua，第 672–782 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/start/veteran_combat_ability_stance.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/61ed9652-570a-48ad-9a3b-4961c131dd36)

圖片僅供技能辨識，不作機制證據。

