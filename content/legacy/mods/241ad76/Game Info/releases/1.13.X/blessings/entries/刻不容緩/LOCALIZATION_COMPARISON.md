# 刻不容緩：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_stagger_count_bonus_damage`／hash`0d7da51d`；描述鍵`loc_trait_bespoke_stagger_count_bonus_damage_desc`／hash`1ac5c173`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：No Respite／刻不容緩。

- 文件名稱：刻不容緩(No Respite)。

- 適用武器：電弧步槍、機動自動槍、步兵鐳射槍、冥潮鐳射槍、重伐木槍、戰鬥霰彈槍、獵人霰彈槍、衝覆者霰彈手槍和防暴盾牌；描述鍵`loc_trait_bespoke_stagger_count_bonus_damage_desc`／hash`1ac5c173`。

- 英文模板：Up to {damage:%s} Damage on Hit (Staggered Enemy), scaling with Stagger.

- 繁中模板：命中硬直敵人後，根據硬直程度提升{damage:%s}傷害。

- **靜態重建**：以下保留同 hash 中英 RAW 句型，只按 own tier percentage formatter 代入 `{damage:%s}`。

| Tier | English static reconstruction | 繁中靜態重建 |
|---|---|---|
| I | Up to +14% Damage on Hit (Staggered Enemy), scaling with Stagger. | 命中硬直敵人後，根據硬直程度提升+14%傷害。 |
| II | Up to +16% Damage on Hit (Staggered Enemy), scaling with Stagger. | 命中硬直敵人後，根據硬直程度提升+16%傷害。 |
| III | Up to +18% Damage on Hit (Staggered Enemy), scaling with Stagger. | 命中硬直敵人後，根據硬直程度提升+18%傷害。 |
| IV | Up to +20% Damage on Hit (Staggered Enemy), scaling with Stagger. | 命中硬直敵人後，根據硬直程度提升+20%傷害。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 卡面數值與靜態 formatter | 同 hash 描述 key loc_trait_bespoke_stagger_count_bonus_damage_desc／1ac5c173；EN/繁中 RAW 與完整 tier 重建見同項原文資料。 | 八個 own tier 格式器與實際顯示解析：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua:190–229; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua:220–259; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua:266–305; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua:218–257; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua:677–716; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p1.lua:359–398; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua:359–398; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua:877–916; TraitValueParser._try_format_values scripts/utilities/trait_value_parser.lua:77–117 and _number_value_formatter :189–228. | 符合（formatter 顯示） | I–IV placeholder 顯示 +14%／+16%／+18%／+20%；僅表示卡面 formatter 值。 |
| 英文 RAW 的最高值 | EN RAW `Up to {damage:%s} Damage on Hit (Staggered Enemy), scaling with Stagger.`，hash 1ac5c173。 | scripts/utilities/attack/damage_calculation.lua:_calculate_damage_buff:330–332 以 `(stagger_count_damage−1)×clamp(target_stagger_count,0,7)` 加算；scripts/settings/buff/buff_settings.lua:975–984 將 stagger_count_damage 定義為 additive_multiplier；damage_calculation.lua:_base_damage:587–614 先算 base_damage，再以傷害池產生 buff_damage。 | 明確矛盾 | IV p=.20 且 count=7 時是 +1.40（+140 個百分點）加算池，超出英文卡面 +20% 的明確上限；不代表最終 HP 傷害 +140%。 |
| 繁中 RAW 省略計數公式 | 繁中 RAW `命中硬直敵人後，根據硬直程度提升{damage:%s}傷害。`，同 hash 1ac5c173。 | scripts/utilities/attack/attack.lua Attack.execute:296–309 先取 count，350–354 傳 DamageCalculation；damage_calculation.lua:330–332 clamp 至 7。 | 文件未涵蓋 | 繁中描述沒寫每個原生 count 的乘法或 count 上限，也沒有與該規則相反的明確陳述。 |
| 本擊踉蹌是否回溯增傷 | EN/繁中 RAW 皆未提同一命中的先後結算。 | scripts/utilities/attack/attack.lua Attack.execute:350–383 先計算 damage 再 HitReaction.apply；scripts/utilities/attack/stagger.lua _apply_stagger:376–449 在後續命中處理中更新 native count。 | 文件未涵蓋 | 本擊讀取的是攻擊前 count；本擊新增 count 只能供後續獨立 damage call 使用。 |
| 射擊、特殊近戰與純推 | RAW 使用泛稱 Damage on Hit，未列 Mark 或動作。 | 18 個實際武器模板完整範圍列於 refs 與逐 Mark coverage；Attack.execute scripts/utilities/attack/attack.lua:350–383；_calculate_damage_buff scripts/utilities/attack/damage_calculation.lua:330–332、574–584；_base_damage 同檔:587–614；實際 Mk IIb hip hitscan profile scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua:205–259；盾牌純推 profile shotpistol_shield_p1_m1.lua:641–650；pellet 分組 action_shoot_pellets.lua:498–523。 | 文件未涵蓋 | RAW 未列實際 Mark／動作及通用 damage-stat 路由，屬文件未涵蓋；純盾推的基礎傷害為 0，因此本項傷害加算池不會產生傷害。 |
