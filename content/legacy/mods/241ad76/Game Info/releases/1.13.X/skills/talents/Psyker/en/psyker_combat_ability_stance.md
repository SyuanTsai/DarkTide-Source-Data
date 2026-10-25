# Scrier's Gaze: source evidence

[繁體中文](../psyker_combat_ability_stance.md) | [Player description](README.md#psyker_combat_ability_stance) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_combat_ability_stance)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_combat_ability_stance`; name key `loc_talent_psyker_combat_ability_overcharge_stance`; description key `loc_talent_psyker_combat_ability_overcharge_stance_improved_description`. Node `node_2a022d3f-fddf-4faf-a79d-c8fe6a18fe36`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The ability template directly grants `damage +0.10`, `weakspot_damage +0.10` and `critical_strike_chance +0.20`. Its passive Toughness damage multiplier is 0.8, representing 20% Toughness Damage Reduction. During Gaze, Toughness recovers each frame by `0.025 * dt`, where 0.025 is a proportion of maximum Toughness.
- One stack is gained each second, up to 30 stacks. A separate per-second damage lerp reaches +30%, alongside the base +10% `damage` field. Peril generation increases over time along a quadratic curve; Kills increase an offset that temporarily slows accumulation. At 100% Peril the buff stops.
- Weakspot Kills add `bonus_stacks` only with Precognition enabled. When Gaze ends, a damage buff based on the current `stacks + bonus_stacks` is created for 10 seconds.
- The ability cooldown is 25 seconds and pauses while the active buff exists. Without other cooldown modifiers, recovery therefore resumes after leaving Gaze.
- Damage calculation applies general damage bonuses to base damage before adding extra Weakspot/Critical damage. Gaze's +10% Weakspot Damage enters the extra-damage multiplier: base 100 plus extra 50 becomes `100 + 55 = 155`, rather than `150 × 1.1`. At full Gaze stacks, +40% general damage also scales the base and extra Weakspot portions. In the simplified example using the same damage-curve ratio, the result is `140 + 70 × 1.1 = 217`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L37-L112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L37-L112)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua — L78-L105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L78-L105)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1024-L1079](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1024-L1079)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1093-L1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1093-L1149)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1169-L1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1169-L1199)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1227-L1244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1227-L1244)
- [scripts/settings/talent/talent_settings_psyker.lua — L5-L15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L5-L15)
- [scripts/settings/talent/talent_settings_psyker.lua — L133-L135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L133-L135)
- [scripts/utilities/attack/damage_calculation.lua — L65-L95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L65-L95)
- [scripts/utilities/attack/damage_calculation.lua — L232-L242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242)
- [scripts/utilities/attack/damage_calculation.lua — L672-L711](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L711)
- [scripts/utilities/attack/damage_calculation.lua — L715-L724](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L715-L724)
- [scripts/utilities/attack/damage_calculation.lua — L717-L724](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L717-L724)
- [scripts/utilities/attack/damage_calculation.lua — L772-L782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L772-L782)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L37-L112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L37-L112)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L482-L514](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L482-L514)

## Example assumptions and limits

- **Ability**: Activating Scrier's Gaze Quells 50 percentage points of Peril. While active, gain +10% Damage, 20 percentage points of Critical Chance, +10% Weakspot Damage, 20% Toughness Damage Reduction and Suppression Immunity.
- Gain another 1% Damage per second, up to +30%, and recover 2.5% of maximum Toughness per second. Peril builds while active; enemy Kills briefly slow its accumulation. At 100% Peril, Gaze ends, and the accumulated damage bonus remains for 10 seconds.
- **Damage example**: With no other bonuses, a non-Critical, non-Weakspot hit of 100 becomes `100 × (1 + 10% + 30%) = 140` at full stacks. After Gaze ends, only the accumulated 30% remains, giving 130.
- **Weakspot example**: Isolating the Weakspot Damage bonus, assume base damage 100 and extra Weakspot damage 50. The original 150 becomes `100 + 50 × 1.10 = 155`, about a 3.33% increase for the whole hit. Gaze's other damage bonuses are calculated separately.
- **Recovery and chance examples**: At 100 maximum Toughness, recover `100 × 2.5% = 2.5` per second, capped by missing Toughness. An original 5% Critical Chance becomes `5% + 20 percentage points = 25%`.
- Base cooldown: 25 seconds. Cooldown recovery pauses while the active Gaze buff exists and resumes after it ends, without other cooldown modifiers.

**Note on the Chinese wording**: The Chinese description says entering/leaving Gaze's “area,” which may suggest a ground zone. The corresponding English and accepted implementation describe the character entering and ending the Gaze state.

- Actual Gaze duration depends jointly on Peril accumulation, weapon actions, Kills and other modifiers; reaching the 30-stack cap is not guaranteed.
- The Weakspot Damage field participates only on Weakspot hits. Complete attack results depend on the weapon, enemy and attack type; the examples isolate individual bonuses.
- Build 25606770 text and the public source commit correspond to 1.13.1. A source comment specifies a fixed 8 seconds, whereas runtime logic ends Gaze at 100% Peril. The verified account follows runtime logic; in-game confirmation remains pending. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_combat_ability_overcharge_stance`, hash `b664d880`, entry 11771: **Scrier's Gaze**.
- Description key `loc_talent_psyker_combat_ability_overcharge_stance_improved_description`, hash `00d42220`, entry 51.

Full raw template:

~~~text
Triggers Scrier's Gaze. When entering Scrier's Gaze you Quell {vent:%s} Peril as well as gain {base_damage:%s} Damage, {crit_chance:%s} Critical Chance, {weakspot_damage:%s} Weakspot Damage, {tdr:%s} Toughness Damage Reduction, and Suppression Immunity. You also replenish {toughness:%s} Toughness each second.

For every second in Scrier's Gaze you gain {damage_per_stack:%s} Damage up to a maximum of {max_damage:%s}. This effect lingers for {duration:%s}s after leaving Scrier's Gaze.

While in Scrier's Gaze you build up Peril. Build-up is temporarily slowed down by enemy Kills. At {max_peril:%s} Peril, Scrier's Gaze ends.

Base Cooldown: {cooldown:%s}s
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `vent` | `0.5` | Percentage → `50%` |
| `base_damage` | `0.10` | Percentage with `+` prefix → `+10%` |
| `crit_chance` | `0.20` | Percentage with `+` prefix → `+20%` |
| `weakspot_damage` | `0.10` | Percentage with `+` prefix → `+10%` |
| `tdr` | `0.8` damage multiplier | `(1 − value) × 100`, rounded; `+` prefix → `+20%` |
| `toughness` | `0.025` | Percentage → `2.5%` |
| `damage_per_stack` | `0.01` | Percentage with `+` prefix → `+1%` |
| `max_damage` | `0.01 × 30 = 0.30` | Percentage with `+` prefix → `+30%` |
| `duration` | `10` | Number → `10`; the template adds `s` |
| `max_peril` | `1` | Percentage → `100%` |
| `cooldown` | `25` | Number → `25`; the template adds `s` |

Only missing display fields in `psyker_talents.lua` L37–108 were read. Accepted values supply all numbers below. For `tdr`, the mapping rounds `(1 − 0.8) × 100` to 20 before percentage presentation. Other percentages use the existing common formatting and the shown `+` prefixes. No buff or event behavior was retraced.

Static reconstruction; not an observed game screen:

~~~text
Triggers Scrier's Gaze. When entering Scrier's Gaze you Quell 50% Peril as well as gain +10% Damage, +20% Critical Chance, +10% Weakspot Damage, +20% Toughness Damage Reduction, and Suppression Immunity. You also replenish 2.5% Toughness each second.

For every second in Scrier's Gaze you gain +1% Damage up to a maximum of +30%. This effect lingers for 10s after leaving Scrier's Gaze.

While in Scrier's Gaze you build up Peril. Build-up is temporarily slowed down by enemy Kills. At 100% Peril, Scrier's Gaze ends.

Base Cooldown: 25s
~~~

## English comparison

Read independently, entering/leaving Scrier's Gaze refers to the character's Gaze state; the English does not describe a ground area. The stated activation bonuses, per-second recovery and damage gain, 10-second lingering effect, Kill-related slowdown, 100% Peril end condition and 25-second base cooldown agree with the accepted evidence. Weakspot wording does not claim that every point of a Weakspot hit receives the +10% extra-damage bonus. Percentage-point calculations, maximum-Toughness basis, damage formula, Precognition's bonus stacks and paused cooldown recovery are supplementary details. The preserved Chinese wording note is a Chinese-only issue; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability/psyker_combat_ability_stance.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/a56d3b3f-6e4e-4aed-83fc-0317ac57364a). The icon identifies the talent; it is not mechanism evidence.
