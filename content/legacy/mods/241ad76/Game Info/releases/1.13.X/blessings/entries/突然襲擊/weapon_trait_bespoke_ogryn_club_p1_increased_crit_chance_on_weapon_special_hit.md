# 突然襲擊(Sucker Punch)：廁所鏟實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_club_p1_increased_crit_chance_on_weapon_special_hit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p1.lua#L342-L397)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p1_buff_templates.lua#L17-L19)。
- 適用型號：廁所鏟 兇殘 Mk III、廁所鏟 兇殘 Mk XIX、廁所鏟 兇殘 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際接入廁所鏟 兇殘 Mk III、Mk XIX、Mk V。Mk III 以特殊上勾拳命中觸發；Mk XIX／Mk V 以折疊模式特殊輕擊或重擊命中觸發；折疊切換本身不觸發。三型號共用相同 trait、I–IV 數值與三秒窗口。 Mk XIX／Mk V 折疊特殊攻擊命中後解除折疊模式，下一次折疊攻擊前需重新切換。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
