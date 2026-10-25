# 穿透：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `q` 為該級 melee impact modifier：I–IV 為 0.10、0.15、0.20、0.25。StaggerCalculation 的合成式將通用 attacker / target impact、依攻擊類型的 modifier、弱點 melee modifier 及 super-armor critical modifier 以預設 1 做加法後減去中性項；在其它項皆為 1 的例子裡，melee multiplier `M = 1 + q`。`stagger_power_level_after = stagger_power_level_before × M`。之後仍經 power-level 百分比與目標 armor min/max 強度區間等轉換。

對 HitMass consumer，活著且屬一般 non-player/non-prop breed 的目標先取 `health_extension:hit_mass()`；若 attacker 有 `use_reduced_hit_mass`，這個基值乘 `0.25`。後續仍乘目標 `hit_mass_multiplier_vs_melee` 或 `hit_mass_multiplier_vs_ranged` 及一般 `hit_mass_multiplier`；Sweep 另有 action armor mass modifier。Player/prop/living_prop 使用 breed mass 分支，不乘 0.25；死亡目標返回 0。消耗量從當次有限攻擊/impact 預算扣除，Armor abort 被略過不會移除 max mass 與 breed abort。

兩組算例分別只比較中間 Stagger power 與 HitMass 預算，不互相相乘。所有數字為固定來源靜態推導，並非遊戲測試或傷害保證。

這個祝福的 +10% 至 +25% 是 melee impact modifier，會乘入中間 stagger power；不是最終傷害或硬直時間的固定等比例增幅。HitMass 的 0.25 僅適用於實際呼叫 HitMass 的路徑與一般活體非 player/prop 目標；攻擊預算及 breed 中止仍有效。
