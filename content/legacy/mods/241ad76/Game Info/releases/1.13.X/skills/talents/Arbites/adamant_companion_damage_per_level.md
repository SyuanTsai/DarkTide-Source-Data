# 電子獒犬等級增傷(Companion Damage per Level)：原始碼依據

[English](en/adamant_companion_damage_per_level.md)

[返回基礎效果](BASE_EFFECTS.md#adamant_companion_damage_per_level)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`adamant_companion_damage_per_level`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 基礎被動掛載 adamant_companion_damage_per_level。buff 讀取擁有者 profile.current_level；fifth_level=floor(level/5)，lerp_value=fifth_level/6，companions damage multiplier 在 1 到 2 間按此插值。等級公式為 1+floor(level/5)/6，例如 10 級是 4/3，30 級為 2。
- damage_calculation 對 companion attacker 讀取 attacker owner 的 stat_buffs.companion_damage_multiplier，乘到 damage_multiplier；damage_type 為 bleeding 時跳過這段倍率。owner 的 companion_damage_modifier 是另一欄加到 damage_stat_buffs，不能併作本被動的等級倍率。
- 戰犬撲擊動作先用目標 breed 的 initial_damage_profile 結算初次命中，持續撕咬則按 damage_frequency 反覆使用 breed 的 damage_profile。共用初次 profile attack=0、impact=10；一般 human profile 沿用 attack=100，Ogryn profile attack=200 並帶 initial_pounce、dog_bleed 標記，monster profile attack=300 並帶相同標記。
- profile 的 attack power distribution 與 POWER_LEVEL=500 會進入一般威力計算；它們不能直接讀成最終傷害點數。不同敵人的護甲修正與 boost curve 也會改變實際傷害。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L63-L65)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L21-L29)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L64-L85)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L265-L276)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L181-L235)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L236-L287)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L45-L85)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L140-L183)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/cultist/cultist_melee_breed.lua#L391-L399)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/cultist/cultist_mutant_breed.lua#L421-L430)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_spawn_breed.lua#L461-L469)

## 算例與待確認事項

- 等級 10：1+floor(10/5)/6=1+2/6=4/3 倍；等級 30：1+6/6=2 倍。這是狗的非流血傷害倍率，不是最終傷害點數。
- 一般人形撲擊 attack power distribution 100；套用等級 30 的 2 倍 companion_damage_multiplier 後，只有傷害倍率項變成 2 倍，護甲、威力、命中部位等其他結算仍會改變最後生命傷害。
- 撲擊 profile 的 100/200/300 是 attack power distribution 設定，不能當成造成 100/200/300 點生命傷害。
- 等級倍率只套在非 bleeding 的 companion damage path；流血 DoT 不吃這份 companion_damage_multiplier。
- Ogryn 與 monster profile 有 initial_pounce、dog_bleed 標記；人形 profile 沒有這兩個標記。實際流血施加還受獨立被動條件控制。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
