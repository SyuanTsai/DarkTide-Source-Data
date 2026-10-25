# Brain Rupture: source evidence

[繁體中文](../psyker_brain_burst_improved.md) | [Player description](README.md#psyker_brain_burst_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_brain_burst_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_brain_burst_improved`; name key `loc_talent_psyker_brain_burst_improved`; description key `loc_talent_psyker_brain_burst_improved_description`. Node `node_58a8d92f-0b8c-43c4-ac80-f0c597fffc54`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At the fixed source SHA, the tree defines `psyker_brain_burst_improved` as `tactical` in `exclusive_group=blitz`; its talent definition installs the `psyker_brain_burst_improved` buff. The buff sets `stat_buffs.smite_damage_multiplier=1.5`. The actual single-target ability uses the `psyker_smite` weapon template and, after charging, deals damage through `damage_profile=psyker_smite_kill` and `damage_type=smite`. Shared `damage_calculation.lua` reads this multiplier only for `smite` damage and multiplies `damage_multiplier` by 1.5. Holding other inputs and multipliers fixed gives `100 × 1.5 = 150`: a 50% damage increase, rather than an extra fixed 50 damage.
- This document also covers Brain Rupture's underlying ability and does not replace the node's damage-bonus evidence. The normal `action_charge_target` uses the `psyker_smite_charge` charge template with `charge_on_action_start=true`. It does not specify a normal `charge_time`; `ActionSmiteTargeting` defaults `kill_charge` to 3 seconds, then divides by `smite_attack_speed`. Targeting does not set `sticky_targeting` or `target_locked`, so the target finder updates with smart targeting. Without a target, the normal mode still satisfies the `target_charge` and non-`target_locked` update conditions, allowing charging and Peril generation to begin before target acquisition.
- Alternative `action_charge_target_sticky` sets `sticky_targeting=true`, `target_locked=true`, `charge_time=2`, `attack_target_time=1`, and uses `psyker_smite_lock_target`. Charge level fills in 2 seconds when `smite_attack_speed=1`; however, Peril per second uses the charge template's `warp_charge_percent / charge_duration`, or `0.30/3=10%/second`. At full charge it switches to `full_charge_warp_charge_percent=9%/second`. Target-locked mode updates charging/overload only with a target, so it cannot precharge without a lockable target. Once a valid target is acquired, sticky targeting does not switch with aim. If the target can receive Smite stagger, maintaining the sticky lock for 1 second applies one small stagger.
- `action_charge_target_lock_on` is the locking branch linked from the normal charge action through `charge_power_lock_on`. It requires an existing valid Smite target, uses sticky targeting and `psyker_smite_lock_target`, and applies one small stagger after more than 0.25 seconds locked. It does not specify `charge_time`, so a fresh charge defaults to 3 seconds. When chaining from normal charging, `ActionSmiteTargeting` reads `is_chain_action` and the current `charge_level`; `ChargeActionModule` adjusts `charge_start_time` to continue that level. Changing the target resets the current charge timer in the `target_locked` branch.
- Release action `action_use_power` sets `fire_time=0.2` seconds and `total_time=0.8` seconds. It consumes the charge level and executes a single-target attack against the current target with `psyker_smite_kill`. It pays Peril only after successfully dealing damage. This action uses the `psyker_smite_use_power` charge template, with `warp_charge_percent=0.25` and no `use_charge=true`. `WarpCharge.increase_immediate` multiplies cost by `charge_level` only when the charge template's `use_charge` is true. Therefore, this 25% on-hit cost is a fixed base cost, independent of charge level. Empty casts or attacks that do not actually deal damage do not enter this on-hit payment branch.
- Calculation example, with no buff/stat modifiers and `smite_attack_speed=1`: during normal charging from 0 to 1 second, `charge_level` rises from 0 to about 1/3 and Peril from 0 to about 6.67%; at 2 seconds charge level is about 2/3 and Peril about 13.33%; at 3 seconds full charge has generated about 20%. Holding full charge for another second adds about 9%. A successful hit adds a fixed 25%, totaling about 45% immediately at full charge, or about 54% after one extra second holding full charge. In sticky mode after target acquisition, 0→1→2 seconds gives charge levels of about 0→1/2→1 and Peril of about 0→10→20%; a successful hit at the 2-second full charge likewise totals about 45%. These are base-template estimates; buff/stat modifiers multiply the actual costs. The attack profile's attack/impact power distribution is 900/55; final damage still depends on target armour, hit location, charge level and other multipliers.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L255-L284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L255-L284)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L185-L198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L185-L198)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L231-L265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L231-L265)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua — L106-L118](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L106-L118)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L528-L534](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L528-L534)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua — L535-L577](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L535-L577)
- [scripts/utilities/attack/damage_calculation.lua — L507-L519](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L507-L519)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua — L314-L333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L314-L333)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua — L391-L405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L391-L405)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua — L443-L448](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L443-L448)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua — L459-L478](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L459-L478)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua — L535-L563](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L535-L563)
- [scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua — L136-L154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L136-L154)
- [scripts/extension_systems/weapon/actions/action_smite_targeting.lua — L41-L60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L41-L60)
- [scripts/extension_systems/weapon/actions/action_smite_targeting.lua — L69-L124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L69-L124)
- [scripts/extension_systems/weapon/actions/action_smite_targeting.lua — L153-L172](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L153-L172)
- [scripts/extension_systems/weapon/actions/modules/psyker_smite_targeting_action_module.lua — L32-L66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/psyker_smite_targeting_action_module.lua#L32-L66)
- [scripts/extension_systems/weapon/actions/modules/charge_action_module.lua — L20-L67](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L20-L67)
- [scripts/extension_systems/weapon/actions/modules/warp_charge_action_module.lua — L19-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/warp_charge_action_module.lua#L19-L39)
- [scripts/extension_systems/weapon/actions/action_damage_target.lua — L57-L102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L57-L102)
- [scripts/extension_systems/weapon/actions/action_damage_target.lua — L169-L178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L169-L178)
- [scripts/utilities/warp_charge.lua — L58-L85](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L58-L85)
- [scripts/utilities/warp_charge.lua — L116-L139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L116-L139)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua — L5-L8](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L5-L8)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua — L26-L41](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L26-L41)
- [scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua — L143-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L143-L184)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L231-L265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L231-L265)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L255-L284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L255-L284)

## Example assumptions and limits

- **How it works**: Charge psychic power to attack one enemy, dealing 50% more damage than the original base Blitz.

- **Charging modes**: You can charge before finding a target, reaching full charge in about 3 seconds. Locking a target before charging reaches full charge in about 2 seconds; you may move the crosshair away after locking. Charge-speed bonuses affect these times.

- **Peril example**: Without other modifiers, either mode adds about 20 percentage points of Peril while charging fully; a successful attack adds another 25 points, totaling about 20 + 25 = 45 points. Holding full charge adds about 9 points per additional second.

- **Damage example**: With the same target, charge level and other bonuses, an attack dealing 100 damage becomes 100 × 1.5 = 150. This illustrates the multiplier; actual damage varies with armour and attack conditions.

- Damage comparison assumes the same attack, target, hit location and charge level, with all other bonuses and later multipliers unchanged. `100 × 1.5 = 150` compares damage at the stage affected by this talent, a 50% increase.
- Normal charging assumes no buff/stat modifiers, `smite_attack_speed=1`, continuous updates while charging, and an immediate successful hit on a valid target at full charge. Charging for 3 seconds gives `0.20 × (3/3) = 20%`; the full-charge hit adds a fixed `0.25`, totaling about 45%. Normal mode takes about 3 seconds to fill and generates about 45% total base Peril after the hit.
- Alternative sticky mode assumes no buff/stat modifiers, `smite_attack_speed=1`, and a valid target acquired first. Charging for 2 seconds gives `0.30 × (2/3) = 20%`; the full-charge hit adds a fixed `0.25`, totaling about 45%. Charge level fills in about 2 seconds, with about 45% total base Peril after the successful hit.
- Comparing charging alone, excluding on-hit cost and without buff/stat modifiers: normal charging adds about 6.67% at 1 second, 13.33% at 2 seconds and 20% at 3 seconds, then 9% per second at full charge. Sticky charging adds about 10% at 1 second and 20% at 2 seconds, then 9% per second at full charge. Their full-charge times differ, but the template denominator remains 3 seconds and both switch to 9%/second when full.
- The hypothetical damage baseline of 100 illustrates the multiplier; it is not fixed actual damage for every weapon, enemy or charge level.
- `charge_time` is affected by `smite_attack_speed`; `ChargeActionModule` also multiplies by `charge_up_time`. Peril is affected by stats/buffs including `warp_charge_amount`, `warp_charge_over_time_amount` and `psyker_smite_cost_multiplier`. All time and percentage examples are conditional estimates.
- Normal precharging is derived from that mode's update conditions; sticky mode requires a valid target to update charge/overload. Movement, disappearing/changing targets, stuns, network synchronization or in-game version differences can affect the actual sequence.
- The profile's power distribution is not fixed damage against all enemies; actual values depend on charge level, target armour/hit location and damage modifiers.
- Static code derivation only; no in-game damage test. Text and source both correspond to 1.13.1. Actual behavior remains pending in-game comparison; retained text/implementation uncertainties alone do not establish either description as wrong. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_brain_burst_improved`, hash `c3b5cefd`, entry 12622: **Brain Rupture**.
- Description key `loc_talent_psyker_brain_burst_improved_description`, hash `681e4980`, entry 6777.

Full raw template:

~~~text
Charge up your Psychic Power and release it to deal immense Damage to a Single Enemy.

This is an augmented version of {talent_old:%s} dealing {damage:%s} Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_old` | `loc_ability_psyker_smite`; hash `6f06e398`, entry 7212 | Localized string → `Brain Burst` |
| `damage` | `smite_damage_multiplier=1.5`; `(1.5−1)×100=50` | Percentage with `+` prefix → `+50%` |

Only missing display fields in `psyker_talents.lua` L231–265 were read. `talent_old` localizes `loc_ability_psyker_smite` (hash `6f06e398`, entry 7212) to Brain Burst. `damage` finds the accepted `smite_damage_multiplier=1.5`, applies `(value−1)×100=50`, and uses percentage formatting with a `+` prefix → `+50%`. Common formatting is reused.

Static reconstruction; not an observed game screen:

~~~text
Charge up your Psychic Power and release it to deal immense Damage to a Single Enemy.

This is an augmented version of Brain Burst dealing +50% Damage.
~~~

## English comparison

The English independently describes charging psychic power for a single-target attack and an augmented Brain Burst dealing +50% damage. These agree with the accepted `smite` attack and 1.5 multiplier. It does not specify charging modes, lock conditions, timing, Peril costs or the attack profile's distribution; those are supplementary details, not English errata.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical/psyker_brain_burst_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/215cb557-8544-4d05-876a-871e70dc093a). The icon identifies the talent; it is not mechanism evidence.
