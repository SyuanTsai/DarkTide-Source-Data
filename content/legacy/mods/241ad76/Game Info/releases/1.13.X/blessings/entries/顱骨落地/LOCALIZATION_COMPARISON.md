# 顱骨落地：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_chained_weakspot_hits_increase_finesse_and_reduce_overheat`／hash`96f66ae3`；描述鍵`loc_chained_weakspot_hits_increase_finesse_and_reduce_overheat_desc`／hash`4aa0176b`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Cranial Grounding／顱骨落地。

- 英文模板：Reduces Heat buildup by {buildup_amount:%s} and increases weakspot damage by {damage:%s} for {duration:%s}s on chained weakspot hits. Stacks {stacks:%s} times.

- 繁中模板：連續命中弱點後，產生的熱能減少{buildup_amount:%s}並增加弱點傷害{damage:%s}，持續{duration:%s}秒。可疊加{stacks:%s}層。

- **靜態重建**：I級產熱減少3%、弱點傷害+1%；IV級產熱減少6%、弱點傷害+4%；兩者均持續3秒、最多5層；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 每層數值 | description damage及buildup_amount參數 | 兩trait I–IV覆寫見[等級數值](TIER_VALUES.md) | 一致 | 每層+1/2/3/4%額外部分，產熱乘0.97/0.96/0.95/0.94。 |
| 連續弱點命中 | 本體描述chained weakspot hits／連續命中弱點 | [第一目標弱點check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L156-L169) | 文件未涵蓋 | 首個目標弱點才增加層數；非弱點不通過check，因此不立刻清層。 |
| 弱點傷害 | 本體描述increases weakspot damage／增加弱點傷害 | [額外部分乘算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L772-L782) | 文件未涵蓋 | 作用於額外部分，並包含暴擊額外部分；不是整次傷害的固定增幅。 |
| 熱量方向 | 本體描述Heat buildup／產生的熱能 | [產熱倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L31-L61)、[持續產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L82-L99) | 一致 | 減少之後產熱，沒有直接消熱量。 |
| 期限與上限 | duration=3；stacks=5 | [共同期限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L162) | 一致 | 3秒、5有效層。 |
| 滿層刷新與換武器 | 本體未列 | [刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L162)、[切出](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) | 文件未涵蓋 | 滿層刷新；切出停用數值但期限持續。 |
| 滿層熱量計算 | 本體只列單層百分比 | [乘算類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L900)、[層數乘算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L717-L728) | 文件未涵蓋 | 使用m^n，IV級5層減少約26.61%，不是30%。 |
