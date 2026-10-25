# Kill Zone: source evidence

[繁體中文](../veteran_ranged_power_out_of_melee.md) | [Player description](README.md#veteran_ranged_power_out_of_melee) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_ranged_power_out_of_melee)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_ranged_power_out_of_melee`; installs the same-named conditional buff. The node has no ability replacement, stacking or unique exclusion declaration. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L691-L720); [Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1530-L1560).
- Exact English name key `loc_talent_veteran_ranged_power_out_of_melee`, hash `bb890aa8`: **Kill Zone**. Description key `loc_talent_veteran_ranged_power_out_of_melee_new_desc`, hash `4da1db07`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- A received-hit event updates last_hit_t only when the attack is melee and attacked_unit is the owner. The condition `t > last_hit_t + 8` supplies ranged_damage=0.15. A subsequent qualifying melee hit resets the wait; there is no natural eight-second expiry or single-use consumption. Enemy proximity, own melee attacks and received ranged hits do not independently reset this timer. The buff affects the owner’s damage stat, with no direct teammate application. [Melee-hit timer and conditional damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L680-L719); [Eight-second setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L191-L193); [Melee attack predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L370).
- The server event for player targets is subject to shared should_proc and deduplication checks. This buff predicate does not require positive damage or Health loss, so no extra restriction that Toughness absorption prevents the reset is established. The shared attack flow excludes player attacks on friendly targets and excludes grimoire damage from procs. The accepted evidence does not cover every blocking/dodging call path, so no universal outcome is claimed for them. [Server received-hit event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L752-L782); [Friendly-target and should_proc handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L550-L581); [Excluded damage type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L86-L88).
- The ranged_damage stat is additive_multiplier. The active 0.15 contributes to the general additive damage sum; ranged classification accepts attack_type=ranged or count_as_ranged_attack in the profile. An existing 1.25 factor becomes 1.40, a 12% relative gain at that stage. Armor, profiles, weakspot/critical effects and later multipliers still apply. [Additive stat types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L938-L950); [Conditional stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727); [General damage sum and ranged classification](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245); [Ranged stat in damage sum](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L317-L319); [Later multipliers and return](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L575-L584).
- Initialization sets last_hit_t=0, not installation time. If mission time already exceeds 8, the first update can qualify; every loadout installation need not impose a new eight-second wait. At a received hit at t=100, t=108 is still ineligible, and the first update later than 108 can qualify. Fixed updates calculate the condition, then process events, then update stats; event-driven resets may be reflected in the condition on the next update. Exact game-frame/UI timing is unmeasured. [Melee-hit timer and conditional damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L680-L719); [Fixed update ordering](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L144).
- Legacy internal naming refers to nearby enemies and a radius display field remains defined, but radius is absent from the current English template and the accepted condition uses received-melee-hit time. These legacy fields do not support an English radius or duration erratum. [Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1530-L1560); [Melee-hit timer and conditional damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L680-L719).

## Additive damage and waiting-time examples

For damage, isolate the stated additive stage, use base damage 100, an active talent and no other damage modifiers except the explicitly stated existing 25% same-category bonus. Hold all later factors equal or exclude them from the isolated result. For timing, use a qualifying melee-hit event at mission time 100 seconds. These are static examples, not game measurements. [Additive stat types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L938-L950); [General damage sum and ranged classification](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245); [Ranged stat in damage sum](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L317-L319); [Later multipliers and return](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L575-L584); [Melee-hit timer and conditional damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L680-L719).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Base damage 100; talent active; no other modifiers | `100 × (1 + 0.15) = 115 damage`; increase `15 / 100 = 15%`. | The isolated bonus gives 15 more damage. |
| Base 100; existing 25% same-category bonus | Before `100 × 1.25 = 125`; after `100 × (1 + 0.25 + 0.15) = 140`; relative stage gain `(140 − 125) / 125 = 12%`. | The additive 15-percentage-point increase is not a further 15% relative multiplication of 125. |
| Qualifying melee hit at t=100s; no later such hit | At t=108s, `108 > 100 + 8` is false; the first condition update at t>108s can qualify. | Eight seconds is the waiting threshold, not an eight-second bonus duration; exact update/frame timing is unmeasured. |

## Original English template and reconstruction

Full raw template, hash `4da1db07`:

```text
{ranged_damage:%s} Base Ranged Damage when you have avoided Melee Attacks for {cooldown:%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `ranged_damage` | Read conditional ranged_damage = 0.15; percentage formatter with + prefix | `+15%` |
| `cooldown` | Read the talent setting cooldown = 8; number formatter | `8` |

[Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1530-L1560); [Melee-hit timer and conditional damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L680-L719); [Eight-second setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L191-L193); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
+15% Base Ranged Damage when you have avoided Melee Attacks for 8s.
```

Runtime color markup is excluded; this is not an observed game screen. The English for 8s phrase qualifies avoiding melee attacks before activation; it does not state that the damage bonus expires after eight seconds. The reconstructed +15% Base Ranged Damage and eight-second waiting value agree with the accepted mechanism. Exact hit-event restrictions, persistence/reset behavior, additive-stage examples and initialization/update details supplement the description. No English erratum is supported; a Chinese duration mistranslation is not an English contradiction.

## Limits

The analysis does not cover every blocking/dodging call path or establish universal zero-damage hit behavior. Exact event-to-condition/frame timing, individual final damage and final game UI have not been measured. The displayed damage examples isolate the additive stage under their stated assumptions.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_ranged_power_out_of_melee.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6) | [Issue attachment](https://github.com/user-attachments/assets/8cc616f0-d225-4b5f-81a4-8780f478d471)

The icon identifies the talent; it is not mechanism evidence.
