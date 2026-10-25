# 壓倒性的武力：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Powermaul P1 own I-IV and formatter | [Powermaul P1 own I-IV and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua#L521-L574) |
| Powermaul P1 own ProcBuff | [Powermaul P1 own ProcBuff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua#L78-L102) |
| Powermaul P3 own I-IV and formatter | [Powermaul P3 own I-IV and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua#L218-L270) |
| Powermaul P3 own ProcBuff | [Powermaul P3 own ProcBuff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L75-L100) |
| P3 target tags | [P3 target tags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L136-L146) |
| Native full efficiency | [Native full efficiency](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/attack_settings.lua#L23-L35) |
| Stun target buff | [Stun target buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L847-L891) |
| Stun interval execution | [Stun interval execution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L873-L891) |
| Stun interval attack profile | [Stun interval attack profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L648-L690) |
| One-stack buff refresh | [One-stack buff refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L462) |
| At-cap behavior | [At-cap behavior](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L590) |
| Buff owner defaults | [Buff owner defaults](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/utility/buff_args.lua#L23-L27) |
| Buff arguments | [Buff arguments](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/utility/buff_args.lua#L59-L78) |
| Buff initialization context | [Buff initialization context](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L56-L79) |
| Proc cooldown gate | [Proc cooldown gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L185) |
| Proc event and chance order | [Proc event and chance order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L356) |
| Chance override read | [Chance override read](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L373-L380) |
| Attack calculation before buff event | [Attack calculation before buff event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L348-L387) |
| on_hit payload and dispatch | [on_hit payload and dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L550-L623) |
| Pure push profiles | [Pure push profiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L82-L158) |
| Push damage efficiency | [Push damage efficiency](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L104-L115) |
| Push attack event | [Push attack event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L72-L93) |
| Sweep setup and stored charge | [Sweep setup and stored charge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L720-L809) |
| Sweep Attack call | [Sweep Attack call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1503) |
| P1 Agni M1 push and special routes | [P1 Agni M1 push and special routes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L950-L1167) |
| P1 Munitorum M2 push and special routes | [P1 Munitorum M2 push and special routes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L1023-L1241) |
| P1 M1 ordinary and heavy profiles | [P1 M1 ordinary and heavy profiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L204-L899) |
| P1 M2 ordinary and heavy profiles | [P1 M2 ordinary and heavy profiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L204-L973) |
| P1 special tick state | [P1 special tick state](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L760-L797) |
| P3 ordinary/heavy and push routes | [P3 ordinary/heavy and push routes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L194-L1477) |
| P3 active-special shout route | [P3 active-special shout route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L1479-L1549) |
| Weapon shout dispatch | [Weapon shout dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_shout.lua#L163-L198) |
| P3 activation toggle | [P3 activation toggle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L1554-L1613) |
| P3 chain settings | [P3 chain settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_chain_lightning_templates.lua#L5-L29) |
| P3 chain action | [P3 chain action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/utilities/chain_lightning_action.lua#L243-L285) |
| P3 chain attack packet | [P3 chain attack packet](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L500-L510) |
| P3 arc damage profile | [P3 arc damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/settings_templates/power_maul_damage_profile_templates.lua#L2449-L2504) |
| Held-slot condition | [Held-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Trait buff installation | [Trait buff installation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| Weapon equip and held lifecycle | [Weapon equip and held lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| Unwield and removal lifecycle | [Unwield and removal lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Buff and stat cache timing | [Buff and stat cache timing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Formatter reconstruction | [Formatter reconstruction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L56) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 兩個自有 tier 檔分別覆寫機率與 ProcBuff 冷卻；P1 的 formatter 對機率加 + 前綴，P3 沒有此前綴。RAW 的兩組描述模板因此不能用同一組格式化輸出代替。

- 兩 wrapper 都由 on_hit 事件觸發，檢查目前手持槽、damage_efficiency == full 及 stagger_result == stagger。沒有來源事件 item 相等、重擊、近戰、蓄力或通用精英限制。P3 獨有目標 tags 檢查，要求 elite 或 special。

- ProcBuff 收到 on_hit 後，先通過 cooldown gate、持用 conditional 與 _can_activate；再抽 proc_chance。抽中後才執行 wrapper check：P1 檢查 full 與 stagger，P3 再檢查 elite 或 special。所有 wrapper 條件通過後呼叫 proc_func，並由非 local event 設定 _active_start_time、啟動冷卻；機率或 wrapper 條件失敗不會開始冷卻。伺服器端 proc_func 只在目標有 BuffExtension 時新增 stun，新增 stun 不是成功 proc 的額外 gate。

- 原生 damage_efficiency 分為 full／reduced／negated／push；attack_settings.lua 中 armor_damage_modifier > 0.6 才回傳 full；(armored 或 super_armor) 且 modifier ≤ 0.1 且 rending_damage=0，或 void_shield 會先回傳 negated。full 不是正 HP 傷害、100% 最終傷害或暴擊保證；純推擊回報 push，故不能滿足 full。P1 特殊攻擊或 P3 shout／arc 是否可用，按實際事件回報的結果和 P3 目標標籤核對。

- 電擊錘 P1 新增 power_maul_stun 時沒有傳 owner_unit，P3 則明確傳玩家。Buff 參數預設 owner 為 nil；加到目標身上不會自動改成玩家 owner。此差異會影響週期攻擊之後能否進入玩家的 on_hit 處理。

- power_maul_stun 為 3 秒、max stack 1 並可 refresh；週期 hit 每 0.3–0.8 秒執行一個獨立攻擊。達上限刷新會重用原 buff instance/context，因此外部延長同名 buff 時不能把首次 3 秒窗口結論泛化到延長後的所有 tick。

- 命中先完成傷害／踉蹌計算，再送 on_hit。切槽關閉 held predicate；切出不會移除仍裝備武器的 on_equip trait buff，也不會清除目標已取得的 stun。卸下武器才移除該槽 buff。

每次機率檢查的成功率為 p，若有 n 次相互獨立且都符合完整 wrapper 條件的檢查，至少成功一次的機率為 1 − (1 − p)^n。此式只描述機率；它不表示傷害、踉蹌強度或暈眩時長。若一次成功後的後續事件落在冷卻內，事件不能視為新的獨立機率檢查。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_224`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_224.png)｜[Issue附件](https://github.com/user-attachments/assets/3c0b7dca-c490-4cd0-8c2f-d175f3a6f75f)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電擊錘等級覆寫 | [電擊錘等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua#L521-L574) |
| 電擊錘Buff接入 | [電擊錘Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua#L78-L102) |
| UI 電擊錘 | [UI 電擊錘](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L436) |
| 電擊錘 阿格尼 Mk Ia匯入 | [電擊錘 阿格尼 Mk Ia匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L15) |
| 電擊錘 阿格尼 Mk Ia接入 | [電擊錘 阿格尼 Mk Ia接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L1520-L1522) |
| 電擊錘 軍務部 Mk III匯入 | [電擊錘 軍務部 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L15) |
| 電擊錘 軍務部 Mk III接入 | [電擊錘 軍務部 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L1607-L1609) |
| 電弧鎚等級覆寫 | [電弧鎚等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua#L218-L270) |
| 電弧鎚Buff接入 | [電弧鎚Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L75-L100) |
| UI 電弧鎚 | [UI 電弧鎚](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L467) |
| 電弧鎚 布蘭克斯 Mk III匯入 | [電弧鎚 布蘭克斯 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L16) |
| 電弧鎚 布蘭克斯 Mk III接入 | [電弧鎚 布蘭克斯 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L2629-L2631) |
