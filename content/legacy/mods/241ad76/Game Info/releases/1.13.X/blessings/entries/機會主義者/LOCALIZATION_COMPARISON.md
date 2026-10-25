# 機會主義者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_armor_penetration_against_staggered`／hash`738f6c19`；描述鍵`loc_trait_bespoke_melee_rending_vs_staggered_desc`／hash`a93676c3`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Opportunist／機會主義者。

- 文件名稱：機會主義者(Opportunist)。

- 英文模板：{rending:%s} Melee Rending vs Staggered Enemies.

- 繁中模板：對抗踉蹌的敵人時，造成{rending:%s}近戰撕裂。

- **靜態重建**：I–IV將rending依trait覆寫與prefix+替換成+10%／+15%／+20%／+25%；中英文字保留原近戰與踉蹌規則；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| I–IV數值 | {rending:%s} Melee Rending／近戰撕裂 | [持用條件近戰撕裂Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L999-L1008) | 一致 | 實際9trait覆寫10/15/20/25%；format_values prefix+，原文靜態重建列各級。 |
| 踉蹌條件 | Staggered Enemies／踉蹌的敵人 | [傷害結算前讀踉蹌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L296-L308)、[踉蹌與視為踉蹌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L64) | 條件更精確 | num_triggered_staggers>0或count_as_staggered；當擊造成的後置HitReaction不回溯。 |
| 近戰 | Melee／近戰 | [近戰撕裂加算與封頂](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) | 一致 | 只有attack_type=melee讀本欄位，不按武器外觀猜爆炸或電弧。 |
| 效果比例 | 只列Rending數值 | [撕裂與裝甲係數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L65-L109)、[四種傷害分類撕裂係數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24) | 文件未涵蓋 | 裝甲倍率、溢出25%效率、分類及後續結算決定實際傷害，不是固定傷害%。 |
| 疊加/持續/切出 | 未列 | [持用條件近戰撕裂Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L999-L1008)、[近戰撕裂加算與封頂](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) | 文件未涵蓋 | 本slot持用，無proc/CD/層數倒數；符合來源加算上限100%。 |
