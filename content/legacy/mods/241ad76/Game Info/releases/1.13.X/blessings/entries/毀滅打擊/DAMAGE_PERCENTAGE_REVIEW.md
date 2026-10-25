# 毀滅打擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令 `A₀` 為本祝福生效前且已納入其他修正的攻擊側最大命中質量，`I₀` 為衝擊側值。其他相關乘數中性時，tier值 `r` 令攻擊側 `A=A₀×(1+r)`；衝擊側 `I=I₀` 不變。
- ActionSweep使用 `M=max(A,I)`。其他攻擊側修正若非中性，須以當前快取的modifier組合代入。
- 此stat為 `additive_multiplier`，中性值1；+65%至+80%是加入攻擊側質量modifier，不是命中質量點數或敵人數。
- 無限順劈由獨立keyword分支處理；本祝福模板只提供最大攻擊命中質量modifier。

研究限定於固定Release 1.13.1來源、五個own tier/wrapper、11個實際inventory/UI bindings與各Mark ActionSweep路由。RAW未列正傷害、近戰、同物品、持用與快取時點，分類為描述未涵蓋。RAW本身未聲稱無限順劈，internal template名稱不構成遊戲描述勘誤。
