# 趁火打劫(Exploit Weakness)：原始碼依據

[English](en/veteran_crits_apply_rending.md)

[返回玩家說明](README.md#veteran_crits_apply_rending)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_crits_apply_rending`；名稱鍵：`loc_talent_veteran_crits_rend`；描述鍵：`loc_talent_veteran_crits_rend_alt_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L242-L265)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1102-L1135)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

關鍵不一致：天賦 veteran_crits_apply_rending 指向 veteran_melee_crits_increase_damage，後者在近戰爆擊時給使用者 damage = 0.20、持續 6 秒；另一個名為 veteran_crits_apply_rending 的 buff 確實會給命中敵人施加 rending_debuff_medium，但本天賦沒有引用它。主文依實際 talent→buff 連結記錄 +20% 傷害，不把名稱當機制證據。[天賦引用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1102-L1135) → [實際引用 buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L781-L798)；[未被該天賦引用的撕裂 buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2567-L2589)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1102–1135 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1102-L1135)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 781–798 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L781-L798)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2567–2589 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2567-L2589)
- [scripts/extension_systems/buff/buffs/proc_buff.lua，第 304–355 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355)
- [scripts/settings/buff/weapon_buff_templates.lua，第 377–387 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L377-L387)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua，第 388–390 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L388-L390)
- [scripts/utilities/attack/damage_calculation.lua，第 232–242 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 不能確定是 talent→buff 引用寫錯、描述／名稱過期，或另有預期觸發路徑；固定 SHA 僅證實上述程式連結。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_crits_apply_rending.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/fd178238-be59-4c18-8631-12423f5506fb)

圖片僅供技能辨識，不作機制證據。

