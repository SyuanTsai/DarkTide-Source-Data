# Part of the Squad: source evidence

[繁體中文](../adamant_companion_coherency.md) | [Player description](README.md#adamant_companion_coherency) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_companion_coherency)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_companion_coherency`; node `node_d11bcab3-f47e-43ef-8f26-72e4ed2760fe`; category Aura; one point.

## Source-confirmed behavior and static derivation

- The talent connects `adamant_companion_aura` to coherency identifier `adamant_aura`. The `adamant_dog_counts_towards_coherency` special rule enables the Cyber-Mastiff's Coherency contribution. When the dog spawns, `adamant_companion_counts_for_coherency` checks `owner_unit` and `companion_dog`, then registers the dog's Coherency tracking buff.
- This upgraded talent additionally installs `adamant_companion_aura`, setting `toughness_damage_taken_modifier` to `talent_settings.coherency.companion.tdr = -0.075`. Percentage formatting takes the absolute value, yielding +7.5% Toughness Damage Reduction. The remaining damage fraction is `1 − 0.075 = 0.925`.
- This selection uses the dog-counts variant of the shared special-rule identifier. The other two aura selections use the no-companion-coherency variant and replace this Coherency rule.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L743-L772](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L743-L772)
- [scripts/settings/talent/talent_settings_adamant.lua — L53-L66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L53-L66)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L534-L564](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L534-L564)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L613-L658](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L613-L658)
- [scripts/extension_systems/coherency/companion_coherency_extension.lua — L1-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/companion_coherency_extension.lua#L1-L34)
- [scripts/utilities/attack/damage_taken_calculation.lua — L234-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L743-L772](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L743-L772)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L35-L63](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L35-L63)

## Example assumptions and limits

- **Cyber-Mastiff Coherency**: Your Cyber-Mastiff counts as a member of unit Coherency.

- **Toughness protection**: You and Allies in Coherency gain an additional 7.5% Toughness Damage Reduction. Isolating this effect, 100 incoming Toughness damage becomes `100 × (1 − 0.075) = 92.5 damage`. With an existing 10% reduction in the same stage, the result is `100 × (1 − 10% − 7.5%) = 82.5 damage`.

Toughness Damage Reduction applies to Toughness damage; it must not be treated directly as Health damage reduction. Actual damage also depends on other Toughness reductions, the recipient being within Coherency, and simultaneous buffs. Examples are static derivations; game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_companion_coherency`, hash `ce3146d6`, entry 13330: **Part of the Squad**.
- Description key `loc_talent_adamant_companion_coherency_alt_desc`, hash `360f5bca`, entry 3508. The [Writer] suffix is resource metadata, not player-facing text.

Full raw template:

```text
Your Cyber-Mastiff counts towards unit Coherency. In addition, you and Allies in Coherency gain additional {tdr:%s} Toughness Damage Reduction.
```

The `tdr` mapping uses percentage formatting, a `+` prefix and the explicit value manipulation `math.abs(value) * 100`. Existing evidence supplies `-0.075`, so the formatted value is **+7.5%**. The custom manipulation is applied once; it is not followed by another multiplication by 100.

| Placeholder | Value | Formatting |
|---|---|---|
| tdr | -0.075 | Absolute value × 100, `+` prefix and percentage suffix → +7.5% |

Static reconstruction; not an observed game screen:

```text
Your Cyber-Mastiff counts towards unit Coherency. In addition, you and Allies in Coherency gain additional +7.5% Toughness Damage Reduction.
```

## English comparison limits

The independently read English matches the dog contribution, Coherency recipients and reduction value. Its omitted calculation and alternative-aura details are supplementary; no explicit English contradiction is established. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/aura/adamant_companion_coherency.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/ab5c4535-3182-4aa9-a388-faffff1d0faa). The icon identifies the talent; it is not mechanism evidence.
