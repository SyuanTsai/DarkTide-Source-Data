# 接連不斷(Cavalcade)：重伐木槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_heavystubber_p2_stacking_crit_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L984-L1033)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L76-L83)。
- 適用型號：重伐木槍 克魯克 Mk IIa、重伐木槍 戈爾貢努姆 Mk IIIa、重伐木槍 阿克利斯 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：重伐木槍 克魯克 Mk IIa、重伐木槍 戈爾貢努姆 Mk IIIa、重伐木槍 阿克利斯 Mk II（ogryn_heavystubber_p2_m1、ogryn_heavystubber_p2_m2、ogryn_heavystubber_p2_m3）。共通規則見[玩家說明](README.md)、[來源與公式](SOURCE_INDEX.md#執行與計算)、[等級數值](TIER_VALUES.md)。
- M1/M2/M3腰射／瞄準為 shoot_hit_scan；特殊鍵切換手電筒，沒有攻擊，不會擲本項爆擊。停火清除時間：ogryn_heavystubber_p2_m1站立靜止腰射1.5s、移動腰射0.25s、瞄準0.3s；ogryn_heavystubber_p2_m2站立靜止腰射1.5s、移動腰射0.25s、瞄準0.6s；ogryn_heavystubber_p2_m3站立靜止腰射1.5s、移動腰射0.25s、瞄準1.0s。該時間由目前spread／移動狀態選擇，不是祝福TTL。純推擊本身不做爆擊判定；若另有獨立追擊攻擊，依該攻擊自身判定。切槽令持用條件暫停本項stat，但不立即清除玩家共用 N；卸下武器才移除 on_equip trait buff。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
