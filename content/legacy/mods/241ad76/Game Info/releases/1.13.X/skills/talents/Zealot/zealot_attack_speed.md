# 信仰狂亂(Faithful Frenzy)：原始碼依據

[English](en/zealot_attack_speed.md)

[返回玩家說明](README.md#zealot_attack_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_attack_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_attack_speed`；名稱鍵：`loc_talent_zealot_attack_speed`；描述鍵：`loc_talent_zealot_speed_desc`。
- 節點：`node_81b042fd-5ffb-4317-917d-8ea465181053`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 常駐melee_attack_speed+.1與movement_speed+.05。ActionHandler依各武器action設定的time_scale_stat_buffs加算，時間除以合成速度；不得將10%攻速等同10%動作時間減免。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1385–1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1385-L1392)
- [scripts/settings/talent/talent_settings_zealot.lua：340–343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L340-L343)
- [scripts/utilities/action/action_handler.lua：356–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1434–1456](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1434-L1456)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：944–972](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L944-L972)

## 算例條件與待確認事項

- **速度算例**：只計本天賦，原本 1 秒的受影響近戰動作變成 1 ÷ 1.1 ≈ 0.909 秒；基礎移速 5 公尺／秒變成 5 × 1.05 = 5.25 公尺／秒。其他同階段攻速先相加，再用總速度倍率換算時間。
- 算例不含其他速度修正與時間縮放上限；不是保證每種武器整套連段均縮短9.09%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6513bf51`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_attack_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/c184be29-e45d-4968-acc5-ae67779d90cc)

圖片僅供技能辨識，不作機制證據。

