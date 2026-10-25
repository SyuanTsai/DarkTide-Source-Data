# Restoring Faith: source evidence

[繁體中文](../zealot_heal_part_of_damage_taken.md) | [Player description](README.md#zealot_heal_part_of_damage_taken) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_heal_part_of_damage_taken)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_heal_part_of_damage_taken`; name key `loc_talent_zealot_heal_damage_taken`; description key `loc_talent_zealot_heal_damage_taken_desc`. Node `node_53add57a-526d-4fc6-b8b2-1899b30b37a8`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_damage_taken` carries both `damage_amount` and `toughness_damage_amount`. When the victim is the holder, the template stores `damage_amount × 0.2`, excluding Toughness damage, in up to 10 healing slices.
- Each slice starts with `round(4 / 0.041666) = 96` ticks. Each tick contributes `current_damage / ticks` to healing. If the slice list is full, the new amount is added to the most recent slice; pending amounts are not cleared.
- The update requires `t > last_update + 0.041666` and performs at most one tick per update, without a catch-up loop. Four seconds is the designed duration; frame scheduling can extend the actual time.
- `Health.add` routes through `add_heal`, with healing multipliers and the permanent-damage cap.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3731-L3839](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3731-L3839)
- [scripts/settings/talent/talent_settings_zealot.lua — L402-L406](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L402-L406)
- [scripts/utilities/attack/damage.lua — L154-L180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L180)
- [scripts/utilities/health.lua — L16-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L16-L25)
- [scripts/extension_systems/health/player_unit_health_extension.lua — L212-L251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L212-L251)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3063-L3082](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3063-L3082)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L347-L372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L347-L372)

## Example assumptions and limits

- **Operation**: After taking Health damage, gradually heal 20% of that damage over about 4 seconds. Toughness damage does not contribute.
- **Additional damage**: A new hit adds another healing allowance without clearing healing still pending from earlier damage.
- **Healing example**: Losing 50 Health adds 10 healing, averaging 2.5 per second over the designed 4 seconds. Losing another 30 Health during that period adds 6 more pending healing.
- **Limit**: Healing fills only healable missing Health and does not remove Corruption.

- The existing Chinese comparison finds no explicit effect-direction contradiction. Timing precision and Health/Toughness distinction are supplementary details.
- The 96-tick calculation does not establish a precisely measured 4.000-second wall-clock duration. Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_heal_damage_taken`, hash `a90f2f4a`, entry 10902: **Restoring Faith**.
- Description key `loc_talent_zealot_heal_damage_taken_desc`, hash `c39c8d71`, entry 12614.

Full raw template:

~~~text
On taking Damage, heal {damage_reduction:%s} of that Damage. Occurs over {time:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_reduction` | 0.2 → 20% | `percentage`; `talent_settings_2.defensive_3.recuperate_percentage` |
| `time` | 4 → 4 | `number`; `talent_settings_2.defensive_3.duration` |

The minimal display mapping at `zealot_talents.lua` L3063-L3082 supplies the accepted healing proportion and designed duration.

Static reconstruction; not an observed game screen:

~~~text
On taking Damage, heal 20% of that Damage. Occurs over 4s.
~~~

## English comparison

The English describes healing 20% of damage taken over a designed 4 seconds, matching the accepted effect and values. It does not explicitly promise that Toughness damage also heals Health. The Health-damage basis, additive pending slices, 96 ticks, possible scheduling extension, healing multipliers and Corruption cap supplement the wording; no explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_heal_part_of_damage_taken.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/0849a882-e966-43d8-8786-554a7a657ee2). The icon identifies the talent; it is not mechanism evidence.
