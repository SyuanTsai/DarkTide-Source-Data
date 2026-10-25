# 超壓：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_scales_with_clip_percentage`／hash`568c86d7`；描述鍵`loc_trait_bespoke_power_scales_with_clip_percentage_desc`／hash`760901c5`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Overpressure／超壓。

- 文件名稱：超壓(Overpressure)。

- 適用武器：淨化噴火器；描述鍵`loc_trait_bespoke_power_scales_with_clip_percentage_desc`／hash`760901c5`。

- 英文模板：Up to {power_level:%s} Strength, scaling with remaining Ammunition. Stacks {stacks:%s} times.

- 繁中模板：根據剩餘彈藥，威力最多提升{power_level:%s}，可疊加{stacks:%s}層。

- **靜態重建**：own percentage formatter 使用預設 value×100 加「+」前綴，stacks 為固定字串5；英文與繁中 RAW 模板末尾各有一個 ASCII 空格，以此註記保留該資訊，Markdown 不放行尾空白。四級完整句子如下：

- **I**：EN `Up to +2% Strength, scaling with remaining Ammunition. Stacks 5 times.`；繁中「根據剩餘彈藥，威力最多提升+2%，可疊加5層。」

- **II**：EN `Up to +3% Strength, scaling with remaining Ammunition. Stacks 5 times.`；繁中「根據剩餘彈藥，威力最多提升+3%，可疊加5層。」

- **III**：EN `Up to +4% Strength, scaling with remaining Ammunition. Stacks 5 times.`；繁中「根據剩餘彈藥，威力最多提升+4%，可疊加5層。」

- **IV**：EN `Up to +5% Strength, scaling with remaining Ammunition. Stacks 5 times.`；繁中「根據剩餘彈藥，威力最多提升+5%，可疊加5層。」

- 顯示值為每階值，實作按彈匣比例取得0–5階後乘每階值；五階最大貢獻為+10%／+15%／+20%／+25%。RAW 未列這個合成公式，原文與實作數字分開呈現。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱與型號 | RAW 名稱 `Overpressure`／`超壓`，key `loc_trait_bespoke_power_scales_with_clip_percentage`，hash `568c86d7`。 | MasterItems trait item restriction=flamer_p1；flamer_p1_m1.lua14匯入／745–747加入traits；Items315–327／378–426組UI三欄。 固定 inventory/UI 交集是一個 trait/mark：flamer_p1_m1；UI 組名「淨化噴火器 奧特米亞 Mk III」。 | 一致 | RAW 名稱和實作鍵相符；型號只按實際 binding 列出。 |
| 剩餘彈藥與階數 | 描述鍵 loc_trait_bespoke_power_scales_with_clip_percentage_desc／hash760901c5；RAW 表示 scaling with remaining Ammunition、Stacks 5 times，但未給公式。 | base_weapon_trait_buff_templates2926–2969；Ammo210–242；SteppedStatBuff32–51。 持用欄位 in-use clip 比例 r 經 wrapper floor 映射為 0–5 steps，沒有每次命中的獨立事件層。 | 文件未涵蓋 | RAW 未列分母、閾值或離散映射，故按固定 source 補充。 |
| Tier 數字與最大值 | 描述鍵 loc_trait_bespoke_power_scales_with_clip_percentage_desc／hash760901c5；RAW 的 power_level placeholder 搭配 Stacks 5 times。 | weapon_traits_bespoke_flamer_p1.lua138–181與TraitValueParser8–20／77–117；Buff689–747。 Formatter 各級插入 per-step +2/+3/+4/+5%；runtime 最多五階，總修正最大 +10/+15/+20/+25%。 | 文件未涵蓋合成公式 | 保留 formatter 原值與 runtime 上限分列；不把 per-step UI 字串誤稱總上限。 |
| 哪些傷害使用威力 | 描述鍵 loc_trait_bespoke_power_scales_with_clip_percentage_desc／hash760901c5；RAW 稱 Strength，未列出 attack profile 範圍。 | weapon_buff_templates50–78，Attack222／271／353，PowerLevel25–61／63–91；Flamer M1 push445–505、PushAttack32–86、fullprofiles544–613。 直接爆發/持續火焰、flamer_assault interval、special push 的實際路徑都傳入 owner stat 和攻擊類型；通用 power_level_modifier 在 PowerLevel consumer 合入。 | 文件未涵蓋 | 各類 profile、目標、護甲仍決定生命值結果；威力修正非最終傷害同幅百分比。 |
| 觸發、裝填與切換 | 描述鍵 loc_trait_bespoke_power_scales_with_clip_percentage_desc／hash760901c5；RAW 沒說命中、擊殺或固定期限。 | base2926–2969與ConditionalFunctions43–59；ActionShoot244–347／481–560；固定Buff-before-weapon cache順序。 持用條件 gated stepped stat；ActionShoot 先執行 callback 後扣 clip；reload 無特別排除，切出後持用 gate失效並在 stat cache更新反映。 | 文件未涵蓋 | 不是事件 proc 或固定 TTL；不聲稱同影格同步重算。 |
| 燃燒動態數值與推擊零倍率 | 描述鍵 loc_trait_bespoke_power_scales_with_clip_percentage_desc／hash760901c5；RAW只稱Strength，未列燃燒取樣時點及推擊護甲倍率。 | flamer_assault50–78每次重建power並Attack；施加點gas360–394／burst313–329僅傳owner/item；Attack222／271取currentstat；完整pushprofiles544–613。 | 文件未涵蓋 | 切出後本項條件於後續更新失效但燃燒可續行；推擊原零傷害倍率仍零，不承諾每種目標傷害增加。 |
