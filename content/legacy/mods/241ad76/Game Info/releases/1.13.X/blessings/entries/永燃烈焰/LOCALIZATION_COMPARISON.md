# 永燃烈焰：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_ammo_spent_from_reserve_on_crit`／hash`fc0e6843`；描述鍵`loc_trait_bespoke_ammo_spent_from_reserve_on_crit_desc`／hash`e0eb4441`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Everlasting Flame／永燃烈焰。

- 英文模板：Critical Hits spend Ammo from your Reserve instead of your current fuel tank.

- 繁中模板：致命一擊消耗彈藥儲備而非當前燃料箱中的彈藥。

- **靜態重建**：描述沒有等級placeholder，I–IV靜態字串相同；實際trait移入上限為2／3／4／5單位；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 觸發 | 同hash原文Critical Hits／致命一擊 | [新暴擊判定事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) | 條件差異 | 實際新暴擊判定成功，不需命中；玩家採暴擊用語。 |
| 彈藥來源 | 原文instead of current fuel tank | [共享暴擊補彈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)、[射擊消耗](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L560) | 描述與實作不同 | 移入clip而非改變射擊ammo來源，射擊仍正常扣clip。 |
| I–IV數量 | ammo_amount雖format存在，但description沒有placeholder | [共享暴擊補彈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000) | 文件未涵蓋 | trait num_ammmo_to_move 2/3/4/5，各級明確列出。 |
| 上限 | 本體未列 | [共享暴擊補彈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000) | 文件未涵蓋 | 依proc snapshot限制缺額與備彈。 |
| 延續暴擊 | 本體未列 | [連噴暴擊延續](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1068)、[火焰連噴三次暴擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L291-L336) | 文件未涵蓋 | 一次decision最多三次暴擊，但僅一事件。 |
| 排程 | 本體未列 | [事件排入佇列](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992)、[Buff固定更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L144) | 文件未涵蓋 | 事件queued，實際轉移以處理時clip/reserve為準。 |
