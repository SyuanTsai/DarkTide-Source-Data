# Serrated Blade: source evidence

[繁體中文](../veteran_hits_cause_bleed.md) | [Player description](README.md#veteran_hits_cause_bleed) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_hits_cause_bleed)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_hits_cause_bleed`; installed buff of the same name applies the shared `bleed` buff to the target. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L488-L515); [Talent and stack display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1772-L1827).
- Exact English name key `loc_talent_veteran_hits_cause_bleed`, hash `370e935f`: **Serrated Blade**. Description key `loc_talent_veteran_hits_cause_bleed_desc`, hash `b1249139`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- A damaging melee hit that does not kill, with a target still alive, applies 2 Bleed stacks. A mere hit that fails these conditions does not add this talent’s Bleed. [Damaging non-killing melee-hit proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L992-L1011).
- Shared Bleed caps at 16 stacks, ticks about every 0.5 seconds and refreshes a 1.5-second timer when reapplied. After the timer expires without reapplication, each subsequent damage tick removes one stack. [Shared Bleed stack curve and timing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L260); [Interval and stack-removal handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64).
- For n active stacks, `x = n / 16` and `S(x) = x² × (3 − 2x)`; the shared buff feeds `500 × S(x)` as Power Level. That input is not final damage. The accepted profile normalization gives `175 × S(x) × armor multiplier` for the stated unmodified example; unarmored multiplier 0.5 gives 43.75 damage per tick at 8 stacks and 3.759765625 at 2. [Shared Bleed stack curve and timing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L260); [Bleeding profile and armor values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466); [Profile power scale](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68); [Power Level input](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23); [Power Level normalization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L94); [Profile interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L377-L444); [Power Level settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29).

## Stack buildup and unarmored Bleed examples

Assume eligible damaging non-killing melee hits on a surviving target. For buildup, ignore intervening stack loss. For damage, use the recorded Bleeding profile, an unarmored target with armor multiplier 0.5 and no other damage modifiers; n is the active stack count at the tick. Examples compare individual ticks, not total Bleed damage over time. [Damaging non-killing melee-hit proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L992-L1011); [Shared Bleed stack curve and timing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L260); [Bleeding profile and armor values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466); [Profile power scale](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68); [Power Level input](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23); [Power Level normalization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L94); [Profile interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L377-L444); [Power Level settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Four eligible hits; ignore stack loss | `2 × 4 = 8 active stacks`. | Each eligible hit contributes 2; the example stays below the 16-stack cap. |
| Eight active stacks; unarmored, no other modifiers | `x = 8 / 16 = 0.5`; `S = 0.5`; Power Level `500 × 0.5 = 250`; damage `175 × 0.5 × 0.5 = 43.75 per tick`. | Power Level 250 and 43.75 damage per tick are different quantities. |
| Two active stacks; same unarmored assumptions | `x = 2 / 16 = 0.125`; `S = 0.125² × (3 − 0.25) = 0.04296875`; damage `175 × 0.04296875 × 0.5 = 3.759765625 per tick` (about 3.76). | The curve is nonlinear: eight-stack damage is not four times two-stack damage. |

## Original English template and reconstruction

Full raw template, hash `b1249139`:

```text
{stacks:%s} Stack(s) of Bleed to the target on Melee Hit.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `stacks` | Read `veteran_hits_cause_bleed.num_stacks_on_hit = 2`; number formatter without a sign prefix | `2` |

[Talent and stack display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1772-L1827); [Damaging non-killing melee-hit proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L992-L1011); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L405-L425).

Static plain-text reconstruction:

```text
2 Stack(s) of Bleed to the target on Melee Hit.
```

Runtime color markup is excluded; this is not an observed game screen. The two-stack value and melee-hit Bleed effect agree with the accepted mechanism. Damaging/non-killing/live-target restrictions, the shared cap/timing and nonlinear damage formula supplement the brief description. No English contradiction is supported.

## Limits

Individual game hit/proc cases, exact tick/update timing, target-dependent modifiers, complete damage over a decaying stack sequence and final game UI have not been measured. Tick damage depends on the damage profile, armor and other modifiers; the examples use their stated unarmored assumptions.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_hits_cause_bleed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/8378bd8a-7c90-41fd-83c7-40c135c75caa)

The icon identifies the talent; it is not mechanism evidence.
