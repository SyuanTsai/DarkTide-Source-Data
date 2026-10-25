# 靈能者天賦：Release 1.13.X

[English](en/README.md)

[來源、公式與技術索引](SOURCE_INDEX.md)｜[技能分類](../../README.md)｜[版本資訊](../../../README.md)
[角色基礎效果](BASE_EFFECTS.md)

冷卻光環的進度調整與靈能攻擊的追蹤轉向依 Release 1.13.2；各技能的完整來源版本見詳細資料。遊戲原文批次仍為 1.13.1／Steam Build 25606770。

<a id="talent-index"></a>
## 技能目錄

| 技能 | 主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/2e792f27-7daf-4ce9-abcc-9d92ded0985c" width="32" height="32" alt="動能撕裂者天賦圖示"> [動能撕裂者](#psyker_smite_on_hit)<br>- Kinetic Flayer | <ul><li>命中仍存活的精英、專家敵人或巨獸時觸發顱腦崩裂，冷卻 12 秒。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/215cb557-8544-4d05-876a-871e70dc093a" width="32" height="32" alt="顱腦崩裂天賦圖示"> [顱腦崩裂](#psyker_brain_burst_improved)<br>- Brain Rupture | <ul><li>蓄力後攻擊單一敵人</li><li>比基礎閃擊增加 50% 傷害</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/a0c17626-2777-4302-bc7e-9b3a48aadcd0" width="32" height="32" alt="靈能攻擊天賦圖示"> [靈能攻擊](#psyker_grenade_throwing_knives)<br>- Assail | <ul><li>投擲追蹤敵人的靈能碎片；可瞄準指定目標。</li><li>最多保留 10 次，每 3 秒恢復一次。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/ae86e2bb-6971-4dfe-b678-0aa814ccdfa1" width="32" height="32" alt="乙太碎片天賦圖示"> [乙太碎片](#psyker_throwing_knives_piercing)<br>- Ethereal Shards | <ul><li>靈能攻擊的傷害及撞擊穿透容量增加 50%。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/981d6617-da53-4f4d-8c85-c2e64dddab43" width="32" height="32" alt="懲戒天賦圖示"> [懲戒](#psyker_grenade_chain_lightning)<br>- Smite | <ul><li>持續電擊目標並向附近敵人傳導</li><li>蓄力施放可加快擴散及傷害提升</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/6092228c-b394-42c6-831b-da4dc72024b9" width="32" height="32" alt="動能共鳴天賦圖示"> [動能共鳴](#psyker_ability_increase_brain_burst_speed)<br>- Kinetic Resonance | <ul><li>使用戰鬥技能後 10 秒內，顱腦崩裂蓄力速度增加 75%，反噬產生量減少 50%。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/7db7b0d7-3d96-4b42-8f50-f9112f80badc" width="32" height="32" alt="迅捷碎片天賦圖示"> [迅捷碎片](#psyker_throwing_knives_cast_speed)<br>- Quick Shards | <ul><li>靈能攻擊的次數恢復速率增加 30%；基礎每次恢復由 3 秒縮短至約 2.31 秒。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/0519f0ec-0ce9-4846-8ed4-95a0b9c092de" width="32" height="32" alt="衰弱詛咒天賦圖示"> [衰弱詛咒](#psyker_chain_lightning_improved_target_buff)<br>- Enfeeble | <ul><li>你電擊的敵人受到所有來源的傷害提高 10%。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/e21d55d1-68fa-4d4d-a19b-2b6050753a7e" width="32" height="32" alt="蓄力打擊天賦圖示"> [蓄力打擊](#psyker_chain_lightning_heavy_attacks)<br>- Charged Strike | <ul><li>近戰重擊命中後使敵人電擊 2 秒，電擊期間造成持續傷害。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/ddd7895f-a971-4cdf-99bd-3f536cab3f8a" width="32" height="32" alt="動能釋放天賦圖示"> [動能釋放](#psyker_aura_damage_vs_elites)<br>- Kinetic Presence | <ul><li>你與協同中的隊友對精英敵人造成的傷害提高 10%。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/61a749ff-c64c-47a7-8607-e19b59a688b3" width="32" height="32" alt="先知之眼天賦圖示"> [先知之眼](#psyker_cooldown_aura_improved)<br>- Seer's Presence | <ul><li>你與協同中的隊友的技能冷卻時間縮短 10%。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/44e929da-988f-4845-b68b-95320025d339" width="32" height="32" alt="預兆天賦圖示"> [預兆](#psyker_aura_crit_chance_aura)<br>- Prescience | <ul><li>你與協同中的隊友的爆擊率增加 5 個百分點。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/d0500b6b-c91c-4c34-857a-6c144800fe37" width="32" height="32" alt="靈能尖嘯天賦圖示"> [靈能尖嘯](#psyker_shout_vent_warp_charge)<br>- Venting Shriek | <ul><li>前方衝擊使敵人踉蹌</li><li>平息 50 個反噬百分點；冷卻 30 秒</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/a56d3b3f-6e4e-4aed-83fc-0317ac57364a" width="32" height="32" alt="占卜者的注視天賦圖示"> [占卜者的注視](#psyker_combat_ability_stance)<br>- Scrier's Gaze | <ul><li>傷害、暴擊與弱點加成，並恢復韌性</li><li>反噬達 100% 結束；累積增傷保留 10 秒</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/b89da8f0-2d3d-4a87-bc92-43e2438e28c8" width="32" height="32" alt="平靜迸發天賦圖示"> [平靜迸發](#psyker_shout_reduces_warp_charge_generation)<br>- Becalming Eruption | <ul><li>尖嘯每命中一名敵人，降低反噬生成</li><li>最多 25 層，持續 5 秒</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/8a145b7f-771a-42b6-a809-56650cd24f7e" width="32" height="32" alt="亞空間爆發天賦圖示"> [亞空間爆發](#psyker_discharge_damage_debuff)<br>- Warp Rupture | <ul><li>尖嘯命中的敵人傷害降低 10%</li><li>受到傷害提高 10%，持續 8 秒</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/65f7ef9b-5b0d-458e-bc7d-5aea8e948e14" width="32" height="32" alt="蔓延火焰天賦圖示"> [蔓延火焰](#psyker_warpfire_on_shout)<br>- Creeping Flames | <ul><li>尖嘯依反噬值施加靈魂之火</li><li>每個命中目標獲得 1 至 6 層</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/41b92eae-77a3-481e-af12-783845ce49c4" width="32" height="32" alt="預知未來天賦圖示"> [預知未來](#psyker_overcharge_weakspot_kill_bonuses)<br>- Precognition | <ul><li>注視增加靈巧傷害，最高 30%</li><li>弱點擊殺加快傷害疊層</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/f9987bfc-f9d7-48d8-9431-8c361223c50e" width="32" height="32" alt="亞空間加速天賦圖示"> [亞空間加速](#psyker_overcharge_increased_movement_speed)<br>- Warp Speed | <ul><li>注視期間增加 20% 移動速度</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/547fa734-789a-404c-9c48-aa1671d3605c" width="32" height="32" alt="靈能學者光環天賦圖示"> [靈能學者光環](#psyker_2_tier_3_name_2)<br>- Psykinetic's Aura | <ul><li>擊殺精英或專家後，加快能力冷卻</li><li>效果持續 3 秒</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/123c7e4e-3844-4ff0-94c0-5cf7f7772b8f" width="32" height="32" alt="現實錨點天賦圖示"> [現實錨點](#psyker_overcharge_reduced_warp_charge)<br>- Reality Anchor | <ul><li>注視期間反噬生成減少 20%</li><li>平息所需時間縮短 30%</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/e328d953-886b-4527-9c23-e8bfc90ada6f" width="32" height="32" alt="念力護盾天賦圖示"> [念力護盾](#psyker_combat_ability_force_field)<br>- Telekine Shield | <ul><li>展開護盾，阻擋敵方遠程攻擊</li><li>最長 17.5 秒；冷卻 40 秒</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/72b10287-7ce1-47a1-a57f-a88c56c51f9f" width="32" height="32" alt="強化護盾天賦圖示"> [強化護盾](#psyker_shield_extra_charge)<br>- Bolstered Shield | <ul><li>念力護盾最多儲存 2 次</li><li>每次充能需 40 秒，逐次恢復</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/57b73353-bc2c-4313-b488-cb9a1ac7c9f0" width="32" height="32" alt="庇護所天賦圖示"> [庇護所](#psyker_boost_allies_in_sphere)<br>- Sanctuary | <ul><li>穹頂內每秒恢復 10% 最大韌性</li><li>消散時提供 50% 韌性減傷，持續 5 秒</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/60e6d4b2-0696-4215-8afd-8c9725d4801f" width="32" height="32" alt="念力穹頂天賦圖示"> [念力穹頂](#psyker_sphere_shield)<br>- Telekine Dome | <ul><li>護盾改為半徑 6 公尺的球形屏障</li><li>最長 25 秒；冷卻 60 秒</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/0cacb110-bf24-451f-ad19-f55ee7bd6191" width="32" height="32" alt="衰弱界線天賦圖示"> [衰弱界線](#psyker_shield_stun_passive)<br>- Enervating Threshold | <ul><li>穿越護盾的敵人有 20% 機率被電擊</li><li>專家與巨獸必定觸發；專家會損傷護盾</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/810110f9-a360-4a69-8754-0e3502a0bef8" width="32" height="32" alt="亞空間突破天賦圖示"> [亞空間突破](#psyker_overcharge_stance_infinite_casting)<br>- Warp Unbound | <ul><li>注視結束後仍能免於反噬超載</li><li>保護持續 11.5 秒</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/07eff6fd-5c1a-49f2-8a72-d689ec6bb42e" width="32" height="32" alt="亞空間虹吸天賦圖示"> [亞空間虹吸](#psyker_passive_souls_from_elite_kills)<br>- Warp Siphon | <ul><li>擊殺精英或專家取得亞空間充能</li><li>每層增加 4% 傷害；施放能力消耗充能並縮短冷卻</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/885fdda1-bcf2-4502-97e0-7eaead2392e0" width="32" height="32" alt="擾動命運天賦圖示"> [擾動命運](#psyker_new_mark_passive)<br>- Disrupt Destiny | <ul><li>擊殺標記目標，累積傷害、弱點與暴擊加成</li><li>並恢復韌性、短暫提高移動速度</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/d3625057-f314-491b-8a34-84789ec38342" width="32" height="32" alt="靈能強化天賦圖示"> [靈能強化](#psyker_empowered_ability)<br>- Empowered Psionics | <ul><li>擊殺有 10% 機率強化下一次閃擊</li><li>依閃擊種類提高傷害、加快蓄力或免除消耗</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/333bcafc-3c34-4b47-bb5b-658c9cd2b777" width="32" height="32" alt="平心靜氣天賦圖示"> [平心靜氣](#psyker_reduced_warp_charge_cost_and_venting_speed)<br>- Inner Tranquility | <ul><li>每層亞空間充能降低反噬生成 8%</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/00ae8b19-169d-4eec-94e2-89c3cf851d08" width="32" height="32" alt="吸精奪萃天賦圖示"> [吸精奪萃](#psyker_toughness_on_soul)<br>- Essence Harvest | <ul><li>取得亞空間充能後，5 秒恢復 30% 最大韌性</li><li>再次取得會重設持續時間</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/827d3ef0-dce8-4cb8-8af1-c5ad142d4ec1" width="32" height="32" alt="生物磁石天賦圖示"> [生物磁石](#psyker_empowered_grenades_passive_improved)<br>- Bio-Lodestone | <ul><li>擊殺取得靈能強化的機率由 10% 提高至 15%</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/38c99293-d836-4a4e-91fb-1f6a65a848f8" width="32" height="32" alt="吸血閃電天賦圖示"> [吸血閃電](#psyker_empowered_chain_lightnings_replenish_toughness_to_allies)<br>- Psychic Leeching | <ul><li>使用強化閃擊，恢復本人與協同隊友 20% 最大韌性</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/6312d53d-fec2-44c3-b04e-778d2e74e232" width="32" height="32" alt="吞靈強擊天賦圖示"> [吞靈強擊](#psyker_empowered_ability_on_elite_kills)<br>- Overpowering Souls | <ul><li>擊殺精英必定取得一層靈能強化</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/d2ef8713-7c0b-4dec-b13a-7f9e6a294435" width="32" height="32" alt="完美主義天賦圖示"> [完美主義](#psyker_mark_increased_max_stacks)<br>- Perfectionism | <ul><li>精準加成上限由 15 層提高至 25 層</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/06e543d8-85dd-455b-8ac2-3f9f29b03cf1" width="32" height="32" alt="盜竊天命天賦圖示"> [盜竊天命](#psyker_mark_kills_can_vent)<br>- Purloin Providence | <ul><li>擊殺被標記的敵人，平息 5 個反噬百分點</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/d2b37d6f-6054-462c-ba12-5583c59bceb8" width="32" height="32" alt="持久影響天賦圖示"> [持久影響](#psyker_mark_increased_duration)<br>- Lingering Influence | <ul><li>精準加成倒數由 5 秒延長至 10 秒</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/1918d789-dd64-401d-b985-c99915053691" width="32" height="32" alt="充能完畢天賦圖示"> [充能完畢](#psyker_empowered_grenades_increased_max_stacks)<br>- Charged Up | <ul><li>靈能強化最多儲存 3 層</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/f42fce6a-aab7-4622-a8b9-bd171fba4b33" width="32" height="32" alt="涅槃天賦圖示"> [涅槃](#psyker_warpfire_generate_souls)<br>- In Fire Reborn | <ul><li>帶有靈魂之火的敵人死亡時，有 10% 機率取得亞空間充能</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/36248d6b-7838-4004-86e5-645956cb8392" width="32" height="32" alt="靈能吸血鬼天賦圖示"> [靈能吸血鬼](#psyker_aura_souls_on_kill)<br>- Psychic Vampire | <ul><li>本人或協同隊友擊殺，有 4% 機率讓你獲得亞空間充能</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/47c3ad89-c6a0-4c8c-a452-b8af3e859043" width="32" height="32" alt="亞空間電池天賦圖示"> [亞空間電池](#psyker_increased_max_souls)<br>- Warp Battery | <ul><li>亞空間充能上限由 4 層提高至 6 層</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/a3deac9c-bddd-441f-a916-e41eecf9b23e" width="32" height="32" alt="殘忍命運天賦圖示"> [殘忍命運](#psyker_mark_weakspot_kills)<br>- Cruel Fortune | <ul><li>弱點擊殺標記目標時，一次獲得 3 層精準加成</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/800b3bd1-a9a6-48ba-961c-66e12b256f37" width="32" height="32" alt="靈魂竊賊天賦圖示"> [靈魂竊賊](#psyker_toughness_on_warp_kill)<br>- Soulstealer | <ul><li>亞空間攻擊擊殺敵人時，恢復 7.5% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/12e587e5-b69a-49cd-8d0f-a8280b832197" width="32" height="32" alt="心如止水天賦圖示"> [心如止水](#psyker_toughness_on_vent)<br>- Quietude | <ul><li>每產生或降低 10 個百分點的反噬，恢復 4% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/cb5dcadd-924f-442d-a21f-cb8f873b182d" width="32" height="32" alt="亞空間耗費天賦圖示"> [亞空間耗費](#psyker_toughness_on_melee)<br>- Warp Expenditure | <ul><li>近戰命中首個敵人，恢復 2.5% 最大韌性。</li><li>近戰弱點擊殺改為在 3 秒內恢復 15% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/53013aa9-f833-431c-8b85-3e548dbc318c" width="32" height="32" alt="堅毅天賦圖示"> [堅毅](#psyker_crits_regen_toughness_movement_speed)<br>- Mettle | <ul><li>暴擊命中後持續恢復韌性，並增加 5% 移動速度。</li><li>移動加成最多 3 層、持續 4 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6cc7512d-8e6f-4261-88f3-c95089950934" width="32" height="32" alt="險惡燃燒天賦圖示"> [險惡燃燒](#psyker_elite_kills_add_warpfire)<br>- Perilous Combustion | <ul><li>擊殺精英或專家敵人，對死者周圍 4 公尺內敵人施加 2 層靈魂之火。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/69bdf081-b37e-479b-a157-f6e047efcfda" width="32" height="32" alt="戰鬥冥想天賦圖示"> [戰鬥冥想](#psyker_chance_to_vent_on_kill)<br>- Battle Meditation | <ul><li>反噬產生量減少 10%。</li><li>擊殺有 10% 機率降低 10 個百分點反噬。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/3c19e5ea-ccab-46a3-9763-c8d4075c6332" width="32" height="32" alt="完美時機天賦圖示"> [完美時機](#psyker_crits_empower_next_attack)<br>- Perfect Timing | <ul><li>暴擊命中增加 3% 傷害，最多 5 層，持續 10 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/1e6189fe-4a6e-4fda-bbe9-e2a38c75ff2a" width="32" height="32" alt="野火天賦圖示"> [野火](#psyker_spread_warpfire_on_kill)<br>- Wildfire | <ul><li>受你的靈魂之火影響的敵人死亡時，向 5 公尺內敵人分配最多 4 層靈魂之火。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/86748037-d25a-449c-881a-b80060374012" width="32" height="32" alt="思維活躍天賦圖示"> [思維活躍](#psyker_venting_improvements)<br>- Mind in Motion | <ul><li>平息反噬與裝填不再造成各自的移動減速。</li><li>移動速度增加 5%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/cc72c2ff-3d22-42e0-be1d-69a9f4d7cb22" width="32" height="32" alt="惡意攻勢天賦圖示"> [惡意攻勢](#psyker_kills_stack_other_weapon_damage)<br>- Malefic Momentum | <ul><li>非亞空間擊殺強化亞空間傷害；亞空間擊殺強化非亞空間傷害。</li><li>每層 5%，各最多 5 層，持續 10 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/68726dca-2cf0-40d6-bfe6-eccecc659446" width="32" height="32" alt="亞空間強化天賦圖示"> [亞空間強化](#psyker_warp_charge_reduces_toughness_damage_taken)<br>- One with the Warp | <ul><li>依目前反噬獲得 10%～33% 韌性減傷。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/80b2261c-4df6-4531-b9c1-bf67fbbbdcee" width="32" height="32" alt="看破天賦圖示"> [看破](#psyker_improved_dodge)<br>- Anticipation | <ul><li>有效閃避次數增加 1 次；閃避保護的延續時間增加 50%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/946f549a-ed56-4711-aee8-39ce35a0a6b1" width="32" height="32" alt="反射閃避天賦圖示"> [反射閃避](#psyker_dodge_after_crits)<br>- Empathic Evasion | <ul><li>暴擊命中後，1 秒內對遠程攻擊視為正在閃避。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/86582600-a30d-4e5a-b87b-ae33b2e78746" width="32" height="32" alt="穩固天賦圖示"> [穩固](#psyker_increased_vent_speed)<br>- Solidity | <ul><li>平息反噬的時間倍率變成 0.7。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8f79e11c-ea7c-4e52-957b-007bd85bcf1b" width="32" height="32" alt="亞空間騎士天賦圖示"> [亞空間騎士](#psyker_damage_based_on_warp_charge)<br>- Warp Rider | <ul><li>依目前反噬提高傷害，最高增加 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4b242d12-87d5-44a8-a2aa-4c1a0f3a2376" width="32" height="32" alt="精確瞄準天賦圖示"> [精確瞄準](#psyker_guaranteed_crit_on_multiple_weakspot_hits)<br>- True Aim | <ul><li>累積 5 次有效弱點命中，使下一次遠程攻擊必定暴擊。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/1561e519-2633-4a6f-af9f-fffe6a6c8a03" width="32" height="32" alt="傀儡師天賦圖示"> [傀儡師](#psyker_coherency_aura_size_increase)<br>- Puppet Master | <ul><li>協同範圍半徑增加 75%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e56e3649-507c-4ebb-94fc-58f7eff77aee" width="32" height="32" alt="動能偏斜天賦圖示"> [動能偏斜](#psyker_block_costs_warp_charge)<br>- Kinetic Deflection | <ul><li>反噬低於 97% 時，以增加反噬代替格擋耐力消耗。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/3d86850d-c891-443c-8f80-2f01ad34bdff" width="32" height="32" alt="韌性增幅天賦圖示"> [韌性增幅](#base_toughness_node_buff_medium_5)<br>- Toughness Boost | <ul><li>最大韌性增加 15 點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/92db3e61-eb2d-4af5-b9a7-3a1bab73234a" width="32" height="32" alt="韌性增幅天賦圖示"> [韌性增幅](#base_toughness_node_buff_medium_4)<br>- Toughness Boost | <ul><li>最大韌性增加 15 點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/57a54ed7-4f34-449f-9f2d-eb401a97b51a" width="32" height="32" alt="韌性減傷天賦圖示"> [韌性減傷](#base_toughness_damage_reduction_node_buff_medium_1)<br>- Toughness Damage Reduction | <ul><li>韌性減傷增加 10 個百分點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ac3d53fd-1b36-40d7-8ee1-275804b29c63" width="32" height="32" alt="迅雷之勢天賦圖示"> [迅雷之勢](#psyker_melee_attack_speed)<br>- Lightning Speed | <ul><li>近戰攻擊速度增加 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c8b43c74-3790-440f-8610-db321e11da83" width="32" height="32" alt="亞空間分裂天賦圖示"> [亞空間分裂](#psyker_cleave_from_peril)<br>- Warp Splitting | <ul><li>依目前反噬增加傷害順劈能力，最高增加 100%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/444fd0d1-2a66-48f9-b841-f7bf1bcc6ccf" width="32" height="32" alt="汲魂者天賦圖示"> [汲魂者](#psyker_killing_enemy_with_warpfire_boosts)<br>- Souldrinker | <ul><li>受靈魂之火影響的敵人死亡後，5 秒內恢復韌性並增加 5 個百分點爆擊率。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/efceab94-6c34-43bc-a8ed-6d06fbf269b1" width="32" height="32" alt="骨折後遺症天賦圖示"> [骨折後遺症](#psyker_melee_weaving)<br>- By Crack of Bone | <ul><li>近戰弱點擊殺降低 10 個百分點反噬。</li><li>之後 4 秒反噬產生量減少 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f3235e60-41ff-4e15-81eb-172af5ec1f2e" width="32" height="32" alt="脆弱心智天賦圖示"> [脆弱心智](#psyker_damage_vs_ogryns_and_monsters)<br>- Vulnerable Minds | <ul><li>對歐格林與巨獸的傷害增加 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/eeeb7b3b-f3bc-4509-b50f-edc7787cb0e7" width="32" height="32" alt="聚焦次元天賦圖示"> [聚焦次元](#psyker_increased_warp_damage)<br>- Focused Warp | <ul><li>亞空間傷害增加 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c84a6cc0-5f99-4eee-a394-9b234a1fa5dd" width="32" height="32" alt="危險平衡天賦圖示"> [危險平衡](#psyker_weapon_attacks_peril_equilibrium)<br>- Peril Equilibrium | <ul><li>非亞空間近戰或遠程命中造成傷害時，反噬增加 2 個百分點，最高到 75%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5bac250d-4cc2-48b2-9832-8408652cec12" width="32" height="32" alt="武器在手，信心我有。天賦圖示"> [武器在手，信心我有。](#psyker_reload_speed_warp_charge)<br>- Surety of Arms | <ul><li>反噬不高於 80% 時，裝填速度增加 30%。</li><li>補滿一整個彈匣產生 15 個百分點反噬，按實際補彈比例計算。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6b51b11f-eed5-45f3-b539-6b4502778099" width="32" height="32" alt="結晶意志天賦圖示"> [結晶意志](#psyker_alternative_peril_explosion)<br>- Crystalline Will | <ul><li>反噬爆炸傷害增加 100%，半徑增加 25%。</li><li>以移除一格傷痕代替通常的爆炸倒地；爆炸擊殺精英可免除此代價。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a3ca9930-1aef-4718-9463-1b5da02a5b6b" width="32" height="32" alt="靈能引導天賦圖示"> [靈能引導](#psyker_force_staff_bonus)<br>- Channeled Force | <ul><li>高蓄力後，主要法杖攻擊增傷 20%，持續 5 秒。</li><li>主要攻擊後，次要法杖攻擊增傷 10%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f556046f-b193-4776-963d-798307d2c36a" width="32" height="32" alt="亞空間震波天賦圖示"> [亞空間震波](#psyker_force_staff_quick_attack_bonus)<br>- Empyric Shock | <ul><li>力場法杖主要攻擊命中，使目標受到的亞空間傷害每層乘 1.06。</li><li>最多 5 層，持續 10 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/b3086f22-3f24-417f-aaba-f59714897616" width="32" height="32" alt="如夢似幻天賦圖示"> [如夢似幻](#psyker_damage_to_peril_conversion)<br>- Just a Dream | <ul><li>反噬低於 97% 時減傷 25%，並依收到的傷害增加反噬。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/288f8a4c-fee3-4e56-8e0b-b2419e2a115b" width="32" height="32" alt="無形專注天賦圖示"> [無形專注](#psyker_damage_resistance_stun_immunity)<br>- Immaterial Focus | <ul><li>受到的傷害減少 10%。</li><li>反噬達 97% 時免疫眩暈；降離門檻後保留 4 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/49c99b4c-1fdc-4355-900d-2e4b4c733ba8" width="32" height="32" alt="亞空間意志天賦圖示"> [亞空間意志](#psyker_warp_glass_cannon)<br>- Empyric Resolve | <ul><li>反噬產生量減少 40%，韌性恢復量減少 30%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/57acd7a3-65a7-460c-876c-3153b63d69a3" width="32" height="32" alt="亞空間幽魂天賦圖示"> [亞空間幽魂](#psyker_stat_mix)<br>- Warp Ghost | <ul><li>耐力增加 2 點，韌性恢復量增加 25%。</li><li>反噬在自然消退的適用區段減慢 80%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/790d837c-239d-4d45-b4e8-c3c039df63ba" width="32" height="32" alt="靈魂穿透天賦圖示"> [靈魂穿透](#psyker_warp_attacks_rending)<br>- Penetration of the Soul | <ul><li>亞空間攻擊依目前反噬獲得撕裂，最高 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e66044cc-0b83-4f85-86ff-84661f076941" width="32" height="32" alt="念力之握天賦圖示"> [念力之握](#psyker_increased_blitz_damage)<br>- Psykinetic Grip | <ul><li>顱腦崩裂、懲戒與靈能攻擊的傷害增加 20%。</li></ul> | 技能 |

---

## 閃擊

<a id="psyker_smite_on_hit"></a>
### 動能撕裂者(Kinetic Flayer)

<img src="https://github.com/user-attachments/assets/2e792f27-7daf-4ce9-abcc-9d92ded0985c" width="72" height="72" alt="動能撕裂者天賦圖示">

- **觸發方式**：命中精英、專家敵人或巨獸並造成傷害，目標仍存活且天賦冷卻結束時，觸發一次顱腦崩裂。轟炸兵與場景物件不適用。

- **冷卻算例**：第 0 秒觸發後，第 11 秒的命中仍不能再次觸發；12 秒冷卻結束後的下一次合格命中才會觸發。

[詳細資料](psyker_smite_on_hit.md) · [返回目錄](#talent-index)

---

<a id="psyker_brain_burst_improved"></a>
### 顱腦崩裂(Brain Rupture)

<img src="https://github.com/user-attachments/assets/215cb557-8544-4d05-876a-871e70dc093a" width="72" height="72" alt="顱腦崩裂天賦圖示">

- **運作方式**：蓄積靈能力量後攻擊單一敵人，傷害比原本的基礎閃擊提高 50%。

- **蓄力方式**：可先蓄力再找目標，約 3 秒充滿；先鎖定目標再蓄力的模式約 2 秒充滿，鎖定後可移開準星。時間會受蓄力速度加成影響。

- **反噬算例**：沒有其他修正時，兩種模式蓄滿約增加 20 個反噬百分點，成功攻擊再增加 25 個百分點，共約 20 + 25 = 45 個百分點。滿蓄後繼續維持，每秒再增加約 9 個百分點。

- **傷害算例**：固定同一目標、蓄力程度與其他加成，原本造成 100 點傷害的攻擊，變成 100 × 1.5 = 150 點。此數字用來說明倍率；實際傷害仍依護甲與攻擊條件變動。

[詳細資料](psyker_brain_burst_improved.md) · [返回目錄](#talent-index)

---

<a id="psyker_grenade_throwing_knives"></a>
### 靈能攻擊(Assail)

<img src="https://github.com/user-attachments/assets/a0c17626-2777-4302-bc7e-9b3a48aadcd0" width="72" height="72" alt="靈能攻擊天賦圖示">

- **運作方式**：投擲追蹤目標的靈能碎片；瞄準後可指定敵人，投射速度提高。

- **使用與恢復**：最多保留 10 次使用次數，每次消耗一次，基礎每 3 秒補回一次。各次使用共用恢復進度，依序補回。

- **恢復算例**：無其他恢復修正、從 0 次且無剩餘進度開始，第 3 秒補回 1 次、第 6 秒補回 2 次，補滿 10 次需 3 × 10 = 30 秒。

- **傷害限制**：命中部位、目標護甲及穿透順序會影響傷害；後續穿透目標不能直接套用第一名敵人的傷害。

- **反噬消耗**：一般投擲增加 10 個反噬百分點，瞄準投擲增加 25 個百分點；例如原有 40%，分別變成 50% 或 65%。其他反噬生成修正另外套用。

- **追蹤轉向**：一般與瞄準投擲的碎片在尚未對準目標時會調整飛行速度；單次調整最多到達轉向設定值，避免大幅轉向或更新延遲造成過度調整。

[詳細資料](psyker_grenade_throwing_knives.md) · [返回目錄](#talent-index)

---

<a id="psyker_throwing_knives_piercing"></a>
### 乙太碎片(Ethereal Shards)

<img src="https://github.com/user-attachments/assets/ae86e2bb-6971-4dfe-b678-0aa814ccdfa1" width="72" height="72" alt="乙太碎片天賦圖示">

- **運作方式**：靈能攻擊的傷害及撞擊穿透容量增加 50%，能穿過更多敵人。

- **穿透算例**：無其他穿透修正，原本可穿過 2 個質量單位，變成 2 × 1.5 = 3 個質量單位。敵人質量不同，不等於固定多打 1 名敵人。

[詳細資料](psyker_throwing_knives_piercing.md) · [返回目錄](#talent-index)

---

<a id="psyker_grenade_chain_lightning"></a>
### 懲戒(Smite)

<img src="https://github.com/user-attachments/assets/981d6617-da53-4f4d-8c85-c2e64dddab43" width="72" height="72" alt="懲戒天賦圖示">

- **運作方式**：持續施放靈能閃電，電擊目標並向附近敵人傳導；敵人是否持續僵直仍受抗性與動作影響。蓄力施放可加快傳導與傷害提升。

- **擴散方式**：後續傳導範圍為 5 + 1 = 6 公尺。快速施放從最多一次傳導起步，在 1.2、1.8、2.7 秒依序提高至 2、3、4 次；蓄力施放則在 0.4、0.6、0.9 秒達到相同上限。敵人位置與視線仍會限制實際數量。

- **持續傷害**：電擊以 0.1 至 0.3 秒的隨機間隔造成傷害。快速施放需約 5 秒提升至最高強度，蓄力施放約需 2 秒；較難穿透的目標會延後開始受傷。最終傷害另受敵人護甲與加成影響。

- **反噬算例**：沒有其他修正時，快速施放前 0.1 秒約增加 0.75 個反噬百分點，之後每秒約增加 22.5 個百分點。持續 0.35 秒約增加 0.75 + 22.5 × 0.25 = 6.375 個百分點；蓄力前置過程完整進行 0.8 秒時，該階段另增加約 5 個百分點。

[詳細資料](psyker_grenade_chain_lightning.md) · [返回目錄](#talent-index)

---

<a id="psyker_ability_increase_brain_burst_speed"></a>
### 動能共鳴(Kinetic Resonance)

<img src="https://github.com/user-attachments/assets/6092228c-b394-42c6-831b-da4dc72024b9" width="72" height="72" alt="動能共鳴天賦圖示">

- **運作方式**：使用戰鬥技能後 10 秒內，顱腦崩裂蓄力速度增加 75%，產生的反噬減少 50%。

- **蓄力算例**：假設原蓄力需 2 秒、無其他加成，2 ÷ 1.75 ≈ 1.14 秒；原本產生 10 個百分點反噬，則變成 10 × 0.5 = 5 個百分點。

[詳細資料](psyker_ability_increase_brain_burst_speed.md) · [返回目錄](#talent-index)

---

<a id="psyker_throwing_knives_cast_speed"></a>
### 迅捷碎片(Quick Shards)

<img src="https://github.com/user-attachments/assets/7db7b0d7-3d96-4b42-8f50-f9112f80badc" width="72" height="72" alt="迅捷碎片天賦圖示">

- **運作方式**：靈能攻擊的使用次數恢復速率增加 30%。

- **恢復算例**：只計此天賦，原本每次需 3 秒，變成 3 ÷ 1.3 ≈ 2.31 秒；從完全耗盡補滿 10 次約需 30 ÷ 1.3 ≈ 23.08 秒。恢復速率增加 30%，不等於等待時間縮短 30%。

[詳細資料](psyker_throwing_knives_cast_speed.md) · [返回目錄](#talent-index)

---

<a id="psyker_chain_lightning_improved_target_buff"></a>
### 衰弱詛咒(Enfeeble)

<img src="https://github.com/user-attachments/assets/0519f0ec-0ce9-4846-8ed4-95a0b9c092de" width="72" height="72" alt="衰弱詛咒天賦圖示">

- **運作方式**：被你的懲戒電擊的敵人，受到的傷害增加 10%；隊友攻擊也能受益。搭配蓄力打擊時，近戰重擊施加的電擊也有同樣效果。

- **傷害算例**：只比較此目標承傷倍率、其他條件相同，原本受到 100 點傷害變成 100 × 1.1 = 110 點；電擊效果移除後，這項加成結束。

[詳細資料](psyker_chain_lightning_improved_target_buff.md) · [返回目錄](#talent-index)

---

<a id="psyker_chain_lightning_heavy_attacks"></a>
### 蓄力打擊(Charged Strike)

<img src="https://github.com/user-attachments/assets/e21d55d1-68fa-4d4d-a19b-2b6050753a7e" width="72" height="72" alt="蓄力打擊天賦圖示">

- **觸發方式**：近戰重擊命中敵人後，使其電擊 2 秒，期間造成持續傷害。

- **搭配衰弱詛咒**：這 2 秒電擊也會使目標受到的傷害增加 10%。只比較該承傷倍率，原本 100 點傷害變成 100 × 1.1 = 110 點。

[詳細資料](psyker_chain_lightning_heavy_attacks.md) · [返回目錄](#talent-index)

---


---

## 光環

<a id="psyker_aura_damage_vs_elites"></a>
### 動能釋放(Kinetic Presence)

<img src="https://github.com/user-attachments/assets/ddd7895f-a971-4cdf-99bd-3f536cab3f8a" width="72" height="72" alt="動能釋放天賦圖示">

- **光環效果**：你與協同範圍內的隊友對精英敵人的傷害增加 10%。同一光環不重複疊層。

- **傷害算例**：只比較此階段，基準 100 點、沒有其他加成時，100 × 1.1 = 110 點；已有 25% 同階段加成時，由 125 變成 100 × (1 + 25% + 10%) = 135 點。非精英敵人不享有此加成。

[詳細資料](psyker_aura_damage_vs_elites.md) · [返回目錄](#talent-index)

---

<a id="psyker_cooldown_aura_improved"></a>
### 先知之眼(Seer's Presence)

<img src="https://github.com/user-attachments/assets/61a749ff-c64c-47a7-8607-e19b59a688b3" width="72" height="72" alt="先知之眼天賦圖示">

- **光環效果**：你與協同範圍內的隊友，戰鬥技能冷卻時間縮短 10%。同一光環不重複疊層。

- **冷卻算例**：恢復速率固定且沒有其他修正，原本需 40 秒，改為 40 × (1 − 10%) = 36 秒；原本需 60 秒則改為 54 秒。

- **光環進出**：以次數恢復的戰鬥技能，使用次數上限不變時，冷卻光環生效或消失會按原本的恢復比例調整進度。例如一份原需 40 秒恢復的能力，已恢復 50% 時獲得 10% 光環，完整冷卻變為 36 秒，仍保留 50% 進度，剩餘等待為 36 × (1 − 50%) = 18 秒；假設恢復速率固定且沒有其他效果。

[詳細資料](psyker_cooldown_aura_improved.md) · [返回目錄](#talent-index)

---

<a id="psyker_aura_crit_chance_aura"></a>
### 預兆(Prescience)

<img src="https://github.com/user-attachments/assets/44e929da-988f-4845-b68b-95320025d339" width="72" height="72" alt="預兆天賦圖示">

- **光環效果**：你與協同範圍內的隊友，爆擊率增加 5 個百分點。同一光環不重複疊層。

- **機率算例**：原本 10% 爆擊率變成 10% + 5% = 15%；不是 10% × 1.05 = 10.5%。

[詳細資料](psyker_aura_crit_chance_aura.md) · [返回目錄](#talent-index)

---


---

## 能力

<a id="psyker_shout_vent_warp_charge"></a>
### 靈能尖嘯(Venting Shriek)

<img src="https://github.com/user-attachments/assets/d0500b6b-c91c-4c34-857a-6c144800fe37" width="72" height="72" alt="靈能尖嘯天賦圖示">

- **運作方式**：向前方釋放亞空間衝擊，使敵人踉蹌，並立即平息 50 個反噬百分點。基礎冷卻為 30 秒。

- **反噬算例**：80% − 50 個百分點 = 30%；原有 40% 時則降至 0%，最低不會小於零。

[詳細資料](psyker_shout_vent_warp_charge.md) · [返回目錄](#talent-index)

---

<a id="psyker_combat_ability_stance"></a>
### 占卜者的注視(Scrier's Gaze)

<img src="https://github.com/user-attachments/assets/a56d3b3f-6e4e-4aed-83fc-0317ac57364a" width="72" height="72" alt="占卜者的注視天賦圖示">

- **啟動效果**：立即平息 50 個反噬百分點；注視期間增加 10% 傷害、20 個百分點爆擊率及 10% 弱點額外傷害，獲得 20% 韌性減傷與壓制免疫。

- **持續效果**：每秒累積 1% 傷害加成，最多 30%；每秒恢復最大韌性的 2.5%。反噬會持續上升，擊殺可暫時減緩累積。反噬達 100% 時注視結束，累積的傷害加成再保留 10 秒。

- **傷害算例**：不計其他加成，滿層時非暴擊、非弱點的 100 點傷害變成 100 × (1 + 10% + 30%) = 140 點；結束後只保留累積的 30%，因此是 130 點。

- **弱點算例**：只看弱點加成這一項，假設一般傷害 100、弱點額外傷害 50，原有 150 點會變成 100 + 50 × 1.10 = 155 點，整次命中約增加 3.33%；注視的其他增傷另計。

- **恢復與暴擊算例**：最大韌性 100 時，每秒恢復 100 × 2.5% = 2.5 點，以缺少的韌性為上限；原有 5% 爆擊率變成 5% + 20% = 25%。

- **冷卻**：基礎冷卻 25 秒；注視生效期間暫停恢復，結束後才繼續倒數。

#### 繁中原文勘誤

- 原文將注視寫成「進入／離開注視範圍」，容易誤解成地面區域；同源英文與實作均指角色進入／結束注視狀態。

[詳細資料](psyker_combat_ability_stance.md) · [返回目錄](#talent-index)

---

<a id="psyker_shout_reduces_warp_charge_generation"></a>
### 平靜迸發(Becalming Eruption)

<img src="https://github.com/user-attachments/assets/b89da8f0-2d3d-4a87-bc92-43e2438e28c8" width="72" height="72" alt="平靜迸發天賦圖示">

- **觸發方式**：靈能尖嘯每命中一名敵人，就獲得一層降低反噬生成的效果，最多 25 層，持續 5 秒。

- **疊層算例**：每層將生成量乘以 0.99。原本增加 10 個反噬百分點，10 層後為 10 × 0.99¹⁰ ≈ 9.04 個百分點；25 層為 10 × 0.99²⁵ ≈ 7.78 個百分點，約減少 22.22%。

[詳細資料](psyker_shout_reduces_warp_charge_generation.md) · [返回目錄](#talent-index)

---

<a id="psyker_discharge_damage_debuff"></a>
### 亞空間爆發(Warp Rupture)

<img src="https://github.com/user-attachments/assets/8a145b7f-771a-42b6-a809-56650cd24f7e" width="72" height="72" alt="亞空間爆發天賦圖示">

- **運作方式**：靈能尖嘯命中的敵人，造成的傷害降低 10%，受到的傷害提高 10%，持續 8 秒。

- **傷害算例**：不計其他加成，敵人原本造成 100 點傷害會變成 100 × 0.9 = 90 點；原本承受 100 點則變成 100 × 1.1 = 110 點。

[詳細資料](psyker_discharge_damage_debuff.md) · [返回目錄](#talent-index)

---

<a id="psyker_warpfire_on_shout"></a>
### 蔓延火焰(Creeping Flames)

<img src="https://github.com/user-attachments/assets/65f7ef9b-5b0d-458e-bc7d-5aea8e948e14" width="72" height="72" alt="蔓延火焰天賦圖示">

- **運作方式**：依施放靈能尖嘯前的反噬值，對命中的敵人施加 1 至 6 層靈魂之火。沉睡中的惡魔宿主不會因此被點燃。

- **層數算例**：反噬比例 × 6，再無條件進位，最低 1 層、最高 6 層。例如 50% × 6 = 3 層；80% × 6 = 4.8，取 5 層；即使反噬為 0% 也會施加 1 層。

[詳細資料](psyker_warpfire_on_shout.md) · [返回目錄](#talent-index)

---

<a id="psyker_overcharge_weakspot_kill_bonuses"></a>
### 預知未來(Precognition)

<img src="https://github.com/user-attachments/assets/41b92eae-77a3-481e-af12-783845ce49c4" width="72" height="72" alt="預知未來天賦圖示">

- **運作方式**：占卜者的注視期間，每秒再獲得 1% 靈巧傷害加成，最多 30%，結束後保留 10 秒。弱點擊殺會替傷害與靈巧傷害各增加一層進度。

- **疊層算例**：注視累積 8 層時完成一次弱點擊殺，變成 8 + 1 = 9 層；不會因此延長注視的實際持續時間。

- **傷害算例**：靈巧加成作用於弱點或暴擊的額外傷害。只看 30% 靈巧加成，假設一般傷害 100、額外傷害 50，150 點會變成 100 + 50 × 1.30 = 165 點，整次命中增加 10%；注視的其他加成另計。

[詳細資料](psyker_overcharge_weakspot_kill_bonuses.md) · [返回目錄](#talent-index)

---

<a id="psyker_overcharge_increased_movement_speed"></a>
### 亞空間加速(Warp Speed)

<img src="https://github.com/user-attachments/assets/f9987bfc-f9d7-48d8-9431-8c361223c50e" width="72" height="72" alt="亞空間加速天賦圖示">

- **運作方式**：占卜者的注視生效期間，移動速度增加 20%；注視結束後不再提供此加成。

- **速度算例**：只看此效果，原本每秒移動 5 公尺，變成 5 × (1 + 20%) = 6 公尺。

[詳細資料](psyker_overcharge_increased_movement_speed.md) · [返回目錄](#talent-index)

---

<a id="psyker_2_tier_3_name_2"></a>
### 靈能學者光環(Psykinetic's Aura)

<img src="https://github.com/user-attachments/assets/547fa734-789a-404c-9c48-aa1671d3605c" width="72" height="72" alt="靈能學者光環天賦圖示">

- **觸發方式**：親自擊殺精英或專家敵人後，3 秒內每隔約 1 秒額外減少 0.5 秒戰鬥技能冷卻。再次觸發會重設效果時間，不會提高每次減少的數值。

- **冷卻算例**：若倒數原剩 20 秒，在正常恢復 1 秒並觸發一次額外恢復後，變成 20 − 1 − 0.5 = 18.5 秒。

- **完整恢復量**：正常逐幀更新且未中斷時，3 次額外恢復合計 0.5 × 3 = 1.5 秒，另加這段期間原本就會自然經過的冷卻時間。

[詳細資料](psyker_2_tier_3_name_2.md) · [返回目錄](#talent-index)

---

<a id="psyker_overcharge_reduced_warp_charge"></a>
### 現實錨點(Reality Anchor)

<img src="https://github.com/user-attachments/assets/123c7e4e-3844-4ff0-94c0-5cf7f7772b8f" width="72" height="72" alt="現實錨點天賦圖示">

- **運作方式**：占卜者的注視生效期間，反噬生成量減少 20%，平息相同反噬所需的時間縮短 30%。

- **生成算例**：原本增加 10 個反噬百分點，變成 10 × 0.8 = 8 個百分點；不會直接扣除已累積的反噬。

- **平息算例**：原本需要 10 秒的平息過程變成 10 × 0.7 = 7 秒。換算為每秒速率是 1 ÷ 0.7 ≈ 1.429 倍，約快 42.9%。

#### 繁中原文勘誤

- 「降低已生成的反噬」把生成量減少寫成扣除現有反噬；同源英文與實作指注視期間新產生的反噬變少。

[詳細資料](psyker_overcharge_reduced_warp_charge.md) · [返回目錄](#talent-index)

---

<a id="psyker_combat_ability_force_field"></a>
### 念力護盾(Telekine Shield)

<img src="https://github.com/user-attachments/assets/e328d953-886b-4527-9c23-e8bfc90ada6f" width="72" height="72" alt="念力護盾天賦圖示">

- **運作方式**：在身前展開一道靈能護盾，阻擋敵人的遠程攻擊，你與隊友仍可穿盾射擊。最長持續 17.5 秒，基礎冷卻 40 秒。

- **護盾耐久**：護盾可承受 20 次有效扣除耐久的命中。每次扣除後，0.33 秒內不會再次扣除；大量攻擊可能讓護盾提早消失。

- **耐久算例**：已發生 12 次有效扣除時，剩餘 20 − 12 = 8 次。此處計算的是護盾命中次數，與你的生命或韌性無關。

[詳細資料](psyker_combat_ability_force_field.md) · [返回目錄](#talent-index)

---

<a id="psyker_shield_extra_charge"></a>
### 強化護盾(Bolstered Shield)

<img src="https://github.com/user-attachments/assets/72b10287-7ce1-47a1-a57f-a88c56c51f9f" width="72" height="72" alt="強化護盾天賦圖示">

- **運作方式**：念力護盾增加一次充能，最多儲存 2 次。兩次使用共用冷卻進度，每次恢復一格。

- **冷卻算例**：兩次充能都耗盡後，40 秒恢復第一格，再等 40 秒恢復第二格，合計 40 × 2 = 80 秒。其他冷卻加成另計。

[詳細資料](psyker_shield_extra_charge.md) · [返回目錄](#talent-index)

---

<a id="psyker_boost_allies_in_sphere"></a>
### 庇護所(Sanctuary)

<img src="https://github.com/user-attachments/assets/57b73353-bc2c-4313-b488-cb9a1ac7c9f0" width="72" height="72" alt="庇護所天賦圖示">

- **運作方式**：搭配念力穹頂時，你與隊友待在球形護盾內，每秒恢復最大韌性的 10%。

- **消散效果**：護盾消散時，仍在其中的玩家獲得 50% 韌性減傷，持續 5 秒；提早離開不會獲得這次減傷。

- **恢復與減傷算例**：最大韌性 100 時，每秒恢復 100 × 10% = 10 點，3 秒最多恢復 30 點，以缺額為上限。減傷期間原本承受 40 點韌性傷害，變成 40 × 0.5 = 20 點。

[詳細資料](psyker_boost_allies_in_sphere.md) · [返回目錄](#talent-index)

---

<a id="psyker_sphere_shield"></a>
### 念力穹頂(Telekine Dome)

<img src="https://github.com/user-attachments/assets/60e6d4b2-0696-4215-8afd-8c9725d4801f" width="72" height="72" alt="念力穹頂天賦圖示">

- **運作方式**：念力護盾改為在施放位置周圍展開半徑約 6 公尺的球形屏障，最長持續 25 秒，基礎冷卻改為 60 秒。護盾仍可能因耐久耗盡提早消失。

- **時間比較**：相較原本護盾，持續時間增加 25 − 17.5 = 7.5 秒；冷卻增加 60 − 40 = 20 秒。耐久仍可承受 20 次有效扣除。

[詳細資料](psyker_sphere_shield.md) · [返回目錄](#talent-index)

---

<a id="psyker_shield_stun_passive"></a>
### 衰弱界線(Enervating Threshold)

<img src="https://github.com/user-attachments/assets/0cacb110-bf24-451f-ad19-f55ee7bd6191" width="72" height="72" alt="衰弱界線天賦圖示">

- **運作方式**：敵人穿越你的念力護盾時，有 20% 機率遭電擊。專家敵人與巨獸會必定觸發，但實際能否中斷動作仍受敵人抗性影響。

- **護盾消耗**：專家敵人觸發時也會損傷護盾，仍受護盾的 0.33 秒扣除間隔限制。

- **機率算例**：一般敵人每次有效穿越的機率為 20%；100 次穿越的期望觸發次數為 100 × 20% = 20 次，並非每五次保證觸發一次。

[詳細資料](psyker_shield_stun_passive.md) · [返回目錄](#talent-index)

---

<a id="psyker_overcharge_stance_infinite_casting"></a>
### 亞空間突破(Warp Unbound)

<img src="https://github.com/user-attachments/assets/810110f9-a360-4a69-8754-0e3502a0bef8" width="72" height="72" alt="亞空間突破天賦圖示">

- **運作方式**：占卜者的注視結束後，額外保留免於反噬超載的保護；反噬仍會照常累積。

- **持續時間**：10 秒離場效果加上 1.5 秒緩衝，共 10 + 1.5 = 11.5 秒。注視本身仍會在反噬達 100% 時結束。

[詳細資料](psyker_overcharge_stance_infinite_casting.md) · [返回目錄](#talent-index)

---


---

## 鑰石

<a id="psyker_passive_souls_from_elite_kills"></a>
### 亞空間虹吸(Warp Siphon)

<img src="https://github.com/user-attachments/assets/07eff6fd-5c1a-49f2-8a72-d689ec6bb42e" width="72" height="72" alt="亞空間虹吸天賦圖示">

- **取得與持續**：親自擊殺精英或專家敵人，獲得 1 層亞空間充能，最多 4 層，持續 25 秒。再次取得會重設整組倒數；到期每次失去一層，再重新倒數 25 秒。

- **傷害算例**：每層增加 4% 傷害。不計其他加成，4 層時 100 × (1 + 4% × 4) = 116 點；搭配亞空間電池達 6 層時則為 124 點。

- **冷卻算例**：施放戰鬥技能會消耗全部充能，每層恢復該能力一次使用所需冷卻的 7.5%。以 30 秒冷卻、4 層計算，立即縮短 30 × 7.5% × 4 = 9 秒，剩約 21 秒。

- **多次充能**：若能力能儲存多次使用次數，恢復量先補目前正在倒數的一格，超過一格所需的進度再往後補。

[詳細資料](psyker_passive_souls_from_elite_kills.md) · [返回目錄](#talent-index)

---

<a id="psyker_new_mark_passive"></a>
### 擾動命運(Disrupt Destiny)

<img src="https://github.com/user-attachments/assets/885fdda1-bcf2-4502-97e0-7eaead2392e0" width="72" height="72" alt="擾動命運天賦圖示">

- **標記與取得**：標記前方 40 公尺內、有視線且可被標記的敵人。親自擊殺目前標記的敵人，取得一層精準加成，最多 15 層。

- **每層效果**：一般傷害增加 1%、暴擊額外傷害增加 2%、弱點額外傷害增加 2.5%。15 層分別為 15%、30%、37.5%。

- **傷害算例**：只計一般增傷，100 × (1 + 15%) = 115 點。再看弱點這一項：假設同次命中已算入一般增傷後，基礎部分為 100、弱點額外部分為 50，加上 37.5% 弱點加成後為 100 + 50 × 1.375 = 168.75 點，相較這一階段原有 150 點增加 12.5%。武器的額外傷害比例不同，整次命中的增幅也不同。

- **恢復與移速**：擊殺標記目標後，2.5 秒內恢復最大韌性的 25%，移動速度提高 20%，持續 2.5 秒。最大韌性 100 時，總共恢復 25 點，相當於每秒 25 ÷ 2.5 = 10 點，以缺額為上限。

- **重新計時與衰減**：精準加成共用 5 秒倒數。新增層數，或已有層數時命中仍存活的標記目標或首領，都會重設倒數。到期只掉一層，再倒數 5 秒；例如 3 層且未再觸發重新計時，約在 5、10、15 秒依序降至 2、1、0 層。

[詳細資料](psyker_new_mark_passive.md) · [返回目錄](#talent-index)

---

<a id="psyker_empowered_ability"></a>
### 靈能強化(Empowered Psionics)

<img src="https://github.com/user-attachments/assets/d3625057-f314-491b-8a34-84789ec38342" width="72" height="72" alt="靈能強化天賦圖示">

- **取得與消耗**：擊殺敵人有 10% 機率獲得一層靈能強化，基礎最多存一層。每次強化閃擊消耗一層；懲戒在該次持續施放結束時扣除。

- **顱腦崩裂**：不產生反噬，傷害增加 50%，蓄力速度增加 50%。沒有其他增傷時，100 × 1.5 = 150 點；原本 2 秒蓄力變成 2 ÷ 1.5 ≈ 1.33 秒，約縮短 33.3%。

- **懲戒**：傷害增加 200%。沒有其他增傷時，100 × (1 + 200%) = 300 點。

- **靈能攻擊**：不產生反噬、不消耗投擲次數，並提高傷害與穿透能力；仍會消耗一層靈能強化。穿透容量由 2 提高至 4，是 4 ÷ 2 = 2 倍；實際能貫穿的敵人數量依敵人與命中條件而變。

- **機率算例**：每次皆有空位可儲存時，100 次擊殺的期望取得次數為 100 × 10% = 10 次；不是每十次擊殺保證觸發。

[詳細資料](psyker_empowered_ability.md) · [返回目錄](#talent-index)

---

<a id="psyker_reduced_warp_charge_cost_and_venting_speed"></a>
### 平心靜氣(Inner Tranquility)

<img src="https://github.com/user-attachments/assets/333bcafc-3c34-4b47-bb5b-658c9cd2b777" width="72" height="72" alt="平心靜氣天賦圖示">

- **運作方式**：每層亞空間充能降低反噬生成量 8%；4 層共降低 32%，搭配亞空間電池達 6 層時共降低 48%。

- **反噬算例**：原本增加 10 個反噬百分點，4 層時變成 10 × (1 − 8% × 4) = 6.8 個百分點；6 層時為 5.2 個百分點。其他生成修正另計。

[詳細資料](psyker_reduced_warp_charge_cost_and_venting_speed.md) · [返回目錄](#talent-index)

---

<a id="psyker_toughness_on_soul"></a>
### 吸精奪萃(Essence Harvest)

<img src="https://github.com/user-attachments/assets/00ae8b19-169d-4eec-94e2-89c3cf851d08" width="72" height="72" alt="吸精奪萃天賦圖示">

- **運作方式**：取得亞空間充能後，5 秒內恢復最大韌性的 30%。期間再次取得會重設 5 秒倒數，恢復速度不會疊加。

- **恢復算例**：最大韌性 100 時，每秒恢復 100 × 30% ÷ 5 = 6 點；完整持續 5 秒共 30 點。若只缺 12 點，實際最多補回 12 點。

[詳細資料](psyker_toughness_on_soul.md) · [返回目錄](#talent-index)

---

<a id="psyker_empowered_grenades_passive_improved"></a>
### 生物磁石(Bio-Lodestone)

<img src="https://github.com/user-attachments/assets/827d3ef0-dce8-4cb8-8af1-c5ad142d4ec1" width="72" height="72" alt="生物磁石天賦圖示">

- **運作方式**：擊殺敵人取得靈能強化的機率，由 10% 提高至 15%；儲存層數上限不變。

- **機率算例**：每次都有空位可儲存時，100 次擊殺的期望取得次數由 100 × 10% = 10 次，提高至 100 × 15% = 15 次。隨機結果不保證剛好等於期望值。

[詳細資料](psyker_empowered_grenades_passive_improved.md) · [返回目錄](#talent-index)

---

<a id="psyker_empowered_chain_lightnings_replenish_toughness_to_allies"></a>
### 吸血閃電(Psychic Leeching)

<img src="https://github.com/user-attachments/assets/38c99293-d836-4a4e-91fb-1f6a65a848f8" width="72" height="72" alt="吸血閃電天賦圖示">

- **觸發方式**：持有靈能強化時，施放強化的閃擊技能，為你與協同範圍內的隊友各恢復最大韌性的 20%。懲戒於開始施放時恢復，靈能攻擊於投出時恢復，顱腦崩裂於攻擊結算時恢復。

- **恢復算例**：最大韌性 100 的玩家恢復 100 × 20% = 20 點；最大韌性 150 的玩家恢復 30 點，各自以缺額為上限。一次懲戒命中更多敵人不會增加這次恢復量。

[詳細資料](psyker_empowered_chain_lightnings_replenish_toughness_to_allies.md) · [返回目錄](#talent-index)

---

<a id="psyker_empowered_ability_on_elite_kills"></a>
### 吞靈強擊(Overpowering Souls)

<img src="https://github.com/user-attachments/assets/6312d53d-fec2-44c3-b04e-778d2e74e232" width="72" height="72" alt="吞靈強擊天賦圖示">

- **觸發方式**：擊殺精英敵人時，必定取得 1 層靈能強化。專家敵人與一般敵人仍沿用原本的取得機率。

- **層數算例**：原有 0 層時擊殺一名精英，變成 1 層；基礎上限為 1 層，已滿層時再擊殺不會變成 2 層。搭配充能完畢後，上限提高至 3 層。

[詳細資料](psyker_empowered_ability_on_elite_kills.md) · [返回目錄](#talent-index)

---

<a id="psyker_mark_increased_max_stacks"></a>
### 完美主義(Perfectionism)

<img src="https://github.com/user-attachments/assets/d2ef8713-7c0b-4dec-b13a-7f9e6a294435" width="72" height="72" alt="完美主義天賦圖示">

- **運作方式**：擾動命運的精準加成上限，由 15 層提高至 25 層；每層效果及每 5 秒衰減一層的規則不變。

- **傷害算例**：25 層提供 25% 一般傷害、50% 暴擊額外傷害與 62.5% 弱點額外傷害。只計一般傷害，100 × (1 + 25%) = 125 點；弱點與暴擊的額外部分需依武器另外計算。

- **選擇限制**：與「持久影響」只能擇一選取。

[詳細資料](psyker_mark_increased_max_stacks.md) · [返回目錄](#talent-index)

---

<a id="psyker_mark_kills_can_vent"></a>
### 盜竊天命(Purloin Providence)

<img src="https://github.com/user-attachments/assets/06e543d8-85dd-455b-8ac2-3f9f29b03cf1" width="72" height="72" alt="盜竊天命天賦圖示">

- **觸發方式**：親自擊殺擾動命運目前標記的敵人，立即平息 5 個反噬百分點。

- **反噬算例**：原有 60% 反噬時，變成 60% − 5 個百分點 = 55%；原有 3% 時則降至 0%。

[詳細資料](psyker_mark_kills_can_vent.md) · [返回目錄](#talent-index)

---

<a id="psyker_mark_increased_duration"></a>
### 持久影響(Lingering Influence)

<img src="https://github.com/user-attachments/assets/d2b37d6f-6054-462c-ba12-5583c59bceb8" width="72" height="72" alt="持久影響天賦圖示">

- **運作方式**：擾動命運的精準加成，每次衰減一層前的倒數由 5 秒延長至 10 秒。新增層數或命中合格目標仍可重設倒數。

- **時間算例**：原有 3 層且之後都沒有重新計時，會在約 10、20、30 秒依序減至 2、1、0 層；原本約需 5 × 3 = 15 秒，現在約需 10 × 3 = 30 秒。

- **選擇限制**：與「完美主義」只能擇一選取。

[詳細資料](psyker_mark_increased_duration.md) · [返回目錄](#talent-index)

---

<a id="psyker_empowered_grenades_increased_max_stacks"></a>
### 充能完畢(Charged Up)

<img src="https://github.com/user-attachments/assets/1918d789-dd64-401d-b985-c99915053691" width="72" height="72" alt="充能完畢天賦圖示">

- **運作方式**：靈能強化的儲存上限由 1 層提高至 3 層。每次強化閃擊仍消耗一層；儲存更多層不會提高單次強化倍率。

- **層數算例**：已有 2 層時再取得一層，2 + 1 = 3 層；已有 3 層時再次取得仍維持 3 層。

[詳細資料](psyker_empowered_grenades_increased_max_stacks.md) · [返回目錄](#talent-index)

---

<a id="psyker_warpfire_generate_souls"></a>
### 涅槃(In Fire Reborn)

<img src="https://github.com/user-attachments/assets/f42fce6a-aab7-4622-a8b9-bd171fba4b33" width="72" height="72" alt="涅槃天賦圖示">

- **觸發方式**：敵人死亡時仍帶有靈魂之火，或由你的靈魂之火造成致命傷害時，有 10% 機率獲得一層亞空間充能。前者不要求由你補上最後一擊。

- **機率算例**：不受充能上限截斷時，100 次符合條件的死亡事件，期望取得 100 × 10% = 10 層；實際結果依隨機判定而異。

- **選擇限制**：與「靈能吸血鬼」只能擇一選取。

[詳細資料](psyker_warpfire_generate_souls.md) · [返回目錄](#talent-index)

---

<a id="psyker_aura_souls_on_kill"></a>
### 靈能吸血鬼(Psychic Vampire)

<img src="https://github.com/user-attachments/assets/36248d6b-7838-4004-86e5-645956cb8392" width="72" height="72" alt="靈能吸血鬼天賦圖示">

- **觸發方式**：你或協同範圍內的隊友擊殺敵人時，有 4% 機率讓你獲得一層亞空間充能。隊友不會因此取得你的充能。

- **機率算例**：每次皆有空位可儲存時，100 次符合條件的擊殺，期望取得 100 × 4% = 4 層；不是每 25 次擊殺保證取得一層。

- **選擇限制**：與「涅槃」只能擇一選取。

[詳細資料](psyker_aura_souls_on_kill.md) · [返回目錄](#talent-index)

---

<a id="psyker_increased_max_souls"></a>
### 亞空間電池(Warp Battery)

<img src="https://github.com/user-attachments/assets/47c3ad89-c6a0-4c8c-a452-b8af3e859043" width="72" height="72" alt="亞空間電池天賦圖示">

- **運作方式**：亞空間充能上限由 4 層提高至 6 層，每層的傷害與冷卻效果不變。

- **傷害算例**：6 層共增加 6 × 4% = 24% 傷害；沒有其他加成時，100 × 1.24 = 124 點。相較原本 4 層的 116 點，增加 8 點。

- **冷卻算例**：6 層恢復一次能力冷卻的 6 × 7.5% = 45%；以 30 秒計算，恢復 13.5 秒。

[詳細資料](psyker_increased_max_souls.md) · [返回目錄](#talent-index)

---

<a id="psyker_mark_weakspot_kills"></a>
### 殘忍命運(Cruel Fortune)

<img src="https://github.com/user-attachments/assets/a3deac9c-bddd-441f-a916-e41eecf9b23e" width="72" height="72" alt="殘忍命運天賦圖示">

- **觸發方式**：以弱點攻擊擊殺擾動命運目前標記的敵人時，除了原本一層，再獲得兩層精準加成，共三層。擊殺未標記的敵人不會觸發。

- **層數算例**：原有 4 層時，4 + 3 = 7 層；原有 14 層、上限 15 層時，則停在 15 層。

[詳細資料](psyker_mark_weakspot_kills.md) · [返回目錄](#talent-index)

---


---

## 技能

<a id="psyker_toughness_on_warp_kill"></a>
### 靈魂竊賊(Soulstealer)

<img src="https://github.com/user-attachments/assets/800b3bd1-a9a6-48ba-961c-66e12b256f37" width="72" height="72" alt="靈魂竊賊天賦圖示">

- **觸發方式**：以亞空間攻擊擊殺敵人，恢復 7.5% 最大韌性。

- **恢復算例**：最大韌性 100、沒有其他恢復加成時，每次恢復 100 × 7.5% = 7.5 點；若目前為 96，實際補回 100 − 96 = 4 點。

[詳細資料](psyker_toughness_on_warp_kill.md) · [返回目錄](#talent-index)

---

<a id="psyker_toughness_on_vent"></a>
### 心如止水(Quietude)

<img src="https://github.com/user-attachments/assets/12e587e5-b69a-49cd-8d0f-a8280b832197" width="72" height="72" alt="心如止水天賦圖示">

- **運作方式**：反噬上升或下降都會恢復韌性。每變動 10 個百分點，恢復 4% 最大韌性，依實際變動量計算。

- **恢復算例**：最大韌性 100、無其他恢復加成，反噬從 40% 升到 60%，恢復 100 × 20% × 0.4 = 8 點；之後從 60% 降到 50%，再恢復 100 × 10% × 0.4 = 4 點。韌性滿額時不會超補。

[詳細資料](psyker_toughness_on_vent.md) · [返回目錄](#talent-index)

---

<a id="psyker_toughness_on_melee"></a>
### 亞空間耗費(Warp Expenditure)

<img src="https://github.com/user-attachments/assets/cb5dcadd-924f-442d-a21f-cb8f873b182d" width="72" height="72" alt="亞空間耗費天賦圖示">

- **普通命中**：近戰攻擊命中第一個敵人時，恢復 2.5% 最大韌性。

- **弱點擊殺**：近戰命中弱點並擊殺敵人時，改為在 3 秒內恢復 15% 最大韌性；這次擊殺不再額外給予前述 2.5%。再次觸發會重設 3 秒，恢復速度不疊加。

- **恢復算例**：最大韌性 100、沒有其他加成且缺額足夠，普通命中恢復 2.5 點；弱點擊殺每秒恢復 100 × 15% ÷ 3 = 5 點，持續 3 秒共 15 點。

[詳細資料](psyker_toughness_on_melee.md) · [返回目錄](#talent-index)

---

<a id="psyker_crits_regen_toughness_movement_speed"></a>
### 堅毅(Mettle)

<img src="https://github.com/user-attachments/assets/53013aa9-f833-431c-8b85-3e548dbc318c" width="72" height="72" alt="堅毅天賦圖示">

- **觸發方式**：暴擊命中後，4 秒內恢復 10% 最大韌性，並增加 5% 移動速度。

- **疊層與重新計時**：移動速度最多 3 層，合計增加 15%；再次觸發重設 4 秒。韌性維持每秒恢復 2.5% 最大值，不隨移動速度層數倍增。

- **恢復算例**：最大韌性 100、缺額足夠且無其他加成，持續 4 秒恢復 100 × 10% = 10 點；疊到 3 層仍每秒恢復 2.5 點，移動倍率則為 1 + 3 × 5% = 1.15。

[詳細資料](psyker_crits_regen_toughness_movement_speed.md) · [返回目錄](#talent-index)

---

<a id="psyker_elite_kills_add_warpfire"></a>
### 險惡燃燒(Perilous Combustion)

<img src="https://github.com/user-attachments/assets/6cc7512d-8e6f-4261-88f3-c95089950934" width="72" height="72" alt="險惡燃燒天賦圖示">

- **觸發方式**：擊殺精英或專家敵人，對死者周圍 4 公尺內的敵人施加 2 層靈魂之火。

- **層數算例**：附近敵人原本沒有靈魂之火時，獲得 2 層；原本有 3 層時，變成 3 + 2 = 5 層。傷害會隨層數非線性成長，5 層不是 1 層傷害的 5 倍。

- **例外**：沉睡中的惡魔宿主不會因此被點燃。

[詳細資料](psyker_elite_kills_add_warpfire.md) · [返回目錄](#talent-index)

---

<a id="psyker_chance_to_vent_on_kill"></a>
### 戰鬥冥想(Battle Meditation)

<img src="https://github.com/user-attachments/assets/69bdf081-b37e-479b-a157-f6e047efcfda" width="72" height="72" alt="戰鬥冥想天賦圖示">

- **運作方式**：反噬產生量減少 10%；每次擊殺有 10% 機率降低 10 個百分點反噬。

- **反噬算例**：原本產生 20 個百分點反噬的攻擊改為 20 × 0.9 = 18 個百分點。觸發擊殺效果時，50% 反噬降到 40%；原本只有 6% 時降到 0%。

- **觸發機率**：10% 是每次擊殺的機率，不是每擊殺 10 名敵人必定觸發一次。

[詳細資料](psyker_chance_to_vent_on_kill.md) · [返回目錄](#talent-index)

---

<a id="psyker_crits_empower_next_attack"></a>
### 完美時機(Perfect Timing)

<img src="https://github.com/user-attachments/assets/3c19e5ea-ccab-46a3-9763-c8d4075c6332" width="72" height="72" alt="完美時機天賦圖示">

- **運作方式**：暴擊命中後獲得 1 層增傷，每層增加 3% 傷害，最多 5 層。

- **疊層與重新計時**：持續 10 秒，再次觸發會重設持續時間；滿層增加 15% 傷害。

- **傷害算例**：只比較此增傷階段，其餘倍率固定為 1。基準 100 點、無其他加成時，100 × (1 + 15%) = 115 點；原有 25% 同階段加成時，從 125 變成 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](psyker_crits_empower_next_attack.md) · [返回目錄](#talent-index)

---

<a id="psyker_spread_warpfire_on_kill"></a>
### 野火(Wildfire)

<img src="https://github.com/user-attachments/assets/1e6189fe-4a6e-4fda-bbe9-e2a38c75ff2a" width="72" height="72" alt="野火天賦圖示">

- **觸發方式**：受你的靈魂之火影響的敵人死亡時，將最多 4 層分配給周圍 5 公尺內的敵人；不要求最後一擊由火焰造成。

- **分配方式**：可分配總數不超過死者當時層數，每名目標也不會因這次傳播超過這個層數上限。

- **層數算例**：死者有 6 層、附近兩名有效敵人原本都為 0 層時，可分配總数為 min(6,4) = 4，輪流各給 1 層，結果各得 2 層。只有一名有效目標時可得 4 層。

#### 繁中原文勘誤

- 繁中「被你的靈魂之火灼燒而亡」把條件縮成火焰擊殺；英文及執行條件是敵人死亡時仍受你的靈魂之火影響，其他攻擊完成擊殺也可觸發。

[詳細資料](psyker_spread_warpfire_on_kill.md) · [返回目錄](#talent-index)

---

<a id="psyker_venting_improvements"></a>
### 思維活躍(Mind in Motion)

<img src="https://github.com/user-attachments/assets/86748037-d25a-449c-881a-b80060374012" width="72" height="72" alt="思維活躍天賦圖示">

- **運作方式**：移除平息反噬及裝填動作造成的移動減速，並增加 5% 移動速度。其他來源的緩速仍各自結算。

- **移速算例**：無其他修正、該階段原本每秒移動 5 公尺時，5 × (1 + 5%) = 5.25 公尺。

[詳細資料](psyker_venting_improvements.md) · [返回目錄](#talent-index)

---

<a id="psyker_kills_stack_other_weapon_damage"></a>
### 惡意攻勢(Malefic Momentum)

<img src="https://github.com/user-attachments/assets/cc72c2ff-3d22-42e0-be1d-69a9f4d7cb22" width="72" height="72" alt="惡意攻勢天賦圖示">

- **運作方式**：以非亞空間傷害擊殺，獲得 5% 亞空間傷害加成；以亞空間傷害擊殺，獲得 5% 非亞空間傷害加成。

- **疊層與重新計時**：兩組加成各自最多 5 層、持續 10 秒，再次獲得同組效果便重設該組時間。每組滿層增加 25%。

- **傷害算例**：只比較此增傷階段，其餘倍率固定為 1。基準 100 點、無其他加成時，100 × (1 + 25%) = 125 點；原有 25% 同階段加成時，從 125 變成 100 × (1 + 25% + 25%) = 150 點。

[詳細資料](psyker_kills_stack_other_weapon_damage.md) · [返回目錄](#talent-index)

---

<a id="psyker_warp_charge_reduces_toughness_damage_taken"></a>
### 亞空間強化(One with the Warp)

<img src="https://github.com/user-attachments/assets/68726dca-2cf0-40d6-bfe6-eccecc659446" width="72" height="72" alt="亞空間強化天賦圖示">

- **運作方式**：反噬越高，韌性減傷越強。反噬 0% 時減少 10%，100% 時減少 33%，中間等比例變化。

- **減傷算例**：反噬 50% 時，減傷為 10% + (33% − 10%) × 50% = 21.5%。原本 100 點韌性傷害變成 100 × 0.785 = 78.5 點；另有獨立 20% 減傷時為 78.5 × 0.8 = 62.8 點。此項不降低生命傷害。

[詳細資料](psyker_warp_charge_reduces_toughness_damage_taken.md) · [返回目錄](#talent-index)

---

<a id="psyker_improved_dodge"></a>
### 看破(Anticipation)

<img src="https://github.com/user-attachments/assets/80b2261c-4df6-4531-b9c1-bf67fbbbdcee" width="72" height="72" alt="看破天賦圖示">

- **運作方式**：有效閃避次數增加 1 次，閃避動作結束後的保護延續時間增加 50%。

- **算例**：武器原本可連續有效閃避 3 次，變成 3 + 1 = 4 次。若延續時間原本為 0.2 秒，則為 0.2 × 1.5 = 0.3 秒；不代表整個閃避動作時間增加 50%。

#### 繁中原文勘誤

- 繁中「有效閃避次數增加至」把增加量寫成新的總數；英文是增加指定次數，實際為原有次數再加 1，不是總共只能閃避 1 次。

[詳細資料](psyker_improved_dodge.md) · [返回目錄](#talent-index)

---

<a id="psyker_dodge_after_crits"></a>
### 反射閃避(Empathic Evasion)

<img src="https://github.com/user-attachments/assets/946f549a-ed56-4711-aee8-39ce35a0a6b1" width="72" height="72" alt="反射閃避天賦圖示">

- **運作方式**：暴擊命中後，1 秒內對遠程攻擊視為正在閃避；再次觸發會重設時間。

- **時間算例**：第 0 秒觸發，效果持續到約第 1 秒；第 0.6 秒再觸發，延續到約第 1.6 秒。

- **適用範圍**：這是遠程閃避判定，不提供近戰無敵，也不能把所有爆炸、地面火焰都當成可免疫的遠程命中。

[詳細資料](psyker_dodge_after_crits.md) · [返回目錄](#talent-index)

---

<a id="psyker_increased_vent_speed"></a>
### 穩固(Solidity)

<img src="https://github.com/user-attachments/assets/86582600-a30d-4e5a-b87b-ae33b2e78746" width="72" height="72" alt="穩固天賦圖示">

- **運作方式**：主動平息反噬所需時間縮短 30%。

- **時間算例**：相同武器、起始反噬與其他條件下，原本需 4 秒的平息過程約變成 4 × 0.7 = 2.8 秒。換算每秒處理速度為 1 ÷ 0.7 ≈ 1.429 倍，約快 42.9%。

[詳細資料](psyker_increased_vent_speed.md) · [返回目錄](#talent-index)

---

<a id="psyker_damage_based_on_warp_charge"></a>
### 亞空間騎士(Warp Rider)

<img src="https://github.com/user-attachments/assets/8f79e11c-ea7c-4e52-957b-007bd85bcf1b" width="72" height="72" alt="亞空間騎士天賦圖示">

- **運作方式**：傷害加成隨目前反噬等比例提高。反噬 0%／50%／100% 時，分別增加 0%／10%／20% 傷害。

- **傷害算例**：反噬 50%、該階段基準傷害 100、其他倍率為 1 時，100 × (1 + 20% × 50%) = 110 點。若原有 25% 同階段加成，從 125 變成 135 點。

[詳細資料](psyker_damage_based_on_warp_charge.md) · [返回目錄](#talent-index)

---

<a id="psyker_guaranteed_crit_on_multiple_weakspot_hits"></a>
### 精確瞄準(True Aim)

<img src="https://github.com/user-attachments/assets/4b242d12-87d5-44a8-a2aa-4c1a0f3a2376" width="72" height="72" alt="精確瞄準天賦圖示">

- **運作方式**：累積 5 次造成傷害的有效弱點命中後，下一次遠程攻擊必定暴擊，消耗這組累積。

- **累積限制**：同一發投射物重複命中，以及一次攻擊順劈到的後續敵人，不能一律當成額外一次累積。

- **算例**：從 0 層開始，五次各自有效的弱點命中為 1 → 2 → 3 → 4 → 5 層；之後觸發的遠程暴擊消耗這組效果。暴擊傷害仍依武器、部位與目標計算，不是固定雙倍。

[詳細資料](psyker_guaranteed_crit_on_multiple_weakspot_hits.md) · [返回目錄](#talent-index)

---

<a id="psyker_coherency_aura_size_increase"></a>
### 傀儡師(Puppet Master)

<img src="https://github.com/user-attachments/assets/1561e519-2633-4a6f-af9f-fffe6a6c8a03" width="72" height="72" alt="傀儡師天賦圖示">

- **運作方式**：協同範圍半徑增加 75%，讓更遠的隊友也能維持協同。

- **範圍算例**：其他修正不變，原半徑 8 公尺變成 8 × 1.75 = 14 公尺。增加的是半徑；若只比較平面圓形面積，面積倍率為 1.75² = 3.0625。

#### 繁中原文勘誤

- 繁中「光環範圍變為{radius_modifier}倍」混用倍率與增加量；實際效果是半徑增加 75%，也就是原本的 1.75 倍。

[詳細資料](psyker_coherency_aura_size_increase.md) · [返回目錄](#talent-index)

---

<a id="psyker_block_costs_warp_charge"></a>
### 動能偏斜(Kinetic Deflection)

<img src="https://github.com/user-attachments/assets/e56e3649-507c-4ebb-94fc-58f7eff77aee" width="72" height="72" alt="動能偏斜天賦圖示">

- **運作方式**：反噬低於 97% 時，格擋優先增加反噬；換算比例為原耐力消耗占最大耐力的 25%。達到 97% 後，剩餘格擋消耗改由耐力支付。

- **格擋算例**：最大耐力 4 點、一次格擋原需 2 點，沒有其他反噬修正時，增加 2 ÷ 4 × 25% = 12.5 個百分點反噬。原為 50% 時變成 62.5%，此次不耗耐力。

- **接近上限**：同一格擋若從 90% 開始，只能接收 7 個百分點反噬；剩餘 12.5 − 7 = 5.5 個百分點換回 5.5% ÷ 25% × 4 = 0.88 點耐力。

[詳細資料](psyker_block_costs_warp_charge.md) · [返回目錄](#talent-index)

---

<a id="base_toughness_node_buff_medium_5"></a>
### 韌性增幅(Toughness Boost)

<img src="https://github.com/user-attachments/assets/3d86850d-c891-443c-8f80-2f01ad34bdff" width="72" height="72" alt="韌性增幅天賦圖示">

- **運作方式**：最大韌性增加 15 點。

- **韌性算例**：沒有其他修正時，最大韌性 100 變成 100 + 15 = 115 點；選取另一個同效果節點後為 130 點。這是增加最大值，不是持續恢復韌性。

[詳細資料](base_toughness_node_buff_medium_5.md) · [返回目錄](#talent-index)

---

<a id="base_toughness_node_buff_medium_4"></a>
### 韌性增幅(Toughness Boost)

<img src="https://github.com/user-attachments/assets/92db3e61-eb2d-4af5-b9a7-3a1bab73234a" width="72" height="72" alt="韌性增幅天賦圖示">

- **運作方式**：最大韌性增加 15 點。

- **韌性算例**：沒有其他修正時，最大韌性 100 變成 100 + 15 = 115 點；選取另一個同效果節點後為 130 點。這是增加最大值，不是持續恢復韌性。

[詳細資料](base_toughness_node_buff_medium_4.md) · [返回目錄](#talent-index)

---

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>
### 韌性減傷(Toughness Damage Reduction)

<img src="https://github.com/user-attachments/assets/57a54ed7-4f34-449f-9f2d-eb401a97b51a" width="72" height="72" alt="韌性減傷天賦圖示">

- **運作方式**：韌性傷害在此減傷階段減少 10%；不降低生命傷害。

- **減傷算例**：原本 100 點韌性傷害、此階段無其他減傷時，100 × (1 − 10%) = 90 點。若已有 5% 同階段減傷，則為 100 × (1 − 5% − 10%) = 85 點；其他獨立乘算減傷再另外套用。

[詳細資料](base_toughness_damage_reduction_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="psyker_melee_attack_speed"></a>
### 迅雷之勢(Lightning Speed)

<img src="https://github.com/user-attachments/assets/ac3d53fd-1b36-40d7-8ee1-275804b29c63" width="72" height="72" alt="迅雷之勢天賦圖示">

- **運作方式**：近戰攻擊速度增加 10%。

- **時間算例**：只比較受攻速影響的動作區段，原本 1 秒且沒有其他攻速加成時，變成 1 ÷ 1.1 ≈ 0.909 秒；不等於整個連段固定縮短 10%。

[詳細資料](psyker_melee_attack_speed.md) · [返回目錄](#talent-index)

---

<a id="psyker_cleave_from_peril"></a>
### 亞空間分裂(Warp Splitting)

<img src="https://github.com/user-attachments/assets/c8b43c74-3790-440f-8610-db321e11da83" width="72" height="72" alt="亞空間分裂天賦圖示">

- **運作方式**：反噬越高，攻擊能穿過的敵人總質量越多；反噬 50% 時增加 50%，100% 時增加 100%。

- **順劈算例**：原本傷害順劈容量為 4 個質量單位、反噬 50%、無其他加成時，4 × (1 + 50%) = 6。這不代表單一敵人的傷害增加 50%，也不能直接換算成多打固定幾名敵人。

#### 繁中原文勘誤

- 繁中「順劈攻擊傷害」把順劈能力寫成傷害增幅；英文是 Cleave，實際提高能穿過的敵人質量上限，不是直接提高每次命中的傷害。

[詳細資料](psyker_cleave_from_peril.md) · [返回目錄](#talent-index)

---

<a id="psyker_killing_enemy_with_warpfire_boosts"></a>
### 汲魂者(Souldrinker)

<img src="https://github.com/user-attachments/assets/444fd0d1-2a66-48f9-b841-f7bf1bcc6ccf" width="72" height="72" alt="汲魂者天賦圖示">

- **觸發方式**：受靈魂之火影響的敵人死亡，或你以靈魂之火擊殺敵人後，5 秒內恢復 15% 最大韌性，爆擊率增加 5 個百分點。

- **重新計時方式**：再次觸發會重設 5 秒，恢復速度與爆擊率不累加。

- **恢復與機率算例**：最大韌性 100、缺額足夠且沒有其他修正時，每秒恢復 100 × 15% ÷ 5 = 3 點；原本 10% 爆擊率變成 10% + 5% = 15%。

[詳細資料](psyker_killing_enemy_with_warpfire_boosts.md) · [返回目錄](#talent-index)

---

<a id="psyker_melee_weaving"></a>
### 骨折後遺症(By Crack of Bone)

<img src="https://github.com/user-attachments/assets/efceab94-6c34-43bc-a8ed-6d06fbf269b1" width="72" height="72" alt="骨折後遺症天賦圖示">

- **觸發方式**：以近戰攻擊命中弱點並擊殺敵人，降低 10 個百分點反噬；之後 4 秒內，反噬產生量減少 20%。再次觸發會重新計時。

- **反噬算例**：反噬 60% 時觸發，降到 50%；期間原本產生 20 個百分點的攻擊，改為 20 × 0.8 = 16 個百分點。

[詳細資料](psyker_melee_weaving.md) · [返回目錄](#talent-index)

---

<a id="psyker_damage_vs_ogryns_and_monsters"></a>
### 脆弱心智(Vulnerable Minds)

<img src="https://github.com/user-attachments/assets/f3235e60-41ff-4e15-81eb-172af5ec1f2e" width="72" height="72" alt="脆弱心智天賦圖示">

- **運作方式**：對歐格林與巨獸敵人的傷害增加 20%。

- **傷害算例**：只比較此增傷階段，其餘倍率固定為 1。基準 100 點、無其他加成時，100 × (1 + 20%) = 120 點；原有 25% 同階段加成時，從 125 變成 100 × (1 + 25% + 20%) = 145 點。

[詳細資料](psyker_damage_vs_ogryns_and_monsters.md) · [返回目錄](#talent-index)

---

<a id="psyker_increased_warp_damage"></a>
### 聚焦次元(Focused Warp)

<img src="https://github.com/user-attachments/assets/eeeb7b3b-f3bc-4509-b50f-edc7787cb0e7" width="72" height="72" alt="聚焦次元天賦圖示">

- **運作方式**：亞空間傷害增加 15%。適用與否取決於攻擊的傷害類型，不是看武器名稱。

- **傷害算例**：只比較此增傷階段，其餘倍率固定為 1。基準 100 點、無其他加成時，100 × (1 + 15%) = 115 點；原有 25% 同階段加成時，從 125 變成 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](psyker_increased_warp_damage.md) · [返回目錄](#talent-index)

---

<a id="psyker_weapon_attacks_peril_equilibrium"></a>
### 危險平衡(Peril Equilibrium)

<img src="https://github.com/user-attachments/assets/c84a6cc0-5f99-4eee-a394-9b234a1fa5dd" width="72" height="72" alt="危險平衡天賦圖示">

- **運作方式**：以非亞空間的近戰或遠程攻擊命中並造成傷害，每次增加 2 個百分點反噬，最多加到 75%。已達 75% 時不再增加，也不會把更高的反噬往下降。

- **反噬算例**：反噬 70% 時連續觸發三次，70% → 72% → 74% → 75%；原本 90% 時仍為 90%。

[詳細資料](psyker_weapon_attacks_peril_equilibrium.md) · [返回目錄](#talent-index)

---

<a id="psyker_reload_speed_warp_charge"></a>
### 武器在手，信心我有。(Surety of Arms)

<img src="https://github.com/user-attachments/assets/5bac250d-4cc2-48b2-9832-8408652cec12" width="72" height="72" alt="武器在手，信心我有。天賦圖示">

- **運作方式**：反噬不高於 80% 時，裝填速度增加 30%。裝填完成時若仍符合門檻，依補回的彈匣比例產生反噬。

- **裝填算例**：僅比較受裝填速度影響的區段，原需 3 秒，變成 3 ÷ 1.3 ≈ 2.31 秒。

- **反噬算例**：彈匣容量 40 發、補回 20 發、無其他反噬修正時，增加 20 ÷ 40 × 15% = 7.5 個百分點反噬；補回整個彈匣才增加 15 個百分點。

[詳細資料](psyker_reload_speed_warp_charge.md) · [返回目錄](#talent-index)

---

<a id="psyker_alternative_peril_explosion"></a>
### 結晶意志(Crystalline Will)

<img src="https://github.com/user-attachments/assets/6b51b11f-eed5-45f3-b539-6b4502778099" width="72" height="72" alt="結晶意志天賦圖示">

- **爆炸效果**：反噬爆炸傷害增加 100%、半徑增加 25%，並改變爆炸後的生存代價。

- **傷痕代價**：爆炸後通常移除一格傷痕；只剩一格時會死亡。若這次爆炸擊殺精英敵人，免除該次傷痕代價。

- **傷害與範圍算例**：只比較這兩項修正，原本 100 點爆炸傷害變成 100 × 2 = 200 點；原爆炸半徑 10 公尺變成 10 × 1.25 = 12.5 公尺。實際傷害仍受距離衰減與敵人護甲影響。

[詳細資料](psyker_alternative_peril_explosion.md) · [返回目錄](#talent-index)

---

<a id="psyker_force_staff_bonus"></a>
### 靈能引導(Channeled Force)

<img src="https://github.com/user-attachments/assets/a3ca9930-1aef-4718-9463-1b5da02a5b6b" width="72" height="72" alt="靈能引導天賦圖示">

- **交替攻擊**：法杖蓄力超過 95% 並結束蓄力動作後，主要攻擊傷害增加 20%，持續 5 秒；完成主要攻擊動作後，次要攻擊傷害增加 10%，持續 5 秒。

- **重新計時方式**：兩種加成各自計時，可以同時存在；重複觸發重設對應的 5 秒倒數，不累加同類層數。

- **傷害算例**：只比較各自增傷階段、原傷害均為 100 且無其他加成時，主要攻擊為 100 × 1.2 = 120 點，次要攻擊為 100 × 1.1 = 110 點。兩項作用於不同攻擊，不能合成單次 30% 增傷。

[詳細資料](psyker_force_staff_bonus.md) · [返回目錄](#talent-index)

---

<a id="psyker_force_staff_quick_attack_bonus"></a>
### 亞空間震波(Empyric Shock)

<img src="https://github.com/user-attachments/assets/f556046f-b193-4776-963d-798307d2c36a" width="72" height="72" alt="亞空間震波天賦圖示">

- **運作方式**：力場法杖主要攻擊命中敵人，使該敵人受到的亞空間傷害每層增加 6%，各層相乘。你與隊友的亞空間攻擊都能受益。

- **疊層與重新計時**：最多 5 層，持續 10 秒；再次命中增加層數並重設時間，滿層仍可重新計時。

- **傷害算例**：目標原本受到 100 點亞空間傷害，1 層為 100 × 1.06 = 106 點；5 層為 100 × 1.06⁵ ≈ 133.82 點，增加約 33.82%。

[詳細資料](psyker_force_staff_quick_attack_bonus.md) · [返回目錄](#talent-index)

---

<a id="psyker_damage_to_peril_conversion"></a>
### 如夢似幻(Just a Dream)

<img src="https://github.com/user-attachments/assets/b3086f22-3f24-417f-aaba-f59714897616" width="72" height="72" alt="如夢似幻天賦圖示">

- **運作方式**：反噬低於 97% 時，受到的傷害減少 25%；同時依該次生命及韌性傷害合計增加反噬，每 1 點傷害增加 0.25 個百分點，最多加到 97%。

- **減傷算例**：只比較此減傷階段，原本 100 點傷害變成 100 × 0.75 = 75 點。

- **反噬算例**：若該次回報的生命與韌性傷害合計 40 點、無其他反噬修正，增加 40 × 0.25 = 10 個百分點反噬；原為 50% 時到 60%，原為 92% 時最多到 97%。

[詳細資料](psyker_damage_to_peril_conversion.md) · [返回目錄](#talent-index)

---

<a id="psyker_damage_resistance_stun_immunity"></a>
### 無形專注(Immaterial Focus)

<img src="https://github.com/user-attachments/assets/288f8a4c-fee3-4e56-8e0b-b2419e2a115b" width="72" height="72" alt="無形專注天賦圖示">

- **運作方式**：受到的傷害減少 10%。反噬達 97% 時免疫眩暈；降到 97% 以下後，免疫效果再持續 4 秒。

- **減傷算例**：只比較此減傷階段，100 點傷害變成 100 × 0.9 = 90 點。若另有獨立 20% 減傷，則為 100 × 0.8 × 0.9 = 72 點，合計減少 28%。

[詳細資料](psyker_damage_resistance_stun_immunity.md) · [返回目錄](#talent-index)

---

<a id="psyker_warp_glass_cannon"></a>
### 亞空間意志(Empyric Resolve)

<img src="https://github.com/user-attachments/assets/49c99b4c-1fdc-4355-900d-2e4b4c733ba8" width="72" height="72" alt="亞空間意志天賦圖示">

- **運作方式**：反噬產生量減少 40%，但受此恢復修正影響的韌性恢復量也減少 30%。

- **反噬算例**：原本產生 20 個百分點反噬，變成 20 × 0.6 = 12 個百分點；另有獨立 10% 反噬減免時，為 20 × 0.6 × 0.9 = 10.8 個百分點。

- **恢復算例**：原本恢復 10 點韌性，變成 10 × 0.7 = 7 點；若另有 25% 恢復加成，則為 10 × 1.25 × 0.7 = 8.75 點，仍受最大韌性限制。

[詳細資料](psyker_warp_glass_cannon.md) · [返回目錄](#talent-index)

---

<a id="psyker_stat_mix"></a>
### 亞空間幽魂(Warp Ghost)

<img src="https://github.com/user-attachments/assets/57acd7a3-65a7-460c-876c-3153b63d69a3" width="72" height="72" alt="亞空間幽魂天賦圖示">

- **運作方式**：耐力增加 2 點，韌性恢復量增加 25%；反噬自然消退在受影響的區段變慢 80%。主動平息反噬不使用這個減速倍率。

- **恢復算例**：沒有其他加成時，原本恢復 10 點韌性變成 10 × 1.25 = 12.5 點；原有 20% 同類恢復加成時，10 × (1 + 20% + 25%) = 14.5 點。

- **自然消退算例**：在同一適用反噬區段，原本每秒下降 5 個百分點，變成 5 × 0.2 = 1 個百分點；其他條件不變，同一段反噬消退約需 5 倍時間。

[詳細資料](psyker_stat_mix.md) · [返回目錄](#talent-index)

---

<a id="psyker_warp_attacks_rending"></a>
### 靈魂穿透(Penetration of the Soul)

<img src="https://github.com/user-attachments/assets/790d837c-239d-4d45-b4e8-c3c039df63ba" width="72" height="72" alt="靈魂穿透天賦圖示">

- **運作方式**：亞空間攻擊依目前反噬獲得撕裂；反噬 50%／100% 時分別提供 10%／20% 撕裂。實際增傷取決於武器與敵人護甲。

- **護甲算例**：只比較抗撕裂修正為 1 的護甲階段，排除弱點、暴擊與其他倍率。護甲前傷害 100、原護甲倍率 0.5，反噬 100% 時由 100 × 0.5 = 50，變成 100 × (0.5 + 0.2) = 70 點，實際提高 40%。

- **不同目標**：同一 20% 撕裂，若原護甲倍率已為 1、超額撕裂換算係數為 0.25，則從 100 變成 100 × (1 + 0.2 × 0.25) = 105 點，只提高 5%。

[詳細資料](psyker_warp_attacks_rending.md) · [返回目錄](#talent-index)

---

<a id="psyker_increased_blitz_damage"></a>
### 念力之握(Psykinetic Grip)

<img src="https://github.com/user-attachments/assets/e66044cc-0b83-4f85-86ff-84661f076941" width="72" height="72" alt="念力之握天賦圖示">

- **運作方式**：顱腦崩裂、懲戒與靈能攻擊的傷害增加 20%。

- **傷害算例**：只比較此增傷階段，其餘倍率固定為 1。基準 100 點、無其他加成時，100 × (1 + 20%) = 120 點；原有 25% 同階段加成時，從 125 變成 100 × (1 + 25% + 20%) = 145 點。

#### 繁中原文勘誤

- 繁中「對……造成的……傷害」把三種閃擊寫成受攻擊的對象；實際是提高顱腦崩裂、懲戒與靈能攻擊本身造成的傷害。

[詳細資料](psyker_increased_blitz_damage.md) · [返回目錄](#talent-index)

---
