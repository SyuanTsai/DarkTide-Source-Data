# 突擊鏈斧(Assault Chainaxe)：對應祝福

[武器索引](../../README.md)｜[全部祝福](../../../README.md)

| 祝福 | 本武器主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/e292ed7d-8b36-4da5-9f39-528bed983004" width="32" height="32" alt="機會主義者祝福圖示"> [機會主義者](../../../entries/機會主義者/README.md)<br>- Opportunist<br>[完整說明](../../../entries/機會主義者/README.md) | <ul><li>對傷害結算前已踉蹌或被視為踉蹌的敵人，I–IV提供10%／15%／20%／25%近戰撕裂；本擊才造成踉蹌不回溯加成。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/cb07e9cd-d287-452c-bbcd-827d4808e0df" width="32" height="32" alt="放血者祝福圖示"> [放血者](../../../entries/放血者/README.md)<br>- Bloodletter<br>[完整說明](../../../entries/放血者/README.md) | <ul><li>啟動後每次符合條件的斬擊或鋸擊新增10／12／14／16層流血。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/5b4b4b01-18ea-447d-99d6-e73dd2ebdcfd" width="32" height="32" alt="奪顱者祝福圖示"> [奪顱者](../../../entries/奪顱者/README.md)<br>- Headtaker<br>[完整說明](../../../entries/奪顱者/README.md) | <ul><li>- 突擊鏈斧奧瑞斯特斯 Mk IV、Mk XII 共用 I–IV 數值；黏附後續鋸齒段不觸發本祝福。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/13485cb7-1f86-45d4-b7a7-cb0be0e65585" width="32" height="32" alt="嗜血祝福圖示"> [嗜血](../../../entries/嗜血/README.md)<br>- Bloodthirsty<br>[完整說明](../../../entries/嗜血/README.md) | <ul><li>突擊鏈斧 奧瑞斯特斯 Mk IV／Mk XII：特殊標記擊殺增加近戰爆擊率；I–IV 每次獲得 4／6／8／10 層，每層增加 10 個百分點，5 秒內可由後續特殊標記擊殺再加層，最多 10 層，下一次橫掃開始時消耗。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/82bed9ff-831f-4905-bcc5-3101a43fa29c" width="32" height="32" alt="推進祝福圖示"> [推進](../../../entries/推進/README.md)<br>- Thrust<br>[完整說明](../../../entries/推進/README.md) | <ul><li>每次蓄力事件增加一層近戰力量修正，最多三層；I–IV 每層分別增加 5／10／15／20 個百分點，三層上限為 15／30／45／60 個百分點。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/49d940eb-8e9b-4d06-b9ea-f8692ee158ef" width="32" height="32" alt="殺戮者祝福圖示"> [殺戮者](../../../entries/殺戮者/README.md)<br>- Slaughterer<br>[完整說明](../../../entries/殺戮者/README.md) | <ul><li>黏附追加傷害若另行造成近戰擊殺，也可增加層數；純推擊不能增加層數。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/8a6ba0a3-cdaf-403f-a87b-3743b3fcfe97" width="32" height="32" alt="提速祝福圖示"> [提速](../../../entries/提速/README.md)<br>- Rev it Up<br>[完整說明](../../../entries/提速/README.md) | <ul><li>依等級讓移動速度加算值增加 +17% 至 +20%，持續 2 秒；限持用本武器並成功啟動特殊動作時。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/bdf43380-ae08-4838-9db7-bef2a972e2cb" width="32" height="32" alt="雷鳴祝福圖示"> [雷鳴](../../../entries/雷鳴/README.md)<br>- Thunderous<br>[完整說明](../../../entries/雷鳴/README.md) | <ul><li>符合條件的每次命中對該目標增加 I–IV 1/2/3/4 層脆弱（每層 2.5%，最多 16 層，5 秒）；鏈鋸黏附追加段另受 skip_on_hit_proc 過濾；詳見型號差異。</li></ul> | 近戰 |

## 逐型號對應

| 型號 | 祝福實作 | 等級 |
|---|---|---|
| 突擊鏈斧 奧瑞斯特斯 Mk IV | [機會主義者](../../../entries/機會主義者/weapon_trait_bespoke_chainaxe_p1_rending_vs_staggered.md)、[放血者](../../../entries/放血者/weapon_trait_bespoke_chainaxe_p1_bleed_on_activated_hit.md)、[奪顱者](../../../entries/奪顱者/weapon_trait_bespoke_chainaxe_p1_increase_power_on_hit.md)、[嗜血](../../../entries/嗜血/weapon_trait_bespoke_chainaxe_p1_guaranteed_melee_crit_on_activated_kill.md)、[推進](../../../entries/推進/weapon_trait_bespoke_chainaxe_p1_windup_increases_power.md)、[殺戮者](../../../entries/殺戮者/weapon_trait_bespoke_chainaxe_p1_increase_power_on_kill.md)、[提速](../../../entries/提速/weapon_trait_bespoke_chainaxe_p1_movement_speed_on_activation.md)、[雷鳴](../../../entries/雷鳴/weapon_trait_bespoke_chainaxe_p1_targets_receive_rending_debuff.md) | I–IV |
| 突擊鏈斧 奧瑞斯特斯 Mk XII | [機會主義者](../../../entries/機會主義者/weapon_trait_bespoke_chainaxe_p1_rending_vs_staggered.md)、[放血者](../../../entries/放血者/weapon_trait_bespoke_chainaxe_p1_bleed_on_activated_hit.md)、[奪顱者](../../../entries/奪顱者/weapon_trait_bespoke_chainaxe_p1_increase_power_on_hit.md)、[嗜血](../../../entries/嗜血/weapon_trait_bespoke_chainaxe_p1_guaranteed_melee_crit_on_activated_kill.md)、[推進](../../../entries/推進/weapon_trait_bespoke_chainaxe_p1_windup_increases_power.md)、[殺戮者](../../../entries/殺戮者/weapon_trait_bespoke_chainaxe_p1_increase_power_on_kill.md)、[提速](../../../entries/提速/weapon_trait_bespoke_chainaxe_p1_movement_speed_on_activation.md)、[雷鳴](../../../entries/雷鳴/weapon_trait_bespoke_chainaxe_p1_targets_receive_rending_debuff.md) | I–IV |

表內依各型號列出對應祝福；各祝福的等級為I–IV。
