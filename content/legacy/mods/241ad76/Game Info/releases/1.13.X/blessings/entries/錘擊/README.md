# 錘擊(Hammerblow)

[祝福目錄](../../README.md)｜[來源與公式](SOURCE_INDEX.md)

<img src="https://github.com/user-attachments/assets/309e0a2e-5b01-4af4-bde2-cddcbd580233" width="72" height="72" alt="錘擊祝福圖示">

- **觸發方式**：本項父層接受合格 `on_hit` 事件，並要求命中事件的來源物品與持用條件通過；父層沒有 `attack_type` 門檻，也沒有正傷害量下限。普通／重擊掃擊、推擊後掃擊可依實際 profile 產生事件。純推擊也會對實際選中的內／外側 profile 呼叫 `Attack.execute`，並傳入原武器物品；本項九個實作的推擊 profile 都沒有 `skip_on_hit_proc`，所以符合來源物品／持用條件的推擊命中可以加層。推擊本身是 `attack_type=push`，不會讀本項近戰衝擊修正；推擊後的掃擊是另一個近戰攻擊事件，可能加層並使用近戰衝擊修正。
- **每層與上限**：I／II／III／IV 級每層分別提高近戰衝擊修正 19／21／23／25 個百分點；最多五個有效層，總增量分別為 95／105／115／125 個百分點。各級數值相同於九個實作。
- **持續與刷新**：每層持續 3.5 秒。新層會重設整組共用計時起點；到期時一併移除五個有效層。初始化的抵銷佔位 child 不算玩家有效層。
- **效果範圍**：本項只改變 `melee_impact_modifier`，進入近戰攻擊的衝擊／踉蹌計算；它不提高生命傷害、力量或順劈。推擊命中能建立層數，但推擊自身不受近戰衝擊修正。
- **特殊攻擊差異**：工兵鏟軍務部 Mk I 是直接上勾斬；Mk III／Mk VII 特殊輕／重掃擊後另有黏附命中，兩種 sticky profile 均沒有略過 `on_hit` 的設定，符合條件時可再加層。電擊錘阿格尼 Mk Ia／軍務部 Mk III 的直接上勾斬可送出命中事件；其延遲 `powermaul_weapon_special` sticky 設為略過 `on_hit`，不另加層，但 melee tick 在效果有效時仍可使用近戰衝擊快取。電弧錘的 shout／arc 與錘盾 Mk VI／Mk XI 的 shout，命中時可依同物品事件條件加層；它們不是 melee 攻擊，不使用近戰衝擊修正。錘盾特殊蓄力格擋本身不命中，放出時的 shout action 沒有指定 `attack_type`；Attack.execute 保留 nil 類型與原武器物品，符合 profile／事件條件時仍可加層。
- **首次生效與快取**：命中先使用當下快取結算，之後才處理 `on_hit` 並更新統計快取；新層不會回頭強化已完成或同次處理中的攻擊。
- **切換與卸下**：切換到其他武器時，3.5 秒計時仍走；持用條件會暫停本項修正，但來源層數可保留至到期，期限內切回可重新生效。真正卸下裝有本項的武器會移除父層及其子層。

## 計算與算例

- **工兵鏟 軍務部 Mk III（`combataxe_p3_m2`），I 級算例**：前提是其他近戰衝擊修正均為中性，三個符合來源物品／持用條件的推擊 `Attack.execute` 命中已各自送出並處理 `on_hit`，且快取已更新為三個有效層。
  - **代入**：`1 + 3 × 0.19 = 1.57`，本項增加 `3 × 19 = 57` 個百分點。
  - **結果與玩家意義**：後續 melee 掃擊的本項衝擊輸入為 1.57；此前的純推擊能建立這三層，但推擊本身的 `attack_type=push` 不使用這個近戰修正，且 1.57 不是最終踉蹌倍率。
- **碎骨者 克魯克 Mk IIa（`ogryn_hammer_2h_p1_m1`），IV 級算例**：前提是其他近戰衝擊修正均為中性，五個符合條件的近戰命中事件已處理且快取已更新至五個有效層。
  - **代入**：`1 + 5 × 0.25 = 2.25`，本項增加 `5 × 25 = 125` 個百分點。
  - **結果與玩家意義**：後續近戰攻擊將 2.25 作為本項衝擊修正輸入；目標與完整衝擊公式仍決定實際踉蹌，生命傷害和順劈不會因此直接提高。
- **刷新時序算例**：假設 I 級已有一層，合格的近戰命中在 `t=10.0` 完成結算並送出新事件。
  - **代入**：這一擊先讀舊快取；事件處理後新增一層並將共同期限重設為 `10.0 + 3.5 = 13.5` 秒。
  - **結果與玩家意義**：只有之後更新的快取能讀到新層；期限從新增層的事件時間重算。

## 適用武器

| 武器 | 適用型號 | 等級 | 效果差異 |
|---|---|---|---|
| [工兵鏟](../../weapons/melee/工兵鏟/README.md) | 工兵鏟 軍務部 Mk I、工兵鏟 軍務部 Mk III、工兵鏟 軍務部 Mk VII | I–IV | 符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。 |
| [「惡魔之爪」劍](../../weapons/melee/「惡魔之爪」劍/README.md) | 「惡魔之爪」劍 卡塔昌 Mk I、「惡魔之爪」劍 卡塔昌 Mk IV、「惡魔之爪」劍 卡塔昌 Mk VII | I–IV | 符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。 |
| [碎骨者](../../weapons/melee/碎骨者/README.md) | 碎骨者 克魯克 Mk IIa | I–IV | 符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。 |
| [碾壓者](../../weapons/melee/碾壓者/README.md) | 碾壓者 憤怒 Mk IVe、碾壓者 克魯克 Mk VII | I–IV | 符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。 |
| [電擊錘](../../weapons/melee/電擊錘/README.md) | 電擊錘 阿格尼 Mk Ia、電擊錘 軍務部 Mk III | I–IV | 符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。 |
| [法務官電擊鎚](../../weapons/melee/法務官電擊鎚/README.md) | 法務官電擊鎚 布蘭克斯 Mk III | I–IV | 符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。 |
| [電弧鎚](../../weapons/melee/電弧鎚/README.md) | 電弧鎚 布蘭克斯 Mk III | I–IV | 符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。 |
| [法務官電擊鎚和鎮壓護盾](../../weapons/melee/法務官電擊鎚和鎮壓護盾/README.md) | 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI、法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI | I–IV | 符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。 |
| [雷鎚](../../weapons/melee/雷鎚/README.md) | 雷鎚 十字星 Mk II、雷鎚 鐵盔 Mk IV | I–IV | 符合來源物品／持用與 profile 事件條件的命中可增加一個有效層；實際純推擊也可送 on_hit，但 push 本身不使用 melee_impact_modifier。 |

[逐型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)｜[返回目錄](../../README.md)
