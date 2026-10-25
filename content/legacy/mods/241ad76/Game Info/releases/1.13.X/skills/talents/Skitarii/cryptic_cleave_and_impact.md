# 適應性戰鬥校準(Adaptive Combat Calibration)：原始碼依據

[English](en/cryptic_cleave_and_impact.md)

[返回玩家說明](README.md#cryptic_cleave_and_impact)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_cleave_and_impact)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_cleave_and_impact`；名稱鍵：`loc_talent_cryptic_cleave_and_impact`；描述鍵：`loc_talent_cryptic_melee_cleave_and_impact_desc`。
- 節點：`node_ec45bdd9-6470-4bfb-85de-26897fdaac5c`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 雖然Buff名稱與參數名含stamina，實際讀取Toughness.current_toughness_percent；一側>0.5另一側<=0.5。

## 原始碼依據

- [scripts/utilities/attack/damage_profile.lua：37–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L37-L80)
- [scripts/utilities/attack/stagger_calculation.lua：190–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L205)
- [scripts/settings/talent/talent_settings_cryptic.lua：428–432](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L428-L432)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2497–2518](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2497-L2518)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2475–2496](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2475-L2496)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1957–1987](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1957-L1987)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2154–2183](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2154-L2183)

## 算例條件與待確認事項

- **邊界算例**：最大韌性 100，51 點享有順劈，50 點或49 點享有衝擊。順劈基準 10 → 10 × 1.30 = 13；衝擊基準 100 → 130。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6d23edd0`。
- 中英皆寫高於/低於，省略剛好50%的歸屬；作邊界補充，不列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_cleave_and_impact.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/ed3453a6-4290-4ca6-a37e-0d19046b048e)

圖片僅供技能辨識，不作機制證據。

