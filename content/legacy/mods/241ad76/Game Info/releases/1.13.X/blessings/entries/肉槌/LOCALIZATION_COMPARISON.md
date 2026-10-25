# 肉槌：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_power_on_weapon_special_follow_up_hits`／hash`b746cc13`；描述鍵`loc_trait_bespoke_increased_melee_power_on_weapon_special_follow_up_hits_desc`／hash`efca1cdc`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Tenderiser／肉槌。

- 文件名稱：肉槌(Tenderiser)。

- 適用武器：砍刀；描述鍵`loc_trait_bespoke_increased_melee_power_on_weapon_special_follow_up_hits_desc`／hash`efca1cdc`。

- 英文模板：After hitting an enemy with your Weapon Special attack, your next melee attacks will have {power:%s} increased Melee Strength.

- 繁中模板：使用武器特殊攻擊命中敵人後，下一次近戰攻擊的近戰威力將提高{power:%s}。

- **靜態重建**：本項 formatter 從各級 melee_power_level_modifier override 取值，以 percentage 格式及 + 前綴代入 {power:%s}。

- **I**：EN：After hitting an enemy with your Weapon Special attack, your next melee attacks will have +15% increased Melee Strength.；繁中：使用武器特殊攻擊命中敵人後，下一次近戰攻擊的近戰威力將提高+15%。

- **II**：EN：After hitting an enemy with your Weapon Special attack, your next melee attacks will have +20% increased Melee Strength.；繁中：使用武器特殊攻擊命中敵人後，下一次近戰攻擊的近戰威力將提高+20%。

- **III**：EN：After hitting an enemy with your Weapon Special attack, your next melee attacks will have +25% increased Melee Strength.；繁中：使用武器特殊攻擊命中敵人後，下一次近戰攻擊的近戰威力將提高+25%。

- **IV**：EN：After hitting an enemy with your Weapon Special attack, your next melee attacks will have +30% increased Melee Strength.；繁中：使用武器特殊攻擊命中敵人後，下一次近戰攻擊的近戰威力將提高+30%。

以上為逐級靜態字串；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | EN Tenderiser／zh-TW 肉槌；name hash b746cc13、description hash efca1cdc。 | 固定RAW resource同key/hash配對。 | 一致 | Build 25606770 localization record逐筆確認。 |
| 特殊攻擊觸發 | RAW要求命中Weapon Special attack。 | 三個mark的uppercut均為melee sweep、使用weapon_special=true profile，另核對實際item。 | 一致 | 限三個實際型號和匹配武器item。 |
| 階級formatter | 描述只留{power:%s}。 | own tier .15/.20/.25/.30，formatter percentage與+ prefix顯示+15/+20/+25/+30%。 | 一致 | 按本項own formatter與tier重建。 |
| 下一次近戰攻擊的計數 | 英文 next melee attacks 為複數；繁中寫「下一次近戰攻擊」，兩語均未說明完整計數窗。 | 合格命中設4；觸發掃掠通常4→3，再按持用且啟用中的掃掠完成扣次，揮空也扣。 | 語意需釐清；文件未涵蓋 | 繁中容易讀成只加成下一擊；實際通常仍有三個後續掃掠，按動作結束而非目標數計數。 |
| 計數與持續 | RAW未列次數、掃掠結束、揮空、刷新或期限。 | 命中設4；held active sweep finish扣1，觸發掃掠通常4→3，miss也扣；合格再命中重設4，無TTL。 | 文件未涵蓋 | 程式計數單位是sweep finish，不是目標/命中數。 |
| 其他動作與效果階段 | RAW未列普通攻擊、pushfollow、純推擊及power consumers。 | ordinary/pushfollow melee sweeps可受益但不觸發；純push排除；damage/impact/cleave是中間輸入。 | 文件未涵蓋 | 最終傷害、踉蹌及順劈數受profile與曲線影響。 |
