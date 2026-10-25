# Bull Rush: source evidence

[繁體中文](../ogryn_charge.md) | [Base effects](BASE_EFFECTS.md#ogryn_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `ogryn_charge`; no selectable talent point is spent. Name key `loc_ability_ogryn_charge`; description key `loc_ability_ogryn_charge_description_new`. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The mounted ability is `ogryn_charge`, with cooldown and cost both 25 and regeneration 1. Lunge distance is 12; stop armour types are `super_armor / void_shield / resistant`.
- `charge_speed_on_lunge` subscribes to `on_lunge_end`, granting `melee_attack_speed` and `movement_speed` of 0.25 each for 5s. This 5s does not start at charge activation.
- The base passive also mounts `ogryn_base_lunge_toughness_and_damage_resistance`: while `is_lunging`, `damage_taken_multiplier=0.75` and `melee_heavy_damage=0.5`. The charge's impact/finish attacks deal zero damage; the +50% heavy-damage field is not charge-collision damage.

## Fixed source evidence

- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L8-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L8-L24)
- [scripts/settings/talent/talent_settings_ogryn.lua — L285-L310](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L285-L310)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L893-L909](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L893-L909)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L987-L996](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L987-L996)
- [scripts/settings/lunge/ogryn_lunge_templates.lua — L14-L94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/ogryn_lunge_templates.lua#L14-L94)
- [scripts/settings/damage/damage_profiles/archetypes/ogryn_damage_profile_templates.lua — L54-L156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/ogryn_damage_profile_templates.lua#L54-L156)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L34-L72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L34-L72)
- [scripts/settings/archetype/archetypes/ogryn_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)

## Examples and limits

- **Charge and cooldown**: Charge forward up to 12m, knocking aside enemies along the path. One charge, base cooldown 25s. The base collision and end impact do not directly deal Health damage.

- **Stopping**: Collision with Carapace Armour, a Void Shield or specified resistant targets stops the charge. You can cancel by blocking after 0.5s or by moving backwards after 0.8s. Terrain also limits actual distance.

- **Post-charge bonuses**: After the charge ends, gain +25% melee Attack Speed and +25% Movement Speed for 5s. A scaled 1s action takes `1 ÷ 1.25 = 0.8s`; an original speed of 5m/s becomes 6.25m/s.

- **Protection during the charge**: Also gain 25% damage reduction while charging. With this effect alone, damage 100 becomes `100 × 0.75 = 75`. Other base protections resolve at their own stages.

The is_dodging marker is not taken to guarantee that every dodge passive activates simultaneously; each still follows its actual conditions. Local Build 25606770 corresponds to the fixed 1.13.1 source. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_ogryn_charge`, hash `80d4e4d1`, entry 8367: **Bull Rush**.
- Description key `loc_ability_ogryn_charge_description_new`, hash `8e6bf564`, entry 9220.

Full raw template:

~~~text
Charge forward with great force, knocking back enemies and Staggering them. Gain {attack_speed%s} Attack Speed and {move_speed%s} Movement Speed for {duration%s}s. Charge is stopped on collision with Carapace Armoured Enemies, Unyielding Enemies and Monstrosities.

Base Cooldown: {cooldown%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| attack_speed | talent_settings_2.combat_ability.melee_attack_speed = 0.25 | Percentage without prefix → 25% |
| move_speed | talent_settings_2.combat_ability.movement_speed = 0.25 | Percentage without prefix → 25% |
| duration | talent_settings_2.combat_ability.active_duration = 5 | Number → 5 |
| cooldown | PlayerAbilities.ogryn_charge_increased_distance.cooldown = 25 | Number → 25 |

Only the missing text mapping / display formatting in the cited talent definition, lines 34–72, was read. Accepted mechanisms, values, examples and common formatting were reused. The display cooldown references ogryn_charge_increased_distance; its accepted 25s value is reused. The exact exported placeholder spellings without colons are retained in the raw template.

Static reconstruction; not an observed game screen:

~~~text
Charge forward with great force, knocking back enemies and Staggering them. Gain 25% Attack Speed and 25% Movement Speed for 5s. Charge is stopped on collision with Carapace Armoured Enemies, Unyielding Enemies and Monstrosities.

Base Cooldown: 25s.
~~~

## English comparison

The independently read English describes a staggering charge, 25% Attack Speed and Movement Speed for 5s, and a 25s base cooldown. Its bonus values and knockback behavior agree with the accepted evidence. The accepted Attack Speed stat is melee-specific; the text does not explicitly promise a ranged speed bonus. The 12m distance, cancellation, post-charge activation, zero direct Health damage and protection supplement the description. Its named stopping categories are retained as English text alongside the accepted stop-armour identifiers; an exhaustive enemy-by-enemy equivalence is not established by these documents and remains unconfirmed.
