# 穿透(Pierce)

[祝福目錄](../../README.md)｜[來源與公式](SOURCE_INDEX.md)

<img src="https://github.com/user-attachments/assets/c0ab5584-32f4-4ae4-af3e-881f93db2fd8" width="72" height="72" alt="穿透祝福圖示">

- **觸發方式**：裝備此祝福並手持三種適用型號之一時，對應 Buff 依目前手持的物品欄位條件加入效果；沒有命中、擊殺、充能或按特殊鍵才啟動的額外條件。
- **首次生效**：武器裝入裝備槽並安裝祝福 Buff 後，固定更新先處理 Buff，再更新 stat／keyword cache；手持條件成立並完成這次更新後，後續讀取該快取的攻擊才套用效果。不是按特殊鍵時同步新增，也不是命中事件觸發。
- **等級效果**：I–IV 顯示 +10%、+15%、+20%、+25% 近戰衝擊修正；它只進入 melee 類型的衝擊計算。這些數字不是傷害加成，也不保證最終硬直強度或硬直時間同比增加。
- **一般敵人的質量**：手持時，會呼叫 HitMass 的攻擊把一般存活、非玩家／非物件目標的 health hit mass 乘以 0.25，再套用目標自己的攻擊類型質量倍率。因此在反衝者與惡棍槍的普通及瞄準直擊，以及三款武器的 Bash 揮擊，質量預算可消耗較少；打擊數量仍受每個攻擊的有限預算限制。
- **特殊 Bash**：三款武器的特殊 Bash 左揮與接續右揮都走 Sweep。這條近戰路徑採用本級 melee impact 修正、對一般活體敵人採用較低 HitMass，並跳過護甲中止攻擊的判定；最大質量預算與 Breed 中止判定仍可結束攻擊。
- **依型號區分**：反衝者 洛倫茲 Mk V 的普通／瞄準射擊是 pellets，惡棍槍 洛倫茲 Mk VII 是 hit-scan，兩者均有 HitMass 預算；震盪槍 洛倫茲 Mk VI 的普通／瞄準射擊是彈體，撞擊與引信爆炸各走自己的傷害設定，沒有本項 HitMass 消費路徑，不把上述質量效果套到它們。
- **目標例外**：玩家、一般 prop 與 living prop 使用不同的 breed hit-mass 分支，不會乘 0.25；死亡目標的 hit mass 為 0。保留目標自身 hit-mass 倍率。
- **切換與持續**：這不是有秒數或堆疊的 Proc。效果依目前手持槽位條件開啟；切換到別的槽位後條件為 false，沒有可延續的計時或層數；切回相符武器時條件重新成立。
- **卸下武器**：把武器從裝備槽移除會移除安裝於 `on_equip` 的祝福 Buff；切換持用槽位只關閉手持條件，不會移除或保留計時，仍裝備時切回才恢復。
- **其他招式**：這三個 ranged 武器模板沒有獨立的普通推擊、重擊或蓄力 action。震盪槍的 1.5 秒引信是彈體引爆時間，不是玩家蓄力；三款的 Bash 是特殊近戰動作，不是普通推擊。

## 計算與算例

- **前提**：手持任一適用型號的 IV 級祝福；只比較 Bash 的衝擊修正，假設原本進入 Stagger 計算的 impact power 為 100，通用、目標、弱點與其他衝擊修正都為 1，且目標條件固定。
- **代入**：IV 覆寫 `melee_impact_modifier = 0.25`。在 melee 分支，九項 modifier 中其餘項均為 1，因此合成 multiplier 是 `1 + 0.25 = 1.25`；中間 `stagger_power_level = 100 × 1.25 = 125`。
- **結果**：這一步的 stagger power 比無此級修正高 25%；接下來仍要依目標護甲對應的強度區間、power-level 百分比換算、目標 stagger count 等計算最終硬直強度與時間。
- **玩家意義**：+25% 是 formatter 對 melee impact 修正的顯示值，不是 +25% 傷害，也不是保證最終硬直強度、硬直時間或命中結果增加 25%。

- **前提**：一個存活的一般敵人不是玩家、prop 或 living prop；其 health hit mass 為 8，目標的 `hit_mass_multiplier_vs_melee`、`hit_mass_multiplier_vs_ranged`、通用 `hit_mass_multiplier` 與動作護甲質量倍率都為 1。比較一次會呼叫 HitMass 的攻擊。
- **代入**：未啟用本關鍵字時，此目標扣除 `8 × 1 = 8` 質量；手持本祝福時先變成 `8 × 0.25 = 2`，其後目標倍率仍乘 1。
- **結果**：該目標只消耗 2 而不是 8，少用 6 點攻擊質量預算。
- **玩家意義**：這可能讓反衝者 pellets、惡棍槍 hit-scan 或 Bash 的有限預算能繼續處理更多後續目標；但最大質量預算與 Breed 中止仍在，不能視為無限穿透。震盪槍的普通彈體與爆炸不呼叫此質量函式，所以不適用這個算例。

## 適用武器

| 武器 | 適用型號 | 等級 | 效果差異 |
|---|---|---|---|
| [反衝者](../../weapons/ranged/反衝者/README.md) | 反衝者 洛倫茲 Mk V | I–IV | 反衝者 洛倫茲 Mk V：腰射／瞄準 pellets 和特殊 Bash 讀取此項的實際修正；一般敵人質量扣除降低，護甲中止另於 Bash 被略過，預算與 Breed 中止仍保留。 |
| [震盪槍](../../weapons/ranged/震盪槍/README.md) | 震盪槍 洛倫茲 Mk VI | I–IV | 震盪槍 洛倫茲 Mk VI：特殊 Bash 讀取 melee 衝擊、降低一般敵人 HitMass 並略過護甲中止；普通／瞄準彈體及爆炸沒有 HitMass consumer，不套用該質量修正。 |
| [惡棍槍](../../weapons/ranged/惡棍槍/README.md) | 惡棍槍 洛倫茲 Mk VII | I–IV | 惡棍槍 洛倫茲 Mk VII：腰射／瞄準 hit-scan 和特殊 Bash 讀取此項的實際修正；一般敵人質量扣除降低，護甲中止另於 Bash 被略過，預算與 Breed 中止仍保留。 |

[逐型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)｜[返回目錄](../../README.md)
