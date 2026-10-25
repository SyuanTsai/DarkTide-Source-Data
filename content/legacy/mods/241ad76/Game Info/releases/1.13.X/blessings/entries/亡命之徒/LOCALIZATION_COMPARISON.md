# 亡命之徒：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_crit_chance_on_successful_dodge`／hash`54cd474d`；描述鍵`loc_trait_bespoke_crit_chance_on_successful_dodge_desc`／hash`3770d553`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Desperado／亡命之徒。

- 文件名稱：亡命之徒(Desperado)。

- 適用武器：重型鐳射手槍；描述鍵`loc_trait_bespoke_crit_chance_on_successful_dodge_desc`／hash`3770d553`。

- 英文模板：{crit_chance:%s} Critical Chance for {time:%s}s on successful Dodge.

- 繁中模板：成功閃避後{crit_chance:%s}致命一擊機率，持續{time:%s}秒。

- **靜態重建**：RAW 名稱：亡命之徒（EN Desperado，名稱鍵 hash 54cd474d），保留既有原文。描述鍵 hash 3770d553 的 EN 為 “{crit_chance:%s} Critical Chance for {time:%s}s on successful Dodge.”，zh-TW 為「成功閃避後{crit_chance:%s}致命一擊機率，持續{time:%s}秒。」；四級格式值為 +12.5／15／17.5／20% 及 6 秒。按原文與實作填值，時間與當級機率格式值均與實作一致。依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發方式 | 成功閃避後 {crit_chance:%s} Critical Chance for {time:%s}s.／成功閃避後{crit_chance:%s}致命一擊機率，持續{time:%s}秒。 | 共用模板監聽 on_successful_dodge；敵方攻擊處理回報成功閃避後才送出事件。 | 一致 | 符合成功閃避描述；單按閃避不等於成功事件。 |
| 等級效果 | {crit_chance:%s} Critical Chance／{crit_chance:%s}致命一擊機率。 | 四級 proc_stat_buffs override 為 0.125／0.15／0.175／0.20，取代 base 預設 0.05。 | 一致 | 直接加入爆擊率池，為百分點而非傷害倍率。 |
| 持續時間 | for {time:%s}s／持續{time:%s}秒。 | 本項完整 wrapper clone 的 base active_duration=6；trait 無 duration override。 | 一致 | 四級皆為 6 秒。 |
| 距離、攻擊類型與閃避種類 | RAW 僅寫 successful Dodge，未限距離、攻擊類型或 dodge_type。 | trait 無相應 check；事件 helper 對非空 attack_type 送同一 on_successful_dodge。 | 文件未涵蓋 | 本體未列觸發例子；機制不支持限於某種攻擊或完美閃避。 |
| 再次觸發與冷卻 | RAW 未說明重觸發、疊層或冷卻。 | allow_proc_while_active=true；無 cooldown_duration；事件成功時 active_start_time 重設，沒有 stack template。 | 文件未涵蓋 | 可補充再次閃避重設 6 秒而不疊層，這不是原文矛盾。 |
| 切換武器 | RAW 未說明持用或切換。 | 新觸發和 active stat 都重新檢查 is_item_slot_wielded；切出時 timer 照走但 stat 暫停，切回期限內恢復剩餘加成。 | 文件未涵蓋 | on_equip buff 切槽保留並不表示 stat 在離手時仍生效。 |
| 致命一擊機率如何結算 | Critical Chance／致命一擊機率，未提最終上限或機率轉換。 | CriticalStrike.chance 將 generic chance 加入機率池、clamp 0–1，再按呼叫條件乘 conversion；roll 使用 PRD。 | 文件未涵蓋 | 不應把機率百分點當作傷害增幅或每擊保證暴擊。 |
| 特殊推擊 | RAW未區分普通與靈能推擊。 | 兩者使用push，未傳入爆擊旗標，Attack.execute預設false。 | 文件未涵蓋 | 此通用機率加成不會讓特殊推擊爆擊。 |
