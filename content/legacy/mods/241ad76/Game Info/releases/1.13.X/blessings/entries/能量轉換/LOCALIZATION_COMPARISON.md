# 能量轉換：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_slower_heat_buildup_on_perfect_block`／hash`c5793ef5`；描述鍵`loc_slower_heat_buildup_on_block_desc`／hash`106a8d31`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Energy Transfer／能量轉換。

- 英文模板：Reduces Heat buildup by {heat_reduction:%s} and increases Heat dissipation by {heat_dissipation:%s} for {time:%s} seconds on Block.

- 繁中模板：格擋時，熱能累積減少{heat_reduction:%s}，散熱增加{heat_dissipation:%s}，持續{time:%s}秒。

- **靜態重建**：I級格擋後熱能累積−16%、散熱+3%，持續5秒；IV級為−22%、+6%、5秒；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 觸發 | 本體描述鍵是loc_slower_heat_buildup_on_block_desc，英文on Block／中文格擋 | [一般與完美格擋分別派送](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L939-L962) | 一致 | 實際on_block，不因名稱鍵perfect誤寫要求完美格擋。 |
| 持續及等級 | format_values讀trait proc_stat_buffs與active_duration | [Proc持續時間覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104)、[持用條件與效果覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300) | 一致 | I–IV持續5秒，產熱-16/-18/-20/-22%，散熱+3/+4/+5/+6%。 |
| 產熱類型 | 模板只寫Heat buildup／熱能累積 | [持續產熱倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L82-L99)、[立即產熱使用不同欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L31-L61) | 文件未涵蓋 | 只有overheat_over_time_amount，開招immediate不讀它。 |
| 散熱啟動 | 模板只列散熱增加 | [自然散熱延遲及狀態](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L102-L150)、[自然散熱倍率與解除鎖定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L153-L171) | 文件未涵蓋 | idle/lockout且等待結束才自然散熱，不即時扣熱或省略等待。 |
| 倍率組合 | 模板未列其他倍率 | [倍率乘算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)、[產熱與散熱乘算類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L900-L913) | 文件未涵蓋 | 兩stat皆乘算，不能把減少或增加數字直接加總。 |
| 刷新及切換 | 模板未列 | [持用條件與效果覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300)、[格擋刷新起始時間](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) | 文件未涵蓋 | 再次格擋改起始時間，切出停止stat但5秒時鐘持續。 |
| 破防 | 模板未排除 | [一般與完美格擋分別派送](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L939-L962)、[格擋及破防事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L206-L249) | 文件未涵蓋 | block_broken不在trait條件，普通破防格擋仍可觸發。 |
