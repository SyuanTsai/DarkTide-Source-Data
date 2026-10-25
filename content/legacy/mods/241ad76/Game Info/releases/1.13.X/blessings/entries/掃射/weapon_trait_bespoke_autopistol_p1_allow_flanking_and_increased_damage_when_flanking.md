# 掃射(Raking Fire)：撕裂者自動手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_autopistol_p1_allow_flanking_and_increased_damage_when_flanking`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autopistol_p1.lua#L261-L300)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autopistol_p1_buff_templates.lua#L32)。
- 適用型號：撕裂者自動手槍 尤斯 Mk IV。

## 機制與公式

- 三個實作均clone共用allow_flanking_and_increased_damage_when_flanking；conditional_keywords含allow_flanking，conditional_stat_buffs預設flanking_damage0.5被各trait stat_buffs覆寫為0.325/0.35/0.375/0.4。[共用持用背擊效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1529-L1540)、[條件數值與trait覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)。

- conditional_keywords_func在未指定時沿用conditional_stat_buffs_func，故關鍵字與數值同受is_item_slot_wielded控制；切出不提供keyword或flanking_damage。[持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)、[關鍵字共用持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L135-L142)、[條件關鍵字套用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L841)。

- is_flanking只接受attack_types.ranged；target forward投影到水平面並normalize，攻擊方向dot target forward嚴格大於0才是背面半圈；dot=0不含在內。再要求攻擊者擁有allow_flanking才返回effective_flanking，Attack把effective值交給DamageCalculation。[遠程背面判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)、[有效背面判定傳入結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L227-L233)、[傷害消費有效判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L350-L354)。

- flanking_damage為additive_multiplier，基底1，trait數值加到現有倍率。DamageCalculation先加入finesse_boost_damage，再用該damage求flank增量，之後才做hit-zone、DoT與後續倍率。[加算型別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L815-L821)、[加算初始值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058)、[先精準後背面加成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L89-L109)、[背面傷害增量](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L857-L861)。

- 共用template class_name=buff，沒有proc_events、duration、cooldown或擊殺條件；持用加成與方向判定不需要hit-combo或疊層。[共用持用背擊效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1529-L1540)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"stat_buffs": {"flanking_damage": [0.325, 0.35, 0.375, 0.4]}, "keyword": "allow_flanking", "condition": "item_slot_wielded and ranged attack with dot(attack_direction,target_forward)>0", "stacking": "constant one effect; additive with other flanking_damage"}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
