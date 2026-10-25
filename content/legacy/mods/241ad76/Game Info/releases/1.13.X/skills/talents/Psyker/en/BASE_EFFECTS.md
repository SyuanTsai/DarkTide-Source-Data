# Psyker: archetype base effects

[繁體中文](../BASE_EFFECTS.md) | [Player descriptions](README.md) | [Technical index](SOURCE_INDEX.md) | [Definitions not directly used](UNUSED_DEFINITIONS.md)

These four effects are provided in advance by the archetype settings and do not count toward the 81 selectable nodes. Functional headings identify the effects without claiming official game names. Fixed source: Release 1.13.1 / `7e662fcda16219d775b84af50322be2e9cd9d62e`. The Base Aura uses the fixed 1.13.2 evidence below. This is static verification, without in-game testing.

[Archetype base list](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L48-L65). Individual icon mappings for the four base effects were not obtained; other talent icons are not substituted.

---

<a id="psyker_combat_ability_shout"></a>

## Base Combat Ability

- Talent ID: `psyker_combat_ability_shout`.

- Releases a forward shockwave that Staggers enemies and Quells 10 percentage points of Peril; base cooldown is 30 seconds.
- At an initial 60% Peril, 60% − 10 percentage points = 50%. Selecting Venting Shriek changes the reduction to 50 percentage points.

### Source-confirmed behavior and static derivation

`base_talents` in `psyker_archetype.lua` assigns this definition to the Combat Ability slot. `psyker_talents.lua` binds it to `PlayerAbilities.psyker_discharge_shout`, which uses the `psyker_shout` template. `talent_settings_psyker.lua` sets `warpcharge_vent_base = 0.1`; `action_psyker_shout.lua` passes it to `WarpCharge.decrease_immediate`. That function subtracts the input from `current_percentage`, so 60% Peril becomes 50% without other modifiers.

### Fixed source evidence

- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L50-L54)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L113-L131)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L6-L19)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L164-L170)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L131-L145)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L92-L114)

### Unresolved limits

- The talent definition's old English `name` comment says 50%, but this commit actually sets `warpcharge_vent_base = 0.1`. That difference remains unobserved in game.
- Local Steam Build 25606770 corresponds to source version 1.13.1. Old source comments are not treated as verified game text.

### Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_2_combat`, hash `f79dd1bd`, entry 16089: **Psykinetic's Wrath**.
- Description key `loc_talent_psyker_shout_ability_description`, hash `a1d796b7`, entry 10453.

Full raw template:

~~~text
Unleashes a wave of warp energy that Staggers Enemies in front of you. Quells {warpcharge_vent:%s} Peril.

Base Cooldown: {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `warpcharge_vent` | 0.1 | Percentage ×100: 10%. |
| `cooldown` | 30 | Number: 30. |

Display mapping: [psyker_talents.lua L113-L126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L113-L126). Values reuse verified Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
Unleashes a wave of warp energy that Staggers Enemies in front of you. Quells 10% Peril.

Base Cooldown: 30s.
~~~

### English comparison

The forward Stagger, 10-percentage-point Quell and 30-second cooldown agree. The old internal comment is distinct from this paired English template. Replacement by Venting Shriek is supplementary.

---

<a id="psyker_grenade_smite"></a>

## Base Blitz

- Talent ID: `psyker_grenade_smite`.

- Charges an attack against one enemy. It is the base ability before Brain Rupture's upgrade and does not use Assail's ten throwable charges.
- You can charge before finding a target: a full base charge takes approximately 3 seconds; locking on before charging takes approximately 2 seconds. Without other modifiers, a full charge adds approximately 20 percentage points of Peril and a successful attack adds another 25, approximately 45 in total.
- Brain Rupture adds a 1.5 Damage multiplier. Under the same fixed conditions, if the base version deals 100, the upgraded version deals 100 × 1.5 = 150.

### Source-confirmed behavior and static derivation

`psyker_grenade_smite` provides only `PlayerAbilities.psyker_smite`; `max_charges = 0` and `only_uses_charges = true` do not describe ten throwable projectiles. It shares the `psyker_smite` weapon, locking, charging and Peril process with Brain Rupture, but does not install the `smite_damage_multiplier = 1.5` passive. The full accepted action evidence is in [Brain Rupture's source document](psyker_brain_burst_improved.md).

### Fixed source evidence

- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L55-L58)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L185-L198)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L106-L118)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L255-L284)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L231-L265)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L528-L534)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L535-L577)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L507-L519)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L314-L333)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L391-L405)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L443-L448)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L459-L478)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L535-L563)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L136-L154)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L41-L60)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L69-L124)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L153-L172)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/psyker_smite_targeting_action_module.lua#L32-L66)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L20-L67)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/warp_charge_action_module.lua#L19-L39)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L57-L102)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L169-L178)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L58-L85)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L116-L139)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L5-L8)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L26-L41)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L143-L184)

### Unresolved limits

- Damage and Peril examples assume no other bonuses; base and upgraded Damage must remain distinct.
- Local Steam Build 25606770 corresponds to source version 1.13.1. Old source comments are not treated as verified game text.

### Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_psyker_smite`, hash `6f06e398`, entry 7212: **Brain Burst**.
- Description key `loc_ability_psyker_smite_description_new`, hash `c4358c2e`, entry 12659.

Full raw template:

~~~text
Charge up your Psychic Power and release it to deal high Damage to a Single Enemy.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | — | The English template has no placeholders. |

Display mapping: [psyker_talents.lua L185-L192](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L185-L192). Values reuse verified Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
Charge up your Psychic Power and release it to deal high Damage to a Single Enemy.
~~~

### English comparison

The charged single-enemy attack agrees. The two charging modes, Peril amounts, charge handling and Brain Rupture's separate Damage multiplier are supplementary.

---

<a id="psyker_aura_ability_cooldown"></a>

## Base Aura

Mechanism source: Release 1.13.2; fixed SHA `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`.

- Talent ID: `psyker_aura_ability_cooldown`.

- Your and your Allies' Combat Ability cooldowns in Coherency are reduced by 7.5%; the same aura does not apply repeatedly.
- With only this effect, 40 seconds becomes 40 × (1 − 7.5%) = 37 seconds. When Seer's Presence replaces it with 10% reduction, the result is 36 seconds; the two bonuses cannot be added together.

- **Entering or leaving the aura**: For charge-based Combat Abilities with an unchanged maximum charge count, gaining or losing a cooldown aura preserves the existing recovery proportion. For one charge with an original 40-second cooldown and 50% recovered, gaining the 7.5% aura changes the full cooldown to 37 seconds while keeping 50% progress: 37 × (1 − 50%) = 18.5 seconds remain, assuming fixed regeneration speed and no other effects.

### Source-confirmed behavior and static derivation

`psyker_archetype.lua` lists `psyker_aura_ability_cooldown` as a tier-1 base talent. The talent definition links it through a Coherency template. The template sets `coherency_id`, the aura category and `max_stacks = talent_settings_3.coherency.max_stacks`, and sets `combat_ability_resource_cost_per_use_modifier = -0.075`. The current maximum is one stack, reducing the cooldown resource needed for each Combat Ability use by 7.5%.

### Capacity changes when entering or leaving an aura

- **Source-confirmed**: A charge-based ability's resource capacity is `maximum charges × resource cost per charge`. The aura changes that cost and therefore the pool capacity. When capacity changes and neither the extra-charge grant nor the reduced-charge cap branch has already run, the shared update computes `p = clamp01(previous resource / previous capacity)`, then sets `new resource = new capacity × p`. It preserves the recovery proportion of the whole pool rather than its old resource amount.

- **Static derivation**: With two charges costing 40 each, the capacity is 80. If the pool contains 39 resource, gaining the 7.5% aura changes the per-charge cost to 37 and capacity to 74. The existing proportion is `39 / 80 = 48.75%`, so the new resource is `74 × 48.75% = 36.075`. Available charges remain `floor(36.075 / 37) = 0`. At 1 resource per second, with regeneration unpaused and no other effects, the first charge returns after `37 − 36.075 = 0.925 seconds`. Keeping 39 resource while changing the cost alone would cross the 37-resource threshold; 1.13.2 rescales resource before calculating charges in the same update.

- **Limits**: This proportional rule is in the `usage_cost_type == "charges"` branch. Resource-based abilities retain their separate capacity handling. Granting or capping a changed maximum charge count takes precedence, so this aura example cannot be generalized to every loadout change or respawn. Resource rounding, natural regeneration, pauses and other refunds affect the exact availability time. These are static resource-model calculations without in-game testing.

- [Capacity changes and branch order](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L781-L827) | [Per-charge cost and aura modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1444-L1468) | [Pool capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1330-L1355) | [Natural regeneration and charge thresholds](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L848-L884).

### Fixed source evidence

- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L59-L61)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L850-L868)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2625-L2643)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/talent/talent_settings_psyker.lua#L305-L309)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1435-L1466)

### Unresolved limits

- This value comes from a resource-cost modifier. Charges, other ability modifiers and the actual recovery process may change the experienced cooldown.
- Original English remains from 1.13.1 / Steam Build 25606770; the capacity-change mechanism uses 1.13.2. Same-version 1.13.2 text has not been obtained; no in-game test was performed.

### Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_aura_reduced_ability_cooldown`, hash `b6a94636`, entry 11791: **The Quickening**.
- Description key `loc_talent_psyker_aura_reduced_ability_cooldown_description`, hash `ed9f8507`, entry 15443.

Full raw template:

~~~text
{cooldown_reduction:%s} Ability Cooldown Reduction for you and Allies in Coherency.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cooldown_reduction` | abs(-0.075) = 0.075 | Percentage ×100, one decimal, with `+` prefix: +7.5%. |

Display mapping: [psyker_talents.lua L855-L862](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L855-L862). Values reuse verified Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
+7.5% Ability Cooldown Reduction for you and Allies in Coherency.
~~~

### English comparison

The 7.5% reduction and Coherency beneficiaries agree. The one-stack limit, resource-cost implementation and replacement by Seer's Presence are supplementary.

---

<a id="psyker_peril_passive"></a>

## Peril System

- Talent ID: `psyker_peril_passive`.

- Peril caps at 100%, with a high-Peril threshold of 97%. Generating Peril delays natural decay; after generation stops and you return to idle, wait approximately 3 seconds before natural decay begins.
- Three seconds is the waiting period, rather than the time needed to empty a 100% gauge. Decay rate depends on the Peril band, weapon and bonuses; you can also actively Quell Peril.
- Overload is not determined solely by reaching 100%. The immediate-generation path checks for an explosion when Peril is already at 100% and increases again; the continuous-cast path also checks current and starting Peril. Overload-prevention effects are handled separately.

#### English wording correction

- The English says generating Peril at Critical Peril (97%) or above causes the explosion. The verified generation paths use additional 100% and starting-Peril conditions, so being at 97% and generating Peril is not itself the stated explosion condition.

### Source-confirmed behavior and static derivation

`psyker_peril_passive` itself supplies display-format values; the main execution parameters are in `archetype_warp_charge_templates.psyker`. `WarpCharge.update_observer` checks `last_charge_at_t + auto_vent_delay` and requires `current_percentage > 0`, `state = idle` and an expired waiting period. Psyker sets `auto_vent_delay = 3`. `WarpCharge.check_new_state` switches to `exploding` when `current_percentage >= 1` and `starting_percentage >= 1`; the template sets `critical_threshold` and `extreme_threshold` to 0.97.

### Fixed source evidence

- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L62-L64)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2606-L2627)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/warp_charge/archetype_warp_charge_templates.lua#L35-L49)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L28-L38)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L187-L237)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L5-L14)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L44-L70)

### Unresolved limits

- Natural decay rate varies with Peril band, weapon settings and other modifiers; no fixed time to empty the gauge is inferred here. The 100% explosion check considers both `current_percentage` and `starting_percentage`.
- Local Steam Build 25606770 corresponds to source version 1.13.1. Old source comments are not treated as verified game text.

### Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_peril_passive`, hash `dafbc14a`, entry 14197: **Perils of the Warp**.
- Description key `loc_talent_psyker_peril_passive_desc`, hash `3beb17a2`, entry 3895.

Full raw template:

~~~text
You generate Peril when using your Blitz Abilities and Force Weapons, up to {max_peril:%s}. After {passive_quell_time:%s}s without generating Peril it passively quells. Hold '{vent_input:%s}' on a Force Weapon or Blitz Ability to reduce Peril rapidly while slowing your movement.

Generating Peril while at Critical Peril ({critical_peril:%s}) or above, unleashes Perils of the Warp, causing an explosion that instantly downs you and deals damage to nearby enemies.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `max_peril` | 1 | Percentage ×100: 100%. |
| `critical_peril` | 0.97 | Percentage ×100: 97%. |
| `passive_quell_time` | 3 | Number: 3. |
| `vent_input` | `loc_input_description_vent` | Localized string: Quell Peril; hash `cb717b2a`, entry 13142. |

Display mapping: [psyker_talents.lua L2609-L2625](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2609-L2625). Values reuse verified Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
You generate Peril when using your Blitz Abilities and Force Weapons, up to 100%. After 3s without generating Peril it passively quells. Hold 'Quell Peril' on a Force Weapon or Blitz Ability to reduce Peril rapidly while slowing your movement.

Generating Peril while at Critical Peril (97%) or above, unleashes Perils of the Warp, causing an explosion that instantly downs you and deals damage to nearby enemies.
~~~

### English comparison

The 100% maximum, 97% critical display and three-second wait agree with the accepted evidence. The English explicitly makes generation at 97% or above sufficient to unleash the explosion, whereas the accepted paths require additional 100% and starting-Peril checks: that trigger is an English contradiction. Idle state, variable decay rate and separate prevention effects are supplementary. The description's active-input wording is retained verbatim; this existing base document does not separately establish every input or movement detail.
