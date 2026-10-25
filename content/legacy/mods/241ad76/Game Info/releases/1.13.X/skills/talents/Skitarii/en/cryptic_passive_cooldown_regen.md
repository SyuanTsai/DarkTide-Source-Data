# Motive Engine: source evidence

[繁體中文](../cryptic_passive_cooldown_regen.md) | [Base effect](BASE_EFFECTS.md#cryptic_passive_cooldown_regen) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_passive_cooldown_regen)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_passive_cooldown_regen`; name key `loc_talent_cryptic_passive_cooldown_regen`; description key `loc_talent_cryptic_passive_cooldown_regen_desc`. Base effect; no selectable talent point cost. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `talent_settings_cryptic.lua` sets `PASSIVE_COOLDOWN_REGENERATION_PERCENT_PER_SECOND = 0.02`; the general cooldown time is its reciprocal, **50 seconds**. The matching `cryptic_passive_cooldown_regen` setting also uses **0.02**.
- Combat Ability data set `resource_regen_per_second = 1`, `resource_cost_per_charge = cooldown = 50`, and `max_charges = 3`. Natural recovery is `1 / 50 = 0.02` charges/second. The internal resource cap is `3 × 50 = 150`, taking **150 seconds** to refill from empty.
- `cryptic_ability_recharge` checks `on_kill`: ordinary enemies restore **0.02**, while `elite` or `special` tags restore **0.04**. It returns early when the `cryptic_precision_stance` keyword is present. `restore_ability_charge_percentage` multiplies the fraction by one charge's cost, rather than the total three-charge capacity.
- The matching passive buff's `combat_ability_resource_regen_modifier = 0` is neutral in the additive-multiplier calculation; base natural recovery still uses `resource_regen_per_second`. The settings `base_charges`, `charge_gain`, `min_charge`, `max_charge`, and `max_power` are read by `format_values`, rather than serving as ability-resource runtime fields. The runtime cap comes from the ability's `max_charges = 3`.
- During Advanced Combat Doctrine, base natural recovery of **1 resource point/second** cancels the equal while-active cost. The stance separately drains **10% of one charge per second** and **1% per shot** from the same pool; reloading pauses the per-second drain.
- The resource description gives a general one-to-three-charge model. Individual Combat Abilities use one charge, up to three charges, or fractional and ongoing costs; use each ability's verified rules.

## Fixed source evidence

- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L1-L17)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1531-L1586)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L100)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L283-L356)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2083-L2089)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L846-L875)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L742)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L99-L101)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L126-L140)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L449-L513)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1390-L1402)

## Example assumptions and limits

- Capacitance percentages use **one Combat Ability charge**. Natural recovery is **2% per second**, so one full charge takes **50 seconds**; three empty charges take **150 seconds** to refill.
- **Kill recovery**: An ordinary kill restores **2% of one charge**; an Elite or Specialist kill restores **4%**. At **50 points per charge**, these are `50 × 2% = 1` point and `50 × 4% = 2` points. This kill recovery is not increased by **Redline Capacitors**.
- While **Advanced Combat Doctrine** is active, kills do not trigger this additional recovery; the stance itself spends Capacitance.

- One empty charge naturally refills by `50 seconds × 2% per second = 100%`. Three empty charges take `50 × 3 = 150` seconds.
- While missing a full charge's progress, an ordinary kill restores `2% × 50 seconds = 1` second of natural recovery equivalent; an Elite or Specialist kill restores `4% × 50 seconds = 2` seconds equivalent.
- Kill recovery uses one charge's resource cost; do not multiply it by the three-charge capacity. The kill proc is skipped during Advanced Combat Doctrine.
- Some display fields do not participate in runtime resource calculation; the three-charge runtime cap comes from the ability data.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_passive_cooldown_regen`, hash `f57f4b1c`, entry 15946: **Motive Engine**.
- Description key `loc_talent_cryptic_passive_cooldown_regen_desc`, hash `cc7d6ab9`, entry 13216.

Full raw template:

~~~text
Your Abilities are powered by your {talent_name:%s}.

You have {num_base_charges:%s} Base Charges. Abilities require at least {min_charge:%s} Charge(s) to be activated, and will Spend up to {max_charge:%s} Charge(s), providing additional effects for each Charge.

Generate {power:%s} {capacitance_keyword:%s} each second. At {max_power:%s} {capacitance_keyword:%s} you generate {gained_charges:%s} Charge and the {capacitance_keyword:%s} is reset. You also generate {kill_power:%s} {capacitance_keyword:%s} on Kills, increased to {elite_power:%s} on Elite or Specialist Kill.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{talent_name:%s}` | Motive Engine | Localized name; `loc_talent_cryptic_passive_cooldown_regen` |
| `{num_base_charges:%s}` / `{min_charge:%s}` / `{max_charge:%s}` | `3` / `1` / `3` | Number |
| `{power:%s}` | `0.02` → `2%` | Percentage |
| `{max_power:%s}` | `1` → `100%` | Percentage |
| `{gained_charges:%s}` | `1` | Number |
| `{kill_power:%s}` / `{elite_power:%s}` | `0.02` / `0.04` → `2%` / `4%` | Percentage |
| `{capacitance_keyword:%s}` | Capacitance | Localized keyword; `loc_talent_cryptic_power_keyword`, hash `ecc15a9f`, entry 15388 |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L1540-L1585) supplies the listed fields. Missing display-only counts and maximum percentage reuse `talent_settings_cryptic.lua` L11-L17. The same-build English name and previously paired Capacitance keyword are used; the mapping's `power_keyword` is not a placeholder in this template.

Static reconstruction; not an observed game screen:

~~~text
Your Abilities are powered by your Motive Engine.

You have 3 Base Charges. Abilities require at least 1 Charge(s) to be activated, and will Spend up to 3 Charge(s), providing additional effects for each Charge.

Generate 2% Capacitance each second. At 100% Capacitance you generate 1 Charge and the Capacitance is reset. You also generate 2% Capacitance on Kills, increased to 4% on Elite or Specialist Kill.
~~~

## English comparison

The English matches the base three-charge resource, single-charge recovery cycle, natural 2% rate and 2%/4% kill recovery. Its general “up to 3” wording does not assert that every ability spends three charges. Individual activation/fractional/ongoing costs, the one-charge percentage basis, display-versus-runtime fields, and Advanced Combat Doctrine's recovery restrictions supplement this resource overview. No explicit English contradiction was found.
