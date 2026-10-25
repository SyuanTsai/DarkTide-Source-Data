# 迅雷反射：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_weakspot_projectile_hit_increases_reload_speed`／hash`fd4fa8f4`；描述鍵`loc_trait_bespoke_weakspot_projectile_hit_increases_reload_speed_desc`／hash`1ac645ec`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Marksman's Reflex／迅雷反射。

- 文件名稱：迅雷反射(Marksman's Reflex)。

- 適用武器：震盪槍；描述鍵`loc_trait_bespoke_weakspot_projectile_hit_increases_reload_speed_desc`／hash`1ac645ec`。

- 英文模板：{reload_speed:%s} Reload Speed for {duration:%s} on Projectile Weakspot Hit.

- 繁中模板：投射物命中弱點時，換彈速度提升{reload_speed:%s}，持續{duration:%s}秒。

- **靜態重建**：同一資源 `content/localization/items` 的中英描述使用相同 key/hash。`format_values.reload_speed` 讀取各 tier 自身的 `proc_stat_buffs.reload_speed`，percentage 乘 100 後加上 `+` 前綴；`duration` 讀取 wrapper 的 `active_duration=3` 並以整數格式輸出。I–IV 的靜態 formatter 重建如下：

- I 級英文：`+15% Reload Speed for 3 on Projectile Weakspot Hit.`
- I 級繁中：`投射物命中弱點時，換彈速度提升+15%，持續3秒。`
- II 級英文：`+20% Reload Speed for 3 on Projectile Weakspot Hit.`
- II 級繁中：`投射物命中弱點時，換彈速度提升+20%，持續3秒。`
- III 級英文：`+25% Reload Speed for 3 on Projectile Weakspot Hit.`
- III 級繁中：`投射物命中弱點時，換彈速度提升+25%，持續3秒。`
- IV 級英文：`+30% Reload Speed for 3 on Projectile Weakspot Hit.`
- IV 級繁中：`投射物命中弱點時，換彈速度提升+30%，持續3秒。`

英文 RAW 的 placeholder 後只有 `for 3`，沒有單位字樣；繁中 RAW 在時間 placeholder 後明列「秒」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發攻擊類型 | 英文 RAW `on Projectile Weakspot Hit`；繁中 RAW `投射物命中弱點時`（同一資源，desc hash `1ac645ec`） | [本項 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L71-L83)／[通用弱點 helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L473-L499)；只檢查 hit_weakspot，不檢查 attack_type／attacking_item。 | 明確矛盾 | 實作沒有投射物、遠程攻擊或來源物品限制；持用欄位切換不卸除 on_equip Buff，符合條件的其他攻擊也可能觸發或刷新。 |
| I–IV 換彈速度數值 | 兩語描述均以 `{reload_speed:%s}` 佔位；本體未逐級寫出數字。 | [own tiers 與 formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L132-L181)；.15/.20/.25/.30，以percentage×100及prefix+重建。 | 一致 | 格式 placeholder 與程式各級值相符；RAW 未明列每級表屬欄位參數化，不是數值矛盾。 |
| 效果持續時間 | 繁中 RAW placeholder 後明寫「秒」；英文 RAW 為 `for {duration:%s}`，未明寫時間單位。 | [wrapper duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L71-L83)／[活躍期限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L80-L105)；active_duration=3，以處理起點計時。 | 文件未涵蓋 | 繁中單位一致；英文沒有明示單位是原文字串省略，不代表程式使用其他時間單位。 |
| 不疊層與再次命中 | RAW 只述弱點命中後的 Reload Speed 及 duration，未說明堆疊／刷新。 | [無 cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L194)／[逐事件重設起點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L370)；max_stacks1，成功再proc刷新。 | 文件未涵蓋 | 程式的單份效果與重觸刷新補足原文未描述的行為。 |
| 百分比如何影響換彈 | RAW 稱 `Reload Speed`，未說明動作時間公式。 | [裝填動作與stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L382-L447)／[採樣及時間公式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L294-L429)；reload_speed基準1，單段T0/(1+b)依中立條件。 | 文件未涵蓋 | 速度倍率一致；把 +30% 直接寫成整段換彈時間少 30% 會超出 RAW 與動作時間公式。 |
