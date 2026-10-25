# 敏捷：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_dodge_count_reset_on_weakspot_hit`／hash`c9f41884`；描述鍵`loc_trait_bespoke_dodge_count_reset_on_weakspot_hit_and_weakspot_damage_desc`／hash`0c322518`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Agile／敏捷。

- 文件名稱：敏捷(Agile)。

- 適用武器：戰術斧、決鬥劍；描述鍵`loc_trait_bespoke_dodge_count_reset_on_weakspot_hit_and_weakspot_damage_desc`／hash`0c322518`。

- 英文模板：Refreshed Dodge Efficiency on Weak Spot Hit. {melee_weakspot_damage} Melee Weakspot Damage.

- 繁中模板：擊中目標弱點時刷新閃避效果。近戰弱點傷害{melee_weakspot_damage}。

- **靜態重建**：名稱 RAW `loc_trait_bespoke_dodge_count_reset_on_weakspot_hit`：英文 `Agile`、繁中 `敏捷`，hash `c9f41884`。描述 RAW `loc_trait_bespoke_dodge_count_reset_on_weakspot_hit_and_weakspot_damage_desc`：英文 `Refreshed Dodge Efficiency on Weak Spot Hit. {melee_weakspot_damage} Melee Weakspot Damage.`；繁中 `擊中目標弱點時刷新閃避效果。近戰弱點傷害{melee_weakspot_damage}。`；兩語 hash `0c322518`。兩個 locale 已與 Steam 25606770 / 1.13.1 `content/localization/items` 二進位資源逐項比對。

UI 由 `Items.trait_description` 轉給 `TraitValueParser`；formatter 透過 variant 的 `trait_override` 讀取 tier `conditional_stat_buffs[melee_weakspot_damage]`，percentage 乘 100、加 `%`，再加 `+` 前綴。兩個武器實作的 I–IV 都重建為 +2.5%／+5%／+7.5%／+10%，各級閃避次數重置均為0。各級重置計數的程式值也一併列出；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發方式與持用 | RAW: “Refreshed Dodge Efficiency on Weak Spot Hit.” | on_hit + held slot + matching attacking item + melee attack + weakspot hit; counter→0。 | 文件未涵蓋 | 需說明身體命中、純推擊、不同 attacking item 不會重置。 |
| 弱點傷害數值 | RAW: `{melee_weakspot_damage} Melee Weakspot Damage.` | I–IV +2.5/+5/+7.5/+10%；held conditional stat，只在 melee weakspot consumer 生效。 | 數值一致；文件未涵蓋作用部分 | 各武器formatter顯示自身覆寫數值；補述常駐持用與靈巧額外部分。 |
| 閃避效率實際作用 | RAW 使用 “Refreshed Dodge Efficiency”。 | 唯一寫入 consecutive_dodges=0；後續 dodge 依一般公式重算。 | 文件未涵蓋 | 不應說成清除 cooldown、當前位移，或保證固定額外距離。 |
| 特殊攻擊與推擊 | RAW 未區分模式。 | Axe P2 sweep、Sword P3 riposte sweep 弱點可觸發；parry/block、純 push 不符合。 | 文件未涵蓋 | 區分格擋與後續攻擊。 |
| 弱點爆擊傷害 | RAW 只列近戰弱點傷害 placeholder。 | crit/weakspot boosts 合併成同一 base_finesse_damage；本項作用於同一 F。 | 文件未涵蓋 | 不要重複計算兩份 F 或全命中倍率。 |
| 閃避途中命中 | RAW未區分途中更新。 | 只counter=0；distance_left不重建，速度更新重新讀counter，cooldown欄位分開。 | 文件未涵蓋 | 不能將只重置計數概括為目前閃避完全不受影響。 |
