# Fire Team: source evidence

[繁體中文](../veteran_increased_damage_coherency.md) | [Player description](README.md#veteran_increased_damage_coherency) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_damage_coherency)

## Identity and aura behavior

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Aura node. [One-point Aura node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1173-L1198); [Fire Team definition and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L696-L720).
- Talent: `veteran_increased_damage_coherency`. Exact English name key `loc_talent_veteran_damage_coherency`, hash `75bd6576`: **Fire Team**. Actual description key `loc_talent_veteran_damage_coherency_desc`, hash `9a17fbd0`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- The `veteran_damage_coherency` aura gives its owner and Allies in Coherency `damage = 0.075`, or **+7.5% Damage**. The stat is added to other bonuses at the applicable damage stage. [Damage aura and one-stack limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L830-L847); [Additive damage-stat stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242); [Coherency aura selection and application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311); [Coherency membership including owner](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255).
- `max_stacks = 1` prevents identical Fire Team auras from adding another copy of the damage bonus. Two Veterans providing Fire Team do not grant +15% from this same aura. [Damage aura and one-stack limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L830-L847).
- The selected aura uses identifier `veteran_aura` and priority `2`, replacing the owner's priority-`1` base Scavenger aura. The same-version Scavenger name key is `loc_talent_veteran_elite_kills_grant_ammo_coop`, hash `b6f9523d`. This concerns the owner's selected aura; other recipients' or providers' effects remain separate. [Fire Team definition and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L696-L720); [Base Scavenger aura priority](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L646-L666); [Coherency aura selection and application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311).

## Damage-stage examples

Fix the input to the affected damage stage at 100 units. Hold armor, hit zone and all other stages/modifiers unchanged; isolate the named bonuses. These are static calculations, not game measurements. [Damage aura and one-stack limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L830-L847); [Additive damage-stat stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| No other bonus at this damage stage | `100 × (1 + 0.075) = 107.5 damage units`. | Fire Team adds 7.5 units relative to the 100-unit stage result. |
| Existing additive bonus of 25% at the same stage | Before: `100 × 1.25 = 125`; after: `100 × (1 + 0.25 + 0.075) = 132.5 damage units`. Relative change: `7.5 ÷ 125 = 6%`. | The new bonus is +7.5 percentage points of the base multiplier, a 6% increase over this already-bonused result. |
| Two identical Fire Team auras, no other same-stage bonus | One effective copy: `100 × (1 + 0.075) = 107.5 damage units`. | The same aura does not double to `100 × 1.15 = 115`. |

## Original English template and reconstruction

Full raw template, hash `9a17fbd0`:

```text
{damage:%s} Damage for you and Allies in Coherency.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `damage` | Raw `veteran_damage_coherency.stat_buffs.damage = 0.075`; percentage formatter and `+` prefix | `+7.5%` |

[Fire Team definition and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L696-L720); [Damage aura and one-stack limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L830-L847); [Raw buff-template value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Parameter formatting with outer configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+7.5% Damage for you and Allies in Coherency.
```

Runtime color markup is excluded; this is not an observed game screen. The original percentage and beneficiary wording agree with the established aura. Same-aura non-stacking, selected-aura replacement and additive examples supplement the description. No English erratum is supported.

## Limits

Actual Coherency transitions, aura update timing, multi-provider interactions and final game UI have not been measured in game. Examples hold other damage stages fixed and do not claim every hit gains 7.5% relative to its existing final result.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/aura/veteran_increased_damage_coherency.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/9a3da9ac-d8f1-4745-9af6-25852f52834a)

The icon identifies the talent; it is not mechanism evidence.
