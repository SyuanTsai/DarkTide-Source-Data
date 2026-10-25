# 法務官：遊戲本體繁中描述比對

[English](en/LOCALIZATION_COMPARISON.md)

[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)

- 原文：本機 Steam Build 25606770，2026-10-02 擷取，ui 資源；繁中與英文依同一描述鍵／hash 配對。完整文字存於本版本 source/SteamBuild_25606770_1.13.1/，整個 Build 目錄受 Git 忽略。
- 機制：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。文字與程式來源皆為1.13.1；文字與實作的差異仍需遊戲內核對。
- 只有明確的效果方向、作用對象或數量／單位矛盾列為勘誤；省略機制或算例不算錯誤。

- 覆蓋 86／86 組同鍵／hash 描述：6 項繁中勘誤、5 項待遊戲內核對、75 項未見明確矛盾。「畏怯正義」另有攻速數值的跨來源差異，與其翻譯語意勘誤分開說明。

| 技能 | 結論 |
|---|---|
| [遠程引爆](#adamant_whistle) | 未見明確矛盾 |
| [法務官手榴彈](#adamant_grenade_improved) | 未見明確矛盾 |
| [電能地雷](#adamant_shock_mine) | 繁中原文勘誤 |
| [小隊之友](#adamant_companion_coherency) | 未見明確矛盾 |
| [雷厲風行](#adamant_reload_speed_aura) | 未見明確矛盾 |
| [鎮壓異己](#adamant_damage_vs_staggered_aura) | 未見明確矛盾 |
| [突破重圍](#adamant_charge) | 繁中原文勘誤 |
| [天鷹使節](#adamant_area_buff_drone_improved) | 未見明確矛盾 |
| [懲戒者姿態](#adamant_stance) | 未見明確矛盾 |
| [蒙福軍武](#adamant_stance_ranged_kills_transfer_ammo) | 待遊戲內核對 |
| [處決令](#adamant_stance_elite_kills_stack_damage) | 未見明確矛盾 |
| [嗜血殺戮](#adamant_stance_dog_bloodlust) | 未見明確矛盾 |
| [振奮朗誦](#adamant_drone_buff_talent) | 未見明確矛盾 |
| [畏怯正義](#adamant_drone_debuff_talent) | 繁中原文勘誤 |
| [懲惡揚善](#adamant_charge_toughness) | 未見明確矛盾 |
| [針鋒相對](#adamant_charge_cooldown_reduction) | 未見明確矛盾 |
| [交鋒](#adamant_charge_longer_distance) | 未見明確矛盾 |
| [殺戮命令](#adamant_dog_damage_after_ability) | 未見明確矛盾 |
| [處刑命令](#adamant_execution_order) | 待遊戲內核對 |
| [終點站令狀](#adamant_terminus_warrant) | 繁中原文勘誤 |
| [堅定不移](#adamant_forceful) | 未見明確矛盾 |
| [孤狼](#adamant_disable_companion) | 未見明確矛盾 |
| [律法之志](#adamant_forceful_toughness_regen_per_stack) | 未見明確矛盾 |
| [堅定意志](#adamant_forceful_stun_immune_and_block_all) | 未見明確矛盾 |
| [鎖定目標](#adamant_forceful_offensive) | 未見明確矛盾 |
| [法務官警覺](#adamant_forceful_ability_damage) | 未見明確矛盾 |
| [審判之力](#adamant_forceful_stagger_on_low_high) | 未見明確矛盾 |
| [能屈能伸](#adamant_terminus_warrant_cdr) | 未見明確矛盾 |
| [終端律令](#adamant_terminus_warrant_support) | 未見明確矛盾 |
| [效率殺手](#adamant_execution_order_crit) | 未見明確矛盾 |
| [生化武器關](#adamant_execution_order_cdr) | 未見明確矛盾 |
| [罪不可赦](#adamant_execution_order_rending) | 未見明確矛盾 |
| [殺戮協議](#adamant_execution_order_permastack) | 待遊戲內核對 |
| [不落人後](#adamant_pinning_dog_bonus_moving_towards) | 未見明確矛盾 |
| [往前進攻！](#adamant_companion_focus_ranged) | 未見明確矛盾 |
| [猛犬出擊](#adamant_companion_focus_elite) | 未見明確矛盾 |
| [審判之旨](#adamant_terminus_warrant_improved_combined) | 未見明確矛盾 |
| [電子獒犬與人](#adamant_toughness_regen_near_companion) | 未見明確矛盾 |
| [凋零烈焰](#adamant_damage_after_reloading) | 未見明確矛盾 |
| [審判之錘](#adamant_multiple_hits_attack_speed) | 未見明確矛盾 |
| [繩之以法](#adamant_elite_special_kills_replenish_toughness) | 未見明確矛盾 |
| [近在眉睫](#adamant_close_kills_restore_toughness) | 未見明確矛盾 |
| [鐵血之志](#adamant_staggers_replenish_toughness) | 未見明確矛盾 |
| [電能獠牙](#adamant_dog_attacks_electrocute) | 待遊戲內核對 |
| [走一走治百病](#adamant_stamina_spent_replenish_toughness) | 未見明確矛盾 |
| [堅忍不拔](#adamant_limit_dmg_taken_from_hits) | 未見明確矛盾 |
| [韌性減傷](#base_toughness_damage_reduction_node_buff_medium_1) | 未見明確矛盾 |
| [法務官之鎧](#adamant_armor) | 未見明確矛盾 |
| [彈藥腰帶](#adamant_ammo_belt) | 未見明確矛盾 |
| [呼吸器](#adamant_rebreather) | 未見明確矛盾 |
| [苛政壓制](#adamant_hitting_multiple_gives_tdr) | 未見明確矛盾 |
| [遠程傷害增幅](#base_ranged_damage_node_buff_medium_1) | 未見明確矛盾 |
| [近戰增幅](#base_melee_damage_node_buff_medium_1) | 未見明確矛盾 |
| [重顎獠牙](#adamant_dog_pounces_bleed_nearby) | 未見明確矛盾 |
| [勢如破竹](#adamant_damage_reduction_after_elite_kill) | 未見明確矛盾 |
| [堅守陣線](#adamant_staggers_reduce_damage_taken) | 待遊戲內核對 |
| [順劈加成](#base_cleave_node_buff_medium_1) | 未見明確矛盾 |
| [衝擊加成](#base_impact_node_buff_medium_1) | 未見明確矛盾 |
| [塑鋼裝甲](#adamant_plasteel_plates) | 未見明確矛盾 |
| [鋒利獠牙](#adamant_dog_applies_brittleness) | 未見明確矛盾 |
| [追跡法務官](#adamant_dodge_grants_damage) | 未見明確矛盾 |
| [罪孽判官](#adamant_stacking_weakspot_strength) | 未見明確矛盾 |
| [恰如其分](#adamant_elite_special_kills_reload_speed) | 未見明確矛盾 |
| [行軍之志](#adamant_movement_speed_on_block) | 未見明確矛盾 |
| [無處可逃](#adamant_elite_special_kills_offensive_boost) | 未見明確矛盾 |
| [兵敗如山倒](#adamant_cleave_after_push) | 未見明確矛盾 |
| [盾型裝甲](#adamant_shield_plates) | 未見明確矛盾 |
| [重如律法](#adamant_heavy_attacks_increase_damage) | 未見明確矛盾 |
| [毀滅打擊](#adamant_melee_attacks_on_staggered_rend) | 未見明確矛盾 |
| [狂熱信仰](#adamant_crit_chance_on_kill) | 未見明確矛盾 |
| [制裁重擊](#adamant_crits_rend) | 未見明確矛盾 |
| [街頭妙招](#adamant_dodge_improvement) | 繁中原文勘誤 |
| [巨獸獵人](#adamant_monster_hunter) | 未見明確矛盾 |
| [帝皇之拳](#adamant_first_melee_hit_increased_damage) | 未見明確矛盾 |
| [篩選目標](#adamant_pinning_dog_elite_damage) | 未見明確矛盾 |
| [擊殺順序](#adamant_increased_damage_to_high_health) | 未見明確矛盾 |
| [猛犬氣場](#adamant_pinning_dog_kills_buff_allies) | 未見明確矛盾 |
| [迅疾走位](#adamant_sprinting_sliding) | 未見明確矛盾 |
| [最後通牒](#adamant_ranged_damage_on_melee_stagger) | 未見明確矛盾 |
| [秉賦為先](#adamant_clip_size) | 未見明確矛盾 |
| [惡徒退散](#adamant_damage_vs_suppressed) | 未見明確矛盾 |
| [正當手段](#adamant_stacking_damage) | 未見明確矛盾 |
| [壓制武力](#adamant_staggered_enemies_deal_less_damage) | 繁中原文勘誤 |
| [震盪攻擊](#adamant_melee_weakspot_hits_count_as_stagger) | 未見明確矛盾 |
| [針對弱者](#adamant_staggering_enemies_take_more_damage) | 未見明確矛盾 |
| [還治其人之身](#adamant_perfect_block_damage_boost) | 未見明確矛盾 |

<a id="adamant_whistle"></a>
## 遠程引爆(Remote Detonation)

- 描述鍵：`loc_talent_ability_detonate_description`；hash：`29c13c22`。
- 結論：未見明確矛盾。同一 inventory 記錄的繁中寫「引爆機械戰犬的所在處，電擊附近的敵人並使其踉蹌」，英文寫「Cause an Explosion at your Cyber-Mastiff's Location. Staggering and Electrocuting nearby Enemies.」；兩者都涵蓋狗所在位置的爆炸、踉蹌及電擊。來源另外把效果拆成 5 公尺呼喊與半徑 4 公尺爆炸，並給出 2.5 秒踉蹌；原文省略這些細節不作錯譯。
- [原始碼推導與限制](adamant_whistle.md)。

<a id="adamant_grenade_improved"></a>
## 法務官手榴彈(Arbites Grenade)

- 描述鍵：`loc_talent_ability_adamant_grenade_improved_description`；hash：`6a2ea9db`。
- 結論：未見明確矛盾。同源繁中與英文均描述手雷及強化後攜帶上限，未見中英矛盾；碰撞引爆與保險引信的精確流程另按固定來源補充。
- [原始碼推導與限制](adamant_grenade_improved.md)。

<a id="adamant_shock_mine"></a>
## 電能地雷(Voltaic Shock Mine)

- 描述鍵：`loc_talent_ability_shock_mine_description`；hash：`d710719f`。
- 結論：繁中原文勘誤。繁中把英文 activates as it lands（落地啟動）寫為「落地後立即引爆」，混淆進入持續電擊狀態與立即爆炸。啟動1秒、待機及作用時間細節另依固定來源核對。
- 繁中原文短引：扔出一枚落地後立即引爆的{talent_name:%s}。
- 同源英文：Throw a {talent_name:%s} that activates as it lands.
- [原始碼推導與限制](adamant_shock_mine.md)。

<a id="adamant_companion_coherency"></a>
## 小隊之友(Part of the Squad)

- 描述鍵：`loc_talent_adamant_companion_coherency_alt_desc`；hash：`360f5bca`。
- 結論：未見明確矛盾。繁中寫明機械戰犬計入協同、你和協同盟友獲得額外 7.5% 韌性減傷；英文也描述 Cyber-Mastiff counts towards unit Coherency 並給 Coherency Allies additional 7.5% Toughness Damage Reduction。數值與實際掛載的 -0.075 韌性受傷修正相符。
- [原始碼推導與限制](adamant_companion_coherency.md)。

<a id="adamant_reload_speed_aura"></a>
## 雷厲風行(Ruthless Efficiency)

- 描述鍵：`loc_talent_adamant_reload_speed_aura_desc`；hash：`79c674a1`。
- 結論：未見明確矛盾。繁中與英文都明確列出你和協同盟友獲得額外換彈速度；程式設定 +12.5% 相符。兩種文字未提到同一選項會停用戰犬的協同成員資格，這是額外程式效果的省略，不構成所述換彈效果矛盾。
- [原始碼推導與限制](adamant_reload_speed_aura.md)。

<a id="adamant_damage_vs_staggered_aura"></a>
## 鎮壓異己(Breaking Dissent)

- 描述鍵：`loc_talent_adamant_damage_vs_staggered_aura_alt_desc`；hash：`a99d089f`。
- 結論：未見明確矛盾。同源繁中與英文的對踉蹌目標增傷與作用對象一致；停用犬協同資格及計算方式屬細節補充，不判為錯誤。
- [原始碼推導與限制](adamant_damage_vs_staggered_aura.md)。

<a id="adamant_charge"></a>
## 突破重圍(Break the Line)

- 描述鍵：`loc_ability_adamant_charge_blocking_desc`；hash：`b214fa7a`。
- 結論：繁中原文勘誤。繁中寫「踉蹌的機率提高」，英文寫「causing high Stagger」。固定來源的收尾效果是對多數未踉蹌目標強制重度踉蹌，並非提高機率；其餘「視為處於格擋狀態」與「count as Blocking」一致。
- 繁中原文短引：上前猛砸，使前方的敵人踉蹌的機率提高，且傷害提高{damage:%s}，衝擊效果{stagger:%s}，持續{duration:%s}秒。進行猛砸期間，你將被視為處於格擋狀態。
- 同源英文：Step forward and Bash, causing high Stagger to enemies in front of you, and gain {damage:%s} Damage, {stagger:%s} Impact, for {duration:%s}s. During the Bash you count as Blocking.
- [原始碼推導與限制](adamant_charge.md)。

<a id="adamant_area_buff_drone_improved"></a>
## 天鷹使節(Nuncio-Aquila)

- 描述鍵：`loc_talent_ability_area_buff_drone_new_improved_description`；hash：`1e02d48e`。
- 結論：未見明確矛盾。繁中「每秒恢復韌性」「對暈眩、減速和壓制效果免疫」分別對應英文「Toughness per second」及「Immune to Stun, Slowdown, and Suppression」；兩文都指出敵人承受更多傷害。
- [原始碼推導與限制](adamant_area_buff_drone_improved.md)。

<a id="adamant_stance"></a>
## 懲戒者姿態(Castigator's Stance)

- 描述鍵：`loc_talent_adamant_stance_ability_power_description`；hash：`b712c4e8`。
- 結論：未見明確矛盾。繁中「受到的傷害減少」與英文「Reduced Damage Taken」一致；兩者也都指出姿態有移動加成、動作減速降低、無法衝刺及啟動時恢復全部韌性。
- [原始碼推導與限制](adamant_stance.md)。

<a id="adamant_stance_ranged_kills_transfer_ammo"></a>
## 蒙福軍武(Blessed Armament)

- 描述鍵：`loc_talent_adamant_stance_ranged_kills_transfer_ammo_no_cd_desc`；hash：`263d1e30`。
- 結論：待遊戲內核對。繁中「遠程擊殺」「彈匣上限的…彈藥（無條件進位至整數）」對應英文「ranged kills」「total Ammo in your Clip…rounded up」；兩文都寫明每次攻擊僅觸發一次。實作的時間戳節流與設定檔間隔欄位需核對同版行為。
- [原始碼推導與限制](adamant_stance_ranged_kills_transfer_ammo.md)。

<a id="adamant_stance_elite_kills_stack_damage"></a>
## 處決令(Writ of Execution)

- 描述鍵：`loc_talent_adamant_stance_elite_kills_stack_damage_desc`；hash：`4b6af938`。
- 結論：未見明確矛盾。繁中「每個精英或專家敵人」與英文「each Elite or Specialist Kill」一致；兩者都列出每層傷害、持續時間及層數上限。
- [原始碼推導與限制](adamant_stance_elite_kills_stack_damage.md)。

<a id="adamant_stance_dog_bloodlust"></a>
## 嗜血殺戮(Bloodlust)

- 描述鍵：`loc_talent_adamant_stance_bloodlust_desc`；hash：`bbba1e4b`。
- 結論：未見明確矛盾。繁中「機械戰犬造成的傷害提高」與英文「Cyber-Mastiff has … Damage」都描述姿態期間獒犬獲得傷害加成；未見數值或觸發條件相反。
- [原始碼推導與限制](adamant_stance_dog_bloodlust.md)。

<a id="adamant_drone_buff_talent"></a>
## 振奮朗誦(Inspiring Recitation)

- 描述鍵：`loc_talent_adamant_drone_buff_talent_alt_desc`；hash：`b7d2618a`。
- 結論：未見明確矛盾。繁中「韌性減傷、復活速度提高、攻擊速度提高」分別對應英文「Toughness Damage Reduction, Revive Speed, Attack Speed」；各數值一致。
- [原始碼推導與限制](adamant_drone_buff_talent.md)。

<a id="adamant_drone_debuff_talent"></a>
## 畏怯正義(Fear of Justice)

- 描述鍵：`loc_talent_adamant_drone_debuff_talent_desc`；hash：`b1b69549`。
- 結論：繁中原文勘誤。繁中寫「攻擊速度降低 50%」，英文寫「time between … attacks, is increased by 50%」。固定來源的介面格式值是 50%，但實際近戰攻速 stat 設為 −25%，敵人行為按攻速倍率反算時間約延長 33%；目前有實作與文字差異；兩來源皆為1.13.1，實際表現待遊戲內核對。
- 繁中原文短引：敵人的近戰攻擊受到影響時，攻擊速度降低{attack_speed_reduction:%s}，近戰攻擊所造成的傷害也會降低{damage_reduction:%s}。
- 同源英文：The time between affected Enemies' Melee Attacks, is increased by {attack_speed_reduction:%s}, and their Melee Attacks deal {damage_reduction:%s} less Damage.
- [原始碼推導與限制](adamant_drone_debuff_talent.md)。

<a id="adamant_charge_toughness"></a>
## 懲惡揚善(Commendation from Condemnation)

- 描述鍵：`loc_talent_adamant_charge_toughness_alt_description`；hash：`af8a4ee4`。
- 結論：未見明確矛盾。繁中「每次擊中精英敵人、專家敵人或巨獸」對應英文「for each Elite, Specialist, or Monstrosity hit」；恢復量與兩項上限的描述一致。
- [原始碼推導與限制](adamant_charge_toughness.md)。

<a id="adamant_charge_cooldown_reduction"></a>
## 針鋒相對(Targeted Brutality)

- 描述鍵：`loc_talent_adamant_charge_cooldown_alt_description`；hash：`775c291d`。
- 結論：未見明確矛盾。繁中「每次擊中敵人」與英文「for each hit」相同；精英、專家或巨獸提高返還量、以及 5 秒最高值亦一致。
- [原始碼推導與限制](adamant_charge_cooldown_reduction.md)。

<a id="adamant_charge_longer_distance"></a>
## 交鋒(Engage)

- 描述鍵：`loc_talent_adamant_charge_longer_distance_desc`；hash：`3945c4ac`。
- 結論：未見明確矛盾。繁中「距離延長至…公尺」對應英文「distance … increased to …m」；兩者都描述增加後的總距離。
- [原始碼推導與限制](adamant_charge_longer_distance.md)。

<a id="adamant_dog_damage_after_ability"></a>
## 殺戮命令(Kill Order)

- 描述鍵：`loc_talent_adamant_dog_damage_after_ability_desc`；hash：`9f9da5ce`。
- 結論：未見明確矛盾。繁中「使用戰鬥技能後…傷害加成，持續…秒」對應英文「Damage for your Cyber Mastiff…after using your Combat Ability」；觸發、對象與時間一致。
- [原始碼推導與限制](adamant_dog_damage_after_ability.md)。

<a id="adamant_execution_order"></a>
## 處刑命令(Execution Order)

- 描述鍵：`loc_talent_execution_order_description`；hash：`720bc321`。
- 結論：待遊戲內核對。繁中與同源英文的擊殺恢復、玩家與獒犬增益一致。兩者概稱獒犬攻擊標記目標後增傷；固定實作的命中分支只接受 initial_pounce，對歐格林與巨獸的持續壓制也帶此旗標，標記擊殺另可給予增益。命中條件的文字邊界待遊戲內核對。
- [原始碼推導與限制](adamant_execution_order.md)。

<a id="adamant_terminus_warrant"></a>
## 終點站令狀(Terminus Warrant)

- 描述鍵：`loc_talent_adamant_terminus_warrant_new_desc`；hash：`26c20f58`。
- 結論：繁中原文勘誤。同源繁中「弱點命中則額外堆疊」把英文 grant 3 stacks誤寫為一般1層之外再加3層；固定實作弱點分支直接取3，合計3而非4。
- 繁中原文短引：遠程攻擊每命中一個敵人，可堆疊近戰正義層數（最多{max_stacks:%s}層），弱點命中則額外堆疊{weakspot_stacks:%s}層。切換主要武器會消耗你的近戰正義層數，並獲得{melee_strength:%s}近戰威力與{tdr:%s}韌性減傷，持續{melee_duration:%s}秒。
- 同源英文：Ranged Attacks grant stacks of Melee Justice for each Enemy Hit (max {max_stacks:%s}), Weakspot hits grant {weakspot_stacks:%s} stacks. Wielding your Primary Weapon spends your Melee Justice stacks to grant you {melee_strength:%s} Melee Strength and {tdr:%s} Toughness Damage Reduction for {melee_duration:%s}s.
- [原始碼推導與限制](adamant_terminus_warrant.md)。

<a id="adamant_forceful"></a>
## 堅定不移(Forceful)

- 描述鍵：`loc_talent_adamant_forceful_base_alt_desc`；hash：`bcf0df40`。
- 結論：未見明確矛盾。繁中「使敵人踉蹌或格擋攻擊時會獲得…層數」對應英文 “Staggering Hits and Blocked Attacks grant Stacks”；兩者都寫每層持續、可堆疊與受傷移除，沒有同源中英矛盾。
- [原始碼推導與限制](adamant_forceful.md)。

<a id="adamant_disable_companion"></a>
## 孤狼(Lone Wolf)

- 描述鍵：`loc_talent_adamant_disable_companion_replenish_split_desc`；hash：`fe3bded9`。
- 結論：未見明確矛盾。同源繁中與英文的移除獒犬、個人增益與補充間隔一致；45／90秒都有實際消費路徑，另一個未使用的60秒欄位不構成文字矛盾。
- [原始碼推導與限制](adamant_disable_companion.md)。

<a id="adamant_forceful_toughness_regen_per_stack"></a>
## 律法之志(Will of the Lex)

- 描述鍵：`loc_talent_adamant_forceful_toughness_regen_per_stack_desc`；hash：`16db451b`。
- 結論：未見明確矛盾。繁中「每層能夠使你每秒恢復…韌性」對應英文 “Replenish … Toughness each second per Stack”；兩者均表達逐層每秒恢復。
- [原始碼推導與限制](adamant_forceful_toughness_regen_per_stack.md)。

<a id="adamant_forceful_stun_immune_and_block_all"></a>
## 堅定意志(Adamant Will)

- 描述鍵：`loc_talent_adamant_forceful_stun_immune_and_block_all_linger_desc`；hash：`8e7f2015`。
- 結論：未見明確矛盾。繁中「疊滿層數時（以及後續的 3 秒內）免疫眩暈，且完美格擋能格擋所有攻擊」對應英文 “While at Max Stacks, and for 3s afterwards … your perfect blocks can block all attacks”；條件一致。
- [原始碼推導與限制](adamant_forceful_stun_immune_and_block_all.md)。

<a id="adamant_forceful_offensive"></a>
## 鎖定目標(Targets Acquired)

- 描述鍵：`loc_talent_adamant_forceful_melee_alt_desc`；hash：`57827aa3`。
- 結論：未見明確矛盾。繁中「疊滿層數時（以及後續的 3 秒內）獲得 10% 攻擊速度和 50% 順劈」對應英文 “While at Max Stacks, and for 3s afterwards, Gain 10% Attack Speed and 50% Cleave”；一致。
- [原始碼推導與限制](adamant_forceful_offensive.md)。

<a id="adamant_forceful_ability_damage"></a>
## 法務官警覺(Arbites Vigilant)

- 描述鍵：`loc_talent_adamant_forceful_ability_damage`；hash：`5c5993f8`。
- 結論：未見明確矛盾。繁中「使用戰鬥技能時，每層使你獲得…威力，持續…秒。移除所有層數」對應英文 “On Combat Ability, Gain … Strength for each stack. Lasts … Removes all Stacks”；無中英矛盾。
- [原始碼推導與限制](adamant_forceful_ability_damage.md)。

<a id="adamant_forceful_stagger_on_low_high"></a>
## 審判之力(Judicial Force)

- 描述鍵：`loc_talent_adamant_forceful_stagger_on_low_high_desc`；hash：`ef289d31`。
- 結論：未見明確矛盾。繁中與英文都列0／10層震撼與各自冷卻；2.5公尺範圍及門檻穿越判斷屬補充，未列為錯誤。
- [原始碼推導與限制](adamant_forceful_stagger_on_low_high.md)。

<a id="adamant_terminus_warrant_cdr"></a>
## 能屈能伸(Obstinate)

- 描述鍵：`loc_talent_adamant_terminus_warrant_cdr_desc`；hash：`1a4408d8`。
- 結論：未見明確矛盾。繁中「每消耗 20 層，獲得 33%技能冷卻時間恢復，持續 12 秒」對應英文 “Spending 20 stacks grants 33% Ability Cooldown Regeneration, for 12s”；程式把它實作為每秒恢復 0.33 秒資源，文字內部沒有矛盾。
- [原始碼推導與限制](adamant_terminus_warrant_cdr.md)。

<a id="adamant_terminus_warrant_support"></a>
## 終端律令(Terminal Decree)

- 描述鍵：`loc_talent_adamant_terminus_warrant_support_desc`；hash：`6902a21b`。
- 結論：未見明確矛盾。繁中「每消耗一層，自己與協同中盟友恢復…韌性」對應英文 “For each stack you spend, replenish … Toughness to you and Allies in Coherency”；一致。
- [原始碼推導與限制](adamant_terminus_warrant_support.md)。

<a id="adamant_execution_order_crit"></a>
## 效率殺手(Efficient Killer)

- 描述鍵：`loc_talent_execution_order_crit_description`；hash：`2b42cf3a`。
- 結論：未見明確矛盾。繁中「擊殺被標記的目標時，獲得 10%暴擊機率與 25%暴擊傷害，持續 8 秒」對應英文 “Gain 10% Critical Hit Chance and 25% Critical Hit Damage on Marked Kill. Lasts 8s”；一致。
- [原始碼推導與限制](adamant_execution_order_crit.md)。

<a id="adamant_execution_order_cdr"></a>
## 生化武器關(Malocator)

- 描述鍵：`loc_talent_execution_order_cdr_on_kill_description`；hash：`1cb35d28`。
- 結論：未見明確矛盾。同源繁中與英文均為擊殺標記目標後增加冷卻恢復；實際持續8秒。另有未使用的cdr_time=3設定，但不構成文字或生效時間矛盾。
- [原始碼推導與限制](adamant_execution_order_cdr.md)。

<a id="adamant_execution_order_rending"></a>
## 罪不可赦(No Lenience)

- 描述鍵：`loc_talent_execution_order_command_applies_brittleness_description`；hash：`59853225`。
- 結論：未見明確矛盾。繁中「擊殺被標記的敵人後，獲得 10%撕裂效果，持續 8 秒」對應英文 “gain 10% Rending for 8s after a Marked Kill”；一致。
- [原始碼推導與限制](adamant_execution_order_rending.md)。

<a id="adamant_execution_order_permastack"></a>
## 殺戮協議(Keeping Protocol)

- 描述鍵：`loc_talent_execution_order_perma_buff_new_description`；hash：`aaa5ea87`。
- 結論：待遊戲內核對。繁中「巨獸」對應英文 “Monstrosities”，兩者一致；程式 stat 使用 tags.monster，是否涵蓋完全相同敵人集合尚未確認，故待遊戲內核對。
- [原始碼推導與限制](adamant_execution_order_permastack.md)。

<a id="adamant_pinning_dog_bonus_moving_towards"></a>
## 不落人後(Not Far Behind)

- 描述鍵：`loc_talent_adamant_pinning_dog_bonus_moving_towards_description`；hash：`478147b4`。
- 結論：未見明確矛盾。繁中「猛撲後移動速度提高 10%，傷害提高 10%，持續 5 秒」對應英文 “Gain 10% Movement Speed and 10% Damage for 5s after Pounce”；一致。
- [原始碼推導與限制](adamant_pinning_dog_bonus_moving_towards.md)。

<a id="adamant_companion_focus_ranged"></a>
## 往前進攻！(Go Get 'Em!)

- 描述鍵：`loc_talent_adamant_cyber_mastiff_ranged_desc`；hash：`52fe19b9`。
- 結論：未見明確矛盾。繁中「優先攻擊遠程敵人，對其造成 50%傷害」對應英文 “prioritises Ranged Enemies, and deals 50% Damage to them”；一致。
- [原始碼推導與限制](adamant_companion_focus_ranged.md)。

<a id="adamant_companion_focus_elite"></a>
## 猛犬出擊(Unleashed Brutality)

- 描述鍵：`loc_talent_adamant_cyber_mastiff_elites_desc`；hash：`596a5388`。
- 結論：未見明確矛盾。繁中「優先攻擊精英和專家敵人，對其造成 25%傷害」對應英文 “prioritises Elite and Specialist Enemies, and deals 25% Damage to them”；一致。
- [原始碼推導與限制](adamant_companion_focus_elite.md)。

<a id="adamant_terminus_warrant_improved_combined"></a>
## 審判之旨(Writ of Judgement)

- 描述鍵：`loc_talent_adamant_terminus_warrant_improved_combined_desc`；hash：`fadfe4d8`。
- 結論：未見明確矛盾。繁中「每消耗 20 層時，獲得 10%近戰與遠程攻擊速度，以及 10%暴擊機率，持續 12 秒」對應英文 “Spending 20 stacks grants 10% Melee and Ranged Attack Speed as well as 10% Critical Hit Chance for 12s”；一致。
- [原始碼推導與限制](adamant_terminus_warrant_improved_combined.md)。

<a id="adamant_toughness_regen_near_companion"></a>
## 電子獒犬與人(Man and Cyber-Mastiff)

- 描述鍵：`loc_talent_adamant_toughness_regen_near_companion_desc`；hash：`f6bc6fb8`。
- 結論：未見明確矛盾。繁中「附近…每秒恢復」與英文 within…per second 一致；未列最大值與恢復修正屬省略。
- [原始碼推導與限制](adamant_toughness_regen_near_companion.md)。

<a id="adamant_damage_after_reloading"></a>
## 凋零烈焰(Withering Fire)

- 描述鍵：`loc_talent_adamant_damage_after_reloading_desc`；hash：`e68c7c57`。
- 結論：未見明確矛盾。繁中「換彈後…遠程傷害」與英文 after Reloading／Ranged Damage 一致；補上重新計時及加算並非勘誤。
- [原始碼推導與限制](adamant_damage_after_reloading.md)。

<a id="adamant_multiple_hits_attack_speed"></a>
## 審判之錘(Hammer of Judgement)

- 描述鍵：`loc_talent_adamant_multiple_hits_attack_speed_desc`；hash：`8c88fc12`。
- 結論：未見明確矛盾。繁中「一次近戰攻擊…以上」與英文 or more／a Melee Attack 均含達到門檻；第三目標觸發與文意相符。
- [原始碼推導與限制](adamant_multiple_hits_attack_speed.md)。

<a id="adamant_elite_special_kills_replenish_toughness"></a>
## 繩之以法(Target Neutralised)

- 描述鍵：`loc_talent_adamant_elite_special_kills_replenish_toughness_desc`；hash：`2ec3a4dd`。
- 結論：未見明確矛盾。繁中「立即恢復…額外」與英文 instantly／over 一致；多次擊殺的獨立持續恢復是補充。
- [原始碼推導與限制](adamant_elite_special_kills_replenish_toughness.md)。

<a id="adamant_close_kills_restore_toughness"></a>
## 近在眉睫(Up Close)

- 描述鍵：`loc_talent_adamant_close_kills_restore_toughness_desc`；hash：`550ce63d`。
- 結論：未見明確矛盾。繁中「近距離擊殺」與英文 Close Kill 一致；12.5公尺及百分比基準屬細節補充。
- [原始碼推導與限制](adamant_close_kills_restore_toughness.md)。

<a id="adamant_staggers_replenish_toughness"></a>
## 鐵血之志(Force of Will)

- 描述鍵：`loc_talent_adamant_staggers_replenish_toughness_melee_desc`；hash：`050254b5`。
- 結論：未見明確矛盾。繁中「近戰攻擊使敵人踉蹌」與英文 Staggering Melee Attack 一致；未列首目標與天賦互動不算錯誤。
- [原始碼推導與限制](adamant_staggers_replenish_toughness.md)。

<a id="adamant_dog_attacks_electrocute"></a>
## 電能獠牙(Voltaic Mandibles Augment)

- 描述鍵：`loc_talent_adamant_dog_attacks_electrocute_desc`；hash：`f2c7dafd`。
- 結論：待遊戲內核對。繁中與英文都概稱犬的攻擊；實作限定撲擊類傷害設定。觸發範圍的文字與實作差異待遊戲內核對對，不直接當成誤譯。
- [原始碼推導與限制](adamant_dog_attacks_electrocute.md)。

<a id="adamant_stamina_spent_replenish_toughness"></a>
## 走一走治百病(Walk It Off)

- 描述鍵：`loc_talent_adamant_stamina_spent_replenish_toughness_desc`；hash：`5bfeac39`。
- 結論：未見明確矛盾。繁中「消耗…在…秒內恢復」與英文 Spending／over 一致；重新計時不疊速是原文未寫的機制。
- [原始碼推導與限制](adamant_stamina_spent_replenish_toughness.md)。

<a id="adamant_limit_dmg_taken_from_hits"></a>
## 堅忍不拔(True Grit)

- 描述鍵：`loc_talent_adamant_limit_dmg_taken_from_hits_desc`；hash：`a25ab598`。
- 結論：未見明確矛盾。繁中「生命值…」與英文 maximum Health Damage Taken 的數值欄均為number50，未見百分比符號誤譯；以更明確的50點說明。
- [原始碼推導與限制](adamant_limit_dmg_taken_from_hits.md)。

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>
## 韌性減傷(Toughness Damage Reduction)

- 描述鍵：`loc_talent_toughness_damage_reduction_medium_desc`；hash：`1272bcc0`。
- 結論：未見明確矛盾。繁中「韌性減傷」與英文 Toughness Damage Reduction 一致；加算階段未在原文詳列。
- [原始碼推導與限制](base_toughness_damage_reduction_node_buff_medium_1.md)。

<a id="adamant_armor"></a>
## 法務官之鎧(Arbitrator Armour)

- 描述鍵：`loc_talent_adamant_armor_desc`；hash：`0604ced3`。
- 結論：未見明確矛盾。繁中「韌性提高」與英文 Toughness 的number25一致；百分比順序是補充。
- [原始碼推導與限制](adamant_armor.md)。

<a id="adamant_ammo_belt"></a>
## 彈藥腰帶(Ammo Belt)

- 描述鍵：`loc_talent_adamant_ammo_belt_desc`；hash：`76199c1c`。
- 結論：未見明確矛盾。繁中「彈藥容量」與英文 Ammo Capacity 相符；實作限定備用彈藥是資訊補充，不列錯誤。
- [原始碼推導與限制](adamant_ammo_belt.md)。

<a id="adamant_rebreather"></a>
## 呼吸器(Rebreather)

- 描述鍵：`loc_talent_adamant_rebreather_desc`；hash：`0e416297`。
- 結論：未見明確矛盾。繁中腐敗抗性／毒氣減傷與英文兩項對象一致；格式以1−倍率輸出20%及75%。
- [原始碼推導與限制](adamant_rebreather.md)。

<a id="adamant_hitting_multiple_gives_tdr"></a>
## 苛政壓制(Suppression Protocols)

- 描述鍵：`loc_talent_adamant_hitting_multiple_gives_tdr_desc`；hash：`2e6f11ec`。
- 結論：未見明確矛盾。繁中「一擊…以上」與英文 Hitting…or more…an Attack 一致，門檻及韌性作用對象一致。
- [原始碼推導與限制](adamant_hitting_multiple_gives_tdr.md)。

<a id="base_ranged_damage_node_buff_medium_1"></a>
## 遠程傷害增幅(Ranged Damage Boost)

- 描述鍵：`loc_talent_ranged_damage_medium_desc`；hash：`d752c671`。
- 結論：未見明確矛盾。繁中與英文均為對應攻擊類型傷害加成，未見明確矛盾。
- [原始碼推導與限制](base_ranged_damage_node_buff_medium_1.md)。

<a id="base_melee_damage_node_buff_medium_1"></a>
## 近戰增幅(Melee Damage Boost)

- 描述鍵：`loc_talent_melee_damage_boost_medium_desc`；hash：`7b5da013`。
- 結論：未見明確矛盾。繁中與英文均為對應攻擊類型傷害加成，未見明確矛盾。
- [原始碼推導與限制](base_melee_damage_node_buff_medium_1.md)。

<a id="adamant_dog_pounces_bleed_nearby"></a>
## 重顎獠牙(Razor-Jaw Augment)

- 描述鍵：`loc_talent_adamant_dog_pounces_bleed_nearby_desc`；hash：`549c0cdb`。
- 結論：未見明確矛盾。繁中與英文均描述撲擊周邊流血；對大型目標的攻擊旗標與非線性傷害為補充，不當成錯誤。
- [原始碼推導與限制](adamant_dog_pounces_bleed_nearby.md)。

<a id="adamant_damage_reduction_after_elite_kill"></a>
## 勢如破竹(Imposing Force)

- 描述鍵：`loc_talent_adamant_damage_reduction_after_elite_kill_desc`；hash：`368927ce`。
- 結論：未見明確矛盾。繁中「擊殺精英或專家…傷害抗性」與英文相符，沒有把它寫成僅韌性抗性。
- [原始碼推導與限制](adamant_damage_reduction_after_elite_kill.md)。

<a id="adamant_staggers_reduce_damage_taken"></a>
## 堅守陣線(Hold the Line)

- 描述鍵：`loc_talent_adamant_staggers_reduce_damage_taken_alt_desc`；hash：`0f55ddc6`。
- 結論：待遊戲內核對。繁中「下次承受的近戰傷害」與英文 next Melee hit taken 相符；固定實作卻在存續期間套一般減傷、近戰命中才移除。列跨來源差異，不能單獨判為繁中誤譯。
- [原始碼推導與限制](adamant_staggers_reduce_damage_taken.md)。

<a id="base_cleave_node_buff_medium_1"></a>
## 順劈加成(Cleave Boost)

- 描述鍵：`loc_talent_cleave_boost_medium_desc`；hash：`88737f68`。
- 結論：未見明確矛盾。繁中「順劈」與英文 Cleave 對應；未詳列傷害/衝擊質量上限不列勘誤。
- [原始碼推導與限制](base_cleave_node_buff_medium_1.md)。

<a id="base_impact_node_buff_medium_1"></a>
## 衝擊加成(Impact Boost)

- 描述鍵：`loc_talent_impact_boost_medium_desc`；hash：`f61917fa`。
- 結論：未見明確矛盾。繁中「衝擊」與英文 Impact 一致，補充與生命傷害的區別。
- [原始碼推導與限制](base_impact_node_buff_medium_1.md)。

<a id="adamant_plasteel_plates"></a>
## 塑鋼裝甲(Plasteel Plates)

- 描述鍵：`loc_talent_adamant_plasteel_plates_desc`；hash：`a25db61a`。
- 結論：未見明確矛盾。繁中「韌性提高」與英文 Toughness 的number25一致；百分比順序是補充。
- [原始碼推導與限制](adamant_plasteel_plates.md)。

<a id="adamant_dog_applies_brittleness"></a>
## 鋒利獠牙(Serrated Maw)

- 描述鍵：`loc_talent_adamant_dog_applies_brittleness_desc`；hash：`c858c05f`。
- 結論：未見明確矛盾。繁中與英文的脆弱效果一致；層數換算及護甲依賴是機制補充，未列錯誤。
- [原始碼推導與限制](adamant_dog_applies_brittleness.md)。

<a id="adamant_dodge_grants_damage"></a>
## 追跡法務官(Arbites Revelatum)

- 描述鍵：`loc_talent_adamant_dodge_grants_damage_desc`；hash：`ad9cd3f2`。
- 結論：未見明確矛盾。繁中「成功閃避攻擊」對應英文 Successful Dodge，無明確矛盾。
- [原始碼推導與限制](adamant_dodge_grants_damage.md)。

<a id="adamant_stacking_weakspot_strength"></a>
## 罪孽判官(Soulguilt Scan)

- 描述鍵：`loc_talent_adamant_stacking_weakspot_strength_duration_desc`；hash：`62e55f07`。
- 結論：未見明確矛盾。繁中「弱點強化」與英文 Weakspot Strength一致；主文釐清與額外弱點傷害加成不同，未判誤譯。
- [原始碼推導與限制](adamant_stacking_weakspot_strength.md)。

<a id="adamant_elite_special_kills_reload_speed"></a>
## 恰如其分(Judicious Efficiency)

- 描述鍵：`loc_talent_adamant_elite_special_kills_reload_speed_desc`；hash：`79ad9249`。
- 結論：未見明確矛盾。繁中「下次換彈」與英文 next reload一致；逐發裝填的消耗時點屬補充。
- [原始碼推導與限制](adamant_elite_special_kills_reload_speed.md)。

<a id="adamant_movement_speed_on_block"></a>
## 行軍之志(March)

- 描述鍵：`loc_talent_adamant_movement_speed_on_block_alt_desc`；hash：`f2ea4140`。
- 結論：未見明確矛盾。繁中「遠程命中」與英文 Ranged Hit 一致；不能因識別碼帶block誤寫成格擋。
- [原始碼推導與限制](adamant_movement_speed_on_block.md)。

<a id="adamant_elite_special_kills_offensive_boost"></a>
## 無處可逃(No Escape)

- 描述鍵：`loc_talent_adamant_elite_special_kills_offensive_boost_alt_desc`；hash：`ea8040eb`。
- 結論：未見明確矛盾。繁中「傷害加成與移動速度」對應英文 Damage and Movement Speed，觸發及持續時間一致。
- [原始碼推導與限制](adamant_elite_special_kills_offensive_boost.md)。

<a id="adamant_cleave_after_push"></a>
## 兵敗如山倒(Drive them Back)

- 描述鍵：`loc_talent_adamant_cleave_after_push_desc`；hash：`1389250b`。
- 結論：未見明確矛盾。繁中「推擊後…順劈」與英文 Pushing grants Cleave 一致；需要命中及只強化傷害容量屬未列細節。
- [原始碼推導與限制](adamant_cleave_after_push.md)。

<a id="adamant_shield_plates"></a>
## 盾型裝甲(Shield Plates)

- 描述鍵：`loc_talent_adamant_shield_plates_alt_desc`；hash：`0ce5d555`。
- 結論：未見明確矛盾。繁中格擋／完美格擋兩份恢復與英文一致；1秒冷卻僅套完美格擋即補，原文未拆清楚屬補充。
- [原始碼推導與限制](adamant_shield_plates.md)。

<a id="adamant_heavy_attacks_increase_damage"></a>
## 重如律法(Weight of the Lex)

- 描述鍵：`loc_talent_adamant_heavy_attacks_increase_damage_desc`；hash：`573a8877`。
- 結論：未見明確矛盾。繁中「近戰重擊後」與英文 after Heavy Melee Attack一致；命中及揮擊結束時點屬補充。
- [原始碼推導與限制](adamant_heavy_attacks_increase_damage.md)。

<a id="adamant_melee_attacks_on_staggered_rend"></a>
## 毀滅打擊(Strike Down)

- 描述鍵：`loc_talent_adamant_melee_attacks_on_staggered_rend_alt_desc`；hash：`c925f6cc`。
- 結論：未見明確矛盾。繁中與英文均限定踉蹌敵人的近戰撕裂；作用條件一致，公式為補充。
- [原始碼推導與限制](adamant_melee_attacks_on_staggered_rend.md)。

<a id="adamant_crit_chance_on_kill"></a>
## 狂熱信仰(Zealous Dedication)

- 描述鍵：`loc_talent_adamant_crit_chance_on_kill_desc`；hash：`4411328c`。
- 結論：未見明確矛盾。繁中「暴擊機率…堆疊」與英文 Critical Strike Chance／Stacks一致；用百分點釐清數值含義。
- [原始碼推導與限制](adamant_crit_chance_on_kill.md)。

<a id="adamant_crits_rend"></a>
## 制裁重擊(Prosecution Blow)

- 描述鍵：`loc_talent_adamant_crits_rend_alt_desc`；hash：`7ccaaaa3`。
- 結論：未見明確矛盾。繁中與英文均限定遠程暴擊撕裂；作用條件一致，公式為補充。
- [原始碼推導與限制](adamant_crits_rend.md)。

<a id="adamant_dodge_improvement"></a>
## 街頭妙招(Street Smarts)

- 描述鍵：`loc_talent_adamant_dodge_improvement_desc`；hash：`4de76f4a`。
- 結論：繁中原文勘誤。同源繁中「增加至…次」將總量與增量混淆；英文 Increase…by…，程式extra_consecutive_dodges=1也為額外增加。時間寬限的實作限制另作說明。
- 繁中原文短引：有效閃避次數增加至{dodge:%s}次，視為有效閃避的時間增加{dodge_duration:%s}。
- 同源英文：Increase Effective Dodges by {dodge:%s} and time considered Dodging by {dodge_duration:%s}.
- [原始碼推導與限制](adamant_dodge_improvement.md)。

<a id="adamant_monster_hunter"></a>
## 巨獸獵人(Monstrosity Hunter)

- 描述鍵：`loc_talent_adamant_monster_hunter_desc`；hash：`7ec647c9`。
- 結論：未見明確矛盾。繁中「歐格林和巨獸」對應英文 Ogryns and Monstrosities，沒有重複計算兩份加成的依據。
- [原始碼推導與限制](adamant_monster_hunter.md)。

<a id="adamant_first_melee_hit_increased_damage"></a>
## 帝皇之拳(The Emperor's Fist)

- 描述鍵：`loc_talent_adamant_first_melee_hit_increased_damage_desc`；hash：`b13d7bb8`。
- 結論：未見明確矛盾。繁中「每次攻擊命中的第一個敵人」與英文 first Enemy hit with each attack一致；先後事件為補充。
- [原始碼推導與限制](adamant_first_melee_hit_increased_damage.md)。

<a id="adamant_pinning_dog_elite_damage"></a>
## 篩選目標(Target Selection)

- 描述鍵：`loc_talent_adamant_pinning_dog_elite_damage_description`；hash：`0b95c919`。
- 結論：未見明確矛盾。繁中與英文的壓制中擊殺條件相符；犬本身的擊殺歸屬與時間重新計時屬補充，不判為誤譯。
- [原始碼推導與限制](adamant_pinning_dog_elite_damage.md)。

<a id="adamant_increased_damage_to_high_health"></a>
## 擊殺順序(Target Priority)

- 描述鍵：`loc_talent_adamant_increased_damage_to_high_health_desc`；hash：`c5936e7c`。
- 結論：未見明確矛盾。繁中「高於…生命值」與英文 above…Health一致；「造成…傷害」較不清楚，但未單憑措辭判錯，主文明寫加成及門檻。
- [原始碼推導與限制](adamant_increased_damage_to_high_health.md)。

<a id="adamant_pinning_dog_kills_buff_allies"></a>
## 猛犬氣場(Canine Morale)

- 描述鍵：`loc_talent_adamant_pinning_dog_kills_buff_allies_description`；hash：`6250ddd6`。
- 結論：未見明確矛盾。繁中與英文的壓制中擊殺條件相符；犬本身的擊殺歸屬與時間重新計時屬補充，不判為誤譯。
- [原始碼推導與限制](adamant_pinning_dog_kills_buff_allies.md)。

<a id="adamant_sprinting_sliding"></a>
## 迅疾走位(Rapid Movement)

- 描述鍵：`loc_talent_adamant_sprinting_sliding_description`；hash：`1469331e`。
- 結論：未見明確矛盾。繁中滑行加速、擊殺耐力與英文一致；0.75秒只限制擊殺恢復，屬範圍補充。
- [原始碼推導與限制](adamant_sprinting_sliding.md)。

<a id="adamant_ranged_damage_on_melee_stagger"></a>
## 最後通牒(Final Warning)

- 描述鍵：`loc_talent_adamant_ranged_damage_on_melee_stagger_desc`；hash：`b76999a7`。
- 結論：未見明確矛盾。繁中「近戰…踉蹌」對應英文 Melee Staggering Hits；推擊及弱點天賦互動未列不視為錯誤。
- [原始碼推導與限制](adamant_ranged_damage_on_melee_stagger.md)。

<a id="adamant_clip_size"></a>
## 秉賦為先(Priority Endowment)

- 描述鍵：`loc_talent_adamant_clip_size_alt_desc`；hash：`5f584f5e`。
- 結論：未見明確矛盾。繁中「無條件進位」與英文 rounded up一致，動態容量更新也使用ceil；未列目前彈量換算不算錯。
- [原始碼推導與限制](adamant_clip_size.md)。

<a id="adamant_damage_vs_suppressed"></a>
## 惡徒退散(Cower, Miscreants!)

- 描述鍵：`loc_talent_adamant_damage_vs_suppressed_desc`；hash：`0e174b92`。
- 結論：未見明確矛盾。繁中「被壓制的敵人」與英文 Suppressed Enemies對象一致。
- [原始碼推導與限制](adamant_damage_vs_suppressed.md)。

<a id="adamant_stacking_damage"></a>
## 正當手段(Justified Measures)

- 描述鍵：`loc_talent_adamant_stacking_damage_desc`；hash：`8191a7bf`。
- 結論：未見明確矛盾。繁中「攻擊命中後」與英文 on Successful Attack一致；首目標限制屬補充。
- [原始碼推導與限制](adamant_stacking_damage.md)。

<a id="adamant_staggered_enemies_deal_less_damage"></a>
## 壓制武力(Suppression Force)

- 描述鍵：`loc_talent_adamant_staggered_enemies_deal_less_damage_desc`；hash：`cd6418d9`。
- 結論：繁中原文勘誤。同源繁中「對其造成…傷害」把作用方向反轉；英文 makes them deal…Damage是敵人輸出降低，實作在敵人身上設damage=-.2。
- 繁中原文短引：使敵人踉蹌時，對其造成{damage:%s}傷害，持續{duration:%s}秒。
- 同源英文：Staggering an Enemy makes them deal {damage:%s} Damage. Lasts {duration:%s}s.
- [原始碼推導與限制](adamant_staggered_enemies_deal_less_damage.md)。

<a id="adamant_melee_weakspot_hits_count_as_stagger"></a>
## 震盪攻擊(Concussive)

- 描述鍵：`loc_talent_adamant_melee_weakspot_hits_count_as_stagger_desc`；hash：`3be4daea`。
- 結論：未見明確矛盾。繁中「視為踉蹌」與英文 count as Staggered一致，沒有宣稱強制打出踉蹌動畫。
- [原始碼推導與限制](adamant_melee_weakspot_hits_count_as_stagger.md)。

<a id="adamant_staggering_enemies_take_more_damage"></a>
## 針對弱者(Target the Weak)

- 描述鍵：`loc_talent_ogryn_big_bully_heavy_hits_new_desc`；hash：`45b6dfbf`。
- 結論：未見明確矛盾。繁中「額外近戰傷害」與英文 more Melee Damage對象一致；推擊及其他玩家受益屬省略，不當錯誤。
- [原始碼推導與限制](adamant_staggering_enemies_take_more_damage.md)。

<a id="adamant_perfect_block_damage_boost"></a>
## 還治其人之身(Retaliatory Force)

- 描述鍵：`loc_talent_adamant_perfect_block_damage_boost_alt_desc`；hash：`9349e3e7`。
- 結論：未見明確矛盾。繁中與英文均把格擋消耗列常駐、傷害攻速列完美格擋後；條件與對象一致。
- [原始碼推導與限制](adamant_perfect_block_damage_boost.md)。
