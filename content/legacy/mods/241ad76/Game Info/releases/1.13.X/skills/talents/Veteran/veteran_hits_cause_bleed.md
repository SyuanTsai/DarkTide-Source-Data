# 鋸齒刀刃(Serrated Blade)：原始碼依據

[English](en/veteran_hits_cause_bleed.md)

[返回玩家說明](README.md#veteran_hits_cause_bleed)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_hits_cause_bleed`；名稱鍵：`loc_talent_veteran_hits_cause_bleed`；描述鍵：`loc_talent_veteran_hits_cause_bleed_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L488-L515)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1772-L1827)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

proc 條件為 damaging hit、non-kill、melee hit，且目標仍存活；每次命中加 2 層。共用 bleed buff 的 duration=1.5、interval=.5、max_stacks=16、refresh_duration_on_stack、interval_stack_removal=true。傷害使用 smoothstep((stacks/16))×500 作為 power_level；8 層輸入比例 .5，smoothstep=.5，故 power_level=250，但最終傷害仍依 bleeding damage profile 與目標護甲等計算。[天賦條件與數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1772-L1827) → [非致命近戰命中加 2 層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L992-L1011) → [共用流血層數與曲線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L260) → [流血傷害 profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L460)。

主頁流血算例沿共用power level正規化與bleeding profile推導：175×smoothstep(n/16)×護甲倍率；無甲護甲倍率0.5。8層得到43.75、2層得到3.759765625。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1772–1827 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1772-L1827)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 992–1011 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L992-L1011)
- [scripts/settings/buff/weapon_buff_templates.lua，第 235–260 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L260)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua，第 443–460 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L460)
- [scripts/extension_systems/buff/buffs/interval_buff.lua，第 17–64 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua，第 59–68 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua，第 443–466 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466)
- [scripts/utilities/attack/power_level.lua，第 21–23 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua，第 63–94 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L94)
- [scripts/utilities/attack/damage_profile.lua，第 377–444 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L377-L444)
- [scripts/settings/damage/power_level_settings.lua，第 7–29 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 流血實際傷害不能只由層數換算；目標護甲、受擊修正與傷害 profile 都會影響結果。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_hits_cause_bleed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/8378bd8a-7c90-41fd-83c7-40c135c75caa)

圖片僅供技能辨識，不作機制證據。

