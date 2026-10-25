# Ogryn talents: Release 1.13.1

[繁體中文](../README.md) | [Sources and technical index](SOURCE_INDEX.md) | [Skills](../../../README.en.md) | [Version information](../../../../README.md)

[Base effects](BASE_EFFECTS.md)

<a id="talent-index"></a>

## Talent index

| Talent | Main effects | Category |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/a7e97984-e57a-4028-ab1b-6e89a0e42fdf" width="32" height="32" alt="Bombs Away! talent icon"> [Bombs Away!](#ogryn_box_explodes) | <ul><li>After the box hits an enemy, it opens and releases 6 grenades, or 9 with Bigger Box of Hurt.</li><li>Carry up to 3 boxes; released grenades have separate fuses.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/ce691c05-0701-4539-921b-620c90189fa2" width="32" height="32" alt="Frag Bomb talent icon"> [Frag Bomb](#ogryn_grenade_frag) | <ul><li>16m blast radius with higher damage in the central 2m; carry at most 1 grenade.</li><li>Eligible ordinary enemies are instantly killed; Monstrosities, Captains and Ogryns use damage calculation.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/641d8592-01cf-4120-ae26-b53ea1a58776" width="32" height="32" alt="Big Friendly Rock talent icon"> [Big Friendly Rock](#ogryn_grenade_friend_rock) | <ul><li>Throw a rock at one enemy; hold up to 4, normally recovering 1 every 45s.</li><li>Rocks use direct-hit damage without a blast area; effectiveness against Carapace Armour is reduced.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/3d000b06-db5c-4ff3-96c9-54d09216587d" width="32" height="32" alt="That One Didn't Count talent icon"> [That One Didn't Count](#ogryn_replenish_rock_on_miss) | <ul><li>A weakspot hit or no damageable-target hit refunds 1 rock, at most once every 5s.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/13c08b08-ef80-4f04-8a70-cddfa4db7389" width="32" height="32" alt="Bigger Box of Hurt talent icon"> [Bigger Box of Hurt](#ogryn_big_box_of_hurt_more_bombs) | <ul><li>Add 3 grenades to those released when Bombs Away! hits.</li><li>Base 6 + 3 = 9 released grenades; the number of box throw charges is unchanged.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/78f209fd-3e8b-456d-954d-c67fdf6e23ee" width="32" height="32" alt="Bonebreaker's Aura talent icon"> [Bonebreaker's Aura](#ogryn_melee_damage_coherency_improved) | <ul><li>You and allies in Coherency gain +10% Melee Attack Damage.</li><li>This upgraded value replaces the base 7.5% melee aura; the two bonuses are not added.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/4b71152f-747b-450c-9d3a-82a313fc8360" width="32" height="32" alt="Coward Culling talent icon"> [Coward Culling](#ogryn_damage_vs_suppressed_coherency) | <ul><li>You and allies in Coherency deal +20% Damage to Suppressed enemies; you also deal +25% Suppression.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/014cd689-2381-43e8-9241-b0a13af77036" width="32" height="32" alt="Stay Close! talent icon"> [Stay Close!](#ogryn_toughness_regen_aura) | <ul><li>You and allies in Coherency gain +20% to eligible Toughness replenishment amounts.</li><li>The effect increases each eligible restoration; it does not start restoration itself or raise natural regeneration speed by 20%.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/01a8e7be-dff3-4d81-a426-5e38ae352606" width="32" height="32" alt="Loyal Protector talent icon"> [Loyal Protector](#ogryn_taunt_shout) | <ul><li>Taunt enemies within 12m for 15s, repeating at 3s and 6s.</li><li>Only the initial cast Staggers; base cooldown 50s.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/582a28cf-14c5-4757-a51c-cb5924dbf0a3" width="32" height="32" alt="Indomitable talent icon"> [Indomitable](#ogryn_longer_charge) | <ul><li>Charge up to 24m, stopping on a Monstrosity; base cooldown 25s.</li><li>For 5s after the charge ends, gain +25% Melee Attack Speed and Movement Speed.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/1a42e740-0c91-48e5-9092-e88d3f06b532" width="32" height="32" alt="Point-Blank Barrage talent icon"> [Point-Blank Barrage](#ogryn_special_ammo) | <ul><li>Swap to and reload the ranged weapon; +25% Rate of Fire and +65% Reload Speed for 12s.</li><li>+15% Close Range Damage, halved braced slowdown, and 50% of counted ammunition returned at the end.</li><li>Base cooldown 60s.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/0932d1f6-96b1-47d9-ad81-861fe9914d9a" width="32" height="32" alt="Stomping Boots talent icon"> [Stomping Boots](#ogryn_charge_toughness) | <ul><li>Each enemy hit during the charge restores 10% of maximum Toughness.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/9194fb70-c794-460d-af2a-068ae6c4fd31" width="32" height="32" alt="Pulverise talent icon"> [Pulverise](#ogryn_charge_applies_bleed) | <ul><li>A charge hit applies 5 Bleed stacks, once per enemy in the same charge.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/a6d612af-aed7-465e-aa07-e23fc7255876" width="32" height="32" alt="Go Again! talent icon"> [Go Again!](#ogryn_taunt_staggers_reduce_cooldown) | <ul><li>A melee or push hit on a staggered enemy restores 1.5% ability charge; all targets share a 0.1s interval.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/708231ab-86cd-44b4-8f01-0d0fe8413ede" width="32" height="32" alt="Hail of Fire talent icon"> [Hail of Fire](#ogryn_special_ammo_armor_pen) | <ul><li>During Point-Blank Barrage, gain +15% ranged Damage and 15% Rending.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/6f504222-c9bf-4dff-a549-138c3be3bde4" width="32" height="32" alt="Light 'em Up talent icon"> [Light 'em Up](#ogryn_special_ammo_fire_shots) | <ul><li>During Point-Blank Barrage, ranged hits apply 4 Burn stacks, adding up to 16 stacks.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/594ab4d6-12e3-4941-bf1a-c5812b128b23" width="32" height="32" alt="Valuable Distraction talent icon"> [Valuable Distraction](#ogryn_taunt_damage_taken_increase) | <ul><li>Enemies affected by Loyal Protector take 20% more damage for 15s.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/53442500-ad2a-446b-9f9b-0d26aa2438d9" width="32" height="32" alt="Bullet Bravado talent icon"> [Bullet Bravado](#ogryn_ranged_stance_toughness_regen) | <ul><li>During Point-Blank Barrage, each shot restores 2.5% of maximum Toughness and each reload restores 15%.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/80ee299a-c486-4957-bf40-6b1d631fd748" width="32" height="32" alt="No Pain! talent icon"> [No Pain!](#ogryn_taunt_restore_toughness) | <ul><li>Each taunt immediately restores 10% of maximum Toughness.</li><li>Each affected enemy adds 0.5% per second, up to 10% per second, for 3.25s; English displays 3s.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/fa5d9c18-f792-4a86-812f-8547ba3cf89e" width="32" height="32" alt="Trample talent icon"> [Trample](#ogryn_charge_trample) | <ul><li>Each charge hit adds 2.5% damage, up to 20 stacks / 50%, for 10s.</li></ul> | Combat ability |
| <img src="https://github.com/user-attachments/assets/ea712cab-0dd4-47fa-a2c5-98edb7e41783" width="32" height="32" alt="Burst Limiter Override talent icon"> [Burst Limiter Override](#ogryn_leadbelcher_no_ammo_chance) | <ul><li>Ranged attacks have a 15% base Lucky Bullet chance; a successful shot consumes no ammunition.</li><li>Each ranged kill adds 2% ranged damage, up to 10 stacks, with duration reset to 10s on further kills.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/9436a125-4e9f-4655-ae8f-4975db2f4af1" width="32" height="32" alt="Feel No Pain talent icon"> [Feel No Pain](#ogryn_carapace_armor) | <ul><li>Start with 10 stacks; each adds Toughness replenishment and multiplies Toughness damage by 0.97.</li><li>Eligible damage removes at most one stack per second; stacks restore at 2s intervals when the restoration conditions are met.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/6ad5a8ad-f1c2-4c43-997a-02b89543ebd9" width="32" height="32" alt="Heavy Hitter talent icon"> [Heavy Hitter](#ogryn_passive_heavy_hitter) | <ul><li>Melee hits build Heavy Hitter: ordinary hits add 1 stack and heavy hits add 2.</li><li>Each stack grants 3% melee damage, maximum 8; adding stacks resets the 7.5s duration.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/ee3a1966-a7c3-442f-a852-74a8b8ada09c" width="32" height="32" alt="Pained Outburst talent icon"> [Pained Outburst](#ogryn_carapace_armor_trigger_on_zero_stacks) | <ul><li>After Feel No Pain loses a stack and falls to 4 visible stacks or fewer, push back nearby enemies and restore 50% of maximum Toughness; English says 5 stacks or below.</li><li>At most once every 30s; the pushback burst deals no direct damage.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/3d442f9a-0143-43d7-a6e2-10a5d6b8a9f8" width="32" height="32" alt="Strongest! talent icon"> [Strongest!](#ogryn_carapace_armor_add_stack_on_push) | <ul><li>Pushing at least one enemy restores 1 Feel No Pain stack.</li><li>Maximum 10 visible stacks; pushing several enemies at once still restores only 1.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/d6e55419-0e35-49cc-9bd6-163bdff037d4" width="32" height="32" alt="Toughest! talent icon"> [Toughest!](#ogryn_carapace_armor_more_toughness) | <ul><li>Toughest! adds 2.5% Toughness replenishment per Feel No Pain stack.</li><li>Added to the base 3% per stack; 10 stacks give a total 55% increase.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/47256097-2109-4fe4-89b7-b4a224ff1200" width="32" height="32" alt="Maximum Firepower talent icon"> [Maximum Firepower](#ogryn_leadbelcher_cooldown_reduction) | <ul><li>A Lucky Bullet proc grants about 1 extra second of combat-ability cooldown recovery per second for 2.5s.</li><li>Further procs refresh the duration without increasing the restoration per tick.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/048770ea-349f-42a0-b5a1-c582fbfde7f8" width="32" height="32" alt="Good Shootin' talent icon"> [Good Shootin'](#ogryn_leadbelcher_crits) | <ul><li>The shot that triggers Lucky Bullet is guaranteed critical if it hits.</li><li>A miss does not produce a critical hit; the effect does not change Lucky Bullet chance.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/11755251-3d1b-4b31-867c-47acaea88760" width="32" height="32" alt="Bulletstorm talent icon"> [Bulletstorm](#ogryn_blo_ally_ranged_buffs) | <ul><li>Lucky Bullet grants you and allies in Coherency +15% ranged damage for 8s.</li><li>Further procs restart the 8s duration.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/a9ec95cc-0b91-4558-81b5-faefcf1207d7" width="32" height="32" alt="Heat of Battle talent icon"> [Heat of Battle](#ogryn_blo_wield_speed) | <ul><li>Heat of Battle adds 1.5% ranged fire rate per Burst Limiter Override stack.</li><li>Uses the existing ranged-kill stacks, maximum 10, with refreshed 10s duration; full stacks grant 15% fire rate.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/5c8fc9b0-2f06-4311-87f7-511d4c6ce6d5" width="32" height="32" alt="Back Off! talent icon"> [Back Off!](#ogryn_blo_melee) | <ul><li>Melee kills increase the next shot’s Lucky Bullet chance by 10 percentage points per stack.</li><li>Maximum 10 stacks; the next shot clears them, even if Lucky Bullet makes that shot free.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/83bead6b-330f-466e-8c25-c7d383843b1c" width="32" height="32" alt="Don't Feel a Thing talent icon"> [Don't Feel a Thing](#ogryn_heavy_hitter_tdr) | <ul><li>Each Heavy Hitter stack grants 1.25% Toughness damage reduction.</li><li>At 8 stacks, Toughness damage is reduced by 10%.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/9c42800c-a3bc-469c-be04-1231b90bca3b" width="32" height="32" alt="Great Cleaver talent icon"> [Great Cleaver](#ogryn_heavy_hitter_cleave) | <ul><li>Each Heavy Hitter stack grants +12.5% melee cleave capacity.</li><li>At 8 stacks, capacity doubles; this does not directly determine the number of enemies hit.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/82795688-8a0b-4db1-871c-1302a8f33299" width="32" height="32" alt="Unstoppable talent icon"> [Unstoppable](#ogryn_heavy_hitter_max_stacks_improves_toughness) | <ul><li>Each Heavy Hitter stack adds 15% to Toughness recovered from melee kills.</li><li>Maximum 8 stacks; full stacks give 2.2 times the base melee-kill recovery.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/e8883b71-72ad-4780-92e7-395f6a32ead8" width="32" height="32" alt="Impactful talent icon"> [Impactful](#ogryn_heavy_hitter_stagger) | <ul><li>Each Heavy Hitter stack adds 7.5% melee Impact.</li><li>Maximum 8 stacks; full stacks give +60% melee Impact.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/93481225-465f-4750-a4f3-28602e723b40" width="32" height="32" alt="Just Getting Started! talent icon"> [Just Getting Started!](#ogryn_heavy_hitter_max_stacks_improves_attack_speed) | <ul><li>At 8 Heavy Hitter stacks, Just Getting Started! grants +10% Attack Speed.</li><li>The bonus ends below 8 stacks.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/67294825-4742-461c-8445-8eabf69981d3" width="32" height="32" alt="The Best Defence talent icon"> [The Best Defence](#ogryn_multi_heavy_toughness) | <ul><li>Hitting at least 2 enemies with one melee attack restores 5% maximum Toughness.</li><li>A qualifying heavy attack restores 15% instead.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/bdf5653a-6df6-4998-a781-ae623083055a" width="32" height="32" alt="Smash 'Em! talent icon"> [Smash 'Em!](#ogryn_single_heavy_toughness) | <ul><li>Hitting exactly 1 enemy with one melee attack restores 5% maximum Toughness.</li><li>A qualifying heavy attack restores 15% instead.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/47f9eea2-c58f-4ed3-8678-e42d2ec1701f" width="32" height="32" alt="Lynchpin talent icon"> [Lynchpin](#ogryn_increased_coherency_toughness) | <ul><li>Your own Coherency Toughness regeneration rate increases by 100%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/f61476bf-8738-40b1-8c66-63980d690cc7" width="32" height="32" alt="Keep Shooting talent icon"> [Keep Shooting](#ogryn_reload_speed_on_empty) | <ul><li>Starting a reload with an empty clip grants +20% Reload Speed.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/aeba8245-43aa-438c-9357-a7ac4556a98d" width="32" height="32" alt="Furious talent icon"> [Furious](#ogryn_more_hits_more_damage) | <ul><li>Each enemy hit by the previous melee attack adds 3% damage to the next melee attack, up to +30%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/c006f0e1-3f32-4dcc-891a-8c44b4ebe6df" width="32" height="32" alt="Heavyweight talent icon"> [Heavyweight](#ogryn_ogryn_killer) | <ul><li>Deal +30% damage to Bulwarks, Crushers, Reapers and Plague Ogryns.</li><li>Take 30% less damage from those enemies.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/ee98056a-b754-4821-9542-717ef68c944a" width="32" height="32" alt="Slam talent icon"> [Slam](#ogryn_melee_stagger) | <ul><li>+25% melee Impact; staggering an enemy with a melee hit or push restores 5% Stamina.</li><li>Stamina recovery has a 0.75s cooldown.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/53e0b90e-52dc-4a4a-953c-b235753aa97a" width="32" height="32" alt="Soften Them Up talent icon"> [Soften Them Up](#ogryn_targets_recieve_damage_taken_increase_debuff) | <ul><li>After your melee attack damages an enemy that survives, it takes +15% damage for 5s.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/72cbf891-ecd4-425c-8d46-97cb4d4863f9" width="32" height="32" alt="Too Stubborn to Die talent icon"> [Too Stubborn to Die](#ogryn_toughness_on_low_health) | <ul><li>While below 50% Health, increase eligible Toughness replenishment amounts by 100%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/dbfbaef7-b829-41cf-96cb-a9d09192cfbd" width="32" height="32" alt="Batter talent icon"> [Batter](#ogryn_heavy_bleeds) | <ul><li>Melee hits apply 1 Bleed stack; heavy hits apply 4, up to 16 stacks.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/206be198-2a5f-426f-944a-8d85fd74f1d6" width="32" height="32" alt="Hard Knocks talent icon"> [Hard Knocks](#ogryn_staggering_increases_damage) | <ul><li>Enemies staggered by melee attacks take +15% melee damage for 5s; teammates' melee attacks also benefit.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/01fd23cb-46d2-41fa-bfc3-d8b1d17f43a3" width="32" height="32" alt="Unstoppable Momentum talent icon"> [Unstoppable Momentum](#ogryn_movement_speed_after_ranged_kills) | <ul><li>A ranged kill grants +20% Movement Speed for 3s; further ranged kills restart the duration.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/fab49cb9-e155-47d2-8b8c-2ad8235a0f48" width="32" height="32" alt="Ammo Stash talent icon"> [Ammo Stash](#ogryn_increased_ammo_reserve) | <ul><li>Increase maximum ammo reserve by 25%; magazine capacity is unchanged.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/cf916d47-2e00-43d4-98b7-307222a056e6" width="32" height="32" alt="Pacemaker talent icon"> [Pacemaker](#ogryn_multi_hits_grant_reload_speed) | <ul><li>Hit at least 3 different enemies within about 0.5s for +15% Reload Speed on the next reload. English instead says a single attack.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/5a19ac08-20bc-41ee-8af1-bbc6194fa852" width="32" height="32" alt="Found Some More talent icon"> [Found Some More](#ogryn_free_reload_after_ability) | <ul><li>Replenish 1% of maximum ammo reserve about every 15s; no ability use or reload required.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/58952102-1822-4093-81f9-48b8cbc8f8a7" width="32" height="32" alt="Won't Give In talent icon"> [Won't Give In](#ogryn_knocked_allies_grant_damage_reduction) | <ul><li>Each ally needing help less than 20m away grants 20% damage reduction, up to three allies in a standard team.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/e9d72852-9fa6-4e02-aded-e261adb660f0" width="32" height="32" alt="Crunch! talent icon"> [Crunch!](#ogryn_fully_charged_attacks_gain_damage_and_stagger) | <ul><li>Charging a heavy attack builds up to +30% melee damage and Impact across four stacks; the bonus ends after that sweep.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/669fb8b0-a444-4216-abe1-74f4acc4af85" width="32" height="32" alt="Delight in Destruction talent icon"> [Delight in Destruction](#ogryn_nearby_bleeds_reduce_damage_taken) | <ul><li>Each bleeding enemy within 8m grants 5% damage reduction, up to six enemies / 30%; teammate Bleed also counts.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/a51567af-44cb-46ba-9908-3e3502dcbcdb" width="32" height="32" alt="Toughness Damage Reduction talent icon"> [Toughness Damage Reduction](#base_toughness_damage_reduction_node_buff_medium_1) | <ul><li>Reduce incoming Toughness damage by 10%; maximum Toughness and Health damage are unchanged by this stat.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/9af41f8c-0f0e-4b2b-965e-c0d01fea2746" width="32" height="32" alt="No Hurting Friends! talent icon"> [No Hurting Friends!](#ogryn_damage_taken_by_all_increases_strength_tdr) | <ul><li>Damage to you or Coherency allies builds up to five +2% Strength stacks for 10s; full stacks also grant 15% Toughness damage reduction.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/895c3ccd-387f-4862-9a2b-b429ff5d6432" width="32" height="32" alt="Get Stuck In talent icon"> [Get Stuck In](#ogryn_ally_movement_boost_on_ability) | <ul><li>Activating your Combat Ability grants you and current Coherency allies +20% Movement Speed and Stun/Suppression immunity for 6s.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/bb088b60-c1e8-42a7-b68e-3ef59f5d9eb9" width="32" height="32" alt="Implacable talent icon"> [Implacable](#ogryn_windup_reduces_damage_taken) | <ul><li>Gain 15% damage reduction during melee windup; the bonus ends when charging ends.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/d80b562f-7fc2-4daf-85e4-ae25f8171a89" width="32" height="32" alt="No Stopping Me! talent icon"> [No Stopping Me!](#ogryn_windup_is_uninterruptible) | <ul><li>Become Uninterruptible and remove the heavy melee action's Movement Speed penalty while charging; damage still applies.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/7e27b3b4-5eca-49b5-aafd-c8abc6635b14" width="32" height="32" alt="Massacre talent icon"> [Massacre](#ogryn_kills_grant_crit_chance) | <ul><li>Kills grant +2 percentage points of Critical Chance per stack for 12s, up to eight stacks; further kills refresh the duration.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/5d6152a6-dedb-49c4-a7d2-328d082084c0" width="32" height="32" alt="Payback Time talent icon"> [Payback Time](#ogryn_revenge_damage) | <ul><li>A successful melee dodge or damaging melee hit, including Toughness-absorbed damage, grants +15% melee and ranged damage for 5s; triggers refresh.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/0eb640b4-e206-4d0b-a982-f74b33baf5b2" width="32" height="32" alt="Dominate talent icon"> [Dominate](#ogryn_rending_on_elite_kills) | <ul><li>Elite kills grant +15% Rending for 10s with refresh; actual damage depends on the original armour multiplier.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/27fcc279-9828-4df7-b895-04956bb2463b" width="32" height="32" alt="Reloaded and Ready talent icon"> [Reloaded and Ready](#ogryn_reloading_grants_damage) | <ul><li>Reloading grants +15% ranged damage for 8s; further reloads refresh the duration without stacking.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/c6421034-209b-4fab-857d-541fa0667d8b" width="32" height="32" alt="Big Boom talent icon"> [Big Boom](#ogryn_increase_explosion_radius) | <ul><li>Increase explosion outer and central high-damage radii by 27.5%; damage values themselves are unchanged.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/b35eb9be-169c-48cf-a295-329eae3a3610" width="32" height="32" alt="No Pushover talent icon"> [No Pushover](#ogryn_blocking_reduces_push_cost) | <ul><li>A ready push gains +250% Impact; finishing it consumes the bonus and starts an 8s cooldown, even without an enemy hit.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/119478f3-6425-4e96-9f26-e0df95a4bf1e" width="32" height="32" alt="Attention Seeker talent icon"> [Attention Seeker](#ogryn_blocking_ranged_taunts) | <ul><li>Blocking or hitting with a push Taunts the enemy for 8s; Monsters and already-Taunted enemies are excluded.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/d61a8184-294b-4ade-9847-3c5241828792" width="32" height="32" alt="For the Lil'Uns talent icon"> [For the Lil'Uns](#ogryn_protect_allies) | <ul><li>Another ally's Toughness break grants +10% Power and 25% Toughness damage reduction for 10s; a downed ally separately grants Revive Speed and Stun immunity.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/c5cc14b1-1227-4449-a1d9-de912e048e6e" width="32" height="32" alt="Simple Minded talent icon"> [Simple Minded](#ogryn_corruption_resistance) | <ul><li>Reduce damage-calculated Corruption taken by 40%; existing Corruption and ordinary damage are unaffected by this modifier.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/fca0827b-6dac-4c44-b92e-8aba309ff4ca" width="32" height="32" alt="Focused Fighter talent icon"> [Focused Fighter](#ogryn_melee_attacks_give_mtdr) | <ul><li>Successful melee sweeps build up to five multiplicative 4% melee-damage reduction stacks; melee damage to you or an ally clears them.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/024bec9b-772c-4313-b7b8-d119efdcf8f1" width="32" height="32" alt="Brutish Strength talent icon"> [Brutish Strength](#ogryn_pushing_applies_brittleness) | <ul><li>Push hits apply four Brittleness stacks (10%) to a living enemy; maximum sixteen (40%) for 5s with refresh, benefiting allies.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/c78dbead-adf5-4b9e-9629-9a3a0a93ae8c" width="32" height="32" alt="Fire Away talent icon"> [Fire Away](#ogryn_explosions_burn) | <ul><li>Damaging explosions apply one Burn stack, or two total in the central area, up to eight; the specified Power Maul explosion is excluded.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/3ff7d7eb-6206-4d77-91c5-483259320072" width="32" height="32" alt="Unbreakable talent icon"> [Unbreakable](#ogryn_block_all_attacks) | <ul><li>Perfect Blocks can block otherwise unblockable melee attacks and grant +20% damage to the next melee sweep for at most 5s.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/15edb762-d209-407d-8bd5-fc0672bd5ef8" width="32" height="32" alt="Pumped Up talent icon"> [Pumped Up](#ogryn_damage_reduction_on_high_stamina) | <ul><li>Gain 12.5% damage reduction while Stamina is strictly above 75% of maximum; no stacks or cooldown.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/de5091de-3dd6-455b-875a-55228eb4d67e" width="32" height="32" alt="Lucky Streak talent icon"> [Lucky Streak](#ogryn_crit_damage_increase) | <ul><li>Add 75% to the additional critical-damage component; the effect on total damage depends on weapon, armour and hit location.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/5f6d651a-4c88-40ea-a96b-3133459df2f4" width="32" height="32" alt="Frenzied Blows talent icon"> [Frenzied Blows](#ogryn_stacking_attack_speed) | <ul><li>Chained melee hits from the second successful sweep build up to five +2.5% melee Attack Speed stacks for 5s; a miss clears them.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/373afc07-72d5-4815-91c0-0e5d0d02d279" width="32" height="32" alt="Beat Them Back talent icon"> [Beat Them Back](#ogryn_melee_damage_after_heavy) | <ul><li>A successful heavy melee sweep grants +15% melee damage for 5s after it finishes; further heavy hits refresh.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/d21c7405-647a-4da2-a396-16b9c5cd8819" width="32" height="32" alt="Concentrate talent icon"> [Concentrate](#ogryn_drain_stamina_for_handling) | <ul><li>While bracing with Stamina, reduce Sway by 60%, Spread by 20% and Recoil by 15%, draining 0.5 Stamina per second except while reloading.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/6fbf8a63-5e26-482f-9964-01eb0598b142" width="32" height="32" alt="Strongman talent icon"> [Strongman](#ogryn_damage_reduction_after_elite_kill) | <ul><li>An Elite or Specialist kill grants 10% damage reduction for 5s; further qualifying kills refresh without stacking.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/ce3b22d4-870e-4496-96fc-33601f9d9a62" width="32" height="32" alt="Steady Grip talent icon"> [Steady Grip](#ogryn_toughness_while_bracing) | <ul><li>While bracing or shooting, replenish 12.5% of maximum Toughness per second, with approximately 0.5s shooting-state retention.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/b7e2a92b-0a60-459a-87c9-6276b204f64e" width="32" height="32" alt="Can't Hit Me...Again talent icon"> [Can't Hit Me...Again](#ogryn_ranged_damage_immunity) | <ul><li>Taking ranged damage grants 20% ranged reduction for 2.5s; a 4s cooldown follows, without active-period refresh.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/5974d1c4-5b31-42b8-af90-022202c4614e" width="32" height="32" alt="Dedicated Practice talent icon"> [Dedicated Practice](#ogryn_wield_speed_increase) | <ul><li>Increase Weapon Swap Speed by 35%; a scaled 1s weapon-draw action takes approximately 0.741s, without increasing Reload Speed.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/eeae1229-b245-43fc-9840-960c36f5787e" width="32" height="32" alt="Spray and Slay talent icon"> [Spray and Slay](#ogryn_ranged_improves_melee) | <ul><li>Emptying the current clip through ammunition consumption grants +15% melee damage and +7.5% melee Attack Speed for 6s; retriggers refresh.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/fdf1eb1f-b76f-4452-beac-f2205fc32d2b" width="32" height="32" alt="Bash and Blast talent icon"> [Bash and Blast](#ogryn_melee_improves_ranged) | <ul><li>Melee kills build up to five +3% ranged damage stacks / 15% for 10s; further melee kills refresh.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/9e138d4c-f301-46c6-9eef-5aff038efc7c" width="32" height="32" alt="Bruiser talent icon"> [Bruiser](#ogryn_ally_elite_kills_grant_cooldown) | <ul><li>Your or a Coherency ally's Elite kill grants about 0.5s extra cooldown recovery per second for 4s; refreshes without stacking.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/dae8db6d-b212-4abd-a84b-246c0910e0b3" width="32" height="32" alt="Strike True talent icon"> [Strike True](#ogryn_weakspot_damage) | <ul><li>Gain +10% Strength on melee Weakspot hits, additive with same-stage Strength modifiers; weapon curves determine final damage and Impact.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/38b1d6e0-b6a5-4692-92a2-fe6caf0b9083" width="32" height="32" alt="Mobile Emplacement talent icon"> [Mobile Emplacement](#ogryn_bracing_reduces_damage_taken) | <ul><li>Take 25% less damage while bracing or shooting, with about 0.5s shooting-state retention and no extra stacks or fixed cooldown.</li></ul> | Talent |

## Blitz

<a id="ogryn_box_explodes"></a>

### Bombs Away!

<img src="https://github.com/user-attachments/assets/a7e97984-e57a-4028-ab1b-6e89a0e42fdf" width="72" height="72" alt="Bombs Away! talent icon">

- **Hit and release**: The grenade box breaks open after hitting an enemy and releases 6 grenades. With Bigger Box of Hurt, the count is 6 + 3 = 9.

- **Direct-hit example**: At standard PowerLevel 500, close range and without other modifiers, the box's direct collision against Carapace Armour deals 1850 × 0.15 = 277.5 damage. This counts only the box impact, excluding the released grenades.

- **Released-grenade fuses**: With 6 grenades, the first detonates about 1.2–1.6s after release and the sixth about 3.2–5.6s. With 9 grenades, the ninth has a configured range of 4.4–8.0s.

- **Charges**: Carry up to 3 boxes; each throw consumes one charge. The ability has no fixed automatic cooldown, so missing charges must come from supplies or other recovery effects.

- **Child-grenade example**: Ordinary child grenades have an 8m blast radius and 2m centre. Excluding other modifiers, each central blast deals 10 × 1 = 10 to Unarmoured or 10 × 0.2 = 2 to Carapace. Six central hits on the same Unarmoured target total 60. The box's 1850 damage is not copied to each grenade.

[Details](ogryn_box_explodes.md) · [Back to index](#talent-index)

---

<a id="ogryn_grenade_frag"></a>

### Frag Bomb

<img src="https://github.com/user-attachments/assets/ce691c05-0701-4539-921b-620c90189fa2" width="72" height="72" alt="Frag Bomb talent icon">

- **Blast distance**: Within 2m of the centre, the blast uses the close-range damage settings. From 2m to 16m, outer blast falloff applies.

- **Damage example**: Counting only ordinary damage within the central 2m, at standard Power and without other modifiers, the Unarmoured portion is 1500 × 1 = 1500. With the midpoint Carapace modifier 1.025, it is 1500 × 1.025 = 1537.5. Enemies eligible for the instant-kill effect are handled separately.

- **Fuse timing**: Without a collision, the grenade detonates after about 2s. A collision resets the timer and switches to the approximately 0.9s impact fuse. Repeated bounces can reset it again; 2s is not a fixed detonation time for every throw.

- **Supply and instant kills**: Carry at most 1 grenade, replenished through grenade supplies rather than automatically over time. A blast hit instantly kills eligible ordinary enemies; Monstrosities, Captains and Ogryns are excluded.

[Details](ogryn_grenade_frag.md) · [Back to index](#talent-index)

---

<a id="ogryn_grenade_friend_rock"></a>

### Big Friendly Rock

<img src="https://github.com/user-attachments/assets/641d8592-01cf-4120-ae26-b53ea1a58776" width="72" height="72" alt="Big Friendly Rock talent icon">

- **Direct-hit example**: At standard PowerLevel 500, with an ordinary close-range hit and no other modifiers, an Unarmoured target takes 1200 × 1 = 1200 damage; Carapace Armour takes 1200 × 0.25 = 300.

- **Capacity and replenishment**: Hold up to 4 rocks. About every 45s, recover 1 rock in sequence; from zero and without other modifiers, refilling takes 4 × 45 = 180s. Grenade pickups do not replenish rocks.

- **With That One Didn't Count**: A weakspot hit, or an entire throw that hits no damageable target, can refund 1 rock, at most once every 5s. Hitting a destructible object can also invalidate the miss condition.

- **Special enemies**: Rocks can instantly kill Specialists and have specific instant-kill overrides for certain enemies. Those cases are not decided by the ordinary damage example.

[Details](ogryn_grenade_friend_rock.md) · [Back to index](#talent-index)

---

<a id="ogryn_replenish_rock_on_miss"></a>

### That One Didn't Count

<img src="https://github.com/user-attachments/assets/3d000b06-db5c-4ff3-96c9-54d09216587d" width="72" height="72" alt="That One Didn't Count talent icon">

- **Trigger**: Refund 1 rock if the throw hits at least one weakspot, or hits no damageable target at all. Hitting terrain can still count as a miss; hitting a destructible object may invalidate it.

- **Charge example**: After throwing the last rock, a qualifying throw restores the count from 0 to 1. Each trigger restores only 1 rock, and the total cannot exceed 4.

- **Cooldown example**: The 5s cooldown starts from the previous refund. If a second rock finishes its flight at 4s, it does not refund a rock even if its hit conditions qualify. The check occurs at projectile completion, not merely from the times the throw buttons were pressed.

- **Original English scope**: The game text says “hit no enemies”, while the accepted hit flag includes damageable objects. A destructible hit can therefore prevent a refund without an enemy hit; specific in-game cases have not been tested.

[Details](ogryn_replenish_rock_on_miss.md) · [Back to index](#talent-index)

---

<a id="ogryn_big_box_of_hurt_more_bombs"></a>

### Bigger Box of Hurt

<img src="https://github.com/user-attachments/assets/13c08b08-ef80-4f04-8a70-cddfa4db7389" width="72" height="72" alt="Bigger Box of Hurt talent icon">

- **Count example**: The box normally releases 6 grenades. Selecting this talent adds 3, for a total of 6 + 3 = 9.

- **Scope**: This effect increases only the grenades released by the box; it does not grant an additional grenade ability.

- **Stacking and charges**: The talent supplies one effect and does not repeatedly accumulate from the same hit. The box still has at most 3 throw charges.

[Details](ogryn_big_box_of_hurt_more_bombs.md) · [Back to index](#talent-index)

---

## Aura

<a id="ogryn_melee_damage_coherency_improved"></a>

### Bonebreaker's Aura

<img src="https://github.com/user-attachments/assets/78f209fd-3e8b-456d-954d-c67fdf6e23ee" width="72" height="72" alt="Bonebreaker's Aura talent icon">

- **Activation**: You and allies receiving the aura in Coherency gain +10% Melee Attack Damage. The owner is included in the Coherency chain.

- **Damage examples**: A melee hit normally dealing 100 damage becomes 100 × 1.10 = 110 without other modifiers. With another 20% bonus in the same stage, it becomes 100 × (1 + 20% + 10%) = 130.

- **Stacking and cooldown**: The aura has at most 1 stack and no separate cooldown. Its upgraded 10% value replaces the base 7.5%; the two values are not added.

[Details](ogryn_melee_damage_coherency_improved.md) · [Back to index](#talent-index)

---

<a id="ogryn_damage_vs_suppressed_coherency"></a>

### Coward Culling

<img src="https://github.com/user-attachments/assets/4b71152f-747b-450c-9d3a-82a313fc8360" width="72" height="72" alt="Coward Culling talent icon">

- **Activation**: Against a Suppressed enemy, you and allies in Coherency deal +20% Damage to that target.

- **Damage example**: A hit normally dealing 100 damage to a Suppressed target becomes 100 × 1.20 = 120 without other modifiers. An unsuppressed target does not receive this bonus.

- **Additional effect and stacking**: You also deal +25% Suppression. The aura has at most 1 stack, no separate cooldown, and must be chosen instead of the other two Ogryn auras. For example, an attack normally applying 10 Suppression applies 10 × 1.25 = 12.5. This Suppression increase applies only to you.

[Details](ogryn_damage_vs_suppressed_coherency.md) · [Back to index](#talent-index)

---

<a id="ogryn_toughness_regen_aura"></a>

### Stay Close!

<img src="https://github.com/user-attachments/assets/014cd689-2381-43e8-9241-b0a13af77036" width="72" height="72" alt="Stay Close! talent icon">

- **Replenishment effect**: You and allies in Coherency gain +20% to eligible Toughness replenishment from melee kills, talents and other sources. Effects explicitly configured to ignore replenishment bonuses are excluded.

- **Replenishment example**: An eligible base restoration of 15 Toughness becomes 15 × 1.20 = 18 without other modifiers. Actual restoration is capped by missing Toughness: with a deficit of only 5, restore only 5.

- **Stacking and cooldown**: The aura has at most 1 stack and no separate cooldown. It increases eligible restoration amounts, does not create a restoration event by itself, and does not increase natural Coherency regeneration speed.

[Details](ogryn_toughness_regen_aura.md) · [Back to index](#talent-index)

---

## Combat ability

<a id="ogryn_taunt_shout"></a>

### Loyal Protector

<img src="https://github.com/user-attachments/assets/01a8e7be-dff3-4d81-a426-5e38ae352606" width="72" height="72" alt="Loyal Protector talent icon">

- **Taunt effect**: Taunt enemies within 12m, making them prioritize attacking you for 15s. The initial cast also Staggers enemies; excluded targets such as Daemonhosts are unaffected.

- **Repeated casts**: At 3s and 6s, emit another taunt from your position at that time. These repeats do not Stagger. Affecting the same enemy again resets its 15s duration.

- **Timing example**: An enemy within range at 0s, 3s and 6s can remain taunted until 6 + 15 = 21s after the initial cast. Base ability cooldown is 50s, with one charge.

[Details](ogryn_taunt_shout.md) · [Back to index](#talent-index)

---

<a id="ogryn_longer_charge"></a>

### Indomitable

<img src="https://github.com/user-attachments/assets/582a28cf-14c5-4757-a51c-cb5924dbf0a3" width="72" height="72" alt="Indomitable talent icon">

- **Charge and cooldown**: Charge forward, increasing maximum distance from 12m to 12 × 2 = 24m and knocking aside enemies along the path. Colliding with a Monstrosity stops the charge; terrain can also limit distance. One charge, base cooldown 25s.

- **After-charge bonuses**: When the charge ends, gain +25% Melee Attack Speed and +25% Movement Speed for 5s. A 1s action controlled by attack speed takes 1 ÷ 1.25 = 0.8s; movement of 5m/s becomes 6.25m/s.

- **Charge protection**: Retain the base charge's 25% damage reduction while charging. Counting only this effect, 100 incoming damage becomes 75. Collision and the end impact do not directly deal Health damage; Bleed from Pulverise is calculated separately.

[Details](ogryn_longer_charge.md) · [Back to index](#talent-index)

---

<a id="ogryn_special_ammo"></a>

### Point-Blank Barrage

<img src="https://github.com/user-attachments/assets/1a42e740-0c91-48e5-9092-e88d3f06b532" width="72" height="72" alt="Point-Blank Barrage talent icon">

- **Activation and cooldown**: Swap to your ranged weapon and immediately fill its magazine from reserve ammunition. If reserves are insufficient, load only the remaining ammunition. Duration 12s, base cooldown 60s, one charge.

- **Rate of Fire and Reload Speed**: Gain +25% ranged Rate of Fire and +65% Reload Speed. A speed-controlled 1s firing interval becomes 1 ÷ 1.25 = 0.8s; a 3s reload becomes 3 ÷ 1.65 ≈ 1.82s.

- **Close range and movement**: While holding a ranged weapon, gain +15% Close Range Damage and halve movement penalties from bracing and weapon actions. For example, a 40% slowdown becomes 20%; at base 5m/s, slowed movement rises from 3m/s to 4m/s.

- **Ammunition return**: At effect end, restore 50% of the counted ammunition to reserves. For example, 20 counted rounds return 20 × 50% = 10. Ammunition saved by Lucky Bullets also counts; the returned amount remains limited by total ammunition capacity.

[Details](ogryn_special_ammo.md) · [Back to index](#talent-index)

---

<a id="ogryn_charge_toughness"></a>

### Stomping Boots

<img src="https://github.com/user-attachments/assets/0932d1f6-96b1-47d9-ad81-861fe9914d9a" width="72" height="72" alt="Stomping Boots talent icon">

- **Replenishment condition**: Each enemy hit during the charge restores 10% of maximum Toughness. Hits after the charge ends no longer provide this restoration.

- **Replenishment example**: With maximum Toughness 100, three consecutive qualifying hits and enough missing Toughness restore 100 × 10% × 3 = 30. With a deficit of only 20, restore only 20. Other Toughness replenishment bonuses are calculated separately.

[Details](ogryn_charge_toughness.md) · [Back to index](#talent-index)

---

<a id="ogryn_charge_applies_bleed"></a>

### Pulverise

<img src="https://github.com/user-attachments/assets/9194fb70-c794-460d-af2a-068ae6c4fd31" width="72" height="72" alt="Pulverise talent icon">

- **Trigger**: A charge hit on a surviving enemy applies 5 Bleed stacks. Each enemy receives this application only once per charge.

- **Stacks and duration**: Bleed has a maximum of 16 stacks. Reapplication resets its 1.5s retention timer, with damage approximately every 0.5s. Once applications stop and the retention timer expires, stacks are removed one at a time on successive ticks.

- **Damage example**: Against an Unarmoured target and without other modifiers, 5 stacks deal 87.5 × (5 ÷ 16)² × [3 − 2 × (5 ÷ 16)] ≈ 20.29 per tick; 8 stacks deal 43.75. Bleed damage is not directly proportional to stack count.

[Details](ogryn_charge_applies_bleed.md) · [Back to index](#talent-index)

---

<a id="ogryn_taunt_staggers_reduce_cooldown"></a>

### Go Again!

<img src="https://github.com/user-attachments/assets/a6d612af-aed7-465e-aa07-e23fc7255876" width="72" height="72" alt="Go Again! talent icon">

- **Trigger**: A melee attack or push that hits a staggered enemy restores 1.5% of one combat ability charge. Triggers must be at least 0.1s apart. Ranged hits, explosion-type hits, and the taunt itself do not trigger this effect.

- **Trigger clarification**: Already staggered enemies also qualify; a fresh stagger is not required. All targets share the 0.1s interval, so simultaneous hits on multiple enemies count only once.

- **Cooldown example**: Loyal Protector has a base cooldown of 50s. One qualifying trigger restores 50 × 1.5% = 0.75s; 10 restore 7.5s, in addition to natural cooldown recovery during that time.

[Details](ogryn_taunt_staggers_reduce_cooldown.md) · [Back to index](#talent-index)

---

<a id="ogryn_special_ammo_armor_pen"></a>

### Hail of Fire

<img src="https://github.com/user-attachments/assets/708231ab-86cd-44b4-8f01-0d0fe8413ede" width="72" height="72" alt="Hail of Fire talent icon">

- **Activation**: During Point-Blank Barrage's 12s effect, gain +15% ranged Damage and 15% Rending.

- **Damage example**: Assume base damage 100, a Carapace target with an original armour modifier of 0.5, and no other modifiers. The original damage is 50; with both this talent's damage bonus and Rending, it is 100 × 1.15 × (0.5 + 0.15) = 74.75.

- **Armour differences**: Rending improves a weapon's damage modifier against particular armour. Once the original modifier reaches 1, only one quarter of the excess is used. Rending is therefore not a uniform +15% final damage bonus.

[Details](ogryn_special_ammo_armor_pen.md) · [Back to index](#talent-index)

---

<a id="ogryn_special_ammo_fire_shots"></a>

### Light 'em Up

<img src="https://github.com/user-attachments/assets/6f504222-c9bf-4dff-a549-138c3be3bde4" width="72" height="72" alt="Light 'em Up talent icon">

- **Trigger**: While Point-Blank Barrage is active, ranged hits on a surviving enemy apply 4 Burn stacks per shot to that enemy. Multiple hits from the same shot do not apply stacks again.

- **Stacks and timing**: This talent adds stacks up to 16. Four successive shots can produce 4, 8, 12 and 16 stacks; another hit resets the 4s retention timer. Damage occurs about every 0.5s, followed by gradual stack removal after retention expires.

- **Damage example**: Against an Unarmoured target without other modifiers, each Burn tick deals 600 × (stacks ÷ 31)² × [3 − 2 × (stacks ÷ 31)]. Four stacks deal about 27.39, and 16 about 314.51. These are single-tick values, not total damage over the entire Burn.

[Details](ogryn_special_ammo_fire_shots.md) · [Back to index](#talent-index)

---

<a id="ogryn_taunt_damage_taken_increase"></a>

### Valuable Distraction

<img src="https://github.com/user-attachments/assets/594ab4d6-12e3-4941-bf1a-c5812b128b23" width="72" height="72" alt="Valuable Distraction talent icon">

- **Effect and duration**: Enemies affected by a Loyal Protector taunt wave take 20% more damage from all sources for 15s. You and your teammates benefit. Subsequent taunt waves restart the timer without adding percentages.

- **Damage example**: With other conditions fixed, 100 damage becomes 100 × 1.2 = 120. If the enemy also has Soften Them Up's 15% damage-taken increase, the two act at different stages: 100 × 1.15 × 1.2 = 138.

[Details](ogryn_taunt_damage_taken_increase.md) · [Back to index](#talent-index)

---

<a id="ogryn_ranged_stance_toughness_regen"></a>

### Bullet Bravado

<img src="https://github.com/user-attachments/assets/53442500-ad2a-446b-9f9b-0d26aa2438d9" width="72" height="72" alt="Bullet Bravado talent icon">

- **Replenishment**: During Point-Blank Barrage's 12s effect, each shot restores 2.5% of maximum Toughness and each reload restores 15%. Shots do not have to hit enemies. The automatic reload on activation can also trigger the 15% restoration.

- **Replenishment example**: At maximum Toughness 100 without other bonuses, four shots followed by one reload restore 100 × (4 × 2.5% + 15%) = 25. If only 10 is missing, only 10 can be restored.

- **Counting triggers**: Replenishment follows shooting and reload actions, rather than restoring once per individual shotgun pellet. Automatic fire, bursts and special weapon firing methods affect the actual number of triggers.

[Details](ogryn_ranged_stance_toughness_regen.md) · [Back to index](#talent-index)

---

<a id="ogryn_taunt_restore_toughness"></a>

### No Pain!

<img src="https://github.com/user-attachments/assets/80ee299a-c486-4957-bf40-6b1d631fd748" width="72" height="72" alt="No Pain! talent icon">

- **Immediate replenishment**: Loyal Protector and its two repeats at 3s and 6s each restore 10% of maximum Toughness immediately, even with no enemies nearby.

- **Restoration over time**: Each enemy affected by a taunt adds one stack that restores 0.5% of maximum Toughness per second. The limit is 20 stacks, or 10% per second. The effect lasts 3.25s; adding stacks restarts the duration.

- **Step-by-step example**: With maximum Toughness 100 and four enemies affected by each of three taunts, immediate replenishment totals 100 × 10% × 3 = 30. Restoration stacks rise from 4 to 8 to 12, giving 2, 4 and 6 Toughness per second.

- **Total example**: Ignoring update error, assuming sufficient missing Toughness throughout and no other replenishment bonuses, the first 3s restore 2 × 3 = 6, the next 3s restore 4 × 3 = 12, and the final 3.25s restore 6 × 3.25 = 19.5. Including immediate replenishment gives 67.5. Actual restoration is capped by missing Toughness at each point in time.

- **English duration difference**: The same-build English displays 3s; the accepted buff duration is 3.25s. The examples use the buff duration.

[Details](ogryn_taunt_restore_toughness.md) · [Back to index](#talent-index)

---

<a id="ogryn_charge_trample"></a>

### Trample

<img src="https://github.com/user-attachments/assets/fa5d9c18-f792-4a86-812f-8547ba3cf89e" width="72" height="72" alt="Trample talent icon">

- **Stacking**: A charge hit adds one stack of Trample. Each stack grants 2.5% more damage, up to 20 stacks, for 10s. Further hits restart the duration. Both melee and ranged damage benefit.

- **Damage example**: Four hits grant 10%, turning 100 base damage into 100 × (1 + 4 × 2.5%) = 110. At 20 stacks the result is 150. With another 20% increase at the same stage, the full-stack result is 170.

- **Counting hits**: Each charge-hit event can add a stack. If the same enemy is hit separately during the charge and its ending impact, it may count for more than one stack.

[Details](ogryn_charge_trample.md) · [Back to index](#talent-index)

---

## Keystone

<a id="ogryn_leadbelcher_no_ammo_chance"></a>

### Burst Limiter Override

<img src="https://github.com/user-attachments/assets/ea712cab-0dd4-47fa-a2c5-98edb7e41783" width="72" height="72" alt="Burst Limiter Override talent icon">

- **Lucky Bullet**: Ranged attacks with ammunition use a 15% base proc chance. A successful proc makes that shot consume no ammunition: a shot that normally uses 1 round uses 0. The chance adjusts with previous checks; shots are not independent fixed-probability rolls.

- **Damage from kills**: Each ranged kill adds one stack of 2% ranged damage, up to 10 stacks. Further kills reset the 10s duration.

- **Example**: Five ranged kills grant 10% ranged damage; 10 stacks grant 20%. With base damage 100, the full-stack result is 100 × 1.20 = 120.

[Details](ogryn_leadbelcher_no_ammo_chance.md) · [Back to index](#talent-index)

---

<a id="ogryn_carapace_armor"></a>

### Feel No Pain

<img src="https://github.com/user-attachments/assets/9436a125-4e9f-4655-ae8f-4975db2f4af1" width="72" height="72" alt="Feel No Pain talent icon">

- **Starting stacks and restoration**: Feel No Pain starts with 10 stacks. After losing a stack, at least 2s must pass before one is restored; more than 2s must also have passed since the previous addition.

- **Losing stacks from damage**: Taking damage, including damage absorbed by Toughness, removes one stack. Blocked attacks do not remove a stack. These damage triggers can remove a stack at most once per second.

- **Each stack**: Gain 3% Toughness replenishment; Toughness damage is multiplied by 0.97. Selecting Toughest! adds a further 2.5% Toughness replenishment per stack.

- **Full-stack example**: At 10 stacks, replenishment is multiplied by 1 + 10 × 3% = 1.30, or 1.55 with Toughest! Toughness damage is multiplied by 0.97^10 ≈ 0.737, so 100 becomes about 73.7. A replenishment amount of 20 becomes 20 × 1.3 = 26, or 31 with Toughest!, capped by the missing amount.

- **When knocked down**: Current effective Feel No Pain stacks are cleared, then restored one at a time.

- **English damage scope**: The original English says Damage Reduction without specifying the damage type. The accepted evidence confirms reduction of Toughness damage; it does not reduce Health damage.

[Details](ogryn_carapace_armor.md) · [Back to index](#talent-index)

---

<a id="ogryn_passive_heavy_hitter"></a>

### Heavy Hitter

<img src="https://github.com/user-attachments/assets/6ad5a8ad-f1c2-4c43-997a-02b89543ebd9" width="72" height="72" alt="Heavy Hitter talent icon">

- **Building stacks**: Melee hits add stacks. Pushes do not count, and later targets cleaved by the same swing do not add further stacks.

- **Stacks and damage**: An ordinary hit adds 1 stack; a heavy hit adds 2. Each stack grants 3% melee damage, up to 8 stacks, or 24% at maximum.

- **Refresh and example**: Adding stacks resets the 7.5s duration. Four ordinary hits grant 12%; at 8 stacks, 100 base melee damage becomes 100 × (1 + 24%) = 124.

[Details](ogryn_passive_heavy_hitter.md) · [Back to index](#talent-index)

---

<a id="ogryn_carapace_armor_trigger_on_zero_stacks"></a>

### Pained Outburst

<img src="https://github.com/user-attachments/assets/ee3a1966-a7c3-442f-a852-74a8b8ada09c" width="72" height="72" alt="Pained Outburst talent icon">

- **Trigger**: With Pained Outburst selected, losing a Feel No Pain stack must leave 4 visible stacks or fewer, and at least 30s must have passed since the previous proc.

- **Effect**: Push back enemies within 2.5m and restore 50% of maximum Toughness. This is a pushback burst and deals no direct damage. Restoration applies Feel No Pain's replenishment bonus and is capped by missing Toughness.

- **Example**: After losing a stack and falling to 4, without Toughest!, the base restoration is 50% × (1 + 4 × 3%) = 56% of maximum Toughness. At maximum Toughness 100 and with sufficient deficit, 100 × 56% = 56 is restored. This restoration is skipped while knocked down.

- **English threshold difference**: The same-build English says 5 stacks or below. The accepted internal threshold, after the stack offset, is 4 visible stacks or fewer.

[Details](ogryn_carapace_armor_trigger_on_zero_stacks.md) · [Back to index](#talent-index)

---

<a id="ogryn_carapace_armor_add_stack_on_push"></a>

### Strongest!

<img src="https://github.com/user-attachments/assets/3d442f9a-0143-43d7-a6e2-10a5d6b8a9f8" width="72" height="72" alt="Strongest! talent icon">

- **Requirement**: With Strongest! selected, a push must actually hit at least one enemy to restore 1 Feel No Pain stack.

- **Stack cap**: Feel No Pain has at most 10 visible stacks. Pushing at full stacks cannot exceed the cap. Restoring a stack through a push restarts the natural 2s stack-restoration interval.

- **Example**: At 6 stacks, pushing either 1 or 3 enemies restores you to 7. At 10 stacks, another successful push leaves you at 10.

[Details](ogryn_carapace_armor_add_stack_on_push.md) · [Back to index](#talent-index)

---

<a id="ogryn_carapace_armor_more_toughness"></a>

### Toughest!

<img src="https://github.com/user-attachments/assets/d6e55419-0e35-49cc-9bd6-163bdff037d4" width="72" height="72" alt="Toughest! talent icon">

- **Requirement**: With both Feel No Pain and Toughest! selected, each Feel No Pain stack grants an additional 2.5% Toughness replenishment.

- **Formula and limit**: At N stacks, this node adds 2.5% × N, alongside Feel No Pain's 3% × N, up to 10 stacks.

- **Example**: At 10 stacks, the replenishment multiplier is 1 + 10 × 5.5% = 1.55. A base restoration of 20 would restore 31, capped by missing Toughness.

[Details](ogryn_carapace_armor_more_toughness.md) · [Back to index](#talent-index)

---

<a id="ogryn_leadbelcher_cooldown_reduction"></a>

### Maximum Firepower

<img src="https://github.com/user-attachments/assets/47256097-2109-4fe4-89b7-b4a224ff1200" width="72" height="72" alt="Maximum Firepower talent icon">

- **Trigger**: A Lucky Bullet proc starts the effect. Ordinary shots do not trigger it.

- **Effect and refresh**: For 2.5s, restore about 1 extra second of combat-ability cooldown each second. Another proc resets the 2.5s duration without increasing the amount restored per tick.

- **Timing example**: If two complete restoration ticks occur while the ability is still cooling down, total progress over 2.5s is 2.5 + 2 × 1 = 4.5s. The extra restoration is applied in one-second ticks; the 2.5s window cannot simply be treated as 5s of cooldown progress.

[Details](ogryn_leadbelcher_cooldown_reduction.md) · [Back to index](#talent-index)

---

<a id="ogryn_leadbelcher_crits"></a>

### Good Shootin'

<img src="https://github.com/user-attachments/assets/048770ea-349f-42a0-b5a1-c582fbfde7f8" width="72" height="72" alt="Good Shootin' talent icon">

- **Requirement**: Lucky Bullet must first trigger, and that shot must hit a target.

- **Scope**: Only the triggering shot's hit is guaranteed to be critical; subsequent shots are not also guaranteed critical hits. This effect does not change Lucky Bullet's proc chance.

- **Damage example**: For the same weapon, armour and hit location, assume ordinary damage 100 and an additional critical component of 50. A Lucky Bullet hit deals 100 + 50 = 150. Critical multipliers vary by weapon; they are not always double damage. A miss deals no damage.

[Details](ogryn_leadbelcher_crits.md) · [Back to index](#talent-index)

---

<a id="ogryn_blo_ally_ranged_buffs"></a>

### Bulletstorm

<img src="https://github.com/user-attachments/assets/11755251-3d1b-4b31-867c-47acaea88760" width="72" height="72" alt="Bulletstorm talent icon">

- **Trigger**: Lucky Bullet triggering is enough; the shot does not have to hit an enemy.

- **Recipients**: You and allies in Coherency gain +15% ranged damage for 8s. Further procs restart the duration.

- **Timing example**: After a proc at 0s, another at 6s gives a fresh 8s duration, extending the buff to 14s.

- **Damage example**: Base ranged damage 100 becomes 100 × (1 + 15%) = 115. Another 20% at the same stage gives 135. This damage buff does not accumulate stacks.

[Details](ogryn_blo_ally_ranged_buffs.md) · [Back to index](#talent-index)

---

<a id="ogryn_blo_wield_speed"></a>

### Heat of Battle

<img src="https://github.com/user-attachments/assets/a9ec95cc-0b91-4558-81b5-faefcf1207d7" width="72" height="72" alt="Heat of Battle talent icon">

- **Prerequisite**: Build Burst Limiter Override stacks through ranged kills. This node follows those stacks; it does not generate stacks or extend their duration by itself. The existing limit is 10 stacks, with duration reset to 10s on each stack addition.

- **Per-stack effect**: Gain 1.5% ranged fire rate per stack, up to 10 stacks.

- **Example**: Six stacks grant 9% ranged fire rate; 10 grant 15%. If the base firing interval is 1s, at full stacks it becomes about 1 ÷ 1.15 = 0.87s.

[Details](ogryn_blo_wield_speed.md) · [Back to index](#talent-index)

---

<a id="ogryn_blo_melee"></a>

### Back Off!

<img src="https://github.com/user-attachments/assets/5c8fc9b0-2f06-4311-87f7-511d4c6ce6d5" width="72" height="72" alt="Back Off! talent icon">

- **Building stacks**: A melee kill adds 1 stack. Even if one swing kills several enemies, it adds at most 1 stack.

- **Extra chance**: Each stack adds 10 percentage points, up to 10 stacks. The bonus is added to Burst Limiter Override's 15% base chance.

- **Consumption and example**: The next shot clears the stacks, including a free Lucky Bullet shot. Five stacks give 15% + 5 × 10% = 65%. Nine give 105%, guaranteeing a proc. Stacks have no fixed countdown.

- **Probability limit**: Below the guaranteed threshold, the game adjusts the proc sequence based on earlier checks. Shots cannot be treated as independent fixed-probability rolls.

[Details](ogryn_blo_melee.md) · [Back to index](#talent-index)

---

<a id="ogryn_heavy_hitter_tdr"></a>

### Don't Feel a Thing

<img src="https://github.com/user-attachments/assets/83bead6b-330f-466e-8c25-c7d383843b1c" width="72" height="72" alt="Don't Feel a Thing talent icon">

- **Requirement**: Damage reduction follows Heavy Hitter's stacks; it decreases when those stacks decrease.

- **Formula and cap**: Each stack reduces the remaining Toughness-damage multiplier by 1.25 percentage points, up to 8 stacks. At full stacks, you take 90% of the original Toughness damage.

- **Example**: At 4 stacks the multiplier is 0.95, turning 100 Toughness damage into 95. At 8 stacks, 100 becomes 90.

[Details](ogryn_heavy_hitter_tdr.md) · [Back to index](#talent-index)

---

<a id="ogryn_heavy_hitter_cleave"></a>

### Great Cleaver

<img src="https://github.com/user-attachments/assets/9c42800c-a3bc-469c-be04-1231b90bca3b" width="72" height="72" alt="Great Cleaver talent icon">

- **Per stack**: Each Heavy Hitter stack increases melee cleave capacity by 12.5%.

- **Maximum**: At 8 stacks, the increase reaches 100%, doubling the base cleave capacity. This bonus follows the current Heavy Hitter stack count.

- **Limit**: Enemies consume different amounts of cleave mass. Doubling capacity does not guarantee hitting twice as many enemies.

- **Example**: At 4 stacks, cleave capacity increases by 50%. At 8 stacks, a base capacity of 10 becomes `10 × 2 = 20`.

[Details](ogryn_heavy_hitter_cleave.md) · [Back to index](#talent-index)

---

<a id="ogryn_heavy_hitter_max_stacks_improves_toughness"></a>

### Unstoppable

<img src="https://github.com/user-attachments/assets/82795688-8a0b-4db1-871c-1302a8f33299" width="72" height="72" alt="Unstoppable talent icon">

- **Requirement**: The bonus applies only to Toughness recovered from melee kills. Other sources of Toughness recovery receive no bonus from this node.

- **Formula and cap**: Each Heavy Hitter stack adds 15%, up to 8 stacks. At full stacks, the increase is 120%, giving 2.2 times the base melee-kill recovery.

- **Example**: If the base melee-kill recovery is 10 Toughness, 8 stacks recover `10 × (1 + 8 × 15%) = 22` Toughness, capped by the amount missing.

[Details](ogryn_heavy_hitter_max_stacks_improves_toughness.md) · [Back to index](#talent-index)

---

<a id="ogryn_heavy_hitter_stagger"></a>

### Impactful

<img src="https://github.com/user-attachments/assets/e8883b71-72ad-4780-92e7-395f6a32ead8" width="72" height="72" alt="Impactful talent icon">

- **Requirement**: The melee Impact bonus follows the current Heavy Hitter stack count. This node does not build a separate set of stacks.

- **Formula and cap**: Each stack adds 7.5%, up to 8 stacks. At full stacks, melee Impact increases by 60%.

- **Example**: At 4 stacks, the increase is 30%. If an attack has base Impact 100, at 8 stacks it becomes `100 × 1.6 = 160`.

[Details](ogryn_heavy_hitter_stagger.md) · [Back to index](#talent-index)

---

<a id="ogryn_heavy_hitter_max_stacks_improves_attack_speed"></a>

### Just Getting Started!

<img src="https://github.com/user-attachments/assets/93481225-465f-4750-a4f3-28602e723b40" width="72" height="72" alt="Just Getting Started! talent icon">

- **Requirement**: Select Just Getting Started! and reach 8 Heavy Hitter stacks to gain the effect.

- **Effect**: At 8 stacks, gain 10% Attack Speed. The bonus is removed when the stack count falls below 8.

- **Example**: If an attack originally occurs once per second, +10% Attack Speed reduces its interval to about `1 ÷ 1.10 = 0.91s`.

[Details](ogryn_heavy_hitter_max_stacks_improves_attack_speed.md) · [Back to index](#talent-index)

---

## Talents

<a id="ogryn_multi_heavy_toughness"></a>

### The Best Defence

<img src="https://github.com/user-attachments/assets/67294825-4742-461c-8445-8eabf69981d3" width="72" height="72" alt="The Best Defence talent icon">

- **Trigger**: Hit at least 2 enemies with one melee attack. At the end of that sweep, recover 5% of maximum Toughness, or 15% for a heavy attack. No kill is required.

- **Example**: With maximum Toughness 100, an ordinary attack recovers `100 × 5% = 5` points and a heavy attack recovers `100 × 15% = 15`. If current Toughness is 95, either can restore only the 5 points missing.

- **Counting**: Each qualifying sweep restores Toughness once, rather than once per enemy hit. Other Toughness recovery modifiers apply separately.

[Details](ogryn_multi_heavy_toughness.md) · [Back to index](#talent-index)

---

<a id="ogryn_single_heavy_toughness"></a>

### Smash 'Em!

<img src="https://github.com/user-attachments/assets/bdf5653a-6df6-4998-a781-ae623083055a" width="72" height="72" alt="Smash 'Em! talent icon">

- **Trigger**: Hit exactly 1 enemy with one melee attack. At the end of that sweep, recover 5% of maximum Toughness, or 15% for a heavy attack. No kill is required.

- **Example**: With maximum Toughness 100, an ordinary attack recovers `100 × 5% = 5` points and a heavy attack recovers `100 × 15% = 15`. If current Toughness is 95, either can restore only the 5 points missing.

- **Counting**: Each qualifying sweep restores Toughness once, rather than once per enemy hit. Other Toughness recovery modifiers apply separately.

[Details](ogryn_single_heavy_toughness.md) · [Back to index](#talent-index)

---

<a id="ogryn_increased_coherency_toughness"></a>

### Lynchpin

<img src="https://github.com/user-attachments/assets/47f9eea2-c58f-4ed3-8678-e42d2ec1701f" width="72" height="72" alt="Lynchpin talent icon">

- **Effect**: Increase your own Toughness regeneration rate through Coherency by 100%. This does not double Toughness recovered from attack hits.

- **Example**: With all other conditions unchanged, an original rate of 5 points per second becomes `5 × (1 + 100%) = 10`. If the same modifier stage already has +20%, the rate changes from 6 to `5 × (1 + 20% + 100%) = 11` points per second.

- **Requirement**: Coherency regeneration conditions and the waiting period still apply. This talent changes only the regeneration rate.

[Details](ogryn_increased_coherency_toughness.md) · [Back to index](#talent-index)

---

<a id="ogryn_reload_speed_on_empty"></a>

### Keep Shooting

<img src="https://github.com/user-attachments/assets/f61476bf-8738-40b1-8c66-63980d690cc7" width="72" height="72" alt="Keep Shooting talent icon">

- **Trigger**: Start reloading with an empty clip to gain +20% Reload Speed for that reload. Reloading early while ammunition remains does not gain this bonus.

- **Time example**: With only this bonus, a 3s action affected by Reload Speed becomes `3 ÷ (1 + 20%) = 2.5s`, about 16.7% shorter. This is not a direct 20% reduction in duration.

- **Persistence**: The empty-clip condition is checked before reloading. That result is retained during the reload, so inserting ammunition does not immediately remove the bonus.

[Details](ogryn_reload_speed_on_empty.md) · [Back to index](#talent-index)

---

<a id="ogryn_more_hits_more_damage"></a>

### Furious

<img src="https://github.com/user-attachments/assets/aeba8245-43aa-438c-9357-a7ac4556a98d" width="72" height="72" alt="Furious talent icon">

- **How it works**: When a melee attack ends, each enemy hit by that attack adds 3% damage to the next melee attack. At most 10 enemies count, for a maximum of +30%.

- **Damage example**: Hitting 4 enemies makes the next attack's base 100 become `100 × (1 + 4 × 3%) = 112`. Hitting 10 or more gives 130. With an existing +20% bonus at the same stage, the four-enemy bonus gives 132.

- **Updates**: Each sweep replaces the previous bonus with its own hit count; counts do not accumulate. A miss resets it to zero. After hitting 4 enemies, hitting only 1 on the next sweep leaves +3% for the following attack.

[Details](ogryn_more_hits_more_damage.md) · [Back to index](#talent-index)

---

<a id="ogryn_ogryn_killer"></a>

### Heavyweight

<img src="https://github.com/user-attachments/assets/c006f0e1-3f32-4dcc-891a-8c44b4ebe6df" width="72" height="72" alt="Heavyweight talent icon">

- **Effect**: Deal 30% more damage to Bulwarks, Crushers, Reapers and Plague Ogryns, and take 30% less damage from them. Both melee and ranged damage qualify.

- **Damage example**: Considering only the damage-bonus stage, `100 × (1 + 30%) = 130`. With an existing +20% bonus at the same stage, the result is 150. Incoming damage of 100 becomes `100 × 0.7 = 70`; other damage reductions apply separately.

- **Targets**: This is not a general bonus against every large enemy or every Monstrosity.

[Details](ogryn_ogryn_killer.md) · [Back to index](#talent-index)

---

<a id="ogryn_melee_stagger"></a>

### Slam

<img src="https://github.com/user-attachments/assets/ee98056a-b754-4821-9542-717ef68c944a" width="72" height="72" alt="Slam talent icon">

- **Impact bonus**: Gain +25% melee Impact, improving stagger. This bonus does not directly increase Health damage.

- **Stamina recovery**: A melee hit or push that successfully staggers an enemy restores 5% of maximum Stamina, with at least 0.75s between recoveries. A hit that causes no stagger restores nothing.

- **Example**: With maximum Stamina 8, each recovery gives `8 × 5% = 0.4`; if only 0.2 is missing, only 0.2 is restored. Considering only the Impact stage, base 100 becomes `100 × 1.25 = 125`. Whether the target staggers still depends on the enemy and attack.

[Details](ogryn_melee_stagger.md) · [Back to index](#talent-index)

---

<a id="ogryn_targets_recieve_damage_taken_increase_debuff"></a>

### Soften Them Up

<img src="https://github.com/user-attachments/assets/53e0b90e-52dc-4a4a-953c-b235753aa97a" width="72" height="72" alt="Soften Them Up talent icon">

- **Trigger**: Damage an enemy with a melee attack while it survives the hit. The enemy takes 15% more damage for 5s, benefiting teammates' subsequent attacks too.

- **Refresh**: Another qualifying melee-damage hit restarts the 5s duration. The effect has at most 1 stack; repeated hits do not raise it to 30%.

- **Damage example**: After the debuff is applied, damage of 100 becomes `100 × (1 + 15%) = 115`. With another +20% at the same damage-taken stage, it becomes 135. The first triggering hit is not recalculated retroactively.

[Details](ogryn_targets_recieve_damage_taken_increase_debuff.md) · [Back to index](#talent-index)

---

<a id="ogryn_toughness_on_low_health"></a>

### Too Stubborn to Die

<img src="https://github.com/user-attachments/assets/72cbf891-ecd4-425c-8d46-97cb4d4863f9" width="72" height="72" alt="Too Stubborn to Die talent icon">

- **Condition**: While Health is below 50% of its maximum, Toughness replenishment amounts increase by 100%. The bonus is inactive at exactly 50% and is lost when Health recovers above the threshold.

- **Recovery example**: A base recovery of 15 becomes `15 × (1 + 100%) = 30` with no other modifiers. With an existing +20% at the same stage, recovery rises from 18 to 33. Actual recovery is still capped by missing Toughness.

- **Scope**: Increases recovery amounts that use Toughness replenishment modifiers. It does not generate a recovery by itself or double all natural Coherency regeneration rates.

[Details](ogryn_toughness_on_low_health.md) · [Back to index](#talent-index)

---

<a id="ogryn_heavy_bleeds"></a>

### Batter

<img src="https://github.com/user-attachments/assets/dbfbaef7-b829-41cf-96cb-a9d09192cfbd" width="72" height="72" alt="Batter talent icon">

- **Trigger**: A melee hit that damages an enemy which survives applies 1 Bleed stack; a heavy hit applies 4 stacks. Maximum 16 stacks.

- **Stacks and timing**: Applying Bleed again adds stacks and resets the 1.5s duration. Bleed deals damage about every 0.5s. Once stacks stop being added and the duration ends, each tick gradually removes 1 stack.

- **Damage formula**: Bleed damage increases nonlinearly with stacks. Against Unarmoured targets with no other modifiers, each tick deals `87.5 × (stacks ÷ 16)² × [3 − 2 × (stacks ÷ 16)]`.

- **Damage example**: At 4 stacks, `87.5 × 0.25² × 2.5 ≈ 13.67` damage; 8 stacks deal 43.75 and 16 deal 87.5. Thus 8 stacks do not deal twice the damage of 4. Other armour types and damage bonuses change the result.

[Details](ogryn_heavy_bleeds.md) · [Back to index](#talent-index)

---

<a id="ogryn_staggering_increases_damage"></a>

### Hard Knocks

<img src="https://github.com/user-attachments/assets/206be198-2a5f-426f-944a-8d85fd74f1d6" width="72" height="72" alt="Hard Knocks talent icon">

- **Trigger**: Stagger an enemy that survives with a melee attack, or push an enemy that is currently staggered, to make it take 15% more melee damage for 5s. Teammates' melee attacks also benefit.

- **Stacks and refresh**: Maximum 1 stack; triggering again restarts the duration. It adds at the same stage as Soften Them Up's 15% general damage-taken bonus.

- **Damage example**: Base melee damage of 100 becomes 115 with this effect alone. With Soften Them Up also active, it becomes `100 × (1 + 15% + 15%) = 130`. Ranged damage does not receive this melee damage-taken bonus.

[Details](ogryn_staggering_increases_damage.md) · [Back to index](#talent-index)

---

<a id="ogryn_movement_speed_after_ranged_kills"></a>

### Unstoppable Momentum

<img src="https://github.com/user-attachments/assets/01fd23cb-46d2-41fa-bfc3-d8b1d17f43a3" width="72" height="72" alt="Unstoppable Momentum talent icon">

- **Trigger**: A ranged kill grants +20% Movement Speed for 3s. Another ranged kill restarts the duration without increasing the bonus further.

- **Speed example**: A base speed of 5m/s becomes `5 × 1.2 = 6m/s` with no other modifiers. With an existing +10% at the same stage, it becomes `5 × (1 + 10% + 20%) = 6.5m/s`.

[Details](ogryn_movement_speed_after_ranged_kills.md) · [Back to index](#talent-index)

---

<a id="ogryn_increased_ammo_reserve"></a>

### Ammo Stash

<img src="https://github.com/user-attachments/assets/fab49cb9-e155-47d2-8b8c-2ad8235a0f48" width="72" height="72" alt="Ammo Stash talent icon">

- **Effect**: Increase the weapon's maximum ammo reserve by 25%. This does not increase magazine capacity.

- **Capacity example**: A base maximum reserve of 200 becomes `200 × (1 + 25%) = 250` rounds. For a base maximum of 101, `101 × 1.25 = 126.25`, rounded down to 126 rounds.

- **Calculation**: Add other reserve-capacity bonuses at the same stage. Replenishment based on a percentage of maximum ammo reserve also uses the increased maximum.

[Details](ogryn_increased_ammo_reserve.md) · [Back to index](#talent-index)

---

<a id="ogryn_multi_hits_grant_reload_speed"></a>

### Pacemaker

<img src="https://github.com/user-attachments/assets/cf916d47-2e00-43d4-98b7-307222a056e6" width="72" height="72" alt="Pacemaker talent icon">

- **Trigger**: Hit at least 3 different enemies within about 0.5s to gain +15% Reload Speed for the next reload. Melee and ranged hits both count; repeated hits on one enemy do not count as multiple enemies.

- **Consumption**: The bonus lasts until the next reload ends, then is removed. Repeated triggers do not stack it to +30%.

- **Time example**: A 3s action affected by Reload Speed becomes `3 ÷ 1.15 ≈ 2.61s`. With another +20% at the same stage, it becomes `3 ÷ (1 + 15% + 20%) ≈ 2.22s`.

- **English erratum**: English says the enemies must be hit with a single attack. The accepted fixed-version implementation counts different targets within about 0.5s without a same-attack identifier restriction. Actual in-game behavior remains unobserved.

[Details](ogryn_multi_hits_grant_reload_speed.md) · [Back to index](#talent-index)

---

<a id="ogryn_free_reload_after_ability"></a>

### Found Some More

<img src="https://github.com/user-attachments/assets/5a19ac08-20bc-41ee-8af1-bbc6194fa852" width="72" height="72" alt="Found Some More talent icon">

- **Replenishment**: Restore reserve ammunition about every 15s, based on 1% of maximum ammo reserve. No combat-ability use or reload is required.

- **Integer example**: With maximum reserve 200, each tick grants `200 × 1% = 2` rounds. With maximum reserve 75, each tick accumulates 0.75 rounds; the fractional remainder carries forward. The first four grants are 0, 1, 1 and 1 rounds, totalling 3.

- **Ammo limit**: Ammunition is added to the reserve, not directly to the magazine. While the magazine is missing ammunition, the same deficit can temporarily be stored in the reserve; combined magazine and reserve ammo still cannot exceed their combined capacities.

[Details](ogryn_free_reload_after_ability.md) · [Back to index](#talent-index)

---

<a id="ogryn_knocked_allies_grant_damage_reduction"></a>

### Won't Give In

<img src="https://github.com/user-attachments/assets/58952102-1822-4093-81f9-48b8cbc8f8a7" width="72" height="72" alt="Won't Give In talent icon">

- **Condition**: Each ally less than 20m away who needs help, such as while downed, disabled or hanging from a ledge, reduces the damage you take by 20%. That ally's contribution disappears when rescued or out of range.

- **Damage-reduction example**: With 1, 2 or 3 qualifying allies, damage of 100 at this stage becomes 80, 60 or 40. Three allies give `100 × (1 − 3 × 20%) = 40`.

[Details](ogryn_knocked_allies_grant_damage_reduction.md) · [Back to index](#talent-index)

---

<a id="ogryn_fully_charged_attacks_gain_damage_and_stagger"></a>

### Crunch!

<img src="https://github.com/user-attachments/assets/e9d72852-9fa6-4e02-aded-e261adb660f0" width="72" height="72" alt="Crunch! talent icon">

- **Charge bonus**: Charging a heavy attack builds up to 4 stacks, each granting +7.5% melee damage and Impact. Charging until the attack is automatically released fills the stacks.

- **Duration**: The bonus applies to that sweep and is removed when it finishes. The first stack's timing depends on the weapon's windup action; subsequent stacks normally arrive every 0.25s. Timing does not start from the button press for every weapon.

- **Damage example**: Four stacks grant `4 × 7.5% = 30%`. Base damage of 100 becomes 130 without other bonuses, or `100 × (1 + 20% + 30%) = 150` with an existing +20% at the same stage.

- **Impact example**: Base Impact of 100 becomes 130 at full stacks. Whether the enemy staggers still depends on its threshold; Impact is not itself damage.

[Details](ogryn_fully_charged_attacks_gain_damage_and_stagger.md) · [Back to index](#talent-index)

---

<a id="ogryn_nearby_bleeds_reduce_damage_taken"></a>

### Delight in Destruction

<img src="https://github.com/user-attachments/assets/669fb8b0-a444-4216-abe1-74f4acc4af85" width="72" height="72" alt="Delight in Destruction talent icon">

- **Condition**: Each bleeding enemy within 8m reduces the damage you take by 5%, counting at most 6 enemies. Bleed applied by teammates also qualifies; multiple Bleed stacks on one enemy still count as one enemy.

- **Damage-reduction example**: Three enemies grant 15% reduction, turning damage of 100 into 85. Six or more give `100 × (1 − 30%) = 70`. With another independent 20% reduction, it becomes `100 × 0.7 × 0.8 = 56`.

- **Updates**: Nearby bleeding enemies are recounted about once per second. Their contribution disappears after death, Bleed ending or leaving range.

[Details](ogryn_nearby_bleeds_reduce_damage_taken.md) · [Back to index](#talent-index)

---

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>

### Toughness Damage Reduction

<img src="https://github.com/user-attachments/assets/a51567af-44cb-46ba-9908-3e3502dcbcdb" width="72" height="72" alt="Toughness Damage Reduction talent icon">

- **Effect**: Reduce incoming Toughness damage by 10%. This does not directly increase maximum Toughness or reduce Health damage.

- **Damage-reduction example**: With only this bonus, Toughness damage of 100 becomes `100 × (1 − 10%) = 90`. With an existing 20% reduction at the same calculation stage, it becomes `100 × (1 − 20% − 10%) = 70`. Other independent reduction multipliers apply separately.

[Details](base_toughness_damage_reduction_node_buff_medium_1.md) · [Back to index](#talent-index)

---

<a id="ogryn_damage_taken_by_all_increases_strength_tdr"></a>

### No Hurting Friends!

<img src="https://github.com/user-attachments/assets/9af41f8c-0f0e-4b2b-965e-c0d01fea2746" width="72" height="72" alt="No Hurting Friends! talent icon">

- **Trigger**: When you or an ally in Coherency take damage, you gain one Strength stack. Toughness-only damage also triggers it; losing Health is not required.

- **Stacks and timing**: Each stack grants +2% Strength, up to 5 stacks / 10%, for 10s. Further triggers restart the duration. At all 5 stacks, also gain 15% Toughness damage reduction; that bonus ends below full stacks.

- **Power example**: With only this bonus, Power of 500 becomes `500 × (1 + 5 × 2%) = 550`. Power affects damage, Impact and cleave. Actual damage still uses weapon curves and target armour; final damage cannot always be multiplied by 1.1.

- **Damage-reduction example**: At full stacks, Toughness damage of 100 at this stage becomes `100 × 0.85 = 85`, or 68 with another independent 20% reduction.

#### Chinese localization note

- The Chinese description limits the trigger to Health damage, which is too narrow: Toughness-only damage also builds stacks without prior Health loss. The English wording says Damage Taken and does not impose that restriction.

[Details](ogryn_damage_taken_by_all_increases_strength_tdr.md) · [Back to index](#talent-index)

---

<a id="ogryn_ally_movement_boost_on_ability"></a>

### Get Stuck In

<img src="https://github.com/user-attachments/assets/895c3ccd-387f-4862-9a2b-b429ff5d6432" width="72" height="72" alt="Get Stuck In talent icon">

- **Trigger**: Activating your Combat Ability grants you and allies currently in Coherency +20% Movement Speed and immunity to Stuns and Suppression for 6s.

- **Timing and stacking**: Leaving Coherency does not immediately remove the effect. Receiving it again restarts the duration; the speed bonus does not stack to 40%.

- **Speed example**: Starting at 5m/s, with only this bonus, speed becomes `5 × (1 + 20%) = 6m/s`.

[Details](ogryn_ally_movement_boost_on_ability.md) · [Back to index](#talent-index)

---

<a id="ogryn_windup_reduces_damage_taken"></a>

### Implacable

<img src="https://github.com/user-attachments/assets/bb088b60-c1e8-42a7-b68e-3ef59f5d9eb9" width="72" height="72" alt="Implacable talent icon">

- **Condition**: Gain 15% damage reduction while charging a heavy melee attack. The reduction ends when charging ends; it does not automatically continue throughout the subsequent swing.

- **Damage-reduction example**: With only this effect, damage of 100 becomes `100 × 0.85 = 85`. With another independent 20% reduction, it becomes `100 × 0.85 × 0.8 = 68`.

[Details](ogryn_windup_reduces_damage_taken.md) · [Back to index](#talent-index)

---

<a id="ogryn_windup_is_uninterruptible"></a>

### No Stopping Me!

<img src="https://github.com/user-attachments/assets/d80b562f-7fc2-4daf-85e4-ae25f8171a89" width="72" height="72" alt="No Stopping Me! talent icon">

- **Condition**: While charging a heavy melee attack, become Uninterruptible and remove that action's Movement Speed penalty. Both effects end when charging ends.

- **Speed example**: Assume normal speed is 5m/s and charging normally imposes a 50% penalty, reducing it to 2.5m/s. Removing that penalty restores 5m/s; it does not add 100% to all Movement Speed.

- **Limit**: This does not grant invulnerability; you still take damage while charging.

[Details](ogryn_windup_is_uninterruptible.md) · [Back to index](#talent-index)

---

<a id="ogryn_kills_grant_crit_chance"></a>

### Massacre

<img src="https://github.com/user-attachments/assets/7e27b3b4-5eca-49b5-aafd-c8abc6635b14" width="72" height="72" alt="Massacre talent icon">

- **Trigger and stacks**: Killing an enemy grants one stack, adding 2 percentage points of Critical Chance per stack, up to 8 stacks, for 12s. Another kill restarts the duration.

- **Chance example**: Starting at 5% Critical Chance, full stacks give `5% + 8 × 2% = 21%`, rather than `5% × 1.16`. The bonus increases Critical Chance; it does not guarantee a critical hit on every attack.

[Details](ogryn_kills_grant_crit_chance.md) · [Back to index](#talent-index)

---

<a id="ogryn_revenge_damage"></a>

### Payback Time

<img src="https://github.com/user-attachments/assets/5d6152a6-dedb-49c4-a7d2-328d082084c0" width="72" height="72" alt="Payback Time talent icon">

- **Trigger**: Successfully dodging a melee attack, or taking damage from a melee attack, grants +15% damage for 5s. Damage absorbed by Toughness also triggers it.

- **Stacks and refresh**: Both melee and ranged damage benefit. Repeated triggers refresh the duration without adding stacks.

- **Damage example**: Base damage of 100 becomes 115. With another +20% at the same stage, it becomes `100 × (1 + 20% + 15%) = 135`.

[Details](ogryn_revenge_damage.md) · [Back to index](#talent-index)

---

<a id="ogryn_rending_on_elite_kills"></a>

### Dominate

<img src="https://github.com/user-attachments/assets/0eb640b4-e206-4d0b-a982-f74b33baf5b2" width="72" height="72" alt="Dominate talent icon">

- **Trigger**: Killing an Elite grants +15% Rending for 10s. Further triggers refresh the duration without increasing the bonus.

- **Effect**: Rending improves an attack's damage multiplier against certain armour types. The actual increase depends on the weapon's existing armour multiplier; final damage cannot uniformly be multiplied by 1.15.

- **Damage example**: With an original Carapace Armour multiplier of 0.5, base damage of 100 deals 50. Adding 15% Rending gives `100 × (0.5 + 0.15) = 65`, a relative increase of 30%. If the original multiplier is already 1, excess Rending contributes only one quarter: `100 × (1 + 0.15 × 0.25) = 103.75`.

#### Chinese localization note

- The Chinese text adds a times unit after the Rending percentage, which is incorrect. The effect grants 15% Rending; it does not make Rending 15 times as large.

[Details](ogryn_rending_on_elite_kills.md) · [Back to index](#talent-index)

---

<a id="ogryn_reloading_grants_damage"></a>

### Reloaded and Ready

<img src="https://github.com/user-attachments/assets/27fcc279-9828-4df7-b895-04956bb2463b" width="72" height="72" alt="Reloaded and Ready talent icon">

- **Trigger**: Reloading grants +15% ranged damage for 8s. Reloading again refreshes the duration without adding stacks.

- **Damage example**: Base ranged damage of 100 becomes 115. With another +20% at the same stage, it becomes `100 × (1 + 20% + 15%) = 135`. Melee damage does not receive this bonus.

[Details](ogryn_reloading_grants_damage.md) · [Back to index](#talent-index)

---

<a id="ogryn_increase_explosion_radius"></a>

### Big Boom

<img src="https://github.com/user-attachments/assets/c6421034-209b-4fab-857d-541fa0667d8b" width="72" height="72" alt="Big Boom talent icon">

- **Effect**: Increase both an explosion's outer radius and its central high-damage radius by 27.5%. This does not directly increase the damage value of each explosion.

- **Area example**: An original radius of 4m becomes `4 × 1.275 = 5.1m`. Assuming an unobstructed planar circle, area becomes `1.275² ≈ 1.626` times the original, an increase of about 62.6%.

- **Combination**: Other explosion-radius bonuses at the same stage add together. Terrain obstruction and the explosion's own hit detection still affect actual coverage.

[Details](ogryn_increase_explosion_radius.md) · [Back to index](#talent-index)

---

<a id="ogryn_blocking_reduces_push_cost"></a>

### No Pushover

<img src="https://github.com/user-attachments/assets/b35eb9be-169c-48cf-a295-329eae3a3610" width="72" height="72" alt="No Pushover talent icon">

- **Trigger**: While the effect is ready, your push gains +250% Impact. Completing that push starts an 8s cooldown; ordinary pushes during cooldown do not restart the countdown.

- **Impact example**: Base push Impact of 100 becomes `100 × (1 + 250%) = 350`. This is stagger strength, not 350 damage.

- **Consumption**: Cooldown starts when the push finishes. Even a push that hits no enemy consumes the empowered push.

[Details](ogryn_blocking_reduces_push_cost.md) · [Back to index](#talent-index)

---

<a id="ogryn_blocking_ranged_taunts"></a>

### Attention Seeker

<img src="https://github.com/user-attachments/assets/119478f3-6425-4e96-9f26-e0df95a4bf1e" width="72" height="72" alt="Attention Seeker talent icon">

- **Trigger**: Blocking an enemy's attack or hitting it with a push makes that enemy prioritize attacking you for 8s.

- **Limits**: Monsters are excluded. An enemy already Taunted does not receive this short Taunt again or have its duration refreshed.

- **Timing example**: If first Taunted at 0s, pushing the same still-Taunted enemy at 4s does not move the end to 12s. Taunt may end early if you die, become imperceptible to the enemy, or similar conditions apply.

[Details](ogryn_blocking_ranged_taunts.md) · [Back to index](#talent-index)

---

<a id="ogryn_protect_allies"></a>

### For the Lil'Uns

<img src="https://github.com/user-attachments/assets/d61a8184-294b-4ade-9847-3c5241828792" width="72" height="72" alt="For the Lil'Uns talent icon">

- **Ally Toughness break**: When another ally's Toughness breaks, gain +10% Power and reduce Toughness damage taken by 25% for 10s. Your own Toughness break does not trigger it; there is no additional Coherency range requirement.

- **Duration and cooldown**: Another ally Toughness break while active resets the 10s duration. The 20s cooldown begins after the effect ends. For example, a trigger at 0s without further refresh ends at 10s and can trigger again at 30s.

- **Downed-ally rescue effect**: Another ally being knocked down independently grants +25% Revive Speed and Stun immunity for 10s. Further triggers refresh its duration; this effect is not limited by the 20s cooldown above.

- **Calculation examples**: Power of 500 becomes 550; Toughness damage of 100 at this stage becomes 75. With only +25% Revive Speed, an original 5s revive becomes `5 ÷ 1.25 = 4s`. With another +25% Revive Speed at the same stage, it becomes `5 ÷ 1.5 ≈ 3.33s`.

[Details](ogryn_protect_allies.md) · [Back to index](#talent-index)

---

<a id="ogryn_corruption_resistance"></a>

### Simple Minded

<img src="https://github.com/user-attachments/assets/c5cc14b1-1227-4449-a1d9-de912e048e6e" width="72" height="72" alt="Simple Minded talent icon">

- **Effect**: Reduce Corruption received through damage calculation by 40%. This does not clear existing Corruption or provide general damage reduction.

- **Corruption example**: An original increase of 20 Corruption becomes `20 × 0.6 = 12`. With another independent 20% Corruption reduction, it becomes `20 × 0.6 × 0.8 = 9.6`.

[Details](ogryn_corruption_resistance.md) · [Back to index](#talent-index)

---

<a id="ogryn_melee_attacks_give_mtdr"></a>

### Focused Fighter

<img src="https://github.com/user-attachments/assets/fca0827b-6dac-4c44-b92e-8aba309ff4ca" width="72" height="72" alt="Focused Fighter talent icon">

- **Gaining stacks**: Each melee sweep that hits at least one enemy adds one stack, up to 5. Hitting multiple enemies in the same sweep still grants only one stack.

- **Damage-reduction example**: Each stack multiplies incoming melee damage by 0.96. At five stacks, `100 × 0.96⁵ ≈ 81.54`, about 18.46% total reduction rather than a flat 20%.

- **Removal**: Stacks have no fixed countdown. Melee damage to you or an ally clears them. This reduction affects only melee damage you take, not ranged damage.

[Details](ogryn_melee_attacks_give_mtdr.md) · [Back to index](#talent-index)

---

<a id="ogryn_pushing_applies_brittleness"></a>

### Brutish Strength

<img src="https://github.com/user-attachments/assets/024bec9b-772c-4313-b7b8-d119efdcf8f1" width="72" height="72" alt="Brutish Strength talent icon">

- **Trigger and stacks**: Pushing a still-living enemy applies 4 Brittleness stacks, each worth 2.5%, for 10% total. Maximum 16 stacks / 40%, lasting 5s; another application refreshes the duration.

- **Effect**: The debuff stays on the enemy, so allies also benefit. Brittleness combines with the attacker's Rending to improve armour multipliers; it does not grant a fixed equivalent increase to final damage.

- **Damage example**: Assuming an original Carapace Armour multiplier of 0.5 and base damage of 100, one push gives `100 × (0.5 + 4 × 2.5%) = 60`. At all 16 stacks it gives 90. The part exceeding an armour multiplier of 1 follows the excess-Rending rules.

[Details](ogryn_pushing_applies_brittleness.md) · [Back to index](#talent-index)

---

<a id="ogryn_explosions_burn"></a>

### Fire Away

<img src="https://github.com/user-attachments/assets/c78dbead-adf5-4b9e-9629-9a3a0a93ae8c" width="72" height="72" alt="Fire Away talent icon">

- **Trigger**: An explosion that damages an enemy still alive afterward applies 1 Burn stack. A hit in that explosion's central area applies 2 stacks instead, not an additional 2. The specified Power Maul explosion does not trigger it.

- **Stacks and timing**: This talent can bring Burn up to 8 stacks. Further triggers reset the 4s maintenance duration, including when already at 8 stacks. Damage occurs about every 0.5s; after the maintenance duration ends, stacks are removed progressively.

- **Damage formula**: Against Unarmoured targets with no other modifiers, each Burn tick deals `600 × (stacks ÷ 31)² × [3 − 2 × (stacks ÷ 31)]`. The denominator uses the shared Burn cap of 31, rather than this talent's application cap of 8.

- **Damage example**: Two stacks deal about 7.17 damage per tick; eight deal about 99.25. Armour and other damage bonuses affect actual values, and one tick's damage is not the total over the complete duration.

#### Chinese localization note

- The Chinese wording adds 2 stacks at close range and can be read as a total of 3. The actual central-area hit instead applies 2 stacks total.

[Details](ogryn_explosions_burn.md) · [Back to index](#talent-index)

---

<a id="ogryn_block_all_attacks"></a>

### Unbreakable

<img src="https://github.com/user-attachments/assets/3ff7d7eb-6206-4d77-91c5-483259320072" width="72" height="72" alt="Unbreakable talent icon">

- **Perfect Block**: Normally, the first approximately 0.3s after beginning a block is the Perfect Block window. During it, you can block melee attacks marked as unblockable; ordinary blocking requirements such as angle still apply.

- **Damage bonus**: A successful Perfect Block grants +20% damage to the next melee sweep, retained for at most 5s. Completing the sweep consumes it, even if it misses. Further Perfect Blocks refresh the duration without adding percentages.

- **Damage example**: Base damage of 100 becomes 120. With an existing +30% at the same stage, it becomes `100 × (1 + 30% + 20%) = 150`.

[Details](ogryn_block_all_attacks.md) · [Back to index](#talent-index)

---

<a id="ogryn_damage_reduction_on_high_stamina"></a>

### Pumped Up

<img src="https://github.com/user-attachments/assets/15edb762-d209-407d-8bd5-fc0672bd5ef8" width="72" height="72" alt="Pumped Up talent icon">

- **Condition**: Active while current Stamina is above 75% of maximum. Exactly 75% does not qualify; spending Stamina below the threshold removes the reduction.

- **Damage-reduction example**: Damage of 100 at this stage becomes `100 × 0.875 = 87.5`. With another independent 20% reduction, it becomes `100 × 0.875 × 0.8 = 70`.

[Details](ogryn_damage_reduction_on_high_stamina.md) · [Back to index](#talent-index)

---

<a id="ogryn_crit_damage_increase"></a>

### Lucky Streak

<img src="https://github.com/user-attachments/assets/de5091de-3dd6-455b-875a-55228eb4d67e" width="72" height="72" alt="Lucky Streak talent icon">

- **Effect**: Increase the additional damage component of a critical hit by 75%. This does not increase Critical Chance or multiply the entire critical hit's damage by 1.75. The additional component's share varies with weapon, armour and hit location, so the actual increase varies too.

- **Damage example**: Under fixed conditions, assume the original damage comprises 100 base damage and 50 additional critical damage, for 150 total. With this effect, `100 + 50 × 1.75 = 187.5`, a relative increase of 25%. If the additional component is only 20, the total rises from 120 to 135, an increase of only 12.5%.

- **Critical Weakspot hits**: When a hit is both critical and on a Weakspot, the shared additional damage is calculated first, then the critical and Weakspot bonuses are applied. Do not multiply by separate critical and Weakspot multipliers once each.

[Details](ogryn_crit_damage_increase.md) · [Back to index](#talent-index)

---

<a id="ogryn_stacking_attack_speed"></a>

### Frenzied Blows

<img src="https://github.com/user-attachments/assets/5f6d651a-4c88-40ea-a96b-3133459df2f4" width="72" height="72" alt="Frenzied Blows talent icon">

- **Gaining stacks**: Consecutive melee sweeps hitting enemies grant one stack per sweep starting with the second successful sweep. Hitting multiple enemies in one sweep still grants only one stack.

- **Duration and interruption**: Each stack grants +2.5% melee Attack Speed, up to 5 stacks / 12.5%, for 5s. Further hits refresh the duration; a missed sweep clears the bonus and resets the chain.

- **Speed example**: At full stacks, an Attack-Speed-scaled 1s action becomes `1 ÷ (1 + 5 × 2.5%) ≈ 0.889s`, rather than a direct 12.5% duration reduction to 0.875s.

[Details](ogryn_stacking_attack_speed.md) · [Back to index](#talent-index)

---

<a id="ogryn_melee_damage_after_heavy"></a>

### Beat Them Back

<img src="https://github.com/user-attachments/assets/373afc07-72d5-4815-91c0-0e5d0d02d279" width="72" height="72" alt="Beat Them Back talent icon">

- **Trigger**: A heavy melee attack hitting at least one enemy grants +15% melee damage after its sweep finishes, lasting 5s. The triggering heavy attack does not retroactively receive the bonus.

- **Stacks and refresh**: Another heavy hit refreshes the duration. Hitting multiple enemies does not increase the percentage; ordinary melee attacks during the active period also benefit.

- **Damage example**: Base damage of 100 becomes 115. With another +20% at the same stage, it becomes `100 × (1 + 20% + 15%) = 135`.

[Details](ogryn_melee_damage_after_heavy.md) · [Back to index](#talent-index)

---

<a id="ogryn_drain_stamina_for_handling"></a>

### Concentrate

<img src="https://github.com/user-attachments/assets/d21c7405-647a-4da2-a396-16b9c5cd8819" width="72" height="72" alt="Concentrate talent icon">

- **Condition**: While bracing your ranged weapon with Stamina remaining, reduce Sway by 60%, Spread by 20% and Recoil by 15%. These bonuses are lost when Stamina runs out.

- **Stamina drain**: Drain 0.5 Stamina per second; reloading stops this drain. With 5 Stamina and no other drain or drain modifiers, this can last at most `5 ÷ 0.5 = 10s`.

- **Handling example**: Isolating other modifiers, Sway, Spread and Recoil parameters initially at 100 become 40, 80 and 85 respectively. These are handling parameters, not fixed percentage increases to accuracy.

[Details](ogryn_drain_stamina_for_handling.md) · [Back to index](#talent-index)

---

<a id="ogryn_damage_reduction_after_elite_kill"></a>

### Strongman

<img src="https://github.com/user-attachments/assets/6fbf8a63-5e26-482f-9964-01eb0598b142" width="72" height="72" alt="Strongman talent icon">

- **Trigger**: Killing an Elite or Specialist grants 10% damage reduction for 5s. Another qualifying kill restarts the timer without adding stacks.

- **Damage-reduction example**: With this effect alone, damage of 100 becomes 90. With another independent 20% reduction, it becomes `100 × 0.9 × 0.8 = 72`.

[Details](ogryn_damage_reduction_after_elite_kill.md) · [Back to index](#talent-index)

---

<a id="ogryn_toughness_while_bracing"></a>

### Steady Grip

<img src="https://github.com/user-attachments/assets/ce3b22d4-870e-4496-96fc-33601f9d9a62" width="72" height="72" alt="Steady Grip talent icon">

- **Replenishment condition**: Continuously replenish Toughness while bracing a ranged weapon or shooting. The shooting condition remains for approximately 0.5s after shooting stops.

- **Replenishment example**: With maximum Toughness of 200, base replenishment per second is `200 × 12.5% = 25`; 2s gives 50. Toughness replenishment bonuses can further modify this amount, which cannot exceed missing Toughness.

- **Effect type**: This adds continuous replenishment; it does not merely increase ordinary Coherency regeneration by 12.5%.

[Details](ogryn_toughness_while_bracing.md) · [Back to index](#talent-index)

---

<a id="ogryn_ranged_damage_immunity"></a>

### Can't Hit Me...Again

<img src="https://github.com/user-attachments/assets/b7e2a92b-0a60-459a-87c9-6276b204f64e" width="72" height="72" alt="Can't Hit Me...Again talent icon">

- **Trigger**: Taking ranged damage yourself grants 20% ranged damage reduction for 2.5s. Damage affecting only Toughness can trigger it. The triggering first hit has already been resolved and does not receive the reduction retroactively.

- **Duration and cooldown**: Further hits during the effect do not restart the timer. A 4s cooldown begins when the effect ends. A trigger at 0s ends at 2.5s and can trigger again at 6.5s.

- **Damage-reduction example**: While active, ranged damage of 100 at this stage becomes 80. Melee damage receives no reduction from this effect.

[Details](ogryn_ranged_damage_immunity.md) · [Back to index](#talent-index)

---

<a id="ogryn_wield_speed_increase"></a>

### Dedicated Practice

<img src="https://github.com/user-attachments/assets/5974d1c4-5b31-42b8-af90-022202c4614e" width="72" height="72" alt="Dedicated Practice talent icon">

- **Effect**: Increase Weapon Swap Speed by 35%, reducing the duration of weapon-draw actions controlled by this speed stat. Reload Speed is not increased.

- **Timing example**: An original 1s action becomes `1 ÷ 1.35 ≈ 0.741s`, approximately 25.9% shorter. It does not become 35% of the original duration or receive a direct 35% duration reduction.

#### Existing Traditional Chinese wording correction

- The Chinese wording “武器切換速度縮短為 +35%” confuses speed with duration. It should mean Weapon Swap Speed increases by 35%; the same action takes approximately 74.1% of its original duration.

[Details](ogryn_wield_speed_increase.md) · [Back to index](#talent-index)

---

<a id="ogryn_ranged_improves_melee"></a>

### Spray and Slay

<img src="https://github.com/user-attachments/assets/eeae1229-b245-43fc-9840-960c36f5787e" width="72" height="72" alt="Spray and Slay talent icon">

- **Trigger**: Consuming ammunition that empties the current weapon's clip grants +15% melee damage and +7.5% melee Attack Speed for 6s. Switching to a melee weapon then lets you use the bonuses.

- **Stacks and refresh**: Another qualifying trigger restarts the timer without stacking percentages. Simply continuing to hold an empty clip does not repeatedly trigger the effect.

- **Calculation example**: Base melee damage of 100 becomes 115. An Attack-Speed-scaled 1s action becomes `1 ÷ 1.075 ≈ 0.930s`. Other same-stage damage and speed bonuses add within their respective stats.

[Details](ogryn_ranged_improves_melee.md) · [Back to index](#talent-index)

---

<a id="ogryn_melee_improves_ranged"></a>

### Bash and Blast

<img src="https://github.com/user-attachments/assets/fdf1eb1f-b76f-4452-beac-f2205fc32d2b" width="72" height="72" alt="Bash and Blast talent icon">

- **Trigger and stacks**: Each melee kill grants one stack of +3% ranged damage, up to 5 stacks / 15%, lasting 10s. Another melee kill restarts the timer.

- **Damage example**: At full stacks, base ranged damage of 100 becomes 115. With another +20% at the same stage, it becomes `100 × (1 + 20% + 5 × 3%) = 135`.

[Details](ogryn_melee_improves_ranged.md) · [Back to index](#talent-index)

---

<a id="ogryn_ally_elite_kills_grant_cooldown"></a>

### Bruiser

<img src="https://github.com/user-attachments/assets/9e138d4c-f301-46c6-9eef-5aff038efc7c" width="72" height="72" alt="Bruiser talent icon">

- **Trigger**: When you or an ally in Coherency kills an Elite, restore approximately 0.5s of additional Combat Ability cooldown per second for 4s. Specialists that are not Elites do not trigger it.

- **Refresh**: Another qualifying kill resets the 4s countdown without increasing the restoration per second. The effect has a maximum of one stack.

- **Timing example**: Normal cooldown recovery restores 1s per second, with an additional 0.5s per tick. If all four extra ticks are received, 4s advances cooldown by `4 + 4 × 0.5 = 6s`, saving an additional 2s. Actual recovery depends on whether cooldown is already full and on update timing.

[Details](ogryn_ally_elite_kills_grant_cooldown.md) · [Back to index](#talent-index)

---

<a id="ogryn_weakspot_damage"></a>

### Strike True

<img src="https://github.com/user-attachments/assets/dae8db6d-b212-4abd-a84b-246c0910e0b3" width="72" height="72" alt="Strike True talent icon">

- **Effect**: A melee hit on an enemy Weakspot increases that attack's Strength by 10%. It does not affect ranged Weakspot hits or melee hits that miss the Weakspot.

- **Strength example**: Original Strength of 500 becomes `500 × 1.1 = 550` on a Weakspot hit. With an existing +20% Strength at the same stage, it becomes `500 × (1 + 20% + 10%) = 650`.

- **Damage calculation**: The bonus applies to Strength before the weapon's damage, Impact and other curves. It differs from effects that only increase additional Weakspot damage; do not assume final damage is always multiplied by 1.1.

[Details](ogryn_weakspot_damage.md) · [Back to index](#talent-index)

---

<a id="ogryn_bracing_reduces_damage_taken"></a>

### Mobile Emplacement

<img src="https://github.com/user-attachments/assets/38b1d6e0-b6a5-4692-92a2-fe6caf0b9083" width="72" height="72" alt="Mobile Emplacement talent icon">

- **Condition**: Take 25% less damage while bracing a ranged weapon or shooting. The shooting condition remains for approximately 0.5s after shooting stops.

- **Damage-reduction example**: Damage of 100 at this stage becomes `100 × 0.75 = 75`. With another independent 20% reduction, it becomes 60.

- **Duration**: Active whenever the bracing or shooting condition is met, without extra stacks or a fixed cooldown.

[Details](ogryn_bracing_reduces_damage_taken.md) · [Back to index](#talent-index)
