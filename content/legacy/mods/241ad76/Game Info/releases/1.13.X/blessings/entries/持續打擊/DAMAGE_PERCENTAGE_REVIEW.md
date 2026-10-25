# 持續打擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `n` 為目前有效層數（0–5），`p` 為所選等級每層提供的 `melee_power_level_modifier`，`M₀` 為除本祝福外、其他近戰威力修正合併後的因子，`P` 為經該武器 power-type curve 換算、套用威力修正池前的近戰威力。此項將近戰威力修正池提高 `n × p`，因此可寫成 `P′ = P × (M₀ + n × p)`；中性其他修正時 `M₀ = 1`。這個 stat 只在攻擊型別為 melee 時進入威力池，並非對最終生命傷害直接乘上固定百分比。

| 等級 | 每有效層近戰威力修正 p | 五層合計 | 中性其他修正時的威力因子 |
|---|---:|---:|---:|
| I | +4% | +20% | 1.20 倍 |
| II | +6% | +30% | 1.30 倍 |
| III | +8% | +40% | 1.40 倍 |
| IV | +10% | +50% | 1.50 倍 |

以範例一的 Atrox Mk II 為例：先有第一個命中設定目標，再以第二次同目標命中建立一層；II 級 `p=.06`。在 `P=100` 且 `M₀=1` 的正規化前提下，後續 melee 威力為 `100 × (1 + 1 × .06) = 106`，增加 6 個正規化威力單位（6 個百分點的威力修正），不是最終傷害固定增加 6%。

以範例二為例：外科醫師型號4的 IV 級五層 `p=.10`，在相同正規化前提下，延遲撕裂 melee 威力為 `100 × (1 + 5 × .10) = 150`。此數值只描述威力輸入；profile 的 power distribution、目標抗性與其他修正仍決定實際傷害。`skip_on_hit_proc` 只關閉該撕裂的命中觸發，不關閉其威力計算。

## 來源結論與適用範圍

四組 tier 覆寫與 wrapper 已逐一對照固定 SHA；I–IV 每層數值、兩秒 child duration、五個有效層及本體 formatter 一致。八個實際 weapon/Mark 綁定的攻擊表共盤點 110 個 Sweep、推擊、起手或模式切換簽章；每個 Sweep 與推擊均依各 Mark 實際 damage profile 記錄，非攻擊起手和切換則不當作命中。

`on_hit` 父增益檢查持用槽與來源 item，沒有攻擊型別限制；同目標 callback 管理追蹤與期限。新目標的第一個事件會清除舊層並重設追蹤目標，但不更新 `last_hit_time`；只有其後同一新目標的命中才增加層並刷新兩秒期限。`melee_power_level_modifier` 只有在 melee 攻擊消費，故不能將「可推進命中追蹤」等同「推擊本身受近戰威力加成」。

Powermaul P2 的特殊動作以直接 melee Sweep 命中，on-equip primer 的 stun 效果是另一條件路徑；本 binding 沒有特殊爆炸。Saw P1 Mk IV 的兩種延遲 rip profile 都略過 on-hit proc，仍可在層與持用條件有效時用目前 melee 威力計算傷害。

共用 parent/child 計時、offset 與持用生命週期 cache 僅在 own 四組 wrapper/base 與固定來源匹配後重用；不替代實際 eight-Mark inventory 綁定、profile 與動作路由來源。RAW 只明載命中同一敵人、威力、兩秒與五層；持用槽、實際特殊動作、純推擊及 Saw 延遲撕裂的觸發細節均屬「文件未涵蓋」，不當作 RAW 矛盾。
