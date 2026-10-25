# 穿透：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Full exact own four tiers and formatter independent content review | [Full exact own four tiers and formatter independent content review](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L447-L488) |
| Actual own wrapper and all overrides independent content review | [Actual own wrapper and all overrides independent content review](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua#L61-L63) |
| Full exact own four tiers and formatter independent content review | [Full exact own four tiers and formatter independent content review](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L182-L221) |
| Actual own wrapper and all overrides independent content review | [Actual own wrapper and all overrides independent content review](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L27) |
| Full exact own four tiers and formatter independent content review | [Full exact own four tiers and formatter independent content review](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L447-L488) |
| Actual own wrapper and all overrides independent content review | [Actual own wrapper and all overrides independent content review](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua#L62-L64) |
| Three actual direct wrappers; held conditional keywords reduced-hit-mass and ignore armor abort plus same-key conditional melee impact fallback. Tier same-key override replaces .05; +10/+15/+20/+25 percent formatter does not describe guaranteed final stagger. | [Three actual direct wrappers; held conditional keywords reduced-hit-mass and ignore armor abort plus same-key conditional melee impact fallback. Tier same-key override replaces .05; +10/+15/+20/+25 percent formatter does not describe guaranteed final stagger.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L860-L872) |
| Attacker keyword controls reduced mass before attack-type target multipliers | [Attacker keyword controls reduced mass before attack-type target multipliers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L12-L38) |
| Active ordinary enemy health hitmass branch multiplied .25; player/prop/living_prop branch exempt, dead returns0 | [Active ordinary enemy health hitmass branch multiplied .25; player/prop/living_prop branch exempt, dead returns0](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L124-L155) |
| use_reduced_hit_mass also suppresses armor abort; max hitmass budget and breed abort remain independent | [use_reduced_hit_mass also suppresses armor abort; max hitmass budget and breed abort remain independent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1356-L1380) |
| conditional keywords inherit conditional_stat_buffs_func when there is no dedicated keyword gate. | [conditional keywords inherit conditional_stat_buffs_func when there is no dedicated keyword gate.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L137-L142) |
| conditional stats run through the template gate and same-key tier stat override replaces the fallback. | [conditional stats run through the template gate and same-key tier stat override replaces the fallback.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L710) |
| conditional keywords are included only when their configured function returns true. | [conditional keywords are included only when their configured function returns true.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L820-L835) |
| held-slot condition compares template item_slot_name with inventory wielded_slot. | [held-slot condition compares template item_slot_name with inventory wielded_slot.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| melee_impact_modifier is typed as additive_multiplier. | [melee_impact_modifier is typed as additive_multiplier.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L876) |
| combined impact modifiers multiply stagger_power_level, then armor min/max and stagger count map into stagger strength. | [combined impact modifiers multiply stagger_power_level, then armor min/max and stagger count map into stagger strength.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L93) |
| melee impact applies only when attack_type is melee; push/ranged/explosion/shout read separate modifiers. | [melee impact applies only when attack_type is melee; push/ranged/explosion/shout read separate modifiers.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L203) |
| P1 trait module import | [P1 trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L15) |
| P1 trait binding | [P1 trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L840-L842) |
| P1 special input | [P1 special input](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L99-L110) |
| P1 hip route | [P1 hip route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L174-L203) |
| P1 zoom route | [P1 zoom route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L312-L324) |
| P1 Bash route | [P1 Bash route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L437-L453) |
| P1 Bash follow-up | [P1 Bash follow-up](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L494-L515) |
| P1 Bash profile | [P1 Bash profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L529-L546) |
| P1 right Bash | [P1 right Bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L548-L562) |
| P1 special metadata | [P1 special metadata](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L904) |
| P2 trait module import | [P2 trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16) |
| P2 trait binding | [P2 trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
| P2 special input | [P2 special input](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L100-L112) |
| P2 hip route | [P2 hip route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L175-L210) |
| P2 zoom route | [P2 zoom route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L319-L334) |
| P2 Bash route | [P2 Bash route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L448-L465) |
| P2 Bash follow-up | [P2 Bash follow-up](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L504-L525) |
| P2 Bash profile | [P2 Bash profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L539-L556) |
| P2 right Bash | [P2 right Bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L558-L572) |
| P2 special metadata | [P2 special metadata](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L878-L882) |
| P3 trait module import | [P3 trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L16) |
| P3 trait binding | [P3 trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L832-L834) |
| P3 special input | [P3 special input](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L100-L112) |
| P3 hip route | [P3 hip route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L175-L207) |
| P3 zoom route | [P3 zoom route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L311-L323) |
| P3 Bash route | [P3 Bash route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L459-L478) |
| P3 Bash follow-up | [P3 Bash follow-up](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L512-L531) |
| P3 Bash profile | [P3 Bash profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L538-L555) |
| P3 right Bash | [P3 right Bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L557-L572) |
| P3 special metadata | [P3 special metadata](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L893) |
| default weapon action inputs are inspect/wield; no default melee or push attack is created here. | [default weapon action inputs are inspect/wield; no default melee or push attack is created here.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/base_template_settings.lua#L28-L110) |
| base action hierarchy only defines inspect transitions. | [base action hierarchy only defines inspect transitions.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/base_template_settings.lua#L285-L321) |
| pellet route consumes HitMass and checks remaining attack/impact budget. | [pellet route consumes HitMass and checks remaining attack/impact budget.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L495-L502) |
| hitscan route consumes HitMass and checks remaining budget. | [hitscan route consumes HitMass and checks remaining budget.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L215-L220) |
| projectile action obtains projectile template and spawn parameters; no HitMass call in this action path. | [projectile action obtains projectile template and spawn parameters; no HitMass call in this action path.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_projectile.lua#L28-L55) |
| Rumbler hip-fire grenade uses its own direct impact profile and 1.5-second impact/fuse explosion. | [Rumbler hip-fire grenade uses its own direct impact profile and 1.5-second impact/fuse explosion.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L65-L105) |
| Rumbler aimed grenade repeats its impact/fuse explosion configuration. | [Rumbler aimed grenade repeats its impact/fuse explosion configuration.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L107-L130) |
| Rumbler explosion selects radius and damage profiles, not HitMass budget. | [Rumbler explosion selects radius and damage profiles, not HitMass budget.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L83-L105) |
| 百分比 formatter 與 tier override lookup | [百分比 formatter 與 tier override lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L56) |
| Trait extraction attaches the selected trait buff template to the weapon on_equip target. | [Trait extraction attaches the selected trait buff template to the weapon on_equip target.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| Equipping a weapon slot applies on_equip and on_unwield buffs; switching slots transitions on_wield/on_unwield. | [Equipping a weapon slot applies on_equip and on_unwield buffs; switching slots transitions on_wield/on_unwield.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| Unwielding removes on_wield buffs and applies on_unwield buffs. | [Unwielding removes on_wield buffs and applies on_unwield buffs.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Fixed update processes buffs and then refreshes stat buffs and keywords. | [Fixed update processes buffs and then refreshes stat buffs and keywords.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

## 來源、條件與等級

固定來源的三個 own trait 分別為 `weapon_trait_bespoke_ogryn_thumper_p1/p2/p3_pass_past_armor_on_weapon_special`，UI inventory 將它們連到三個實際 trait item 與 Mark。各自完整 I–IV 定義只覆寫同一 `stat_buffs.melee_impact_modifier`：0.10、0.15、0.20、0.25。Formatter 將該同一 override 以 `percentage` 格式和 `+` prefix 顯示；Tier 行數、值與 formatter 每個 variant 逐一檢查。API inventory 的 `source_available_tiers` 是 null，這不等於遊戲來源未定義 tiers。

各 wrapper 直接 clone `BaseWeaponTraitBuffTemplates.pass_trough_armor_on_weapon_special`。基底有兩個 conditional keywords：`use_reduced_hit_mass` 和 `ignore_armor_aborts_attack`；並有 conditional melee impact fallback 0.05。Buff runtime 在沒有另設 `conditional_keywords_func` 時，以 `conditional_stat_buffs_func` 同時 gate conditional keywords；各 own tier 對同一 melee impact key 寫入 override，故顯示等級 0.10–0.25 取代 fallback 0.05。實際 conditional function 比較 item slot 與 inventory 現在 wielded slot。沒有 on-hit/on-kill proc、層數、duration 或 cooldown；切槽只令條件關閉或恢復，不留下計時效果。

## 武器行動與 HitMass 路徑

三個 item 的 UI/trait binding 與 Mark template import/append 都已精確核對。每個 template 將 `weapon_extra_pressed` 的 `bash` 導向 `action_bash`，並可鏈到 `action_bash_right`；兩者的 kind 都是 `sweep`，damage type 為 blunt。`ActionSweep` 將這類 attack type 設為 melee，從 held Buff 讀 `use_reduced_hit_mass` 和 `ignore_armor_aborts_attack`。前者讓一般活體非 player/prop breed 的 health hit mass 乘 0.25；接著仍套用目標攻擊類型倍率和一般質量倍率。後者在 Sweep 判定中也能跳過 `Armor.aborts_attack`，但 `max_hit_mass` 預算或 breed abort 仍能停止攻擊。這些都是有限質量／中止分支，不是無限 cleave。

目前三型號的 hip 與 zoomed shot 已逐路由檢查：Kickback P1 都是 `shoot_pellets`，Thugshot P3 都是 `shoot_hit_scan`；這兩個實際程式會呼叫 HitMass consume / stop budget，所以 held keyword 也會影響普通及瞄準直擊的穿透預算。這個普通射擊的 HitMass 效果不限於 special key，也不會把 melee impact modifier 套到 ranged stagger。

Rumbler P2 的 hip 與 zoomed shot 都是 `shoot_projectile`。彈體撞擊採用自己的 impact profile，撞擊或 1.5 秒 fuse 會使用專用爆炸 template；固定來源 projectile action／projectile extension 搜尋沒有 HitMass consumer，因此不把 reduced-mass 效果外推到直接彈體或爆炸。引信時間不是玩家蓄力。三種武器都沒有另外配置普通重擊、推擊或 charged melee action；共用 base action inputs 只有 inspect/wield 類輸入。

## Stagger 結算與界線

`melee_impact_modifier` 的 Buff setting 型別為 additive multiplier，StaggerCalculation 僅在 `attack_type == melee` 讀此欄位；push、ranged、explosion、shout 分別讀各自欄位。各分項以預設 1 為中性基線做 additive 組合，再乘入 `stagger_power_level`。其後透過 PowerLevel 百分比、目標 armor 的 min/max stagger strength、stagger count 與其他條件換算結果；因此原文 `+10%` 到 `+25%` 不等於最終硬直 strength、duration 或傷害直接等比例增加。

HitMass 與 Stagger 是不同結算。HitMass 只改變實際 consumer 的有限質量扣除；目標側質量倍率仍保留，player/prop/living_prop 和死者使用不同分支。Sweep 的 ignore armor abort 是獨立中止判定，並不消除有限質量上限與 breed abort。原始中英文描述與等級 formatter 可精確重建；它沒有明說一般存活敵人的 0.25 mass、普通 P1/P3 射擊路由、Rumbler 排除或預算終止細節，因此列為描述未涵蓋，不寫成繁中矛盾勘誤。

## 裝備與第一次套用

三個 trait 的 Buff template 會被抽取到 weapon `on_equip` 目標；實際裝入槽位時安裝這個 Buff instance。移除該武器的裝備槽會移除 on_equip Buff；單純切換持用槽位不移除該 instance，而是讓 held-slot 條件停止／恢復套用。固定更新先執行 Buff update，接著更新 stat buffs 與 keywords；因此效果在相符條件經快取更新後供後續結算讀取，不是由按下特殊鍵的事件同步添加。

令 `q` 為該級 melee impact modifier：I–IV 為 0.10、0.15、0.20、0.25。StaggerCalculation 的合成式將通用 attacker / target impact、依攻擊類型的 modifier、弱點 melee modifier 及 super-armor critical modifier 以預設 1 做加法後減去中性項；在其它項皆為 1 的例子裡，melee multiplier `M = 1 + q`。`stagger_power_level_after = stagger_power_level_before × M`。之後仍經 power-level 百分比與目標 armor min/max 強度區間等轉換。

對 HitMass consumer，活著且屬一般 non-player/non-prop breed 的目標先取 `health_extension:hit_mass()`；若 attacker 有 `use_reduced_hit_mass`，這個基值乘 `0.25`。後續仍乘目標 `hit_mass_multiplier_vs_melee` 或 `hit_mass_multiplier_vs_ranged` 及一般 `hit_mass_multiplier`；Sweep 另有 action armor mass modifier。Player/prop/living_prop 使用 breed mass 分支，不乘 0.25；死亡目標返回 0。消耗量從當次有限攻擊/impact 預算扣除，Armor abort 被略過不會移除 max mass 與 breed abort。

兩組算例分別只比較中間 Stagger power 與 HitMass 預算，不互相相乘。所有數字為固定來源靜態推導，並非遊戲測試或傷害保證。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_133`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_133.png)｜[Issue附件](https://github.com/user-attachments/assets/c0ab5584-32f4-4ae4-af3e-881f93db2fd8)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 反衝者等級覆寫 | [反衝者等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L447-L488) |
| 反衝者Buff接入 | [反衝者Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua#L61-L63) |
| UI 反衝者 | [UI 反衝者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1061) |
| 反衝者 洛倫茲 Mk V匯入 | [反衝者 洛倫茲 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L15) |
| 反衝者 洛倫茲 Mk V接入 | [反衝者 洛倫茲 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L840-L842) |
| 震盪槍等級覆寫 | [震盪槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L182-L221) |
| 震盪槍Buff接入 | [震盪槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L27) |
| UI 震盪槍 | [UI 震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1074) |
| 震盪槍 洛倫茲 Mk VI匯入 | [震盪槍 洛倫茲 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16) |
| 震盪槍 洛倫茲 Mk VI接入 | [震盪槍 洛倫茲 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
| 惡棍槍等級覆寫 | [惡棍槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L447-L488) |
| 惡棍槍Buff接入 | [惡棍槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua#L62-L64) |
| UI 惡棍槍 | [UI 惡棍槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1087) |
| 惡棍槍 洛倫茲 Mk VII匯入 | [惡棍槍 洛倫茲 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L16) |
| 惡棍槍 洛倫茲 Mk VII接入 | [惡棍槍 洛倫茲 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L832-L834) |
