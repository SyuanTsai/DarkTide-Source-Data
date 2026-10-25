# 虹吸：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 觸發前提：特殊能力在該次橫掃開始時已啟用；當前合格近戰 on_hit 的 `target_number >= 3`，且該次橫掃資格尚未消耗。達門檻後先消耗資格，再嘗試恢復。

- 令 `Tmax` 為呼叫當下的最大韌性，`Tnow` 為目前韌性，`r` 為 tier 固定比例。韌性恢復未被禁止時：

- 請求恢復量 = `Tmax × r`，其中 I／II／III／IV 的 `r` = 0.10／0.12／0.14／0.16。

- 實際恢復量 = `min(Tmax − Tnow, Tmax × r)`。恢復程序使用 `ignore_stat_buffs=true`，不套 toughness replenish 統計乘數；但目前缺額及倒地（強制協助例外）、死亡、禁止恢復狀態檢查仍有效；恢復失敗不會退回本次橫掃資格。

- 這不是每秒回復率、不是目前缺額的百分比，也不是傷害減免。每次橫掃的觸發資格只消耗一次；恢復成功與否都不會在本次橫掃重試，下一次觸發須由新的合格橫掃開始。

- RAW 寫「至少命中 3 個敵人」；實作是在當前 Attack.on_hit payload 上比較 `target_number >= 3`，並同時要求 `attack_type == melee`、特殊能力在橫掃開始時啟用與持有正確武器槽。這不是計數先前已派送的合格 on_hit 事件；前兩個序號不要求各自送出 on_hit。RAW未涵蓋此序號語意，不以成功造成三次正傷解讀。

- 有效 on_hit 不以 damage、stagger 或 kill 為條件；格擋可產生該事件。一般遊戲流程可用「當前近戰命中目標序號達 3 或以上」描述；breakable/環境是否進入該路徑取決於實際候選與 Attack target breed gates，故不宣稱全數計入或全數排除。

- `recover_percentage_toughness` 的 true 參數忽略回復統計乘數，不取消缺額封頂、倒地（強制協助例外）、死亡或禁止恢復狀態檢查。
