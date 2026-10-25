# Breaking Dissent: source evidence

[繁體中文](../adamant_damage_vs_staggered_aura.md) | [Player description](README.md#adamant_damage_vs_staggered_aura) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_damage_vs_staggered_aura)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_damage_vs_staggered_aura`; node `node_6857741a-5da7-40c1-871b-4b62f91a52ea`; category Aura; one point.

## Source-confirmed behavior and static derivation

- The talent installs coherency buff `adamant_damage_vs_staggered_aura`. The talent setting `damage_vs_staggered = 0.1` is written to `stat_buffs.damage_vs_staggered`.
- When `target_is_staggered` is true, `damage_calculation` reads the attacker's `damage_vs_staggered` stat, subtracts 1 and adds the difference to `damage_stat_buffs`. The stat is defined as an `additive_multiplier`. With no other damage modifiers, base damage 100 gives `100 × 1.1 = 110`.
- This node selects the `adamant_no_companion_coherency` special rule. Without the dog-counts rule, `companion_coherency_extension` disables the Cyber-Mastiff's Coherency membership.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L697-L721](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L697-L721)
- [scripts/settings/talent/talent_settings_adamant.lua — L53-L66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L53-L66)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L565-L582](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L565-L582)
- [scripts/settings/buff/buff_settings.lua — L794-L794](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L794-L794)
- [scripts/utilities/attack/damage_calculation.lua — L440-L451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L440-L451)
- [scripts/extension_systems/coherency/companion_coherency_extension.lua — L1-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/companion_coherency_extension.lua#L1-L34)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L697-L721](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L697-L721)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L267-L293](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L267-L293)

## Example assumptions and limits

- **Condition**: The target must be Staggered. You and Allies in Coherency deal an additional 10% damage to that target.

- **Damage example**: Isolating this aura, a hit that normally deals 100 damage to a Staggered enemy becomes `100 × (1 + 0.10) = 110 damage`. Against an enemy that is not Staggered, it remains 100. With an existing 25% bonus in the same stage, a qualifying hit becomes `100 × (1 + 25% + 10%) = 135 damage`.

- **Coherency condition**: Selecting this aura means your Cyber-Mastiff no longer counts towards unit Coherency. Allies still need to satisfy the usual Coherency conditions to receive the bonus.

The damage condition is the target's Staggered state; it is not limited to targets that begin Staggering immediately before the hit. In-game state duration and other damage modifiers affect actual output. The additional 10% is an additive damage term: combine same-stage bonuses according to the damage calculation rather than multiplying every percentage in sequence. Examples are static derivations; game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_damage_vs_staggered_aura`, hash `66408e93`, entry 6651: **Breaking Dissent**.
- Description key `loc_talent_adamant_damage_vs_staggered_aura_alt_desc`, hash `a99d089f`, entry 10937. The [Writer] suffix is resource metadata, not player-facing text.

Full raw template:

```text
You and Allies in Coherency deal additional {damage_vs_stagger:%s} Damage vs Staggered.
```

The `damage_vs_stagger` display mapping uses percentage formatting and a `+` prefix for `talent_settings.coherency.adamant_damage_vs_staggered_aura.damage_vs_staggered`. Existing evidence supplies 0.1; shared formatting gives **+10%**.

| Placeholder | Value | Formatting |
|---|---|---|
| damage_vs_stagger | 0.1 | Percentage × 100 with `+` prefix → +10% |

Static reconstruction; not an observed game screen:

```text
You and Allies in Coherency deal additional +10% Damage vs Staggered.
```

## English comparison limits

The independently read English matches the recipients, Staggered condition and damage value. Its omitted arithmetic and Cyber-Mastiff Coherency change are supplementary; no explicit English contradiction is established. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/aura/adamant_damage_vs_staggered_aura.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/57af1e74-7cc5-45bb-a332-11d2e5fde909). The icon identifies the talent; it is not mechanism evidence.
