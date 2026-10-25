# 連跑帶打：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_allow_hipfire_while_sprinting`／hash`168636d5`；描述鍵`loc_trait_bespoke_allow_hipfire_while_sprinting_and_bonus_stats_desc`／hash`5ae2e578`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Run 'n' Gun／連跑帶打。

- 英文模板：You can Hipfire with this weapon while Sprinting. {damage_near:%s} Close Damage while Sprinting. Also reduces weapon spread at all times by {weapon_spread:%s}.

- 繁中模板：你可以在衝刺時使用這把武器腰射。衝刺時近距離傷害增加{damage_near:%s}。同時子彈擴散範圍將維持縮小{weapon_spread:%s}。

- **靜態重建**：一般武器I級衝刺腰射，衝刺近距離傷害+6%，散布−30%；IV級+15%／−30%；雙管霰彈槍I–IV散布均−10%；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 衝刺腰射 | 同hash中英列while Sprinting腰射 | [腰射輸入保留衝刺](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua#L393-L410)、[射擊動作衝刺許可](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua#L462-L478) | 一致 | input及action條件確認，不解鎖全部瞄準或蓄力。 |
| 衝刺傷害 | 模板damage_near從conditional override讀取 | [共用三項效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1342-L1357)、[數值覆寫與條件套用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) | 一致 | I–IV6/9/12/15%，持用且衝刺才提供。 |
| 散布持續 | 模板at all times／維持縮小 | [共用三項效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1342-L1357)、[散布俯仰與偏航消費](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua#L164-L204) | 一致 | 常駐stat_buffs不要求衝刺，沒有後座力消費。 |
| 武器差異 | weapon_spread讀各trait覆寫 | 逐武器trait來源見各實作頁 | 一致 | shotgun_p2為−10%，其他14交集中的13實作為−30%。 |
| 距離範圍 | 模板只列Close Damage | [近遠距離界線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)、[距離傷害加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L297) | 文件未涵蓋 | 12.5m完整，30m零，中間sqrt插值。 |
| 加算組合 | 本體未列 | [距離傷害加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L297)、[散布加算型別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L971-L978) | 文件未涵蓋 | near damage入共同傷害池；spread基底1相加。 |
| 切換與HUD | 本體未列 | [切出不移除on_equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L778-L785)、[全部Buff更新不篩inactive](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L354) | 文件未涵蓋 | 切出關閉conditional傷害，但恆定spread/keyword仍保留。 |
