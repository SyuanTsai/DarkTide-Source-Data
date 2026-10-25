# Kinetic Flayer: source evidence

[繁體中文](../psyker_smite_on_hit.md) | [Player description](README.md#psyker_smite_on_hit) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_smite_on_hit)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_smite_on_hit`; name key `loc_talent_psyker_smite_on_hit`; description key `loc_talent_psyker_smite_on_hit_special_elite_desc`. Node `node_fbf53cbf-026b-4076-aa50-08813d53dbb6`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At the fixed source SHA, the talent tree places this node under the Brain Rupture Blitz. The settings use `smite_chance=1` and `cooldown=12`; the proc template applies this 1.0 event chance to `proc_events.on_hit` and sets `cooldown_duration` to 12 seconds. Its custom `check_proc_func` requires an existing `attack_type`, nonzero `damage`, and a living target with a `breed` and at least one `elite` / `special` / `monster` tag. It also excludes `bomber`, `prop` and living props. On success, it records the target and attacks with the `psyker_smite_kill` damage profile and `damage_type=smite`.
- The shared damage formula applies `smite_damage_multiplier` for the `smite` damage type, so this triggered damage also enters that multiplier calculation when the Brain Rupture buff is present. The accepted inspection of the complete `check_proc_func` and `proc_func` found no critical-Peril or Warp Charge threshold. Text and code both correspond to 1.13.1; this difference remains pending in-game confirmation.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L232-L254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L232-L254)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1708-L1731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1708-L1731)
- [scripts/settings/talent/talent_settings_psyker.lua — L249-L252](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L249-L252)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1984-L2117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1984-L2117)
- [scripts/utilities/attack/damage_calculation.lua — L507-L519](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L507-L519)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1708-L1731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1708-L1731)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L232-L254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L232-L254)

## Example assumptions and limits

- **Trigger**: A damaging hit against an Elite, Specialist or Monstrosity triggers Brain Rupture when the target remains alive and the talent is off cooldown. Bombers and scenery objects are excluded.

- **Cooldown example**: After triggering at second 0, a hit at second 11 cannot trigger it again. The next qualifying hit after the 12-second cooldown ends triggers it.

- Assume the cooldown has just ended, the target is alive with an Elite tag, and the attack deals nonzero damage. A qualifying hit at t=0 triggers; one at t=11 is still inside the 12-second cooldown; the next qualifying hit at t≥12 can trigger again. The configured event chance for qualifying hits off cooldown is 1.0 (100%).
- Triggered damage depends on the target, triggered attack and Brain Rupture damage multiplier; there is no single fixed damage value.
- The fixed source's accepted trigger check does not implement the critical-Peril exclusion stated in the Traditional Chinese description. Both text and code are 1.13.1; retain this as a difference pending in-game comparison, without directly declaring the game wording wrong.
- These are static code derivations; no in-game trigger test was performed. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_smite_on_hit`, hash `14d069c4`, entry 1347: **Kinetic Flayer**.
- Description key `loc_talent_psyker_smite_on_hit_special_elite_desc`, hash `63bc627a`, entry 6480.

Full raw template:

~~~text
All Attacks against Specialists, Elites and Monstrosities, have {smite_chance:%s} chance on Hit to {talent_name:%s} the target. This cannot occur while at critical Peril, and has a Cooldown of {time:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `smite_chance` | `smite_chance=1` | Percentage, no sign prefix → `100%` |
| `talent_name` | `loc_talent_psyker_brain_burst_improved`, hash `c3b5cefd` | Localized string → `Brain Rupture` |
| `time` | `cooldown=12` | Number → `12` |

Only missing display fields in `psyker_talents.lua` L1708–1731 were read. `talent_name` localizes `loc_talent_psyker_brain_burst_improved` to Brain Rupture; `smite_chance` uses the accepted value 1.0 with percentage formatting, and `time` uses the accepted 12-second cooldown. Accepted mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
All Attacks against Specialists, Elites and Monstrosities, have 100% chance on Hit to Brain Rupture the target. This cannot occur while at critical Peril, and has a Cooldown of 12s.
~~~

## English comparison

Read independently, the English specifies qualifying enemy groups, a 100% hit chance and a 12-second cooldown, agreeing with the accepted trigger and timing evidence. It also explicitly excludes critical Peril, whereas the accepted complete trigger check found no such gate. The existing evidence leaves this difference pending in-game confirmation, so its result remains **Cannot confirm**, without new mechanism tracing. Damage/alive requirements, exclusions and the triggered damage multiplier are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical_modifier/psyker_smite_on_hit.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/2e792f27-7daf-4ce9-abcc-9d92ded0985c). The icon identifies the talent; it is not mechanism evidence.
