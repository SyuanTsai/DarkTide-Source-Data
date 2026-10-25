# 野蠻橫掃：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

記A為其他既有力量／蓄力／profile因素計算出的攻擊側基礎max hit mass，I為衝擊側基礎max hit mass。只有本祝福、其他修正中性時：

- `A′ = A × (1 + t)`，其中標準五實作 I–IV 的`t`為1.4／1.6／1.8／2.0，穿音速雙刀為1.2／1.3／1.4／1.5。
- `I′ = I`；本祝福不改衝擊側stat。
- `ActionSweep有效max hit mass = max(A′, I′)`。攻擊、衝擊本身仍受profile/力量曲線及其他修正影響；例子中的A與I是那些前置計算完成後的基礎輸入。

 tier raw值直接加至中性值1的`max_hit_mass_attack_modifier`。own tier覆寫ProcBuff fallback .5，而不是再加在fallback上；故例中I級標示+140%對應攻擊側2.4倍基準。這是順劈質量倍率，不能乘到生命傷害。

依固定1.13.1原始碼、14個實際UI bindings、六組完整tier與wrapper及逐Mark ActionSweep/profile路由核對。說明限於該祝福接入的實作：`target_number`是當前攻擊處理序號，非先前成功事件數；本頁不把命中質量倍率稱為傷害或無限順劈。RAW省略 melee/item/profile/cache條件，屬描述未涵蓋，不構成文字勘誤。
