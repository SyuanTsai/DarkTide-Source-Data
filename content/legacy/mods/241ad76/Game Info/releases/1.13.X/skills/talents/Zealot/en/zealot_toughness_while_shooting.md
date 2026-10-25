# The Voice of Terra: source evidence

[繁體中文](../zealot_toughness_while_shooting.md) | [Player description](README.md#zealot_toughness_while_shooting) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_toughness_while_shooting)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_toughness_while_shooting`; name key `loc_talent_zealot_toughness_on_ranged_kill`; description key `loc_talent_zealot_toughness_while_shooting_desc`. Node `node_b5ef81ae-d72f-4e83-8fd4-077fad7f6fe0`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The server update checks only `shooting` or `t<=shooting_end_time+.5`, calling `replenish_percentage` per frame with `.1×dt`. `target_slot_secondary` is used only for `is_active`/HUD, not as a necessary restoration condition. The 0.5-second tail after switching weapons must not be described as requiring the Ranged weapon to remain held.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4647-L4680](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4647-L4680)
- [scripts/settings/talent/talent_settings_zealot.lua — L230-L232](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L230-L232)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3199-L3213](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3199-L3213)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L320-L346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L320-L346)

## Example assumptions and limits

- **Operation**: While shooting, restore 10% of maximum Toughness per second, continuing about 0.5 seconds after firing stops. Hits or kills are not required.
- **Restoration example**: With maximum Toughness 100, no other restoration bonuses and 2 seconds of continuous shooting followed by the full 0.5-second tail, restore 100 × 10% × (2 + 0.5) = 25, capped by missing Toughness.

- The accepted Chinese comparison at hash `fce063da` finds no explicit effect-direction contradiction for the same description key/hash. Unlisted formulas, caps and finer restrictions are supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_toughness_on_ranged_kill`, hash `4bc5e375`, entry 4923: **The Voice of Terra**.
- Description key `loc_talent_zealot_toughness_while_shooting_desc`, hash `fce063da`, entry 16430.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness per second while Shooting.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 0.1 → 10% | `percentage`; `talent_settings.zealot_toughness_while_shooting.toughness` |

The minimal display mapping at `zealot_talents.lua` L3199-L3213 supplies the accepted per-second value. The old name key mentions a Ranged kill, but its English value is The Voice of Terra and the description requires shooting.

Static reconstruction; not an observed game screen:

~~~text
Replenish 10% Toughness per second while Shooting.
~~~

## English comparison

The English requires Shooting and gives 10% Toughness per second, agreeing with the accepted update condition and rate. It does not require a hit or kill. Maximum-Toughness basis, frame integration, the 0.5-second tail after stopping or switching weapons, HUD-only slot check and missing-Toughness cap supplement the description. The old name key is not a different English trigger; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_toughness_while_shooting.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/fb4eb2d4-1dee-4596-8262-2c99311be059). The icon identifies the talent; it is not mechanism evidence.
