# 擲彈兵(Grenadier)：原始碼依據

[English](en/veteran_extra_grenade.md)

[返回玩家說明](README.md#veteran_extra_grenade)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_extra_grenade`；名稱鍵：`loc_talent_veteran_extra_grenade`；描述鍵：`loc_talent_veteran_extra_grenade_and_throw_chance_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L358-L383)：`tactical_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L85-L127)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

天賦同時裝載 extra_grenade 與 extra_grenade_throw_chance。ActionThrowGrenade 在伺服器隨機一次，成功新增另一枚投射物，方向略偏；沒有額外一次扣除充能。額外投射物 fuse override 為基礎引信加 0.3 秒，實際穿甲碰撞引信仍走其專用規則。三種 ability 都使用 extra_max_amount_of_grenades 且基礎最大3。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 85–127 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L85-L127)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 935–941 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L935-L941)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1290–1296 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1290-L1296)
- [scripts/extension_systems/weapon/actions/action_throw_grenade.lua，第 130–164 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_throw_grenade.lua#L130-L164)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 27–62 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L27-L62)
- [scripts/settings/talent/talent_settings_veteran.lua，第 9–11 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L9-L11)
- [scripts/settings/talent/talent_settings_veteran.lua，第 102–104 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L102-L104)
- [scripts/settings/talent/talent_settings_veteran.lua，第 202–204 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L202-L204)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/tactical_modifier/veteran_extra_grenade.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/2bec21d1-d677-4386-942d-2c2697c285d1)

圖片僅供技能辨識，不作機制證據。

