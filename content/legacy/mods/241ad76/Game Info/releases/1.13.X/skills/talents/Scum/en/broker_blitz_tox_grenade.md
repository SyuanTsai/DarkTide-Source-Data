# Chem Grenade: source evidence

[繁體中文](../broker_blitz_tox_grenade.md) | [Player description](README.md#broker_blitz_tox_grenade) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_blitz_tox_grenade)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_blitz_tox_grenade`; name key `loc_talent_broker_blitz_tox_grenade`; description key `loc_talent_broker_blitz_tox_grenade_desc_02`. Node `node_1fffd79f-0e4f-4b88-b35a-8a37fe2939ed`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The liquid has `life_time = 15` and flows with the terrain rather than occupying a fixed circular radius. Every 0.35 seconds, it checks the current stacks of `neurotoxin`, `death_explosion` and the `hit_mass` debuff separately: below 6 it adds a stack, at 6 it refreshes, and above 6 it does nothing.
- `toxin_interval` has a 30-stack maximum and uses Power = 500 × stacks ÷ 30. `hit_mass_reduction = 0.5` lasts 1 second. The death buff lasts 12 seconds and refreshes; death does not have to be caused by Toxin Damage, and triggers `primer_explosion`.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_broker.lua — L191-L204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L204)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L243-L254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L243-L254)
- [scripts/settings/projectile/player_projectile_templates.lua — L315-L333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L315-L333)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L160-L186](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L160-L186)
- [scripts/settings/liquid_area/liquid_area_templates/player_liquid_area_templates.lua — L23-L41](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/liquid_area/liquid_area_templates/player_liquid_area_templates.lua#L23-L41)
- [scripts/settings/buff/weapon_buff_templates.lua — L1493-L1572](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1572)
- [scripts/settings/buff/weapon_buff_templates.lua — L1598-L1635](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1598-L1635)
- [scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua — L528-L554](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L528-L554)
- [scripts/settings/talent/talent_settings_broker.lua — L191-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L205)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4253-L4295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4253-L4295)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1673-L1717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1673-L1717)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L668-L717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L668-L717)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L323-L352](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L323-L352)

## Example assumptions and limits

- **Toxic area:** the explosion leaves toxic matter for 15 seconds. Its shape spreads along the terrain. Enemies standing in it receive one stack of the same Toxin every 0.35 seconds, up to 6 stacks supplied by the area.

- **Toxin example:** at 6 stacks, each Damage calculation uses input Power 500 × 6 ÷ 30 = 100, then applies the Toxin curve and armour calculation. Other sources can raise the same Toxin to higher stacks; 6 is not a universal maximum for all Toxin.

- **Additional effects:** toxic matter makes enemies easier to Cleave through in Melee and marks them for a death explosion. The mark lasts 12 seconds; death while it remains active causes an explosion with a 2.5-metre radius. An enemy can therefore explode after leaving the area.

- **Ammunition:** carry up to 2 grenades, increased to 3 by Extra Pouches. The original Stagger grenade's close-kill replenishment is removed.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_blitz_tox_grenade`, hash `5ecc7244`, entry 6138: **Chem Grenade**.
- Description key `loc_talent_broker_blitz_tox_grenade_desc_02`, hash `cbe2dc42`, entry 13172.

Full raw template:

~~~text
Thrown grenade containing {toxin:%s}. The canister breaks open when it explodes, spilling its contents out across an area for {duration:%s}s.

Enemies standing in the toxic matter receive up to {max_stacks:%s} stacks of {toxin:%s} over time and explode upon death.

{max_charges:%s} Max Grenades.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toxin` | `loc_term_glossary_broker_toxin` | Localized string → `Chem Toxin` (hash `5ea7edc3`, entry 6134); export Writer suffix excluded |
| `max_charges` | `talent_settings.blitz.tox_grenade.max_charges = 2` | Number → `2` |
| `duration` | Literal `15` | Number → `15` |
| `max_stacks` | `broker_tox_grenade_in_liquid_buff.toxin_max_stacks = 6` | Number → `6`; accepted value reused |

Display mapping: [broker_talents.lua L674–697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L674-L697). Capacity and liquid stack limit reuse the verified evidence; the Toxin term comes from the same English UI batch.

Static reconstruction; not an observed game screen:

~~~text
Thrown grenade containing Chem Toxin. The canister breaks open when it explodes, spilling its contents out across an area for 15s.

Enemies standing in the toxic matter receive up to 6 stacks of Chem Toxin over time and explode upon death.

2 Max Grenades.
~~~

## English comparison

English describes the 15-second toxic area, the area's 6-stack contribution, death explosions and a two-grenade capacity consistently with existing evidence. It locates the stack limit in the toxic matter rather than stating a universal Toxin cap. Terrain flow, intervals, Cleave effects, residual marks after leaving and replacement of close-kill replenishment are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/tactical/broker_blitz_tox_grenade.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/7d3c5999-8823-4b54-9204-6e22637bc851). The icon identifies the talent; it is not mechanism evidence.
