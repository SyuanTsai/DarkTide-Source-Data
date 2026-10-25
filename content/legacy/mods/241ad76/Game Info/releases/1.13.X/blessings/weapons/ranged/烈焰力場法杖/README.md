# 烈焰力場法杖(Inferno Force Staff)：對應祝福

[武器索引](../../README.md)｜[全部祝福](../../../README.md)

| 祝福 | 本武器主要效果 | 分類 |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/c00f0d06-a32b-43c4-a438-76598dd7c8f9" width="32" height="32" alt="連跑帶打祝福圖示"> [連跑帶打](../../../entries/連跑帶打/README.md)<br>- Run 'n' Gun<br>[完整說明](../../../entries/連跑帶打/README.md) | <ul><li>可在衝刺時腰射；I–IV衝刺近距離傷害+6%／9%／12%／15%；散布常駐減少30%。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/0836e233-112e-4757-85cb-ee040d1bd4f7" width="32" height="32" alt="穿透火焰祝福圖示"> [穿透火焰](../../../entries/穿透火焰/README.md)<br>- Penetrating Flame<br>[完整說明](../../../entries/穿透火焰/README.md) | <ul><li>烈焰力場法杖的短按火焰爆發或蓄力火焰攻擊直接命中時，依等級疊加1／2／3／4層脆弱。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/c028ae7c-f62f-4407-b9b2-7420eebf0fe8" width="32" height="32" alt="歎為觀止祝福圖示"> [歎為觀止](../../../entries/歎為觀止/README.md)<br>- Showstopper<br>[完整說明](../../../entries/歎為觀止/README.md) | <ul><li>符合條件的擊殺有14%／16%／18%／20%機率引發固定威力600、基本半徑4且有距離衰減的爆炸。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/a24dfe97-3d90-44b2-afb5-99309f88e6f4" width="32" height="32" alt="亞空間亂舞祝福圖示"> [亞空間亂舞](../../../entries/亞空間亂舞/README.md)<br>- Warp Flurry<br>[完整說明](../../../entries/亞空間亂舞/README.md) | <ul><li>action_shoot_charged_flame 開始時累積；只適用烈焰力場法杖 裂隙避難所 Mk II。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/63976959-4253-4979-8013-1ab18966b7ea" width="32" height="32" alt="恐怖阻擊祝福圖示"> [恐怖阻擊](../../../entries/恐怖阻擊/README.md)<br>- Terrifying Barrage<br>[完整說明](../../../entries/恐怖阻擊/README.md) | <ul><li>普通火焰與蓄力火焰的直接攻擊為 ranged；延遲 flamer_assault 燃燒 tick 是 buff 類型且其 damage profile 不標 count_as_ranged_attack，故 tick 不符合遠程擊殺分支；杖擊／揮擊為近戰。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/7b314280-0bfe-4a53-8bf5-a278d868bfb7" width="32" height="32" alt="亞空間樞紐祝福圖示"> [亞空間樞紐](../../../entries/亞空間樞紐/README.md)<br>- Warp Nexus<br>[完整說明](../../../entries/亞空間樞紐/README.md) | <ul><li>烈焰力場法杖 裂隙避難所 Mk II手持時，依原始反噬比例每滿 20% 增加一階致命一擊機率；每階按所選等級增加 3.5／4／4.5／5 個百分點，至多四階。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/3778f955-df91-47c2-997d-02817524ac32" width="32" height="32" alt="專注引導祝福圖示"> [專注引導](../../../entries/專注引導/README.md)<br>- Focused Channelling<br>[完整說明](../../../entries/專注引導/README.md) | <ul><li>烈焰力場法杖 裂隙避難所 Mk II：只在火焰蓄能期間符合；普通火焰射擊與蓄能後火焰由武器本身設定原生旗標。</li></ul> | 遠程 |
| <img src="https://github.com/user-attachments/assets/a8cc8dc4-8ad6-4da4-9949-7061743f05f4" width="32" height="32" alt="連續發射祝福圖示"> [連續發射](../../../entries/連續發射/README.md)<br>- Blaze Away<br>[完整說明](../../../entries/連續發射/README.md) | <ul><li>烈焰力場法杖 裂隙避難所 Mk II：持用時依玩家共用射擊計數增加攻擊力量修正；每步 I–IV：5%、6%、7%、8%；該武器無彈藥且容量為 0，但最低一步規則仍將步距設為 1，詳見原文勘誤。</li></ul> | 遠程 |

## 逐型號對應

| 型號 | 祝福實作 | 等級 |
|---|---|---|
| 烈焰力場法杖 裂隙避難所 Mk II | [連跑帶打](../../../entries/連跑帶打/weapon_trait_bespoke_forcestaff_p2_hipfire_while_sprinting.md)、[穿透火焰](../../../entries/穿透火焰/weapon_trait_bespoke_forcestaff_p2_burned_targets_receive_rending_debuff.md)、[歎為觀止](../../../entries/歎為觀止/weapon_trait_bespoke_forcestaff_p2_chance_to_explode_elites_on_kill.md)、[亞空間亂舞](../../../entries/亞空間亂舞/weapon_trait_bespoke_forcestaff_p2_faster_charge_on_chained_secondary_attacks.md)、[恐怖阻擊](../../../entries/恐怖阻擊/weapon_trait_bespoke_forcestaff_p2_suppression_on_close_kill.md)、[亞空間樞紐](../../../entries/亞空間樞紐/weapon_trait_bespoke_forcestaff_p2_warp_charge_critical_strike_chance_bonus.md)、[專注引導](../../../entries/專注引導/weapon_trait_bespoke_forcestaff_p2_uninterruptable_while_charging.md)、[連續發射](../../../entries/連續發射/weapon_trait_bespoke_forcestaff_p2_power_bonus_on_continuous_fire.md) | I–IV |

表內依各型號列出對應祝福；各祝福的等級為I–IV。
