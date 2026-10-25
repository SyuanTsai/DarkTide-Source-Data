# Reloaded and Ready: source evidence

[繁體中文](../ogryn_reloading_grants_damage.md) | [Player description](README.md#ogryn_reloading_grants_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_reloading_grants_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_reloading_grants_damage`; name key `loc_talent_ogryn_ranged_damage_on_reload`; description key `loc_talent_ogryn_ranged_damage_on_reload_desc`. Node `node_a48230be-6330-4e03-871c-0a3881828604`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_reload` activates `ranged_damage=0.15` for `active_duration=8`. The old internal `name` text's 12% / 6s is not the current effect.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2094-L2111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2094-L2111)
- [scripts/settings/talent/talent_settings_ogryn.lua — L220-L223](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L220-L223)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L323-L345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L323-L345)
- [scripts/utilities/attack/damage_calculation.lua — L278-L320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L320)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1089-L1109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1089-L1109)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1099-L1128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1099-L1128)

## Example assumptions and limits

- **Trigger**: Reloading grants +15% ranged damage for 8s. Reloading again refreshes the duration without adding stacks.

- **Damage example**: Base ranged damage of 100 becomes 115. With another +20% at the same stage, it becomes `100 × (1 + 20% + 15%) = 135`. Melee damage does not receive this bonus.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_ranged_damage_on_reload`, hash `d7ac6751`, entry 13971: **Reloaded and Ready**.
- Description key `loc_talent_ogryn_ranged_damage_on_reload_desc`, hash `a8bc8a04`, entry 10876.

Full raw template:

~~~text
{damage:%s} Ranged Damage for {duration:%s}s on reload.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | mixed_1.damage_after_reload = 0.15 | Percentage with explicit + prefix → +15% |
| duration | mixed_1.duration = 8 | Number → 8 |

Only the missing display mapping in the cited talent definition, lines 1089–1109, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+15% Ranged Damage for 8s on reload.
~~~

## English comparison

The independently read English specifies +15% ranged damage for 8s on reload, matching the accepted current values and ranged-only scope. It does not use the obsolete internal name's 12% / 6s. Duration refresh, lack of stacking and the same-stage additive example supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_reloading_grants_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/27fcc279-9828-4df7-b895-04956bb2463b). The icon identifies the talent; it is not mechanism evidence.
