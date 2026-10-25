# 咆哮突進(Roaring Advance)：槍托自動槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_autogun_p2_movement_speed_on_continous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L378-L433)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p2_buff_templates.lua#L30-L36)。
- 適用型號：槍托自動槍 弗拉克斯 Mk II、槍托自動槍 格拉亞 Mk IV、槍托自動槍 阿格里皮娜 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：槍托自動槍 弗拉克斯 Mk II（autogun_p2_m1）、槍托自動槍 格拉亞 Mk IV（autogun_p2_m2）、槍托自動槍 阿格里皮娜 Mk VIII（autogun_p2_m3）。共用觸發與數值見[玩家說明](README.md)、[來源與公式](SOURCE_INDEX.md#執行與計算)與[等級數值](TIER_VALUES.md)。
- 三型號腰射與瞄準射擊都登記射擊計數。弗拉克斯 Mk II 的 alternate-fire 實際選用阿格里皮娜 Mk VIII ADS 擴散模板（清除門檻 0.1 秒；Mk II 自己定義的 0.25 秒 ADS 表未被選用）；格拉亞與阿格里皮娜各用自身 ADS 模板（0.1 秒）。推擊本身不增計數。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
