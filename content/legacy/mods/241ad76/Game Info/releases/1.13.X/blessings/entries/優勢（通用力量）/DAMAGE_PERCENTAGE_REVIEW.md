# 優勢（通用力量）：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `p` 為一層本級力量修正（I–IV：0.05、0.075、0.10、0.125），`n` 為有效層數（0–3），`q` 為其餘當次適用力量修正相對基準 1 的淨加總；`S_native` 是原生武器力量類型曲線換算後、套用 Buff 修正前的力量。則 `S_after = S_native × (1 + q + n×p)`。父模板七秒逐層衰退，層數上限三。力量輸入後續分流至不同 attack/impact/cleave 曲線，公式不能直接換算成最終生命值傷害百分比。

本稿依固定 Release 1.13.1 的兩份 own tiers、兩個獨立 wrapper、父 ProcBuff/事件 helper、Buff override 與力量 consumer 檢查。兩個 weapon_id、四個 Mark 和實際 UI/metadata trait 交集一致，RAW 描述鍵與 hash 配對。RAW 的「Elite and Specialist」列出兩類目標；程式 helper 為 elite OR special。Crowbar aliases、sticky/dodge-exit 路徑、Force Sword M1/M2 special-active sticky Attack 與 ranged fling 均逐實際接線核對；damage_type 不被誤作 attack_type。原文未涵蓋持用槽條件、快取更新時點和換持時衰退，因此不新增遊戲描述勘誤。標題加「通用力量」只區分相同 RAW 名稱的近戰力量祝福。
