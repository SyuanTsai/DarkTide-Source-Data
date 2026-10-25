# 能量洩漏：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 熱量步數與偏移 | [熱量步數與偏移](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L32-L51) |
| 基礎有效層數 | [基礎有效層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L410) |
| 條件覆寫及每步加算 | [條件覆寫及每步加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 步數額外表為空 | [步數額外表為空](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L60-L79) |
| 四捨五入定義 | [四捨五入定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/math.lua#L128-L134) |
| 一般威力加算類型 | [一般威力加算類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L926) |
| 威力同階段合併及曲線 | [威力同階段合併及曲線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91) |
| 傷害分配與順劈 | [傷害分配與順劈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80) |
| 生命傷害曲線 | [生命傷害曲線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228) |
| 踉蹌強度 | [踉蹌強度](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L89) |
| 持用判定 | [持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 充能產熱 | [充能產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L63) |
| 自然散熱 | [自然散熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L149-L171) |
| 裝備生命週期 | [裝備生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211) |
| 切出生命週期 | [切出生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| 百分比格式換算 | [百分比格式換算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L20) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 兩trait的`stat_buffs.power_level_modifier`每步覆寫為0.015／0.02／0.03／0.04；formatter用`value×5×100`重建上限7.5／10／15／20%，百分比parser不再乘100。[百分比格式換算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L20)。

- wrapper為`stepped_stat_buff`，`max_stacks=1,stack_offset=-1`使本體有效stack為0，再加`bonus_step_func`回傳值並限制0–5。持用時讀當前wielded_slot的`overheat_current_percentage`，計算`round(clamp01((H−0.1)/0.9)×5)`。[熱量步數與偏移](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L32-L51)、[基礎有效層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L410)、[四捨五入定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/math.lua#L128-L134)。

- 通用Buff的conditional_stat_buffs先取wrapper的power欄位，再用trait override的stat_buffs值取代；依有效step加算`n×p`。SteppedStatBuff的額外stepped_stat_buffs表雖為空，不會抹掉super已計入的conditional加成。[條件覆寫及每步加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)、[步數額外表為空](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L60-L79)。

- `power_level_modifier`為additive_multiplier；一般、近戰、遠程、弱點與其他power類別合併後減去重複預設1，曲線後威力乘該倍率。它沒有melee attack類型限制，但只在本武器slot持用時存在。[一般威力加算類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L926)、[威力同階段合併及曲線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)、[持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

- 傷害、順劈、impact各自把一般power modifier帶入曲線／分配。這是共用威力階段，不是固定加到最終生命傷害的百分比。[傷害分配與順劈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80)、[生命傷害曲線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228)、[踉蹌強度](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L89)。

- wrapper沒有proc event、時間期限或子層計數；每次更新依當下熱量算step。on_equip載入不等於切出清熱，conditional使切出停止加成；切回重新讀本slot熱量。[持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)、[裝備生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211)、[切出生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785)。

- 熱量由充能及散熱鏈變化，stat bonus不要求special_active=true；充能關閉但熱量未散盡時仍可有加成。[充能產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L63)、[自然散熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L149-L171)。

- 設熱量`H∈[0,1]`、每步威力覆寫`p`；`x=clamp((H−0.1)/0.9,0,1)`，`n=clamp(floor(5x+0.5),0,5)`，加成`b=n×p`。

- 正數四捨五入的代數門檻`Hₙ=0.1+0.9×(n−0.5)/5`，`n=1…5`得到0.19／0.37／0.55／0.73／0.91。實際以浮點熱量套用math.round；玩家頁以約值標示門檻，不把畫面整數熱量當成內部精確值。

- IV級`p=0.04`：H=0.50→n2→0.08；0.60→n3→0.12；0.95→n5→0.20；0.30→n1→0.04；0.10→n0。

- 若曲線後威力為`P*`、其他同階段威力加成總和`s`，生效前`P₀=P*×(1+s)`，生效後`P₁=P*×(1+s+n×p)`，相對威力收益`n×p÷(1+s)`。

- `P*=500,s=0`時，IV級50／60／95%熱量分別540／560／600；`s=0.25,n=5`則625→725，相對增加16%。

- 傷害之後依profile power分配與目標護甲曲線；順劈與impact也有各自分配與輸出。因此以上是同階段威力算例，未冒充固定傷害或保證敵人必定踉蹌。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_238`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_238.png)｜[Issue附件](https://github.com/user-attachments/assets/8709846a-8fcd-47ed-8a5b-6d57b666b45e)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 上古神刃等級覆寫 | [上古神刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L11-L53) |
| 上古神刃Buff接入 | [上古神刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L27-L66) |
| UI 上古神刃 | [UI 上古神刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L498) |
| 上古神刃 軍務部 Mk X匯入 | [上古神刃 軍務部 Mk X匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L15) |
| 上古神刃 軍務部 Mk X接入 | [上古神刃 軍務部 Mk X接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L2302-L2304) |
| 上古神刃 軍務部 Mk II匯入 | [上古神刃 軍務部 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L14) |
| 上古神刃 軍務部 Mk II接入 | [上古神刃 軍務部 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L2455-L2457) |
| 動力彎刀等級覆寫 | [動力彎刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L11-L53) |
| 動力彎刀Buff接入 | [動力彎刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L27-L66) |
| UI 動力彎刀 | [UI 動力彎刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L534) |
| 動力彎刀 阿里丁 Mk I匯入 | [動力彎刀 阿里丁 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L11) |
| 動力彎刀 阿里丁 Mk I接入 | [動力彎刀 阿里丁 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L1741-L1743) |
| 動力彎刀 執法者 Mk IIb匯入 | [動力彎刀 執法者 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L11) |
| 動力彎刀 執法者 Mk IIb接入 | [動力彎刀 執法者 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L2023-L2025) |
