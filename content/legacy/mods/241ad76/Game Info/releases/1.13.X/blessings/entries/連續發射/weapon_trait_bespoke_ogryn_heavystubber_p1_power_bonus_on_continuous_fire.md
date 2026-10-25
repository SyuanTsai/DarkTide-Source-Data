# 連續發射(Blaze Away)：雙鏈重型機槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_heavystubber_p1_power_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L48-L95)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua#L15-L20)。
- 適用型號：雙鏈重型機槍 克魯克 Mk V、雙鏈重型機槍 戈爾貢努姆 Mk IV、雙鏈重型機槍 阿克利斯 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號與 Mark：雙鏈重型機槍 克魯克 Mk V（Twin-Linked Heavy Stubber Krourk Mk V，`ogryn_heavystubber_p1_m1`）、雙鏈重型機槍 戈爾貢努姆 Mk IV（Twin-Linked Heavy Stubber Gorgonum Mk IV，`ogryn_heavystubber_p1_m2`）、雙鏈重型機槍 阿克利斯 Mk VII（Twin-Linked Heavy Stubber Achlys Mk VII，`ogryn_heavystubber_p1_m3`）.
- 每步 I–IV：5%、6%、7%、8%；彈匣門檻 10%。
- 特殊模式與效果：特殊鍵刺擊為近戰揮擊；不增加射擊計數，該傷害設定檔會讀取一般攻擊力量修正。
- 實際散佈清除時間（仍須停止射擊且動作允許清除）：ogryn_heavystubber_p1_m1：未瞄準 ogryn_heavystubber_spread_spraynpray_hip（站立／移動 0.25 秒）；瞄準／架槍 default_ogryn_heavystubber_braced（架槍 0.10 秒）；ogryn_heavystubber_p1_m2：未瞄準 ogryn_heavystubber_spread_spraynpray_hip_m2（站立／移動 0.25 秒）；瞄準／架槍 default_ogryn_heavystubber_braced_m2（架槍 0.10 秒）；ogryn_heavystubber_p1_m3：未瞄準 ogryn_heavystubber_spread_spraynpray_hip_m3（站立／移動 0.25 秒）；瞄準／架槍 ogryn_heavystubber_spread_spraynpray_braced_m3（架槍 0.25 秒）。
- 共用持用條件與五步上限；[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
