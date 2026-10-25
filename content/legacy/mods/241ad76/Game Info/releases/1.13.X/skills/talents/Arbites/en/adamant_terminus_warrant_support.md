# Terminal Decree: source evidence

[繁體中文](../adamant_terminus_warrant_support.md) | [Player description](README.md#adamant_terminus_warrant_support) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_terminus_warrant_support)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_terminus_warrant_support`; node `node_446b745a-e92e-4e31-8cc0-0ee5327f5674`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The support special rule makes the Terminus core read `current_stacks` when the corresponding weapon is wielded, before consuming the tracker. It calls `Toughness.replenish_percentage` with `0.01 × clamp(current_stacks, 0, max_stacks)`.
- The same resolution iterates `coherency_extension:in_coherence_units()` and restores each unit; it also restores the triggerer when that collection includes them. `recover_percentage_toughness` multiplies maximum Toughness by the percentage and limits recovery to the missing amount.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1886-L1901](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1886-L1901)
- [scripts/settings/talent/talent_settings_adamant.lua — L331-L370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L331-L370)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1661-L1672](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1661-L1672)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1693-L1704](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1693-L1704)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1886-L1901](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1886-L1901)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1702-L1726](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1702-L1726)

## Example assumptions and limits

- **Trigger and recipients**: Spending Melee Justice or Ranged Justice restores Toughness to you and Allies in Coherency. Spending fewer than 20 stacks scales the recovery by the actual count spent.

- **Recovery example**: Each stack restores 1% of maximum Toughness; spending 20 stacks restores 20%. At 100 maximum Toughness this is 20 points, or 7 points when spending seven stacks. Each recipient remains limited by their own missing Toughness.

At 100 maximum Toughness, the triggerer and Allies in Coherency each restore 20 points when 20 stacks are spent. A recipient missing only 8 points receives at most 8.

Each ally's actual recovery depends on their own maximum Toughness, missing amount, recovery modifiers and Toughness recovery blocking. The examples assume no additional recovery modifier or block.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_bullet_rain_toughness`, hash `6b0eb0f7`, entry 6967: **Terminal Decree**.
- Description key `loc_talent_adamant_terminus_warrant_support_desc`, hash `6902a21b`, entry 6848.

Full raw template:

```text
For each stack you spend, replenish {toughness:%s} Toughness to you and Allies in Coherency.
```

The display maps `toughness` to `talent_settings.terminus_warrant.toughness_replenish`. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | 0.01 | Percentage with + prefix → +1% |

Static reconstruction; not an observed game screen:

```text
For each stack you spend, replenish +1% Toughness to you and Allies in Coherency.
```

## English comparison limits

The independently read English matches per-spent-stack recovery, +1% Toughness per stack and self/Coherency recipients. The base stack cap, numerical examples and recipient-specific recovery limits are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_terminus_warrant_support.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/053a0db6-481b-4944-9077-d1d9a05759dd). The icon identifies the talent; it is not mechanism evidence.
