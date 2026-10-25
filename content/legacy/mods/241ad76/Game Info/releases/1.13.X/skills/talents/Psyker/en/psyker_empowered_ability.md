# Empowered Psionics: source evidence

[繁體中文](../psyker_empowered_ability.md) | [Player description](README.md#psyker_empowered_ability) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_empowered_ability)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_empowered_ability`; name key `loc_talent_psyker_empowered_ability`; description key `loc_talent_psyker_empowered_ability_description`. Node `node_8d367c1d-ce78-44f3-a7b8-6a4b55341929`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Internal `charges` have a base cap of one. The `on_hit` chance is 0.1, followed by the `on_kill` check; a success adds one, clamped to the cap. There is no duration or natural expiry. The additional `visual_buff` stack and `max_stat_stacks = 1` do not represent a second usable empowerment.
- `smite_damage +0.5` adds with Damage bonuses at the same stage. `smite_damage_multiplier = 1.5` comes from Brain Rupture itself and is a separate multiplicative factor. `ActionSmiteTargeting` applies `smite_attack_speed +0.5` through `charge_time / attack_speed`, so the time is divided by 1.5. Talent `format_values` describe halving cast time, which differs from that execution formula.
- Empowered Assail first selects the piercing projectile through a weapon-template keyword. For the first target, normal attack distribution changes from 225 to 350 and aimed attack distribution from 380 to 500. Attack/impact cleave changes from two to four. Attack distributions also differ by hit order, so the increase is not identical for every target. These power-distribution values pass through the shared Damage calculation and are not final Damage.
- Before payment at `fire_time`, `ActionSpawnProjectile` checks `psyker_empowered_grenade` and `action_settings.psyker_smite` and skips `_pay_for_projectile` while still invoking `_proc_buffs`. This avoids the throw's Blitz-stock and Peril payment, but `on_shoot_projectile` still removes one internal empowered charge. 'Does not consume any charges' and consumption of an empowerment stack refer to different resources and are compatible.
- `chain_lightning_damage +2` adds at the general Damage stage. Although `chain_lightning_jump_time_multiplier = 0.5` is declared, `chain_lightning.lua` L494 uses `chain_settings.jump_time or DEFAULT_JUMP_TIME * stat_buff_jump_time`. Current quick-cast, charged and direct-target-seeking templates explicitly set `jump_time = 0.3`; this path therefore takes 0.3 without applying 0.5. `ActionChainLightning` uses the returned value to schedule the next jump. `0.3 × 0.5 = 0.15` cannot be treated as an active result in this version.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L616-L721](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L616-L721)
- [scripts/settings/talent/talent_settings_psyker.lua — L310-L315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L310-L315)
- [scripts/settings/talent/talent_settings_psyker.lua — L340-L341](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L340-L341)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2245-L2269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2245-L2269)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2271-L2387](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2271-L2387)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2388-L2487](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2388-L2487)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua — L12-L20](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L12-L20)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua — L56-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L56-L65)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua — L16-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua#L16-L34)
- [scripts/settings/projectile/player_projectile_templates.lua — L567-L619](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L567-L619)
- [scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua — L288-L393](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L288-L393)
- [scripts/extension_systems/weapon/actions/action_spawn_projectile.lua — L218-L244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L218-L244)
- [scripts/extension_systems/weapon/actions/action_smite_targeting.lua — L153-L162](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L153-L162)
- [scripts/utilities/attack/damage_calculation.lua — L507-L525](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L507-L525)
- [scripts/utilities/action/chain_lightning.lua — L455-L497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L455-L497)
- [scripts/extension_systems/weapon/actions/action_chain_lightning.lua — L451-L475](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L451-L475)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua — L82-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L82-L89)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L616-L721](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L616-L721)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1296-L1325](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1296-L1325)

## Example assumptions and limits

- **Gaining and spending empowerment:** Kills have a 10% chance to grant one empowerment stack, with a base storage limit of one. Each empowered Blitz spends one stack; Smite spends it when that continuous cast ends.

- **Brain Rupture:** Generates no Peril, gains +50% Damage and +50% charge speed. Without other Damage bonuses, `100 × 1.5 = 150`. A two-second charge becomes `2 ÷ 1.5 ≈ 1.33` seconds, about 33.3% shorter.

- **Smite:** Gains +200% Damage. Without other Damage bonuses, `100 × (1 + 200%) = 300`.

- **Assail:** Generates no Peril and spends no throw charges, with increased Damage and piercing capacity; it still spends one empowerment stack. Cleave capacity rises from two to four, or `4 ÷ 2 = 2` times the capacity. The number of enemies actually pierced depends on enemies and hit conditions.

- **Chance example:** If storage is available on every kill, 100 kills give an expected `100 × 10% = 10` empowerments; there is no guaranteed trigger every ten kills.

Charge time still depends on other speed and action modifiers. Damage examples assume no other bonuses at that stage; Assail hit order and armour require separate calculation. The English and Chinese both describe Brain Rupture's cast-time reduction, while the accepted source applies +50% charge speed; this is a difference between text and source, not a Chinese mistranslation. The declared Smite spread modifier is not applied to the explicit 0.3-second interval in this version's accepted execution path. These differences remain pending in-game comparison. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_empowered_ability`, hash `9bac9dab`, entry 10047: **Empowered Psionics**.
- Description key `loc_talent_psyker_empowered_ability_description`, hash `8b4a7ea9`, entry 9018.

Full raw template:

~~~text
Kills have a {chance:%s} chance to Empower your next Blitz.

Empowered {blitz_one:%s}:
{smite_cost:%s} Peril Cost Reduction
{smite_attack_speed:%s} Cast time Reduction
{smite_damage:%s} Damage

Empowered {blitz_two:%s}:
{chain_lightning_damage:%s} Damage
{chain_lightning_jump_time_multiplier:%s} faster spread between enemies

Empowered {blitz_three:%s}:
{throwing_knives_cost:%s} Peril Cost Reduction.
Base Damage increase from {throwing_knives_old_damage:%s} to {throwing_knives_new_damage:%s}.
Does not consume any charges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `chance` | 0.1 | Percentage: 10%. |
| `blitz_one` | `loc_talent_psyker_brain_burst_improved` | Localized string: Brain Rupture; hash `c3b5cefd`, entry 12622. |
| `smite_cost` | 1 − 0 = 1 | Percentage: 100% Peril Cost Reduction. |
| `smite_attack_speed` | 0.5 | Percentage: 50% Cast time Reduction, as the template says. |
| `smite_damage` | 0.5 | Percentage with `+` prefix: +50%. |
| `blitz_two` | `loc_ability_psyker_chain_lightning` | Localized string: Smite; hash `eb65c907`, entry 15301. |
| `chain_lightning_damage` | 2 | Percentage with `+` prefix: +200%. |
| `chain_lightning_jump_time_multiplier` | 0.5 | Percentage: 50%. |
| `blitz_three` | `loc_ability_psyker_blitz_throwing_knives` | Localized string: Assail; hash `9cd7d808`, entry 10129. |
| `throwing_knives_cost` | 1 | Percentage: 100%. |
| `throwing_knives_old_damage` | `base_damage` for `psyker_throwing_knives` at default power 500 | Numeric display value unresolved; retain the token. |
| `throwing_knives_new_damage` | `base_damage` for `psyker_throwing_knives_pierce` at default power 500 | Numeric display value unresolved; retain the token. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L616-L712 supplies the chance and empowered buff values, localized Blitz names and the Peril-cost reductions. `throwing_knives_charges = 0` is mapped but not used in this raw template. The two Assail Damage placeholders use `find_value_type = "base_damage"`, their respective Damage profiles and `PowerLevelSettings.default_power_level`. A minimal display-only read of [talent_layout_parser.lua L438-L464 and L505-L509](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L438-L509) confirms that the formatter returns the shared calculation's `base_damage`; [power_level_settings.lua L9](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L9) supplies 500. The accepted power distributions alone do not establish these displayed numbers. Resolving them would require extending the calculation trace, so they remain unresolved in this partial reconstruction rather than being replaced with 225/350. All other values reuse verified evidence and the same-build English entries.

Static reconstruction; not an observed game screen:

~~~text
Kills have a 10% chance to Empower your next Blitz.

Empowered Brain Rupture:
100% Peril Cost Reduction
50% Cast time Reduction
+50% Damage

Empowered Smite:
+200% Damage
50% faster spread between enemies

Empowered Assail:
100% Peril Cost Reduction.
Base Damage increase from {throwing_knives_old_damage:%s} to {throwing_knives_new_damage:%s}.
Does not consume any charges.
~~~

## English comparison

The English agrees with the kill chance, Damage bonuses and removal of Peril/Assail throw-stock costs. Its '50% Cast time Reduction' explicitly differs from the accepted +50% charge-speed formula, which gives time ÷ 1.5, about 33.3% shorter. Its '50% faster spread between enemies' also differs from the accepted Smite path, which takes the explicit 0.3-second jump interval without applying the 0.5 modifier. These are English text/source contradictions at the fixed version, with actual in-game behavior still unobserved. Assail's 'Does not consume any charges' refers to Blitz stock; consuming one empowerment stack is not a contradiction. Storage, event timing, cleave and hit-order details are supplements. The precise two Assail Base Damage display values remain unresolved after the minimal formatter read; no numeric contradiction is inferred from unfilled tokens.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone/psyker_empowered_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/d3625057-f314-491b-8a34-84789ec38342). The icon identifies the talent; it is not mechanism evidence.
