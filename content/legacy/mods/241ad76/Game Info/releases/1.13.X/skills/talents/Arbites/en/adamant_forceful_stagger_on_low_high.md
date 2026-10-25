# Judicial Force: source evidence

[繁體中文](../adamant_forceful_stagger_on_low_high.md) | [Player description](README.md#adamant_forceful_stagger_on_low_high) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_forceful_stagger_on_low_high)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_forceful_stagger_on_low_high`; node `node_deba29d6-030f-474a-9992-b6c75ee570bf`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- `adamant_forceful_stagger` records the previous and current stack counts. A positive count falling to zero creates the explosion if the low timer is ready, then sets that timer to `t + 5`. A count below 10 rising to at least 10 similarly checks and resets the high timer.
- The local settings supply `low_stacks = 0`, `high_stacks = 10` and `internal_cd = 5` to the display. The explosion template has a 2.5m radius; creation uses `power_level = 750` and the `ogryn_charge_finish` damage profile.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1603-L1625](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1603-L1625)
- [scripts/settings/talent/talent_settings_adamant.lua — L268-L284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L268-L284)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1451-L1475](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1451-L1475)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1435-L1449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1435-L1449)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L147-L163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L147-L163)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1603-L1625](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1603-L1625)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L986-L1009](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L986-L1009)

## Example assumptions and limits

- **Triggers**: Stagger enemies within 2.5m when Forceful rises from below maximum to 10 stacks or falls from at least one stack to zero. Remaining continuously at zero or 10 stacks does not repeatedly trigger the effect.

- **Cooldown example**: The maximum-stack and zero-stack triggers each have an independent 5s cooldown. If all stacks are lost 1s after the maximum-stack stagger, the zero-stack stagger can still trigger. The same trigger must wait a full 5s before triggering again.

Rising from 9 to 10 stacks triggers the high-stack explosion. A subsequent fall to zero checks the independent low timer and its 5s cooldown. This example assumes the relevant timer is ready.

The description names Stagger; the implementation also creates an explosion with an attack profile. Actual Damage and Stagger depend on the profile, target and shared explosion calculations. The final wording and in-game results remain unobserved.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_forceful_melee`, hash `83209589`, entry 8524: **Judicial Force**.
- Description key `loc_talent_adamant_forceful_stagger_on_low_high_desc`, hash `ef289d31`, entry 15549.

Full raw template:

```text
Stagger nearby Enemies upon reaching {low_stacks:%s} Stacks or {high_stacks:%s} Stacks. {cooldown:%s}s Cooldown (separate for each).
```

The display maps `low_stacks`, `high_stacks` and `cooldown` to the corresponding `talent_settings.forceful` values below. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| low_stacks | 0 | Number → 0 |
| high_stacks | 10 | Number → 10 |
| cooldown | internal_cd = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

```text
Stagger nearby Enemies upon reaching 0 Stacks or 10 Stacks. 5s Cooldown (separate for each).
```

## English comparison limits

The independently read English matches the 0/10 stack thresholds, nearby Stagger and separate 5s cooldowns. Transition checks, the timing example, 2.5m radius and explosion profile are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_forceful_stagger_on_low_high.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/62f41d0b-cd55-459d-b4d7-c8c155da410f). The icon identifies the talent; it is not mechanism evidence.
