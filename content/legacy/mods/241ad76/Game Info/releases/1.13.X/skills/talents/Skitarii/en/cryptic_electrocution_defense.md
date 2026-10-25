# Overcharge Transfer Lattice: source evidence

[繁體中文](../cryptic_electrocution_defense.md) | [Player description](README.md#cryptic_electrocution_defense) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_electrocution_defense)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_electrocution_defense`; name key `loc_talent_cryptic_electrocution_defense`; description key `loc_talent_cryptic_electrocution_defense_desc`. Node `node_e0953fb3-717d-40b6-9af8-c3dc03597315`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_player_hit_received` checks `AttackSettings.is_damaging_result` and `attack_type = melee`. The broadphase query searches the enemy faction around `attacking_unit`'s position and applies `cryptic_electrocution_default` to units with a buff extension.
- `ProcBuff` has no `active_duration` for this talent, so its 15-second cooldown is measured from the trigger.

## Fixed source evidence

- [scripts/extension_systems/buff/buffs/proc_buff.lua — L151-L174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L174)
- [scripts/settings/buff/weapon_buff_templates.lua — L2619-L2659](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2619-L2659)
- [scripts/settings/talent/talent_settings_cryptic.lua — L406-L409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L406-L409)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2273-L2341](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2273-L2341)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1836-L1854](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1836-L1854)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L440-L466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L440-L466)

## Example assumptions and limits

- **Trigger**: Receiving damage from a melee attack Electrocutes living enemies within **2.5 metres of the attacker**. Simply blocking does not trigger it.
- **Electrocution**: The status lasts **3 seconds** and refreshes when reapplied. Its actual control effect on different enemies still depends on their resistances.
- **Cooldown**: Cooldown is **15 seconds from activation**. For example, after triggering at 0 seconds, another hit at 10 seconds does not activate it again; a qualifying hit after 15 seconds can.

- Enemies' Electrocution and crowd-control resistances still affect the actual control result.
- The cooldown example starts with activation at 0 seconds: a hit at 10 seconds cannot retrigger it; a qualifying hit after 15 seconds can.
- The area is centred on the attacker. Requiring a damaging result, excluding simple blocks, the 3-second status duration and the trigger-based cooldown timing supplement the English. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_electrocution_defense`, hash `2e776114`, entry 3029: **Overcharge Transfer Lattice**.
- Description key `loc_talent_cryptic_electrocution_defense_desc`, hash `b02129e2`, entry 11336.

Full raw template:

~~~text
If an Enemy hits you with a Melee Attack, they and enemies within {range:%s}m of them are Electrocuted. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `range` | 2.5 | `number`: verified `talent_settings.cryptic_electrocution_defense.electrocution_radius = 2.5` |
| `cooldown` | 15 | `number`: verified `talent_settings.cryptic_electrocution_defense.cooldown_duration = 15` |

The display mappings in `cryptic_talents.lua` L1844–L1853 use the already verified radius and cooldown.

Static reconstruction; not an observed game screen:

~~~text
If an Enemy hits you with a Melee Attack, they and enemies within 2.5m of them are Electrocuted. 15s Cooldown.
~~~

## English comparison

The English correctly centres Electrocution on the melee attacker and states a 2.5-metre radius and 15-second cooldown. It does not describe damage-result filtering, status duration, refreshing, living targets with buff extensions or enemy resistances. Those conditions and the cooldown example are supplementary details; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_electrocution_defense.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/74c8388d-8388-4646-8a91-0eb056656036). The icon identifies the talent; it is not mechanism evidence.
