# 煽風點火：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_ignore_stagger_reduction_with_primary_on_burning`／hash`0037e44e`；描述鍵`loc_trait_bespoke_ignore_stagger_reduction_with_primary_on_burning_desc`／hash`ed2f3a74`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Fan the Flames／煽風點火。

- 文件名稱：煽風點火(Fan the Flames)。

- 適用武器：淨化噴火器；描述鍵`loc_trait_bespoke_ignore_stagger_reduction_with_primary_on_burning_desc`／hash`ed2f3a74`。

- 英文模板：Primary Attack ignores {stagger_reduction:%s} Stagger Resistance on Burning Enemies, as well as dealing {impact_modifier:%s} Impact.

- 繁中模板：攻擊正在燃燒的敵人時，主要攻擊無視其{stagger_reduction:%s}硬直抗性，同時造成的衝擊增加{impact_modifier:%s}。

- **靜態重建**：依同一 RAW 描述模板及本特質階級參數逐字代入；減免欄 100×(1−m)，衝擊欄 p×100 並加正號。

- I：Primary Attack ignores 40% Stagger Resistance on Burning Enemies, as well as dealing +30% Impact. ／ 攻擊正在燃燒的敵人時，主要攻擊無視其40%硬直抗性，同時造成的衝擊增加+30%。
- II：Primary Attack ignores 50% Stagger Resistance on Burning Enemies, as well as dealing +35% Impact. ／ 攻擊正在燃燒的敵人時，主要攻擊無視其50%硬直抗性，同時造成的衝擊增加+35%。
- III：Primary Attack ignores 60% Stagger Resistance on Burning Enemies, as well as dealing +40% Impact. ／ 攻擊正在燃燒的敵人時，主要攻擊無視其60%硬直抗性，同時造成的衝擊增加+40%。
- IV：Primary Attack ignores 70% Stagger Resistance on Burning Enemies, as well as dealing +45% Impact. ／ 攻擊正在燃燒的敵人時，主要攻擊無視其70%硬直抗性，同時造成的衝擊增加+45%。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | EN Fan the Flames；zh-TW 煽風點火；同鍵 name hash 0037e44e。 | 本地 RAW 兩語均為此配對。 | 一致 | 名稱鍵、hash、翻譯均相符。 |
| 條件子句範圍 | 英文將 on Burning Enemies 放在 Stagger Resistance 子句；繁中句首先限定燃燒敵人，可能被讀成兩項效果均受限。 | 只有 stagger_burning_reduction_modifier 受 is_burning gate；ranged_impact_modifier 對 ranged attack 直接加算。 | 語意範圍需澄清 | 繁中可拆成「對已燃燒目標降低減免；遠程衝擊另加成」；不是數值或程式錯誤。 |
| 等級數值與 formatter | RAW 用兩個 %s placeholder，沒有內嵌階級數值。 | Tier I–IV 自有值分別 .60/.30、.50/.35、.40/.40、.30/.45；stagger placeholder 經 100×(1−m)，Impact placeholder 直接百分比並加正號。 | 一致 | Formatter 僅做一次百分比轉換，顯示 40/50/60/70% 與 +30/+35/+40/+45%。 |
| 實際型號與動作 | Primary Attack 未點明此型號的未架槍與架槍差別。 | 實際僅 flamer_p1_m1；wrapper valid_actions 僅 action_shoot，架槍是 action_shoot_braced。 | 正文需具體化 | 只對已接入 mark 與 wrapper 明列的 primary 動作表述，不外推。 |
| 效果類型 | Impact 可能被理解為生命傷害百分比。 | ranged_impact_modifier 只進踉蹌 Impact/stat 轉換；Burning DoT 使用 buff attack_type 且 impact power 為 0。 | 需明示語義 | 不可寫成燃燒傷害或生命傷害提高。 |
| 首次施加燃燒 | RAW 未說明同一次 primary 命中是否先燃燒再判定。 | burst resolution 先 direct damage，後單獨加入/刷新 flamer_assault；stagger 只讀當下 target burning keyword。 | 實作補充 | 同一命中後才取得的 burning 不回溯套用；後續命中以 keyword 實際生效為準。 |
| 四階值與實際範圍 | 未列出其他等級與動作限制。 | own trait 四階完整；唯一 inventory binding 限 flamer_p1/flamer_p1_m1。 | 文件補全 | 不能將一把武器限制寫成整個 flamer 家族。 |
