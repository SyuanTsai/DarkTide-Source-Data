# 放血者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_bleed_on_activated_hit`／hash`08b71eb1`；描述鍵`loc_trait_bespoke_bleed_on_activated_hit_desc`／hash`09b1471a`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Bloodletter／放血者。

- 文件名稱：放血者(Bloodletter)。

- 適用武器：突擊鏈斧、重型開膛劍、突擊鏈鋸劍；描述鍵`loc_trait_bespoke_bleed_on_activated_hit_desc`／hash`09b1471a`。

- 英文模板：{stacks:%s} Bleed Stacks from Special Attacks.

- 繁中模板：特殊攻擊的流血層數{stacks:%s}。

- **靜態重建**：放血者含鏈斧、重型開膛劍、突擊鏈鋸劍三種tier values。保留RAW名稱/描述，並按profile flags、sticky入口與last profile說明實際觸發。Target bleed cap16、0.5秒tick、1.5秒後逐層衰減。I–IV依使用者指定，不由available_tiers null推定可取得性。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| RAW名稱與描述 | Bloodletter／放血者；name hash 08b71eb1、desc hash 09b1471a | localized_keys.json trait keys | 保留RAW與stack placeholder | tier值依variant分列。 |
| Variant tiers | chainaxe 10/12/14/16；2H chainsword 3/4/5/6；chainsword P1 11/12/13/14 | 三份trait literal refs | 各weapon_id獨立值 | 不可合併同tier值。 |
| Proc條件 | 同item、damage>0、melee、weapon_special、處理時仍held | base template及check helper refs | 程式一致 | 無crit/weakspot/kill gate。 |
| 普通sticky差異 | Mk III單次quick-last無標；Mk XV light首段有標、末段無標；Assault P1 inactive不進loop | ActionSweep／SweepStickyness／mark settings/profile refs | 看實際執行profile | 不能概稱普通sticky全觸發或全不觸發。 |
| Target bleed | cap16、interval0.5s、duration1.5s後每次移除1層 | weapon_buff_templates、interval_buff與BuffExtensionBase refs | 1.5秒是decay gate | 保留舊phase：8層5–5.5秒、16層9–9.5秒。 |
| DoT damage | 當前總層數smoothstep power後走bleeding profile | weapon_buff_templates:235–258; buff_damage_profile_templates:443–466 | 不能稱固定HP | power非生命比例。 |
| 切換和當擊 | queued proc時檢held；施加後status留在目標 | base template與BuffExtensionBase queue refs | 區分gate及target debuff | 切出不移除既有流血。 |
| RAW UI與交集 | family/pattern/mark三key；3 item、3 variants、6 bindings、0 exact unresolved/outside | localized_keys、inventory、remaining-tasks、metadata | 用Mk III當前key | metadata版本138291，SteamBuild未核實。 |
