# 憤怒：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_chained_hits_increases_cleave`／hash`fd5eeb07`；描述鍵`loc_trait_bespoke_chained_hits_increases_cleave_desc`／hash`a2e0518c`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Wrath／憤怒。

- 文件名稱：憤怒(Wrath)。

- 適用武器：重型開膛劍、突擊鏈鋸劍、「惡魔之爪」劍、重劍、烈焰力場巨劍、戴維爾戰鎬、上古神刃、動力劍、動力彎刀、骨鋸；描述鍵`loc_trait_bespoke_chained_hits_increases_cleave_desc`／hash`a2e0518c`。

- 英文模板：{cleave:%s} Cleave on Hit. Stacks {stacks:%s} times.

- 繁中模板：在攻擊時{cleave:%s}順劈，可疊加{stacks:%s}次。

- **靜態重建**：RAW 名稱鍵 loc_trait_bespoke_chained_hits_increases_cleave，hash fd5eeb07；描述鍵 loc_trait_bespoke_chained_hits_increases_cleave_desc，hash a2e0518c。玩家文案保留「命中增加順劈、最多5層」核心，並說明實際是每段至少命中一名敵人加一層、三種 tier 數值組合及全部失效條件。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 等級數值 | 本體{cleave:%s}與{stacks:%s}占位。 | [動力劍tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p1.lua#L10-L59)；[骨鋸tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L480-L531) | 一致 | 八變體每層25/30/35/40；動力劍35/40/45/50；骨鋸10/15/20/25。 |
| 繁中命中條件 | 繁中模板「在攻擊時」；英文模板「on Hit」。 | [掃擊完成事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L963)；[num_hit_units門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L64-L97) | 明確矛盾 | 繁中將命中條件寫成攻擊；程式要求揮擊至少命中一名敵人，揮空反而清層。 |
| 觸發時點 | 本體說命中時順劈。 | [掃擊完成事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L963)；[num_hit_units門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L64-L97) | 文件未涵蓋 | 揮擊完成且至少一命中，每次一層，不按敵人數加層。 |
| 有效層數 | 本體可堆疊5次。 | [基準隱藏層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L39)；child offset−1及max5。 | 一致 | raw總量最多6，有效只0–5。 |
| 順劈結算 | 本體只列Cleave。 | [攻擊質量消費](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L38-L80) | 文件未涵蓋 | 百分比加算後乘基礎attack mass；impact不受此stat改動。 |
| 揮空與逾時 | 本體未列清層。 | [揮空清除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)；[3.5秒清層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L132) | 文件未涵蓋 | 揮空與逾時清除全部有效層數，非逐層衰減。 |
| 滿層刷新 | 本體未列滿層維持。 | [滿層傳0新增](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L67-L72)；[0次迴圈後刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L163) | 文件未涵蓋 | 滿層成功揮擊仍刷新3.5秒。 |
| 切換武器 | 本體未列持用限制。 | [proc/stat持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L64-L97)；[reset callbackfalse](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L52-L62) | 文件未涵蓋 | 切出加成停用，原計時仍進行；未逾時重持可恢復。 |
| 黏附與特殊動作 | 本體未列特殊攻擊時點。 | [鋸傷迴圈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L739-L809)；[停止黏附事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L646-L664) | 文件未涵蓋 | 黏附結束才一次；單純推擊/模式啟動不送sweepfinish。 |
