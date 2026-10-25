# 終端律令(Terminal Decree)：原始碼依據

[English](en/adamant_terminus_warrant_support.md)

[返回玩家說明](README.md#adamant_terminus_warrant_support)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_terminus_warrant_support)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_terminus_warrant_support`；名稱鍵：`loc_talent_adamant_bullet_rain_toughness`；描述鍵：`loc_talent_adamant_terminus_warrant_support_desc`。
- 節點：`node_446b745a-e92e-4e31-8cc0-0ee5327f5674`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- support special rule 使 Terminus core 在切換對應武器、消耗 tracker 前讀取 current_stacks；以 0.01 × clamp(current_stacks,0,max_stacks) 呼叫 Toughness.replenish_percentage。
- 同一結算遍歷 coherency_extension:in_coherence_units()，逐一恢復其中單位；該集合包含觸發者時也會恢復自身。recover_percentage_toughness 以最大韌性乘比例，再按實際缺額計算恢復量。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1886–1901](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1886-L1901)
- [scripts/settings/talent/talent_settings_adamant.lua：331–370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L331-L370)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1661–1672](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1661-L1672)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1693–1704](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1693-L1704)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1886–1901](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1886-L1901)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1702–1726](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1702-L1726)

## 算例條件與待確認事項

- 最大韌性 100 的角色與協同隊友在消耗 20 層時各恢復 20 韌性；若某人只缺 8 韌性，實際只恢復 8。
- 機制來源固定為公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；繁中、英文模板與程式來源皆為1.13.1；遊戲內最終顯示仍待核對。程式實作和文字措辭如有差異，先列文字與實作差異待核，不直接判為翻譯錯誤。
- 隊友實際收到量各自受其最大韌性、缺額、恢復修正與韌性恢復封鎖影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6902a21b`。
- 繁中「每消耗一層，自己與協同中盟友恢復…韌性」對應英文 “For each stack you spend, replenish … Toughness to you and Allies in Coherency”；一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_terminus_warrant_support.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/053a0db6-481b-4944-9077-d1d9a05759dd)

圖片僅供技能辨識，不作機制證據。

