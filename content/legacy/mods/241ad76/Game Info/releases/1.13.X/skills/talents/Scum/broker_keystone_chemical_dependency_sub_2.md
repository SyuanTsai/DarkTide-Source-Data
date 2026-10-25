# 化學增強(Chem Fortified)：原始碼依據

[English](en/broker_keystone_chemical_dependency_sub_2.md)

[返回玩家說明](README.md#broker_keystone_chemical_dependency_sub_2)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_chemical_dependency_sub_2)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_chemical_dependency_sub_2`；名稱鍵：`loc_talent_broker_keystone_chemical_dependency_sub_2`；描述鍵：`loc_talent_broker_keystone_chemical_dependency_sub_2_desc`。
- 節點：`node_29d36ca3-ef53-4d5b-980d-0d0353cf8541`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings 設 sub_2_toughness_grant=0.5、toughness_damage_taken_multiplier=0.95。special rule 啟用後，proc buff 在每次 on_syringe_used 時先呼叫 Toughness.replenish_percentage(unit,0.5)，然後才加入 Chemical Dependency stack；因此到達層數上限時仍會執行這次回補。
- stack template 只在 sub_2_toughness rule 開啟時啟用 conditional toughness_damage_taken_multiplier=0.95。buff_settings 將該 stat 分類為 multiplicative_multiplier，Buff._calculate_stat_buffs 依 stack count 重複相乘；3 層為 0.95×0.95×0.95=0.857375，傷害減少 1−0.857375=0.142625。
- DamageTakenCalculation 將此 multiplier 乘進韌性傷害的總 damage modifier；這是韌性傷害減免，不直接降低生命傷害。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2539–2578](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2539-L2578)
- [scripts/settings/talent/talent_settings_broker.lua：454–463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L454-L463)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3478–3497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3478-L3497)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3524–3566](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3524-L3566)
- [scripts/settings/buff/buff_settings.lua：1000–1004](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1000-L1004)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/toughness/toughness.lua：16–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/utilities/attack/damage_taken_calculation.lua：225–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L225-L258)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2539–2578](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2539-L2578)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1589–1611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1589-L1611)

## 算例條件與待確認事項

- **韌性回補算例**：最大韌性 100、目前韌性 40，使用興奮劑的理論回補為 100×0.50=50，實際補到滿為 50；若目前韌性 80，實際只補 20。
- **韌性減傷算例**：原本承受 100 點韌性傷害，3 層時為 100×0.95³=85.74 點；減少約 14.26 點。
- 回補量受目前韌性缺額與其他韌性回補修正影響；韌性滿時不會超過上限。
- 0.95³ 是三層此項修正的結果；其他韌性傷害倍率仍會再按遊戲的傷害公式合併，效果只作用於韌性傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`bd5bf1c2`。
- 繁中與英文都說使用興奮劑回補韌性、每層依賴效果提供韌性傷害減免；程式值為最大韌性的 50% 回補與每層 0.95 韌性傷害倍率。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_chemical_dependency_sub_2.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/6c334888-08bb-4567-a6a2-1c4b4750409b)

圖片僅供技能辨識，不作機制證據。

