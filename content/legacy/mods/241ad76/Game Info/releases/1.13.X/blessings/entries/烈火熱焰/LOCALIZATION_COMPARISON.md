# 烈火熱焰：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increase_close_damage_on_close_kill`／hash`41f0c1d1`；描述鍵`loc_trait_bespoke_increase_close_damage_on_close_kill_desc`／hash`72a8e537`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Fire Frenzy／烈火熱焰。

- 文件名稱：烈火熱焰(Fire Frenzy)。

- 適用武器：步兵自動槍、槍托自動槍、矛頭爆矢槍、撕裂槍、戰鬥霰彈槍、滅絕者霰彈槍、衝覆者霰彈手槍和防暴盾牌；描述鍵`loc_trait_bespoke_increase_close_damage_on_close_kill_desc`／hash`72a8e537`。

- 英文模板：Gain {close_damage:%s} Close Damage for {time:%s} seconds after killing an enemy at close range, stacking {stacks:%s} times.

- 繁中模板：近距離擊殺敵人後，近戰傷害增加{close_damage:%s}，持續{time:%s}秒，最多疊加{stacks:%s}層。

- **靜態重建**：名稱 key loc_trait_bespoke_increase_close_damage_on_close_kill：locale 0 Fire Frenzy、locale 16 烈火熱焰，hash 41f0c1d1。
描述 key loc_trait_bespoke_increase_close_damage_on_close_kill_desc hash 72a8e537；英文 RAW：Gain {close_damage:%s} Close Damage for {time:%s} seconds after killing an enemy at close range, stacking {stacks:%s} times.
繁中 RAW：近距離擊殺敵人後，近戰傷害增加{close_damage:%s}，持續{time:%s}秒，最多疊加{stacks:%s}層。
各組 I–IV 依各自 RAW 占位欄位及等級 formatter 逐級重建；以下是靜態文字重建，不是遊戲畫面或實機測試。

| Tier | Locale 0 reconstruction | Locale 16 reconstruction |
|---|---|---|
| I | Gain +7% Close Damage for 3.5 seconds after killing an enemy at close range, stacking 5 times. | 近距離擊殺敵人後，近戰傷害增加+7%，持續3.5秒，最多疊加5層。 |
| II | Gain +8% Close Damage for 3.5 seconds after killing an enemy at close range, stacking 5 times. | 近距離擊殺敵人後，近戰傷害增加+8%，持續3.5秒，最多疊加5層。 |
| III | Gain +9% Close Damage for 3.5 seconds after killing an enemy at close range, stacking 5 times. | 近距離擊殺敵人後，近戰傷害增加+9%，持續3.5秒，最多疊加5層。 |
| IV | Gain +10% Close Damage for 3.5 seconds after killing an enemy at close range, stacking 5 times. | 近距離擊殺敵人後，近戰傷害增加+10%，持續3.5秒，最多疊加5層。 |

以上為 I–IV 的靜態文字比較；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| RAW與名稱 | locale 0/16名稱Fire Frenzy/烈火熱焰 hash41f0c1d1，描述hash72a8e537。 | 描述含close_damage、time、stacks formatter placeholders。 | 繁中「近戰傷害」與damage_near距離消費不等同。 | 用近距離傷害說明此詞；其餘RAW未寫條件分類為文件未涵蓋。 |
| own等級與formatter | 7個trait各自I–IV damage_near=.07/.08/.09/.10。 | 每組child_duration四級都是3.5秒。 | 每個formatter依自己的trait override與child buff_template重建。 | 每層+7/+8/+9/+10%，最多5層。 |
| trigger gate | base parent的on_kill同樣用於add-child。 | 要求exact item match和on_ranged_close_kill。 | 要求died、ranged或count_as_ranged_attack、hit point距離≤12.5m。 | parent held-slot條件也要通過；沒有額外breed/elite gate。 |
| 層、期限、切換 | max有效層5，offset -1保留零效果佔位。 | 每個add path刷新共用3.5秒timer，滿層零新增也刷新。 | 切出停用held proc/stat但不卸parent，timer持續。 | 到期清除有效child；期限內切回剩餘層可在cache更新後恢復。 |
| 受益stat | damage_near分類為additive_multiplier。 | 在12.5–30m近遠端間以sqrt scalar內插。 | 消費端不檢查attack_type；trigger另要求ranged kill。 | 距離分支增值不是所有攻擊的最終傷害同率提升。 |
