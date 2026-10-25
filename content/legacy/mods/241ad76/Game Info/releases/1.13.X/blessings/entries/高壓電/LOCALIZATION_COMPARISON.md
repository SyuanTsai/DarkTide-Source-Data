# 高壓電：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_damage_bonus_vs_electrocuded`／hash`7c8a57a6`；描述鍵`loc_trait_bespoke_damage_bonus_vs_electrocuded_desc`／hash`482e94a8`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：High Voltage／高壓電。

- 文件名稱：高壓電(High Voltage)。

- 適用武器：電擊錘、法務官電擊鎚、法務官電擊鎚和鎮壓護盾、滅絕者霰彈槍、衝覆者霰彈手槍和防暴盾牌；描述鍵`loc_trait_bespoke_damage_bonus_vs_electrocuded_desc`／hash`482e94a8`。

- 英文模板：{damage:%s} Damage vs Electrocuted enemies.

- 繁中模板：對遭受電擊的敵人造成{damage:%s}傷害。

- **靜態重建**：名稱鍵 `loc_trait_bespoke_damage_bonus_vs_electrocuded` 的英文 RAW 為 `High Voltage`、zh-TW 為「高壓電」，同資源 hash `7c8a57a6`。描述鍵 `loc_trait_bespoke_damage_bonus_vs_electrocuded_desc` 的中英 RAW 同 hash `482e94a8`；英文 `{damage:%s} Damage vs Electrocuted enemies.`、繁中「對遭受電擊的敵人造成{damage:%s}傷害。」資料 key 的 electrocuded 拼法為原始拼字，trait id suffix 是 damage_bonus_vs_electrocuted。五份 tier formatter 都讀自身 tier override 的 damage_vs_electrocuted，輸出 +10%／+15%／+20%／+25%；不能以 wrapper .5 備用值顯示；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發狀態 | RAW：Damage vs Electrocuted enemies／「對遭受電擊的敵人造成…傷害」，描述 hash 482e94a8。 | MinionState.is_electrocuted 檢查六個 electrocuted group keyword；damage_calculation 因此加入 damage_vs_electrocuted。 | 一致 | 實作不要求施加者或同武器來源。 |
| 持用條件 | RAW 未說是否需持用適用武器。 | 五 wrapper 用 is_item_slot_wielded 作 conditional stat gate。 | 文件未涵蓋 | 玩家說明補充切換條件，不視為 RAW 明載。 |
| 階級數值 | RAW 用 {damage:%s} placeholder，未硬編單一數字。 | 五份 own tier 覆寫 .10/.15/.20/.25；自身 formatter 顯示 +10/+15/+20/+25%。 | 一致 | 同鍵 tier override 取代 wrapper .5 備用值。 |
| damage stat 範圍 | RAW 只寫 Damage，未分主傷害、finesse 或最終血量傷害。 | damage_vs_electrocuted 進通用 additive pool，後面仍有分開計算。 | 文件未涵蓋 | 算例限定主傷害池且下游因素中性。 |
| P1五次黏附實例 | RAW 未寫特殊動作實例/tick先後。 | 每個實例先 Attack.execute 後加 sticky tick；live keyword 在後續 target minion update 重建。 | 文件未涵蓋 | 首個實例在自己施加狀態前；同 loop 下一擊不保證讀到剛加狀態。 |
| P2特攻 | RAW 未寫特攻首次 hit 與施狀態分支。 | on_hit 在攻擊傷害已算完後查電擊；已電擊才加 3.5s electrocuted extra，否則只加 .1s 無 keyword basic。 | 文件未涵蓋 | 未電擊首擊不會由事後 basic stun 自我觸發。 |
| P4 M1/M2特殊彈 | RAW 未區分兩個型號。 | M1全輪pellet damage後加3s electrocuted stun；M2加8s、+.25 rending，沒有 electrocuted keyword。 | 文件未涵蓋 | 不可將M2破甲說成shock。 |
| 推擊及盾牌特殊 | RAW 未描述推擊及喊聲的傷害、狀態。 | push attack=0；鎚盾喊聲不施加電擊，near/far 各護甲 attack modifier 全 0。 | 文件未涵蓋 | 未被其他機制改變時無可放大的直接推擊／喊聲生命傷害，獨立後續傷害另判定。 |
| 目標疊層與期限 | RAW 未寫電擊來源的疊層、期限或刷新。 | sticky 以 .7×stack_count 計共同 duration，最多5層；新增及滿層重施刷新 start_time；P2與霰彈狀態各一層刷新。 | 文件未涵蓋 | 這是目標狀態期限，不是本祝福疊層或五倍加成。 |
| RAW/文件矛盾 | 中英名稱與描述 key/hash 同資源精確配對。 | 未見明確矛盾；未寫細節屬 RAW 省略。 | 一致 | errata 留空；逐項省略標記文件未涵蓋。 |
