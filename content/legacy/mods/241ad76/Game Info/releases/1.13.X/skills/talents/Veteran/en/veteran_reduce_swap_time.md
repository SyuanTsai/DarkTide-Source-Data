# One Motion: source evidence

[繁體中文](../veteran_reduce_swap_time.md) | [Player description](README.md#veteran_reduce_swap_time) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_reduce_swap_time)

## Identity and weapon swap speed

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Passive talent; the node costs one talent point. [One-point passive node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1415-L1442); [Installed passive and swap-speed display](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1898-L1924).
- Talent: `veteran_reduce_swap_time`. Exact English name key `loc_talent_veteran_reduce_swap_time`, hash `834ffcca`: **One Motion**.
- Actual description key `loc_talent_veteran_reduce_swap_time_desc`, hash `8de5cb15`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- The installed passive supplies `wield_speed = 0.5`, giving **+50% Weapon Swap Speed**. The internal `name = "Wield Speed increased by 25%"` is an outdated annotation; it is neither the installed value nor the localized English description. [Installed passive and swap-speed display](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1898-L1924); [Wield-speed stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L949-L955).
- The shared action handler applies wield speed to its listed wield/unwield action types, including ranged wield. With other scale factors held at one, an affected action's duration is divided by `1.5`. Reload and attack speed are separate from this swap-speed stat. [Affected wield action types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L375-L400); [Action duration and scaled progression](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L345-L365).

## Swap-time examples

Assume the stated action uses wield speed, no other speed bonuses apply, all other scale factors are `1`, and no limit binds. The isolated affected duration is `T = T₀ / (1 + 0.50)`. The inputs below are illustrative; actual weapon actions and complete swap sequences can differ. [Affected wield action types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L375-L400); [Action duration and scaled progression](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L345-L365).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| An affected swap action takes 0.9s before this talent | `0.9 / 1.5 = 0.6s`; saved time `0.9 − 0.6 = 0.3s`; relative saving `0.3 / 0.9 ≈ 33.33%`. | +50% speed makes this isolated action about one-third shorter, rather than halving its elapsed time. |
| Hypothetical sequence: 0.3s unwield and 0.9s wield are both affected; another 0.2s is held unchanged | Before: `0.3 + 0.9 + 0.2 = 1.4s`; after: `0.3 / 1.5 + 0.9 / 1.5 + 0.2 = 1.0s`; saving `0.4 / 1.4 ≈ 28.57%`. | An unchanged part lowers the complete sequence's relative time saving; the isolated action reduction is not automatically the full-switch reduction. |

The second row is a hypothetical calculation with an explicitly unchanged component, not a claim that every weapon has a 0.2-second delay. Runtime input, transition and frame timing have not been measured.

## Original English template and reconstruction

Full raw template, hash `8de5cb15`:

```text
{swap_speed} Weapon Swap Speed.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `swap_speed` | Find installed `stat_buffs.wield_speed = 0.5`; outer custom manipulation rounds `value × 100`; percentage formatting with `+` prefix | `+50%` |

[Installed passive and swap-speed display](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1898-L1924); [Wield-speed stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L949-L955); [Buff-template value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Parameter formatting uses the outer configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Percentage formatting and custom manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404); [Optional-format placeholder interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/localization/localization_manager.lua#L285-L320).

The custom manipulation belongs to the outer parameter config and converts `0.5` to `50`. The percentage formatter uses that result instead of multiplying by 100 again. The raw `{swap_speed}` token intentionally contains no colon or `%s` suffix; the localization interpolation supports that form.

Static plain-text reconstruction:

```text
+50% Weapon Swap Speed.
```

Runtime color markup is excluded; this is not an observed game screen. The English speed claim agrees with the installed value. The Chinese-only wording issue and outdated internal annotation do not create an English erratum.

## Limits

Actual swap timings, input/transition effects, complete weapon sequences and final game UI have not been measured in game. Examples hold all unlisted conditions fixed and distinguish affected action time from complete sequence time.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_reduce_swap_time.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/f51a3100-c73f-4d71-833e-a71bb9e002bc)

The icon identifies the talent; it is not mechanism evidence.
