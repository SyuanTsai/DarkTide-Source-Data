# 火藥灼傷：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_recoil_reduction_and_suppression_increase_on_close_kills`／hash`f5213560`；描述鍵`loc_trait_bespoke_recoil_reduction_and_suppression_increase_on_close_kills_desc`／hash`1f3f3ad2`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Powderburn／火藥灼傷。

- 文件名稱：火藥灼傷(Powderburn)。

- 適用武器：撕裂者自動手槍、雙持自動手槍、磷光爆破手槍、滅絕者霰彈槍；描述鍵`loc_trait_bespoke_recoil_reduction_and_suppression_increase_on_close_kills_desc`／hash`1f3f3ad2`。

- 英文模板：{damage:%s} Damage against Suppressed Enemies, {suppression:%s} Suppression and {recoil_reduction:%s} Recoil on Close Range Kill.

- 繁中模板：對被壓制的敵人造成的傷害增加{damage:%s}，近戰擊殺後壓制增加{suppression:%s}，後坐力減少{recoil_reduction:%s}。

- **靜態重建**：固定 RAW 模板按各級 own formatter 靜態重建如下：
- I：EN `+14% Damage against Suppressed Enemies, +28% Suppression and -28% Recoil on Close Range Kill.`；繁中 `對被壓制的敵人造成的傷害增加+14%，近戰擊殺後壓制增加+28%，後坐力減少-28%。`
- II：EN `+16% Damage against Suppressed Enemies, +32% Suppression and -32% Recoil on Close Range Kill.`；繁中 `對被壓制的敵人造成的傷害增加+16%，近戰擊殺後壓制增加+32%，後坐力減少-32%。`
- III：EN `+18% Damage against Suppressed Enemies, +36% Suppression and -36% Recoil on Close Range Kill.`；繁中 `對被壓制的敵人造成的傷害增加+18%，近戰擊殺後壓制增加+36%，後坐力減少-36%。`
- IV：EN `+20% Damage against Suppressed Enemies, +40% Suppression and -40% Recoil on Close Range Kill.`；繁中 `對被壓制的敵人造成的傷害增加+20%，近戰擊殺後壓制增加+40%，後坐力減少-40%。`
各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發結果與距離 | 英文 RAW：`{damage:%s} Damage against Suppressed Enemies, {suppression:%s} Suppression and {recoil_reduction:%s} Recoil on Close Range Kill.`；繁中 RAW：`對被壓制的敵人造成的傷害增加{damage:%s}，近戰擊殺後壓制增加{suppression:%s}，後坐力減少{recoil_reduction:%s}。`；描述鍵 `loc_trait_bespoke_recoil_reduction_and_suppression_increase_on_close_kills_desc`／hash `1f3f3ad2`。 | `check_proc_functions.on_ranged_close_kill`（scripts/settings/buff/helper_functions/check_proc_functions.lua:306–318）要求 attack_result 為 died，且 attack_type 為 ranged 或 DamageProfile 有 count_as_ranged_attack；close 範圍由同檔:777–791 與 damage_settings.lua:14–24 判斷。 | 繁中「近戰擊殺」與實際允許條件矛盾；英文 Close Range Kill 未列出攻擊類型，屬文件未涵蓋。 | 實際五個 Mark 的直接射擊為遠程；已核到的近戰揮擊、背爆與燃燒 tick 不會代替遠程直接攻擊通過該 gate。 |
| 近距離、物品與持用 | 同一 RAW 描述鍵 `loc_trait_bespoke_recoil_reduction_and_suppression_increase_on_close_kills_desc`／hash `1f3f3ad2`。 | `base_weapon_trait_buff_templates.recoil_reduction_and_suppression_increase_on_close_kills`（scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1638–1654）同時掛 on_item_match、on_ranged_close_kill 及 proc/stat held-slot 條件；位置門檻見 DamageSettings。 | 文件未涵蓋物品匹配、持用槽與 12.5 公尺門檻。 | 事件命中位置缺失不通過；以事件處理時攻擊者位置比較，平方距離 ≤156.25 m²，包含邊界；MELEE_RANGE 8m 是不同設定。 |
| 等級與 formatter | 英文／繁中 RAW 共用同一三欄模板；見 `loc_trait_bespoke_recoil_reduction_and_suppression_increase_on_close_kills_desc`／hash `1f3f3ad2`。 | 四個 own tier 檔和 `TraitValueParser`（scripts/utilities/trait_value_parser.lua:7–21、77–117、189–228）按精確 tier 代入；recoil signed percentage 無 abs/value manipulation/prefix，另兩欄 own formatter 有正號前綴。 | 實作值可依 formatter 靜態重建；繁中負號與擊殺類型兩處為真矛盾。 | RAW 省略的持用與距離條件是文件未涵蓋；recoil 的 `減少-28%` 保留原文重建，不據此說明實際後坐力反而增加。 |
| 啟動、刷新與屬性套用 | RAW 描述了擊殺後效果，但沒有說明 2 秒刷新與持用欄位。 | ProcBuff 與通用生命週期來源：proc_buff.lua:78–104、173–195、304–355、288–300；weapon_unwield/equip 來源見 player_unit_weapon_extension.lua:633–693、743–785。 | 文件未涵蓋刷新、無層數、切出時 timer 延續及卸下。 | 本項 own wrapper 明確 2 秒、allow_proc_while_active 且無 cooldown；stats 受 held gate。有效屬性依後續正常 stat/cache 更新採用，不回溯已結算攻擊。 |
| 傷害／壓制／後坐力效果範圍 | RAW：`{damage:%s} Damage against Suppressed Enemies, {suppression:%s} Suppression and {recoil_reduction:%s} Recoil on Close Range Kill.`；繁中：`對被壓制的敵人造成的傷害增加{damage:%s}，近戰擊殺後壓制增加{suppression:%s}，後坐力減少{recoil_reduction:%s}。`。 | `damage_calculation`（scripts/utilities/attack/damage_calculation.lua:442–450）只在目標已被判為 suppressed 時計入 damage_vs_suppressed；suppression/recoil 消費及 own tier 見四個 trait 與 wrapper source blocks。 | RAW 未量化各屬性的實際 consumer；它未聲稱背爆本身必定產生生命值傷害，因此此 profile 數值邊界不是 RAW 矛盾。 | 通用 damage_vs_suppressed 雖會被取樣，但磷光背爆 attack power=0 且最低傷害為0，該項加算不能創造背爆生命值傷害；獨立 buff tick profile attack power=20，符合目標已被壓制、效果啟動及仍持用時才可受益。PowerLevel 輸入不等於最終 HP 百分比。 |
