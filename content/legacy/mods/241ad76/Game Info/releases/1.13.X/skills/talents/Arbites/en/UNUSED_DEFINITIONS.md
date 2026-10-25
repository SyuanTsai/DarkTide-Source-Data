# Arbites: definitions not directly referenced by the current tree or base list

[繁體中文](../UNUSED_DEFINITIONS.md) | [Player descriptions](README.md) | [Technical index](SOURCE_INDEX.md)

[Fixed source version](https://github.com/Aussiemon/Darktide-Source-Code/tree/7e662fcda16219d775b84af50322be2e9cd9d62e); full SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`.

This list compares definitions in `adamant_talents.lua`, direct talent-tree references and `adamant_archetype.base_talents` at the fixed version. There are 126 Arbites definitions. Of the tree's 86 IDs, 81 reference these Arbites definitions and 5 reference shared attribute nodes in `base_talents.lua`. The base list directly references 5 additional Arbites definitions. The remaining 40 Arbites talent IDs appear in neither the tree nor the base list.

[Tree source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L3-L10); [Base-list source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L51-L68).

“Not directly referenced” is the ID difference between these lists. It does not prove that the entire code has no use. Definition line numbers are retained for later reference checks.

| talent ID | Definition source |
|---|---|
| adamant_companion_focus_melee | [Lines 2434–2453](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2434-L2453) |
| adamant_dog_kills_replenish_toughness | [Lines 1015–1033](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1015-L1033) |
| adamant_execution_order_ally_toughness | [Lines 2277–2295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2277-L2295) |
| adamant_execution_order_monster_debuff | [Lines 2239–2256](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2239-L2256) |
| adamant_exterminator | [Lines 2099–2131](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2099-L2131) |
| adamant_exterminator_ability_cooldown | [Lines 2334–2352](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2334-L2352) |
| adamant_exterminator_boss_damage | [Lines 2315–2333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2315-L2333) |
| adamant_exterminator_stack_during_activation | [Lines 2353–2371](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2353-L2371) |
| adamant_exterminator_stamina_ammo | [Lines 2372–2394](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2372-L2394) |
| adamant_exterminator_toughness | [Lines 2296–2314](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2296-L2314) |
| adamant_forceful_ranged | [Lines 1562–1582](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1562-L1582) |
| adamant_grenade_increased_damage | [Lines 453–468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L453-L468) |
| adamant_grenade_increased_radius | [Lines 437–452](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L437-L452) |
| adamant_gutter_forged | [Lines 1258–1280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1258-L1280) |
| adamant_increased_damage_vs_horde | [Lines 1102–1117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1102-L1117) |
| adamant_mag_strips | [Lines 1149–1164](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1149-L1164) |
| adamant_no_movement_penalty | [Lines 1479–1494](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1479-L1494) |
| adamant_pinning_dog_cleave_bonus | [Lines 2877–2892](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2877-L2892) |
| adamant_pinning_dog_kills_cdr | [Lines 2961–2980](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2961-L2980) |
| adamant_pinning_dog_permanent_stacks | [Lines 2913–2932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2913-L2932) |
| adamant_restore_toughness_to_allies_on_combat_ability | [Lines 1434–1448](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1434-L1448) |
| adamant_riot_pads | [Lines 1239–1257](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1239-L1257) |
| adamant_shout | [Lines 35–57](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L35-L57) |
| adamant_shout_improved | [Lines 58–88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L58-L88) |
| adamant_stance_damage | [Lines 276–291](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L276-L291) |
| adamant_stance_dance | [Lines 1651–1709](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1651-L1709) |
| adamant_stance_dance_cleave | [Lines 1762–1785](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1762-L1785) |
| adamant_stance_dance_elite_kills | [Lines 1710–1736](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1710-L1736) |
| adamant_stance_dance_reload_speed | [Lines 1737–1761](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1737-L1761) |
| adamant_stance_dance_weakspots | [Lines 1786–1825](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1786-L1825) |
| adamant_suppression_immunity | [Lines 2494–2503](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2494-L2503) |
| adamant_terminus_warrant_improved | [Lines 2012–2050](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2012-L2050) |
| adamant_terminus_warrant_melee | [Lines 1988–2011](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1988-L2011) |
| adamant_terminus_warrant_ranged | [Lines 1955–1987](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1955-L1987) |
| adamant_terminus_warrant_upgrade | [Lines 1926–1954](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1926-L1954) |
| adamant_uninterruptible_heavies | [Lines 2821–2830](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2821-L2830) |
| adamant_verispex | [Lines 1181–1195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1181-L1195) |
| adamant_weapon_handling | [Lines 2618–2645](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2618-L2645) |
| adamant_wield_speed_aura | [Lines 647–671](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L647-L671) |
| adamant_wield_speed_on_melee_kill | [Lines 1343–1366](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1343-L1366) |

## Interpretation limits

- The tree directly references 86 IDs: 81 from `adamant_talents.lua` and 5 shared attribute nodes from `base_talents.lua`.
- All 5 `base_talents` in `adamant_archetype.lua`—combat ability, grenade, companion Coherency, companion level damage and tag command—have definitions in `adamant_talents.lua` and do not overlap the tree IDs.
- The difference counts only direct talent-ID references from the tree and base list. The 141 shared definitions in general `base_talents.lua`, buffs, special rules, abilities and weapon data are not counted as unused Arbites talents. Without tracing all lower-level references, the 40 definitions are not treated as removable or as having no runtime use.
- This is a static comparison at the fixed SHA; it makes no claim about other versions, test modes or external tools.
