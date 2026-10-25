# 血肉撕裂者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_bleed_on_crit_melee`／hash`6f0bf4f9`；描述鍵`loc_trait_bespoke_bleed_on_crit_melee_desc`／hash`435886f7`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Flesh Tearer／血肉撕裂者。

- 文件名稱：血肉撕裂者(Flesh Tearer)。

- 適用武器：戰刃、短刀；描述鍵`loc_trait_bespoke_bleed_on_crit_melee_desc`／hash`435886f7`。

- 英文模板：{stacks:%s} Bleed Stacks on Critical Hit.

- 繁中模板：致命一擊的流血層數{stacks:%s}。

- **靜態重建**：每次近戰暴擊命中施加I–IV的5／6／7／8層流血；保留本體名稱與描述RAW原文另列比較；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 暴擊條件 | Critical Hit／致命一擊 | on_melee_crit_hit + on_damaging_hit | 繁中用詞易誤解 | 指近戰暴擊造成傷害，不是擊殺。 |
| 等級層數 | {stacks:%s} Bleed Stacks | 兩個trait I–IV覆寫 | 一致 | 每次新增5／6／7／8層。 |
| 目標範圍 | Critical Hit | ActionSweep1499與Base2481–2497 | 原文未列 | 不限第一目標與弱點；戰刃特殊攻擊及短刀投擲不符合。 |
| 層數與刷新 | 原文未列 | bleed模板235–258與Buff.set_start_time619–630 | 原文未列 | 16層封頂；新增及滿層再觸發都刷新等待退層期限。 |
| 退層與跳傷 | 原文未列 | IntervalBuff30–64與BuffExtension187–205 | 原文未列 | 約1.5秒後每次跳傷退1層，並非所有層數一起消失。 |
| 傷害結算 | Bleed／流血 | smoothstep威力與bleeding profile | 原文未列 | 依當前層數曲線、護甲與其他修正計算，非固定每層傷害。 |
| 特殊攻擊 | 原文未列 | 兩wrapper17–18覆寫allow_weapon_special=false | 原文未列 | 戰刃特殊jab被排除；短刀投擲不符合近戰分類。 |
