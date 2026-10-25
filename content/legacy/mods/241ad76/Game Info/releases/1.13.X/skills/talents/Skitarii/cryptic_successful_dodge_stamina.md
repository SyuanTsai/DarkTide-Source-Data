# 閃避伺服恢復(Evasive Servo Recovery)：原始碼依據

[English](en/cryptic_successful_dodge_stamina.md)

[返回玩家說明](README.md#cryptic_successful_dodge_stamina)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_successful_dodge_stamina)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_successful_dodge_stamina`；名稱鍵：`loc_talent_cryptic_successful_dodge_stamina`；描述鍵：`loc_talent_cryptic_successful_dodge_stamina_desc`。
- 節點：`node_f064bf43-9846-4821-8001-0d4b1fcaa4f2`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_successful_dodge直接Stamina.add_stamina_percent(unit,0.1)，此模板無冷卻或層數。

## 原始碼依據

- [scripts/utilities/attack/stamina.lua：102–125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L125)
- [scripts/settings/talent/talent_settings_cryptic.lua：421–423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L421-L423)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2428–2437](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2428-L2437)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1912–1926](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1912-L1926)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：325–350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L325-L350)

## 算例條件與待確認事項

- **恢復算例**：最大耐力 5 格時，每次恢復 5 × 10% = 0.5 格；目前 4.8 格則只補到 5 格。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`99f3c08d`。
- 繁中與英文條件及恢復方向一致；補充以最大耐力為分母。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_successful_dodge_stamina.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/4738c3e6-2609-414c-9c00-f50fea4dcef3)

圖片僅供技能辨識，不作機制證據。

