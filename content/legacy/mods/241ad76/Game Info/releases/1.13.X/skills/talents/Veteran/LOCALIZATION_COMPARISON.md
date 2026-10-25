# 老兵：遊戲本體繁中描述比對

[English](en/LOCALIZATION_COMPARISON.md)

[玩家技能說明](README.md)｜[技術索引](SOURCE_INDEX.md)

## 判定方式與範圍

- 逐項比對77個目前節點：本頁玩家說明、遊戲本體繁中模板、同一資源的英文模板；77個描述鍵均核對固定原始碼的天賦定義（74個老兵定義及3個通用屬性定義）。
- **只有正反效果、作用對象、資源方向、物理量／單位、時間操作等明確矛盾才列勘誤。描述不完整不算錯誤。** 省略公式、上限、冷卻、暴擊／弱點結算、恢復基準或特殊互動，只作補充差異。
- 繁中與英文按`content/localization/ui + hash`配對，每個目標hash在兩個語言各一筆；不靠行號或中文名稱猜測對應。英文僅協助辨識譯意，機制證據仍使用固定公開原始碼。
- 原始模板中的預留符號尚未在遊戲執行期代入。本次核對疑點相關的格式參數，不宣稱已還原77項遊戲畫面的完整最終文字。
- 結果：**12項繁中勘誤**已加在各技能正文下；**4項跨來源實作差異待遊戲內核對**，未標為遊戲原文錯誤；其餘**61項未判錯**。肉搏戰同時存在一項已確認翻譯問題與一項待遊戲內確認的生效時間差異，逐項統計列在12項中。

## 本機文本證據

- 本機遊戲：`<遊戲安裝目錄>`；擷取日期：2026-10-02；Steam Build：`25606770`。
- 完整匯出目錄：Repository內的`Game Info/releases/1.13.X/source/SteamBuild_25606770_1.13.1`，維持Git忽略；本文件只保存比對結論、識別碼及必要短引文，不提交完整語系文字。
- 固定機制來源：Release 1.13.1，SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`。**版本Steam Build 25606770對應1.13.1**；個別文字與實作差異仍待遊戲內核對，省略細節不列為翻譯錯誤。

- `zh-tw/ui.jsonl` SHA-256：`15efa95c6ff87e99fbdfd4e0a6c282de94b2f1c5a21eac327c48a87399185f3c`。
- `en/ui.jsonl` SHA-256：`fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`。

## 逐項比對結果

「未判錯」不代表文字詳盡，也不代表已完成所有實作或遊戲內驗證。

| 技能 | 原文hash | 判定 | 比對差異與處理 |
|---|---|---|---|
| [煙霧手雷](veteran_smoke_grenade.md) | `f80c5f1d` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [擲彈兵](veteran_extra_grenade.md) | `61aa0cc5` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [手雷專家](veteran_improved_grenades.md) | `60708f06` | 繁中勘誤 | 單位錯誤：繁中在百分比預留符號後追加秒，英文未追加時間單位；smoke格式為percentage，實作為smoke_fog_duration_modifier=1。不是單純少寫公式。 |
| [穿甲手雷](veteran_krak_grenade.md) | `c7aead0a` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [炸藥儲備](veteran_replenish_grenades.md) | `3b1bc587` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [粉碎者破片手雷](veteran_grenade_apply_bleed.md) | `3aea2f09` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [抵近殺敵](veteran_movement_speed_coherency.md) | `8234f832` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [火力小分隊](veteran_increased_damage_coherency.md) | `9a17fbd0` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [生存專家](veteran_aura_gain_ammo_on_elite_kill_improved.md) | `c68ffc9a` | 繁中勘誤 | 單位錯誤：ammo_2使用percentage，繁中卻接固定數量單位發。另少寫隊友擊殺也可觸發，屬不完整，不另外列為錯誤。 |
| [火力齊射](veteran_combat_ability_stance.md) | `a34966f2` | 待遊戲內核對 | 文字使用傷害／弱點傷害預留符號；1.13.1格式參數各取25%，起始增益各為15%。需核對安裝版格式參數及執行邏輯，未直接標原文數字錯誤。 |
| [滲透](veteran_invisibility_on_combat_ability.md) | `957cbfa6` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [低調](veteran_reduced_threat_after_combat_ability.md) | `7d63094b` | 未判錯 | 少寫隱身期間已生效及其他能力觸發，沒有明確排他說法；不因範圍較簡略判錯。 |
| [處決者姿態](veteran_combat_ability_elite_and_special_outlines.md) | `38234496` | 繁中勘誤 | 時間操作錯譯：同資源英文是refreshes，繁中譯為延長指定秒數，會把重設剩餘時間誤讀為在現有剩餘時間上加秒。 |
| [目標引導增強](veteran_combat_ability_coherency_outlines.md) | `5a8d783e` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [火力反擊](veteran_combat_ability_ranged_roamer_outlines.md) | `cc0d22dd` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [獵手決意](veteran_toughness_bonus_leaving_invisibility.md) | `59344e21` | 未判錯 | 原文說離開潛行後有減傷，未明說隱身期間沒有；少寫較早生效的期間視為不完整。 |
| [戰術意識](veteran_elite_kills_reduce_cooldown.md) | `83519bd4` | 未判錯 | 目前模板已寫專家擊殺與冷卻恢復，不因talent識別碼含elite而判原文錯誤。 |
| [發號施令](veteran_combat_ability_stagger_nearby_enemies.md) | `e3ff1400` | 未判錯 | Stagger譯為眩暈屬術語取法；本頁用踉蹌並補敵人抗性，不直接列為效果錯誤。 |
| [只有死亡，職責才會終結](veteran_combat_ability_revive_nearby_allies.md) | `1ae25548` | 未判錯 | 模板只有扶起倒地盟友，沒有冷卻增加／範圍降低；殘留格式參數不構成原文錯誤。 |
| [鷹眼](veteran_increased_weakspot_power_after_combat_ability.md) | `94eac308` | 待遊戲內核對 | 中英模板都說滲透於離開潛行後生效；固定版本在隱身開始加入增益。屬文字／實作差異，待遊戲內核對，未作繁中錯譯註記。 |
| [責任與榮譽](veteran_combat_ability_increase_and_restore_toughness_to_coherency.md) | `b4e057ef` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [掩護射擊](veteran_combat_ability_extra_charge.md) | `157c4806` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [肉搏戰](veteran_increased_close_damage_after_combat_ability.md) | `1eb58318` | 繁中勘誤 | 效果種類錯譯：Close Damage是依距離的damage_near，並非按近戰攻擊類型判斷的melee_damage。原文另稱離開潛行後才開始，與固定版本實作有差異，但此處只將近戰／近距離的同版語系差異列為勘誤。 |
| [敵人越大...](veteran_combat_ability_ogryn_outlines.md) | `3a6dce0c` | 未判錯 | 模板只有輪廓與時間，沒有額外25%傷害；殘留格式參數不構成原文錯誤。 |
| [狙擊專注](veteran_snipers_focus.md) | `bd7cf7c2` | 未判錯 | 目前模板已寫弱點擊殺、弱點命中重新計時與逐層衰減；沒有舊移動耗層文字，不能以未使用的grace_time參數推定原文錯誤。 |
| [滲透盔甲](veteran_snipers_focus_rending_bonus.md) | `9b41f430` | 未判錯 | 十層門檻及撕裂效果相容；未展開護甲結算不是錯誤。 |
| [視野狹窄](veteran_snipers_focus_toughness_bonus.md) | `a8372526` | 繁中勘誤 | 把恢復量修正譯成直接恢復：每層寫入toughness_replenish_modifier=.04，由已存在的恢復事件乘入；不是每層發出一次韌性恢復。遠程擊殺限定的省略另視為不完整。 |
| [遠程刺客](veteran_snipers_focus_increased_stacks.md) | `c41d398b` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [武器專家](veteran_weapon_switch_passive.md) | `4ead394a` | 繁中勘誤 | 修飾範圍錯誤：英文next shot限定爆擊率，繁中把三項效果一併限定為下一次射擊。實作只有conditional crit讀取shot；attack/reload為常駐stat_buffs，受buff本身期間限制。 |
| [時刻警覺](veteran_weapon_switch_replenish_toughness.md) | `9a112db1` | 未判錯 | 省略各側獨立冷卻，不等於宣稱共用冷卻；不判錯。 |
| [有備無患](veteran_weapon_switch_replenish_ammo.md) | `8e3d6e40` | 繁中勘誤 | 補給方向錯譯：英文明確為Reserve→Clip，繁中把目的地寫成彈藥儲備。實作使用transfer_from_reserve_to_clip；每層3.3%與十層33%的比例相符，不列為數值錯誤。 |
| [活力煥發](veteran_weapon_switch_replenish_stamina.md) | `6ac67293` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [鎖定目標](veteran_improved_tag.md) | `88d879aa` | 未判錯 | 每層額外承傷未指定加算；本頁補充逐層乘算，不能以未寫乘法判錯。 |
| [目標擊倒！](veteran_improved_tag_dead_bonus.md) | `57da5a14` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [轉移火力！](veteran_improved_tag_dead_coherency_bonus.md) | `df1f9c55` | 繁中勘誤 | 效果方向錯譯：同版英文為grant Damage，實作寫入damage=.025；不是damage_taken或toughness_damage_taken。 |
| [集中火力](veteran_improved_tag_more_damage.md) | `dd75ed2b` | 未判錯 | 原文只改上限，未列其他搭配效果屬不完整。 |
| [爆破小隊](veteran_aura_elite_kills_restore_grenade.md) | `6839ad59` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [戰術裝填](veteran_faster_reload_on_non_empty_clips.md) | `09e8437d` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [齊射能手](veteran_reload_speed_on_elite_kill.md) | `7c429a4b` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [堅定不移](veteran_increased_weakspot_damage.md) | `8c42b6fb` | 未判錯 | 只寫弱點傷害加成；沒有宣稱所有武器最終傷害固定提高30%。未解釋額外部分／公式屬不完整，不判錯。 |
| [亡命之徒](veteran_increased_melee_crit_chance_and_melee_finesse.md) | `0ffe42c2` | 未判錯 | 爆擊率與靈巧加成相容；沒有展開額外傷害公式屬不完整。 |
| [嗜血](veteran_all_kills_replenish_toughness.md) | `a8f7b6af` | 未判錯 | 繁中少寫英文additional，但所列擊殺恢復仍成立；不把省略基礎恢復的區別當成錯誤。 |
| [遊擊者](veteran_increase_damage_after_sprinting.md) | `dc400859` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [趁火打劫](veteran_crits_apply_rending.md) | `e32d7197` | 未判錯 | 目前模板已改為近戰爆擊後增傷；內部識別碼含rending不是目前原文。 |
| [不拋棄不放棄](veteran_movement_speed_towards_downed.md) | `30d79ef9` | 未判錯 | 繁中只提韌性減傷，未明說生命不受益；少寫生命傷害減免視為不完整。向隊友移動的文字未細列視角判定，不判錯。 |
| [裂擊](veteran_rending_bonus.md) | `e703007a` | 未判錯 | 只寫撕裂比例，未宣稱所有最終傷害直接乘該比例；沒有護甲算例屬不完整。 |
| [互惠互利](veteran_dodging_grants_crit.md) | `46119770` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [靈活接敵](veteran_kill_grants_damage_to_other_slot.md) | `27db301b` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [鋸齒刀刃](veteran_hits_cause_bleed.md) | `b1249139` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [戰壕兵訓練](veteran_attack_speed.md) | `dff95aa9` | 未判錯 | 「變為」措辭不佳，但格式參數自帶+號表示增量；不只依這個動詞判定減速或固定10%攻速。 |
| [猛攻](veteran_continous_hits_apply_rending.md) | `29626c69` | 未判錯 | 脆弱、時間及疊層相容；未說明第二次起算、每次攻擊限制與護甲公式屬不完整。 |
| [韌性提升](base_toughness_node_buff_medium_2.md) | `329702b6` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [喘息片刻](veteran_replenish_toughness_outside_melee.md) | `8db6388a` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [首輪齊射](veteran_bonus_crit_chance_on_ammo.md) | `e58119bd` | 未判錯 | 原文保留彈藥比例預留符號，未硬寫固定發數；本頁補充80%彈匣門檻。前若干比例子彈的簡略說法與邊界差異未足以證明同版錯誤。 |
| [殺戮地帶](veteran_ranged_power_out_of_melee.md) | `4da1db07` | 繁中勘誤 | 把生效等待時間譯成持續時間：同版英文的for cooldown seconds修飾避開近戰的期間；繁中改成傷害加成持續時間。buff以last_hit_t+cooldown判定，沒有8秒增傷到期機制。 |
| [突擊隊](veteran_no_ammo_consumption_on_lasweapon_crit.md) | `db8f86c6` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [凋零烈焰](veteran_increased_ranged_cleave.md) | `51fc5118` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [振奮擊倒](veteran_replenish_toughness_on_weakspot_kill.md) | `498dcee2` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [全副武裝](veteran_ammo_increase.md) | `3dd8af7f` | 未判錯 | 「變為」措辭不佳，但參數自帶+號；省略備用彈藥上限、取整與彈匣區別視為不完整。 |
| [天生領袖](veteran_allies_in_coherency_share_toughness_gain.md) | `61c0a8f2` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [臨場發揮](veteran_better_deployables.md) | `2e81989a` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [火力掩護](veteran_replenish_toughness_and_boost_allies.md) | `a72a212c` | 待遊戲內核對 | 中英模板描述範圍內盟友；固定版本迴圈選出單一隊友再套效果。待核對安裝版行為，未作繁中錯譯註記。 |
| [求勝心](veteran_ally_kills_increase_damage.md) | `4b7d2d48` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [擊殺紀錄](veteran_elite_kills_replenish_toughness.md) | `b0b81b76` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [密集隊形訓練](veteran_reduced_toughness_damage_in_coherency.md) | `bcb7160f` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [遠射](veteran_increased_damage_based_on_range.md) | `187b8f4c` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [行雲流水](veteran_reduce_swap_time.md) | `8de5cb15` | 繁中勘誤 | 把速度加成寫成縮短為某比例：swap_speed格式帶正號，實作wield_speed=.5，時間除以速度倍率。屬計算量與操作錯誤，不是少寫詳細公式。 |
| [死亡射手](veteran_ads_drain_stamina.md) | `81e6a4bd` | 繁中勘誤 | 屬性名稱錯譯：同版英文是Sway Reduction；格式參數讀1-sway_modifier，設定sway=.4而recoil=-.12。不是術語風格差異，而是把一個數值套在另一屬性上。 |
| [幹掉它！](veteran_big_game_hunter.md) | `d17359f1` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [優越情節](veteran_increase_damage_vs_elites.md) | `db5e86d9` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [靈活應對](veteran_dodging_grants_stamina.md) | `76c89d3d` | 繁中勘誤 | 資源操作錯譯：實作為Stamina.add_stamina_percent，參數.3；英文Stamina on avoiding與繁中耐力消耗不同。漏寫3秒冷卻屬不完整，不列為另一項錯誤。 |
| [鋼鐵意志](veteran_tdr_on_high_toughness.md) | `9702d945` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [荷槍實彈](veteran_clip_size.md) | `5f584f5e` | 待遊戲內核對 | 中英模板都說向上取整；固定版本武器初始化使用floor向下取整。兩者有明確跨來源矛盾，但尚未遊戲內確認實際取整，不直接標遊戲原文錯誤。 |
| [讓他們全趴下！](veteran_increase_suppression.md) | `dcdb4dab` | 未判錯 | 原文提遠程壓制，未明說其他來源不適用；不因範圍較簡略判錯。 |
| [秘密特工](veteran_increased_damage_when_flanking.md) | `19928629` | 未判錯 | 背刺／後半側為位置術語差異，原文仍是遠程攻擊；未見明確數值或效果方向矛盾。 |
| [近戰傷害提升](base_melee_damage_node_buff_high_2.md) | `7b5da013` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |
| [韌性減傷](base_toughness_damage_reduction_node_buff_medium_1.md) | `1272bcc0` | 未判錯 | 原文與本頁核心效果相容；本頁補充觸發細節、限制或算例，不將較簡短視為錯誤。 |

## 未放入玩家主頁的跨來源差異

- **火力齊射**：繁中與英文均使用同組數值預留符號，沒有獨立寫死25%。1.13.1格式參數取25%，起始能力實際加成15%；仍須對上安裝版的格式與增益，不能僅依固定公開版本推定遊戲畫面必然顯示錯誤。
- **鷹眼／肉搏戰**：中英模板都把滲透的加成寫為解除潛行後生效；1.13.1在隱身開始加入增益。這是明確的文字／固定版本實作差異，但不是已證實的繁中獨有翻譯錯誤。肉搏戰的「近戰」錯譯則另行勘誤。
- **荷槍實彈**：兩種語言都寫向上取整，固定版本武器初始化採向下取整；須遊戲內實測確認。現有玩家文案沿用其已標示的1.13.1機制，未反過來將本文的向下取整當成原文引句。
- **火力掩護**：兩種語言都描述範圍內盟友；1.13.1只選一名隊友並有選人距離疑點。列為待遊戲內核對，不用模型推測判定哪一版本的玩家畫面或行為。

- [火力齊射的格式與起始增益引用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L206-L245)
- [姿態實際加成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L296-L323)
- [隱身開始加入肉搏戰／鷹眼](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1223-L1229)
- [彈匣初始化取整](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1346)
- [火力掩護選人與效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1597-L1673)
