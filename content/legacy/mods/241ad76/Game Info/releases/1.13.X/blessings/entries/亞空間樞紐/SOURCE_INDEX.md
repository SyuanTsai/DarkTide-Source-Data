# 亞空間樞紐：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 固定來源範圍 01 | [固定來源範圍 01](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L235-L288) |
| 固定來源範圍 02 | [固定來源範圍 02](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L127-L180) |
| 固定來源範圍 03 | [固定來源範圍 03](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L126-L179) |
| 固定來源範圍 04 | [固定來源範圍 04](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L235-L288) |
| 固定來源範圍 05 | [固定來源範圍 05](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L22-L26) |
| 固定來源範圍 06 | [固定來源範圍 06](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L18-L22) |
| 固定來源範圍 07 | [固定來源範圍 07](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua#L13-L17) |
| 固定來源範圍 08 | [固定來源範圍 08](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua#L21-L25) |
| 固定來源範圍 09 | [固定來源範圍 09](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2121-L2145) |
| 固定來源範圍 10 | [固定來源範圍 10](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L79) |
| 固定來源範圍 11 | [固定來源範圍 11](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L159-L224) |
| 固定來源範圍 12 | [固定來源範圍 12](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410) |
| 固定來源範圍 13 | [固定來源範圍 13](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 固定來源範圍 14 | [固定來源範圍 14](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L62) |
| 固定來源範圍 15 | [固定來源範圍 15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L318-L354) |
| 固定來源範圍 16 | [固定來源範圍 16](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| 固定來源範圍 17 | [固定來源範圍 17](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| 固定來源範圍 18 | [固定來源範圍 18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| 固定來源範圍 19 | [固定來源範圍 19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L75-L90) |
| 固定來源範圍 20 | [固定來源範圍 20](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L120-L141) |
| 固定來源範圍 21 | [固定來源範圍 21](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_trigger_explosion.lua#L25-L58) |
| 固定來源範圍 22 | [固定來源範圍 22](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L112-L120) |
| 固定來源範圍 23 | [固定來源範圍 23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L523-L535) |
| 固定來源範圍 24 | [固定來源範圍 24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L210-L230) |
| 固定來源範圍 25 | [固定來源範圍 25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L158) |
| 固定來源範圍 26 | [固定來源範圍 26](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L1025-L1044) |
| 固定來源範圍 27 | [固定來源範圍 27](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L20-L39) |
| 固定來源範圍 28 | [固定來源範圍 28](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L160-L182) |
| 固定來源範圍 29 | [固定來源範圍 29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L20-L38) |
| 固定來源範圍 30 | [固定來源範圍 30](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L173-L198) |
| 固定來源範圍 31 | [固定來源範圍 31](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/flamer_action.lua#L14-L58) |
| 固定來源範圍 32 | [固定來源範圍 32](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/flamer_gas_templates.lua#L36-L65) |
| 固定來源範圍 33 | [固定來源範圍 33](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge_target_finder.lua#L1-L34) |
| 固定來源範圍 34 | [固定來源範圍 34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge_position_finder.lua#L1-L34) |
| 固定來源範圍 35 | [固定來源範圍 35](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_vent_warp_charge.lua#L17-L60) |
| 固定來源範圍 36 | [固定來源範圍 36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L180-L200) |
| 固定來源範圍 37 | [固定來源範圍 37](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L40-L58) |
| 固定來源範圍 38 | [固定來源範圍 38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L28-L135) |
| 固定來源範圍 39 | [固定來源範圍 39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L207-L1001) |
| 固定來源範圍 40 | [固定來源範圍 40](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1212) |
| 固定來源範圍 41 | [固定來源範圍 41](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L29-L154) |
| 固定來源範圍 42 | [固定來源範圍 42](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L245-L1051) |
| 固定來源範圍 43 | [固定來源範圍 43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1273) |
| 固定來源範圍 44 | [固定來源範圍 44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L49-L169) |
| 固定來源範圍 45 | [固定來源範圍 45](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L254-L1075) |
| 固定來源範圍 46 | [固定來源範圍 46](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L1349) |
| 固定來源範圍 47 | [固定來源範圍 47](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L27-L134) |
| 固定來源範圍 48 | [固定來源範圍 48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L206-L1006) |
| 固定來源範圍 49 | [固定來源範圍 49](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L1203) |
| 固定來源範圍 50 | [固定來源範圍 50](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L52-L113) |
| 固定來源範圍 51 | [固定來源範圍 51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L56-L65) |
| 固定來源範圍 52 | [固定來源範圍 52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L334) |
| 固定來源範圍 53 | [固定來源範圍 53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L359-L427) |
| 固定來源範圍 54 | [固定來源範圍 54](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/view_elements/view_element_weapon_stats/view_element_weapon_stats.lua#L695-L703) |
| 固定來源範圍 55 | [固定來源範圍 55](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L805-L856) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

四個實際武器包裝器都合併共用的反噬階數 Buff，並為同一致命一擊機率鍵提供 0.02 的條件值；每把武器的 I–IV trait 覆寫則提供 0.035、0.04、0.045、0.05。Buff 執行時，同一鍵的 tier `stat_buffs` 覆寫 wrapper `conditional_stat_buffs`，所以 0.02 不會額外相加。共用階數函式讀取 raw `current_percentage`，以 `floor(raw / 0.20)` 計算並限制為 0–4 階；沒有 tier `stepped_stat_buffs` 可另外疊加。

階數值是在祝福屬性重算時加到一般致命一擊機率屬性；手持條件由當前武器槽檢查，玩家固定更新負責刷新。致命一擊計算再將此全域屬性與職業基礎、近戰／遠程及武器修正相加並限制範圍。它不會改寫已經完成的動作致命一擊檢查，也沒有自身的命中 proc、持續時間或冷卻。

令 `h` 為所選等級每階增量，`p` 為屬性重算時讀到的原始反噬比例，`n = min(4, floor(p / 0.20))`。祝福增量為 `h × n`；I–IV 的 `h` 依序為 0.035、0.04、0.045、0.05，因此四階上限為 0.14、0.16、0.18、0.20。換算成百分點時乘 100；不把祝福增量稱為最終致命一擊機率。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_064`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_064.png)｜[Issue附件](https://github.com/user-attachments/assets/7b314280-0bfe-4a53-8bf5-a278d868bfb7)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 虛空爆破力場法杖等級覆寫 | [虛空爆破力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L235-L288) |
| 虛空爆破力場法杖Buff接入 | [虛空爆破力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L22-L26) |
| UI 虛空爆破力場法杖 | [UI 虛空爆破力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L805) |
| 虛空爆破力場法杖 陰陽 Mk III匯入 | [虛空爆破力場法杖 陰陽 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L14) |
| 虛空爆破力場法杖 陰陽 Mk III接入 | [虛空爆破力場法杖 陰陽 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1162-L1164) |
| 烈焰力場法杖等級覆寫 | [烈焰力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L127-L180) |
| 烈焰力場法杖Buff接入 | [烈焰力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L18-L22) |
| UI 烈焰力場法杖 | [UI 烈焰力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L818) |
| 烈焰力場法杖 裂隙避難所 Mk II匯入 | [烈焰力場法杖 裂隙避難所 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13) |
| 烈焰力場法杖 裂隙避難所 Mk II接入 | [烈焰力場法杖 裂隙避難所 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223-L1225) |
| 電流力場法杖等級覆寫 | [電流力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L126-L179) |
| 電流力場法杖Buff接入 | [電流力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua#L13-L17) |
| UI 電流力場法杖 | [UI 電流力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L831) |
| 電流力場法杖 諾瑪努斯 Mk VI匯入 | [電流力場法杖 諾瑪努斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L13) |
| 電流力場法杖 諾瑪努斯 Mk VI接入 | [電流力場法杖 諾瑪努斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L1299-L1301) |
| 虛空打擊力場法杖等級覆寫 | [虛空打擊力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L235-L288) |
| 虛空打擊力場法杖Buff接入 | [虛空打擊力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua#L21-L25) |
| UI 虛空打擊力場法杖 | [UI 虛空打擊力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L844) |
| 虛空打擊力場法杖 陰陽 Mk IV匯入 | [虛空打擊力場法杖 陰陽 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L13) |
| 虛空打擊力場法杖 陰陽 Mk IV接入 | [虛空打擊力場法杖 陰陽 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L1151-L1153) |
