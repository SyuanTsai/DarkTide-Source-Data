# 幽靈：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- **期限**：合格事件時間 t₀、等級時間 D；active ⇔ t < t₀ + D。I–IV 的 D 為 0.6／0.8／1.0／1.2 秒。
- **再次觸發**：active_start_time=t_new；新期限=t_new+D。不增加層數，也不是將剩餘時間再加 D。
- **切換**：keyword=active 且持用對應武器。切出不改 t₀；期限內切回剩餘時間=max(0,t₀+D−t)。
- **防禦判定**：可閃避的攻擊進入玩家 ranged Dodge 判定時，此 keyword 令其被算作閃避；undodgeable HitScan 略過該判定。這是閃避狀態，不是傷害乘數。
- **計數單位**：每筆合格 on_hit，不固定每發一次。Trait 不篩 target_index、attack_type 或 weapon_special；Attack 的 should_proc／skip_on_hit_proc 及呼叫端去重仍有效。
- **化學爆炸**：按自己的 hit actor／hit zone 計算 hit_weakspot，傳入同一武器 item。實際 explosion_1 profile 沒有跳過 on_hit 的旗標；命中是否為弱點仍按該筆 Attack 判定。
- **毒素與保證弱點**：毒素 tick 的 attacking_item 取最初 source_item；針彈建立時未傳它，既有堆疊也不改寫。guaranteed_weakspot_on_hit 可令弱點結果為 true，仍不能令 nil 或 grenade item 匹配幽靈的針彈 item。

- 五種武器變體共用相同 I–IV 時間。持用中的對應武器產生弱點 on_hit 並通過 item-name 比對後，效果啟動；再度合格命中重設時間，不疊層。
- 生效時加入遠程閃避 keyword；只有實際呼叫玩家 ranged Dodge 判定且不屬 undodgeable 的攻擊可被算作閃避。
- Trait 定義未額外要求暴擊、擊殺、正傷害、weapon-special flag 或首個目標。Attack 共通事件條件及呼叫端事件去重仍適用。
- 切出時 keyword 條件失效，但 timer 繼續倒數；期限前切回可恢復剩餘時間。
