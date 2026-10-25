# 亞空間幽魂(Warp Ghost)：原始碼依據

[English](en/psyker_stat_mix.md)

[返回玩家說明](README.md#psyker_stat_mix)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_stat_mix)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_stat_mix`；名稱鍵：`loc_talent_psyker_stat_mix`；描述鍵：`loc_talent_psyker_stat_mix_desc`。
- 節點：`node_61959df9-adf1-45a9-9e2f-4d9e3c7f8e00`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- warp_charge_dissipation_multiplier=.2 只乘low/high/critical三區段係數，SharedFunctions.update的最低fallback區段使用default_threshold_decay_rate_modifier，未乘此buff。stamina_modifier2與toughness_replenish_modifier.25。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1841–1849](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1841-L1849)
- [scripts/settings/talent/talent_settings_psyker.lua：119–123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L119-L123)
- [scripts/utilities/warp_charge.lua：220–239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L220-L239)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua：44–60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L44-L60)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2723–2747](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2723-L2747)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：2136–2162](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2136-L2162)

## 算例條件與待確認事項

- **恢復算例**：沒有其他加成時，原本恢復 10 點韌性變成 10 × 1.25 = 12.5 點；原有 20% 同類恢復加成時，10 × (1 + 20% + 25%) = 14.5 點。
- **自然消退算例**：在同一適用反噬區段，原本每秒下降 5 個百分點，變成 5 × 0.2 = 1 個百分點；其他條件不變，同一段反噬消退約需 5 倍時間。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`df89fc40`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_stat_mix.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/57acd7a3-65a7-460c-876c-3153b63d69a3)

圖片僅供技能辨識，不作機制證據。

