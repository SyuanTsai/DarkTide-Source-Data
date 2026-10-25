# 效率：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_first_shot_ammo_cost_reduction`／hash`18073829`；描述鍵`loc_trait_bespoke_first_shot_ammo_cost_reduction_desc`／hash`1be750a9`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Efficiency／效率。

- 文件名稱：效率(Efficiency)。

- 適用武器：步兵鐳射槍；描述鍵`loc_trait_bespoke_first_shot_ammo_cost_reduction_desc`／hash`1be750a9`。

- 英文模板：{ammo:%s} Reduced Ammo use after not shooting for {time:%s}s.

- 繁中模板：停止射擊{time:%s}秒後彈藥消耗減少{ammo:%s}。

- **靜態重建**：ammo使用固定字串66%；time取本級cooldown_duration，以number formatter輸出必要精度且不加正號。逐級重建如下：

- **I級**：英文 66% Reduced Ammo use after not shooting for 1.25s.；繁中 停止射擊1.25秒後彈藥消耗減少66%。

- **II級**：英文 66% Reduced Ammo use after not shooting for 1s.；繁中 停止射擊1秒後彈藥消耗減少66%。

- **III級**：英文 66% Reduced Ammo use after not shooting for 0.75s.；繁中 停止射擊0.75秒後彈藥消耗減少66%。

- **IV級**：英文 66% Reduced Ammo use after not shooting for 0.5s.；繁中 停止射擊0.5秒後彈藥消耗減少66%。

以上為逐級靜態字串；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | RAW 英文／繁中：Efficiency／效率；name hash 18073829。 | localized_keys.json 的兩語同 hash；實際 item display key 指向此名稱。 | 一致 | 沿用詞表名稱「效率」，無須名稱勘誤。 |
| 停火觸發時間 | RAW：Reduced Ammo use after not shooting for {time:%s}s.；description hash 1be750a9。 | I–IV cooldown_duration 為 1.25／1／0.75／0.5 秒；每次射擊事件都重置冷卻。 | 文件未涵蓋 | RAW 符合停火時間概念，但未說明冷卻中射擊仍重置計時。 |
| 彈藥用量公式 | RAW：{ammo:%s} Reduced Ammo use；固定 ammo 字串 66%。 | 有效關鍵字時以整數用量除以 3 並四捨五入，之後扣現有彈匣彈藥。 | 文件未涵蓋 | RAW 未說明除以 3、整數取整與彈匣限制。 |
| Mk VII／Mk IX | RAW 固定顯示 66%。 | 兩型號 hip／aim 基礎用量 3；3→1，少用 2／3，約 66.7%。 | 一般近似 | 不把取整後的顯示近似列為額外錯誤。 |
| Mk IIb | RAW 固定顯示 66%。 | 實際 hip／aim 基礎用量 2；round(2÷3)=1，少用 1／2，即 50%。 | 數值不符（型號限定） | 66% 不符合此實際綁定 mark 的正常整數結果；英文及繁中共用同 hash。 |
| 模式與型號範圍 | RAW 未列武器 mark、瞄準模式、手電筒特殊動作或切換計時。 | 實際 inventory 僅三個 lasgun_p1 marks 接入；hip/aim 開火，flashlight special 不開火。 | 文件未涵蓋 | 不外推未核對的同家族或其他武器。 |
| 首次、刷新與切換 | RAW未列首次就緒及裝備生命週期 | 新buffoffcooldown；事件處理t刷新；on-equip切出仍保留 | 文件未涵蓋 | off-cooldown分支獨立，圖示顯示門檻不是效果持用門檻。 |
