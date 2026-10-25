# 勢頭：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

恢復請求：`requested = max_toughness × tier_fraction × toughness_replenish_modifier × toughness_replenish_multiplier`。缺少 multiplier 時使用 1。實際恢復 `actual = min(missing_toughness, requested)`，前提是當時恢復狀態允許增加韌性。Tier fraction I–IV 為 0.12／0.13／0.14／0.15；百分點差是 3 pp（IV−I），同一基數與角色倍率下的相對請求增幅是 25%（0.15/0.12−1）。

冷卻為事件後 0.12 秒，這不是每個 sweep 的永久一次鎖；首個事件初始可用。一次回復受缺額或狀態限制仍可能耗用冷卻。

- RAW “Hitting at least 3 enemies with an attack” 與實作的當前目標序號條件接近，但沒有解釋序號、on_hit 派送閘門與每次攻擊的行為；不可將其寫成跨攻擊累積三個有效事件。
- RAW 未明列最大韌性基數、恢復倍率、缺額封頂或 0.12 秒冷卻；這些是描述未涵蓋的實作細節，不構成數值衝突。
- 特殊差異只限實際 12 個 bindings：Force Sword 直接 powered sweeps 可是 melee，而額外 Wind Slash/fling 是 ranged；Chainsword 直接 powered hit 與 sticky tick 的 profile flags 不同。其他三系列 direct special attacks 仍是 sweep melee，需實際 Attack on-hit 派送條件。
