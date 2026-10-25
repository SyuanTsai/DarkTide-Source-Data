# Sureshot Cogitator Sync: source evidence

[繁體中文](../cryptic_weakspot_damage.md) | [Player description](README.md#cryptic_weakspot_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_weakspot_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_weakspot_damage`; name key `loc_talent_cryptic_weakspot_damage`; description key `loc_talent_cryptic_weakspot_damage_desc`. Node `node_4efd9db8-0341-428b-9220-2c7aa8ff5de7`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `weakspot_damage = 0.25` is added to the finesse multiplier only on `hit_weakspot`. Total damage is `B + F × (1 + s + 0.25)`. The relative increase is `0.25F / [B + F × (1 + s)]`.
- `F` depends on the damage profile, armour-specific finesse boost, boost curve, critical-hit and hit-zone conditions. It cannot be inferred simply by subtracting body-hit damage from head-hit damage.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L60-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L109)
- [scripts/utilities/attack/damage_calculation.lua — L672-L782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/settings/talent/talent_settings_cryptic.lua — L399-L401](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L399-L401)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2237-L2243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2237-L2243)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1801-L1816](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1801-L1816)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L467-L496](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L467-L496)

## Example assumptions and limits

- **Effect**: Increases the **extra damage component of weakspot hits by 25%**, for both melee and ranged attacks.
- **Examples**: With a base component of 100 and an extra weakspot component of 100 for the same attack, damage goes from `200` to `100 + 100 × 1.25 = 225`, a 12.5% increase to the whole hit. If the extra component is 200, damage goes from `300` to `100 + 200 × 1.25 = 350`, an increase of approximately 16.67%.
- **Weapon differences**: The larger the extra weakspot component's share of damage, the larger the increase to the whole hit. Weapon model, charge level, target armour, hit zone and critical hits all affect the result.
- **Other bonuses**: If the extra weakspot component already has a 20% bonus in the same stage, damage becomes `100 + 100 × (1 + 20% + 25%) = 245`. It was 220 before this talent, so the increase is approximately 11.36%.

- The examples fix a non-critical hit and subsequent multipliers at 1. They are static derivations, not measurements for a specific weapon.
- With `B = 100`, `F = 100` and no existing same-stage bonus, the result is 200 → 225, or +12.5%. With `F = 200`, it is 300 → 350, or approximately +16.67%.
- With an existing same-stage 20% bonus on `F = 100`, the result is 220 → 245, approximately +11.36%.
- Weakspot Damage is shorthand in the English description. The extra-component calculation and variation across weapons supplement that term rather than establishing a text error. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_weakspot_damage`, hash `b4767d95`, entry 11636: **Sureshot Cogitator Sync**.
- Description key `loc_talent_cryptic_weakspot_damage_desc`, hash `6cd677cf`, entry 7069.

Full raw template:

~~~text
{weakspot_damage:%s} Weakspot Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `weakspot_damage` | +25% | `percentage`, prefix `+`: verified `talent_settings.cryptic_weakspot_damage.weakspot_damage = 0.25` |

The display mapping in `cryptic_talents.lua` L1809–L1815 uses the already verified weakspot stat value.

Static reconstruction; not an observed game screen:

~~~text
+25% Weakspot Damage.
~~~

## English comparison

The English names the Weakspot Damage stat and its +25% value, matching the verified weakspot-only finesse bonus. It does not explicitly claim that the complete hit is multiplied by 1.25. The extra-component formula, weapon and hit-condition differences, same-stage addition and preserved examples are supplementary details; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_weakspot_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/4d3197de-7f15-46b8-9df6-153fd0f94642). The icon identifies the talent; it is not mechanism evidence.
