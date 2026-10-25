# Voltaic Resistance: source evidence

[繁體中文](../cryptic_force_field_arcs.md) | [Player description](README.md#cryptic_force_field_arcs) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_force_field_arcs)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_force_field_arcs`; name key `loc_talent_cryptic_force_field_arcs`; description key `loc_talent_cryptic_force_field_arcs_desc`. Node `node_a2f854fa-6833-41cb-8022-e5a4617d8646`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node enables `cryptic_force_field_generates_arcs_based_on_hits_blocked`. On field expiry, its Health extension calls `kill` from `fixed_update`; Ranged Attacks reducing its Health to zero also call `kill`. If the caster is still alive on the server and the talent is active, `kill` calculates `ceil(absorbed Ranged Attack count / 6)` and clamps it to 1–4. With 0 attacks, the raw result is 0 but the clamp still raises it to 1. The expiry path does not first check the attack count, so zero absorbed attacks still enter target selection. The code queries enemies within 12m of the player, selecting only living, targetable enemies in front (direction dot product > 0.5). With no target, no arc is actually fired. Each initially selected target starts `force_field_arc_chain_lightning_source`, with a 12m chain radius and at most 4 jumps. These ending arcs are separate from the field's own 5m activation/ending explosions.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L876-L891](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L876-L891)
- [scripts/settings/talent/talent_settings_cryptic.lua — L164-L176](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L164-L176)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua — L24-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L24-L39)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua — L80-L100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L80-L100)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua — L141-L196](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L141-L196)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/force_field_arc_chain_lightning_source.lua — L21-L40](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/force_field_arc_chain_lightning_source.lua#L21-L40)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/force_field_arc_chain_lightning_source.lua — L42-L55](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/force_field_arc_chain_lightning_source.lua#L42-L55)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua — L103-L125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L103-L125)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua — L56-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L56-L64)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua — L103-L114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L103-L114)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L876-L891](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L876-L891)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2530-L2553](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2530-L2553)

## Example assumptions and limits

- **How it works**: When Integrated Refraction Emitter ends, it fires arcs based on absorbed Ranged Attacks: 0–6 attacks give 1 arc, 7–12 give 2, 13–18 give 3 and 19 or more reach the 4-arc maximum.
- **Example**: Even without absorbing any Ranged Attacks, the field still attempts to fire 1 arc at expiry. It hits a target only if a valid enemy is within 12m in front of you.
- **How it works**: Each arc can chain up to 4 times between nearby enemies; actual chaining still depends on valid targets being present.

- At field end, 0–6 absorbed Ranged Attacks → 1 arc, 7–12 → 2, 13–18 → 3, and 19 or more → the 4-arc cap. Even 0 calculates 1 arc, but a valid target within 12m in front is required.
- Zero absorbed attacks is clamped to the lower bound of 1 arc, and expiry executes target selection. With no living, targetable enemy within 12m in front, there is no actual arc target.
- Only Ranged Attacks or attacks flagged as ranged count. The count does not depend on damage amount.
- Additional chaining depends on valid targets, chain distance and the 4-jump limit.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_force_field_arcs`, hash `e1595ef8`, entry 14619: **Voltaic Resistance**.
- Description key `loc_talent_cryptic_force_field_arcs_desc`, hash `143e5c50`, entry 1313.

Full raw template:

~~~text
When your Refraction Emitter ends, shoot up to {max_arcs:%s} Arcs towards enemies in front of you, based on the number of attacks absorbed.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{max_arcs:%s}` | 4 | `number`; no prefix |

The minimally read display map is `cryptic_talents.lua` L876-L891. `max_arcs` uses `force_field.force_field_arcs.max_arcs`, already verified as 4. The original description uses the literal name Refraction Emitter; it is retained without replacing it with the longer localized base-talent name.

Static reconstruction; not an observed game screen:

~~~text
When your Refraction Emitter ends, shoot up to 4 Arcs towards enemies in front of you, based on the number of attacks absorbed.
~~~

## English comparison

The ending trigger, forward direction, maximum 4 arcs and absorbed-attack-count basis agree with the accepted evidence. The 6-attacks-per-step thresholds, minimum of 1 even at zero, 12m target radius, dot-product condition, living-caster/target requirements and subsequent chain limits supplement the description. The original does not promise a hit when no valid enemy is available.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_force_field_arcs.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/ba6e0fe8-b601-433e-a423-8a6b8ee7b79b). The icon identifies the talent; it is not mechanism evidence.
