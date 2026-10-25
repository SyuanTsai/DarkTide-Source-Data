# 雷霆打擊(Thunderstrike)：動力錘實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_powermaul_p1_staggered_targets_receive_increased_stagger_debuff`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_p1.lua#L141-L201)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_p1_buff_templates.lua#L11)。
- 適用型號：動力錘 阿克利斯 Mk I。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：動力錘 阿克利斯 Mk I。
- 阿克利斯 Mk I 的啟動近戰揮擊使用 powered profile；啟動命中另可能產生獨立爆炸 Attack，爆炸命中也須各自通過事件與目標檢查。
- 一般輕擊、重擊、推擊與各 Mark 的推擊後揮擊均以實際模板 profile 執行；共用觸發與 I–IV 數值見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
