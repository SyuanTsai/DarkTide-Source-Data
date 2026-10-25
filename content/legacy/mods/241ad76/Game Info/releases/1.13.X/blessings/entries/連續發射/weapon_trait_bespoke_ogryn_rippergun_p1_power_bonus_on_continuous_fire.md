# 連續發射(Blaze Away)：撕裂槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_rippergun_p1_power_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L313-L360)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_rippergun_p1_buff_templates.lua#L29-L34)。
- 適用型號：撕裂槍 碎敵 Mk II、撕裂槍 碎敵 Mk V、撕裂槍 碎敵 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號與 Mark：撕裂槍 碎敵 Mk II（Ripper Gun Foe-Rend Mk II，`ogryn_rippergun_p1_m1`）、撕裂槍 碎敵 Mk V（Ripper Gun Foe-Rend Mk V，`ogryn_rippergun_p1_m2`）、撕裂槍 碎敵 Mk VI（Ripper Gun Foe-Rend Mk VI，`ogryn_rippergun_p1_m3`）.
- 每步 I–IV：5%、6%、7%、8%；使用專屬的 8% 步距計算；容量 12–24 發時最低門檻為 1 發。
- 特殊模式與效果：特殊鍵刺擊為近戰揮擊；不增加射擊計數，該傷害設定檔會讀取一般攻擊力量修正。
- 實際散佈清除時間（仍須停止射擊且動作允許清除）：ogryn_rippergun_p1_m1：未瞄準 default_rippergun_assault（站立／移動 0.75 秒）；瞄準／架槍 default_rippergun_braced（架槍 0.40 秒）；ogryn_rippergun_p1_m2：未瞄準 rippergun_p1_m2_assault（站立／移動 0.75 秒）；瞄準／架槍 rippergun_p1_m2_braced（架槍 0.40 秒）；ogryn_rippergun_p1_m3：未瞄準 rippergun_p1_m3_assault（站立／移動 0.75 秒）；瞄準／架槍 default_rippergun_braced（架槍 0.40 秒）。
- 共用持用條件與五步上限；[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
