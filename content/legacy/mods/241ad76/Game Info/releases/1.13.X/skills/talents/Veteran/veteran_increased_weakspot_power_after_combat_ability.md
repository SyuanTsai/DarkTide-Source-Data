# 鷹眼(Marksman)：原始碼依據

[English](en/veteran_increased_weakspot_power_after_combat_ability.md)

[返回玩家說明](README.md#veteran_increased_weakspot_power_after_combat_ability)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_increased_weakspot_power_after_combat_ability`；名稱鍵：`loc_talent_veteran_ability_marksman`；描述鍵：`loc_talent_veteran_ability_marksman_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1199-L1226)：`ability_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1345-L1389)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 觸發與計時

- 非隱身能力經 veteran_buffs_after_combat_ability，隱身則在 invisibility.start_func 加入本buff。duration=10、max_stacks=max_stacks_cap=1、weakspot_power_level_modifier=.2。
- VeteranStealthBonusesBuff 在首次不處於隱身時才設 _stop_t=t+10。一般refresh只重設_start_time，不改_stop_t或_in_invisibility，因此已開始的10秒不會被再次施放重設。

## 威力、傷害及踉蹌算例

- weakspot_power_level_modifier 是 additive_multiplier；PowerLevel.power_level_buff_modifier 只在 weakspot_or_nil 時納入，與其他同階段威力加成相加。曲線預設 ratio=10、native_ratio=10，故此例500經曲線仍為500，再乘1.2成600。
- 使用遊戲預設 attack distribution=100、無甲ADM=1、damage_output=0..20、max_power_level=10000、命中區倍率1，並排除額外finesse與其他傷害倍率的基礎階段：原值20×(500×100)/10000=100；加入天賦20×(600×100)/10000=120。已有25%威力時由100×1.25=125變為100×1.45=145。
- 這是固定參數的可重算基準，並非具名武器實測，也不是在所有其他威力加成之外再乘最終傷害1.2。實際弱點、暴擊及部位結算仍要繼續沿用該武器公式。
- StaggerCalculation 將hit_weakspot傳入impact威力計算。預設impact distribution=5、無甲stagger output0..20、其餘倍率1：20×(500×5)/10000=5，加入本效果後為20×(600×5)/10000=6。之後仍會經敵人抗性、門檻與狀態判定，不等於踉蹌時間增加20%。
- DamageProfile.max_hit_mass 在cleave威力計算中明確傳weakspot=nil，本buff不增加cleave budget。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1345–1389 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1345-L1389)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1977–2014 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1977-L2014)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2048–2063 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2048-L2063)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1227–1229 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1227-L1229)
- [scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua，第 15–44 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L15-L44)
- [scripts/utilities/attack/power_level.lua，第 26–59 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L26-L59)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2048–2063 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2048-L2063)
- [scripts/settings/buff/buff_settings.lua，第 1030–1057 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1030-L1057)
- [scripts/extension_systems/buff/buffs/buff.lua，第 689–727 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/attack/power_level.lua，第 21–23 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua，第 25–91 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/utilities/attack/damage_profile.lua，第 29–34 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L34)
- [scripts/utilities/attack/damage_profile.lua，第 386–445 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L445)
- [scripts/utilities/attack/damage_calculation.lua，第 219–228 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228)
- [scripts/utilities/attack/damage_calculation.lua，第 587–615 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L615)
- [scripts/utilities/attack/damage_calculation.lua，第 672–710 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L710)
- [scripts/settings/damage/power_level_settings.lua，第 7–25 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/settings/damage/power_level_settings.lua，第 55–62 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L55-L62)
- [scripts/settings/damage/power_level_settings.lua，第 89–122 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L89-L122)
- [scripts/settings/damage/power_level_settings.lua，第 93–114 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L93-L114)
- [scripts/utilities/attack/stagger_calculation.lua，第 67–92 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L92)
- [scripts/utilities/attack/damage_profile.lua，第 36–48 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L48)
- [scripts/extension_systems/buff/buffs/buff.lua，第 619–639 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L639)

## 百分比與實際傷害增幅

- **分類釐清**：weakspot_power_level_modifier=.20在PowerLevel階段生效，不是_finesse_boost_damage內的weakspot_damage。不能把堅定不移的0.30F/(B+F)公式直接套到鷹眼。
- **程式推導**：沿用本文件已列的線性預設基準，原有25%威力時125→145，相對增幅20/125=16%；100→120只涵蓋無既有威力加成的基礎傷害階段。武器profile的min/max、finesse下限、護甲與命中部位仍須按完整流程計算，不能保證每把武器最終傷害都增加20%。

- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2048–2063 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2048-L2063)
- [scripts/utilities/attack/power_level.lua，第 26–91 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L26-L91)
- [scripts/utilities/attack/damage_calculation.lua，第 219–228 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 100→120 是使用遊戲預設攻擊分配/未護甲輸出區間，並刻意設為無 finesse/命中區倍率差的可重算基準，不是具名武器的實測傷害。
- impact/stagger 的數值會再受目標護甲修正、stagger buff、stagger count、threshold/resistance 影響；弱點 power 改的是輸入 power level，不是保證控場時間 +20%。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_increased_weakspot_power_after_combat_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/fc16005a-fb09-4db6-bd15-e18d45c6d935)

圖片僅供技能辨識，不作機制證據。

