# 臨場發揮(Field Improvisation)：原始碼依據

[English](en/veteran_better_deployables.md)

[返回玩家說明](README.md#veteran_better_deployables)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_better_deployables`；名稱鍵：`loc_talent_veteran_better_deployables`；描述鍵：`loc_talent_veteran_better_deployables_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1142-L1172)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1967-L1987)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

keyword improved_medical_crate/improved_ammo_pickups；ammo interaction掃全side.player_units，不要求持有人放置或在協同內。medkit初始化掃全隊keyword並快取，heal_multiplier2、permanent_damage_multiplier0.5、toughness0.01/s。醫療箱半徑3、基礎heal_rate0.06，reserve500/time300不因技能擴大；倒地另乘0.1治療速度。reduce_permanent_damage保留已失去wound之固定腐敗下限。禁止撿手雷職業依special_rule另行排除。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1967–1987 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1967-L1987)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2379–2386 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2379-L2386)
- [scripts/settings/buff/buff_settings.lua，第 1080–1085 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1080-L1085)
- [scripts/extension_systems/interaction/interactions/ammunition_interaction.lua，第 99–146 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/ammunition_interaction.lua#L99-L146)
- [scripts/settings/deployables/templates/medical_crate.lua，第 4–19 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/deployables/templates/medical_crate.lua#L4-L19)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_heal.lua，第 30–54 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_heal.lua#L30-L54)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_heal.lua，第 99–141 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_heal.lua#L99-L141)
- [scripts/extension_systems/health/player_unit_health_extension.lua，第 270–286 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L270-L286)
- [scripts/extension_systems/interaction/interactions/ammunition_interaction.lua，第 73–83 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/ammunition_interaction.lua#L73-L83)
- [scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua，第 3–23 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua#L3-L23)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_better_deployables.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/aba3bef3-ec36-4b94-8097-95a2f43d593e)

圖片僅供技能辨識，不作機制證據。

