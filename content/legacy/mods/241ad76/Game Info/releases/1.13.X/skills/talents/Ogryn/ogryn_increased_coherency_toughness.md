# 關鍵人物(Lynchpin)：原始碼依據

[English](en/ogryn_increased_coherency_toughness.md)

[返回玩家說明](README.md#ogryn_increased_coherency_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_increased_coherency_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_increased_coherency_toughness`；名稱鍵：`loc_talent_ogryn_coherency_toughness_increase`；描述鍵：`loc_talent_ogryn_coherency_toughness_increase_desc`。
- 節點：`node_e4d5b83c-4a0c-4080-9bfb-46f46fbbd8f3`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- toughness_regen_rate_modifier=1，屬 additive_multiplier，因此無其他加成時聚合值2。
- 韌性更新以 base_rate×weapon_rate_modifier×buff_rate_modifier×coherency_rate_modifier 計算，並先檢查可恢復條件。此被動裝在本人，不是向隊友發放的光環。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1080–1086](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1080-L1086)
- [scripts/settings/talent/talent_settings_ogryn.lua：312–314](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L312-L314)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：125–149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L125-L149)
- [scripts/settings/buff/buff_settings.lua：1009–1012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1009-L1012)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：781–797](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L781-L797)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：88–112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L88-L112)

## 算例條件與待確認事項

- **恢復算例**：其餘條件相同，原本每秒恢復 5 點，變成 5 × (1 + 100%) = 10 點；若同階段原有 20% 加成，則由 6 點變成 5 × (1 + 20% + 100%) = 11 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d0729082`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_increased_coherency_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/47f9eea2-c58f-4ed3-8678-e42d2ec1701f)

圖片僅供技能辨識，不作機制證據。

