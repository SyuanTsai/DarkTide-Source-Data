# 碎顱者(Skullcrusher)：電擊錘實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_p1_staggered_targets_receive_increased_damage_debuff`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua#L135-L195)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua#L23)。
- 適用型號：電擊錘 阿格尼 Mk Ia、電擊錘 軍務部 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：電擊錘 阿格尼 Mk Ia（powermaul_p1_m1）、電擊錘 軍務部 Mk III（powermaul_p1_m2）。
- 電擊錘 阿格尼 Mk Ia（powermaul_p1_m1）：特殊直接 axe_uppercut 是獨立揮擊；後續 powermaul_weapon_special 黏附 tick 設 skip_on_hit_proc=true，不會觸發本祝福。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。
- 電擊錘 軍務部 Mk III（powermaul_p1_m2）：特殊直接 axe_uppercut 是獨立揮擊；後續 powermaul_weapon_special 黏附 tick 設 skip_on_hit_proc=true，不會觸發本祝福。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。

[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
