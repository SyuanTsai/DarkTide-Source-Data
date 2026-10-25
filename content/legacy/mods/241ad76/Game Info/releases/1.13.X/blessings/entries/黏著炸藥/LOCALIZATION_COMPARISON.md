# 黏著炸藥：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_grenades_stick_to_monsters`／hash`d10e33b3`；描述鍵`loc_trait_bespoke_grenades_stick_to_monsters_and_damage_desc`／hash`b09ff9d4`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Adhesive Charge／粘性炸藥。

- 文件名稱：黏著炸藥(Adhesive Charge)。

- 適用武器：震盪槍；描述鍵`loc_trait_bespoke_grenades_stick_to_monsters_and_damage_desc`／hash`b09ff9d4`。

- 英文模板：Your Grenades stick to Ogryns and Monstrosities. {dmg_vs_ogryn_monster:%s} Damage vs Ogryns and Monstrosities

- 繁中模板：你的手榴彈會黏在歐格林和巨獸身上，對歐格林和巨獸造成的傷害{dmg_vs_ogryn_monster:%s}

- **靜態重建**：名稱：英文 RAW「Adhesive Charge」、繁中 RAW「粘性炸藥」（hash d10e33b3）；文件採詞表已確認的「黏著炸藥」，其餘原文仍保留。

英文 RAW 說明（hash b09ff9d4）：Your Grenades stick to Ogryns and Monstrosities. {dmg_vs_ogryn_monster:%s} Damage vs Ogryns and Monstrosities

繁中 RAW 說明（hash b09ff9d4）：你的手榴彈會黏在歐格林和巨獸身上，對歐格林和巨獸造成的傷害{dmg_vs_ogryn_monster:%s}

格式參數從本特質所選階級的 `stat_buffs.damage_vs_ogryn_and_monsters` 取值；百分比格式將小數乘 100 並加上百分號，`prefix` 再加上 `+`。逐階重建如下：

- I：Your Grenades stick to Ogryns and Monstrosities. +6% Damage vs Ogryns and Monstrosities ／ 你的手榴彈會黏在歐格林和巨獸身上，對歐格林和巨獸造成的傷害+6%
- II：Your Grenades stick to Ogryns and Monstrosities. +9% Damage vs Ogryns and Monstrosities ／ 你的手榴彈會黏在歐格林和巨獸身上，對歐格林和巨獸造成的傷害+9%
- III：Your Grenades stick to Ogryns and Monstrosities. +12% Damage vs Ogryns and Monstrosities ／ 你的手榴彈會黏在歐格林和巨獸身上，對歐格林和巨獸造成的傷害+12%
- IV：Your Grenades stick to Ogryns and Monstrosities. +15% Damage vs Ogryns and Monstrosities ／ 你的手榴彈會黏在歐格林和巨獸身上，對歐格林和巨獸造成的傷害+15%；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | RAW 英文／繁中：Adhesive Charge／粘性炸藥，hash d10e33b3 | 文件名沿用詞表既有「黏著炸藥」；保留 RAW 與原 hash | 文件翻譯 | 這是文件用名一致化，不是 RAW 勘誤。 |
| 黏附目標 | RAW 說手榴彈黏在 Ogryns／Monstrosities | 兩種實際 Rumbler 投射物以 ogryn 或 monster breed tag 判定；目標須存活，無護甲類型限制 | 一致並補充 | 直擊 Attack 先結算；擊殺目標不再符合存活檢查。 |
| 傷害加成 | RAW placeholder dmg_vs_ogryn_monster; hash b09ff9d4 | generic additive_multiplier damage stat；I–IV +6/9/12/15%；held 條件，投射物生成時複製快照 | 一致並補充實作 | 不是固定最終生命值百分比；不混傷害快照與撞擊時黏附檢查。 |
| 階級 formatter | RAW placeholder {dmg_vs_ogryn_monster:%s} | trait_override 取選定階級；percentage 乘 100，prefix +；重建 +6/9/12/15% | 一致並展開 | 顯示字串依固定 source formatter 重建。 |
| 攻擊類型 | RAW 只寫 Your Grenades | 腰射與瞄準投擲共用黏附；Rumbler Bash 是 melee sweep，不黏附，但通用 damage stat 可增傷 | RAW 未涵蓋 | 以實際 weapon/action/consumer 接線補充，不視為矛盾。 |
