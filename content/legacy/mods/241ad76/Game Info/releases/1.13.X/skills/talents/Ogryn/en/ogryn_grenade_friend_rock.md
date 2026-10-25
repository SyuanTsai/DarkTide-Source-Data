# Big Friendly Rock: source evidence

[繁體中文](../ogryn_grenade_friend_rock.md) | [Player description](README.md#ogryn_grenade_friend_rock) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_grenade_friend_rock)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_grenade_friend_rock`; name key `loc_ability_ogryn_friend_rock`; description key `loc_ability_ogryn_friend_rock_desc`. Node `node_e90b57a5-4f0f-461d-bc9c-c373fcd55243`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The ability has a 45s cycle, maximum 4 charges, resource cost 45 per rock and resource recovery 1 per second.
- The projectile is removed after collision and uses the friendly-rock hit damage profile, without an explosion template. Attack distribution is 1200; standard PowerLevel 500 gives output multiplier 1. The close-range Carapace attack modifier is 0.25.
- The direct hit is an ordinary ranged attack, resolved through distance ranges and armour modifiers. The example covers only close-range Unarmoured and Carapace targets.
- At projectile completion, the selected refund effect checks hits. An enemy hit without a weakspot rejects the refund; a weakspot hit or no damageable-target hit restores 1 ability charge. The cooldown is 5s and the 4-rock maximum still applies. Destructible hits may invalidate the miss condition.
- The hit profile includes Specialist instant-kill flags and explicit enemy-type overrides. These conditions must not be replaced with a uniform 1200-damage claim.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L210-L254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L210-L254)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L164-L177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L164-L177)
- [scripts/settings/projectile/player_projectile_templates.lua — L499-L514](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L499-L514)
- [scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua — L464-L539](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua#L464-L539)
- [scripts/settings/damage/power_level_settings.lua — L7-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L537-L563](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L537-L563)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2630-L2679](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2630-L2679)
- [scripts/settings/talent/talent_settings_ogryn.lua — L182-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L182-L184)
- [scripts/utilities/attack/attack.lua — L249-L268](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L249-L268)
- [scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua — L544-L564](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua#L544-L564)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L210-L254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L210-L254)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1445-L1472](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1445-L1472)

## Example assumptions and limits

- **Direct-hit example**: At standard PowerLevel 500, with an ordinary close-range hit and no other modifiers, an Unarmoured target takes 1200 × 1 = 1200 damage; Carapace Armour takes 1200 × 0.25 = 300.

- **Capacity and replenishment**: Hold up to 4 rocks. About every 45s, recover 1 rock in sequence; from zero and without other modifiers, refilling takes 4 × 45 = 180s. Grenade pickups do not replenish rocks.

- **With That One Didn't Count**: A weakspot hit, or an entire throw that hits no damageable target, can refund 1 rock, at most once every 5s. Hitting a destructible object can also invalidate the miss condition.

- **Special enemies**: Rocks can instantly kill Specialists and have specific instant-kill overrides for certain enemies. Those cases are not decided by the ordinary damage example.

The 180s refill example follows the accepted ability resource settings; other charge modifiers can change the timing. Full damage against Unyielding targets still depends on distance and armour interpolation. The English reduced-effectiveness claim has not been converted into a fixed multiplier or fully confirmed by these records. Special-enemy flags and overrides affect individual hits; the 1200 example cannot be applied uniformly. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_ogryn_friend_rock`, hash `ff2a25bd`, entry 16566: **Big Friendly Rock**.
- Description key `loc_ability_ogryn_friend_rock_desc`, hash `45cf696a`, entry 4531.

Full raw template:

~~~text
Toss a big rock or hunk of junk at a Single Enemy. Reduced effectiveness against Carapace Armoured Enemies and Unyielding Enemies. You pick up a new rock every {recharge:%s}s and can hold up to {max_charges:%s} rocks at a time.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| recharge | Verified ability cycle 45 | Number → 45; the template supplies s |
| max_charges | Verified maximum charges 4 | Number → 4 |

Static reconstruction; not an observed game screen:

~~~text
Toss a big rock or hunk of junk at a Single Enemy. Reduced effectiveness against Carapace Armoured Enemies and Unyielding Enemies. You pick up a new rock every 45s and can hold up to 4 rocks at a time.
~~~

Referenced modifier name `loc_talent_ogryn_replenish_rock_on_miss_name`, hash `0c11b8c8`, entry 772: **That One Didn't Count**.

## English comparison

The independently read English agrees with the single-target direct hit, reduced Carapace effectiveness, 45s replenishment cycle and maximum 4 rocks. The Unyielding reduced-effectiveness claim is not fully resolved by the existing records, without a concrete contradiction. The ordinary damage examples, 180s refill, grenade-pickup restriction, conditional refund and special-enemy instant kills supplement the text.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/tactical/ogryn_grenade_friend_rock.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/641d8592-01cf-4120-ae26-b53ea1a58776). The icon identifies the talent; it is not mechanism evidence.
