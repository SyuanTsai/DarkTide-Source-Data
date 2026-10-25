# 粉碎：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`，機制僅依Aussiemon/Darktide-Source-Code。

| 用途 | 固定Git物件與行號 |
|---|---|
| 共用觸發 | [scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L98-L131) |
| 占位與有效層 | [scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L39) |
| 事件與滿層刷新 | [scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76) |
| 期限 | [scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L163) |
| 有效層偏移 | [scripts/extension_systems/buff/buffs/buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L429) |
| 屬性疊層 | [scripts/extension_systems/buff/buffs/buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 攻擊開始暴擊判定 | [scripts/extension_systems/weapon/actions/action_sweep.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L245) |
| 揮擊結束事件 | [scripts/extension_systems/weapon/actions/action_sweep.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961) |
| 活角色命中計數 | [scripts/extension_systems/weapon/actions/action_sweep.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1416-L1428) |
| 爆擊率結算 | [scripts/utilities/attack/critical_strike.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L39) |
| 暴擊關鍵字與判定 | [scripts/extension_systems/weapon/actions/action_weapon_base.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| Buff裝備生命週期 | [scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211) |
| 裝備與卸除 | [scripts/extension_systems/weapon/player_unit_weapon_extension.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L661) |
| 切出武器 | [scripts/extension_systems/weapon/player_unit_weapon_extension.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| 持用條件 | [scripts/settings/buff/helper_functions/conditional_functions.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 覆寫繼承 | [scripts/extension_systems/buff/buffs/buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L221) |
| 可取得等級 | [scripts/backend/crafting.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/backend/crafting.lua#L62-L89) |
| UI有效位元過濾 | [scripts/ui/view_elements/view_element_trait_inventory/view_element_trait_inventory.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/view_elements/view_element_trait_inventory/view_element_trait_inventory.lua#L456-L469) |
| 戰鬥斧等級定義 | [scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua#L64-L113) |
| 戰鬥斧Buff接入 | [scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p1_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p1_buff_templates.lua#L19-L21) |
| 戰鬥斧 拉沙德 Mk III模板 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m1.lua#L14-L14) |
| 戰鬥斧 拉沙德 Mk III接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m1.lua#L1270-L1272) |
| 戰鬥斧 安塔克斯 Mk V模板 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m2.lua#L14-L14) |
| 戰鬥斧 安塔克斯 Mk V接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m2.lua#L1225-L1227) |
| 戰鬥斧 阿克利斯 Mk VIII模板 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m3.lua#L15-L15) |
| 戰鬥斧 阿克利斯 Mk VIII接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m3.lua#L1530-L1532) |
| 戰術斧等級定義 | [scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua#L124-L173) |
| 戰術斧Buff接入 | [scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p2_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p2_buff_templates.lua#L14-L16) |
| 埃托克斯Mk II戰術斧模板 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L13-L13) |
| 埃托克斯Mk II戰術斧接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L1450-L1452) |
| 埃托克斯Mk IV戰術斧模板 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L13-L13) |
| 埃托克斯Mk IV戰術斧接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L1491-L1493) |
| 埃托克斯Mk VII戰術斧模板 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L13-L13) |
| 埃托克斯Mk VII戰術斧接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L1358-L1360) |

## 執行與計算

共用父Buff監聽on_sweep_finish，只看num_hit_units>0，不比較combo_count或目標身分。初始化占位1層，stack_offset−1使起始有效0層；每次合格揮擊加1，最多內部6／有效5層。揮空移除有效層，滿層呼叫加0層仍刷新共同3.5秒期限。[觸發](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L98-L131)、[類別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)、[期限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L163)。

ActionSweep.start先判定暴擊，揮擊結束事件才增加本祝福層數；所以新層數不回溯改變當次暴擊。[開始](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L245)、[結束](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961)。此trait為on_equip；一般切出不移除父Buff，只停止條件效果，期限繼續；切回期限內層數恢復。[生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L661)、[切出](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785)。

爆擊率先加算角色基礎、祝福、近戰及武器處理加成，再限制到0–100%；若有爆擊率轉傷害則另外減少機率。公式`clamp(c + s + n×v, 0, 1)`適用於沒有轉換的例子。[chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)。假設c=.05、s=0、第四組v=.04、n=5，結果`.05+5×.04=.25=25%`；已有s=.10時為35%。玩家意義是增加機率百分點，不是提高整次傷害20%。判定前機率四捨五入到小數第二位，使用偽隨機分布；不把未取整機率當長期實測。[is_critical_strike](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10)。

## 圖示

item.icon `content/ui/textures/icons/traits/weapon_trait_169`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_169.png)｜[Issue #14](https://github.com/SyuanTsai/Media-Assets/issues/14)｜[實際附件](https://github.com/user-attachments/assets/5c459ca2-a946-4f54-b8b5-91c8f0e5b69a)。只作辨識，不作機制依據。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 重型開膛劍等級覆寫 | [重型開膛劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_2h_p1.lua#L377-L426) |
| 重型開膛劍Buff接入 | [重型開膛劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_2h_p1_buff_templates.lua#L19-L21) |
| UI 重型開膛劍 | [UI 重型開膛劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L22) |
| 提格魯斯Mk II重型開膛劍匯入 | [提格魯斯Mk II重型開膛劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L16) |
| 提格魯斯Mk II重型開膛劍接入 | [提格魯斯Mk II重型開膛劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L1537-L1539) |
| 提格魯斯Mk XV重型開膛劍匯入 | [提格魯斯Mk XV重型開膛劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L15) |
| 提格魯斯Mk XV重型開膛劍接入 | [提格魯斯Mk XV重型開膛劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L1538-L1540) |
| 突擊鏈鋸劍等級覆寫 | [突擊鏈鋸劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_p1.lua#L236-L285) |
| 突擊鏈鋸劍Buff接入 | [突擊鏈鋸劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_p1_buff_templates.lua#L19-L21) |
| UI 突擊鏈鋸劍 | [UI 突擊鏈鋸劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L40) |
| 卡迪亞Mk IV突擊鏈鋸劍匯入 | [卡迪亞Mk IV突擊鏈鋸劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L15) |
| 卡迪亞Mk IV突擊鏈鋸劍接入 | [卡迪亞Mk IV突擊鏈鋸劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L2424-L2426) |
| 卡迪亞Mk XIIIg突擊鏈鋸劍匯入 | [卡迪亞Mk XIIIg突擊鏈鋸劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L14) |
| 卡迪亞Mk XIIIg突擊鏈鋸劍接入 | [卡迪亞Mk XIIIg突擊鏈鋸劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L2030-L2032) |
| 「惡魔之爪」劍等級覆寫 | [「惡魔之爪」劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p1.lua#L60-L109) |
| 「惡魔之爪」劍Buff接入 | [「惡魔之爪」劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p1_buff_templates.lua#L16-L18) |
| UI 「惡魔之爪」劍 | [UI 「惡魔之爪」劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L145) |
| 卡塔昌Mk I「惡魔之爪」戰鬥劍匯入 | [卡塔昌Mk I「惡魔之爪」戰鬥劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L14) |
| 卡塔昌Mk I「惡魔之爪」戰鬥劍接入 | [卡塔昌Mk I「惡魔之爪」戰鬥劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L1504-L1506) |
| 卡塔昌Mk IV「惡魔之爪」戰鬥劍匯入 | [卡塔昌Mk IV「惡魔之爪」戰鬥劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L14) |
| 卡塔昌Mk IV「惡魔之爪」戰鬥劍接入 | [卡塔昌Mk IV「惡魔之爪」戰鬥劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L1437-L1439) |
| 卡塔昌Mk VII「惡魔之爪」戰鬥劍匯入 | [卡塔昌Mk VII「惡魔之爪」戰鬥劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L15) |
| 卡塔昌Mk VII「惡魔之爪」戰鬥劍接入 | [卡塔昌Mk VII「惡魔之爪」戰鬥劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L1346-L1348) |
| 決鬥劍等級覆寫 | [決鬥劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p3.lua#L10-L59) |
| 決鬥劍Buff接入 | [決鬥劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p3_buff_templates.lua#L10-L12) |
| UI 決鬥劍 | [UI 決鬥劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L191) |
| 決鬥劍 馬卡比安 Mk II匯入 | [決鬥劍 馬卡比安 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m1.lua#L15) |
| 決鬥劍 馬卡比安 Mk II接入 | [決鬥劍 馬卡比安 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m1.lua#L1688-L1690) |
| 決鬥劍 馬卡比安 Mk IV匯入 | [決鬥劍 馬卡比安 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m2.lua#L15) |
| 決鬥劍 馬卡比安 Mk IV接入 | [決鬥劍 馬卡比安 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m2.lua#L1499-L1501) |
| 決鬥劍 馬卡比安 Mk V匯入 | [決鬥劍 馬卡比安 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m3.lua#L14) |
| 決鬥劍 馬卡比安 Mk V接入 | [決鬥劍 馬卡比安 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m3.lua#L1473-L1475) |
| 烈焰力場巨劍等級覆寫 | [烈焰力場巨劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L547-L598) |
| 烈焰力場巨劍Buff接入 | [烈焰力場巨劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L49-L51) |
| UI 烈焰力場巨劍 | [UI 烈焰力場巨劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L245) |
| 誓約Mk VI烈焰力場巨劍匯入 | [誓約Mk VI烈焰力場巨劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L15) |
| 誓約Mk VI烈焰力場巨劍接入 | [誓約Mk VI烈焰力場巨劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2795-L2797) |
| 誓約Mk VIII烈焰力場巨劍匯入 | [誓約Mk VIII烈焰力場巨劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L15) |
| 誓約Mk VIII烈焰力場巨劍接入 | [誓約Mk VIII烈焰力場巨劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2710-L2712) |
| 烈焰力場劍等級覆寫 | [烈焰力場劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L433-L482) |
| 烈焰力場劍Buff接入 | [烈焰力場劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L59-L61) |
| UI 烈焰力場劍 | [UI 烈焰力場劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L263) |
| 朦朧Mk II烈焰力場劍匯入 | [朦朧Mk II烈焰力場劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L15) |
| 朦朧Mk II烈焰力場劍接入 | [朦朧Mk II烈焰力場劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1745-L1747) |
| 火衛二Mk IV烈焰力場劍匯入 | [火衛二Mk IV烈焰力場劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L15) |
| 火衛二Mk IV烈焰力場劍接入 | [火衛二Mk IV烈焰力場劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1671-L1673) |
| 伊利斯Mk V烈焰力場劍匯入 | [伊利斯Mk V烈焰力場劍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L15) |
| 伊利斯Mk V烈焰力場劍接入 | [伊利斯Mk V烈焰力場劍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1539-L1541) |
| 骨鋸等級覆寫 | [骨鋸等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L64-L113) |
| 骨鋸Buff接入 | [骨鋸Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_saw_p1_buff_templates.lua#L16-L18) |
| UI 骨鋸 | [UI 骨鋸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L565) |
| 外科醫師Mk IV骨鋸匯入 | [外科醫師Mk IV骨鋸匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L14) |
| 外科醫師Mk IV骨鋸接入 | [外科醫師Mk IV骨鋸接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L1833-L1835) |
| 穿音速雙刀等級覆寫 | [穿音速雙刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_transonic_sword_transonic_knife_p1.lua#L10-L59) |
| 穿音速雙刀Buff接入 | [穿音速雙刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua#L13-L15) |
| UI 穿音速雙刀 | [UI 穿音速雙刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L622) |
| 穿音速雙刀 布蘭克斯 Mk XI匯入 | [穿音速雙刀 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L16) |
| 穿音速雙刀 布蘭克斯 Mk XI接入 | [穿音速雙刀 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L3177-L3179) |


## 力場劍圖示

- 本體item.icon：`content/ui/textures/icons/traits/weapon_trait_087`。
- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_087.png)｜[Media-Assets Issue #14](https://github.com/SyuanTsai/Media-Assets/issues/14)｜[實際附件](https://github.com/user-attachments/assets/7e29e9f4-bfe0-4550-8c11-71cc30d70b99)。
- 本祝福其他已列武器變體使用169；力場劍使用087。


## 交集外定義

- [動力劍P2來源候選](weapon_trait_bespoke_powersword_p2_chained_hits_increases_crit_chance.md)：trait、Buff與模板均有接入；祝福項目鍵／限制在本次快取中缺失，保留來源及缺口。
