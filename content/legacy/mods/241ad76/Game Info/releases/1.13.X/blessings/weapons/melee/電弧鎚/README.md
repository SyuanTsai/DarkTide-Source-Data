# 電弧鎚(Arc Maul)：對應祝福

[武器索引](../../README.md)｜[全部祝福](../../../README.md)

| 祝福 | 本武器主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/493a9f0e-5e68-4416-bbf3-d99bdfc85b1b" width="32" height="32" alt="電靈超載祝福圖示"> [電靈超載](../../../entries/電靈超載/README.md)<br>- Voltagheist Overload<br>[完整說明](../../../entries/電靈超載/README.md) | <ul><li>電弧命中仍存活的人型敵人時，I–IV各有5%／7.5%／10%／12.5%機率處決；不作用於歐格林、魔物及首領。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/a5db31b7-608a-488a-8d23-6ccfec4c2f3f" width="32" height="32" alt="閃電反射祝福圖示"> [閃電反射](../../../entries/閃電反射/README.md)<br>- Lightning Reflexes<br>[完整說明](../../../entries/閃電反射/README.md) | <ul><li>格擋近戰後獲得+10%／15%／20%／25%近戰威力，持續5秒；完美格擋另施加3秒電擊，生效期間不再觸發。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/32e5f2ee-798c-4a48-9b8d-5a2727edf70a" width="32" height="32" alt="處決祝福圖示"> [處決](../../../entries/處決/README.md)<br>- Execution<br>[完整說明](../../../entries/處決/README.md) | <ul><li>特殊強化與連鎖電弧逐目標檢查；純推擊與後續傷害分開。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/c5a09417-3943-4e7d-859d-3cc2935933d7" width="32" height="32" alt="強化電流弧祝福圖示"> [強化電流弧](../../../entries/強化電流弧/README.md)<br>- Enhanced Voltaic Arcs<br>[完整說明](../../../entries/強化電流弧/README.md) | <ul><li>持用電弧鎚 布蘭克斯 Mk III 時，角度 I–IV 加 +5°／+7.5°／+10°／+12.5°、半徑加 +0.5／+1／+1.5／+2、max_jumps 加 1／1／2／2；掃擊路徑另受 special-active gate 限制。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/bdf43380-ae08-4838-9db7-bef2a972e2cb" width="32" height="32" alt="雷鳴祝福圖示"> [雷鳴](../../../entries/雷鳴/README.md)<br>- Thunderous<br>[完整說明](../../../entries/雷鳴/README.md) | <ul><li>符合條件的每次命中對該目標增加 I–IV 1/2/3/4 層脆弱（每層 2.5%，最多 16 層，5 秒）；連鎖電弧 Attack 保留 P3 原武器物品；詳見型號差異。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/c75cc4c6-fc23-4772-bc04-ebba0b0c4c8f" width="32" height="32" alt="孤注一擲祝福圖示"> [孤注一擲](../../../entries/孤注一擲/README.md)<br>- All or Nothing<br>[完整說明](../../../entries/孤注一擲/README.md) | <ul><li>每少 20 個百分點耐力增加一階，最多五階；I–IV 每階為 5%/6%/7%/8%，卡面上限為 +25%/+30%/+35%/+40%。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/3c0b7dca-c490-4cd0-8c2f-d175f3a6f75f" width="32" height="32" alt="壓倒性的武力祝福圖示"> [壓倒性的武力](../../../entries/壓倒性的武力/README.md)<br>- Overwhelming Force<br>[完整說明](../../../entries/壓倒性的武力/README.md) | <ul><li>布蘭克斯 Mk III：full 且 stagger 的 on_hit 依相同機率套用眩暈，另須目標標籤為 elite 或 special。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/309e0a2e-5b01-4af4-bde2-cddcbd580233" width="32" height="32" alt="錘擊祝福圖示"> [錘擊](../../../entries/錘擊/README.md)<br>- Hammerblow<br>[完整說明](../../../entries/錘擊/README.md) | <ul><li>符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/7b342f87-845c-4859-b77e-9e8e911146e9" width="32" height="32" alt="堅定打擊祝福圖示"> [堅定打擊](../../../entries/堅定打擊/README.md)<br>- Confident Strike<br>[完整說明](../../../entries/堅定打擊/README.md) | <ul><li>符合連擊掃掠時，每次恢復最大韌性的 +4%、+5%、+6%、+7%；不疊層，非限時加成。</li></ul> | 近戰 |

## 逐型號對應

| 型號 | 祝福實作 | 等級 |
|---|---|---|
| 電弧鎚 布蘭克斯 Mk III | [電靈超載](../../../entries/電靈超載/weapon_trait_bespoke_powermaul_p3_arc_has_killing_blow_chance.md)、[閃電反射](../../../entries/閃電反射/weapon_trait_bespoke_powermaul_p3_block_has_chance_to_stun.md)、[處決](../../../entries/處決/weapon_trait_bespoke_powermaul_p3_stagger_bonus_damage.md)、[強化電流弧](../../../entries/強化電流弧/weapon_trait_bespoke_powermaul_p3_enhanced_arc_jumps_angle.md)、[雷鳴](../../../entries/雷鳴/weapon_trait_bespoke_powermaul_p3_targets_receive_rending_debuff.md)、[孤注一擲](../../../entries/孤注一擲/weapon_trait_bespoke_powermaul_p3_power_bonus_scaled_on_stamina.md)、[壓倒性的武力](../../../entries/壓倒性的武力/weapon_trait_bespoke_powermaul_p3_staggering_hits_has_chance_to_stun.md)、[錘擊](../../../entries/錘擊/weapon_trait_bespoke_powermaul_p3_stacking_increase_impact_on_hit.md)、[堅定打擊](../../../entries/堅定打擊/weapon_trait_bespoke_powermaul_p3_toughness_recovery_on_chained_attacks.md) | I–IV |

表內依各型號列出對應祝福；各祝福的等級為I–IV。
