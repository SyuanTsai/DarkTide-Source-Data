# Voltaic Emitter: source evidence

[繁體中文](../cryptic_discharge.md) | [Player description](README.md#cryptic_discharge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_discharge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_discharge`; name key `loc_talent_cryptic_discharge`; description key `loc_talent_cryptic_discharge_desc`. Node `node_202342c8-045c-486b-aa66-75d636866621`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Player Ability consumes full ability charges, with a minimum of 1 and a maximum of 3. The common cost function clamps the current full-charge count to 1–3. Even if other effects raise capacity to 4 or 5 charges, one use still consumes at most 3. Fractional refill progress below another full charge is retained. The ability cost is deducted at action start, when the active-ability event is also sent.
- This is the enhanced Voltaic Emitter. Its main Discharge uses an Electrocution explosion template with a 12m radius, unchanged whether it consumes 1, 2 or 3 charges. Initial explosion attack and Impact power distributions are 0. Hits apply 2s of Electrocution; subsequent Electrocution damage at intervals of 0.3–0.8s deals actual Health damage. Actual damage and tick count vary by target and resolution.
- Consuming at least 2 charges also creates a Weapon Malfunction explosion 1.5m above the player, with a 30m radius. Its damage power is 0, but hits still call Weapon Malfunction handling. Enemies need the corresponding weapon-state component to exhibit the effect. Duration uses the enemy breed's setting, defaulting to 12s when no breed setting exists.
- Consuming at least 3 charges grants a 15s on-hit Electrocution effect. Non-killing melee or ranged hits can apply 2s of Electrocution to the target, with intervals of 0.3–0.8s and the Electrocution damage profile used for each tick.
- With the separate Voltaic Arcs talent, actual charges consumed determine forward arcs: one per charge, searching within 12m and less than 60 degrees from the forward viewing direction, subject to that talent's 5-arc cap. Since this ability consumes at most 3 charges per use, one use produces at most 3 arcs. The overload keystone's Capacitance stacks still use the actual active-ability cost event.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L105-L161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L105-L161)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L93-L115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L93-L115)
- [scripts/settings/ability/ability_templates/cryptic_discharge.lua — L22-L38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_discharge.lua#L22-L38)
- [scripts/extension_systems/weapon/actions/action_ability_base.lua — L25-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_ability_base.lua#L25-L39)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1487-L1511](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1487-L1511)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua — L35-L130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L35-L130)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua — L137-L185](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L137-L185)
- [scripts/settings/talent/talent_settings_cryptic.lua — L69-L96](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L69-L96)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L252-L277](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L252-L277)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L322-L336](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L322-L336)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua — L551-L640](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L551-L640)
- [scripts/settings/buff/weapon_buff_templates.lua — L2882-L2929](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2882-L2929)
- [scripts/settings/buff/weapon_buff_templates.lua — L2948-L2994](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2948-L2994)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L778-L841](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L778-L841)
- [scripts/utilities/minion_state.lua — L111-L139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L111-L139)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L773-L879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L879)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L105-L161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L105-L161)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1713-L1743](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1713-L1743)

## Example assumptions and limits

- **Charge consumption**: Activation consumes 1–3 currently full charges, at most 3 per use. With 4 or 5 charges, the extra charges remain; fractional progress below a full charge also remains.
- **Discharge effect**: Enemies hit within 12m are Electrocuted for 2s and take ongoing Electrocution damage. The main Discharge radius is 12m whether 1, 2 or 3 charges are consumed.
- **At least 2 charges consumed**: Also disrupts enemies within 30m that can receive Weapon Malfunction, normally for 12s. Some enemy durations differ.
- **3 charges consumed**: For the next 15s, your melee or ranged attacks hitting enemies that remain alive Electrocute them for 2s.
- **Consumption example**: At 185 points of Capacitance, you have 3 full charges and 70% progress towards a fourth. Activation consumes 3 × 50 = 150 points, leaving 35. With only natural recovery of 1 point/s, another usable charge takes (50 − 35) ÷ 1 = 15s.
- **Damage example**: The initial area effect does not directly remove Health; damage comes from subsequent Electrocution. Assuming each tick deals 10 damage to a particular target and this instance resolves 4 ticks, the total is 10 × 4 = 40. Actual damage and tick count vary with the target and resolution timing.

- With 5 full charges, activation consumes at most 3 and leaves 2, retaining any fractional progress towards another charge. The main radius remains 12m and the 15s on-hit Electrocution effect requiring at least 3 charges is granted.
- With only 1 full charge, one is consumed and the main radius is 12m. Fractional refill progress is not consumed.
- Consuming 2 charges gives the 12m main Discharge plus the 30m Weapon Malfunction pulse, but not the 15s attack Electrocution effect requiring 3 charges.
- The ability data confirms damage profiles, Electrocution duration and tick intervals. It does not establish the same total Health damage for every enemy or a fixed tick count.
- Weapon Malfunction explosion damage power is 0. Its effect depends on the enemy having the relevant weapon-state component, and breed settings can override the default 12s duration.
- Capacity of 5 charges does not mean one use can consume 5: this Player Ability's maximum cost per use is explicitly 3 charges.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_discharge`, hash `0c5b9c4a`, entry 793: **Voltaic Emitter**.
- Description key `loc_talent_cryptic_discharge_desc`, hash `1ffeaa91`, entry 2087.

Full raw template:

~~~text
Unleash an Electric Discharge around you. Enemies within {range:%s}m are Electrocuted for {duration:%s}s, Stunning them and dealing damage.

When using {talent_name:%s} at {charge_two:%s} charges or above, Ranged Enemies, within {far_range:%s}m, have their weapons Malfunction for {malfunction_duration:%s}s.

When using {talent_name:%s} at {charge_three:%s} charges or above, for the next {buff_duration:%s}s your attacks Electrocute enemies hit for {short_duration:%s}s, dealing damage.

This is an enhanced version of the Voltaic Expander ability.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{range:%s}` | 12 | `number`; m supplied by template |
| `{duration:%s}` | 2 | `number`; s supplied by template |
| `{talent_name:%s}` | Voltaic Emitter | `loc_string`; `loc_talent_cryptic_discharge` |
| `{charge_two:%s}` | 2 | `number` |
| `{far_range:%s}` | 30 | `number`; m supplied by template |
| `{malfunction_duration:%s}` | 12 | `number`; s supplied by template |
| `{charge_three:%s}` | 3 | `number` |
| `{buff_duration:%s}` | 15 | `number`; s supplied by template |
| `{short_duration:%s}` | 2 | `number`; s supplied by template |

The minimally read display map is `cryptic_talents.lua` L123-L161. All numeric values reuse verified evidence: range uses `ExplosionTemplates.cryptic_discharge_aoe_electrocution.radius`; far_range uses `weapon_malfunction_radius`; duration uses `stun_duration_base`; buff_duration uses `buff_duration`; short_duration uses `stun_duration_weapon`. The map supplies literal charge thresholds 2/3 and Malfunction duration 12. The ability name uses `loc_talent_cryptic_discharge` (hash `0c5b9c4a`, English entry 793).

Static reconstruction; not an observed game screen:

~~~text
Unleash an Electric Discharge around you. Enemies within 12m are Electrocuted for 2s, Stunning them and dealing damage.

When using Voltaic Emitter at 2 charges or above, Ranged Enemies, within 30m, have their weapons Malfunction for 12s.

When using Voltaic Emitter at 3 charges or above, for the next 15s your attacks Electrocute enemies hit for 2s, dealing damage.

This is an enhanced version of the Voltaic Expander ability.
~~~

## English comparison

The English main 12m/2s effect, two-charge 30m/default-12s Weapon Malfunction, three-charge 15s/2s on-hit Electrocution and enhanced-ability identity agree with the accepted evidence. The per-use 3-charge cap, retained surplus/fractional progress, cost-event timing, subsequent-tick damage, target-state/kill exclusions and breed duration overrides supplement the description. It supplies no fixed total Health damage or tick count.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability/cryptic_discharge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/637d6e54-1c81-434d-b5bc-d779d4d8674b). The icon identifies the talent; it is not mechanism evidence.
