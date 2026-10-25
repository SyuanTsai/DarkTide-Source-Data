# 開啟齊射：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_bonus_on_first_shot`／hash`ea6a5633`；描述鍵`loc_trait_bespoke_power_bonus_on_first_shot_desc`／hash`ee0f215b`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Opening Salvo／開啟齊射。

- 文件名稱：開啟齊射(Opening Salvo)。

- 適用武器：機動自動槍、電能步槍、步兵鐳射槍、重伐木槍、磷光爆破手槍；描述鍵`loc_trait_bespoke_power_bonus_on_first_shot_desc`／hash`ee0f215b`。

- 英文模板：{power_level:%s} Strength on Salvo's First shot.

- 繁中模板：首次齊射威力提升{power_level:%s}。

- **靜態重建**：五個 trait 的 formatter 從實際 tier override 的 ranged_power_level_modifier 讀值，依 percentage 格式乘 100 並加 + 前綴，I–IV 重建為 +14%／+16%／+18%／+20%；步兵鐳射槍的 formatter 與安裝都使用自動槍 P3 的實際 Buff ID；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | Opening Salvo／開啟齊射 hash ea6a5633 | 兩語RAW key/hash相同 | 一致 | 沿用RAW。 |
| 首發 | Salvo's First shot／首次齊射 | held slot且num_shots==0，ammo pass後先增加counter | 文件未涵蓋 | RAW未述idle、dry、miss。 |
| 力量 | Strength／威力{power_level:%s} | tier覆寫ranged Power stat .14-.20；只由ranged type選取 | 文件未涵蓋 | 不是最終傷害比例。 |
| 格式 | 兩語description key/hash相同 | trait_override取tier，百分比×100並加prefix | 一致 | formatter重建非畫面。 |
| 其他範圍 | RAW未述special/explosion/DoT | melee/explosion/buff與ranged consumer分開 | 文件未涵蓋 | 不是語言矛盾。 |
| 停火重新可用與型號差異 | RAW未列出停火門檻與狀態 | num_shots按目前hip/aim spread與movement讀門檻，strict t > end + clear_time；11型號四狀態已逐一核對。 | 文件未涵蓋 | 清除條件與力量加成重算是實際接線補充，不是裝填／切換直接重設。 |
