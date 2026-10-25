# No Lenience: source evidence

[繁體中文](../adamant_execution_order_rending.md) | [Player description](README.md#adamant_execution_order_rending) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_execution_order_rending)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_execution_order_rending`; node `node_8abdbb78-a06d-4d97-959a-a46930ab0752`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- When the Marked target dies, `_execution_order_proc` creates `adamant_execution_order_rending` if this upgrade's special rule is selected. The effect lasts 8s, has max stacks = 1 and supplies `stat_buffs.rending_multiplier = 0.10`.
- Shared `_rending_multiplier` reads `attacker_stat_buffs.rending_multiplier`, combines it with Brittleness, attack type, Critical Hit, Backstab, target Stagger and other modifiers, then clamps the result to 1.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2191-L2210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2191-L2210)
- [scripts/settings/talent/talent_settings_adamant.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L102-L119)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L958-L977](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L958-L977)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1137-L1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1137-L1149)
- [scripts/utilities/attack/damage_calculation.lua — L629-L660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/utilities/attack/damage_calculation.lua — L63-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L63-L89)
- [scripts/settings/damage/armor_settings.lua — L8-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2191-L2210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2191-L2210)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1778-L1802](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1778-L1802)

## Example assumptions and limits

- **Trigger and duration**: Killing a Marked enemy grants +10% Rending for 8s. Retriggering refreshes the duration.

- **Damage examples**: At base damage 100 and an original armor-damage coefficient of 0.5, damage rises from 50 to 100 × (0.5 + 0.1) = 60, a 20% increase. If the coefficient is already 1 and the armor supports excess conversion, the result is 100 × (1 + 0.1 × 0.25) = 102.5.

For 8s after a Marked Kill, the Rending modifier gains an additional 0.10. If shared Rending has already reached its 1.0 cap, this bonus cannot raise the final Rending value above 1.

The examples isolate this bonus and assume the stated armor coefficient. The second applies only to armor that supports excess conversion. Rending is not an unconditional +10% final-damage increase; the gain depends on armor and the shared Rending cap.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_exterminator_stack_during_activation`, hash `e3aa4980`, entry 14759: **No Lenience**.
- Description key `loc_talent_execution_order_command_applies_brittleness_description`, hash `59853225`, entry 5802. The `[Writer]` suffix is resource metadata.

Full raw template:

```text
You gain {rending:%s} Rending for {time:%s}s after a Marked Kill.
```

The display maps `rending` and `time` to the corresponding `talent_settings.execution_order` values below. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| rending | 0.10 | Percentage with + prefix → +10% |
| time | 8 | Number → 8; template adds s |

Static reconstruction; not an observed game screen:

```text
You gain +10% Rending for 8s after a Marked Kill.
```

## English comparison limits

The independently read English matches the Marked Kill trigger, +10% Rending and 8s duration. Refresh behavior, the one-stack limit, shared aggregation/cap and armor-dependent examples are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_execution_order_rending.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/ab53bec8-fd00-470c-8c5d-46cc58904f13). The icon identifies the talent; it is not mechanism evidence.
