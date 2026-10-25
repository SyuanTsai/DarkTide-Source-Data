# Perilous Combustion: source evidence

[繁體中文](../psyker_elite_kills_add_warpfire.md) | [Player description](README.md#psyker_elite_kills_add_warpfire) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_elite_kills_add_warpfire)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_elite_kills_add_warpfire`; name key `loc_talent_psyker_elite_kills_add_warpfire`; description key `loc_talent_psyker_elite_and_special_kills_add_warpfire_desc`. Node `node_dbf51b8d-f6d8-418b-a1dc-29435eea34b0`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_kill` requires `died` and `tags.elite` or `tags.special`. The position is the victim's; the radius is 4 metres, and the effect adds 2 `warp_fire` stacks.
- `warp_fire` ticks at intervals of 0.75 seconds. Its power is `500 × s² × (3 − 2s)`, where `s = stacks / 31`, then passes through the `warpfire` damage curve and armour modifiers. Damage is not a fixed amount per stack.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1550-L1621](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1550-L1621)
- [scripts/settings/talent/talent_settings_psyker.lua — L215-L218](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L215-L218)
- [scripts/settings/buff/weapon_buff_templates.lua — L101-L128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L101-L128)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1287-L1302](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1287-L1302)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L143-L170](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L143-L170)

## Example assumptions and limits

- **Trigger**: killing an Elite or Specialist enemy applies 2 Soulblaze stacks to enemies within 4 metres of the victim.

- **Stack example**: a nearby enemy with no Soulblaze receives 2 stacks; one with 3 stacks reaches 3 + 2 = 5 stacks. Damage grows nonlinearly with stacks; 5 stacks do not deal 5 times the damage of 1 stack.

- **Exception**: a sleeping Daemonhost is not ignited by this effect.

The code excludes a kill only when its damage type is `warpfire` and `attack_type` is absent; damage type alone does not establish that every Soulblaze Kill is excluded. Individual damage-over-time stack removal and total damage over the whole effect require a fixed enemy armour type and subsequent stack additions to calculate. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_elite_kills_add_warpfire`, hash `efe217b7`, entry 15594: **Perilous Combustion**.
- Description key `loc_talent_psyker_elite_and_special_kills_add_warpfire_desc`, hash `c4294372`, entry 12653.

Full raw template:

~~~text
Killing an Elite or a Specialist Enemy applies {stacks:%s} stack(s) of Soulblaze to nearby Enemies, causing Damage over time.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stacks` | `2` | number → `2` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1292-L1297) uses the verified `talent_settings_2.offensive_1_3.num_stacks` value of 2. The internal development name's older number is not the localized display value. The export suffix is metadata outside the template.

Static reconstruction; not an observed game screen:

~~~text
Killing an Elite or a Specialist Enemy applies 2 stack(s) of Soulblaze to nearby Enemies, causing Damage over time.
~~~

## English comparison

The English trigger, 2-stack amount and damage-over-time effect agree with the existing evidence. The 4-metre victim-centred radius, sleeping-Daemonhost exception, event exclusion and nonlinear damage scaling are omitted details, not English errata.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_elite_kills_add_warpfire.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/6cc7512d-8e6f-4261-88f3-c95089950934). The icon identifies the talent; it is not mechanism evidence.
