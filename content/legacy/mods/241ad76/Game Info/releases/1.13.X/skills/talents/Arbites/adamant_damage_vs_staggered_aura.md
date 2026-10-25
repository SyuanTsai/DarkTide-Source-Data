# 鎮壓異己(Breaking Dissent)：原始碼依據

[English](en/adamant_damage_vs_staggered_aura.md)

[返回玩家說明](README.md#adamant_damage_vs_staggered_aura)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_damage_vs_staggered_aura)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_damage_vs_staggered_aura`；名稱鍵：`loc_talent_adamant_damage_vs_staggered_aura`；描述鍵：`loc_talent_adamant_damage_vs_staggered_aura_alt_desc`。
- 節點：`node_6857741a-5da7-40c1-871b-4b62f91a52ea`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦掛載 coherency buff adamant_damage_vs_staggered_aura；talent_settings 設 damage_vs_staggered=0.1，buff 對 stat_buffs.damage_vs_staggered 寫入 0.1。
- damage_calculation 在 target_is_staggered 為真時取攻擊者 damage_vs_staggered stat buff 減 1，再把此差值加進 damage_stat_buffs；stat 定義為 additive_multiplier。以沒有其他傷害修正的基礎 100 計算，結果為 100×1.1=110。
- 此節點使用 adamant_no_companion_coherency 特殊規則，companion_coherency_extension 因缺少 dog-counts 規則而停用戰犬協同成員資格。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：697–721](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L697-L721)
- [scripts/settings/talent/talent_settings_adamant.lua：53–66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L53-L66)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：565–582](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L565-L582)
- [scripts/settings/buff/buff_settings.lua：794–794](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L794-L794)
- [scripts/utilities/attack/damage_calculation.lua：440–451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L440-L451)
- [scripts/extension_systems/coherency/companion_coherency_extension.lua：1–34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/companion_coherency_extension.lua#L1-L34)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：697–721](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L697-L721)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：267–293](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L267-L293)

## 算例條件與待確認事項

- **傷害算例**：對踉蹌敵人原本造成 100 點傷害，只計此光環時為 100 × (1 + 0.10) = 110 點；對未踉蹌敵人仍是 100 點。同階段已有 25% 增傷時，對符合條件的敵人為 100 × (1 + 25% + 10%) = 135 點。
- 來源使用踉蹌狀態作為傷害條件，不等同於只對受擊前一瞬間出現踉蹌的目標生效；遊戲內狀態時長和其他傷害修正會影響實際輸出。
- 額外 10% 屬加法傷害修正項；有其他增傷時的最終總倍率須按傷害計算流程合併，不能把每個百分比都視為依序相乘。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`a99d089f`。
- 同源繁中與英文的對踉蹌目標增傷與作用對象一致；停用犬協同資格及計算方式屬細節補充，不判為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/aura/adamant_damage_vs_staggered_aura.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/57af1e74-7cc5-45bb-a332-11d2e5fde909)

圖片僅供技能辨識，不作機制證據。

