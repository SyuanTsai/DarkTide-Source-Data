# 偏轉：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_can_block_ranged`／hash`40ed157d`；描述鍵`loc_trait_bespoke_can_block_ranged_desc`／hash`df1da0ec`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Deflector／偏轉。

- 文件名稱：偏轉(Deflector)。

- 適用武器：烈焰力場劍與烈焰力場巨劍；描述鍵`loc_trait_bespoke_can_block_ranged_desc`／hash`df1da0ec`。

- 英文模板：This weapon Blocks both Melee and Ranged attacks. Additionally, Block Cost is reduced by {block_cost:%s}.

- 繁中模板：這把武器能格擋近戰和遠端攻擊。此外，格擋消耗降低{block_cost:%s}。

- **靜態重建**：保留本體同hash名稱「Deflector／偏轉」與描述；將程式倍率0.775／0.75／0.725／0.7依本體參數格式還原為22.5%／25%／27.5%／30%消耗減免，並在玩家說明補上實際遠程格擋角度、成本與攻擊類型限制；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 格擋遠程攻擊 | Blocks both Melee and Ranged attacks／能格擋近戰和遠端攻擊 | [keyword gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L75-L100) | 條件更精確 | 關鍵字只放寬attack_type為ranged的格擋判定；仍須處於格擋、位於有效角度且有成本項目。 |
| 減少格擋消耗 | Block Cost is reduced by {block_cost:%s}／格擋消耗降低{block_cost:%s} | [tier conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L93-L135) | 補出等級數值 | 倍率0.775／0.75／0.725／0.7換算為降低22.5%／25%／27.5%／30%。 |
| 面向與角度 | 原文未列 | [default angles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L27-L30)、[angle and cost gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L88-L98) | 補充格擋條件 | 武器未設自訂角度；遠程成本表只有內圈值，故遠程格擋限於左右各約59.4度、總扇形約118.8度。 |
| 爆炸、電弧與特殊攻擊 | 原文只稱遠程攻擊 | [attack types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/attack_settings.lua#L20-L20)、[unblockable gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L103-L127) | 分類與例外 | 爆炸和電弧不等於遠程攻擊類型；不可格擋特殊攻擊須另有明確格擋例外。 |
| 巨劍兩型號差異 | 同一祝福描述與數值 | [Mk VI trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2793-L2797)、[Mk VIII trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2708-L2712) | 無等級差異 | Mk VI與Mk VIII使用同一個trait table與相同stamina template。 |
| 成本端點 | 本體未列成本插值端點。 | [模板解析](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L371-L405) | 文件未涵蓋 | lerp_basic/perfect是插值端點，不是一般／完美格擋成本。 |
| 單手型號差異 | 同一描述鍵與hash；等級仍為I–IV。 | [單手等級](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L53-L95)；[單手體力模板](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/stamina/weapon_stamina_templates.lua#L255-L282) | 同等級、不同武器基礎模板 | 偏轉倍率與遠程內圈解析成本相同；單手的一般格擋成本與特殊動作由自身模板決定。 |
