# 精確打擊(Surgical)：矛頭爆矢槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_bolter_p1_crit_chance_based_on_aim_time`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L134-L191)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_bolter_p1_buff_templates.lua#L17)。
- 適用型號：矛頭爆矢槍 洛克 Mk IIb、矛頭爆矢槍 洛克 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 快速組；近戰推撞結束瞄準，重新瞄準再累積。

- **矛頭爆矢槍 洛克 Mk IIb**：[射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L223)、[射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L299)、[特殊近戰並退出瞄準](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L461)。

- **矛頭爆矢槍 洛克 Mk III**：[射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L223)、[射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L297)、[特殊近戰並退出瞄準](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L458)。

- 直接射擊可爆擊；另行生成的擊殺／停止及穿透停止爆炸固定為非爆擊。M1 基礎起爆距離為 5 公尺、M2 為 3 公尺，實際距離還會套用其他來源的倍率；完整條件見[爆炸適用限制來源](SOURCE_INDEX.md#爆炸適用限制來源)。

- 實際射擊接線：[bolter_p1_m1 action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L268)、[bolter_p1_m1 action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L344)、[bolter_p1_m2 action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L267)、[bolter_p1_m2 action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L342)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
