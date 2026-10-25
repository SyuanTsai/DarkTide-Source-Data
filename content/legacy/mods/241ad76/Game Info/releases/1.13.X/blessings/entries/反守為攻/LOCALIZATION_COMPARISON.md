# 反守為攻：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_damage_bonus_on_block`／hash`a2a3e589`；描述鍵`loc_trait_damage_bonus_on_block_desc`／hash`62809d8e`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Offensive Defence／反守為攻。

- 文件名稱：反守為攻(Offensive Defence)。

- 適用武器：作戰大錘&板盾、法務官電擊鎚和鎮壓護盾；描述鍵`loc_trait_damage_bonus_on_block_desc`／hash`62809d8e`。

- 英文模板：Gain a stack for each stamina spent blocking. Your next melee attack gains {power:%s} strength per stack and consumes one stack. Last {duration:%s}s. Stacks {stacks:%s} times.

- 繁中模板：每消耗一點耐力格檔就會獲得一層效果。下一次攻擊每層可增加{power:%s}的近戰威力，並消耗一層效果，持續{duration:%s}秒，可疊加{stacks:%s}層。

- **靜態重建**：以下保留英文與繁中原句，僅把固定 RAW description key `loc_trait_damage_bonus_on_block_desc` 的 I–IV formatter placeholder 代入。`power` 格式使用正號百分比；`duration=3.5`，`stacks=5`。

- **I** — EN: `Gain a stack for each stamina spent blocking. Your next melee attack gains +4% strength per stack and consumes one stack. Last 3.5s. Stacks 5 times.`；ZH: `每消耗一點耐力格檔就會獲得一層效果。下一次攻擊每層可增加+4%的近戰威力，並消耗一層效果，持續3.5秒，可疊加5層。`
- **II** — EN: `Gain a stack for each stamina spent blocking. Your next melee attack gains +6% strength per stack and consumes one stack. Last 3.5s. Stacks 5 times.`；ZH: `每消耗一點耐力格檔就會獲得一層效果。下一次攻擊每層可增加+6%的近戰威力，並消耗一層效果，持續3.5秒，可疊加5層。`
- **III** — EN: `Gain a stack for each stamina spent blocking. Your next melee attack gains +8% strength per stack and consumes one stack. Last 3.5s. Stacks 5 times.`；ZH: `每消耗一點耐力格檔就會獲得一層效果。下一次攻擊每層可增加+8%的近戰威力，並消耗一層效果，持續3.5秒，可疊加5層。`
- **IV** — EN: `Gain a stack for each stamina spent blocking. Your next melee attack gains +10% strength per stack and consumes one stack. Last 3.5s. Stacks 5 times.`；ZH: `每消耗一點耐力格檔就會獲得一層效果。下一次攻擊每層可增加+10%的近戰威力，並消耗一層效果，持續3.5秒，可疊加5層。`

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 每消耗一點耐力格檔就會獲得一層 | EN `Gain a stack for each stamina spent blocking.`／ZH `每消耗一點耐力格檔就會獲得一層效果。`；`loc_trait_damage_bonus_on_block_desc`，hash `62809d8e`。 | scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1_buff_templates.lua:41–53 與 scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua:41–53 的 specific_proc_func.on_block 累積 params.block_cost 並計算層數；scripts/utilities/attack/block.lua:206–235 的 Block.attempt_block_break 轉送原值；scripts/utilities/attack/stamina.lua:14–41 的 Stamina.drain 另乘倍率並截斷耐力。 | 明確矛盾（層數對應） | 在 T=0、事件 block_cost=1 時公式得 k=2；不是每一點一層。耐力條實扣還可能與原始事件參數不同。 |
| I–IV 每層近戰威力百分比 | RAW 同 key/hash `62809d8e`；EN/ZH formatter 顯示 +4/+6/+8/+10%。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1.lua:282–341 與 scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua:203–262 定義每層modifier及formatter；scripts/extension_systems/buff/buffs/buff.lua:145–184 傳遞相同stat key；scripts/utilities/attack/power_level.lua:25–60 的 PowerLevel.power_level_buff_modifier 僅在 attack_type=melee 讀取。 | 符合（formatter與威力池數值）；文件未涵蓋（最終生命傷害） | formatter值與每層modifier相符；這是 PowerLevel pool，不直接等同最終生命傷害百分比。 |
| 下一次近戰攻擊消耗一層 | RAW `Your next melee attack ... consumes one stack.`／ZH `下一次攻擊...並消耗一層效果`；同 key/hash。 | scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1_buff_templates.lua:55–62 與 scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua:55–62 的 specific_proc_func.on_sweep_finish 扣一層；scripts/extension_systems/weapon/actions/action_sweep.lua:944–964 的 ActionSweep._handle_exit_procs 發事件，:402–435、:529–537 限定傷害窗已開始的結束路徑。 | 文件未涵蓋 | 消耗時點是掃掠完成事件，不是逐次命中；傷害窗內揮空仍會消耗，純 ActionPush 不會。 |
| 3.5秒期限與5層上限 | RAW formatter `Last {duration:%s}s. Stacks {stacks:%s} times.`／ZH `持續{duration:%s}秒，可疊加{stacks:%s}層。`；同 key/hash。 | scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1_buff_templates.lua:24–75 與 scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua:24–75 設 child_duration=3.5、max_stacks=5；scripts/extension_systems/buff/buffs/weapon_trait_target_number_parent_proc_buff.lua:7–88 的 TargetNumberParentProcBuff 共享計時並清有效層，:19–39 保留父層計數。 | 符合（3.5秒／5層值）；文件未涵蓋（刷新與殘留計數） | 數字吻合；格擋及掃掠完成事件都刷新同一時鐘，嚴格逾時清層但不清T。 |
| 格擋、特殊格擋、推擊與切槽條件 | RAW說格擋／近戰攻擊；沒有描述 item held、accepted block、各型號特殊窗口或掃掠事件。 | scripts/utilities/attack/block.lua:32–101、130–161、206–235；scripts/settings/equipment/weapon_templates/ogryn_powermaul_slabshield/ogryn_powermaul_slabshield_p1_m1.lua:1192–1240 與 _m2.lua:848–896（實際 kind=block、零成本）；scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua:1265–1327 與 _m2.lua:1474–1536（實際 release kind=weapon_shout、未設 attack_type）；scripts/extension_systems/weapon/actions/action_weapon_shout.lua:200–219（_collect_targets 讀 action_settings.attack_type）、:163–197（_update_shout 傳入 Attack.execute）；scripts/utilities/attack/attack.lua:151–165（attack_type 預設 nil）；scripts/utilities/attack/power_level.lua:25–60（僅 melee 讀取 melee modifier）；scripts/extension_systems/weapon/player_unit_weapon_extension.lua:743–785（切槽）與 :652–681（真正卸下）；scripts/settings/equipment/weapon_templates/ogryn_powermaul_slabshield/ogryn_powermaul_slabshield_p1_m1.lua:1289–1370 與 _m2.lua:945–1030 的普通推擊0.5秒格擋窗；scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua:1037–1177 與 _m2.lua:1246–1386 的普通推擊0.4秒格擋窗 | 文件未涵蓋 | 板盾 special 是零成本格擋；鎮壓護盾 release 是 nil attack_type 的 weapon_shout，因此不讀 melee 威力修正、不送 on_sweep_finish，但0.4秒格擋窗口接住來襲攻擊時仍可送 on_block。普通 ActionPush 本身不觸發 sweep-finish，但板盾 M1/M2 保留0.5秒、鎮壓護盾 M1/M2 保留0.4秒來襲格擋窗口；窗口內成功格擋仍可 on_block，推擊後追擊才是 sweep。切槽保留裝備 buff但 held 條件關閉，真正卸下才移除。 |
