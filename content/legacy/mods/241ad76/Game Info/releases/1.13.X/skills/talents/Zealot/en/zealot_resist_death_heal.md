# Holy Revenant: source evidence

[繁體中文](../zealot_resist_death_heal.md) | [Player description](README.md#zealot_resist_death_heal) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_resist_death_heal)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_resist_death_heal`; name key `loc_talent_zealot_heal_during_resist_death`; description key `loc_talent_zealot_resist_death_heal_desc`. Node `node_18bc94af-2948-4b9a-84e8-5c9408b37343`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The current node attaches the passive `zealot_resist_death_leech` and the `zealot_resist_death_staggers` special rule. `on_damage_dealt` is processed only while the player has `unkillable`. Healing pool additions are `params.damage*0.007`, multiplied by 3 for Melee: 100 damage adds 0.7 Health for Ranged/other attacks or 2.1 Health for Melee.
- `heal_amount` starts at 0 when the passive starts, and qualifying damage accumulates it. At current Health ≥25% of maximum, no immediate healing occurs. Below that threshold, the requested heal is capped at `max_health*0.25-current_health` before `Health.add`. This limits resulting current Health to 25% before other healing modifiers, not cumulative healing. The pool is not deducted after healing.
- On a fatal trigger, the base Buff reads `zealot_resist_death_staggers` and creates a non-damaging knockback explosion at the player's position: radius 3.5 metres, damage profile `no_damage_knock`.
- Holy Revenant and Zealous Pilgrim share `exclusive_group=resist_death_1`; the two nodes are mutually exclusive.
- The 25% cap is applied before `Health.add` uses `healing_recieved_modifier`, so healing multipliers can produce a result above 25%. The main example assumes no other healing modifiers. `heal_amount` resets only in `start_func`, not on every proc or at each Unkillable period's end; each period cannot be treated as a fresh pool.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3346-L3380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3346-L3380)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3491-L3551](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3491-L3551)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4960-L5018](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4960-L5018)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L130-L146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L130-L146)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1270-L1295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1270-L1295)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1990-L2012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1990-L2012)
- [scripts/extension_systems/health/player_unit_health_extension.lua — L212-L251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L212-L251)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3346-L3380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3346-L3380)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1270-L1295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1270-L1295)

## Example assumptions and limits

- **Trigger effect**: When fatal damage activates Until Death, knock back enemies within 3.5 metres. Actual Stagger still depends on enemy resistance.
- **Health restoration**: While Unkillable, each damage event adds usable healing: 0.7% of ordinary damage, or 2.1% for Melee. Each qualifying damage event also heals again using the current accumulated pool; previously used amounts are not deducted.
- **Restoration example**: Assume an initial pool of 0 and no other healing modifiers. Two consecutive Melee hits dealing 100 each: the first adds and heals 100 × 0.7% × 3 = 2.1 Health; the second raises the pool to 4.2 and heals 4.2 again, giving 6.3 in total.
- **Cap**: Each requested heal can bring current Health only up to 25% of maximum before other healing multipliers. With maximum Health 100 and current Health 24, at most 1 is initially requested. Other healing multipliers apply afterwards; healing still cannot remove Corruption. This is not a whole-match limit of 25 Health.
- **Chinese original-text erratum**: The Chinese “healing equals 3 times Melee Damage” can be read as 100 damage healing 300 Health. In fact, the Melee conversion rate is 3 times the ordinary rate: 0.7% × 3 = 2.1%, then the accumulated pool and cap apply.

- Healing accumulates only while an `unkillable` keyword from any source exists. This upgrade is mutually exclusive with Zealous Pilgrim.
- The healing pool is not cleared after healing. The display's 25% field must not be treated as a per-effect or cumulative total-healing allowance.
- The accepted Chinese comparison at hash `7e66622d` records that English “times that amount” refers to healing amount, while the Chinese explicitly changes the multiplier's target to Melee Damage. The 25% cap interpretation is a mechanism supplement, not an error caused merely by omission.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_heal_during_resist_death`, hash `3a3afbf8`, entry 3774: **Holy Revenant**.
- Description key `loc_talent_zealot_resist_death_heal_desc`, hash `7e66622d`, entry 8209.

Full raw template:

~~~text
Triggering {talent_name:%s} knocks nearby enemies back. In addition, while Unkillable, you heal based on the Damage you deal up to a maximum of {max_health:%s} Max Health. Melee Damage dealt heals for {multiplier:%s} times that amount.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_zealot_resist_death`: Until Death | `loc_string`; hash `72493f76`, entry 7430 |
| `max_health` | 0.25 → 25% | `percentage`; `zealot_resist_death_subnodes.max_health` |
| `multiplier` | 3 | `number`; corresponding `melee_multiplier` |

The minimal display mapping at `zealot_talents.lua` L3346-L3375 supplies the name and accepted fields. Its `health` and `more_health` values are not placeholders in this English template and are not inserted.

Static reconstruction; not an observed game screen:

~~~text
Triggering Until Death knocks nearby enemies back. In addition, while Unkillable, you heal based on the Damage you deal up to a maximum of 25% Max Health. Melee Damage dealt heals for 3 times that amount.
~~~

## English comparison

Independently read, “Melee Damage dealt heals for 3 times that amount” compares the healing conversion with the ordinary damage-based healing amount; it does not say healing equals three times raw Melee Damage. The Unkillable condition, multiplier and 25% field match the accepted effects. The text does not explicitly define 25% as cumulative healing; current-Health capping before modifiers, the reusable pool, its reset lifetime, knockback resistance and mutually exclusive node are supplements. The Chinese multiplier-target correction remains separate.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_resist_death_heal.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/9f0fd090-59a4-4098-b4ed-c2bdfa7d1eab). The icon identifies the talent; it is not mechanism evidence.
