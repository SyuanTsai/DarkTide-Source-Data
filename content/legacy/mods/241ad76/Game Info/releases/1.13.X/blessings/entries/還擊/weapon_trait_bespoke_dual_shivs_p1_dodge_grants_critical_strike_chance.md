# 還擊(Riposte)：短刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_dual_shivs_p1_dodge_grants_critical_strike_chance`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L244-L293)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L16)。
- 適用型號：短刀 臨時拼湊 型號1、短刀 臨時拼湊 型號3。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **本變體數值**：沿用一般6秒數值組，詳見[集中等級表](TIER_VALUES.md)。

- **特殊投擲**：weapon_throw繼承ActionSpawnProjectile；起始判定爆擊並保存投射物快照，詳見共通來源。

- **投刀毒素**：兩型號均接入投刀毒素Buff；合格毒素施加的層數為4＋爆擊時2＋弱點命中時2。後續毒傷tick以Buff攻擊結算，未傳爆擊旗標，預設false。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
