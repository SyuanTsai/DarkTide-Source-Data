# 遊擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_count_as_dodge_vs_ranged_on_close_kill`／hash`c20a63ba`；描述鍵`loc_trait_bespoke_count_as_dodge_vs_ranged_on_close_kill_desc`／hash`fbba5587`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Hit & Run／遊擊。

- 文件名稱：遊擊(Hit & Run)。

- 適用武器：步兵自動槍、槍托自動槍、偵察鐳射槍、戰鬥霰彈槍、雙管霰彈槍；描述鍵`loc_trait_bespoke_count_as_dodge_vs_ranged_on_close_kill_desc`／hash`fbba5587`。

- 英文模板：Immune to Ranged Attacks for {time:%s}s on Close Range Kill.

- 繁中模板：近戰擊殺後免疫遠端攻擊{time:%s}秒。

- **靜態重建**：RAW名稱Hit & Run／遊擊共用hash c20a63ba；描述鍵hash fbba5587。`{time:%s}`依五個trait literal的I／II／III／IV `active_duration`重建為0.7／0.8／0.9／1.0秒。繁中「近戰擊殺」與近距離遠程擊殺實作矛盾；「免疫遠端攻擊」應限縮到會被閃避consumer接受的可閃避遠程攻擊；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 擊殺攻擊類型 | 本體繁中描述鍵`loc_trait_bespoke_count_as_dodge_vs_ranged_on_close_kill_desc`／hash`fbba5587`：近戰擊殺後；英文Close Range Kill。 | check_proc_functions.lua#L306-L318要求died及ranged attack/profile flag；#L777-L792按近距離判斷。 | 明確矛盾 | 繁中把近距離遠程擊殺寫成近戰擊殺；普通近戰武器擊殺不符合遠程類型條件。 |
| 近距離門檻 | RAW稱Close Range Kill，未列距離。 | check_proc_functions.lua:777–792；damage_settings.lua:18–23。 | 文件未涵蓋 | attacking_unit位置至hit_world_position平方距離<=12.5²；12.5m邊界包含。 |
| 同一把武器 | RAW未說明擊殺武器限制。 | check_proc_functions.lua:721–727；attack.lua:581–623。 | 文件未涵蓋 | attacking_item需與trait context item同名。 |
| I–IV持續時間 | RAW參數{time:%s}秒，未列級距。 | 五個trait blocks：autogun p1 362–391、autogun p2 138–167、lasgun p3 74–103、shotgun p1 138–167、shotgun p2 9–38。 | 一致 | I／II／III／IV均為0.7／0.8／0.9／1.0秒。 |
| 再次觸發與冷卻 | RAW未說明效果期間再次擊殺的計時。 | base template allow_proc_while_active=true；proc_buff.lua:173–185、304–356。 | 文件未涵蓋 | 合格擊殺重設完整duration；沒有堆疊或額外冷卻。 |
| 切換武器 | RAW未說明切換後剩餘時間。 | weapon_tweak_templates.lua:168–190；player_unit_weapon_extension.lua:633–693、780–785；proc_buff沒有conditional gate。 | 文件未涵蓋 | 切換不清除已觸發計時；後續刷新仍由原祝福武器造成擊殺。 |
| 免疫範圍 | RAW稱免疫遠程攻擊。 | dodge.lua:100–121；hit_scan.lua:143–198。 | 明確矛盾 | 只讓可閃避遠程攻擊被判作閃避；undodgeable profile跳過此判斷。 |
| 型號與接入 | RAW未列武器型號。 | 5 trait blocks、5 wrapper clones、10個category import/ukeys/append及10組UI三loc ID。 | 文件未涵蓋 | 實際五變體十綁定；I–IV時間不因型號改變。 |
| 射擊與特殊操作 | 本體RAW未界定射擊模式或近戰槍托攻擊。 | 實際型號kind／profile；ranged_action.lua#L22-L28、action_sweep.lua#L1498-L1501及兩類槍托profile。 | 文件未涵蓋 | 腰射／瞄準／架槍與雙管射擊走遠程；所列槍托攻擊走近戰且沒有遠程旗標；手電筒切換不算擊殺。 |
