# 燃燒靈魂：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `A` 為該級每次請求的層數、`C` 為該級上限、`S` 為目標目前共享的靈魂之火層數：

- I–IV：`(A, C) = (1, 3)、(2, 6)、(3, 9)、(4, 12)`。
- 新增量：`N = min(A, max(C − S, 0))`。
- 若 `N = 0` 且 `S ≤ C`，helper 刷新目標既有靈魂之火開始時間；若 `S > C`，helper 傳入 0 層而不刷新。
- `warp_fire` 的週期 Power Level：令 `x = S ÷ 31`，`P = 500 × x² × (3 − 2x)`。每 0.75 秒檢查一次，8 秒期限到後開始逐次移除一層。這是傷害計算輸入，不是固定生命傷害。

Trait formatter 讀 tier override 的整數層數，以 `number` 格式呈現；RAW 沒有百分比或額外加號。最終目標傷害由 warpfire profile、目標與實際傷害結算決定，不能把堆疊比例當成最終傷害倍率。

固定來源為 Darktide-Source-Code Release 1.13.1、commit `7e662fcda16219d775b84af50322be2e9cd9d62e`。本研究將同 hash 的 locale 0／16 RAW、實際三個 Force Sword P1 Mark 的 inventory/UI/trait 綁定、完整 tier override 與 Buff wrapper，配對至實際 ActionSweep、純推擊／推擊追擊、on-hit predicate 與目標 warp_fire 的堆疊、期限及週期傷害路徑。數值不由祝福名稱或 Mark suffix 推定。

範例一把 tier cap 與目標已存在的共享層數分開計算；範例二只代入目標總層數推導週期攻擊 Power Level，不宣稱其為最終生命傷害。RAW 未明列持用、同 item、傷害門檻、接受的暴擊 attack type、其他來源共享堆疊、期限刷新與逐層衰退，故列為文件未涵蓋，而非翻譯矛盾。
