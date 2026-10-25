# A Tertium Welcome: source evidence

[繁體中文](../broker_passive_first_target_damage.md) | [Player description](README.md#broker_passive_first_target_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_first_target_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_first_target_damage`; name key `loc_talent_broker_passive_first_target_damage`; description key `loc_talent_broker_passive_first_target_damage_desc`. Node `node_546ca755-3d86-41f5-bfc3-01a388f9471a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The permanent `first_target_melee_damage_modifier = 0.15` enters the additive Damage calculation only when `damage_calculation` finds both `is_first_target` and `is_melee_attack` true. It has no stacks, duration, or cooldown.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L299-L305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L299-L305)
- [scripts/settings/talent/talent_settings_broker.lua — L220-L222](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L220-L222)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L983-L989](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L983-L989)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L859-L874](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L859-L874)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L36-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L36-L62)

## Example assumptions and limits

- **Affected target**: the first target hit by each Melee attack takes 15% more Damage. Later enemies cleaved by the same attack do not receive this bonus.
- **Damage example**: if base Damage to the first target is 100, this effect alone gives 100 × 1.15 = 115. With an existing 25% Damage bonus at the same stage, it gives 100 × (1 + 25% + 15%) = 140.

The Damage examples use the first target's base Damage and isolate this effect except where the existing 25% bonus at the same stage is explicitly included. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_first_target_damage`, hash `48e421bf`, entry 4732: **A Tertium Welcome**.
- Description key `loc_talent_broker_passive_first_target_damage_desc`, hash `4ebbdbb2`, entry 5125.

Full raw template:

~~~text
{damage:%s} Melee Damage on first Enemy hit with each attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{damage:%s}` | `talent_settings.broker_passive_first_target_damage.damage = 0.15` → `+15%` | `percentage`; prefix `+` |

The existing display mapping at `broker_talents.lua` L863-L869 reads the talent's `damage` setting. The verified value 0.15 is reused.

Static reconstruction; not an observed game screen:

~~~text
+15% Melee Damage on first Enemy hit with each attack.
~~~

## English comparison

The English explicitly limits +15% Melee Damage to the first Enemy hit by each attack, matching both accepted checks. It does not explain the additive stage or the absence of a timer, stack count, or cooldown; these are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_first_target_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/e5936fa1-2583-4575-a968-aa37e1096a16). The icon identifies the talent; it is not mechanism evidence.
