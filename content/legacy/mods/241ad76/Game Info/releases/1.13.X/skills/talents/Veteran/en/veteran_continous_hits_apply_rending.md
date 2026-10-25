# Onslaught: source evidence

[繁體中文](../veteran_continous_hits_apply_rending.md) | [Player description](README.md#veteran_continous_hits_apply_rending) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_continous_hits_apply_rending)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_continous_hits_apply_rending`; installs server proc `veteran_consecutive_hits_apply_rending`, which applies the target-side `rending_debuff`. The fixed talent ID spells `continous`. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L546-L575); [Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1136-L1179).
- Exact English name key `loc_talent_veteran_continous_hits_apply_rending`, hash `89ef54ab`: **Onslaught**. Description key `loc_talent_veteran_continous_hits_apply_rending_description`, hash `29626c69`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The first eligible hit on a new living target establishes the tracked target without adding a stack. Further eligible hits on that same target add one Brittleness stack; switching targets starts a new sequence. Melee and ranged attacks can trigger the talent, but each shot or sweep processes at most its first eligible hit. Buff damage such as Bleed is excluded. A miss reopens the next-shot gate without clearing the tracked target. [Same-target hit handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2518-L2566).
- Each target-side stack adds `0.025` Rending, caps at 16 stacks and lasts 5 seconds. New stacks refresh the shared timer rather than receiving independent five-second timers. Other attackers can benefit from the target’s debuff. [Brittleness stack values and timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376); [Shared stack-duration refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457); [Rending and target Brittleness calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660).
- Four stacks give `4 × 0.025 = 0.10`; 16 give `16 × 0.025 = 0.40`. Target Brittleness and attacker Rending enter the armor adjustment together. These stat values are not fixed final damage gains; the accepted isolated examples below depend on armor and apply to a subsequent hit with the stacks already present. [Rending and target Brittleness calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660); [Armor damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L95); [Armor types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19).

## Stack buildup and armor-specific damage examples

For buildup, use separate eligible attacks on the same surviving target with no stack expiry between them. For damage, assume a subsequent non-critical, non-weakspot hit with 100 damage before armor, `super_armor`, initial armor damage multiplier 0.5, no other Rending and no later modifiers. The stacks already exist before that hit; the examples do not retroactively change the hit that created a stack. [Same-target hit handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2518-L2566); [Brittleness stack values and timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376); [Rending and target Brittleness calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660); [Armor damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L95).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Five eligible hits on the same target; no expiry | First hit tracks the target; the next four add `4 × 0.025 = 0.10` (10% Rending). | Five qualifying hits build four stacks, not five. |
| Four existing stacks; stated armor assumptions | Before `100 × 0.5 = 50 damage`; after `100 × (0.5 + 0.10) = 60 damage`; relative gain `(60 − 50) / 50 = 20%`. | 10% Rending gives a 20% damage gain in this armor example. |
| Sixteen existing stacks; same assumptions | After `100 × (0.5 + 0.40) = 90 damage`; relative gain `(90 − 50) / 50 = 80%`. | 40% Rending gives an 80% damage gain here; other weapons, armor, critical or weakspot hits require a new calculation. |

## Original English template and reconstruction

Full raw template, hash `29626c69`:

```text
Continuous hits to a Single Target applies {rending_multiplier:%s} Brittleness for {duration:%s} seconds to the target. Stacks {max_stacks:%s} times.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `rending_multiplier` | Read `rending_debuff.stat_buffs.rending_multiplier = 0.025`; percentage formatter multiplies by 100, without a sign prefix | `2.5%` |
| `duration` | Read shared debuff duration 5; number formatter | `5` |
| `max_stacks` | Read shared debuff max_stacks 16; number formatter | `16` |

[Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1136-L1179); [Brittleness stack values and timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
Continuous hits to a Single Target applies 2.5% Brittleness for 5 seconds to the target. Stacks 16 times.
```

Runtime color markup is excluded; this is not an observed game screen. The repeated-hit, single-target Brittleness wording and reconstructed 2.5%/5-second/16-stack values agree with the accepted mechanism. First-hit tracking, detailed hit eligibility, shared refresh, miss/retarget behavior and armor-specific damage effects supplement the description. No explicit English contradiction is supported.

## Limits

Individual in-game hit/proc cases, exact timer ordering, final damage against particular enemies and final game UI have not been measured. The armor examples preserve the stated isolated assumptions; other weapons, armor parts, critical/weakspot hits and modifiers can change the result.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_continous_hits_apply_rending.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/0801494c-4548-4fcb-afe7-8a7c563ef396)

The icon identifies the talent; it is not mechanism evidence.
