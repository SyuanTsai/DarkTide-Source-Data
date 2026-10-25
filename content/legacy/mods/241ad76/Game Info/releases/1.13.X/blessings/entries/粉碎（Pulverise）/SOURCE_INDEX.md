# 粉碎（Pulverise）：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Melee kill requires a death and melee attack type | [Melee kill requires a death and melee attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L226-L236) |
| Attacking item must equal the trait buff item | [Attacking item must equal the trait buff item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Held-slot condition | [Held-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| ProcBuff timer reads active start plus duration | [ProcBuff timer reads active start plus duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L95) |
| ProcBuff without cooldown can activate while active | [ProcBuff without cooldown can activate while active](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| Proc event checks condition and resets active start time | [Proc event checks condition and resets active start time](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L314-L355) |
| Proc condition also gates stat application | [Proc condition also gates stat application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L253) |
| Proc stat buff reads tier override table | [Proc stat buff reads tier override table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300) |
| Weapon trait buffs default to on-equip target | [Weapon trait buffs default to on-equip target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L206) |
| Weapon trait buff gets slot and source item context | [Weapon trait buff gets slot and source item context](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1268-L1271) |
| Weapon slot equip adds on-equip buff | [Weapon slot equip adds on-equip buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L637) |
| Unwield removes only on-wield buff target | [Unwield removes only on-wield buff target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Critical chance adds global and typed bonuses then clamps | [Critical chance adds global and typed bonuses then clamps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| Action critical chance selects melee or ranged channel | [Action critical chance selects melee or ranged channel](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| Light sweep: first gauntlet melee action | [Light sweep: first gauntlet melee action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L596-L605) |
| Light sweep: second gauntlet melee action | [Light sweep: second gauntlet melee action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L686-L700) |
| Light sweep: third gauntlet melee action | [Light sweep: third gauntlet melee action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L779-L792) |
| Heavy sweep: first gauntlet melee action | [Heavy sweep: first gauntlet melee action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L871-L885) |
| Heavy sweep: second gauntlet melee action | [Heavy sweep: second gauntlet melee action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L947-L961) |
| Heavy sweep: third gauntlet melee action | [Heavy sweep: third gauntlet melee action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1024-L1038) |
| Sweep attack passes melee type and source item | [Sweep attack passes melee type and source item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1503) |
| Special attack uses melee-explosive action | [Special attack uses melee-explosive action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1149-L1167) |
| Special direct hit delegates to sweep melee processing | [Special direct hit delegates to sweep melee processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_melee_explosive.lua#L91-L103) |
| Special explosion uses explosion type and is noncritical | [Special explosion uses explosion type and is noncritical](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_melee_explosive.lua#L61-L74) |
| Gauntlet projectile shooting action and fire configuration | [Gauntlet projectile shooting action and fire configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L313-L364) |
| Gauntlet projectile template has ranged hit and blast settings | [Gauntlet projectile template has ranged hit and blast settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L27-L41) |
| Projectile direct impact executes as ranged attack | [Projectile direct impact executes as ranged attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L485-L540) |
| Projectile explosion uses explosion attack type | [Projectile explosion uses explosion attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L649-L653) |
| Current UI family and mark registration | [Current UI family and mark registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1025-L1037) |
| Projectile spawn receives critical result | [Projectile spawn receives critical result](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_projectile.lua#L63-L73) |
| Projectile damage extension stores incoming critical flag | [Projectile damage extension stores incoming critical flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L48-L58) |
| Fuse explosion receives projectile critical flag | [Fuse explosion receives projectile critical flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L340-L362) |
| Impact explosion receives projectile critical flag | [Impact explosion receives projectile critical flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L645-L653) |
| Queued explosion damage executes with stored critical flag | [Queued explosion damage executes with stored critical flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L288-L312) |
| Formatter buff_template and trait_override lookup implementations | [Formatter buff_template and trait_override lookup implementations](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| 一般機率取整與偽隨機判定 | [一般機率取整與偽隨機判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 此項只有一個 weapon trait 變體及一個 Mk III 綁定。wrapper 是 `proc_buff`，監聽 `on_kill`；機率 formatter 用 `trait_override` 讀取當級數值；時間 formatter 用 `buff_template` 讀取 base 的2秒，不合併 runtime tier。wrapper 預設為0.05及2秒，四個 tier override 將它們替換為 +0.10／+0.15／+0.20／+0.25 與3秒。

- 啟動需同時通過持用槽條件，以及 `on_item_match` 與 `on_melee_kill`：攻擊來源 item 必須和附祝福 item 相同；目標結果必須是死亡，攻擊類型必須是 melee。不存在距離條件。

- 武器 trait buffs 以 `on_equip` 掛入並帶有武器槽與來源 item context。`is_item_slot_wielded` 同時作為事件與 stat gate；切出時 active start time 不變、倒數繼續，但該通用 stat 暫時不加入；切回且 timer 尚未到期時恢復。

- 本 wrapper 沒有 cooldown。ProcBuff 活性以 `t < active_start_time + active_duration` 判定；合格擊殺會更新 active start time。它是單一計時中的 proc stat，不累加堆疊。

- `critical_strike_chance` 是通用 stat。爆擊結算端會將基礎機率、此通用加成、近戰或遠程類別加成及 weapon handling 修正相加後限制在0至1；若沒有略過 conversion，之後再乘上 `(1 - critical_strike_chance_to_damage_convert)`。

- 擲彈兵臂鎧六種一般輕／重擊的 sweep 都以 `attack_type=melee` 並帶入此武器 item。特殊近戰動作的直接命中委派給 sweep 命中處理，因此該直接拳擊擊殺可啟動。特殊動作的爆炸另以 `attack_type=explosion` 且 `is_critical_strike=false` 建立，不能通過 melee-kill gate。

- 遠程榴彈由 projectile action 發射；直接命中分類為 ranged，彈體爆炸分類為 explosion，因此兩者都不會啟動近戰擊殺條件。通用機率仍會進入射擊的爆擊判定；普通射擊或爆炸不會扣除祝福倒數。

- metadata 限制為 Ogryn Gauntlet P1 weapon type、沒有更窄的 weapon-template restriction。Mk III 模板匯入 Ogryn Gauntlet P1 trait definitions，並把 trait keys 附加到實際 weapon template。

- 普通榴彈由 ActionShootProjectile 繼承射擊判定；發射時將當次爆擊旗標交給彈體，直擊與引信／撞擊爆炸沿用此旗標。特殊拳擊的另行爆炸則固定非爆擊，兩條爆炸路徑不可混同。

- 對一次 melee 或 ranged 爆擊判定，未套用 conversion 前的機率為 `p = clamp(p_base + p_global + p_type + p_handling, 0, 1)`；`p_type` 是該檢定的 melee 或 ranged 加成。粉碎加入 `p_global = 0.10／0.15／0.20／0.25`，所以它是直接加百分點，不是乘上1.10至1.25。

- 若此檢定沒有略過機率轉傷害修正，最終值為 `p_final = p × (1 − critical_strike_chance_to_damage_convert)`。以上算例明確假設 conversion 為0。

- ProcBuff 於 `t < active_start_time + 3` 時間有效。符合 item、slot、death 與 melee 條件的再次擊殺會用新事件時間更新 `active_start_time`；不將新時間加在原有剩餘秒數上，也不增加 stat stack。切出只令 slot condition 為 false，不改寫計時。

- 一般爆擊判定將最終機率四捨五入至兩位小數，使用偽隨機分布；強制或禁止爆擊按實際攻擊覆寫處理，榴彈爆炸沿用發射結果。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_146`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_146.png)｜[Issue附件](https://github.com/user-attachments/assets/aa25ecae-6e09-442c-9eed-d14e3cadc750)；圖示只作辨識。


## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 擲彈兵臂鎧等級覆寫 | [擲彈兵臂鎧等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L248-L301) |
| 擲彈兵臂鎧Buff接入 | [擲彈兵臂鎧Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_gauntlet_p1_buff_templates.lua#L65-L77) |
| UI 擲彈兵臂鎧 | [UI 擲彈兵臂鎧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1025) |
| 擲彈兵臂鎧 布拉斯托姆 Mk III匯入 | [擲彈兵臂鎧 布拉斯托姆 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L17) |
| 擲彈兵臂鎧 布拉斯托姆 Mk III接入 | [擲彈兵臂鎧 布拉斯托姆 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1295-L1297) |
