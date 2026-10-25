# Blinded by Blood: source evidence

[繁體中文](../zealot_bled_enemies_take_more_damage.md) | [Player description](README.md#zealot_bled_enemies_take_more_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_bled_enemies_take_more_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_bled_enemies_take_more_damage`; name key `loc_talent_zealot_bled_enemies_take_more_damage`; description key `loc_talent_zealot_bled_enemies_take_more_damage_desc`. Node `node_3f11f576-443e-42b0-b6f9-cedcafb6a224`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Listens to `on_buff_added`, `on_buff_stack_added` and `on_max_stack_refresh_buff`. `CheckProcFunctions` requires `template_name == bleed`, then checks `side_system:is_enemy`.
- The single-stack effect lasts 5 seconds, refreshes its duration and applies `damage_taken_multiplier = 1.15`. This is the target's damage-taken stage, not addition to the attacker's `damage` bonus.
- `BuffExtensionBase` sends the event to self and `additional_arguments.owner_unit`; when Scourge adds Bleed, `owner_unit` is the applier. This uses your Bleed events rather than automatically applying vulnerability to every bleeding enemy in the mission.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2191-L2235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2191-L2235)
- [scripts/settings/talent/talent_settings_zealot.lua — L70-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L70-L74)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L748-L750](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L748-L750)
- [scripts/utilities/attack/damage_calculation.lua — L590-L610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/extension_systems/buff/buff_extension_base.lua — L1346-L1372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L1346-L1372)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2050-L2073](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2050-L2073)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1646-L1671](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1646-L1671)

## Example assumptions and limits

- **Operation**: Applying Bleed to an enemy, adding a Bleed stack or refreshing its duration makes that enemy take 15% more damage for 5 seconds. Allies damaging the same enemy also benefit.
- **Duration**: The vulnerability does not gain more stacks. Applying Bleed again restarts its timer; merely seeing an already-bleeding enemy does not automatically apply it.
- **Damage example**: An enemy taking 100 damage instead takes 100 × 1.15 = 115. With your separate-stage 20% damage bonus first, the result is 100 × 1.2 × 1.15 = 138.

- Event receipt depends on the applying source's Buff-event dispatch. Do not generalize this to automatic triggering from any ally's Bleed anywhere in the mission.
- The accepted Chinese comparison at hash `fb00baf2` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_bled_enemies_take_more_damage`, hash `79b878e0`, entry 7912: **Blinded by Blood**.
- Description key `loc_talent_zealot_bled_enemies_take_more_damage_desc`, hash `fb00baf2`, entry 16298.

Full raw template:

~~~text
Bleeding enemies increase their damage taken by {damage_taken:%s} for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_taken` | 1.15 → round((1.15 − 1) × 100) = 15 → +15% | `percentage`, prefix `+`, explicit manipulation; `talent_settings.zealot_bled_enemies_take_more_damage.damage_taken_multiplier` |
| `duration` | 5 → 5 | `number`; `talent_settings.zealot_bled_enemies_take_more_damage.duration` |

The minimal display mapping at `zealot_talents.lua` L2050-L2073 supplies the accepted vulnerability and duration. Reuse the known formatter behavior: explicit manipulation supplies the display number without another multiplication by 100.

Static reconstruction; not an observed game screen:

~~~text
Bleeding enemies increase their damage taken by +15% for 5s.
~~~

## English comparison

The English puts +15% on the enemy's damage taken for 5 seconds, agreeing with the target-stage vulnerability. It does not identify the event owner or explicitly claim automatic application to all Bleed from any source. Your application/stack/refresh events, enemy check, single-stack refresh and benefit to allies supplement the wording. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_bled_enemies_take_more_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/4b9e6b94-1960-44a0-aca5-40446806c270). The icon identifies the talent; it is not mechanism evidence.
