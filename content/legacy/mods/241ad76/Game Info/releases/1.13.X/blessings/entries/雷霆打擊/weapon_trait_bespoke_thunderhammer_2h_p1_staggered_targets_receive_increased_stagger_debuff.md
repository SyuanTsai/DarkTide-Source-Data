# 雷霆打擊(Thunderstrike)：雷鎚實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_thunderhammer_2h_p1_staggered_targets_receive_increased_stagger_debuff`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua#L131-L191)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_thunderhammer_2h_p1_buff_templates.lua#L30)。
- 適用型號：雷鎚 十字星 Mk II、雷鎚 鐵盔 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：雷鎚 十字星 Mk II、雷鎚 鐵盔 Mk IV。
- 十字星 Mk II 與鐵盔 Mk IV 都選用 WeaponSpecialSelfDisorientation；按下特殊鍵時該類別的啟動回呼不做自我失衡，也不產生命中。兩 Mark 的特殊啟動揮擊之後，powered sweep 才是獨立近戰 Attack，實際命中仍按祝福事件與目標條件判定。只有特殊效果仍啟動、命中活著且非 hazard prop 的目標，並符合兩 Mark 的 only_deactive_on_abort 條件（須 abort_attack）時，類別才會對玩家造成失衡與中型推力並關閉效果；這不是第二次敵人命中。
- 一般輕擊、重擊、推擊與各 Mark 的推擊後揮擊均以實際模板 profile 執行；共用觸發與 I–IV 數值見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
