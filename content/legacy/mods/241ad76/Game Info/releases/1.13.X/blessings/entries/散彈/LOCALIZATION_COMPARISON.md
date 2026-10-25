# 散彈：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_crit_chance_on_hitting_multiple_with_one_shot`／hash`83faa1f6`；描述鍵`loc_trait_bespoke_crit_chance_on_hitting_multiple_with_one_shot_desc`／hash`f8a4f721`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Scattershot／散彈。

- 文件名稱：散彈(Scattershot)。

- 適用武器：戰鬥霰彈槍、雙管霰彈槍、獵人霰彈槍、滅絕者霰彈槍、衝覆者霰彈手槍和防暴盾牌；描述鍵`loc_trait_bespoke_crit_chance_on_hitting_multiple_with_one_shot_desc`／hash`f8a4f721`。

- 英文模板：{crit_chance:%s} Critical Chance for each Enemy Hit by your previous attack. Stacks {stacks:%s} times.

- 繁中模板：上一次攻擊命中每命中一個敵人，你的暴擊幾率{crit_chance:%s}，最多疊加{stacks:%s}層。

- **靜態重建**：同一資源 RAW 為 `Scattershot`／`散彈`（name hash `83faa1f6`）及 `{crit_chance:%s} Critical Chance for each Enemy Hit by your previous attack. Stacks {stacks:%s} times.`／`上一次攻擊命中每命中一個敵人，你的暴擊幾率{crit_chance:%s}，最多疊加{stacks:%s}層。`（description hash `f8a4f721`）。五個 format_values 均用 percentage、prefix `+`，值從各自 parent 的 I–IV conditional_stat_buffs.ranged_critical_strike_chance override取得；helper乘100並自動精度為+6%/+8%/+10%/+12%。stacks從child `max_stacks=5`以number格式呈現為5；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱／描述與鍵hash | 同一resource的RAW：Scattershot／散彈，name hash 83faa1f6；description hash f8a4f721。 | 五變體文字參數均連到各自tier literal與child max_stacks。 | 一致 | 本項用原文hash，不自行改寫RAW。 |
| 每個目標的暴擊加成 | EN says `{crit_chance:%s} Critical Chance for each Enemy Hit by your previous attack`; zh says上一個攻擊命中每命中一個敵人增加暴擊幾率。 | 每個有效child層增加tier ranged_critical_strike_chance；I–IV +6/+8/+10/+12個百分點。 | 一致 | 是爆擊機率池增量，不是傷害加成。 |
| 最低目標門檻 | RAW描述說每個敵人命中會提供加成，未另外列出至少命中兩個不同目標的門檻。 | `num_hit_units>1`才回傳child新增數；命中0或1個不同單位新增0層。 | 文件未涵蓋 | 補充引擎實際門檻，沒有與RAW明文相反的門檻文字。 |
| 單發加層與最大層數 | EN `Stacks {stacks:%s} times`; zh `最多疊加{stacks:%s}層`。 | 完整散彈處理後一次按不同unit加層；child有效上限5。 | 一致 | format參數stacks取child template max_stacks=5。 |
| 彈丸去重與Enemy範圍 | RAW說each Enemy Hit，未明列同一敵人多pellet去重或可傷害物件。 | 命中按unique unit計；沒有enemy/breed gate，active damageable hazard prop也可能計入。 | 明確矛盾 | 程式可計入非敵人的可傷害物件，範圍比Enemy字面廣；同一unit重複命中只算一次。 |
| 層數持續與重置 | RAW稱previous attack，未列 duration/cooldown/reset事件。 | 無child_duration/cooldown；任何武器的shoot_pellets action-start事件都清除仍安裝的層數，非pellet action不清。 | 文件未涵蓋 | 切出時stat失效但層數不按時間遞減；若其他武器開始散彈射擊仍會清層。 |
| 遠程攻擊限定 | RAW只寫Critical Chance，沒有說明攻擊類型。 | tier literal覆寫ranged_critical_strike_chance，不提高shield/stock melee critical chance。 | 文件未涵蓋 | 補明實際stat類型與shotpistol+shield近戰例外。 |
| 各型號射擊模式 | RAW未列hip/ADS/double-barrel/block-shoot差別。 | 九個綁定射擊都是shoot_pellets；完整shell只送一次事件，雙管特殊殼仍用同一unique hit count。 | 文件未涵蓋 | bash/sweep與toggle-special本身不產生pellet shoot事件。 |
| 切槽後的清除範圍 | RAW未說切槽或清除事件來源。 | 仍安裝的on_equip祝福buff會接收玩家buff extension的action-start事件；任何武器的shoot_pellets動作開始都能清層，持用槽條件只限制加層與stat。 | 文件未涵蓋 | 切換或非散彈動作本身不清層；切出後若另一把武器開始散彈射擊，保留層數會被清除。 |
