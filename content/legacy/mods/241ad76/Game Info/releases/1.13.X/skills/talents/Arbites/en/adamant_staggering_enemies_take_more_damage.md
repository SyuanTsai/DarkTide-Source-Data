# Target the Weak: source evidence

[繁體中文](../adamant_staggering_enemies_take_more_damage.md) | [Player description](README.md#adamant_staggering_enemies_take_more_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_staggering_enemies_take_more_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_staggering_enemies_take_more_damage`; name key `loc_talent_adamant_staggered_enemies_take_more_damage`; description key `loc_talent_ogryn_big_bully_heavy_hits_new_desc`. Node `node_52362bbc-c8ce-4652-886a-b4039d370d38`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- The parent uses the same melee/push and `is_staggered` condition as Suppression Force. The predicate also accepts `count_as_staggered`; it does not require that the triggering hit caused a new Stagger.
- The enemy child has `melee_damage_taken_modifier = 0.15`, `max_stacks = 1`, duration 5s and refresh. Target `damage_taken_modifier` and `melee_damage_taken_modifier` add, then multiply the attacker damage stage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3666-L3675](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3666-L3675)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L537-L565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L537-L565)
- [scripts/utilities/minion_state.lua — L57-L72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L57-L72)
- [scripts/utilities/attack/damage_calculation.lua — L587-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/settings/talent/talent_settings_adamant.lua — L400-L403](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L400-L403)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3623-L3665](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3623-L3665)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2560-L2579](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2560-L2579)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2333-L2357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2333-L2357)

## Example assumptions and limits

- **Behavior and refresh**: A melee attack or push hitting a Staggered enemy makes it take 15% more Melee Damage for the next 5s. You and teammates can benefit. Another trigger resets the duration without increasing the amount.

- **Damage examples**: Isolating the target damage-taken stage, melee damage 100 becomes 115. With a separate 25% attacker damage bonus, the stages multiply: 100 × 1.25 × 1.15 = 143.75. If the target instead already has a same-stage 25% damage-taken increase, damage is 100 × (1 + 25% + 15%) = 140.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_staggered_enemies_take_more_damage`, hash `e1845001`, entry 14627: **Target the Weak**.
- Description key `loc_talent_ogryn_big_bully_heavy_hits_new_desc`, hash `45b6dfbf`, entry 4522.

Full raw template:

~~~text
Enemies staggered by your Melee Attacks take {damage:%s} more Melee Damage for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.staggering_enemies_take_more_damage.damage = 0.15 | Percentage, + prefix → +15% |
| duration | talent_settings.staggering_enemies_take_more_damage.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

~~~text
Enemies staggered by your Melee Attacks take +15% more Melee Damage for 5s.
~~~

## English comparison

The independently read English agrees with the melee/Stagger case and the enemy taking 15% more Melee Damage for 5s. The actual hit-state predicate also permits already-Staggered targets, pushes and the counted-as-Staggered state; those cases are not described. Team benefit, refresh and distinct attacker/target damage-stage examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_staggering_enemies_take_more_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/aa78a41a-3cea-4e8d-ba36-4496c3619be7). The icon identifies the talent; it is not mechanism evidence.
