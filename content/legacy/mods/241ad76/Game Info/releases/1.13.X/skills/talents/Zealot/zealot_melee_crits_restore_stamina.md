# 刻不容緩(No Respite)：原始碼依據

[English](en/zealot_melee_crits_restore_stamina.md)

[返回玩家說明](README.md#zealot_melee_crits_restore_stamina)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_melee_crits_restore_stamina)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_melee_crits_restore_stamina`；名稱鍵：`loc_talent_zealot_melee_crits_restore_stamina`；描述鍵：`loc_talent_zealot_melee_crits_restore_stamina_desc`。
- 節點：`node_5832cbce-960a-4303-b772-3f8813fde6d0`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit配on_crit_melee，cooldown1，Stamina.add_stamina_percent(.1)依最大耐力恢復再夾上限。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2292–2311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2292-L2311)
- [scripts/settings/talent/talent_settings_zealot.lua：89–92](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L89-L92)
- [scripts/utilities/attack/stamina.lua：102–118](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L118)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2142–2161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2142-L2161)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1698–1723](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1698-L1723)

## 算例條件與待確認事項

- **恢復算例**：最大耐力 6，每次補 6 × 10% = 0.6 點；若只缺 0.2 點，就只恢復 0.2 點。一次橫掃暴擊命中多個敵人，仍受 1 秒冷卻限制。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`01adc74d`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_melee_crits_restore_stamina.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/6406ef43-19df-4cab-9091-e5c490d72cef)

圖片僅供技能辨識，不作機制證據。

