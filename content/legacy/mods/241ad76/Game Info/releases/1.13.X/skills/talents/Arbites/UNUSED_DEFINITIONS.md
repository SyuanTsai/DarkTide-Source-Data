# 法務官：目前技能樹與職業基礎清單未直接引用的定義

[English](en/UNUSED_DEFINITIONS.md)

[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)

[固定來源版本](https://github.com/Aussiemon/Darktide-Source-Code/tree/7e662fcda16219d775b84af50322be2e9cd9d62e)；完整 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。

本清單比對固定版本的 `adamant_talents.lua` 定義、技能樹直接引用及 `adamant_archetype.base_talents`。`adamant_talents.lua` 共 126 個定義；技能樹 86 個 ID 中有 81 個引用這些法務官定義，另 5 個引用共用的 `base_talents.lua` 屬性節點；職業基礎清單另直接引用 5 個法務官定義。剩下 40 個法務官 talent ID 沒有出現在技能樹或職業基礎清單。

[技能樹來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L3-L10)；[基礎清單來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L51-L68)。

「未直接引用」是這兩份清單的 ID 差集，不等同於已證明整段程式碼完全無用途。表格保留定義行號，供後續追查引用。

| talent ID | 定義來源 |
|---|---|
| adamant_companion_focus_melee | [第 2434–2453 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2434-L2453) |
| adamant_dog_kills_replenish_toughness | [第 1015–1033 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1015-L1033) |
| adamant_execution_order_ally_toughness | [第 2277–2295 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2277-L2295) |
| adamant_execution_order_monster_debuff | [第 2239–2256 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2239-L2256) |
| adamant_exterminator | [第 2099–2131 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2099-L2131) |
| adamant_exterminator_ability_cooldown | [第 2334–2352 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2334-L2352) |
| adamant_exterminator_boss_damage | [第 2315–2333 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2315-L2333) |
| adamant_exterminator_stack_during_activation | [第 2353–2371 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2353-L2371) |
| adamant_exterminator_stamina_ammo | [第 2372–2394 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2372-L2394) |
| adamant_exterminator_toughness | [第 2296–2314 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2296-L2314) |
| adamant_forceful_ranged | [第 1562–1582 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1562-L1582) |
| adamant_grenade_increased_damage | [第 453–468 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L453-L468) |
| adamant_grenade_increased_radius | [第 437–452 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L437-L452) |
| adamant_gutter_forged | [第 1258–1280 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1258-L1280) |
| adamant_increased_damage_vs_horde | [第 1102–1117 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1102-L1117) |
| adamant_mag_strips | [第 1149–1164 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1149-L1164) |
| adamant_no_movement_penalty | [第 1479–1494 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1479-L1494) |
| adamant_pinning_dog_cleave_bonus | [第 2877–2892 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2877-L2892) |
| adamant_pinning_dog_kills_cdr | [第 2961–2980 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2961-L2980) |
| adamant_pinning_dog_permanent_stacks | [第 2913–2932 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2913-L2932) |
| adamant_restore_toughness_to_allies_on_combat_ability | [第 1434–1448 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1434-L1448) |
| adamant_riot_pads | [第 1239–1257 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1239-L1257) |
| adamant_shout | [第 35–57 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L35-L57) |
| adamant_shout_improved | [第 58–88 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L58-L88) |
| adamant_stance_damage | [第 276–291 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L276-L291) |
| adamant_stance_dance | [第 1651–1709 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1651-L1709) |
| adamant_stance_dance_cleave | [第 1762–1785 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1762-L1785) |
| adamant_stance_dance_elite_kills | [第 1710–1736 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1710-L1736) |
| adamant_stance_dance_reload_speed | [第 1737–1761 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1737-L1761) |
| adamant_stance_dance_weakspots | [第 1786–1825 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1786-L1825) |
| adamant_suppression_immunity | [第 2494–2503 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2494-L2503) |
| adamant_terminus_warrant_improved | [第 2012–2050 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2012-L2050) |
| adamant_terminus_warrant_melee | [第 1988–2011 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1988-L2011) |
| adamant_terminus_warrant_ranged | [第 1955–1987 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1955-L1987) |
| adamant_terminus_warrant_upgrade | [第 1926–1954 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1926-L1954) |
| adamant_uninterruptible_heavies | [第 2821–2830 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2821-L2830) |
| adamant_verispex | [第 1181–1195 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1181-L1195) |
| adamant_weapon_handling | [第 2618–2645 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2618-L2645) |
| adamant_wield_speed_aura | [第 647–671 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L647-L671) |
| adamant_wield_speed_on_melee_kill | [第 1343–1366 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1343-L1366) |

## 判讀界線

- 技能樹 共 86 個直接引用 ID，其中 81 個來自 `adamant_talents.lua`，5 個是 `base_talents.lua` 的共用屬性節點。
- `adamant_archetype.lua` 的 5 個 `base_talents`（戰鬥技能、手雷、電子獒犬協同、電子獒犬等級傷害、標記命令）都能在 `adamant_talents.lua` 找到定義，且沒有和技能樹 ID 重複。
- 差集只統計 talent ID 是否被技能樹或職業基礎清單直接引用；沒有把通用 `base_talents.lua` 的 141 個共享定義，或 buff、special rule、能力與武器資料當成法務官未使用天賦。未追完底層引用前，不推斷這 40 個定義可刪除或完全沒有執行時用途。
- 這是固定 SHA 的靜態比較，不推論其他版本、測試模式或遊戲外工具的引用。
