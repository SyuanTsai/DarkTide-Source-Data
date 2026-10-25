# 骨鋸(Bone Saw)：對應祝福

[武器索引](../../README.md)｜[全部祝福](../../../README.md)

| 祝福 | 本武器主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/646a2076-d80d-4594-a07c-90f95e230e80" width="32" height="32" alt="屠戮者祝福圖示"> [屠戮者](../../../entries/屠戮者/README.md)<br>- Decimator<br>[完整說明](../../../entries/屠戮者/README.md) | <ul><li>近戰揮擊命中敵人後取得一層，每層近戰威力增加2／3／4／5%，最多10層；命中刷新2秒，揮空清空。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/5c459ca2-a946-4f54-b8b5-91c8f0e5b69a" width="32" height="32" alt="粉碎祝福圖示"> [粉碎](../../../entries/粉碎/README.md)<br>- Shred<br>[完整說明](../../../entries/粉碎/README.md) | <ul><li>近戰揮擊命中後每層增加2.5／3／3.5／4個百分點爆擊率，最多5層；命中刷新3.5秒，揮空清空。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/48e41633-a873-48b4-9818-796d3437e85f" width="32" height="32" alt="憤怒祝福圖示"> [憤怒](../../../entries/憤怒/README.md)<br>- Wrath<br>[完整說明](../../../entries/憤怒/README.md) | <ul><li>近戰揮擊命中後每層順劈+10%／15%／20%／25%，最多5層；含滿層命中刷新3.5秒，揮空或逾時清層。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/b2155c24-1abc-4d51-a55a-53e295c0bdee" width="32" height="32" alt="精煉殺意祝福圖示"> [精煉殺意](../../../entries/精煉殺意/README.md)<br>- Refined Lethality<br>[完整說明](../../../entries/精煉殺意/README.md) | <ul><li>持用骨鋸對帶毒素狀態的目標造成近戰弱點命中時，I–IV 向弱點／精準額外傷害乘區加入 52.5%／55%／57.5%／60%；最終傷害增幅依其他傷害部分與加成而變。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/6c1e408b-d8d7-4ce3-9782-198b9e3b0970" width="32" height="32" alt="震懾祝福圖示"> [震懾](../../../entries/震懾/README.md)<br>- Shock & Awe<br>[完整說明](../../../entries/震懾/README.md) | <ul><li>同級質量修正與3秒效果；初次重擊可觸發，普通及穿甲的延遲撕扯擊殺不觸發；本型號使用圖示246。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/fde18f48-0180-49ae-9b9f-cc40a0ebf109" width="32" height="32" alt="斷肢者祝福圖示"> [斷肢者](../../../entries/斷肢者/README.md)<br>- Limbsplitter<br>[完整說明](../../../entries/斷肢者/README.md) | <ul><li>持用且統計快取處於可用狀態時，近戰攻擊取得 +60% 近戰威力；合格近戰命中在傷害結算後重新開始等待，I／II／III／IV 等待 5／4.5／4／3.5 秒。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/b7eea9d3-8f5f-4ead-bc52-651a5a42f7e3" width="32" height="32" alt="持續打擊祝福圖示"> [持續打擊](../../../entries/持續打擊/README.md)<br>- Relentless Strikes<br>[完整說明](../../../entries/持續打擊/README.md) | <ul><li>外科醫師型號4的普通及重擊掃掠可依同目標命中追蹤增加近戰威力；延遲黏附撕裂仍用當前近戰威力，但不觸發或刷新本祝福。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/335d4f02-77cb-4cfe-81f5-15862470ee41" width="32" height="32" alt="斬首者祝福圖示"> [斬首者](../../../entries/斬首者/README.md)<br>- Decapitator<br>[完整說明](../../../entries/斬首者/README.md) | <ul><li>外科醫師 Mk IV 的一般命中及黏附初擊可按一擊擊殺條件觸發；延遲撕裂僅在本身另造成合格旗標擊殺時才走獨立 on_kill 路徑.</li></ul> | 近戰 |

## 逐型號對應

| 型號 | 祝福實作 | 等級 |
|---|---|---|
| 骨鋸 外科醫師 型號4 | [屠戮者](../../../entries/屠戮者/weapon_trait_bespoke_saw_p1_chained_hits_increases_power.md)、[粉碎](../../../entries/粉碎/weapon_trait_bespoke_saw_p1_chained_hits_increases_crit_chance.md)、[憤怒](../../../entries/憤怒/weapon_trait_bespoke_saw_p1_chained_hits_increases_melee_cleave.md)、[精煉殺意](../../../entries/精煉殺意/weapon_trait_bespoke_saw_p1_increased_weakspot_damage_against_toxin_status.md)、[震懾](../../../entries/震懾/weapon_trait_bespoke_saw_p1_hit_mass_consumption_reduction_on_kill.md)、[斷肢者](../../../entries/斷肢者/weapon_trait_bespoke_saw_p1_power_bonus_on_first_attack.md)、[持續打擊](../../../entries/持續打擊/weapon_trait_bespoke_saw_p1_consecutive_melee_hits_same_target_increases_melee_power.md)、[斬首者](../../../entries/斬首者/weapon_trait_bespoke_saw_p1_stacking_finesse_on_one_hit_kill.md) | I–IV |

表內依各型號列出對應祝福；各祝福的等級為I–IV。
