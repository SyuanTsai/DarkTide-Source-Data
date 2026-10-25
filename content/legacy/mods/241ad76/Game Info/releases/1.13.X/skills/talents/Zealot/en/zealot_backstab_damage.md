# Backstabber: source evidence

[繁體中文](../zealot_backstab_damage.md) | [Player description](README.md#zealot_backstab_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_backstab_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_backstab_damage`; name key `loc_talent_zealot_increased_backstab_damage`; description key `loc_talent_zealot_backstab_flanking_damage_all_desc`. Node `node_36d9319a-e724-493d-baf1-efdbd77f736c`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The template grants `allow_backstabbing` and `allow_flanking`, adding .25 to `backstab_damage` and `flanking_damage`. AttackPositioning accepts Melee and Ranged respectively: `dot>0.5` covers 60 degrees to either side of directly behind, and `dot>0` covers the rear half-plane. Strict boundaries are excluded.
- Damage calculation first obtains current `damage`, then adds `damage × (backstab multiplier + profile bonus − 1)` or `damage × (flanking multiplier − 1)`. This is not a bonus only to the extra Weakspot component. An attack type qualifies for only one of the two effects, so they do not combine into +50%.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4343-L4356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4343-L4356)
- [scripts/utilities/attack/attack_positioning.lua — L9-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)
- [scripts/utilities/attack/damage_calculation.lua — L95-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L95-L109)
- [scripts/utilities/attack/damage_calculation.lua — L848-L861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L848-L861)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1339-L1362](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1339-L1362)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L37-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L37-L62)

## Example assumptions and limits

- **Operation**: Deal 25% more damage on a Melee hit from within the roughly 120-degree sector behind an enemy, or a Ranged hit from the rear half-plane.
- **Damage example**: With the same weapon, armour and hit location and no other Backstab/Flanking bonus, 100 damage at that stage becomes 100 × (1 + 25%) = 125. With an existing 20% bonus of the same type, 120 becomes 100 × (1 + 20% + 25%) = 145, an actual increase of about 20.83%.

- A weapon's existing `damage_profile.backstab_bonus` must be included among existing bonuses of that type. The example fixes other conditions; no named weapon was tested in game.
- The accepted Chinese comparison at hash `cbe3a511` finds no explicit effect-direction contradiction for the same description key/hash. Unlisted formulas, caps and finer restrictions are supplementary details.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_increased_backstab_damage`, hash `5730dc87`, entry 5663: **Backstabber**.
- Description key `loc_talent_zealot_backstab_flanking_damage_all_desc`, hash `cbe3a511`, entry 13173.

Full raw template:

~~~text
{damage:%s} Damage on Backstab and Flanking Hits.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.25 → +25% | `percentage`, `+` prefix; `zealot_backstab_damage.stat_buffs.backstab_damage` |

The minimal display mapping at `zealot_talents.lua` L1339-L1357 uses the accepted Backstab stat; both Backstab and Flanking stats are .25 in the accepted mechanism.

Static reconstruction; not an observed game screen:

~~~text
+25% Damage on Backstab and Flanking Hits.
~~~

## English comparison

The English gives +25% Damage on Backstab and Flanking hits, agreeing with both accepted .25 bonuses. It does not explicitly restrict the bonus to Weakspot extra damage or promise that both bonuses apply to one attack. Melee/Ranged eligibility, rear-angle thresholds and strict boundaries, profile-bonus combination and the original 100→125/120→145 example supplement the description; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_backstab_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/86a86e7f-6fc0-4eda-81e8-f13519f3cb8c). The icon identifies the talent; it is not mechanism evidence.
