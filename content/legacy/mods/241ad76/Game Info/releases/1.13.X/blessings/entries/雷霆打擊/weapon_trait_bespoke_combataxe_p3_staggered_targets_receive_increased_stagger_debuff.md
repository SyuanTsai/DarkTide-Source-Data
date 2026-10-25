# 雷霆打擊(Thunderstrike)：工兵鏟實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combataxe_p3_staggered_targets_receive_increased_stagger_debuff`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua#L525-L587)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p3_buff_templates.lua#L46-L48)。
- 適用型號：工兵鏟 軍務部 Mk I、工兵鏟 軍務部 Mk III、工兵鏟 軍務部 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：工兵鏟 軍務部 Mk I、工兵鏟 軍務部 Mk III、工兵鏟 軍務部 Mk VII。
- 工兵鏟 Mk I 的特殊上刺使用獨立 axe_stab 近戰 profile；Mk III 與 Mk VII 的特殊輕／重鏟擊各用自己的 profile，命中後還會依 hit_stickyness_settings 產生 light_shovel_sticky／heavy_shovel_sticky 後續近戰 Attack。每次後續 Attack 都保留原武器物品，並各自檢查祝福的手持、物品、目標存活與事件處理時仍踉蹌等條件。
- 一般輕擊、重擊、推擊與各 Mark 的推擊後揮擊均以實際模板 profile 執行；共用觸發與 I–IV 數值見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
