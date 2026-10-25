# 擴展性：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令δ為當級 own melee_power_level_modifier（I–IV=.30/.34/.38/.42）。PowerLevel.power_level_buff_modifier 僅在 attack_type=melee 納入該修正，和其他倍率以中性1為基線組合；假設其他項不變且中性，P_melee' = P_scaled×(1+δ)。IV級 P=100 時為100×1.42=142。這不是最終傷害倍率；DamageCalculation 還使用武器 profile、目標、距離、護甲、weakspot/finesse、hitzone及其他修正。

兩個實際 implementation 都是 ranged Thumper 的獨立 ProcBuff，tier I–IV 數值相同；兩條射擊路徑各自以一次 on_shoot 的 num_hit_units 判門檻。P1 以彈丸射擊中不同受擊單位去重，P3 以 hitscan 可結算的直接受擊單位去重；特殊 Bash 不走 on_shoot。程式不檢查 kill 或 one-hit-kill，不能由 trait ID 的 one_shots 字串推導擊殺條件。

效果修改 melee power-level 計算，不能寫成終局傷害固定提高相同比例。觸發用射擊先結算，事件處理後刷新 stat cache；重觸發刷新單一3.5秒效果。它是 on_equip Buff，切槽後仍留在計時期間，卸下裝備物品才移除。

RAW locale 0/16 同 hash。英文模板在 power placeholder 後直接接 Melee，time placeholder 前有兩個空格；靜態重建保留原字串。num_hits formatter讀到3，但 RAW 把門檻寫成字面3+，沒有num_hits placeholder。這些是格式和涵蓋範圍記錄，不據以推展觸發機制。
