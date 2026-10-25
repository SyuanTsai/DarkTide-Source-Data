# Unseen Blade: source evidence

[繁體中文](../zealot_damage_vs_nonthreat.md) | [Player description](README.md#zealot_damage_vs_nonthreat) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_damage_vs_nonthreat)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_damage_vs_nonthreat`; name key `loc_talent_zealot_damage_vs_nonthreat`; description key `loc_talent_zealot_damage_vs_nonthreat_desc`. Node `node_e35a5d28-2c2c-493c-a5bb-c5c107fccd07`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Shared damage calculation reads `blackboard.perception.target_unit` and checks that it differs from `attacking_unit`.
- Another player need not be the target: `target_unit = nil` also differs from the attacking player.
- `damage_vs_nonthreat` is added to `damage_stat_buffs`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2236-L2242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2236-L2242)
- [scripts/settings/talent/talent_settings_zealot.lua — L75-L77](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L75-L77)
- [scripts/utilities/attack/damage_calculation.lua — L428-L440](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L428-L440)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2074-L2090](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2074-L2090)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1552-L1574](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1552-L1574)

## Example assumptions and limits

- **Operation**: Deals +20% damage to enemies that are not currently targeting you. Both Melee and Ranged damage can apply it.
- **Damage example**: Counting only this talent, 100 × 1.2 = 120. With an existing 25% same-stage damage bonus, the result is 100 × (1 + 25% + 20%) = 145. If the enemy starts targeting you, this conditional bonus no longer applies.

- The accepted Chinese comparison at hash `9ca32fdb` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_damage_vs_nonthreat`, hash `25c947ad`, entry 2444: **Unseen Blade**.
- Description key `loc_talent_zealot_damage_vs_nonthreat_desc`, hash `9ca32fdb`, entry 10110.

Full raw template:

~~~text
{damage:%s} Damage vs Enemies not targeting you.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.2 → +20% | `percentage`, prefix `+`; `talent_settings.zealot_damage_vs_nonthreat.damage_vs_nonthreat` |

The minimal display mapping at `zealot_talents.lua` L2074-L2090 supplies the accepted conditional damage bonus.

Static reconstruction; not an observed game screen:

~~~text
+20% Damage vs Enemies not targeting you.
~~~

## English comparison

The English gives +20% Damage against enemies not targeting the holder, matching the accepted target comparison. It does not require the enemy to target another player or restrict the effect to Melee. The nil-target case, Melee/Ranged applicability, same-stage addition and loss of eligibility when the target changes supplement the wording.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_damage_vs_nonthreat.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/c97e932c-97b3-454c-9047-2145a5d9a49d). The icon identifies the talent; it is not mechanism evidence.
