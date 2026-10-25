# 快速裝彈(Speedload)：獵人霰彈槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_shotgun_p3_reload_speed_on_slide`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L478-L541)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p3_buff_templates.lua#L31-L33)。
- 適用型號：獵人霰彈槍 奧克塔蘭 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際適用型號：獵人霰彈槍 奧克塔蘭 Mk III；restriction `shotgun_p3`，同一 trait `weapon_trait_bespoke_shotgun_p3_reload_speed_on_slide`。
- I–IV 每有效層依序 +7%／+8%／+9%／+10% reload_speed；每次合格事件刷新 3 秒 窗，最多5個有效層。
- 實際讀取 reload_speed 的裝填動作：shotgun_p3_m1：action_start_reload(reload_shotgun, 0.95s,補1@0.62s),action_reload_loop(reload_shotgun, 0.6s,補1@0.25s)。特殊動作：Mk III 的特殊輸入是 `toggle_special` 切換模式，不列入裝填速度消費。
- [完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
