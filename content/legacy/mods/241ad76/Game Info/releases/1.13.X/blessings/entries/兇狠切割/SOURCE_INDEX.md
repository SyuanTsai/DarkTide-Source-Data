# 兇狠切割：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own I–IV tier and formatter | [Own I–IV tier and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p1.lua#L472-L511) |
| Own parent and proc-event configuration | [Own parent and proc-event configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p1_buff_templates.lua#L27-L64) |
| Own child stat fallback and gate | [Own child stat fallback and gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p1_buff_templates.lua#L65-L75) |
| Parent initial child and teardown | [Parent initial child and teardown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L55) |
| Proc event batch order | [Proc event batch order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L56-L89) |
| No child-duration timer; parent update path | [No child-duration timer; parent update path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L90-L133) |
| Child add/remove lifecycle | [Child add/remove lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L182) |
| No cooldown means proc can activate | [No cooldown means proc can activate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| Singular/plural proc callback API | [Singular/plural proc callback API](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L318-L341) |
| Parent override context creation | [Parent override context creation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184) |
| Stack offset and physical capacity | [Stack offset and physical capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L429) |
| Only enumerated child stat keys aggregate | [Only enumerated child stat keys aggregate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Weapon trait on-equip installation | [Weapon trait on-equip installation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L145-L206) |
| Weapon equip and wield lifecycle | [Weapon equip and wield lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| Unwield does not unequip the trait | [Unwield does not unequip the trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L778-L785) |
| Attack result precedes buff dispatch | [Attack result precedes buff dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L376-L383) |
| Generic on-hit event conditions | [Generic on-hit event conditions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L623) |
| Player buff event/stat update sequence | [Player buff event/stat update sequence](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Queued proc events | [Queued proc events](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L289) |
| Stat cache rebuild | [Stat cache rebuild](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L318-L354) |
| Impact power converts to stagger inputs | [Impact power converts to stagger inputs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L15-L25) |
| Stagger impact/power calculation | [Stagger impact/power calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L79) |
| Melee impact modifier consumer | [Melee impact modifier consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L203) |
| Stat kind and base value | [Stat kind and base value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L876) |
| Impact modifier baseline | [Impact modifier baseline](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1045-L1054) |
| Sweep start event | [Sweep start event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L280-L311) |
| Sweep finish event | [Sweep finish event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L390-L429) |
| Sweep finish proc dispatch | [Sweep finish proc dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L963) |
| Sweep collision attack | [Sweep collision attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1503) |
| Push action route | [Push action route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L52-L115) |
| Push attack executes as push | [Push attack executes as push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L50-L105) |
| Push profiles have no health attack | [Push profiles have no health attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L82-L141) |
| Mk I light action | [Mk I light action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L147-L162) |
| Mk I heavy action profile | [Mk I heavy action profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L240-L255) |
| Mk I parry follow-up special | [Mk I parry follow-up special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L995-L1060) |
| Mk I push follow-up and pure push | [Mk I push follow-up and pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L1061-L1174) |
| Mk I trait binding | [Mk I trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L1504-L1506) |
| Mk IV light action | [Mk IV light action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L147-L161) |
| Mk IV heavy action profile | [Mk IV heavy action profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L239-L254) |
| Mk IV parry follow-up special | [Mk IV parry follow-up special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L1045-L1107) |
| Mk IV push follow-up and pure push | [Mk IV push follow-up and pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L885-L994) |
| Mk IV trait binding | [Mk IV trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L1437-L1439) |
| Mk VII light action | [Mk VII light action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L147-L160) |
| Mk VII heavy action profile | [Mk VII heavy action profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L238-L253) |
| Mk VII parry follow-up special | [Mk VII parry follow-up special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L789-L851) |
| Mk VII push follow-up and pure push | [Mk VII push follow-up and pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L914-L1044) |
| Mk VII trait binding | [Mk VII trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L1346-L1348) |
| 本項事件／階段／型號／計時差異 | [本項事件／階段／型號／計時差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L124) |
| 本項事件／階段／型號／計時差異 | [本項事件／階段／型號／計時差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L159) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

自訂父增益建立一個零有效層子增益；子增益的 stack_offset=-1 使一個實體佔位不貢獻統計。五個有效子層各重複聚合父祝福所選 tier 的 melee_impact_modifier 值。父模板本身沒有這個統計鍵，因此 tier 不會成為常駐父增益，也不是在子增益 fallback 1 上再加一次 tier。父事件保持持用欄位條件；wrapper 寫成 singular specific_check_proc_func，runtime 只讀 plural specific_check_proc_funcs，所以原定 item-match／active 命中檢查未生效。singular specific_proc_func 則是有效 callback，會執行 sweep start/finish 的 active setter；但該 active 值因檢查表錯鍵而不限制 on-hit。

主控批次與零計时核對：RegularParent56–89在所有ProcBuff事件結束後，先按整批on_hit次數封頂增加，再遇任一start/finish clear移除全部額外層，並非按事件列表每次add/clear交錯。Parent.update92–124只有start_t非0才走期限；own沒有child_duration，_add_child134–159不設定start_t，因此不套其他父類祝福的五秒衰退。已知specific_proc_func callback仍會設定active，但錯鍵specific_check_proc_func未被pluralreader讀取，使active不構成命中閘門；兩個API結論不可混為一談。

令p=.14/.16/.18/.20，n=實際child stack_count−1，範圍0–5；保留實體子層1使有效0，最大實體6使有效5。父模板沒有stat鍵，所以own tier override不自行成為常駐加成；child conditional枚舉melee_impact_modifier時由同名override換成p，再按有效n聚合。令q為已有同類衝擊增量，M=1+q+n*p；原近戰衝擊輸入P0於此乘區變為P0*M。只有事件處理後快取已更新且未被同批start/finish清層才讀到n；此式不是傷害或最終踉蹌公式。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_173`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_173.png)｜[Issue附件](https://github.com/user-attachments/assets/f9d23b25-7f50-4ce8-8e49-00770ecc048b)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 「惡魔之爪」劍等級覆寫 | [「惡魔之爪」劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p1.lua#L472-L511) |
| 「惡魔之爪」劍Buff接入 | [「惡魔之爪」劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p1_buff_templates.lua#L27-L64) |
| UI 「惡魔之爪」劍 | [UI 「惡魔之爪」劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L145) |
| 「惡魔之爪」劍 卡塔昌 Mk I匯入 | [「惡魔之爪」劍 卡塔昌 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L14) |
| 「惡魔之爪」劍 卡塔昌 Mk I接入 | [「惡魔之爪」劍 卡塔昌 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L1504-L1506) |
| 「惡魔之爪」劍 卡塔昌 Mk IV匯入 | [「惡魔之爪」劍 卡塔昌 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L14) |
| 「惡魔之爪」劍 卡塔昌 Mk IV接入 | [「惡魔之爪」劍 卡塔昌 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L1437-L1439) |
| 「惡魔之爪」劍 卡塔昌 Mk VII匯入 | [「惡魔之爪」劍 卡塔昌 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L15) |
| 「惡魔之爪」劍 卡塔昌 Mk VII接入 | [「惡魔之爪」劍 卡塔昌 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L1346-L1348) |
