# Suppression Force: source evidence

[繁體中文](../adamant_staggered_enemies_deal_less_damage.md) | [Player description](README.md#adamant_staggered_enemies_deal_less_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_staggered_enemies_deal_less_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_staggered_enemies_deal_less_damage`; name key `loc_talent_adamant_staggered_enemies_deal_less_damage`; description key `loc_talent_adamant_staggered_enemies_deal_less_damage_desc`. Node `node_5aaad316-c107-420b-9010-48668b673c58`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- `on_hit` skips kills and uses `on_melee_stagger_hit`, requiring a melee attack and `MinionState.is_staggered`. The push branch also requires `MinionState.is_staggered`. This state includes `count_as_staggered`, so the Concussive marker can satisfy it.
- The enemy debuff has `max_stacks = 1`, duration 5s and refresh, with `stat_buffs.damage = -0.2`. Attack calculation reads the damage stat from the attacker and adds it to the general damage stage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3719-L3728](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3719-L3728)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L537-L565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L537-L565)
- [scripts/utilities/minion_state.lua — L57-L72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L57-L72)
- [scripts/utilities/attack/damage_calculation.lua — L236-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/settings/talent/talent_settings_adamant.lua — L404-L407](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L404-L407)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3676-L3718](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3676-L3718)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2580-L2598](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2580-L2598)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2280-L2306](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2280-L2306)

## Example assumptions and limits

- **Trigger and refresh**: A melee attack or push hitting a Staggered enemy reduces that enemy's Damage by 20% for 5s. Another trigger resets the duration without stacking the multiplier.

- **Damage example**: With this debuff alone, an enemy's outgoing damage of 100 becomes 100 × (1 − 20%) = 80. This weakens the enemy's output; it does not deal extra damage to the enemy.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_staggered_enemies_deal_less_damage`, hash `55f60ca1`, entry 5590: **Suppression Force**.
- Description key `loc_talent_adamant_staggered_enemies_deal_less_damage_desc`, hash `cd6418d9`, entry 13276.

Full raw template:

~~~text
Staggering an Enemy makes them deal {damage:%s} Damage. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.staggered_enemies_deal_less_damage.damage = −0.2 | Percentage, no prefix → −20% |
| duration | talent_settings.staggered_enemies_deal_less_damage.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

~~~text
Staggering an Enemy makes them deal -20% Damage. Lasts 5s.
~~~

## English comparison

The independently read English makes them deal correctly describes reducing the enemy's outgoing Damage by 20% for 5s. Precise melee/push hit filters, the counted-as-Staggered interaction, refresh and the example are supplementary. The accepted Traditional Chinese wording reverses the effect direction by describing damage dealt to the enemy; that Chinese-only erratum does not apply to this English sentence. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_staggered_enemies_deal_less_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/af381ce2-1360-49a1-931d-6db3fb174166). The icon identifies the talent; it is not mechanism evidence.
