# 行刑者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_chained_weakspot_hits_increases_power`／hash`dd9dc2c9`；描述鍵`loc_trait_bespoke_chained_weakspot_hits_increases_power_desc`／hash`46b9cfe2`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Executor／行刑者。

- 文件名稱：行刑者(Executor)。

- 適用武器：戰刃、短刀、烈焰力場劍；描述鍵`loc_trait_bespoke_chained_weakspot_hits_increases_power_desc`／hash`46b9cfe2`。

- 英文模板：{power_level:%s} Strength on Repeated Weak Spot Hit. Stacks {stacks:%s} times.

- 繁中模板：重複命中弱點時威力提升{power_level:%s}，可疊加{stacks:%s}層。

- **靜態重建**：本體原始資源 content/localization/items：loc_trait_bespoke_chained_weakspot_hits_increases_power，EN「Executor」、zh-TW「行刑者」，hash dd9dc2c9；description key loc_trait_bespoke_chained_weakspot_hits_increases_power_desc，EN「{power_level:%s} Strength on Repeated Weak Spot Hit. Stacks {stacks:%s} times.」、zh-TW「重複命中弱點時威力提升{power_level:%s}，可疊加{stacks:%s}層。」、hash 46b9cfe2。三個 metadata-backed trait item 使用相同 name/description keys 與 icon 030。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發與首次生效 | RAW為「Strength on Repeated Weak Spot Hit／重複命中弱點時威力提升」。 | [共用 on_hit/add-child gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L228-L257)；[事件排隊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L50-L76) | 文件未涵蓋 | 程式第一個合格的近戰弱點命中即增加一層；描述沒有說明先前是否必須已有一層。 |
| I–IV數值與上限 | RAW以 power_level 與 stacks 占位，未直接寫出各級數字。 | [三變體tier覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L115-L139)；[child上限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L263-L273) | 一致 | 三變體均為每層4.5%／5%／5.5%／6%，有效上限5層。 |
| 連擊重置 | 本體未說明非弱點命中如何影響既有層數。 | [active_proc_func](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L240-L257) | 文件未涵蓋 | 第一個目標的非弱點近戰命中移除有效層；後續目標的非弱點命中不清層。 |
| 刷新與消退 | 本體未列持續時間。 | [共同期限與刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L220-L230)；[逾期移除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L123) | 文件未涵蓋 | 新弱點命中刷新2.5秒共同期限；到期由一次移除5層的設定清除有效層。 |
| 同次揮擊多目標 | 本體稱重複弱點命中，但未說明一記揮擊命中多名敵人時如何計數。 | [每目標 Attack.execute](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1499)；[on_hit事件資料與可選去重表](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L623) | 文件未涵蓋 | ActionSweep逐目標呼叫且此呼叫未提供去重表；每個合格弱點目標各可增加一層。 |
| 特殊攻擊適用 | 本體只泛稱弱點命中，沒有逐類說明特殊攻擊。 | [戰刃 jab 為 sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L881-L951)；[雙短刀投擲](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1096-L1105)；[投射物按 ranged 執行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L485-L540) | 文件未涵蓋 | Special 不是單一類別：melee sweep 弱點命中可觸發，雙短刀投擲及 ActionDamageTarget 的 ranged 路徑不符合 melee gate。 |
| 威力與最終傷害 | RAW寫 Strength／威力，沒有聲稱最終生命傷害增加相同比例。 | [stat類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L925-L928)；[威力修正套用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L60)；[曲線後套用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91) | 一致 | stat是 additive_multiplier 的 power_level_modifier；後續仍經 DamageProfile、目標與護甲結算。 |
| 持用與切換 | 本體未說明換出武器時的效果。 | [proc與stat持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L259-L273) | 文件未涵蓋 | 切出時條件失效並暫停加成；裝備父層仍在，期限繼續，未逾期切回可恢復剩餘層數。 |
| 滿層觸發是否刷新 | 本體稱最多疊加五層。 | [wanted stack與零新增呼叫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L61-L76)；[零層 helper 仍重設timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L163) | 文件未涵蓋 | 滿層合格弱點命中不增層，但仍刷新2.5秒期限。 |
| 黏附每段計數 | 本體未列力場劍黏附的多段觸發。 | [每段melee命中](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L739-L809) | 文件未涵蓋 | M1/M2每段弱點命中可各加層，身體段清層；M3無黏附設定。 |
| 投擲受益快照 | 本體未說明投擲沿用既有威力的取樣時點。 | [生成時Buff快照](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/unit_templates/item_projectile_unit_template.lua#L79-L92)；[開始動作時先生成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L119-L143) | 文件未涵蓋 | 短刀開始投擲建立飛刀時複製既有威力，命中不加層/清層/刷新。 |
