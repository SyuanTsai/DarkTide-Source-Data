# Ruthless Efficiency: source evidence

[繁體中文](../adamant_reload_speed_aura.md) | [Player description](README.md#adamant_reload_speed_aura) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_reload_speed_aura)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_reload_speed_aura`; node `node_d9c8ac91-9f39-43f5-9655-c836de0bb997`; category Aura; one point.

## Source-confirmed behavior and static derivation

- The talent provides the coherency buff `adamant_reload_speed_aura`. Its `stat_buffs.reload_speed` reads `talent_settings.coherency.reload_speed_aura.reload_speed = 0.125`, a +12.5% speed bonus. The aura has `coherency_priority = 2` and `max_stacks = 1`.
- This node uses the same special-rule identifier as the dog-counts node, but its actual rule is `adamant_no_companion_coherency`. `companion_coherency_extension` activates only when the owner has `adamant_dog_counts_towards_coherency`; this aura selection therefore removes the dog's Coherency membership.
- The 2s reload example converts speed to duration using `1 / (1 + 0.125)`. Actual weapon reload duration depends on action stages and other reload modifiers.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L672-L696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L672-L696)
- [scripts/settings/talent/talent_settings_adamant.lua — L63-L66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L63-L66)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L493-L534](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L493-L534)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L655-L658](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L655-L658)
- [scripts/extension_systems/coherency/companion_coherency_extension.lua — L1-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/companion_coherency_extension.lua#L1-L34)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L672-L696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L672-L696)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L64-L90](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L64-L90)

## Example assumptions and limits

- **Reload Speed**: You and Allies in Coherency gain an additional 12.5% Reload Speed. For a reload that normally takes 2s, isolating this effect gives `2 ÷ 1.125 ≈ 1.78s`.

- **Coherency condition**: Selecting this aura means your Cyber-Mastiff no longer counts towards unit Coherency. Allies still need to satisfy the usual Coherency conditions to receive the reload bonus.

The description gives Reload Speed to you and Allies in Coherency; it does not state that the Cyber-Mastiff receives a reload buff. The fixed-duration example illustrates a ratio and excludes weapon animation stages, action cancellation and other speed modifiers. Examples are static derivations; game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_wield_speed_aura`, hash `e2ac7225`, entry 14700: **Ruthless Efficiency**.
- Description key `loc_talent_adamant_reload_speed_aura_desc`, hash `79c674a1`, entry 7915. The [Writer] suffix is resource metadata, not player-facing text.

Full raw template:

```text
You and Allies in Coherency gain additional {reload_speed:%s} Reload Speed.
```

The display mapping uses percentage formatting with a `+` prefix for `talent_settings.coherency.reload_speed_aura.reload_speed`. Existing evidence supplies 0.125; shared formatting gives **+12.5%**.

| Placeholder | Value | Formatting |
|---|---|---|
| reload_speed | 0.125 | Percentage × 100 with `+` prefix → +12.5% |

Static reconstruction; not an observed game screen:

```text
You and Allies in Coherency gain additional +12.5% Reload Speed.
```

## English comparison limits

The independently read English matches the recipients and Reload Speed value. Its omitted duration example, application limits and Cyber-Mastiff Coherency change are supplementary; no explicit English contradiction is established. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/aura/adamant_reload_speed_aura.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/2f99cb20-a83e-4a7c-98ee-f43949811f84). The icon identifies the talent; it is not mechanism evidence.
