# 巢都渣滓：未被技能樹或基礎清單直接引用的天賦定義

[English](en/UNUSED_DEFINITIONS.md)

[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 主天賦樹有79個可選節點，其中75個來自職業定義、4個來自共用屬性定義。另有5項基礎設定、1項條件式興奮劑與獨立配方樹的零點起始說明；配方29項由設定動態產生。
- 職業檔的114個直接定義扣除上述82項後，剩32項未被這些清單直接選用。這不等於同名Buff、special rule或舊資料完全無用途；例如閃擊補充與額外閃避的Buff仍由基礎天賦使用。
- [職業基礎與條件式清單](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L53-L89)；[動態配方接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L3194-L3196)。

| talent ID | 定義來源 | 處理 |
|---|---|---|
| `broker_ability_focus_noclip` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L152-L170) | 未直接列入目前清單；不當成可選技能。 |
| `broker_keystone_adrenaline_junkie_sub_6` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2856-L2888) | 未直接列入目前清單；不當成可選技能。 |
| `broker_keystone_adrenaline_junkie_sub_7` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2889-L2935) | 未直接列入目前清單；不當成可選技能。 |
| `broker_keystone_adrenaline_junkie_sub_8` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2936-L2979) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_ammo_on_backstab` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1594-L1612) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_backstabs_grant_crit_chance` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L992-L1011) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_blitz_charge_on_kill` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1250-L1268) | 天賦定義未直接選用；同名Buff仍由基礎天賦引用。 |
| `broker_passive_close_range_damage_on_slide` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1483-L1491) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_close_range_rending` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1284-L1299) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_close_ranged_finesse_damage` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1454-L1462) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_crit_kill_at_close_range_reload` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1427-L1435) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_crit_to_damage` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1300-L1308) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_extra_consecutive_dodges` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1325-L1339) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_finesse_damage` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1492-L1500) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_heavy_attack_dash` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1445-L1453) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_hollowtip_bullets` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1436-L1444) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_increased_aura_size` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1959-L1981) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_increased_dodges` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L60-L75) | 天賦定義未直接選用；同名Buff仍由基礎天賦引用。 |
| `broker_passive_increased_toxin_damage` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2107-L2122) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_melee_apply_brittleness` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L3022-L3063) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_non_crits_increase_crit` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2322-L2344) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_parries_grant_crit_chance` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L972-L991) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_punk_grit` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1012-L1049) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_push_on_damage_taken` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1545-L1574) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_ranged_apply_brittleness` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2980-L3021) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_reload_on_crit` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1411-L1426) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_repeated_melee_hits_increases_damage` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L839-L858) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_sprinting_reduces_threat` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1199-L1229) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_strength_vs_aggroed` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1309-L1324) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_stun_on_max_toxin_stacks` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2038-L2056) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_toughness_on_toxined_kill` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2082-L2106) | 未直接列入目前清單；不當成可選技能。 |
| `broker_passive_weakspot_on_x_hit` | [固定定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1269-L1283) | 未直接列入目前清單；不當成可選技能。 |
