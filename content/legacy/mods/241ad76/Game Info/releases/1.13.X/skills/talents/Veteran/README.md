# 老兵天賦：Release 1.13.1

[English](en/README.md)

[來源、公式與技術索引](SOURCE_INDEX.md)｜[技能分類](../../README.md)｜[版本資訊](../../../README.md)
[角色基礎效果](BASE_EFFECTS.md)

<a id="talent-index"></a>

## 技能目錄

| 技能 | 主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/7b9b7141-a7fa-4f3b-944f-5f1141cdc04e" width="32" height="32" alt="煙霧手雷天賦圖示"> [煙霧手雷](#veteran_smoke_grenade)<br>- Smoke Grenade | <ul><li>投出煙霧手雷，約 1.5 秒後展開持續 15 秒的煙霧。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/2bec21d1-d677-4386-942d-2c2697c285d1" width="32" height="32" alt="擲彈兵天賦圖示"> [擲彈兵](#veteran_extra_grenade)<br>- Grenadier | <ul><li>手雷攜帶上限增加 1 顆。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/5179b403-3945-41a4-9c68-5278b6968c24" width="32" height="32" alt="手雷專家天賦圖示"> [手雷專家](#veteran_improved_grenades)<br>- Grenade Tinkerer | <ul><li>粉碎者破片手雷：爆炸傷害增加 25%，爆炸半徑增加 25%。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/b0967626-73da-49a8-a1b9-1f4d6c1daffa" width="32" height="32" alt="穿甲手雷天賦圖示"> [穿甲手雷](#veteran_krak_grenade)<br>- Krak Grenade | <ul><li>投出會追向合適裝甲目標、並黏附其身上的穿甲手雷。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/511ac082-cbea-4af3-8f8e-3dfeab7ca2bf" width="32" height="32" alt="炸藥儲備天賦圖示"> [炸藥儲備](#veteran_replenish_grenades)<br>- Demolition Stockpile | <ul><li>定期補回手雷</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/6fa67f08-3b19-4bee-8a32-d5815db7297f" width="32" height="32" alt="粉碎者破片手雷天賦圖示"> [粉碎者破片手雷](#veteran_grenade_apply_bleed)<br>- Shredder Frag Grenade | <ul><li>破片手雷爆炸造成傷害後，對仍存活的敵人施加 6 層流血。</li></ul> | 閃擊 |
| <img src="https://github.com/user-attachments/assets/f8c278c8-72a1-476c-93d1-6656268ba8e4" width="32" height="32" alt="抵近殺敵天賦圖示"> [抵近殺敵](#veteran_movement_speed_coherency)<br>- Close and Kill | <ul><li>你與協同範圍內的隊友移動速度增加 7.5%。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/9a3da9ac-d8f1-4745-9af6-25852f52834a" width="32" height="32" alt="火力小分隊天賦圖示"> [火力小分隊](#veteran_increased_damage_coherency)<br>- Fire Team | <ul><li>你與協同範圍內的隊友傷害增加 7.5%。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/c2dffa00-cd24-478f-96c7-4007f4239e6a" width="32" height="32" alt="生存專家天賦圖示"> [生存專家](#veteran_aura_gain_ammo_on_elite_kill_improved)<br>- Survivalist | <ul><li>你或擁有此光環效果的隊友擊殺精英、專家敵人時，為擊殺者及其協同範圍內的隊友補充 0.5% 備用彈藥上限的彈藥。</li></ul> | 光環 |
| <img src="https://github.com/user-attachments/assets/61ed9652-570a-48ad-9a3b-4961c131dd36" width="32" height="32" alt="火力齊射天賦圖示"> [火力齊射](#veteran_combat_ability_stance)<br>- Volley Fire | <ul><li>立即切換至遠程武器，姿態持續 6 秒，冷卻 30 秒。</li><li>遠程傷害 +15%、弱點額外傷害加成 +15%；兩項分別結算。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/0f9d7c51-7e6a-4f3d-a367-5c22d0adf308" width="32" height="32" alt="滲透天賦圖示"> [滲透](#veteran_invisibility_on_combat_ability)<br>- Infiltrate | <ul><li>立即回滿自身韌性，並隱身最多 8 秒；</li><li>冷卻時間 40 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/7a72c16f-0170-458e-9bd4-4d585cf523d3" width="32" height="32" alt="低調天賦圖示"> [低調](#veteran_reduced_threat_after_combat_ability)<br>- Low Profile | <ul><li>使用戰鬥技能後，敵人選你為目標的仇恨權重降低 90%，持續 10 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/f89a6abd-27a9-4099-9a5c-cd778cbe34ba" width="32" height="32" alt="處決者姿態天賦圖示"> [處決者姿態](#veteran_combat_ability_elite_and_special_outlines)<br>- Executioner's Stance | <ul><li>強化火力齊射：遠程傷害與弱點額外傷害加成各提高至 25%，分別結算；遠程衝擊加成提高至 100%。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/2afc79fa-02f2-4943-b4e7-abe35435f7bd" width="32" height="32" alt="目標引導增強天賦圖示"> [目標引導增強](#veteran_combat_ability_coherency_outlines)<br>- Enhanced Target Priority | <ul><li>效果：啟動處決者姿態時，協同範圍內的隊友也會看見精英與專家敵人的輪廓，持續 5 秒。</li><li>你擊殺符合條件的敵人、延長姿態時，也會重新為當時處於協同範圍的隊友提供 5 秒輪廓。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/ca186661-9499-4f3f-9449-596caa35b7b6" width="32" height="32" alt="火力反擊天賦圖示"> [火力反擊](#veteran_combat_ability_ranged_roamer_outlines)<br>- Counter-Fire | <ul><li>效果：處決者姿態會額外標出一般射手與潛行者，例如血痂射手、渣滓潛行者。</li><li>啟動或更新輪廓時，這些敵人必須在你 50 公尺內。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/0c033c93-a850-4295-853d-10698ec96e89" width="32" height="32" alt="獵手決意天賦圖示"> [獵手決意](#veteran_toughness_bonus_leaving_invisibility)<br>- Hunter's Resolve | <ul><li>效果：啟動滲透時，受到的韌性傷害降低 50%；</li><li>隱身期間持續生效，解除隱身後再維持 10 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/57d6b442-9cee-45c3-ba74-4a191649eddb" width="32" height="32" alt="戰術意識天賦圖示"> [戰術意識](#veteran_elite_kills_reduce_cooldown)<br>- Tactical Awareness | <ul><li>觸發方式：擊殺專家敵人後，獲得 3 秒的冷卻恢復效果：每秒額外恢復 1 秒戰鬥技能冷卻。</li><li>一般精英不會觸發。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/73961902-95ea-4316-bda1-13b23dac1789" width="32" height="32" alt="發號施令天賦圖示"> [發號施令](#veteran_combat_ability_stagger_nearby_enemies)<br>- Voice of Command | <ul><li>施放效果：大聲呼喊，使周圍 9 公尺內的敵人踉蹌，並立即回滿自己的韌性。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/a8bcdde1-34e3-449d-9b46-e9130865b285" width="32" height="32" alt="只有死亡，職責才會終結天賦圖示"> [只有死亡，職責才會終結](#veteran_combat_ability_revive_nearby_allies)<br>- Only In Death Does Duty End | <ul><li>效果：發號施令可以立即扶起周圍 9 公尺內倒地的隊友，無須逐一按住救援。</li><li>一次施放可扶起範圍內多名倒地隊友。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/fc16005a-fb09-4db6-bd15-e18d45c6d935" width="32" height="32" alt="鷹眼天賦圖示"> [鷹眼](#veteran_increased_weakspot_power_after_combat_ability)<br>- Marksman | <ul><li>效果：使用戰鬥技能後，命中弱點時的攻擊威力提高 20%，持續 10 秒；</li><li>近戰與遠程攻擊皆可受益。</li><li>使用滲透時，隱身期間便生效，解除隱身後再維持 10 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/56d61b06-dd20-4832-8293-0220d1f3960c" width="32" height="32" alt="責任與榮譽天賦圖示"> [責任與榮譽](#veteran_combat_ability_increase_and_restore_toughness_to_coherency)<br>- Duty and Honour | <ul><li>效果：施放發號施令時，你與協同範圍內的隊友獲得額外 75 點最大韌性，持續 10 秒；</li><li>目前韌性也增加 75 點。</li><li>你自己還會受到發號施令的回滿效果。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/29160cac-e32b-4037-bc8c-3a0765e3a6df" width="32" height="32" alt="掩護射擊天賦圖示"> [掩護射擊](#veteran_combat_ability_extra_charge)<br>- Overwatch | <ul><li>滲透可保留兩次，冷卻時間增加</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/1181fe6e-4066-4d75-b996-a0eb01d7583d" width="32" height="32" alt="肉搏戰天賦圖示"> [肉搏戰](#veteran_increased_close_damage_after_combat_ability)<br>- Close Quarters Killzone | <ul><li>效果：使用戰鬥技能後，提高對近距離敵人造成的傷害，持續 10 秒。</li><li>滲透則從隱身期間開始生效，解除隱身後再持續 10 秒。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/0df9e7bd-7394-4f93-ba54-f8f6d2884d02" width="32" height="32" alt="敵人越大...天賦圖示"> [敵人越大...](#veteran_combat_ability_ogryn_outlines)<br>- The Bigger they Are ... | <ul><li>效果：處決者姿態的每次持續時間從 6 秒延長至 9 秒，並額外標出歐格林、怪物與首領的輪廓。</li></ul> | 能力 |
| <img src="https://github.com/user-attachments/assets/4376889f-d2eb-4efe-836a-5e0ce5ae27f4" width="32" height="32" alt="狙擊專注天賦圖示"> [狙擊專注](#veteran_snipers_focus)<br>- Marksman's Focus | <ul><li>遠程弱點擊殺獲得 3 層狙擊專注，每層增加 7.5% 遠程暴擊／弱點額外傷害加成與 1% 裝填速度。</li><li>額外傷害加成不等於整次命中的增幅。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/136d0a92-5459-4218-a2b3-324f367ba69d" width="32" height="32" alt="滲透盔甲天賦圖示"> [滲透盔甲](#veteran_snipers_focus_rending_bonus)<br>- Chink in their Armour | <ul><li>狙擊專注達到 10 層時，獲得 15% 撕裂；</li><li>低於 10 層後失效。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/62660bca-751b-435a-9d60-48590aadd37f" width="32" height="32" alt="視野狹窄天賦圖示"> [視野狹窄](#veteran_snipers_focus_toughness_bonus)<br>- Tunnel Vision | <ul><li>每層狙擊專注使韌性恢復量增加 4%。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/426b1945-b7fc-40e8-9db1-3bda08514bab" width="32" height="32" alt="遠程刺客天賦圖示"> [遠程刺客](#veteran_snipers_focus_increased_stacks)<br>- Long Range Assassin | <ul><li>狙擊專注的效果上限由 10 層提高至 15 層。</li><li>滿層 112.5% 加成只作用於遠程暴擊／弱點額外傷害。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/80917bab-ea62-4a9a-a0fa-f9b443ee1b0b" width="32" height="32" alt="武器專家天賦圖示"> [武器專家](#veteran_weapon_switch_passive)<br>- Weapons Specialist | <ul><li>切換至遠程武器：手持近戰武器時，每次擊殺累積 1 層，最多 10 層。</li><li>切出遠程武器後，消耗所有層數，每層提高 2% 遠程攻擊速度與裝填速度，持續 10 秒；</li><li>再切換武器會提前結束。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/a6e24eb8-063a-45a5-8796-acde81d1f734" width="32" height="32" alt="時刻警覺天賦圖示"> [時刻警覺](#veteran_weapon_switch_replenish_toughness)<br>- On Your Toes | <ul><li>觸發方式：儲存至少 1 層武器專家的加成後，切換至對應武器，恢復 20% 最大韌性。</li><li>恢復量固定，不隨層數增加。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/842c2a40-8bb4-45fa-a1e2-672fedf80d78" width="32" height="32" alt="有備無患天賦圖示"> [有備無患](#veteran_weapon_switch_replenish_ammo)<br>- Always Prepared | <ul><li>觸發方式：手持近戰武器擊殺、儲存武器專家的層數後，切出遠程武器，會把備用彈藥移入彈匣。</li><li>層數越多，補入量越多。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/bc2a44d8-866d-4f29-a680-f84e98b72b01" width="32" height="32" alt="活力煥發天賦圖示"> [活力煥發](#veteran_weapon_switch_replenish_stamina)<br>- Invigorated | <ul><li>觸發方式：手持遠程武器擊殺敵人、儲存武器專家的近戰加成後，切出近戰武器，恢復 20% 最大耐力，並在 3 秒內降低 25% 耐力消耗。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/85048589-7642-40e7-9d4b-ab325da2ea25" width="32" height="32" alt="鎖定目標天賦圖示"> [鎖定目標](#veteran_improved_tag)<br>- Focus Target! | <ul><li>累積與標記：起始有 1 層，每 1.5 秒增加 1 層，最多 4 層。</li><li>標記敵人時，依儲存的層數提高該敵人承受的傷害，自己和隊友的攻擊都能受益；</li><li>成功套用後，儲存量重回 1 層。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/47cc6995-f2fa-407d-9cb0-4dd91fcdc10d" width="32" height="32" alt="目標擊倒！天賦圖示"> [目標擊倒！](#veteran_improved_tag_dead_bonus)<br>- Target Down! | <ul><li>觸發方式：目前被鎖定目標標記的敵人死亡時，你與協同範圍內的隊友恢復韌性及耐力，不要求由你親自擊殺。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/48ecea96-bdaa-49e6-b9b7-ee3ac26fc1c5" width="32" height="32" alt="轉移火力！天賦圖示"> [轉移火力！](#veteran_improved_tag_dead_coherency_bonus)<br>- Redirect Fire! | <ul><li>觸發方式：目前被鎖定目標標記的敵人死亡時，你與協同範圍內的隊友獲得傷害加成，持續 10 秒，不要求由你親自擊殺。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/a95c5ea6-546f-462d-a073-56f9d1a21103" width="32" height="32" alt="集中火力天賦圖示"> [集中火力](#veteran_improved_tag_more_damage)<br>- Focused Fire | <ul><li>效果：鎖定目標可儲存的層數從 4 層提高至 6 層，每層仍讓目標承受的傷害乘以 1.05。</li></ul> | 鑰石 |
| <img src="https://github.com/user-attachments/assets/3ec21db4-4013-4522-850f-14c583e25ea7" width="32" height="32" alt="爆破小隊天賦圖示"> [爆破小隊](#veteran_aura_elite_kills_restore_grenade)<br>- Demolition Team | <ul><li>你或協同範圍內的隊友擊殺精英或專家敵人時，有 5% 機率為你補充 1 顆手雷。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a5b64063-ac9d-404d-98ac-528f24aafb65" width="32" height="32" alt="戰術裝填天賦圖示"> [戰術裝填](#veteran_faster_reload_on_non_empty_clips)<br>- Tactical Reload | <ul><li>彈匣還有彈藥時開始裝填，裝填速度增加 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/009ef44a-cf3d-44cf-ac8b-cda57c6fd83d" width="32" height="32" alt="齊射能手天賦圖示"> [齊射能手](#veteran_reload_speed_on_elite_kill)<br>- Volley Adept | <ul><li>擊殺精英或專家敵人後，下一次裝填速度增加 30%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d10f9131-4785-4bff-91a6-af630759b2dd" width="32" height="32" alt="堅定不移天賦圖示"> [堅定不移](#veteran_increased_weakspot_damage)<br>- Precision Strikes | <ul><li>弱點命中的額外傷害加成 +30%；整次命中的增幅依武器、目標與既有加成而變。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/7be19cb4-a1cb-4211-b9f2-d754f3c95b6c" width="32" height="32" alt="亡命之徒天賦圖示"> [亡命之徒](#veteran_increased_melee_crit_chance_and_melee_finesse)<br>- Desperado | <ul><li>近戰爆擊率增加 10 個百分點。</li><li>近戰爆擊／弱點額外傷害加成 +25%，整次命中的增幅依武器與目標而變。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d6402640-110e-4d25-b1b3-780a49b1c4e1" width="32" height="32" alt="嗜血天賦圖示"> [嗜血](#veteran_all_kills_replenish_toughness)<br>- Out for Blood | <ul><li>每次擊殺額外恢復 5% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/dca385d7-a54e-4bf5-b67d-f3d29ef82234" width="32" height="32" alt="遊擊者天賦圖示"> [遊擊者](#veteran_increase_damage_after_sprinting)<br>- Skirmisher | <ul><li>衝刺或滑行時持續累積傷害加成，每層增加 6.25%，最多 4 層。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fd178238-be59-4c18-8631-12423f5506fb" width="32" height="32" alt="趁火打劫天賦圖示"> [趁火打劫](#veteran_crits_apply_rending)<br>- Exploit Weakness | <ul><li>近戰爆擊命中後，傷害增加 20%，持續 6 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a882268c-6f4f-42ee-8973-a64dd6e882e7" width="32" height="32" alt="不拋棄不放棄天賦圖示"> [不拋棄不放棄](#veteran_movement_speed_towards_downed)<br>- Leave No One Behind | <ul><li>面向需要援助的隊友時，移動速度增加 20%，並免疫眩暈。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/cc7841b0-9637-4d35-8bca-c2c418798875" width="32" height="32" alt="裂擊天賦圖示"> [裂擊](#veteran_rending_bonus)<br>- Rending Strikes | <ul><li>武器獲得 10% 撕裂。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/980ba0fa-2a34-4f97-b592-05651671933b" width="32" height="32" alt="互惠互利天賦圖示"> [互惠互利](#veteran_dodging_grants_crit)<br>- Reciprocity | <ul><li>每次成功閃避攻擊，爆擊率增加 5 個百分點，最多 5 層。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/a7c3f5a6-113a-404a-873d-985481ec316b" width="32" height="32" alt="靈活接敵天賦圖示"> [靈活接敵](#veteran_kill_grants_damage_to_other_slot)<br>- Agile Engagement | <ul><li>近戰擊殺使遠程傷害增加 25%；</li><li>遠程擊殺使近戰傷害增加 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8378bd8a-7c90-41fd-83c7-40c135c75caa" width="32" height="32" alt="鋸齒刀刃天賦圖示"> [鋸齒刀刃](#veteran_hits_cause_bleed)<br>- Serrated Blade | <ul><li>近戰命中造成傷害後，對仍存活的敵人施加 2 層流血。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4a13cdee-8f88-4412-8b56-e3b3b5590459" width="32" height="32" alt="戰壕兵訓練天賦圖示"> [戰壕兵訓練](#veteran_attack_speed)<br>- Trench Fighter Drill | <ul><li>近戰攻擊速度增加 10%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/0801494c-4548-4fcb-afe7-8a7c563ef396" width="32" height="32" alt="猛攻天賦圖示"> [猛攻](#veteran_continous_hits_apply_rending)<br>- Onslaught | <ul><li>連續命中同一個仍存活的敵人，從第二次攻擊起，每次施加 1 層脆弱。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/1ef34fb3-ac4e-47d1-b7c1-0d13f10e3173" width="32" height="32" alt="韌性提升天賦圖示"> [韌性提升](#base_toughness_node_buff_medium_2)<br>- Toughness Boost | <ul><li>最大韌性增加 25 點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/19c86987-5e48-4eeb-9385-33697b9d99b0" width="32" height="32" alt="喘息片刻天賦圖示"> [喘息片刻](#veteran_replenish_toughness_outside_melee)<br>- Catch a Breath | <ul><li>超過 5 秒未受到近戰命中時，每秒恢復 5% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4193f147-bd40-49f8-92d4-a2b83fa1ad5b" width="32" height="32" alt="首輪齊射天賦圖示"> [首輪齊射](#veteran_bonus_crit_chance_on_ammo)<br>- Opening Salvo | <ul><li>彈匣剩餘彈藥至少 80% 時，遠程爆擊率增加 10 個百分點。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8cc616f0-d225-4b5f-81a4-8780f478d471" width="32" height="32" alt="殺戮地帶天賦圖示"> [殺戮地帶](#veteran_ranged_power_out_of_melee)<br>- Kill Zone | <ul><li>未被近戰命中一段時間後，增加遠程傷害</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/cba2a46d-298c-434a-883d-e048f5ede32d" width="32" height="32" alt="突擊隊天賦圖示"> [突擊隊](#veteran_no_ammo_consumption_on_lasweapon_crit)<br>- Shock Trooper | <ul><li>雷射武器的暴擊射擊不消耗彈藥。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ba2f9f5e-0466-433d-a93d-68b1f9606dd7" width="32" height="32" alt="凋零烈焰天賦圖示"> [凋零烈焰](#veteran_increased_ranged_cleave)<br>- Withering Fire | <ul><li>遠程順劈攻擊的穿透能力增加 50%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/c7ac403a-7fac-4ce9-bc80-8a7df2af7907" width="32" height="32" alt="振奮擊倒天賦圖示"> [振奮擊倒](#veteran_replenish_toughness_on_weakspot_kill)<br>- Exhilarating Takedown | <ul><li>遠程弱點擊殺恢復韌性並累積減傷</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/4087a451-e4ae-429b-afe6-75369e2903f3" width="32" height="32" alt="全副武裝天賦圖示"> [全副武裝](#veteran_ammo_increase)<br>- Fully Loaded | <ul><li>備用彈藥上限增加 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/1a08688e-e370-4eac-a27e-fd48da3b3965" width="32" height="32" alt="天生領袖天賦圖示"> [天生領袖](#veteran_allies_in_coherency_share_toughness_gain)<br>- Born Leader | <ul><li>協同半徑增加 50%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/aba3bef3-ec36-4b94-8097-95a2f43d593e" width="32" height="32" alt="臨場發揮天賦圖示"> [臨場發揮](#veteran_better_deployables)<br>- Field Improvisation | <ul><li>小隊的彈藥箱也能補滿可補給的手雷。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8c1dadf2-9263-4efa-a710-9da08a41eb3e" width="32" height="32" alt="火力掩護天賦圖示"> [火力掩護](#veteran_replenish_toughness_and_boost_allies)<br>- Covering Fire | <ul><li>遠程擊殺敵人時，可為該敵人附近的 1 名隊友恢復 15% 最大韌性，並使其傷害增加 15%，持續 6 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/284f479c-7f5d-463f-bf50-1003d34b9f5b" width="32" height="32" alt="求勝心天賦圖示"> [求勝心](#veteran_ally_kills_increase_damage)<br>- Competitive Urge | <ul><li>隊友擊殺敵人時，有 2.5% 機率使你的傷害、近戰衝擊與壓制效果增加 20%，持續 8 秒。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/706a5b5b-5f7b-43bc-bbd0-7debf024671b" width="32" height="32" alt="擊殺紀錄天賦圖示"> [擊殺紀錄](#veteran_elite_kills_replenish_toughness)<br>- Confirmed Kill | <ul><li>擊殺精英或專家敵人，立即恢復 10% 最大韌性。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/139120eb-e9c5-41ea-b87c-bf4737b53f49" width="32" height="32" alt="密集隊形訓練天賦圖示"> [密集隊形訓練](#veteran_reduced_toughness_damage_in_coherency)<br>- Close Order Drill | <ul><li>協同範圍內每有 1 名隊友，韌性減傷增加 11%；</li><li>3 名隊友時達到 33%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f7517509-e85f-47fb-b775-234a6aa0950a" width="32" height="32" alt="遠射天賦圖示"> [遠射](#veteran_increased_damage_based_on_range)<br>- Longshot | <ul><li>遠程傷害增加 10%；</li><li>距離越遠，額外再增加最多 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/f51a3100-c73f-4d71-833e-a71bb9e002bc" width="32" height="32" alt="行雲流水天賦圖示"> [行雲流水](#veteran_reduce_swap_time)<br>- One Motion | <ul><li>武器切換速度增加 50%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e65e3909-4dac-413f-827d-f5db9138e5e2" width="32" height="32" alt="死亡射手天賦圖示"> [死亡射手](#veteran_ads_drain_stamina)<br>- Deadshot | <ul><li>瞄準且仍有耐力時，爆擊率增加 25 個百分點，瞄準晃動降低 60%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/fc1e80c9-c17b-4e96-909d-bab403221f03" width="32" height="32" alt="幹掉它！天賦圖示"> [幹掉它！](#veteran_big_game_hunter)<br>- Bring it Down! | <ul><li>對歐格林與巨獸的傷害增加 20%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/915cdbef-5b88-4d3b-a4f1-e29e8a8f0f07" width="32" height="32" alt="優越情節天賦圖示"> [優越情節](#veteran_increase_damage_vs_elites)<br>- Superiority Complex | <ul><li>增加對精英敵人的傷害</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/8567315b-bea7-4be4-aaec-22d7096945a9" width="32" height="32" alt="靈活應對天賦圖示"> [靈活應對](#veteran_dodging_grants_stamina)<br>- Duck and Dive | <ul><li>移動速度增加 5%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/d56c3a6f-0fed-4e37-bb08-aa3c87f5624d" width="32" height="32" alt="鋼鐵意志天賦圖示"> [鋼鐵意志](#veteran_tdr_on_high_toughness)<br>- Iron Will | <ul><li>目前韌性高於最大韌性的 75% 時，韌性受到的傷害降低 50%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/6632d16b-faac-444e-8139-99057e2f613a" width="32" height="32" alt="荷槍實彈天賦圖示"> [荷槍實彈](#veteran_clip_size)<br>- Lock and Load | <ul><li>彈匣容量增加 25%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/ae882322-f266-4e2c-8168-09f85a5c9285" width="32" height="32" alt="讓他們全趴下！天賦圖示"> [讓他們全趴下！](#veteran_increase_suppression)<br>- Keep Their Heads Down! | <ul><li>造成的壓制效果增加 75%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/e836f77f-9bb2-4b87-938a-3bab63656ff1" width="32" height="32" alt="秘密特工天賦圖示"> [秘密特工](#veteran_increased_damage_when_flanking)<br>- Covert Operative | <ul><li>從敵人的後半側以遠程攻擊命中時，傷害增加 30%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/b0fb41b1-81da-4263-8d21-101a3af0cbdb" width="32" height="32" alt="近戰傷害提升天賦圖示"> [近戰傷害提升](#base_melee_damage_node_buff_high_2)<br>- Melee Damage Boost | <ul><li>近戰傷害增加 15%。</li></ul> | 技能 |
| <img src="https://github.com/user-attachments/assets/20744626-5cef-4e5c-afef-0474fde5a4b5" width="32" height="32" alt="韌性減傷天賦圖示"> [韌性減傷](#base_toughness_damage_reduction_node_buff_medium_1)<br>- Toughness Damage Reduction | <ul><li>韌性受到的傷害降低 10%。</li></ul> | 技能 |

---

## 閃擊

<a id="veteran_smoke_grenade"></a>

### 煙霧手雷(Smoke Grenade)

<img src="https://github.com/user-attachments/assets/7b9b7141-a7fa-4f3b-944f-5f1141cdc04e" width="72" height="72" alt="煙霧手雷天賦圖示">

- **投出煙霧手雷，約 1.5 秒後展開持續 15 秒的煙霧。**
- 最多攜帶 **3 顆**。煙霧中央 4.5 公尺範圍可遮斷敵人視線；效果外緣為 5.5 公尺。
- 在煙霧中獲得掩蔽，離開後保留約 0.5 秒。煙霧不等同於無敵，已射出的攻擊仍可能命中。

#### 持續時間算例

- 沒有延長效果時，投出至煙霧結束約為 `1.5 + 15 = 16.5 秒`。
- 搭配手雷專家，煙霧持續 `15 × (1 + 100%) = 30 秒`，引信時間不變。

[詳細資料](veteran_smoke_grenade.md) · [返回目錄](#talent-index)

---

<a id="veteran_extra_grenade"></a>

### 擲彈兵(Grenadier)

<img src="https://github.com/user-attachments/assets/2bec21d1-d677-4386-942d-2c2697c285d1" width="72" height="72" alt="擲彈兵天賦圖示">

- **手雷攜帶上限增加 1 顆。**
- 每次投擲有 **20% 機率**額外投出 1 顆，不多消耗手雷；適用於三種老兵手雷。

#### 容量與機率算例

- 原本可帶 3 顆，點選後為 `3 + 1 = 4 顆`。
- 投擲 10 次，額外手雷的期望數為 `10 × 20% = 2 顆`；機率獨立判定，不保證每 5 次必定觸發。

[詳細資料](veteran_extra_grenade.md) · [返回目錄](#talent-index)

---

<a id="veteran_improved_grenades"></a>

### 手雷專家(Grenade Tinkerer)

<img src="https://github.com/user-attachments/assets/5179b403-3945-41a4-9c68-5278b6968c24" width="72" height="72" alt="手雷專家天賦圖示">

- **粉碎者破片手雷：爆炸傷害增加 25%，爆炸半徑增加 25%。**
- **穿甲手雷：爆炸傷害增加 75%。**
- **煙霧手雷：煙霧持續時間增加 100%。**

#### 強化算例

- 只計此天賦，破片爆炸原本 500 傷害，變為 `500 × 1.25 = 625`；外圈半徑 `10 × 1.25 = 12.5 公尺`，中心區 `2 × 1.25 = 2.5 公尺`。
- 穿甲爆炸原本 2,400 傷害，變為 `2,400 × 1.75 = 4,200`；煙霧由 `15 × 2 = 30 秒`。
- 傷害仍受距離、護甲及其他加成影響；流血傷害不套用破片爆炸的 25% 加成。

#### 繁中原文勘誤

- 原文把煙霧手雷的持續時間加成寫成「秒」。此處是持續時間增加 **100%**：15 秒延長至 30 秒，不是增加 100 秒。

[詳細資料](veteran_improved_grenades.md) · [返回目錄](#talent-index)

---

<a id="veteran_krak_grenade"></a>

### 穿甲手雷(Krak Grenade)

<img src="https://github.com/user-attachments/assets/b0967626-73da-49a8-a1b9-1f4d6c1daffa" width="72" height="72" alt="穿甲手雷天賦圖示">

- **投出會追向合適裝甲目標、並黏附其身上的穿甲手雷。**
- 最多攜帶 **3 顆**。碰撞或黏附後約 **1 秒**引爆；未碰撞時，飛行約 2 秒後開始 1 秒引信。
- 爆炸中心 **1.5 公尺內**傷害最高，外圈延伸至 **5 公尺**；中心爆炸可穿過盾牌。

#### 傷害與計時算例

- 中心爆炸、無其他加成、非首領、一般受擊部位：無甲目標為 **2,400**；甲殼護甲倍率為 2，得到 `2,400 × 2 = 4,800 傷害`。
- 在投出後 0.4 秒黏附，約在 `0.4 + 1 = 1.4 秒`爆炸；實際時間會受遊戲更新影響。
- 首領與爆炸外圈有另外的傷害計算，不能把 4,800 當成所有命中的固定傷害。

[詳細資料](veteran_krak_grenade.md) · [返回目錄](#talent-index)

---

<a id="veteran_replenish_grenades"></a>

### 炸藥儲備(Demolition Stockpile)

<img src="https://github.com/user-attachments/assets/511ac082-cbea-4af3-8f8e-3dfeab7ca2bf" width="72" height="72" alt="炸藥儲備天賦圖示">

- 手雷未滿時，定期補充 **1 顆手雷**。
- **粉碎者破片手雷、煙霧手雷：60 秒。**
- **穿甲手雷：90 秒。**
- 投擲手雷不會重置補給倒數；手雷補滿時，清除倒數進度。
- 每次補充 1 顆後，若手雷仍未補滿，重新開始下一輪倒數。

#### 補給範例

- 缺少 2 顆破片手雷：第 1 顆約需 **60 秒**，全部補齊約需 `60 × 2 = 120 秒`。
- 破片手雷已倒數 30 秒，再投擲 1 顆：再等約 `60 − 30 = 30 秒` 補回第 1 顆，之後再等約 60 秒補回第 2 顆。

[詳細資料](veteran_replenish_grenades.md) · [返回目錄](#talent-index)

---

<a id="veteran_grenade_apply_bleed"></a>

### 粉碎者破片手雷(Shredder Frag Grenade)

<img src="https://github.com/user-attachments/assets/6fa67f08-3b19-4bee-8a32-d5815db7297f" width="72" height="72" alt="粉碎者破片手雷天賦圖示">

- **破片手雷爆炸造成傷害後，對仍存活的敵人施加 6 層流血。**
- 最多攜帶 **3 顆**；約 **1.7 秒**後爆炸。爆炸中心區為 **2 公尺**，外圈延伸至 **10 公尺**，外圈傷害逐漸降低。
- 流血最多 **16 層**，約每 **0.5 秒**造成一次傷害；再次施加會重設 1.5 秒計時，未再施加時到期後逐次掉層。

#### 爆炸與流血算例

- 中心爆炸、無其他加成：無甲目標為 **500**；甲殼護甲倍率 0.2，得到 `500 × 0.2 = 100 傷害`。
- 三顆皆對同一存活敵人成功施加流血，層數依序為 `6 → 12 → min(18, 16) = 16`。
- 流血按層數曲線增強。只計流血本身、無甲目標，6 層每次傷害約為 `175 × [(6 ÷ 16)² × (3 − 2 × 6 ÷ 16)] × 0.5 ≈ 27.69`；16 層為 `175 × 1 × 0.5 = 87.5`。

[詳細資料](veteran_grenade_apply_bleed.md) · [返回目錄](#talent-index)

---

## 光環

<a id="veteran_movement_speed_coherency"></a>

### 抵近殺敵(Close and Kill)

<img src="https://github.com/user-attachments/assets/f8c278c8-72a1-476c-93d1-6656268ba8e4" width="72" height="72" alt="抵近殺敵天賦圖示">

- **你與協同範圍內的隊友移動速度增加 7.5%。**
- 同一種光環不重複套用；取代你的拾荒者光環。

#### 移動算例

- 不計其他移速效果，原本每秒移動 5 公尺：`5 × (1 + 7.5%) = 5.375 公尺／秒`。

[詳細資料](veteran_movement_speed_coherency.md) · [返回目錄](#talent-index)

---

<a id="veteran_increased_damage_coherency"></a>

### 火力小分隊(Fire Team)

<img src="https://github.com/user-attachments/assets/9a3da9ac-d8f1-4745-9af6-25852f52834a" width="72" height="72" alt="火力小分隊天賦圖示">

- **你與協同範圍內的隊友傷害增加 7.5%。**
- 同一種光環不因多位老兵而重複套用；取代你的拾荒者光環。

#### 傷害算例

- 只計此光環、基礎傷害 100：`100 × (1 + 7.5%) = 107.5 傷害`。
- 同階段已有 25% 加成時：`100 × (1 + 25% + 7.5%) = 132.5 傷害`。

[詳細資料](veteran_increased_damage_coherency.md) · [返回目錄](#talent-index)

---

<a id="veteran_aura_gain_ammo_on_elite_kill_improved"></a>

### 生存專家(Survivalist)

<img src="https://github.com/user-attachments/assets/c2dffa00-cd24-478f-96c7-4007f4239e6a" width="72" height="72" alt="生存專家天賦圖示">

- **你或擁有此光環效果的隊友擊殺精英、專家敵人時，為擊殺者及其協同範圍內的隊友補充 0.5% 備用彈藥上限的彈藥。**
- 光環補彈有 **5 秒冷卻**，取代拾荒者的 0.25% 光環。補彈進入備用彈藥，不直接裝入彈匣。
- 老兵自身的基礎補彈另行判定；不能把自己的總補彈量當成所有隊友都獲得的比例。

#### 補彈算例

- 備用彈藥上限 400 且缺額足夠：光環每次補 `400 × 0.5% = 2 發`。
- 上限 150：每次計算 `150 × 0.5% = 0.75 發`；小數累積保留，四次合計可補 **3 發**。
- 自身基礎 1% 補彈與此光環同時成功時，上限 400 的老兵共補 `400 × (1% + 0.5%) = 6 發`；隊友只有此光環時獲得 **2 發**。

#### 繁中原文勘誤

- 原文把補彈比例標成「發」。此處應為 **備用彈藥上限的 0.5%**；例如上限 400 發時補 2 發，不是固定補 0.5 發。

[詳細資料](veteran_aura_gain_ammo_on_elite_kill_improved.md) · [返回目錄](#talent-index)

---

## 能力

<a id="veteran_combat_ability_stance"></a>

### 火力齊射(Volley Fire)

<img src="https://github.com/user-attachments/assets/61ed9652-570a-48ad-9a3b-4961c131dd36" width="72" height="72" alt="火力齊射天賦圖示">

- **立即切換至遠程武器，進入持續 6 秒的火力齊射；冷卻時間 30 秒。**
- 遠程傷害增加 **15%**，遠程弱點命中的額外傷害加成增加 **15%**，遠程衝擊增加 **50%**。
- 弱點加成只作用於額外傷害部分；整次弱點命中的增幅隨武器與目標而變，須連同遠程傷害加成分別計算。
- 散布降低 **38%**、後座力降低 **24%**、瞄準晃動降低 **60%**；期間免疫壓制、眩暈及減速等干擾。
- 冷卻從施放時開始，姿態期間仍會計時。切換近戰武器不會自行結束姿態；倒地或受制時會結束。

#### 傷害與冷卻算例

- **遠程傷害**：單看遠程傷害階段，基礎傷害 100、無其他加成時，`100 × 1.15 = 115 點`。

- **弱點額外傷害**：只比較弱點加成這一項，固定其他效果結算後的基礎部分 100、未加成的弱點額外部分 40，且未暴擊、無其他額外傷害加成：由 `100 + 40 = 140 點` 變成 `100 + 40 × 1.15 = 146 點`，增加 `6 ÷ 140 ≈ 4.29%`。這不是整個火力齊射的總增幅；遠程傷害加成仍須另外納入。

- **冷卻時間**：施放後經過 6 秒，姿態結束；沒有其他冷卻效果時，還需約 `30 − 6 = 24 秒`再次使用。

[詳細資料](veteran_combat_ability_stance.md) · [返回目錄](#talent-index)

---

<a id="veteran_invisibility_on_combat_ability"></a>

### 滲透(Infiltrate)

<img src="https://github.com/user-attachments/assets/0f9d7c51-7e6a-4f3d-a367-5c22d0adf308" width="72" height="72" alt="滲透天賦圖示">

- **立即回滿自身韌性，並隱身最多 8 秒；冷卻時間 40 秒。**
- 隱身時移動速度增加 **25%**。傷害增加 **30%**，並在解除隱身後保留 **8 秒**。
- 一般開火、近戰命中、投擲手雷或完成救援互動會提早解除隱身。已施加的流血、燃燒等持續傷害不會單憑傷害跳動解除隱身。
- 解除隱身時，對周圍約 **6 公尺**的敵人施加踉蹌與壓制。冷卻從施放時開始，隱身期間仍會計時。

#### 恢復、傷害與時間算例

- 目前韌性 30／100，施放後回至 100，恢復 `100 − 30 = 70 點`。
- 只計這次增傷，基礎傷害 100：`100 × 1.3 = 130 傷害`。
- 若第 3 秒解除隱身，增傷維持到約第 `3 + 8 = 11 秒`；此時距離能力冷卻完成仍約有 `40 − 11 = 29 秒`。

[詳細資料](veteran_invisibility_on_combat_ability.md) · [返回目錄](#talent-index)

---

<a id="veteran_reduced_threat_after_combat_ability"></a>

### 低調(Low Profile)

<img src="https://github.com/user-attachments/assets/7a72c16f-0170-458e-9bd4-4d585cf523d3" width="72" height="72" alt="低調天賦圖示">

- **使用戰鬥技能後，敵人選你為目標的仇恨權重降低 90%，持續 10 秒。**
- 使用滲透時，隱身期間即生效，解除隱身後再保留 **10 秒**。
- 效果不疊層；已開始 10 秒倒數後，再次施放不會重設這次倒數。
- 敵人仍可能因距離、攻擊行為等條件選你為目標。

#### 仇恨與時間算例

- 假設其他選敵條件相同，該階段原權重 100：`100 × (1 − 90%) = 10`；這不代表只有 10% 機率被攻擊。
- 第 3 秒解除滲透，效果保留至約第 `3 + 10 = 13 秒`。

[詳細資料](veteran_reduced_threat_after_combat_ability.md) · [返回目錄](#talent-index)

---

<a id="veteran_combat_ability_elite_and_special_outlines"></a>

### 處決者姿態(Executioner's Stance)

<img src="https://github.com/user-attachments/assets/f89a6abd-27a9-4099-9a5c-cd778cbe34ba" width="72" height="72" alt="處決者姿態天賦圖示">

- **強化火力齊射：遠程傷害與遠程弱點額外傷害加成各提高至 25%，遠程衝擊加成提高至 100%。**
- 兩項傷害加成各由 15% 提高至 25%，各增加 10 個百分點；弱點加成仍只強化額外傷害部分，整次命中的增幅依武器與目標而變。
- 姿態持續 **6 秒**、冷卻 **30 秒**；期間每秒恢復 **10% 最大韌性**。
- 顯示精英與專家敵人的輪廓；歐格林、巨獸與首領須搭配「敵人越大...」才能納入。一般精英限約 50 公尺內，專家不受這項距離限制。
- 擊殺符合輪廓種類的敵人，將姿態持續時間重設為 6 秒。冷卻持續計時；散布、後座力與晃動改善沿用火力齊射。

#### 傷害、恢復與刷新算例

- **遠程傷害**：單看遠程傷害階段，基礎傷害 100 且無其他加成：火力齊射為 `100 × 1.15 = 115 點`，升級後為 `100 × 1.25 = 125 點`；相對於升級前增加 `10 ÷ 115 ≈ 8.70%`。

- **弱點額外傷害**：只比較弱點加成的升級，固定其他效果結算後的基礎部分 100、未加成的弱點額外部分 40，且未暴擊、無其他額外傷害加成：由 `100 + 40 × 1.15 = 146 點` 變成 `100 + 40 × 1.25 = 150 點`，增加 `4 ÷ 146 ≈ 2.74%`。這只反映弱點加成由 15% 升至 25% 的差異，完整增幅還須納入遠程傷害的升級。

- **韌性恢復**：最大韌性 100、缺額足夠且無恢復加成：每秒 `100 × 10% = 10 點`，完整 6 秒約恢復 `10 × 6 = 60 點`。

- **重新計時**：第 4 秒完成合資格擊殺，姿態維持至約第 `4 + 6 = 10 秒`。

#### 繁中原文勘誤

- 原文寫擊殺後「延長」效果時間，應為 **將剩餘時間重設為完整持續時間**。未搭配延長天賦時，剩 2 秒再擊殺會回到 6 秒，不是變成 8 秒。

[詳細資料](veteran_combat_ability_elite_and_special_outlines.md) · [返回目錄](#talent-index)

---

<a id="veteran_combat_ability_coherency_outlines"></a>

### 目標引導增強(Enhanced Target Priority)

<img src="https://github.com/user-attachments/assets/2afc79fa-02f2-4943-b4e7-abe35435f7bd" width="72" height="72" alt="目標引導增強天賦圖示">

- **效果**：啟動處決者姿態時，協同範圍內的隊友也會看見精英與專家敵人的輪廓，持續 5 秒。你擊殺符合條件的敵人、延長姿態時，也會重新為當時處於協同範圍的隊友提供 5 秒輪廓。

- **顯示範圍**：精英必須距離看見輪廓的隊友不到 50 公尺；專家敵人不受這項距離限制。一般射手、歐格林、怪物與首領的額外輪廓不會透過這個效果分享。

- **時間算例**：啟動時提供一次，若 4 秒後擊殺符合條件的敵人並重新計時姿態，隊友的輪廓時間重回 5 秒，約可看見至第 9 秒。

[詳細資料](veteran_combat_ability_coherency_outlines.md) · [返回目錄](#talent-index)

---

<a id="veteran_combat_ability_ranged_roamer_outlines"></a>

### 火力反擊(Counter-Fire)

<img src="https://github.com/user-attachments/assets/ca186661-9499-4f3f-9449-596caa35b7b6" width="72" height="72" alt="火力反擊天賦圖示">

- **效果**：處決者姿態會額外標出一般射手與潛行者，例如血痂射手、渣滓潛行者。啟動或更新輪廓時，這些敵人必須在你 50 公尺內。

- **延長姿態**：擊殺這些新增的目標類型，也能重設處決者姿態的持續時間。沒有另選敵人越大...時重回 6 秒；另選後重回 9 秒。

- **時間算例**：啟動姿態 4 秒後擊殺一名符合條件的射手，原本剩餘 2 秒會重回 6 秒，約可持續至第 10 秒。

[詳細資料](veteran_combat_ability_ranged_roamer_outlines.md) · [返回目錄](#talent-index)

---

<a id="veteran_toughness_bonus_leaving_invisibility"></a>

### 獵手決意(Hunter's Resolve)

<img src="https://github.com/user-attachments/assets/0c033c93-a850-4295-853d-10698ec96e89" width="72" height="72" alt="獵手決意天賦圖示">

- **效果**：啟動滲透時，受到的韌性傷害降低 50%；隱身期間持續生效，解除隱身後再維持 10 秒。

- **傷害算例**：原本會損失 100 點韌性的攻擊，生效時變成 `100 × 0.5 = 50 點`。這項效果不減少生命傷害。

- **時間算例**：隱身 8 秒後才解除，減傷總共約持續 `8 + 10 = 18 秒`；若第 2 秒主動攻擊解除，則約持續至第 12 秒。

- **多次施放**：若靠額外次數或縮短冷卻讓兩次效果重疊，兩份減傷各自計時並相乘；重疊時，原本 100 點韌性傷害變成 `100 × 0.5 × 0.5 = 25 點`。

[詳細資料](veteran_toughness_bonus_leaving_invisibility.md) · [返回目錄](#talent-index)

---

<a id="veteran_elite_kills_reduce_cooldown"></a>

### 戰術意識(Tactical Awareness)

<img src="https://github.com/user-attachments/assets/57d6b442-9cee-45c3-ba74-4a191649eddb" width="72" height="72" alt="戰術意識天賦圖示">

- **觸發方式**：擊殺專家敵人後，獲得 3 秒的冷卻恢復效果：每秒額外恢復 1 秒戰鬥技能冷卻。一般精英不會觸發。

- **連續擊殺**：效果不疊加恢復速度；期間再次擊殺專家敵人，會把持續時間重設為 3 秒，原本的每秒恢復節奏繼續。

- **冷卻算例**：觸發時還剩 25 秒冷卻，接下來約 3 秒內，自然冷卻前進 3 秒，天賦另外恢復 3 秒，因此剩餘 `25 − 3 − 3 = 19 秒`。

- **上限**：能力恢復完成後，多出的恢復量不會儲存到下次施放；若有兩次使用次數，則繼續恢復尚缺的次數，直到全滿。

[詳細資料](veteran_elite_kills_reduce_cooldown.md) · [返回目錄](#talent-index)

---

<a id="veteran_combat_ability_stagger_nearby_enemies"></a>

### 發號施令(Voice of Command)

<img src="https://github.com/user-attachments/assets/73961902-95ea-4316-bda1-13b23dac1789" width="72" height="72" alt="發號施令天賦圖示">

- **施放效果**：大聲呼喊，使周圍 9 公尺內的敵人踉蹌，並立即回滿自己的韌性。

- **冷卻**：基礎冷卻 40 秒，從施放時開始計算。

- **恢復算例**：最大韌性 100 點、目前剩 30 點時，施放後回到 100 點，補回 `100 − 30 = 70 點`。

- **範圍與限制**：距離 8 公尺的敵人位於作用範圍，10 公尺則超出範圍。實際踉蹌反應會受到敵人種類及當下狀態影響。

[詳細資料](veteran_combat_ability_stagger_nearby_enemies.md) · [返回目錄](#talent-index)

---

<a id="veteran_combat_ability_revive_nearby_allies"></a>

### 只有死亡，職責才會終結(Only In Death Does Duty End)

<img src="https://github.com/user-attachments/assets/a8bcdde1-34e3-449d-9b46-e9130865b285" width="72" height="72" alt="只有死亡，職責才會終結天賦圖示">

- **效果**：發號施令可以立即扶起周圍 9 公尺內倒地的隊友，無須逐一按住救援。一次施放可扶起範圍內多名倒地隊友。

- **適用狀態**：只處理倒地待救援；被網住、被壓制、懸掛邊緣或死亡後等待營救，不屬於這項自動扶起的範圍。

- **距離與冷卻**：基礎作用半徑為 9 公尺、冷卻 40 秒。例如兩名倒地隊友分別在 5 與 8 公尺處，兩人都能被扶起；10 公尺外則無法。

[詳細資料](veteran_combat_ability_revive_nearby_allies.md) · [返回目錄](#talent-index)

---

<a id="veteran_increased_weakspot_power_after_combat_ability"></a>

### 鷹眼(Marksman)

<img src="https://github.com/user-attachments/assets/fc16005a-fb09-4db6-bd15-e18d45c6d935" width="72" height="72" alt="鷹眼天賦圖示">

- **效果**：使用戰鬥技能後，命中弱點時的攻擊威力提高 20%，持續 10 秒；近戰與遠程攻擊皆可受益。使用滲透時，隱身期間便生效，解除隱身後再維持 10 秒。

- **作用方式**：先提高這次弱點命中的攻擊威力，再計算傷害與踉蹌；與堅定不移只加強弱點額外傷害的方式不同。實際傷害增幅仍受武器設定、目標及其他威力加成影響。

- **威力算例**：未計其他威力加成，原本 500 的攻擊威力變成 `500 × (1 + 20%) = 600`。這會提高該次弱點命中的基礎傷害及踉蹌力量。

- **傷害算例**：只看基礎傷害階段，假設無甲目標、傷害隨威力成正比，且先不計弱點額外傷害與其他倍率：原本 100 點，生效後為 `100 × 1.2 = 120 點`。若原有同階段 25% 威力加成，則由 125 變成 `100 × (1 + 25% + 20%) = 145 點`，實際增加 `20 ÷ 125 = 16%`；整次弱點命中的傷害須繼續計算額外傷害及部位倍率。

- **持續與重觸發**：不疊層；已開始的 10 秒倒數不會因效果期間再次施放而重設。例如第 4 秒再次施放，仍約在第一次倒數開始後第 10 秒結束。

- **適用範圍**：必須命中弱點；這項加成不增加順劈或穿透的目標數。

[詳細資料](veteran_increased_weakspot_power_after_combat_ability.md) · [返回目錄](#talent-index)

---

<a id="veteran_combat_ability_increase_and_restore_toughness_to_coherency"></a>

### 責任與榮譽(Duty and Honour)

<img src="https://github.com/user-attachments/assets/56d61b06-dd20-4832-8293-0220d1f3960c" width="72" height="72" alt="責任與榮譽天賦圖示">

- **效果**：施放發號施令時，你與協同範圍內的隊友獲得額外 75 點最大韌性，持續 10 秒；目前韌性也增加 75 點。你自己還會受到發號施令的回滿效果。

- **恢復算例**：原本上限 100 點、目前 30 點：隊友獲得效果後變成 `30 + 75 = 105／175 點`；施放者則回滿至 `175／175 點`。

- **結束時**：10 秒後上限恢復；目前韌性不會因上限下降而低於原有數量，但超過恢復後上限的部分會消失。例如結束前 160／175 點，結束後為 100／100；若剩 60／175 點，則為 60／100。

- **多次施放**：同時存在的每次加成都各自提供 75 點並計時。若兩次效果重疊，原本 100 點上限暫時提高至 `100 + 75 + 75 = 250 點`。

[詳細資料](veteran_combat_ability_increase_and_restore_toughness_to_coherency.md) · [返回目錄](#talent-index)

---

<a id="veteran_combat_ability_extra_charge"></a>

### 掩護射擊(Overwatch)

<img src="https://github.com/user-attachments/assets/29160cac-e32b-4037-bc8c-3a0765e3a6df" width="72" height="72" alt="掩護射擊天賦圖示">

- **滲透增加 1 次使用次數，最多儲存 2 次。**
- **每次冷卻時間延長 33%。**
- 兩次使用次數共用冷卻進度，**依序恢復**；每完成一次冷卻，恢復 1 次使用次數。
- 施放滲透後開始冷卻，隱身期間仍會計時。冷卻途中再次施放，保留已累積的進度。

#### 冷卻計算

- 未受其他冷卻效果影響時，每次恢復需要 `40 × (1 + 33%) = 53.2 秒`。
- 從零進度恢復 2 次：`53.2 × 2 = 106.4 秒`；約第 53.2 秒恢復第 1 次，第 106.4 秒恢復第 2 次。
- 首次施放後經過 20 秒，再用掉第 2 次：距離恢復 1 次仍需約 `53.2 − 20 = 33.2 秒`。

[詳細資料](veteran_combat_ability_extra_charge.md) · [返回目錄](#talent-index)

---

<a id="veteran_increased_close_damage_after_combat_ability"></a>

### 肉搏戰(Close Quarters Killzone)

<img src="https://github.com/user-attachments/assets/1181fe6e-4066-4d75-b996-a0eb01d7583d" width="72" height="72" alt="肉搏戰天賦圖示">

- **效果**：使用戰鬥技能後，提高對近距離敵人造成的傷害，持續 10 秒。滲透則從隱身期間開始生效，解除隱身後再持續 10 秒。

- **距離加成**：12.5 公尺內增加 15% 傷害；超過 12.5 公尺後逐漸減弱，到 30 公尺歸零。近戰與遠程攻擊皆可受益。

- **傷害算例**：12.5 公尺內，基礎 100 點變成 `100 × (1 + 15%) = 115 點`。16.875 公尺時，加成為 `15% × (1 − √((16.875 − 12.5) ÷ 17.5)) = 7.5%`，因此為 107.5 點。

- **與其他增傷合併**：若同一階段原有 25% 加成，近距離時為 `100 × (1 + 25% + 15%) = 140 點`。

- **重複施放**：不疊層；已開始的 10 秒倒數不會因效果期間再次施放而重設。

#### 繁中原文勘誤

- 原文的「近戰傷害加成」應為 **近距離傷害加成**。判斷的是與敵人的距離，近距離開槍也能受益。

[詳細資料](veteran_increased_close_damage_after_combat_ability.md) · [返回目錄](#talent-index)

---

<a id="veteran_combat_ability_ogryn_outlines"></a>

### 敵人越大...(The Bigger they Are ...)

<img src="https://github.com/user-attachments/assets/0df9e7bd-7394-4f93-ba54-f8f6d2884d02" width="72" height="72" alt="敵人越大...天賦圖示">

- **效果**：處決者姿態的每次持續時間從 6 秒延長至 9 秒，並額外標出歐格林、怪物與首領的輪廓。

- **輪廓距離**：啟動或更新輪廓時，上述敵人通常必須距離你不到 50 公尺；專家敵人不受這項距離限制。

- **延長姿態**：擊殺這些新增的目標類型，也會把姿態時間重設為完整 9 秒。

- **時間算例**：啟動 7 秒後擊殺一名符合條件的敵人，原本剩餘 2 秒會回到 9 秒，約可持續至第 16 秒。

[詳細資料](veteran_combat_ability_ogryn_outlines.md) · [返回目錄](#talent-index)

---

## 鑰石

<a id="veteran_snipers_focus"></a>

### 狙擊專注(Marksman's Focus)

<img src="https://github.com/user-attachments/assets/4376889f-d2eb-4efe-836a-5e0ce5ae27f4" width="72" height="72" alt="狙擊專注天賦圖示">

- **遠程弱點擊殺獲得 3 層狙擊專注；每層使遠程暴擊或弱點命中的額外傷害加成增加 7.5%，裝填速度增加 1%。**
- 額外傷害加成不提高基礎部分；武器與目標不同，整次命中的增幅也會不同。同時暴擊並命中弱點時，這項加成只套用一次。
- 效果最多按 **10 層**計算。已有層數時，任何弱點命中都能重設 **5 秒**持續時間；近戰弱點命中也可重新計時，但不增加層數。
- 未再觸發重新計時時，約每 5 秒減少 1 層；移動本身不消耗層數。

#### 傷害、裝填與衰減算例

- **十層效果**：額外傷害加成為 `10 × 7.5% = 75%`，裝填速度加成為 `10 × 1% = 10%`。

- **傷害增幅**：假設未暴擊的遠程弱點命中，基礎部分 100、未加成的額外部分 40，無其他加成：由 `100 + 40 = 140 點` 變成 `100 + 40 × (1 + 75%) = 170 點`，整次命中增加 `30 ÷ 140 ≈ 21.43%`。若額外部分改為 100，同條件則為 `200 → 100 + 100 × 1.75 = 275 點`，增加 `75 ÷ 200 = 37.5%`。

- **搭配堅定不移**：同樣未暴擊且命中弱點，基礎與未加成的額外部分各 100，無其他加成：`100 + 100 × (1 + 75% + 30%) = 305 點`。兩項加成在額外傷害部分相加。

- **裝填時間**：原本裝填 4 秒，無其他裝填加成時，`4 ÷ 1.1 ≈ 3.64 秒`。

- **層數衰減**：只有 3 層且不再重新計時時：約第 5 秒剩 2 層、第 10 秒剩 1 層、第 15 秒歸零。

[詳細資料](veteran_snipers_focus.md) · [返回目錄](#talent-index)

---

<a id="veteran_snipers_focus_rending_bonus"></a>

### 滲透盔甲(Chink in their Armour)

<img src="https://github.com/user-attachments/assets/136d0a92-5459-4218-a2b3-324f367ba69d" width="72" height="72" alt="滲透盔甲天賦圖示">

- **狙擊專注達到 10 層時，獲得 15% 撕裂；低於 10 層後失效。**
- 搭配遠程刺客後，觸發門檻仍為 10 層。
- 撕裂改善適用護甲的傷害倍率；實際增幅隨武器、目標護甲及已有撕裂而變。

#### 護甲與傷害算例

- **原倍率為 0.5**：只比較撕裂，假設未暴擊、未命中弱點，護甲結算前傷害 100，對某甲殼護甲的原倍率為 0.5，無其他加成：由 `100 × 0.5 = 50 點` 變成 `100 × (0.5 + 0.15) = 65 點`，實際增加 `15 ÷ 50 = 30%`。

- **原倍率為 0.8**：其餘條件相同，則由 80 變成 `100 × (0.8 + 0.15) = 95 點`，實際增加 `15 ÷ 80 = 18.75%`。

- **已有 10% 撕裂**：原倍率 0.5 時，由 `100 × (0.5 + 0.1) = 60 點` 變成 `100 × (0.5 + 0.1 + 0.15) = 75 點`，這次增加 `15 ÷ 60 = 25%`。

- **弱點或暴擊命中**：須繼續計算額外傷害，並納入狙擊專注的效果；上述算例不代表十層狙擊專注的總增幅。

[詳細資料](veteran_snipers_focus_rending_bonus.md) · [返回目錄](#talent-index)

---

<a id="veteran_snipers_focus_toughness_bonus"></a>

### 視野狹窄(Tunnel Vision)

<img src="https://github.com/user-attachments/assets/62660bca-751b-435a-9d60-48590aadd37f" width="72" height="72" alt="視野狹窄天賦圖示">

- **每層狙擊專注使韌性恢復量增加 4%。**
- **遠程弱點擊殺恢復 10% 最大耐力。**
- 一般韌性恢復可受益；明確忽略恢復加成的效果不適用。韌性與耐力都不能超過各自上限。

#### 恢復算例

- 原本恢復 20 點韌性，五層且沒有其他恢復加成：`20 × (1 + 5 × 4%) = 24 點`。
- 最大耐力 6：每次遠程弱點擊殺恢復 `6 × 10% = 0.6`；只缺 0.2 時，實際恢復 **0.2**。

#### 繁中原文勘誤

- 原文寫「每層專注恢復」韌性，應為 **每層使韌性恢復量增加 4%**。取得層數不會直接補回 4% 韌性；原本恢復 20 點時，一層使該次恢復變為 `20 × 1.04 = 20.8 點`。

[詳細資料](veteran_snipers_focus_toughness_bonus.md) · [返回目錄](#talent-index)

---

<a id="veteran_snipers_focus_increased_stacks"></a>

### 遠程刺客(Long Range Assassin)

<img src="https://github.com/user-attachments/assets/426b1945-b7fc-40e8-9db1-3bda08514bab" width="72" height="72" alt="遠程刺客天賦圖示">

- **狙擊專注的效果上限由 10 層提高至 15 層。**
- 每層效果與重新計時方式不變；滲透盔甲仍在 10 層觸發。
- 滿層的 112.5% 加成作用於遠程暴擊或弱點命中的額外傷害部分；整次命中的增幅隨武器、目標與既有加成而變。

#### 滿層算例

- **十五層效果**：額外傷害加成為 `15 × 7.5% = 112.5%`，裝填速度加成為 `15 × 1% = 15%`。

- **相對零層**：假設未暴擊的遠程弱點命中，基礎部分 100、未加成的額外部分 40，沒有其他加成：由 `100 + 40 = 140 點` 變成 `100 + 40 × (1 + 112.5%) = 185 點`；增加 `45 ÷ 140 ≈ 32.14%`。

- **相對原本十層上限**：同一算例，十層為 `100 + 40 × 1.75 = 170 點`，十五層為 185 點；升級並疊滿後再增加 `15 ÷ 170 ≈ 8.82%`。

- **裝填時間**：原本裝填 4 秒，無其他裝填加成時，`4 ÷ 1.15 ≈ 3.48 秒`。

[詳細資料](veteran_snipers_focus_increased_stacks.md) · [返回目錄](#talent-index)

---

<a id="veteran_weapon_switch_passive"></a>

### 武器專家(Weapons Specialist)

<img src="https://github.com/user-attachments/assets/80917bab-ea62-4a9a-a0fa-f9b443ee1b0b" width="72" height="72" alt="武器專家天賦圖示">

- **切換至遠程武器**：手持近戰武器時，每次擊殺累積 1 層，最多 10 層。切出遠程武器後，消耗所有層數，每層提高 2% 遠程攻擊速度與裝填速度，持續 10 秒；再切換武器會提前結束。

- **首輪射擊**：每層另提高 33 個百分點的遠程爆擊率，首次射擊後移除這項加成，攻速與裝填加成仍保留。原本 10% 爆擊率時，1 層為 `10% + 33% = 43%`，3 層為 `min(10% + 3 × 33%, 100%) = 100%`。

- **切換至近戰武器**：手持遠程武器時擊殺至少 1 名敵人，再切出近戰武器，可獲得 15% 近戰攻擊速度、10% 閃避速度與 10% 閃避距離，持續 10 秒；再切換武器會提前結束。這一側最多儲存 1 層。

- **速度算例**：10 層提供 `10 × 2% = 20%` 遠程攻速與裝填速度。不計其他加成，原本 3 秒的裝填動作變成 `3 ÷ 1.2 = 2.5 秒`；近戰原本 1 秒的攻擊動作變成 `1 ÷ 1.15 ≈ 0.87 秒`。

- **累積條件**：擊殺算在哪一側，取決於敵人死亡時你手持的武器；持續傷害或先前投出的手雷擊殺，也依當時手持的武器累積。

#### 繁中原文勘誤

- 原文把遠程攻速、裝填速度與爆擊率都放在「下一次射擊」之下。**只有額外爆擊率在首次射擊後移除**；遠程攻速與裝填速度仍保留至 10 秒效果結束，或切換武器時結束。

[詳細資料](veteran_weapon_switch_passive.md) · [返回目錄](#talent-index)

---

<a id="veteran_weapon_switch_replenish_toughness"></a>

### 時刻警覺(On Your Toes)

<img src="https://github.com/user-attachments/assets/a6e24eb8-063a-45a5-8796-acde81d1f734" width="72" height="72" alt="時刻警覺天賦圖示">

- **觸發方式**：儲存至少 1 層武器專家的加成後，切換至對應武器，恢復 20% 最大韌性。恢復量固定，不隨層數增加。

- **冷卻**：切至遠程與切至近戰，各自有 3 秒冷卻。即使冷卻尚未結束，切換仍會用掉該側儲存的層數。

- **恢復算例**：最大韌性 100 點時，每次恢復 `100 × 20% = 20 點`。目前有 90 點則只補到 100 點；上述數字未計其他韌性恢復加成。

[詳細資料](veteran_weapon_switch_replenish_toughness.md) · [返回目錄](#talent-index)

---

<a id="veteran_weapon_switch_replenish_ammo"></a>

### 有備無患(Always Prepared)

<img src="https://github.com/user-attachments/assets/842c2a40-8bb4-45fa-a1e2-672fedf80d78" width="72" height="72" alt="有備無患天賦圖示">

- **觸發方式**：手持近戰武器擊殺、儲存武器專家的層數後，切出遠程武器，會把備用彈藥移入彈匣。層數越多，補入量越多。

- **補彈公式**：`缺少的彈量 × 33% × 層數 ÷ 10`，結果向上取整，最高計算 10 層。

- **算例**：彈匣缺 30 發時，5 層補 `30 × 0.33 × 5 ÷ 10 = 4.95`，向上取整為 5 發；10 層補 `30 × 0.33 = 9.9`，向上取整為 10 發。

- **限制**：實際補入量不會超過備用彈藥或彈匣缺口；若算出補 10 發、備用彈藥只剩 3 發，就只補 3 發。

#### 繁中原文勘誤

- 原文寫成補充「彈藥儲備」，應為 **從備用彈藥移入彈匣**。這項效果不會憑空增加備用彈藥；補入多少發，就從備用彈藥扣除多少發。

[詳細資料](veteran_weapon_switch_replenish_ammo.md) · [返回目錄](#talent-index)

---

<a id="veteran_weapon_switch_replenish_stamina"></a>

### 活力煥發(Invigorated)

<img src="https://github.com/user-attachments/assets/bc2a44d8-866d-4f29-a680-f84e98b72b01" width="72" height="72" alt="活力煥發天賦圖示">

- **觸發方式**：手持遠程武器擊殺敵人、儲存武器專家的近戰加成後，切出近戰武器，恢復 20% 最大耐力，並在 3 秒內降低 25% 耐力消耗。

- **持續與重觸發**：減少耐力消耗的效果不因再次切換武器而提前結束；重新符合擊殺與切換條件時，恢復耐力並把 3 秒持續時間重設。

- **算例**：最大耐力 6 點時，恢復 `6 × 20% = 1.2 點`，最多補到上限。原本消耗 2 點耐力的動作，在效果期間消耗 `2 × (1 − 25%) = 1.5 點`。

[詳細資料](veteran_weapon_switch_replenish_stamina.md) · [返回目錄](#talent-index)

---

<a id="veteran_improved_tag"></a>

### 鎖定目標(Focus Target!)

<img src="https://github.com/user-attachments/assets/85048589-7642-40e7-9d4b-ab325da2ea25" width="72" height="72" alt="鎖定目標天賦圖示">

- **累積與標記**：起始有 1 層，每 1.5 秒增加 1 層，最多 4 層。標記敵人時，依儲存的層數提高該敵人承受的傷害，自己和隊友的攻擊都能受益；成功套用後，儲存量重回 1 層。

- **傷害算例**：每層乘以 1.05。4 層時，原本 100 點傷害變成 `100 × 1.05⁴ ≈ 121.55 點`；從 1 層等到 4 層約需 `(4 − 1) × 1.5 = 4.5 秒`。

- **更換與補強**：一次只能維持一名目標的增傷標記，持續 25 秒。再次標記同一敵人會重設 25 秒；只有新儲存量高於原標記層數時，才補上差額並重新從 1 層累積，不會把兩次層數直接相加。

- **目標死亡**：目前標記的敵人死亡時，儲存量至少回到 2 層；若原本已超過 2 層，就保留原數量。改標另一名敵人會移除舊目標的增傷。

- **補強算例**：先套用 2 層標記，再儲存到 4 層後重標，目標提升至 4 層；若只儲存到 1 層就重標，仍維持原來的 2 層，只延長時間。

[詳細資料](veteran_improved_tag.md) · [返回目錄](#talent-index)

---

<a id="veteran_improved_tag_dead_bonus"></a>

### 目標擊倒！(Target Down!)

<img src="https://github.com/user-attachments/assets/47cc6995-f2fa-407d-9cb0-4dd91fcdc10d" width="72" height="72" alt="目標擊倒！天賦圖示">

- **觸發方式**：目前被鎖定目標標記的敵人死亡時，你與協同範圍內的隊友恢復韌性及耐力，不要求由你親自擊殺。

- **恢復量**：按目標實際具有的標記層數，每層恢復各自最大韌性與耐力的 5%；尚未補到目標身上的儲存層數不列入。

- **算例**：4 層標記提供 `4 × 5% = 20%` 恢復。最大韌性 100 點、最大耐力 6 點時，各恢復 `100 × 20% = 20 點韌性`、`6 × 20% = 1.2 點耐力`，最多補到各自上限。

- **搭配集中火力**：6 層標記可恢復 `6 × 5% = 30%`。若標記已到期，或已改標其他敵人，原目標死亡不再觸發。

[詳細資料](veteran_improved_tag_dead_bonus.md) · [返回目錄](#talent-index)

---

<a id="veteran_improved_tag_dead_coherency_bonus"></a>

### 轉移火力！(Redirect Fire!)

<img src="https://github.com/user-attachments/assets/48ecea96-bdaa-49e6-b9b7-ee3ac26fc1c5" width="72" height="72" alt="轉移火力！天賦圖示">

- **觸發方式**：目前被鎖定目標標記的敵人死亡時，你與協同範圍內的隊友獲得傷害加成，持續 10 秒，不要求由你親自擊殺。

- **疊層方式**：目標每有 1 層標記，就提供 1 層增傷，每層增加 2.5% 傷害，最多 4 層。10 秒內擊倒其他標記目標可繼續累積，並重設持續時間；已達上限時仍可重新計時。

- **傷害算例**：4 層提供 `4 × 2.5% = 10%`，基礎 100 點傷害變成 `100 × (1 + 10%) = 110 點`。若同一計算階段原有 25% 加成，則為 `100 × (1 + 25% + 10%) = 135 點`。

- **搭配集中火力**：增傷上限提高至 6 層，最多 `6 × 2.5% = 15%`。

#### 繁中原文勘誤

- 原文的「減傷」應為 **增加造成的傷害**。每層提供 2.5% 傷害加成，沒有降低自身受到的傷害。

[詳細資料](veteran_improved_tag_dead_coherency_bonus.md) · [返回目錄](#talent-index)

---

<a id="veteran_improved_tag_more_damage"></a>

### 集中火力(Focused Fire)

<img src="https://github.com/user-attachments/assets/a95c5ea6-546f-462d-a073-56f9d1a21103" width="72" height="72" alt="集中火力天賦圖示">

- **效果**：鎖定目標可儲存的層數從 4 層提高至 6 層，每層仍讓目標承受的傷害乘以 1.05。

- **累積時間**：每 1.5 秒增加 1 層的速度不變；從 1 層累積至 6 層約需 `(6 − 1) × 1.5 = 7.5 秒`。

- **傷害算例**：6 層時，原本 100 點傷害變成 `100 × 1.05⁶ ≈ 134.01 點`；4 層則約為 121.55 點。

- **其他搭配**：另選目標擊倒！時，6 層標記死亡可恢復 30% 最大韌性與耐力；另選轉移火力！時，其增傷上限提高至 6 層、合計 15%。

[詳細資料](veteran_improved_tag_more_damage.md) · [返回目錄](#talent-index)

---

## 技能

<a id="veteran_aura_elite_kills_restore_grenade"></a>

### 爆破小隊(Demolition Team)

<img src="https://github.com/user-attachments/assets/3ec21db4-4013-4522-850f-14c583e25ea7" width="72" height="72" alt="爆破小隊天賦圖示">

- **你或協同範圍內的隊友擊殺精英或專家敵人時，有 5% 機率為你補充 1 顆手雷。**
- 只補充你的手雷，最多補到攜帶上限。

#### 機率算例

- 每次合資格擊殺各自判定。20 次擊殺的期望補給量為 `20 × 5% = 1 顆`，不代表第 20 次必定補給。
- 上限 4 顆、目前 3 顆時，成功觸發後變為 `min(3 + 1, 4) = 4 顆`。

[詳細資料](veteran_aura_elite_kills_restore_grenade.md) · [返回目錄](#talent-index)

---

<a id="veteran_faster_reload_on_non_empty_clips"></a>

### 戰術裝填(Tactical Reload)

<img src="https://github.com/user-attachments/assets/a5b64063-ac9d-404d-98ac-528f24aafb65" width="72" height="72" alt="戰術裝填天賦圖示">

- **彈匣還有彈藥時開始裝填，裝填速度增加 25%。**
- 這次裝填期間保留加成；空彈匣開始裝填時不生效。

#### 裝填算例

- 原本裝填需 4 秒，沒有其他加成：`4 ÷ (1 + 25%) = 3.2 秒`，縮短 **0.8 秒**。

[詳細資料](veteran_faster_reload_on_non_empty_clips.md) · [返回目錄](#talent-index)

---

<a id="veteran_reload_speed_on_elite_kill"></a>

### 齊射能手(Volley Adept)

<img src="https://github.com/user-attachments/assets/009ef44a-cf3d-44cf-ac8b-cda57c6fd83d" width="72" height="72" alt="齊射能手天賦圖示">

- **擊殺精英或專家敵人後，下一次裝填速度增加 30%。**
- 重複擊殺不累積次數。效果保留至裝填實際補入彈藥，並維持到該次裝填動作結束。

#### 裝填算例

- 原本裝填需 4 秒，只計此天賦：`4 ÷ 1.3 ≈ 3.08 秒`。
- 與戰術裝填同時生效：`4 ÷ (1 + 30% + 25%) ≈ 2.58 秒`。

[詳細資料](veteran_reload_speed_on_elite_kill.md) · [返回目錄](#talent-index)

---

<a id="veteran_increased_weakspot_damage"></a>

### 堅定不移(Precision Strikes)

<img src="https://github.com/user-attachments/assets/d10f9131-4785-4bff-91a6-af630759b2dd" width="72" height="72" alt="堅定不移天賦圖示">

- **弱點命中的額外傷害加成增加 30%；近戰與遠程均適用。**

- **實際增幅**：只加強弱點命中的額外傷害，基礎部分不變。額外傷害占比越高，整次命中的增幅越大；武器、攻擊方式、目標護甲與既有加成都會影響結果。

#### 傷害算例

- **弱點額外傷害為 100**：假設未暴擊、基礎部分 100、沒有其他加成，原本 `100 + 100 = 200 點`；點選後 `100 + 100 × 1.3 = 230 點`。實際增加 `(230 − 200) ÷ 200 = 15%`。

- **弱點額外傷害為 200**：同樣基礎部分 100，原本 `100 + 200 = 300 點`；點選後 `100 + 200 × 1.3 = 360 點`。實際增加 `(360 − 300) ÷ 300 = 20%`。

- **已有同階段加成**：基礎與未加成的弱點額外部分各 100，原有 25% 額外傷害加成時，由 `100 + 100 × 1.25 = 225 點` 變成 `100 + 100 × (1 + 25% + 30%) = 255 點`；實際增加 `30 ÷ 225 ≈ 13.33%`。

- **比較武器時**：上述 15% 與 20% 是假設算例，不是盧修斯或自動槍的固定增幅。應以相同武器、攻擊／蓄力方式、敵人、弱點部位、距離及暴擊狀態，比較點選前後的傷害；不要直接把打身體的傷害當成弱點命中的基礎部分。

[詳細資料](veteran_increased_weakspot_damage.md) · [返回目錄](#talent-index)

---

<a id="veteran_increased_melee_crit_chance_and_melee_finesse"></a>

### 亡命之徒(Desperado)

<img src="https://github.com/user-attachments/assets/7be19cb4-a1cb-4211-b9f2-d754f3c95b6c" width="72" height="72" alt="亡命之徒天賦圖示">

- **近戰爆擊率增加 10 個百分點。**
- **近戰爆擊或弱點命中的額外傷害加成增加 25%。**
- 傷害加成只作用於額外部分，整次命中的增幅依武器與目標而變。同時暴擊並命中弱點時，這項 25% 加成只套用一次。

#### 爆擊與傷害算例

- **爆擊率**：原本近戰爆擊率 10%，點選後為 `10% + 10% = 20%`。

- **單次傷害**：假設未暴擊的近戰弱點命中，基礎部分 100、未加成的額外部分 40，沒有其他加成：由 `100 + 40 = 140 點` 變成 `100 + 40 × 1.25 = 150 點`，整次傷害增加 `10 ÷ 140 ≈ 7.14%`。

- **額外傷害較高時**：若同條件的額外部分為 100，則由 200 變成 `100 + 100 × 1.25 = 225 點`，增加 `25 ÷ 200 = 12.5%`。這些算例只比較單次弱點傷害；持續攻擊的平均傷害還受爆擊率、弱點命中率與攻擊方式影響。

[詳細資料](veteran_increased_melee_crit_chance_and_melee_finesse.md) · [返回目錄](#talent-index)

---

<a id="veteran_all_kills_replenish_toughness"></a>

### 嗜血(Out for Blood)

<img src="https://github.com/user-attachments/assets/d6402640-110e-4d25-b1b3-780a49b1c4e1" width="72" height="72" alt="嗜血天賦圖示">

- **每次擊殺額外恢復 5% 最大韌性。**
- 近戰與遠程擊殺均可觸發；恢復不超過韌性上限。

#### 恢復算例

- 最大韌性 100，沒有其他恢復加成：`100 × 5% = 5 點`。
- 目前 98／100 時，實際恢復 `min(5, 100 − 98) = 2 點`。

[詳細資料](veteran_all_kills_replenish_toughness.md) · [返回目錄](#talent-index)

---

<a id="veteran_increase_damage_after_sprinting"></a>

### 遊擊者(Skirmisher)

<img src="https://github.com/user-attachments/assets/dca385d7-a54e-4bf5-b67d-f3d29ef82234" width="72" height="72" alt="遊擊者天賦圖示">

- **衝刺或滑行時持續累積傷害加成，每層增加 6.25%，最多 4 層。**
- 持續動作時約每秒增加 1 層；停下再衝刺，通常約半秒即可取得下一層。
- 獲得新層會重設 **10 秒**持續時間；滿層繼續衝刺仍可重新計時。停止重新計時後，時間到即失去加成。

#### 疊層與傷害算例

- 四層合計 `6.25% × 4 = 25%`。
- 只計此加成，基礎傷害 100：`100 × (1 + 4 × 6.25%) = 125 傷害`。

[詳細資料](veteran_increase_damage_after_sprinting.md) · [返回目錄](#talent-index)

---

<a id="veteran_crits_apply_rending"></a>

### 趁火打劫(Exploit Weakness)

<img src="https://github.com/user-attachments/assets/fd178238-be59-4c18-8631-12423f5506fb" width="72" height="72" alt="趁火打劫天賦圖示">

- **近戰爆擊命中後，傷害增加 20%，持續 6 秒。**
- 期間的近戰與遠程傷害均可受益；再次近戰爆擊會重新計時，不累積加成。

#### 傷害與持續時間算例

- 基礎傷害 100、沒有其他傷害加成：`100 × 1.2 = 120 傷害`。
- 第 4 秒再次觸發，持續至約第 `4 + 6 = 10 秒`。

[詳細資料](veteran_crits_apply_rending.md) · [返回目錄](#talent-index)

---

<a id="veteran_movement_speed_towards_downed"></a>

### 不拋棄不放棄(Leave No One Behind)

<img src="https://github.com/user-attachments/assets/a882268c-6f4f-42ee-8973-a64dd6e882e7" width="72" height="72" alt="不拋棄不放棄天賦圖示">

- **面向需要援助的隊友時，移動速度增加 20%，並免疫眩暈。**
- 隊友須位於視線方向左右各約 60 度內；不必正在向前移動。
- 救起倒地隊友、拉起懸掛隊友、解網與營救速度增加 **20%**。
- 你救起倒地隊友後，該隊友受到的傷害降低 **33%**，持續 **5 秒**。

#### 救援與減傷算例

- 假設救援原本需 6 秒，沒有其他速度加成：`6 ÷ 1.2 = 5 秒`。
- 原本受到 100 傷害，只計救起後的減傷：`100 × 0.67 = 67 傷害`。

[詳細資料](veteran_movement_speed_towards_downed.md) · [返回目錄](#talent-index)

---

<a id="veteran_rending_bonus"></a>

### 裂擊(Rending Strikes)

<img src="https://github.com/user-attachments/assets/cc7841b0-9637-4d35-8bca-c2c418798875" width="72" height="72" alt="裂擊天賦圖示">

- **武器獲得 10% 撕裂。**
- 撕裂改善對裝甲等適用目標的傷害；無甲目標不受這項護甲修正影響。
- 實際增幅取決於武器對該護甲的原傷害倍率與已有撕裂，不能直接將整筆傷害乘以 1.1。

#### 護甲與傷害算例

- **原倍率為 0.5**：假設未暴擊、未命中弱點，護甲結算前傷害 100，對某甲殼護甲的原倍率為 0.5，沒有其他加成：由 `100 × 0.5 = 50 點` 變成 `100 × (0.5 + 0.1) = 60 點`，實際增加 `10 ÷ 50 = 20%`。

- **原倍率已達 1**：其餘條件相同，超出倍率 1 的撕裂按四分之一換算：由 100 變成 `100 × (1 + 0.1 × 0.25) = 102.5 點`，實際增加 `2.5 ÷ 100 = 2.5%`。

- **弱點或暴擊命中**：以上只示範護甲結算；弱點與暴擊還有額外傷害計算，不能直接沿用這兩個百分比。

[詳細資料](veteran_rending_bonus.md) · [返回目錄](#talent-index)

---

<a id="veteran_dodging_grants_crit"></a>

### 互惠互利(Reciprocity)

<img src="https://github.com/user-attachments/assets/980ba0fa-2a34-4f97-b592-05651671933b" width="72" height="72" alt="互惠互利天賦圖示">

- **每次成功閃避攻擊，爆擊率增加 5 個百分點，最多 5 層。**
- 持續 **8 秒**，再次成功閃避會重新計時；時間到後失去加成。單純做出閃避動作不會疊層。

#### 爆擊率算例

- 原本爆擊率 10%，三層時為 `10% + 3 × 5% = 25%`；五層時為 `10% + 5 × 5% = 35%`。

[詳細資料](veteran_dodging_grants_crit.md) · [返回目錄](#talent-index)

---

<a id="veteran_kill_grants_damage_to_other_slot"></a>

### 靈活接敵(Agile Engagement)

<img src="https://github.com/user-attachments/assets/a7c3f5a6-113a-404a-873d-985481ec316b" width="72" height="72" alt="靈活接敵天賦圖示">

- **近戰擊殺使遠程傷害增加 25%；遠程擊殺使近戰傷害增加 25%。**
- 兩種加成各持續 **6 秒**，可同時存在；同類擊殺重設對應的持續時間，不疊層。

#### 傷害與時間算例

- 只計此加成，另一類攻擊基礎傷害 100：`100 × 1.25 = 125 傷害`。
- 第 0 秒近戰擊殺、第 4 秒再次近戰擊殺：遠程增傷延長至約第 `4 + 6 = 10 秒`。

[詳細資料](veteran_kill_grants_damage_to_other_slot.md) · [返回目錄](#talent-index)

---

<a id="veteran_hits_cause_bleed"></a>

### 鋸齒刀刃(Serrated Blade)

<img src="https://github.com/user-attachments/assets/8378bd8a-7c90-41fd-83c7-40c135c75caa" width="72" height="72" alt="鋸齒刀刃天賦圖示">

- **近戰命中造成傷害後，對仍存活的敵人施加 2 層流血。**
- 流血最多 **16 層**，約每 **0.5 秒**造成傷害。再次施加重設 **1.5 秒**計時；未再施加時，到期後每次傷害跳動減少一層。

#### 疊層與傷害算例

- 不計期間掉層，連續命中四次可累積 `2 × 4 = 8 層`。
- 對無甲目標、沒有其他加成時，八層每次流血傷害為 `175 × [(8 ÷ 16)² × (3 − 2 × 8 ÷ 16)] × 0.5 = 43.75`。
- 兩層同條件約為 **3.76 傷害／次**；流血按曲線增強，八層不是兩層傷害的四倍。

[詳細資料](veteran_hits_cause_bleed.md) · [返回目錄](#talent-index)

---

<a id="veteran_attack_speed"></a>

### 戰壕兵訓練(Trench Fighter Drill)

<img src="https://github.com/user-attachments/assets/4a13cdee-8f88-4412-8b56-e3b3b5590459" width="72" height="72" alt="戰壕兵訓練天賦圖示">

- **近戰攻擊速度增加 10%。**

#### 攻擊時間算例

- 假設受攻速影響的攻擊動作原本需 1 秒，無其他速度加成：`1 ÷ 1.1 ≈ 0.91 秒`。
- 這段動作縮短約 **9.1%**；實際連段速度仍取決於武器動作。

[詳細資料](veteran_attack_speed.md) · [返回目錄](#talent-index)

---

<a id="veteran_continous_hits_apply_rending"></a>

### 猛攻(Onslaught)

<img src="https://github.com/user-attachments/assets/0801494c-4548-4fcb-afe7-8a7c563ef396" width="72" height="72" alt="猛攻天賦圖示">

- **連續命中同一個仍存活的敵人，從第二次攻擊起，每次施加 1 層脆弱。**
- 每層使目標的護甲修正受到 **2.5%** 撕裂效果，最多 **16 層（40%）**；其他隊友攻擊此目標也能受益。
- 實際增幅取決於攻擊者的武器、目標護甲與已有撕裂；滿層 40% 不是所有攻擊的最終傷害都增加 40%。
- 近戰與遠程均可觸發，每次揮擊或射擊最多處理第一個有效命中；流血等持續傷害不疊層。
- 持續 **5 秒**，新增層數重新計時。改打另一個敵人後，須重新連續命中；射空本身不清除已追蹤的目標。

#### 疊層與傷害算例

- **四層脆弱**：對同一敵人完成五次合資格命中，第一下建立連續命中，後四下合計 `4 × 2.5% = 10%`。

- **四層後的下一擊**：假設未暴擊、未命中弱點，護甲結算前傷害 100，對某甲殼護甲的原倍率為 0.5，無其他加成：由 `100 × 0.5 = 50 點` 變成 `100 × (0.5 + 10%) = 60 點`，實際增加 `10 ÷ 50 = 20%`。

- **十六層後的下一擊**：同條件為 `100 × (0.5 + 40%) = 90 點`，相對零層增加 `40 ÷ 50 = 80%`。這是此護甲倍率下的算例；換武器、換護甲，或改為弱點／暴擊命中，須重新計算。

[詳細資料](veteran_continous_hits_apply_rending.md) · [返回目錄](#talent-index)

---

<a id="base_toughness_node_buff_medium_2"></a>

### 韌性提升(Toughness Boost)

<img src="https://github.com/user-attachments/assets/1ef34fb3-ac4e-47d1-b7c1-0d13f10e3173" width="72" height="72" alt="韌性提升天賦圖示">

- **最大韌性增加 25 點。**

#### 韌性算例

- 未計百分比韌性加成時，最大韌性 100 變為 `100 + 25 = 125`。
- 原先有 20% 最大韌性加成時，由 `100 × 1.2 = 120` 變為 `(100 + 25) × 1.2 = 150`。

[詳細資料](base_toughness_node_buff_medium_2.md) · [返回目錄](#talent-index)

---

<a id="veteran_replenish_toughness_outside_melee"></a>

### 喘息片刻(Catch a Breath)

<img src="https://github.com/user-attachments/assets/19c86987-5e48-4eeb-9385-33697b9d99b0" width="72" height="72" alt="喘息片刻天賦圖示">

- **超過 5 秒未受到近戰命中時，每秒恢復 5% 最大韌性。**
- 再次被近戰命中會中斷恢復，並重新等待 5 秒；敵人靠近、自己近戰攻擊或受到遠程命中不會單憑這些行為中斷。

#### 恢復算例

- 最大韌性 100，無其他恢復加成：每秒 `100 × 5% = 5 點`；啟動後 2 秒約恢復 `5 × 2 = 10 點`。
- 目前 98／100 時，最多只恢復 `100 − 98 = 2 點`。

[詳細資料](veteran_replenish_toughness_outside_melee.md) · [返回目錄](#talent-index)

---

<a id="veteran_bonus_crit_chance_on_ammo"></a>

### 首輪齊射(Opening Salvo)

<img src="https://github.com/user-attachments/assets/4193f147-bd40-49f8-92d4-a2b83fa1ad5b" width="72" height="72" alt="首輪齊射天賦圖示">

- **彈匣剩餘彈藥至少 80% 時，遠程爆擊率增加 10 個百分點。**
- 必須手持遠程武器；備用彈藥數量不影響這個門檻。

#### 門檻與爆擊率算例

- 彈匣容量 30 發：`30 × 80% = 24 發`，24 發仍生效，23 發不生效。
- 原本爆擊率 10%，生效時為 `10% + 10% = 20%`。

[詳細資料](veteran_bonus_crit_chance_on_ammo.md) · [返回目錄](#talent-index)

---

<a id="veteran_ranged_power_out_of_melee"></a>

### 殺戮地帶(Kill Zone)

<img src="https://github.com/user-attachments/assets/8cc616f0-d225-4b5f-81a4-8780f478d471" width="72" height="72" alt="殺戮地帶天賦圖示">

- **超過 8 秒未受到近戰命中時，遠程傷害增加 15%。**
- 再次受到近戰命中時，效果中斷並重新計時。
- 敵人靠近、自己進行近戰攻擊或受到遠程命中，不會中斷效果。

#### 傷害計算

- 此加成與其他同類傷害加成相加。
- 以基礎傷害 **100**、不計其他傷害倍率為例：`100 × (1 + 15%) = 115 傷害`。
- 若已有 **25% 同類傷害加成**：原傷害為 `100 × 1.25 = 125`；效果生效後為 `100 × (1 + 25% + 15%) = 140`，增加 **15 傷害**。

#### 繁中原文勘誤

- 原文把 8 秒寫成增傷的持續時間，應為 **超過 8 秒未受到近戰命中後才生效**。生效後不會因再過 8 秒而結束；再次受到近戰命中才會中斷。

[詳細資料](veteran_ranged_power_out_of_melee.md) · [返回目錄](#talent-index)

---

<a id="veteran_no_ammo_consumption_on_lasweapon_crit"></a>

### 突擊隊(Shock Trooper)

<img src="https://github.com/user-attachments/assets/cba2a46d-298c-434a-883d-e048f5ede32d" width="72" height="72" alt="突擊隊天賦圖示">

- **雷射武器的暴擊射擊不消耗彈藥。**
- 手持該武器且彈匣至少還有 1 發時生效；不必命中敵人。空彈匣無法靠此效果開火。

#### 彈藥算例

- 假設每次射擊原本消耗 1 發，10 次射擊中有 3 次暴擊：共消耗 `(10 − 3) × 1 + 3 × 0 = 7 發`。

[詳細資料](veteran_no_ammo_consumption_on_lasweapon_crit.md) · [返回目錄](#talent-index)

---

<a id="veteran_increased_ranged_cleave"></a>

### 凋零烈焰(Withering Fire)

<img src="https://github.com/user-attachments/assets/ba2f9f5e-0466-433d-a93d-68b1f9606dd7" width="72" height="72" alt="凋零烈焰天賦圖示">

- **遠程順劈攻擊的穿透能力增加 50%。**
- 子彈能穿透多少敵人，仍由武器與各敵人的阻擋程度決定；不增加對單一目標的傷害。

#### 穿透算例

- 假設原本穿透能力為 6，只計此加成：`6 × 1.5 = 9`。
- 這代表可承受更多穿透阻力，不能直接換算成固定多命中 50% 敵人。

[詳細資料](veteran_increased_ranged_cleave.md) · [返回目錄](#talent-index)

---

<a id="veteran_replenish_toughness_on_weakspot_kill"></a>

### 振奮擊倒(Exhilarating Takedown)

<img src="https://github.com/user-attachments/assets/c7ac403a-7fac-4ce9-bc80-8a7df2af7907" width="72" height="72" alt="振奮擊倒天賦圖示">

- **遠程弱點擊殺恢復 15% 最大韌性，並獲得 1 層韌性減傷，最多 3 層。**
- 每層使韌性受到的傷害降低 **10%**，各層減傷相乘；三層合計降低 **27.1%**。
- 每次遠程弱點擊殺重設 **8 秒**持續時間。期間未再次觸發，約每 8 秒減少 1 層。
- 韌性已滿時，仍可獲得減傷並重設持續時間。

#### 韌性恢復

- 最大韌性 **100**：每次恢復 `100 × 15% = 15 點韌性`；目前 70 點時，恢復至 **85 點**。
- 恢復量不超過韌性上限：目前 95／100 點時，只恢復 `100 − 95 = 5 點`。
- 韌性恢復加成可提高恢復量。例如另有 **20% 恢復量加成**：`100 × 15% × 1.20 = 18 點`。

#### 減傷與持續時間

- 以原本受到 **100 點韌性傷害**、不計其他減傷為例：
- **1 層**：`100 × 0.9 = 90`，減少 **10 點**。
- **2 層**：`100 × 0.9² = 81`，減少 **19 點**。
- **3 層**：`100 × 0.9³ = 72.9`，減少 **27.1 點**；此減傷僅作用於韌性。
- 三層後未再觸發：約 **8 秒**後剩 2 層、**16 秒**後剩 1 層、**24 秒**後效果結束。

[詳細資料](veteran_replenish_toughness_on_weakspot_kill.md) · [返回目錄](#talent-index)

---

<a id="veteran_ammo_increase"></a>

### 全副武裝(Fully Loaded)

<img src="https://github.com/user-attachments/assets/4087a451-e4ae-429b-afe6-75369e2903f3" width="72" height="72" alt="全副武裝天賦圖示">

- **備用彈藥上限增加 25%。**
- 不增加彈匣容量；不足一發的小數捨去。

#### 容量算例

- 原本備用彈藥上限 100 發：`100 × 1.25 = 125 發`。
- 原本 150 發：`150 × 1.25 = 187.5`，向下取整為 **187 發**。

[詳細資料](veteran_ammo_increase.md) · [返回目錄](#talent-index)

---

<a id="veteran_allies_in_coherency_share_toughness_gain"></a>

### 天生領袖(Born Leader)

<img src="https://github.com/user-attachments/assets/1a08688e-e370-4eac-a27e-fd48da3b3965" width="72" height="72" alt="天生領袖天賦圖示">

- **協同半徑增加 50%。**
- 你觸發韌性恢復時，協同範圍內的其他隊友各恢復該次恢復量的 **20%**。
- 即使你已接近滿韌性或完全補滿，仍依這次原本應恢復的量計算分享。隊友各自的恢復加成與韌性上限仍適用。
- 分享所得的韌性不會再次分享。

#### 範圍與恢復算例

- 假設原本協同半徑 8 公尺，沒有其他範圍加成：`8 × 1.5 = 12 公尺`。
- 這次原本應恢復 20 點、自己只缺 2 點：自己實際補 2，各隊友仍獲得 `20 × 20% = 4 點`。
- 某隊友另有 25% 恢復量加成時，該隊友可恢復 `4 × 1.25 = 5 點`，最多補至自身上限。

[詳細資料](veteran_allies_in_coherency_share_toughness_gain.md) · [返回目錄](#talent-index)

---

<a id="veteran_better_deployables"></a>

### 臨場發揮(Field Improvisation)

<img src="https://github.com/user-attachments/assets/aba3bef3-ec36-4b94-8097-95a2f43d593e" width="72" height="72" alt="臨場發揮天賦圖示">

- **小隊的彈藥箱也能補滿可補給的手雷。**
- **醫療箱治療速度提高 100%，並每秒恢復 1% 最大韌性。**
- 醫療箱還能清除部分腐敗，但無法修復已失去的整段生命上限。隊友放置的補給箱也能獲得效果。

#### 補給算例

- 手雷上限 4 顆、剩餘 1 顆時，使用可補給手雷的彈藥箱，補回 `4 − 1 = 3 顆`。
- 未倒地、最大生命 200：原本每秒 `200 × 6% = 12`，強化後為 `200 × 6% × 2 = 24 生命`。同一秒可減少的腐敗量為 `24 × 0.5 = 12`，仍受生命段限制。
- 最大韌性 150：每秒恢復 `150 × 1% = 1.5`，最多補滿。

[詳細資料](veteran_better_deployables.md) · [返回目錄](#talent-index)

---

<a id="veteran_replenish_toughness_and_boost_allies"></a>

### 火力掩護(Covering Fire)

<img src="https://github.com/user-attachments/assets/8c1dadf2-9263-4efa-a710-9da08a41eb3e" width="72" height="72" alt="火力掩護天賦圖示">

- **遠程擊殺敵人時，可為該敵人附近的 1 名隊友恢復 15% 最大韌性，並使其傷害增加 15%，持續 6 秒。**
- 不作用於自己。再次獲得傷害加成時重設持續時間，不疊層。
- 搜尋起始範圍為 8 公尺；多名隊友同時在附近時，選人與範圍判定存在異常，不能保證選到最近的一人。

#### 恢復與傷害算例

- 若只有一名隊友距離被擊殺敵人 5 公尺，最大韌性 200：恢復 `200 × 15% = 30`；只缺 10 時實際補 **10**。
- 只計此增益，隊友基礎傷害 100 變為 `100 × 1.15 = 115`。

[詳細資料](veteran_replenish_toughness_and_boost_allies.md) · [返回目錄](#talent-index)

---

<a id="veteran_ally_kills_increase_damage"></a>

### 求勝心(Competitive Urge)

<img src="https://github.com/user-attachments/assets/284f479c-7f5d-463f-bf50-1003d34b9f5b" width="72" height="72" alt="求勝心天賦圖示">

- **隊友擊殺敵人時，有 2.5% 機率使你的傷害、近戰衝擊與壓制效果增加 20%，持續 8 秒。**
- 效果不疊層；再次觸發會重設 8 秒倒數。

#### 傷害與機率算例

- 只計此增益，100 傷害變為 `100 × 1.2 = 120`。
- 40 次合資格擊殺的期望觸發次數為 `40 × 2.5% = 1 次`，不是保底；第 6 秒再觸發時，持續至約第 `6 + 8 = 14 秒`。

[詳細資料](veteran_ally_kills_increase_damage.md) · [返回目錄](#talent-index)

---

<a id="veteran_elite_kills_replenish_toughness"></a>

### 擊殺紀錄(Confirmed Kill)

<img src="https://github.com/user-attachments/assets/706a5b5b-5f7b-43bc-bbd0-7debf024671b" width="72" height="72" alt="擊殺紀錄天賦圖示">

- **擊殺精英或專家敵人，立即恢復 10% 最大韌性。**
- 接下來 **10 秒**，每秒再恢復 **2% 最大韌性**；多次擊殺的持續恢復各自生效。

#### 韌性恢復算例

- 最大韌性 100 且缺額足夠：立即恢復 `100 × 10% = 10`，再恢復 `100 × 2% × 10 = 20`，單次合計 **30**。
- 兩次持續效果重疊時，每秒恢復 `100 × 2% × 2 = 4`；任一效果滿 10 秒即結束。恢復不超過最大韌性。

[詳細資料](veteran_elite_kills_replenish_toughness.md) · [返回目錄](#talent-index)

---

<a id="veteran_reduced_toughness_damage_in_coherency"></a>

### 密集隊形訓練(Close Order Drill)

<img src="https://github.com/user-attachments/assets/139120eb-e9c5-41ea-b87c-bf4737b53f49" width="72" height="72" alt="密集隊形訓練天賦圖示">

- **協同範圍內每有 1 名隊友，韌性減傷增加 11%；3 名隊友時達到 33%。**
- 隊友離開協同範圍時，依目前人數重新計算。

#### 減傷算例

- 原本受到 100 韌性傷害，1／2／3 名隊友時分別為 `100 × 0.89 = 89`、`100 × 0.78 = 78`、`100 × 0.67 = 67`。
- 3 人協同並同時觸發鋼鐵意志：`100 × 0.67 × 0.5 = 33.5`。

[詳細資料](veteran_reduced_toughness_damage_in_coherency.md) · [返回目錄](#talent-index)

---

<a id="veteran_increased_damage_based_on_range"></a>

### 遠射(Longshot)

<img src="https://github.com/user-attachments/assets/f7517509-e85f-47fb-b775-234a6aa0950a" width="72" height="72" alt="遠射天賦圖示">

- **遠程傷害增加 10%；距離越遠，額外再增加最多 15%。**
- 12.5 公尺內為 10%；30 公尺起達到合計 25%。中間距離依平方根曲線增加。

#### 距離與傷害算例

- 只計此天賦，基礎傷害 100：12.5 公尺內為 `100 × 1.10 = 110`，30 公尺起為 `100 × 1.25 = 125`。
- 21.25 公尺：距離比例 `(21.25 − 12.5) ÷ (30 − 12.5) = 0.5`；傷害為 `100 × [1 + 10% + 15% × √0.5] ≈ 120.61`。

[詳細資料](veteran_increased_damage_based_on_range.md) · [返回目錄](#talent-index)

---

<a id="veteran_reduce_swap_time"></a>

### 行雲流水(One Motion)

<img src="https://github.com/user-attachments/assets/f51a3100-c73f-4d71-833e-a71bb9e002bc" width="72" height="72" alt="行雲流水天賦圖示">

- **武器切換速度增加 50%。**

#### 時間算例

- 假設原本切換動作耗時 0.9 秒，沒有其他速度加成：`0.9 ÷ (1 + 50%) = 0.6 秒`。
- 這段動作縮短約 33.3%；不會連帶加速裝填或攻擊。

#### 繁中原文勘誤

- 原文寫「武器切換速度縮短為」，應為 **武器切換速度增加 50%**。無其他加成時，0.9 秒的切換動作變成 `0.9 ÷ 1.5 = 0.6 秒`，不是把時間縮短為一半。

[詳細資料](veteran_reduce_swap_time.md) · [返回目錄](#talent-index)

---

<a id="veteran_ads_drain_stamina"></a>

### 死亡射手(Deadshot)

<img src="https://github.com/user-attachments/assets/e65e3909-4dac-413f-827d-f5db9138e5e2" width="72" height="72" alt="死亡射手天賦圖示">

- **瞄準且仍有耐力時，爆擊率增加 25 個百分點，瞄準晃動降低 60%。**
- 同時降低散布 19%、後座力 12%。
- 瞄準每秒消耗 **0.33 耐力**，每次射擊再消耗 **0.1 耐力**；耐力耗盡後失去上述加成。

#### 耐力與爆擊率算例

- 不計其他消耗，瞄準 5 秒並射擊 10 次：`0.33 × 5 + 0.1 × 10 = 2.65 耐力`。
- 原本爆擊率 10%，生效後為 `10% + 25% = 35%`；晃動量原本為 1 時，變為 `1 × 0.4 = 0.4`。

#### 繁中原文勘誤

- 原文把 60% 的「瞄準晃動降低」誤寫成「後座力減免」。**瞄準晃動降低 60%，後座力另降低 12%**，兩者是不同效果。

[詳細資料](veteran_ads_drain_stamina.md) · [返回目錄](#talent-index)

---

<a id="veteran_big_game_hunter"></a>

### 幹掉它！(Bring it Down!)

<img src="https://github.com/user-attachments/assets/fc1e80c9-c17b-4e96-909d-bab403221f03" width="72" height="72" alt="幹掉它！天賦圖示">

- **對歐格林與巨獸的傷害增加 20%。**
- 近戰與遠程攻擊均適用。

#### 傷害算例

- 只計此天賦，基礎傷害 100：`100 × 1.2 = 120 傷害`。
- 同階段另有 15% 傷害加成：`100 × (1 + 20% + 15%) = 135 傷害`。

[詳細資料](veteran_big_game_hunter.md) · [返回目錄](#talent-index)

---

<a id="veteran_increase_damage_vs_elites"></a>

### 優越情節(Superiority Complex)

<img src="https://github.com/user-attachments/assets/915cdbef-5b88-4d3b-a4f1-e29e8a8f0f07" width="72" height="72" alt="優越情節天賦圖示">

- **對精英敵人的傷害增加 15%。**
- 近戰與遠程攻擊均適用。
- 僅具有專家分類、沒有精英分類的敵人，不適用此加成。

#### 傷害計算

- 此加成與其他同類傷害加成相加。
- 以對精英敵人的基礎傷害 **100**、不計其他傷害倍率為例：`100 × (1 + 15%) = 115 傷害`。
- 若已有 **25% 同類傷害加成**：原傷害為 `100 × 1.25 = 125`；點選本天賦後為 `100 × (1 + 25% + 15%) = 140`，增加 **15 傷害**。

[詳細資料](veteran_increase_damage_vs_elites.md) · [返回目錄](#talent-index)

---

<a id="veteran_dodging_grants_stamina"></a>

### 靈活應對(Duck and Dive)

<img src="https://github.com/user-attachments/assets/8567315b-bea7-4be4-aaec-22d7096945a9" width="72" height="72" alt="靈活應對天賦圖示">

- **移動速度增加 5%。**
- 成功躲過遠程攻擊時，恢復 **30% 最大耐力**；此恢復每 **3 秒**最多觸發一次。

#### 恢復算例

- 最大耐力 6，觸發時恢復 `6 × 30% = 1.8`。目前已有 5 時，僅補到 6，實際恢復 **1**。
- 原本移速 5 公尺／秒，只計此天賦為 `5 × 1.05 = 5.25 公尺／秒`。

#### 繁中原文勘誤

- 原文寫成「耐力消耗」，應為 **成功躲過遠程攻擊時恢復 30% 最大耐力**；這項效果不是增加或減少該動作的耐力消耗。

[詳細資料](veteran_dodging_grants_stamina.md) · [返回目錄](#talent-index)

---

<a id="veteran_tdr_on_high_toughness"></a>

### 鋼鐵意志(Iron Will)

<img src="https://github.com/user-attachments/assets/d56c3a6f-0fed-4e37-bb08-aa3c87f5624d" width="72" height="72" alt="鋼鐵意志天賦圖示">

- **目前韌性高於最大韌性的 75% 時，韌性受到的傷害降低 50%。**
- 韌性恰好等於 75% 時不生效；補回門檻以上即可重新生效。

#### 減傷算例

- 最大韌性 200，生效條件為目前韌性高於 `200 × 75% = 150`。
- 生效時原本 40 點韌性傷害變為 `40 × 0.5 = 20`；另有獨立 10% 減傷時為 `40 × 0.5 × 0.9 = 18`。

[詳細資料](veteran_tdr_on_high_toughness.md) · [返回目錄](#talent-index)

---

<a id="veteran_clip_size"></a>

### 荷槍實彈(Lock and Load)

<img src="https://github.com/user-attachments/assets/6632d16b-faac-444e-8139-99057e2f613a" width="72" height="72" alt="荷槍實彈天賦圖示">

- **彈匣容量增加 25%。**
- 換算後不足 1 發的部分捨去；不直接增加備用彈藥上限。

#### 容量算例

- 原本 40 發：`40 × 1.25 = 50 發`。
- 原本 7 發：`7 × 1.25 = 8.75`，向下取整後為 **8 發**。

[詳細資料](veteran_clip_size.md) · [返回目錄](#talent-index)

---

<a id="veteran_increase_suppression"></a>

### 讓他們全趴下！(Keep Their Heads Down!)

<img src="https://github.com/user-attachments/assets/ae882322-f266-4e2c-8168-09f85a5c9285" width="72" height="72" alt="讓他們全趴下！天賦圖示">

- **造成的壓制效果增加 75%。**

#### 壓制算例

- 假設一次攻擊原本產生 20 壓制值，只有此加成時：`20 × 1.75 = 35 壓制值`。
- 壓制會影響敵人行動，不等同於增加 75% 傷害。

[詳細資料](veteran_increase_suppression.md) · [返回目錄](#talent-index)

---

<a id="veteran_increased_damage_when_flanking"></a>

### 秘密特工(Covert Operative)

<img src="https://github.com/user-attachments/assets/e836f77f-9bb2-4b87-938a-3bab63656ff1" width="72" height="72" alt="秘密特工天賦圖示">

- **從敵人的後半側以遠程攻擊命中時，傷害增加 30%。**
- 正側面交界不算；近戰攻擊不適用。

#### 傷害算例

- 假設其他計算已得到 100 傷害，且沒有額外背刺傷害：`100 + 100 × 30% = 130 傷害`。

[詳細資料](veteran_increased_damage_when_flanking.md) · [返回目錄](#talent-index)

---

<a id="base_melee_damage_node_buff_high_2"></a>

### 近戰傷害提升(Melee Damage Boost)

<img src="https://github.com/user-attachments/assets/b0fb41b1-81da-4263-8d21-101a3af0cbdb" width="72" height="72" alt="近戰傷害提升天賦圖示">

- **近戰傷害增加 15%。**

#### 傷害算例

- 只計此天賦，基礎近戰傷害 100：`100 × 1.15 = 115 傷害`。
- 同階段已有 25% 加成：`100 × (1 + 25% + 15%) = 140 傷害`。

[詳細資料](base_melee_damage_node_buff_high_2.md) · [返回目錄](#talent-index)

---

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>

### 韌性減傷(Toughness Damage Reduction)

<img src="https://github.com/user-attachments/assets/20744626-5cef-4e5c-afef-0474fde5a4b5" width="72" height="72" alt="韌性減傷天賦圖示">

- **韌性受到的傷害降低 10%。**

#### 減傷算例

- 原本受到 100 韌性傷害，只計此天賦為 `100 × (1 − 10%) = 90`。
- 同類加算減傷已有 20% 時：`100 × (1 − 20% − 10%) = 70`；鋼鐵意志等獨立倍率則另外相乘。

[詳細資料](base_toughness_damage_reduction_node_buff_medium_1.md) · [返回目錄](#talent-index)

---
