# Ethereal Shards: source evidence

[繁體中文](../psyker_throwing_knives_piercing.md) | [Player description](README.md#psyker_throwing_knives_piercing) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_throwing_knives_piercing)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_throwing_knives_piercing`; name key `loc_talent_psyker_throwing_knives_pierce`; description key `loc_talent_psyker_throwing_knives_pierce_description`. Node `node_df9852a3-36e2-40ab-bd6b-c8ce430cfaa4`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At the fixed source SHA, the tree node installs `psyker_throwing_knives_piercing`. Its buff sets both `psyker_smite_max_hit_mass_attack_modifier` and `psyker_smite_max_hit_mass_impact_modifier` to +0.5. `buff_settings.lua` classifies both as `additive_multiplier`, so with no other modifiers to the same stat, the retrieved value is the base 1 plus 0.5, or 1.5.
- Assail's base damage profile has `psyker_smite=true`. Shared `DamageProfile.max_hit_mass` reads the Psyker-specific multipliers only for such profiles and multiplies the maximum attack and impact hit mass separately. Thus the attack/impact hit-mass limits calculated for that attack each become 1.5 times their original values.
- The limit measures hit mass, rather than target count. Enemy masses, the original profile's calculated result, other multipliers and the projectile's hit-mass removal rules together determine actual penetration count. The `psyker_throwing_knives_pierce` profile is a separate projectile variant selected by the `psyker_empowered_grenade` keyword; that variant profile cannot by itself be mistaken for a fixed +1-target effect from this talent.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L317-L339](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L317-L339)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L722-L737](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L722-L737)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2781-L2788](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2781-L2788)
- [scripts/settings/buff/buff_settings.lua — L931-L932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L931-L932)
- [scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua — L288-L320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L288-L320)
- [scripts/utilities/attack/damage_profile.lua — L36-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L80)
- [scripts/settings/projectile/player_projectile_templates.lua — L567-L611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L567-L611)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua — L16-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua#L16-L34)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L722-L737](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L722-L737)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L317-L339](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L317-L339)

## Example assumptions and limits

- **How it works**: Assail's damage and impact penetration capacities increase by 50%, letting it pass through more enemies.

- **Penetration example**: With no other penetration modifiers, a capacity of 2 mass units becomes 2 × 1.5 = 3 mass units. Enemy masses vary, so this does not guarantee one additional enemy hit.

- Consider the same attack with unchanged other modifiers and an originally calculated attack hit-mass limit of 2 mass units. `2 × (1 + 0.5) = 3` mass units: an increase of 1 mass unit, without guaranteeing one extra enemy, because targets consume different mass amounts.
- Separately, with the same attack/other modifiers and an original impact hit-mass limit of 2, `2 × (1 + 0.5) = 3` mass units. The impact limit also increases by 50%; passing through the next enemy still depends on that enemy's hit mass and the projectile settings.
- The 2-mass-unit baseline is a formula example, not a fixed actual Assail limit asserted by the source. Actual limits also depend on power level, charge, damage profile and other modifiers.
- Attack and impact limits are kept separate; a fixed number of penetrated targets cannot be inferred from the buff name or description alone.
- Static code derivation only, without an in-game penetration test; Build 25606770 and the fixed source SHA correspond to 1.13.1. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_throwing_knives_pierce`, hash `d81ea964`, entry 14008: **Ethereal Shards**.
- Description key `loc_talent_psyker_throwing_knives_pierce_description`, hash `392c597f`, entry 3702.

Full raw template:

~~~text
Projectiles from {talent_name:%s} now pierce additional targets.

~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_ability_psyker_blitz_throwing_knives`; hash `9cd7d808`, entry 10129 | Localized string → `Assail` |

Only missing placeholder mapping in `psyker_talents.lua` L722–737 was read. `talent_name` localizes `loc_ability_psyker_blitz_throwing_knives`, hash `9cd7d808`, entry 10129, to Assail. The English template has no numeric placeholder; accepted hit-mass values were reused.

Static reconstruction; not an observed game screen:

~~~text
Projectiles from Assail now pierce additional targets.

~~~

## English comparison

The English independently says Assail projectiles now pierce additional targets; it does not quantify that increase or promise a fixed extra target count. This agrees with increased attack/impact hit-mass capacity, whose actual target count is conditional. The separate +50% capacities, formula and empowered-profile distinction are supplementary; no explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical_modifier/psyker_throwing_knives_piercing.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/ae86e2bb-6971-4dfe-b678-0aa814ccdfa1). The icon identifies the talent; it is not mechanism evidence.
