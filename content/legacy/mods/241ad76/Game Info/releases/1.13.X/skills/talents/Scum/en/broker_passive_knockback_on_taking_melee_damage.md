# Street Tough: source evidence

[繁體中文](../broker_passive_knockback_on_taking_melee_damage.md) | [Player description](README.md#broker_passive_knockback_on_taking_melee_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_knockback_on_taking_melee_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_knockback_on_taking_melee_damage`; name key `loc_talent_broker_passive_knockback_on_taking_melee_damage`; description key `loc_talent_broker_passive_knockback_on_taking_melee_damage_desc_02`. Node `node_c194e0f2-7b23-4667-bca2-57f4bdfa03cc`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_player_hit_received` requires `melee` and excludes `breed.tags.disabler`. `cooldown_duration` is 8; a separate child grants `movement_speed = 0.1` for `duration = 3`. The cooldown does not wait for a 3s `active_duration` to finish.
- The explosion radius is 3, the Damage profile has `attack = 0`, and it uses medium Stagger. Impact differs for `superarmor` and other armour categories.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3339-L3346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3339-L3346)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L240-L251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L240-L251)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua — L532-L565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L532-L565)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L150-L181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L181)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3301-L3338](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3301-L3338)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3339-L3358](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3339-L3358)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2345-L2387](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2345-L2387)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1059-L1088](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1059-L1088)

## Example assumptions and limits

- **Trigger**: When you receive a Melee hit, it knocks back enemies within 3m and increases Movement Speed by 10% for 3s. Melee attacks from enemies that disable you do not trigger it.

- **Cooldown and example**: The cooldown is 8s after triggering. With this effect alone, Movement Speed of 5m/s becomes 5 × 1.1 = 5.5m/s.

- **Knockback limits**: The pulse itself deals no Damage. Whether it interrupts an enemy still depends on the enemy's Stagger resistance and state.

The original Chinese comparison records the Melee trigger, knockback and Movement Speed as matching between languages; the excluded enemy category is supplementary. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_knockback_on_taking_melee_damage`, hash `e7b80789`, entry 15035: **Street Tough**.
- Description key `loc_talent_broker_passive_knockback_on_taking_melee_damage_desc_02`, hash `f7be7408`, entry 16095.

Full raw template:

~~~text
When taking Melee Damage, knock all nearby Enemies around you backwards and gain {movement_speed:%s} Movement Speed for {duration:%s}s. Can only trigger once every {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{movement_speed:%s}` | 0.1 | Child Buff's `stat_buffs.movement_speed`; `percentage`, `+` prefix → `+10%` |
| `{duration:%s}` | 3 | Child Buff's `duration`; `number` → `3` |
| `{cooldown:%s}` | 8 | Parent Buff's `cooldown_duration`; `number` → `8` |

The existing display map at `broker_talents.lua` L2345-L2387 reads the verified movement bonus and duration from `broker_passive_knockback_on_taking_melee_damage_proc`, and cooldown from the parent. Previously verified percentage and number formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
When taking Melee Damage, knock all nearby Enemies around you backwards and gain +10% Movement Speed for 3s. Can only trigger once every 8s.
~~~

## English comparison

The English's Melee trigger, +10% Movement Speed, 3s duration and 8s cooldown match the existing evidence. The omitted disabler exclusion, 3m radius and non-damaging pulse are supplements. Its universal “all … backwards” promise cannot be confirmed for every enemy state from the accepted Stagger evidence; no new mechanism trace or English erratum is added.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_knockback_on_taking_melee_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/069e6733-6d1f-4859-a3a6-829d213fd0a1). The icon identifies the talent; it is not mechanism evidence.
