# Zealot: class base effects

[繁體中文](../BASE_EFFECTS.md) | [Player descriptions](README.md) | [Technical index](SOURCE_INDEX.md) | [Definitions not directly used](UNUSED_DEFINITIONS.md)

The class configuration supplies these four effects in advance; they do not occupy the 82 selectable nodes. Functional headings identify them. Fixed source: Release 1.13.1 / `7e662fcda16219d775b84af50322be2e9cd9d62e`. Findings are static checks, without in-game tests.

No uniquely paired standalone icons were obtained for these four effects; no other node's image is used.

English text is independently compared below with the existing evidence. Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`). Entry numbers are `entry_index` values, not file line numbers. Export suffixes are metadata. All value-substituted displays are static reconstructions, not observed game screens.

<a id="zealot_dash"></a>

## Base Combat Ability

- Talent identifier: `zealot_dash`.
- **Dash and cooldown**: Dash forward, normally 7 metres, extending to 21 metres when targeting an enemy. Collisions and traversable paths constrain the movement. Base cooldown: 30 seconds; 1 charge.
- **Toughness recovery**: Activation restores 50% of maximum Toughness. With maximum 100 and current 20, recover 50 to reach 70; with current 70, only the missing 30 can be restored.
- **Attack Speed**: Gain 20% Attack Speed for approximately 11 seconds. With this bonus alone, an affected 1-second action takes `1 ÷ 1.2 ≈ 0.833 seconds`. Recasting resets the effect's duration.
- **Next melee hit**: The next qualifying melee hit within 3 seconds gains 25% Melee Damage, a guaranteed Critical Hit and 100% Melee Rending. Pushes and ranged hits do not consume the enhancement.
- **Damage example**: Considering only the Melee Damage stage, baseline 100 becomes `100 × 1.25 = 125`. With an existing 20% bonus at the same stage, it becomes 145. Critical extra damage and Rending's armour effects are separate; 125 is not every weapon's final damage.
- **Special attacks**: Some weapon-activated special effects that remain attached to the enemy while attacking can retain the enhancement until that attack ends. Behavior depends on the weapon.

### Source confirmation and code derivation

- `zealot_archetype.lua` assigns `zealot_dash` to `slot_combat_ability` in `base_talents`; the talent definition binds `PlayerAbilities.zealot_targeted_dash`.
- `base_dash` has `max_charges = 1` and cooldown `talent_settings_2.combat_ability.cooldown = 30`. Its ability template uses `LungeTemplates.zealot_dash`.
- The lunge template sets `restore_toughness = .5`, a lunge impact damage profile and `damage radius = 3`. On completion it adds `zealot_combat_ability_attack_speed_increase` and `zealot_dash_buff`.
- `zealot_dash_buff` has `duration = 3`, with stat buffs reading `melee_damage = .25`, `melee_critical_strike_chance = 1` and `melee_rending_multiplier = 1`. The Attack Speed buff reads `combat_ability_2.attack_speed = .2` and `active_duration = 10`; template duration adds 1 second to cover the delayed period.
- The fixed source's dash lunge template already attaches the Attack Speed buff. Selectable `zealot_attack_speed_post_ability` also selects a clone of `base_dash`. Retain this source-structure overlap as an uncertainty; it does not establish that the selectable node has no differences in other versions.

### Fixed source evidence

- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/zealot_archetype.lua#L50-L64)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L27-L53)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L7-L36)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L304-L318)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L423-L427)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/zealot_dash.lua#L53-L85)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/zealot_lunge_templates.lua#L14-L97)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1233-L1244)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4135-L4155)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L383-L427)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L383-L428)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L420-L430)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/zealot_lunge_templates.lua#L79-L92)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1233-L1329)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)

### Limits and open questions

- In this version, base and enhanced dashes share the same lunge and both attach Attack Speed. The ability clone chiefly changes the icon. This fixed-source structure does not prove that selecting the node has no effect in other game versions.
- Public-source runtime duration is 11 seconds, whereas formatting data has `active_duration = 10`. Differences from local displayed text still require in-game confirmation.
- Local Steam Build 25606770 and the fixed public source correspond to 1.13.1.

### Original English template and reconstruction

- Name key `loc_talent_zealot_2_combat`, hash `b89423e1`, entry 11900: **Chastise the Wicked**.
- Description key `loc_talent_zealot_2_combat_description_new`, hash `0c7227ba`, entry 798.

Full raw template:

~~~json
"Dash forward, Replenishing {toughness%s} Toughness. Your next Melee Hit gains {damage%s} Damage and is a guaranteed Critical Hit.\n\nBase Cooldown: {cooldown:%s}s."
~~~

| Placeholder | Verified value | Formatting |
|---|---|---|
| `{toughness%s}` | `.5` → `50%` | Percentage, no explicit + prefix |
| `{damage%s}` | `.25` → `25%` | Percentage, no explicit + prefix |
| `{cooldown:%s}` | `30` → `30` | Number |

The minimal display mapping in `zealot_talents.lua` L27–L53 supplies these values/formats. The raw template spells its first two placeholders without the usual colon. The reconstruction below substitutes the verified values for readability; actual formatter handling of those spellings is unconfirmed.

Static reconstruction; not an observed game screen:

~~~text
Dash forward, Replenishing 50% Toughness. Your next Melee Hit gains 25% Damage and is a guaranteed Critical Hit.

Base Cooldown: 30s.
~~~

### Independent English comparison

- **Consistent**: Dash, 50% Toughness recovery, the next melee hit's 25% damage/guaranteed Critical Hit, and 30-second base cooldown agree with the accepted evidence.
- **Not covered by the description**: Charge count, distances, missing-Toughness cap, Attack Speed, the 3-second window, melee-only consumption, Rending and weapon-dependent special-attack retention are supplements.
- **Cannot confirm**: The malformed placeholder spellings and actual displayed Attack Speed duration remain presentation questions. Neither establishes a new English mechanism contradiction.

---

<a id="zealot_shock_grenade"></a>

## Base Blitz

- Talent identifier: `zealot_shock_grenade`.
- **Operation**: Carry up to 3 Stun Grenades; fuse 1.5 seconds. After throwing one, `3 − 1 = 2` remain.
- **Radius and effect**: Maximum explosion radius 8 metres; close-range radius 2 metres. Hits apply 8 seconds of Electrocution. Selecting Stunstorm Grenade multiplies the radii by 1.5, making them 12 and 3 metres; capacity stays unchanged.
- **Damage example**: For periodic Electrocution alone, without other modifiers, one Unarmoured damage instance is `8 × 0.5 = 4`. Intervals are approximately 0.3–0.8 seconds. The same Electrocution effect refreshes its timer instead of gaining multiple stacks.
- **Control limits**: Enemy resistance and obstructions affect results. A Poxwalker Bomber already staggered skips periodic Electrocution; this does not mean immunity to all explosion effects.

### Source confirmation and code derivation

- `base_talents` binds `zealot_shock_grenade` to the grenade slot; the talent definition binds `PlayerAbilities.zealot_shock_grenade`.
- The ability uses the `grenade_shock` inventory item. `max_charges` reads `zealot_2.grenade.max_charges`, set to 3; projectile `fuse_time = 1.5`.
- The Electrocution and damage chain is shared with [Stunstorm Grenade](zealot_improved_stun_grenade.md). The base version lacks `explosion_radius_modifier_shock = .5`.

### Fixed source evidence

- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/zealot_archetype.lua#L50-L64)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L54-L63)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L94-L105)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L321)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L413-L426)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L66-L101)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L413-L474)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L64-L91)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L328)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L513-L519)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L484-L502)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L648-L690)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L429-L482)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)

### Limits and open questions

- The example isolates periodic Electrocution and excludes the initial explosion. Enemy control resistance and actual tick counts were not measured.
- Local Steam Build 25606770 and the fixed public source correspond to 1.13.1.

### Original English template and reconstruction

- Name key `loc_ability_shock_grenade`, hash `9bfd0b69`, entry 10067: **Stun Grenade**.
- Description key `loc_ability_shock_grenade_description`, hash `1e60594f`, entry 1989.

Full raw template:

~~~json
"Throw a Stun Grenade that electrocutes and stuns all enemies within its blast radius."
~~~

The template contains no placeholders. The name/description mapping is retained from `zealot_talents.lua` L54–L63.

Static reconstruction; not an observed game screen:

~~~text
Throw a Stun Grenade that electrocutes and stuns all enemies within its blast radius.
~~~

### Independent English comparison

- **Consistent**: The Stun Grenade and its Electrocution/control direction agree with the existing evidence.
- **Cannot confirm**: “all enemies” is broader than resistance-dependent control. The accepted evidence does not establish every enemy's response; retain this limit without adding an immunity mechanism or declaring an English erratum.
- **Not covered by the description**: Capacity, fuse, distinct radii, duration/refresh, variable periodic intervals, isolated damage and the staggered Poxwalker Bomber exception are supplements.

---

<a id="zealot_toughness_damage_coherency"></a>

## Base Toughness Damage Reduction Aura

- Talent identifier: `zealot_toughness_damage_coherency`.
- **Effect**: You and allies in Coherency take 7.5% less Toughness damage.
- **Example**: `100 × (1 − 7.5%) = 92.5` Toughness damage. This does not directly reduce Health damage.
- **Replacement and stacking**: Benediction replaces this Aura with 15% reduction. The two do not add to 22.5%, and identical Auras do not accumulate repeatedly.

### Source confirmation and code derivation

- The `base_talent` definition uses `zealot_coherency_toughness_damage_resistance` as its Coherency buff. `talent_settings_2.coherency.toughness_damage_taken_multiplier` supplies 0.925; the definition formats `1 − 0.925 = 7.5%`.
- The buff template has `max_stacks = talent_settings_2.coherency.max_stacks = 1`, `coherency_id = zelot_maniac_coherency_aura` and `priority = 2`. The improved template shares the ID and wins with `priority = 1`.
- Coherency daisy-chain construction includes the unit itself. For the same ID, the selector chooses the buff with the smaller priority number.
- If a recipient has `prevent_coherency_buffs_from_other_players`, the generic Coherency selector accepts only that player's own Aura source. This is a general recipient exception, not an effect granted by this base Aura.

### Fixed source evidence

- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/zealot_archetype.lua#L50-L64)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L779-L801)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L325-L328)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3283-L3356)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L779-L827)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L328)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L381-L384)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L255)

### Limits and open questions

- `100 × 0.925` isolates this Aura. It does not imply the same order or aggregation method for every other damage-reduction source.
- Local Steam Build 25606770 and the fixed public source correspond to 1.13.1.

### Original English template and reconstruction

- Name key `loc_talent_zealot_2_base_3`, hash `b68eec69`, entry 11780: **The Emperor's Will**.
- Description key `loc_talent_zealot_aura_toughness_damage_coherency_desc`, hash `17d865cc`, entry 1562.

Full raw template:

~~~json
"{damage_reduction:%s} Toughness Damage Reduction for you and Allies in Coherency."
~~~

| Placeholder | Verified value | Formatting |
|---|---|---|
| `{damage_reduction:%s}` | `1 − .925 = .075` → `+7.5%` | Percentage, one decimal place, explicit + prefix |

The minimal display mapping is `zealot_talents.lua` L779–L801.

Static reconstruction; not an observed game screen:

~~~text
+7.5% Toughness Damage Reduction for you and Allies in Coherency.
~~~

### Independent English comparison

- **Consistent**: The 7.5% reduction, Toughness damage and self/allies in Coherency match the accepted evidence.
- **Not covered by the description**: Benediction's replacement, identical-Aura selection, recipient exceptions and isolation of other reductions are supplements.

---

<a id="zealot_more_toughness_on_melee"></a>

## More Toughness from Melee Kills

- Talent identifier: `zealot_more_toughness_on_melee`.
- **Effect**: Melee-kill Toughness recovery increases by 75%; a hit alone does not trigger it.
- **Recovery example**: If an unmodified melee kill restores 10 points, it now restores `10 × (1 + 75%) = 17.5`. With another 25% recovery bonus at the same stage, it becomes `10 × (1 + 75% + 25%) = 20`.
- **Recovery cap**: Weapon, maximum Toughness and other recovery multipliers still affect actual points. If only 8 Toughness is missing, only 8 can be restored.

### Source confirmation and code derivation

- The `base_talent` passive attaches `zealot_increased_toughness_recovery_from_kills`. Its buff template assigns `talent_settings_2.toughness_1.toughness_melee_replenish` to the `toughness_melee_replenish` stat buff.
- The setting is 0.75. The Toughness extension reads `toughness_melee_replenish` only for `recovery_type == toughness_replenish_types.melee_kill`, then combines it with total Toughness-replenishment modifiers.
- The source expression combines that stat value with other stat modifiers. 75% is the source display value of this base stat; other multipliers and weapon recovery coefficients must still be considered.

### Fixed source evidence

- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/zealot_archetype.lua#L50-L64)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2841-L2864)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L344-L346)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1440-L1446)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L223-L242)
- [Fixed source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1005-L1011)

### Limits and open questions

- This is a recovery-percentage example. Actual Toughness points depend on maximum Toughness, current Toughness damage, weapon-template `recovery_percentage_modifiers` and other stat buffs.
- Local Steam Build 25606770 and the fixed public source correspond to 1.13.1.

### Original English template and reconstruction

- Name key `loc_talent_zealot_toughness_on_melee_kill`, hash `aaa46810`, entry 10998: **Blood Redemption**.
- Description key `loc_talent_zealot_toughness_on_melee_kill_desc`, hash `8c5884bb`, entry 9088.

Full raw template:

~~~json
"{toughness:%s} Toughness Replenishment on Melee Kill."
~~~

| Placeholder | Verified value | Formatting |
|---|---|---|
| `{toughness:%s}` | `.75` → `+75%` | Percentage with explicit + prefix |

The minimal display mapping in `zealot_talents.lua` L2841–L2864 reads the accepted `toughness_melee_replenish` stat.

Static reconstruction; not an observed game screen:

~~~text
+75% Toughness Replenishment on Melee Kill.
~~~

### Independent English comparison

- **Consistent**: The +75% recovery modifier and melee-kill trigger agree; it does not state that every kill restores 75% of maximum Toughness.
- **Not covered by the description**: The recovery basis, same-stage modifiers, weapon coefficients and missing-resource cap are supplements.

---
