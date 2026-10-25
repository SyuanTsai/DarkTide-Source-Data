# 無情背刺：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

設 `p` 為本 tier 的背刺撕裂增量（I–IV `.70/.80/.90/1.00`），`r` 為原生 17 項撕裂合計在 cap=1 後的值，`a` 為本攻擊 profile 對本次護甲命中的 attack `armor_damage_modifier`，`o` 為該護甲類別的超額撕裂係數。此 trait 在 effective backstab 時使原生 backstab-rending term 由 1 變為 `1+p`；若其他撕裂項均中性且沒有既有增益，`r=min(p,1)`。

護甲階段採來源中的三分支：

- `a≥1`：`M=a+r×o`。
- `a<1` 且 `1−a<r`：`M=1+(r−(1−a))×o`。
- 其餘：`M=a+r`。

Profile armor modifiers 可是 damage-lerp endpoints；本例明示 `t=.5`，依原生線性插值取值，並非宣稱每場實戰固定為此倍率。戰刃 Mk VI 首段 punch 的 `jab_special` profile 對 resistant attack 使用 `lerp_2=[1.42,2.58]`，故 `a=2`；Tier I `r=.70` 時 `M=2+.70×.25=2.175`，normalized `B=100` 的階段值是 200→217.5。Mk III 後續 heavy-jab 刀刃 profile 對 resistant attack 使用 `lerp_1=[.67,1.33]`，故 `a=1`；Tier IV `r=1` 時 `M=1+.25=1.25`，`B=100` 的階段值是 100→125。這些是各自連接之 profile 的護甲階段比較，不是最終 HP 傷害。

`B×M` 是護甲／撕裂階段結果；後續 finesse、背刺傷害、flanking、hit-zone、DoT、攻防護甲 Buff、diminishing returns 及 force-field 規則仍需另行計算。

原始英文與繁中描述都只說明背刺命中時增加撕裂百分比；本體沒有指出有效背刺的近戰攻擊種類、幾何門檻、持用條件、對應 Marks、裝備切換或傷害結算階段。這些內容在程式中可確認，屬於原文未涵蓋的實作條件與作用範圍，不據此列為翻譯矛盾。Formatter 將 tier `.7/.8/.9/1.0` 靜態輸出成 `+70%/+80%/+90%/+100%`；數值進入 additive rending term，再依護甲分支參與中間傷害計算，不能直接等同最終傷害百分比。
