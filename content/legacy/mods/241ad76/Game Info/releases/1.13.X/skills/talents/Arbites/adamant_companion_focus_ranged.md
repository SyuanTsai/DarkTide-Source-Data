# 往前進攻！(Go Get 'Em!)：原始碼依據

[English](en/adamant_companion_focus_ranged.md)

[返回玩家說明](README.md#adamant_companion_focus_ranged)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_companion_focus_ranged)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_companion_focus_ranged`；名稱鍵：`loc_talent_adamant_cyber_mastiff_ranged`；描述鍵：`loc_talent_adamant_cyber_mastiff_ranged_desc`。
- 節點：`node_524d5b7c-7557-4a87-aa66-5ef726bdcf45`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent 提供 adamant_companion_ranged_focus special rule 與 adamant_companion_focus_ranged stat buff。selector 讀取 special rule，對遠程目標 threatVal 加 ranged_focus_weight=10，並使用較大的 close/far distance。
- stat buff 提供 companion_damage_vs_ranged=0.50。共用傷害計算只在 attacker 為 companion 且目標帶 far 或 ranged 分類時，讀取 owner 的此項 stat 並加入傷害修正。
- 程式碼核對固定至公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；此公開程式碼與本機繁中／英文文字版本對應為1.13.1。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2454–2473](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2454-L2473)
- [scripts/settings/talent/talent_settings_adamant.lua：411–417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L411-L417)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3173–3179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3173-L3179)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua：125–130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L125-L130)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua：213–215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L213-L215)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua：256–310](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L256-L310)
- [scripts/utilities/attack/damage_calculation.lua：265–276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L265-L276)
- [scripts/utilities/attack/damage_calculation.lua：377–380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L377-L380)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2454–2473](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2454-L2473)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1908–1934](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1908-L1934)

## 算例條件與待確認事項

- 只計此天賦時，對 ranged 目標的 100 點基礎戰犬傷害成為 150 點；其他目標類型不套用這項專屬加成。
- 選敵權重與地形、距離、仇恨、視線及其他目標權重共同比較；加權不保證牠只攻擊遠程敵人。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`52fe19b9`。
- 繁中「優先攻擊遠程敵人，對其造成 50%傷害」對應英文 “prioritises Ranged Enemies, and deals 50% Damage to them”；一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_companion_focus_ranged.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/6208ebde-9eb1-4a4d-923c-823a0e511bf9)

圖片僅供技能辨識，不作機制證據。

