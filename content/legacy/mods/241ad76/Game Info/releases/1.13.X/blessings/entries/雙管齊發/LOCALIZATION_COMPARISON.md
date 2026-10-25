# 雙管齊發：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_reload_speed_on_ranged_weapon_special_kill`／hash`5ea2e09a`；描述鍵`loc_trait_bespoke_reload_speed_on_ranged_weapon_special_kill_desc`／hash`8c79e8c3`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Both Barrels／雙管齊發。

- 文件名稱：雙管齊發(Both Barrels)。

- 適用武器：雙管霰彈槍；描述鍵`loc_trait_bespoke_reload_speed_on_ranged_weapon_special_kill_desc`／hash`8c79e8c3`。

- 英文模板：Killing an enemy by firing both barrels makes your next Reload {reload_speed:%s} faster.

- 繁中模板：以雙管開火擊殺一名敵人，能使你下一次的換彈速度加快{reload_speed:%s}。

- **靜態重建**：RAW描述 key／hash `loc_trait_bespoke_reload_speed_on_ranged_weapon_special_kill_desc`／`8c79e8c3`；formatter將 tier 值乘100、加 `+` 前綴並輸出百分比。

| 等級 | English | 繁體中文 |
|---|---|---|
| I | Killing an enemy by firing both barrels makes your next Reload +40% faster. | 以雙管開火擊殺一名敵人，能使你下一次的換彈速度加快+40%。 |
| II | Killing an enemy by firing both barrels makes your next Reload +50% faster. | 以雙管開火擊殺一名敵人，能使你下一次的換彈速度加快+50%。 |
| III | Killing an enemy by firing both barrels makes your next Reload +60% faster. | 以雙管開火擊殺一名敵人，能使你下一次的換彈速度加快+60%。 |
| IV | Killing an enemy by firing both barrels makes your next Reload +70% faster. | 以雙管開火擊殺一名敵人，能使你下一次的換彈速度加快+70%。 |；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | 名稱鍵 loc_trait_bespoke_reload_speed_on_ranged_weapon_special_kill／hash5ea2e09a：EN Both Barrels；繁中雙管齊發。 | 同資源RAW中英名稱配對；Items315–327／378–426與兩Mark實際binding／restriction同UI回條。 | 一致 | 文件沿用同hash繁中名稱，不將射擊模式名稱當另一個祝福。 |
| 觸發事件 | 描述鍵 loc_trait_bespoke_reload_speed_on_ranged_weapon_special_kill_desc／hash8c79e8c3；EN “Killing an enemy by firing both barrels”／ZH「以雙管開火擊殺一名敵人」；hash 8c79e8c3。 | CheckProc216–224；ownparent45–83；ActionHandler266–329；ActionShoot185–194；Pellets824–849／setter1149–1246。 死亡結果且為 ranged/count_as_ranged_attack；queued on_kill 處理時 special_active_at_start 必須仍為 true。 | 文件未涵蓋 | 原文未說明攻擊分類與處理時快照；實際雙發模式依兩個型號模板。 |
| 等級與速度方向 | 描述鍵 loc_trait_bespoke_reload_speed_on_ranged_weapon_special_kill_desc／hash8c79e8c3；EN {reload_speed:%s} faster；ZH「換彈速度加快{reload_speed:%s}」；四級 +40/+50/+60/+70%。 | owntrait576–617；ownparentconditional53–55／77–82；Buff689–747；ActionHandler393–427。 formatter percentage prefix +；conditional reload_speed .4/.5/.6/.7。 | 一致 | 速度倍率為1+p，不能寫成同額時間縮短。 |
| 型號射擊模式 | 描述鍵 loc_trait_bespoke_reload_speed_on_ranged_weapon_special_kill_desc／hash8c79e8c3；RAW只寫 firing both barrels，未標示Mark模式。 | M1 action307–510與M3 action307–506；actualshell198–225／478–505。 十字星 Mk XI 雙發為舉鏡；克魯克 Mk IV 為腰射；另一種模式普通單發。 | 文件未涵蓋 | 這是兩份實際 weapon template 的差異，非翻譯矛盾。 |
| 消耗時點 | 描述鍵 loc_trait_bespoke_reload_speed_on_ranged_weapon_special_kill_desc／hash8c79e8c3；RAW稱 next Reload，未說明事件。 | ownchild84–115；ActionReloadState24–124；DoubleBarrelReload11–77。 child監聽on_reload；reload_state於refill_ammunition功能點發事件；effect留到reload action離開。 | 文件未涵蓋 | 補彈前中斷保留；單純上槍機不消耗。 |
| 期限與切換 | 描述鍵 loc_trait_bespoke_reload_speed_on_ranged_weapon_special_kill_desc／hash8c79e8c3；RAW未描述TTL、held slot或snapshot。 | WeaponTweakTemplates168–210；PlayerUnitWeaponExtension633–693／743–785；ownparent45–83與child84–115。 child無固定duration；on-equip parent跨普通wield switch；proc callback無held/item gate但讀live snapshot。 | 文件未涵蓋 | 沒有已證明反例可判作RAW矛盾；不推廣至未驗證其他武器。 |
