# Steady Grip: source evidence

[繁體中文](../ogryn_toughness_while_bracing.md) | [Player description](README.md#ogryn_toughness_while_bracing) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_toughness_while_bracing)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_toughness_while_bracing`; name key `loc_talent_ogryn_toughness_regen_while_bracing`; description key `loc_talent_ogryn_toughness_regen_while_bracing_or_shooting_desc`. Node `node_242b8a28-11b1-4dd3-b008-591072dae869`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Each server update calls `Toughness.replenish_percentage(0.125 × dt)` when braced or shooting, including `end + 0.5`. `is_wielded` is used only for HUD `is_active`; the server replenishment branch has no such check. Brief state persistence when changing weapons awaits in-game testing.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2266-L2302](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2266-L2302)
- [scripts/settings/talent/talent_settings_ogryn.lua — L249-L251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L249-L251)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L764-L780](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L764-L780)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1874-L1898](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1874-L1898)

## Example assumptions and limits

- **Replenishment condition**: Continuously replenish Toughness while bracing a ranged weapon or shooting. The shooting condition remains for approximately 0.5s after shooting stops.

- **Replenishment example**: With maximum Toughness of 200, base replenishment per second is `200 × 12.5% = 25`; 2s gives 50. Toughness replenishment bonuses can further modify this amount, which cannot exceed missing Toughness.

- **Effect type**: This adds continuous replenishment; it does not merely increase ordinary Coherency regeneration by 12.5%.

The timing of alternate_fire/shooting state cleanup on weapon changes has not been tested in game. Replenishment is not claimed to necessarily stop immediately after switching. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_toughness_regen_while_bracing`, hash `e009e53e`, entry 14536: **Steady Grip**.
- Description key `loc_talent_ogryn_toughness_regen_while_bracing_or_shooting_desc`, hash `c73dc498`, entry 12866.

Full raw template:

~~~text
{toughness_regen:%s} Toughness Regeneration while bracing or shooting your Ranged weapon.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| toughness_regen | talent_settings_1.defensive_3.braced_toughness_regen = 0.125 | Percentage with explicit + prefix → +12.5% |

Only the missing display mapping in the cited talent definition, lines 764–780, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+12.5% Toughness Regeneration while bracing or shooting your Ranged weapon.
~~~

## English comparison

The independently read English grants +12.5% Toughness regeneration while bracing or shooting a ranged weapon. It agrees with the accepted activation conditions and value, without specifying a multiplier on ordinary Coherency regeneration. Percentage-of-maximum replenishment, modifiers, the 0.5s shooting-state retention and weapon-switch uncertainty supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_toughness_while_bracing.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/ce3b22d4-870e-4496-96fc-33601f9d9a62). The icon identifies the talent; it is not mechanism evidence.
