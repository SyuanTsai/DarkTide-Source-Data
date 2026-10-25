# Blades of Faith: source evidence

[繁體中文](../zealot_throwing_knives.md) | [Player description](README.md#zealot_throwing_knives) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_throwing_knives)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_throwing_knives`; name key `loc_ability_zealot_throwing_knifes`; description key `loc_ability_zealot_throwing_knifes_desc`. Node `node_f830003e-bb99-448f-aac6-f8a4dbf61d50`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent binds `PlayerAbilities.zealot_throwing_knives` and the special rules `no_grenades`, `ammo_gives_grenades` and `zealot_throwing_knives`. The ability fixes `max_charges = 12` and enables `only_use_ability_charges`.
- The weapon action has `fire_time = 0.25`, `total_time = 0.55` and starting input `wield`; it consumes an ability use when the projectile launches. The projectile is deleted after impact and uses `DamageProfileTemplates.zealot_throwing_knives`.
- The damage template sets `no_damage` for `super_armor`, an armour category commonly used by Carapace. Final damage still depends on the actual hit-zone armour and other attack calculations.
- Knife recovery listens for melee kills and calls `check_proc_func`. The helper requires attack result `died`, `attack_type = melee`, and an `elite` or `special` target; success restores **1** grenade ability charge.
- Ammo interaction for an ability with `ammo_pickups_refills_grenades` calls `pickup_data.ammo_amount_func(max_grenade_charges, 0, pickup_data)` and caps the new charge count at maximum. The large ammo crate's function uses maximum Ammo Reserve as its replenishment amount.
- `ProjectileDamageExtension` calls `Attack.execute` with `DEFAULT_POWER_LEVEL = 500`; the profile has `attack = 585`. At fixed `charge = 1` without other modifiers: `20 × (500 × 585 / 10000) = 585`, then multiply by the hit zone's ADM. Weakspot/Critical bonuses follow the separate Finesse calculation.
- Ammo interaction reads difficulty `ammo_modifier` first, then passes maximum knife count **12** as `max_ammunition_reserve` into the pickup functions: `small_clip = ceil(0.15 × m × 12)`, `large_clip = ceil(0.5 × m × 12)`, `deployable = ceil(m × 12)`. With **m=1**, these give **2/6/12**.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L198-L239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L198-L239)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua — L118-L133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L118-L133)
- [scripts/settings/talent/talent_settings_zealot.lua — L319-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L328)
- [scripts/settings/equipment/weapon_templates/base_template_settings.lua — L161-L220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/base_template_settings.lua#L161-L220)
- [scripts/settings/projectile/player_projectile_templates.lua — L529-L552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L529-L552)
- [scripts/settings/damage/damage_profiles/archetypes/zealot_damage_profile_templates.lua — L254-L299](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/zealot_damage_profile_templates.lua#L254-L299)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3905-L3948](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3905-L3948)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L208-L235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L208-L235)
- [scripts/extension_systems/interaction/interactions/ammunition_interaction.lua — L53-L83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/ammunition_interaction.lua#L53-L83)
- [scripts/extension_systems/interaction/interactions/ammunition_interaction.lua — L102-L147](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/ammunition_interaction.lua#L102-L147)
- [scripts/extension_systems/interaction/interactions/grenade_interaction.lua — L86-L93](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/grenade_interaction.lua#L86-L93)
- [scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua — L3-L18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua#L3-L18)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L529-L544](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L529-L544)
- [scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua — L3-L19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua#L3-L19)
- [scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua — L3-L19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua#L3-L19)
- [scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua — L3-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua#L3-L23)
- [scripts/settings/damage/power_level_settings.lua — L7-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/power_level.lua — L21-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua — L63-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/utilities/attack/damage_profile.lua — L29-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80)
- [scripts/utilities/attack/damage_calculation.lua — L219-L227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L198-L239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L198-L239)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L206-L232](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L206-L232)

## Example assumptions and limits

- **Operation**: Replace grenades with up to **12 throwing knives**, throwable while sprinting. Ordinary grenade pickups cannot replenish knives.
- **Damage and armour**: On an ordinary hit without other modifiers, baseline damage to an Unarmoured hit zone is **585**; Flak gives `585 × 0.8 = 468`, and Carapace ordinary-hit baseline is **0**. Weakspots, Critical Hits, Rending and enemy hit zones change the result; zero here does not mean heavily armoured enemies cannot be damaged under any circumstances.
- **Melee replenishment**: Your melee kill of an Elite or Specialist restores **1 knife**, up to 12. Starting with 11, a qualifying kill gives `11 + 1 = 12`.
- **Ammo example**: Without extra replenishment multipliers, a small Ammo pickup restores `12 × 15% = 1.8`, rounded up to **2** knives; a large pickup restores `12 × 50% = 6`; a deployed Ammo Crate can refill to maximum. Mission Ammo replenishment multipliers affect these amounts; the final count remains capped at **12**.
- **Throw timing**: The standard action launches the knife **0.25 seconds** after starting and lasts **0.55 seconds** in total. This excludes flight time.

- `585 × 0.8 = 468` is an ordinary Flak hit without Critical, Weakspot, Rending or other modifiers.
- With **8 knives** remaining and **m=1**, a small pickup adds **2** to reach **10**; a large adds **6** but caps at **12**.
- Replenishment requires a successful kill result, melee attack type and an Elite/Specialist classification. A melee hit, assist or ranged kill does not guarantee a knife.
- Ammo replenishment follows each pickup's own `ammo_amount_func`; not every Ammo box restores a fixed one knife.
- Build **25606770**, description hash **`5c177ee2`**: both Chinese and English describe Ammo boxes replenishing knives and weaker performance against Carapace. Their wording does not establish an explicit Chinese translation error. Variable pickup amounts do not contradict the general replenishment claim; actual game presentation remains unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_zealot_throwing_knifes`, hash `7bb3e9eb`, entry 8032: **Blades of Faith**.
- Description key `loc_ability_zealot_throwing_knifes_desc`, hash `5c177ee2`, entry 5971.

Full raw template:

~~~text
Throw a consecrated knife to deal high Damage to a Single Enemy. Very effective against most Enemies; less effective versus Carapace Armour.

- Quick Throw
- Killing Elite & Special Enemies in Melee replenishes 1 knife
- Ammo boxes replenish knives
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | No placeholders | Original wording retained |

The English template has no placeholders; accepted values and pickup formulas are reused without additional source reads.

Static reconstruction; not an observed game screen:

~~~text
Throw a consecrated knife to deal high Damage to a Single Enemy. Very effective against most Enemies; less effective versus Carapace Armour.

- Quick Throw
- Killing Elite & Special Enemies in Melee replenishes 1 knife
- Ammo boxes replenish knives
~~~

## English comparison

The English's one-knife replenishment requires an Elite/Specialist melee kill, matching the accepted trigger. “Ammo boxes replenish knives” states no fixed amount and agrees with pickup-specific recovery. The ordinary-hit Carapace limit supports the qualitative weaker-effectiveness wording without implying every hit must deal zero. Capacity, sprint throwing, ordinary-grenade pickup exclusion, exact timing, damage/Finesse calculations and replenishment multipliers/caps are supplements. No explicit English contradiction was found; the existing Chinese comparison likewise has no confirmed mistranslation.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/tactical/zealot_throwing_knives.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/8d21cff6-d918-4e91-8426-b98634887a03). The icon identifies the talent; it is not mechanism evidence.
