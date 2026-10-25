# 大口徑彈藥：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 共同暴擊順劈buff與持用條件 | [共同暴擊順劈buff與持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1780-L1793) |
| Buff採用tier conditional stat override | [Buff採用tier conditional stat override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L735-L746) |
| Galvanic Rifle I–IV tier values | [Galvanic Rifle I–IV tier values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L205-L239) |
| Phosphor Pistol I–IV tier values | [Phosphor Pistol I–IV tier values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L175-L209) |
| Shotgun P1 I–IV tier values | [Shotgun P1 I–IV tier values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p1.lua#L399-L434) |
| Shotgun P2 I–IV tier values | [Shotgun P2 I–IV tier values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L258-L293) |
| Shotpistol Shield I–IV tier values | [Shotpistol Shield I–IV tier values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L917-L951) |
| Galvanic Rifle wrapper | [Galvanic Rifle wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L25) |
| Phosphor Pistol wrapper | [Phosphor Pistol wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L20) |
| Shotgun P1 wrapper | [Shotgun P1 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p1_buff_templates.lua#L22) |
| Shotgun P2 wrapper | [Shotgun P2 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p2_buff_templates.lua#L23) |
| Shotpistol Shield wrapper | [Shotpistol Shield wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotpistol_shield_p1_buff_templates.lua#L42) |
| Critical keyword changes attack-side mass only | [Critical keyword changes attack-side mass only](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L49-L80) |
| HitMass consumption and stops | [HitMass consumption and stops](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L65-L109) |
| Ranged versus explosion stagger modifier | [Ranged versus explosion stagger modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L203) |
| Stagger modifier enters before percentage conversion | [Stagger modifier enters before percentage conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L92) |
| HitScan ray query and mass setup | [HitScan ray query and mass setup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L40-L76) |
| HitScan consumes budget on each target | [HitScan consumes budget on each target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L217-L226) |
| HitScan static-object penetration | [HitScan static-object penetration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L261-L288) |
| Phosphor hit creates separate explosion | [Phosphor hit creates separate explosion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L312-L320) |
| Phosphor direct hit and explode-on-minion settings | [Phosphor direct hit and explode-on-minion settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/settings_templates/phosphor_pistol_hitscan_templates.lua#L11-L34) |
| Phosphor blast template | [Phosphor blast template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/settings_templates/phosphor_pistol_explosion_templates.lua#L12-L35) |
| Explosion target query and queued attack data | [Explosion target query and queued attack data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L57-L115) |
| Explosion queues separate attack type | [Explosion queues separate attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L261-L290) |
| Pellet caps and per-pellet budgets | [Pellet caps and per-pellet budgets](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L30-L34) |
| Pellet critical flag and separate budget loop | [Pellet critical flag and separate budget loop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L373-L421) |
| Pellet HitMass consumer and aggregated target damage | [Pellet HitMass consumer and aggregated target damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L501-L520) |
| Special-shell selector | [Special-shell selector](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L904-L913) |
| Shotgun P1 M1 cleaving special shell | [Shotgun P1 M1 cleaving special shell](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L215-L266) |
| Shotgun P1 M2 slug special shell | [Shotgun P1 M2 slug special shell](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m2.lua#L215-L268) |
| Shotgun P1 M3 special and aimed killshot shell | [Shotgun P1 M3 special and aimed killshot shell](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m3.lua#L215-L270) |
| P1 special-shell definitions and slug penetration | [P1 special-shell definitions and slug penetration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_shotshell_templates.lua#L61-L120) |
| P1 aimed burninating killshot shell | [P1 aimed burninating killshot shell](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_shotshell_templates.lua#L146-L148) |
| P2 M1 aimed special shell | [P2 M1 aimed special shell](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L449-L460) |
| P2 32-pellet special shell | [P2 32-pellet special shell](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_shotshell_templates.lua#L176-L200) |
| P2 M3 hip single/double shell selection and aimed single shell | [P2 M3 hip single/double shell selection and aimed single shell](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L355-L366) |
| P2 M3 aimed single-shell config | [P2 M3 aimed single-shell config](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L465-L469) |
| P2 double shell definitions | [P2 double shell definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_shotshell_templates.lua#L456-L480) |
| Shotpistol Shield pellet firing config | [Shotpistol Shield pellet firing config](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L358-L403) |
| ActionSweep critical flag and max-mass calculation | [ActionSweep critical flag and max-mass calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L242-L357) |
| ActionSweep melee mass stop and critical Attack.execute | [ActionSweep melee mass stop and critical Attack.execute](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1356-L1388) |
| Galvanic rifle bash sweep | [Galvanic rifle bash sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L557-L633) |
| Phosphor pistol-whip sweep | [Phosphor pistol-whip sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L501-L589) |
| Shield light push action and profile | [Shield light push action and profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1126-L1150) |
| Shield heavy bash sweep | [Shield heavy bash sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1212-L1302) |
| Push action does not use cleave mass budget | [Push action does not use cleave mass budget](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L51-L115) |
| PushAttack damage uses push attack type | [PushAttack damage uses push attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L22-L90) |
| Armor aborts attack on super armor | [Armor aborts attack on super armor](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L27-L29) |
| Current UI display name and key composition | [Current UI display name and key composition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI family, pattern, and mark localization keys | [UI family, pattern, and mark localization keys](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| 持用條件核對 | [持用條件核對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Buff條件與普通stat聚合 | [Buff條件與普通stat聚合](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 未綁定霰彈P3同後綴定義 | [未綁定霰彈P3同後綴定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L399-L438) |
| 未綁定霰彈P4同後綴定義 | [未綁定霰彈P4同後綴定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L399-L438) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 五個實際trait等級表都覆寫conditional_stat_buffs.ranged_impact_modifier為0.10／0.15／0.20／0.25。五個Buff wrapper均clone共同infinite_cleave_on_crit模板；共同模板同時提供critical_hit_infinite_cleave關鍵字及持用條件下的遠程踉蹌stat。Buff在讀取trait tier override時優先採用override的conditional_stat_buffs，因此共同模板內的0.05不會取代等級覆寫值。參見各trait與wrapper、base buff及Buff.update_stat_buffs refs。

- Base buff的關鍵字與conditional stat都由is_item_slot_wielded條件控制。它不是暴擊後才啟動的事件Buff；遠程踉蹌修正持用時常駐，暴擊只會在消費critical_hit_infinite_cleave的順劈計算中生效。

- DamageProfile.max_hit_mass只在暴擊且持有該keyword時把max_hit_mass_attack設為math.huge；max_hit_mass_impact仍由攻擊damage profile計算。HitMass依目標質量扣減兩個預算，質量停止條件要求兩者都耗盡；destroy_on_impact和可中止攻擊的裝甲另行停止攻擊。暴擊關鍵字不修改場景物件穿透深度。

- ranged_impact_modifier由StaggerCalculation在attack_type為ranged時讀取，並進入後續踉蹌威力百分比換算之前的aggregate modifier。這不是最終踉蹌時間、距離或生命傷害的直接百分比。爆炸與近戰使用各自的attack_type分支。

- 電能步槍和磷光爆破手槍的直接射擊使用HitScan；射線按命中順序逐目標消費質量預算。磷光子彈擊中敵人後可觸發一次獨立爆炸：HitScan以attack_type.explosion呼叫Explosion.create_explosion並傳入false暴擊旗標；爆炸透過範圍目標查詢另行處理，不是子彈沿射線的順劈。

- 五個霰彈／盾槍型號的射擊動作使用ActionShootPellets。每個已儲存彈丸各自建立攻擊與衝擊質量預算，並共用該次射擊的critical flag；對同一敵人的彈丸傷害會依命中彈丸數彙整。特殊彈由shotshell_special切換時仍留在此consumer。P1 M1用13顆cleaving special，P1 M2用1顆slug special且另有物件穿透設定，P1 M3特殊彈為18顆；瞄準特殊彈改用killshot shell但仍是18顆。P2 M1的特殊shell為32顆，出現在瞄準射擊設定；P2 M3腰射設有single/double shell選擇，而瞄準射擊只設single shell。盾槍射擊使用其固定shotshell模板，武器特殊動作是近戰攻擊。

- 槍托／盾擊依動作種類分流。電能步槍刺擊、磷光爆破手槍槍托揮擊及盾槍重擊是ActionSweep；此路徑讀取critical flag並呼叫DamageProfile.max_hit_mass，因此暴擊時可用共同keyword。盾槍無彈時的輕盾推擊是ActionPush/PushAttack，不呼叫max_hit_mass；其attack_type為push。遠程踉蹌stat由attack_type區分，不作用於上述近戰或推擠攻擊。

- 等級數值為ranged_impact_modifier = [0.10, 0.15, 0.20, 0.25]。攻擊類型為ranged時，踉蹌計算讀取該modifier；只有踉蹌威力百分比換算前的中間輸入可按相同其他條件下的倍率舉例，後續仍受攻擊與目標資料影響。

- 暴擊且持有keyword時：max_hit_mass_attack := math.huge；max_hit_mass_impact := damage-profile-derived value。兩者在HitMass.consume_hit_mass分別扣減目標質量；一般質量停止條件為attack budget <= 0 AND impact budget <= 0。destroy_on_impact及Armor.aborts_attack是獨立停止條件。

- 對遠程ray hit，HitScan先從物理查詢取得射線命中，再以DamageProfile.max_hit_mass建立預算並逐命中呼叫HitMass.consume_hit_mass。對散彈，ActionShootPellets在每個彈丸迴圈建立一組預算；該射擊的is_critical_strike旗標傳給所有彈丸。彈丸damage按命中比例與damage profile處理，不能把彈數當作增加祝福等級。

- 爆炸以attack_type.explosion進入Explosion.create_explosion的範圍查詢；StaggerCalculation對explosion選explosion_impact_modifier分支。它不等於遠程子彈的ranged_impact_modifier或沿路順劈質量預算。

- ActionSweep在開始時以critical flag建立順劈質量上限，並在後續掃擊中使用同一上限；ActionPush直接計算push成本與範圍目標，使用PushAttack，不進入ActionSweep的質量預算consumer。

- 同一踉蹌結算階段的其他加成依StaggerCalculation聚合：在其他條件不變且各未修改項為1時，總修正為 `1 + 本祝福q + 其他同階段加成b`。例如q=.25、b=.20時，倍率1.45，不是1.20 × 1.25。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_106`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_106.png)｜[Issue附件](https://github.com/user-attachments/assets/019dc966-034d-47aa-8564-a4308bb0bca8)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 電能步槍等級覆寫 | [電能步槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L205-L244) |
| 電能步槍Buff接入 | [電能步槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L25) |
| UI 電能步槍 | [UI 電能步槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L857) |
| 電能步槍 布蘭克斯 Mk CV匯入 | [電能步槍 布蘭克斯 Mk CV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L17) |
| 電能步槍 布蘭克斯 Mk CV接入 | [電能步槍 布蘭克斯 Mk CV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L863-L865) |
| 磷光爆破手槍等級覆寫 | [磷光爆破手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L175-L214) |
| 磷光爆破手槍Buff接入 | [磷光爆破手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L20) |
| UI 磷光爆破手槍 | [UI 磷光爆破手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1100) |
| 磷光爆破手槍 布蘭克斯 Mk XI匯入 | [磷光爆破手槍 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L16) |
| 磷光爆破手槍 布蘭克斯 Mk XI接入 | [磷光爆破手槍 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L1141-L1143) |
| 戰鬥霰彈槍等級覆寫 | [戰鬥霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p1.lua#L399-L440) |
| 戰鬥霰彈槍Buff接入 | [戰鬥霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p1_buff_templates.lua#L22-L24) |
| UI 戰鬥霰彈槍 | [UI 戰鬥霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1131) |
| 戰鬥霰彈槍 紮羅娜 Mk VI匯入 | [戰鬥霰彈槍 紮羅娜 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L14) |
| 戰鬥霰彈槍 紮羅娜 Mk VI接入 | [戰鬥霰彈槍 紮羅娜 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L950-L952) |
| 戰鬥霰彈槍 阿格里皮娜 Mk VII匯入 | [戰鬥霰彈槍 阿格里皮娜 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m2.lua#L14) |
| 戰鬥霰彈槍 阿格里皮娜 Mk VII接入 | [戰鬥霰彈槍 阿格里皮娜 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m2.lua#L962-L964) |
| 戰鬥霰彈槍 奧克塔蘭 Mk IX匯入 | [戰鬥霰彈槍 奧克塔蘭 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m3.lua#L14) |
| 戰鬥霰彈槍 奧克塔蘭 Mk IX接入 | [戰鬥霰彈槍 奧克塔蘭 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m3.lua#L964-L966) |
| 雙管霰彈槍等級覆寫 | [雙管霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L258-L297) |
| 雙管霰彈槍Buff接入 | [雙管霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p2_buff_templates.lua#L23) |
| UI 雙管霰彈槍 | [UI 雙管霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1154) |
| 雙管霰彈槍 十字星 Mk XI匯入 | [雙管霰彈槍 十字星 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L17) |
| 雙管霰彈槍 十字星 Mk XI接入 | [雙管霰彈槍 十字星 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L1110-L1112) |
| 雙管霰彈槍 克魯克 Mk IV匯入 | [雙管霰彈槍 克魯克 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L17) |
| 雙管霰彈槍 克魯克 Mk IV接入 | [雙管霰彈槍 克魯克 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L1103-L1105) |
| 衝覆者霰彈手槍和防暴盾牌等級覆寫 | [衝覆者霰彈手槍和防暴盾牌等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L917-L956) |
| 衝覆者霰彈手槍和防暴盾牌Buff接入 | [衝覆者霰彈手槍和防暴盾牌Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotpistol_shield_p1_buff_templates.lua#L42) |
| UI 衝覆者霰彈手槍和防暴盾牌 | [UI 衝覆者霰彈手槍和防暴盾牌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1203) |
| 衝覆者霰彈手槍和防暴盾牌 審判 Mk IV匯入 | [衝覆者霰彈手槍和防暴盾牌 審判 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L16) |
| 衝覆者霰彈手槍和防暴盾牌 審判 Mk IV接入 | [衝覆者霰彈手槍和防暴盾牌 審判 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1533-L1535) |
