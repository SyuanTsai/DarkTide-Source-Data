# 開啟齊射：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 設 S_native 為原始力量經對應力量類型的原生曲線轉換後、增益修正前的力量值；q 為其他適用力量修正的淨合計，p 為本祝福 .14／.16／.18／.20。來源先做原生曲線，再將適用修正相加，得到 S_after = S_native × (1 + q + p)。本項僅在 attack_type = ranged 時進入此式。

- S_native = 500、q = 0、IV p = .20 時，S_after = 500 × 1.20 = 600；等級值取代 .02 備用值，所以不是 610。

- q = .30 時，未套本項為 500 × 1.30 = 650，套用 IV 為 500 × 1.50 = 750；差 100，相對增幅約 15.38%。此例是力量輸入的比較，不是最終生命值傷害的比較。

- 修正後的力量各自進入 attack、impact、cleave 分布與後續曲線。磷光一般射擊的命中爆炸雖採 static Power 500，attack_type 卻是 explosion；燃燒為 buff。兩者都不使用 ranged_power_level_modifier，不能因為是同一把槍造成的追加傷害就套入上述首發遠程算式。

- 五組完整tier/wrapper、11個inventory實際UI binding由固定來源與專屬收據核實。

- 22個射擊區段、11個special、Lasgun alias、Power與Phosphor分支逐項核對。

- 算例標出S_native、q、tier p並區分Power、damage、impact、cleave；未宣稱遊戲內測。
