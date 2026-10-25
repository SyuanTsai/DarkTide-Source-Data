# 擊倒：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

近戰暴擊擲定輸入為 `clamp(P0 + q + p, 0, 1) × (1 − critical_strike_chance_to_damage_convert)`；P0是基礎值，q為其他加算來源，p為本祝福tier（.125、.15、.175、.20）。先加算與clamp，再套暴擊率轉傷害；p是機率百分點，不是最終傷害乘數。算例列於玩家正文，假設無上限／轉傷／強制或禁止暴擊。

固定inventory交集為2個trait variants、2個實際武器族、5個逐型號bindings。兩份own tiers與wrappers、parent-child覆寫、special/normal/push profile、目標即時踉蹌條件、事件刷新、action-start crit取樣、暴擊機率consumer及持用切換均有固定SHA精確來源。RAW同資源、同key/hash中英配對；四級重建只代入formatter placeholder，不是遊戲畫面。未見明確矛盾；層數、刷新、動作擲定與型號路徑屬文件未涵蓋。
