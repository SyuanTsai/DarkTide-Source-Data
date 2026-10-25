# Inebriate's Poise: source evidence

[繁體中文](../zealot_quickness_passive_dodge_stacks.md) | [Player description](README.md#zealot_quickness_passive_dodge_stacks) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_quickness_passive_dodge_stacks)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_quickness_passive_dodge_stacks`; name key `loc_talent_zealot_quickness_dodge_stacks`; description key `loc_talent_zealot_quickness_dodge_stacks_desc`. Node `node_4edf073e-7aa4-4234-9d90-c0551ccdfb32`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This upgrade grants the `zealot_quickness_dodge_stacks` special rule. The Quickness parent Buff allows its successful-Dodge event check only while that rule is enabled, then adds the configured 3 stacks to the counter child Buff.
- Dodge-generated and movement-generated stacks enter the same counter, capped at 20, with no independent timer. A subsequent hit must occur while Quickness active is absent to consume the current counter and activate the bonus.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1011-L1030](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1011-L1030)
- [scripts/settings/talent/talent_settings_zealot.lua — L556-L561](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L556-L561)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L165-L234](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L165-L234)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1011-L1030](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1011-L1030)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1221-L1243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1221-L1243)

## Example assumptions and limits

- **Trigger**: Each successful Dodge grants 3 additional Inexorable Judgement Momentum stacks, still subject to the 20-stack cap.
- **Stack example**: Starting at 18, a successful Dodge gives min(18 + 3, 20) = 20 stacks; the excess stack is not stored. You can build the next pool during an active bonus, but it is spent only by a hit after the current bonus ends.

- The effect uses the successful-Dodge event reported by the game. Ordinary movement or a Dodge that does not successfully avoid an attack does not count.
- The example covers the stack cap and subsequent activation only, excluding other dodge mechanisms.
- The accepted Chinese note at hash `6a266b91` records successful Dodges giving Quickness stacks in both languages. The 3-stack value and shared cap are retained as mechanism details. Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_quickness_dodge_stacks`, hash `8791f06d`, entry 8802: **Inebriate's Poise**.
- Description key `loc_talent_zealot_quickness_dodge_stacks_desc`, hash `6a266b91`, entry 6917.

Full raw template:

~~~text
Gain {stacks:%s} Stacks of Momentum on a successful Dodge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stacks` | 3 | `number`; `talent_settings_3.quickness.dodge_stacks` |

The minimal display mapping at `zealot_talents.lua` L1011-L1026 supplies the accepted stack count. The unused `talent_name` entry is not inserted.

Static reconstruction; not an observed game screen:

~~~text
Gain 3 Stacks of Momentum on a successful Dodge.
~~~

## English comparison

The English explicitly requires a **successful** Dodge and gives 3 Momentum stacks, matching the accepted special-rule behavior. The shared 20-stack counter, excess-stack loss and requirement to wait for the active bonus to end before consuming the next pool are supplements, not English errors.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_quickness_passive_dodge_stacks.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/b51610bf-5b84-45d0-97fe-abedede00719). The icon identifies the talent; it is not mechanism evidence.
