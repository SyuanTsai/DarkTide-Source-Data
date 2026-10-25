# Chordclaw Strike: source evidence

[繁體中文](../cryptic_chordclaw.md) | [Player description](README.md#cryptic_chordclaw) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_chordclaw)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_chordclaw`; name key `loc_talent_cryptic_chordclaw`; description key `loc_talent_cryptic_chordclaw_desc`. Node `node_2214fc60-12a4-4108-84e4-64b146f9b86b`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Player Ability costs 1 charge per use, stores at most 3 charges, costs 50 points per charge and naturally restores 1 point/s. The talent text specifies a Chordclaw Heavy Attack. The weapon's default Heavy sticky stab, `action_heavy_sticky_attack_1`, sets `guaranteed_crit = true` and uses the `chordclaw_main` profile.
- After activation, the `cryptic_chordclaw` effect gives `melee_damage = 0.3`, `melee_rending_multiplier = 0.5` and the `stun_immune` keyword. These are attack-calculation modifiers and Stun immunity; they do not mean every hit removes an extra fixed 30 or 50 Health. Final damage depends on attack power, target protection, hit location and other modifiers.
- The effect has a 10s maximum and ends when switching away from the Combat Ability weapon slot. Holding the ability input charges the attack to full in 0.5s through its charge template. Other talents can change the ability's attack pattern to a horizontal sweep, a quick stab or other variants.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L474-L493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L474-L493)
- [scripts/settings/talent/talent_settings_cryptic.lua — L133-L143](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L133-L143)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L142-L168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L142-L168)
- [scripts/settings/ability/ability_templates/cryptic_chordclaw.lua — L47-L99](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_chordclaw.lua#L47-L99)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua — L561-L675](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L561-L675)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua — L120-L212](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L120-L212)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L881-L942](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L881-L942)
- [scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua — L98-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L98-L110)
- [scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua — L25-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua#L25-L65)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L474-L493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L474-L493)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L237-L266](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L237-L266)

## Example assumptions and limits

- **How it works**: Activating Chordclaw Strike costs 1 charge of Capacitance. The base capacity is 3 charges, which other talents can increase. The Chordclaw Heavy Attack is a guaranteed Critical Strike and has 50% more Rending.
- **How it works**: The active Chordclaw effect also increases Melee Damage by 30% and grants Stun immunity. Rending affects damage calculations against protection; a guaranteed Critical Strike does not mean fixed Health damage against every enemy.
- **Damage example**: Considering only the 30% melee bonus, with armour, Critical Strike and other conditions held fixed, 100 damage becomes 100 × (1 + 30%) = 130. With another 20% bonus already in the same stage, it is 100 × (1 + 20% + 30%) = 150. Rending and Critical Strike effects are calculated separately for the target.
- **Charges and duration**: Each use consumes one 50-point Capacitance charge, taking 50s to restore without other recovery bonuses. The attack effect lasts at most 10s and ends when switching away from the Chordclaw. Repeated activations consume charges but do not retrigger ability effects that depend on the initial activation.

- Under the normal settings, one Chordclaw Strike costs 1 charge (50 points of Capacitance). The Heavy Attack's Critical Strike check is guaranteed and applies +50% Rending.
- Chordclaw hits while the effect is active have a +30% Melee Damage modifier and +50% Rending. Actual Health damage still depends on the target and hit location.
- Fifty percent Rending modifies protection-related damage calculation; it is not a direct 50% increase to Health damage. Likewise, +30% Melee Damage is not a fixed extra 30 Health damage.
- The attack/impact power values in a fixed damage profile are not Health-damage values directly usable for all enemies.
- The additional active Melee Damage modifier and Stun immunity are confirmed implementation details omitted by the original description; the omission is not an explicit contradiction.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_chordclaw`, hash `e1996142`, entry 14633: **Chordclaw Strike**.
- Description key `loc_talent_cryptic_chordclaw_desc`, hash `df29b524`, entry 14480.

Full raw template:

~~~text
Perform a Powerful Heavy Melee Attack using a Chordclaw. The Attack is a Guaranteed Critical Strike and has {rending:%s} Rending.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{rending:%s}` | 0.5 → +50% | `percentage`; explicit + prefix |

The minimally read display map is `cryptic_talents.lua` L474-L493. `rending` uses `chordclaw_ability.rending`, already verified as 0.5. The map also configures `dr` from `1 - damage_taken_multipler_while_wielding`, but the English template contains no dr placeholder; no additional value is needed for this reconstruction.

Static reconstruction; not an observed game screen:

~~~text
Perform a Powerful Heavy Melee Attack using a Chordclaw. The Attack is a Guaranteed Critical Strike and has +50% Rending.
~~~

## English comparison

The Chordclaw Heavy Attack, guaranteed Critical Strike and +50% Rending agree with the existing attack action and active effect. Active +30% Melee Damage, Stun immunity, charge resource settings, 10s/switch-away limit, 0.5s charging and alternate attack patterns supplement the original English. “Powerful” supplies no fixed damage amount.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability/cryptic_chordclaw.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/af7ec3de-6e36-4171-8be2-d385177b170e). The icon identifies the talent; it is not mechanism evidence.
