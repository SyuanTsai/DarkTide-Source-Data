# Enervating Threshold: source evidence

[繁體中文](../psyker_shield_stun_passive.md) | [Player description](README.md#psyker_shield_stun_passive) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_shield_stun_passive)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_shield_stun_passive`; name key `loc_talent_psyker_force_field_stun_increased`; description key `loc_talent_psyker_force_field_stun_increased_new_description`. Node `node_959bd205-bf6c-48fc-ab14-f59364fedd6c`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The passive listens only for `on_unit_touch_force_field` and checks that the touched shield belongs to the talent owner. Targets tagged `special` or `monster` use `special_proc_chance=1`; other targets use `proc_chance=0.2`.
- On success, the `psyker_shield_stagger` profile performs an electrocution/push-type attack and applies `psyker_stun_effect`.
- For targets with the `special` tag, it also calls `force_field_health_extension:add_damage(8)`. In each permitted 0.33-second damage window, the shield's `HealthExtension` removes a fixed 1 durability. A call value of 8 therefore does not mean 8 durability removed at once.
- Monsters have a 100% trigger chance too, but the extra `add_damage` branch checks only `special`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1351-L1374](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1351-L1374)
- [scripts/settings/talent/talent_settings_psyker.lua — L342-L346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L342-L346)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2491-L2538](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2491-L2538)
- [scripts/extension_systems/force_field/force_field_system.lua — L185-L253](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/force_field_system.lua#L185-L253)
- [scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua — L46-L99](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua#L46-L99)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1351-L1374](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1351-L1374)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1183-L1205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1183-L1205)

## Example assumptions and limits

- **Ability modifier**: Enemies passing through your Telekine Shield have a 20% chance to be Electrocuted. Specialist Enemies and Monsters always trigger the effect; whether it interrupts an action still depends on the Enemy's resistance.

- **Shield cost**: A Specialist trigger also damages the shield, subject to its 0.33-second durability-removal interval.

- **Chance example**: Each eligible ordinary-Enemy crossing has a 20% chance. Across 100 crossings, expected triggers are `100 × 20% = 20`, rather than a guaranteed trigger every five crossings.

- Ignoring random sampling variation, and assuming the target actually touches/crosses your own shield, ordinary Enemies have a 20% chance per trigger; targets tagged `special` or `monster` use 100%. Ordinary Enemies average about one Electrocution per five eligible touches; Specialists/Monsters trigger each time.
- Classification uses Enemy tags. Not every Elite is necessarily `special` or `monster`.
- The event requires shield contact/crossing; merely approaching from an arbitrary distance does not trigger it.
- Ordinary versus special target definitions follow source tags; actual behavior remains pending in-game comparison. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_force_field_stun_increased`, hash `122cfc3a`, entry 1177: **Enervating Threshold**.
- Description key `loc_talent_psyker_force_field_stun_increased_new_description`, hash `900d2430`, entry 9307.

Full raw template:

~~~text
{ability:%s} has a {proc_chance:%s} chance to Electrocute enemies that pass through it. Specialist enemies have a {special_proc_chance:%s} chance to get Electrocuted but also damage the {ability:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `ability` | `loc_talent_psyker_combat_ability_shield` | Localized string → `Telekine Shield` |
| `proc_chance` | `0.2` | Percentage → `20%` |
| `special_proc_chance` | `1` | Percentage → `100%` |

Only missing display fields in `psyker_talents.lua` L1351–1369 were read. Accepted `proc_chance=0.2` and `special_proc_chance=1` format as `20%` and `100%`. `ability` resolves to **Telekine Shield** (`loc_talent_psyker_combat_ability_shield`, hash `3a349f50`, entry 3771). Mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Telekine Shield has a 20% chance to Electrocute enemies that pass through it. Specialist enemies have a 100% chance to get Electrocuted but also damage the Telekine Shield.
~~~

## English comparison

Read independently, the English describes Electrocution on shield crossing, normally at 20%, with Specialists triggering at 100% and damaging the shield. These agree with the accepted contact event and Specialist branch. It does not promise that every Electrocution interrupts every action, or that the shield loses 8 durability per Specialist contact. Monsters sharing the 100% chance, tag-based classification, owner check, durability throttle and expected-value example supplement the description; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_shield_stun_passive.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/0cacb110-bf24-451f-ad19-f55ee7bd6191). The icon identifies the talent; it is not mechanism evidence.
