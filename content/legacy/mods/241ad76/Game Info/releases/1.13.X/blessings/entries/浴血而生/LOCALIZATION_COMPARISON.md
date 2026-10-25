# 浴血而生：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_toughness_on_close_range_kills`／hash`22ea2fab`；描述鍵`loc_trait_bespoke_toughness_on_close_range_kills_desc`／hash`4e26a0b5`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Born in Blood／浴血而生。

- 文件名稱：浴血而生(Born in Blood)。

- 適用武器：撕裂槍、獵人霰彈槍、滅絕者霰彈槍；描述鍵`loc_trait_bespoke_toughness_on_close_range_kills_desc`／hash`4e26a0b5`。

- 英文模板：{toughness:%s} Toughness on Close Range Kill.

- 繁中模板：近戰攻擊擊殺{toughness:%s}韌性。

- **靜態重建**：formatter 使用各自 tier 的 toughness_fixed_percentage、percentage 格式及「+」前綴；三組武器的完整四級重建如下：

- **I**：EN `+4.5% Toughness on Close Range Kill.`；繁中「近戰攻擊擊殺+4.5%韌性。」

- **II**：EN `+5% Toughness on Close Range Kill.`；繁中「近戰攻擊擊殺+5%韌性。」

- **III**：EN `+5.5% Toughness on Close Range Kill.`；繁中「近戰攻擊擊殺+5.5%韌性。」

- **IV**：EN `+6% Toughness on Close Range Kill.`；繁中「近戰攻擊擊殺+6%韌性。」

- 重建保留 RAW 的「近戰攻擊」用語；其與遠程限定實作的矛盾另列勘誤；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 英文描述與攻擊種類 | RAW 描述鍵 loc_trait_bespoke_toughness_on_close_range_kills_desc/hash 4e26a0b5：“{toughness:%s} Toughness on Close Range Kill.” | base_weapon_trait_buff_templates.lua:1484與check_proc_functions.lua:306–318只接受ranged或count_as_ranged_attack死亡。 | 文件未涵蓋 | 英文沒有說明攻擊種類或12.5公尺界線；程式補足RAW省略規則。 |
| 繁中觸發用語 | 同一key/hash繁中RAW：「近戰攻擊擊殺{toughness:%s}韌性。」 | check_proc_functions.lua:311–314拒絕非ranged攻擊，且damage profile未標count_as_ranged_attack也不會通過。 | 明確矛盾 | 繁中明說近戰攻擊，實作限定遠程擊殺。 |
| 等級百分比顯示 | RAW placeholder `{toughness:%s}`；實際 formatter使用percentage及+ prefix。 | trait_value_parser.lua:8–20、77–111、190–227將.045/.05/.055/.06重建為+4.5%/+5%/+5.5%/+6%。 | 一致 | 四級占位符由各trait自己的等級覆寫填值。 |
| 回復基準與缺損上限 | 英文與繁中未寫最大韌性基準或缺損上限。 | shared_buff_functions.lua:20–26呼叫recover_percentage_toughness；player_unit_toughness_extension.lua:258–280乘max toughness並將缺損降至至少0。 | 文件未涵蓋 | 描述沒有交代最大韌性比例、略過回復修正或不會超過缺損。 |
| 2秒ProcBuff窗及重複觸發 | RAW沒有寫活躍窗口、冷卻或重複觸發規則。 | base template設active_duration=2、allow_proc_while_active=true、無cooldown；無冷卻時_can_activate返回true。 | 文件未涵蓋 | 兩秒不是持續回復或冷卻；RAW省略此互動。 |
| 特殊彈、切換與首次回復 | RAW 未列特殊彈後續傷害、持用及事件處理時序。 | shotgun_special_stun interval 以 buff 攻擊型別、無 count_as_ranged_attack 的 profile 結算；ProcBuff311–338 在持用及來源條件通過後直接呼叫韌性回復。 | 文件未涵蓋 | 直接遠程擊殺可觸發；Mk III 後續電擊不可。切換不會扣回已恢復韌性，2秒活躍不等於持續回復。 |
