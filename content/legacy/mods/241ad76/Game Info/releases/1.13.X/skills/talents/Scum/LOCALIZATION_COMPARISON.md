# 巢都渣滓：遊戲本體繁中描述比對

[English](en/LOCALIZATION_COMPARISON.md)

[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)

- 原文：本機 Steam Build 25606770，2026-10-02 擷取，ui 資源；繁中與英文依同一描述鍵／hash 配對。完整文字存於本版本 source/SteamBuild_25606770_1.13.1/，整個 Build 目錄受 Git 忽略。
- 機制：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。文字與程式來源皆為1.13.1；文字與實作的差異仍需遊戲內核對。
- 只有明確的效果方向、作用對象或數量／單位矛盾列為勘誤；省略機制或算例不算錯誤。

- 主天賦79組、起始說明1組與配方29組都已核對：配方描述由54個中英同hash的屬性／效果標籤組成，並依固定來源參數代入；未用名稱相近的文字代替。共2項明確繁中勘誤，均列在主頁對應技能下。

| 技能 | 結論 |
|---|---|
| [擊暈](#broker_blitz_flash_grenade_improved) | 繁中原文誤譯 |
| [炸彈使者](#broker_blitz_missile_launcher) | 未見明確矛盾 |
| [化學手榴彈](#broker_blitz_tox_grenade) | 未見明確矛盾 |
| [精進神射手](#broker_aura_gunslinger_improved) | 未見明確矛盾 |
| [惡棍](#broker_coherency_melee_damage) | 未見明確矛盾 |
| [無政府主義者](#broker_coherency_anarchist) | 未見明確矛盾 |
| [強化亡命之徒](#broker_ability_focus_improved) | 未見明確中英矛盾 |
| [化學性依賴](#broker_ability_stimm_field) | 未見明確中英矛盾 |
| [橫衝直撞！](#broker_ability_punk_rage) | 未見中英翻譯差異（壓制免疫未由程式證實） |
| [熔爐怒吼](#broker_ability_punk_rage_sub_2) | 未見明確中英矛盾 |
| [凝聚殺意](#broker_ability_punk_rage_sub_1) | 未見明確中英矛盾 |
| [沸騰之血](#broker_ability_punk_rage_sub_3) | 未見中英翻譯差異（攻擊間隔百分比與程式值不相符） |
| [碎骨打擊](#broker_ability_punk_rage_sub_4) | 未見明確中英矛盾 |
| [專注凝神](#broker_ability_focus_sub_3) | 未見中英翻譯差異（觸發條件由程式補充） |
| [精準獵殺](#broker_ability_focus_sub_2) | 未見明確中英矛盾 |
| [熟練部署](#broker_ability_stimm_field_sub_3) | 未見翻譯差異（程式以半秒輪詢觸發） |
| [速效型興奮劑](#broker_ability_stimm_field_sub_1) | 未見明確中英矛盾 |
| [毒性陷阱](#broker_ability_stimm_field_sub_2) | 未見明確中英矛盾 |
| [靈巧](#broker_passive_improved_dodges) | 未見明確矛盾 |
| [腎上腺素狂暴](#broker_keystone_adrenaline_junkie) | 未見明確矛盾 |
| [兀鷲印記](#broker_keystone_vultures_mark_on_kill) | 未見明確矛盾 |
| [化學性依賴](#broker_keystone_chemical_dependency) | 未見明確矛盾 |
| [化學強化](#broker_keystone_chemical_dependency_sub_1) | 未見明確矛盾 |
| [化學增強](#broker_keystone_chemical_dependency_sub_2) | 未見明確矛盾 |
| [化學藥劑全開](#broker_keystone_chemical_dependency_sub_3) | 未見明確矛盾 |
| [兀鷲推擊](#broker_keystone_vultures_mark_aoe_stagger) | 未見明確矛盾 |
| [堅毅獵手](#broker_keystone_vultures_mark_increased_duration) | 未見明確矛盾 |
| [兀鷲閃避](#broker_keystone_vultures_mark_dodge_on_ranged_crit) | 未見明確矛盾 |
| [腎上腺素刺客](#broker_keystone_adrenaline_junkie_sub_1) | 未見明確矛盾 |
| [振奮怒火](#broker_keystone_adrenaline_junkie_sub_3) | 未見明確矛盾 |
| [腎上腺素突破](#broker_keystone_adrenaline_junkie_sub_5) | 未見明確矛盾 |
| [失控攻擊](#broker_keystone_adrenaline_junkie_sub_4) | 未見明確矛盾 |
| [腎上腺素懲戒者](#broker_keystone_adrenaline_junkie_sub_2) | 未見明確矛盾 |
| [過街老鼠](#broker_passive_longer_dodges) | 未見明確矛盾 |
| [快速且致命](#broker_passive_close_range_damage_on_dodge) | 未見明確矛盾 |
| [特提恩是迎賓](#broker_passive_first_target_damage) | 未見明確矛盾 |
| [打你的臉](#broker_passive_close_ranged_damage) | 未見明確矛盾 |
| [精準暴力](#broker_passive_restore_toughness_on_weakspot_kill) | 未見明確矛盾 |
| [特提恩之聲](#broker_passive_restore_toughness_on_close_ranged_kill) | 未見明確矛盾 |
| [翩翩蝶舞](#broker_passive_ninja_grants_crit_chance) | 未見明確矛盾 |
| [快速裝填](#broker_passive_reload_speed_on_close_kill) | 未見明確矛盾 |
| [能量爆發](#broker_passive_stun_immunity_on_toughness_broken) | 未見明確矛盾 |
| [韌性增幅](#base_toughness_node_buff_medium_1) | 未見明確矛盾 |
| [恢復姿態](#broker_passive_stamina_on_successful_dodge) | 未見明確矛盾 |
| [奧客](#broker_passive_dodge_melee_on_slide) | 未見明確矛盾 |
| [沒甚麼，只是擦傷](#broker_passive_replenish_toughness_on_ranged_toughness_damage) | 未見明確矛盾 |
| [狂轟猛射](#broker_passive_damage_on_reload) | 未見明確矛盾 |
| [堅韌疾速](#broker_passive_stamina_grants_atk_speed) | 未見明確矛盾 |
| [加重背刺](#broker_passive_ramping_backstabs) | 未見明確矛盾 |
| [移動目標](#broker_passive_increased_ranged_dodges) | 未見明確矛盾 |
| [樣本採集](#broker_passive_stimm_cd_on_kill) | 繁中原文誤譯 |
| [神經質](#broker_passive_improved_dodges_at_full_stamina) | 未見明確矛盾 |
| [暴擊幾率增幅](#base_crit_chance_node_buff_low_1) | 未見明確矛盾 |
| [近戰增幅](#base_melee_damage_node_buff_medium_1) | 未見明確矛盾 |
| [強效毒藥](#base_toxin_power_boost_1) | 未見明確矛盾 |
| [黏黏手](#broker_passive_reduce_swap_time) | 未見明確矛盾 |
| [請求暫停](#broker_passive_reduced_toughness_damage_during_reload) | 未見明確矛盾 |
| [街頭硬漢](#broker_passive_knockback_on_taking_melee_damage) | 未見明確矛盾 |
| [蓄力殲滅](#broker_passive_crit_grants_damage) | 未見明確矛盾 |
| [猛烈劈擊](#broker_passive_melee_cleave_on_melee_kill) | 未見明確矛盾 |
| [超暴力](#broker_passive_melee_damage_carry_over) | 未見明確矛盾 |
| [劇毒菌株](#broker_passive_toxin_infected_enemies_take_increased_damage) | 未見明確矛盾 |
| [毒藥狂熱](#broker_passive_damage_after_toxined_enemies) | 未見明確矛盾 |
| [連帶傷害](#broker_passive_toxin_spread_on_kills) | 未見明確矛盾 |
| [額外彈藥袋](#broker_passive_increased_blitz_ammo) | 未見明確矛盾 |
| [塗讀武裝](#broker_passive_melee_attacks_apply_toxin) | 未見明確矛盾 |
| [隨身毒素](#broker_passive_blitz_inflicts_toxin) | 未見明確矛盾 |
| [精準投毒](#broker_passive_reduced_damage_by_toxined) | 未見明確矛盾 |
| [毒性再生](#broker_passive_replenish_toughness_while_toxined_enemies_in_proximity) | 未見明確矛盾 |
| [軍火商](#broker_passive_extended_mag) | 未見明確矛盾 |
| [趁人之危](#broker_passive_damage_vs_heavy_staggered) | 未見明確矛盾 |
| [心狠手辣](#broker_passive_melee_crit_instakill) | 未見明確矛盾 |
| [以小搏大](#broker_passive_damage_vs_elites_monsters) | 未見明確矛盾 |
| [甜蜜點](#broker_passive_increased_weakspot_damage) | 未見明確矛盾 |
| [延長藥效](#broker_passive_stimm_increased_duration) | 未見明確矛盾 |
| [神佑興奮劑](#broker_passive_stimm_cleanse_on_kill) | 未見明確矛盾 |
| [巢都格鬥家](#broker_passive_dr_damage_tradeoff_on_stamina) | 未見明確矛盾 |
| [順手牽羊](#broker_passive_low_ammo_regen) | 未見明確矛盾 |
| [趁勝追擊](#broker_passive_cleave_on_cleave) | 未見明確矛盾 |
| [裝備財閥特殊裝備](#broker_stimm_activation_talent) | 未見明確中英矛盾 |
| [野火I](#broker_stimm_combat_1) | 未見明確中英矛盾 |
| [野火IV](#broker_stimm_combat_4a) | 未見明確中英矛盾 |
| [野火II](#broker_stimm_combat_2) | 未見明確中英矛盾 |
| [野火III](#broker_stimm_combat_3) | 未見明確中英矛盾 |
| [狂怒I](#broker_stimm_combat_4b) | 未見明確中英矛盾 |
| [狂怒II](#broker_stimm_combat_5b) | 未見明確中英矛盾 |
| [野火V](#broker_stimm_combat_5a) | 未見明確中英矛盾 |
| [獵鷹蕈劑I](#broker_stimm_combat_4c) | 未見明確中英矛盾 |
| [獵鷹蕈劑II](#broker_stimm_combat_5c) | 未見明確中英矛盾 |
| [抗焦慮藥I](#broker_stimm_concentration_1) | 未見明確中英矛盾 |
| [抗焦慮藥II](#broker_stimm_concentration_2) | 未見明確中英矛盾 |
| [抗焦慮藥III](#broker_stimm_concentration_3) | 未見明確中英矛盾 |
| [抗焦慮藥IV](#broker_stimm_concentration_4) | 未見明確中英矛盾 |
| [抗焦慮藥V](#broker_stimm_concentration_5a) | 未見明確中英矛盾 |
| [彈幕I](#broker_stimm_durability_1) | 未見明確中英矛盾 |
| [彈幕II](#broker_stimm_durability_2) | 未見明確中英矛盾 |
| [彈幕III](#broker_stimm_durability_3) | 未見明確中英矛盾 |
| [彈幕IV](#broker_stimm_durability_4) | 未見明確中英矛盾 |
| [坦克](#broker_stimm_durability_5a) | 未見明確中英矛盾 |
| [激勵I](#broker_stimm_celerity_1) | 未見明確中英矛盾 |
| [狂熱](#broker_stimm_celerity_5c) | 未見明確中英矛盾 |
| [激勵II](#broker_stimm_celerity_2) | 未見明確中英矛盾 |
| [激勵III](#broker_stimm_celerity_3) | 未見明確中英矛盾 |
| [激勵IV](#broker_stimm_celerity_4) | 未見明確中英矛盾 |
| [激勵V](#broker_stimm_celerity_5a) | 未見明確中英矛盾 |
| [恢復](#broker_stimm_durability_5b) | 未見明確中英矛盾 |
| [狂熱](#broker_stimm_concentration_5b) | 待遊戲內核對：文字75%，固定實作56.25% |
| [集中藥](#broker_stimm_concentration_5c) | 待遊戲內核對：文字75%，固定實作56.25% |
| [反射](#broker_stimm_celerity_5b) | 未見明確中英矛盾 |

<a id="broker_blitz_flash_grenade_improved"></a>
## 擊暈(Blackout)

- 描述鍵：`loc_talent_broker_blitz_flash_grenade_improved_desc`；hash：`44ce3a9a`。
- 結論：繁中原文誤譯。繁中明寫每20次「近戰擊殺」，同源英文是Close Range Kills，固定程式亦不限定近戰。
- 繁中原文短引：快速投擲手雷，可使敵人陷入踉蹌。
- 同源英文：Quick to use Grenade that staggers enemies.
- [原始碼推導與限制](broker_blitz_flash_grenade_improved.md)。

<a id="broker_blitz_missile_launcher"></a>
## 炸彈使者(Boom Bringer)

- 描述鍵：`loc_talent_broker_blitz_missile_launcher_desc`；hash：`fad7e488`。
- 結論：未見明確矛盾。兩語均描述飛彈及攜帶上限；爆炸範圍、分段傷害與恢復方式為補充。
- [原始碼推導與限制](broker_blitz_missile_launcher.md)。

<a id="broker_blitz_tox_grenade"></a>
## 化學手榴彈(Chem Grenade)

- 描述鍵：`loc_talent_broker_blitz_tox_grenade_desc_02`；hash：`cbe2dc42`。
- 結論：未見明確矛盾。繁中與英文皆為15秒毒區、最多6層與死亡爆炸；離區後殘留效果為補充。
- [原始碼推導與限制](broker_blitz_tox_grenade.md)。

<a id="broker_aura_gunslinger_improved"></a>
## 精進神射手(Gunslinger Improved)

- 描述鍵：`loc_talent_broker_aura_gunslinger_improved_desc`；hash：`03a59c5c`。
- 結論：未見明確矛盾。兩語皆說協同撿取分享10%；各人依容量換算是公式補充，特殊補給不讀modifier的程式例外留待場景驗證。
- [原始碼推導與限制](broker_aura_gunslinger_improved.md)。

<a id="broker_coherency_melee_damage"></a>
## 惡棍(Ruffian)

- 描述鍵：`loc_talent_broker_aura_ruffian_desc`；hash：`a241f5b9`。
- 結論：未見明確矛盾。繁中與英文均為協同近戰增傷，未見矛盾。
- [原始碼推導與限制](broker_coherency_melee_damage.md)。

<a id="broker_coherency_anarchist"></a>
## 無政府主義者(Anarchist)

- 描述鍵：`loc_talent_broker_aura_anarchist_desc`；hash：`d1ab227e`。
- 結論：未見明確矛盾。繁中與英文均為協同爆擊率提升，未見矛盾。
- [原始碼推導與限制](broker_coherency_anarchist.md)。

<a id="broker_ability_focus_improved"></a>
## 強化亡命之徒(Enhanced Desperado)

- 描述鍵：`loc_talent_broker_ability_focus_improved_desc`；hash：`a1148a57`。
- 結論：未見明確中英矛盾。繁中與英文都描述遠程攻擊視同閃避、衝刺免耗耐力並加速、近距離標記與遠程擊殺延長；固定版本設定值與計時邏輯相符。針槍毒素的額外追蹤條件是程式補充，原文省略不作勘誤。
- [原始碼推導與限制](broker_ability_focus_improved.md)。

<a id="broker_ability_stimm_field"></a>
## 化學性依賴(Stimm Supply)

- 描述鍵：`loc_talent_broker_ability_stimm_field_desc_3`；hash：`81b45839`。
- 結論：未見明確中英矛盾。繁中與英文都描述地面氣體場域、持續治療腐敗、腐敗免疫與分享已裝備興奮劑效果；設定 20 秒、0.25 秒間隔、每次 0.5 點與範圍觸發相符。冷卻暫停及裝備消耗細節是程式補充，不是原文矛盾。
- [原始碼推導與限制](broker_ability_stimm_field.md)。

<a id="broker_ability_punk_rage"></a>
## 橫衝直撞！(Rampage!)

- 描述鍵：`loc_talent_broker_ability_punk_rage_desc_3`；hash：`be0f1026`。
- 結論：未見中英翻譯差異（壓制免疫未由程式證實）。繁中與英文對恢復韌性、近戰威力、攻擊速度、減傷、近戰命中延長及冷卻值的描述一致；0.75 承傷倍率等於減傷25%。兩語都寫壓制免疫，但固定版本狀態未掛壓制免疫標記，記為程式與文案落差，非翻譯矛盾。
- [原始碼推導與限制](broker_ability_punk_rage.md)。

<a id="broker_ability_punk_rage_sub_2"></a>
## 熔爐怒吼(Pulverising Strikes)

- 描述鍵：`loc_talent_broker_ability_punk_rage_sub_2_desc`；hash：`fb3a2cef`。
- 結論：未見明確中英矛盾。繁中與英文都寫怒火期間增加橫掃，並按持續時間每秒取得近戰威力、最多10次；程式給每層2.5%與10層上限。+50%橫掃來自格式值，沒有翻譯差異。
- [原始碼推導與限制](broker_ability_punk_rage_sub_2.md)。

<a id="broker_ability_punk_rage_sub_1"></a>
## 凝聚殺意(Channelled Aggression)

- 描述鍵：`loc_talent_broker_ability_punk_rage_sub_1_desc_02`；hash：`472cc8e5`。
- 結論：未見明確中英矛盾。繁中與英文都將效果限制在怒火期間的近戰重攻擊，並描述撕裂；設定及傷害計算的適用條件一致。設定內另有0.5進度值，但不是原文翻譯差異。
- [原始碼推導與限制](broker_ability_punk_rage_sub_1.md)。

<a id="broker_ability_punk_rage_sub_3"></a>
## 沸騰之血(Forge's Bellow)

- 描述鍵：`loc_talent_broker_ability_punk_rage_sub_3_desc_02`；hash：`aa1fa2de`。
- 結論：未見中英翻譯差異（攻擊間隔百分比與程式值不相符）。繁中與英文皆稱攻擊間隔增加50%，因此沒有兩語反向翻譯。固定版本程式卻把敵人 melee_attack_speed 設為-0.5；按速度倒數，單計此效果攻擊間隔約變兩倍（增加100%），另有遠程攻擊不受此近戰欄位影響。故記錄程式與文字數值落差，不填翻譯勘誤。
- [原始碼推導與限制](broker_ability_punk_rage_sub_3.md)。

<a id="broker_ability_punk_rage_sub_4"></a>
## 碎骨打擊(Boiling Blood)

- 描述鍵：`loc_talent_broker_ability_punk_rage_sub_4_desc`；hash：`43686b03`。
- 結論：未見明確中英矛盾。繁中與英文都描述精英／怪物命中可延長1秒、遞減門檻延至30秒；程式證據確認特殊標籤命中使用該值。專家與隊長標籤也適用是程式補充，不是原文反向。
- [原始碼推導與限制](broker_ability_punk_rage_sub_4.md)。

<a id="broker_ability_focus_sub_3"></a>
## 專注凝神(Focused Resolve)

- 描述鍵：`loc_talent_broker_ability_focus_sub_3_desc`；hash：`5ba532cd`。
- 結論：未見中英翻譯差異（觸發條件由程式補充）。繁中與英文都寫標記敵人擊殺恢復0.5秒、精英或專家恢復1秒、上限5秒，數值相符。固定版本程式的普通擊殺檢查是近距離遠程擊殺，沒有另外檢查標記旗標；針槍毒素死亡是有追蹤及距離條件的特例，原文省略不等於翻譯錯誤。
- [原始碼推導與限制](broker_ability_focus_sub_3.md)。

<a id="broker_ability_focus_sub_2"></a>
## 精準獵殺(Pick Your Targets)

- 描述鍵：`loc_talent_broker_ability_focus_sub_2_desc`；hash：`4946598e`。
- 結論：未見明確中英矛盾。繁中與英文都寫專注期間遠程攻擊加撕裂，並由擊殺累積遠程傷害、最多5層；設定數值為撕裂0.15、每層遠程傷害0.03、上限5層。近距離檢查與針槍追蹤是程式細節補充。
- [原始碼推導與限制](broker_ability_focus_sub_2.md)。

<a id="broker_ability_stimm_field_sub_3"></a>
## 熟練部署(Practiced Deployment)

- 描述鍵：`loc_talent_broker_ability_stimm_field_sub_3_desc`；hash：`88b27852`。
- 結論：未見翻譯差異（程式以半秒輪詢觸發）。繁中與英文都表示取得可用興奮劑後可使能力準備就緒，觸發條件一致。固定版本實際以0.5秒間隔檢查，且只恢復到充能上限；這是文案時序及充能上限補充，不構成中英矛盾。
- [原始碼推導與限制](broker_ability_stimm_field_sub_3.md)。

<a id="broker_ability_stimm_field_sub_1"></a>
## 速效型興奮劑(Fast Acting Stimms)

- 描述鍵：`loc_talent_broker_ability_stimm_field_sub_1_desc`；hash：`8022348e`。
- 結論：未見明確中英矛盾。繁中與英文都描述場域縮短至5秒、離開後效果再持續15秒；固定版程式在離場與場域結束時都讓已套用效果延續15秒。冷卻在場域本體結束後恢復是程式補充。
- [原始碼推導與限制](broker_ability_stimm_field_sub_1.md)。

<a id="broker_ability_stimm_field_sub_2"></a>
## 毒性陷阱(Booby Trap)

- 描述鍵：`loc_talent_broker_ability_stimm_field_sub_2_desc`；hash：`59a6d46b`。
- 結論：未見明確中英矛盾。繁中與英文都寫場域時間結束後爆炸，並對附近敵人施加7層毒素。傷害 profile 的 on_damage_dealt 實際只對受爆炸正傷害目標加入7層，屬程式觸發條件補充，原文省略不構成翻譯勘誤。
- [原始碼推導與限制](broker_ability_stimm_field_sub_2.md)。

<a id="broker_passive_improved_dodges"></a>
## 靈巧(Nimble)

- 描述鍵：`loc_talent_broker_passive_improved_dodges_desc_02`；hash：`1cc9786f`。
- 結論：未見明確矛盾。繁中與英文都描述閃避速度提高及被視為閃避的時間延長；25% 倍率、0.15 秒加值和各攻擊類型的判定方式均由固定版本程式設定支持。
- [原始碼推導與限制](broker_passive_improved_dodges.md)。

<a id="broker_keystone_adrenaline_junkie"></a>
## 腎上腺素狂暴(Adrenaline Frenzy)

- 描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_desc`；hash：`b4493ff1`。
- 結論：未見明確矛盾。繁中與英文一致描述近戰命中、暴擊額外層、2 秒失層、30 層門檻及 10 秒近戰攻速／傷害增益；實際層數與重新計時細節由固定版本的 buff 消費邏輯補足。
- [原始碼推導與限制](broker_keystone_adrenaline_junkie.md)。

<a id="broker_keystone_vultures_mark_on_kill"></a>
## 兀鷲印記(Vulture's Mark)

- 描述鍵：`loc_talent_broker_keystone_vultures_mark_on_kill_desc`；hash：`5b5c21fe`。
- 結論：未見明確矛盾。繁中與英文一致描述遠程擊殺精英／專家後取得印記、每層三項 5% 加成及滿層回韌性。程式另有 Needlepistol 近距離毒素死亡路徑，屬文字省略的特殊實作，不與標準描述衝突。
- [原始碼推導與限制](broker_keystone_vultures_mark_on_kill.md)。

<a id="broker_keystone_chemical_dependency"></a>
## 化學性依賴(Chemical Dependency)

- 描述鍵：`loc_talent_broker_keystone_chemical_dependency_desc`；hash：`e80edf15`。
- 結論：未見明確矛盾。繁中與英文一致描述使用興奮劑取得層數、每層的技能冷卻增幅、上限與逐層衰退；程式把增幅實作為戰鬥技能資源回充倍率，並由共用 syringe event 同時支援直接使用及 Stimm Field。
- [原始碼推導與限制](broker_keystone_chemical_dependency.md)。

<a id="broker_keystone_chemical_dependency_sub_1"></a>
## 化學強化(Chem Enhanced)

- 描述鍵：`loc_talent_broker_keystone_chemical_dependency_sub_1_desc`；hash：`3356ae07`。
- 結論：未見明確矛盾。繁中與英文均表示每一層化學依賴性提升爆擊率；程式值為每層 0.05，按層數加到通用爆擊率，而非暴擊傷害。
- [原始碼推導與限制](broker_keystone_chemical_dependency_sub_1.md)。

<a id="broker_keystone_chemical_dependency_sub_2"></a>
## 化學增強(Chem Fortified)

- 描述鍵：`loc_talent_broker_keystone_chemical_dependency_sub_2_desc`；hash：`bd5bf1c2`。
- 結論：未見明確矛盾。繁中與英文都說使用興奮劑回補韌性、每層依賴效果提供韌性傷害減免；程式值為最大韌性的 50% 回補與每層 0.95 韌性傷害倍率。
- [原始碼推導與限制](broker_keystone_chemical_dependency_sub_2.md)。

<a id="broker_keystone_chemical_dependency_sub_3"></a>
## 化學藥劑全開(Maxed Out Chems)

- 描述鍵：`loc_talent_broker_keystone_chemical_dependency_sub_3_desc`；hash：`80f78eef`。
- 結論：未見明確矛盾。繁中與英文都指出每層改為 60 秒並將上限提高到 4；程式透過增加堆疊上限並把核心 90 秒時長減少 30 秒實作。
- [原始碼推導與限制](broker_keystone_chemical_dependency_sub_3.md)。

<a id="broker_keystone_vultures_mark_aoe_stagger"></a>
## 兀鷲推擊(Vulture's Push)

- 描述鍵：`loc_talent_broker_keystone_vultures_mark_aoe_stagger_desc`；hash：`d98831c7`。
- 結論：未見明確矛盾。繁中與英文都描述遠程擊殺精英／專家時推開附近敵人；程式設定 3 公尺爆炸及中等踉蹌，沒有直接攻擊傷害。
- [原始碼推導與限制](broker_keystone_vultures_mark_aoe_stagger.md)。

<a id="broker_keystone_vultures_mark_increased_duration"></a>
## 堅毅獵手(Patient Hunter)

- 描述鍵：`loc_talent_broker_keystone_vultures_mark_increased_duration_desc`；hash：`2a61076a`。
- 結論：未見明確矛盾。繁中與英文都將兀鷲印記持續時間列為 12 秒；程式以核心 8 秒加上 4 秒差額實作，且每次新增堆疊或重設持續時間會重設共享計時。
- [原始碼推導與限制](broker_keystone_vultures_mark_increased_duration.md)。

<a id="broker_keystone_vultures_mark_dodge_on_ranged_crit"></a>
## 兀鷲閃避(Vulture's Dodge)

- 描述鍵：`loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit_desc`；hash：`c8880e0b`。
- 結論：未見明確矛盾。繁中與英文稱「所有攻擊」視為閃避；本版 Dodge.is_dodging 的實際 keyword 分支覆蓋 melee、incapacitating_grab（依 melee 規則）及 ranged，並未設 count_as_dodge_vs_all，故解讀依該函式實際查詢的攻擊類型。
- [原始碼推導與限制](broker_keystone_vultures_mark_dodge_on_ranged_crit.md)。

<a id="broker_keystone_adrenaline_junkie_sub_1"></a>
## 腎上腺素刺客(Adrenaline Assassin)

- 描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_1_desc`；hash：`02bab200`。
- 結論：未見明確矛盾。繁中與英文都表示弱點命中額外給 2 層且一般近戰命中不再給基本層；原核心的暴擊額外層仍由同一處理流程保留。
- [原始碼推導與限制](broker_keystone_adrenaline_junkie_sub_1.md)。

<a id="broker_keystone_adrenaline_junkie_sub_3"></a>
## 振奮怒火(Stoked Rage)

- 描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_3_desc`；hash：`95b51a39`。
- 結論：未見明確矛盾。繁中與英文均表示狂暴持續時間提升至 20 秒；程式以核心 10 秒及升級 20 秒的差額調整 buff 時長。
- [原始碼推導與限制](broker_keystone_adrenaline_junkie_sub_3.md)。

<a id="broker_keystone_adrenaline_junkie_sub_5"></a>
## 腎上腺素突破(Adrenaline Unbound)

- 描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_5_desc`；hash：`1af84a83`。
- 結論：未見明確矛盾。繁中與英文都把恢復效果限定在狂暴期間，設定值為每秒 5%；程式使用最大韌性百分比回補並由韌性缺額限制實際值。
- [原始碼推導與限制](broker_keystone_adrenaline_junkie_sub_5.md)。

<a id="broker_keystone_adrenaline_junkie_sub_4"></a>
## 失控攻擊(Uncontrolled Aggression)

- 描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_4_desc`；hash：`fb871cba`。
- 結論：未見明確矛盾。繁中與英文均表示腎上腺素層的持續時間提高至 4 秒；程式把核心 2 秒計時增加到 4 秒，且共享 buff 邏輯在每次移除一層後重新計時。
- [原始碼推導與限制](broker_keystone_adrenaline_junkie_sub_4.md)。

<a id="broker_keystone_adrenaline_junkie_sub_2"></a>
## 腎上腺素懲戒者(Adrenaline Smiter)

- 描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_2_desc`；hash：`e0b9d68a`。
- 結論：未見明確矛盾。繁中與英文都把額外層限定於擊殺，並排除非擊殺命中；程式另確認一般擊殺 +4、elite tag 擊殺再 +10，暴擊的核心額外層仍保留。
- [原始碼推導與限制](broker_keystone_adrenaline_junkie_sub_2.md)。

<a id="broker_passive_longer_dodges"></a>
## 過街老鼠(Alley Rat)

- 描述鍵：`loc_talent_broker_passive_longer_dodges_desc`；hash：`22b08fe3`。
- 結論：未見明確矛盾。繁中「閃避距離」與英文 Dodge Distance 指向同一 stat；程式在基準倍率上增加 50%，實際閃避距離按完整距離公式計算。
- [原始碼推導與限制](broker_passive_longer_dodges.md)。

<a id="broker_passive_close_range_damage_on_dodge"></a>
## 快速且致命(Quick and Deadly)

- 描述鍵：`loc_talent_broker_passive_close_range_damage_on_dodge_desc`；hash：`0410a6ec`。
- 結論：未見明確矛盾。同源繁中與英文均描述成功閃避後近距離增傷；未列距離衰減公式屬補充，不列勘誤。
- [原始碼推導與限制](broker_passive_close_range_damage_on_dodge.md)。

<a id="broker_passive_first_target_damage"></a>
## 特提恩是迎賓(A Tertium Welcome)

- 描述鍵：`loc_talent_broker_passive_first_target_damage_desc`；hash：`4ebbdbb2`。
- 結論：未見明確矛盾。繁中與英文皆明確限定每次近戰攻擊的第一個目標，未見矛盾。
- [原始碼推導與限制](broker_passive_first_target_damage.md)。

<a id="broker_passive_close_ranged_damage"></a>
## 打你的臉(In Your Face)

- 描述鍵：`loc_talent_broker_passive_close_ranged_damage_desc`；hash：`be48df80`。
- 結論：未見明確矛盾。繁中與英文的近遠端值及距離一致；兩文概括為遠程傷害，固定實作依手持遠程欄位啟用。此條件補充不當成明確誤譯。
- [原始碼推導與限制](broker_passive_close_ranged_damage.md)。

<a id="broker_passive_restore_toughness_on_weakspot_kill"></a>
## 精準暴力(Precision Violence)

- 描述鍵：`loc_talent_broker_passive_restore_toughness_on_weakspot_kill_desc`；hash：`d91c10cd`。
- 結論：未見明確矛盾。同源繁中與英文的三種比例一致；未交代同次揮擊去重及更高比例再恢復屬補充。
- [原始碼推導與限制](broker_passive_restore_toughness_on_weakspot_kill.md)。

<a id="broker_passive_restore_toughness_on_close_ranged_kill"></a>
## 特提恩之聲(Voice of Tertium)

- 描述鍵：`loc_talent_broker_passive_restore_toughness_on_close_ranged_kill_desc`；hash：`7f8728ae`。
- 結論：未見明確矛盾。繁中與英文皆寫遠程擊殺及8%／15%恢復；兩者省略近距離限制，屬描述不完整，不列勘誤。
- [原始碼推導與限制](broker_passive_restore_toughness_on_close_ranged_kill.md)。

<a id="broker_passive_ninja_grants_crit_chance"></a>
## 翩翩蝶舞(Float Like a Butterfly)

- 描述鍵：`loc_talent_broker_passive_ninja_grants_crit_chance_desc`；hash：`43d506f8`。
- 結論：未見明確矛盾。繁中與英文皆為完美格擋或成功閃避提高爆擊率，未見矛盾。
- [原始碼推導與限制](broker_passive_ninja_grants_crit_chance.md)。

<a id="broker_passive_reload_speed_on_close_kill"></a>
## 快速裝填(Speedloader)

- 描述鍵：`loc_talent_broker_passive_reload_speed_on_close_kill_desc`；hash：`f9ccd2c5`。
- 結論：未見明確矛盾。同源英文限定Close Ranged Kill；繁中省略遠程且參數位置不順，但仍可理解為近距離擊殺後加快換彈，依規則不將省略或措辭不佳判成明確勘誤。
- [原始碼推導與限制](broker_passive_reload_speed_on_close_kill.md)。

<a id="broker_passive_stun_immunity_on_toughness_broken"></a>
## 能量爆發(Burst of Energy)

- 描述鍵：`loc_talent_broker_passive_stun_immunity_on_toughness_broken_desc`；hash：`261ee901`。
- 結論：未見明確矛盾。繁中與英文均列6秒免暈、50%韌性及10秒冷卻；未說明冷卻起算點屬補充，不列錯誤。
- [原始碼推導與限制](broker_passive_stun_immunity_on_toughness_broken.md)。

<a id="base_toughness_node_buff_medium_1"></a>
## 韌性增幅(Toughness Boost)

- 描述鍵：`loc_talent_toughness_boost_medium_desc`；hash：`329702b6`。
- 結論：未見明確矛盾。同源繁中與英文都是最大韌性增加，未見明確矛盾。
- [原始碼推導與限制](base_toughness_node_buff_medium_1.md)。

<a id="broker_passive_stamina_on_successful_dodge"></a>
## 恢復姿態(Regained Posture)

- 描述鍵：`loc_talent_broker_passive_stamina_on_successful_dodge_desc`；hash：`022ffbe4`。
- 結論：未見明確矛盾。兩語皆為成功閃避恢復耐力，未見矛盾。
- [原始碼推導與限制](broker_passive_stamina_on_successful_dodge.md)。

<a id="broker_passive_dodge_melee_on_slide"></a>
## 奧客(Slippery Customer)

- 描述鍵：`loc_talent_broker_passive_dodge_melee_on_slide_desc`；hash：`2eb1aa86`。
- 結論：未見明確矛盾。繁中用「視作閃避成功」、英文為count as Dodging；說明補清楚狀態與實際成功事件的差異，暫不將措辭本身定為明確勘誤。
- [原始碼推導與限制](broker_passive_dodge_melee_on_slide.md)。

<a id="broker_passive_replenish_toughness_on_ranged_toughness_damage"></a>
## 沒甚麼，只是擦傷(Tis but a Scratch)

- 描述鍵：`loc_talent_broker_passive_replenish_toughness_on_ranged_toughness_damage_desc`；hash：`6f652e30`。
- 結論：未見明確矛盾。兩語均描述遠程命中後恢復韌性；重新計時與耗盡中止為補充，不列錯誤。
- [原始碼推導與限制](broker_passive_replenish_toughness_on_ranged_toughness_damage.md)。

<a id="broker_passive_damage_on_reload"></a>
## 狂轟猛射(Unload)

- 描述鍵：`loc_talent_broker_passive_damage_on_reload_desc`；hash：`6645de88`。
- 結論：未見明確矛盾。兩語都提供換彈後按消耗彈藥增傷；重設與整段取整屬補充。
- [原始碼推導與限制](broker_passive_damage_on_reload.md)。

<a id="broker_passive_stamina_grants_atk_speed"></a>
## 堅韌疾速(Swift Endurance)

- 描述鍵：`loc_talent_broker_passive_stamina_grants_atk_speed_desc`；hash：`15f411fc`。
- 結論：未見明確矛盾。兩語都依目前耐力給予攻速；取整與程式上限為補充。
- [原始碼推導與限制](broker_passive_stamina_grants_atk_speed.md)。

<a id="broker_passive_ramping_backstabs"></a>
## 加重背刺(Ramping Backstabs)

- 描述鍵：`loc_talent_broker_passive_ramping_backstabs_desc`；hash：`2f7fcac8`。
- 結論：未見明確矛盾。兩語皆為背刺提高強度、非背刺清空；威力與最終傷害的區別屬補充。
- [原始碼推導與限制](broker_passive_ramping_backstabs.md)。

<a id="broker_passive_increased_ranged_dodges"></a>
## 移動目標(Moving Target)

- 描述鍵：`loc_talent_broker_passive_increased_ranged_dodges_desc`；hash：`a7db2b5d`。
- 結論：未見明確矛盾。英文Effective Dodges與繁中「閃避效率」用詞不同；補清楚其為次數，依保守標準不把缺少量詞直接列為錯誤。
- [原始碼推導與限制](broker_passive_increased_ranged_dodges.md)。

<a id="broker_passive_stimm_cd_on_kill"></a>
## 樣本採集(Sample Collector)

- 描述鍵：`loc_talent_broker_passive_stimm_cd_seconds_on_kill_desc`；hash：`f234d4bf`。
- 結論：繁中原文誤譯。同源繁中把{toxin}放在「擊殺…名受感染的敵人」的數量位置；英文是Toxined Enemy，參數代表毒素狀態而非人數。
- 繁中原文短引：擊殺可縮減{stimm:%s}的冷卻時間{restore:%s}秒。擊殺{toxin:%s}名受感染的敵人，反而會恢復{restore_toxined:%s}秒。
- 同源英文：Kills reduce {restore:%s}s of your {stimm:%s} Cooldown. Killing {toxin:%s} infected Enemies instead restores {restore_toxined:%s}s.
- [原始碼推導與限制](broker_passive_stimm_cd_on_kill.md)。

<a id="broker_passive_improved_dodges_at_full_stamina"></a>
## 神經質(Jittery)

- 描述鍵：`loc_talent_broker_passive_improved_dodges_at_full_stamina_desc`；hash：`abe61ad9`。
- 結論：未見明確矛盾。繁中與英文均寫「超過75%」，固定來源使用包含等於的>=。因兩種文字一致，且實際行為尚待遊戲內核對，記為邊界差異待遊戲內核對，不列繁中誤譯。
- [原始碼推導與限制](broker_passive_improved_dodges_at_full_stamina.md)。

<a id="base_crit_chance_node_buff_low_1"></a>
## 暴擊幾率增幅(Critical Chance Boost)

- 描述鍵：`loc_talent_crit_chance_low_desc`；hash：`3019333a`。
- 結論：未見明確矛盾。兩語皆描述增加爆擊率，未見矛盾。
- [原始碼推導與限制](base_crit_chance_node_buff_low_1.md)。

<a id="base_melee_damage_node_buff_medium_1"></a>
## 近戰增幅(Melee Damage Boost)

- 描述鍵：`loc_talent_melee_damage_boost_medium_desc`；hash：`7b5da013`。
- 結論：未見明確矛盾。兩語均為近戰傷害增加，未見矛盾。
- [原始碼推導與限制](base_melee_damage_node_buff_medium_1.md)。

<a id="base_toxin_power_boost_1"></a>
## 強效毒藥(Potent Tox)

- 描述鍵：`loc_talent_toxin_damage_boost_desc`；hash：`f89ff0b1`。
- 結論：未見明確矛盾。兩語都是毒素強度，未見明確矛盾。
- [原始碼推導與限制](base_toxin_power_boost_1.md)。

<a id="broker_passive_reduce_swap_time"></a>
## 黏黏手(Sticky Hands)

- 描述鍵：`loc_talent_broker_passive_reduce_swap_time_desc`；hash：`dd6f6b11`。
- 結論：未見明確矛盾。兩語均描述切換速度、腰射或架槍的後座力及散佈，未見矛盾。
- [原始碼推導與限制](broker_passive_reduce_swap_time.md)。

<a id="broker_passive_reduced_toughness_damage_during_reload"></a>
## 請求暫停(Calling for a Time Out)

- 描述鍵：`loc_talent_broker_passive_reduced_toughness_damage_during_reload_desc`；hash：`b4e891ca`。
- 結論：未見明確矛盾。繁中語序較不順，但與英文同為換彈期間及之後的韌性減傷，不列勘誤。
- [原始碼推導與限制](broker_passive_reduced_toughness_damage_during_reload.md)。

<a id="broker_passive_knockback_on_taking_melee_damage"></a>
## 街頭硬漢(Street Tough)

- 描述鍵：`loc_talent_broker_passive_knockback_on_taking_melee_damage_desc_02`；hash：`f7be7408`。
- 結論：未見明確矛盾。兩語都是受近戰攻擊觸發擊退與移速；未提排除敵人屬補充。
- [原始碼推導與限制](broker_passive_knockback_on_taking_melee_damage.md)。

<a id="broker_passive_crit_grants_damage"></a>
## 蓄力殲滅(Channelled Devastation)

- 描述鍵：`loc_talent_broker_passive_crit_grants_damage_desc`；hash：`ef095720`。
- 結論：未見明確矛盾。兩語均依目前爆擊率產生近戰增傷，未見矛盾。
- [原始碼推導與限制](broker_passive_crit_grants_damage.md)。

<a id="broker_passive_melee_cleave_on_melee_kill"></a>
## 猛烈劈擊(Battering Strikes)

- 描述鍵：`loc_talent_broker_passive_melee_cleave_on_melee_kill_desc`；hash：`3e88fbf2`。
- 結論：未見明確矛盾。兩語皆為近戰擊殺後疊加順劈，未見矛盾。
- [原始碼推導與限制](broker_passive_melee_cleave_on_melee_kill.md)。

<a id="broker_passive_melee_damage_carry_over"></a>
## 超暴力(Hyper-Violence)

- 描述鍵：`loc_talent_broker_passive_melee_damage_carry_over_desc`；hash：`821fa540`。
- 結論：未見明確矛盾。繁中「溢出傷害」與英文差額定義一致；續殺扣回目前加傷與替換規則為補充。
- [原始碼推導與限制](broker_passive_melee_damage_carry_over.md)。

<a id="broker_passive_toxin_infected_enemies_take_increased_damage"></a>
## 劇毒菌株(Virulent Strain)

- 描述鍵：`loc_talent_broker_passive_toxin_infected_enemies_take_increased_damage_desc`；hash：`b7e6d44b`。
- 結論：未見明確矛盾。繁中與英文都描述感染後受到傷害增加；提前結束及疊層為補充。
- [原始碼推導與限制](broker_passive_toxin_infected_enemies_take_increased_damage.md)。

<a id="broker_passive_damage_after_toxined_enemies"></a>
## 毒藥狂熱(Toxin Mania)

- 描述鍵：`loc_talent_broker_damage_after_toxined_enemies_desc`；hash：`f70dc769`。
- 結論：未見明確矛盾。兩語都按附近感染敵人數量增傷，距離及來源不限為補充。
- [原始碼推導與限制](broker_passive_damage_after_toxined_enemies.md)。

<a id="broker_passive_toxin_spread_on_kills"></a>
## 連帶傷害(Splash Damage)

- 描述鍵：`loc_talent_broker_passive_toxin_spread_on_kills_desc_02`；hash：`a94fd4a3`。
- 結論：未見明確矛盾。兩語均為近戰擊殺精英後擴散；對已感染目標的2層門檻屬補充。
- [原始碼推導與限制](broker_passive_toxin_spread_on_kills.md)。

<a id="broker_passive_increased_blitz_ammo"></a>
## 額外彈藥袋(Extra Pouches)

- 描述鍵：`loc_talent_broker_passive_increased_blitz_ammo_desc`；hash：`0e811057`。
- 結論：未見明確矛盾。兩語均為增加閃擊充能數量，未見矛盾。
- [原始碼推導與限制](broker_passive_increased_blitz_ammo.md)。

<a id="broker_passive_melee_attacks_apply_toxin"></a>
## 塗讀武裝(Coated Weaponry)

- 描述鍵：`loc_talent_broker_passive_melee_attacks_apply_toxin_desc`；hash：`4108cdaa`。
- 結論：未見明確矛盾。繁中與英文皆為近戰爆擊施加毒素，未見矛盾。
- [原始碼推導與限制](broker_passive_melee_attacks_apply_toxin.md)。

<a id="broker_passive_blitz_inflicts_toxin"></a>
## 隨身毒素(Pocket Toxin)

- 描述鍵：`loc_talent_broker_passive_blitz_inflicts_toxin_desc_02`；hash：`8757c0f2`。
- 結論：未見明確矛盾。兩語按閃擊種類列出施毒層數，未見矛盾。
- [原始碼推導與限制](broker_passive_blitz_inflicts_toxin.md)。

<a id="broker_passive_reduced_damage_by_toxined"></a>
## 精準投毒(Targeted Toxin)

- 描述鍵：`loc_talent_broker_passive_reduced_damage_by_toxined_desc`；hash：`615c771b`。
- 結論：未見明確矛盾。英文寫你感染、繁中省略施毒者；屬條件不完整，依規則不列誤譯。
- [原始碼推導與限制](broker_passive_reduced_damage_by_toxined.md)。

<a id="broker_passive_replenish_toughness_while_toxined_enemies_in_proximity"></a>
## 毒性再生(Toxic Renewal)

- 描述鍵：`loc_talent_broker_passive_replenish_toughness_while_toxined_enemies_in_proximity_desc`；hash：`c1d98f78`。
- 結論：未見明確矛盾。兩語均描述範圍、間隔、每敵人恢復量與上限，未見矛盾。
- [原始碼推導與限制](broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.md)。

<a id="broker_passive_extended_mag"></a>
## 軍火商(Ammo Jack)

- 描述鍵：`loc_talent_broker_passive_extended_mag_desc`；hash：`414a3799`。
- 結論：未見明確矛盾。兩語均明確寫出無條件進位，未見矛盾。
- [原始碼推導與限制](broker_passive_extended_mag.md)。

<a id="broker_passive_damage_vs_heavy_staggered"></a>
## 趁人之危(Cheap Shots)

- 描述鍵：`loc_talent_broker_passive_damage_vs_heavy_staggered_desc_02`；hash：`6dc4e3b1`。
- 結論：未見明確矛盾。兩語均以15%替換10%的總加成，未見矛盾。
- [原始碼推導與限制](broker_passive_damage_vs_heavy_staggered.md)。

<a id="broker_passive_melee_crit_instakill"></a>
## 心狠手辣(Hyper-Critical)

- 描述鍵：`loc_talent_broker_passive_melee_crit_instakill_desc`；hash：`41e81648`。
- 結論：未見明確矛盾。繁中省略近戰限定，屬不完整；英文的2倍門檻可用命中前生命解釋，不列明確誤譯。
- [原始碼推導與限制](broker_passive_melee_crit_instakill.md)。

<a id="broker_passive_damage_vs_elites_monsters"></a>
## 以小搏大(Punching Above One's Weight)

- 描述鍵：`loc_talent_broker_passive_damage_vs_elites_monsters_desc`；hash：`a7b80936`。
- 結論：未見明確矛盾。兩語皆為精英與怪物增傷，未見矛盾。
- [原始碼推導與限制](broker_passive_damage_vs_elites_monsters.md)。

<a id="broker_passive_increased_weakspot_damage"></a>
## 甜蜜點(The Sweet Spot)

- 描述鍵：`loc_talent_broker_passive_increased_weakspot_damage_desc`；hash：`54b98b85`。
- 結論：未見明確矛盾。繁中與英文都簡寫弱點傷害，公式缺漏不是描述錯誤；補上不同武器的總增幅差異。
- [原始碼推導與限制](broker_passive_increased_weakspot_damage.md)。

<a id="broker_passive_stimm_increased_duration"></a>
## 延長藥效(Long Lasting)

- 描述鍵：`loc_talent_broker_passive_stimm_increased_duration_desc`；hash：`905ad5d9`。
- 結論：未見明確矛盾。兩語都是興奮劑持續時間加5秒，未見矛盾。
- [原始碼推導與限制](broker_passive_stimm_increased_duration.md)。

<a id="broker_passive_stimm_cleanse_on_kill"></a>
## 神佑興奮劑(Blessed Stimms)

- 描述鍵：`loc_talent_broker_passive_stimm_cleanse_on_kill_desc`；hash：`565482d8`。
- 結論：未見明確矛盾。兩語均稱每次用藥最多50%；固定程式最後一次可能跨門檻，屬程式與兩語共同文案的邊界落差，不列繁中誤譯。
- [原始碼推導與限制](broker_passive_stimm_cleanse_on_kill.md)。

<a id="broker_passive_dr_damage_tradeoff_on_stamina"></a>
## 巢都格鬥家(Hive City Brawler)

- 描述鍵：`loc_talent_broker_passive_dr_damage_tradeoff_on_stamina_desc`；hash：`2fe3c231`。
- 結論：未見明確矛盾。兩語均按剩餘耐力減傷、已用耐力增傷，未見矛盾。
- [原始碼推導與限制](broker_passive_dr_damage_tradeoff_on_stamina.md)。

<a id="broker_passive_low_ammo_regen"></a>
## 順手牽羊(Pickpocket)

- 描述鍵：`loc_talent_broker_passive_low_ammo_regen_desc_04`；hash：`aa6ac8e6`。
- 結論：未見明確矛盾。兩語均為低於門檻才補到門檻，未見矛盾。
- [原始碼推導與限制](broker_passive_low_ammo_regen.md)。

<a id="broker_passive_cleave_on_cleave"></a>
## 趁勝追擊(Battering Momentum)

- 描述鍵：`loc_talent_broker_passive_cleave_on_cleave_desc`；hash：`04b9c8f2`。
- 結論：未見明確矛盾。兩語均為一次命中至少3名後，下次攻擊增加順劈；消耗事件的細節為補充。
- [原始碼推導與限制](broker_passive_cleave_on_cleave.md)。

<a id="broker_stimm_activation_talent"></a>
## 裝備財閥特殊裝備(Equip Cartel Special)

- 描述鍵：`loc_talent_broker_stimm_activation_talent_desc`；hash：`95c45406`。
- 結論：未見明確中英矛盾。同鍵文字說明裝備專用興奮劑。固定版中央起始圖示無點選動作；裝備條件實際取決於是否選取任何配方。這是介面操作補充，不列繁中誤譯。
- [原始碼推導與限制](broker_stimm_activation_talent.md)。

<a id="broker_stimm_combat_1"></a>
## 野火I(Wildfire I)

- 描述鍵：`loc_talent_stat_power_level`；hash：`f8a49d31`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_combat_1.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_power_level` / `f8a49d31` | {power_level:%s}力量。 | {power_level:%s} Strength. |

<a id="broker_stimm_combat_4a"></a>
## 野火IV(Wildfire IV)

- 描述鍵：`loc_talent_stat_power_level / loc_talent_stat_finesse_modifier_bonus`；hash：`f8a49d31 / b004d6a5`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_combat_4a.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_power_level` / `f8a49d31` | {power_level:%s}力量。 | {power_level:%s} Strength. |
| `loc_talent_stat_finesse_modifier_bonus` / `b004d6a5` | {finesse_modifier_bonus:%s}靈巧。 | {finesse_modifier_bonus:%s} Finesse. |

<a id="broker_stimm_combat_2"></a>
## 野火II(Wildfire II)

- 描述鍵：`loc_talent_stat_power_level`；hash：`f8a49d31`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_combat_2.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_power_level` / `f8a49d31` | {power_level:%s}力量。 | {power_level:%s} Strength. |

<a id="broker_stimm_combat_3"></a>
## 野火III(Wildfire III)

- 描述鍵：`loc_talent_stat_power_level`；hash：`f8a49d31`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_combat_3.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_power_level` / `f8a49d31` | {power_level:%s}力量。 | {power_level:%s} Strength. |

<a id="broker_stimm_combat_4b"></a>
## 狂怒I(Fury I)

- 描述鍵：`loc_talent_stat_power_level / loc_talent_stat_rending_multiplier`；hash：`f8a49d31 / 0dd2df4e`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_combat_4b.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_power_level` / `f8a49d31` | {power_level:%s}力量。 | {power_level:%s} Strength. |
| `loc_talent_stat_rending_multiplier` / `0dd2df4e` | {rending_multiplier:%s}撕裂。 | {rending_multiplier:%s} Rending. |

<a id="broker_stimm_combat_5b"></a>
## 狂怒II(Fury II)

- 描述鍵：`loc_talent_stat_power_level / loc_talent_stat_rending_multiplier`；hash：`f8a49d31 / 0dd2df4e`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_combat_5b.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_power_level` / `f8a49d31` | {power_level:%s}力量。 | {power_level:%s} Strength. |
| `loc_talent_stat_rending_multiplier` / `0dd2df4e` | {rending_multiplier:%s}撕裂。 | {rending_multiplier:%s} Rending. |

<a id="broker_stimm_combat_5a"></a>
## 野火V(Wildfire V)

- 描述鍵：`loc_talent_stat_power_level / loc_talent_stat_finesse_modifier_bonus`；hash：`f8a49d31 / b004d6a5`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_combat_5a.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_power_level` / `f8a49d31` | {power_level:%s}力量。 | {power_level:%s} Strength. |
| `loc_talent_stat_finesse_modifier_bonus` / `b004d6a5` | {finesse_modifier_bonus:%s}靈巧。 | {finesse_modifier_bonus:%s} Finesse. |

<a id="broker_stimm_combat_4c"></a>
## 獵鷹蕈劑I(Vultoprene I)

- 描述鍵：`loc_talent_stat_power_level / loc_talent_stat_critical_strike_chance`；hash：`f8a49d31 / a4e46663`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_combat_4c.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_power_level` / `f8a49d31` | {power_level:%s}力量。 | {power_level:%s} Strength. |
| `loc_talent_stat_critical_strike_chance` / `a4e46663` | {critical_strike_chance:%s}爆擊率。 | {critical_strike_chance:%s} Critical Strike Chance. |

<a id="broker_stimm_combat_5c"></a>
## 獵鷹蕈劑II(Vultoprene II)

- 描述鍵：`loc_talent_stat_power_level / loc_talent_stat_critical_strike_chance`；hash：`f8a49d31 / a4e46663`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_combat_5c.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_power_level` / `f8a49d31` | {power_level:%s}力量。 | {power_level:%s} Strength. |
| `loc_talent_stat_critical_strike_chance` / `a4e46663` | {critical_strike_chance:%s}爆擊率。 | {critical_strike_chance:%s} Critical Strike Chance. |

<a id="broker_stimm_concentration_1"></a>
## 抗焦慮藥I(Kalma I)

- 描述鍵：`loc_talent_stat_combat_ability_cooldown_regen_modifier`；hash：`04d3484f`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_concentration_1.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_combat_ability_cooldown_regen_modifier` / `04d3484f` | {combat_ability_cooldown_regen_modifier:%s}冷卻恢復。 | {combat_ability_cooldown_regen_modifier:%s} Cooldown Regeneration. |

<a id="broker_stimm_concentration_2"></a>
## 抗焦慮藥II(Kalma II)

- 描述鍵：`loc_talent_stat_combat_ability_cooldown_regen_modifier`；hash：`04d3484f`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_concentration_2.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_combat_ability_cooldown_regen_modifier` / `04d3484f` | {combat_ability_cooldown_regen_modifier:%s}冷卻恢復。 | {combat_ability_cooldown_regen_modifier:%s} Cooldown Regeneration. |

<a id="broker_stimm_concentration_3"></a>
## 抗焦慮藥III(Kalma III)

- 描述鍵：`loc_talent_stat_combat_ability_cooldown_regen_modifier`；hash：`04d3484f`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_concentration_3.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_combat_ability_cooldown_regen_modifier` / `04d3484f` | {combat_ability_cooldown_regen_modifier:%s}冷卻恢復。 | {combat_ability_cooldown_regen_modifier:%s} Cooldown Regeneration. |

<a id="broker_stimm_concentration_4"></a>
## 抗焦慮藥IV(Kalma IV)

- 描述鍵：`loc_talent_stat_combat_ability_cooldown_regen_modifier`；hash：`04d3484f`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_concentration_4.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_combat_ability_cooldown_regen_modifier` / `04d3484f` | {combat_ability_cooldown_regen_modifier:%s}冷卻恢復。 | {combat_ability_cooldown_regen_modifier:%s} Cooldown Regeneration. |

<a id="broker_stimm_concentration_5a"></a>
## 抗焦慮藥V(Kalma V)

- 描述鍵：`loc_talent_stat_combat_ability_cooldown_regen_modifier`；hash：`04d3484f`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_concentration_5a.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_combat_ability_cooldown_regen_modifier` / `04d3484f` | {combat_ability_cooldown_regen_modifier:%s}冷卻恢復。 | {combat_ability_cooldown_regen_modifier:%s} Cooldown Regeneration. |

<a id="broker_stimm_durability_1"></a>
## 彈幕I(Barrage I)

- 描述鍵：`loc_talent_stat_toughness_replenish_modifier / loc_talent_stat_damage_taken_multiplier / loc_talent_buff_toughness_on_stimm`；hash：`805fdb71 / 9a749a67 / 75149821`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_durability_1.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_toughness_replenish_modifier` / `805fdb71` | 恢復{toughness_replenish_modifier:%s}韌性。 | {toughness_replenish_modifier:%s} Toughness Replenishment. |
| `loc_talent_stat_damage_taken_multiplier` / `9a749a67` | 減少{damage_taken_multiplier:%s}傷害。 | {damage_taken_multiplier:%s} Damage Reduction. |
| `loc_talent_buff_toughness_on_stimm` / `75149821` | 恢復{toughness_amount:%s}韌性。 | Replenish {toughness_amount:%s} Toughness. |

<a id="broker_stimm_durability_2"></a>
## 彈幕II(Barrage II)

- 描述鍵：`loc_talent_stat_toughness_replenish_modifier / loc_talent_stat_damage_taken_multiplier / loc_talent_buff_toughness_on_stimm`；hash：`805fdb71 / 9a749a67 / 75149821`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_durability_2.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_toughness_replenish_modifier` / `805fdb71` | 恢復{toughness_replenish_modifier:%s}韌性。 | {toughness_replenish_modifier:%s} Toughness Replenishment. |
| `loc_talent_stat_damage_taken_multiplier` / `9a749a67` | 減少{damage_taken_multiplier:%s}傷害。 | {damage_taken_multiplier:%s} Damage Reduction. |
| `loc_talent_buff_toughness_on_stimm` / `75149821` | 恢復{toughness_amount:%s}韌性。 | Replenish {toughness_amount:%s} Toughness. |

<a id="broker_stimm_durability_3"></a>
## 彈幕III(Barrage III)

- 描述鍵：`loc_talent_stat_toughness_replenish_modifier / loc_talent_stat_damage_taken_multiplier / loc_talent_buff_toughness_on_stimm`；hash：`805fdb71 / 9a749a67 / 75149821`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_durability_3.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_toughness_replenish_modifier` / `805fdb71` | 恢復{toughness_replenish_modifier:%s}韌性。 | {toughness_replenish_modifier:%s} Toughness Replenishment. |
| `loc_talent_stat_damage_taken_multiplier` / `9a749a67` | 減少{damage_taken_multiplier:%s}傷害。 | {damage_taken_multiplier:%s} Damage Reduction. |
| `loc_talent_buff_toughness_on_stimm` / `75149821` | 恢復{toughness_amount:%s}韌性。 | Replenish {toughness_amount:%s} Toughness. |

<a id="broker_stimm_durability_4"></a>
## 彈幕IV(Barrage IV)

- 描述鍵：`loc_talent_stat_toughness_replenish_modifier / loc_talent_stat_damage_taken_multiplier / loc_talent_buff_toughness_on_stimm`；hash：`805fdb71 / 9a749a67 / 75149821`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_durability_4.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_toughness_replenish_modifier` / `805fdb71` | 恢復{toughness_replenish_modifier:%s}韌性。 | {toughness_replenish_modifier:%s} Toughness Replenishment. |
| `loc_talent_stat_damage_taken_multiplier` / `9a749a67` | 減少{damage_taken_multiplier:%s}傷害。 | {damage_taken_multiplier:%s} Damage Reduction. |
| `loc_talent_buff_toughness_on_stimm` / `75149821` | 恢復{toughness_amount:%s}韌性。 | Replenish {toughness_amount:%s} Toughness. |

<a id="broker_stimm_durability_5a"></a>
## 坦克(Tank)

- 描述鍵：`loc_talent_stat_toughness_replenish_modifier`；hash：`805fdb71`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_durability_5a.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_toughness_replenish_modifier` / `805fdb71` | 恢復{toughness_replenish_modifier:%s}韌性。 | {toughness_replenish_modifier:%s} Toughness Replenishment. |

<a id="broker_stimm_celerity_1"></a>
## 激勵I(Spur I)

- 描述鍵：`loc_talent_stat_attack_speed / loc_talent_stat_wield_speed`；hash：`a2530496 / d0347040`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_celerity_1.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_attack_speed` / `a2530496` | {attack_speed:%s}攻擊速度。 | {attack_speed:%s} Attack Speed. |
| `loc_talent_stat_wield_speed` / `d0347040` | {wield_speed:%s}武器切換速度。 | {wield_speed:%s} Weapon Swap Speed. |

<a id="broker_stimm_celerity_5c"></a>
## 狂熱(Fervor)

- 描述鍵：`loc_talent_stat_movement_speed / loc_talent_stat_dodge_distance_modifier / loc_talent_stat_dodge_speed_multiplier / loc_talent_stat_dodge_cooldown_reset_modifier`；hash：`090b8be4 / ac38ced9 / f5994101 / 1863559c`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_celerity_5c.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_movement_speed` / `090b8be4` | {movement_speed:%s}移動速度。 | {movement_speed:%s} Movement Speed. |
| `loc_talent_stat_dodge_distance_modifier` / `ac38ced9` | {dodge_distance_modifier:%s}閃避距離。 | {dodge_distance_modifier:%s} Dodge Distance. |
| `loc_talent_stat_dodge_speed_multiplier` / `f5994101` | {dodge_speed_multiplier:%s}閃避速度。 | {dodge_speed_multiplier:%s} Dodge Speed. |
| `loc_talent_stat_dodge_cooldown_reset_modifier` / `1863559c` | {dodge_cooldown_reset_modifier:%s}閃避恢復速度。 | {dodge_cooldown_reset_modifier:%s} Dodge Recovery Speed. |

<a id="broker_stimm_celerity_2"></a>
## 激勵II(Spur II)

- 描述鍵：`loc_talent_stat_attack_speed / loc_talent_stat_wield_speed / loc_talent_stat_stamina_cost_multiplier`；hash：`a2530496 / d0347040 / 26fbf08f`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_celerity_2.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_attack_speed` / `a2530496` | {attack_speed:%s}攻擊速度。 | {attack_speed:%s} Attack Speed. |
| `loc_talent_stat_wield_speed` / `d0347040` | {wield_speed:%s}武器切換速度。 | {wield_speed:%s} Weapon Swap Speed. |
| `loc_talent_stat_stamina_cost_multiplier` / `26fbf08f` | {stamina_cost_multiplier:%s}體力消耗。 | {stamina_cost_multiplier:%s} Stamina Cost. |

<a id="broker_stimm_celerity_3"></a>
## 激勵III(Spur III)

- 描述鍵：`loc_talent_stat_attack_speed / loc_talent_stat_stamina_cost_multiplier`；hash：`a2530496 / 26fbf08f`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_celerity_3.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_attack_speed` / `a2530496` | {attack_speed:%s}攻擊速度。 | {attack_speed:%s} Attack Speed. |
| `loc_talent_stat_stamina_cost_multiplier` / `26fbf08f` | {stamina_cost_multiplier:%s}體力消耗。 | {stamina_cost_multiplier:%s} Stamina Cost. |

<a id="broker_stimm_celerity_4"></a>
## 激勵IV(Spur IV)

- 描述鍵：`loc_talent_stat_attack_speed / loc_talent_stat_stamina_cost_multiplier`；hash：`a2530496 / 26fbf08f`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_celerity_4.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_attack_speed` / `a2530496` | {attack_speed:%s}攻擊速度。 | {attack_speed:%s} Attack Speed. |
| `loc_talent_stat_stamina_cost_multiplier` / `26fbf08f` | {stamina_cost_multiplier:%s}體力消耗。 | {stamina_cost_multiplier:%s} Stamina Cost. |

<a id="broker_stimm_celerity_5a"></a>
## 激勵V(Spur V)

- 描述鍵：`loc_talent_stat_attack_speed / loc_talent_keyword_stun_immune / loc_talent_keyword_slowdown_immune`；hash：`a2530496 / a6fe7bf4 / 5936af23`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_celerity_5a.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_attack_speed` / `a2530496` | {attack_speed:%s}攻擊速度。 | {attack_speed:%s} Attack Speed. |
| `loc_talent_keyword_stun_immune` / `a6fe7bf4` | 獲得眩暈免疫。 | Grants Stun Immunity. |
| `loc_talent_keyword_slowdown_immune` / `5936af23` | 獲得緩速免疫。 | Grants Slowdown Immunity. |

<a id="broker_stimm_durability_5b"></a>
## 恢復(Regain)

- 描述鍵：`loc_talent_buff_toughness_during_stimm`；hash：`6dd3d484`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_durability_5b.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_buff_toughness_during_stimm` / `6dd3d484` | 每{interval:%s}秒恢復{toughness_amount:%s}韌性。 | Replenish {toughness_amount:%s} Toughness every {interval:%s} seconds. |

<a id="broker_stimm_concentration_5b"></a>
## 狂熱(Hypex)

- 描述鍵：`loc_talent_buff_cooldown_on_melee_kills`；hash：`9c1a429b`。
- 結論：待遊戲內核對：文字75%，固定實作56.25%。同源繁中與英文都使用cooldown=75%參數；固定Buff數值.75又乘配方倍率.75，實際.5625。兩語一致，不能當作繁中翻譯錯誤。
- [原始碼推導與限制](broker_stimm_concentration_5b.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_buff_cooldown_on_melee_kills` / `9c1a429b` | 效果持續期間，近戰擊殺可獲得{cooldown:%s}冷卻時間恢復速度，持續{duration:%s}秒。 | While active, Melee Kills grant {cooldown:%s} Ability Cooldown Regeneration for {duration:%s}s. |

<a id="broker_stimm_concentration_5c"></a>
## 集中藥(Klay)

- 描述鍵：`loc_talent_buff_cooldown_on_ranged_kills`；hash：`676aa37d`。
- 結論：待遊戲內核對：文字75%，固定實作56.25%。同源繁中與英文都使用cooldown=75%參數；固定Buff數值.75又乘配方倍率.75，實際.5625。兩語一致，不能當作繁中翻譯錯誤。
- [原始碼推導與限制](broker_stimm_concentration_5c.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_buff_cooldown_on_ranged_kills` / `676aa37d` | 效果持續期間，遠程擊殺可獲得{cooldown:%s}冷卻時間恢復速度，持續{duration:%s}秒。 | While active, Ranged Kills grant {cooldown:%s} Ability Cooldown Regeneration for {duration:%s}s. |

<a id="broker_stimm_celerity_5b"></a>
## 反射(Reflex)

- 描述鍵：`loc_talent_stat_reload_speed / loc_talent_stat_recoil_modifier`；hash：`9020f1a1 / 302c7f95`。
- 結論：未見明確中英矛盾。逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。
- [原始碼推導與限制](broker_stimm_celerity_5b.md)。

| 組成描述鍵 / hash | 繁中原文 | 同源英文 |
|---|---|---|
| `loc_talent_stat_reload_speed` / `9020f1a1` | {reload_speed:%s}裝彈速度。 | {reload_speed:%s} Reload Speed. |
| `loc_talent_stat_recoil_modifier` / `302c7f95` | {recoil_modifier:%s}後座力。 | {recoil_modifier:%s} Recoil. |

## 固定版實作與文字的其他差異

下列項目與同源英文也有落差，或涉及邊界解讀；本機文字與固定來源版本對應為1.13.1，不能逕列為繁中誤譯。

- [橫衝直撞！](broker_ability_punk_rage.md)：兩語均寫壓制免疫，固定狀態未掛對應免疫；主頁只列能由程式確認的效果。
- [熔爐怒吼](broker_ability_punk_rage_sub_2.md)：兩語寫敵人攻擊間隔增加50%；固定程式為攻速減50%，無其他修正時1秒動作變2秒。
- [神佑興奮劑](broker_passive_stimm_cleanse_on_kill.md)：50%為停止判定門檻，最後一次恢復可能越過門檻，並非強制把累計量截在50%。
- [兀鷲閃避](broker_keystone_vultures_mark_dodge_on_ranged_crit.md)：原文概括所有攻擊；固定關鍵字只涵蓋近戰、採近戰規則的擒抱與遠程閃避判定，不代表所有傷害無效。
- [狂熱](broker_stimm_concentration_5b.md)：顯示參數75%，固定版實際0.75×0.75=56.25%。
- [集中藥](broker_stimm_concentration_5c.md)：顯示參數75%，固定版實際0.75×0.75=56.25%。

## 基礎與條件式效果

5項基礎說明亦已依各自描述鍵核對中英：亡命之徒、閃光彈、神射手、迅如疾風及財閥專員，未另發現明確的中英效果矛盾。迅如疾風的角度說法需結合實際55°側向判定閱讀；其省略公式不列誤譯。條件式 `broker_syringe` 只有硬編英文佔位描述，沒有獨立語系鍵，與財閥專員和配方說明交叉引用，不虛構一組原文。
