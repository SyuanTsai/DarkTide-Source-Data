# Arbites talents: Release 1.13.1

[繁體中文](../README.md) | [Sources and technical index](SOURCE_INDEX.md) | [Skills](../../../README.en.md) | [Version information](../../../../README.md)

[Character base effects](BASE_EFFECTS.md)

<a id="talent-index"></a>

## Talent index

| Talent | Main effects | Category |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/aa116dc7-88d2-450b-bcff-c2dc0bb6b4c0" width="32" height="32" alt="Remote Detonation talent icon"> [Remote Detonation](#adamant_whistle) | <ul><li>Trigger Electrocution and an explosion at your Cyber-Mastiff. Electrocuted enemies take 10% more damage for 2s.</li><li>Hold 2 charges; restore one every 50s, or both from empty in 100s.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/9f134d52-bce2-4365-b74c-f93550febf29" width="32" height="32" alt="Arbites Grenade talent icon"> [Arbites Grenade](#adamant_grenade_improved) | <ul><li>Detonate on impact in a 10m blast, with a higher-damage 2.5m centre.</li><li>Carry 4 grenades, one more than the base version; this ability alone has no timed automatic refill.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/db0783ea-1312-4fed-a430-c1be9a87d2e1" width="32" height="32" alt="Voltaic Shock Mine talent icon"> [Voltaic Shock Mine](#adamant_shock_mine) | <ul><li>Arm about 1s after deployment; once an enemy is detected, apply Electrocution within 3m for a 15s active period.</li><li>Carry two mines; each applied Electrocution lasts 3s.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/ab5c4535-3182-4aa9-a388-faffff1d0faa" width="32" height="32" alt="Part of the Squad talent icon"> [Part of the Squad](#adamant_companion_coherency) | <ul><li>Your Cyber-Mastiff counts towards Coherency; you and Allies in Coherency gain an additional 7.5% Toughness Damage Reduction.</li><li>Isolating this effect, 100 incoming Toughness damage becomes 92.5.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/2f99cb20-a83e-4a7c-98ee-f43949811f84" width="32" height="32" alt="Ruthless Efficiency talent icon"> [Ruthless Efficiency](#adamant_reload_speed_aura) | <ul><li>You and Allies in Coherency gain an additional 12.5% Reload Speed.</li><li>Your Cyber-Mastiff no longer counts towards Coherency while this aura is selected.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/57af1e74-7cc5-45bb-a332-11d2e5fde909" width="32" height="32" alt="Breaking Dissent talent icon"> [Breaking Dissent](#adamant_damage_vs_staggered_aura) | <ul><li>You and Allies in Coherency deal 10% more damage to Staggered enemies.</li><li>Isolating this effect, 100 damage becomes 110; it gives no bonus against a target that is not Staggered.</li><li>Your Cyber-Mastiff no longer counts towards Coherency while this aura is selected.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/a0aad2f2-d03d-486c-b583-1307a9780ac2" width="32" height="32" alt="Break the Line talent icon"> [Break the Line](#adamant_charge) | <ul><li>Step forward and Bash; count as Blocking during the charge, then gain Damage and Impact bonuses for 6s.</li><li>Base cooldown 20s; one charge.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/18c1f301-d18b-4469-9fbf-bb5ede1b3353" width="32" height="32" alt="Nuncio-Aquila talent icon"> [Nuncio-Aquila](#adamant_area_buff_drone_improved) | <ul><li>Deploy for 20s in a 7.5m radius; 60s cooldown, one charge.</li><li>The improved version restores 7.5% maximum Toughness per second, increases Suppression and Impact, and reduces Recoil; it grants immunity to Stun, Slowdown and Suppression.</li><li>Enemies within range take 15% more damage.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/4eb18874-83b0-4e2f-bf2b-c91001a15371" width="32" height="32" alt="Castigator's Stance talent icon"> [Castigator's Stance](#adamant_stance) | <ul><li>Replenish all Toughness on activation. For 10s, gain 15% Movement Speed and 20% Strength (PowerLevel), and take 70% less damage; cannot Sprint.</li><li>50s cooldown, one charge; damage reduction continues for 2s after the stance ends.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/8c312d8e-8b49-45cd-828e-62cffc6d0a25" width="32" height="32" alt="Blessed Armament talent icon"> [Blessed Armament](#adamant_stance_ranged_kills_transfer_ammo) | <ul><li>During Castigator's Stance, ranged kills transfer 10% of Clip capacity from Reserve, rounded upward and capped by missing Clip ammunition.</li><li>The base stance lasts 10s.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/f7454987-ea7e-474e-bb22-3c3ead9adb1b" width="32" height="32" alt="Writ of Execution talent icon"> [Writ of Execution](#adamant_stance_elite_kills_stack_damage) | <ul><li>During Castigator's Stance, each Elite or Specialist kill grants +7.5% Damage for 12s, up to six stacks.</li><li>Full stacks give +45% Damage; acquired stacks can continue counting down after the stance ends.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/27a74ed8-eb51-4774-ae8e-2089aa7b1686" width="32" height="32" alt="Bloodlust talent icon"> [Bloodlust](#adamant_stance_dog_bloodlust) | <ul><li>Activating Castigator's Stance gives your Cyber-Mastiff 75% more damage for the base stance duration of 10s.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/53dd2864-62b6-4e6c-9d62-e79831b33c78" width="32" height="32" alt="Inspiring Recitation talent icon"> [Inspiring Recitation](#adamant_drone_buff_talent) | <ul><li>Allies affected within the Nuncio-Aquila's area additionally gain 30% Toughness Damage Reduction, 30% Revive Speed and 10% Attack Speed.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/483804fa-b052-4baa-b3d7-5e7dbfbe44f4" width="32" height="32" alt="Fear of Justice talent icon"> [Fear of Justice](#adamant_drone_debuff_talent) | <ul><li>Enemies within the Nuncio-Aquila's area deal 25% less melee damage and have 25% lower melee attack speed.</li><li>Isolating this effect, an adjustable attack action taking 1s instead takes about 1.33s.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/a0f08b1e-586b-4a65-b271-29d79874f573" width="32" height="32" alt="Commendation from Condemnation talent icon"> [Commendation from Condemnation](#adamant_charge_toughness) | <ul><li>Each distinct Elite, Specialist or Monstrosity hit by the charge replenishes 20% Toughness and 15% Stamina.</li><li>One charge replenishes at most 100% Toughness and 75% Stamina; the same enemy does not count twice.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/d2b1945d-2300-4993-a649-00c1e3858e0d" width="32" height="32" alt="Targeted Brutality talent icon"> [Targeted Brutality](#adamant_charge_cooldown_reduction) | <ul><li>Each effective charge hit on an ordinary enemy restores 0.5s of Combat Ability Cooldown; each hit on an Elite, Specialist or Monstrosity restores 1s.</li><li>One charge restores at most 5s of cooldown.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/7b78f1c1-2250-44c0-9642-315fd105575a" width="32" height="32" alt="Engage talent icon"> [Engage](#adamant_charge_longer_distance) | <ul><li>Adds 3.75m to the charge's base distance of 3.75m, raising the target distance limit to 7.5m.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/6283df18-7a2a-4a7b-adac-4a13c5cd6315" width="32" height="32" alt="Kill Order talent icon"> [Kill Order](#adamant_dog_damage_after_ability) | <ul><li>After using your Combat Ability, your Cyber-Mastiff gains 50% more damage for 12s; using the ability again while the effect is active refreshes its duration.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/66f3dd5d-68b9-415a-8330-b6daf3fb427c" width="32" height="32" alt="Execution Order talent icon"> [Execution Order](#adamant_execution_order) | <ul><li>Automatically marks Elites, Specialists or Bosses within 40m in front of you.</li><li>You or your Cyber-Mastiff killing a marked target replenishes 15% of maximum Toughness and grants damage and attack-speed bonuses for 8s.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/47d0c2b2-0d8e-4906-a528-48f9488353e9" width="32" height="32" alt="Terminus Warrant talent icon"> [Terminus Warrant](#adamant_terminus_warrant) | <ul><li>Ranged attacks build Melee Justice for each enemy hit per shot, granting three stacks on a weakspot hit; melee hits build Ranged Justice, each capped at 20 stacks.</li><li>Wielding the corresponding weapon consumes those stacks to activate a fixed 12s buff.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/b838686c-aaa0-49a2-bbea-fc9e074bb6cf" width="32" height="32" alt="Forceful talent icon"> [Forceful](#adamant_forceful) | <ul><li>Staggering hits or blocks build up to 10 stacks, each granting 5% Impact and lowering the damage-taken multiplier.</li><li>Stacks share a 5s timer; taking damage removes at most one stack every 0.25s.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/a2aadd19-f969-47d7-96f3-3021eb1fb5c8" width="32" height="32" alt="Lone Wolf talent icon"> [Lone Wolf](#adamant_disable_companion) | <ul><li>Removes your Cyber-Mastiff in exchange for +20% Damage, +10% Attack Speed, 15% Toughness Damage Reduction and +1 maximum Blitz charge.</li><li>While charges are missing, replenish one grenade every 45s, or one Voltaic Shock Mine every 90s.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/1016875d-cc4c-44f2-8a06-c93155d482d4" width="32" height="32" alt="Will of the Lex talent icon"> [Will of the Lex](#adamant_forceful_toughness_regen_per_stack) | <ul><li>When selected, each Forceful stack replenishes 0.5% of maximum Toughness per second.</li><li>Recovery scales with the current Forceful stack count, up to the base cap of 10.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/92922b1c-4991-480e-86af-e050b9faa496" width="32" height="32" alt="Adamant Will talent icon"> [Adamant Will](#adamant_forceful_stun_immune_and_block_all) | <ul><li>At maximum Forceful stacks, gain Stun and Slowdown Immunity.</li><li>The effects remain for 3s after leaving maximum stacks; perfect blocks additionally gain the ability to block normally unblockable attacks.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/3ecc49e6-a4c7-4d77-926d-623e4f8f34f6" width="32" height="32" alt="Targets Acquired talent icon"> [Targets Acquired](#adamant_forceful_offensive) | <ul><li>At 10 Forceful stacks, gain Attack Speed and Cleave bonuses.</li><li>The bonuses remain for 3s after leaving maximum stacks.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/bc3b59ed-a142-4807-86f9-f75d65b367b4" width="32" height="32" alt="Arbites Vigilant talent icon"> [Arbites Vigilant](#adamant_forceful_ability_damage) | <ul><li>Using your Combat Ability converts current Forceful stacks into a 12s Strength bonus.</li><li>Up to 10 stacks grant +2.5% each; triggering this effect consumes the Forceful stacks.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/62f41d0b-cd55-459d-b4d7-c8c155da410f" width="32" height="32" alt="Judicial Force talent icon"> [Judicial Force](#adamant_forceful_stagger_on_low_high) | <ul><li>Cause an explosion that staggers nearby enemies when Forceful rises from below maximum to 10 stacks or falls from a positive count to zero.</li><li>The maximum-stack and zero-stack triggers each have a 5s cooldown.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/7b782337-07db-4ff4-9a85-ba21d1fcfe6b" width="32" height="32" alt="Obstinate talent icon"> [Obstinate](#adamant_terminus_warrant_cdr) | <ul><li>After spending all 20 Justice stacks, restore an additional 0.33s of Combat Ability cooldown each second for 12s.</li><li>Retriggering refreshes the timer; nominal additional restoration totals 3.96s.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/053a0db6-481b-4944-9077-d1d9a05759dd" width="32" height="32" alt="Terminal Decree talent icon"> [Terminal Decree](#adamant_terminus_warrant_support) | <ul><li>Whenever Terminus Warrant stacks are spent, restore Toughness to you and Allies in Coherency according to the actual count spent.</li><li>Each stack restores 1% of maximum Toughness; the base stack cap is 20.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/5c90d0a5-8150-4c04-84cf-9b0ae1d6e28f" width="32" height="32" alt="Efficient Killer talent icon"> [Efficient Killer](#adamant_execution_order_crit) | <ul><li>Killing a Marked enemy grants Critical Hit Chance and Critical Hit Damage bonuses for 8s.</li><li>The bonuses are +10 percentage points of Critical Hit Chance and +25% additional critical damage.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/83df9392-fcfa-43e9-b9e0-ceef6f50ade7" width="32" height="32" alt="Malocator talent icon"> [Malocator](#adamant_execution_order_cdr) | <ul><li>After you or your Cyber-Mastiff kills a Marked target, restore an additional 0.5s of Combat Ability cooldown each second for 8s.</li><li>Retriggering refreshes the timer; nominal additional restoration totals 4s.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/ab53bec8-fd00-470c-8c5d-46cc58904f13" width="32" height="32" alt="No Lenience talent icon"> [No Lenience](#adamant_execution_order_rending) | <ul><li>Killing a Marked enemy grants a Rending bonus for 8s.</li><li>The +10% Rending modifier feeds the shared armor-damage calculation.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/eeb40551-fbea-4de0-8e46-0a07e4bfcec6" width="32" height="32" alt="Keeping Protocol talent icon"> [Keeping Protocol](#adamant_execution_order_permastack) | <ul><li>Each Marked Kill permanently increases Damage and defense against Monstrosities, up to 30 stacks.</li><li>Each stack adds +1% Damage against Monstrosities; damage taken from them is reduced multiplicatively per stack.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/0633a2b7-e8e9-4215-85a9-f54ae4d95809" width="32" height="32" alt="Not Far Behind talent icon"> [Not Far Behind](#adamant_pinning_dog_bonus_moving_towards) | <ul><li>Each Cyber-Mastiff Pounce grants the player Movement Speed and Damage bonuses for 5s.</li><li>Both bonuses are +10%; retriggering refreshes the single-stack duration.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/6208ebde-9eb1-4a4d-923c-823a0e511bf9" width="32" height="32" alt="Go Get 'Em! talent icon"> [Go Get 'Em!](#adamant_companion_focus_ranged) | <ul><li>The Cyber-Mastiff favors Ranged Enemies and gains +50% Damage against them.</li><li>Ranged focus increases their target-selection score and extends the selection distances.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/d61cee49-95ce-43fb-ae8a-b05ba598366b" width="32" height="32" alt="Unleashed Brutality talent icon"> [Unleashed Brutality](#adamant_companion_focus_elite) | <ul><li>The Cyber-Mastiff favors Elite and Specialist Enemies and gains +25% Damage against them.</li><li>Target-selection scoring increases the priority of Elites and Specialists.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/34f0ccb1-7c44-4aaf-a697-e0ef2b6f2c0e" width="32" height="32" alt="Writ of Judgement talent icon"> [Writ of Judgement](#adamant_terminus_warrant_improved_combined) | <ul><li>Spending a full 20 Melee Justice or Ranged Justice stacks grants +10% Melee and Ranged Attack Speed and +10 percentage points of Critical Hit Chance for 12s.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/a6716d2d-1100-4bbe-be59-683b5b9176b4" width="32" height="32" alt="Man and Cyber-Mastiff talent icon"> [Man and Cyber-Mastiff](#adamant_toughness_regen_near_companion) | <ul><li>While within 8m of your Cyber-Mastiff, recover 5% of maximum Toughness per second.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/82a4d2c5-a0aa-4c05-a8ea-e03bc0e4932b" width="32" height="32" alt="Withering Fire talent icon"> [Withering Fire](#adamant_damage_after_reloading) | <ul><li>After reloading, gain 15% Ranged Damage for 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/0f0f19ee-07a9-47a6-9acf-599b809569a4" width="32" height="32" alt="Hammer of Judgement talent icon"> [Hammer of Judgement](#adamant_multiple_hits_attack_speed) | <ul><li>Hit at least 3 enemies with one melee attack to gain 10% Melee Attack Speed for 3s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/fc3f3a29-7b71-45d4-aec6-c72036ba9831" width="32" height="32" alt="Target Neutralised talent icon"> [Target Neutralised](#adamant_elite_special_kills_replenish_toughness) | <ul><li>An Elite or Specialist kill instantly restores 10% of maximum Toughness, then another 10% over 4s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/3098a511-fa0f-444e-a9e2-8e6591688115" width="32" height="32" alt="Up Close talent icon"> [Up Close](#adamant_close_kills_restore_toughness) | <ul><li>Killing an enemy within 12.5m restores 5% of maximum Toughness.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/898ad4c6-3f99-404d-8ff9-b15a9820f8e9" width="32" height="32" alt="Force of Will talent icon"> [Force of Will](#adamant_staggers_replenish_toughness) | <ul><li>A melee attack that Staggers its first hit target restores 7.5% of maximum Toughness.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/4ce13efe-7a81-48cd-9bb6-47dfb55f63b8" width="32" height="32" alt="Voltaic Mandibles Augment talent icon"> [Voltaic Mandibles Augment](#adamant_dog_attacks_electrocute) | <ul><li>Your Cyber-Mastiff's pounce and pinning attacks Electrocute the target for 5s; continued attacks can refresh the effect.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/4c4b06a3-049f-4272-b1d2-a8a472f541b0" width="32" height="32" alt="Walk It Off talent icon"> [Walk It Off](#adamant_stamina_spent_replenish_toughness) | <ul><li>Each accumulated 1 point of Stamina spent restores 10% of maximum Toughness over 3s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/d4c3f66c-8fa8-419f-8a46-f94c842a9b4e" width="32" height="32" alt="True Grit talent icon"> [True Grit](#adamant_limit_dmg_taken_from_hits) | <ul><li>Health damage from one attack is capped at 50 points; instant kills bypass the cap.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/af78e688-7708-4d00-88f0-913478235d41" width="32" height="32" alt="Toughness Damage Reduction talent icon"> [Toughness Damage Reduction](#base_toughness_damage_reduction_node_buff_medium_1) | <ul><li>Increase Toughness Damage Reduction by 10 percentage points.</li></ul> | Stat node |
| <img src="https://github.com/user-attachments/assets/d25eaf26-cb8b-4009-80ac-af75d049fb9f" width="32" height="32" alt="Arbitrator Armour talent icon"> [Arbitrator Armour](#adamant_armor) | <ul><li>Increase maximum Toughness by 25 points.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/90c9bff4-baf3-4b53-b160-16945870dd88" width="32" height="32" alt="Ammo Belt talent icon"> [Ammo Belt](#adamant_ammo_belt) | <ul><li>Increase Reserve ammunition capacity by 25%.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/4232eef3-1499-4f4c-b2e3-d1416db2ec8e" width="32" height="32" alt="Rebreather talent icon"> [Rebreather](#adamant_rebreather) | <ul><li>Take 20% less Corruption and 75% less Toxic Gas damage.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/02fd58ae-50fc-461f-879d-70d77a2aff44" width="32" height="32" alt="Suppression Protocols talent icon"> [Suppression Protocols](#adamant_hitting_multiple_gives_tdr) | <ul><li>Hit at least 3 enemies with one attack to gain 20% Toughness Damage Reduction for 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/62b0bee6-3606-40bc-9d78-06f072535e59" width="32" height="32" alt="Ranged Damage Boost talent icon"> [Ranged Damage Boost](#base_ranged_damage_node_buff_medium_1) | <ul><li>Increase Ranged Damage by 10%.</li></ul> | Stat node |
| <img src="https://github.com/user-attachments/assets/8c224499-f2ca-420c-bcf6-39034e6a35b2" width="32" height="32" alt="Melee Damage Boost talent icon"> [Melee Damage Boost](#base_melee_damage_node_buff_medium_1) | <ul><li>Increase Melee Damage by 10%.</li></ul> | Stat node |
| <img src="https://github.com/user-attachments/assets/549d3657-c19a-49a6-b8ad-2c1e77080dfa" width="32" height="32" alt="Razor-Jaw Augment talent icon"> [Razor-Jaw Augment](#adamant_dog_pounces_bleed_nearby) | <ul><li>Your Cyber-Mastiff's surrounding pounce push and pinning attacks against Ogryns or Monsters can apply 6 stacks of Bleed.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/d856ef6a-9f61-4b4a-b672-e60019dea866" width="32" height="32" alt="Imposing Force talent icon"> [Imposing Force](#adamant_damage_reduction_after_elite_kill) | <ul><li>An Elite or Specialist kill grants 25% Damage Resistance for 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/fd423ddb-0080-4603-8fd7-90257b583c3d" width="32" height="32" alt="Hold the Line talent icon"> [Hold the Line](#adamant_staggers_reduce_damage_taken) | <ul><li>Stagger enemies to build up to 5 damage-reduction stacks lasting 8s; a received melee hit clears them.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/d3fa1c73-0a49-42ab-920c-11b7238af849" width="32" height="32" alt="Cleave Boost talent icon"> [Cleave Boost](#base_cleave_node_buff_medium_1) | <ul><li>Increase damage and stagger cleave capacity by 25%.</li></ul> | Stat node |
| <img src="https://github.com/user-attachments/assets/e8b31492-509e-479a-9369-203e36e1e1e4" width="32" height="32" alt="Impact Boost talent icon"> [Impact Boost](#base_impact_node_buff_medium_1) | <ul><li>Increase Impact by 25%, making enemies easier to stagger.</li></ul> | Stat node |
| <img src="https://github.com/user-attachments/assets/170599ce-ad50-4760-93b2-da650c6deac8" width="32" height="32" alt="Plasteel Plates talent icon"> [Plasteel Plates](#adamant_plasteel_plates) | <ul><li>Increase maximum Toughness by 25 points.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/5df365c7-8213-4c06-acc5-2b00f0cda022" width="32" height="32" alt="Serrated Maw talent icon"> [Serrated Maw](#adamant_dog_applies_brittleness) | <ul><li>Cyber-Mastiff pounce applies 15% Brittleness for 5s; shared cap 40%.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/9a87f145-d4a8-4554-b8ca-f5fbb2a58944" width="32" height="32" alt="Arbites Revelatum talent icon"> [Arbites Revelatum](#adamant_dodge_grants_damage) | <ul><li>After successfully dodging an enemy attack, gain 15% Damage for 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/59f1504d-8b25-40c7-a582-b5de1b3278cf" width="32" height="32" alt="Soulguilt Scan talent icon"> [Soulguilt Scan](#adamant_stacking_weakspot_strength) | <ul><li>Weakspot Hits grant 2% Weakspot Strength per stack, up to 8 stacks, for 10s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/88c5f583-d739-484e-a7cd-89b79a90334d" width="32" height="32" alt="Judicious Efficiency talent icon"> [Judicious Efficiency](#adamant_elite_special_kills_reload_speed) | <ul><li>After an Elite or Specialist Kill, gain 20% Reload Speed for the next reload.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/8f0bcba7-48bd-4d61-ad19-b03a65160eb5" width="32" height="32" alt="March talent icon"> [March](#adamant_movement_speed_on_block) | <ul><li>On a ranged hit, gain 15% Movement Speed for 3s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/6d045fa3-97bc-4943-9e6e-0f703e68288d" width="32" height="32" alt="No Escape talent icon"> [No Escape](#adamant_elite_special_kills_offensive_boost) | <ul><li>After an Elite or Specialist Kill, gain 10% Damage and Movement Speed for 4s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/7b24cc5d-1975-4762-8b77-8899c0713175" width="32" height="32" alt="Drive them Back talent icon"> [Drive them Back](#adamant_cleave_after_push) | <ul><li>A push hitting an enemy grants 75% more melee damage cleave capacity for 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/e51d3184-42e7-434f-8369-0ae7a6568619" width="32" height="32" alt="Shield Plates talent icon"> [Shield Plates](#adamant_shield_plates) | <ul><li>Blocking restores 15% of maximum Toughness over 3s; Perfect Block also restores 10% instantly, with a 1s cooldown on that immediate recovery.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/bff83e5a-48a0-4f4c-b280-3093df526c5d" width="32" height="32" alt="Weight of the Lex talent icon"> [Weight of the Lex](#adamant_heavy_attacks_increase_damage) | <ul><li>After a heavy melee hit, gain 15% Damage for 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/fcb8d517-7a08-452a-a577-1ab15af469cb" width="32" height="32" alt="Strike Down talent icon"> [Strike Down](#adamant_melee_attacks_on_staggered_rend) | <ul><li>Melee attacks against staggered enemies gain 15% Rending.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/c776951e-d8de-46cb-ad58-7c14af6b0997" width="32" height="32" alt="Zealous Dedication talent icon"> [Zealous Dedication](#adamant_crit_chance_on_kill) | <ul><li>Kills grant 2 percentage points of Critical Strike Chance per stack, up to 8 stacks, for 10s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/e650aa60-14d1-446d-9fa3-fed8dd633716" width="32" height="32" alt="Prosecution Blow talent icon"> [Prosecution Blow](#adamant_crits_rend) | <ul><li>Ranged Critical Strikes gain 20% Rending.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/cd883557-4048-43f0-a3b7-3a90bbc6ffe8" width="32" height="32" alt="Street Smarts talent icon"> [Street Smarts](#adamant_dodge_improvement) | <ul><li>Gain 1 additional Effective Dodge; extend the grace period after a melee dodge ends by 25%.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/62b4954d-42c3-4eab-a6ea-a17719414e19" width="32" height="32" alt="Monstrosity Hunter talent icon"> [Monstrosity Hunter](#adamant_monster_hunter) | <ul><li>Deal 20% more damage to Ogryns and Monstrosities.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/6f3ef825-f018-482c-b511-60f87907cefc" width="32" height="32" alt="The Emperor's Fist talent icon"> [The Emperor's Fist](#adamant_first_melee_hit_increased_damage) | <ul><li>The first target hit by each melee sweep receives 15% more Melee Damage and 30% more Impact.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/4b7cf064-ea83-4334-a484-a222e22af7a3" width="32" height="32" alt="Target Selection talent icon"> [Target Selection](#adamant_pinning_dog_elite_damage) | <ul><li>Killing an Elite or Specialist pinned by your own Cyber-Mastiff grants 15% Damage against Elites and Specialists for 8s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/29a7dad3-3f9c-4679-a37d-680025796f47" width="32" height="32" alt="Target Priority talent icon"> [Target Priority](#adamant_increased_damage_to_high_health) | <ul><li>Deal 15% more damage to enemies above 75% Health.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/fc2bbfe4-50b8-4c9c-b775-20f1c2c33792" width="32" height="32" alt="Canine Morale talent icon"> [Canine Morale](#adamant_pinning_dog_kills_buff_allies) | <ul><li>Killing an enemy pinned by your own Cyber-Mastiff grants you and allies in Coherency 20% Toughness Damage Reduction and 10% of maximum Toughness over 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/8a0b3c73-0e7e-4d31-9f7d-385634eae6e3" width="32" height="32" alt="Rapid Movement talent icon"> [Rapid Movement](#adamant_sprinting_sliding) | <ul><li>After a slide ends, gain 5% Sprint Speed for 5s. Kills restore 5% of maximum Stamina, with a 0.75s cooldown.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/75cf7e7e-044e-432f-b7cb-b73e53164425" width="32" height="32" alt="Final Warning talent icon"> [Final Warning](#adamant_ranged_damage_on_melee_stagger) | <ul><li>Staggering an enemy with a melee attack or push grants 15% Ranged Damage for 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/03af9ca3-e4f4-4383-9650-f8ac659cfadd" width="32" height="32" alt="Priority Endowment talent icon"> [Priority Endowment](#adamant_clip_size) | <ul><li>Clip Size increases by 15%, rounded up.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/a72c3f5b-2dde-48d0-8f5c-1af4ba20a044" width="32" height="32" alt="Cower, Miscreants! talent icon"> [Cower, Miscreants!](#adamant_damage_vs_suppressed) | <ul><li>Damage against Suppressed enemies increases by 25%.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/d3c96bd5-6464-499a-a742-cd58ddf1fa02" width="32" height="32" alt="Justified Measures talent icon"> [Justified Measures](#adamant_stacking_damage) | <ul><li>After an attack hits its first target, gain 2% Damage per stack, up to 5 stacks, lasting 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/af381ce2-1360-49a1-931d-6db3fb174166" width="32" height="32" alt="Suppression Force talent icon"> [Suppression Force](#adamant_staggered_enemies_deal_less_damage) | <ul><li>Hitting a Staggered enemy with a melee attack or push reduces its Damage by 20% for 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/2577c784-85c4-473c-b9ba-a88f8de35355" width="32" height="32" alt="Concussive talent icon"> [Concussive](#adamant_melee_weakspot_hits_count_as_stagger) | <ul><li>Melee Weakspot Hits make the target count as Staggered for 4s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/aa78a41a-3cea-4e8d-ba36-4496c3619be7" width="32" height="32" alt="Target the Weak talent icon"> [Target the Weak](#adamant_staggering_enemies_take_more_damage) | <ul><li>Hitting a Staggered enemy with a melee attack or push makes it take 15% more Melee Damage for 5s.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/96221430-4610-4bf3-9b19-4fd056c99e74" width="32" height="32" alt="Retaliatory Force talent icon"> [Retaliatory Force](#adamant_perfect_block_damage_boost) | <ul><li>Block Stamina cost is reduced by 15%. Perfect Blocks grant 15% Damage and Attack Speed for 8s.</li></ul> | Passive talent |

## Blitz

<a id="adamant_whistle"></a>

### Remote Detonation

<img src="https://github.com/user-attachments/assets/aa116dc7-88d2-450b-bcff-c2dc0bb6b4c0" width="72" height="72" alt="Remote Detonation talent icon">

- **Location and range**: About 0.3s after activation, trigger the effect at your Cyber-Mastiff's current location. Enemies within 5m are electrocuted and receive a 2.5s light stagger. Explosion damage reaches 4m, with a 2m high-damage centre.

- **Electrocution and damage taken**: Electrocution lasts 2s and multiplies the target's damage taken by 1.1. Isolating this effect, 100 damage becomes `100 × 1.1 = 110`. With a separate 25% attacker damage bonus, the result is `100 × 1.25 × 1.1 = 137.5 damage`.

- **Blast example**: Isolating the central blast's armour stage, the Unarmoured baseline is `600 × 1 = 600 damage`; Flak Armour gives `600 × 0.5 = 300 damage`. Hit location, obstruction and Electrocution's damage-taken effect still affect the actual hit. A target 4.5m from the Cyber-Mastiff is inside the Electrocution radius but outside the damaging blast.

- **Charges and cooldown**: Hold up to 2 charges, with 50s needed to restore one. Both charges share the same recovery progress and return in sequence. With both used in quick succession and no other cooldown modifiers, about 50s restores one charge and 100s restores both.

[Details](adamant_whistle.md) · [Back to index](#talent-index)

<a id="adamant_grenade_improved"></a>

### Arbites Grenade

<img src="https://github.com/user-attachments/assets/9f134d52-bce2-4365-b74c-f93550febf29" width="72" height="72" alt="Arbites Grenade talent icon">

- **Detonation and range**: Detonates on impact after being thrown. The blast radius is 10m, with a higher-damage 2.5m centre and damage falloff toward the edge.

- **Damage example**: Isolating the central blast's armour stage, base damage 1,500 gives `1,500 × 1 = 1,500 damage` against Unarmoured, `1,500 × 0.5 = 750` against Flak Armour and `1,500 × 0.2 = 300` against Carapace Armour. Hit location, blast obstruction and other damage modifiers still affect the actual hit.

- **Capacity and replenishment**: Carry up to 4 grenades, one more than the base version's 3. Throwing one consumes one; this ability alone has no timed automatic replenishment. With Lone Wolf, capacity becomes 5 and missing grenades replenish one every 45s.

[Details](adamant_grenade_improved.md) · [Back to index](#talent-index)

<a id="adamant_shock_mine"></a>

### Voltaic Shock Mine

<img src="https://github.com/user-attachments/assets/db0783ea-1312-4fed-a430-c1be9a87d2e1" width="72" height="72" alt="Voltaic Shock Mine talent icon">

- **Deployment and waiting**: After landing and deployment, the mine arms in about 1s and detects enemies within 3m. With no enemy encountered, it can wait about 150s. The first detection of a living enemy starts its 15s active period.

- **Electrocution**: Search again every 0.2s, skipping already electrocuted enemies. Each application lasts 3s. An applied effect continues until expiry after the target leaves the radius; a target that remains within range can be affected again once its Electrocution ends.

- **Damage example**: Damage ticks occur at random intervals of 0.3–0.8s. Isolating armour with no other modifiers, the Unarmoured baseline is `8 × 0.5 = 4 damage`; Flak and Carapace Armour give `8 × 1 = 8 damage`. The tick count varies, so a fixed number of ticks cannot establish total damage.

- **Capacity and replenishment**: Carry up to two mines, with no natural cooldown replenishment after use. With Lone Wolf, capacity is three and one missing mine replenishes every 90s.

[Details](adamant_shock_mine.md) · [Back to index](#talent-index)

## Aura

<a id="adamant_companion_coherency"></a>

### Part of the Squad

<img src="https://github.com/user-attachments/assets/ab5c4535-3182-4aa9-a388-faffff1d0faa" width="72" height="72" alt="Part of the Squad talent icon">

- **Cyber-Mastiff Coherency**: Your Cyber-Mastiff counts as a member of unit Coherency.

- **Toughness protection**: You and Allies in Coherency gain an additional 7.5% Toughness Damage Reduction. Isolating this effect, 100 incoming Toughness damage becomes `100 × (1 − 0.075) = 92.5 damage`. With an existing 10% reduction in the same stage, the result is `100 × (1 − 10% − 7.5%) = 82.5 damage`.

[Details](adamant_companion_coherency.md) · [Back to index](#talent-index)

<a id="adamant_reload_speed_aura"></a>

### Ruthless Efficiency

<img src="https://github.com/user-attachments/assets/2f99cb20-a83e-4a7c-98ee-f43949811f84" width="72" height="72" alt="Ruthless Efficiency talent icon">

- **Reload Speed**: You and Allies in Coherency gain an additional 12.5% Reload Speed. For a reload that normally takes 2s, isolating this effect gives `2 ÷ 1.125 ≈ 1.78s`.

- **Coherency condition**: Selecting this aura means your Cyber-Mastiff no longer counts towards unit Coherency. Allies still need to satisfy the usual Coherency conditions to receive the reload bonus.

[Details](adamant_reload_speed_aura.md) · [Back to index](#talent-index)

<a id="adamant_damage_vs_staggered_aura"></a>

### Breaking Dissent

<img src="https://github.com/user-attachments/assets/57af1e74-7cc5-45bb-a332-11d2e5fde909" width="72" height="72" alt="Breaking Dissent talent icon">

- **Condition**: The target must be Staggered. You and Allies in Coherency deal an additional 10% damage to that target.

- **Damage example**: Isolating this aura, a hit that normally deals 100 damage to a Staggered enemy becomes `100 × (1 + 0.10) = 110 damage`. Against an enemy that is not Staggered, it remains 100. With an existing 25% bonus in the same stage, a qualifying hit becomes `100 × (1 + 25% + 10%) = 135 damage`.

- **Coherency condition**: Selecting this aura means your Cyber-Mastiff no longer counts towards unit Coherency. Allies still need to satisfy the usual Coherency conditions to receive the bonus.

[Details](adamant_damage_vs_staggered_aura.md) · [Back to index](#talent-index)

## Ability

<a id="adamant_charge"></a>

### Break the Line

<img src="https://github.com/user-attachments/assets/a0aad2f2-d03d-486c-b583-1307a9780ac2" width="72" height="72" alt="Break the Line talent icon">

- **Activation and cooldown**: Each activation consumes one ability charge; the base cooldown is 20s.

- **Bash and protection**: The charge strikes enemies near its path, then ends with a stagger effect on enemies in front. During the charge you count as Blocking and can dodge Trapper nets and Pox Hound pounces.

- **Damage and Impact**: After the charge ends, gain 25% Damage and 50% Impact for 6s. Isolating these bonuses, 100 damage becomes 125 and 100 units of Impact become 150. With an existing same-stage 25% damage bonus, `100 × (1 + 25% + 25%) = 150 damage`. Triggering the buff again restarts its duration.

[Details](adamant_charge.md) · [Back to index](#talent-index)

<a id="adamant_area_buff_drone_improved"></a>

### Nuncio-Aquila

<img src="https://github.com/user-attachments/assets/18c1f301-d18b-4469-9fbf-bb5ede1b3353" width="72" height="72" alt="Nuncio-Aquila talent icon">

- **Deployment and cooldown**: Aim to deploy in the target direction. A quick tap deploys it at your position and makes it follow you. The drone lasts 20s, has a 7.5m radius and a 60s cooldown.

- **Ally support**: The improved version replenishes 7.5% of maximum Toughness per second, grants 30% more Suppression Dealt and Impact, and reduces Recoil by 25%. It also grants immunity to Stun, Slowdown and Suppression. Staying within range for 2s theoretically restores `7.5% × 2 = 15% of maximum Toughness`; actual restoration is capped by missing Toughness.

- **Enemy vulnerability**: Enemies within range take 15% more damage. Isolating this effect with other conditions unchanged, 100 damage becomes `100 × 1.15 = 115 damage`.

[Details](adamant_area_buff_drone_improved.md) · [Back to index](#talent-index)

<a id="adamant_stance"></a>

### Castigator's Stance

<img src="https://github.com/user-attachments/assets/4eb18874-83b0-4e2f-bf2b-c91001a15371" width="72" height="72" alt="Castigator's Stance talent icon">

- **Activation and replenishment**: Replenish all Toughness on activation. The stance lasts 10s and has a 50s base cooldown.

- **Stance effects**: Gain 15% Movement Speed and 20% Strength (PowerLevel). Damage taken is multiplied by 0.3, a 70% reduction. Weapon-action movement penalties are reduced to zero, but you cannot Sprint.

- **Replenishment and damage example**: Starting at 40/100 Toughness, activation restores `100 − 40 = 60`, bringing Toughness to 100/100. Isolating this ability's damage-taken multiplier, an incoming hit of 100 becomes `100 × 0.3 = 30 damage`. Damage reduction continues for another 2s after the stance ends.

- **Power and movement example**: Isolating this effect, PowerLevel 500 becomes `500 × 1.2 = 600`, and movement speed 5m/s becomes `5 × 1.15 = 5.75m/s`. PowerLevel then enters the separate Damage, Impact and Cleave formulas; these outputs do not all simply increase by 20%.

[Details](adamant_stance.md) · [Back to index](#talent-index)

<a id="adamant_stance_ranged_kills_transfer_ammo"></a>

### Blessed Armament

<img src="https://github.com/user-attachments/assets/8c312d8e-8b49-45cd-828e-62cffc6d0a25" width="72" height="72" alt="Blessed Armament talent icon">

- **Trigger**: Ranged kills replenish ammunition only during Castigator's Stance. Ammunition transfers from Reserve into the Clip.

- **Transfer calculation**: Each trigger calculates 10% of Clip capacity and rounds upward. A 30-round Clip gives `30 × 10% = 3 rounds`; if only one round is missing, transfer only one. If Reserve is insufficient, transfer only the ammunition remaining there; this effect does not create ammunition.

- **Active period**: The effect operates with Castigator's Stance, whose base duration is 10s.

[Details](adamant_stance_ranged_kills_transfer_ammo.md) · [Back to index](#talent-index)

<a id="adamant_stance_elite_kills_stack_damage"></a>

### Writ of Execution

<img src="https://github.com/user-attachments/assets/f7454987-ea7e-474e-bb22-3c3ead9adb1b" width="72" height="72" alt="Writ of Execution talent icon">

- **Trigger**: During Castigator's Stance, each Elite or Specialist kill grants one stack of the damage bonus.

- **Stacks and duration**: Each stack gives +7.5% Damage, up to six stacks. Adding a stack resets the 12s duration. After the stance ends, existing stacks still expire according to their own remaining duration.

- **Example**: Six stacks give `6 × 7.5% = 45%`. With base damage 100 and an existing +25% bonus in the same damage stage, `100 × (1 + 45% + 25%) = 170 damage`.

[Details](adamant_stance_elite_kills_stack_damage.md) · [Back to index](#talent-index)

<a id="adamant_stance_dog_bloodlust"></a>

### Bloodlust

<img src="https://github.com/user-attachments/assets/27a74ed8-eb51-4774-ae8e-2089aa7b1686" width="72" height="72" alt="Bloodlust talent icon">

- **Cyber-Mastiff damage**: Activating Castigator's Stance gives your Cyber-Mastiff +75% Damage for 10s.

- **Damage example**: Isolating this bonus, your Cyber-Mastiff's base direct damage of 100 becomes `100 × (1 + 75%) = 175 damage`. With another same-stage 25% bonus, the result is `100 × (1 + 75% + 25%) = 200 damage`. This companion-damage bonus does not apply to Bleed damage.

[Details](adamant_stance_dog_bloodlust.md) · [Back to index](#talent-index)

<a id="adamant_drone_buff_talent"></a>

### Inspiring Recitation

<img src="https://github.com/user-attachments/assets/53dd2864-62b6-4e6c-9d62-e79831b33c78" width="72" height="72" alt="Inspiring Recitation talent icon">

- **Ally bonuses**: Allies affected within the Nuncio-Aquila's area take 30% less Toughness damage, gain +30% Revive Speed and gain +10% Attack Speed.

- **Damage example**: Isolating this upgrade, an attack that would deal 100 Toughness damage instead deals `100 × 0.7 = 70 Toughness damage`. Other Toughness damage reductions still participate in the actual calculation.

- **Speed examples**: Isolating this effect, a revive taking 5s instead takes `5 ÷ 1.3 ≈ 3.85s`, and an attack action with adjustable speed taking 1s instead takes `1 ÷ 1.1 ≈ 0.91s`. Leaving the Nuncio-Aquila's area removes these bonuses.

[Details](adamant_drone_buff_talent.md) · [Back to index](#talent-index)

<a id="adamant_drone_debuff_talent"></a>

### Fear of Justice

<img src="https://github.com/user-attachments/assets/483804fa-b052-4baa-b3d7-5e7dbfbe44f4" width="72" height="72" alt="Fear of Justice talent icon">

- **Melee damage**: Enemies affected by the Nuncio-Aquila deal 25% less melee damage. Isolating this effect, base melee damage of 100 becomes `100 × (1 − 25%) = 75 damage`.

- **Melee attack-speed example**: Enemy melee attack speed is reduced by 25%. When the action's minimum-duration limit does not apply, an action taking 1s instead takes `1 ÷ 0.75 ≈ 1.33s`, an increase in duration of about 33.3%.

- **Area condition**: This debuff is bound to the Nuncio-Aquila's area and is removed when the enemy leaves its range.

#### English description discrepancy

- The reconstructed English states that the time between affected enemies' melee attacks increases by 50%. The accepted fixed-source evidence supplies a 0.75 attack-speed multiplier, giving about 33.3% longer adjustable actions when no minimum-duration limit applies. A 50% increase in a 1s interval would give 1.5s; it is not the same result. The display mapping explicitly returns 50, independently of the stat value. This is a discrepancy in static evidence; game behavior remains unobserved.

[Details](adamant_drone_debuff_talent.md) · [Back to index](#talent-index)

<a id="adamant_charge_toughness"></a>

### Commendation from Condemnation

<img src="https://github.com/user-attachments/assets/a0f08b1e-586b-4a65-b271-29d79874f573" width="72" height="72" alt="Commendation from Condemnation talent icon">

- **Trigger condition**: Break the Line hits on Elites, Specialists or Monstrosities count distinct enemies. The same target counts only once in a single charge.

- **Recovery and caps**: Recovery is applied together when the charge ends. Each distinct eligible target replenishes 20% of maximum Toughness and 15% of maximum Stamina, capped at 100% of maximum Toughness and 75% of maximum Stamina. Neither recovery exceeds the resource's current deficit.

- **Example**: Hitting three distinct eligible targets replenishes `3 × 20% = 60% Toughness` and `3 × 15% = 45% Stamina`. Hitting the same enemy again does not increase the recovery.

[Details](adamant_charge_toughness.md) · [Back to index](#talent-index)

<a id="adamant_charge_cooldown_reduction"></a>

### Targeted Brutality

<img src="https://github.com/user-attachments/assets/d2b1945d-2300-4993-a649-00c1e3858e0d" width="72" height="72" alt="Targeted Brutality talent icon">

- **Cooldown restoration**: Each effective charge hit on an ordinary enemy restores 0.5s of Combat Ability Cooldown. Each hit on an Elite, Specialist or Monstrosity restores 1s.

- **Settlement and cap**: Restoration is applied when the charge ends, up to 5s per charge and limited by the remaining cooldown. This upgrade counts hit events and does not exclude repeated targets as the Toughness-recovery upgrade does.

- **Example**: Six ordinary hits contribute `6 × 0.5 = 3s`; three higher-category target hits contribute `3 × 1 = 3s`. Their 6s total is limited to 5s at settlement. The base cooldown of 20s can therefore receive at most a 5s restoration from this upgrade.

[Details](adamant_charge_cooldown_reduction.md) · [Back to index](#talent-index)

<a id="adamant_charge_longer_distance"></a>

### Engage

<img src="https://github.com/user-attachments/assets/7b78f1c1-2250-44c0-9642-315fd105575a" width="72" height="72" alt="Engage talent icon">

- **Charge distance**: This upgrade adds 3.75m to Break the Line's distance, raising its base 3.75m to 7.5m.

- **Example**: `3.75m base distance + 3.75m increase = 7.5m`. Actual displacement may be shorter because of collisions along the path or cancellation before completion.

[Details](adamant_charge_longer_distance.md) · [Back to index](#talent-index)

<a id="adamant_dog_damage_after_ability"></a>

### Kill Order

<img src="https://github.com/user-attachments/assets/6283df18-7a2a-4a7b-adac-4a13c5cd6315" width="72" height="72" alt="Kill Order talent icon">

- **Activation effect**: Using your Combat Ability grants your Cyber-Mastiff +50% Damage for 12s.

- **Example**: For base non-Bleed Cyber-Mastiff damage of 100, isolating this upgrade gives `100 × (1 + 50%) = 150 damage`. If Bloodlust's +75% is active in the same additive stage, the result is `100 × (1 + 50% + 75%) = 225 damage`, before target defenses.

- **Refresh and limits**: Using your Combat Ability again resets the 12s duration without stacking this upgrade's bonus with itself. Bleed damage does not receive this companion-damage bonus.

[Details](adamant_dog_damage_after_ability.md) · [Back to index](#talent-index)

## Keystones

<a id="adamant_execution_order"></a>

### Execution Order

<img src="https://github.com/user-attachments/assets/66f3dd5d-68b9-415a-8330-b6daf3fb427c" width="72" height="72" alt="Execution Order talent icon">

- **Automatic marking**: Selects Elites, Specialists or Bosses within 40m in front of you and in line of sight for Mercy Sanction. After marking an ordinary Elite or Specialist, selection waits 3s; Monstrosities and Bosses bypass that waiting period. Multiple marks can remain at once.

- **Marked-kill effect**: You or your own Cyber-Mastiff killing a marked target replenishes 15% of maximum Toughness and grants you +10% Damage and +10% Attack Speed, plus +150% direct Cyber-Mastiff Damage, for 8s. Retriggering refreshes the duration without increasing the magnitude. A kill by another teammate alone does not trigger this effect.

- **Cyber-Mastiff pounce**: The Cyber-Mastiff's initial pounce hit on a marked target also grants the 8s +150% companion-damage bonus. Later pinning attacks against Ogryn enemies and Monstrosities can also refresh it. This companion-damage bonus excludes Bleed.

- **Examples**: With maximum Toughness 100, replenish 15 points, capped at full Toughness. Isolating the damage bonuses, player base damage 100 becomes 110 and companion base damage 100 becomes 250. With an existing same-stage 25% player-damage bonus, `100 × (1 + 25% + 10%) = 135 damage`. An attack action with adjustable speed taking 1s instead takes `1 ÷ 1.1 ≈ 0.91s`.

[Details](adamant_execution_order.md) · [Back to index](#talent-index)

<a id="adamant_terminus_warrant"></a>

### Terminus Warrant

<img src="https://github.com/user-attachments/assets/47d0c2b2-0d8e-4906-a528-48f9488353e9" width="72" height="72" alt="Terminus Warrant talent icon">

- **Accumulation and caps**: Each ranged enemy hit grants one Melee Justice stack; a weakspot hit on that enemy grants three instead. Each shot counts a given target only once, up to 20 stacks. Each melee hit grants one Ranged Justice stack, up to 20.

- **Switching and consumption**: Wielding the melee weapon consumes Melee Justice and grants +10% Melee Strength (PowerLevel) and 20% Toughness Damage Reduction for 12s. Wielding the ranged weapon consumes Ranged Justice and grants +10% Ranged Strength (PowerLevel), +50% Suppression and +50% Ranged Cleave for 12s. These core bonuses have fixed values; their magnitude does not scale with the number of stacks spent.

- **Toughness example**: The melee effect sets the Toughness-damage multiplier to 0.8, changing base Toughness damage of 100 to 80 points. It applies only while the 12s effect remains active.

- **Duration and PowerLevel examples**: Wielding the other weapon category ends the current buff early. Isolating this bonus, `PowerLevel 500 × 1.1 = 550`. With an existing same-stage 20% PowerLevel bonus, the value rises from 600 to 650. Both one stack and 20 stacks activate the same fixed core bonuses; the stack count separately affects selected upgrades.

[Details](adamant_terminus_warrant.md) · [Back to index](#talent-index)

<a id="adamant_forceful"></a>

### Forceful

<img src="https://github.com/user-attachments/assets/b838686c-aaa0-49a2-bbea-fc9e074bb6cf" width="72" height="72" alt="Forceful talent icon">

- **Gaining stacks and refreshing**: A hit that Staggers its first target, or a successful block, grants one stack, up to 10. Cyber-Mastiff hits do not count. The stacks share a 5s timer, reset when stacks are added or reduced by taking damage.

- **Removal on damage**: A positive damage or Toughness-absorbed damage event removes at most one stack every 0.25s. Blocked events do not remove stacks.

- **Full-stack example**: Each stack grants +5% Impact, totaling +50% at 10 stacks. Each stack has a damage-taken multiplier of 0.975; the shared stacking rule gives `0.975^10 ≈ 0.776`, about 22.4% less than baseline damage. This is multiplicative, rather than a directly added 25% reduction. Base damage of 100 becomes `100 × 0.975¹⁰ ≈ 77.63 damage` at full stacks.

[Details](adamant_forceful.md) · [Back to index](#talent-index)

<a id="adamant_disable_companion"></a>

### Lone Wolf

<img src="https://github.com/user-attachments/assets/a2aadd19-f969-47d7-96f3-3021eb1fb5c8" width="72" height="72" alt="Lone Wolf talent icon">

- **Replacement effect**: Selecting Lone Wolf removes your Cyber-Mastiff. You gain +20% Damage, +10% Attack Speed, +15% Toughness Damage Reduction and +1 maximum Blitz charge.

- **Damage and speed examples**: Isolating this talent, base damage 100 becomes `100 × 1.2 = 120 damage`; with an existing same-stage 25% damage bonus, it becomes 145. An attack action with adjustable speed taking 1s instead takes `1 ÷ 1.1 ≈ 0.91s`. Toughness damage 100 becomes 85; with an existing same-stage 10% Toughness damage reduction, it becomes 75.

- **Replenishment example**: When at least one ordinary grenade charge is missing, the timer starts and restores one after 45s. A missing Voltaic Shock Mine charge instead waits 90s. After restoring a charge, the next charge waits through a new timer; no timer runs at full charges.

[Details](adamant_disable_companion.md) · [Back to index](#talent-index)

<a id="adamant_forceful_toughness_regen_per_stack"></a>

### Will of the Lex

<img src="https://github.com/user-attachments/assets/1016875d-cc4c-44f2-8a06-c93155d482d4" width="72" height="72" alt="Will of the Lex talent icon">

- **Condition and recovery**: Each Forceful stack replenishes 0.5% of maximum Toughness per second. This effect occurs only while you have Forceful stacks.

- **Full-stack example**: At 10 stacks, replenish `10 × 0.5% = 5% of maximum Toughness per second`. With maximum Toughness 100, that is theoretically 5 points per second, but actual replenishment cannot exceed the current Toughness deficit.

[Details](adamant_forceful_toughness_regen_per_stack.md) · [Back to index](#talent-index)

<a id="adamant_forceful_stun_immune_and_block_all"></a>

### Adamant Will

<img src="https://github.com/user-attachments/assets/92922b1c-4991-480e-86af-e050b9faa496" width="72" height="72" alt="Adamant Will talent icon">

- **Trigger and duration**: At 10 Forceful stacks, gain Stun Immunity and Slowdown Immunity. These effects remain for 3s after leaving maximum stacks.

- **Perfect blocks**: While the effect is active, perfect blocks can block attacks that are normally unblockable. Ordinary blocks do not gain the same capability. Attacks must still meet the shared blocking checks; this effect does not imply continuous invulnerability.

[Details](adamant_forceful_stun_immune_and_block_all.md) · [Back to index](#talent-index)

<a id="adamant_forceful_offensive"></a>

### Targets Acquired

<img src="https://github.com/user-attachments/assets/3ecc49e6-a4c7-4d77-926d-623e4f8f34f6" width="72" height="72" alt="Targets Acquired talent icon">

- **Condition and duration**: At 10 Forceful stacks, gain +10% Attack Speed and +50% Cleave. These bonuses remain for 3s after leaving maximum stacks.

- **Speed and Cleave examples**: With this effect alone, an attack action that normally takes 1s and supports speed scaling takes 1 ÷ 1.1 ≈ 0.91s. A damaging Cleave hit-mass budget of 10 becomes 10 × 1.5 = 15. This does not guarantee hitting 50% more enemies and does not also increase the stagger Cleave budget.

[Details](adamant_forceful_offensive.md) · [Back to index](#talent-index)

<a id="adamant_forceful_ability_damage"></a>

### Arbites Vigilant

<img src="https://github.com/user-attachments/assets/bc3b59ed-a142-4807-86f9-f75d65b367b4" width="72" height="72" alt="Arbites Vigilant talent icon">

- **Trigger and consumption**: Using your Combat Ability consumes all current Forceful stacks. Each stack grants +2.5% Strength (PowerLevel) for 12s.

- **Strength example**: Six stacks grant +15%, and 10 stacks grant +25%. With this effect alone, 500 PowerLevel at 10 stacks becomes 500 × 1.25 = 625. Damage, Impact and Cleave then use their respective formulas; their final results cannot all be multiplied directly by 1.25.

[Details](adamant_forceful_ability_damage.md) · [Back to index](#talent-index)

<a id="adamant_forceful_stagger_on_low_high"></a>

### Judicial Force

<img src="https://github.com/user-attachments/assets/62f41d0b-cd55-459d-b4d7-c8c155da410f" width="72" height="72" alt="Judicial Force talent icon">

- **Triggers**: Stagger enemies within 2.5m when Forceful rises from below maximum to 10 stacks or falls from at least one stack to zero. Remaining continuously at zero or 10 stacks does not repeatedly trigger the effect.

- **Cooldown example**: The maximum-stack and zero-stack triggers each have an independent 5s cooldown. If all stacks are lost 1s after the maximum-stack stagger, the zero-stack stagger can still trigger. The same trigger must wait a full 5s before triggering again.

[Details](adamant_forceful_stagger_on_low_high.md) · [Back to index](#talent-index)

<a id="adamant_terminus_warrant_cdr"></a>

### Obstinate

<img src="https://github.com/user-attachments/assets/7b782337-07db-4ff4-9a85-ba21d1fcfe6b" width="72" height="72" alt="Obstinate talent icon">

- **Trigger threshold**: Spending all 20 Terminus Warrant stacks triggers Obstinate. Spending fewer than 20 does not create the cooldown-restoration effect.

- **Cooldown example**: Restore an additional 0.33s of Combat Ability cooldown each second, nominally 3.96s over 12s. Starting with 20s remaining, after 12s and 12 restoration ticks the remainder is 20 − 12 − 12 × 0.33 = 4.04s. Restoration is limited to the unregenerated cooldown; expiry update order may result in one fewer tick. Retriggering refreshes the duration without increasing the restoration rate.

[Details](adamant_terminus_warrant_cdr.md) · [Back to index](#talent-index)

<a id="adamant_terminus_warrant_support"></a>

### Terminal Decree

<img src="https://github.com/user-attachments/assets/053a0db6-481b-4944-9077-d1d9a05759dd" width="72" height="72" alt="Terminal Decree talent icon">

- **Trigger and recipients**: Spending Melee Justice or Ranged Justice restores Toughness to you and Allies in Coherency. Spending fewer than 20 stacks scales the recovery by the actual count spent.

- **Recovery example**: Each stack restores 1% of maximum Toughness; spending 20 stacks restores 20%. At 100 maximum Toughness this is 20 points, or 7 points when spending seven stacks. Each recipient remains limited by their own missing Toughness.

[Details](adamant_terminus_warrant_support.md) · [Back to index](#talent-index)

<a id="adamant_execution_order_crit"></a>

### Efficient Killer

<img src="https://github.com/user-attachments/assets/5c90d0a5-8150-4c04-84cf-9b0ae1d6e28f" width="72" height="72" alt="Efficient Killer talent icon">

- **Trigger and duration**: Killing a Marked enemy triggers the effect for 8s. Retriggering refreshes the duration.

- **Critical Hit Chance**: Adds 10 percentage points; for example, 5% becomes 15%.

- **Critical Hit Damage examples**: The +25% bonus affects the additional critical damage. If a normal hit deals 100 and a critical hit deals 150, the result is 100 + (150 − 100) × 1.25 = 162.5, about an 8.33% increase to the whole critical hit. If another weapon instead deals 200 on a critical hit, the result is 225, a 12.5% increase. Actual gains vary with the weapon and armor.

[Details](adamant_execution_order_crit.md) · [Back to index](#talent-index)

<a id="adamant_execution_order_cdr"></a>

### Malocator

<img src="https://github.com/user-attachments/assets/83df9392-fcfa-43e9-b9e0-ceef6f50ade7" width="72" height="72" alt="Malocator talent icon">

- **Trigger and duration**: You or your Cyber-Mastiff killing a Marked target grants 8s of additional cooldown regeneration.

- **Cooldown example**: Restore an additional 0.5s of Combat Ability cooldown each second, nominally 4s over 8s. Starting with 20s remaining, after 8s and eight restoration ticks the remainder is 20 − 8 − 8 × 0.5 = 8s. Restoration is limited to the unregenerated cooldown; expiry update order may result in one fewer tick. Retriggering refreshes the duration without increasing the restoration rate.

[Details](adamant_execution_order_cdr.md) · [Back to index](#talent-index)

<a id="adamant_execution_order_rending"></a>

### No Lenience

<img src="https://github.com/user-attachments/assets/ab53bec8-fd00-470c-8c5d-46cc58904f13" width="72" height="72" alt="No Lenience talent icon">

- **Trigger and duration**: Killing a Marked enemy grants +10% Rending for 8s. Retriggering refreshes the duration.

- **Damage examples**: At base damage 100 and an original armor-damage coefficient of 0.5, damage rises from 50 to 100 × (0.5 + 0.1) = 60, a 20% increase. If the coefficient is already 1 and the armor supports excess conversion, the result is 100 × (1 + 0.1 × 0.25) = 102.5.

[Details](adamant_execution_order_rending.md) · [Back to index](#talent-index)

<a id="adamant_execution_order_permastack"></a>

### Keeping Protocol

<img src="https://github.com/user-attachments/assets/eeb40551-fbea-4de0-8e46-0a07e4bfcec6" width="72" height="72" alt="Keeping Protocol talent icon">

- **Accumulation and removal**: Each Marked Kill adds one stack, up to 30. The effect lasts until the end of the mission.

- **Maximum-stack example**: At 30 stacks, gain +30% Damage against Monstrosities. Damage taken from them has multiplier 0.99^30 ≈ 0.740, about a 26.0% reduction with this effect alone. For example, base damage of 100 against a Monstrosity becomes 130; incoming damage of 100 from one becomes about 73.97.

[Details](adamant_execution_order_permastack.md) · [Back to index](#talent-index)

<a id="adamant_pinning_dog_bonus_moving_towards"></a>

### Not Far Behind

<img src="https://github.com/user-attachments/assets/0633a2b7-e8e9-4215-85a9-f54ae4d95809" width="72" height="72" alt="Not Far Behind talent icon">

- **Trigger and duration**: Each Cyber-Mastiff Pounce grants the player +10% Movement Speed and +10% Damage for 5s.

- **Examples and refresh**: With this effect alone, base damage 100 becomes 110; with another +25% bonus in the same stage, it becomes 135. Base movement of 5m/s becomes 5 × 1.1 = 5.5m/s. Another Pounce resets the 5s countdown without increasing the bonus magnitude.

[Details](adamant_pinning_dog_bonus_moving_towards.md) · [Back to index](#talent-index)

<a id="adamant_companion_focus_ranged"></a>

### Go Get 'Em!

<img src="https://github.com/user-attachments/assets/6208ebde-9eb1-4a4d-923c-823a0e511bf9" width="72" height="72" alt="Go Get 'Em! talent icon">

- **Target priority**: The Cyber-Mastiff prioritizes Ranged Enemies. Distance, threat and its current target still influence selection; choosing a Ranged Enemy is not guaranteed every time.

- **Damage examples**: Cyber-Mastiff Damage against Ranged Enemies increases by 50%. With this bonus alone, base damage 100 becomes 150. With another +25% bonus in the same stage, the result is 100 × (1 + 25% + 50%) = 175.

[Details](adamant_companion_focus_ranged.md) · [Back to index](#talent-index)

<a id="adamant_companion_focus_elite"></a>

### Unleashed Brutality

<img src="https://github.com/user-attachments/assets/d61cee49-95ce-43fb-ae8a-b05ba598366b" width="72" height="72" alt="Unleashed Brutality talent icon">

- **Target priority**: The Cyber-Mastiff prioritizes Elite and Specialist Enemies. Distance, threat and its current target still influence selection; choosing one of these enemies is not guaranteed every time.

- **Damage examples**: Cyber-Mastiff Damage against Elites and Specialists increases by 25%. With this bonus alone, base damage 100 becomes 125. With another +25% bonus in the same stage, the result is 100 × (1 + 25% + 25%) = 150.

[Details](adamant_companion_focus_elite.md) · [Back to index](#talent-index)

<a id="adamant_terminus_warrant_improved_combined"></a>

### Writ of Judgement

<img src="https://github.com/user-attachments/assets/34f0ccb1-7c44-4aaf-a697-e0ef2b6f2c0e" width="72" height="72" alt="Writ of Judgement talent icon">

- **Trigger threshold**: You must hold at least a full 20 stacks when spending them to trigger Writ of Judgement. Switching with fewer stacks does not trigger it.

- **Bonuses and examples**: For 12s, gain +10% Melee Attack Speed, +10% Ranged Attack Speed and +10 percentage points of Critical Hit Chance. For example, 5% chance becomes 15%, and an action that normally takes 1s and supports speed scaling takes 1 ÷ 1.1 ≈ 0.91s. Retriggering refreshes the duration without increasing magnitude.

[Details](adamant_terminus_warrant_improved_combined.md) · [Back to index](#talent-index)

## Passive talents

<a id="adamant_toughness_regen_near_companion"></a>

### Man and Cyber-Mastiff

<img src="https://github.com/user-attachments/assets/a6716d2d-1100-4bbe-be59-683b5b9176b4" width="72" height="72" alt="Man and Cyber-Mastiff talent icon">

- **Behavior**: While within 8m of your Cyber-Mastiff, recover 5% of maximum Toughness per second. Recovery stops while disabled and unable to act normally.

- **Recovery example**: At maximum Toughness 100, no other recovery bonus and sufficient deficit, recover 100 × 5% = 5 points per second, or 15 points over 3s. If only 2 points are missing, only 2 can be restored.

[Details](adamant_toughness_regen_near_companion.md) · [Back to index](#talent-index)

<a id="adamant_damage_after_reloading"></a>

### Withering Fire

<img src="https://github.com/user-attachments/assets/82a4d2c5-a0aa-4c05-a8ea-e03bc0e4932b" width="72" height="72" alt="Withering Fire talent icon">

- **Trigger and refresh**: Completing a reload grants 15% Ranged Damage for 5s. Reloading again resets the duration; the damage bonus does not stack.

- **Damage example**: Isolating this stage, base damage 100 becomes 100 × (1 + 15%) = 115. With an existing same-stage 25% bonus, 125 becomes 100 × (1 + 25% + 15%) = 140.

[Details](adamant_damage_after_reloading.md) · [Back to index](#talent-index)

<a id="adamant_multiple_hits_attack_speed"></a>

### Hammer of Judgement

<img src="https://github.com/user-attachments/assets/0f0f19ee-07a9-47a6-9acf-599b809569a4" width="72" height="72" alt="Hammer of Judgement talent icon">

- **Trigger and refresh**: Hitting the third enemy in the same melee attack grants 10% Melee Attack Speed for 3s. Meeting the condition again resets the duration; the multiplier does not stack.

- **Attack-speed example**: For an action segment affected by Attack Speed alone, an original duration of 1s becomes 1 ÷ 1.1 ≈ 0.909s.

[Details](adamant_multiple_hits_attack_speed.md) · [Back to index](#talent-index)

<a id="adamant_elite_special_kills_replenish_toughness"></a>

### Target Neutralised

<img src="https://github.com/user-attachments/assets/fc3f3a29-7b71-45d4-aec6-c72036ba9831" width="72" height="72" alt="Target Neutralised talent icon">

- **Recovery**: Killing an Elite or Specialist instantly restores 10% of maximum Toughness, then restores another 2.5% per second for 4s. Consecutive kills each provide an independently timed recovery effect.

- **Recovery example**: At maximum Toughness 100, with sufficient deficit and no other recovery bonus, one kill restores 100 × 10% + 100 × 2.5% × 4 = 20 points in total. While two kills' continuous effects overlap, recovery totals 5 points per second; actual restoration cannot exceed the deficit.

[Details](adamant_elite_special_kills_replenish_toughness.md) · [Back to index](#talent-index)

<a id="adamant_close_kills_restore_toughness"></a>

### Up Close

<img src="https://github.com/user-attachments/assets/3098a511-fa0f-444e-a9e2-8e6591688115" width="72" height="72" alt="Up Close talent icon">

- **Trigger**: Killing an enemy within 12.5m of yourself restores 5% of maximum Toughness. Both melee and ranged kills qualify.

- **Recovery example**: At maximum Toughness 100 with no other recovery bonus, each kill restores 100 × 5% = 5 points. If current Toughness is 98, only 2 points can be restored.

[Details](adamant_close_kills_restore_toughness.md) · [Back to index](#talent-index)

<a id="adamant_staggers_replenish_toughness"></a>

### Force of Will

<img src="https://github.com/user-attachments/assets/898ad4c6-3f99-404d-8ff9-b15a9820f8e9" width="72" height="72" alt="Force of Will talent icon">

- **Trigger**: A melee attack that Staggers its first hit target restores 7.5% of maximum Toughness. Hitting more enemies in the same attack does not increase the number of procs. With Concussive, qualifying melee Weakspot Hits can also trigger the recovery.

- **Recovery example**: At maximum Toughness 100 with no other recovery bonus, each proc restores 100 × 7.5% = 7.5 points. An attack hitting 3 enemies still restores at most 7.5 points, capped by the deficit.

[Details](adamant_staggers_replenish_toughness.md) · [Back to index](#talent-index)

<a id="adamant_dog_attacks_electrocute"></a>

### Voltaic Mandibles Augment

<img src="https://github.com/user-attachments/assets/4ce13efe-7a81-48cd-9bb6-47dfb55f63b8" width="72" height="72" alt="Voltaic Mandibles Augment talent icon">

- **Trigger and duration**: Your Cyber-Mastiff's pounce and pinning attacks apply Electrocution on hit for 5s. Continued attacks can refresh the duration; they do not stack multiple copies of Electrocution.

- **Damage cadence**: After each damage tick, the next interval is random between 0.3 and 0.8s. The first tick also has a short update delay. A 5s effect therefore cannot be treated as a fixed tick count or fixed damage per second.

- **Damage example**: With no other bonus and an ordinary Unarmoured hit zone, baseline damage per tick is 57.5 × 0.5 = 28.75. Using the baseline Flak armour modifier of 1 gives 57.5. Actual damage still depends on enemy hit zones, resistances and other damage bonuses.

[Details](adamant_dog_attacks_electrocute.md) · [Back to index](#talent-index)

<a id="adamant_stamina_spent_replenish_toughness"></a>

### Walk It Off

<img src="https://github.com/user-attachments/assets/4c4b06a3-049f-4272-b1d2-a8a472f541b0" width="72" height="72" alt="Walk It Off talent icon">

- **Trigger and refresh**: Each accumulated 1 point of Stamina spent starts Toughness recovery lasting 3s. Spending another full point during the effect resets the 3s duration; the recovery rate does not stack.

- **Recovery example**: At maximum Toughness 100, with sufficient deficit and no other recovery bonus, recovery is about 100 × 10% ÷ 3 = 3.33 points per second. Triggering again after 2s and continuing until expiry gives about 3.33 × 5 ≈ 16.67 points in total using the unrounded rate, rather than instantly restoring 20 points.

[Details](adamant_stamina_spent_replenish_toughness.md) · [Back to index](#talent-index)

<a id="adamant_limit_dmg_taken_from_hits"></a>

### True Grit

<img src="https://github.com/user-attachments/assets/d4c3f66c-8fa8-419f-8a46-f94c842a9b4e" width="72" height="72" alt="True Grit talent icon">

- **Protection**: A normal attack can deal at most 50 Health damage to you in one hit. This does not cap Toughness damage or prevent an instant kill.

- **Damage example**: After other Health damage reductions have been applied, an incoming 120 points becomes min(120, 50) = 50 points; an incoming 30 remains 30. This is a fixed cap, not 50% damage reduction.

[Details](adamant_limit_dmg_taken_from_hits.md) · [Back to index](#talent-index)

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>

### Toughness Damage Reduction

<img src="https://github.com/user-attachments/assets/af78e688-7708-4d00-88f0-913478235d41" width="72" height="72" alt="Toughness Damage Reduction talent icon">

- **Damage-reduction example**: Isolating the Toughness damage-reduction stage, an original 100 points of Toughness damage becomes 100 × (1 − 10%) = 90. With an existing same-stage 20% reduction, it becomes 100 × (1 − 20% − 10%) = 70.

- **Scope**: This changes Toughness damage only. Other independent damage-reduction multipliers are then multiplied separately.

[Details](base_toughness_damage_reduction_node_buff_medium_1.md) · [Back to index](#talent-index)

<a id="adamant_armor"></a>

### Arbitrator Armour

<img src="https://github.com/user-attachments/assets/d25eaf26-cb8b-4009-80ac-af75d049fb9f" width="72" height="72" alt="Arbitrator Armour talent icon">

- **Effect and example**: Increase maximum Toughness by 25 points. An original 100 points, with no percentage modifier, becomes 100 + 25 = 125.

- **Bonus order**: Add these 25 points to base Toughness before applying percentage bonuses to maximum Toughness. With another 20% maximum-Toughness bonus, the result is (100 + 25) × 1.2 = 150 points.

[Details](adamant_armor.md) · [Back to index](#talent-index)

<a id="adamant_ammo_belt"></a>

### Ammo Belt

<img src="https://github.com/user-attachments/assets/90c9bff4-baf3-4b53-b160-16945870dd88" width="72" height="72" alt="Ammo Belt talent icon">

- **Capacity example**: If the weapon originally carries 400 rounds in Reserve, capacity becomes 400 × (1 + 25%) = 500. For an original 101 rounds, 101 × 1.25 = 126.25 is rounded down to an integer capacity of 126.

- **Scope**: Increase maximum Reserve ammunition; Clip capacity is unchanged.

[Details](adamant_ammo_belt.md) · [Back to index](#talent-index)

<a id="adamant_rebreather"></a>

### Rebreather

<img src="https://github.com/user-attachments/assets/4232eef3-1499-4f4c-b2e3-d1416db2ec8e" width="72" height="72" alt="Rebreather talent icon">

- **Corruption example**: Isolating Corruption Resistance, an original gain of 20 Corruption points becomes 20 × 0.8 = 16.

- **Toxic-gas example**: Isolating Toxic Gas damage reduction, gas that originally deals 100 damage instead deals 100 × 0.25 = 25. These effects apply separately to the Corruption and damage stages.

[Details](adamant_rebreather.md) · [Back to index](#talent-index)

<a id="adamant_hitting_multiple_gives_tdr"></a>

### Suppression Protocols

<img src="https://github.com/user-attachments/assets/02fd58ae-50fc-461f-879d-70d77a2aff44" width="72" height="72" alt="Suppression Protocols talent icon">

- **Trigger and refresh**: Hitting the third enemy in one attack grants 20% Toughness Damage Reduction for 5s. Both melee and ranged attacks qualify; triggering again resets the duration.

- **Damage-reduction example**: Isolating this effect, 100 points of Toughness damage becomes 100 × 0.8 = 80. With another independent 10% Toughness damage reduction, the result is 100 × 0.8 × 0.9 = 72.

[Details](adamant_hitting_multiple_gives_tdr.md) · [Back to index](#talent-index)

<a id="base_ranged_damage_node_buff_medium_1"></a>

### Ranged Damage Boost

<img src="https://github.com/user-attachments/assets/62b0bee6-3606-40bc-9d78-06f072535e59" width="72" height="72" alt="Ranged Damage Boost talent icon">

- **Damage example**: With no other bonus, base ranged damage 100 becomes 100 × (1 + 10%) = 110. With an existing same-stage 25% bonus, 125 becomes 100 × (1 + 25% + 10%) = 135.

[Details](base_ranged_damage_node_buff_medium_1.md) · [Back to index](#talent-index)

<a id="base_melee_damage_node_buff_medium_1"></a>

### Melee Damage Boost

<img src="https://github.com/user-attachments/assets/8c224499-f2ca-420c-bcf6-39034e6a35b2" width="72" height="72" alt="Melee Damage Boost talent icon">

- **Damage example**: With no other bonus, base melee damage 100 becomes 100 × (1 + 10%) = 110. With an existing same-stage 25% bonus, 125 becomes 100 × (1 + 25% + 10%) = 135.

[Details](base_melee_damage_node_buff_medium_1.md) · [Back to index](#talent-index)

<a id="adamant_dog_pounces_bleed_nearby"></a>

### Razor-Jaw Augment

<img src="https://github.com/user-attachments/assets/549d3657-c19a-49a6-b8ad-2c1e77080dfa" width="72" height="72" alt="Razor-Jaw Augment talent icon">

- **Trigger and stacks**: Hits from your Cyber-Mastiff's surrounding pounce push, and its pinning attacks against Ogryns or Monsters, each apply 6 stacks of Bleed. Bleed shares a 16-stack cap; another application adds stacks and resets the maintenance duration.

- **Duration and decay**: Damage ticks every 0.5s. After applications stop, stacks are maintained for 1.5s, then decrease one at a time on subsequent damage ticks.

- **Damage example**: At the Unarmoured baseline with no other modifiers, let the stack fraction be n ÷ 16. Damage per tick is 87.5 × (n ÷ 16)² × [3 − 2 × (n ÷ 16)]. Six stacks give approximately 27.69 points, 12 give 73.83 and 16 give 87.5. Twelve stacks do not deal twice the damage of six.

[Details](adamant_dog_pounces_bleed_nearby.md) · [Back to index](#talent-index)

<a id="adamant_damage_reduction_after_elite_kill"></a>

### Imposing Force

<img src="https://github.com/user-attachments/assets/d856ef6a-9f61-4b4a-b672-e60019dea866" width="72" height="72" alt="Imposing Force talent icon">

- **Trigger and refresh**: After killing an Elite or Specialist, take 25% less damage for 5s. Another qualifying kill resets the duration; the multiplier does not stack.

- **Damage-reduction example**: For an original 100 incoming damage, this effect alone gives 100 × 0.75 = 75. With another independent 20% damage reduction, the result is 100 × 0.75 × 0.8 = 60.

[Details](adamant_damage_reduction_after_elite_kill.md) · [Back to index](#talent-index)

<a id="adamant_staggers_reduce_damage_taken"></a>

### Hold the Line

<img src="https://github.com/user-attachments/assets/fd423ddb-0080-4603-8fd7-90257b583c3d" width="72" height="72" alt="Hold the Line talent icon">

- **Stacks and removal**: Staggering an ordinary enemy grants 1 stack; Staggering an Ogryn or Monster grants 5, up to a maximum of 5. Another trigger resets the 8s countdown. A received melee hit clears all stacks.

- **Damage-reduction example**: Each stack multiplies damage taken by 0.97. At 5 stacks, 100 × 0.97⁵ ≈ 85.87 points, approximately 14.13% less damage. While active, the effect also reduces ranged damage; a ranged hit does not consume the stacks.

[Details](adamant_staggers_reduce_damage_taken.md) · [Back to index](#talent-index)

<a id="base_cleave_node_buff_medium_1"></a>

### Cleave Boost

<img src="https://github.com/user-attachments/assets/d3fa1c73-0a49-42ab-920c-11b7238af849" width="72" height="72" alt="Cleave Boost talent icon">

- **Cleave example**: Isolating cleave capacity, an attack that could pass through 10 units of enemy mass becomes 10 × (1 + 25%) = 12.5 units.

- **Practical effect**: It becomes easier to hit several enemies with one sweep. The number hit still depends on enemy mass, armour and the weapon's own penetration limits; this is not a 25% damage increase.

[Details](base_cleave_node_buff_medium_1.md) · [Back to index](#talent-index)

<a id="base_impact_node_buff_medium_1"></a>

### Impact Boost

<img src="https://github.com/user-attachments/assets/e8b31492-509e-479a-9369-203e36e1e1e4" width="72" height="72" alt="Impact Boost talent icon">

- **Impact example**: Isolating the impact multiplier, 100 units of stagger strength becomes 100 × (1 + 25%) = 125 units.

- **Scope**: This affects whether the attack reaches an enemy's stagger threshold. It is not a health-damage bonus and does not guarantee a stronger stagger against every enemy.

[Details](base_impact_node_buff_medium_1.md) · [Back to index](#talent-index)

<a id="adamant_plasteel_plates"></a>

### Plasteel Plates

<img src="https://github.com/user-attachments/assets/170599ce-ad50-4760-93b2-da650c6deac8" width="72" height="72" alt="Plasteel Plates talent icon">

- **Effect and example**: Increase maximum Toughness by 25 points. An original 100 points, with no percentage modifier, becomes 100 + 25 = 125.

- **Bonus order**: Add these 25 points to base Toughness before applying percentage bonuses to maximum Toughness. With another 20% maximum-Toughness bonus, the result is (100 + 25) × 1.2 = 150 points.

[Details](adamant_plasteel_plates.md) · [Back to index](#talent-index)

<a id="adamant_dog_applies_brittleness"></a>

### Serrated Maw

<img src="https://github.com/user-attachments/assets/5df365c7-8213-4c06-acc5-2b00f0cda022" width="72" height="72" alt="Serrated Maw talent icon">

- **Trigger and stacks**: The Cyber-Mastiff's initial pounce hit applies 15% Brittleness for 5s. Its suppression attacks against Ogryns and Monsters can continue to apply it. Each stack is 2.5%; one application adds 6 stacks. The shared cap is 16 stacks, or 40%. Another application resets the duration of all stacks.

- **Team benefit**: Brittleness stays on the enemy, so teammates attacking that target can also benefit. The damage increase depends on the attack's original armour damage modifier.

- **Damage examples**: With base damage 100 and an original armour modifier of 0.5, damage is 50. Adding 15% Brittleness gives 100 × (0.5 + 0.15) = 65, an actual 30% increase. If the armour supports excess-rending conversion and the original modifier is already 1, the result is 100 × (1 + 0.15 × 0.25) = 103.75. This is not a fixed 15% increase to final damage.

[Details](adamant_dog_applies_brittleness.md) · [Back to index](#talent-index)

<a id="adamant_dodge_grants_damage"></a>

### Arbites Revelatum

<img src="https://github.com/user-attachments/assets/9a87f145-d4a8-4554-b8ca-f5fbb2a58944" width="72" height="72" alt="Arbites Revelatum talent icon">

- **Trigger and refresh**: Successfully dodging an enemy attack grants 15% Damage for 5s. Another successful dodge resets the duration. Performing a dodge movement alone does not trigger the effect.

- **Damage example**: With base damage 100 and no other modifiers, damage becomes 100 × (1 + 15%) = 115 points. With an existing same-stage 25% bonus, 125 points becomes 140.

[Details](adamant_dodge_grants_damage.md) · [Back to index](#talent-index)

<a id="adamant_stacking_weakspot_strength"></a>

### Soulguilt Scan

<img src="https://github.com/user-attachments/assets/59f1504d-8b25-40c7-a582-b5de1b3278cf" width="72" height="72" alt="Soulguilt Scan talent icon">

- **Stacks and refresh**: A melee or ranged Weakspot Hit grants 1 stack of 2% Weakspot Strength, up to 8 stacks. Another Weakspot Hit resets the 10s duration of all stacks.

- **Power example**: Isolating this power stage, an original 500 with the full-stack 16% bonus becomes 500 × (1 + 8 × 2%) = 580. With an existing same-stage 20% power bonus, 600 becomes 680.

- **Damage distinction**: This increases the power used for subsequent calculations on a Weakspot Hit. It does not merely multiply additional weakspot damage by 1.16. Final damage still depends on the weapon's damage curve, armour, hit location and other bonuses.

[Details](adamant_stacking_weakspot_strength.md) · [Back to index](#talent-index)

<a id="adamant_elite_special_kills_reload_speed"></a>

### Judicious Efficiency

<img src="https://github.com/user-attachments/assets/88c5f583-d739-484e-a7cd-89b79a90334d" width="72" height="72" alt="Judicious Efficiency talent icon">

- **Trigger and consumption**: Killing an Elite or Specialist grants 20% Reload Speed for the next reload. Repeated kills do not accumulate the multiplier. The effect remains until the reload is completed and the reload action is exited.

- **Reload example**: Considering only action segments affected by Reload Speed, an original 3s becomes 3 ÷ 1.2 = 2.5s. A 20% speed increase is not a 20% reduction in time.

[Details](adamant_elite_special_kills_reload_speed.md) · [Back to index](#talent-index)

<a id="adamant_movement_speed_on_block"></a>

### March

<img src="https://github.com/user-attachments/assets/8f0bcba7-48bd-4d61-ad19-b03a65160eb5" width="72" height="72" alt="March talent icon">

- **Trigger and refresh**: A ranged attack hitting an enemy grants 15% Movement Speed for 3s. Another ranged hit resets the duration.

- **Movement-speed example**: Isolating this multiplier, an original 5 metres per second becomes 5 × 1.15 = 5.75 metres per second. Other action-related slowdowns still apply.

[Details](adamant_movement_speed_on_block.md) · [Back to index](#talent-index)

<a id="adamant_elite_special_kills_offensive_boost"></a>

### No Escape

<img src="https://github.com/user-attachments/assets/6d045fa3-97bc-4943-9e6e-0f703e68288d" width="72" height="72" alt="No Escape talent icon">

- **Trigger and refresh**: Killing an Elite or Specialist grants 10% Damage and 10% Movement Speed for 4s. Another qualifying kill resets the duration.

- **Effect examples**: Isolating this effect, 100 points of damage becomes 110, and movement at 5 metres per second becomes 5 × 1.1 = 5.5 metres per second. With an existing same-stage 25% damage bonus, damage is 100 × (1 + 25% + 10%) = 135 points.

[Details](adamant_elite_special_kills_offensive_boost.md) · [Back to index](#talent-index)

<a id="adamant_cleave_after_push"></a>

### Drive them Back

<img src="https://github.com/user-attachments/assets/7b24cc5d-1975-4762-8b77-8899c0713175" width="72" height="72" alt="Drive them Back talent icon">

- **Trigger and refresh**: A push hitting at least one enemy grants 75% more melee damage cleave capacity for 5s. Another push hitting an enemy resets the duration.

- **Cleave example**: Isolating this effect, an original capacity to pass through 10 units of enemy mass becomes 10 × 1.75 = 17.5 units. This increases damage penetration capacity without also increasing stagger penetration capacity.

[Details](adamant_cleave_after_push.md) · [Back to index](#talent-index)

<a id="adamant_shield_plates"></a>

### Shield Plates

<img src="https://github.com/user-attachments/assets/e51d3184-42e7-434f-8369-0ae7a6568619" width="72" height="72" alt="Shield Plates talent icon">

- **Recovery on Block**: Blocking an attack restores 15% of maximum Toughness over 3s. Another block resets the duration without increasing the recovery rate.

- **Perfect Block**: It also instantly restores 10% of maximum Toughness, with more than 1s required between these immediate recoveries. The continuous recovery is not limited by this cooldown.

- **Recovery example**: With maximum Toughness 100, sufficient missing Toughness and no other recovery bonuses, one Perfect Block triggering both effects restores 100 × 10% + 100 × 15% = 25 points: 10 immediately and 15 over 3s.

[Details](adamant_shield_plates.md) · [Back to index](#talent-index)

<a id="adamant_heavy_attacks_increase_damage"></a>

### Weight of the Lex

<img src="https://github.com/user-attachments/assets/bff83e5a-48a0-4f4c-b280-3093df526c5d" width="72" height="72" alt="Weight of the Lex talent icon">

- **Trigger and refresh**: A heavy melee attack hitting at least one enemy grants 15% Damage for 5s after the sweep ends. Another qualifying heavy hit can reset the duration. The bonus also applies to subsequent ranged attacks.

- **Damage example**: Considering only attacks after the buff becomes active, base damage 100 becomes 100 × (1 + 15%) = 115. With an existing same-stage 25% bonus, 125 becomes 140.

[Details](adamant_heavy_attacks_increase_damage.md) · [Back to index](#talent-index)

<a id="adamant_melee_attacks_on_staggered_rend"></a>

### Strike Down

<img src="https://github.com/user-attachments/assets/fcb8d517-7a08-452a-a577-1ab15af469cb" width="72" height="72" alt="Strike Down talent icon">

- **How it works**: Melee attacks against staggered enemies gain 15% Rending, applied directly to the qualifying hit. This does not leave a timed buff stack behind.

- **Armour example**: Isolating the armour stage, assume damage basis 100 and a Carapace armour modifier of 0.5. The original 50 becomes 100 × (0.5 + 0.15) = 65, a 30% increase at this stage. Other critical-hit, weakspot and damage bonuses are calculated in their respective stages.

- **Beyond the armour deficit**: If the original Carapace modifier is already 1, the excess is converted at one quarter. This effect gives 100 × (1 + 0.15 × 0.25) = 103.75 points. Actual increases vary with the weapon and enemy.

[Details](adamant_melee_attacks_on_staggered_rend.md) · [Back to index](#talent-index)

<a id="adamant_crit_chance_on_kill"></a>

### Zealous Dedication

<img src="https://github.com/user-attachments/assets/c776951e-d8de-46cb-ad58-7c14af6b0997" width="72" height="72" alt="Zealous Dedication talent icon">

- **Stacks and refresh**: Each kill grants 1 stack, adding 2 percentage points of Critical Strike Chance per stack, up to 8 stacks. Another kill resets the 10s duration of all stacks, including at the cap.

- **Chance example**: An original 5% Critical Strike Chance becomes 5% + 8 × 2% = 21% at full stacks. This does not multiply the original 5% by 1.16.

[Details](adamant_crit_chance_on_kill.md) · [Back to index](#talent-index)

<a id="adamant_crits_rend"></a>

### Prosecution Blow

<img src="https://github.com/user-attachments/assets/e650aa60-14d1-446d-9fa3-fed8dd633716" width="72" height="72" alt="Prosecution Blow talent icon">

- **How it works**: Ranged Critical Strikes gain 20% Rending, applied directly to the qualifying hit. This does not leave a timed buff stack behind.

- **Armour example**: Isolating the armour stage, assume damage basis 100 and a Carapace armour modifier of 0.5. The original 50 becomes 100 × (0.5 + 0.2) = 70, a 40% increase at this stage. Other critical-hit, weakspot and damage bonuses are calculated in their respective stages.

- **Beyond the armour deficit**: If the original Carapace modifier is already 1, the excess is converted at one quarter. This effect gives 100 × (1 + 0.2 × 0.25) = 105 points. Actual increases vary with the weapon and enemy.

[Details](adamant_crits_rend.md) · [Back to index](#talent-index)

<a id="adamant_dodge_improvement"></a>

### Street Smarts

<img src="https://github.com/user-attachments/assets/cd883557-4048-43f0-a3b7-3a90bbc6ffe8" width="72" height="72" alt="Street Smarts talent icon">

- **Dodge count**: Gain 1 additional Effective Dodge. For example, a weapon originally allowing 3 consecutive Effective Dodges allows 3 + 1 = 4.

- **Timing**: The grace period after a melee dodge ends increases from 0.2s to 0.2 × 1.25 = 0.25s, an extra 0.05s. This does not extend the entire dodge action by 25%.

[Details](adamant_dodge_improvement.md) · [Back to index](#talent-index)

<a id="adamant_monster_hunter"></a>

### Monstrosity Hunter

<img src="https://github.com/user-attachments/assets/62b4954d-42c3-4eab-a6ea-a17719414e19" width="72" height="72" alt="Monstrosity Hunter talent icon">

- **Damage example**: Against a qualifying target, base damage 100 becomes 100 × (1 + 20%) = 120. With an existing same-stage 25% bonus, damage is 100 × (1 + 25% + 20%) = 145.

- **Scope**: Both melee and ranged attacks qualify. A target matching both types receives the bonus only once.

[Details](adamant_monster_hunter.md) · [Back to index](#talent-index)

<a id="adamant_first_melee_hit_increased_damage"></a>

### The Emperor's Fist

<img src="https://github.com/user-attachments/assets/6f3ef825-f018-482c-b511-60f87907cefc" width="72" height="72" alt="The Emperor's Fist talent icon">

- **Trigger**: The first target hit by a melee sweep receives 15% more Melee Damage and 30% more Impact. The effect is consumed after that hit and becomes available again on the next sweep.

- **Separate examples**: Isolating the damage bonus, 100 points of melee damage becomes 115. An original 100 units of stagger strength becomes 130. With an existing same-stage 25% damage bonus, damage is 100 × (1 + 25% + 15%) = 140 points.

[Details](adamant_first_melee_hit_increased_damage.md) · [Back to index](#talent-index)

<a id="adamant_pinning_dog_elite_damage"></a>

### Target Selection

<img src="https://github.com/user-attachments/assets/4b7cf064-ea83-4334-a484-a222e22af7a3" width="72" height="72" alt="Target Selection talent icon">

- **Trigger**: When you or your own Cyber-Mastiff kill an Elite or Specialist that it is currently pinning, gain 15% Damage against Elites and Specialists for the next 8s.

- **Refresh and limits**: Another trigger resets the 8s duration without stacking the damage bonus. Ordinary enemies dying do not trigger it, and attacks against ordinary enemies receive no bonus.

- **Damage example**: Against a qualifying target, base damage 100 becomes 115. With an existing same-stage 25% bonus, damage is 100 × (1 + 25% + 15%) = 140.

[Details](adamant_pinning_dog_elite_damage.md) · [Back to index](#talent-index)

<a id="adamant_increased_damage_to_high_health"></a>

### Target Priority

<img src="https://github.com/user-attachments/assets/29a7dad3-3f9c-4679-a37d-680025796f47" width="72" height="72" alt="Target Priority talent icon">

- **Condition**: If the target's remaining Health before the hit is above 75% of its maximum, that attack deals 15% more damage. Exactly 75% does not qualify.

- **Damage example**: With target maximum Health 1000 and current Health 800, base damage 100 becomes 100 × 1.15 = 115. At current Health 750, it remains 100. With an existing same-stage 25% bonus and the threshold met, 125 becomes 140.

[Details](adamant_increased_damage_to_high_health.md) · [Back to index](#talent-index)

<a id="adamant_pinning_dog_kills_buff_allies"></a>

### Canine Morale

<img src="https://github.com/user-attachments/assets/fc2bbfe4-50b8-4c9c-b775-20f1c2c33792" width="72" height="72" alt="Canine Morale talent icon">

- **Trigger and recipients**: When you or your own Cyber-Mastiff kill an enemy it is currently pinning, you and allies in Coherency at that moment receive the buff. The enemy does not need to be an Elite or Specialist.

- **Recovery and reduction**: For 5s, take 20% less Toughness damage and recover 2% of maximum Toughness per second. Another trigger refreshes the duration without increasing the recovery rate or stacking the reduction.

- **Examples**: With maximum Toughness 100, recovery is 100 × 10% ÷ 5 = 2 points per second, or 10 over the full 5s, capped at missing Toughness. An isolated incoming Toughness-damage value of 100 becomes 100 × 0.8 = 80.

[Details](adamant_pinning_dog_kills_buff_allies.md) · [Back to index](#talent-index)

<a id="adamant_sprinting_sliding"></a>

### Rapid Movement

<img src="https://github.com/user-attachments/assets/8a0b3c73-0e7e-4d31-9f7d-385634eae6e3" width="72" height="72" alt="Rapid Movement talent icon">

- **Slide speed**: After a slide ends, Sprint Speed increases by 5% for 5s. Another slide restarts the duration. With a starting sprint speed of 6 metres/s, this effect alone gives 6 × 1.05 = 6.3 metres/s.

- **Kill recovery**: Kills restore 5% of maximum Stamina, at most once every 0.75s. No prior slide is required. With maximum Stamina 6, each trigger restores 6 × 5% = 0.3 points, capped at full Stamina.

[Details](adamant_sprinting_sliding.md) · [Back to index](#talent-index)

<a id="adamant_ranged_damage_on_melee_stagger"></a>

### Final Warning

<img src="https://github.com/user-attachments/assets/75cf7e7e-044e-432f-b7cb-b73e53164425" width="72" height="72" alt="Final Warning talent icon">

- **Trigger and refresh**: Melee attacks or pushes that Stagger an enemy grant 15% Ranged Damage for 5s. Another trigger resets the duration. With Concussive, qualifying melee Weakspot Hits can also trigger it.

- **Damage example**: Base ranged damage 100 becomes 115. With an existing same-stage 25% bonus, damage rises from 125 to 100 × (1 + 25% + 15%) = 140.

[Details](adamant_ranged_damage_on_melee_stagger.md) · [Back to index](#talent-index)

<a id="adamant_clip_size"></a>

### Priority Endowment

<img src="https://github.com/user-attachments/assets/03af9ca3-e4f4-4383-9650-f8ac659cfadd" width="72" height="72" alt="Priority Endowment talent icon">

- **Capacity examples**: A base 30-round magazine becomes 30 × 1.15 = 34.5, rounded up to 35 rounds. A base 5-round magazine becomes 5 × 1.15 = 5.75, rounded up to 6 rounds.

- **Scope**: This increases the magazine capacity. Reserve ammunition capacity is determined by other effects.

[Details](adamant_clip_size.md) · [Back to index](#talent-index)

<a id="adamant_damage_vs_suppressed"></a>

### Cower, Miscreants!

<img src="https://github.com/user-attachments/assets/a72c3f5b-2dde-48d0-8f5c-1af4ba20a044" width="72" height="72" alt="Cower, Miscreants! talent icon">

- **Damage example**: Against a Suppressed enemy, this effect alone changes base damage 100 to 100 × 1.25 = 125. With an existing same-stage 20% bonus, damage rises from 120 to 100 × (1 + 20% + 25%) = 145.

- **Scope**: Melee and ranged attacks both qualify. The bonus does not apply when the target is not Suppressed.

[Details](adamant_damage_vs_suppressed.md) · [Back to index](#talent-index)

<a id="adamant_stacking_damage"></a>

### Justified Measures

<img src="https://github.com/user-attachments/assets/d3c96bd5-6464-499a-a742-cd58ddf1fa02" width="72" height="72" alt="Justified Measures talent icon">

- **Stacks and refresh**: After an attack hits its first target, gain one stack of 2% Damage, up to 5 stacks. Another trigger refreshes the 5s duration of all stacks. Later targets in the same attack do not add more stacks.

- **Damage example**: Maximum stacks grant 5 × 2% = 10%, changing base damage 100 to 110. With an existing same-stage 25% bonus, damage rises from 125 to 100 × (1 + 25% + 10%) = 135.

[Details](adamant_stacking_damage.md) · [Back to index](#talent-index)

<a id="adamant_staggered_enemies_deal_less_damage"></a>

### Suppression Force

<img src="https://github.com/user-attachments/assets/af381ce2-1360-49a1-931d-6db3fb174166" width="72" height="72" alt="Suppression Force talent icon">

- **Trigger and refresh**: A melee attack or push hitting a Staggered enemy reduces that enemy's Damage by 20% for 5s. Another trigger resets the duration without stacking the multiplier.

- **Damage example**: With this debuff alone, an enemy's outgoing damage of 100 becomes 100 × (1 − 20%) = 80. This weakens the enemy's output; it does not deal extra damage to the enemy.

[Details](adamant_staggered_enemies_deal_less_damage.md) · [Back to index](#talent-index)

<a id="adamant_melee_weakspot_hits_count_as_stagger"></a>

### Concussive

<img src="https://github.com/user-attachments/assets/2577c784-85c4-473c-b9ba-a88f8de35355" width="72" height="72" alt="Concussive talent icon">

- **Behavior**: Melee Weakspot Hits make the target count as Staggered for related talents for 4s; physically knocking it back is not required. Another qualifying hit extends the period in which it counts as Staggered.

- **Synergy example**: With Breaking Dissent's 10% Damage against Staggered enemies, a later qualifying base-100 attack becomes 100 × 1.1 = 110. Concussive alone does not grant damage or force the enemy to recoil.

[Details](adamant_melee_weakspot_hits_count_as_stagger.md) · [Back to index](#talent-index)

<a id="adamant_staggering_enemies_take_more_damage"></a>

### Target the Weak

<img src="https://github.com/user-attachments/assets/aa78a41a-3cea-4e8d-ba36-4496c3619be7" width="72" height="72" alt="Target the Weak talent icon">

- **Behavior and refresh**: A melee attack or push hitting a Staggered enemy makes it take 15% more Melee Damage for the next 5s. You and teammates can benefit. Another trigger resets the duration without increasing the amount.

- **Damage examples**: Isolating the target damage-taken stage, melee damage 100 becomes 115. With a separate 25% attacker damage bonus, the stages multiply: 100 × 1.25 × 1.15 = 143.75. If the target instead already has a same-stage 25% damage-taken increase, damage is 100 × (1 + 25% + 15%) = 140.

[Details](adamant_staggering_enemies_take_more_damage.md) · [Back to index](#talent-index)

<a id="adamant_perfect_block_damage_boost"></a>

### Retaliatory Force

<img src="https://github.com/user-attachments/assets/96221430-4610-4bf3-9b19-4fd056c99e74" width="72" height="72" alt="Retaliatory Force talent icon">

- **Block cost**: Block Stamina cost is reduced by 15%. A base cost of 2 Stamina becomes 2 × 0.85 = 1.7 with this effect alone.

- **Perfect Block buff**: Perfect Blocks grant 15% Damage and Attack Speed for 8s. Another Perfect Block resets the duration.

- **Buff examples**: Base damage 100 becomes 115. A 1s action affected by Attack Speed becomes 1 ÷ 1.15 ≈ 0.870s. With an existing same-stage 25% damage bonus, damage is 100 × (1 + 25% + 15%) = 140.

[Details](adamant_perfect_block_damage_boost.md) · [Back to index](#talent-index)
