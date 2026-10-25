# 連續發射（射擊連段）：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 K 為動作連段計數、p 為該實作／等級每步修正、K_eff=min(K,5)。其他 Power 修正中性時 M=1+p×K_eff；沒有彈匣比例項。Kickback I 級 p=.06、K=3 得 M=1.18；Gauntlet II 級 p=.06、K=2 得 M=1.12。Rumbler 的靜態 500 輸入仍經帶玩家快照的一般 PowerLevel 結算；上述是修正池，不是最終生命傷害公式。

Alternative 使用獨立 name key loc_trait_bespoke_power_bonus_on_continuous_fire_alternative／hash 6fc486b9 和 desc key loc_trait_bespoke_power_bonus_on_continuous_fire_alternative_desc／hash 1a992ef2。RAW 說連續射擊時每發射擊提供 Strength 並可疊 5 次；程式以 weapon action combo step 計算，亦封頂 5。RAW 未說一個 action 多顆 pellet／多個 damage packet、不同特殊動作、切換與 cache 時序，屬文件未涵蓋；未把沒有對應 RAW placeholder 的 ammo formatter 欄位誤列矛盾。一般版同名 RAW 的鍵不同，不套用其 ammo ratio。
