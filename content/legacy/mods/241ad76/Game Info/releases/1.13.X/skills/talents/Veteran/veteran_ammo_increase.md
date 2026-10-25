# 全副武裝(Fully Loaded)：原始碼依據

[English](en/veteran_ammo_increase.md)

[返回玩家說明](README.md#veteran_ammo_increase)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_ammo_increase`；名稱鍵：`loc_talent_veteran_ammo_increase`；描述鍵：`loc_talent_veteran_ammo_increase_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L910-L940)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2503-L2526)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

buff 將 ammo_reserve_capacity 設為 .25；該 stat 為以 1 為基底的 additive multiplier，故容量倍率1.25。PlayerUnitWeaponExtension 對 current 與 max ammunition reserve 分別 floor(base×capacity)，再 clamp 到 hard limit；clip 使用另一個 clip_size_modifier 欄位。例：max reserve 100→floor(100×1.25)=125。[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2503-L2526) → [備用彈藥 buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1059-L1065) → [stat 型別與基底](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L693-L695) → [備用彈藥套用、取整與上限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1344)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2503–2526 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2503-L2526)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1059–1065 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1059-L1065)
- [scripts/settings/buff/buff_settings.lua，第 693–695 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L693-L695)
- [scripts/settings/buff/buff_settings.lua，第 1048–1058 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058)
- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua，第 1326–1344 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1344)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 實際備用彈藥數取決於各武器基礎值、整數取整及網路彈藥上限。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_ammo_increase.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/4087a451-e4ae-429b-afe6-75369e2903f3)

圖片僅供技能辨識，不作機制證據。

