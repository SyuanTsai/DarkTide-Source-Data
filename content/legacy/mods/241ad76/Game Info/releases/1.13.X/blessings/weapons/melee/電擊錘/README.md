# 電擊錘(Shock Maul)：對應祝福

[武器索引](../../README.md)｜[全部祝福](../../../README.md)

| 祝福 | 本武器主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/e292ed7d-8b36-4da5-9f39-528bed983004" width="32" height="32" alt="機會主義者祝福圖示"> [機會主義者](../../../entries/機會主義者/README.md)<br>- Opportunist<br>[完整說明](../../../entries/機會主義者/README.md) | <ul><li>對傷害結算前已踉蹌或被視為踉蹌的敵人，I–IV提供10%／15%／20%／25%近戰撕裂；本擊才造成踉蹌不回溯加成。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/a5db31b7-608a-488a-8d23-6ccfec4c2f3f" width="32" height="32" alt="閃電反射祝福圖示"> [閃電反射](../../../entries/閃電反射/README.md)<br>- Lightning Reflexes<br>[完整說明](../../../entries/閃電反射/README.md) | <ul><li>格擋近戰後獲得+10%／15%／20%／25%近戰威力，持續3秒；完美格擋另施加3秒電擊，生效期間不再觸發。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/a5bb3fdd-036e-4b45-b53c-bfea7b800645" width="32" height="32" alt="高壓電祝福圖示"> [高壓電](../../../entries/高壓電/README.md)<br>- High Voltage<br>[完整說明](../../../entries/高壓電/README.md) | <ul><li>充能黏附特攻先結算傷害再施加電擊；目標層數延長電擊期限，不疊加祝福數值。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/82bed9ff-831f-4905-bcc5-3101a43fa29c" width="32" height="32" alt="推進祝福圖示"> [推進](../../../entries/推進/README.md)<br>- Thrust<br>[完整說明](../../../entries/推進/README.md) | <ul><li>每次蓄力事件增加一層近戰力量修正，最多三層；I–IV 每層分別增加 5／10／15／20 個百分點，三層上限為 15／30／45／60 個百分點。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/9a227f1b-06ae-4521-995a-22719d62e917" width="32" height="32" alt="踉蹌祝福圖示"> [踉蹌](../../../entries/踉蹌/README.md)<br>- Falter<br>[完整說明](../../../entries/踉蹌/README.md) | <ul><li>電擊錘普通直擊依命中與profile處理；蓄能上勾忽略踉蹌減免，間隔tick無弱點或遠程類型。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/3c0b7dca-c490-4cd0-8c2f-d175f3a6f75f" width="32" height="32" alt="壓倒性的武力祝福圖示"> [壓倒性的武力](../../../entries/壓倒性的武力/README.md)<br>- Overwhelming Force<br>[完整說明](../../../entries/壓倒性的武力/README.md) | <ul><li>阿格尼 Mk Ia、軍務部 Mk III：持用時，full 且 stagger 的 on_hit 依 I–IV 機率套用眩暈；無額外攻擊類型或目標標籤門檻。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/309e0a2e-5b01-4af4-bde2-cddcbd580233" width="32" height="32" alt="錘擊祝福圖示"> [錘擊](../../../entries/錘擊/README.md)<br>- Hammerblow<br>[完整說明](../../../entries/錘擊/README.md) | <ul><li>符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/d1d3d38b-e78c-45b5-ae2e-cb3d99140195" width="32" height="32" alt="碎顱者祝福圖示"> [碎顱者](../../../entries/碎顱者/README.md)<br>- Skullcrusher<br>[完整說明](../../../entries/碎顱者/README.md) | <ul><li>來源武器命中仍存活且符合 Minion 判定、事件處理時正踉蹌的目標，並通過來源物品與持用條件時，Tier I–IV 分別請求 1／2／3／4 層。每個有效層使目標踉蹌傷害池中的 damage_vs_staggered 加 10%，目標 stat 最多按 8 層計算。效果持續 5 秒；每次符合條件的命中都刷新期限，即使 helper 的 31 層原始累積上限令本次新增 0 層也會刷新。</li></ul> | 近戰 |

## 逐型號對應

| 型號 | 祝福實作 | 等級 |
|---|---|---|
| 電擊錘 阿格尼 Mk Ia | [機會主義者](../../../entries/機會主義者/weapon_trait_bespoke_powermaul_p1_rending_vs_staggered.md)、[閃電反射](../../../entries/閃電反射/weapon_trait_bespoke_powermaul_p1_block_has_chance_to_stun.md)、[高壓電](../../../entries/高壓電/weapon_trait_bespoke_powermaul_p1_damage_bonus_vs_electrocuted.md)、[推進](../../../entries/推進/weapon_trait_bespoke_powermaul_p1_windup_increases_power.md)、[踉蹌](../../../entries/踉蹌/weapon_trait_bespoke_powermaul_p1_negate_stagger_reduction_on_weakspot.md)、[壓倒性的武力](../../../entries/壓倒性的武力/weapon_trait_bespoke_powermaul_p1_staggering_hits_has_chance_to_stun.md)、[錘擊](../../../entries/錘擊/weapon_trait_bespoke_powermaul_p1_stacking_increase_impact_on_hit.md)、[碎顱者](../../../entries/碎顱者/weapon_trait_bespoke_powermaul_p1_staggered_targets_receive_increased_damage_debuff.md) | I–IV |
| 電擊錘 軍務部 Mk III | [機會主義者](../../../entries/機會主義者/weapon_trait_bespoke_powermaul_p1_rending_vs_staggered.md)、[閃電反射](../../../entries/閃電反射/weapon_trait_bespoke_powermaul_p1_block_has_chance_to_stun.md)、[高壓電](../../../entries/高壓電/weapon_trait_bespoke_powermaul_p1_damage_bonus_vs_electrocuted.md)、[推進](../../../entries/推進/weapon_trait_bespoke_powermaul_p1_windup_increases_power.md)、[踉蹌](../../../entries/踉蹌/weapon_trait_bespoke_powermaul_p1_negate_stagger_reduction_on_weakspot.md)、[壓倒性的武力](../../../entries/壓倒性的武力/weapon_trait_bespoke_powermaul_p1_staggering_hits_has_chance_to_stun.md)、[錘擊](../../../entries/錘擊/weapon_trait_bespoke_powermaul_p1_stacking_increase_impact_on_hit.md)、[碎顱者](../../../entries/碎顱者/weapon_trait_bespoke_powermaul_p1_staggered_targets_receive_increased_damage_debuff.md) | I–IV |

表內依各型號列出對應祝福；各祝福的等級為I–IV。
