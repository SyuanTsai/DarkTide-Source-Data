# 電靈超載：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_arc_has_killing_blow_chance`／hash`b54f57d4`；描述鍵`loc_trait_bespoke_arc_has_killing_blow_chance_desc`／hash`4e75d43d`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Voltagheist Overload／Voltagheist Overload。

- 文件名稱：電靈超載(Voltagheist Overload)。

- 英文模板：{proc_chance:%s} chance to Instakill Human-sized enemies hit by Arc lightning. Note that potential other triggers will not be activated on Instakill.

- 繁中模板：{proc_chance:%s} chance to Instakill Human-sized enemies hit by Arc lightning. Note that potential other triggers will not be activated on Instakill.

- **靜態重建**：I–IV將proc_chance靜態替換為5%／7.5%／10%／12.5%；描述的繁中RAW仍英文，中文完整規則由固定程式另行翻譯；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 名稱／描述 | 同hash英／繁中均未翻譯 | [實際I–IV機率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua#L446-L484) | 文件未涵蓋 | 文件譯名與本體RAW原文分開，不能稱官方繁中名稱。 |
| 機率 | {proc_chance:%s} | [實際I–IV機率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua#L446-L484) | 一致 | 靜態重建5/7.5/10/12.5%。 |
| 人類體型 | Human-sized enemies | [處決檢查與執行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L113-L170) | 條件更精確 | 依breed四組排除tags，不檢查模型體型。 |
| 電弧命中 | hit by Arc lightning | [電弧攻擊帶武器項目](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L500-L510)、[每電弧目標命中](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/utilities/chain_lightning_action.lua#L243-L285) | 一致 | 每個合格arc on_hit獨立檢查，不只第一個目標。 |
| 其他觸發 | other triggers will not be activated on Instakill | [處決檢查與執行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L113-L170)、[命中事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L550-L620)、[擊殺事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L710)、[傷害事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L713-L749) | 描述過廣 | 處決按條件發on_hit／致死時on_kill／damage>0時on_damage_dealt；缺item與crit，效果須各別符合consumer。 |
| 存活／持用 | 未列 | [處決檢查與執行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L113-L170) | 文件未涵蓋 | 處理時必須活著、本slot持用；無CD/stack。 |
