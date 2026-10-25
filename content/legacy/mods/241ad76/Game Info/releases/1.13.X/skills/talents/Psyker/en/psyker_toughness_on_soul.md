# Essence Harvest: source evidence

[繁體中文](../psyker_toughness_on_soul.md) | [Player description](README.md#psyker_toughness_on_soul) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_toughness_on_soul)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_toughness_on_soul`; name key `loc_talent_psyker_toughness_regen_on_soul`; description key `loc_talent_psyker_toughness_regen_on_soul_desc`. Node `node_cec906f5-721d-46dd-95e9-78b903190c9d`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Settings are `percent_toughness = 0.06`, `duration = 5` and `max_stacks = 1`. Each frame the Toughness buff calls `replenish_percentage(percent_toughness × dt)`, giving `0.06 × 5 = 0.30` over a complete five-second duration.
- With Essence Harvest selected, Warp Siphon's stack-add function applies `psyker_souls_replenish_toughness_stacking_buff`. This buff has `refresh_duration_on_stack = true` and a cap of one: another stack refreshes the timer without increasing the restoration rate.
- The trigger is the soul-add/update event, including a successful soul gain that refreshes the soul buff while the existing souls are already at their cap.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L944-L963](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L944-L963)
- [scripts/settings/talent/talent_settings_psyker.lua — L192-L198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L192-L198)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L189-L214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L189-L214)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L217-L228](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L217-L228)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1410-L1434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1410-L1434)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L462)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L944-L963](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L944-L963)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1350-L1373](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1350-L1373)

## Example assumptions and limits

- **How it works:** Gaining a Warp Charge restores 30% of maximum Toughness over five seconds. Gaining another during the effect resets the five-second timer; the restoration rate does not stack.

- **Restoration example:** With 100 maximum Toughness, restore `100 × 30% ÷ 5 = 6` per second, or 30 over a full five seconds. If only 12 is missing, at most 12 can actually be restored.

Effective restoration is limited by maximum Toughness; the full-duration example assumes enough missing Toughness. Gaining another soul does not immediately restore 30%: it refreshes the duration while restoration continues over time. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_toughness_regen_on_soul`, hash `15a3a4d2`, entry 1402: **Essence Harvest**.
- Description key `loc_talent_psyker_toughness_regen_on_soul_desc`, hash `fc9f3c0b`, entry 16412.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness over {time:%s}s on gaining Warp Charge. Gaining a new Warp Charge during this time resets the timer.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 0.06 × 5 = 0.30 | Percentage: 30%. |
| `time` | 5 | Number; seconds are in the template. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L949-L958 uses `talent_settings_2.toughness_1.percent_toughness × talent_settings_2.toughness_1.duration` for `toughness` and that duration for `time`. Accepted values and common formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Replenish 30% Toughness over 5s on gaining Warp Charge. Gaining a new Warp Charge during this time resets the timer.
~~~

## English comparison

The English explicitly says restoration occurs over five seconds and a new Warp Charge resets the timer, matching the accepted 6% of maximum Toughness per second and duration refresh. It does not claim an instant 30% restore or a stacking rate. The maximum-Toughness basis, deficit cap, buff cap and trigger at the soul cap are supplementary details; no explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_toughness_on_soul.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/00ae8b19-169d-4eec-94e2-89c3cf851d08). The icon identifies the talent; it is not mechanism evidence.
