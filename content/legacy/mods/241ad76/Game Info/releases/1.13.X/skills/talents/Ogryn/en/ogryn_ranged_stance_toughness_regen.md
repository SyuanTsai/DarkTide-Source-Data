# Bullet Bravado: source evidence

[繁體中文](../ogryn_ranged_stance_toughness_regen.md) | [Player description](README.md#ogryn_ranged_stance_toughness_regen) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_ranged_stance_toughness_regen)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_ranged_stance_toughness_regen`; name key `loc_talent_ogryn_special_ammo_toughness`; description key `loc_talent_ogryn_special_ammo_toughness_on_shot_and_reload_desc`. Node `node_3c6f836b-d499-4457-959c-8c519347d3c3`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- If the special rule is enabled, the stance's `start_func` adds `ogryn_ranged_stance_toughness_regen`. Its proc events listen to `on_shoot`, `on_shoot_projectile` and `on_reload`. Each of the first two calls `replenish_percentage(..., 0.025)`; reloading calls it with 0.15.
- `ActionStanceChange` handles `reload_secondary` after the ability buff has been added, transfers ammunition and sends `on_reload`. The automatic reload on activation can therefore trigger 15% restoration. The ability stance lasts 12s.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1527-L1552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1527-L1552)
- [scripts/settings/talent/talent_settings_ogryn.lua — L194-L202](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L194-L202)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L93-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L93-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1851-L1899](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1851-L1899)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2332-L2352](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2332-L2352)
- [scripts/extension_systems/ability/actions/action_stance_change.lua — L111-L155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_stance_change.lua#L111-L155)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/extension_systems/ability/actions/action_stance_change.lua — L102-L154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_stance_change.lua#L102-L154)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1527-L1552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1527-L1552)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1418-L1444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1418-L1444)

## Example assumptions and limits

- **Replenishment**: During Point-Blank Barrage's 12s effect, each shot restores 2.5% of maximum Toughness and each reload restores 15%. Shots do not have to hit enemies. The automatic reload on activation can also trigger the 15% restoration.

- **Replenishment example**: At maximum Toughness 100 without other bonuses, four shots followed by one reload restore 100 × (4 × 2.5% + 15%) = 25. If only 10 is missing, only 10 can be restored.

- **Counting triggers**: Replenishment follows shooting and reload actions, rather than restoring once per individual shotgun pellet. Automatic fire, bursts and special weapon firing methods affect the actual number of triggers.

Different weapons may send different shooting or projectile-firing events; actual restoration counts depend on their event flow. Restoration stops at maximum Toughness and does not store overflow. English and code evidence both correspond to 1.13.1; actual performance remains untested in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_special_ammo_toughness`, hash `be8bb1a2`, entry 12281: **Bullet Bravado**.
- Description key `loc_talent_ogryn_special_ammo_toughness_on_shot_and_reload_desc`, hash `626514ed`, entry 6392.

Full raw template:

~~~text
While {ability:%s} is active, Replenish {toughness:%s} Toughness for every shot fired and {toughness_reload:%s} Toughness on each reload.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| ability | loc_talent_ogryn_combat_ability_special_ammo | Localized string → Point-Blank Barrage; accepted English key |
| toughness | 0.025 | Percentage with + prefix → +2.5% |
| toughness_reload | 0.15 | Percentage with + prefix → +15% |

Only the missing display map in the cited talent definition, lines 1527–1552, was read. Existing formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
While Point-Blank Barrage is active, Replenish +2.5% Toughness for every shot fired and +15% Toughness on each reload.
~~~

## English comparison

The independently read English ties restoration to the active ability, shots fired and reloads, using the accepted 2.5% and 15% values. It does not require shots to hit. The 12s duration, automatic activation reload, weapon-event counting and maximum-Toughness cap supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_ranged_stance_toughness_regen.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/53442500-ad2a-446b-9f9b-0d26aa2438d9). The icon identifies the talent; it is not mechanism evidence.
