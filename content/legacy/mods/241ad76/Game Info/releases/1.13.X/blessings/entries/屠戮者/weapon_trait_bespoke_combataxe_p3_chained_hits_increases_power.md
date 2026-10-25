# 屠戮者(Decimator)：工兵鏟實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combataxe_p3_chained_hits_increases_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua#L10-L63)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p3_buff_templates.lua#L14-L16)。
- 適用型號：軍務部標配工兵鏟、軍務部Mk III工兵鏟、軍務部Mk VII工兵鏟。

## 機制與公式

- 每次合格近戰揮擊完成取得一個有效層；多目標仍只取得一層，新增加成供後續攻擊使用。[共用父層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L132-L165)。

- 內部占位層偏移−1，有效層上限10；父層等級覆寫每層2／3／4／5%近戰威力。[有效層與偏移](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L429)。

- 滿層命中仍刷新共同2秒期限；揮空清空有效層。[事件處理](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)。

- 更換目標不重置；切出武器停止加成，期限仍繼續經過。[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

- 威力公式為`P × (1 + s + n × v)`，其中s為既有同階段加成、n為有效層、v為每層增幅；IV級10層使500威力變750，已有25%時625變875，相對增加40%。[威力結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 軍務部標配工兵鏟的特殊上勾攻擊為sweep，命中可觸發；Mk III／VII的特殊動作為toggle_special，切換本身不觸發。[標配上勾](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p3_m1.lua#L866-L899)、[Mk III切換](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p3_m2.lua#L1361-L1367)、[Mk VII切換](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p3_m3.lua#L1365-L1371)。

- 數值：`{"unit": "每層近戰威力", "per_stack_percent": [2, 3, 4, 5], "max_effective_stacks": 10, "shared_duration_seconds": 2}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
