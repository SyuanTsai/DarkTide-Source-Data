# 嗜血(Out for Blood)：原始碼依據

[English](en/veteran_all_kills_replenish_toughness.md)

[返回玩家說明](README.md#veteran_all_kills_replenish_toughness)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_all_kills_replenish_toughness`；名稱鍵：`loc_talent_veteran_all_kills_replenish_toughness`；描述鍵：`loc_talent_veteran_all_kills_replenish_toughness_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L185-L211)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1457-L1479)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

此節點只有 1 點，talent override tier=1 對應 toughness_3.toughness = 0.05；擊殺事件呼叫 Toughness.replenish_percentage，依最大韌性計算並由共用韌性 extension 封頂至缺失量。100 最大韌性時請求 5，若只缺 2 則實際恢復 2。[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1457-L1479) → [tier 數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L227-L229) → [擊殺恢復](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2198-L2218) → [共用恢復上限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1457–1479 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1457-L1479)
- [scripts/settings/talent/talent_settings_veteran.lua，第 227–229 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L227-L229)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2198–2218 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2198-L2218)
- [scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua，第 267–283 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L267-L283)
- [scripts/utilities/character_sheet.lua，第 36–43 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/character_sheet.lua#L36-L43)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 253–285 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/buff/buffs/buff.lua，第 226–255 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L255)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua，第 60–66 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L60-L66)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_all_kills_replenish_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/d6402640-110e-4d25-b1b3-780a49b1c4e1)

圖片僅供技能辨識，不作機制證據。

