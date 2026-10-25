# 殺戮者(Slaughterer)：碾壓者實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_2h_p1_increase_power_on_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_2h_p1.lua#L417-L478)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_2h_p1_buff_templates.lua#L21-L22)。
- 適用型號：碾壓者 憤怒 Mk IVe、碾壓者 克魯克 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **型號**：碾壓者 憤怒 Mk IVe、碾壓者 克魯克 Mk VII。
- **動作差異**：啟動電擊特殊效果本身不造成命中；其後蓄能輕重擊及推擊後續斬擊仍是近戰揮掃，造成擊殺時可觸發。
- **強化爆炸**：直接揮擊屬近戰，擊殺可增加層數；另外產生的範圍爆炸屬爆炸攻擊，擊殺不能增加層數。當時已生效且仍持用本武器的既有威力層數可參與爆炸威力；不保證同次命中剛新增的層數已供爆炸使用。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
