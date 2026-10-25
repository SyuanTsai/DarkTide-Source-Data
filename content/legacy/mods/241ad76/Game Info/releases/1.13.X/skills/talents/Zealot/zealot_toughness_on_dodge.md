# 精力復甦(Second Wind)：原始碼依據

[English](en/zealot_toughness_on_dodge.md)

[返回玩家說明](README.md#zealot_toughness_on_dodge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_toughness_on_dodge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_toughness_on_dodge`；名稱鍵：`loc_talent_zealot_toughness_on_dodge`；描述鍵：`loc_talent_zealot_toughness_on_dodge_desc`。
- 節點：`node_7e007113-75ff-4081-af02-5512abe200dc`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 模板訂閱on_successful_dodge，cooldown_duration=.5，toughness_percentage=.15；對持有者呼叫Toughness.replenish_percentage而非固定15點。通用恢復方法依最大韌性及恢復量屬性再限制缺額。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：499–512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L499-L512)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2911–2932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2911-L2932)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：259–290](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L259-L290)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、沒有其他恢復加成時，一次補 100 × 15% = 15 點；目前已有 95 點則只能補 5 點，恢復至上限。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7b3709d4`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_toughness_on_dodge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/7d6f33d9-5ed5-49d9-9f4c-333565e17216)

圖片僅供技能辨識，不作機制證據。

