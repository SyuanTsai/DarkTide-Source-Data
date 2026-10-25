# 背水一戰(Desperation)：原始碼依據

[English](en/zealot_more_damage_when_low_on_stamina.md)

[返回玩家說明](README.md#zealot_more_damage_when_low_on_stamina)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_more_damage_when_low_on_stamina)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_more_damage_when_low_on_stamina`；名稱鍵：`loc_talent_zealot_increased_damage_on_low_stamina`；描述鍵：`loc_talent_zealot_damage_based_on_stamina_desc`。
- 節點：`node_e6beb408-b6d9-4b1b-b30c-91e9a92d0590`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 目前talent載入zealot_more_power_when_low_on_stamina，lerp_t=1−current/max，melee_damage0至.2。identifier雖仍叫zealot_melee_damage_on_stamina_depleted，不代表使用另一個5秒proc模板；不能把舊5秒效果加到目前機制。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4378–4434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4378-L4434)
- [scripts/settings/talent/talent_settings_zealot.lua：226–229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L226-L229)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1224–1255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1224-L1255)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1672–1697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1672-L1697)

## 算例條件與待確認事項

- **傷害算例**：最大耐力 6、目前剩 2，已消耗 4 ÷ 6；增傷為 20% × 4 ÷ 6 ≈ 13.33%，基礎 100 點變成約 113.33 點。同階段其他近戰增傷先相加。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3a2192a6`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_more_damage_when_low_on_stamina.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/dbe8719f-76fb-444c-a79d-2bf116b628fb)

圖片僅供技能辨識，不作機制證據。

