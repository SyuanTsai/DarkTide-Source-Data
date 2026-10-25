# 靈能者：角色基礎效果

[English](en/BASE_EFFECTS.md)

[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)｜[未直接使用的定義](UNUSED_DEFINITIONS.md)

以下四項由職業設定預先提供，不占本文件的 81 個可選節點。功能標題用於辨識，不宣稱是遊戲正式譯名。固定來源為 Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`；基礎光環另依下列 1.13.2 固定來源更新；以下為靜態核對，未進行遊戲內測試。

[職業基礎清單](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L48-L65)。本次未取得四項基礎效果各自的圖示對應，不借用其他天賦圖示。

<a id="psyker_combat_ability_shout"></a>
## 基礎戰鬥能力

- 天賦識別碼：`psyker_combat_ability_shout`。

- 向前方釋放衝擊使敵人踉蹌，平息 10 個反噬百分點；基礎冷卻 30 秒。
- 反噬原有 60% 時，60% − 10 個百分點 = 50%。點選靈能尖嘯後，改為平息 50 個百分點。

### 原始碼確認與程式推導

psyker_archetype.lua 的 base_talents 將該定義放入戰鬥技能槽。psyker_talents.lua 把定義綁定到 PlayerAbilities.psyker_discharge_shout，該能力使用 psyker_shout 模板。talent_settings_psyker.lua 將 warpcharge_vent_base 設為 0.1；action_psyker_shout.lua 取用此值呼叫 WarpCharge.decrease_immediate。WarpCharge.decrease_immediate 將輸入值從 current_percentage 扣除，因此 60% 反噬在沒有其他修正時會變成 50%。

### 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L50-L54)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L113-L131)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L6-L19)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L164-L170)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L131-L145)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L92-L114)

### 待確認事項

- 天賦定義的舊英文 name 註解寫 50%，但本 commit 實際設定 warpcharge_vent_base=0.1；兩者差異仍需遊戲內核對。
- 本機 Steam Build 25606770 與固定公開來源版本對應為1.13.1；原始碼舊註解不當成已驗證的遊戲文字。

---

<a id="psyker_grenade_smite"></a>
## 基礎閃擊

- 天賦識別碼：`psyker_grenade_smite`。

- 蓄力後攻擊單一敵人，是顱腦崩裂強化前的基礎能力；不使用靈能攻擊的十發投擲次數。
- 可先蓄力再找目標，基礎約 3 秒充滿；先鎖定再蓄力約 2 秒。沒有其他修正時，蓄滿約增加 20 個反噬百分點，成功攻擊再增加 25 個百分點，合計約 45 個百分點。
- 顱腦崩裂會另乘 1.5 傷害倍率：固定相同條件，基礎版本若造成 100 點，強化版則為 100 × 1.5 = 150 點。

### 原始碼確認與程式推導

psyker_grenade_smite只提供PlayerAbilities.psyker_smite；能力max_charges=0、only_uses_charges=true不是十發投擲物。與顱腦崩裂共用psyker_smite武器、鎖定、蓄力和反噬流程，差別是未掛載smite_damage_multiplier=1.5被動。完整動作追蹤見[顱腦崩裂來源](psyker_brain_burst_improved.md)。

### 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L55-L58)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L185-L198)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L106-L118)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L255-L284)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L231-L265)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L528-L534)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L535-L577)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L507-L519)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L314-L333)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L391-L405)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L443-L448)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L459-L478)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L535-L563)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L136-L154)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L41-L60)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L69-L124)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L153-L172)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/psyker_smite_targeting_action_module.lua#L32-L66)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L20-L67)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/warp_charge_action_module.lua#L19-L39)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L57-L102)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L169-L178)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L58-L85)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L116-L139)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L5-L8)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L26-L41)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L143-L184)

### 待確認事項

- 傷害與反噬例固定無其他加成；基礎能力與選取強化後的傷害不得混用。
- 本機 Steam Build 25606770 與固定公開來源版本對應為1.13.1；原始碼舊註解不當成已驗證的遊戲文字。

---

<a id="psyker_aura_ability_cooldown"></a>
## 基礎光環

機制來源：Release 1.13.2；固定 SHA：`ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`。

- 天賦識別碼：`psyker_aura_ability_cooldown`。

- 你與協同範圍內隊友的戰鬥技能冷卻縮短 7.5%；同一光環不重複套用。
- 只計此效果，40 秒冷卻變成 40 × (1 − 7.5%) = 37 秒。先知之眼替換為 10% 縮減時，則為 36 秒，不能把兩者加成相加。

- **光環進出**：以次數恢復的戰鬥技能，使用次數上限不變時，冷卻光環生效或消失會按原本的恢復比例調整進度。例如一份原需 40 秒恢復的能力，已恢復 50% 時獲得 7.5% 光環，完整冷卻變為 37 秒，仍保留 50% 進度，剩餘等待為 37 × (1 − 50%) = 18.5 秒；假設恢復速率固定且沒有其他效果。

### 原始碼確認與程式推導

psyker_archetype.lua 將 psyker_aura_ability_cooldown 列為 tier 1 基礎天賦。talent definition 以 coherency 模板連結 psyker_aura_ability_cooldown。模板設定 coherency_id、光環分類、max_stacks=talent_settings_3.coherency.max_stacks，並將 combat_ability_resource_cost_per_use_modifier 設為 -0.075；目前最大層數為 1。這表示每次戰鬥技能使用所需的冷卻資源減少 7.5%。

### 容量變動與光環進出

- **原始碼確認**：次數型能力的資源上限為 `最大使用次數 × 每次成本`；光環改變每次成本，因而改變整池上限。當上限變動、且未先走新增次數或減少次數的截斷分支時，共用更新先計算 `p = clamp01(變動前資源 ÷ 變動前上限)`，再設定 `變動後資源 = 新上限 × p`。這保留整池恢復比例，而不是原本的資源點數。

- **程式推導**：兩次使用共用同一池，若每次原成本 40、整池上限 80、目前資源 39，取得 7.5% 光環後每次成本 37、上限 74。先保留 `p = 39 ÷ 80 = 48.75%`，新資源為 `74 × 48.75% = 36.075`；可用次數仍為 `floor(36.075 ÷ 37) = 0`。假設每秒恢復 1 單位、恢復未暫停、沒有其他效果，還需 `37 − 36.075 = 0.925 秒` 才補回第一次。若只改成本卻保留 39 點，會越過 37 點門檻；1.13.2 在同一更新中先調整資源再結算次數。

- **必要邊界**：上述比例規則位於 `usage_cost_type == "charges"` 分支；純資源型能力仍走自己的容量處理。最大次數變更的補給／截斷分支有優先順序，不能將光環進出的算例套到所有換裝或重生狀態。資源取整、自然恢復、暫停與其他返還會影響實際可用時點；以上是靜態資源模型推導，未做遊戲內測試。

- [容量變動與分支順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L781-L827)｜[每次成本與光環修正](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1444-L1468)｜[整池上限](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1330-L1355)｜[自然恢復與次數門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L848-L884)。

### 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L59-L61)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L850-L868)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2625-L2643)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/talent/talent_settings_psyker.lua#L305-L309)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1435-L1466)

### 待確認事項

- 此數值來自 resource cost modifier；不同能力的充能、額外修正與實際恢復流程可能改變體感冷卻時間。
- 原文批次為 1.13.1／Steam Build 25606770；容量變動機制依 1.13.2，尚未取得 1.13.2 同版文本；未做遊戲內測試。

---

<a id="psyker_peril_passive"></a>
## 次元危險(Perils of the Warp)

- 天賦識別碼：`psyker_peril_passive`。

- 反噬上限為 100%，以 97% 作為高反噬門檻。反噬增加會延後自然消退；停止增加且回到待機狀態後，等待約 3 秒才開始自然消退。
- 3 秒是等待時間，不是從 100% 清空的時間。消退速率依反噬區間、武器與加成而變；也可主動平息。
- 超載並非單看「已到 100%」：即時增加路徑會在原本已達 100% 且再次增加時判定爆炸；持續施放路徑另檢查目前與開始時反噬。免於超載的效果另行處理。

### 原始碼確認與程式推導

psyker_peril_passive 本身提供顯示用格式值；主要執行參數在 archetype_warp_charge_templates.psyker。WarpCharge.update_observer 用 last_charge_at_t + auto_vent_delay 判斷等待是否結束，並要求 current_percentage>0、state=idle、等待期已過。Psyker 設定 auto_vent_delay=3。WarpCharge.check_new_state 在 current_percentage>=1 且 starting_percentage>=1 時將狀態轉為 exploding；模板將 critical_threshold 和 extreme_threshold 設為 0.97。

### 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L62-L64)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2606-L2627)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/warp_charge/archetype_warp_charge_templates.lua#L35-L49)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L28-L38)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L187-L237)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L5-L14)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L44-L70)

### 待確認事項

- 自動消散速度會依反噬區間、武器設定與其他修正變動；本檔不推算固定清空秒數。100% 爆炸判定同時檢查 current_percentage 與 starting_percentage。
- 本機 Steam Build 25606770 與固定公開來源版本對應為1.13.1；原始碼舊註解不當成已驗證的遊戲文字。

---
