# 護教軍：遊戲本體繁中描述比對

[English](en/LOCALIZATION_COMPARISON.md)

[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)

- 原文：本機 Steam Build 25606770，2026-10-02 擷取，ui 資源；繁中與英文依同一描述鍵／hash 配對。完整文字存於本版本 source/SteamBuild_25606770_1.13.1/，整個 Build 目錄受 Git 忽略。
- 機制：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。文字與程式來源皆為1.13.1；文字與實作的差異仍需遊戲內核對。
- 只有明確的效果方向、作用對象或數量／單位矛盾列為勘誤；省略機制或算例不算錯誤。

- 覆蓋97／97組同鍵／hash中英描述；4項明確繁中勘誤已放在對應技能下。其他項目的機制省略、措辭易誤讀或跨來源落差另列，不當成繁中錯誤。

| 技能 | 結論 |
|---|---|
| [整合型艾曼納圖斯力場](#cryptic_grenade_ability_force_field) | 未見明確矛盾；補充機制與算例 |
| [滌罪伺服頭骨](#cryptic_flamethrower) | 未見明確矛盾；補充機制與算例 |
| [醫療伺服頭骨](#cryptic_servo_skull_inject_ally) | 未見明確矛盾；補充機制與算例 |
| [電弧手榴彈](#cryptic_grenade_ability_arc_grenade) | 文字與程式目標排序待遊戲內核對 |
| [匠師伺服頭骨](#cryptic_servo_skull_improved) | 未見明確矛盾；補充機制與算例 |
| [超載電弧手榴彈](#cryptic_arc_grenades_brittleness) | 未見明確矛盾；補充連鎖與脆弱計算 |
| [強化電弧手榴彈](#cryptic_arc_grenades_weapon_malfunction) | 未見明確矛盾；補充重新計時與目標限制 |
| [過載艾曼納圖斯力場](#cryptic_force_field_duration_increase) | 未見明確矛盾；補充機制與算例 |
| [動能排斥](#cryptic_force_field_capacitance_restore) | 未見明確矛盾；補充機制與算例 |
| [心智網指令](#cryptic_servo_skull_improved_tagging) | 未見明確矛盾；補充機制與算例 |
| [電流抗性](#cryptic_force_field_arcs) | 未見明確矛盾；補充機制與算例 |
| [復甦](#cryptic_coherency_regen_aura_improved) | 未見明確矛盾；補充恢復倍率 |
| [彈藥存放](#cryptic_ammo_aura) | 待遊戲內核對 |
| [碎敵信條](#cryptic_aura_weapon_improved) | 未見明確矛盾；補充計算 |
| [弦爪重擊](#cryptic_chordclaw) | 未見明確矛盾 |
| [修復協定](#cryptic_precision_stance_toughness_suppression) | 單位用語有誤 |
| [彈藥盤點之旨](#cryptic_precision_stance_fire_rate_increased) | 未見明確矛盾 |
| [電流弧](#cryptic_discharge_generates_arcs) | 未見明確矛盾 |
| [電能驅動](#cryptic_discharge_attack_speed_increase) | 未見明確矛盾 |
| [電流超載](#cryptic_discharge_toughness) | 未見明確矛盾 |
| [軸向斬擊](#cryptic_chordclaw_horizontal_swipe) | 未見明確矛盾 |
| [試探連擊](#cryptic_chordclaw_quick_stab_combo) | 未見明確矛盾 |
| [通量導管蓄積](#cryptic_crits_grant_power) | 未見明確矛盾 |
| [反應爐線圈充能](#cryptic_weakspot_kills_grant_power) | 未見明確矛盾 |
| [強化能量循環](#cryptic_increased_passive_cooldown_regen) | 未見明確矛盾 |
| [電容回收迴路](#cryptic_multi_hits_grant_power) | 未見明確矛盾 |
| [電能發射器](#cryptic_discharge) | 未見明確矛盾 |
| [進階戰鬥教範](#cryptic_precision_stance) | 未見明確矛盾 |
| [鋼鐵富足](#cryptic_chordclaw_capacitance_restoration) | 未見明確矛盾 |
| [千刀萬剮](#cryptic_chordclaw_consecutive_bonus) | 未見明確矛盾 |
| [洞察之眼](#cryptic_precision_stance_crit_cleave) | 未見明確矛盾 |
| [精算順序](#cryptic_precision_stance_damage_on_elite_kill) | 未見明確矛盾 |
| [削切協議](#cryptic_dissector) | 未見明確矛盾；補充計算與限制 |
| [極限電容](#cryptic_redline) | 未見明確矛盾；補充計算與限制 |
| [能量超載](#cryptic_overload_keystone) | 未見明確矛盾；補充計算與限制 |
| [爆擊能量過載](#cryptic_overload_keystone_bigger_explosion) | 未見明確矛盾 |
| [振奮過載](#cryptic_overload_keystone_toughness_stamina) | 未見明確矛盾 |
| [靜電電容消耗](#cryptic_overload_keystone_permastack) | 未見明確矛盾 |
| [伺服肌腱湧動](#cryptic_dissector_crit_attack_speed) | 未見明確矛盾；補充計算與限制 |
| [熟練解剖者](#cryptic_dissector_max_stacks) | 未見明確矛盾；補充計算與限制 |
| [進階能量管理](#cryptic_redline_strength) | 未見明確矛盾 |
| [電容極限覆寫](#cryptic_redline_rending) | 繁中勘誤：層數與天賦名稱位置對調 |
| [資源最佳化聖歌](#cryptic_redline_extra_max_stacks) | 未見明確矛盾 |
| [強化電容協議](#cryptic_dissector_ability_stacks) | 未見明確矛盾；補充計算與限制 |
| [動力驅動](#cryptic_overload_keystone_abilities) | 未見明確矛盾 |
| [崇高意圖](#cryptic_dissector_power) | 未見明確矛盾；補充計算與限制 |
| [脈衝延伸](#cryptic_redline_toughness) | 未見明確矛盾 |
| [能量載分配鏈路](#cryptic_crits_grant_tdr) | 未見明確矛盾 |
| [適應性戰鬥記憶體](#cryptic_dr_on_toughness_break) | 待遊戲內核對 |
| [閃避伺服恢復](#cryptic_successful_dodge_stamina) | 未見明確矛盾 |
| [歐姆尼賽亞充能聖歌](#cryptic_multi_hits_restore_toughness) | 未見明確矛盾 |
| [原初動力導流](#cryptic_stamina_increases_damage) | 未見明確矛盾 |
| [熵能轉移](#cryptic_electrocution_toughness) | 未見明確矛盾 |
| [過載轉移晶格](#cryptic_electrocution_defense) | 未見明確矛盾 |
| [精準思算機同步](#cryptic_weakspot_damage) | 未見明確矛盾 |
| [電擊破壞協定](#cryptic_pushing_grants_cleave) | 未見明確矛盾 |
| [輻射槽](#cryptic_stacking_ranged_damage) | 待遊戲內核對 |
| [漸進裝甲矩陣](#cryptic_stacking_tdr) | 未見明確矛盾 |
| [報應導管](#cryptic_damage_vs_electrocuted_scaling_on_charge) | 未見明確矛盾 |
| [電流標記陣列](#cryptic_elite_kills_damage) | 作用條件用語有誤 |
| [自我修復教義](#cryptic_toughness_per_charge) | 未見明確矛盾 |
| [絕境中繼](#cryptic_crit_chance_based_on_charge) | 未見明確矛盾 |
| [弱點分析教義](#cryptic_afflicted_increased_damage) | 未見明確矛盾 |
| [離格動作例程](#cryptic_mobile_defense) | 未見明確矛盾 |
| [能量溢流](#cryptic_shared_toughness) | 未見明確矛盾 |
| [目標殲滅回饋](#cryptic_stun_suppression_immune) | 未見明確矛盾 |
| [二元彈道協議](#cryptic_elite_kills_toughness) | 未見明確矛盾 |
| [力量分配致動器](#cryptic_push_stagger_stamina) | 未見明確矛盾 |
| [卓越追蹤聖歌](#cryptic_no_braced_movement_penalty) | 未見明確矛盾 |
| [液壓衝擊](#cryptic_better_heavies) | 未見明確矛盾 |
| [混合戰鬥契約](#cryptic_hybrid_damage) | 未見明確矛盾 |
| [動能分配器](#cryptic_toughness_on_damage_taken) | 待遊戲內核對 |
| [無限抑制器](#cryptic_melee_attacks_give_melee_attack_speed) | 未見明確矛盾 |
| [電擊打擊導管](#cryptic_melee_crits_electrocute_first) | 未見明確矛盾 |
| [槍械技師](#cryptic_auto_reload) | 未見明確矛盾 |
| [暗殺協議](#cryptic_ranged_vs_bfg) | 未見明確矛盾 |
| [系統電擊](#cryptic_electrocution_applies_brittleness) | 未見明確矛盾 |
| [彈藥預知](#cryptic_ammo_reserve) | 未見明確矛盾 |
| [電能修復](#cryptic_coherency_toughness_on_ability) | 未見明確矛盾 |
| [救贖教範](#cryptic_revive_speed_and_dr) | 未見明確矛盾 |
| [彈藥補給艙](#cryptic_passive_ammo_replenishment) | 未見明確矛盾 |
| [持續攻擊教義](#cryptic_stacking_melee_damage) | 未見明確矛盾 |
| [鍍鋅精密塗層](#cryptic_stun_dr_power) | 未見明確矛盾 |
| [莫比亞導體](#cryptic_damage_on_ability) | 未見明確矛盾 |
| [伺服核心充能引擎](#cryptic_weakspot_kills_restore_toughness) | 未見明確矛盾 |
| [適應性戰鬥校準](#cryptic_cleave_and_impact) | 未見明確矛盾 |
| [剩餘電流緩衝](#cryptic_tdr_based_on_charge) | 未見明確矛盾 |
| [卓越防禦記憶模組](#cryptic_ranged_stacking_toughness) | 未見明確矛盾 |
| [標記優先聖詩](#cryptic_specials_marking) | 未見明確矛盾 |
| [守護協議](#cryptic_disabled_allies_defense) | 未見明確矛盾 |
| [數據感應協定](#cryptic_ally_coherency_defenses) | 受益對象用語有誤 |
| [序列充能](#cryptic_strength_on_charge_gain) | 未見明確矛盾 |
| [屠殺協議](#cryptic_toughness_replenishment_on_kill_bonus) | 容易誤讀；補充說明 |
| [精準戰鬥探測儀](#cryptic_next_hit_all_damage_on_dodge) | 未見明確矛盾 |
| [電流爆發](#cryptic_electrocution_push) | 未見明確矛盾 |
| [抗腐護符](#cryptic_corruption_resistance_doom) | 未見明確矛盾 |
| [威脅偵測指令](#cryptic_ranged_kills_tdr) | 未見明確矛盾 |

<a id="cryptic_grenade_ability_force_field"></a>
## 整合型艾曼納圖斯力場(Integrated Refraction Emitter)

- 描述鍵：`loc_talent_cryptic_grenade_ability_force_field_cooldown_desc`；hash：`1988edfa`。
- 結論：未見明確矛盾；補充機制與算例。本機中英均描述吸收遠程攻擊、8秒持續、3次使用及75秒恢復。來源補明5公尺起訖電擊、共用恢復進度；未展開這些細節不視為錯譯。
- [原始碼推導與限制](cryptic_grenade_ability_force_field.md)。

<a id="cryptic_flamethrower"></a>
## 滌罪伺服頭骨(Purgator Servo-Skull)

- 描述鍵：`loc_talent_cryptic_servo_skull_flamethrower_new_desc`；hash：`e66555ce`。
- 結論：未見明確矛盾；補充機制與算例。繁中描述已涵蓋額外噴火頭骨、落點部署、兩種射擊模式與雙選增加使用次數。固定來源另證明每次噴火消耗共用手雷能力1次、15秒動作與10公尺射程；屬翻譯省略的機制細節，不判為錯譯。Build 25606770 版本對應為1.13.1。
- [原始碼推導與限制](cryptic_flamethrower.md)。

<a id="cryptic_servo_skull_inject_ally"></a>
## 醫療伺服頭骨(Medicae Servo-Skull)

- 描述鍵：`loc_talent_cryptic_servo_skull_inject_ally_revive_new_desc`；hash：`86ee1b55`。
- 結論：未見明確矛盾；補充機制與算例。繁中描述已涵蓋救援、75%韌性承傷減免、每秒20%韌性恢復與5秒持續。程式確認承傷乘數0.25代表減免75%，並確認有效目標判斷與共用次數消耗；翻譯沒有列出這些條件屬機制省略。Build 25606770 版本對應為1.13.1。
- [原始碼推導與限制](cryptic_servo_skull_inject_ally.md)。

<a id="cryptic_grenade_ability_arc_grenade"></a>
## 電弧手榴彈(Arc Grenades)

- 描述鍵：`loc_talent_cryptic_arc_grenades_capacitance_gain_desc`；hash：`22344160`。
- 結論：文字與程式目標排序待遊戲內核對。繁中與英文都概括優先披甲與專家；固定程式先指定4個品種，再篩精英及其他目標，兩處精英判斷的欄位亦不同。先記錄來源差異，不單獨判定繁中錯譯。電弧數與擊殺電容量相符。
- [原始碼推導與限制](cryptic_grenade_ability_arc_grenade.md)。

<a id="cryptic_servo_skull_improved"></a>
## 匠師伺服頭骨(Artificer Servo-Skull)

- 描述鍵：`loc_talent_cryptic_servo_skull_improved_clarified_desc`；hash：`4bb85179`。
- 結論：未見明確矛盾；補充機制與算例。繁中描述已說明常駐頭骨、雙擊標記下令、攻擊與資料詢問，以及基礎閃擊加成常駐。程式核查補出25%傷害、0.5射擊冷卻倍率、命中後15%傷害承受增幅與燃燒上限等數值；屬說明未列出的實作細節，不判為錯譯。Build 25606770 版本對應為1.13.1。
- [原始碼推導與限制](cryptic_servo_skull_improved.md)。

<a id="cryptic_arc_grenades_brittleness"></a>
## 超載電弧手榴彈(Overcharged Arc Grenades)

- 描述鍵：`loc_talent_cryptic_arc_grenades_brittleness_desc`；hash：`699afdc0`。
- 結論：未見明確矛盾；補充連鎖與脆弱計算。繁中描述列出電弧目標增加2個及命中敵人施加8層、每層2.5%脆弱。程式確認額外數值加在起始目標上限，並在電弧連鎖節點加8層、每層2.5%且5秒；最大疊層為16層。Build 25606770 版本對應為1.13.1。
- [原始碼推導與限制](cryptic_arc_grenades_brittleness.md)。

<a id="cryptic_arc_grenades_weapon_malfunction"></a>
## 強化電弧手榴彈(Enhanced Arc Grenades)

- 描述鍵：`loc_talent_cryptic_arc_grenades_weapon_malfunction_larger_desc`；hash：`6282ba9c`。
- 結論：未見明確矛盾；補充重新計時與目標限制。繁中說明指出電弧手榴彈會令受影響的遠程敵人無法使用遠程武器12秒。固定來源確認直接爆炸及電弧連鎖命中可觸發武器故障，程式條件還要求目標具故障元件且存活；品種預設與目前列出的故障時長為12秒。Build 25606770 版本對應為1.13.1。
- [原始碼推導與限制](cryptic_arc_grenades_weapon_malfunction.md)。

<a id="cryptic_force_field_duration_increase"></a>
## 過載艾曼納圖斯力場(Overcharged Refraction Emitter)

- 描述鍵：`loc_talent_cryptic_force_field_duration_increase_desc`；hash：`edf9be63`。
- 結論：未見明確矛盾；補充機制與算例。本分析固定於指定原始碼 SHA；本機 Build 25606770 的繁中說明與來源實作尚未確認為同一 Build。已依來源確認12秒與一次中點爆炸，未將更完整的時間線省略視為翻譯錯誤。
- [原始碼推導與限制](cryptic_force_field_duration_increase.md)。

<a id="cryptic_force_field_capacitance_restore"></a>
## 動能排斥(Kinetic Repulsion)

- 描述鍵：`loc_talent_cryptic_force_field_capacitance_restore`；hash：`e9096586`。
- 結論：未見明確矛盾；補充機制與算例。固定原始碼顯示每次合格攻擊恢復0.025、單次力場累計最多0.75，並恢復戰鬥技能資源；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。繁中描述所省略的攻擊分類與消耗端屬補充細節，不按明確翻譯錯誤處理。
- [原始碼推導與限制](cryptic_force_field_capacitance_restore.md)。

<a id="cryptic_servo_skull_improved_tagging"></a>
## 心智網指令(Noospheric Command)

- 描述鍵：`loc_talent_cryptic_servo_skull_improved_tagging_fire_rate_cost_desc`；hash：`843cef80`。
- 結論：未見明確矛盾；補充機制與算例。繁中描述有列出下令攻擊、持續2秒及0.3電容量，但程式的資源參數是 combat_ability charge percentage，換算為0.3份；程式射擊冷卻乘數0.15，語系格式值會換算為約567%攻擊速度。其餘門檻、訓練場例外及扣除調整屬未列明細節。Build 25606770 版本對應為1.13.1。
- [原始碼推導與限制](cryptic_servo_skull_improved_tagging.md)。

<a id="cryptic_force_field_arcs"></a>
## 電流抗性(Voltaic Resistance)

- 描述鍵：`loc_talent_cryptic_force_field_arcs_desc`；hash：`143e5c50`。
- 結論：未見明確矛盾；補充機制與算例。固定原始碼確認按吸收遠程攻擊數以每6次取上限整數後限制1至4道；0次也會由下限算成1道，並在正常到期路徑進入找目標流程。繁中描述未列出整數門檻、最低值及前方12公尺目標條件，屬翻譯省略的實作細節，不列為錯誤。本機 Build 25606770 版本對應為1.13.1。
- [原始碼推導與限制](cryptic_force_field_arcs.md)。

<a id="cryptic_coherency_regen_aura_improved"></a>
## 復甦(Resurgence)

- 描述鍵：`loc_talent_cryptic_coherency_regen_aura_improved_desc`；hash：`a053ecfc`。
- 結論：未見明確矛盾；補充恢復倍率。同鍵中英均描述敵人接近時仍可進行協同韌性恢復；程式補明一般恢復速率乘基礎25%／改良50%、本人亦在協同接收集合，以及恢復延遲仍有效。文字未逐一列出不算錯誤。
- [原始碼推導與限制](cryptic_coherency_regen_aura_improved.md)。

<a id="cryptic_ammo_aura"></a>
## 彈藥存放(Ammunition Deposit)

- 描述鍵：`loc_talent_cryptic_ammo_aura_toughness_desc`；hash：`cc394399`。
- 結論：待遊戲內核對。繁中描述列出自身韌性及自己與協同隊友的儲備用彈藥藥增加。固定原始碼確認自身獲得25點韌性，且 ammo_reserve_capacity +15% 會發給全部人類玩家而無協同判斷；Build 25606770 版本對應為1.13.1，先記錄實作範圍差異，不判為錯譯。
- [原始碼推導與限制](cryptic_ammo_aura.md)。

<a id="cryptic_aura_weapon_improved"></a>
## 碎敵信條(Foe-Render Creed)

- 描述鍵：`loc_talent_cryptic_aura_weapon_improved_desc`；hash：`6d4feb19`。
- 結論：未見明確矛盾；補充計算。繁中描述列出自身+25韌性及協同隊友的順劈、撕裂效果。固定來源的協同鏈包含施放者本人，故自身也取得15%順劈最大命中質量與7.5%撕裂；未明寫自身受光環效果屬描述省略。Build 25606770 版本對應為1.13.1。
- [原始碼推導與限制](cryptic_aura_weapon_improved.md)。

<a id="cryptic_chordclaw"></a>
## 弦爪重擊(Chordclaw Strike)

- 描述鍵：`loc_talent_cryptic_chordclaw_desc`；hash：`df29b524`。
- 結論：未見明確矛盾。繁中與英文均列出強力重型近戰攻擊、必定暴擊及+50%撕裂，與攻擊 action 與能力效果一致。來源還對啟動期間提供近戰傷害及眩暈免疫；本地化沒有逐一列出這些額外效果，不視為相反說明。
- [原始碼推導與限制](cryptic_chordclaw.md)。

<a id="cryptic_precision_stance_toughness_suppression"></a>
## 修復協定(Restoration Protocol)

- 描述鍵：`loc_talent_cryptic_precision_stance_toughness_suppression_desc`；hash：`e35e0d88`。
- 結論：單位用語有誤。繁中在百分比占位之後再寫「點韌性」，英文未加point單位。format_type是percentage且實際replenish_percentage，應為最大韌性的10%，不是固定10點。
- 繁中原文短引：{talent_name:%s}啟動時立即解除所有壓制效果，並在持續期間內每秒恢復{toughness:%s}點韌性。
- 同源英文：{talent_name:%s} restores {toughness:%s} Toughness per second for the duration and instantly clears all Suppression on activation.
- [原始碼推導與限制](cryptic_precision_stance_toughness_suppression.md)。

<a id="cryptic_precision_stance_fire_rate_increased"></a>
## 彈藥盤點之旨(Writ of Ammunition Enumeration)

- 描述鍵：`loc_talent_cryptic_precision_stance_fire_rate_increased_desc`；hash：`305b77d8`。
- 結論：未見明確矛盾。已逐項比對本機同一描述鍵的繁中與英文，觸發、作用方向及數值占位一致；主文補充實際分母、時間與限制，省略細節不列錯誤。
- [原始碼推導與限制](cryptic_precision_stance_fire_rate_increased.md)。

<a id="cryptic_discharge_generates_arcs"></a>
## 電流弧(Voltaic Arcs)

- 描述鍵：`loc_talent_cryptic_discharge_arc_bonus_desc`；hash：`b7638357`。
- 結論：未見明確矛盾。已逐項比對本機同一描述鍵的繁中與英文，觸發、作用方向及數值占位一致；主文補充實際分母、時間與限制，省略細節不列錯誤。
- [原始碼推導與限制](cryptic_discharge_generates_arcs.md)。

<a id="cryptic_discharge_attack_speed_increase"></a>
## 電能驅動(Voltaic Motivator)

- 描述鍵：`loc_talent_cryptic_discharge_attack_speed_bonus_desc`；hash：`204600f6`。
- 結論：未見明確矛盾。已逐項比對本機同一描述鍵的繁中與英文，觸發、作用方向及數值占位一致；主文補充實際分母、時間與限制，省略細節不列錯誤。
- [原始碼推導與限制](cryptic_discharge_attack_speed_increase.md)。

<a id="cryptic_discharge_toughness"></a>
## 電流超載(Voltaic Overcharge)

- 描述鍵：`loc_talent_cryptic_discharge_toughness_per_charge_desc`；hash：`c12213ad`。
- 結論：未見明確矛盾。已逐項比對本機同一描述鍵的繁中與英文，觸發、作用方向及數值占位一致；主文補充實際分母、時間與限制，省略細節不列錯誤。
- [原始碼推導與限制](cryptic_discharge_toughness.md)。

<a id="cryptic_chordclaw_horizontal_swipe"></a>
## 軸向斬擊(Axial Slash)

- 描述鍵：`loc_talent_cryptic_chordclaw_horizontal_swipe_desc`；hash：`262d64b6`。
- 結論：未見明確矛盾。inventory 中英都表示弦爪改用橫向橫掃，與特殊規則選取水平掃擊 action 相符。兩種本地化都未列攻擊力量表，屬未呈現內部數值，不能據此判為錯誤。
- [原始碼推導與限制](cryptic_chordclaw_horizontal_swipe.md)。

<a id="cryptic_chordclaw_quick_stab_combo"></a>
## 試探連擊(Probing Strikes)

- 描述鍵：`loc_talent_cryptic_chordclaw_quick_stab_combo_clarified_desc`；hash：`e0d3d43f`。
- 結論：未見明確矛盾。繁中與英文都列出3次快速刺擊、6層流血及按住輸入改用一般攻擊。文字沒有明說每次造成傷害的刺擊各加6層；固定版來源碼顯示此為逐次命中效果，屬未展開條件而非相反敘述。
- [原始碼推導與限制](cryptic_chordclaw_quick_stab_combo.md)。

<a id="cryptic_crits_grant_power"></a>
## 通量導管蓄積(Flux Conduit Build-Up)

- 描述鍵：`loc_talent_cryptic_crits_grant_power_desc`；hash：`10f2fa54`。
- 結論：未見明確矛盾。inventory 的繁中與英文都寫明暴擊觸發、產生電容量並持續4秒，與來源每次暴擊啟動4秒恢復期間一致。累積方式及恢復率折算是程式細節，原文省略不構成矛盾。
- [原始碼推導與限制](cryptic_crits_grant_power.md)。

<a id="cryptic_weakspot_kills_grant_power"></a>
## 反應爐線圈充能(Reactor Coil Recharge)

- 描述鍵：`loc_talent_cryptic_weakspot_kills_grant_power_desc`；hash：`7e092f5a`。
- 結論：未見明確矛盾。繁中與英文都寫明弱點擊殺產生2%電容量，與來源每次成功弱點擊殺恢復0.02份單次成本相符。百分比以單份成本計而非總資源池，是來源函式的基準說明；本地化未寫此基準不算明確衝突。
- [原始碼推導與限制](cryptic_weakspot_kills_grant_power.md)。

<a id="cryptic_increased_passive_cooldown_regen"></a>
## 強化能量循環(Augmented Power-Cycle)

- 描述鍵：`loc_talent_cryptic_increased_passive_cooldown_regen_desc`；hash：`34a7eed6`。
- 結論：未見明確矛盾。已逐項比對本機同一描述鍵的繁中與英文，觸發、作用方向及數值占位一致；主文補充實際分母、時間與限制，省略細節不列錯誤。
- [原始碼推導與限制](cryptic_increased_passive_cooldown_regen.md)。

<a id="cryptic_multi_hits_grant_power"></a>
## 電容回收迴路(Capacitor Reclamation Loop)

- 描述鍵：`loc_talent_cryptic_multi_hits_grant_power_desc`；hash：`998c8ded`。
- 結論：未見明確矛盾。繁中與英文均寫同一次攻擊命中3名以上敵人後恢復1%，與程式在命中第3個目標時觸發一次相符。0.25秒間隔及1%以單份成本為基準，是原文省略的程式細節，沒有相反描述。
- [原始碼推導與限制](cryptic_multi_hits_grant_power.md)。

<a id="cryptic_discharge"></a>
## 電能發射器(Voltaic Emitter)

- 描述鍵：`loc_talent_cryptic_discharge_desc`；hash：`1ffeaa91`。
- 結論：未見明確矛盾。本機繁中與英文都列出12公尺主放電、2秒觸電、消耗至少2份時30公尺武器故障12秒、消耗至少3份時15秒命中觸電2秒，以及強化版定位。來源碼吻合；單次最多消耗3份和傷害由後續電擊跳傷結算是文字未展開的實作細節。
- [原始碼推導與限制](cryptic_discharge.md)。

<a id="cryptic_precision_stance"></a>
## 進階戰鬥教範(Advanced Combat Doctrines)

- 描述鍵：`loc_talent_cryptic_precision_stance_drain_cost_combined_desc`；hash：`090d6895`。
- 結論：未見明確矛盾。本機繁中及英文都列出啟動25%、每秒10%、每次射擊1%、裝填時暫停、切離次要武器/耗盡/再按會結束、裝填加速續留5秒且無固定冷卻。來源設定數值吻合；25%等百分比實際以單份充能成本計算，屬內部資源單位的補充說明。
- [原始碼推導與限制](cryptic_precision_stance.md)。

<a id="cryptic_chordclaw_capacitance_restoration"></a>
## 鋼鐵富足(Satiated Steel)

- 描述鍵：`loc_talent_cryptic_chordclaw_capacitance_restoration_desc`；hash：`18058d13`。
- 結論：未見明確矛盾。inventory 中英都表示弦爪擊殺後於5秒內恢復25%電容量，與來源觸發類型、25%總量及5秒恢復視窗相符。觸發限於指定弦爪傷害類型，以及再觸發重新計時而不疊倍率，是原文省略而非明確矛盾。
- [原始碼推導與限制](cryptic_chordclaw_capacitance_restoration.md)。

<a id="cryptic_chordclaw_consecutive_bonus"></a>
## 千刀萬剮(Slice and Dice)

- 描述鍵：`loc_talent_cryptic_chordclaw_consecutive_bonus_desc`；hash：`0ec90e2e`。
- 結論：未見明確矛盾。inventory 中英的使用條件、每層20%傷害、5秒及最多3層與原始設定一致；層數在技能啟動時增加、只作用於弦爪屬程式實作範圍的補充說明。
- [原始碼推導與限制](cryptic_chordclaw_consecutive_bonus.md)。

<a id="cryptic_precision_stance_crit_cleave"></a>
## 洞察之眼(Piercing Sight)

- 描述鍵：`loc_talent_cryptic_precision_stance_crit_cleave_desc`；hash：`f7e91cd6`。
- 結論：未見明確矛盾。inventory 的中英文均說明啟動時+30%遠程穿透、+15%暴擊，滿4秒後為+60%及+30%；與兩組條件式模板的設定相符。穿透計算方式未載於本地化，但沒有明確相反描述。
- [原始碼推導與限制](cryptic_precision_stance_crit_cleave.md)。

<a id="cryptic_precision_stance_damage_on_elite_kill"></a>
## 精算順序(Calculated Priority)

- 描述鍵：`loc_talent_cryptic_precision_stance_damage_on_elite_kill_desc`；hash：`0da94924`。
- 結論：未見明確矛盾。繁中與英文都說進階戰鬥教範啟動時，擊殺精英可疊加傷害，並列出每層數值、10秒及5層上限；來源碼另外要求擊殺由遠程攻擊造成。文字未列這項限制，但沒有否定它。
- [原始碼推導與限制](cryptic_precision_stance_damage_on_elite_kill.md)。

<a id="cryptic_dissector"></a>
## 削切協議(Flensing Protocols)

- 描述鍵：`loc_talent_cryptic_dissector_desc`；hash：`3e2c62db`。
- 結論：未見明確矛盾；補充計算與限制。inventory 的繁中與英文都說明上限6層、每層傷害與韌性減傷2.5%、受傷每秒最多失1層、精英／專家擊殺補2層並恢復15%韌性。固定版支持數值與觸發；啟用時從滿層開始，以及滿層擊殺仍回韌性，是UI未展開的實作細節，不屬誤譯。
- [原始碼推導與限制](cryptic_dissector.md)。

<a id="cryptic_redline"></a>
## 極限電容(Redline Capacitors)

- 描述鍵：`loc_talent_cryptic_redline_charge_stacking_clarified_desc`；hash：`22a7f709`。
- 結論：未見明確矛盾；補充計算與限制。inventory 的繁中與英文都說明每次取得／消耗充能、5%韌性減傷與電容量生成、12秒、上限4層及額外最大充能。固定版將每層具體落在5%韌性承傷倍率步進與戰鬥技能資源回充倍率；直接恢復是否吃倍率由實際恢復路徑決定。未發現明確誤譯，UI未逐項展開不列錯誤。
- [原始碼推導與限制](cryptic_redline.md)。

<a id="cryptic_overload_keystone"></a>
## 能量超載(Power Overload)

- 描述鍵：`loc_talent_cryptic_overload_keystone_coherency_desc`；hash：`58d058f4`。
- 結論：未見明確矛盾；補充計算與限制。inventory 的繁中與英文均描述協同擊殺給層、一般1層／精英與專家2層、上限30、到頂重置以及8秒隊伍傷害與韌性減傷。固定版支持這些效果；傷害增量的單次事件溢出不保留屬UI省略細節，未發現明確誤譯。
- [原始碼推導與限制](cryptic_overload_keystone.md)。

<a id="cryptic_overload_keystone_bigger_explosion"></a>
## 爆擊能量過載(Critical Power Overload)

- 描述鍵：`loc_talent_cryptic_overload_keystone_bigger_explosion_desc`；hash：`4bcf4f12`。
- 結論：未見明確矛盾。繁中與英文都寫明超載對近距離敵人施加電擊並提高其承受傷害，設定值為15%、8秒。固定版把近戰範圍落實為半徑8的敵人篩選，並以零傷害爆炸施加狀態；UI未寫半徑或爆炸自身不造成傷害屬細節省略，不構成明確翻譯錯誤。
- [原始碼推導與限制](cryptic_overload_keystone_bigger_explosion.md)。

<a id="cryptic_overload_keystone_toughness_stamina"></a>
## 振奮過載(Invigorating Overload)

- 描述鍵：`loc_talent_cryptic_overload_keystone_toughness_stamina_desc`；hash：`7c6a74c0`。
- 結論：未見明確矛盾。繁中與英文都表示在能量超載時恢復20%韌性與20%耐力；固定版設定與實際恢復呼叫一致。UI未展開最大值基準、恢復上限及既有韌性修正的細節，不構成翻譯錯誤。
- [原始碼推導與限制](cryptic_overload_keystone_toughness_stamina.md)。

<a id="cryptic_overload_keystone_permastack"></a>
## 靜電電容消耗(Static Capacitor Drain)

- 描述鍵：`loc_talent_cryptic_overload_keystone_permastack_desc`；hash：`c193a6c8`。
- 結論：未見明確矛盾。繁中與英文都列出第8、16、24次超載取得三項加成，數值為15%傷害、20%韌性減傷、25%電容量生成，並說明持續至死亡。固定版門檻和 stat buff 數值一致；自然回充與適用直接恢復的實作、停止被動時清除屬 UI 未展開的細節，不視為翻譯錯誤。
- [原始碼推導與限制](cryptic_overload_keystone_permastack.md)。

<a id="cryptic_dissector_crit_attack_speed"></a>
## 伺服肌腱湧動(Servo-Sinew Surge)

- 描述鍵：`loc_talent_cryptic_dissector_crit_attack_speed_desc`；hash：`7ddcfcd5`。
- 結論：未見明確矛盾；補充計算與限制。繁中與英文均明確寫明每層增加爆擊率與近戰攻擊速度；固定版兩項都是每層1.5%，無誤譯。
- [原始碼推導與限制](cryptic_dissector_crit_attack_speed.md)。

<a id="cryptic_dissector_max_stacks"></a>
## 熟練解剖者(Honed Dissector)

- 描述鍵：`loc_talent_cryptic_dissector_max_stacks_desc`；hash：`52304209`。
- 結論：未見明確矛盾；補充計算與限制。繁中與英文都說明上限提高到8；固定版基礎6層加2層，文字一致。啟用時初始滿層及其既有每層效果是程式補充，不屬誤譯。
- [原始碼推導與限制](cryptic_dissector_max_stacks.md)。

<a id="cryptic_redline_strength"></a>
## 進階能量管理(Advanced Power Management)

- 描述鍵：`loc_talent_cryptic_redline_strength_clarified_desc`；hash：`4e708242`。
- 結論：未見明確矛盾。本機繁中與英文都描述使用能力時按當時持有的充能取得力量，並寫明持續時間；固定版依使用前充能數增加層數，每層套用5%威力等級修正、最多5層並重設10秒倒數。UI未直接說明該力量修正作用於威力等級，也未列出上限；這些是程式細節的補充，不構成明確翻譯錯誤。
- [原始碼推導與限制](cryptic_redline_strength.md)。

<a id="cryptic_redline_rending"></a>
## 電容極限覆寫(Capacitory Limit Override)

- 描述鍵：`loc_talent_cryptic_redline_rending_clarified_desc`；hash：`477f3a77`。
- 結論：繁中勘誤：層數與天賦名稱位置對調。繁中字串把 {stacks} 放在主詞位置、{talent_name} 放在數量位置；代入後條件句錯置。同源英文與固定程式均為極限電容至少3層、獲得15%撕裂。這是同一語系資源內可確認的佔位位置錯誤，不是省略計算。
- 繁中原文短引：在 {stacks:%s} 達到 {talent_name:%s} 層或以上時，獲得 {rending:%s} 撕裂效果。
- 同源英文：{rending:%s} Rending while at {stacks:%s} {talent_name:%s} stacks or above.
- [原始碼推導與限制](cryptic_redline_rending.md)。

<a id="cryptic_redline_extra_max_stacks"></a>
## 資源最佳化聖歌(Resource Optimisation Canticles)

- 描述鍵：`loc_talent_cryptic_redline_stacks_clarified_desc`；hash：`b176ca53`。
- 結論：未見明確矛盾。繁中與英文都列出戰鬥技能最大充能與極限電容最大層數各增加1；固定版設定分別為 +1 ability_extra_charges 與 +1 額外極限電容層數。根鑰石原有 +1 最大充能屬於前置效果，UI在本修正正文中未重述不算翻譯錯誤。
- [原始碼推導與限制](cryptic_redline_extra_max_stacks.md)。

<a id="cryptic_dissector_ability_stacks"></a>
## 強化電容協議(Enhanced Capacitance Protocols)

- 描述鍵：`loc_talent_cryptic_dissector_ability_stacks_desc`；hash：`39219dd5`。
- 結論：未見明確矛盾；補充計算與限制。繁中與英文皆寫使用能力補滿所有層數；固定版依缺少層數補至max，未發現誤譯。
- [原始碼推導與限制](cryptic_dissector_ability_stacks.md)。

<a id="cryptic_overload_keystone_abilities"></a>
## 動力驅動(Powerdrive)

- 描述鍵：`loc_talent_cryptic_overload_keystone_abilities_desc`；hash：`6c9f2d5b`。
- 結論：未見明確矛盾。繁中與英文均概述每份消耗增加5層。固定版一般使用按 ability_cost 計算，鎖定姿態改在結束時按累計消耗取整；弦爪連續使用有只計首次的限制。這是兩種語言均未詳述的實作差異，留待遊戲內實測，不列為繁中誤譯。
- [原始碼推導與限制](cryptic_overload_keystone_abilities.md)。

<a id="cryptic_dissector_power"></a>
## 崇高意圖(Higher Purpose)

- 描述鍵：`loc_talent_cryptic_dissector_power_desc`；hash：`2baab5a1`。
- 結論：未見明確矛盾；補充計算與限制。繁中與英文說明精英／專家擊殺額外恢復2.5%電容量；固定版確認額外值並加到職業既有4%精英／專家恢復上。中英皆用additional，6.5%總值與單充能分母屬程式推導，不是文字誤譯。
- [原始碼推導與限制](cryptic_dissector_power.md)。

<a id="cryptic_redline_toughness"></a>
## 脈衝延伸(Surge-Extension)

- 描述鍵：`loc_talent_cryptic_redline_toughness_clarified_desc`；hash：`5f6b15fb`。
- 結論：未見明確矛盾。繁中與英文都表示獲得極限電容層數時恢復25%韌性、持續5秒，固定版設定與模板採用相同總量和時間。程式按充能變化事件觸發，且單一事件即使增加多層也只啟動一次恢復；這是實際觸發粒度的補充，未發現足以判定為誤譯的相反描述。
- [原始碼推導與限制](cryptic_redline_toughness.md)。

<a id="cryptic_crits_grant_tdr"></a>
## 能量載分配鏈路(Power Redistribution Uplink)

- 描述鍵：`loc_talent_cryptic_crits_grant_tdr_desc`；hash：`12420803`。
- 結論：未見明確矛盾。中英原文未清楚拆分持續恢復與減傷；主文補充每秒速率，不列為誤譯。
- [原始碼推導與限制](cryptic_crits_grant_tdr.md)。

<a id="cryptic_dr_on_toughness_break"></a>
## 適應性戰鬥記憶體(Adaptive Combat Engram)

- 描述鍵：`loc_talent_cryptic_dr_on_toughness_break_desc`；hash：`05a4e1a1`。
- 結論：待遊戲內核對。中英都把15秒寫成觸發間隔，但固定來源採5秒效果後加15秒冷卻。屬雙語文字與來源實作差異，版本對應為1.13.1，不能定為繁中誤譯。
- [原始碼推導與限制](cryptic_dr_on_toughness_break.md)。

<a id="cryptic_successful_dodge_stamina"></a>
## 閃避伺服恢復(Evasive Servo Recovery)

- 描述鍵：`loc_talent_cryptic_successful_dodge_stamina_desc`；hash：`99f3c08d`。
- 結論：未見明確矛盾。繁中與英文條件及恢復方向一致；補充以最大耐力為分母。
- [原始碼推導與限制](cryptic_successful_dodge_stamina.md)。

<a id="cryptic_multi_hits_restore_toughness"></a>
## 歐姆尼賽亞充能聖歌(Omnissian Recharge Litany)

- 描述鍵：`loc_talent_cryptic_multi_hits_restore_toughness_desc`；hash：`6db4bbd5`。
- 結論：未見明確矛盾。原文「3名以上」成立；補充第3次有效命中與觸發間隔，不屬誤譯。
- [原始碼推導與限制](cryptic_multi_hits_restore_toughness.md)。

<a id="cryptic_stamina_increases_damage"></a>
## 原初動力導流(Channelled Motive Force)

- 描述鍵：`loc_talent_cryptic_stamina_increases_damage_desc`；hash：`0a1fb7eb`。
- 結論：未見明確矛盾。中英一致；補充單位為耐力格、可分次累計。
- [原始碼推導與限制](cryptic_stamina_increases_damage.md)。

<a id="cryptic_electrocution_toughness"></a>
## 熵能轉移(Entropic Transfer)

- 描述鍵：`loc_talent_cryptic_electrocution_toughness_desc`；hash：`f4493647`。
- 結論：未見明確矛盾。中英條件一致；新增電擊與重設其持續時間、持續恢復速率為補充。
- [原始碼推導與限制](cryptic_electrocution_toughness.md)。

<a id="cryptic_electrocution_defense"></a>
## 過載轉移晶格(Overcharge Transfer Lattice)

- 描述鍵：`loc_talent_cryptic_electrocution_defense_desc`；hash：`b02129e2`。
- 結論：未見明確矛盾。中英文範圍中心都是攻擊者；補充造成傷害與冷卻條件。
- [原始碼推導與限制](cryptic_electrocution_defense.md)。

<a id="cryptic_weakspot_damage"></a>
## 精準思算機同步(Sureshot Cogitator Sync)

- 描述鍵：`loc_talent_cryptic_weakspot_damage_desc`；hash：`6cd677cf`。
- 結論：未見明確矛盾。原文弱點傷害為簡寫；缺少額外傷害分量與武器差異不列為錯誤。
- [原始碼推導與限制](cryptic_weakspot_damage.md)。

<a id="cryptic_pushing_grants_cleave"></a>
## 電擊破壞協定(Shockline Breach Protocol)

- 描述鍵：`loc_talent_cryptic_pushing_grants_cleave_alt_desc`；hash：`d5aece03`。
- 結論：未見明確矛盾。繁中與英文一致；補充順劈的作用量。
- [原始碼推導與限制](cryptic_pushing_grants_cleave.md)。

<a id="cryptic_stacking_ranged_damage"></a>
## 輻射槽(Rad-Sink)

- 描述鍵：`loc_talent_cryptic_stacking_ranged_damage_desc`；hash：`0ff2b66e`。
- 結論：待遊戲內核對。雙語字面可讀成等待1秒後下一秒才加層；固定來源首層1秒。保留跨版本/顯示差異，不列繁中專屬勘誤。
- [原始碼推導與限制](cryptic_stacking_ranged_damage.md)。

<a id="cryptic_stacking_tdr"></a>
## 漸進裝甲矩陣(Progressive Plating Matrix)

- 描述鍵：`loc_talent_cryptic_stacking_tdr_desc`；hash：`1e30d43e`。
- 結論：未見明確矛盾。雙語一致；補充同一天賦內先加總減傷。
- [原始碼推導與限制](cryptic_stacking_tdr.md)。

<a id="cryptic_damage_vs_electrocuted_scaling_on_charge"></a>
## 報應導管(Retribution Conduit)

- 描述鍵：`loc_talent_cryptic_damage_vs_electrocuted_scaling_on_charge_desc`；hash：`232897f8`。
- 結論：未見明確矛盾。原文每道充能方向一致；補充完整份數與加算公式。
- [原始碼推導與限制](cryptic_damage_vs_electrocuted_scaling_on_charge.md)。

<a id="cryptic_elite_kills_damage"></a>
## 電流標記陣列(Galvanic Marking Array)

- 描述鍵：`loc_talent_cryptic_elite_kills_damage_desc`；hash：`768f2807`。
- 結論：作用條件用語有誤。繁中「擊殺遠程精英」把遠程修飾成敵人類型，與來源的遠程擊殺條件不同；英文Ranged Elite Kills需按攻擊方式理解。
- 繁中原文短引：擊殺遠程精英時，傷害提高{damage:%s}，持續{duration:%s}秒。可疊加{stacks:%s}次，每次衰減一層。
- 同源英文：Ranged Elite Kills increase Damage by {damage:%s} for {duration:%s}s. Stacks {stacks:%s} times. Stacks decay one at a time.
- [原始碼推導與限制](cryptic_elite_kills_damage.md)。

<a id="cryptic_toughness_per_charge"></a>
## 自我修復教義(Auto-Repair Doctrines)

- 描述鍵：`loc_talent_cryptic_toughness_per_charge_desc`；hash：`04db1c7b`。
- 結論：未見明確矛盾。中英一致；補充以最大韌性與完整電容量為基準。
- [原始碼推導與限制](cryptic_toughness_per_charge.md)。

<a id="cryptic_crit_chance_based_on_charge"></a>
## 絕境中繼(Last Stand Relay)

- 描述鍵：`loc_talent_cryptic_crit_chance_based_on_charge_zero_desc`；hash：`dd636885`。
- 結論：未見明確矛盾。原文一致；補充條件依完整份數，百分比以機率百分點相加。
- [原始碼推導與限制](cryptic_crit_chance_based_on_charge.md)。

<a id="cryptic_afflicted_increased_damage"></a>
## 弱點分析教義(Weakness Analysis Doctrine)

- 描述鍵：`loc_talent_cryptic_afflicted_increased_damage_desc`；hash：`70e7ba50`。
- 結論：未見明確矛盾。繁中與英文一致；補充加成作用在自己與重新計時方式。
- [原始碼推導與限制](cryptic_afflicted_increased_damage.md)。

<a id="cryptic_mobile_defense"></a>
## 離格動作例程(Ablative Motion Routines)

- 描述鍵：`loc_talent_cryptic_mobile_defense_desc`；hash：`7c92ecd3`。
- 結論：未見明確矛盾。原文未提衝刺需要耐力；屬條件補充，不列誤譯。
- [原始碼推導與限制](cryptic_mobile_defense.md)。

<a id="cryptic_shared_toughness"></a>
## 能量溢流(Power Overflow)

- 描述鍵：`loc_talent_cryptic_shared_toughness_desc`；hash：`0f1a34d2`。
- 結論：未見明確矛盾。英文each與繁中所有皆可包含逐人獲得；補充不平分、部分補滿不觸發，不當成錯誤。
- [原始碼推導與限制](cryptic_shared_toughness.md)。

<a id="cryptic_stun_suppression_immune"></a>
## 目標殲滅回饋(Target-Neutralization Feedback)

- 描述鍵：`loc_talent_cryptic_stun_suppression_immune_desc`；hash：`38272d6c`。
- 結論：未見明確矛盾。中英「眩暈／Stun」為概括詞；以實際keyword區分一般受擊僵直與強制控制，不列誤譯。
- [原始碼推導與限制](cryptic_stun_suppression_immune.md)。

<a id="cryptic_elite_kills_toughness"></a>
## 二元彈道協議(Binary Ballistics Protocol)

- 描述鍵：`loc_talent_cryptic_elite_kills_toughness_desc`；hash：`46309d46`。
- 結論：未見明確矛盾。繁中與英文一致；補充持續恢復與重新計時。
- [原始碼推導與限制](cryptic_elite_kills_toughness.md)。

<a id="cryptic_push_stagger_stamina"></a>
## 力量分配致動器(Force Distribution Actuators)

- 描述鍵：`loc_talent_cryptic_push_stagger_stamina_desc`；hash：`19866afe`。
- 結論：未見明確矛盾。雙語門檻與作用一致；補充50%邊界與衝擊含義。
- [原始碼推導與限制](cryptic_push_stagger_stamina.md)。

<a id="cryptic_no_braced_movement_penalty"></a>
## 卓越追蹤聖歌(Superior Tracking Litanies)

- 描述鍵：`loc_talent_cryptic_no_braced_movement_penalty_desc`；hash：`f793a029`。
- 結論：未見明確矛盾。繁中占位值含負號，與英文一致；補充減少的是減速幅度且散布常駐，不列誤譯。
- [原始碼推導與限制](cryptic_no_braced_movement_penalty.md)。

<a id="cryptic_better_heavies"></a>
## 液壓衝擊(Hydraulic Impact)

- 描述鍵：`loc_talent_cryptic_better_heavies_desc`；hash：`668011b5`。
- 結論：未見明確矛盾。中英一致；補充蓄力保護與重擊增傷的不同條件。
- [原始碼推導與限制](cryptic_better_heavies.md)。

<a id="cryptic_hybrid_damage"></a>
## 混合戰鬥契約(Hybrid Combat Covenant)

- 描述鍵：`loc_talent_cryptic_hybrid_damage_desc`；hash：`dc9f61eb`。
- 結論：未見明確矛盾。中英文一致；補充各自計時與不同攻擊類型不交叉相加。
- [原始碼推導與限制](cryptic_hybrid_damage.md)。

<a id="cryptic_toughness_on_damage_taken"></a>
## 動能分配器(Kinetic Energy Distributors)

- 描述鍵：`loc_talent_cryptic_toughness_on_damage_taken_desc`；hash：`655fac7c`。
- 結論：待遊戲內核對。中英均宣稱10秒冷卻，固定來源寫入未被ProcBuff使用的cooldown欄位。屬共同文字/實作落差，非繁中誤譯；待遊戲內驗證。
- [原始碼推導與限制](cryptic_toughness_on_damage_taken.md)。

<a id="cryptic_melee_attacks_give_melee_attack_speed"></a>
## 無限抑制器(Uncapped Arrestor)

- 描述鍵：`loc_talent_cryptic_melee_attacks_give_melee_attack_speed_desc`；hash：`ff4edf3b`。
- 結論：未見明確矛盾。雙語一致；補充每次揮擊一層與速率轉時間公式。
- [原始碼推導與限制](cryptic_melee_attacks_give_melee_attack_speed.md)。

<a id="cryptic_melee_crits_electrocute_first"></a>
## 電擊打擊導管(Electro-Strike Conduit)

- 描述鍵：`loc_talent_cryptic_melee_crits_electrocute_first_desc`；hash：`3fc35e67`。
- 結論：未見明確矛盾。中英一致；補充首名目標存活條件及電擊期限。
- [原始碼推導與限制](cryptic_melee_crits_electrocute_first.md)。

<a id="cryptic_auto_reload"></a>
## 槍械技師(Gunsmith)

- 描述鍵：`loc_talent_cryptic_auto_reload_desc`；hash：`612ee334`。
- 結論：未見明確矛盾。中英一致；補充首批第6秒、向上取整及備用彈藥來源。
- [原始碼推導與限制](cryptic_auto_reload.md)。

<a id="cryptic_ranged_vs_bfg"></a>
## 暗殺協議(Assassination Protocols)

- 描述鍵：`loc_talent_cryptic_ranged_vs_bfg_desc`；hash：`01397401`。
- 結論：未見明確矛盾。繁中與英文一致；補充遠程限制與加算公式。
- [原始碼推導與限制](cryptic_ranged_vs_bfg.md)。

<a id="cryptic_electrocution_applies_brittleness"></a>
## 系統電擊(System Shock)

- 描述鍵：`loc_talent_cryptic_electrocution_applies_brittleness_desc`；hash：`47a5f3d9`。
- 結論：未見明確矛盾。中英每次3層與2.5%一致；上限、持續及傷害公式為補充。
- [原始碼推導與限制](cryptic_electrocution_applies_brittleness.md)。

<a id="cryptic_ammo_reserve"></a>
## 彈藥預知(Ammo-Cell Augury)

- 描述鍵：`loc_talent_cryptic_ammo_reserve_desc`；hash：`bf4067b1`。
- 結論：未見明確矛盾。中英皆為彈藥儲備；補充為容量上限與取整。
- [原始碼推導與限制](cryptic_ammo_reserve.md)。

<a id="cryptic_coherency_toughness_on_ability"></a>
## 電能修復(Voltaic Restoration)

- 描述鍵：`loc_talent_cryptic_coherency_toughness_on_ability_desc`；hash：`5c2bb368`。
- 結論：未見明確矛盾。繁中與英文一致；補充戰鬥技能與各自最大韌性。
- [原始碼推導與限制](cryptic_coherency_toughness_on_ability.md)。

<a id="cryptic_revive_speed_and_dr"></a>
## 救贖教範(Salvation Doctrine)

- 描述鍵：`loc_talent_cryptic_revive_speed_and_dr_desc`；hash：`16a4ff53`。
- 結論：未見明確矛盾。中英僅概括復活/Revive；支援其他援助類型屬補充，不列誤譯。
- [原始碼推導與限制](cryptic_revive_speed_and_dr.md)。

<a id="cryptic_passive_ammo_replenishment"></a>
## 彈藥補給艙(Ammunition-Restoration Pod)

- 描述鍵：`loc_talent_cryptic_passive_ammo_replenishment_desc`；hash：`41aa3ba1`。
- 結論：未見明確矛盾。雙語一致；補充小數累計及備用彈藥/彈匣區分。
- [原始碼推導與限制](cryptic_passive_ammo_replenishment.md)。

<a id="cryptic_stacking_melee_damage"></a>
## 持續攻擊教義(Sustained Assault Doctrine)

- 描述鍵：`loc_talent_cryptic_stacking_melee_damage_desc`；hash：`32d4da44`。
- 結論：未見明確矛盾。雙語均為Damage/傷害，未限定僅近戰增傷；補充跨攻擊類型。
- [原始碼推導與限制](cryptic_stacking_melee_damage.md)。

<a id="cryptic_stun_dr_power"></a>
## 鍍鋅精密塗層(Galvanized Coating)

- 描述鍵：`loc_talent_cryptic_stun_dr_power_desc`；hash：`bb527abc`。
- 結論：未見明確矛盾。原文一致；補充零電容量仍有防禦與單份百分比。
- [原始碼推導與限制](cryptic_stun_dr_power.md)。

<a id="cryptic_damage_on_ability"></a>
## 莫比亞導體(Moebian Conductor)

- 描述鍵：`loc_talent_cryptic_damage_on_ability_desc`；hash：`d9e47181`。
- 結論：未見明確矛盾。雙語一致；補充觸發種類、非按消耗份數加倍。
- [原始碼推導與限制](cryptic_damage_on_ability.md)。

<a id="cryptic_weakspot_kills_restore_toughness"></a>
## 伺服核心充能引擎(Servo-Core Recharge Engine)

- 描述鍵：`loc_talent_cryptic_weakspot_kills_restore_toughness_desc`；hash：`8c1c47d8`。
- 結論：未見明確矛盾。中英文一致；補充最大韌性與立即恢復。
- [原始碼推導與限制](cryptic_weakspot_kills_restore_toughness.md)。

<a id="cryptic_cleave_and_impact"></a>
## 適應性戰鬥校準(Adaptive Combat Calibration)

- 描述鍵：`loc_talent_cryptic_melee_cleave_and_impact_desc`；hash：`6d23edd0`。
- 結論：未見明確矛盾。中英皆寫高於/低於，省略剛好50%的歸屬；作邊界補充，不列錯誤。
- [原始碼推導與限制](cryptic_cleave_and_impact.md)。

<a id="cryptic_tdr_based_on_charge"></a>
## 剩餘電流緩衝(Residual Current Buffer)

- 描述鍵：`loc_talent_cryptic_tdr_based_on_charge_base_desc`；hash：`3b317052`。
- 結論：未見明確矛盾。中英一致；補充同技能加總、不同減傷相乘與整份門檻。
- [原始碼推導與限制](cryptic_tdr_based_on_charge.md)。

<a id="cryptic_ranged_stacking_toughness"></a>
## 卓越防禦記憶模組(Superior Defence Engrams)

- 描述鍵：`loc_talent_cryptic_ranged_stacking_toughness_desc`；hash：`057bb0ce`。
- 結論：未見明確矛盾。中英文一致；補充重新計時與上限。
- [原始碼推導與限制](cryptic_ranged_stacking_toughness.md)。

<a id="cryptic_specials_marking"></a>
## 標記優先聖詩(Target Prioritization Psalms)

- 描述鍵：`loc_talent_cryptic_specials_marking_desc`；hash：`5d780574`。
- 結論：未見明確矛盾。中英Marked/標記均為概括用字；補充實際為輪廓，不列誤譯。
- [原始碼推導與限制](cryptic_specials_marking.md)。

<a id="cryptic_disabled_allies_defense"></a>
## 守護協議(Protectorate Protocol)

- 描述鍵：`loc_talent_cryptic_disabled_allies_defense_post_boost_desc`；hash：`5bdd6b9d`。
- 結論：未見明確矛盾。雙語一致；補充需自己援助、協同與獨立6秒效果的邊界。
- [原始碼推導與限制](cryptic_disabled_allies_defense.md)。

<a id="cryptic_ally_coherency_defenses"></a>
## 數據感應協定(Data Sensor Protocol)

- 描述鍵：`loc_talent_cryptic_ally_coherency_defenses_desc`；hash：`307b308a`。
- 結論：受益對象用語有誤。繁中把they翻成盟友，省掉自己作為受益者，並易誤讀為傷害後讓其他隊友恢復。實際恢復給受傷者本人。
- 繁中原文短引：當你或協同中的盟友受到韌性傷害時，盟友恢復{stamina:%s}耐力。冷卻時間{stamina_cd:%s}秒。
- 同源英文：When you or an Ally in Coherency take toughness damage, they restore {stamina:%s} Stamina. {stamina_cd:%s}s Cooldown.
- [原始碼推導與限制](cryptic_ally_coherency_defenses.md)。

<a id="cryptic_strength_on_charge_gain"></a>
## 序列充能(Sequenced Charge)

- 描述鍵：`loc_talent_cryptic_strength_on_charge_gain_desc`；hash：`9e3a3df6`。
- 結論：未見明確矛盾。繁中力量與英文Strength對應威力效果；補充完整份數及結算量。
- [原始碼推導與限制](cryptic_strength_on_charge_gain.md)。

<a id="cryptic_toughness_replenishment_on_kill_bonus"></a>
## 屠殺協議(Slaughter Protocol)

- 描述鍵：`loc_talent_cryptic_toughness_replenishment_on_kill_bonus_desc`；hash：`583f2cab`。
- 結論：容易誤讀；補充說明。中英都簡寫為近戰擊殺韌性恢復加成，未明言以最大韌性為分母，因此不判為錯誤；主文補充是提高原有恢復量。
- [原始碼推導與限制](cryptic_toughness_replenishment_on_kill_bonus.md)。

<a id="cryptic_next_hit_all_damage_on_dodge"></a>
## 精準戰鬥探測儀(Precision Combat Augurs)

- 描述鍵：`loc_talent_cryptic_next_attack_all_damage_on_dodge_desc`；hash：`501926d3`。
- 結論：未見明確矛盾。雙語Next Attack一致；補充揮空/開火消耗與單次儲存。
- [原始碼推導與限制](cryptic_next_hit_all_damage_on_dodge.md)。

<a id="cryptic_electrocution_push"></a>
## 電流爆發(Voltaic Burst)

- 描述鍵：`loc_talent_cryptic_electrocution_push_desc`；hash：`642d90e7`。
- 結論：未見明確矛盾。中英一致；補充整次推擊共享冷卻與開始時間。
- [原始碼推導與限制](cryptic_electrocution_push.md)。

<a id="cryptic_corruption_resistance_doom"></a>
## 抗腐護符(Ablative Wards)

- 描述鍵：`loc_talent_cryptic_corruption_resistance_doom_desc`；hash：`ed668132`。
- 結論：未見明確矛盾。中英文一致；補充代價先抵銷自身抗性、其他倍率仍可影響。
- [原始碼推導與限制](cryptic_corruption_resistance_doom.md)。

<a id="cryptic_ranged_kills_tdr"></a>
## 威脅偵測指令(Threat Detection Imperative)

- 描述鍵：`loc_talent_cryptic_ranged_kills_tdr_desc`；hash：`3a7d18c1`。
- 結論：未見明確矛盾。雙語一致；補充逐層時間軸與同技能加算。
- [原始碼推導與限制](cryptic_ranged_kills_tdr.md)。
