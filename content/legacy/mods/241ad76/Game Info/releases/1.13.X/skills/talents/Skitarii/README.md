# 護教軍天賦：Release 1.13.1

[English](en/README.md)

[來源、公式與技術索引](SOURCE_INDEX.md)｜[技能分類](../../README.md)｜[版本資訊](../../../README.md)
[角色基礎效果](BASE_EFFECTS.md)

<a id="talent-index"></a>
## 技能目錄

| 技能 | 主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/d45e19a1-d480-42db-bd0c-70ed43aba9aa" width="32" height="32" alt="整合型艾曼納圖斯力場天賦圖示"> [整合型艾曼納圖斯力場](#cryptic_grenade_ability_force_field)<br>- Integrated Refraction Emitter | <ul><li>展開一個跟隨玩家的力場，吸收遠程攻擊並在啟動與結束時電擊附近敵人。</li><li>持續8秒，最多儲存3次；每次需75秒自然恢復。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/295017d9-50cd-4797-8b33-bd3627a7139f" width="32" height="32" alt="滌罪伺服頭骨天賦圖示"> [滌罪伺服頭骨](#cryptic_flamethrower)<br>- Purgator Servo-Skull | <ul><li>額外召喚一台配備噴火器的伺服頭骨，可指定區域施放火焰。</li><li>與醫療伺服頭骨同時選用時，共用使用次數上限由3次增至5次。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/adeeeef3-0c2e-450a-974b-66ce6c6366bd" width="32" height="32" alt="醫療伺服頭骨天賦圖示"> [醫療伺服頭骨](#cryptic_servo_skull_inject_ally)<br>- Medicae Servo-Skull | <ul><li>額外召喚一台醫療伺服頭骨，可救援需要盟友協助的隊友。</li><li>救援後，隊友獲得5秒韌性傷害減免與韌性恢復。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/6a4875ee-4056-4964-ae36-846e598954bc" width="32" height="32" alt="電弧手榴彈天賦圖示"> [電弧手榴彈](#cryptic_grenade_ability_arc_grenade)<br>- Arc Grenades | <ul><li>投擲後在10公尺內最多選4個起始目標，電弧連鎖附近敵人並持續電擊。</li><li>每擊殺一名精英或專家敵人，恢復0.04份電容量。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/0efafa0a-aad0-4bb8-869f-133db37cf152" width="32" height="32" alt="匠師伺服頭骨天賦圖示"> [匠師伺服頭骨](#cryptic_servo_skull_improved)<br>- Artificer Servo-Skull | <ul><li>伺服頭骨可常駐跟隨，並可受命射擊敵人或執行資料解碼。</li><li>基礎伺服頭骨強化效果改為永久生效；命中還會使敵人承受更多傷害並累積燃燒。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/14c1a0d8-2916-40d7-a7e2-8572a0b3e6d2" width="32" height="32" alt="超載電弧手榴彈天賦圖示"> [超載電弧手榴彈](#cryptic_arc_grenades_brittleness)<br>- Overcharged Arc Grenades | <ul><li>電弧手榴彈最多增加2個起始電弧目標。</li><li>電弧連鎖命中的敵人獲得8層脆弱。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/501bab77-4618-480e-80e8-3abb022f6a68" width="32" height="32" alt="強化電弧手榴彈天賦圖示"> [強化電弧手榴彈](#cryptic_arc_grenades_weapon_malfunction)<br>- Enhanced Arc Grenades | <ul><li>電弧手榴彈及其電弧命中可令適用的遠程敵人武器故障。</li><li>武器故障通常持續12秒，敵人再受命中時會更新故障時間。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/e70f3e4b-d2c2-4840-bc29-56ba85dd816d" width="32" height="32" alt="過載艾曼納圖斯力場天賦圖示"> [過載艾曼納圖斯力場](#cryptic_force_field_duration_increase)<br>- Overcharged Refraction Emitter | <ul><li>將艾曼納圖斯力場持續時間由8秒提高至12秒，並在持續時間中點額外引發一次電擊爆炸。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/9eb6e468-224f-4d7c-b696-cc58aa08f532" width="32" height="32" alt="動能排斥天賦圖示"> [動能排斥](#cryptic_force_field_capacitance_restore)<br>- Kinetic Repulsion | <ul><li>艾曼納圖斯力場吸收遠程攻擊時會恢復電容量。</li><li>每次吸收恢復0.025份，每次力場最多恢復0.75份。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/c365855a-e85f-4d0d-8156-4048ae9f7e02" width="32" height="32" alt="心智網指令天賦圖示"> [心智網指令](#cryptic_servo_skull_improved_tagging)<br>- Noospheric Command | <ul><li>標記敵人並下令攻擊，可使伺服頭骨短暫大幅加快射擊。</li><li>完整2秒加速消耗0.3份電容量；沒有最低電容量時不能啟動，訓練場例外。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/ba6e0fe8-b601-433e-a423-8a6b8ee7b79b" width="32" height="32" alt="電流抗性天賦圖示"> [電流抗性](#cryptic_force_field_arcs)<br>- Voltaic Resistance | <ul><li>艾曼納圖斯力場結束時，會按吸收的遠程攻擊次數向前方敵人發射1至4道電弧。</li><li>每道電弧都可連鎖攻擊附近敵人。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/7090c8fb-aaaa-4015-a5c1-21e7093507be" width="32" height="32" alt="復甦天賦圖示"> [復甦](#cryptic_coherency_regen_aura_improved)<br>- Resurgence | <ul><li>獲得25點韌性，且你與協同範圍內隊友在戰鬥中的協同韌性恢復至少為一般速率的50%。</li><li>協同恢復最低倍率可在附近有敵人時生效。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/59dcc637-0b0f-4f3b-8e79-f4fdf53b6cef" width="32" height="32" alt="彈藥存放天賦圖示"> [彈藥存放](#cryptic_ammo_aura)<br>- Ammunition Deposit | <ul><li>你獲得25點韌性，任務中的玩家獲得15%儲備用彈藥藥容量。</li><li>備用彈藥容量效果不受協同距離限制；多名隊友選用時不重複加成。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/a48f1d74-488a-42d3-a59d-33d55135dad2" width="32" height="32" alt="碎敵信條天賦圖示"> [碎敵信條](#cryptic_aura_weapon_improved)<br>- Foe-Render Creed | <ul><li>你獲得25點韌性；你與協同範圍內隊友的順劈上限提高15%，撕裂提高7.5%。</li><li>協同鏈包含施放者本人，因此自身也取得順劈與撕裂加成。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/af7ec3de-6e36-4171-8be2-d385177b170e" width="32" height="32" alt="弦爪重擊天賦圖示"> [弦爪重擊](#cryptic_chordclaw)<br>- Chordclaw Strike | <ul><li>弦爪重擊每次啟動消耗1份充能；弦爪重攻擊必定暴擊並有+50%撕裂。</li><li>啟動期間的弦爪效果另提供+30%近戰傷害及眩暈免疫；攻擊的實際生命傷害依敵人與傷害計算而變。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/eb879996-8768-4102-8799-0fecaf6f7a98" width="32" height="32" alt="修復協定天賦圖示"> [修復協定](#cryptic_precision_stance_toughness_suppression)<br>- Restoration Protocol | <ul><li>進階戰鬥教範啟動時清除壓制；能力維持期間每秒恢復最大韌性的10%。</li><li>恢復按最大韌性的比例計算，受一般韌性補充修正影響，且最多補到滿韌性。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/ac9ea4d6-352f-4ad1-95f2-a2de10d39d2d" width="32" height="32" alt="彈藥盤點之旨天賦圖示"> [彈藥盤點之旨](#cryptic_precision_stance_fire_rate_increased)<br>- Writ of Ammunition Enumeration | <ul><li>進階戰鬥教範啟動時提高遠程射速15%；能力連續維持滿4秒後提高至30%。</li><li>能力結束會撤除此射速加成，4秒計時亦重置。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/9d074da8-541c-4fec-bc2b-47e53be42bad" width="32" height="32" alt="電流弧天賦圖示"> [電流弧](#cryptic_discharge_generates_arcs)<br>- Voltaic Arcs | <ul><li>電能發射器每消耗一份充能，額外釋放一道向前電弧；一次最多消耗3份，因此一般使用最多3道。</li><li>每道電弧從前方 12 公尺內的有效敵人起始，之後可鏈接附近敵人。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/b74a0dba-64ed-40b6-b630-792c413387cd" width="32" height="32" alt="電能驅動天賦圖示"> [電能驅動](#cryptic_discharge_attack_speed_increase)<br>- Voltaic Motivator | <ul><li>每次使用電能發射器後，攻擊速度提高 5% 基礎值，再按消耗充能每道增加 5%。</li><li>加成持續 15 秒；消耗 1、2、3 道時，總加成分別為 10%、15%、20%。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/dd369366-6fa1-4e92-bd7b-c92f5bf8023a" width="32" height="32" alt="電流超載天賦圖示"> [電流超載](#cryptic_discharge_toughness)<br>- Voltaic Overcharge | <ul><li>電能發射器每消耗一份充能，立即恢復最大韌性的25%；電流爆炸每命中一名存活敵人，再恢復最大韌性的1%。</li><li>恢復量會受韌性補充修正影響，並且不能超過目前缺少的韌性。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/94595162-990c-418a-9bbc-9b3e90ed790b" width="32" height="32" alt="軸向斬擊天賦圖示"> [軸向斬擊](#cryptic_chordclaw_horizontal_swipe)<br>- Axial Slash | <ul><li>快速啟用弦爪時改為橫向掃擊，仍必定暴擊；按住蓄力仍使用原本重刺。</li><li>單次橫掃可命中多個目標，後續目標的傷害逐步降低。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/7d516cae-80f0-4d48-b562-b5a21f6ddcd1" width="32" height="32" alt="試探連擊天賦圖示"> [試探連擊](#cryptic_chordclaw_quick_stab_combo)<br>- Probing Strikes | <ul><li>試探連擊把弦爪的快速能力攻擊改為三段連續刺擊；按住輸入仍走一般重攻擊。</li><li>三段刺擊各自為必定暴擊，且每段造成生命傷害時對命中目標施加6層流血；流血最多18層。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/c63720c4-df53-4c05-9881-cd6a6bf33c79" width="32" height="32" alt="通量導管蓄積天賦圖示"> [通量導管蓄積](#cryptic_crits_grant_power)<br>- Flux Conduit Build-Up | <ul><li>暴擊後4秒內加快電容量恢復；基本速率下，額外恢復單份電容量的5%。</li><li>4秒內再次暴擊會重設恢復期間；恢復倍率固定，不會因多次暴擊而疊高。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/833b596d-dbc9-49fe-9f90-436140e700ed" width="32" height="32" alt="反應爐線圈充能天賦圖示"> [反應爐線圈充能](#cryptic_weakspot_kills_grant_power)<br>- Reactor Coil Recharge | <ul><li>弱點擊殺恢復目前戰鬥技能單份充能成本的2%；以50點為一份時，每次恢復1點電容量。</li><li>恢復量會保留為小數進度；未達下一份完整充能前不會增加可用份數。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/39f22717-a782-4201-b5b3-f63a166bedd1" width="32" height="32" alt="強化能量循環天賦圖示"> [強化能量循環](#cryptic_increased_passive_cooldown_regen)<br>- Augmented Power-Cycle | <ul><li>電容量自然恢復由每秒單份的2%提高至3%；每份50點時，每秒由1點提高至1.5點。</li><li>在沒有其他消耗或回充修正時，一份充能約33.3秒回滿，三份由空回滿約100秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/7557cf7d-9d8b-41ba-bff3-582bdcc5c063" width="32" height="32" alt="電容回收迴路天賦圖示"> [電容回收迴路](#cryptic_multi_hits_grant_power)<br>- Capacitor Reclamation Loop | <ul><li>單次攻擊命中至少3名敵人時，恢復目前戰鬥技能單份成本的1%電容量。</li><li>按單份成本50點計，每次恢復0.5點；觸發後至少間隔0.25秒才能再次觸發。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/637d6e54-1c81-434d-b5bc-d779d4d8674b" width="32" height="32" alt="電能發射器天賦圖示"> [電能發射器](#cryptic_discharge)<br>- Voltaic Emitter | <ul><li>啟動時消耗1至3份已補滿的電容量，單次最多消耗3份；更多充能及下一份未滿進度保留。</li><li>主放電固定影響12公尺內敵人，觸電2秒並造成持續傷害。</li><li>消耗至少2份時，另使30公尺內符合條件的敵人武器故障；至少3份時，接下來15秒內攻擊命中會使敵人觸電2秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/fe67d92b-3b1a-4da7-bf6a-43bb643e80d6" width="32" height="32" alt="進階戰鬥教範天賦圖示"> [進階戰鬥教範](#cryptic_precision_stance)<br>- Advanced Combat Doctrines | <ul><li>切換至遠程武器並協助瞄準準星附近的敵人；散佈降低90%、後座力降低60%。</li><li>啟動扣除單份電容量進度的25%，之後每秒扣10%、每次射擊再扣1%；裝填時暫停每秒扣除。</li><li>重新裝填速度提高25%，結束後保留5秒；再次按下技能、切離遠程武器或耗盡電容量便結束。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/756e60ad-5734-42a4-be62-759096344f67" width="32" height="32" alt="鋼鐵富足天賦圖示"> [鋼鐵富足](#cryptic_chordclaw_capacitance_restoration)<br>- Satiated Steel | <ul><li>弦爪造成近戰擊殺後，在5秒內額外恢復目前戰鬥技能單份成本的25%。</li><li>單份電容量50點時，完整5秒額外恢復12.5點；期間再擊殺會重新計時，不疊加恢復速率。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/a4bee55e-0868-4104-89c8-e2009e89ae4d" width="32" height="32" alt="千刀萬剮天賦圖示"> [千刀萬剮](#cryptic_chordclaw_consecutive_bonus)<br>- Slice and Dice | <ul><li>每次啟動弦爪技能增加一層弦爪傷害加成，每層20%，上限3層。</li><li>每層持續5秒；新層加入時更新持續時間，最多提供60%弦爪傷害修正。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/bedef96d-1746-44a5-a482-1abe4e5e15c6" width="32" height="32" alt="洞察之眼天賦圖示"> [洞察之眼](#cryptic_precision_stance_crit_cleave)<br>- Piercing Sight | <ul><li>進階戰鬥教範啟用時，遠程順劈增加30%、遠程爆擊率增加15個百分點。</li><li>持續4秒後提高至60%順劈與30個百分點爆擊率；關閉能力即失去加成。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/9cbfaa3e-c8bf-42b8-98a4-5e5c6ee9c033" width="32" height="32" alt="精算順序天賦圖示"> [精算順序](#cryptic_precision_stance_damage_on_elite_kill)<br>- Calculated Priority | <ul><li>進階戰鬥教範啟動期間，以遠程攻擊擊殺精英會增加一層傷害加成。</li><li>每層提高5%傷害、持續10秒，最多5層；達到上限時最多為25%，再次取得層數會重設持續時間。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/856a3399-5f26-40e1-988e-8960086a92c9" width="32" height="32" alt="削切協議天賦圖示"> [削切協議](#cryptic_dissector)<br>- Flensing Protocols | <ul><li>初始6層，每層傷害增加2.5%、韌性傷害減免2.5%；滿層各為15%。</li><li>受到生命或韌性傷害時失去1層，每秒最多一次；精英或專家擊殺補2層，並恢復最大韌性15%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/55fe932f-c298-4b33-ad21-efab7b9244e5" width="32" height="32" alt="極限電容天賦圖示"> [極限電容](#cryptic_redline)<br>- Redline Capacitors | <ul><li>每消耗或補回一份戰鬥技能充能，獲得5%韌性傷害減免與5%電容量自然恢復加成；最多4層。</li><li>新增層會重設12秒倒數，之後每12秒失去1層；戰鬥技能充能上限增加1份。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/1f613b73-cb4f-4b13-8c3e-2355fe567ba3" width="32" height="32" alt="能量超載天賦圖示"> [能量超載](#cryptic_overload_keystone)<br>- Power Overload | <ul><li>你與協同中的隊友擊殺一般敵人獲得1層，精英或專家獲得2層；達30層觸發過載並歸零。</li><li>過載使你與協同中的隊友獲得15%傷害加成及15%韌性傷害減免，持續8秒。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/a59865c6-45fb-4f1e-b360-b8100e541a00" width="32" height="32" alt="爆擊能量過載天賦圖示"> [爆擊能量過載](#cryptic_overload_keystone_bigger_explosion)<br>- Critical Power Overload | <ul><li>能量超載時，使周圍8公尺內命中的敵人遭電擊，承受傷害提高15%，持續8秒。</li><li>再次命中重新計時；這次範圍效果本身不造成爆炸傷害。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/cfc8d67b-448d-4b33-afac-86fd412b2a6d" width="32" height="32" alt="振奮過載天賦圖示"> [振奮過載](#cryptic_overload_keystone_toughness_stamina)<br>- Invigorating Overload | <ul><li>每次能量超載時，你與協同中的隊友各自恢復最大韌性的20%及最大耐力的20%。</li><li>恢復受韌性與耐力上限限制；韌性恢復也會套用已有的韌性恢復修正。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/f0977f9f-2eb1-458a-a2c1-5e5642a284aa" width="32" height="32" alt="靜電電容消耗天賦圖示"> [靜電電容消耗](#cryptic_overload_keystone_permastack)<br>- Static Capacitor Drain | <ul><li>累計超載8／16／24次，依序獲得傷害提高15%、韌性減傷20%、電容量自然恢復加快25%。</li><li>三項加成可以同時保留，各只取得一次，持續至死亡。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/08678745-4375-4d48-bdde-6fbc209d6402" width="32" height="32" alt="伺服肌腱湧動天賦圖示"> [伺服肌腱湧動](#cryptic_dissector_crit_attack_speed)<br>- Servo-Sinew Surge | <ul><li>每層削切協議額外提供1.5%爆擊率與1.5%近戰攻擊速度；效果隨削切協議層數變動。</li><li>6層時增加9個百分點爆擊率與9%近戰攻速；8層時分別增加12個百分點與12%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/17ab9d2c-793b-40c4-83bd-cb3c4bdee444" width="32" height="32" alt="熟練解剖者天賦圖示"> [熟練解剖者](#cryptic_dissector_max_stacks)<br>- Honed Dissector | <ul><li>將削切協議層數上限從6提高到8；啟用時會直接從8層開始。</li><li>新增加的2層沿用原本每層傷害與韌性承傷步進，滿8層相當於傷害+20%、韌性承傷倍率0.80。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/0fead35c-7d81-43dc-be42-f88f95123f84" width="32" height="32" alt="進階能量管理天賦圖示"> [進階能量管理](#cryptic_redline_strength)<br>- Advanced Power Management | <ul><li>使用戰鬥技能時，依使用前持有的充能數增加力量效果；每份充能提供5%威力加成，效果最多累積5層並持續10秒。</li><li>新增加層會重設10秒倒數；層數到達5層後不再增加，但後續觸發仍會重新計時。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/bd0f7682-079c-4c61-bae6-b759aa2608e9" width="32" height="32" alt="電容極限覆寫天賦圖示"> [電容極限覆寫](#cryptic_redline_rending)<br>- Capacitory Limit Override | <ul><li>極限電容層數達3層時啟用 +15% 撕裂；低於3層時不提供此效果。</li><li>達門檻後效果固定為15%，第4層起不再增加。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/96e3fb15-c1fd-4702-a6ef-0f69b10931fe" width="32" height="32" alt="資源最佳化聖歌天賦圖示"> [資源最佳化聖歌](#cryptic_redline_extra_max_stacks)<br>- Resource Optimisation Canticles | <ul><li>使戰鬥技能最大充能再增加1道，並將極限電容層數上限由4層提高至5層。</li><li>極限電容每層的韌性減傷仍依原本5%步進；5層時承受的韌性傷害為原始值的75%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/de2e3c8c-8b4c-4859-87d0-c1416c07ef5c" width="32" height="32" alt="強化電容協議天賦圖示"> [強化電容協議](#cryptic_dissector_ability_stacks)<br>- Enhanced Capacitance Protocols | <ul><li>使用戰鬥技能時，將削切協議補至目前上限。</li><li>層數仍沿用削切協議的受傷失層規則，並保留其每層傷害與韌性減傷。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/d7c8f168-1f4e-42cc-a3d7-926d3b4382f1" width="32" height="32" alt="動力驅動天賦圖示"> [動力驅動](#cryptic_overload_keystone_abilities)<br>- Powerdrive | <ul><li>每消耗完整1份戰鬥技能充能，增加5層能量超載；鎖定姿態在結束時結算。</li><li>弦爪連續出招期間，只有首次啟用計入；累積達30層便觸發超載並歸零。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/e1ca03f4-8152-4fa6-9b43-0780a40ae7ca" width="32" height="32" alt="崇高意圖天賦圖示"> [崇高意圖](#cryptic_dissector_power)<br>- Higher Purpose | <ul><li>精英或專家擊殺額外恢復戰鬥技能充能資源2.5%；這是加在護教軍原有的精英／專家擊殺4%恢復上，合計6.5%。</li><li>以單份充能為基準；進階戰鬥教範啟用期間不會觸發。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/d199d3e7-4b94-4288-bf17-acbd915bdeaf" width="32" height="32" alt="脈衝延伸天賦圖示"> [脈衝延伸](#cryptic_redline_toughness)<br>- Surge-Extension | <ul><li>每次補回或消耗戰鬥技能充能，在5秒內恢復最大韌性的25%。</li><li>再次觸發會重設恢復期間，不提高每秒恢復速率；一次變動多份充能仍只觸發一次。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/6ce866b5-8bad-4668-94c0-c0c6c5a06944" width="32" height="32" alt="能量載分配鏈路天賦圖示"> [能量載分配鏈路](#cryptic_crits_grant_tdr)<br>- Power Redistribution Uplink | <ul><li>暴擊命中後，3 秒內恢復 7.5% 韌性</li><li>期間承受的韌性傷害降低 15%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ea4be2ad-8b84-4e83-a056-993beed7b39c" width="32" height="32" alt="適應性戰鬥記憶體天賦圖示"> [適應性戰鬥記憶體](#cryptic_dr_on_toughness_break)<br>- Adaptive Combat Engram | <ul><li>韌性耗盡後，減少 30% 承受傷害、持續 5 秒</li><li>效果結束後冷卻 15 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4738c3e6-2609-414c-9c00-f50fea4dcef3" width="32" height="32" alt="閃避伺服恢復天賦圖示"> [閃避伺服恢復](#cryptic_successful_dodge_stamina)<br>- Evasive Servo Recovery | <ul><li>成功閃避恢復 10% 耐力</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d9876bb9-a417-45e8-814c-acbc24233120" width="32" height="32" alt="歐姆尼賽亞充能聖歌天賦圖示"> [歐姆尼賽亞充能聖歌](#cryptic_multi_hits_restore_toughness)<br>- Omnissian Recharge Litany | <ul><li>單次攻擊命中至少 3 名敵人</li><li>3 秒內恢復 10% 韌性</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8f013bd2-f685-4be4-8678-11ac630d6659" width="32" height="32" alt="原初動力導流天賦圖示"> [原初動力導流](#cryptic_stamina_increases_damage)<br>- Channelled Motive Force | <ul><li>累計消耗 1 格耐力，傷害提高 15%、持續 4 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/98a10c08-52e1-47bf-a288-a2043ba40a63" width="32" height="32" alt="熵能轉移天賦圖示"> [熵能轉移](#cryptic_electrocution_toughness)<br>- Entropic Transfer | <ul><li>施加電擊或重設其持續時間後，4 秒內恢復 12% 韌性</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/74c8388d-8388-4646-8a91-0eb056656036" width="32" height="32" alt="過載轉移晶格天賦圖示"> [過載轉移晶格](#cryptic_electrocution_defense)<br>- Overcharge Transfer Lattice | <ul><li>遭近戰傷害時電擊攻擊者周圍 2.5 公尺敵人</li><li>冷卻 15 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4d3197de-7f15-46b8-9df6-153fd0f94642" width="32" height="32" alt="精準思算機同步天賦圖示"> [精準思算機同步](#cryptic_weakspot_damage)<br>- Sureshot Cogitator Sync | <ul><li>弱點額外傷害提高 25%</li><li>實際增幅隨武器與命中條件改變</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/dca309fd-773f-4a07-a659-cfb320cd14a9" width="32" height="32" alt="電擊破壞協定天賦圖示"> [電擊破壞協定](#cryptic_pushing_grants_cleave)<br>- Shockline Breach Protocol | <ul><li>推中敵人後，近戰順劈提高 50%、持續 8 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/26c97989-2f88-46ee-9bf3-f9f02b09c0f3" width="32" height="32" alt="輻射槽天賦圖示"> [輻射槽](#cryptic_stacking_ranged_damage)<br>- Rad-Sink | <ul><li>停止射擊 1 秒獲得 10% 遠程增傷</li><li>2 秒達上限 20%，再次射擊後重算</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5208032b-aaaf-4801-b84c-6fdbaab1735b" width="32" height="32" alt="漸進裝甲矩陣天賦圖示"> [漸進裝甲矩陣](#cryptic_stacking_tdr)<br>- Progressive Plating Matrix | <ul><li>命中後累積韌性減傷，每層 2.5%</li><li>最多 6 層，持續 5 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/eb093286-7cce-40e8-b518-3b5bc16dd38d" width="32" height="32" alt="報應導管天賦圖示"> [報應導管](#cryptic_damage_vs_electrocuted_scaling_on_charge)<br>- Retribution Conduit | <ul><li>對電擊目標提高 10% 傷害</li><li>每份完整電容量再增加 5%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/77cad8a5-5837-45fe-98a7-549e27e5d738" width="32" height="32" alt="電流標記陣列天賦圖示"> [電流標記陣列](#cryptic_elite_kills_damage)<br>- Galvanic Marking Array | <ul><li>以遠程攻擊擊殺精英，每次提高 5% 傷害</li><li>最多 4 層，每 15 秒衰減一層</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/003d8e80-1bb4-46b0-aad1-e2f6d78be693" width="32" height="32" alt="自我修復教義天賦圖示"> [自我修復教義](#cryptic_toughness_per_charge)<br>- Auto-Repair Doctrines | <ul><li>每秒恢復 3% 韌性</li><li>每份完整電容量再增加每秒 0.5%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5e8556aa-e9d9-4400-a863-bb26a5f11e17" width="32" height="32" alt="絕境中繼天賦圖示"> [絕境中繼](#cryptic_crit_chance_based_on_charge)<br>- Last Stand Relay | <ul><li>爆擊率增加 6 個百分點</li><li>沒有完整電容量時提高至 10 個百分點</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4683657a-edf5-4420-b60f-68eddc85ef43" width="32" height="32" alt="弱點分析教義天賦圖示"> [弱點分析教義](#cryptic_afflicted_increased_damage)<br>- Weakness Analysis Doctrine | <ul><li>命中電擊、燃燒、靈魂之火、流血或中毒敵人</li><li>傷害提高 10%、持續 8 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/bc0f3370-fa34-406f-9e0d-91e23b98f1f2" width="32" height="32" alt="離格動作例程天賦圖示"> [離格動作例程](#cryptic_mobile_defense)<br>- Ablative Motion Routines | <ul><li>有耐力衝刺或滑行時，承受傷害降低 25%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/dbeb2660-6b6d-4b09-b33a-bd21aef50f59" width="32" height="32" alt="能量溢流天賦圖示"> [能量溢流](#cryptic_shared_toughness)<br>- Power Overflow | <ul><li>韌性已滿時，將恢復量的 25% 分享給每位協同隊友</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/127fa97e-a0cf-4421-bff2-7edb8edaed86" width="32" height="32" alt="目標殲滅回饋天賦圖示"> [目標殲滅回饋](#cryptic_stun_suppression_immune)<br>- Target-Neutralization Feedback | <ul><li>弱點擊殺後，5 秒內免疫一般僵直與壓制</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/79eb4aea-82d8-46fb-add1-a4ded8e41cce" width="32" height="32" alt="二元彈道協議天賦圖示"> [二元彈道協議](#cryptic_elite_kills_toughness)<br>- Binary Ballistics Protocol | <ul><li>擊殺精英後，3 秒內恢復 15% 韌性</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6d7a17f5-be3e-4659-bc09-84cfb22bd20f" width="32" height="32" alt="力量分配致動器天賦圖示"> [力量分配致動器](#cryptic_push_stagger_stamina)<br>- Force Distribution Actuators | <ul><li>耐力至少 50% 時，推擊衝擊提高 75%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/29715f83-8068-4375-9aa9-d00c34e8d8f3" width="32" height="32" alt="卓越追蹤聖歌天賦圖示"> [卓越追蹤聖歌](#cryptic_no_braced_movement_penalty)<br>- Superior Tracking Litanies | <ul><li>架槍／瞄準的移動速度懲罰減半</li><li>射擊散布降低 45%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d01cfadc-7ba2-4505-b70a-11c22405645a" width="32" height="32" alt="液壓衝擊天賦圖示"> [液壓衝擊](#cryptic_better_heavies)<br>- Hydraulic Impact | <ul><li>蓄力近戰攻擊時不易被一般受擊打斷</li><li>近戰重擊傷害提高 15%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f8248e1e-3923-42b3-9afb-abed0c3ac1e9" width="32" height="32" alt="混合戰鬥契約天賦圖示"> [混合戰鬥契約](#cryptic_hybrid_damage)<br>- Hybrid Combat Covenant | <ul><li>近戰擊殺提高遠程傷害，遠程擊殺提高近戰傷害</li><li>每層 3%，各最多 5 層，每 8 秒衰減一層</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/eae28459-1a70-43fc-a5ff-35d2b3adc0eb" width="32" height="32" alt="動能分配器天賦圖示"> [動能分配器](#cryptic_toughness_on_damage_taken)<br>- Kinetic Energy Distributors | <ul><li>受到生命傷害後，5 秒內恢復 25% 韌性</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8c6107b2-c1ee-4fa6-9465-919f3c4d9d8b" width="32" height="32" alt="無限抑制器天賦圖示"> [無限抑制器](#cryptic_melee_attacks_give_melee_attack_speed)<br>- Uncapped Arrestor | <ul><li>近戰攻擊命中後，每次增加 2.5% 近戰攻速</li><li>最多 5 層，持續 3 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a754db43-e82a-44d0-af91-ea8d874d8c3c" width="32" height="32" alt="電擊打擊導管天賦圖示"> [電擊打擊導管](#cryptic_melee_crits_electrocute_first)<br>- Electro-Strike Conduit | <ul><li>近戰爆擊會電擊第一個命中目標</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6e39714f-23a2-4d43-b5ae-6cfe4fa9b214" width="32" height="32" alt="槍械技師天賦圖示"> [槍械技師](#cryptic_auto_reload)<br>- Gunsmith | <ul><li>裝填速度提高 15%</li><li>停止射擊 5 秒後，每秒從備用彈藥填入彈匣容量的 7.5%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c9876de0-2e5d-4421-9bee-326ac0c92290" width="32" height="32" alt="暗殺協議天賦圖示"> [暗殺協議](#cryptic_ranged_vs_bfg)<br>- Assassination Protocols | <ul><li>對歐格林、怪獸與隊長的遠程傷害提高 25%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/7f79455c-bf29-4b78-8706-dda075acb8d0" width="32" height="32" alt="系統電擊天賦圖示"> [系統電擊](#cryptic_electrocution_applies_brittleness)<br>- System Shock | <ul><li>施加電擊或重設其持續時間時增加 3 層脆弱</li><li>每層 2.5%，持續 5 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d265085f-7abd-4433-adc1-3f0276351436" width="32" height="32" alt="彈藥預知天賦圖示"> [彈藥預知](#cryptic_ammo_reserve)<br>- Ammo-Cell Augury | <ul><li>儲備用彈藥藥上限增加 25%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/bb7b86c4-512f-495f-a82a-7011cae498d6" width="32" height="32" alt="電能修復天賦圖示"> [電能修復](#cryptic_coherency_toughness_on_ability)<br>- Voltaic Restoration | <ul><li>使用戰鬥技能，為自己與協同隊友恢復 20% 韌性</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a86f113d-1a3e-4fc6-b1d1-24fe727b118d" width="32" height="32" alt="救贖教範天賦圖示"> [救贖教範](#cryptic_revive_speed_and_dr)<br>- Salvation Doctrine | <ul><li>援助隊友時減少 25% 承受傷害</li><li>援助速度提高 25%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/5330c87c-7abe-4993-8eb2-5cb11586c013" width="32" height="32" alt="彈藥補給艙天賦圖示"> [彈藥補給艙](#cryptic_passive_ammo_replenishment)<br>- Ammunition-Restoration Pod | <ul><li>每 15 秒恢復儲備用彈藥藥上限的 1%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/9e58fba3-e137-4f3e-89c3-ea7f5ebb0f24" width="32" height="32" alt="持續攻擊教義天賦圖示"> [持續攻擊教義](#cryptic_stacking_melee_damage)<br>- Sustained Assault Doctrine | <ul><li>近戰攻擊命中後，每次提高 3% 傷害</li><li>最多 5 層，持續 8 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e3f4e5a5-52c8-489e-a83f-3bf13c80eca8" width="32" height="32" alt="鍍鋅精密塗層天賦圖示"> [鍍鋅精密塗層](#cryptic_stun_dr_power)<br>- Galvanized Coating | <ul><li>常駐一般受擊僵直免疫與 15% 減傷</li><li>受到近戰傷害時消耗單份電容量的 7.5%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/78378820-be56-4a92-bd07-f6275c55fa47" width="32" height="32" alt="莫比亞導體天賦圖示"> [莫比亞導體](#cryptic_damage_on_ability)<br>- Moebian Conductor | <ul><li>啟動戰鬥技能後，傷害提高 15%、持續 10 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/233341e1-6bfd-4027-9641-610ec8733e45" width="32" height="32" alt="伺服核心充能引擎天賦圖示"> [伺服核心充能引擎](#cryptic_weakspot_kills_restore_toughness)<br>- Servo-Core Recharge Engine | <ul><li>弱點擊殺立即恢復 5% 韌性</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ed3453a6-4290-4ca6-a37e-0d19046b048e" width="32" height="32" alt="適應性戰鬥校準天賦圖示"> [適應性戰鬥校準](#cryptic_cleave_and_impact)<br>- Adaptive Combat Calibration | <ul><li>韌性高於 50%：近戰順劈提高 30%</li><li>韌性不高於 50%：近戰衝擊提高 30%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f34040ff-ebd0-4f7e-b857-4557ccdee00c" width="32" height="32" alt="剩餘電流緩衝天賦圖示"> [剩餘電流緩衝](#cryptic_tdr_based_on_charge)<br>- Residual Current Buffer | <ul><li>常駐 10% 韌性減傷</li><li>每份完整電容量再增加 2.5%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/deb63065-b15d-498f-a16c-ec7726ca6a22" width="32" height="32" alt="卓越防禦記憶模組天賦圖示"> [卓越防禦記憶模組](#cryptic_ranged_stacking_toughness)<br>- Superior Defence Engrams | <ul><li>遠程擊殺疊層，每層每秒恢復 1% 韌性</li><li>最多 5 層，持續 8 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f821891a-e246-41c9-ae45-97f93d0b8547" width="32" height="32" alt="標記優先聖詩天賦圖示"> [標記優先聖詩](#cryptic_specials_marking)<br>- Target Prioritization Psalms | <ul><li>顯示 12.5 公尺內專家敵人的輪廓</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/53a3e76f-67fe-4d9e-bff5-7aafaee21065" width="32" height="32" alt="守護協議天賦圖示"> [守護協議](#cryptic_disabled_allies_defense)<br>- Protectorate Protocol | <ul><li>協同隊友失去行動能力時，受到傷害降低 25%</li><li>親自救援後，再給 6 秒減傷與一般僵直免疫</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/0bbe1f46-d58e-414d-9ab3-1c8ed0170a41" width="32" height="32" alt="數據感應協定天賦圖示"> [數據感應協定](#cryptic_ally_coherency_defenses)<br>- Data Sensor Protocol | <ul><li>你或協同隊友受到韌性傷害，受傷者恢復 25% 耐力</li><li>受到生命傷害則恢復 25% 韌性，兩類各冷卻 15 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/0a7a0b4b-9d65-4b36-9825-ed610ad0a3ae" width="32" height="32" alt="序列充能天賦圖示"> [序列充能](#cryptic_strength_on_charge_gain)<br>- Sequenced Charge | <ul><li>獲得完整電容量時，威力提高 12.5%、持續 10 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/b22c3c3e-70a0-4411-99a5-63bcf1a6fa5a" width="32" height="32" alt="屠殺協議天賦圖示"> [屠殺協議](#cryptic_toughness_replenishment_on_kill_bonus)<br>- Slaughter Protocol | <ul><li>近戰擊殺的原有韌性恢復量提高 25%</li><li>沒有完整電容量時提高至 50%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a18e19ec-6cad-4a2c-996b-6e7eddf47195" width="32" height="32" alt="精準戰鬥探測儀天賦圖示"> [精準戰鬥探測儀](#cryptic_next_hit_all_damage_on_dodge)<br>- Precision Combat Augurs | <ul><li>成功閃避後，下次近戰攻擊或射擊傷害提高 15%</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/80106b42-e788-43cb-a07a-ee69f668002f" width="32" height="32" alt="電流爆發天賦圖示"> [電流爆發](#cryptic_electrocution_push)<br>- Voltaic Burst | <ul><li>推擊造成踉蹌時施加電擊</li><li>冷卻 12 秒</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/1c4ea759-440c-48dd-bc21-3bc8303683d5" width="32" height="32" alt="抗腐護符天賦圖示"> [抗腐護符](#cryptic_corruption_resistance_doom)<br>- Ablative Wards | <ul><li>受到的腐敗減少 90%</li><li>每 20 秒付出基準 1 點腐敗代價</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a2e228da-729a-4b03-b07a-72bfaadf5dc3" width="32" height="32" alt="威脅偵測指令天賦圖示"> [威脅偵測指令](#cryptic_ranged_kills_tdr)<br>- Threat Detection Imperative | <ul><li>遠程擊殺每層減少 4% 韌性傷害</li><li>最多 5 層，每 8 秒衰減一層</li></ul> | 技能 |

---

## 閃擊

<a id="cryptic_grenade_ability_force_field"></a>
### 整合型艾曼納圖斯力場(Integrated Refraction Emitter)

<img src="https://github.com/user-attachments/assets/d45e19a1-d480-42db-bd0c-70ed43aba9aa" width="72" height="72" alt="整合型艾曼納圖斯力場天賦圖示">

- **運作方式**：指定並啟動艾曼納圖斯力場，在你周圍展開可吸收遠程攻擊的護盾，持續8秒；啟動與結束時會電擊5公尺內敵人。

- **運作方式**：基礎有3次使用次數，每次啟動消耗1次；不計其他修正時，每次需75秒恢復，3次全用完後恢復全部需225秒。

[詳細資料](cryptic_grenade_ability_force_field.md) · [返回目錄](#talent-index)

---

<a id="cryptic_flamethrower"></a>
### 滌罪伺服頭骨(Purgator Servo-Skull)

<img src="https://github.com/user-attachments/assets/295017d9-50cd-4797-8b33-bd3627a7139f" width="72" height="72" alt="滌罪伺服頭骨天賦圖示">

- **運作方式**：額外獲得一台噴火伺服頭骨；指定地面區域後，它會移動到位置並噴火，火焰最多作用15秒、射程10公尺。

- **運作方式**：使用主要動作可切換擴散與集中模式。每次下令噴火會消耗1次閃擊使用次數。

- **算例**：基礎上限3次；若也選擇醫療伺服頭骨，上限增加2次至5次，噴火與救援共用這5次使用次數。

[詳細資料](cryptic_flamethrower.md) · [返回目錄](#talent-index)

---

<a id="cryptic_servo_skull_inject_ally"></a>
### 醫療伺服頭骨(Medicae Servo-Skull)

<img src="https://github.com/user-attachments/assets/adeeeef3-0c2e-450a-974b-66ce6c6366bd" width="72" height="72" alt="醫療伺服頭骨天賦圖示">

- **運作方式**：額外獲得一台醫療伺服頭骨；標記倒地、被綁或被網住且需要協助的隊友，即可派它前往救援。

- **運作方式**：救援會使隊友起身，之後5秒內所受韌性傷害降至原本的25%，並每秒恢復相當於最大韌性的20%。

- **算例**：若隊友最大韌性為100，恢復期間每秒恢復20韌性，最多可恢復100；每次救援消耗1次閃擊使用次數，並與噴火伺服頭骨共用。

- **救援限制**：無法救起懸掛在邊緣的隊友。若救援失敗且你仍存活，會退回這次消耗的使用次數。

[詳細資料](cryptic_servo_skull_inject_ally.md) · [返回目錄](#talent-index)

---

<a id="cryptic_grenade_ability_arc_grenade"></a>
### 電弧手榴彈(Arc Grenades)

<img src="https://github.com/user-attachments/assets/6a4875ee-4056-4964-ae36-846e598954bc" width="72" height="72" alt="電弧手榴彈天賦圖示">

- **運作方式**：爆炸半徑10公尺，最多向4名敵人發出電弧；優先選取特定重甲敵人，再尋找其他精英與有效目標。每道電弧可再連鎖附近敵人。

- **連鎖範圍**：每條電弧可在12公尺內連鎖最多5次；實際命中數取決於附近是否有有效敵人。

- **電擊傷害**：範圍爆炸與電弧跳躍本身不直接扣血，傷害來自電弧命中後的持續電擊。電擊持續約1.1秒，每0.2秒結算一次；單次傷害會隨敵人護甲與其他加成改變。

- **傷害算例**：假設對某目標每次電擊造成12點傷害，這次實際結算5次，合計12 × 5 = 60點。此例只示範加總方式，並非所有敵人固定受到60點傷害。

- **擊殺回充**：電弧手榴彈或其電弧擊殺精英、專家時，每次恢復0.04份電容量。

- **算例**：擊殺3名符合條件的敵人，共恢復3×0.04=0.12份電容量；手雷本身最多有3次使用次數。

- **電容量算例**：單份50點時，每名合格擊殺額外恢復50 × 4% = 2點；擊殺3名合計6點。此為手雷額外效果，職業原有擊殺回充另計。

- **使用次數**：基礎可攜帶3顆；不會像力場一樣隨時間自行補充。

[詳細資料](cryptic_grenade_ability_arc_grenade.md) · [返回目錄](#talent-index)

---

<a id="cryptic_servo_skull_improved"></a>
### 匠師伺服頭骨(Artificer Servo-Skull)

<img src="https://github.com/user-attachments/assets/0efafa0a-aad0-4bb8-869f-133db37cf152" width="72" height="72" alt="匠師伺服頭骨天賦圖示">

- **運作方式**：伺服頭骨會跟隨你；雙擊標記鍵可命令它攻擊有效敵人，也可命令它解碼可互動的資料終端。

- **運作方式**：基礎伺服頭骨強化改為常駐：頭骨射擊傷害提高25%，射擊冷卻縮短一半。

- **算例**：以原本每發100傷害、3秒射擊冷卻為例，常駐加成後每發125傷害、冷卻1.5秒。頭骨射中敵人時，該敵人5秒內承受傷害提高15%，並增加1層燃燒；最多8層，達上限時重設燃燒的持續時間。

[詳細資料](cryptic_servo_skull_improved.md) · [返回目錄](#talent-index)

---

<a id="cryptic_arc_grenades_brittleness"></a>
### 超載電弧手榴彈(Overcharged Arc Grenades)

<img src="https://github.com/user-attachments/assets/14c1a0d8-2916-40d7-a7e2-8572a0b3e6d2" width="72" height="72" alt="超載電弧手榴彈天賦圖示">

- **運作方式**：電弧手榴彈的起始電弧上限由4道增加至6道；每道電弧可再連鎖的次數維持不變。

- **運作方式**：被電弧連鎖擊中的敵人會獲得8層脆弱，每層2.5%，持續5秒。

- **算例**：單次電弧命中可施加8×2.5%=20%脆弱；再次命中可繼續疊加，最多16層，即40%。

- **傷害算例**：只比較護甲階段，假設護甲前100點、原倍率0.5且該護甲的撕裂係數為1，8層脆弱會讓傷害由100 × 0.5 = 50點提高至100 × (0.5 + 20%) = 70點。16層則為90點；跨過護甲倍率1時須另算。

[詳細資料](cryptic_arc_grenades_brittleness.md) · [返回目錄](#talent-index)

---

<a id="cryptic_arc_grenades_weapon_malfunction"></a>
### 強化電弧手榴彈(Enhanced Arc Grenades)

<img src="https://github.com/user-attachments/assets/501bab77-4618-480e-80e8-3abb022f6a68" width="72" height="72" alt="強化電弧手榴彈天賦圖示">

- **運作方式**：電弧手榴彈爆炸或其電弧命中適用的遠程敵人時，會令其遠程武器故障，通常持續12秒。

- **時間算例**：第0秒命中後，故障原訂第12秒結束；若第8秒再次命中，改至8 + 12 = 第20秒結束。部分敵人仍會改用近戰攻擊。

- **運作方式**：標準電弧手榴彈爆炸半徑為10公尺；是否造成武器故障還取決於目標是否支援此狀態。

- **持續電擊限制**：後續反覆電擊不會再次觸發或延長武器故障；須由另一個合格的爆炸或電弧命中才能重新計時。

[詳細資料](cryptic_arc_grenades_weapon_malfunction.md) · [返回目錄](#talent-index)

---

<a id="cryptic_force_field_duration_increase"></a>
### 過載艾曼納圖斯力場(Overcharged Refraction Emitter)

<img src="https://github.com/user-attachments/assets/e70f3e4b-d2c2-4840-bc29-56ba85dd816d" width="72" height="72" alt="過載艾曼納圖斯力場天賦圖示">

- **運作方式**：艾曼納圖斯力場持續12秒，比基礎8秒多4秒。

- **運作方式**：力場啟動時、持續時間中點及結束時都會引發電擊爆炸；正常完整持續時，額外爆炸發生在啟動後6秒。

- **算例**：12秒力場的中點為12÷2=6秒，因此三次爆炸分別在0秒、6秒與12秒附近發生；每次影響範圍仍為5公尺。

[詳細資料](cryptic_force_field_duration_increase.md) · [返回目錄](#talent-index)

---

<a id="cryptic_force_field_capacitance_restore"></a>
### 動能排斥(Kinetic Repulsion)

<img src="https://github.com/user-attachments/assets/9eb6e468-224f-4d7c-b696-cc58aa08f532" width="72" height="72" alt="動能排斥天賦圖示">

- **運作方式**：艾曼納圖斯力場每吸收一次遠程攻擊，恢復0.025份電容量；每次力場最多恢復0.75份。

- **算例**：吸收10次遠程攻擊恢復0.25份；吸收30次達0.75份上限，之後不再增加。

- **運作方式**：這項效果補充戰鬥技能電容量，不會補回力場已消耗的使用次數。

- **點數算例**：單份電容量為50點時，每次吸收恢復50 × 2.5% = 1.25點；30次最多恢復50 × 75% = 37.5點。依吸收次數計算，單次攻擊傷害較高不會恢復更多。

[詳細資料](cryptic_force_field_capacitance_restore.md) · [返回目錄](#talent-index)

---

<a id="cryptic_servo_skull_improved_tagging"></a>
### 心智網指令(Noospheric Command)

<img src="https://github.com/user-attachments/assets/c365855a-e85f-4d0d-8156-4048ae9f7e02" width="72" height="72" alt="心智網指令天賦圖示">

- **運作方式**：標記一名有效敵人並雙擊標記鍵，命令伺服頭骨攻擊；啟動後2秒內，頭骨射擊冷卻縮短至原本的15%。

- **算例**：原本3秒的射擊冷卻變為0.45秒；完整2秒加速消耗0.3份電容量（相當於一份的30%）。

- **運作方式**：下令前至少要有0.3份電容量；訓練場不檢查這項門檻。

- **搭配匠師伺服頭骨**：常駐射擊間隔減半與本效果相乘。例如原本3秒，常駐強化後為1.5秒，再啟動指令為3 × 0.5 × 0.15 = 0.225秒；這是射擊間隔的計算，實際攻擊仍受瞄準與目標條件限制。

[詳細資料](cryptic_servo_skull_improved_tagging.md) · [返回目錄](#talent-index)

---

<a id="cryptic_force_field_arcs"></a>
### 電流抗性(Voltaic Resistance)

<img src="https://github.com/user-attachments/assets/ba6e0fe8-b601-433e-a423-8a6b8ee7b79b" width="72" height="72" alt="電流抗性天賦圖示">

- **運作方式**：艾曼納圖斯力場結束時，依吸收的遠程攻擊次數發射電弧：0至6次發射1道、7至12次發射2道、13至18次發射3道、19次以上最多4道。

- **算例**：即使沒有吸收遠程攻擊，力場到期時仍會嘗試發射1道；前方12公尺內有有效敵人時才會命中目標。

- **運作方式**：每道電弧可在附近敵人間連鎖最多4次；實際連鎖仍取決於周圍是否有有效目標。

[詳細資料](cryptic_force_field_arcs.md) · [返回目錄](#talent-index)

---


---

## 光環

<a id="cryptic_coherency_regen_aura_improved"></a>
### 復甦(Resurgence)

<img src="https://github.com/user-attachments/assets/7090c8fb-aaaa-4015-a5c1-21e7093507be" width="72" height="72" alt="復甦天賦圖示">

- **運作方式**：獲得25點韌性；你與協同範圍內隊友即使附近有敵人，協同韌性恢復速率仍至少為一般速率的50%。

- **算例**：若一般協同恢復速率為每秒10點，你和隊友在戰鬥中的最低速率為10×50%=每秒5點；在恢復沒有中斷且缺額足夠時，4秒恢復20點，受韌性缺額與個人恢復修正影響。

- **恢復條件**：仍須等受傷後的韌性恢復延遲結束，並保有正常的協同恢復；本效果不會取消恢復延遲，也不會讓韌性超過上限。

[詳細資料](cryptic_coherency_regen_aura_improved.md) · [返回目錄](#talent-index)

---

<a id="cryptic_ammo_aura"></a>
### 彈藥存放(Ammunition Deposit)

<img src="https://github.com/user-attachments/assets/59dcc637-0b0f-4f3b-8e79-f4fdf53b6cef" width="72" height="72" alt="彈藥存放天賦圖示">

- **運作方式**：獲得25點韌性；儲備用彈藥藥容量提高15%。

- **算例**：原本最多攜帶101發儲備用彈藥藥，增加15%後為101 × 1.15 = 116.15，向下取整為116發；目前儲備數也會隨容量變更調整。

- **作用範圍**：彈藥容量加成提供給你與任務中由玩家操控的隊友，不要求待在協同範圍內；多名隊友選用這項天賦，容量加成仍為15%。

[詳細資料](cryptic_ammo_aura.md) · [返回目錄](#talent-index)

---

<a id="cryptic_aura_weapon_improved"></a>
### 碎敵信條(Foe-Render Creed)

<img src="https://github.com/user-attachments/assets/a48f1d74-488a-42d3-a59d-33d55135dad2" width="72" height="72" alt="碎敵信條天賦圖示">

- **運作方式**：你的最大韌性增加25點；你與協同範圍內的隊友獲得15%順劈及7.5%撕裂。

- **順劈算例**：若攻擊原本能穿透的目標質量總額為10點，增幅後為10 × 1.15 = 11.5點；實際多命中幾名敵人取決於敵人質量與武器限制。

- **撕裂算例**：只比較護甲階段，假設護甲前100點傷害、原護甲倍率0.5，且此護甲類型的撕裂係數為1，結果由100 × 0.5 = 50點變成100 × (0.5 + 0.075) = 57.5點。跨過護甲倍率1時另有換算，不能視為所有命中直接增加7.5%傷害。

[詳細資料](cryptic_aura_weapon_improved.md) · [返回目錄](#talent-index)

---


---

## 能力

<a id="cryptic_chordclaw"></a>
### 弦爪重擊(Chordclaw Strike)

<img src="https://github.com/user-attachments/assets/af7ec3de-6e36-4171-8be2-d385177b170e" width="72" height="72" alt="弦爪重擊天賦圖示">

- **運作方式**：啟動弦爪重擊消耗1份電容量，基礎上限3份，其他天賦可增加上限；弦爪重攻擊必定暴擊，並提高50%撕裂。

- **運作方式**：啟動後弦爪效果還會提高近戰傷害30%並免疫眩暈。撕裂影響對防護的傷害計算；必定暴擊不代表對所有敵人造成固定生命傷害。

- **傷害算例**：只比較30%近戰加成，固定護甲、暴擊與其他條件後，原100點變成100 × (1 + 30%) = 130點；若同階段已有20%加成，則是100 × (1 + 20% + 30%) = 150點。撕裂與暴擊另依目標計算。

- **充能與持續**：每次消耗一份50點電容量，沒有其他恢復加成時需50秒補回。攻擊效果最長10秒，切換離開弦爪時結束；連續再次發動會消耗充能，但不會重新觸發依賴首次啟用的能力效果。

[詳細資料](cryptic_chordclaw.md) · [返回目錄](#talent-index)

---

<a id="cryptic_precision_stance_toughness_suppression"></a>
### 修復協定(Restoration Protocol)

<img src="https://github.com/user-attachments/assets/eb879996-8768-4102-8799-0fecaf6f7a98" width="72" height="72" alt="修復協定天賦圖示">

- **啟動效果**：開啟進階戰鬥教範時，立即清除身上的壓制；這次清除不代表接下來全程免疫壓制。

- **恢復方式**：架勢維持期間，每秒恢復最大韌性的 10%，直到架勢結束；仍受恢復加成與韌性上限影響。

- **恢復算例**：最大韌性 150、沒有其他恢復加成時，每秒恢復 150 × 10% = 15 點，維持 4 秒可恢復 60 點。

#### 繁中原文勘誤

- 原文寫「每秒恢復{toughness}點韌性」，但此欄位本身是百分比；正確效果是每秒恢復最大韌性的10%。最大韌性150時為每秒15點，不是固定10點。

[詳細資料](cryptic_precision_stance_toughness_suppression.md) · [返回目錄](#talent-index)

---

<a id="cryptic_precision_stance_fire_rate_increased"></a>
### 彈藥盤點之旨(Writ of Ammunition Enumeration)

<img src="https://github.com/user-attachments/assets/ac9ea4d6-352f-4ad1-95f2-a2de10d39d2d" width="72" height="72" alt="彈藥盤點之旨天賦圖示">

- **運作方式**：進階戰鬥教範啟動期間，遠程射速提高 15%；連續維持 4 秒後，提高至總共 30%。

- **重置條件**：離開架勢後加成消失；重新啟動會從 15% 開始重新計算 4 秒。

- **射速算例**：原本每秒 5 發，單看受此倍率影響的射速，初期為 5 × 1.15 = 5.75 發／秒；4 秒後為 5 × 1.30 = 6.5 發／秒。其他動作與武器限制另計。

[詳細資料](cryptic_precision_stance_fire_rate_increased.md) · [返回目錄](#talent-index)

---

<a id="cryptic_discharge_generates_arcs"></a>
### 電流弧(Voltaic Arcs)

<img src="https://github.com/user-attachments/assets/9d074da8-541c-4fec-bc2b-47e53be42bad" width="72" height="72" alt="電流弧天賦圖示">

- **觸發方式**：使用電能發射器時，每消耗一份完整電容量，向前釋放一道電弧；消耗 3 份就釋放 3 道。

- **作用範圍**：初始目標需在前方 12 公尺內且仍存活。每道電弧可繼續向附近有效目標連鎖，最多 4 次，造成電擊傷害與衝擊。

- **例外**：附近目標不足時，實際電弧或連鎖數會較少；傷害仍依護甲與攻擊結算，不能用電弧數直接當作生命傷害。

[詳細資料](cryptic_discharge_generates_arcs.md) · [返回目錄](#talent-index)

---

<a id="cryptic_discharge_attack_speed_increase"></a>
### 電能驅動(Voltaic Motivator)

<img src="https://github.com/user-attachments/assets/b74a0dba-64ed-40b6-b630-792c413387cd" width="72" height="72" alt="電能驅動天賦圖示">

- **運作方式**：使用電能發射器後，獲得 5% 攻擊速度，並按每份消耗的完整電容量再增加 5%，持續 15 秒。

- **攻速算例**：消耗 1、2、3 份時，合計增加 10%、15%、20%。若受影響的攻擊動作原需 1 秒，消耗 3 份後為 1 ÷ 1.20 ≈ 0.833 秒。

[詳細資料](cryptic_discharge_attack_speed_increase.md) · [返回目錄](#talent-index)

---

<a id="cryptic_discharge_toughness"></a>
### 電流超載(Voltaic Overcharge)

<img src="https://github.com/user-attachments/assets/dd369366-6fa1-4e92-bd7b-c92f5bf8023a" width="72" height="72" alt="電流超載天賦圖示">

- **啟動恢復**：使用電能發射器時，每消耗一份完整電容量，恢復最大韌性的 25%。

- **命中恢復**：放電命中一名仍存活的敵人，再恢復最大韌性的 1%；後續電弧或武器附加電擊不套用這個命中恢復。

- **恢復算例**：最大韌性 100、消耗 2 份並命中 5 名合格敵人時，100 × (2 × 25% + 5 × 1%) = 55 點；只缺 40 點就只補 40 點。

[詳細資料](cryptic_discharge_toughness.md) · [返回目錄](#talent-index)

---

<a id="cryptic_chordclaw_horizontal_swipe"></a>
### 軸向斬擊(Axial Slash)

<img src="https://github.com/user-attachments/assets/94595162-990c-418a-9bbc-9b3e90ed790b" width="72" height="72" alt="軸向斬擊天賦圖示">

- **運作方式**：選取軸向斬擊後，弦爪能力攻擊會由預設重刺改為橫向橫掃，仍必定暴擊。

- **運作方式**：橫掃可依武器攻擊穿透設定命中多個目標；實際目標數與生命傷害會受目標及命中結果影響。

- **目標順序算例**：只比較同部位、同護甲與相同修正的傷害分配，第二名相對第一名為480 ÷ 500 = 96%；若第一名受到100點，第二名為96點。第五名為100 × 360 ÷ 500 = 72點；實際結果仍依各目標條件計算。

- **按住施放**：快速啟用時使用橫掃；按住蓄力後施放，仍使用原本的重型刺擊。

[詳細資料](cryptic_chordclaw_horizontal_swipe.md) · [返回目錄](#talent-index)

---

<a id="cryptic_chordclaw_quick_stab_combo"></a>
### 試探連擊(Probing Strikes)

<img src="https://github.com/user-attachments/assets/7d516cae-80f0-4d48-b562-b5a21f6ddcd1" width="72" height="72" alt="試探連擊天賦圖示">

- **運作方式**：快速施放弦爪能力時，會接續使出3次快速刺擊；每次造成生命傷害的刺擊會讓該敵人增加6層流血。

- **運作方式**：三次刺擊全命中同一敵人時，最多新增18層流血；流血效果上限也是18層。

- **運作方式**：按住輸入會改用一般重攻擊，不會選擇這組三段快速刺擊。

- **持續時間**：流血持續9.5秒；再施加流血會重新計時。三次都對同一敵人造成傷害時，新增層數為6 + 6 + 6 = 18層，達到上限。

[詳細資料](cryptic_chordclaw_quick_stab_combo.md) · [返回目錄](#talent-index)

---

<a id="cryptic_crits_grant_power"></a>
### 通量導管蓄積(Flux Conduit Build-Up)

<img src="https://github.com/user-attachments/assets/c63720c4-df53-4c05-9881-cd6a6bf33c79" width="72" height="72" alt="通量導管蓄積天賦圖示">

- **運作方式**：暴擊後的4秒內，電容量恢復速度提高；按單份50點成本計，4秒額外恢復2.5點，相當於5%。

- **運作方式**：4秒內再次暴擊會重新計算這段期間，不會把每秒恢復速度堆疊得更高。

- **恢復算例**：單份電容量為50點時，額外恢復50 × 5% = 2.5點，分4秒恢復；加上原本每秒1點，4秒共恢復4 × (1 + 2.5 ÷ 4) = 6.5點。再次暴擊會延長這段加速期間。

[詳細資料](cryptic_crits_grant_power.md) · [返回目錄](#talent-index)

---

<a id="cryptic_weakspot_kills_grant_power"></a>
### 反應爐線圈充能(Reactor Coil Recharge)

<img src="https://github.com/user-attachments/assets/833b596d-dbc9-49fe-9f90-436140e700ed" width="72" height="72" alt="反應爐線圈充能天賦圖示">

- **運作方式**：以弱點命中並擊殺敵人時，恢復目前戰鬥技能單份成本的2%電容量；每份成本50點時，每次弱點擊殺恢復1點。

- **運作方式**：電容量進度會累積；每50點形成一份完整充能，未滿50點前仍保留進度。

[詳細資料](cryptic_weakspot_kills_grant_power.md) · [返回目錄](#talent-index)

---

<a id="cryptic_increased_passive_cooldown_regen"></a>
### 強化能量循環(Augmented Power-Cycle)

<img src="https://github.com/user-attachments/assets/39f22717-a782-4201-b5b3-f63a166bedd1" width="72" height="72" alt="強化能量循環天賦圖示">

- **恢復方式**：每秒額外恢復單份電容量的 1%，使基礎自然恢復速率由每秒 2% 提高至 3%。

- **時間算例**：沒有其他加成或持續消耗時，一份從空補滿需 100% ÷ 3% ≈ 33.33 秒，三份全空補滿需 300% ÷ 3% = 100 秒。

- **搭配能力**：進階戰鬥教範啟動、維持與射擊都另有消耗，不能用上述補滿時間估算架勢可維持多久。

[詳細資料](cryptic_increased_passive_cooldown_regen.md) · [返回目錄](#talent-index)

---

<a id="cryptic_multi_hits_grant_power"></a>
### 電容回收迴路(Capacitor Reclamation Loop)

<img src="https://github.com/user-attachments/assets/7557cf7d-9d8b-41ba-bff3-582bdcc5c063" width="72" height="72" alt="電容回收迴路天賦圖示">

- **運作方式**：同一次攻擊命中第3名敵人時，恢復目前戰鬥技能單份50點成本的1%，也就是0.5點電容量；命中更多敵人仍只因這次攻擊恢復一次。

- **運作方式**：每次恢復後至少等待0.25秒才可再次觸發；電容量小數會累積，50點才形成一份完整充能。

[詳細資料](cryptic_multi_hits_grant_power.md) · [返回目錄](#talent-index)

---

<a id="cryptic_discharge"></a>
### 電能發射器(Voltaic Emitter)

<img src="https://github.com/user-attachments/assets/637d6e54-1c81-434d-b5bc-d779d4d8674b" width="72" height="72" alt="電能發射器天賦圖示">

- **充能消耗**：發動時消耗目前已補滿的1至3份充能，單次最多3份。若有4或5份，多出的份數會保留；未滿一份的進度也不會消失。

- **放電效果**：使周圍12公尺內命中的敵人觸電2秒，期間受到持續電擊傷害。無論消耗1、2或3份，主放電半徑都是12公尺。

- **消耗2份以上**：另外干擾周圍30公尺內可受武器故障影響的敵人，通常持續12秒；部分敵人的持續時間不同。

- **消耗3份**：接下來15秒內，你的近戰或遠程攻擊命中仍存活的敵人，會使其觸電2秒。

- **消耗算例**：目前有185點電容量，相當於3份完整充能與第4份的70%進度；發動後消耗3 × 50 = 150點，剩35點。若只靠每秒1點自然恢復，再取得1份可用充能需要(50 − 35) ÷ 1 = 15秒。

- **傷害算例**：初始範圍效果本身不直接扣血，傷害來自後續電擊。假設對某目標每次電擊造成10點，這次實際結算4次，合計10 × 4 = 40點；實際傷害與次數隨目標及結算時序改變。

[詳細資料](cryptic_discharge.md) · [返回目錄](#talent-index)

---

<a id="cryptic_precision_stance"></a>
### 進階戰鬥教範(Advanced Combat Doctrines)

<img src="https://github.com/user-attachments/assets/fe67d92b-3b1a-4da7-bf6a-43bb643e80d6" width="72" height="72" alt="進階戰鬥教範天賦圖示">

- **瞄準效果**：切換至遠程武器，協助瞄準準星附近的敵人；持續期間散佈降低90%、後座力降低60%。不另提供固定的傷害加成。

- **啟動消耗**：至少有1份完整充能才能啟動，但實際只扣單份的25%。每份50點時，啟動消耗50 × 25% = 12.5點。

- **持續與射擊消耗**：每秒另扣單份的10%，即50 × 10% = 5點；每次射擊再扣50 × 1% = 0.5點。這些比例都以1份計算，充能上限提高不會增加每次扣除量。

- **持續時間算例**：只有1份、共50點時，啟動後剩37.5點；若不射擊、不換彈且沒有額外恢復，可維持37.5 ÷ 5 = 7.5秒。滿3份時則為(150 − 12.5) ÷ 5 = 27.5秒。

- **射擊算例**：滿3份啟動後，持續10秒並射擊20次，剩150 − 12.5 − 10 × 5 − 20 × 0.5 = 77.5點；此例不計換彈與額外恢復。

- **重新裝填**：換彈期間暫停每秒5點的持續消耗。重新裝填速度提高25%，結束姿態後保留5秒；沒有其他加成時，原本2秒的裝填縮為2 ÷ 1.25 = 1.6秒。

- **恢復限制**：啟用期間，基礎自然恢復與額外維持成本互相抵消；職業原有的擊殺回充也會停止。其他自然恢復加成仍可抵銷部分耗電，例如增加50%自然恢復時，每秒淨消耗5 − 0.5 = 4.5點。

- **結束與再用**：再次按下技能、切離遠程武器或電容量耗盡便結束。結束後恢復一般回充；從0點、只靠每秒1點自然恢復，要50秒才有1份可再次啟動。

[詳細資料](cryptic_precision_stance.md) · [返回目錄](#talent-index)

---

<a id="cryptic_chordclaw_capacitance_restoration"></a>
### 鋼鐵富足(Satiated Steel)

<img src="https://github.com/user-attachments/assets/756e60ad-5734-42a4-be62-759096344f67" width="72" height="72" alt="鋼鐵富足天賦圖示">

- **運作方式**：使用弦爪造成近戰擊殺後，接下來5秒額外恢復目前戰鬥技能單份50點成本的25%，共12.5點電容量。

- **運作方式**：5秒內再次以弦爪造成近戰擊殺會重新計算恢復期間，不會把每秒恢復速率疊高；一般自然恢復仍另行計算。

- **恢復算例**：50 × 25% = 12.5點，分5秒恢復，因此每秒額外恢復12.5 ÷ 5 = 2.5點。若未再次觸發且未提前補滿，完整5秒會得到這12.5點。

[詳細資料](cryptic_chordclaw_capacitance_restoration.md) · [返回目錄](#talent-index)

---

<a id="cryptic_chordclaw_consecutive_bonus"></a>
### 千刀萬剮(Slice and Dice)

<img src="https://github.com/user-attachments/assets/a4bee55e-0868-4104-89c8-e2009e89ae4d" width="72" height="72" alt="千刀萬剮天賦圖示">

- **運作方式**：每次啟動弦爪技能增加一層弦爪傷害加成，每層20%，最多3層；新層加入時重設5秒持續時間。

- **運作方式**：三層時共提高弦爪傷害60%。假設弦爪原始傷害為100，僅計此效果時約為120／140／160。

[詳細資料](cryptic_chordclaw_consecutive_bonus.md) · [返回目錄](#talent-index)

---

<a id="cryptic_precision_stance_crit_cleave"></a>
### 洞察之眼(Piercing Sight)

<img src="https://github.com/user-attachments/assets/bedef96d-1746-44a5-a482-1abe4e5e15c6" width="72" height="72" alt="洞察之眼天賦圖示">

- **運作方式**：進階戰鬥教範啟用時，遠程順劈增加30%，遠程爆擊率增加15個百分點；持續4秒後提高至60%與30個百分點。

- **順劈算例**：若攻擊原本有10點穿透質量額度，啟用後為10 × 1.3 = 13點，4秒後為10 × 1.6 = 16點。能穿過幾名敵人仍取決於目標質量與武器的停止穿透規則。

- **暴擊算例**：若原本遠程爆擊率7.5%，啟用後為7.5% + 15% = 22.5%；4秒後為7.5% + 30% = 37.5%。

- **持續條件**：能力關閉後失去兩項加成；再次啟用需重新等待4秒。

[詳細資料](cryptic_precision_stance_crit_cleave.md) · [返回目錄](#talent-index)

---

<a id="cryptic_precision_stance_damage_on_elite_kill"></a>
### 精算順序(Calculated Priority)

<img src="https://github.com/user-attachments/assets/9cbfaa3e-c8bf-42b8-98a4-5e5c6ee9c033" width="72" height="72" alt="精算順序天賦圖示">

- **運作方式**：進階戰鬥教範啟動時，以遠程攻擊擊殺精英敵人可獲得一層5%傷害加成，持續10秒。

- **運作方式**：最多累積5層，也就是5×5%=25%傷害加成；再次取得層數會重設這項加成的10秒持續時間。

- **傷害算例**：5層共增加5 × 5% = 25%。沒有其他加成時，100 × (1 + 25%) = 125點；若同階段原有20%，則為100 × (1 + 20% + 25%) = 145點。

- **持續時間**：關閉能力後，已取得的增傷仍保留至自身10秒倒數結束；之後的擊殺不再增加此效果。

[詳細資料](cryptic_precision_stance_damage_on_elite_kill.md) · [返回目錄](#talent-index)

---


---

## 鑰石

<a id="cryptic_dissector"></a>
### 削切協議(Flensing Protocols)

<img src="https://github.com/user-attachments/assets/856a3399-5f26-40e1-988e-8960086a92c9" width="72" height="72" alt="削切協議天賦圖示">

- **初始層數**：效果啟用時先有6層；「熟練解剖者」可把上限增加到8層。

- **每層效果**：傷害增加2.5%，韌性承傷倍率按層數變為1−2.5%×層數。6層時傷害增加15%，韌性承傷倍率為0.85，也就是少受15%韌性傷害；選用「熟練解剖者」並達8層時，傷害增加20%、韌性承傷倍率為0.80。沒有其他增傷時，100點基礎傷害分別變成115點或120點。

- **觸發方式**：受到生命或韌性傷害時移除1層；每1秒最多移除一次。沒有時間倒數，層數不會自行衰減。

- **擊殺恢復**：擊殺精英或專家敵人最多補回2層，並恢復相當於最大韌性15%的韌性。即使已達層數上限，擊殺仍會恢復韌性。

- **算例**：6層時受到一筆傷害會降為5層；1秒內再受傷不會再掉層，至少等1秒後的另一筆傷害才可再次移除。滿6層時，100點基礎攻擊傷害增加至115點；若同時承受100點原始韌性傷害，0.85倍率使實際韌性傷害為85點。擊殺精英時若只缺1層，只補1層，但仍恢復最大韌性15%。

[詳細資料](cryptic_dissector.md) · [返回目錄](#talent-index)

---

<a id="cryptic_redline"></a>
### 極限電容(Redline Capacitors)

<img src="https://github.com/user-attachments/assets/55fe932f-c298-4b33-ad21-efab7b9244e5" width="72" height="72" alt="極限電容天賦圖示">

- **觸發方式**：戰鬥技能實際消耗或補回充能時，每份充能增加1層；一次消耗2份充能會增加2層，最多4層。

- **每層效果**：電容量自然恢復速度每層提高5%，韌性傷害減免每層增加5%。滿4層時，原本每秒恢復單份電容量的2%，會變成2% × (1 + 20%) = 2.4%；原本100點韌性傷害變成100 × (1 − 20%) = 80點。

- **持續時間**：每層效果維持12秒；新增加層會重設倒數。到達4層後再次觸發不會超過上限，但會重設效果時間。沒有新觸發時，每12秒減少1層。

- **充能上限**：戰鬥技能充能上限由3份提高至4份。

- **恢復例外**：擊殺回充、弱點擊殺回充與「崇高意圖」的直接恢復量不會因這項加成提高。

[詳細資料](cryptic_redline.md) · [返回目錄](#talent-index)

---

<a id="cryptic_overload_keystone"></a>
### 能量超載(Power Overload)

<img src="https://github.com/user-attachments/assets/1f613b73-cb4f-4b13-8c3e-2355fe567ba3" width="72" height="72" alt="能量超載天賦圖示">

- **觸發方式**：你或協同中的隊友擊殺一般敵人增加1層；擊殺精英或專家敵人增加2層。

- **累積方式**：最多30層，沒有時間倒數。達到或超過30層時觸發過載並重置為0層。

- **過載效果**：你與協同中的隊友獲得8秒增益，傷害提高15%，韌性承傷降低15%。在沒有其他增傷時，原本造成100點傷害會變成115點；若敵人原本造成100點韌性傷害，你會承受85點。搭配「爆擊能量過載」後，還會在周圍產生爆炸並削弱敵人。

- **算例**：已有28層時擊殺一名精英或專家，增加2層至30層，立即觸發並歸零；若已有29層時增加2層，也只觸發一次，超過30層的部分不會留下。

[詳細資料](cryptic_overload_keystone.md) · [返回目錄](#talent-index)

---

<a id="cryptic_overload_keystone_bigger_explosion"></a>
### 爆擊能量過載(Critical Power Overload)

<img src="https://github.com/user-attachments/assets/a59865c6-45fb-4f1e-b360-b8100e541a00" width="72" height="72" alt="爆擊能量過載天賦圖示">

- **觸發方式**：能量超載時，對周圍8公尺內命中的敵人施加電擊與承傷增加效果，持續8秒。

- **傷害算例**：對受影響敵人原本造成100點的攻擊，變成100 × 1.15 = 115點。這是敵人承傷提高，這次範圍效果本身不造成爆炸傷害。

- **重複觸發**：同一效果最多1層，再次命中重設8秒持續時間，不會變成30%。

[詳細資料](cryptic_overload_keystone_bigger_explosion.md) · [返回目錄](#talent-index)

---

<a id="cryptic_overload_keystone_toughness_stamina"></a>
### 振奮過載(Invigorating Overload)

<img src="https://github.com/user-attachments/assets/cfc8d67b-448d-4b33-afac-86fd412b2a6d" width="72" height="72" alt="振奮過載天賦圖示">

- **觸發方式**：能量超載時，你與協同範圍內隊友各自恢復最大韌性20%及最大耐力20%。

- **恢復算例**：最大韌性100、最大耐力5格時，一次恢復100 × 20% = 20點韌性及5 × 20% = 1格耐力；若只缺12點韌性，就只補12點。

- **其他加成**：韌性恢復仍受你的韌性恢復加成影響。例如只有25%恢復加成時，20 × 1.25 = 25點；不會超過最大韌性。

[詳細資料](cryptic_overload_keystone_toughness_stamina.md) · [返回目錄](#talent-index)

---

<a id="cryptic_overload_keystone_permastack"></a>
### 靜電電容消耗(Static Capacitor Drain)

<img src="https://github.com/user-attachments/assets/f0977f9f-2eb1-458a-a2c1-5e5642a284aa" width="72" height="72" alt="靜電電容消耗天賦圖示">

- **累計方式**：每次能量超載計1次；累計8次獲得傷害提高15%，16次再獲得韌性減傷20%，24次再使電容量自然恢復加快25%。三項效果可同時保留，持續至死亡。

- **傷害算例**：基礎100點傷害，取得15%加成後為100 × (1 + 15%) = 115點；若同階段已有20%加成，則為100 × (1 + 20% + 15%) = 135點。

- **減傷算例**：原本承受100點韌性傷害，取得20%韌性減傷後為100 × (1 − 20%) = 80點；與超載本身15%韌性減傷同時生效時，為100 × 0.8 × 0.85 = 68點。

- **充能算例**：每份充能需50點電容量，原本每秒恢復1點；取得加成後為1 × (1 + 25%) = 1.25點，補回1份需50 ÷ 1.25 = 40秒。若另有50%自然恢復加成，則每秒恢復1 × (1 + 50% + 25%) = 1.75點。

- **恢復例外**：依單份充能比例直接補回電容量的效果，不會一律多補25%；例如一般擊殺原本補回1點，仍補回1點。

[詳細資料](cryptic_overload_keystone_permastack.md) · [返回目錄](#talent-index)

---

<a id="cryptic_dissector_crit_attack_speed"></a>
### 伺服肌腱湧動(Servo-Sinew Surge)

<img src="https://github.com/user-attachments/assets/08678745-4375-4d48-bdde-6fbc209d6402" width="72" height="72" alt="伺服肌腱湧動天賦圖示">

- **觸發方式**：選用此修改器後，削切協議每有1層，就額外提供1.5%爆擊率與1.5%近戰攻擊速度。

- **層數變化**：削切協議失去或補回層數時，這兩項加成同步減少或增加；零層時不提供加成。

- **算例**：6層時額外增加9個百分點爆擊率與9%近戰攻擊速度；8層時額外增加12個百分點爆擊率與12%近戰攻擊速度。

- **實際計算**：若原本爆擊率為7.5%，6層後為7.5% + 6 × 1.5% = 16.5%；原本1秒完成的近戰攻擊，在沒有其他攻速加成時約需1 ÷ 1.09 = 0.917秒。

[詳細資料](cryptic_dissector_crit_attack_speed.md) · [返回目錄](#talent-index)

---

<a id="cryptic_dissector_max_stacks"></a>
### 熟練解剖者(Honed Dissector)

<img src="https://github.com/user-attachments/assets/17ab9d2c-793b-40c4-83bd-cb3c4bdee444" width="72" height="72" alt="熟練解剖者天賦圖示">

- **效果**：削切協議上限由6層提高到8層；啟用時從8層開始。

- **算例**：每層傷害+2.5%，所以8層時傷害+20%；韌性承傷倍率為1−0.025×8=0.80。沒有其他增傷時，100點基礎攻擊傷害變成120點；若承受100點原始韌性傷害，實際為80點。

[詳細資料](cryptic_dissector_max_stacks.md) · [返回目錄](#talent-index)

---

<a id="cryptic_redline_strength"></a>
### 進階能量管理(Advanced Power Management)

<img src="https://github.com/user-attachments/assets/0fead35c-7d81-43dc-be42-f88f95123f84" width="72" height="72" alt="進階能量管理天賦圖示">

- **觸發方式**：使用戰鬥技能時，依使用前持有的充能數增加效果層數；每一份充能增加一層，最多5層。

- **效果**：每層使威力提高5%，持續10秒；新增層數會重設倒數，達到5層後再次觸發只重新計時。

- **算例**：使用前有3份充能，會獲得3層、威力提高15%。若原本威力為500，修正後為575。這不代表最終傷害必定增加15%；最終傷害仍取決於攻擊類型、武器傷害設定與目標護甲等條件。

- **搭配限制**：弦爪持續出招期間的再次發動不會重複觸發這項效果；需先結束弦爪，再次啟用能力。

[詳細資料](cryptic_redline_strength.md) · [返回目錄](#talent-index)

---

<a id="cryptic_redline_rending"></a>
### 電容極限覆寫(Capacitory Limit Override)

<img src="https://github.com/user-attachments/assets/bd0f7682-079c-4c61-bae6-b759aa2608e9" width="72" height="72" alt="電容極限覆寫天賦圖示">

- **觸發方式**：極限電容達3層或以上時生效；降到2層或更低時停止。

- **效果**：獲得15%撕裂。第3、4層及額外層數時都是15%，不會按層數再累加。

- **傷害算例**：只比較護甲階段，假設護甲前傷害100點、原護甲倍率0.5，且該類護甲的撕裂係數為1，原本100 × 0.5 = 50點，生效後為100 × (0.5 + 0.15) = 65點。此例增加30%傷害；不同護甲倍率會有不同增幅，不能直接把所有傷害乘1.15。

#### 繁中原文勘誤

- 繁中原文將層數與天賦名稱的位置對調，代入後會變成「在3達到極限電容層或以上」。正確條件是「極限電容達3層或以上時，獲得15%撕裂」；同源英文的層數與名稱位置正確。

[詳細資料](cryptic_redline_rending.md) · [返回目錄](#talent-index)

---

<a id="cryptic_redline_extra_max_stacks"></a>
### 資源最佳化聖歌(Resource Optimisation Canticles)

<img src="https://github.com/user-attachments/assets/96e3fb15-c1fd-4702-a6ef-0f69b10931fe" width="72" height="72" alt="資源最佳化聖歌天賦圖示">

- **效果**：戰鬥技能最大充能增加1道，極限電容的最大層數也增加1層，從4層變為5層。

- **充能算例**：護教軍戰鬥技能基礎上限3份，「極限電容」增加1份，本天賦再增加1份，合計3 + 1 + 1 = 5份。電能發射器每次仍最多消耗3份。

- **減傷算例**：極限電容達5層時，韌性承傷倍率為0.75；若一次攻擊原本會對韌性造成100點傷害，套用後承受75點。

- **恢復算例**：極限電容5層時，自然恢復速率增加25%；沒有其他修正時，每秒由單份的2%提高至2% × 1.25 = 2.5%。

[詳細資料](cryptic_redline_extra_max_stacks.md) · [返回目錄](#talent-index)

---

<a id="cryptic_dissector_ability_stacks"></a>
### 強化電容協議(Enhanced Capacitance Protocols)

<img src="https://github.com/user-attachments/assets/de2e3c8c-8b4c-4859-87d0-c1416c07ef5c" width="72" height="72" alt="強化電容協議天賦圖示">

- **觸發方式**：使用戰鬥技能時，將削切協議補至目前上限；搭配「熟練解剖者」時會補至8層。

- **算例**：基礎上限6層時，若剩3層，下一次能力使用會補回3層至6層；若已滿6層，使用能力不會超過上限。

[詳細資料](cryptic_dissector_ability_stacks.md) · [返回目錄](#talent-index)

---

<a id="cryptic_overload_keystone_abilities"></a>
### 動力驅動(Powerdrive)

<img src="https://github.com/user-attachments/assets/d7c8f168-1f4e-42cc-a3d7-926d3b4382f1" width="72" height="72" alt="動力驅動天賦圖示">

- **觸發方式**：使用電能發射器時，每消耗1份充能增加5層能量超載；弦爪只有首次啟用計入，持續出招期間再消耗充能不會再次加層。

- **搭配鎖定姿態**：結束姿態時，合計啟動、維持與射擊消耗的充能，每完整1份增加5層；不足1份的餘數不計入。

- **充能算例**：一次姿態消耗啟動0.25份、維持1.6份、射擊0.2份，合計2.05份；取完整2份，增加2 × 5 = 10層。途中恢復的充能不會扣回已累計的消耗量。

- **超載算例**：原有22層，消耗2份充能再增加10層，22 + 10 = 32層，立刻觸發一次超載並歸零；超過門檻的2層不保留。

[詳細資料](cryptic_overload_keystone_abilities.md) · [返回目錄](#talent-index)

---

<a id="cryptic_dissector_power"></a>
### 崇高意圖(Higher Purpose)

<img src="https://github.com/user-attachments/assets/e1ca03f4-8152-4fa6-9b43-0780a40ae7ca" width="72" height="72" alt="崇高意圖天賦圖示">

- **觸發方式**：擊殺精英或專家敵人時，額外恢復一份戰鬥技能充能成本的2.5%；加上職業原有4%恢復後，該擊殺共恢復6.5%。

- **算例**：若單份充能成本為50點，額外2.5%是1.25點；原有4%為2點，合計恢復3.25點。這些資源先累積進充能條，未必當場增加一整份可用充能。

- **例外**：「進階戰鬥教範」啟用期間，職業原本的擊殺回充與本天賦的額外回充都會暫停。

[詳細資料](cryptic_dissector_power.md) · [返回目錄](#talent-index)

---

<a id="cryptic_redline_toughness"></a>
### 脈衝延伸(Surge-Extension)

<img src="https://github.com/user-attachments/assets/d199d3e7-4b94-4288-bf17-acbd915bdeaf" width="72" height="72" alt="脈衝延伸天賦圖示">

- **觸發方式**：每次補回或消耗戰鬥技能充能，開始一段5秒韌性恢復；極限電容已達層數上限時仍可觸發。

- **恢復量**：基礎總量為最大韌性的25%，平均每秒5%；例如最大韌性100時，基礎速率是每秒5點，5秒合計25點。

- **再次觸發**：恢復尚未完成時再次觸發，會重新開始5秒倒數並重設剩餘恢復量；若一次充能變化讓極限電容增加2層，仍只啟動一次25%恢復，不是50%。

[詳細資料](cryptic_redline_toughness.md) · [返回目錄](#talent-index)

---


---

## 技能

<a id="cryptic_crits_grant_tdr"></a>
### 能量載分配鏈路(Power Redistribution Uplink)

<img src="https://github.com/user-attachments/assets/6ce866b5-8bad-4668-94c0-c0c6c5a06944" width="72" height="72" alt="能量載分配鏈路天賦圖示">

- **觸發方式**：暴擊命中後，接下來 3 秒每秒恢復最大韌性的 2.5%，並獲得 15% 韌性傷害減免。

- **重新計時方式**：再次暴擊命中會重新計時；恢復速度與減傷幅度不累加。

- **恢復算例**：最大韌性 100 時，每秒恢復 100 × 2.5% = 2.5 點，完整 3 秒恢復 7.5 點；沒有其他減傷時，原本 100 點韌性傷害變成 100 × 0.85 = 85 點。

[詳細資料](cryptic_crits_grant_tdr.md) · [返回目錄](#talent-index)

---

<a id="cryptic_dr_on_toughness_break"></a>
### 適應性戰鬥記憶體(Adaptive Combat Engram)

<img src="https://github.com/user-attachments/assets/ea4be2ad-8b84-4e83-a056-993beed7b39c" width="72" height="72" alt="適應性戰鬥記憶體天賦圖示">

- **觸發方式**：自己的韌性被打破時，獲得 30% 傷害減免，持續 5 秒。

- **冷卻方式**：5 秒效果結束後，還需等待 15 秒才能再次觸發；從本次觸發算起，最早相隔 20 秒。

- **減傷算例**：沒有其他減傷時，100 × (1 − 30%) = 70 點；若另有獨立的 25% 減傷，則是 100 × 0.70 × 0.75 = 52.5 點。

[詳細資料](cryptic_dr_on_toughness_break.md) · [返回目錄](#talent-index)

---

<a id="cryptic_successful_dodge_stamina"></a>
### 閃避伺服恢復(Evasive Servo Recovery)

<img src="https://github.com/user-attachments/assets/4738c3e6-2609-414c-9c00-f50fea4dcef3" width="72" height="72" alt="閃避伺服恢復天賦圖示">

- **觸發方式**：成功閃避敵人的攻擊，立即恢復最大耐力的 10%；單純按下閃避但沒有避開攻擊不算。

- **恢復算例**：最大耐力 5 格時，每次恢復 5 × 10% = 0.5 格；目前 4.8 格則只補到 5 格。

[詳細資料](cryptic_successful_dodge_stamina.md) · [返回目錄](#talent-index)

---

<a id="cryptic_multi_hits_restore_toughness"></a>
### 歐姆尼賽亞充能聖歌(Omnissian Recharge Litany)

<img src="https://github.com/user-attachments/assets/d9876bb9-a417-45e8-814c-acbc24233120" width="72" height="72" alt="歐姆尼賽亞充能聖歌天賦圖示">

- **觸發方式**：同一次攻擊命中第 3 名敵人時，開始在 3 秒內恢復最大韌性的 10%。近戰與遠程命中都可觸發。

- **重新計時方式**：再次達標會重新計算 3 秒；每次觸發至少相隔 0.25 秒，命中第 4、5 名敵人不會額外增加層數。

- **恢復算例**：最大韌性 150 時，每秒恢復 150 × 10% ÷ 3 = 5 點，完整效果共 15 點。

[詳細資料](cryptic_multi_hits_restore_toughness.md) · [返回目錄](#talent-index)

---

<a id="cryptic_stamina_increases_damage"></a>
### 原初動力導流(Channelled Motive Force)

<img src="https://github.com/user-attachments/assets/8f013bd2-f685-4be4-8678-11ac630d6659" width="72" height="72" alt="原初動力導流天賦圖示">

- **觸發方式**：累計消耗 1 格耐力後，傷害提高 15%，持續 4 秒；不要求一次耗掉整格。

- **累計與重新計時**：耐力恢復不會扣掉已累計的消耗量；再次累計滿 1 格會重設 4 秒，增傷不疊層。

- **傷害算例**：消耗 0.4 格，再消耗 0.6 格即可觸發。假設基礎傷害 100、同階段原有 25% 加成，結果為 100 × (1 + 25% + 15%) = 140 點。

[詳細資料](cryptic_stamina_increases_damage.md) · [返回目錄](#talent-index)

---

<a id="cryptic_electrocution_toughness"></a>
### 熵能轉移(Entropic Transfer)

<img src="https://github.com/user-attachments/assets/98a10c08-52e1-47bf-a288-a2043ba40a63" width="72" height="72" alt="熵能轉移天賦圖示">

- **觸發方式**：對敵人施加電擊、增加電擊層數或重設已達上限的電擊持續時間時，開始在 4 秒內恢復最大韌性的 12%。

- **重新計時方式**：再次觸發會重設 4 秒，不會加快每秒恢復量。

- **恢復算例**：最大韌性 100 時，每秒恢復 100 × 12% ÷ 4 = 3 點；第 2 秒再次觸發，效果延長至第 6 秒，期間共可恢復 18 點。

[詳細資料](cryptic_electrocution_toughness.md) · [返回目錄](#talent-index)

---

<a id="cryptic_electrocution_defense"></a>
### 過載轉移晶格(Overcharge Transfer Lattice)

<img src="https://github.com/user-attachments/assets/74c8388d-8388-4646-8a91-0eb056656036" width="72" height="72" alt="過載轉移晶格天賦圖示">

- **觸發方式**：受到近戰攻擊傷害時，以攻擊者為中心，電擊 2.5 公尺內的存活敵人；單純格擋不觸發。

- **電擊效果**：電擊狀態維持 3 秒，再次施加會重新計時；對不同敵人的實際控制效果仍取決於其抗性。

- **冷卻方式**：觸發後冷卻 15 秒。例如第 0 秒觸發，第 10 秒再被打不會重複發動，第 15 秒後再次受到符合條件的攻擊才會發動。

[詳細資料](cryptic_electrocution_defense.md) · [返回目錄](#talent-index)

---

<a id="cryptic_weakspot_damage"></a>
### 精準思算機同步(Sureshot Cogitator Sync)

<img src="https://github.com/user-attachments/assets/4d3197de-7f15-46b8-9df6-153fd0f94642" width="72" height="72" alt="精準思算機同步天賦圖示">

- **運作方式**：提高 25% 弱點命中的額外傷害部分，近戰與遠程均適用。

- **傷害算例**：同一攻擊的基礎部分為 100、弱點額外部分為 100 時，原傷害 200 → 100 + 100 × 1.25 = 225，整筆增加 12.5%。若額外部分為 200，則 300 → 100 + 200 × 1.25 = 350，增加約 16.67%。

- **武器差異**：弱點額外傷害占比越大，整筆傷害增幅越大；武器型號、蓄力、目標護甲、部位及暴擊都會改變結果。

- **其他加成**：若弱點額外部分已有 20% 同階段加成，則 100 + 100 × (1 + 20% + 25%) = 245；原本為 220，這次增加約 11.36%。

[詳細資料](cryptic_weakspot_damage.md) · [返回目錄](#talent-index)

---

<a id="cryptic_pushing_grants_cleave"></a>
### 電擊破壞協定(Shockline Breach Protocol)

<img src="https://github.com/user-attachments/assets/dca309fd-773f-4a07-a659-cfb320cd14a9" width="72" height="72" alt="電擊破壞協定天賦圖示">

- **觸發方式**：推擊命中敵人後，近戰順劈能力提高 50%，持續 8 秒；再次推中會重新計時，不疊層。

- **順劈算例**：假設攻擊原本能處理 10 單位敵人質量，效果變成 10 × (1 + 50%) = 15。能多打中幾人仍取決於敵人質量與攻擊本身的限制。

[詳細資料](cryptic_pushing_grants_cleave.md) · [返回目錄](#talent-index)

---

<a id="cryptic_stacking_ranged_damage"></a>
### 輻射槽(Rad-Sink)

<img src="https://github.com/user-attachments/assets/26c97989-2f88-46ee-9bf3-f9f02b09c0f3" width="72" height="72" alt="輻射槽天賦圖示">

- **累積方式**：距離上次射擊滿 1 秒時，獲得 10% 遠程傷害加成；滿 2 秒時提高至 20%，最多 2 層。

- **消耗方式**：再次射擊後重新計算等待時間，不能靠維持連射持續保留兩層。

- **傷害算例**：基礎傷害 100 時，一層為 100 × 1.10 = 110，兩層為 100 × 1.20 = 120；若原有 25% 同階段加成，兩層為 100 × (1 + 25% + 20%) = 145。

[詳細資料](cryptic_stacking_ranged_damage.md) · [返回目錄](#talent-index)

---

<a id="cryptic_stacking_tdr"></a>
### 漸進裝甲矩陣(Progressive Plating Matrix)

<img src="https://github.com/user-attachments/assets/5208032b-aaaf-4801-b84c-6fdbaab1735b" width="72" height="72" alt="漸進裝甲矩陣天賦圖示">

- **疊層方式**：一次攻擊命中首名目標後獲得 1 層，每層減少 2.5% 韌性傷害，最多 6 層；同一攻擊打中多人只加一層。

- **持續時間**：每次觸發重設 5 秒倒數，期間未再觸發便失去效果。

- **減傷算例**：6 層提供 6 × 2.5% = 15% 減傷，原本 100 點韌性傷害變成 85；再配合另一項獨立 20% 減傷，則 100 × 0.85 × 0.80 = 68 點。

[詳細資料](cryptic_stacking_tdr.md) · [返回目錄](#talent-index)

---

<a id="cryptic_damage_vs_electrocuted_scaling_on_charge"></a>
### 報應導管(Retribution Conduit)

<img src="https://github.com/user-attachments/assets/eb093286-7cce-40e8-b518-3b5bc16dd38d" width="72" height="72" alt="報應導管天賦圖示">

- **運作方式**：攻擊處於電擊狀態的敵人，傷害提高 10%；目前每保有 1 份完整電容量，再增加 5%。未充滿的一份不計入。

- **傷害算例**：保有 3 份時，加成為 10% + 3 × 5% = 25%；基礎傷害 100 → 125。有其他 20% 同階段加成時，100 × (1 + 20% + 25%) = 145。

- **切換條件**：消耗一份後會按剩餘份數重算；敵人的電擊結束後，這項對電擊目標的加成也不再適用。

[詳細資料](cryptic_damage_vs_electrocuted_scaling_on_charge.md) · [返回目錄](#talent-index)

---

<a id="cryptic_elite_kills_damage"></a>
### 電流標記陣列(Galvanic Marking Array)

<img src="https://github.com/user-attachments/assets/77cad8a5-5837-45fe-98a7-549e27e5d738" width="72" height="72" alt="電流標記陣列天賦圖示">

- **觸發方式**：以遠程攻擊擊殺精英敵人，獲得 1 層增傷；不要求對方是持槍的遠程精英。

- **疊層與時間**：每層增加 5% 傷害，最多 4 層。再次觸發會重設 15 秒倒數；沒有繼續擊殺時，每過 15 秒掉一層。

- **傷害算例**：4 層為 20%，基礎 100 → 100 × 1.20 = 120。從滿層起不再觸發，15、30、45、60 秒後分別剩 3、2、1、0 層。

#### 繁中原文勘誤

- 遊戲繁中寫「擊殺遠程精英」，容易誤認為只限定持槍精英。此版本的條件是「以遠程攻擊擊殺精英」；用近戰擊殺持槍精英不符合這項條件。

[詳細資料](cryptic_elite_kills_damage.md) · [返回目錄](#talent-index)

---

<a id="cryptic_toughness_per_charge"></a>
### 自我修復教義(Auto-Repair Doctrines)

<img src="https://github.com/user-attachments/assets/003d8e80-1bb4-46b0-aad1-e2f6d78be693" width="72" height="72" alt="自我修復教義天賦圖示">

- **恢復方式**：持續每秒恢復最大韌性的 3%；目前每保有 1 份完整電容量，每秒再多恢復最大韌性的 0.5%。

- **恢復算例**：最大韌性 200、保有 3 份時，每秒恢復 200 × (3% + 3 × 0.5%) = 9 點；0 份時仍每秒恢復 200 × 3% = 6 點。

- **例外**：未充滿的一份不計入；已滿韌性時不會超出上限。

[詳細資料](cryptic_toughness_per_charge.md) · [返回目錄](#talent-index)

---

<a id="cryptic_crit_chance_based_on_charge"></a>
### 絕境中繼(Last Stand Relay)

<img src="https://github.com/user-attachments/assets/5e8556aa-e9d9-4400-a863-bb26a5f11e17" width="72" height="72" alt="絕境中繼天賦圖示">

- **運作方式**：常駐增加 6 個百分點爆擊率；目前不足 1 份完整電容量時，再增加 4 個百分點，合計 10 個百分點。

- **機率算例**：假設原本爆擊率 7.5%，有完整電容量時為 7.5% + 6% = 13.5%；沒有完整一份時為 7.5% + 6% + 4% = 17.5%。

- **切換條件**：正在恢復的一份即使已有 90% 進度，仍算 0 份；補滿後額外 4 個百分點消失。

[詳細資料](cryptic_crit_chance_based_on_charge.md) · [返回目錄](#talent-index)

---

<a id="cryptic_afflicted_increased_damage"></a>
### 弱點分析教義(Weakness Analysis Doctrine)

<img src="https://github.com/user-attachments/assets/4683657a-edf5-4420-b60f-68eddc85ef43" width="72" height="72" alt="弱點分析教義天賦圖示">

- **觸發方式**：以近戰或遠程攻擊命中正在電擊、燃燒、靈魂之火、流血或中毒的敵人，獲得 10% 傷害加成，持續 8 秒。

- **持續方式**：取得加成後可用來攻擊其他目標；再次命中符合條件的敵人會重設 8 秒倒數，不能疊層。

- **傷害算例**：基礎傷害 100、有 25% 同階段加成時，100 × (1 + 25% + 10%) = 135 點。

[詳細資料](cryptic_afflicted_increased_damage.md) · [返回目錄](#talent-index)

---

<a id="cryptic_mobile_defense"></a>
### 離格動作例程(Ablative Motion Routines)

<img src="https://github.com/user-attachments/assets/bc0f3370-fa34-406f-9e0d-91e23b98f1f2" width="72" height="72" alt="離格動作例程天賦圖示">

- **觸發方式**：衝刺且仍有耐力時，或正在滑行時，受到的傷害降低 25%；滑行本身不要求剩餘耐力。

- **減傷算例**：原傷害 100 → 100 × 0.75 = 75。若另有獨立 30% 減傷，則為 100 × 0.75 × 0.70 = 52.5 點。

- **結束條件**：離開上述狀態即失去效果，沒有額外延續時間。

[詳細資料](cryptic_mobile_defense.md) · [返回目錄](#talent-index)

---

<a id="cryptic_shared_toughness"></a>
### 能量溢流(Power Overflow)

<img src="https://github.com/user-attachments/assets/dbeb2660-6b6d-4b09-b33a-bd21aef50f59" width="72" height="72" alt="能量溢流天賦圖示">

- **觸發方式**：韌性原本已滿，下一次韌性恢復完全沒有補到自己時，將該次原定恢復量的 25% 分別給協同範圍內的每名隊友。

- **分配算例**：自己已滿，接到原本會恢復 20 點的效果，每位隊友各獲得 20 × 25% = 5 點；3 名隊友合計可獲得 15 點，不是把 5 點平分。

- **例外**：若自己還缺 2 點，這次恢復 20 點即使溢出 18 點，也不會分享。分享而來的恢復不能再轉送；隊友的恢復加成及韌性上限仍各自適用。

[詳細資料](cryptic_shared_toughness.md) · [返回目錄](#talent-index)

---

<a id="cryptic_stun_suppression_immune"></a>
### 目標殲滅回饋(Target-Neutralization Feedback)

<img src="https://github.com/user-attachments/assets/127fa97e-a0cf-4421-bff2-7edb8edaed86" width="72" height="72" alt="目標殲滅回饋天賦圖示">

- **觸發方式**：以弱點命中擊殺敵人後，獲得 5 秒的一般受擊僵直與壓制免疫。

- **重新計時方式**：期間再次弱點擊殺會重設 5 秒。例如第 0 秒觸發、第 3 秒再觸發，效果延至第 8 秒。

- **效果範圍**：這項效果不提供減傷，也不能視為免疫捕網、撲倒等所有控制。

[詳細資料](cryptic_stun_suppression_immune.md) · [返回目錄](#talent-index)

---

<a id="cryptic_elite_kills_toughness"></a>
### 二元彈道協議(Binary Ballistics Protocol)

<img src="https://github.com/user-attachments/assets/79eb4aea-82d8-46fb-add1-a4ded8e41cce" width="72" height="72" alt="二元彈道協議天賦圖示">

- **觸發方式**：擊殺精英敵人後，3 秒內恢復最大韌性的 15%；近戰與遠程擊殺皆可。

- **重新計時方式**：期間再擊殺精英會重設 3 秒倒數，不疊加恢復速度。

- **恢復算例**：最大韌性 200，每秒 200 × 15% ÷ 3 = 10 點，完整 3 秒共 30 點；若第 2 秒再次觸發，連續 5 秒共可恢復 50 點。

[詳細資料](cryptic_elite_kills_toughness.md) · [返回目錄](#talent-index)

---

<a id="cryptic_push_stagger_stamina"></a>
### 力量分配致動器(Force Distribution Actuators)

<img src="https://github.com/user-attachments/assets/6d7a17f5-be3e-4659-bc09-84cfb22bd20f" width="72" height="72" alt="力量分配致動器天賦圖示">

- **觸發方式**：目前耐力達上限的一半或更多時，推擊衝擊提高 75%；剛好 50% 也符合。

- **衝擊算例**：最大耐力 6 格時，需至少 3 格；假設原推擊衝擊為 100，生效後為 100 × (1 + 75%) = 175。

- **作用範圍**：提升推開與打出踉蹌的能力；能否打斷某個敵人的動作，仍需符合該敵人的衝擊門檻。

[詳細資料](cryptic_push_stagger_stamina.md) · [返回目錄](#talent-index)

---

<a id="cryptic_no_braced_movement_penalty"></a>
### 卓越追蹤聖歌(Superior Tracking Litanies)

<img src="https://github.com/user-attachments/assets/29715f83-8068-4375-9aa9-d00c34e8d8f3" width="72" height="72" alt="卓越追蹤聖歌天賦圖示">

- **移動效果**：架槍或瞄準時，把原有移動減速幅度減半。

- **移動算例**：原本速度為正常移動的 60%，減速幅度是 40%；生效後為 1 − 40% × 0.5 = 80% 正常速度。

- **散布效果**：常駐減少 45% 射擊散布，無須先架槍。例如同條件散布為 10，且無其他散布加成時，變成 10 × (1 − 45%) = 5.5。

[詳細資料](cryptic_no_braced_movement_penalty.md) · [返回目錄](#talent-index)

---

<a id="cryptic_better_heavies"></a>
### 液壓衝擊(Hydraulic Impact)

<img src="https://github.com/user-attachments/assets/d01cfadc-7ba2-4505-b70a-11c22405645a" width="72" height="72" alt="液壓衝擊天賦圖示">

- **運作方式**：近戰蓄力期間免疫一般受擊僵直，並使近戰重擊傷害提高 15%。增傷適用於重擊，不要求蓄到最滿。

- **傷害算例**：基礎重擊 100、有 25% 同階段傷害加成時，100 × (1 + 25% + 15%) = 140。

- **例外**：防打斷只在蓄力動作中生效；仍會受到傷害，也不代表可以免疫捕網或撲倒。

[詳細資料](cryptic_better_heavies.md) · [返回目錄](#talent-index)

---

<a id="cryptic_hybrid_damage"></a>
### 混合戰鬥契約(Hybrid Combat Covenant)

<img src="https://github.com/user-attachments/assets/f8248e1e-3923-42b3-9afb-abed0c3ac1e9" width="72" height="72" alt="混合戰鬥契約天賦圖示">

- **觸發方式**：近戰擊殺增加一層遠程增傷；遠程擊殺增加一層近戰增傷。兩種效果各自累積，每層 3%，各最多 5 層。

- **持續方式**：取得某類加成的新層數時，重新計時該類 8 秒倒數；停止觸發後，每 8 秒掉一層。切換武器不會直接清除已累積的效果。

- **傷害算例**：5 層遠程增傷為 15%，基礎射擊 100 → 115。即使同時也有 5 層近戰增傷，這一發射擊仍只吃遠程的 15%。

[詳細資料](cryptic_hybrid_damage.md) · [返回目錄](#talent-index)

---

<a id="cryptic_toughness_on_damage_taken"></a>
### 動能分配器(Kinetic Energy Distributors)

<img src="https://github.com/user-attachments/assets/eae28459-1a70-43fc-a5ff-35d2b3adc0eb" width="72" height="72" alt="動能分配器天賦圖示">

- **觸發方式**：自己受到正數生命傷害後，5 秒內恢復最大韌性的 25%；只有韌性被扣除時不會觸發。

- **重新計時方式**：再次受傷會重新計時恢復效果，恢復速度不疊加。

- **恢復算例**：最大韌性 100 時，每秒恢復 100 × 25% ÷ 5 = 5 點；第 2 秒再次受傷，恢復可延至第 7 秒，期間最多恢復 35 點。

[詳細資料](cryptic_toughness_on_damage_taken.md) · [返回目錄](#talent-index)

---

<a id="cryptic_melee_attacks_give_melee_attack_speed"></a>
### 無限抑制器(Uncapped Arrestor)

<img src="https://github.com/user-attachments/assets/8c6107b2-c1ee-4fa6-9465-919f3c4d9d8b" width="72" height="72" alt="無限抑制器天賦圖示">

- **疊層方式**：一次近戰揮擊有打中敵人，就增加 1 層近戰攻速；打中多人仍只加 1 層。每層 2.5%，最多 5 層。

- **持續時間**：每次觸發重設 3 秒倒數，超過 3 秒未再觸發便失去效果。

- **攻速算例**：5 層提高 12.5% 攻速；若受攻速影響的攻擊動作原需 1 秒，則為 1 ÷ 1.125 ≈ 0.889 秒，實際整套連段還包含其他動作。

[詳細資料](cryptic_melee_attacks_give_melee_attack_speed.md) · [返回目錄](#talent-index)

---

<a id="cryptic_melee_crits_electrocute_first"></a>
### 電擊打擊導管(Electro-Strike Conduit)

<img src="https://github.com/user-attachments/assets/a754db43-e82a-44d0-af91-ea8d874d8c3c" width="72" height="72" alt="電擊打擊導管天賦圖示">

- **觸發方式**：近戰爆擊命中時，對這次揮擊的第一個目標施加電擊；目標需在命中後仍存活。

- **電擊方式**：電擊狀態維持 3 秒，再次施加會重新計時，不會因同次順劈擊中 5 人就讓 5 人都電擊。

- **例外**：沒有額外觸發冷卻；各敵人是否能被持續控住，仍取決於敵人自身的抗性。

[詳細資料](cryptic_melee_crits_electrocute_first.md) · [返回目錄](#talent-index)

---

<a id="cryptic_auto_reload"></a>
### 槍械技師(Gunsmith)

<img src="https://github.com/user-attachments/assets/6e39714f-23a2-4d43-b5ae-6cfe4fa9b214" width="72" height="72" alt="槍械技師天賦圖示">

- **裝填速度**：裝填速度提高 15%。若受加速的裝填動作原需 2 秒，則為 2 ÷ 1.15 ≈ 1.74 秒。

- **自動裝填**：停止射擊滿 5 秒後，再每過 1 秒從儲備用彈藥藥補入彈匣；正常射擊後第一批在約第 6 秒，每批為彈匣容量的 7.5%，小數向上取整。

- **彈藥算例**：彈匣容量 30 發，每批 30 × 7.5% = 2.25，向上取整為 3 發。彈匣缺 2 發就只補 2 發，備用彈藥只有 1 發就只補 1 發。

- **例外**：正在手動裝填、彈匣已滿或備用彈藥用盡時不補；重新射擊會重設等待時間。這是把備用彈藥搬進彈匣，不會生成新彈藥。

[詳細資料](cryptic_auto_reload.md) · [返回目錄](#talent-index)

---

<a id="cryptic_ranged_vs_bfg"></a>
### 暗殺協議(Assassination Protocols)

<img src="https://github.com/user-attachments/assets/c9876de0-2e5d-4421-9bee-326ac0c92290" width="72" height="72" alt="暗殺協議天賦圖示">

- **作用對象**：對歐格林、怪獸或隊長類敵人的遠程攻擊提高 25% 傷害；近戰攻擊不適用。

- **傷害算例**：目標符合其中一類、基礎遠程傷害 100 時，100 × 1.25 = 125；若同階段原有 20% 加成，則 100 × (1 + 20% + 25%) = 145。

[詳細資料](cryptic_ranged_vs_bfg.md) · [返回目錄](#talent-index)

---

<a id="cryptic_electrocution_applies_brittleness"></a>
### 系統電擊(System Shock)

<img src="https://github.com/user-attachments/assets/7f79455c-bf29-4b78-8706-dda075acb8d0" width="72" height="72" alt="系統電擊天賦圖示">

- **觸發方式**：對敵人施加電擊、增加層數或重設持續時間時，附加 3 層脆弱，每層 2.5%，本次共增加 7.5%。

- **疊層與時間**：脆弱持續 5 秒，再次施加會重新計時；同類脆弱合計最多 16 層，即 40%。例如連續 6 次觸發會由 3、6、9、12、15 層升至上限 16 層。

- **傷害算例**：脆弱提高攻擊對護甲的有效程度，不能直接當成整筆傷害增加 7.5%。假設一擊的無護甲基準為 100、原護甲倍率 0.5，加入 7.5% 脆弱後，該段為 100 × (0.5 + 0.075) = 57.5，原本是 50。

- **隊伍效果**：脆弱施加在敵人身上，隊友的攻擊也能受益；不同武器與護甲的實際增幅各異。

[詳細資料](cryptic_electrocution_applies_brittleness.md) · [返回目錄](#talent-index)

---

<a id="cryptic_ammo_reserve"></a>
### 彈藥預知(Ammo-Cell Augury)

<img src="https://github.com/user-attachments/assets/d265085f-7abd-4433-adc1-3f0276351436" width="72" height="72" alt="彈藥預知天賦圖示">

- **運作方式**：儲備用彈藥藥容量增加 25%，不增加彈匣容量。

- **容量算例**：原儲備上限 200 發，變成 200 × (1 + 25%) = 250 發；原本 203 發則計算 253.75，取整為 253 發。若另有 15% 同類容量加成，200 × (1 + 25% + 15%) = 280 發。

[詳細資料](cryptic_ammo_reserve.md) · [返回目錄](#talent-index)

---

<a id="cryptic_coherency_toughness_on_ability"></a>
### 電能修復(Voltaic Restoration)

<img src="https://github.com/user-attachments/assets/bb7b86c4-512f-495f-a82a-7011cae498d6" width="72" height="72" alt="電能修復天賦圖示">

- **觸發方式**：啟動戰鬥技能時，你與協同範圍內的隊友各恢復自己最大韌性的 20%；使用閃擊不會觸發。

- **恢復算例**：你最大韌性 100，恢復 100 × 20% = 20 點；隊友最大韌性 200，恢復 200 × 20% = 40 點。

- **計次方式**：按能力啟動次數恢復；一次消耗 3 份電容量不會改成恢復 60%。

[詳細資料](cryptic_coherency_toughness_on_ability.md) · [返回目錄](#talent-index)

---

<a id="cryptic_revive_speed_and_dr"></a>
### 救贖教範(Salvation Doctrine)

<img src="https://github.com/user-attachments/assets/a86f113d-1a3e-4fc6-b1d1-24fe727b118d" width="72" height="72" alt="救贖教範天賦圖示">

- **運作方式**：拉起倒地隊友、拉上懸掛隊友、拆網或救援被俘隊友時，受到的傷害減少 25%，援助動作速度提高 25%。

- **時間算例**：原本 4 秒的援助動作，在沒有其他速度加成時為 4 ÷ 1.25 = 3.2 秒。

- **減傷算例**：援助期間原本 100 點傷害變成 100 × 0.75 = 75；停止援助後不再享有這項減傷。

[詳細資料](cryptic_revive_speed_and_dr.md) · [返回目錄](#talent-index)

---

<a id="cryptic_passive_ammo_replenishment"></a>
### 彈藥補給艙(Ammunition-Restoration Pod)

<img src="https://github.com/user-attachments/assets/5330c87c-7abe-4993-8eb2-5cb11586c013" width="72" height="72" alt="彈藥補給艙天賦圖示">

- **補彈方式**：每 15 秒補回最大儲備用彈藥藥的 1%，加入備用彈藥，不直接填進彈匣。

- **取整算例**：儲備上限 250 發，每次累計 250 × 1% = 2.5 發；先補 2 發並保留 0.5，下次合計補 3 發。連續四次共補 10 發。

- **上限與例外**：備用彈藥還會預留填滿空缺彈匣的量；整把武器已滿時不能無限累積。沒有彈藥儲備的武器不會因此獲得彈藥。

[詳細資料](cryptic_passive_ammo_replenishment.md) · [返回目錄](#talent-index)

---

<a id="cryptic_stacking_melee_damage"></a>
### 持續攻擊教義(Sustained Assault Doctrine)

<img src="https://github.com/user-attachments/assets/9e58fba3-e137-4f3e-89c3-ea7f5ebb0f24" width="72" height="72" alt="持續攻擊教義天賦圖示">

- **疊層方式**：近戰揮擊至少命中一名敵人，便增加 1 層傷害加成；每次揮擊最多一層，每層 3%，最多 5 層。

- **持續時間**：再次觸發重設 8 秒倒數；效果也能提高遠程傷害。

- **傷害算例**：5 層提供 15%，基礎傷害 100 → 115；若原有 25% 同階段加成，100 × (1 + 25% + 15%) = 140。

[詳細資料](cryptic_stacking_melee_damage.md) · [返回目錄](#talent-index)

---

<a id="cryptic_stun_dr_power"></a>
### 鍍鋅精密塗層(Galvanized Coating)

<img src="https://github.com/user-attachments/assets/e3f4e5a5-52c8-489e-a83f-3bf13c80eca8" width="72" height="72" alt="鍍鋅精密塗層天賦圖示">

- **防禦效果**：免疫一般受擊僵直，並減少 15% 承受傷害；即使電容量不足，這兩項防禦仍保留。

- **資源代價**：受到近戰傷害時，消耗一份電容量的 7.5%；只扣現有資源，不會扣成負數。已被制伏時不再收取這筆代價。

- **計算算例**：單份電容量的基礎恢復時間為 50 秒，7.5% 等同 50 × 7.5% = 3.75 秒自然恢復量。原本 100 點傷害則變成 100 × 0.85 = 85 點。

[詳細資料](cryptic_stun_dr_power.md) · [返回目錄](#talent-index)

---

<a id="cryptic_damage_on_ability"></a>
### 莫比亞導體(Moebian Conductor)

<img src="https://github.com/user-attachments/assets/78378820-be56-4a92-bd07-f6275c55fa47" width="72" height="72" alt="莫比亞導體天賦圖示">

- **觸發方式**：啟動戰鬥技能後，傷害提高 15%，持續 10 秒；閃擊不觸發。

- **重新計時方式**：再次啟動只重設 10 秒倒數，不疊層；一次消耗多份電容量也仍是 15%。

- **傷害算例**：基礎傷害 100、有 25% 同階段加成時，100 × (1 + 25% + 15%) = 140 點。

[詳細資料](cryptic_damage_on_ability.md) · [返回目錄](#talent-index)

---

<a id="cryptic_weakspot_kills_restore_toughness"></a>
### 伺服核心充能引擎(Servo-Core Recharge Engine)

<img src="https://github.com/user-attachments/assets/233341e1-6bfd-4027-9641-610ec8733e45" width="72" height="72" alt="伺服核心充能引擎天賦圖示">

- **觸發方式**：以弱點命中擊殺敵人，立即恢復最大韌性的 5%；近戰與遠程皆可。

- **恢復算例**：最大韌性 200 時，每次恢復 200 × 5% = 10 點；連續 3 次符合條件的擊殺可恢復 30 點，但最多補到上限。

[詳細資料](cryptic_weakspot_kills_restore_toughness.md) · [返回目錄](#talent-index)

---

<a id="cryptic_cleave_and_impact"></a>
### 適應性戰鬥校準(Adaptive Combat Calibration)

<img src="https://github.com/user-attachments/assets/ed3453a6-4290-4ca6-a37e-0d19046b048e" width="72" height="72" alt="適應性戰鬥校準天賦圖示">

- **切換方式**：韌性高於上限的一半時，近戰順劈提高 30%；韌性等於或低於一半時，改為近戰衝擊提高 30%。

- **邊界算例**：最大韌性 100，51 點享有順劈，50 點或49 點享有衝擊。順劈基準 10 → 10 × 1.30 = 13；衝擊基準 100 → 130。

- **作用範圍**：順劈影響能穿過多少敵人，衝擊影響踉蹌；兩者不會同時生效，也不是直接加 30% 傷害。

[詳細資料](cryptic_cleave_and_impact.md) · [返回目錄](#talent-index)

---

<a id="cryptic_tdr_based_on_charge"></a>
### 剩餘電流緩衝(Residual Current Buffer)

<img src="https://github.com/user-attachments/assets/f34040ff-ebd0-4f7e-b857-4557ccdee00c" width="72" height="72" alt="剩餘電流緩衝天賦圖示">

- **運作方式**：常駐降低 10% 承受的韌性傷害；目前每保有一份完整電容量，再增加 2.5% 減傷。

- **減傷算例**：3 份時，10% + 3 × 2.5% = 17.5%；100 點韌性傷害 → 100 × 0.825 = 82.5。另有獨立 20% 韌性減傷時，82.5 × 0.8 = 66 點。

- **切換條件**：只按已充滿的份數計算，電容量消耗或補滿時即更新；0 份時仍保有 10% 減傷。

[詳細資料](cryptic_tdr_based_on_charge.md) · [返回目錄](#talent-index)

---

<a id="cryptic_ranged_stacking_toughness"></a>
### 卓越防禦記憶模組(Superior Defence Engrams)

<img src="https://github.com/user-attachments/assets/deb63065-b15d-498f-a16c-ec7726ca6a22" width="72" height="72" alt="卓越防禦記憶模組天賦圖示">

- **疊層方式**：每次遠程擊殺獲得 1 層，最多 5 層；每層每秒恢復最大韌性的 1%。

- **持續時間**：再次遠程擊殺會重設 8 秒倒數，達上限後仍可重新計時。

- **恢復算例**：最大韌性 200、5 層時，每秒恢復 200 × 5 × 1% = 10 點；維持滿層 8 秒共可恢復 80 點，最多補到上限。

[詳細資料](cryptic_ranged_stacking_toughness.md) · [返回目錄](#talent-index)

---

<a id="cryptic_specials_marking"></a>
### 標記優先聖詩(Target Prioritization Psalms)

<img src="https://github.com/user-attachments/assets/f821891a-e246-41c9-ae45-97f93d0b8547" width="72" height="72" alt="標記優先聖詩天賦圖示">

- **運作方式**：附近 12.5 公尺內存活的專家敵人會顯示輪廓；不必手動標記。

- **更新方式**：約每 0.25 秒更新一次，敵人離開範圍或死亡後移除輪廓。

- **標記區別**：這是敵人輪廓提示，本身沒有增傷、充能或額外手動標記獎勵。

[詳細資料](cryptic_specials_marking.md) · [返回目錄](#talent-index)

---

<a id="cryptic_disabled_allies_defense"></a>
### 守護協議(Protectorate Protocol)

<img src="https://github.com/user-attachments/assets/53a3e76f-67fe-4d9e-bff5-7aafaee21065" width="72" height="72" alt="守護協議天賦圖示">

- **保護方式**：協同範圍內需要援助的隊友受到的傷害降低 25%，直到脫離該狀態或失去協同效果。

- **救援加成**：由你完成援助後，被救的隊友再獲得 6 秒的 25% 減傷與一般受擊僵直免疫；這段減傷不要求繼續留在協同範圍內。

- **減傷算例**：單一效果下，原本 100 點傷害變成 100 × 0.75 = 75 點；另有獨立 20% 減傷時為 100 × 0.75 × 0.80 = 60 點。

[詳細資料](cryptic_disabled_allies_defense.md) · [返回目錄](#talent-index)

---

<a id="cryptic_ally_coherency_defenses"></a>
### 數據感應協定(Data Sensor Protocol)

<img src="https://github.com/user-attachments/assets/0bbe1f46-d58e-414d-9ab3-1c8ed0170a41" width="72" height="72" alt="數據感應協定天賦圖示">

- **恢復耐力**：你或協同範圍內隊友受到韌性傷害時，受傷的那個人恢復最大耐力的 25%。

- **恢復韌性**：你或協同範圍內隊友受到生命傷害時，受傷的那個人恢復最大韌性的 25%；致命攻擊不觸發。

- **冷卻方式**：兩類效果各自冷卻 15 秒，但同類效果共用你的觸發冷卻。例如隊友甲先觸發耐力恢復，5 秒後隊友乙受韌性傷害，不能再觸發同一項效果。

- **恢復算例**：受傷者最大耐力 6 格、最大韌性 120，對應恢復 6 × 25% = 1.5 格耐力，或 120 × 25% = 30 點韌性；不是讓全隊同時恢復。

#### 繁中原文勘誤

- 原文寫「當你或……盟友受到傷害時，盟友恢復……」。正確受益者是受到那次傷害的人：你受傷就恢復自己，隊友受傷就恢復該隊友，不是把恢復量轉給其他盟友。

[詳細資料](cryptic_ally_coherency_defenses.md) · [返回目錄](#talent-index)

---

<a id="cryptic_strength_on_charge_gain"></a>
### 序列充能(Sequenced Charge)

<img src="https://github.com/user-attachments/assets/0a7a0b4b-9d65-4b36-9825-ed610ad0a3ae" width="72" height="72" alt="序列充能天賦圖示">

- **觸發方式**：補出至少 1 份完整電容量時，獲得 12.5% 威力，持續 10 秒；只有部分進度增加而沒有補滿一份時不觸發。

- **重新計時方式**：期間再次取得完整電容量，重設 10 秒；一次補出多份也不會把威力倍增。

- **威力算例**：假設某項攻擊在套用威力加成前的威力值為 500，生效後為 500 × 1.125 = 562.5；若同階段另有 20%，則 500 × (1 + 20% + 12.5%) = 662.5。

- **作用範圍**：威力會參與傷害、衝擊與順劈計算；實際數值還要套武器與目標條件，不能直接視為所有最終傷害都增加 12.5%。

[詳細資料](cryptic_strength_on_charge_gain.md) · [返回目錄](#talent-index)

---

<a id="cryptic_toughness_replenishment_on_kill_bonus"></a>
### 屠殺協議(Slaughter Protocol)

<img src="https://github.com/user-attachments/assets/b22c3c3e-70a0-4411-99a5-63bcf1a6fa5a" width="72" height="72" alt="屠殺協議天賦圖示">

- **運作方式**：提高近戰擊殺原本會恢復的韌性量，常態增加 25%；沒有任何完整電容量時改為增加 50%。

- **恢復算例**：若一次近戰擊殺原本恢復 5 點韌性，常態變成 5 × 1.25 = 6.25 點；0 份電容量時為 5 × 1.50 = 7.5 點。

- **其他加成**：若原有 20% 同階段韌性恢復加成，0 份時為 5 × (1 + 20% + 50%) = 8.5 點，最多補到上限。

[詳細資料](cryptic_toughness_replenishment_on_kill_bonus.md) · [返回目錄](#talent-index)

---

<a id="cryptic_next_hit_all_damage_on_dodge"></a>
### 精準戰鬥探測儀(Precision Combat Augurs)

<img src="https://github.com/user-attachments/assets/a18e19ec-6cad-4a2c-996b-6e7eddf47195" width="72" height="72" alt="精準戰鬥探測儀天賦圖示">

- **觸發方式**：成功閃避敵人攻擊後，下一次近戰揮擊或射擊獲得 15% 傷害加成。

- **消耗方式**：近戰揮擊結束或開火後消耗效果，即使沒有命中也會用掉；連續閃避不能儲存多次加成。

- **傷害算例**：基礎傷害 100，生效時為 100 × 1.15 = 115；已有 25% 同階段加成時，100 × (1 + 25% + 15%) = 140。

[詳細資料](cryptic_next_hit_all_damage_on_dodge.md) · [返回目錄](#talent-index)

---

<a id="cryptic_electrocution_push"></a>
### 電流爆發(Voltaic Burst)

<img src="https://github.com/user-attachments/assets/80106b42-e788-43cb-a07a-ee69f668002f" width="72" height="72" alt="電流爆發天賦圖示">

- **觸發方式**：推擊確實讓敵人踉蹌時，對仍存活的目標施加 3 秒電擊；同一次推擊中所有符合條件的目標都能受到電擊。

- **冷卻方式**：該次推擊結束後才開始 12 秒冷卻；揮空或沒有讓敵人踉蹌，不會啟動冷卻。

- **時間算例**：推擊在第 0 秒結束，下一次能施加電擊的推擊最早在第 12 秒後；冷卻中的推擊仍保留本身的普通效果。

[詳細資料](cryptic_electrocution_push.md) · [返回目錄](#talent-index)

---

<a id="cryptic_corruption_resistance_doom"></a>
### 抗腐護符(Ablative Wards)

<img src="https://github.com/user-attachments/assets/1c4ea759-440c-48dd-bc21-3bc8303683d5" width="72" height="72" alt="抗腐護符天賦圖示">

- **防禦效果**：一般受到的腐敗量減少 90%。例如同條件原本增加 10 點腐敗，單靠這項抗性會變成 10 × 0.10 = 1 點。

- **週期代價**：每 20 秒自行受到基準 1 點腐敗；這筆代價已抵銷本天賦自己的 90% 抗性，因此不能再把它算成 0.1 點。

- **代價算例**：沒有其他修正、全程存活且不需要救援時，60 秒會發生 3 次，共增加 3 點基準腐敗。倒地或被制伏等需要援助的狀態會跳過當次。

- **其他效果**：額外減傷、腐敗抗性等仍可能影響實際代價；這項天賦不會清除已累積的腐敗。

[詳細資料](cryptic_corruption_resistance_doom.md) · [返回目錄](#talent-index)

---

<a id="cryptic_ranged_kills_tdr"></a>
### 威脅偵測指令(Threat Detection Imperative)

<img src="https://github.com/user-attachments/assets/a2e228da-729a-4b03-b07a-72bfaadf5dc3" width="72" height="72" alt="威脅偵測指令天賦圖示">

- **疊層方式**：遠程擊殺敵人獲得 1 層，每層提供 4% 韌性傷害減免，最多 5 層。再次觸發會重設 8 秒倒數。

- **衰減方式**：沒有再擊殺時，每 8 秒少一層；從 5 層開始，8、16、24、32、40 秒後依序剩 4、3、2、1、0 層。

- **減傷算例**：5 層合計 20%，原本 100 點韌性傷害變成 100 × (1 − 5 × 4%) = 80；另有獨立 15% 減傷時，80 × 0.85 = 68 點。

[詳細資料](cryptic_ranged_kills_tdr.md) · [返回目錄](#talent-index)

---
