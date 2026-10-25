# 雷鳴(Thunderous)：惡霸棍棒實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_club_p2_targets_receive_rending_debuff`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L99-L169)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L12)。
- 適用型號：惡霸棍棒 「布倫特專用」 Mk I、惡霸棍棒 「布倫特得意之作」 Mk II、惡霸棍棒 「布倫特猛擊」 Mk IIIb。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：惡霸棍棒 「布倫特專用」 Mk I、惡霸棍棒 「布倫特得意之作」 Mk II、惡霸棍棒 「布倫特猛擊」 Mk IIIb。所有列出的 Mark 共用已核對的普通 on-hit wrapper 與 I–IV 疊層數。
- 三個實際型號含武器特攻掌擊掃掠與接入的拳擊／推擊後追擊；每次目標命中仍受一般物品與 Minion 條件限制。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
