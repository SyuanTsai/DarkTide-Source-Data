# 快速裝彈(Speedload)：針彈手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_needlepistol_p1_reload_speed_on_slide`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L144-L207)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L35-L64)。
- 適用型號：針彈手槍 布蘭克斯 MkVI、針彈手槍 布蘭克斯 MKII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際適用型號：針彈手槍 布蘭克斯 MkVI、針彈手槍 布蘭克斯 MKII；restriction `needlepistol_p1`，同一 trait `weapon_trait_bespoke_needlepistol_p1_reload_speed_on_slide`。
- I–IV 每有效層依序 +7%／+8%／+9%／+10% reload_speed；每次合格事件刷新 3 秒 窗，最多5個有效層。
- 實際讀取 reload_speed 的裝填動作：needlepistol_p1_m1：action_reload(reload_state, 3s)；needlepistol_p1_m2：action_reload(reload_state, 3s)。特殊動作：Mk VI/Mk II 的 `action_cycle_chem` 是化學彈切換，不列入裝填速度消費。
- [完整說明](README.md)。
- 毒素死亡例外：遠程命中存活目標先標記；毒素關鍵字消失後不會立即清除標記；後續更新確認其最近記錄已超過一個固定影格的寬限後，才移除標記。標記仍在時，毒素死亡事件位置距事件攻擊者≤12.5公尺即可提出加層請求，攻擊者可不同於持有者；處理者仍須持用副手，死亡檢查不重查attacking_item或當下毒素關鍵字。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
