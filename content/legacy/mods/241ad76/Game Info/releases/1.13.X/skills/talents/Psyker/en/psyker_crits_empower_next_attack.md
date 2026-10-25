# Perfect Timing: source evidence

[繁體中文](../psyker_crits_empower_next_attack.md) | [Player description](README.md#psyker_crits_empower_next_attack) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_crits_empower_next_attack)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_crits_empower_next_attack`; name key `loc_talent_psyker_crits_empower_next_attack`; description key `loc_talent_psyker_damage_on_crit_stacking_desc`. Node `node_70bf8f4f-c0be-4c83-9c62-4b47ef5e3300`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_critical_strike` sets a flag, and `on_hit` uses `specific_proc_func` to add a Buff with `damage = 0.03`.
- It has `max_stacks = 5`, `duration = 10` and `refresh_duration_on_stack = true`. The generic `damage` stat participates in the additive damage-bonus stage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2929-L2975](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2929-L2975)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1192-L1235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1192-L1235)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L203-L231](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L203-L231)

## Example assumptions and limits

- **Effect**: after a Critical Hit, gain 1 Damage stack. Each stack adds 3% Damage, up to 5 stacks.

- **Stacks and refresh**: the effect lasts 10 seconds, and triggering it again resets the duration. At full stacks, Damage increases by 15%.

- **Damage example**: compare only this damage-bonus stage, with all other multipliers fixed at 1. With a baseline of 100 points and no other bonus, 100 × (1 + 15%) = 115 points. With an existing 25% bonus in the same stage, Damage rises from 125 to 100 × (1 + 25% + 15%) = 140 points.

The `on_hit` entry has `params.is_critical_strike`, but the actual `specific_proc_func` checks `template_data.crit` or `template_context.is_critical_strike`. Whether special hits directly marked as critical all receive the corresponding event still requires weapon-by-weapon in-game testing; this evidence does not guarantee a separate stack for every critical projectile. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_crits_empower_next_attack`, hash `dc8ee87d`, entry 14299: **Perfect Timing**.
- Description key `loc_talent_psyker_damage_on_crit_stacking_desc`, hash `62b2dfb3`, entry 6411.

Full raw template:

~~~text
{damage:%s} Damage for {duration:%s}s on Critical Attack. Stacks {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.03` | percentage, `+` prefix → `+3%` |
| `duration` | `10` | number → `10` |
| `stacks` | `5` | number → `5` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1197-L1228) obtains the Buff's verified damage, duration and stack cap. Existing verified values and shared number/percentage formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
+3% Damage for 10s on Critical Attack. Stacks 5 times.
~~~

## English comparison

The English Damage amount, duration and stack cap agree with the verified effect. Its broad Critical Attack wording does not describe the hit-event flag check, timer refresh or additive damage stage. The uncertainty about special hits and individual projectiles is retained without treating an unverified case as an English erratum.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_crits_empower_next_attack.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/3c19e5ea-ccab-46a3-9763-c8d4075c6332). The icon identifies the talent; it is not mechanism evidence.
