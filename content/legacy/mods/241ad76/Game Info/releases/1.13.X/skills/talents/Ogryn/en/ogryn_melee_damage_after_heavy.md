# Beat Them Back: source evidence

[繁體中文](../ogryn_melee_damage_after_heavy.md) | [Player description](README.md#ogryn_melee_damage_after_heavy) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_melee_damage_after_heavy)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_melee_damage_after_heavy`; name key `loc_talent_ogryn_melee_damage_after_heavy_name`; description key `loc_talent_ogryn_melee_damage_after_heavy_desc`. Node `node_61ced339-890a-4513-942d-0a003e0b1217`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `sweep_finish` requires `num_hit_units > 0` and `is_heavy`. The effect has active duration 5s, `melee_damage=0.15` and `allow_proc_while_active`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2881-L2913](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2881-L2913)
- [scripts/settings/talent/talent_settings_ogryn.lua — L87-L90](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L87-L90)
- [scripts/utilities/attack/damage_calculation.lua — L278-L300](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L300)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2249-L2268](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2249-L2268)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1799-L1821](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1799-L1821)

## Example assumptions and limits

- **Trigger**: A heavy melee attack hitting at least one enemy grants +15% melee damage after its sweep finishes, lasting 5s. The triggering heavy attack does not retroactively receive the bonus.

- **Stacks and refresh**: Another heavy hit refreshes the duration. Hitting multiple enemies does not increase the percentage; ordinary melee attacks during the active period also benefit.

- **Damage example**: Base damage of 100 becomes 115. With another +20% at the same stage, it becomes `100 × (1 + 20% + 15%) = 135`.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_melee_damage_after_heavy_name`, hash `438287c2`, entry 4368: **Beat Them Back**.
- Description key `loc_talent_ogryn_melee_damage_after_heavy_desc`, hash `ee301680`, entry 15487.

Full raw template:

~~~text
{melee_damage:%s} Melee Damage on Successful Heavy Melee Attack. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| melee_damage | shared melee_damage_modifier = 0.15 | Percentage with explicit + prefix → +15% |
| duration | shared duration = 5 | Number → 5 |

Only the missing display mapping in the cited talent definition, lines 2249–2268, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+15% Melee Damage on Successful Heavy Melee Attack. Lasts 5s.
~~~

## English comparison

The independently read English grants +15% melee damage on a successful heavy melee attack for 5s, matching the accepted trigger and values. It does not state that the triggering hit itself receives the bonus. Activation after sweep completion, refresh without percentage stacking, benefits to ordinary melee attacks and additive calculation supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_melee_damage_after_heavy.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/373afc07-72d5-4815-91c0-0e5d0d02d279). The icon identifies the talent; it is not mechanism evidence.
