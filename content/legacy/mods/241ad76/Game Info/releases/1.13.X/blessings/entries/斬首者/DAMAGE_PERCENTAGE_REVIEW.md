# 斬首者：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `n` 為目前有效子層數（0–5），`p` 為該武器與 tier 的每層 `melee_finesse_modifier_bonus`，`F₀` 為該次近戰攻擊中未加入本祝福的靈巧傷害部分。只計本祝福時，該部分可表示為 `F = F₀ × (1 + n × p)`。這個乘數作用於靈巧傷害部分，不是對總攻擊傷害、最終生命傷害或護甲 Rending 直接乘上同一百分比。

| 武器實作 | I 每層 | II 每層 | III 每層 | IV 每層 | 五層上限（I／II／III／IV） |
|---|---:|---:|---:|---:|---:|
| 戰鬥斧 P1、骨鋸 P1 | 14% | 16% | 18% | 20% | 70%／80%／90%／100% |
| 動力彎刀 P2、機械神教動力劍 P3 | 10% | 12% | 14% | 16% | 50%／60%／70%／80% |

**範例一代入**：戰鬥斧拉沙德 Mk III 的 `default_light_axe` profile；五次符合 `one_hit_kill` 的來源武器擊殺已建立五層且屬性快取已更新，其後攻擊確有靈巧傷害部分，取 `F₀=100`、IV 級 `p=.20`，其他靈巧修正中性。`F=100 × (1 + 5 × .20)=200`；靈巧部分增加 100 單位，總命中結果不等於 200。

**範例二代入**：動力彎刀阿里丁 Mk I 的 `light_sword_p2` profile；一次符合 `one_hit_kill` 的來源武器擊殺已建立一層且屬性快取已更新，其後攻擊確有靈巧傷害部分，取 `F₀=100`、I 級單層 `p=.10`。`F=100 × (1 + 1 × .10)=110`；這是該次攻擊中間靈巧部分增加 10 單位，不是最終生命傷害固定加 10%。

四個 actual trait ID、各自完整 I–IV own tier/wrapper 與七個 Mark 綁定均按固定 SHA 逐項核對。戰鬥斧與骨鋸為每層 14/16/18/20%，兩種動力劍為每層 10/12/14/16%；所有四份 parent/child 模板都是 literal own implementation，沒有以名稱或 suffix 推定同值。Formatter 有百分比與正號，時間五秒，五個有效層來自 child offset -1 的實際層數計算。

父層實際條件是來源 item、持用槽及 `on_kill` 中的 `one_hit_kill` 旗標。旗標要求目標死亡、`damage + permanent_damage >= max_health`，且受擊前 `current_health_damage <= max_health * 0.2`。擊殺攻擊先按舊屬性快取結算；事件處理及快取更新後，新層才供後續攻擊使用。RAW 提到 One-Shot，但未寫出程式門檻；對詳細門檻與物品／持用限制列為「文件未涵蓋」，不視為矛盾。

動作掃描覆蓋 7 個綁定 Mark 的 134 個 action entries，並以逐動作 source ranges 固定 profile 與用途。所有普通、蓄力後實際掃掠、推後連擊、Power Sword 啟動型掃掠及 Saw 黏附初擊都按真正 on-kill 事件條件判斷；純推擊無生命傷害；模式切換、起手、格擋、wield 不自行觸發。Saw 延遲 rip 只跳過 on_hit，沒有據此宣稱獨立 on_kill 必然被抑制。

`melee_finesse_modifier_bonus` 只改變近戰靈巧傷害部分，且 Combat Axe trait 名稱中的 `rending` 不代表 armor Rending。算例以實際 Mark action/profile 為前提，將後續攻擊的靈巧傷害部分正規化，並明確分開層數代入、結果與最終傷害限制。共享 ParentProc 機制僅在四種實際 wrapper 同 class、同子層 offset、持用條件及期限行為核對一致後重用。
