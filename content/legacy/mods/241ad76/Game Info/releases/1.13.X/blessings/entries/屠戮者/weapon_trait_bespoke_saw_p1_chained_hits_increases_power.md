# 屠戮者(Decimator)：骨鋸實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_saw_p1_chained_hits_increases_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L10-L63)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_saw_p1_buff_templates.lua#L13-L15)。
- 適用型號：外科醫師Mk IV骨鋸。

## 機制與公式

- 每次合格近戰揮擊完成取得一個有效層；多目標仍只取得一層，新增加成供後續攻擊使用。[共用父層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L132-L165)。

- 內部占位層偏移−1，有效層上限10；父層等級覆寫每層2／3／4／5%近戰威力。[有效層與偏移](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L429)。

- 滿層命中仍刷新共同2秒期限；揮空清空有效層。[事件處理](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)。

- 更換目標不重置；切出武器停止加成，期限仍繼續經過。[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

- 威力公式為`P × (1 + s + n × v)`，其中s為既有同階段加成、n為有效層、v為每層增幅；IV級10層使500威力變750，已有25%時625變875，相對增加40%。[威力結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)。

- 骨鋸描述的層數格式讀取子Buff的max_stacks=10；實際父層等級覆寫也為10，顯示與有效上限一致。

- 塗層切換動作為toggle_special，本身不產生on_sweep_finish；後續近戰sweep依共用命中判定加層。[塗層切換](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L1436-L1442)。

- 數值：`{"unit": "每層近戰威力", "per_stack_percent": [2, 3, 4, 5], "max_effective_stacks": 10, "shared_duration_seconds": 2}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
