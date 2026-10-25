# 連續發射(Blaze Away)：重伐木槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_heavystubber_p2_power_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L811-L858)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L16-L21)。
- 適用型號：重伐木槍 克魯克 Mk IIa、重伐木槍 戈爾貢努姆 Mk IIIa、重伐木槍 阿克利斯 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號與 Mark：重伐木槍 克魯克 Mk IIa（Heavy Stubber Krourk Mk IIa，`ogryn_heavystubber_p2_m1`）、重伐木槍 戈爾貢努姆 Mk IIIa（Heavy Stubber Gorgonum Mk IIIa，`ogryn_heavystubber_p2_m2`）、重伐木槍 阿克利斯 Mk II（Heavy Stubber Achlys Mk II，`ogryn_heavystubber_p2_m3`）.
- 每步 I–IV：5%、6%、7%、8%；彈匣門檻 10%。
- 特殊模式與效果：特殊鍵切換手電筒；不是攻擊，不增加射擊計數，也沒有特殊傷害設定檔可套用本項。
- 實際散佈清除時間（仍須停止射擊且動作允許清除）：ogryn_heavystubber_p2_m1：未瞄準 ogryn_heavystubber_p2_m1_spread_hip（站立 1.50 秒；移動 0.25 秒）；瞄準／架槍 ogryn_heavystubber_p2_m1_spread_aim（瞄準 0.30 秒）；ogryn_heavystubber_p2_m2：未瞄準 ogryn_heavystubber_p2_m2_spread_hip（站立 1.50 秒；移動 0.25 秒）；瞄準／架槍 ogryn_heavystubber_p2_spread_aim（瞄準 0.60 秒）；ogryn_heavystubber_p2_m3：未瞄準 ogryn_heavystubber_p2_m3_spread_hip（站立 1.50 秒；移動 0.25 秒）；瞄準／架槍 ogryn_heavystubber_p2_m3_spread_aim（瞄準 1.00 秒）。
- 共用持用條件與五步上限；[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
