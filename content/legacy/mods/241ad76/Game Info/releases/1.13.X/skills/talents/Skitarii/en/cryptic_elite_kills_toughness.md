# Binary Ballistics Protocol: source evidence

[繁體中文](../cryptic_elite_kills_toughness.md) | [Player description](README.md#cryptic_elite_kills_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_elite_kills_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_elite_kills_toughness`; name key `loc_talent_cryptic_elite_kills_toughness`; description key `loc_talent_cryptic_elite_kills_toughness_desc`. Node `node_baf3690d-c727-4388-ba24-bb4c55ef6699`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `on_kill` trigger uses `on_elite_kill`; it has no ranged-kill filter.
- `allow_proc_while_active` permits retriggering. The update recovers Toughness at a rate of `0.15 / 3` of maximum Toughness per second.

## Fixed source evidence

- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L96-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L109)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua — L402-L405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L402-L405)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2244-L2272](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2244-L2272)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1817-L1835](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1817-L1835)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L808-L834](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L808-L834)

## Example assumptions and limits

- Killing an Elite restores 15% of maximum Toughness over 3 seconds. Both melee and ranged kills qualify.
- Another qualifying kill refreshes the 3-second duration; it does not increase the recovery rate.
- **Example**: With 200 maximum Toughness, recovery is `200 × 15% ÷ 3 = 10` points per second, or 30 points over 3 seconds. If you trigger it again after 2 seconds, continuous recovery lasts 5 seconds and restores 50 points in total.

The example assumes no additional Toughness recovery bonuses and enough missing Toughness for the full recovery. Maximum Toughness, recovery bonuses and the Toughness cap affect the actual amount restored.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_elite_kills_toughness`, hash `73cdec4e`, entry 7528: **Binary Ballistics Protocol**.
- Description key `loc_talent_cryptic_elite_kills_toughness_desc`, hash `46309d46`, entry 4563.

Full raw template:

~~~text
Elite Kills restore {toughness:%s} Toughness over {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | `0.15` → `15%` | Percentage; no added prefix. |
| `duration` | `3` | Number; the template supplies `s`. |

Display mappings are `cryptic_talents.lua` L1825-L1834. The recovery fraction and duration reuse the verified settings listed above.

Static reconstruction; not an observed game screen:

~~~text
Elite Kills restore 15% Toughness over 3s.
~~~

## English comparison

The English correctly identifies Elite kills and 15% recovery over 3 seconds. It does not restrict the killing attack to ranged attacks. The maximum-Toughness basis, fixed recovery rate, duration refresh and recovery modifiers are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_elite_kills_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/79eb4aea-82d8-46fb-add1-a4ded8e41cce). The icon identifies the talent; it is not mechanism evidence.
