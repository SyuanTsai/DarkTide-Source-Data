# Virulent Strain: source evidence

[繁體中文](../broker_passive_toxin_infected_enemies_take_increased_damage.md) | [Player description](README.md#broker_passive_toxin_infected_enemies_take_increased_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_toxin_infected_enemies_take_increased_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_toxin_infected_enemies_take_increased_damage`; name key `loc_talent_broker_passive_toxin_infected_enemies_take_increased_damage`; description key `loc_talent_broker_passive_toxin_infected_enemies_take_increased_damage_desc`. Node `node_735140ff-109a-4bc2-a2b9-761614c238cc`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_buff_added`/`on_buff_stack_added` check the `toxin` keyword. Events are forwarded to the owner through the Buff's `additional_arguments.owner_unit`; it cannot be broadly claimed that every teammate's Toxin application triggers this talent.
- The debuff has `max_stacks = 1`, `duration = 5` and a refreshed timer, with `damage_taken_modifier = 0.1`. After the first 0.1s, loss of the `toxin` keyword ends it.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3246-L3265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3246-L3265)
- [scripts/extension_systems/buff/buff_extension_base.lua — L1346-L1372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L1346-L1372)
- [scripts/utilities/attack/damage_calculation.lua — L587-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3210-L3245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3210-L3245)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2285-L2321](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2285-L2321)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1169-L1195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1169-L1195)

## Example assumptions and limits

- **Behavior**: When you add Chem Toxin to an enemy or increase its Toxin stacks, it takes 10% more Damage from all sources. Retriggering resets the 5s duration without stacking the magnitude.

- **Duration limit**: If Chem Toxin disappears early, the vulnerability also ends early; a full 5s duration is not guaranteed.

- **Damage example**: An initial 100 Damage becomes 110 with the vulnerability alone. With another 25% Damage bonus on the attacker, 100 × 1.25 × 1.1 = 137.5. If the target already has another 20% vulnerability at the same stage, that stage is 1 + 20% + 10% = ×1.3.

The original Chinese comparison records increased Damage taken after infection as matching the English; early termination and stacking behavior are supplementary. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_toxin_infected_enemies_take_increased_damage`, hash `c1abbd9d`, entry 12487: **Virulent Strain**.
- Description key `loc_talent_broker_passive_toxin_infected_enemies_take_increased_damage_desc`, hash `b7e6d44b`, entry 11862.

Full raw template:

~~~text
When infecting an Enemy with {toxin:%s}, increase their damage taken by {damage_taken:%s} from all sources for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toxin:%s}` | `loc_term_glossary_broker_toxin` | `loc_string` → `Chem Toxin` |
| `{damage_taken:%s}` | `damage_taken_modifier = 0.1` | Debuff lookup; `percentage`, `+` prefix → `+10%` |
| `{duration:%s}` | 5 | Debuff's `duration`; `number` → `5` |

The existing display map at `broker_talents.lua` L2285-L2321 localizes the toxin key and reads the verified debuff modifier/duration. Reused glossary: `Chem Toxin`, hash `5ea7edc3`, entry 6134. Percentage and number formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
When infecting an Enemy with Chem Toxin, increase their damage taken by +10% from all sources for 5s.
~~~

## English comparison

The English ties the effect to infecting an enemy and explicitly names +10% Damage taken from all sources for 5s, matching the debuff's magnitude and nominal duration. It does not specify teammate-owned Toxin, stack-addition events, timer refresh or early termination when Toxin disappears; these are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_toxin_infected_enemies_take_increased_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/90caf35d-4780-4f00-a9cc-636858cd091e). The icon identifies the talent; it is not mechanism evidence.
