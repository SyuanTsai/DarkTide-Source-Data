# Zealous Dedication: source evidence

[繁體中文](../adamant_crit_chance_on_kill.md) | [Player description](README.md#adamant_crit_chance_on_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_crit_chance_on_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_crit_chance_on_kill`; name key `loc_talent_adamant_crit_chance_on_kill`; description key `loc_talent_adamant_crit_chance_on_kill_desc`. Node `node_62deceb2-66cd-4494-b96d-27b9fcc8732b`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_hit` checks `on_kill` before adding the child buff, which has `max_stacks = 8`, `max_stacks_cap = 8`, duration 10s and refresh. Each stack adds `critical_strike_chance = 0.02` to class, weapon and other sources; the final chance is clamped to `0..1`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3467-L3483](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3467-L3483)
- [scripts/utilities/attack/critical_strike.lua — L15-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L15-L39)
- [scripts/extension_systems/buff/buff_extension_base.lua — L560-L589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/settings/talent/talent_settings_adamant.lua — L371-L375](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L371-L375)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3449-L3466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3449-L3466)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2395-L2417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2395-L2417)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1852-L1880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1852-L1880)

## Example assumptions and limits

- **Stacks and refresh**: Each kill grants 1 stack, adding 2 percentage points of Critical Strike Chance per stack, up to 8 stacks. Another kill resets the 10s duration of all stacks, including at the cap.

- **Chance example**: An original 5% Critical Strike Chance becomes 5% + 8 × 2% = 21% at full stacks. This does not multiply the original 5% by 1.16.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_crit_chance_on_kill`, hash `af841369`, entry 11300: **Zealous Dedication**.
- Description key `loc_talent_adamant_crit_chance_on_kill_desc`, hash `4411328c`, entry 4410.

Full raw template:

```text
{crit_chance:%s} Critical Strike Chance on Kill. {max_stacks:%s} Stacks. Lasts {duration:%s}s.
```

| Placeholder | Value | Formatting |
|---|---|---|
| crit_chance | talent_settings.crit_chance_on_kill.crit_chance = 0.02 | Percentage; no prefix configured → 2% |
| max_stacks | talent_settings.crit_chance_on_kill.max_stacks = 8 | Number → 8 |
| duration | talent_settings.crit_chance_on_kill.duration = 10 | Number → 10; template adds s |

Static reconstruction; not an observed game screen:

```text
2% Critical Strike Chance on Kill. 8 Stacks. Lasts 10s.
```

## English comparison

The independently read English agrees with kills, the 2% per-stack critical-chance value, eight-stack cap and 10s duration. Capped-stack refresh, additive percentage points, the final clamp and worked example are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_crit_chance_on_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/c776951e-d8de-46cb-ad58-7c14af6b0997). The icon identifies the talent; it is not mechanism evidence.
