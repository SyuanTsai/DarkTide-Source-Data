# 懲罰者：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令 p 為 I–IV 每層的一般傷害加法（0.02／0.03／0.04／0.05），n 為本項有效層數（0–5），q 為同一 damage_stat_buffs 加法池中的其他加成，B 為加入該池前的 base damage。忽略或固定其它 damage multiplier、目標承傷、部位、護甲、弱點／爆擊等後續因素時：

- D = B × (1 + q + n × p)

- stat_buffs.damage 的類型是 additive_multiplier；damage calculation 將 (attacker_stat_buffs.damage − 1) 加入通用 damage_stat_buffs，之後再與其它傷害／承傷項合成。因此本項只把自己的 n×p 加到該加法池，不能把整次最終傷害一律說成獨立乘以 (1+n×p)，也不能把傷害計算中的其它乘區忽略後稱為實測結果。

- 實際1種步兵自動槍祝福實作、3個型號的 tier、wrapper、12.5公尺遠程擊殺門檻、持用條件、有效五層及1.75秒刷新均已核對。物理上限6包含占位層，玩家有效上限為5；專屬傷害值取代1%基礎值。算例只計同一加傷池並明列其他乘區前提。RAW與formatter的damage／movement_speed鍵名錯配另列勘誤；缺參數輸出依固定Lua重建，未宣稱遊戲畫面實測。
