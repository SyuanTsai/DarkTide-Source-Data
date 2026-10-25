# Scum talents: Release 1.13.1

[繁體中文](../README.md) | [Sources, formulas and technical index](SOURCE_INDEX.md) | [Talent classes](../../../README.en.md) | [Release information](../../../../README.md)

[Character base effects](BASE_EFFECTS.md)

<a id="talent-index"></a>

## Talent index

| Talent | Main effects | Category |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/fd2156cb-6e65-4214-bd01-ab0b28665714" width="32" height="32" alt="Blackout talent icon"> [Blackout](#broker_blitz_flash_grenade_improved) | <ul><li>Quick Stagger grenade, up to 5 carried; every 20 kills at Close Range replenish one grenade.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/3b4df232-3b49-4f84-98c0-2b3e8828f917" width="32" height="32" alt="Boom Bringer talent icon"> [Boom Bringer](#broker_blitz_missile_launcher) | <ul><li>High-powered missile launcher, up to 2 missiles; base explosion radius 7 metres.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/7d3c5999-8823-4b54-9204-6e22637bc851" width="32" height="32" alt="Chem Grenade talent icon"> [Chem Grenade](#broker_blitz_tox_grenade) | <ul><li>Thrown Chem Grenade leaves toxic matter for 15 seconds; carry up to 2.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/3927d1d0-9e15-4b96-9a91-00f0503e338c" width="32" height="32" alt="Gunslinger Improved talent icon"> [Gunslinger Improved](#broker_aura_gunslinger_improved) | <ul><li>An Ammo pickup collected in Coherency additionally replenishes each member with 10% of that pickup's amount, calculated for their own capacity.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/7fc85ba0-f7e6-4aba-a966-638511f2c713" width="32" height="32" alt="Ruffian talent icon"> [Ruffian](#broker_coherency_melee_damage) | <ul><li>You and allies in Coherency gain 10% Melee Damage.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/213537c0-9bdc-49a7-9b60-67aaeb58f395" width="32" height="32" alt="Anarchist talent icon"> [Anarchist](#broker_coherency_anarchist) | <ul><li>You and allies in Coherency gain 5 percentage points of Critical Chance.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/785f7b2c-0591-4cc4-b928-31c26b07d0f7" width="32" height="32" alt="Enhanced Desperado talent icon"> [Enhanced Desperado](#broker_ability_focus_improved) | <ul><li>Activate to swap to and reload the Ranged Weapon for 10 seconds of focus: count as Dodging Ranged Attacks, Sprint without Stamina cost and gain an additive 20% Sprint Speed.</li><li>Highlight eligible enemies within 12.5 metres; Ranged kills of highlighted targets at Close Range extend the state, initially by 1 second per kill, with progressively smaller extensions after 20 seconds.</li><li>Base cooldown 45 seconds; natural replenishment pauses during the state and resumes when it ends.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/70eb922d-eda2-4ed7-b945-ed3b305b10a6" width="32" height="32" alt="Stimm Supply talent icon"> [Stimm Supply](#broker_ability_stimm_field) | <ul><li>Deploy a Stimm gas field with a 3-metre radius for 20 seconds. Operatives in it heal 0.5 Corruption every 0.25 seconds, up to 40 total, and become immune to Corruption.</li><li>If you carry a Stimm, the field also gives nearby allies its effects. Base cooldown 60 seconds; natural replenishment pauses while the field exists.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/ae8bc68a-7d1b-4ee7-8691-bed95ed8069d" width="32" height="32" alt="Rampage! talent icon"> [Rampage!](#broker_ability_punk_rage) | <ul><li>Activate to refill Toughness and enter rage for 10 seconds: additive +35% Melee Power Level, additive +20% Melee Attack Speed and ×0.75 Damage taken (25% reduction from this effect alone).</li><li>Melee hits extend rage, initially by 0.3 seconds each; after every 20 seconds from activation the per-hit extension halves. Base cooldown 30 seconds, with natural replenishment paused during rage.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/1a4c2d3b-dfba-4840-a85d-c8d5390e3a42" width="32" height="32" alt="Pulverising Strikes talent icon"> [Pulverising Strikes](#broker_ability_punk_rage_sub_2) | <ul><li>During rage, Cleave capacity gains an additive +50%. Gain a Melee Power stack for approximately every second rage persists: +2.5% each, up to 10 stacks (+25%).</li><li>With rage's base +35% Melee Power Level, these two effects give at most +60% Power Level, not a guaranteed +60% final Damage.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/db7fee2b-9e46-49f1-a0ac-28cd6cea424f" width="32" height="32" alt="Channelled Aggression talent icon"> [Channelled Aggression](#broker_ability_punk_rage_sub_1) | <ul><li>While rage is active, Melee Heavy Attacks gain additive +25% Rending in the armour-penetration calculation.</li><li>The effect checks Melee Heavy Attacks; Rending is not a direct 25% Damage increase.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/c23bede2-8365-4a28-9fcf-0aa91847923a" width="32" height="32" alt="Forge's Bellow talent icon"> [Forge's Bellow](#broker_ability_punk_rage_sub_3) | <ul><li>Shout when rage starts and ends, Staggering enemies within 4.5 metres.</li><li>Each Shout adds −50% enemy Melee Attack Speed for 5 seconds; a 1-second attack interval becomes approximately 2 seconds with only this effect.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/040166f5-e6b1-4f43-ae17-2c21b8fd8014" width="32" height="32" alt="Boiling Blood talent icon"> [Boiling Blood](#broker_ability_punk_rage_sub_4) | <ul><li>Melee hits on Elite, Specialist, Monstrosity or Captain-tagged enemies extend rage by 1 second; these hits begin diminishing after 30 seconds, halving at each 30-second stage.</li><li>Ordinary enemy hits keep the base 0.3-second extension and 20-second diminution stages; the 30-second upgrade applies only to the special tags.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/74d4304b-23f7-4666-879b-62c727596b69" width="32" height="32" alt="Focused Resolve talent icon"> [Focused Resolve](#broker_ability_focus_sub_3) | <ul><li>During focus, eligible Close Range Ranged kills restore 0.5 seconds of Ability Cooldown, or 1 second for Elites and Specialists.</li><li>Each focus activation can restore at most 5 seconds; qualifying Needle Pistol Toxin deaths can also contribute.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/732d190b-365f-4815-9d94-bc136cafd423" width="32" height="32" alt="Pick Your Targets talent icon"> [Pick Your Targets](#broker_ability_focus_sub_2) | <ul><li>During focus, Ranged Attacks gain +15% Rending.</li><li>Eligible Close Range Ranged kills add +3% Ranged Damage per stack, up to 5 stacks. New kills refresh the 3-second duration; stacks then decay one at a time, and all end when focus ends.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/c0ce43c8-1324-4c26-8319-c1f12c28fbb3" width="32" height="32" alt="Practiced Deployment talent icon"> [Practiced Deployment](#broker_ability_stimm_field_sub_3) | <ul><li>Acquiring a usable Stimm or recovering a dedicated Stimm charge fills one Stimm Supply ability charge.</li><li>The effect polls every 0.5 seconds and respects the one-charge cap; an already-held Stimm does not trigger it when first selecting the talent.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/4ea2874c-338f-42ec-95cb-9f4c08e64794" width="32" height="32" alt="Fast Acting Stimms talent icon"> [Fast Acting Stimms](#broker_ability_stimm_field_sub_1) | <ul><li>Stimm Supply's field lasts 5 seconds; effects already received can linger for 15 seconds after leaving the area or when the field ends.</li><li>Natural cooldown resumes when the field ends. Lingering effects do not extend the cooldown pause: 5 + 60 = 65 seconds from deployment to full natural recovery.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/c3cdd1a9-e1eb-4e29-9a5e-6bae44c280a4" width="32" height="32" alt="Booby Trap talent icon"> [Booby Trap](#broker_ability_stimm_field_sub_2) | <ul><li>When Stimm Supply's field completes its lifetime, it causes one frag explosion within 3 metres.</li><li>Enemies taking positive explosion Damage and having a buff extension receive 7 Toxin stacks. The explosion does not extend the cooldown pause.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/4575cb9c-10e2-489c-8b4f-0b8f4eda154d" width="32" height="32" alt="Nimble talent icon"> [Nimble](#broker_passive_improved_dodges) | <ul><li>Dodge movement speed increases by 25%.</li><li>After a Dodge, the additional 0.15-second Dodging window gives 0.40 seconds for Melee/grab checks and 0.15 seconds for Ranged checks; avoidance still depends on each attack's rules.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/2b18473f-9818-4d07-98ab-b4c7995dbf8d" width="32" height="32" alt="Adrenaline Frenzy talent icon"> [Adrenaline Frenzy](#broker_keystone_adrenaline_junkie) | <ul><li>Melee hits grant 1 Adrenaline stack; Critical Melee hits grant 1 additional stack. Without another gain, one stack decays every 2 seconds.</li><li>Reaching 30 stacks clears Adrenaline and grants 10 seconds of +10% Melee Attack Speed and +25% additive Melee Damage; retriggering refreshes Frenzy.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/6cc42ba2-04c8-4a98-ae3e-5341b777ccdd" width="32" height="32" alt="Vulture's Mark talent icon"> [Vulture's Mark](#broker_keystone_vultures_mark_on_kill) | <ul><li>Ranged Elite or Specialist kills grant an 8-second Mark, up to 3 stacks; a new stack refreshes the shared timer, and all expire together without another gain.</li><li>Each stack gives +5% Ranged Damage, +5 percentage points Ranged Critical Chance and +5% Movement Speed. At maximum stacks, qualifying further kills restore 15% maximum Toughness to you and Allies in Coherency.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/9b42d72f-2429-446a-bf75-d5d87db98b36" width="32" height="32" alt="Chemical Dependency talent icon"> [Chemical Dependency](#broker_keystone_chemical_dependency) | <ul><li>Stimm use grants a Dependency stack, up to 3. Each adds 10% to Combat Ability resource recovery; 3 stacks give a 1.30 recovery multiplier.</li><li>Gains refresh the shared 90-second timer; without another gain, stacks decay one at a time every 90 seconds.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/b7fff291-d5f3-4213-bfef-8b28b8065889" width="32" height="32" alt="Chem Enhanced talent icon"> [Chem Enhanced](#broker_keystone_chemical_dependency_sub_1) | <ul><li>Each Dependency stack adds 5 percentage points of general Critical Chance, applying to Melee and Ranged calculations.</li><li>At 3 stacks, Scum's base 10% becomes 25% before weapon and other modifiers. This affects chance, rather than Critical Damage.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/6c334888-08bb-4567-a6a2-1c4b4750409b" width="32" height="32" alt="Chem Fortified talent icon"> [Chem Fortified](#broker_keystone_chemical_dependency_sub_2) | <ul><li>Every Stimm use restores 50% of maximum Toughness, limited by missing Toughness, even at the Dependency stack cap.</li><li>Each Dependency stack multiplies Toughness Damage Taken by 0.95; 3 stacks reduce it by approximately 14.26%.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/51827890-e735-4220-8959-bf37381e0fc8" width="32" height="32" alt="Maxed Out Chems talent icon"> [Maxed Out Chems](#broker_keystone_chemical_dependency_sub_3) | <ul><li>Dependency's shared stack timer becomes 60 seconds and its cap becomes 4, one more stack with a timer 30 seconds shorter than the core.</li><li>The unchanged +10% recovery per stack gives a 1.40 rate at 4 stacks; uninterrupted isolated 60-second recovery takes approximately 42.86 seconds.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/a887e60a-cbd4-4d49-8e44-20661f7f2dcb" width="32" height="32" alt="Vulture's Push talent icon"> [Vulture's Push](#broker_keystone_vultures_mark_aoe_stagger) | <ul><li>Ranged Elite or Specialist kills trigger a Stagger explosion around the player, without requiring existing Mark stacks.</li><li>Its radius is 3 metres and it deals no direct Damage; actual displacement depends on each target's Stagger resistance, armour and current state.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/76cdf6df-d713-4085-8b29-fce2c1c64413" width="32" height="32" alt="Patient Hunter talent icon"> [Patient Hunter](#broker_keystone_vultures_mark_increased_duration) | <ul><li>Vulture's Mark's shared duration increases from 8 to 12 seconds.</li><li>New qualifying gains refresh 12 seconds even at 3 stacks; without another gain, all remaining stacks expire together. Vulture's Dodge stays at 1 second.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/00fcee1e-616c-4283-ade2-f67fc6657a7e" width="32" height="32" alt="Vulture's Dodge talent icon"> [Vulture's Dodge](#broker_keystone_vultures_mark_dodge_on_ranged_crit) | <ul><li>Ranged Critical hits make you count as Dodging in the Melee, grab and Ranged checking branches for 1 second, without requiring a Dodge movement.</li><li>Retriggering refreshes 1 second without stacking; attacks still follow their own Dodge logic, and the effect does not make all Damage ineffective.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/f2c76ddc-b60e-49ee-9e7c-1d94981a7448" width="32" height="32" alt="Adrenaline Assassin talent icon"> [Adrenaline Assassin](#broker_keystone_adrenaline_junkie_sub_1) | <ul><li>Weakspot Melee hits grant the original 1 stack plus 2 additional stacks, for 3; ordinary non-Weakspot non-Critical hits grant none.</li><li>The independent Critical bonus remains: a non-Weakspot Critical hit grants 1, and a Critical Weakspot hit grants 4, subject to the core's 30-stack cap.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/72d38f70-b406-41ca-a04b-2bcdadfec50c" width="32" height="32" alt="Stoked Rage talent icon"> [Stoked Rage](#broker_keystone_adrenaline_junkie_sub_3) | <ul><li>Frenzy lasts 20 seconds, 10 seconds longer than the core.</li><li>Retriggering refreshes one Frenzy buff to 20 seconds; Adrenaline timing, stack cap and Frenzy's speed/Damage bonuses remain unchanged.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/49a6640b-2259-4b1b-9fd1-634da02747ce" width="32" height="32" alt="Adrenaline Unbound talent icon"> [Adrenaline Unbound](#broker_keystone_adrenaline_junkie_sub_5) | <ul><li>Restore 5% of maximum Toughness each second during Adrenaline Frenzy.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/2b1aa9f6-20e2-4d38-b2fb-6af765a426ca" width="32" height="32" alt="Uncontrolled Aggression talent icon"> [Uncontrolled Aggression](#broker_keystone_adrenaline_junkie_sub_4) | <ul><li>Increase the duration of each Adrenaline stack from 2 seconds to 4 seconds.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/29f93050-b0a8-48ca-88fe-2e40d9769a99" width="32" height="32" alt="Adrenaline Smiter talent icon"> [Adrenaline Smiter](#broker_keystone_adrenaline_junkie_sub_2) | <ul><li>Only Melee kills grant Adrenaline: ordinary kills grant 4 additional stacks, and Elite kills grant another 10.</li><li>Non-killing Melee hits grant no stacks; Critical kills retain the core's 1 additional stack.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/8f760271-d6e2-4a80-88ef-01c7007941dc" width="32" height="32" alt="Alley Rat talent icon"> [Alley Rat](#broker_passive_longer_dodges) | <ul><li>Increase Dodge Distance by 50%.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/b19ca7bc-4348-455c-ae43-c3cf7a8b0852" width="32" height="32" alt="Quick and Deadly talent icon"> [Quick and Deadly](#broker_passive_close_range_damage_on_dodge) | <ul><li>After a Successful Dodge, gain 15% Close Range Damage for 3 seconds; the bonus falls off with distance.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/e5936fa1-2583-4575-a968-aa37e1096a16" width="32" height="32" alt="A Tertium Welcome talent icon"> [A Tertium Welcome](#broker_passive_first_target_damage) | <ul><li>Each Melee attack deals 15% more Melee Damage to its first Enemy hit.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/caab00a6-dc0b-49ff-9d76-836ed680d22f" width="32" height="32" alt="In Your Face talent icon"> [In Your Face](#broker_passive_close_ranged_damage) | <ul><li>While wielding a Ranged weapon, gain 25% Damage within 12.5 metres, falling off to 10% at 30 metres and beyond.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/596d2151-a0bd-4b71-9305-805caed18fcc" width="32" height="32" alt="Precision Violence talent icon"> [Precision Violence](#broker_passive_restore_toughness_on_weakspot_kill) | <ul><li>Melee hits restore 4% of maximum Toughness; Critical or Weakspot hits instead restore 8%, and Critical Weakspot hits restore 12%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/04100618-a87c-416c-8e22-3c1eb01aa7ab" width="32" height="32" alt="Voice of Tertium talent icon"> [Voice of Tertium](#broker_passive_restore_toughness_on_close_ranged_kill) | <ul><li>Ranged kills within 12.5 metres restore 8% of maximum Toughness; Elite or Specialist kills instead restore 15%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/e4a8f21b-75d8-45dd-8cf1-84a42d41578f" width="32" height="32" alt="Float Like a Butterfly talent icon"> [Float Like a Butterfly](#broker_passive_ninja_grants_crit_chance) | <ul><li>After a Successful Dodge or Perfect Block, gain 20 percentage points of Critical Strike Chance for 3 seconds.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/139c3b2c-0d64-4a99-89fb-a19e5ec4cc6e" width="32" height="32" alt="Speedloader talent icon"> [Speedloader](#broker_passive_reload_speed_on_close_kill) | <ul><li>Ranged kills within 12.5 metres grant 30% Reload Speed for 8 seconds.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/6f9a1e1d-3722-4f74-98ff-a17aadbd2ce4" width="32" height="32" alt="Burst of Energy talent icon"> [Burst of Energy](#broker_passive_stun_immunity_on_toughness_broken) | <ul><li>When your Toughness breaks, restore 50% of maximum Toughness and gain Stun Immunity for 6 seconds; a 10-second cooldown follows the effect.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/ad899680-6ea8-486b-976c-e0e875026aa8" width="32" height="32" alt="Toughness Boost talent icon"> [Toughness Boost](#base_toughness_node_buff_medium_1) | <ul><li>Increase maximum Toughness by 25 points.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/31e809e4-4465-4dde-9719-1f66f8face02" width="32" height="32" alt="Regained Posture talent icon"> [Regained Posture](#broker_passive_stamina_on_successful_dodge) | <ul><li>A Successful Dodge restores 10% of maximum Stamina.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/a1732698-da8a-42ec-8f53-f0a57c964056" width="32" height="32" alt="Slippery Customer talent icon"> [Slippery Customer](#broker_passive_dodge_melee_on_slide) | <ul><li>While sliding, count as Dodging against Melee attacks.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/ba3e0adf-5d95-459d-9ed4-f17e21febd90" width="32" height="32" alt="Tis but a Scratch talent icon"> [Tis but a Scratch](#broker_passive_replenish_toughness_on_ranged_toughness_damage) | <ul><li>Taking Ranged Damage while Toughness remains restores 30% of maximum Toughness over 3 seconds.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/6849ad32-3ebc-4d11-b980-612b4d23fd94" width="32" height="32" alt="Unload talent icon"> [Unload](#broker_passive_damage_on_reload) | <ul><li>After reloading, gain 2% Ranged Damage for 7 seconds; each amount of ammunition spent equal to 10% of magazine capacity adds another 2%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/13f03cfd-6e09-41fe-920e-ad116f1a1548" width="32" height="32" alt="Swift Endurance talent icon"> [Swift Endurance](#broker_passive_stamina_grants_atk_speed) | <ul><li>Each whole point of current Stamina grants 2% Melee Attack Speed; fractional points are rounded down.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/d6f72725-01aa-4bc8-aeca-5e76118c1a51" width="32" height="32" alt="Ramping Backstabs talent icon"> [Ramping Backstabs](#broker_passive_ramping_backstabs) | <ul><li>Each Melee Backstab adds 10% Melee Power, up to 5 stacks; a non-Backstab Melee hit clears them.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/95c8ba8f-bd1f-424f-bee5-435d83d4dfa6" width="32" height="32" alt="Moving Target talent icon"> [Moving Target](#broker_passive_increased_ranged_dodges) | <ul><li>While wielding a Ranged weapon, gain 1 Effective Dodge.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/19fc62d1-22a4-4366-9195-e523695c2a90" width="32" height="32" alt="Sample Collector talent icon"> [Sample Collector](#broker_passive_stimm_cd_on_kill) | <ul><li>Each kill reduces Stimm cooldown by 0.5s; a Chem Toxin infected enemy instead reduces it by 1s.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/ab7d66da-9caa-4c94-9ddf-279a30441f67" width="32" height="32" alt="Jittery talent icon"> [Jittery](#broker_passive_improved_dodges_at_full_stamina) | <ul><li>At least 75% of maximum Stamina reduces the wait for consecutive Dodges to reset by 40%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/f936a91e-7097-49cc-b8f5-88dff18117eb" width="32" height="32" alt="Critical Chance Boost talent icon"> [Critical Chance Boost](#base_crit_chance_node_buff_low_1) | <ul><li>Gain 5 percentage points of Critical Hit Chance.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/fa269ae5-914c-4444-a713-88c4591a79d9" width="32" height="32" alt="Melee Damage Boost talent icon"> [Melee Damage Boost](#base_melee_damage_node_buff_medium_1) | <ul><li>Gain 10% Melee Damage.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/105c999d-8563-4033-aea2-15b5fc968cc4" width="32" height="32" alt="Potent Tox talent icon"> [Potent Tox](#base_toxin_power_boost_1) | <ul><li>Gain 10% Toxin Power.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/2dfab969-4eb2-4181-aa52-7dc1c8c93f89" width="32" height="32" alt="Sticky Hands talent icon"> [Sticky Hands](#broker_passive_reduce_swap_time) | <ul><li>Gain 40% Weapon Swap Speed; while hip-firing or bracing, reduce Recoil by 10% and Spread by 30%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/d28213f3-85a5-4de7-a380-f3799f671cc8" width="32" height="32" alt="Calling for a Time Out talent icon"> [Calling for a Time Out](#broker_passive_reduced_toughness_damage_during_reload) | <ul><li>Reduce Toughness Damage taken by 25% while reloading and for 4s after leaving the reload state.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/069e6733-6d1f-4859-a3a6-829d213fd0a1" width="32" height="32" alt="Street Tough talent icon"> [Street Tough](#broker_passive_knockback_on_taking_melee_damage) | <ul><li>A qualifying Melee hit triggers nearby knockback and +10% Movement Speed for 3s; cooldown 8s.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/97f78fa5-afd9-4fe0-b24f-fe54147da399" width="32" height="32" alt="Channelled Devastation talent icon"> [Channelled Devastation](#broker_passive_crit_grants_damage) | <ul><li>Each whole percentage point of current Critical Hit Chance grants 0.5% Melee Damage, up to 30 steps / 15%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/23850be1-ea33-448c-93dc-409f21216ceb" width="32" height="32" alt="Battering Strikes talent icon"> [Battering Strikes](#broker_passive_melee_cleave_on_melee_kill) | <ul><li>Each Melee kill grants 10% Damage Cleave capacity for 5s, up to 5 stacks; retriggering refreshes the duration.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/5439d198-0b4c-4a05-ab95-fc67f67398c9" width="32" height="32" alt="Hyper-Violence talent icon"> [Hyper-Violence](#broker_passive_melee_damage_carry_over) | <ul><li>Kills grant 25% of overkill Damage as flat Melee Damage for 1s.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/90caf35d-4780-4f00-a9cc-636858cd091e" width="32" height="32" alt="Virulent Strain talent icon"> [Virulent Strain](#broker_passive_toxin_infected_enemies_take_increased_damage) | <ul><li>Adding Chem Toxin or a stack to an enemy makes it take 10% more Damage from all sources for up to 5s; retriggering refreshes.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/06abfebe-3a5e-421b-b71a-35e5faee2767" width="32" height="32" alt="Toxin Mania talent icon"> [Toxin Mania](#broker_passive_damage_after_toxined_enemies) | <ul><li>Each Chem Toxin infected enemy within 12.5m grants 5% Damage, up to 15% at three enemies.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/31efd90d-864c-4e6c-af06-b48d540b45b3" width="32" height="32" alt="Splash Damage talent icon"> [Splash Damage](#broker_passive_toxin_spread_on_kills) | <ul><li>A Melee Elite kill spreads Chem Toxin within 4m to up to 10 selected enemies, filling this talent's contribution to 2 stacks.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/88f63a37-5b06-4bf2-93a5-95c9f3c98c48" width="32" height="32" alt="Extra Pouches talent icon"> [Extra Pouches](#broker_passive_increased_blitz_ammo) | <ul><li>Gain 1 maximum Blitz charge.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/f92b996b-c59e-4d6b-90ac-a31046be1abd" width="32" height="32" alt="Coated Weaponry talent icon"> [Coated Weaponry](#broker_passive_melee_attacks_apply_toxin) | <ul><li>Melee Critical Hits add 1 Chem Toxin stack and refresh duration; shared cap 30.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/6125da40-9e12-4107-bb5b-a8aa330a4b89" width="32" height="32" alt="Pocket Toxin talent icon"> [Pocket Toxin](#broker_passive_blitz_inflicts_toxin) | <ul><li>Blitz explosion hits add Chem Toxin stacks: Blackout 3, Boom Bringer 6, Chem Grenade 10.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/28aafc63-bbd4-4097-a93f-3fb0d62f8710" width="32" height="32" alt="Targeted Toxin talent icon"> [Targeted Toxin](#broker_passive_reduced_damage_by_toxined) | <ul><li>Enemies you infect with Chem Toxin deal 15% less Damage; monsters and Captain bosses instead deal 30% less.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/0d36baca-b919-457c-890e-535a0ce33236" width="32" height="32" alt="Toxic Renewal talent icon"> [Toxic Renewal](#broker_passive_replenish_toughness_while_toxined_enemies_in_proximity) | <ul><li>Each Chem Toxin infected enemy within 15m restores 1% of maximum Toughness per second, up to 10 enemies.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/148db758-02d7-4855-9f45-badcabc7c8cf" width="32" height="32" alt="Ammo Jack talent icon"> [Ammo Jack](#broker_passive_extended_mag) | <ul><li>Gain 15% Clip Size, rounded up after combining bonuses of the same kind.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/d6795940-e616-410f-b56b-76593e8a12eb" width="32" height="32" alt="Cheap Shots talent icon"> [Cheap Shots](#broker_passive_damage_vs_heavy_staggered) | <ul><li>Deal 10% more damage to Staggered enemies, or 15% in total to enemies with Medium or Heavy Stagger.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/83713f05-33fd-41c1-86f2-c536d7a1f06c" width="32" height="32" alt="Hyper-Critical talent icon"> [Hyper-Critical](#broker_passive_melee_crit_instakill) | <ul><li>After a Critical Melee Hit, execute a living human-sized enemy whose remaining Health is below the hit's actual Damage; Captains are excluded.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/280d8610-ccf2-4be3-a05b-6f4a140f8b23" width="32" height="32" alt="Punching Above One's Weight talent icon"> [Punching Above One's Weight](#broker_passive_damage_vs_elites_monsters) | <ul><li>Deal 15% more Damage to Elites and Monstrosities.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/bd4b828f-f439-429d-a682-c036774235f3" width="32" height="32" alt="The Sweet Spot talent icon"> [The Sweet Spot](#broker_passive_increased_weakspot_damage) | <ul><li>Increase the additional Weakspot Damage component by 25%; the resulting total damage gain varies by weapon.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/c19f893c-1a73-4111-b234-e675605b17b5" width="32" height="32" alt="Long Lasting talent icon"> [Long Lasting](#broker_passive_stimm_increased_duration) | <ul><li>Stimm effects last 5 seconds longer.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/6f1ead13-0e28-4983-86e7-44478bd76cdc" width="32" height="32" alt="Blessed Stimms talent icon"> [Blessed Stimms](#broker_passive_stimm_cleanse_on_kill) | <ul><li>While Stimmed, each Kill clears 1% of maximum Health as Corruption; 50% cleared per Stimm is the stopping threshold.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/5cb31261-7422-451a-9aac-d1c38b48c802" width="32" height="32" alt="Hive City Brawler talent icon"> [Hive City Brawler](#broker_passive_dr_damage_tradeoff_on_stamina) | <ul><li>More remaining Stamina gives more Damage Reduction; more spent Stamina gives more Melee Damage. Each reaches up to 20%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/3247cd98-e623-4d24-a821-db3f3a6ee20a" width="32" height="32" alt="Pickpocket talent icon"> [Pickpocket](#broker_passive_low_ammo_regen) | <ul><li>Melee Kills on Elites or Specialists refill Ammo Reserve to 20% if it is below that threshold.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/6fa27fb0-2d79-43fc-b74a-d64da58773f6" width="32" height="32" alt="Battering Momentum talent icon"> [Battering Momentum](#broker_passive_cleave_on_cleave) | <ul><li>Hit at least 3 enemies with one Melee Attack to gain 50% Cleave for the next attack.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/51c007e0-bed4-4759-a369-04ab37032369" width="32" height="32" alt="Equip Cartel Special talent icon"> [Equip Cartel Special](#broker_stimm_activation_talent) | <ul><li>Select a Stimm recipe to equip the regenerating Cartel Special; recipes share a 30-point budget.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/6b1d7464-dc75-4f26-91d7-08e79fe94125" width="32" height="32" alt="Spur I talent icon"> [Spur I](#broker_stimm_celerity_1) | <ul><li>Gain 4% Attack Speed.</li><li>Gain 25% Weapon Swap Speed.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/bfb821b6-f80f-4c08-842f-b3f7000ac772" width="32" height="32" alt="Spur II talent icon"> [Spur II](#broker_stimm_celerity_2) | <ul><li>Gain 4% Attack Speed.</li><li>Gain 25% Weapon Swap Speed.</li><li>Reduce Stamina Cost by 15%.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/27832b4a-d52a-49bb-a87e-2a3cd7fa4371" width="32" height="32" alt="Spur III talent icon"> [Spur III](#broker_stimm_celerity_3) | <ul><li>Gain 4% Attack Speed.</li><li>Reduce Stamina Cost by 15%.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/c4f5bb04-c085-4d9d-8341-0346d3e6a173" width="32" height="32" alt="Spur IV talent icon"> [Spur IV](#broker_stimm_celerity_4) | <ul><li>Gain 4% Attack Speed.</li><li>Reduce Stamina Cost by 20%.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/ed3da982-a076-4b67-a1ca-c889ede0ba70" width="32" height="32" alt="Spur V talent icon"> [Spur V](#broker_stimm_celerity_5a) | <ul><li>Gain another 4% Attack Speed, plus Stun and Slowdown Immunity.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/21b33eec-94cc-4cea-b531-1ff788ff6bc9" width="32" height="32" alt="Reflex talent icon"> [Reflex](#broker_stimm_celerity_5b) | <ul><li>Gain 30% Reload Speed and reduce recoil unsteadiness gain by 50%.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/12ddbfdc-82bd-4ece-ba73-e6550451e5a4" width="32" height="32" alt="Fervor talent icon"> [Fervor](#broker_stimm_celerity_5c) | <ul><li>Gain 10% Movement Speed and Dodge Distance, multiply Dodge Speed by 1.1, and reduce effective-dodge recovery wait by 10%.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/22ab15e3-5280-408f-884c-5d8ebd692363" width="32" height="32" alt="Wildfire I talent icon"> [Wildfire I](#broker_stimm_combat_1) | <ul><li>Gain 4% Power.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/e53e3328-a026-4e3c-8e91-c63cd69522c6" width="32" height="32" alt="Wildfire II talent icon"> [Wildfire II](#broker_stimm_combat_2) | <ul><li>Gain 4% Power.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/58b8efb6-6c10-4795-8046-33bb49eee893" width="32" height="32" alt="Wildfire III talent icon"> [Wildfire III](#broker_stimm_combat_3) | <ul><li>Gain 4% Power.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/b90d885e-2e9a-43e7-9b64-d42447b285f9" width="32" height="32" alt="Wildfire IV talent icon"> [Wildfire IV](#broker_stimm_combat_4a) | <ul><li>Gain 4% Power.</li><li>Gain 10% additional Weakspot and Critical Damage.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/1db9427d-9c25-4096-898f-57089a300fce" width="32" height="32" alt="Fury I talent icon"> [Fury I](#broker_stimm_combat_4b) | <ul><li>Gain 4% Power.</li><li>Gain 5% Rending.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/abb7491f-9991-4352-a6e7-46f5a34c1ee3" width="32" height="32" alt="Vultoprene I talent icon"> [Vultoprene I](#broker_stimm_combat_4c) | <ul><li>Gain 4% Power.</li><li>Gain 5 percentage points of Critical Strike Chance.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/eaa62b3f-dc32-4364-81c0-8aadbf77c9dc" width="32" height="32" alt="Wildfire V talent icon"> [Wildfire V](#broker_stimm_combat_5a) | <ul><li>Gain 4% Power.</li><li>Gain 25% additional Weakspot and Critical Damage.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/ccb20931-8290-461a-babb-60380b406b9d" width="32" height="32" alt="Fury II talent icon"> [Fury II](#broker_stimm_combat_5b) | <ul><li>Gain 4% Power.</li><li>Gain 10% Rending.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/c91fbea3-470d-4fa1-ac50-d2ab5c741a35" width="32" height="32" alt="Vultoprene II talent icon"> [Vultoprene II](#broker_stimm_combat_5c) | <ul><li>Gain 4% Power.</li><li>Gain 10 percentage points of Critical Strike Chance.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/883f2dd7-ad0d-4986-a5d0-32fa36a11e27" width="32" height="32" alt="Barrage I talent icon"> [Barrage I](#broker_stimm_durability_1) | <ul><li>On use, restore 6.25% of maximum Toughness; while the Stimm lasts, gain 5% Toughness Replenishment and 4% Damage Reduction.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/e99ef969-5e48-4129-9a22-d11f0e23aa80" width="32" height="32" alt="Barrage II talent icon"> [Barrage II](#broker_stimm_durability_2) | <ul><li>On use, restore 6.25% of maximum Toughness; while the Stimm lasts, gain 5% Toughness Replenishment and 4% Damage Reduction.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/a9df685a-a1fd-4431-b90a-b77559277f58" width="32" height="32" alt="Barrage III talent icon"> [Barrage III](#broker_stimm_durability_3) | <ul><li>On use, restore 6.25% of maximum Toughness; while the Stimm lasts, gain 5% Toughness Replenishment and 4% Damage Reduction.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/e60164c9-4f04-46ed-afe0-0a71e33582f1" width="32" height="32" alt="Barrage IV talent icon"> [Barrage IV](#broker_stimm_durability_4) | <ul><li>On use, restore 6.25% of maximum Toughness; while the Stimm lasts, gain 5% Toughness Replenishment and 4% Damage Reduction.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/35bab219-731c-41ac-80a8-27af4a02f1c2" width="32" height="32" alt="Tank talent icon"> [Tank](#broker_stimm_durability_5a) | <ul><li>Gain an additional 30% Toughness Replenishment.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/f238889d-d7aa-45e0-8d16-9726389c7fe8" width="32" height="32" alt="Regain talent icon"> [Regain](#broker_stimm_durability_5b) | <ul><li>During the Stimm effect, restore 5% of maximum Toughness per second.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/b6316199-6d72-4db3-8be6-a74600e54b2f" width="32" height="32" alt="Kalma I talent icon"> [Kalma I](#broker_stimm_concentration_1) | <ul><li>Gain 6.25% Combat Ability Regeneration.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/8401a77b-6cc2-4b03-a0de-dd67296d008d" width="32" height="32" alt="Kalma II talent icon"> [Kalma II](#broker_stimm_concentration_2) | <ul><li>Gain 6.25% Combat Ability Regeneration.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/dc414369-8882-423d-9c5f-ba6a04583163" width="32" height="32" alt="Kalma III talent icon"> [Kalma III](#broker_stimm_concentration_3) | <ul><li>Gain 6.25% Combat Ability Regeneration.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/d4e178b4-1b2e-48cc-8221-35d5c515e8cb" width="32" height="32" alt="Kalma IV talent icon"> [Kalma IV](#broker_stimm_concentration_4) | <ul><li>Gain 6.25% Combat Ability Regeneration.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/f86ba1f1-5859-40ce-b662-6f9e54e9afe5" width="32" height="32" alt="Kalma V talent icon"> [Kalma V](#broker_stimm_concentration_5a) | <ul><li>Gain 25% Combat Ability Regeneration.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/77f46379-3f89-4c81-8240-a0dc288fb868" width="32" height="32" alt="Hypex talent icon"> [Hypex](#broker_stimm_concentration_5b) | <ul><li>While the Stimm is active, Melee Kills grant 56.25% Combat Ability Regeneration for 1 second; further kills refresh the countdown.</li></ul> | Stimm recipe |
| <img src="https://github.com/user-attachments/assets/9707e711-9e62-4b88-9102-fe83ffa29cda" width="32" height="32" alt="Klay talent icon"> [Klay](#broker_stimm_concentration_5c) | <ul><li>While the Stimm is active, Ranged Kills grant 56.25% Combat Ability Regeneration for 1 second; further kills refresh the countdown.</li></ul> | Stimm recipe |

---

## Blitz

<a id="broker_blitz_flash_grenade_improved"></a>

### Blackout

<img src="https://github.com/user-attachments/assets/fd2156cb-6e65-4214-bd01-ab0b28665714" width="72" height="72" alt="Blackout talent icon">

- **Control area:** a quick-use grenade with a 3.5-metre explosion radius; Stagger Power is higher within 2.25 metres. The explosion itself deals no Health Damage and mainly interrupts and knocks back enemies.

- **Replenishment:** carry up to 5 grenades. Below capacity, every 20 kills within 12.5 metres restore one grenade; both Melee and Ranged kills count. At full capacity, kills do not advance the counter.

- **Replenishment example:** with 2 grenades and 19 tracked kills, the next kill within range raises the count to 3 grenades and resets progress to zero. Extra Pouches increases capacity to 5 + 1 = 6 grenades.

- **Needle Pistol exception:** an enemy previously hit and tracked by the Needle Pistol can also count if it dies to Toxin at Close Range. Other deaths caused by ranged-applied Toxin cannot automatically use this exception.

#### Traditional Chinese description erratum

- The original Traditional Chinese says Melee kills where it should say kills at Close Range. Ranged kills within 12.5 metres also advance grenade replenishment.

[Details](broker_blitz_flash_grenade_improved.md) · [Back to index](#talent-index)

---

<a id="broker_blitz_missile_launcher"></a>

### Boom Bringer

<img src="https://github.com/user-attachments/assets/3b4df232-3b49-4f84-98c0-2b3e8828f917" width="72" height="72" alt="Boom Bringer talent icon">

- **Attack:** missile direct-impact and explosion Damage are calculated separately. The explosion has a 4-metre inner radius and a 7-metre overall radius; outer-area Damage is lower and falls off with distance.

- **Damage example:** for an unmodified inner explosion with no falloff, base Damage is 20 × (500 × 2800 ÷ 10000) = 2800. An Unarmoured hit location uses ×1.25 for 3500; a Carapace location uses ×2.4 for 6720. These numbers exclude direct missile impact, hit-location modifiers, enemy-specific Damage reduction and other talents.

- **Ammunition:** carry up to 2 missiles, increased to 3 by Extra Pouches. Replacing the original Stagger grenade removes replenishment from every 20 kills at Close Range.

[Details](broker_blitz_missile_launcher.md) · [Back to index](#talent-index)

---

<a id="broker_blitz_tox_grenade"></a>

### Chem Grenade

<img src="https://github.com/user-attachments/assets/7d3c5999-8823-4b54-9204-6e22637bc851" width="72" height="72" alt="Chem Grenade talent icon">

- **Toxic area:** the explosion leaves toxic matter for 15 seconds. Its shape spreads along the terrain. Enemies standing in it receive one stack of the same Toxin every 0.35 seconds, up to 6 stacks supplied by the area.

- **Toxin example:** at 6 stacks, each Damage calculation uses input Power 500 × 6 ÷ 30 = 100, then applies the Toxin curve and armour calculation. Other sources can raise the same Toxin to higher stacks; 6 is not a universal maximum for all Toxin.

- **Additional effects:** toxic matter makes enemies easier to Cleave through in Melee and marks them for a death explosion. The mark lasts 12 seconds; death while it remains active causes an explosion with a 2.5-metre radius. An enemy can therefore explode after leaving the area.

- **Ammunition:** carry up to 2 grenades, increased to 3 by Extra Pouches. The original Stagger grenade's close-kill replenishment is removed.

[Details](broker_blitz_tox_grenade.md) · [Back to index](#talent-index)

---

## Aura

<a id="broker_aura_gunslinger_improved"></a>

### Gunslinger Improved

<img src="https://github.com/user-attachments/assets/3927d1d0-9e15-4b96-9a91-00f0503e338c" width="72" height="72" alt="Gunslinger Improved talent icon">

- **Sharing:** when you or an ally with this Aura collect Ammo, the pickup is shared with members in that collector's Coherency. Each member uses their own weapon capacity; the collector's received rounds are not divided among the team.

- **Small Ammo example:** a small pickup normally replenishes 15% of reserve capacity. Each member receives their reserve maximum × 15% × 10%, rounded up. A reserve maximum of 200 gives 3 rounds; a maximum of 100 gives ⌈1.5⌉ = 2 rounds.

- **Large Ammo and Ammo Crates:** a large pickup normally replenishes 50%; at a reserve maximum of 200, sharing gives 10 rounds. A normal deployed Ammo Crate uses 10% of (reserve maximum + magazine capacity): 200 + 30 gives 23 rounds, still capped by the actual missing amount.

- **Duplicate limits:** multiple players with the same Aura do not provide multiple copies. This improved version's 10% replaces the base version's 5%. Shared Ammo cannot trigger another chain of sharing.

[Details](broker_aura_gunslinger_improved.md) · [Back to index](#talent-index)

---

<a id="broker_coherency_melee_damage"></a>

### Ruffian

<img src="https://github.com/user-attachments/assets/7fc85ba0-f7e6-4aba-a966-638511f2c713" width="72" height="72" alt="Ruffian talent icon">

- **Recipients:** you and allies in Coherency gain 10% Melee Damage. Only one copy of the same Aura applies.

- **Damage example:** base Melee Damage of 100 becomes 110. With another 25% bonus in the same stage, 100 × (1 + 25% + 10%) = 135.

[Details](broker_coherency_melee_damage.md) · [Back to index](#talent-index)

---

<a id="broker_coherency_anarchist"></a>

### Anarchist

<img src="https://github.com/user-attachments/assets/213537c0-9bdc-49a7-9b60-67aaeb58f395" width="72" height="72" alt="Anarchist talent icon">

- **Recipients:** you and allies in Coherency gain additional Critical Chance. The same Aura does not apply multiple times.

- **Chance example:** an initial 10% becomes 10% + 5% = 15%; an initial 25% becomes 30%.

[Details](broker_coherency_anarchist.md) · [Back to index](#talent-index)

---

## Combat Ability

<a id="broker_ability_focus_improved"></a>

### Enhanced Desperado

<img src="https://github.com/user-attachments/assets/785f7b2c-0591-4cc4-b928-31c26b07d0f7" width="72" height="72" alt="Enhanced Desperado talent icon">

- **Activation and protection:** immediately swap to your Ranged Weapon, fill the magazine and enter focus for 10 seconds. During focus, you count as Dodging Ranged Attacks, Sprint without Stamina cost and are immune to Suppression.

- **Sprint example:** Sprint Speed increases by 20%; an initial 5 metres/second becomes 5 × 1.2 = 6 metres/second.

- **Highlighting and extension:** highlight eligible enemies within 12.5 metres. Ranged kills at Close Range extend focus, initially by 1 second each; after 20 seconds from activation this falls to 0.2 seconds per kill, and after 40 seconds to 0.04 seconds. Each extension can restore remaining duration to at most 10 seconds.

- **Needle Pistol Toxin exception:** an enemy hit with a Ranged Needle Pistol attack and tracked during focus may extend the state even when Toxin Damage delivers the killing blow; it must also die at Close Range. Other Toxin kills do not automatically trigger this.

- **Ammo and cooldown:** reloading during focus does not consume reserve Ammo. Natural replenishment for the base 45-second cooldown starts only after focus ends; extending focus delays that start. At the end, the magazine is recalculated against remaining reserve Ammo, so a whole magazine of free rounds from the state is not retained.

[Details](broker_ability_focus_improved.md) · [Back to index](#talent-index)

---

<a id="broker_ability_stimm_field"></a>

### Stimm Supply

<img src="https://github.com/user-attachments/assets/70eb922d-eda2-4ed7-b945-ed3b305b10a6" width="72" height="72" alt="Stimm Supply talent icon">

- **Deployment and range:** place a refitted Medi-Pack on the ground to form a gas field with a 3-metre radius, lasting 20 seconds by default. You and allies breathing the gas gain its effects.

- **Corruption healing:** remove up to 0.5 Corruption every 0.25 seconds. The displayed total is at most 20 ÷ 0.25 × 0.5 = 40; Corruption taken is zero while the field effect applies. It cannot clear Corruption that has consumed a complete Health segment. Leaving the field removes the base effect.

- **Stimm sharing:** if you carry a Stimm, the field gives its corresponding effects to allies in range. Deployment consumes or removes the corresponding Stimm use.

- **Cooldown:** base cooldown 60 seconds. Natural replenishment pauses while the field operates and starts after it ends.

[Details](broker_ability_stimm_field.md) · [Back to index](#talent-index)

---

<a id="broker_ability_punk_rage"></a>

### Rampage!

<img src="https://github.com/user-attachments/assets/ae8bc68a-7d1b-4ee7-8691-bed95ed8069d" width="72" height="72" alt="Rampage! talent icon">

- **Activation:** replenish all Toughness, swap to your Melee Weapon and enter rage for a base 10 seconds.

- **Melee Power and Attack Speed:** gain additive +35% Melee Power Level and +20% Melee Attack Speed. Power Level affects attack output and impact, and cannot be treated as an equal percentage of final Damage. With only +20% Attack Speed, an initial 1-second action takes approximately 1 ÷ 1.20 = 0.83 seconds. For example, Power 500 becomes 500 × 1.35 = 675 before the weapon's Damage and Stagger curves.

- **Damage taken:** multiply Damage taken by 0.75. With only this effect, 100 incoming Damage becomes 100 × 0.75 = 75, a 25% reduction.

- **Duration extension:** each Melee hit initially extends rage by 0.3 seconds. For every 20 seconds elapsed since activation, the per-hit extension halves: 0.15 seconds during seconds 20–40 and 0.075 seconds during seconds 40–60. This diminishes individual extensions; it does not impose a total 20-second duration cap.

- **Immunity and cooldown:** rage grants Stun and Slowdown immunity. Natural replenishment for the base 30-second cooldown begins after rage ends.

[Details](broker_ability_punk_rage.md) · [Back to index](#talent-index)

---

<a id="broker_ability_punk_rage_sub_2"></a>

### Pulverising Strikes

<img src="https://github.com/user-attachments/assets/1a4c2d3b-dfba-4840-a85d-c8d5390e3a42" width="72" height="72" alt="Pulverising Strikes talent icon">

- **Cleave example:** during rage, Damage and Stagger Cleave capacities each increase by 50%; an initial capacity of 10 becomes 15. Actual enemies Cleaved still depend on enemy mass and weapon limits.

- **Gradually increasing Power:** gain one Melee Power stack for approximately every second rage persists. Each grants +2.5%, up to 10 stacks for a maximum +25%.

- **Combined with rage:** if you have rage's own +35% Melee Power Level, counting only these effects at the stack cap gives 35% + (10 × 2.5%) = 60% Power Level modifier. This is not +60% final Damage. For example, Power 500 becomes 500 × 1.6 = 800.

[Details](broker_ability_punk_rage_sub_2.md) · [Back to index](#talent-index)

---

<a id="broker_ability_punk_rage_sub_1"></a>

### Channelled Aggression

<img src="https://github.com/user-attachments/assets/db7fee2b-9e46-49f1-a0ac-28cd6cea424f" width="72" height="72" alt="Channelled Aggression talent icon">

- **Eligible attacks:** while rage is active, Melee Heavy Attacks gain +25% Rending.

- **Reading the effect:** Rending affects the armour-penetration calculation. It does not multiply Damage by 1.25 and does not apply to Light or Ranged Attacks.

- **Armour example:** assume an original armour Damage multiplier of 0.5 and armour that fully accepts this Rending. The multiplier becomes 0.5 + 0.25 = 0.75; the same 100 pre-armour Damage changes from 50 to 75. Different armour and existing weapon penetration change the actual increase.

[Details](broker_ability_punk_rage_sub_1.md) · [Back to index](#talent-index)

---

<a id="broker_ability_punk_rage_sub_3"></a>

### Forge's Bellow

<img src="https://github.com/user-attachments/assets/c23bede2-8365-4a28-9fcf-0aa91847923a" width="72" height="72" alt="Forge's Bellow talent icon">

- **Trigger:** Shout once when rage starts; when rage ends, Shout again if you are still alive.

- **Range and Stagger:** each Shout has a 4.5-metre radius and Staggers enemies in range.

- **Enemy slowdown:** each Shout reduces affected enemies' Melee Attack Speed by 50% for 5 seconds. If the original interval is 1 second, half speed gives approximately 1 ÷ 0.5 = 2 seconds between attacks, an increase of 100%, not 50%. This statistic does not modify Ranged Attack Speed.

#### English description erratum

- English says the time between attacks increases by +50%. The verified modifier halves Melee Attack Speed; with this effect alone, the reciprocal interval doubles, increasing by 100%.

[Details](broker_ability_punk_rage_sub_3.md) · [Back to index](#talent-index)

---

<a id="broker_ability_punk_rage_sub_4"></a>

### Boiling Blood

<img src="https://github.com/user-attachments/assets/040166f5-e6b1-4f43-ae17-2c21b8fd8014" width="72" height="72" alt="Boiling Blood talent icon">

- **Special-enemy extension:** Melee hits on Elites, Specialists, Monstrosities or Captain-type enemies extend rage by 1 second. This type of hit begins diminishing only after 30 seconds: 0.5 seconds per hit after 30 seconds and 0.25 seconds after 60 seconds.

- **Ordinary-enemy extension:** ordinary enemy hits retain the base 0.3-second extension and start diminishing after 20 seconds. The 30-second threshold does not also change ordinary hits.

[Details](broker_ability_punk_rage_sub_4.md) · [Back to index](#talent-index)

---

<a id="broker_ability_focus_sub_3"></a>

### Focused Resolve

<img src="https://github.com/user-attachments/assets/74d4304b-23f7-4666-879b-62c727596b69" width="72" height="72" alt="Focused Resolve talent icon">

- **Cooldown restored:** during focus, ordinary Close Range Ranged kills restore 0.5 seconds of Ability Cooldown. Elite and Specialist kills restore 1 second.

- **Per-activation cap:** each focus state restores at most 5 seconds: 10 ordinary kills or 5 Elite/Specialist kills reach the cap, and mixed kills stop restoring once their combined total reaches 5 seconds.

- **Cooldown example:** natural recovery is 1 second per second and the base cooldown is 45 seconds. Restoring the full 5 seconds leaves 45 − 5 = 40 seconds of natural recovery after focus ends. Natural recovery pauses during focus, but kill-triggered restoration still adds resource directly.

- **Needle Pistol exception:** a target tracked after a Needle Pistol hit during focus can also restore cooldown if it subsequently dies from Toxin within Close Range. This does not make every Toxin death eligible.

[Details](broker_ability_focus_sub_3.md) · [Back to index](#talent-index)

---

<a id="broker_ability_focus_sub_2"></a>

### Pick Your Targets

<img src="https://github.com/user-attachments/assets/732d190b-365f-4815-9d94-bc136cafd423" width="72" height="72" alt="Pick Your Targets talent icon">

- **Ranged Rending:** while focus is active, Ranged Attacks gain +15% Rending in armour penetration. This is not a direct 15% Damage increase.

- **Damage stacks:** each eligible Close Range Ranged kill adds one stack of +3% Ranged Damage, up to 5 stacks. A new kill refreshes the duration. After kills stop, one stack expires every 3 seconds; ending focus removes all remaining stacks.

- **Eligibility:** ordinary kills must occur within 12.5 m. A previously tracked enemy hit by the Needle Pistol can also trigger the effect if it later dies from Toxin within Close Range.

- **Damage example:** with only this effect and 5 stacks, base Damage 100 becomes 100 × (1 + 5 × 0.03) = 115. Other Ranged Damage bonuses add to the same pool.

[Details](broker_ability_focus_sub_2.md) · [Back to index](#talent-index)

---

<a id="broker_ability_stimm_field_sub_3"></a>

### Practiced Deployment

<img src="https://github.com/user-attachments/assets/c0ce43c8-1324-4c26-8319-c1f12c28fbb3" width="72" height="72" alt="Practiced Deployment talent icon">

- **Trigger:** newly acquiring a usable Stimm, or restoring one dedicated Stimm charge, fills one Stimm Supply ability charge.

- **Charge cap:** this ability has at most 1 charge. If it is already ready, the trigger cannot store an extra charge. A Stimm already in its slot when the talent is acquired does not immediately trigger restoration; availability must increase later.

- **Timing example:** if 40 seconds of cooldown remain when the effect triggers, the ability becomes usable again. The polling check applies the effect within approximately half a second.

[Details](broker_ability_stimm_field_sub_3.md) · [Back to index](#talent-index)

---

<a id="broker_ability_stimm_field_sub_1"></a>

### Fast Acting Stimms

<img src="https://github.com/user-attachments/assets/4ea2874c-338f-42ec-95cb-9f4c08e64794" width="72" height="72" alt="Fast Acting Stimms talent icon">

- **Field duration:** the field itself lasts only 5 seconds. After leaving its area, effects already received can continue for 15 seconds. If you stay until the field ends, those effects can last up to a further 15 seconds after it disappears.

- **Healing and Stimm effects:** the effects retained include Corruption healing and immunity, together with the Stimm effects shared by that deployment.

- **Cooldown:** the 60-second natural cooldown starts when the field ends, even while some allies' effects may linger for 15 seconds. Counting only this ability's duration and recovery, deployment to the next natural charge takes approximately 5 + 60 = 65 seconds.

[Details](broker_ability_stimm_field_sub_1.md) · [Back to index](#talent-index)

---

<a id="broker_ability_stimm_field_sub_2"></a>

### Booby Trap

<img src="https://github.com/user-attachments/assets/c3cdd1a9-e1eb-4e29-9a5e-6bae44c280a4" width="72" height="72" alt="Booby Trap talent icon">

- **Trigger:** the field explodes when its duration ends. The base field ends after 20 seconds; if a duration-shortening effect also applies, the explosion occurs at the end of the actual field duration.

- **Explosion effect:** enemies hit and damaged by the 3-metre frag explosion receive 7 Toxin stacks. This is one explosion, rather than 7 stacks applied on every field pulse.

- **Cooldown:** the 60-second natural cooldown resumes after the field ends and explodes. The explosion itself does not extend the cooldown pause.

- **Damage example:** excluding other bonuses and special Damage Reduction, an Unarmoured target within 0.5 metres of the centre takes 20 × 500 × 300 ÷ 10000 = 300 explosion Damage. With the corresponding armour multiplier of 0.25, this becomes 300 × 0.25 = 75. Subsequent Toxin Damage is calculated separately.

[Details](broker_ability_stimm_field_sub_2.md) · [Back to index](#talent-index)

---

## Keystones

<a id="broker_passive_improved_dodges"></a>

### Nimble

<img src="https://github.com/user-attachments/assets/4575cb9c-10e2-489c-8b4f-0b8f4eda154d" width="72" height="72" alt="Nimble talent icon">

- **Dodge speed:** Dodge movement speed increases by 25%. A speed of 4 metres per second at the same point in the motion becomes 4 × 1.25 = 5 metres per second. Actual action duration is still calculated across the full speed curve.

- **Dodging checks:** after the Dodge ends, Melee and grab attacks continue considering you to be Dodging for 0.25 + 0.15 = 0.40 seconds, extended from 0.25 seconds. Ranged checks gain a 0.15-second window. Whether an attack misses still depends on its own checking rules.

- **Scope:** the bonus changes movement speed during a Dodge and the attack system's Dodging checks. It does not increase the number of consecutive Dodges or their cooldown-recovery speed.

[Details](broker_passive_improved_dodges.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie"></a>

### Adrenaline Frenzy

<img src="https://github.com/user-attachments/assets/2b18473f-9818-4d07-98ab-b4c7995dbf8d" width="72" height="72" alt="Adrenaline Frenzy talent icon">

- **Trigger:** each Melee hit grants 1 stack. A Critical hit adds another 1, for 1 + 1 = 2 stacks from one Critical Melee hit.

- **Stacks and decay:** the maximum is 30 stacks. Each stack gain resets the 2-second timer. If no further stack is gained, one stack is removed and the timer restarts from that removal; another stack then expires every 2 seconds.

- **At the cap:** the 30th stack triggers Frenzy and clears the Adrenaline stack buff. Frenzy lasts 10 seconds, and retriggering restarts its timer.

- **Frenzy speed:** the additive Melee Attack Speed multiplier changes from 1 to 1.10. An affected action originally taking 1 second takes approximately 1 ÷ 1.10 = 0.91 seconds.

- **Frenzy Damage:** +25% Melee Damage is additive Damage modification. With only this effect, base Damage 100 becomes 125.

[Details](broker_keystone_adrenaline_junkie.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_vultures_mark_on_kill"></a>

### Vulture's Mark

<img src="https://github.com/user-attachments/assets/6cc42ba2-04c8-4a98-ae3e-5341b777ccdd" width="72" height="72" alt="Vulture's Mark talent icon">

- **Gaining Marks:** kill an Elite or Specialist with a Ranged attack to gain 1 stack for 8 seconds. Another gain adds a stack and resets the shared timer, up to 3 stacks. Without another gain, all Marks disappear 8 seconds after the last gain.

- **Per-stack bonuses:** each stack adds 5% Ranged Damage, 5 percentage points of Ranged Critical Chance and 5% Movement Speed. At 3 stacks these are +15%, +15 percentage points and +15%, respectively.

- **Toughness at the cap:** while at 3 stacks, each further Ranged Elite or Specialist kill restores 15% of maximum Toughness to you and Allies in Coherency, limited by each recipient's missing Toughness.

- **Weapon exception:** a Close Range Needle Pistol Toxin kill can grant a Mark. First hit an Elite/Specialist with a Needle Pistol in the Ranged weapon slot; while its Toxin effect remains active, that target must die from Toxin within Close Range.

- **Damage example:** with no other modifiers, base Ranged Damage 100 at 3 stacks becomes 100 × (1 + 3 × 0.05) = 115. With another 20% at the same stage, it becomes 100 × (1 + 0.20 + 0.15) = 135.

- **Toughness example:** with maximum Toughness 100 and at least 15 missing, a qualifying Ranged Elite/Specialist kill at maximum stacks restores 100 × 0.15 = 15.

[Details](broker_keystone_vultures_mark_on_kill.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_chemical_dependency"></a>

### Chemical Dependency

<img src="https://github.com/user-attachments/assets/9b42d72f-2429-446a-bf75-d5d87db98b36" width="72" height="72" alt="Chemical Dependency talent icon">

- **Trigger:** each Stimm use grants 1 stack. First receiving the effects of a Stimm-containing Stimm Supply field also triggers it.

- **Stacks:** the maximum is 3. Each adds 10% to the Combat Ability resource-recovery multiplier. At 3 stacks this is 1 + 3 × 0.10 = 1.30, or 30% faster recovery than the base rate.

- **Timing:** the base duration is 90 seconds. A new stack resets the shared timer. After 90 seconds without another gain, one stack is lost and the timer restarts; subsequent stacks then expire one at a time every 90 seconds.

- **Recovery example:** if the same Combat Ability resource amount normally takes 60 seconds to recover, with uninterrupted recovery and no other modifiers, 3 stacks take approximately 60 ÷ 1.30 = 46.15 seconds.

[Details](broker_keystone_chemical_dependency.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_chemical_dependency_sub_1"></a>

### Chem Enhanced

<img src="https://github.com/user-attachments/assets/b7fff291-d5f3-4213-bfef-8b28b8065889" width="72" height="72" alt="Chem Enhanced talent icon">

- **Per-stack bonus:** each stack adds 5 percentage points of general Critical Chance, included in both Melee and Ranged Critical Chance calculations.

- **Maximum-stack example:** Scum's base Critical Chance is 10%. At 3 stacks, 3 × 5% adds 15 percentage points, giving 10% + 15% = 25% before extra weapon chance.

- **Critical effect:** this upgrade increases Critical Chance, rather than Critical Damage. Dependency still decays one stack every 90 seconds under the core rules; Stimm use refreshes the timer.

[Details](broker_keystone_chemical_dependency_sub_1.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_chemical_dependency_sub_2"></a>

### Chem Fortified

<img src="https://github.com/user-attachments/assets/6c334888-08bb-4567-a6a2-1c4b4750409b" width="72" height="72" alt="Chem Fortified talent icon">

- **Stimm use:** each use restores 50% of maximum Toughness. With maximum Toughness 100 and at least 50 missing, it restores 50; with only 20 missing, it restores at most 20.

- **Per-stack reduction:** each stack multiplies Toughness Damage Taken by 0.95. At 3 stacks, 0.95³ = 0.8574 of the original Damage is taken, approximately 14.26% less Toughness Damage.

- **At the cap:** even when Dependency is already at maximum stacks, another Stimm use can restore Toughness and refresh the stack timer.

[Details](broker_keystone_chemical_dependency_sub_2.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_chemical_dependency_sub_3"></a>

### Maxed Out Chems

<img src="https://github.com/user-attachments/assets/51827890-e735-4220-8959-bf37381e0fc8" width="72" height="72" alt="Maxed Out Chems talent icon">

- **Duration and cap:** the stack timer becomes 60 seconds and the maximum becomes 4 stacks. Compared with the core, each timer is 30 seconds shorter and one additional stack is allowed.

- **Recovery:** the core's +10% Combat Ability resource recovery per stack still applies. At 4 stacks the multiplier is 1 + 4 × 0.10 = 1.40. Uninterrupted recovery that originally takes 60 seconds becomes 60 ÷ 1.40 ≈ 42.86 seconds.

- **Refresh and decay:** another Stimm use resets the shared timer. Without another gain, one stack expires after 60 seconds, then another every 60 seconds. A use at 4 stacks cannot add a fifth, but still refreshes the timer.

[Details](broker_keystone_chemical_dependency_sub_3.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_vultures_mark_aoe_stagger"></a>

### Vulture's Push

<img src="https://github.com/user-attachments/assets/a887e60a-cbd4-4d49-8e44-20661f7f2dcb" width="72" height="72" alt="Vulture's Push talent icon">

- **Trigger:** a Ranged Elite or Specialist kill triggers the effect. Existing Vulture's Mark stacks are not required.

- **Area and effect:** it pushes enemies around you within 3 metres through Stagger, dealing no direct Damage.

- **Target differences:** whether an enemy is actually moved depends on Stagger resistance, armour and its current state. It cannot guarantee interrupting every enemy's action.

[Details](broker_keystone_vultures_mark_aoe_stagger.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_vultures_mark_increased_duration"></a>

### Patient Hunter

<img src="https://github.com/user-attachments/assets/76cdf6df-d713-4085-8b29-fce2c1c64413" width="72" height="72" alt="Patient Hunter talent icon">

- **Duration:** after gaining a Vulture's Mark, the stacks' shared timer is 12 seconds, 4 seconds longer than the core's 8.

- **Refresh:** a new Mark adds a stack and resets the shared timer to 12 seconds. At the 3-stack cap, another qualifying event still refreshes the timer.

- **Expiry:** without another Mark, existing stacks disappear together when the 12-second timer expires.

- **Timing example:** gain the first stack at 0 seconds and a second at 6 seconds. The second gain restarts 12 seconds; without further gains, the current stacks expire at 18 seconds.

[Details](broker_keystone_vultures_mark_increased_duration.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_vultures_mark_dodge_on_ranged_crit"></a>

### Vulture's Dodge

<img src="https://github.com/user-attachments/assets/00fcee1e-616c-4283-ade2-f67fc6657a7e" width="72" height="72" alt="Vulture's Dodge talent icon">

- **Trigger:** a Ranged Critical hit triggers the effect. An ordinary Ranged hit or a Critical Melee hit does not.

- **Effect:** for 1 second, you count as Dodging against Melee and Ranged attacks even without pressing Dodge. The result still follows each attack's Dodge rules; this does not make all Damage ineffective.

- **Refresh:** another Ranged Critical hit within that second restarts the 1-second timer, without accumulating multiple stacks.

- **Scope:** this directly changes Dodging checks. It does not increase actual Dodge distance or movement speed and does not require a Dodge action.

- **Timing example:** trigger at 0 seconds, then land another Ranged Critical hit at 0.6 seconds; the effect continues until 1.6 seconds.

[Details](broker_keystone_vultures_mark_dodge_on_ranged_crit.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie_sub_1"></a>

### Adrenaline Assassin

<img src="https://github.com/user-attachments/assets/f2c76ddc-b60e-49ee-9e7c-1d94981a7448" width="72" height="72" alt="Adrenaline Assassin talent icon">

- **Weakspot hits:** a Weakspot Melee hit gives the original 1 stack plus 2 additional stacks, for 3 total.

- **Ordinary hits:** a non-Weakspot Melee hit gives no regular stack. The Critical check still runs independently, so a non-Weakspot Critical Melee hit still grants 1 additional stack.

- **Critical Weakspot hit:** the Weakspot hit's 3 stacks plus the additional Critical stack give 4 total, still subject to the core 30-stack cap and stack-timing rules.

[Details](broker_keystone_adrenaline_junkie_sub_1.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie_sub_3"></a>

### Stoked Rage

<img src="https://github.com/user-attachments/assets/72d38f70-b406-41ca-a04b-2bcdadfec50c" width="72" height="72" alt="Stoked Rage talent icon">

- **Duration:** triggered Frenzy lasts 20 seconds, 10 seconds longer than the core's 10.

- **Refresh:** reaching 30 stacks again retriggers the same single Frenzy effect and resets its duration to 20 seconds.

- **Other rules:** this upgrade leaves Adrenaline's 2-second stack timer, 30-stack cap, and Frenzy's Attack Speed and Damage multipliers unchanged.

[Details](broker_keystone_adrenaline_junkie_sub_3.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie_sub_5"></a>

### Adrenaline Unbound

<img src="https://github.com/user-attachments/assets/49a6640b-2259-4b1b-9fd1-634da02747ce" width="72" height="72" alt="Adrenaline Unbound talent icon">

- **Recovery amount**: restore 5% of maximum Toughness each second. At 100 maximum Toughness, each tick restores 100 × 0.05 = 5 points.
- **Recovery cap**: recovery cannot exceed the current Toughness deficit. A tick adds no Toughness when Toughness is already full.
- **Timing**: recovery occurs only during Adrenaline Frenzy. The first tick can occur immediately when Frenzy begins, followed by 1-second intervals.

[Details](broker_keystone_adrenaline_junkie_sub_5.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie_sub_4"></a>

### Uncontrolled Aggression

<img src="https://github.com/user-attachments/assets/2b1aa9f6-20e2-4d38-b2fb-6af765a426ca" width="72" height="72" alt="Uncontrolled Aggression talent icon">

- **Stack timer**: after gaining Adrenaline stacks, the timer is 4 seconds. New stacks reset this shared timer.
- **Decay**: if no new stacks arrive within 4 seconds, lose 1 stack and restart the timer. If no further stacks arrive, lose another stack every 4 seconds.
- **Cap trigger**: Adrenaline Frenzy still triggers at 30 stacks. On reaching the cap, the core triggers Frenzy and clears the Adrenaline stacks.

[Details](broker_keystone_adrenaline_junkie_sub_4.md) · [Back to index](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie_sub_2"></a>

### Adrenaline Smiter

<img src="https://github.com/user-attachments/assets/29f93050-b0a8-48ca-88fe-2e40d9769a99" width="72" height="72" alt="Adrenaline Smiter talent icon">

- **Trigger**: an ordinary Melee kill grants the core's 1 hit stack plus this upgrade's 4 stacks, for 5 total. A Critical Melee kill also grants the core's Critical stack, for 6 total.
- **Elite kills**: killing an Elite grants another 10 stacks, giving 15 for an ordinary Elite kill or 16 for a Critical Elite kill.
- **Non-killing hits**: a Melee attack that does not kill its target grants no stacks. Even a Critical non-killing hit does not trigger the core's additional Critical stack.
- **Elite check**: the extra 10 stacks depend on the Elite classification. An enemy classified only as a Specialist does not qualify for this Elite bonus.

[Details](broker_keystone_adrenaline_junkie_sub_2.md) · [Back to index](#talent-index)

---

<a id="broker_passive_longer_dodges"></a>

### Alley Rat

<img src="https://github.com/user-attachments/assets/8f760271-d6e2-4a80-88ef-01c7007941dc" width="72" height="72" alt="Alley Rat talent icon">

- **Distance bonus**: Dodge Distance increases by 50%.
- **Distance example**: using the archetype's base distance of 2.5 metres, without weapon modifiers or consecutive-Dodge diminishing returns, the result is 2.5 × 1.5 = 3.75 metres.
- **Actual distance**: the weapon's Dodge settings, consecutive-Dodge diminishing returns, and attack state still affect the final distance travelled.

[Details](broker_passive_longer_dodges.md) · [Back to index](#talent-index)

---

## Talents

<a id="broker_passive_close_range_damage_on_dodge"></a>

### Quick and Deadly

<img src="https://github.com/user-attachments/assets/b19ca7bc-4348-455c-ae43-c3cf7a8b0852" width="72" height="72" alt="Quick and Deadly talent icon">

- **Trigger and duration**: after a Successful Dodge, Damage within 12.5 metres increases by 15% for 3 seconds. Retriggering resets the duration without stacking the amount.
- **Distance example**: the bonus falls off beyond 12.5 metres and reaches zero at 30 metres. At 16.875 metres, the interpolation factor is √((16.875 − 12.5) ÷ 17.5) = 0.5, leaving 15% × (1 − 0.5) = 7.5%; base Damage of 100 becomes 107.5.
- **Close-range example**: with this effect alone, base Damage of 100 becomes 115. With an existing 25% Damage bonus at the same stage, the result is 100 × (1 + 25% + 15%) = 140.

[Details](broker_passive_close_range_damage_on_dodge.md) · [Back to index](#talent-index)

---

<a id="broker_passive_first_target_damage"></a>

### A Tertium Welcome

<img src="https://github.com/user-attachments/assets/e5936fa1-2583-4575-a968-aa37e1096a16" width="72" height="72" alt="A Tertium Welcome talent icon">

- **Affected target**: the first target hit by each Melee attack takes 15% more Damage. Later enemies cleaved by the same attack do not receive this bonus.
- **Damage example**: if base Damage to the first target is 100, this effect alone gives 100 × 1.15 = 115. With an existing 25% Damage bonus at the same stage, it gives 100 × (1 + 25% + 15%) = 140.

[Details](broker_passive_first_target_damage.md) · [Back to index](#talent-index)

---

<a id="broker_passive_close_ranged_damage"></a>

### In Your Face

<img src="https://github.com/user-attachments/assets/caab00a6-dc0b-49ff-9d76-836ed680d22f" width="72" height="72" alt="In Your Face talent icon">

- **Distance bonus**: while wielding a Ranged weapon, deal 25% more Damage to targets within 12.5 metres. The bonus decreases with distance, remaining at 10% from 30 metres onwards.
- **Damage example**: at 16.875 metres, the falloff factor is √((16.875 − 12.5) ÷ 17.5) = 0.5. The bonus is 25% + (10% − 25%) × 0.5 = 17.5%. Base Damage of 100 becomes 117.5; with an existing 25% bonus at the same stage, the result is 100 × (1 + 25% + 17.5%) = 142.5.

[Details](broker_passive_close_ranged_damage.md) · [Back to index](#talent-index)

---

<a id="broker_passive_restore_toughness_on_weakspot_kill"></a>

### Precision Violence

<img src="https://github.com/user-attachments/assets/596d2151-a0bd-4b71-9305-805caed18fcc" width="72" height="72" alt="Precision Violence talent icon">

- **Recovery amount**: ordinary Melee hits restore 4% of maximum Toughness; Critical or Weakspot hits instead restore 8%, and hits that are both Critical and on a Weakspot restore 12%. A kill is not required. Direct instakills from special executions do not trigger this effect.
- **Same swing**: a later target triggers recovery again only when its recovery percentage exceeds the percentage already recorded for this attack. Equal percentages do not repeat recovery for every target.
- **Recovery example**: with 100 maximum Toughness, hitting an ordinary target and then a Weakspot restores 4 points followed by 8, for 12 total. A subsequent Critical Weakspot hit in the same attack can restore another 12 points. Each recovery is capped by the deficit; if only 5 points are missing, it restores at most 5.

[Details](broker_passive_restore_toughness_on_weakspot_kill.md) · [Back to index](#talent-index)

---

<a id="broker_passive_restore_toughness_on_close_ranged_kill"></a>

### Voice of Tertium

<img src="https://github.com/user-attachments/assets/04100618-a87c-416c-8e22-3c1eb01aa7ab" width="72" height="72" alt="Voice of Tertium talent icon">

- **Kill condition**: killing an Enemy within 12.5 metres with a Ranged attack restores 8% of maximum Toughness. Elite or Specialist enemies instead restore 15%.
- **Recovery example**: with 100 maximum Toughness, an ordinary Enemy restores 8 points, and an Elite or Specialist restores 15. At 95 current Toughness, either restores only the 5 missing points.

[Details](broker_passive_restore_toughness_on_close_ranged_kill.md) · [Back to index](#talent-index)

---

<a id="broker_passive_ninja_grants_crit_chance"></a>

### Float Like a Butterfly

<img src="https://github.com/user-attachments/assets/e4a8f21b-75d8-45dd-8cf1-84a42d41578f" width="72" height="72" alt="Float Like a Butterfly talent icon">

- **Trigger and refresh**: a Successful Dodge or Perfect Block grants 20 percentage points of Critical Strike Chance for 3 seconds. Retriggering resets the duration without adding another bonus.
- **Chance examples**: an initial 10% Critical Strike Chance becomes 10% + 20% = 30%; an initial 25% becomes 45%.

[Details](broker_passive_ninja_grants_crit_chance.md) · [Back to index](#talent-index)

---

<a id="broker_passive_reload_speed_on_close_kill"></a>

### Speedloader

<img src="https://github.com/user-attachments/assets/139c3b2c-0d64-4a99-89fb-a19e5ec4cc6e" width="72" height="72" alt="Speedloader talent icon">

- **Trigger and refresh**: a Ranged kill within 12.5 metres grants 30% Reload Speed for 8 seconds. Retriggering resets the duration without stacking the amount.
- **Timing example**: a reload action that can be accelerated and normally takes 2 seconds becomes 2 ÷ 1.3 ≈ 1.54 seconds with this effect alone. With an existing 20% Reload Speed bonus at the same stage, it becomes 2 ÷ (1 + 20% + 30%) ≈ 1.33 seconds.
- **Needle Pistol**: first hit a living Enemy with the Needle Pistol. If that Enemy remains tracked by the Toxin logic and dies to Toxin at close range, the bonus can also trigger.

[Details](broker_passive_reload_speed_on_close_kill.md) · [Back to index](#talent-index)

---

<a id="broker_passive_stun_immunity_on_toughness_broken"></a>

### Burst of Energy

<img src="https://github.com/user-attachments/assets/6f9a1e1d-3722-4f74-98ff-a17aadbd2ce4" width="72" height="72" alt="Burst of Energy talent icon">

- **Trigger effect**: when your Toughness breaks, immediately restore 50% of maximum Toughness and gain Stun Immunity for 6 seconds.
- **Recovery and cooldown example**: at 100 maximum Toughness, this talent alone restores Toughness from 0 to 50. The trigger first gives 6 seconds of Stun Immunity, followed by a 10-second cooldown. With no other changes, eligible triggers are at least 6 + 10 = 16 seconds apart.

[Details](broker_passive_stun_immunity_on_toughness_broken.md) · [Back to index](#talent-index)

---

<a id="base_toughness_node_buff_medium_1"></a>

### Toughness Boost

<img src="https://github.com/user-attachments/assets/ad899680-6ea8-486b-976c-e0e875026aa8" width="72" height="72" alt="Toughness Boost talent icon">

- **How it adds**: increase maximum Toughness by 25 points. This adds to other fixed Toughness bonuses before applying percentage modifiers to maximum Toughness.
- **Examples**: an initial 100 points becomes 125. With another 20% maximum-Toughness bonus, the result is (100 + 25) × 1.2 = 150.

[Details](base_toughness_node_buff_medium_1.md) · [Back to index](#talent-index)

---

<a id="broker_passive_stamina_on_successful_dodge"></a>

### Regained Posture

<img src="https://github.com/user-attachments/assets/31e809e4-4465-4dde-9719-1f66f8face02" width="72" height="72" alt="Regained Posture talent icon">

- **Recovery**: each Successful Dodge restores 10% of maximum Stamina, without exceeding the Stamina cap.
- **Recovery example**: at 5 maximum Stamina, each trigger restores 5 × 10% = 0.5 points. At 4.8 current Stamina, it restores only 0.2 points.

[Details](broker_passive_stamina_on_successful_dodge.md) · [Back to index](#talent-index)

---

<a id="broker_passive_dodge_melee_on_slide"></a>

### Slippery Customer

<img src="https://github.com/user-attachments/assets/a1732698-da8a-42ec-8f53-f0a57c964056" width="72" height="72" alt="Slippery Customer talent icon">

- **How it works**: while sliding, you have Melee Dodge status, so Enemy Melee attacks follow their Dodge rules. This does not directly make you immune to all Damage.
- **Trigger limit**: starting a slide does not mean an attack has already been successfully Dodged. You must actually avoid an attack that qualifies for the check to trigger talents tied to a Successful Dodge.

[Details](broker_passive_dodge_melee_on_slide.md) · [Back to index](#talent-index)

---

<a id="broker_passive_replenish_toughness_on_ranged_toughness_damage"></a>

### Tis but a Scratch

<img src="https://github.com/user-attachments/assets/ba3e0adf-5d95-459d-9ed4-f17e21febd90" width="72" height="72" alt="Tis but a Scratch talent icon">

- **Trigger condition**: taking Ranged Damage while your Toughness is not depleted starts ongoing Toughness recovery. Restore 10% of maximum Toughness per second for 3 seconds.
- **Refresh and cancellation**: retriggering resets the 3-second duration without stacking the recovery rate. Recovery stops when Toughness is depleted.
- **Recovery example**: at 100 maximum Toughness, restore 10 points per second, totalling 30 over a full 3 seconds. If triggered again at the 2-second mark, recovery can extend to the 5-second mark, totalling at most 50 points, still capped by the deficit.

[Details](broker_passive_replenish_toughness_on_ranged_toughness_damage.md) · [Back to index](#talent-index)

---

<a id="broker_passive_damage_on_reload"></a>

### Unload

<img src="https://github.com/user-attachments/assets/6849ad32-3ebc-4d11-b980-612b4d23fd94" width="72" height="72" alt="Unload talent icon">

- **How it works**: when a reload refills ammunition, gain a 7-second Damage effect. It starts at 2% Ranged Damage and adds another 2% for every accumulated amount of ammunition spent equal to 10% of magazine capacity. Incomplete stages do not count.
- **Reloading again**: another reload resets the duration and ammunition-spent counter, restarting accumulation from 2%.
- **Damage example**: with a 100-round magazine and 30 rounds spent during the effect, the bonus is 2% + ⌊30 ÷ 10⌋ × 2% = 8%. Base Damage of 100 becomes 108; with an existing 25% bonus at the same stage, it becomes 100 × (1 + 25% + 8%) = 133.
- **Cap explanation**: spending the equivalent of one full magazine gives 22%. Ammunition replenishment that does not reset this effect can allow continued accumulation, so 22% is not a fixed cap.

[Details](broker_passive_damage_on_reload.md) · [Back to index](#talent-index)

---

<a id="broker_passive_stamina_grants_atk_speed"></a>

### Swift Endurance

<img src="https://github.com/user-attachments/assets/13f03cfd-6e09-41fe-920e-ad116f1a1548" width="72" height="72" alt="Swift Endurance talent icon">

- **Speed bonus**: use your remaining current Stamina. Each whole point grants 2% Melee Attack Speed; the bonus decreases as Stamina falls.
- **Timing example**: 5.8 current Stamina counts as 5 points, granting 10% Attack Speed. An accelerable action normally taking 1 second becomes 1 ÷ 1.1 ≈ 0.91 seconds, rather than a direct 10% time reduction to 0.9 seconds.
- **Cap**: at most 30 points of current Stamina count, giving 60% Attack Speed. Your actual attainable bonus is still limited by your maximum Stamina.

[Details](broker_passive_stamina_grants_atk_speed.md) · [Back to index](#talent-index)

---

<a id="broker_passive_ramping_backstabs"></a>

### Ramping Backstabs

<img src="https://github.com/user-attachments/assets/d6f72725-01aa-4bc8-aeca-5e76118c1a51" width="72" height="72" alt="Ramping Backstabs talent icon">

- **Gain and removal**: a Melee Backstab adds 1 stack, granting 10% Melee Power per stack, up to 5. There is no fixed countdown. A Melee hit on a target from outside its back clears all stacks.
- **Power example**: 5 stacks grant 50%. If Power entering this bonus stage is 500, the result is 500 × 1.5 = 750. With another 20% Power bonus at the same stage, it is 500 × (1 + 20% + 50%) = 850.
- **Damage limit**: Power still passes through the weapon's Damage, Stagger, and Cleave curves. A 50% Power increase must not be described as 50% more final Damage for every weapon.

[Details](broker_passive_ramping_backstabs.md) · [Back to index](#talent-index)

---

<a id="broker_passive_increased_ranged_dodges"></a>

### Moving Target

<img src="https://github.com/user-attachments/assets/95c8ba8f-bd1f-424f-bee5-435d83d4dfa6" width="72" height="72" alt="Moving Target talent icon">

- **How it works**: while wielding a Ranged weapon, gain 1 additional consecutive Effective Dodge before diminishing returns begin. The bonus is not retained after switching to a Melee weapon.
- **Count example**: a weapon with 3 Effective Dodges becomes 3 + 1 = 4. This bonus does not increase Dodge Distance or Dodge Speed.

[Details](broker_passive_increased_ranged_dodges.md) · [Back to index](#talent-index)

---

<a id="broker_passive_stimm_cd_on_kill"></a>

### Sample Collector

<img src="https://github.com/user-attachments/assets/19fc62d1-22a4-4366-9195-e523695c2a90" width="72" height="72" alt="Sample Collector talent icon">

- **Recovery**: While your Stimm cooldown is recovering, each kill reduces it by 0.5s. Killing an enemy infected with Chem Toxin instead reduces it by 1s. The two amounts do not add together.

- **Cooldown example**: With 20s remaining, four ordinary kills remove 4 × 0.5 = 2s, leaving 18s; four kills of Chem Toxin infected enemies remove 4s, leaving 16s.

- **Limits**: This has no effect while Stimm recovery is paused. Once recovery is complete, excess recovery cannot be saved for the next use.

#### Traditional Chinese wording erratum

- The Chinese original places the toxin name in the enemy-count position, equivalent to “kill … enemies.” The actual condition is killing an enemy infected with Chem Toxin, which instead reduces cooldown by 1s per kill.

[Details](broker_passive_stimm_cd_on_kill.md) · [Back to index](#talent-index)

---

<a id="broker_passive_improved_dodges_at_full_stamina"></a>

### Jittery

<img src="https://github.com/user-attachments/assets/ab7d66da-9caa-4c94-9ddf-279a30441f67" width="72" height="72" alt="Jittery talent icon">

- **Condition**: At 75% of maximum Stamina or higher, the wait for the consecutive-Dodge count to recover is reduced by 40%. The bonus is lost below the threshold.

- **Timing example**: If stopping consecutive Dodges normally requires a 1-second wait, it becomes 1 × (1 − 40%) = 0.6s. With 4 maximum Stamina, retaining at least 4 × 75% = 3 points enables the bonus.

[Details](broker_passive_improved_dodges_at_full_stamina.md) · [Back to index](#talent-index)

---

<a id="base_crit_chance_node_buff_low_1"></a>

### Critical Chance Boost

<img src="https://github.com/user-attachments/assets/f936a91e-7097-49cc-b8f5-88dff18117eb" width="72" height="72" alt="Critical Chance Boost talent icon">

- **Chance example**: An initial 10% Critical Hit Chance becomes 10% + 5% = 15%; an initial 25% becomes 30%.

[Details](base_crit_chance_node_buff_low_1.md) · [Back to index](#talent-index)

---

<a id="base_melee_damage_node_buff_medium_1"></a>

### Melee Damage Boost

<img src="https://github.com/user-attachments/assets/fa269ae5-914c-4444-a713-88c4591a79d9" width="72" height="72" alt="Melee Damage Boost talent icon">

- **Damage example**: A base 100 Melee Damage becomes 110. With an existing 25% Damage bonus at the same stage, the result is 100 × (1 + 25% + 10%) = 135.

[Details](base_melee_damage_node_buff_medium_1.md) · [Back to index](#talent-index)

---

<a id="base_toxin_power_boost_1"></a>

### Potent Tox

<img src="https://github.com/user-attachments/assets/105c999d-8563-4033-aea2-15b5fc968cc4" width="72" height="72" alt="Potent Tox talent icon">

- **Behavior**: Increases the Power used for Toxin Damage; it does not increase Toxin stacks or duration.

- **Power example**: With Toxin input Power of 500, this effect alone gives 500 × 1.1 = 550, then the Toxin Damage curve and enemy armour determine Damage. Each Toxin tick cannot simply be treated as dealing a fixed 10% more Damage.

[Details](base_toxin_power_boost_1.md) · [Back to index](#talent-index)

---

<a id="broker_passive_reduce_swap_time"></a>

### Sticky Hands

<img src="https://github.com/user-attachments/assets/2dfab969-4eb2-4181-aa52-7dc1c8c93f89" width="72" height="72" alt="Sticky Hands talent icon">

- **Swap example**: An accelerable swap action that normally takes 1s becomes 1 ÷ 1.4 ≈ 0.71s.

- **Firing control**: While firing from the hip or bracing, the Recoil modifier is ×0.9 and reticle Spread is ×0.7. Ordinary aiming without bracing does not gain these two bonuses.

- **Spread example**: With this effect alone, a 2-degree Spread angle becomes 2 × 0.7 = 1.4 degrees. The Recoil modifier affects unsteadiness accumulation and recovery; actual camera displacement also depends on weapon curves.

[Details](broker_passive_reduce_swap_time.md) · [Back to index](#talent-index)

---

<a id="broker_passive_reduced_toughness_damage_during_reload"></a>

### Calling for a Time Out

<img src="https://github.com/user-attachments/assets/d28213f3-85a5-4de7-a380-f3799f671cc8" width="72" height="72" alt="Calling for a Time Out talent icon">

- **Duration**: Takes effect when reloading starts and lasts another 4s after leaving the reload state. Reloading again maintains the same reduction rather than adding another reduction.

- **Damage-reduction example**: An incoming 100 Toughness Damage becomes 100 × 0.75 = 75 with this effect alone. With another 20% Toughness Damage reduction at the same stage, it becomes 100 × (1 − 20% − 25%) = 55.

- **Scope**: Only reduces Damage taken by Toughness; it does not directly reduce Health Damage by 25% as well.

[Details](broker_passive_reduced_toughness_damage_during_reload.md) · [Back to index](#talent-index)

---

<a id="broker_passive_knockback_on_taking_melee_damage"></a>

### Street Tough

<img src="https://github.com/user-attachments/assets/069e6733-6d1f-4859-a3a6-829d213fd0a1" width="72" height="72" alt="Street Tough talent icon">

- **Trigger**: When you receive a Melee hit, it knocks back enemies within 3m and increases Movement Speed by 10% for 3s. Melee attacks from enemies that disable you do not trigger it.

- **Cooldown and example**: The cooldown is 8s after triggering. With this effect alone, Movement Speed of 5m/s becomes 5 × 1.1 = 5.5m/s.

- **Knockback limits**: The pulse itself deals no Damage. Whether it interrupts an enemy still depends on the enemy's Stagger resistance and state.

[Details](broker_passive_knockback_on_taking_melee_damage.md) · [Back to index](#talent-index)

---

<a id="broker_passive_crit_grants_damage"></a>

### Channelled Devastation

<img src="https://github.com/user-attachments/assets/97f78fa5-afd9-4fe0-b24f-fe54147da399" width="72" height="72" alt="Channelled Devastation talent icon">

- **Calculation**: Each complete percentage point of current Critical Hit Chance grants 0.5% Melee Damage. At most 30 percentage points count, for a total of 15%. You do not need to land a Critical Hit first, and Critical Hit Chance is not consumed.

- **Damage example**: At 12.8% Critical Hit Chance, 12 steps count, giving 12 × 0.5% = 6% Damage. Base 100 becomes 106. With another 25% Damage bonus at the same stage, 100 × (1 + 25% + 6%) = 131.

- **Dynamic updates**: Changes to your weapon, temporary bonuses or Critical Hit Chance also update the Melee Damage bonus.

[Details](broker_passive_crit_grants_damage.md) · [Back to index](#talent-index)

---

<a id="broker_passive_melee_cleave_on_melee_kill"></a>

### Battering Strikes

<img src="https://github.com/user-attachments/assets/23850be1-ea33-448c-93dc-409f21216ceb" width="72" height="72" alt="Battering Strikes talent icon">

- **Stacks**: Each Melee kill adds one stack, granting 10% Damage Cleave capacity per stack, up to 5 stacks. Triggering again resets the 5s duration.

- **Cleave example**: Five stacks grant 50%. A starting capacity to pass through targets with total mass 10 becomes 10 × 1.5 = 15. The number of enemies hit still depends on each enemy's mass, armour and weapon limits.

- **Scope**: This increases Damage Cleave capacity. It does not mean each enemy takes 50% more Damage, and it does not directly increase Stagger Cleave capacity.

[Details](broker_passive_melee_cleave_on_melee_kill.md) · [Back to index](#talent-index)

---

<a id="broker_passive_melee_damage_carry_over"></a>

### Hyper-Violence

<img src="https://github.com/user-attachments/assets/5439d198-0b4c-4a05-ab95-fc67f67398c9" width="72" height="72" alt="Hyper-Violence talent icon">

- **Behavior**: On killing an enemy, 25% of the Damage exceeding its remaining Health becomes flat bonus Melee Damage for 1s. Special instant executions do not trigger this.

- **Damage example**: Dealing 300 Damage to an enemy with 100 Health remaining gives 200 overkill Damage and 200 × 25% = 50 bonus Damage. If the next Melee attack would deal 100 at this calculation stage, it becomes 150. This is flat bonus Damage, not a 50% increase.

- **Another kill**: During the effect, the current bonus is subtracted before calculating the new 25%. Only a higher new value replaces the bonus and restarts its timer. With 50 bonus Damage already active and 400 overkill Damage on the next kill, the new value is (400 − 50) × 25% = 87.5. If overkill is only 200, the new value of 37.5 is lower, so it neither replaces the bonus nor restarts the timer.

[Details](broker_passive_melee_damage_carry_over.md) · [Back to index](#talent-index)

---

<a id="broker_passive_toxin_infected_enemies_take_increased_damage"></a>

### Virulent Strain

<img src="https://github.com/user-attachments/assets/90caf35d-4780-4f00-a9cc-636858cd091e" width="72" height="72" alt="Virulent Strain talent icon">

- **Behavior**: When you add Chem Toxin to an enemy or increase its Toxin stacks, it takes 10% more Damage from all sources. Retriggering resets the 5s duration without stacking the magnitude.

- **Duration limit**: If Chem Toxin disappears early, the vulnerability also ends early; a full 5s duration is not guaranteed.

- **Damage example**: An initial 100 Damage becomes 110 with the vulnerability alone. With another 25% Damage bonus on the attacker, 100 × 1.25 × 1.1 = 137.5. If the target already has another 20% vulnerability at the same stage, that stage is 1 + 20% + 10% = ×1.3.

[Details](broker_passive_toxin_infected_enemies_take_increased_damage.md) · [Back to index](#talent-index)

---

<a id="broker_passive_damage_after_toxined_enemies"></a>

### Toxin Mania

<img src="https://github.com/user-attachments/assets/06abfebe-3a5e-421b-b71a-35e5faee2767" width="72" height="72" alt="Toxin Mania talent icon">

- **Calculation**: Each enemy infected with Chem Toxin within 12.5m grants 5% Damage, reaching the 15% cap at three enemies. You do not need to have applied the Toxin yourself. The bonus drops as enemies leave the area or lose Toxin.

- **Damage example**: Two infected enemies nearby grant 10% Damage, taking base 100 to 110. With another 25% bonus at the same stage, 100 × (1 + 25% + 10%) = 135.

[Details](broker_passive_damage_after_toxined_enemies.md) · [Back to index](#talent-index)

---

<a id="broker_passive_toxin_spread_on_kills"></a>

### Splash Damage

<img src="https://github.com/user-attachments/assets/31efd90d-864c-4e6c-af06-b48d540b45b3" width="72" height="72" alt="Splash Damage talent icon">

- **Trigger**: Killing an Elite enemy with Melee spreads Chem Toxin within 4m of that enemy, selecting at most 10 enemies. The killed enemy does not need to have been infected already.

- **Stack limit**: This talent only fills this Toxin type up to 2 stacks. An initial 0 becomes 2, and 1 is filled to 2. At 2 or more, it only resets Toxin duration without adding further stacks.

- **Toxin example**: Damage occurs every 0.35s based on current Toxin stacks. At 2 stacks, input Power is 500 × 2 ÷ 30 ≈ 33.33, then the Toxin curve and armour determine Damage. This does not directly deal 33.33 Damage.

[Details](broker_passive_toxin_spread_on_kills.md) · [Back to index](#talent-index)

---

<a id="broker_passive_increased_blitz_ammo"></a>

### Extra Pouches

<img src="https://github.com/user-attachments/assets/88f63a37-5b06-4bf2-93a5-95c9f3c98c48" width="72" height="72" alt="Extra Pouches talent icon">

- **Capacity example**: A starting capacity of 3 Blitz uses becomes 3 + 1 = 4; a starting capacity of 2 becomes 3.

- **Scope**: Increases carrying capacity. It does not automatically regenerate one charge after each use.

[Details](broker_passive_increased_blitz_ammo.md) · [Back to index](#talent-index)

---

<a id="broker_passive_melee_attacks_apply_toxin"></a>

### Coated Weaponry

<img src="https://github.com/user-attachments/assets/f92b996b-c59e-4d6b-90ac-a31046be1abd" width="72" height="72" alt="Coated Weaponry talent icon">

- **Stacks**: Each Melee Critical Hit adds one stack of the same Toxin type to that enemy and resets Toxin duration. It shares the 30-stack cap with other ways of applying the same Toxin.

- **Damage behavior**: Toxin resolves every 0.35s. At three stacks, input Power is 500 × 3 ÷ 30 = 50, then the Damage curve and enemy armour determine Damage. More stacks increase Power; Power cannot be treated directly as Damage.

- **Decay**: After you stop replenishing Toxin, the base 2.6s wait elapses, then stacks decay one at a time with Toxin Damage ticks. Applying Toxin again restarts the waiting period.

[Details](broker_passive_melee_attacks_apply_toxin.md) · [Back to index](#talent-index)

---

<a id="broker_passive_blitz_inflicts_toxin"></a>

### Pocket Toxin

<img src="https://github.com/user-attachments/assets/6125da40-9e12-4107-bb5b-a8aa330a4b89" width="72" height="72" alt="Pocket Toxin talent icon">

- **Stacks applied**: Blackout's explosion adds 3 stacks, Boom Bringer adds 6, and Chem Grenade adds 10. A Blitz explosion must hit the enemy; this does not apply to every explosion.

- **Stack example**: An enemy with 2 stacks of the same Toxin type hit by an explosion that adds 6 reaches 2 + 6 = 8 stacks. The cap is 30, and reapplication restarts the timer.

- **Damage behavior**: The same Toxin resolves every 0.35s. Eight stacks give input Power 500 × 8 ÷ 30 ≈ 133.33, then the Toxin curve and armour determine Damage.

[Details](broker_passive_blitz_inflicts_toxin.md) · [Back to index](#talent-index)

---

<a id="broker_passive_reduced_damage_by_toxined"></a>

### Targeted Toxin

<img src="https://github.com/user-attachments/assets/28aafc63-bbd4-4097-a93f-3fb0d62f8710" width="72" height="72" alt="Targeted Toxin talent icon">

- **Behavior**: After you apply Chem Toxin to an enemy, its Damage dealt is reduced by 15%; monsters and Captain-type bosses instead have a 30% reduction. When Toxin disappears, the reduction is removed too.

- **Damage-reduction example**: With this effect alone, an enemy that would deal 100 Damage deals 85; a boss eligible for the 30% reduction deals 70. This reduces the enemy's output, so teammates attacked by it also benefit.

[Details](broker_passive_reduced_damage_by_toxined.md) · [Back to index](#talent-index)

---

<a id="broker_passive_replenish_toughness_while_toxined_enemies_in_proximity"></a>

### Toxic Renewal

<img src="https://github.com/user-attachments/assets/0d36baca-b919-457c-890e-535a0ce33236" width="72" height="72" alt="Toxic Renewal talent icon">

- **Recovery**: For each enemy infected with Chem Toxin within 15m, restore 1% of maximum Toughness per second, counting at most 10 enemies. You do not need to have applied the Toxin yourself.

- **Recovery example**: At 100 maximum Toughness with four infected enemies nearby, restore 100 × 4 × 1% = 4 per second. At 10 or more enemies, the maximum is 10 per second. If only 3 Toughness is missing, only 3 is actually restored.

[Details](broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.md) · [Back to index](#talent-index)

---

<a id="broker_passive_extended_mag"></a>

### Ammo Jack

<img src="https://github.com/user-attachments/assets/148db758-02d7-4855-9f45-badcabc7c8cf" width="72" height="72" alt="Ammo Jack talent icon">

- **Capacity example**: A starting 30-round clip becomes ⌈30 × 1.15⌉ = 35 rounds; a starting 7-round clip becomes ⌈7 × 1.15⌉ = 9 rounds.

- **Scope**: Changes clip capacity without directly increasing the reserve-ammunition maximum. Other bonuses of the same capacity type add first, then the result is rounded up.

[Details](broker_passive_extended_mag.md) · [Back to index](#talent-index)

---

<a id="broker_passive_damage_vs_heavy_staggered"></a>

### Cheap Shots

<img src="https://github.com/user-attachments/assets/d6795940-e616-410f-b56b-76593e8a12eb" width="72" height="72" alt="Cheap Shots talent icon">

- **Damage bonus**: Deal 10% more damage while the enemy meets the Stagger condition. Medium or Heavy Stagger raises the total bonus to 15%; the 10% and 15% figures do not combine to 25%.

- **Damage example**: With a base of 100, Light Stagger gives 110, and Medium or Heavy Stagger gives 115. With another 25% bonus at the same stage, the latter becomes 100 × (1 + 25% + 15%) = 140.

[Details](broker_passive_damage_vs_heavy_staggered.md) · [Back to index](#talent-index)

---

<a id="broker_passive_melee_crit_instakill"></a>

### Hyper-Critical

<img src="https://github.com/user-attachments/assets/83713f05-33fd-41c1-86f2-c536d7a1f06c" width="72" height="72" alt="Hyper-Critical talent icon">

- **Trigger**: After a Critical Melee Hit against a human-sized enemy, execute it if it is still alive and its remaining Health is strictly below the actual Damage dealt by that hit. Captain enemies are excluded.

- **Health threshold example**: An enemy starts with 190 Health and the Critical Hit deals 100, leaving 90. Since 90 < 100, it is executed. Starting with 200 leaves 100; 100 is not below 100, so execution does not trigger.

- **Meaning of twice the Damage**: Provided this hit actually removes the same amount of Health, the condition is equivalent to pre-hit Health below twice the Damage. It does not mean post-hit Health below twice the Damage.

[Details](broker_passive_melee_crit_instakill.md) · [Back to index](#talent-index)

---

<a id="broker_passive_damage_vs_elites_monsters"></a>

### Punching Above One's Weight

<img src="https://github.com/user-attachments/assets/280d8610-ccf2-4be3-a05b-6f4a140f8b23" width="72" height="72" alt="Punching Above One's Weight talent icon">

- **Targets**: A target with the Elite or Monster classification receives the corresponding 15% damage bonus. Being classified only as a Specialist does not automatically qualify it.

- **Damage example**: A base of 100 becomes 115. With another 25% bonus at the same stage, the result is 100 × (1 + 25% + 15%) = 140.

[Details](broker_passive_damage_vs_elites_monsters.md) · [Back to index](#talent-index)

---

<a id="broker_passive_increased_weakspot_damage"></a>

### The Sweet Spot

<img src="https://github.com/user-attachments/assets/bd4b828f-f439-429d-a682-c036774235f3" width="72" height="72" alt="The Sweet Spot talent icon">

- **Calculation**: On a Weakspot Hit, increase the additional Weakspot/Finesse Damage component. The whole damage amount is not multiplied by 1.25. Weapon, armour, attack type and whether the hit is Critical may change this component's share.

- **Damage example**: Assume a normal component of 100 and additional Weakspot component of 100, for 200 total. The bonus gives 100 + 100 × 1.25 = 225, a 12.5% increase in total damage.

- **Weapon difference example**: Another weapon with a normal component of 100 and additional component of 300 starts at 400. The bonus gives 100 + 300 × 1.25 = 475, a total increase of 18.75%. The same 25% Weakspot bonus therefore does not give every weapon the same total damage percentage increase.

[Details](broker_passive_increased_weakspot_damage.md) · [Back to index](#talent-index)

---

<a id="broker_passive_stimm_increased_duration"></a>

### Long Lasting

<img src="https://github.com/user-attachments/assets/c19f893c-1a73-4111-b234-e675605b17b5" width="72" height="72" alt="Long Lasting talent icon">

- **Duration example**: A Stimm normally lasting 15 seconds lasts 15 + 5 = 20 seconds. This adds a fixed 5 seconds, not 5%.

- **Cooldown effect**: The Scum's dedicated Stimm pauses natural cooldown recovery while its effects are active. Extending those effects also delays the start of natural cooldown recovery.

- **Applicability**: Extends Stimms with a timed effect. Instant healing itself does not become five more seconds of healing.

[Details](broker_passive_stimm_increased_duration.md) · [Back to index](#talent-index)

---

<a id="broker_passive_stimm_cleanse_on_kill"></a>

### Blessed Stimms

<img src="https://github.com/user-attachments/assets/6f1ead13-0e28-4983-86e7-44478bd76cdc" width="72" height="72" alt="Blessed Stimms talent icon">

- **Recovery**: After using a Stimm, each Kill while its effects remain clears Corruption equal to 1% of maximum Health. Corruption that has consumed an entire Health segment cannot be cleared.

- **Recovery example**: At maximum Health 200, each Kill clears at most 2. Clearing stops once the accumulated amount reaches 100. Using another Stimm resets the accumulated amount for that use.

- **Threshold exception**: Each Kill checks the 50% threshold before applying a full clear. If 99 has been cleared and this Kill clears 2, the total reaches 101 before stopping. The last clear can therefore slightly exceed the stated threshold.

[Details](broker_passive_stimm_cleanse_on_kill.md) · [Back to index](#talent-index)

---

<a id="broker_passive_dr_damage_tradeoff_on_stamina"></a>

### Hive City Brawler

<img src="https://github.com/user-attachments/assets/5cb31261-7422-451a-9aac-d1c38b48c802" width="72" height="72" alt="Hive City Brawler talent icon">

- **Calculation**: Damage Reduction = 20% × current Stamina fraction; Melee Damage bonus = 20% × spent Stamina fraction. Both adjust as Stamina changes.

- **Half-Stamina example**: At 50% Stamina remaining, both bonuses are 10%. Counting only this effect, incoming damage of 100 becomes 90, and Melee Damage of 100 becomes 110.

- **Full/empty-Stamina example**: At full Stamina, incoming damage is 100 × 0.8 = 80, with no Melee Damage bonus. At empty Stamina, there is no Damage Reduction and Melee Damage is 100 × 1.2 = 120.

- **Other bonuses**: Damage Reduction uses an independent damage-taken multiplier. With another independent 20% reduction at full Stamina, damage is 100 × 0.8 × 0.8 = 64. Melee Damage adds to other bonuses at the same stage.

[Details](broker_passive_dr_damage_tradeoff_on_stamina.md) · [Back to index](#talent-index)

---

<a id="broker_passive_low_ammo_regen"></a>

### Pickpocket

<img src="https://github.com/user-attachments/assets/3247cd98-e623-4d24-a821-db3f3a6ee20a" width="72" height="72" alt="Pickpocket talent icon">

- **Trigger**: Kill an Elite or Specialist with a Melee Attack while Ammo Reserve is below 20% of its maximum, then refill the reserve to that threshold. Ammunition in the clip is excluded from the threshold.

- **Refill example**: With maximum reserve 150, the threshold is ⌊150 × 20%⌋ = 30 rounds. At 8 rounds, gain 22 to reach 30; at 30, nothing triggers. With a maximum of 37, the rounded-down threshold is 7 rounds.

[Details](broker_passive_low_ammo_regen.md) · [Back to index](#talent-index)

---

<a id="broker_passive_cleave_on_cleave"></a>

### Battering Momentum

<img src="https://github.com/user-attachments/assets/6fa27fb0-2d79-43fc-b74a-d64da58773f6" width="72" height="72" alt="Battering Momentum talent icon">

- **Trigger**: Hitting the third enemy with the same Melee Attack grants 50% Damage Cleave and Stagger Cleave. It is consumed when the next attack starts hitting; reaching three enemies again can grant it again.

- **Cleave example**: Damage Cleave capacity 10 and Stagger Cleave capacity 8 become 10 × 1.5 = 15 and 8 × 1.5 = 12. Actual enemies hit still depend on enemy mass and weapon limits.

- **Duration limit**: There is no fixed countdown in seconds. Subsequent hits consume this effect; it does not continuously increase every attack's damage.

[Details](broker_passive_cleave_on_cleave.md) · [Back to index](#talent-index)

---

## Stimm recipes

Recipes share a 30-point budget. Their selected effects act together after using the dedicated Stimm; each recipe documents its cost, duration and stacking examples.

<a id="broker_stimm_activation_talent"></a>

### Equip Cartel Special

<img src="https://github.com/user-attachments/assets/51c007e0-bed4-4759-a369-04ab37032369" width="72" height="72" alt="Equip Cartel Special talent icon">

- **Equipping**: Select at least one effect in the Stimm recipe tree to equip your dedicated Stimm. The central icon itself costs no points.

- **Recipes and effects**: Recipes share 30 points, with each recipe costing 1–5 points. On use, the selected recipes act together for 15 seconds; Long Lasting adds another 5 seconds.

- **Recovery time**: Recovery starts after the effects end. With total recipe cost P, base recovery seconds are `15 + 60 × (P − 1) ÷ 29`, rounded up. One point gives 15 seconds, 15 points gives 44 seconds, and 30 points gives 75 seconds.

- **Full-cycle example**: At a recipe cost of 30 points, ignoring other recovery effects, the injection acts for 15 seconds and then recovers for 75 seconds: 15 + 75 = 90 seconds before reuse.

[Details](broker_stimm_activation_talent.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_celerity_1"></a>

### Spur I

<img src="https://github.com/user-attachments/assets/6b1d7464-dc75-4f26-91d7-08e79fe94125" width="72" height="72" alt="Spur I talent icon">

- **Recipe cost**: 1 point. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Attack Speed**: Gain 4%, additive with other Attack Speed bonuses.

- **Weapon swap**: Gain 25% Weapon Swap Speed. Selecting Spur I and II gives 50% in total.

- **Swap example**: A speed-scaled swap action normally lasting 1 second takes 1 ÷ 1.25 = 0.8 seconds with this effect alone. I and II together give 1 ÷ 1.5 ≈ 0.667 seconds.

- **Attack Speed example**: Selecting from Spur I through this node gives 4% in total. A speed-scaled attack action normally lasting 1 second takes 1 ÷ 1.04 ≈ 0.962 seconds.

[Details](broker_stimm_celerity_1.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_celerity_2"></a>

### Spur II

<img src="https://github.com/user-attachments/assets/bfb821b6-f80f-4c08-842f-b3f7000ac772" width="72" height="72" alt="Spur II talent icon">

- **Recipe cost**: 2 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Attack Speed**: Gain 4%, additive with other Attack Speed bonuses.

- **Weapon swap**: Gain 25% Weapon Swap Speed. Selecting Spur I and II gives 50% in total.

- **Swap example**: A speed-scaled swap action normally lasting 1 second takes 1 ÷ 1.25 = 0.8 seconds with this effect alone. I and II together give 1 ÷ 1.5 ≈ 0.667 seconds.

- **Stamina Cost**: This node multiplies Stamina Cost by 0.85, a 15% reduction.

- **Stamina example**: A cost of 10 becomes 10 × 0.85 = 8.5 with this node alone. Selecting II, III and IV gives 10 × 0.85 × 0.85 × 0.8 = 5.78.

- **Attack Speed example**: Selecting from Spur I through this node gives 8% in total. A speed-scaled attack action normally lasting 1 second takes 1 ÷ 1.08 ≈ 0.926 seconds.

[Details](broker_stimm_celerity_2.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_celerity_3"></a>

### Spur III

<img src="https://github.com/user-attachments/assets/27832b4a-d52a-49bb-a87e-2a3cd7fa4371" width="72" height="72" alt="Spur III talent icon">

- **Recipe cost**: 3 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Attack Speed**: Gain 4%, additive with other Attack Speed bonuses.

- **Stamina Cost**: This node multiplies Stamina Cost by 0.85, a 15% reduction.

- **Stamina example**: A cost of 10 becomes 10 × 0.85 = 8.5 with this node alone. Selecting II, III and IV gives 10 × 0.85 × 0.85 × 0.8 = 5.78.

- **Attack Speed example**: Selecting from Spur I through this node gives 12% in total. A speed-scaled attack action normally lasting 1 second takes 1 ÷ 1.12 ≈ 0.893 seconds.

[Details](broker_stimm_celerity_3.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_celerity_4"></a>

### Spur IV

<img src="https://github.com/user-attachments/assets/c4f5bb04-c085-4d9d-8341-0346d3e6a173" width="72" height="72" alt="Spur IV talent icon">

- **Recipe cost**: 4 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Attack Speed**: Gain 4%, additive with other Attack Speed bonuses.

- **Stamina Cost**: This node multiplies Stamina Cost by 0.8, a 20% reduction.

- **Stamina example**: A cost of 10 becomes 10 × 0.8 = 8 with this node alone. Selecting II, III and IV gives 10 × 0.85 × 0.85 × 0.8 = 5.78.

- **Attack Speed example**: Selecting from Spur I through this node gives 16% in total. A speed-scaled attack action normally lasting 1 second takes 1 ÷ 1.16 ≈ 0.862 seconds.

[Details](broker_stimm_celerity_4.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_celerity_5a"></a>

### Spur V

<img src="https://github.com/user-attachments/assets/ed3da982-a076-4b67-a1ca-c889ede0ba70" width="72" height="72" alt="Spur V talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Attack Speed**: Gain 4%. Together with Spur I–IV, the total is 20%.

- **Attack Speed example**: A speed-scaled attack action normally lasting 1 second takes 1 ÷ 1.2 ≈ 0.833 seconds with the full Spur route.

- **Protection**: Gain Stun and Slowdown Immunity during the effects. This does not release an existing grab or capture.

[Details](broker_stimm_celerity_5a.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_celerity_5b"></a>

### Reflex

<img src="https://github.com/user-attachments/assets/21b33eec-94cc-4cea-b531-1ff788ff6bc9" width="72" height="72" alt="Reflex talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Reload Speed**: Gain 30%. A speed-scaled reload action normally lasting 2 seconds takes 2 ÷ 1.3 ≈ 1.538 seconds.

- **Recoil control**: Shooting generates 50% less recoil unsteadiness; unsteadiness recovers faster after firing stops.

- **Recoil example**: A gain of 0.2 unsteadiness per shot becomes 0.2 × 0.5 = 0.1. Decay of 0.2 per second becomes 0.2 ÷ 0.5 = 0.4. Actual muzzle displacement still follows the weapon's recoil curve.

[Details](broker_stimm_celerity_5b.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_celerity_5c"></a>

### Fervor

<img src="https://github.com/user-attachments/assets/12ddbfdc-82bd-4ece-ba73-e6550451e5a4" width="72" height="72" alt="Fervor talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Movement and Dodge**: Gain 10% Movement Speed and Dodge Distance, and multiply Dodge Speed by 1.1.

- **Movement example**: With no other bonuses, movement at 4m/s becomes 4 × 1.1 = 4.4m/s, and Dodge Distance 2.5m becomes 2.5 × 1.1 = 2.75m.

- **Effective-dodge recovery**: After consecutive dodging stops, the wait to recover effective dodges is 10% shorter. A 1-second wait becomes 1 × (1 − 10%) = 0.9 seconds. This does not change the basic interval between two dodges.

[Details](broker_stimm_celerity_5c.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_combat_1"></a>

### Wildfire I

<img src="https://github.com/user-attachments/assets/22ab15e3-5280-408f-884c-5d8ebd692363" width="72" height="72" alt="Wildfire I talent icon">

- **Recipe cost**: 1 point. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives one Power node: 500 × (1 + 1 × 4%) = 520.

[Details](broker_stimm_combat_1.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_combat_2"></a>

### Wildfire II

<img src="https://github.com/user-attachments/assets/e53e3328-a026-4e3c-8e91-c63cd69522c6" width="72" height="72" alt="Wildfire II talent icon">

- **Recipe cost**: 2 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives two Power nodes: 500 × (1 + 2 × 4%) = 540.

[Details](broker_stimm_combat_2.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_combat_3"></a>

### Wildfire III

<img src="https://github.com/user-attachments/assets/58b8efb6-6c10-4795-8046-33bb49eee893" width="72" height="72" alt="Wildfire III talent icon">

- **Recipe cost**: 3 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives three Power nodes: 500 × (1 + 3 × 4%) = 560.

[Details](broker_stimm_combat_3.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_combat_4a"></a>

### Wildfire IV

<img src="https://github.com/user-attachments/assets/b90d885e-2e9a-43e7-9b64-d42447b285f9" width="72" height="72" alt="Wildfire IV talent icon">

- **Recipe cost**: 4 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives four Power nodes: 500 × (1 + 4 × 4%) = 580.

- **Weakspot and Critical Damage**: The additional Damage component gains 10%; normal-hit Damage does not receive this bonus.

- **Additional Damage example**: With Power and other conditions fixed, normal Damage 100 and original Weakspot Damage 200 become 100 + (200 − 100) × 1.1 = 210, a 5% increase to total Damage. Wildfire IV and V together add 35% to this component, giving 235 in the same example.

[Details](broker_stimm_combat_4a.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_combat_4b"></a>

### Fury I

<img src="https://github.com/user-attachments/assets/1db9427d-9c25-4096-898f-57089a300fce" width="72" height="72" alt="Fury I talent icon">

- **Recipe cost**: 4 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives four Power nodes: 500 × (1 + 4 × 4%) = 580.

- **Rending**: Gain 5% Rending; Fury I and II together give 15%.

- **Armour example**: With other conditions fixed, 100 Damage before armour and an original armour modifier of 0.5 give 100 × (0.5 + 0.05) = 55 with this node alone. Both Fury nodes together give 100 × (0.5 + 0.15) = 65.

[Details](broker_stimm_combat_4b.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_combat_4c"></a>

### Vultoprene I

<img src="https://github.com/user-attachments/assets/abb7491f-9991-4352-a6e7-46f5a34c1ee3" width="72" height="72" alt="Vultoprene I talent icon">

- **Recipe cost**: 4 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives four Power nodes: 500 × (1 + 4 × 4%) = 580.

- **Critical Strike Chance**: Gain 5 percentage points; Vultoprene I and II together add 15 percentage points.

- **Critical example**: An original 10% becomes 10% + 5% = 15% with this node alone; both Vultoprene nodes together give 25%, with the final result clamped to 0%–100%.

[Details](broker_stimm_combat_4c.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_combat_5a"></a>

### Wildfire V

<img src="https://github.com/user-attachments/assets/eaa62b3f-dc32-4364-81c0-8aadbf77c9dc" width="72" height="72" alt="Wildfire V talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives five Power nodes: 500 × (1 + 5 × 4%) = 600.

- **Weakspot and Critical Damage**: The additional Damage component gains 25%; normal-hit Damage does not receive this bonus.

- **Additional Damage example**: With Power and other conditions fixed, normal Damage 100 and original Weakspot Damage 200 become 100 + (200 − 100) × 1.25 = 225, a 12.5% increase to total Damage. Wildfire IV and V together add 35% to this component, giving 235 in the same example.

[Details](broker_stimm_combat_5a.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_combat_5b"></a>

### Fury II

<img src="https://github.com/user-attachments/assets/ccb20931-8290-461a-babb-60380b406b9d" width="72" height="72" alt="Fury II talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives five Power nodes: 500 × (1 + 5 × 4%) = 600.

- **Rending**: Gain 10% Rending; Fury I and II together give 15%.

- **Armour example**: With other conditions fixed, 100 Damage before armour and an original armour modifier of 0.5 give 100 × (0.5 + 0.1) = 60 with this node alone. Both Fury nodes together give 100 × (0.5 + 0.15) = 65.

[Details](broker_stimm_combat_5b.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_combat_5c"></a>

### Vultoprene II

<img src="https://github.com/user-attachments/assets/c91fbea3-470d-4fa1-ac50-d2ab5c741a35" width="72" height="72" alt="Vultoprene II talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives five Power nodes: 500 × (1 + 5 × 4%) = 600.

- **Critical Strike Chance**: Gain 10 percentage points; Vultoprene I and II together add 15 percentage points.

- **Critical example**: An original 10% becomes 10% + 10% = 20% with this node alone; both Vultoprene nodes together give 25%, with the final result clamped to 0%–100%.

[Details](broker_stimm_combat_5c.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_durability_1"></a>

### Barrage I

<img src="https://github.com/user-attachments/assets/883f2dd7-ad0d-4986-a5d0-32fa36a11e27" width="72" height="72" alt="Barrage I talent icon">

- **Recipe cost**: 1 point. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Recovery on use**: Additionally restore 6.25% of maximum Toughness, affected by Toughness recovery bonuses and capped at maximum Toughness.

- **Ongoing effects**: Gain 5% Toughness Replenishment and multiply Damage Taken by 0.96, giving 4% Damage Reduction from this node.

- **Damage Reduction example**: Selecting Barrage I through this node gives 1 multiplicative Damage Reduction modifier. An incoming 100 Damage becomes 100 × 0.96^1 ≈ 96.000.

- **Recovery example**: With maximum Toughness 100 and recovery bonuses from this node and its prerequisites active, using the Stimm restores 100 × (1 × 6.25%) × (1 + 1 × 5%) = 6.5625; actual recovery is limited by missing Toughness.

[Details](broker_stimm_durability_1.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_durability_2"></a>

### Barrage II

<img src="https://github.com/user-attachments/assets/e99ef969-5e48-4129-9a22-d11f0e23aa80" width="72" height="72" alt="Barrage II talent icon">

- **Recipe cost**: 2 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Recovery on use**: Additionally restore 6.25% of maximum Toughness, affected by Toughness recovery bonuses and capped at maximum Toughness.

- **Ongoing effects**: Gain 5% Toughness Replenishment and multiply Damage Taken by 0.96, giving 4% Damage Reduction from this node.

- **Damage Reduction example**: Selecting Barrage I through this node gives 2 multiplicative Damage Reduction modifiers. An incoming 100 Damage becomes 100 × 0.96^2 ≈ 92.160.

- **Recovery example**: With maximum Toughness 100 and recovery bonuses from this node and its prerequisites active, using the Stimm restores 100 × (2 × 6.25%) × (1 + 2 × 5%) = 13.75; actual recovery is limited by missing Toughness.

[Details](broker_stimm_durability_2.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_durability_3"></a>

### Barrage III

<img src="https://github.com/user-attachments/assets/a9df685a-a1fd-4431-b90a-b77559277f58" width="72" height="72" alt="Barrage III talent icon">

- **Recipe cost**: 3 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Recovery on use**: Additionally restore 6.25% of maximum Toughness, affected by Toughness recovery bonuses and capped at maximum Toughness.

- **Ongoing effects**: Gain 5% Toughness Replenishment and multiply Damage Taken by 0.96, giving 4% Damage Reduction from this node.

- **Damage Reduction example**: Selecting Barrage I through this node gives 3 multiplicative Damage Reduction modifiers. An incoming 100 Damage becomes 100 × 0.96^3 ≈ 88.474.

- **Recovery example**: With maximum Toughness 100 and recovery bonuses from this node and its prerequisites active, using the Stimm restores 100 × (3 × 6.25%) × (1 + 3 × 5%) = 21.5625; actual recovery is limited by missing Toughness.

[Details](broker_stimm_durability_3.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_durability_4"></a>

### Barrage IV

<img src="https://github.com/user-attachments/assets/e60164c9-4f04-46ed-afe0-0a71e33582f1" width="72" height="72" alt="Barrage IV talent icon">

- **Recipe cost**: 4 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Recovery on use**: Additionally restore 6.25% of maximum Toughness, affected by Toughness recovery bonuses and capped at maximum Toughness.

- **Ongoing effects**: Gain 5% Toughness Replenishment and multiply Damage Taken by 0.96, giving 4% Damage Reduction from this node.

- **Damage Reduction example**: Selecting Barrage I through this node gives 4 multiplicative Damage Reduction modifiers. An incoming 100 Damage becomes 100 × 0.96^4 ≈ 84.935.

- **Recovery example**: With maximum Toughness 100 and recovery bonuses from this node and its prerequisites active, using the Stimm restores 100 × (4 × 6.25%) × (1 + 4 × 5%) = 30; actual recovery is limited by missing Toughness.

[Details](broker_stimm_durability_4.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_durability_5a"></a>

### Tank

<img src="https://github.com/user-attachments/assets/35bab219-731c-41ac-80a8-27af4a02f1c2" width="72" height="72" alt="Tank talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Recovery bonus**: Gain 30% Toughness Replenishment, additive with the 20% from Barrage I–IV for a total 50% bonus.

- **Recovery example**: An effect normally restoring 10 becomes 10 × (1 + 20% + 30%) = 15, capped at maximum Toughness.

- **Injection example**: With maximum Toughness 100, Barrage I–IV provide a total 25% one-time recovery. Applying this route's 50% recovery bonus gives 100 × 25% × 1.5 = 37.5.

[Details](broker_stimm_durability_5a.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_durability_5b"></a>

### Regain

<img src="https://github.com/user-attachments/assets/f238889d-d7aa-45e0-8d16-9726389c7fe8" width="72" height="72" alt="Regain talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Ongoing recovery**: Restore 5% of maximum Toughness per second during the Stimm effect, affected by Toughness recovery bonuses. The first recovery occurs approximately 1 second after application.

- **Recovery example**: With maximum Toughness 100 and the 20% recovery bonus from Barrage I–IV, each tick restores 100 × 5% × 1.2 = 6. If only 3 Toughness is missing, it restores only 3.

- **Stopping conditions**: Recovery stops when the Stimm effect ends; it does not provide this recovery while knocked down.

[Details](broker_stimm_durability_5b.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_concentration_1"></a>

### Kalma I

<img src="https://github.com/user-attachments/assets/b6316199-6d72-4db3-8be6-a74600e54b2f" width="72" height="72" alt="Kalma I talent icon">

- **Recipe cost**: 1 point. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Regeneration rate**: Natural Combat Ability Regeneration gains 6.25%; prerequisite bonuses remain active and add at the same stage.

- **Ongoing regeneration example**: Selecting Kalma I through this node gives a total 6.25% bonus. A base recovery of 1 second of cooldown per second becomes 1.0625 seconds per second, recovering 15 × 1.0625 = 15.9375 seconds over the 15-second Stimm effect.

- **Remaining-time example**: With 60 seconds remaining and normal ability regeneration active, 44.0625 seconds remain after the 15-second Stimm: 60 − 15.9375 = 44.0625. Recovery then returns to its original rate.

- **While paused**: If natural Combat Ability Regeneration is paused by a state or a field that has not yet ended, this speed bonus does not start the countdown on its own.

[Details](broker_stimm_concentration_1.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_concentration_2"></a>

### Kalma II

<img src="https://github.com/user-attachments/assets/8401a77b-6cc2-4b03-a0de-dd67296d008d" width="72" height="72" alt="Kalma II talent icon">

- **Recipe cost**: 2 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Regeneration rate**: Natural Combat Ability Regeneration gains 6.25%; prerequisite bonuses remain active and add at the same stage.

- **Ongoing regeneration example**: Selecting Kalma I through this node gives a total 12.5% bonus. A base recovery of 1 second of cooldown per second becomes 1.125 seconds per second, recovering 15 × 1.125 = 16.875 seconds over the 15-second Stimm effect.

- **Remaining-time example**: With 60 seconds remaining and normal ability regeneration active, 43.125 seconds remain after the 15-second Stimm: 60 − 16.875 = 43.125. Recovery then returns to its original rate.

- **While paused**: If natural Combat Ability Regeneration is paused by a state or a field that has not yet ended, this speed bonus does not start the countdown on its own.

[Details](broker_stimm_concentration_2.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_concentration_3"></a>

### Kalma III

<img src="https://github.com/user-attachments/assets/dc414369-8882-423d-9c5f-ba6a04583163" width="72" height="72" alt="Kalma III talent icon">

- **Recipe cost**: 3 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Regeneration rate**: Natural Combat Ability Regeneration gains 6.25%; prerequisite bonuses remain active and add at the same stage.

- **Ongoing regeneration example**: Selecting Kalma I through this node gives a total 18.75% bonus. A base recovery of 1 second of cooldown per second becomes 1.1875 seconds per second, recovering 15 × 1.1875 = 17.8125 seconds over the 15-second Stimm effect.

- **Remaining-time example**: With 60 seconds remaining and normal ability regeneration active, 42.1875 seconds remain after the 15-second Stimm: 60 − 17.8125 = 42.1875. Recovery then returns to its original rate.

- **While paused**: If natural Combat Ability Regeneration is paused by a state or a field that has not yet ended, this speed bonus does not start the countdown on its own.

[Details](broker_stimm_concentration_3.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_concentration_4"></a>

### Kalma IV

<img src="https://github.com/user-attachments/assets/d4e178b4-1b2e-48cc-8221-35d5c515e8cb" width="72" height="72" alt="Kalma IV talent icon">

- **Recipe cost**: 4 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Regeneration rate**: Natural Combat Ability Regeneration gains 6.25%; prerequisite bonuses remain active and add at the same stage.

- **Ongoing regeneration example**: Selecting Kalma I through this node gives a total 25% bonus. A base recovery of 1 second of cooldown per second becomes 1.25 seconds per second, recovering 15 × 1.25 = 18.75 seconds over the 15-second Stimm effect.

- **Remaining-time example**: With 60 seconds remaining and normal ability regeneration active, 41.25 seconds remain after the 15-second Stimm: 60 − 18.75 = 41.25. Recovery then returns to its original rate.

- **While paused**: If natural Combat Ability Regeneration is paused by a state or a field that has not yet ended, this speed bonus does not start the countdown on its own.

[Details](broker_stimm_concentration_4.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_concentration_5a"></a>

### Kalma V

<img src="https://github.com/user-attachments/assets/f86ba1f1-5859-40ce-b662-6f9e54e9afe5" width="72" height="72" alt="Kalma V talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Regeneration rate**: Natural Combat Ability Regeneration gains 25%; prerequisite bonuses remain active and add at the same stage.

- **Ongoing regeneration example**: Selecting Kalma I through this node gives a total 50% bonus. A base recovery of 1 second of cooldown per second becomes 1.5 seconds per second, recovering 15 × 1.5 = 22.5 seconds over the 15-second Stimm effect.

- **Remaining-time example**: With 60 seconds remaining and normal ability regeneration active, 37.5 seconds remain after the 15-second Stimm: 60 − 22.5 = 37.5. Recovery then returns to its original rate.

- **While paused**: If natural Combat Ability Regeneration is paused by a state or a field that has not yet ended, this speed bonus does not start the countdown on its own.

[Details](broker_stimm_concentration_5a.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_concentration_5b"></a>

### Hypex

<img src="https://github.com/user-attachments/assets/77f46379-3f89-4c81-8240-a0dc288fb868" width="72" height="72" alt="Hypex talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Trigger**: While the Stimm is active, killing an enemy with a Melee Attack grants an additional 56.25% Combat Ability Regeneration for 1 second.

- **Refreshing**: Another qualifying kill resets the 1-second countdown; it does not stack a second copy of the bonus.

- **Regeneration example**: Prerequisite Kalma I–IV provide 25%. Adding this 56.25% gives a multiplier of 1 + 25% + 56.25% = 1.8125 for that second. A base recovery of 1 second of cooldown per second becomes 1.8125 seconds for that second.

- **Scope**: This speeds up Combat Ability Regeneration only, without speeding up the dedicated Stimm's own recovery. It does not start the countdown while natural ability regeneration is paused.

[Details](broker_stimm_concentration_5b.md) · [Back to index](#talent-index)

---

<a id="broker_stimm_concentration_5c"></a>

### Klay

<img src="https://github.com/user-attachments/assets/9707e711-9e62-4b88-9102-fe83ffa29cda" width="72" height="72" alt="Klay talent icon">

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Trigger**: While the Stimm is active, killing an enemy with a Ranged Attack grants an additional 56.25% Combat Ability Regeneration for 1 second.

- **Refreshing**: Another qualifying kill resets the 1-second countdown; it does not stack a second copy of the bonus.

- **Regeneration example**: Prerequisite Kalma I–IV provide 25%. Adding this 56.25% gives a multiplier of 1 + 25% + 56.25% = 1.8125 for that second. A base recovery of 1 second of cooldown per second becomes 1.8125 seconds for that second.

- **Scope**: This speeds up Combat Ability Regeneration only, without speeding up the dedicated Stimm's own recovery. It does not start the countdown while natural ability regeneration is paused.

[Details](broker_stimm_concentration_5c.md) · [Back to index](#talent-index)
