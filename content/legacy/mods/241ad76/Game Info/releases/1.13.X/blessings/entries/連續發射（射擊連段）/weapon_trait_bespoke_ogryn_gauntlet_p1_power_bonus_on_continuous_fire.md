# 連續發射（射擊連段）(Blaze Away)：擲彈兵臂鎧實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_gauntlet_p1_power_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L10-L57)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_gauntlet_p1_buff_templates.lua#L16-L21)。
- 適用型號：擲彈兵臂鎧 布拉斯托姆 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：擲彈兵臂鎧 布拉斯托姆 Mk III（Grenadier Gauntlet Blastoom Mk III，ogryn_gauntlet_p1_m1）。
- I–IV 每步 5%/6%/7%/8%，最多 5 步。
- 普通榴彈投射動作開始時增加一個連段步；直接命中、引信與撞擊爆炸不另加步。普通近戰 sweep 動作開始增加一步；特殊 windup 保留連段，開始 melee_explosive 時重設連段。特殊揮擊為 melee Attack；符合實際掃掠中斷／彈藥條件時，玩家本體另發起直接爆炸，讀當下玩家 stat／快取，不是榴彈投射物快照，也不另加連段步。裝填不屬預設增加／保留類別。
- 榴彈發射時複製玩家力量快照；只有快照已含有效步時，後續爆炸才讀到修正。切出不改寫已生成投射物；快取未及更新的新步不保證進入快照。
- [完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
