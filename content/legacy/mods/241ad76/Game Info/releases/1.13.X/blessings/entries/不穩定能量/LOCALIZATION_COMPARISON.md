# 不穩定能量：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_warp_charge_power_bonus`／hash`2410af29`；描述鍵`loc_trait_bespoke_warp_charge_power_bonus_desc`／hash`b554975d`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Unstable Power／不穩定能量。

- 文件名稱：不穩定能量(Unstable Power)。

- 適用武器：烈焰力場巨劍、烈焰力場劍；描述鍵`loc_trait_bespoke_warp_charge_power_bonus_desc`／hash`b554975d`。

- 英文模板：Up to {power_level:%s} Strength, scaling with Peril.

- 繁中模板：根據反噬多寡，威力最多提升{power_level:%s}。

- **靜態重建**：以下按固定 RAW 模板及各 trait 自身 formatter 靜態代入 I–IV；單手劍 formatter 將每階值乘 4，巨劍 formatter 使用預設百分比格式：

- **單手力場劍 I 級 EN**：Up to +14% Strength, scaling with Peril.
- **單手力場劍 I 級 繁中**：根據反噬多寡，威力最多提升+14%。
- **單手力場劍 II 級 EN**：Up to +16% Strength, scaling with Peril.
- **單手力場劍 II 級 繁中**：根據反噬多寡，威力最多提升+16%。
- **單手力場劍 III 級 EN**：Up to +18% Strength, scaling with Peril.
- **單手力場劍 III 級 繁中**：根據反噬多寡，威力最多提升+18%。
- **單手力場劍 IV 級 EN**：Up to +20% Strength, scaling with Peril.
- **單手力場劍 IV 級 繁中**：根據反噬多寡，威力最多提升+20%。
- **力場巨劍 I 級 EN**：Up to +3.5% Strength, scaling with Peril.
- **力場巨劍 I 級 繁中**：根據反噬多寡，威力最多提升+3.5%。
- **力場巨劍 II 級 EN**：Up to +4% Strength, scaling with Peril.
- **力場巨劍 II 級 繁中**：根據反噬多寡，威力最多提升+4%。
- **力場巨劍 III 級 EN**：Up to +4.5% Strength, scaling with Peril.
- **力場巨劍 III 級 繁中**：根據反噬多寡，威力最多提升+4.5%。
- **力場巨劍 IV 級 EN**：Up to +5% Strength, scaling with Peril.
- **力場巨劍 IV 級 繁中**：根據反噬多寡，威力最多提升+5%。

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 等級值與格式器 | RAW description key/hash b554975d；EN: Unstable Power；繁中：不穩定能量 | Greatsword own I–IV 與 percentage formatter：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua:53–92；Force Sword own I–IV 與 value_manipulation：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua:96–138；TraitValueParser.trait_description/local _try_format_values：scripts/utilities/trait_value_parser.lua:65–109；FORMATTING_FUNCTIONS.percentage：scripts/utilities/trait_value_parser.lua:7–21；_number_value_formatter：scripts/utilities/trait_value_parser.lua:189–227。 | 符合 | 兩 own tier 均為 .035/.04/.045/.05。單手自訂值乘四顯示最大 14/16/18/20%；巨劍預設百分比只顯示每階 3.5/4/4.5/5%。 |
| Tier 覆寫 wrapper fallback | RAW 同 key/hash；只說隨反噬提高，未列 wrapper fallback。 | Force Greatsword wrapper：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua:17–21；Force Sword wrapper：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua:18–22；Buff._calculate_stat_buffs：scripts/extension_systems/buff/buffs/buff.lua:689–747。 | 文件未涵蓋 | 兩 wrapper 以 .05 作 conditional fallback；同 rarity 的 own stat override 覆蓋相同 conditional key，並非 fallback + tier 疊加。 |
| 反噬階數與持用限制 | RAW 同 key/hash；EN/繁中未列每階門檻或持用槽細節。 | base warpcharge_stepped_bonus：scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:2121–2145；SteppedStatBuff.stat_buff_stacking_count：scripts/extension_systems/buff/buffs/stepped_stat_buff.lua:32–79；ConditionalFunctions.is_item_slot_wielded：scripts/settings/buff/helper_functions/conditional_functions.lua:43–60。 | 文件未涵蓋 | floor(current_percentage/.20) 形成 0–4 階，兩 conditional 都受持用槽限制；沒有另設 stepped_stat_buffs 表。 |
| 力量輸入與輸出邊界 | RAW 明寫 Strength；未解釋力量曲線、傷害、衝擊或順劈。 | PowerLevel.power_level_buff_modifier/scale_power_level_to_power_type_curve：scripts/utilities/attack/power_level.lua:25–91；DamageProfile.power_distribution_from_power_level/max_hit_mass：scripts/utilities/attack/damage_profile.lua:29–45；DamageCalculation：scripts/utilities/attack/damage_calculation.lua:220–285,570–615。 | 文件未涵蓋 | 先依原生武器力量類型曲線轉換，再乘適用力量修正；攻擊傷害、衝擊與順劈用後續各自曲線，不能等同最終 HP 傷害增幅。 |
| Mark 實際普通／蓄力／特殊路由 | RAW 同 key/hash；未限定某個 Mark 的動作名稱或各自 damage profile。 | M1/M2/M3 Force Sword templates：scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua:336–529,1240–1461；forcesword_p1_m2.lua:332–523,1154–1372；forcesword_p1_m3.lua:225–407,1021–1238。Greatsword M1/M2：scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua:424–593,1726–1900,2055–2368；forcesword_2h_p1_m2.lua:437–605,1556–1730,1970–2283。 | 文件未涵蓋 | 五個 UI binding 的 Mark 有各自動作/profile；被祝福加成的是實際 Attack 讀取的 power stat，不把各 Mark 輸出曲線視為相同。 |
| 推擊與推後甩擊 | RAW 未描述推擊、推後動作或切槽。 | ActionPush._push：scripts/extension_systems/weapon/actions/action_push.lua:52–90；PushAttack.push：scripts/utilities/attack/push_attack.lua:32–88；ActionDamageTarget._deal_damage：scripts/extension_systems/weapon/actions/action_damage_target.lua:105–164；Attack.execute：scripts/utilities/attack/attack.lua:216–224,271–294。 | 文件未涵蓋 | 實際 push 與 follow-up 有各自攻擊類型，但使用同一玩家力量修正輸入；它們不是此祝福的觸發事件。 |
| 快取刷新、通風與切槽 | RAW 未描述快取時序、反噬下降、持用條件或移除。 | PlayerUnitBuffExtension.fixed_update：scripts/extension_systems/buff/player_unit_buff_extension.lua:131–145；BuffExtensionBase._update_stat_buffs_and_keywords：scripts/extension_systems/buff/buff_extension_base.lua:318–354；WarpCharge.update/update_venting：scripts/extension_systems/character_state_machine/character_states/warp_charge.lua:58–114,176–200,277–328；ActionVentWarpCharge.start/fixed_update：scripts/extension_systems/weapon/actions/action_vent_warp_charge.lua:17–60。 | 文件未涵蓋 | 固定 Buff 更新重讀 current_percentage；通風/散熱使步階下降。held 條件停止離槽時修正，無本項 TTL 或命中累積。 |
| 實際型號和五個 bindings | RAW 描述沒有列型號或 Mark。 | 五筆 inventory binding 及 family/pattern/Mark metadata 合成、template import/ukeys/append：unstable-power-primary-ui-review.json；exact traits and restrictions：unstable-power-primary-traits-review.json。 | 符合 | 實際為兩個 trait variants/五個 Mark bindings；Greatsword Covenant Mk VI/VIII 與 Force Sword Obscurus II/Deimos IV/Illisi V。 |
| 巨劍 RAW 最大值差異 | 同一 description key/hash b554975d；“Up to”/「最多」表示最大值；未列其他條件。 | Greatsword formatter：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua:53–92（預設 percentage）；最大步階：scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:2121–2145 與 scripts/extension_systems/buff/buffs/stepped_stat_buff.lua:32–79。 | 明確矛盾 | 巨劍 RAW 顯示的是 per-step p；四步時實際最高 4p。原 RAW 保留，差異為格式器對「最多」未顯示最大效果。 |
