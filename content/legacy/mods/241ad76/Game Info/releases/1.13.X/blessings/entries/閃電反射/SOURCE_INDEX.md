# 閃電反射：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Parent hidden-stack lifecycle | [Parent hidden-stack lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L39) |
| Post-proc child addition | [Post-proc child addition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L56-L89) |
| Strict expiry and child removal | [Strict expiry and child removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L132) |
| Child inherit parent | [Child inherit parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L182) |
| Trait override inheritance | [Trait override inheritance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184) |
| Stat stack offset | [Stat stack offset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410) |
| Stat override replace and add | [Stat override replace and add](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Actual block events | [Actual block events](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L939-L962) |
| Perfect block window | [Perfect block window](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L252-L265) |
| Stun target consumer | [Stun target consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L847-L891) |
| Stun damage profile | [Stun damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L648-L690) |
| Interval timing | [Interval timing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64) |
| Power consumer | [Power consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L92) |
| Held condition | [Held condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| powermaul_p1tiers | [powermaul_p1tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua#L403-L462) |
| powermaul_p1fullprocwrapper | [powermaul_p1fullprocwrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua#L30-L77) |
| powermaul_p2tiers | [powermaul_p2tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p2.lua#L540-L599) |
| powermaul_p2fullprocwrapper | [powermaul_p2fullprocwrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p2_buff_templates.lua#L53-L89) |
| powermaul_p3tiers | [powermaul_p3tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua#L11-L70) |
| powermaul_p3fullprocwrapper | [powermaul_p3fullprocwrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L22-L69) |
| powermaul_shield_p1tiers | [powermaul_shield_p1tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua#L384-L443) |
| powermaul_shield_p1fullprocwrapper | [powermaul_shield_p1fullprocwrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua#L155-L191) |
| powermaul_p1_m1import | [powermaul_p1_m1import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L15) |
| powermaul_p1_m1ukeys append | [powermaul_p1_m1ukeys append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L1520-L1522) |
| powermaul_p1_m2import | [powermaul_p1_m2import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L15) |
| powermaul_p1_m2ukeys append | [powermaul_p1_m2ukeys append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L1607-L1609) |
| powermaul_p2_m1import | [powermaul_p2_m1import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua#L16) |
| powermaul_p2_m1ukeys append | [powermaul_p2_m1ukeys append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua#L2125-L2127) |
| powermaul_p3_m1import | [powermaul_p3_m1import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L16) |
| powermaul_p3_m1ukeys append | [powermaul_p3_m1ukeys append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L2629-L2631) |
| powermaul_shield_p1_m1import | [powermaul_shield_p1_m1import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L16) |
| powermaul_shield_p1_m1ukeys append | [powermaul_shield_p1_m1ukeys append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L1610-L1612) |
| powermaul_shield_p1_m2import | [powermaul_shield_p1_m2import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L16) |
| powermaul_shield_p1_m2ukeys append | [powermaul_shield_p1_m2ukeys append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L1828-L1830) |
| Proc probability/event processing | [Proc probability/event processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L381) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| Raw stack max adds offset | [Raw stack max adds offset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L413-L429) |
| Melee power additive stat type | [Melee power additive stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L877-L877) |

## 執行與計算

- 四trait tier override stat_buffs.melee_power_level_modifier=.10/.15/.20/.25；format_values.power_level讀此覆寫，duration/cooldown_duration都讀wrapper.child_duration。

- 四wrapper監聽on_block與on_perfect_block，機率值皆1；check只接受attack_type=melee，持用條件及current_stacks(child)>1鎖定。不存在隨機額外機率或block_broken gate。

- WeaponExtension先送on_block，再於is_perfect_block另送on_perfect_block。WeaponTraitParentProcBuff在super.update_proc_events處理整批後，依on_block加child。初始1隱藏層；格擋後2層。child.max_stacks1與stack_offset=-1令有效stat count初始0、啟動後1。

- Child透過parent_buff_template讀取同名trait tier override；Buff stat計算以override替換child預設.2，不把.2與tier相加。Parent自身未列stat_buffs，所以沒有另一份常駐威力。

- Parent自格擋後等待child_duration，P1/P2/shield3秒、P3電弧鎚5秒，update嚴格remove_t<t時移除多餘child；無額外effect結束後cooldown，無中途refresh。未持用時stat與proc無效，倒數繼續；parent沒有切出清層reset。

- 完美格擋specific proc向attacking_unit buff extension施加power_maul_stun。該目標buff3秒、cap1、刷新、electrocuted keyword，以.3–.8秒隨機interval對仍活目標執行shock_grenade_stun_interval，attack_type=buff、damage_type=electrocution。P3會傳owner_unit，其他三wrapper未傳。

- 電擊profile attack8、impact100、ignore_shield、stagger_category=sticky並按各護甲倍率結算，非純控制或固定HP。Block.start_block_action基礎window.3加perfect_block_timing。

- 有效child層數S=clamp(raw_stacks−1,0,2)，parent控制raw_stacks最多2層：初始raw1→S0，格擋後raw2→S1。tier近戰威力增量p=.10/.15/.20/.25只作用一次。

- Buff把相同stat增量加總；PowerLevel以各威力修正相加減去7個基準重複量。沒有其他加成時近戰威力倍率為1+p，即1.10／1.15／1.20／1.25。同組原有+.20再加IV+.25，倍率1.45，不是1.20×1.25=1.50。

- PowerLevel先計算power-type curve，再乘上述倍率；傷害及踉蹌另經profile、護甲及傷害consumer，+25%威力不保證最終HP傷害+25%。

- 時間由格擋處理點t₀起算，P3移除點t₀+5，其他t₀+3；實際清除在嚴格大於移除點的fixed update。電擊buff獨立3秒，interval名義.3–.8秒隨機、首interval可帶frame offset，不能直接把3秒除固定.5猜tick數。

- 電擊profile attack8／impact100是power distribution參數，非固定HP／踉蹌點數。

- 電擊interval attack_type=buff，PowerLevel不套用僅melee的melee_power_level_modifier；I–IV這個威力增量不直接增加電擊profile的威力。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_223`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_223.png)｜[Issue附件](https://github.com/user-attachments/assets/a5db31b7-608a-488a-8d23-6ccfec4c2f3f)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 電擊錘等級覆寫 | [電擊錘等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua#L403-L462) |
| 電擊錘Buff接入 | [電擊錘Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua#L30-L66) |
| UI 電擊錘 | [UI 電擊錘](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L436) |
| 電擊錘 阿格尼 Mk Ia匯入 | [電擊錘 阿格尼 Mk Ia匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L15) |
| 電擊錘 阿格尼 Mk Ia接入 | [電擊錘 阿格尼 Mk Ia接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L1520-L1522) |
| 電擊錘 軍務部 Mk III匯入 | [電擊錘 軍務部 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L15) |
| 電擊錘 軍務部 Mk III接入 | [電擊錘 軍務部 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L1607-L1609) |
| 法務官電擊鎚等級覆寫 | [法務官電擊鎚等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p2.lua#L540-L599) |
| 法務官電擊鎚Buff接入 | [法務官電擊鎚Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p2_buff_templates.lua#L53-L89) |
| UI 法務官電擊鎚 | [UI 法務官電擊鎚](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L454) |
| 法務官電擊鎚 布蘭克斯 Mk III匯入 | [法務官電擊鎚 布蘭克斯 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua#L16) |
| 法務官電擊鎚 布蘭克斯 Mk III接入 | [法務官電擊鎚 布蘭克斯 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua#L2125-L2127) |
| 電弧鎚等級覆寫 | [電弧鎚等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua#L11-L70) |
| 電弧鎚Buff接入 | [電弧鎚Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L22-L58) |
| UI 電弧鎚 | [UI 電弧鎚](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L467) |
| 電弧鎚 布蘭克斯 Mk III匯入 | [電弧鎚 布蘭克斯 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L16) |
| 電弧鎚 布蘭克斯 Mk III接入 | [電弧鎚 布蘭克斯 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L2629-L2631) |
| 法務官電擊鎚和鎮壓護盾等級覆寫 | [法務官電擊鎚和鎮壓護盾等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua#L384-L443) |
| 法務官電擊鎚和鎮壓護盾Buff接入 | [法務官電擊鎚和鎮壓護盾Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua#L155-L191) |
| UI 法務官電擊鎚和鎮壓護盾 | [UI 法務官電擊鎚和鎮壓護盾](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L480) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI匯入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L16) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI接入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L1610-L1612) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI匯入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L16) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI接入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L1828-L1830) |
