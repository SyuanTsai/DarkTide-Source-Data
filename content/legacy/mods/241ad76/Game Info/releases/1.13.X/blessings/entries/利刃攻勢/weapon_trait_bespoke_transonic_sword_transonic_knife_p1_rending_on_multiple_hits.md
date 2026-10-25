# 利刃攻勢(Bladed Momentum)：穿音速雙刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_transonic_sword_transonic_knife_p1_rending_on_multiple_hits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_transonic_sword_transonic_knife_p1.lua#L388-L463)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua#L51-L52)。
- 適用型號：穿音速雙刀 布蘭克斯 Mk XI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：穿音速雙刀 布蘭克斯 Mk XI（Paired Transonic Blades Branx Mk XI）。
- 只有 transonic_sword_transonic_knife_p1_m1 綁定本項；每層值 I–IV 為 +4%、+5%、+6%、+7%，時間與有效層數按主頁表。
- 普通輕擊／重擊、特殊啟用與解除時的揮掃、特殊連段及推後追擊均有實際 ActionSweep melee 路徑；special toggle 本身不算命中，獨立 action_push 的攻擊類型為 push。
- 本 Mark 沒有投射物或遠程攻擊路徑。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
