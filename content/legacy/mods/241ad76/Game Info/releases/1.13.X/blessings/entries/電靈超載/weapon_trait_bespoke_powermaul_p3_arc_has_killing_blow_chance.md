# 電靈超載(Voltagheist Overload)：電弧鎚實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_p3_arc_has_killing_blow_chance`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua#L446-L486)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L113-L172)。

- 適用型號：電弧鎚 布蘭克斯 Mk III。

## 機制與公式

- Trait覆寫target_buff_data.killing_blow_chance為0.05/0.075/0.1/0.125；不是wrapper預設0.2。[實際I–IV機率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua#L446-L484)。

- ProcBuff監聽on_hit=1；conditional_proc_func要求當前slot持用，check依序比對attacking_item.name、HEALTH_ALIVE、attack_type=arc、有效breed，排除captain/monster/ogryn/cultist_captain tags，再作math.random()<p。沒有target_index、暴擊、弱點、傷害量或血量百分比門檻。[處決檢查與執行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L113-L170)、[武器項目比對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L726)。

- 通電揮擊先按普通近戰命中結算，再從仍存活的直接目標或附近替代目標建立電弧。玩家為depth0，敵人為depth>0；遍歷合格存活節點，每個敵人執行一次帶source_item及arc類型的Attack.execute，並非只有first target。make_chain_from_target只呼叫一次_deal_chain_lightning_damage；不是電擊DoT每跳再抽。[通電揮擊產生電弧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1456-L1460)、[揮擊選取電弧根目標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1765-L1786)、[單次電弧傷害](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/utilities/chain_lightning_action.lua#L79-L101)、[每電弧目標命中](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/utilities/chain_lightning_action.lua#L243-L285)、[電弧活目標與深度](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L69-L87)、[電弧攻擊帶武器項目](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L500-L510)。

- Proc事件排隊後處理；存活與持用檢查發生在處理事件時。沒有active_duration/cooldown/stacks；nil cooldown不阻擋下一合格事件。[佇列事件處理](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L261)、[無冷卻Proc啟動](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195)。

- 成功後執行chain_lightning_killing_blow，instakill=true；Attack直接以目標max_health作calculated_damage，不由profile.attack=0推成零傷害。minion無敵仍返回0傷害，正常敵人可被致死。[處決檢查與執行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L113-L170)、[處決傷害模板](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L534-L549)、[處決傷害取最大生命值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L289-L295)、[敵人生命傷害與無敵](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L440-L449)。

- 處決Attack.execute傳入原attack_type/hitzone/damage_type/attacking_unit，但沒有item/slot_name/is_critical_strike。因此本祝福on_item_match不會由這次處決再次通過；不是全域禁用proc。damage_types_no_proc只有grimoire；profile沒有skip_on_hit_proc。Attack仍可排on_hit、致死時on_kill、damage>0時on_damage_dealt；下游各buff另檢自己的條件。[處決檢查與執行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L113-L170)、[全域不觸發型態](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L86-L88)、[命中事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L550-L620)、[擊殺事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L710)、[傷害事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L713-L749)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"killing_blow_chance": [0.05, 0.075, 0.1, 0.125], "proc_event": "on_hit", "attack_type": "arc", "condition": "item_match,held,alive,breed exists,no captain/monster/ogryn/cultist_captain tags", "stacking": false, "cooldown": null}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
