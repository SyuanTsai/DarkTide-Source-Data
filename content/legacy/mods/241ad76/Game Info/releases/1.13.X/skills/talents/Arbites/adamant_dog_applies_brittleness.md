# 鋒利獠牙(Serrated Maw)：原始碼依據

[English](en/adamant_dog_applies_brittleness.md)

[返回玩家說明](README.md#adamant_dog_applies_brittleness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_dog_applies_brittleness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_dog_applies_brittleness`；名稱鍵：`loc_talent_adamant_dog_applies_brittleness`；描述鍵：`loc_talent_adamant_dog_applies_brittleness_desc`。
- 節點：`node_e992d16b-4372-4874-93ca-7a520cceb74c`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 自己companion且initial_pounce旗標，加入6層rending_debuff。ogryn/monster的持續pounce也有initial_pounce=true。通用debuff每層.025、max16、duration5、refresh。
- DamageCalculation對適用護甲補足ADM至1，超額乘overdamage_multiplier=.25；護甲rending_damage_multiplier為0的類型不套此算例。

## 原始碼依據

- [scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua：227–287](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L227-L287)
- [scripts/settings/buff/weapon_buff_templates.lua：366–376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376)
- [scripts/utilities/attack/damage_calculation.lua：63–89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L63-L89)
- [scripts/utilities/attack/damage_calculation.lua：629–670](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L670)
- [scripts/settings/damage/armor_settings.lua：8–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)
- [scripts/settings/talent/talent_settings_adamant.lua：259–261](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L259-L261)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2724–2748](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2724-L2748)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua：40–61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L40-L61)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua：125–156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L125-L156)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1464–1478](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1464-L1478)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1379–1406](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1379-L1406)

## 算例條件與待確認事項

- **傷害算例**：若基礎傷害 100、原本護甲係數 0.5，傷害為 50；加入 15% 脆弱後，變成 100 × (0.5 + 0.15) = 65，實際提高 30%。若該護甲適用超額破甲轉換、原本係數已達 1，則為 100 × (1 + 0.15 × 0.25) = 103.75，並非固定增加 15% 最終傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c858c05f`。
- 繁中與英文的脆弱效果一致；層數換算及護甲依賴是機制補充，未列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_dog_applies_brittleness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/5df365c7-8213-4c06-acc5-2b00f0cda022)

圖片僅供技能辨識，不作機制證據。

