# 呼吸器(Rebreather)：原始碼依據

[English](en/adamant_rebreather.md)

[返回玩家說明](README.md#adamant_rebreather)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_rebreather)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_rebreather`；名稱鍵：`loc_talent_adamant_rebreather`；描述鍵：`loc_talent_adamant_rebreather_desc`。
- 節點：`node_39b2491a-29f2-428c-9dc5-14d41204a76d`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- corruption_taken_multiplier=.8作用在permanent_damage；damage_taken_from_toxic_gas_multiplier=.25只在damage_profile.toxic_gas生效。不是所有持續傷害均減75%。

## 原始碼依據

- [scripts/utilities/attack/damage_taken_calculation.lua：363–376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L363-L376)
- [scripts/utilities/attack/damage_calculation.lua：601–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L601-L614)
- [scripts/settings/talent/talent_settings_adamant.lua：179–182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L179-L182)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2378–2388](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2378-L2388)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1212–1238](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1212-L1238)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：754–779](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L754-L779)

## 算例條件與待確認事項

- **腐敗算例**：單計腐敗抗性，原本增加 20 點腐敗時，變成 20 × 0.8 = 16 點。
- **毒氣算例**：單計毒氣減傷，原本造成 100 點傷害的毒氣變成 100 × 0.25 = 25 點；這兩種效果分別作用於腐敗與傷害階段。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0e416297`。
- 繁中腐敗抗性／毒氣減傷與英文兩項對象一致；格式以1−倍率輸出20%及75%。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_rebreather.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/4232eef3-1499-4f4c-b2e3-d1416db2ec8e)

圖片僅供技能辨識，不作機制證據。

