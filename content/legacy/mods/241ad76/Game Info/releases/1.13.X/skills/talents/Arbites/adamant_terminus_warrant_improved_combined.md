# 審判之旨(Writ of Judgement)：原始碼依據

[English](en/adamant_terminus_warrant_improved_combined.md)

[返回玩家說明](README.md#adamant_terminus_warrant_improved_combined)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_terminus_warrant_improved_combined)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_terminus_warrant_improved_combined`；名稱鍵：`loc_talent_adamant_bullet_rain_ability`；描述鍵：`loc_talent_adamant_terminus_warrant_improved_combined_desc`。
- 節點：`node_9964320a-cf72-40d7-ad57-d4e5bc4a7345`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Improved combined 使用 terminus upgrade special rule。兩種 wield 消耗分支都在 current_stacks>=max_stacks 時建立相同 upgrade stat buff；max_stacks 基礎值為20。
- upgrade buff max_stacks=1、duration=12，stat buff 對 melee_attack_speed 與 ranged_attack_speed 各給0.10，critical_strike_chance 給0.10。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2051–2098](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2051-L2098)
- [scripts/settings/talent/talent_settings_adamant.lua：331–370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L331-L370)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1657–1659](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1657-L1659)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1689–1691](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1689-L1691)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1733–1750](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1733-L1750)
- [scripts/utilities/action/action_handler.lua：356–428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/utilities/attack/critical_strike.lua：13–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2051–2098](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2051-L2098)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：2147–2169](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2147-L2169)

## 算例條件與待確認事項

- 在 20 層消耗時啟動 12 秒：+10% melee attack speed、+10% ranged attack speed、+10% critical strike chance。
- 機制來源固定為公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；繁中、英文模板與程式來源皆為1.13.1；遊戲內最終顯示仍待核對。程式實作和文字措辭如有差異，先列文字與實作差異待核，不直接判為翻譯錯誤。
- 這個 buff 與 Terminus 核心增益可同次啟動；最終攻擊速度與暴擊結果由共用 stat 與武器結算決定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fadfe4d8`。
- 繁中「每消耗 20 層時，獲得 10%近戰與遠程攻擊速度，以及 10%暴擊機率，持續 12 秒」對應英文 “Spending 20 stacks grants 10% Melee and Ranged Attack Speed as well as 10% Critical Hit Chance for 12s”；一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_terminus_warrant_improved_combined.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/34f0ccb1-7c44-4aaf-a697-e0ef2b6f2c0e)

圖片僅供技能辨識，不作機制證據。

