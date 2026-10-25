# 處決(Execution)：爆彈手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_boltpistol_p1_stagger_bonus_damage`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L388-L427)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L18)。
- 適用型號：爆彈手槍 戈德溫–布蘭克斯 Mk IV、爆彈手槍 戈德溫–布蘭克斯 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 爆彈手槍 戈德溫–布蘭克斯 Mk IV、Mk VI：腰射／瞄準各自使用 hitscan profile，槍托為 damaging sweep；hit-mass kill/stop 與 penetration-stop 爆炸依設定觸發，保留 item 並逐目標判定。此兩份直接 hitscan profile 沒有 armor_explosion 配置，不能因 helper 支持護甲爆炸就推定本型號接入。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
