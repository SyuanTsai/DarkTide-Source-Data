# 拾荒者(Scavenger)

[English](en/veteran_aura_gain_ammo_on_elite_kill.md)

[返回基礎效果](BASE_EFFECTS.md)｜[技能樹索引](SOURCE_INDEX.md)

## 運作方式

- 你或受到這個光環影響的隊友擊殺精英、專家敵人時，為擊殺者及其協同範圍內的隊友補充最大備用彈藥量的 0.25%；光環觸發冷卻為 5 秒。
- 最大備用彈藥 400 發時，一次補給為 `400 × 0.25% = 1 發`。不足一發的部分會累積到後續補給，不會每次直接捨棄。
- 補入備用彈藥，不會直接裝填；最多補至備用彈藥上限加上彈匣缺少的彈量。生存專家光環將這項比例提高至 0.5%，不是再額外加上 0.5%。

## 原始碼確認與程式推導

- 固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。基礎天賦 `veteran_aura_gain_ammo_on_elite_kill`；名稱鍵 `loc_talent_veteran_elite_kills_grant_ammo_coop`；描述鍵 `loc_talent_veteran_elite_kills_grant_ammo_coop_cd_desc`。
- 由職業基礎清單啟用，不是77個技能樹節點之外的額外可選節點。

- 基礎 aura identifier=veteran_aura、priority=1；改良版相同identifier、priority=2，選用時取高優先序，並非兩個比例相加。
- 每個接收光環的單位各有 proc_buff；on_minion_death 的 check_proc 只檢查 elite/special。proc_func 另要求 template_context.unit==params.attacking_unit，才遍歷擊殺者的 in_coherence_units。集合包含本人。
- ProcBuff 在 check成功後呼叫 proc_func，再無條件更新 _active_start_time；所以即使 proc_func 因「不是本人的擊殺」而早退，也可能令該接收者這份光環進入5秒冷卻。主文的補給條件需連同冷卻理解，並不保證每次本人擊殺都另開一次補給。
- 每槽 amount=max_reserve×.0025+carryover；floor後餘數保留，新備用彈藥=min(原備用彈藥+整數補給,max_reserve+missing_clip)。殺手自己的1%基礎被動是另一份buff、另計5秒，可同次生效。


## 原始碼依據

- [scripts/settings/archetype/archetypes/veteran_archetype.lua，第 50–74 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 646–666 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L646-L666)
- [scripts/settings/talent/talent_settings_veteran.lua，第 105–109 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L105-L109)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1488–1596 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1488-L1596)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua，第 196–206 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L196-L206)
- [scripts/extension_systems/buff/buffs/proc_buff.lua，第 310–350 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L310-L350)
- [scripts/extension_systems/coherency/coherency_system.lua，第 188–255 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255)
- [scripts/utilities/ammo.lua，第 494–529 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L529)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua，第 256–311 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311)

## 圖示來源

圖片僅供技能辨識，不作機制證據。

