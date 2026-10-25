# 揮拳出擊(Take a Swing)：工兵鏟實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combataxe_p3_increased_weakspot_damage_on_push`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua#L475-L524)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p3_buff_templates.lua#L30-L45)。
- 適用型號：工兵鏟 軍務部 Mk I、工兵鏟 軍務部 Mk III、工兵鏟 軍務部 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：工兵鏟 軍務部 Mk I、Mk III、Mk VII。三 Mark 共用此實作；Mk I 的 action signature 為 12 項，含 `action_special_uppercut`，Mk III／Mk VII 各 17 項，含 special-toggle 與特殊追擊 Sweep。三者 `action_push` 的半徑均為 2.5，內／外推擊 profile 為 `default_push`／`light_push`；Mk I 追擊為 `action_right_light_pushfollow`，Mk III／Mk VII 另可接 `action_left_down_light_special`。完整型號與執行差異見[型號說明](WEAPON_COMPATIBILITY.md)及[實際路徑](SOURCE_INDEX.md#執行與計算)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
