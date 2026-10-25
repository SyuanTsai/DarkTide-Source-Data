# 連續發射(Blaze Away)：烈焰力場法杖實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcestaff_p2_power_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L382-L431)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L53-L60)。
- 適用型號：烈焰力場法杖 裂隙避難所 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號與 Mark：烈焰力場法杖 裂隙避難所 Mk II（Inferno Force Staff Rifthaven Mk II，`forcestaff_p2_m1`）.
- 每步 I–IV：5%、6%、7%、8%；該武器無彈藥且容量為 0，但最低一步規則仍將步距設為 1，詳見原文勘誤。
- 特殊模式與效果：普通與蓄力火焰每個合格射擊準備事件各記一次；蓄力消耗靈能而非彈藥。特殊鍵另接近戰揮擊／刺擊，不增加射擊計數，但近戰傷害設定檔會讀取一般攻擊力量修正；直接火焰傷害設定檔也讀取該修正。燃燒跳傷不另加射擊計數，但在武器仍持用且當前有效步保留於快取時，也可能讀取一般攻擊力量修正；切出或步數清零後更新快取，剩餘跳傷不再受本祝福加成，燃燒期限另行計算。
- 實際散佈清除時間（仍須停止射擊且動作允許清除）：forcestaff_p2_m1：未瞄準 default_force_staff_killshot（站立 0.80 秒；移動沿用 0.80 秒）；瞄準／架槍 default_force_staff_killshot（無獨立瞄準模板；普通／蓄力火焰共用 0.80 秒模板）。
- 共用持用條件與五步上限；[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
