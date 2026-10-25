# 狂轟猛炸：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tiers and formatter | [Own tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L88-L131) |
| Own wrapper | [Own wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L21-L26) |
| Base continuous-fire capture | [Base continuous-fire capture](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1897-L1905) |
| Combo step helper | [Combo step helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1907-L1948) |
| Base count and held predicates | [Base count and held predicates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1965-L1977) |
| Stepped count | [Stepped count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L32-L51) |
| Optional stepped table | [Optional stepped table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L60-L79) |
| Normal effective stacks | [Normal effective stacks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L410) |
| Tier override and regular repeated stat | [Tier override and regular repeated stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Held slot predicate | [Held slot predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Radius stat type | [Radius stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L808-L810) |
| Increasing/holding action kinds | [Increasing/holding action kinds](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/action/action_handler_settings.lua#L48-L58) |
| ActionAvailability flags | [ActionAvailability flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/action_availability.lua#L100-L128) |
| ActionHandler start order | [ActionHandler start order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L256-L331) |
| Combo reset/increment | [Combo reset/increment](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L494-L511) |
| Combo timeout | [Combo timeout](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L1149-L1161) |
| Rumbler wield and primary action | [Rumbler wield and primary action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L159-L274) |
| Rumbler zoom and secondary | [Rumbler zoom and secondary](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L275-L381) |
| Rumbler reload and Bash | [Rumbler reload and Bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L382-L575) |
| Rumbler combo timeout | [Rumbler combo timeout](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L732-L736) |
| Displayed modes | [Displayed modes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L867-L883) |
| ActionShoot start inputs | [ActionShoot start inputs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L100-L130) |
| ActionShoot fixed fire | [ActionShoot fixed fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L244-L314) |
| Projectile spawn | [Projectile spawn](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_projectile.lua#L28-L74) |
| Buff cache refresh | [Buff cache refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L354) |
| Slot wield action | [Slot wield action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L685-L740) |
| Hipfire/aimed projectile templates | [Hipfire/aimed projectile templates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L65-L130) |
| Fuse explosion creation | [Fuse explosion creation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L344-L362) |
| Impact explosion creation | [Impact explosion creation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L645-L653) |
| Projectile owner resolver | [Projectile owner resolver](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attacking_unit_resolver.lua#L6-L18) |
| Explosion parameter resolution | [Explosion parameter resolution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L38-L58) |
| Explosion radius consumer | [Explosion radius consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L429-L502) |
| Rumbler explosion template | [Rumbler explosion template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L83-L100) |
| Actual Rumbler trait module import | [Actual Rumbler trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16) |
| Actual Rumbler trait table registration | [Actual Rumbler trait table registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
| Rumbler full weapon action table | [Rumbler full weapon action table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L159-L731) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| 瞄準射擊保留起手連擊 | [實際瞄準 action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L319-L331) |

## 執行與計算

- Wrapper 以 `use_combo=true` 合併 `stacking_buff_on_continuous_fire`。helper 從 `weapon_action.combo_count` 取值並限制為 5；base `max_stacks=1`、`stack_offset=-1` 先形成零的普通 placeholder 貢獻，再由 bonus step 加入 combo count，最後限於 0–5。這是 stepped_stat_buff 的邏輯階級，不是五個獨立 Buff instance，也不讀 `shooting_status.num_shots`。

- 本 wrapper 的一般 `conditional_stat_buffs` 是 `explosion_radius_modifier=.03` 備用值；本 trait 沒有額外的 `stepped_stat_buffs[step]` 表。Buff 以同名 tier stat_buffs override 取代該備用值，普通 stat 聚合依有效階級重複相加：I–IV 每階分別 +.03／+.04／+.05／+.06，五階最多 +.15／+.20／+.25／+.30；不雙算 fallback。

- Rumbler hipfire 與 brace secondary 都是 `shoot_projectile`。ActionHandler 在新射擊 action 開始時先傳入舊 count，再更新 combo；一般 hipfire 從 idle 且沒有 running action 的手動起始射擊 action 將 count 重設 0；瞄準 action_shoot_zoomed 設 keep_combo_on_start=true，無 running action 起手仍保留目前 count 再按射擊 kind 遞增，之後 fixed update 才發射；持用、解除瞄準、裝填 action 都有可直接 chain 到射擊的窗口，這些仍運行中的 chain 依 transition flags 計數。一般接續 projectile action 增加一階；Bash-to-shot 連接有明示 reset。瞄準與裝填有 hold 設定，解除瞄準、槍托特殊攻擊的相關鏈及其他非 combo action會重設；型號 `combo_reset_duration=.5` 秒。Buff 還要求 trait 對應 weapon slot 正在持用。

- 兩種榴彈的 fuse／impact 都指向 `ogryn_thumper_grenade_instant`。爆炸建立時，Explosion 將 projectile attacker 解析成 owner，讀 owner stat-buff cache，再把 `explosion_radius_modifier` 套到 `radius` 與 `close_radius`。這會擴大爆炸範圍輸入；傷害仍由原 damage profiles 與 falloff 計算，不能改寫成每個目標等比例加傷。

- Own tier 的覆寫欄位是 stat_buffs.explosion_radius_modifier；Buff._calculate_stat_buffs 在有條件 stat 的迴圈中，也以 template_override_data.stat_buffs[key] 取代 template.conditional_stat_buffs 的同名值，仍保留 conditional 的持用判定。本項不是把 own conditional_stat_buffs 表整份替換。

- 引爆 consumer 讀取的是 owner 的 stat-buff cache，n 是該快取最後更新時的有效邏輯層數，非保證每個 combo_count 寫入後就立即重算；切換與連擊變更在重算後反映。

- 設 n 為本祝福在半徑加成快取最後更新時的有效連擊層數，持用條件成立時限制於 0–5，持用條件未通過時本祝福的貢獻為 0；r 為 I–IV 每層 .03／.04／.05／.06，q 為其他同類半徑加算修正淨額。實際榴彈爆炸以玩家 owner 的已計算值讀取，倍率 M = 1 + n × r + q；外圈 R′ = R × M，近距離 closeR′ = closeR × M。

- I 一層且 q = 0 時，M = 1.03；基準外圈 10、近距離 3，結果 10.3 與 3.09 公尺。IV 五層時，M = 1.30，結果 13 與 3.9 公尺。

- q = .20、IV 五層時，倍率由 1.20 提至 1.50；基準外圈 10 公尺由 12 提至 15，相對增加 (15 − 12) ÷ 12 = 25%。這是半徑比較，不是面積、體積或傷害倍率。

- 本模板 scalable_radius = true，先按半徑陣列及 charge_level 解析 R、closeR，之後才乘上述倍率。爆炸類型且 attacker 解析為玩家 owner 時才取這項半徑修正；直擊與近戰槍托不是此 consumer。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_235`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_235.png)｜[Issue附件](https://github.com/user-attachments/assets/f58d086d-bc5a-46d6-bf09-4f10bcf2355c)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 震盪槍等級覆寫 | [震盪槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L88-L131) |
| 震盪槍Buff接入 | [震盪槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L21-L26) |
| UI 震盪槍 | [UI 震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1074) |
| 震盪槍 洛倫茲 Mk VI匯入 | [震盪槍 洛倫茲 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16) |
| 震盪槍 洛倫茲 Mk VI接入 | [震盪槍 洛倫茲 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
