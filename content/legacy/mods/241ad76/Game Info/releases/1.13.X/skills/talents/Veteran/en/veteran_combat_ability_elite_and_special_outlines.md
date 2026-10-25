# Executioner's Stance: source evidence

[繁體中文](../veteran_combat_ability_elite_and_special_outlines.md) | [Player description](README.md#veteran_combat_ability_elite_and_special_outlines) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_elite_and_special_outlines)

## Identity and upgrade values

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Combat ability upgrade; the node costs one talent point. [Start upgrade node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L721-L754); [Upgrade and display definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L290-L352).
- Talent: `veteran_combat_ability_elite_and_special_outlines`. Name key `loc_talent_veteran_combat_ability_elite_and_special_outlines`, hash `1a42be01`: **Executioner's Stance**.
- Actual description key `loc_talent_veteran_ranged_stance_toughness_description`, hash `38234496`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- This augments [Volley Fire](veteran_combat_ability_stance.md). Its passive installs the difference between improved and base values: ranged damage `0.25 − 0.15 = 0.10`, extra weakspot modifier `0.25 − 0.15 = 0.10`, and impact `1 − 0.5 = 0.5`. Together with the retained base buff, the totals are **25% / 25% / 100%**, rather than 40% / 40% / 150%. [Upgrade and display definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L290-L352); [Base and upgrade difference buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L296-L340); [Stance values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L73-L100).

## Stance, recovery and outlining

- Activation equips the ranged weapon; the ordinary stance lasts **six seconds** and the baseline recharge is **30 seconds**. Recharge continues during the stance. Handling, immunity keywords and disabled exit are inherited from Volley Fire. [Stance master and refresh behavior](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L85-L221); [Selected stance ability](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L65-L72); [Base resource settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L24); [Ability activation and resource consumption](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L826-L869); [Inherited base behavior](veteran_combat_ability_stance.md#stance-handling-and-cooldown).
- During the stance, recovery uses **10% of maximum Toughness per second**, subject to recovery modifiers and the missing-Toughness cap. This is resource replenishment, not damage. [Base and upgrade difference buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L296-L340); [Stance values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L73-L100).
- Outline eligibility uses breed categories and selected rules. Without the large-enemy outline rule, Ogryn, Monster, Captain and Cultist Captain categories are excluded before the Elite/Special test. Ordinary eligible Elites must satisfy `distance_squared < 2500`, i.e. **strictly less than 50 metres** when candidates are built; Specialists bypass this distance filter. [Outline eligibility categories](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L375-L406); [Outline candidates and distance filter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L408-L465); [Stance values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L73-L100).
- An owner kill of an eligible category refreshes the stance to its full **six-second** duration. The kill check uses `_can_show_outline` rather than checking the actual outlined-unit list or distance. An eligible Elite kill can therefore qualify even when that enemy was outside the outline candidate range. [Kill classification and refresh call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L141-L170); [Outline eligibility categories](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L375-L406); [Outline candidates and distance filter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L408-L465); [Refresh an existing buff instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457).
- Refreshing requests a new outline candidate list. Stance and visual outline timers are separate; the static result does not establish identical visual updates on the same frame. A kill with two seconds left resets the stance to six seconds; it does not add six to the remaining two. [Stance master and refresh behavior](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L85-L221); [Outline candidates and distance filter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L408-L465); [Refresh an existing buff instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457).

## Damage stages and isolated upgrade examples

General ranged damage adds at the general multiplier stage; the weakspot modifier acts on the extra finesse component. The upgrade adds ten percentage points to each corresponding base modifier. Full damage follows the general stage and then finesse's branches; the two isolated percentage gains below must not be added together. [General additive damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L320); [Damage calculation order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L95); [Extra finesse calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782); [Base and upgrade difference buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L296-L340).

Assume no other modifiers except those stated and no downstream damage changes. The weakspot row holds the already settled base component `B` and unbonused extra component `F` fixed, excludes critical hits and other finesse bonuses, and isolates only the weakspot upgrade. Recovery uses maximum Toughness 100, a sufficient deficit and no recovery modifier. Timing ignores update-frame offsets. These are static examples, not weapon or game measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| General damage-stage input 100; compare base 15% with improved 25% | Base `100 × 1.15 = 115`; improved `100 × 1.25 = 125 damage units`; `10 / 115 ≈ 8.70%`. | Ten additional percentage points give about 8.70% more than the already-bonused base-stage result. |
| Weakspot upgrade only; fixed `B = 100`, `F = 40` | Base `100 + 40 × 1.15 = 146`; improved `100 + 40 × 1.25 = 150 damage units`; `4 / 146 ≈ 2.74%`. | This isolates the extra-component upgrade; the complete ability gain also requires recalculating general ranged damage. |
| Maximum Toughness 100; at least 60 points missing over an uninterrupted six seconds | `100 × 0.10 = 10 Toughness points/s`; `10 × 6 = 60 points`. | Up to 60 points are replenished under these assumptions; reaching full Toughness limits the return. |
| Activate at time 0; qualifying kill at 4s | New expiry `4 + 6 = 10s`; remaining time resets from `6 − 4 = 2s` to `6s`. | The kill refreshes rather than adding six seconds to the two seconds left. |
| No cooldown modifiers; qualifying kill refreshes the stance at 4s | Base recharge ends at about 30s; stance expires at about 10s; `30 − 10 = 20s` remain. | Refreshing the stance does not restart the baseline recharge timer. |

[Base and upgrade difference buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L296-L340); [General additive damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L320); [Damage calculation order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L95); [Extra finesse calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782); [Stance master and refresh behavior](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L85-L221); [Refresh an existing buff instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457); [Base resource settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L24); [Ability activation and resource consumption](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L826-L869).

## Original English template and reconstruction

Full raw template, hash `38234496`:

```text
Enter Ranged Stance for {duration:%s}s. When in Ranged Stance you instantly equip your ranged weapon, deal {damage:%s} Ranged Damage, {weakspot_damage:%s} Ranged Weakspot Damage, replenish {toughness:%s} Toughness each second, and your Spread and Recoil are greatly reduced.

Human-sized Elite Enemies and Specialist Enemies are highlighted for {duration:%s}s.

Killing a highlighted Enemy refreshes the duration of its bonuses for {refresh_duration:%s}s.

Base Cooldown: {cooldown:%s}s.

This is an augmented version of {old_talent_name:%s}.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `duration` | Improved stance duration; number formatting | `6` |
| `damage` | Improved ranged damage `0.25`; signed percentage | `+25%` |
| `weakspot_damage` | Improved extra weakspot modifier `0.25`; signed percentage | `+25%` |
| `toughness` | Recovery rate `0.10`; percentage formatting | `10%` |
| `refresh_duration` | Full improved stance duration; number formatting | `6` |
| `cooldown` | Selected base ability cooldown; number formatting | `30` |
| `old_talent_name` | `loc_talent_veteran_2_combat_ability`, hash `2b30f2ca`; localized string | `Volley Fire` |
| `talent_name` | The definition supplies this talent's localized name, but the raw template does not use it | Unused |

[Upgrade and display definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L290-L352); [Stance values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L73-L100); [Base resource settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L24); [Selected stance ability](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L65-L72); [Number, percentage and name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L427).

Static plain-text reconstruction, preserving all five original paragraphs:

```text
Enter Ranged Stance for 6s. When in Ranged Stance you instantly equip your ranged weapon, deal +25% Ranged Damage, +25% Ranged Weakspot Damage, replenish 10% Toughness each second, and your Spread and Recoil are greatly reduced.

Human-sized Elite Enemies and Specialist Enemies are highlighted for 6s.

Killing a highlighted Enemy refreshes the duration of its bonuses for 6s.

Base Cooldown: 30s.

This is an augmented version of Volley Fire.
```

Runtime color markup is excluded; this is not an observed game screen. The damage values describe the improved totals and agree with the retained base plus difference buff. The English word **refreshes** agrees with resetting the timer; the Chinese-only wording error is not an English erratum. The text states that a highlighted-enemy kill refreshes the bonuses without saying that only such kills qualify. The broader category-based trigger, with no actual-highlight or distance check on the kill, is therefore an additional detail rather than an explicit English contradiction. Maximum-Toughness basis, impact, exact distance/handling and component formulas also supplement the short description.

## Limits

Actual weapon damage, recovery, outline visibility and frame timing have not been measured. The isolated examples do not represent the complete ability's damage gain. The broader refresh-trigger scope does not change the ordinary eligible enemy categories.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability/veteran_combat_ability_elite_and_special_outlines.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/f89a6abd-27a9-4099-9a5c-cd778cbe34ba)

The icon identifies the talent; it is not mechanism evidence.
