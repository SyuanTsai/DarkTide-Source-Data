# 致命精準：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_crit_weakspot_finesse`／hash`6b6877ef`；描述鍵`loc_trait_bespoke_crit_weakspot_finesse_desc`／hash`0989d9b9`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Deadly Accurate／致命精準。

- 文件名稱：致命精準(Deadly Accurate)。

- 適用武器：機動自動槍、爆彈手槍、電能步槍、步兵鐳射槍、重伐木槍；描述鍵`loc_trait_bespoke_crit_weakspot_finesse_desc`／hash`0989d9b9`。

- 英文模板：{crit_weakspot_damage:%s} Critical Weak Spot Damage.

- 繁中模板：提高{crit_weakspot_damage:%s}弱點致命一擊傷害。

- **靜態重建**：五個武器的formatter均從自身等級覆寫的 `stat_buffs.critical_strike_weakspot_damage` 取值，以百分比乘100、加 `%` 及 `+` 前綴。機動自動槍、爆彈手槍、步兵鐳射槍與重伐木槍的I–IV重建為+70%／+80%／+90%／+100%；電能步槍為+30%／+40%／+50%／+60%。本體英文「Critical Weak Spot」與繁中「弱點致命一擊」指出爆擊兼弱點概念；持用、結算部分與特殊路徑由固定原始碼補充；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | RAW EN Deadly Accurate／zh-TW 致命精準，兩語 hash 相同。 | 12 inventory bindings 引用同一 name_key，RAW 兩語內容完全配對。 | 一致 | 來源：localized RAW bytes 與 inventory。 |
| 觸發 | RAW Critical Weak Spot Damage 未列詳細條件。 | 傷害端要求 is_critical_strike AND hit_weakspot；wrapper 另要求持用槽。 | 文件未涵蓋 | 單獨爆擊或弱點命中不加值。 |
| 等級與武器差異 | RAW格式參數 `{crit_weakspot_damage:%s}`。 | 自身等級覆寫：四類I–IV為70／80／90／100%；電能步槍30／40／50／60%。 | 重建數值一致；文件未涵蓋武器差異 | formatter依各武器的等級覆寫顯示；完整文件集中列出差異。 |
| 傷害範圍 | RAW 沒說 whole-hit 或 finesse stage。 | stat 只進 shared finesse multiplier，套於 base_finesse_damage。 | 文件未涵蓋 | 算例把 B 與 F 分開。 |
| 武器／特殊路徑 | RAW 未列 mark、special 或 explosion。 | inventory 有 12 model；3 系列 damaging sweep 可符合條件，2 系列為 flashlight toggle；bolt blast crit=false。 | 文件未涵蓋 | 由各實際模型 action 和通用 damage consumer 補足。 |
| 首次生效、期限與切換 | RAW未列持用時機、層數或期限。 | Buff只由持用條件控制；無首次命中啟動、疊層與計時器；切離停用，切回恢復。 | 文件未涵蓋 | 被動加成不需先命中或刷新，不應套用計時proc的行為。 |
