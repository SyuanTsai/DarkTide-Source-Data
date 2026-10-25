# 處決：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_damage_vs_stagger`／hash`2e42e848`；描述鍵`loc_trait_bespoke_damage_vs_stagger_desc`／hash`ad2df920`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Execution／處決。

- 文件名稱：處決(Execution)。

- 適用武器：碎骨者、法務官電擊鎚、電弧鎚、爆彈手槍、滅絕者霰彈槍；描述鍵`loc_trait_bespoke_damage_vs_stagger_desc`／hash`ad2df920`。

- 英文模板：{vs_stagger:%s} Damage Bonus vs Staggered enemies.

- 繁中模板：攻擊硬直中的敵人可獲得{vs_stagger:%s}傷害加成。

- **靜態重建**：RAW `{vs_stagger:%s}` 由各 tier `format_values.vs_stagger` 以 percentage 讀取該 tier 的 `stat_buffs.damage_vs_staggered`，加上 `+` 前綴並格式化為百分比。

- name RAW：EN `Execution`、zh-TW `處決`，hash 均為 `2e42e848`。
- description RAW：EN `{vs_stagger:%s} Damage Bonus vs Staggered enemies.`；zh-TW `攻擊硬直中的敵人可獲得{vs_stagger:%s}傷害加成。`，hash 均為 `ad2df920`。
- tier 重建：`.05/.10/.15/.20` → `+5%/+10%/+15%/+20%`。
- RAW 未列持用槽、踉蹌計數／keyword gate、首次踉蹌傷害先後與 additive 傷害階段；由 runtime source 補足，屬文件未涵蓋，不是自相矛盾；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 RAW | EN Execution / zh-TW 處決，name key 雙語 hash 為 2e42e848。 | 五 trait IDs、七 bindings 指同一 key。 | 一致 | localized RAW 與 inventory。 |
| 描述 RAW | EN `{vs_stagger:%s} Damage Bonus vs Staggered enemies.`；zh-TW `攻擊硬直中的敵人可獲得{vs_stagger:%s}傷害加成。`。 | 各 tier formatter 讀 tier override 的 damage_vs_staggered。 | 一致；詳細條件文件未涵蓋 | RAW hash ad2df920，tier formatter 與 shared parser。 |
| 數值 | RAW placeholder 未逐級列數字。 | 固定 source I–IV `.05/.10/.15/.20`，重建 +5/+10/+15/+20%。 | 文件未涵蓋 | 五個 own tier blocks。 |
| 目標狀態 | RAW 沒定義 stagger 欄位。 | Runtime gate 為既有 num_triggered_staggers>0 或 count_as_staggered keyword。 | 文件未涵蓋 | 不以視覺動畫單獨判定。 |
| 首次踉蹌順序 | RAW 沒列攻擊傷害與 hit reaction 時序。 | Attack 先讀現有計數並算傷害，之後 HitReaction 才生效。 | 文件未涵蓋 | 首次被此 hit 踉蹌不回溯加成。 |
| 持用 | RAW 沒列切換條件。 | wrapper 為 is_item_slot_wielded conditional stat。 | 文件未涵蓋 | 裝備 buff 加入；切換由 slot condition 決定。 |
| 傷害範圍 | RAW 沒列最終倍率公式。 | 加到 additive damage_stat_buffs stage，而非最後整擊乘數。 | 文件未涵蓋 | 算例隔離此 stage 並寫明假設。 |
| 術語 | zh-TW RAW 描述原字為「硬直」。 | 詞表將 Stagger 對應為「踉蹌」；正式玩家說明依詞表用語。 | 已確認用語差異；非機制勘誤 | 保留 RAW 原字串並以詞表統一說明用語。 |
| 爆炸及特殊路徑 | RAW 沒列 mark actions。 | Bolt kill/stop explosions 與 P3 chain hits 保留 weapon context 並走 Attack；Shotgun P4 Mk III 特殊彈為 3 秒電擊，Mk VIII 特殊彈為 8 秒且 +0.25 rending。 | 文件未涵蓋 | 各目標獨立狀態 gate；不稱每發射擊必爆炸。 |
| 間隔追加傷害 | RAW未列武器間隔傷害。 | P2/P4 interval Attack讀alive owner當時stat；Execution另查踉蹌；P4踉蹌爆破者tick跳過。 | 文件未涵蓋 | 電擊不等於踉蹌；每筆追加傷害獨立判定，尊重源效果跳過規則。 |
