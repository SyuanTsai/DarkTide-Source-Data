# 突然襲擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_crit_chance_after_punch`／hash`e6773a0a`；描述鍵`loc_trait_bespoke_increased_crit_chance_after_punch_desc`／hash`788e95ac`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Sucker Punch／突然襲擊。

- 文件名稱：突然襲擊(Sucker Punch)。

- 適用武器：廁所鏟；描述鍵`loc_trait_bespoke_increased_crit_chance_after_punch_desc`／hash`788e95ac`。

- 英文模板：{crit_chance:%s} Critical Chance for {time:%s}s on Special Action Hit.

- 繁中模板：特殊動作命中後致命一擊機率{crit_chance:%s}，持續{time:%s}秒。

- **靜態重建**：機率以帶「+」的百分比格式顯示，時間以數字顯示；四級代入同一描述模板。

- I EN “+7.5% Critical Chance for 3s on Special Action Hit.”；繁中「特殊動作命中後致命一擊機率+7.5%，持續3秒。」
- II EN “+10% Critical Chance for 3s on Special Action Hit.”；繁中「特殊動作命中後致命一擊機率+10%，持續3秒。」
- III EN “+12.5% Critical Chance for 3s on Special Action Hit.”；繁中「特殊動作命中後致命一擊機率+12.5%，持續3秒。」
- IV EN “+15% Critical Chance for 3s on Special Action Hit.”；繁中「特殊動作命中後致命一擊機率+15%，持續3秒。」

以上保留本體的「致命一擊」措辭；機制以近戰暴擊率輸入說明；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| RAW名稱與描述 | loc_trait_bespoke_increased_crit_chance_after_punch／hash e6773a0a；loc_trait_bespoke_increased_crit_chance_after_punch_desc／hash 788e95ac；EN與繁中同資源、同key及同hash。 | 主控RAW receipt逐key／locale核 exact text與RAW SHA；使用同一name/description key。 | 一致：formatter可靜態代入四級機率與3秒。 | RAW未細列型號動作與擲定時間，是程式補充，不是已證實矛盾。 |
| 實際trait與三Mark | 唯一trait `weapon_trait_bespoke_ogryn_club_p1_increased_crit_chance_on_weapon_special_hit`；trait item `content/items/traits/bespoke_ogryn_club_p1/increased_crit_chance_on_weapon_special_hit`只限制 weapon type `ogryn_club_p1`，template restriction為空。 | 三個inventory binding及UI receipt逐筆對 family/pattern/mark、trait item、template import/alias append。 | 1 trait、1 family、3實際型號：兇殘 Mk III、Mk XIX、Mk V。 | 採實際UI組成名，不用內部ID當玩家名稱。 |
| 特殊攻擊觸發 | RAW說明 special action hit。 | 實際predicate要求同source item、profile.weapon_special及melee hit；上勾與折疊輕重profiles均具true旗標。 | M1上勾與M2/M3折疊輕重攻擊可觸發；切換本身、普通／蓄力攻擊及pushfollow不觸發但窗口有效時可受益；純push不符合近戰條件。 | 只把具weapon_special=true且melee的實際profile命中視為觸發；後續一般攻擊是否受益取決於仍持用原武器與窗口/快取狀態。 |
| 階級與時間 | placeholder是crit_chance、time。 | own formatter讀近戰crit值及active_duration；ProcBuff on_hit=1且allow_proc_while_active，成功事件重設active_start_time。 | I–IV為+7.5／10／12.5／15個百分點，各3秒；重觸刷新、不疊層、期限採嚴格小於。 | own proc_stat map替換generic fallback；held predicate也限制生效stat。 |
| 暴擊consumer、首次生效與切換 | RAW未聲明擲定時點或換槽生命週期。 | ActionSweep在start固定crit flag；Attack稍後送on_hit旗標；ProcBuff stat受未到期+source slot held gate。 | 新窗口不回溯改變觸發動作；後續動作須在buff/stat cache更新後開始。切出停用stat但時間照走；切回未到期可恢復；卸裝移除。 | 不宣稱其他槽武器受益，不將同掃掠命中當重新擲定。 |
