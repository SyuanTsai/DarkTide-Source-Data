# Providence: source evidence

[繁體中文](../zealot_revive_speed.md) | [Player description](README.md#zealot_revive_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_revive_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_revive_speed`; name key `loc_talent_zealot_revive_speed`; description key `loc_talent_zealot_revive_speed_desc`. Node `node_b0817c40-bea3-4c97-b423-7645d970edbb`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Permanent `revive_speed_modifier` +0.25. Four completion events add the effect to `params.target_unit`. The effect has one stack, lasts 5 seconds and refreshes, with `movement_speed` +0.1 and `toughness_damage_taken_multiplier` = 0.85. The speed modifier applies to the corresponding revive interaction; it does not make every assistance action 25% faster.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2254-L2291](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2254-L2291)
- [scripts/settings/talent/talent_settings_zealot.lua — L82-L88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L82-L88)
- [scripts/utilities/attack/damage_taken_calculation.lua — L223-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2111-L2141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2111-L2141)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1724-L1754](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1724-L1754)

## Example assumptions and limits

- **How it works:** reviving a downed ally is 25% faster. Completing a revive, rescue, pull-up of a hanging ally or net removal gives that ally +10% Movement Speed and 15% Toughness Damage Reduction for 5 seconds.
- **Effect example:** if the assisted ally normally moves at 5 m/s, this bonus alone gives 5 × 1.1 = 5.5 m/s. An incoming 100 points of Toughness damage becomes 100 × 0.85 = 85. The assisted ally receives the effect, not you.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `6421ecda` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_revive_speed`, hash `0e3f36dc`, entry 933: **Providence**.
- Description key `loc_talent_zealot_revive_speed_desc`, hash `6421ecda`, entry 6511.

Full raw template:

~~~text
{revive_speed:%s} Revive Speed. In addition, Allies you Assist / Revive, get {movement_speed:%s} Movement Speed and {tdr:%s} Toughness Damage Reduction for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `revive_speed` | `0.25` | `percentage`, `+` prefix: `+25%` |
| `movement_speed` | `0.1` | `percentage`, `+` prefix: `+10%` |
| `tdr` | `1 − 0.85 = 0.15` | `percentage`, `+` prefix: `+15%` |
| `duration` | `5` | `number`: `5` |

The talent display mapping uses the verified `revive_speed_modifier`, `movement_speed`, `1 − toughness_damage_taken_multiplier` and `duration` values. These fields reconstruct the text below.

Static reconstruction; not an observed game screen:

~~~text
+25% Revive Speed. In addition, Allies you Assist / Revive, get +10% Movement Speed and +15% Toughness Damage Reduction for 5s.
~~~

## English comparison

The English independently agrees on Revive Speed, the assisted or revived ally as recipient, both bonuses and their duration. It does not claim that every assistance action receives the speed bonus. The four completion events, single-stack refresh and calculation are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_revive_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/ef521c17-0aae-4e01-b54c-9a25d1f9d792). The icon identifies the talent; it is not mechanism evidence.
