# 狂轟猛炸：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 設 n 為本祝福在半徑加成快取最後更新時的有效連擊層數，持用條件成立時限制於 0–5，持用條件未通過時本祝福的貢獻為 0；r 為 I–IV 每層 .03／.04／.05／.06，q 為其他同類半徑加算修正淨額。實際榴彈爆炸以玩家 owner 的已計算值讀取，倍率 M = 1 + n × r + q；外圈 R′ = R × M，近距離 closeR′ = closeR × M。

- I 一層且 q = 0 時，M = 1.03；基準外圈 10、近距離 3，結果 10.3 與 3.09 公尺。IV 五層時，M = 1.30，結果 13 與 3.9 公尺。

- q = .20、IV 五層時，倍率由 1.20 提至 1.50；基準外圈 10 公尺由 12 提至 15，相對增加 (15 − 12) ÷ 12 = 25%。這是半徑比較，不是面積、體積或傷害倍率。

- 本模板 scalable_radius = true，先按半徑陣列及 charge_level 解析 R、closeR，之後才乘上述倍率。爆炸類型且 attacker 解析為玩家 owner 時才取這項半徑修正；直擊與近戰槍托不是此 consumer。

- 固定 Release 1.13.1 source SHA 的 tier、wrapper、combo、Rumbler action、projectile 與 explosion consumer 都有逐段 Git blob byte-slice SHA-256。

- Inventory 唯一交集是 1 variant／1 mark；型號名依實際 UI family／pattern／mark loc_id 與接線收據核對。

- 算例標出 charge/lerp 後基準半徑、combo 階級、tier、其他修正及輸出單位；僅驗證半徑算術，未宣稱實戰測試。
