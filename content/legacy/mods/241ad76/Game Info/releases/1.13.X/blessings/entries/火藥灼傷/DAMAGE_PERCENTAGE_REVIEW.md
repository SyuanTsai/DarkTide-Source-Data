# 火藥灼傷：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 遠程近距離判定：`attack_type == ranged OR damage_profile.count_as_ranged_attack`，且 `hit_world_position` 與事件處理時的攻擊者位置距離平方 `≤ 12.5² = 156.25 m²`，並須是擊殺事件、物品相符及持用條件通過。
- 持續時間：`active = t < active_start_time + 2 秒`；每次合格事件允許在持續期間重觸發並重設開始時間，層數固定為一個效果窗口。
- I–IV 屬性向量 `(recoil_modifier, suppression_dealt, damage_vs_suppressed)`：`(-.28,.28,.14)`、`(-.32,.32,.16)`、`(-.36,.36,.18)`、`(-.40,.40,.20)`。
- 抑制輸入：`S_out = S × (1 + s)`，其中 `s` 為 `suppression_dealt`，再受其他 suppression 修正影響。
- 對已壓制目標的傷害池：`B × (1 + q + d)`，其中 `q` 為既有傷害加算池，`d` 為 `damage_vs_suppressed`；只在目標狀態取樣為 suppressed 時納入，後續護甲與其他傷害步驟仍會處理。
- 磷光背爆的實際邊界：profile `power_distribution.attack=0`、`impact=1` 且沒有目標覆寫；PowerLevel／最低傷害均為 0，故此項通用加算不會產生背爆生命值傷害。獨立燃燒 buff profile 的 attack power 為 20，可在每次 tick 符合壓制、持用與效果條件時使用通用加算；20 仍不是最終生命值傷害。
- 後坐力屬性示例：基準為 1 時，IV 的該屬性成為 `.60`；具體射擊軌跡還受其他後坐力設定與狀態影響。

證據範圍限固定 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e 下的四個 trait、四個 wrapper 與五個實際 inventory bindings。共用 ProcBuff timer、同 item、held slot 與更新條件沿用固定共通快取中與本模板匹配的規則。沒有由相似名稱外推未綁定武器；另有一個相同描述鍵的雙持 Stub Pistol trait metadata 候選，但不在本次 inventory name-key 綁定交集，排除於四實作五型號之外。例子是明列假設的控制計算，不是遊戲量測。 新核對的磷光背爆／燃燒差異只限 phosphor_pistol_p1_m1：背爆 attack power=0、impact=1且無目標覆寫，最低傷害為0；獨立燃燒 profile attack power=20，可在每 tick 滿足目標壓制與持用／效果條件時受益。
