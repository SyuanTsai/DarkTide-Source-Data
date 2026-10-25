# 驅魔者：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Exorcist buff wrapper, event and counter | [Exorcist buff wrapper, event and counter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L66-L105) |
| Exorcist tier overrides and tooltip formatting | [Exorcist tier overrides and tooltip formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L543-L573) |
| Proc dispatch, condition, check, and proc order | [Proc dispatch, condition, check, and proc order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L311-L339) |
| Weakspot-only check | [Weakspot-only check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L473-L475) |
| ActionSweep per-target weakspot aggregation | [ActionSweep per-target weakspot aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L786-L793) |
| ActionSweep emits one completion event with combo count | [ActionSweep emits one completion event with combo count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L963) |
| ActionHandler passes current combo count into a new action | [ActionHandler passes current combo count into a new action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L288-L291) |
| ActionHandler updates or clears combo count on action transition | [ActionHandler updates or clears combo count on action transition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L494-L512) |
| ActionHandler applies idle combo reset | [ActionHandler applies idle combo reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L161-L165) |
| ActionHandler default and weapon combo reset duration | [ActionHandler default and weapon combo reset duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L1149-L1161) |
| Buff only processes while its item slot is wielded | [Buff only processes while its item slot is wielded](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Trait buffs default to on_equip | [Trait buffs default to on_equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| Equipping and unequipping applies/removes equipment buffs | [Equipping and unequipping applies/removes equipment buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L661) |
| Ordinary wield switch applies on_wield and removes on_unwield buffs | [Ordinary wield switch applies on_wield and removes on_unwield buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L685-L692) |
| Buff start callback initializes template counter | [Buff start callback initializes template counter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L129-L133) |
| Immediate WarpCharge decrease | [Immediate WarpCharge decrease](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L94-L114) |
| WarpCharge subtraction and clamp | [WarpCharge subtraction and clamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L18-L24) |
| Current UI composes family, pattern, mark | [Current UI composes family, pattern, mark](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| Current UI reads family/pattern/mark localization keys | [Current UI reads family/pattern/mark localization keys](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| M1 basic sweep and special-active damage profile | [M1 basic sweep and special-active damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L336-L347) |
| M1 special-active damage type/profile and separate activation action | [M1 special-active damage type/profile and separate activation action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L420-L425) |
| M1 special activation is a separate action | [M1 special activation is a separate action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1449-L1460) |
| M1 trait import and append | [M1 trait import and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L15) |
| M2 basic sweep and special-active damage profile | [M2 basic sweep and special-active damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L332-L347) |
| M2 special-active profile/type and separate activation action | [M2 special-active profile/type and separate activation action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L417-L423) |
| M2 special activation is a separate action | [M2 special activation is a separate action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1359-L1371) |
| M2 trait import and append | [M2 trait import and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L15) |
| M3 melee sweep and special-active profile | [M3 melee sweep and special-active profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L225-L240) |
| M3 special-active profile | [M3 special-active profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L308-L311) |
| M3 special activation is a separate action | [M3 special activation is a separate action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1226-L1237) |
| M3 uses deactivate-after-activation special class | [M3 uses deactivate-after-activation special class](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1254-L1260) |
| M3 trait import and append | [M3 trait import and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L15) |
| ActionSweep snapshots the combo count at action start | [ActionSweep snapshots the combo count at action start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L217-L220) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L15) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1745) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1747) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L15) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1671) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1673) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L15) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1539) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1541) |
| 非sticky弱點結果彙總 | [非sticky弱點結果彙總](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1448-L1458) |
| 黏附停止送單次sweep事件 | [黏附停止送單次sweep事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L646-L664) |
| finish防重複黏附事件 | [finish防重複黏附事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L405-L429) |
| 切出只移除on_wield | [切出只移除on_wield](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

固定版本的祝福是 proc_buff，監聽一次揮擊結束事件，並要求祝福武器所在欄位目前正被持用。ProcBuff 先執行持用條件，再執行 on_weakspot_hit 檢查；只有弱點命中才會進入 proc_func，因此未命中弱點或揮空不會走到 proc_func 的重設分支。ActionSweep 對每個命中目標執行攻擊，將各目標弱點結果以 OR 合併，並在揮擊結束時送出單一事件及該動作開始時取得的 combo_count，所以一記多目標揮擊最多觸發一次。wrapper 啟動時將內部 counter 設為0；弱點事件若 combo_count > 0 就將 counter 加一，否則設為1；更新後 counter > 1 時，立即呼叫 WarpCharge.decrease_immediate。於是第一個弱點事件只起算，後續連擊弱點事件消解反噬；弱點事件的 combo_count 回到0時重新起算。ActionHandler 將 combo_count 傳給動作，並於非連擊動作或連擊閒置超過武器設定／預設0.2秒後清零。一般切換只會讓持用條件暫停事件處理；on_equip buff 不因普通切換移除，內部 counter 也不會由切換動作初始化。卸下武器會移除 on_equip buff，重新裝備建立新 buff 時 counter 才回到0。三型號的特殊攻擊啟用動作本身是 activate_special；啟用後的近戰動作仍是 sweep，並採用 special-active damage profile，因此只有該揮擊實際命中弱點才觸發。

tier override 0.02／0.03／0.04／0.05 是全量反噬表的比例值；因儀表範圍為0到1，0.05 × 100 = 5個百分點。WarpCharge helper 對目前值直接作 current − remove_percentage 並夾在[0,1]，所以40%−5個百分點=35%，而不是40%×(1−5%)=38%。同一事件只有一次 on_sweep_finish，故多目標命中不會將消解值乘上命中數。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_002`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_002.png)｜[Issue附件](https://github.com/user-attachments/assets/bc5a089b-7227-4993-882a-a5fe0085e6f2)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 烈焰力場劍等級覆寫 | [烈焰力場劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L543-L573) |
| 烈焰力場劍Buff接入 | [烈焰力場劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L66-L107) |
| UI 烈焰力場劍 | [UI 烈焰力場劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L263) |
| 烈焰力場劍 朦朧 Mk II匯入 | [烈焰力場劍 朦朧 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L15) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1745-L1747) |
| 烈焰力場劍 戴莫斯 Mk IV匯入 | [烈焰力場劍 戴莫斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L15) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1671-L1673) |
| 烈焰力場劍 伊利斯 Mk V匯入 | [烈焰力場劍 伊利斯 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L15) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1539-L1541) |
