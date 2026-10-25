# Towering Presence: source evidence

[繁體中文](../ogryn_coherency_radius_increase.md) | [Base effects](BASE_EFFECTS.md#ogryn_coherency_radius_increase) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_coherency_radius_increase)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `ogryn_coherency_radius_increase`; no selectable talent point is spent. Name key `loc_talent_ogryn_bigger_coherency_radius`; description key `loc_talent_ogryn_bigger_coherency_radius_desc`. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The current base talent mounts `ogryn_bigger_coherency_radius`, reading `ogryn_2.coop_1.coherency_aura_size_increase=0.5`. Do not substitute the old template solely from a same-name `related_talents` entry.
- `UnitCoherencyExtension.current_radius` multiplies `base_radius` by `coherency_radius_modifier`, then by the independent multiplier. If `stickiness_limit` exists, it scales by the same factor.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1299-L1305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1299-L1305)
- [scripts/settings/talent/talent_settings_ogryn.lua — L334-L336](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L334-L336)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L144-L174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L144-L174)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1314-L1330](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1314-L1330)
- [scripts/settings/archetype/archetypes/ogryn_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)

## Examples and limits

- **Coherency area**: Increase your Coherency radius by 50%. This does not increase the aura's damage or replenishment percentages.

- **Radius example**: If the original radius is 15m, it becomes `15 × (1 + 50%) = 22.5m`. With another +25% at the same stage, it becomes `15 × (1 + 50% + 25%) = 26.25m`.

The 15m example is a fixed baseline illustrating the multiplier. Actual base_radius comes from the scene's character Coherency settings and is affected by link and leaving-grace rules. Local Build 25606770 corresponds to the fixed 1.13.1 source. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_bigger_coherency_radius`, hash `4835808d`, entry 4687: **Towering Presence**.
- Description key `loc_talent_ogryn_bigger_coherency_radius_desc`, hash `e8f86074`, entry 15125.

Full raw template:

~~~text
{radius:%s} Coherency radius.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| radius | talent_settings_2.coop_1.coherency_aura_size_increase = 0.5 | Percentage with explicit + prefix → +50% |

Only the missing text mapping / display formatting in the cited talent definition, lines 1314–1330, was read. Accepted mechanisms, values, examples and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+50% Coherency radius.
~~~

## English comparison

The independently read English grants +50% Coherency radius, matching the accepted current-template radius modifier. It does not claim increased aura strength. Same-stage addition, the independent multiplier, stickiness scaling and conditional 15m example supplement the text. No explicit English contradiction is established.
