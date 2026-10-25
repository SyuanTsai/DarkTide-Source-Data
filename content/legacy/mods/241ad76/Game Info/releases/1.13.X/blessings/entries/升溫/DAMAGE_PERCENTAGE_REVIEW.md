# 升溫：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令 h 為武器欄位中的 normalized overheat_current_percentage，n 為有效熱能階數，p 為所選 tier 每階值：n=round(5×clamp01((h−0.10)/0.90))，範圍 0–5；A=n×p。I–IV 的 p 為 0.015／0.02／0.03／0.04，所以五階 A 上限是 0.075／0.10／0.15／0.20。

- power_level_modifier 是 additive_multiplier。PowerLevel.power_level_buff_modifier 將此通用 modifier 與適用的遠程、弱點、目標狀態等威力修正組合；本項在該組合中貢獻 A。若其他適用分量都在基準 1，合計因子為 1+A。該因子乘在攻擊類型曲線已解析的威力值上，然後由 DamageProfile 分別分配 attack、impact 與 cleave power；DamageCalculation 以 attack power 分布計算傷害，StaggerCalculation 使用 impact power。故 A 不是最終傷害的直接同比百分比。

- 武器射擊及蓄力會改變過熱欄位；祝福統計快取在武器系統之前更新，而 ActionShoot 在該發攻擊後才增加射擊熱能。因此，當下熱能只會在後續快取更新後改變 A，不會回溯修改已結算的該發射擊。排熱與其他每欄位熱能更新仍依其實際 weapon heat 流程，不把衰減或排熱速度等同於祝福階數。

- 若其他適用威力分量的加法貢獻合計 q，合計因子為 1+q+A。在 P=500、q=0.10、A=0.08 的固定輸入例中，550→590，相對此階段原值增幅為 40/550≈7.27%；不是獨立乘1.08，也不宣稱最終傷害等比。

- 各等級的每階值與五階上限分開；own tier 取代 0.01 備援，不把備援另加一次。階數由最近快取的熱能決定，沒有射擊事件疊層或固定期限。

- 威力因子作用在各曲線解析值之後；範例以曲線輸出 P=500 為前提。+8% 威力貢獻與最終傷害增幅分開，其他適用威力分量按加法合併。
