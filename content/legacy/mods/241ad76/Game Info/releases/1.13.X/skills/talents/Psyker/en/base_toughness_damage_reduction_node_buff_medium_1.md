# Toughness Damage Reduction: source evidence

[繁體中文](../base_toughness_damage_reduction_node_buff_medium_1.md) | [Player description](README.md#base_toughness_damage_reduction_node_buff_medium_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_toughness_damage_reduction_node_buff_medium_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_toughness_damage_reduction_node_buff_medium_1`; name key `loc_talent_toughness_damage_reduction_medium`; description key `loc_talent_toughness_damage_reduction_medium_desc`. Node `node_9049de9c-7aef-4bda-bc26-2892d147c486`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `player_toughness_damage_reduction_node_buff_medium_1` uses `toughness_damage_taken_modifier = −0.1`.
- This is an `additive_multiplier`, rather than `toughness_damage_taken_multiplier`.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L432-L443](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L432-L443)
- [scripts/settings/buff/buff_settings.lua — L1000-L1020](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1000-L1020)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L437-L463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1680-L1709](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1680-L1709)

## Example assumptions and limits

- **Effect**: reduce Toughness Damage by 10% in this reduction stage; this does not reduce Health Damage.

- **Reduction example**: with an original 100 points of Toughness Damage and no other reduction in this stage, 100 × (1 − 10%) = 90 points. With an existing 5% reduction in the same stage, 100 × (1 − 5% − 10%) = 85 points. Other independent multiplicative reductions apply separately.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_toughness_damage_reduction_medium`, hash `4cf5defc`, entry 5002: **Toughness Damage Reduction**.
- Description key `loc_talent_toughness_damage_reduction_medium_desc`, hash `1272bcc0`, entry 1194.

Full raw template:

~~~text
{toughness:%s} Toughness Damage Reduction.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | verified one-point `toughness_damage_taken_modifier = −0.1` | `abs(value)`, percentage with `+` prefix → `+10%` |

The accepted [shared display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463) and formatting are reused from the completed Ogryn document: [parameter reconstruction](../../Ogryn/en/base_toughness_damage_reduction_node_buff_medium_1.md#original-english-template-and-reconstruction). The existing Psyker amount is −0.1. No new source read was needed.

Static reconstruction; not an observed game screen:

~~~text
+10% Toughness Damage Reduction.
~~~

## English comparison

The English states a 10% reduction specifically to Toughness Damage, consistent with the accepted stat. Its additive stage and separate multiplication by independent reductions are omitted details. It does not claim Health Damage reduction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/stat/base_toughness_damage_reduction_node_buff_medium_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/57a54ed7-4f34-449f-9f2d-eb401a97b51a). The icon identifies the talent; it is not mechanism evidence.
