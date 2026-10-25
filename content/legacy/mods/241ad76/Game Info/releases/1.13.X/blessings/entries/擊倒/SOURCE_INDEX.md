# 擊倒：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Knife I-IV tier/formatter | [Knife I-IV tier/formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L452-L503) |
| Knife wrapper | [Knife wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L22-L26) |
| Club I-IV tier/formatter | [Club I-IV tier/formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L367-L416) |
| Club wrapper | [Club wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L19-L21) |
| Shared parent and child | [Shared parent and child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2544-L2570) |
| Parent class inheritance | [Parent class inheritance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L1-L9) |
| Parent placeholder initialization | [Parent placeholder initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L40) |
| Parent event add cap | [Parent event add cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L56-L90) |
| Parent strict expiry | [Parent strict expiry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L123) |
| Parent timer helper | [Parent timer helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L163) |
| ProcBuff active eligibility | [ProcBuff active eligibility](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| ProcBuff accepted event time | [ProcBuff accepted event time](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| Buff parent override context | [Buff parent override context](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184) |
| Buff effective stack count | [Buff effective stack count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L429) |
| Buff conditional stat map override | [Buff conditional stat map override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Held item slot predicate | [Held item slot predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Attacking item predicate | [Attacking item predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Melee special predicate | [Melee special predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L384-L386) |
| Current stagger predicate | [Current stagger predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L537-L541) |
| Combined stagger special condition | [Combined stagger special condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L572-L574) |
| Current minion stagger state | [Current minion stagger state](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L57-L72) |
| Pre-hit state snapshot | [Pre-hit state snapshot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L289-L315) |
| HitReaction before buff handling | [HitReaction before buff handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L376-L383) |
| HitReaction stagger call | [HitReaction stagger call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_reaction.lua#L113-L119) |
| Stagger state update | [Stagger state update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger.lua#L181-L196) |
| Attack on-hit event fields | [Attack on-hit event fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L579-L621) |
| Action start crit roll | [Action start crit roll](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| Sweep start crit check | [Sweep start crit check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L217-L225) |
| Sweep attack type and saved crit | [Sweep attack type and saved crit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1330-L1360) |
| Crit chance consumer | [Crit chance consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| Slot equip and actual unequip | [Slot equip and actual unequip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L681) |
| Slot wield transition | [Slot wield transition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L685-L693) |
| Slot unwield transition | [Slot unwield transition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Knife M1 ordinary action chains | [Knife M1 ordinary action chains](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L124-L831) |
| Knife M1 push | [Knife M1 push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L832-L880) |
| Knife M1 jab special | [Knife M1 jab special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L881-L957) |
| Knife M1 jab follow-up | [Knife M1 jab follow-up](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1006-L1118) |
| Knife M2 ordinary action chains | [Knife M2 ordinary action chains](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L124-L828) |
| Knife M2 push | [Knife M2 push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L829-L956) |
| Knife M2 jab special | [Knife M2 jab special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L957-L1032) |
| Knife M2 jab follow-up | [Knife M2 jab follow-up](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1080-L1193) |
| Bound knife profiles | [Bound knife profiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L71-L580) |
| Club M1 ordinary chains | [Club M1 ordinary chains](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L123-L839) |
| Club M1 push/follow | [Club M1 push/follow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L840-L973) |
| Club M1 special slaps | [Club M1 special slaps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L974-L1163) |
| Club M2 ordinary chains | [Club M2 ordinary chains](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L123-L851) |
| Club M2 push/follow | [Club M2 push/follow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L852-L984) |
| Club M2 special slaps | [Club M2 special slaps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L985-L1167) |
| Club M2 special-chain punch | [Club M2 special-chain punch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L1168-L1313) |
| Club M3 ordinary chains | [Club M3 ordinary chains](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L123-L882) |
| Club M3 special slaps | [Club M3 special slaps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L883-L1065) |
| Club M3 same-named punch | [Club M3 same-named punch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L1066-L1206) |
| Club M3 push/follow | [Club M3 push/follow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L1257-L1395) |
| Club slap profile | [Club slap profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L668-L705) |
| Club M2 punch profile | [Club M2 punch profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L745-L752) |
| Club M3 regular light profile | [Club M3 regular light profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L932-L941) |
| Unrouted club uppercut profile | [Unrouted club uppercut profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L1068-L1076) |
| 戰刃 卡塔昌 Mk III匯入 | [戰刃 卡塔昌 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L15) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1434-L1436) |
| 戰刃 卡塔昌 Mk VI匯入 | [戰刃 卡塔昌 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L15) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1524-L1526) |
| 惡霸棍棒 「布倫特專用」 Mk I匯入 | [惡霸棍棒 「布倫特專用」 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L15) |
| 惡霸棍棒 「布倫特專用」 Mk I接入 | [惡霸棍棒 「布倫特專用」 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L1380-L1382) |
| 惡霸棍棒 「布倫特得意之作」 Mk II匯入 | [惡霸棍棒 「布倫特得意之作」 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L15) |
| 惡霸棍棒 「布倫特得意之作」 Mk II接入 | [惡霸棍棒 「布倫特得意之作」 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L1601-L1603) |
| 惡霸棍棒 「布倫特猛擊」 Mk IIIb匯入 | [惡霸棍棒 「布倫特猛擊」 Mk IIIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L15) |
| 惡霸棍棒 「布倫特猛擊」 Mk IIIb接入 | [惡霸棍棒 「布倫特猛擊」 Mk IIIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L1695-L1697) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 兩個 own trait 的 I–IV parent stat 均為 .125／.15／.175／.20；formatter讀 parent tier override 並顯示帶「+」的百分比。時間formatter讀 parent child_duration=4.5。兩個武器wrapper都只 clone共同 parent／child。

- Base parent 是 WeaponTraitParentProcBuff，on_hit每次一次、allow_proc_while_active=true、held條件；predicate同時要求 attacking item相符、weapon_special=true、attack_type=melee、目標是目前踉蹌中的小兵。

- Parent初始化先生成一個child placeholder。child max_stacks=1、stack_offset=-1，raw count=1有效數為0；首次合格事件新增一個child後有效數為1。child的generic critical_strike_chance=.10 fallback與own tier同key；Buff將tier override套到child conditional map，取代fallback，沒有永久parent stat，也不會把.10再加一次。

- Parent允許active期間再處理合格事件。滿raw cap後會把新增數0交給_add_child_buff_stack；該函式空迴圈後仍以本次事件處理時間重設4.5秒timer。因此合格hit可刷新時間，但有效層數維持一。期限移除判斷為remove_t<t，且移除量最多只刪有效child、保留placeholder。

- Predicate讀MinionState.is_staggered：num_triggered_staggers>0或有count_as_staggered keyword；不讀Attack的was_staggered_before_attack快照。Server Attack先跑HitReaction再處理on_hit；若這次hit更新了踉蹌狀態且事件檢查時狀態仍有效，符合目前狀態條件。

- ActionSweep在動作開始呼叫crit check，命中處理沿用保存的crit flag並送attack_type=melee。Ogryn Club特殊拍擊的profile雖有stagger_category=explosion，實際attack_type仍是melee。

- Parent與child按item_slot_name對比wielded_slot。切槽使proc/stat條件失效但parent timer仍走；只有真正卸下武器才移除on_equip parent及其外控child。

近戰暴擊擲定輸入為 `clamp(P0 + q + p, 0, 1) × (1 − critical_strike_chance_to_damage_convert)`；P0是基礎值，q為其他加算來源，p為本祝福tier（.125、.15、.175、.20）。先加算與clamp，再套暴擊率轉傷害；p是機率百分點，不是最終傷害乘數。算例列於玩家正文，假設無上限／轉傷／強制或禁止暴擊。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_198`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_198.png)｜[Issue附件](https://github.com/user-attachments/assets/8d70f4f1-3461-40d1-b18c-604551fab4bd)；圖示只作辨識。


- **戰刃**：item.icon `content/ui/textures/icons/traits/weapon_trait_198`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_198.png)｜[Issue附件](https://github.com/user-attachments/assets/8d70f4f1-3461-40d1-b18c-604551fab4bd)。

- **惡霸棍棒**：item.icon `content/ui/textures/icons/traits/weapon_trait_211`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_211.png)｜[Issue附件](https://github.com/user-attachments/assets/ea26c7d6-7705-46a0-aaf5-1936c555af89)。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 戰刃等級覆寫 | [戰刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L452-L503) |
| 戰刃Buff接入 | [戰刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L22-L23) |
| UI 戰刃 | [UI 戰刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L127) |
| 戰刃 卡塔昌 Mk III匯入 | [戰刃 卡塔昌 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L15) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1434-L1436) |
| 戰刃 卡塔昌 Mk VI匯入 | [戰刃 卡塔昌 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L15) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1524-L1526) |
| 惡霸棍棒等級覆寫 | [惡霸棍棒等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L367-L416) |
| 惡霸棍棒Buff接入 | [惡霸棍棒Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L19-L20) |
| UI 惡霸棍棒 | [UI 惡霸棍棒](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L308) |
| 惡霸棍棒 「布倫特專用」 Mk I匯入 | [惡霸棍棒 「布倫特專用」 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L15) |
| 惡霸棍棒 「布倫特專用」 Mk I接入 | [惡霸棍棒 「布倫特專用」 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L1380-L1382) |
| 惡霸棍棒 「布倫特得意之作」 Mk II匯入 | [惡霸棍棒 「布倫特得意之作」 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L15) |
| 惡霸棍棒 「布倫特得意之作」 Mk II接入 | [惡霸棍棒 「布倫特得意之作」 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L1601-L1603) |
| 惡霸棍棒 「布倫特猛擊」 Mk IIIb匯入 | [惡霸棍棒 「布倫特猛擊」 Mk IIIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L15) |
| 惡霸棍棒 「布倫特猛擊」 Mk IIIb接入 | [惡霸棍棒 「布倫特猛擊」 Mk IIIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L1695-L1697) |
