# 漸進裝甲矩陣(Progressive Plating Matrix)：原始碼依據

[English](en/cryptic_stacking_tdr.md)

[返回玩家說明](README.md#cryptic_stacking_tdr)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_stacking_tdr)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_stacking_tdr`；名稱鍵：`loc_talent_cryptic_stacking_tdr`；描述鍵：`loc_talent_cryptic_stacking_tdr_desc`。
- 節點：`node_853d22e7-bdc0-495e-ab44-7c5699dcf0f6`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- target_index==1觸發stepped_stat_buff；第n階倍率1−0.025n，非0.975的n次方。refresh_duration_on_stack=true，未設定逐層掉落。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2401–2426](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2401-L2426)
- [scripts/utilities/attack/damage_taken_calculation.lua：234–255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L255)
- [scripts/settings/talent/talent_settings_cryptic.lua：413–417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L413-L417)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2388–2400](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2388-L2400)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1888–1911](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1888-L1911)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：553–583](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L553-L583)

## 算例條件與待確認事項

- **減傷算例**：6 層提供 6 × 2.5% = 15% 減傷，原本 100 點韌性傷害變成 85；再配合另一項獨立 20% 減傷，則 100 × 0.85 × 0.80 = 68 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1e30d43e`。
- 雙語一致；補充同一天賦內先加總減傷。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stacking_tdr.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/5208032b-aaaf-4801-b84c-6fdbaab1735b)

圖片僅供技能辨識，不作機制證據。

