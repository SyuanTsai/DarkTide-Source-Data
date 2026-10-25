# Fear of Justice: source evidence

[繁體中文](../adamant_drone_debuff_talent.md) | [Player description](README.md#adamant_drone_debuff_talent) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_drone_debuff_talent)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_drone_debuff_talent`; node `node_99a483b6-3ac6-42da-b2ab-b0d3dcc062e9`; category Ability; one point.

## Source-confirmed behavior and static derivation

- Enemies within the Nuncio-Aquila's area gain an extra stat buff with −25% melee attack speed and −25% melee damage.
- The talent UI's attack-speed display manipulation returns a fixed 50. Buff aggregation adds the additive modifier −0.25 to base 1, giving an attack-speed multiplier of 0.75.
- Enemy melee behavior divides the attack action's duration by that speed multiplier. When no minimum-duration limit applies, 0.75 produces about 1.333 times the original duration. This differs from the displayed 50% increase in the interval between attacks. Same-version game behavior or an official explanation remains to be checked.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L622-L646](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L622-L646)
- [scripts/settings/talent/talent_settings_adamant.lua — L67-L83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L67-L83)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L484-L492](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L484-L492)
- [scripts/settings/buff/buff_settings.lua — L863-L863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L863-L863)
- [scripts/settings/buff/buff_settings.lua — L1045-L1057](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1045-L1057)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L731)
- [scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua — L45-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua#L45-L51)
- [scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua — L259-L270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua#L259-L270)
- [scripts/settings/talent/talent_settings_adamant.lua — L67-L83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L67-L83)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L622-L646](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L622-L646)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1253-L1275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1253-L1275)

## Example assumptions and limits

- **Melee damage**: Enemies affected by the Nuncio-Aquila deal 25% less melee damage. Isolating this effect, base melee damage of 100 becomes `100 × (1 − 25%) = 75 damage`.

- **Melee attack-speed example**: Enemy melee attack speed is reduced by 25%. When the action's minimum-duration limit does not apply, an action taking 1s instead takes `1 ÷ 0.75 ≈ 1.33s`, an increase in duration of about 33.3%.

- **Area condition**: This debuff is bound to the Nuncio-Aquila's area and is removed when the enemy leaves its range.

#### English description discrepancy

- The reconstructed English states that the time between affected enemies' melee attacks increases by 50%. The accepted fixed-source evidence supplies a 0.75 attack-speed multiplier, giving about 33.3% longer adjustable actions when no minimum-duration limit applies. A 50% increase in a 1s interval would give 1.5s; it is not the same result. The display mapping explicitly returns 50, independently of the stat value. This is a discrepancy in static evidence; game behavior remains unobserved.

The attack-speed example excludes the enemy action's minimum-duration limit, other attack-speed modifiers and game-version differences. The stat coefficient and display value differ, so the displayed 50% cannot be treated as every attack's actual delay increase. Damage is measured in damage points and durations in seconds. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

## Chinese localization note

The existing Chinese record says that the Chinese description renders the English interval increase as a 50% reduction in attack speed. Those quantities are not equivalent: increasing a 1s interval by 50% gives 1.5s (about 33.3% lower speed), whereas reducing speed by 50% gives 2s. This Chinese wording issue is separate from the English value's disagreement with the implementation evidence above; it does not establish the English verdict.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_drone_debuff_talent`, hash `b22811f4`, entry 11478: **Fear of Justice**.
- Description key `loc_talent_adamant_drone_debuff_talent_desc`, hash `b1b69549`, entry 11447.

Full raw template:

```text
The time between affected Enemies' Melee Attacks, is increased by {attack_speed_reduction:%s}, and their Melee Attacks deal {damage_reduction:%s} less Damage.
```

Both mappings use `talent_settings.blitz_ability.drone`. Their explicit manipulations replace the default percentage multiplication; no mapping specifies a `+` prefix. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| attack_speed_reduction | −0.25 | Explicit manipulation returns fixed 50 → 50% |
| damage_reduction | −0.25 | Explicit abs(value) × 100 → 25% |

Static reconstruction; not an observed game screen:

```text
The time between affected Enemies' Melee Attacks, is increased by 50%, and their Melee Attacks deal 25% less Damage.
```

## English comparison limits

The independently read English matches the affected enemies and melee-damage reduction. Its 50% interval increase contradicts the accepted static duration derivation under the stated assumptions. The area lifecycle, minimum-duration qualification and calculation examples are supplementary. This is an English-source discrepancy, independently judged from the template and existing mechanism evidence. Actual game behavior remains unobserved; mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_drone_debuff_talent.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/483804fa-b052-4baa-b3d7-5e7dbfbe44f4). The icon identifies the talent; it is not mechanism evidence.
