# Keeping Protocol: source evidence

[繁體中文](../adamant_execution_order_permastack.md) | [Player description](README.md#adamant_execution_order_permastack) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_execution_order_permastack)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_execution_order_permastack`; node `node_d6d7d5c6-b681-41e1-b6c1-05e35ebb9715`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- Each Marked Kill adds `adamant_execution_order_permastack`. The template has `max_stacks = 30` and no short duration. Each stack supplies `damage_vs_monsters = 0.01` and `monster_damage_taken_multiplier = 0.99`.
- Shared damage calculation adds `damage_vs_monsters` for `tags.monster` targets and reads the victim's `monster_damage_taken_multiplier` when a monster attacks. The latter is a `multiplicative_multiplier` stat, multiplied once per stack according to `stack_count`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2211-L2238](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2211-L2238)
- [scripts/settings/talent/talent_settings_adamant.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L102-L119)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L958-L977](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L958-L977)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1184-L1198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1184-L1198)
- [scripts/settings/buff/buff_settings.lua — L892-L895](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L892-L895)
- [scripts/extension_systems/buff/buffs/buff.lua — L397-L410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L410)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/attack/damage_calculation.lua — L400-L413](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L400-L413)
- [scripts/utilities/attack/damage_calculation.lua — L587-L610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L610)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2211-L2238](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2211-L2238)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1803-L1826](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1803-L1826)

## Example assumptions and limits

- **Accumulation and removal**: Each Marked Kill adds one stack, up to 30. The effect lasts until the end of the mission.

- **Maximum-stack example**: At 30 stacks, gain +30% Damage against Monstrosities. Damage taken from them has multiplier 0.99^30 ≈ 0.740, about a 26.0% reduction with this effect alone. For example, base damage of 100 against a Monstrosity becomes 130; incoming damage of 100 from one becomes about 73.97.

Thirty Marked Kills grant an outgoing attack stat of +30% against `tags.monster` targets. If a monster originally deals 100 damage and no other modifier is included, `0.99^30` gives about 74.0 incoming damage.

Affected enemies follow the breed's monster tag. Whether this covers exactly the same set as the game's Monstrosities category remains unconfirmed in the existing evidence. The player-facing category is retained while this technical boundary is recorded separately.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_execution_order_perma_buff`, hash `7222d71d`, entry 7421: **Keeping Protocol**. The `[Writer]` suffix is resource metadata.
- Description key `loc_talent_execution_order_perma_buff_new_description`, hash `aaa5ea87`, entry 11000.

Full raw template:

```text
Killing a Marked Enemy grants {damage:%s} Damage vs Monstrosities and {damage_red:%s} Damage Resistance vs Monstrosities. {max_stacks:%s} Max Stacks. Lasts until the end of the Mission.
```

The display maps the placeholders to the corresponding `talent_settings.execution_order` values below. Explicit value manipulation supplies the displayed resistance percentage instead of the default percentage conversion. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| damage | damage_vs_monsters = 0.01 | Percentage with + prefix → +1% |
| damage_red | damage_taken_vs_monsters = 0.99 | Explicit (1 − value) × 100 with + prefix → +1% |
| max_stacks | perma_max_stack = 30 | Number → 30 |

Static reconstruction; not an observed game screen:

```text
Killing a Marked Enemy grants +1% Damage vs Monstrosities and +1% Damage Resistance vs Monstrosities. 30 Max Stacks. Lasts until the end of the Mission.
```

## English comparison limits

The independently read English matches the Marked Kill trigger, both per-stack values, 30-stack cap and accepted mission-long persistence. Aggregation and numerical examples are supplementary. Exact equivalence between the English Monstrosities category and code monster tags cannot be confirmed from existing evidence. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_execution_order_permastack.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/eeb40551-fbea-4de0-8e46-0a07e4bfcec6). The icon identifies the talent; it is not mechanism evidence.
