# Voltaic Overcharge: source evidence

[繁體中文](../cryptic_discharge_toughness.md) | [Player description](README.md#cryptic_discharge_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_discharge_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_discharge_toughness`; name key `loc_talent_cryptic_discharge_toughness`; description key `loc_talent_cryptic_discharge_toughness_per_charge_desc`. Node `node_d155b2e2-8498-41eb-81ed-4fa5b708132e`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent enables the `cryptic_discharge_restores_toughness_on_use` special rule. The Discharge action multiplies `target_num_ability_charges_effect` by 0.25 for recovery on use. This normally equals the number of full charges consumed. With the `always_full_charges_bonus` keyword active, the action uses 3 as the charge count for this effect.
- Each `on_hit` event restores 0.01 of maximum Toughness only on the server, when the hit unit is still alive and the damage profile name is exactly `cryptic_discharge_explosion`. The condition does not read `damage_amount` or require it to exceed zero. A qualifying explosion hit therefore does not guarantee Health damage; each qualifying enemy hit triggers recovery once.
- Toughness Replenishment multiplies the fraction by maximum Toughness and applies Toughness Replenishment modifiers. Recovery is then capped at the missing amount and cannot exceed maximum Toughness.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L195-L221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L195-L221)
- [scripts/settings/talent/talent_settings_cryptic.lua — L88-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L88-L91)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua — L88-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L88-L110)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L866-L879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L866-L879)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L195-L221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L195-L221)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1078-L1100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1078-L1100)

## Example assumptions and limits

- **Recovery on activation**: Using Voltaic Emitter restores 25% of maximum Toughness per full charge of Capacitance consumed.
- **Recovery on hit**: The Discharge hitting an enemy that is still alive restores another 1% of maximum Toughness. Subsequent arcs or Electrocution added by weapons do not receive this on-hit recovery.
- **Recovery example**: With 100 maximum Toughness, consuming 2 charges and hitting 5 qualifying enemies restores 100 × (2 × 25% + 5 × 1%) = 55 points. If only 40 points are missing, it restores only 40.

- Recovery on use counts full charges. Fractional progress in the charge resource does not count as a full charge consumed.
- On-hit recovery checks target survival and the specific damage profile, without checking Health damage dealt. It does not mean a fixed amount of damage per hit or guarantee that every unit reached by the explosion takes damage.
- Recovery depends on the character's Toughness Replenishment modifiers, recovery limits and remaining deficit. The example assumes no additional modifiers.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_discharge_toughness`, hash `b0495f45`, entry 11346: **Voltaic Overcharge**.
- Description key `loc_talent_cryptic_discharge_toughness_per_charge_desc`, hash `c12213ad`, entry 12448.

Full raw template:

~~~text
{ability_name:%s} restores {toughness:%s} Toughness per Charge spent, plus an additional {toughness_per_hit:%s} Toughness for each enemy hit by the Electric Discharge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{ability_name:%s}` | Voltaic Emitter | `loc_string`; `loc_talent_cryptic_discharge` |
| `{toughness:%s}` | 0.25 → 25% | `percentage`; no + prefix |
| `{toughness_per_hit:%s}` | 0.01 → 1% | `percentage`; no + prefix |

The minimally read display map is `cryptic_talents.lua` L195-L221. `ability_name` uses `loc_talent_cryptic_discharge` (hash `0c5b9c4a`, English entry 793). The verified `discharge_ability.cryptic_discharge_toughness` settings supply `toughness_percent_on_use = 0.25` and `toughness_percent_per_hit = 0.01`.

Static reconstruction; not an observed game screen:

~~~text
Voltaic Emitter restores 25% Toughness per Charge spent, plus an additional 1% Toughness for each enemy hit by the Electric Discharge.
~~~

## English comparison

The original English gives 25% recovery per charge and 1% per Electric Discharge enemy hit, agreeing with the accepted recovery values and explosion scope. Maximum-Toughness basis, full/effective-charge counting, the server-side living-target/profile checks, absence of a positive-Health-damage requirement, exclusions, recovery modifiers and deficit cap are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_discharge_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/dd369366-6fa1-4e92-bd7b-c92f5bf8023a). The icon identifies the talent; it is not mechanism evidence.
