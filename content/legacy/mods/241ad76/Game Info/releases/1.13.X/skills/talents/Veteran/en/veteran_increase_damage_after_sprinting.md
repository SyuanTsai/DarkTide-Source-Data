# Skirmisher: source evidence

[繁體中文](../veteran_increase_damage_after_sprinting.md) | [Player description](README.md#veteran_increase_damage_after_sprinting) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increase_damage_after_sprinting)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_increase_damage_after_sprinting`; persistent buff `veteran_damage_after_sprinting` applies `veteran_damage_after_sprinting_buff`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L212-L241); [Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L943-L986).
- Exact English name key `loc_talent_veteran_damage_damage_after_sprinting`, hash `0c863da8`: **Skirmisher**. Description key `loc_talent_veteran_damage_damage_after_sprinting_or_sliding_desc`, hash `dc400859`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- Sprinting or sliding accumulates movement time and applies a damage stack about once per second during continuous movement. The accumulator starts at 0; outside these movement states it is set to 0.5, so a subsequent restart usually takes about half a second to obtain the next stack. Exact first-stack timing depends on the update/timer starting point. [Sprinting and sliding accumulator](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L744-L780).
- Each stack adds `damage = 0.0625`; the cap is 4. The stack bonus adds into the damage multiplier, so four stacks contribute `4 × 0.0625 = 0.25`, rather than four independent multiplicative bonuses. [Damage stack value, cap and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L799-L814); [Additive damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242).
- Stack applications refresh one shared 10-second duration, including applications while already at the four-stack cap. Stacks do not have separate 10-second expiry timers. Once refreshing stops, the shared duration expires and the bonus is lost. [Damage stack value, cap and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L799-L814); [Stack application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457); [Stack and duration handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L670).

## Additive stack-damage examples

Assume base damage 100, the stated active stack count, no other additive damage bonuses and no armor or later modifiers. Values describe the isolated damage stage; actual final damage can differ. [Damage stack value, cap and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L799-L814); [Additive damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| One active stack; base damage 100 | `100 × (1 + 0.0625) = 106.25 damage`. | The isolated damage multiplier is 1.0625. |
| Four active stacks; base damage 100 | `4 × 6.25% = 25%`; `100 × (1 + 4 × 0.0625) = 125 damage`. | Stacks add to the multiplier; the cap gives 1.25 in this isolated example. |

## Original English template and reconstruction

Full raw template, hash `dc400859`:

```text
{base_damage:%s} to all Base Damage for {duration:%s}s after Sprinting or Sliding. Stacks {stacks:%s} times.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `base_damage` | Read `veteran_damage_after_sprinting_buff.stat_buffs.damage = 0.0625`; percentage conversion selects two decimals; `+` prefix | `+6.25%` |
| `duration` | Read the stack buff duration 10; number formatter, with literal `s` in the template | `10` |
| `stacks` | Read the stack buff max_stacks = 4; number formatter | `4` |

[Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L943-L986); [Damage stack value, cap and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L799-L814); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Decimal selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L354-L377); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
+6.25% to all Base Damage for 10s after Sprinting or Sliding. Stacks 4 times.
```

Runtime color markup is excluded; this is not an observed game screen. The per-stack value, four-stack cap, 10-second duration and Sprinting/Sliding actions agree with the accepted mechanism. The buildup cadence, shared refresh and additive formula supplement the description; no English contradiction is supported.

## Limits

Exact in-game first-stack timing, update-frame boundaries, final damage with other modifiers and final game UI have not been measured. Damage examples assume the stated active stack count and isolate this bonus.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increase_damage_after_sprinting.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/dca385d7-a54e-4bf5-b67d-f3d29ef82234)

The icon identifies the talent; it is not mechanism evidence.
