# 擴展性(Expansive)

[祝福目錄](../../README.md)｜[來源與公式](SOURCE_INDEX.md)

<img src="https://github.com/user-attachments/assets/7f167afe-444d-4afa-a9bb-3ef3db76fc43" width="72" height="72" alt="擴展性祝福圖示">

- **觸發方式**：裝備「擴展性」後，以反衝者 Mk V 或惡棍槍 Mk VII 完成一次遠程開火；該次 on_shoot 事件的 hit-unit 計數須至少為 3。這是命中數條件，不是擊殺、單發擊殺或「one-shot kill」條件。
- **反衝者 Mk V**：腰射與瞄準射擊各發射32顆霰彈。程式先把同一發射擊中多顆彈丸命中的同一單位合併，再計算不同單位；32顆全打在同一單位只算1，不會因彈丸數達標。
- **惡棍槍 Mk VII**：腰射與瞄準射擊在實際動作中都走 hitscan；一次射線／球形碰撞處理會跳過重複單位，並以可結算的直接命中單位數作為 hit-unit 計數。武器卡片把 fire_mode 標為 projectile，但執行路徑是 hitscan。
- **近戰效果**：I–IV 分別增加 melee power-level 修正30%、34%、38%、42%，每次合格開火啟動一個3.5秒效果。此修正只進入近戰 power-level 計算；遠程觸發射擊不會因近戰修正變強，近戰終局傷害也不會固定等幅增加。
- **生效時點**：兩種射擊都先處理命中與傷害，再送出 on_shoot。事件經 Buff 系統處理並更新 stat cache 後，後續近戰才讀到效果；造成觸發的同一發射擊不會回頭套用新值。
- **刷新與層數**：合格事件可在效果仍有效時再次啟動；此 ProcBuff 沒有冷卻、max_stacks 為1，重複觸發不疊第二層，只把3.5秒起始時間重設為最新合格事件的處理時間。當 t 達到起始時間加3.5秒時，效果失效。
- **切換與卸下**：ProcBuff 是裝備時安裝的 on_equip 效果，沒有額外持用條件或 conditional stat gate。切到近戰槽後，只要 Thumper 仍留在裝備槽，已啟動效果仍可在剩餘時間使用；卸下該 Thumper 才移除它提供的 Buff。新開火事件的 slot check 會優先比對事件槽；沒有事件槽或 projectile origin 時才檢查目前持用槽。
- **特殊動作與其他路徑**：兩個型號的 Bash／右側 Bash 都是近戰 sweep，走 Attack.execute 的 melee 路徑而非 on_shoot，即使一次掃中多人也不觸發此祝福。這兩個實際模板沒有蓄力、投擲或獨立遠程推擊攻擊路徑。P1 霰彈與 P3 hitscan 模板只配置直接 impact；額外 explosion helper 缺少對應 impact 欄位時不產生爆炸，也不把爆炸波及單位另計入 hit-unit 數。

## 計算與算例

- **前提**：裝備 IV 級「擴展性」的惡棍槍 Mk VII；一次開火直接命中三個可結算單位。假設其他 power-level 修正維持中性，這次遠程傷害已結算，近戰基準 power level 為100。
- **代入**：on_shoot 帶回 num_hit_units=3，門檻為3，故3 ≤ 3通過；IV級 melee_power_level_modifier=.42，近戰修正倍率為1+.42=1.42；100×1.42=142。
- **結果**：事件處理與 stat cache 更新後，近戰 power-level 輸入由100變為142，維持3.5秒；觸發用的遠程射擊不追溯取得近戰修正。
- **玩家意義**：42%是本例近戰 power-level 輸入的相對增幅，不是終局傷害保證增加42%；傷害仍取決於武器 profile、目標、距離、護甲、部位與其他修正。

- **前提**：裝備 IV 級「擴展性」的反衝者 Mk V；32顆彈丸全部集中命中同一單位。
- **代入**：pellet processor 對每個直接受擊單位只建立一筆 unit map；32顆彈丸仍得到 num_hit_units=1，1 < 3。
- **結果**：Buff 不啟動，近戰 power-level 維持原值。
- **玩家意義**：門檻數的是一發射擊命中的不同單位，不是彈丸、傷害事件或擊殺數。

- **前提**：t=0 有一次合格開火，t=2秒再一次合格開火；仍裝備同一 Thumper 並保持 IV級。
- **代入**：第一次到期點為0+3.5=3.5；第二次可在有效期間重觸發，active_start_time改為2，到期點為2+3.5=5.5。
- **結果**：Buff 不增加成兩層；切到近戰槽後仍保留至 t=5.5，無新事件時於 t 達5.5失效。
- **玩家意義**：切槽不取消仍裝備物品所啟動的 on_equip Buff；從裝備槽卸下 Thumper 則移除 Buff。

## 適用武器

| 武器 | 適用型號 | 等級 | 效果差異 |
|---|---|---|---|
| [反衝者](../../weapons/ranged/反衝者/README.md) | 反衝者 洛倫茲 Mk V | I–IV | 反衝者 洛倫茲 Mk V：腰射與瞄準各以32顆 pellet 的單次射擊命中單位數觸發。 |
| [惡棍槍](../../weapons/ranged/惡棍槍/README.md) | 惡棍槍 洛倫茲 Mk VII | I–IV | 惡棍槍 洛倫茲 Mk VII：腰射與瞄準實際走 hitscan，依直接命中單位數觸發。 |

[逐型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)｜[返回目錄](../../README.md)
