# 振奮過載(Invigorating Overload)：原始碼依據

[English](en/cryptic_overload_keystone_toughness_stamina.md)

[返回玩家說明](README.md#cryptic_overload_keystone_toughness_stamina)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_overload_keystone_toughness_stamina)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_overload_keystone_toughness_stamina`；名稱鍵：`loc_talent_cryptic_overload_keystone_toughness_stamina`；描述鍵：`loc_talent_cryptic_overload_keystone_toughness_stamina_desc`。
- 節點：`node_2296b656-a1b9-42b7-8b38-32801a972c29`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 設定將 toughness_percent_restored 與 stamina_percent_restored 都設為0.2。每次超載時，模板遍歷當下協同單位，套用原有8秒團隊 buff，並在選取此修正時呼叫韌性與耐力百分比恢復函式。
- 韌性函式以 max_toughness×0.2 作為基礎恢復量，因 ignore_stat_buffs=false 會再乘 toughness_replenish_modifier 與 toughness_replenish_multiplier；實際恢復不超過目前缺額，並可能被韌性恢復停用條件阻擋。
- 耐力函式以該玩家最大耐力×0.2計算，再把目前值限制於0至最大耐力；最大耐力包含職業、武器與既有耐力修正。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1306–1324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1306-L1324)
- [scripts/settings/talent/talent_settings_cryptic.lua：279–281](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L279-L281)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1574–1590](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1574-L1590)
- [scripts/utilities/toughness/toughness.lua：16–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/utilities/attack/stamina.lua：102–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/utilities/attack/stamina.lua：151–175](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L151-L175)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1306–1324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1306-L1324)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：986–1008](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L986-L1008)

## 算例條件與待確認事項

- 靜態推演：若最大韌性100、最大耐力50且兩者都至少缺20與10點，單次超載恢復20點韌性及10點耐力；若只缺12點韌性，最多只補12點。
- 百分比以各自最大值為基準，不是以目前值為基準；已滿資源不會溢出上限。
- 韌性恢復會受其他韌性補充修正和阻擋條件影響；耐力最大值可能因武器或其他加成改變。
- 以上為固定版程式碼的靜態推演，未在遊戲內實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7c6a74c0`。
- 繁中與英文都表示在能量超載時恢復20%韌性與20%耐力；固定版設定與實際恢復呼叫一致。UI未展開最大值基準、恢復上限及既有韌性修正的細節，不構成翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_overload_keystone_toughness_stamina.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/cfc8d67b-448d-4b33-afac-86fd412b2a6d)

圖片僅供技能辨識，不作機制證據。

