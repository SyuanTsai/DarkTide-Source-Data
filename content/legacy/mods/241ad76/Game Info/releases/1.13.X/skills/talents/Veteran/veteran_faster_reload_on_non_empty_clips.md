# 戰術裝填(Tactical Reload)：原始碼依據

[English](en/veteran_faster_reload_on_non_empty_clips.md)

[返回玩家說明](README.md#veteran_faster_reload_on_non_empty_clips)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_faster_reload_on_non_empty_clips`；名稱鍵：`loc_talent_ranger_reload_speed_empty_mag`；描述鍵：`loc_talent_veteran_reload_speed_non_empty_mag_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L67-L95)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2362-L2378)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

天賦 veteran_reload_speed_on_non_empty_clip 套用 reload_speed = 0.25，條件為彈匣 ammo percentage 大於 0，且在裝填期間生效。共用動作計時以速度倍率縮短時間：4 ÷ 1.25 = 3.2 秒，因此 +25% 速度不等於時間少 25%。[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2362-L2378) → [條件與 buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1751-L1785) → [共用動作計時](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L383-L429)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2362–2378 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2362-L2378)
- [scripts/settings/talent/talent_settings_veteran.lua，第 138–140 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L138-L140)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1751–1785 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1751-L1785)
- [scripts/settings/buff/buff_settings.lua，第 960–961 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L960-L961)
- [scripts/utilities/action/action_handler.lua，第 383–429 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L383-L429)
- [scripts/extension_systems/weapon/actions/action_reload_state.lua，第 91–114 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_reload_state.lua#L91-L114)
- [scripts/utilities/action/action_handler.lua，第 356–365 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_faster_reload_on_non_empty_clips.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/a5b64063-ac9d-404d-98ac-528f24aafb65)

圖片僅供技能辨識，不作機制證據。

