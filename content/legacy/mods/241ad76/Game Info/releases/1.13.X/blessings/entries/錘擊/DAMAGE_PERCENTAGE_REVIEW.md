# 錘擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `n` 為 0–5 個有效層，`t` 為每層 tier 修正（I／II／III／IV = 0.19／0.21／0.23／0.25）。在其他近戰衝擊修正中性的前提下，本項的 `melee_impact_modifier` 項為 `1 + n×t`；滿層分別是 1.95／2.05／2.15／2.25。它是衝擊結算輸入，不是最終踉蹌比例，更不是目標生命傷害或命中質量。

同鍵 tier 覆寫替代基礎 child 的 0.20 fallback，不是 `0.20+t`。固定更新中命中先以舊快取結算，`on_hit` 後才加入層並更新快取，所以新層從後續快取生效。

- 九個 own I–IV tier 均為 `.19/.21/.23/.25`，`child_duration=3.5`；各 wrapper 分別 clone 父／子模板並接回 own child。
- 父層 `allow_proc_while_active=true`；基礎 child `max_stacks=5`、`stack_offset=-1`，起始佔位不算有效層，五個有效層最多六個物理 child。
- `stacks_to_remove=5` 與一個最新 timer 令到期時清除所有有效層；每次加層刷新共用期限。
- 檢查九個 variant 的 17 個實際 `action_push`：內／外側 profile 分別由每個 Mark 設定，且本項實際選中的 profile 未設 `skip_on_hit_proc`；PushAttack 傳 `attack_type=push` 和 bound item 進 Attack.execute，於同物品／持用 gate 通過時可以送 on_hit 並加層。推擊不是近戰 impact consumer；近戰修正只對 melee attack_type 生效。
- 特殊差異：工兵鏟 Mk III／Mk VII sticky 追加 profile可再次送 on_hit；Powermaul P1 sticky profile 會略過 on_hit 但 melee tick 可使用有效快取；電弧錘 shout／arc及錘盾 shout可能加層但不受近戰衝擊修正。錘盾 shout action 未指定 attack_type，Attack.execute 的 named-argument default 保留 nil；不是推定為 melee。
- 詳細實際 Mark、push inner/outer profile、damage_type、special與source routing見 17-row coverage及來源索引；所有結論都限於 inventory-bound Mark。
