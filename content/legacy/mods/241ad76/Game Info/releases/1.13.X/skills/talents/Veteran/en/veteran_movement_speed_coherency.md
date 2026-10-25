# Close and Kill: source evidence

[繁體中文](../veteran_movement_speed_coherency.md) | [Player description](README.md#veteran_movement_speed_coherency) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_movement_speed_coherency)

## Identity and aura behavior

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Aura talent `veteran_movement_speed_coherency`. [One-point Aura node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L409-L435); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L721-L745).
- Exact English name key `loc_talent_veteran_movement_speed_coherency`, hash `1dd7c30c`: **Close and Kill**. Description key `loc_talent_veteran_movement_speed_coherency_desc`, hash `8234f832`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- The aura adds `movement_speed = 0.075`, giving **+7.5% Movement Speed** to its owner and Allies in Coherency. It changes speed rather than directly subtracting 7.5% from travel time. [Movement aura and one-copy limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L878-L895); [Walking-speed stat application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua#L109-L116); [Coherency aura selection and application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311); [Coherency membership including owner](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255).
- `max_stacks = 1` prevents identical Close and Kill auras from adding a second +7.5% copy. [Movement aura and one-copy limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L878-L895).
- Its `veteran_aura` identifier uses priority `2`, replacing the owner's priority-`1` **Scavenger** aura. Scavenger's exact name key is `loc_talent_veteran_elite_kills_grant_ammo_coop`, hash `b6f9523d`. This selection rule concerns the owner's aura. [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L721-L745); [Base Scavenger aura priority](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L646-L666); [Coherency aura selection and application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311).

## Movement examples

Assume a 5 m/s base speed, no other movement-speed bonus, a fixed movement state and a straight unobstructed path. These static examples isolate this aura and exclude acceleration and other movement effects. [Movement aura and one-copy limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L878-L895); [Walking-speed stat application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua#L109-L116).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| One effective aura | `5 × (1 + 0.075) = 5.375 m/s`. | Speed rises by 0.375 m/s, or 7.5% of the stated base speed. |
| Fixed 5m distance under the same conditions | Before: `5 ÷ 5 = 1s`; after: `5 ÷ 5.375 ≈ 0.9302s`. Time reduction: `(1 − 1 ÷ 1.075) × 100 ≈ 6.98%`. | A 7.5% speed increase gives about 6.98% less travel time in this isolated example. |
| Two identical Close and Kill providers | One effective copy still gives `5 × 1.075 = 5.375 m/s`. | The same aura does not double to `5 × 1.15 = 5.75 m/s`. |

## Original English template and reconstruction

Full raw template, hash `8234f832`:

```text
{movement_speed:%s} Movement Speed for you and Allies in Coherency.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `movement_speed` | Raw aura `stat_buffs.movement_speed = 0.075`; percentage formatter and `+` prefix | `+7.5%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L721-L745); [Movement aura and one-copy limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L878-L895); [Raw buff-template value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Outer parameter formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+7.5% Movement Speed for you and Allies in Coherency.
```

Runtime color markup is excluded; this is not an observed game screen. The percentage and beneficiaries agree with the established mechanism. Non-stacking, aura replacement and travel-time conversion supplement the description; no English erratum is supported.

## Limits

Actual movement-state interactions, Coherency transitions, aura update timing and final game UI have not been measured in game. The examples do not promise a fixed travel-time reduction across obstacles, acceleration or other speed modifiers.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/aura/veteran_movement_speed_coherency.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/f8c278c8-72a1-476c-93d1-6656268ba8e4)

The icon identifies the talent; it is not mechanism evidence.
