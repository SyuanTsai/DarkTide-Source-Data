# 致命精準(Deadly Accurate)：機動自動槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_autogun_p3_crit_weakspot_finesse`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua#L318-L357)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p3_buff_templates.lua#L17)。
- 適用型號：機動自動槍 哥倫努 Mk III、機動自動槍 格拉亞 Mk VII、機動自動槍 阿格里皮娜 Mk IX。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

三型號的普通與瞄準射擊分別為三發連射、單發與四發連射；實際特殊動作接入普通／重型槍托攻擊。命中仍須同時爆擊、命中弱點並有靈巧額外傷害。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
