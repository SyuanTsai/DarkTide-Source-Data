# 手銃：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- **撕裂加值**：令本祝福等級的比例為 p。來源手槍在持用且該次命中判定為暴擊時，攻擊者的 critical-strike rending 項增加 p；未暴擊時此項按中性值 1 計。
- **護甲分支變數**：DamageProfile 算出的護甲攻擊修正（包含該 profile 的暴擊修正）為 A；17 個撕裂項目先扣除各自中性值、合計並依原生上限處理，再乘以該護甲類型的撕裂係數；結果定義為 r（其中包含本祝福的 p）；護甲 overdamage 係數為 o。原生 armor multiplier M 分三支：A≥1 時 M=A+r×o；A<1 且 1−A<r 時 M=1+(r−(1−A))×o；其餘 M=A+r。護甲分支傷害為進入該分支的傷害乘 M。
- **Mk XIV 實際暴擊 profile**：M2 遠距離 hitscan 使用 stub_pistol_p1_m2，far armored 的非暴擊 attack 修正端點為 lerp_0_6；crit_mod.attack.armored 為 0→0.3。算例明定 far dropoff=1、兩個插值均採原生 fallback 0.5、首個目標 target_index=1/default_target 且沒有 target armor override，故暴擊 A=0.6+0.15=0.75。
- **計算邊界**：算例以 armor-scaled 分支量化撕裂效果；暴擊 finesse、命中區、力量、其他 attacker/target stat 與生命值實際扣除等後續因素，不能直接等同為卡面增幅。

RAW 同 hash 英文／繁中句型一致，格式器逐級輸出也吻合 own tier。RAW 沒有詳述持用條件、暴擊判定路徑、手槍型號分流、額外傷害旗標或護甲折算；這些均依固定來源程式描述，不當成原文誤譯。 M2 算例明示 critical armor 修正及 far/target/lerp 前提，僅比較原生護甲分支而不宣稱最終生命值傷害。
