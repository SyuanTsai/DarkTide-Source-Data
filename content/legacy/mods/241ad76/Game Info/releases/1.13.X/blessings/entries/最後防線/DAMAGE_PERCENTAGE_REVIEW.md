# 最後防線：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 C 為已套用攻擊 profile 的 block_cost、block_cost_multiplier 為本級倍率 b。中性其他修正時，最後送入耐力消耗的量為 C×b；block_broken 仍由 current_stamina≤該量且 block_cost>0 決定。b 依 I–IV 為 .85/.80/.75/.70，對應 −15/−20/−25/−30% 格擋消耗；示例採 C=1.00、current_stamina=.72。這是耐力成本比例，不是傷害減免；本項推擊參數 power_level=2×DEFAULT_POWER_LEVEL=1000 只是 PowerLevel 輸入。

- 四級 RAW formatter 直接讀 `cooldown_duration` 和 `stat_buffs.block_cost_multiplier`；I–IV 靜態值可精確代入英中同一描述模板。
- 實作把「格擋擊破」細化為一次入站 blocked event、正 block_cost 導致耐力耗盡、事件處理時來源 item held 及冷卻可用；RAW 沒寫這些限制或首次計時/特殊模式例外，分類為「文件未涵蓋」，沒有相反明文。
- 事件處理成功後待發推擊標記與實際更新消耗是兩個時點；RAW 沒說切槽是否取消、推擊取樣位置或真正卸下的移除效果，分類為「文件未涵蓋」。
- 玩家所見 block-cost 減幅是倍率換算；觸發需要實際耗盡耐力，因此減耗也可能令某次原本會破防的格擋不再觸發。
