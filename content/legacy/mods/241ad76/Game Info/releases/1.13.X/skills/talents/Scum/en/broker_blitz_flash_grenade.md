# Blinder: base blitz source evidence

[繁體中文](../broker_blitz_flash_grenade.md) | [Base effects](BASE_EFFECTS.md#broker_blitz_flash_grenade) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_blitz_flash_grenade)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `broker_blitz_flash_grenade`; no selectable talent point cost. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Scum's `base_talents` selects `broker_blitz_flash_grenade` by default, linking to `PlayerAbilities.broker_flash_grenade`. The ability uses charges with a default maximum of 3, and applies the `quick_flash_grenade` rule and the `broker_passive_blitz_charge_on_kill` counter Buff.
- The throw input uses the `quick_flash_grenade` weapon action, lasting 0.55 seconds and spawning the projectile at 0.25 seconds. The projectile detonates on collision. The explosion has a 3.5-metre radius and a 2.25-metre close radius, with distance falloff and the flash grenade's Damage/Stagger profile.
- Normal replenishment comes from Close Range Kills. The Buff checks `on_close_kill`, incrementing the counter by 1 only while Blitz charges are below maximum. At 20, it resets the counter and restores 1 grenade. Kills at maximum charges do not increase the counter; an existing incomplete count is retained without increasing while full.
- A specific delayed-kill path also exists. On the server, while the Blitz counter Buff is held, living enemies hit with the secondary needle pistol are tracked. If a tracked enemy still has Toxin and later dies from `toxin` Damage, and its death position is within Close Range of `params.attacking_unit`, the same Close Range Kill replenishment process runs. This does not mean every Toxin kill restores a charge; distance uses that death event's `attacking_unit`.
- `broker_flash_grenade_cluster_stagger_tracking_buff` records achievement data for enemies Staggered by the flash grenade. It is not another player Damage or charge bonus.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/broker_archetype.lua — L53-L71](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L53-L71)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L598-L639](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L598-L639)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L211-L226](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L211-L226)
- [scripts/settings/equipment/weapon_templates/base_template_settings.lua — L223-L273](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/base_template_settings.lua#L223-L273)
- [scripts/settings/projectile/player_projectile_templates.lua — L1248-L1263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1248-L1263)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L129-L159](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L129-L159)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1654-L1717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1654-L1717)
- [scripts/settings/buff/broker_buff_utils.lua — L99-L190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [scripts/settings/talent/talent_settings_broker.lua — L191-L197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L197)
- [scripts/settings/talent/talent_settings_broker.lua — L191-L204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L204)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L227-L242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L227-L242)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua — L103-L154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L103-L154)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L298-L317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L298-L317)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L777-L791](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L791)
- [scripts/settings/talent/talent_settings_broker.lua — L191-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L205)

## Examples and limits

- With a maximum of 3 grenades and 2 currently held, 20 qualifying Close Range Kills restore 1 grenade, returning to 3/3.
- At the basic 20-kill threshold, each completed group of 20 qualifying Close Range Kills restores 1 grenade. An incomplete counter does not increase while charges are full.
- Delayed Toxin kills only apply to targets previously hit by the secondary needle pistol. Death must be caused by `toxin` Damage and pass the Close Range position check against `attacking_unit`; this cannot be generalized to all Toxin kills replenishing Blitz.
- The Damage radius and Close Range Damage curve do not specify a fixed Damage value. Enemy type, Armour, distance and other Damage modifiers still affect the result.
- Local text from Build 25606770 corresponds to the fixed public source's version 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_blitz_flash_grenade`, hash `6fa18120`, entry 7255: **Blinder**.
- Description key `loc_talent_broker_blitz_flash_grenade_desc`, hash `9cb00aee`, entry 10115.

Full raw template:

~~~text
Quick to use Grenade that staggers enemies.

Every {num_kills:%s} Kills at Close Range generate {num_charges:%s} Grenade(s).

{max_charges:%s} Max Grenades.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `num_kills` | `talent_settings.blitz.flash_grenade.num_kills = 20` | Number: `20` |
| `num_charges` | `talent_settings.blitz.flash_grenade.num_charges = 1` | Number: `1` |
| `max_charges` | `talent_settings.blitz.flash_grenade.max_charges_default = 3` | Number: `3` |

Display mapping: `broker_talents.lua` L598-L639. Values reuse the accepted `talent_settings_broker.lua` L191-L205 evidence; number formatting is unchanged.

Static reconstruction; not an observed game screen:

~~~text
Quick to use Grenade that staggers enemies.

Every 20 Kills at Close Range generate 1 Grenade(s).

3 Max Grenades.
~~~

## English comparison

The independently read English describes a quick Grenade that Staggers enemies, replenishing 1 Grenade every 20 Close Range Kills with a maximum of 3. The accepted action, Stagger, counter threshold, replenishment and capacity agree. Collision detonation, timing and radii, the explosion's lack of Health Damage, full-charge counting rules and the narrow delayed Toxin-kill path are supplementary details. The text does not explicitly promise explosive Health Damage or unrestricted Toxin-kill replenishment; no clear contradiction appears.
