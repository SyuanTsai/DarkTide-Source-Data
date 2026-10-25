# 穿透火焰：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_armor_rending_from_dot_burning`／hash`e02d8784`；描述鍵`loc_trait_bespoke_armor_rending_from_dot_burning_desc`／hash`c674072f`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Penetrating Flame／穿透火焰。

- 文件名稱：穿透火焰(Penetrating Flame)。

- 適用武器：淨化噴火器、烈焰力場法杖；描述鍵`loc_trait_bespoke_armor_rending_from_dot_burning_desc`／hash`c674072f`。

- 英文模板：Direct hits apply {num_stacks:%s} Stacks of {rending_percentage:%s} Brittleness for {duration:%s}s. Stacks {max_stacks:%s} times

- 繁中模板：直接命中將疊加{num_stacks:%s}層{rending_percentage:%s}的脆弱，持續{duration:%s}秒，可疊加{max_stacks:%s}層。

- **靜態重建**：保留本體描述的直接命中、層數、每層脆弱百分比、持續時間及層數上限參數：直接命中會疊加{num_stacks:%s}層、每層{rending_percentage:%s}的脆弱，持續{duration:%s}秒，最多疊加{max_stacks:%s}層；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱與繁中RAW | Penetrating Flame／穿透火焰；name hash e02d8784 | content/localization/items 同hash中英RAW精確配對 | 一致 | locale 0 與16在content/localization/items使用同一hash與名稱。 |
| 直接命中與DoT | Direct hits apply／直接命中將疊加 | 固定SHA：FlamerAction.damage_target送出on_direct_flamer_hit；燃燒DoT堆疊另行加入 | 觸發範圍補充 | 祝福由直接火焰命中觸發，燃燒持續傷害跳傷不會單獨觸發。 |
| 烈焰力場法杖蓄力攻擊 | 直接命中 | 固定SHA：短按為flamer_gas_burst，蓄力火焰為flamer_gas；兩者命中都走直接火焰命中helper | 條件更精確 | 蓄力本身不疊層；短按與蓄力火焰的直接命中都能疊層。 |
| 等級與每層效果 | {num_stacks:%s} Stacks of {rending_percentage:%s} Brittleness／{num_stacks:%s}層{rending_percentage:%s}的脆弱 | 兩個逐武器trait覆寫均為1／2／3／4層；rending_burn_debuff每層0.01 | 一致 | 兩個武器的I–IV數值相同，單次新增脆弱為1%／2%／3%／4%。 |
| 上限與期限 | for {duration:%s}s. Stacks {max_stacks:%s} times／持續{duration:%s}秒，可疊加{max_stacks:%s}層 | rending_burn_debuff：5秒、20層、加層刷新 | 一致 | target buff上限20層；trait target_buff_data的31只是施加端上界。 |
| 共用效果 | Brittleness／脆弱 | 目標Buff經target_stat_buffs.rending_multiplier進入damage_calculation | 原文未列結算細節 | 目標撕裂供後續隊友與其他武器的攻擊讀取，實際增傷取決於護甲分類與總撕裂。 |
| 同次直接傷害 | 直接命中施加脆弱 | FlamerAction.damage_target#L44-L52；ProcBuff處理佇列 | 原文未列時序 | 先執行直接傷害，再送出事件；新增層數不回溯。 |
