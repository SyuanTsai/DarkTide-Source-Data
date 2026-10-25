# 虹吸：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_regain_toughness_on_multiple_hits_by_weapon_special`／hash`bcf9c4be`；描述鍵`loc_trait_bespoke_regain_toughness_on_multiple_hits_by_weapon_special_desc`／hash`48405bf1`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Syphon／虹吸。

- 文件名稱：虹吸(Syphon)。

- 適用武器：上古神刃；描述鍵`loc_trait_bespoke_regain_toughness_on_multiple_hits_by_weapon_special_desc`／hash`48405bf1`。

- 英文模板：Hitting at least 3 enemies with an attack while weapon Special is active, regains {toughness:%s} Toughness.

- 繁中模板：在武器特殊能力啟用時一次攻擊命中至少3個敵人後，恢復{toughness:%s}韌性。

- **靜態重建**：formatter 對 `toughness` 讀取 tier override `toughness_fixed_percentage`；`format_type="percentage"` 將小數乘 100，`prefix="+"` 再加正號。完整四級句子如下。

- **I**：EN `Hitting at least 3 enemies with an attack while weapon Special is active, regains +10% Toughness.`；繁中「在武器特殊能力啟用時一次攻擊命中至少3個敵人後，恢復+10%韌性。」

- **II**：EN `Hitting at least 3 enemies with an attack while weapon Special is active, regains +12% Toughness.`；繁中「在武器特殊能力啟用時一次攻擊命中至少3個敵人後，恢復+12%韌性。」

- **III**：EN `Hitting at least 3 enemies with an attack while weapon Special is active, regains +14% Toughness.`；繁中「在武器特殊能力啟用時一次攻擊命中至少3個敵人後，恢復+14%韌性。」

- **IV**：EN `Hitting at least 3 enemies with an attack while weapon Special is active, regains +16% Toughness.`；繁中「在武器特殊能力啟用時一次攻擊命中至少3個敵人後，恢復+16%韌性。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | 名稱鍵 `loc_trait_bespoke_regain_toughness_on_multiple_hits_by_weapon_special`／hash `bcf9c4be`：EN `Syphon`；ZH `虹吸`。 | MasterItems trait限制powersword_2h_p1；Items315–327／378–426；兩Mark實際匯入及traits append由UI回條逐筆驗證。 兩筆 inventory binding 使用相同 name_key；實際完整 trait ID 保留重複 bespoke。 | 一致 | 同一 RAW 資源內中英文名稱及 hash 相同。 |
| 觸發描述 | 描述鍵 loc_trait_bespoke_regain_toughness_on_multiple_hits_by_weapon_special_desc／hash48405bf1；描述鍵 `loc_trait_bespoke_regain_toughness_on_multiple_hits_by_weapon_special_desc`／hash `48405bf1`；EN `Hitting at least 3 enemies with an attack while weapon Special is active, regains {toughness:%s} Toughness.`；ZH `在武器特殊能力啟用時一次攻擊命中至少3個敵人後，恢復{toughness:%s}韌性。`。 | ActionSweep207–298／1330–1425／1475–1501；CheckProc368–425；ownwrapper252–312。 ActionSweep on_sweep_start 將 special_active 傳入 wrapper；當前合格 on_hit 要求 item match、melee type 與 payload target_number>=3。 | 文件未涵蓋 | RAW沒有說明target_number序號語意、橫掃去重或on_hit派送限制；實作不要求前兩個序號各自送出合格on_hit，也不據此聲稱必須造成三次正傷。 |
| 等級恢復比例 | 描述鍵 loc_trait_bespoke_regain_toughness_on_multiple_hits_by_weapon_special_desc／hash48405bf1；同一描述 placeholder `{toughness:%s}`，每級由實際 trait override 提供。 | owntrait423–464；ownwrapper304–309；TraitValueParser8–20／77–117。 formatter percentage ×100 並加 `+`；own tier 0.10/0.12/0.14/0.16 取代 wrapper fallback 0.15。 | 一致 | 靜態重建四級為+10/+12/+14/+16% Toughness/韌性。 |
| 恢復基數與上限 | 描述鍵 loc_trait_bespoke_regain_toughness_on_multiple_hits_by_weapon_special_desc／hash48405bf1；RAW未註明百分比基數、缺額封頂或禁恢復狀態。 | PlayerUnitToughnessExtension253–280／447–474；ownwrapper294–309。 recover_percentage_toughness(fixed_percentage,true)：請求=呼叫當下max_toughness×tier值；略過stat replenish multiplier，但實際最多回復目前缺額且受disabled gate；倒地有force_assist例外。 | 文件未涵蓋 | 將玩家值寫成最大韌性比例，並明示缺額封頂。 |
| 觸發次數與動作 | 描述鍵 loc_trait_bespoke_regain_toughness_on_multiple_hits_by_weapon_special_desc／hash48405bf1；RAW只說一次攻擊命中至少3個敵人且特殊能力啟用。 | ownwrapper267–291；M1action285–1821、M2action282–1974；toggleexecutor15–51、withblock16–47。 同一橫掃至多一次：當前合格 on_hit 的 target_number達3後，wrapper先將can_activate=false，再呼叫恢復；即使滿韌性或狀態門檻拒絕恢復，也不會同一橫掃重試。新橫掃重新讀special flag。普通推擊是push，推擊後action_pushfollow是sweep；特殊鍵切換本身不觸發。 | 文件未涵蓋 | RAW未列一橫掃限定、target_number計數方式、推擊型別或切換鍵本身不觸發；這些屬未涵蓋細節。 |
