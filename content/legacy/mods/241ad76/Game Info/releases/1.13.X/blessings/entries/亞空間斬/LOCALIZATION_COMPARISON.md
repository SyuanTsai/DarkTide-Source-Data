# 亞空間斬：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_wind_slash_crits`／hash`d4193c5e`；描述鍵`loc_trait_bespoke_wind_slash_crits_desc`／hash`680b3be3`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Warp Slice／亞空間斬。

- 文件名稱：亞空間斬(Warp Slice)。

- 適用武器：烈焰力場巨劍；描述鍵`loc_trait_bespoke_wind_slash_crits_desc`／hash`680b3be3`。

- 英文模板：Guaranteed Activated Critical Strike. {cooldown:%s}s Cooldown.

- 繁中模板：攻擊必定造成暴擊。冷卻時間{cooldown:%s}秒。

- **靜態重建**：依 `format_type = number` 將四級 override 直接代入 RAW 的 `{cooldown:%s}`；句型中的 `s` 與「秒」分別保留英文及繁中秒數標示。

| 等級 | 英文（locale 0） | 繁中（locale 16） |
|---|---|---|
| I | Guaranteed Activated Critical Strike. 30s Cooldown. | 攻擊必定造成暴擊。冷卻時間30秒。 |
| II | Guaranteed Activated Critical Strike. 25s Cooldown. | 攻擊必定造成暴擊。冷卻時間25秒。 |
| III | Guaranteed Activated Critical Strike. 20s Cooldown. | 攻擊必定造成暴擊。冷卻時間20秒。 |
| IV | Guaranteed Activated Critical Strike. 15s Cooldown. | 攻擊必定造成暴擊。冷卻時間15秒。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發事件與冷卻 | RAW 英文：「Guaranteed Activated Critical Strike. {cooldown:%s}s Cooldown.」；RAW 繁中：「攻擊必定造成暴擊。冷卻時間{cooldown:%s}秒。」；key loc_trait_bespoke_wind_slash_crits_desc、hash 680b3be3；RAW 未列事件後的 context 更新時點。 | ActionSweep.start（scripts/extension_systems/weapon/actions/action_sweep.lua:207–300）送出 special_active；ProcBuff.update_proc_events（scripts/extension_systems/buff/buffs/proc_buff.lua:334–355）只記 _active_start_time；ProcBuff.update（同檔:197–208）才依冷卻刷新 template_context.active；PlayerUnitBuffExtension.fixed_update（scripts/extension_systems/buff/player_unit_buff_extension.lua:131–145）之後重建 cache。 | 文件未涵蓋 | 觸發冷卻與移除就緒關鍵字不同步；需後續 Buff 更新與 cache 重建，避免把事件尾端舊快取誤當即時移除。 |
| 四級冷卻值 | RAW cooldown 佔位符 {cooldown:%s}；同 key/hash 的英文與繁中描述如上。 | TraitValueParser.trait_description（scripts/utilities/trait_value_parser.lua:65–72）呼叫 _try_format_values（同檔:77–121）；trait_override lookup（同檔:51–55）讀 tier 值，FORMATTING_FUNCTIONS.number（同檔:22–32）與 _number_value_formatter（同檔:189–228）輸出秒數。 | 符合 | number formatter 將整數秒數代入；英文保留 s，繁中保留秒。 |
| 暴擊判定範圍 | RAW 英文與繁中均稱攻擊必定造成暴擊；未指定風斬效果或快取時點。 | _forcesword_wind_slash_effect_generator_func.start_func（scripts/settings/buff/force_sword_2h_p1_buff_templates.lua:262–300）讀取一般暴擊狀態或 keyword cache 並保存旗標；RangedAction.execute_attack（scripts/utilities/action/ranged_action.lua:22–29）傳遞保存值。 | 文件未涵蓋 | 保證暴擊只作用於實際風斬效果建立時保存的判定，不應擴成普通近戰攻擊。 |
| 掃掠型號與特殊模式 | RAW description 未列武器、型號或特殊模式條件。 | BaseWeaponTraitBuffTemplates.wind_slash_crits（scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:2332–2350）使用掃掠事件與 special-active check；ActionSweep.start（scripts/extension_systems/weapon/actions/action_sweep.lua:207–300）提供事件；Force Sword trigger（scripts/settings/buff/force_sword_2h_p1_buff_templates.lua:224–260）建立 native effect。 | 文件未涵蓋 | RAW 未列型號/模式；實際接線只覆蓋兩個 bound Mark，風斬消費另有持用條件。 |
| 切槽、取消、推擊與額外動作 | RAW description 未描述切槽、取消、純推擊或投射物。 | Weapon._init_traits（scripts/extension_systems/weapon/weapon.lua:26–82）與 weapon_tweak_templates（scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua:155–211）把 trait Buff 放入 on_equip；M1 實際 trait 匯入（scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua:2793–2803）；PlayerUnitWeaponExtension（scripts/extension_systems/weapon/player_unit_weapon_extension.lua:633–692、780–785）處理槽位；ActionSweep.start（scripts/extension_systems/weapon/actions/action_sweep.lua:207–300）是事件來源。 | 文件未涵蓋 | on_equip Buff 不以 held 為條件；只有實際 ActionSweep 且 payload special_active=true 才符合，純 push/target/damage action 不送此事件。 |
