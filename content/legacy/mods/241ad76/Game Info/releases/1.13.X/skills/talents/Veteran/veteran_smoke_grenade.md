# 煙霧手雷(Smoke Grenade)：原始碼依據

[English](en/veteran_smoke_grenade.md)

[返回玩家說明](README.md#veteran_smoke_grenade)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_smoke_grenade`；名稱鍵：`loc_ability_smoke_grenade`；描述鍵：`loc_ability_smoke_grenade_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L266-L294)：`tactical`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L65-L84)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

talent置換為smoke ability，max3只耗charges。spawn parameters覆蓋SmokeFogExtension預設30秒為15秒，inner4.5 outer5.5，block_line_of_sight=true；inner sphere線段交會決定LoS，breed.ignore_smoke_fog_los可豁免。in_smoke_fog給concealed與hud_nameplates_disabled，left_smoke_fog持續0.5s；不是damage_immune。煙霧爆炸模板另有衝擊與壓制，不能把其爆炸radius10m當煙霧遮蔽radius。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 65–84 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L65-L84)
- [scripts/settings/projectile/player_projectile_templates.lua，第 734–759 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L734-L759)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 39–50 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L39-L50)
- [scripts/settings/talent/talent_settings_veteran.lua，第 9–11 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L9-L11)
- [scripts/extension_systems/smoke_fog/smoke_fog_extension.lua，第 29–62 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smoke_fog/smoke_fog_extension.lua#L29-L62)
- [scripts/extension_systems/smoke_fog/smoke_fog_system.lua，第 220–284 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smoke_fog/smoke_fog_system.lua#L220-L284)
- [scripts/settings/buff/weapon_buff_templates.lua，第 1271–1298 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1271-L1298)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua，第 258–280 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L258-L280)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 專家敵人對煙霧的個別行為與已發動攻擊未逐敵人實測。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/tactical/veteran_smoke_grenade.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/7b9b7141-a7fa-4f3b-944f-5f1141cdc04e)

圖片僅供技能辨識，不作機制證據。

