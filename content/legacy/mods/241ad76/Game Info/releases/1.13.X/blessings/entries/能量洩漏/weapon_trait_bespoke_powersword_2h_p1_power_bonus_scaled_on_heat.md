# 能量洩漏(Energy Leakage)：上古神刃實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_2h_p1_power_bonus_scaled_on_heat`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L11-L53)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L27-L66)。
- 適用型號：上古神刃 軍務部 Mk X、上古神刃 軍務部 Mk II。

## 機制與公式

- 兩trait的`stat_buffs.power_level_modifier`每步覆寫為0.015／0.02／0.03／0.04；formatter用`value×5×100`重建上限7.5／10／15／20%，百分比parser不再乘100。[百分比格式換算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L20)。

- wrapper為`stepped_stat_buff`，`max_stacks=1,stack_offset=-1`使本體有效stack為0，再加`bonus_step_func`回傳值並限制0–5。持用時讀當前wielded_slot的`overheat_current_percentage`，計算`round(clamp01((H−0.1)/0.9)×5)`。[熱量步數與偏移](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L32-L51)、[基礎有效層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L410)、[四捨五入定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/math.lua#L128-L134)。

- 通用Buff的conditional_stat_buffs先取wrapper的power欄位，再用trait override的stat_buffs值取代；依有效step加算`n×p`。SteppedStatBuff的額外stepped_stat_buffs表雖為空，不會抹掉super已計入的conditional加成。[條件覆寫及每步加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)、[步數額外表為空](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L60-L79)。

- `power_level_modifier`為additive_multiplier；一般、近戰、遠程、弱點與其他power類別合併後減去重複預設1，曲線後威力乘該倍率。它沒有melee attack類型限制，但只在本武器slot持用時存在。[一般威力加算類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L926)、[威力同階段合併及曲線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)、[持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

- 傷害、順劈、impact各自把一般power modifier帶入曲線／分配。這是共用威力階段，不是固定加到最終生命傷害的百分比。[傷害分配與順劈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80)、[生命傷害曲線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228)、[踉蹌強度](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L89)。

- wrapper沒有proc event、時間期限或子層計數；每次更新依當下熱量算step。on_equip載入不等於切出清熱，conditional使切出停止加成；切回重新讀本slot熱量。[持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)、[裝備生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211)、[切出生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785)。

- 熱量由充能及散熱鏈變化，stat bonus不要求special_active=true；充能關閉但熱量未散盡時仍可有加成。[充能產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L63)、[自然散熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L149-L171)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"power_level_modifier_per_step": [0.015, 0.02, 0.03, 0.04], "max_steps": 5, "normalized_heat_min": 0.1, "normalized_heat_range": 0.9, "step_rounding": "floor(x+0.5)", "maximum_power_bonus": [0.075, 0.1, 0.15, 0.2]}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
