# Trample: source evidence

[繁體中文](../ogryn_charge_trample.md) | [Player description](README.md#ogryn_charge_trample) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_charge_trample)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_charge_trample`; name key `loc_talent_ogryn_ability_charge_trample`; description key `loc_talent_ogryn_ability_charge_trample_desc`. Node `node_b3d3d2eb-a57e-4c0e-bc45-5d0c41b94135`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `ogryn_charge_trample` proc triggers only on `on_hit` with `damage_type=ogryn_lunge`, adding one `ogryn_charge_trample_buff` stack per event. The buff has duration 10s, `max_stacks=max_stacks_cap=20`, `refresh_duration_on_stack=true` and `stat_buffs.damage=0.025`.
- The hit-event handler has no `attacked_unit` deduplication set. Stacks follow each valid charge-hit event. After reaching 20 stacks, the buff extension's cap-refresh path resets the duration.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1455-L1502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1455-L1502)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L954-L986](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L954-L986)
- [scripts/extension_systems/buff/buff_extension_base.lua — L580-L605](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L580-L605)
- [scripts/settings/talent/talent_settings_ogryn.lua — L284-L294](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L284-L294)
- [scripts/utilities/attack/damage_calculation.lua — L287-L305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L287-L305)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1455-L1502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1455-L1502)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1525-L1547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1525-L1547)

## Example assumptions and limits

- **Stacking**: A charge hit adds one stack of Trample. Each stack grants 2.5% more damage, up to 20 stacks, for 10s. Further hits restart the duration. Both melee and ranged damage benefit.

- **Damage example**: Four hits grant 10%, turning 100 base damage into 100 × (1 + 4 × 2.5%) = 110. At 20 stacks the result is 150. With another 20% increase at the same stage, the full-stack result is 170.

- **Counting hits**: Each charge-hit event can add a stack. If the same enemy is hit separately during the charge and its ending impact, it may count for more than one stack.

If one charge produces multiple valid hit events against the same enemy, there is no additional target deduplication in this proc. The increase applies to base damage; final damage still depends on the weapon, armour and other damage modifiers. English and code evidence both correspond to 1.13.1; actual behavior remains untested in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_ability_charge_trample`, hash `b44215a6`, entry 11620: **Trample**.
- Description key `loc_talent_ogryn_ability_charge_trample_desc`, hash `fd34bb5c`, entry 16447.

Full raw template:

~~~text
For each Enemy hit by {talent_name:%s} you gain a Stack of Trample. Trample increases Base Damage by {damage:%s} for {duration:%s}s. Max Stacks {stack:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_ability_ogryn_charge | Localized string → Bull Rush; accepted same-build English key |
| damage | stat_buffs.damage 0.025 | Percentage with + prefix → +2.5% |
| duration | Buff duration 10 | Number → 10; template supplies s |
| stack | Buff max_stacks 20 | Number → 20 |

Only the missing display map in the cited talent definition, lines 1455–1502, was read. The map names Bull Rush; the verified player explanation covers the charge behavior. Existing mechanism and formatter evidence were reused.

Static reconstruction; not an observed game screen:

~~~text
For each Enemy hit by Bull Rush you gain a Stack of Trample. Trample increases Base Damage by +2.5% for 10s. Max Stacks 20.
~~~

## English comparison

The independently read English gives a stack for charge hits, +2.5% Base Damage per stack, 10s and a 20-stack limit. These agree with the accepted evidence. It does not explicitly limit the whole charge to one stack per unique enemy, so the lack of target deduplication is recorded as supplementary information. Refreshing duration, melee/ranged scope and the 110/150/170 examples also supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_charge_trample.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/fa5d9c18-f792-4a86-812f-8547ba3cf89e). The icon identifies the talent; it is not mechanism evidence.
