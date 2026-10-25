# Foe-Render Creed: source evidence

[繁體中文](../cryptic_aura_weapon_improved.md) | [Player description](README.md#cryptic_aura_weapon_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_aura_weapon_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_aura_weapon_improved`; name key `loc_talent_cryptic_aura_weapon_improved`; description key `loc_talent_cryptic_aura_weapon_improved_desc`. Node `node_9317a30a-682c-4b3f-ac86-83a2bf829f87`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent applies the Coherency template `cryptic_aura_weapon_improved` and `cryptic_aura_weapon_improved_personal_boost`. The personal passive gives the caster `toughness = 25`; the Coherency template gives `max_hit_mass_attack_modifier = 0.15` and `rending_multiplier = 0.075`. `CoherencySystem` includes the unit itself in each daisy chain and notifies `UnitCoherencyExtension` of units added to the chain. That extension stores entering units in `in_coherence_units` and collects available Coherency templates from the set. Both the caster and allies in the chain therefore receive the Cleave and Rending bonuses. `max_hit_mass_attack_modifier` increases the target mass an attack can cleave through; `rending_multiplier` increases the Rending multiplier. The template's `coherency_id` is `cryptic_aura_weapon_improved`, with `priority = 2`. Adding the same source repeatedly does not apply it multiple times.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1059-L1089](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1059-L1089)
- [scripts/settings/talent/talent_settings_cryptic.lua — L27-L31](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L27-L31)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L226-L251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L226-L251)
- [scripts/settings/buff/buff_settings.lua — L860-L861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L860-L861)
- [scripts/settings/buff/buff_settings.lua — L961-L962](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L961-L962)
- [scripts/extension_systems/coherency/coherency_system.lua — L187-L251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L187-L251)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L200-L214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L200-L214)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L279-L311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)
- [scripts/utilities/attack/damage_profile.lua — L37-L88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L37-L88)
- [scripts/utilities/attack/damage_calculation.lua — L122-L247](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L122-L247)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1059-L1089](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1059-L1089)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1600-L1624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1600-L1624)

## Example assumptions and limits

- **How it works**: Your maximum Toughness increases by 25. You and allies in Coherency gain 15% Cleave and 7.5% Rending.
- **Cleave example**: If an attack originally penetrates a total target mass of 10, the bonus raises it to 10 × 1.15 = 11.5. The number of additional enemies actually hit depends on enemy mass and weapon limits.
- **Rending example**: Comparing only the armour stage, assume 100 damage before armour, an original armour multiplier of 0.5 and a Rending coefficient of 1 for this armour type. Damage changes from 100 × 0.5 = 50 to 100 × (0.5 + 0.075) = 57.5. Crossing an armour multiplier of 1 uses a different conversion; this is not a direct 7.5% damage increase on every hit.

- **Cleave example**: A base total target-mass budget of 10 becomes 10 × 1.15 = 11.5. Additional enemies hit depend on enemy mass and weapon limits.
- **Rending example**: With 100 pre-armour damage, a base armour multiplier of 0.5 and armour-specific Rending coefficient 1, the armour-stage result changes from 50 to 57.5. Crossing armour multiplier 1 requires a different conversion; not all hits gain 7.5% damage directly.
- Only the caster receives +25 Toughness. The Coherency aura supplies Cleave and Rending to the caster and allies in their chain.
- Fifteen percent increases the maximum hit mass for Cleave, not the number of enemies hit by 15%. Actual hit count also depends on enemy mass and weapon attack data.
- The 7.5% Rending is a Rending multiplier bonus, not an equal final-damage increase.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_aura_weapon_improved`, hash `87e80221`, entry 8819: **Foe-Render Creed**.
- Description key `loc_talent_cryptic_aura_weapon_improved_desc`, hash `6d4feb19`, entry 7106.

Full raw template:

~~~text
Gain {toughness:%s} Toughness.

You and allies in Coherency gain {cleave:%s} Cleave and {rending:%s} Rending.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness:%s}` | 25 → +25 | `number`; explicit + prefix |
| `{cleave:%s}` | 0.15 → +15% | `percentage`; explicit + prefix |
| `{rending:%s}` | 0.075 → +7.5% | `percentage`; explicit + prefix |

The minimally read display mapping is `cryptic_talents.lua` L1059-L1089. Its Toughness, Cleave and Rending values are the existing verified 25, 0.15 and 0.075 in `cryptic_aura_weapon_improved`.

Static reconstruction; not an observed game screen:

~~~text
Gain +25 Toughness.

You and allies in Coherency gain +15% Cleave and +7.5% Rending.
~~~

## English comparison

The English explicitly includes “You and allies in Coherency,” matching the existing self-inclusive Coherency evidence. The +25 personal Toughness, +15% Cleave and +7.5% Rending agree. Hit-mass rather than enemy-count scaling, armour-stage Rending and same-source non-duplication supplement the description; the English does not claim an equal final-damage increase.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/aura/cryptic_aura_weapon_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/a48f1d74-488a-42d3-a59d-33d55135dad2). The icon identifies the talent; it is not mechanism evidence.
