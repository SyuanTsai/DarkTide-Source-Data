# 持續阻擊(Ceaseless Barrage)：槍托自動槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_autogun_p2_increased_suppression_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L314-L377)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p2_buff_templates.lua#L23-L29)。
- 適用型號：槍托自動槍 弗拉克斯 Mk II、槍托自動槍 格拉亞 Mk IV、槍托自動槍 阿格里皮娜 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **適用型號**：槍托自動槍弗拉克斯 Mk II、格拉亞 Mk IV、阿格里皮娜 Mk VIII。
- 三個型號的腰射與瞄準射擊皆為每發消耗1彈的命中掃描；計數按成功射擊準備後的一發遞增，不按命中數或彈丸數遞增。
- 三個型號腰射與瞄準射擊的停火清除門檻均為0.1秒；Mk II 的瞄準動作取用 Mk VIII（P2 M3）瞄準散布模板，但實際武器仍是 Mk II。
- 特殊動作是近戰槍托推擊，不增加射擊計數，也不走命中掃描後的壓制施加路徑；若目標在本次攻擊前已受壓制，通用傷害結算仍會檢查對受壓制目標的傷害加成。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
