# Adaptive Combat Calibration: source evidence

[繁體中文](../cryptic_cleave_and_impact.md) | [Player description](README.md#cryptic_cleave_and_impact) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_cleave_and_impact)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_cleave_and_impact`; name key `loc_talent_cryptic_cleave_and_impact`; description key `loc_talent_cryptic_melee_cleave_and_impact_desc`. Node `node_ec45bdd9-6470-4bfb-85de-26897fdaac5c`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

The two mutually exclusive buffs check `Toughness.current_toughness_percent`, despite the `stamina_threshold` parameter and stamina-related buff names. Above `0.5`, `cryptic_cleave_while_above_stamina_threshold` applies `max_hit_mass_attack_modifier = 0.3`; at or below `0.5`, `cryptic_impact_while_below_stamina_threshold` applies `impact_modifier = 0.3`.

## Fixed source evidence

- [scripts/utilities/attack/damage_profile.lua — L37-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L37-L80)
- [scripts/utilities/attack/stagger_calculation.lua — L190-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L205)
- [scripts/settings/talent/talent_settings_cryptic.lua — L428-L432](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L428-L432)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2497-L2518](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2497-L2518)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2475-L2496](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2475-L2496)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1957-L1987](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1957-L1987)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2154-L2183](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2154-L2183)

## Example assumptions and limits

- While above **50% of maximum Toughness**, gain **+30% Melee Cleave**. At or below **50%**, gain **+30% Melee Impact** instead.
- With maximum Toughness **100**, current Toughness **51** enables Cleave; **50** or **49** enables Impact.
- A Cleave baseline of **10** becomes `10 × 1.30 = 13`; an Impact baseline of **100** becomes `100 × 1.30 = 130`.

Cleave affects the enemy mass a melee attack can penetrate; Impact affects stagger. These are separate effects, do not apply together, and are not a 30% damage bonus. The condition uses Toughness, not Stamina.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_cleave_and_impact`, hash `6ae25bc5`, entry 6958: **Adaptive Combat Calibration**.
- Description key `loc_talent_cryptic_melee_cleave_and_impact_desc`, hash `6d23edd0`, entry 7093.

Full raw template:

~~~text
Gain {cleave:%s} Melee Cleave while above {toughness:%s} Toughness and {impact:%s} Melee Impact while below.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{cleave:%s}` | `0.3` → `+30%` | Percentage; `+` prefix |
| `{toughness:%s}` | `0.5` → `50%` | Percentage |
| `{impact:%s}` | `0.3` → `+30%` | Percentage; `+` prefix |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L1971-L1986) uses `max_hit_mass_attack_modifier`, `stamina_threshold`, and `impact_modifier` for these three placeholders. The threshold's internal name does not change the verified Toughness condition.

Static reconstruction; not an observed game screen:

~~~text
Gain +30% Melee Cleave while above 50% Toughness and +30% Melee Impact while below.
~~~

## English comparison

The English correctly names Toughness and distinguishes Melee Cleave from Melee Impact. Its “above” and “below” wording does not state which effect applies at exactly 50%; the verified inclusive Impact boundary is supplementary information. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_cleave_and_impact.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/ed3453a6-4290-4ca6-a37e-0d19046b048e). The icon identifies the talent; it is not mechanism evidence.
