# 撕碎：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_bleed_on_non_weakspot_hit`／hash`d83d803a`；描述鍵`loc_trait_bespoke_bleed_on_non_weakspot_hit_desc`／hash`4d1dd2bd`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Lacerate／撕碎。

- 文件名稱：撕碎(Lacerate)。

- 適用武器：戰刃、短刀；描述鍵`loc_trait_bespoke_bleed_on_non_weakspot_hit_desc`／hash`4d1dd2bd`。

- 英文模板：{stacks:%s} Bleed Stacks on non-Weak Spot Hits.

- 繁中模板：擊中非弱點部位的流血層數{stacks:%s}。

- **靜態重建**：RAW name loc_trait_bespoke_bleed_on_non_weakspot_hit：EN/zh-tw Lacerate／撕碎，hash d83d803a；description loc_trait_bespoke_bleed_on_non_weakspot_hit_desc：EN {stacks:%s} Bleed Stacks on non-Weak Spot Hits.／zh-tw 擊中非弱點部位的流血層數{stacks:%s}。，hash 4d1dd2bd。保留原文的非弱點語意，不把投擲或弱點命中納入。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| I–IV層數 | {stacks:%s} Bleed Stacks／非弱點命中的流血層數 | [兩個 trait 的 tier 覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L294-L330) | 一致 | Combat Knife 與 Dual Shivs 都覆寫為1／2／3／4。 |
| 觸發條件 | Hits on non-Weak Spot／擊中非弱點部位 | [非弱點近戰判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L481-L483)、[傷害門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L465-L467) | 文件未涵蓋 | 實作另要求 melee、damage>0、物品匹配、事件處理時仍持用；不要求暴擊或擊殺。 |
| 特殊攻擊 | 本體未列特殊攻擊規則 | [Combat Knife special jab](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L542-L549)、[BuffUtils special gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L81-L89) | 文件未涵蓋 | Wrapper 沒有 allow_weapon_special=false；jab 可在非弱點且造成傷害時觸發。Dual Shivs throw 因 ranged 不符合 melee。 |
| 多目標／首目標 | 本體未說明 | [ActionSweep per-target processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1091-L1112) | 文件未涵蓋 | 沒有 first-target gate；不同存活目標各自檢查，掃擊結果按目標去重。 |
| 共用流血衰減 | 本體未列上限與期限 | [Bleed buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L258)、[interval update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64) | 文件未涵蓋 | 目標共用上限16、期限1.5秒、節拍0.5秒；到期後逐節拍移除1層，跳傷先於移層。 |
