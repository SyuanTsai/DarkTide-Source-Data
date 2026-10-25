# Splash Damage: source evidence

[繁體中文](../broker_passive_toxin_spread_on_kills.md) | [Player description](README.md#broker_passive_toxin_spread_on_kills) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_toxin_spread_on_kills)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_toxin_spread_on_kills`; name key `loc_talent_broker_passive_toxin_spread_on_kills`; description key `loc_talent_broker_passive_toxin_spread_on_kills_desc_02`. Node `node_50641b61-dfb0-4865-87e7-30e4dd71acdc`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_melee_hit` also requires `on_elite_kill`. The query first selects `min(num_hits, 10)`, then filters for `HEALTH_ALIVE`, so fewer than 10 living targets may actually be affected.
- It applies `neurotoxin_interval_buff3`. `stacks_to_add` is 2, but each addition first checks `current < max_stacks_to_add` with a threshold of 2; at that threshold it refreshes duration. The shared cap for this Toxin type is 30. This talent's two-stack limit must not be described as the cap for all Toxin.

## Fixed source evidence

- [scripts/settings/buff/weapon_buff_templates.lua — L1493-L1523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1523)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L25-L63](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L25-L63)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3035-L3098](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3035-L3098)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2240-L2284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2240-L2284)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1223-L1251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1223-L1251)

## Example assumptions and limits

- **Trigger**: Killing an Elite enemy with Melee spreads Chem Toxin within 4m of that enemy, selecting at most 10 enemies. The killed enemy does not need to have been infected already.

- **Stack limit**: This talent only fills this Toxin type up to 2 stacks. An initial 0 becomes 2, and 1 is filled to 2. At 2 or more, it only resets Toxin duration without adding further stacks.

- **Toxin example**: Damage occurs every 0.35s based on current Toxin stacks. At 2 stacks, input Power is 500 × 2 ÷ 30 ≈ 33.33, then the Toxin curve and armour determine Damage. This does not directly deal 33.33 Damage.

The original Chinese comparison records Melee Elite-kill spread as matching the English; the two-stack threshold for already infected targets is supplementary. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_toxin_spread_on_kills`, hash `7aa99c8a`, entry 7968: **Splash Damage**.
- Description key `loc_talent_broker_passive_toxin_spread_on_kills_desc_02`, hash `a94fd4a3`, entry 10917.

Full raw template:

~~~text
Killing an Elite Enemy with a Melee Attack infects up to {max_targets:%s} enemies within {radius:%s}m of the target with {toxin_stacks:%s} stacks of {toxin:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{max_targets:%s}` | 10 | Parent Buff's `max_targets`; `number` → `10` |
| `{radius:%s}` | 4 | Parent Buff's `radius`; `number` → `4` |
| `{toxin_stacks:%s}` | 2 | Parent Buff's `stacks_to_add`; `number` → `2` |
| `{toxin:%s}` | `loc_term_glossary_broker_toxin` | `loc_string` → `Chem Toxin` |

The existing display map at `broker_talents.lua` L2240-L2284 reads the three verified values and localizes the toxin key. The reused glossary resolves `Chem Toxin` (hash `5ea7edc3`, entry 6134); the number formatter displays 10, 4 and 2.

Static reconstruction; not an observed game screen:

~~~text
Killing an Elite Enemy with a Melee Attack infects up to 10 enemies within 4m of the target with 2 stacks of Chem Toxin.
~~~

## English comparison

The English states a Melee Elite kill, a 4m radius, up to 10 enemies and two Toxin stacks, matching the spread event and an initially uninfected target. It does not explicitly promise two additional stacks on an already infected enemy. The fill/refresh threshold, living-target filtering and Power calculation are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_toxin_spread_on_kills.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/31efd90d-864c-4e6c-af06-b48d540b45b3). The icon identifies the talent; it is not mechanism evidence.
