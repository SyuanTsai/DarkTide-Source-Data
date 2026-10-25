# 驅魔者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_chained_weakspot_hits_vents_warpcharge`／hash`e6a1baba`；描述鍵`loc_trait_bespoke_chained_weakspot_hits_vents_warpcharge_desc`／hash`f03d2925`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Exorcist／驅魔者。

- 文件名稱：驅魔者(Exorcist)。

- 適用武器：烈焰力場劍；描述鍵`loc_trait_bespoke_chained_weakspot_hits_vents_warpcharge_desc`／hash`f03d2925`。

- 英文模板：Quell {warp_charge:%s} of Peril on Repeated Weak Spot Hit.

- 繁中模板：重複命中弱點後，增加{warp_charge:%s}反噬。

- **靜態重建**：本體資源 content/localization/items：名稱 key loc_trait_bespoke_chained_weakspot_hits_vents_warpcharge，EN「Exorcist」、zh-TW「驅魔者」，hash e6a1baba；描述 key loc_trait_bespoke_chained_weakspot_hits_vents_warpcharge_desc，EN「Quell {warp_charge:%s} of Peril on Repeated Weak Spot Hit.」、zh-TW「重複命中弱點後，增加{warp_charge:%s}反噬。」、hash f03d2925。當前武器 UI 名稱由 family、pattern、mark 三個 key 組成；三型號依序為「烈焰力場劍 朦朧 Mk II」、「烈焰力場劍 戴莫斯 Mk IV」、「烈焰力場劍 伊利斯 Mk V」。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發事件與弱點門檻 | Quell ... of Peril on Repeated Weak Spot Hit／重複命中弱點後，增加…反噬 | [wrapper event and gates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L66-L105); [weakspot check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L473-L475) | 明確矛盾 | 英文 Quell 與程式的 decrease_immediate 都是降低反噬；弱點檢查先於 proc_func，未命中弱點不會進入其 else 分支。 |
| 等級數值與格式 | {warp_charge:%s} | [tier values and tooltip format](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L543-L573) | 一致 | 0.02／0.03／0.04／0.05 是全量儀表的2／3／4／5個百分點，非當前反噬值的相對百分比。 |
| 計數與連擊 | Repeated Weak Spot Hit | [proc dispatch order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L311-L339); [combo updates and timeout](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L494-L512) | 文件未涵蓋 | counter 從0開始；首次弱點事件把值設為1；後續 combo_count>0 的弱點事件使值超過1並消解。只在合格弱點事件中 combo_count 回到0時重新起算。 |
| 同揮擊多目標 | 未提及每揮擊觸發次數 | [per-target weakspot aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L786-L793); [single sweep-finish event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L963) | 文件未涵蓋 | 每個目標的弱點結果會合併成一個 hit_weakspot，結束時只送出一個 on_sweep_finish。 |
| 特殊攻擊 | 描述未說明特殊攻擊 | [M1 active sweep and activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L336-L347); [special-active profile and activation action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L420-L425) | 文件未涵蓋 | 啟用動作不是揮擊事件；啟用後的近戰蓄能 sweep 命中弱點才符合祝福條件。M2與M3亦有 special-active melee profile。 |
| 持用和切換 | 描述未說明切換時內部計數 | [held-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60); [on-equip trait target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) | 文件未涵蓋 | 一般切換不移除 on_equip buff；切出時持用條件阻止事件處理，切回後沿用 counter。 |
