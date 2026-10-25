# 毀滅打擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_infinite_melee_cleave_on_crit`／hash`1a966f66`；描述鍵`loc_trait_bespoke_infinite_melee_cleave_on_crit_desc`／hash`f824963f`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Devastating Strike／毀滅打擊。

- 文件名稱：毀滅打擊(Devastating Strike)。

- 適用武器：突擊鏈鋸劍、「惡魔之爪」劍、砍刀、上古神刃、機械神教動力劍；描述鍵`loc_trait_bespoke_infinite_melee_cleave_on_crit_desc`／hash`f824963f`。

- 英文模板：{hit_mass:%s} Cleave for {time:%s} seconds on Critical Hit.

- 繁中模板：暴擊後順劈增加{hit_mass:%s}，持續{time:%s}秒。

- **靜態重建**：以下按formatter對本祝福實際值重建：`hit_mass`依own tier的percentage與`+`前綴格式化；`time`取base Buff的5秒。

- I：`+65% Cleave for 5 seconds on Critical Hit.`｜`暴擊後順劈增加+65%，持續5秒。`
- II：`+70% Cleave for 5 seconds on Critical Hit.`｜`暴擊後順劈增加+70%，持續5秒。`
- III：`+75% Cleave for 5 seconds on Critical Hit.`｜`暴擊後順劈增加+75%，持續5秒。`
- IV：`+80% Cleave for 5 seconds on Critical Hit.`｜`暴擊後順劈增加+80%，持續5秒。`

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱／RAW | 名稱鍵 `loc_trait_bespoke_infinite_melee_cleave_on_crit` hash `1a966f66`：Devastating Strike／「毀滅打擊」；描述鍵 `loc_trait_bespoke_infinite_melee_cleave_on_crit_desc` hash `f824963f`。 | `content/localization/items`；root RAW receipt配對locale 0／16及相同hash。 | RAW一致，errata留空。 | 內部template名含infinite，但RAW沒有宣稱無限。 |
| 觸發條件 | RAW未列正傷害、近戰攻擊、同一trait item或持用條件。 | base template 400–412；CheckProcFunctions.on_item_match 721–727、on_damaging_hit 465–467、on_melee_crit_hit 388–390；scripts/utilities/attack/attack.lua:376-383,456-539; ConditionalFunctions.is_item_slot_wielded 43–58。 | 文件未涵蓋。 | 需同武器、damage>0、critical melee；無kill/stagger gate。 |
| Tier與fallback | 四級格式為percentage＋前綴；`hit_mass`取own值。 | 五個own tier範圍見refs；ProcBuff.update_stat_buffs 288–300；Buff._calculate_stat_buffs 689–733。 | 顯示與程式值相符。 | +.65至+.80取代base proc .50，不相加；time讀base 5秒。 |
| 順劈質量結算 | RAW未拆攻擊側與衝擊側，亦未將順劈說成傷害。 | DamageProfile.max_hit_mass 37–80；ActionSweep._calculate_max_hit_mass 328–357；buff_settings max_hit_mass_attack_modifier 858–866。 | 文件未涵蓋公式細節，無矛盾。 | 此stat只改攻擊側；掃擊取兩側較大質量，非直接傷害倍率或無限keyword。 |
| 首次效果／期限 | RAW沒有說明掃擊快取或刷新時間。 | ActionSweep.start 207–265；Attack hit events 550–625；player fixed_update 131–146；ProcBuff.update_proc_events 304–355。 | 文件未涵蓋。 | 首次觸發的已開始掃擊不回溯；有效事件可重設5秒起點，無冷卻或層數。 |
| 實際動作與profile | RAW未區分掃擊、純推擊、特殊掃擊或狀態切換。 | 11個實際weapon action tables在coverage列出；ActionSweep damage 1475–1501；power sword selected profile blocks亦列於refs。 | 文件未涵蓋各Mark邊界。 | 只實際kind=sweep攻擊命中可能送出近戰on_hit；鏈鋸Mk IV黏附profile設skip_on_hit_proc。 |
| 鏈鋸劍 Mk XIIIg 直接掃擊與黏附追擊 | RAW沒有區分直接掃擊與後續黏附命中是否各自送出命中事件。 | Mk XIIIg action settings 58–139及8個掃擊選擇見 coverage；直接profile定義 159–448、756–972；四個sticky override 449–553、655–755、1078–1182、1284–1384；ActionSweep._update_hit_stickyness 720–787；Attack._handle_buffs 581–621。 | 描述未涵蓋；沒有把RAW視作與程式相反。 | 直接profile未設skip_on_hit_proc；四種獨立sticky追擊profile都覆寫為true，因此直接命中可能符合一般觸發條件，黏附追擊追加命中則由Attack略過on_hit。 |
