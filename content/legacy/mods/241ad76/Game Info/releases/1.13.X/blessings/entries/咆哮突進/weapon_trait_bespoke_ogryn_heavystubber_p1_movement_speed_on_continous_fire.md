# 咆哮突進(Roaring Advance)：雙鏈重型機槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_heavystubber_p1_movement_speed_on_continous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L160-L215)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua#L34-L40)。
- 適用型號：雙鏈重型機槍 克魯克 Mk V、雙鏈重型機槍 戈爾貢努姆 Mk IV、雙鏈重型機槍 阿克利斯 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：雙鏈重型機槍 克魯克 Mk V（ogryn_heavystubber_p1_m1）、戈爾貢努姆 Mk IV（m2）、阿克利斯 Mk VII（m3）。共用觸發與數值見[玩家說明](README.md)、[來源與公式](SOURCE_INDEX.md#執行與計算)與[等級數值](TIER_VALUES.md)。
- 三型號腰射與架槍射擊都登記射擊計數。Mk V、Mk IV 架槍清除門檻為 0.1 秒；Mk VII 架槍為 0.25 秒。腰射三者為 0.25 秒。特殊刺擊不增計數。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
