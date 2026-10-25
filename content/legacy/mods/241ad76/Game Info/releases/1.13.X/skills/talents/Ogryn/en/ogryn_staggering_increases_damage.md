# Hard Knocks: source evidence

[繁體中文](../ogryn_staggering_increases_damage.md) | [Player description](README.md#ogryn_staggering_increases_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_staggering_increases_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_staggering_increases_damage`; name key `loc_talent_ogryn_big_bully_heavy_hits`; description key `loc_talent_ogryn_big_bully_heavy_hits_new_desc`. Node `node_19bc7a64-5626-472e-9a1c-90f412545e96`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit` requires `on_melee_stagger_hit` and a non-killing hit. `on_push_hit` requires `MinionState.is_minion` and the target to be `is_staggered` at that moment.
- The target buff has `max_stacks=1`, duration 5s and refreshed duration. Its `melee_damage_taken_modifier=0.15` adds to `damage_taken_modifier` in `_base_damage` before other multipliers apply.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3161-L3213](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3161-L3213)
- [scripts/settings/talent/talent_settings_ogryn.lua — L124-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L124-L127)
- [scripts/utilities/attack/damage_calculation.lua — L587-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1242-L1262](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1242-L1262)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L433-L458](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L433-L458)

## Example assumptions and limits

- **Trigger**: Stagger an enemy that survives with a melee attack, or push an enemy that is currently staggered, to make it take 15% more melee damage for 5s. Teammates' melee attacks also benefit.

- **Stacks and refresh**: Maximum 1 stack; triggering again restarts the duration. It adds at the same stage as Soften Them Up's 15% general damage-taken bonus.

- **Damage example**: Base melee damage of 100 becomes 115 with this effect alone. With Soften Them Up also active, it becomes `100 × (1 + 15% + 15%) = 130`. Ranged damage does not receive this melee damage-taken bonus.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_big_bully_heavy_hits`, hash `eb9ac8b6`, entry 15318: **Hard Knocks**.
- Description key `loc_talent_ogryn_big_bully_heavy_hits_new_desc`, hash `45b6dfbf`, entry 4522.

Full raw template:

~~~text
Enemies staggered by your Melee Attacks take {damage:%s} more Melee Damage for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | shared_talent_settings.ogryn_staggering_increases_damage_taken.damage = 0.15 | Percentage with explicit + prefix → +15% |
| duration | shared_talent_settings.ogryn_staggering_increases_damage_taken.duration = 5 | Number → 5 |

Only the missing display mapping in the cited talent definition, lines 1242–1262, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Enemies staggered by your Melee Attacks take +15% more Melee Damage for 5s.
~~~

## English comparison

The independently read English describes a target's increased melee damage taken after your melee attack staggers it. The +15% / 5s values and benefit to subsequent melee attacks agree with the accepted evidence; it does not restrict those attacks to the applicator. Push applicability, the survival filter, one-stack refresh and additive examples supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_staggering_increases_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/206be198-2a5f-426f-944a-8d85fd74f1d6). The icon identifies the talent; it is not mechanism evidence.
