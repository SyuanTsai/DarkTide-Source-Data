# Blackout: source evidence

[繁體中文](../broker_blitz_flash_grenade_improved.md) | [Player description](README.md#broker_blitz_flash_grenade_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_blitz_flash_grenade_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_blitz_flash_grenade_improved`; name key `loc_talent_broker_blitz_flash_grenade_improved`; description key `loc_talent_broker_blitz_flash_grenade_improved_desc`. Node `node_90db015f-623c-44a1-b981-fce3bee1abb5`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The improved node only replaces the PlayerAbility with the 5-charge version. The base `quick_flash_grenade` special rule and `blitz_charge_on_kill` remain. Choosing the missile launcher or Toxin grenade removes them by identifier.
- Ordinary `on_close_kill` does not require Melee. At full charges the function does not increase `tracked_kills`. For the Needle Pistol exception, distance uses `params.attacking_unit`; the final owner is not separately checked.
- The explosion's inner and outer attack distributions and armour Damage modifiers are all zero. Collision has a separate impact profile, so the statement that the explosion deals no Damage does not establish that every possible grenade impact is harmless.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_broker.lua — L191-L204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L204)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L227-L242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L227-L242)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L129-L159](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L129-L159)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua — L103-L154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L103-L154)
- [scripts/settings/projectile/player_projectile_templates.lua — L1248-L1263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1248-L1263)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1654-L1717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1654-L1717)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L298-L317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L298-L317)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L777-L791](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L791)
- [scripts/settings/buff/broker_buff_utils.lua — L99-L190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [scripts/settings/talent/talent_settings_broker.lua — L191-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L205)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L640-L667](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L640-L667)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L266-L294](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L266-L294)

## Example assumptions and limits

- **Control area:** a quick-use grenade with a 3.5-metre explosion radius; Stagger Power is higher within 2.25 metres. The explosion itself deals no Health Damage and mainly interrupts and knocks back enemies.

- **Replenishment:** carry up to 5 grenades. Below capacity, every 20 kills within 12.5 metres restore one grenade; both Melee and Ranged kills count. At full capacity, kills do not advance the counter.

- **Replenishment example:** with 2 grenades and 19 tracked kills, the next kill within range raises the count to 3 grenades and resets progress to zero. Extra Pouches increases capacity to 5 + 1 = 6 grenades.

- **Needle Pistol exception:** an enemy previously hit and tracked by the Needle Pistol can also count if it dies to Toxin at Close Range. Other deaths caused by ranged-applied Toxin cannot automatically use this exception.

#### Traditional Chinese description erratum

- The original Traditional Chinese says Melee kills where it should say kills at Close Range. Ranged kills within 12.5 metres also advance grenade replenishment.

Differences between description and implementation still require in-game confirmation; omitted details are supplements. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_blitz_flash_grenade_improved`, hash `3176e093`, entry 3220: **Blackout**.
- Description key `loc_talent_broker_blitz_flash_grenade_improved_desc`, hash `44ce3a9a`, entry 4460.

Full raw template:

~~~text
Quick to use Grenade that staggers enemies.

Every {num_kills:%s} Kills at Close Range generates {num_charges:%s} Grenade(s).

{max_charges:%s} Max Grenades.

This is an augmented version of {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `max_charges` | `max_charges_improved = 5` | Number → `5` |
| `num_kills` | `num_kills = 20` | Number → `20` |
| `num_charges` | `num_charges = 1` | Number → `1` |
| `talent_name` | `loc_talent_broker_blitz_flash_grenade` | Localized string → `Blinder` (hash `6fa18120`, entry 7255) |

Display mapping: [broker_talents.lua L646–663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L646-L663). Numeric values reuse the verified evidence; the base talent name comes from the same English UI batch.

Static reconstruction; not an observed game screen:

~~~text
Quick to use Grenade that staggers enemies.

Every 20 Kills at Close Range generates 1 Grenade(s).

5 Max Grenades.

This is an augmented version of Blinder.
~~~

## English comparison

English explicitly says Kills at Close Range and does not restrict them to Melee; it agrees with the accepted evidence. The Traditional Chinese Melee-only wording correction is retained separately. Explosion radii, the zero-Health-Damage scope, full-capacity progress and the Needle Pistol exception are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/tactical/broker_blitz_flash_grenade_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/fd2156cb-6e65-4214-bd01-ab0b28665714). The icon identifies the talent; it is not mechanism evidence.
