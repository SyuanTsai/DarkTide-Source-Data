# 狂信徒天賦：Release 1.13.1

[English](en/README.md)
[來源、公式與技術索引](SOURCE_INDEX.md)｜[技能分類](../../README.md)｜[版本資訊](../../../README.md)
[角色基礎效果](BASE_EFFECTS.md)

<a id="talent-index"></a>
## 技能目錄

| 技能 | 主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/aaab981f-d4ba-4278-b79d-873fccac1faa" width="32" height="32" alt="獻祭手雷天賦圖示"> [獻祭手雷](#zealot_flame_grenade)<br>- Immolation Grenade | <ul><li>最多攜帶 3 枚；引爆後留下持續 15 秒的火焰區域。</li><li>持續灼傷範圍內的敵人；傷害隨難度、護甲和每次隨機值改變。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/8d21cff6-d918-4e91-8426-b98634887a03" width="32" height="32" alt="信仰之刃天賦圖示"> [信仰之刃](#zealot_throwing_knives)<br>- Blades of Faith | <ul><li>以 12 把投擲刀取代手雷，可在衝刺時快速投擲。</li><li>近戰擊殺精英或專家敵人補 1 把；撿取彈藥也能補充。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/73777d2d-3727-47dc-8093-0d25ec6a3cfd" width="32" height="32" alt="眩暈風暴手雷天賦圖示"> [眩暈風暴手雷](#zealot_improved_stun_grenade)<br>- Stunstorm Grenade | <ul><li>震撼手雷的爆炸半徑增加 50%，最大半徑由 8 公尺提高為 12 公尺。</li><li>最多攜帶 3 枚；命中後附加持續 8 秒的電擊效果。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/da0a72a9-f944-4291-a753-a8c87b696ad5" width="32" height="32" alt="恩賜天賦圖示"> [恩賜](#zealot_toughness_damage_reduction_coherency_improved)<br>- Benediction | <ul><li>你與協同範圍內的隊友受到的韌性傷害降低 15%。</li><li>取代原有的 7.5% 光環；相同光環不重複套用。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/ac37d3b8-a749-4604-98ba-2781c220761f" width="32" height="32" alt="純潔信標天賦圖示"> [純潔信標](#zealot_corruption_healing_coherency_improved)<br>- Beacon of Purity | <ul><li>每秒為你與協同範圍內的隊友清除 1.5 點腐敗。</li><li>只清除目前傷口內的腐敗，不能恢復已失去的完整傷口。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/9e356573-f707-473e-8a64-943ae670aeeb" width="32" height="32" alt="熱忱天賦圖示"> [熱忱](#zealot_stamina_cost_multiplier_aura)<br>- Zealous | <ul><li>你與協同範圍內的隊友，耐力消耗降低 15%。</li><li>耐力開始恢復前的等待時間縮短 0.15 秒。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/4ae30922-3e39-4ded-8e19-35ec595befa0" width="32" height="32" alt="不屈靈魂合唱天賦圖示"> [不屈靈魂合唱](#zealot_bolstering_prayer)<br>- Chorus of Spiritual Fortitude | <ul><li>引導約 3.67 秒，完整引導約有 5 次脈衝；基礎冷卻 60 秒。</li><li>為你與協同隊友恢復韌性、暫時提高韌性上限，並提供短暫免死及一般踉蹌免疫。</li><li>脈衝使附近敵人踉蹌並壓制敵人。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/bd841f6f-e0ff-4cfa-a3ac-f7d08bfbc80e" width="32" height="32" alt="有信者之怒天賦圖示"> [有信者之怒](#zealot_attack_speed_post_ability)<br>- Fury of the Faithful | <ul><li>向前衝鋒，恢復 50% 最大韌性；基礎冷卻 30 秒。</li><li>攻擊速度提高 20%，持續約 11 秒。</li><li>3 秒內下一次合格近戰命中增加 25% 傷害、必定暴擊並獲得 100% 撕裂。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/1ca3f2a1-fbd3-41f7-83f3-895522b50b29" width="32" height="32" alt="神聖事業天賦圖示"> [神聖事業](#zealot_channel_grants_toughness_damage_reduction)<br>- Holy Cause | <ul><li>合唱每次脈衝增加 8% 韌性減傷，最多 5 層、40%。</li><li>作用於你與協同隊友；持續 10 秒，後續脈衝重新計時。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/1abe7e62-3810-4680-9c49-7f6091782ab6" width="32" height="32" alt="教宗之喚天賦圖示"> [教宗之喚](#zealot_channel_grants_damage)<br>- Ecclesiarch's Call | <ul><li>合唱每次脈衝增加 6% 傷害，最多 5 層、30%。</li><li>作用於你與協同隊友；持續 10 秒，後續脈衝重新計時。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/35487761-88d3-4091-ac1b-bde3020e300e" width="32" height="32" alt="倍增狂熱天賦圖示"> [倍增狂熱](#zealot_additional_charge_of_ability)<br>- Redoubled Zeal | <ul><li>有信者之怒可儲存 2 次使用。</li><li>用完兩次後依序恢復：約 30 秒回一格、60 秒回滿。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/313c803f-9a12-4470-9660-ce9a8fd308c9" width="32" height="32" alt="隱秘領域天賦圖示"> [隱秘領域](#zealot_stealth)<br>- Shroudfield | <ul><li>隱身 3 秒，基礎冷卻 30 秒；期間移動速度提高 20%。</li><li>提高爆擊率、近戰撕裂、背刺／側襲與靈巧傷害；加成分開計算。</li><li>攻擊、投擲或救援等動作可提早結束隱身。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/064d2729-f3e2-4868-bc34-1bcf434d9f4d" width="32" height="32" alt="大師級隱秘領域天賦圖示"> [大師級隱秘領域](#zealot_increased_duration)<br>- Master-Crafted Shroudfield | <ul><li>隱秘領域由 3 秒延長至 5 秒。</li><li>離開隱身後 5 秒內，威脅權重降低 75%，近戰背刺傷害提高 50%。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/d5730c05-1fc1-4fd5-9943-53bf390b9a7d" width="32" height="32" alt="振奮啟示天賦圖示"> [振奮啟示](#zealot_leaving_stealth_restores_toughness)<br>- Invigorating Revelation | <ul><li>進入隱秘領域時，恢復 50% 最大韌性。</li><li>離開隱身後，獲得持續 8 秒的 30% 減傷。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/9e0abda0-3593-44eb-8ca8-9a7f282bcfd8" width="32" height="32" alt="殉道者之願天賦圖示"> [殉道者之願](#zealot_restore_stealth_cd_on_damage)<br>- Martyr's Purpose | <ul><li>生命越低，戰鬥技能冷卻恢復越快。</li><li>生命剩 25% 或更低時達上限，每秒額外恢復相當於 0.5 秒的基礎冷卻。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/9768a27f-3a7b-47c7-a334-7f1f57db287a" width="32" height="32" alt="虔誠刺客天賦圖示"> [虔誠刺客](#zealot_backstab_kills_restore_cd)<br>- Pious Cut-Throat | <ul><li>近戰背刺或弱點命中後，接下來 2 秒加快技能冷卻恢復，不要求擊殺。</li><li>每秒額外恢復相當於 0.75 秒的基礎冷卻；再次命中只重新計時。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/e185301f-93c5-4f93-8c09-7aa351258173" width="32" height="32" alt="死亡禱文天賦圖示"> [死亡禱文](#zealot_crits_grant_cd)<br>- Invocation of Death | <ul><li>近戰爆擊命中後，加快技能冷卻恢復約 3.25 秒；每次揮擊最多觸發一次。</li><li>每秒額外恢復相當於 1 秒的基礎冷卻；再次觸發只重新計時。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/d95452d2-3c7a-419f-9461-3d32dc95ce2f" width="32" height="32" alt="無盡狂怒天賦圖示"> [無盡狂怒](#zealot_fotf_refund_cooldown)<br>- Unrelenting Fury | <ul><li>有信者之怒施放後 5 秒內擊殺精英或專家，返還單次充能的 20%。</li><li>每次施放最多一次；30 秒基礎冷卻可返還 6 秒進度。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/8532537c-fff4-4014-8ee6-e16572b9cdeb" width="32" height="32" alt="完美主義者天賦圖示"> [完美主義者](#zealot_stealth_cooldown_regeneration)<br>- Perfectionist | <ul><li>隱身中以解除隱身的攻擊擊殺敵人，返還技能冷卻，每次隱身最多一次。</li><li>巨獸返還 50%、歐格林 30%、其他敵人 15%；30 秒冷卻分別返還 15、9、4.5 秒進度。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/382b6c6a-80b7-4c64-81f9-63d37df43671" width="32" height="32" alt="死戰到底天賦圖示"> [死戰到底](#zealot_resist_death)<br>- Until Death | <ul><li>承受致命傷害時獲得 8 秒免死效果。</li><li>效果結束後冷卻 120 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/5ac2048f-e48f-49ea-b739-e9c3301e66da" width="32" height="32" alt="殉道天賦圖示"> [殉道](#zealot_martyrdom)<br>- Martyrdom | <ul><li>每失去一整格生命，近戰傷害增加 10%，最多 5 層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/3e61d06f-e542-40cc-acf4-88e2493cc594" width="32" height="32" alt="不滅意志天賦圖示"> [不滅意志](#zealot_martyrdom_grants_toughness)<br>- I Shall Not Fall | <ul><li>殉道每缺少一格生命傷口，韌性承傷降低 7.5%，最多 5 格。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/2a096b34-3273-406a-82fc-23c774fcaedf" width="32" height="32" alt="狂燥之心天賦圖示"> [狂燥之心](#zealot_martyrdom_grants_attack_speed)<br>- Maniac | <ul><li>殉道每缺少一格生命傷口，近戰攻擊速度提高 6%，最多 5 格。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/0a442a9a-29b1-4a94-b85c-5772f9d85d7c" width="32" height="32" alt="命定審判天賦圖示"> [命定審判](#zealot_quickness_passive)<br>- Inexorable Judgement | <ul><li>移動每累積 5 公尺獲得 1 層勢能，最多 20 層；衝刺距離計雙倍。</li><li>命中時將目前層數轉為 6 秒增益；近戰或遠程命中皆可觸發。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/54fb5877-384e-4378-885f-95cb1daed864" width="32" height="32" alt="懲戒者姿態天賦圖示"> [懲戒者姿態](#zealot_momentum_toughness_replenish)<br>- Retributor's Stance | <ul><li>命定審判增益期間，每層每秒恢復最大韌性的 0.5%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/b51610bf-5b84-45d0-97fe-abedede00719" width="32" height="32" alt="飄忽身形天賦圖示"> [飄忽身形](#zealot_quickness_passive_dodge_stacks)<br>- Inebriate's Poise | <ul><li>成功閃避時額外獲得 3 層命定審判勢能。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/9f0fd090-59a4-4098-b4ed-c2bdfa7d1eab" width="32" height="32" alt="吊命聖徒天賦圖示"> [吊命聖徒](#zealot_resist_death_heal)<br>- Holy Revenant | <ul><li>死戰到底觸發時擊退附近敵人。</li><li>免死期間按造成傷害累積治療額度；近戰換算率為一般傷害的 3 倍。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/7e8dfc94-5f9b-4292-a4e6-8190bebb48bc" width="32" height="32" alt="熾熱虔誠天賦圖示"> [熾熱虔誠](#zealot_fanatic_rage)<br>- Blazing Piety | <ul><li>附近敵人死亡與自身暴擊累積狂怒；25 層時提高 15 個百分點爆擊率，持續 8 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/0fd06e0a-ef14-4228-8cd5-02980c989f05" width="32" height="32" alt="死忠天賦圖示"> [死忠](#zealot_fanatic_rage_toughness_on_max)<br>- Stalwart | <ul><li>觸發狂怒時恢復相當於最大韌性的 50%；狂怒期間且計數維持 25 層時，韌性承傷降低 25%，每秒恢復最大韌性的 2%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/9d85e538-7fb1-4308-99b9-7ed9408eead2" width="32" height="32" alt="正義勇士天賦圖示"> [正義勇士](#zealot_fanatic_rage_improved)<br>- Righteous Warrior | <ul><li>狂怒的爆擊率加成由 15 提高至 25 個百分點。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/d1133aca-9af8-4b47-934f-d073de0d4e1c" width="32" height="32" alt="迅疾狂熱天賦圖示"> [迅疾狂熱](#zealot_shared_fanatic_rage)<br>- Infectious Zeal | <ul><li>狂怒開始時，當下協同隊友增加 10 個百分點爆擊率，持續 8 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/5ac46e08-8f7b-4828-8bfa-e47c240e113b" width="32" height="32" alt="治癒詩頌天賦圖示"> [治癒詩頌](#zealot_martyrdom_toughness_modifier)<br>- Restorative Verses | <ul><li>殉道每缺少一格完整傷口，提高 5%韌性恢復效率，最多計 5 格、最高+25%。</li><li>效果改變韌性恢復效率，不會直接給予一筆韌性。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/aee84e86-4f0b-4d69-87e7-9602f27396e2" width="32" height="32" alt="永恆天賦圖示"> [永恆](#zealot_quickness_increased_duration)<br>- Eternal | <ul><li>命定審判的啟動增益持續時間由 6 秒延長至 10 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/9bc683a7-534a-4244-8381-1a6c0463003f" width="32" height="32" alt="危境之際天賦圖示"> [危境之際](#zealot_corruption_resistance_stacking)<br>- On the Brink | <ul><li>殉道每缺少一格完整傷口，腐敗傷害承受倍率降低 10%；最多計 5 格，最高降低 50%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/121a9a79-f78e-4274-a0ac-4a1683244ae7" width="32" height="32" alt="狂熱朝聖者天賦圖示"> [狂熱朝聖者](#zealot_resist_death_ability)<br>- Zealous Pilgrim | <ul><li>使用戰鬥技能後獲得 4 秒免死效果。</li><li>隱身技能在退出隱身後生效；聖物技能在卸下聖物後生效。</li><li>無法殺死期間，傷害及攻擊速度各提高 10%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/f88c569e-c89d-4850-b84b-17c5af69faf0" width="32" height="32" alt="烈焰與怒火天賦圖示"> [烈焰與怒火](#zealot_resist_death_fire)<br>- Fire and Fury | <ul><li>免死期間的武器命中施加燃燒；近戰加 3 層、遠程加 1 層，本天賦加至最多 12 層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/439077af-f74c-4c06-8a8a-dbeab52d9a53" width="32" height="32" alt="復活天賦圖示"> [復活](#zealot_resist_death_golden_toughness)<br>- Risen | <ul><li>免死期間，每秒增加 5 點最大韌性，最多 8 層、共 40 點；加成持續 5 秒。</li><li>最大韌性增加時，韌性傷害值不變，因此目前韌性也會同步增加。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/96dc3500-2674-43bb-9fa9-10992eb3bcb8" width="32" height="32" alt="天災天賦圖示"> [天災](#zealot_crits_apply_bleed)<br>- Scourge | <ul><li>近戰爆擊施加 2 層流血；攻擊流血敵人增加近戰爆擊率。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/86a86e7f-6fc0-4eda-81e8-f13519f3cb8c" width="32" height="32" alt="背刺者天賦圖示"> [背刺者](#zealot_backstab_damage)<br>- Backstabber | <ul><li>近戰背刺與遠程側襲傷害增加 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/69a5f7ea-11bc-41ae-8758-86a14213a116" width="32" height="32" alt="蔑視天賦圖示"> [蔑視](#zealot_multi_hits_increase_damage)<br>- Disdain | <ul><li>上一次近戰揮擊每命中一名敵人，使下一次近戰傷害增加 5%，最多 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/162368d9-1a5d-4273-a2cd-4ab8c3c22a6d" width="32" height="32" alt="淨化不潔天賦圖示"> [淨化不潔](#zealot_increased_damage_vs_resilient)<br>- Purge the Unclean | <ul><li>對被感染及不屈護甲類型的傷害增加 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/9e5a26dc-8d4f-4c94-9dcd-fdc807cc1d48" width="32" height="32" alt="持續突擊天賦圖示"> [持續突擊](#zealot_hits_grant_stacking_damage)<br>- Sustained Assault | <ul><li>近戰命中增加 4% 近戰傷害，持續 5 秒，最多 5 層。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c3395dd2-63a2-430a-9eec-fb9ecd995308" width="32" height="32" alt="堅韌信仰天賦圖示"> [堅韌信仰](#zealot_crits_reduce_toughness_damage)<br>- Enduring Faith | <ul><li>暴擊命中後，韌性受到的傷害降低 40%，持續 4 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/7d6f33d9-5ed5-49d9-9f4c-333565e17216" width="32" height="32" alt="精力復甦天賦圖示"> [精力復甦](#zealot_toughness_on_dodge)<br>- Second Wind | <ul><li>成功閃避攻擊後恢復 15% 最大韌性，觸發冷卻 0.5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/79a0a582-a493-49eb-a470-ab7ed7e7f782" width="32" height="32" alt="近戰增幅天賦圖示"> [近戰增幅](#base_melee_damage_node_buff_medium_1)<br>- Melee Damage Boost | <ul><li>近戰傷害增加 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fb4eb2d4-1dee-4596-8262-2c99311be059" width="32" height="32" alt="泰拉之音天賦圖示"> [泰拉之音](#zealot_toughness_while_shooting)<br>- The Voice of Terra | <ul><li>射擊期間每秒恢復 10% 最大韌性，停火後再持續 0.5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/0849a882-e966-43d8-8786-554a7a657ee2" width="32" height="32" alt="恢復信仰天賦圖示"> [恢復信仰](#zealot_heal_part_of_damage_taken)<br>- Restoring Faith | <ul><li>生命受傷後，逐步恢復該次傷害的 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ba989f49-6c6c-4457-bc33-f09ab8342c1f" width="32" height="32" alt="為了帝皇天賦圖示"> [為了帝皇](#zealot_reduced_damage_on_wound)<br>- Bleed for the Emperor | <ul><li>單次生命傷害若會跨過下一個傷口分界，該次生命傷害降低 40%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/eb0f681c-574a-447c-b917-9413f146fd72" width="32" height="32" alt="惡毒贈禮天賦圖示"> [惡毒贈禮](#zealot_toughness_on_heavy_kills)<br>- Vicious Offering | <ul><li>重擊擊殺敵人時，額外恢復 10% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f86258bf-77ad-44c3-99b0-628042e47315" width="32" height="32" alt="韌性減傷天賦圖示"> [韌性減傷](#base_toughness_damage_reduction_node_buff_medium_1)<br>- Toughness Damage Reduction | <ul><li>韌性受到的傷害降低 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/dcdcc79a-ad1b-4fb3-9ac1-a6fcc1a71a56" width="32" height="32" alt="決鬥者天賦圖示"> [決鬥者](#zealot_increased_crit_and_weakspot_damage_after_dodge)<br>- Duellist | <ul><li>成功閃避後，弱點／暴擊的額外傷害增加 50%，持續 3 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/42daeb1b-ec7d-4f9b-bc58-f89c1de5d9b4" width="32" height="32" alt="輕蔑之盾天賦圖示"> [輕蔑之盾](#zealot_ally_damage_taken_reduced)<br>- Shield of Contempt | <ul><li>你或隊友生命受傷後，受傷者獲得 60% 減傷，持續 4 秒；觸發冷卻 8 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a2373334-1398-4475-b263-5b2d56cf8b90" width="32" height="32" alt="褻瀆必懲天賦圖示"> [褻瀆必懲](#zealot_push_attacks_attack_speed)<br>- Punish Impiety | <ul><li>推擊後的追加攻擊命中時，近戰攻速提高 10%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/52db08a6-3729-466e-ac16-d02a1a7ebecb" width="32" height="32" alt="勃然大怒天賦圖示"> [勃然大怒](#zealot_damage_boosts_movement)<br>- Thy Wrath be Swift | <ul><li>受傷後移動速度提高 15%，持續 2 秒。</li><li>免疫一般受擊造成的減速與踉蹌。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/607612bf-67ee-475e-9a16-0b5541c7b4ea" width="32" height="32" alt="反制護盾天賦圖示"> [反制護盾](#zealot_stamina_on_block_break)<br>- Retaliatory Defence | <ul><li>格擋被打破時恢復 50% 最大耐力，冷卻 12 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/41e85f89-6787-4fe4-9fd7-a2382f2aa025" width="32" height="32" alt="四平八穩天賦圖示"> [四平八穩](#zealot_reduced_damage_after_dodge)<br>- Good Balance | <ul><li>成功閃避後減傷 25%，持續 2.5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fbb6b38f-57a3-4659-bf32-04d1edc4d989" width="32" height="32" alt="內憂外患天賦圖示"> [內憂外患](#zealot_toughness_in_melee)<br>- Enemies Within, Enemies Without | <ul><li>5 公尺內有敵人時，持續恢復韌性；每秒最高 7.5% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c184be29-e45d-4968-acc5-ae67779d90cc" width="32" height="32" alt="信仰狂亂天賦圖示"> [信仰狂亂](#zealot_attack_speed)<br>- Faithful Frenzy | <ul><li>近戰攻速提高 10%，移動速度提高 5%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/793e953e-5b99-416a-99c8-c6d185df7cc9" width="32" height="32" alt="信仰之勇天賦圖示"> [信仰之勇](#zealot_additional_wounds)<br>- Faith's Fortitude | <ul><li>傷口數增加 2 格；不增加最大生命。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f1f336d8-dc80-46a3-b756-2df08b26f541" width="32" height="32" alt="鮮血受膏天賦圖示"> [鮮血受膏](#zealot_increase_ranged_close_damage)<br>- Anoint in Blood | <ul><li>持用遠程武器時，近距離傷害最多提高 25%；距離增加時遞減。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/7af1f56a-9932-428e-91c5-47b14836d6cb" width="32" height="32" alt="不屈之志天賦圖示"> [不屈之志](#zealot_uninterruptible_no_slow_heavies)<br>- Unfaltering | <ul><li>重擊蓄力時免疫一般踉蹌，並取消蓄力動作本身的移動減速。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/7a00054d-1b7e-448e-a9f3-eee60922b19e" width="32" height="32" alt="靈活還擊天賦圖示"> [靈活還擊](#zealot_stacking_melee_damage_after_dodge)<br>- Riposte | <ul><li>成功閃避後近戰傷害每層提高 5%，最多 3 層，持續 8 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/bcb76321-c69e-466f-b588-a894e8c63443" width="32" height="32" alt="狂熱不懈天賦圖示"> [狂熱不懈](#zealot_sprint_improvements)<br>- Relentless Fervor | <ul><li>衝刺速度提高 10%、耐力消耗降低 10%；連續衝刺 1 秒後免疫減速。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c97e932c-97b3-454c-9047-2145a5d9a49d" width="32" height="32" alt="無形之刃天賦圖示"> [無形之刃](#zealot_damage_vs_nonthreat)<br>- Unseen Blade | <ul><li>對目前未鎖定你的敵人，傷害提高 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/56d9b0f2-db5a-493b-aff8-2cd9699d4d96" width="32" height="32" alt="大師的反擊天賦圖示"> [大師的反擊](#zealot_defensive_knockback)<br>- The Master's Retribution | <ul><li>受到近戰有效命中時，朝攻擊者方向推開敵人；冷卻 8 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4b9e6b94-1960-44a0-aca5-40446806c270" width="32" height="32" alt="血色迷障天賦圖示"> [血色迷障](#zealot_bled_enemies_take_more_damage)<br>- Blinded by Blood | <ul><li>你施加流血或重設其持續時間時，使敵人承受傷害提高 15%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/dbe8719f-76fb-444c-a79d-2bf116b628fb" width="32" height="32" alt="背水一戰天賦圖示"> [背水一戰](#zealot_more_damage_when_low_on_stamina)<br>- Desperation | <ul><li>耐力越低，近戰傷害越高；耐力耗盡時最多提高 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6406ef43-19df-4cab-9091-e5c490d72cef" width="32" height="32" alt="刻不容緩天賦圖示"> [刻不容緩](#zealot_melee_crits_restore_stamina)<br>- No Respite | <ul><li>近戰爆擊命中時恢復 10% 最大耐力；冷卻 1 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ef521c17-0aae-4e01-b54c-9a25d1f9d792" width="32" height="32" alt="神恩庇護天賦圖示"> [神恩庇護](#zealot_revive_speed)<br>- Providence | <ul><li>救起倒地隊友的速度提高 25%；協助隊友後，對方獲得移速與韌性減傷。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/9b7dda36-1d18-41b4-9e28-3cfd26f0ad66" width="32" height="32" alt="弒除瀆者天賦圖示"> [弒除瀆者](#zealot_damage_vs_elites)<br>- Abolish Blasphemers | <ul><li>對精英敵人的傷害提高 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/2ea26a3b-1222-4c56-8120-26a65b4595fa" width="32" height="32" alt="傲慢天賦圖示"> [傲慢](#zealot_weakspot_damage_reduction)<br>- Hubris | <ul><li>弱點擊殺後減傷 15%，持續 4 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/0c800eb0-7fc1-4c5c-b3c2-67d20a7db2ff" width="32" height="32" alt="近戰增幅天賦圖示"> [近戰增幅](#base_melee_damage_node_buff_medium_4)<br>- Melee Damage Boost | <ul><li>近戰傷害增加 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e3c3d16b-83a0-4dfb-a797-080ed9e63c4b" width="32" height="32" alt="頭號目標天賦圖示"> [頭號目標](#zealot_elite_kills_empowers)<br>- Prime Target | <ul><li>擊殺精英後增傷 10%，並在 5 秒內恢復 15% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5d469457-ce3e-4c4f-ac25-c0759b30b61f" width="32" height="32" alt="敵後行動天賦圖示"> [敵後行動](#zealot_suppress_on_backstab_kill)<br>- Behind the Lines | <ul><li>重擊背刺擊殺後，壓制自身 8 公尺內的敵人；冷卻 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4bf327a5-94f0-4af9-ad51-b3380308846e" width="32" height="32" alt="殺戮時刻天賦圖示"> [殺戮時刻](#zealot_backstab_periodic_damage)<br>- Time to Kill | <ul><li>下一次有效近戰背刺增加 50% 傷害；觸發後冷卻 8 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/9b626554-120f-43b1-b152-bf21224b6a42" width="32" height="32" alt="逆境而上天賦圖示"> [逆境而上](#zealot_offensive_vs_many)<br>- Against the Odds | <ul><li>5 公尺內每 2 名敵人提供 2% 傷害與 10% 順劈能力，最多 5 層。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e1dda6ab-d49e-4d08-bd44-f684dae4913f" width="32" height="32" alt="自掏腰包天賦圖示"> [自掏腰包](#zealot_reload_from_melee)<br>- Out of Pocket | <ul><li>近戰擊殺時，從備用彈藥補回彈匣缺額的 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ec2c5209-fa69-4340-b6d9-bca627da0840" width="32" height="32" alt="排隊等候天賦圖示"> [排隊等候](#zealot_reduced_damage_from_ranged)<br>- Wait in Line | <ul><li>受到遠程攻擊時，傷害降低 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/28bd1a77-6a4b-44e5-b46c-1d1a334479e7" width="32" height="32" alt="神聖工具天賦圖示"> [神聖工具](#zealot_weapon_special_damage)<br>- Holy Tools | <ul><li>啟動近戰武器特殊動作後，5 秒內下一次近戰攻擊增傷 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5ddb9790-0039-4a22-97e6-8ff7c82719c0" width="32" height="32" alt="為您撐腰天賦圖示"> [為您撐腰](#zealot_melee_kills_restore_toughness_to_target)<br>- Got Your Back | <ul><li>近戰擊殺正鎖定隊友的敵人，替隊友恢復 7.5% 最大韌性，自己額外恢復 5%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8137f892-5370-4a69-b790-556f579414d2" width="32" height="32" alt="淨化仇恨天賦圖示"> [淨化仇恨](#zealot_dmg_vs_burning_electrocuted)<br>- Purifying Hatred | <ul><li>對燃燒或遭電擊的敵人增加 15% 傷害；兩者同時成立可合計 30%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a007251f-9a21-4822-b2e4-38eac8e0ae56" width="32" height="32" alt="死亡之舞天賦圖示"> [死亡之舞](#zealot_improved_weapon_handling_after_dodge)<br>- Dance of Death | <ul><li>成功閃避後，散布降低 75%、後座累積降低 50%，持續 3 秒。</li></ul> | 技能 |

---

## 閃擊

<a id="zealot_flame_grenade"></a>
### 獻祭手雷(Immolation Grenade)

<img src="https://github.com/user-attachments/assets/aaab981f-d4ba-4278-b79d-873fccac1faa" width="72" height="72" alt="獻祭手雷天賦圖示">

- **運作方式**：最多攜帶 3 枚；引信為 1.7 秒。引爆時先造成爆炸傷害，接著留下持續 15 秒的火焰區域。

- **持續傷害**：火焰範圍內的敵人每隔約 0.5～1.25 秒受到一次燃燒傷害；每次傷害另在該難度基準的 50%～150% 之間隨機取值。離開火焰後，還會留下持續 1 秒的餘火效果。

- **傷害算例**：假設該難度下，無護甲敵人的單次燃燒基準為 100 點，且沒有其他增傷或減傷，隨機結果為 50% 時造成 100 × 0.5 = 50 點；150% 時則為 100 × 1.5 = 150 點。同條件下，防彈護甲的基準為 75 點，甲殼護甲為 5 點。

- **計算限制**：初次爆炸、站在火焰中的燃燒、離開後的餘火是分開計算的效果。每次傷害與間隔都會變動，不能把上述單次數字直接當成每秒傷害。

#### 繁中原文勘誤

- 繁中原文將英文「Burning and Staggering」寫成「燃燒並使敵人暈眩」；此處應為「燃燒並使敵人踉蹌」，不能把踉蹌當成眩暈。

[詳細資料](zealot_flame_grenade.md) · [返回目錄](#talent-index)

---

<a id="zealot_throwing_knives"></a>
### 信仰之刃(Blades of Faith)

<img src="https://github.com/user-attachments/assets/8d21cff6-d918-4e91-8426-b98634887a03" width="72" height="72" alt="信仰之刃天賦圖示">

- **運作方式**：以投擲刀取代手雷，最多攜帶 12 把，可在衝刺時投擲。一般手雷補給無法補充投擲刀。

- **傷害與護甲**：普通命中、沒有其他修正時，無護甲部位的基準傷害為 585 點；防彈護甲為 585 × 0.8 = 468 點，甲殼護甲的普通命中基準為 0。弱點、暴擊、穿甲與敵人部位會另改變結果，不能把 0 解讀為任何情況都無法傷害重甲敵人。

- **近戰補充**：由你以近戰擊殺精英或專家敵人時，補回 1 把，最多補到 12 把。例如原有 11 把，完成一次合格擊殺後變成 11 + 1 = 12 把。

- **彈藥補充算例**：沒有額外補給倍率時，小型彈藥補給恢復 12 × 15% = 1.8，無條件進位為 2 把；大型彈藥補給為 12 × 50% = 6 把；部署式彈藥箱可補滿。任務的彈藥補給倍率會影響這些數量，最終仍不能超過 12 把。

- **投擲時間**：標準動作在開始後 0.25 秒擲出，動作總長 0.55 秒；這不包含飛行時間。

[詳細資料](zealot_throwing_knives.md) · [返回目錄](#talent-index)

---

<a id="zealot_improved_stun_grenade"></a>
### 眩暈風暴手雷(Stunstorm Grenade)

<img src="https://github.com/user-attachments/assets/73777d2d-3727-47dc-8093-0d25ec6a3cfd" width="72" height="72" alt="眩暈風暴手雷天賦圖示">

- **運作方式**：強化原有震撼手雷，爆炸半徑增加 50%；最多攜帶 3 枚，引信為 1.5 秒。

- **範圍算例**：只有此天賦修正時，最大半徑為 8 × 1.5 = 12 公尺，近距離區域半徑為 2 × 1.5 = 3 公尺。範圍判定仍會受爆炸位置與遮蔽物影響。

- **電擊效果**：命中敵人後附加 8 秒電擊，約每隔 0.3～0.8 秒結算一次；再次命中會重新計時，同一效果不累積成多層。實際能否持續控制敵人，仍取決於敵人的控制抗性。

- **傷害算例**：只計電擊的週期傷害，沒有其他修正時，單次對無護甲部位為 8 × 0.5 = 4 點，對防彈護甲為 8 × 1 = 8 點；初次爆炸另計。

- **例外**：已處於踉蹌狀態的瘟疫爆者不再承受這段週期電擊；這不代表牠完全免疫手雷的爆炸或控制。

[詳細資料](zealot_improved_stun_grenade.md) · [返回目錄](#talent-index)

---


---

## 光環

<a id="zealot_toughness_damage_reduction_coherency_improved"></a>
### 恩賜(Benediction)

<img src="https://github.com/user-attachments/assets/da0a72a9-f944-4291-a753-a8c87b696ad5" width="72" height="72" alt="恩賜天賦圖示">

- **效果**：你與協同範圍內的隊友，受到的韌性傷害降低 15%；這不會直接減少生命傷害。

- **傷害算例**：原本 100 點韌性傷害，變成 100 × (1 − 15%) = 85 點。若另有獨立計算的 40% 韌性減傷，則為 100 × 0.85 × 0.6 = 51 點。

- **光環替換與重複套用**：此效果取代基礎的 7.5% 韌性減傷光環，不能相加成 22.5%。多名隊友同時提供恩賜，也只採用一次 15% 減傷。

[詳細資料](zealot_toughness_damage_reduction_coherency_improved.md) · [返回目錄](#talent-index)

---

<a id="zealot_corruption_healing_coherency_improved"></a>
### 純潔信標(Beacon of Purity)

<img src="https://github.com/user-attachments/assets/ac37d3b8-a749-4604-98ba-2781c220761f" width="72" height="72" alt="純潔信標天賦圖示">

- **效果**：每 1 秒為你與協同範圍內的隊友清除 1.5 點腐敗。這是固定點數，不是生命上限的 1.5%。

- **恢復算例**：若仍保有全部傷口、目前有 10 點腐敗，一次恢復後為 10 − 1.5 = 8.5 點；在沒有新增腐敗的情況下，7 次恢復即可清除這 10 點。

- **傷口限制**：不能恢復已失去的完整傷口。例如生命上限 200、共 4 格傷口，失去一格且有 60 點腐敗時，最多只能清到 51 點，無法靠此光環取回那一格。

- **疊加方式**：多名隊友提供相同光環時，每秒仍只清除 1.5 點，不會變成 3 點或更多。

[詳細資料](zealot_corruption_healing_coherency_improved.md) · [返回目錄](#talent-index)

---

<a id="zealot_stamina_cost_multiplier_aura"></a>
### 熱忱(Zealous)

<img src="https://github.com/user-attachments/assets/9e356573-f707-473e-8a64-943ae670aeeb" width="72" height="72" alt="熱忱天賦圖示">

- **效果**：你與協同範圍內的隊友，耐力消耗降低 15%，耐力恢復延遲縮短 0.15 秒。

- **消耗算例**：原本消耗 20 點耐力的動作，變成 20 × (1 − 15%) = 17 點。這是消耗降低 15%，不是只消耗原本的 15%。

- **恢復算例**：若原本停止消耗後要等 0.50 秒才開始恢復耐力，現在只要等 0.50 − 0.15 = 0.35 秒；每秒恢復速度本身不因此提高。

- **疊加方式**：多名隊友提供熱忱時，仍只套用一次效果，不會變成降低 30% 耐力消耗。

[詳細資料](zealot_stamina_cost_multiplier_aura.md) · [返回目錄](#talent-index)

---


---

## 能力

<a id="zealot_bolstering_prayer"></a>
### 不屈靈魂合唱(Chorus of Spiritual Fortitude)

<img src="https://github.com/user-attachments/assets/4ae30922-3e39-4ded-8e19-35ec595befa0" width="72" height="72" alt="不屈靈魂合唱天賦圖示">

- **引導方式**：舉起聖物引導約 3.67 秒，開始時立即釋放脈衝，之後每 0.8 秒一次；完整引導約有 5 次脈衝，影響你與協同範圍內的隊友。

- **韌性恢復**：每次脈衝恢復當時最大韌性的 20%；引導期間另外每秒恢復 25% 最大韌性。每次脈衝再增加 15 點最大韌性，最多 5 層、共 75 點，最後一次脈衝後持續 10 秒。

- **恢復算例**：忽略脈衝間的持續恢復，最大韌性 100、目前 40，第一次脈衝先補 100 × 20% = 20 點，再增加 15 點上限及目前值，成為 75／115。之後每秒恢復量也按當時上限計算，例如上限 115 時為 115 × 25% = 28.75 點。

- **保護與控場**：每次脈衝提供 1.5 秒免死與一般踉蹌免疫，並使附近可受影響的敵人踉蹌、受到壓制；免死不代表不會受傷。

- **冷卻**：基礎冷卻 60 秒、1 次充能。持有聖物時暫停自然回充，收起後才開始恢復；提早中止會減少脈衝次數。

[詳細資料](zealot_bolstering_prayer.md) · [返回目錄](#talent-index)

---

<a id="zealot_attack_speed_post_ability"></a>
### 有信者之怒(Fury of the Faithful)

<img src="https://github.com/user-attachments/assets/bd841f6f-e0ff-4cfa-a3ac-f7d08bfbc80e" width="72" height="72" alt="有信者之怒天賦圖示">

- **衝鋒與冷卻**：向前衝鋒；一般距離 7 公尺，鎖定目標時可延長至 21 公尺，途中受碰撞與可通行路徑影響。基礎冷卻 30 秒、1 次充能。

- **韌性恢復**：啟動時恢復 50% 最大韌性；上限 100、目前 20 時可補 50 點至 70，若目前已有 70，就只補缺少的 30 點。

- **攻速加成**：獲得 20% 攻擊速度，生效約 11 秒。只計這份加成，受影響的 1 秒動作變成 1 ÷ 1.2 ≈ 0.833 秒；再次施放會重設效果的持續時間。

- **下一次近戰命中**：3 秒內的下一次合格近戰命中增加 25% 近戰傷害、必定暴擊，並獲得 100% 近戰撕裂；推擊與遠程命中不消耗這次強化。

- **傷害算例**：先只看近戰傷害階段，基礎 100 點變成 100 × 1.25 = 125 點；已有同階段 20% 增傷時則為 145 點。暴擊的額外傷害與撕裂對護甲的影響另算，不能把 125 當成所有武器的最終傷害。

- **特殊攻擊**：部分武器啟動特殊效果、並持續黏著敵人攻擊時，可保留強化到該段攻擊結束；實際行為依武器而定。

[詳細資料](zealot_attack_speed_post_ability.md) · [返回目錄](#talent-index)

---

<a id="zealot_channel_grants_toughness_damage_reduction"></a>
### 神聖事業(Holy Cause)

<img src="https://github.com/user-attachments/assets/1ca3f2a1-fbd3-41f7-83f3-895522b50b29" width="72" height="72" alt="神聖事業天賦圖示">

- **運作方式**：不屈靈魂合唱的每次脈衝，為你與協同隊友增加 1 層韌性減傷，每層 8%，最多 5 層、40%。

- **持續時間**：效果持續 10 秒，後續脈衝會重新計時；提早中止引導可能無法達到 5 層。

- **減傷算例**：滿層時，100 點韌性傷害變成 100 × (1 − 5 × 8%) = 60 點；另有獨立 25% 韌性減傷時，為 100 × 0.6 × 0.75 = 45 點。此項沒有直接降低生命傷害。

[詳細資料](zealot_channel_grants_toughness_damage_reduction.md) · [返回目錄](#talent-index)

---

<a id="zealot_channel_grants_damage"></a>
### 教宗之喚(Ecclesiarch's Call)

<img src="https://github.com/user-attachments/assets/1abe7e62-3810-4680-9c49-7f6091782ab6" width="72" height="72" alt="教宗之喚天賦圖示">

- **運作方式**：不屈靈魂合唱的每次脈衝，為你與協同隊友增加 1 層傷害加成，每層 6%，最多 5 層、30%。

- **持續時間**：效果持續 10 秒，後續脈衝重新計時；完整引導約 5 次脈衝可達上限，提早收起則可能不足 5 層。

- **傷害算例**：滿層時，基礎 100 點變成 100 × (1 + 5 × 6%) = 130 點；若原本已有同階段 25% 加成，則是 100 × (1 + 25% + 30%) = 155 點。

#### 繁中原文勘誤

- 繁中原文的「疊加次數」誤用了傷害百分比欄位；正確是最多 5 層，每層增加 6% 傷害。

[詳細資料](zealot_channel_grants_damage.md) · [返回目錄](#talent-index)

---

<a id="zealot_additional_charge_of_ability"></a>
### 倍增狂熱(Redoubled Zeal)

<img src="https://github.com/user-attachments/assets/35487761-88d3-4091-ac1b-bde3020e300e" width="72" height="72" alt="倍增狂熱天賦圖示">

- **充能方式**：有信者之怒可儲存 2 次使用。每次消耗一格，自然恢復一格約需 30 秒。

- **冷卻算例**：連續用完兩次後，約 30 秒恢復第一格、約 60 秒回滿兩格；兩次使用共用同一個冷卻資源，並不是等 30 秒就同時補滿兩格。若只用一次，只需補回該次消耗。

- **適用能力**：這項升級只作用於有信者之怒。

[詳細資料](zealot_additional_charge_of_ability.md) · [返回目錄](#talent-index)

---

<a id="zealot_stealth"></a>
### 隱秘領域(Shroudfield)

<img src="https://github.com/user-attachments/assets/313c803f-9a12-4470-9660-ce9a8fd308c9" width="72" height="72" alt="隱秘領域天賦圖示">

- **運作方式**：進入隱身 3 秒，基礎冷卻 30 秒、1 次充能。期間移動速度提高 20%，爆擊率增加 100 個百分點，近戰撕裂提高 100%。

- **傷害加成**：隱身期間，近戰背刺或遠程側襲傷害提高 150%；弱點／暴擊的額外傷害另提高 150%。背刺、側襲取決於攻擊種類與方向，不會同時把兩份 150% 加在同一次命中。

- **靈巧傷害算例**：先固定攻擊種類、部位與護甲，只看靈巧加成；基礎部分 100、弱點／暴擊額外部分 50 時，由 150 變成 100 + 50 × (1 + 150%) = 225，整次增加 50%。額外部分若為 100，則由 200 變成 350，增加 75%。背刺與撕裂等其他因素另算。

- **移速算例**：基礎 5 公尺／秒、沒有其他修正時，變成 5 × 1.2 = 6 公尺／秒。

- **提早解除**：一般射擊、有效攻擊命中、投擲手雷或飛刀，以及完成救援等動作可解除隱身；既有流血、燃燒等持續傷害不會單獨解除。剛進入隱身約 0.5 秒內，部分沒有造成傷害的動作有寬限。

[詳細資料](zealot_stealth.md) · [返回目錄](#talent-index)

---

<a id="zealot_increased_duration"></a>
### 大師級隱秘領域(Master-Crafted Shroudfield)

<img src="https://github.com/user-attachments/assets/064d2729-f3e2-4868-bc34-1bcf434d9f4d" width="72" height="72" alt="大師級隱秘領域天賦圖示">

- **隱身時間**：隱秘領域延長 2 秒，由 3 秒變成 5 秒，基礎冷卻仍為 30 秒。

- **離開隱身後**：獲得 5 秒後續加成：敵人選擇你為目標的威脅權重降低 75%，近戰背刺傷害提高 50%；再次觸發會重新計時。

- **傷害與威脅算例**：固定其他條件，背刺階段基準 100 點變成 100 × 1.5 = 150；已有同階段 20% 背刺加成時為 170 點。原本威脅權重 100 變成 100 × 0.25 = 25，並不代表敵人鎖定你的機率固定剩 25%。

[詳細資料](zealot_increased_duration.md) · [返回目錄](#talent-index)

---

<a id="zealot_leaving_stealth_restores_toughness"></a>
### 振奮啟示(Invigorating Revelation)

<img src="https://github.com/user-attachments/assets/d5730c05-1fc1-4fd5-9943-53bf390b9a7d" width="72" height="72" alt="振奮啟示天賦圖示">

- **韌性恢復**：進入隱秘領域時，立即恢復 50% 最大韌性；離開隱身時不會再補一次。

- **減傷效果**：離開隱身後獲得 30% 傷害減免，持續 8 秒。

- **恢復與減傷算例**：最大韌性 100、目前 20，進入時補 100 × 50% = 50 點至 70；若只缺 30 點就只補 30 點。離開後原本 100 點傷害變成 100 × 0.7 = 70；另有獨立 25% 減傷時為 52.5 點。

[詳細資料](zealot_leaving_stealth_restores_toughness.md) · [返回目錄](#talent-index)

---

<a id="zealot_restore_stealth_cd_on_damage"></a>
### 殉道者之願(Martyr's Purpose)

<img src="https://github.com/user-attachments/assets/9e0abda0-3593-44eb-8ca8-9a7f282bcfd8" width="72" height="72" alt="殉道者之願天賦圖示">

- **運作方式**：生命越低，戰鬥技能恢復越快；滿生命沒有額外恢復，剩 25% 生命或更低時達上限，相當於每秒額外縮短 0.5 秒基礎冷卻。

- **計算方式**：額外恢復量 = 0.5 × min[(1 − 目前生命比例) ÷ 0.75, 1]。生命恢復後，額外效果也會下降，不需要新受一次傷才更新。

- **冷卻算例**：生命穩定在 50%、自然回充正常時，每秒合計 1 + 0.5 × 0.5 ÷ 0.75 ≈ 1.333 秒進度，30 秒技能約 22.5 秒回滿；生命在 25% 以下時為 30 ÷ 1.5 = 20 秒。實際按秒結算，可能略有時間差。

[詳細資料](zealot_restore_stealth_cd_on_damage.md) · [返回目錄](#talent-index)

---

<a id="zealot_backstab_kills_restore_cd"></a>
### 虔誠刺客(Pious Cut-Throat)

<img src="https://github.com/user-attachments/assets/9768a27f-3a7b-47c7-a334-7f1f57db287a" width="72" height="72" alt="虔誠刺客天賦圖示">

- **觸發方式**：近戰命中弱點或從背後命中敵人時，戰鬥技能在接下來 2 秒額外加快恢復；不需要擊殺，遠程弱點命中不會觸發。

- **重新計時方式**：再次觸發只重設持續時間，不會把每秒恢復速度疊高；弱點與背刺同時成立也不是兩倍。

- **冷卻算例**：每秒額外恢復相當於 0.75 秒基礎冷卻的進度；完整兩次結算共 0.75 × 2 = 1.5 秒。若自然回充也正常運作，同期約共推進 2 + 1.5 = 3.5 秒，充能已滿的部分不保留。

[詳細資料](zealot_backstab_kills_restore_cd.md) · [返回目錄](#talent-index)

---

<a id="zealot_crits_grant_cd"></a>
### 死亡禱文(Invocation of Death)

<img src="https://github.com/user-attachments/assets/e185301f-93c5-4f93-8c09-7aa351258173" width="72" height="72" alt="死亡禱文天賦圖示">

- **觸發方式**：近戰爆擊命中後，戰鬥技能在約 3.25 秒內加快恢復；同一次揮擊命中多個敵人，最多觸發一次。

- **重新計時方式**：下一次揮擊再次暴擊可重新計時；每秒額外恢復速度不疊加。

- **冷卻算例**：每秒額外恢復相當於 1 秒基礎冷卻的進度。單次完整效果通常在約第 1、2、3 秒各恢復一次，共額外 3 秒；自然回充正常時，這 3 秒合計約推進 6 秒冷卻。

[詳細資料](zealot_crits_grant_cd.md) · [返回目錄](#talent-index)

---

<a id="zealot_fotf_refund_cooldown"></a>
### 無盡狂怒(Unrelenting Fury)

<img src="https://github.com/user-attachments/assets/d95452d2-3c7a-419f-9461-3d32dc95ce2f" width="72" height="72" alt="無盡狂怒天賦圖示">

- **觸發方式**：使用有信者之怒後 5 秒內，擊殺精英或專家敵人，返還單次充能所需冷卻的 20%；每次使用最多返還一次。

- **冷卻算例**：基礎冷卻 30 秒時，返還 30 × 20% = 6 秒的自然回充進度；若還差 4 秒就回滿，只能補足缺少的部分。雙充能仍按一格計算，不會改成 60 × 20% = 12 秒。

#### 繁中原文勘誤

- 原文在百分比返還數值後誤加「秒」；正確是返還一格充能的 20%，以 30 秒基礎冷卻換算為 6 秒進度。

[詳細資料](zealot_fotf_refund_cooldown.md) · [返回目錄](#talent-index)

---

<a id="zealot_stealth_cooldown_regeneration"></a>
### 完美主義者(Perfectionist)

<img src="https://github.com/user-attachments/assets/8532537c-fff4-4014-8ee6-e16572b9cdeb" width="72" height="72" alt="完美主義者天賦圖示">

- **觸發方式**：在隱秘領域中，以會結束隱身的有效攻擊擊殺敵人，返還技能冷卻；每次隱身最多一次。既有流血、燃燒等持續傷害擊殺不會因此返還。

- **返還比例**：巨獸返還一格充能的 50%，歐格林 30%，其他敵人 15%。

- **冷卻算例**：隱秘領域基礎冷卻 30 秒，因此分別返還 30 × 50% = 15 秒、30 × 30% = 9 秒、30 × 15% = 4.5 秒的自然回充進度，仍以目前缺額為上限。

#### 繁中原文勘誤

- 繁中原文把巨獸、歐格林與其他敵人的返還比例加上「秒」；正確單位是單次充能的 50%、30%、15%，不是固定 50、30、15 秒。

[詳細資料](zealot_stealth_cooldown_regeneration.md) · [返回目錄](#talent-index)

---


---

## 鑰石

<a id="zealot_resist_death"></a>
### 死戰到底(Until Death)

<img src="https://github.com/user-attachments/assets/382b6c6a-80b7-4c64-81f9-63d37df43671" width="72" height="72" alt="死戰到底天賦圖示">

- **觸發方式**：承受致命傷害時，保住生命並獲得 8 秒免死效果；仍會受到傷害，並非所有傷害都歸零。

- **冷卻算例**：8 秒效果結束後，再冷卻 120 秒；第 0 秒觸發，約第 8 秒效果結束，約第 128 秒才再次可用。已處於其他免死效果時，不會再觸發本天賦。

[詳細資料](zealot_resist_death.md) · [返回目錄](#talent-index)

---

<a id="zealot_martyrdom"></a>
### 殉道(Martyrdom)

<img src="https://github.com/user-attachments/assets/5ac2048f-e48f-49ea-b739-e9c3301e66da" width="72" height="72" alt="殉道天賦圖示">

- **運作方式**：每失去一整格生命，近戰傷害提高 10%，最多 5 層、50%；恢復生命後，層數也會跟著下降。腐敗占用的生命同樣納入計算。

- **傷口算例**：最大生命 200、共 4 格傷口，每格為 50。失去 49 點尚未滿一格，不增加層數；失去 100 點為 2 層，近戰基礎 100 點傷害變成 100 × (1 + 2 × 10%) = 120 點。

- **其他加成**：同樣 2 層、原本已有同階段 25% 近戰增傷時，為 100 × (1 + 25% + 20%) = 145 點。最多 5 層不代表任何傷口數都能在存活時達到滿層。

[詳細資料](zealot_martyrdom.md) · [返回目錄](#talent-index)

---

<a id="zealot_martyrdom_grants_toughness"></a>
### 不滅意志(I Shall Not Fall)

<img src="https://github.com/user-attachments/assets/3e61d06f-e542-40cc-acf4-88e2493cc594" width="72" height="72" alt="不滅意志天賦圖示">

- **效果**：每失去一格完整生命傷口，韌性承受的傷害降低 7.5%，最多計 5 格，最高降低 37.5%。

- **減傷算例**：3 層為 22.5% 韌性減傷，100 × (1 − 22.5%) = 77.5 點；5 層為 62.5 點。若另有同階段 10% 韌性減傷，滿層時為 100 × (1 − 37.5% − 10%) = 52.5 點，獨立減傷再相乘。

[詳細資料](zealot_martyrdom_grants_toughness.md) · [返回目錄](#talent-index)

---

<a id="zealot_martyrdom_grants_attack_speed"></a>
### 狂燥之心(Maniac)

<img src="https://github.com/user-attachments/assets/2a096b34-3273-406a-82fc-23c774fcaedf" width="72" height="72" alt="狂燥之心天賦圖示">

- **效果**：每失去一格完整生命傷口，近戰攻擊速度提高 6%，最多計 5 格，最高 +30%。

- **速度算例**：3 層增加 3 × 6% = 18% 近戰攻速，受影響的 1 秒動作變成 1 ÷ 1.18 ≈ 0.847 秒；5 層為 1 ÷ 1.3 ≈ 0.769 秒。其他同階段攻速先相加。

[詳細資料](zealot_martyrdom_grants_attack_speed.md) · [返回目錄](#talent-index)

---

<a id="zealot_quickness_passive"></a>
### 命定審判(Inexorable Judgement)

<img src="https://github.com/user-attachments/assets/0a442a9a-29b1-4a94-b85c-5772f9d85d7c" width="72" height="72" alt="命定審判天賦圖示">

- **累積勢能**：移動每累積 5 公尺獲得 1 層勢能，最多 20 層；衝刺距離以雙倍計算，因此從 0 層到滿層需要一般移動 100 公尺，或衝刺 50 公尺。

- **啟動方式**：近戰或遠程命中時，消耗目前勢能，換成持續 6 秒的加成。加成期間仍可累積下一輪勢能，但命中不會重新計時、重新消耗或提高這一輪的層數。

- **傷害與速度**：每層增加 1% 傷害、1% 近戰攻速及 1% 遠程攻速。滿 20 層時，基礎 100 點變成 100 × 1.2 = 120 點；受影響的 1 秒動作變成 1 ÷ 1.2 ≈ 0.833 秒。同階段其他加成先相加。

- **閃避加成**：每層另增加 0.5% 閃避距離、縮短 1% 連續閃避次數的恢復時間，並把閃避速度乘 1.005。20 層時距離為 1.1 倍、次數恢復時間為 0.8 倍、速度約 1.005²⁰ ≈ 1.105 倍。

[詳細資料](zealot_quickness_passive.md) · [返回目錄](#talent-index)

---

<a id="zealot_momentum_toughness_replenish"></a>
### 懲戒者姿態(Retributor's Stance)

<img src="https://github.com/user-attachments/assets/54fb5877-384e-4378-885f-95cb1daed864" width="72" height="72" alt="懲戒者姿態天賦圖示">

- **效果**：命定審判增益期間，每層每秒恢復最大韌性的 0.5%；依目前增益層數逐秒累積。

- **恢復算例**：最大韌性 100、以 20 層啟動時，每秒補 100 × 20 × 0.5% = 10 點；完整 6 秒最多 60 點。搭配延長至 10 秒時最多 100 點，均受恢復加成與目前缺額限制。

[詳細資料](zealot_momentum_toughness_replenish.md) · [返回目錄](#talent-index)

---

<a id="zealot_quickness_passive_dodge_stacks"></a>
### 飄忽身形(Inebriate's Poise)

<img src="https://github.com/user-attachments/assets/b51610bf-5b84-45d0-97fe-abedede00719" width="72" height="72" alt="飄忽身形天賦圖示">

- **觸發方式**：每次成功閃避額外獲得 3 層命定審判勢能，仍受 20 層上限限制。

- **層數算例**：原本 18 層，成功閃避後為 min(18 + 3, 20) = 20 層；超出的 1 層不保留。加成期間可累積下一輪，但必須等本輪結束再命中，才會使用這些勢能。

[詳細資料](zealot_quickness_passive_dodge_stacks.md) · [返回目錄](#talent-index)

---

<a id="zealot_resist_death_heal"></a>
### 吊命聖徒(Holy Revenant)

<img src="https://github.com/user-attachments/assets/9f0fd090-59a4-4098-b4ed-c2bdfa7d1eab" width="72" height="72" alt="吊命聖徒天賦圖示">

- **觸發效果**：死戰到底因致命傷害觸發時，擊退周圍 3.5 公尺內的敵人；實際踉蹌仍受敵人抗性影響。

- **生命恢復**：免死期間，每次造成傷害都增加可用治療量：一般傷害的 0.7%，近戰則為 2.1%。每次符合條件的傷害，也會再次用目前累積額度恢復生命；已用過的額度不會扣掉。

- **恢復算例**：假設累積額度原本為 0、沒有其他治療修正，連續兩次各造成 100 點近戰傷害，第一次累積並補 100 × 0.7% × 3 = 2.1 點；第二次額度增至 4.2，再補 4.2 點，合計 6.3 點。

- **上限**：每次計算的治療量，最多補到最大生命的 25%；例如最大生命 100、目前 24，該次最多先算 1 點。其他治療倍率會在之後套用，仍不能清除腐敗。這不是整場只能恢復 25 點。

#### 繁中原文勘誤

- 繁中寫成「生命恢復量為近戰傷害的 3 倍」容易被讀成造成 100 傷害就補 300 生命；實際是近戰的治療換算率為一般傷害的 3 倍，即 0.7% × 3 = 2.1%，之後再按累積額度與上限計算。

[詳細資料](zealot_resist_death_heal.md) · [返回目錄](#talent-index)

---

<a id="zealot_fanatic_rage"></a>
### 熾熱虔誠(Blazing Piety)

<img src="https://github.com/user-attachments/assets/7e8dfc94-5f9b-4292-a4e6-8190bebb48bc" width="72" height="72" alt="熾熱虔誠天賦圖示">

- **累積方式**：25 公尺內每有一名敵人死亡，獲得 1 層；你自己的暴擊命中也獲得 1 層，近戰與遠程皆可，不要求由你擊殺附近死亡的敵人。

- **狂怒效果**：累積 25 層後進入狂怒，爆擊率增加 15 個百分點，持續 8 秒；滿層後繼續觸發會重新計時。

- **爆擊率算例**：原本爆擊率 5%，狂怒時變成 5% + 15% = 20%，不是 5% × 1.15。附近死亡與暴擊命中各自計數，因此暴擊擊殺可能同時符合兩項。

- **層數消退**：未進入狂怒時，連續 8 秒沒有新觸發便開始逐層下降；再次觸發重設等待時間。狂怒結束則清空計數，重新累積。

[詳細資料](zealot_fanatic_rage.md) · [返回目錄](#talent-index)

---

<a id="zealot_fanatic_rage_toughness_on_max"></a>
### 死忠(Stalwart)

<img src="https://github.com/user-attachments/assets/0fd06e0a-ef14-4228-8cd5-02980c989f05" width="72" height="72" alt="死忠天賦圖示">

- **觸發恢復**：首次進入狂怒時，立即恢復 50% 最大韌性；狂怒已生效時再次重設持續時間，不會重複補這 50%。

- **持續防護**：狂怒計數維持 25 層時，韌性減傷提高 25%，並每秒恢復 2% 最大韌性；計數離開滿層就停止這兩項效果。

- **恢復與減傷算例**：最大韌性 100，啟動時最多補 50 點；滿層維持 8 秒另可補 100 × 2% × 8 = 16 點，均受缺額限制。原本 100 點韌性傷害變成 100 × 0.75 = 75 點。

[詳細資料](zealot_fanatic_rage_toughness_on_max.md) · [返回目錄](#talent-index)

---

<a id="zealot_fanatic_rage_improved"></a>
### 正義勇士(Righteous Warrior)

<img src="https://github.com/user-attachments/assets/9d85e538-7fb1-4308-99b9-7ed9408eead2" width="72" height="72" alt="正義勇士天賦圖示">

- **運作方式**：熾熱虔誠啟動期間，額外增加 10 個百分點爆擊率；與原本的 15 個百分點合計為 25 個百分點。

- **爆擊率算例**：原本爆擊率 5%，搭配此升級進入狂怒後為 5% + 15% + 10% = 30%。這是追加機率，不是把原本 5% 乘以 1.25。

[詳細資料](zealot_fanatic_rage_improved.md) · [返回目錄](#talent-index)

---

<a id="zealot_shared_fanatic_rage"></a>
### 迅疾狂熱(Infectious Zeal)

<img src="https://github.com/user-attachments/assets/d1133aca-9af8-4b47-934f-d073de0d4e1c" width="72" height="72" alt="迅疾狂熱天賦圖示">

- **運作方式**：熾熱虔誠開始時，當下協同範圍內的其他隊友獲得 10 個百分點爆擊率，持續 8 秒；這份共享加成不再給你自己。

- **爆擊率算例**：隊友原本 5%，效果期間變成 5% + 10% = 15%。你的「正義勇士」不會把隊友這份 10 個百分點一起提高。

- **持續限制**：你之後重設自身狂怒的持續時間，不會同步延長這次已給隊友的 8 秒；效果期間才進入協同範圍的隊友，也不會立即補發。

[詳細資料](zealot_shared_fanatic_rage.md) · [返回目錄](#talent-index)

---

<a id="zealot_martyrdom_toughness_modifier"></a>
### 治癒詩頌(Restorative Verses)

<img src="https://github.com/user-attachments/assets/5ac46e08-8f7b-4828-8bfa-e47c240e113b" width="72" height="72" alt="治癒詩頌天賦圖示">

- **運作方式**：每失去一整格生命，韌性恢復量增加 5%，最多 5 層、25%；需要原本有恢復韌性的來源才有效，不會因獲得層數直接補韌性。

- **恢復算例**：某效果原本補 10 點韌性，2 層時為 10 × (1 + 2 × 5%) = 11 點；5 層時為 12.5 點。若另有同階段 20% 恢復加成，滿層為 10 × (1 + 20% + 25%) = 14.5 點，仍受韌性缺額限制。

#### 繁中原文勘誤

- 原文寫「每層會恢復韌性」，容易誤認為取得層數就立即恢復；實際是每層增加 5% 韌性恢復量，須透過其他恢復來源生效。

[詳細資料](zealot_martyrdom_toughness_modifier.md) · [返回目錄](#talent-index)

---

<a id="zealot_quickness_increased_duration"></a>
### 永恆(Eternal)

<img src="https://github.com/user-attachments/assets/aee84e86-4f0b-4d69-87e7-9602f27396e2" width="72" height="72" alt="永恆天賦圖示">

- **效果**：命定審判啟動增益的持續時間延長至 10 秒。

- **持續算例**：第 0 秒命中啟動後，原本約第 6 秒結束，改為約第 10 秒結束；期間命中仍不會重設本輪加成的持續時間。持續時間增加 4 秒，層數與每層加成不變。

[詳細資料](zealot_quickness_increased_duration.md) · [返回目錄](#talent-index)

---

<a id="zealot_corruption_resistance_stacking"></a>
### 危境之際(On the Brink)

<img src="https://github.com/user-attachments/assets/9bc683a7-534a-4244-8381-1a6c0463003f" width="72" height="72" alt="危境之際天賦圖示">

- **運作方式**：每失去一整格生命，承受的腐敗傷害降低 10%，最多 5 層、50%；不會清除已累積的腐敗。

- **腐敗算例**：原本會獲得 20 點腐敗，3 層時為 20 × (1 − 3 × 10%) = 14 點；5 層時為 10 點。其他腐敗倍率另相乘，不會因此免疫所有腐敗來源。

[詳細資料](zealot_corruption_resistance_stacking.md) · [返回目錄](#talent-index)

---

<a id="zealot_resist_death_ability"></a>
### 狂熱朝聖者(Zealous Pilgrim)

<img src="https://github.com/user-attachments/assets/121a9a79-f78e-4274-a0ac-4a1683244ae7" width="72" height="72" alt="狂熱朝聖者天賦圖示">

- **觸發方式**：使用戰鬥技能可獲得 4 秒免死效果；隱身技能在隱身結束時開始，聖物技能在卸下聖物時開始。

- **攻擊增益**：持有免死效果時，傷害與攻擊速度各提高 10%。

- **傷害與速度算例**：只計這項增益，基礎 100 點傷害變成 100 × 1.1 = 110 點；受攻速影響的 1 秒動作變成 1 ÷ 1.1 ≈ 0.909 秒。其他同階段加成先相加。

[詳細資料](zealot_resist_death_ability.md) · [返回目錄](#talent-index)

---

<a id="zealot_resist_death_fire"></a>
### 烈焰與怒火(Fire and Fury)

<img src="https://github.com/user-attachments/assets/f88c569e-c89d-4850-b84b-17c5af69faf0" width="72" height="72" alt="烈焰與怒火天賦圖示">

- **觸發方式**：免死期間，武器命中存活敵人會施加燃燒；近戰每次增加 3 層，遠程每次增加 1 層。本天賦最多把該敵人的這種燃燒加至 12 層；其他來源仍可能加得更高。

- **燃燒持續**：約每 0.5 秒結算一次，追加燃燒重設 4 秒保留時間；到期後逐次結算、逐層消退。已有 12 層以上時，本天賦不再加層，只重新計時。

- **層數算例**：目標原本 0 層，連續 4 次近戰命中可達 4 × 3 = 12 層；接著再命中不會由本天賦升至 15 層。

- **傷害算例**：固定無甲部位、沒有其他修正，3 層單次燃燒傷害為 400 × (3 ÷ 31)² × [3 − 2 × (3 ÷ 31)] × 1.5 ≈ 15.77 點；12 層約 200.11 點。這是單次結算，並非所有敵人的固定每秒傷害。

[詳細資料](zealot_resist_death_fire.md) · [返回目錄](#talent-index)

---

<a id="zealot_resist_death_golden_toughness"></a>
### 復活(Risen)

<img src="https://github.com/user-attachments/assets/439077af-f74c-4c06-8a8a-dbeab52d9a53" width="72" height="72" alt="復活天賦圖示">

- **疊層方式**：免死期間，約在開始後 0.75 秒取得第一層，之後每秒增加一層；每層增加 5 點最大韌性，最多 8 層、40 點。

- **持續時間**：新增層數會重設整組效果的 5 秒持續時間；免死結束後停止加層，最後一層帶來的倒數仍繼續。

- **韌性算例**：原本最大韌性 100、目前 60，取得一層後變成最大 105、目前 65。若完整取得 8 層、期間沒有其他變化，就成為 100／140；到期回到上限 100 時，可保留目前 100。若到期前目前只有 70，則保持 70／100。

- **短期免死**：4 秒免死期間，約可在第 0.75、1.75、2.75、3.75 秒取得 4 層，合計增加 20 點；實際觸發仍受更新時點影響。

[詳細資料](zealot_resist_death_golden_toughness.md) · [返回目錄](#talent-index)

---


---

## 技能

<a id="zealot_crits_apply_bleed"></a>
### 天災(Scourge)

<img src="https://github.com/user-attachments/assets/96dc3500-2674-43bb-9fa9-10992eb3bcb8" width="72" height="72" alt="天災天賦圖示">

- **施加流血**：近戰爆擊造成傷害且敵人仍存活時，施加 2 層流血。近戰命中已流血的敵人時，獲得 1 層近戰爆擊率加成，每層增加 10 個百分點，最多 3 層，持續 3 秒；再次觸發會重新計時。

- **觸發順序**：先檢查敵人是否已流血，再施加本次暴擊的流血。因此，對未流血敵人的第一次暴擊，不會僅因這次新加的流血就同時獲得爆擊率加成。近戰擊殺流血敵人的事件也可提供加成。

- **爆擊率算例**：原本近戰爆擊率 5%，滿 3 層後為 5% + 3 × 10% = 35%，不是 5% × 1.3。

- **流血傷害算例**：流血每約 0.5 秒結算一次，最多 16 層。固定無甲部位、沒有其他修正，2 層的單次傷害為 175 × (2 ÷ 16)² × [3 − 2 × (2 ÷ 16)] × 0.5 ≈ 3.76 點；8 層為 43.75 點，層數與傷害不是等比例增加。

- **流血持續**：增加層數會重設 1.5 秒保留時間；到期後隨每次結算逐層消退，不是 1.5 秒一到全部消失。

[詳細資料](zealot_crits_apply_bleed.md) · [返回目錄](#talent-index)

---

<a id="zealot_backstab_damage"></a>
### 背刺者(Backstabber)

<img src="https://github.com/user-attachments/assets/86a86e7f-6fc0-4eda-81e8-f13519f3cb8c" width="72" height="72" alt="背刺者天賦圖示">

- **運作方式**：從敵人背後約 120 度扇形內近戰命中，或從敵人後半側以遠程攻擊命中時，傷害增加 25%。

- **傷害算例**：固定相同武器、護甲及命中部位，沒有其他背刺／側襲加成時，該階段 100 點變成 100 × (1 + 25%) = 125 點。已有 20% 同類加成時，則由 120 點變成 100 × (1 + 20% + 25%) = 145 點，實際增幅約 20.83%。

[詳細資料](zealot_backstab_damage.md) · [返回目錄](#talent-index)

---

<a id="zealot_multi_hits_increase_damage"></a>
### 蔑視(Disdain)

<img src="https://github.com/user-attachments/assets/69a5f7ea-11bc-41ae-8758-86a14213a116" width="72" height="72" alt="蔑視天賦圖示">

- **運作方式**：上一次近戰揮擊每命中一名敵人，使下一次近戰攻擊傷害增加 5%，最多計 5 名敵人、增加 25%。

- **更新方式**：依最近一次揮擊的命中數重新計算，不跨多次揮擊累加；下一次揮空後，加成歸零。

- **傷害算例**：沒有其他加成，上一擊命中 3 名敵人時，下一擊的 100 點變成 100 × (1 + 3 × 5%) = 115 點；命中 5 名以上則為 125 點。

[詳細資料](zealot_multi_hits_increase_damage.md) · [返回目錄](#talent-index)

---

<a id="zealot_increased_damage_vs_resilient"></a>
### 淨化不潔(Purge the Unclean)

<img src="https://github.com/user-attachments/assets/162368d9-1a5d-4273-a2cd-4ab8c3c22a6d" width="72" height="72" alt="淨化不潔天賦圖示">

- **運作方式**：對被感染及不屈護甲類型造成的傷害增加 20%；依命中部位的護甲類型判斷。

- **傷害算例**：只看這項護甲類型加成，原有 100 點變成 100 × 1.20 = 120 點。若已有 10% 同類加成，則由 110 點變成 100 × (1 + 10% + 20%) = 130 點，實際增幅約 18.18%。

[詳細資料](zealot_increased_damage_vs_resilient.md) · [返回目錄](#talent-index)

---

<a id="zealot_hits_grant_stacking_damage"></a>
### 持續突擊(Sustained Assault)

<img src="https://github.com/user-attachments/assets/9e5a26dc-8d4f-4c94-9dcd-fdc807cc1d48" width="72" height="72" alt="持續突擊天賦圖示">

- **疊層與重新計時**：近戰命中敵人後，增加一層 4% 近戰傷害，最多 5 層、20%。持續 5 秒，再次命中會重新計時，滿層仍可重新計時。

- **傷害算例**：沒有其他加成，3 層使 100 × (1 + 3 × 4%) = 112 點；滿層為 120 點。原有同階段 25% 加成時，滿層則為 100 × (1 + 25% + 20%) = 145 點。

[詳細資料](zealot_hits_grant_stacking_damage.md) · [返回目錄](#talent-index)

---

<a id="zealot_crits_reduce_toughness_damage"></a>
### 堅韌信仰(Enduring Faith)

<img src="https://github.com/user-attachments/assets/c3395dd2-63a2-430a-9eec-fb9ecd995308" width="72" height="72" alt="堅韌信仰天賦圖示">

- **運作方式**：暴擊命中後，韌性受到的傷害降低 40%，持續 4 秒；近戰與遠程暴擊都可觸發。

- **重新計時方式**：再次暴擊命中會重設 4 秒倒數，不重複套用多份減傷。

- **減傷算例**：只計此效果，原有 100 點韌性傷害變成 100 × 0.6 = 60 點。若另有獨立的 10% 韌性減傷，則為 100 × 0.6 × 0.9 = 54 點，共降低 46%；這不是生命減傷。

[詳細資料](zealot_crits_reduce_toughness_damage.md) · [返回目錄](#talent-index)

---

<a id="zealot_toughness_on_dodge"></a>
### 精力復甦(Second Wind)

<img src="https://github.com/user-attachments/assets/7d6f33d9-5ed5-49d9-9f4c-333565e17216" width="72" height="72" alt="精力復甦天賦圖示">

- **運作方式**：成功閃避敵人攻擊時，恢復 15% 最大韌性；每 0.5 秒最多觸發一次。單純使用閃避動作不會恢復。

- **恢復算例**：最大韌性 100、沒有其他恢復加成時，一次補 100 × 15% = 15 點；目前已有 95 點則只能補 5 點，恢復至上限。

[詳細資料](zealot_toughness_on_dodge.md) · [返回目錄](#talent-index)

---

<a id="base_melee_damage_node_buff_medium_1"></a>
### 近戰增幅(Melee Damage Boost)

<img src="https://github.com/user-attachments/assets/79a0a582-a493-49eb-a470-ab7ed7e7f782" width="72" height="72" alt="近戰增幅天賦圖示">

- **運作方式**：近戰傷害增加 10%。兩個同名節點各自提供加成，皆選取時合計增加 20%。

- **傷害算例**：沒有其他加成，100 × (1 + 10%) = 110 點；兩個節點皆選取時為 120 點。已有 25% 同階段加成，再選一個節點則是 100 × (1 + 25% + 10%) = 135 點。

[詳細資料](base_melee_damage_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="zealot_toughness_while_shooting"></a>
### 泰拉之音(The Voice of Terra)

<img src="https://github.com/user-attachments/assets/fb4eb2d4-1dee-4596-8262-2c99311be059" width="72" height="72" alt="泰拉之音天賦圖示">

- **運作方式**：射擊期間每秒恢復 10% 最大韌性，停火後再持續約 0.5 秒；不需要命中或擊殺敵人。

- **恢復算例**：最大韌性 100、沒有其他恢復加成且持續射擊 2 秒，停火後的 0.5 秒也完整生效，合計 100 × 10% × (2 + 0.5) = 25 點。以缺少的韌性為上限。

[詳細資料](zealot_toughness_while_shooting.md) · [返回目錄](#talent-index)

---

<a id="zealot_heal_part_of_damage_taken"></a>
### 恢復信仰(Restoring Faith)

<img src="https://github.com/user-attachments/assets/0849a882-e966-43d8-8786-554a7a657ee2" width="72" height="72" alt="恢復信仰天賦圖示">

- **運作方式**：生命受到傷害後，在約 4 秒內逐步恢復該次生命傷害的 20%；韌性受損不列入恢復量。

- **再次受傷**：新的受傷會增加另一份恢復量，不會清掉尚未恢復的部分。

- **恢復算例**：沒有其他治療修正，一次失去 50 點生命，總計可恢復 50 × 20% = 10 點，平均每秒約 2.5 點。恢復期間再受 30 點傷害，另增加 6 點待恢復量。

- **恢復上限**：只能補回可治療的生命缺額，不能清除腐敗占用的生命上限。

[詳細資料](zealot_heal_part_of_damage_taken.md) · [返回目錄](#talent-index)

---

<a id="zealot_reduced_damage_on_wound"></a>
### 為了帝皇(Bleed for the Emperor)

<img src="https://github.com/user-attachments/assets/ba989f49-6c6c-4457-bc33-f09ab8342c1f" width="72" height="72" alt="為了帝皇天賦圖示">

- **運作方式**：單次生命傷害若會讓生命值低於下一個傷口分界，該次生命傷害降低 40%；減傷套用整次生命傷害，而非只套用超過分界的部分。

- **傷害算例**：最大生命 200、共 4 格傷口，每格 50。現在有 120 點生命，下一條分界是 100；原本 30 點傷害會跨過分界，因此變成 30 × 0.6 = 18 點，受擊後剩 102 點。

- **門檻例外**：同一情況下若恰好受到 20 點生命傷害，只會降到 100 點，沒有低於分界，因此不觸發這項減傷。

[詳細資料](zealot_reduced_damage_on_wound.md) · [返回目錄](#talent-index)

---

<a id="zealot_toughness_on_heavy_kills"></a>
### 惡毒贈禮(Vicious Offering)

<img src="https://github.com/user-attachments/assets/eb0f681c-574a-447c-b917-9413f146fd72" width="72" height="72" alt="惡毒贈禮天賦圖示">

- **運作方式**：以重擊擊殺敵人時，額外恢復 10% 最大韌性；只是命中而沒有擊殺不會觸發。

- **恢復算例**：最大韌性 100、沒有其他恢復加成時，每次合格擊殺額外補 100 × 10% = 10 點。若只缺 4 點，就只補 4 點；原本的近戰擊殺恢復另計。

#### 繁中原文勘誤

- 原文寫「重攻擊命中後恢復」，但需要重擊「擊殺」敵人才會恢復；單純命中不會觸發。

[詳細資料](zealot_toughness_on_heavy_kills.md) · [返回目錄](#talent-index)

---

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>
### 韌性減傷(Toughness Damage Reduction)

<img src="https://github.com/user-attachments/assets/f86258bf-77ad-44c3-99b0-628042e47315" width="72" height="72" alt="韌性減傷天賦圖示">

- **運作方式**：韌性受到的傷害降低 10%。

- **減傷算例**：沒有其他加成時，100 × (1 − 10%) = 90 點韌性傷害。若已有同一加算階段的 20% 韌性減傷，則為 100 × (1 − 20% − 10%) = 70 點；獨立乘算的減傷效果另行相乘。

[詳細資料](base_toughness_damage_reduction_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="zealot_increased_crit_and_weakspot_damage_after_dodge"></a>
### 決鬥者(Duellist)

<img src="https://github.com/user-attachments/assets/dcdcc79a-ad1b-4fb3-9ac1-a6fcc1a71a56" width="72" height="72" alt="決鬥者天賦圖示">

- **運作方式**：成功閃避攻擊後，靈巧傷害增加 50%，持續 3 秒；再次成功閃避會重新計時。此加成只加強弱點／暴擊的額外傷害，實際整次命中增幅依武器及目標而變。

- **弱點算例**：固定未暴擊、沒有其他加成，基礎部分 100、弱點額外部分 50，原有 150 點變成 100 + 50 × 1.5 = 175 點，整次增加約 16.67%。額外部分若為 100，則 200 → 250 點，增加 25%。

- **既有加成**：基礎與額外部分皆為 100，原有 25% 同階段加成時，由 100 + 100 × 1.25 = 225 點，變成 100 + 100 × (1 + 25% + 50%) = 275 點，實際增幅約 22.22%。

[詳細資料](zealot_increased_crit_and_weakspot_damage_after_dodge.md) · [返回目錄](#talent-index)

---

<a id="zealot_ally_damage_taken_reduced"></a>
### 輕蔑之盾(Shield of Contempt)

<img src="https://github.com/user-attachments/assets/42daeb1b-ec7d-4f9b-bc58-f89c1de5d9b4" width="72" height="72" alt="輕蔑之盾天賦圖示">

- **運作方式**：你或隊友受到生命傷害後，受傷者獲得 60% 傷害減免，持續 4 秒。觸發這次效果的傷害已經結算，不會被這份新減傷倒扣。

- **冷卻方式**：每名擁有此天賦的狂信徒共用一次 8 秒觸發冷卻；冷卻內另一名隊友受傷，不會再由同一份天賦施加效果。

- **減傷算例**：只計這份效果，之後原本 100 點傷害變成 100 × 0.4 = 40 點。第 0 秒觸發時，效果約於第 4 秒結束，約第 8 秒才能再次觸發。

[詳細資料](zealot_ally_damage_taken_reduced.md) · [返回目錄](#talent-index)

---

<a id="zealot_push_attacks_attack_speed"></a>
### 褻瀆必懲(Punish Impiety)

<img src="https://github.com/user-attachments/assets/a2373334-1398-4475-b263-5b2d56cf8b90" width="72" height="72" alt="褻瀆必懲天賦圖示">

- **觸發方式**：推擊後接續的攻擊命中敵人，近戰攻擊速度提高 10%，持續 5 秒；再次觸發會重新計時，沒有命中則不會獲得加成。

- **速度算例**：只計這項加成，原本 1 秒的受影響動作變成 1 ÷ 1.1 ≈ 0.909 秒；已有同階段 20% 攻速時，則為 1 ÷ (1 + 20% + 10%) ≈ 0.769 秒。

[詳細資料](zealot_push_attacks_attack_speed.md) · [返回目錄](#talent-index)

---

<a id="zealot_damage_boosts_movement"></a>
### 勃然大怒(Thy Wrath be Swift)

<img src="https://github.com/user-attachments/assets/52db08a6-3729-466e-ac16-d02a1a7ebecb" width="72" height="72" alt="勃然大怒天賦圖示">

- **運作方式**：受傷後移動速度提高 15%，持續 2 秒；再次受傷可重新計時。

- **常駐防護**：免疫一般受擊造成的減速與踉蹌，不需要先受傷啟動；不能據此抵擋捕網、撲倒等控制，或明確無視免疫的攻擊。

- **速度算例**：基礎移速 5 公尺／秒、沒有其他修正時，加速後為 5 × 1.15 = 5.75 公尺／秒。

[詳細資料](zealot_damage_boosts_movement.md) · [返回目錄](#talent-index)

---

<a id="zealot_stamina_on_block_break"></a>
### 反制護盾(Retaliatory Defence)

<img src="https://github.com/user-attachments/assets/607612bf-67ee-475e-9a16-0b5541c7b4ea" width="72" height="72" alt="反制護盾天賦圖示">

- **運作方式**：效果可用時，格擋被打破會恢復 50% 最大耐力，並免疫該次破防踉蹌；觸發後冷卻 12 秒。

- **恢復算例**：最大耐力為 6，破防耗盡至 0 時，補回 6 × 50% = 3；冷卻期間再次破防不會再補。

[詳細資料](zealot_stamina_on_block_break.md) · [返回目錄](#talent-index)

---

<a id="zealot_reduced_damage_after_dodge"></a>
### 四平八穩(Good Balance)

<img src="https://github.com/user-attachments/assets/41e85f89-6787-4fe4-9fd7-a2382f2aa025" width="72" height="72" alt="四平八穩天賦圖示">

- **運作方式**：成功閃避攻擊後，受到的傷害降低 25%，持續 2.5 秒；再次成功閃避會重新計時。

- **減傷算例**：原本 100 點傷害變成 100 × 0.75 = 75 點。若另有獨立乘算的 40% 減傷，則為 100 × 0.75 × 0.6 = 45 點。

[詳細資料](zealot_reduced_damage_after_dodge.md) · [返回目錄](#talent-index)

---

<a id="zealot_toughness_in_melee"></a>
### 內憂外患(Enemies Within, Enemies Without)

<img src="https://github.com/user-attachments/assets/fbb6b38f-57a3-4659-bf32-04d1edc4d989" width="72" height="72" alt="內憂外患天賦圖示">

- **運作方式**：5 公尺內有敵人時，每秒恢復 2.5% 最大韌性；每多一名敵人，再增加每秒 1 個百分點，最多每秒 7.5%。被控制而無法行動時暫停恢復。

- **恢復算例**：最大韌性 100，附近 3 名一般敵人時，每秒補 100 × [2.5% + (3 − 1) × 1%] = 4.5 點；6 名時達到每秒 7.5 點上限。

- **大型敵人**：固定來源將巨獸與特定頭目按 6 名敵人計算，因此單獨一名即可達恢復上限。

[詳細資料](zealot_toughness_in_melee.md) · [返回目錄](#talent-index)

---

<a id="zealot_attack_speed"></a>
### 信仰狂亂(Faithful Frenzy)

<img src="https://github.com/user-attachments/assets/c184be29-e45d-4968-acc5-ae67779d90cc" width="72" height="72" alt="信仰狂亂天賦圖示">

- **運作方式**：常駐增加 10% 近戰攻擊速度與 5% 移動速度。

- **速度算例**：只計本天賦，原本 1 秒的受影響近戰動作變成 1 ÷ 1.1 ≈ 0.909 秒；基礎移速 5 公尺／秒變成 5 × 1.05 = 5.25 公尺／秒。其他同階段攻速先相加，再用總速度倍率換算時間。

[詳細資料](zealot_attack_speed.md) · [返回目錄](#talent-index)

---

<a id="zealot_additional_wounds"></a>
### 信仰之勇(Faith's Fortitude)

<img src="https://github.com/user-attachments/assets/793e953e-5b99-416a-99c8-c6d185df7cc9" width="72" height="72" alt="信仰之勇天賦圖示">

- **運作方式**：最大傷口數增加 2 格，最大生命維持不變；同樣的生命值會分成更多格。

- **傷口算例**：最大生命 200、原本 2 格傷口時，每格 200 ÷ 2 = 100；選取後變成 4 格，每格 200 ÷ 4 = 50。它不會把生命值加到 400。

[詳細資料](zealot_additional_wounds.md) · [返回目錄](#talent-index)

---

<a id="zealot_increase_ranged_close_damage"></a>
### 鮮血受膏(Anoint in Blood)

<img src="https://github.com/user-attachments/assets/f1f336d8-dc80-46a3-b756-2df08b26f541" width="72" height="72" alt="鮮血受膏天賦圖示">

- **運作方式**：持用遠程武器時，對 12.5 公尺內的目標最多增加 25% 傷害；超過 12.5 公尺後逐步降低，30 公尺起沒有這項加成。

- **距離算例**：固定其他條件，基礎 100 點傷害，在 12.5 公尺內為 100 × 1.25 = 125；在 16.875 公尺，加成為 25% × [1 − √((16.875 − 12.5) ÷ 17.5)] = 12.5%，所以是 112.5 點。

- **其他加成**：本項與同階段傷害加成相加；武器自身隨距離衰減的傷害另算，不能把上面的固定 100 當成所有距離的實測傷害。

[詳細資料](zealot_increase_ranged_close_damage.md) · [返回目錄](#talent-index)

---

<a id="zealot_uninterruptible_no_slow_heavies"></a>
### 不屈之志(Unfaltering)

<img src="https://github.com/user-attachments/assets/7af1f56a-9932-428e-91c5-47b14836d6cb" width="72" height="72" alt="不屈之志天賦圖示">

- **運作方式**：重擊蓄力期間，免疫一般受擊踉蹌與動作中斷，並取消這個蓄力動作本身的移動減速；揮出後不再符合蓄力條件。

- **速度算例**：基礎移速 5 公尺／秒，某蓄力原本使移速乘 0.5，通常只能走 2.5 公尺／秒；本天賦取消該動作的減速後可維持 5 公尺／秒。其他來源的速度修正仍另算。

- **控制例外**：不等於免疫所有擊退、捕網或撲倒，也不能阻止明確無視免疫的攻擊。

[詳細資料](zealot_uninterruptible_no_slow_heavies.md) · [返回目錄](#talent-index)

---

<a id="zealot_stacking_melee_damage_after_dodge"></a>
### 靈活還擊(Riposte)

<img src="https://github.com/user-attachments/assets/7a00054d-1b7e-448e-a9f3-eee60922b19e" width="72" height="72" alt="靈活還擊天賦圖示">

- **疊層方式**：每次成功閃避攻擊，獲得 1 層近戰增傷，每層 5%，最多 3 層；再次觸發會重設 8 秒持續時間。

- **傷害算例**：3 層共 15%，基礎 100 點變成 100 × (1 + 3 × 5%) = 115 點；已有同階段 20% 加成時，則是 100 × (1 + 20% + 15%) = 135 點。

[詳細資料](zealot_stacking_melee_damage_after_dodge.md) · [返回目錄](#talent-index)

---

<a id="zealot_sprint_improvements"></a>
### 狂熱不懈(Relentless Fervor)

<img src="https://github.com/user-attachments/assets/bcb76321-c69e-466f-b588-a894e8c63443" width="72" height="72" alt="狂熱不懈天賦圖示">

- **運作方式**：衝刺速度提高 10%，衝刺耐力消耗降低 10%。連續衝刺滿 1 秒後免疫減速，停止衝刺就失去這項免疫；下次衝刺重新計時。

- **速度與消耗算例**：若原本衝刺速度為 6 公尺／秒、每秒消耗 2 點耐力，只計此天賦後為 6 × 1.1 = 6.6 公尺／秒、2 × 0.9 = 1.8 點耐力／秒。

[詳細資料](zealot_sprint_improvements.md) · [返回目錄](#talent-index)

---

<a id="zealot_damage_vs_nonthreat"></a>
### 無形之刃(Unseen Blade)

<img src="https://github.com/user-attachments/assets/c97e932c-97b3-454c-9047-2145a5d9a49d" width="72" height="72" alt="無形之刃天賦圖示">

- **運作方式**：攻擊目前沒有把你當成目標的敵人，傷害提高 20%；近戰與遠程皆可套用。

- **傷害算例**：只計本天賦，100 × 1.2 = 120 點；若已有同階段 25% 增傷，則是 100 × (1 + 25% + 20%) = 145 點。敵人改為鎖定你後，這項條件增傷就不成立。

[詳細資料](zealot_damage_vs_nonthreat.md) · [返回目錄](#talent-index)

---

<a id="zealot_defensive_knockback"></a>
### 大師的反擊(The Master's Retribution)

<img src="https://github.com/user-attachments/assets/56d9b0f2-db5a-493b-aff8-2cd9699d4d96" width="72" height="72" alt="大師的反擊天賦圖示">

- **觸發方式**：受到造成傷害的近戰命中時，朝攻擊者方向產生反擊推力；冷卻 8 秒。被控制而無法行動，或攻擊者已死亡時不會觸發。

- **作用範圍**：推擊半徑 2.75 公尺，方向朝向攻擊者；效果受敵人的踉蹌抗性影響，不能保證把所有敵人推倒。

- **冷卻算例**：第 0 秒觸發後，第 3 秒再次挨打不會再推擊，約第 8 秒才可再次觸發。它不會撤銷已受到的那次傷害。

[詳細資料](zealot_defensive_knockback.md) · [返回目錄](#talent-index)

---

<a id="zealot_bled_enemies_take_more_damage"></a>
### 血色迷障(Blinded by Blood)

<img src="https://github.com/user-attachments/assets/4b9e6b94-1960-44a0-aca5-40446806c270" width="72" height="72" alt="血色迷障天賦圖示">

- **運作方式**：你對敵人施加流血、增加層數或重設持續時間時，使該敵人受到的傷害提高 15%，持續 5 秒；隊友對同一敵人的傷害也會受益。

- **持續方式**：增傷不累積層數，重新施加流血會重新計時；不是只要看見正在流血的敵人就自動為它附加效果。

- **傷害算例**：敵人原本承受 100 點傷害，變成 100 × 1.15 = 115 點。若你先有另一階段的 20% 傷害加成，則 100 × 1.2 × 1.15 = 138 點。

[詳細資料](zealot_bled_enemies_take_more_damage.md) · [返回目錄](#talent-index)

---

<a id="zealot_more_damage_when_low_on_stamina"></a>
### 背水一戰(Desperation)

<img src="https://github.com/user-attachments/assets/dbe8719f-76fb-444c-a79d-2bf116b628fb" width="72" height="72" alt="背水一戰天賦圖示">

- **運作方式**：近戰增傷 = 20% × 已消耗的耐力比例。滿耐力沒有加成，剩一半耐力時增加 10%，耗盡時增加 20%；耐力恢復後，加成也會跟著下降。

- **傷害算例**：最大耐力 6、目前剩 2，已消耗 4 ÷ 6；增傷為 20% × 4 ÷ 6 ≈ 13.33%，基礎 100 點變成約 113.33 點。同階段其他近戰增傷先相加。

[詳細資料](zealot_more_damage_when_low_on_stamina.md) · [返回目錄](#talent-index)

---

<a id="zealot_melee_crits_restore_stamina"></a>
### 刻不容緩(No Respite)

<img src="https://github.com/user-attachments/assets/6406ef43-19df-4cab-9091-e5c490d72cef" width="72" height="72" alt="刻不容緩天賦圖示">

- **觸發方式**：近戰爆擊命中時，恢復 10% 最大耐力；每秒最多觸發一次，不需要擊殺。

- **恢復算例**：最大耐力 6，每次補 6 × 10% = 0.6 點；若只缺 0.2 點，就只恢復 0.2 點。一次橫掃暴擊命中多個敵人，仍受 1 秒冷卻限制。

[詳細資料](zealot_melee_crits_restore_stamina.md) · [返回目錄](#talent-index)

---

<a id="zealot_revive_speed"></a>
### 神恩庇護(Providence)

<img src="https://github.com/user-attachments/assets/ef521c17-0aae-4e01-b54c-9a25d1f9d792" width="72" height="72" alt="神恩庇護天賦圖示">

- **運作方式**：救起倒地隊友的速度提高 25%。完成救起、救援、拉起懸掛隊友或移除捕網後，該隊友獲得 10% 移動速度與 15% 韌性減傷，持續 5 秒。

- **效果算例**：受幫助隊友原本移速 5 公尺／秒，只計這份加成後為 5 × 1.1 = 5.5；原本 100 點韌性傷害變成 100 × 0.85 = 85 點。效果給被協助的隊友，不是給你自己。

[詳細資料](zealot_revive_speed.md) · [返回目錄](#talent-index)

---

<a id="zealot_damage_vs_elites"></a>
### 弒除瀆者(Abolish Blasphemers)

<img src="https://github.com/user-attachments/assets/9b7dda36-1d18-41b4-9e28-3cfd26f0ad66" width="72" height="72" alt="弒除瀆者天賦圖示">

- **運作方式**：對精英敵人造成的傷害提高 15%，近戰與遠程皆適用；這個條件不等於所有特殊敵人或頭目。

- **傷害算例**：100 × 1.15 = 115 點；若已有同階段 20% 傷害加成，則是 100 × (1 + 20% + 15%) = 135 點。

[詳細資料](zealot_damage_vs_elites.md) · [返回目錄](#talent-index)

---

<a id="zealot_weakspot_damage_reduction"></a>
### 傲慢(Hubris)

<img src="https://github.com/user-attachments/assets/2ea26a3b-1222-4c56-8120-26a65b4595fa" width="72" height="72" alt="傲慢天賦圖示">

- **觸發方式**：命中弱點並擊殺敵人後，受到的傷害降低 15%，持續 4 秒；近戰與遠程皆可，單純命中弱點不會觸發。

- **持續與算例**：效果不累積層數，再次觸發會重新計時。只計本天賦時，100 × 0.85 = 85 點傷害；另有獨立 25% 減傷時為 100 × 0.85 × 0.75 = 63.75 點。

[詳細資料](zealot_weakspot_damage_reduction.md) · [返回目錄](#talent-index)

---

<a id="base_melee_damage_node_buff_medium_4"></a>
### 近戰增幅(Melee Damage Boost)

<img src="https://github.com/user-attachments/assets/0c800eb0-7fc1-4c5c-b3c2-67d20a7db2ff" width="72" height="72" alt="近戰增幅天賦圖示">

- **運作方式**：近戰傷害增加 10%。兩個同名節點各自提供加成，皆選取時合計增加 20%。

- **傷害算例**：沒有其他加成，100 × (1 + 10%) = 110 點；兩個節點皆選取時為 120 點。已有 25% 同階段加成，再選一個節點則是 100 × (1 + 25% + 10%) = 135 點。

[詳細資料](base_melee_damage_node_buff_medium_4.md) · [返回目錄](#talent-index)

---

<a id="zealot_elite_kills_empowers"></a>
### 頭號目標(Prime Target)

<img src="https://github.com/user-attachments/assets/e3c3d16b-83a0-4dfb-a797-080ed9e63c4b" width="72" height="72" alt="頭號目標天賦圖示">

- **觸發方式**：擊殺精英敵人後，傷害提高 10%，持續 5 秒；期間每秒恢復 3% 最大韌性，完整 5 秒共 15%。

- **重新計時方式**：再次擊殺精英會重設 5 秒倒數，不會疊加增傷或每秒恢復速度。

- **傷害與恢復算例**：基礎 100 點傷害變成 100 × 1.1 = 110 點；最大韌性 100 時，每秒補 100 × 15% ÷ 5 = 3 點。第 3 秒重新觸發、之後完整持續到第 8 秒，合計可補 24 點，仍以韌性缺額為限。

[詳細資料](zealot_elite_kills_empowers.md) · [返回目錄](#talent-index)

---

<a id="zealot_suppress_on_backstab_kill"></a>
### 敵後行動(Behind the Lines)

<img src="https://github.com/user-attachments/assets/5d469457-ce3e-4c4f-ac25-c0759b30b61f" width="72" height="72" alt="敵後行動天賦圖示">

- **觸發方式**：用近戰重擊從背後擊殺敵人後，壓制你周圍 8 公尺內可受壓制的敵人；冷卻 5 秒。範圍以你的位置為中心。

- **作用限制**：離你越遠，壓制量越低；敵人的壓制抗性與行為各不相同，不保證所有敵人都停止攻擊，也不造成額外傷害。

- **冷卻算例**：第 0 秒觸發後，第 2 秒再次重擊背刺擊殺不會再觸發；約第 5 秒起才可再次生效。

[詳細資料](zealot_suppress_on_backstab_kill.md) · [返回目錄](#talent-index)

---

<a id="zealot_backstab_periodic_damage"></a>
### 殺戮時刻(Time to Kill)

<img src="https://github.com/user-attachments/assets/4bf327a5-94f0-4af9-ad51-b3380308846e" width="72" height="72" alt="殺戮時刻天賦圖示">

- **運作方式**：效果可用時，近戰背刺增加 50% 傷害；造成傷害的背刺命中後，進入 8 秒冷卻。不需要擊殺。

- **傷害算例**：固定其他條件、該階段基準為 100，沒有其他背刺加成時為 100 × 1.5 = 150 點；若已有同階段 20% 背刺加成，則由 120 變成 100 × (1 + 20% + 50%) = 170 點。

- **方向限制**：必須是近戰命中敵人背後的有效角度；從背後射擊不算這項近戰背刺。

[詳細資料](zealot_backstab_periodic_damage.md) · [返回目錄](#talent-index)

---

<a id="zealot_offensive_vs_many"></a>
### 逆境而上(Against the Odds)

<img src="https://github.com/user-attachments/assets/9b626554-120f-43b1-b152-bf21224b6a42" width="72" height="72" alt="逆境而上天賦圖示">

- **疊層方式**：5 公尺內每有 2 名敵人，增加 2% 傷害與 10% 順劈能力；最多 5 層，需要 10 名敵人。敵人離開後，層數跟著下降；被控制而無法行動時暫停加成。

- **傷害算例**：附近 6 名敵人為 3 層，基礎 100 點變成 100 × (1 + 3 × 2%) = 106 點；10 名以上最多 110 點。同階段其他傷害加成先相加。

- **順劈算例**：原本可穿透的敵人體型總量為 10，3 層時變成 10 × (1 + 3 × 10%) = 13；滿層為 15。這是可穿透總量，不等於固定多命中 3 或 5 名敵人。

[詳細資料](zealot_offensive_vs_many.md) · [返回目錄](#talent-index)

---

<a id="zealot_reload_from_melee"></a>
### 自掏腰包(Out of Pocket)

<img src="https://github.com/user-attachments/assets/e1dda6ab-d49e-4d08-bd44-f684dae4913f" width="72" height="72" alt="自掏腰包天賦圖示">

- **運作方式**：每次近戰擊殺，從備用彈藥移入目前彈匣缺額的 10%；不會憑空增加總彈藥，也不是補充備用彈藥。

- **裝填算例**：彈匣上限 30、目前 10 發，缺少 20 發，擊殺後從備用彈藥移入 20 × 10% = 2 發，變成 12 發。下次缺 18 發，計入 1.8 發，本次移入 1 發，剩下的 0.8 累積到後續擊殺。

- **限制**：彈匣已滿不會累積這次補充量；一般情況下沒有備用彈藥就不能補入，備用彈藥不足時也只能移入現有數量。

#### 繁中原文勘誤

- 繁中原文寫成恢復「缺失彈藥儲備」；實際是消耗備用彈藥、補入彈匣，不會增加備用彈藥或總彈量。

[詳細資料](zealot_reload_from_melee.md) · [返回目錄](#talent-index)

---

<a id="zealot_reduced_damage_from_ranged"></a>
### 排隊等候(Wait in Line)

<img src="https://github.com/user-attachments/assets/ec2c5209-fa69-4340-b6d9-bca627da0840" width="72" height="72" alt="排隊等候天賦圖示">

- **運作方式**：遠程攻擊造成的傷害降低 20%；判斷依攻擊種類，不是只看敵人是否拿槍。同一名槍手改用近戰時，不會因本天賦減傷。

- **減傷算例**：只計本項，原本 100 點遠程傷害變成 100 × 0.8 = 80 點；另有獨立 25% 通用減傷時，為 100 × 0.8 × 0.75 = 60 點。

[詳細資料](zealot_reduced_damage_from_ranged.md) · [返回目錄](#talent-index)

---

<a id="zealot_weapon_special_damage"></a>
### 神聖工具(Holy Tools)

<img src="https://github.com/user-attachments/assets/28bd1a77-6a4b-44e5-b46c-1d1a334479e7" width="72" height="72" alt="神聖工具天賦圖示">

- **觸發方式**：啟動近戰武器的特殊動作後，5 秒內下一次近戰攻擊傷害增加 20%。這次攻擊結束就消耗效果，空揮也會消耗；期限內沒有揮擊則到期消失。

- **傷害算例**：基礎 100 點變成 100 × 1.2 = 120 點；已有同階段 25% 近戰增傷時，則 100 × (1 + 25% + 20%) = 145 點。一次橫掃的效果維持到該次揮擊結束。

[詳細資料](zealot_weapon_special_damage.md) · [返回目錄](#talent-index)

---

<a id="zealot_melee_kills_restore_toughness_to_target"></a>
### 為您撐腰(Got Your Back)

<img src="https://github.com/user-attachments/assets/5ddb9790-0039-4a22-97e6-8ff7c82719c0" width="72" height="72" alt="為您撐腰天賦圖示">

- **觸發方式**：近戰擊殺正以另一名隊友為目標的敵人，該隊友恢復 7.5% 最大韌性，你額外恢復 5% 最大韌性；敵人鎖定你或沒有目標時不觸發。

- **恢復算例**：隊友最大韌性 120、你為 100，隊友補 120 × 7.5% = 9 點，你額外補 100 × 5% = 5 點；雙方各自受恢復加成與韌性缺額限制，原本近戰擊殺恢復另算。

- **距離條件**：本天賦沒有另加協同範圍限制，重點是被殺敵人當時鎖定的對象。

[詳細資料](zealot_melee_kills_restore_toughness_to_target.md) · [返回目錄](#talent-index)

---

<a id="zealot_dmg_vs_burning_electrocuted"></a>
### 淨化仇恨(Purifying Hatred)

<img src="https://github.com/user-attachments/assets/8137f892-5370-4a69-b790-556f579414d2" width="72" height="72" alt="淨化仇恨天賦圖示">

- **運作方式**：敵人燃燒時增加 15% 傷害，遭電擊時另增加 15%；兩個條件各自判斷，並非一定要同時燃燒與遭電擊才能生效。

- **傷害算例**：基礎 100 點、僅符合其中一項時為 100 × 1.15 = 115；兩者皆符合時為 100 × (1 + 15% + 15%) = 130 點。其他同階段增傷也先相加。

[詳細資料](zealot_dmg_vs_burning_electrocuted.md) · [返回目錄](#talent-index)

---

<a id="zealot_improved_weapon_handling_after_dodge"></a>
### 死亡之舞(Dance of Death)

<img src="https://github.com/user-attachments/assets/a007251f-9a21-4822-b2e4-38eac8e0ae56" width="72" height="72" alt="死亡之舞天賦圖示">

- **運作方式**：成功閃避攻擊後，子彈散布降低 75%、後座不穩定度的累積降低 50%，持續 3 秒；再次成功閃避會重新計時。

- **散布算例**：只計本效果，原本 4 度的受影響散布角變成 4 × 0.25 = 1 度。這不代表命中率固定提高 75%。

- **後座算例**：每次原本增加 0.2 的不穩定度，變成 0.2 × 0.5 = 0.1；恢復時的衰減速度則乘 1 ÷ 0.5 = 2。實際準星偏移仍依武器後座曲線，不能保證所有畫面晃動直接減半。

[詳細資料](zealot_improved_weapon_handling_after_dodge.md) · [返回目錄](#talent-index)

---
