# 實踐效率(Practiced Efficiency)

[English](en/veteran_survivalist_passive.md)

[返回基礎效果](BASE_EFFECTS.md)｜[技能樹索引](SOURCE_INDEX.md)

## 運作方式

- 親自擊殺精英或專家敵人時，補充自己最大備用彈藥量的 1%，每 5 秒最多觸發一次。
- 最大備用彈藥 400 發時，一次補充 `400 × 1% = 4 發`。不足一發的部分累積到後續補給；直接補入備用彈藥，不會裝填。
- 這份個人補給與拾荒者／生存專家光環分開計算。若1%被動與0.5%光環同次觸發，最大備用彈藥400發時，本人合計得到 `400 × (1% + 0.5%) = 6 發`，仍受可補充彈量上限限制。

## 原始碼確認與程式推導

- 固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。基礎天賦 `veteran_survivalist_passive`；名稱鍵 `loc_talent_veteran_survivalist_passive`；描述鍵 `loc_talent_veteran_survivalist_passive_desc`。
- 由職業基礎清單啟用，不是77個技能樹節點之外的額外可選節點。

- 職業基礎清單直接啟用 veteran_survivalist_passive，與光環不是同一個identifier。template使用on_kill、cooldown_duration=5；實際後一個check_proc_func覆蓋前者，檢查tags.elite or tags.special。on_kill本身由本人攻擊造成死亡時發送，params.tags包含目標分類。
- 伺服器proc只對template_context.unit呼叫Ammo.add_to_all_slots(.01)，不分享給隊友。
- 每槽floor(max_reserve×.01+carryover)，餘數保留；備用彈藥上限允許到max_reserve+missing_clip。與光環共享每槽餘數記帳，但各自buff冷卻。
- 名稱採識別碼的描述性暫譯；原定義殘留name="Guardsman"，不能據此寫成另一份傷害加成。


## 原始碼依據

- [scripts/settings/archetype/archetypes/veteran_archetype.lua，第 50–74 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1417–1436 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1417-L1436)
- [scripts/settings/talent/talent_settings_veteran.lua，第 67–70 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L67-L70)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3529–3556 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3529-L3556)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua，第 196–206 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L196-L206)
- [scripts/utilities/attack/attack.lua，第 669–709 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L709)
- [scripts/utilities/ammo.lua，第 494–529 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L529)
- [scripts/extension_systems/buff/buffs/proc_buff.lua，第 150–181 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L181)

## 圖示來源

圖片僅供技能辨識，不作機制證據。

