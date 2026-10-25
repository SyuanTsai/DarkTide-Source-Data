# 致命頻率：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

S_after = S_before × (1 + q + p)，其中 p 是本項 .15/.20/.25/.30，q 是同一 melee_power_level_modifier 的其他 additive contribution。此 modifier 在 power-type scaling 後乘入 scaled power-level 輸入，DamageCalculation 後續再使用該值及 profile/target 等資料；不是最終傷害百分比。attack_type=push 不會讀這個 melee modifier。 傷害與踉蹌分別以 damage／impact 威力類型讀取此修正；劈砍在掃掠開始時經 DamageProfile.max_hit_mass 取當時資料，伺服器校正另可重算。故同次較晚命中的傷害／踉蹌取值與已儲存劈砍預算的時點要分開。

- I–IV 增加的是近戰威力輸入；傷害、踉蹌與劈砍各有後續曲線及門檻。

- 同類威力修正相加，並在原生威力類型縮放後套用。

- 觸發命中的已結算傷害不回溯；後續取值要區分命中時資料與掃掠開始時保存的劈砍預算。
