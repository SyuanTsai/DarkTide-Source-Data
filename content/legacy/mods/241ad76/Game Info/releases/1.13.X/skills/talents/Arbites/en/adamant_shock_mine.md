# Voltaic Shock Mine: source evidence

[繁體中文](../adamant_shock_mine.md) | [Player description](README.md#adamant_shock_mine) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_shock_mine)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_shock_mine`; node `node_ff1dbe2a-92b6-46f8-9c71-dc777431a537`; category Blitz; one point.

## Source-confirmed behavior and static derivation

- A deployed mine causes ProjectileDamageExtension to return immediately, so the general projectile fuse of 15s does not govern the deployed mine's active life. ProximityShockMine initially uses `life_time = 150 + arming_time`, with a 1s arming time. The first scan that finds a `HEALTH_ALIVE` target resets `start_time` and sets `life_time = 15`, even when that target is already electrocuted.
- Every 0.2s, the mine shuffles the results within 3m. It adds `shock_mine_interval` only to enemies that are not already electrocuted. Although the template sets `num_targets_per_trigger = 3`, the stopping condition is `num_added_buffs > 3`; a scan can therefore process up to four targets. The configured three is not a hard cap.
- Each applied status lasts 3s, with damage ticks at random intervals of 0.3–0.8s. Already electrocuted enemies are not given the buff again, so the normal scan does not continually restart the duration through the refresh flag. The `shock_grenade_stun_interval` attack has a baseline of 8; the default interpolated Unarmoured armour damage modifier is 0.5. Damage is skipped for an already staggered `poxwalker_bomber`.
- The main description's capacity and Lone Wolf interaction are retained: two mines normally, three with Lone Wolf, and one missing mine replenished every 90s with that separate talent.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L469-L502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L469-L502)
- [scripts/settings/talent/talent_settings_adamant.lua — L84-L87](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L84-L87)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L135-L146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L135-L146)
- [scripts/settings/projectile/player_projectile_templates.lua — L1083-L1148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1083-L1148)
- [scripts/settings/buff/weapon_buff_templates.lua — L475-L510](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L475-L510)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_shock_mine.lua — L34-L45](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_shock_mine.lua#L34-L45)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_shock_mine.lua — L77-L216](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_shock_mine.lua#L77-L216)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L149-L168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L149-L168)
- [scripts/settings/buff/weapon_buff_templates.lua — L504-L537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L504-L537)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L648-L690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L648-L690)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L839-L869](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L869)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L469-L502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L469-L502)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L382-L410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L382-L410)

## Example assumptions and limits

- **Deployment and waiting**: After landing and deployment, the mine arms in about 1s and detects enemies within 3m. With no enemy encountered, it can wait about 150s. The first detection of a living enemy starts its 15s active period.

- **Electrocution**: Search again every 0.2s, skipping already electrocuted enemies. Each application lasts 3s. An applied effect continues until expiry after the target leaves the radius; a target that remains within range can be affected again once its Electrocution ends.

- **Damage example**: Damage ticks occur at random intervals of 0.3–0.8s. Isolating armour with no other modifiers, the Unarmoured baseline is `8 × 0.5 = 4 damage`; Flak and Carapace Armour give `8 × 1 = 8 damage`. The tick count varies, so a fixed number of ticks cannot establish total damage.

- **Capacity and replenishment**: Carry up to two mines, with no natural cooldown replenishment after use. With Lone Wolf, capacity is three and one missing mine replenishes every 90s.

The original description gives no per-tick damage. The deployed-mine `life_time = 150` and projectile `fuse_time = 15` belong to different timer layers and are not treated as the same visible duration. Tick count is variable; total damage is not calculated by multiplying a fixed tick count by status duration. These are static derivations; game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ability_shock_mine`, hash `db593af0`, entry 14215: **Voltaic Shock Mine**.
- Description key `loc_talent_ability_shock_mine_description`, hash `d710719f`, entry 13928.

Full raw template:

```text
Throw a {talent_name:%s} that activates as it lands.

For {duration:%s}s it will Electrocute all enemies within {range:%s}m.
```

The display mapping uses a localized lookup for the mine name, and number formatting for `talent_settings.blitz_ability.shock_mine.duration` and `.range`. Values reuse the accepted fixed-source evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | Voltaic Shock Mine | Localized lookup of the name key |
| duration | 15 | Number formatting |
| range | 3 | Number formatting |

Static reconstruction; not an observed game screen:

```text
Throw a Voltaic Shock Mine that activates as it lands.

For 15s it will Electrocute all enemies within 3m.
```

## English comparison limits

The English says the mine activates as it lands, rather than immediately exploding. Its exact arming, waiting and application details supplement that description. The broad all-enemies statement cannot be fully confirmed from the existing scan and filtering evidence; no explicit English contradiction is established. The Chinese immediate-explosion wording is not copied into an English erratum. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/tactical/adamant_shock_mine.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/db0783ea-1312-4fed-a430-c1be9a87d2e1). The icon identifies the talent; it is not mechanism evidence.
