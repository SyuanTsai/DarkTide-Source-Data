# 幽靈：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Shared base ProcBuff template | [Shared base ProcBuff template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1826-L1838) |
| Weakspot predicate | [Weakspot predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L473-L475) |
| Attacking item match | [Attacking item match](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L726) |
| Held-slot condition | [Held-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| ProcBuff active duration | [ProcBuff active duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104) |
| No-cooldown retrigger | [No-cooldown retrigger](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| Conditional keyword | [Conditional keyword](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L267) |
| Proc event timer refresh | [Proc event timer refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| Attack on_hit payload | [Attack on_hit payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L621) |
| Attack event dedup parameter | [Attack event dedup parameter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L542-L548) |
| HitScan multi-hit loop | [HitScan multi-hit loop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L96-L124) |
| HitScan per-target Attack call | [HitScan per-target Attack call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L215-L226) |
| RangedAction item transfer | [RangedAction item transfer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L28) |
| Dodge keyword consumer | [Dodge keyword consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L100-L121) |
| Undodgeable skips HitScan Dodge check | [Undodgeable skips HitScan Dodge check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L143-L153) |
| PushAttack passes torso hit zone and optional weapon item | [PushAttack passes torso hit zone and optional weapon item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L78-L86) |
| ActionSweep passes hit zone and wielded weapon item to Attack | [ActionSweep passes hit zone and wielded weapon item to Attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1503) |
| Toggle-special action changes special state without making an attack | [Toggle-special action changes special state without making an attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_toggle_weapon_special.lua#L15-L50) |
| ActionShoot selects chemical fire configuration while special is active | [ActionShoot selects chemical fire configuration while special is active](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L1252-L1254) |
| Needle Pistol chemical hit-scan config uses a distinct hitmass explosion | [Needle Pistol chemical hit-scan config uses a distinct hitmass explosion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/settings_templates/needlepistol_hitscan_templates.lua#L43-L58) |
| Hitmass explosion retains item and executes as explosion attack | [Hitmass explosion retains item and executes as explosion attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L97-L139) |
| Explosion target uses center-mass actor and Attack with same item | [Explosion target uses center-mass actor and Attack with same item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L261-L317) |
| Needle toxin tick uses source item but omits hit zone | [Needle toxin tick uses source item but omits hit zone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1520) |
| Attack computes hit_weakspot from supplied hit_zone_name | [Attack computes hit_weakspot from supplied hit_zone_name](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L249-L254) |
| Weakspot resolver needs a configured weakspot zone | [Weakspot resolver needs a configured weakspot zone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/weakspot.lua#L9-L19) |
| Weakspot resolver forced-weakspot keyword override | [Weakspot resolver forced-weakspot keyword override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/weakspot.lua#L9-L19) |
| Broker Augmented Precision talent description | [Broker Augmented Precision talent description](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1269-L1282) |
| Broker Augmented Precision six-hit setting | [Broker Augmented Precision six-hit setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L298-L300) |
| Broker guaranteed-weakspot proc and one-shot buff | [Broker guaranteed-weakspot proc and one-shot buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1730-L1766) |
| Broker defining weapon includes Needle Pistol P1 M1 | [Broker defining weapon includes Needle Pistol P1 M1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L111-L136) |
| Needle toxin debuff creation passes owner_unit only | [Needle toxin debuff creation passes owner_unit only](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1402-L1407) |
| Buff init builds context from explicit additional args | [Buff init builds context from explicit additional args](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L56-L78) |
| Needle toxin interval tick passes template_context.source_item to Attack | [Needle toxin interval tick passes template_context.source_item to Attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1509-L1520) |
| Damage-profile buff application only passes owner_unit | [Damage-profile buff application only passes owner_unit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L1097-L1110) |
| Broker tox grenade liquid-area template uses toxin on exit | [Broker tox grenade liquid-area template uses toxin on exit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/liquid_area/liquid_area_templates/player_liquid_area_templates.lua#L23-L29) |
| Broker tox grenade projectile selects that liquid area | [Broker tox grenade projectile selects that liquid area](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L315-L328) |
| Projectile liquid-area creation forwards projectile weapon item | [Projectile liquid-area creation forwards projectile weapon item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L384-L386) |
| Liquid-area exit applies optional source_item | [Liquid-area exit applies optional source_item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/liquid_area/liquid_area_extension.lua#L424-L428) |
| Liquid-area optional source_item is extension init data | [Liquid-area optional source_item is extension init data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/liquid_area/liquid_area_extension.lua#L106) |
| Primer gas explosion on-hit buff creator passes item_or_nil | [Primer gas explosion on-hit buff creator passes item_or_nil](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L420-L445) |
| Primer gas explosion attaches toxin interval buff | [Primer gas explosion attaches toxin interval buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L498-L513) |
| Toxin death explosion gas creation omits item argument | [Toxin death explosion gas creation omits item argument](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1598-L1638) |
| Explosion item parameter and queue preserve optional item | [Explosion item parameter and queue preserve optional item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L57-L58) |
| Explosion queue records item_or_nil | [Explosion queue records item_or_nil](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L280-L287) |
| Stack add reuses original buff instance/context | [Stack add reuses original buff instance/context](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L444-L472) |
| 化學爆炸完整profile與實際覆寫 | [化學爆炸完整profile與實際覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/settings_templates/needlepistol_damage_profile_templates.lua#L152-L245) |
| 化學爆炸模板與profile選用 | [化學爆炸模板與profile選用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/settings_templates/needlepistol_explosion_templates.lua#L12-L55) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 五個 trait 的 I–IV 覆寫均為 active_duration=0.6／0.8／1.0／1.2；各自 wrapper 完整核對後均 clone 相同 base，沒有新增觸發限制。
- Base 使用 ProcBuff、predicted=false、on_hit=1 與 count_as_dodge_vs_ranged；同時要求持用對應 slot、attacking_item.name 匹配 context.item.name，以及該筆 params.hit_weakspot=true。
- Base 與全部 wrapper 沒有額外 attack_type、暴擊、擊殺、正傷害、weapon_special 或首目標限制。Attack 共通 should_proc／skip_on_hit_proc 與呼叫端去重仍適用；標準 HitScan 逐命中執行 Attack。
- 無 cooldown_duration；合格事件重設 active_start_time。Keyword 要求 active 且持用條件成立；切出不停止時間，期限內切回恢復 keyword。
- Dodge 只在玩家 ranged 判定中讀取 keyword。HitScan 對 undodgeable profile 略過 Dodge，故不能將 RAW 的「免疫」理解為全域傷害免疫。
- 11 個型號的射擊／瞄準均走 HitScan；三款機動自動槍的槍托與電能步槍刺擊走 Sweep，傳入實際武器與命中部位。重型鐳射手槍兩種推擊走 PushAttack，使用 torso；手電筒與化學模式切換走 toggle，不產生命中。
- 化學配置的針頭直擊與 hitmass 爆炸各自執行 Attack。爆炸傳同一武器 item、使用自己的 hit actor／命中區；實際 explosion_1 傷害 profile 沒有 skip_on_hit_proc，覆寫只增加 buff_on_damage 毒素。
- 毒素 tick 使用最初 buff context 的 source_item。針彈 on-hit 與傷害 profile 的建立入口只傳 owner_unit；既有堆疊只 add_stack，保留原 context。其他已核對的帶來源入口使用 tox grenade item 或 nil，不能匹配針彈武器。
- Weakspot resolver 可由 guaranteed_weakspot_on_hit 覆寫。掮客 Augmented Precision 與針彈型號可並存；counter 初始為0，首次5次 on_hit 後給一次性保證，重設為−1 後每6次再給一次。此覆寫只影響弱點結果，不改 attacking_item。

- **期限**：合格事件時間 t₀、等級時間 D；active ⇔ t < t₀ + D。I–IV 的 D 為 0.6／0.8／1.0／1.2 秒。
- **再次觸發**：active_start_time=t_new；新期限=t_new+D。不增加層數，也不是將剩餘時間再加 D。
- **切換**：keyword=active 且持用對應武器。切出不改 t₀；期限內切回剩餘時間=max(0,t₀+D−t)。
- **防禦判定**：可閃避的攻擊進入玩家 ranged Dodge 判定時，此 keyword 令其被算作閃避；undodgeable HitScan 略過該判定。這是閃避狀態，不是傷害乘數。
- **計數單位**：每筆合格 on_hit，不固定每發一次。Trait 不篩 target_index、attack_type 或 weapon_special；Attack 的 should_proc／skip_on_hit_proc 及呼叫端去重仍有效。
- **化學爆炸**：按自己的 hit actor／hit zone 計算 hit_weakspot，傳入同一武器 item。實際 explosion_1 profile 沒有跳過 on_hit 的旗標；命中是否為弱點仍按該筆 Attack 判定。
- **毒素與保證弱點**：毒素 tick 的 attacking_item 取最初 source_item；針彈建立時未傳它，既有堆疊也不改寫。guaranteed_weakspot_on_hit 可令弱點結果為 true，仍不能令 nil 或 grenade item 匹配幽靈的針彈 item。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_037`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_037.png)｜[Issue附件](https://github.com/user-attachments/assets/6b238342-7828-4bb3-af20-1e092a318887)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 機動自動槍等級覆寫 | [機動自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua#L134-L163) |
| 機動自動槍Buff接入 | [機動自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p3_buff_templates.lua#L13) |
| UI 機動自動槍 | [UI 機動自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L694) |
| 機動自動槍 哥倫努 Mk III匯入 | [機動自動槍 哥倫努 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L17) |
| 機動自動槍 哥倫努 Mk III接入 | [機動自動槍 哥倫努 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L1031-L1033) |
| 機動自動槍 格拉亞 Mk VII匯入 | [機動自動槍 格拉亞 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L17) |
| 機動自動槍 格拉亞 Mk VII接入 | [機動自動槍 格拉亞 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L1094-L1096) |
| 機動自動槍 阿格里皮娜 Mk IX匯入 | [機動自動槍 阿格里皮娜 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L17) |
| 機動自動槍 阿格里皮娜 Mk IX接入 | [機動自動槍 阿格里皮娜 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L1039-L1041) |
| 電能步槍等級覆寫 | [電能步槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L79-L108) |
| 電能步槍Buff接入 | [電能步槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L13) |
| UI 電能步槍 | [UI 電能步槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L857) |
| 電能步槍 布蘭克斯 Mk CV匯入 | [電能步槍 布蘭克斯 Mk CV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L17) |
| 電能步槍 布蘭克斯 Mk CV接入 | [電能步槍 布蘭克斯 Mk CV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L863-L865) |
| 步兵鐳射槍等級覆寫 | [步兵鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L180-L209) |
| 步兵鐳射槍Buff接入 | [步兵鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L45) |
| UI 步兵鐳射槍 | [UI 步兵鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L870) |
| 步兵鐳射槍 卡特雷爾 Mk VII匯入 | [步兵鐳射槍 卡特雷爾 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L17) |
| 步兵鐳射槍 卡特雷爾 Mk VII接入 | [步兵鐳射槍 卡特雷爾 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L714-L716) |
| 步兵鐳射槍 卡特雷爾 Mk IIb匯入 | [步兵鐳射槍 卡特雷爾 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IIb接入 | [步兵鐳射槍 卡特雷爾 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L692-L694) |
| 步兵鐳射槍 卡特雷爾 Mk IX匯入 | [步兵鐳射槍 卡特雷爾 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IX接入 | [步兵鐳射槍 卡特雷爾 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L693-L695) |
| 重型鐳射手槍等級覆寫 | [重型鐳射手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua#L260-L289) |
| 重型鐳射手槍Buff接入 | [重型鐳射手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_laspistol_p1_buff_templates.lua#L15) |
| UI 重型鐳射手槍 | [UI 重型鐳射手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L938) |
| 重型鐳射手槍 奧克塔蘭MG Mk II匯入 | [重型鐳射手槍 奧克塔蘭MG Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L16) |
| 重型鐳射手槍 奧克塔蘭MG Mk II接入 | [重型鐳射手槍 奧克塔蘭MG Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L858-L860) |
| 重型鐳射手槍 卡特雷爾 Mk X匯入 | [重型鐳射手槍 卡特雷爾 Mk X匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L16) |
| 重型鐳射手槍 卡特雷爾 Mk X接入 | [重型鐳射手槍 卡特雷爾 Mk X接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L862-L864) |
| 針彈手槍等級覆寫 | [針彈手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L114-L143) |
| 針彈手槍Buff接入 | [針彈手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L15) |
| UI 針彈手槍 | [UI 針彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L961) |
| 針彈手槍 布蘭克斯 MkVI匯入 | [針彈手槍 布蘭克斯 MkVI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L17) |
| 針彈手槍 布蘭克斯 MkVI接入 | [針彈手槍 布蘭克斯 MkVI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L791-L793) |
| 針彈手槍 布蘭克斯 MKII匯入 | [針彈手槍 布蘭克斯 MKII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L17) |
| 針彈手槍 布蘭克斯 MKII接入 | [針彈手槍 布蘭克斯 MKII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L788-L790) |
