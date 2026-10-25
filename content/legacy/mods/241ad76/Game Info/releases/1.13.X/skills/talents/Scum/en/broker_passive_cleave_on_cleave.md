# Battering Momentum: source evidence

[繁體中文](../broker_passive_cleave_on_cleave.md) | [Player description](README.md#broker_passive_cleave_on_cleave) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_cleave_on_cleave)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_cleave_on_cleave`; name key `loc_talent_broker_passive_cleave_on_cleave`; description key `loc_talent_broker_passive_cleave_on_cleave_desc`. Node `node_32ac314d-2d6e-421b-8ced-27ce00dc62e5`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- On `on_melee_hit`, grant the child Buff when `target_number >= 3` and `procced` is false. A `target_number < 3` resets `procced`.
- The child gives `max_hit_mass_attack_modifier = 0.5` and `max_hit_mass_impact_modifier = 0.5`. It uses `remove_on_proc` on `on_hit` when `target_number < 3`. This consumption check is not restricted to Melee. When the same cleaving attack reads these values depends on attack processing; do not guarantee that its later hits cannot already benefit.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2296-L2310](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2296-L2310)
- [scripts/utilities/attack/damage_profile.lua — L42-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L42-L64)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2276-L2295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2276-L2295)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1864-L1896](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1864-L1896)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L2168-L2195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2168-L2195)

## Example assumptions and limits

- **Trigger**: Hitting the third enemy with the same Melee Attack grants 50% Damage Cleave and Stagger Cleave. It is consumed when the next attack starts hitting; reaching three enemies again can grant it again.

- **Cleave example**: Damage Cleave capacity 10 and Stagger Cleave capacity 8 become 10 × 1.5 = 15 and 8 × 1.5 = 12. Actual enemies hit still depend on enemy mass and weapon limits.

- **Duration limit**: There is no fixed countdown in seconds. Subsequent hits consume this effect; it does not continuously increase every attack's damage.

Whether later hits of the same attack already read the new bonus, and when different weapons sample Cleave, remain untested in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_cleave_on_cleave`, hash `66764aec`, entry 6662: **Battering Momentum**.
- Description key `loc_talent_broker_passive_cleave_on_cleave_desc`, hash `04b9c8f2`, entry 287.

Full raw template:

~~~text
Hitting {min_targets:%s} or more Enemies with a single Melee Attack grants {multiplier:%s} Cleave for your next Attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `min_targets` | `min_targets = 3` | Number: `3` |
| `multiplier` | Child `stat_buffs.max_hit_mass_attack_modifier = 0.5` | Percentage with `+` prefix: `+50%` |

The accepted trigger and child values supply the substitutions. The display mapping at `broker_talents.lua` L1864-L1896 reads `min_targets` and the child's Damage Cleave modifier. Reuse the accepted number and percentage formatting.

Static reconstruction; not an observed game screen:

~~~text
Hitting 3 or more Enemies with a single Melee Attack grants +50% Cleave for your next Attack.
~~~

## English comparison

The English's single Melee Attack, three-target threshold and 50% Cleave bonus agree with the accepted evidence. Subsequent-hit consumption is supplementary. The phrase "for your next Attack" describes the intended use, but does not resolve whether later hits of the triggering attack already benefit; preserve the existing untested timing caveat rather than infer a clear contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_cleave_on_cleave.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/6fa27fb0-2d79-43fc-b74a-d64da58773f6). The icon identifies the talent; it is not mechanism evidence.
