# 猛撞：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Crowbar tier I–IV 與 formatter | [Crowbar tier I–IV 與 formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L615-L664) |
| Combatblade tier I–IV 與 formatter | [Combatblade tier I–IV 與 formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L10-L59) |
| Crowbar proc wrapper | [Crowbar proc wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua#L123-L140) |
| Combatblade proc wrapper | [Combatblade proc wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L14-L29) |
| ActionPush 事件與 payload | [ActionPush 事件與 payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L52-L115) |
| PushAttack 計數與 profile/filter | [PushAttack 計數與 profile/filter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L32-L107) |
| ProcBuff timer | [ProcBuff timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104) |
| ProcBuff reproc/cooldown | [ProcBuff reproc/cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195) |
| ProcBuff conditional stat | [ProcBuff conditional stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L253) |
| ProcBuff stat override | [ProcBuff stat override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300) |
| ProcBuff valid event refresh | [ProcBuff valid event refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| Held-slot condition | [Held-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Melee critical chance consumer | [Melee critical chance consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| Attack argument defaults | [Attack argument defaults](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L45-L114) |
| Critical PRD round | [Critical PRD round](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10) |
| Round-half-away helper | [Round-half-away helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/math.lua#L108-L116) |
| Trait buff installation | [Trait buff installation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L145-L210) |
| Equip/wield lifecycle | [Equip/wield lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| Unwield lifecycle | [Unwield lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Trait description value selection | [Trait description value selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| Trait percent formatter | [Trait percent formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L32) |
| Trait numeric precision | [Trait numeric precision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| Weapon name composition | [Weapon name composition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| Weapon name localization fields | [Weapon name localization fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| Crowbar actual action and mode | [Crowbar actual action and mode](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L1414-L1650) |
| Crowbar trait binding | [Crowbar trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L2185-L2189) |
| Combatblade M1 actions and binding | [Combatblade M1 actions and binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L799-L1002) |
| Combatblade M1 trait binding | [Combatblade M1 trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L1329-L1333) |
| Combatblade M2 actions and binding | [Combatblade M2 actions and binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L819-L1035) |
| Combatblade M2 trait binding | [Combatblade M2 trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L1363-L1367) |
| Combatblade M3 actions and binding | [Combatblade M3 actions and binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L918-L992) |
| Combatblade M3 trait binding | [Combatblade M3 trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L1307-L1311) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- **Tier 與 wrapper**：撬棍與砍刀各自有完整 I–IV tier 定義；兩個 wrapper 都是 proc_buff、監聽 on_push_finish、active_duration=3、allow_proc_while_active=true，並要求目前持用對應 item slot 及 num_hit_units > 0。

- **事件與計數**：ActionPush 在 PushAttack 與 stamina 處理後為整次動作送出一次 on_push_finish，payload 帶 num_hit_units。PushAttack 以 filter_player_character_push 篩選碰撞目標、選取推擊 damage profile 後呼叫 Attack.execute；合格目標數在攻擊處理後增加，不以實際傷害或 stagger 為條件。弱推可使用外層 push profile；零目標不觸發，多目標仍是一個 finish 事件。

- **持續與刷新**：wrapper 的 active_duration=3 與 allow_proc_while_active=true 讓有效推擊可在效果期間再次 proc 並重設計時；沒有 cooldown 或 stack 數。切換一般持用武器不會移除 on_equip 安裝的 trait buff；held-slot 條件只在該武器正被持用時讓 proc/stat 生效，離手時計時仍繼續。

- **數值覆蓋**：wrapper 的基礎 proc_stat_buffs 設為 0.01；各 tier 提供完整 proc_stat_buffs 表，ProcBuff 使用 tier override 的整張表，因此 tier 數值取代 1%，不會額外再加 1 個百分點。

- **攻擊種類**：Crowbar 的 action_special_activate_1/2 是 toggle_special 模式切換，action_push 才是推擊。Combatblade 三種 mark 的 push action 為推擊；各自上勾拳是 sweep（即使方向欄位含 push 也仍是 sweep），不觸發 on_push_finish。推擊本身呼叫 Attack.execute 時未傳 is_critical_strike，該參數預設 false。

- 設其他基礎、通用、近戰專用及handling來源合計為C；本祝福Δ為撬棍0.05／0.075／0.10／0.125，砍刀0.075／0.10／0.125／0.15。機率池＝clamp(C＋Δ,0,1)；按攻擊設定處理機率轉傷害後，PRD判定前再取到小數點後兩位。

- C＝0.20時，撬棍IV級為0.325，PRD輸入為0.33；砍刀IV級為0.35。相對機率池增幅分別為0.125÷0.20＝62.5%、0.15÷0.20＝75%。取整不改寫tier本身的12.5個百分點。

- 合格推擊事件在整次推擊處理完後更新active_start_time；有效期限為t＜active_start_time＋3。再次觸發重設時間，切出只改持用條件，不暫停期限。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_097`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_097.png)｜[Issue附件](https://github.com/user-attachments/assets/3adb99c8-c2dd-48f4-9632-ec9607f38d3a)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 撬棍等級覆寫 | [撬棍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L615-L666) |
| 撬棍Buff接入 | [撬棍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua#L123-L140) |
| UI 撬棍 | [UI 撬棍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L214) |
| 撬棍 科技教士 型號6匯入 | [撬棍 科技教士 型號6匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L14) |
| 撬棍 科技教士 型號6接入 | [撬棍 科技教士 型號6接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L2187-L2189) |
| 砍刀等級覆寫 | [砍刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L10-L59) |
| 砍刀Buff接入 | [砍刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L14-L29) |
| UI 砍刀 | [UI 砍刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L328) |
| 砍刀 克魯克 Mk VI匯入 | [砍刀 克魯克 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L16) |
| 砍刀 克魯克 Mk VI接入 | [砍刀 克魯克 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L1331-L1333) |
| 砍刀 蠻牛屠夫 Mk III匯入 | [砍刀 蠻牛屠夫 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L16) |
| 砍刀 蠻牛屠夫 Mk III接入 | [砍刀 蠻牛屠夫 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L1365-L1367) |
| 砍刀 克魯克 Mk IV匯入 | [砍刀 克魯克 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L16) |
| 砍刀 克魯克 Mk IV接入 | [砍刀 克魯克 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L1309-L1311) |
