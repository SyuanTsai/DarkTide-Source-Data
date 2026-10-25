# 穿透火焰：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Flamer P1等級、description formatter與tier覆寫 | [Flamer P1等級、description formatter與tier覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L309-L376) |
| Force Staff P2等級、description formatter與tier覆寫 | [Force Staff P2等級、description formatter與tier覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L273-L340) |
| Flamer P1 wrapper clone | [Flamer P1 wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L61) |
| Force Staff P2 wrapper clone | [Force Staff P2 wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L43) |
| 共用直接火焰命中proc | [共用直接火焰命中proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L580-L594) |
| 目標脆弱Buff數值 | [目標脆弱Buff數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L388-L397) |
| 目標狀態施加與target alive | [目標狀態施加與target alive](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L90) |
| 持用槽條件 | [持用槽條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 目標為minion檢查 | [目標為minion檢查](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L606-L616) |
| 共同堆疊和刷新 | [共同堆疊和刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L457) |
| 滿層仍刷新期限 | [滿層仍刷新期限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589) |
| 直接命中送出事件 | [直接命中送出事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/flamer_action.lua#L14-L54) |
| 噴火器Gas/Burst直接命中 | [噴火器Gas/Burst直接命中](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L317-L320) |
| 噴火器燒傷DoT獨立加層 | [噴火器燒傷DoT獨立加層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L376-L382) |
| Flamer Burst直接命中 | [Flamer Burst直接命中](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L282-L285) |
| Force Staff短按burst | [Force Staff短按burst](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L268-L276) |
| Force Staff蓄力flame | [Force Staff蓄力flame](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L447-L458) |
| UI家族型式標記組名 | [UI家族型式標記組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱key讀取 | [UI名稱key讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| 傷害結算讀取目標撕裂 | [傷害結算讀取目標撕裂](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) |
| 裝甲倍率與撕裂溢出 | [裝甲倍率與撕裂溢出](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L65-L109) |
| 分類溢出係數 | [分類溢出係數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24) |
| Flamer P1 Gas action | [Flamer P1 Gas action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L229) |
| Flamer P1 Burst action | [Flamer P1 Burst action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L296) |
| Flamer P1 trait import | [Flamer P1 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| Flamer P1 trait keys and append | [Flamer P1 trait keys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
| Force Staff P2 trait import | [Force Staff P2 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13) |
| Force Staff P2 trait keys and append | [Force Staff P2 trait keys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223-L1225) |
| Proc queue processing | [Proc queue processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L307-L338) |
| Shared buff expiration | [Shared buff expiration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L43) |
| Flamer trait import | [Flamer trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| Flamer trait append | [Flamer trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
| Staff trait import | [Staff trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13) |
| Staff trait append | [Staff trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223-L1225) |
| Trait registry | [Trait registry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua#L41-L43) |
| Buff registry | [Buff registry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_templates.lua#L72-L74) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 兩個武器專屬Buff都clone同一個base模板。Base只聽proc_events.on_direct_flamer_hit，事件值為1；持用槽條件為is_item_slot_wielded，目標檢查為attacked_unit_is_minion，並將rending_burn_debuff加到目標。base的target_buff_data.max_stacks=31不是目標的實際上限。[base proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L580-L594)。

- FlamerAction.damage_target先執行直接RangedAction傷害；有直接命中結果後才向攻擊者BuffExtension送出on_direct_flamer_hit。Flamer Gas action及Burst action都呼叫此直接傷害helper。燒傷DoT堆疊由另一段add_internally_controlled_buff_with_stacks加入，與直接命中事件分開；因此DoT跳傷不會再次發出這個proc事件。[直接命中與事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/flamer_action.lua#L14-L54)、[Gas直接命中及DoT堆疊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L317-L320)、[Burst直接命中](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L282-L285)、[獨立DoT加入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L376-L382)。

- 烈焰力場法杖將短按火焰爆發設為flamer_gas_burst，蓄力火焰攻擊設為flamer_gas；兩者直接命中都走上述helper。蓄力狀態本身沒有on_direct_flamer_hit事件。[法杖短按動作](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L268-L276)、[蓄力火焰動作](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L447-L458)。淨化噴火器的兩種火焰動作也使用flamer_gas_burst與flamer_gas。[噴火器動作](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L229-L229)。

- 目標Buff rending_burn_debuff每層提供0.01 rending_multiplier，duration=5、max_stacks=20，並設refresh_duration_on_stack=true。相同目標Buff依template name堆疊並共用倒數；滿層新增時仍刷新期限。脆弱位於目標身上，後續合格攻擊可受益，不要求仍持有施加祝福的武器。[目標Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L388-L397)、[共享堆疊與刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L457)、[滿層刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)。

- 目標脆弱以target_stat_buffs.rending_multiplier進入共用撕裂公式，其他符合條件的來源先相加，總撕裂上限為1；裝甲分類係數與溢出效率再決定裝甲階段倍率。[撕裂結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)。

- 直接火焰傷害先執行，再以 request_proc_event_param_table/add_proc_event 排入 on_direct_flamer_hit；ProcBuff 處理時重新檢查持用條件，新增層數不回溯當次傷害。

- 對一次合格直接命中，層數增量q依等級為1、2、3、4；目前層數n更新為n'=min(n+q,20)，脆弱B=0.01n'。直接傷害先結算，再排入 proc 事件；新增層數不回溯當次直接傷害。DoT 跳傷不發出此事件。

- 其他撕裂來源合計R₀時，總撕裂R=min(R₀+B,1)。令k為裝甲係數（armored、super_armor、resistant、berserker為1，其餘為0），o為溢出效率（前述四類為0.25，其餘為0），x=kR。令A為原裝甲倍率、D為裝甲結算前傷害：若A≥1，F=A+xo；若A<1且x>1−A，F=1+(x−(1−A))o；否則F=A+x。此階段傷害為D×F，後續部位、弱點與減傷另算。

- 例：A=0.1、D=100、B=0.2、k=1時，F=0.3，該階段傷害30；A=0.9、D=100、B=0.2、o=0.25時，F=1+(0.2−0.1)×0.25=1.025，該階段傷害102.5。無護甲係數類別k=0時，此筆脆弱不改變A。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_164`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_164.png)｜[Issue附件](https://github.com/user-attachments/assets/0836e233-112e-4757-85cb-ee040d1bd4f7)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 淨化噴火器等級覆寫 | [淨化噴火器等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L309-L380) |
| 淨化噴火器Buff接入 | [淨化噴火器Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L61-L63) |
| UI 淨化噴火器 | [UI 淨化噴火器](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L792) |
| 淨化噴火器 奧特米亞 Mk III匯入 | [淨化噴火器 奧特米亞 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| 淨化噴火器 奧特米亞 Mk III接入 | [淨化噴火器 奧特米亞 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
| 烈焰力場法杖等級覆寫 | [烈焰力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L273-L342) |
| 烈焰力場法杖Buff接入 | [烈焰力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L43) |
| UI 烈焰力場法杖 | [UI 烈焰力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L818) |
| 烈焰力場法杖 裂隙避難所 Mk II匯入 | [烈焰力場法杖 裂隙避難所 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13) |
| 烈焰力場法杖 裂隙避難所 Mk II接入 | [烈焰力場法杖 裂隙避難所 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223-L1225) |
