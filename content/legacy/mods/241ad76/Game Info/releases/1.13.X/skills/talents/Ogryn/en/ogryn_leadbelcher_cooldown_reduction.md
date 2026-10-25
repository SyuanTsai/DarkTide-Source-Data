# Maximum Firepower: source evidence

[繁體中文](../ogryn_leadbelcher_cooldown_reduction.md) | [Player description](README.md#ogryn_leadbelcher_cooldown_reduction) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_leadbelcher_cooldown_reduction)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_leadbelcher_cooldown_reduction`; name key `loc_talent_ogryn_leadbelcher_grant_cooldown_reduction`; description key `loc_talent_ogryn_leadbelcher_grant_cooldown_reduction_desc`. Node `node_efe33c0f-ffa8-441f-bc7a-2e11f76b9d73`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The proc buff listens to `on_ammo_consumed` and checks `params.is_leadbelcher_shot`. It adds `ogryn_no_ammo_consumption_passive_cooldown_buff` on success.
- The recovery buff has `max_stacks=1`, `refresh_duration_on_stack=true` and duration 2.5s. Its server timer starts with the next second; each one-second tick restores 1 unit of combat-ability resource. The ProcBuff itself has no `cooldown_duration`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L406-L430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L406-L430)
- [scripts/settings/talent/talent_settings_ogryn.lua — L263-L269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L263-L269)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1984-L2040](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1984-L2040)
- [scripts/extension_systems/weapon/actions/action_shoot.lua — L481-L522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L522)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L150-L185](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L185)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1120-L1158](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1120-L1158)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L406-L430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L406-L430)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L809-L834](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L809-L834)

## Example assumptions and limits

- **Trigger**: A Lucky Bullet proc starts the effect. Ordinary shots do not trigger it.

- **Effect and refresh**: For 2.5s, restore about 1 extra second of combat-ability cooldown each second. Another proc resets the 2.5s duration without increasing the amount restored per tick.

- **Timing example**: If two complete restoration ticks occur while the ability is still cooling down, total progress over 2.5s is 2.5 + 2 × 1 = 4.5s. The extra restoration is applied in one-second ticks; the 2.5s window cannot simply be treated as 5s of cooldown progress.

The 2.5s is a buff window. The implementation restores ability resource directly on one-second ticks rather than settling “100% × 2.5s” in one operation. The example requires two complete ticks and an unfinished cooldown. Local Build 25606770 Chinese/English text and the fixed public source correspond to 1.13.1; actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_leadbelcher_grant_cooldown_reduction`, hash `6e911941`, entry 7184: **Maximum Firepower**.
- Description key `loc_talent_ogryn_leadbelcher_grant_cooldown_reduction_desc`, hash `5aacc61b`, entry 5884.

Full raw template:

~~~text
{cooldown_reduction:%s} Ability Cooldown Reduction for {duration:%s}s when Lucky Bullet triggers.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| cooldown_reduction | increased_cooldown_regeneration 1 / 100%; accepted existing value | Percentage with + prefix → +100% |
| duration | duration 2.5 | Number retains one decimal → 2.5; template supplies s |

Only the missing display map in the cited talent definition, lines 406–430, was read. Existing mechanism, 100% value and number-format evidence were reused.

Static reconstruction; not an observed game screen:

~~~text
+100% Ability Cooldown Reduction for 2.5s when Lucky Bullet triggers.
~~~

## English comparison

The independently read English agrees with a Lucky Bullet trigger and the 2.5s window. Its +100% Ability Cooldown Reduction wording does not define the percentage's time basis, so the precise rate/tick interpretation is qualified rather than treated as fully confirmed from text alone. The accepted behavior is one extra resource unit per second, duration refresh, and 4.5s progress under the two-tick example. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_leadbelcher_cooldown_reduction.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/47256097-2109-4fe4-89b7-b4a224ff1200). The icon identifies the talent; it is not mechanism evidence.
