# 專注引導：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| P1 own I–IV | [P1 own I–IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L359-L401) |
| P2 own I–IV | [P2 own I–IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L181-L223) |
| P3 own I–IV | [P3 own I–IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L180-L222) |
| P4 own I–IV | [P4 own I–IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L289-L331) |
| exact action wrapper | [exact action wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L78-L81) |
| exact action wrapper | [exact action wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L23-L26) |
| exact action wrapper | [exact action wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua#L18-L21) |
| exact action wrapper | [exact action wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua#L26-L30) |
| base conditional stats and keywords | [base conditional stats and keywords](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2364-L2390) |
| conditional stat table selection | [conditional stat table selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| conditional keyword function selection | [conditional keyword function selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L137-L143) |
| conditional keyword updates | [conditional keyword updates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L840) |
| charge movement consumer | [charge movement consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1459-L1496) |
| interrupt immunity consumer | [interrupt immunity consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/interrupt.lua#L10-L67) |
| push stun immunity consumer | [push stun immunity consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_reaction.lua#L312-L320) |
| forcestaff_p1 primary/charge/release routing | [forcestaff_p1 primary/charge/release routing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L208-L462) |
| forcestaff_p2 primary/charge/release routing | [forcestaff_p2 primary/charge/release routing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L246-L485) |
| forcestaff_p3 primary/charge/release routing | [forcestaff_p3 primary/charge/release routing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L255-L475) |
| forcestaff_p4 primary/charge/release routing | [forcestaff_p4 primary/charge/release routing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L207-L433) |
| forcestaff_p1 melee/push special routing | [forcestaff_p1 melee/push special routing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L463-L570) |
| forcestaff_p2 melee/push special routing | [forcestaff_p2 melee/push special routing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L520-L623) |
| forcestaff_p3 melee/push special routing | [forcestaff_p3 melee/push special routing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L537-L644) |
| forcestaff_p4 melee/push special routing | [forcestaff_p4 melee/push special routing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L468-L575) |
| forcestaff_p1 vent action | [forcestaff_p1 vent action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L943-L958) |
| forcestaff_p2 vent action | [forcestaff_p2 vent action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L996-L1011) |
| forcestaff_p3 vent action | [forcestaff_p3 vent action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L1017-L1032) |
| forcestaff_p4 vent action | [forcestaff_p4 vent action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L948-L963) |
| overload action class | [overload action class](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge.lua#L1-L37) |
| overload action class | [overload action class](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge_position_finder.lua#L1-L40) |
| overload action class | [overload action class](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge_target_finder.lua#L1-L40) |
| trait installation | [trait installation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| weapon slot equip installation | [weapon slot equip installation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L643) |
| true weapon unequip removal | [true weapon unequip removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L652-L662) |
| slot switch/unwield behavior | [slot switch/unwield behavior](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| queued proc delivery common boundary | [queued proc delivery common boundary](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L271) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 四份 own tier 都將同一個 conditional stat key 設為 `.8/.7/.6/.5`；wrapper 分別複製共同 base，並以自己的 action-name 清單限定生效。Buff.update_stat_buffs 741–746 先選用 own template_override_data.conditional_stat_buffs，否則選 base conditional_stat_buffs，再交 _calculate_stat_buffs；本項 .8/.7/.6/.5 因此替代 .9 fallback，不是 stat_buffs 同 key 覆寫或額外相乘。
- base 同一條條件函式同時提供 action-name 與「本武器正持用」檢查；Buff 在沒有另外指定 keyword 函式時，沿用該條件函式更新 `uninterruptible`、`stun_immune`。這些是條件關鍵字，非生命值或傷害防護。
- `move_speed_modifier` 另檢查目前 action kind 是否屬 `CHARGE_ACTIONS`，並按 `1-(1-m_action)×c` 縮放原懲罰；alternate-fire 修正獨立相乘。P4 的 `action_shoot_charged` 雖在 wrapper 清單中供關鍵字使用，種類是 `spawn_projectile`，不進移速公式。
- 本祝福沒有堆疊、期限、命中事件或額外冷卻。正常射擊、特殊近戰／推擊與 vent 均不在各 wrapper action-name gate；法杖自身少數原生 `uninterruptible=true` 動作須與祝福效果分開核對。

令 `m_action` 為動作原本的移動速度倍率，`c` 為祝福階級的懲罰剩餘倍率（I–IV 為 `.8/.7/.6/.5`）。只在本項 conditional stat 有效，且目前 action kind 屬原生 `CHARGE_ACTIONS` 時，`m_charge=1-(1-m_action)×c`；替代射擊倍率另行相乘。它改變的是原有懲罰，不是把數字直接加到速度上。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_063`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_063.png)｜[Issue附件](https://github.com/user-attachments/assets/3778f955-df91-47c2-997d-02817524ac32)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 虛空爆破力場法杖等級覆寫 | [虛空爆破力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L359-L401) |
| 虛空爆破力場法杖Buff接入 | [虛空爆破力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L78-L81) |
| UI 虛空爆破力場法杖 | [UI 虛空爆破力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L805) |
| 虛空爆破力場法杖 陰陽 Mk III匯入 | [虛空爆破力場法杖 陰陽 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L14) |
| 虛空爆破力場法杖 陰陽 Mk III接入 | [虛空爆破力場法杖 陰陽 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1162-L1164) |
| 烈焰力場法杖等級覆寫 | [烈焰力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L181-L223) |
| 烈焰力場法杖Buff接入 | [烈焰力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L23-L26) |
| UI 烈焰力場法杖 | [UI 烈焰力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L818) |
| 烈焰力場法杖 裂隙避難所 Mk II匯入 | [烈焰力場法杖 裂隙避難所 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13) |
| 烈焰力場法杖 裂隙避難所 Mk II接入 | [烈焰力場法杖 裂隙避難所 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223-L1225) |
| 電流力場法杖等級覆寫 | [電流力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L180-L222) |
| 電流力場法杖Buff接入 | [電流力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua#L18-L21) |
| UI 電流力場法杖 | [UI 電流力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L831) |
| 電流力場法杖 諾瑪努斯 Mk VI匯入 | [電流力場法杖 諾瑪努斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L13) |
| 電流力場法杖 諾瑪努斯 Mk VI接入 | [電流力場法杖 諾瑪努斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L1299-L1301) |
| 虛空打擊力場法杖等級覆寫 | [虛空打擊力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L289-L331) |
| 虛空打擊力場法杖Buff接入 | [虛空打擊力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua#L26-L30) |
| UI 虛空打擊力場法杖 | [UI 虛空打擊力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L844) |
| 虛空打擊力場法杖 陰陽 Mk IV匯入 | [虛空打擊力場法杖 陰陽 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L13) |
| 虛空打擊力場法杖 陰陽 Mk IV接入 | [虛空打擊力場法杖 陰陽 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L1151-L1153) |
