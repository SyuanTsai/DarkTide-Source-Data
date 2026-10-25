# 精煉殺意：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tier、tier formatter lookup | [Own tier、tier formatter lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L383-L422) |
| 百分比格式與 trait override 讀取 | [百分比格式與 trait override 讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L20) |
| Trait tier override 取值 | [Trait tier override 取值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L51-L55) |
| 毒素弱點傷害消費端 | [毒素弱點傷害消費端](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L742-L747) |
| 弱點／精準乘區計算 | [弱點／精準乘區計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L695-L772) |
| Buff stat 類型 | [Buff stat 類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L885) |
| 持用槽條件 | [持用槽條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| 骨鋸 M1 特殊塗層切換 | [骨鋸 M1 特殊塗層切換](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L1355-L1458) |
| 推擊本體與 attack route | [推擊本體與 attack route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L52-L111) |
| 推擊攻擊結算 | [推擊攻擊結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L32-L102) |
| Sweep direct hit | [Sweep direct hit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1501) |
| 追加 sticky/rip hit | [追加 sticky/rip hit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L737-L790) |
| 本項 Mark trait 接入 | [本項 Mark trait 接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L1833-L1835) |
| Exact finesse multiplier assembly: this tier adds t to existing weakspot multiplier before final F×S calculation. | [Exact finesse multiplier assembly: this tier adds t to existing weakspot multiplier before final F×S calculation.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L715-L782) |
| Actual Saw M1 equips saw_p1_coating_poison_brittleness. | [Actual Saw M1 equips saw_p1_coating_poison_brittleness.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L1514-L1518) |
| Saw coating ProcBuff has on_hit and on_damage_dealt routes; inactive mode selects neurotoxin_interval_buff3, active mode selects saw_rending_debuff; target buff is added in callback. | [Saw coating ProcBuff has on_hit and on_damage_dealt routes; inactive mode selects neurotoxin_interval_buff3, active mode selects saw_rending_debuff; target buff is added in callback.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1867-L1951) |
| neurotoxin_interval_buff3 carries buff_keywords.toxin and lasts 2.6 seconds. | [neurotoxin_interval_buff3 carries buff_keywords.toxin and lasts 2.6 seconds.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1523) |
| saw_rending_debuff also carries buff_keywords.toxin plus a rending stat. | [saw_rending_debuff also carries buff_keywords.toxin plus a rending stat.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L398-L412) |
| Attack._execute calls DamageCalculation.calculate and applies damage before _handle_buffs. | [Attack._execute calls DamageCalculation.calculate and applies damage before _handle_buffs.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L289-L385) |
| on_hit event is queued via attacker BuffExtension.add_proc_event; it is not the target debuff callback. | [on_hit event is queued via attacker BuffExtension.add_proc_event; it is not the target debuff callback.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L623) |
| on_damage_dealt is queued only when damage>0 and includes sticky_attack. | [on_damage_dealt is queued only when damage>0 and includes sticky_attack.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L713-L748) |
| add_proc_event appends the event and parameter table to the proc event queue. | [add_proc_event appends the event and parameter table to the proc event queue.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L991) |
| ProcBuff processes queued events and invokes the configured specific callback after checks. | [ProcBuff processes queued events and invokes the configured specific callback after checks.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L345) |
| Player BuffExtension fixed_update updates buffs, then proc events, then cached stats/keywords. | [Player BuffExtension fixed_update updates buffs, then proc events, then cached stats/keywords.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Minion BuffExtension update processes buffs, queued proc events, then refreshes stat/keyword cache. | [Minion BuffExtension update processes buffs, queued proc events, then refreshes stat/keyword cache.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/minion_buff_extension.lua#L97-L102) |
| Server-side add_internally_controlled_buff adds/syncs the target debuff. | [Server-side add_internally_controlled_buff adds/syncs the target debuff.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/minion_buff_extension.lua#L206-L223) |
| Target keyword cache is rebuilt from active buffs via buff:update_keywords. | [Target keyword cache is rebuilt from active buffs via buff:update_keywords.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L354) |
| Sticky damage instances call Attack.execute as melee and may repeat per frame; each call calculates before its own queued events. | [Sticky damage instances call Attack.execute as melee and may repeat per frame; each call calculates before its own queued events.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L720-L790) |
| Weapon special toggle switches special_active through weapon extension. | [Weapon special toggle switches special_active through weapon extension.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_toggle_weapon_special.lua#L20-L50) |
| M1 special action is a toggle_special action, not an attack. | [M1 special action is a toggle_special action, not an attack.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L1436-L1458) |
| wounds_template is sent to WoundsExtension to draw hit marks, not added as a buff keyword. | [wounds_template is sent to WoundsExtension to draw hit marks, not added as a buff keyword.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L312-L326) |
| Ordinary saw profile selects WoundsTemplates.chain_toxin as a wound visual. | [Ordinary saw profile selects WoundsTemplates.chain_toxin as a wound visual.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/settings_templates/saw_damage_profile_templates.lua#L120-L130) |
| Special-active saw profile selects chain_toxin_purple wound visuals. | [Special-active saw profile selects chain_toxin_purple wound visuals.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/settings_templates/saw_damage_profile_templates.lua#L446-L455) |
| 完整額外與最終傷害結算 1 | [完整額外與最終傷害結算 1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L698-L747) |
| 完整額外與最終傷害結算 2 | [完整額外與最終傷害結算 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L749-L782) |
| 完整額外與最終傷害結算 3 | [完整額外與最終傷害結算 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L89-L109) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 固定來源為 Release 1.13.1、Git SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。inventory 只有 saw_p1 的一個實作與 saw_p1_m1 一個實際綁定；不從同系列武器推論。

- 實際 I–IV 條目將 melee_weakspot_damage_vs_toxin_status 設為 0.525、0.55、0.575、0.6。saw_p1 wrapper 精確 clone identified base；base 的 held-slot conditional fallback 1.0 由 own tier 值取代，不是把 1.0 再加上去。它沒有本祝福專屬 proc、堆疊或期限。

- 傷害計算先要求命中弱點；此項加成另要求 attack type 為 melee，且目標 BuffExtension 在判定時具有 keywords.toxin。目標顯示紫色毒素傷痕或武器切換塗層本身，都不足以證明 keyword 已存在。

- 骨鋸 M1 的一般揮砍、重擊、推擊後接續揮砍與啟用塗層後的 melee sweep 由實際 sweep 攻擊路徑結算；每個命中仍須弱點加毒素條件。推擊本體走 push attack type，排除。特殊塗層 toggle 只切換狀態，沒有傷害命中。

- 額外 sticky/rip 攻擊也經 Attack 結算為近戰；若該次追加命中本身命中弱點且目標仍帶毒，會套用同一 stat。它不會只因為前一段命中符合就自動取得加成。

- 初次上毒更正：實際M1 equips saw_p1_coating_poison_brittleness，normal coating選neurotoxin_interval_buff3、special_active選saw_rending_debuff；兩者均有keywords.toxin。coating callback處理排隊on_hit／positive-damage sticky on_damage_dealt後才添加到target extension，早於它的該次DamageCalculation不能讀到本次新毒素。target keyword cache重建後的後續direct/sticky hit才可符合；不保證同frame順序。
- neurotoxin_interval_buff3的毒素tick以AttackTypes.buff結算，非本項要求的melee；傷痕WoundsTemplates.chain_toxin/purple不等同Buff keyword。
- 完整finesse結算775–782將其他weakspot/critical/finesse項加到同一乘區，再乘base_finesse_damage，通式F×(S+t)。

- 令 F 為 base_finesse_damage，即此額外部分在弱點／暴擊／精準加成乘區前的值；S 為不含本祝福、已合併其他適用增量的原乘數；t 為 own tier 的 0.525／0.55／0.575／0.60。本項條件成立時，額外部分為 F×(S+t)，增量為 F×t；不成立時仍為 F×S。
- 只有 S=1 時，才可把額外部分寫成 F×(1+t)。已有同乘區增量時不可寫成 F×S×(1+t)。
- 令 B 為不受此乘區直接影響的其他傷害部分，在後續修正均不改變結果的控制算例中，最終傷害由 B+F×S 變為 B+F×(S+t)。實際結算之後仍有背刺／側襲、部位、效果傷害、護甲類型修正、遞減與力場等分支，不能把加成百分比當成固定最終增幅。
- 消費端在 hit_weakspot 分支內另外要求 attack_type==melee 與 target BuffExtension 的 keywords.toxin；stat 類型 additive_multiplier，own tier取代conditional fallback1.0，再以stat base1合成數值。formatter取own override的fraction，percentage乘100且加號prefix；四級RAW重建保持精確配對。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_245`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_245.png)｜[Issue附件](https://github.com/user-attachments/assets/b2155c24-1abc-4d51-a55a-53e295c0bdee)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 骨鋸等級覆寫 | [骨鋸等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L383-L422) |
| 骨鋸Buff接入 | [骨鋸Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_saw_p1_buff_templates.lua#L51) |
| UI 骨鋸 | [UI 骨鋸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L565) |
| 骨鋸 外科醫師 型號4匯入 | [骨鋸 外科醫師 型號4匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L14) |
| 骨鋸 外科醫師 型號4接入 | [骨鋸 外科醫師 型號4接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L1833-L1835) |
