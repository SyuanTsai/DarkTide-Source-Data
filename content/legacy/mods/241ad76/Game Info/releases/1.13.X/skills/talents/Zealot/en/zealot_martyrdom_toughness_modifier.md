# Restorative Verses: source evidence

[繁體中文](../zealot_martyrdom_toughness_modifier.md) | [Player description](README.md#zealot_martyrdom_toughness_modifier) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_martyrdom_toughness_modifier)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_martyrdom_toughness_modifier`; name key `loc_talent_zealot_martyrdom_toughness_modifier`; description key `loc_talent_zealot_martyrdom_toughness_modifier_upd_desc`. Node `node_4db4d1f1-d5b8-4d3f-a352-b50194ef96e4`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This node attaches `zealot_martyrdom_toughness_modifier`, modifying `toughness_replenish_modifier`. The Buff maximum is the configured 0.05 per Wound ×5, with linear interpolation by Martyrdom's missing-Wound count /5. From 0 to 5 Wounds, the bonus therefore rises from 0% to 25%.
- This stat multiplies Toughness restoration efficiency; it is not an immediate `Toughness.replenish_percentage` call. It must not be translated as directly restoring a fixed amount of Toughness per stack.
- Wound count is shared with Martyrdom: the update function takes the greater of `damage_taken` and `permanent_damage_taken`, then uses the Health helper to convert complete missing Wounds by maximum Health / maximum Wounds.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2300-L2319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2300-L2319)
- [scripts/settings/talent/talent_settings_zealot.lua — L122-L124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L122-L124)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L633-L652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L633-L652)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L680-L704](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L680-L704)
- [scripts/utilities/health.lua — L117-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L117-L127)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1598-L1622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1598-L1622)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2300-L2319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2300-L2319)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1598-L1622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1598-L1622)

## Example assumptions and limits

- **Operation**: Each complete missing Wound increases Toughness restored by 5%, up to 5 stacks and 25%. An existing restoration source is required; gaining stacks does not directly replenish Toughness.
- **Restoration example**: An effect normally restoring 10 Toughness restores 10 × (1 + 2 × 5%) = 11 at 2 stacks, or 12.5 at 5. With another 20% restoration bonus in the same stage, full stacks give 10 × (1 + 20% + 25%) = 14.5, still capped by missing Toughness.
- **Chinese original-text erratum**: The Chinese says each stack restores Toughness, which can imply immediate restoration on gaining a stack. The actual effect increases restoration amount by 5% per stack and works through other restoration sources.

- The example illustrates the modifier added to restoration efficiency; it does not include the final combination formula for other restoration modifiers.
- Each Wound's width depends on actual maximum Health and maximum Wound count. The configured `health_step=.15` is not read by the current calculation path.
- The accepted Chinese comparison at hash `d473a3ea` corrects Chinese wording that turns an efficiency increase into immediate 5% restoration. The English uses “Toughness Replenishment”; the accepted implementation attaches `toughness_replenish_modifier` and interpolates with missing Wounds. This Chinese correction remains separate from the independent English judgement.
- Actual game behavior and presentation remain unobserved; omitted details supplement the description.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_martyrdom_toughness_modifier`, hash `71808fb8`, entry 7377: **Restorative Verses**.
- Description key `loc_talent_zealot_martyrdom_toughness_modifier_upd_desc`, hash `d473a3ea`, entry 13741.

Full raw template:

~~~text
{talent_name:%s} grants {toughness_modifier:%s} Toughness Replenishment per stack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_zealot_martyrdom`: Martyrdom | `loc_string`; hash `15d87f95`, entry 1420 |
| `toughness_modifier` | 0.05 → 5% | `percentage`; `talent_settings.zealot_martyrdom_toughness_modifier.toughness_modifier` |

The minimal display mapping at `zealot_talents.lua` L2300-L2314 supplies the accepted per-stack modifier and localized Martyrdom name.

Static reconstruction; not an observed game screen:

~~~text
Martyrdom grants 5% Toughness Replenishment per stack.
~~~

## English comparison

The English gives 5% Toughness Replenishment per Martyrdom stack. In this stat description, it names the replenishment bonus rather than explicitly promising an immediate restoration event, agreeing with the accepted modifier. The five-stack cap, complete-Wound calculation, need for another restoration source, same-stage addition and missing-Toughness limit are supplements. The Chinese wording correction is retained separately; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_martyrdom_toughness_modifier.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/5ac46e08-8f7b-4828-8bfa-e47c240e113b). The icon identifies the talent; it is not mechanism evidence.
