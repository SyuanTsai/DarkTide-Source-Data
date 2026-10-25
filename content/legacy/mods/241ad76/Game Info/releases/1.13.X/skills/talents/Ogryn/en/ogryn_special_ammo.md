# Point-Blank Barrage: source evidence

[繁體中文](../ogryn_special_ammo.md) | [Player description](README.md#ogryn_special_ammo) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_special_ammo)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_special_ammo`; name key `loc_talent_ogryn_combat_ability_special_ammo`; description key `loc_talent_ogryn_combat_ability_special_ammo_replenish_desc`. Node `node_2febaa70-bba7-407d-8b22-c1160bd4c271`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The action sets `auto_wield_slot = slot_secondary` and `reload_secondary = true`. `ActionStanceChange` checks missing magazine ammunition, transfers it from reserves and emits the reload event. When reserves are insufficient, free transfer is enabled only by `ogryn_free_reload_after_ability`.
- The stance buff lasts 12s, with `stat_buffs.ranged_attack_speed = 0.25` and `reload_speed = 0.65`. They multiply rates, so controlled action times are divided by 1.25 and 1.65. The activation `no_movement_penalty` buff supplies braced movement-penalty reduction and Close Range Damage.
- `on_ammo_consumed` accumulates `params.ammo_usage + (params.saved_ammo or 0)`. At stop, `ammo_spent × 0.5` is passed to `Ammo.add_to_all_slots_flat`. Thus `saved_ammo` from free shots is included in the return basis.
- Combat ability settings: duration 12, cooldown 60, maximum charges 1, `ammo_return = 0.5`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L296-L361](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L296-L361)
- [scripts/settings/talent/talent_settings_ogryn.lua — L194-L203](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L194-L203)
- [scripts/settings/talent/talent_settings_ogryn.lua — L271-L282](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L271-L282)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L93-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L93-L110)
- [scripts/settings/ability/ability_templates/ogryn_gunlugger_stance.lua — L17-L41](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/ogryn_gunlugger_stance.lua#L17-L41)
- [scripts/extension_systems/ability/actions/action_stance_change.lua — L111-L155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_stance_change.lua#L111-L155)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1851-L1927](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1851-L1927)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3750-L3761](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3750-L3761)
- [scripts/extension_systems/ability/actions/action_stance_change.lua — L108-L150](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_stance_change.lua#L108-L150)
- [scripts/utilities/ammo.lua — L530-L577](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L530-L577)
- [scripts/extension_systems/weapon/actions/action_shoot.lua — L1239-L1249](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L1239-L1249)
- [scripts/utilities/action/action_handler.lua — L397-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L397-L429)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L296-L361](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L296-L361)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1215-L1243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1215-L1243)

## Example assumptions and limits

- **Activation and cooldown**: Swap to your ranged weapon and immediately fill its magazine from reserve ammunition. If reserves are insufficient, load only the remaining ammunition. Duration 12s, base cooldown 60s, one charge.

- **Rate of Fire and Reload Speed**: Gain +25% ranged Rate of Fire and +65% Reload Speed. A speed-controlled 1s firing interval becomes 1 ÷ 1.25 = 0.8s; a 3s reload becomes 3 ÷ 1.65 ≈ 1.82s.

- **Close range and movement**: While holding a ranged weapon, gain +15% Close Range Damage and halve movement penalties from bracing and weapon actions. For example, a 40% slowdown becomes 20%; at base 5m/s, slowed movement rises from 3m/s to 4m/s.

- **Ammunition return**: At effect end, restore 50% of the counted ammunition to reserves. For example, 20 counted rounds return 20 × 50% = 10. Ammunition saved by Lucky Bullets also counts; the returned amount remains limited by total ammunition capacity.

The reload example assumes only a 1.65 rate multiplier; animation, weapon reload flow and other attributes can change actual elapsed time. Ammunition return uses the event count and is added to weapon ammunition slots; reserve capacity may reduce the actual increase below the calculated amount. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_combat_ability_special_ammo`, hash `7e117ab1`, entry 8180: **Point-Blank Barrage**.
- Description key `loc_talent_ogryn_combat_ability_special_ammo_replenish_desc`, hash `826d5678`, entry 8471.

Full raw template:

~~~text
Swaps to and reloads your Ranged Weapon. You have {ranged_attack_speed:%s} Rate of Fire, {reload_speed:%s} Reload Speed, {reduced_move_penalty:%s} Reduced Braced Movement Speed penalties, and gain {damage:%s} Close Range Damage for the next {duration:%s}s. {ammo_return_percent:%s} of Ammo consumed while active is returned to your Reserve once finished.

Base Cooldown: {cooldown:%s}s
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| ranged_attack_speed | Stance stat_buffs.ranged_attack_speed = 0.25 | Percentage × 100, explicit + prefix → +25% |
| reload_speed | Stance stat_buffs.reload_speed = 0.65 | Percentage × 100, explicit + prefix → +65% |
| reduced_move_penalty | combat_ability_3.reduced_move_penalty = 0.5 | Percentage × 100, no prefix → 50% |
| damage | combat_ability_3.increased_damage_vs_close = 0.15 | Percentage × 100, explicit + prefix → +15% |
| duration | Stance duration 12 | Number → 12 |
| ammo_return_percent | combat_ability.ammo_return = 0.5 | Percentage × 100, no prefix → 50% |
| cooldown | ogryn_ranged_stance.cooldown = 60 | Number → 60 |

Only the necessary English display map at L296–L361 was read; mechanism values and examples reuse existing evidence.

Static reconstruction; not an observed game screen:

~~~text
Swaps to and reloads your Ranged Weapon. You have +25% Rate of Fire, +65% Reload Speed, 50% Reduced Braced Movement Speed penalties, and gain +15% Close Range Damage for the next 12s. 50% of Ammo consumed while active is returned to your Reserve once finished.

Base Cooldown: 60s
~~~

## English comparison

The English is independently read as swap/reload, the four stated benefits for 12s, return of 50% at effect end to reserves, and base cooldown 60s. These values agree with the accepted evidence. The word consumed does not spell out the event basis including saved ammunition, so that rule is documented as a supplement rather than inheriting the Chinese conclusion or asserting an explicit exclusion. Reserve-limited activation, the selected free-reload exception, one-charge capacity, holding-ranged scope and rate/penalty examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability/ogryn_special_ammo.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/1a42e740-0c91-48e5-9092-e88d3f06b532). The icon identifies the talent; it is not mechanism evidence.
