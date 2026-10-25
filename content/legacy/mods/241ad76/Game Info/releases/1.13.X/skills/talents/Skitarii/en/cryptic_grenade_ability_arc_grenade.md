# Arc Grenades: source evidence

[繁體中文](../cryptic_grenade_ability_arc_grenade.md) | [Player description](README.md#cryptic_grenade_ability_arc_grenade) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_grenade_ability_arc_grenade)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_grenade_ability_arc_grenade`; name key `loc_talent_cryptic_arc_grenades`; description key `loc_talent_cryptic_arc_grenades_capacitance_gain_desc`. Node `node_a09226d4-6e29-4806-982f-f00da2c2ec60`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The base talent equips `PlayerAbilities.arc_grenade` in the Blitz slot. Its ability has `max_charges = 3`, consumes 1 per use and uses `extra_max_amount_of_grenades` as its capacity stat. The explosion radius is `talent_settings.cryptic.arc_grenade.radius = 10`; the initial target limit is `base_num_arcs = 4`. The explosion template prioritises certain heavy/Specialist breeds, then targets with the `elite` tag, then fills the remaining slots with other valid enemies. Each selected target starts `arc_grenade_chain_lightning_source`. Each chain has `chain_settings` of a 12m radius, at most 5 jumps and 1 target per jump. The passive `cryptic_arc_grenades_capacitance_generation` accepts only Elite or Specialist kills whose `damage_profile.name` is `arc_grenade`, `arc_grenade_chain_jump_damage` or `cryptic_arc_grenade_shock_damage`. Each qualifying kill calls `restore_ability_charge_percentage(combat_ability, 0.04)`, restoring 0.04 charges of Combat Ability Capacitance. Initial explosion selection checks `breed.breed_tags.elite`, whereas chain jumps check `breed.tags.elite`; these field names differ. The four specifically prioritised breeds are clearly consistent between the two selections. Do not assign every Armoured enemy and Specialist the same priority. The `arc_grenade` ability is `only_uses_charges`; the configured `cooldown = 75` is not connected to an ability resource countdown, so this is not a natural 75s recharge.
- The area explosion template `arc_grenade` uses a fixed power level of 500 and references `DamageProfileTemplates.arc_grenade`. Its power distribution is attack 0 / impact 50, with armour modifiers listed in the damage profile. Each arc jump references `arc_grenade_chain_jump_damage`, with attack 0 / impact 10, and also applies `arc_chain_damage`. Adding a chain node applies `arc_grenade_electrocution` and a target marker. The Electrocution template has one stack, `duration = 1.1`, `interval = 0.2`, starts the interval on application and uses a frame offset. On the server, living targets other than an already downed Poxburster receive `cryptic_arc_grenade_shock_damage`. This profile copies `cryptic_discharge_shock_damage`, sets `skip_on_hit_proc = true` and uses attack 600 / impact 100 power distribution. These fields alone do not establish a fixed amount of Health lost by any enemy; damage resolution, the enemy, armour and hit stage still matter. The weapon Malfunction template accepts only living targets hit by a profile named `arc_grenade` or `arc_grenade_chain_jump_damage`. The shared Attack flow emits `on_hit` only when the damage profile does not set `skip_on_hit_proc`, so damage hits from the ongoing Electrocution do not trigger this Malfunction effect.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L920-L961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L920-L961)
- [scripts/settings/talent/talent_settings_cryptic.lua — L185-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L185-L194)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L195-L208](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L195-L208)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L482-L545](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L482-L545)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua — L21-L56](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L21-L56)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua — L58-L124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L58-L124)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1301-L1331](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1301-L1331)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L532-L600](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L532-L600)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L482-L520](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L482-L520)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L1204-L1250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1204-L1250)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L1724-L1819](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1724-L1819)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua — L59-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L59-L80)
- [scripts/settings/buff/weapon_buff_templates.lua — L2689-L2733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2689-L2733)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1332-L1343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1332-L1343)
- [scripts/utilities/attack/attack.lua — L577-L622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L622)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L920-L961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L920-L961)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1649-L1677](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1649-L1677)

## Example assumptions and limits

- **How it works**: The explosion has a 10m radius and sends arcs to up to 4 enemies, prioritising specific heavily armoured enemies before other Elites and valid targets. Each arc can chain to nearby enemies.
- **Chain range**: Each arc can chain up to 5 times within 12m; actual hits depend on valid enemies being nearby.
- **Electrocution damage**: The area explosion and arc jumps do not directly remove Health. Damage comes from ongoing Electrocution after the arc hits. Electrocution lasts about 1.1s and resolves once every 0.2s; damage per tick varies with enemy armour and other bonuses.
- **Damage example**: Suppose each Electrocution tick deals 12 damage to a particular target and this instance actually resolves 5 ticks: 12 × 5 = 60 damage. This illustrates addition; it does not mean every enemy always takes 60 damage.
- **Kill recharge**: When the Arc Grenade or its arcs kill an Elite or Specialist, each kill restores 0.04 charges of Capacitance.
- **Example**: Killing 3 qualifying enemies restores 3 × 0.04 = 0.12 charges of Capacitance. The grenade itself has at most 3 uses.
- **Capacitance example**: With 50 points per charge, each qualifying kill additionally restores 50 × 4% = 2 points; 3 kills give 6 points. This is the grenade's additional effect; the class's innate recharge on kills is separate.
- **Uses**: You can carry 3 grenades at base. They do not replenish themselves over time as the force field does.

- Three qualifying Elite/Specialist kills from Arc Grenade hit events each restore 0.04 charges, totalling 0.12 charges of Capacitance. Even if all 3 grenade uses are depleted, this restoration affects Combat Ability Capacitance, not grenade charges.
- Four is the maximum number of initial arc targets after the explosion; 4 targets are not guaranteed. Missing eligible enemies do not produce additional hits.
- Each arc chain has at most 5 jumps, with 1 target per jump. Actual chain length depends on enemy position, survival and Electrocution-chain target conditions.
- Capacitance is restored only for Elite or Specialist kills caused by the specified damage sources. Ordinary enemy kills do not trigger it.
- Attack/impact power distribution, power level and armour modifiers cannot be read as a fixed Health loss for every enemy. Giving an actual number for a named enemy would require that enemy's armour, hit location and full damage resolution.
- `duration = 1.1` and `interval = 0.2` confirm repeated resolution, but dividing the two alone does not establish a fixed tick count. Server update timing also affects the last resolution.
- These additions describe Arc Grenade damage structure and its restrictions on triggering weapon Malfunction; they are not in-game measurements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_arc_grenades`, hash `cfab3f3d`, entry 13419: **Arc Grenades**.
- Description key `loc_talent_cryptic_arc_grenades_capacitance_gain_desc`, hash `22344160`, entry 2221.

Full raw template:

~~~text
Throw an Arc Grenade, creating an electrical explosion that Arcs {number:%s} times, prioritising Armoured and Specialist Enemies, dealing massive damage and Impact. For each Elite or Specialist enemy killed by the Arc Grenade, generate {capacitance:%s} {capacitance_keyword:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{number:%s}` | 4 | `number`; no prefix |
| `{capacitance:%s}` | 0.04 → 4% | `percentage`; no prefix |
| `{capacitance_keyword:%s}` | `loc_talent_cryptic_power_keyword` → Capacitance | `loc_string`; hash `ecc15a9f`, entry 15388 |

The existing numerical evidence supplies 4 initial arcs and 0.04 charges per qualifying kill. The minimally read display map is `cryptic_talents.lua` L920-L961: `number` uses `base_num_arcs`; `capacitance` uses `capacitance_per_kill`; the keyword uses the same-build English localization above. `charges = 3` is configured as an unused format value in this template.

Static reconstruction; not an observed game screen:

~~~text
Throw an Arc Grenade, creating an electrical explosion that Arcs 4 times, prioritising Armoured and Specialist Enemies, dealing massive damage and Impact. For each Elite or Specialist enemy killed by the Arc Grenade, generate 4% Capacitance.
~~~

## English comparison

The 4 initial arcs and 4% Capacitance per qualifying Elite/Specialist kill agree with the accepted evidence. The broad Armoured/Specialist priority claim remains unresolved against the recorded specific-breed selection and differing elite-tag fields; it is not asserted as an English erratum. “Massive damage” is qualitative and supplies no fixed damage value. Chain limits, ongoing Electrocution damage, profile restrictions and grenade resource behavior are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical/cryptic_grenade_ability_arc_grenade.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/6a4875ee-4056-4964-ae36-846e598954bc). The icon identifies the talent; it is not mechanism evidence.
