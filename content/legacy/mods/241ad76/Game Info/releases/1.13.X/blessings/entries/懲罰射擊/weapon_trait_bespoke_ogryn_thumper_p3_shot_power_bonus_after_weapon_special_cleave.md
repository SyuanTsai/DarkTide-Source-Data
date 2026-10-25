# 懲罰射擊(Punishing Fire)：惡棍槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_thumper_p3_shot_power_bonus_after_weapon_special_cleave`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L385-L446)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua#L45-L61)。
- 適用型號：惡棍槍 洛倫茲 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **實際型號**：惡棍槍 洛倫茲 Mk VII（Thugshot Lorenz Mk VII），inventory weapon_id `ogryn_thumper_p3`、mark `ogryn_thumper_p1_m3`；weapon_id 與 mark 字串不同，正式型號依 metadata localization 組合。
- P3 一般射擊及瞄準射擊使用命中掃描；特殊 Bash 由 `action_bash` 近戰掃擊提供觸發事件。
- 數值使用兩型號共通的 +6／+9／+12／+15% 遠程力量修正；一般射擊可消費此效果。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
