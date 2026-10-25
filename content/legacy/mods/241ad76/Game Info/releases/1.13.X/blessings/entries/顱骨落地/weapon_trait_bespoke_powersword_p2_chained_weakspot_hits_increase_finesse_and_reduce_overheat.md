# 顱骨落地(Cranial Grounding)：動力彎刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_p2_chained_weakspot_hits_increase_finesse_and_reduce_overheat`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L99-L177)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L148-L183)。
- 適用型號：動力彎刀 阿里丁 Mk I、動力彎刀 執法者 Mk IIb。

## 機制與公式

- 兩trait的parent覆寫`stat_buffs.finesse_modifier_bonus=0.01/0.02/0.03/0.04`、`overheat_amount=0.97/0.96/0.95/0.94`；child從parent_buff_template繼承覆寫，conditional_stat_buffs內逐鍵選取parent覆寫值。[覆寫來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184)、[套用數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)。

- 兩wrapper的parent是`weapon_trait_activated_parent_proc_buff`，監聽`on_hit`；check須`target_number==1 and hit_weakspot`，通過後active_func亦讀hit_weakspot，所以首個合格事件直接加層。body-hit不能通過check，沒有落入active=false清層分支；沒有clear_child_stacks_proc_events或reset_update_func。[activated parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L18-L98)。

- ActionSweep在每個目標處理前增加`num_hit_enemies`，傳給Attack.execute的`target_number`；不是會被無限順劈修改的`target_index`。同次揮擊第一個命中目標才可合格，後續目標不加層。[第一目標計數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1333-L1354)、[傳入target_number](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1499)、[on_hit參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L620)。

- 初始化一個child占位；child`stack_offset=-1,max_stacks=5`使占位有效0層，總child上限6，首次proc加入第二child後有效1層。[初始child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L18-L39)、[有效層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L410)、[加入上限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L61-L72)。

- child_duration3，stacks_to_remove5；超時一次移除全部有效層。滿層加0child仍呼叫_add_child_buff_stack並刷新共同期限。換出只讓持用條件失效，on_equip parent及child保持原計時。[期限移除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L131)、[滿層刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L162)、[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)、[equip掛載](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211)、[unwield](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785)。

- finesse_modifier_bonus是additive_multiplier，n層給`n×p`；DamageCalculation只對crit或weakspot走_finesse_boost_damage，額外部分乘加算後finesse_buff_damage_multiplier，再加回普通部分。不是攻速欄位，也不是整次傷害乘`1+n×p`。[傷害作用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L89-L105)、[弱點與暴擊額外部分](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L724)、[額外倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L749-L782)。

- overheat_amount是multiplicative_multiplier，n層熱量倍率為`m^n`；四型號都指定WeaponSpecialCharging，持續充能呼叫increase_over_time，sweep start的即時產熱也使用charge_template.overheat_overtime。Overheat讀overheat_amount乘各自即時／時間倍率；本祝福沒有decrease_immediate呼叫。[數值乘算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L717-L728)、[充能產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L40)、[開招產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L83-L99)、[即時產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L31-L61)、[時間產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L82-L99)。

- Attack先calculate/deal damage，之後才排入on_hit事件。因此新增層數不能回頭改寫觸發那次命中的傷害。[傷害→事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L353-L383)。

- 百分比格式存在value_manipulation時，直接採它的結果；沒有再乘100。熱量0.94轉為6並加prefix負號，顯示−6%；finesse0.04依一般百分比轉為+4%。[percentage formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L20)、[值讀取與prefix](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L111)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"finesse_modifier_bonus": [0.01, 0.02, 0.03, 0.04], "overheat_amount": [0.97, 0.96, 0.95, 0.94], "max_stacks": 5, "child_duration": 3, "stacks_to_remove": 5}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
