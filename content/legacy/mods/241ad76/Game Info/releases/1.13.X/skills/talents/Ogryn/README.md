# 歐格林天賦：Release 1.13.1

[English](en/README.md)

[來源、公式與技術索引](SOURCE_INDEX.md)｜[技能分類](../../README.md)｜[版本資訊](../../../README.md)
[角色基礎效果](BASE_EFFECTS.md)

<a id="talent-index"></a>
## 技能目錄

| 技能 | 主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/a7e97984-e57a-4028-ab1b-6e89a0e42fdf" width="32" height="32" alt="投彈完畢！天賦圖示"> [投彈完畢！](#ogryn_box_explodes)<br>- Bombs Away! | <ul><li>選擇「投彈完畢！」後，手雷箱命中敵人會破開並散出 6 顆手雷；搭配「超巨量傷害箱」時為 9 顆。</li><li>最多攜帶 3 箱；散出的手雷各自倒數引爆。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/ce691c05-0701-4539-921b-620c90189fa2" width="32" height="32" alt="破片炸彈天賦圖示"> [破片炸彈](#ogryn_grenade_frag)<br>- Frag Bomb | <ul><li>爆炸半徑 16 公尺，中心 2 公尺傷害較高；最多攜帶 1 顆。</li><li>對符合條件的普通敵人直接致命；巨獸、連長與歐格林按傷害計算。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/641d8592-01cf-4120-ae26-b53ea1a58776" width="32" height="32" alt="投石問路天賦圖示"> [投石問路](#ogryn_grenade_friend_rock)<br>- Big Friendly Rock | <ul><li>「投石問路」向單一敵人投出岩石，最多持有 4 顆；一般每 45 秒恢復 1 顆。</li><li>岩石使用直接命中傷害，不套用爆炸範圍；對甲殼護甲的效果較弱。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/3d000b06-db5c-4ff3-96c9-54d09216587d" width="32" height="32" alt="那下不算！天賦圖示"> [那下不算！](#ogryn_replenish_rock_on_miss)<br>- That One Didn't Count | <ul><li>岩石命中弱點，或未命中可受傷害的目標，返還 1 顆；每 5 秒最多一次。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/13c08b08-ef80-4f04-8a70-cddfa4db7389" width="32" height="32" alt="超巨量傷害箱天賦圖示"> [超巨量傷害箱](#ogryn_big_box_of_hurt_more_bombs)<br>- Bigger Box of Hurt | <ul><li>「超巨量傷害箱」讓「投彈完畢！」命中後散出的手雷增加 3 顆。</li><li>基礎 6 顆加上 3 顆後為 9 顆；增加的是散出數量，不會增加手雷箱的投擲充能。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/78f209fd-3e8b-456d-954d-c67fdf6e23ee" width="32" height="32" alt="破骨者之環天賦圖示"> [破骨者之環](#ogryn_melee_damage_coherency_improved)<br>- Bonebreaker's Aura | <ul><li>「破骨者之環」使你和協同範圍內隊友的近戰攻擊傷害提高 10%。</li><li>這是基礎近戰光環的強化版本，採用 10% 數值，不會再把基礎 7.5% 額外相加。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/4b71152f-747b-450c-9d3a-82a313fc8360" width="32" height="32" alt="優勝劣汰天賦圖示"> [優勝劣汰](#ogryn_damage_vs_suppressed_coherency)<br>- Coward Culling | <ul><li>「優勝劣汰」使你和協同範圍內隊友對受壓制敵人的傷害提高 20%；另使你造成的壓制提高 25%。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/014cd689-2381-43e8-9241-b0a13af77036" width="32" height="32" alt="跟緊我！天賦圖示"> [跟緊我！](#ogryn_toughness_regen_aura)<br>- Stay Close! | <ul><li>「跟緊我！」使你和協同範圍內隊友符合條件的韌性恢復量提高 20%。</li><li>這項效果提高每次恢復量，不會自行啟動韌性恢復，也不會把自然恢復速度提高 20%。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/01a8e7be-dff3-4d81-a426-5e38ae352606" width="32" height="32" alt="忠誠守護者天賦圖示"> [忠誠守護者](#ogryn_taunt_shout)<br>- Loyal Protector | <ul><li>嘲諷周圍 12 公尺敵人 15 秒；第 3、6 秒再次施放。</li><li>只有首次造成踉蹌；基礎冷卻 50 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/582a28cf-14c5-4757-a51c-cb5924dbf0a3" width="32" height="32" alt="不屈不撓天賦圖示"> [不屈不撓](#ogryn_longer_charge)<br>- Indomitable | <ul><li>衝鋒最遠 24 公尺，撞到巨獸停止；基礎冷卻 25 秒。</li><li>結束後 5 秒，近戰攻速與移速提高 25%。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/1a42e740-0c91-48e5-9092-e88d3f06b532" width="32" height="32" alt="貼身火力天賦圖示"> [貼身火力](#ogryn_special_ammo)<br>- Point-Blank Barrage | <ul><li>切換並裝填遠程武器，12 秒內射速提高 25%、換彈速度提高 65%。</li><li>近距離傷害提高 15%，架槍減速減半；結束時返還計入彈藥的 50%。</li><li>基礎冷卻 60 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/0932d1f6-96b1-47d9-ad81-861fe9914d9a" width="32" height="32" alt="跺殺之靴天賦圖示"> [跺殺之靴](#ogryn_charge_toughness)<br>- Stomping Boots | <ul><li>衝鋒期間每次撞中敵人，恢復最大韌性的 10%。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/9194fb70-c794-460d-af2a-068ae6c4fd31" width="32" height="32" alt="粉碎天賦圖示"> [粉碎](#ogryn_charge_applies_bleed)<br>- Pulverise | <ul><li>衝鋒命中施加 5 層流血；同一衝鋒對同一敵人只施加一次。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/a6d612af-aed7-465e-aa07-e23fc7255876" width="32" height="32" alt="再來天賦圖示"> [再來](#ogryn_taunt_staggers_reduce_cooldown)<br>- Go Again! | <ul><li>近戰或推擊命中踉蹌中的敵人，恢復 1.5% 技能充能；所有目標共用 0.1 秒間隔。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/708231ab-86cd-44b4-8f01-0d0fe8413ede" width="32" height="32" alt="槍林彈雨天賦圖示"> [槍林彈雨](#ogryn_special_ammo_armor_pen)<br>- Hail of Fire | <ul><li>貼身火力期間，遠程傷害提高 15%，並獲得 15% 撕裂。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/6f504222-c9bf-4dff-a549-138c3be3bde4" width="32" height="32" alt="集火射擊天賦圖示"> [集火射擊](#ogryn_special_ammo_fire_shots)<br>- Light 'em Up | <ul><li>貼身火力期間，遠程命中施加 4 層燃燒，最多補至 16 層。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/594ab4d6-12e3-4941-bf1a-c5812b128b23" width="32" height="32" alt="重要干擾天賦圖示"> [重要干擾](#ogryn_taunt_damage_taken_increase)<br>- Valuable Distraction | <ul><li>忠誠守護者使受影響敵人承受的傷害提高 20%，持續 15 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/53442500-ad2a-446b-9f9b-0d26aa2438d9" width="32" height="32" alt="壯膽子彈天賦圖示"> [壯膽子彈](#ogryn_ranged_stance_toughness_regen)<br>- Bullet Bravado | <ul><li>貼身火力期間，每次射擊恢復 2.5% 最大韌性，換彈恢復 15%。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/80ee299a-c486-4957-bf40-6b1d631fd748" width="32" height="32" alt="一點都不痛！天賦圖示"> [一點都不痛！](#ogryn_taunt_restore_toughness)<br>- No Pain! | <ul><li>每次嘲諷立即恢復 10% 最大韌性。</li><li>每名受影響敵人另提供每秒 0.5% 恢復，最多每秒 10%，持續 3.25 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/fa5d9c18-f792-4a86-812f-8547ba3cf89e" width="32" height="32" alt="踐踏天賦圖示"> [踐踏](#ogryn_charge_trample)<br>- Trample | <ul><li>衝鋒命中每次增加 2.5% 傷害，最多 20 層、50%，持續 10 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/ea712cab-0dd4-47fa-a2c5-98edb7e41783" width="32" height="32" alt="爆限超載天賦圖示"> [爆限超載](#ogryn_leadbelcher_no_ammo_chance)<br>- Burst Limiter Override | <ul><li>遠程攻擊有 15% 基礎機率觸發幸運子彈，觸發的射擊不消耗彈藥。</li><li>遠程擊殺每層增加 2% 遠程傷害，最多 10 層；加層時重設 10 秒期限。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/9436a125-4e9f-4655-ae8f-4975db2f4af1" width="32" height="32" alt="麻木天賦圖示"> [麻木](#ogryn_carapace_armor)<br>- Feel No Pain | <ul><li>開始時有 10 層麻木；每層增加韌性恢復，並使韌性所受傷害再乘以 0.97。</li><li>受到有效傷害時最多每秒失去一層；未滿層時每隔 2 秒恢復一層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/6ad5a8ad-f1c2-4c43-997a-02b89543ebd9" width="32" height="32" alt="重拳出擊天賦圖示"> [重拳出擊](#ogryn_passive_heavy_hitter)<br>- Heavy Hitter | <ul><li>近戰命中累積重拳出擊：一般命中增加 1 層，重擊命中增加 2 層。</li><li>每層增加 3% 近戰傷害，最多 8 層；新增層數會重設 7.5 秒期限。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/ee3a1966-a7c3-442f-a852-74a8b8ada09c" width="32" height="32" alt="痛楚爆發天賦圖示"> [痛楚爆發](#ogryn_carapace_armor_trigger_on_zero_stacks)<br>- Pained Outburst | <ul><li>麻木失去一層後降至 4 層或更低時，會擊退附近敵人並恢復最大韌性的 50%。</li><li>此效果每 30 秒最多觸發一次；擊退爆發不造成直接傷害。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/3d442f9a-0143-43d7-a6e2-10a5d6b8a9f8" width="32" height="32" alt="最強壯！天賦圖示"> [最強壯！](#ogryn_carapace_armor_add_stack_on_push)<br>- Strongest! | <ul><li>推搡至少一名敵人時，麻木恢復 1 層。</li><li>麻木最多 10 層；一次推搡推中多人也只恢復 1 層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/d6e55419-0e35-49cc-9bd6-163bdff037d4" width="32" height="32" alt="最堅韌！天賦圖示"> [最堅韌！](#ogryn_carapace_armor_more_toughness)<br>- Toughest! | <ul><li>「最堅韌！」讓麻木每層額外增加 2.5% 韌性恢復量。</li><li>與麻木本身每層 3% 相加；滿 10 層合計增加 55%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/47256097-2109-4fe4-89b7-b4a224ff1200" width="32" height="32" alt="最大火力天賦圖示"> [最大火力](#ogryn_leadbelcher_cooldown_reduction)<br>- Maximum Firepower | <ul><li>幸運子彈觸發後，2.5 秒內約每秒額外恢復 1 秒戰鬥技能冷卻。</li><li>再次觸發重設持續時間，不提高每次恢復量。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/048770ea-349f-42a0-b5a1-c582fbfde7f8" width="32" height="32" alt="好槍法天賦圖示"> [好槍法](#ogryn_leadbelcher_crits)<br>- Good Shootin' | <ul><li>觸發幸運子彈的射擊命中時，該次攻擊必定暴擊。</li><li>沒有命中時不會造成暴擊命中；此效果不改變幸運子彈機率。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/11755251-3d1b-4b31-867c-47acaea88760" width="32" height="32" alt="子彈風暴天賦圖示"> [子彈風暴](#ogryn_blo_ally_ranged_buffs)<br>- Bulletstorm | <ul><li>觸發幸運子彈時，你和協同範圍內的隊友獲得 +15% 遠程傷害，持續 8 秒。</li><li>再次觸發會把效果時間重新延長為 8 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/a9ec95cc-0b91-4558-81b5-faefcf1207d7" width="32" height="32" alt="激鬥戰火天賦圖示"> [激鬥戰火](#ogryn_blo_wield_speed)<br>- Heat of Battle | <ul><li>「激鬥戰火」讓爆限超載每層另增加 1.5% 遠程射速。</li><li>沿用遠程擊殺累積的 10 層、每次加層重設 10 秒倒數；滿層增加 15% 遠程射速。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/5c8fc9b0-2f06-4311-87f7-511d4c6ce6d5" width="32" height="32" alt="退後！天賦圖示"> [退後！](#ogryn_blo_melee)<br>- Back Off! | <ul><li>近戰擊殺可提高下一次射擊觸發幸運子彈的機率，每層增加 10 個百分點。</li><li>最多累積 10 層；下一次射擊後清空，該次即使觸發幸運子彈而免耗彈藥也會消耗層數。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/83bead6b-330f-466e-8c25-c7d383843b1c" width="32" height="32" alt="毫髮無傷天賦圖示"> [毫髮無傷](#ogryn_heavy_hitter_tdr)<br>- Don't Feel a Thing | <ul><li>重拳出擊每層降低 1.25% 韌性所受傷害。</li><li>滿 8 層時，韌性所受傷害降低 10%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/9c42800c-a3bc-469c-be04-1231b90bca3b" width="32" height="32" alt="強力劈砍天賦圖示"> [強力劈砍](#ogryn_heavy_hitter_cleave)<br>- Great Cleaver | <ul><li>重拳出擊每層增加 12.5% 近戰順劈容量。</li><li>最多 8 層；滿層使可順劈容量加倍。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/82795688-8a0b-4db1-871c-1302a8f33299" width="32" height="32" alt="越戰越勇天賦圖示"> [越戰越勇](#ogryn_heavy_hitter_max_stacks_improves_toughness)<br>- Unstoppable | <ul><li>重拳出擊每層使近戰擊殺恢復的韌性額外增加 15%。</li><li>最多 8 層；滿層時，近戰擊殺恢復量為基礎值的 2.2 倍。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/e8883b71-72ad-4780-92e7-395f6a32ead8" width="32" height="32" alt="震撼衝擊天賦圖示"> [震撼衝擊](#ogryn_heavy_hitter_stagger)<br>- Impactful | <ul><li>重拳出擊每層增加 7.5% 近戰衝擊效果。</li><li>最多 8 層；滿層增加 60% 近戰衝擊。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/93481225-465f-4750-a4f3-28602e723b40" width="32" height="32" alt="熱身完畢天賦圖示"> [熱身完畢](#ogryn_heavy_hitter_max_stacks_improves_attack_speed)<br>- Just Getting Started! | <ul><li>「熱身完畢！」在重拳出擊達到 8 層時增加 10% 攻擊速度。</li><li>重拳出擊低於 8 層後，額外攻速消失。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/67294825-4742-461c-8445-8eabf69981d3" width="32" height="32" alt="最好的防禦天賦圖示"> [最好的防禦](#ogryn_multi_heavy_toughness)<br>- The Best Defence | <ul><li>一次近戰攻擊命中至少 2 名敵人時，恢復 5% 最大韌性。</li><li>重擊符合條件時，改為恢復 15% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/bdf5653a-6df6-4998-a781-ae623083055a" width="32" height="32" alt="碾碎它們！天賦圖示"> [碾碎它們！](#ogryn_single_heavy_toughness)<br>- Smash 'Em! | <ul><li>一次近戰攻擊命中恰好 1 名敵人時，恢復 5% 最大韌性。</li><li>重擊符合條件時，改為恢復 15% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/47f9eea2-c58f-4ed3-8678-e42d2ec1701f" width="32" height="32" alt="關鍵人物天賦圖示"> [關鍵人物](#ogryn_increased_coherency_toughness)<br>- Lynchpin | <ul><li>自身的協同韌性恢復速度提高 100%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f61476bf-8738-40b1-8c66-63980d690cc7" width="32" height="32" alt="射不停天賦圖示"> [射不停](#ogryn_reload_speed_on_empty)<br>- Keep Shooting | <ul><li>彈匣清空後開始換彈，換彈速度提高 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/aeba8245-43aa-438c-9357-a7ac4556a98d" width="32" height="32" alt="怒不可遏天賦圖示"> [怒不可遏](#ogryn_more_hits_more_damage)<br>- Furious | <ul><li>前一次近戰攻擊每命中 1 名敵人，下次近戰傷害增加 3%，最多 30%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c006f0e1-3f32-4dcc-891a-8c44b4ebe6df" width="32" height="32" alt="重量級天賦圖示"> [重量級](#ogryn_ogryn_killer)<br>- Heavyweight | <ul><li>對堡壘、碾壓者、收割者與瘟疫歐格林造成的傷害提高 30%。</li><li>受到這些敵人的傷害降低 30%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ee98056a-b754-4821-9542-717ef68c944a" width="32" height="32" alt="猛擊天賦圖示"> [猛擊](#ogryn_melee_stagger)<br>- Slam | <ul><li>近戰衝擊提高 25%；近戰或推擊使敵人踉蹌時恢復 5% 耐力。</li><li>耐力恢復有 0.75 秒冷卻。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/53e0b90e-52dc-4a4a-953c-b235753aa97a" width="32" height="32" alt="削弱敵人天賦圖示"> [削弱敵人](#ogryn_targets_recieve_damage_taken_increase_debuff)<br>- Soften Them Up | <ul><li>近戰造成傷害後，使存活敵人在 5 秒內受到的傷害提高 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/72cbf891-ecd4-425c-8d46-97cb4d4863f9" width="32" height="32" alt="堅韌不屈天賦圖示"> [堅韌不屈](#ogryn_toughness_on_low_health)<br>- Too Stubborn to Die | <ul><li>生命低於 50% 時，韌性恢復量提高 100%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/dbfbaef7-b829-41cf-96cb-a9d09192cfbd" width="32" height="32" alt="重毆天賦圖示"> [重毆](#ogryn_heavy_bleeds)<br>- Batter | <ul><li>造成傷害的近戰命中施加 1 層流血，重擊改為 4 層。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/206be198-2a5f-426f-944a-8d85fd74f1d6" width="32" height="32" alt="沉重打擊天賦圖示"> [沉重打擊](#ogryn_staggering_increases_damage)<br>- Hard Knocks | <ul><li>近戰或推擊使敵人踉蹌後，其受到的近戰傷害提高 15%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/01fd23cb-46d2-41fa-bfc3-d8b1d17f43a3" width="32" height="32" alt="勢不可擋天賦圖示"> [勢不可擋](#ogryn_movement_speed_after_ranged_kills)<br>- Unstoppable Momentum | <ul><li>遠程擊殺後，移動速度提高 20%，持續 3 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fab49cb9-e155-47d2-8b8c-2ad8235a0f48" width="32" height="32" alt="彈藥儲存包天賦圖示"> [彈藥儲存包](#ogryn_increased_ammo_reserve)<br>- Ammo Stash | <ul><li>備用彈藥容量增加 25%，不增加彈匣容量。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/cf916d47-2e00-43d4-98b7-307222a056e6" width="32" height="32" alt="領跑者天賦圖示"> [領跑者](#ogryn_multi_hits_grant_reload_speed)<br>- Pacemaker | <ul><li>短時間命中至少 3 名不同敵人，下一次換彈速度提高 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5a19ac08-20bc-41ee-8af1-bbc6194fa852" width="32" height="32" alt="發現更多天賦圖示"> [發現更多](#ogryn_free_reload_after_ability)<br>- Found Some More | <ul><li>每約 15 秒恢復最大備用彈藥的 1%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/58952102-1822-4093-81f9-48b8cbc8f8a7" width="32" height="32" alt="絕不屈服天賦圖示"> [絕不屈服](#ogryn_knocked_allies_grant_damage_reduction)<br>- Won't Give In | <ul><li>20 公尺內每名需要救援的隊友提供 20% 減傷，最多 60%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e9d72852-9fa6-4e02-aded-e261adb660f0" width="32" height="32" alt="嘎嘎！天賦圖示"> [嘎嘎！](#ogryn_fully_charged_attacks_gain_damage_and_stagger)<br>- Crunch! | <ul><li>蓄力累積近戰傷害與衝擊力，每層 7.5%，最多 30%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/669fb8b0-a444-4216-abe1-74f4acc4af85" width="32" height="32" alt="毀滅之樂天賦圖示"> [毀滅之樂](#ogryn_nearby_bleeds_reduce_damage_taken)<br>- Delight in Destruction | <ul><li>8 公尺內每名流血敵人提供 5% 減傷，最多 30%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a51567af-44cb-46ba-9908-3e3502dcbcdb" width="32" height="32" alt="韌性減傷天賦圖示"> [韌性減傷](#base_toughness_damage_reduction_node_buff_medium_1)<br>- Toughness Damage Reduction | <ul><li>韌性傷害減免增加 10 個百分點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/9af41f8c-0f0e-4b2b-965e-c0d01fea2746" width="32" height="32" alt="相親相愛好夥伴！天賦圖示"> [相親相愛好夥伴！](#ogryn_damage_taken_by_all_increases_strength_tdr)<br>- No Hurting Friends! | <ul><li>自己或協同隊友受傷時，每層增加 2% 威力，最多 5 層。</li><li>滿層額外減少 15% 韌性傷害。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/895c3ccd-387f-4862-9a2b-b429ff5d6432" width="32" height="32" alt="全神貫注天賦圖示"> [全神貫注](#ogryn_ally_movement_boost_on_ability)<br>- Get Stuck In | <ul><li>施放戰鬥技能後，你與協同隊友提高 20% 移動速度，持續 6 秒。</li><li>期間免疫眩暈與壓制。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/bb088b60-c1e8-42a7-b68e-3ef59f5d9eb9" width="32" height="32" alt="利刃出鞘天賦圖示"> [利刃出鞘](#ogryn_windup_reduces_damage_taken)<br>- Implacable | <ul><li>近戰重擊蓄力期間，受到的傷害減少 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d80b562f-7fc2-4daf-85e4-ae25f8171a89" width="32" height="32" alt="誰敢攔我！天賦圖示"> [誰敢攔我！](#ogryn_windup_is_uninterruptible)<br>- No Stopping Me! | <ul><li>近戰重擊蓄力不易受打斷，並移除蓄力動作的移動減速。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/7e27b3b4-5eca-49b5-aafd-c8abc6635b14" width="32" height="32" alt="屠殺天賦圖示"> [屠殺](#ogryn_kills_grant_crit_chance)<br>- Massacre | <ul><li>每次擊殺增加 2 個百分點爆擊率，最多 8 層，持續 12 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5d6152a6-dedb-49c4-a7d2-328d082084c0" width="32" height="32" alt="報復時間天賦圖示"> [報復時間](#ogryn_revenge_damage)<br>- Payback Time | <ul><li>成功閃避近戰攻擊，或被近戰命中後，傷害提高 15%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/0eb640b4-e206-4d0b-a982-f74b33baf5b2" width="32" height="32" alt="主宰天賦圖示"> [主宰](#ogryn_rending_on_elite_kills)<br>- Dominate | <ul><li>擊殺精英後獲得 15% 撕裂，持續 10 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/27fcc279-9828-4df7-b895-04956bb2463b" width="32" height="32" alt="換彈完畢天賦圖示"> [換彈完畢](#ogryn_reloading_grants_damage)<br>- Reloaded and Ready | <ul><li>換彈後，遠程傷害提高 15%，持續 8 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c6421034-209b-4fab-857d-541fa0667d8b" width="32" height="32" alt="大爆炸天賦圖示"> [大爆炸](#ogryn_increase_explosion_radius)<br>- Big Boom | <ul><li>爆炸半徑增加 27.5%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/b35eb9be-169c-48cf-a295-329eae3a3610" width="32" height="32" alt="睚眥必報天賦圖示"> [睚眥必報](#ogryn_blocking_reduces_push_cost)<br>- No Pushover | <ul><li>每 8 秒可發動一次強化推擊，衝擊力增加 250%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/119478f3-6425-4e96-9f26-e0df95a4bf1e" width="32" height="32" alt="渴求關注天賦圖示"> [渴求關注](#ogryn_blocking_ranged_taunts)<br>- Attention Seeker | <ul><li>格擋敵人攻擊或推擊敵人，嘲諷該敵人 8 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d61a8184-294b-4ade-9847-3c5241828792" width="32" height="32" alt="為了小子們天賦圖示"> [為了小子們](#ogryn_protect_allies)<br>- For the Lil'Uns | <ul><li>隊友韌性破裂後，提高 10% 威力並獲得 25% 韌性減傷，持續 10 秒。</li><li>隊友倒地後，提高 25% 扶起速度並免疫眩暈，持續 10 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c5cc14b1-1227-4449-a1d9-de912e048e6e" width="32" height="32" alt="頭腦簡單天賦圖示"> [頭腦簡單](#ogryn_corruption_resistance)<br>- Simple Minded | <ul><li>受到的腐敗減少 40%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fca0827b-6dac-4c44-b92e-8aba309ff4ca" width="32" height="32" alt="專注鬥士天賦圖示"> [專注鬥士](#ogryn_melee_attacks_give_mtdr)<br>- Focused Fighter | <ul><li>每次近戰揮擊命中後獲得 4% 近戰減傷，最多 5 層。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/024bec9b-772c-4313-b7b8-d119efdcf8f1" width="32" height="32" alt="蠻橫之力天賦圖示"> [蠻橫之力](#ogryn_pushing_applies_brittleness)<br>- Brutish Strength | <ul><li>推擊施加 4 層脆弱，合計 10%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c78dbead-adf5-4b9e-9629-9a3a0a93ae8c" width="32" height="32" alt="火力全開天賦圖示"> [火力全開](#ogryn_explosions_burn)<br>- Fire Away | <ul><li>爆炸施加 1 層燃燒，爆炸中心區域改為 2 層，最多 8 層。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/3ff7d7eb-6206-4d77-91c5-483259320072" width="32" height="32" alt="堅不可摧天賦圖示"> [堅不可摧](#ogryn_block_all_attacks)<br>- Unbreakable | <ul><li>完美格擋可擋下原本不可格擋的近戰攻擊。</li><li>完美格擋後，下一次近戰傷害提高 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/15edb762-d209-407d-8bd5-fc0672bd5ef8" width="32" height="32" alt="士氣高昂天賦圖示"> [士氣高昂](#ogryn_damage_reduction_on_high_stamina)<br>- Pumped Up | <ul><li>耐力高於 75% 時，受到的傷害減少 12.5%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/de5091de-3dd6-455b-875a-55228eb4d67e" width="32" height="32" alt="好運連連天賦圖示"> [好運連連](#ogryn_crit_damage_increase)<br>- Lucky Streak | <ul><li>暴擊時，額外傷害部分增加 75%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5f6d651a-4c88-40ea-a96b-3133459df2f4" width="32" height="32" alt="狂暴猛擊天賦圖示"> [狂暴猛擊](#ogryn_stacking_attack_speed)<br>- Frenzied Blows | <ul><li>連續近戰命中從第二次起累積攻速，每層 2.5%，最多 5 層。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/373afc07-72d5-4815-91c0-0e5d0d02d279" width="32" height="32" alt="擊潰他們天賦圖示"> [擊潰他們](#ogryn_melee_damage_after_heavy)<br>- Beat Them Back | <ul><li>重擊命中後，近戰傷害提高 15%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d21c7405-647a-4da2-a396-16b9c5cd8819" width="32" height="32" alt="專注天賦圖示"> [專注](#ogryn_drain_stamina_for_handling)<br>- Concentrate | <ul><li>架槍時消耗耐力，降低 60% 晃動、20% 散布與 15% 後座力。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6fbf8a63-5e26-482f-9964-01eb0598b142" width="32" height="32" alt="大肌肌天賦圖示"> [大肌肌](#ogryn_damage_reduction_after_elite_kill)<br>- Strongman | <ul><li>擊殺精英或專家後，受到的傷害減少 10%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ce3b22d4-870e-4496-96fc-33601f9d9a62" width="32" height="32" alt="穩定握持天賦圖示"> [穩定握持](#ogryn_toughness_while_bracing)<br>- Steady Grip | <ul><li>架槍或射擊時，每秒恢復最大韌性的 12.5%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/b7e2a92b-0a60-459a-87c9-6276b204f64e" width="32" height="32" alt="休想再打中我......天賦圖示"> [休想再打中我......](#ogryn_ranged_damage_immunity)<br>- Can't Hit Me...Again | <ul><li>受到遠程傷害後，獲得 20% 遠程減傷，持續 2.5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5974d1c4-5b31-42b8-af90-022202c4614e" width="32" height="32" alt="熟能生巧天賦圖示"> [熟能生巧](#ogryn_wield_speed_increase)<br>- Dedicated Practice | <ul><li>武器切換速度提高 35%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/eeae1229-b245-43fc-9840-960c36f5787e" width="32" height="32" alt="射盡殺戮天賦圖示"> [射盡殺戮](#ogryn_ranged_improves_melee)<br>- Spray and Slay | <ul><li>打空彈匣後，提高 15% 近戰傷害與 7.5% 近戰攻速，持續 6 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fdf1eb1f-b76f-4452-beac-f2205fc32d2b" width="32" height="32" alt="猛砸爆裂天賦圖示"> [猛砸爆裂](#ogryn_melee_improves_ranged)<br>- Bash and Blast | <ul><li>每次近戰擊殺增加 3% 遠程傷害，最多 5 層，持續 10 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/9e138d4c-f301-46c6-9eef-5aff038efc7c" width="32" height="32" alt="格鬥兵天賦圖示"> [格鬥兵](#ogryn_ally_elite_kills_grant_cooldown)<br>- Bruiser | <ul><li>自己或協同隊友擊殺精英後，持續 4 秒額外恢復戰鬥技能冷卻。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/dae8db6d-b212-4abd-a84b-246c0910e0b3" width="32" height="32" alt="精準打擊天賦圖示"> [精準打擊](#ogryn_weakspot_damage)<br>- Strike True | <ul><li>近戰命中弱點時，威力提高 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/38b1d6e0-b6a5-4692-92a2-fe6caf0b9083" width="32" height="32" alt="機動部署天賦圖示"> [機動部署](#ogryn_bracing_reduces_damage_taken)<br>- Mobile Emplacement | <ul><li>架槍或射擊期間，受到的傷害減少 25%。</li></ul> | 技能 |

---

## 閃擊

<a id="ogryn_box_explodes"></a>
### 投彈完畢！(Bombs Away!)

<img src="https://github.com/user-attachments/assets/a7e97984-e57a-4028-ab1b-6e89a0e42fdf" width="72" height="72" alt="投彈完畢！天賦圖示">

- **命中與散出**：手雷箱命中敵人後破開，基礎散出 6 顆；搭配「超巨量傷害箱」時，數量為 6 + 3 = 9 顆。

- **直接命中算例**：按標準威力 500、近距離、沒有其他修正計算，手雷箱直接撞擊甲殼護甲的傷害為 1850 × 0.15 = 277.5 點；這只計箱子碰撞，不含散出手雷的爆炸。

- **散出手雷引信**：一般 6 顆時，第 1 顆約在散出後 1.2–1.6 秒爆炸，第 6 顆約在 3.2–5.6 秒爆炸；若增加到 9 顆，第 9 顆的設定範圍為 4.4–8.0 秒。

- **充能**：最多可投出 3 箱；每投出一箱消耗 1 次。能力沒有固定秒數的自動冷卻，缺少的充能須由補給或其他恢復效果補回。

- **子手雷算例**：一般子手雷爆炸半徑 8 公尺、中心 2 公尺；不計其他修正，中心對無甲目標每顆造成 10 × 1 = 10 點，甲殼為 10 × 0.2 = 2 點。6 顆全部在中心命中同一無甲目標時為 60 點，並不把箱體的 1850 點傷害複製到每顆手雷。

[詳細資料](ogryn_box_explodes.md) · [返回目錄](#talent-index)

---

<a id="ogryn_grenade_frag"></a>
### 破片炸彈(Frag Bomb)

<img src="https://github.com/user-attachments/assets/ce691c05-0701-4539-921b-620c90189fa2" width="72" height="72" alt="破片炸彈天賦圖示">

- **爆炸距離**：爆心 2 公尺內使用近距離傷害設定；2 至 16 公尺之間套用外圍衰減。

- **傷害算例**：只計中心 2 公尺內的一般傷害、標準威力與無其他修正，無甲傷害部分為 1500 × 1 = 1500 點；甲殼倍率取範圍中點 1.025 時，為 1500 × 1.025 = 1537.5 點。符合必殺條件的敵人另依必殺效果處理。

- **引信時序**：未碰撞時約 2 秒引爆；碰撞會重設計時，改採約 0.9 秒的撞擊引信。連續彈跳可能再次重設時間，不能把 2 秒當成每次投出的固定爆炸時刻。

- **補給與必殺**：最多攜帶 1 顆，需要手雷補給，不會按秒自動補充。爆炸命中符合條件的普通敵人會直接致命；巨獸、連長與歐格林不適用這項必殺。

[詳細資料](ogryn_grenade_frag.md) · [返回目錄](#talent-index)

---

<a id="ogryn_grenade_friend_rock"></a>
### 投石問路(Big Friendly Rock)

<img src="https://github.com/user-attachments/assets/641d8592-01cf-4120-ae26-b53ea1a58776" width="72" height="72" alt="投石問路天賦圖示">

- **直接命中算例**：按標準威力 500、一般近距離命中且沒有其他修正計算，無甲目標為 1200 × 1 = 1200 點；甲殼護甲為 1200 × 0.25 = 300 點。

- **數量與補充**：最多持有 4 顆，約每 45 秒補回 1 顆，依序恢復；從零顆開始且沒有其他修正，補滿需 4 × 45 = 180 秒。岩石不靠撿取手雷補給補充。

- **搭配那下不算！**：命中弱點，或整次投擲未命中任何可受傷害的目標時，可返還 1 顆，每 5 秒最多一次；命中可破壞物品也可能使「未命中」條件失效。

- **特殊敵人**：岩石可直接擊殺專家敵人，並對特定敵人另有必殺設定；這些情況不以一般傷害算例決定是否擊殺。

[詳細資料](ogryn_grenade_friend_rock.md) · [返回目錄](#talent-index)

---

<a id="ogryn_replenish_rock_on_miss"></a>
### 那下不算！(That One Didn't Count)

<img src="https://github.com/user-attachments/assets/3d000b06-db5c-4ff3-96c9-54d09216587d" width="72" height="72" alt="那下不算！天賦圖示">

- **觸發條件**：岩石命中至少一個弱點，或整次投擲沒有命中可受傷害的目標時，返還 1 顆。撞到地形仍可算落空；命中可破壞物品則可能失去落空資格。

- **充能算例**：投出最後一顆後若該次符合條件，會恢復為 1 顆；每次只恢復 1 顆，總數不超過 4 顆。

- **冷卻算例**：從前一次返還起算 5 秒；若第二顆岩石在第 4 秒結束飛行，即使符合返還條件也不會恢復。以投射物結束時計算，不只比較兩次按下投擲的時間。

[詳細資料](ogryn_replenish_rock_on_miss.md) · [返回目錄](#talent-index)

---

<a id="ogryn_big_box_of_hurt_more_bombs"></a>
### 超巨量傷害箱(Bigger Box of Hurt)

<img src="https://github.com/user-attachments/assets/13c08b08-ef80-4f04-8a70-cddfa4db7389" width="72" height="72" alt="超巨量傷害箱天賦圖示">

- **數量算例**：手雷箱基礎散出 6 顆；選取此天賦後多 3 顆，合計為 6 + 3 = 9 顆。

- **作用範圍**：這項效果只增加手雷箱散出的手雷數量，不會額外提供一種手雷能力。

- **疊層與冷卻**：此天賦只有一個效果，不會因同一次命中重複累加；手雷箱仍最多有 3 次投擲充能。

[詳細資料](ogryn_big_box_of_hurt_more_bombs.md) · [返回目錄](#talent-index)

---


---

## 光環

<a id="ogryn_melee_damage_coherency_improved"></a>
### 破骨者之環(Bonebreaker's Aura)

<img src="https://github.com/user-attachments/assets/78f209fd-3e8b-456d-954d-c67fdf6e23ee" width="72" height="72" alt="破骨者之環天賦圖示">

- **生效條件**：你或協同範圍內隊友取得此光環時，近戰攻擊傷害提高 10%；持有者本人也在協同範圍計算內。

- **傷害算例**：原本造成 100 點近戰傷害，沒有其他修正時為 100 × 1.10 = 110 點。 若同階段另有 20% 加成，則為 100 × (1 + 20% + 10%) = 130 點。

- **疊層與冷卻**：光環效果最多 1 層，沒有獨立冷卻；此 10% 是強化後的數值，不再加上基礎 7.5%。

[詳細資料](ogryn_melee_damage_coherency_improved.md) · [返回目錄](#talent-index)

---

<a id="ogryn_damage_vs_suppressed_coherency"></a>
### 優勝劣汰(Coward Culling)

<img src="https://github.com/user-attachments/assets/4b71152f-747b-450c-9d3a-82a313fc8360" width="72" height="72" alt="優勝劣汰天賦圖示">

- **生效條件**：目標處於受壓制狀態時，你和協同範圍內隊友對該目標造成的傷害提高 20%。

- **傷害算例**：對受壓制目標原本造成 100 點傷害，沒有其他修正時，本效果計為 100 × 1.20 = 120 點；未受壓制的目標不套用這項加成。

- **附帶效果與疊層**：天賦另使你造成的壓制提高 25%；光環效果最多 1 層、沒有獨立冷卻，而且與另外兩種歐格林光環需擇一。 例如原本一次造成 10 點壓制，現在為 10 × 1.25 = 12.5 點；這份壓制增幅只給自己。

[詳細資料](ogryn_damage_vs_suppressed_coherency.md) · [返回目錄](#talent-index)

---

<a id="ogryn_toughness_regen_aura"></a>
### 跟緊我！(Stay Close!)

<img src="https://github.com/user-attachments/assets/014cd689-2381-43e8-9241-b0a13af77036" width="72" height="72" alt="跟緊我！天賦圖示">

- **恢復效果**：你與協同範圍內的隊友，透過近戰擊殺、天賦等來源恢復韌性時，適用的恢復量提高 20%；特別指定不受恢復加成影響的效果除外。

- **恢復算例**：一筆原始恢復 15 點，沒有其他修正時變成 15 × 1.20 = 18 點；實際恢復仍受韌性缺口限制。 若只缺 5 點，就只能補 5 點。

- **疊層與冷卻**：光環效果最多 1 層，沒有獨立冷卻；它提高適用的恢復量，不會自行產生一筆恢復，也不提高協同自然恢復速度。

[詳細資料](ogryn_toughness_regen_aura.md) · [返回目錄](#talent-index)

---


---

## 能力

<a id="ogryn_taunt_shout"></a>
### 忠誠守護者(Loyal Protector)

<img src="https://github.com/user-attachments/assets/01a8e7be-dff3-4d81-a426-5e38ae352606" width="72" height="72" alt="忠誠守護者天賦圖示">

- **嘲諷效果**：嘲諷周圍 12 公尺內的敵人，使其優先攻擊你，持續 15 秒。首次施放也會使敵人踉蹌；惡魔宿主等被排除的敵人不受影響。

- **重複施放**：第 3 秒、第 6 秒各以你當時的位置再發出一次嘲諷，這兩次不再造成踉蹌；再次影響同一敵人會重設 15 秒時間。

- **時間算例**：敵人在第 0、3、6 秒都位於範圍內，最後一次嘲諷可持續至第 6 + 15 = 21 秒。能力基礎冷卻 50 秒，只有一層充能。

[詳細資料](ogryn_taunt_shout.md) · [返回目錄](#talent-index)

---

<a id="ogryn_longer_charge"></a>
### 不屈不撓(Indomitable)

<img src="https://github.com/user-attachments/assets/582a28cf-14c5-4757-a51c-cb5924dbf0a3" width="72" height="72" alt="不屈不撓天賦圖示">

- **衝鋒與冷卻**：向前衝鋒，最大距離從 12 公尺提高為 12 × 2 = 24 公尺，撞開沿途敵人；撞到巨獸會停止，地形也會限制距離。只有一層充能，基礎冷卻 25 秒。

- **衝鋒後增益**：衝鋒結束後，近戰攻速與移動速度提高 25%，持續 5 秒。受攻速控制的 1 秒動作變成 1 ÷ 1.25 = 0.8 秒；原本每秒移動 5 公尺，變成 6.25 公尺。

- **衝鋒防護**：保留基礎衝鋒期間的 25% 減傷；只計這份效果，100 點傷害變成 75 點。衝撞與結束衝擊本身不直接造成生命傷害；粉碎提供的流血另外計算。

[詳細資料](ogryn_longer_charge.md) · [返回目錄](#talent-index)

---

<a id="ogryn_special_ammo"></a>
### 貼身火力(Point-Blank Barrage)

<img src="https://github.com/user-attachments/assets/1a42e740-0c91-48e5-9092-e88d3f06b532" width="72" height="72" alt="貼身火力天賦圖示">

- **啟動與冷卻**：切換至遠程武器，立即從備用彈藥裝填彈匣；備用彈藥不足時只能裝入剩餘彈藥。效果持續 12 秒，基礎冷卻 60 秒，只有一層充能。

- **射速與換彈**：遠程射速提高 25%，換彈速度提高 65%。受速度控制的 1 秒射擊間隔變成 1 ÷ 1.25 = 0.8 秒；3 秒換彈動作變成 3 ÷ 1.65 ≈ 1.82 秒。

- **近距離與移動**：持有遠程武器時，近距離傷害增加 15%，並減半架槍與武器動作的移動懲罰。例如原本減速 40%，現在減速 20%；原速 5 公尺／秒，減速後由 3 提高到 4 公尺／秒。

- **彈藥返還**：效果結束時，依期間計入彈藥的 50% 補回備用彈藥。例如計入 20 發，返還 20 × 50% = 10 發。幸運子彈省下的彈藥也列入計算，補回量仍受可攜帶總量限制。

[詳細資料](ogryn_special_ammo.md) · [返回目錄](#talent-index)

---

<a id="ogryn_charge_toughness"></a>
### 跺殺之靴(Stomping Boots)

<img src="https://github.com/user-attachments/assets/0932d1f6-96b1-47d9-ad81-861fe9914d9a" width="72" height="72" alt="跺殺之靴天賦圖示">

- **恢復條件**：衝鋒期間撞中敵人，每次恢復最大韌性的 10%；衝鋒結束後的命中不再提供這筆恢復。

- **恢復算例**：最大韌性 100、連續撞中 3 次且缺額足夠時，恢復 100 × 10% × 3 = 30 點；若只缺 20 點，就只能補 20 點。其他韌性恢復加成另算。

[詳細資料](ogryn_charge_toughness.md) · [返回目錄](#talent-index)

---

<a id="ogryn_charge_applies_bleed"></a>
### 粉碎(Pulverise)

<img src="https://github.com/user-attachments/assets/9194fb70-c794-460d-af2a-068ae6c4fd31" width="72" height="72" alt="粉碎天賦圖示">

- **觸發方式**：衝鋒命中仍存活的敵人時，對其施加 5 層流血；同一次衝鋒對同一敵人只施加一次。

- **疊層與持續**：流血最多 16 層，再次施加重設 1.5 秒維持時間；每約 0.5 秒造成一次傷害。停止補層、維持時間結束後，會逐次減少層數。

- **傷害算例**：只計無護甲且沒有其他修正，5 層每次流血傷害為 87.5 × (5 ÷ 16)² × [3 − 2 × (5 ÷ 16)] ≈ 20.29 點；8 層為 43.75 點。流血層數與傷害不是單純等比例增加。

[詳細資料](ogryn_charge_applies_bleed.md) · [返回目錄](#talent-index)

---

<a id="ogryn_taunt_staggers_reduce_cooldown"></a>
### 再來(Go Again!)

<img src="https://github.com/user-attachments/assets/a6d612af-aed7-465e-aa07-e23fc7255876" width="72" height="72" alt="再來天賦圖示">

- **觸發方式**：近戰或推擊命中踉蹌中的敵人時，恢復戰鬥技能一格充能的 1.5%；兩次觸發至少間隔 0.1 秒。遠程、爆炸類型命中與嘲諷本身不觸發。

- **觸發補充**：已在踉蹌中的敵人也可觸發，不必重新造成踉蹌；所有目標共用 0.1 秒間隔，同時命中多人只計一次。

- **冷卻算例**：忠誠守護者的基礎冷卻為 50 秒，一次有效觸發補回 50 × 1.5% = 0.75 秒；10 次共補回 7.5 秒，另加期間自然恢復的冷卻。

[詳細資料](ogryn_taunt_staggers_reduce_cooldown.md) · [返回目錄](#talent-index)

---

<a id="ogryn_special_ammo_armor_pen"></a>
### 槍林彈雨(Hail of Fire)

<img src="https://github.com/user-attachments/assets/708231ab-86cd-44b4-8f01-0d0fe8413ede" width="72" height="72" alt="槍林彈雨天賦圖示">

- **生效條件**：貼身火力的 12 秒效果期間，遠程傷害提高 15%，並獲得 15% 撕裂。

- **傷害算例**：假設基礎傷害 100、對甲殼護甲原倍率 0.5，且忽略其他修正，原本為 50 點；同時計入本天賦的增傷與撕裂後，100 × 1.15 × (0.5 + 0.15) = 74.75 點。

- **護甲差異**：撕裂改善武器對特定護甲的傷害倍率；原倍率已達 1 時，超額部分只取四分之一。因此不能把撕裂也當成所有最終傷害一律提高 15%。

[詳細資料](ogryn_special_ammo_armor_pen.md) · [返回目錄](#talent-index)

---

<a id="ogryn_special_ammo_fire_shots"></a>
### 集火射擊(Light 'em Up)

<img src="https://github.com/user-attachments/assets/6f504222-c9bf-4dff-a549-138c3be3bde4" width="72" height="72" alt="集火射擊天賦圖示">

- **觸發方式**：貼身火力生效期間，遠程命中仍存活的敵人，每發對同一敵人施加 4 層燃燒；同一發的多次命中不重複加層。

- **層數與時間**：本天賦最多補至 16 層，連續命中 4 發可依序達 4、8、12、16 層；再次命中重設 4 秒維持時間。約每 0.5 秒造成一次傷害，維持時間結束後逐次減少層數。

- **傷害算例**：只計無護甲且無其他修正，每次燃燒傷害為 600 × (層數 ÷ 31)² × [3 − 2 × (層數 ÷ 31)]。4 層約 27.39 點，16 層約 314.51 點；這是單次結算，並非整段燃燒的總傷害。

[詳細資料](ogryn_special_ammo_fire_shots.md) · [返回目錄](#talent-index)

---

<a id="ogryn_taunt_damage_taken_increase"></a>
### 重要干擾(Valuable Distraction)

<img src="https://github.com/user-attachments/assets/594ab4d6-12e3-4941-bf1a-c5812b128b23" width="72" height="72" alt="重要干擾天賦圖示">

- **效果與持續**：受到忠誠守護者嘲諷波影響的敵人，15 秒內承受所有來源的傷害提高 20%；自己與隊友都能受益。後續嘲諷波可重新計時，不累加百分比。

- **傷害算例**：其他條件固定，原本 100 點傷害變成 100 × 1.2 = 120 點。若敵人同時受到削弱敵人的 15% 承傷加成，兩項處於不同階段，為 100 × 1.15 × 1.2 = 138 點。

[詳細資料](ogryn_taunt_damage_taken_increase.md) · [返回目錄](#talent-index)

---

<a id="ogryn_ranged_stance_toughness_regen"></a>
### 壯膽子彈(Bullet Bravado)

<img src="https://github.com/user-attachments/assets/53442500-ad2a-446b-9f9b-0d26aa2438d9" width="72" height="72" alt="壯膽子彈天賦圖示">

- **恢復方式**：貼身火力的 12 秒效果期間，每次射擊恢復最大韌性的 2.5%，每次換彈恢復 15%；不要求射擊命中敵人。 啟動能力時的自動裝填也可觸發這筆 15% 恢復。

- **恢復算例**：最大韌性 100、沒有其他加成，射擊 4 次後換彈一次，恢復 100 × (4 × 2.5% + 15%) = 25 點；只缺 10 點就只能補 10 點。

- **計數方式**：按射擊動作與換彈結算，並非每顆霰彈各恢復一次；連射、連發或特殊武器的射擊方式會影響實際觸發次數。

[詳細資料](ogryn_ranged_stance_toughness_regen.md) · [返回目錄](#talent-index)

---

<a id="ogryn_taunt_restore_toughness"></a>
### 一點都不痛！(No Pain!)

<img src="https://github.com/user-attachments/assets/80ee299a-c486-4957-bf40-6b1d631fd748" width="72" height="72" alt="一點都不痛！天賦圖示">

- **立即恢復**：忠誠守護者及第 3、6 秒的兩次重複嘲諷，每次立即恢復最大韌性的 10%，即使附近沒有敵人也會恢復。

- **持續恢復**：每次嘲諷每影響一名敵人，增加一層每秒恢復最大韌性 0.5% 的效果，最多 20 層、每秒 10%；效果持續 3.25 秒，再次加層重新計時。

- **分段算例**：最大韌性 100，三次嘲諷各影響 4 名敵人，立即恢復合計 100 × 10% × 3 = 30 點；持續恢復層數依序為 4、8、12，每秒恢復 2、4、6 點。

- **總量算例**：忽略更新誤差、期間一直有足夠缺額且沒有其他恢復加成時，前 3 秒恢復 2 × 3 = 6 點、接著 3 秒恢復 4 × 3 = 12 點、最後 3.25 秒恢復 6 × 3.25 = 19.5 點；加上立即恢復共 67.5 點。實際仍受每個時間點的韌性缺額限制。

[詳細資料](ogryn_taunt_restore_toughness.md) · [返回目錄](#talent-index)

---

<a id="ogryn_charge_trample"></a>
### 踐踏(Trample)

<img src="https://github.com/user-attachments/assets/fa5d9c18-f792-4a86-812f-8547ba3cf89e" width="72" height="72" alt="踐踏天賦圖示">

- **疊層方式**：衝鋒命中後增加一層踐踏，每層增加 2.5% 傷害，最多 20 層，持續 10 秒；再次命中重新計時，近戰與遠程傷害都能受益。

- **傷害算例**：4 次命中提供 10%，基礎 100 點變成 100 × (1 + 4 × 2.5%) = 110 點；滿 20 層為 150 點。若同階段另有 20% 增傷，滿層為 170 點。

- **命中計數**：每次衝撞命中都能加層；同一敵人若在衝鋒與結束衝擊中分別受到命中，可能計入不只一層。

[詳細資料](ogryn_charge_trample.md) · [返回目錄](#talent-index)

---


---

## 鑰石

<a id="ogryn_leadbelcher_no_ammo_chance"></a>
### 爆限超載(Burst Limiter Override)

<img src="https://github.com/user-attachments/assets/ea712cab-0dd4-47fa-a2c5-98edb7e41783" width="72" height="72" alt="爆限超載天賦圖示">

- **幸運子彈**：有彈藥的遠程攻擊以 15% 基礎機率判定；觸發時該次射擊不消耗彈藥。 例如原本耗用 1 發，觸發後改為 0 發；機率會依先前判定調整，不是每發互相獨立擲骰。

- **擊殺增傷**：遠程擊殺增加一層，每層提高 2% 遠程傷害，最多 10 層；再次擊殺會重設 10 秒期限。

- **算例**：5 次遠程擊殺增加 10% 遠程傷害；滿 10 層增加 20%，若基礎傷害為 100，則為 100 × 1.20 = 120。

[詳細資料](ogryn_leadbelcher_no_ammo_chance.md) · [返回目錄](#talent-index)

---

<a id="ogryn_carapace_armor"></a>
### 麻木(Feel No Pain)

<img src="https://github.com/user-attachments/assets/9436a125-4e9f-4655-ae8f-4975db2f4af1" width="72" height="72" alt="麻木天賦圖示">

- **初始與恢復**：麻木開始時有 10 層；失層後，至少經過 2 秒才會恢復一層，且距上次加層也須超過 2 秒。

- **受傷失層**：受到傷害或韌性吸收傷害時會失去一層；被格擋的攻擊不會移除麻木。同類受傷觸發最多每秒一次。

- **每層效果**：每層使韌性恢復量增加 3%；韌性所受傷害依乘法降為原來的 97%。選「最堅韌！」時，每層再增加 2.5% 韌性恢復量。

- **滿層算例**：10 層時，韌性恢復倍率為 1 + 10 × 3% = 1.30；搭配「最堅韌！」為 1.55。韌性傷害為 0.97^10 ≈ 0.737；原本 100 點韌性傷害約變成 73.7 點。 原本恢復 20 點時，滿層為 20 × 1.3 = 26 點；搭配最堅韌！則為 31 點，仍受缺額限制。

- **倒地時**：倒地會清除目前麻木層數，之後再逐層恢復。

[詳細資料](ogryn_carapace_armor.md) · [返回目錄](#talent-index)

---

<a id="ogryn_passive_heavy_hitter"></a>
### 重拳出擊(Heavy Hitter)

<img src="https://github.com/user-attachments/assets/6ad5a8ad-f1c2-4c43-997a-02b89543ebd9" width="72" height="72" alt="重拳出擊天賦圖示">

- **累積條件**：近戰命中增加層數；推搡不計，同一揮擊順劈到的後續目標不會重複增加層數。

- **層數與傷害**：一般命中增加 1 層，重擊命中增加 2 層；最多 8 層，每層增加 3% 近戰傷害，滿層增加 24%。

- **重新計時與算例**：每次新增層數都會重設 7.5 秒期限。4 次一般命中可增加 12%；滿 8 層時，基礎近戰傷害 100 變成 100 × (1 + 24%) = 124。

[詳細資料](ogryn_passive_heavy_hitter.md) · [返回目錄](#talent-index)

---

<a id="ogryn_carapace_armor_trigger_on_zero_stacks"></a>
### 痛楚爆發(Pained Outburst)

<img src="https://github.com/user-attachments/assets/ee3a1966-a7c3-442f-a852-74a8b8ada09c" width="72" height="72" alt="痛楚爆發天賦圖示">

- **觸發條件**：選取「痛楚爆發」後，麻木失去一層並降至可見 4 層或更低，且距上次觸發至少 30 秒時，才會觸發。

- **效果**：擊退自身 2.5 公尺內的敵人，並恢復最大韌性的 50%；這是擊退爆發，不會直接造成傷害。恢復量會套用麻木的韌性恢復加成，且不超過缺少的韌性。

- **算例**：失層後剩 4 層、未選「最堅韌！」時，基本恢復量為最大韌性的 50% × (1 + 4 × 3%) = 56%，再受缺少韌性限制。 例如最大韌性 100 且缺額足夠，可恢復 100 × 56% = 56 點；倒地時不提供這筆恢復。

[詳細資料](ogryn_carapace_armor_trigger_on_zero_stacks.md) · [返回目錄](#talent-index)

---

<a id="ogryn_carapace_armor_add_stack_on_push"></a>
### 最強壯！(Strongest!)

<img src="https://github.com/user-attachments/assets/3d442f9a-0143-43d7-a6e2-10a5d6b8a9f8" width="72" height="72" alt="最強壯！天賦圖示">

- **生效條件**：選取「最強壯！」後，推搡必須實際推中至少一名敵人，才會恢復 1 層麻木。

- **層數上限**：麻木最多 10 層；滿層時推搡不會超過上限。 推擊補層後，自然補層的 2 秒間隔會重新計時。

- **算例**：6 層時推中 1 名或 3 名敵人，都恢復至 7 層；10 層時再推中敵人仍維持 10 層。

[詳細資料](ogryn_carapace_armor_add_stack_on_push.md) · [返回目錄](#talent-index)

---

<a id="ogryn_carapace_armor_more_toughness"></a>
### 最堅韌！(Toughest!)

<img src="https://github.com/user-attachments/assets/d6e55419-0e35-49cc-9bd6-163bdff037d4" width="72" height="72" alt="最堅韌！天賦圖示">

- **生效條件**：同時選取麻木與「最堅韌！」後，每層麻木額外增加 2.5% 韌性恢復量。

- **公式與上限**：N 層時，本節點增加 2.5% × N；加上麻木本身的 3% × N，最多 10 層。

- **算例**：10 層時恢復倍率為 1 + 10 × 5.5% = 1.55；原本恢復 20 點時，理論恢復 31 點，實際不超過缺少的韌性。

[詳細資料](ogryn_carapace_armor_more_toughness.md) · [返回目錄](#talent-index)

---

<a id="ogryn_leadbelcher_cooldown_reduction"></a>
### 最大火力(Maximum Firepower)

<img src="https://github.com/user-attachments/assets/47256097-2109-4fe4-89b7-b4a224ff1200" width="72" height="72" alt="最大火力天賦圖示">

- **觸發條件**：幸運子彈觸發時啟動；普通射擊不會觸發此效果。

- **效果與重新計時**：持續 2.5 秒，約每秒補回 1 秒戰鬥技能冷卻；再次觸發重設 2.5 秒倒數，不會逐次提高恢復量。

- **時間算例**：完整收到兩次補回且冷卻尚未完成時，2.5 秒內共推進 2.5 + 2 × 1 = 4.5 秒冷卻。這筆補回按秒結算，不能直接把 2.5 秒當成完整的 5 秒進度。

[詳細資料](ogryn_leadbelcher_cooldown_reduction.md) · [返回目錄](#talent-index)

---

<a id="ogryn_leadbelcher_crits"></a>
### 好槍法(Good Shootin')

<img src="https://github.com/user-attachments/assets/048770ea-349f-42a0-b5a1-c582fbfde7f8" width="72" height="72" alt="好槍法天賦圖示">

- **生效條件**：必須先觸發幸運子彈，且該次射擊命中目標。

- **效果範圍**：只有觸發幸運子彈的那次命中必定暴擊，不會使後續射擊也必定暴擊。

- **傷害算例**：假設同一武器、護甲與部位下，普通傷害 100、暴擊額外傷害 50，幸運子彈命中時為 100 + 50 = 150 點。暴擊倍率依武器而異，並非一律兩倍；沒有命中就不造成傷害。

[詳細資料](ogryn_leadbelcher_crits.md) · [返回目錄](#talent-index)

---

<a id="ogryn_blo_ally_ranged_buffs"></a>
### 子彈風暴(Bulletstorm)

<img src="https://github.com/user-attachments/assets/11755251-3d1b-4b31-867c-47acaea88760" width="72" height="72" alt="子彈風暴天賦圖示">

- **觸發條件**：幸運子彈觸發即可生效，不要求射擊命中敵人。

- **效果範圍**：你本人和協同範圍內的隊友都獲得 +15% 遠程傷害，持續 8 秒；重複觸發會重新計時。

- **算例**：第 0 秒觸發後，第 6 秒再次觸發，增益會再維持 8 秒，直到第 14 秒。

- **傷害算例**：基礎 100 點遠程傷害變成 100 × (1 + 15%) = 115 點；同階段另有 20% 時為 135 點。增傷不累積層數。

#### 繁中原文勘誤

- 繁中「幸運子彈命中時」比英文及程式條件多出命中限制。建議改為「觸發幸運子彈時」，避免玩家誤以為必須打中敵人。

[詳細資料](ogryn_blo_ally_ranged_buffs.md) · [返回目錄](#talent-index)

---

<a id="ogryn_blo_wield_speed"></a>
### 激鬥戰火(Heat of Battle)

<img src="https://github.com/user-attachments/assets/a9ec95cc-0b91-4558-81b5-faefcf1207d7" width="72" height="72" alt="激鬥戰火天賦圖示">

- **前置條件**：先由遠程擊殺累積爆限超載層數；本節點跟隨這些層數，不會自行增加或延長層數。

- **每層效果**：每層增加 1.5% 遠程射速，最多 10 層。

- **算例**：6 層增加 9% 遠程射速；滿 10 層增加 15%。若基礎連射間隔為 1 秒，滿層後約為 1 ÷ 1.15 = 0.87 秒。

[詳細資料](ogryn_blo_wield_speed.md) · [返回目錄](#talent-index)

---

<a id="ogryn_blo_melee"></a>
### 退後！(Back Off!)

<img src="https://github.com/user-attachments/assets/5c8fc9b0-2f06-4311-87f7-511d4c6ce6d5" width="72" height="72" alt="退後！天賦圖示">

- **累積條件**：近戰擊殺時增加 1 層；同一揮擊即使擊殺多名敵人也最多增加 1 層。

- **額外機率**：每層增加 10 個百分點，最多 10 層；這項加值會加在爆限超載的 15% 基礎機率上。

- **消耗與算例**：下一次射擊後清空層數，免費的幸運子彈也會消耗。5 層把基礎機率提高至 15% + 5 × 10% = 65%；9 層已達 105%，因此必定觸發。層數沒有固定倒數。

- **機率限制**：未達必定觸發前，遊戲會依先前判定調整連續觸發情形，不能把每發都當成互相獨立的固定機率。

#### 繁中原文勘誤

- 建議改為「近戰攻擊擊殺敵人時，獲得{chance:%s}機率使下次射擊觸發幸運子彈，可堆疊{stacks:%s}次。」以明確表示機率加值來自近戰擊殺，並作用於下一次射擊。

[詳細資料](ogryn_blo_melee.md) · [返回目錄](#talent-index)

---

<a id="ogryn_heavy_hitter_tdr"></a>
### 毫髮無傷(Don't Feel a Thing)

<img src="https://github.com/user-attachments/assets/83bead6b-330f-466e-8c25-c7d383843b1c" width="72" height="72" alt="毫髮無傷天賦圖示">

- **生效條件**：此減傷隨重拳出擊層數變化；層數下降時減傷也跟著降低。

- **公式與上限**：每層使韌性傷害剩餘倍率降低 1.25%，最多 8 層；滿層承受原韌性傷害的 90%。

- **算例**：4 層時倍率為 0.95，原本 100 點韌性傷害變成 95 點；8 層時 100 點變成 90 點。

[詳細資料](ogryn_heavy_hitter_tdr.md) · [返回目錄](#talent-index)

---

<a id="ogryn_heavy_hitter_cleave"></a>
### 強力劈砍(Great Cleaver)

<img src="https://github.com/user-attachments/assets/9c42800c-a3bc-469c-be04-1231b90bca3b" width="72" height="72" alt="強力劈砍天賦圖示">

- **生效條件**：隨重拳出擊層數增加近戰傷害的順劈容量；敵人消耗的順劈容量各不相同，不能把容量直接當成可命中的敵人數。

- **公式與上限**：每層增加 12.5%，最多 8 層；滿層增加 100%，將基礎順劈容量加倍。

- **算例**：4 層增加 50%；滿 8 層時，若武器基礎順劈容量為 10，容量變為 10 × 2 = 20。

[詳細資料](ogryn_heavy_hitter_cleave.md) · [返回目錄](#talent-index)

---

<a id="ogryn_heavy_hitter_max_stacks_improves_toughness"></a>
### 越戰越勇(Unstoppable)

<img src="https://github.com/user-attachments/assets/82795688-8a0b-4db1-871c-1302a8f33299" width="72" height="72" alt="越戰越勇天賦圖示">

- **生效條件**：只在近戰擊殺恢復韌性時套用；其他來源恢復的韌性不受此節點加成。

- **公式與上限**：每層提高 15%，最多 8 層；滿層增加 120%，即基礎近戰擊殺恢復量的 2.2 倍。

- **算例**：基礎近戰擊殺恢復 10 點時，8 層恢復 10 × (1 + 8 × 15%) = 22 點，仍受缺少韌性限制。

[詳細資料](ogryn_heavy_hitter_max_stacks_improves_toughness.md) · [返回目錄](#talent-index)

---

<a id="ogryn_heavy_hitter_stagger"></a>
### 震撼衝擊(Impactful)

<img src="https://github.com/user-attachments/assets/e8883b71-72ad-4780-92e7-395f6a32ead8" width="72" height="72" alt="震撼衝擊天賦圖示">

- **生效條件**：近戰衝擊加成隨重拳出擊目前層數增加；本節點不會另外累積層數。

- **公式與上限**：每層增加 7.5%，最多 8 層；滿層將近戰衝擊效果提高 60%。

- **算例**：4 層增加 30%；若一次攻擊的基礎衝擊值為 100，滿 8 層時為 100 × 1.6 = 160。

[詳細資料](ogryn_heavy_hitter_stagger.md) · [返回目錄](#talent-index)

---

<a id="ogryn_heavy_hitter_max_stacks_improves_attack_speed"></a>
### 熱身完畢(Just Getting Started!)

<img src="https://github.com/user-attachments/assets/93481225-465f-4750-a4f3-28602e723b40" width="72" height="72" alt="熱身完畢天賦圖示">

- **生效條件**：選取「熱身完畢！」並讓重拳出擊達到 8 層，才會獲得此效果。

- **效果**：滿 8 層時增加 10% 攻擊速度；層數低於 8 後增益立即移除。

- **算例**：若某次攻擊原本每秒一次，增加 10% 攻速後，間隔約為 1 ÷ 1.10 = 0.91 秒。

[詳細資料](ogryn_heavy_hitter_max_stacks_improves_attack_speed.md) · [返回目錄](#talent-index)

---


---

## 技能

<a id="ogryn_multi_heavy_toughness"></a>
### 最好的防禦(The Best Defence)

<img src="https://github.com/user-attachments/assets/67294825-4742-461c-8445-8eabf69981d3" width="72" height="72" alt="最好的防禦天賦圖示">

- **觸發方式**：一次近戰攻擊命中至少 2 名敵人，該次揮擊結束時恢復 5% 最大韌性；重擊則恢復 15%，不要求擊殺。

- **恢復算例**：最大韌性 100 時，一般攻擊恢復 100 × 5% = 5 點，重擊恢復 100 × 15% = 15 點；若目前 95，就只能補缺少的 5 點。

- **結算方式**：每次揮擊符合條件就恢復一次，不會按同次攻擊命中的敵人數重複恢復；其他韌性恢復加成另算。

[詳細資料](ogryn_multi_heavy_toughness.md) · [返回目錄](#talent-index)

---

<a id="ogryn_single_heavy_toughness"></a>
### 碾碎它們！(Smash 'Em!)

<img src="https://github.com/user-attachments/assets/bdf5653a-6df6-4998-a781-ae623083055a" width="72" height="72" alt="碾碎它們！天賦圖示">

- **觸發方式**：一次近戰攻擊命中恰好 1 名敵人，該次揮擊結束時恢復 5% 最大韌性；重擊則恢復 15%，不要求擊殺。

- **恢復算例**：最大韌性 100 時，一般攻擊恢復 100 × 5% = 5 點，重擊恢復 100 × 15% = 15 點；若目前 95，就只能補缺少的 5 點。

- **結算方式**：每次揮擊符合條件就恢復一次，不會按同次攻擊命中的敵人數重複恢復；其他韌性恢復加成另算。

[詳細資料](ogryn_single_heavy_toughness.md) · [返回目錄](#talent-index)

---

<a id="ogryn_increased_coherency_toughness"></a>
### 關鍵人物(Lynchpin)

<img src="https://github.com/user-attachments/assets/47f9eea2-c58f-4ed3-8678-e42d2ec1701f" width="72" height="72" alt="關鍵人物天賦圖示">

- **效果**：透過協同恢復韌性時，自身的恢復速度提高 100%。不會因此讓攻擊命中的韌性恢復量加倍。

- **恢復算例**：其餘條件相同，原本每秒恢復 5 點，變成 5 × (1 + 100%) = 10 點；若同階段原有 20% 加成，則由 6 點變成 5 × (1 + 20% + 100%) = 11 點。

- **生效條件**：仍須符合協同韌性恢復的條件與等待時間；這項天賦只改變恢復速率。

[詳細資料](ogryn_increased_coherency_toughness.md) · [返回目錄](#talent-index)

---

<a id="ogryn_reload_speed_on_empty"></a>
### 射不停(Keep Shooting)

<img src="https://github.com/user-attachments/assets/f61476bf-8738-40b1-8c66-63980d690cc7" width="72" height="72" alt="射不停天賦圖示">

- **觸發方式**：彈匣為空時開始換彈，該次換彈速度提高 20%；彈匣仍有子彈時提早換彈，不會因這項效果加速。

- **時間算例**：只計這份加成，受換彈速度影響的 3 秒動作變成 3 ÷ (1 + 20%) = 2.5 秒，縮短約 16.7%；不是直接少 20% 時間。

- **效果維持**：是否空匣在換彈前判定；開始換彈後保留該次判定，不因裝入子彈就立刻移除。

[詳細資料](ogryn_reload_speed_on_empty.md) · [返回目錄](#talent-index)

---

<a id="ogryn_more_hits_more_damage"></a>
### 怒不可遏(Furious)

<img src="https://github.com/user-attachments/assets/aeba8245-43aa-438c-9357-a7ac4556a98d" width="72" height="72" alt="怒不可遏天賦圖示">

- **運作方式**：一次近戰攻擊結束後，按該次命中的敵人數提高下一次近戰傷害；每名 3%，最多計 10 名、30%。

- **傷害算例**：上一擊命中 4 名敵人，下一擊基礎 100 點變成 100 × (1 + 4 × 3%) = 112 點；命中 10 名或更多則為 130 點。已有同階段 20% 加成、再取得 4 層時為 132 點。

- **更新方式**：每次揮擊結束都用該次命中數取代舊效果，不是持續累加。空揮後歸零；命中 4 名後再只命中 1 名，下一次就只保留 3%。

[詳細資料](ogryn_more_hits_more_damage.md) · [返回目錄](#talent-index)

---

<a id="ogryn_ogryn_killer"></a>
### 重量級(Heavyweight)

<img src="https://github.com/user-attachments/assets/c006f0e1-3f32-4dcc-891a-8c44b4ebe6df" width="72" height="72" alt="重量級天賦圖示">

- **效果**：對堡壘、碾壓者、收割者及瘟疫歐格林造成的傷害提高 30%，受到牠們的傷害降低 30%；近戰與遠程皆適用。

- **傷害算例**：只看傷害加成階段，100 × (1 + 30%) = 130 點；同階段原有 20% 增傷時為 150 點。受到原本 100 點傷害時，套用本天賦後為 100 × 0.7 = 70 點，其他減傷另算。

- **對象限制**：這不是對所有大型敵人或所有巨獸的通用加成。

[詳細資料](ogryn_ogryn_killer.md) · [返回目錄](#talent-index)

---

<a id="ogryn_melee_stagger"></a>
### 猛擊(Slam)

<img src="https://github.com/user-attachments/assets/ee98056a-b754-4821-9542-717ef68c944a" width="72" height="72" alt="猛擊天賦圖示">

- **衝擊加成**：近戰衝擊提高 25%，加強使敵人踉蹌的效果；這項加成不直接增加生命傷害。

- **耐力恢復**：近戰命中或推擊成功使敵人踉蹌時，恢復 5% 最大耐力；兩次恢復至少間隔 0.75 秒。單純命中但未造成踉蹌不會恢復。

- **算例**：最大耐力 8 時，每次恢復 8 × 5% = 0.4；只缺 0.2 就只補 0.2。只計衝擊階段，基準 100 變成 100 × 1.25 = 125，實際能否踉蹌仍取決於敵人與攻擊。

[詳細資料](ogryn_melee_stagger.md) · [返回目錄](#talent-index)

---

<a id="ogryn_targets_recieve_damage_taken_increase_debuff"></a>
### 削弱敵人(Soften Them Up)

<img src="https://github.com/user-attachments/assets/53e0b90e-52dc-4a4a-953c-b235753aa97a" width="72" height="72" alt="削弱敵人天賦圖示">

- **觸發方式**：近戰攻擊對敵人造成傷害且敵人仍存活時，使其受到的傷害提高 15%，持續 5 秒；隊友後續攻擊也能受益。

- **重新計時方式**：再次造成合格近戰傷害會重設 5 秒時間；效果最多 1 層，不會因多次命中累加到 30%。

- **傷害算例**：效果已施加後，原本 100 點傷害變成 100 × (1 + 15%) = 115 點；若同一承傷階段另有 20% 加成，則為 135 點。首次觸發的那一擊不會追溯重算。

[詳細資料](ogryn_targets_recieve_damage_taken_increase_debuff.md) · [返回目錄](#talent-index)

---

<a id="ogryn_toughness_on_low_health"></a>
### 堅韌不屈(Too Stubborn to Die)

<img src="https://github.com/user-attachments/assets/72cbf891-ecd4-425c-8d46-97cb4d4863f9" width="72" height="72" alt="堅韌不屈天賦圖示">

- **生效條件**：生命低於上限的 50% 時，韌性恢復量增加 100%；恰好 50% 時尚未生效，恢復到門檻以上便失去加成。

- **恢復算例**：原本恢復 15 點，沒有其他修正時變成 15 × (1 + 100%) = 30 點；若同階段已有 20% 加成，則由 18 點變成 33 點。實際仍以缺少的韌性為上限。

- **作用範圍**：增加會套用韌性恢復加成的恢復量；這不會自行產生一筆恢復，也不是讓所有協同自然恢復速度加倍。

[詳細資料](ogryn_toughness_on_low_health.md) · [返回目錄](#talent-index)

---

<a id="ogryn_heavy_bleeds"></a>
### 重毆(Batter)

<img src="https://github.com/user-attachments/assets/dbfbaef7-b829-41cf-96cb-a9d09192cfbd" width="72" height="72" alt="重毆天賦圖示">

- **觸發方式**：近戰對敵人造成傷害且敵人仍存活時，施加 1 層流血；重擊一次施加 4 層，最多累積 16 層。

- **疊層與時間**：再次施加會增加層數並重設 1.5 秒維持時間。流血每約 0.5 秒造成傷害；停止補層、維持時間結束後，每次結算逐漸移除 1 層。

- **傷害公式**：流血傷害隨層數非線性提高。只計無護甲且沒有其他修正，每次傷害為 87.5 × (層數 ÷ 16)² × [3 − 2 × (層數 ÷ 16)]。

- **傷害算例**：4 層時為 87.5 × 0.25² × 2.5 ≈ 13.67 點；8 層為 43.75 點，16 層為 87.5 點。因此 8 層不是 4 層傷害的兩倍。其他護甲與增傷會改變結果。

[詳細資料](ogryn_heavy_bleeds.md) · [返回目錄](#talent-index)

---

<a id="ogryn_staggering_increases_damage"></a>
### 沉重打擊(Hard Knocks)

<img src="https://github.com/user-attachments/assets/206be198-2a5f-426f-944a-8d85fd74f1d6" width="72" height="72" alt="沉重打擊天賦圖示">

- **觸發方式**：近戰使仍存活的敵人踉蹌，或推擊命中處於踉蹌狀態的敵人後，使其受到的近戰傷害增加 15%，持續 5 秒；隊友的近戰也能受益。

- **疊層與重新計時**：此效果最多 1 層，再次觸發重新計時。可與削弱敵人的 15% 通用承傷加成同階段相加。

- **傷害算例**：基礎 100 點近戰傷害，只有此效果時為 115 點；與削弱敵人同時生效時為 100 × (1 + 15% + 15%) = 130 點。遠程不受本項近戰承傷加成影響。

[詳細資料](ogryn_staggering_increases_damage.md) · [返回目錄](#talent-index)

---

<a id="ogryn_movement_speed_after_ranged_kills"></a>
### 勢不可擋(Unstoppable Momentum)

<img src="https://github.com/user-attachments/assets/01fd23cb-46d2-41fa-bfc3-d8b1d17f43a3" width="72" height="72" alt="勢不可擋天賦圖示">

- **觸發方式**：遠程擊殺敵人後，移動速度提高 20%，持續 3 秒；再次遠程擊殺會重新計時，不會逐次提高速度。

- **速度算例**：原本每秒移動 5 公尺，沒有其他修正時變成 5 × 1.2 = 6 公尺／秒；已有同階段 10% 加成時，則為 5 × (1 + 10% + 20%) = 6.5 公尺／秒。

[詳細資料](ogryn_movement_speed_after_ranged_kills.md) · [返回目錄](#talent-index)

---

<a id="ogryn_increased_ammo_reserve"></a>
### 彈藥儲存包(Ammo Stash)

<img src="https://github.com/user-attachments/assets/fab49cb9-e155-47d2-8b8c-2ad8235a0f48" width="72" height="72" alt="彈藥儲存包天賦圖示">

- **效果**：武器備用彈藥上限增加 25%；彈匣容量不因此增加。

- **容量算例**：原備用彈藥上限 200，變成 200 × (1 + 25%) = 250 發；若原上限 101，則 101 × 1.25 = 126.25，無條件捨去小數後為 126 發。

- **計算方式**：其他同階段備用彈藥容量加成相加；依最大備用彈藥比例提供的補給，也會按提高後的上限計算。

[詳細資料](ogryn_increased_ammo_reserve.md) · [返回目錄](#talent-index)

---

<a id="ogryn_multi_hits_grant_reload_speed"></a>
### 領跑者(Pacemaker)

<img src="https://github.com/user-attachments/assets/cf916d47-2e00-43d4-98b7-307222a056e6" width="72" height="72" alt="領跑者天賦圖示">

- **觸發方式**：在約 0.5 秒內命中至少 3 名不同敵人，獲得下一次換彈速度提高 15% 的效果。近戰與遠程命中都能累計，同一敵人重複命中不會當成多人。

- **消耗方式**：加成保留到下一次換彈結束，再移除；重複觸發不會把速度加成疊成 30%。

- **時間算例**：受換彈速度影響的 3 秒動作變成 3 ÷ 1.15 ≈ 2.61 秒；若同階段另有 20% 加成，則為 3 ÷ (1 + 15% + 20%) ≈ 2.22 秒。

[詳細資料](ogryn_multi_hits_grant_reload_speed.md) · [返回目錄](#talent-index)

---

<a id="ogryn_free_reload_after_ability"></a>
### 發現更多(Found Some More)

<img src="https://github.com/user-attachments/assets/5a19ac08-20bc-41ee-8af1-bbc6194fa852" width="72" height="72" alt="發現更多天賦圖示">

- **補給方式**：每約 15 秒補充備用彈藥，基準為最大備用彈藥的 1%；不需要施放戰鬥技能，也不需要換彈。

- **整數算例**：最大備用彈藥 200 時，每次補 200 × 1% = 2 發；最大備用彈藥 75 時，每次累積 0.75 發，小數留到後續結算，前四次依序補 0、1、1、1 發，合計 3 發。

- **補給上限**：子彈加入備用彈藥，不會直接裝入彈匣。彈匣尚未補滿時，可暫時把相同缺額存入備用彈藥；彈匣與備用彈藥總量仍不超過兩者容量合計。

[詳細資料](ogryn_free_reload_after_ability.md) · [返回目錄](#talent-index)

---

<a id="ogryn_knocked_allies_grant_damage_reduction"></a>
### 絕不屈服(Won't Give In)

<img src="https://github.com/user-attachments/assets/58952102-1822-4093-81f9-48b8cbc8f8a7" width="72" height="72" alt="絕不屈服天賦圖示">

- **生效條件**：距離未滿 20 公尺的隊友倒地、被制伏或懸掛邊緣等需要救援時，每人使你受到的傷害降低 20%；隊友獲救或離開範圍後，對應加成便消失。

- **減傷算例**：有 1、2、3 名符合條件的隊友時，這一階段的 100 點傷害分別變成 80、60、40 點；三人合計為 100 × (1 − 3 × 20%) = 40 點。

[詳細資料](ogryn_knocked_allies_grant_damage_reduction.md) · [返回目錄](#talent-index)

---

<a id="ogryn_fully_charged_attacks_gain_damage_and_stagger"></a>
### 嘎嘎！(Crunch!)

<img src="https://github.com/user-attachments/assets/e9d72852-9fa6-4e02-aded-e261adb660f0" width="72" height="72" alt="嘎嘎！天賦圖示">

- **蓄力效果**：重擊蓄力可累積 4 層加成，每層增加 7.5% 近戰傷害與衝擊力；蓄力到自動出手時會補至滿層。

- **持續方式**：加成用於這次揮擊，揮擊完成後移除。疊層起點取決於武器的蓄力動作，之後預設每 0.25 秒加一層，不是所有武器都從按鍵瞬間開始計時。

- **傷害算例**：基礎 100 點傷害，4 層提供 4 × 7.5% = 30%，沒有其他加成時為 130 點；同階段原有 20% 時為 100 × (1 + 20% + 30%) = 150 點。

- **衝擊力算例**：原本 100 點衝擊力，滿層為 130 點；是否使敵人踉蹌還取決於敵人門檻，不能把衝擊力直接當成傷害。

[詳細資料](ogryn_fully_charged_attacks_gain_damage_and_stagger.md) · [返回目錄](#talent-index)

---

<a id="ogryn_nearby_bleeds_reduce_damage_taken"></a>
### 毀滅之樂(Delight in Destruction)

<img src="https://github.com/user-attachments/assets/669fb8b0-a444-4216-abe1-74f4acc4af85" width="72" height="72" alt="毀滅之樂天賦圖示">

- **生效條件**：8 公尺內每名正在流血的敵人使你受到的傷害降低 5%，最多計入 6 名。隊友造成的流血也能生效，同一敵人有多層流血仍只算一名。

- **減傷算例**：3 名提供 15% 減傷，100 點變成 85 點；6 名以上為 100 × (1 − 30%) = 70 點。若另有獨立 20% 減傷，則為 100 × 0.7 × 0.8 = 56 點。

- **更新方式**：約每秒重新計算附近流血敵人；敵人死亡、流血結束或移出範圍後會失去對應加成。

[詳細資料](ogryn_nearby_bleeds_reduce_damage_taken.md) · [返回目錄](#talent-index)

---

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>
### 韌性減傷(Toughness Damage Reduction)

<img src="https://github.com/user-attachments/assets/a51567af-44cb-46ba-9908-3e3502dcbcdb" width="72" height="72" alt="韌性減傷天賦圖示">

- **效果**：受到的韌性傷害減少 10%；不會直接增加最大韌性，也不會直接降低生命傷害。

- **減傷算例**：只計此加成，100 點韌性傷害變成 100 × (1 − 10%) = 90 點；若同一計算階段已有 20% 減傷，則為 100 × (1 − 20% − 10%) = 70 點。其他獨立減傷倍率另行相乘。

[詳細資料](base_toughness_damage_reduction_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="ogryn_damage_taken_by_all_increases_strength_tdr"></a>
### 相親相愛好夥伴！(No Hurting Friends!)

<img src="https://github.com/user-attachments/assets/9af41f8c-0f0e-4b2b-965e-c0d01fea2746" width="72" height="72" alt="相親相愛好夥伴！天賦圖示">

- **觸發方式**：你或協同範圍內的隊友受到傷害時，你獲得一層威力加成；只扣韌性、沒有扣生命也能觸發。

- **疊層與時間**：每層提高 2% 威力，最多 5 層、合計 10%，持續 10 秒；再次觸發會重新計時。滿 5 層時額外獲得 15% 韌性減傷，層數不再滿時便失效。

- **威力算例**：只計此加成，威力 500 變成 500 × (1 + 5 × 2%) = 550。威力會影響傷害、衝擊力與順劈；實際傷害還需套用武器曲線與目標護甲，不能一律把最終傷害乘 1.1。

- **減傷算例**：滿層後，此階段原本承受的 100 點韌性傷害變成 100 × 0.85 = 85 點；與另一個獨立 20% 減傷共存時為 68 點。

#### 繁中原文勘誤

- 原文寫「生命值受到傷害」才觸發，限制過窄；只受到韌性傷害也能累積層數，不必先損失生命。

[詳細資料](ogryn_damage_taken_by_all_increases_strength_tdr.md) · [返回目錄](#talent-index)

---

<a id="ogryn_ally_movement_boost_on_ability"></a>
### 全神貫注(Get Stuck In)

<img src="https://github.com/user-attachments/assets/895c3ccd-387f-4862-9a2b-b429ff5d6432" width="72" height="72" alt="全神貫注天賦圖示">

- **觸發方式**：施放戰鬥技能時，自己與當下協同範圍內的隊友獲得 20% 移動速度，並免疫眩暈與壓制，持續 6 秒。

- **時間與疊層**：離開協同範圍不會立刻移除此效果；再次獲得會重新計時，速度加成不會疊成 40%。

- **速度算例**：原本每秒移動 5 公尺，只有此加成時為 5 × (1 + 20%) = 6 公尺／秒。

[詳細資料](ogryn_ally_movement_boost_on_ability.md) · [返回目錄](#talent-index)

---

<a id="ogryn_windup_reduces_damage_taken"></a>
### 利刃出鞘(Implacable)

<img src="https://github.com/user-attachments/assets/bb088b60-c1e8-42a7-b68e-3ef59f5d9eb9" width="72" height="72" alt="利刃出鞘天賦圖示">

- **生效條件**：近戰重擊蓄力時獲得 15% 減傷；結束蓄力後便不再套用，不會讓後續整段揮擊自動保有加成。

- **減傷算例**：只計此效果，100 點傷害變成 100 × 0.85 = 85 點；另有獨立 20% 減傷時為 100 × 0.85 × 0.8 = 68 點。

[詳細資料](ogryn_windup_reduces_damage_taken.md) · [返回目錄](#talent-index)

---

<a id="ogryn_windup_is_uninterruptible"></a>
### 誰敢攔我！(No Stopping Me!)

<img src="https://github.com/user-attachments/assets/d80b562f-7fc2-4daf-85e4-ae25f8171a89" width="72" height="72" alt="誰敢攔我！天賦圖示">

- **生效條件**：近戰重擊蓄力期間獲得不可打斷效果，並移除該動作造成的移動減速；結束蓄力後效果結束。

- **移速算例**：假設正常速度為每秒 5 公尺，蓄力原本使速度降低 50% 至 2.5 公尺／秒，移除這項減速後恢復為 5 公尺／秒；不是讓所有移動速度額外提高 100%。

- **限制**：這不是無敵效果，蓄力時仍會受到傷害。

[詳細資料](ogryn_windup_is_uninterruptible.md) · [返回目錄](#talent-index)

---

<a id="ogryn_kills_grant_crit_chance"></a>
### 屠殺(Massacre)

<img src="https://github.com/user-attachments/assets/7e27b3b4-5eca-49b5-aafd-c8abc6635b14" width="72" height="72" alt="屠殺天賦圖示">

- **觸發與疊層**：擊殺敵人獲得一層，每層增加 2 個百分點爆擊率，最多 8 層，持續 12 秒；再次擊殺重新計時。

- **機率算例**：原本 5% 爆擊率，滿層變成 5% + 8 × 2% = 21%，不是 5% × 1.16。加成適用爆擊率，不代表每次攻擊必定暴擊。

[詳細資料](ogryn_kills_grant_crit_chance.md) · [返回目錄](#talent-index)

---

<a id="ogryn_revenge_damage"></a>
### 報復時間(Payback Time)

<img src="https://github.com/user-attachments/assets/5d6152a6-dedb-49c4-a7d2-328d082084c0" width="72" height="72" alt="報復時間天賦圖示">

- **觸發方式**：成功閃避近戰攻擊，或受到近戰攻擊造成的傷害後，獲得 15% 傷害加成，持續 5 秒；韌性吸收的傷害也能觸發。

- **疊層與重新計時**：近戰、遠程傷害都能受益；重複觸發只重新計時，不累積多層。

- **傷害算例**：基礎 100 點變成 115 點；同階段已有 20% 加成時，則為 100 × (1 + 20% + 15%) = 135 點。

[詳細資料](ogryn_revenge_damage.md) · [返回目錄](#talent-index)

---

<a id="ogryn_rending_on_elite_kills"></a>
### 主宰(Dominate)

<img src="https://github.com/user-attachments/assets/0eb640b4-e206-4d0b-a982-f74b33baf5b2" width="72" height="72" alt="主宰天賦圖示">

- **觸發方式**：擊殺精英敵人後獲得 15% 撕裂，持續 10 秒；再次觸發重新計時，不會逐次堆高。

- **作用方式**：撕裂改善攻擊對特定護甲的傷害倍率；實際增幅取決於武器原有的護甲倍率，不能把所有最終傷害一律乘 1.15。

- **傷害算例**：若對甲殼護甲的原倍率為 0.5，基礎 100 點原本造成 50 點，加入 15% 撕裂後為 100 × (0.5 + 0.15) = 65 點，相對提高 30%。若原倍率已達 1，超額撕裂只取四分之一，變成 100 × (1 + 0.15 × 0.25) = 103.75 點。

#### 繁中原文勘誤

- 原文在撕裂百分比後加上「倍」，單位錯誤。效果是獲得 15% 撕裂，並不是撕裂變成 15 倍。

[詳細資料](ogryn_rending_on_elite_kills.md) · [返回目錄](#talent-index)

---

<a id="ogryn_reloading_grants_damage"></a>
### 換彈完畢(Reloaded and Ready)

<img src="https://github.com/user-attachments/assets/27fcc279-9828-4df7-b895-04956bb2463b" width="72" height="72" alt="換彈完畢天賦圖示">

- **觸發方式**：換彈觸發後獲得 15% 遠程傷害，持續 8 秒；再次換彈可重新計時，不會堆成多層。

- **傷害算例**：基礎 100 點遠程傷害變成 115 點；同階段已有 20% 加成時為 100 × (1 + 20% + 15%) = 135 點。近戰傷害不受此加成影響。

[詳細資料](ogryn_reloading_grants_damage.md) · [返回目錄](#talent-index)

---

<a id="ogryn_increase_explosion_radius"></a>
### 大爆炸(Big Boom)

<img src="https://github.com/user-attachments/assets/c6421034-209b-4fab-857d-541fa0667d8b" width="72" height="72" alt="大爆炸天賦圖示">

- **效果**：爆炸的外圍半徑與中心高傷害區域半徑都增加 27.5%；不直接增加每次爆炸的傷害數值。

- **範圍算例**：原半徑 4 公尺，變成 4 × 1.275 = 5.1 公尺；以沒有遮擋的平面圓形估算，面積變成原本的 1.275² ≈ 1.626 倍，約增加 62.6%。

- **疊加方式**：其他同階段爆炸半徑加成相加；地形遮擋與爆炸本身的命中判定仍會影響實際覆蓋。

[詳細資料](ogryn_increase_explosion_radius.md) · [返回目錄](#talent-index)

---

<a id="ogryn_blocking_reduces_push_cost"></a>
### 睚眥必報(No Pushover)

<img src="https://github.com/user-attachments/assets/b35eb9be-169c-48cf-a295-329eae3a3610" width="72" height="72" alt="睚眥必報天賦圖示">

- **觸發方式**：效果可用時，推擊的衝擊力增加 250%；完成這次推擊後開始 8 秒冷卻，冷卻中的普通推擊不會重新延長倒數。

- **衝擊力算例**：原本 100 點推擊衝擊力，強化後為 100 × (1 + 250%) = 350 點；這是造成踉蹌的強度，不是 350 點傷害。

- **消耗方式**：冷卻從推擊完成時計算，即使沒有推到敵人也會消耗這次強化。

[詳細資料](ogryn_blocking_reduces_push_cost.md) · [返回目錄](#talent-index)

---

<a id="ogryn_blocking_ranged_taunts"></a>
### 渴求關注(Attention Seeker)

<img src="https://github.com/user-attachments/assets/119478f3-6425-4e96-9f26-e0df95a4bf1e" width="72" height="72" alt="渴求關注天賦圖示">

- **觸發方式**：格擋敵人的攻擊，或推擊命中敵人時，使該敵人優先攻擊你，持續 8 秒。

- **限制**：對怪物不生效；敵人已經受到嘲諷時，不會再次施加或重新計時這個短暫嘲諷。

- **時間範例**：第 0 秒首次嘲諷，第 4 秒再次推擊同一名仍受嘲諷的敵人，並不會把結束時間延到第 12 秒。若你死亡、無法被敵人察覺等，嘲諷可能提前結束。

[詳細資料](ogryn_blocking_ranged_taunts.md) · [返回目錄](#talent-index)

---

<a id="ogryn_protect_allies"></a>
### 為了小子們(For the Lil'Uns)

<img src="https://github.com/user-attachments/assets/d61a8184-294b-4ade-9847-3c5241828792" width="72" height="72" alt="為了小子們天賦圖示">

- **韌性破裂效果**：其他隊友韌性被擊破時，你提高 10% 威力，並減少 25% 韌性傷害，持續 10 秒；自己韌性破裂不觸發，沒有額外協同距離要求。

- **持續與冷卻**：生效期間再次發生隊友韌性破裂可重設 10 秒倒數，效果結束後才進入 20 秒冷卻。例如第 0 秒觸發、未再觸發重新計時，效果於第 10 秒結束，第 30 秒可再次觸發。

- **倒地救援效果**：其他隊友倒地時，獨立獲得 25% 扶起速度與眩暈免疫，持續 10 秒；再次觸發重新計時，不受上面的 20 秒冷卻限制。

- **計算範例**：威力 500 變成 550；此階段 100 點韌性傷害變成 75 點。單計 25% 扶起速度，原本 5 秒變成 5 ÷ 1.25 = 4 秒；若同階段另有 25% 扶起速度，則為 5 ÷ 1.5 ≈ 3.33 秒。

[詳細資料](ogryn_protect_allies.md) · [返回目錄](#talent-index)

---

<a id="ogryn_corruption_resistance"></a>
### 頭腦簡單(Simple Minded)

<img src="https://github.com/user-attachments/assets/c5cc14b1-1227-4449-a1d9-de912e048e6e" width="72" height="72" alt="頭腦簡單天賦圖示">

- **效果**：透過傷害結算受到的腐敗減少 40%，不會清除已累積的腐敗，也不是一般傷害減免。

- **腐敗算例**：原本增加 20 點腐敗，變成 20 × 0.6 = 12 點；若另有獨立 20% 腐敗減免，則為 20 × 0.6 × 0.8 = 9.6 點。

[詳細資料](ogryn_corruption_resistance.md) · [返回目錄](#talent-index)

---

<a id="ogryn_melee_attacks_give_mtdr"></a>
### 專注鬥士(Focused Fighter)

<img src="https://github.com/user-attachments/assets/fca0827b-6dac-4c44-b92e-8aba309ff4ca" width="72" height="72" alt="專注鬥士天賦圖示">

- **獲得層數**：每次近戰揮擊至少命中一名敵人，便增加一層；同一揮擊打中多人仍只增加一層，最多 5 層。

- **減傷算例**：每層乘上 0.96，5 層時為 100 × 0.96⁵ ≈ 81.54 點，合計約減少 18.46%，不是直接減少 20%。

- **移除方式**：層數沒有固定倒數；你或隊友受到近戰傷害後會清除。此減傷只影響你受到的近戰傷害，不會降低遠程傷害。

[詳細資料](ogryn_melee_attacks_give_mtdr.md) · [返回目錄](#talent-index)

---

<a id="ogryn_pushing_applies_brittleness"></a>
### 蠻橫之力(Brutish Strength)

<img src="https://github.com/user-attachments/assets/024bec9b-772c-4313-b7b8-d119efdcf8f1" width="72" height="72" alt="蠻橫之力天賦圖示">

- **觸發與疊層**：推擊仍存活的敵人時，施加 4 層脆弱，每層 2.5%，合計 10%；最多 16 層、40%，持續 5 秒，再次施加重新計時。

- **作用方式**：效果留在敵人身上，隊友也能受益。脆弱與攻擊者的撕裂共同改善護甲倍率，不是讓最終傷害固定提高相同比例。

- **傷害算例**：假設對甲殼護甲的原倍率為 0.5、基礎傷害 100，一次推擊後為 100 × (0.5 + 4 × 2.5%) = 60 點；滿 16 層為 90 點。超過護甲倍率 1 的部分另按超額撕裂規則計算。

[詳細資料](ogryn_pushing_applies_brittleness.md) · [返回目錄](#talent-index)

---

<a id="ogryn_explosions_burn"></a>
### 火力全開(Fire Away)

<img src="https://github.com/user-attachments/assets/c78dbead-adf5-4b9e-9629-9a3a0a93ae8c" width="72" height="72" alt="火力全開天賦圖示">

- **觸發方式**：爆炸對敵人造成傷害且敵人仍存活時，施加 1 層燃燒；命中該次爆炸的中心區域時改為 2 層，並非另外加 2 層。動力槌的特定爆炸不觸發。

- **疊層與時間**：本天賦可把燃燒補至 8 層；再次觸發會重設 4 秒維持時間，已達 8 層也能重新計時。約每 0.5 秒造成一次傷害，維持時間結束後逐次移除層數。

- **傷害公式**：只計無護甲且沒有其他修正，每次燃燒傷害為 600 × (層數 ÷ 31)² × [3 − 2 × (層數 ÷ 31)]；分母採共用燃燒的 31 層上限，不是本天賦可施加的 8 層。

- **傷害算例**：2 層約造成 7.17 點、8 層約 99.25 點／次；實際值會受護甲與其他增傷影響，也不能把單次傷害當成完整持續期間的總傷害。

#### 繁中原文勘誤

- 原文「近距離時增加 2 層」會讓人誤以為合計 3 層；實際是在爆炸中心區域改為施加 2 層。

[詳細資料](ogryn_explosions_burn.md) · [返回目錄](#talent-index)

---

<a id="ogryn_block_all_attacks"></a>
### 堅不可摧(Unbreakable)

<img src="https://github.com/user-attachments/assets/3ff7d7eb-6206-4d77-91c5-483259320072" width="72" height="72" alt="堅不可摧天賦圖示">

- **完美格擋**：一般情況下，開始格擋後約 0.3 秒內屬於完美格擋時段，可格擋原本標示為不可格擋的近戰攻擊；仍需符合一般格擋的角度等條件。

- **傷害加成**：成功完美格擋後，下一次近戰揮擊提高 20% 傷害，最多保留 5 秒；揮擊完成即消耗，即使揮空也會移除。重複完美格擋重新計時，但不累加百分比。

- **傷害算例**：基礎 100 點變成 120 點；同階段原有 30% 增傷時為 100 × (1 + 30% + 20%) = 150 點。

[詳細資料](ogryn_block_all_attacks.md) · [返回目錄](#talent-index)

---

<a id="ogryn_damage_reduction_on_high_stamina"></a>
### 士氣高昂(Pumped Up)

<img src="https://github.com/user-attachments/assets/15edb762-d209-407d-8bd5-fc0672bd5ef8" width="72" height="72" alt="士氣高昂天賦圖示">

- **生效條件**：目前耐力高於上限的 75% 時生效；恰好 75% 時不生效，消耗耐力跌破門檻後便失去減傷。

- **減傷算例**：此階段原本 100 點傷害變成 100 × 0.875 = 87.5 點；若另有獨立 20% 減傷，則為 100 × 0.875 × 0.8 = 70 點。

[詳細資料](ogryn_damage_reduction_on_high_stamina.md) · [返回目錄](#talent-index)

---

<a id="ogryn_crit_damage_increase"></a>
### 好運連連(Lucky Streak)

<img src="https://github.com/user-attachments/assets/de5091de-3dd6-455b-875a-55228eb4d67e" width="72" height="72" alt="好運連連天賦圖示">

- **效果**：暴擊時提高額外傷害部分 75%，不提高爆擊率，也不是將整筆暴擊傷害乘 1.75。不同武器、護甲與命中部位的額外傷害占比不同，因此實際增幅也不同。

- **傷害算例**：假設固定條件下，原傷害由 100 點基礎與 50 點暴擊額外傷害組成，原本合計 150 點；生效後為 100 + 50 × 1.75 = 187.5 點，相對提高 25%。若額外部分只有 20 點，則由 120 變成 135 點，只提高 12.5%。

- **暴擊弱點**：同時暴擊並命中弱點時，程式會先計算共用的額外傷害，再套入暴擊與弱點相關加成；不能把暴擊與弱點倍率各乘一次。

[詳細資料](ogryn_crit_damage_increase.md) · [返回目錄](#talent-index)

---

<a id="ogryn_stacking_attack_speed"></a>
### 狂暴猛擊(Frenzied Blows)

<img src="https://github.com/user-attachments/assets/5f6d651a-4c88-40ea-a96b-3133459df2f4" width="72" height="72" alt="狂暴猛擊天賦圖示">

- **獲得層數**：連續近戰揮擊命中敵人，從第二次成功揮擊開始，每次增加一層；同一揮擊命中多人仍只加一層。

- **持續與中斷**：每層提高 2.5% 近戰攻速，最多 5 層、合計 12.5%，持續 5 秒；續命中可重新計時，揮空會清除加成並重置連擊。

- **速度算例**：滿層時，受攻速影響的 1 秒動作變成 1 ÷ (1 + 5 × 2.5%) ≈ 0.889 秒；不是直接縮短 12.5% 至 0.875 秒。

[詳細資料](ogryn_stacking_attack_speed.md) · [返回目錄](#talent-index)

---

<a id="ogryn_melee_damage_after_heavy"></a>
### 擊潰他們(Beat Them Back)

<img src="https://github.com/user-attachments/assets/373afc07-72d5-4815-91c0-0e5d0d02d279" width="72" height="72" alt="擊潰他們天賦圖示">

- **觸發方式**：一次近戰重擊至少命中一名敵人，揮擊結束後獲得 15% 近戰傷害加成，持續 5 秒；觸發的那次重擊不會回頭補算加成。

- **疊層與重新計時**：再次重擊命中重新計時，命中多人不會增加百分比；生效期間的一般近戰攻擊也能受益。

- **傷害算例**：基礎 100 點變成 115 點；同階段已有 20% 時為 100 × (1 + 20% + 15%) = 135 點。

[詳細資料](ogryn_melee_damage_after_heavy.md) · [返回目錄](#talent-index)

---

<a id="ogryn_drain_stamina_for_handling"></a>
### 專注(Concentrate)

<img src="https://github.com/user-attachments/assets/d21c7405-647a-4da2-a396-16b9c5cd8819" width="72" height="72" alt="專注天賦圖示">

- **生效條件**：架起遠程武器且仍有耐力時，降低 60% 晃動、20% 散布與 15% 後座力；耐力耗盡後失去這些加成。

- **耐力消耗**：每秒消耗 0.5 點耐力，換彈時停止這筆消耗。若目前有 5 點耐力、沒有其他消耗或消耗修正，最多支撐 5 ÷ 0.5 = 10 秒。

- **操控算例**：隔離其他修正，原本各為 100 的晃動、散布與後座力參數，分別變成 40、80、85。這些是操控參數，不代表命中率固定提高相同百分比。

[詳細資料](ogryn_drain_stamina_for_handling.md) · [返回目錄](#talent-index)

---

<a id="ogryn_damage_reduction_after_elite_kill"></a>
### 大肌肌(Strongman)

<img src="https://github.com/user-attachments/assets/6fbf8a63-5e26-482f-9964-01eb0598b142" width="72" height="72" alt="大肌肌天賦圖示">

- **觸發方式**：擊殺精英或專家敵人後，獲得 10% 傷害減免，持續 5 秒；再次符合條件的擊殺重新計時，不累積多層。

- **減傷算例**：只計此效果，100 點變成 90 點；另有獨立 20% 減傷時為 100 × 0.9 × 0.8 = 72 點。

[詳細資料](ogryn_damage_reduction_after_elite_kill.md) · [返回目錄](#talent-index)

---

<a id="ogryn_toughness_while_bracing"></a>
### 穩定握持(Steady Grip)

<img src="https://github.com/user-attachments/assets/ce3b22d4-870e-4496-96fc-33601f9d9a62" width="72" height="72" alt="穩定握持天賦圖示">

- **恢復條件**：架起遠程武器或正在射擊時，持續恢復韌性；射擊停止後仍保留約 0.5 秒的射擊判定。

- **恢復算例**：最大韌性 200 時，每秒基礎恢復 200 × 12.5% = 25 點；持續 2 秒共 50 點。韌性恢復加成可再修正恢復量，且不會超過缺少的韌性。

- **效果性質**：這是額外持續恢復，不是讓原本的協同自然恢復只提高 12.5%。

[詳細資料](ogryn_toughness_while_bracing.md) · [返回目錄](#talent-index)

---

<a id="ogryn_ranged_damage_immunity"></a>
### 休想再打中我......(Can't Hit Me...Again)

<img src="https://github.com/user-attachments/assets/b7e2a92b-0a60-459a-87c9-6276b204f64e" width="72" height="72" alt="休想再打中我......天賦圖示">

- **觸發方式**：自己受到遠程傷害後，獲得 20% 遠程減傷，持續 2.5 秒；僅扣韌性也能觸發。觸發的第一下已經結算，不會回頭減傷。

- **持續與冷卻**：期間再次受擊不重新計時；效果結束後進入 4 秒冷卻。若第 0 秒觸發，第 2.5 秒結束，第 6.5 秒才可再次觸發。

- **減傷算例**：效果期間，此階段 100 點遠程傷害變成 80 點；近戰傷害不受這項減免影響。

[詳細資料](ogryn_ranged_damage_immunity.md) · [返回目錄](#talent-index)

---

<a id="ogryn_wield_speed_increase"></a>
### 熟能生巧(Dedicated Practice)

<img src="https://github.com/user-attachments/assets/5974d1c4-5b31-42b8-af90-022202c4614e" width="72" height="72" alt="熟能生巧天賦圖示">

- **效果**：提高 35% 武器切換速度，減少受這項速度控制的拔出武器動作時間；不提高換彈速度。

- **時間算例**：原本 1 秒的動作變成 1 ÷ 1.35 ≈ 0.741 秒，約縮短 25.9%；不是縮短至原本的 35%，也不是直接減少 35% 時間。

#### 繁中原文勘誤

- 原文「武器切換速度縮短為 +35%」混淆速度與時間。應為「武器切換速度提高 35%」，相同動作約需原時間的 74.1%。

[詳細資料](ogryn_wield_speed_increase.md) · [返回目錄](#talent-index)

---

<a id="ogryn_ranged_improves_melee"></a>
### 射盡殺戮(Spray and Slay)

<img src="https://github.com/user-attachments/assets/eeae1229-b245-43fc-9840-960c36f5787e" width="72" height="72" alt="射盡殺戮天賦圖示">

- **觸發方式**：消耗彈藥使目前武器的彈匣變空時，獲得 15% 近戰傷害與 7.5% 近戰攻速，持續 6 秒；之後切換近戰武器即可利用加成。

- **疊層與重新計時**：再次符合條件可重新計時，百分比不會逐次堆疊；光是持續拿著空彈匣不會不停觸發。

- **計算範例**：基礎 100 點近戰傷害變成 115 點；受攻速影響的 1 秒動作變成 1 ÷ 1.075 ≈ 0.930 秒。其他同階段傷害或速度加成各自相加。

[詳細資料](ogryn_ranged_improves_melee.md) · [返回目錄](#talent-index)

---

<a id="ogryn_melee_improves_ranged"></a>
### 猛砸爆裂(Bash and Blast)

<img src="https://github.com/user-attachments/assets/fdf1eb1f-b76f-4452-beac-f2205fc32d2b" width="72" height="72" alt="猛砸爆裂天賦圖示">

- **觸發與疊層**：近戰擊殺一名敵人獲得一層，每層增加 3% 遠程傷害，最多 5 層、合計 15%，持續 10 秒；再次近戰擊殺重新計時。

- **傷害算例**：滿層時，基礎 100 點遠程傷害變成 115 點；同階段另有 20% 加成時為 100 × (1 + 20% + 5 × 3%) = 135 點。

[詳細資料](ogryn_melee_improves_ranged.md) · [返回目錄](#talent-index)

---

<a id="ogryn_ally_elite_kills_grant_cooldown"></a>
### 格鬥兵(Bruiser)

<img src="https://github.com/user-attachments/assets/9e138d4c-f301-46c6-9eef-5aff038efc7c" width="72" height="72" alt="格鬥兵天賦圖示">

- **觸發方式**：自己或協同範圍內的隊友擊殺精英敵人後，4 秒內約每秒額外恢復 0.5 秒戰鬥技能冷卻。專家敵人若不屬於精英，不會觸發。

- **重新計時方式**：再次符合條件的擊殺重設 4 秒倒數，不會把每秒恢復量堆高；效果滿層僅一層。

- **時間算例**：一般自然冷卻每秒恢復 1 秒，再加每次 0.5 秒補回；完整收到 4 次補回時，4 秒內共推進 4 + 4 × 0.5 = 6 秒冷卻，其中額外省下 2 秒。實際會受到冷卻是否已滿及更新時間點影響。

[詳細資料](ogryn_ally_elite_kills_grant_cooldown.md) · [返回目錄](#talent-index)

---

<a id="ogryn_weakspot_damage"></a>
### 精準打擊(Strike True)

<img src="https://github.com/user-attachments/assets/dae8db6d-b212-4abd-a84b-246c0910e0b3" width="72" height="72" alt="精準打擊天賦圖示">

- **效果**：近戰命中敵人弱點時，該次攻擊威力提高 10%；不影響遠程弱點命中，也不提高未命中弱點的近戰攻擊。

- **威力算例**：原威力 500，命中弱點時變成 500 × 1.1 = 550；若同階段已有 20% 威力加成，則為 500 × (1 + 20% + 10%) = 650。

- **傷害計算**：這項加成作用在威力，再交給武器的傷害、衝擊力等曲線計算；它與只增加弱點額外傷害的效果不同，不應直接把最終傷害固定乘 1.1。

[詳細資料](ogryn_weakspot_damage.md) · [返回目錄](#talent-index)

---

<a id="ogryn_bracing_reduces_damage_taken"></a>
### 機動部署(Mobile Emplacement)

<img src="https://github.com/user-attachments/assets/38b1d6e0-b6a5-4692-92a2-fe6caf0b9083" width="72" height="72" alt="機動部署天賦圖示">

- **生效條件**：架起遠程武器或正在射擊時，受到的傷害減少 25%；射擊停止後仍保留約 0.5 秒的射擊判定。

- **減傷算例**：此階段原本 100 點傷害變成 100 × 0.75 = 75 點；另有獨立 20% 減傷時為 60 點。

- **持續方式**：只要符合架槍或射擊條件便生效，沒有額外疊層或固定冷卻。

[詳細資料](ogryn_bracing_reduces_damage_taken.md) · [返回目錄](#talent-index)

---
