# 堅韌不屈(Too Stubborn to Die)：原始碼依據

[English](en/ogryn_toughness_on_low_health.md)

[返回玩家說明](README.md#ogryn_toughness_on_low_health)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_toughness_on_low_health)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_toughness_on_low_health`；名稱鍵：`loc_talent_ogryn_toughness_gain_increase_on_low_health`；描述鍵：`loc_talent_ogryn_toughness_gain_increase_on_low_health_desc`。
- 節點：`node_8f283711-065f-4147-af2b-ea22b8d6d9bf`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- conditional_stat_buffs.toughness_replenish_modifier=1；條件為 current_health_percent < .5。
- recover_toughness 與 recover_percentage_toughness 的對應流程讀此stat，百分比恢復若ignore_stat_buffs=true則跳過；協同自然regen用另一組速率stat。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1644–1669](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1644-L1669)
- [scripts/settings/talent/talent_settings_ogryn.lua：360–364](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L360-L364)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：218–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L218-L279)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：125–149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L125-L149)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：883–903](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L883-L903)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：385–409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L385-L409)

## 算例條件與待確認事項

- **恢復算例**：原本恢復 15 點，沒有其他修正時變成 15 × (1 + 100%) = 30 點；若同階段已有 20% 加成，則由 18 點變成 33 點。實際仍以缺少的韌性為上限。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`191ac350`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_toughness_on_low_health.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/72cbf891-ecd4-425c-8d46-97cb4d4863f9)

圖片僅供技能辨識，不作機制證據。

