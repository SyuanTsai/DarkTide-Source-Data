# 強力一擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_heavy_chained_hits_increases_killing_blow_chance`／hash`e93686b2`；描述鍵`loc_trait_bespoke_heavy_chained_hits_increases_killing_blow_chance_desc`／hash`a4026775`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Haymaker／強力一擊。

- 文件名稱：強力一擊(Haymaker)。

- 適用武器：戰刃、短刀、惡霸棍棒；描述鍵`loc_trait_bespoke_heavy_chained_hits_increases_killing_blow_chance_desc`／hash`a4026775`。

- 英文模板：{proc_chance:%s} to Instakill human-sized enemies on Chained Heavy Hit. Stacks {stacks:%s} times. Note that other potential triggers will not be activated on Instakill.

- 繁中模板：重擊連擊後秒殺人類大小敵人的機率提升{proc_chance:%s}，可疊加{stacks:%s}層。秒殺敵人時將不會觸發其他效果。

- **靜態重建**：依各級實際 formatter 靜態代入。

- I — EN: +1% to Instakill human-sized enemies on Chained Heavy Hit. Stacks 5 times. Note that other potential triggers will not be activated on Instakill.
  繁中：重擊連擊後秒殺人類大小敵人的機率提升+1%，可疊加5層。秒殺敵人時將不會觸發其他效果。
- II — EN: +2% to Instakill human-sized enemies on Chained Heavy Hit. Stacks 5 times. Note that other potential triggers will not be activated on Instakill.
  繁中：重擊連擊後秒殺人類大小敵人的機率提升+2%，可疊加5層。秒殺敵人時將不會觸發其他效果。
- III — EN: +3% to Instakill human-sized enemies on Chained Heavy Hit. Stacks 5 times. Note that other potential triggers will not be activated on Instakill.
  繁中：重擊連擊後秒殺人類大小敵人的機率提升+3%，可疊加5層。秒殺敵人時將不會觸發其他效果。
- IV — EN: +4% to Instakill human-sized enemies on Chained Heavy Hit. Stacks 5 times. Note that other potential triggers will not be activated on Instakill.
  繁中：重擊連擊後秒殺人類大小敵人的機率提升+4%，可疊加5層。秒殺敵人時將不會觸發其他效果。

各級使用相同句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 各級每層增加1／2／3／4個百分點，上限五層 | 1.13.1 RAW EN/ZH 同 key：proc_chance 與 stacks placeholders；formatter percent+ 和 own max_stacks=5 | combatknife own tier 140–189；父層/子層 base_weapon_trait_buff_templates 274–365 | 一致 | 四級 formatter 結果+1/+2/+3/+4%，五層上限+5/+10/+15/+20% |
| 『連擊後』條件 | RAW EN/ZH 寫 Chained Heavy Hit／重擊連擊後 | CheckProcFunctions.on_heavy_hit 438–446 僅檢查 heavy；parent只檢查 melee+heavy | 文件未涵蓋 | RAW未明定連擊狀態；實作只檢查近戰重擊，不讀取連擊步數。此處不以省略條件一律判為誤譯。 |
| 人類大小目標 | RAW EN/ZH 寫 human-sized／人類大小 | child 300–365 檢查 alive/breed 並排除 captain、monster、ogryn、cultist_captain | 文件未涵蓋 | 沒有幾何尺寸比較；不得把排除清單改寫成尺寸判定 |
| 秒殺時其他效果不觸發 | RAW EN/ZH 尾句作概括否定 | Attack 350–395仍走_handle_buffs；on_hit 581–621及on_kill 669–713各自判斷 | 明確矛盾 | 仍送一般事件，接收端依自身條件判斷，不承諾特定祝福 |
| 每5秒逐層衰退與換武器 | RAW未說期限或切換 | ParentProcBuff 92–182共享計時/逐層移除；held predicate gate | 文件未涵蓋 | 合格事件刷新共享計時，切出停止提供而計時繼續 |
