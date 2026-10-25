# Reciprocity: source evidence

[繁體中文](../veteran_dodging_grants_crit.md) | [Player description](README.md#veteran_dodging_grants_crit) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_dodging_grants_crit)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_dodging_grants_crit`; installed event buff `veteran_dodging_grants_crit` applies `veteran_dodging_crit_buff`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L436-L462); [Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1180-L1224).
- Exact English name key `loc_talent_veteran_dodging_grants_crit`, hash `c46eee42`: **Reciprocity**. Description key `loc_talent_veteran_dodging_grants_crit_description`, hash `46119770`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- A successful-dodge event applies the internal critical chance stack. Simply performing a dodge without avoiding an attack does not add a stack. [Successful-dodge event and critical chance stack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2590-L2615).
- Each stack adds `critical_strike_chance = 0.05`, up to 5 stacks. This value stat adds percentage points of critical chance; it is not a relative 5% multiplier on existing chance. [Successful-dodge event and critical chance stack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2590-L2615); [Critical chance value-stat category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L757-L757).
- The stack buff has duration 8 seconds with shared timer refresh on stacking. Another successful dodge refreshes the duration, including a stacking application at the cap. The stacks expire together when the shared duration ends after the latest refresh. [Successful-dodge event and critical chance stack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2590-L2615); [Stack application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457); [Stack count and duration refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L670).

## Additive critical chance examples

Assume an existing critical hit chance of 10%, the stated active stack count and no other critical chance changes. The examples stay below 100% and do not estimate average damage or DPS. [Successful-dodge event and critical chance stack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2590-L2615); [Critical chance value-stat category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L757-L757).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Starting critical chance 10%; three active stacks | `10% + 3 × 5 percentage points = 25%`. | Three stacks add 15 percentage points. |
| Starting critical chance 10%; five active stacks | `10% + 5 × 5 percentage points = 35%`. | The stack cap adds 25 percentage points to the starting chance. |

## Original English template and reconstruction

Full raw template, hash `46119770`:

```text
{crit_chance:%s} Critical Hit Chance for {duration:%s}s on successful Dodge. Stacks {stacks:%s} times.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `crit_chance` | Read `veteran_dodging_crit_buff.stat_buffs.critical_strike_chance = 0.05`; signed percentage formatter | `+5%` |
| `duration` | Read duration 8; number formatter, followed by literal `s` | `8` |
| `stacks` | Read max_stacks = 5; number formatter | `5` |

[Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1180-L1224); [Successful-dodge event and critical chance stack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2590-L2615); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
+5% Critical Hit Chance for 8s on successful Dodge. Stacks 5 times.
```

Runtime color markup is excluded; this is not an observed game screen. The successful-dodge trigger, five-stack cap and eight-second duration agree with the established effect. The additive percentage-point formula and shared refresh behavior supplement the description; no English contradiction is supported.

## Limits

Individual game successful-dodge event cases, exact update-frame expiry, attack-specific critical outcomes, average DPS and final game UI have not been measured. The chance examples isolate this talent and the stated active stacks.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_dodging_grants_crit.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/980ba0fa-2a34-4f97-b592-05651671933b)

The icon identifies the talent; it is not mechanism evidence.
