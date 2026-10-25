# 電子獒犬標記指令：原始碼依據

[English](en/adamant_command_dog_with_tag.md)

[返回基礎效果](BASE_EFFECTS.md#adamant_command_dog_with_tag)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`adamant_command_dog_with_tag`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 基礎天賦本身只有名稱／描述，但生效流程由職業專屬 smart tag 系統處理。HUD 讀 companion_command_tap=single 或 double_tap，傳入 is_double_tag；SmartTagExtension 依 archetype=adamant 選取 resolver，要求 enemy breed 且存在 companion，回傳 enemy_companion_target。
- enemy_companion_target 使用 unit_threat_companion 標記、lifetime=25，double_tag 群組上限 1。CompanionTagManagerBaseExtension 每次 update 查擁有者的該類標記；DogExtension 將存活有效目標寫入 whistle.current_target，移動平台會取消；未 aggro 的 daemonhost 不設定新目標。
- 選敵器先處理主人受制後的救援，再讀 whistle.current_target；需目標存活且取得攻擊 token。無效時清除，沒有有效指令目標才走戰鬥中的一般評分選敵。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L66-L68)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L30-L34)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/hud/elements/smart_tagging/hud_element_smart_tagging.lua#L246-L303)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smart_tag/smart_tag_extension.lua#L169-L194)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smart_tag/smart_tag_extension.lua#L238-L259)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/smart_tag/double_tag_settings.lua#L3-L12)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/smart_tag/double_tag/adamant_double_tag_settings.lua#L3-L18)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/smart_tag/double_tag/adamant_double_tag_templates.lua#L9-L20)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/smart_tag/smart_tag_settings.lua#L9-L15)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/companion_tag_manager/companion_tag_manager_base_extension.lua#L25-L50)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/companion_tag_manager/companion_tag_manager_dog_extension.lua#L12-L56)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L108-L203)

## 算例與待確認事項

- 指令目標 A 有效時優先追擊 A；改指定 B 後指令群組只保留一個目標。若主人受制且符合救援條件，救援先於這項追擊。
- 單按／連按取決於玩家輸入設定，不指定鍵盤或控制器實體按鍵。標記 25 秒是有效期間上限，不保證電子獒犬在這段期間持續攻擊或抵達目標。
- 救援仍受狀態進入後的 initial_target_disable_cooldown、目標與移動條件限制；未進行遊戲內操作測試。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
