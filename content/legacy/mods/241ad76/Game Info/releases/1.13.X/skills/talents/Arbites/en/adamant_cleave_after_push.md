# Drive them Back: source evidence

[繁體中文](../adamant_cleave_after_push.md) | [Player description](README.md#adamant_cleave_after_push) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_cleave_after_push)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_cleave_after_push`; name key `loc_talent_adamant_cleave_after_push`; description key `loc_talent_adamant_cleave_after_push_desc`. Node `node_b4b7879c-20cc-40d3-ac4f-955b154a16e7`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_push_finish` requires `num_hit_units > 0`. The proc adds only `max_melee_hit_mass_attack_modifier = 0.75`; it does not increase the impact hit-mass limit and applies only to melee damage cleave.

## Fixed source evidence

- [scripts/utilities/attack/damage_profile.lua — L36-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L62)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L303-L357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua — L227-L230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L227-L230)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2513-L2530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2513-L2530)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1308-L1326](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1308-L1326)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1541-L1570](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1541-L1570)

## Example assumptions and limits

- **Trigger and refresh**: A push hitting at least one enemy grants 75% more melee damage cleave capacity for 5s. Another push hitting an enemy resets the duration.

- **Cleave example**: Isolating this effect, an original capacity to pass through 10 units of enemy mass becomes 10 × 1.75 = 17.5 units. This increases damage penetration capacity without also increasing stagger penetration capacity.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_cleave_after_push`, hash `f4653e5e`, entry 15871: **Drive them Back**.
- Description key `loc_talent_adamant_cleave_after_push_desc`, hash `1389250b`, entry 1261.

Full raw template:

```text
Pushing grants {cleave:%s} Cleave for {duration:%s}s.
```

| Placeholder | Value | Formatting |
|---|---|---|
| cleave | talent_settings.cleave_after_push.cleave = 0.75 | Percentage; no prefix configured → 75% |
| duration | talent_settings.cleave_after_push.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

```text
Pushing grants 75% Cleave for 5s.
```

## English comparison

The independently read English agrees with the 75% Cleave bonus and 5s duration. The required push hit, melee damage-capacity scope, refresh and example are omitted details. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_cleave_after_push.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/7b24cc5d-1975-4762-8b77-8899c0713175). The icon identifies the talent; it is not mechanism evidence.
