# 粉碎：動力劍P2的來源候選

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 此頁保存交集外定義，不將它直接加入玩家適用武器表。
- 實作：`weapon_trait_bespoke_powersword_p2_chained_hits_increases_crit_chance`。
- [四級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L615-L664)：每層2.5／3／3.5／4個爆擊率百分點。
- [父子Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L188-L190)：clone本祝福共用模板，3.5秒、5有效層。
- [P2 M1模板接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L1741-L1743)與[P2 M2模板接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L2023-L2025)都包含此trait表。

## 執行鏈

- 合格近戰揮擊完成後增加一個有效層，多目標不額外加層。[共用父子Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L98-L131)。

- 內部占位層偏移−1；有效上限5層，等級覆寫每層2.5／3／3.5／4個爆擊率百分點。

- 命中刷新共同3.5秒期限，滿層仍刷新；揮空清層。[事件與滿層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)。

- 不比較目標身分；切出武器停止加成，倒數仍繼續。[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

- 普通揮擊開始即判定暴擊，完成後才取得新層。[暴擊先判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L245)、[完成事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961)。

- 同類爆擊機率加算並限制在0至1，再用偽隨機分布判定；5%基準加IV級5層為`5% + 5 × 4% = 25%`，另有10百分點時為35%。[機率結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L39)。

## 項目關聯缺口

- 固定玩家UI與MasterItems138291快取包含動力劍P2的武器項目。
- 快取未包含指向本trait的祝福項目，故沒有可核對的名稱鍵、描述鍵、圖示或逐型號項目限制。
- 不能由缺少快取交集將它判為未使用，也不能以其他武器的項目欄位替代。
