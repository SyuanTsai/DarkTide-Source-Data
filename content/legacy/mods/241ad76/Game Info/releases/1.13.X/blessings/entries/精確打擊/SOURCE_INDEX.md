# 精確打擊：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| shared aim-time base | [shared aim-time base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2771-L2813) |
| effective step clamp | [effective step clamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L80) |
| conditional override and effective stack addition | [conditional override and effective stack addition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| critical chance stat type | [critical chance stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L757) |
| chance aggregation clamp and conversion | [chance aggregation clamp and conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| aim starts alternate fire | [aim starts alternate fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_aim.lua#L20-L23) |
| alternate fire active and start timestamp | [alternate fire active and start timestamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L10-L21) |
| alternate fire stop | [alternate fire stop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L60-L67) |
| single-shot crit check at action start | [single-shot crit check at action start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L160) |
| shot and fire_last_t ordering | [shot and fire_last_t ordering](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L298-L328) |
| automatic shot crit continuation | [automatic shot crit continuation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1069) |
| weapon action can stop alternate fire | [weapon action can stop alternate fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L66-L79) |
| unwield stops alternate fire | [unwield stops alternate fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_unwield.lua#L25-L43) |
| unwield removes on_wield effects | [unwield removes on_wield effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| equip adds trait on_equip | [equip adds trait on_equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| held-slot condition | [held-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 機率四捨五入與偽隨機判定 | [機率四捨五入與偽隨機判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10) |
| 禁止或強制爆擊與一般機率分支 | [禁止或強制爆擊與一般機率分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L183) |
| 正常層偏移 | [正常層偏移](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 爆炸適用限制來源

| 用途 | 固定原始碼 |
|---|---|
| bolter_hitscan_templates.lua 11–41 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_hitscan_templates.lua#L11-L41) |
| bolter_hitscan_templates.lua 42–72 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_hitscan_templates.lua#L42-L72) |
| boltpistol_hitscan_templates.lua 11–41 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/settings_templates/boltpistol_hitscan_templates.lua#L11-L41) |
| boltpistol_hitscan_templates.lua 42–72 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/settings_templates/boltpistol_hitscan_templates.lua#L42-L72) |
| 起爆距離基礎值與倍率 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L31-L43) |
| 擊殺／停止爆炸條件與非爆擊參數 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L86-L139) |
| hit_scan.lua 226–226 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L226) |
| hit_scan.lua 245–248 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L245-L248) |
| hit_scan.lua 290–301 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L290-L301) |
| 爆炸參數對應 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L57) |
| 磷光背爆接線 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/settings_templates/phosphor_pistol_hitscan_templates.lua#L11-L35) |

## 執行與計算

- `stepped_stat_buff` 在持用槽與 alternate-fire/ADS 條件成立時，以 `max(瞄準開始時間, 最近射擊時間)` 為基準，依變體的 Δ 計算有效步數並限制在 0–10；這不是命中後永久累加的層。

- 所有 trait 四級 `critical_strike_chance` override 均為 0.10，取代共享條件預設 0.05，再按有效步數加算；爆擊率 stat 使用 additive `value`。

- ActionShoot 的射擊判定讀取當時已生效的爆擊率 stat pool。非自動射擊的爆擊檢查在實際 `_shoot` 前，`fire_last_t` 在 `_shoot` 後更新；命中與否不影響此次射擊時間。自動連射可延續 burst 內已判定的爆擊狀態。

- 退出 ADS 使 conditional stat 不再生效；切出停止 alternate-fire，on_equip trait 在裝備期間仍存在，但重新切回要開始新的瞄準計時。已核對的首段近戰特殊攻擊設定 stop_alternate_fire=true，會退出瞄準；反衝者／惡棍槍接續推撞本身不重新開始瞄準。爆擊檢查讀取執行當時的全域機率池。

- `n = clamp(floor(max(0, now - max(aim_start_t, fire_last_t)) / Δ), 0, 10)`。

- `Surgical bonus = n × 0.10`，即每步 +10 個百分點；10 步上限是 +100 個百分點。

- `P_final = clamp(P_base + P_generic + P_mode + P_handling + Surgical bonus, 0, 1) × (1 - crit_to_damage_conversion)`。其他來源與轉換按爆擊 consumer 的實際順序處理。

- 10Δ 表示在持續瞄準且沒有新射擊時達上限所需時間；射擊後以新的 `fire_last_t` 重新計算。

- 一般爆擊判定將最終機率四捨五入到兩位小數，使用偽隨機分布；強制爆擊或禁止爆擊的攻擊按各自覆寫規則處理，自動連射可以沿用同一輪已判定的狀態。

- 矛頭爆矢槍與爆彈手槍的實際 M1／M2 hitscan 各自設定擊殺／停止與穿透停止爆炸，沒有設定穿透出口爆炸。直接命中可沿用本次爆擊結果；另行生成的爆炸傳入 `is_critical_strike=false`。命中質量耗盡爆炸另受伺服器、起爆距離與耗盡條件控制，M1 基礎起爆距離 5 公尺、M2 為 3 公尺；實際起爆距離再乘上其他來源的起爆距離倍率。磷光手槍的 impact 背爆同樣固定傳入非爆擊參數。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_102`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_102.png)｜[Issue附件](https://github.com/user-attachments/assets/0c2dd6e6-a2b0-4c6c-bee0-315c476fcabd)；圖示只作辨識。


- **冥潮鐳射槍**：item.icon `content/ui/textures/icons/traits/weapon_trait_102`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_102.png)｜[Issue附件](https://github.com/user-attachments/assets/0c2dd6e6-a2b0-4c6c-bee0-315c476fcabd)。

- **機動自動槍**：item.icon `content/ui/textures/icons/traits/weapon_trait_103`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_103.png)｜[Issue附件](https://github.com/user-attachments/assets/3c72aebd-2519-435b-985f-d11739c4ebea)。

- **爆彈手槍與快拔左輪手槍**：item.icon `content/ui/textures/icons/traits/weapon_trait_104`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_104.png)｜[Issue附件](https://github.com/user-attachments/assets/96ad3e4a-33a4-4fb1-9b15-4d4fe0d816cc)。

- **重伐木槍、反衝者與惡棍槍**：item.icon `content/ui/textures/icons/traits/weapon_trait_140`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_140.png)｜[Issue附件](https://github.com/user-attachments/assets/c32c7942-1996-482c-999d-276ef7388898)。

- **矛頭爆矢槍與磷光爆破手槍**：item.icon `content/ui/textures/icons/traits/weapon_trait_150`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_150.png)｜[Issue附件](https://github.com/user-attachments/assets/c8a14285-3ff3-46d0-affc-b4a7eb99fdd5)。


## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 機動自動槍等級覆寫 | [機動自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua#L260-L317) |
| 機動自動槍Buff接入 | [機動自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p3_buff_templates.lua#L16) |
| UI 機動自動槍 | [UI 機動自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L694) |
| 機動自動槍 哥倫努 Mk III匯入 | [機動自動槍 哥倫努 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L17) |
| 機動自動槍 哥倫努 Mk III接入 | [機動自動槍 哥倫努 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L1031-L1033) |
| 機動自動槍 格拉亞 Mk VII匯入 | [機動自動槍 格拉亞 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L17) |
| 機動自動槍 格拉亞 Mk VII接入 | [機動自動槍 格拉亞 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L1094-L1096) |
| 機動自動槍 阿格里皮娜 Mk IX匯入 | [機動自動槍 阿格里皮娜 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L17) |
| 機動自動槍 阿格里皮娜 Mk IX接入 | [機動自動槍 阿格里皮娜 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L1039-L1041) |
| 矛頭爆矢槍等級覆寫 | [矛頭爆矢槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L134-L191) |
| 矛頭爆矢槍Buff接入 | [矛頭爆矢槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_bolter_p1_buff_templates.lua#L17) |
| UI 矛頭爆矢槍 | [UI 矛頭爆矢槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L730) |
| 矛頭爆矢槍 洛克 Mk IIb匯入 | [矛頭爆矢槍 洛克 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L16) |
| 矛頭爆矢槍 洛克 Mk IIb接入 | [矛頭爆矢槍 洛克 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L762-L764) |
| 矛頭爆矢槍 洛克 Mk III匯入 | [矛頭爆矢槍 洛克 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L16) |
| 矛頭爆矢槍 洛克 Mk III接入 | [矛頭爆矢槍 洛克 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L757-L759) |
| 爆彈手槍等級覆寫 | [爆彈手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L168-L225) |
| 爆彈手槍Buff接入 | [爆彈手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L13) |
| UI 爆彈手槍 | [UI 爆彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L748) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk IV匯入 | [爆彈手槍 戈德溫–布蘭克斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L16) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk IV接入 | [爆彈手槍 戈德溫–布蘭克斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L769-L771) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk VI匯入 | [爆彈手槍 戈德溫–布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L16) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk VI接入 | [爆彈手槍 戈德溫–布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L769-L771) |
| 冥潮鐳射槍等級覆寫 | [冥潮鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L120-L177) |
| 冥潮鐳射槍Buff接入 | [冥潮鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L13) |
| UI 冥潮鐳射槍 | [UI 冥潮鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L892) |
| 冥潮鐳射槍 盧修斯 MK IIIa匯入 | [冥潮鐳射槍 盧修斯 MK IIIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L15) |
| 冥潮鐳射槍 盧修斯 MK IIIa接入 | [冥潮鐳射槍 盧修斯 MK IIIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L1333-L1335) |
| 冥潮鐳射槍 盧修斯 MK V匯入 | [冥潮鐳射槍 盧修斯 MK V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L15) |
| 冥潮鐳射槍 盧修斯 MK V接入 | [冥潮鐳射槍 盧修斯 MK V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L1327-L1329) |
| 冥潮鐳射槍 盧修斯 Mk IV匯入 | [冥潮鐳射槍 盧修斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L15) |
| 冥潮鐳射槍 盧修斯 Mk IV接入 | [冥潮鐳射槍 盧修斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L1244-L1246) |
| 重伐木槍等級覆寫 | [重伐木槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L565-L622) |
| 重伐木槍Buff接入 | [重伐木槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L67) |
| UI 重伐木槍 | [UI 重伐木槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1002) |
| 重伐木槍 克魯克 Mk IIa匯入 | [重伐木槍 克魯克 Mk IIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L15) |
| 重伐木槍 克魯克 Mk IIa接入 | [重伐木槍 克魯克 Mk IIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L794-L796) |
| 重伐木槍 戈爾貢努姆 Mk IIIa匯入 | [重伐木槍 戈爾貢努姆 Mk IIIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L15) |
| 重伐木槍 戈爾貢努姆 Mk IIIa接入 | [重伐木槍 戈爾貢努姆 Mk IIIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L815-L817) |
| 重伐木槍 阿克利斯 Mk II匯入 | [重伐木槍 阿克利斯 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L15) |
| 重伐木槍 阿克利斯 Mk II接入 | [重伐木槍 阿克利斯 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L815-L817) |
| 反衝者等級覆寫 | [反衝者等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L212-L269) |
| 反衝者Buff接入 | [反衝者Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua#L25) |
| UI 反衝者 | [UI 反衝者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1061) |
| 反衝者 洛倫茲 Mk V匯入 | [反衝者 洛倫茲 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L15) |
| 反衝者 洛倫茲 Mk V接入 | [反衝者 洛倫茲 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L840-L842) |
| 惡棍槍等級覆寫 | [惡棍槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L212-L269) |
| 惡棍槍Buff接入 | [惡棍槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua#L26) |
| UI 惡棍槍 | [UI 惡棍槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1087) |
| 惡棍槍 洛倫茲 Mk VII匯入 | [惡棍槍 洛倫茲 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L16) |
| 惡棍槍 洛倫茲 Mk VII接入 | [惡棍槍 洛倫茲 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L832-L834) |
| 磷光爆破手槍等級覆寫 | [磷光爆破手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L344-L401) |
| 磷光爆破手槍Buff接入 | [磷光爆破手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L23) |
| UI 磷光爆破手槍 | [UI 磷光爆破手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1100) |
| 磷光爆破手槍 布蘭克斯 Mk XI匯入 | [磷光爆破手槍 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L16) |
| 磷光爆破手槍 布蘭克斯 Mk XI接入 | [磷光爆破手槍 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L1141-L1143) |
| 快拔左輪手槍等級覆寫 | [快拔左輪手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua#L190-L247) |
| 快拔左輪手槍Buff接入 | [快拔左輪手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_stubrevolver_p1_buff_templates.lua#L15) |
| UI 快拔左輪手槍 | [UI 快拔左輪手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1216) |
| 快拔左輪手槍 紮羅娜 Mk IIa匯入 | [快拔左輪手槍 紮羅娜 Mk IIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L16) |
| 快拔左輪手槍 紮羅娜 Mk IIa接入 | [快拔左輪手槍 紮羅娜 Mk IIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L982-L984) |
| 快拔左輪手槍 阿格里皮娜 Mk XIV匯入 | [快拔左輪手槍 阿格里皮娜 Mk XIV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L15) |
| 快拔左輪手槍 阿格里皮娜 Mk XIV接入 | [快拔左輪手槍 阿格里皮娜 Mk XIV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L885-L887) |
