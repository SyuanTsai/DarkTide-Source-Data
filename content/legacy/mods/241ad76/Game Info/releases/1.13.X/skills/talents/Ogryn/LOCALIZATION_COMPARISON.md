# 歐格林：遊戲本體繁中描述比對

[English](en/LOCALIZATION_COMPARISON.md)

[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)

- 原文：本機 Steam Build 25606770，2026-10-02 擷取，ui 資源；繁中與英文依同一描述鍵／hash 配對。完整文字存於本版本 source/SteamBuild_25606770_1.13.1/，整個 Build 目錄受 Git 忽略。
- 機制：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。文字與程式來源皆為1.13.1；文字與實作的差異仍需遊戲內核對。
- 只有明確的效果方向、作用對象或數量／單位矛盾列為勘誤；省略機制或算例不算錯誤。

- 覆蓋 86／86 個同鍵／hash 描述：6 項繁中勘誤、7 項跨來源待核、73 項未見明確矛盾。

| 技能 | 結論 |
|---|---|
| [投彈完畢！](#ogryn_box_explodes) | 未見明確矛盾 |
| [破片炸彈](#ogryn_grenade_frag) | 未見明確矛盾 |
| [投石問路](#ogryn_grenade_friend_rock) | 未見明確矛盾 |
| [那下不算！](#ogryn_replenish_rock_on_miss) | 跨來源待遊戲內核對 |
| [超巨量傷害箱](#ogryn_big_box_of_hurt_more_bombs) | 未見明確矛盾 |
| [破骨者之環](#ogryn_melee_damage_coherency_improved) | 未見明確矛盾 |
| [優勝劣汰](#ogryn_damage_vs_suppressed_coherency) | 未見明確矛盾 |
| [跟緊我！](#ogryn_toughness_regen_aura) | 未見明確矛盾 |
| [忠誠守護者](#ogryn_taunt_shout) | 未見明確矛盾 |
| [不屈不撓](#ogryn_longer_charge) | 未見明確矛盾 |
| [貼身火力](#ogryn_special_ammo) | 未見明確矛盾 |
| [跺殺之靴](#ogryn_charge_toughness) | 未見明確矛盾 |
| [粉碎](#ogryn_charge_applies_bleed) | 未見明確矛盾 |
| [再來](#ogryn_taunt_staggers_reduce_cooldown) | 未見明確矛盾 |
| [槍林彈雨](#ogryn_special_ammo_armor_pen) | 未見明確矛盾 |
| [集火射擊](#ogryn_special_ammo_fire_shots) | 未見明確矛盾 |
| [重要干擾](#ogryn_taunt_damage_taken_increase) | 未見明確矛盾 |
| [壯膽子彈](#ogryn_ranged_stance_toughness_regen) | 未見明確矛盾 |
| [一點都不痛！](#ogryn_taunt_restore_toughness) | 跨來源待遊戲內核對 |
| [踐踏](#ogryn_charge_trample) | 未見明確矛盾 |
| [爆限超載](#ogryn_leadbelcher_no_ammo_chance) | 未見明確矛盾 |
| [麻木](#ogryn_carapace_armor) | 跨來源待遊戲內核對 |
| [重拳出擊](#ogryn_passive_heavy_hitter) | 未見明確矛盾 |
| [痛楚爆發](#ogryn_carapace_armor_trigger_on_zero_stacks) | 跨來源待遊戲內核對 |
| [最強壯！](#ogryn_carapace_armor_add_stack_on_push) | 未見明確矛盾 |
| [最堅韌！](#ogryn_carapace_armor_more_toughness) | 未見明確矛盾 |
| [最大火力](#ogryn_leadbelcher_cooldown_reduction) | 未見明確矛盾 |
| [好槍法](#ogryn_leadbelcher_crits) | 未見明確矛盾 |
| [子彈風暴](#ogryn_blo_ally_ranged_buffs) | 繁中描述錯誤 |
| [激鬥戰火](#ogryn_blo_wield_speed) | 未見明確矛盾 |
| [退後！](#ogryn_blo_melee) | 繁中描述錯誤 |
| [毫髮無傷](#ogryn_heavy_hitter_tdr) | 未見明確矛盾 |
| [強力劈砍](#ogryn_heavy_hitter_cleave) | 未見明確矛盾 |
| [越戰越勇](#ogryn_heavy_hitter_max_stacks_improves_toughness) | 未見明確矛盾 |
| [震撼衝擊](#ogryn_heavy_hitter_stagger) | 未見明確矛盾 |
| [熱身完畢](#ogryn_heavy_hitter_max_stacks_improves_attack_speed) | 未見明確矛盾 |
| [最好的防禦](#ogryn_multi_heavy_toughness) | 未見明確矛盾 |
| [碾碎它們！](#ogryn_single_heavy_toughness) | 未見明確矛盾 |
| [關鍵人物](#ogryn_increased_coherency_toughness) | 未見明確矛盾 |
| [射不停](#ogryn_reload_speed_on_empty) | 未見明確矛盾 |
| [怒不可遏](#ogryn_more_hits_more_damage) | 未見明確矛盾 |
| [重量級](#ogryn_ogryn_killer) | 未見明確矛盾 |
| [猛擊](#ogryn_melee_stagger) | 未見明確矛盾 |
| [削弱敵人](#ogryn_targets_recieve_damage_taken_increase_debuff) | 未見明確矛盾 |
| [堅韌不屈](#ogryn_toughness_on_low_health) | 未見明確矛盾 |
| [重毆](#ogryn_heavy_bleeds) | 未見明確矛盾 |
| [沉重打擊](#ogryn_staggering_increases_damage) | 未見明確矛盾 |
| [勢不可擋](#ogryn_movement_speed_after_ranged_kills) | 未見明確矛盾 |
| [彈藥儲存包](#ogryn_increased_ammo_reserve) | 未見明確矛盾 |
| [領跑者](#ogryn_multi_hits_grant_reload_speed) | 跨來源待遊戲內核對 |
| [發現更多](#ogryn_free_reload_after_ability) | 未見明確矛盾 |
| [絕不屈服](#ogryn_knocked_allies_grant_damage_reduction) | 未見明確矛盾 |
| [嘎嘎！](#ogryn_fully_charged_attacks_gain_damage_and_stagger) | 未見明確矛盾 |
| [毀滅之樂](#ogryn_nearby_bleeds_reduce_damage_taken) | 未見明確矛盾 |
| [韌性減傷](#base_toughness_damage_reduction_node_buff_medium_1) | 未見明確矛盾 |
| [相親相愛好夥伴！](#ogryn_damage_taken_by_all_increases_strength_tdr) | 繁中描述錯誤 |
| [全神貫注](#ogryn_ally_movement_boost_on_ability) | 未見明確矛盾 |
| [利刃出鞘](#ogryn_windup_reduces_damage_taken) | 未見明確矛盾 |
| [誰敢攔我！](#ogryn_windup_is_uninterruptible) | 未見明確矛盾 |
| [屠殺](#ogryn_kills_grant_crit_chance) | 未見明確矛盾 |
| [報復時間](#ogryn_revenge_damage) | 跨來源待遊戲內核對 |
| [主宰](#ogryn_rending_on_elite_kills) | 繁中描述錯誤 |
| [換彈完畢](#ogryn_reloading_grants_damage) | 未見明確矛盾 |
| [大爆炸](#ogryn_increase_explosion_radius) | 未見明確矛盾 |
| [睚眥必報](#ogryn_blocking_reduces_push_cost) | 未見明確矛盾 |
| [渴求關注](#ogryn_blocking_ranged_taunts) | 未見明確矛盾 |
| [為了小子們](#ogryn_protect_allies) | 未見明確矛盾 |
| [頭腦簡單](#ogryn_corruption_resistance) | 未見明確矛盾 |
| [專注鬥士](#ogryn_melee_attacks_give_mtdr) | 跨來源待遊戲內核對 |
| [蠻橫之力](#ogryn_pushing_applies_brittleness) | 未見明確矛盾 |
| [火力全開](#ogryn_explosions_burn) | 繁中描述錯誤 |
| [堅不可摧](#ogryn_block_all_attacks) | 未見明確矛盾 |
| [士氣高昂](#ogryn_damage_reduction_on_high_stamina) | 未見明確矛盾 |
| [好運連連](#ogryn_crit_damage_increase) | 未見明確矛盾 |
| [狂暴猛擊](#ogryn_stacking_attack_speed) | 未見明確矛盾 |
| [擊潰他們](#ogryn_melee_damage_after_heavy) | 未見明確矛盾 |
| [專注](#ogryn_drain_stamina_for_handling) | 未見明確矛盾 |
| [大肌肌](#ogryn_damage_reduction_after_elite_kill) | 未見明確矛盾 |
| [穩定握持](#ogryn_toughness_while_bracing) | 未見明確矛盾 |
| [休想再打中我......](#ogryn_ranged_damage_immunity) | 未見明確矛盾 |
| [熟能生巧](#ogryn_wield_speed_increase) | 繁中描述錯誤 |
| [射盡殺戮](#ogryn_ranged_improves_melee) | 未見明確矛盾 |
| [猛砸爆裂](#ogryn_melee_improves_ranged) | 未見明確矛盾 |
| [格鬥兵](#ogryn_ally_elite_kills_grant_cooldown) | 未見明確矛盾 |
| [精準打擊](#ogryn_weakspot_damage) | 未見明確矛盾 |
| [機動部署](#ogryn_bracing_reduces_damage_taken) | 未見明確矛盾 |

<a id="ogryn_box_explodes"></a>
## 投彈完畢！(Bombs Away!)

- 描述鍵：`loc_talent_bonebreaker_grenade_super_armor_explosion_desc`；hash：`a06fe566`。
- 結論：未見明確矛盾。同 hash a06fe566 的中英文都描述手雷箱擊中敵人後破開、在目標周圍散出手雷，且是基礎手雷箱的強化版；程式將基礎數量設為 6，數量修改器另加 3。傷害與引信數值是來源補充，不是原文逐字列出的內容。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。
- [原始碼推導與限制](ogryn_box_explodes.md)。

<a id="ogryn_grenade_frag"></a>
## 破片炸彈(Frag Bomb)

- 描述鍵：`loc_ability_ogryn_grenade_demolition_instakill_desc`；hash：`802d500b`。
- 結論：未見明確矛盾。同 hash 802d500b 的繁中與英文均說明爆炸半徑 16 公尺、爆心傷害較高，並將必殺對象限定為人類大小且非連長。來源同時設定半徑 16／近距離 2，並將巨獸、連長與歐格林排除在即死標記之外；原文沒有提供具體傷害公式，不視為錯誤。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。
- [原始碼推導與限制](ogryn_grenade_frag.md)。

<a id="ogryn_grenade_friend_rock"></a>
## 投石問路(Big Friendly Rock)

- 描述鍵：`loc_ability_ogryn_friend_rock_desc`；hash：`45cf696a`。
- 結論：未見明確矛盾。同 hash 45cf696a 的繁中與英文都描述單一目標投擲、對甲殼與不屈敵人效果較弱、每 45 秒取得一顆且最多持有 4 顆；能力設定直接確認 45 秒與 4 顆上限，投射物則使用直接命中傷害。未列出傷害公式屬省略，不據此判為翻譯錯誤。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。
- [原始碼推導與限制](ogryn_grenade_friend_rock.md)。

<a id="ogryn_replenish_rock_on_miss"></a>
## 那下不算！(That One Didn't Count)

- 描述鍵：`loc_talent_ogryn_replenish_rock_on_miss_desc`；hash：`af804692`。
- 結論：跨來源待遊戲內核對。同源中英都寫未命中任何敵人；固定程式的impact_hit在可受傷害目標分支設值，不限敵人，可破壞物品亦可能影響。實際表現待遊戲內核對，保留差異，不列繁中誤譯。
- [原始碼推導與限制](ogryn_replenish_rock_on_miss.md)。

<a id="ogryn_big_box_of_hurt_more_bombs"></a>
## 超巨量傷害箱(Bigger Box of Hurt)

- 描述鍵：`loc_talent_ogryn_big_box_of_hurt_more_bombs_desc`；hash：`858b20e9`。
- 結論：未見明確矛盾。同 hash 858b20e9 的繁中與英文都只說釋出 3 顆手雷；天賦設定明確把 3 加到手雷箱的基礎 6 顆，因此本草稿將實際生成數寫為 9 顆。原文沒有重述基礎 6 顆屬資訊省略，不列為誤譯。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。
- [原始碼推導與限制](ogryn_big_box_of_hurt_more_bombs.md)。

<a id="ogryn_melee_damage_coherency_improved"></a>
## 破骨者之環(Bonebreaker's Aura)

- 描述鍵：`loc_talent_damage_aura_improved_new`；hash：`68da370d`。
- 結論：未見明確矛盾。同 hash 68da370d 的繁中與英文都寫明你和協同盟友獲得近戰攻擊傷害加成，並指出此節點強化基礎近戰光環；設定值由基礎 7.5% 改為強化版 10%，因此不將兩者相加。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。
- [原始碼推導與限制](ogryn_melee_damage_coherency_improved.md)。

<a id="ogryn_damage_vs_suppressed_coherency"></a>
## 優勝劣汰(Coward Culling)

- 描述鍵：`loc_talent_ogryn_damage_vs_suppressed_new_desc`；hash：`4e68c42c`。
- 結論：未見明確矛盾。同 hash 4e68c42c 的中英文都明列你與協同盟友對受壓制敵人的傷害加成，以及持有者造成的壓制數值；設定分別為 +20% 傷害與 +25% 壓制，兩者作用對象不同。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。
- [原始碼推導與限制](ogryn_damage_vs_suppressed_coherency.md)。

<a id="ogryn_toughness_regen_aura"></a>
## 跟緊我！(Stay Close!)

- 描述鍵：`loc_talent_ogryn_toughness_regen_aura_desc`；hash：`89218b06`。
- 結論：未見明確矛盾。同 hash 89218b06 的繁中與英文都說明你與協同盟友獲得韌性恢復加成，未宣稱光環會自動恢復韌性。原始設定提高的是恢復量修正，而自然恢復使用另一個速率屬性。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。
- [原始碼推導與限制](ogryn_toughness_regen_aura.md)。

<a id="ogryn_taunt_shout"></a>
## 忠誠守護者(Loyal Protector)

- 描述鍵：`loc_ability_ogryn_taunt_shout_new_desc`；hash：`b6bbba98`。
- 結論：未見明確矛盾。繁中原文寫「吸引他們的炮火」；英文原文更明確寫成讓其「只攻擊你」，但兩者指向嘲諷敵人、範圍與持續時間相同，沒有相反效果。3秒與6秒重複施放的文字也相符；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- [原始碼推導與限制](ogryn_taunt_shout.md)。

<a id="ogryn_longer_charge"></a>
## 不屈不撓(Indomitable)

- 描述鍵：`loc_talent_ogryn_bull_rush_distance_desc`；hash：`64c5f9de`。
- 結論：未見明確矛盾。繁中原文稱衝鋒距離「增加至24」並說「撞到巨獸後衝鋒停止」；英文也寫距離增加至該值、碰撞巨獸時停止。兩種原文都列出5秒攻速與移速加成，沒有數值或效果方向衝突；衝鋒期間的基礎被動屬實作補充。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- [原始碼推導與限制](ogryn_longer_charge.md)。

<a id="ogryn_special_ammo"></a>
## 貼身火力(Point-Blank Barrage)

- 描述鍵：`loc_talent_ogryn_combat_ability_special_ammo_replenish_desc`；hash：`826d5678`。
- 結論：未見明確矛盾。繁中原文與英文原文都寫明啟動時切換並裝填遠程武器、姿態期間提升射速及換彈速度、近距離增傷，並在結束時返還消耗彈藥的一半；所列冷卻也一致。免費射擊計數納入返還是程式的細節補充，不是兩種原文互相矛盾；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- [原始碼推導與限制](ogryn_special_ammo.md)。

<a id="ogryn_charge_toughness"></a>
## 跺殺之靴(Stomping Boots)

- 描述鍵：`loc_talent_ogryn_toughness_on_bull_rush_desc`；hash：`59b32c78`。
- 結論：未見明確矛盾。繁中原文「每次使用衝鋒成功命中敵人可恢復10%韌性」和英文原文「每名被衝鋒命中的敵人恢復10%韌性」都將恢復綁定在衝鋒命中，數值一致。原文未區分最大韌性百分比或韌性缺口上限，這是恢復函式的實作細節；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- [原始碼推導與限制](ogryn_charge_toughness.md)。

<a id="ogryn_charge_applies_bleed"></a>
## 粉碎(Pulverise)

- 描述鍵：`loc_talent_ogryn_bleed_on_bull_rush_desc`；hash：`5f1e4b89`。
- 結論：未見明確矛盾。繁中原文「被衝鋒命中的敵人疊加5層流血」與英文原文「對衝鋒命中的敵人施加5層流血」指向同一觸發與層數；原文沒有說每個目標只觸發一次或傷害刻度，這些是實作補充而非翻譯矛盾。此配對的文字與公開原始碼皆為1.13.1；差異待遊戲內核對。
- [原始碼推導與限制](ogryn_charge_applies_bleed.md)。

<a id="ogryn_taunt_staggers_reduce_cooldown"></a>
## 再來(Go Again!)

- 描述鍵：`loc_talent_ogryn_taunt_stagger_cd_description`；hash：`7bd31d11`。
- 結論：未見明確矛盾。繁中原文「造成敵人暈眩使冷卻時間縮短」與英文原文「Staggering an Enemy replenishes Cooldown」都概述踉蹌與冷卻恢復；實作由近戰或推擊命中踉蹌中的敵人觸發 1.5%，不必重新造成踉蹌，且所有目標共用 0.1 秒間隔。中文使用「暈眩」而英文用「Stagger」，但效果方向一致，沒有明確相反描述；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- [原始碼推導與限制](ogryn_taunt_staggers_reduce_cooldown.md)。

<a id="ogryn_special_ammo_armor_pen"></a>
## 槍林彈雨(Hail of Fire)

- 描述鍵：`loc_talent_ogryn_special_ammo_armor_pen_new_desc`；hash：`5f4e17cf`。
- 結論：未見明確矛盾。繁中原文「附加15%撕裂效果並提高15%傷害」與英文原文「15% Rending and 15% Damage」都把兩項加成限定在姿態啟動時的遠程攻擊，數字與條件相符；裝甲倍率算例是把程式的撕裂消費端補出來，原文省略公式不構成翻譯矛盾。文字與程式來源皆為1.13.1；差異待遊戲內核對。
- [原始碼推導與限制](ogryn_special_ammo_armor_pen.md)。

<a id="ogryn_special_ammo_fire_shots"></a>
## 集火射擊(Light 'em Up)

- 描述鍵：`loc_talent_ogryn_special_ammo_fire_shots_new_desc`；hash：`a391c6e8`。
- 結論：未見明確矛盾。繁中原文說遠程攻擊加4層、最多16層；英文原文同樣列出每次遠程攻擊加4層與16層上限，層數與適用期間一致。兩種原文都省略每0.5秒的傷害和到期衰減，不能因此判成翻譯錯誤；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- [原始碼推導與限制](ogryn_special_ammo_fire_shots.md)。

<a id="ogryn_taunt_damage_taken_increase"></a>
## 重要干擾(Valuable Distraction)

- 描述鍵：`loc_talent_ogryn_taunt_damage_taken_increase_description`；hash：`07b19158`。
- 結論：未見明確矛盾。繁中原文說被忠誠守護者影響的敵人「承受所有來源的基礎傷害增加20%」；英文原文同樣說受影響敵人承受所有來源的基礎傷害增加20%。程式套用1.2承傷倍率與15秒重新計時，是原文未展開的計算方式；兩種描述沒有明確衝突，文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- [原始碼推導與限制](ogryn_taunt_damage_taken_increase.md)。

<a id="ogryn_ranged_stance_toughness_regen"></a>
## 壯膽子彈(Bullet Bravado)

- 描述鍵：`loc_talent_ogryn_special_ammo_toughness_on_shot_and_reload_desc`；hash：`626514ed`。
- 結論：未見明確矛盾。繁中原文逐字列出每發子彈恢復2.5%韌性、每次換彈恢復15%；英文原文對應列出每發射擊與每次換彈的相同數值。姿態啟動的自動換彈也會送出換彈事件，是消費端補充；數字與觸發沒有翻譯矛盾。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- [原始碼推導與限制](ogryn_ranged_stance_toughness_regen.md)。

<a id="ogryn_taunt_restore_toughness"></a>
## 一點都不痛！(No Pain!)

- 描述鍵：`loc_talent_ogryn_taunt_restore_toughness_new_desc`；hash：`03dc3a99`。
- 結論：跨來源待遊戲內核對。同源繁中與英文的恢復條件、比例與上限一致。固定來源描述格式duration為3秒，執行buff為3.25秒；這是共同顯示值與實作差異，實際顯示待遊戲內核對，不單憑此判定繁中誤譯。
- [原始碼推導與限制](ogryn_taunt_restore_toughness.md)。

<a id="ogryn_charge_trample"></a>
## 踐踏(Trample)

- 描述鍵：`loc_talent_ogryn_ability_charge_trample_desc`；hash：`fd34bb5c`。
- 結論：未見明確矛盾。繁中原文「命中的每個敵人都會使你獲得一層」與英文原文「for each enemy hit gain a stack」都按衝鋒命中敵人取得一層；兩種原文同樣列出每層傷害、10秒與20層上限，公式算例是將其轉成實際倍率，未發現明確矛盾。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- [原始碼推導與限制](ogryn_charge_trample.md)。

<a id="ogryn_leadbelcher_no_ammo_chance"></a>
## 爆限超載(Burst Limiter Override)

- 描述鍵：`loc_talent_ogryn_blo_new_alt_desc`；hash：`1b448166`。
- 結論：未見明確矛盾。繁中寫「遠程攻擊有…機率觸發幸運子彈，且不會消耗彈藥」及「遠程擊殺可提高…遠程傷害」，英文寫「chance of triggering Lucky Bullet and not consuming Ammo」及「gain … Ranged Damage on Ranged Kills」；觸發與擊殺兩部分的條件和效果相符。
- [原始碼推導與限制](ogryn_leadbelcher_no_ammo_chance.md)。

<a id="ogryn_carapace_armor"></a>
## 麻木(Feel No Pain)

- 描述鍵：`loc_talent_ogryn_carapace_armor_any_damage_desc`；hash：`cae1c616`。
- 結論：跨來源待遊戲內核對。繁中寫「每層獲得…韌性恢復和…減傷」，英文寫「Each Stack grants … Toughness Replenishment and … Damage Reduction」；兩種文字都使用未指明傷害種類的減傷措辭。固定公開來源只降低韌性所受傷害，不降低生命值所受傷害；文字與程式來源皆為1.13.1；這項範圍差異待遊戲內核對，不單憑此判定翻譯錯誤。
- [原始碼推導與限制](ogryn_carapace_armor.md)。

<a id="ogryn_passive_heavy_hitter"></a>
## 重拳出擊(Heavy Hitter)

- 描述鍵：`loc_talent_ogryn_passive_heavy_hitter_new_desc`；hash：`ccb2288d`。
- 結論：未見明確矛盾。繁中寫「近戰攻擊命中時，近戰傷害提高…；重擊命中時，獲得…層」，英文寫「…Melee Damage… on Melee Attack Hit… Gain … Stacks on Heavy Attack Hit」；層數來源、一般與重擊命中差異及近戰傷害加成一致。
- [原始碼推導與限制](ogryn_passive_heavy_hitter.md)。

<a id="ogryn_carapace_armor_trigger_on_zero_stacks"></a>
## 痛楚爆發(Pained Outburst)

- 描述鍵：`loc_talent_ogryn_carapace_armor_trigger_on_zero_stacks_new_desc`；hash：`d03260f0`。
- 結論：跨來源待遊戲內核對。繁中寫「當…層數達…層以下時」，英文寫「reaches … stacks or below」，兩種本機文字都表示 5 層或以下。固定公開來源在失去一層後檢查內部層數，換算為玩家可見 4 層或更低；文字與程式來源皆為1.13.1；實際表現待遊戲內核對，不單憑此判定翻譯錯誤。
- [原始碼推導與限制](ogryn_carapace_armor_trigger_on_zero_stacks.md)。

<a id="ogryn_carapace_armor_add_stack_on_push"></a>
## 最強壯！(Strongest!)

- 描述鍵：`loc_talent_ogryn_carapace_armor_add_stack_on_push_desc`；hash：`60ac22bf`。
- 結論：未見明確矛盾。繁中寫「推搡敵人恢復一層」，英文寫「Pushing Enemies restores one stack」；兩者都要求推搡敵人並說明恢復一層。
- [原始碼推導與限制](ogryn_carapace_armor_add_stack_on_push.md)。

<a id="ogryn_carapace_armor_more_toughness"></a>
## 最堅韌！(Toughest!)

- 描述鍵：`loc_talent_ogryn_carapace_armor_more_toughness_desc`；hash：`2fd914ff`。
- 結論：未見明確矛盾。繁中寫「每層…使你獲得…韌性恢復」，英文寫「…grants … Toughness Replenishment per stack」；兩者都把韌性恢復加值連到麻木的每一層。
- [原始碼推導與限制](ogryn_carapace_armor_more_toughness.md)。

<a id="ogryn_leadbelcher_cooldown_reduction"></a>
## 最大火力(Maximum Firepower)

- 描述鍵：`loc_talent_ogryn_leadbelcher_grant_cooldown_reduction_desc`；hash：`5aacc61b`。
- 結論：未見明確矛盾。繁中寫「技能冷卻縮減增加…，持續…秒」，英文寫「…Ability Cooldown Reduction for …s when Lucky Bullet triggers」；兩者都說明幸運子彈觸發時提高技能冷卻恢復，並給出相同持續時間。
- [原始碼推導與限制](ogryn_leadbelcher_cooldown_reduction.md)。

<a id="ogryn_leadbelcher_crits"></a>
## 好槍法(Good Shootin')

- 描述鍵：`loc_talent_ogryn_critical_leadbelcher_desc`；hash：`c346583c`。
- 結論：未見明確矛盾。繁中寫「觸發幸運子彈（且命中）的射擊必定暴擊」，英文寫「The shot that triggers Lucky Bullet is a guaranteed Critical (if it Hits)」；兩者都要求該次射擊命中才形成暴擊命中。
- [原始碼推導與限制](ogryn_leadbelcher_crits.md)。

<a id="ogryn_blo_ally_ranged_buffs"></a>
## 子彈風暴(Bulletstorm)

- 描述鍵：`loc_talent_ogryn_blo_ally_ranged_buffs_desc`；hash：`99f32156`。
- 結論：繁中描述錯誤。繁中寫「幸運子彈命中時」，英文寫「on Lucky Bullet」；固定來源只檢查是否觸發幸運子彈，不檢查是否命中。繁中因此多出命中條件。
- 繁中原文短引：幸運子彈命中時，自身與協同中的盟友的遠程傷害提高{ranged_damage:%s}，持續{duration:%s}秒。
- 同源英文：{ranged_damage:%s} Ranged Damage to you and Allies in Coherency on Lucky Bullet. Lasts {duration:%s}s.
- [原始碼推導與限制](ogryn_blo_ally_ranged_buffs.md)。

<a id="ogryn_blo_wield_speed"></a>
## 激鬥戰火(Heat of Battle)

- 描述鍵：`loc_talent_ogryn_blo_fire_rate_desc`；hash：`7290e9ce`。
- 結論：未見明確矛盾。繁中寫「每層額外提高…射速」，英文寫「also grants … Fire Rate per Stack」；兩者都表示此效果依爆限超載層數逐層增加。
- [原始碼推導與限制](ogryn_blo_wield_speed.md)。

<a id="ogryn_blo_melee"></a>
## 退後！(Back Off!)

- 描述鍵：`loc_talent_ogryn_blo_melee_desc`；hash：`d4561ed1`。
- 結論：繁中描述錯誤。同源英文是在「近戰擊殺」時增加「下次射擊」的幸運子彈機率；繁中卻寫成擊殺後「近戰攻擊有機率」產生效果，把觸發條件與機率作用位置譯錯。固定程式在近戰擊殺時必定加一層，並非再做10%加層判定。
- 繁中原文短引：擊殺敵人後，近戰攻擊有{chance:%s}機率使下次射擊觸發幸運子彈，可堆疊{stacks:%s}次。
- 同源英文：On Killing Melee Attack gain {chance:%s} chance to trigger Lucky Bullet on next Shot. Stacks {stacks:%s} times.
- [原始碼推導與限制](ogryn_blo_melee.md)。

<a id="ogryn_heavy_hitter_tdr"></a>
## 毫髮無傷(Don't Feel a Thing)

- 描述鍵：`loc_talent_ogryn_passive_heavy_hitter_tdr_desc`；hash：`063dfc94`。
- 結論：未見明確矛盾。繁中寫「額外增加…韌性減傷效果」，英文寫「also grants … Toughness Damage Reduction for each stack」；兩者都表示每層增加韌性減傷。
- [原始碼推導與限制](ogryn_heavy_hitter_tdr.md)。

<a id="ogryn_heavy_hitter_cleave"></a>
## 強力劈砍(Great Cleaver)

- 描述鍵：`loc_talent_ogryn_passive_heavy_hitter_cleave_desc`；hash：`7eed29b9`。
- 結論：未見明確矛盾。繁中寫「額外增加…順劈效果」，英文寫「also grants … Cleave for each stack」；兩者都表示依重拳出擊層數增加順劈效果，沒有把它說成傷害加成。
- [原始碼推導與限制](ogryn_heavy_hitter_cleave.md)。

<a id="ogryn_heavy_hitter_max_stacks_improves_toughness"></a>
## 越戰越勇(Unstoppable)

- 描述鍵：`loc_talent_ogryn_heavy_hitter_max_stacks_improves_toughness_new_description`；hash：`e1a057de`。
- 結論：未見明確矛盾。繁中寫「近戰擊殺時額外恢復…韌性」，英文寫「Toughness replenished from Melee Kills for each stack」；兩者都明確限定近戰擊殺恢復。固定來源的韌性恢復程式亦只在近戰擊殺類型套用此加成。
- [原始碼推導與限制](ogryn_heavy_hitter_max_stacks_improves_toughness.md)。

<a id="ogryn_heavy_hitter_stagger"></a>
## 震撼衝擊(Impactful)

- 描述鍵：`loc_talent_ogryn_passive_heavy_hitter_stagger_desc`；hash：`657b35a0`。
- 結論：未見明確矛盾。繁中寫「額外增加…衝擊效果」，英文寫「also grants … Impact for each stack」；兩者都將衝擊加值連到重拳出擊每一層。
- [原始碼推導與限制](ogryn_heavy_hitter_stagger.md)。

<a id="ogryn_heavy_hitter_max_stacks_improves_attack_speed"></a>
## 熱身完畢(Just Getting Started!)

- 描述鍵：`loc_talent_ogryn_heavy_hitter_max_stacks_improves_attack_speed_description`；hash：`7e2f23b1`。
- 結論：未見明確矛盾。繁中寫「疊加到…層後，獲得…攻擊速度」，英文寫「While … is at … Stacks, gain … Attack Speed」；兩者都把攻速限定在重拳出擊達到指定層數時。
- [原始碼推導與限制](ogryn_heavy_hitter_max_stacks_improves_attack_speed.md)。

<a id="ogryn_multi_heavy_toughness"></a>
## 最好的防禦(The Best Defence)

- 描述鍵：`loc_talent_ogryn_toughness_on_multiple_new_desc`；hash：`bcffeeff`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_multi_heavy_toughness.md)。

<a id="ogryn_single_heavy_toughness"></a>
## 碾碎它們！(Smash 'Em!)

- 描述鍵：`loc_talent_ogryn_toughness_on_single_heavy_new_desc`；hash：`3a1cc6f0`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_single_heavy_toughness.md)。

<a id="ogryn_increased_coherency_toughness"></a>
## 關鍵人物(Lynchpin)

- 描述鍵：`loc_talent_ogryn_coherency_toughness_increase_desc`；hash：`d0729082`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_increased_coherency_toughness.md)。

<a id="ogryn_reload_speed_on_empty"></a>
## 射不停(Keep Shooting)

- 描述鍵：`loc_talent_ogryn_reload_speed_on_empty_desc`；hash：`000cf461`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_reload_speed_on_empty.md)。

<a id="ogryn_more_hits_more_damage"></a>
## 怒不可遏(Furious)

- 描述鍵：`loc_talent_ogryn_damage_per_enemy_hit_previous_new_desc`；hash：`cc7b987b`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_more_hits_more_damage.md)。

<a id="ogryn_ogryn_killer"></a>
## 重量級(Heavyweight)

- 描述鍵：`loc_talent_ogryn_ogryn_fighter_desc`；hash：`d9a22157`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_ogryn_killer.md)。

<a id="ogryn_melee_stagger"></a>
## 猛擊(Slam)

- 描述鍵：`loc_talent_ogryn_melee_stagger_new_desc`；hash：`ce88baeb`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_melee_stagger.md)。

<a id="ogryn_targets_recieve_damage_taken_increase_debuff"></a>
## 削弱敵人(Soften Them Up)

- 描述鍵：`loc_talent_ogryn_targets_recieve_damage_increase_debuff_new_desc`；hash：`8d887b7b`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_targets_recieve_damage_taken_increase_debuff.md)。

<a id="ogryn_toughness_on_low_health"></a>
## 堅韌不屈(Too Stubborn to Die)

- 描述鍵：`loc_talent_ogryn_toughness_gain_increase_on_low_health_desc`；hash：`191ac350`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_toughness_on_low_health.md)。

<a id="ogryn_heavy_bleeds"></a>
## 重毆(Batter)

- 描述鍵：`loc_talent_ogryn_heavy_bleeds_new_desc`；hash：`8ad425e7`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_heavy_bleeds.md)。

<a id="ogryn_staggering_increases_damage"></a>
## 沉重打擊(Hard Knocks)

- 描述鍵：`loc_talent_ogryn_big_bully_heavy_hits_new_desc`；hash：`45b6dfbf`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_staggering_increases_damage.md)。

<a id="ogryn_movement_speed_after_ranged_kills"></a>
## 勢不可擋(Unstoppable Momentum)

- 描述鍵：`loc_talent_ogryn_ranged_kill_grant_movement_speed_desc`；hash：`b22afedc`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_movement_speed_after_ranged_kills.md)。

<a id="ogryn_increased_ammo_reserve"></a>
## 彈藥儲存包(Ammo Stash)

- 描述鍵：`loc_talent_ogryn_increased_ammo_desc`；hash：`1a862478`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_increased_ammo_reserve.md)。

<a id="ogryn_multi_hits_grant_reload_speed"></a>
## 領跑者(Pacemaker)

- 描述鍵：`loc_talent_ogryn_reload_speed_on_multiple_hits_new_desc`；hash：`61042337`。
- 結論：跨來源待遊戲內核對。繁中與同源英文都寫單次攻擊；固定公開實作採0.5秒目標去重窗口，沒有同次攻擊識別限制。兩來源皆為1.13.1；實際表現待遊戲內核對，未將此列為繁中誤譯。
- [原始碼推導與限制](ogryn_multi_hits_grant_reload_speed.md)。

<a id="ogryn_free_reload_after_ability"></a>
## 發現更多(Found Some More)

- 描述鍵：`loc_talent_cryptic_passive_ammo_replenishment_desc`；hash：`41aa3ba1`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_free_reload_after_ability.md)。

<a id="ogryn_knocked_allies_grant_damage_reduction"></a>
## 絕不屈服(Won't Give In)

- 描述鍵：`loc_talent_ogryn_tanky_with_downed_allies_desc`；hash：`3845cefa`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_knocked_allies_grant_damage_reduction.md)。

<a id="ogryn_fully_charged_attacks_gain_damage_and_stagger"></a>
## 嘎嘎！(Crunch!)

- 描述鍵：`loc_talent_ogryn_fully_charged_attacks_gain_damage_and_stagger_new_desc`；hash：`d8632c1b`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_fully_charged_attacks_gain_damage_and_stagger.md)。

<a id="ogryn_nearby_bleeds_reduce_damage_taken"></a>
## 毀滅之樂(Delight in Destruction)

- 描述鍵：`loc_talent_ogryn_damage_reduction_per_bleed_desc`；hash：`2f439ba8`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_nearby_bleeds_reduce_damage_taken.md)。

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>
## 韌性減傷(Toughness Damage Reduction)

- 描述鍵：`loc_talent_toughness_damage_reduction_medium_desc`；hash：`1272bcc0`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](base_toughness_damage_reduction_node_buff_medium_1.md)。

<a id="ogryn_damage_taken_by_all_increases_strength_tdr"></a>
## 相親相愛好夥伴！(No Hurting Friends!)

- 描述鍵：`loc_talent_ogryn_damage_taken_by_all_increases_strength_tdr_desc`；hash：`05e8af7e`。
- 結論：繁中描述錯誤。繁中多出「生命值受到傷害」限制，同源英文只說Damage Taken；固定程式也明確包含僅扣韌性的事件。此為觸發條件被譯窄，不是未列細節。
- 繁中原文短引：當自身或協同中的盟友生命值受到傷害時，威力提高{strength:%s}，最多可堆疊{stacks:%s}層，持續{duration:%s}秒。滿層時韌性減傷提高{tdr:%s}。
- 同源英文：{strength:%s} Strength on Damage Taken by you or Allies in Coherency. {stacks:%s} Max Stacks. Lasts {duration:%s}s. {tdr:%s} Toughness Damage Reduction on Max Stacks.
- [原始碼推導與限制](ogryn_damage_taken_by_all_increases_strength_tdr.md)。

<a id="ogryn_ally_movement_boost_on_ability"></a>
## 全神貫注(Get Stuck In)

- 描述鍵：`loc_talent_ogryn_ability_movement_speed_desc`；hash：`2156e8e1`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_ally_movement_boost_on_ability.md)。

<a id="ogryn_windup_reduces_damage_taken"></a>
## 利刃出鞘(Implacable)

- 描述鍵：`loc_talent_ogryn_windup_reduces_damage_taken_desc`；hash：`fed4526c`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_windup_reduces_damage_taken.md)。

<a id="ogryn_windup_is_uninterruptible"></a>
## 誰敢攔我！(No Stopping Me!)

- 描述鍵：`loc_talent_ogryn_windup_is_uninterruptible_unslowed_desc`；hash：`6704b700`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_windup_is_uninterruptible.md)。

<a id="ogryn_kills_grant_crit_chance"></a>
## 屠殺(Massacre)

- 描述鍵：`loc_talent_ogryn_crit_chance_on_kill_desc`；hash：`4e716e92`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_kills_grant_crit_chance.md)。

<a id="ogryn_revenge_damage"></a>
## 報復時間(Payback Time)

- 描述鍵：`loc_talent_ogryn_revenge_damage_new_desc`；hash：`2474ccf6`。
- 結論：跨來源待遊戲內核對。同源繁中與英文都沒有近戰限制，固定程式共用on_melee_hit篩選。實際表現待遊戲內核對，不單憑此判定繁中誤譯。
- [原始碼推導與限制](ogryn_revenge_damage.md)。

<a id="ogryn_rending_on_elite_kills"></a>
## 主宰(Dominate)

- 描述鍵：`loc_talent_ogryn_rending_on_elite_kills_desc`；hash：`4203de9c`。
- 結論：繁中描述錯誤。同一預留符號格式為百分比，繁中卻加上「倍撕裂」，英文無倍數單位；把15%撕裂寫成倍數會誤導。
- 繁中原文短引：擊殺精英敵人後持續{rending_multiplier:%s}倍撕裂{duration:%s}秒。
- 同源英文：{rending_multiplier:%s} Rending for {duration:%s}s on Elite Kill.
- [原始碼推導與限制](ogryn_rending_on_elite_kills.md)。

<a id="ogryn_reloading_grants_damage"></a>
## 換彈完畢(Reloaded and Ready)

- 描述鍵：`loc_talent_ogryn_ranged_damage_on_reload_desc`；hash：`a8bc8a04`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_reloading_grants_damage.md)。

<a id="ogryn_increase_explosion_radius"></a>
## 大爆炸(Big Boom)

- 描述鍵：`loc_talent_ogryn_increase_explosion_radius_desc`；hash：`15f7867d`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_increase_explosion_radius.md)。

<a id="ogryn_blocking_reduces_push_cost"></a>
## 睚眥必報(No Pushover)

- 描述鍵：`loc_talent_ogryn_empowered_pushes_desc`；hash：`3278e768`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_blocking_reduces_push_cost.md)。

<a id="ogryn_blocking_ranged_taunts"></a>
## 渴求關注(Attention Seeker)

- 描述鍵：`loc_talent_ranged_enemies_taunt_description`；hash：`a01a7f7f`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_blocking_ranged_taunts.md)。

<a id="ogryn_protect_allies"></a>
## 為了小子們(For the Lil'Uns)

- 描述鍵：`loc_talent_ogryn_protect_allies_desc`；hash：`67e1573d`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_protect_allies.md)。

<a id="ogryn_corruption_resistance"></a>
## 頭腦簡單(Simple Minded)

- 描述鍵：`loc_talent_ogryn_corruption_resistance_desc`；hash：`ca230578`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_corruption_resistance.md)。

<a id="ogryn_melee_attacks_give_mtdr"></a>
## 專注鬥士(Focused Fighter)

- 描述鍵：`loc_talent_ogryn_melee_attacks_give_mtdr_desc`；hash：`7ced0743`。
- 結論：跨來源待遊戲內核對。同源中英都描述受到近戰傷害後清層；固定公開實作使用全隊傷害事件且沒有本人篩選，隊友受傷亦會清除。兩來源版本對應為1.13.1，不列繁中誤譯。
- [原始碼推導與限制](ogryn_melee_attacks_give_mtdr.md)。

<a id="ogryn_pushing_applies_brittleness"></a>
## 蠻橫之力(Brutish Strength)

- 描述鍵：`loc_talent_ogryn_pushing_applies_brittlenes_desc`；hash：`f63bfc12`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_pushing_applies_brittleness.md)。

<a id="ogryn_explosions_burn"></a>
## 火力全開(Fire Away)

- 描述鍵：`loc_talent_ogryn_explosions_burn_close_desc`；hash：`2024bc9e`。
- 結論：繁中描述錯誤。英文近距離為2層總量，繁中「增加2層」容易讀成1+2；實作close_stacks是替換非相加。
- 繁中原文短引：你的爆炸會施加{stacks:%s}層燃燒效果。近距離時增加{more_stacks:%s}層，最多可堆疊{max_stacks:%s}層。
- 同源英文：Your Explosions apply {stacks:%s} Stack(s) of Burn. {more_stacks:%s} Stack(s) if close range. Max Stacks {max_stacks:%s}.
- [原始碼推導與限制](ogryn_explosions_burn.md)。

<a id="ogryn_block_all_attacks"></a>
## 堅不可摧(Unbreakable)

- 描述鍵：`loc_talent_ogryn_block_all_attacks_variant_desc`；hash：`b565afeb`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_block_all_attacks.md)。

<a id="ogryn_damage_reduction_on_high_stamina"></a>
## 士氣高昂(Pumped Up)

- 描述鍵：`loc_talent_ogryn_damage_reduction_on_high_stamina_desc`；hash：`ab8d5e62`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_damage_reduction_on_high_stamina.md)。

<a id="ogryn_crit_damage_increase"></a>
## 好運連連(Lucky Streak)

- 描述鍵：`loc_talent_ogryn_crit_damage_increase_desc`；hash：`c90c5cb1`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_crit_damage_increase.md)。

<a id="ogryn_stacking_attack_speed"></a>
## 狂暴猛擊(Frenzied Blows)

- 描述鍵：`loc_talent_ogryn_stacking_attack_speed_desc`；hash：`2909d3df`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_stacking_attack_speed.md)。

<a id="ogryn_melee_damage_after_heavy"></a>
## 擊潰他們(Beat Them Back)

- 描述鍵：`loc_talent_ogryn_melee_damage_after_heavy_desc`；hash：`ee301680`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_melee_damage_after_heavy.md)。

<a id="ogryn_drain_stamina_for_handling"></a>
## 專注(Concentrate)

- 描述鍵：`loc_talent_ogryn_drain_stamina_for_handling_desc`；hash：`6c43172c`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_drain_stamina_for_handling.md)。

<a id="ogryn_damage_reduction_after_elite_kill"></a>
## 大肌肌(Strongman)

- 描述鍵：`loc_talent_ogryn_damage_reduction_after_elite_kill_desc`；hash：`fb76eb37`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_damage_reduction_after_elite_kill.md)。

<a id="ogryn_toughness_while_bracing"></a>
## 穩定握持(Steady Grip)

- 描述鍵：`loc_talent_ogryn_toughness_regen_while_bracing_or_shooting_desc`；hash：`c73dc498`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_toughness_while_bracing.md)。

<a id="ogryn_ranged_damage_immunity"></a>
## 休想再打中我......(Can't Hit Me...Again)

- 描述鍵：`loc_talent_ogryn_ranged_damage_immunity_desc`；hash：`5b06263e`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_ranged_damage_immunity.md)。

<a id="ogryn_wield_speed_increase"></a>
## 熟能生巧(Dedicated Practice)

- 描述鍵：`loc_talent_ogryn_wield_speed_increase_desc`；hash：`6349b08e`。
- 結論：繁中描述錯誤。英文是增加Weapon Swap Speed，繁中寫「縮短為」把速度增幅誤當時間剩餘比例；不是單純省略公式。
- 繁中原文短引：武器切換速度縮短為{wield_speed:%s}。
- 同源英文：{wield_speed:%s} Weapon Swap Speed.
- [原始碼推導與限制](ogryn_wield_speed_increase.md)。

<a id="ogryn_ranged_improves_melee"></a>
## 射盡殺戮(Spray and Slay)

- 描述鍵：`loc_talent_ogryn_ranged_improves_melee_desc`；hash：`7ba7e606`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_ranged_improves_melee.md)。

<a id="ogryn_melee_improves_ranged"></a>
## 猛砸爆裂(Bash and Blast)

- 描述鍵：`loc_talent_ogryn_melee_improves_ranged_desc`；hash：`01fff66e`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_melee_improves_ranged.md)。

<a id="ogryn_ally_elite_kills_grant_cooldown"></a>
## 格鬥兵(Bruiser)

- 描述鍵：`loc_talent_ogryn_cooldown_on_elite_kills_new_desc`；hash：`d14f6cb0`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_ally_elite_kills_grant_cooldown.md)。

<a id="ogryn_weakspot_damage"></a>
## 精準打擊(Strike True)

- 描述鍵：`loc_talent_ogryn_weakspot_damage_desc`；hash：`658a5b8e`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_weakspot_damage.md)。

<a id="ogryn_bracing_reduces_damage_taken"></a>
## 機動部署(Mobile Emplacement)

- 描述鍵：`loc_talent_ogryn_bracing_or_shooting_reduces_damage_taken_desc`；hash：`7467e28d`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](ogryn_bracing_reduces_damage_taken.md)。
