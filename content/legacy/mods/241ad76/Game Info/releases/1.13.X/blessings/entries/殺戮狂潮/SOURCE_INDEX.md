# 殺戮狂潮：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own I-IV tier and formatter | [Own I-IV tier and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua#L320-L362) |
| Own wrapper parent clone, child alias overwrite and percentage child clone | [Own wrapper parent clone, child alias overwrite and percentage child clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p2_buff_templates.lua#L20-L22) |
| Actual on-kill parent and gates | [Actual on-kill parent and gates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1009-L1039) |
| Unused legacy guaranteed-crit keyword effect | [Unused legacy guaranteed-crit keyword effect](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1040-L1057) |
| Actual percentage child | [Actual percentage child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1058-L1075) |
| on_kill requires death | [on_kill requires death](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L60-L66) |
| weakspot kill requires death and hit_weakspot | [weakspot kill requires death and hit_weakspot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L84-L94) |
| melee crit gate | [melee crit gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L388-L390) |
| exact source-item match | [exact source-item match](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| held source-slot condition | [held source-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| kill event payload | [kill event payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L710) |
| sweep action-start crit sampling | [sweep action-start crit sampling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L225) |
| sweep-start event | [sweep-start event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L282-L298) |
| sweep hit reuses stored crit and uses melee type | [sweep hit reuses stored crit and uses melee type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1330-L1360) |
| crit priority at action start | [crit priority at action start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| crit chance sum, clamp and conversion | [crit chance sum, clamp and conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| effective stack clamp | [effective stack clamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L429) |
| raw set-stack behavior | [raw set-stack behavior](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L469-L515) |
| internal multi-stack addition | [internal multi-stack addition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L416) |
| internal existing child add and refresh flags | [internal existing child add and refresh flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L463) |
| internal child admission | [internal child admission](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L384-L410) |
| distinct max-stacks-cap gate | [distinct max-stacks-cap gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L590) |
| child stat aggregation and lack of held predicate | [child stat aggregation and lack of held predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| parent_buff_template used for override lookup | [parent_buff_template used for override lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184) |
| five-second duration expiry | [five-second duration expiry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44) |
| player buff fixed-update order | [player buff fixed-update order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| proc event buffer/list snapshot | [proc event buffer/list snapshot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L285) |
| finished buff removal pass | [finished buff removal pass](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L207) |
| stat cache visits current buff objects | [stat cache visits current buff objects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L353) |
| independent internal child insertion | [independent internal child insertion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L209-L227) |
| on-equip buff removal on unequip | [on-equip buff removal on unequip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L652-L681) |
| weapon removal scope is tracked external slots | [weapon removal scope is tracked external slots](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1290-L1324) |
| buff system configured before weapon system | [buff system configured before weapon system](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L308-L320) |
| weapon system config order | [weapon system config order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L511-L524) |
| extension-system list construction order | [extension-system list construction order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L58-L105) |
| extension-system fixed-update dispatch order | [extension-system fixed-update dispatch order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L125-L183) |
| Atrox Mk II first light/heavy chain | [Atrox Mk II first light/heavy chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L133-L390) |
| Atrox Mk II second light/heavy chain | [Atrox Mk II second light/heavy chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L391-L614) |
| Atrox Mk II third light/push-follow chain | [Atrox Mk II third light/push-follow chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L615-L891) |
| Atrox Mk II pure push | [Atrox Mk II pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L892-L945) |
| Atrox Mk II special sweeps | [Atrox Mk II special sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L946-L1166) |
| Atrox Mk IV first light/heavy chain | [Atrox Mk IV first light/heavy chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L133-L384) |
| Atrox Mk IV second light/heavy chain | [Atrox Mk IV second light/heavy chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L385-L606) |
| Atrox Mk IV third light/push-follow chain | [Atrox Mk IV third light/push-follow chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L607-L877) |
| Atrox Mk IV pure push | [Atrox Mk IV pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L878-L931) |
| Atrox Mk IV special sweeps | [Atrox Mk IV special sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L932-L1189) |
| Atrox Mk VII first light/heavy chain | [Atrox Mk VII first light/heavy chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L83-L339) |
| Atrox Mk VII second light/heavy chain | [Atrox Mk VII second light/heavy chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L340-L557) |
| Atrox Mk VII third light/push-follow chain | [Atrox Mk VII third light/push-follow chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L558-L826) |
| Atrox Mk VII pure push | [Atrox Mk VII pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L827-L879) |
| Atrox Mk VII special sweeps | [Atrox Mk VII special sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L880-L1074) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Own wrapper把generic on_kill父模板的internal child alias改成本trait effect_percentage child；名稱中的 guaranteed 不代表路徑授予 guaranteed-critical keyword。父效果只在事件處理時同時通過來源item相同、來源slot仍持用、攻擊結果死亡、近戰暴擊旗標為真、命中弱點才加child stacks；沒有weapon_special條件。

- 實際child為內部proc_buff，duration=5、max_stacks=10、每有效stack的 melee_critical_strike_chance=.1，on_sweep_start設定finish。每次tier kill會執行4/6/8/10次內部stack add；統計套用的有效stack數clamp到10，故機率有效上限+1.0。raw內部counter可繼續加但不增加有效stat。child未設refresh-duration flags，重複kill不重置第一個child的5秒起點。

- child的parent_buff_template只用於item trait override查找，不是生命週期連結；child沒有held predicate。切出或卸下來源物件會阻止新的parent proc／移除on_equip parent，但不會同步移除既有child。既有加成可在切換後被另一把武器的近戰揮擊讀取。

- 三個Mark的一般輕擊、蓄力重擊、push-follow與特殊攻擊都使用ActionSweep；純push是push action，不是melee critical sweep。觸發檢查的是melee crit＋weakspot death，不檢查weapon_special旗標。三個實際weapon templates無遠程、投射物或DoT路徑。

- ActionSweep在start時計算並保存本動作暴擊旗標，再排入on_sweep_start。當下及同一sweep後續命中都讀取該旗標，後來的擊殺事件不會改寫當次攻擊。buff fixed update先清理，再處理proc events，再重建stat cache。新child在parent處理on_kill時才加到buff list，該輪已snapshot的buff迭代不會讓它處理舊的同批sweep-start事件。若child在這批事件開始前已存在，parent可先對on_kill加stack，child隨後處理on_sweep_start並標finish；本輪stat rebuild仍有該child，下一次buff update才刪除。故不宣稱同步刪除或保證極快同frame第二個sweep的結果。

- P = clamp(P_base + P_generic + P_melee + P_weapon-handling + n×0.10, 0, 1) × (1−critical_strike_chance_to_damage_convert)，n為child有效stack。動作開始時先檢查禁止暴擊：符合時機率為0。沒有禁止條件，再檢查保證暴擊keyword／動作自動暴擊，符合時為1；兩者均未命中才用上述普通機率公式。

- 前提：基礎近戰暴擊機率5%，既有其他加算來源q=10個百分點，無武器操作修正、無暴擊機率轉傷害、沒有防暴擊或保證暴擊條件。

- II級：6層×每層0.10=+0.60。原值clamp(5%+10%,0,100%)=15%；加入後clamp(5%+10%+60%,0,100%)=75%。本祝福增加60個百分點；相對原15%是400%增加（最終為原來5倍），不是對既有暴擊率乘1.6，也不是傷害增加60%。
- IV級：10層×0.10=+1.00。以5%基礎且q=0、無轉換為例，clamp(5%+100%,0,100%)=100%暴擊機率；若有暴擊機率轉傷害轉換，會在clamp後再乘(1−轉換值)，所以不能一概說最後必定100%。

- 這是送入暴擊判定的機率值，不代表線性傷害增幅；其他暴擊旗標和下游傷害另行生效。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_191`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_191.png)｜[Issue附件](https://github.com/user-attachments/assets/8e6c5fe7-7b0f-4912-95bb-f139924250e7)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 戰術斧等級覆寫 | [戰術斧等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua#L320-L362) |
| 戰術斧Buff接入 | [戰術斧Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p2_buff_templates.lua#L20-L22) |
| UI 戰術斧 | [UI 戰術斧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L81) |
| 戰術斧 埃托克斯 Mk II匯入 | [戰術斧 埃托克斯 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L13) |
| 戰術斧 埃托克斯 Mk II接入 | [戰術斧 埃托克斯 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L1450-L1452) |
| 戰術斧 埃托克斯 Mk IV匯入 | [戰術斧 埃托克斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L13) |
| 戰術斧 埃托克斯 Mk IV接入 | [戰術斧 埃托克斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L1491-L1493) |
| 戰術斧 埃托克斯 Mk VII匯入 | [戰術斧 埃托克斯 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L13) |
| 戰術斧 埃托克斯 Mk VII接入 | [戰術斧 埃托克斯 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L1358-L1360) |
