# 神恩庇護(Providence)：原始碼依據

[English](en/zealot_revive_speed.md)

[返回玩家說明](README.md#zealot_revive_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_revive_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_revive_speed`；名稱鍵：`loc_talent_zealot_revive_speed`；描述鍵：`loc_talent_zealot_revive_speed_desc`。
- 節點：`node_b0817c40-bea3-4c97-b423-7645d970edbb`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 常駐revive_speed_modifier+.25；四種完成事件向params.target_unit加effect。effect單層5秒refresh，movement_speed+.1與toughness_damage_taken_multiplier=.85。速度修正作用於對應revive互動，不把所有救援動作一概說成25%加速。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2254–2291](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2254-L2291)
- [scripts/settings/talent/talent_settings_zealot.lua：82–88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L82-L88)
- [scripts/utilities/attack/damage_taken_calculation.lua：223–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2111–2141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2111-L2141)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1724–1754](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1724-L1754)

## 算例條件與待確認事項

- **效果算例**：受幫助隊友原本移速 5 公尺／秒，只計這份加成後為 5 × 1.1 = 5.5；原本 100 點韌性傷害變成 100 × 0.85 = 85 點。效果給被協助的隊友，不是給你自己。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6421ecda`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_revive_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/ef521c17-0aae-4e01-b54c-9a25d1f9d792)

圖片僅供技能辨識，不作機制證據。

