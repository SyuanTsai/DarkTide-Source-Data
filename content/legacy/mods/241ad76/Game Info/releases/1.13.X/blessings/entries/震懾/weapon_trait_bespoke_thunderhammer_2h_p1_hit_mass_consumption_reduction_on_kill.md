# 震懾(Shock & Awe)：雷鎚實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_thunderhammer_2h_p1_hit_mass_consumption_reduction_on_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua#L10-L66)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_thunderhammer_2h_p1_buff_templates.lua#L13-L26)。
- 適用型號：雷鎚 十字星 Mk II、雷鎚 鐵盔 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

實際型號：十字星 Mk II 雷霆之鎚、鐵盔 Mk IV 雷霆之鎚。兩 Mark 共用 trait variant、I–IV 覆寫與 ProcBuff wrapper；特殊啟動後 sweep 仍各自檢查 on_hit。圖示 weapon_trait_100。

[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
