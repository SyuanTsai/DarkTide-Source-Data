# 能屈能伸(Obstinate)：原始碼依據

[English](en/adamant_terminus_warrant_cdr.md)

[返回玩家說明](README.md#adamant_terminus_warrant_cdr)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_terminus_warrant_cdr)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_terminus_warrant_cdr`；名稱鍵：`loc_talent_adamant_bullet_rain_tdr`；描述鍵：`loc_talent_adamant_terminus_warrant_cdr_desc`。
- 節點：`node_b6adf64e-bc34-455a-a059-552c4fb0f8a0`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- core 的 on_wield melee/ranged 分支以 current_stacks>=max_stacks 作為 CDR talent 門檻，再建立 adamant_terminus_warrant_cdr_buff。其 duration=12，timer 約每秒呼叫 restore_ability_resource(combat_ability,0.33)。
- 法務官戰鬥技能以 resource_regen_per_second=1、resource_cost_per_charge=cooldown 定義資源單位；restore_ability_resource 會把恢復後資源 clamp 到最大值。因此 0.33 是 0.33 秒能力資源，不是瞬間減少 33% 冷卻。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1902–1925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1902-L1925)
- [scripts/settings/talent/talent_settings_adamant.lua：331–370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L331-L370)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1657–1663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1657-L1663)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1689–1695](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1689-L1695)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1751–1786](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1751-L1786)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua：7–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L7-L24)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1127–1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1179)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1902–1925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1902-L1925)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1677–1701](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1677-L1701)

## 算例條件與待確認事項

- 完整 20 層觸發後，12 秒內名目恢復 3.96 秒冷卻；只剩 2 秒時恢復最多 2 秒並充滿。
- 機制來源固定為公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；繁中、英文模板與程式來源皆為1.13.1；遊戲內最終顯示仍待核對。程式實作和文字措辭如有差異，先列文字與實作差異待核，不直接判為翻譯錯誤。
- 恢復按逐秒 timer 執行，實際 tick 數受 buff 到期更新順序影響；算例列名目上限，仍以實際 resource clamp 為準。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1a4408d8`。
- 繁中「每消耗 20 層，獲得 33%技能冷卻時間恢復，持續 12 秒」對應英文 “Spending 20 stacks grants 33% Ability Cooldown Regeneration, for 12s”；程式把它實作為每秒恢復 0.33 秒資源，文字內部沒有矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_terminus_warrant_cdr.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/7b782337-07db-4ff4-9a85-ba21d1fcfe6b)

圖片僅供技能辨識，不作機制證據。

