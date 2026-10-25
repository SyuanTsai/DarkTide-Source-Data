# 效率殺手(Efficient Killer)：原始碼依據

[English](en/adamant_execution_order_crit.md)

[返回玩家說明](README.md#adamant_execution_order_crit)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_execution_order_crit)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_execution_order_crit`；名稱鍵：`loc_talent_adamant_exterminator_toughness`；描述鍵：`loc_talent_execution_order_crit_description`。
- 節點：`node_e686dc62-a877-4eef-8a96-52743b1c0fcd`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 標記目標死亡時，_execution_order_proc 讀取此升級 special rule，若已選取便建立 adamant_execution_order_crit。效果上限 1 層、持續 8 秒，提供 critical_strike_chance=0.10 與 critical_strike_damage=0.25；重複觸發重新計時。
- CriticalStrike.chance 把 critical_strike_chance 加到職業基礎與武器額外爆擊率後 clamp 至 0..1；暴擊傷害由共用 damage calculation 讀取 critical_strike_damage。
- 程式碼核對固定至公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；此公開程式碼與本機繁中／英文文字版本對應為1.13.1。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2166–2190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2166-L2190)
- [scripts/settings/talent/talent_settings_adamant.lua：102–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L102-L119)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：958–966](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L958-L966)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1123–1136](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1123-L1136)
- [scripts/utilities/attack/critical_strike.lua：13–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/utilities/attack/damage_calculation.lua：251–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L251-L258)
- [scripts/utilities/attack/damage_calculation.lua：675–782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L675-L782)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2166–2190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2166-L2190)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1727–1751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1727-L1751)

## 算例條件與待確認事項

- 基礎爆擊率 5% 時，加成單獨貢獻 +10 個百分點，結果為 15%；最終值仍受武器加成與 100% 上限影響。
- 暴擊傷害最終數值仍受近戰／遠程專屬修正、武器與傷害公式影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2b42cf3a`。
- 繁中「擊殺被標記的目標時，獲得 10%暴擊機率與 25%暴擊傷害，持續 8 秒」對應英文 “Gain 10% Critical Hit Chance and 25% Critical Hit Damage on Marked Kill. Lasts 8s”；一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_execution_order_crit.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/5c90d0a5-8150-4c04-84cf-9b0ae1d6e28f)

圖片僅供技能辨識，不作機制證據。

