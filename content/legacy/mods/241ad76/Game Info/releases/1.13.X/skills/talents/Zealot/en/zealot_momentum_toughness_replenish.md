# Retributor's Stance: source evidence

[繁體中文](../zealot_momentum_toughness_replenish.md) | [Player description](README.md#zealot_momentum_toughness_replenish) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_momentum_toughness_replenish)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_momentum_toughness_replenish`; name key `loc_talent_zealot_quickness_toughness_per_stack`; description key `loc_talent_zealot_momentum_toughness_replenish_desc`. Node `node_1473ca58-1a77-4543-b2e5-9c4491d240c8`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node grants the `zealot_momentum_toughness_replenish` special rule. The Quickness active Buff reads it on activation. With the rule enabled, each update calls percentage Toughness restoration with `0.005 × active stack_count × dt`.
- Restoration accumulates over time as a percentage of maximum Toughness and runs only while the Quickness active Buff exists. The base active effect lasts 6 seconds. Each stack gives 0.5% maximum Toughness per second; more stacks increase the restoration rate.
- This node has no separate trigger or stacks. It modifies the main Quickness active Buff; periodic restoration stops when that bonus ends.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1051-L1070](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1051-L1070)
- [scripts/settings/talent/talent_settings_zealot.lua — L192-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L192-L194)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L288-L312](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L288-L312)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1051-L1070](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1051-L1070)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1198-L1220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1198-L1220)

## Example assumptions and limits

- **Effect**: During Inexorable Judgement's active bonus, each stack replenishes 0.5% maximum Toughness per second, accumulating over time according to the active stack count.
- **Restoration example**: With maximum Toughness 100 and 20 stacks on activation, restore 100 × 20 × 0.5% = 10 per second, at most 60 over a full 6 seconds. With duration extended to 10 seconds, the theoretical maximum is 100. Restoration bonuses and the current missing amount still apply.

- The example is a theoretical amount with no incoming damage and Toughness below maximum. Reaching the Toughness cap does not store excess restoration.
- “Per second” is a rate from per-frame multiplication by `dt`, not a fixed tick once every second.
- The accepted Chinese note at hash `11690b77` records Toughness restoration from Quickness stacks in both languages. The per-stack rate and active-Buff requirement are retained as mechanism details. Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_quickness_toughness_per_stack`, hash `af56f063`, entry 11284: **Retributor's Stance**.
- Description key `loc_talent_zealot_momentum_toughness_replenish_desc`, hash `11690b77`, entry 1131.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness per second per spent Stack of Momentum during its Duration.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 0.005 → 0.5% | `percentage`; `zealot_momentum_toughness_replenish.toughness_to_restore` |

The minimal display mapping at `zealot_talents.lua` L1051-L1065 supplies the accepted rate. Its unused `talent_name` entry is not inserted.

Static reconstruction; not an observed game screen:

~~~text
Replenish 0.5% Toughness per second per spent Stack of Momentum during its Duration.
~~~

## English comparison

The English explicitly specifies 0.5% Toughness per second per **spent** Momentum stack during its duration. This matches restoration only from the active bonus, rather than the unspent movement counter. The maximum-Toughness basis, per-frame integration, shared active lifetime, missing-Toughness cap and the 6/10-second examples are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_momentum_toughness_replenish.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/54fb5877-384e-4378-885f-95cb1daed864). The icon identifies the talent; it is not mechanism evidence.
