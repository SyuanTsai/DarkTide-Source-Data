# 迅如疾風(Like the Wind)：基礎被動：原始碼依據

[English](en/broker_passive_improved_sprint_dodge.md)

[返回基礎效果](BASE_EFFECTS.md#broker_passive_improved_sprint_dodge)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`broker_passive_improved_sprint_dodge`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- broker_archetype.lua 將 broker_passive_improved_sprint_dodge 列為預設基礎天賦。天賦同時套用 broker_passive_improved_sprint_dodge 與 broker_passive_increased_dodges 兩個 buff：前者降低 sprint dodge 角度門檻並帶有 sprint_dodge_in_overtime 關鍵字；後者提供 extra_consecutive_dodges=1。
- 角色基礎衝刺閃避角度常數為 70°；Sprint.is_sprint_dodging 以 70° 減去 stat_buffs.sprint_dodge_reduce_angle_threshold_rad，再與來襲敵人相對於玩家朝向的夾角比較。巢都渣滓減少 15°，故實際門檻為 70°−15°=55°；閃避判定採 look_away_angle 大於該門檻。
- 衝刺體力耗盡時，衝刺狀態將 sprint_overtime 設為正值；一般不允許此狀態觸發 sprint dodge。基礎被動所帶的 sprint_dodge_in_overtime 關鍵字會讓 Sprint.is_sprint_dodging 通過此檢查。
- 連續閃避的衰減起始值由武器 dodge_template.diminishing_return_start（缺省 2）加上 extra_consecutive_dodges 計算；此被動增加 1。實際起始計數需看目前武器的模板，且之後仍依該武器衰減規則計算。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L65-L67)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L29-L59)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L228-L233)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L307-L312)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1032-L1038)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1325-L1341)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/sprint.lua#L141-L180)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua#L348-L369)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L246-L260)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L49-L59)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/sprint.lua#L10-L18)

## 算例與待確認事項

- 基準衝刺閃避門檻 70°，套用 15° 修正後為 55°；若來襲方向夾角為 60°，原門檻不成立，套用被動後則高於 55° 而成立。
- 若武器模板的衰減起始值為 2，額外 +1 後起始值為 3；若武器模板設定不同，實際數字隨之改變。
- 此被動只影響衝刺中的遠程攻擊閃避判定角度與體力耗盡後的衝刺加時判定，不能視為所有閃避方向、時長或距離都增加。
- 連續閃避的總有效次數仍由武器 dodge_template 與衰減設定決定；+1 是加在武器模板的衰減起始值上。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
