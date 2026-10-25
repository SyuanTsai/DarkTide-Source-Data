# 粉碎(Shred)：烈焰力場巨劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_2h_p1_chained_hits_increases_crit_chance`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L547-L598)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L49-L51)。
- 適用型號：誓約Mk VI烈焰力場巨劍、誓約Mk VIII烈焰力場巨劍。

## 機制與公式

- 合格近戰揮擊完成後增加一個有效層，多目標不額外加層。[共用父子Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L98-L131)。

- 內部占位層偏移−1；有效上限5層，等級覆寫每層2.5／3／3.5／4個爆擊率百分點。

- 命中刷新共同3.5秒期限，滿層仍刷新；揮空清層。[事件與滿層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)。

- 不比較目標身分；切出武器停止加成，倒數仍繼續。[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

- 普通揮擊開始即判定暴擊，完成後才取得新層。[暴擊先判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L245)、[完成事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961)。

- 同類爆擊機率加算並限制在0至1，再用偽隨機分布判定；5%基準加IV級5層為`5% + 5 × 4% = 25%`，另有10百分點時為35%。[機率結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L39)。

- 靈能推擊後的定點傷害動作發出on_action_damage_target，不是本祝福的on_sweep_finish；單純定點傷害不加層。[定點傷害事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L149-L162)。

- 數值：`{"unit": "每層爆擊率百分點", "per_stack_percentage_points": [2.5, 3, 3.5, 4], "max_effective_stacks": 5, "shared_duration_seconds": 3.5}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
