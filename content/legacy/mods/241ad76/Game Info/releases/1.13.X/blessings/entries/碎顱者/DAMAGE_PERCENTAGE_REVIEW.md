# 碎顱者：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令目標端有效層數 `N=clamp(stack_count+stack_offset,0,8)`，目標仍符合傷害計算的踉蹌門檻時，單項傷害池倍率為 `1+0.10×N`。每次通過來源事件檢查時，Tier I／II／III／IV 分別請求 1／2／3／4 層；該次傷害已在 on_hit 之前計算，新層只能在目標 buff 更新快取後供後續傷害讀取。以上例子使用 `D0=100` 作正規化的傷害階段輸入，profile、防護與其餘傷害池因素保持中性，因此不代表遊戲固定傷害或最終 HP 百分比。

必須分開讀三層條件：來源觸發使用 `on_stagger_hit` 的 Minion 分類與 live stagger；目標 buff 用自己的 conditional stat cache 提供每層 0.10；DamageCalculation 消費端再依本次觸發的踉蹌或 `count_as_staggered` keyword 決定是否把兩側 stat 加入傷害池。範例限定目標快取已更新，並只展示此 damage pool 加算。特殊攻擊、sticky 追加攻擊、爆炸與推擊皆須依其實際 Attack 事件和 profile skip 個別判斷；不能從動作名稱推定全部通過。
