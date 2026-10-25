# No Stopping Me!: source evidence

[繁體中文](../ogryn_windup_is_uninterruptible.md) | [Player description](README.md#ogryn_windup_is_uninterruptible) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_windup_is_uninterruptible)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_windup_is_uninterruptible`; name key `loc_talent_ogryn_windup_is_uninterruptible`; description key `loc_talent_ogryn_windup_is_uninterruptible_unslowed_desc`. Node `node_08929afd-e60d-457d-8006-b87c917647ff`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The windup condition controls both the conditional stat and keywords. Buff initialization uses `conditional_stat_buffs_func` as the fallback for `conditional_keywords_func`, so `uninterruptible` is not permanent.
- `weapon_action_movespeed_reduction_multiplier=0` removes the action's movement penalty.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L548-L571](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L548-L571)
- [scripts/extension_systems/buff/buffs/buff.lua — L130-L142](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L130-L142)
- [scripts/extension_systems/weapon/weapon_action_movement.lua — L100-L125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_action_movement.lua#L100-L125)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L931-L956](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L931-L956)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L995-L1017](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L995-L1017)

## Example assumptions and limits

- **Condition**: While charging a heavy melee attack, become Uninterruptible and remove that action's Movement Speed penalty. Both effects end when charging ends.

- **Speed example**: Assume normal speed is 5m/s and charging normally imposes a 50% penalty, reducing it to 2.5m/s. Removing that penalty restores 5m/s; it does not add 100% to all Movement Speed.

- **Limit**: This does not grant invulnerability; you still take damage while charging.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_windup_is_uninterruptible`, hash `c63c5e99`, entry 12803: **No Stopping Me!**.
- Description key `loc_talent_ogryn_windup_is_uninterruptible_unslowed_desc`, hash `6704b700`, entry 6703.

Full raw template:

~~~text
Become Uninterruptible while charging Heavy Melee Attacks. Remove {reduced_move_penalty:%s} of Heavy Melee Attack Movement Speed penalties.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| reduced_move_penalty | conditional_stat_buffs.weapon_action_movespeed_reduction_multiplier = 0 | (1 − value) × 100; percentage without prefix → 100% |

Only the missing display mapping in the cited talent definition, lines 931–956, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Become Uninterruptible while charging Heavy Melee Attacks. Remove 100% of Heavy Melee Attack Movement Speed penalties.
~~~

## English comparison

The independently read English conditions Uninterruptible on charging heavy melee attacks and removes 100% of those attacks' Movement Speed penalties. This matches the accepted conditional keyword and zero penalty multiplier. It describes penalty removal, not a general +100% speed bonus or invulnerability. The fallback condition and numerical speed example supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_windup_is_uninterruptible.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/d80b562f-7fc2-4daf-85e4-ae25f8171a89). The icon identifies the talent; it is not mechanism evidence.
