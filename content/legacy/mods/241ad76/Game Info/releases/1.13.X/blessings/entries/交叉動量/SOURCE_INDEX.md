# 交叉動量：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tier and display formatter | [Own tier and display formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L302-L361) |
| Own parent wrapper | [Own parent wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_gauntlet_p1_buff_templates.lua#L78-L95) |
| Base child definition | [Base child definition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L155-L165) |
| Parent initialization | [Parent initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L23-L38) |
| Parent proc and effective cap | [Parent proc and effective cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L56-L74) |
| Shared decay timer | [Shared decay timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L132) |
| Stack add and timer refresh | [Stack add and timer refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L163) |
| Parent override forwarding | [Parent override forwarding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L217) |
| Same-key stat override | [Same-key stat override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L695-L725) |
| Attack type power modifier | [Attack type power modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L61) |
| Held-slot gate | [Held-slot gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| First-target melee proc | [First-target melee proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L404-L412) |
| Sweep target counter and attack type | [Sweep target counter and attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1348-L1365) |
| Sweep direct damage call | [Sweep direct damage call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1491-L1503) |
| Grenade projectile action | [Grenade projectile action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L313-L365) |
| Light melee sweep | [Light melee sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L596-L685) |
| Heavy melee sweep | [Heavy melee sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L871-L946) |
| Other heavy sweeps | [Other heavy sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L947-L1100) |
| Explosive special punch | [Explosive special punch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1149-L1244) |
| Explosive action dispatch | [Explosive action dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L47-L53) |
| Explosive special inheritance | [Explosive special inheritance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_melee_explosive.lua#L1-L13) |
| Special blast attack type | [Special blast attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_melee_explosive.lua#L61-L74) |
| Special contact to blast sequence | [Special contact to blast sequence](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_melee_explosive.lua#L91-L102) |
| Projectile impact attack type | [Projectile impact attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L480-L540) |
| Projectile explosion attack type | [Projectile explosion attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L652-L653) |
| Pure push attack type | [Pure push attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L77-L84) |
| Base weapon action set | [Base weapon action set](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/base_template_settings.lua#L161-L260) |
| Attack damage then proc handling | [Attack damage then proc handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L382-L389) |
| Attack on-hit event data | [Attack on-hit event data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L621) |
| Proc event queue | [Proc event queue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992) |
| Proc event dispatch | [Proc event dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L271) |
| Buff fixed-update registration | [Buff fixed-update registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L308-L320) |
| Weapon fixed-update registration | [Weapon fixed-update registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L511-L524) |
| Player buff and stat cache update | [Player buff and stat cache update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L147) |
| Actual template weapon kind | [Actual template weapon kind](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1323-L1336) |
| Complete M1 action map / push absence | [Complete M1 action map / push absence](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L242-L1244) |
| 有效層數換算與raw容量 | [有效層數換算與raw容量](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L429) |
| 外部child實際玩家接入 | [外部child實際玩家接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L230-L257) |
| RPC child加入Buff | [RPC child加入Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L643-L660) |
| 同模板child合併層數 | [同模板child合併層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L462) |
| 威力曲線先換算後套修正 | [威力曲線先換算後套修正](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L115) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| 普通榴彈引信/撞擊爆炸實際設定 | [普通榴彈引信/撞擊爆炸實際設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L27-L42) |
| 普通榴彈引信爆炸的實際攻擊分類 | [普通榴彈引信爆炸的實際攻擊分類](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L340-L361) |

## 執行與計算

- Trait formatter 從 parent 的 `stat_buffs.power_level_modifier` 取 I–IV 覆寫值；父 wrapper 再將相同 override map 傳給 cloned child。

- Child 原始 `conditional_stat_buffs` 使用不同 key `melee_power_level_modifier`，同 key 才能覆寫，因此 tier 的 `power_level_modifier` 不替換 child 值 `.05`。四級實際效果遂固定為每有效層 `.05` melee modifier。

- Wrapper 的 parent `max_stacks=5` 不是有效 child 層上限。Child `max_stacks=10` 且 `stack_offset=-1`；placeholder 佔一個原始計數，實際可累積 10 層。

- Wrapper 聽 `on_hit`，父條件要求匹配本項 item、持用該欄位，並且 `attack_type=melee`、`target_number=1`。這是每次攻擊第一個有效命中目標的條件，沒有連擊／combo 欄位檢查。

- 普通及重擊 sweeps 以 melee 執行；特殊攻擊 ActionMeleeExplosive 的直接拳擊繼承 ActionSweep 的 melee 命中，後續爆炸另以 explosion 執行。榴彈直擊為 ranged，榴彈爆炸與特殊拳擊爆炸為 explosion；本 Mark 沒有獨立 push 或 push-follow action，heavy 的 push 方向不改 melee 類型。只有前述 melee 攻擊可讀到此 stat。

- 攻擊傷害先結算，on_hit 事件再入佇列；buff 系統處理事件並重建玩家 stat cache 後，後續動作才使用新增層數。Child held gate 在切出期間關閉其 stat，但父子計時仍更新。

- Parent 的容量取 child.max_stacks + abs(child.stack_offset)=11，初始佔位 child 一層；外部 child 經 PlayerUnitBuffExtension._add_rpc_synced_buff/_add_buff 按同模板合併 stack_count。因此可達 raw count 11，再扣 offset 1，得到 10 個有效層；不能把 Buff.max_stacks 的內部 raw 容量誤當有效層數。

- 普通榴彈的引信與撞擊設定皆接 default_gauntlet_grenade；引信呼叫在 ProjectileDamageExtension340–361明確傳入 explosion 攻擊類型，與直擊 ranged 分開，因此引信爆炸也不計層或套用本項近戰威力。

- 實際修正：`S_eff = S × (1 + 0.05n + q)`，n 為 0–10 有效層；q 代表其他適用於同一 PowerLevel 加法階段的既有修正。

- 數字例：S=500、n=3、q=0 時，`S_eff=500×1.15=575`。

- 同階段比較：S=500、n=3、q=0.20 時，無本祝福為 600，有本祝福為 675；威力輸入相對增幅為 12.5%。

- PowerLevel helper 只將 `melee_power_level_modifier` 用於 `attack_type=melee`，並把威力修正送入後續傷害、踉蹌與順劈計算；最終結果另受 profile、目標與下游限制影響。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_145`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_145.png)｜[Issue附件](https://github.com/user-attachments/assets/388f4d79-d16b-41b8-8280-51ee892743ca)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 擲彈兵臂鎧等級覆寫 | [擲彈兵臂鎧等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L302-L361) |
| 擲彈兵臂鎧Buff接入 | [擲彈兵臂鎧Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_gauntlet_p1_buff_templates.lua#L78-L94) |
| UI 擲彈兵臂鎧 | [UI 擲彈兵臂鎧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1025) |
| 擲彈兵臂鎧 布拉斯托姆 Mk III匯入 | [擲彈兵臂鎧 布拉斯托姆 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L17) |
| 擲彈兵臂鎧 布拉斯托姆 Mk III接入 | [擲彈兵臂鎧 布拉斯托姆 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1295-L1297) |
