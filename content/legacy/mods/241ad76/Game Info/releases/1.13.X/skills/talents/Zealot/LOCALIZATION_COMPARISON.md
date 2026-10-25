# 狂信徒：遊戲本體繁中描述比對

[English](en/LOCALIZATION_COMPARISON.md)
[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)

- 原文：本機 Steam Build 25606770，2026-10-02 擷取，ui 資源；繁中與英文依同一描述鍵／hash 配對。完整文字存於本版本 source/SteamBuild_25606770_1.13.1/，整個 Build 目錄受 Git 忽略。
- 機制：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。文字與程式來源皆為1.13.1；文字與實作的差異仍需遊戲內核對。
- 只有明確的效果方向、作用對象或數量／單位矛盾列為勘誤；省略機制或算例不算錯誤。

- 82 項中，81 項精確配對同一 ui 資源鍵與 hash；「神聖事業」的描述鍵未命中。8 項明確繁中誤譯、7 項待遊戲內或顯示代入核對、66 項未見明確矛盾；缺少說明不當成錯誤。

| 技能 | 結論 |
|---|---|
| [獻祭手雷](#zealot_flame_grenade) | 明確繁中誤譯 |
| [信仰之刃](#zealot_throwing_knives) | 未見明確矛盾 |
| [眩暈風暴手雷](#zealot_improved_stun_grenade) | 未見明確矛盾 |
| [恩賜](#zealot_toughness_damage_reduction_coherency_improved) | 未見明確矛盾 |
| [純潔信標](#zealot_corruption_healing_coherency_improved) | 未見明確矛盾 |
| [熱忱](#zealot_stamina_cost_multiplier_aura) | 措辭待遊戲內核對 |
| [不屈靈魂合唱](#zealot_bolstering_prayer) | 待遊戲內核對 |
| [有信者之怒](#zealot_attack_speed_post_ability) | 跨來源待遊戲內核對 |
| [神聖事業](#zealot_channel_grants_toughness_damage_reduction) | 原文字串未精確配對 |
| [教宗之喚](#zealot_channel_grants_damage) | 明確繁中誤譯 |
| [倍增狂熱](#zealot_additional_charge_of_ability) | 未見明確矛盾 |
| [隱秘領域](#zealot_stealth) | 未見明確矛盾 |
| [大師級隱秘領域](#zealot_increased_duration) | 措辭方向待遊戲內核對 |
| [振奮啟示](#zealot_leaving_stealth_restores_toughness) | 未見明確矛盾 |
| [殉道者之願](#zealot_restore_stealth_cd_on_damage) | 未見明確矛盾 |
| [虔誠刺客](#zealot_backstab_kills_restore_cd) | 未見明確矛盾 |
| [死亡禱文](#zealot_crits_grant_cd) | 未見明確矛盾 |
| [無盡狂怒](#zealot_fotf_refund_cooldown) | 明確繁中誤譯 |
| [完美主義者](#zealot_stealth_cooldown_regeneration) | 明確繁中誤譯 |
| [死戰到底](#zealot_resist_death) | 未見明確矛盾 |
| [殉道](#zealot_martyrdom) | 未見明確矛盾 |
| [不滅意志](#zealot_martyrdom_grants_toughness) | 未見明確矛盾 |
| [狂燥之心](#zealot_martyrdom_grants_attack_speed) | 未見明確矛盾 |
| [命定審判](#zealot_quickness_passive) | 未見明確矛盾 |
| [懲戒者姿態](#zealot_momentum_toughness_replenish) | 未見明確矛盾 |
| [飄忽身形](#zealot_quickness_passive_dodge_stacks) | 未見明確矛盾 |
| [吊命聖徒](#zealot_resist_death_heal) | 明確繁中誤譯 |
| [熾熱虔誠](#zealot_fanatic_rage) | 未見明確矛盾 |
| [死忠](#zealot_fanatic_rage_toughness_on_max) | 未見明確矛盾 |
| [正義勇士](#zealot_fanatic_rage_improved) | 未見明確矛盾 |
| [迅疾狂熱](#zealot_shared_fanatic_rage) | 跨來源待遊戲內核對 |
| [治癒詩頌](#zealot_martyrdom_toughness_modifier) | 明確繁中誤譯 |
| [永恆](#zealot_quickness_increased_duration) | 未見明確矛盾 |
| [危境之際](#zealot_corruption_resistance_stacking) | 未見明確矛盾 |
| [狂熱朝聖者](#zealot_resist_death_ability) | 未見明確矛盾 |
| [烈焰與怒火](#zealot_resist_death_fire) | 未見明確矛盾 |
| [復活](#zealot_resist_death_golden_toughness) | 未見明確矛盾 |
| [天災](#zealot_crits_apply_bleed) | 未見明確矛盾 |
| [背刺者](#zealot_backstab_damage) | 未見明確矛盾 |
| [蔑視](#zealot_multi_hits_increase_damage) | 未見明確矛盾 |
| [淨化不潔](#zealot_increased_damage_vs_resilient) | 未見明確矛盾 |
| [持續突擊](#zealot_hits_grant_stacking_damage) | 未見明確矛盾 |
| [堅韌信仰](#zealot_crits_reduce_toughness_damage) | 未見明確矛盾 |
| [精力復甦](#zealot_toughness_on_dodge) | 未見明確矛盾 |
| [近戰增幅](#base_melee_damage_node_buff_medium_1) | 未見明確矛盾 |
| [泰拉之音](#zealot_toughness_while_shooting) | 未見明確矛盾 |
| [恢復信仰](#zealot_heal_part_of_damage_taken) | 未見明確矛盾 |
| [為了帝皇](#zealot_reduced_damage_on_wound) | 未見明確矛盾 |
| [惡毒贈禮](#zealot_toughness_on_heavy_kills) | 明確繁中誤譯 |
| [韌性減傷](#base_toughness_damage_reduction_node_buff_medium_1) | 未見明確矛盾 |
| [決鬥者](#zealot_increased_crit_and_weakspot_damage_after_dodge) | 未見明確矛盾 |
| [輕蔑之盾](#zealot_ally_damage_taken_reduced) | 跨來源待遊戲內核對 |
| [褻瀆必懲](#zealot_push_attacks_attack_speed) | 未見明確矛盾 |
| [勃然大怒](#zealot_damage_boosts_movement) | 未見明確矛盾 |
| [反制護盾](#zealot_stamina_on_block_break) | 未見明確矛盾 |
| [四平八穩](#zealot_reduced_damage_after_dodge) | 未見明確矛盾 |
| [內憂外患](#zealot_toughness_in_melee) | 跨來源待遊戲內核對 |
| [信仰狂亂](#zealot_attack_speed) | 未見明確矛盾 |
| [信仰之勇](#zealot_additional_wounds) | 未見明確矛盾 |
| [鮮血受膏](#zealot_increase_ranged_close_damage) | 未見明確矛盾 |
| [不屈之志](#zealot_uninterruptible_no_slow_heavies) | 未見明確矛盾 |
| [靈活還擊](#zealot_stacking_melee_damage_after_dodge) | 未見明確矛盾 |
| [狂熱不懈](#zealot_sprint_improvements) | 未見明確矛盾 |
| [無形之刃](#zealot_damage_vs_nonthreat) | 未見明確矛盾 |
| [大師的反擊](#zealot_defensive_knockback) | 未見明確矛盾 |
| [血色迷障](#zealot_bled_enemies_take_more_damage) | 未見明確矛盾 |
| [背水一戰](#zealot_more_damage_when_low_on_stamina) | 未見明確矛盾 |
| [刻不容緩](#zealot_melee_crits_restore_stamina) | 未見明確矛盾 |
| [神恩庇護](#zealot_revive_speed) | 未見明確矛盾 |
| [弒除瀆者](#zealot_damage_vs_elites) | 未見明確矛盾 |
| [傲慢](#zealot_weakspot_damage_reduction) | 未見明確矛盾 |
| [近戰增幅](#base_melee_damage_node_buff_medium_4) | 未見明確矛盾 |
| [頭號目標](#zealot_elite_kills_empowers) | 未見明確矛盾 |
| [敵後行動](#zealot_suppress_on_backstab_kill) | 未見明確矛盾 |
| [殺戮時刻](#zealot_backstab_periodic_damage) | 未見明確矛盾 |
| [逆境而上](#zealot_offensive_vs_many) | 未見明確矛盾 |
| [自掏腰包](#zealot_reload_from_melee) | 明確繁中誤譯 |
| [排隊等候](#zealot_reduced_damage_from_ranged) | 未見明確矛盾 |
| [神聖工具](#zealot_weapon_special_damage) | 未見明確矛盾 |
| [為您撐腰](#zealot_melee_kills_restore_toughness_to_target) | 未見明確矛盾 |
| [淨化仇恨](#zealot_dmg_vs_burning_electrocuted) | 未見明確矛盾 |
| [死亡之舞](#zealot_improved_weapon_handling_after_dodge) | 未見明確矛盾 |

<a id="zealot_flame_grenade"></a>
## 獻祭手雷(Immolation Grenade)

- 描述鍵：`loc_talent_ability_fire_grenade_desc`；hash：`5b720fa5`。
- 結論：明確繁中誤譯。Build 25606770 對照字串中，英文為 Burning and Staggering，繁中譯成「燃燒並使敵人暈眩」；Translation.md 將 Stagger/Staggering 對應為「踉蹌」，將 Stun 對應為「眩暈」。這是詞義明確不符，但該 build 文字只供翻譯比較，不作機制依據。
- 繁中原文短引：投擲一枚手雷，在爆炸處形成一層燃燒的液體，燃燒並使敵人眩暈, 同時阻擋他們的道路。針對無護甲敵人最為有效。
- 同源英文：Throw a grenade that leaves a layer of flaming liquid, Burning and Staggering enemies, and barring their path. Most effective against Unarmoured Enemies.
- [原始碼推導與限制](zealot_flame_grenade.md)。

<a id="zealot_throwing_knives"></a>
## 信仰之刃(Blades of Faith)

- 描述鍵：`loc_ability_zealot_throwing_knifes_desc`；hash：`5c177ee2`。
- 結論：未見明確矛盾。繁中與英文描述均提及近戰擊殺精英／專家補 1 把及彈藥箱補刀；來源中補給量依 pickup 設定變化，不足以判定「彈藥箱可補充」是翻譯錯誤。
- [原始碼推導與限制](zealot_throwing_knives.md)。

<a id="zealot_improved_stun_grenade"></a>
## 眩暈風暴手雷(Stunstorm Grenade)

- 描述鍵：`loc_zealot_improved_stun_grenade_desc`；hash：`35fbc631`。
- 結論：未見明確矛盾。Build 25606770 的繁中和英文都說明震撼手雷及其升級範圍，沒有可確認的明確譯錯。
- [原始碼推導與限制](zealot_improved_stun_grenade.md)。

<a id="zealot_toughness_damage_reduction_coherency_improved"></a>
## 恩賜(Benediction)

- 描述鍵：`loc_talent_zealot_toughness_aura_efficiency_desc`；hash：`90d53110`。
- 結論：未見明確矛盾。Build 25606770 的繁中與英文均描述持有者及協同盟友獲得韌性傷害降低；沒有可確認的明確譯錯。
- [原始碼推導與限制](zealot_toughness_damage_reduction_coherency_improved.md)。

<a id="zealot_corruption_healing_coherency_improved"></a>
## 純潔信標(Beacon of Purity)

- 描述鍵：`loc_talent_zealot_corruption_healing_coherency_improved_desc`；hash：`afc49dc9`。
- 結論：未見明確矛盾。Build 25606770 中繁中「每秒淨化腐敗」與英文「Heal Corruption ... every 1s」方向一致；來源證明為固定值清除，未顯示清楚的翻譯錯誤。
- [原始碼推導與限制](zealot_corruption_healing_coherency_improved.md)。

<a id="zealot_stamina_cost_multiplier_aura"></a>
## 熱忱(Zealous)

- 描述鍵：`loc_talent_zealot_stamina_cost_multiplier_delay_aura_description`；hash：`2b5c13bc`。
- 結論：措辭待遊戲內核對。繁中寫「耐力消耗變為{stamina_cost_multiplier:%s}」，英文為帶符號的 Stamina Cost；固定來源會格式化為 −15%。機制為消耗乘 .85，但尚未確認該 Build 實際代入的文字，故將「變為」的措辭問題列為待核，不當成已完成的遊戲顯示勘誤。
- [原始碼推導與限制](zealot_stamina_cost_multiplier_aura.md)。

<a id="zealot_bolstering_prayer"></a>
## 不屈靈魂合唱(Chorus of Spiritual Fortitude)

- 描述鍵：`loc_talent_zealot_bolstering_prayer_expanded_description`；hash：`ae04279a`。
- 結論：待遊戲內核對。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；固定 SHA 的 format_values 合計 45%，實際動作則分成 20% 每脈衝與 25%/秒，暫不把文字與實作差異判為譯文錯誤。
- [原始碼推導與限制](zealot_bolstering_prayer.md)。

<a id="zealot_attack_speed_post_ability"></a>
## 有信者之怒(Fury of the Faithful)

- 描述鍵：`loc_talent_zealot_attack_speed_after_dash_new_desc`；hash：`f5695318`。
- 結論：跨來源待遊戲內核對。繁中與英文皆用同一time欄位；固定來源顯示參數10秒，但buff duration為10+1=11秒，尚未遊戲內確認顯示。兩語效果方向相符，非繁中單方誤譯。
- [原始碼推導與限制](zealot_attack_speed_post_ability.md)。

<a id="zealot_channel_grants_toughness_damage_reduction"></a>
## 神聖事業(Holy Cause)

- 描述鍵：`loc_talent_zealot_zealot_channel_defensive_desc `；hash：``。
- 結論：原文字串未精確配對。以 ability special rule、脈衝套用與 buff 數值可確認機制；inventory 對應描述為空，且 loc_talent_zealot_zealot_channel_defensive_desc 含重複 zealot 及尾空格，僅可列為原始鍵候選，不足以確認精確文案。
- [原始碼推導與限制](zealot_channel_grants_toughness_damage_reduction.md)。

<a id="zealot_channel_grants_damage"></a>
## 教宗之喚(Ecclesiarch's Call)

- 描述鍵：`loc_talent_zealot_zealot_channel_offensive_desc`；hash：`af1e14c2`。
- 結論：明確繁中誤譯。相同hash的繁中疊層數使用{damage:%s}，英文使用{stacks:%s}；把傷害百分比欄位代入層數，屬明確參數錯誤。
- 繁中原文短引：每次脈衝都會為您與處於凝聚狀態的盟友賦予{damage:%s}傷害。疊加{damage:%s}次。持續{duration:%s}秒。
- 同源英文：Each pulse grants {damage:%s} Damage to you and Allies in Coherency. Stacking {stacks:%s} times. Lasts {duration:%s}s.
- [原始碼推導與限制](zealot_channel_grants_damage.md)。

<a id="zealot_additional_charge_of_ability"></a>
## 倍增狂熱(Redoubled Zeal)

- 描述鍵：`loc_talent_zealot_dash_has_more_charges_desc`；hash：`13ade9bb`。
- 結論：未見明確矛盾。同hash兩語皆表示能力增加至2次充能；共享資源與回充時序屬原文省略，不列錯誤。
- [原始碼推導與限制](zealot_additional_charge_of_ability.md)。

<a id="zealot_stealth"></a>
## 隱秘領域(Shroudfield)

- 描述鍵：`loc_ability_zealot_stealth_rending_description`；hash：`644f101d`。
- 結論：未見明確矛盾。同一hash的繁中與英文作用方向相符；補足觸發、疊層、恢復量與實際計算，不把原文省略當錯誤。
- [原始碼推導與限制](zealot_stealth.md)。

<a id="zealot_increased_duration"></a>
## 大師級隱秘領域(Master-Crafted Shroudfield)

- 描述鍵：`loc_talent_zealot_stealth_duration_threat_damage_desc`；hash：`f25397d4`。
- 結論：措辭方向待遊戲內核對。同hash英文明為gain帶符號的Threat，繁中預先寫提高；固定來源格式參數是−75%，實作倍率.25，故主文寫降低75%。尚無遊戲內最終格式化畫面，保留為措辭疑點，不當成已證實的遊戲顯示錯誤。
- [原始碼推導與限制](zealot_increased_duration.md)。

<a id="zealot_leaving_stealth_restores_toughness"></a>
## 振奮啟示(Invigorating Revelation)

- 描述鍵：`loc_talent_zealot_stealth_toughness_dr_desc`；hash：`cc97b988`。
- 結論：未見明確矛盾。同一hash的繁中與英文作用方向相符；補足觸發、疊層、恢復量與實際計算，不把原文省略當錯誤。
- [原始碼推導與限制](zealot_leaving_stealth_restores_toughness.md)。

<a id="zealot_restore_stealth_cd_on_damage"></a>
## 殉道者之願(Martyr's Purpose)

- 描述鍵：`loc_talent_zealot_damage_taken_restores_cd_new_description`；hash：`62f53f3a`。
- 結論：未見明確矛盾。同一hash的繁中與英文作用方向相符；補足觸發、疊層、恢復量與實際計算，不把原文省略當錯誤。
- [原始碼推導與限制](zealot_restore_stealth_cd_on_damage.md)。

<a id="zealot_backstab_kills_restore_cd"></a>
## 虔誠刺客(Pious Cut-Throat)

- 描述鍵：`loc_talent_zealot_cooldown_on_backstab_weakspot_desc`；hash：`169457dc`。
- 結論：未見明確矛盾。同一hash的繁中與英文作用方向相符；補足觸發、疊層、恢復量與實際計算，不把原文省略當錯誤。
- [原始碼推導與限制](zealot_backstab_kills_restore_cd.md)。

<a id="zealot_crits_grant_cd"></a>
## 死亡禱文(Invocation of Death)

- 描述鍵：`loc_talent_maniac_cooldown_on_melee_crits_buff_desc`；hash：`ec418944`。
- 結論：未見明確矛盾。同一hash的繁中與英文作用方向相符；補足觸發、疊層、恢復量與實際計算，不把原文省略當錯誤。
- [原始碼推導與限制](zealot_crits_grant_cd.md)。

<a id="zealot_fotf_refund_cooldown"></a>
## 無盡狂怒(Unrelenting Fury)

- 描述鍵：`loc_talent_zealot_fotf_refund_cooldown_desc`；hash：`0dec8750`。
- 結論：明確繁中誤譯。inventory 同一雙語文字的繁中額外標「秒」，英文未指定秒；固定 SHA 也把值格式化為百分比且按充能成本百分比返還。
- 繁中原文短引：使用{talent_name:%s}後{duration:%s}秒內擊殺精英或專家敵人，可恢復{cooldown:%s}秒技能冷卻時間。每次使用最多觸發一次。
- 同源英文：Killing an Elite or Specialist within {duration:%s}s of using {talent_name:%s} restores {cooldown:%s} Ability Cooldown. Maximum once per use.
- [原始碼推導與限制](zealot_fotf_refund_cooldown.md)。

<a id="zealot_stealth_cooldown_regeneration"></a>
## 完美主義者(Perfectionist)

- 描述鍵：`loc_talent_zealot_stealth_cooldown_regeneration_desc`；hash：`d641c97c`。
- 結論：明確繁中誤譯。inventory 繁中在 50%/30%/15% 格式值後加入「秒」；固定 SHA 的 talent 將其格式化為 percentage，實際按單次充能成本比例返還。
- 繁中原文短引：潛行擊殺可恢復技能冷卻時間。巨獸恢復{monster:%s}秒，歐格林恢復{ogryn:%s}秒，其他敵人恢復{other:%s}秒。
- 同源英文：Restore Ability Cooldown on Stealth Kill. Monstrosities restore {monster:%s}, Ogryns restore {ogryn:%s}, and others restore {other:%s}.
- [原始碼推導與限制](zealot_stealth_cooldown_regeneration.md)。

<a id="zealot_resist_death"></a>
## 死戰到底(Until Death)

- 描述鍵：`loc_talent_zealot_resist_death_base_desc`；hash：`0da0b898`。
- 結論：未見明確矛盾。繁中與英文都描述致命傷害觸發、無法殺死效果及冷卻；起算細節省略屬描述不完整。
- [原始碼推導與限制](zealot_resist_death.md)。

<a id="zealot_martyrdom"></a>
## 殉道(Martyrdom)

- 描述鍵：`loc_talent_zealot_martyrdom_desc`；hash：`b90da3ce`。
- 結論：未見明確矛盾。英文與繁中方向都是缺失生命傷口格提高傷害；中文若寫成每格 +10%、最多 5 格，與掛載 buff 一致。依傷口格計算的實作細節屬補充說明。
- [原始碼推導與限制](zealot_martyrdom.md)。

<a id="zealot_martyrdom_grants_toughness"></a>
## 不滅意志(I Shall Not Fall)

- 描述鍵：`loc_talent_zealot_martyrdom_grants_toughness_upd_desc`；hash：`15546289`。
- 結論：未見明確矛盾。原文及繁中描述都是殉道層數提高韌性承傷減免；格數、每格比例與上限為實作補足。
- [原始碼推導與限制](zealot_martyrdom_grants_toughness.md)。

<a id="zealot_martyrdom_grants_attack_speed"></a>
## 狂燥之心(Maniac)

- 描述鍵：`loc_talent_zealot_attack_speed_per_martyrdom_upd_desc`；hash：`b83c3710`。
- 結論：未見明確矛盾。原文與繁中指向殉道層數提供攻擊速度；程式明確限定為近戰攻擊速度，缺失傷口格和數值補充不構成矛盾。
- [原始碼推導與限制](zealot_martyrdom_grants_attack_speed.md)。

<a id="zealot_quickness_passive"></a>
## 命定審判(Inexorable Judgement)

- 描述鍵：`loc_talent_zealot_quickness_desc`；hash：`634bdcc4`。
- 結論：未見明確矛盾。繁中及英文都表達移動累積、命中後獲得攻速／射速增益；精確距離、上限、觸發條件及額外 stat 由實作補足。
- [原始碼推導與限制](zealot_quickness_passive.md)。

<a id="zealot_momentum_toughness_replenish"></a>
## 懲戒者姿態(Retributor's Stance)

- 描述鍵：`loc_talent_zealot_momentum_toughness_replenish_desc`；hash：`11690b77`。
- 結論：未見明確矛盾。兩種語言都表示 Quickness 層數會帶來韌性恢復；逐層每秒 0.5% 與只在 active buff 期間生效是實作細節。
- [原始碼推導與限制](zealot_momentum_toughness_replenish.md)。

<a id="zealot_quickness_passive_dodge_stacks"></a>
## 飄忽身形(Inebriate's Poise)

- 描述鍵：`loc_talent_zealot_quickness_dodge_stacks_desc`；hash：`6a266b91`。
- 結論：未見明確矛盾。英文與繁中都指向成功閃避可取得 Quickness 層數；每次 3 層與共享上限是程式細節。
- [原始碼推導與限制](zealot_quickness_passive_dodge_stacks.md)。

<a id="zealot_resist_death_heal"></a>
## 吊命聖徒(Holy Revenant)

- 描述鍵：`loc_talent_zealot_resist_death_heal_desc`；hash：`7e66622d`。
- 結論：明確繁中誤譯。同hash英文 times that amount 的比較對象是治療量；繁中明確改成近戰傷害的倍數，將倍率的作用對象譯錯。另25%額度如何封頂屬實作補充，不把原文省略列為錯誤。
- 繁中原文短引：觸發{talent_name:%s}會將附近敵人擊退。此外，處於無法殺死狀態時，您會根據造成的傷害恢復生命值，最多可恢復最大生命值的{max_health:%s}。近戰傷害造成的生命值恢復量為近戰傷害的{multiplier:%s}倍。
- 同源英文：Triggering {talent_name:%s} knocks nearby enemies back. In addition, while Unkillable, you heal based on the Damage you deal up to a maximum of {max_health:%s} Max Health. Melee Damage dealt heals for {multiplier:%s} times that amount.
- [原始碼推導與限制](zealot_resist_death_heal.md)。

<a id="zealot_fanatic_rage"></a>
## 熾熱虔誠(Blazing Piety)

- 描述鍵：`loc_talent_zealot_fanatic_rage_crit_desc`；hash：`c80efade`。
- 結論：未見明確矛盾。中英文都表示敵人在範圍內死亡可累積到狂怒、暴擊也計入；小兵對象、共用層數、衰退及到期重置屬實作補足。
- [原始碼推導與限制](zealot_fanatic_rage.md)。

<a id="zealot_fanatic_rage_toughness_on_max"></a>
## 死忠(Stalwart)

- 描述鍵：`loc_talent_zealot_fanatic_rage_toughness_replenish_desc`；hash：`efdfa530`。
- 結論：未見明確矛盾。翻譯方向及三項效果方向一致；程式對 50% 的重新計時條件與25層維持條件是更細的觸發限制。
- [原始碼推導與限制](zealot_fanatic_rage_toughness_on_max.md)。

<a id="zealot_fanatic_rage_improved"></a>
## 正義勇士(Righteous Warrior)

- 描述鍵：`loc_talent_zealot_fanatic_rage_improved_desc`；hash：`cde6c5ff`。
- 結論：未見明確矛盾。繁中與英文都描述此升級提高熾熱虔誠提供的爆擊率；以百分點與總和表達是為免誤讀。
- [原始碼推導與限制](zealot_fanatic_rage_improved.md)。

<a id="zealot_shared_fanatic_rage"></a>
## 迅疾狂熱(Infectious Zeal)

- 描述鍵：`loc_talent_zealot_shared_fanatic_rage_new_desc`；hash：`95bbc544`。
- 結論：跨來源待遊戲內核對。英繁中都寫隊友在個人熾熱虔誠有效時取得爆擊率；程式是開始 Fury 時套用一次8秒共享 buff，個人 Fury 重新計時不會重跑分發。依1.13.1固定程式碼，持續效果時間可能與文案「while active」不一致；實際持續時間仍待遊戲內核對。
- [原始碼推導與限制](zealot_shared_fanatic_rage.md)。

<a id="zealot_martyrdom_toughness_modifier"></a>
## 治癒詩頌(Restorative Verses)

- 描述鍵：`loc_talent_zealot_martyrdom_toughness_modifier_upd_desc`；hash：`d473a3ea`。
- 結論：明確繁中誤譯。繁中寫成「每疊加一層會恢復5%韌性」，把效率提升誤成直接恢復；英文為 Toughness Replenishment，執行時掛載 toughness_replenish_modifier 並隨失去傷口格插值。應改為「每層提高韌性回復效率5%」一類表述。
- 繁中原文短引：每疊加一層，{talent_name:%s}會恢復{toughness_modifier:%s}韌性。
- 同源英文：{talent_name:%s} grants {toughness_modifier:%s} Toughness Replenishment per stack.
- [原始碼推導與限制](zealot_martyrdom_toughness_modifier.md)。

<a id="zealot_quickness_increased_duration"></a>
## 永恆(Eternal)

- 描述鍵：`loc_talent_zealot_quickness_increased_duration_desc`；hash：`ffd6bfbb`。
- 結論：未見明確矛盾。遊戲繁中「持續時間延長至 10 秒」與英文一致；原始碼 talent name 有舊的閃避文字，但正式本地化描述與實際特殊規則都指向持續時間。
- [原始碼推導與限制](zealot_quickness_increased_duration.md)。

<a id="zealot_corruption_resistance_stacking"></a>
## 危境之際(On the Brink)

- 描述鍵：`loc_talent_zealot_corruption_resistance_stacking_desc`；hash：`892c3a6b`。
- 結論：未見明確矛盾。中英文都表達殉道每層提供腐敗抗性；用承傷倍率說明其運作是實作細節。
- [原始碼推導與限制](zealot_corruption_resistance_stacking.md)。

<a id="zealot_resist_death_ability"></a>
## 狂熱朝聖者(Zealous Pilgrim)

- 描述鍵：`loc_talent_zealot_resist_death_ability_offensive_desc`；hash：`ccea0bcc`。
- 結論：未見明確矛盾。繁中與英文對使用技能、隱身/聖物起算時點及兩項增益的方向相符。
- [原始碼推導與限制](zealot_resist_death_ability.md)。

<a id="zealot_resist_death_fire"></a>
## 烈焰與怒火(Fire and Fury)

- 描述鍵：`loc_talent_zealot_resist_death_fire_desc`；hash：`2ee3f440`。
- 結論：未見明確矛盾。繁中及英文都描述無法殺死期間由武器命中施加燃燒，方向與對象相同。燃燒層數、時長、tick 間隔及 power scaling 為原文未展開的機制細節。
- [原始碼推導與限制](zealot_resist_death_fire.md)。

<a id="zealot_resist_death_golden_toughness"></a>
## 復活(Risen)

- 描述鍵：`loc_talent_resist_death_toughness_desc`；hash：`568ffaee`。
- 結論：未見明確矛盾。中英文都表示無法殺死期間按秒增加最大韌性、總量上限與5秒加成；韌性上限變化對目前韌性的連動屬實作補充。
- [原始碼推導與限制](zealot_resist_death_golden_toughness.md)。

<a id="zealot_crits_apply_bleed"></a>
## 天災(Scourge)

- 描述鍵：`loc_talent_zealot_bleed_melee_crit_chance_desc`；hash：`cddf2bee`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_crits_apply_bleed.md)。

<a id="zealot_backstab_damage"></a>
## 背刺者(Backstabber)

- 描述鍵：`loc_talent_zealot_backstab_flanking_damage_all_desc`；hash：`cbe3a511`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_backstab_damage.md)。

<a id="zealot_multi_hits_increase_damage"></a>
## 蔑視(Disdain)

- 描述鍵：`loc_talent_zealot_3_tier_2_ability_1_description`；hash：`e1fe6b4c`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_multi_hits_increase_damage.md)。

<a id="zealot_increased_damage_vs_resilient"></a>
## 淨化不潔(Purge the Unclean)

- 描述鍵：`loc_talent_zealot_3_passive_2_description`；hash：`96b4257f`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_increased_damage_vs_resilient.md)。

<a id="zealot_hits_grant_stacking_damage"></a>
## 持續突擊(Sustained Assault)

- 描述鍵：`loc_talent_zealot_increased_damage_stacks_on_hit_desc`；hash：`fa8c449f`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_hits_grant_stacking_damage.md)。

<a id="zealot_crits_reduce_toughness_damage"></a>
## 堅韌信仰(Enduring Faith)

- 描述鍵：`loc_talent_zealot_toughness_melee_effectiveness_desc`；hash：`56b689eb`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_crits_reduce_toughness_damage.md)。

<a id="zealot_toughness_on_dodge"></a>
## 精力復甦(Second Wind)

- 描述鍵：`loc_talent_zealot_toughness_on_dodge_desc`；hash：`7b3709d4`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_toughness_on_dodge.md)。

<a id="base_melee_damage_node_buff_medium_1"></a>
## 近戰增幅(Melee Damage Boost)

- 描述鍵：`loc_talent_melee_damage_boost_medium_desc`；hash：`7b5da013`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](base_melee_damage_node_buff_medium_1.md)。

<a id="zealot_toughness_while_shooting"></a>
## 泰拉之音(The Voice of Terra)

- 描述鍵：`loc_talent_zealot_toughness_while_shooting_desc`；hash：`fce063da`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_toughness_while_shooting.md)。

<a id="zealot_heal_part_of_damage_taken"></a>
## 恢復信仰(Restoring Faith)

- 描述鍵：`loc_talent_zealot_heal_damage_taken_desc`；hash：`c39c8d71`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_heal_part_of_damage_taken.md)。

<a id="zealot_reduced_damage_on_wound"></a>
## 為了帝皇(Bleed for the Emperor)

- 描述鍵：`loc_talent_zealot_3_tier_3_ability_2_description`；hash：`4cc48983`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_reduced_damage_on_wound.md)。

<a id="zealot_toughness_on_heavy_kills"></a>
## 惡毒贈禮(Vicious Offering)

- 描述鍵：`loc_talent_zealot_toughness_on_heavy_kills_desc`；hash：`d50c0dd8`。
- 結論：明確繁中誤譯。同一描述鍵的英文為 Heavy Attack Kill，繁中卻寫命中；固定實作也是 on_kill 再檢查重擊，必要擊殺條件被翻錯。
- 繁中原文短引：重攻擊命中後恢復{toughness:%s}韌性。
- 同源英文：Replenish {toughness:%s} Toughness on Heavy Attack Kill.
- [原始碼推導與限制](zealot_toughness_on_heavy_kills.md)。

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>
## 韌性減傷(Toughness Damage Reduction)

- 描述鍵：`loc_talent_toughness_damage_reduction_medium_desc`；hash：`1272bcc0`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](base_toughness_damage_reduction_node_buff_medium_1.md)。

<a id="zealot_increased_crit_and_weakspot_damage_after_dodge"></a>
## 決鬥者(Duellist)

- 描述鍵：`loc_talent_zealot_duelist_new_desc`；hash：`b41ec4a9`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_increased_crit_and_weakspot_damage_after_dodge.md)。

<a id="zealot_ally_damage_taken_reduced"></a>
## 輕蔑之盾(Shield of Contempt)

- 描述鍵：`loc_talent_zealot_3_tier_4_ability_3_description`；hash：`96972711`。
- 結論：跨來源待遊戲內核對。繁中與英文皆指協同成員；固定來源的on_damage_taken廣播及本模板未做協同檢查。這是跨來源範圍差異，實際範圍待遊戲內核對，不單憑此判定翻譯錯誤。
- [原始碼推導與限制](zealot_ally_damage_taken_reduced.md)。

<a id="zealot_push_attacks_attack_speed"></a>
## 褻瀆必懲(Punish Impiety)

- 描述鍵：`loc_talent_zealot_push_attacks_attack_speed_desc`；hash：`ab4ad805`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_push_attacks_attack_speed.md)。

<a id="zealot_damage_boosts_movement"></a>
## 勃然大怒(Thy Wrath be Swift)

- 描述鍵：`loc_talent_zealot_movement_speed_on_damaged_desc`；hash：`bdaf3ea6`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_damage_boosts_movement.md)。

<a id="zealot_stamina_on_block_break"></a>
## 反制護盾(Retaliatory Defence)

- 描述鍵：`loc_talent_zealot_stamina_on_block_break_alt_desc`；hash：`2fb38d1a`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_stamina_on_block_break.md)。

<a id="zealot_reduced_damage_after_dodge"></a>
## 四平八穩(Good Balance)

- 描述鍵：`loc_talent_reduced_damage_after_dodge_description`；hash：`d65317f7`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_reduced_damage_after_dodge.md)。

<a id="zealot_toughness_in_melee"></a>
## 內憂外患(Enemies Within, Enemies Without)

- 描述鍵：`loc_talent_zealot_toughness_near_enemies_desc`；hash：`fc8eff61`。
- 結論：跨來源待遊戲內核對。本機中英文皆寫巨獸按5名敵人；固定update先為每名敵人加1，再為巨獸或頭目加5，實際6。不是繁中單方翻錯，待遊戲內確認。
- [原始碼推導與限制](zealot_toughness_in_melee.md)。

<a id="zealot_attack_speed"></a>
## 信仰狂亂(Faithful Frenzy)

- 描述鍵：`loc_talent_zealot_speed_desc`；hash：`6513bf51`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_attack_speed.md)。

<a id="zealot_additional_wounds"></a>
## 信仰之勇(Faith's Fortitude)

- 描述鍵：`loc_talent_zealot_3_tier_1_ability_3_description`；hash：`029afb2e`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_additional_wounds.md)。

<a id="zealot_increase_ranged_close_damage"></a>
## 鮮血受膏(Anoint in Blood)

- 描述鍵：`loc_talent_zealot_ranged_damage_increased_to_close_desc`；hash：`7504148a`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_increase_ranged_close_damage.md)。

<a id="zealot_uninterruptible_no_slow_heavies"></a>
## 不屈之志(Unfaltering)

- 描述鍵：`loc_talent_zealot_uninterruptible_no_slow_heavies_desc`；hash：`9e2ba609`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_uninterruptible_no_slow_heavies.md)。

<a id="zealot_stacking_melee_damage_after_dodge"></a>
## 靈活還擊(Riposte)

- 描述鍵：`loc_talent_zealot_stacking_melee_damage_after_dodge_desc`；hash：`b421dbe6`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_stacking_melee_damage_after_dodge.md)。

<a id="zealot_sprint_improvements"></a>
## 狂熱不懈(Relentless Fervor)

- 描述鍵：`loc_talent_zealot_sprint_improvements_alt_desc`；hash：`490f7206`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_sprint_improvements.md)。

<a id="zealot_damage_vs_nonthreat"></a>
## 無形之刃(Unseen Blade)

- 描述鍵：`loc_talent_zealot_damage_vs_nonthreat_desc`；hash：`9ca32fdb`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_damage_vs_nonthreat.md)。

<a id="zealot_defensive_knockback"></a>
## 大師的反擊(The Master's Retribution)

- 描述鍵：`loc_talent_zealot_3_tier_3_ability_1_description`；hash：`f3ca681a`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_defensive_knockback.md)。

<a id="zealot_bled_enemies_take_more_damage"></a>
## 血色迷障(Blinded by Blood)

- 描述鍵：`loc_talent_zealot_bled_enemies_take_more_damage_desc`；hash：`fb00baf2`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_bled_enemies_take_more_damage.md)。

<a id="zealot_more_damage_when_low_on_stamina"></a>
## 背水一戰(Desperation)

- 描述鍵：`loc_talent_zealot_damage_based_on_stamina_desc`；hash：`3a2192a6`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_more_damage_when_low_on_stamina.md)。

<a id="zealot_melee_crits_restore_stamina"></a>
## 刻不容緩(No Respite)

- 描述鍵：`loc_talent_zealot_melee_crits_restore_stamina_desc`；hash：`01adc74d`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_melee_crits_restore_stamina.md)。

<a id="zealot_revive_speed"></a>
## 神恩庇護(Providence)

- 描述鍵：`loc_talent_zealot_revive_speed_desc`；hash：`6421ecda`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_revive_speed.md)。

<a id="zealot_damage_vs_elites"></a>
## 弒除瀆者(Abolish Blasphemers)

- 描述鍵：`loc_talent_zealot_damage_vs_elites_desc`；hash：`43f97b1b`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_damage_vs_elites.md)。

<a id="zealot_weakspot_damage_reduction"></a>
## 傲慢(Hubris)

- 描述鍵：`loc_talent_zealot_weakspot_damage_reduction_desc`；hash：`b3615f2a`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_weakspot_damage_reduction.md)。

<a id="base_melee_damage_node_buff_medium_4"></a>
## 近戰增幅(Melee Damage Boost)

- 描述鍵：`loc_talent_melee_damage_boost_medium_desc`；hash：`7b5da013`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](base_melee_damage_node_buff_medium_4.md)。

<a id="zealot_elite_kills_empowers"></a>
## 頭號目標(Prime Target)

- 描述鍵：`loc_talent_zealot_elite_kills_empowers_desc`；hash：`3d3cbd01`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_elite_kills_empowers.md)。

<a id="zealot_suppress_on_backstab_kill"></a>
## 敵後行動(Behind the Lines)

- 描述鍵：`loc_talent_zealot_suppress_on_backstab_kill_desc`；hash：`2ae92ad1`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_suppress_on_backstab_kill.md)。

<a id="zealot_backstab_periodic_damage"></a>
## 殺戮時刻(Time to Kill)

- 描述鍵：`loc_talent_zealot_backstab_periodic_damage_desc`；hash：`f5f63199`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_backstab_periodic_damage.md)。

<a id="zealot_offensive_vs_many"></a>
## 逆境而上(Against the Odds)

- 描述鍵：`loc_talent_zealot_offensive_vs_many_desc`；hash：`d2cd1130`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_offensive_vs_many.md)。

<a id="zealot_reload_from_melee"></a>
## 自掏腰包(Out of Pocket)

- 描述鍵：`loc_talent_zealot_reload_from_melee_desc`；hash：`730a8c75`。
- 結論：明確繁中誤譯。同源英文from your Reserve表明備用彈藥是來源；繁中將彈藥儲備寫成恢復對象。實作transfer_from_reserve_to_clip也確認由備用彈藥移入彈匣。
- 繁中原文短引：近戰擊殺可恢復{ammo:%s}的缺失彈藥儲備。
- 同源英文：Melee Kills replenish {ammo:%s} of your Missing Ammo from your Reserve.
- [原始碼推導與限制](zealot_reload_from_melee.md)。

<a id="zealot_reduced_damage_from_ranged"></a>
## 排隊等候(Wait in Line)

- 描述鍵：`loc_talent_zealot_reduced_damage_from_ranged_desc`；hash：`5dbe3a42`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_reduced_damage_from_ranged.md)。

<a id="zealot_weapon_special_damage"></a>
## 神聖工具(Holy Tools)

- 描述鍵：`loc_talent_zealot_weapon_special_damage_desc`；hash：`21bf1b41`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_weapon_special_damage.md)。

<a id="zealot_melee_kills_restore_toughness_to_target"></a>
## 為您撐腰(Got Your Back)

- 描述鍵：`loc_talent_zealot_melee_kills_restore_toughness_to_target_desc`；hash：`185f78b2`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_melee_kills_restore_toughness_to_target.md)。

<a id="zealot_dmg_vs_burning_electrocuted"></a>
## 淨化仇恨(Purifying Hatred)

- 描述鍵：`loc_talent_zealot_dmg_vs_burning_electrocuted_desc`；hash：`34bfb2f6`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_dmg_vs_burning_electrocuted.md)。

<a id="zealot_improved_weapon_handling_after_dodge"></a>
## 死亡之舞(Dance of Death)

- 描述鍵：`loc_talent_zealot_improved_spread_post_dodge_desc`；hash：`b7d4f75a`。
- 結論：未見明確矛盾。核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。
- [原始碼推導與限制](zealot_improved_weapon_handling_after_dodge.md)。
