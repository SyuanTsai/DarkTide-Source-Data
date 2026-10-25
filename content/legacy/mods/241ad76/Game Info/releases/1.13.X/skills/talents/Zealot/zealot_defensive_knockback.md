# 大師的反擊(The Master's Retribution)：原始碼依據

[English](en/zealot_defensive_knockback.md)

[返回玩家說明](README.md#zealot_defensive_knockback)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_defensive_knockback)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_defensive_knockback`；名稱鍵：`loc_talent_zealot_3_tier_3_ability_1`；描述鍵：`loc_talent_zealot_3_tier_3_ability_1_description`。
- 節點：`node_2593e8b0-8838-45fd-b0ff-ac8ea327fb14`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_player_hit_received要求melee、is_damaging_result、attacking_unit alive、持有者非disabled。伺服器PushAttack.push使用power_level2000、radius2.75、內外角π*.125／π*.25，profile push_test；不能將power_level2000當作2000傷害。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：570–630](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L570-L630)
- [scripts/settings/talent/talent_settings_zealot.lua：496–502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L496-L502)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3083–3098](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3083-L3098)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1575–1597](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1575-L1597)

## 算例條件與待確認事項

- **冷卻算例**：第 0 秒觸發後，第 3 秒再次挨打不會再推擊，約第 8 秒才可再次觸發。它不會撤銷已受到的那次傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f3ca681a`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_defensive_knockback.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/56d9b0f2-db5a-493b-aff8-2cd9699d4d96)

圖片僅供技能辨識，不作機制證據。

