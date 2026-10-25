# Focused Fighter: source evidence

[繁體中文](../ogryn_melee_attacks_give_mtdr.md) | [Player description](README.md#ogryn_melee_attacks_give_mtdr) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_melee_attacks_give_mtdr)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_melee_attacks_give_mtdr`; name key `loc_talent_ogryn_melee_attacks_give_mtdr_name`; description key `loc_talent_ogryn_melee_attacks_give_mtdr_desc`. Node `node_bbd8f036-4fd4-4438-bc14-bb08632c7b09`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_sweep_finish` with `num_hit_units > 0` adds one stack. The child has maximum 5 stacks, multiplicative `melee_damage_taken_multiplier=0.96` and no duration.
- The removal event `on_damage_taken` checks only `on_melee_hit`, without `attacked_unit == self`. `Damage.lua` dispatches to the team's `valid_player_units`, so the fixed implementation also clears stacks when an ally takes melee damage. No in-game verification was performed.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2746-L2785](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2746-L2785)
- [scripts/settings/talent/talent_settings_ogryn.lua — L49-L52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L49-L52)
- [scripts/settings/buff/buff_settings.lua — L872-L885](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L872-L885)
- [scripts/utilities/attack/damage.lua — L154-L178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L178)
- [scripts/utilities/attack/damage.lua — L202-L229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L202-L229)
- [scripts/utilities/attack/damage_calculation.lua — L587-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1956-L1978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1956-L1978)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1621-L1647](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1621-L1647)

## Example assumptions and limits

- **Gaining stacks**: Each melee sweep that hits at least one enemy adds one stack, up to 5. Hitting multiple enemies in the same sweep still grants only one stack.

- **Damage-reduction example**: Each stack multiplies incoming melee damage by 0.96. At five stacks, `100 × 0.96⁵ ≈ 81.54`, about 18.46% total reduction rather than a flat 20%.

- **Removal**: Stacks have no fixed countdown. Melee damage to you or an ally clears them. This reduction affects only melee damage you take, not ranged damage.

The published implementation's team-wide removal differs from the original text's general damage-received wording. Both sources correspond to 1.13.1; the existing cross-source question remains, without classifying it as a Chinese mistranslation. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_melee_attacks_give_mtdr_name`, hash `25803371`, entry 2424: **Focused Fighter**.
- Description key `loc_talent_ogryn_melee_attacks_give_mtdr_desc`, hash `7ced0743`, entry 8107.

Full raw template:

~~~text
{reduction:%s} Damage Resistance from Melee Attacks on Successful Melee Attack. Stacks {stacks:%s} times. Stacks are removed upon taking Damage from a Melee Attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| reduction | shared ogryn_melee_attacks_give_mtdr.damage_taken_multiplier = 0.96 | math_round((1 − value) × 100); percentage with explicit + prefix → +4% |
| stacks | shared stacks = 5 | Number → 5 |

Only the missing display mapping in the cited talent definition, lines 1956–1978, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+4% Damage Resistance from Melee Attacks on Successful Melee Attack. Stacks 5 times. Stacks are removed upon taking Damage from a Melee Attack.
~~~

## English comparison

The independently read English grants +4% resistance to melee damage per successful melee attack, up to five stacks, and states removal upon taking melee damage. The gain, value and cap match the accepted evidence. It does not expressly limit removal to damage received by you alone; the accepted team-wide event therefore adds a removal condition omitted by the wording, with the existing cross-source question retained for in-game confirmation. Per-sweep counting, no duration and multiplicative reduction supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_melee_attacks_give_mtdr.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/fca0827b-6dac-4c44-b92e-8aba309ff4ca). The icon identifies the talent; it is not mechanism evidence.
