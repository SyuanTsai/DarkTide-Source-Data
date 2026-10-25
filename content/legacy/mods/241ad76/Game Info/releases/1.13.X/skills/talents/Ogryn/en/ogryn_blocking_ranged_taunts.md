# Attention Seeker: source evidence

[繁體中文](../ogryn_blocking_ranged_taunts.md) | [Player description](README.md#ogryn_blocking_ranged_taunts) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_blocking_ranged_taunts)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_blocking_ranged_taunts`; name key `loc_talent_ranged_enemies_taunt`; description key `loc_talent_ranged_enemies_taunt_description`. Node `node_60907136-b068-4b78-9e88-200e0abbf64f`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_block` / `on_push_hit` affects `attacking_unit` or `pushed_unit`. Monsters are excluded; a unit already having the `taunted` keyword does not receive the buff again.
- The cloned `taunted_short` has duration 8s. Shared exit checks include whether the owner is alive, `invisible` / `unperceivable`, and disabled.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L489-L526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L489-L526)
- [scripts/settings/buff/weapon_buff_templates.lua — L1204-L1270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1204-L1270)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1008-L1029](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1008-L1029)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1473-L1497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1473-L1497)

## Example assumptions and limits

- **Trigger**: Blocking an enemy's attack or hitting it with a push makes that enemy prioritize attacking you for 8s.

- **Limits**: Monsters are excluded. An enemy already Taunted does not receive this short Taunt again or have its duration refreshed.

- **Timing example**: If first Taunted at 0s, pushing the same still-Taunted enemy at 4s does not move the end to 12s. Taunt may end early if you die, become imperceptible to the enemy, or similar conditions apply.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ranged_enemies_taunt`, hash `0bd15ece`, entry 757: **Attention Seeker**.
- Description key `loc_talent_ranged_enemies_taunt_description`, hash `a01a7f7f`, entry 10348.

Full raw template:

~~~text
Blocking or Pushing Enemies Taunts them for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| duration | taunted_short.duration = 8 | Number → 8 |

Only the missing display mapping in the cited talent definition, lines 1008–1029, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Blocking or Pushing Enemies Taunts them for 8s.
~~~

## English comparison

The independently read English says blocking or pushing enemies Taunts them for 8s, matching the accepted event categories and duration. It does not explicitly promise applicability to Monsters or refresh on an already-Taunted target. Those exclusions, the push-hit requirement, early exit conditions and the timing example supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_blocking_ranged_taunts.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/119478f3-6425-4e96-9f26-e0df95a4bf1e). The icon identifies the talent; it is not mechanism evidence.
