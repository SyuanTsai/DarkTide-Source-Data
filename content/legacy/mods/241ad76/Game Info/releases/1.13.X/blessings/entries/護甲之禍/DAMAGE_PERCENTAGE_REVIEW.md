# 護甲之禍：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

## 層數與脆弱

每級在 25%／75% 充能門檻分別提供表中的最小／最大層數。以 IV 級 50% 為例，中段進度是 50%／75% = 2／3，因此 floor(8 + (12 − 8) × 2／3) = 10 層；10 × 2.5% = 25 個百分點目標脆弱。這是 target rending pool 的增量，不是直接傷害百分比。

## 傷害結算範例的限制

rending multiplier 由多個基準為 1 的來源相加，之後上限為 1，再乘護甲類別的 rending factor。目標脆弱只改變其中一項；護甲傷害 modifier、overdamage、finesse、背刺、側擊、部位、護甲加成、衰減及 force field 等後續條件仍會介入。受限算例使用 armored 類別的 rending factor 1 與 overdamage 0.25，並明確固定其餘輸入，因此得出的 28.125% 是該算例相對於其自身 80 基準的比較，不能泛化成所有攻擊的固定傷害加成。

本項的攻擊命中先算傷害，再送 on_hit 事件；第一次施加的脆弱不會回頭影響造成該次 debuff 的命中。共用 gate 是手持槽位、同一 weapon item、minion 目標及 charge_level 欄位存在。三 Mark 的腰射與瞄準路由都保留數值充能值；刺刀 Sweep 未使用自身蓄力欄位，預設 charge level 1。沒有從 RAW 省略條件推斷成矛盾，也不把目標 debuff 的脆弱百分點描述為最終傷害百分比。

受限傷害範例列明 base damage、armor damage modifier、armor 分支、目標原有層數及其它修正；示例展示固定來源的 armor formula，不是某一 Mark 的實測單發傷害。
