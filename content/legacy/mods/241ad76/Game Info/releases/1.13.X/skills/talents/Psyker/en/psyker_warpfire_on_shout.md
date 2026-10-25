# Creeping Flames: source evidence

[繁體中文](../psyker_warpfire_on_shout.md) | [Player description](README.md#psyker_warpfire_on_shout) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_warpfire_on_shout)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_warpfire_on_shout`; name key `loc_talent_psyker_warpfire_on_shout`; description key `loc_talent_psyker_warpfire_on_shout_desc`. Node `node_400d79d6-4aaa-47e4-b9c4-127b79ef639a`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent passive listens for `on_combat_ability` and captures `warp_charge_component.current_percentage` before the shout deals damage. The template calculates `ceil(percentage * 6)`, clamps it to 1–6, then applies that stack count to eligible targets on the shout-hit event.
- Hit handling requires the target to remain alive, not be a sleeping Daemonhost, and the stack count to exceed 0. This execution order uses a Peril snapshot at activation. The minimum of one stack means even a snapshot close to 0 still supplies at least one stack.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1820-L1849](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1820-L1849)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L362-L404](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L362-L404)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua — L41-L59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L41-L59)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua — L108-L146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L108-L146)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1820-L1849](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1820-L1849)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L566-L589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L566-L589)

## Example assumptions and limits

- **Ability modifier**: Based on your Peril before casting Venting Shriek, apply 1–6 stacks of Soulblaze to hit Enemies. Sleeping Daemonhosts are not ignited by this effect.

- **Stack examples**: Multiply the Peril proportion by 6 and round up, with a minimum of 1 and maximum of 6 stacks. At 50%, `0.50 × 6 = 3` stacks; at 80%, `0.80 × 6 = 4.8` rounds up to 5. Even 0% Peril applies 1 stack.

- At 50% Peril when activating the shout, with a living target that is not a sleeping Daemonhost, `ceil(0.50 × 6) = ceil(3) = 3`: apply 3 Soulblaze stacks to that hit target.
- At 13% Peril on activation and with an eligible target, `ceil(0.13 × 6) = ceil(0.78) = 1`: apply at least 1 Soulblaze stack.
- Sleeping Daemonhosts are excluded and the target must be alive. General wording about hit targets does not imply unconditional application to every unit.
- This account calculates only the applied stack count. It does not infer Soulblaze damage per second, duration, spread or stack-refresh rules. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_warpfire_on_shout`, hash `e809f338`, entry 15059: **Creeping Flames**.
- Description key `loc_talent_psyker_warpfire_on_shout_desc`, hash `8ec3e5f7`, entry 9237.

Full raw template:

~~~text
{talent_name:%s} applies {min_stacks:%s}{warpfire_stacks:%s} Stack(s) of Soulblaze to targets Hit based on your current Peril.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_shout_vent_warp_charge` | Localized string → `Venting Shriek` |
| `min_stacks` | Literal string `1 - ` | String, preserving its trailing space |
| `warpfire_stacks` | `6` | Number → `6`; combined with preceding placeholder → `1 - 6` |

Only missing display fields in `psyker_talents.lua` L1820–1843 were read. `talent_name` resolves to **Venting Shriek** (`loc_talent_psyker_shout_vent_warp_charge`, hash `90f1bcf1`, entry 9370); `min_stacks` is the literal string `1 - ` and `warpfire_stacks` finds the accepted maximum 6. Adjacent placeholders therefore display `1 - 6`. Mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Venting Shriek applies 1 - 6 Stack(s) of Soulblaze to targets Hit based on your current Peril.
~~~

## English comparison

Read independently, the English states a Peril-dependent range of 1–6 Soulblaze stacks on targets hit by Venting Shriek. This agrees with the accepted activation snapshot and clamped stack calculation. It does not specify a linear unrounded stack count or promise application to ineligible targets. Snapshot timing, rounding, the living-target/sleeping-Daemonhost checks and example results supplement the wording; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_warpfire_on_shout.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/65f7ef9b-5b0d-458e-bc7d-5aea8e948e14). The icon identifies the talent; it is not mechanism evidence.
