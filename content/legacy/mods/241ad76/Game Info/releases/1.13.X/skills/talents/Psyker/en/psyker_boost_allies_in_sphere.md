# Sanctuary: source evidence

[繁體中文](../psyker_boost_allies_in_sphere.md) | [Player description](README.md#psyker_boost_allies_in_sphere) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_boost_allies_in_sphere)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_boost_allies_in_sphere`; name key `loc_talent_psyker_force_field_grants_toughness`; description key `loc_talent_psyker_force_field_grants_toughness_desc`. Node `node_d64a57d2-05d8-4077-92a2-d12069d8d628`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent enables the Sanctuary special rule. However, `ForceFieldUnitExtension` assigns the inside-shield and dissipation buffs only when it also detects `sphere_shield`, so Telekine Dome must actually be selected.
- The inside-shield buff recovers Toughness each second using `shield_toughness_ally * dt`; parameter 0.1 means 10% of maximum Toughness per second. Entering units include all eligible players, with no exclusion of the owner.
- On dissipation, the end buff is applied only to players still recorded in `_players_inside`. It has `duration=5` and `toughness_damage_taken_multiplier=0.5`, halving Toughness damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1611-L1642](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1611-L1642)
- [scripts/settings/talent/talent_settings_psyker.lua — L266-L280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L266-L280)
- [scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua — L88-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua#L88-L141)
- [scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua — L362-L418](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua#L362-L418)
- [scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua — L420-L450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua#L420-L450)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2540-L2569](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2540-L2569)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1611-L1642](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1611-L1642)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1132-L1155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1132-L1155)

## Example assumptions and limits

- **Ability modifier**: With Telekine Dome selected, you and Allies inside the spherical shield recover 10% of maximum Toughness per second.

- **Dissipation effect**: When the shield dissipates, players still inside gain 50% Toughness Damage Reduction for 5 seconds. Leaving early does not grant this dissipation bonus.

- **Recovery and reduction example**: At 100 maximum Toughness, recover `100 × 10% = 10` per second, up to 30 over 3 seconds, capped by missing Toughness. During the reduction effect, an original 40 Toughness damage becomes `40 × 0.5 = 20`.

- Assume a character has maximum Toughness 100, stays inside the spherical shield for a full 3 seconds and no healing overflows the missing amount. Each second restores `100 × 10% = 10`, up to 30 over 3 seconds. Players still inside when the shield dissipates receive the 5-second half-Toughness-damage effect.
- Recovery applies only inside the spherical shield. The source explicitly requires that shape; this cannot be extended to the ordinary forward shield wall.
- Toughness recovery is subject to normal maximum/overflow rules; the example assumes no overflow.
- The game's `Allies` wording omits recipient details. The source iterates players inside the spherical shield, including the caster if still inside. Detailed duration and trigger scope derive from the fixed source and remain pending same-build in-game comparison. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_force_field_grants_toughness`, hash `e330a9d7`, entry 14723: **Sanctuary**.
- Description key `loc_talent_psyker_force_field_grants_toughness_desc`, hash `fe5dbdd8`, entry 16515.

Full raw template:

~~~text
Allies inside your {talent_name:%s} replenish {toughness:%s} Toughness each second. When your {talent_name:%s} dissipates, all Allies inside gain {toughness_damage_reduction:%s} Toughness Damage Reduction for {duration:%s}s
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_combat_ability_shield` | Localized string → `Telekine Shield` |
| `toughness` | `0.1` | Percentage → `10%` |
| `toughness_damage_reduction` | `0.5` damage multiplier | Rounded `(1 − value) × 100`, `+` prefix → `+50%` |
| `duration` | `5` | Number → `5`; the template adds `s` |

Only missing display fields in `psyker_talents.lua` L1611–1637 were read. `talent_name` resolves to **Telekine Shield** (`loc_talent_psyker_combat_ability_shield`, hash `3a349f50`, entry 3771). Accepted recovery 0.1 formats as `10%`; accepted Toughness damage multiplier 0.5 is converted by rounded `(1 − value) × 100`, with a `+` prefix, to `+50%`. Accepted duration is 5 seconds. The template names the parent Shield ability; the accepted sphere-only requirement is explained separately. Mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Allies inside your Telekine Shield replenish 10% Toughness each second. When your Telekine Shield dissipates, all Allies inside gain +50% Toughness Damage Reduction for 5s
~~~

## English comparison

Read independently, the English grants Toughness recovery while inside and a 5-second, 50% Toughness Damage Reduction bonus to those inside when the shield dissipates. These effects and timing conditions agree with the accepted sphere implementation. It names the parent Telekine Shield ability without stating that Telekine Dome is required; this prerequisite is a missing condition, not an explicit claim that the wall shape grants the effect. The maximum-Toughness basis, caster inclusion and calculations supplement the description. The word `Allies` does not explicitly exclude the caster; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_boost_allies_in_sphere.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/57b73353-bc2c-4313-b488-cb9a1ac7c9f0). The icon identifies the talent; it is not mechanism evidence.
