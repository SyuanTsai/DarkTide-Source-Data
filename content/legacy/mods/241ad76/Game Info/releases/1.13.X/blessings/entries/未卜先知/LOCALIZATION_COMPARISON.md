# 未卜先知：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_dodge_grants_finesse_bonus`／hash`621fe25c`；描述鍵`loc_trait_bespoke_dodge_grants_finesse_bonus_desc`／hash`bcf83027`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Precognition／未卜先知。

- 文件名稱：未卜先知(Precognition)。

- 適用武器：戰刃、決鬥劍、短刀、烈焰力場巨劍、烈焰力場劍、穿音速雙刀；描述鍵`loc_trait_bespoke_dodge_grants_finesse_bonus_desc`／hash`bcf83027`。

- 英文模板：{damage:%s} Finesse Damage for {time:%s}s on successful Dodge.

- 繁中模板：成功閃避後增加{damage:%s}靈巧傷害，持續{time:%s}秒。

- **靜態重建**：名稱 key loc_trait_bespoke_dodge_grants_finesse_bonus：English Precognition／zh-TW 未卜先知，hash 621fe25c。描述 key loc_trait_bespoke_dodge_grants_finesse_bonus_desc：English {damage:%s} Finesse Damage for {time:%s}s on successful Dodge.／zh-TW 成功閃避後增加{damage:%s}靈巧傷害，持續{time:%s}秒。，hash bcf83027。content/localization/items 的 Build25606770 RAW SHA-256 c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026；英中原始紀錄和 hash 相符。六 trait formatter 將 proc_stat_buffs.finesse_modifier_bonus 作 damage，percentage×100並加+；time 取 active_duration 並以 number 格式。常見家族顯示+45/+50/+55/+60%，Dual Shivs與Transonic顯示+30/+35/+40/+45%，皆2秒。RAW沒有明述靈巧部分與總命中傷害的差別、同階段加算、刷新及切換條件；這些屬文件未涵蓋，不列為原文與實作矛盾。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| RAW名稱與描述 | Precognition／未卜先知；{damage:%s} Finesse Damage for {time:%s}s on successful Dodge. | 英中同hash；成功閃避事件觸發，damage formatter 顯示百分比，Finesse consumer 只處理crit/weakspot hit。 | 文件未涵蓋 | 補述倍率作用於Finesse component，不是最終hit。 |
| 觸發 | successful Dodge／成功閃避後。 | base ProcBuff 監聽 on_successful_dodge，按鍵本身不發成功事件。 | 一致 | 首次合格事件給完整tier bonus。 |
| Tier值 | {damage:%s}；依當前武器與階級格式化。 | 四家族.45/.50/.55/.60；短刀與穿音速.30/.35/.40/.45；全部own tier 2秒。 | 一致 | 六份formatter各自讀取本項覆寫值；家族差異由各武器實作決定，數值與顯示一致。 |
| Finesse算法 | Finesse Damage。 | 只有暴擊或弱點hit呼叫Finesse helper；bonus只增base_finesse_damage component，再加回hit。 | 文件未涵蓋 | 不把p當成整個hit的damage multiplier。 |
| 期限與刷新 | for {time:%s}s。 | 六份own tier均active_duration=2；期間再成功閃避刷新同一timer，不疊層。 | 一致 | 切換不暫停期限。 |
| 切換 | RAW未說明。 | item-slot條件控制觸發與stat；切出停用加成，timer仍走，切回未到期則恢復。 | 文件未涵蓋 | 離手成功閃避不會刷新舊slot效果。 |
| 特殊／投刀／風刃 | RAW未區分動作。 | 特殊按實際hit crit/weakspot；投射物生成複製stat snapshot；wind slash以RangedAction計算generic stat。 | 文件未涵蓋 | 各路徑條件分開，parry/toggle不是傷害hit。 |
| 毒素 | RAW未說明。 | Dual Shivs毒素施加為4 base + 2 crit + 2 weakspot；interval tick以buff Attack.execute重算，不沿用投刀crit。 | 文件未涵蓋 | 不聲稱毒tick受Finesse bonus。 |
| 推擊與後續攻擊 | RAW未區分。 | 13個型號均使用light/default/ninja零攻擊推擊profile；追擊斬擊與力場抓擊是獨立傷害路徑。 | 文件未涵蓋 | 本效果不加踉蹌力；後續命中依自身暴擊、弱點與靈巧部分判斷。 |
