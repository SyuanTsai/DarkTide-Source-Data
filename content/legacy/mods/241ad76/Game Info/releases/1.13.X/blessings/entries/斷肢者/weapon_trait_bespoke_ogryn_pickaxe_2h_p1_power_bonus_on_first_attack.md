# 斷肢者(Limbsplitter)：戴維爾戰鎬實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_pickaxe_2h_p1_power_bonus_on_first_attack`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_pickaxe_2h_p1.lua#L59-L121)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_pickaxe_2h_p1_buff_templates.lua#L16)。
- 適用型號：戴維爾戰鎬 布蘭克斯 Mk Ia、戴維爾戰鎬 博羅維安 Mk III、戴維爾戰鎬 卡索拉斯 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- [斷肢者完整說明](README.md)；此實作只適用下列實際綁定型號。
- 戴維爾戰鎬 布蘭克斯 Mk Ia（Delver's Pickaxe Branx Mk Ia）：輕擊；重擊；推擊後接續近戰攻擊；純推擊（不觸發）；特殊近戰命中。上述合格命中事件要重設等待，須符合來源武器、持用與 melee gate；加成是否供此次近戰傷害讀取仍依當前持用與快取。
- 戴維爾戰鎬 博羅維安 Mk III（Delver's Pickaxe Borovian Mk III）：輕擊；重擊；推擊後接續近戰攻擊；純推擊（不觸發）；特殊近戰命中。上述合格命中事件要重設等待，須符合來源武器、持用與 melee gate；加成是否供此次近戰傷害讀取仍依當前持用與快取。
- 戴維爾戰鎬 卡索拉斯 Mk II（Delver's Pickaxe Karsolas Mk II）：輕擊；重擊；推擊後接續近戰攻擊；純推擊（不觸發）；特殊近戰命中。上述合格命中事件要重設等待，須符合來源武器、持用與 melee gate；加成是否供此次近戰傷害讀取仍依當前持用與快取。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
