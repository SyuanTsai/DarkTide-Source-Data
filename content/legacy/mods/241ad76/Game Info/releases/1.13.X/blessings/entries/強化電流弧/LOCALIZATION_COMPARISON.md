# 強化電流弧：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_enhanced_arc_jumps_angle`／hash`ecc50357`；描述鍵`loc_trait_bespoke_enhanced_arc_jumps_angle_desc`／hash`d4a89390`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Enhanced Voltaic Arcs／Enhanced Voltaic Arcs。

- 文件名稱：強化電流弧(Enhanced Voltaic Arcs)。

- 適用武器：電弧鎚、電弧步槍；描述鍵`loc_trait_bespoke_enhanced_arc_jumps_angle_desc`／hash`d4a89390`。

- 英文模板：Arc lightning gains {angle:%s} jump angle and {radius:%s} jump distance, and can jump {jumps:%s} additional times.

- 繁中模板：Arc lightning gains {angle:%s} jump angle and {radius:%s} jump distance, and can jump {jumps:%s} additional times.

- **靜態重建**：RAW locale 0/16 共用英文描述模板：
Arc lightning gains {angle:%s} jump angle and {radius:%s} jump distance, and can jump {jumps:%s} additional times.

以下逐級以 locale 16 英文模板、該武器各級實際角度 formatter 字串、距離加值及額外跳躍數作靜態代入。每項「文件譯文」是本文件對英文描述的繁體中文文字，與文件譯名分層；來源沒有繁體中文 RAW。實際角度保留精值，英文卡面代入角度依 formatter 向下取整。


### 電弧步槍 布蘭克斯 Mk IV

- **I｜實際角度加值 +3°；卡面角度 +3；距離 +0.3；額外跳躍 1**
  - locale 16 英文 RAW 靜態重建：Arc lightning gains +3 jump angle and +0.3 jump distance, and can jump 1 additional times.
  - 文件譯文：電弧閃電的跳躍角度增加 +3，跳躍距離增加 +0.3，並可額外跳躍 1 次。

- **II｜實際角度加值 +5°；卡面角度 +5；距離 +0.5；額外跳躍 1**
  - locale 16 英文 RAW 靜態重建：Arc lightning gains +5 jump angle and +0.5 jump distance, and can jump 1 additional times.
  - 文件譯文：電弧閃電的跳躍角度增加 +5，跳躍距離增加 +0.5，並可額外跳躍 1 次。

- **III｜實際角度加值 +7.5°；卡面角度 +7；距離 +0.75；額外跳躍 1**
  - locale 16 英文 RAW 靜態重建：Arc lightning gains +7 jump angle and +0.75 jump distance, and can jump 1 additional times.
  - 文件譯文：電弧閃電的跳躍角度增加 +7，跳躍距離增加 +0.75，並可額外跳躍 1 次。

- **IV｜實際角度加值 +10°；卡面角度 +10；距離 +1；額外跳躍 1**
  - locale 16 英文 RAW 靜態重建：Arc lightning gains +10 jump angle and +1 jump distance, and can jump 1 additional times.
  - 文件譯文：電弧閃電的跳躍角度增加 +10，跳躍距離增加 +1，並可額外跳躍 1 次。


### 電弧鎚 布蘭克斯 Mk III

- **I｜實際角度加值 +5°；卡面角度 +5；距離 +0.5；額外跳躍 1**
  - locale 16 英文 RAW 靜態重建：Arc lightning gains +5 jump angle and +0.5 jump distance, and can jump 1 additional times.
  - 文件譯文：電弧閃電的跳躍角度增加 +5，跳躍距離增加 +0.5，並可額外跳躍 1 次。

- **II｜實際角度加值 +7.5°；卡面角度 +7；距離 +1；額外跳躍 1**
  - locale 16 英文 RAW 靜態重建：Arc lightning gains +7 jump angle and +1 jump distance, and can jump 1 additional times.
  - 文件譯文：電弧閃電的跳躍角度增加 +7，跳躍距離增加 +1，並可額外跳躍 1 次。

- **III｜實際角度加值 +10°；卡面角度 +10；距離 +1.5；額外跳躍 2**
  - locale 16 英文 RAW 靜態重建：Arc lightning gains +10 jump angle and +1.5 jump distance, and can jump 2 additional times.
  - 文件譯文：電弧閃電的跳躍角度增加 +10，跳躍距離增加 +1.5，並可額外跳躍 2 次。

- **IV｜實際角度加值 +12.5°；卡面角度 +12；距離 +2；額外跳躍 2**
  - locale 16 英文 RAW 靜態重建：Arc lightning gains +12 jump angle and +2 jump distance, and can jump 2 additional times.
  - 文件譯文：電弧閃電的跳躍角度增加 +12，跳躍距離增加 +2，並可額外跳躍 2 次。


各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| I–IV tier 與卡面值 | RAW 用 angle/radius/jumps placeholders，未逐級列值。 | 兩個 own tier 與 formatter；7.5°顯示+7、12.5°顯示+12。 | 一致 | 靜態代入吻合；runtime精值和卡面整數分開列。 |
| 持用條件 | RAW 未說 item-slot wielded 或 stat cache 時點。 | wrapper 用 is_item_slot_wielded，條件表在 stat builder 時計算。 | 文件未涵蓋 | RAW 省略啟用條件，不代表持用限制不存在。 |
| Arc Rifle 模式 | RAW 未列模式和根目標要求。 | Mk IV hip/braced hitscan 實際接 helper；native max_jumps 1／2。 | 文件未涵蓋 | 補列接入與模式原生基線，保留目標合法性。 |
| Powermaul 模式 | RAW 未列特殊攻擊條件、push 或 action kind。 | 8個 light/heavy sweep 與 push-follow sweep special-active gated；純push無helper；weapon_shout無helper setup。 | 文件未涵蓋 | 不把設定欄位或視覺鏈當實際跳躍路徑。 |
| 目標／傷害／切槽 | RAW 未講validator、連鎖傷害、cache更新或既有chain生命週期。 | search讀目前cache並同步以解析參數搜尋；damage獨立profile；finish清graph。 | 文件未涵蓋 | 新search讀cache；不主張既有同次chain因切槽重算。 |
