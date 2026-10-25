# 揮拳出擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `p` 為本祝福該級的 weakspot_damage 增量，`M₀` 為沒有本祝福時、已合併其他弱點與 finesse 修正的係數，`F₀` 為該 profile 的基礎弱點 finesse 傷害分量；在同一目標／profile 前提下，弱點 finesse 分量為 `F = F₀ × (M₀ + p)`。當其他修正皆中性時 `M₀=1`，故本祝福單獨增加 `F₀ × p`。總攻擊傷害仍包含非 finesse 部分及目標／profile 修正，不能把 `p` 當作總傷害百分比。

| 等級 | p：弱點傷害 stat 增量 | 中性其他修正時弱點 finesse 係數 |
|---|---:|---:|
| I | +45% | 1.45× |
| II | +50% | 1.50× |
| III | +55% | 1.55× |
| IV | +60% | 1.60× |

例：撬棍 科技教士 型號6 的 `light_crowbar_tank` 是實際推擊追擊 profile；若將此 profile 對所選弱點目標的未加本祝福基礎 finesse 部分正規化為 100、且 `M₀=1`，IV 級算得 `100×(1+0.60)=160`。這只隔離本 stat 的弱點 finesse 分量；該 profile 的攻擊 power、護甲係數、其它修正及總生命值傷害需另按實際目標計算。

固定來源為 Darktide-Source-Code Release1.13.1、commit `7e662fcda16219d775b84af50322be2e9cd9d62e`。本包逐核三個 tier／formatter 與 ProcBuff wrapper、五個 UI Mark binding、全部 98 個實際 action signatures，以及 push 輸入、推擊目標挑選／計數、event payload、held stat gate、weakspot damage consumer、裝備移除與數值 formatter。Action matrix 也納入 Crowbar 的 generated BASE_ACTIONS aliases；definition、最終有效 action entry、Mark 可達路由分開記錄。原始碼全檔 SHA 採固定 Git raw bytes；上游 action audit 的 BOM-stripped whole-file SHA 保留為 provenance，細節見 source-hash-reconciliation receipt。

本項唯一觸發是 `on_push_finish` 且 `num_hit_units > 0`，不是一次推擊中的每次 per-target push hit；其效應則是可在持用條件成立時被後續任何 `hit_weakspot` damage path 消費的通用 weakspot stat。近戰各 Mark 的普通／蓄力／特殊 Sweep、推擊後追擊和 toggle 以自身實際 action kind／profile 分類；沒有在 98 個 bound action entries 找到 projectile 或 throw。與本項匹配的 ProcBuff、held-slot、on_equip 生命周期及 formatter common-cache 條件列於 evidence；不從名稱或 Mark suffix 推論。
