# Concentrate: source evidence

[繁體中文](../ogryn_drain_stamina_for_handling.md) | [Player description](README.md#ogryn_drain_stamina_for_handling) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_drain_stamina_for_handling)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_drain_stamina_for_handling`; name key `loc_talent_ogryn_drain_stamina_for_handling`; description key `loc_talent_ogryn_drain_stamina_for_handling_desc`. Node `node_dfe735e6-ea36-4f63-9274-fe85bd09f32b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The helper requires a wielded weapon, `alternate_fire` and `stamina > 0`. Sway uses a 0.4 multiplier; Spread −0.2 and Recoil −0.15 are additive. The absent `critical_strike_chance` setting is `nil`, so it grants no additional Critical Chance.
- Each update drains Stamina through `Stamina.drain(0.5 × dt)`; reloading does not drain it. The conditional-stat helper itself has no reload check, so reloading is not claimed to necessarily remove the handling stats.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3215-L3300](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3215-L3300)
- [scripts/settings/talent/talent_settings_ogryn.lua — L128-L133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L128-L133)
- [scripts/utilities/attack/stamina.lua — L14-L41](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L14-L41)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2603-L2632](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2603-L2632)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1822-L1844](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1822-L1844)

## Example assumptions and limits

- **Condition**: While bracing your ranged weapon with Stamina remaining, reduce Sway by 60%, Spread by 20% and Recoil by 15%. These bonuses are lost when Stamina runs out.

- **Stamina drain**: Drain 0.5 Stamina per second; reloading stops this drain. With 5 Stamina and no other drain or drain modifiers, this can last at most `5 ÷ 0.5 = 10s`.

- **Handling example**: Isolating other modifiers, Sway, Spread and Recoil parameters initially at 100 become 40, 80 and 85 respectively. These are handling parameters, not fixed percentage increases to accuracy.

Weapon curves also affect how handling parameters translate into actual reticle and recoil behavior. Parameter percentages are not fixed angles. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_drain_stamina_for_handling`, hash `d4a809fa`, entry 13758: **Concentrate**.
- Description key `loc_talent_ogryn_drain_stamina_for_handling_desc`, hash `6c43172c`, entry 7039.

Full raw template:

~~~text
{sway_reduction:%s} Sway Reduction, {spread_reduction:%s} Spread Reduction, and {recoil_reduction:%s} Recoil Reduction while bracing your Ranged Weapon, but lose {stamina:%s} Stamina per second.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| sway_reduction | 1 − shared sway_modifier 0.4 = 0.6 | Percentage with explicit + prefix → +60% |
| spread_reduction | abs(shared spread_modifier −0.2) = 0.2 | Percentage with explicit + prefix → +20% |
| recoil_reduction | abs(shared recoil_modifier −0.15) = 0.15 | Percentage with explicit + prefix → +15% |
| stamina | shared stamina_per_second = 0.5 | Number → 0.5 |

Only the missing display mapping in the cited talent definition, lines 2603–2632, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+60% Sway Reduction, +20% Spread Reduction, and +15% Recoil Reduction while bracing your Ranged Weapon, but lose 0.5 Stamina per second.
~~~

## English comparison

The independently read English grants the three handling reductions while bracing a ranged weapon and drains 0.5 Stamina per second. This agrees with the accepted effects and values. Stamina gating, the reload drain exception, lack of additional Critical Chance and handling examples supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_drain_stamina_for_handling.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/d21c7405-647a-4da2-a396-16b9c5cd8819). The icon identifies the talent; it is not mechanism evidence.
