# Ruffian: source evidence

[繁體中文](../broker_coherency_melee_damage.md) | [Player description](README.md#broker_coherency_melee_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_coherency_melee_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_coherency_melee_damage`; name key `loc_talent_broker_aura_ruffian`; description key `loc_talent_broker_aura_ruffian_desc`. Node `node_5717014d-0da6-4d49-b43b-3c9233e6fb37`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Ruffian provides `melee_damage = 0.1`, with `max_stacks = 1` and duplicate removal by `coherency_id`. The bonus adds within the general `damage_stat_buffs` stage.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_broker.lua — L206-L214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L206-L214)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L260-L309](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L260-L309)
- [scripts/utilities/attack/damage_calculation.lua — L293-L305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L293-L305)
- [scripts/settings/talent/talent_settings_broker.lua — L206-L215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L206-L215)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L864-L878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L864-L878)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L803-L820](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L803-L820)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L380-L406](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L380-L406)

## Example assumptions and limits

- **Recipients:** you and allies in Coherency gain 10% Melee Damage. Only one copy of the same Aura applies.

- **Damage example:** base Melee Damage of 100 becomes 110. With another 25% bonus in the same stage, 100 × (1 + 25% + 10%) = 135.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_aura_ruffian`, hash `3b445793`, entry 3855: **Ruffian**.
- Description key `loc_talent_broker_aura_ruffian_desc`, hash `a241f5b9`, entry 10481.

Full raw template:

~~~text
{melee_damage:%s} Melee Damage for you and Allies in Coherency.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `melee_damage` | `talent_settings.coherency.ruffian.melee_damage = 0.1` | Percentage with explicit plus prefix → `+10%` |

Display mapping: [broker_talents.lua L808–814](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L808-L814). The accepted value and shared percentage formatter are reused.

Static reconstruction; not an observed game screen:

~~~text
+10% Melee Damage for you and Allies in Coherency.
~~~

## English comparison

The English +10% Melee Damage for you and Allies in Coherency agrees with the existing evidence. Deduplication and addition with other bonuses in the same stage are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/aura/broker_coherency_melee_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/7fc85ba0-f7e6-4aba-a966-638511f2c713). The icon identifies the talent; it is not mechanism evidence.
