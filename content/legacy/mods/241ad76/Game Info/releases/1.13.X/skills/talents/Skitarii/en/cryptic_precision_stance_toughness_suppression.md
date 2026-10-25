# Restoration Protocol: source evidence

[繁體中文](../cryptic_precision_stance_toughness_suppression.md) | [Player description](README.md#cryptic_precision_stance_toughness_suppression) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_precision_stance_toughness_suppression)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_precision_stance_toughness_suppression`; name key `loc_talent_cryptic_precision_stance_toughness_suppression`; description key `loc_talent_cryptic_precision_stance_toughness_suppression_desc`. Node `node_1f07ccdc-f96c-4700-ac3f-13fb3244419d`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent enables recovery through the `cryptic_precision_stance_restores_toughness` special rule. The stance toggle action calls `Suppression.clear_suppression` when activating the stance. Its off branch removes the stance effect and returns without performing this clear.
- The stance effect's Toughness recovery rate is 0.1 per second. Each update passes 0.1 × dt as a fraction of maximum Toughness to `Toughness.replenish_percentage`. This update runs only while the effect remains active and the ranged weapon slot is wielded; switching away from that slot ends the stance effect.
- The Toughness extension multiplies the recovery fraction by maximum Toughness, applies Toughness Replenishment modifiers and caps recovery at the current Toughness deficit. Recovery cannot exceed full Toughness.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L319-L337](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L319-L337)
- [scripts/settings/talent/talent_settings_cryptic.lua — L98-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L98-L109)
- [scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua — L40-L102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua#L40-L102)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L360-L370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L360-L370)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L520-L534](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L520-L534)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L319-L337](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L319-L337)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L917-L939](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L917-L939)

## Example assumptions and limits

- **Activation effect**: Activating Advanced Combat Doctrines immediately clears your Suppression. This clear does not grant Suppression immunity for the rest of the stance.
- **Recovery**: While the stance remains active, it restores 10% of maximum Toughness per second until the stance ends. Recovery modifiers and the Toughness maximum still apply.
- **Recovery example**: With 150 maximum Toughness and no other recovery bonuses, it restores 150 × 10% = 15 points/s, or 60 points over 4s.

#### Traditional Chinese text correction

- The Traditional Chinese description adds a Toughness-point unit after the `{toughness}` placeholder, even though this field is a percentage. The correct effect restores 10% of maximum Toughness per second: with 150 maximum Toughness, that is 15 points/s, rather than a fixed 10 points. The original English does not add a point unit; this correction concerns the Traditional Chinese wording.

- The 10% rate uses maximum Toughness, rather than an unconditional fixed 10 points. Changing maximum Toughness changes the number of points restored.
- Stance updates replenish Toughness in increments according to elapsed update time. Actual recovery depends on whether the stance remains active, Toughness Replenishment modifiers, recovery limits and the current deficit.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_precision_stance_toughness_suppression`, hash `1befb0f8`, entry 1828: **Restoration Protocol**.
- Description key `loc_talent_cryptic_precision_stance_toughness_suppression_desc`, hash `e35e0d88`, entry 14738.

Full raw template:

~~~text
{talent_name:%s} restores {toughness:%s} Toughness per second for the duration and instantly clears all Suppression on activation.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{talent_name:%s}` | Advanced Combat Doctrines | `loc_string`; `loc_talent_cryptic_precision_stance` |
| `{toughness:%s}` | 0.1 → 10% | `percentage`; no + prefix |

The minimally read display map is `cryptic_talents.lua` L319-L337. `talent_name` refers to `loc_talent_cryptic_precision_stance` (hash `c4f43796`, English entry 12705). `toughness` uses the verified `precision_stance.cryptic_precision_stance_toughness_suppression.toughness_regen_per_second` value of 0.1.

Static reconstruction; not an observed game screen:

~~~text
Advanced Combat Doctrines restores 10% Toughness per second for the duration and instantly clears all Suppression on activation.
~~~

## English comparison

The English recovery percentage and activation-time Suppression clear agree with the accepted evidence. The use of maximum Toughness, ranged-slot/stance conditions, recovery modifiers and cap, off-branch behavior and absence of ongoing Suppression immunity are supplementary details. The English contains no point unit and does not share the Traditional Chinese unit contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_precision_stance_toughness_suppression.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/eb879996-8768-4102-8799-0fecaf6f7a98). The icon identifies the talent; it is not mechanism evidence.
