# 最好的防禦(The Best Defence)：原始碼依據

[English](en/ogryn_multi_heavy_toughness.md)

[返回玩家說明](README.md#ogryn_multi_heavy_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_multi_heavy_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_multi_heavy_toughness`；名稱鍵：`loc_talent_ogryn_toughness_on_multiple`；描述鍵：`loc_talent_ogryn_toughness_on_multiple_new_desc`。
- 節點：`node_219a7391-b6de-459c-83fd-631421d4f150`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_sweep_finish 讀取 num_hit_units；多目標要求 >1、單目標要求 ==1。ActionSweep 在退出揮擊時傳入本次命中敵人數與 is_heavy。
- 多目標取 toughness_3.toughness=.05/heavy_toughness=.15；單目標取 toughness_2.reduced_toughness=.05/toughness=.15。單目標顯示格式引用 toughness_3，但本版數值一致。
- replenish_percentage(ignore_stat_buffs=false) 乘最大韌性、toughness_replenish_modifier 與 multiplier，最後以缺額為上限。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1104–1120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1104-L1120)
- [scripts/settings/talent/talent_settings_ogryn.lua：315–324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L315-L324)
- [scripts/extension_systems/weapon/actions/action_sweep.lua：944–961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：818–837](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L818-L837)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：36–62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L36-L62)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100 時，一般攻擊恢復 100 × 5% = 5 點，重擊恢復 100 × 15% = 15 點；若目前 95，就只能補缺少的 5 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`bcffeeff`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_multi_heavy_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/67294825-4742-461c-8445-8eabf69981d3)

圖片僅供技能辨識，不作機制證據。

