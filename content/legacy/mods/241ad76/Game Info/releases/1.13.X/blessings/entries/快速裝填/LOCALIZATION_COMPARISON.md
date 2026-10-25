# 快速裝填：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_reload_speed_on_dodge`／hash`10e76602`；描述鍵`loc_trait_bespoke_reload_speed_on_dodge_desc`／hash`ed6915e5`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Quickloader／快速裝填。

- 文件名稱：快速裝填(Quickloader)。

- 適用武器：步兵自動槍；描述鍵`loc_trait_bespoke_reload_speed_on_dodge_desc`／hash`ed6915e5`。

- 英文模板：{reload_speed:%s} Reload Speed after Dodging for {time:%s}s.

- 繁中模板：閃避後換彈速度提升{reload_speed:%s}，持續{time:%s}秒。

- **靜態重建**：- I 級英文：+10% Reload Speed after Dodging for 2s.
- I 級繁中：閃避後裝填速度提升+10%，持續2秒。
- II 級英文：+12.5% Reload Speed after Dodging for 2s.
- II 級繁中：閃避後裝填速度提升+12.5%，持續2秒。
- III 級英文：+15% Reload Speed after Dodging for 2s.
- III 級繁中：閃避後裝填速度提升+15%，持續2秒。
- IV 級英文：+20% Reload Speed after Dodging for 2s.
- IV 級繁中：閃避後裝填速度提升+20%，持續2秒。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發條件 | RAW EN「after Dodging」／ZH「閃避後」；loc_trait_bespoke_reload_speed_on_dodge_desc，hash ed6915e5。 | PlayerCharacterStateDodging 進入閃避狀態時排入 on_dodge_start；ProcBuff 以該事件機率1及持用slot條件處理。 | 文件未涵蓋 | RAW未定義是閃避狀態開始或成功躲過攻擊；實作證據支持前者，不將其說成成功閃避事件。 |
| I–IV數值及持續時間 | RAW以 {reload_speed:%s} 與 {time:%s} 佔位；EN/ZH同key/hash。 | 完整trait formatter從tier stat_buffs.reload_speed取值，percentage乘100加「+」；wrapper active_duration=2。 | 一致 | I–IV靜態重建為+10%／+12.5%／+15%／+20%裝填速度、持續2秒。 |
| wrapper fallback與tier值 | RAW顯示tier placeholder值，未描述fallback。 | tier stat_buffs.reload_speed在active proc stat計算時作同名override，取代wrapper proc_stat_buffs.reload_speed=0.5。 | 文件未涵蓋 | fallback不會與每級值相加；inactive時也不會成為常駐tier stat。 |
| 持續與再次觸發 | RAW稱閃避後持續2秒，未描述多次觸發。 | 無cooldown_duration；每個合格非local事件將active_start_time更新至事件時間；active判斷為t<start+2。 | 文件未涵蓋 | 重觸刷新兩秒窗而非累加層數；原文沒有說明刷新規則。 |
| 裝填速度與完成時間 | RAW說明Reload Speed提高，沒有直接寫裝填時間的減幅。 | reload_speed為additive_multiplier；ActionHandler以當下stat計算reload action time scale，並以total_time/time_scale設定動作結束。 | 一致 | 速度百分比與時間縮短百分比不同；算例將兩者分開並說明同型號與無上限前提。 |
| 適用型號與攻擊模式 | RAW描述沒有列出武器型號或腰射／瞄準／特殊模式。 | 三個實際autogun_p1 marks的hip/zoom為hitscan、特殊輸入切換手電筒，reload action單獨消費reload_speed；trait本身監聽dodge事件。 | 文件未涵蓋 | 型號和動作範圍由實際binding與weapon template補充，不由RAW或family suffix推定。 |
