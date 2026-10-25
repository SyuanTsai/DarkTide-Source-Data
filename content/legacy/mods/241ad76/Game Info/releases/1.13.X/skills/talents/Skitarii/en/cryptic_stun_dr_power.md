# Galvanized Coating: source evidence

[繁體中文](../cryptic_stun_dr_power.md) | [Player description](README.md#cryptic_stun_dr_power) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_stun_dr_power)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_stun_dr_power`; name key `loc_talent_cryptic_stun_dr_power`; description key `loc_talent_cryptic_stun_dr_power_desc`. Node `node_44c50f39-8997-4a6f-9676-16bac022defb`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `keywords.stun_immune` and `damage_taken_multiplier = 0.85` are unconditional.
- `on_damage_taken` requires self as the target and `on_melee_hit`, and excludes the disabled state. It does not check `damage_amount > 0`, so a melee hit event that damages only Toughness may also incur the cost.
- `consume_ability_charge_percentage(0.075)` uses one charge's resource cost as its basis and clamps spending to available resources. It does not gate the defensive stats.

## Fixed source evidence

- [scripts/utilities/attack/damage.lua — L154-L178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L178)
- [scripts/utilities/attack/damage.lua — L202-L225](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L202-L225)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1011-L1078](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1011-L1078)
- [scripts/utilities/attack/damage_calculation.lua — L584-L611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L584-L611)
- [scripts/settings/talent/talent_settings_cryptic.lua — L527-L530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L527-L530)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2972-L3024](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2972-L3024)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2216-L2242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2216-L2242)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2066-L2096](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2066-L2096)

## Example assumptions and limits

- **Defence**: Gain immunity to ordinary hit Stun and take 15% less damage. Both defensive effects remain even with insufficient Capacitance.
- **Resource cost**: Taking melee damage spends 7.5% of one Capacitance charge. Only existing resources are spent; they cannot go negative. This cost is not charged while you are already disabled.
- **Calculation example**: With a base natural recovery time of 50 seconds per charge, 7.5% equals `50 × 7.5% = 3.75` seconds of natural recovery. An original 100 damage becomes `100 × 0.85 = 85`.

The calculation uses the base 50-second natural charge recovery time and isolates the damage-taken multiplier. The spending basis is one charge, not the full multi-charge capacity. Stun immunity covers the verified ordinary hit keyword rather than every disabling action.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_stun_dr_power`, hash `e854ba74`, entry 15081: **Galvanized Coating**.
- Description key `loc_talent_cryptic_stun_dr_power_desc`, hash `bb527abc`, entry 12074.

Full raw template:

~~~text
You are Stun Immune and have {damage:%s} Damage Resistance. Taking Melee Damage spends {power:%s} {capacitance_keyword:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.85` → `15` → `+15%` | `round(100 × (1 − value))`, percentage with `+` prefix. |
| `power` | `0.075` → `7.5%` | Percentage; no added prefix. |
| `capacitance_keyword` | `Capacitance` | `loc_string`: `loc_talent_cryptic_power_keyword`. |

Display mappings are `cryptic_talents.lua` L2224-L2241; the previously checked percentage formatter is reused. Keyword key `loc_talent_cryptic_power_keyword`, hash `ecc15a9f`, entry 15388, has full literal text `Capacitance` in the same English resource. Numeric values reuse the verified settings above.

Static reconstruction; not an observed game screen:

~~~text
You are Stun Immune and have +15% Damage Resistance. Taking Melee Damage spends 7.5% Capacitance.
~~~

## English comparison

The English correctly names Stun immunity, +15% Damage Resistance and a 7.5% Capacitance cost on melee damage. It does not explicitly require a minimum Capacitance balance to keep the defensive effects. The ordinary hit keyword scope, one-charge basis, available-resource clamp, disabled exclusion and possible Toughness-only cost are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stun_dr_power.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/e3f4e5a5-52c8-489e-a83f-3bf13c80eca8). The icon identifies the talent; it is not mechanism evidence.
