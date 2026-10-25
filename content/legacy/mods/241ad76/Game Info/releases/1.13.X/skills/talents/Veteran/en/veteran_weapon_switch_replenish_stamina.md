# Invigorated: source evidence

[繁體中文](../veteran_weapon_switch_replenish_stamina.md) | [Player description](README.md#veteran_weapon_switch_replenish_stamina) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_weapon_switch_replenish_stamina)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Weapons Specialist modifier `veteran_weapon_switch_replenish_stamina`; enables both replenish_stamina and stamina_reduction special rules. [One-point Keystone modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1888-L1912); [Modifier and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2827-L2872).
- Exact English name key `loc_talent_veteran_weapon_switch_replenish_stamina`, hash `4de41062`: **Invigorated**. Description key `loc_talent_veteran_weapon_switch_replenish_stamina_new_description`, hash `6ac67293`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- A stored Melee Specialist stack is required: switching to the melee weapon creates the melee buff once per stored melee stack; with zero stacks, the creation loop creates no buff. The activation consumes the stored melee stacks. [Melee activation and stack consumption](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3025-L3045); [Stored-stack buff creation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L415).
- On Melee Specialist startup, stamina recovery is 0.20 of maximum Stamina, limited by the remaining deficit. [Melee Specialist startup and stamina-cost buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3145-L3210); [Stamina.add_stamina_percent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L16-L24); [Maximum-Stamina limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L118).
- The separate stamina-cost buff lasts 3 seconds and applies stamina_cost_multiplier=0.75: an otherwise 2-point cost becomes 1.5 points when other modifiers are absent. It has max_stacks=1 and refresh_duration_on_stack=true; a new qualifying activation refreshes its duration instead of stacking another cost reduction. [Melee Specialist startup and stamina-cost buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3145-L3210).
- The stamina-cost buff remains until its own expiry even after switching away from the melee slot. A new qualifying activation restores stamina again and resets that buff's 3-second duration. [Melee Specialist startup and stamina-cost buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3145-L3210).

## Stamina recovery and cost examples

Assume a stored Melee Specialist stack and a qualifying switch to the melee weapon. Maximum Stamina is 6 points; no other stamina-cost modifier applies. The examples show static recovery and action-cost calculations, not gameplay measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Maximum 6 points; current 3 points | Requested recovery `6 × 0.20 = 1.2 points`; resulting Stamina `3 + 1.2 = 4.2 points`. | The effect restores 1.2 points, using maximum Stamina as the basis. |
| Maximum 6 points; current 5.5 points | Deficit `6 − 5.5 = 0.5 points`; actual recovery `min(1.2, 0.5) = 0.5 points`; result `6 points`. | Recovery stops at the maximum; the unused 0.7 requested points are not added above the cap. |
| Otherwise 2-point action cost; buff active; other cost factors 1 | Cost `2 × 0.75 = 1.5 points`; saving `2 − 1.5 = 0.5 points`, or `0.5 / 2 = 25%`. | The 25% reduction applies to the action cost for the 3-second effect duration. |

## Original English template and reconstruction

Full raw template, hash `6ac67293`:

```text
Activating Melee Specialist restores {stamina:%s} Stamina and grants {stamina_reduction:%s} Stamina Cost Reduction for {duration:%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `stamina` | Literal 0.20; default percentage conversion ×100, no + prefix | `20%` |
| `stamina_reduction` | Look up stamina_cost_multiplier=0.75; custom (1 − value) ×100 gives 25 before % suffix; no second ×100 and no + prefix | `25%` |
| `duration` | Look up buff duration=3; number formatting; raw template supplies the s suffix | `3` |

[Modifier and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2827-L2872); [Melee Specialist startup and stamina-cost buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3145-L3210); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425); [Custom outer value manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651).

Static plain-text reconstruction:

```text
Activating Melee Specialist restores 20% Stamina and grants 25% Stamina Cost Reduction for 3s.
```

Runtime color markup is excluded; this is not an observed game screen. The Melee Specialist trigger, 20% restoration, 25% stamina-cost reduction and 3-second duration agree with the reconstructed English. The stored-stack prerequisite/consumption, maximum-Stamina basis/clamp, refresh behavior and persistence after a weapon switch are omitted. No explicit English contradiction or supported English erratum is present.

## Limits

These examples assume the listed maximum/current Stamina and an eligible activation with a stored Melee Specialist stack. The cost example isolates this multiplier with other cost factors equal to 1; it does not assert a universal final cost for every action. Per-action interactions, exact game-update expiry timing and gameplay outcomes were not measured.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_weapon_switch_replenish_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/bc2a44d8-866d-4f29-a680-f84e98b72b01)

The icon identifies the talent; it is not mechanism evidence.
