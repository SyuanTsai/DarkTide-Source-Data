# 開啟齊射(Opening Salvo)：機動自動槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_autogun_p3_power_bonus_on_first_shot`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua#L358-L399)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p3_buff_templates.lua#L18-L20)。
- 適用型號：機動自動槍 哥倫努 Mk III、機動自動槍 格拉亞 Mk VII、機動自動槍 阿格里皮娜 Mk IX。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 哥倫努MkIII、格拉亞MkVII、阿格里皮娜MkIX一般／瞄準射擊皆即時命中射擊；每次動作更新只執行一次射擊分支；bash為近戰；格拉亞另有手電筒切換。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
