# 老兵：當前技能樹未直接使用的定義

[English](en/UNUSED_DEFINITIONS.md)

[返回技術索引](SOURCE_INDEX.md)

比對固定 SHA `7e662fcda16219d775b84af50322be2e9cd9d62e` 的老兵技能樹、職業基礎天賦與天賦定義。此表只表示「沒有獨立節點直接引用這個 talent ID」，不表示相同效果或其底層增益完全未使用。

技能樹使用 74 個老兵專屬定義及 3 個共用屬性定義，共 77 個節點。老兵專屬定義共 99 個；其餘 25 個之中，6 個由職業基礎天賦提供，另 19 個列於下表。起始能力已算入 77 個節點，不再重複計數。

| talent ID | 判定 | 定義來源 |
|---|---|---|
| `veteran_combat_ability_reloads_secondary_weapon` | 無目前樹節點、非職業基礎天賦 | [第 279–289 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L279-L289) |
| `veteran_combat_ability_melee_and_ranged_damage_to_coherency` | 無目前樹節點、非職業基礎天賦 | [第 430–479 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L430-L479) |
| `veteran_combat_ability_outlined_kills_extends_duration` | 無目前樹節點、非職業基礎天賦 | [第 518–537 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L518-L537) |
| `veteran_increase_crit_chance` | 無目前樹節點、非職業基礎天賦 | [第 917–942 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L917-L942) |
| `veteran_coherency_aura_size_increase` | 無目前樹節點、非職業基礎天賦 | [第 1225–1251 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1225-L1251) |
| `veteran_reduced_threat_when_still` | 無目前樹節點、非職業基礎天賦 | [第 1252–1267 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1252-L1267) |
| `veteran_increased_explosion_radius` | 無目前樹節點、非職業基礎天賦 | [第 1504–1529 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1504-L1529) |
| `veteran_extra_grenade_throw_chance` | 無目前樹節點、非職業基礎天賦 | [第 1562–1587 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1562-L1587) |
| `veteran_movement_speed_on_toughness_broken` | 無目前樹節點、非職業基礎天賦 | [第 1638–1671 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1638-L1671) |
| `veteran_movement_bonuses_on_toughness_broken` | 無目前樹節點、非職業基礎天賦 | [第 1672–1708 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1672-L1708) |
| `veteran_reduce_sprinting_cost` | 無目前樹節點、非職業基礎天賦 | [第 1871–1897 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1871-L1897) |
| `veteran_damage_bonus_leaving_invisibility` | 無目前樹節點、非職業基礎天賦 | [第 2114–2154 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2114-L2154) |
| `veteran_block_break_gives_tdr` | 無目前樹節點、非職業基礎天賦 | [第 2212–2244 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2212-L2244) |
| `veteran_plasma_proficiency` | 無目前樹節點、非職業基礎天賦 | [第 2403–2432 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2403-L2432) |
| `veteran_bolter_proficiency` | 無目前樹節點、非職業基礎天賦 | [第 2457–2502 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2457-L2502) |
| `veteran_power_proficiency` | 無目前樹節點、非職業基礎天賦 | [第 2527–2550 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2527-L2550) |
| `veteran_snipers_focus_stacks_on_still` | 無目前樹節點、非職業基礎天賦 | [第 2677–2696 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2677-L2696) |
| `veteran_weapon_switch_reload_speed` | 無目前樹節點、非職業基礎天賦 | [第 2889–2921 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2889-L2921) |
| `veteran_weapon_switch_stamina_reduction` | 無目前樹節點、非職業基礎天賦 | [第 2922–2957 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2922-L2957) |

## 判讀界線

- `veteran_extra_grenade_throw_chance` 沒有獨立節點，但擲彈兵已安裝同名的額外投雷增益；不能把該效果列為無效。
- `veteran_combat_ability_outlined_kills_extends_duration` 沒有獨立節點，處決者姿態自身的實作仍須逐項核對；不能用舊節點的缺席判斷能力是否具有延長機制。
- 本表不宣稱其他模式、測試工具或未來版本不會引用這些定義；本次沒有進行跨版本比較。

[職業基礎天賦](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)；[擲彈兵裝載兩項增益](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L115-L127)。
