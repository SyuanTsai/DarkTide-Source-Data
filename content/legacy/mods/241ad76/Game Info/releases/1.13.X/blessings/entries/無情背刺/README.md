# 無情背刺(Ruthless Backstab)

[祝福目錄](../../README.md)｜[來源與公式](SOURCE_INDEX.md)

<img src="https://github.com/user-attachments/assets/fa42d7e1-e0d1-4701-bcc5-04caada37d5c" width="72" height="72" alt="無情背刺祝福圖示">

- **觸發方式**：本祝福沒有啟動鍵、層數或持續計時。裝備此祝福會提供背刺判定許可；背刺須由近戰攻擊命中，目標具有遊戲可辨識的單位與敵人類別資料，而且攻擊方向與目標水平朝向的內積嚴格大於 0.5（恰好 0.5 不算）。命中還須有武器傷害設定的背刺加成，或由此祝福提供的背刺許可，才會被當作有效背刺。

- **撕裂效果**：I／II／III／IV 級分別提供 +70%／+80%／+90%／+100% 的背刺撕裂加算。裝備中的祝福會持續提供背刺判定許可；這項撕裂數值只有在該祝福所在武器欄位正被持用時才加入近戰背刺結算。

- **作用階段**：撕裂加算先進入攻擊的撕裂倍率，再作用於目標護甲傷害階段；不等於對所有目標的最終傷害固定增加 70%–100%。有效撕裂增量會與其他撕裂來源依原生規則合併，並受 1 的上限限制。

- **首次生效**：裝備該武器後，待遊戲更新祝福效果，之後符合條件的近戰命中才套用撕裂數值；已結算的攻擊不會回溯套用。

- **切換與卸下**：切到其他欄位時，背刺許可仍隨已裝備的祝福存在，但這項武器的持用限定撕裂數值關閉；它沒有倒數計時可暫停或保留。切回持用後，遊戲更新該武器效果後重新套用撕裂數值。從裝備欄卸下該武器時，裝備時安裝的祝福效果也會移除。

- **四個實際型號**：戰刃 卡塔昌 Mk III、戰刃 卡塔昌 Mk VI、短刀 臨時拼湊 型號1、短刀 臨時拼湊 型號3都接入相同的 I–IV 數值與被動模板。戰刃與短刀的普通／蓄力命中及推擊後續走近戰 sweep；純推擊是另一種攻擊，不會被近戰背刺判定採用。

- **戰刃特殊鍵與後續命中**：戰刃 卡塔昌 Mk III／Mk VI 按特殊鍵時先執行 `action_special_jab`：這是近戰 sweep，使用 `attack_special_jab` 動作資料，action 的 `damage_type` 是 `punch`，並連到 `jab_special` profile；profile 自身的 `damage_type` 為 `blunt_thunder`。因此首段是拳擊 jab，不是刀刃刺擊。若接續 light／heavy 輸入，會先進入沒有傷害命中的 `action_melee_start_left_jab_combo` windup，再另行執行 `action_left_heavy_jab_combo` 刀刃近戰 sweep，使用 `medium_combat_knife_ninja_fencer` profile 與 `knife` damage type。首段 profile 沒有 `backstab_bonus`，但裝備祝福提供的 `allow_backstabbing` keyword 可滿足有效背刺許可；後續刀刃 profile 自帶 `backstab_bonus=0.25`。兩段都是 melee sweep，仍須各自符合背刺幾何與目標條件。Mk VI 後續動作另設 `power_level=400`；後續刀刃重擊接回特殊拳擊的 `special_action` chain_time 為 0.85 秒，Mk III 為 0.4 秒。兩個 Mark 的首拳接入 windup 都是 `start_attack` chain_time 0.32 秒。

- **推擊與短刀特殊攻擊**：純推擊是獨立的推擊攻擊種類，不會被近戰背刺判定採用；推擊後續若另有近戰揮擊則可判定。短刀 臨時拼湊 型號1／型號3的特殊動作是 `weapon_throw`，由投射物造成 ranged 攻擊，不符合此祝福要求的近戰攻擊種類。

## 計算與算例

**例一｜戰刃 卡塔昌 Mk VI 特殊拳擊對 resistant 護甲（Tier I）**

- **前提**：使用實際綁定的 `combatknife_p1_m2`，特殊鍵首段 `action_special_jab` sweep 連到 `jab_special` profile；採 damage profile 的第一個傷害目標（`target_index=1`）與 `armor_types.resistant` 的 attack 修正。Profile 指定 `lerp_2`，端點為 1.42 與 2.58；此正規化例明確取 profile 線性插值參數 `t=0.5`，所以 `a=2.00`。將護甲階段前的傷害記作 `B=100`；假設這是有效背刺、其他撕裂項中性且沒有目標撕裂增益。`armor_types.resistant` 的超額撕裂係數 `o=0.25`。
- **代入**：Tier I `r=0.70`；`a≥1`，所以 `M=a+r×o=2.00+0.70×0.25=2.175`。
- **結果**：沒有本祝福時護甲／撕裂階段為 `B×a=100×2=200`；加上本項後為 `B×M=100×2.175=217.5`，此階段相對增加 `(217.5−200)÷200=8.75%`。
- **玩家意義**：+70% 是撕裂項，不是這個拳擊命中固定多 70% 傷害；profile、插值輸入、護甲類別及後續命中計算都會改變最終結果。
- **來源**：特殊動作接線 `combatknife_p1_m2.lua` 958–1032（range SHA-256 `5fe648de66477ff8a2da89d6f23bbb6f749f41c8261597d0a004ea0ac3060595`）；`jab_special` 護甲表 `combat_knife_damage_profile_templates.lua` 542–619（`010f18559b6bbe693517aa8988e28273b640787db6524d73d2affd7c5fc3d2d2`）；`lerp_2` 端點 `damage_profile_settings.lua` 24–27（`c7625cf314976f977c986a8a095c33e640fa1739d32e606f36944f2a33f7576c`）；線性插值 `damage_profile.lua` 379–384（`1fd02fd87bae02be6e067797e360c1959a912224154fa9ccb681b679916b7c02`）；`armor_types.resistant` 的超額撕裂係數 `armor_settings.lua` 8–19（range SHA-256 `210f584a6f1e783afbf7b3a8ad6200269f110c2ef206921dae923bd78abcea76`）。

**例二｜戰刃 卡塔昌 Mk III 後續刀刃重擊對 resistant 護甲（Tier IV）**

- **前提**：使用實際綁定的 `combatknife_p1_m1`；特殊連段先經獨立 windup，再由 `action_left_heavy_jab_combo` 執行 melee sweep，接 `medium_combat_knife_ninja_fencer` profile。明確取此 damage profile 第一個傷害目標（`target_index=1`）；其 attack 護甲修正對 `armor_types.resistant` 使用 `lerp_1`；以相同的中點 `t=0.5` 和端點 0.67、1.33 得 `a=1.00`。取護甲階段前 `B=100`、有效背刺、其他撕裂項中性且無目標撕裂增益，`o=0.25`。
- **代入**：Tier IV `r=1.00`；`a≥1`，因此 `M=a+r×o=1.00+1.00×0.25=1.25`。
- **結果**：無本祝福時此階段為 `100×1.00=100`；加上本項後為 `100×1.25=125`，此階段相對增加 25%。
- **玩家意義**：這一段是後續刀刃 profile 的實際攻擊，而不是按特殊鍵時的拳擊；此 +25% 只描述明示條件下的護甲／撕裂中間階段，並非整體最終 HP 傷害保證。
- **來源**：Mk III 後續動作 `combatknife_p1_m1.lua` 1006–1073（range SHA-256 `8359267beaa0eb7cb451ed673657735faae2cb01e7ac97a0b35fb0171a4a1122`）；`medium_combat_knife_ninja_fencer` profile `combat_knife_damage_profile_templates.lua` 231–289（`ca3421543ecadcaf94513ec5c94a1570bd55f5902a71a258af892bfc4662d8d7`）；`lerp_1` 端點 `damage_profile_settings.lua` 52–55（`c0b1337185ddfd25cff60ee7044e6b29099e3f65b078c12c5f0aaf7993fa82f4`）；線性插值 `damage_profile.lua` 379–384（`1fd02fd87bae02be6e067797e360c1959a912224154fa9ccb681b679916b7c02`）；`armor_types.resistant` 超額撕裂係數 `armor_settings.lua` 8–19（range SHA-256 `210f584a6f1e783afbf7b3a8ad6200269f110c2ef206921dae923bd78abcea76`）。

## 適用武器

| 武器 | 適用型號 | 等級 | 效果差異 |
|---|---|---|---|
| [戰刃](../../weapons/melee/戰刃/README.md) | 戰刃 卡塔昌 Mk III、戰刃 卡塔昌 Mk VI | I–IV | 戰刃 卡塔昌 Mk III／Mk VI：只有符合近戰有效背刺幾何條件且持用此武器時，套用 I–IV 級 +70%／+80%／+90%／+100% 背刺撕裂加算。特殊鍵首拳是 punch-damage sweep；後續 heavy jab 是另一個 knife-profile sweep，兩段各自可判定。純推擊不符合。 |
| [短刀](../../weapons/melee/短刀/README.md) | 短刀 臨時拼湊 型號1、短刀 臨時拼湊 型號3 | I–IV | 短刀 臨時拼湊 型號1／型號3：只有符合近戰有效背刺幾何條件且持用此武器時，套用 I–IV 級 +70%／+80%／+90%／+100% 背刺撕裂加算。純推擊不符合；特殊投擲是遠程攻擊，不符合近戰背刺條件。 |

[逐型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)｜[返回目錄](../../README.md)
