# 不穩定能量：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 P 為 current_peril（0–1），k=min(4,floor(P/0.20))；每級每階 p 為 .035、.04、.045、.05。令 S_native 為原生武器力量類型曲線轉換後、套用力量修正前的力量輸入，q 為其餘當次適用力量修正相對基準 1 的淨加總，則本祝福後 S=S_native×(1+q+k×p)。每 20 個百分點跨一階；在 P=.65 時 k=3，不受顯示取整邊界影響。力量輸入再由各攻擊 profile 的傷害、衝擊與順劈分布處理，不能把這個輸入增幅直接當成最終 HP 傷害百分比。

已按固定 Release 1.13.1 source SHA 核對兩個實際 tier variant、五個 UI Mark、各自 wrapper、stepped class、Buff tier override 與力量計算。核心範圍包括每個 Mark 的 light/heavy/profile 路徑、推擊和推後甩擊；另外單獨核對兩個 Greatsword Force Slash 的 profile 選取、基礎力量保存與每個目標的 Attack 結算，以及只有單手 Mk II/Mk IV 設定 sticky 的追加命中。結論只說 Attack 執行時使用玩家力量快取，不把 action-start 保存的 charge/base power 誤稱為保存祝福修正，也不把每個命中說成重新讀取尚未刷新之 Peril。RAW 原文保留；Greatsword 每階 formatter 值與 RAW「Up to／最多」的四階最高效果差異列為明確呈現矛盾。
