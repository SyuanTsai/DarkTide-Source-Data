# 亞空間騎士(Warp Rider)：原始碼依據

[English](en/psyker_damage_based_on_warp_charge.md)

[返回玩家說明](README.md#psyker_damage_based_on_warp_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_damage_based_on_warp_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_damage_based_on_warp_charge`；名稱鍵：`loc_talent_psyker_damage_based_on_warp_charge`；描述鍵：`loc_talent_psyker_damage_based_on_warp_charge_desc`。
- 節點：`node_502ba655-95d9-419a-a825-c688915e2983`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 實際 buff 是 lerped damage min0 max.2，lerp_t=current_percentage；不沿用 Lua name 的10–25%舊字串。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1485–1505](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1485-L1505)
- [scripts/settings/talent/talent_settings_psyker.lua：208–211](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L208-L211)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1236–1252](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1236-L1252)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：965–991](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L965-L991)

## 算例條件與待確認事項

- **傷害算例**：反噬 50%、該階段基準傷害 100、其他倍率為 1 時，100 × (1 + 20% × 50%) = 110 點。若原有 25% 同階段加成，從 125 變成 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`bfd23655`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_damage_based_on_warp_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/8f79e11c-ea7c-4e52-957b-007bd85bcf1b)

圖片僅供技能辨識，不作機制證據。

