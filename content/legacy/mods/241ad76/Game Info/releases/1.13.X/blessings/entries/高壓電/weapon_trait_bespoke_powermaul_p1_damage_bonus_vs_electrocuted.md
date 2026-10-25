# 高壓電(High Voltage)：電擊錘實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_p1_damage_bonus_vs_electrocuted`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua#L575-L616)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua#L103-L111)。
- 適用型號：電擊錘 阿格尼 Mk Ia、電擊錘 軍務部 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 電擊錘 P1 M1 阿格尼 Mk Ia、M2 軍務部 Mk III。兩型號充能黏附特攻都設定五個傷害實例；每個實例在 Attack.execute 之後才加入 power_maul_sticky_tick。首次實例不吃自己稍後附加的狀態；同一個 sticky 更新迴圈裡後續實例不保證已讀到新狀態，因目標 keyword 表由後續 MinionBuffExtension.update 重建。該表更新後仍持續的後續命中與 interval tick 可受益。一般 power_maul_shock_hit 只加 shock_effect，不等於 electrocuted。純推擊 attack=0；追擊斬擊另按當下狀態判定。 黏附電擊最多五層，共同期限 .7 秒×層數，最多 3.5 秒；新增及滿層重施都刷新共同起算時間，並非五倍祝福增傷。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
