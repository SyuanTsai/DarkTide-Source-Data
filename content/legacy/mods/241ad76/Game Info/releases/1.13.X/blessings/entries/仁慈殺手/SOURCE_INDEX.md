# 仁慈殺手：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Combatknife own I–IV | [Combatknife own I–IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L412-L451) |
| Dual shivs own I–IV | [Dual shivs own I–IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L412-L451) |
| Combatknife wrapper | [Combatknife wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L21) |
| Dual shivs wrapper | [Dual shivs wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L21) |
| Held-slot base | [Held-slot base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2526-L2534) |
| Held-slot condition | [Held-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Melee, weakspot and bleeding consumer | [Melee, weakspot and bleeding consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L717-L740) |
| Combined finesse formula | [Combined finesse formula](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L749-L782) |
| Attack calculation before post-hit callback | [Attack calculation before post-hit callback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L289-L385) |
| Sweep attack dispatcher | [Sweep attack dispatcher](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1501) |
| Push body action route | [Push body action route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L52-L111) |
| Push attack type | [Push attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L32-L102) |
| Bleed keyword and DoT attack type | [Bleed keyword and DoT attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L260) |
| Dual shivs throwing projectile | [Dual shivs throwing projectile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L620-L656) |
| Projectile attack type | [Projectile attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L482-L541) |
| Dual shivs neurotoxin proc | [Dual shivs neurotoxin proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1952-L2015) |
| Combat Blade Mk III routes | [Combat Blade Mk III routes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L72-L980) |
| Combat Blade Mk III chained/special route | [Combat Blade Mk III chained/special route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1037-L1155) |
| Combat Blade Mk III selected special | [Combat Blade Mk III selected special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1653) |
| Combat Blade Mk VI routes | [Combat Blade Mk VI routes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L72-L1089) |
| Combat Blade Mk VI selected special | [Combat Blade Mk VI selected special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1559-L1582) |
| Shivs Mk I normal chain | [Shivs Mk I normal chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L475-L797) |
| Shivs Mk I pushfollow/special throw | [Shivs Mk I pushfollow/special throw](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L954-L1174) |
| Shivs Mk I selected special | [Shivs Mk I selected special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1557) |
| Shivs Mk III normal chain | [Shivs Mk III normal chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L492-L927) |
| Shivs Mk III pushfollow/special throw | [Shivs Mk III pushfollow/special throw](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1018-L1238) |
| Shivs Mk III selected special | [Shivs Mk III selected special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1636) |
| 當項特殊／狀態差異 | [當項特殊／狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L881-L957) |
| 當項特殊／狀態差異 | [當項特殊／狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L957-L1032) |
| 當項特殊／狀態差異 | [當項特殊／狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1096-L1139) |
| 當項特殊／狀態差異 | [當項特殊／狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1160-L1203) |
| 當項特殊／狀態差異 | [當項特殊／狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1172-L1177) |
| 當項特殊／狀態差異 | [當項特殊／狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1236-L1241) |
| 當項特殊／狀態差異 | [當項特殊／狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1523) |
| 額外傷害最終結算 | [額外傷害最終結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L698-L747) |
| 額外傷害最終結算 | [額外傷害最終結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L89-L109) |
| 目標關鍵字快取更新 | [目標關鍵字快取更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/minion_buff_extension.lua#L97-L102) |
| 關鍵字彙整 | [關鍵字彙整](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L354) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 固定來源是 Release 1.13.1、Git SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。inventory 核實兩個實作、四個 Mark 綁定，沒有向其他型號外推。

- 兩個 own tier 表各自把 conditional_stat_buffs.melee_weakspot_damage_vs_bleeding 設為 I–IV 的 0.525／0.55／0.575／0.6，格式均為 percentage 且有 + 前綴。兩個 wrapper 均精確 clone increased_weakspot_damage_against_bleeding base；held-slot fallback 1.0 被 own tier 同鍵取代，不再相加。無本項 proc、層數或期限。

- 傷害消費端在弱點計算中要求 attack_type=melee 且 target_buff_extension.has_keyword(bleeding)。程式讀目前關鍵字狀態，沒有讀取流血層數來縮放本加成。Attack 的當次傷害計算早於同次命中後處理；若流血只在後處理新增，不能追溯本次命中。

- 四個 Mark 的普通／重擊主要由 melee sweep 路徑結算；推擊本體用 push attack type，推擊後接續 sweep 需獨立通過弱點與流血條件。戰刃 special_jab 使用 punch 傷害，亦為 melee sweep；雙短刀 special_throw 是 weapon_throw，投射物以 ranged 結算。兩款短刀的 on_equip 清單各自安裝 dual_shivs_p1_throwing_knives_poison，實際選 neurotoxin_interval_buff3，其 keyword 為 toxin；不是 bleeding。流血本身的 interval Attack 類型為 buff，故不是合格近戰命中。

- DamageCalculation 把 tier t 加入既有弱點／爆擊／精準合併乘區 S，最後精準部分為 F×(S+t)。這不是把已合成的 F×S 整體再乘 (1+t)，也不是最終整筆傷害倍率。

- 令 F 為加成前的基礎弱點／精準額外傷害，S 為既有弱點／爆擊／精準合併乘區且不含本祝福，t 為 I–IV 的 0.525／0.55／0.575／0.60；符合條件時，額外部分為 `F×(S+t)`，本祝福增量為 `F×t`，不是把已加成的 `F×S` 再乘 `1+t`。
- 若其餘傷害為 B，後續部位、背刺、減傷等修正均中立且無力場覆寫，最終傷害由 `B+F×S` 變為 `B+F×(S+t)`。其他修正有效時仍須按完整結算，不把這個受控算例當成固定遊戲傷害。
- 本項只在近戰、弱點、目標可讀到流血關鍵字、持用條件都符合時加入 t；流血層數不乘 t。52.5% 到 60% 相差 7.5 個百分點，額外部分與最終傷害的相對增幅則取決於 B、F、S。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_196`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_196.png)｜[Issue附件](https://github.com/user-attachments/assets/b9fd0379-1424-48e1-8f8b-d7fbef8c9388)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 戰刃等級覆寫 | [戰刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L412-L451) |
| 戰刃Buff接入 | [戰刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L21) |
| UI 戰刃 | [UI 戰刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L127) |
| 戰刃 卡塔昌 Mk III匯入 | [戰刃 卡塔昌 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L15) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1434-L1436) |
| 戰刃 卡塔昌 Mk VI匯入 | [戰刃 卡塔昌 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L15) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1524-L1526) |
| 短刀等級覆寫 | [短刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L412-L453) |
| 短刀Buff接入 | [短刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L21-L23) |
| UI 短刀 | [UI 短刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L227) |
| 短刀 臨時拼湊 型號1匯入 | [短刀 臨時拼湊 型號1匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L14) |
| 短刀 臨時拼湊 型號1接入 | [短刀 臨時拼湊 型號1接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1500-L1502) |
| 短刀 臨時拼湊 型號3匯入 | [短刀 臨時拼湊 型號3匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L14) |
| 短刀 臨時拼湊 型號3接入 | [短刀 臨時拼湊 型號3接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1579-L1581) |
