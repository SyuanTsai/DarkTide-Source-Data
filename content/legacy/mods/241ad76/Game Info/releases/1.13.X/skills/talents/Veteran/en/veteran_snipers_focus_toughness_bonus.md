# Tunnel Vision: source evidence

[繁體中文](../veteran_snipers_focus_toughness_bonus.md) | [Player description](README.md#veteran_snipers_focus_toughness_bonus) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_snipers_focus_toughness_bonus)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: keystone modifier; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1764-L1786); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2656-L2676).
- Talent: `veteran_snipers_focus_toughness_bonus`. Name key `loc_talent_veteran_snipers_focus_toughness_bonus`, hash `dee16486`: **Tunnel Vision**.
- The actual description key is `loc_talent_veteran_snipers_focus_stamina_bonus_desc`, hash `a8372526`; it differs from the talent identifier's suffix.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Mechanism

- The special rule enables `toughness_replenish_modifier = 0.04` **per effective Focus stack**. This modifies the amount recovered by applicable Toughness recovery events; gaining a stack does not itself issue an immediate 4% Toughness restoration. [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2656-L2676); [Conditional stat and effective-cap variant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2803-L2883); [Effective stat-stack count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410); [Toughness recovery modifier and limits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285).
- `recover_percentage_toughness` applies the replenishment modifier unless called with `ignore_stat_buffs = true`. Other applicable recovery modifiers and the Toughness deficit/limits still affect the actual grant. [Toughness recovery modifier and limits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285).
- A qualifying **ranged weakspot kill** also calls `Stamina.add_stamina_percent(unit, 0.1)`. The requested amount is **10% of maximum Stamina**, limited by the missing amount so it cannot exceed maximum Stamina. Ordinary weakspot hits without a qualifying ranged kill do not trigger this Stamina return. [Optional ranged weakspot-kill proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2755-L2802); [Stamina.add_stamina_percent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L118).
- Focus's effective stack count and timer determine the current recovery bonus. Ten effective stacks add `10 × 0.04 = 0.40`; fifteen with [Long Range Assassin](veteran_snipers_focus_increased_stacks.md) add `0.60`. Raw counts above the effective cap do not add further stats. The full trigger/refresh/decay rules are in [Marksman's Focus](veteran_snipers_focus.md). [Conditional stat and effective-cap variant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2803-L2883); [Effective stat-stack count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410).

## Recovery examples

For Toughness, assume an applicable event that would otherwise restore **20 Toughness points**, no other recovery modifiers and enough missing Toughness for the illustrated result. For Stamina, assume maximum Stamina **6 units** and a qualifying ranged weakspot kill, with the stated deficit. The examples are static arithmetic, not in-game measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Five effective Focus stacks | `20 × (1 + 5 × 0.04) = 24 Toughness points`; 4 more than the event's original 20. | The recovery event becomes 20% larger; the stacks themselves do not immediately restore Toughness. |
| One effective Focus stack | `20 × (1 + 0.04) = 20.8 Toughness points`; 0.8 more than before. | One stack changes the existing event's amount rather than granting 4% of maximum Toughness on its own. |
| Maximum Stamina 6; deficit at least 0.6 | Requested `6 × 0.10 = 0.6 Stamina units`. | The percentage uses maximum Stamina, not the missing amount. |
| Maximum Stamina 6; deficit only 0.2 | Requested `0.6`; actual recovery `min(0.6, 0.2) = 0.2 Stamina units`. | Recovery is limited by the deficit; it cannot overfill Stamina. |

[Toughness recovery modifier and limits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285); [Stamina.add_stamina_percent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L118).

## Original English template and reconstruction

Full raw template, hash `a8372526`:

```text
{toughness_replenish_multiplier:%s} Toughness Replenishment for each stack of Focus. In addition, weakspot kills restore {stamina:%s} Stamina.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `toughness_replenish_multiplier` | Display value `0.04`; percentage with `+` prefix | `+4%` |
| `stamina` | Display value `0.1`; percentage without a plus prefix | `10%` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2656-L2676); [Shared percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L426); [Parameter formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Description localization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L690-L713).

Static plain-text reconstruction, preserving the full original wording:

```text
+4% Toughness Replenishment for each stack of Focus. In addition, weakspot kills restore 10% Stamina.
```

This reconstruction excludes runtime color markup and is not an observed game screen. The English “Toughness Replenishment” agrees with a replenishment modifier. It does not explicitly assert direct recovery on gaining stacks. The second sentence omits the ranged qualification and maximum-Stamina basis; shared recovery exceptions and caps are also unstated. These are supplements to the English description, not explicit contradictions. No English player-page erratum is supported.

## Limits

The numerical examples require their stated recovery event, stack count, maximum resource and deficit. Recovery events that explicitly ignore stat buffs do not receive this modifier. Static text comparison does not establish a measured game grant or final UI display.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_snipers_focus_toughness_bonus.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/62660bca-751b-435a-9d60-48590aadd37f)

The icon identifies the talent; it is not mechanism evidence.
