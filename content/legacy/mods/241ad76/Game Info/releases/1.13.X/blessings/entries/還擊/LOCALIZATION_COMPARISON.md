# 還擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_dodge_grants_crit_chance`／hash`ce5b71c4`；描述鍵`loc_trait_bespoke_dodge_grants_crit_chance_desc`／hash`33383fc4`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Riposte／還擊。

- 文件名稱：還擊(Riposte)。

- 適用武器：戰刃、決鬥劍、短刀、烈焰力場巨劍、烈焰力場劍、穿音速雙刀；描述鍵`loc_trait_bespoke_dodge_grants_crit_chance_desc`／hash`33383fc4`。

- 英文模板：{crit_chance:%s} Critical Chance for {time:%s}s on successful Dodge.

- 繁中模板：成功閃避後{crit_chance:%s}致命一擊機率，持續{time:%s}秒。

- **靜態重建**：六個format_values.crit_chance均從自己的trait_override.proc_stat_buffs.critical_strike_chance取值，percentage乘100並加prefix「+」，自動數字精度保留12.5與17.5。前五個變體I–IV重建為+12.5%／+15%／+17.5%／+20%、time＝6；穿音速雙刀為+10%／+12%／+14%／+16%、time＝4。time使用各自buff_template.active_duration，沒有tier時間覆寫；不能把通用6秒套用穿音速雙刀。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發方式 | successful Dodge／成功閃避後。 | ProcBuff 僅監聽 on_successful_dodge；攻擊解析的成功閃避流程送事件，單按輸入不夠。 | 一致 | 效果觸發由成功事件決定，沒有指定特定按鍵或攻擊類型。 |
| 等級數值 | {crit_chance:%s} Critical Chance／{crit_chance:%s}致命一擊機率。 | 五個變體覆寫 0.125／0.15／0.175／0.20；Transonic 覆寫 0.10／0.12／0.14／0.16。 | 一致 | 玩家文字以詞表統一為爆擊率；是機率百分點，不是傷害百分比。 |
| 持續時間 | for {time:%s}s／持續{time:%s}秒。 | 五個一般 wrapper 的 base active_duration=6；Transonic wrapper 使用低持續時間 base=4。 | 一致 | 前五個變體 6 秒，Transonic 4 秒。 |
| 再次閃避 | RAW 未說明重觸發或堆疊。 | allow_proc_while_active=true；合格事件刷新 active_start_time，無 stack template、無 cooldown_duration。 | 文件未涵蓋 | 可補充刷新與不疊加，描述未涉及此規則不構成矛盾。 |
| 武器切換 | RAW 未說明持用條件。 | on_equip buff 保留；ProcBuff active stats 檢查 wielded slot，timer 照常倒數。 | 文件未涵蓋 | 離手時暫停加成，期限內切回恢復剩餘時間。 |
| 爆擊結算 | Critical Chance／致命一擊機率。 | CriticalStrike 組合 generic chance 並 clamp，再按攻擊設定做 conversion；PRD 及 rounding 另行生效。 | 文件未涵蓋 | 機率加成不保證每擊爆擊，也不等於傷害增幅。 |
| 特殊動作 | RAW 沒列動作類型。 | special toggle/block/parry 自身不發 on_successful_dodge；實際攻擊依一般 critical check；dual throw 在 projectile spawn 時快照。 | 文件未涵蓋 | 玩家說明按實際動作分開，不把防禦/切換誤寫成觸發。 |
| 投刀毒素 | RAW只說成功閃避後提高爆擊率。 | 投刀施加毒素時讀取原命中的爆擊旗標，爆擊多加2層；後續毒傷以buff攻擊結算且爆擊預設false。 | 文件未涵蓋 | 直接投刀判定和後續毒傷分開，不把毒傷tick視為重新抽取爆擊。 |
