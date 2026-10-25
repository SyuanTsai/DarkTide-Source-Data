# Precision Strikes: source evidence

[繁體中文](../veteran_increased_weakspot_damage.md) | [Player description](README.md#veteran_increased_weakspot_damage) | [Technical index](SOURCE_INDEX.md) | [English description comparison](LOCALIZATION_COMPARISON.md#veteran_increased_weakspot_damage)

- Implementation: Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`.
- Talent: `veteran_increased_weakspot_damage`; ordinary passive node, one point, one rank. [Talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L125-L153); [Talent definition and display parameter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1004-L1020).
- Original English: Steam Build `25606770`, extracted 2026-10-02; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; `en`, language code `0`.
- English UI export SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- Name key: `loc_talent_veteran_increased_weakspot_damage`, hash `c82bfb26`: `Precision Strikes`.
- Description key: `loc_talent_veteran_increased_weakspot_damage_desc`, hash `8c42b6fb`.

## Source-confirmed mechanism

The talent installs `veteran_increased_weakspot_damage` as passive identifier `veteran_base_passive_1`. Its buff grants `weakspot_damage = 0.30`, without a proc, timed duration or stack-building condition in this template. The shared talent extension installs passive buffs on the owner. [Talent definition and display parameter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1004-L1020); [Weakspot damage setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L110-L112); [Passive buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2115-L2121); [Passive installation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/talent/player_unit_talent_extension.lua#L164-L175).

`weakspot_damage` is an `additive_multiplier` with neutral value `1`. The buff extension initializes a stat table whose missing values resolve to that neutral value; it resets modified stats before aggregating the active buffs. `Buff._calculate_stat_buffs` adds this buff's `0.30` to the existing stat. Buffs start with one stack, and this template's default stat-stack limit is one. Thus this talent alone makes the stat `1 + 0.30 = 1.30`; it does not replace it with `0.30` or create repeated stacks. [Stat type and neutral values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1025-L1059); [Lazy stat base values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L29-L38); [Stat table initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L72-L83); [Stat reset and buff iteration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L318-L354); [Initial buff stack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L56-L74); [Stat stack limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410); [Buff._calculate_stat_buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L681-L737).

The shared `_finesse_boost_damage` function includes this stat only inside `if hit_weakspot`. Both melee and ranged weakspot hits use it; their specific weakspot stats and other applicable finesse modifiers join the same additive stage. A critical hit that misses the weakspot does not receive this talent's contribution. [Shared _finesse_boost_damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L783).

The function first derives `base_finesse_damage` from the attack profile, armor-specific weakspot boost, hit zone, any permitted critical boost, boost curve, weapon interpolation, rending and finesse damage floor. On a critical weakspot hit, weakspot and critical boost amounts are combined before the curve, and the combined amount is capped at `1` when that curve is used. The resulting single component is multiplied by the combined finesse modifier. This talent contributes `+0.30` once to that modifier; it does not apply once for weakspot and again for critical damage. [Shared _finesse_boost_damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L783).

The profile flags `no_finesse_boost` and `no_crit_boost` govern their respective boost contributions. A disabled weakspot boost does not by itself prove that this talent gives zero additional damage: the critical contribution or finesse minimum may still leave a nonzero component. When that component is zero, multiplying it by the extra `0.30` gives zero. [Shared _finesse_boost_damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L783).

## Percentage and hit-damage derivation

Define quantities at the stage immediately before the addition at damage-calculation line 95:

- `B`: the non-finesse damage of this same hit, after its armor/rending calculation at line 87, in damage units.
- `F`: `base_finesse_damage` from line 708 or 710, before the finesse modifier, in damage units.
- `s`: all other applicable additive contributions to this hit's combined finesse modifier, expressed as a fraction. It includes only contributions at this stage; it is not a general sum of all damage bonuses.

For a weakspot hit with the same attack, target, armor, hit zone, range and other conditions before and after selecting this talent:

```text
Before = B + F × (1 + s)
After  = B + F × (1 + s + 0.30)
Added damage = 0.30 × F
Relative increase = (0.30 × F) / [B + F × (1 + s)]
```

The relative increase requires positive before-damage. These formulas isolate this settlement stage. Backstab, flanking, hit-zone and armor-type modifiers, damage over time modifiers and diminishing returns occur later and require their own tracing for a specific final-hit calculation. [Damage stage and downstream ordering](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L110); [Shared _finesse_boost_damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L783).

### Controlled examples

Each example assumes a noncritical weakspot hit, a fixed attack and target, and no other changes. Later damage modifiers are `1`, later added damage is zero, and there is no later cap or diminishing-return change. Values are illustrative damage units, without attribution to a weapon.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| `B = 100`, `F = 40`, `s = 0` | Before `100 + 40 = 140`; after `100 + 40 × 1.30 = 152`; gain `12 / 140 ≈ 8.57%`. | The extra component rises from 40 to 52 damage units; the whole hit gains 12 units. |
| `B = 100`, `F = 100`, `s = 0` | Before `100 + 100 = 200`; after `100 + 100 × 1.30 = 230`; gain `30 / 200 = 15%`. | Equal base and extra components give a 15% whole-hit increase. |
| `B = 100`, `F = 200`, `s = 0` | Before `100 + 200 = 300`; after `100 + 200 × 1.30 = 360`; gain `60 / 300 = 20%`. | A larger extra component makes the talent worth a larger share of the whole hit. |
| `B = 100`, `F = 100`, `s = 0.25` | Before `100 + 100 × 1.25 = 225`; after `100 + 100 × 1.55 = 255`; gain `30 / 225 ≈ 13.33%`. | The talent adds 30 percentage points to the component multiplier; with the existing bonus, the component itself rises by `1.55 / 1.25 − 1 = 24%`. |

These results do not establish a fixed benefit for a Lucius-pattern lasgun, an autogun or any other named weapon. `B` is specific to this weakspot hit; a body hit can use different armor and hit-zone conditions. Subtracting body-shot damage from headshot damage does not generally isolate `F`. A weapon comparison must specify its model, attack/charge, target, hit zone, distance and critical state, and trace the remaining calculation stages. [Damage stage and downstream ordering](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L110); [Shared _finesse_boost_damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L783).

## Original English template and reconstruction

Full raw English description, hash `8c42b6fb`:

```text
{damage:%s} Weak Spot Damage.
```

| Parameter | Definition | Reconstructed value |
|---|---|---|
| `damage` | `format_type = percentage`, `prefix = "+"`, `value = talent_settings_2.passive_1.weakspot_damage = 0.30` | `+30%` |

The percentage formatter multiplies `0.30` by `100` and appends `%`. The parameter builder adds the `+` prefix, and localization substitutes the resulting string into `{damage:%s}`. [Talent definition and display parameter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1004-L1020); [Weakspot damage setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L110-L112); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L354-L404); [Formatting parameters and prefix](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Description localization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L690-L713); [Template interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/localization/localization_manager.lua#L285-L320).

Static plain-text reconstruction, retaining the original spelling and punctuation:

```text
+30% Weak Spot Damage.
```

This is a reconstruction without runtime color markup, not an observed game screen. The English text correctly identifies the weakspot damage stat and magnitude. It omits the component formula, attack-type scope, critical combination and existing-bonus settlement; it does not explicitly claim a 30% increase to the whole hit. No English player-page erratum is supported by this comparison.

## Limits

Source-confirmed branches and arithmetic examples have been reviewed statically. Final game UI, in-game damage, named-weapon comparisons and every downstream special damage path have not been tested. No unsupported named-weapon percentages are inferred from these examples.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increased_weakspot_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/d10f9131-4785-4bff-91a6-af630759b2dd)

The image identifies the talent; it is not mechanism evidence.
