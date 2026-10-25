# 秘密特工(Covert Operative)：原始碼依據

[English](en/veteran_increased_damage_when_flanking.md)

[返回玩家說明](README.md#veteran_increased_damage_when_flanking)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_increased_damage_when_flanking`；名稱鍵：`loc_talent_veteran_2_tier_1_name_3`；描述鍵：`loc_talent_zealot_increased_flanking_damage_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L2040-L2066)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3113-L3135)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

allow_flanking加flanking_damage=0.3；AttackPositioning只允許attack_type=ranged，射擊方向與目標朝向dot>0，嚴格後半平面。DamageCalculation對先前算出的damage另加damage*(flanking_damage-1)，不能併成一般damage_stat_buffs。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 3113–3135 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3113-L3135)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3512–3521 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3512-L3521)
- [scripts/utilities/attack/attack_positioning.lua，第 9–65 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)
- [scripts/utilities/attack/damage_calculation.lua，第 88–101 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L88-L101)
- [scripts/utilities/attack/damage_calculation.lua，第 857–862 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L857-L862)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increased_damage_when_flanking.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/e836f77f-9bb2-4b87-938a-3bab63656ff1)

圖片僅供技能辨識，不作機制證據。

