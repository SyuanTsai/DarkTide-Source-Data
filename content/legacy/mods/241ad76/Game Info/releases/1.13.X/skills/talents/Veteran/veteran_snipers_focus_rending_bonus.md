# 滲透盔甲(Chink in their Armour)：原始碼依據

[English](en/veteran_snipers_focus_rending_bonus.md)

[返回玩家說明](README.md#veteran_snipers_focus_rending_bonus)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_snipers_focus_rending_bonus`；名稱鍵：`loc_talent_veteran_snipers_focus_rending_bonus`；描述鍵：`loc_talent_veteran_snipers_focus_rending_bonus_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1741-L1763)：`keystone_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2627-L2655)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

天賦安裝 veteran_snipers_focus_rending_bonus 特殊規則。層數由低於10跨到至少10時，安裝 rending_multiplier=0.15；低於10或主增益結束時移除。門檻常數仍為10，不隨15層升級改變。撕裂先合併各來源，再限制至1；護甲類型修正由 ArmorSettings 決定。主文範例指定甲殼護甲、原倍率0.5，避免誤當成所有最終傷害乘1.15。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2627–2655 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2627-L2655)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2707–2753 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2707-L2753)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2903–2910 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2903-L2910)
- [scripts/settings/buff/buff_settings.lua，第 961–961 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L961-L961)
- [scripts/utilities/attack/damage_calculation.lua，第 629–660 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/utilities/attack/damage_calculation.lua，第 69–87 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L87)
- [scripts/settings/damage/armor_settings.lua，第 8–19 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19)

## 百分比與實際傷害增幅

- **程式推導**：達10層的buff給rending_multiplier=.15。玩家例只隔離這項撕裂；固定非暴擊、非弱點、護甲前傷害100、super_armor，無後續倍率。ADM=.5時50→65（30%），ADM=.8時80→95（18.75%）；ADM=.5且已有.1撕裂時60→75（25%）。
- 實際使用常伴隨狙擊專注，但finesse僅在暴擊或弱點命中時結算，因此以上非finesse攻擊可隔離護甲階段。暴擊/弱點時須再加入狙擊專注及其他finesse加成，不能把15%撕裂當成整筆增傷或把30%當作完整配置的固定增幅。

- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2903–2910 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2903-L2910)
- [scripts/settings/damage/armor_settings.lua，第 8–19 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19)
- [scripts/utilities/attack/damage_calculation.lua，第 69–95 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L95)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_snipers_focus_rending_bonus.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/136d0a92-5459-4218-a2b3-324f367ba69d)

圖片僅供技能辨識，不作機制證據。

