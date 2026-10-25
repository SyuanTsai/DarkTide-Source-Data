# 反擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_attack_speed_on_perfect_block`／hash`26defa8a`；描述鍵`loc_attack_speed_on_block_desc`／hash`76b61381`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Counterattack／反擊。

- 英文模板：Gains {attack_speed:%s} Attack Speed for {duration:%s} seconds on Block.

- 繁中模板：格擋時獲得{attack_speed:%s}攻擊速度，持續{duration:%s}秒。

- **靜態重建**：I級格擋後增加6%攻速、持續6秒；IV級增加12%、持續6秒；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 觸發 | 描述鍵寫Block／格擋 | [on_block](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L939-L962) | 一致 | wrapper監聽一般格擋事件；不是要求完美格擋。 |
| 等級數值 | attack_speed格式參數讀取trait proc_stat_buffs | 各實作等級覆寫見[等級數值](TIER_VALUES.md) | 一致 | I–IV為6%／8%／10%／12%，不是wrapper預設1.5。 |
| 持續時間 | duration格式參數 | [active_duration覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L98-L104) | 一致 | trait皆覆寫6秒。 |
| 近戰範圍 | 中英只寫Attack Speed／攻擊速度 | [近戰欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L863) | 文件未涵蓋 | 實際加到近戰攻速欄位，不把它改寫為遠程射速。 |
| 連續格擋刷新 | 模板未列 | [起始時間重設](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) | 文件未涵蓋 | 只重設期限，不多加一份攻速。 |
| 切換武器 | 模板未列 | [持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300)、[切出](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) | 文件未涵蓋 | 切出不清除equip buff；期限持續流逝。 |
| 破防與遠程格擋 | 模板未細分格擋來源 | [破防事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L206-L249) | 文件未涵蓋 | 祝福未篩attack_type或block_broken；盾牌的遠程格擋同樣有效。 |
