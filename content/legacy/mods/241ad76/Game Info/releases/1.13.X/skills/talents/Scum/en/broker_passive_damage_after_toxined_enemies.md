# Toxin Mania: source evidence

[繁體中文](../broker_passive_damage_after_toxined_enemies.md) | [Player description](README.md#broker_passive_damage_after_toxined_enemies) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_damage_after_toxined_enemies)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_damage_after_toxined_enemies`; name key `loc_talent_broker_damage_after_toxined_enemies`; description key `loc_talent_broker_damage_after_toxined_enemies_desc`. Node `node_45324e02-771e-4f7d-8743-d306bcf106d2`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Every 0.2s, a `broadphase` query uses `range = DamageSettings.ranged_close`. It checks only the enemy's `toxin` keyword, not the owner. The stat multiplier clamps the enemy count to 0–3, with `damage = 0.05` per enemy.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L233-L244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L233-L244)
- [scripts/settings/damage/damage_settings.lua — L18-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)
- [scripts/settings/talent/talent_settings_broker.lua — L390-L395](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L390-L395)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2567-L2643](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2567-L2643)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2057-L2081](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2057-L2081)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1196-L1222](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1196-L1222)

## Example assumptions and limits

- **Calculation**: Each enemy infected with Chem Toxin within 12.5m grants 5% Damage, reaching the 15% cap at three enemies. You do not need to have applied the Toxin yourself. The bonus drops as enemies leave the area or lose Toxin.

- **Damage example**: Two infected enemies nearby grant 10% Damage, taking base 100 to 110. With another 25% bonus at the same stage, 100 × (1 + 25% + 10%) = 135.

The original Chinese comparison records the nearby infected-enemy count as matching the English; the exact distance and unrestricted Toxin source are supplementary. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_damage_after_toxined_enemies`, hash `3cc33c95`, entry 3965: **Toxin Mania**.
- Description key `loc_talent_broker_damage_after_toxined_enemies_desc`, hash `f70dc769`, entry 16051.

Full raw template:

~~~text
{damage:%s} Base Damage for each {toxin:%s} infected enemy nearby. Up to {damage_max:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{damage:%s}` | `damage_per_stack = 0.05` | `percentage`, `+` prefix → `+5%` |
| `{damage_max:%s}` | `max_increase = 0.15` | `percentage`, `+` prefix → `+15%` |
| `{toxin:%s}` | `loc_term_glossary_broker_toxin` | `loc_string` → `Chem Toxin` |

The existing display map at `broker_talents.lua` L2057-L2081 uses the verified per-enemy bonus and cap. The reused glossary resolves `Chem Toxin` (hash `5ea7edc3`, entry 6134), and the verified percentage formatter displays +5%/+15%.

Static reconstruction; not an observed game screen:

~~~text
+5% Base Damage for each Chem Toxin infected enemy nearby. Up to +15%.
~~~

## English comparison

The English gives +5% per nearby infected enemy and a +15% cap, matching the verified count-based general Damage bonus. The exact 12.5m query, 0.2s updates, unrestricted Toxin ownership and same-stage additive calculation supplement its “nearby” wording.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_damage_after_toxined_enemies.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/06abfebe-3a5e-421b-b71a-35e5faee2767). The icon identifies the talent; it is not mechanism evidence.
