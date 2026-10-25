# Venting Shriek: source evidence

[繁體中文](../psyker_shout_vent_warp_charge.md) | [Player description](README.md#psyker_shout_vent_warp_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_shout_vent_warp_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_shout_vent_warp_charge`; name key `loc_talent_psyker_shout_vent_warp_charge`; description key `loc_talent_psyker_shout_vent_warp_charge_description`. Node `node_650c5469-5194-4722-a4f8-7d62487039df`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent definition switches to `psyker_discharge_shout_improved` and enables the `shout_warp_charge_vent_improved` special rule. The ability setting has a 30-second cooldown; the talent setting supplies a Quell amount of 0.5.
- The action first sends the `on_combat_ability` event, then calls `WarpCharge.decrease_immediate(0.5)` according to the special rule. `SharedFunctions.remove_immediate` calculates `current_percentage - remove_percentage` and clamps the result between 0 and 1. This removes a fixed number of percentage points.
- Targets are filtered jointly by forward direction, sector angle and ability range. A nearby-target exception with squared distance less than or equal to 9 can relax the angle condition.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L317-L343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L317-L343)
- [scripts/settings/talent/talent_settings_psyker.lua — L162-L171](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L162-L171)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua — L6-L26](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L6-L26)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua — L108-L146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L108-L146)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua — L220-L289](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L220-L289)
- [scripts/utilities/warp_charge.lua — L94-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L94-L109)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua — L18-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L18-L25)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L317-L343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L317-L343)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L452-L481](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L452-L481)

## Example assumptions and limits

- **Ability**: Unleash a wave of warp energy that Staggers Enemies in front of you and immediately Quells 50 percentage points of Peril. Base cooldown: 30 seconds.

- **Peril examples**: With no other simultaneous Peril changes, 80% Peril becomes 80% − 50 percentage points = 30%. At 40% Peril, subtracting 50 percentage points reaches the lower limit of 0%.

- The examples assume 80% or 40% Peril before the ability, without other simultaneous Peril changes.
- Actual hit count and coverage depend on target positions, the configured angle and range, and runtime state; the examples do not imply a fixed number of targets hit. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_shout_vent_warp_charge`, hash `90f1bcf1`, entry 9370: **Venting Shriek**.
- Description key `loc_talent_psyker_shout_vent_warp_charge_description`, hash `7d4501be`, entry 8128.

Full raw template:

~~~text
Unleashes a wave of warp energy that Staggers Enemies in front of you. Quells {warpcharge_vent:%s} Peril.

Base Cooldown: {cooldown:%s}s

This is an augmented version of {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `warpcharge_vent` | `0.5` | Percentage → `50%` |
| `cooldown` | `30` | Number → `30`; the template adds `s` |
| `talent_name` | `loc_talent_psyker_2_combat` | Localized string → `Psykinetic's Wrath` |

Only missing display fields in `psyker_talents.lua` L317–339 were read. `warpcharge_vent` uses the accepted improved value 0.5; `cooldown` uses the accepted 30-second ability setting. `talent_name` resolves `loc_talent_psyker_2_combat` to **Psykinetic's Wrath** (hash `f79dd1bd`, entry 16089). Accepted mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Unleashes a wave of warp energy that Staggers Enemies in front of you. Quells 50% Peril.

Base Cooldown: 30s

This is an augmented version of Psykinetic's Wrath.
~~~

## English comparison

Read independently, the English describes forward Stagger, a 50% Quell and a 30-second base cooldown. These agree with the accepted improved shout and immediate removal of 0.5 from normalized Peril. It does not specify halving the current amount. The percentage-point examples, target filtering, event order and lower clamp supplement the description; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability/psyker_shout_vent_warp_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/d0500b6b-c91c-4c34-857a-6c144800fe37). The icon identifies the talent; it is not mechanism evidence.
