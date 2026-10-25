# 刻不容緩(No Respite)

[祝福目錄](../../README.md)｜[來源與公式](SOURCE_INDEX.md)

<img src="https://github.com/user-attachments/assets/15f476f5-b2d8-4b3f-93d8-213a7c49cd0e" width="72" height="72" alt="刻不容緩祝福圖示">

- **觸發方式**：裝備並持用列出的武器時，每次進入通用傷害計算的攻擊都讀取目標當時的原生 `stagger.count`；本項沒有另外的生命值傷害觸發門檻，也沒有命中後疊層或自有持續時間。
- **每級效果**：I／II／III／IV 級分別按每個計數加入 +14%／+16%／+18%／+20% 傷害加算值；最多讀 7 個計數。它不是「本擊造成踉蹌便追溯加成」：傷害先結算，之後若本擊增加計數，較晚的獨立傷害事件才讀到新值。
- **適用動作**：八種武器的 hitscan、霰彈 pellet、蓄力鐳射、電弧鏈，以及實際接入的槍托／刺刀／斬擊傷害都使用通用傷害計算。純盾推的基礎攻擊傷害為 0，這個乘算池不會憑空產生傷害收益。
- **霰彈例外**：每次霰彈按目標與命中區聚合，不把每顆 pellet 算成一個獨立攻擊。戰鬥霰彈槍奧克塔蘭 Mk IX 的特殊燃燒彈會另施加燃燒狀態；後續燃燒 tick 是分開傷害事件，會按該次事件當時的目標計數與持用條件結算。
- **計數含義**：本祝福讀的是目標元件的 `stagger.count`，不等同可見踉蹌動畫數或 `num_triggered_staggers`。有可用踉蹌類型且沒有 `no_stagger` 早退時，原生處理可增加 count；原生踉蹌行為離開時會重設。
- **切換與卸下**：被動 buff 隨武器裝備加入，傷害屬性受持用欄位條件控制；切換武器後，條件快取更新便暫停此加成，切回後重新啟用。此祝福沒有自己的層數或倒數計時。

## 計算與算例

- **前提**：以已綁定的步兵鐳射槍 卡特雷爾 Mk IIb 普通 hip hitscan 為例（`action_shoot_hip` 使用 `HitScanTemplates.lasgun_p1_m1_beam`）；IV 級、攻擊前目標 `stagger.count=4`，持用屬性快取已更新。`B=100` 是 `_power_level_scaled_damage` 對此實際 profile 輸出的 `base_damage` 受控假設值，不是實測武器傷害；假設非暴擊、非弱點，其他同池修正與目標受傷修正為 0／中性，且 `buff_damage_bonus=0`。
- **代入**：`p=0.20`，`p×clamp(4,0,7)=0.80`；傷害加算係數由 `1.00` 變為 `1.80`（增加 80 個百分點）。
- **結果**：`_base_damage` 的中間輸出為 `base_damage + buff_damage`：`100 + 100×0.80 = 180`，比基準多 80 傷害單位、相對增加 80%。若同池原有 `q=0.30`，基準 `100 + 100×0.30 = 130`，套用後 `100 + 100×1.10 = 210`，相對增加 `80/130≈61.54%`；不是把 1.30 再乘 1.80。
- **計數上限**：IV 級、count=7 時，`0.20×7=1.40`，加算係數增加 140 個百分點；同樣假設下 `100 + 100×1.40 = 240`，是這個 `_base_damage` 受控階段例，不是最終生命值扣血。
- **玩家意義**：實際命中值仍取決於武器 profile、power、護甲、命中區、其他傷害修正及後續計算；例中的 B 只是便於比較的正規化輸入。

## 遊戲描述勘誤

英文 RAW 將效果描述為最高為卡面百分比，但 IV 且 count=7 時程式加到 damage_stat_buffs 加算池的是 +140 個百分點，與英文上限直接矛盾；此數值不是最終 HP 傷害。繁中 RAW 沒有列出公式或上限，屬文件未涵蓋。

## 適用武器

| 武器 | 適用型號 | 等級 | 效果差異 |
|---|---|---|---|
| [電弧步槍](../../weapons/ranged/電弧步槍/README.md) | 電弧步槍 布蘭克斯 Mk IV | I–IV | 包含 hip／braced 射擊、電弧鏈與有傷害的槍托特殊 bash。 |
| [機動自動槍](../../weapons/ranged/機動自動槍/README.md) | 機動自動槍 哥倫努 Mk III、機動自動槍 格拉亞 Mk VII、機動自動槍 阿格里皮娜 Mk IX | I–IV | 三 Mark 都有 hip／zoomed 射擊及槍托輕／重 Sweep；Mk III／Mk IX 為連射型、Mk VII 為單發型。 |
| [步兵鐳射槍](../../weapons/ranged/步兵鐳射槍/README.md) | 步兵鐳射槍 卡特雷爾 Mk VII、步兵鐳射槍 卡特雷爾 Mk IIb、步兵鐳射槍 卡特雷爾 Mk IX | I–IV | 三 Mark 都有 hip／zoomed 射擊；特殊鍵照明切換沒有額外近戰傷害。 |
| [冥潮鐳射槍](../../weapons/ranged/冥潮鐳射槍/README.md) | 冥潮鐳射槍 盧修斯 MK IIIa、冥潮鐳射槍 盧修斯 MK V、冥潮鐳射槍 盧修斯 Mk IV | I–IV | 三 Mark 都有蓄力射擊；Mk IIIa／Mk V 是特殊刺刀 Sweep，Mk IV 是特殊斬擊 Sweep。 |
| [重伐木槍](../../weapons/ranged/重伐木槍/README.md) | 重伐木槍 克魯克 Mk IIa、重伐木槍 戈爾貢努姆 Mk IIIa、重伐木槍 阿克利斯 Mk II | I–IV | 三 Mark 都有 hip／zoomed 射擊；特殊鍵照明切換沒有額外近戰傷害。 |
| [戰鬥霰彈槍](../../weapons/ranged/戰鬥霰彈槍/README.md) | 戰鬥霰彈槍 紮羅娜 Mk VI、戰鬥霰彈槍 阿格里皮娜 Mk VII、戰鬥霰彈槍 奧克塔蘭 Mk IX | I–IV | 三 Mark 的霰彈按目標與命中區聚合；Mk VI、Mk VII、Mk IX 的特殊彈分別為切割彈、slug、燃燒彈。 |
| [獵人霰彈槍](../../weapons/ranged/獵人霰彈槍/README.md) | 獵人霰彈槍 奧克塔蘭 Mk III | I–IV | 只有一般 pellet 射擊；本 Mark 的實際射擊表未接特殊霰彈。 |
| [衝覆者霰彈手槍和防暴盾牌](../../weapons/ranged/衝覆者霰彈手槍和防暴盾牌/README.md) | 衝覆者霰彈手槍和防暴盾牌 審判 Mk IV | I–IV | 一般與格擋中 pellet 射擊、特殊槍托重擊有傷害；純盾推擊不產生生命值傷害。 |

[逐型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)｜[返回目錄](../../README.md)
