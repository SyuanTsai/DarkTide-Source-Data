# 遠射(Longshot)：原始碼依據

[English](en/veteran_increased_damage_based_on_range.md)

[返回玩家說明](README.md#veteran_increased_damage_based_on_range)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_increased_damage_based_on_range`；名稱鍵：`loc_talent_veteran_increased_damage_based_on_range`；描述鍵：`loc_talent_veteran_increased_damage_based_on_range_new_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1387-L1414)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L831-L865)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

ranged_damage_min0.1與ranged_damage_max0.15分別進ranged_damage、ranged_damage_far；damage_calculation先clamp距離比例，再sqrt後lerp，與一般傷害同階段相加，不是線性15%插值。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 831–865 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L831-L865)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1368–1375 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1368-L1375)
- [scripts/settings/damage/damage_settings.lua，第 18–25 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)
- [scripts/utilities/attack/damage_calculation.lua，第 284–320 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L320)
- [scripts/settings/talent/talent_settings_veteran.lua，第 133–137 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L133-L137)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increased_damage_based_on_range.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/f7517509-e85f-47fb-b775-234a6aa0950a)

圖片僅供技能辨識，不作機制證據。

