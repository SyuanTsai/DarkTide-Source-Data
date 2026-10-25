# Back Off!: source evidence

[繁體中文](../ogryn_blo_melee.md) | [Player description](README.md#ogryn_blo_melee) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_blo_melee)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_blo_melee`; name key `loc_talent_ogryn_blo_melee`; description key `loc_talent_ogryn_blo_melee_desc`. Node `node_79b667e5-d2d2-4ea7-8fed-c24aaacbc86b`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `ogryn_blo_melee` resets `allowed=true` at sweep start. Only the first melee kill in that sweep adds the active buff; it then sets `allowed=false`.
- The active buff has `max_stacks=10`, `leadbelcher_chance_bonus=0.1` per stack, and sets `finish=true` after the next ammo-consumed event. `ActionWeaponBase` adds the bonus to the base Lucky Bullet chance. PRD returns true for `chance>=1`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2456-L2475](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2456-L2475)
- [scripts/settings/talent/talent_settings_ogryn.lua — L168-L171](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L168-L171)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3517-L3566](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3517-L3566)
- [scripts/extension_systems/weapon/actions/action_weapon_base.lua — L186-L214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L186-L214)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L226-L236](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L226-L236)
- [scripts/utilities/pseudo_random_distribution.lua — L7-L12](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/pseudo_random_distribution.lua#L7-L12)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2456-L2475](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2456-L2475)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1952-L1975](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1952-L1975)

## Example assumptions and limits

- **Building stacks**: A melee kill adds 1 stack. Even if one swing kills several enemies, it adds at most 1 stack.

- **Extra chance**: Each stack adds 10 percentage points, up to 10 stacks. The bonus is added to Burst Limiter Override's 15% base chance.

- **Consumption and example**: The next shot clears the stacks, including a free Lucky Bullet shot. Five stacks give 15% + 5 × 10% = 65%. Nine give 105%, guaranteeing a proc. Stacks have no fixed countdown.

- **Probability limit**: Below the guaranteed threshold, the game adjusts the proc sequence based on earlier checks. Shots cannot be treated as independent fixed-probability rolls.

Stacks have no time limit; they are consumed by the next ammo-consumed event. Several enemies killed in one melee sweep still add at most one stack. Local Build 25606770 Chinese and English text and the fixed public source correspond to 1.13.1. Actual presentation and behavior remain unobserved in game.

## Chinese localization note retained from the verified result

The Chinese wording mistakenly puts a chance-based effect on melee attacks after a kill. The independently read English puts the Lucky Bullet chance on the next shot after a killing melee attack. Existing evidence adds a stack on the eligible melee kill without an additional 10% chance check. The verified correction clarifies both the melee-kill trigger and next-shot effect; translated suggestion:

~~~text
When a melee attack kills an enemy, gain {chance:%s} chance to trigger Lucky Bullet on your next shot. Stacks {stacks:%s} times.
~~~

This retained Chinese correction does not establish an English contradiction.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_blo_melee`, hash `7aa2470d`, entry 7967: **Back Off!**.
- Description key `loc_talent_ogryn_blo_melee_desc`, hash `d4561ed1`, entry 13732.

Full raw template:

~~~text
On Killing Melee Attack gain {chance:%s} chance to trigger Lucky Bullet on next Shot. Stacks {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| chance | chance 0.1 | Percentage with + prefix → +10%; accepted implementation adds ten percentage points |
| stacks | max_stacks 10 | Number → 10 |

Only the missing display map in the cited talent definition, lines 2456–2475, was read. Existing mechanism, numerical and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
On Killing Melee Attack gain +10% chance to trigger Lucky Bullet on next Shot. Stacks 10 times.
~~~

## English comparison

The independently read English gives a +10% next-shot Lucky Bullet chance bonus on a killing melee attack and a ten-stack cap. These agree with the accepted one-stack-per-killing-sweep and additive bonus. The next ammo-event consumption, free-shot behavior, absence of expiry timer, PRD sequence and 65%/105% examples supplement the text. The original Chinese correction is retained separately; no explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_blo_melee.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/5c8fc9b0-2f06-4311-87f7-511d4c6ce6d5). The icon identifies the talent; it is not mechanism evidence.
