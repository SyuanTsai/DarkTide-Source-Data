# 財閥專員(Cartel Special)：專用興奮劑：原始碼依據

[English](en/broker_stimm_description_talent.md)

[返回基礎效果](BASE_EFFECTS.md#broker_stimm_description_talent)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`broker_stimm_description_talent`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- broker_archetype.lua 將 broker_stimm_description_talent 列入固定 base_talents。其天賦定義只有 description、display_name 及兩個 loc_string format_values（stimm_lab 與 broker_stimm）；未指定 passive、player_ability、coherency 或其他戰鬥效果。
- 職業基礎天賦另設 conditional_base_talents.broker_syringe；只有 selected_talent_names 中存在 TalentSettings.broker_stimm 的任一天賦時才啟用，並把該節點放入 slot_pocketable_small。故說明節點與實際針筒分開：前者提供介面文字，後者才提供條件式道具能力。
- TalentSettings.broker_stimm 透過 _generate_stimm_talent 建立各興奮劑天賦與其 buff 資料；實際配方、使用流程與針筒效果另見興奮劑天賦及 broker_syringe 來源文件。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L35-L89)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L3172-L3191)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L590-L597)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L30)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L6-L36)

## 算例與待確認事項

- 只套用 broker_stimm_description_talent 時，會保留說明節點的介面文字，不會因此取得小型口袋欄針筒；至少選入一項 broker_stimm 天賦後，broker_syringe 才符合條件。
- 此基礎節點不是興奮劑效果清單；各配方的數值與針筒的啟用、消耗、持續及冷卻由其他天賦和能力定義。
- 本文件只確認原始碼配置，未進行遊戲內測試。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
