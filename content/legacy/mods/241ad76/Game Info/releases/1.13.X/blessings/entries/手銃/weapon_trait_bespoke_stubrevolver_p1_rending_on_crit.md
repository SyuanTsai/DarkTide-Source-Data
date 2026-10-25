# 手銃(Hand-Cannon)：快拔左輪手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_stubrevolver_p1_rending_on_crit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua#L481-L522)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_stubrevolver_p1_buff_templates.lua#L26-L28)。
- 適用型號：快拔左輪手槍 紮羅娜 Mk IIa、快拔左輪手槍 阿格里皮娜 Mk XIV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際綁定：快拔左輪手槍 紮羅娜 Mk IIa（`stubrevolver_p1_m1`）與快拔左輪手槍 阿格里皮娜 Mk XIV（`stubrevolver_p1_m2`）。兩型號共用同一 bespoke trait/wrapper，I–IV 的 own tier 同為 +30%、+40%、+50%、+60%。
- Mk IIa 腰射與瞄準射擊都使用 `stub_revolver_p1_m1` 命中掃描；Mk XIV 兩模式使用其各自命中掃描設定，傷害 profile 都連到 Mk XIV 的 profile。兩型號都只有直接命中，以及 special pistol-whip 與可接續 follow-up 的近戰 Sweep；這些動作各自走一般暴擊判定。
- 以算例固定的 t=0.5 插值，Mk XIV 遠距裝甲的非暴擊基礎攻擊修正為 0.6；暴擊另加 profile 修正 0.15，故該例 A=0.75。左輪沒有 Phosphor 的背爆、燃燒或原生遠程撕裂 debuff。

[共通執行與計算](SOURCE_INDEX.md#執行與計算)｜[實際型號](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[算例](DAMAGE_PERCENTAGE_REVIEW.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
