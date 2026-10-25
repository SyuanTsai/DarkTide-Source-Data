# 法務官天賦：Release 1.13.1

[English](en/README.md)

[來源、公式與技術索引](SOURCE_INDEX.md)｜[技能分類](../../README.md)｜[版本資訊](../../../README.md)
[角色基礎效果](BASE_EFFECTS.md)


<a id="talent-index"></a>
## 技能目錄

| 技能 | 主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/aa116dc7-88d2-450b-bcff-c2dc0bb6b4c0" width="32" height="32" alt="遠程引爆天賦圖示"> [遠程引爆](#adamant_whistle)<br>- Remote Detonation | <ul><li>在電子獒犬所在處發動電擊與爆炸，並使受電擊敵人承受傷害提高 10%，持續 2 秒。</li><li>最多 2 次充能；每 50 秒恢復 1 次，兩次都用完需 100 秒補滿。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/9f134d52-bce2-4365-b74c-f93550febf29" width="32" height="32" alt="法務官手榴彈天賦圖示"> [法務官手榴彈](#adamant_grenade_improved)<br>- Arbites Grenade | <ul><li>碰撞引爆，爆炸半徑 10 公尺，中央 2.5 公尺傷害較高。</li><li>最多攜帶 4 枚，比基礎版本多 1 枚；不會自行按冷卻補回。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/db0783ea-1312-4fed-a430-c1be9a87d2e1" width="32" height="32" alt="電能地雷天賦圖示"> [電能地雷](#adamant_shock_mine)<br>- Voltaic Shock Mine | <ul><li>部署後約 1 秒啟動；偵測到敵人後，對 3 公尺內敵人持續施加電擊，作用 15 秒。</li><li>最多攜帶 2 枚；單次電擊維持 3 秒。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/ab5c4535-3182-4aa9-a388-faffff1d0faa" width="32" height="32" alt="小隊之友天賦圖示"> [小隊之友](#adamant_companion_coherency)<br>- Part of the Squad | <ul><li>電子獒犬計入小隊協同；你和協同中的盟友額外減少 7.5% 韌性傷害。</li><li>以單獨這份效果估算，100 點韌性傷害會減為 92.5 點。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/2f99cb20-a83e-4a7c-98ee-f43949811f84" width="32" height="32" alt="雷厲風行天賦圖示"> [雷厲風行](#adamant_reload_speed_aura)<br>- Ruthless Efficiency | <ul><li>你和協同中的盟友換彈速度提高 12.5%。</li><li>選用此光環時，電子獒犬不再計入協同成員。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/57af1e74-7cc5-45bb-a332-11d2e5fde909" width="32" height="32" alt="鎮壓異己天賦圖示"> [鎮壓異己](#adamant_damage_vs_staggered_aura)<br>- Breaking Dissent | <ul><li>你和協同中的盟友對踉蹌敵人的傷害提高 10%。</li><li>只計此效果時，原本 100 點傷害會提高到 110 點；目標未踉蹌時不加成。</li><li>選用此光環時，電子獒犬不再計入協同成員。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/a0aad2f2-d03d-486c-b583-1307a9780ac2" width="32" height="32" alt="突破重圍天賦圖示"> [突破重圍](#adamant_charge)<br>- Break the Line | <ul><li>向前猛砸並衝入敵陣；猛砸期間視為格擋，結束後獲得 6 秒傷害與衝擊加成。</li><li>基礎冷卻 20 秒，單次充能。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/18c1f301-d18b-4469-9fbf-bb5ede1b3353" width="32" height="32" alt="天鷹使節天賦圖示"> [天鷹使節](#adamant_area_buff_drone_improved)<br>- Nuncio-Aquila | <ul><li>部署天鷹使節，持續 20 秒並影響周圍 7.5 公尺；冷卻 60 秒，單次充能。</li><li>強化版讓盟友每秒恢復 7.5% 韌性，並提高壓制與衝擊、降低後座力，同時免疫眩暈、減速與壓制。</li><li>範圍內敵人受到的傷害提高 15%。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/4eb18874-83b0-4e2f-bf2b-c91001a15371" width="32" height="32" alt="懲戒者姿態天賦圖示"> [懲戒者姿態](#adamant_stance)<br>- Castigator's Stance | <ul><li>啟動時恢復全部韌性；進入 10 秒姿態，移動速度提高 15%、威力提高 20%、受到的傷害減少 70%，但不能衝刺。</li><li>冷卻 50 秒，單次充能；姿態結束後，傷害減免再延續 2 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/8c312d8e-8b49-45cd-828e-62cffc6d0a25" width="32" height="32" alt="蒙福軍武天賦圖示"> [蒙福軍武](#adamant_stance_ranged_kills_transfer_ammo)<br>- Blessed Armament | <ul><li>處於懲戒者姿態時，遠程擊殺會從備用彈藥補入彈匣容量的 10%，無條件進位，彈匣不足時只補缺口。</li><li>能力姿態持續 10 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/f7454987-ea7e-474e-bb22-3c3ead9adb1b" width="32" height="32" alt="處決令天賦圖示"> [處決令](#adamant_stance_elite_kills_stack_damage)<br>- Writ of Execution | <ul><li>處於懲戒者姿態時，每擊殺一名精英或專家敵人，傷害提高 7.5%，持續 12 秒，最多 6 層。</li><li>滿層提供 45% 傷害加成；已取得的增益可在姿態結束後繼續倒數。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/27a74ed8-eb51-4774-ae8e-2089aa7b1686" width="32" height="32" alt="嗜血殺戮天賦圖示"> [嗜血殺戮](#adamant_stance_dog_bloodlust)<br>- Bloodlust | <ul><li>啟動懲戒者姿態後，電子獒犬造成的傷害提高 75%，效果維持姿態的 10 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/53dd2864-62b6-4e6c-9d62-e79831b33c78" width="32" height="32" alt="振奮朗誦天賦圖示"> [振奮朗誦](#adamant_drone_buff_talent)<br>- Inspiring Recitation | <ul><li>天鷹使節範圍內的友方額外獲得 30% 韌性減傷、30% 救援速度及 10% 攻擊速度。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/483804fa-b052-4baa-b3d7-5e7dbfbe44f4" width="32" height="32" alt="畏怯正義天賦圖示"> [畏怯正義](#adamant_drone_debuff_talent)<br>- Fear of Justice | <ul><li>天鷹使節範圍內敵人的近戰傷害與近戰攻擊速度各降低 25%。</li><li>單計本效果，原本 1 秒的可調整攻擊動作需約 1.33 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/a0f08b1e-586b-4a65-b271-29d79874f573" width="32" height="32" alt="懲惡揚善天賦圖示"> [懲惡揚善](#adamant_charge_toughness)<br>- Commendation from Condemnation | <ul><li>衝鋒擊中精英、專家或巨獸時，每名不同目標恢復 20% 韌性與 15% 耐力。</li><li>單次衝鋒最多恢復 100% 韌性及 75% 耐力；同一敵人不重複計算。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/d2b1945d-2300-4993-a649-00c1e3858e0d" width="32" height="32" alt="針鋒相對天賦圖示"> [針鋒相對](#adamant_charge_cooldown_reduction)<br>- Targeted Brutality | <ul><li>衝鋒每次有效命中一般敵人返還 0.5 秒戰鬥技能冷卻；命中精英、專家或巨獸返還 1 秒。</li><li>單次衝鋒最多返還 5 秒冷卻。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/7b78f1c1-2250-44c0-9642-315fd105575a" width="32" height="32" alt="交鋒天賦圖示"> [交鋒](#adamant_charge_longer_distance)<br>- Engage | <ul><li>衝鋒距離由基礎 3.75 公尺增加 3.75 公尺，目標距離上限成為 7.5 公尺。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/6283df18-7a2a-4a7b-adac-4a13c5cd6315" width="32" height="32" alt="殺戮命令天賦圖示"> [殺戮命令](#adamant_dog_damage_after_ability)<br>- Kill Order | <ul><li>使用戰鬥技能後，電子獒犬傷害提高 50%，持續 12 秒；效果生效時再次使用戰鬥技能可重新計時。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/66f3dd5d-68b9-415a-8330-b6daf3fb427c" width="32" height="32" alt="處刑命令天賦圖示"> [處刑命令](#adamant_execution_order)<br>- Execution Order | <ul><li>自動標記前方 40 公尺內的精英、專家或頭目。</li><li>你或電子獒犬擊殺標記目標後，恢復 15% 最大韌性，並獲得 8 秒傷害與攻速加成。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/47d0c2b2-0d8e-4906-a528-48f9488353e9" width="32" height="32" alt="終點站令狀天賦圖示"> [終點站令狀](#adamant_terminus_warrant)<br>- Terminus Warrant | <ul><li>遠程每發每個命中敵人建立近戰正義層數，弱點命中改為給 3 層；近戰命中建立遠程正義層數，各最多 20 層。</li><li>切換至對應武器時消耗層數並啟動固定 12 秒增益。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/b838686c-aaa0-49a2-bbea-fc9e074bb6cf" width="32" height="32" alt="堅定不移天賦圖示"> [堅定不移](#adamant_forceful)<br>- Forceful | <ul><li>踉蹌命中或格擋可累積最多 10 層，每層增加 5% 衝擊並降低受傷倍率。</li><li>層數共用 5 秒時間；受傷每 0.25 秒最多移除 1 層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/a2aadd19-f969-47d7-96f3-3021eb1fb5c8" width="32" height="32" alt="孤狼天賦圖示"> [孤狼](#adamant_disable_companion)<br>- Lone Wolf | <ul><li>移除電子獒犬，換取 +20% 傷害、+10% 攻擊速度、15% 韌性減傷與額外 1 次閃擊攜帶量。</li><li>缺少手雷時每 45 秒補 1 枚；電能地雷則每 90 秒補 1 枚。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/1016875d-cc4c-44f2-8a06-c93155d482d4" width="32" height="32" alt="律法之志天賦圖示"> [律法之志](#adamant_forceful_toughness_regen_per_stack)<br>- Will of the Lex | <ul><li>選取後堅定不移每層每秒恢復 0.5% 最大韌性。</li><li>效果隨堅定不移層數逐秒累積，最多 10 層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/92922b1c-4991-480e-86af-e050b9faa496" width="32" height="32" alt="堅定意志天賦圖示"> [堅定意志](#adamant_forceful_stun_immune_and_block_all)<br>- Adamant Will | <ul><li>堅定不移維持滿層時取得免暈與減速免疫。</li><li>離開滿層後效果再維持 3 秒；完美格擋時額外允許格擋不可格擋攻擊。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/3ecc49e6-a4c7-4d77-926d-623e4f8f34f6" width="32" height="32" alt="鎖定目標天賦圖示"> [鎖定目標](#adamant_forceful_offensive)<br>- Targets Acquired | <ul><li>堅定不移達 10 層時取得攻速與順劈加成。</li><li>離開滿層後加成再維持 3 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/bc3b59ed-a142-4807-86f9-f75d65b367b4" width="32" height="32" alt="法務官警覺天賦圖示"> [法務官警覺](#adamant_forceful_ability_damage)<br>- Arbites Vigilant | <ul><li>使用戰鬥技能時，將目前堅定不移層數轉成 12 秒威力加成。</li><li>最多 10 層各給 2.5% 威力，觸發會消耗堅定不移層數。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/62f41d0b-cd55-459d-b4d7-c8c155da410f" width="32" height="32" alt="審判之力天賦圖示"> [審判之力](#adamant_forceful_stagger_on_low_high)<br>- Judicial Force | <ul><li>堅定不移從未滿升至 10 層，或從有層數降到 0 層時，會使附近敵人遭到爆炸踉蹌。</li><li>達到高層與歸零各自有 5 秒冷卻。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/7b782337-07db-4ff4-9a85-ba21d1fcfe6b" width="32" height="32" alt="能屈能伸天賦圖示"> [能屈能伸](#adamant_terminus_warrant_cdr)<br>- Obstinate | <ul><li>消耗完整 20 層正義後，12 秒內每秒額外恢復 0.33 秒戰鬥技能冷卻。</li><li>再次觸發重新計時；名目額外恢復總量為 3.96 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/053a0db6-481b-4944-9077-d1d9a05759dd" width="32" height="32" alt="終端律令天賦圖示"> [終端律令](#adamant_terminus_warrant_support)<br>- Terminal Decree | <ul><li>每次消耗終點站令狀層數時，按實際消耗層數恢復自身與協同範圍內隊友韌性。</li><li>每層恢復最大韌性的 1%；基礎上限 20 層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/5c90d0a5-8150-4c04-84cf-9b0ae1d6e28f" width="32" height="32" alt="效率殺手天賦圖示"> [效率殺手](#adamant_execution_order_crit)<br>- Efficient Killer | <ul><li>擊殺被標記敵人時，獲得 8 秒爆擊率與暴擊傷害加成。</li><li>加成為 +10 個百分點爆擊率與 +25% 額外暴擊傷害。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/83df9392-fcfa-43e9-b9e0-ceef6f50ade7" width="32" height="32" alt="生化武器關天賦圖示"> [生化武器關](#adamant_execution_order_cdr)<br>- Malocator | <ul><li>你或自己的電子獒犬擊殺標記目標後，8 秒內每秒額外恢復 0.5 秒戰鬥技能冷卻。</li><li>再次觸發重新計時；名目額外恢復總量為 4 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/ab53bec8-fd00-470c-8c5d-46cc58904f13" width="32" height="32" alt="罪不可赦天賦圖示"> [罪不可赦](#adamant_execution_order_rending)<br>- No Lenience | <ul><li>擊殺被標記敵人後，獲得 8 秒撕裂加成。</li><li>撕裂修正為 +10%，進入共用護甲傷害計算。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/eeb40551-fbea-4de0-8e46-0a07e4bfcec6" width="32" height="32" alt="殺戮協議天賦圖示"> [殺戮協議](#adamant_execution_order_permastack)<br>- Keeping Protocol | <ul><li>每次擊殺被標記敵人，永久增加對巨獸的傷害與防禦，最多 30 層。</li><li>每層增加 1% 對巨獸傷害；巨獸打你的傷害逐層相乘降低。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/0633a2b7-e8e9-4215-85a9-f54ae4d95809" width="32" height="32" alt="不落人後天賦圖示"> [不落人後](#adamant_pinning_dog_bonus_moving_towards)<br>- Not Far Behind | <ul><li>每當電子獒犬發動猛撲，玩家取得 5 秒移動速度與傷害加成。</li><li>兩項加成各為 10%；再次觸發會重新計時單層效果時間。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/6208ebde-9eb1-4a4d-923c-823a0e511bf9" width="32" height="32" alt="往前進攻！天賦圖示"> [往前進攻！](#adamant_companion_focus_ranged)<br>- Go Get 'Em! | <ul><li>電子獒犬更偏好選擇遠程敵人，並對遠程敵人增加 50% 傷害。</li><li>選敵評分提高遠程敵人優先度，並擴大遠程焦點的選敵距離。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/d61cee49-95ce-43fb-ae8a-b05ba598366b" width="32" height="32" alt="猛犬出擊天賦圖示"> [猛犬出擊](#adamant_companion_focus_elite)<br>- Unleashed Brutality | <ul><li>電子獒犬更偏好精英與專家敵人，並對兩類敵人增加 25% 傷害。</li><li>選敵評分提高精英與專家敵人的優先度。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/34f0ccb1-7c44-4aaf-a697-e0ef2b6f2c0e" width="32" height="32" alt="審判之旨天賦圖示"> [審判之旨](#adamant_terminus_warrant_improved_combined)<br>- Writ of Judgement | <ul><li>完整消耗 20 層近戰正義或遠程正義後，近戰與遠程攻擊速度各提高 10%，爆擊率增加 10 個百分點，持續 12 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/a6716d2d-1100-4bbe-be59-683b5b9176b4" width="32" height="32" alt="電子獒犬與人天賦圖示"> [電子獒犬與人](#adamant_toughness_regen_near_companion)<br>- Man and Cyber-Mastiff | <ul><li>在自己的電子獒犬 8 公尺內，每秒恢復最大韌性的 5%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/82a4d2c5-a0aa-4c05-a8ea-e03bc0e4932b" width="32" height="32" alt="凋零烈焰天賦圖示"> [凋零烈焰](#adamant_damage_after_reloading)<br>- Withering Fire | <ul><li>換彈後，遠程傷害提高 15%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/0f0f19ee-07a9-47a6-9acf-599b809569a4" width="32" height="32" alt="審判之錘天賦圖示"> [審判之錘](#adamant_multiple_hits_attack_speed)<br>- Hammer of Judgement | <ul><li>同一次近戰攻擊命中至少 3 名敵人，近戰攻速提高 10%，持續 3 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fc3f3a29-7b71-45d4-aec6-c72036ba9831" width="32" height="32" alt="繩之以法天賦圖示"> [繩之以法](#adamant_elite_special_kills_replenish_toughness)<br>- Target Neutralised | <ul><li>擊殺精英或專家敵人，立即恢復最大韌性的 10%，接著 4 秒再恢復 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/3098a511-fa0f-444e-a9e2-8e6591688115" width="32" height="32" alt="近在眉睫天賦圖示"> [近在眉睫](#adamant_close_kills_restore_toughness)<br>- Up Close | <ul><li>在 12.5 公尺內擊殺敵人，恢復最大韌性的 5%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/898ad4c6-3f99-404d-8ff9-b15a9820f8e9" width="32" height="32" alt="鐵血之志天賦圖示"> [鐵血之志](#adamant_staggers_replenish_toughness)<br>- Force of Will | <ul><li>近戰攻擊的第一個命中目標受到踉蹌時，恢復最大韌性的 7.5%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4ce13efe-7a81-48cd-9bb6-47dfb55f63b8" width="32" height="32" alt="電能獠牙天賦圖示"> [電能獠牙](#adamant_dog_attacks_electrocute)<br>- Voltaic Mandibles Augment | <ul><li>電子獒犬的撲擊與壓制攻擊會電擊目標，效果持續 5 秒，可重新計時。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4c4b06a3-049f-4272-b1d2-a8a472f541b0" width="32" height="32" alt="走一走治百病天賦圖示"> [走一走治百病](#adamant_stamina_spent_replenish_toughness)<br>- Walk It Off | <ul><li>每累計消耗 1 點耐力，在 3 秒內恢復最大韌性的 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d4c3f66c-8fa8-419f-8a46-f94c842a9b4e" width="32" height="32" alt="堅忍不拔天賦圖示"> [堅忍不拔](#adamant_limit_dmg_taken_from_hits)<br>- True Grit | <ul><li>單次攻擊造成的生命傷害上限為 50 點；不阻止必殺效果。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/af78e688-7708-4d00-88f0-913478235d41" width="32" height="32" alt="韌性減傷天賦圖示"> [韌性減傷](#base_toughness_damage_reduction_node_buff_medium_1)<br>- Toughness Damage Reduction | <ul><li>韌性減傷增加 10 個百分點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d25eaf26-cb8b-4009-80ac-af75d049fb9f" width="32" height="32" alt="法務官之鎧天賦圖示"> [法務官之鎧](#adamant_armor)<br>- Arbitrator Armour | <ul><li>最大韌性增加 25 點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/90c9bff4-baf3-4b53-b160-16945870dd88" width="32" height="32" alt="彈藥腰帶天賦圖示"> [彈藥腰帶](#adamant_ammo_belt)<br>- Ammo Belt | <ul><li>備用彈藥容量提高 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4232eef3-1499-4f4c-b2e3-d1416db2ec8e" width="32" height="32" alt="呼吸器天賦圖示"> [呼吸器](#adamant_rebreather)<br>- Rebreather | <ul><li>承受的腐敗降低 20%，毒氣傷害降低 75%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/02fd58ae-50fc-461f-879d-70d77a2aff44" width="32" height="32" alt="苛政壓制天賦圖示"> [苛政壓制](#adamant_hitting_multiple_gives_tdr)<br>- Suppression Protocols | <ul><li>同一次攻擊命中至少 3 名敵人，獲得 20% 韌性減傷，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/62b0bee6-3606-40bc-9d78-06f072535e59" width="32" height="32" alt="遠程傷害增幅天賦圖示"> [遠程傷害增幅](#base_ranged_damage_node_buff_medium_1)<br>- Ranged Damage Boost | <ul><li>遠程傷害提高 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8c224499-f2ca-420c-bcf6-39034e6a35b2" width="32" height="32" alt="近戰增幅天賦圖示"> [近戰增幅](#base_melee_damage_node_buff_medium_1)<br>- Melee Damage Boost | <ul><li>近戰傷害提高 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/549d3657-c19a-49a6-b8ad-2c1e77080dfa" width="32" height="32" alt="重顎獠牙天賦圖示"> [重顎獠牙](#adamant_dog_pounces_bleed_nearby)<br>- Razor-Jaw Augment | <ul><li>電子獒犬撲擊的周邊推撞，以及對歐格林／巨獸的壓制攻擊，可施加 6 層流血。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d856ef6a-9f61-4b4a-b672-e60019dea866" width="32" height="32" alt="勢如破竹天賦圖示"> [勢如破竹](#adamant_damage_reduction_after_elite_kill)<br>- Imposing Force | <ul><li>擊殺精英或專家敵人後，獲得 25% 減傷，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fd423ddb-0080-4603-8fd7-90257b583c3d" width="32" height="32" alt="堅守陣線天賦圖示"> [堅守陣線](#adamant_staggers_reduce_damage_taken)<br>- Hold the Line | <ul><li>使敵人踉蹌可累積減傷，最多 5 層、持續 8 秒；受到近戰命中後清除。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d3fa1c73-0a49-42ab-920c-11b7238af849" width="32" height="32" alt="順劈加成天賦圖示"> [順劈加成](#base_cleave_node_buff_medium_1)<br>- Cleave Boost | <ul><li>傷害與踉蹌的順劈容量提高 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e8b31492-509e-479a-9369-203e36e1e1e4" width="32" height="32" alt="衝擊加成天賦圖示"> [衝擊加成](#base_impact_node_buff_medium_1)<br>- Impact Boost | <ul><li>衝擊提高 25%，更容易使敵人踉蹌。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/170599ce-ad50-4760-93b2-da650c6deac8" width="32" height="32" alt="塑鋼裝甲天賦圖示"> [塑鋼裝甲](#adamant_plasteel_plates)<br>- Plasteel Plates | <ul><li>最大韌性增加 25 點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5df365c7-8213-4c06-acc5-2b00f0cda022" width="32" height="32" alt="鋒利獠牙天賦圖示"> [鋒利獠牙](#adamant_dog_applies_brittleness)<br>- Serrated Maw | <ul><li>電子獒犬的撲擊施加 15% 脆弱，持續 5 秒；共用脆弱上限 40%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/9a87f145-d4a8-4554-b8ca-f5fbb2a58944" width="32" height="32" alt="追跡法務官天賦圖示"> [追跡法務官](#adamant_dodge_grants_damage)<br>- Arbites Revelatum | <ul><li>成功閃避敵人攻擊後，傷害提高 15%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/59f1504d-8b25-40c7-a582-b5de1b3278cf" width="32" height="32" alt="罪孽判官天賦圖示"> [罪孽判官](#adamant_stacking_weakspot_strength)<br>- Soulguilt Scan | <ul><li>命中弱點後每層增加 2% 弱點威力，最多 8 層，持續 10 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/88c5f583-d739-484e-a7cd-89b79a90334d" width="32" height="32" alt="恰如其分天賦圖示"> [恰如其分](#adamant_elite_special_kills_reload_speed)<br>- Judicious Efficiency | <ul><li>擊殺精英或專家敵人後，下次換彈速度提高 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8f0bcba7-48bd-4d61-ad19-b03a65160eb5" width="32" height="32" alt="行軍之志天賦圖示"> [行軍之志](#adamant_movement_speed_on_block)<br>- March | <ul><li>遠程攻擊命中敵人後，移動速度提高 15%，持續 3 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6d045fa3-97bc-4943-9e6e-0f703e68288d" width="32" height="32" alt="無處可逃天賦圖示"> [無處可逃](#adamant_elite_special_kills_offensive_boost)<br>- No Escape | <ul><li>擊殺精英或專家敵人後，傷害與移速提高 10%，持續 4 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/7b24cc5d-1975-4762-8b77-8899c0713175" width="32" height="32" alt="兵敗如山倒天賦圖示"> [兵敗如山倒](#adamant_cleave_after_push)<br>- Drive them Back | <ul><li>推擊命中敵人後，近戰傷害的順劈容量提高 75%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e51d3184-42e7-434f-8369-0ae7a6568619" width="32" height="32" alt="盾型裝甲天賦圖示"> [盾型裝甲](#adamant_shield_plates)<br>- Shield Plates | <ul><li>格擋後 3 秒恢復最大韌性的 15%；完美格擋另立即恢復 10%，這份立即恢復有 1 秒冷卻。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/bff83e5a-48a0-4f4c-b280-3093df526c5d" width="32" height="32" alt="重如律法天賦圖示"> [重如律法](#adamant_heavy_attacks_increase_damage)<br>- Weight of the Lex | <ul><li>近戰重擊命中後，傷害提高 15%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fcb8d517-7a08-452a-a577-1ab15af469cb" width="32" height="32" alt="毀滅打擊天賦圖示"> [毀滅打擊](#adamant_melee_attacks_on_staggered_rend)<br>- Strike Down | <ul><li>對踉蹌敵人的近戰攻擊獲得 15% 撕裂。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c776951e-d8de-46cb-ad58-7c14af6b0997" width="32" height="32" alt="狂熱信仰天賦圖示"> [狂熱信仰](#adamant_crit_chance_on_kill)<br>- Zealous Dedication | <ul><li>擊殺後每層增加 2 個百分點爆擊率，最多 8 層，持續 10 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e650aa60-14d1-446d-9fa3-fed8dd633716" width="32" height="32" alt="制裁重擊天賦圖示"> [制裁重擊](#adamant_crits_rend)<br>- Prosecution Blow | <ul><li>遠程暴擊獲得 20% 撕裂。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/cd883557-4048-43f0-a3b7-3a90bbc6ffe8" width="32" height="32" alt="街頭妙招天賦圖示"> [街頭妙招](#adamant_dodge_improvement)<br>- Street Smarts | <ul><li>有效閃避次數增加 1 次；近戰閃避結束後的判定寬限延長 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/62b4954d-42c3-4eab-a6ea-a17719414e19" width="32" height="32" alt="巨獸獵人天賦圖示"> [巨獸獵人](#adamant_monster_hunter)<br>- Monstrosity Hunter | <ul><li>對歐格林與巨獸造成的傷害提高 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6f3ef825-f018-482c-b511-60f87907cefc" width="32" height="32" alt="帝皇之拳天賦圖示"> [帝皇之拳](#adamant_first_melee_hit_increased_damage)<br>- The Emperor's Fist | <ul><li>每次近戰揮擊的第一個命中目標，傷害提高 15%、衝擊提高 30%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4b7cf064-ea83-4334-a484-a222e22af7a3" width="32" height="32" alt="篩選目標天賦圖示"> [篩選目標](#adamant_pinning_dog_elite_damage)<br>- Target Selection | <ul><li>擊殺自己的電子獒犬正在壓制的精英或專家敵人後，對精英與專家的傷害提高 15%，持續 8 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/29a7dad3-3f9c-4679-a37d-680025796f47" width="32" height="32" alt="擊殺順序天賦圖示"> [擊殺順序](#adamant_increased_damage_to_high_health)<br>- Target Priority | <ul><li>對生命值高於 75% 的敵人，傷害提高 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fc2bbfe4-50b8-4c9c-b775-20f1c2c33792" width="32" height="32" alt="猛犬氣場天賦圖示"> [猛犬氣場](#adamant_pinning_dog_kills_buff_allies)<br>- Canine Morale | <ul><li>擊殺自己的電子獒犬正在壓制的敵人後，你與協同範圍內隊友獲得 20% 韌性減傷，並在 5 秒內恢復 10% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8a0b3c73-0e7e-4d31-9f7d-385634eae6e3" width="32" height="32" alt="迅疾走位天賦圖示"> [迅疾走位](#adamant_sprinting_sliding)<br>- Rapid Movement | <ul><li>滑行結束後，衝刺速度提高 5%，持續 5 秒；擊殺恢復最大耐力的 5%，冷卻 0.75 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/75cf7e7e-044e-432f-b7cb-b73e53164425" width="32" height="32" alt="最後通牒天賦圖示"> [最後通牒](#adamant_ranged_damage_on_melee_stagger)<br>- Final Warning | <ul><li>近戰或推擊使敵人踉蹌後，遠程傷害提高 15%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/03af9ca3-e4f4-4383-9650-f8ac659cfadd" width="32" height="32" alt="秉賦為先天賦圖示"> [秉賦為先](#adamant_clip_size)<br>- Priority Endowment | <ul><li>彈匣容量提高 15%，容量向上取整數。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a72c3f5b-2dde-48d0-8f5c-1af4ba20a044" width="32" height="32" alt="惡徒退散天賦圖示"> [惡徒退散](#adamant_damage_vs_suppressed)<br>- Cower, Miscreants! | <ul><li>對受壓制敵人的傷害提高 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d3c96bd5-6464-499a-a742-cd58ddf1fa02" width="32" height="32" alt="正當手段天賦圖示"> [正當手段](#adamant_stacking_damage)<br>- Justified Measures | <ul><li>攻擊命中首個目標後，每層增加 2% 傷害，最多 5 層，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/af381ce2-1360-49a1-931d-6db3fb174166" width="32" height="32" alt="壓制武力天賦圖示"> [壓制武力](#adamant_staggered_enemies_deal_less_damage)<br>- Suppression Force | <ul><li>以近戰或推擊命中處於踉蹌狀態的敵人，使其造成的傷害降低 20%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/2577c784-85c4-473c-b9ba-a88f8de35355" width="32" height="32" alt="震盪攻擊天賦圖示"> [震盪攻擊](#adamant_melee_weakspot_hits_count_as_stagger)<br>- Concussive | <ul><li>近戰命中弱點後，目標在 4 秒內視為處於踉蹌狀態。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/aa78a41a-3cea-4e8d-ba36-4496c3619be7" width="32" height="32" alt="針對弱者天賦圖示"> [針對弱者](#adamant_staggering_enemies_take_more_damage)<br>- Target the Weak | <ul><li>近戰或推擊命中處於踉蹌狀態的敵人，使其承受的近戰傷害提高 15%，持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/96221430-4610-4bf3-9b19-4fd056c99e74" width="32" height="32" alt="還治其人之身天賦圖示"> [還治其人之身](#adamant_perfect_block_damage_boost)<br>- Retaliatory Force | <ul><li>格擋耐力消耗降低 15%；完美格擋後，傷害與攻速提高 15%，持續 8 秒。</li></ul> | 技能 |

---

## 閃擊

<a id="adamant_whistle"></a>
### 遠程引爆(Remote Detonation)

<img src="https://github.com/user-attachments/assets/aa116dc7-88d2-450b-bcff-c2dc0bb6b4c0" width="72" height="72" alt="遠程引爆天賦圖示">

- **引爆位置與範圍**：啟動後約 0.3 秒，在電子獒犬當下位置引爆。5 公尺內施加電擊與 2.5 秒輕度踉蹌；爆炸傷害半徑為 4 公尺，中央 2 公尺傷害較高。

- **電擊與承傷**：電擊狀態持續 2 秒，期間目標承受的傷害另乘 1.1。單計這項承傷增加，原本 100 點變成 110；若攻擊者另有 25% 增傷，則為 100 × 1.25 × 1.1 = 137.5。

- **爆炸算例**：只計中央爆炸的護甲階段，無甲基準為 600 × 1 = 600，防彈護甲為 600 × 0.5 = 300。實際還需計入部位、遮蔽及電擊附帶的承傷效果。距離獒犬 4.5 公尺時，處於電擊範圍，但已超出爆炸傷害範圍。

- **充能與冷卻**：最多 2 次，單次恢復需 50 秒。兩次共用同一個冷卻進度，依序補回；若短時間內用光兩次、沒有其他冷卻加成，約 50 秒先恢復一次、100 秒恢復兩次。

[詳細資料](adamant_whistle.md) · [返回目錄](#talent-index)

---

<a id="adamant_grenade_improved"></a>
### 法務官手榴彈(Arbites Grenade)

<img src="https://github.com/user-attachments/assets/9f134d52-bce2-4365-b74c-f93550febf29" width="72" height="72" alt="法務官手榴彈天賦圖示">

- **引爆與範圍**：投出後碰撞引爆，爆炸半徑 10 公尺；中央 2.5 公尺使用較高的近距離傷害，外圈越遠傷害越低。

- **傷害算例**：只計爆炸中央的護甲階段，基準傷害 1,500 對無甲為 1,500 × 1 = 1,500，對防彈護甲為 1,500 × 0.5 = 750，對硬殼護甲為 1,500 × 0.2 = 300。實際還需計入命中部位、爆炸遮蔽及其他增減傷。

- **攜帶與補充**：最多 4 枚，比基礎版本的 3 枚多 1 枚；投出一枚少一枚，不會自行按冷卻補回。搭配孤狼時，上限變成 5 枚，缺少手雷時每 45 秒補回 1 枚。

[詳細資料](adamant_grenade_improved.md) · [返回目錄](#talent-index)

---

<a id="adamant_shock_mine"></a>
### 電能地雷(Voltaic Shock Mine)

<img src="https://github.com/user-attachments/assets/db0783ea-1312-4fed-a430-c1be9a87d2e1" width="72" height="72" alt="電能地雷天賦圖示">

- **部署與待機**：落地部署後約 1 秒啟動，偵測半徑 3 公尺。尚未遇敵時可待機約 150 秒；首次偵測到存活敵人後，開始 15 秒的作用時間。

- **電擊方式**：每 0.2 秒重新搜尋目標，優先略過已受電擊的敵人。單次電擊維持 3 秒；目標離開範圍後，已施加的電擊仍會持續到期，留在範圍內則可在電擊解除後再次受到影響。

- **傷害算例**：電擊每 0.3～0.8 秒隨機結算一次。單計護甲、無其他修正時，無甲基準為 8 × 0.5 = 4 點，防彈與硬殼護甲基準為 8 × 1 = 8 點；跳數不固定，不能直接乘固定次數當總傷害。

- **攜帶與補充**：最多 2 枚，使用後不會自行按冷卻補充；搭配孤狼時，上限為 3 枚，缺少地雷時每 90 秒補回 1 枚。

#### 繁中原文勘誤

- 原文「落地後立即引爆」應為落地後啟動，接著對範圍內敵人持續施加電擊；不是落地瞬間一次爆炸就結束。

[詳細資料](adamant_shock_mine.md) · [返回目錄](#talent-index)

---


---

## 光環

<a id="adamant_companion_coherency"></a>
### 小隊之友(Part of the Squad)

<img src="https://github.com/user-attachments/assets/ab5c4535-3182-4aa9-a388-faffff1d0faa" width="72" height="72" alt="小隊之友天賦圖示">

- **戰犬計入協同**：電子獒犬會被視為小隊協同的一員。

- **韌性防護**：你和協同中的盟友額外獲得 7.5% 韌性傷害減免；只計此效果時，原本 100 點韌性傷害變成 100 × (1 − 0.075) = 92.5 點。若同階段已有 10% 韌性減傷，則為 100 × (1 − 10% − 7.5%) = 82.5 點。

[詳細資料](adamant_companion_coherency.md) · [返回目錄](#talent-index)

---

<a id="adamant_reload_speed_aura"></a>
### 雷厲風行(Ruthless Efficiency)

<img src="https://github.com/user-attachments/assets/2f99cb20-a83e-4a7c-98ee-f43949811f84" width="72" height="72" alt="雷厲風行天賦圖示">

- **換彈速度**：你和協同中的盟友額外獲得 12.5% 換彈速度；原本需 2 秒的換彈動作，在只計此效果時約為 2 ÷ 1.125 = 1.78 秒。

- **協同判定**：此光環選項會讓電子獒犬不再計入小隊協同；盟友仍須符合一般協同條件才會取得換彈加成。

[詳細資料](adamant_reload_speed_aura.md) · [返回目錄](#talent-index)

---

<a id="adamant_damage_vs_staggered_aura"></a>
### 鎮壓異己(Breaking Dissent)

<img src="https://github.com/user-attachments/assets/57af1e74-7cc5-45bb-a332-11d2e5fde909" width="72" height="72" alt="鎮壓異己天賦圖示">

- **生效條件**：目標必須處於踉蹌狀態；你和協同中的盟友對該目標造成額外 10% 傷害。

- **傷害算例**：對踉蹌敵人原本造成 100 點傷害，只計此光環時為 100 × (1 + 0.10) = 110 點；對未踉蹌敵人仍是 100 點。同階段已有 25% 增傷時，對符合條件的敵人為 100 × (1 + 25% + 10%) = 135 點。

- **協同判定**：此光環選項會讓電子獒犬不再計入小隊協同；盟友仍須符合一般協同條件才會取得加成。

[詳細資料](adamant_damage_vs_staggered_aura.md) · [返回目錄](#talent-index)

---


---

## 能力

<a id="adamant_charge"></a>
### 突破重圍(Break the Line)

<img src="https://github.com/user-attachments/assets/a0aad2f2-d03d-486c-b583-1307a9780ac2" width="72" height="72" alt="突破重圍天賦圖示">

- **啟動與冷卻**：衝鋒一次消耗一層充能；基礎冷卻 20 秒。

- **猛砸與防護**：衝鋒會打擊路徑附近的敵人，收尾再震撼前方敵人。衝鋒期間視為格擋，也能閃避網槍與瘟疫獵犬撲擊。

- **傷害與衝擊**：衝鋒結束後，6 秒內傷害提高 25%、衝擊提高 50%。單計這項加成，100 點傷害變成 125 點、100 單位衝擊變成 150；若已有同階段 25% 傷害加成，則為 100 × (1 + 25% + 25%) = 150 點。再次觸發重新計時。

#### 繁中原文勘誤

- 原文「踉蹌的機率提高」誤把踉蹌強度寫成機率；同源英文指造成高強度踉蹌。

[詳細資料](adamant_charge.md) · [返回目錄](#talent-index)

---

<a id="adamant_area_buff_drone_improved"></a>
### 天鷹使節(Nuncio-Aquila)

<img src="https://github.com/user-attachments/assets/18c1f301-d18b-4469-9fbf-bb5ede1b3353" width="72" height="72" alt="天鷹使節天賦圖示">

- **部署與冷卻**：瞄準後朝指定方向部署；快速點按會在自身位置部署並跟隨你。傳令機持續 20 秒，範圍 7.5 公尺，冷卻 60 秒。

- **盟友支援**：強化版每秒恢復最大韌性的 7.5%，並提高壓制與衝擊各 30%、降低後座力 25%；同時免疫眩暈、減速及壓制。例如在範圍內連續 2 秒，理論恢復 15% 最大韌性，實際恢復以缺少的韌性為限。

- **敵人受制**：範圍內敵人受到的傷害提高 15%；例如其他條件相同時，原本 100 點傷害按 1.15 倍計算為 115 點。

[詳細資料](adamant_area_buff_drone_improved.md) · [返回目錄](#talent-index)

---

<a id="adamant_stance"></a>
### 懲戒者姿態(Castigator's Stance)

<img src="https://github.com/user-attachments/assets/4eb18874-83b0-4e2f-bf2b-c91001a15371" width="72" height="72" alt="懲戒者姿態天賦圖示">

- **啟動與恢復**：啟動時恢復全部韌性；姿態持續 10 秒，基礎冷卻 50 秒。

- **姿態效果**：移動速度提高 15%、威力提高 20%，受到的傷害倍率降至 0.3（減少 70%）；武器動作造成的移動懲罰歸零，但無法衝刺。

- **算例**：韌性由 40/100 啟動時補至 100/100；若原始傷害為 100，單看此技能的 0.3 倍承受倍率，結算為 30。姿態結束後傷害減免另維持 2 秒。

- **威力與移動算例**：單計本效果，原本 500 的威力變成 500 × 1.2 = 600；原本每秒移動 5 公尺變成 5 × 1.15 = 5.75 公尺。威力會再進入傷害、衝擊與順劈的各自公式，不能把三者都直接視為增加 20%。

[詳細資料](adamant_stance.md) · [返回目錄](#talent-index)

---

<a id="adamant_stance_ranged_kills_transfer_ammo"></a>
### 蒙福軍武(Blessed Armament)

<img src="https://github.com/user-attachments/assets/8c312d8e-8b49-45cd-828e-62cffc6d0a25" width="72" height="72" alt="蒙福軍武天賦圖示">

- **觸發條件**：只有在懲戒者姿態期間，遠程擊殺才會補彈；子彈從備用彈藥轉入彈匣。

- **補彈算法**：每次觸發以彈匣容量的 10% 計算並無條件進位。例如容量 30 發，計算為 30×10%=3 發；若只缺 1 發，就只補 1 發。備用彈藥不足時只轉入剩餘彈藥，不會憑空產生子彈。

- **生效時間**：效果隨懲戒者姿態生效，姿態基礎持續 10 秒。

[詳細資料](adamant_stance_ranged_kills_transfer_ammo.md) · [返回目錄](#talent-index)

---

<a id="adamant_stance_elite_kills_stack_damage"></a>
### 處決令(Writ of Execution)

<img src="https://github.com/user-attachments/assets/f7454987-ea7e-474e-bb22-3c3ead9adb1b" width="72" height="72" alt="處決令天賦圖示">

- **觸發條件**：懲戒者姿態期間擊殺精英或專家敵人，每次獲得一層傷害加成。

- **層數與時間**：每層 +7.5%，最多 6 層，每次增加層數會重設 12 秒持續時間。姿態結束後，已取得的層數仍依自己的剩餘時間到期。

- **算例**：6 層為 6×7.5%=45%；以 100 點基準傷害及同一傷害層級另有 +25% 加成計算，100×(1+45%+25%)=170。

[詳細資料](adamant_stance_elite_kills_stack_damage.md) · [返回目錄](#talent-index)

---

<a id="adamant_stance_dog_bloodlust"></a>
### 嗜血殺戮(Bloodlust)

<img src="https://github.com/user-attachments/assets/27a74ed8-eb51-4774-ae8e-2089aa7b1686" width="72" height="72" alt="嗜血殺戮天賦圖示">

- **獒犬傷害**：啟動懲戒者姿態後，電子獒犬獲得 +75% 傷害，持續 10 秒。

- **傷害算例**：單計這項加成，電子獒犬的基礎 100 點直接傷害變成 100 × (1 + 75%) = 175 點；若已有同階段 25% 加成，則為 200 點。這項犬傷害加成不套用在流血傷害。

[詳細資料](adamant_stance_dog_bloodlust.md) · [返回目錄](#talent-index)

---

<a id="adamant_drone_buff_talent"></a>
### 振奮朗誦(Inspiring Recitation)

<img src="https://github.com/user-attachments/assets/53dd2864-62b6-4e6c-9d62-e79831b33c78" width="72" height="72" alt="振奮朗誦天賦圖示">

- **盟友加成**：傳令機範圍內受影響的盟友，韌性受到的傷害減少 30%，復活速度提高 30%，攻擊速度提高 10%。

- **算例**：單次原本造成 100 點韌性傷害的攻擊，在只計入此升級時按 0.7 倍計算為 70 點；實際仍與其他韌性減傷共同結算。

- **速度算例**：單計本效果，原本 5 秒的救援需 5 ÷ 1.3 ≈ 3.85 秒；原本 1 秒的可加速攻擊動作需 1 ÷ 1.1 ≈ 0.91 秒。離開傳令機範圍後失去這些加成。

[詳細資料](adamant_drone_buff_talent.md) · [返回目錄](#talent-index)

---

<a id="adamant_drone_debuff_talent"></a>
### 畏怯正義(Fear of Justice)

<img src="https://github.com/user-attachments/assets/483804fa-b052-4baa-b3d7-5e7dbfbe44f4" width="72" height="72" alt="畏怯正義天賦圖示">

- **近戰傷害**：受傳令機影響的敵人，近戰傷害降低 25%。例如原本 100 點近戰傷害，僅計此效果後為 100×(1−25%)=75 點。

- **近戰攻速算例**：敵人的近戰攻速降低 25%。在未碰到動作最短時間限制時，原本 1 秒的動作變成 1 ÷ 0.75 ≈ 1.33 秒，也就是時間增加約 33.3%。

- **生效範圍**：此減益依附傳令機區域；敵人離開影響範圍後移除。

#### 繁中原文勘誤

- 繁中把英文的「攻擊間隔增加 50%」寫成「攻擊速度降低 50%」，兩者不等價：1 秒間隔增加 50% 是 1.5 秒，相當於速度降低約 33.3%；速度降低 50% 則需 2 秒。另有程式實作與原文數值差異，詳見來源文件。

[詳細資料](adamant_drone_debuff_talent.md) · [返回目錄](#talent-index)

---

<a id="adamant_charge_toughness"></a>
### 懲惡揚善(Commendation from Condemnation)

<img src="https://github.com/user-attachments/assets/a0f08b1e-586b-4a65-b271-29d79874f573" width="72" height="72" alt="懲惡揚善天賦圖示">

- **觸發條件**：衝鋒擊中精英、專家或巨獸時，依不同敵人計算；同一目標在一次衝鋒中只計一次。

- **恢復量與上限**：衝鋒結束時一起恢復；每名不同目標恢復最大韌性的 20% 與最大耐力的 15%，最多恢復 100% 最大韌性、75% 最大耐力，均不超過目前缺額。

- **算例**：擊中 3 名不同的合格目標，恢復 3×20%=60% 韌性及 3×15%=45% 耐力；同一名敵人再被擊中不增加恢復量。

[詳細資料](adamant_charge_toughness.md) · [返回目錄](#talent-index)

---

<a id="adamant_charge_cooldown_reduction"></a>
### 針鋒相對(Targeted Brutality)

<img src="https://github.com/user-attachments/assets/d2b1945d-2300-4993-a649-00c1e3858e0d" width="72" height="72" alt="針鋒相對天賦圖示">

- **冷卻返還**：衝鋒命中一般敵人，每次返還 0.5 秒戰鬥技能冷卻；命中精英、專家或巨獸，每次返還 1 秒。

- **結算與上限**：衝鋒結束時返還，一次最多 5 秒，以尚未恢復的冷卻為限；這項返還按命中事件累計，沒有像韌性恢復升級那樣排除重複目標。

- **算例**：6 次一般命中返還 6×0.5=3 秒，3 次高階目標命中返還 3×1=3 秒；合計 6 秒後按 5 秒上限結算，20 秒基礎冷卻最多因此返還 5 秒。

[詳細資料](adamant_charge_cooldown_reduction.md) · [返回目錄](#talent-index)

---

<a id="adamant_charge_longer_distance"></a>
### 交鋒(Engage)

<img src="https://github.com/user-attachments/assets/7b78f1c1-2250-44c0-9642-315fd105575a" width="72" height="72" alt="交鋒天賦圖示">

- **衝鋒距離**：此升級替衝鋒增加 3.75 公尺距離，使基礎 3.75 公尺提高至 7.5 公尺。

- **算例**：3.75 公尺基礎距離 + 3.75 公尺增幅 = 7.5 公尺。實際位移可能因路徑碰撞或中途取消而縮短。

[詳細資料](adamant_charge_longer_distance.md) · [返回目錄](#talent-index)

---

<a id="adamant_dog_damage_after_ability"></a>
### 殺戮命令(Kill Order)

<img src="https://github.com/user-attachments/assets/6283df18-7a2a-4a7b-adac-4a13c5cd6315" width="72" height="72" alt="殺戮命令天賦圖示">

- **啟動效果**：使用戰鬥技能後，電子獒犬獲得 +50% 傷害，持續 12 秒。

- **算例**：電子獒犬原本造成 100 點非流血傷害時，單看此升級為 100×(1+50%)=150 點；若「嗜血殺戮」的 +75% 同時生效且兩者同層累加，則為 100×(1+50%+75%)=225 點，尚未計入敵人防禦。

- **重新計時與限制**：再次使用戰鬥技能會重設 12 秒，不會讓這項加成自行疊層；流血傷害不吃這項犬傷害加成。

[詳細資料](adamant_dog_damage_after_ability.md) · [返回目錄](#talent-index)

---


---

## 鑰石

<a id="adamant_execution_order"></a>
### 處刑命令(Execution Order)

<img src="https://github.com/user-attachments/assets/66f3dd5d-68b9-415a-8330-b6daf3fb427c" width="72" height="72" alt="處刑命令天賦圖示">

- **自動標記**：選取前方 40 公尺內、有視線的精英、專家或頭目。一般精英與專家標記後需隔 3 秒才可再選；巨獸與頭目不受這個等待時間限制。可同時保留多個標記。

- **擊殺效果**：你或自己的電子獒犬擊殺標記目標，恢復最大韌性的 15%，並使你傷害與攻擊速度各提高 10%，電子獒犬直接傷害提高 150%，持續 8 秒。再次觸發重新計時，不累加幅度；其他隊友單獨擊殺不會觸發。

- **獒犬撲擊**：獒犬初次撲擊標記目標，也能取得 8 秒的 150% 犬傷害加成；對歐格林與巨獸的後續壓制攻擊也可重新計時。此犬傷害加成不套用於流血。

- **算例**：最大韌性 100 時恢復 15 點，最多補滿。單計增傷，玩家基礎 100 點變成 110，獒犬基礎 100 點變成 250；玩家已有同階段 25% 增傷時為 100 × (1 + 25% + 10%) = 135。可加速的 1 秒攻擊動作則為 1 ÷ 1.1 ≈ 0.91 秒。

[詳細資料](adamant_execution_order.md) · [返回目錄](#talent-index)

---

<a id="adamant_terminus_warrant"></a>
### 終點站令狀(Terminus Warrant)

<img src="https://github.com/user-attachments/assets/47d0c2b2-0d8e-4906-a528-48f9488353e9" width="72" height="72" alt="終點站令狀天賦圖示">

- **累積與上限**：遠程命中每個敵人給 1 層近戰正義；弱點命中該敵人給 3 層。每次射擊對同一目標只記一次，最多 20 層。近戰每次命中給 1 層遠程正義，最多 20 層。

- **切換與消耗**：切換至近戰武器會消耗近戰正義，得到 12 秒 +10% 近戰威力與 20% 韌性受傷減免；切換至遠程武器會消耗遠程正義，得到 12 秒 +10% 遠程威力、+50% 壓制與 +50% 遠程順劈。這些核心增益是固定值，不隨消耗層數比例增減。

- **韌性算例**：近戰效果使韌性傷害倍率為 0.8，原本 100 點韌性傷害變成 80 點；只在 12 秒效果存續期間套用。

- **時間與威力算例**：再切換到另一類武器就會提前結束目前增益。威力單計本效果為 500 × 1.1 = 550；原有同階段 20% 威力時，則由 600 變成 650。累積 1 層與 20 層都能啟動核心固定加成，層數另影響搭配升級的效果。

#### 繁中原文勘誤

- 原文「弱點命中則額外堆疊 3 層」容易誤認為 1 + 3 = 4 層；正確是弱點命中合計獲得 3 層，取代一般命中的 1 層。

[詳細資料](adamant_terminus_warrant.md) · [返回目錄](#talent-index)

---

<a id="adamant_forceful"></a>
### 堅定不移(Forceful)

<img src="https://github.com/user-attachments/assets/b838686c-aaa0-49a2-bbea-fc9e074bb6cf" width="72" height="72" alt="堅定不移天賦圖示">

- **取得與重新計時**：攻擊第一個命中目標並使其踉蹌，或成功格擋，可獲得 1 層，最多 10 層；電子獒犬的命中不計。層數共用 5 秒，新增或因受傷減少層數時重設時間。

- **受傷移除**：收到正值傷害或韌性吸收傷害時，每 0.25 秒最多移除 1 層；被格擋的事件不移除。

- **滿層算例**：每層給 +5% 衝擊，10 層合計 +50%。每層傷害倍率為 0.975，10 層依共用堆層規則計為 0.975^10 ≈ 0.776，約比基準傷害少 22.4%；這是乘算結果，並非直接相加成 25%。例如原本 100 點傷害，滿層為 100 × 0.975¹⁰ ≈ 77.63 點。

[詳細資料](adamant_forceful.md) · [返回目錄](#talent-index)

---

<a id="adamant_disable_companion"></a>
### 孤狼(Lone Wolf)

<img src="https://github.com/user-attachments/assets/a2aadd19-f969-47d7-96f3-3021eb1fb5c8" width="72" height="72" alt="孤狼天賦圖示">

- **替換效果**：選取「孤狼」會讓電子獒犬消失；自身獲得 +20% 傷害、+10% 攻擊速度、+15% 韌性傷害減免，閃擊最大充能 +1。

- **傷害與速度算例**：單計本技能，100 點傷害變成 100 × 1.2 = 120；同階段已有 25% 增傷時為 145。原本 1 秒的可加速攻擊動作為 1 ÷ 1.1 ≈ 0.91 秒；100 點韌性傷害變成 85，若已有同階段 10% 韌性減傷則變成 75。

- **補充算例**：一般手雷缺少至少 1 顆時，開始等 45 秒並補回 1 顆；電能地雷缺額則等 90 秒。補回後重新等下一次，滿充能時不計時。

[詳細資料](adamant_disable_companion.md) · [返回目錄](#talent-index)

---

<a id="adamant_forceful_toughness_regen_per_stack"></a>
### 律法之志(Will of the Lex)

<img src="https://github.com/user-attachments/assets/1016875d-cc4c-44f2-8a06-c93155d482d4" width="72" height="72" alt="律法之志天賦圖示">

- **條件與恢復**：堅定不移每有 1 層，每秒恢復最大韌性的 0.5%；此效果只在你有堅定不移層數時發生。

- **滿層算例**：10 層時每秒恢復 10 × 0.5% = 最大韌性的 5%；若最大韌性為 100，理論上每秒恢復 5 點，實際不會超過韌性缺額。

[詳細資料](adamant_forceful_toughness_regen_per_stack.md) · [返回目錄](#talent-index)

---

<a id="adamant_forceful_stun_immune_and_block_all"></a>
### 堅定意志(Adamant Will)

<img src="https://github.com/user-attachments/assets/92922b1c-4991-480e-86af-e050b9faa496" width="72" height="72" alt="堅定意志天賦圖示">

- **觸發與持續**：堅定不移到達 10 層時啟用免疫眩暈與減速；離開滿層後再維持 3 秒。

- **完美格擋**：效果期間，完美格擋可擋下原本不可格擋的攻擊；一般格擋不會因此獲得相同能力。此效果仍需符合攻擊的格擋判定，不等於全程無敵。

[詳細資料](adamant_forceful_stun_immune_and_block_all.md) · [返回目錄](#talent-index)

---

<a id="adamant_forceful_offensive"></a>
### 鎖定目標(Targets Acquired)

<img src="https://github.com/user-attachments/assets/3ecc49e6-a4c7-4d77-926d-623e4f8f34f6" width="72" height="72" alt="鎖定目標天賦圖示">

- **條件與持續**：堅定不移滿 10 層時獲得 +10% 攻擊速度與 +50% 順劈；離開滿層後再維持 3 秒。

- **速度與順劈算例**：單計本效果，原本 1 秒的可加速攻擊動作需 1 ÷ 1.1 ≈ 0.91 秒；可造成傷害的順劈質量額度原本 10 時變成 10 × 1.5 = 15。這不是固定多打中 50% 的敵人，也不會一併提高踉蹌用的順劈額度。

[詳細資料](adamant_forceful_offensive.md) · [返回目錄](#talent-index)

---

<a id="adamant_forceful_ability_damage"></a>
### 法務官警覺(Arbites Vigilant)

<img src="https://github.com/user-attachments/assets/bc3b59ed-a142-4807-86f9-f75d65b367b4" width="72" height="72" alt="法務官警覺天賦圖示">

- **觸發與消耗**：使用戰鬥技能時，消耗當下全部「堅定不移」層數，每層換成 2.5% 威力加成，持續 12 秒。

- **威力算例**：6 層提供 15%，10 層提供 25%；單計本效果，500 威力在 10 層時變成 500 × 1.25 = 625。威力再經傷害、衝擊與順劈各自公式結算，不能直接把所有最終效果都乘 1.25。

[詳細資料](adamant_forceful_ability_damage.md) · [返回目錄](#talent-index)

---

<a id="adamant_forceful_stagger_on_low_high"></a>
### 審判之力(Judicial Force)

<img src="https://github.com/user-attachments/assets/62f41d0b-cd55-459d-b4d7-c8c155da410f" width="72" height="72" alt="審判之力天賦圖示">

- **觸發方式**：「堅定不移」由未滿層升到 10 層，或由至少 1 層降至 0 層時，震撼周圍 2.5 公尺內的敵人。一直維持在 0 層或 10 層不會重複觸發。

- **冷卻算例**：滿層與歸零各有獨立的 5 秒冷卻。例如滿層震撼後 1 秒失去全部層數，仍可觸發歸零震撼；但同一種震撼需隔滿 5 秒才能再觸發。

[詳細資料](adamant_forceful_stagger_on_low_high.md) · [返回目錄](#talent-index)

---

<a id="adamant_terminus_warrant_cdr"></a>
### 能屈能伸(Obstinate)

<img src="https://github.com/user-attachments/assets/7b782337-07db-4ff4-9a85-ba21d1fcfe6b" width="72" height="72" alt="能屈能伸天賦圖示">

- **觸發門檻**：消耗終點站令狀的完整 20 層時，才觸發「能屈能伸」；不足 20 層不會建立冷卻恢復效果。

- **冷卻算例**：每秒額外恢復 0.33 秒，12 秒名目總量為 3.96 秒。若開始時還需冷卻 20 秒，經過 12 秒並收到 12 次恢復，剩餘為 20 − 12 − 12 × 0.33 = 4.04 秒。實際以未恢復的冷卻為限；到期更新順序可能少一次恢復。再次觸發只重新計時，不加快恢復速度。

[詳細資料](adamant_terminus_warrant_cdr.md) · [返回目錄](#talent-index)

---

<a id="adamant_terminus_warrant_support"></a>
### 終端律令(Terminal Decree)

<img src="https://github.com/user-attachments/assets/053a0db6-481b-4944-9077-d1d9a05759dd" width="72" height="72" alt="終端律令天賦圖示">

- **觸發與對象**：消耗近戰正義或遠程正義時，自己和協同範圍內盟友都恢復韌性；少於 20 層時按實際消耗層數算。

- **恢復算例**：每層恢復最大韌性的 1%；消耗 20 層可恢復 20%。最大韌性為 100 時是 20 點，若只消耗 7 層則是 7 點；每人仍受自身韌性缺額上限限制。

[詳細資料](adamant_terminus_warrant_support.md) · [返回目錄](#talent-index)

---

<a id="adamant_execution_order_crit"></a>
### 效率殺手(Efficient Killer)

<img src="https://github.com/user-attachments/assets/5c90d0a5-8150-4c04-84cf-9b0ae1d6e28f" width="72" height="72" alt="效率殺手天賦圖示">

- **觸發與持續**：擊殺被標記敵人會觸發；效果持續 8 秒，重新觸發會重新計時。

- **爆擊率**：增加 10 個百分點，例如原本 5% 變成 15%。

- **暴擊傷害算例**：25% 加成作用於暴擊的額外傷害部分。若普攻 100、暴擊 150，則變成 100 + (150 − 100) × 1.25 = 162.5，整筆暴擊傷害實際提高約 8.33%；另一把武器若暴擊 200，則變成 225，提高 12.5%。武器與護甲不同，實際增幅也不同。

[詳細資料](adamant_execution_order_crit.md) · [返回目錄](#talent-index)

---

<a id="adamant_execution_order_cdr"></a>
### 生化武器關(Malocator)

<img src="https://github.com/user-attachments/assets/83df9392-fcfa-43e9-b9e0-ceef6f50ade7" width="72" height="72" alt="生化武器關天賦圖示">

- **觸發與持續**：你或自己的電子獒犬擊殺標記目標，獲得 8 秒額外冷卻恢復。

- **冷卻算例**：每秒額外恢復 0.5 秒，8 秒名目總量為 4 秒。若開始時還需冷卻 20 秒，經過 8 秒並收到 8 次恢復，剩餘為 20 − 8 − 8 × 0.5 = 8 秒。實際以未恢復的冷卻為限；到期更新順序可能少一次恢復。再次觸發只重新計時，不加快恢復速度。

[詳細資料](adamant_execution_order_cdr.md) · [返回目錄](#talent-index)

---

<a id="adamant_execution_order_rending"></a>
### 罪不可赦(No Lenience)

<img src="https://github.com/user-attachments/assets/ab53bec8-fd00-470c-8c5d-46cc58904f13" width="72" height="72" alt="罪不可赦天賦圖示">

- **觸發與持續**：擊殺被標記敵人會取得 +10% 撕裂效果，持續 8 秒；再次觸發會重新計時。

- **傷害算例**：若基礎 100 點、護甲傷害係數原為 0.5，傷害由 50 變成 100 × (0.5 + 0.1) = 60，實際提高 20%。若係數已達 1 且該護甲適用超額轉換，則為 100 × (1 + 0.1 × 0.25) = 102.5。

[詳細資料](adamant_execution_order_rending.md) · [返回目錄](#talent-index)

---

<a id="adamant_execution_order_permastack"></a>
### 殺戮協議(Keeping Protocol)

<img src="https://github.com/user-attachments/assets/eeb40551-fbea-4de0-8e46-0a07e4bfcec6" width="72" height="72" alt="殺戮協議天賦圖示">

- **累積與移除**：每次擊殺被標記敵人增加 1 層，最多 30 層；效果持續到任務結束。

- **滿層算例**：30 層提供 +30% 對巨獸傷害；巨獸攻擊你的傷害倍率為 0.99^30 ≈ 0.740，約降低 26.0%（只計此效果）。例如基礎 100 點對巨獸傷害變成 130；巨獸原本造成 100 點傷害時，變成約 73.97 點。

[詳細資料](adamant_execution_order_permastack.md) · [返回目錄](#talent-index)

---

<a id="adamant_pinning_dog_bonus_moving_towards"></a>
### 不落人後(Not Far Behind)

<img src="https://github.com/user-attachments/assets/0633a2b7-e8e9-4215-85a9-f54ae4d95809" width="72" height="72" alt="不落人後天賦圖示">

- **觸發與持續**：電子獒犬每次猛撲時，玩家獲得 +10% 移動速度與 +10% 傷害，持續 5 秒。

- **算例與重新計時**：單計本效果，基礎 100 點傷害變成 110；已有同階段 25% 加成時為 135。原本每秒移動 5 公尺變成 5 × 1.1 = 5.5 公尺。再次撲擊會重設 5 秒倒數，不累加幅度。

[詳細資料](adamant_pinning_dog_bonus_moving_towards.md) · [返回目錄](#talent-index)

---

<a id="adamant_companion_focus_ranged"></a>
### 往前進攻！(Go Get 'Em!)

<img src="https://github.com/user-attachments/assets/6208ebde-9eb1-4a4d-923c-823a0e511bf9" width="72" height="72" alt="往前進攻！天賦圖示">

- **選敵優先度**：電子獒犬更優先攻擊遠程敵人；距離、敵人威脅與目前目標仍會影響選擇，不保證每次都選這類敵人。

- **傷害算例**：對遠程敵人，犬傷害增加 50%。單計這項加成，基礎 100 點變成 150；若已有同階段 25% 加成，則為 100 × (1 + 25% + 50%) = 175 點。

[詳細資料](adamant_companion_focus_ranged.md) · [返回目錄](#talent-index)

---

<a id="adamant_companion_focus_elite"></a>
### 猛犬出擊(Unleashed Brutality)

<img src="https://github.com/user-attachments/assets/d61cee49-95ce-43fb-ae8a-b05ba598366b" width="72" height="72" alt="猛犬出擊天賦圖示">

- **選敵優先度**：電子獒犬更優先攻擊精英與專家敵人；距離、敵人威脅與目前目標仍會影響選擇，不保證每次都選這類敵人。

- **傷害算例**：對精英與專家敵人，犬傷害增加 25%。單計這項加成，基礎 100 點變成 125；若已有同階段 25% 加成，則為 100 × (1 + 25% + 25%) = 150 點。

[詳細資料](adamant_companion_focus_elite.md) · [返回目錄](#talent-index)

---

<a id="adamant_terminus_warrant_improved_combined"></a>
### 審判之旨(Writ of Judgement)

<img src="https://github.com/user-attachments/assets/34f0ccb1-7c44-4aaf-a697-e0ef2b6f2c0e" width="72" height="72" alt="審判之旨天賦圖示">

- **觸發門檻**：消耗時至少持有完整 20 層，才能觸發「審判之旨」；以未滿層數切換不觸發。

- **加成與算例**：持續 12 秒，近戰與遠程攻速各提高 10%，爆擊率增加 10 個百分點。例如原本 5% 爆擊率變成 15%；1 秒的可加速動作需 1 ÷ 1.1 ≈ 0.91 秒。再次觸發重新計時，不累加幅度。

[詳細資料](adamant_terminus_warrant_improved_combined.md) · [返回目錄](#talent-index)

---


---

## 技能

<a id="adamant_toughness_regen_near_companion"></a>
### 電子獒犬與人(Man and Cyber-Mastiff)

<img src="https://github.com/user-attachments/assets/a6716d2d-1100-4bbe-be59-683b5b9176b4" width="72" height="72" alt="電子獒犬與人天賦圖示">

- **運作方式**：在自己的電子獒犬 8 公尺內，每秒恢復最大韌性的 5%；受制而無法正常行動時停止。

- **恢復算例**：最大韌性 100、沒有其他恢復加成且缺額足夠時，每秒恢復 100 × 5% = 5 點；3 秒共 15 點。若只缺 2 點，就只能補 2 點。

[詳細資料](adamant_toughness_regen_near_companion.md) · [返回目錄](#talent-index)

---

<a id="adamant_damage_after_reloading"></a>
### 凋零烈焰(Withering Fire)

<img src="https://github.com/user-attachments/assets/82a4d2c5-a0aa-4c05-a8ea-e03bc0e4932b" width="72" height="72" alt="凋零烈焰天賦圖示">

- **觸發與重新計時**：完成換彈後，遠程傷害提高 15%，持續 5 秒。再次換彈重設時間，不累積增傷層數。

- **傷害算例**：單計此階段，基礎 100 點變成 100 × (1 + 15%) = 115 點；原有 25% 同階段加成時，125 點變成 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](adamant_damage_after_reloading.md) · [返回目錄](#talent-index)

---

<a id="adamant_multiple_hits_attack_speed"></a>
### 審判之錘(Hammer of Judgement)

<img src="https://github.com/user-attachments/assets/0f0f19ee-07a9-47a6-9acf-599b809569a4" width="72" height="72" alt="審判之錘天賦圖示">

- **觸發與重新計時**：同一次近戰攻擊命中第 3 名敵人時，獲得 10% 近戰攻速，持續 3 秒；再次達成條件重設持續時間，不累加倍率。

- **攻速算例**：只計受攻速影響的動作段，原本 1 秒變成 1 ÷ 1.1 ≈ 0.909 秒。

[詳細資料](adamant_multiple_hits_attack_speed.md) · [返回目錄](#talent-index)

---

<a id="adamant_elite_special_kills_replenish_toughness"></a>
### 繩之以法(Target Neutralised)

<img src="https://github.com/user-attachments/assets/fc3f3a29-7b71-45d4-aec6-c72036ba9831" width="72" height="72" alt="繩之以法天賦圖示">

- **恢復方式**：擊殺精英或專家敵人，立即恢復最大韌性的 10%；接著 4 秒每秒再恢復 2.5%。連續擊殺各自提供一份持續恢復。

- **恢復算例**：最大韌性 100、缺額足夠且沒有其他恢復加成，一次擊殺共恢復 100 × 10% + 100 × 2.5% × 4 = 20 點。兩次擊殺的持續恢復重疊時，每秒共 5 點；實際補量不超過缺額。

[詳細資料](adamant_elite_special_kills_replenish_toughness.md) · [返回目錄](#talent-index)

---

<a id="adamant_close_kills_restore_toughness"></a>
### 近在眉睫(Up Close)

<img src="https://github.com/user-attachments/assets/3098a511-fa0f-444e-a9e2-8e6591688115" width="72" height="72" alt="近在眉睫天賦圖示">

- **觸發方式**：擊殺距離自己 12.5 公尺內的敵人，恢復最大韌性的 5%；近戰與遠程擊殺皆可。

- **恢復算例**：最大韌性 100、沒有其他恢復加成時，每次恢復 100 × 5% = 5 點；目前 98 點時只能補 2 點。

[詳細資料](adamant_close_kills_restore_toughness.md) · [返回目錄](#talent-index)

---

<a id="adamant_staggers_replenish_toughness"></a>
### 鐵血之志(Force of Will)

<img src="https://github.com/user-attachments/assets/898ad4c6-3f99-404d-8ff9-b15a9820f8e9" width="72" height="72" alt="鐵血之志天賦圖示">

- **觸發方式**：近戰攻擊使第一個命中的敵人踉蹌時，恢復最大韌性的 7.5%；同一擊掃中更多敵人不增加次數。搭配震盪攻擊時，符合條件的近戰弱點命中也能觸發。

- **恢復算例**：最大韌性 100、無其他恢復加成時，每次恢復 100 × 7.5% = 7.5 點；一擊掃中 3 名敵人仍最多恢復 7.5 點，並受缺額限制。

[詳細資料](adamant_staggers_replenish_toughness.md) · [返回目錄](#talent-index)

---

<a id="adamant_dog_attacks_electrocute"></a>
### 電能獠牙(Voltaic Mandibles Augment)

<img src="https://github.com/user-attachments/assets/4ce13efe-7a81-48cd-9bb6-47dfb55f63b8" width="72" height="72" alt="電能獠牙天賦圖示">

- **觸發與持續**：電子獒犬的撲擊與壓制攻擊命中後，目標受到電擊，持續 5 秒。持續攻擊可重新計時，不會疊成多份電擊。

- **傷害頻率**：電擊每次結算後，隨機隔 0.3～0.8 秒再結算；首次結算另有短暫的更新延遲。因此不能把 5 秒效果直接當成固定次數或固定每秒傷害。

- **傷害算例**：未受其他加成、命中一般無甲部位時，單次基準電擊為 57.5 × 0.5 = 28.75 點；換成防彈護甲的基準係數 1，則為 57.5 點。實際仍受敵人部位、抗性與其他傷害加成影響。

[詳細資料](adamant_dog_attacks_electrocute.md) · [返回目錄](#talent-index)

---

<a id="adamant_stamina_spent_replenish_toughness"></a>
### 走一走治百病(Walk It Off)

<img src="https://github.com/user-attachments/assets/4c4b06a3-049f-4272-b1d2-a8a472f541b0" width="72" height="72" alt="走一走治百病天賦圖示">

- **觸發與重新計時**：每累計消耗 1 點耐力，啟動持續 3 秒的韌性恢復。期間再消耗滿 1 點耐力會重設 3 秒，恢復速率不疊加。

- **恢復算例**：最大韌性 100、缺額足夠且沒有其他恢復加成，每秒約恢復 100 × 10% ÷ 3 = 3.33 點。啟動 2 秒後再次觸發並持續至結束，共約恢復 3.33 × 5 = 16.67 點，而非瞬間補 20 點。

[詳細資料](adamant_stamina_spent_replenish_toughness.md) · [返回目錄](#talent-index)

---

<a id="adamant_limit_dmg_taken_from_hits"></a>
### 堅忍不拔(True Grit)

<img src="https://github.com/user-attachments/assets/d4c3f66c-8fa8-419f-8a46-f94c842a9b4e" width="72" height="72" alt="堅忍不拔天賦圖示">

- **防護方式**：一般攻擊對你造成的單次生命傷害上限為 50 點；不限制韌性傷害，也不能擋住必殺效果。

- **傷害算例**：其他生命減傷已結算後，原本要承受 120 點時變成 min(120, 50) = 50 點；原本 30 點仍是 30 點。這是固定上限，不是 50% 減傷。

[詳細資料](adamant_limit_dmg_taken_from_hits.md) · [返回目錄](#talent-index)

---

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>
### 韌性減傷(Toughness Damage Reduction)

<img src="https://github.com/user-attachments/assets/af78e688-7708-4d00-88f0-913478235d41" width="72" height="72" alt="韌性減傷天賦圖示">

- **減傷算例**：單計韌性減傷階段，原本 100 點韌性傷害變成 100 × (1 − 10%) = 90 點。若已有同階段 20% 減傷，則為 100 × (1 − 20% − 10%) = 70 點。

- **作用範圍**：只調整韌性傷害；其他獨立減傷倍率再相乘。

[詳細資料](base_toughness_damage_reduction_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="adamant_armor"></a>
### 法務官之鎧(Arbitrator Armour)

<img src="https://github.com/user-attachments/assets/d25eaf26-cb8b-4009-80ac-af75d049fb9f" width="72" height="72" alt="法務官之鎧天賦圖示">

- **效果與算例**：最大韌性增加 25 點。原本 100 點、沒有百分比修正時，變成 100 + 25 = 125 點。

- **加成順序**：這 25 點先加入基礎韌性，再套用最大韌性百分比加成。例如另有 20% 最大韌性加成，為 (100 + 25) × 1.2 = 150 點。

[詳細資料](adamant_armor.md) · [返回目錄](#talent-index)

---

<a id="adamant_ammo_belt"></a>
### 彈藥腰帶(Ammo Belt)

<img src="https://github.com/user-attachments/assets/90c9bff4-baf3-4b53-b160-16945870dd88" width="72" height="72" alt="彈藥腰帶天賦圖示">

- **容量算例**：武器原本可帶 400 發備用彈藥時，變成 400 × (1 + 25%) = 500 發；若原本 101 發，101 × 1.25 = 126.25，容量取整數 126 發。

- **作用範圍**：增加備用彈藥上限，不增加彈匣容量。

[詳細資料](adamant_ammo_belt.md) · [返回目錄](#talent-index)

---

<a id="adamant_rebreather"></a>
### 呼吸器(Rebreather)

<img src="https://github.com/user-attachments/assets/4232eef3-1499-4f4c-b2e3-d1416db2ec8e" width="72" height="72" alt="呼吸器天賦圖示">

- **腐敗算例**：單計腐敗抗性，原本增加 20 點腐敗時，變成 20 × 0.8 = 16 點。

- **毒氣算例**：單計毒氣減傷，原本造成 100 點傷害的毒氣變成 100 × 0.25 = 25 點；這兩種效果分別作用於腐敗與傷害階段。

[詳細資料](adamant_rebreather.md) · [返回目錄](#talent-index)

---

<a id="adamant_hitting_multiple_gives_tdr"></a>
### 苛政壓制(Suppression Protocols)

<img src="https://github.com/user-attachments/assets/02fd58ae-50fc-461f-879d-70d77a2aff44" width="72" height="72" alt="苛政壓制天賦圖示">

- **觸發與重新計時**：一次攻擊命中第 3 名敵人時，獲得 20% 韌性減傷，持續 5 秒；近戰與遠程皆可，再次觸發重設時間。

- **減傷算例**：單計這項效果，100 點韌性傷害變成 100 × 0.8 = 80 點；另有獨立 10% 韌性減傷時，為 100 × 0.8 × 0.9 = 72 點。

[詳細資料](adamant_hitting_multiple_gives_tdr.md) · [返回目錄](#talent-index)

---

<a id="base_ranged_damage_node_buff_medium_1"></a>
### 遠程傷害增幅(Ranged Damage Boost)

<img src="https://github.com/user-attachments/assets/62b0bee6-3606-40bc-9d78-06f072535e59" width="72" height="72" alt="遠程傷害增幅天賦圖示">

- **傷害算例**：沒有其他加成時，基礎 100 點遠程傷害變成 100 × (1 + 10%) = 110 點；原有同階段 25% 加成時，125 點變成 100 × (1 + 25% + 10%) = 135 點。

[詳細資料](base_ranged_damage_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="base_melee_damage_node_buff_medium_1"></a>
### 近戰增幅(Melee Damage Boost)

<img src="https://github.com/user-attachments/assets/8c224499-f2ca-420c-bcf6-39034e6a35b2" width="72" height="72" alt="近戰增幅天賦圖示">

- **傷害算例**：沒有其他加成時，基礎 100 點近戰傷害變成 100 × (1 + 10%) = 110 點；原有同階段 25% 加成時，125 點變成 100 × (1 + 25% + 10%) = 135 點。

[詳細資料](base_melee_damage_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="adamant_dog_pounces_bleed_nearby"></a>
### 重顎獠牙(Razor-Jaw Augment)

<img src="https://github.com/user-attachments/assets/549d3657-c19a-49a6-b8ad-2c1e77080dfa" width="72" height="72" alt="重顎獠牙天賦圖示">

- **觸發與疊層**：電子獒犬撲擊時的周邊推撞命中，以及對歐格林或巨獸的壓制攻擊，各施加 6 層流血。流血共用 16 層上限，再次施加會增加層數並重設維持時間。

- **持續與衰退**：每 0.5 秒結算一次傷害；停止補上流血後，維持 1.5 秒，再於後續每次結算逐層減少。

- **傷害算例**：在無甲、無其他修正的基準下，令層數比例為 n ÷ 16，每次傷害為 87.5 × (n ÷ 16)² × [3 − 2 × (n ÷ 16)]。6 層約 27.69 點，12 層約 73.83 點，16 層為 87.5 點；12 層並非 6 層傷害的兩倍。

[詳細資料](adamant_dog_pounces_bleed_nearby.md) · [返回目錄](#talent-index)

---

<a id="adamant_damage_reduction_after_elite_kill"></a>
### 勢如破竹(Imposing Force)

<img src="https://github.com/user-attachments/assets/d856ef6a-9f61-4b4a-b672-e60019dea866" width="72" height="72" alt="勢如破竹天賦圖示">

- **觸發與重新計時**：擊殺精英或專家敵人後，承受傷害降低 25%，持續 5 秒；再次擊殺重設時間，不累積倍率。

- **減傷算例**：原本承受 100 點傷害時，單計本效果為 100 × 0.75 = 75 點；另有獨立 20% 減傷則為 100 × 0.75 × 0.8 = 60 點。

[詳細資料](adamant_damage_reduction_after_elite_kill.md) · [返回目錄](#talent-index)

---

<a id="adamant_staggers_reduce_damage_taken"></a>
### 堅守陣線(Hold the Line)

<img src="https://github.com/user-attachments/assets/fd423ddb-0080-4603-8fd7-90257b583c3d" width="72" height="72" alt="堅守陣線天賦圖示">

- **疊層與消耗**：使一般敵人踉蹌獲得 1 層，使歐格林或巨獸踉蹌獲得 5 層，最多 5 層。再次觸發重設 8 秒倒數；受到近戰命中後清除全部層數。

- **減傷算例**：每層讓承受傷害乘以 0.97。5 層時，100 × 0.97⁵ ≈ 85.87 點，約減少 14.13%。存續期間也減少遠程傷害；遠程命中不消耗層數。

[詳細資料](adamant_staggers_reduce_damage_taken.md) · [返回目錄](#talent-index)

---

<a id="base_cleave_node_buff_medium_1"></a>
### 順劈加成(Cleave Boost)

<img src="https://github.com/user-attachments/assets/d3fa1c73-0a49-42ab-920c-11b7238af849" width="72" height="72" alt="順劈加成天賦圖示">

- **順劈算例**：單計順劈容量，原本可穿過 10 單位敵人質量的攻擊，變成 10 × (1 + 25%) = 12.5 單位。

- **實際效果**：更容易一次掃中多名敵人；命中人數仍受敵人質量、護甲和武器本身的穿透限制影響，不等於傷害提高 25%。

[詳細資料](base_cleave_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="base_impact_node_buff_medium_1"></a>
### 衝擊加成(Impact Boost)

<img src="https://github.com/user-attachments/assets/e8b31492-509e-479a-9369-203e36e1e1e4" width="72" height="72" alt="衝擊加成天賦圖示">

- **衝擊算例**：單計衝擊倍率，原本 100 單位踉蹌強度變成 100 × (1 + 25%) = 125 單位。

- **作用範圍**：影響是否達到敵人的踉蹌門檻；不是生命傷害加成，也不保證對所有敵人都能打出更強踉蹌。

[詳細資料](base_impact_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="adamant_plasteel_plates"></a>
### 塑鋼裝甲(Plasteel Plates)

<img src="https://github.com/user-attachments/assets/170599ce-ad50-4760-93b2-da650c6deac8" width="72" height="72" alt="塑鋼裝甲天賦圖示">

- **效果與算例**：最大韌性增加 25 點。原本 100 點、沒有百分比修正時，變成 100 + 25 = 125 點。

- **加成順序**：這 25 點先加入基礎韌性，再套用最大韌性百分比加成。例如另有 20% 最大韌性加成，為 (100 + 25) × 1.2 = 150 點。

[詳細資料](adamant_plasteel_plates.md) · [返回目錄](#talent-index)

---

<a id="adamant_dog_applies_brittleness"></a>
### 鋒利獠牙(Serrated Maw)

<img src="https://github.com/user-attachments/assets/5df365c7-8213-4c06-acc5-2b00f0cda022" width="72" height="72" alt="鋒利獠牙天賦圖示">

- **觸發與疊層**：電子獒犬的初次撲擊命中施加 15% 脆弱，持續 5 秒；對歐格林與巨獸的壓制攻擊也可繼續施加。脆弱每層 2.5%，一次 6 層，共用 16 層上限，也就是最多 40%。再次施加會重設全部層數的持續時間。

- **隊伍效益**：脆弱留在敵人身上，因此隊友攻擊該目標也可受益；實際增傷取決於攻擊原有的護甲傷害係數。

- **傷害算例**：若基礎傷害 100、原本護甲係數 0.5，傷害為 50；加入 15% 脆弱後，變成 100 × (0.5 + 0.15) = 65，實際提高 30%。若該護甲適用超額破甲轉換、原本係數已達 1，則為 100 × (1 + 0.15 × 0.25) = 103.75，並非固定增加 15% 最終傷害。

[詳細資料](adamant_dog_applies_brittleness.md) · [返回目錄](#talent-index)

---

<a id="adamant_dodge_grants_damage"></a>
### 追跡法務官(Arbites Revelatum)

<img src="https://github.com/user-attachments/assets/9a87f145-d4a8-4554-b8ca-f5fbb2a58944" width="72" height="72" alt="追跡法務官天賦圖示">

- **觸發與重新計時**：成功閃避敵人的攻擊後，傷害提高 15%，持續 5 秒；再次成功閃避重設時間。只做出閃避動作不會觸發。

- **傷害算例**：基礎 100 點傷害、無其他修正時變成 100 × (1 + 15%) = 115 點；同階段原有 25% 加成時，由 125 點變成 140 點。

[詳細資料](adamant_dodge_grants_damage.md) · [返回目錄](#talent-index)

---

<a id="adamant_stacking_weakspot_strength"></a>
### 罪孽判官(Soulguilt Scan)

<img src="https://github.com/user-attachments/assets/59f1504d-8b25-40c7-a582-b5de1b3278cf" width="72" height="72" alt="罪孽判官天賦圖示">

- **疊層與重新計時**：近戰或遠程命中弱點後獲得 1 層，每層增加 2% 弱點威力，最多 8 層。再次命中重設全部層數的 10 秒。

- **威力算例**：只計這個威力階段，原本 500、滿層 16% 時為 500 × (1 + 8 × 2%) = 580；若已有同階段 20% 威力加成，則由 600 變成 680。

- **傷害差異**：強化的是命中弱點時用於後續結算的威力，不是只把額外弱點傷害乘上 1.16。最終傷害仍須依武器傷害曲線、護甲、部位與其他加成計算。

[詳細資料](adamant_stacking_weakspot_strength.md) · [返回目錄](#talent-index)

---

<a id="adamant_elite_special_kills_reload_speed"></a>
### 恰如其分(Judicious Efficiency)

<img src="https://github.com/user-attachments/assets/88c5f583-d739-484e-a7cd-89b79a90334d" width="72" height="72" alt="恰如其分天賦圖示">

- **觸發與消耗**：擊殺精英或專家敵人後，下次換彈速度提高 20%；重複擊殺不累積倍率。效果保留到完成換彈並離開換彈動作。

- **換彈算例**：只計受換彈速度影響的動作段，原本 3 秒變成 3 ÷ 1.2 = 2.5 秒；加速 20% 不等於時間減少 20%。

[詳細資料](adamant_elite_special_kills_reload_speed.md) · [返回目錄](#talent-index)

---

<a id="adamant_movement_speed_on_block"></a>
### 行軍之志(March)

<img src="https://github.com/user-attachments/assets/8f0bcba7-48bd-4d61-ad19-b03a65160eb5" width="72" height="72" alt="行軍之志天賦圖示">

- **觸發與重新計時**：遠程攻擊命中敵人後，移動速度提高 15%，持續 3 秒；再次命中重設時間。

- **移速算例**：單計此倍率，原本每秒移動 5 公尺，變成 5 × 1.15 = 5.75 公尺；其他動作減速仍照常處理。

[詳細資料](adamant_movement_speed_on_block.md) · [返回目錄](#talent-index)

---

<a id="adamant_elite_special_kills_offensive_boost"></a>
### 無處可逃(No Escape)

<img src="https://github.com/user-attachments/assets/6d045fa3-97bc-4943-9e6e-0f703e68288d" width="72" height="72" alt="無處可逃天賦圖示">

- **觸發與重新計時**：擊殺精英或專家敵人後，傷害與移動速度提高 10%，持續 4 秒；再次擊殺重設時間。

- **效果算例**：單計本效果，100 點傷害變成 110 點；每秒移動 5 公尺變成 5 × 1.1 = 5.5 公尺。若已有同階段 25% 增傷，則為 100 × (1 + 25% + 10%) = 135 點。

[詳細資料](adamant_elite_special_kills_offensive_boost.md) · [返回目錄](#talent-index)

---

<a id="adamant_cleave_after_push"></a>
### 兵敗如山倒(Drive them Back)

<img src="https://github.com/user-attachments/assets/7b24cc5d-1975-4762-8b77-8899c0713175" width="72" height="72" alt="兵敗如山倒天賦圖示">

- **觸發與重新計時**：推擊至少命中一名敵人後，近戰傷害的順劈容量提高 75%，持續 5 秒；再次推中敵人重設時間。

- **順劈算例**：原本可穿過 10 單位敵人質量，單計此效果變成 10 × 1.75 = 17.5 單位。這是傷害穿透容量，不會一併增加踉蹌穿透容量。

[詳細資料](adamant_cleave_after_push.md) · [返回目錄](#talent-index)

---

<a id="adamant_shield_plates"></a>
### 盾型裝甲(Shield Plates)

<img src="https://github.com/user-attachments/assets/e51d3184-42e7-434f-8369-0ae7a6568619" width="72" height="72" alt="盾型裝甲天賦圖示">

- **格擋恢復**：格擋攻擊後，3 秒內持續恢復最大韌性的 15%；再次格擋重新計時，不提高每秒恢復速率。

- **完美格擋**：另立即恢復最大韌性的 10%，每次需間隔超過 1 秒；持續恢復不受這個冷卻限制。

- **恢復算例**：最大韌性 100、缺額足夠且沒有其他恢復加成，一次同時觸發兩份效果的完美格擋，共恢復 100 × 10% + 100 × 15% = 25 點；其中 10 點立即補回、15 點分 3 秒補回。

[詳細資料](adamant_shield_plates.md) · [返回目錄](#talent-index)

---

<a id="adamant_heavy_attacks_increase_damage"></a>
### 重如律法(Weight of the Lex)

<img src="https://github.com/user-attachments/assets/bff83e5a-48a0-4f4c-b280-3093df526c5d" width="72" height="72" alt="重如律法天賦圖示">

- **觸發與重新計時**：近戰重擊至少命中一名敵人，揮擊結束後傷害提高 15%，持續 5 秒；再次重擊命中可重新計時。加成也適用於後續遠程攻擊。

- **傷害算例**：只比較增益生效後的攻擊，基礎 100 點變成 100 × (1 + 15%) = 115 點；已有同階段 25% 加成時，125 點變成 140 點。

[詳細資料](adamant_heavy_attacks_increase_damage.md) · [返回目錄](#talent-index)

---

<a id="adamant_melee_attacks_on_staggered_rend"></a>
### 毀滅打擊(Strike Down)

<img src="https://github.com/user-attachments/assets/fcb8d517-7a08-452a-a577-1ab15af469cb" width="72" height="72" alt="毀滅打擊天賦圖示">

- **運作方式**：對踉蹌敵人的近戰攻擊獲得 15% 撕裂，直接套用在符合條件的命中；不會留下一層持續增益。

- **護甲算例**：先隔離護甲階段，假設傷害基準 100、甲殼護甲倍率 0.5，原本 50 點變成 100 × (0.5 + 0.15) = 65 點，此階段提高 30%。其他暴擊、弱點與增傷再依各自階段計算。

- **超出護甲缺口**：若原甲殼倍率已達 1，超出部分只按四分之一換算；本項變成 100 × (1 + 0.15 × 0.25) = 103.75 點。不同武器與敵人的實際增幅會不同。

[詳細資料](adamant_melee_attacks_on_staggered_rend.md) · [返回目錄](#talent-index)

---

<a id="adamant_crit_chance_on_kill"></a>
### 狂熱信仰(Zealous Dedication)

<img src="https://github.com/user-attachments/assets/c776951e-d8de-46cb-ad58-7c14af6b0997" width="72" height="72" alt="狂熱信仰天賦圖示">

- **疊層與重新計時**：每次擊殺獲得 1 層，每層增加 2 個百分點爆擊率，最多 8 層；再次擊殺重設全部層數的 10 秒，滿層也能重新計時。

- **機率算例**：原本爆擊率 5%，滿層後為 5% + 8 × 2% = 21%；不是把原本 5% 乘以 1.16。

[詳細資料](adamant_crit_chance_on_kill.md) · [返回目錄](#talent-index)

---

<a id="adamant_crits_rend"></a>
### 制裁重擊(Prosecution Blow)

<img src="https://github.com/user-attachments/assets/e650aa60-14d1-446d-9fa3-fed8dd633716" width="72" height="72" alt="制裁重擊天賦圖示">

- **運作方式**：遠程暴擊獲得 20% 撕裂，直接套用在符合條件的命中；不會留下一層持續增益。

- **護甲算例**：先隔離護甲階段，假設傷害基準 100、甲殼護甲倍率 0.5，原本 50 點變成 100 × (0.5 + 0.2) = 70 點，此階段提高 40%。其他暴擊、弱點與增傷再依各自階段計算。

- **超出護甲缺口**：若原甲殼倍率已達 1，超出部分只按四分之一換算；本項變成 100 × (1 + 0.2 × 0.25) = 105 點。不同武器與敵人的實際增幅會不同。

[詳細資料](adamant_crits_rend.md) · [返回目錄](#talent-index)

---

<a id="adamant_dodge_improvement"></a>
### 街頭妙招(Street Smarts)

<img src="https://github.com/user-attachments/assets/cd883557-4048-43f0-a3b7-3a90bbc6ffe8" width="72" height="72" alt="街頭妙招天賦圖示">

- **閃避次數**：有效閃避次數增加 1 次。例如武器原本可連續有效閃避 3 次，選取後為 3 + 1 = 4 次。

- **判定時間**：近戰閃避結束後的判定寬限從 0.2 秒變成 0.2 × 1.25 = 0.25 秒，增加 0.05 秒；這不會把整段閃避動作加長 25%。

#### 繁中原文勘誤

- 原文「有效閃避次數增加至…次」應為「有效閃避次數增加 1 次」，不是將總次數改成 1 次。

[詳細資料](adamant_dodge_improvement.md) · [返回目錄](#talent-index)

---

<a id="adamant_monster_hunter"></a>
### 巨獸獵人(Monstrosity Hunter)

<img src="https://github.com/user-attachments/assets/62b4954d-42c3-4eab-a6ea-a17719414e19" width="72" height="72" alt="巨獸獵人天賦圖示">

- **傷害算例**：對符合類型的目標，基礎 100 點傷害變成 100 × (1 + 20%) = 120 點；已有同階段 25% 加成時，為 100 × (1 + 25% + 20%) = 145 點。

- **作用範圍**：近戰與遠程皆可；敵人同時符合兩種類型也只套用一次加成。

[詳細資料](adamant_monster_hunter.md) · [返回目錄](#talent-index)

---

<a id="adamant_first_melee_hit_increased_damage"></a>
### 帝皇之拳(The Emperor's Fist)

<img src="https://github.com/user-attachments/assets/6f3ef825-f018-482c-b511-60f87907cefc" width="72" height="72" alt="帝皇之拳天賦圖示">

- **觸發方式**：近戰揮擊的第一個命中目標獲得 15% 近戰增傷與 30% 衝擊；命中後消耗，下一次揮擊重新獲得。

- **分項算例**：單計增傷，原本 100 點近戰傷害變成 115 點；原本 100 單位踉蹌強度變成 130。已有同階段 25% 增傷時，傷害為 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](adamant_first_melee_hit_increased_damage.md) · [返回目錄](#talent-index)

---

<a id="adamant_pinning_dog_elite_damage"></a>
### 篩選目標(Target Selection)

<img src="https://github.com/user-attachments/assets/4b7cf064-ea83-4334-a484-a222e22af7a3" width="72" height="72" alt="篩選目標天賦圖示">

- **觸發方式**：你或自己的電子獒犬擊殺牠正在壓制的精英或專家敵人後，接下來 8 秒對精英與專家敵人的傷害提高 15%。

- **重新計時與限制**：再次觸發重設 8 秒，不累積增傷；普通敵人的死亡不會觸發，對普通敵人也沒有這項增傷。

- **傷害算例**：對符合條件的目標，基礎 100 點傷害變成 115 點；同階段已有 25% 加成時，則為 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](adamant_pinning_dog_elite_damage.md) · [返回目錄](#talent-index)

---

<a id="adamant_increased_damage_to_high_health"></a>
### 擊殺順序(Target Priority)

<img src="https://github.com/user-attachments/assets/29a7dad3-3f9c-4679-a37d-680025796f47" width="72" height="72" alt="擊殺順序天賦圖示">

- **觸發條件**：命中前，目標剩餘生命高於最大生命的 75% 時，該次攻擊傷害提高 15%；恰好 75% 不生效。

- **傷害算例**：目標最大生命 1000、目前 800 時，基礎 100 點傷害變成 100 × 1.15 = 115 點；目前 750 時仍為 100 點。已有同階段 25% 加成且門檻成立時，125 點變成 140 點。

[詳細資料](adamant_increased_damage_to_high_health.md) · [返回目錄](#talent-index)

---

<a id="adamant_pinning_dog_kills_buff_allies"></a>
### 猛犬氣場(Canine Morale)

<img src="https://github.com/user-attachments/assets/fc2bbfe4-50b8-4c9c-b775-20f1c2c33792" width="72" height="72" alt="猛犬氣場天賦圖示">

- **觸發方式**：你或自己的電子獒犬擊殺牠正在壓制的敵人後，你與當時協同範圍內的隊友獲得效果；不限定精英或專家敵人。

- **恢復與減傷**：持續 5 秒，承受的韌性傷害降低 20%，並每秒恢復最大韌性的 2%。再次觸發重新計時，不增加恢復速率或疊加減傷。

- **算例**：最大韌性 100 時，每秒恢復 100 × 10% ÷ 5 = 2 點，完整 5 秒共 10 點，最多補滿；只計本效果，原本 100 點韌性傷害變成 100 × 0.8 = 80 點。

[詳細資料](adamant_pinning_dog_kills_buff_allies.md) · [返回目錄](#talent-index)

---

<a id="adamant_sprinting_sliding"></a>
### 迅疾走位(Rapid Movement)

<img src="https://github.com/user-attachments/assets/8a0b3c73-0e7e-4d31-9f7d-385634eae6e3" width="72" height="72" alt="迅疾走位天賦圖示">

- **滑行加速**：滑行結束後，衝刺速度提高 5%，持續 5 秒；再次滑行可重新計時。例如原本每秒衝刺 6 公尺，單計本效果為 6 × 1.05 = 6.3 公尺。

- **擊殺恢復**：擊殺敵人恢復最大耐力的 5%，每 0.75 秒最多觸發一次；不需要先滑行。最大耐力 6 點時，每次為 6 × 5% = 0.3 點，最多補滿。

[詳細資料](adamant_sprinting_sliding.md) · [返回目錄](#talent-index)

---

<a id="adamant_ranged_damage_on_melee_stagger"></a>
### 最後通牒(Final Warning)

<img src="https://github.com/user-attachments/assets/75cf7e7e-044e-432f-b7cb-b73e53164425" width="72" height="72" alt="最後通牒天賦圖示">

- **觸發與重新計時**：近戰攻擊或推擊使敵人踉蹌後，遠程傷害提高 15%，持續 5 秒；再次觸發重設時間。搭配震盪攻擊，符合條件的近戰弱點命中也可觸發。

- **傷害算例**：基礎 100 點遠程傷害變成 115 點；同階段原有 25% 加成時，由 125 點變成 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](adamant_ranged_damage_on_melee_stagger.md) · [返回目錄](#talent-index)

---

<a id="adamant_clip_size"></a>
### 秉賦為先(Priority Endowment)

<img src="https://github.com/user-attachments/assets/03af9ca3-e4f4-4383-9650-f8ac659cfadd" width="72" height="72" alt="秉賦為先天賦圖示">

- **容量算例**：原本 30 發彈匣，30 × 1.15 = 34.5，向上取整數為 35 發；原本 5 發則由 5 × 1.15 = 5.75 變成 6 發。

- **作用範圍**：增加彈匣上限，備用彈藥容量仍由其他效果決定。

[詳細資料](adamant_clip_size.md) · [返回目錄](#talent-index)

---

<a id="adamant_damage_vs_suppressed"></a>
### 惡徒退散(Cower, Miscreants!)

<img src="https://github.com/user-attachments/assets/a72c3f5b-2dde-48d0-8f5c-1af4ba20a044" width="72" height="72" alt="惡徒退散天賦圖示">

- **傷害算例**：攻擊受壓制的敵人，單計此效果，基礎 100 點傷害變成 100 × 1.25 = 125 點；原有同階段 20% 加成時，由 120 點變成 145 點。

- **作用範圍**：近戰與遠程皆可；目標未受壓制時不生效。

[詳細資料](adamant_damage_vs_suppressed.md) · [返回目錄](#talent-index)

---

<a id="adamant_stacking_damage"></a>
### 正當手段(Justified Measures)

<img src="https://github.com/user-attachments/assets/d3c96bd5-6464-499a-a742-cd58ddf1fa02" width="72" height="72" alt="正當手段天賦圖示">

- **疊層與重新計時**：每次攻擊命中第一個目標後獲得 1 層，每層提高 2% 傷害，最多 5 層。再次觸發重設全部層數的 5 秒持續時間；同一擊掃中後續目標不再加層。

- **傷害算例**：滿層為 5 × 2% = 10%，基礎 100 點傷害變成 110 點；同階段原有 25% 加成時，125 點變成 135 點。

[詳細資料](adamant_stacking_damage.md) · [返回目錄](#talent-index)

---

<a id="adamant_staggered_enemies_deal_less_damage"></a>
### 壓制武力(Suppression Force)

<img src="https://github.com/user-attachments/assets/af381ce2-1360-49a1-931d-6db3fb174166" width="72" height="72" alt="壓制武力天賦圖示">

- **觸發與重新計時**：近戰攻擊或推擊命中處於踉蹌狀態的敵人後，使其造成的傷害降低 20%，持續 5 秒；再次觸發重設時間，不累積倍率。

- **傷害算例**：單計這項削弱，敵人原本造成 100 點傷害時變成 100 × (1 − 20%) = 80 點；這是削弱敵人的輸出，不是對敵人追加傷害。

#### 繁中原文勘誤

- 原文「對其造成…傷害」誤寫效果方向。正確效果是讓該敵人造成的傷害降低 20%，持續 5 秒，不是對其追加傷害。

[詳細資料](adamant_staggered_enemies_deal_less_damage.md) · [返回目錄](#talent-index)

---

<a id="adamant_melee_weakspot_hits_count_as_stagger"></a>
### 震盪攻擊(Concussive)

<img src="https://github.com/user-attachments/assets/2577c784-85c4-473c-b9ba-a88f8de35355" width="72" height="72" alt="震盪攻擊天賦圖示">

- **運作方式**：近戰命中弱點後，目標在 4 秒內會被相關天賦視為踉蹌；不必真的把敵人打退。再次命中可延續這項判定。

- **搭配算例**：搭配鎮壓異己的 10% 對踉蹌增傷，後續符合條件的基礎 100 點攻擊變成 100 × 1.1 = 110 點。單選本天賦不會自行增加傷害或強制敵人倒退。

[詳細資料](adamant_melee_weakspot_hits_count_as_stagger.md) · [返回目錄](#talent-index)

---

<a id="adamant_staggering_enemies_take_more_damage"></a>
### 針對弱者(Target the Weak)

<img src="https://github.com/user-attachments/assets/aa78a41a-3cea-4e8d-ba36-4496c3619be7" width="72" height="72" alt="針對弱者天賦圖示">

- **運作與重新計時**：近戰或推擊命中處於踉蹌狀態的敵人，接下來 5 秒使其承受的近戰傷害提高 15%；你與隊友皆可受益。再次觸發重設時間，不累加幅度。

- **傷害算例**：只計目標承傷階段，100 點近戰傷害變成 115 點。若攻擊者本身另有 25% 增傷，兩個階段相乘為 100 × 1.25 × 1.15 = 143.75 點；若是目標已有同階段 25% 承傷增加，則為 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](adamant_staggering_enemies_take_more_damage.md) · [返回目錄](#talent-index)

---

<a id="adamant_perfect_block_damage_boost"></a>
### 還治其人之身(Retaliatory Force)

<img src="https://github.com/user-attachments/assets/96221430-4610-4bf3-9b19-4fd056c99e74" width="72" height="72" alt="還治其人之身天賦圖示">

- **格擋消耗**：格擋耐力消耗降低 15%；原本消耗 2 點耐力，單計本效果為 2 × 0.85 = 1.7 點。

- **完美格擋增益**：完美格擋後，傷害與攻速提高 15%，持續 8 秒；再次完美格擋重設時間。

- **增益算例**：基礎 100 點傷害變成 115 點；受攻速影響的 1 秒動作變成 1 ÷ 1.15 ≈ 0.870 秒。若已有同階段 25% 增傷，則為 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](adamant_perfect_block_damage_boost.md) · [返回目錄](#talent-index)

---
