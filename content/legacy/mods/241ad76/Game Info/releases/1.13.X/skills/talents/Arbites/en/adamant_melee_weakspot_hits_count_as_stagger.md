# Concussive: source evidence

[繁體中文](../adamant_melee_weakspot_hits_count_as_stagger.md) | [Player description](README.md#adamant_melee_weakspot_hits_count_as_stagger) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_melee_weakspot_hits_count_as_stagger)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_melee_weakspot_hits_count_as_stagger`; name key `loc_talent_adamant_melee_weakspot_hits_count_as_stagger`; description key `loc_talent_adamant_melee_weakspot_hits_count_as_stagger_desc`. Node `node_46db21b8-af36-49bf-a4b3-8a79d303edb2`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- Melee Weakspot Hits add a debuff with duration 4s and `keyword = count_as_staggered`. No `max_stacks` is set, so multiple instances are possible.
- `MinionState.is_staggered` and `DamageCalculation` read this keyword. The separate `adamant_melee_weakspots_count_as_staggered` rule makes `on_staggering_hit` accept the same melee Weakspot Hit.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1979-L1986](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1979-L1986)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L543-L558](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L543-L558)
- [scripts/utilities/minion_state.lua — L57-L72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L57-L72)
- [scripts/utilities/attack/damage_calculation.lua — L446-L450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L446-L450)
- [scripts/settings/talent/talent_settings_adamant.lua — L408-L410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L408-L410)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1963-L1978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1963-L1978)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2599-L2617](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2599-L2617)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2307-L2332](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2307-L2332)

## Example assumptions and limits

- **Behavior**: Melee Weakspot Hits make the target count as Staggered for related talents for 4s; physically knocking it back is not required. Another qualifying hit extends the period in which it counts as Staggered.

- **Synergy example**: With Breaking Dissent's 10% Damage against Staggered enemies, a later qualifying base-100 attack becomes 100 × 1.1 = 110. Concussive alone does not grant damage or force the enemy to recoil.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_melee_weakspot_hits_count_as_stagger`, hash `cc861343`, entry 13221: **Concussive**.
- Description key `loc_talent_adamant_melee_weakspot_hits_count_as_stagger_desc`, hash `3be4daea`, entry 3891.

Full raw template:

~~~text
Melee Weakspot hits make the enemy count as Staggered for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| duration | talent_settings.melee_weakspot_hits_count_as_stagger.duration = 4 | Number → 4; template adds s |

Static reconstruction; not an observed game screen:

~~~text
Melee Weakspot hits make the enemy count as Staggered for 4s.
~~~

## English comparison

The independently read English agrees with Melee Weakspot Hits making the enemy count as Staggered for 4s. The wording does not promise a forced Stagger animation. Multiple debuff instances, the same-hit special rule and the conditional Breaking Dissent example are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_melee_weakspot_hits_count_as_stagger.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/2577c784-85c4-473c-b9ba-a88f8de35355). The icon identifies the talent; it is not mechanism evidence.
