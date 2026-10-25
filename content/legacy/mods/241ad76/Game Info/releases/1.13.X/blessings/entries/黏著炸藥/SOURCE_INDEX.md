# 黏著炸藥：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tiers and formatter | [Own tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L331-L370) |
| Own wrapper | [Own wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L30) |
| Base sticky template | [Base sticky template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2851-L2864) |
| Conditional tier override | [Conditional tier override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Held-slot predicate | [Held-slot predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Constant keyword update | [Constant keyword update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L840) |
| Trait buff equip target | [Trait buff equip target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| Weapon equip/wield/unequip lifecycle | [Weapon equip/wield/unequip lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| Rumbler trait category import | [Rumbler trait category import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16) |
| Rumbler trait registration | [Rumbler trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
| Complete Rumbler action table | [Complete Rumbler action table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L159-L731) |
| Hip throw action | [Hip throw action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L197-L241) |
| Aimed throw action | [Aimed throw action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L319-L361) |
| Reload action | [Reload action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L382-L397) |
| Bash special | [Bash special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L448-L458) |
| Bash-right special | [Bash-right special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L558-L570) |
| Hip projectile template | [Hip projectile template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L65-L106) |
| Aimed projectile template | [Aimed projectile template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L107-L143) |
| ActionShootProjectile spawn default | [ActionShootProjectile spawn default](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_projectile.lua#L68-L73) |
| Player item-projectile snapshot | [Player item-projectile snapshot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/unit_templates/item_projectile_unit_template.lua#L79-L92) |
| Projectile snapshot storage | [Projectile snapshot storage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_projectile_unit_buff_extension.lua#L13-L23) |
| Projectile stat getter | [Projectile stat getter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_projectile_unit_buff_extension.lua#L57-L65) |
| Projectile/owner buff distinction | [Projectile/owner buff distinction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L216-L224) |
| Attack reads attacking-unit stats | [Attack reads attacking-unit stats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L269-L273) |
| Live owner resolution | [Live owner resolution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attacking_unit_resolver.lua#L6-L18) |
| Direct impact before stick test | [Direct impact before stick test](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L535-L541) |
| Stick eligibility and target | [Stick eligibility and target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L584-L620) |
| Fuse explosion | [Fuse explosion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L344-L362) |
| Impact explosion | [Impact explosion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L649-L653) |
| Target-tag damage consumer | [Target-tag damage consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L392-L401) |
| Damage calculation stage | [Damage calculation stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614) |
| Damage stat type | [Damage stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L790-L795) |
| Percentage formatter | [Percentage formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L20) |
| Tier override formatter lookup | [Tier override formatter lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| Description placeholder formatter caller | [Description placeholder formatter caller](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L65-L70) |
| Formatter prefix application | [Formatter prefix application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L111) |
| Formatter numeric precision | [Formatter numeric precision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| 引信差異：Life-time reset honors skip_fuse_reset; these two own templates do not set that override. | [引信差異：Life-time reset honors skip_fuse_reset; these two own templates do not set that override.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L199-L213) |
| 引信差異：Own min_lifetime .5 makes fuse_started true only once lifetime exceeds .5; this branch precedes impact_triggered. | [引信差異：Own min_lifetime .5 makes fuse_started true only once lifetime exceeds .5; this branch precedes impact_triggered.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L245-L250) |
| 引信差異：Fuse explosion checks strict > fuse_time plus owner lag compensation. | [引信差異：Fuse explosion checks strict > fuse_time plus owner lag compensation.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L321-L339) |
| 引信差異：Successful sticky resets _life_time to0; already-sticking guard prevents a second attachment. | [引信差異：Successful sticky resets _life_time to0; already-sticking guard prevents a second attachment.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L605-L620) |
| 引信差異：First impact activated suppresses impact explosion on first impact; a nonexploding impact requests life-time reset. | [引信差異：First impact activated suppresses impact explosion on first impact; a nonexploding impact requests life-time reset.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L645-L663) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

實際特質包裝器複製 sticky_projectiles 基礎 Buff。基礎 Buff 同時提供常駐關鍵字與受持有欄位限制的 damage_vs_ogryn_and_monsters 條件值；武器特質 I–IV 對同一 damage stat key 提供階級 override。Buff 計算條件 stat 時用這個 tier override 取代基礎 1.5 備用值，不把兩者相加；該 stat 是 additive_multiplier。持有條件控制傷害 stat，黏附關鍵字是獨立的常駐 template keyword。

Rumbler 的腰射與瞄準投射物都用 ogryn / monster breed tags，並共用檢查函式。檢查函式在撞擊時解析仍存活的擁有者並查詢其當下 BuffSystem 關鍵字。直接命中 Attack 先於黏附分支；只有命中單位存活且符合其中一個標籤才黏附。本投射物模板沒有護甲類型黏附限制。

兩種投射物都由 ActionShootProjectile 預設生成 item_projectile；玩家持有者的 stat_buffs 與 keywords 在該投射物建立時淺複製保存。Attack 對直接命中與 impact/fuse 爆炸以投射物作 attacking_unit，並讀其 projectile BuffSystem 的 stat_buffs。因此傷害看投射物建立時的持有者數值快照；黏附則看撞擊時可解析持有者的現行關鍵字，兩個時點不可混為一談。

成功黏附時 _life_time 歸零；兩種實際投射物的 fuse_time=1.5、min_lifetime=.5。update 先走 min_lifetime 分支，尚未啟動引信時，生存時間嚴格超過 .5 才啟動；已啟動的 _fuse_started 不會因黏附把生存時間歸零而清除；爆炸以 new_life_time 嚴格超過 fuse_time 加延遲補償判定。首次撞擊的 first_impact_activated 抑制首次碰撞爆炸，未爆炸的撞擊另要求計時重設。這是原武器投射物的生命週期；本 Buff 無 TTL、層數或命中刷新。對目標標籤的 OR 條件只加一次通用 damage stat。

令 p 為階級傷害 stat（I–IV 分別 .06/.09/.12/.15），q 為同一攻擊者傷害統計階段的其他加成，B 為進入該階段的基礎傷害。目標帶有 ogryn 或 monster 標籤、持有條件於投射物生成時成立，且其他倍率固定時，該階段為 B×(1+q+p)。最終傷害仍取決於武器 profile、部位／護甲、距離與受擊者倍率；不得把這個算式當作最終生命值數字。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_137`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_137.png)｜[Issue附件](https://github.com/user-attachments/assets/dcea9788-55f7-488d-bad7-a473f9dd1816)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 震盪槍等級覆寫 | [震盪槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L331-L372) |
| 震盪槍Buff接入 | [震盪槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L30) |
| UI 震盪槍 | [UI 震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1074) |
| 震盪槍 洛倫茲 Mk VI匯入 | [震盪槍 洛倫茲 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16) |
| 震盪槍 洛倫茲 Mk VI接入 | [震盪槍 洛倫茲 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
