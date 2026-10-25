# 巢都渣滓天賦：Release 1.13.1

[English](en/README.md)

[來源、公式與技術索引](SOURCE_INDEX.md)｜[技能分類](../../README.md)｜[版本資訊](../../../README.md)
[角色基礎效果](BASE_EFFECTS.md)

<a id="talent-index"></a>
## 技能目錄

| 技能 | 主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/fd2156cb-6e65-4214-bd01-ab0b28665714" width="32" height="32" alt="擊暈天賦圖示"> [擊暈](#broker_blitz_flash_grenade_improved)<br>- Blackout | <ul><li>快速投擲的擊退手雷，最多攜帶 5 顆；每 20 次近距離擊殺恢復 1 顆。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/3b4df232-3b49-4f84-98c0-2b3e8828f917" width="32" height="32" alt="炸彈使者天賦圖示"> [炸彈使者](#broker_blitz_missile_launcher)<br>- Boom Bringer | <ul><li>發射高威力飛彈，最多 2 枚；爆炸基礎半徑 7 公尺。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/7d3c5999-8823-4b54-9204-6e22637bc851" width="32" height="32" alt="化學手榴彈天賦圖示"> [化學手榴彈](#broker_blitz_tox_grenade)<br>- Chem Grenade | <ul><li>投擲化學手榴彈，留下 15 秒毒區，最多攜帶 2 顆。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/3927d1d0-9e15-4b96-9a91-00f0503e338c" width="32" height="32" alt="精進神射手天賦圖示"> [精進神射手](#broker_aura_gunslinger_improved)<br>- Gunslinger Improved | <ul><li>協同中的成員撿取彈藥時，各成員額外取得相當於該補給 10% 的彈藥。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/7fc85ba0-f7e6-4aba-a966-638511f2c713" width="32" height="32" alt="惡棍天賦圖示"> [惡棍](#broker_coherency_melee_damage)<br>- Ruffian | <ul><li>你與協同中的隊友，近戰傷害增加 10%。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/213537c0-9bdc-49a7-9b60-67aaeb58f395" width="32" height="32" alt="無政府主義者天賦圖示"> [無政府主義者](#broker_coherency_anarchist)<br>- Anarchist | <ul><li>你與協同中的隊友，爆擊率增加 5 個百分點。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/785f7b2c-0591-4cc4-b928-31c26b07d0f7" width="32" height="32" alt="強化亡命之徒天賦圖示"> [強化亡命之徒](#broker_ability_focus_improved)<br>- Enhanced Desperado | <ul><li>啟動後自動切換並裝填遠程武器，進入 10 秒專注狀態；此時遠程攻擊視同成功閃避，衝刺不耗耐力，衝刺速度加算 +20%。</li><li>標示 12.5 公尺內可標記的敵人；以遠程武器近距離擊殺標記目標可延長狀態，初始每次 +1 秒，經過 20 秒後延長量逐段縮小。</li><li>基礎冷卻 45 秒；狀態存續期間自然充能暫停，狀態結束後才恢復。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/70eb922d-eda2-4ed7-b945-ed3b305b10a6" width="32" height="32" alt="化學性依賴天賦圖示"> [化學性依賴](#broker_ability_stimm_field)<br>- Stimm Supply | <ul><li>部署 3 公尺範圍的興奮劑氣體場域，持續 20 秒；範圍內幹員每 0.25 秒治療 0.5 點腐敗，總計最多 40 點，並免疫腐敗。</li><li>若你攜帶興奮劑，場域也會讓範圍內隊友取得其效果。基礎冷卻 60 秒，場域存在時自然充能暫停。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/ae8bc68a-7d1b-4ee7-8691-bed95ed8069d" width="32" height="32" alt="橫衝直撞！天賦圖示"> [橫衝直撞！](#broker_ability_punk_rage)<br>- Rampage! | <ul><li>啟動時恢復全部韌性並進入 10 秒怒火狀態；近戰威力等級加算 +35%、近戰攻擊速度加算 +20%，承受傷害乘以 0.75（只計此效果即減少 25%）。</li><li>近戰命中可延長狀態；前 20 秒每次延長 0.3 秒，之後每跨 20 秒延長量再減半。基礎冷卻 30 秒，狀態期間自然充能暫停。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/1a4c2d3b-dfba-4840-a85d-c8d5390e3a42" width="32" height="32" alt="熔爐怒吼天賦圖示"> [熔爐怒吼](#broker_ability_punk_rage_sub_2)<br>- Pulverising Strikes | <ul><li>怒火期間攻擊橫掃能力加算 +50%；另在怒火每存續約 1 秒累積一層近戰威力，每層 +2.5%，最多 10 層（+25%）。</li><li>與怒火基本 +35% 近戰威力等級合併時，只計這兩項最多為 +60% 威力等級修正，不等於 +60% 傷害。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/db7fee2b-9e46-49f1-a0ac-28cd6cea424f" width="32" height="32" alt="凝聚殺意天賦圖示"> [凝聚殺意](#broker_ability_punk_rage_sub_1)<br>- Channelled Aggression | <ul><li>怒火狀態期間，近戰重攻擊獲得加算 +25% 撕裂修正，作用於護甲穿透計算。</li><li>此效果檢查的是近戰重攻擊；撕裂修正不等於直接增加 25% 傷害。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/c23bede2-8365-4a28-9fcf-0aa91847923a" width="32" height="32" alt="沸騰之血天賦圖示"> [沸騰之血](#broker_ability_punk_rage_sub_3)<br>- Forge's Bellow | <ul><li>選用後，怒火開始與結束時各發動一次 4.5 公尺範圍怒吼；周遭敵人受到踉蹌。</li><li>每次怒吼使範圍內敵人的近戰攻擊速度加算 -50%，持續 5 秒；單計此減速時，原本 1 秒的攻擊間隔約成 2 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/040166f5-e6b1-4f43-ae17-2c21b8fd8014" width="32" height="32" alt="碎骨打擊天賦圖示"> [碎骨打擊](#broker_ability_punk_rage_sub_4)<br>- Boiling Blood | <ul><li>近戰命中帶有精英、專家、怪物或隊長標籤的敵人時，怒火延長 1 秒；這類命中的延長量在 30 秒前不遞減，之後每跨 30 秒減半。</li><li>一般敵人的命中仍依基本規則延長 0.3 秒，並在 20 秒後遞減；30 秒提升只套用於上述特殊敵人標籤。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/74d4304b-23f7-4666-879b-62c727596b69" width="32" height="32" alt="專注凝神天賦圖示"> [專注凝神](#broker_ability_focus_sub_3)<br>- Focused Resolve | <ul><li>專注期間的近距離遠程擊殺可恢復技能冷卻：一般擊殺 0.5 秒，精英或專家擊殺 1 秒；每次專注最多恢復 5 秒。</li><li>按 45 秒基礎冷卻及每秒自然充能 1 計，恢復至上限相當於最多補回 5 秒資源；不計其他修正，專注結束後自然充能剩 40 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/732d190b-365f-4815-9d94-bc136cafd423" width="32" height="32" alt="精準獵殺天賦圖示"> [精準獵殺](#broker_ability_focus_sub_2)<br>- Pick Your Targets | <ul><li>專注期間遠程攻擊加算 +15% 撕裂修正；近距離遠程擊殺每次另疊 3% 遠程傷害，最多 5 層（+15%），每層持續 3 秒並可由新擊殺重新計時。</li><li>此撕裂加成作用於護甲計算，擊殺疊層是遠程傷害加算；只計滿層效果時，基礎100點遠程傷害變為115點。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/c0ce43c8-1324-4c26-8319-c1f12c28fbb3" width="32" height="32" alt="熟練部署天賦圖示"> [熟練部署](#broker_ability_stimm_field_sub_3)<br>- Practiced Deployment | <ul><li>取得新的可用興奮劑時，補滿一次化學性依賴的能力充能；能力最多 1 次充能，已滿時不會再增加。</li><li>新取得興奮劑或專用興奮劑恢復次數後，效果約在半秒內觸發。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/4ea2874c-338f-42ec-95cb-9f4c08e64794" width="32" height="32" alt="速效型興奮劑天賦圖示"> [速效型興奮劑](#broker_ability_stimm_field_sub_1)<br>- Fast Acting Stimms | <ul><li>場域持續時間縮短為 5 秒；離場或場域結束時，已取得的場域效果可再持續 15 秒。</li><li>場域結束後立即恢復 60 秒自然冷卻；15 秒效果延續期間不會讓場域冷卻繼續暫停。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/c3cdd1a9-e1eb-4e29-9a5e-6bae44c280a4" width="32" height="32" alt="毒性陷阱天賦圖示"> [毒性陷阱](#broker_ability_stimm_field_sub_2)<br>- Booby Trap | <ul><li>場域持續時間正常結束時爆炸；3公尺範圍內受到爆炸傷害的敵人會附加 7 層毒素。</li><li>爆炸以破片傷害計算；遭提前取消或場域尚未到期時，不會觸發這次爆炸。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/4575cb9c-10e2-489c-8b4f-0b8f4eda154d" width="32" height="32" alt="靈巧天賦圖示"> [靈巧](#broker_passive_improved_dodges)<br>- Nimble | <ul><li>閃避移動速度提高 25%，閃避後仍被判定為閃避的時間增加 0.15 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/2b18473f-9818-4d07-98ab-b4c7995dbf8d" width="32" height="32" alt="腎上腺素狂暴天賦圖示"> [腎上腺素狂暴](#broker_keystone_adrenaline_junkie)<br>- Adrenaline Frenzy | <ul><li>近戰命中獲得 1 層腎上腺素；近戰爆擊額外獲得 1 層。</li><li>2 秒內未獲得新層時，每 2 秒失去 1 層；最多 30 層。</li><li>達 30 層時清除腎上腺素並觸發 10 秒狂暴：近戰攻速 +10%、近戰傷害 +25%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/6cc42ba2-04c8-4a98-ae3e-5341b777ccdd" width="32" height="32" alt="兀鷲印記天賦圖示"> [兀鷲印記](#broker_keystone_vultures_mark_on_kill)<br>- Vulture's Mark | <ul><li>遠程擊殺精英或專家可累積印記，持續 8 秒、最多 3 層；每層增加 5% 遠程傷害、5 個百分點遠程爆擊率與 5% 移動速度。</li><li>有 3 層時再以遠程攻擊擊殺精英或專家，恢復自己與協同範圍內的隊友最大韌性的 15%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/9b42d72f-2429-446a-bf75-d5d87db98b36" width="32" height="32" alt="化學性依賴天賦圖示"> [化學性依賴](#broker_keystone_chemical_dependency)<br>- Chemical Dependency | <ul><li>使用興奮劑取得 1 層化學依賴性，每層提高戰鬥技能資源回充速度 10%。</li><li>最多 3 層，每層持續 90 秒；沒有新層時每 90 秒衰退 1 層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/b7fff291-d5f3-4213-bfef-8b28b8065889" width="32" height="32" alt="化學強化天賦圖示"> [化學強化](#broker_keystone_chemical_dependency_sub_1)<br>- Chem Enhanced | <ul><li>每層化學依賴性額外增加 5 個百分點的爆擊率。</li><li>3 層時共增加 15 個百分點；這是爆擊率，不是暴擊傷害。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/6c334888-08bb-4567-a6a2-1c4b4750409b" width="32" height="32" alt="化學增強天賦圖示"> [化學增強](#broker_keystone_chemical_dependency_sub_2)<br>- Chem Fortified | <ul><li>使用興奮劑時恢復最大韌性的 50%。</li><li>每層化學依賴性使承受的韌性傷害乘以 0.95；3 層合計使韌性傷害約降低 14.26%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/51827890-e735-4220-8959-bf37381e0fc8" width="32" height="32" alt="化學藥劑全開天賦圖示"> [化學藥劑全開](#broker_keystone_chemical_dependency_sub_3)<br>- Maxed Out Chems | <ul><li>化學依賴性每層持續時間由 90 秒改為 60 秒，最多層數由 3 層增加至 4 層。</li><li>4 層時戰鬥技能資源回充倍率為 1.40；60 秒線性回充算例約縮至 42.86 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/a887e60a-cbd4-4d49-8e44-20661f7f2dcb" width="32" height="32" alt="兀鷲推擊天賦圖示"> [兀鷲推擊](#broker_keystone_vultures_mark_aoe_stagger)<br>- Vulture's Push | <ul><li>以遠程攻擊擊殺精英或專家時，在自己周圍 3 公尺觸發爆炸，造成中等踉蹌與擊退。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/76cdf6df-d713-4085-8b29-fce2c1c64413" width="32" height="32" alt="堅毅獵手天賦圖示"> [堅毅獵手](#broker_keystone_vultures_mark_increased_duration)<br>- Patient Hunter | <ul><li>兀鷲印記的持續時間由 8 秒提高至 12 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/00fcee1e-616c-4283-ade2-f67fc6657a7e" width="32" height="32" alt="兀鷲閃避天賦圖示"> [兀鷲閃避](#broker_keystone_vultures_mark_dodge_on_ranged_crit)<br>- Vulture's Dodge | <ul><li>遠程暴擊後 1 秒內，視為正在閃避近戰與遠程攻擊；再次暴擊重新計時。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/f2c76ddc-b60e-49ee-9e7c-1d94981a7448" width="32" height="32" alt="腎上腺素刺客天賦圖示"> [腎上腺素刺客](#broker_keystone_adrenaline_junkie_sub_1)<br>- Adrenaline Assassin | <ul><li>選用腎上腺素刺客後，一般非弱點近戰命中不給層；近戰弱點命中共給 3 層。</li><li>暴擊仍額外加 1 層，因此近戰弱點暴擊共給 4 層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/72d38f70-b406-41ca-a04b-2bcdadfec50c" width="32" height="32" alt="振奮怒火天賦圖示"> [振奮怒火](#broker_keystone_adrenaline_junkie_sub_3)<br>- Stoked Rage | <ul><li>腎上腺素狂暴的持續時間由 10 秒提高至 20 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/49a6640b-2259-4b1b-9fd1-634da02747ce" width="32" height="32" alt="腎上腺素突破天賦圖示"> [腎上腺素突破](#broker_keystone_adrenaline_junkie_sub_5)<br>- Adrenaline Unbound | <ul><li>狂暴期間每秒恢復最大韌性的 5%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/2b1aa9f6-20e2-4d38-b2fb-6af765a426ca" width="32" height="32" alt="失控攻擊天賦圖示"> [失控攻擊](#broker_keystone_adrenaline_junkie_sub_4)<br>- Uncontrolled Aggression | <ul><li>每層腎上腺素的持續時間由 2 秒提高至 4 秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/29f93050-b0a8-48ca-88fe-2e40d9769a99" width="32" height="32" alt="腎上腺素懲戒者天賦圖示"> [腎上腺素懲戒者](#broker_keystone_adrenaline_junkie_sub_2)<br>- Adrenaline Smiter | <ul><li>只有近戰擊殺才會取得腎上腺素：一般擊殺額外 +4 層，精英擊殺再額外 +10 層。</li><li>非擊殺的近戰命中不給層；暴擊擊殺仍保留核心的額外 1 層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/8f760271-d6e2-4a80-88ef-01c7007941dc" width="32" height="32" alt="過街老鼠天賦圖示"> [過街老鼠](#broker_passive_longer_dodges)<br>- Alley Rat | <ul><li>閃避距離提高 50%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/b19ca7bc-4348-455c-ae43-c3cf7a8b0852" width="32" height="32" alt="快速且致命天賦圖示"> [快速且致命](#broker_passive_close_range_damage_on_dodge)<br>- Quick and Deadly | <ul><li>成功閃避後，近距離傷害增加 15%，持續 3 秒；加成隨距離衰減。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e5936fa1-2583-4575-a968-aa37e1096a16" width="32" height="32" alt="特提恩是迎賓天賦圖示"> [特提恩是迎賓](#broker_passive_first_target_damage)<br>- A Tertium Welcome | <ul><li>每次近戰攻擊命中的第一名敵人，受到的近戰傷害提高 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/caab00a6-dc0b-49ff-9d76-836ed680d22f" width="32" height="32" alt="打你的臉天賦圖示"> [打你的臉](#broker_passive_close_ranged_damage)<br>- In Your Face | <ul><li>手持遠程武器時，12.5 公尺內增傷 25%，逐步衰減至 30 公尺外的 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/596d2151-a0bd-4b71-9305-805caed18fcc" width="32" height="32" alt="精準暴力天賦圖示"> [精準暴力](#broker_passive_restore_toughness_on_weakspot_kill)<br>- Precision Violence | <ul><li>近戰命中恢復 4% 最大韌性；暴擊或弱點改為 8%，暴擊弱點為 12%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/04100618-a87c-416c-8e22-3c1eb01aa7ab" width="32" height="32" alt="特提恩之聲天賦圖示"> [特提恩之聲](#broker_passive_restore_toughness_on_close_ranged_kill)<br>- Voice of Tertium | <ul><li>在 12.5 公尺內遠程擊殺恢復 8% 最大韌性；精英與專家改為 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e4a8f21b-75d8-45dd-8cf1-84a42d41578f" width="32" height="32" alt="翩翩蝶舞天賦圖示"> [翩翩蝶舞](#broker_passive_ninja_grants_crit_chance)<br>- Float Like a Butterfly | <ul><li>成功閃避或完美格擋後，爆擊率增加 20 個百分點，持續 3 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/139c3b2c-0d64-4a99-89fb-a19e5ec4cc6e" width="32" height="32" alt="快速裝填天賦圖示"> [快速裝填](#broker_passive_reload_speed_on_close_kill)<br>- Speedloader | <ul><li>12.5 公尺內的遠程擊殺，使換彈速度提高 30%，持續 8 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6f9a1e1d-3722-4f74-98ff-a17aadbd2ce4" width="32" height="32" alt="能量爆發天賦圖示"> [能量爆發](#broker_passive_stun_immunity_on_toughness_broken)<br>- Burst of Energy | <ul><li>自身韌性耗盡時恢復 50% 最大韌性，免疫眩暈 6 秒；效果結束後冷卻 10 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ad899680-6ea8-486b-976c-e0e875026aa8" width="32" height="32" alt="韌性增幅天賦圖示"> [韌性增幅](#base_toughness_node_buff_medium_1)<br>- Toughness Boost | <ul><li>最大韌性增加 25 點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/31e809e4-4465-4dde-9719-1f66f8face02" width="32" height="32" alt="恢復姿態天賦圖示"> [恢復姿態](#broker_passive_stamina_on_successful_dodge)<br>- Regained Posture | <ul><li>成功閃避時，恢復最大耐力的 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a1732698-da8a-42ec-8f53-f0a57c964056" width="32" height="32" alt="奧客天賦圖示"> [奧客](#broker_passive_dodge_melee_on_slide)<br>- Slippery Customer | <ul><li>滑行時，視為正在閃避近戰攻擊。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ba3e0adf-5d95-459d-9ed4-f17e21febd90" width="32" height="32" alt="沒甚麼，只是擦傷天賦圖示"> [沒甚麼，只是擦傷](#broker_passive_replenish_toughness_on_ranged_toughness_damage)<br>- Tis but a Scratch | <ul><li>尚有韌性時受到遠程傷害，3 秒內恢復 30% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6849ad32-3ebc-4d11-b980-612b4d23fd94" width="32" height="32" alt="狂轟猛射天賦圖示"> [狂轟猛射](#broker_passive_damage_on_reload)<br>- Unload | <ul><li>換彈後 7 秒內，遠程傷害增加 2%；每消耗相當於彈匣 10% 的彈藥，再增加 2%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/13f03cfd-6e09-41fe-920e-ad116f1a1548" width="32" height="32" alt="堅韌疾速天賦圖示"> [堅韌疾速](#broker_passive_stamina_grants_atk_speed)<br>- Swift Endurance | <ul><li>每 1 點目前耐力，增加 2% 近戰攻擊速度；不足 1 點捨去。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d6f72725-01aa-4bc8-aeca-5e76118c1a51" width="32" height="32" alt="加重背刺天賦圖示"> [加重背刺](#broker_passive_ramping_backstabs)<br>- Ramping Backstabs | <ul><li>每次近戰背刺後增加 10% 近戰威力，最多 5 層；非背刺近戰命中會清除。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/95c8ba8f-bd1f-424f-bee5-435d83d4dfa6" width="32" height="32" alt="移動目標天賦圖示"> [移動目標](#broker_passive_increased_ranged_dodges)<br>- Moving Target | <ul><li>手持遠程武器時，有效閃避次數增加 1 次。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/19fc62d1-22a4-4366-9195-e523695c2a90" width="32" height="32" alt="樣本採集天賦圖示"> [樣本採集](#broker_passive_stimm_cd_on_kill)<br>- Sample Collector | <ul><li>每次擊殺縮短興奮劑冷卻 0.5 秒；目標受毒素感染時改為 1 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ab7d66da-9caa-4c94-9ddf-279a30441f67" width="32" height="32" alt="神經質天賦圖示"> [神經質](#broker_passive_improved_dodges_at_full_stamina)<br>- Jittery | <ul><li>耐力至少 75% 時，有效閃避次數的恢復等待時間縮短 40%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f936a91e-7097-49cc-b8f5-88dff18117eb" width="32" height="32" alt="暴擊幾率增幅天賦圖示"> [暴擊幾率增幅](#base_crit_chance_node_buff_low_1)<br>- Critical Chance Boost | <ul><li>爆擊率增加 5 個百分點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fa269ae5-914c-4444-a713-88c4591a79d9" width="32" height="32" alt="近戰增幅天賦圖示"> [近戰增幅](#base_melee_damage_node_buff_medium_1)<br>- Melee Damage Boost | <ul><li>近戰傷害增加 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/105c999d-8563-4033-aea2-15b5fc968cc4" width="32" height="32" alt="強效毒藥天賦圖示"> [強效毒藥](#base_toxin_power_boost_1)<br>- Potent Tox | <ul><li>毒素威力增加 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/2dfab969-4eb2-4181-aa52-7dc1c8c93f89" width="32" height="32" alt="黏黏手天賦圖示"> [黏黏手](#broker_passive_reduce_swap_time)<br>- Sticky Hands | <ul><li>武器切換速度增加 40%；腰射或架槍時降低 10% 後座力、30% 散佈。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d28213f3-85a5-4de7-a380-f3799f671cc8" width="32" height="32" alt="請求暫停天賦圖示"> [請求暫停](#broker_passive_reduced_toughness_damage_during_reload)<br>- Calling for a Time Out | <ul><li>換彈期間及結束後 4 秒，承受的韌性傷害減少 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/069e6733-6d1f-4859-a3a6-829d213fd0a1" width="32" height="32" alt="街頭硬漢天賦圖示"> [街頭硬漢](#broker_passive_knockback_on_taking_melee_damage)<br>- Street Tough | <ul><li>受到近戰命中時震退周圍 3 公尺敵人，移動速度增加 10%，持續 3 秒；冷卻 8 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/97f78fa5-afd9-4fe0-b24f-fe54147da399" width="32" height="32" alt="蓄力殲滅天賦圖示"> [蓄力殲滅](#broker_passive_crit_grants_damage)<br>- Channelled Devastation | <ul><li>每 1% 目前爆擊率，提供 0.5% 近戰傷害，最多 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/23850be1-ea33-448c-93dc-409f21216ceb" width="32" height="32" alt="猛烈劈擊天賦圖示"> [猛烈劈擊](#broker_passive_melee_cleave_on_melee_kill)<br>- Battering Strikes | <ul><li>近戰擊殺後增加 10% 近戰順劈，持續 5 秒，最多 5 層。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5439d198-0b4c-4a05-ab95-fc67f67398c9" width="32" height="32" alt="超暴力天賦圖示"> [超暴力](#broker_passive_melee_damage_carry_over)<br>- Hyper-Violence | <ul><li>擊殺的溢出傷害有 25% 轉為固定近戰加傷，持續 1 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/90caf35d-4780-4f00-a9cc-636858cd091e" width="32" height="32" alt="劇毒菌株天賦圖示"> [劇毒菌株](#broker_passive_toxin_infected_enemies_take_increased_damage)<br>- Virulent Strain | <ul><li>你施加毒素時，使目標受到的傷害增加 10%，最多持續 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/06abfebe-3a5e-421b-b71a-35e5faee2767" width="32" height="32" alt="毒藥狂熱天賦圖示"> [毒藥狂熱](#broker_passive_damage_after_toxined_enemies)<br>- Toxin Mania | <ul><li>12.5 公尺內每名受毒素感染的敵人，提供 5% 傷害，最多 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/31efd90d-864c-4e6c-af06-b48d540b45b3" width="32" height="32" alt="連帶傷害天賦圖示"> [連帶傷害](#broker_passive_toxin_spread_on_kills)<br>- Splash Damage | <ul><li>近戰擊殺精英時，對其周圍 4 公尺內最多 10 名敵人施加 2 層毒素。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/88f63a37-5b06-4bf2-93a5-95c9f3c98c48" width="32" height="32" alt="額外彈藥袋天賦圖示"> [額外彈藥袋](#broker_passive_increased_blitz_ammo)<br>- Extra Pouches | <ul><li>閃擊攜帶上限增加 1 次。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f92b996b-c59e-4d6b-90ac-a31046be1abd" width="32" height="32" alt="塗讀武裝天賦圖示"> [塗讀武裝](#broker_passive_melee_attacks_apply_toxin)<br>- Coated Weaponry | <ul><li>近戰爆擊命中時，施加 1 層毒素。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6125da40-9e12-4107-bb5b-a8aa330a4b89" width="32" height="32" alt="隨身毒素天賦圖示"> [隨身毒素](#broker_passive_blitz_inflicts_toxin)<br>- Pocket Toxin | <ul><li>閃擊爆炸額外施毒：擊暈手雷 3 層、飛彈 6 層、化學手榴彈 10 層。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/28aafc63-bbd4-4097-a93f-3fb0d62f8710" width="32" height="32" alt="精準投毒天賦圖示"> [精準投毒](#broker_passive_reduced_damage_by_toxined)<br>- Targeted Toxin | <ul><li>你感染的敵人造成傷害降低 15%；怪物與指定頭目改為降低 30%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/0d36baca-b919-457c-890e-535a0ce33236" width="32" height="32" alt="毒性再生天賦圖示"> [毒性再生](#broker_passive_replenish_toughness_while_toxined_enemies_in_proximity)<br>- Toxic Renewal | <ul><li>15 公尺內每名感染毒素的敵人，每秒恢復 1% 最大韌性，最多計 10 名。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/148db758-02d7-4855-9f45-badcabc7c8cf" width="32" height="32" alt="軍火商天賦圖示"> [軍火商](#broker_passive_extended_mag)<br>- Ammo Jack | <ul><li>彈匣容量增加 15%，結果無條件進位。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d6795940-e616-410f-b56b-76593e8a12eb" width="32" height="32" alt="趁人之危天賦圖示"> [趁人之危](#broker_passive_damage_vs_heavy_staggered)<br>- Cheap Shots | <ul><li>對踉蹌敵人增傷 10%；中度或重度踉蹌改為 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/83713f05-33fd-41c1-86f2-c536d7a1f06c" width="32" height="32" alt="心狠手辣天賦圖示"> [心狠手辣](#broker_passive_melee_crit_instakill)<br>- Hyper-Critical | <ul><li>近戰爆擊後，若人類體型敵人的剩餘生命少於該次傷害，立即處決；隊長除外。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/280d8610-ccf2-4be3-a05b-6f4a140f8b23" width="32" height="32" alt="以小搏大天賦圖示"> [以小搏大](#broker_passive_damage_vs_elites_monsters)<br>- Punching Above One's Weight | <ul><li>對精英及怪物的傷害增加 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/bd4b828f-f439-429d-a682-c036774235f3" width="32" height="32" alt="甜蜜點天賦圖示"> [甜蜜點](#broker_passive_increased_weakspot_damage)<br>- The Sweet Spot | <ul><li>弱點命中的額外傷害部分增加 25%；實際總增幅依武器而變。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c19f893c-1a73-4111-b234-e675605b17b5" width="32" height="32" alt="延長藥效天賦圖示"> [延長藥效](#broker_passive_stimm_increased_duration)<br>- Long Lasting | <ul><li>興奮劑效果延長 5 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6f1ead13-0e28-4983-86e7-44478bd76cdc" width="32" height="32" alt="神佑興奮劑天賦圖示"> [神佑興奮劑](#broker_passive_stimm_cleanse_on_kill)<br>- Blessed Stimms | <ul><li>興奮劑生效時，每次擊殺清除最大生命 1% 的腐敗；每次用藥以 50% 為停止門檻。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5cb31261-7422-451a-9aac-d1c38b48c802" width="32" height="32" alt="巢都格鬥家天賦圖示"> [巢都格鬥家](#broker_passive_dr_damage_tradeoff_on_stamina)<br>- Hive City Brawler | <ul><li>耐力越滿，減傷越高；耐力越低，近戰增傷越高，兩者各最多 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/3247cd98-e623-4d24-a821-db3f3a6ee20a" width="32" height="32" alt="順手牽羊天賦圖示"> [順手牽羊](#broker_passive_low_ammo_regen)<br>- Pickpocket | <ul><li>備用彈藥低於 20% 時，近戰擊殺精英或專家會補到 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6fa27fb0-2d79-43fc-b74a-d64da58773f6" width="32" height="32" alt="趁勝追擊天賦圖示"> [趁勝追擊](#broker_passive_cleave_on_cleave)<br>- Battering Momentum | <ul><li>單次近戰命中至少 3 名敵人，獲得 50% 額外順劈供下一次攻擊使用。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/51c007e0-bed4-4759-a369-04ab37032369" width="32" height="32" alt="裝備財閥特殊裝備天賦圖示"> [裝備財閥特殊裝備](#broker_stimm_activation_talent)<br>- Equip Cartel Special | <ul><li>分配興奮劑配方後，裝備可自動恢復的專用興奮劑；配方共用 30 點額度。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/6b1d7464-dc75-4f26-91d7-08e79fe94125" width="32" height="32" alt="激勵I天賦圖示"> [激勵I](#broker_stimm_celerity_1)<br>- Spur I | <ul><li>攻擊速度增加 4%。</li><li>武器切換速度增加 25%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/bfb821b6-f80f-4c08-842f-b3f7000ac772" width="32" height="32" alt="激勵II天賦圖示"> [激勵II](#broker_stimm_celerity_2)<br>- Spur II | <ul><li>攻擊速度增加 4%。</li><li>武器切換速度增加 25%。</li><li>耐力消耗減少 15%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/27832b4a-d52a-49bb-a87e-2a3cd7fa4371" width="32" height="32" alt="激勵III天賦圖示"> [激勵III](#broker_stimm_celerity_3)<br>- Spur III | <ul><li>攻擊速度增加 4%。</li><li>耐力消耗減少 15%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/c4f5bb04-c085-4d9d-8341-0346d3e6a173" width="32" height="32" alt="激勵IV天賦圖示"> [激勵IV](#broker_stimm_celerity_4)<br>- Spur IV | <ul><li>攻擊速度增加 4%。</li><li>耐力消耗減少 20%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/ed3da982-a076-4b67-a1ca-c889ede0ba70" width="32" height="32" alt="激勵V天賦圖示"> [激勵V](#broker_stimm_celerity_5a)<br>- Spur V | <ul><li>攻擊速度再增加 4%，並免疫眩暈與減速。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/21b33eec-94cc-4cea-b531-1ff788ff6bc9" width="32" height="32" alt="反射天賦圖示"> [反射](#broker_stimm_celerity_5b)<br>- Reflex | <ul><li>換彈速度增加 30%，後座不穩定度累積降低 50%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/12ddbfdc-82bd-4ece-ba73-e6550451e5a4" width="32" height="32" alt="狂熱天賦圖示"> [狂熱](#broker_stimm_celerity_5c)<br>- Fervor | <ul><li>移速與閃避距離增加 10%，閃避速度乘以 1.1；有效閃避次數恢復等待縮短 10%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/22ab15e3-5280-408f-884c-5d8ebd692363" width="32" height="32" alt="野火I天賦圖示"> [野火I](#broker_stimm_combat_1)<br>- Wildfire I | <ul><li>威力增加 4%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/e53e3328-a026-4e3c-8e91-c63cd69522c6" width="32" height="32" alt="野火II天賦圖示"> [野火II](#broker_stimm_combat_2)<br>- Wildfire II | <ul><li>威力增加 4%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/58b8efb6-6c10-4795-8046-33bb49eee893" width="32" height="32" alt="野火III天賦圖示"> [野火III](#broker_stimm_combat_3)<br>- Wildfire III | <ul><li>威力增加 4%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/b90d885e-2e9a-43e7-9b64-d42447b285f9" width="32" height="32" alt="野火IV天賦圖示"> [野火IV](#broker_stimm_combat_4a)<br>- Wildfire IV | <ul><li>威力增加 4%。</li><li>弱點與暴擊額外傷害增加 10%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/1db9427d-9c25-4096-898f-57089a300fce" width="32" height="32" alt="狂怒I天賦圖示"> [狂怒I](#broker_stimm_combat_4b)<br>- Fury I | <ul><li>威力增加 4%。</li><li>護甲撕裂增加 5%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/abb7491f-9991-4352-a6e7-46f5a34c1ee3" width="32" height="32" alt="獵鷹蕈劑I天賦圖示"> [獵鷹蕈劑I](#broker_stimm_combat_4c)<br>- Vultoprene I | <ul><li>威力增加 4%。</li><li>爆擊率增加 5 個百分點。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/eaa62b3f-dc32-4364-81c0-8aadbf77c9dc" width="32" height="32" alt="野火V天賦圖示"> [野火V](#broker_stimm_combat_5a)<br>- Wildfire V | <ul><li>威力增加 4%。</li><li>弱點與暴擊額外傷害增加 25%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/ccb20931-8290-461a-babb-60380b406b9d" width="32" height="32" alt="狂怒II天賦圖示"> [狂怒II](#broker_stimm_combat_5b)<br>- Fury II | <ul><li>威力增加 4%。</li><li>護甲撕裂增加 10%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/c91fbea3-470d-4fa1-ac50-d2ab5c741a35" width="32" height="32" alt="獵鷹蕈劑II天賦圖示"> [獵鷹蕈劑II](#broker_stimm_combat_5c)<br>- Vultoprene II | <ul><li>威力增加 4%。</li><li>爆擊率增加 10 個百分點。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/883f2dd7-ad0d-4986-a5d0-32fa36a11e27" width="32" height="32" alt="彈幕I天賦圖示"> [彈幕I](#broker_stimm_durability_1)<br>- Barrage I | <ul><li>使用時恢復最大韌性的 6.25%；藥效期間韌性恢復增加 5%、承受傷害降低 4%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/e99ef969-5e48-4129-9a22-d11f0e23aa80" width="32" height="32" alt="彈幕II天賦圖示"> [彈幕II](#broker_stimm_durability_2)<br>- Barrage II | <ul><li>使用時恢復最大韌性的 6.25%；藥效期間韌性恢復增加 5%、承受傷害降低 4%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/a9df685a-a1fd-4431-b90a-b77559277f58" width="32" height="32" alt="彈幕III天賦圖示"> [彈幕III](#broker_stimm_durability_3)<br>- Barrage III | <ul><li>使用時恢復最大韌性的 6.25%；藥效期間韌性恢復增加 5%、承受傷害降低 4%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/e60164c9-4f04-46ed-afe0-0a71e33582f1" width="32" height="32" alt="彈幕IV天賦圖示"> [彈幕IV](#broker_stimm_durability_4)<br>- Barrage IV | <ul><li>使用時恢復最大韌性的 6.25%；藥效期間韌性恢復增加 5%、承受傷害降低 4%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/35bab219-731c-41ac-80a8-27af4a02f1c2" width="32" height="32" alt="坦克天賦圖示"> [坦克](#broker_stimm_durability_5a)<br>- Tank | <ul><li>韌性恢復量額外增加 30%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/f238889d-d7aa-45e0-8d16-9726389c7fe8" width="32" height="32" alt="恢復天賦圖示"> [恢復](#broker_stimm_durability_5b)<br>- Regain | <ul><li>藥效期間每秒恢復最大韌性的 5%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/b6316199-6d72-4db3-8be6-a74600e54b2f" width="32" height="32" alt="抗焦慮藥I天賦圖示"> [抗焦慮藥I](#broker_stimm_concentration_1)<br>- Kalma I | <ul><li>戰鬥技能恢復速度增加 6.25%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/8401a77b-6cc2-4b03-a0de-dd67296d008d" width="32" height="32" alt="抗焦慮藥II天賦圖示"> [抗焦慮藥II](#broker_stimm_concentration_2)<br>- Kalma II | <ul><li>戰鬥技能恢復速度增加 6.25%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/dc414369-8882-423d-9c5f-ba6a04583163" width="32" height="32" alt="抗焦慮藥III天賦圖示"> [抗焦慮藥III](#broker_stimm_concentration_3)<br>- Kalma III | <ul><li>戰鬥技能恢復速度增加 6.25%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/d4e178b4-1b2e-48cc-8221-35d5c515e8cb" width="32" height="32" alt="抗焦慮藥IV天賦圖示"> [抗焦慮藥IV](#broker_stimm_concentration_4)<br>- Kalma IV | <ul><li>戰鬥技能恢復速度增加 6.25%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/f86ba1f1-5859-40ce-b662-6f9e54e9afe5" width="32" height="32" alt="抗焦慮藥V天賦圖示"> [抗焦慮藥V](#broker_stimm_concentration_5a)<br>- Kalma V | <ul><li>戰鬥技能恢復速度增加 25%。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/77f46379-3f89-4c81-8240-a0dc288fb868" width="32" height="32" alt="狂熱天賦圖示"> [狂熱](#broker_stimm_concentration_5b)<br>- Hypex | <ul><li>藥效期間近戰擊殺後，戰鬥技能恢復速度額外增加 56.25%，持續 1 秒。</li></ul> | 興奮劑配方 |
| <img src="https://github.com/user-attachments/assets/9707e711-9e62-4b88-9102-fe83ffa29cda" width="32" height="32" alt="集中藥天賦圖示"> [集中藥](#broker_stimm_concentration_5c)<br>- Klay | <ul><li>藥效期間遠程擊殺後，戰鬥技能恢復速度額外增加 56.25%，持續 1 秒。</li></ul> | 興奮劑配方 |

---

## 閃擊

<a id="broker_blitz_flash_grenade_improved"></a>
### 擊暈(Blackout)

<img src="https://github.com/user-attachments/assets/fd2156cb-6e65-4214-bd01-ab0b28665714" width="72" height="72" alt="擊暈天賦圖示">

- **控制範圍**：快速投擲手雷，爆炸影響半徑 3.5 公尺；2.25 公尺內的踉蹌威力較高。爆炸本身不造成生命傷害，主要用於打斷及擊退敵人。

- **補充方式**：最多攜帶 5 顆。未滿容量時，每累計 20 次在 12.5 公尺內的擊殺，恢復 1 顆；近戰及遠程擊殺都可累計。攜帶已滿時不增加擊殺進度。

- **補充算例**：目前有 2 顆、已累計 19 次，下一次符合距離的擊殺後變成 3 顆，進度歸零。搭配額外彈藥袋時，上限為 5 + 1 = 6 顆。

- **毒針手槍例外**：先用毒針手槍命中並追蹤的敵人，若在近距離死於毒素，也可計入；一般遠程離毒殺不能直接套用此例外。

#### 繁中原文勘誤

- 繁中原文將「近距離擊殺」寫成「近戰擊殺」。12.5 公尺內的遠程擊殺也能累計手雷恢復進度。

[詳細資料](broker_blitz_flash_grenade_improved.md) · [返回目錄](#talent-index)

---

<a id="broker_blitz_missile_launcher"></a>
### 炸彈使者(Boom Bringer)

<img src="https://github.com/user-attachments/assets/3b4df232-3b49-4f84-98c0-2b3e8828f917" width="72" height="72" alt="炸彈使者天賦圖示">

- **攻擊方式**：飛彈直接命中與爆炸分別計算傷害；爆炸內圈半徑 4 公尺、整體半徑 7 公尺，外圈傷害較低且會衰減。

- **傷害算例**：以未受其他修正、未衰減的內圈爆炸計，基礎傷害為 20 × (500 × 2800 ÷ 10000) = 2800。打到無甲部位套 1.25 倍為 3500，甲殼部位套 2.4 倍為 6720。這些數字不含飛彈直擊、部位、敵人特殊減傷或其他天賦。

- **彈藥方式**：最多攜帶 2 枚，額外彈藥袋提高至 3 枚。取代原本擊暈手雷後，不再靠每 20 次近距離擊殺補充。

[詳細資料](broker_blitz_missile_launcher.md) · [返回目錄](#talent-index)

---

<a id="broker_blitz_tox_grenade"></a>
### 化學手榴彈(Chem Grenade)

<img src="https://github.com/user-attachments/assets/7d3c5999-8823-4b54-9204-6e22637bc851" width="72" height="72" alt="化學手榴彈天賦圖示">

- **毒區效果**：爆炸後留下持續 15 秒的毒區，實際形狀依地形擴散；站在其中的敵人每 0.35 秒增加 1 層同類毒素，由毒區最多補到 6 層。

- **毒傷算例**：6 層毒素每次結算的輸入威力為 500 × 6 ÷ 30 = 100，再依毒素曲線與護甲計算。其他手段可把相同毒素疊至更高，不能把 6 層當作所有毒素的總上限。

- **附帶效果**：毒區會使敵人更容易被近戰順劈穿過，並附加死亡爆炸。死亡爆炸標記持續 12 秒，在標記有效時死亡會引爆，範圍 2.5 公尺；因此離開毒區後仍可能引爆。

- **彈藥方式**：最多 2 顆，搭配額外彈藥袋變成 3 顆；不保留擊暈手雷的近距離擊殺補充。

[詳細資料](broker_blitz_tox_grenade.md) · [返回目錄](#talent-index)

---


---

## 光環

<a id="broker_aura_gunslinger_improved"></a>
### 精進神射手(Gunslinger Improved)

<img src="https://github.com/user-attachments/assets/3927d1d0-9e15-4b96-9a91-00f0503e338c" width="72" height="72" alt="精進神射手天賦圖示">

- **分享方式**：你或具有此光環的協同隊友撿取彈藥時，向該撿取者協同中的成員分享補給；每人依自己的武器容量換算，不是把撿取者拿到的發數平均分配。

- **小彈藥算例**：小彈藥原補 15% 備用彈藥，分享量為個人備用彈藥上限 × 15% × 10%，無條件進位。上限 200 的隊友得到 3 發，上限 100 的隊友得到 ⌈1.5⌉ = 2 發。

- **大彈藥與彈藥箱**：大彈藥原補 50%，上限 200 時分享 10 發。一般部署彈藥箱則以「備彈上限 + 彈匣容量」的 10% 計；例如 200 + 30，分享 23 發，仍受實際缺額限制。

- **重複套用限制**：相同光環不因多名玩家而重複套用；此改良版的 10% 取代基本版 5%，分享出來的彈藥也不會再次觸發連鎖分享。

[詳細資料](broker_aura_gunslinger_improved.md) · [返回目錄](#talent-index)

---

<a id="broker_coherency_melee_damage"></a>
### 惡棍(Ruffian)

<img src="https://github.com/user-attachments/assets/7fc85ba0-f7e6-4aba-a966-638511f2c713" width="72" height="72" alt="惡棍天賦圖示">

- **作用範圍**：你與協同中的隊友取得 10% 近戰增傷；同名光環只生效一份。

- **傷害算例**：基礎 100 點近戰傷害變成 110；同階段另有 25% 時為 100 × (1 + 25% + 10%) = 135 點。

[詳細資料](broker_coherency_melee_damage.md) · [返回目錄](#talent-index)

---

<a id="broker_coherency_anarchist"></a>
### 無政府主義者(Anarchist)

<img src="https://github.com/user-attachments/assets/213537c0-9bdc-49a7-9b60-67aaeb58f395" width="72" height="72" alt="無政府主義者天賦圖示">

- **作用範圍**：你與協同中的隊友取得額外爆擊率；同名光環不重複套用。

- **機率算例**：原本 10% 變成 10% + 5% = 15%，原本 25% 則變成 30%。

[詳細資料](broker_coherency_anarchist.md) · [返回目錄](#talent-index)

---


---

## 能力

<a id="broker_ability_focus_improved"></a>
### 強化亡命之徒(Enhanced Desperado)

<img src="https://github.com/user-attachments/assets/785f7b2c-0591-4cc4-b928-31c26b07d0f7" width="72" height="72" alt="強化亡命之徒天賦圖示">

- **啟動與防護**：立即切換遠程武器並裝滿彈匣，進入 10 秒專注。期間視為正在閃避遠程攻擊，衝刺不消耗耐力，並免疫壓制。

- **衝刺算例**：衝刺速度增加 20%；原本 5 公尺／秒變成 5 × 1.2 = 6 公尺／秒。

- **標記與延長**：標示 12.5 公尺內符合條件的敵人。近距離遠程擊殺可延長專注，初始每次 1 秒；啟動滿 20 秒後每次降為 0.2 秒，滿 40 秒後降為 0.04 秒。每次延長後的剩餘時間最多回到 10 秒。

- **針槍毒素例外**：狀態期間以針槍遠程命中並追蹤到的敵人，即使最後由毒素傷害擊殺，也可能延長狀態；還須符合近距離死亡條件。其他毒素擊殺不會一概觸發。

- **彈藥與冷卻**：狀態期間重新裝填不扣彈藥儲備；基礎冷卻 45 秒的自然充能在狀態結束後才開始恢復，延長的狀態時間也會延後冷卻恢復。 結束時，會依剩餘備用彈藥重新結算彈匣；狀態內的免費子彈不會整匣保留。

[詳細資料](broker_ability_focus_improved.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_stimm_field"></a>
### 化學性依賴(Stimm Supply)

<img src="https://github.com/user-attachments/assets/70eb922d-eda2-4ed7-b945-ed3b305b10a6" width="72" height="72" alt="化學性依賴天賦圖示">

- **部署與範圍**：把改裝醫療包放在地面，形成半徑 3 公尺的氣體場域，基本持續 20 秒。你和吸入氣體的隊友獲得場域效果。

- **治療腐敗**：每 0.25 秒最多移除 0.5 點腐敗，按 20 ÷ 0.25 × 0.5 計算，標示總量為最多 40 點；場域效果期間腐敗承受量為 0。 無法清除已吞掉完整生命區段的腐敗；離開場域後，基本效果會移除。

- **分享興奮劑**：若攜帶興奮劑，場域會把相應興奮劑效果提供給範圍內隊友；部署場域會消耗或移除相應興奮劑使用次數。

- **冷卻**：基礎冷卻 60 秒；場域工作期間暫停自然充能，場域結束後才開始恢復。

[詳細資料](broker_ability_stimm_field.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_punk_rage"></a>
### 橫衝直撞！(Rampage!)

<img src="https://github.com/user-attachments/assets/ae8bc68a-7d1b-4ee7-8691-bed95ed8069d" width="72" height="72" alt="橫衝直撞！天賦圖示">

- **啟動效果**：啟動時恢復全部韌性並切換到近戰武器，進入基本 10 秒的怒火狀態。

- **近戰威力與攻擊速度**：獲得加算 +35% 近戰威力等級及 +20% 近戰攻擊速度。威力等級會影響攻擊輸出與衝擊，不能直接當成同百分比的傷害；攻擊速度 +20% 只計此效果時，原本 1 秒的動作約為 1 ÷ 1.20 = 0.83 秒。 例如威力 500 變成 500 × 1.35 = 675，再套用武器傷害與踉蹌曲線。

- **承受傷害**：承受傷害乘以 0.75；只計此效果時，100 點來襲傷害變為 100 × 0.75 = 75 點，也就是減少 25%。

- **狀態延長**：每次近戰命中初始延長 0.3 秒；自啟動起經過 20 秒後，每跨 20 秒每次延長量再減半，例如第 20 至 40 秒為 0.15 秒、第 40 至 60 秒為 0.075 秒。這是逐次延長量遞減，不是 20 秒的總時長上限。

- **免疫與冷卻**：怒火期間免疫眩暈與減速；狀態結束後，才開始恢復基礎 30 秒冷卻。

[詳細資料](broker_ability_punk_rage.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_punk_rage_sub_2"></a>
### 熔爐怒吼(Pulverising Strikes)

<img src="https://github.com/user-attachments/assets/1a4c2d3b-dfba-4840-a85d-c8d5390e3a42" width="72" height="72" alt="熔爐怒吼天賦圖示">

- **順劈算例**：怒火期間，傷害與踉蹌的順劈容量各增加 50%；原本容量 10 變成 15。實際能穿過幾名敵人，仍取決於敵人質量及武器限制。

- **逐漸累積威力**：怒火每持續約 1 秒增加一層近戰威力，每層 +2.5%，最多 10 層，總計最多 +25%。

- **與怒火合併**：若已取得怒火本身的 +35% 近戰威力等級，只計這兩項且累積到上限時為 35% + (10 × 2.5%) = 60% 威力等級修正；這不是最終傷害 +60%。 例如威力 500 變成 500 × 1.6 = 800。

[詳細資料](broker_ability_punk_rage_sub_2.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_punk_rage_sub_1"></a>
### 凝聚殺意(Channelled Aggression)

<img src="https://github.com/user-attachments/assets/db7fee2b-9e46-49f1-a0ac-28cd6cea424f" width="72" height="72" alt="凝聚殺意天賦圖示">

- **生效攻擊**：怒火狀態期間，近戰重攻擊附加 +25% 撕裂修正。

- **效果解讀**：撕裂影響攻擊穿透護甲時使用的計算；它不是傷害乘以 1.25，也不會套用到輕攻擊或遠程攻擊。

- **護甲算例**：假設原本護甲傷害倍率為 0.5，且該護甲完整接受這項撕裂，會變成 0.5 + 0.25 = 0.75；同一筆護甲前 100 點傷害由 50 變成 75。不同護甲與武器原有穿透力，會改變實際增幅。

[詳細資料](broker_ability_punk_rage_sub_1.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_punk_rage_sub_3"></a>
### 沸騰之血(Forge's Bellow)

<img src="https://github.com/user-attachments/assets/c23bede2-8365-4a28-9fcf-0aa91847923a" width="72" height="72" alt="沸騰之血天賦圖示">

- **觸發時機**：怒火啟動時吼一次；怒火狀態結束時，只要你仍存活，就再吼一次。

- **範圍與踉蹌**：每次怒吼作用半徑 4.5 公尺；怒吼會使範圍內敵人踉蹌。

- **敵人減速**：每次怒吼使範圍內敵人的近戰攻擊速度降低 50%，持續 5 秒。以原本 1 秒的近戰攻擊間隔估算，速度剩一半後間隔約為 1 ÷ 0.5 = 2 秒；這是比原來長 100%，不是長 50%。遠程攻擊速度不在這個修正欄位內。

[詳細資料](broker_ability_punk_rage_sub_3.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_punk_rage_sub_4"></a>
### 碎骨打擊(Boiling Blood)

<img src="https://github.com/user-attachments/assets/040166f5-e6b1-4f43-ae17-2c21b8fd8014" width="72" height="72" alt="碎骨打擊天賦圖示">

- **特殊敵人延長**：近戰命中精英、專家、怪物或隊長類敵人，怒火延長 1 秒。此類命中每次延長量到 30 秒後才開始遞減；30 秒後為 0.5 秒、60 秒後為 0.25 秒。

- **一般敵人延長**：普通敵人命中仍沿用基礎每次 0.3 秒，並在 20 秒後開始遞減。30 秒門檻不會一併改動普通敵人的延長規則。

[詳細資料](broker_ability_punk_rage_sub_4.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_focus_sub_3"></a>
### 專注凝神(Focused Resolve)

<img src="https://github.com/user-attachments/assets/74d4304b-23f7-4666-879b-62c727596b69" width="72" height="72" alt="專注凝神天賦圖示">

- **恢復量**：專注期間，近距離遠程擊殺一般敵人恢復 0.5 秒技能冷卻；擊殺精英或專家恢復 1 秒。

- **恢復上限**：每次專注最多恢復 5 秒，等於最多 10 次一般擊殺或 5 次精英／專家擊殺；混合擊殺累計到 5 秒即停止恢復。

- **冷卻算例**：技能每秒自然充能 1，基礎冷卻 45 秒；達到 5 秒恢復上限後，專注結束再自然充能約需 45−5=40 秒。專注期間冷卻自然充能暫停，但擊殺恢復會直接補入充能。

- **針槍毒素例外**：在專注期間被指定針槍遠程命中追蹤的敵人，也可能以近距離毒素死亡觸發恢復；一般中毒死亡不會一概觸發。

[詳細資料](broker_ability_focus_sub_3.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_focus_sub_2"></a>
### 精準獵殺(Pick Your Targets)

<img src="https://github.com/user-attachments/assets/732d190b-365f-4815-9d94-bc136cafd423" width="72" height="72" alt="精準獵殺天賦圖示">

- **遠程撕裂**：專注狀態期間，遠程攻擊獲得 +15% 撕裂修正；這影響護甲穿透，不是直接增加 15% 傷害。

- **擊殺疊層**：專注期間的近距離遠程擊殺增加 1 層，每層 3% 遠程傷害、最多 5 層。再次擊殺重新計時；停止擊殺後每 3 秒掉 1 層，專注結束則全部移除。

- **觸發範圍**：普通觸發要求在 12.5 公尺內遠程擊殺；先前用毒針手槍命中追蹤的敵人，也可在近距離毒素死亡時觸發。

- **傷害算例**：只計滿 5 層時，基礎 100 點遠程傷害 × (1 + 5 × 0.03) = 115 點；其他遠程傷害修正會與此加算合併。

[詳細資料](broker_ability_focus_sub_2.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_stimm_field_sub_3"></a>
### 熟練部署(Practiced Deployment)

<img src="https://github.com/user-attachments/assets/c0ce43c8-1324-4c26-8319-c1f12c28fbb3" width="72" height="72" alt="熟練部署天賦圖示">

- **觸發時機**：新取得可用的興奮劑，或專用興奮劑恢復 1 次充能時，補滿化學性依賴的一次技能充能。

- **充能上限**：此能力最多只有 1 次充能；已經可用時不會存下額外充能。若興奮劑已在欄位中，取得本天賦當下不會因既有物品立即觸發，須等之後新增可用次數。

- **時間算例**：技能還需 40 秒冷卻時觸發，即可直接再次使用；效果約在半秒內觸發。

[詳細資料](broker_ability_stimm_field_sub_3.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_stimm_field_sub_1"></a>
### 速效型興奮劑(Fast Acting Stimms)

<img src="https://github.com/user-attachments/assets/4ea2874c-338f-42ec-95cb-9f4c08e64794" width="72" height="72" alt="速效型興奮劑天賦圖示">

- **場域時間**：場域本身只存在 5 秒；離開區域時，身上已取得的效果仍可持續 15 秒。若留在場域直到它結束，場域消失後效果最多再維持 15 秒。

- **治療與興奮劑效果**：延續的是已取得的場域效果，包括腐敗治療與腐敗免疫，以及當次場域分享的興奮劑效果。

- **冷卻**：場域結束後開始 60 秒自然冷卻，雖然部分隊友的效果仍可能延續 15 秒。只計這段能力時間，從部署到下一次自然充能約為 5+60=65 秒。

[詳細資料](broker_ability_stimm_field_sub_1.md) · [返回目錄](#talent-index)

---

<a id="broker_ability_stimm_field_sub_2"></a>
### 毒性陷阱(Booby Trap)

<img src="https://github.com/user-attachments/assets/c3cdd1a9-e1eb-4e29-9a5e-6bae44c280a4" width="72" height="72" alt="毒性陷阱天賦圖示">

- **觸發時機**：場域持續時間結束時爆炸；基本場域在 20 秒後結束。若同時套用縮短場域的效果，則以實際場域持續時間結束時觸發。

- **爆炸效果**：半徑 3 公尺的破片爆炸命中並造成傷害的敵人會獲得 7 層毒素。只計一次爆炸，不是場域每次脈衝都施加7層。

- **冷卻**：場域結束並爆炸後，60 秒自然冷卻開始恢復；爆炸本身不延長冷卻暫停。

- **傷害算例**：不計其他加成與特殊減傷，距離爆心 0.5 公尺內的無護甲目標受到 20 × 500 × 300 ÷ 10000 = 300 點爆炸傷害；對應護甲係數為 0.25 時，則為 300 × 0.25 = 75 點。後續毒素傷害另外結算。

[詳細資料](broker_ability_stimm_field_sub_2.md) · [返回目錄](#talent-index)

---


---

## 鑰石

<a id="broker_passive_improved_dodges"></a>
### 靈巧(Nimble)

<img src="https://github.com/user-attachments/assets/4575cb9c-10e2-489c-8b4f-0b8f4eda154d" width="72" height="72" alt="靈巧天賦圖示">

- **閃避速度**：閃避移動速度增加 25%；同一時刻原本 4 公尺／秒時，變成 4 × 1.25 = 5 公尺／秒。實際動作時間仍依整條速度曲線計算。

- **閃避判定**：閃避結束後，近戰及擒抱攻擊仍將你視為閃避中的時間，由 0.25 秒延長至 0.25 + 0.15 = 0.4 秒；遠程則額外保留 0.15 秒。是否能避開攻擊，仍取決於該攻擊的判定方式。

- **適用範圍**：加成改變閃避期間的位移速度與攻擊系統判定，不增加連續閃避次數或閃避冷卻恢復速度。

[詳細資料](broker_passive_improved_dodges.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie"></a>
### 腎上腺素狂暴(Adrenaline Frenzy)

<img src="https://github.com/user-attachments/assets/2b18473f-9818-4d07-98ab-b4c7995dbf8d" width="72" height="72" alt="腎上腺素狂暴天賦圖示">

- **觸發**：每次近戰命中獲得 1 層；暴擊在這 1 層之外再加 1 層，所以近戰爆擊一次共得 2 層。

- **層數與衰退**：最多 30 層。每次加層會重設 2 秒計時；若期間沒再加層，先失去 1 層，再從該次移除起重設計時，之後每 2 秒再失去 1 層。

- **達上限**：第 30 層觸發狂暴，腎上腺素堆疊清除。狂暴持續 10 秒，重新觸發時會重新計時。

- **狂暴速度**：近戰攻速加法倍率從 1 變成 1.1；原本 1 秒的受影響動作約為 1 ÷ 1.1 = 0.91 秒。

- **狂暴傷害**：近戰傷害 +25% 屬加法傷害修正；單計此項，基礎 100 點成為 125 點。

[詳細資料](broker_keystone_adrenaline_junkie.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_vultures_mark_on_kill"></a>
### 兀鷲印記(Vulture's Mark)

<img src="https://github.com/user-attachments/assets/6cc42ba2-04c8-4a98-ae3e-5341b777ccdd" width="72" height="72" alt="兀鷲印記天賦圖示">

- **取得印記**：以遠程攻擊擊殺精英或專家敵人，取得 1 層，持續 8 秒；再次取得會增加層數並重設共享計時，最多 3 層。沒有新層時，最後一次取得後 8 秒印記全數消失。

- **每層加成**：每層增加 5% 遠程傷害、5 個百分點遠程爆擊率與 5% 移動速度。3 層時分別為 +15%、+15 個百分點、+15%。

- **滿層回韌性**：3 層期間，每次再以遠程攻擊擊殺精英或專家，恢復自己與協同範圍內的隊友最大韌性的 15%；實際回補不超過各自韌性缺額。

- **武器例外**：以毒針手槍造成近距離 毒素擊殺取得印記：需先以遠程武器槽的毒針手槍 命中精英／專家並在其毒素效果仍有效時，由毒素在近距離造成死亡。

- **傷害算例**：無其他修正時，基礎遠程傷害 100 在 3 層下為 100×(1+3×0.05)=115；同階段已有 +20% 時為 100×(1+0.20+0.15)=135。

- **回韌性算例**：最大韌性 100 且缺額至少 15 時，滿層遠程精英／專家擊殺回補 100×0.15=15 點。

[詳細資料](broker_keystone_vultures_mark_on_kill.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_chemical_dependency"></a>
### 化學性依賴(Chemical Dependency)

<img src="https://github.com/user-attachments/assets/9b42d72f-2429-446a-bf75-d5d87db98b36" width="72" height="72" alt="化學性依賴天賦圖示">

- **觸發方式**：每次使用興奮劑取得 1 層；首次接受帶有興奮劑的化學性依賴場域效果，也會觸發。

- **層數**：最多 3 層。每層增加 10% 戰鬥技能資源回充倍率，3 層時回充倍率為 1+3×0.10=1.30，即比基礎回充快 30%。

- **時間**：基本每層持續 90 秒；新層會重設共享計時。90 秒內沒有新層時失去 1 層並重設計時，之後每 90 秒再失去 1 層。

- **回充算例**：若原本需要 60 秒完成同一段戰鬥技能回充，且回充不中斷、沒有其他修正，3 層後約需 60÷1.30=46.15 秒。

[詳細資料](broker_keystone_chemical_dependency.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_chemical_dependency_sub_1"></a>
### 化學強化(Chem Enhanced)

<img src="https://github.com/user-attachments/assets/b7fff291-d5f3-4213-bfef-8b28b8065889" width="72" height="72" alt="化學強化天賦圖示">

- **每層加成**：每層增加 5 個百分點的通用爆擊率；該值加入近戰與遠程爆擊率計算。

- **最大層數算例**：巢都渣滓 基礎爆擊率 10%，3 層加成 3×5%=15 個百分點，未計武器額外機率時為 10%+15%=25%。

- **暴擊效果**：此升級提高爆擊率，不提高暴擊傷害；依賴層仍按核心規則每 90 秒逐層衰退，使用興奮劑會重設計時。

[詳細資料](broker_keystone_chemical_dependency_sub_1.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_chemical_dependency_sub_2"></a>
### 化學增強(Chem Fortified)

<img src="https://github.com/user-attachments/assets/6c334888-08bb-4567-a6a2-1c4b4750409b" width="72" height="72" alt="化學增強天賦圖示">

- **使用興奮劑**：每次使用時按最大韌性的 50% 回補；最大韌性 100 且至少缺 50 時回補 50 點，若只缺 20 則最多回補 20 點。

- **每層減傷**：每層把承受的韌性傷害乘以 0.95。3 層時為 0.95³=0.8574 倍，即韌性傷害約降低 14.26%，不是 15%。

- **滿層時**：即使依賴層數已達上限，再次使用興奮劑仍能恢復韌性，並重新計時層數時間。

[詳細資料](broker_keystone_chemical_dependency_sub_2.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_chemical_dependency_sub_3"></a>
### 化學藥劑全開(Maxed Out Chems)

<img src="https://github.com/user-attachments/assets/51827890-e735-4220-8959-bf37381e0fc8" width="72" height="72" alt="化學藥劑全開天賦圖示">

- **持續時間與上限**：每層計時改為 60 秒，堆疊上限改為 4 層；相較核心，單次計時減少 30 秒並多 1 層。

- **回充**：每層核心的 +10% 戰鬥技能資源回充仍有效；4 層倍率為 1+4×0.10=1.40。 原本 60 秒的連續冷卻恢復，變成 60 ÷ 1.4 ≈ 42.86 秒。

- **重新計時與衰退**：新使用興奮劑會重設共享計時；若沒有新層，60 秒後失去 1 層，再每 60 秒失去 1 層。達 4 層後再使用不會增加第 5 層，但會重新計時。

[詳細資料](broker_keystone_chemical_dependency_sub_3.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_vultures_mark_aoe_stagger"></a>
### 兀鷲推擊(Vulture's Push)

<img src="https://github.com/user-attachments/assets/a887e60a-cbd4-4d49-8e44-20661f7f2dcb" width="72" height="72" alt="兀鷲推擊天賦圖示">

- **觸發**：遠程攻擊擊殺精英或專家時觸發；不要求先有兀鷲印記層數。

- **範圍與效果**：推開自己周圍 3 公尺內的敵人，造成踉蹌，不造成直接傷害。

- **目標差異**：實際能否推動敵人仍取決於其踉蹌抗性、護甲與當下狀態，無法保證中斷所有敵人的動作。

[詳細資料](broker_keystone_vultures_mark_aoe_stagger.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_vultures_mark_increased_duration"></a>
### 堅毅獵手(Patient Hunter)

<img src="https://github.com/user-attachments/assets/76cdf6df-d713-4085-8b29-fce2c1c64413" width="72" height="72" alt="堅毅獵手天賦圖示">

- **持續時間**：每次取得兀鷲印記後，層數共享的計時為 12 秒，比核心的 8 秒多 4 秒。

- **重新計時**：新的兀鷲印記會增加層數並把共享計時重設為 12 秒；即使已達 3 層，再次符合條件也會重新計時。

- **衰退**：若沒有新印記，12 秒到期時現有印記層數一併消失。

- **時間算例**：第一層在 0 秒取得，第二層在 6 秒取得後，計時重設為 12 秒；若之後無新印記，現有層數在第 18 秒到期。

[詳細資料](broker_keystone_vultures_mark_increased_duration.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_vultures_mark_dodge_on_ranged_crit"></a>
### 兀鷲閃避(Vulture's Dodge)

<img src="https://github.com/user-attachments/assets/00fcee1e-616c-4283-ade2-f67fc6657a7e" width="72" height="72" alt="兀鷲閃避天賦圖示">

- **觸發**：造成遠程暴擊時觸發；一般遠程命中或近戰爆擊不會觸發。

- **效果**：持續 1 秒，即使沒有按下閃避，也會被視為正在閃避近戰與遠程攻擊。仍須依各種攻擊的閃避規則判定結果，並非所有傷害都無效。

- **重新計時**：1 秒內再次遠程暴擊會重設 1 秒計時，不會累積多層。

- **適用範圍**：此效果直接改變閃避判定，不增加實際閃避距離或移動速度，也不要求玩家正在做閃避動作。

- **時間算例**：第 0 秒觸發，第 0.6 秒再度遠程暴擊後，效果延續至第 1.6 秒。

[詳細資料](broker_keystone_vultures_mark_dodge_on_ranged_crit.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie_sub_1"></a>
### 腎上腺素刺客(Adrenaline Assassin)

<img src="https://github.com/user-attachments/assets/f2c76ddc-b60e-49ee-9e7c-1d94981a7448" width="72" height="72" alt="腎上腺素刺客天賦圖示">

- **弱點命中**：弱點近戰命中給原本的 1 層，再額外給 2 層，共 3 層。

- **一般命中**：非弱點近戰命中不給層；暴擊檢查仍獨立執行，所以非弱點近戰爆擊仍額外得到 1 層。

- **弱點暴擊**：弱點命中的 3 層再加暴擊額外 1 層，共 4 層；仍受核心的 30 層上限及層數計時規則限制。

[詳細資料](broker_keystone_adrenaline_junkie_sub_1.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie_sub_3"></a>
### 振奮怒火(Stoked Rage)

<img src="https://github.com/user-attachments/assets/72d38f70-b406-41ca-a04b-2bcdadfec50c" width="72" height="72" alt="振奮怒火天賦圖示">

- **持續時間**：觸發狂暴後持續 20 秒，比核心的 10 秒多 10 秒。

- **重新計時**：重新達到 30 層再觸發狂暴時，狂暴仍只有一份；新觸發會把持續時間重設為 20 秒。

- **不變部分**：此升級不改變腎上腺素的 2 秒堆疊計時、30 層上限或狂暴的攻速與傷害倍率。

[詳細資料](broker_keystone_adrenaline_junkie_sub_3.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie_sub_5"></a>
### 腎上腺素突破(Adrenaline Unbound)

<img src="https://github.com/user-attachments/assets/49a6640b-2259-4b1b-9fd1-634da02747ce" width="72" height="72" alt="腎上腺素突破天賦圖示">

- **恢復量**：每秒恢復最大韌性的 5%；最大韌性 100 時，每次恢復 為 100 × 0.05 = 5 點。

- **恢復上限**：恢復量不超過目前韌性缺額；韌性已滿時，該次恢復 不會增加韌性。

- **計時**：只有狂暴期間才會恢復；首次恢復 可在 狂暴開始時立即執行，之後按 1 秒間隔。

[詳細資料](broker_keystone_adrenaline_junkie_sub_5.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie_sub_4"></a>
### 失控攻擊(Uncontrolled Aggression)

<img src="https://github.com/user-attachments/assets/2b1aa9f6-20e2-4d38-b2fb-6af765a426ca" width="72" height="72" alt="失控攻擊天賦圖示">

- **層數時間**：獲得腎上腺素層後，計時為 4 秒；新層會重設共享計時。

- **衰退**：4 秒內沒有新層時，先失去 1 層並重新計時；若仍沒有新層，之後每 4 秒再失去 1 層。

- **上限觸發**：仍以 30 層觸發狂暴；到達上限時核心會觸發狂暴並清除腎上腺素層。

[詳細資料](broker_keystone_adrenaline_junkie_sub_4.md) · [返回目錄](#talent-index)

---

<a id="broker_keystone_adrenaline_junkie_sub_2"></a>
### 腎上腺素懲戒者(Adrenaline Smiter)

<img src="https://github.com/user-attachments/assets/29f93050-b0a8-48ca-88fe-2e40d9769a99" width="72" height="72" alt="腎上腺素懲戒者天賦圖示">

- **觸發**：近戰擊殺一般敵人時，核心命中層 1 層加此升級 4 層，共 5 層；若是近戰爆擊擊殺，再加核心暴擊層，共 6 層。

- **精英擊殺**：精英擊殺額外再給 10 層，因此一般精英擊殺共 15 層，精英暴擊擊殺共 16 層。

- **非擊殺命中**：近戰攻擊沒有擊殺目標時不獲得層數，即使該擊是暴擊也不會觸發核心的暴擊額外層。

- **精英判定**：額外 10 層只看精英分類；只有專家分類的敵人不算此精英加成。

[詳細資料](broker_keystone_adrenaline_junkie_sub_2.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_longer_dodges"></a>
### 過街老鼠(Alley Rat)

<img src="https://github.com/user-attachments/assets/8f760271-d6e2-4a80-88ef-01c7007941dc" width="72" height="72" alt="過街老鼠天賦圖示">

- **距離加成**：閃避距離增加 50%。

- **距離算例**：以職業基礎 2.5 公尺，且沒有武器修正或連續閃避衰減計算，變成 2.5 × 1.5 = 3.75 公尺。

- **實際距離**：武器的閃避設定、連續閃避衰減，以及攻擊狀態仍會影響最終移動距離。

[詳細資料](broker_passive_longer_dodges.md) · [返回目錄](#talent-index)

---


---

## 技能

<a id="broker_passive_close_range_damage_on_dodge"></a>
### 快速且致命(Quick and Deadly)

<img src="https://github.com/user-attachments/assets/b19ca7bc-4348-455c-ae43-c3cf7a8b0852" width="72" height="72" alt="快速且致命天賦圖示">

- **觸發與持續**：成功閃避後，12.5 公尺內的傷害增加 15%，持續 3 秒；再次觸發重設時間，不累加幅度。

- **距離算例**：加成從 12.5 公尺以外逐步降低，到 30 公尺歸零。距離 16.875 公尺時，比例為 √((16.875 − 12.5) ÷ 17.5) = 0.5，加成剩 15% × (1 − 0.5) = 7.5%；基礎 100 點變成 107.5 點。

- **近距離算例**：單計本效果，基礎 100 點變成 115；已有同階段 25% 增傷時為 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](broker_passive_close_range_damage_on_dodge.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_first_target_damage"></a>
### 特提恩是迎賓(A Tertium Welcome)

<img src="https://github.com/user-attachments/assets/e5936fa1-2583-4575-a968-aa37e1096a16" width="72" height="72" alt="特提恩是迎賓天賦圖示">

- **作用對象**：每次近戰攻擊的第一個命中目標，傷害增加 15%；同次順劈後續敵人不取得這項加成。

- **傷害算例**：第一個目標的基礎傷害若為 100，單計此效果變成 100 × 1.15 = 115；已有同階段 25% 增傷則為 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](broker_passive_first_target_damage.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_close_ranged_damage"></a>
### 打你的臉(In Your Face)

<img src="https://github.com/user-attachments/assets/caab00a6-dc0b-49ff-9d76-836ed680d22f" width="72" height="72" alt="打你的臉天賦圖示">

- **距離加成**：手持遠程武器時，對 12.5 公尺內目標增傷 25%；距離越遠加成越低，30 公尺及以上維持 10%。

- **傷害算例**：16.875 公尺時，衰減比例為 √((16.875 − 12.5) ÷ 17.5) = 0.5，加成為 25% + (10% − 25%) × 0.5 = 17.5%。基礎 100 點變成 117.5；同階段已有 25% 增傷時，則為 100 × (1 + 25% + 17.5%) = 142.5 點。

[詳細資料](broker_passive_close_ranged_damage.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_restore_toughness_on_weakspot_kill"></a>
### 精準暴力(Precision Violence)

<img src="https://github.com/user-attachments/assets/596d2151-a0bd-4b71-9305-805caed18fcc" width="72" height="72" alt="精準暴力天賦圖示">

- **恢復量**：近戰一般命中恢復最大韌性的 4%；暴擊或弱點命中改為 8%，同時暴擊且命中弱點為 12%。不要求擊殺，特殊處決的直接斬殺不觸發。

- **同次揮擊**：後續目標只有在恢復比例高於本次已記錄比例時才再觸發；相同比例不會逐目標重複恢復。

- **恢復算例**：最大韌性 100，依序命中一般目標及弱點，會先恢復 4 點、再恢復 8 點，合計 12 點；若同次還有暴擊弱點命中，則可再恢復 12 點。每次仍以缺額為限，例如只缺 5 點時最多補 5 點。

[詳細資料](broker_passive_restore_toughness_on_weakspot_kill.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_restore_toughness_on_close_ranged_kill"></a>
### 特提恩之聲(Voice of Tertium)

<img src="https://github.com/user-attachments/assets/04100618-a87c-416c-8e22-3c1eb01aa7ab" width="72" height="72" alt="特提恩之聲天賦圖示">

- **擊殺條件**：以遠程攻擊擊殺 12.5 公尺內的敵人，恢復最大韌性的 8%；精英或專家敵人改為 15%。

- **恢復算例**：最大韌性 100 時，一般敵人恢復 8 點、精英或專家恢復 15 點；目前已有 95 點時，兩者實際都只補 5 點。

[詳細資料](broker_passive_restore_toughness_on_close_ranged_kill.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_ninja_grants_crit_chance"></a>
### 翩翩蝶舞(Float Like a Butterfly)

<img src="https://github.com/user-attachments/assets/e4a8f21b-75d8-45dd-8cf1-84a42d41578f" width="72" height="72" alt="翩翩蝶舞天賦圖示">

- **觸發與重新計時**：成功閃避或完美格擋後，爆擊率增加 20 個百分點，持續 3 秒；再次觸發重設時間，不累加。

- **機率算例**：原本 10% 爆擊率變成 10% + 20% = 30%；原本 25% 則變成 45%。

[詳細資料](broker_passive_ninja_grants_crit_chance.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_reload_speed_on_close_kill"></a>
### 快速裝填(Speedloader)

<img src="https://github.com/user-attachments/assets/139c3b2c-0d64-4a99-89fb-a19e5ec4cc6e" width="72" height="72" alt="快速裝填天賦圖示">

- **觸發與重新計時**：遠程擊殺 12.5 公尺內的敵人，換彈速度提高 30%，持續 8 秒；再次觸發重新計時，不累加幅度。

- **時間算例**：原本可加速的換彈動作需 2 秒，單計此效果變成 2 ÷ 1.3 ≈ 1.54 秒；已有 20% 同階段換彈速度時，則為 2 ÷ (1 + 20% + 30%) ≈ 1.33 秒。

- **毒針手槍**：先用毒針手槍射中存活敵人，該敵人仍受毒素追蹤且在近距離死於毒素時，也可取得加成。

[詳細資料](broker_passive_reload_speed_on_close_kill.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_stun_immunity_on_toughness_broken"></a>
### 能量爆發(Burst of Energy)

<img src="https://github.com/user-attachments/assets/6f9a1e1d-3722-4f74-98ff-a17aadbd2ce4" width="72" height="72" alt="能量爆發天賦圖示">

- **觸發效果**：自身韌性耗盡時，立即恢復最大韌性的 50%，並免疫眩暈 6 秒。

- **恢復與冷卻算例**：最大韌性 100 時，單計本技能由 0 恢復到 50。觸發後先維持 6 秒免暈，再冷卻 10 秒；沒有其他變動時，兩次可觸發時間至少相隔 6 + 10 = 16 秒。

[詳細資料](broker_passive_stun_immunity_on_toughness_broken.md) · [返回目錄](#talent-index)

---

<a id="base_toughness_node_buff_medium_1"></a>
### 韌性增幅(Toughness Boost)

<img src="https://github.com/user-attachments/assets/ad899680-6ea8-486b-976c-e0e875026aa8" width="72" height="72" alt="韌性增幅天賦圖示">

- **增加方式**：最大韌性增加 25 點，與其他固定韌性加成相加，再套用最大韌性的百分比修正。

- **算例**：原本 100 點變成 125 點；若另有 20% 最大韌性加成，則為 (100 + 25) × 1.2 = 150 點。

[詳細資料](base_toughness_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_stamina_on_successful_dodge"></a>
### 恢復姿態(Regained Posture)

<img src="https://github.com/user-attachments/assets/31e809e4-4465-4dde-9719-1f66f8face02" width="72" height="72" alt="恢復姿態天賦圖示">

- **恢復方式**：每次成功閃避，恢復最大耐力的 10%，不超過耐力上限。

- **恢復算例**：最大耐力 5 點時，每次恢復 5 × 10% = 0.5 點；目前為 4.8 點時，實際只恢復 0.2 點。

[詳細資料](broker_passive_stamina_on_successful_dodge.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_dodge_melee_on_slide"></a>
### 奧客(Slippery Customer)

<img src="https://github.com/user-attachments/assets/a1732698-da8a-42ec-8f53-f0a57c964056" width="72" height="72" alt="奧客天賦圖示">

- **運作方式**：滑行期間具有近戰閃避判定，敵人的近戰攻擊會依閃避規則處理；並非直接免疫所有傷害。

- **觸發限制**：開始滑行不等於已成功避開攻擊。需要實際避開符合判定的攻擊，才會觸發成功閃避相關天賦。

[詳細資料](broker_passive_dodge_melee_on_slide.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_replenish_toughness_on_ranged_toughness_damage"></a>
### 沒甚麼，只是擦傷(Tis but a Scratch)

<img src="https://github.com/user-attachments/assets/ba3e0adf-5d95-459d-9ed4-f17e21febd90" width="72" height="72" alt="沒甚麼，只是擦傷天賦圖示">

- **觸發條件**：受到遠程傷害且韌性尚未耗盡時，開始持續恢復韌性。每秒恢復最大韌性的 10%，持續 3 秒。

- **重新計時與中止**：再次觸發重設 3 秒時間，恢復速度不疊加；韌性耗盡時停止。

- **恢復算例**：最大韌性 100 時，每秒恢復 10 點，完整 3 秒共 30 點。若第 2 秒再次觸發，恢復可延長到第 5 秒，合計最多 50 點，仍以缺額為限。

[詳細資料](broker_passive_replenish_toughness_on_ranged_toughness_damage.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_damage_on_reload"></a>
### 狂轟猛射(Unload)

<img src="https://github.com/user-attachments/assets/6849ad32-3ebc-4d11-b980-612b4d23fd94" width="72" height="72" alt="狂轟猛射天賦圖示">

- **運作方式**：換彈補入彈藥時，取得 7 秒增傷。起始增加 2% 遠程傷害，之後每累計消耗相當於彈匣容量 10% 的彈藥，再增加 2%；不足一段不計。

- **重新換彈**：再次換彈會重設持續時間，並把消耗量歸零，從 2% 重新累積。

- **傷害算例**：彈匣容量 100 發，效果內已用 30 發，增傷為 2% + ⌊30 ÷ 10⌋ × 2% = 8%。基礎 100 點變成 108；若同階段已有 25%，則為 100 × (1 + 25% + 8%) = 133 點。

- **上限說明**：消耗相當於完整一個彈匣時為 22%；若有不重設此效果的補彈手段，可以繼續累計，因此 22% 並非固定上限。

[詳細資料](broker_passive_damage_on_reload.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_stamina_grants_atk_speed"></a>
### 堅韌疾速(Swift Endurance)

<img src="https://github.com/user-attachments/assets/13f03cfd-6e09-41fe-920e-ad116f1a1548" width="72" height="72" alt="堅韌疾速天賦圖示">

- **速度加成**：依目前剩餘耐力計算，每完整 1 點增加 2% 近戰攻擊速度；耐力下降時，加成隨之降低。

- **時間算例**：目前耐力 5.8 點，以 5 點計，增加 10% 攻速。原本 1 秒的可加速動作變成 1 ÷ 1.1 ≈ 0.91 秒；不是縮短 10% 至 0.9 秒。

- **上限**：最多計入 30 點目前耐力，提供 60% 攻速；實際可取得的加成仍受你的耐力上限限制。

[詳細資料](broker_passive_stamina_grants_atk_speed.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_ramping_backstabs"></a>
### 加重背刺(Ramping Backstabs)

<img src="https://github.com/user-attachments/assets/d6f72725-01aa-4bc8-aeca-5e76118c1a51" width="72" height="72" alt="加重背刺天賦圖示">

- **累積與移除**：近戰背刺後增加 1 層，每層 10% 近戰威力，最多 5 層；沒有固定倒數。近戰命中非背部目標時，全部清除。

- **威力算例**：5 層共增加 50%。若進入此加成階段的威力為 500，則為 500 × 1.5 = 750；另有同階段 20% 威力時為 500 × (1 + 20% + 50%) = 850。

- **傷害限制**：威力還會經過武器傷害、踉蹌及順劈曲線，不能直接把 50% 威力寫成所有武器最終傷害都提高 50%。

[詳細資料](broker_passive_ramping_backstabs.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_increased_ranged_dodges"></a>
### 移動目標(Moving Target)

<img src="https://github.com/user-attachments/assets/95c8ba8f-bd1f-424f-bee5-435d83d4dfa6" width="72" height="72" alt="移動目標天賦圖示">

- **運作方式**：手持遠程武器時，連續閃避開始衰減前的有效次數增加 1 次；切換近戰武器後不保留。

- **次數算例**：武器原有 3 次有效閃避時，變成 3 + 1 = 4 次。這項加成不增加閃避距離或速度。

[詳細資料](broker_passive_increased_ranged_dodges.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_stimm_cd_on_kill"></a>
### 樣本採集(Sample Collector)

<img src="https://github.com/user-attachments/assets/19fc62d1-22a4-4366-9195-e523695c2a90" width="72" height="72" alt="樣本採集天賦圖示">

- **恢復方式**：興奮劑正在恢復冷卻時，每次擊殺縮短 0.5 秒；擊殺受毒素感染的敵人，改為縮短 1 秒。兩者不相加。

- **冷卻算例**：剩餘 20 秒時，擊殺 4 名一般敵人縮短 4 × 0.5 = 2 秒，剩 18 秒；4 名受毒素感染的敵人則縮短 4 秒，剩 16 秒。

- **限制**：興奮劑恢復暫停期間不生效；已完全恢復時，不能把多餘恢復量存到下一次。

#### 繁中原文勘誤

- 繁中原文把毒素名稱放進「擊殺…名」的人數位置。實際條件是「擊殺受毒素感染的敵人」，每次改縮短 1 秒冷卻。

[詳細資料](broker_passive_stimm_cd_on_kill.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_improved_dodges_at_full_stamina"></a>
### 神經質(Jittery)

<img src="https://github.com/user-attachments/assets/ab7d66da-9caa-4c94-9ddf-279a30441f67" width="72" height="72" alt="神經質天賦圖示">

- **生效條件**：目前耐力達最大值的 75% 時，連續閃避次數的恢復等待時間縮短 40%；低於門檻就失去加成。

- **時間算例**：原本停止連續閃避後需等待 1 秒，變成 1 × (1 − 40%) = 0.6 秒。最大耐力 4 點時，至少保有 4 × 75% = 3 點即可生效。

[詳細資料](broker_passive_improved_dodges_at_full_stamina.md) · [返回目錄](#talent-index)

---

<a id="base_crit_chance_node_buff_low_1"></a>
### 暴擊幾率增幅(Critical Chance Boost)

<img src="https://github.com/user-attachments/assets/f936a91e-7097-49cc-b8f5-88dff18117eb" width="72" height="72" alt="暴擊幾率增幅天賦圖示">

- **機率算例**：原本 10% 爆擊率變成 10% + 5% = 15%；原本 25% 則變成 30%。

[詳細資料](base_crit_chance_node_buff_low_1.md) · [返回目錄](#talent-index)

---

<a id="base_melee_damage_node_buff_medium_1"></a>
### 近戰增幅(Melee Damage Boost)

<img src="https://github.com/user-attachments/assets/fa269ae5-914c-4444-a713-88c4591a79d9" width="72" height="72" alt="近戰增幅天賦圖示">

- **傷害算例**：基礎 100 點近戰傷害變成 110；同階段原有 25% 增傷時為 100 × (1 + 25% + 10%) = 135 點。

[詳細資料](base_melee_damage_node_buff_medium_1.md) · [返回目錄](#talent-index)

---

<a id="base_toxin_power_boost_1"></a>
### 強效毒藥(Potent Tox)

<img src="https://github.com/user-attachments/assets/105c999d-8563-4033-aea2-15b5fc968cc4" width="72" height="72" alt="強效毒藥天賦圖示">

- **運作方式**：提高毒素傷害使用的威力，不增加毒素層數或持續時間。

- **威力算例**：毒素輸入威力 500 時，單計此效果變成 500 × 1.1 = 550，再依毒素傷害曲線和敵人護甲計算；不能直接把每次毒傷都視為固定增加 10%。

[詳細資料](base_toxin_power_boost_1.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_reduce_swap_time"></a>
### 黏黏手(Sticky Hands)

<img src="https://github.com/user-attachments/assets/2dfab969-4eb2-4181-aa52-7dc1c8c93f89" width="72" height="72" alt="黏黏手天賦圖示">

- **切換算例**：可加速的切換動作原需 1 秒，變成 1 ÷ 1.4 ≈ 0.71 秒。

- **射擊控制**：腰射或架槍時，後座力修正為 0.9 倍、準星散佈為 0.7 倍；一般瞄準且未架槍時不取得這兩項加成。

- **散佈算例**：單計此效果，原本 2 度的散佈角變成 2 × 0.7 = 1.4 度。後座力修正影響不穩定度累積與恢復，實際鏡頭位移還取決於武器曲線。

[詳細資料](broker_passive_reduce_swap_time.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_reduced_toughness_damage_during_reload"></a>
### 請求暫停(Calling for a Time Out)

<img src="https://github.com/user-attachments/assets/d28213f3-85a5-4de7-a380-f3799f671cc8" width="72" height="72" alt="請求暫停天賦圖示">

- **持續方式**：開始換彈後生效；離開換彈狀態後再持續 4 秒。重新換彈仍維持同一幅度，不累加減傷。

- **減傷算例**：原本承受 100 點韌性傷害，單計此效果變成 100 × 0.75 = 75 點；若同階段另有 20% 韌性減傷，則為 100 × (1 − 20% − 25%) = 55 點。

- **作用範圍**：只減少韌性受到的傷害，不直接把生命傷害一併減少 25%。

[詳細資料](broker_passive_reduced_toughness_damage_during_reload.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_knockback_on_taking_melee_damage"></a>
### 街頭硬漢(Street Tough)

<img src="https://github.com/user-attachments/assets/069e6733-6d1f-4859-a3a6-829d213fd0a1" width="72" height="72" alt="街頭硬漢天賦圖示">

- **觸發方式**：受到近戰命中時，對周圍 3 公尺內敵人造成擊退，並提高 10% 移動速度，持續 3 秒；使你失去行動能力的敵人所發動的近戰攻擊不觸發。

- **冷卻與算例**：觸發後冷卻 8 秒；單計本效果，移速 5 公尺／秒變成 5 × 1.1 = 5.5 公尺／秒。

- **擊退限制**：震退本身不造成傷害，實際能否打斷敵人仍受敵人的踉蹌抗性及狀態影響。

[詳細資料](broker_passive_knockback_on_taking_melee_damage.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_crit_grants_damage"></a>
### 蓄力殲滅(Channelled Devastation)

<img src="https://github.com/user-attachments/assets/97f78fa5-afd9-4fe0-b24f-fe54147da399" width="72" height="72" alt="蓄力殲滅天賦圖示">

- **計算方式**：依目前爆擊率，每完整 1 個百分點提供 0.5% 近戰傷害；最多計入 30 個百分點，合計 15%。不需要先打出暴擊，也不消耗爆擊率。

- **傷害算例**：爆擊率 12.8%，取 12 段，增傷 12 × 0.5% = 6%；基礎 100 點變成 106。同階段另有 25% 增傷時為 100 × (1 + 25% + 6%) = 131 點。

- **動態變化**：武器、暫時加成或爆擊率改變時，近戰增傷也會更新。

[詳細資料](broker_passive_crit_grants_damage.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_melee_cleave_on_melee_kill"></a>
### 猛烈劈擊(Battering Strikes)

<img src="https://github.com/user-attachments/assets/23850be1-ea33-448c-93dc-409f21216ceb" width="72" height="72" alt="猛烈劈擊天賦圖示">

- **疊層方式**：每次近戰擊殺增加 1 層，每層增加 10% 傷害順劈能力，最多 5 層。再次觸發會重設 5 秒持續時間。

- **順劈算例**：5 層提供 50%。原本可穿過總質量 10 的目標，變成 10 × 1.5 = 15；能命中幾名敵人仍取決於各敵人的質量、護甲及武器限制。

- **效果範圍**：增加傷害順劈容量，不等於每名敵人所受傷害增加 50%，也不直接提高踉蹌順劈容量。

[詳細資料](broker_passive_melee_cleave_on_melee_kill.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_melee_damage_carry_over"></a>
### 超暴力(Hyper-Violence)

<img src="https://github.com/user-attachments/assets/5439d198-0b4c-4a05-ab95-fc67f67398c9" width="72" height="72" alt="超暴力天賦圖示">

- **運作方式**：擊殺敵人時，把超過敵人剩餘生命的傷害取 25%，作為近戰固定加傷，持續 1 秒。特殊直接斬殺不觸發。

- **傷害算例**：造成 300 點傷害、敵人只剩 100 點生命，溢出 200，取得 200 × 25% = 50 點加傷；下一次近戰在此結算階段原為 100 點，變成 150 點。這是固定加傷，不是增加 50%。

- **再次擊殺**：效果期間會先扣除目前加傷，再算新的 25%；只有新值更高才替換並重新計時。已有 50 點加傷、下一次溢出 400 時，新值為 (400 − 50) × 25% = 87.5；若溢出僅 200，新值 37.5 較低，不會替換或重新計時。

[詳細資料](broker_passive_melee_damage_carry_over.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_toxin_infected_enemies_take_increased_damage"></a>
### 劇毒菌株(Virulent Strain)

<img src="https://github.com/user-attachments/assets/90caf35d-4780-4f00-a9cc-636858cd091e" width="72" height="72" alt="劇毒菌株天賦圖示">

- **運作方式**：你對敵人新增毒素或增加毒素層數時，使其承受的各來源傷害增加 10%；重新觸發重設 5 秒時間，不累加幅度。

- **持續限制**：若毒素提前消失，易傷也會提前結束，並非保證持續完整 5 秒。

- **傷害算例**：原本造成 100 點傷害，單計易傷變成 110；若攻擊者另有 25% 增傷，則為 100 × 1.25 × 1.1 = 137.5 點。若目標原本另有同階段 20% 易傷，則該階段為 1 + 20% + 10% = 1.3 倍。

[詳細資料](broker_passive_toxin_infected_enemies_take_increased_damage.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_damage_after_toxined_enemies"></a>
### 毒藥狂熱(Toxin Mania)

<img src="https://github.com/user-attachments/assets/06abfebe-3a5e-421b-b71a-35e5faee2767" width="72" height="72" alt="毒藥狂熱天賦圖示">

- **計算方式**：依周圍 12.5 公尺內受毒素感染的敵人數量，每名增加 5% 傷害，3 名即達 15% 上限；不要求由你施毒。敵人離開或失去毒素後，加成會隨之降低。

- **傷害算例**：附近有 2 名感染敵人，增傷 10%，基礎 100 點變成 110；同階段原有 25% 時為 100 × (1 + 25% + 10%) = 135 點。

[詳細資料](broker_passive_damage_after_toxined_enemies.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_toxin_spread_on_kills"></a>
### 連帶傷害(Splash Damage)

<img src="https://github.com/user-attachments/assets/31efd90d-864c-4e6c-af06-b48d540b45b3" width="72" height="72" alt="連帶傷害天賦圖示">

- **觸發方式**：以近戰擊殺精英敵人，向其周圍 4 公尺擴散毒素，最多選取 10 名敵人；死者不必原先感染毒素。

- **層數限制**：本技能最多把同類毒素補到 2 層。原本 0 層變成 2 層、1 層補到 2 層；已達 2 層或更高時，只重設毒素持續時間，不繼續加層。

- **毒素算例**：每 0.35 秒依目前毒素層數造成一次傷害。2 層的輸入威力為 500 × 2 ÷ 30 ≈ 33.33，再依毒素曲線與護甲算傷害；不是直接造成 33.33 點傷害。

[詳細資料](broker_passive_toxin_spread_on_kills.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_increased_blitz_ammo"></a>
### 額外彈藥袋(Extra Pouches)

<img src="https://github.com/user-attachments/assets/88f63a37-5b06-4bf2-93a5-95c9f3c98c48" width="72" height="72" alt="額外彈藥袋天賦圖示">

- **容量算例**：原本最多攜帶 3 次閃擊時，變成 3 + 1 = 4 次；原本 2 次則變成 3 次。

- **效果範圍**：提高攜帶容量，不代表每次使用後會自動再生 1 次。

[詳細資料](broker_passive_increased_blitz_ammo.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_melee_attacks_apply_toxin"></a>
### 塗讀武裝(Coated Weaponry)

<img src="https://github.com/user-attachments/assets/f92b996b-c59e-4d6b-90ac-a31046be1abd" width="72" height="72" alt="塗讀武裝天賦圖示">

- **疊層方式**：每次近戰爆擊命中，對該敵人增加 1 層同類毒素，並重設毒素持續時間；與其他施加相同毒素的手段共用 30 層上限。

- **傷害運作**：毒素每 0.35 秒結算一次。3 層的輸入威力為 500 × 3 ÷ 30 = 50，再依傷害曲線與敵人護甲換算。層數增加會提高威力，不能把威力直接當傷害。

- **衰退方式**：停止補毒後，先等待基礎 2.6 秒，再隨毒素傷害週期逐層衰退；重新施毒會重新計時等待時間。

[詳細資料](broker_passive_melee_attacks_apply_toxin.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_blitz_inflicts_toxin"></a>
### 隨身毒素(Pocket Toxin)

<img src="https://github.com/user-attachments/assets/6125da40-9e12-4107-bb5b-a8aa330a4b89" width="72" height="72" alt="隨身毒素天賦圖示">

- **施加層數**：擊暈的爆炸增加 3 層；炸彈使者增加 6 層；化學手榴彈增加 10 層。必須由閃擊爆炸命中，不是所有爆炸都適用。

- **疊層算例**：敵人已有 2 層相同毒素，再被提供 6 層的爆炸命中，變成 2 + 6 = 8 層；最多 30 層，重新施加會重新計時。

- **傷害運作**：相同毒素每 0.35 秒結算一次，8 層輸入威力為 500 × 8 ÷ 30 ≈ 133.33，再依毒素曲線與護甲計算。

[詳細資料](broker_passive_blitz_inflicts_toxin.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_reduced_damage_by_toxined"></a>
### 精準投毒(Targeted Toxin)

<img src="https://github.com/user-attachments/assets/28aafc63-bbd4-4097-a93f-3fb0d62f8710" width="72" height="72" alt="精準投毒天賦圖示">

- **作用方式**：你對敵人施加毒素後，使其造成的傷害降低 15%；怪物及隊長類頭目改為降低 30%。毒素消失後，減傷效果也會移除。

- **減傷算例**：該敵人原本造成 100 點傷害，單計本效果變成 85；適用 30% 的頭目則為 70。這是降低敵人的輸出，隊友受到該敵人攻擊時也能受益。

[詳細資料](broker_passive_reduced_damage_by_toxined.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_replenish_toughness_while_toxined_enemies_in_proximity"></a>
### 毒性再生(Toxic Renewal)

<img src="https://github.com/user-attachments/assets/0d36baca-b919-457c-890e-535a0ce33236" width="72" height="72" alt="毒性再生天賦圖示">

- **恢復方式**：周圍 15 公尺內，每有一名受毒素感染的敵人，每秒恢復最大韌性的 1%；最多 10 名，不要求由你施毒。

- **恢復算例**：最大韌性 100、附近 4 名感染敵人，每秒恢復 100 × 4 × 1% = 4 點；10 名或更多時，每秒最多 10 點。只缺 3 點時實際只補 3 點。

[詳細資料](broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_extended_mag"></a>
### 軍火商(Ammo Jack)

<img src="https://github.com/user-attachments/assets/148db758-02d7-4855-9f45-badcabc7c8cf" width="72" height="72" alt="軍火商天賦圖示">

- **容量算例**：原本 30 發，變成 ⌈30 × 1.15⌉ = 35 發；原本 7 發，變成 ⌈7 × 1.15⌉ = 9 發。

- **作用範圍**：改變彈匣容量，不直接增加備用彈藥上限。其他同類容量加成先相加，再將結果無條件進位。

[詳細資料](broker_passive_extended_mag.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_damage_vs_heavy_staggered"></a>
### 趁人之危(Cheap Shots)

<img src="https://github.com/user-attachments/assets/d6795940-e616-410f-b56b-76593e8a12eb" width="72" height="72" alt="趁人之危天賦圖示">

- **增傷方式**：敵人處於踉蹌判定時，傷害增加 10%；達到中度或重度踉蹌則共增加 15%，兩個數字不直接相加為 25%。

- **傷害算例**：基礎 100 點，輕度踉蹌時為 110，中度或重度為 115；另有同階段 25% 增傷時，後者為 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](broker_passive_damage_vs_heavy_staggered.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_melee_crit_instakill"></a>
### 心狠手辣(Hyper-Critical)

<img src="https://github.com/user-attachments/assets/83713f05-33fd-41c1-86f2-c536d7a1f06c" width="72" height="72" alt="心狠手辣天賦圖示">

- **觸發條件**：近戰爆擊命中人類體型敵人後，若敵人仍活著，而且剩餘生命嚴格小於該次實際傷害，就會被直接處決。隊長類敵人不適用。

- **生命門檻算例**：敵人原有 190 點生命，這次暴擊造成 100，命中後剩 90；90 < 100，因此處決。原有 200 時剩 100，因 100 不小於 100，不觸發。

- **兩倍傷害的意思**：在這次命中確實扣除相同傷害的前提下，等同命中前生命低於傷害的 2 倍；不是打完後剩餘生命低於 2 倍就處決。

[詳細資料](broker_passive_melee_crit_instakill.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_damage_vs_elites_monsters"></a>
### 以小搏大(Punching Above One's Weight)

<img src="https://github.com/user-attachments/assets/280d8610-ccf2-4be3-a05b-6f4a140f8b23" width="72" height="72" alt="以小搏大天賦圖示">

- **作用對象**：目標具精英或怪物分類時取得對應 15% 增傷；只具專家分類的敵人不會因此自動適用。

- **傷害算例**：基礎 100 點變成 115；若已有同階段 25% 增傷，則為 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](broker_passive_damage_vs_elites_monsters.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_increased_weakspot_damage"></a>
### 甜蜜點(The Sweet Spot)

<img src="https://github.com/user-attachments/assets/bd4b828f-f439-429d-a682-c036774235f3" width="72" height="72" alt="甜蜜點天賦圖示">

- **計算方式**：命中弱點時，增加的是弱點／精準命中的額外傷害部分，不是整筆傷害再乘 1.25。武器、護甲、攻擊方式及是否暴擊都可能改變這部分占比。

- **傷害算例**：假設一般部分 100、弱點額外部分 100，原本合計 200；加成後為 100 + 100 × 1.25 = 225，總傷害增加 12.5%。

- **武器差異算例**：另一武器若一般部分 100、額外部分 300，原本 400，生效後為 100 + 300 × 1.25 = 475，總增幅為 18.75%。所以同一項 25% 弱點加成，在不同武器上不會固定增加相同的總傷害百分比。

[詳細資料](broker_passive_increased_weakspot_damage.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_stimm_increased_duration"></a>
### 延長藥效(Long Lasting)

<img src="https://github.com/user-attachments/assets/c19f893c-1a73-4111-b234-e675605b17b5" width="72" height="72" alt="延長藥效天賦圖示">

- **持續算例**：原本持續 15 秒的興奮劑，變成 15 + 5 = 20 秒；這是固定加 5 秒，不是增加 5%。

- **冷卻影響**：巢都渣滓專用興奮劑在藥效期間暫停自然冷卻，因此藥效延長也會延後冷卻開始恢復的時間。

- **適用限制**：延長具有持續效果的興奮劑；瞬間治療本身不會因此多治療 5 秒。

[詳細資料](broker_passive_stimm_increased_duration.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_stimm_cleanse_on_kill"></a>
### 神佑興奮劑(Blessed Stimms)

<img src="https://github.com/user-attachments/assets/6f1ead13-0e28-4983-86e7-44478bd76cdc" width="72" height="72" alt="神佑興奮劑天賦圖示">

- **恢復方式**：使用興奮劑後，在藥效仍存在時，每次擊殺清除相當於最大生命 1% 的腐敗。腐敗已吞掉完整生命區段的部分不會被清除。

- **恢復算例**：最大生命 200 時，每次最多清除 2 點；累計清除量達到 100 點後停止。每次重新用藥會重設本次累計量。

- **門檻例外**：每次擊殺先檢查是否達 50%，再執行完整一次清除。若累計 99 點而本次清除 2 點，會到 101 點才停止，因此最後一次可能略超過標示門檻。

[詳細資料](broker_passive_stimm_cleanse_on_kill.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_dr_damage_tradeoff_on_stamina"></a>
### 巢都格鬥家(Hive City Brawler)

<img src="https://github.com/user-attachments/assets/5cb31261-7422-451a-9aac-d1c38b48c802" width="72" height="72" alt="巢都格鬥家天賦圖示">

- **計算方式**：減傷 = 20% × 目前耐力比例；近戰增傷 = 20% × 已消耗耐力比例。兩者隨耐力變化即時調整。

- **半耐力算例**：剩餘 50% 耐力時，減傷與近戰增傷各 10%。單計本效果，原本承受 100 點變成 90，原本造成 100 點近戰傷害變成 110。

- **滿空耐力算例**：滿耐力時承傷 100 × 0.8 = 80，近戰不增傷；耐力耗盡時不減傷，近戰則為 100 × 1.2 = 120。

- **與其他加成**：減傷採獨立承傷倍率，例如另有 20% 獨立減傷，滿耐力時為 100 × 0.8 × 0.8 = 64。近戰傷害則與同階段增傷相加。

[詳細資料](broker_passive_dr_damage_tradeoff_on_stamina.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_low_ammo_regen"></a>
### 順手牽羊(Pickpocket)

<img src="https://github.com/user-attachments/assets/3247cd98-e623-4d24-a821-db3f3a6ee20a" width="72" height="72" alt="順手牽羊天賦圖示">

- **觸發條件**：以近戰擊殺精英或專家敵人，且備用彈藥少於上限的 20% 時，把備用彈藥補到該門檻；彈匣內彈藥不計入門檻。

- **補充算例**：備用上限 150，門檻為 ⌊150 × 20%⌋ = 30 發。目前 8 發時補 22 發到 30；已有 30 發則不觸發。上限 37 時，門檻取整為 7 發。

[詳細資料](broker_passive_low_ammo_regen.md) · [返回目錄](#talent-index)

---

<a id="broker_passive_cleave_on_cleave"></a>
### 趁勝追擊(Battering Momentum)

<img src="https://github.com/user-attachments/assets/6fa27fb0-2d79-43fc-b74a-d64da58773f6" width="72" height="72" alt="趁勝追擊天賦圖示">

- **觸發方式**：同次近戰攻擊命中第 3 名敵人時，取得 50% 傷害與踉蹌順劈加成。下一次攻擊開始命中時會消耗；若再次達到 3 名，可重新取得。

- **順劈算例**：原本傷害順劈容量 10、踉蹌順劈容量 8，分別變成 10 × 1.5 = 15、8 × 1.5 = 12。實際命中人數仍取決於敵人質量與武器限制。

- **持續限制**：沒有固定秒數倒數；此效果由後續命中消耗，不是持續提高所有攻擊的傷害。

[詳細資料](broker_passive_cleave_on_cleave.md) · [返回目錄](#talent-index)

---


---

## 興奮劑配方

配方共有 30 點可分配，各項效果在使用專用興奮劑後共同生效；詳細成本、持續時間與疊層算例列於各配方。

<a id="broker_stimm_activation_talent"></a>
### 裝備財閥特殊裝備(Equip Cartel Special)

<img src="https://github.com/user-attachments/assets/51c007e0-bed4-4759-a369-04ab37032369" width="72" height="72" alt="裝備財閥特殊裝備天賦圖示">

- **裝備方式**：在興奮劑配方中選取至少一項效果，即可裝備專用興奮劑；中央圖示本身不消耗點數。

- **配方與效果**：配方共用 30 點，每個配方各花費 1～5 點。使用後，已選配方共同生效 15 秒；延長藥效可再延長 5 秒。

- **恢復時間**：藥效結束後才開始恢復。配方共花費 P 點時，基礎恢復秒數為「15 + 60 × (P − 1) ÷ 29」，有小數就無條件進位；1 點為 15 秒，15 點為 44 秒，30 點為 75 秒。

- **完整週期算例**：配方花費 30 點、不計其他恢復效果，注射後先生效 15 秒，再恢復 75 秒，合計 15 + 75 = 90 秒可再次使用。

[詳細資料](broker_stimm_activation_talent.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_celerity_1"></a>
### 激勵I(Spur I)

<img src="https://github.com/user-attachments/assets/6b1d7464-dc75-4f26-91d7-08e79fe94125" width="72" height="72" alt="激勵I天賦圖示">

- **配方成本**：1 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **攻擊速度**：增加 4%，與其他攻速加成相加。

- **武器切換**：切換速度增加 25%；同時選取激勵I、II 時，共增加 50%。

- **切換算例**：原本可加速的切換動作為 1 秒，僅此項時為 1 ÷ 1.25 = 0.8 秒；I、II 合計為 1 ÷ 1.5 ≈ 0.667 秒。

- **攻速算例**：從激勵I 選到本節點，共增加 4%；原本可加速的 1 秒攻擊動作變成 1 ÷ 1.04 ≈ 0.962 秒。

[詳細資料](broker_stimm_celerity_1.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_celerity_2"></a>
### 激勵II(Spur II)

<img src="https://github.com/user-attachments/assets/bfb821b6-f80f-4c08-842f-b3f7000ac772" width="72" height="72" alt="激勵II天賦圖示">

- **配方成本**：2 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **攻擊速度**：增加 4%，與其他攻速加成相加。

- **武器切換**：切換速度增加 25%；同時選取激勵I、II 時，共增加 50%。

- **切換算例**：原本可加速的切換動作為 1 秒，僅此項時為 1 ÷ 1.25 = 0.8 秒；I、II 合計為 1 ÷ 1.5 ≈ 0.667 秒。

- **耐力消耗**：本節點使耐力消耗乘以 0.85，即減少 15%。

- **耐力算例**：原消耗 10 點，僅此項時變成 10 × 0.85 = 8.5 點；II、III、IV 都選取時為 10 × 0.85 × 0.85 × 0.8 = 5.78 點。

- **攻速算例**：從激勵I 選到本節點，共增加 8%；原本可加速的 1 秒攻擊動作變成 1 ÷ 1.08 ≈ 0.926 秒。

[詳細資料](broker_stimm_celerity_2.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_celerity_3"></a>
### 激勵III(Spur III)

<img src="https://github.com/user-attachments/assets/27832b4a-d52a-49bb-a87e-2a3cd7fa4371" width="72" height="72" alt="激勵III天賦圖示">

- **配方成本**：3 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **攻擊速度**：增加 4%，與其他攻速加成相加。

- **耐力消耗**：本節點使耐力消耗乘以 0.85，即減少 15%。

- **耐力算例**：原消耗 10 點，僅此項時變成 10 × 0.85 = 8.5 點；II、III、IV 都選取時為 10 × 0.85 × 0.85 × 0.8 = 5.78 點。

- **攻速算例**：從激勵I 選到本節點，共增加 12%；原本可加速的 1 秒攻擊動作變成 1 ÷ 1.12 ≈ 0.893 秒。

[詳細資料](broker_stimm_celerity_3.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_celerity_4"></a>
### 激勵IV(Spur IV)

<img src="https://github.com/user-attachments/assets/c4f5bb04-c085-4d9d-8341-0346d3e6a173" width="72" height="72" alt="激勵IV天賦圖示">

- **配方成本**：4 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **攻擊速度**：增加 4%，與其他攻速加成相加。

- **耐力消耗**：本節點使耐力消耗乘以 0.8，即減少 20%。

- **耐力算例**：原消耗 10 點，僅此項時變成 10 × 0.8 = 8 點；II、III、IV 都選取時為 10 × 0.85 × 0.85 × 0.8 = 5.78 點。

- **攻速算例**：從激勵I 選到本節點，共增加 16%；原本可加速的 1 秒攻擊動作變成 1 ÷ 1.16 ≈ 0.862 秒。

[詳細資料](broker_stimm_celerity_4.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_celerity_5a"></a>
### 激勵V(Spur V)

<img src="https://github.com/user-attachments/assets/ed3da982-a076-4b67-a1ca-c889ede0ba70" width="72" height="72" alt="激勵V天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **攻擊速度**：增加 4%；與激勵I～IV 合計增加 20%。

- **攻速算例**：原本可加速的 1 秒攻擊動作，在整條激勵路線下為 1 ÷ 1.2 ≈ 0.833 秒。

- **防護效果**：藥效期間免疫眩暈與減速；不等同解除已被擒抱或捕捉的狀態。

[詳細資料](broker_stimm_celerity_5a.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_celerity_5b"></a>
### 反射(Reflex)

<img src="https://github.com/user-attachments/assets/21b33eec-94cc-4cea-b531-1ff788ff6bc9" width="72" height="72" alt="反射天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **換彈速度**：增加 30%；原本可加速的換彈動作為 2 秒時，變成 2 ÷ 1.3 ≈ 1.538 秒。

- **後座控制**：射擊造成的後座不穩定度累積減少 50%，停止射擊後的不穩定度恢復速度提高。

- **後座算例**：原每發增加 0.2 不穩定度，變成 0.2 × 0.5 = 0.1；原每秒消退 0.2，變成 0.2 ÷ 0.5 = 0.4。實際槍口偏移仍依武器後座曲線計算。

[詳細資料](broker_stimm_celerity_5b.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_celerity_5c"></a>
### 狂熱(Fervor)

<img src="https://github.com/user-attachments/assets/12ddbfdc-82bd-4ece-ba73-e6550451e5a4" width="72" height="72" alt="狂熱天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **移動與閃避**：移動速度與閃避距離各增加 10%，閃避速度再乘以 1.1。

- **移動算例**：沒有其他加成時，原移速每秒 4 公尺變成 4 × 1.1 = 4.4 公尺；原閃避距離 2.5 公尺變成 2.5 × 1.1 = 2.75 公尺。

- **有效閃避恢復**：停止連續閃避後，恢復有效閃避次數的等待時間縮短 10%；原為 1 秒時，變成 1 × (1 − 10%) = 0.9 秒。這不改變兩次閃避之間的基本間隔。

[詳細資料](broker_stimm_celerity_5c.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_combat_1"></a>
### 野火I(Wildfire I)

<img src="https://github.com/user-attachments/assets/22ab15e3-5280-408f-884c-5d8ebd692363" width="72" height="72" alt="野火I天賦圖示">

- **配方成本**：1 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **威力**：增加 4%，與前置配方及其他同階段威力加成相加。威力會再參與武器傷害、踉蹌及順劈計算。

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 1 個威力節點時，為 500 × (1 + 1 × 4%) = 520。

[詳細資料](broker_stimm_combat_1.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_combat_2"></a>
### 野火II(Wildfire II)

<img src="https://github.com/user-attachments/assets/e53e3328-a026-4e3c-8e91-c63cd69522c6" width="72" height="72" alt="野火II天賦圖示">

- **配方成本**：2 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **威力**：增加 4%，與前置配方及其他同階段威力加成相加。威力會再參與武器傷害、踉蹌及順劈計算。

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 2 個威力節點時，為 500 × (1 + 2 × 4%) = 540。

[詳細資料](broker_stimm_combat_2.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_combat_3"></a>
### 野火III(Wildfire III)

<img src="https://github.com/user-attachments/assets/58b8efb6-6c10-4795-8046-33bb49eee893" width="72" height="72" alt="野火III天賦圖示">

- **配方成本**：3 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **威力**：增加 4%，與前置配方及其他同階段威力加成相加。威力會再參與武器傷害、踉蹌及順劈計算。

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 3 個威力節點時，為 500 × (1 + 3 × 4%) = 560。

[詳細資料](broker_stimm_combat_3.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_combat_4a"></a>
### 野火IV(Wildfire IV)

<img src="https://github.com/user-attachments/assets/b90d885e-2e9a-43e7-9b64-d42447b285f9" width="72" height="72" alt="野火IV天賦圖示">

- **配方成本**：4 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **威力**：增加 4%，與前置配方及其他同階段威力加成相加。威力會再參與武器傷害、踉蹌及順劈計算。

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 4 個威力節點時，為 500 × (1 + 4 × 4%) = 580。

- **弱點與暴擊**：額外傷害部分增加 10%；普通命中傷害不受這一項加成。

- **額外傷害算例**：先固定威力與其他條件，普通傷害 100、原弱點傷害 200 時，本節點將結果變為 100 + (200 − 100) × 1.1 = 210，整筆傷害提高 5%。野火IV、V 的這項加成合計 35%，同例為 235。

[詳細資料](broker_stimm_combat_4a.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_combat_4b"></a>
### 狂怒I(Fury I)

<img src="https://github.com/user-attachments/assets/1db9427d-9c25-4096-898f-57089a300fce" width="72" height="72" alt="狂怒I天賦圖示">

- **配方成本**：4 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **威力**：增加 4%，與前置配方及其他同階段威力加成相加。威力會再參與武器傷害、踉蹌及順劈計算。

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 4 個威力節點時，為 500 × (1 + 4 × 4%) = 580。

- **護甲撕裂**：增加 5% 護甲撕裂；狂怒I、II 都選取時合計 15%。

- **護甲算例**：固定其他條件，護甲前 100 點、原護甲係數 0.5 時，僅本節點為 100 × (0.5 + 0.05) = 55 點。兩項合計則為 100 × (0.5 + 0.15) = 65 點。

[詳細資料](broker_stimm_combat_4b.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_combat_4c"></a>
### 獵鷹蕈劑I(Vultoprene I)

<img src="https://github.com/user-attachments/assets/abb7491f-9991-4352-a6e7-46f5a34c1ee3" width="72" height="72" alt="獵鷹蕈劑I天賦圖示">

- **配方成本**：4 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **威力**：增加 4%，與前置配方及其他同階段威力加成相加。威力會再參與武器傷害、踉蹌及順劈計算。

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 4 個威力節點時，為 500 × (1 + 4 × 4%) = 580。

- **爆擊率**：增加 5 個百分點；獵鷹蕈劑I、II 都選取時合計增加 15 個百分點。

- **暴擊算例**：原本 10%，僅本節點變成 10% + 5% = 15%；兩項合計為 25%，最終限制於 0%～100%。

[詳細資料](broker_stimm_combat_4c.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_combat_5a"></a>
### 野火V(Wildfire V)

<img src="https://github.com/user-attachments/assets/eaa62b3f-dc32-4364-81c0-8aadbf77c9dc" width="72" height="72" alt="野火V天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **威力**：增加 4%，與前置配方及其他同階段威力加成相加。威力會再參與武器傷害、踉蹌及順劈計算。

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 5 個威力節點時，為 500 × (1 + 5 × 4%) = 600。

- **弱點與暴擊**：額外傷害部分增加 25%；普通命中傷害不受這一項加成。

- **額外傷害算例**：先固定威力與其他條件，普通傷害 100、原弱點傷害 200 時，本節點將結果變為 100 + (200 − 100) × 1.25 = 225，整筆傷害提高 12.5%。野火IV、V 的這項加成合計 35%，同例為 235。

[詳細資料](broker_stimm_combat_5a.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_combat_5b"></a>
### 狂怒II(Fury II)

<img src="https://github.com/user-attachments/assets/ccb20931-8290-461a-babb-60380b406b9d" width="72" height="72" alt="狂怒II天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **威力**：增加 4%，與前置配方及其他同階段威力加成相加。威力會再參與武器傷害、踉蹌及順劈計算。

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 5 個威力節點時，為 500 × (1 + 5 × 4%) = 600。

- **護甲撕裂**：增加 10% 護甲撕裂；狂怒I、II 都選取時合計 15%。

- **護甲算例**：固定其他條件，護甲前 100 點、原護甲係數 0.5 時，僅本節點為 100 × (0.5 + 0.1) = 60 點。兩項合計則為 100 × (0.5 + 0.15) = 65 點。

[詳細資料](broker_stimm_combat_5b.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_combat_5c"></a>
### 獵鷹蕈劑II(Vultoprene II)

<img src="https://github.com/user-attachments/assets/c91fbea3-470d-4fa1-ac50-d2ab5c741a35" width="72" height="72" alt="獵鷹蕈劑II天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **威力**：增加 4%，與前置配方及其他同階段威力加成相加。威力會再參與武器傷害、踉蹌及順劈計算。

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 5 個威力節點時，為 500 × (1 + 5 × 4%) = 600。

- **爆擊率**：增加 10 個百分點；獵鷹蕈劑I、II 都選取時合計增加 15 個百分點。

- **暴擊算例**：原本 10%，僅本節點變成 10% + 10% = 20%；兩項合計為 25%，最終限制於 0%～100%。

[詳細資料](broker_stimm_combat_5c.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_durability_1"></a>
### 彈幕I(Barrage I)

<img src="https://github.com/user-attachments/assets/883f2dd7-ad0d-4986-a5d0-32fa36a11e27" width="72" height="72" alt="彈幕I天賦圖示">

- **配方成本**：1 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **使用時恢復**：額外恢復最大韌性的 6.25%，受到韌性恢復加成影響，最多補至上限。

- **持續效果**：韌性恢復量增加 5%，承受傷害乘以 0.96，也就是本節點提供 4% 減傷。

- **減傷算例**：從彈幕I 選到本節點，共 1 項減傷相乘。原本承受 100 點時，變成 100 × 0.96^1 ≈ 96.000 點。

- **恢復算例**：最大韌性 100，前置配方與本節點的恢復加成都生效時，使用後恢復 100 × (1 × 6.25%) × (1 + 1 × 5%) = 6.5625 點；實際仍受缺額限制。

[詳細資料](broker_stimm_durability_1.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_durability_2"></a>
### 彈幕II(Barrage II)

<img src="https://github.com/user-attachments/assets/e99ef969-5e48-4129-9a22-d11f0e23aa80" width="72" height="72" alt="彈幕II天賦圖示">

- **配方成本**：2 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **使用時恢復**：額外恢復最大韌性的 6.25%，受到韌性恢復加成影響，最多補至上限。

- **持續效果**：韌性恢復量增加 5%，承受傷害乘以 0.96，也就是本節點提供 4% 減傷。

- **減傷算例**：從彈幕I 選到本節點，共 2 項減傷相乘。原本承受 100 點時，變成 100 × 0.96^2 ≈ 92.160 點。

- **恢復算例**：最大韌性 100，前置配方與本節點的恢復加成都生效時，使用後恢復 100 × (2 × 6.25%) × (1 + 2 × 5%) = 13.75 點；實際仍受缺額限制。

[詳細資料](broker_stimm_durability_2.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_durability_3"></a>
### 彈幕III(Barrage III)

<img src="https://github.com/user-attachments/assets/a9df685a-a1fd-4431-b90a-b77559277f58" width="72" height="72" alt="彈幕III天賦圖示">

- **配方成本**：3 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **使用時恢復**：額外恢復最大韌性的 6.25%，受到韌性恢復加成影響，最多補至上限。

- **持續效果**：韌性恢復量增加 5%，承受傷害乘以 0.96，也就是本節點提供 4% 減傷。

- **減傷算例**：從彈幕I 選到本節點，共 3 項減傷相乘。原本承受 100 點時，變成 100 × 0.96^3 ≈ 88.474 點。

- **恢復算例**：最大韌性 100，前置配方與本節點的恢復加成都生效時，使用後恢復 100 × (3 × 6.25%) × (1 + 3 × 5%) = 21.5625 點；實際仍受缺額限制。

[詳細資料](broker_stimm_durability_3.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_durability_4"></a>
### 彈幕IV(Barrage IV)

<img src="https://github.com/user-attachments/assets/e60164c9-4f04-46ed-afe0-0a71e33582f1" width="72" height="72" alt="彈幕IV天賦圖示">

- **配方成本**：4 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **使用時恢復**：額外恢復最大韌性的 6.25%，受到韌性恢復加成影響，最多補至上限。

- **持續效果**：韌性恢復量增加 5%，承受傷害乘以 0.96，也就是本節點提供 4% 減傷。

- **減傷算例**：從彈幕I 選到本節點，共 4 項減傷相乘。原本承受 100 點時，變成 100 × 0.96^4 ≈ 84.935 點。

- **恢復算例**：最大韌性 100，前置配方與本節點的恢復加成都生效時，使用後恢復 100 × (4 × 6.25%) × (1 + 4 × 5%) = 30 點；實際仍受缺額限制。

[詳細資料](broker_stimm_durability_4.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_durability_5a"></a>
### 坦克(Tank)

<img src="https://github.com/user-attachments/assets/35bab219-731c-41ac-80a8-27af4a02f1c2" width="72" height="72" alt="坦克天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **恢復加成**：韌性恢復量增加 30%，與彈幕I～IV 的 20% 相加，合計增加 50%。

- **恢復算例**：原本恢復 10 點的效果，合計變成 10 × (1 + 20% + 30%) = 15 點；最多補滿韌性。

- **注射算例**：最大韌性 100，彈幕I～IV 共提供 25% 一次恢復，套用此路線 50% 恢復加成後為 100 × 25% × 1.5 = 37.5 點。

[詳細資料](broker_stimm_durability_5a.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_durability_5b"></a>
### 恢復(Regain)

<img src="https://github.com/user-attachments/assets/f238889d-d7aa-45e0-8d16-9726389c7fe8" width="72" height="72" alt="恢復天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **持續恢復**：藥效期間每秒恢復最大韌性的 5%，受到韌性恢復加成影響；第一次恢復約在生效 1 秒後。

- **恢復算例**：最大韌性 100，計入彈幕I～IV 的 20% 恢復加成，每次恢復 100 × 5% × 1.2 = 6 點；若只缺 3 點，實際只補 3 點。

- **停止條件**：興奮劑效果結束後停止；倒地期間不提供這項恢復。

[詳細資料](broker_stimm_durability_5b.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_concentration_1"></a>
### 抗焦慮藥I(Kalma I)

<img src="https://github.com/user-attachments/assets/b6316199-6d72-4db3-8be6-a74600e54b2f" width="72" height="72" alt="抗焦慮藥I天賦圖示">

- **配方成本**：1 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **恢復速度**：戰鬥技能自然恢復速度增加 6.25%；前置配方的加成保留，同階段相加。

- **持續恢復算例**：從抗焦慮藥I 選到本節點時，總加成為 6.25%。原本每秒恢復 1 秒冷卻，現在每秒恢復 1.0625 秒；15 秒藥效內共恢復 15 × 1.0625 = 15.9375 秒。

- **剩餘時間算例**：原剩 60 秒，且能力正在正常恢復，15 秒藥效結束後還剩 60 − 15.9375 = 44.0625 秒；之後恢復原速。

- **暫停期間**：戰鬥技能若因狀態或場域尚未結束而暫停自然恢復，這項速度加成不會自行啟動倒數。

[詳細資料](broker_stimm_concentration_1.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_concentration_2"></a>
### 抗焦慮藥II(Kalma II)

<img src="https://github.com/user-attachments/assets/8401a77b-6cc2-4b03-a0de-dd67296d008d" width="72" height="72" alt="抗焦慮藥II天賦圖示">

- **配方成本**：2 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **恢復速度**：戰鬥技能自然恢復速度增加 6.25%；前置配方的加成保留，同階段相加。

- **持續恢復算例**：從抗焦慮藥I 選到本節點時，總加成為 12.5%。原本每秒恢復 1 秒冷卻，現在每秒恢復 1.125 秒；15 秒藥效內共恢復 15 × 1.125 = 16.875 秒。

- **剩餘時間算例**：原剩 60 秒，且能力正在正常恢復，15 秒藥效結束後還剩 60 − 16.875 = 43.125 秒；之後恢復原速。

- **暫停期間**：戰鬥技能若因狀態或場域尚未結束而暫停自然恢復，這項速度加成不會自行啟動倒數。

[詳細資料](broker_stimm_concentration_2.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_concentration_3"></a>
### 抗焦慮藥III(Kalma III)

<img src="https://github.com/user-attachments/assets/dc414369-8882-423d-9c5f-ba6a04583163" width="72" height="72" alt="抗焦慮藥III天賦圖示">

- **配方成本**：3 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **恢復速度**：戰鬥技能自然恢復速度增加 6.25%；前置配方的加成保留，同階段相加。

- **持續恢復算例**：從抗焦慮藥I 選到本節點時，總加成為 18.75%。原本每秒恢復 1 秒冷卻，現在每秒恢復 1.1875 秒；15 秒藥效內共恢復 15 × 1.1875 = 17.8125 秒。

- **剩餘時間算例**：原剩 60 秒，且能力正在正常恢復，15 秒藥效結束後還剩 60 − 17.8125 = 42.1875 秒；之後恢復原速。

- **暫停期間**：戰鬥技能若因狀態或場域尚未結束而暫停自然恢復，這項速度加成不會自行啟動倒數。

[詳細資料](broker_stimm_concentration_3.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_concentration_4"></a>
### 抗焦慮藥IV(Kalma IV)

<img src="https://github.com/user-attachments/assets/d4e178b4-1b2e-48cc-8221-35d5c515e8cb" width="72" height="72" alt="抗焦慮藥IV天賦圖示">

- **配方成本**：4 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **恢復速度**：戰鬥技能自然恢復速度增加 6.25%；前置配方的加成保留，同階段相加。

- **持續恢復算例**：從抗焦慮藥I 選到本節點時，總加成為 25%。原本每秒恢復 1 秒冷卻，現在每秒恢復 1.25 秒；15 秒藥效內共恢復 15 × 1.25 = 18.75 秒。

- **剩餘時間算例**：原剩 60 秒，且能力正在正常恢復，15 秒藥效結束後還剩 60 − 18.75 = 41.25 秒；之後恢復原速。

- **暫停期間**：戰鬥技能若因狀態或場域尚未結束而暫停自然恢復，這項速度加成不會自行啟動倒數。

[詳細資料](broker_stimm_concentration_4.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_concentration_5a"></a>
### 抗焦慮藥V(Kalma V)

<img src="https://github.com/user-attachments/assets/f86ba1f1-5859-40ce-b662-6f9e54e9afe5" width="72" height="72" alt="抗焦慮藥V天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **恢復速度**：戰鬥技能自然恢復速度增加 25%；前置配方的加成保留，同階段相加。

- **持續恢復算例**：從抗焦慮藥I 選到本節點時，總加成為 50%。原本每秒恢復 1 秒冷卻，現在每秒恢復 1.5 秒；15 秒藥效內共恢復 15 × 1.5 = 22.5 秒。

- **剩餘時間算例**：原剩 60 秒，且能力正在正常恢復，15 秒藥效結束後還剩 60 − 22.5 = 37.5 秒；之後恢復原速。

- **暫停期間**：戰鬥技能若因狀態或場域尚未結束而暫停自然恢復，這項速度加成不會自行啟動倒數。

[詳細資料](broker_stimm_concentration_5a.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_concentration_5b"></a>
### 狂熱(Hypex)

<img src="https://github.com/user-attachments/assets/77f46379-3f89-4c81-8240-a0dc288fb868" width="72" height="72" alt="狂熱天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **觸發方式**：興奮劑生效期間，以近戰攻擊擊殺敵人後，戰鬥技能恢復速度額外增加 56.25%，持續 1 秒。

- **重新計時方式**：再次合格擊殺會重設 1 秒倒數，不會疊成兩份加成。

- **恢復算例**：前置抗焦慮藥I～IV 提供 25%，再加這項 56.25%，該秒恢復倍率為 1 + 25% + 56.25% = 1.8125。原本每秒恢復 1 秒冷卻，現在該秒恢復 1.8125 秒。

- **恢復範圍**：只加快戰鬥技能的恢復，不加快專用興奮劑本身；能力自然恢復暫停時，不會自行開始倒數。

[詳細資料](broker_stimm_concentration_5b.md) · [返回目錄](#talent-index)

---

<a id="broker_stimm_concentration_5c"></a>
### 集中藥(Klay)

<img src="https://github.com/user-attachments/assets/9707e711-9e62-4b88-9102-fe83ffa29cda" width="72" height="72" alt="集中藥天賦圖示">

- **配方成本**：5 點；選取後，使用專用興奮劑時生效，基本持續 15 秒。

- **觸發方式**：興奮劑生效期間，以遠程攻擊擊殺敵人後，戰鬥技能恢復速度額外增加 56.25%，持續 1 秒。

- **重新計時方式**：再次合格擊殺會重設 1 秒倒數，不會疊成兩份加成。

- **恢復算例**：前置抗焦慮藥I～IV 提供 25%，再加這項 56.25%，該秒恢復倍率為 1 + 25% + 56.25% = 1.8125。原本每秒恢復 1 秒冷卻，現在該秒恢復 1.8125 秒。

- **恢復範圍**：只加快戰鬥技能的恢復，不加快專用興奮劑本身；能力自然恢復暫停時，不會自行開始倒數。

[詳細資料](broker_stimm_concentration_5c.md) · [返回目錄](#talent-index)

---
