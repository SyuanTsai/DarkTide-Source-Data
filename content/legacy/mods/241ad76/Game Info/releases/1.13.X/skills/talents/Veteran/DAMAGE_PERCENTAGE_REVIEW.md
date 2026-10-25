# 老兵天賦：百分比描述盤點

[English](en/DAMAGE_PERCENTAGE_REVIEW.md)

[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)｜[描述規則](../../../../../../AI Prompt/Skill-Info-Workflow.md)

- 固定來源 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`，沿用 Release 1.13.1 文件範圍。
- 範圍：逐項閱讀77個目前節點的玩家效果、目錄與算例，檢查百分比作用對象、比較分母、加算／乘算、武器差異、速度／時間及恢復基準。另重讀下列10項相關的共用結算與增益實作。
- 結果：6項額外傷害描述補強，4項相鄰的威力／撕裂描述補強；其餘67項未發現本次同類表達問題，保留既有說明。這不是77項機制全部重新逆向，也不是遊戲內測試。
- 沒有指定武器型號、攻擊／蓄力方式與測試目標，因此不判定盧修斯固定增加15%，也不判定所有自動槍都更高。

## 共用計算依據

- 弱點／暴擊先算額外傷害F，再把適用加成相加後乘入，最後加回基礎部分B。原有加成s、新增a時，比較 `B + F × (1 + s)` 與 `B + F × (1 + s + a)`；增幅為 `a × F ÷ [B + F × (1 + s)]`。這是該階段的比例；比較前後其餘條件及後續流程需保持一致，且原值須大於零。
- B和F使用同一次命中的護甲、部位、武器傷害設定、暴擊及其他攻擊條件；不能把身體傷害直接視為弱點命中的B。姿態的一般遠程增傷會先影響上游，分項例不能冒充完整能力結果。
- 威力影響輸入及傷害曲線；撕裂修正護甲倍率。兩者都不能直接套用只增加F的公式。

- [傷害結算順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L109)
- [額外傷害與同階段加成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [威力加成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L26-L91)
- [護甲與撕裂](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L95)
- [護甲類型的撕裂係數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19)

## 77項逐項結果

「保留」只表示本次未發現同類描述問題，並不新增遊戲內驗證保證。技能連結通往各自的固定來源與限制。

| 技能 | 分類 | 本次處理 | 檢查結論 |
|---|---|---|---|
| [煙霧手雷](veteran_smoke_grenade.md) | 閃擊 | 保留 | 煙霧持續與引信時間分開；無弱點傷害百分比。 |
| [擲彈兵](veteran_extra_grenade.md) | 閃擊 | 保留 | 機率與期望次數已分開，沒有把期望值寫成保底觸發。 |
| [手雷專家](veteran_improved_grenades.md) | 閃擊 | 保留 | 分開爆炸傷害、半徑及煙霧持續；已排除流血並註明護甲等變因。 |
| [穿甲手雷](veteran_krak_grenade.md) | 閃擊 | 保留 | 爆炸算例已限定中心、護甲、非首領及一般部位。 |
| [炸藥儲備](veteran_replenish_grenades.md) | 閃擊 | 保留 | 冷卻／補給已分別說明自然經過時間、額外恢復或依序補回。 |
| [粉碎者破片手雷](veteran_grenade_apply_bleed.md) | 閃擊 | 保留 | 流血按層數曲線，已限定目標護甲；未把層數比例當成線性傷害比例。 |
| [抵近殺敵](veteran_movement_speed_coherency.md) | 光環 | 保留 | 只計該光環的移速倍率，已列單位及不重複套用。 |
| [火力小分隊](veteran_increased_damage_coherency.md) | 光環 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [生存專家](veteran_aura_gain_ammo_on_elite_kill_improved.md) | 光環 | 保留 | 補彈依備用彈藥上限，已區分個人／光環及小數累積。 |
| [火力齊射](veteran_combat_ability_stance.md) | 能力 | 補強額外傷害 | 區分遠程傷害與弱點額外傷害；分項算例不再容易被當成能力總增幅。 |
| [滲透](veteran_invisibility_on_combat_ability.md) | 能力 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [低調](veteran_reduced_threat_after_combat_ability.md) | 能力 | 保留 | 仇恨權重與被攻擊機率已明確分開。 |
| [處決者姿態](veteran_combat_ability_elite_and_special_outlines.md) | 能力 | 補強額外傷害 | 說明15%→25%的升級差額，分開各階段及比較基準。 |
| [目標引導增強](veteran_combat_ability_coherency_outlines.md) | 能力 | 保留 | 輪廓種類、範圍及時間效果；無待釐清的傷害百分比。 |
| [火力反擊](veteran_combat_ability_ranged_roamer_outlines.md) | 能力 | 保留 | 輪廓種類、範圍及時間效果；無待釐清的傷害百分比。 |
| [獵手決意](veteran_toughness_bonus_leaving_invisibility.md) | 能力 | 保留 | 明確限定韌性傷害；已區分同類加算、獨立乘算或各層乘算，依各技能例子處理。 |
| [戰術意識](veteran_elite_kills_reduce_cooldown.md) | 能力 | 保留 | 冷卻／補給已分別說明自然經過時間、額外恢復或依序補回。 |
| [發號施令](veteran_combat_ability_stagger_nearby_enemies.md) | 能力 | 保留 | 回滿／救援、範圍與冷卻效果；無弱點增幅混淆。 |
| [只有死亡，職責才會終結](veteran_combat_ability_revive_nearby_allies.md) | 能力 | 保留 | 回滿／救援、範圍與冷卻效果；無弱點增幅混淆。 |
| [鷹眼](veteran_increased_weakspot_power_after_combat_ability.md) | 能力 | 補強威力／撕裂 | 威力與額外傷害分開；補線性階段前提及125→145的16%增幅。 |
| [責任與榮譽](veteran_combat_ability_increase_and_restore_toughness_to_coherency.md) | 能力 | 保留 | 固定韌性點數已與百分比、目前值、最大值或重疊份數分開。 |
| [掩護射擊](veteran_combat_ability_extra_charge.md) | 能力 | 保留 | 冷卻／補給已分別說明自然經過時間、額外恢復或依序補回。 |
| [肉搏戰](veteran_increased_close_damage_after_combat_ability.md) | 能力 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [敵人越大...](veteran_combat_ability_ogryn_outlines.md) | 能力 | 保留 | 輪廓種類、範圍及時間效果；無待釐清的傷害百分比。 |
| [狙擊專注](veteran_snipers_focus.md) | 鑰石 | 補強額外傷害 | 75%只作用於額外部分；補實際增幅、堅定不移加算及暴擊弱點不重複套用。 |
| [滲透盔甲](veteran_snipers_focus_rending_bonus.md) | 鑰石 | 補強威力／撕裂 | 比較護甲倍率與已有撕裂；分開護甲階段與狙擊專注總效果。 |
| [視野狹窄](veteran_snipers_focus_toughness_bonus.md) | 鑰石 | 保留 | 韌性恢復量加成與最大耐力恢復分開，已用20→24及上限算例。 |
| [遠程刺客](veteran_snipers_focus_increased_stacks.md) | 鑰石 | 補強額外傷害 | 區分112.5%額外加成、相對零層及相對十層的增幅。 |
| [武器專家](veteran_weapon_switch_passive.md) | 鑰石 | 保留 | 爆擊率、攻速與裝填各自計算；已交代機率上限與時間換算。 |
| [時刻警覺](veteran_weapon_switch_replenish_toughness.md) | 鑰石 | 保留 | 恢復依最大值計算，已交代缺額／上限；未把恢復比例當成傷害加成。 |
| [有備無患](veteran_weapon_switch_replenish_ammo.md) | 鑰石 | 保留 | 以彈匣缺額乘層數比例，已交代向上取整、備用彈藥及缺口限制。 |
| [活力煥發](veteran_weapon_switch_replenish_stamina.md) | 鑰石 | 保留 | 最大耐力恢復與耐力消耗倍率分開，已各自代入數值。 |
| [鎖定目標](veteran_improved_tag.md) | 鑰石 | 保留 | 目標承傷逐層乘算；已列1.05的次方及對照數值，未將層數百分比直接相加。 |
| [目標擊倒！](veteran_improved_tag_dead_bonus.md) | 鑰石 | 保留 | 恢復依最大值計算，已交代缺額／上限；未把恢復比例當成傷害加成。 |
| [轉移火力！](veteran_improved_tag_dead_coherency_bonus.md) | 鑰石 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [集中火力](veteran_improved_tag_more_damage.md) | 鑰石 | 保留 | 目標承傷逐層乘算；已列1.05的次方及對照數值，未將層數百分比直接相加。 |
| [爆破小隊](veteran_aura_elite_kills_restore_grenade.md) | 技能 | 保留 | 機率與期望次數已分開，沒有把期望值寫成保底觸發。 |
| [戰術裝填](veteran_faster_reload_on_non_empty_clips.md) | 技能 | 保留 | 速度增幅與所需時間分開；時間以原時間除以速度倍率計算。 |
| [齊射能手](veteran_reload_speed_on_elite_kill.md) | 技能 | 保留 | 速度增幅與所需時間分開；時間以原時間除以速度倍率計算。 |
| [堅定不移](veteran_increased_weakspot_damage.md) | 技能 | 補強額外傷害 | 補上額外傷害占比、15%／20%對照、既有加成及控制變因。 |
| [亡命之徒](veteran_increased_melee_crit_chance_and_melee_finesse.md) | 技能 | 補強額外傷害 | 區分爆擊率、額外傷害、單次傷害及平均傷害；補不同占比算例。 |
| [嗜血](veteran_all_kills_replenish_toughness.md) | 技能 | 保留 | 恢復依最大值計算，已交代缺額／上限；未把恢復比例當成傷害加成。 |
| [遊擊者](veteran_increase_damage_after_sprinting.md) | 技能 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [趁火打劫](veteran_crits_apply_rending.md) | 技能 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [不拋棄不放棄](veteran_movement_speed_towards_downed.md) | 技能 | 保留 | 移速、救援速度與減傷分開；時間除以速度倍率，減傷另算。 |
| [裂擊](veteran_rending_bonus.md) | 技能 | 補強威力／撕裂 | 比較原護甲倍率0.5與1；補20%／2.5%增幅及非弱點非暴擊前提。 |
| [互惠互利](veteran_dodging_grants_crit.md) | 技能 | 保留 | 爆擊率以百分點相加，未當成單次傷害倍率。 |
| [靈活接敵](veteran_kill_grants_damage_to_other_slot.md) | 技能 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [鋸齒刀刃](veteran_hits_cause_bleed.md) | 技能 | 保留 | 流血按層數曲線，已限定目標護甲；未把層數比例當成線性傷害比例。 |
| [戰壕兵訓練](veteran_attack_speed.md) | 技能 | 保留 | 速度增幅與所需時間分開；時間以原時間除以速度倍率計算。 |
| [猛攻](veteran_continous_hits_apply_rending.md) | 技能 | 補強威力／撕裂 | 說明40%脆弱不等於最終增傷40%；補層數已存在後下一擊的對照。 |
| [韌性提升](base_toughness_node_buff_medium_2.md) | 技能 | 保留 | 固定韌性點數已與百分比、目前值、最大值或重疊份數分開。 |
| [喘息片刻](veteran_replenish_toughness_outside_melee.md) | 技能 | 保留 | 恢復依最大值計算，已交代缺額／上限；未把恢復比例當成傷害加成。 |
| [首輪齊射](veteran_bonus_crit_chance_on_ammo.md) | 技能 | 保留 | 爆擊率以百分點相加，未當成單次傷害倍率。 |
| [殺戮地帶](veteran_ranged_power_out_of_melee.md) | 技能 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [突擊隊](veteran_no_ammo_consumption_on_lasweapon_crit.md) | 技能 | 保留 | 暴擊免消耗彈藥；已以實際暴擊次數計算消耗，無傷害倍率說法。 |
| [凋零烈焰](veteran_increased_ranged_cleave.md) | 技能 | 保留 | 穿透能力與命中數／單體傷害已明確分開。 |
| [振奮擊倒](veteran_replenish_toughness_on_weakspot_kill.md) | 技能 | 保留 | 明確限定韌性傷害；已區分同類加算、獨立乘算或各層乘算，依各技能例子處理。 |
| [全副武裝](veteran_ammo_increase.md) | 技能 | 保留 | 容量增幅已區分備用彈藥／彈匣並列向下取整。 |
| [天生領袖](veteran_allies_in_coherency_share_toughness_gain.md) | 技能 | 保留 | 分享依原本應恢復量，已交代施放者缺額、隊友恢復加成與上限。 |
| [臨場發揮](veteran_better_deployables.md) | 技能 | 保留 | 醫療速度、最大韌性恢復與腐敗處理各有算例及上限條件。 |
| [火力掩護](veteran_replenish_toughness_and_boost_allies.md) | 技能 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [求勝心](veteran_ally_kills_increase_damage.md) | 技能 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [擊殺紀錄](veteran_elite_kills_replenish_toughness.md) | 技能 | 保留 | 恢復依最大值計算，已交代缺額／上限；未把恢復比例當成傷害加成。 |
| [密集隊形訓練](veteran_reduced_toughness_damage_in_coherency.md) | 技能 | 保留 | 明確限定韌性傷害；已區分同類加算、獨立乘算或各層乘算，依各技能例子處理。 |
| [遠射](veteran_increased_damage_based_on_range.md) | 技能 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [行雲流水](veteran_reduce_swap_time.md) | 技能 | 保留 | 速度增幅與所需時間分開；時間以原時間除以速度倍率計算。 |
| [死亡射手](veteran_ads_drain_stamina.md) | 技能 | 保留 | 爆擊率以百分點相加，未當成單次傷害倍率。 |
| [幹掉它！](veteran_big_game_hunter.md) | 技能 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [優越情節](veteran_increase_damage_vs_elites.md) | 技能 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [靈活應對](veteran_dodging_grants_stamina.md) | 技能 | 保留 | 恢復依最大值計算，已交代缺額／上限；未把恢復比例當成傷害加成。 |
| [鋼鐵意志](veteran_tdr_on_high_toughness.md) | 技能 | 保留 | 明確限定韌性傷害；已區分同類加算、獨立乘算或各層乘算，依各技能例子處理。 |
| [荷槍實彈](veteran_clip_size.md) | 技能 | 保留 | 容量增幅已區分備用彈藥／彈匣並列向下取整。 |
| [讓他們全趴下！](veteran_increase_suppression.md) | 技能 | 保留 | 壓制值與傷害已明確分開。 |
| [秘密特工](veteran_increased_damage_when_flanking.md) | 技能 | 保留 | 側後方傷害單獨計算；已明定上游傷害與無額外背刺的前提。 |
| [近戰傷害提升](base_melee_damage_node_buff_high_2.md) | 技能 | 保留 | 一般傷害加成；既有算例已限定只計該效果或同階段加算，未把弱點額外傷害當成整筆。 |
| [韌性減傷](base_toughness_damage_reduction_node_buff_medium_1.md) | 技能 | 保留 | 明確限定韌性傷害；已區分同類加算、獨立乘算或各層乘算，依各技能例子處理。 |

## 驗證與限制

- 算例是固定參數的靜態推導；具名武器與敵人的最終傷害、傷害顯示取整及遊戲內行為仍未實測。
- 傷害推導與格式驗收結果記錄於 [POC](../../../docs/POC.md)；可重用的預防規則已納入 [PROMPT](../../../../../../AI Prompt/Skill-Info-Workflow.md)。
