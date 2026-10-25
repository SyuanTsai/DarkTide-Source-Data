# Voltaic Expander: source evidence

[繁體中文](../cryptic_discharge_base.md) | [Base effect](BASE_EFFECTS.md#cryptic_discharge_base) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_discharge_base)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_discharge_base`; name key `loc_talent_cryptic_discharge_base`; description key `loc_talent_cryptic_discharge_base_desc`. Base effect; no selectable talent point cost. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `cryptic_discharge_base` connects to `PlayerAbilities.cryptic_discharge_base`. The ability's charge-use cost range is **1–3**. `get_num_ability_charges_to_use` clamps the current full-charge count to that range, so activation spends up to **3 full charges**, preserving any beyond three.
- The base ability's `action_activate` spends the cost at the start. `ActionCrypticDischarge` selects the `base`, `base_two`, or `base_three` explosion template from the number spent, with radii **6 / 9 / 12 metres**.
- Each charge costs the general Combat Ability cooldown resource of **50 seconds**. Base natural recovery is **1 resource point/second**, giving **50 seconds** per full charge and **150 seconds** for three empty charges.
- The discharge explosion damage profile has both attack and Impact power distributions set to **0**. Its explosion on-hit applies `cryptic_discharge_shock` for **2 seconds**, executing electrical damage at **0.3–0.8-second** intervals. That damage profile uses the default power curve, attack power **25** and Impact power **100**. This talent definition alone therefore supplies no fixed enemy Health damage total.

## Fixed source evidence

- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L58-L104)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L100)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_discharge_base.lua#L18-L43)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_ability_base.lua#L25-L41)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1487-L1508)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L52-L108)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L252-L334)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L551-L595)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2882-L2921)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1204-L1243)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L1-L17)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L846-L875)

## Example assumptions and limits

- **Consumption**: Spend the **1–3 full charges** currently available, up to **3** in one activation. Partial progress and any full charges beyond three remain.
- Spending **1 charge** gives a **6-metre** radius; **2 charges**, **9 metres**; **3 charges**, **12 metres**.
- The discharge Electrocutes enemies in range for **2 seconds**, causing ongoing damage. Actual Health damage varies with enemy armour and damage calculation.
- **Charge example**: Starting with **2.4 charges**, spend **2** and retain **0.4**. If other talents allow **4.4 charges**, spend **3** and retain **1.4**.

- With only **1 full charge**, activation spends it for a **6-metre** radius; partial progress toward the next charge remains in the pool.
- With **2 full charges**, one activation spends both for a **9-metre** radius, equivalent to `50 × 2 = 100` seconds of natural charge recovery cost.
- With **3 full charges**, activation spends three for a **12-metre** radius; natural recovery from empty takes `50 × 3 = 150` seconds.
- Static evidence confirms the radii, Electrocution duration and damage templates. Enemy armour, Health damage calculation and actual tick count affect the result; no fixed damage total is given.
- The electrical damage uses **0.3–0.8-second** intervals and an initial frame offset, so identical tick counts must not be assumed.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_discharge_base`, hash `8454232a`, entry 8609: **Voltaic Expander**.
- Description key `loc_talent_cryptic_discharge_base_desc`, hash `a2ee7263`, entry 10526.

Full raw template:

~~~text
Unleash an Electric Discharge around you. Enemies within {range:%s}m are Electrocuted for {duration:%s}s, Stunning them and dealing damage.

When using {talent_name:%s} at {charge_two:%s} charges or above, extend the Range to {range_two:%s}m.

When using {talent_name:%s} at {charge_three:%s} charges or above, extend the Range to {range_three:%s}m.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{range:%s}` / `{range_two:%s}` / `{range_three:%s}` | `6` / `9` / `12` | Number; template adds `m` |
| `{duration:%s}` | `2` | Number; template adds `s` |
| `{charge_two:%s}` / `{charge_three:%s}` | `2` / `3` | Number |
| `{talent_name:%s}` | Voltaic Expander | Localized name; `loc_talent_cryptic_discharge_base` |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L74-L103) supplies the three explosion radii, `stun_duration_base`, literal charge thresholds `2` and `3`, and the paired English name. Verified values are reused.

Static reconstruction; not an observed game screen:

~~~text
Unleash an Electric Discharge around you. Enemies within 6m are Electrocuted for 2s, Stunning them and dealing damage.

When using Voltaic Expander at 2 charges or above, extend the Range to 9m.

When using Voltaic Expander at 3 charges or above, extend the Range to 12m.
~~~

## English comparison

The English matches the discharge, two-second Electrocution and radius tiers at one, two and three charges. The three-charge spending cap, preservation of excess/partial resources, zero direct explosion damage and variable electrical ticks are supplementary details. No explicit English contradiction was found.
