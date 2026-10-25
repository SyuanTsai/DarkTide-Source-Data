# 恐怖阻擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

設 `K` 為觸發合格的擊殺事件，`w` 為本 trait 綁定武器物品。`K = died AND (attack_type=ranged OR damage_profile.count_as_ranged_attack OR attack_type=explosion) AND same_item(w) AND held_gate AND d²(hit_world_position, attacker_position_when_checked) ≤ 12.5² AND ProcBuff_not_active`。成功後：`suppression_event = area(center=attacker_position_when_proc_runs, radius=12m, falloff=false, value=15/20/25/30, instant_aggro=true)`。receiver 只在其自身設定允許時接收；在 6m 內具 cover extension 時另可能 release cover slot 3–8s；`is_suppressed` 取決於 `suppression_threshold ≤ min(current+value, max)`，並非傷害或固定控制秒數。`ProcBuff.active_duration=1.5s` 且 `cooldown_duration=0` 控制下一次本祝福觸發的時間；不是 area target 的 suppression timer。條件中的 12.5m close threshold、12m suppression area、RAW rarity formatter 5–8m 是三個不同觀察值。

- 英文靜態 range 與所有實際 tier 的 12m area radius 是明確數值差異；close-kill gate 12.5m 是另一個獨立值。
- 繁中「近戰擊殺」用語可能表示 melee 攻擊，但本項排除 melee/push，故正文採「近距離擊殺」並列用語勘誤。
- 其餘未列出的 attack type、距離、tier suppression 值、receiver、再觸發及掩體副效都依規則比較標為文件未涵蓋。
