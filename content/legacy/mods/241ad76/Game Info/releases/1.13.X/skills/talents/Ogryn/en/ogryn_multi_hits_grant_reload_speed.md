# Pacemaker: source evidence

[繁體中文](../ogryn_multi_hits_grant_reload_speed.md) | [Player description](README.md#ogryn_multi_hits_grant_reload_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_multi_hits_grant_reload_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_multi_hits_grant_reload_speed`; name key `loc_talent_ogryn_reload_speed_on_multiple_hits`; description key `loc_talent_ogryn_reload_speed_on_multiple_hits_new_desc`. Node `node_65087f4f-47f2-428b-8c72-a5120e1116ac`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit` deduplicates by struck unit. Each hit updates that unit's expiry to `t + 0.5`. After expired targets are removed, `num_hit_units >= 3` grants the reload buff. There is no attack-type restriction.
- The child buff has `max_stacks=1`, `reload_speed=0.15` and no duration. `on_reload` sets `done`; `conditional_exit` requires `done` and leaving `reload_shotgun`, `reload_state` and `ranged_load_special`.
- The configured `offensive_3.duration=5` is not read by the child buff, so it is not a five-second expiry.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2161-L2247](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2161-L2247)
- [scripts/settings/talent/talent_settings_ogryn.lua — L238-L243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L238-L243)
- [scripts/utilities/action/action_handler.lua — L356-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1030-L1054](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1030-L1054)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L515-L539](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L515-L539)

## Example assumptions and limits

- **Trigger**: Hit at least 3 different enemies within about 0.5s to gain +15% Reload Speed for the next reload. Melee and ranged hits both count; repeated hits on one enemy do not count as multiple enemies.

- **Consumption**: The bonus lasts until the next reload ends, then is removed. Repeated triggers do not stack it to +30%.

- **Time example**: A 3s action affected by Reload Speed becomes `3 ÷ 1.15 ≈ 2.61s`. With another +20% at the same stage, it becomes `3 ÷ (1 + 15% + 20%) ≈ 2.22s`.

- **English erratum**: English says the enemies must be hit with a single attack. The accepted fixed-version implementation counts different targets within about 0.5s without a same-attack identifier restriction. Actual in-game behavior remains unobserved.

The English single-attack condition and the accepted 0.5s distinct-target window differ despite both sources corresponding to 1.13.1. Actual cross-source behavior remains to be checked in game; no new mechanism research was added. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_reload_speed_on_multiple_hits`, hash `3e43fc29`, entry 4060: **Pacemaker**.
- Description key `loc_talent_ogryn_reload_speed_on_multiple_hits_new_desc`, hash `61042337`, entry 6294.

Full raw template:

~~~text
Hitting {multi_hit:%s} or more Enemies with a single Attack grants {reload_speed:%s} Reload Speed on your next Reload.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| multi_hit | offensive_3.num_multi_hit = 3 | Number → 3 |
| reload_speed | offensive_3.reload_speed_on_multi_hit = 0.15 | Percentage with explicit + prefix → +15% |

Only the missing display mapping in the cited talent definition, lines 1030–1054, was read. Accepted values, mechanisms and common formatting were reused. The mapped duration = 5 is unused by the raw template and does not establish a child-buff expiry.

Static reconstruction; not an observed game screen:

~~~text
Hitting 3 or more Enemies with a single Attack grants +15% Reload Speed on your next Reload.
~~~

## English comparison

The independently read English requires 3 or more enemies hit with a single attack and grants +15% Reload Speed on the next reload. The count, bonus and next-reload use agree, but the explicit single-attack condition contradicts the accepted 0.5s distinct-target counter, which has no same-attack identifier restriction. This is an English erratum against the fixed-version evidence; actual behavior remains unobserved in game. Target deduplication, melee/ranged applicability, non-stacking, removal after reload and the action-time calculation are supplementary.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_multi_hits_grant_reload_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/cf916d47-2e00-43d4-98b7-307222a056e6). The icon identifies the talent; it is not mechanism evidence.
