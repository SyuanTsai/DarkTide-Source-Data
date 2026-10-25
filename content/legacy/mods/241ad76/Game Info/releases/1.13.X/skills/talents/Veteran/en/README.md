# Veteran talents: Release 1.13.1

[繁體中文](../README.md) | [Sources, formulas and technical index](SOURCE_INDEX.md) | [Skills](../../../README.en.md) | [Version information](../../../../README.md) | [Definitions without independent nodes](UNUSED_DEFINITIONS.md) | [Base effects](BASE_EFFECTS.md)

<a id="talent-index"></a>

## Talent index

| Talent | Main effects | Category |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/7b9b7141-a7fa-4f3b-944f-5f1141cdc04e" width="32" height="32" alt="Smoke Grenade talent icon"> [Smoke Grenade](#veteran_smoke_grenade) | <ul><li>Create a 15-second smoke cloud after a roughly 1.5-second fuse; base capacity: three grenades.</li><li>The 4.5m smoke core blocks sight for susceptible enemies; the cloud has a 5.5m outer radius.</li><li>Concealment lingers for about 0.5s after leaving; smoke does not make you invulnerable.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/2bec21d1-d677-4386-942d-2c2697c285d1" width="32" height="32" alt="Grenadier talent icon"> [Grenadier](#veteran_extra_grenade) | <ul><li>Carry one extra grenade: base capacity 3 → 4 without other capacity changes.</li><li>Each throw has a 20% chance to produce one additional grenade while consuming only one charge; applies to all three Veteran grenade types.</li></ul> | Blitz modifier |
| <img src="https://github.com/user-attachments/assets/5179b403-3945-41a4-9c68-5278b6968c24" width="32" height="32" alt="Grenade Tinkerer talent icon"> [Grenade Tinkerer](#veteran_improved_grenades) | <ul><li>Shredder Frag Grenade: +25% explosion damage and radius; the bonus does not increase bleed damage.</li><li>Krak Grenade: +75% explosion damage.</li><li>Smoke Grenade: +100% smoke duration, normally 15s → 30s with this modifier alone.</li></ul> | Blitz modifier |
| <img src="https://github.com/user-attachments/assets/b0967626-73da-49a8-a1b9-1f4d6c1daffa" width="32" height="32" alt="Krak Grenade talent icon"> [Krak Grenade](#veteran_krak_grenade) | <ul><li>Seek suitable Flak, Carapace or Unyielding armor hit zones and stick; base capacity: three grenades.</li><li>Collision/sticking starts a roughly one-second fuse; without collision, two seconds of flight precede that fuse.</li><li>Close blast radius 1.5m, outer blast 5m; close blast penetrates shields. Damage varies with armor, boss and blast conditions.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/511ac082-cbea-4af3-8f8e-3dfeab7ca2bf" width="32" height="32" alt="Demolition Stockpile talent icon"> [Demolition Stockpile](#veteran_replenish_grenades) | <ul><li>While below grenade capacity, replenish one Shredder Frag Grenade or Smoke Grenade approximately every 60 seconds, or one Krak Grenade approximately every 90 seconds.</li><li>Throwing another grenade preserves the current countdown; reaching full capacity clears it.</li></ul> | Blitz modifier |
| <img src="https://github.com/user-attachments/assets/6fa67f08-3b19-4bee-8a32-d5815db7297f" width="32" height="32" alt="Shredder Frag Grenade talent icon"> [Shredder Frag Grenade](#veteran_grenade_apply_bleed) | <ul><li>Damaging Frag explosions apply six Bleed stacks to surviving enemies.</li><li>Base capacity three; about 1.7s fuse, 2m inner blast and 10m outer blast with damage falloff.</li><li>Bleed caps at 16 stacks; ticks about every 0.5s, refreshes its 1.5s duration on reapplication and then loses stacks over successive ticks.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/9a3da9ac-d8f1-4745-9af6-25852f52834a" width="32" height="32" alt="Fire Team talent icon"> [Fire Team](#veteran_increased_damage_coherency) | <ul><li>Gain +7.5% Damage for you and Allies in Coherency.</li><li>Identical Fire Team auras do not stack; replaces your Scavenger aura.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/f8c278c8-72a1-476c-93d1-6656268ba8e4" width="32" height="32" alt="Close and Kill talent icon"> [Close and Kill](#veteran_movement_speed_coherency) | <ul><li>Gain +7.5% Movement Speed for you and Allies in Coherency.</li><li>Identical copies do not stack; replaces your Scavenger aura.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/c2dffa00-cd24-478f-96c7-4007f4239e6a" width="32" height="32" alt="Survivalist talent icon"> [Survivalist](#veteran_aura_gain_ammo_on_elite_kill_improved) | <ul><li>Eligible Elite/Specialist kills by you or an aura-bearing ally can restore 0.5% of maximum reserve ammo to the killer and their Coherency allies.</li><li>Five-second aura cooldown; replaces your 0.25% Scavenger aura.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/61ed9652-570a-48ad-9a3b-4961c131dd36" width="32" height="32" alt="Volley Fire talent icon"> [Volley Fire](#veteran_combat_ability_stance) | <ul><li>Equip your ranged weapon and enter a 6-second stance with +15% ranged damage, +15% extra weakspot damage and +50% ranged impact.</li><li>Reduced spread/recoil/sway and disruption protection; 30-second base cooldown starts on activation.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/0f9d7c51-7e6a-4f3d-a367-5c22d0adf308" width="32" height="32" alt="Infiltrate talent icon"> [Infiltrate](#veteran_invisibility_on_combat_ability) | <ul><li>Replenish all Toughness; enter Stealth for up to 8 seconds with +25% movement speed.</li><li>Gain +30% damage during Stealth and for 8 seconds afterwards. Base cooldown: 40 seconds.</li><li>Attacking can end Stealth; leaving it suppresses nearby enemies.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/7a72c16f-0170-458e-9bd4-4d585cf523d3" width="32" height="32" alt="Low Profile talent icon"> [Low Profile](#veteran_reduced_threat_after_combat_ability) | <ul><li>Combat ability use reduces the affected enemy target-selection weight by 90%.</li><li>With Infiltrate, it is active during Stealth and for 10 seconds after leaving it; an already-running countdown is not restarted by another application.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/f89a6abd-27a9-4099-9a5c-cd778cbe34ba" width="32" height="32" alt="Executioner's Stance talent icon"> [Executioner's Stance](#veteran_combat_ability_elite_and_special_outlines) | <ul><li>Upgrade base ranged damage and extra weakspot modifiers to 25% each, and ranged impact to 100%.</li><li>Six-second stance; replenish 10% of maximum Toughness per second. Outline eligible Elites and Specialists; qualifying kills refresh the stance.</li><li>30-second base cooldown; retained handling improvements.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/2afc79fa-02f2-4943-b4e7-abe35435f7bd" width="32" height="32" alt="Enhanced Target Priority talent icon"> [Enhanced Target Priority](#veteran_combat_ability_coherency_outlines) | <ul><li>When the stance starts or refreshes, grant allies then in Coherency a five-second Elite/Specialist outline effect.</li><li>Recipient-relative Elite range is strictly less than 50m; Specialists bypass this limit. Additional shooter/large-enemy outlines are not shared.</li><li>Reapplication refreshes one instance; late entrants wait for the next grant.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/ca186661-9499-4f3f-9449-596caa35b7b6" width="32" height="32" alt="Counter-Fire talent icon"> [Counter-Fire](#veteran_combat_ability_ranged_roamer_outlines) | <ul><li>Add eligible shooter and stalker types to Executioner's Stance outlines; ordinary candidates must be less than 50m away.</li><li>Owner kills of added eligible types also refresh the selected stance duration: normally 6s, or 9s with the large-enemy modifier.</li><li>No additional weakspot-damage bonus is supplied by this modifier.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/0df9e7bd-7394-4f93-ba54-f8f6d2884d02" width="32" height="32" alt="The Bigger they Are ... talent icon"> [The Bigger they Are ...](#veteran_combat_ability_ogryn_outlines) | <ul><li>Increase each Executioner's Stance duration from 6s to 9s and add Ogryn, Captain and Monstrosity outline categories.</li><li>Qualifying owner kills refresh the full nine-second stance. Ordinary outline candidates remain strictly within 50m.</li><li>The modifier does not supply an additional species-damage bonus; shared ally outlines remain a separate effect.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/0c033c93-a850-4295-853d-10698ec96e89" width="32" height="32" alt="Hunter's Resolve talent icon"> [Hunter's Resolve](#veteran_toughness_bonus_leaving_invisibility) | <ul><li>Infiltrate grants 50% Toughness damage reduction during Stealth and for 10 seconds after leaving it.</li><li>Separate overlapping instances multiply and keep their own countdowns.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/57d6b442-9cee-45c3-ba74-4a191649eddb" width="32" height="32" alt="Tactical Awareness talent icon"> [Tactical Awareness](#veteran_elite_kills_reduce_cooldown) | <ul><li>Specialist Enemy kills grant 3 seconds of extra combat ability recovery: one additional baseline cooldown second per second.</li><li>Further qualifying kills refresh the duration while keeping the tick cadence; the recovery rate does not stack.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/73961902-95ea-4316-bda1-13b23dac1789" width="32" height="32" alt="Voice of Command talent icon"> [Voice of Command](#veteran_combat_ability_stagger_nearby_enemies) | <ul><li>Shout to apply stagger to enemies within 9 metres and immediately replenish all of your missing Toughness.</li><li>Base cooldown: 40 seconds, starting on use. Individual enemy reactions can vary.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/a8bcdde1-34e3-449d-9b46-e9130865b285" width="32" height="32" alt="Only In Death Does Duty End talent icon"> [Only In Death Does Duty End](#veteran_combat_ability_revive_nearby_allies) | <ul><li>Voice of Command automatically revives Knocked Down allies within 9 metres, including multiple allies in one use.</li><li>Without other modifiers, the base cooldown remains 40 seconds; other incapacitated states are not covered.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/fc16005a-fb09-4db6-bd15-e18d45c6d935" width="32" height="32" alt="Marksman talent icon"> [Marksman](#veteran_increased_weakspot_power_after_combat_ability) | <ul><li>Combat ability use adds 20 percentage points of attack power on melee and ranged weakspot hits for 10 seconds.</li><li>With Infiltrate, the effect is active during Stealth and for 10 seconds afterwards. It does not increase the cleave budget.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/56d61b06-dd20-4832-8293-0220d1f3960c" width="32" height="32" alt="Duty and Honour talent icon"> [Duty and Honour](#veteran_combat_ability_increase_and_restore_toughness_to_coherency) | <ul><li>Voice of Command grants you and allies in Coherency +75 maximum and current Toughness for 10 seconds.</li><li>The caster also refills to the enlarged maximum. Separate grants can overlap and expire independently.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/1181fe6e-4066-4d75-b996-a0eb01d7583d" width="32" height="32" alt="Close Quarters Killzone talent icon"> [Close Quarters Killzone](#veteran_increased_close_damage_after_combat_ability) | <ul><li>Combat ability use grants up to 15% close damage for 10 seconds; melee and ranged attacks can benefit.</li><li>With Infiltrate, it is active during Stealth and for 10 seconds afterwards. Full bonus within 12.5m; fades to zero at 30m.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/29160cac-e32b-4037-bc8c-3a0765e3a6df" width="32" height="32" alt="Overwatch talent icon"> [Overwatch](#veteran_combat_ability_extra_charge) | <ul><li>Store two Infiltrate uses; each fully missing use takes about 53.2 seconds to refill without other cooldown effects.</li><li>Both uses share recharge progress and refill sequentially; recovery continues during stealth.</li></ul> | Ability modifier |
| <img src="https://github.com/user-attachments/assets/80917bab-ea62-4a9a-a0fa-f9b443ee1b0b" width="32" height="32" alt="Weapons Specialist talent icon"> [Weapons Specialist](#veteran_weapon_switch_passive) | <ul><li>Kills while holding melee store up to 10 ranged stacks; switching to ranged grants 2% attack/reload speed and 33 percentage points of first-shot critical chance per stack.</li><li>A kill while holding ranged stores one melee stack; switching to melee grants 15% attack speed and 10% dodge speed/distance.</li><li>Both buffs last up to 10 seconds and end when switching away from their corresponding weapon.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/a6e24eb8-063a-45a5-8796-acde81d1f734" width="32" height="32" alt="On Your Toes talent icon"> [On Your Toes](#veteran_weapon_switch_replenish_toughness) | <ul><li>Activating either Specialist restores 20% of maximum Toughness, subject to recovery modifiers and the deficit.</li><li>Each weapon direction has its own 3-second cooldown; stored stacks are consumed even if that cooldown blocks recovery.</li></ul> | Keystone modifier |
| <img src="https://github.com/user-attachments/assets/842c2a40-8bb4-45fa-a1e2-672fedf80d78" width="32" height="32" alt="Always Prepared talent icon"> [Always Prepared](#veteran_weapon_switch_replenish_ammo) | <ul><li>Activating Ranged Specialist transfers Reserve ammo into the Clip based on 3.3% of current missing Clip ammo per stored stack.</li><li>Round the calculated total up; transfer is limited by Reserve ammo and the Clip deficit, then stored stacks are consumed.</li></ul> | Keystone modifier |
| <img src="https://github.com/user-attachments/assets/bc2a44d8-866d-4f29-a680-f84e98b72b01" width="32" height="32" alt="Invigorated talent icon"> [Invigorated](#veteran_weapon_switch_replenish_stamina) | <ul><li>Activating Melee Specialist restores 20% of maximum Stamina, limited by the deficit.</li><li>Gain 25% stamina-cost reduction for 3 seconds; it persists through weapon switches and refreshes on a new qualifying activation.</li></ul> | Keystone modifier |
| <img src="https://github.com/user-attachments/assets/85048589-7642-40e7-9d4b-ab325da2ea25" width="32" height="32" alt="Focus Target! talent icon"> [Focus Target!](#veteran_improved_tag) | <ul><li>Store one stack every 1.5 seconds, starting at 1 and normally capping at 4; a tag applies the stored amount to the target.</li><li>Each applied stack multiplies target damage taken by 1.05. Same-target re-tags upgrade only to a higher stored count; the mark lasts 25 seconds.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/a95c5ea6-546f-462d-a073-56f9d1a21103" width="32" height="32" alt="Focused Fire talent icon"> [Focused Fire](#veteran_improved_tag_more_damage) | <ul><li>Raise maximum stored Focus Target stacks from 4 to 6; stack gain remains one every 1.5 seconds.</li><li>Six applied stacks multiply target damage taken by 1.05^6, about 1.3401; re-tag to apply stronger storage.</li></ul> | Keystone modifier |
| <img src="https://github.com/user-attachments/assets/47cc6995-f2fa-407d-9cb0-4dd91fcdc10d" width="32" height="32" alt="Target Down! talent icon"> [Target Down!](#veteran_improved_tag_dead_bonus) | <ul><li>When your currently marked enemy dies, you and allies in Coherency regain 5% of maximum Toughness and Stamina per applied Focus Target stack.</li><li>Four applied stacks request 20%; with Focused Fire, six request 30%. Deficits limit recovery, and the owner need not land the kill.</li></ul> | Keystone modifier |
| <img src="https://github.com/user-attachments/assets/48ecea96-bdaa-49e6-b9b7-ee3ac26fc1c5" width="32" height="32" alt="Redirect Fire! talent icon"> [Redirect Fire!](#veteran_improved_tag_dead_coherency_bonus) | <ul><li>A currently marked enemy death grants you and allies in Coherency 2.5% damage per applied Focus Target stack for 10 seconds.</li><li>Rewards add stacks and refresh the duration, with 4 effective stacks normally or 6 with Focused Fire; damage adds to other same-stage bonuses.</li></ul> | Keystone modifier |
| <img src="https://github.com/user-attachments/assets/4376889f-d2eb-4efe-836a-5e0ce5ae27f4" width="32" height="32" alt="Marksman's Focus talent icon"> [Marksman's Focus](#veteran_snipers_focus) | <ul><li>Ranged weakspot kills add three Focus stacks, up to 10 effective stacks.</li><li>Each stack grants 7.5% ranged finesse strength and 1% reload speed; weakspot hits refresh the 5-second timer, then stacks decay one at a time.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/426b1945-b7fc-40e8-9db1-3bda08514bab" width="32" height="32" alt="Long Range Assassin talent icon"> [Long Range Assassin](#veteran_snipers_focus_increased_stacks) | <ul><li>Raise Marksman's Focus's effective stack cap from 10 to 15.</li><li>At 15 stacks, gain 112.5% ranged finesse strength and 15% reload speed; the whole-hit increase depends on the extra component.</li></ul> | Keystone modifier |
| <img src="https://github.com/user-attachments/assets/136d0a92-5459-4218-a2b3-324f367ba69d" width="32" height="32" alt="Chink in their Armour talent icon"> [Chink in their Armour](#veteran_snipers_focus_rending_bonus) | <ul><li>At 10 or more Focus stacks, gain 15% Rending; lose it below 10 stacks.</li><li>The threshold stays 10 with Long Range Assassin. Damage gain depends on armor and existing Rending.</li></ul> | Keystone modifier |
| <img src="https://github.com/user-attachments/assets/62660bca-751b-435a-9d60-48590aadd37f" width="32" height="32" alt="Tunnel Vision talent icon"> [Tunnel Vision](#veteran_snipers_focus_toughness_bonus) | <ul><li>Each effective Focus stack increases applicable Toughness replenishment by 4%.</li><li>Ranged weakspot kills restore 10% of maximum Stamina, limited by the deficit.</li></ul> | Keystone modifier |
| <img src="https://github.com/user-attachments/assets/4087a451-e4ae-429b-afe6-75369e2903f3" width="32" height="32" alt="Fully Loaded talent icon"> [Fully Loaded](#veteran_ammo_increase) | <ul><li>Increase maximum reserve ammo by 25%.</li><li>Does not increase magazine capacity; fractional rounds are rounded down.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/6632d16b-faac-444e-8139-99057e2f613a" width="32" height="32" alt="Lock and Load talent icon"> [Lock and Load](#veteran_clip_size) | <ul><li>Increase magazine capacity by 25%; fractional rounds are rounded down.</li><li>Does not directly increase maximum reserve ammo.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/a5b64063-ac9d-404d-98ac-528f24aafb65" width="32" height="32" alt="Tactical Reload talent icon"> [Tactical Reload](#veteran_faster_reload_on_non_empty_clips) | <ul><li>Start reloading with ammo in the magazine to gain +25% Reload Speed for that reload.</li><li>An empty-magazine start does not activate this bonus.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/009ef44a-cf3d-44cf-ac8b-cda57c6fd83d" width="32" height="32" alt="Volley Adept talent icon"> [Volley Adept](#veteran_reload_speed_on_elite_kill) | <ul><li>Kill an Elite or Specialist enemy to gain +30% Reload Speed for the next reload.</li><li>Repeated kills do not bank extra reload uses; the bonus remains through the consuming reload.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/cc7841b0-9637-4d35-8bca-c2c418798875" width="32" height="32" alt="Rending Strikes talent icon"> [Rending Strikes](#veteran_rending_bonus) | <ul><li>Gain 10% Rending for all weapons.</li><li>Armor-dependent damage gains vary; unarmoured targets receive no Rending armor adjustment.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/139120eb-e9c5-41ea-b87c-bf4737b53f49" width="32" height="32" alt="Close Order Drill talent icon"> [Close Order Drill](#veteran_reduced_toughness_damage_in_coherency) | <ul><li>Gain 11% Toughness Damage Reduction per Coherency teammate, up to 33% with three.</li><li>The effect follows the current teammate count and multiplies with separate active reductions.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/d56c3a6f-0fed-4e37-bb08-aa3c87f5624d" width="32" height="32" alt="Iron Will talent icon"> [Iron Will](#veteran_tdr_on_high_toughness) | <ul><li>Take 50% less Toughness damage while current Toughness is above 75% of maximum.</li><li>Exactly 75% does not qualify; separate active reduction multipliers multiply.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/915cdbef-5b88-4d3b-a4f1-e29e8a8f0f07" width="32" height="32" alt="Superiority Complex talent icon"> [Superiority Complex](#veteran_increase_damage_vs_elites) | <ul><li>Gain +15% damage against Elite enemies for eligible melee and ranged attacks.</li><li>Specialist-only targets do not qualify; the bonus adds to other same-stage damage bonuses.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/fc1e80c9-c17b-4e96-909d-bab403221f03" width="32" height="32" alt="Bring it Down! talent icon"> [Bring it Down!](#veteran_big_game_hunter) | <ul><li>Gain +20% damage against Ogryns and Monstrosities with melee and ranged attacks.</li><li>The bonus adds to other same-stage damage bonuses; enemy classification determines eligibility.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/e836f77f-9bb2-4b87-938a-3bab63656ff1" width="32" height="32" alt="Covert Operative talent icon"> [Covert Operative](#veteran_increased_damage_when_flanking) | <ul><li>Gain +30% damage on ranged attacks from the enemy’s rear half-plane.</li><li>The exact side boundary and melee attacks do not qualify.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/7be19cb4-a1cb-4211-b9f2-d754f3c95b6c" width="32" height="32" alt="Desperado talent icon"> [Desperado](#veteran_increased_melee_crit_chance_and_melee_finesse) | <ul><li>Add 10 percentage points to melee critical hit chance.</li><li>Gain +25% on the extra-damage multiplier for melee critical or weakspot hits; apply once on a combined critical weakspot hit.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/d6402640-110e-4d25-b1b3-780a49b1c4e1" width="32" height="32" alt="Out for Blood talent icon"> [Out for Blood](#veteran_all_kills_replenish_toughness) | <ul><li>Your melee and ranged kills restore an additional 5% of maximum Toughness.</li><li>Actual restoration is capped at the missing Toughness.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/dca385d7-a54e-4bf5-b67d-f3d29ef82234" width="32" height="32" alt="Skirmisher talent icon"> [Skirmisher](#veteran_increase_damage_after_sprinting) | <ul><li>Sprinting or sliding builds +6.25% Base Damage per stack, up to 4 stacks (+25%).</li><li>Continuous movement builds about one stack per second; stacking applications refresh a shared 10-second duration, including at the cap.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/fd178238-be59-4c18-8631-12423f5506fb" width="32" height="32" alt="Exploit Weakness talent icon"> [Exploit Weakness](#veteran_crits_apply_rending) | <ul><li>Melee critical hits grant +20% Damage for 6 seconds; subsequent melee and ranged attacks can benefit.</li><li>Further melee critical hits refresh the duration without stacking the bonus.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/a882268c-6f4f-42ee-8973-a64dd6e882e7" width="32" height="32" alt="Leave No One Behind talent icon"> [Leave No One Behind](#veteran_movement_speed_towards_downed) | <ul><li>Gain +20% Movement Speed and Stun Immunity while looking toward an ally who needs help, within about 60° either side.</li><li>Gain +20% speed for reviving, pulling up, removing a net and rescuing.</li><li>An ally you revive receives 33% Damage Reduction for 5 seconds.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/980ba0fa-2a34-4f97-b592-05651671933b" width="32" height="32" alt="Reciprocity talent icon"> [Reciprocity](#veteran_dodging_grants_crit) | <ul><li>Each successful dodge adds 5 percentage points of Critical Hit Chance, up to 5 stacks.</li><li>An 8-second shared duration refreshes on another successful dodge; simply performing a dodge adds no stack.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/a7c3f5a6-113a-404a-873d-985481ec316b" width="32" height="32" alt="Agile Engagement talent icon"> [Agile Engagement](#veteran_kill_grants_damage_to_other_slot) | <ul><li>Melee kills grant +25% Ranged Damage; ranged kills grant +25% Melee Damage.</li><li>Each bonus lasts 6 seconds and can coexist with the other; same-type kills refresh the corresponding timer without stacking.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/8378bd8a-7c90-41fd-83c7-40c135c75caa" width="32" height="32" alt="Serrated Blade talent icon"> [Serrated Blade](#veteran_hits_cause_bleed) | <ul><li>A damaging melee hit applies 2 Bleed stacks to a target that survives the hit.</li><li>Bleed caps at 16 stacks and ticks about every 0.5s; reapplication refreshes a 1.5s timer, after which ticks remove one stack if not reapplied.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/0801494c-4548-4fcb-afe7-8a7c563ef396" width="32" height="32" alt="Onslaught talent icon"> [Onslaught](#veteran_continous_hits_apply_rending) | <ul><li>Repeated eligible hits on the same living target add one Brittleness stack each, starting with the second hit.</li><li>Each stack adds 2.5% Rending, up to 16 stacks (40%); new stacks refresh a shared 5-second timer. Other attackers can benefit.</li><li>The final damage gain depends on armor and the attack; 40% Rending is not a universal 40% damage gain.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/19c86987-5e48-4eeb-9385-33697b9d99b0" width="32" height="32" alt="Catch a Breath talent icon"> [Catch a Breath](#veteran_replenish_toughness_outside_melee) | <ul><li>After more than 5 seconds without receiving a melee hit, regenerate 5% of maximum Toughness per second.</li><li>A received melee hit resets the wait; recovery is capped at missing Toughness.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/4193f147-bd40-49f8-92d4-a2b83fa1ad5b" width="32" height="32" alt="Opening Salvo talent icon"> [Opening Salvo](#veteran_bonus_crit_chance_on_ammo) | <ul><li>While wielding a ranged weapon with at least 80% of its clip ammunition remaining, gain 10 percentage points of Ranged Critical Hit Chance.</li><li>Reserve ammunition does not affect the threshold; a 30-round clip qualifies at 24 rounds, but not 23.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/8cc616f0-d225-4b5f-81a4-8780f478d471" width="32" height="32" alt="Kill Zone talent icon"> [Kill Zone](#veteran_ranged_power_out_of_melee) | <ul><li>After more than 8 seconds without receiving a melee hit, gain +15% Base Ranged Damage.</li><li>A qualifying melee hit resets the wait; enemy proximity, your own melee attacks and ranged hits do not by themselves interrupt it.</li><li>The bonus adds to other same-category damage bonuses.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/cba2a46d-298c-434a-883d-e048f5ede32d" width="32" height="32" alt="Shock Trooper talent icon"> [Shock Trooper](#veteran_no_ammo_consumption_on_lasweapon_crit) | <ul><li>Critical shots with an eligible Las-weapon consume no ammunition, even if they miss.</li><li>You must be holding the weapon with at least one round in its clip. Empty clips cannot fire through this effect; noncritical shots retain their normal cost.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/ba2f9f5e-0466-433d-a93d-68b1f9606dd7" width="32" height="32" alt="Withering Fire talent icon"> [Withering Fire](#veteran_increased_ranged_cleave) | <ul><li>Increase ranged attack cleave capacity by 50%.</li><li>Penetration still depends on the weapon and each target’s resistance; this does not directly increase single-target damage.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/1a08688e-e370-4eac-a27e-fd48da3b3965" width="32" height="32" alt="Born Leader talent icon"> [Born Leader](#veteran_allies_in_coherency_share_toughness_gain) | <ul><li>Increase your Coherency radius by 50%.</li><li>When you trigger Toughness recovery, other allies in Coherency each receive 20% of the amount originally requested, with their own modifiers and caps. Shared recovery does not share again.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/aba3bef3-ec36-4b94-8097-95a2f43d593e" width="32" height="32" alt="Field Improvisation talent icon"> [Field Improvisation](#veteran_better_deployables) | <ul><li>Team Ammo Crates refill eligible Grenades.</li><li>Medi-Packs heal 100% faster, remove eligible Corruption and replenish 1% of maximum Toughness per second. Lost health segments remain lost.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/8c1dadf2-9263-4efa-a710-9da08a41eb3e" width="32" height="32" alt="Covering Fire talent icon"> [Covering Fire](#veteran_replenish_toughness_and_boost_allies) | <ul><li>A ranged kill can restore 15% of maximum Toughness and grant +15% base damage for 6 seconds to one other ally near the victim.</li><li>The initial search radius is 8 metres; a selection defect can choose an ally outside it. The buff refreshes without stacking.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/284f479c-7f5d-463f-bf50-1003d34b9f5b" width="32" height="32" alt="Competitive Urge talent icon"> [Competitive Urge](#veteran_ally_kills_increase_damage) | <ul><li>Ally kills have a 2.5% chance to grant +20% base damage, melee impact and suppression for 8 seconds.</li><li>No Coherency or distance requirement. Reapplication refreshes the duration without stacking.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/706a5b5b-5f7b-43bc-bbd0-7debf024671b" width="32" height="32" alt="Confirmed Kill talent icon"> [Confirmed Kill](#veteran_elite_kills_replenish_toughness) | <ul><li>An Elite or Specialist kill immediately restores 10% of maximum Toughness.</li><li>Each kill adds 2% of maximum Toughness per second for 10 seconds; independent effects can overlap.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/f7517509-e85f-47fb-b775-234a6aa0950a" width="32" height="32" alt="Longshot talent icon"> [Longshot](#veteran_increased_damage_based_on_range) | <ul><li>Gain +10% ranged damage within 12.5 metres, rising to +25% total at 30 metres.</li><li>The middle-distance bonus follows a square-root curve; other damage bonuses affect the relative gain.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/e65e3909-4dac-413f-827d-f5db9138e5e2" width="32" height="32" alt="Deadshot talent icon"> [Deadshot](#veteran_ads_drain_stamina) | <ul><li>With Stamina remaining in ranged alternate fire: +25 percentage points critical chance, 60% less Sway, 19% less spread and 12% less recoil.</li><li>Spend 0.33 Stamina points per second and 0.1 per shooting event; bonuses end when Stamina is exhausted.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/8567315b-bea7-4be4-aaec-22d7096945a9" width="32" height="32" alt="Duck and Dive talent icon"> [Duck and Dive](#veteran_dodging_grants_stamina) | <ul><li>Gain 5% movement speed continuously.</li><li>A successful ranged-attack dodge can restore 30% of maximum Stamina, at most once every 3 seconds; recovery is capped.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/ae882322-f266-4e2c-8168-09f85a5c9285" width="32" height="32" alt="Keep Their Heads Down! talent icon"> [Keep Their Heads Down!](#veteran_increase_suppression) | <ul><li>Increase suppression you deal by 75%.</li><li>Enemy thresholds and immunity determine the reaction; this does not increase damage by 75%.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/1ef34fb3-ac4e-47d1-b7c1-0d13f10e3173" width="32" height="32" alt="Toughness Boost talent icon"> [Toughness Boost](#base_toughness_node_buff_medium_2) | <ul><li>Increase maximum Toughness by 25 points.</li><li>The points are added before percentage maximum-Toughness modifiers.</li></ul> | Stat node |
| <img src="https://github.com/user-attachments/assets/b0fb41b1-81da-4263-8d21-101a3af0cbdb" width="32" height="32" alt="Melee Damage Boost talent icon"> [Melee Damage Boost](#base_melee_damage_node_buff_high_2) | <ul><li>Increase Melee Damage by 15%.</li><li>The bonus adds to other applicable bonuses at the same damage-stat stage.</li></ul> | Stat node |
| <img src="https://github.com/user-attachments/assets/20744626-5cef-4e5c-afef-0474fde5a4b5" width="32" height="32" alt="Toughness Damage Reduction talent icon"> [Toughness Damage Reduction](#base_toughness_damage_reduction_node_buff_medium_1) | <ul><li>Reduce Toughness damage taken by 10%.</li><li>Same-type reductions add; independent Toughness-damage multipliers apply separately.</li></ul> | Stat node |
| <img src="https://github.com/user-attachments/assets/3ec21db4-4013-4522-850f-14c583e25ea7" width="32" height="32" alt="Demolition Team talent icon"> [Demolition Team](#veteran_aura_elite_kills_restore_grenade) | <ul><li>You have a 5% chance to restore one grenade when you or an ally in Coherency kills an Elite or Specialist.</li><li>The grenade is restored to you, up to your carry limit.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/d10f9131-4785-4bff-91a6-af630759b2dd" width="32" height="32" alt="Precision Strikes talent icon"> [Precision Strikes](#veteran_increased_weakspot_damage) | <ul><li>Add 30 percentage points to the extra-damage multiplier on melee and ranged weakspot hits.</li><li>The whole-hit increase depends on the extra component and existing bonuses.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/4a13cdee-8f88-4412-8b56-e3b3b5590459" width="32" height="32" alt="Trench Fighter Drill talent icon"> [Trench Fighter Drill](#veteran_attack_speed) | <ul><li>Increase Melee Attack Speed by 10%.</li><li>An affected 1s action takes about 0.91s without other speed bonuses; full attack-chain timing depends on the weapon.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/f51a3100-c73f-4d71-833e-a71bb9e002bc" width="32" height="32" alt="One Motion talent icon"> [One Motion](#veteran_reduce_swap_time) | <ul><li>Increase Weapon Swap Speed by 50%.</li><li>An affected 0.9s swap action takes 0.6s without other speed effects; reload and attack speed are separate.</li></ul> | Passive talent |
| <img src="https://github.com/user-attachments/assets/c7ac403a-7fac-4ce9-bc80-8a7df2af7907" width="32" height="32" alt="Exhilarating Takedown talent icon"> [Exhilarating Takedown](#veteran_replenish_toughness_on_weakspot_kill) | <ul><li>Ranged weakspot kills replenish 15% of maximum Toughness and grant stacking Toughness damage reduction.</li><li>Up to three effective stacks: 10%, 19% or 27.1% reduction; refresh the 8-second timer on each qualifying kill, then decay one stack at a time.</li></ul> | Passive talent |

---

## Blitz

<a id="veteran_smoke_grenade"></a>

<img src="https://github.com/user-attachments/assets/7b9b7141-a7fa-4f3b-944f-5f1141cdc04e" width="72" height="72" alt="Smoke Grenade talent icon">

### Smoke Grenade

- Throw a grenade that creates a **15-second smoke cloud** after a roughly **1.5-second fuse**. Base capacity: **three grenades**.
- The central **4.5m radius** blocks sight for enemies susceptible to smoke; the cloud's outer radius is **5.5m**. Enemy behavior can vary.
- Entering the cloud grants concealment, which lasts for about **0.5 seconds** after leaving. Smoke does not make you invulnerable, and already-launched attacks can still hit.

**Duration and charge examples**

- With grenade spawn/fuse start at time zero and no duration modifiers, cloud expiry is approximately `1.5 + 15 = 16.5 seconds`. The smoke itself lasts 15 seconds.
- With [Grenade Tinkerer](#veteran_improved_grenades) as the only duration modifier, the cloud lasts `15 × 2 = 30 seconds`, and the same timeline reaches expiry at approximately `1.5 + 30 = 31.5 seconds`.
- With three charges, no extra-projectile roll and no replenishment, one throw leaves `3 − 1 = 2 grenade charges`.
- Leave an active cloud at time 5s without re-entering: concealment lasts to approximately `5 + 0.5 = 5.5 seconds`; the half-second interval does not prevent incoming damage.

[Detailed sources and formulas](veteran_smoke_grenade.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_smoke_grenade) | [Back to index](#talent-index)

---

<a id="veteran_extra_grenade"></a>

<img src="https://github.com/user-attachments/assets/2bec21d1-d677-4386-942d-2c2697c285d1" width="72" height="72" alt="Grenadier talent icon">

### Grenadier

- Carry **one extra grenade**.
- Each throw has a **20% chance** to throw one additional grenade, while consuming only one inventory grenade. Applies to Shredder Frag Grenade, Krak Grenade and Smoke Grenade.

**Capacity and probability examples**

- With base capacity three and no other capacity modifiers: `3 + 1 = 4 grenades`.
- Start with four charges and trigger the extra grenade on one throw: `4 − 1 = 3` charges remain while `1 + 1 = 2` projectiles are thrown.
- Over ten throws, replenishing as needed, expect `10 × 20% = 2` additional grenades, or twelve projectiles for ten charges on average. Each throw makes its own roll; this does not guarantee one extra every five throws.

The extra projectile has a slightly offset direction and a base-fuse override delayed by 0.3 seconds. Actual Krak collision-fuse timing follows its separate grenade rules.

[Detailed sources and formulas](veteran_extra_grenade.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_extra_grenade) | [Back to index](#talent-index)

---

<a id="veteran_improved_grenades"></a>

<img src="https://github.com/user-attachments/assets/5179b403-3945-41a4-9c68-5278b6968c24" width="72" height="72" alt="Grenade Tinkerer talent icon">

### Grenade Tinkerer

- **Shredder Frag Grenade:** +25% explosion damage and explosion radius; its bleed damage does not receive this explosion bonus.
- **Krak Grenade:** +75% explosion damage.
- **Smoke Grenade:** +100% smoke duration.

**Grenade upgrade examples**

- Isolate this talent with armor, distance/falloff and other damage components fixed. At the affected damage stage, a 500-unit Frag explosion input becomes `500 × 1.25 = 625 damage units`; a 2,400-unit Krak input becomes `2,400 × 1.75 = 4,200 damage units`.
- With no other radius modifiers, Frag inner and outer radii change from `2m → 2 × 1.25 = 2.5m` and `10m → 10 × 1.25 = 12.5m`.
- With no other duration modifiers, Smoke lasts `15 × 2 = 30 seconds`; +100% means twice the duration.
- Holding bleed stacks, armor and other modifiers fixed, a separate 100-unit bleed result remains 100 under this explosion modifier. Actual damage still depends on the enemy and other damage stages.

[Detailed sources and formulas](veteran_improved_grenades.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_improved_grenades) | [Back to index](#talent-index)

---

<a id="veteran_krak_grenade"></a>

<img src="https://github.com/user-attachments/assets/b0967626-73da-49a8-a1b9-1f4d6c1daffa" width="72" height="72" alt="Krak Grenade talent icon">

### Krak Grenade

- Throw a grenade that seeks suitable **Flak Armoured, Carapace Armoured or Unyielding** hit zones and sticks to the target. Base capacity: **three grenades**.
- Collision or sticking starts a roughly **one-second fuse**. Without collision, approximately two seconds of flight precede that fuse.
- The close blast reaches **1.5m** and can penetrate shields; the outer blast extends to **5m**. Damage varies with armor, hit zone, boss status and blast distance.

**Damage and timing examples**

- For the close explosion against a non-boss, ordinary hit zone with no other modifiers: unarmoured damage is **2,400**. With Carapace's armor multiplier of 2, `2,400 × 2 = 4,800 damage units`. Bosses and the outer blast use different conditions.
- Stick at 0.4s after projectile spawn: detonation occurs at approximately `0.4 + 1 = 1.4 seconds`. With no collision, the approximate timeline is `2 + 1 = 3 seconds`.
- Start with three charges, without an extra-projectile roll or replenishment: one throw leaves `3 − 1 = 2 grenade charges`.

[Detailed sources and formulas](veteran_krak_grenade.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_krak_grenade) | [Back to index](#talent-index)

---

<a id="veteran_replenish_grenades"></a>

<img src="https://github.com/user-attachments/assets/511ac082-cbea-4af3-8f8e-3dfeab7ca2bf" width="72" height="72" alt="Demolition Stockpile talent icon">

### Demolition Stockpile


- While below capacity, replenish **one of your own grenades** at a time.

- **Shredder Frag Grenade and Smoke Grenade: approximately 60 seconds per grenade.**

- **Krak Grenade: approximately 90 seconds per grenade.**

- Throwing another grenade preserves the current replenishment countdown. Reaching full capacity clears it; time spent at full capacity does not bank another grenade.

- After replenishing one grenade, start a new interval if you are still below capacity. Grenade capacity upgrades increase how many grenades you can hold; each replenishment still gives one.

- Charge-restoration amount bonuses do not increase this one-grenade grant.

#### Replenishment examples


- **Two missing Shredder Frag Grenades**: with a fixed loadout, no other grenade restoration and no further throws, the first grenade returns after approximately 60 seconds; restoring both takes approximately `60 × 2 = 120 seconds`. You regain two usable throws, one at a time.

- **Another throw during the countdown**: start with one grenade missing. After 30 seconds of its 60-second countdown, throw another. The first replacement still arrives after approximately `60 − 30 = 30 more seconds`; the second takes another approximately 60 seconds. The new throw increases the deficit without restarting the first interval.

- **Two missing Krak Grenades**: under the same assumptions, replenish one after approximately 90 seconds and both after approximately `90 × 2 = 180 seconds`.

- **Full capacity**: if another supply fills your grenades halfway through a countdown, that progress is cleared when full capacity is observed. A later throw starts a fresh full interval.

[Details and source evidence](veteran_replenish_grenades.md) · [Back to index](#talent-index)

<a id="veteran_grenade_apply_bleed"></a>

<img src="https://github.com/user-attachments/assets/6fa67f08-3b19-4bee-8a32-d5815db7297f" width="72" height="72" alt="Shredder Frag Grenade talent icon">

### Shredder Frag Grenade

- A damaging Frag explosion applies **six Bleed stacks** to enemies that survive the hit. Physical contact with the projectile alone does not apply bleed.
- Base capacity: **three grenades**. The fuse is about **1.7 seconds**, with a **2m** high-damage inner blast and **10m** outer blast that loses damage with distance.
- Bleed caps at **16 stacks** and deals damage about every **0.5 seconds**. Reapplication refreshes its **1.5-second** duration; after expiry, stacks fall off over successive ticks rather than all disappearing at once.

**Explosion and bleed examples**

- For a close explosion on an ordinary non-boss hit zone, with no other modifiers: Unarmoured damage is **500**; Carapace's 0.2 armor multiplier gives `500 × 0.2 = 100 damage units`. Bleed is separate.
- Three qualifying explosions against the same surviving enemy, with no decay between grants: `6 → 12 → min(18, 16) = 16 Bleed stacks`.
- Isolate bleed on an Unarmoured target with no other modifiers. At six stacks, `175 × [(6 ÷ 16)² × (3 − 2 × 6 ÷ 16)] × 0.5 ≈ 27.69 damage units per tick`; at sixteen, `175 × 1 × 0.5 = 87.5`. This is bleed alone, not explosion damage or fixed DPS.
- [Grenade Tinkerer](#veteran_improved_grenades) increases the explosion damage and radius, while the separate bleed damage receives no Frag explosion bonus.

[Detailed sources and formulas](veteran_grenade_apply_bleed.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_grenade_apply_bleed) | [Back to index](#talent-index)

---

## Auras

<a id="veteran_increased_damage_coherency"></a>

<img src="https://github.com/user-attachments/assets/9a3da9ac-d8f1-4745-9af6-25852f52834a" width="72" height="72" alt="Fire Team talent icon">

### Fire Team

- Gain **+7.5% Damage** for you and Allies in Coherency.
- Identical Fire Team auras do not stack. This replaces your **Scavenger** aura.

**Damage examples**

- Isolate this aura with a 100-unit damage input and other damage factors held fixed: `100 × (1 + 0.075) = 107.5 damage units`.
- With an existing 25% bonus at the same damage stage, the result changes from `100 × 1.25 = 125` to `100 × (1 + 0.25 + 0.075) = 132.5 damage units`. The increase over 125 is `7.5 ÷ 125 = 6%`.
- With two Veterans providing this same aura and no other same-stage bonus, one effective copy still gives `100 × 1.075 = 107.5 damage units`.

[Detailed sources and formulas](veteran_increased_damage_coherency.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_damage_coherency) | [Back to index](#talent-index)

---

<a id="veteran_movement_speed_coherency"></a>

<img src="https://github.com/user-attachments/assets/f8c278c8-72a1-476c-93d1-6656268ba8e4" width="72" height="72" alt="Close and Kill talent icon">

### Close and Kill

- You and Allies in Coherency gain **+7.5% Movement Speed**.
- Identical copies of this aura do not stack. Selecting it replaces your own **Scavenger** aura.

**Movement examples**

- With a 5 m/s base speed and no other speed bonus, `5 × (1 + 0.075) = 5.375 m/s`.
- At that constant speed, a straight 5m journey changes from `5 ÷ 5 = 1s` to `5 ÷ 5.375 ≈ 0.9302s`: about **6.98% less travel time**. A 7.5% speed increase does not directly mean 7.5% less time.
- Two identical aura providers still give one effective copy: `5 × 1.075 = 5.375 m/s` under the same assumptions.

[Detailed sources and formulas](veteran_movement_speed_coherency.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_movement_speed_coherency) | [Back to index](#talent-index)

---

<a id="veteran_aura_gain_ammo_on_elite_kill_improved"></a>

<img src="https://github.com/user-attachments/assets/c2dffa00-cd24-478f-96c7-4007f4239e6a" width="72" height="72" alt="Survivalist talent icon">

### Survivalist

- When you or an ally with this aura kills an **Elite or Specialist**, a successful aura payout restores **0.5% of maximum reserve ammo** to the killer and their Allies in Coherency.
- The aura has a **5-second cooldown** and replaces your **0.25% Scavenger** aura. It replenishes reserve ammo and does not reload the clip.
- A qualifying kill can use the aura cooldown without replenishing ammo, so each kill is not guaranteed to produce a separate payout. Exact team timing has not been measured in game.
- The Veteran's separate personal **1%** ammo passive is checked independently; its extra gain does not apply to every teammate.

**Ammo examples**

- With maximum reserve 400 and enough capacity, one successful aura payout gives `400 × 0.5% = 2 rounds`.
- With maximum reserve 150, each raw grant is `150 × 0.5% = 0.75 round`. Starting with no saved fraction and no other grants, four successful payouts give **3 rounds** in total; fractions carry forward.
- If the Veteran's 1% personal passive and 0.5% aura both succeed at maximum reserve 400, the Veteran gains `400 × (1% + 0.5%) = 6 rounds`; an ally receiving only this aura gains **2 rounds**.
- Reserve may reach its maximum plus the clip's missing rounds. With maximum reserve 400, ten missing clip rounds and current reserve 409, a two-round grant stops at `min(409 + 2, 400 + 10) = 410 rounds`; it adds one round to reserve.

[Detailed sources and formulas](veteran_aura_gain_ammo_on_elite_kill_improved.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_aura_gain_ammo_on_elite_kill_improved) | [Back to index](#talent-index)

---

## Combat abilities

<a id="veteran_combat_ability_stance"></a>

<img src="https://github.com/user-attachments/assets/61ed9652-570a-48ad-9a3b-4961c131dd36" width="72" height="72" alt="Volley Fire talent icon">

### Volley Fire

- Instantly equip your ranged weapon and enter **Ranged Stance for 6 seconds**. The **30-second** base cooldown starts on activation and continues during the stance.
- Gain **15% ranged damage**, **15% more extra weakspot damage** and **50% ranged impact** while the base stance is active. The weakspot modifier increases the extra component; the whole-hit gain varies with the weapon and target and must also account for the general ranged bonus.
- Reduce **spread by 38%**, **recoil by 24%** and **sway by 60%**, with protection against suppression, stuns, slows and related interruptions while active.
- Switching to melee does not itself end the stance. Being Knocked Down or otherwise disabled ends it.

**Damage and cooldown examples**

- Isolate the general ranged-damage stage with input 100 and no other bonuses: `100 × 1.15 = 115 damage units`.
- Isolate only the extra weakspot modifier, holding the upstream base at 100 and extra component at 40, with no critical hit or other finesse bonuses: `100 + 40 = 140` becomes `100 + 40 × 1.15 = 146 damage units`, about `6 / 140 = 4.29%` more. If the extra component is 100, `200 → 215` gives `15 / 200 = 7.5%` more. These are separate static examples, not the combined ability gain; the general ranged modifier must also be recalculated.
- With no other cooldown effects, after the six-second stance ends, about `30 − 6 = 24 seconds` remain before another use.

**Game description errata**

- The English damage field statically reconstructs as **+25% Ranged Damage**; the installed base ability grants **15%** at that stage.
- Its weakspot field statically reconstructs as **+25% Ranged Weakspot Damage**; the installed base ability grants **15% to the extra weakspot component**. These discrepancies apply to base Volley Fire before upgrades.

[Detailed sources and formulas](veteran_combat_ability_stance.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_stance) | [Back to index](#talent-index)

---

<a id="veteran_invisibility_on_combat_ability"></a>

<img src="https://github.com/user-attachments/assets/0f9d7c51-7e6a-4f3d-a367-5c22d0adf308" width="72" height="72" alt="Infiltrate talent icon">

### Infiltrate

- **Immediately replenish all your Toughness and enter Stealth for up to 8 seconds.** Base cooldown: **40 seconds**.
- Gain **25% movement speed** during Stealth. Gain **30% damage** during Stealth and for **8 seconds after leaving it**.
- Ordinary shooting, melee hits, throwing a grenade or completing a rescue interaction can end Stealth early. Existing bleeding/burning damage-over-time ticks do not end Stealth solely because of their damage ticks.
- Leaving Stealth applies stagger and suppression to enemies within about **6 metres**; it does not guarantee knockback on every enemy. Cooldown starts on use and continues during Stealth.

#### Recovery, damage and timing examples

Assume one use, no other recovery/damage/cooldown modifiers, no overlapping ability bonuses, and normal successful recovery; times ignore frame boundaries.

- **Toughness 30/100**: replenish to 100, restoring `100 − 30 = 70 points`.
- **Isolated damage bonus**: a hypothetical 100-damage baseline becomes `100 × 1.3 = 130 damage units`, with no later modifiers.
- **Leave Stealth at about 3 seconds**: the damage bonus lasts until about `3 + 8 = 11 seconds` after use. About `40 − 11 = 29 seconds` remain on the unmodified cooldown then.

[Details, exit exceptions and source evidence](veteran_invisibility_on_combat_ability.md) · [Back to index](#talent-index)

<a id="veteran_reduced_threat_after_combat_ability"></a>

<img src="https://github.com/user-attachments/assets/7a72c16f-0170-458e-9bd4-4d585cf523d3" width="72" height="72" alt="Low Profile talent icon">

### Low Profile

- Combat ability use reduces the affected enemy target-selection weight by **90%**.
- With [Infiltrate](#veteran_invisibility_on_combat_ability), the effect is active **during Stealth**, then remains for **10 seconds after leaving it**.
- The effect does not stack. Once its ten-second countdown has begun, another application does not restart that countdown.
- This changes target-selection weight. It does not mean you have only a 10% chance of being attacked; other conditions can still make an enemy choose you.

#### Threat and timing examples

- Holding other target-selection conditions constant, an original weight of 100 becomes `100 × (1 − 90%) = 10 weight units`. This is a score calculation, not an attack-probability calculation.
- Leaving Infiltrate at about 3 seconds keeps the effect until about `3 + 10 = 13 seconds` after activation, ignoring update-frame boundaries.

[Detailed sources and formulas](veteran_reduced_threat_after_combat_ability.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_reduced_threat_after_combat_ability) | [Back to index](#talent-index)

---

<a id="veteran_combat_ability_elite_and_special_outlines"></a>

<img src="https://github.com/user-attachments/assets/f89a6abd-27a9-4099-9a5c-cd778cbe34ba" width="72" height="72" alt="Executioner's Stance talent icon">

### Executioner's Stance

- Upgrade Volley Fire's **ranged damage and extra weakspot modifiers from 15% to 25% each**, and **ranged impact from 50% to 100%**. The damage modifiers each gain ten percentage points; the weakspot bonus still applies to the extra component.
- The stance lasts **6 seconds**, with a **30-second** base cooldown. Replenish **10% of maximum Toughness per second**, subject to recovery modifiers and the amount missing.
- Highlight eligible human-sized Elites and Specialists. Ogryns, Monsters and bosses require the additional large-enemy outline modifier. Ordinary eligible Elites must be **less than 50 metres** away when outline candidates are built; Specialists bypass this distance limit.
- Your kills of enemies eligible for the selected outline categories **reset the stance to six seconds**. Recharge continues; spread, recoil, sway and interruption protection are inherited from Volley Fire.

**Damage, recovery and refresh examples**

- General damage stage only, input 100 and no other modifiers: base `100 × 1.15 = 115` becomes `100 × 1.25 = 125 damage units`, about `10 / 115 = 8.70%` more.
- Extra weakspot upgrade only, fixed upstream base 100 and unbonused extra component 40, with no critical hit or other finesse bonuses: `146 → 150 damage units`, about `4 / 146 = 2.74%` more. The detailed example shows substitution. These isolated gains cannot be added together; general ranged damage must also be recalculated for a complete hit.
- Maximum Toughness 100, at least 60 points missing and no recovery modifier: `100 × 10% = 10 points/s`, giving up to `10 × 6 = 60 points` over an uninterrupted six seconds.
- A qualifying kill at 4s resets the remaining two seconds to six: expiry becomes about `4 + 6 = 10s`. It does not become eight seconds remaining. With no cooldown modifier, baseline recharge still ends at about 30s, leaving about `30 − 10 = 20s` after this stance ends.

[Detailed sources and formulas](veteran_combat_ability_elite_and_special_outlines.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_elite_and_special_outlines) | [Back to index](#talent-index)

---

<a id="veteran_combat_ability_coherency_outlines"></a>

<img src="https://github.com/user-attachments/assets/2afc79fa-02f2-4943-b4e7-abe35435f7bd" width="72" height="72" alt="Enhanced Target Priority talent icon">

### Enhanced Target Priority

- When Executioner's Stance starts or refreshes, grant **allies currently in your Coherency** a **five-second** Elite/Specialist outline effect. The owner is excluded from this shared grant.
- Each ally's own position determines range: ordinary eligible Elites must be **less than 50 metres** away; Specialists bypass this distance restriction. Additional shooter, Ogryn, Monster and boss outlines are not shared by this effect.
- The grant happens once at stance start or refresh. Allies who enter Coherency later wait for the next grant; it is not continuously reapplied. A new grant refreshes the single instance's timer rather than stacking effects.

**Timing and range examples**

- An ally present at activation gets an effect lasting to about `0 + 5 = 5s`. If a qualifying stance refresh grants it again at 4s, the remaining `5 − 4 = 1s` resets to five seconds: expiry becomes about `4 + 5 = 9s`. This assumes no further grants and ignores frame/visual offsets.
- An ally entering Coherency at 2s does not receive the initial grant. If present for the next grant at 4s, they receive five seconds, ending at about 9s.
- From an ally's position, an ordinary eligible Elite at 49m passes `49² / 50² = 0.9604 < 1`; exactly 50m gives `1` and fails the strict boundary. At 55m, an ordinary Elite has a ratio of `1.21` and fails the `< 1` condition, while a Specialist bypasses this test.

**Game description erratum**

- The English duration field statically reconstructs as **6 seconds**; the shared ally outline effect is configured for **5 seconds**.

[Detailed sources and formulas](veteran_combat_ability_coherency_outlines.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_coherency_outlines) | [Back to index](#talent-index)

---

<a id="veteran_combat_ability_ranged_roamer_outlines"></a>

<img src="https://github.com/user-attachments/assets/ca186661-9499-4f3f-9449-596caa35b7b6" width="72" height="72" alt="Counter-Fire talent icon">

### Counter-Fire

- Add eligible ordinary shooter and stalker types, such as **Scab Shooters** and **Dreg Stalkers**, to Executioner's Stance outlines. These non-Special candidates must be **less than 50 metres** away when the outline list is built or updated.
- Your kills of these added eligible types also **refresh the selected stance duration**: normally **6 seconds**, or **9 seconds** with the large-enemy outline modifier.
- The kill check does not require a ranged attack, a weakspot hit, an actual visible outline or another 50-metre distance check. This modifier supplies **no additional weakspot-damage bonus**.

**Timing and range examples**

- Activate the normal stance at time 0 and make a qualifying kill at 4s: `6 − 4 = 2s` remaining resets to six seconds, so expiry becomes about `4 + 6 = 10s`. With the nine-second master, `9 − 4 = 5s` remaining resets to nine, ending at about `4 + 9 = 13s`. Assume no later refresh and ignore frame/visual offsets.
- An ordinary eligible shooter at 49m passes `49² / 50² = 0.9604 < 1`; exactly 50m gives `1` and fails the strict boundary. A target at 55m fails the outline test with a ratio of `1.21`, but a qualifying owner kill at 4s can still refresh the normal stance to about time 10s.

The description's broad **all human-sized Ranged Enemies** wording has not been matched to a complete enemy set; the concrete eligibility and examples are detailed below.

[Detailed sources and formulas](veteran_combat_ability_ranged_roamer_outlines.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_ranged_roamer_outlines) | [Back to index](#talent-index)

---

<a id="veteran_toughness_bonus_leaving_invisibility"></a>

<img src="https://github.com/user-attachments/assets/0c033c93-a850-4295-853d-10698ec96e89" width="72" height="72" alt="Hunter's Resolve talent icon">

### Hunter's Resolve

- **Starting Infiltrate reduces Toughness damage taken by 50%.** The reduction is active during Stealth and for **10 seconds after leaving it**.
- **Damage example**: an attack otherwise causing 100 Toughness damage causes `100 × 0.5 = 50` while this effect is active, with no other reduction factors. The effect does not reduce health damage or increase maximum Toughness.
- **Timing examples**: remain in Stealth for 8 seconds and the total coverage is about `8 + 10 = 18 seconds`; attack to leave at about 2 seconds and coverage lasts until about `2 + 10 = 12 seconds` after activation. These examples ignore frame boundaries.
- **Multiple uses**: if extra uses or a shorter cooldown make two instances overlap, each keeps its own timer and their factors multiply. A 100-Toughness-damage attack becomes `100 × 0.5 × 0.5 = 25`, under the same isolated assumptions. An already started countdown continues if you re-enter Stealth.

[Details and source evidence](veteran_toughness_bonus_leaving_invisibility.md) · [Back to index](#talent-index)

<a id="veteran_elite_kills_reduce_cooldown"></a>

<img src="https://github.com/user-attachments/assets/57d6b442-9cee-45c3-ba74-4a191649eddb" width="72" height="72" alt="Tactical Awareness talent icon">

### Tactical Awareness

- Killing a **Specialist Enemy** grants **3 seconds** of combat ability recovery. With the unmodified recovery rate, gain **one additional second of cooldown progress per second**, delivered through extra ticks. Ordinary Elite kills do not trigger it.
- Another qualifying kill resets the effect's duration to 3 seconds while its existing tick cadence continues. The extra recovery rate does not stack.
- With no other recovery/cost effects, enough missing resource and 25 seconds remaining when triggered, after about 3 seconds the natural cooldown advances 3 seconds and the talent adds another 3: `25 − 3 − 3 = 19 seconds remaining`. This is not an instant six-second reduction on the kill.
- Recovery beyond full ability capacity is discarded. With two ability uses, recovery continues toward any use still missing until both are full.

[Detailed sources and formulas](veteran_elite_kills_reduce_cooldown.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_elite_kills_reduce_cooldown) | [Back to index](#talent-index)

---

<a id="veteran_combat_ability_stagger_nearby_enemies"></a>

<img src="https://github.com/user-attachments/assets/73961902-95ea-4316-bda1-13b23dac1789" width="72" height="72" alt="Voice of Command talent icon">

### Voice of Command

- Shout to apply stagger to enemies within **9 metres** and immediately **replenish your Toughness to maximum**.
- The base cooldown is **40 seconds**, starting when you use the ability, before other cooldown or recovery effects.
- With maximum Toughness 100 and 30 remaining, restore `100 − 30 = 70 points` to return to **100 Toughness**. The base self-recovery does not refill teammates without an ally-recovery modifier.
- An enemy at 8 metres is inside the configured radius; one at 10 metres is outside it. The actual stagger reaction depends on enemy type and current state, so this is not a universal fixed-duration control guarantee.

[Detailed sources and formulas](veteran_combat_ability_stagger_nearby_enemies.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_stagger_nearby_enemies) | [Back to index](#talent-index)

---

<a id="veteran_combat_ability_revive_nearby_allies"></a>

<img src="https://github.com/user-attachments/assets/a8bcdde1-34e3-449d-9b46-e9130865b285" width="72" height="72" alt="Only In Death Does Duty End talent icon">

### Only In Death Does Duty End

- [Voice of Command](#veteran_combat_ability_stagger_nearby_enemies) automatically revives **Knocked Down allies within 9 metres**. One use can revive multiple eligible allies without holding a manual assistance interaction for each one.
- This checks the **Knocked Down** state. Allies netted or pinned by an enemy, hanging from an edge, or awaiting rescue after death are not eligible for this automatic revive.
- Without other radius, cost or recovery modifiers, the radius is **9 metres** and the base cooldown is **40 seconds**. Two Knocked Down allies at 5m and 8m are both within range; one at 10m is outside.

[Detailed sources and formulas](veteran_combat_ability_revive_nearby_allies.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_revive_nearby_allies) | [Back to index](#talent-index)

---

<a id="veteran_increased_weakspot_power_after_combat_ability"></a>

<img src="https://github.com/user-attachments/assets/fc16005a-fb09-4db6-bd15-e18d45c6d935" width="72" height="72" alt="Marksman talent icon">

### Marksman

- Combat ability use increases the attack power of **melee and ranged weakspot hits by 20%** for **10 seconds**. With [Infiltrate](#veteran_invisibility_on_combat_ability), it is active **during Stealth**, then for **10 seconds after leaving it**.
- This increases the weakspot hit's power before damage and impact are calculated. [Precision Strikes](#veteran_increased_weakspot_damage) instead increases the extra weakspot damage component. Actual damage gain still depends on the weapon, target and existing power bonuses.
- **Power example:** with the default curve and no other power bonuses, 500 power becomes `500 × 1.20 = 600`. The weakspot hit's base damage and impact inputs can increase.
- **Base-damage example:** under the stated unarmored, linear default-profile assumptions, excluding extra finesse and later modifiers, 100 damage becomes 120. With an existing 25% additive power bonus, 125 becomes `100 × (1 + 0.25 + 0.20) = 145`: `(145 − 125) / 125 = 16%` more than that baseline. The complete weakspot hit still needs its extra damage and hit-location calculations.
- **Impact example:** the isolated default input rises from 5 to 6; this does not guarantee 20% longer stagger, which also depends on the target's resistance and thresholds.
- The effect does not stack. An already-started ten-second countdown is not restarted by another application: reapplying at about 4 seconds still ends near the original 10-second deadline, ignoring frame boundaries.
- A weakspot hit is required. This modifier does not increase the cleave budget or add cleave/penetration targets through that calculation.

#### Game description erratum

The original English says that, with Infiltrate, the effect **“is applied after leaving Stealth.”** It is already applied during Stealth; leaving it starts the separate ten-second countdown.

[Detailed sources and formulas](veteran_increased_weakspot_power_after_combat_ability.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_weakspot_power_after_combat_ability) | [Back to index](#talent-index)

---

<a id="veteran_combat_ability_increase_and_restore_toughness_to_coherency"></a>

<img src="https://github.com/user-attachments/assets/56d61b06-dd20-4832-8293-0220d1f3960c" width="72" height="72" alt="Duty and Honour talent icon">

### Duty and Honour

- Using [Voice of Command](#veteran_combat_ability_stagger_nearby_enemies) grants you and allies in Coherency **75 additional maximum Toughness for 10 seconds**. Current Toughness also rises by 75 points; the caster then refills to the enlarged maximum.
- With an ordinary maximum of 100 and current Toughness 30, an ally's current Toughness becomes `30 + 75 = 105 points`, yielding **105/175 Toughness**. The caster's personal refill instead gives **175/175**. Assume no other modifiers or intervening damage/recovery.
- On expiry, current Toughness is kept up to the restored maximum. If the maximum returns to 100, **160/175 becomes 100/100**, while **60/175 becomes 60/100**.
- Each overlapping grant provides its own 75 points and ten-second duration. With no other modifiers, two active grants raise a 100-point maximum to `100 + 75 + 75 = 250 points`.
- The 75-point maximum bonus is added after percentage modifiers. For base 100 with an existing 20% maximum bonus and no other flat bonus, `100 × 1.20 + 75 = 195 maximum Toughness`.

[Detailed sources and formulas](veteran_combat_ability_increase_and_restore_toughness_to_coherency.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_increase_and_restore_toughness_to_coherency) | [Back to index](#talent-index)

---

<a id="veteran_increased_close_damage_after_combat_ability"></a>

<img src="https://github.com/user-attachments/assets/1181fe6e-4066-4d75-b996-a0eb01d7583d" width="72" height="72" alt="Close Quarters Killzone talent icon">

### Close Quarters Killzone

- Combat ability use grants a close damage bonus for **10 seconds**. With [Infiltrate](#veteran_invisibility_on_combat_ability), the effect is active **during Stealth**, then for **10 seconds after leaving it**.
- Gain **15%** at distances up to **12.5 metres**. Beyond 12.5 metres, the bonus fades by a square-root curve, reaching zero at **30 metres**. Both close melee and ranged attacks can benefit.
- With a 100-damage baseline at the affected stage and no other bonuses or downstream modifiers, damage within 12.5m becomes `100 × 1.15 = 115`. At 16.875m, the contribution is `15% × (1 − sqrt((16.875 − 12.5) / 17.5)) = 7.5%`, giving **107.5 damage units**.
- With an existing 25% additive bonus at the same stage, close damage is `100 × (1 + 0.25 + 0.15) = 140`, compared with 125 beforehand: **12% more** than that already-bonused baseline.
- The effect does not stack. Reapplying during an already-started ten-second countdown does not restart it.

#### Game description erratum

The original English says that, with Infiltrate, the effect **“begins on leaving Stealth.”** It actually starts during Stealth; leaving Stealth starts its separate ten-second countdown.

[Detailed sources and formulas](veteran_increased_close_damage_after_combat_ability.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_close_damage_after_combat_ability) | [Back to index](#talent-index)

---

<a id="veteran_combat_ability_extra_charge"></a>

<img src="https://github.com/user-attachments/assets/29160cac-e32b-4037-bc8c-3a0765e3a6df" width="72" height="72" alt="Overwatch talent icon">

### Overwatch

- **Infiltrate gains one extra stored use**, raising its capacity from **one to two**.

- **Without other cooldown or recovery effects, each fully missing use takes 33% longer to refill**: about **53.2 seconds**, compared with 40 seconds before this modifier.

- Both uses share recharge progress and **refill one after the other**. Spending the second use preserves the progress already accumulated toward the next one.

- Recovery begins after casting creates a deficit and continues during stealth under ordinary conditions.

#### Recharge examples

Assume no other cooldown effects, pauses or additional restoration, unchanged loadout, and normal one-charge usage.

- **One full use missing**: `40 × (1 + 33%) = 53.2 seconds`.

- **Two full uses missing, starting at zero progress**: the first returns near **53.2 seconds**; both return near `53.2 × 2 = 106.4 seconds`.

- **Use the second charge 20 seconds after the first**: the accumulated 20 seconds remain. The next charge needs about `53.2 − 20 = 33.2 more seconds`.

These times are resource-model calculations. Fixed updates and rounding can shift the precise moment a charge becomes available.

[Details and source evidence](veteran_combat_ability_extra_charge.md) · [Back to index](#talent-index)

## Keystones

<a id="veteran_combat_ability_ogryn_outlines"></a>

<img src="https://github.com/user-attachments/assets/0df9e7bd-7394-4f93-ba54-f8f6d2884d02" width="72" height="72" alt="The Bigger they Are ... talent icon">

### The Bigger they Are ...

- Increase Executioner's Stance's full duration from **6 to 9 seconds**, and add **Ogryn, Captain and Monstrosity** outline categories, including Cultist Captains.
- At activation or candidate refresh, ordinary non-Special targets must be **less than 50 metres** away. Specialists bypass this distance filter.
- Your qualifying kills of the added eligible types **reset the stance to a full nine seconds**, without requiring an actual visible outline or another distance test.
- This modifier does not supply an additional damage bonus against these enemy categories. Enhanced Target Priority's shared ally outlines still use their separate **five-second**, Elite/Special effect; the extra large-enemy categories are not shared by it.

**Duration, refresh and range examples**

- The nominal duration gains `9 − 6 = 3 seconds`, or `3 / 6 = 50%` more time. This is a duration comparison, not a damage increase.
- Activate at time 0 and make a qualifying kill at 7s: the remaining `9 − 7 = 2s` resets to nine, so expiry becomes about `7 + 9 = 16s`. Assume no later refresh and ignore frame/visual offsets.
- An ordinary eligible large enemy at 49m passes `49² / 50² = 0.9604 < 1`; exactly 50m gives `1` and fails the strict boundary. A Specialist bypasses this test.

[Detailed sources and formulas](veteran_combat_ability_ogryn_outlines.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_ogryn_outlines) | [Back to index](#talent-index)

---

<a id="veteran_snipers_focus"></a>

<img src="https://github.com/user-attachments/assets/4376889f-d2eb-4efe-836a-5e0ce5ae27f4" width="72" height="72" alt="Marksman's Focus talent icon">

### Marksman's Focus

- **Ranged weakspot kills add three Focus stacks**, up to **10 effective stacks** for the base skill.

- Each stack grants **7.5% ranged finesse strength** and **1% reload speed**. Finesse strengthens the extra component on ranged critical or weakspot hits; it does not increase the whole hit by that fixed percentage.

- While Focus is active, **any weakspot hit refreshes its shared five-second timer**, including a melee weakspot hit. Nonlethal hits refresh existing stacks without adding new ones.

- Without another weakspot hit, Focus loses one effective stack approximately every five seconds. Movement, crouching or landing does not directly add or remove stacks in this version.

#### Damage and reload examples

Assume the same ranged weakspot hit and target, no other bonuses or later damage changes, and illustrative base damage `100` plus an unmodified extra component `40`.

- **10 stacks**: before `100 + 40 = 140`; after `100 + 40 × (1 + 10 × 0.075) = 170`. Gain **30 damage units**, or `30 / 140 ≈ 21.43%` of the whole hit.

- With equal base and extra components of `100`, the same 10 stacks give `100 + 100 × 1.75 = 275`, compared with 200 before: **37.5% more whole-hit damage**. The component's size changes the final benefit.

- For an affected reload action with a hypothetical **four-second** baseline, no other speed factors and no limit binding, 10 stacks give `4 / 1.10 ≈ 3.64 seconds`. The **10% speed increase saves about 0.36 seconds**, or **9.09% of the time**.

- With exactly three stacks after the last refresh, no further weakspot hits or forced removal, two remain after approximately **5 seconds**, one after **10 seconds**, and the effect ends after **15 seconds**. Update timing makes these intervals approximate.

[Details, optional branches and source evidence](veteran_snipers_focus.md) · [Back to index](#talent-index)

<a id="veteran_snipers_focus_increased_stacks"></a>

<img src="https://github.com/user-attachments/assets/426b1945-b7fc-40e8-9db1-3bda08514bab" width="72" height="72" alt="Long Range Assassin talent icon">

### Long Range Assassin

- **Raise Marksman's Focus's effective cap from 10 to 15 stacks.**

- Each stack's effects and timer rules stay the same. If you also select the related Rending modifier, its threshold remains **10 stacks**.

- At 15 stacks, gain `15 × 7.5% = 112.5%` ranged finesse strength and `15 × 1% = 15%` reload speed. Finesse strengthens the extra component of ranged critical or weakspot hits; it does not make the entire hit deal 112.5% more damage.

#### Full-stack examples

Assume a noncritical ranged weakspot hit with base component 100 and unmodified extra component 40, no other bonuses or later damage changes.

- **Compared with zero stacks**: `100 + 40 = 140` becomes `100 + 40 × 2.125 = 185` damage units. The entire hit gains `45 / 140 ≈ 32.14%`.

- **Compared with the old 10-stack cap**: `100 + 40 × 1.75 = 170` becomes 185. The extra five stacks add `15 / 170 ≈ 8.82%` damage in this example.

- **Reload time**: for an affected action with a hypothetical four-second baseline, no other speed factors and no binding limit, `4 / 1.15 ≈ 3.48 seconds`. This saves about **13.04% of the time**, not 15%.

[Details and source evidence](veteran_snipers_focus_increased_stacks.md) · [Back to index](#talent-index)

<a id="veteran_snipers_focus_rending_bonus"></a>

<img src="https://github.com/user-attachments/assets/136d0a92-5459-4218-a2b3-324f367ba69d" width="72" height="72" alt="Chink in their Armour talent icon">

### Chink in their Armour

- **At 10 or more Focus stacks, gain 15% Rending.** It is removed below 10 stacks or when Focus ends.
- With [Long Range Assassin](#veteran_snipers_focus_increased_stacks), the threshold remains **10 stacks**.
- Rending improves applicable armor damage multipliers. Its damage benefit depends on the weapon, target armor and existing Rending.

#### Armor and damage examples

Compare only this talent's Rending. Assume a noncritical hit that does not hit a weakspot, 100 damage units before armor, a Carapace target with the stated original armor multiplier, no other modifiers or later multipliers, and no cap binding.

- **Original armor multiplier 0.5**: `100 × 0.5 = 50` becomes `100 × (0.5 + 0.15) = 65` damage units, a `15 / 50 = 30%` increase.
- **Original armor multiplier 0.8**: 80 becomes `100 × (0.8 + 0.15) = 95` damage units, a `15 / 80 = 18.75%` increase.
- **Existing 10% Rending with original multiplier 0.5**: `100 × (0.5 + 0.1) = 60` becomes `100 × (0.5 + 0.1 + 0.15) = 75` damage units. This addition gives `15 / 60 = 25%` more damage.
- **Ranged critical or weakspot hits**: include the extra damage component and Marksman's Focus's finesse bonus as well. These armor-stage examples do not represent the total gain from ten Focus stacks or a fixed gain for every build.

[Details and source evidence](veteran_snipers_focus_rending_bonus.md) · [Back to index](#talent-index)

<a id="veteran_snipers_focus_toughness_bonus"></a>

<img src="https://github.com/user-attachments/assets/62660bca-751b-435a-9d60-48590aadd37f" width="72" height="72" alt="Tunnel Vision talent icon">

### Tunnel Vision

- **Each effective Focus stack increases applicable Toughness replenishment by 4%.** Gaining stacks does not directly restore Toughness; an existing recovery event receives the bonus.
- **Ranged weakspot kills restore 10% of maximum Stamina.** The actual return is limited by missing Stamina.
- Applicable Toughness recovery benefits from the modifier; effects that explicitly ignore recovery stat buffs do not. Toughness and Stamina cannot exceed their respective maximums.

#### Recovery examples

- **Toughness**: an event normally restoring 20 points, five effective stacks, no other recovery modifiers and enough missing Toughness gives `20 × (1 + 5 × 0.04) = 24 points`. With one stack, it gives `20 × 1.04 = 20.8 points`.
- **Stamina**: maximum Stamina 6 gives a requested `6 × 10% = 0.6 units` per qualifying ranged weakspot kill. If only 0.2 is missing, the actual return is **0.2 units**.

[Details and source evidence](veteran_snipers_focus_toughness_bonus.md) · [Back to index](#talent-index)

<a id="veteran_weapon_switch_passive"></a>

<img src="https://github.com/user-attachments/assets/80917bab-ea62-4a9a-a0fa-f9b443ee1b0b" width="72" height="72" alt="Weapons Specialist talent icon">

### Weapons Specialist

- **While holding a melee weapon:** your kills store up to 10 Ranged Specialist stacks. Switch to a ranged weapon to consume them. Each stack grants **2% Ranged Attack Speed and 2% Reload Speed for up to 10 seconds**, plus **33 percentage points of Ranged Critical Hit Chance on your next shot**.
- After the first shot, the extra critical chance is removed; the attack/reload speed bonuses remain. Some automatic weapons can retain an already-rolled critical burst result, so later bullets in that burst are not necessarily noncritical. Switching away from the ranged weapon ends this buff early.
- **While holding a ranged weapon:** your kills store up to one Melee Specialist stack. Switch to melee to consume it for **15% Melee Attack Speed, 10% Dodge Speed and 10% Dodge Distance for up to 10 seconds**. Switching away from melee ends this buff early.
- The stored side depends on the weapon held when the enemy dies, including kills from damage over time or an earlier-thrown grenade. With no stored stack, switching does not create the corresponding buff.

#### Critical chance, time and distance examples

Assume the required stacks are stored, the relevant buff is active and no other modifiers change. The critical examples refer to the first shot before the extra chance is consumed.

- **One ranged stack, starting 10% critical chance:** `10% + 33 percentage points = 43%`.
- **Three ranged stacks, starting 10% critical chance:** `min(10% + 3 × 33 percentage points, 100%) = 100%`; the unclamped sum is 109%. This does not guarantee a new roll for every automatic-burst bullet.
- **Ten ranged stacks:** `10 × 2% = 20%` Ranged Attack Speed and Reload Speed. With other time-scale factors at 1 and no binding limit, an illustrative 3-second reload becomes `3 / 1.20 = 2.5 seconds`, saving 0.5 seconds (16.67%).
- **Melee Specialist:** under the same timing assumptions, an illustrative 1-second affected melee action becomes `1 / 1.15 ≈ 0.87 seconds`, about 13.04% less time.
- **Dodge distance:** assuming a 3-metre starting distance and no other distance modifier, `3 × 1.10 = 3.3 metres`, a 0.3-metre gain. Actual weapon timings and dodge behavior vary.

[Detailed sources and formulas](veteran_weapon_switch_passive.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_weapon_switch_passive) | [Back to index](#talent-index)

---

<a id="veteran_weapon_switch_replenish_toughness"></a>

<img src="https://github.com/user-attachments/assets/a6e24eb8-063a-45a5-8796-acde81d1f734" width="72" height="72" alt="On Your Toes talent icon">

### On Your Toes

- **Activating Melee Specialist or Ranged Specialist restores 20% of maximum Toughness.** You need at least one stored stack for that side, then switch to the corresponding weapon. The amount is per activation and does not grow with stack count.
- Each weapon direction has its **own 3-second cooldown**. Switching still consumes the relevant stored stacks if that side's cooldown blocks recovery.
- Normal Toughness recovery modifiers affect the grant, which cannot exceed missing Toughness. The timer check requires more than 3 seconds since the side's prior recovery timestamp; exact boundary behavior depends on update timing.

#### Recovery examples

Assume a qualifying activation, its cooldown check passes and recovery is allowed. Maximum Toughness is 100 points.

- **At 70/100, no recovery modifier:** `100 × 20% = 20 points`, reaching 90/100.
- **At 90/100, no recovery modifier:** only `100 − 90 = 10 points` are missing, so actual recovery is 10 and you reach 100/100.
- **At 70/100 with an illustrative applicable +25% recovery modifier:** `100 × 20% × 1.25 = 25 points`, reaching 95/100. Extra stored stacks do not multiply these amounts.

[Detailed sources and formulas](veteran_weapon_switch_replenish_toughness.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_weapon_switch_replenish_toughness) | [Back to index](#talent-index)

---

<a id="veteran_weapon_switch_replenish_ammo"></a>

<img src="https://github.com/user-attachments/assets/842c2a40-8bb4-45fa-a1e2-672fedf80d78" width="72" height="72" alt="Always Prepared talent icon">

### Always Prepared

- **Activating Ranged Specialist transfers ammo from your Reserve into your Clip.** Store Weapons Specialist ranged stacks, then switch to the ranged weapon; up to 10 stacks count.
- The requested amount is `ceil(missing Clip ammo × 0.33 × stacks / 10)`. Calculate the current Clip deficit and stack amount first, then round the total up.
- The transfer cannot exceed available Reserve ammo or missing Clip ammo. Clip gains exactly what Reserve loses, and the activation consumes the stored ranged stacks.

#### Transfer examples

Assume a qualifying ranged activation and a Clip missing 30 rounds. For this illustrative weapon, one ammo unit is one round.

- **5 stacks, enough Reserve:** `ceil(30 × 0.33 × 5 / 10) = ceil(4.95) = 5 rounds` transferred; Reserve loses 5 and Clip gains 5.
- **10 stacks, enough Reserve:** `ceil(30 × 0.33) = ceil(9.9) = 10 rounds` transferred; Reserve loses 10 and Clip gains 10.
- **10 stacks, only 3 rounds in Reserve:** the request is 10, but `min(10, 30, 3) = 3 rounds` transfer. Reserve reaches 0 and the Clip still lacks 27 rounds.

[Detailed sources and formulas](veteran_weapon_switch_replenish_ammo.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_weapon_switch_replenish_ammo) | [Back to index](#talent-index)

---

<a id="veteran_weapon_switch_replenish_stamina"></a>

<img src="https://github.com/user-attachments/assets/bc2a44d8-866d-4f29-a680-f84e98b72b01" width="72" height="72" alt="Invigorated talent icon">

### Invigorated

- **Activating Melee Specialist restores 20% of maximum Stamina** and grants **25% stamina-cost reduction for 3 seconds**. First store a Weapons Specialist melee stack, then switch to the melee weapon.
- Recovery stops at maximum Stamina. The cost reduction continues until its own expiry even if you switch weapons again. A new qualifying activation restores stamina again and refreshes the 3-second reduction instead of stacking it.

#### Recovery and cost examples

Assume maximum Stamina is 6 points and the activation has a stored Melee Specialist stack.

- **At 3/6 Stamina:** `6 × 20% = 1.2 points` restored, giving `4.2/6`.
- **At 5.5/6 Stamina:** only `6 − 5.5 = 0.5 points` can be restored, giving `6/6`.
- **An otherwise 2-point action cost:** with other cost factors equal to 1, `2 × (1 − 25%) = 1.5 points`, saving 0.5 points during the effect.

[Detailed sources and formulas](veteran_weapon_switch_replenish_stamina.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_weapon_switch_replenish_stamina) | [Back to index](#talent-index)

---

<a id="veteran_improved_tag"></a>

<img src="https://github.com/user-attachments/assets/85048589-7642-40e7-9d4b-ab325da2ea25" width="72" height="72" alt="Focus Target! talent icon">

### Focus Target!

- **Start with 1 stored stack and gain 1 every 1.5 seconds, up to 4.** Tag an enemy to apply your stored stacks, increasing damage it takes from you and your allies. A new or stronger application resets storage to 1.
- **Each applied stack multiplies damage taken by 1.05.** At four stacks, an otherwise 100-point hit becomes `100 × 1.05^4 ≈ 121.55 damage`, about 21.55% more. Reaching four stored stacks from the initial one takes about `(4 − 1) × 1.5 = 4.5 seconds`.
- Maintain one marked target for 25 seconds. Re-tagging the same enemy refreshes that timer; if storage exceeds its applied stacks, add only the difference. Natural storage gains do not automatically strengthen the target. Tagging a different enemy removes your old target's debuff.
- **Upgrade example:** a target with 2 stacks and storage of 4 gains `4 − 2 = 2`, reaching 4; storage then resets to 1. If storage is only 1, the target stays at 2 and only the timer refreshes.
- **No-reset example:** re-tag a four-stack target with three stored stacks: the target stays at 4, storage stays at 3 and the timer refreshes.
- If your currently marked enemy dies before expiry, storage becomes at least 2: `max(current storage,2)`. A higher amount is preserved, and you do not need the killing blow.

**Game-description erratum:** the English says tagging resets storage to 1 without stating an exception. Same-target re-tags that add no stacks only refresh the timer and preserve storage; the reset follows a new or stronger application.

[Detailed sources and formulas](veteran_improved_tag.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_improved_tag) | [Back to index](#talent-index)

---

<a id="veteran_improved_tag_more_damage"></a>

<img src="https://github.com/user-attachments/assets/a95c5ea6-546f-462d-a073-56f9d1a21103" width="72" height="72" alt="Focused Fire talent icon">

### Focused Fire

- **Increase Focus Target's maximum stored stacks from 4 to 6.** Stack gain stays at one every 1.5 seconds, and each applied stack still multiplies target damage taken by 1.05.
- **Accumulation:** from the initial one stack, reaching six takes about `(6 − 1) × 1.5 = 7.5 seconds`. Stored gains do not automatically upgrade the marked enemy; tag again to apply the stronger amount.
- **Damage example:** with an otherwise 100-point result and other target multipliers equal to 1, six applied stacks give `100 × 1.05^6 ≈ 134.01 damage`; four give about 121.55. The six-stack result is 10.25% higher than the four-stack result.
- **Optional combinations:** with Target Down!, a six-stack marked death gives a nominal recovery amount of 30% of maximum Toughness and Stamina, subject to recovery limits. With Redirect Fire!, its damage-buff cap becomes six stacks, contributing 15% to its damage stat. These require the respective modifier as well as Focused Fire.

[Detailed sources and formulas](veteran_improved_tag_more_damage.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_improved_tag_more_damage) | [Back to index](#talent-index)

---

<a id="veteran_improved_tag_dead_bonus"></a>

<img src="https://github.com/user-attachments/assets/47cc6995-f2fa-407d-9cb0-4dd91fcdc10d" width="72" height="72" alt="Target Down! talent icon">

### Target Down!

- **When your currently marked enemy dies, you and allies in Coherency recover Toughness and Stamina.** You do not need the killing blow.
- Each stack actually applied to that enemy restores **5% of each recipient's maximum Toughness and Stamina**. Stored stacks that have not been applied do not count. Recovery stops at each resource's maximum; this Toughness reward ignores general Toughness-replenishment stat bonuses.
- **Four-stack example:** with maximum Toughness 100, current 50, maximum Stamina 6 and current 2, the 20% reward gives `100 × 20% = 20 Toughness` and `6 × 20% = 1.2 Stamina`, resulting in `70/100` and `3.2/6`.
- **Near-full example:** at `95/100` Toughness and `5.8/6` Stamina, the same request restores only 5 Toughness and 0.2 Stamina, reaching both maxima.
- **With Focused Fire:** six applied stacks request `6 × 5% = 30%`, or 30 Toughness and 1.8 Stamina at those maxima with sufficient deficits. Two applied stacks still request only 10%, even if you have six stored stacks.
- If the mark expires or you mark another enemy first, the previous target's death no longer triggers this reward.

[Detailed sources and formulas](veteran_improved_tag_dead_bonus.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_improved_tag_dead_bonus) | [Back to index](#talent-index)

---

<a id="veteran_improved_tag_dead_coherency_bonus"></a>

<img src="https://github.com/user-attachments/assets/48ecea96-bdaa-49e6-b9b7-ee3ac26fc1c5" width="72" height="72" alt="Redirect Fire! talent icon">

### Redirect Fire!

- **When your currently marked enemy dies, you and allies in Coherency gain damage for 10 seconds.** You do not need the killing blow. Each Focus Target stack actually applied to the enemy grants one damage-buff stack, worth **2.5% damage**.
- **Accumulate and refresh:** further qualifying marked deaths add stacks to the existing buff and reset the duration to 10 seconds. Effective stacks normally cap at 4; another reward can refresh the timer at the cap. A lower-stack enemy does not replace the existing stronger bonus with its lower count.
- **Damage examples:** four stacks contribute `4 × 2.5% = 10%`; an otherwise 100-point result becomes `100 × (1+0.10)=110`. With an existing same-stage 25% bonus, it becomes `100 × (1+0.25+0.10)=135`, an 8% gain from the previous 125.
- **Refresh example:** gain two stacks at 0 seconds, then one more at 6 seconds: three effective stacks remain until about `6+10=16 seconds`, assuming no later reward.
- **With Focused Fire:** the effective cap becomes 6, contributing up to `6 × 2.5% = 15%` to the damage stat. An expired or replaced mark cannot grant a new reward from its former target.

[Detailed sources and formulas](veteran_improved_tag_dead_coherency_bonus.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_improved_tag_dead_coherency_bonus) | [Back to index](#talent-index)

---

## Passive talents

<a id="veteran_ammo_increase"></a>

<img src="https://github.com/user-attachments/assets/4087a451-e4ae-429b-afe6-75369e2903f3" width="72" height="72" alt="Fully Loaded talent icon">

### Fully Loaded

- Increase **maximum reserve ammo by 25%**.
- This does not increase magazine capacity. Fractional rounds are rounded down, and weapon/network ammo limits still apply.

**Capacity examples**

- With no other capacity bonus and a hard limit above the result, a 100-round base maximum becomes `floor(100 × 1.25) = 125 rounds`.
- A 150-round base maximum gives `floor(150 × 1.25) = floor(187.5) = 187 rounds`.
- At base 100 with an existing 20% bonus at the same additive stage, maximum reserve changes from `100 × 1.20 = 120` to `100 × (1 + 0.20 + 0.25) = 145 rounds`. The new gain over 120 is `25 ÷ 120 ≈ 20.83%`; the magazine is unaffected by this talent.

[Detailed sources and formulas](veteran_ammo_increase.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_ammo_increase) | [Back to index](#talent-index)

---

<a id="veteran_clip_size"></a>

<img src="https://github.com/user-attachments/assets/6632d16b-faac-444e-8139-99057e2f613a" width="72" height="72" alt="Lock and Load talent icon">

### Lock and Load

- Increase **magazine capacity by 25%**.
- Fractional rounds are rounded down. This does not directly increase maximum reserve ammo; magazine hard limits still apply.

**Capacity examples**

With no other magazine-size modifier and a hard limit above the result:

- A 40-round base magazine becomes `floor(40 × 1.25) = 50 rounds`.
- A 7-round base magazine gives `floor(7 × 1.25) = floor(8.75) = 8 rounds`.

**Game description erratum**

- The English tooltip says **“rounded up”**. The implementation rounds down: the 7-round example gives **8 rounds**, rather than 9.

[Detailed sources and formulas](veteran_clip_size.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_clip_size) | [Back to index](#talent-index)

---

<a id="veteran_faster_reload_on_non_empty_clips"></a>

<img src="https://github.com/user-attachments/assets/a5b64063-ac9d-404d-98ac-528f24aafb65" width="72" height="72" alt="Tactical Reload talent icon">

### Tactical Reload

- Start reloading with ammo in the magazine to gain **+25% Reload Speed** for that reload.
- Starting with an empty magazine does not activate the bonus.

**Reload action examples**

- Isolate an affected reload action with a 4-second baseline and no other speed modifier: `4 ÷ 1.25 = 3.2s`. It saves **0.8s**, or **20%** of that action’s baseline time; +25% speed does not mean 25% less time.
- If an empty-start action has its own 4-second baseline, this talent adds no speed bonus: `4 ÷ 1 = 4s`.

Weapon-specific phases and interruptions can change the complete reload sequence; these examples isolate the affected action.

[Detailed sources and formulas](veteran_faster_reload_on_non_empty_clips.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_faster_reload_on_non_empty_clips) | [Back to index](#talent-index)

---

<a id="veteran_reload_speed_on_elite_kill"></a>

<img src="https://github.com/user-attachments/assets/009ef44a-cf3d-44cf-ac8b-cda57c6fd83d" width="72" height="72" alt="Volley Adept talent icon">

### Volley Adept

- Kill an Elite or Specialist enemy to gain **+30% Reload Speed** for your next reload.
- Repeated qualifying kills do not bank additional reload uses.
- The pending use is spent when the reload actually adds ammunition; the speed bonus stays active until that reload ends.

**Reload action examples**

- With a pending use, a hypothetical 4-second affected reload action and no other speed bonuses: `4 ÷ 1.30 ≈ 3.08s`. That saves about **0.92s**, or **23.08%** of this action’s time.
- With **Tactical Reload** also active from starting with ammo in the magazine: `4 ÷ (1 + 0.30 + 0.25) ≈ 2.58s`. The speed bonuses add together.

These calculations isolate a speed-affected action; weapon-specific phases and the ammo-insertion point can change the complete reload sequence.

[Detailed sources and formulas](veteran_reload_speed_on_elite_kill.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_reload_speed_on_elite_kill) | [Back to index](#talent-index)

---

<a id="veteran_rending_bonus"></a>

<img src="https://github.com/user-attachments/assets/cc7841b0-9637-4d35-8bca-c2c418798875" width="72" height="72" alt="Rending Strikes talent icon">

### Rending Strikes

- Your weapons gain **10% Rending**.
- Rending improves damage against affected armor types. Unarmoured targets receive no adjustment from this Rending armor effect.
- The gain depends on the weapon’s original armor damage modifier and existing Rending; it does not mean a fixed 10% increase to the whole hit.

**Armor-stage damage examples**

Assume a noncritical, non-weakspot hit with 100 damage before armor, a Carapace target, no existing Rending and no other bonuses or later multipliers.

- At an original armor modifier of **0.50**: `100 × 0.50 = 50` becomes `100 × (0.50 + 0.10) = 60 damage`. The relative gain is **20%**.
- At an original armor modifier of **1.00**, excess Rending contributes at one-quarter strength: `100 × (1 + 0.10 × 0.25) = 102.5 damage`, a **2.5%** gain.
- Critical and weakspot hits add further damage components; these armor-only percentages do not give their complete hit increase.

[Detailed sources and formulas](veteran_rending_bonus.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_rending_bonus) | [Back to index](#talent-index)

---

<a id="veteran_reduced_toughness_damage_in_coherency"></a>

<img src="https://github.com/user-attachments/assets/139120eb-e9c5-41ea-b87c-bf4737b53f49" width="72" height="72" alt="Close Order Drill talent icon">

### Close Order Drill

- Gain **11% Toughness Damage Reduction per teammate in Coherency**, up to **33% with three teammates**. You do not count as your own teammate.
- The benefit changes with the current teammate count when allies enter or leave Coherency.

**Toughness damage examples**

Assume 100 incoming Toughness damage before these reductions and no other modifiers.

- One teammate: `100 × 0.89 = 89 Toughness damage`.
- Two teammates: `100 × 0.78 = 78 Toughness damage`.
- Three teammates: `100 × 0.67 = 67 Toughness damage`.
- With three teammates and **Iron Will already active** as well: `100 × 0.67 × 0.50 = 33.5 Toughness damage`. That is 66.5% less than the stated baseline. This example assumes its above-75%-Toughness condition has already activated.

The teammate benefits form one multiplier; separate active reductions multiply with it.

[Detailed sources and formulas](veteran_reduced_toughness_damage_in_coherency.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_reduced_toughness_damage_in_coherency) | [Back to index](#talent-index)

---

<a id="veteran_tdr_on_high_toughness"></a>

<img src="https://github.com/user-attachments/assets/d56c3a6f-0fed-4e37-bb08-aa3c87f5624d" width="72" height="72" alt="Iron Will talent icon">

### Iron Will

- While current Toughness is **above 75% of your maximum**, take **50% less Toughness damage**.
- Exactly 75% does not satisfy the condition. Recovering above the threshold allows the effect to activate again.

**Threshold and Toughness damage examples**

- With **200 maximum Toughness**, the threshold is `200 × 0.75 = 150`: current Toughness must be **greater than 150**. Exactly 150 does not qualify.
- Assume Iron Will is already active and no other reductions: `40 × 0.50 = 20 Toughness damage`.
- With a separate **10% reduction** also active: `40 × 0.50 × 0.90 = 18 Toughness damage`. This is a 55% combined reduction from the stated 40-damage baseline.

The exact activation frame when Toughness crosses the threshold has not been measured; these examples assume the effect has already activated.

[Detailed sources and formulas](veteran_tdr_on_high_toughness.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_tdr_on_high_toughness) | [Back to index](#talent-index)

---

<a id="veteran_increase_damage_vs_elites"></a>

<img src="https://github.com/user-attachments/assets/915cdbef-5b88-4d3b-a4f1-e29e8a8f0f07" width="72" height="72" alt="Superiority Complex talent icon">

### Superiority Complex

- Deal **15% more base damage to Elite enemies** with eligible melee and ranged attacks.
- Enemies that are only classified as Specialists, without the Elite classification, do not qualify.
- This passive bonus applies while you have the talent; repeated hits do not build additional stacks.

**Additive damage examples**

Assume an eligible Elite, 100 damage before the stated additive stage, unchanged attack conditions and no later damage multipliers.

- With no other bonus at this stage: `100 × (1 + 0.15) = 115 damage`.
- With an existing **25% bonus at the same stage**: `125` becomes `100 × (1 + 0.25 + 0.15) = 140 damage`. That adds **15 damage**, a **12%** increase over 125.
- Against a Specialist-only or other non-Elite target, this talent adds no damage: the isolated 100-damage baseline remains 100.

These examples cover the shared damage calculation; special damage sources and additional modifiers can require separate treatment.

[Detailed sources and formulas](veteran_increase_damage_vs_elites.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increase_damage_vs_elites) | [Back to index](#talent-index)

---

<a id="veteran_big_game_hunter"></a>

<img src="https://github.com/user-attachments/assets/fc1e80c9-c17b-4e96-909d-bab403221f03" width="72" height="72" alt="Bring it Down! talent icon">

### Bring it Down!

- Gain **+20% damage against Ogryns and Monstrosities** with melee and ranged attacks.
- Eligibility follows the enemy’s Ogryn or Monster classification, rather than visual size.

**Additive damage examples**

Assume a qualifying target, 100 damage before this additive stage and no other or later modifiers.

- This talent alone: `100 × (1 + 0.20) = 120 damage`.
- With an existing **15% bonus at the same stage**: `115` becomes `100 × (1 + 0.15 + 0.20) = 135 damage`. That adds **20 damage**, about **17.39%** more than 115.
- A hypothetical target with neither qualifying classification receives no bonus from this talent, even if it looks large.

The bonus joins the existing damage stage; the complete hit’s increase can vary with other modifiers.

[Detailed sources and formulas](veteran_big_game_hunter.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_big_game_hunter) | [Back to index](#talent-index)

---

<a id="veteran_increased_damage_when_flanking"></a>

<img src="https://github.com/user-attachments/assets/e836f77f-9bb2-4b87-938a-3bab63656ff1" width="72" height="72" alt="Covert Operative talent icon">

### Covert Operative

- Gain **+30% damage on ranged attacks from the enemy’s rear half-plane**.
- The exact side boundary does not count; melee attacks do not receive this bonus.

**Damage examples**

Assume the preceding damage calculation has produced 100 damage and there is no additional backstab damage or other flanking bonus.

- A qualifying ranged hit: `100 + 100 × 0.30 = 130 damage`.
- A ranged hit exactly on the side boundary or from the front gains no bonus from this talent; the prior 100 remains 100.
- A melee hit from behind also gains no bonus from this talent; with no other backstab bonus, the prior 100 remains 100.

This calculation adds the flanking contribution to the prior damage result; it is separate from general damage bonuses applied earlier.

[Detailed sources and formulas](veteran_increased_damage_when_flanking.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_damage_when_flanking) | [Back to index](#talent-index)

---

<a id="veteran_increased_melee_crit_chance_and_melee_finesse"></a>

<img src="https://github.com/user-attachments/assets/7be19cb4-a1cb-4211-b9f2-d754f3c95b6c" width="72" height="72" alt="Desperado talent icon">

### Desperado

- **Add 10 percentage points to melee critical hit chance.**
- **Gain +25% on the extra-damage multiplier for melee critical or weakspot hits.**
- The bonus affects the extra component; the whole-hit increase varies with the weapon and target. A hit that is both critical and a weakspot hit receives this bonus once.

**Critical chance and damage examples**

- With an existing melee critical hit chance of 10% and no other changes: `10% + 10 percentage points = 20%`.
- Assume a non-critical melee weakspot hit with a base component of 100 damage, an unmodified extra component of 40 damage and no other modifiers: `100 + 40 = 140` becomes `100 + 40 × 1.25 = 150 damage`, a whole-hit increase of about **7.14%**.
- Under the same assumptions with an extra component of 100 damage, `200` becomes `100 + 100 × 1.25 = 225 damage`, a **12.5%** increase.

These examples compare single-hit weakspot damage. Average damage over repeated attacks also depends on critical chance, weakspot hit rate and attack data.

[Detailed sources and formulas](veteran_increased_melee_crit_chance_and_melee_finesse.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_melee_crit_chance_and_melee_finesse) | [Back to index](#talent-index)

---

<a id="veteran_all_kills_replenish_toughness"></a>

<img src="https://github.com/user-attachments/assets/d6402640-110e-4d25-b1b3-780a49b1c4e1" width="72" height="72" alt="Out for Blood talent icon">

### Out for Blood

- **Each kill restores an additional 5% of maximum Toughness.**
- Melee and ranged kills can trigger the effect; restoration cannot exceed maximum Toughness.

**Restoration examples**

Assume maximum Toughness of 100 and no other restoration bonuses.

- If at least 5 Toughness is missing, `100 × 5% = 5 Toughness` is restored.
- At `98 / 100`, actual restoration is `min(5, 100 − 98) = 2 Toughness`, bringing current Toughness to 100.

[Detailed sources and formulas](veteran_all_kills_replenish_toughness.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_all_kills_replenish_toughness) | [Back to index](#talent-index)

---

<a id="veteran_increase_damage_after_sprinting"></a>

<img src="https://github.com/user-attachments/assets/dca385d7-a54e-4bf5-b67d-f3d29ef82234" width="72" height="72" alt="Skirmisher talent icon">

### Skirmisher

- **Sprinting or sliding builds damage stacks: +6.25% per stack, up to 4 stacks.**
- Continuous movement builds about one stack per second. After a pause, starting to sprint again usually takes about half a second to obtain the next stack; initial buildup can take about one second.
- Stacking applications refresh the **shared 10-second duration**, including while already at four stacks. After refreshing stops, the bonus is lost when that duration expires.

**Stack and damage examples**

Assume base damage 100 and only this bonus, with no armor or later modifiers.

- One active stack: `100 × (1 + 0.0625) = 106.25 damage`.
- Four active stacks: `6.25% × 4 = 25%`, giving `100 × (1 + 4 × 0.0625) = 125 damage`.

The stacks add into this damage multiplier. Actual final damage depends on the weapon, target and other modifiers.

[Detailed sources and formulas](veteran_increase_damage_after_sprinting.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increase_damage_after_sprinting) | [Back to index](#talent-index)

---

<a id="veteran_crits_apply_rending"></a>

<img src="https://github.com/user-attachments/assets/fd178238-be59-4c18-8631-12423f5506fb" width="72" height="72" alt="Exploit Weakness talent icon">

### Exploit Weakness

- **Melee critical hits grant +20% Damage for 6 seconds.**
- Melee and ranged attacks can benefit while the effect is active. Further melee critical hits refresh the duration without stacking the bonus.

**Damage and duration examples**

- Assume the effect is already active, base damage 100 and no other damage bonuses, armor or later modifiers: `100 × 1.20 = 120 damage`.
- If a qualifying melee critical hit triggers at 0 seconds and another at 4 seconds, the refreshed period lasts until about `4 + 6 = 10 seconds`; it retains the 20% bonus.

[Detailed sources and formulas](veteran_crits_apply_rending.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_crits_apply_rending) | [Back to index](#talent-index)

---

<a id="veteran_movement_speed_towards_downed"></a>

<img src="https://github.com/user-attachments/assets/a882268c-6f4f-42ee-8973-a64dd6e882e7" width="72" height="72" alt="Leave No One Behind talent icon">

### Leave No One Behind

- **Looking toward an ally who needs help grants +20% Movement Speed and Stun Immunity.**
- The ally must lie within approximately 60° either side of your look direction. You do not need to be moving toward them.
- **Reviving, pulling up a hanging ally, removing a net and rescuing are 20% faster.**
- **An ally you revive receives 33% Damage Reduction for 5 seconds.**

**Speed and reduction examples**

Assume the effects are eligible and there are no other relevant modifiers.

- With the movement condition active, a base speed of 5 m/s becomes `5 × 1.20 = 6 m/s`.
- An uninterrupted rescue interaction that originally takes 6 seconds becomes `6 / 1.20 = 5 seconds`—about 16.67% less time.
- During the revived ally’s five-second reduction, 100 incoming damage becomes `100 × 0.67 = 67 damage`.

**English description correction**

The original English says “when moving towards” an ally. The verified condition is **looking toward an ally who requires help**; actual movement toward that ally is not required.

[Detailed sources and formulas](veteran_movement_speed_towards_downed.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_movement_speed_towards_downed) | [Back to index](#talent-index)

---

<a id="veteran_dodging_grants_crit"></a>

<img src="https://github.com/user-attachments/assets/980ba0fa-2a34-4f97-b592-05651671933b" width="72" height="72" alt="Reciprocity talent icon">

### Reciprocity

- **Each successful dodge of an attack adds 5 percentage points of Critical Hit Chance, up to 5 stacks.**
- The bonus lasts **8 seconds**. Another successful dodge refreshes the shared duration; the bonus is lost when that duration expires.
- Simply performing a dodge without avoiding an attack does not add a stack.

**Critical chance examples**

Assume a starting critical hit chance of 10% and no other critical chance changes.

- Three active stacks: `10% + 3 × 5 percentage points = 25%`.
- Five active stacks: `10% + 5 × 5 percentage points = 35%`.

These are additive percentage points, not a relative 5% increase per stack.

[Detailed sources and formulas](veteran_dodging_grants_crit.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_dodging_grants_crit) | [Back to index](#talent-index)

---

<a id="veteran_kill_grants_damage_to_other_slot"></a>

<img src="https://github.com/user-attachments/assets/a7c3f5a6-113a-404a-873d-985481ec316b" width="72" height="72" alt="Agile Engagement talent icon">

### Agile Engagement

- **Melee kills grant +25% Ranged Damage; ranged kills grant +25% Melee Damage.**
- Each bonus lasts **6 seconds**. Both can be active together; a kill of the same type refreshes its corresponding timer without adding a stack.

**Damage and duration examples**

- Assume the applicable bonus is already active, base damage 100 and no other damage bonuses, armor or later modifiers: `100 × 1.25 = 125 damage`.
- With melee kills at 0 and 4 seconds, and no intervening removal, the Ranged Damage bonus is refreshed until about `4 + 6 = 10 seconds`; it remains 25%.

Each effect applies to its own damage type, so having both active does not apply two 25% multipliers to the same hit.

[Detailed sources and formulas](veteran_kill_grants_damage_to_other_slot.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_kill_grants_damage_to_other_slot) | [Back to index](#talent-index)

---

<a id="veteran_hits_cause_bleed"></a>

<img src="https://github.com/user-attachments/assets/8378bd8a-7c90-41fd-83c7-40c135c75caa" width="72" height="72" alt="Serrated Blade talent icon">

### Serrated Blade

- **A damaging melee hit applies 2 Bleed stacks to a target that survives the hit.**
- Bleed caps at **16 stacks** and deals damage about every **0.5 seconds**. Reapplication refreshes a **1.5-second timer**; after it expires without reapplication, each subsequent tick removes one stack.

**Stack and damage examples**

- Ignoring stack loss between eligible hits, four hits build `2 × 4 = 8 stacks`.
- For the recorded Bleeding profile against an unarmored target, with no other modifiers, eight active stacks deal `175 × [(8 / 16)² × (3 − 2 × 8 / 16)] × 0.5 = 43.75 damage per tick`. The 0.5 factor is this example’s unarmored armor multiplier.
- Under the same assumptions, two active stacks deal about **3.76 damage per tick**. Bleed follows a nonlinear curve; eight-stack damage is not four times two-stack damage.

Actual tick damage varies with armor, the damage profile and other modifiers. These examples do not give total damage over a decaying stack sequence.

[Detailed sources and formulas](veteran_hits_cause_bleed.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_hits_cause_bleed) | [Back to index](#talent-index)

---

<a id="veteran_continous_hits_apply_rending"></a>

<img src="https://github.com/user-attachments/assets/0801494c-4548-4fcb-afe7-8a7c563ef396" width="72" height="72" alt="Onslaught talent icon">

### Onslaught

- **Repeated eligible hits on the same living enemy apply one Brittleness stack each, starting with the second hit.**
- Each stack adds **2.5% Rending**, up to **16 stacks (40%)**. Other teammates attacking the target can also benefit.
- Both melee and ranged attacks qualify; each shot or swing processes at most its first eligible hit. Bleed and other damage-over-time ticks do not add stacks.
- The effect lasts **5 seconds**; adding a stack refreshes the shared timer. Switching enemies restarts the hit sequence. A miss alone does not clear the tracked target.

**Stack and damage examples**

- Five separate eligible hits on one enemy, without expiry, build four stacks: the first starts tracking and the next four give `4 × 2.5% = 10% Rending`.
- For the next hit with four stacks already present, assume a non-critical, non-weakspot hit, 100 damage before armor, an initial Carapace armor multiplier of 0.5 and no other Rending or later modifiers. Damage changes from `100 × 0.5 = 50` to `100 × (0.5 + 0.10) = 60`, a `(60 − 50) / 50 = 20%` increase.
- With 16 stacks already present under the same assumptions, `100 × (0.5 + 0.40) = 90 damage`, an `(90 − 50) / 50 = 80%` increase.

These gains depend on the weapon, target armor and existing modifiers. A 40% Rending stat does not give every attack 40% more final damage. The examples concern the next hit after buildup, not the hit that created a stack.

[Detailed sources and formulas](veteran_continous_hits_apply_rending.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_continous_hits_apply_rending) | [Back to index](#talent-index)

---

<a id="veteran_replenish_toughness_outside_melee"></a>

<img src="https://github.com/user-attachments/assets/19c86987-5e48-4eeb-9385-33697b9d99b0" width="72" height="72" alt="Catch a Breath talent icon">

### Catch a Breath

- **After more than 5 seconds without receiving a melee hit, regenerate 5% of maximum Toughness per second.**
- Receiving another melee hit interrupts recovery and restarts the wait. An enemy approaching, your own melee attack or a received ranged hit does not by itself interrupt this effect.

**Recovery examples**

- With maximum Toughness 100, enough missing Toughness and no other recovery modifiers, the rate is `100 × 5% = 5 Toughness per second`. Over two seconds of active regeneration, the requested recovery is about `5 × 2 = 10 Toughness`.
- At 98/100 Toughness, recovery is capped at `100 − 98 = 2 Toughness`.

The percentage uses maximum Toughness, not the missing amount.

[Detailed sources and formulas](veteran_replenish_toughness_outside_melee.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_replenish_toughness_outside_melee) | [Back to index](#talent-index)

---

<a id="veteran_bonus_crit_chance_on_ammo"></a>

<img src="https://github.com/user-attachments/assets/4193f147-bd40-49f8-92d4-a2b83fa1ad5b" width="72" height="72" alt="Opening Salvo talent icon">

### Opening Salvo

- **With at least 80% of your clip ammunition remaining, gain 10 percentage points of Ranged Critical Hit Chance.**
- You must be wielding the ranged weapon. Reserve ammunition does not affect the threshold.

**Threshold and critical chance examples**

- For a 30-round clip, `30 × 80% = 24 rounds`: the condition is active at 24 rounds and inactive at 23.
- With an initial ranged critical chance of 10% and no other changes, the active bonus gives `10% + 10 percentage points = 20%`.

The bonus increases critical chance; it does not guarantee critical hits or a fixed final damage gain. The clip-state example does not specify the order of ammunition consumption and the critical roll during a shot.

[Detailed sources and formulas](veteran_bonus_crit_chance_on_ammo.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_bonus_crit_chance_on_ammo) | [Back to index](#talent-index)

---

<a id="veteran_ranged_power_out_of_melee"></a>

<img src="https://github.com/user-attachments/assets/8cc616f0-d225-4b5f-81a4-8780f478d471" width="72" height="72" alt="Kill Zone talent icon">

### Kill Zone

- **After more than 8 seconds without receiving a melee hit, gain +15% Base Ranged Damage.**
- A qualifying melee hit interrupts the effect and restarts the wait. An enemy approaching, your own melee attack or a received ranged hit does not by itself interrupt it.
- Once active, the bonus has no automatic eight-second expiry.

**Damage examples**

- The bonus adds to other same-category damage bonuses. With base damage 100 and no other damage modifiers, `100 × (1 + 15%) = 115 damage`.
- With an existing 25% same-category bonus, damage changes from `100 × 1.25 = 125` to `100 × (1 + 25% + 15%) = 140`. That adds 15 damage and gives a `(140 − 125) / 125 = 12%` increase at this isolated stage.

Actual final damage also depends on armor, damage profiles, weakspot/critical effects and other modifiers. The eight-second value is the wait before activation, rather than the duration of the active bonus.

[Detailed sources and formulas](veteran_ranged_power_out_of_melee.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_ranged_power_out_of_melee) | [Back to index](#talent-index)

---

<a id="veteran_no_ammo_consumption_on_lasweapon_crit"></a>

<img src="https://github.com/user-attachments/assets/cba2a46d-298c-434a-883d-e048f5ede32d" width="72" height="72" alt="Shock Trooper talent icon">

### Shock Trooper

- **Critical shots with an eligible Las-weapon consume no ammunition.**
- You must be holding the weapon with at least **one round** in its clip. The critical shot does not need to hit an enemy. An empty clip cannot fire through this effect.
- Noncritical shots consume ammunition as usual.

**Ammunition examples**

- Assuming one round normally consumed per shot and exactly three critical shots in ten shots, with enough ammunition and no other cost effects, total consumption is `(10 − 3) × 1 + 3 × 0 = 7 rounds`, saving 3 rounds.
- With one round remaining, an eligible critical shot uses zero rounds and leaves `1 − 0 = 1 round`, even if it misses. This effect does not refill the clip or let it fire from empty.

[Detailed sources and formulas](veteran_no_ammo_consumption_on_lasweapon_crit.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_no_ammo_consumption_on_lasweapon_crit) | [Back to index](#talent-index)

---

<a id="veteran_increased_ranged_cleave"></a>

<img src="https://github.com/user-attachments/assets/ba2f9f5e-0466-433d-a93d-68b1f9606dd7" width="72" height="72" alt="Withering Fire talent icon">

### Withering Fire

- **Increase ranged attack cleave capacity by 50%.**
- How many enemies a shot penetrates still depends on the weapon and each enemy’s resistance. The bonus does not directly increase damage against one target.

**Penetration example**

- Assuming a base penetration budget of 6 units and only this bonus, `6 × (1 + 50%) = 9 units`.
- The larger budget handles more penetration resistance; it does not guarantee exactly 50% more enemies hit. The assumed base value of 6 is an example, not a shared value for every weapon.

[Detailed sources and formulas](veteran_increased_ranged_cleave.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_ranged_cleave) | [Back to index](#talent-index)

---

<a id="veteran_allies_in_coherency_share_toughness_gain"></a>

<img src="https://github.com/user-attachments/assets/1a08688e-e370-4eac-a27e-fd48da3b3965" width="72" height="72" alt="Born Leader talent icon">

### Born Leader

- **Increase your Coherency radius by 50%.**
- When you trigger Toughness recovery, each other ally in Coherency receives **20% of the amount originally requested**.
- The sharing basis remains that requested amount even when your own Toughness fills before all of it can be restored. Each ally’s recovery modifiers and Toughness cap still apply.
- Shared Toughness cannot be shared again.

**Radius and recovery examples**

- Assuming a starting Coherency radius of 8 metres and no other radius bonuses, `8 × 1.5 = 12 metres`.
- A recovery request of 20 Toughness when you are missing only 2 restores 2 to you, but each eligible ally’s base recovery request remains `20 × 20% = 4 Toughness`.
- An ally with an additional 25% recovery bonus and enough missing Toughness can recover `4 × 1.25 = 5 Toughness`, capped at their own maximum.

[Detailed sources and formulas](veteran_allies_in_coherency_share_toughness_gain.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_allies_in_coherency_share_toughness_gain) | [Back to index](#talent-index)

---

<a id="veteran_better_deployables"></a>

<img src="https://github.com/user-attachments/assets/aba3bef3-ec36-4b94-8097-95a2f43d593e" width="72" height="72" alt="Field Improvisation talent icon">

### Field Improvisation

- **Team Ammo Crates refill eligible Grenades.** A class whose special rule prevents grenade pickups cannot receive that supply.
- **Medi-Packs heal 100% faster and replenish 1% of maximum Toughness per second.** Crates placed by teammates can receive these benefits.
- Medi-Packs also remove eligible Corruption, but cannot restore already lost full Health segments. Their healing radius, reserve and lifetime are unchanged. Downed healing still has its separate reduced rate.

**Supply and recovery examples**

- With a grenade capacity of 4 and 1 remaining, an eligible Ammo Crate replenishes `4 − 1 = 3 Grenades`.
- With maximum Health 200, while standing and without other healing modifiers, the base rate is `200 × 6% = 12 Health/s`; the improved rate is `200 × 6% × 2 = 24 Health/s`. With enough missing Health and removable Corruption, this can remove `24 × 0.5 = 12 Health` of Corruption per second, subject to the lost-segment limit.
- With maximum Toughness 150 and enough missing Toughness, recovery is `150 × 1% = 1.5 Toughness/s`, capped at your maximum. The medical crate must still have reserve and time remaining.

[Detailed sources and formulas](veteran_better_deployables.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_better_deployables) | [Back to index](#talent-index)

---

<a id="veteran_replenish_toughness_and_boost_allies"></a>

<img src="https://github.com/user-attachments/assets/8c1dadf2-9263-4efa-a710-9da08a41eb3e" width="72" height="72" alt="Covering Fire talent icon">

### Covering Fire

- **A ranged kill can restore 15% of maximum Toughness to one ally near the victim and grant that ally +15% base damage for 6 seconds.** You cannot receive your own effect.
- Reapplication refreshes the damage bonus’s duration without stacking.
- The initial search radius is 8 metres. A selection defect means the final recipient is not guaranteed to be the closest ally or even inside that radius.

**Recovery and damage examples**

- If the only eligible ally is 5 metres from the victim and has maximum Toughness 200, the base recovery is `200 × 15% = 30 Toughness`. If they are missing only 10, actual recovery is capped at 10.
- Isolating this damage bonus, a starting base-damage value of 100 becomes `100 × 1.15 = 115` for 6 seconds. Other bonuses and later damage calculations affect final hit damage.
- If selection encounters an ally at 5 metres before an ally at 20 metres, the first squared distance is 25. The next test becomes `20² < 25²`, or `400 < 625`, so the more distant ally can be chosen. Actual traversal order has not been measured in game.

**Game-description errata**

- The stated 8-metre limit is not guaranteed for the final recipient because of the squared-distance selection defect.

[Detailed sources and formulas](veteran_replenish_toughness_and_boost_allies.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_replenish_toughness_and_boost_allies) | [Back to index](#talent-index)

---

<a id="veteran_ally_kills_increase_damage"></a>

<img src="https://github.com/user-attachments/assets/284f479c-7f5d-463f-bf50-1003d34b9f5b" width="72" height="72" alt="Competitive Urge talent icon">

### Competitive Urge

- **Ally kills have a 2.5% chance to grant you +20% base damage, melee impact and suppression for 8 seconds.**
- This talent has no Coherency or distance requirement.
- The effect does not stack. A new proc resets its 8-second duration.

**Damage and chance examples**

- Isolating this damage bonus on a starting value of 100 gives `100 × 1.2 = 120`. Other bonuses and later damage calculations affect final hit damage.
- Across 40 qualifying opportunities with the stated chance, the expected proc count is `40 × 2.5% = 1`. This does not guarantee a proc after 40 kills.
- If the effect triggers at time 0 and again at 6 seconds, with no later proc, its expiry moves from about `0 + 8 = 8 seconds` to `6 + 8 = 14 seconds`; it remains one stack.

[Detailed sources and formulas](veteran_ally_kills_increase_damage.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_ally_kills_increase_damage) | [Back to index](#talent-index)

---

<a id="veteran_elite_kills_replenish_toughness"></a>

<img src="https://github.com/user-attachments/assets/706a5b5b-5f7b-43bc-bbd0-7debf024671b" width="72" height="72" alt="Confirmed Kill talent icon">

### Confirmed Kill

- **Kill an Elite or Specialist to immediately recover 10% of maximum Toughness.**
- Each kill also adds a recovery effect that restores **2% of maximum Toughness per second for 10 seconds**, for a further 20% over its full duration.
- Effects from different kills recover independently and can overlap; each lasts 10 seconds from its own start. All recovery is capped at your maximum Toughness.

**Toughness recovery examples**

- With maximum Toughness 100, no other recovery modifiers and enough missing Toughness throughout, one kill restores `100 × 10% = 10` immediately and `100 × 2% × 10 = 20` over time: an ideal total of **30 Toughness**.
- While two effects overlap, their combined rate is `100 × 2% × 2 = 4 Toughness/s`. When one reaches its own 10-second expiry, the remaining effect continues at `100 × 2% = 2 Toughness/s` until its own expiry. These are static rates; actual recovery stops at the maximum.

[Detailed sources and formulas](veteran_elite_kills_replenish_toughness.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_elite_kills_replenish_toughness) | [Back to index](#talent-index)

---

<a id="veteran_increased_damage_based_on_range"></a>

<img src="https://github.com/user-attachments/assets/f7517509-e85f-47fb-b775-234a6aa0950a" width="72" height="72" alt="Longshot talent icon">

### Longshot

- **Gain +10% ranged damage at and below 12.5 metres.**
- Beyond that distance, an additional bonus increases along a square-root curve, reaching **+25% total ranged damage at 30 metres**. The bonus does not increase further beyond 30 metres.
- The total is the close-range 10% plus up to 15% more from distance. Other bonuses and later damage calculations affect final hit damage.

**Distance and damage examples**

- Isolating this talent on a starting value of 100: at or below 12.5 metres, `100 × 1.10 = 110`; at or beyond 30 metres, `100 × 1.25 = 125`.
- At 21.25 metres, the distance ratio is `(21.25 − 12.5) / (30 − 12.5) = 0.5`. The result is `100 × [1 + 10% + 15% × sqrt(0.5)] ≈ 120.61`. These examples exclude other modifiers and later damage processing.

[Detailed sources and formulas](veteran_increased_damage_based_on_range.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_damage_based_on_range) | [Back to index](#talent-index)

---

<a id="veteran_ads_drain_stamina"></a>

<img src="https://github.com/user-attachments/assets/e65e3909-4dac-413f-827d-f5db9138e5e2" width="72" height="72" alt="Deadshot talent icon">

### Deadshot

- **While using ranged alternate fire with Stamina remaining, gain 25 percentage points of critical chance and 60% less Sway.**
- Also reduce spread by 19% and recoil by 12%. Sway and recoil are separate effects.
- Alternate fire spends **0.33 Stamina points per second**, plus **0.1 points per shooting event**. A shotgun’s individual pellets are not separate shooting costs. The bonuses end when Stamina is exhausted.

**Stamina and critical-chance examples**

- With enough Stamina, no regeneration or other costs, 5 seconds of alternate fire and 10 shots spend `0.33 × 5 + 0.1 × 10 = 2.65 Stamina points`.
- An initial 10% critical chance becomes `10% + 25 percentage points = 35%`.
- A normalized Sway magnitude of 1 becomes `1 × 0.4 = 0.4`, a 60% reduction; this does not replace the separate 12% recoil reduction.

[Detailed sources and formulas](veteran_ads_drain_stamina.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_ads_drain_stamina) | [Back to index](#talent-index)

---

<a id="veteran_dodging_grants_stamina"></a>

<img src="https://github.com/user-attachments/assets/8567315b-bea7-4be4-aaec-22d7096945a9" width="72" height="72" alt="Duck and Dive talent icon">

### Duck and Dive

- **Gain 5% movement speed continuously.** This is not a temporary bonus after a dodge.
- A successful ranged-attack dodge can restore **30% of maximum Stamina**, at most once every **3 seconds**. Simply starting a dodge does not itself restore Stamina.
- Recovery cannot exceed your maximum Stamina.

**Recovery and speed examples**

- With maximum Stamina 6 and a qualifying dodge outside cooldown, the base recovery is `6 × 30% = 1.8 Stamina points`. If you already have 5, it restores only `6 − 5 = 1` point.
- Assuming a starting movement speed of 5 metres/second and this talent alone, `5 × 1.05 = 5.25 metres/second`.

[Detailed sources and formulas](veteran_dodging_grants_stamina.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_dodging_grants_stamina) | [Back to index](#talent-index)

---

<a id="veteran_increase_suppression"></a>

<img src="https://github.com/user-attachments/assets/ae882322-f266-4e2c-8168-09f85a5c9285" width="72" height="72" alt="Keep Their Heads Down! talent icon">

### Keep Their Heads Down!

- **Increase suppression you deal by 75%.**
- Enemy suppression thresholds, immunity and behavior determine the reaction. The bonus does not guarantee that every shot stops every enemy from firing.

**Suppression example**

- Assuming an attack starts with 20 suppression units and this is the only modifier, `20 × 1.75 = 35 suppression units`.
- This increases outgoing suppression rather than health damage; it is not a 75% damage bonus.

[Detailed sources and formulas](veteran_increase_suppression.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increase_suppression) | [Back to index](#talent-index)

---

<a id="veteran_aura_elite_kills_restore_grenade"></a>

<img src="https://github.com/user-attachments/assets/3ec21db4-4013-4522-850f-14c583e25ea7" width="72" height="72" alt="Demolition Team talent icon">

### Demolition Team

- **You have a 5% chance to restore one grenade when you or an ally in Coherency kills an Elite or Specialist.**
- The successful proc restores your grenade, up to your carry limit. It does not grant that grenade to the teammate who made the kill.
- Each eligible kill is a chance; this passive has no separate proc cooldown.

#### Chance and capacity examples

- **20 qualifying kill opportunities:** `20 × 5% = 1` expected successful proc. If each success has room to restore a grenade, that is an expected one grenade received. This does not guarantee a proc on the twentieth kill or in any specific sequence.
- **A successful proc at 3/4 grenades:** with a hypothetical four-grenade carry limit, `min(3 + 1, 4) = 4 grenades`. You receive one and reach the limit.

[Detailed sources and formulas](veteran_aura_elite_kills_restore_grenade.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_aura_elite_kills_restore_grenade) | [Back to index](#talent-index)

---

<a id="veteran_increased_weakspot_damage"></a>

<img src="https://github.com/user-attachments/assets/d10f9131-4785-4bff-91a6-af630759b2dd" width="72" height="72" alt="Precision Strikes talent icon">

### Precision Strikes

- Increase the **extra damage on weakspot hits** for melee and ranged attacks. With no existing bonus to this component, it gains **30%**.

- This does not make every weakspot hit deal 30% more total damage. The whole-hit increase depends on the weapon, attack, target and existing bonuses.

- It also applies when a critical hit lands on a weakspot. A critical hit that misses the weakspot does not receive this bonus.

#### Damage examples

These examples assume a noncritical weakspot hit, the same attack and target, no other changes, and no later damage modifiers. The values are illustrative damage units.

- **Equal base and extra components**: base damage `100`, extra damage `100`, no existing extra-damage bonus. Before: `100 + 100 = 200`; after: `100 + 100 × 1.30 = 230`. The hit gains **30 damage units**, or `30 / 200 = 15%`.

- **A larger extra component**: base `100`, extra `200`, no existing bonus. Before: `100 + 200 = 300`; after: `100 + 200 × 1.30 = 360`. The hit gains **60 damage units**, or `60 / 300 = 20%`.

- **An existing 25% bonus to the extra component**: base and unmodified extra component are both `100`. Before: `100 + 100 × 1.25 = 225`; after: `100 + 100 × 1.55 = 255`. The hit gains **30 damage units**, or `30 / 225 ≈ 13.33%`. The added 30 percentage points join the existing bonus; they do not multiply the whole hit.

- For a weapon comparison, keep the weapon model, attack/charge, target, hit zone, distance and critical state fixed. Body-shot and headshot damage can use different armor and hit-zone modifiers, so their difference does not generally equal the extra component. These examples do not establish a fixed percentage for a particular weapon.

[Details and source evidence](veteran_increased_weakspot_damage.md) · [Back to index](#talent-index)

<a id="veteran_replenish_toughness_on_weakspot_kill"></a>

<img src="https://github.com/user-attachments/assets/c7ac403a-7fac-4ce9-bc80-8a7df2af7907" width="72" height="72" alt="Exhilarating Takedown talent icon">

### Exhilarating Takedown

- **Ranged weakspot kills replenish 15% of maximum Toughness** and grant one stack of Toughness damage reduction, up to **three effective stacks**.

- Each stack multiplies Toughness damage taken by `0.9`: **10% reduction at one stack, 19% at two, 27.1% at three**. This directly reduces Toughness damage; it does not grant the same percentage of health-damage reduction.

- Each qualifying kill refreshes the **8-second shared timer**. Without another trigger, approximately every 8 seconds the effect loses one stack.

- Full Toughness still allows the damage-reduction stack and timer refresh. Recovery bonuses can increase the amount restored; recovery restrictions can block Toughness recovery without blocking the damage-reduction stack.

#### Toughness recovery examples

Assume recovery is allowed, maximum Toughness is 100 and there are no other changes.

- At **70/100 Toughness**, with no recovery bonus: `100 × 15% = 15` units; Toughness becomes `70 + 15 = 85`.

- At **95/100**, only `100 − 95 = 5` units are missing, so the actual grant is 5 and Toughness reaches 100.

- At **70/100**, with an applicable **20% recovery bonus**: `100 × 15% × 1.20 = 18` units; Toughness becomes 88.

#### Reduction and decay examples

Assume an attack would deal 100 Toughness-damage units before this effect, enough Toughness remains, all other modifiers are 1 and no damage cap applies.

- **One stack**: `100 × 0.9 = 90` Toughness damage, preventing **10 units**.

- **Two stacks**: `100 × 0.9² = 81`, preventing **19 units**.

- **Three stacks**: `100 × 0.9³ = 72.9`, preventing **27.1 units**.

- With exactly three stacks after the last qualifying kill and no further triggers or forced removal, approximately **8 seconds** later two stacks remain, **16 seconds** later one remains, and **24 seconds** later the effect ends. Update timing makes these approximate intervals.

[Details and source evidence](veteran_replenish_toughness_on_weakspot_kill.md) · [Back to index](#talent-index)

---

<a id="veteran_attack_speed"></a>

<img src="https://github.com/user-attachments/assets/4a13cdee-8f88-4412-8b56-e3b3b5590459" width="72" height="72" alt="Trench Fighter Drill talent icon">

### Trench Fighter Drill

- Increase **Melee Attack Speed by 10%**.

**Attack-time examples**

- Assume an affected action normally takes 1 second, with no other speed bonuses: `1 / 1.10 ≈ 0.91 seconds`, about **9.1% less time**. Actual attack-chain timing depends on the weapon.
- If that same action already has +20% to this speed stat, it changes from `1 / 1.20 ≈ 0.83s` to `1 / 1.30 ≈ 0.77s`, saving about **7.69%** relative to the already faster action. Hold all other scale factors at 1 and assume no limit binds.

[Detailed sources and formulas](veteran_attack_speed.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_attack_speed) | [Back to index](#talent-index)

---

<a id="veteran_reduce_swap_time"></a>

<img src="https://github.com/user-attachments/assets/f51a3100-c73f-4d71-833e-a71bb9e002bc" width="72" height="72" alt="One Motion talent icon">

### One Motion

- Increase **Weapon Swap Speed by 50%**. Reload and attack speed are separate.

**Swap-time examples**

- Assume an affected swap action originally takes 0.9 seconds, with no other speed effects: `0.9 / 1.5 = 0.6 seconds`. This saves `0.3 / 0.9 ≈ 33.3%` of its time.
- For a hypothetical sequence with affected 0.3s unwield and 0.9s wield parts plus an unchanged 0.2s part, `1.4s` becomes `0.3 / 1.5 + 0.9 / 1.5 + 0.2 = 1.0s`, about **28.57%** shorter overall. This is an illustrative sequence; actual weapon timings vary. Hold all other scale factors at 1 and assume no limit binds.

[Detailed sources and formulas](veteran_reduce_swap_time.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_reduce_swap_time) | [Back to index](#talent-index)

## Stat nodes

<a id="base_toughness_node_buff_medium_2"></a>

<img src="https://github.com/user-attachments/assets/1ef34fb3-ac4e-47d1-b7c1-0d13f10e3173" width="72" height="72" alt="Toughness Boost talent icon">

### Toughness Boost

- **Increase maximum Toughness by 25 points.** This raises capacity; it is not a +25% modifier or a stated 25-point recovery of current Toughness.
- The bonus is added before percentage maximum-Toughness modifiers. The calculation rounds up before adding any separate post-ceiling flat bonuses.

#### Maximum Toughness examples

Assume a base maximum of 100 points, no other added points or post-ceiling flat bonuses, and only the modifier stated below.

- **No percentage bonus:** `ceil((100 + 25) × 1) = 125 points`, up from 100.
- **An existing +20% maximum-Toughness bonus:** the maximum changes from `ceil(100 × 1.2) = 120` to `ceil((100 + 25) × 1.2) = 150 points`. The node adds 30 points to that already-modified maximum.

These examples calculate capacity, not current Toughness recovery.

[Detailed sources and formulas](base_toughness_node_buff_medium_2.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#base_toughness_node_buff_medium_2) | [Back to index](#talent-index)

---

<a id="base_melee_damage_node_buff_high_2"></a>

<img src="https://github.com/user-attachments/assets/b0fb41b1-81da-4263-8d21-101a3af0cbdb" width="72" height="72" alt="Melee Damage Boost talent icon">

### Melee Damage Boost

- **Increase Melee Damage by 15%.** The damage calculation applies this stat to melee attacks.
- This bonus adds to other applicable bonuses at the same damage-stat stage.

#### Melee-damage examples

Assume a melee attack with a 100 damage-unit input at that stage. Hold other factors at 1 and assume no limit or cap binds.

- **This node alone:** `100 × 1.15 = 115 damage units`, up from 100.
- **An existing +25% bonus at the same stage:** `100 × (1 + 0.25 + 0.15) = 140 damage units`, up from `100 × 1.25 = 125`. This is a `(140 − 125) / 125 = 12%` increase over the already-modified value.

These examples isolate the damage-stat stage; actual final damage depends on the weapon, attack, target and other modifiers.

[Detailed sources and formulas](base_melee_damage_node_buff_high_2.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#base_melee_damage_node_buff_high_2) | [Back to index](#talent-index)

---

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>

<img src="https://github.com/user-attachments/assets/20744626-5cef-4e5c-afef-0474fde5a4b5" width="72" height="72" alt="Toughness Damage Reduction talent icon">

### Toughness Damage Reduction

- **Reduce Toughness damage taken by 10%.** This stat applies to Toughness damage; these examples do not establish an equal health-damage reduction.
- Same-type reductions add together. Independent Toughness-damage multipliers apply separately.

#### Toughness-damage examples

Assume 100 incoming Toughness-damage units before this stage, enough Toughness remains, independent multipliers are 1 and no limit binds.

- **This node alone:** `100 × (1 − 0.10) = 90 Toughness-damage units`, preventing 10 units.
- **An existing same-type 20% reduction:** damage changes from `100 × 0.80 = 80` to `100 × (1 − 0.20 − 0.10) = 70 Toughness-damage units`. This prevents 10 more units, a `(80 − 70) / 80 = 12.5%` reduction relative to the already-modified incoming value.

Apply any independent multipliers separately; these are isolated Toughness-damage calculations.

[Detailed sources and formulas](base_toughness_damage_reduction_node_buff_medium_1.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#base_toughness_damage_reduction_node_buff_medium_1) | [Back to index](#talent-index)

---
