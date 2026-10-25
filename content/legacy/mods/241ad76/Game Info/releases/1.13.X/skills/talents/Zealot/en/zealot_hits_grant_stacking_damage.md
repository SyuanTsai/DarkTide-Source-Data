# Sustained Assault: source evidence

[繁體中文](../zealot_hits_grant_stacking_damage.md) | [Player description](README.md#zealot_hits_grant_stacking_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_hits_grant_stacking_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_hits_grant_stacking_damage`; name key `loc_talent_zealot_increased_damage_stacks_on_hit`; description key `loc_talent_zealot_increased_damage_stacks_on_hit_desc`. Node `node_18bd9f66-02ab-4d6b-93ef-c860bbdf62e4`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit` enters `on_melee_hit` with probability 1 when `attack_type==melee`, then applies the effect. Its `duration=5`, `max_stacks=5`, `refresh_duration_on_stack=true`, and `melee_damage=.04` per stack. Bonuses add in the same calculation stage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3863-L3901](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3863-L3901)
- [scripts/settings/talent/talent_settings_zealot.lua — L410-L416](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L410-L416)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L368-L370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L370)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1733-L1757](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1733-L1757)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L152-L178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L152-L178)

## Example assumptions and limits

- **Stacks and refresh**: Each Melee hit on an enemy adds one stack of 4% Melee Damage, up to 5 stacks and 20%. Lasts 5 seconds; further hits reset the duration, including at full stacks.
- **Damage example**: With no other bonuses, 3 stacks give 100 × (1 + 3 × 4%) = 112, or 120 at full stacks. With an existing same-stage 25% bonus, full stacks give 100 × (1 + 25% + 20%) = 145.

- The accepted Chinese comparison at hash `fa8c449f` finds no explicit effect-direction contradiction for the same description key/hash. Unlisted formulas, caps and finer restrictions are supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_increased_damage_stacks_on_hit`, hash `ce6fa468`, entry 13351: **Sustained Assault**.
- Description key `loc_talent_zealot_increased_damage_stacks_on_hit_desc`, hash `fa8c449f`, entry 16263.

Full raw template:

~~~text
{damage:%s} Melee Damage for {time:%s}s on Hitting an Enemy with a Melee Attack. Stacks {amount:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.04 → +4% | `percentage`, `+` prefix; `talent_settings_2.offensive_2_2.melee_damage` |
| `time` | 5 | `number`; corresponding `duration` |
| `amount` | 5 | `number`; corresponding `max_stacks` |

The minimal display mapping at `zealot_talents.lua` L1733-L1752 supplies the accepted per-stack damage, duration and stack cap.

Static reconstruction; not an observed game screen:

~~~text
+4% Melee Damage for 5s on Hitting an Enemy with a Melee Attack. Stacks 5 times.
~~~

## English comparison

The English explicitly requires a Melee hit on an enemy and gives +4% Melee Damage for 5 seconds, stacking five times. These triggers and values match the accepted effect. Duration refresh at full stacks and same-stage additive calculation, including the original 100→112/120/145 examples, supplement the text; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_hits_grant_stacking_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/9e5a26dc-8d4f-4c94-9dcd-fdc807cc1d48). The icon identifies the talent; it is not mechanism evidence.
