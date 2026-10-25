# 斷肢者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_bonus_on_first_attack`／hash`0bc02d91`；描述鍵`loc_trait_bespoke_power_bonus_on_first_attack_desc`／hash`b8511cfd`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Limbsplitter／斷肢者。

- 文件名稱：斷肢者(Limbsplitter)。

- 適用武器：戰鬥斧、戰術斧、工兵鏟、撬棍、戴維爾戰鎬、碎骨者、骨鋸；描述鍵`loc_trait_bespoke_power_bonus_on_first_attack_desc`／hash`b8511cfd`。

- 英文模板：{power_level:%s} Strength on your First Attack every {cooldown:%s} seconds.

- 繁中模板：每{cooldown:%s}秒，你的第一擊威力提升{power_level:%s}。

- **靜態重建**：依同一 RAW 描述句型，以實際 own tier formatter 重建。`power_level` 使用 percentage 格式並帶 `+` 前綴；`cooldown` 取 `no_power_duration` 秒。六家族各級共用下列四組英／繁中代值：
- I — EN: `+60% Strength on your First Attack every 5 seconds.`；ZH: `每5秒，你的第一擊威力提升+60%。`
- II — EN: `+60% Strength on your First Attack every 4.5 seconds.`；ZH: `每4.5秒，你的第一擊威力提升+60%。`
- III — EN: `+60% Strength on your First Attack every 4 seconds.`；ZH: `每4秒，你的第一擊威力提升+60%。`
- IV — EN: `+60% Strength on your First Attack every 3.5 seconds.`；ZH: `每3.5秒，你的第一擊威力提升+60%。`
重型歐格林鎚使用相同句型：
- I — EN: `+17.5% Strength on your First Attack every 2 seconds.`；ZH: `每2秒，你的第一擊威力提升+17.5%。`
- II — EN: `+20% Strength on your First Attack every 2 seconds.`；ZH: `每2秒，你的第一擊威力提升+20%。`
- III — EN: `+22.5% Strength on your First Attack every 2 seconds.`；ZH: `每2秒，你的第一擊威力提升+22.5%。`
- IV — EN: `+25% Strength on your First Attack every 2 seconds.`；ZH: `每2秒，你的第一擊威力提升+25%。`
各級使用相同描述句型。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱／翻譯 | 本體名稱鍵 loc_trait_bespoke_power_bonus_on_first_attack；RAW 為 Limbsplitter／斷肢者 | 同一 localization resource/hash 配對（localized_keys.json）；文件沿用繁中本體名稱 | 一致 | 沒有名稱翻譯差異。 |
| 威力值與格式 | 描述參數 {power_level:%s}；七個 own trait formatter 均讀取對應的條件式 melee_power_level_modifier | TraitValueParser 的 percentage 乘 100；六家族 tier=.60，重型鎚為 .175/.20/.225/.25；格式前綴為 + | 一致（重型鎚另有數值分支） | formatter 從實際 own tier 取得值，不把 template fallback 誤當額外加成。 |
| 第一擊與時間 | RAW: “{power_level:%s} Strength on your First Attack every {cooldown:%s} seconds.”／「每{cooldown:%s}秒，你的第一擊威力提升{power_level:%s}。」 | 基底在合格 on_hit 處理時設定 deadline=current fixed time + own no_power_duration；到期後下一個合格事件使用第一組 stat | 核心一致；實作條件未涵蓋 | RAW 未列持用、初始快取可用與事件處理時點，均屬文件未涵蓋。 |
| 等待、刷新與疊層 | RAW 說 every {cooldown} seconds，未描述層數或重設方式 | 持用且當前統計快取選中加成組時，近戰攻擊消耗 p；來源物品、melee 類型與 held 的 on_hit 檢查在傷害後決定是否重設 deadline。 | 核心時間語意相符；可用狀態與刷新條件未涵蓋 | RAW 未描述疊層；合格命中在傷害結算後重設等待，事件 gate 不限制目前快取中的威力消耗。 |
| 傷害路徑與武器差異 | RAW 未列出 attack type、special、push 或追加傷害規則 | PowerLevel 先套 power-type curve，再讀 additive melee modifier；純 push 為 push 類型不消耗此 melee modifier，骨鋸 delayed rip 不刷新但可讀當前 melee cache。 | 文件未涵蓋 | 實際 action/profile 表與 Attack.execute 路由限定此結論；不將威力百分比等同最終HP傷害。 |
