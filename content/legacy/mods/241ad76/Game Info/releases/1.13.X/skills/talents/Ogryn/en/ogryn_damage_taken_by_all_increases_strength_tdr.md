# No Hurting Friends!: source evidence

[繁體中文](../ogryn_damage_taken_by_all_increases_strength_tdr.md) | [Player description](README.md#ogryn_damage_taken_by_all_increases_strength_tdr) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_damage_taken_by_all_increases_strength_tdr)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_damage_taken_by_all_increases_strength_tdr`; name key `loc_talent_ogryn_damage_taken_by_all_increases_strength_tdr`; description key `loc_talent_ogryn_damage_taken_by_all_increases_strength_tdr_desc`. Node `node_a1ee7d5a-d620-416a-854a-96054870ed5d`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_damage_taken` checks whether `attacked_unit` is you or a unit in Coherency. Both the Health-damage and Toughness-only paths in `damage.lua` dispatch the event.
- The child buff grants `power_level_modifier=0.02` per stack, with maximum 5, duration 10s and refresh. The full-stack child has `toughness_damage_taken_multiplier=0.85` and exits when `current_stacks < 5`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3681-L3743](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3681-L3743)
- [scripts/settings/talent/talent_settings_ogryn.lua — L176-L181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L176-L181)
- [scripts/utilities/attack/damage.lua — L133-L178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L133-L178)
- [scripts/utilities/attack/damage.lua — L202-L229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L202-L229)
- [scripts/utilities/attack/power_level.lua — L63-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/utilities/attack/damage_taken_calculation.lua — L223-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2685-L2716](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2685-L2716)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L913-L939](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L913-L939)

## Example assumptions and limits

- **Trigger**: When you or an ally in Coherency take damage, you gain one Strength stack. Toughness-only damage also triggers it; losing Health is not required.

- **Stacks and timing**: Each stack grants +2% Strength, up to 5 stacks / 10%, for 10s. Further triggers restart the duration. At all 5 stacks, also gain 15% Toughness damage reduction; that bonus ends below full stacks.

- **Power example**: With only this bonus, Power of 500 becomes `500 × (1 + 5 × 2%) = 550`. Power affects damage, Impact and cleave. Actual damage still uses weapon curves and target armour; final damage cannot always be multiplied by 1.1.

- **Damage-reduction example**: At full stacks, Toughness damage of 100 at this stage becomes `100 × 0.85 = 85`, or 68 with another independent 20% reduction.

#### Chinese localization note

- The Chinese description limits the trigger to Health damage, which is too narrow: Toughness-only damage also builds stacks without prior Health loss. The English wording says Damage Taken and does not impose that restriction.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_damage_taken_by_all_increases_strength_tdr`, hash `78920596`, entry 7831: **No Hurting Friends!**.
- Description key `loc_talent_ogryn_damage_taken_by_all_increases_strength_tdr_desc`, hash `05e8af7e`, entry 360.

Full raw template:

~~~text
{strength:%s} Strength on Damage Taken by you or Allies in Coherency. {stacks:%s} Max Stacks. Lasts {duration:%s}s. {tdr:%s} Toughness Damage Reduction on Max Stacks.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| strength | shared setting power_level_modifier = 0.02 | Percentage with explicit + prefix → +2% |
| stacks | shared setting max_stacks = 5 | Number → 5 |
| duration | shared setting duration = 10 | Number → 10 |
| tdr | shared setting tdr = 0.85 | math_round((1 − value) × 100); percentage with explicit + prefix → +15% |

Only the missing display mapping in the cited talent definition, lines 2685–2716, was read. Accepted values, mechanisms and common formatting were reused. All shared setting values are from ogryn_damage_taken_by_all_increases_strength_tdr. The [Dev] suffix is export metadata, not part of the description.

Static reconstruction; not an observed game screen:

~~~text
+2% Strength on Damage Taken by you or Allies in Coherency. 5 Max Stacks. Lasts 10s. +15% Toughness Damage Reduction on Max Stacks.
~~~

## English comparison

The independently read English says Damage Taken by you or allies in Coherency, without restricting damage to Health. This agrees with the accepted Health and Toughness-only events; the Chinese-only trigger correction is not an English erratum. The +2% Strength, five-stack cap, 10s duration and +15% Toughness damage reduction at maximum stacks also agree. Refresh, removal below full stacks and the distinction between Power and final damage supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_damage_taken_by_all_increases_strength_tdr.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/9af41f8c-0f0e-4b2b-965e-c0d01fea2746). The icon identifies the talent; it is not mechanism evidence.
