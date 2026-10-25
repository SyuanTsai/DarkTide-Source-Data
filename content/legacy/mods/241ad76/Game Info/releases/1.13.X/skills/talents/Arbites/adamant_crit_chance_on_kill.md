# 狂熱信仰(Zealous Dedication)：原始碼依據

[English](en/adamant_crit_chance_on_kill.md)

[返回玩家說明](README.md#adamant_crit_chance_on_kill)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_crit_chance_on_kill)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_crit_chance_on_kill`；名稱鍵：`loc_talent_adamant_crit_chance_on_kill`；描述鍵：`loc_talent_adamant_crit_chance_on_kill_desc`。
- 節點：`node_62deceb2-66cd-4494-b96d-27b9fcc8732b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit檢查on_kill後加入子buff；max_stacks/max_stacks_cap8，duration10且refresh。critical_strike_chance每層.02加到職業/武器/其他來源，最後clamp0..1。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3467–3483](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3467-L3483)
- [scripts/utilities/attack/critical_strike.lua：15–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L15-L39)
- [scripts/extension_systems/buff/buff_extension_base.lua：560–589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/settings/talent/talent_settings_adamant.lua：371–375](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L371-L375)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3449–3466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3449-L3466)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2395–2417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2395-L2417)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1852–1880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1852-L1880)

## 算例條件與待確認事項

- **機率算例**：原本爆擊率 5%，滿層後為 5% + 8 × 2% = 21%；不是把原本 5% 乘以 1.16。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`4411328c`。
- 繁中「暴擊機率…堆疊」與英文 Critical Strike Chance／Stacks一致；用百分點釐清數值含義。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_crit_chance_on_kill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/c776951e-d8de-46cb-ad58-7c14af6b0997)

圖片僅供技能辨識，不作機制證據。

