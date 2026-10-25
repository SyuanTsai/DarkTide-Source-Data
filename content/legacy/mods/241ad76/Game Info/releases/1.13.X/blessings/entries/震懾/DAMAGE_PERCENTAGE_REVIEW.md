# 震懾：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

只看 consumed_hit_mass_modifier 時，受影響目標的命中質量計入值 = 原本 HitMass.target_hit_mass × I／II／III／IV 對應的 0.70／0.60／0.50／0.40；消耗量相對減少 = (1 − multiplier) × 100% = 30%／40%／50%／60%。HitMass consumer 將這個 stat 乘在 target_hit_mass 上，沒有 attack_type 門檻；弱點與遠程相關質量修正是另外因素。這是質量乘法修正，不是百分點、相對傷害增幅或最終傷害倍率。

Sweep 將修正後質量加到 amount_of_mass_hit，再按招式質量上限、護甲和敵人規則判定中止。減少質量消耗可能讓後續目標仍在掃擊預算內，但不能推出固定增加相同比例目標數或無限順劈；它不在傷害公式中。

逐一核對三個實際 trait ID、四條 weapon/Mark binding、各 trait own I–IV override、formatter 與 exact custom wrapper；不從 base 或相似 suffix 推測。UI 對應、locale 0/16 RAW/hash、100/246 icon receipts 及匹配 melee-sweep cache 使用 root 凍結證據。40 個來源範圍保存精確 path、行號、UTF-8/LF/trailing-LF SHA-256、結論與適用性。候選 prose 與預覽已完成自檢；正式頁待 root review。本研究不宣稱遊戲內實測或截圖。
