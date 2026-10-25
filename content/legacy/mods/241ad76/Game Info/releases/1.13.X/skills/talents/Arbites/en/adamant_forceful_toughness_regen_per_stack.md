# Will of the Lex: source evidence

[繁體中文](../adamant_forceful_toughness_regen_per_stack.md) | [Player description](README.md#adamant_forceful_toughness_regen_per_stack) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_forceful_toughness_regen_per_stack)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_forceful_toughness_regen_per_stack`; node `node_26aa2932-e1d8-4b3b-9a28-f6d71f977f56`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- `talent_settings.forceful.toughness = 0.005`. The `adamant_forceful_stacks` update calls `Toughness.replenish_percentage` with `toughness_per_second × dt × stack_count`. The talent extension determines whether the special rule is enabled.
- `recover_percentage_toughness` multiplies the fraction by `max_toughness`, applies Toughness-recovery stat buffs and limits actual replenishment by the current Toughness damage/deficit.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1531-L1546](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1531-L1546)
- [scripts/settings/talent/talent_settings_adamant.lua — L268-L284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L268-L284)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1293-L1309](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1293-L1309)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1359-L1365](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1359-L1365)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1531-L1546](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1531-L1546)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L886-L911](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L886-L911)

## Example assumptions and limits

- **Condition and recovery**: Each Forceful stack replenishes 0.5% of maximum Toughness per second. This effect occurs only while you have Forceful stacks.

- **Full-stack example**: At 10 stacks, replenish `10 × 0.5% = 5% of maximum Toughness per second`. With maximum Toughness 100, that is theoretically 5 points per second, but actual replenishment cannot exceed the current Toughness deficit.

With maximum Toughness 100 and 10 Forceful stacks, `100 × 0.005 × 10 = 5 points/s` before recovery modifiers. If the current deficit is only 3 points, actual replenishment is at most 3 points. Recovery accumulates according to the update's `dt` and is affected by the current deficit, recovery modifiers and recovery-blocking rules.

The examples isolate the stated rate and assume a stable stack count over the stated time. Recovery percentages refer to maximum Toughness. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed. Wording differences are compared against existing implementation evidence without assuming a translation error.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_forceful_toughness_regen`, hash `a269e9cf`, entry 10492: **Will of the Lex**.
- Description key `loc_talent_adamant_forceful_toughness_regen_per_stack_desc`, hash `16db451b`, entry 1487.

Full raw template:

```text
Replenish {toughness:%s} Toughness each second per Stack.
```

The display maps `toughness` to `talent_settings.forceful.toughness` with percentage formatting and a `+` prefix. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | 0.005 | Percentage × 100 with `+` prefix → +0.5% |

Static reconstruction; not an observed game screen:

```text
Replenish +0.5% Toughness each second per Stack.
```

## English comparison limits

The independently read English matches the recovery fraction and per-second, per-stack rate. The Forceful context, special-rule gate, update-time integration, maximum-resource denominator, recovery modifiers/blocking, deficit cap and examples are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_forceful_toughness_regen_per_stack.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/1016875d-cc4c-44f2-8a06-c93155d482d4). The icon identifies the talent; it is not mechanism evidence.
