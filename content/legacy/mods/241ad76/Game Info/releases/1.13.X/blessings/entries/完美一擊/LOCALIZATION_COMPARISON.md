# 完美一擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_pass_past_armor_on_crit`／hash`0893680f`；描述鍵`loc_trait_bespoke_pass_past_armor_on_crit_new_desc`／hash`0719aab6`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Perfect Strike／完美一擊。

- 文件名稱：完美一擊(Perfect Strike)。

- 適用武器：重型開膛劍、重劍、廁所鏟、惡霸棍棒、動力錘、作戰大錘&板盾、穿音速雙刀；描述鍵`loc_trait_bespoke_pass_past_armor_on_crit_new_desc`／hash`0719aab6`。

- 英文模板：Critical Hits ignore Hit Mass bonus from Armour. {crit_damage} Melee Critical Hit Damage.

- 繁中模板：暴擊會無視護甲提供的打擊質量。近戰暴擊傷害{crit_damage}。

- **靜態重建**：以下依固定英文／繁中 RAW 模板及 own formatter 的分級字串逐級重建：

- I — EN `Critical Hits ignore Hit Mass bonus from Armour. +2.5% Melee Critical Hit Damage.`；繁中 `暴擊會無視護甲提供的打擊質量。近戰暴擊傷害+2.5%。`
- II — EN `Critical Hits ignore Hit Mass bonus from Armour. +5% Melee Critical Hit Damage.`；繁中 `暴擊會無視護甲提供的打擊質量。近戰暴擊傷害+5%。`
- III — EN `Critical Hits ignore Hit Mass bonus from Armour. +7.5% Melee Critical Hit Damage.`；繁中 `暴擊會無視護甲提供的打擊質量。近戰暴擊傷害+7.5%。`
- IV — EN `Critical Hits ignore Hit Mass bonus from Armour. +10% Melee Critical Hit Damage.`；繁中 `暴擊會無視護甲提供的打擊質量。近戰暴擊傷害+10%。`；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發條件 | 持用該近戰武器且 Buff 快取更新讀到 live 爆擊元件啟用。 | base_weapon_trait_buff_templates.lua:440–458；buff.lua:135–143、689–747 | 統計與兩個關鍵字共用條件式快取。 | 僅在條件符合且相關快取完成更新後成立；不承諾同影格生效。 |
| 近戰爆擊傷害 | RAW 標示近戰爆擊傷害；各級 +2.5／+5／+7.5／+10%。 | 七組 own tiers 與 TraitValueParser／UI RAW 收據。 | tier 同名條件屬性取代 wrapper fallback；加成進共享 finesse 乘區。 | 只增加爆擊額外傷害部分；不等於整次傷害乘以 1+t。 |
| Hit Mass 與護甲中止 | RAW 提及忽略護甲 Hit Mass bonus。 | ActionSweep:_process_hit；hit_mass.lua:12–63、124–155。 | 合資格生命角色的基礎目標質量分支乘 .25；護甲 abort keyword 不移除 breed abort 或累積 max-mass 預算。 | 不代表造成更多護甲傷害、rending、移除所有質量限制或無限 cleave。 |
| 特殊與額外攻擊 | 特殊攻擊依實際呼叫路徑判定，不能僅憑武器／攻擊名稱外推。 | 15 個實際 Mark action table、特殊類別及 Attack 消費範圍見 refs。 | 掃掠命中讀當次爆擊；純 push、盾牌防禦、Powermaul 非爆擊 explosion 與 sticky direct tick 各自分流。廁所鏟 M3 locomotion push 作用於玩家，不推敵人。 | 只有實際 melee critical consumer 使用近戰爆擊屬性；Hit Mass keyword 僅套用其 Sweep 路徑。 |
| RAW 與格式化 | RAW 使用 `{crit_damage}`；Own formatter 將分級百分比和 `+` 前綴代入。 | 固定 RAW resource hash 與七組 own formatter 收據。 | 靜態四級重建按實際 formatter 值替換 placeholder。 | RAW 未列出的持用、快取、目標資格與特殊路徑屬文件未涵蓋，不另稱矛盾。 |
