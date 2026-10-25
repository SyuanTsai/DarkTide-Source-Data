# Warp Unbound: source evidence

[繁體中文](../psyker_overcharge_stance_infinite_casting.md) | [Player description](README.md#psyker_overcharge_stance_infinite_casting) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_overcharge_stance_infinite_casting)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_overcharge_stance_infinite_casting`; name key `loc_talent_psyker_overcharge_infinite_casting`; description key `loc_talent_psyker_overcharge_infinite_casting_desc`. Node `node_012fb3aa-bcfb-429b-8bd9-376cd7ad7915`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent marks the Gaze buff with the `psyker_overcharge_stance_infinite_casting` special rule. On stopping, the buff applies `psyker_overcharge_stance_infinite_casting` according to this rule, rather than the normal `cool_off`.
- Its duration is explicitly `post_stance_duration` 10 seconds plus `cooloff_duration` 1.5 seconds, giving 11.5 seconds. It carries the `psychic_fortress` keyword, which provides Peril-overload protection.
- Active Gaze still stops when `warp_charge_component.current_percentage` reaches 100%. The protection is applied after the stop.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L521-L536](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L521-L536)
- [scripts/settings/talent/talent_settings_psyker.lua — L5-L15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L5-L15)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1073-L1082](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1073-L1082)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1128-L1168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1128-L1168)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1219-L1226](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1219-L1226)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L521-L536](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L521-L536)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1710-L1733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1710-L1733)

## Example assumptions and limits

- **Ability modifier**: After Scrier's Gaze ends, retain protection from Peril overload; Peril still accumulates normally.

- **Duration**: The 10-second post-Gaze effect plus a 1.5-second buffer gives `10 + 1.5 = 11.5` seconds. Gaze itself still ends at 100% Peril.

- Assume Gaze ends at 100% Peril, this talent is selected and no extensions/refreshes apply. Post-Gaze protection is `10 seconds of exit-effect duration + 1.5 seconds of Quell buffer = 11.5 seconds`. During the next 11.5 seconds, psychic abilities can continue without Peril overload, while Peril still accumulates normally.
- The talent does not prevent Peril rising during Gaze or change its 100%-Peril end condition.
- Protection lasts 11.5 seconds after Gaze stops; it does not add 11.5 seconds to active Gaze.
- Other ability/attack effects beyond overload protection are not established by these source excerpts and are not extrapolated. Detailed duration and trigger scope derive from the fixed source and remain pending same-build in-game comparison. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_overcharge_infinite_casting`, hash `e3743a11`, entry 14747: **Warp Unbound**.
- Description key `loc_talent_psyker_overcharge_infinite_casting_desc`, hash `10334171`, entry 1058.

Full raw template:

~~~text
{talent_name:%s} now also prevents overloading from Perils of the Warp, during its lingering effect.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_combat_ability_overcharge_stance` | Localized string → `Scrier's Gaze` |

Only the missing localized-name mapping in `psyker_talents.lua` L521–531 was read. `talent_name` resolves to **Scrier's Gaze** (`loc_talent_psyker_combat_ability_overcharge_stance`, hash `b664d880`, entry 11771). This template has no numerical duration placeholder. The accepted 10 + 1.5 = 11.5-second protection remains supplementary mechanism evidence.

Static reconstruction; not an observed game screen:

~~~text
Scrier's Gaze now also prevents overloading from Perils of the Warp, during its lingering effect.
~~~

## English comparison

Read independently, the English prevents overload during Scrier's Gaze's lingering effect, placing protection after the active state rather than extending active Gaze. This agrees with the accepted stop-time application and psychic_fortress keyword. It does not say Peril Generation stops or specify that protection lasts only the 10-second damage buff. The full 11.5-second protection, its 1.5-second buffer, continued accumulation and unchanged 100% active-state end condition supplement the description; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_overcharge_stance_infinite_casting.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/810110f9-a360-4a69-8754-0e3502a0bef8). The icon identifies the talent; it is not mechanism evidence.
