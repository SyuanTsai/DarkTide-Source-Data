# 歐格林：未被當前技能樹直接使用的定義

[English](en/UNUSED_DEFINITIONS.md)

[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)｜[角色基礎效果](BASE_EFFECTS.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 歐格林定義109項；樹使用85項歐格林定義與1項通用屬性，另有7項不重複的角色基礎效果，故109 − 85 − 7 = 17項未直接列入。
- 集合依據：[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L34-L2736)、[目前技能樹](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L3-L10)、[基礎天賦清單](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)。
- 以下功能名稱只供辨識，並非新增官方譯名。未直接列入不等於底層效果完全停用；分開核對天賦入口與其掛載的增益／特殊規則。

| 定義 | 功能 | 目前入口與底層效果判定 | 固定來源 |
|---|---|---|---|
| `ogryn_taunt_radius_increase` | 嘲諷範圍增加 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L173-L199) |
| `ogryn_leadbelcher_trigger_chance_increase` | 舊幸運子彈機率升級 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L431-L450) |
| `ogryn_heavy_hitter_light_attacks_refresh` | 舊輕擊重新計時重拳出擊 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 目前重拳出擊本身已允許一般近戰命中加層與重新計時，不代表需要此舊節點。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L566-L581) |
| `ogryn_increased_suppression` | 獨立壓制加成 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 優勝劣汰使用另一個ogryn_suppression_increase，不能因名稱相近視為同一模板。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1055-L1071) |
| `ogryn_increased_clip_size` | 彈匣容量增加 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1072-L1088) |
| `ogryn_special_ammo_movement` | 遠程能力移動與近距離傷害 | 天賦入口未列入，但相同特殊規則ogryn_combat_no_movement_penalty已由貼身火力直接提供；移動與近距離增傷仍生效。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1593-L1617) |
| `ogryn_decrease_suppressed_decay` | 壓制衰減延緩 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1800-L1823) |
| `ogryn_block_cost_reduction` | 格擋消耗減少 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1848-L1874) |
| `ogryn_frag_bomb_bleed` | 破片炸彈流血 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2002-L2020) |
| `ogryn_box_bleed` | 手雷箱附加持續傷害 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2021-L2039) |
| `ogryn_stagger_cleave_on_third` | 第三次攻擊衝擊與順劈 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2040-L2064) |
| `ogryn_block_increases_power` | 格擋疊加衝擊 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2065-L2088) |
| `ogryn_suppression_toughness` | 高韌性壓制免疫 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2136-L2150) |
| `ogryn_taking_damage_improves_handling` | 受傷後武器操控 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2151-L2173) |
| `ogryn_multiple_staggers_restore_stamina` | 多目標踉蹌恢復耐力 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2197-L2211) |
| `ogryn_movement_boost_on_ranged_damage` | 舊遠程受擊防護 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 目前遠程受擊減傷另掛ogryn_ranged_damage_immunity，不把此舊效果數值混入。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2222-L2248) |
| `ogryn_far_damage` | 遠程離增傷 | 目前樹與基礎配置未掛載此天賦；未在這兩組入口找到其直接掛載的同名增益／特殊規則。 | [定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2318-L2333) |

## 仍使用底層效果的項目

- 貼身火力直接加入相同移動特殊規則：[目前天賦掛載](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L296-L361)、[姿態啟動](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1851-L1915)、[移動與近距離加成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2303-L2331)。
- 本表限定目前職業樹與角色基礎入口；不宣稱其他模式、祝福、測試工具或未來版本完全無法使用上述模板。
