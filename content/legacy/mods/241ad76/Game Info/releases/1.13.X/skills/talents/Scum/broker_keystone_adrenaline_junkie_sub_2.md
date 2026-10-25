# 腎上腺素懲戒者(Adrenaline Smiter)：原始碼依據

[English](en/broker_keystone_adrenaline_junkie_sub_2.md)

[返回玩家說明](README.md#broker_keystone_adrenaline_junkie_sub_2)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie_sub_2)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_adrenaline_junkie_sub_2`；名稱鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_2`；描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_2_desc`。
- 節點：`node_8277fab7-51c3-4697-aa79-d80ddcb6060e`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings 設 sub_2_kill_additional_grant=4、sub_2_kill_additional_elite_grant=10。啟用 extra_killing_blow_stacks special rule 後，on_hit handler 直接返回；on_kill handler先跑核心命中／暴擊給層，再加 4 層，若 CheckProcFunctions.on_elite_kill 為真再加 10 層。
- 共用 proc check 要求 attack_type=melee，故此項只計近戰擊殺。on_elite_kill 同時要求 attack_result=died 及 params.tags.elite；它不把單有 special 標籤的擊殺視為精英。
- 新增層仍加到核心的 broker_keystone_adrenaline_junkie_stack，遵守其 30 層上限、重設計時、逐層衰退及達上限觸發狂暴規則。

## 原始碼依據

- [scripts/settings/talent/talent_settings_broker.lua：464–480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2728–2768](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2728-L2768)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3630–3679](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3630-L3679)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：96–105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L105)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：120–133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：368–370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L370)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3686–3698](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3686-L3698)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua：631–663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L663)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2728–2768](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2728-L2768)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1880–1902](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1880-L1902)

## 算例條件與待確認事項

- **擊殺算例**：一般非暴擊近戰擊殺為 1+4=5 層；一般暴擊近戰擊殺為 1+1+4=6 層；非暴擊精英擊殺為 1+4+10=15 層；暴擊精英擊殺為 1+1+4+10=16 層。
- 層數算例假設核心 keystone 生效且尚未達 30 層上限；若同時選取其他 Adrenaline 特殊規則，命中層數會依其條件另外計算。
- 精英 +10 由 elite 標籤判定；不等同於所有專家／special 敵人。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e0b9d68a`。
- 繁中與英文都把額外層限定於擊殺，並排除非擊殺命中；程式另確認一般擊殺 +4、elite tag 擊殺再 +10，暴擊的核心額外層仍保留。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_adrenaline_junkie_sub_2.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/29f93050-b0a8-48ca-88fe-2e40d9769a99)

圖片僅供技能辨識，不作機制證據。

