# 碎骨者(Cruncher)：對應祝福

[武器索引](../../README.md)｜[全部祝福](../../../README.md)

| 祝福 | 本武器主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/32e5f2ee-798c-4a48-9b8d-5a2727edf70a" width="32" height="32" alt="處決祝福圖示"> [處決](../../../entries/處決/README.md)<br>- Execution<br>[完整說明](../../../entries/處決/README.md) | <ul><li>普通、蓄力、特殊重擊與追擊依傷害判定；純推擊不增加生命傷害。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/9277a78a-f4a2-4639-9fcb-cbbfbf82b3c7" width="32" height="32" alt="震懾祝福圖示"> [震懾](../../../entries/震懾/README.md)<br>- Shock & Awe<br>[完整說明](../../../entries/震懾/README.md) | <ul><li>I–IV 質量消耗減少30%／40%／50%／60%，擊殺後3秒；特殊重擊也按合格命中事件觸發。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/e812753b-127d-4719-b188-f0fe269f449f" width="32" height="32" alt="勢不可擋祝福圖示"> [勢不可擋](../../../entries/勢不可擋/README.md)<br>- Unstoppable Force<br>[完整說明](../../../entries/勢不可擋/README.md) | <ul><li>完全蓄力重型近戰攻擊的傷害計算增加 2.5%–10%，並忽略敵人命中質量；祝福武器持用時，重型掃掠另可暫時通過裝甲中止判定。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/c75cc4c6-fc23-4772-bc04-ebba0b0c4c8f" width="32" height="32" alt="孤注一擲祝福圖示"> [孤注一擲](../../../entries/孤注一擲/README.md)<br>- All or Nothing<br>[完整說明](../../../entries/孤注一擲/README.md) | <ul><li>每少 12.5 個百分點耐力增加一階，最多五階；I–IV 每階為 3%/4%/5%/6%，卡面上限為 +15%/+20%/+25%/+30%。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/5279832c-d7d6-4681-8397-a840feb26d4c" width="32" height="32" alt="緩慢而確實祝福圖示"> [緩慢而確實](../../../entries/緩慢而確實/README.md)<br>- Slow and Steady<br>[完整說明](../../../entries/緩慢而確實/README.md) | <ul><li>碎骨者克魯克 Mk IIa：普通連段及兩種特殊攻擊均先經蓄能，再進入攻擊掃掠；使用預設 0.25 秒後續蓄能間隔。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/f65d27d9-85f5-45c6-a5e1-253f85ba8ea9" width="32" height="32" alt="揮拳出擊祝福圖示"> [揮拳出擊](../../../entries/揮拳出擊/README.md)<br>- Take a Swing<br>[完整說明](../../../entries/揮拳出擊/README.md) | <ul><li>手持槽位觸發後，後續弱點命中增加 +45%／+50%／+55%／+60% 通用弱點傷害；期限 6 秒，期間合格推擊刷新，不疊層。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/fde18f48-0180-49ae-9b9f-cc40a0ebf109" width="32" height="32" alt="斷肢者祝福圖示"> [斷肢者](../../../entries/斷肢者/README.md)<br>- Limbsplitter<br>[完整說明](../../../entries/斷肢者/README.md) | <ul><li>持用且統計快取處於可用狀態時，碎骨者 克魯克 Mk IIa（Cruncher Krourk Mk IIa）的近戰攻擊取得 +17.5%／+20%／+22.5%／+25% 近戰威力；合格近戰命中在傷害結算後重新開始等待，各級均為 2 秒。</li></ul> | 近戰 |
| <img src="https://github.com/user-attachments/assets/309e0a2e-5b01-4af4-bde2-cddcbd580233" width="32" height="32" alt="錘擊祝福圖示"> [錘擊](../../../entries/錘擊/README.md)<br>- Hammerblow<br>[完整說明](../../../entries/錘擊/README.md) | <ul><li>符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。</li></ul> | 近戰 |

## 逐型號對應

| 型號 | 祝福實作 | 等級 |
|---|---|---|
| 碎骨者 克魯克 Mk IIa | [處決](../../../entries/處決/weapon_trait_bespoke_ogryn_hammer_2h_p1_stagger_bonus_damage.md)、[震懾](../../../entries/震懾/weapon_trait_bespoke_ogryn_hammer_2h_p1_hit_mass_consumption_reduction_on_kill.md)、[勢不可擋](../../../entries/勢不可擋/weapon_trait_bespoke_ogryn_hammer_2h_p1_pass_past_armor_on_heavy_attack.md)、[孤注一擲](../../../entries/孤注一擲/weapon_trait_bespoke_ogryn_hammer_2h_p1_power_bonus_scaled_on_stamina.md)、[緩慢而確實](../../../entries/緩慢而確實/weapon_trait_bespoke_ogryn_hammer_2h_p1_toughness_on_hit_based_on_charge_time.md)、[揮拳出擊](../../../entries/揮拳出擊/weapon_trait_bespoke_ogryn_hammer_2h_p1_increased_weakspot_damage_on_push.md)、[斷肢者](../../../entries/斷肢者/weapon_trait_bespoke_ogryn_hammer_2h_p1_power_bonus_on_first_attack.md)、[錘擊](../../../entries/錘擊/weapon_trait_bespoke_ogryn_hammer_2h_p1_stacking_increase_impact_on_hit.md) | I–IV |

表內依各型號列出對應祝福；各祝福的等級為I–IV。
