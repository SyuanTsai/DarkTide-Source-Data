# Capacitory Limit Override: source evidence

[繁體中文](../cryptic_redline_rending.md) | [Player description](README.md#cryptic_redline_rending) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_redline_rending)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_redline_rending`; name key `loc_talent_cryptic_power_generation_capacitance_bonuses`; description key `loc_talent_cryptic_redline_rending_clarified_desc`. Node `node_251b440a-215d-43dd-971f-a57d019e75ad`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent enables the Rending bonus through a special rule. The verified threshold is 3 stacks, with `rending_multiplier = 0.15`.
- The Redline Capacitors root buff enables `rending_multiplier` in its `conditional_stat_buffs` only when this modifier is selected and the current `cryptic_redline_stack` count is at least 3. This stat directly uses `0.15`; it is not repeatedly applied for each current stack.
- `buff_settings` defines the general `rending_multiplier` as an `additive_multiplier`. Rending participates in armour damage calculation and cannot independently be equated to 15% more final damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1506-L1530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1506-L1530)
- [scripts/settings/talent/talent_settings_cryptic.lua — L350-L353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L350-L353)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1868-L1900](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1868-L1900)
- [scripts/settings/buff/buff_settings.lua — L961-L961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L961-L961)
- [scripts/utilities/attack/damage_calculation.lua — L122-L247](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L122-L247)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1506-L1530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1506-L1530)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1218-L1240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1218-L1240)

## Example assumptions and limits

- **Trigger**: Active at **3 or more Redline Capacitors stacks**; inactive at **2 or fewer**.
- **Effect**: Gain **+15% Rending**. At 3, 4 or additional stacks, the value remains 15%; it does not accumulate per stack.
- **Damage example**: Comparing only the armour stage, assume pre-armour damage `100`, original armour multiplier `0.5`, and a Rending coefficient of `1` for that armour type. The original result is `100 × 0.5 = 50`; with the bonus, `100 × (0.5 + 0.15) = 65`. This example increases damage by 30%. Different armour multipliers give different increases; this effect does not simply multiply all damage by `1.15`.

#### Traditional Chinese original-text correction

- The Traditional Chinese template swaps the stack count and talent name. After substitution, its condition is equivalent to “while 3 reaches Redline Capacitors stacks or above.” The correct condition is “at 3 or more Redline Capacitors stacks, gain 15% Rending.” The corresponding English puts the stack count and name in the correct positions.

- This is a Rending modifier, not a direct `×1.15` multiplier on all damage.
- The effect depends on meeting the 3-stack threshold; exceeding it does not raise the Rending value.
- The verified Traditional Chinese issue places `{stacks}` in the subject position and `{talent_name}` in the quantity position. This is a confirmed placeholder-position error in that language resource, not an omitted calculation. The independent English reading supports the correct 3-stack condition.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_power_generation_capacitance_bonuses`, hash `906dcd58`, entry 9329: **Capacitory Limit Override**.
- Description key `loc_talent_cryptic_redline_rending_clarified_desc`, hash `477f3a77`, entry 4641.

Full raw template:

~~~text
{rending:%s} Rending while at {stacks:%s} {talent_name:%s} stacks or above.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `rending` | +15% | `percentage`, prefix `+`: `rending_multiplier = 0.15` |
| `stacks` | 3 | `number`: `num_stacks_needed = 3` |
| `talent_name` | Redline Capacitors | `loc_string`: `loc_talent_cryptic_power_generation` |

The formatting block in `cryptic_talents.lua` L1515–L1529 uses the verified threshold and modifier. The parent name is paired with `loc_talent_cryptic_power_generation`, hash `765c4c20`, entry `7686`: Redline Capacitors.

Static reconstruction; not an observed game screen:

~~~text
+15% Rending while at 3 Redline Capacitors stacks or above.
~~~

## English comparison

The English explicitly states +15% Rending at 3 Redline Capacitors stacks or above, matching the threshold and fixed bonus. Its number and name placeholders are in the correct positions. The Traditional Chinese placeholder correction is preserved separately and is not an English erratum. The fixed bonus above the threshold and armour-stage example are supplementary details; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_redline_rending.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/bd0f7682-079c-4c61-bae6-b759aa2608e9). The icon identifies the talent; it is not mechanism evidence.
