# 惡棍槍(Thugshot)：對應祝福

[武器索引](../../README.md)｜[全部祝福](../../../README.md)

| 祝福 | 本武器主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/c00f0d06-a32b-43c4-a438-76598dd7c8f9" width="32" height="32" alt="連跑帶打祝福圖示"> [連跑帶打](../../../entries/連跑帶打/README.md)<br>- Run 'n' Gun<br>[完整說明](../../../entries/連跑帶打/README.md) | <ul><li>可在衝刺時腰射；I–IV衝刺近距離傷害+6%／9%／12%／15%；散布常駐減少30%。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/c32c7942-1996-482c-999d-276ef7388898" width="32" height="32" alt="精確打擊祝福圖示"> [精確打擊](../../../entries/精確打擊/README.md)<br>- Surgical<br>[完整說明](../../../entries/精確打擊/README.md) | <ul><li>每步+10個百分點，最多10步；I–IV間隔 0.350/0.300/0.250/0.200 秒。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/63976959-4253-4979-8013-1ab18966b7ea" width="32" height="32" alt="恐怖阻擊祝福圖示"> [恐怖阻擊](../../../entries/恐怖阻擊/README.md)<br>- Terrifying Barrage<br>[完整說明](../../../entries/恐怖阻擊/README.md) | <ul><li>目前 binding 的實際 template 是 ogryn_thumper_p1_m3；hip／zoom hitscan 以 ranged 結算，bash 是近戰 sweep。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/c0ab5584-32f4-4ae4-af3e-881f93db2fd8" width="32" height="32" alt="穿透祝福圖示"> [穿透](../../../entries/穿透/README.md)<br>- Pierce<br>[完整說明](../../../entries/穿透/README.md) | <ul><li>惡棍槍 洛倫茲 Mk VII：腰射／瞄準 hit-scan 和特殊 Bash 讀取此項的實際修正；一般敵人質量扣除降低，護甲中止另於 Bash 被略過，預算與 Breed 中止仍保留。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/7f167afe-444d-4afa-a9bb-3ef3db76fc43" width="32" height="32" alt="擴展性祝福圖示"> [擴展性](../../../entries/擴展性/README.md)<br>- Expansive<br>[完整說明](../../../entries/擴展性/README.md) | <ul><li>惡棍槍 洛倫茲 Mk VII：腰射與瞄準實際走 hitscan，依直接命中單位數觸發。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/63d34e16-454f-4ece-8051-9c473c0a1619" width="32" height="32" alt="懲罰射擊祝福圖示"> [懲罰射擊](../../../entries/懲罰射擊/README.md)<br>- Punishing Fire<br>[完整說明](../../../entries/懲罰射擊/README.md) | <ul><li>觸發後，遠程攻擊力量修正提高 +6%／+9%／+12%／+15%，持續 3 秒。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/6b381aff-25ca-43bb-9878-356963df97f5" width="32" height="32" alt="激勵彈幕祝福圖示"> [激勵彈幕](../../../entries/激勵彈幕/README.md)<br>- Inspiring Barrage<br>[完整說明](../../../entries/激勵彈幕/README.md) | <ul><li>惡棍槍 洛倫茲 Mk VII：腰射與瞄準皆為 hitscan、每動作消耗一發；沒有 keep_combo_on_start，瞄準不持有連擊，預設逾時重設 0.2 秒。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/a8cc8dc4-8ad6-4da4-9949-7061743f05f4" width="32" height="32" alt="連續發射（射擊連段）祝福圖示"> [連續發射（射擊連段）](../../../entries/連續發射（射擊連段）/README.md)<br>- Blaze Away<br>[完整說明](../../../entries/連續發射（射擊連段）/README.md) | <ul><li>惡棍槍 洛倫茲 Mk VII（ogryn_thumper_p1_m3）：每個有效動作連段步提高一般攻擊威力修正池；I–IV 每步 6%/7%/8%/9%，最多 5 步。</li></ul> | 遠程 |

## 逐型號對應

| 型號 | 祝福實作 | 等級 |
|---|---|---|
| 惡棍槍 洛倫茲 Mk VII | [連跑帶打](../../../entries/連跑帶打/weapon_trait_bespoke_ogryn_thumper_p3_hipfire_while_sprinting.md)、[精確打擊](../../../entries/精確打擊/weapon_trait_bespoke_ogryn_thumper_p3_crit_chance_based_on_aim_time.md)、[恐怖阻擊](../../../entries/恐怖阻擊/weapon_trait_bespoke_ogryn_thumper_p3_suppression_on_close_kill.md)、[穿透](../../../entries/穿透/weapon_trait_bespoke_ogryn_thumper_p3_pass_past_armor_on_weapon_special.md)、[擴展性](../../../entries/擴展性/weapon_trait_bespoke_ogryn_thumper_p3_weapon_special_power_bonus_after_one_shots.md)、[懲罰射擊](../../../entries/懲罰射擊/weapon_trait_bespoke_ogryn_thumper_p3_shot_power_bonus_after_weapon_special_cleave.md)、[激勵彈幕](../../../entries/激勵彈幕/weapon_trait_bespoke_ogryn_thumper_p3_toughness_on_continuous_fire.md)、[連續發射（射擊連段）](../../../entries/連續發射（射擊連段）/weapon_trait_bespoke_ogryn_thumper_p3_power_bonus_on_continuous_fire.md) | I–IV |

表內依各型號列出對應祝福；各祝福的等級為I–IV。
