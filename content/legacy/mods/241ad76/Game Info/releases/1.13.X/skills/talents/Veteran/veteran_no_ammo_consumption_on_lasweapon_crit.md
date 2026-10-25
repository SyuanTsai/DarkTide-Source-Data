# 突擊隊(Shock Trooper)：原始碼依據

[English](en/veteran_no_ammo_consumption_on_lasweapon_crit.md)

[返回玩家說明](README.md#veteran_no_ammo_consumption_on_lasweapon_crit)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_no_ammo_consumption_on_lasweapon_crit`；名稱鍵：`loc_talent_veteran_no_ammo_consumption_on_lasweapon_crit`；描述鍵：`loc_talent_veteran_no_ammo_consumption_on_lasweapon_crit_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L755-L780)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1628-L1637)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

passive buff 僅在 slot_secondary 正持有、clip ammo 至少 1，且武器模板含 lasweapon keyword 時授予 no_ammo_consumption_on_crits。ActionShoot 在暴擊且 keyword 存在時把 ammo_usage 設為 0 並允許射擊；其他非暴擊射擊照常消耗武器設定值。[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1628-L1637) → [武器／彈藥條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L594-L636) → [暴擊不扣彈與射擊允許條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L255-L300) → [ammo usage 歸零](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L520)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1628–1637 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1628-L1637)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 594–636 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L594-L636)
- [scripts/extension_systems/weapon/actions/action_shoot.lua，第 255–300 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L255-L300)
- [scripts/extension_systems/weapon/actions/action_shoot.lua，第 481–520 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L520)
- [scripts/extension_systems/weapon/actions/action_shoot.lua，第 507–522 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L507-L522)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 遊戲中的 lasweapon keyword 決定哪些武器屬此類；不能從名稱推定所有雷射外觀武器都符合。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_no_ammo_consumption_on_lasweapon_crit.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/cba2a46d-298c-434a-883d-e048f5ede32d)

圖片僅供技能辨識，不作機制證據。

