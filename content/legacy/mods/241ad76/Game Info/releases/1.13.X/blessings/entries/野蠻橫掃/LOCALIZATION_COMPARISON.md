# 野蠻橫掃：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_attack_cleave_on_multiple_hits`／hash`82900835`；描述鍵`loc_trait_bespoke_increased_attack_cleave_on_multiple_hits_desc`／hash`16ef5b9c`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Savage Sweep／野蠻橫掃。

- 文件名稱：野蠻橫掃(Savage Sweep)。

- 適用武器：重型開膛劍、突擊鏈鋸劍、「惡魔之爪」劍、重劍、砍刀、穿音速雙刀；描述鍵`loc_trait_bespoke_increased_attack_cleave_on_multiple_hits_desc`／hash`16ef5b9c`。

- 英文模板：Hitting at least {multiple_hit:%s} enemies with an attack, increases your cleave by {cleave:%s} for {time:%s} seconds.

- 繁中模板：一次攻擊命中至少{multiple_hit:%s}個敵人後，使你的順劈提高{cleave:%s}，持續{time:%s}秒。

- **靜態重建**：以下依formatter將 `multiple_hit=3`、`time=3`，並按各own tier格式化cleave值。標準五實作使用+140%至+200%，穿音速雙刀使用+120%至+150%。

- 標準五實作 I：Hitting at least 3 enemies with an attack, increases your cleave by +140% for 3 seconds.｜一次攻擊命中至少3個敵人後，使你的順劈提高+140%，持續3秒。
- 標準五實作 II：Hitting at least 3 enemies with an attack, increases your cleave by +160% for 3 seconds.｜一次攻擊命中至少3個敵人後，使你的順劈提高+160%，持續3秒。
- 標準五實作 III：Hitting at least 3 enemies with an attack, increases your cleave by +180% for 3 seconds.｜一次攻擊命中至少3個敵人後，使你的順劈提高+180%，持續3秒。
- 標準五實作 IV：Hitting at least 3 enemies with an attack, increases your cleave by +200% for 3 seconds.｜一次攻擊命中至少3個敵人後，使你的順劈提高+200%，持續3秒。
- 穿音速雙刀 I：Hitting at least 3 enemies with an attack, increases your cleave by +120% for 3 seconds.｜一次攻擊命中至少3個敵人後，使你的順劈提高+120%，持續3秒。
- 穿音速雙刀 II：Hitting at least 3 enemies with an attack, increases your cleave by +130% for 3 seconds.｜一次攻擊命中至少3個敵人後，使你的順劈提高+130%，持續3秒。
- 穿音速雙刀 III：Hitting at least 3 enemies with an attack, increases your cleave by +140% for 3 seconds.｜一次攻擊命中至少3個敵人後，使你的順劈提高+140%，持續3秒。
- 穿音速雙刀 IV：Hitting at least 3 enemies with an attack, increases your cleave by +150% for 3 seconds.｜一次攻擊命中至少3個敵人後，使你的順劈提高+150%，持續3秒。

各級重用相同句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱與文案 | 英文RAW為 Savage Sweep；繁中RAW為「野蠻橫掃」。名稱鍵 `loc_trait_bespoke_increased_attack_cleave_on_multiple_hits`，hash `82900835`。 | UI receipt以同一RAW資源與hash核對中英名稱。 | 名稱一致。 | 使用者名稱照RAW；沒有名稱勘誤。 |
| 描述與觸發門檻 | 同hash `16ef5b9c` 的RAW描述「Hitting at least {multiple_hit:%s} enemies with an attack...」／「一次攻擊命中至少{multiple_hit:%s}個敵人後...」。 | base 366–382為on_hit與required_num_hits=3；CheckProc 368–370及414–425要求melee且當前target_number≥3；721–727要求attacking_item.name相同。 | 描述文案省略 melee、同武器與 profile/on_hit gate。 | 程式條件較RAW明確；屬RAW未涵蓋，不將target_number說成先累積三次成功事件。 |
| tier格式及base fallback | 六份own formatter都以 percentage及`+`呈現cleave，階級值在root own-tier receipt中逐項核對。 | 六份own tier都覆寫 `stat_buffs.max_hit_mass_attack_modifier`；Buff._calculate_stat_buffs 689–733以trait同key覆寫template值，再依additive_multiplier加至中性值。 | 標準五實作+140/+160/+180/+200%；穿音速雙刀+120/+130/+140/+150%；替代base .5 fallback。 | formatter百分比反映攻擊側stat值，不是傷害；own tier不再加上base fallback。 |
| 生效與刷新 | RAW標示持續{time}秒。 | ProcBuff 78–104用 active_start_time+active_duration；304–355每個合格非local事件刷新active_start_time；PlayerUnitBuffExtension 131–145先update buff、後處理proc event、再更新stat cache。 | duration固定3秒、allow_proc_while_active=true且無cooldown；活動中可再觸發但不疊層。 | 目前掃擊在動作開始已快照max_hit_mass，新事件只在後續stat cache更新後供後續掃擊使用。 |
| 動作種類與例外 | RAW使用泛稱attack。 | ActionSweep 1475–1503送出melee/item/current num_hit_enemies；ActionPush 88–114與PushAttack 84–102為push；ActionSweep sticky tick 720–787傳target_number=1；Attack 550–623處理skip_on_hit_proc及damage type gates。 | 普通／重擊／push-follow／直接special sweep可依條件觸發；純push、toggle本身及sticky tick不符合。兩個鏈鋸家族另有sticky直接profile例外。 | 各實際action/profile與差異見coverage；不從武器名稱推定所有特殊攻擊都能觸發。 |
| 順劈數值結算 | RAW用cleave描述，不表示傷害。 | DamageProfile.max_hit_mass 36–80把attack與impact分開；ActionSweep 328–357取較大值；buff_settings 860及1048–1058證stat類型與中性值。 | 只乘近戰攻擊側max hit mass；衝擊側、傷害和目標數不直接增加。 | 有效穿透還受原始profile、目標質量與其他攻擊中止條件限制，不是無限順劈。 |
