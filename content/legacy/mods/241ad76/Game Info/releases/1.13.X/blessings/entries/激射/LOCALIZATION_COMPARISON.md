# 激射：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_cleave_on_weakspot_hits`／hash`83870716`；描述鍵`loc_trait_bespoke_cleave_on_weakspot_hits_desc`／hash`cdc89e43`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Hot-Shot／激射。

- 文件名稱：激射(Hot-Shot)。

- 適用武器：電能步槍、冥潮鐳射槍、針彈手槍；描述鍵`loc_trait_bespoke_cleave_on_weakspot_hits_desc`／hash`cdc89e43`。

- 英文模板：Weak Spot Hits gain {hit_mass_reduction:%s} Cleave.

- 繁中模板：命中弱點時可獲得{hit_mass_reduction:%s}順劈。

- **靜態重建**：I–IV的 `{hit_mass_reduction:%s}` 由 `100 − round(命中質量倍率 × 100)` 重建；電能步槍為20%／25%／30%／35%，冥潮鐳射槍及針彈手槍為20%／30%／40%／50%；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 等級數值 | Weak Spot Hits gain {hit_mass_reduction:%s} Cleave.／命中弱點時可獲得{hit_mass_reduction:%s}順劈。 | [Galvanic trait tier overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L163-L201) | 一致 | 格式化值為1減消耗倍率；三個變體的上限不同。 |
| 本次命中的結算時點 | 本體說弱點命中取得順劈，未描述結算時點。 | [HitScan weakspot before mass and damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L215-L227) | 文件未涵蓋 | 該次命中先被判為弱點，再以較低mass消耗並做停止判斷。 |
| 傷害、衝擊與順劈預算 | 本體概括稱gain Cleave，未具體說明傷害、衝擊或質量預算。 | [Hit mass consumer and both budgets](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L12-L99) | 文件未涵蓋 | 實作降低目標質量消耗；不直接增加等額順劈預算或傷害。 |
| 持用及切換 | 本體未列持用、層數或時限。 | [Wield-conditioned wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L17-L24) | 文件未涵蓋 | 只在trait武器slot持用時提供conditional stat；沒有祝福stack或duration。 |
| 瞄準與特殊攻擊 | 本體未列腰射、瞄準、蓄力或特殊攻擊限制。 | [Generic hit-mass weakspot modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L12-L62) | 文件未涵蓋 | 質量consumer無attack-type gate；同一持用武器的弱點近戰掃擊亦適用。 |
