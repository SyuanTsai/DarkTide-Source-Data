# 輕裝(Stripped Down)

[祝福目錄](../../README.md)｜[來源與公式](SOURCE_INDEX.md)

<img src="https://github.com/user-attachments/assets/7b70f115-a9ff-4025-9533-f2626ca9266a" width="72" height="72" alt="輕裝祝福圖示">

- **觸發方式**：本祝福 trait 隨受支援武器裝備存在。該武器必須正在手持、角色正在衝刺，而且目前剩餘耐力比例 `current_fraction` 必須大於或等於所選等級門檻；三個條件同時成立才加入 ranged-dodge keyword。
- **等級門檻**：I 為 80%，II 為 70%，III 為 60%，IV 為 50% 的目前剩餘耐力比例。正好等於門檻也符合。
- **首次生效**：沒有擊中、擊殺或按下武器特殊鍵的觸發事件。條件首次成立後，玩家 buff fixed update 重算 keyword cache，之後讀取此 cache 的 ranged Dodge 判定才會採用效果；不保證條件變化的同一 frame 立即反映。
- **持續與停止**：這是條件式常駐狀態，沒有持續秒數、層數、刷新或冷卻。換手、停止衝刺或剩餘耐力低於門檻後，下一次條件/cache 更新會移除 keyword；條件恢復且仍手持該武器時，更新後重新加入，不留計時效果。
- **適用範圍**：它讓會呼叫 ranged `Dodge.is_dodging` 的攻擊判定把角色視為成功閃避。hitscan 路徑明確略過 `is_undodgeable` 攻擊；未使用 ranged Dodge 判定的攻擊也不因此獲得全域保護。這不是通用傷害免疫，也不影響 melee Dodge 規則。
- **武器動作**：普通射擊、蓄力/瞄準、推擊或近戰 bash、投射物/後續傷害、reload 與特殊/替代模式都不是祝福觸發條件。玩家當下是否仍在衝刺、手持武器與耐力比例才決定條件；來襲攻擊是否受益則看其實際是否走可閃避的 ranged Dodge 判定。
- **速度**：名稱中的 sprint speed 不代表加速；own wrapper 沒有 `sprint_movement_speed` modifier，本項不增加行走或衝刺速度。

## 計算與算例

- **前提**：裝備並手持 步兵自動槍 阿格里皮娜 Mk I (Infantry Autogun Agripinaa Mk I) 的 I 級 trait，最大耐力為 100；目前仍在衝刺。
- **代入**：剩餘 80 點，`current_fraction = 80 / 100 = 0.80`；I 級門檻為 0.80，判斷 `0.80 <= 0.80` 為真。
- **結果**：下一次玩家 buff fixed update 重建 keyword cache 後，走 ranged Dodge helper 的可閃避攻擊會把角色算作已閃避。
- **玩家意義**：正好剩 80% 時就生效；不是必須「消耗超過 80%」耐力。若降到 79%，I 級條件關閉，但 II 級 70% 門檻仍可成立。

- **前提**：針彈手槍 布蘭克斯 MkVI (Needle Pistol Branx MkVI) 的 IV 級 trait，仍手持並持續衝刺；最大耐力為 100。
- **代入**：剩餘 50 點時 `current_fraction = 0.50`，IV 門檻為 0.50，故條件為真；降至 49 點後 `0.49 < 0.50`。
- **結果**：50% 時 keyword 可在狀態更新後生效；49% 時移除，沒有倒數時間或殘留層。
- **玩家意義**：每級數字是剩餘耐力比例邊界，不是耐力消耗百分比，也不是移動速度或傷害百分比。

## 遊戲描述勘誤

- 繁中 RAW「衝刺耐力消耗超過{stamina:%s}」把被檢查的量說反：程式檢查目前剩餘耐力比例 `current_fraction` 是否達到門檻，不是已消耗耐力。
- 英文 RAW 使用 “over {stamina:%s} Stamina” 表達嚴格超過，但程式使用 `threshold <= current_fraction`，恰好等於門檻時也會成立。

## 適用武器

| 武器 | 適用型號 | 等級 | 效果差異 |
|---|---|---|---|
| [步兵自動槍](../../weapons/ranged/步兵自動槍/README.md) | 步兵自動槍 阿格里皮娜 Mk I、步兵自動槍 弗拉克斯 Mk V、步兵自動槍 哥倫努 Mk VIII | I–IV | 步兵自動槍族：持有該族相符武器、正在衝刺且目前剩餘耐力比例達到所選等級門檻時，條件式加入 ranged Dodge keyword。效果僅適用實際採用可閃避 ranged Dodge 判定的攻擊，不增加移動速度，也不是通用傷害免疫。涵蓋 Mark：autogun_p1_m1, autogun_p1_m2, autogun_p1_m3。 |
| [槍托自動槍](../../weapons/ranged/槍托自動槍/README.md) | 槍托自動槍 弗拉克斯 Mk II、槍托自動槍 格拉亞 Mk IV、槍托自動槍 阿格里皮娜 Mk VIII | I–IV | 槍托自動槍族：持有該族相符武器、正在衝刺且目前剩餘耐力比例達到所選等級門檻時，條件式加入 ranged Dodge keyword。效果僅適用實際採用可閃避 ranged Dodge 判定的攻擊，不增加移動速度，也不是通用傷害免疫。涵蓋 Mark：autogun_p2_m1, autogun_p2_m2, autogun_p2_m3。 |
| [偵察鐳射槍](../../weapons/ranged/偵察鐳射槍/README.md) | 偵察鐳射槍 奧克塔蘭 Mk VIc、偵察鐳射槍 奧克塔蘭 Mk XII、偵察鐳射槍 奧克塔蘭 Mk XIV | I–IV | 偵察鐳射槍族：持有該族相符武器、正在衝刺且目前剩餘耐力比例達到所選等級門檻時，條件式加入 ranged Dodge keyword。效果僅適用實際採用可閃避 ranged Dodge 判定的攻擊，不增加移動速度，也不是通用傷害免疫。涵蓋 Mark：lasgun_p3_m1, lasgun_p3_m2, lasgun_p3_m3。 |
| [針彈手槍](../../weapons/ranged/針彈手槍/README.md) | 針彈手槍 布蘭克斯 MkVI、針彈手槍 布蘭克斯 MKII | I–IV | 針彈手槍族：持有該族相符武器、正在衝刺且目前剩餘耐力比例達到所選等級門檻時，條件式加入 ranged Dodge keyword。效果僅適用實際採用可閃避 ranged Dodge 判定的攻擊，不增加移動速度，也不是通用傷害免疫。涵蓋 Mark：needlepistol_p1_m1, needlepistol_p1_m2。 |

[逐型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)｜[返回目錄](../../README.md)
