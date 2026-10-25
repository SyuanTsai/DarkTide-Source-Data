# 正中眉心(Between the Eyes)：電能步槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_galvanic_rifle_p1_suppression_negation_on_weakspot`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L9-L38)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L11)。
- 適用型號：電能步槍 布蘭克斯 Mk CV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：電能步槍 布蘭克斯 Mk CV。
- 唯一特殊動作 `action_bash` 是 `kind="sweep"`，使用 `galvanic_rifle_weapon_special_push` 檔案；檔案內 `is_push=true`，但實際 `ActionSweep` 仍送出 `attack_type=melee` 與碰撞部位。掃擊命中弱點並通過 profile 的 `on_hit` 閘門時可觸發；一般槍托命中不能一概當成弱點。手電筒切換不產生攻擊事件，沒有另外一個獨立純推擊動作。
- 完整共通條件與計算見 [玩家說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
