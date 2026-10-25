# 快速裝彈(Speedload)：快拔左輪手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_stubrevolver_p1_reload_speed_on_slide`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua#L74-L137)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_stubrevolver_p1_buff_templates.lua#L11-L13)。
- 適用型號：快拔左輪手槍 紮羅娜 Mk IIa、快拔左輪手槍 阿格里皮娜 Mk XIV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際適用型號：快拔左輪手槍 紮羅娜 Mk IIa、快拔左輪手槍 阿格里皮娜 Mk XIV；restriction `stubrevolver_p1`，同一 trait `weapon_trait_bespoke_stubrevolver_p1_reload_speed_on_slide`。
- I–IV 每有效層依序 +7%／+8%／+9%／+10% reload_speed；每次合格事件刷新 4 秒 窗，最多5個有效層。
- 實際讀取 reload_speed 的裝填動作：stubrevolver_p1_m1：action_start_reload(reload_shotgun, 1.45s,補0@0s),action_reload_loop(reload_shotgun, 0.52s,補1@0s)；stubrevolver_p1_m2：action_start_reload(reload_state, 3s)。
- [完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
