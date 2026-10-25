# 雷鳴(Thunderous)：廁所鏟實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_club_p1_targets_receive_rending_debuff`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p1.lua#L90-L160)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p1_buff_templates.lua#L12)。
- 適用型號：廁所鏟 兇殘 Mk III、廁所鏟 兇殘 Mk XIX、廁所鏟 兇殘 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：廁所鏟 兇殘 Mk III、廁所鏟 兇殘 Mk XIX、廁所鏟 兇殘 Mk V。所有列出的 Mark 共用已核對的普通 on-hit wrapper 與 I–IV 疊層數。
- 三個實際型號含普通攻擊、上勾，以及依該型號接入的折疊特殊掃掠；直接命中沿用實際持用武器物品。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
