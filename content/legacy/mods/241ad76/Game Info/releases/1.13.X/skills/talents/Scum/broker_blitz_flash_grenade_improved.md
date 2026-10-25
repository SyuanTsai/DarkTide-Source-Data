# 擊暈(Blackout)：原始碼依據

[English](en/broker_blitz_flash_grenade_improved.md)

[返回玩家說明](README.md#broker_blitz_flash_grenade_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_blitz_flash_grenade_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_blitz_flash_grenade_improved`；名稱鍵：`loc_talent_broker_blitz_flash_grenade_improved`；描述鍵：`loc_talent_broker_blitz_flash_grenade_improved_desc`。
- 節點：`node_90db015f-623c-44a1-b981-fce3bee1abb5`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 改良節點只替換PlayerAbility到5充能；原本base的quick_flash_grenade specialrule與blitz_charge_on_kill仍存在。改選飛彈／毒手雷會以identifier移除它們。
- 普通on_close_kill不限定melee；滿充能時函式不增加tracked_kills。針槍特例距離依params.attacking_unit計，不另驗證最後owner。
- 爆炸近外圈attack distribution及ADM均0；碰撞另有impact profile，因此主文只說爆炸不傷害，不能說整顆手雷任何命中皆無傷。

## 原始碼依據

- [scripts/settings/talent/talent_settings_broker.lua：191–204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L204)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：227–242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L227-L242)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua：129–159](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L129-L159)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua：103–154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L103-L154)
- [scripts/settings/projectile/player_projectile_templates.lua：1248–1263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1248-L1263)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1654–1717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1654-L1717)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：298–317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L298-L317)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：777–791](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L791)
- [scripts/settings/buff/broker_buff_utils.lua：99–190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [scripts/settings/talent/talent_settings_broker.lua：191–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L205)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：640–667](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L640-L667)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：266–294](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L266-L294)

## 算例條件與待確認事項

- **補充算例**：目前有 2 顆、已累計 19 次，下一次符合距離的擊殺後變成 3 顆，進度歸零。搭配額外彈藥袋時，上限為 5 + 1 = 6 顆。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`44ce3a9a`。
- 繁中明寫每20次「近戰擊殺」，同源英文是Close Range Kills，固定程式亦不限定近戰。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/tactical/broker_blitz_flash_grenade_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/fd2156cb-6e65-4214-bd01-ab0b28665714)

圖片僅供技能辨識，不作機制證據。

