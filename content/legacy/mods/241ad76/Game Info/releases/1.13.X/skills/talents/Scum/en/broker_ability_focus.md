# Desperado: base combat ability source evidence

[繁體中文](../broker_ability_focus.md) | [Base effects](BASE_EFFECTS.md#broker_ability_focus) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_focus)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `broker_ability_focus`; no selectable talent point cost. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Scum's `base_talents` selects `broker_ability_focus` by default in `slot_combat_ability`; the talent definition links to `PlayerAbilities.broker_ability_focus`. The ability requires a Ranged Weapon and uses the `broker_focus` ability template. It has capacity 1, natural regeneration of 1 resource per second and a cost of 45 resource per use; `broker_focus_stance` is the tracked effect that pauses its cooldown.
- Pressing the ability key performs `stance_change`: it switches to `slot_secondary`, consumes the ability at the start of the action, restores Toughness and applies `broker_focus_stance`. The Buff lasts 10 seconds. Its `stat_buffs` set `sprint_movement_speed` to +0.20 and `sprinting_cost_multiplier` to 0, with the keywords `count_as_dodge_vs_ranged` and `suppression_immune`.
- When the Buff starts, it transfers the Ranged Weapon's existing magazine into reserve, fills the magazine and temporarily enables free ammo transfers. When it ends, it disables free transfers, clears the current magazine and transfers ammunition back into the magazine under normal rules. This allows reloading without consuming reserve ammunition during the ability.
- The base **Desperado** does not extend its duration or mark enemies through kills. The shared Buff's kill handling first checks `broker_focus_improved`; without that improved feature it immediately returns.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/broker_archetype.lua — L53-L71](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L53-L71)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L76-L103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L76-L103)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L7-L36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L7-L36)
- [scripts/settings/ability/ability_templates/broker_focus.lua — L25-L50](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/broker_focus.lua#L25-L50)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L319-L462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L319-L462)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L255-L283](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L255-L283)
- [scripts/settings/talent/talent_settings_broker.lua — L117-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L117-L141)

## Examples and limits

- Without other cooldown modifiers, the 10-second Focus is followed by 45 seconds of natural regeneration; approximately 10 + 45 = 55 seconds elapse from Focus beginning until the charge returns.
- With a base Sprint Speed of 100 and only the +20% modifier, the result is 100 × 1.20 = 120. A Sprint Stamina cost multiplier of 0 means Sprinting during Focus costs no Stamina.
- The +20% modifies the Sprint Speed multiplier; actual speed still depends on other movement modifiers.
- The ability action's Toughness restoration does not increase maximum Toughness. The amount restored is capped by missing Toughness.
- Kill marking, duration extension through kills and other upgrades belong to the improved ability or branch nodes; they are excluded from this base ability.
- Local text from Build 25606770 corresponds to the fixed public source's version 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_focus`, hash `e77f3e99`, entry 15020: **Desperado**.
- Description key `loc_talent_broker_ability_focus_desc`, hash `a131b118`, entry 10418.

Full raw template:

~~~text
Swaps to and reloads your Ranged Weapon, entering {talent_name:%s} for {duration:%s}s. For the duration, you count as Dodging against Ranged Attacks, Sprinting costs no Stamina, and you gain {sprint_movement_speed:%s} Sprint Speed.

While the ability is active, reloading your weapon does not reduce your Ammo Reserve.

Base Cooldown: {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_broker_ability_focus` | Localized string: `Desperado` |
| `duration` | `talent_settings.combat_ability.focus.duration = 10` | Number: `10` |
| `sprint_movement_speed` | `talent_settings.combat_ability.focus.sprint_movement_speed = 0.20` | Percentage with `+`: `+20%` |
| `cooldown` | `talent_settings.combat_ability.focus.cooldown = 45` | Number: `45` |

The necessary display mapping is `broker_talents.lua` L76-L103; values reuse the accepted `talent_settings_broker.lua` L117-L141 evidence. Formatting reuses the accepted number, percentage and localized-string rules.

Static reconstruction; not an observed game screen:

~~~text
Swaps to and reloads your Ranged Weapon, entering Desperado for 10s. For the duration, you count as Dodging against Ranged Attacks, Sprinting costs no Stamina, and you gain +20% Sprint Speed.

While the ability is active, reloading your weapon does not reduce your Ammo Reserve.

Base Cooldown: 45s.
~~~

## English comparison

The independently read English specifies switching to and reloading the Ranged Weapon, a 10-second stance, counting as Dodging against Ranged Attacks, free Sprinting, +20% Sprint Speed, reserve-free reloading while active and a 45-second base cooldown. These match the accepted base-ability evidence. The text does not specify cooldown pausing, Toughness restoration, Suppression immunity, end-of-effect ammo reconciliation or the absence of improved kill effects; these supplement it rather than contradict it.
