# Pious Cut-Throat: source evidence

[繁體中文](../zealot_backstab_kills_restore_cd.md) | [Player description](README.md#zealot_backstab_kills_restore_cd) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_backstab_kills_restore_cd)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_backstab_kills_restore_cd`; name key `loc_talent_zealot_backstab_kills_restore_cd`; description key `loc_talent_zealot_cooldown_on_backstab_weakspot_desc`. Node `node_5321e553-acec-4b27-9d43-a5af507fa953`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent's passive Buff listens to `on_hit`, first passes `CheckProcFunctions.on_melee_hit`, then checks `is_backstab OR on_weakspot_hit`. Either condition suffices; a kill is not required.
- A qualifying hit adds `zealot_weakspot_backstab_hit_cooldown_cooldown_buff`: `duration=2`, `max_stacks=1`, `refresh_duration_on_stack=true`. Its `start_func` sets a custom timer to fixed time +1. Each second, `update_func` restores 0.75 `combat_ability` resource and advances the timer by 1.
- With a charge cost of 30 and natural recharge of 1/s, two extra settlements give about 1.5 resource, equivalent to about 1.5 seconds of natural recharge. The Buff update checks duration before running the template `update_func`; a final update may still execute at the expiry boundary.
- Talent `format_values` retains `ability_cooldown=0.1`, but the description uses `cooldown=0.75`. The runtime Buff uses 0.75, not the unused 0.1 field.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1256-L1280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1256-L1280)
- [scripts/settings/talent/talent_settings_zealot.lua — L175-L178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L175-L178)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4068-L4134](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4068-L4134)
- [scripts/extension_systems/buff/buffs/buff.lua — L29-L48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L48)
- [scripts/extension_systems/buff/buffs/buff.lua — L103-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L103-L127)
- [scripts/extension_systems/buff/buffs/buff.lua — L305-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L305-L328)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1256-L1280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1256-L1280)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1138-L1163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1138-L1163)

## Example assumptions and limits

- **Trigger**: A Melee Weakspot hit or a hit from behind grants additional combat ability recharge for the next 2 seconds. A kill is not required, and a Ranged Weakspot hit does not trigger it.
- **Refresh**: Another trigger resets duration without stacking the recovery rate. A hit that is both a Weakspot and Backstab does not double it.
- **Cooldown example**: Each second gives extra progress equivalent to 0.75 seconds of base cooldown. Two full settlements total 0.75 × 2 = 1.5 seconds. With natural recharge also running, that interval advances about 2 + 1.5 = 3.5 seconds of cooldown. Excess resource above full charges is not stored.

- Repeated hits refresh the Buff duration. The custom timer is initialized only when the Buff is first created; refreshing duration need not reset its running one-second timer. Frequent hits must not each be treated as an independent 1.5-resource refund.
- Equating 1.5 resource to 1.5 seconds for a 30-resource charge assumes base natural recharge of 1 resource/s. Other recharge bonuses or pauses change actual waiting time.
- The talent definition's internal name still says “Backstab kills,” but runtime behavior uses melee hits. The Chinese inventory says hits, so the accepted note records behavior without declaring a Chinese mistranslation.
- The accepted Chinese comparison at hash `169457dc` records compatible effect directions. Trigger, stacking, recovery and calculation details supplement the wording. Actual game presentation and behavior remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_backstab_kills_restore_cd`, hash `5bf093a5`, entry 5960: **Pious Cut-Throat**.
- Description key `loc_talent_zealot_cooldown_on_backstab_weakspot_desc`, hash `169457dc`, entry 1467.

Full raw template:

~~~text
{cooldown:%s} Ability Cooldown Regeneration for {duration:%s}s after a Melee Backstab or Melee Weakspot hit.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cooldown` | 0.75 → +75% | `percentage`, `+` prefix; accepted cooldown recovery value |
| `duration` | 2 | `number`; accepted Buff duration |

The minimal display mapping at `zealot_talents.lua` L1256-L1275 identifies the fields actually used by this template. The unused `ability_cooldown=0.1` entry is not substituted.

Static reconstruction; not an observed game screen:

~~~text
+75% Ability Cooldown Regeneration for 2s after a Melee Backstab or Melee Weakspot hit.
~~~

## English comparison

The English explicitly says Melee Backstab **or** Melee Weakspot **hit**, agreeing with the accepted OR condition and lack of a kill requirement. Its +75% regeneration for 2 seconds agrees with the additional 0.75 resource/s on the accepted natural 1 resource/s basis. The single-stack refresh, timer phase, expiry-boundary settlement and resource cap are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_backstab_kills_restore_cd.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/9768a27f-3a7b-47c7-a334-7f1f57db287a). The icon identifies the talent; it is not mechanism evidence.
