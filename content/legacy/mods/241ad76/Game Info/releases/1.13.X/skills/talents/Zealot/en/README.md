# Zealot talents: Release 1.13.1

[繁體中文](../README.md) | [Sources, formulas and technical index](SOURCE_INDEX.md) | [Talent classes](../../../README.en.md) | [Release information](../../../../README.md)

[Class base effects](BASE_EFFECTS.md)

<a id="talent-index"></a>

## Talent index

| Talent | Main effect | Category |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/aaab981f-d4ba-4278-b79d-873fccac1faa" width="32" height="32" alt="Immolation Grenade talent icon"> [Immolation Grenade](#zealot_flame_grenade) | <ul><li>Carry up to 3 grenades; detonation leaves a flaming area for 15 seconds.</li><li>Burns enemies in the area; damage varies with difficulty, armour and each random roll.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/8d21cff6-d918-4e91-8426-b98634887a03" width="32" height="32" alt="Blades of Faith talent icon"> [Blades of Faith](#zealot_throwing_knives) | <ul><li>Replace grenades with 12 throwing knives; quick throws are possible while sprinting.</li><li>Melee Elite or Specialist kills restore 1 knife; Ammo pickups also replenish them.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/73777d2d-3727-47dc-8093-0d25ec6a3cfd" width="32" height="32" alt="Stunstorm Grenade talent icon"> [Stunstorm Grenade](#zealot_improved_stun_grenade) | <ul><li>Increase Stun Grenade blast radius by 50%, from a maximum 8 to 12 metres.</li><li>Carry up to 3; hits apply 8 seconds of Electrocution.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/da0a72a9-f944-4291-a753-a8c87b696ad5" width="32" height="32" alt="Benediction talent icon"> [Benediction](#zealot_toughness_damage_reduction_coherency_improved) | <ul><li>You and allies in Coherency take 15% less Toughness damage.</li><li>Replaces the base 7.5% Aura; identical Auras do not apply repeatedly.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/ac37d3b8-a749-4604-98ba-2781c220761f" width="32" height="32" alt="Beacon of Purity talent icon"> [Beacon of Purity](#zealot_corruption_healing_coherency_improved) | <ul><li>Remove 1.5 Corruption points each second from you and allies in Coherency.</li><li>Only removes Corruption within the current Wound; cannot restore a fully lost Wound.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/9e356573-f707-473e-8a64-943ae670aeeb" width="32" height="32" alt="Zealous talent icon"> [Zealous](#zealot_stamina_cost_multiplier_aura) | <ul><li>You and allies in Coherency spend 15% less Stamina.</li><li>Reduce the delay before Stamina recovery starts by 0.15 seconds.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/4ae30922-3e39-4ded-8e19-35ec595befa0" width="32" height="32" alt="Chorus of Spiritual Fortitude talent icon"> [Chorus of Spiritual Fortitude](#zealot_bolstering_prayer) | <ul><li>Channel for about 3.67 seconds, with about 5 pulses; base cooldown 60 seconds.</li><li>Restore Toughness and temporarily raise its maximum for you and Coherency allies, with brief Unkillable and ordinary Stagger immunity.</li><li>Pulses Stagger and Suppress nearby enemies.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/bd841f6f-e0ff-4cfa-a3ac-f7d08bfbc80e" width="32" height="32" alt="Fury of the Faithful talent icon"> [Fury of the Faithful](#zealot_attack_speed_post_ability) | <ul><li>Dash forward and restore 50% maximum Toughness; base cooldown 30 seconds.</li><li>Gain 20% Attack Speed for about 11 seconds.</li><li>The next qualifying Melee Hit within 3 seconds gains 25% damage, a guaranteed Critical Hit and 100% Rending.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/1ca3f2a1-fbd3-41f7-83f3-895522b50b29" width="32" height="32" alt="Holy Cause talent icon"> [Holy Cause](#zealot_channel_grants_toughness_damage_reduction) | <ul><li>Each Chorus pulse grants you and Coherency allies 8% Toughness damage reduction, up to 5 stacks/40%.</li><li>Lasts 10 seconds; later pulses refresh the duration.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/1abe7e62-3810-4680-9c49-7f6091782ab6" width="32" height="32" alt="Ecclesiarch's Call talent icon"> [Ecclesiarch's Call](#zealot_channel_grants_damage) | <ul><li>Each Chorus pulse adds 6% Damage, up to 5 stacks / 30%.</li><li>Affects you and Coherency allies; lasts 10 seconds and refreshes on later pulses.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/35487761-88d3-4091-ac1b-bde3020e300e" width="32" height="32" alt="Redoubled Zeal talent icon"> [Redoubled Zeal](#zealot_additional_charge_of_ability) | <ul><li>Fury of the Faithful has 2 charges. Both uses share one recharge pool; after spending both, natural recharge restores one after about 30 seconds and both after about 60 seconds.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/313c803f-9a12-4470-9660-ce9a8fd308c9" width="32" height="32" alt="Shroudfield talent icon"> [Shroudfield](#zealot_stealth) | <ul><li>Enter Stealth for 3 seconds; base cooldown 30 seconds. Gain 20% Movement Speed, 150% Backstab/Finesse bonuses, 100 percentage points of Critical Chance and 100% Melee Rending. Qualifying attacks and actions end Stealth.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/064d2729-f3e2-4868-bc34-1bcf434d9f4d" width="32" height="32" alt="Master-Crafted Shroudfield talent icon"> [Master-Crafted Shroudfield](#zealot_increased_duration) | <ul><li>Extend Shroudfield from 3 to 5 seconds. After leaving Stealth, gain 75% lower threat weight and 50% Melee Backstab damage for 5 seconds.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/d5730c05-1fc1-4fd5-9943-53bf390b9a7d" width="32" height="32" alt="Invigorating Revelation talent icon"> [Invigorating Revelation](#zealot_leaving_stealth_restores_toughness) | <ul><li>Entering Shroudfield restores 50% maximum Toughness. Leaving Stealth grants 30% damage reduction for 8 seconds.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/9e0abda0-3593-44eb-8ca8-9a7f282bcfd8" width="32" height="32" alt="Martyr's Purpose talent icon"> [Martyr's Purpose](#zealot_restore_stealth_cd_on_damage) | <ul><li>Lower current Health increases combat ability recharge. At 25% Health or less, gain up to 0.5 additional resource per second, equivalent to +50% regeneration when natural recharge is 1 resource/s.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/9768a27f-3a7b-47c7-a334-7f1f57db287a" width="32" height="32" alt="Pious Cut-Throat talent icon"> [Pious Cut-Throat](#zealot_backstab_kills_restore_cd) | <ul><li>A Melee Backstab or Weakspot hit grants extra cooldown recovery for 2 seconds, without requiring a kill. Restore 0.75 additional combat ability resource per second; further hits refresh duration.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/e185301f-93c5-4f93-8c09-7aa351258173" width="32" height="32" alt="Invocation of Death talent icon"> [Invocation of Death](#zealot_crits_grant_cd) | <ul><li>A Melee Critical Hit grants extra ability recharge for about 3.25 seconds, at most once per swing. Restore 1 additional resource per second; further swings can refresh duration without stacking the rate.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/d95452d2-3c7a-419f-9461-3d32dc95ce2f" width="32" height="32" alt="Unrelenting Fury talent icon"> [Unrelenting Fury](#zealot_fotf_refund_cooldown) | <ul><li>Kill an Elite or Specialist within 5 seconds of Fury of the Faithful to refund 20% of one charge. Maximum once per use; a base 30-second charge refunds 6 seconds of progress.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/8532537c-fff4-4014-8ee6-e16572b9cdeb" width="32" height="32" alt="Perfectionist talent icon"> [Perfectionist](#zealot_stealth_cooldown_regeneration) | <ul><li>A qualifying Stealth kill refunds one charge's cooldown resource, at most once per Stealth: Monstrosities 50%, Ogryns 30%, others 15%. With base cooldown 30 seconds, these are 15, 9 and 4.5 seconds of progress.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/382b6c6a-80b7-4c64-81f9-63d37df43671" width="32" height="32" alt="Until Death talent icon"> [Until Death](#zealot_resist_death) | <ul><li>Fatal damage grants Unkillable for 8 seconds. The 120-second cooldown begins after the effect ends.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/5ac2048f-e48f-49ea-b739-e9c3301e66da" width="32" height="32" alt="Martyrdom talent icon"> [Martyrdom](#zealot_martyrdom) | <ul><li>Gain 10% Melee Damage for each fully missing Wound, up to 5 stacks / 50%. Stacks follow current missing Health segments, including Corruption.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/3e61d06f-e542-40cc-acf4-88e2493cc594" width="32" height="32" alt="I Shall Not Fall talent icon"> [I Shall Not Fall](#zealot_martyrdom_grants_toughness) | <ul><li>Each fully missing Wound counted by Martyrdom reduces Toughness damage taken by 7.5%, up to 5 Wounds / 37.5%.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/2a096b34-3273-406a-82fc-23c774fcaedf" width="32" height="32" alt="Maniac talent icon"> [Maniac](#zealot_martyrdom_grants_attack_speed) | <ul><li>Each fully missing Wound counted by Martyrdom grants 6% Melee Attack Speed, up to 5 Wounds / 30%.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/0a442a9a-29b1-4a94-b85c-5772f9d85d7c" width="32" height="32" alt="Inexorable Judgement talent icon"> [Inexorable Judgement](#zealot_quickness_passive) | <ul><li>Movement grants 1 Momentum stack per 5 metres, maximum 20; Sprint distance counts double. A Melee or Ranged Hit spends current stacks for a 6-second bonus to damage, attack speeds and dodge stats.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/54fb5877-384e-4378-885f-95cb1daed864" width="32" height="32" alt="Retributor's Stance talent icon"> [Retributor's Stance](#zealot_momentum_toughness_replenish) | <ul><li>During Inexorable Judgement's active bonus, replenish 0.5% maximum Toughness per second for each spent Momentum stack.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/b51610bf-5b84-45d0-97fe-abedede00719" width="32" height="32" alt="Inebriate's Poise talent icon"> [Inebriate's Poise](#zealot_quickness_passive_dodge_stacks) | <ul><li>A successful Dodge grants 3 additional Momentum stacks for Inexorable Judgement, sharing the 20-stack cap.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/9f0fd090-59a4-4098-b4ed-c2bdfa7d1eab" width="32" height="32" alt="Holy Revenant talent icon"> [Holy Revenant](#zealot_resist_death_heal) | <ul><li>Until Death's fatal-damage trigger knocks back nearby enemies. While Unkillable, damage adds to a reusable healing pool; Melee converts at 3 times the ordinary rate.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/7e8dfc94-5f9b-4292-a4e6-8190bebb48bc" width="32" height="32" alt="Blazing Piety talent icon"> [Blazing Piety](#zealot_fanatic_rage) | <ul><li>Nearby enemy deaths and your Critical Hits build Fury. At 25 stacks, gain 15 percentage points of Critical Chance for 8 seconds; further qualifying events at full stacks refresh it.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/0fd06e0a-ef14-4228-8cd5-02980c989f05" width="32" height="32" alt="Stalwart talent icon"> [Stalwart](#zealot_fanatic_rage_toughness_on_max) | <ul><li>Entering Fury restores 50% of maximum Toughness once. At full Fury stacks, gain 25% Toughness Damage Reduction and restore 2% of maximum Toughness per second.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/9d85e538-7fb1-4308-99b9-7ed9408eead2" width="32" height="32" alt="Righteous Warrior talent icon"> [Righteous Warrior](#zealot_fanatic_rage_improved) | <ul><li>Blazing Piety grants another 10 percentage points of Critical Chance during Fury, for a total talent bonus of 25 points.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/d1133aca-9af8-4b47-934f-d073de0d4e1c" width="32" height="32" alt="Infectious Zeal talent icon"> [Infectious Zeal](#zealot_shared_fanatic_rage) | <ul><li>When Fury starts, other allies currently in Coherency gain 10 percentage points of Critical Chance for 8 seconds; refreshing your Fury does not extend their existing bonus.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/5ac46e08-8f7b-4828-8bfa-e47c240e113b" width="32" height="32" alt="Restorative Verses talent icon"> [Restorative Verses](#zealot_martyrdom_toughness_modifier) | <ul><li>Each complete missing Wound counted by Martyrdom increases Toughness replenishment by 5%, up to 5 stacks and +25%; gaining stacks does not directly restore Toughness.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/aee84e86-4f0b-4d69-87e7-9602f27396e2" width="32" height="32" alt="Eternal talent icon"> [Eternal](#zealot_quickness_increased_duration) | <ul><li>Inexorable Judgement's active bonus lasts 10 seconds instead of 6.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/9bc683a7-534a-4244-8381-1a6c0463003f" width="32" height="32" alt="On the Brink talent icon"> [On the Brink](#zealot_corruption_resistance_stacking) | <ul><li>Each complete missing Wound counted by Martyrdom reduces Corruption damage taken by 10%, up to 5 Wounds and 50%.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/121a9a79-f78e-4274-a0ac-4a1683244ae7" width="32" height="32" alt="Zealous Pilgrim talent icon"> [Zealous Pilgrim](#zealot_resist_death_ability) | <ul><li>Ability use grants 4 seconds of Unkillable; Shroudfield starts it upon leaving Stealth, Chorus upon unwielding the relic. While Unkillable, gain 10% Damage and Attack Speed.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/f88c569e-c89d-4850-b84b-17c5af69faf0" width="32" height="32" alt="Fire and Fury talent icon"> [Fire and Fury](#zealot_resist_death_fire) | <ul><li>While Unkillable, weapon hits apply Burn to living enemies: 3 stacks for Melee, 1 for Ranged, up to 12 from this talent.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/439077af-f74c-4c06-8a8a-dbeab52d9a53" width="32" height="32" alt="Risen talent icon"> [Risen](#zealot_resist_death_golden_toughness) | <ul><li>While Unkillable, gain 5 maximum Toughness per second, up to 8 stacks/+40. Added stacks refresh a 5-second duration, and raising the cap also raises current Toughness.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/96dc3500-2674-43bb-9fa9-10992eb3bcb8" width="32" height="32" alt="Scourge talent icon"> [Scourge](#zealot_crits_apply_bleed) | <ul><li>Damaging Melee Critical Hits apply 2 Bleed stacks to living enemies. Melee hits on bleeding targets build +10 percentage points of Melee Critical Chance per stack, up to 3 for 3 seconds.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/86a86e7f-6fc0-4eda-81e8-f13519f3cb8c" width="32" height="32" alt="Backstabber talent icon"> [Backstabber](#zealot_backstab_damage) | <ul><li>Deal 25% more damage on Melee Backstabs and Ranged Flanking hits.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/69a5f7ea-11bc-41ae-8758-86a14213a116" width="32" height="32" alt="Disdain talent icon"> [Disdain](#zealot_multi_hits_increase_damage) | <ul><li>Each enemy hit by the previous Melee sweep adds 5% damage to the next Melee attack, up to 5 enemies/+25%.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/162368d9-1a5d-4273-a2cd-4ab8c3c22a6d" width="32" height="32" alt="Purge the Unclean talent icon"> [Purge the Unclean](#zealot_increased_damage_vs_resilient) | <ul><li>Deal 20% more damage against Infested and Unyielding armour types, according to the hit location's armour.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/9e5a26dc-8d4f-4c94-9dcd-fdc807cc1d48" width="32" height="32" alt="Sustained Assault talent icon"> [Sustained Assault](#zealot_hits_grant_stacking_damage) | <ul><li>Melee hits grant 4% Melee Damage for 5 seconds, up to 5 stacks/+20%; further hits refresh duration, including at full stacks.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/c3395dd2-63a2-430a-9eec-fb9ecd995308" width="32" height="32" alt="Enduring Faith talent icon"> [Enduring Faith](#zealot_crits_reduce_toughness_damage) | <ul><li>Critical Hits reduce Toughness damage taken by 40% for 4 seconds; both Melee and Ranged crits trigger it.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/7d6f33d9-5ed5-49d9-9f4c-333565e17216" width="32" height="32" alt="Second Wind talent icon"> [Second Wind](#zealot_toughness_on_dodge) | <ul><li>Successfully dodging an attack restores 15% of maximum Toughness, at most once every 0.5 seconds.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/79a0a582-a493-49eb-a470-ab7ed7e7f782" width="32" height="32" alt="Melee Damage Boost talent icon"> [Melee Damage Boost](#base_melee_damage_node_buff_medium_1) | <ul><li>Gain +10% Melee damage; both same-name nodes together give +20%.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/fb4eb2d4-1dee-4596-8262-2c99311be059" width="32" height="32" alt="The Voice of Terra talent icon"> [The Voice of Terra](#zealot_toughness_while_shooting) | <ul><li>Shooting restores 10% of maximum Toughness per second, continuing about 0.5 seconds after firing stops; hits and kills are not required.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/0849a882-e966-43d8-8786-554a7a657ee2" width="32" height="32" alt="Restoring Faith talent icon"> [Restoring Faith](#zealot_heal_part_of_damage_taken) | <ul><li>After taking Health damage, gradually heal 20% of that damage over about 4 seconds; Toughness damage is excluded.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/ba989f49-6c6c-4457-bc33-f09ab8342c1f" width="32" height="32" alt="Bleed for the Emperor talent icon"> [Bleed for the Emperor](#zealot_reduced_damage_on_wound) | <ul><li>If Health damage would cross the next Wound threshold, reduce that entire Health-damage amount by 40%; landing exactly on the threshold does not trigger it.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/eb0f681c-574a-447c-b917-9413f146fd72" width="32" height="32" alt="Vicious Offering talent icon"> [Vicious Offering](#zealot_toughness_on_heavy_kills) | <ul><li>A Heavy Attack kill restores an extra 10% of maximum Toughness; merely hitting without a kill does not trigger it.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/f86258bf-77ad-44c3-99b0-628042e47315" width="32" height="32" alt="Toughness Damage Reduction talent icon"> [Toughness Damage Reduction](#base_toughness_damage_reduction_node_buff_medium_1) | <ul><li>Reduce incoming Toughness damage by 10%.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/dcdcc79a-ad1b-4fb3-9ac1-a6fcc1a71a56" width="32" height="32" alt="Duellist talent icon"> [Duellist](#zealot_increased_crit_and_weakspot_damage_after_dodge) | <ul><li>A successful Dodge increases extra Weakspot/Critical damage by 50% for 3 seconds; another successful Dodge restarts the timer.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/42daeb1b-ec7d-4f9b-bc58-f89c1de5d9b4" width="32" height="32" alt="Shield of Contempt talent icon"> [Shield of Contempt](#zealot_ally_damage_taken_reduced) | <ul><li>After you or an ally takes Health damage, the injured player gains 60% damage reduction for 4 seconds; each holder shares an 8-second trigger cooldown.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/a2373334-1398-4475-b263-5b2d56cf8b90" width="32" height="32" alt="Punish Impiety talent icon"> [Punish Impiety](#zealot_push_attacks_attack_speed) | <ul><li>A hit from the attack following a push grants +10% Melee Attack Speed for 5 seconds; another trigger restarts the timer.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/52db08a6-3729-466e-ac16-d02a1a7ebecb" width="32" height="32" alt="Thy Wrath be Swift talent icon"> [Thy Wrath be Swift](#zealot_damage_boosts_movement) | <ul><li>Taking damage grants +15% Movement Speed for 2 seconds; ordinary hit slowdown and stun immunity are always active.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/607612bf-67ee-475e-9a16-0b5541c7b4ea" width="32" height="32" alt="Retaliatory Defence talent icon"> [Retaliatory Defence](#zealot_stamina_on_block_break) | <ul><li>When available, a Block Break restores 50% of maximum Stamina and prevents that Block Break's stun; 12-second cooldown.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/41e85f89-6787-4fe4-9fd7-a2382f2aa025" width="32" height="32" alt="Good Balance talent icon"> [Good Balance](#zealot_reduced_damage_after_dodge) | <ul><li>A successful Dodge reduces damage taken by 25% for 2.5 seconds; another successful Dodge restarts the timer.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/fbb6b38f-57a3-4659-bf32-04d1edc4d989" width="32" height="32" alt="Enemies Within, Enemies Without talent icon"> [Enemies Within, Enemies Without](#zealot_toughness_in_melee) | <ul><li>Enemies within 5 metres grant ongoing Toughness restoration, from 2.5% up to 7.5% of maximum Toughness per second.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/c184be29-e45d-4968-acc5-ae67779d90cc" width="32" height="32" alt="Faithful Frenzy talent icon"> [Faithful Frenzy](#zealot_attack_speed) | <ul><li>Permanently grants +10% Melee Attack Speed and +5% Movement Speed.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/793e953e-5b99-416a-99c8-c6d185df7cc9" width="32" height="32" alt="Faith's Fortitude talent icon"> [Faith's Fortitude](#zealot_additional_wounds) | <ul><li>Adds 2 Wounds while leaving maximum Health unchanged.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/f1f336d8-dc80-46a3-b756-2df08b26f541" width="32" height="32" alt="Anoint in Blood talent icon"> [Anoint in Blood](#zealot_increase_ranged_close_damage) | <ul><li>While holding a Ranged weapon, nearby-target damage gains up to 25%; the bonus falls with distance and reaches zero at 30 metres.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/7af1f56a-9932-428e-91c5-47b14836d6cb" width="32" height="32" alt="Unfaltering talent icon"> [Unfaltering](#zealot_uninterruptible_no_slow_heavies) | <ul><li>During Heavy Attack windup, prevents ordinary hit stun/interruption and removes the windup action's own movement slowdown.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/7a00054d-1b7e-448e-a9f3-eee60922b19e" width="32" height="32" alt="Riposte talent icon"> [Riposte](#zealot_stacking_melee_damage_after_dodge) | <ul><li>Each successful Dodge grants +5% Melee Damage per stack, up to 3 stacks; triggering again restarts the 8-second duration.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/bcb76321-c69e-466f-b588-a894e8c63443" width="32" height="32" alt="Relentless Fervor talent icon"> [Relentless Fervor](#zealot_sprint_improvements) | <ul><li>Grants +10% Sprint Speed and −10% Sprint Cost; continuous Sprinting for 1 second grants Slowdown Immunity until Sprinting stops.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/c97e932c-97b3-454c-9047-2145a5d9a49d" width="32" height="32" alt="Unseen Blade talent icon"> [Unseen Blade](#zealot_damage_vs_nonthreat) | <ul><li>Deals +20% damage to enemies that are not currently targeting you; applies to Melee and Ranged damage.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/56d9b0f2-db5a-493b-aff8-2cd9699d4d96" width="32" height="32" alt="The Master's Retribution talent icon"> [The Master's Retribution](#zealot_defensive_knockback) | <ul><li>A damaging Melee hit triggers a retaliatory push toward the attacker, with an 8-second cooldown; disabled state or a dead attacker prevents it.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/4b9e6b94-1960-44a0-aca5-40446806c270" width="32" height="32" alt="Blinded by Blood talent icon"> [Blinded by Blood](#zealot_bled_enemies_take_more_damage) | <ul><li>Your Bleed application, added stack or duration refresh makes that enemy take 15% more damage for 5 seconds; allies also benefit.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/dbe8719f-76fb-444c-a79d-2bf116b628fb" width="32" height="32" alt="Desperation talent icon"> [Desperation](#zealot_more_damage_when_low_on_stamina) | <ul><li>Melee damage increases with the proportion of missing Stamina, from zero at full Stamina to +20% when empty.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/6406ef43-19df-4cab-9091-e5c490d72cef" width="32" height="32" alt="No Respite talent icon"> [No Respite](#zealot_melee_crits_restore_stamina) | <ul><li>Melee Critical Hits restore 10% of maximum Stamina, with a 1-second cooldown.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/ef521c17-0aae-4e01-b54c-9a25d1f9d792" width="32" height="32" alt="Providence talent icon"> [Providence](#zealot_revive_speed) | <ul><li>Revive speed increases by 25%; assisted allies gain Movement Speed and Toughness Damage Reduction.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/9b7dda36-1d18-41b4-9e28-3cfd26f0ad66" width="32" height="32" alt="Abolish Blasphemers talent icon"> [Abolish Blasphemers](#zealot_damage_vs_elites) | <ul><li>Deal 15% more damage to Elite enemies.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/2ea26a3b-1222-4c56-8120-26a65b4595fa" width="32" height="32" alt="Hubris talent icon"> [Hubris](#zealot_weakspot_damage_reduction) | <ul><li>Weakspot Kills reduce damage taken by 15% for 4 seconds.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/0c800eb0-7fc1-4c5c-b3c2-67d20a7db2ff" width="32" height="32" alt="Melee Damage Boost talent icon"> [Melee Damage Boost](#base_melee_damage_node_buff_medium_4) | <ul><li>Gain +10% Melee damage; both same-name nodes together give +20%.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/e3c3d16b-83a0-4dfb-a797-080ed9e63c4b" width="32" height="32" alt="Prime Target talent icon"> [Prime Target](#zealot_elite_kills_empowers) | <ul><li>Elite Kills grant +10% damage and restore 15% of maximum Toughness over 5 seconds.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/5d469457-ce3e-4c4f-ac25-c0759b30b61f" width="32" height="32" alt="Behind the Lines talent icon"> [Behind the Lines](#zealot_suppress_on_backstab_kill) | <ul><li>Heavy Melee Backstab Kills suppress enemies within 8 metres of you, with a 5-second cooldown.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/4bf327a5-94f0-4af9-ad51-b3380308846e" width="32" height="32" alt="Time to Kill talent icon"> [Time to Kill](#zealot_backstab_periodic_damage) | <ul><li>The next valid Melee Backstab deals +50% damage, then starts an 8-second cooldown.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/9b626554-120f-43b1-b152-bf21224b6a42" width="32" height="32" alt="Against the Odds talent icon"> [Against the Odds](#zealot_offensive_vs_many) | <ul><li>Every 2 enemies within 5 metres grant +2% damage and +10% Cleave, up to 5 stacks.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/e1dda6ab-d49e-4d08-bd44-f684dae4913f" width="32" height="32" alt="Out of Pocket talent icon"> [Out of Pocket](#zealot_reload_from_melee) | <ul><li>Melee Kills transfer 10% of the magazine's missing ammunition from reserves.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/ec2c5209-fa69-4340-b6d9-bca627da0840" width="32" height="32" alt="Wait in Line talent icon"> [Wait in Line](#zealot_reduced_damage_from_ranged) | <ul><li>Take 20% less damage from Ranged attacks.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/28bd1a77-6a4b-44e5-b46c-1d1a334479e7" width="32" height="32" alt="Holy Tools talent icon"> [Holy Tools](#zealot_weapon_special_damage) | <ul><li>Activating a Melee Weapon Special grants +20% damage to the next Melee attack within 5 seconds.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/5ddb9790-0039-4a22-97e6-8ff7c82719c0" width="32" height="32" alt="Got Your Back talent icon"> [Got Your Back](#zealot_melee_kills_restore_toughness_to_target) | <ul><li>Melee Kills against enemies targeting an ally restore 7.5% of that ally's maximum Toughness and an extra 5% of yours.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/8137f892-5370-4a69-b790-556f579414d2" width="32" height="32" alt="Purifying Hatred talent icon"> [Purifying Hatred](#zealot_dmg_vs_burning_electrocuted) | <ul><li>Deal +15% damage to Burning enemies and another +15% to Electrocuted enemies; both conditions give +30%.</li></ul> | Skill |
| <img src="https://github.com/user-attachments/assets/a007251f-9a21-4822-b2e4-38eac8e0ae56" width="32" height="32" alt="Dance of Death talent icon"> [Dance of Death](#zealot_improved_weapon_handling_after_dodge) | <ul><li>Successful Dodges reduce Spread by 75% and Recoil unsteadiness buildup by 50% for 3 seconds.</li></ul> | Skill |

---

## Blitz

<a id="zealot_flame_grenade"></a>

### Immolation Grenade

<img src="https://github.com/user-attachments/assets/aaab981f-d4ba-4278-b79d-873fccac1faa" width="72" height="72" alt="Immolation Grenade talent icon">

- **Operation**: Carry up to **3**; the fuse is **1.7 seconds**. Detonation first deals explosion damage, then leaves a flaming area lasting **15 seconds**.
- **Ongoing damage**: Enemies inside take Burn damage approximately every **0.5–1.25 seconds**. Each instance is randomly **50%–150%** of that difficulty's baseline. Leaving the fire also applies **1 second** of lingering Burn.
- **Damage example**: With an Unarmoured baseline of **100** for one Burn instance, and no other increases or reductions, a 50% roll deals `100 × 0.5 = 50`; a 150% roll deals `100 × 1.5 = 150`. Under the same conditions, Flak baseline damage is **75**, and Carapace **5**.
- **Calculation limits**: Initial explosion, Burn while standing in the fire, and lingering Burn after leaving are calculated separately. Both damage and intervals vary; these single-instance numbers are not damage per second.

#### Traditional Chinese localization note

- The Chinese description renders English **“Burning and Staggering”** as burning and stunning. Here it should describe **Stagger**, not **Stun**; the terms must remain distinct.

[Details](zealot_flame_grenade.md) · [Back to index](#talent-index)

---

<a id="zealot_throwing_knives"></a>

### Blades of Faith

<img src="https://github.com/user-attachments/assets/8d21cff6-d918-4e91-8426-b98634887a03" width="72" height="72" alt="Blades of Faith talent icon">

- **Operation**: Replace grenades with up to **12 throwing knives**, throwable while sprinting. Ordinary grenade pickups cannot replenish knives.
- **Damage and armour**: On an ordinary hit without other modifiers, baseline damage to an Unarmoured hit zone is **585**; Flak gives `585 × 0.8 = 468`, and Carapace ordinary-hit baseline is **0**. Weakspots, Critical Hits, Rending and enemy hit zones change the result; zero here does not mean heavily armoured enemies cannot be damaged under any circumstances.
- **Melee replenishment**: Your melee kill of an Elite or Specialist restores **1 knife**, up to 12. Starting with 11, a qualifying kill gives `11 + 1 = 12`.
- **Ammo example**: Without extra replenishment multipliers, a small Ammo pickup restores `12 × 15% = 1.8`, rounded up to **2** knives; a large pickup restores `12 × 50% = 6`; a deployed Ammo Crate can refill to maximum. Mission Ammo replenishment multipliers affect these amounts; the final count remains capped at **12**.
- **Throw timing**: The standard action launches the knife **0.25 seconds** after starting and lasts **0.55 seconds** in total. This excludes flight time.

[Details](zealot_throwing_knives.md) · [Back to index](#talent-index)

---

<a id="zealot_improved_stun_grenade"></a>

### Stunstorm Grenade

<img src="https://github.com/user-attachments/assets/73777d2d-3727-47dc-8093-0d25ec6a3cfd" width="72" height="72" alt="Stunstorm Grenade talent icon">

- **Operation**: Upgrade the base Stun Grenade with **50%** more blast radius. Carry up to **3**; fuse **1.5 seconds**.
- **Radius example**: With this talent as the only radius modifier, maximum radius is `8 × 1.5 = 12 metres`, and the close-range radius is `2 × 1.5 = 3 metres`. Hit detection still depends on explosion position and obstructions.
- **Electrocution**: Hits apply **8 seconds** of Electrocution, with damage approximately every **0.3–0.8 seconds**. Another hit refreshes the timer; the same effect does not build multiple stacks. Sustained control still depends on enemy control resistance.
- **Damage example**: For periodic Electrocution only, without other modifiers, one instance deals `8 × 0.5 = 4` to Unarmoured zones and `8 × 1 = 8` to Flak. The initial explosion is separate.
- **Exception**: A Poxwalker Bomber already in a staggered state does not take this periodic Electrocution damage. This does not mean it is completely immune to the grenade's explosion or control.

[Details](zealot_improved_stun_grenade.md) · [Back to index](#talent-index)

---

## Aura

<a id="zealot_toughness_damage_reduction_coherency_improved"></a>

### Benediction

<img src="https://github.com/user-attachments/assets/da0a72a9-f944-4291-a753-a8c87b696ad5" width="72" height="72" alt="Benediction talent icon">

- **Effect**: You and allies in Coherency take **15% less Toughness damage**. This does not directly reduce Health damage.
- **Damage example**: Original Toughness damage **100** becomes `100 × (1 − 15%) = 85`. With an independently calculated **40%** Toughness damage reduction, the result is `100 × 0.85 × 0.6 = 51`.
- **Replacement and duplicate sources**: Replaces the base **7.5%** Toughness damage reduction Aura; they do not add to **22.5%**. Multiple allies providing Benediction still apply the **15%** reduction once.

[Details](zealot_toughness_damage_reduction_coherency_improved.md) · [Back to index](#talent-index)

---

<a id="zealot_corruption_healing_coherency_improved"></a>

### Beacon of Purity

<img src="https://github.com/user-attachments/assets/ac37d3b8-a749-4604-98ba-2781c220761f" width="72" height="72" alt="Beacon of Purity talent icon">

- **Effect**: Every **1 second**, remove **1.5 Corruption points** from you and allies in Coherency. This is a fixed amount, not **1.5%** of maximum Health.
- **Recovery example**: With all Wounds intact and **10 Corruption**, one recovery gives `10 − 1.5 = 8.5`. With no new Corruption, **7** recoveries remove the full 10.
- **Wound limit**: Cannot restore a fully lost Wound. At **200 maximum Health / 4 Wounds**, with one Wound lost and **60 Corruption**, removal stops at **51**; the Aura cannot recover the lost Wound.
- **Duplicate sources**: Multiple allies with the same Aura still remove **1.5 points per second**, rather than 3 or more.

[Details](zealot_corruption_healing_coherency_improved.md) · [Back to index](#talent-index)

---

<a id="zealot_stamina_cost_multiplier_aura"></a>

### Zealous

<img src="https://github.com/user-attachments/assets/9e356573-f707-473e-8a64-943ae670aeeb" width="72" height="72" alt="Zealous talent icon">

- **Effect**: You and allies in Coherency spend **15% less Stamina** and have **0.15 seconds** less Stamina recovery delay.
- **Cost example**: An action normally costing **20** Stamina costs `20 × (1 − 15%) = 17`. The cost falls by 15%; it is not 15% of the original cost.
- **Recovery example**: If recovery normally starts **0.50 seconds** after expenditure stops, it now starts after `0.50 − 0.15 = 0.35 seconds`. The recovery rate per second itself does not increase.
- **Duplicate sources**: Multiple allies providing Zealous still apply the effect once; they do not reduce Stamina cost by **30%**.

[Details](zealot_stamina_cost_multiplier_aura.md) · [Back to index](#talent-index)

---

## Ability

<a id="zealot_bolstering_prayer"></a>

### Chorus of Spiritual Fortitude

<img src="https://github.com/user-attachments/assets/4ae30922-3e39-4ded-8e19-35ec595befa0" width="72" height="72" alt="Chorus of Spiritual Fortitude talent icon">

- **Channeling**: Raise the relic for about **3.67 seconds**, pulsing immediately and then every **0.8 seconds**. A full channel has about **5 pulses**, affecting you and allies in Coherency.
- **Toughness recovery**: Each pulse restores **20% of current maximum Toughness**; channeling additionally restores **25% of maximum Toughness per second**. Each pulse adds **15 maximum Toughness**, up to **5 stacks / +75**, lasting **10 seconds** after the last pulse.
- **Recovery example**: Ignore continuous recovery between pulses. With maximum Toughness **100** and current **40**, the first pulse restores `100 × 20% = 20`, then adds **15** to both current and maximum, giving **75/115**. Subsequent per-second recovery also uses the current maximum; at 115 it is `115 × 25% = 28.75`.
- **Protection and control**: Each pulse grants **1.5 seconds** of Unkillable and ordinary hit Stagger immunity, while Staggering and Suppressing nearby susceptible enemies. Unkillable does not mean no damage is taken.
- **Cooldown**: Base **60 seconds**, **1 charge**. Natural recovery pauses while holding the relic and resumes after putting it away. Interrupting early reduces pulse count.

[Details](zealot_bolstering_prayer.md) · [Back to index](#talent-index)

---

<a id="zealot_attack_speed_post_ability"></a>

### Fury of the Faithful

<img src="https://github.com/user-attachments/assets/bd841f6f-e0ff-4cfa-a3ac-f7d08bfbc80e" width="72" height="72" alt="Fury of the Faithful talent icon">

- **Dash and cooldown**: Dash forward, with a normal distance of **7 metres** or up to **21 metres** with a selected target. Collision and traversable paths affect movement. Base cooldown **30 seconds**, **1 charge**.
- **Toughness recovery**: Activation restores **50% of maximum Toughness**. At maximum 100/current20, restore **50** to reach **70**; at current70, only the missing **30** is restored.
- **Attack Speed**: Gain **20% Attack Speed** for about **11 seconds**. Isolating this bonus, an affected 1-second action takes `1 ÷ 1.2 ≈ 0.833 seconds`. Another activation refreshes the duration.
- **Next Melee Hit**: Within **3 seconds**, the next qualifying Melee Hit gains **25% Melee Damage**, a guaranteed Critical Hit and **100% melee Rending**. Pushes and ranged hits do not consume this enhancement.
- **Damage example**: Isolate the Melee Damage stage first: baseline100 gives `100 × 1.25 = 125`; with an existing same-stage **20%** bonus, the result is **145**. Critical extra damage and Rending's armour effects are separate; 125 is not every weapon's final damage.
- **Special attacks**: Certain weapon specials that remain attached to an enemy can retain the enhancement until that attack ends. Exact behavior depends on the weapon.

[Details](zealot_attack_speed_post_ability.md) · [Back to index](#talent-index)

---

<a id="zealot_channel_grants_toughness_damage_reduction"></a>

### Holy Cause

<img src="https://github.com/user-attachments/assets/1ca3f2a1-fbd3-41f7-83f3-895522b50b29" width="72" height="72" alt="Holy Cause talent icon">

- **Operation**: Each Chorus of Spiritual Fortitude pulse gives you and Coherency allies **1 stack** of Toughness damage reduction: **8% per stack**, up to **5 stacks / 40%**.
- **Duration**: Lasts **10 seconds**; further pulses refresh the timer. Early interruption may prevent reaching 5 stacks.
- **Reduction example**: At full stacks, **100** Toughness damage becomes `100 × (1 − 5 × 8%) = 60`. With an independent **25%** Toughness reduction, `100 × 0.6 × 0.75 = 45`. This does not directly reduce Health damage.

[Details](zealot_channel_grants_toughness_damage_reduction.md) · [Back to index](#talent-index)

---

<a id="zealot_channel_grants_damage"></a>

### Ecclesiarch's Call

<img src="https://github.com/user-attachments/assets/1abe7e62-3810-4680-9c49-7f6091782ab6" width="72" height="72" alt="Ecclesiarch's Call talent icon">

- **Operation**: Each Chorus of Spiritual Fortitude pulse gives you and Coherency allies **1 Damage stack**, **6% per stack**, up to **5 stacks / 30%**.
- **Duration**: Lasts **10 seconds** and refreshes on later pulses. Approximately 5 pulses in a full channel reach the cap; putting away the relic early may leave fewer than 5 stacks.
- **Damage example**: At full stacks, baseline **100** gives `100 × (1 + 5 × 6%) = 130`. With an existing same-stage **25%** bonus, `100 × (1 + 25% + 30%) = 155`.

#### Traditional Chinese localization note

- The Chinese “stack count” incorrectly uses the damage-percentage placeholder. The correct limit is **5 stacks**, with **6% Damage** per stack.

[Details](zealot_channel_grants_damage.md) · [Back to index](#talent-index)

---

<a id="zealot_additional_charge_of_ability"></a>

### Redoubled Zeal

<img src="https://github.com/user-attachments/assets/35487761-88d3-4091-ac1b-bde3020e300e" width="72" height="72" alt="Redoubled Zeal talent icon">

- **Charges**: Fury of the Faithful can hold 2 uses. Both uses share the same cooldown resource.
- **Cooldown example**: After using both consecutively, the first charge returns after about 30 seconds and both return after about 60 seconds. Waiting 30 seconds does not refill both at once. If you use only one, only that expenditure needs to recharge.

[Details](zealot_additional_charge_of_ability.md) · [Back to index](#talent-index)

---

<a id="zealot_stealth"></a>

### Shroudfield

<img src="https://github.com/user-attachments/assets/313c803f-9a12-4470-9660-ce9a8fd308c9" width="72" height="72" alt="Shroudfield talent icon">

- **Stealth and cooldown**: Enter Stealth for 3 seconds; base cooldown 30 seconds, maximum 1 charge.
- **Bonuses**: Gain 20% Movement Speed, 100 percentage points of Critical Chance, 100% Melee Rending, and 150% bonuses to Backstab/flanking damage and the extra Finesse damage component. Backstab applies to qualifying melee positioning; flanking applies to the corresponding ranged positioning. They are not two bonuses added to the same hit.
- **Ending Stealth**: Your ordinary shooting, qualifying effective hits, grenade/throwing-knife actions and assistance actions such as reviving or rescuing can end Stealth. Listed damage-over-time events do not end it by themselves. The first 0.5 seconds provide a grace period for non-damage events.
- **Finesse example**: Fix the attack type, hit zone and armour, and consider only Finesse. A base component of 100 plus an extra Weakspot/Critical component of 50 changes from 150 to 100 + 50 × (1 + 150%) = 225, a 50% increase to the whole hit. With an extra component of 100, 200 becomes 350, a 75% increase. Backstab, Rending and other factors are calculated separately.
- **Movement example**: A base speed of 5 m/s with no other modifiers becomes 5 × 1.2 = 6 m/s.

[Details](zealot_stealth.md) · [Back to index](#talent-index)

---

<a id="zealot_increased_duration"></a>

### Master-Crafted Shroudfield

<img src="https://github.com/user-attachments/assets/064d2729-f3e2-4868-bc34-1bcf434d9f4d" width="72" height="72" alt="Master-Crafted Shroudfield talent icon">

- **Stealth duration**: Shroudfield lasts 2 seconds longer, increasing from 3 to 5 seconds. The base cooldown remains 30 seconds.
- **After leaving Stealth**: For 5 seconds, your threat weight for enemy target selection falls by 75% and Melee Backstab damage increases by 50%. Triggering the effect again restarts its timer.
- **Damage and threat example**: With other conditions fixed, 100 at the Backstab stage becomes 100 × 1.5 = 150; with an existing 20% Backstab bonus at the same stage, it becomes 170. Threat weight 100 becomes 100 × 0.25 = 25. This does not mean enemies have a fixed 25% chance to target you.

[Details](zealot_increased_duration.md) · [Back to index](#talent-index)

---

<a id="zealot_leaving_stealth_restores_toughness"></a>

### Invigorating Revelation

<img src="https://github.com/user-attachments/assets/d5730c05-1fc1-4fd5-9943-53bf390b9a7d" width="72" height="72" alt="Invigorating Revelation talent icon">

- **Toughness restoration**: Entering Shroudfield immediately restores 50% maximum Toughness. Leaving Stealth does not restore it again.
- **Damage reduction**: After leaving Stealth, gain 30% damage reduction for 8 seconds.
- **Restoration and damage example**: With maximum Toughness 100 and current Toughness 20, entry restores 100 × 50% = 50 to reach 70. If only 30 is missing, only 30 is restored. After exit, damage of 100 becomes 100 × 0.7 = 70; with another independent 25% reduction it becomes 52.5.

[Details](zealot_leaving_stealth_restores_toughness.md) · [Back to index](#talent-index)

---

<a id="zealot_restore_stealth_cd_on_damage"></a>

### Martyr's Purpose

<img src="https://github.com/user-attachments/assets/9e0abda0-3593-44eb-8ca8-9a7f282bcfd8" width="72" height="72" alt="Martyr's Purpose talent icon">

- **Behavior**: Lower Health makes your combat ability recharge faster. Full Health gives no extra recharge. At 25% Health or less, the maximum is equivalent to recovering an additional 0.5 seconds of base cooldown per second.
- **Formula**: Extra recovery = 0.5 × min[(1 − current Health fraction) ÷ 0.75, 1]. Healing reduces this bonus; another hit is not required for it to update.
- **Cooldown example**: At a steady 50% Health with normal natural recharge, total progress per second is 1 + 0.5 × 0.5 ÷ 0.75 ≈ 1.333 seconds, so a 30-second ability recharges in about 22.5 seconds. At 25% Health or less, 30 ÷ 1.5 = 20 seconds. Actual settlement occurs once per second, so timing may differ slightly.

[Details](zealot_restore_stealth_cd_on_damage.md) · [Back to index](#talent-index)

---

<a id="zealot_backstab_kills_restore_cd"></a>

### Pious Cut-Throat

<img src="https://github.com/user-attachments/assets/9768a27f-3a7b-47c7-a334-7f1f57db287a" width="72" height="72" alt="Pious Cut-Throat talent icon">

- **Trigger**: A Melee Weakspot hit or a hit from behind grants additional combat ability recharge for the next 2 seconds. A kill is not required, and a Ranged Weakspot hit does not trigger it.
- **Refresh**: Another trigger resets duration without stacking the recovery rate. A hit that is both a Weakspot and Backstab does not double it.
- **Cooldown example**: Each second gives extra progress equivalent to 0.75 seconds of base cooldown. Two full settlements total 0.75 × 2 = 1.5 seconds. With natural recharge also running, that interval advances about 2 + 1.5 = 3.5 seconds of cooldown. Excess resource above full charges is not stored.

[Details](zealot_backstab_kills_restore_cd.md) · [Back to index](#talent-index)

---

<a id="zealot_crits_grant_cd"></a>

### Invocation of Death

<img src="https://github.com/user-attachments/assets/e185301f-93c5-4f93-8c09-7aa351258173" width="72" height="72" alt="Invocation of Death talent icon">

- **Trigger**: A Melee Critical Hit grants faster combat ability recovery for about 3.25 seconds. Hitting multiple enemies during one swing triggers it at most once.
- **Refresh**: A Critical Hit on the next swing can refresh duration; the additional per-second recovery rate does not stack.
- **Cooldown example**: Each second gives extra progress equivalent to 1 second of base cooldown. A complete single effect usually restores at about seconds 1, 2 and 3, giving 3 extra seconds. With natural recovery working normally, those 3 seconds advance about 6 seconds of cooldown in total.

[Details](zealot_crits_grant_cd.md) · [Back to index](#talent-index)

---

<a id="zealot_fotf_refund_cooldown"></a>

### Unrelenting Fury

<img src="https://github.com/user-attachments/assets/d95452d2-3c7a-419f-9461-3d32dc95ce2f" width="72" height="72" alt="Unrelenting Fury talent icon">

- **Trigger**: Kill an Elite or Specialist within 5 seconds of using Fury of the Faithful to refund 20% of the cooldown resource required for one charge. Maximum one refund per use.
- **Cooldown example**: With base cooldown 30 seconds, refund 30 × 20% = 6 seconds of natural recharge progress. If only 4 seconds remain to full, only the missing amount is restored. Double charges still use one charge's cost; the refund does not become 60 × 20% = 12 seconds.
- **Chinese original-text erratum**: The Chinese text incorrectly adds “seconds” after the percentage refund. The correct value is 20% of one charge, equivalent to 6 seconds of progress for a base 30-second cooldown.

[Details](zealot_fotf_refund_cooldown.md) · [Back to index](#talent-index)

---

<a id="zealot_stealth_cooldown_regeneration"></a>

### Perfectionist

<img src="https://github.com/user-attachments/assets/8532537c-fff4-4014-8ee6-e16572b9cdeb" width="72" height="72" alt="Perfectionist talent icon">

- **Trigger**: While in Shroudfield, kill an enemy with a qualifying effective attack that ends Stealth to refund ability cooldown. Maximum once per Stealth. Existing Bleed, Burning and similar damage-over-time kills do not give this refund.
- **Refund percentages**: Monstrosities restore 50% of one charge, Ogryns 30%, and other enemies 15%.
- **Cooldown example**: Shroudfield's base cooldown is 30 seconds, so refunds equal 30 × 50% = 15 seconds, 30 × 30% = 9 seconds, or 30 × 15% = 4.5 seconds of natural recharge progress. They remain capped at the amount currently missing.
- **Chinese original-text erratum**: The Chinese text adds “seconds” to the Monstrosity, Ogryn and other-enemy percentages. The correct units are 50%, 30% and 15% of one charge, not fixed refunds of 50, 30 and 15 seconds.

[Details](zealot_stealth_cooldown_regeneration.md) · [Back to index](#talent-index)

---

## Keystone

<a id="zealot_resist_death"></a>

### Until Death

<img src="https://github.com/user-attachments/assets/382b6c6a-80b7-4c64-81f9-63d37df43671" width="72" height="72" alt="Until Death talent icon">

- **Trigger**: Fatal damage preserves your life and grants Unkillable for 8 seconds. You can still take damage; this does not reduce all damage to zero.
- **Cooldown example**: After the 8-second effect ends, a further 120-second cooldown runs. A trigger at second 0 ends at about second 8 and becomes available again at about second 128. Another active Unkillable effect prevents this talent from triggering.

[Details](zealot_resist_death.md) · [Back to index](#talent-index)

---

<a id="zealot_martyrdom"></a>

### Martyrdom

<img src="https://github.com/user-attachments/assets/5ac2048f-e48f-49ea-b739-e9c3301e66da" width="72" height="72" alt="Martyrdom talent icon">

- **Behavior**: Each fully missing Health Wound grants 10% Melee Damage, up to 5 stacks / 50%. Healing lowers the stack count. Health occupied by Corruption also counts.
- **Wound example**: With maximum Health 200 and 4 Wounds, each segment is 50. Losing 49 Health has not removed a full segment and adds no stack. Losing 100 gives 2 stacks: base Melee Damage 100 becomes 100 × (1 + 2 × 10%) = 120.
- **Other bonuses**: At those 2 stacks with an existing same-stage 25% Melee Damage bonus, 100 × (1 + 25% + 20%) = 145. A cap of 5 does not mean every Wound count can reach full stacks while alive.

[Details](zealot_martyrdom.md) · [Back to index](#talent-index)

---

<a id="zealot_martyrdom_grants_toughness"></a>

### I Shall Not Fall

<img src="https://github.com/user-attachments/assets/3e61d06f-e542-40cc-acf4-88e2493cc594" width="72" height="72" alt="I Shall Not Fall talent icon">

- **Effect**: Each fully missing Health Wound reduces damage taken by Toughness by 7.5%, counting at most 5 Wounds for a maximum 37.5% reduction.
- **Reduction example**: 3 stacks give 22.5% Toughness damage reduction: 100 × (1 − 22.5%) = 77.5. At 5 stacks, the result is 62.5. With another same-stage 10% Toughness damage reduction, full stacks give 100 × (1 − 37.5% − 10%) = 52.5. Independent reductions multiply afterwards.

[Details](zealot_martyrdom_grants_toughness.md) · [Back to index](#talent-index)

---

<a id="zealot_martyrdom_grants_attack_speed"></a>

### Maniac

<img src="https://github.com/user-attachments/assets/2a096b34-3273-406a-82fc-23c774fcaedf" width="72" height="72" alt="Maniac talent icon">

- **Effect**: Each fully missing Health Wound grants 6% Melee Attack Speed, counting at most 5 Wounds for a maximum +30%.
- **Speed example**: 3 stacks grant 3 × 6% = 18% Melee Attack Speed. An affected 1-second action takes 1 ÷ 1.18 ≈ 0.847 seconds; at 5 stacks, 1 ÷ 1.3 ≈ 0.769 seconds. Other same-stage Attack Speed bonuses add first.

[Details](zealot_martyrdom_grants_attack_speed.md) · [Back to index](#talent-index)

---

<a id="zealot_quickness_passive"></a>

### Inexorable Judgement

<img src="https://github.com/user-attachments/assets/0a442a9a-29b1-4a94-b85c-5772f9d85d7c" width="72" height="72" alt="Inexorable Judgement talent icon">

- **Building Momentum**: Movement grants 1 Momentum stack per accumulated 5 metres, maximum 20. Sprint distance counts double: reaching full stacks from zero requires 100 metres of ordinary movement or 50 metres of Sprinting.
- **Activation**: A Melee or Ranged Hit consumes current Momentum for a 6-second bonus. You can build the next pool during this bonus, but hits do not refresh the current bonus, consume the next pool or increase the current bonus's stacks.
- **Damage and speed**: Each spent stack grants 1% Damage, 1% Melee Attack Speed and 1% Ranged Attack Speed. At 20 stacks, base damage 100 becomes 100 × 1.2 = 120; an affected 1-second action takes 1 ÷ 1.2 ≈ 0.833 seconds. Other same-stage bonuses add first.
- **Dodge bonuses**: Each stack also adds 0.5% Dodge Distance, shortens consecutive-dodge recovery time by 1%, and multiplies Dodge Speed by 1.005. At 20 stacks, distance is ×1.1, recovery time ×0.8, and speed about 1.005²⁰ ≈ ×1.105.

[Details](zealot_quickness_passive.md) · [Back to index](#talent-index)

---

<a id="zealot_momentum_toughness_replenish"></a>

### Retributor's Stance

<img src="https://github.com/user-attachments/assets/54fb5877-384e-4378-885f-95cb1daed864" width="72" height="72" alt="Retributor's Stance talent icon">

- **Effect**: During Inexorable Judgement's active bonus, each stack replenishes 0.5% maximum Toughness per second, accumulating over time according to the active stack count.
- **Restoration example**: With maximum Toughness 100 and 20 stacks on activation, restore 100 × 20 × 0.5% = 10 per second, at most 60 over a full 6 seconds. With duration extended to 10 seconds, the theoretical maximum is 100. Restoration bonuses and the current missing amount still apply.

[Details](zealot_momentum_toughness_replenish.md) · [Back to index](#talent-index)

---

<a id="zealot_quickness_passive_dodge_stacks"></a>

### Inebriate's Poise

<img src="https://github.com/user-attachments/assets/b51610bf-5b84-45d0-97fe-abedede00719" width="72" height="72" alt="Inebriate's Poise talent icon">

- **Trigger**: Each successful Dodge grants 3 additional Inexorable Judgement Momentum stacks, still subject to the 20-stack cap.
- **Stack example**: Starting at 18, a successful Dodge gives min(18 + 3, 20) = 20 stacks; the excess stack is not stored. You can build the next pool during an active bonus, but it is spent only by a hit after the current bonus ends.

[Details](zealot_quickness_passive_dodge_stacks.md) · [Back to index](#talent-index)

---

<a id="zealot_resist_death_heal"></a>

### Holy Revenant

<img src="https://github.com/user-attachments/assets/9f0fd090-59a4-4098-b4ed-c2bdfa7d1eab" width="72" height="72" alt="Holy Revenant talent icon">

- **Trigger effect**: When fatal damage activates Until Death, knock back enemies within 3.5 metres. Actual Stagger still depends on enemy resistance.
- **Health restoration**: While Unkillable, each damage event adds usable healing: 0.7% of ordinary damage, or 2.1% for Melee. Each qualifying damage event also heals again using the current accumulated pool; previously used amounts are not deducted.
- **Restoration example**: Assume an initial pool of 0 and no other healing modifiers. Two consecutive Melee hits dealing 100 each: the first adds and heals 100 × 0.7% × 3 = 2.1 Health; the second raises the pool to 4.2 and heals 4.2 again, giving 6.3 in total.
- **Cap**: Each requested heal can bring current Health only up to 25% of maximum before other healing multipliers. With maximum Health 100 and current Health 24, at most 1 is initially requested. Other healing multipliers apply afterwards; healing still cannot remove Corruption. This is not a whole-match limit of 25 Health.
- **Chinese original-text erratum**: The Chinese “healing equals 3 times Melee Damage” can be read as 100 damage healing 300 Health. In fact, the Melee conversion rate is 3 times the ordinary rate: 0.7% × 3 = 2.1%, then the accumulated pool and cap apply.

[Details](zealot_resist_death_heal.md) · [Back to index](#talent-index)

---

<a id="zealot_fanatic_rage"></a>

### Blazing Piety

<img src="https://github.com/user-attachments/assets/7e8dfc94-5f9b-4292-a4e6-8190bebb48bc" width="72" height="72" alt="Blazing Piety talent icon">

- **Building stacks**: Each enemy death within 25 metres grants 1 stack. Your own Critical Hits also grant 1, for both Melee and Ranged attacks. You do not have to kill the nearby dying enemy yourself.
- **Fury effect**: At 25 stacks, enter Fury and gain 15 percentage points of Critical Chance for 8 seconds. Further triggers at full stacks refresh duration.
- **Critical Chance example**: An existing 5% becomes 5% + 15% = 20%, not 5% × 1.15. Nearby deaths and Critical Hits count separately, so a critical kill may satisfy both.
- **Stack decay**: Before Fury, 8 seconds without a new trigger starts one-by-one stack decay. A new trigger resets the waiting period. Fury ending clears the count so it must be rebuilt.

[Details](zealot_fanatic_rage.md) · [Back to index](#talent-index)

---

<a id="zealot_fanatic_rage_toughness_on_max"></a>

### Stalwart

<img src="https://github.com/user-attachments/assets/0fd06e0a-ef14-4228-8cd5-02980c989f05" width="72" height="72" alt="Stalwart talent icon">

- **Activation**: Entering Fury restores 50% of maximum Toughness. Refreshing existing Fury does not grant another 50%.
- **Continuous effects**: While Fury's counter is at 25, gain 25% Toughness Damage Reduction and restore 2% of maximum Toughness per second. Both effects stop applying below full stacks.
- **Restoration and reduction example**: With maximum Toughness 100, activation restores at most 50. Maintaining full stacks for 8 seconds can restore another 100 × 2% × 8 = 16, limited by missing Toughness. An incoming 100 Toughness damage becomes 100 × 0.75 = 75.

[Details](zealot_fanatic_rage_toughness_on_max.md) · [Back to index](#talent-index)

---

<a id="zealot_fanatic_rage_improved"></a>

### Righteous Warrior

<img src="https://github.com/user-attachments/assets/9d85e538-7fb1-4308-99b9-7ed9408eead2" width="72" height="72" alt="Righteous Warrior talent icon">

- **Effect**: During Fury, gain another 10 percentage points of Critical Chance on top of Blazing Piety's 15, for a total talent bonus of 25 points.
- **Critical Chance example**: An existing 5% becomes 5% + 15% + 10% = 30% when entering Fury with this upgrade. This adds probability; it does not multiply the original 5% by 1.25.

[Details](zealot_fanatic_rage_improved.md) · [Back to index](#talent-index)

---

<a id="zealot_shared_fanatic_rage"></a>

### Infectious Zeal

<img src="https://github.com/user-attachments/assets/d1133aca-9af8-4b47-934f-d073de0d4e1c" width="72" height="72" alt="Infectious Zeal talent icon">

- **Operation**: When Blazing Piety starts, other allies currently in Coherency gain 10 percentage points of Critical Chance for 8 seconds. You do not receive this shared bonus yourself.
- **Critical Chance example**: An ally's existing 5% becomes 5% + 10% = 15% during the effect. Your Righteous Warrior does not also increase their 10-point bonus.
- **Duration limits**: Later refreshing your own Fury does not extend the 8 seconds already given to allies. Allies who enter Coherency during the effect do not immediately receive it.

[Details](zealot_shared_fanatic_rage.md) · [Back to index](#talent-index)

---

<a id="zealot_martyrdom_toughness_modifier"></a>

### Restorative Verses

<img src="https://github.com/user-attachments/assets/5ac46e08-8f7b-4828-8bfa-e47c240e113b" width="72" height="72" alt="Restorative Verses talent icon">

- **Operation**: Each complete missing Wound increases Toughness restored by 5%, up to 5 stacks and 25%. An existing restoration source is required; gaining stacks does not directly replenish Toughness.
- **Restoration example**: An effect normally restoring 10 Toughness restores 10 × (1 + 2 × 5%) = 11 at 2 stacks, or 12.5 at 5. With another 20% restoration bonus in the same stage, full stacks give 10 × (1 + 20% + 25%) = 14.5, still capped by missing Toughness.
- **Chinese original-text erratum**: The Chinese says each stack restores Toughness, which can imply immediate restoration on gaining a stack. The actual effect increases restoration amount by 5% per stack and works through other restoration sources.

[Details](zealot_martyrdom_toughness_modifier.md) · [Back to index](#talent-index)

---

<a id="zealot_quickness_increased_duration"></a>

### Eternal

<img src="https://github.com/user-attachments/assets/aee84e86-4f0b-4d69-87e7-9602f27396e2" width="72" height="72" alt="Eternal talent icon">

- **Effect**: Inexorable Judgement's active bonus lasts 10 seconds.
- **Duration example**: A hit activates it at second 0. It ordinarily ends around second 6, now around second 10. Hits during the bonus still do not reset that cycle's duration. The extension is 4 seconds; stacks and per-stack bonuses stay the same.

[Details](zealot_quickness_increased_duration.md) · [Back to index](#talent-index)

---

<a id="zealot_corruption_resistance_stacking"></a>

### On the Brink

<img src="https://github.com/user-attachments/assets/9bc683a7-534a-4244-8381-1a6c0463003f" width="72" height="72" alt="On the Brink talent icon">

- **Operation**: Each complete missing Wound reduces Corruption damage taken by 10%, up to 5 stacks and 50%. It does not clear already accumulated Corruption.
- **Corruption example**: An event normally granting 20 Corruption grants 20 × (1 − 3 × 10%) = 14 at 3 stacks, or 10 at 5. Other Corruption multipliers multiply separately; this does not grant immunity to all Corruption sources.

[Details](zealot_corruption_resistance_stacking.md) · [Back to index](#talent-index)

---

<a id="zealot_resist_death_ability"></a>

### Zealous Pilgrim

<img src="https://github.com/user-attachments/assets/121a9a79-f78e-4274-a0ac-4a1683244ae7" width="72" height="72" alt="Zealous Pilgrim talent icon">

- **Trigger**: Ability use grants 4 seconds of Unkillable. Shroudfield starts this when Stealth ends; Chorus of Spiritual Fortitude starts it when the relic is unwielded.
- **Offensive bonuses**: While Unkillable, gain 10% Damage and 10% Attack Speed.
- **Damage and speed example**: Counting only this bonus, base damage 100 becomes 100 × 1.1 = 110. An affected 1-second action becomes 1 ÷ 1.1 ≈ 0.909 seconds. Other bonuses in the same stage add first.

[Details](zealot_resist_death_ability.md) · [Back to index](#talent-index)

---

<a id="zealot_resist_death_fire"></a>

### Fire and Fury

<img src="https://github.com/user-attachments/assets/f88c569e-c89d-4850-b84b-17c5af69faf0" width="72" height="72" alt="Fire and Fury talent icon">

- **Trigger**: While Unkillable, weapon hits against living enemies apply Burn. Each Melee hit adds 3 stacks, each Ranged hit 1. This talent can raise that enemy's Burn to at most 12; other sources can raise it higher.
- **Burn duration**: It ticks approximately every 0.5 seconds. Additional Burn resets the 4-second retention period; after expiry, ticks continue while stacks decay one by one. At 12 or more stacks, this talent refreshes timing without adding stacks.
- **Stack example**: From 0 stacks, 4 consecutive Melee hits reach 4 × 3 = 12. Another hit does not raise the count to 15 through this talent.
- **Damage example**: Against a fixed Unarmoured hit location with no other modifiers, one Burn tick at 3 stacks deals 400 × (3 ÷ 31)² × [3 − 2 × (3 ÷ 31)] × 1.5 ≈ 15.77 damage; 12 stacks deal about 200.11. These are individual ticks, not fixed damage per second against every enemy.

[Details](zealot_resist_death_fire.md) · [Back to index](#talent-index)

---

<a id="zealot_resist_death_golden_toughness"></a>

### Risen

<img src="https://github.com/user-attachments/assets/439077af-f74c-4c06-8a8a-dbeab52d9a53" width="72" height="72" alt="Risen talent icon">

- **Stacking**: While Unkillable, gain the first stack about 0.75 seconds after starting, then one per second. Each adds 5 maximum Toughness, capped at 8 stacks and +40.
- **Duration**: Added stacks reset the whole effect's 5-second duration. Unkillable ending stops stack gains, while the countdown from the last stack continues.
- **Toughness example**: Starting with maximum 100 and current 60, one stack makes maximum 105 and current 65. After all 8 stacks with no other changes, current/maximum becomes 100/140. When the effect expires and the cap returns to 100, current 100 is retained. If current was only 70 before expiry, it stays 70/100.
- **Temporary Unkillable**: In 4 seconds, gains around 0.75, 1.75, 2.75 and 3.75 seconds give 4 stacks, totaling +20. Actual triggers depend on update timing.

[Details](zealot_resist_death_golden_toughness.md) · [Back to index](#talent-index)

---

## Skill

<a id="zealot_crits_apply_bleed"></a>

### Scourge

<img src="https://github.com/user-attachments/assets/96dc3500-2674-43bb-9fa9-10992eb3bcb8" width="72" height="72" alt="Scourge talent icon">

- **Applying Bleed**: A Melee Critical Hit that deals damage while the enemy remains alive applies 2 Bleed stacks. A Melee hit on an already bleeding enemy grants 1 stack of Melee Critical Chance: +10 percentage points per stack, max 3, lasting 3 seconds. Another trigger resets duration.
- **Trigger order**: Existing Bleed is checked before this crit applies Bleed. The first crit on a previously non-bleeding enemy therefore does not also grant Critical Chance merely from its newly applied Bleed. A Melee kill event on a bleeding enemy can also grant the bonus.
- **Critical Chance example**: Base Melee Critical Chance 5% becomes 5% + 3 × 10% = 35% at 3 stacks, not 5% × 1.3.
- **Bleed damage example**: Bleed ticks about every 0.5 seconds, up to 16 stacks. Against a fixed Unarmoured hit location with no other modifiers, one tick at 2 stacks deals 175 × (2 ÷ 16)² × [3 − 2 × (2 ÷ 16)] × 0.5 ≈ 3.76 damage; 8 stacks deal 43.75. Damage does not rise proportionally with stacks.
- **Bleed duration**: Adding stacks resets the 1.5-second retention period. After expiry, stacks decay one by one with each tick rather than all disappearing at 1.5 seconds.

[Details](zealot_crits_apply_bleed.md) · [Back to index](#talent-index)

---

<a id="zealot_backstab_damage"></a>

### Backstabber

<img src="https://github.com/user-attachments/assets/86a86e7f-6fc0-4eda-81e8-f13519f3cb8c" width="72" height="72" alt="Backstabber talent icon">

- **Operation**: Deal 25% more damage on a Melee hit from within the roughly 120-degree sector behind an enemy, or a Ranged hit from the rear half-plane.
- **Damage example**: With the same weapon, armour and hit location and no other Backstab/Flanking bonus, 100 damage at that stage becomes 100 × (1 + 25%) = 125. With an existing 20% bonus of the same type, 120 becomes 100 × (1 + 20% + 25%) = 145, an actual increase of about 20.83%.

[Details](zealot_backstab_damage.md) · [Back to index](#talent-index)

---

<a id="zealot_multi_hits_increase_damage"></a>

### Disdain

<img src="https://github.com/user-attachments/assets/69a5f7ea-11bc-41ae-8758-86a14213a116" width="72" height="72" alt="Disdain talent icon">

- **Operation**: Each enemy hit by the previous Melee sweep adds 5% damage to the next Melee attack, counting at most 5 enemies for +25%.
- **Updates**: Recalculate from the latest sweep's hit count, without accumulating across sweeps. After the next sweep misses, the bonus becomes zero.
- **Damage example**: With no other bonuses, 3 enemies hit by the previous attack make the next attack's 100 become 100 × (1 + 3 × 5%) = 115. Five or more give 125.

[Details](zealot_multi_hits_increase_damage.md) · [Back to index](#talent-index)

---

<a id="zealot_increased_damage_vs_resilient"></a>

### Purge the Unclean

<img src="https://github.com/user-attachments/assets/162368d9-1a5d-4273-a2cd-4ab8c3c22a6d" width="72" height="72" alt="Purge the Unclean talent icon">

- **Operation**: Deal 20% more damage against Infested and Unyielding armour types, judged from the hit location's armour type.
- **Damage example**: Counting only this armour-type bonus, 100 becomes 100 × 1.20 = 120. With an existing 10% bonus of the same type, 110 becomes 100 × (1 + 10% + 20%) = 130, an actual increase of about 18.18%.

[Details](zealot_increased_damage_vs_resilient.md) · [Back to index](#talent-index)

---

<a id="zealot_hits_grant_stacking_damage"></a>

### Sustained Assault

<img src="https://github.com/user-attachments/assets/9e5a26dc-8d4f-4c94-9dcd-fdc807cc1d48" width="72" height="72" alt="Sustained Assault talent icon">

- **Stacks and refresh**: Each Melee hit on an enemy adds one stack of 4% Melee Damage, up to 5 stacks and 20%. Lasts 5 seconds; further hits reset the duration, including at full stacks.
- **Damage example**: With no other bonuses, 3 stacks give 100 × (1 + 3 × 4%) = 112, or 120 at full stacks. With an existing same-stage 25% bonus, full stacks give 100 × (1 + 25% + 20%) = 145.

[Details](zealot_hits_grant_stacking_damage.md) · [Back to index](#talent-index)

---

<a id="zealot_crits_reduce_toughness_damage"></a>

### Enduring Faith

<img src="https://github.com/user-attachments/assets/c3395dd2-63a2-430a-9eec-fb9ecd995308" width="72" height="72" alt="Enduring Faith talent icon">

- **Operation**: A Critical Hit reduces Toughness damage taken by 40% for 4 seconds. Both Melee and Ranged Critical Hits can trigger it.
- **Refresh**: Another Critical Hit resets the 4-second countdown without applying multiple copies of the reduction.
- **Reduction example**: Counting only this effect, 100 Toughness damage becomes 100 × 0.6 = 60. With another independent 10% Toughness reduction, it becomes 100 × 0.6 × 0.9 = 54, a total reduction of 46%. This is not Health damage reduction.

[Details](zealot_crits_reduce_toughness_damage.md) · [Back to index](#talent-index)

---

<a id="zealot_toughness_on_dodge"></a>

### Second Wind

<img src="https://github.com/user-attachments/assets/7d6f33d9-5ed5-49d9-9f4c-333565e17216" width="72" height="72" alt="Second Wind talent icon">

- **Operation**: Successfully dodging an enemy attack restores 15% of maximum Toughness, at most once every 0.5 seconds. Merely performing a Dodge does not restore it.
- **Restoration example**: With maximum Toughness 100 and no other restoration bonuses, one trigger restores 100 × 15% = 15. At current Toughness 95, only 5 can be restored, reaching the cap.

[Details](zealot_toughness_on_dodge.md) · [Back to index](#talent-index)

---

<a id="base_melee_damage_node_buff_medium_1"></a>

### Melee Damage Boost

<img src="https://github.com/user-attachments/assets/79a0a582-a493-49eb-a470-ab7ed7e7f782" width="72" height="72" alt="Melee Damage Boost talent icon">

- **How it works:** gain +10% Melee damage. The two same-name nodes each provide their own bonus; selecting both gives +20% in total.
- **Damage example:** without other bonuses, 100 × (1 + 10%) = 110. Selecting both nodes gives 120. With an existing same-stage 25% bonus, selecting one node gives 100 × (1 + 25% + 10%) = 135.

[Details](base_melee_damage_node_buff_medium_1.md) · [Back to index](#talent-index)

---

<a id="zealot_toughness_while_shooting"></a>

### The Voice of Terra

<img src="https://github.com/user-attachments/assets/fb4eb2d4-1dee-4596-8262-2c99311be059" width="72" height="72" alt="The Voice of Terra talent icon">

- **Operation**: While shooting, restore 10% of maximum Toughness per second, continuing about 0.5 seconds after firing stops. Hits or kills are not required.
- **Restoration example**: With maximum Toughness 100, no other restoration bonuses and 2 seconds of continuous shooting followed by the full 0.5-second tail, restore 100 × 10% × (2 + 0.5) = 25, capped by missing Toughness.

[Details](zealot_toughness_while_shooting.md) · [Back to index](#talent-index)

---

<a id="zealot_heal_part_of_damage_taken"></a>

### Restoring Faith

<img src="https://github.com/user-attachments/assets/0849a882-e966-43d8-8786-554a7a657ee2" width="72" height="72" alt="Restoring Faith talent icon">

- **Operation**: After taking Health damage, gradually heal 20% of that damage over about 4 seconds. Toughness damage does not contribute.
- **Additional damage**: A new hit adds another healing allowance without clearing healing still pending from earlier damage.
- **Healing example**: Losing 50 Health adds 10 healing, averaging 2.5 per second over the designed 4 seconds. Losing another 30 Health during that period adds 6 more pending healing.
- **Limit**: Healing fills only healable missing Health and does not remove Corruption.

[Details](zealot_heal_part_of_damage_taken.md) · [Back to index](#talent-index)

---

<a id="zealot_reduced_damage_on_wound"></a>

### Bleed for the Emperor

<img src="https://github.com/user-attachments/assets/ba989f49-6c6c-4457-bc33-f09ab8342c1f" width="72" height="72" alt="Bleed for the Emperor talent icon">

- **Operation**: If incoming Health damage would take Health below the next Wound threshold, that entire Health-damage amount is reduced by 40%.
- **Damage example**: Maximum Health 200 with 4 Wounds gives 50 Health per segment. At 120 Health, the next threshold is 100. Incoming Health damage 30 crosses that threshold, so it becomes 30 × 0.6 = 18, leaving 102 Health.
- **Boundary**: Incoming damage 20 from 120 Health lands exactly at 100 and does not trigger this reduction.

[Details](zealot_reduced_damage_on_wound.md) · [Back to index](#talent-index)

---

<a id="zealot_toughness_on_heavy_kills"></a>

### Vicious Offering

<img src="https://github.com/user-attachments/assets/eb0f681c-574a-447c-b917-9413f146fd72" width="72" height="72" alt="Vicious Offering talent icon">

- **Operation**: A Heavy Attack kill restores an extra 10% of maximum Toughness. Merely hitting without a kill does not trigger this talent.
- **Restoration example**: With maximum Toughness 100 and no other restoration bonuses, this talent adds 10 restoration per qualifying kill. If only 4 Toughness is missing, it restores 4.
- **Separation**: Normal Melee-kill Toughness restoration is calculated separately from this talent's extra restoration.

[Details](zealot_toughness_on_heavy_kills.md) · [Back to index](#talent-index)

---

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>

### Toughness Damage Reduction

<img src="https://github.com/user-attachments/assets/f86258bf-77ad-44c3-99b0-628042e47315" width="72" height="72" alt="Toughness Damage Reduction talent icon">

- **How it works:** damage taken by Toughness is reduced by 10%.
- **Reduction example:** without other bonuses, 100 × (1 − 10%) = 90 points of Toughness damage. With an existing 20% Toughness reduction in the same additive stage, the result is 100 × (1 − 20% − 10%) = 70. Independent damage-reduction effects multiply separately.

[Details](base_toughness_damage_reduction_node_buff_medium_1.md) · [Back to index](#talent-index)

---

<a id="zealot_increased_crit_and_weakspot_damage_after_dodge"></a>

### Duellist

<img src="https://github.com/user-attachments/assets/dcdcc79a-ad1b-4fb3-9ac1-a6fcc1a71a56" width="72" height="72" alt="Duellist talent icon">

- **Operation**: Successfully dodging an attack increases Finesse Damage by 50% for 3 seconds; another successful Dodge restarts the timer. This strengthens only extra Weakspot/Critical damage, so the increase for the entire hit depends on the weapon and target.
- **Weakspot example**: With no crit or other bonuses, base portion 100 and extra Weakspot portion 50, the original 150 becomes 100 + 50 × 1.5 = 175, an increase of about 16.67%. If the extra portion is 100, 200 becomes 250, a 25% increase.
- **Existing bonus**: With base and extra portions both 100 and an existing 25% same-stage bonus, 100 + 100 × 1.25 = 225 becomes 100 + 100 × (1 + 25% + 50%) = 275, an actual increase of about 22.22%.

[Details](zealot_increased_crit_and_weakspot_damage_after_dodge.md) · [Back to index](#talent-index)

---

<a id="zealot_ally_damage_taken_reduced"></a>

### Shield of Contempt

<img src="https://github.com/user-attachments/assets/42daeb1b-ec7d-4f9b-bc58-f89c1de5d9b4" width="72" height="72" alt="Shield of Contempt talent icon">

- **Operation**: After you or an ally takes Health damage, the injured player gains 60% damage reduction for 4 seconds. The triggering damage has already been resolved and is not retroactively reduced by this new effect.
- **Cooldown**: Each Zealot holding this talent shares one 8-second trigger cooldown across recipients. Another ally taking damage during that cooldown cannot receive a new application from that same holder.
- **Damage example**: Counting only this effect, subsequent damage of 100 becomes 100 × 0.4 = 40. A trigger at second 0 gives an effect ending around second 4 and can trigger again around second 8.

[Details](zealot_ally_damage_taken_reduced.md) · [Back to index](#talent-index)

---

<a id="zealot_push_attacks_attack_speed"></a>

### Punish Impiety

<img src="https://github.com/user-attachments/assets/a2373334-1398-4475-b263-5b2d56cf8b90" width="72" height="72" alt="Punish Impiety talent icon">

- **Trigger**: Hitting an enemy with the attack following a push grants +10% Melee Attack Speed for 5 seconds. Another trigger restarts the timer; a miss gives no bonus.
- **Speed example**: Counting only this bonus, an affected 1-second action becomes 1 ÷ 1.1 ≈ 0.909 seconds. With an existing 20% same-stage attack-speed bonus, it becomes 1 ÷ (1 + 20% + 10%) ≈ 0.769 seconds.

[Details](zealot_push_attacks_attack_speed.md) · [Back to index](#talent-index)

---

<a id="zealot_damage_boosts_movement"></a>

### Thy Wrath be Swift

<img src="https://github.com/user-attachments/assets/52db08a6-3729-466e-ac16-d02a1a7ebecb" width="72" height="72" alt="Thy Wrath be Swift talent icon">

- **Operation**: Taking damage grants +15% Movement Speed for 2 seconds; further damage can restart the timer.
- **Permanent protection**: Immunity to ordinary hit slowdown and stun does not require taking damage first. This does not establish protection from nets, pounces or other disabling effects, or attacks that explicitly ignore immunity.
- **Speed example**: With base Movement Speed 5 metres/second and no other modifiers, the speed becomes 5 × 1.15 = 5.75 metres/second.

[Details](zealot_damage_boosts_movement.md) · [Back to index](#talent-index)

---

<a id="zealot_stamina_on_block_break"></a>

### Retaliatory Defence

<img src="https://github.com/user-attachments/assets/607612bf-67ee-475e-9a16-0b5541c7b4ea" width="72" height="72" alt="Retaliatory Defence talent icon">

- **Operation**: When the effect is available, a Block Break restores 50% of maximum Stamina and prevents the stun from that Block Break. Triggering it starts a 12-second cooldown.
- **Restoration example**: With maximum Stamina 6, a Block Break exhausting it to 0 restores 6 × 50% = 3. Another Block Break during the cooldown gives no further restoration.

[Details](zealot_stamina_on_block_break.md) · [Back to index](#talent-index)

---

<a id="zealot_reduced_damage_after_dodge"></a>

### Good Balance

<img src="https://github.com/user-attachments/assets/41e85f89-6787-4fe4-9fd7-a2382f2aa025" width="72" height="72" alt="Good Balance talent icon">

- **Operation**: Successfully dodging an attack reduces damage taken by 25% for 2.5 seconds; another successful Dodge restarts the timer.
- **Damage example**: Damage of 100 becomes 100 × 0.75 = 75. With another independent 40% reduction, it becomes 100 × 0.75 × 0.6 = 45.

[Details](zealot_reduced_damage_after_dodge.md) · [Back to index](#talent-index)

---

<a id="zealot_toughness_in_melee"></a>

### Enemies Within, Enemies Without

<img src="https://github.com/user-attachments/assets/fbb6b38f-57a3-4659-bf32-04d1edc4d989" width="72" height="72" alt="Enemies Within, Enemies Without talent icon">

- **Operation**: With an enemy within 5 metres, restore 2.5% of maximum Toughness per second. Each additional enemy adds 1 percentage point per second, up to 7.5%. Restoration pauses while disabled and unable to act.
- **Restoration example**: With maximum Toughness 100 and 3 ordinary enemies nearby, restore 100 × [2.5% + (3 − 1) × 1%] = 4.5 per second. Six enemies reach the 7.5-per-second cap.
- **Large enemies**: The fixed source counts a Monstrosity or specified boss as 6 enemies, so one alone reaches the restoration cap.

[Details](zealot_toughness_in_melee.md) · [Back to index](#talent-index)

---

<a id="zealot_attack_speed"></a>

### Faithful Frenzy

<img src="https://github.com/user-attachments/assets/c184be29-e45d-4968-acc5-ae67779d90cc" width="72" height="72" alt="Faithful Frenzy talent icon">

- **Operation**: Permanently grants +10% Melee Attack Speed and +5% Movement Speed.
- **Speed example**: Counting only this talent, an affected 1-second Melee action becomes 1 ÷ 1.1 ≈ 0.909 seconds; base Movement Speed 5 metres/second becomes 5 × 1.05 = 5.25 metres/second. Other same-stage attack-speed bonuses are added first, then action time is calculated from the total speed multiplier.

[Details](zealot_attack_speed.md) · [Back to index](#talent-index)

---

<a id="zealot_additional_wounds"></a>

### Faith's Fortitude

<img src="https://github.com/user-attachments/assets/793e953e-5b99-416a-99c8-c6d185df7cc9" width="72" height="72" alt="Faith's Fortitude talent icon">

- **Operation**: Adds 2 to maximum Wounds while leaving maximum Health unchanged; the same Health is divided into more segments.
- **Wound example**: With maximum Health 200 and originally 2 Wounds, each segment has 200 ÷ 2 = 100 Health. Taking the talent gives 4 Wounds, each with 200 ÷ 4 = 50 Health. It does not increase Health to 400.

[Details](zealot_additional_wounds.md) · [Back to index](#talent-index)

---

<a id="zealot_increase_ranged_close_damage"></a>

### Anoint in Blood

<img src="https://github.com/user-attachments/assets/f1f336d8-dc80-46a3-b756-2df08b26f541" width="72" height="72" alt="Anoint in Blood talent icon">

- **Operation**: While holding a Ranged weapon, gain up to 25% damage against targets within 12.5 metres. Beyond 12.5 metres it gradually falls, reaching zero at 30 metres.
- **Distance example**: With other conditions fixed and base damage 100, within 12.5 metres the result is 100 × 1.25 = 125. At 16.875 metres, the bonus is 25% × [1 − √((16.875 − 12.5) ÷ 17.5)] = 12.5%, giving 112.5 damage.
- **Other bonuses**: This adds to same-stage damage bonuses. The weapon's own distance falloff is calculated separately; the fixed base 100 above is not measured weapon damage at every distance.

[Details](zealot_increase_ranged_close_damage.md) · [Back to index](#talent-index)

---

<a id="zealot_uninterruptible_no_slow_heavies"></a>

### Unfaltering

<img src="https://github.com/user-attachments/assets/7af1f56a-9932-428e-91c5-47b14836d6cb" width="72" height="72" alt="Unfaltering talent icon">

- **Operation**: During Heavy Attack windup, prevents ordinary hit stun and action interruption and removes that windup action's own movement slowdown. Once the attack swings, the windup condition no longer holds.
- **Speed example**: Base Movement Speed 5 metres/second with a windup that normally multiplies it by 0.5 gives 2.5 metres/second. Removing that action's slowdown allows 5 metres/second. Other sources of speed modifiers are still calculated separately.
- **Control exceptions**: This is not immunity to every knockback, net or pounce, and cannot stop attacks that explicitly ignore immunity.

[Details](zealot_uninterruptible_no_slow_heavies.md) · [Back to index](#talent-index)

---

<a id="zealot_stacking_melee_damage_after_dodge"></a>

### Riposte

<img src="https://github.com/user-attachments/assets/7a00054d-1b7e-448e-a9f3-eee60922b19e" width="72" height="72" alt="Riposte talent icon">

- **Stacking**: Each successfully dodged attack grants 1 stack of Melee damage, +5% per stack up to 3. Triggering again restarts the 8-second duration.
- **Damage example**: Three stacks total 15%, so base damage 100 becomes 100 × (1 + 3 × 5%) = 115. With an existing 20% same-stage bonus, the result is 100 × (1 + 20% + 15%) = 135.

[Details](zealot_stacking_melee_damage_after_dodge.md) · [Back to index](#talent-index)

---

<a id="zealot_sprint_improvements"></a>

### Relentless Fervor

<img src="https://github.com/user-attachments/assets/bcb76321-c69e-466f-b588-a894e8c63443" width="72" height="72" alt="Relentless Fervor talent icon">

- **Operation**: Grants +10% Sprint Speed and reduces Sprint Stamina cost by 10%. After 1 second of continuous Sprinting, gain Slowdown Immunity. Stopping the Sprint removes it; the next Sprint starts the timer again.
- **Speed and cost example**: If Sprint Speed is originally 6 metres/second and cost is 2 Stamina/second, counting only this talent gives 6 × 1.1 = 6.6 metres/second and 2 × 0.9 = 1.8 Stamina/second.

[Details](zealot_sprint_improvements.md) · [Back to index](#talent-index)

---

<a id="zealot_damage_vs_nonthreat"></a>

### Unseen Blade

<img src="https://github.com/user-attachments/assets/c97e932c-97b3-454c-9047-2145a5d9a49d" width="72" height="72" alt="Unseen Blade talent icon">

- **Operation**: Deals +20% damage to enemies that are not currently targeting you. Both Melee and Ranged damage can apply it.
- **Damage example**: Counting only this talent, 100 × 1.2 = 120. With an existing 25% same-stage damage bonus, the result is 100 × (1 + 25% + 20%) = 145. If the enemy starts targeting you, this conditional bonus no longer applies.

[Details](zealot_damage_vs_nonthreat.md) · [Back to index](#talent-index)

---

<a id="zealot_defensive_knockback"></a>

### The Master's Retribution

<img src="https://github.com/user-attachments/assets/56d9b0f2-db5a-493b-aff8-2cd9699d4d96" width="72" height="72" alt="The Master's Retribution talent icon">

- **Trigger**: A Melee hit that deals damage produces a retaliatory push toward the attacker, with an 8-second cooldown. It does not trigger while you are disabled and unable to act or when the attacker is already dead.
- **Area**: The push has a 2.75-metre radius and faces the attacker. Enemy Stagger resistance affects the result, so it does not guarantee knocking down every enemy.
- **Cooldown example**: After triggering at second 0, another hit at second 3 produces no push; it can trigger again around second 8. It does not undo the triggering hit's damage.

[Details](zealot_defensive_knockback.md) · [Back to index](#talent-index)

---

<a id="zealot_bled_enemies_take_more_damage"></a>

### Blinded by Blood

<img src="https://github.com/user-attachments/assets/4b9e6b94-1960-44a0-aca5-40446806c270" width="72" height="72" alt="Blinded by Blood talent icon">

- **Operation**: Applying Bleed to an enemy, adding a Bleed stack or refreshing its duration makes that enemy take 15% more damage for 5 seconds. Allies damaging the same enemy also benefit.
- **Duration**: The vulnerability does not gain more stacks. Applying Bleed again restarts its timer; merely seeing an already-bleeding enemy does not automatically apply it.
- **Damage example**: An enemy taking 100 damage instead takes 100 × 1.15 = 115. With your separate-stage 20% damage bonus first, the result is 100 × 1.2 × 1.15 = 138.

[Details](zealot_bled_enemies_take_more_damage.md) · [Back to index](#talent-index)

---

<a id="zealot_more_damage_when_low_on_stamina"></a>

### Desperation

<img src="https://github.com/user-attachments/assets/dbe8719f-76fb-444c-a79d-2bf116b628fb" width="72" height="72" alt="Desperation talent icon">

- **Operation**: Melee damage bonus = 20% × the proportion of Stamina spent. Full Stamina gives no bonus, half Stamina gives +10%, and empty Stamina gives +20%. As Stamina recovers, the bonus decreases.
- **Damage example**: Maximum Stamina 6 with 2 remaining means 4 ÷ 6 spent. The bonus is 20% × 4 ÷ 6 ≈ 13.33%, so base damage 100 becomes about 113.33. Other same-stage Melee damage bonuses are added first.

[Details](zealot_more_damage_when_low_on_stamina.md) · [Back to index](#talent-index)

---

<a id="zealot_melee_crits_restore_stamina"></a>

### No Respite

<img src="https://github.com/user-attachments/assets/6406ef43-19df-4cab-9091-e5c490d72cef" width="72" height="72" alt="No Respite talent icon">

- Melee Critical Hits restore 10% of maximum Stamina, at most once per second. A kill is not required.
- **Restoration example:** with maximum Stamina 6, each trigger restores 6 × 10% = 0.6 points. If only 0.2 points are missing, it restores only 0.2 points. A critical sweep hitting several enemies still follows the 1-second cooldown.

[Details](zealot_melee_crits_restore_stamina.md) · [Back to index](#talent-index)

---

<a id="zealot_revive_speed"></a>

### Providence

<img src="https://github.com/user-attachments/assets/ef521c17-0aae-4e01-b54c-9a25d1f9d792" width="72" height="72" alt="Providence talent icon">

- **How it works:** reviving a downed ally is 25% faster. Completing a revive, rescue, pull-up of a hanging ally or net removal gives that ally +10% Movement Speed and 15% Toughness Damage Reduction for 5 seconds.
- **Effect example:** if the assisted ally normally moves at 5 m/s, this bonus alone gives 5 × 1.1 = 5.5 m/s. An incoming 100 points of Toughness damage becomes 100 × 0.85 = 85. The assisted ally receives the effect, not you.

[Details](zealot_revive_speed.md) · [Back to index](#talent-index)

---

<a id="zealot_damage_vs_elites"></a>

### Abolish Blasphemers

<img src="https://github.com/user-attachments/assets/9b7dda36-1d18-41b4-9e28-3cfd26f0ad66" width="72" height="72" alt="Abolish Blasphemers talent icon">

- **How it works:** deal 15% more damage to Elite enemies, with both Melee and Ranged attacks. This condition does not include every Specialist or boss.
- **Damage example:** 100 × 1.15 = 115 points. With an existing 20% damage bonus in the same stage, the result is 100 × (1 + 20% + 15%) = 135 points.

[Details](zealot_damage_vs_elites.md) · [Back to index](#talent-index)

---

<a id="zealot_weakspot_damage_reduction"></a>

### Hubris

<img src="https://github.com/user-attachments/assets/2ea26a3b-1222-4c56-8120-26a65b4595fa" width="72" height="72" alt="Hubris talent icon">

- **Trigger:** killing an enemy with a Weakspot Hit reduces damage taken by 15% for 4 seconds. Melee and Ranged attacks both qualify; a Weakspot Hit alone does not trigger it.
- **Duration and example:** the effect does not gain stacks, and another trigger restarts the timer. This talent alone gives 100 × 0.85 = 85 points of damage. With a separate 25% reduction, the result is 100 × 0.85 × 0.75 = 63.75 points.

[Details](zealot_weakspot_damage_reduction.md) · [Back to index](#talent-index)

---

<a id="base_melee_damage_node_buff_medium_4"></a>

### Melee Damage Boost

<img src="https://github.com/user-attachments/assets/0c800eb0-7fc1-4c5c-b3c2-67d20a7db2ff" width="72" height="72" alt="Melee Damage Boost talent icon">

- **How it works:** gain +10% Melee damage. The two same-name nodes each provide their own bonus; selecting both gives +20% in total.
- **Damage example:** without other bonuses, 100 × (1 + 10%) = 110. Selecting both nodes gives 120. With an existing same-stage 25% bonus, selecting one node gives 100 × (1 + 25% + 10%) = 135.

[Details](base_melee_damage_node_buff_medium_4.md) · [Back to index](#talent-index)

---

<a id="zealot_elite_kills_empowers"></a>

### Prime Target

<img src="https://github.com/user-attachments/assets/e3c3d16b-83a0-4dfb-a797-080ed9e63c4b" width="72" height="72" alt="Prime Target talent icon">

- **Trigger:** an Elite Kill grants +10% damage for 5 seconds. During the effect, restore 3% of maximum Toughness per second, for 15% over the full 5 seconds.
- **Timer refresh:** another Elite Kill resets the 5-second countdown. It does not stack the damage bonus or the per-second restoration rate.
- **Damage and restoration example:** base damage 100 becomes 100 × 1.1 = 110. With maximum Toughness 100, restore 100 × 15% ÷ 5 = 3 points per second. If triggered again at the third second and then sustained until the eighth second, total restoration can reach 24 points, limited by missing Toughness.

[Details](zealot_elite_kills_empowers.md) · [Back to index](#talent-index)

---

<a id="zealot_suppress_on_backstab_kill"></a>

### Behind the Lines

<img src="https://github.com/user-attachments/assets/5d469457-ce3e-4c4f-ac25-c0759b30b61f" width="72" height="72" alt="Behind the Lines talent icon">

- **Trigger:** a Heavy Melee Backstab Kill suppresses enemies capable of being suppressed within 8 metres of you, with a 5-second cooldown. The area is centred on your position.
- **Limits:** suppression decreases with distance from you. Enemy suppression resistance and behaviour differ, so this does not guarantee that every enemy stops attacking, and it deals no extra damage.
- **Cooldown example:** after triggering at 0 seconds, another Heavy Melee Backstab Kill at 2 seconds does not trigger it again. It can trigger again from about 5 seconds.

[Details](zealot_suppress_on_backstab_kill.md) · [Back to index](#talent-index)

---

<a id="zealot_backstab_periodic_damage"></a>

### Time to Kill

<img src="https://github.com/user-attachments/assets/4bf327a5-94f0-4af9-ad51-b3380308846e" width="72" height="72" alt="Time to Kill talent icon">

- **How it works:** while available, the effect grants +50% Melee Backstab damage. A damaging Backstab Hit starts an 8-second cooldown; a kill is not required.
- **Damage example:** with other conditions fixed and a baseline of 100 in this stage, no other Backstab bonus gives 100 × 1.5 = 150. An existing same-stage 20% Backstab bonus changes from 120 to 100 × (1 + 20% + 50%) = 170.
- **Direction limit:** the Melee hit must land within the valid angle behind the enemy. Shooting from behind does not count as this Melee Backstab.

[Details](zealot_backstab_periodic_damage.md) · [Back to index](#talent-index)

---

<a id="zealot_offensive_vs_many"></a>

### Against the Odds

<img src="https://github.com/user-attachments/assets/9b626554-120f-43b1-b152-bf21224b6a42" width="72" height="72" alt="Against the Odds talent icon">

- **Stacks:** every 2 enemies within 5 metres grant +2% damage and +10% Cleave, up to 5 stacks at 10 enemies. Stacks decrease as enemies leave; bonuses are suspended while you are disabled.
- **Damage example:** 6 nearby enemies give 3 stacks, so base damage 100 becomes 100 × (1 + 3 × 2%) = 106. At 10 or more enemies, the maximum is 110. Other same-stage damage bonuses are added first.
- **Cleave example:** an original enemy hit-mass budget of 10 becomes 10 × (1 + 3 × 10%) = 13 at 3 stacks, or 15 at maximum stacks. This is the total mass you can cleave through, not a fixed extra 3 or 5 enemies.

[Details](zealot_offensive_vs_many.md) · [Back to index](#talent-index)

---

<a id="zealot_reload_from_melee"></a>

### Out of Pocket

<img src="https://github.com/user-attachments/assets/e1dda6ab-d49e-4d08-bd44-f684dae4913f" width="72" height="72" alt="Out of Pocket talent icon">

- **How it works:** each Melee Kill transfers 10% of the ammunition currently missing from the magazine from your reserves. It does not create extra total ammunition or replenish reserves.
- **Reload example:** magazine capacity 30 with 10 rounds leaves 20 missing. A kill transfers 20 × 10% = 2 rounds from reserves, giving 12 rounds. Next, 18 are missing: 1.8 rounds are credited, 1 is transferred this time, and the remaining 0.8 carries over to later kills.
- **Limits:** a full magazine adds no new credit. Normally, no reserves means no transfer; insufficient reserves limit the transfer to the amount available.

#### Original Traditional Chinese correction

- The original Chinese says it restores missing ammunition reserves. The effect instead consumes reserves to refill the magazine, without increasing reserves or total ammunition.

[Details](zealot_reload_from_melee.md) · [Back to index](#talent-index)

---

<a id="zealot_reduced_damage_from_ranged"></a>

### Wait in Line

<img src="https://github.com/user-attachments/assets/ec2c5209-fa69-4340-b6d9-bca627da0840" width="72" height="72" alt="Wait in Line talent icon">

- **How it works:** damage from Ranged attacks is reduced by 20%. Eligibility follows the attack type, not simply whether the enemy carries a gun. If the same gunner switches to Melee, this talent does not reduce that damage.
- **Reduction example:** this talent alone changes incoming Ranged damage 100 to 100 × 0.8 = 80. With a separate 25% general reduction, the result is 100 × 0.8 × 0.75 = 60.

[Details](zealot_reduced_damage_from_ranged.md) · [Back to index](#talent-index)

---

<a id="zealot_weapon_special_damage"></a>

### Holy Tools

<img src="https://github.com/user-attachments/assets/28bd1a77-6a4b-44e5-b46c-1d1a334479e7" width="72" height="72" alt="Holy Tools talent icon">

- **Trigger:** activating a Melee Weapon Special grants +20% damage to the next Melee attack within 5 seconds. The effect is consumed when that attack ends, including a missed swing. If you do not swing before the deadline, it expires.
- **Damage example:** base damage 100 becomes 100 × 1.2 = 120. With an existing same-stage 25% Melee damage bonus, the result is 100 × (1 + 25% + 20%) = 145. For one sweep, the effect lasts until that swing ends.

[Details](zealot_weapon_special_damage.md) · [Back to index](#talent-index)

---

<a id="zealot_melee_kills_restore_toughness_to_target"></a>

### Got Your Back

<img src="https://github.com/user-attachments/assets/5ddb9790-0039-4a22-97e6-8ff7c82719c0" width="72" height="72" alt="Got Your Back talent icon">

- **Trigger:** a Melee Kill against an enemy targeting another ally restores 7.5% of that ally's maximum Toughness and an additional 5% of yours. It does not trigger if the enemy targets you or has no target.
- **Restoration example:** with the ally's maximum Toughness 120 and yours 100, the ally restores 120 × 7.5% = 9 points, and you restore an extra 100 × 5% = 5. Each recipient follows their own restoration bonuses and missing-Toughness limit. Normal Melee Kill restoration is separate.
- **Distance condition:** the talent adds no Coherency range requirement. What matters is the killed enemy's target at that moment.

[Details](zealot_melee_kills_restore_toughness_to_target.md) · [Back to index](#talent-index)

---

<a id="zealot_dmg_vs_burning_electrocuted"></a>

### Purifying Hatred

<img src="https://github.com/user-attachments/assets/8137f892-5370-4a69-b790-556f579414d2" width="72" height="72" alt="Purifying Hatred talent icon">

- **How it works:** gain +15% damage if the enemy is Burning and another +15% if it is Electrocuted. Each condition is checked separately; both states are not required for either bonus to apply.
- **Damage example:** base damage 100 with one qualifying condition becomes 100 × 1.15 = 115. Both conditions give 100 × (1 + 15% + 15%) = 130. Other same-stage damage bonuses are added first.

[Details](zealot_dmg_vs_burning_electrocuted.md) · [Back to index](#talent-index)

---

<a id="zealot_improved_weapon_handling_after_dodge"></a>

### Dance of Death

<img src="https://github.com/user-attachments/assets/a007251f-9a21-4822-b2e4-38eac8e0ae56" width="72" height="72" alt="Dance of Death talent icon">

- **How it works:** after successfully Dodging an attack, bullet Spread is reduced by 75% and Recoil unsteadiness buildup by 50% for 3 seconds. Another successful Dodge restarts the timer.
- **Spread example:** with this effect alone, an affected Spread angle of 4 degrees becomes 4 × 0.25 = 1 degree. This does not mean hit rate increases by a fixed 75%.
- **Recoil example:** an original unsteadiness increase of 0.2 per event becomes 0.2 × 0.5 = 0.1. Its decay rate during recovery is multiplied by 1 ÷ 0.5 = 2. Actual crosshair displacement still follows the weapon's Recoil curve; this does not guarantee that all visible camera movement is halved.

[Details](zealot_improved_weapon_handling_after_dodge.md) · [Back to index](#talent-index)

---
