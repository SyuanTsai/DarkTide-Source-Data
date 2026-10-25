# 開罐器：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_armor_rending_bayonette`／hash`9011c283`；描述鍵`loc_trait_bespoke_armor_rending_bayonette_desc`／hash`7826a666`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Can Opener／開罐器。

- 文件名稱：開罐器(Can Opener)。

- 適用武器：撬棍；描述鍵`loc_trait_bespoke_armor_rending_bayonette_crowbar_desc`／hash`2bf30b00`。

- 英文模板：Hitting an enemy while in secondary mode gives them {stacks:%s} stacks of {rending:%s} Brittleness. Debuff lasts for {time:%s} seconds and can have a maximum of {max_stacks:%s} stacks.

- 繁中模板：以次要攻擊命中敵人時使其疊加{stacks:%s}層{rending:%s}脆弱。減益效果最高疊加{max_stacks:%s}層，持續{time:%s}秒。

- 適用武器：撕裂槍；描述鍵`loc_trait_bespoke_armor_rending_bayonette_desc`／hash`7826a666`。

- 英文模板：Hitting an enemy with the special attack gives them {stacks:%s} stacks of {rending:%s} Brittleness. Debuff lasts for {time:%s} seconds and can have a maximum of {max_stacks:%s} stacks.

- 繁中模板：特殊攻擊命中敵人時使其疊加{stacks:%s}層{rending:%s}脆弱。減益效果最高疊加{max_stacks:%s}層，持續{time:%s}秒。

- **靜態重建**：共用RAW名稱為「開罐器」。Rippergun保留 special attack 描述，按 I–IV 重建為每次命中10/12/14/16層、每層2.5%脆弱；Crowbar保留 secondary mode 描述，按 I–IV 重建為每次命中1/2/3/4層。兩者共用每層2.5%、5秒、16層上限；這是依trait override和buff模板的靜態重建，不宣稱遊戲畫面實測。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 名稱與繁中原文 | Can Opener／開罐器；name hash 9011c283 | local evidence: localized_keys.json / loc_trait_bespoke_armor_rending_bayonette | RAW一致 | 共用名稱鍵與hash。 |
| Rippergun描述與 tiers | Hitting an enemy with the special attack gives them {stacks:%s} stacks of {rending:%s} Brittleness. | [weapon_traits_bespoke_ogryn_rippergun_p1.lua:156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L156) | 保留描述模板 | special attack 映射 action_stab；I–IV為10/12/14/16層。 |
| Crowbar描述與 gate | Hitting an enemy while in secondary mode gives them {stacks:%s} stacks of {rending:%s} Brittleness. | [weapon_traits_bespoke_crowbar_p1.lua:545](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L545) | 描述需按變體輸出 | 特殊模式旗標、melee、damage_type != blunt；I–IV為1/2/3/4層。 |
| 單層值、上限與持續 | 2.5% Brittleness; max 16 stacks; 5 seconds | [weapon_buff_templates.lua:366](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366) | 程式一致 | format_values讀取rending_debuff；stack時刷新倒數。 |
| 脆弱的實際作用 | Brittleness | [damage_calculation.lua:629](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629) | 文件需解釋 | target_stat_buffs.rending_multiplier進入撕裂加總並封頂1；實際傷害依裝甲階段。 |
| 同擊時序與命中資料傳遞 | Hitting an enemy | [attack.lua:376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L376) | 結算順序補充 | 本擊傷害與HitReaction後才排入on_hit；params包含attack_type、target、damage_type、weapon_special、attacking_item。 |
| 候選與適用武器 | weapon type restriction | local evidence: inventory.json + item_metadata.json | 完整涵蓋 | 精確名稱鍵兩筆metadata、兩trait variant、四binding；無同鍵outside/unresolved候選。 |
