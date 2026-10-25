# 法務官電擊鎚(Arbites Shock Maul)：對應祝福

[武器索引](../../README.md)｜[全部祝福](../../../README.md)

| 祝福 | 本武器主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/a5db31b7-608a-488a-8d23-6ccfec4c2f3f" width="32" height="32" alt="閃電反射祝福圖示"> [閃電反射](../../../entries/閃電反射/README.md)<br>- Lightning Reflexes<br>[完整說明](../../../entries/閃電反射/README.md) | <ul><li>格擋近戰後獲得+10%／15%／20%／25%近戰威力，持續3秒；完美格擋另施加3秒電擊，生效期間不再觸發。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/a5bb3fdd-036e-4b45-b53c-bfea7b800645" width="32" height="32" alt="高壓電祝福圖示"> [高壓電](../../../entries/高壓電/README.md)<br>- High Voltage<br>[完整說明](../../../entries/高壓電/README.md) | <ul><li>特攻命中已電擊目標可施加電擊間隔效果；未電擊目標只取得基本暈眩。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/32e5f2ee-798c-4a48-9b8d-5a2727edf70a" width="32" height="32" alt="處決祝福圖示"> [處決](../../../entries/處決/README.md)<br>- Execution<br>[完整說明](../../../entries/處決/README.md) | <ul><li>特殊強化及實際間隔電擊傷害，各自按當時目標狀態與持用條件判定。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/bdf43380-ae08-4838-9db7-bef2a972e2cb" width="32" height="32" alt="雷鳴祝福圖示"> [雷鳴](../../../entries/雷鳴/README.md)<br>- Thunderous<br>[完整說明](../../../entries/雷鳴/README.md) | <ul><li>符合條件的每次命中對該目標增加 I–IV 1/2/3/4 層脆弱（每層 2.5%，最多 16 層，5 秒）；P2 綁定的是一般命中 wrapper，特殊掃掠仍按一般事件判斷；詳見型號差異。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/9a227f1b-06ae-4521-995a-22719d62e917" width="32" height="32" alt="踉蹌祝福圖示"> [踉蹌](../../../entries/踉蹌/README.md)<br>- Falter<br>[完整說明](../../../entries/踉蹌/README.md) | <ul><li>法務官電擊鎚重型蓄力例外忽略減免；純推與特殊直擊依各自類型、profile判定。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/c75cc4c6-fc23-4772-bc04-ebba0b0c4c8f" width="32" height="32" alt="孤注一擲祝福圖示"> [孤注一擲](../../../entries/孤注一擲/README.md)<br>- All or Nothing<br>[完整說明](../../../entries/孤注一擲/README.md) | <ul><li>每少 20 個百分點耐力增加一階，最多五階；I–IV 每階為 5%/6%/7%/8%，卡面上限為 +25%/+30%/+35%/+40%。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/b7eea9d3-8f5f-4ead-bc52-651a5a42f7e3" width="32" height="32" alt="持續打擊祝福圖示"> [持續打擊](../../../entries/持續打擊/README.md)<br>- Relentless Strikes<br>[完整說明](../../../entries/持續打擊/README.md) | <ul><li>布蘭克斯 Mk III 的普通、重擊、推後連擊與 powered 特殊近戰掃掠可依同目標命中追蹤增加近戰威力；特殊命中另有 stun 效果，沒有本項爆炸路徑。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/309e0a2e-5b01-4af4-bde2-cddcbd580233" width="32" height="32" alt="錘擊祝福圖示"> [錘擊](../../../entries/錘擊/README.md)<br>- Hammerblow<br>[完整說明](../../../entries/錘擊/README.md) | <ul><li>符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/7b342f87-845c-4859-b77e-9e8e911146e9" width="32" height="32" alt="堅定打擊祝福圖示"> [堅定打擊](../../../entries/堅定打擊/README.md)<br>- Confident Strike<br>[完整說明](../../../entries/堅定打擊/README.md) | <ul><li>符合連擊掃掠時，每次恢復最大韌性的 +5%、+6%、+7%、+8%；不疊層，非限時加成。</li></ul> | 近戰 |

## 逐型號對應

| 型號 | 祝福實作 | 等級 |
|---|---|---|
| 法務官電擊鎚 布蘭克斯 Mk III | [閃電反射](../../../entries/閃電反射/weapon_trait_bespoke_powermaul_p2_block_has_chance_to_stun.md)、[高壓電](../../../entries/高壓電/weapon_trait_bespoke_powermaul_p2_damage_bonus_vs_electrocuted.md)、[處決](../../../entries/處決/weapon_trait_bespoke_powermaul_p2_stagger_bonus_damage.md)、[雷鳴](../../../entries/雷鳴/weapon_trait_bespoke_powermaul_p2_targets_receive_rending_debuff.md)、[踉蹌](../../../entries/踉蹌/weapon_trait_bespoke_powermaul_p2_negate_stagger_reduction_on_weakspot.md)、[孤注一擲](../../../entries/孤注一擲/weapon_trait_bespoke_powermaul_p2_power_bonus_scaled_on_stamina.md)、[持續打擊](../../../entries/持續打擊/weapon_trait_bespoke_powermaul_p2_consecutive_melee_hits_same_target_increases_melee_power.md)、[錘擊](../../../entries/錘擊/weapon_trait_bespoke_powermaul_p2_stacking_increase_impact_on_hit.md)、[堅定打擊](../../../entries/堅定打擊/weapon_trait_bespoke_powermaul_p2_toughness_recovery_on_chained_attacks.md) | I–IV |

表內依各型號列出對應祝福；各祝福的等級為I–IV。
