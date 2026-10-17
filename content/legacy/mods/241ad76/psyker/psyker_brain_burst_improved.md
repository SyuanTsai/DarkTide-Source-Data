# 顱腦崩裂(Brain Rupture)：原始碼依據

[English](en/psyker_brain_burst_improved.md)

[返回玩家說明](README.md#psyker_brain_burst_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_brain_burst_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_brain_burst_improved`；名稱鍵：`loc_talent_psyker_brain_burst_improved`；描述鍵：`loc_talent_psyker_brain_burst_improved_description`。
- 節點：`node_58a8d92f-0b8c-43c4-ac80-f0c597fffc54`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 固定 source SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。技能樹將 psyker_brain_burst_improved 定為 tactical 且放入 exclusive_group=blitz；其天賦定義掛載 psyker_brain_burst_improved buff。Buff 將 stat_buffs.smite_damage_multiplier 設為 1.5。實際單體能力採 psyker_smite 武器模板，蓄力後以 damage_profile=psyker_smite_kill、damage_type=smite 造成傷害；共用 damage_calculation.lua 只在 damage_type 為 smite 時讀取此 multiplier，將 damage_multiplier 乘 1.5。故在其他輸入與倍率固定時，100 × 1.5 = 150，屬 50% 傷害增加，不是額外加 50 點固定傷害。
- 此檔補充 Brain Rupture 的本體，不替代節點增傷資料。固定 source SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。一般 action_charge_target 的 charge template 為 psyker_smite_charge，含 charge_on_action_start=true；其一般 charge_time 未指定，ActionSmiteTargeting 對 kill_charge 預設 3 秒，再除以 smite_attack_speed。其 targeting 未設定 sticky_targeting 或 target_locked；target finder 因而會跟著 smart-targeting 更新目標。一般模式在尚無目標時仍符合 target_charge 且非 target_locked 的更新條件，所以蓄力與反噬可以先開始。
- 替代 action_charge_target_sticky 使用 sticky_targeting=true、target_locked=true、charge_time=2、attack_target_time=1，並指定 psyker_smite_lock_target。蓄力等級的充滿時間為 2 秒（假設 smite_attack_speed=1），但反噬每秒速率取 charge template 的 warp_charge_percent / charge_duration，即 0.30/3=10%/秒；充滿後切換為 full_charge_warp_charge_percent=9%/秒。因 target_locked 模式只在有目標時更新蓄力／過載，沒有可鎖目標時不會預先蓄力；取得有效目標後 sticky targeting 不會隨瞄準切換。若目標可受 Smite stagger，黏鎖滿 1 秒會執行一次小幅僵直。
- action_charge_target_lock_on 是從一般蓄力 action 的 charge_power_lock_on 鏈接到的鎖定分支，要求已有有效 Smite 目標，使用 sticky targeting 和 psyker_smite_lock_target，並在鎖定超過 0.25 秒時施加一次小幅僵直。它未指定 charge_time，故新蓄力時預設 3 秒；一般蓄力鏈入時，ActionSmiteTargeting 讀取 is_chain_action 與目前 charge_level，ChargeActionModule 再調整 charge_start_time 以接續該等級。目標改變時 target_locked 分支會重設該次蓄力計時。
- 釋放 action_use_power 的 fire_time=0.2 秒、total_time=0.8 秒，消耗蓄力等級並以 psyker_smite_kill profile 對目前目標執行單體攻擊。成功造成傷害後才付款；本動作使用 psyker_smite_use_power charge template，其 warp_charge_percent=0.25 且沒有 use_charge=true。WarpCharge.increase_immediate 只有在 charge template.use_charge 為真時才把成本乘 charge_level，因此命中時這 25% 是固定基礎成本，不隨蓄力等級縮放。空放或未實際造成傷害不會走此命中付款分支。
- 計算例（無 buff/stat 修正、smite_attack_speed=1）：一般蓄力 0→1 秒約為 charge_level 0→1/3，反噬由 0→6.67%；2 秒為 charge_level 約 2/3、反噬約 13.33%；3 秒滿蓄時約 20%。若持續滿蓄 1 秒，再增加約 9%。此時成功命中會固定再加 25%，合計約 45%（若再多持續滿蓄 1 秒則約 54%）。黏鎖模式取得目標後 0→1→2 秒，蓄力約 0→1/2→1，反噬約 0→10→20%；2 秒滿蓄成功命中後同樣約 45%。這些百分比是原始模板的估算，buff/stat 會乘入實際成本。攻擊 profile 的 attack/impact power distribution 為 900/55；最終傷害仍依目標護甲、部位、蓄力等級與其他倍率計算。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：255–284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L255-L284)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：185–198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L185-L198)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：231–265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L231-L265)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua：106–118](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L106-L118)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：528–534](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L528-L534)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua：535–577](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L535-L577)
- [scripts/utilities/attack/damage_calculation.lua：507–519](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L507-L519)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua：314–333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L314-L333)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua：391–405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L391-L405)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua：443–448](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L443-L448)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua：459–478](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L459-L478)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua：535–563](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L535-L563)
- [scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua：136–154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L136-L154)
- [scripts/extension_systems/weapon/actions/action_smite_targeting.lua：41–60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L41-L60)
- [scripts/extension_systems/weapon/actions/action_smite_targeting.lua：69–124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L69-L124)
- [scripts/extension_systems/weapon/actions/action_smite_targeting.lua：153–172](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L153-L172)
- [scripts/extension_systems/weapon/actions/modules/psyker_smite_targeting_action_module.lua：32–66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/psyker_smite_targeting_action_module.lua#L32-L66)
- [scripts/extension_systems/weapon/actions/modules/charge_action_module.lua：20–67](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L20-L67)
- [scripts/extension_systems/weapon/actions/modules/warp_charge_action_module.lua：19–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/warp_charge_action_module.lua#L19-L39)
- [scripts/extension_systems/weapon/actions/action_damage_target.lua：57–102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L57-L102)
- [scripts/extension_systems/weapon/actions/action_damage_target.lua：169–178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L169-L178)
- [scripts/utilities/warp_charge.lua：58–85](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L58-L85)
- [scripts/utilities/warp_charge.lua：116–139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L116-L139)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua：5–8](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L5-L8)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua：26–41](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L26-L41)
- [scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua：143–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L143-L184)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：231–265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L231-L265)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：255–284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L255-L284)

## 算例條件與待確認事項

- 同一次攻擊、同一目標與部位、同一蓄力等級；其他加成與後續倍率不變。 100 × 1.5 = 150 比較此天賦倍率作用的傷害值，增加 50%。
- 一般蓄力；無 buff/stat 修正；smite_attack_speed=1；蓄力期間連續更新，且在滿蓄後立即命中有效目標。 3 秒充能：0.20 × (3/3) = 20%；滿蓄命中：固定 +0.25；合計約 45%。 一般模式蓄力到滿約 3 秒；命中後基礎總反噬約 45%。
- 替代黏鎖模式；無 buff/stat 修正；smite_attack_speed=1；已先取得有效目標。 2 秒充能：0.30 × (2/3) = 20%；滿蓄命中：固定 +0.25；合計約 45%。 蓄力等級約 2 秒充滿；成功命中後基礎總反噬約 45%。
- 比較純蓄力階段，不含命中成本，無 buff/stat 修正。 一般：1 秒約 +6.67%、2 秒 +13.33%、3 秒 +20%；滿蓄後每秒 +9%。黏鎖：1 秒約 +10%、2 秒 +20%；滿蓄後每秒 +9%。 兩種模式的滿蓄時間不同，模板分母仍為 3 秒；滿蓄後都改採 9%/秒。
- 100 是用來說明倍率的假設基準，不是所有武器、敵人或蓄力等級的實際固定傷害。
- 靜態原始碼推導，未做遊戲內傷害測試。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- charge_time 會受 smite_attack_speed 影響；ChargeActionModule 也會乘 charge_up_time。Peril 會受 warp_charge_amount、warp_charge_over_time_amount、psyker_smite_cost_multiplier 等 stat/buff 影響。時間與百分比算例均是假設值。
- 普通模式可先蓄力是由一般模式的更新條件推導；黏鎖模式必須取得有效目標才更新 charge/overload。移動、目標消失／改變、眩暈、網路同步或遊戲內版本差異可能改變實際流程。
- 傷害 profile 的 power distribution 不是對所有敵人的固定傷害；實際值取決於蓄力等級、目標護甲/部位與 damage modifiers。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；目前記錄為文字與實作差異待核對，不能據此判定任一描述錯誤。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`681e4980`。
- 核對到的繁中原文以顱腦崩裂作為 Brain Rupture 名稱，並以參數呈現傷害增幅；固定來源確認倍率為 1.5。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical/psyker_brain_burst_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/215cb557-8544-4d05-876a-871e70dc093a)

圖片僅供技能辨識，不作機制證據。

