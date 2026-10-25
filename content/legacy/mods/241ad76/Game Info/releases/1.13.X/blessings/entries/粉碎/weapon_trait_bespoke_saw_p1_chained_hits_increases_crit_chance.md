# 粉碎(Shred)：骨鋸實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_saw_p1_chained_hits_increases_crit_chance`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L64-L113)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_saw_p1_buff_templates.lua#L16-L18)。
- 適用型號：外科醫師Mk IV骨鋸。

## 機制與公式

- 合格近戰揮擊完成後增加一個有效層，多目標不額外加層。[共用父子Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L98-L131)。

- 內部占位層偏移−1；有效上限5層，等級覆寫每層2.5／3／3.5／4個爆擊率百分點。

- 命中刷新共同3.5秒期限，滿層仍刷新；揮空清層。[事件與滿層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)。

- 不比較目標身分；切出武器停止加成，倒數仍繼續。[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

- 普通揮擊開始即判定暴擊，完成後才取得新層。[暴擊先判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L245)、[完成事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961)。

- 同類爆擊機率加算並限制在0至1，再用偽隨機分布判定；5%基準加IV級5層為`5% + 5 × 4% = 25%`，另有10百分點時為35%。[機率結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L39)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 黏附近戰的連續傷害不逐段疊層；停止黏附時才結算一次。[黏附開始與停止](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L616-L664)。

- 數值：`{"unit": "每層爆擊率百分點", "per_stack_percentage_points": [2.5, 3, 3.5, 4], "max_effective_stacks": 5, "shared_duration_seconds": 3.5}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
