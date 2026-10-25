# 恐怖阻擊(Terrifying Barrage)：雙管霰彈槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_shotgun_p2_suppression_on_close_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L167-L218)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p2_buff_templates.lua#L21)。
- 適用型號：雙管霰彈槍 十字星 Mk XI、雙管霰彈槍 克魯克 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：雙管霰彈槍 十字星 Mk XI、雙管霰彈槍 克魯克 Mk IV。I–IV 等級、近距離擊殺條件與效果相同。
- 各型號 hip／zoom 霰彈以 ranged 結算；特殊 bash 是近戰 sweep。
- 完整觸發條件、距離、效果及例外見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
