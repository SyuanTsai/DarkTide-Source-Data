# 詭異打擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `n` 為本次合格事件追加層數，`s` 為目標當前層數：`s_after = min(16, s + n)`。每層目標 rending 加算量 `r = 0.025`，故 `R_target = 0.025 × s_after`，上限為 `0.40`。一般四系 `n=(2,4,6,8)`，短刀雙刃 `n=(1,2,3,4)`。期限是目標 debuff 的 5 秒，接受新層或已滿層觸發刷新；它不是攻擊者 buff 的個人疊層。

Rending 再與其餘攻擊者／目標 rending 項相加形成 pool，總值上限 1；該值按傷害 profile 與目標護甲進入 armor damage calculation，後續還可計算 finesse 及其他修正。因此層數、rending pool 百分點與最終 HP damage 必須分開描述。

算例只隔離一個已綁定的戰刃 Mk III 輕擊 profile 與 Super Armor 護甲步驟；100 是正規化輸入，不是遊戲傷害實測。最終生命值傷害仍受實際武器威力、命中區、傷害池、護甲及後續修正影響。RAW 省略相同武器物品、Minion／存活條件、目標端 debuff 的刷新流程及本次命中不回溯，這些屬「文件未涵蓋」；英／繁中都明示每層／時間／上限，未發現與 formatter 或固定 source 數值直接矛盾。
