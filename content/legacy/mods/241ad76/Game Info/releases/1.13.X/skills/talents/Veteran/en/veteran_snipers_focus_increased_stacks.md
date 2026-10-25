# Long Range Assassin: source evidence

[繁體中文](../veteran_snipers_focus_increased_stacks.md) | [Player description](README.md#veteran_snipers_focus_increased_stacks) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_snipers_focus_increased_stacks)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: keystone modifier; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1787-L1810); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2697-L2716).
- Talent: `veteran_snipers_focus_increased_stacks`. Name key `loc_talent_veteran_snipers_focus_increased_stacks`, hash `20154bac`: **Long Range Assassin**.
- Description key `loc_talent_veteran_snipers_focus_increased_stacks_description`, hash `c41d398b`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Mechanism

Increase **Marksman's Focus's effective stack cap from 10 to 15**. The special rule selects `veteran_snipers_focus_stat_buff_increased_stacks`, a clone that changes only `max_stacks`. It retains the **0.075 ranged finesse bonus and 0.01 reload speed per effective stack**, shared **five-second timer**, refresh/decay rules and **internal hard cap of 31**. The effective stat count is limited to 15; raw counts above that do not add further effect. [Variant selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2763-L2773); [Stat-buff clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2878-L2883); [Effective stack caps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L35-L39); [Per-stack stats and timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2803-L2822); [Effective stat-stack count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410).

If the related Rending modifier is selected, its activation threshold remains **10 raw stacks**. Raising the Focus cap to 15 does not raise that threshold. [Related ten-stack threshold](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2707-L2753).

At 15 effective stacks, the deltas are `15 × 0.075 = 1.125` ranged finesse and `15 × 0.01 = 0.15` reload speed. The **112.5%** finesse bonus applies to the extra component on ranged critical or weakspot hits; it is not a universal whole-hit increase. Reload speed changes an affected action's speed factor, so **+15% speed is not 15% less time**. The shared formulas and trigger/decay exceptions are detailed in [Marksman's Focus](veteran_snipers_focus.md). [Shared finesse calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782); [Affected action time and scale](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429).

## Examples and comparison baselines

For damage, assume the same noncritical ranged weakspot hit and target, base component `B = 100`, unmodified extra component `F = 40`, no other finesse bonus or later modifiers, and no binding clamp. For the reload example, assume an affected action with hypothetical unscaled time 4 seconds, no other speed factors and no binding time-scale limit. Results are static arithmetic, not weapon measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Compare 0 to 15 Focus stacks | Before `100 + 40 = 140`; after `100 + 40 × (1 + 1.125) = 185`; added `45` damage units; `45 / 140 ≈ 32.14%`. | This is the benefit of all 15 stacks relative to zero, not the upgrade's gain over the old cap. |
| Compare the old 10-stack cap to the new 15-stack cap | Before `100 + 40 × 1.75 = 170`; after `185`; added `15` damage units; `15 / 170 ≈ 8.82%`. | In this example, the five additional stacks give 8.82% more damage than the already capped base skill. |
| Affected 4-second reload action at 15 stacks | `4 / (1 + 15 × 0.01) = 4 / 1.15 ≈ 3.48 seconds`; saved about `0.52 seconds`, or `13.04%`. | +15% speed gives about 13.04% less action time under these assumptions. |

The whole-hit result depends on the relative components, attack, target and existing modifiers. Do not use the zero-stack baseline to label 32.14% as this cap upgrade's isolated increase. Actual reloads may include other stages and chain windows. [Shared finesse calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782); [Affected action time and scale](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429).

## Original English template and reconstruction

Full raw template, hash `c41d398b`:

```text
Increase Maximum stacks of Focus from {stacks:%s} to {new_stacks:%s}.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `stacks` | Number; `talent_settings.veteran_snipers_focus.max_stacks = 10` | `10` |
| `new_stacks` | Number; `talent_settings.veteran_snipers_focus.max_stacks_talent = 15` | `15` |

The talent's two display values match the base and variant caps. Number formatting and template interpolation use the shared formatting rules. [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2697-L2716); [Effective stack caps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L35-L39); [Number formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L426); [Parameter formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Description localization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L690-L713).

Static plain-text reconstruction, preserving original capitalization and punctuation:

```text
Increase Maximum stacks of Focus from 10 to 15.
```

This reconstruction excludes runtime color markup and is not an observed game screen. The original English agrees with the effective cap change. It omits the unchanged per-stack effects, internal counter, related Rending threshold and numerical damage/time consequences; these are supplements, not explicit contradictions. No English player-page erratum is supported.

## Limits

The examples retain their stated assumptions and the source dossier's static-analysis limits. The final game UI and its display of raw counts above the effective cap have not been observed. No fixed damage gain for a particular weapon or target is inferred.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_snipers_focus_increased_stacks.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/426b1945-b7fc-40e8-9db1-3bda08514bab)

The icon identifies the talent; it is not mechanism evidence.
