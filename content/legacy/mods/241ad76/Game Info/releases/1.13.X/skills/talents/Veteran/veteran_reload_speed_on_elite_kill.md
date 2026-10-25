# 齊射能手(Volley Adept)：原始碼依據

[English](en/veteran_reload_speed_on_elite_kill.md)

[返回玩家說明](README.md#veteran_reload_speed_on_elite_kill)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_reload_speed_on_elite_kill`；名稱鍵：`loc_talent_veteran_reload_speed_on_elite_kill`；描述鍵：`loc_talent_veteran_reload_speed_on_elite_kill_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L96-L124)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L987-L1003)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

擊殺事件透過 on_elite_or_special_kill 觸發 reload_speed = 0.30，並在 on_reload 補彈事件標記為已消耗；條件 buff 在該次裝填結束後退出。reload speed 為加算速度修正：單獨倍率 1.30，兩項同時為 1 + .25 + .30 = 1.55；4 ÷ 1.30 ≈ 3.08 秒，4 ÷ 1.55 ≈ 2.58 秒。[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L987-L1003) → [觸發與消耗條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1307-L1367)；[速度時間換算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L383-L429)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 987–1003 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L987-L1003)
- [scripts/settings/talent/talent_settings_veteran.lua，第 181–183 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L181-L183)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1307–1367 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1307-L1367)
- [scripts/settings/buff/buff_settings.lua，第 960–961 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L960-L961)
- [scripts/utilities/action/action_handler.lua，第 383–429 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L383-L429)
- [scripts/extension_systems/weapon/actions/action_reload_state.lua，第 91–114 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_reload_state.lua#L91-L114)
- [scripts/utilities/action/action_handler.lua，第 356–365 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua，第 120–134 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L134)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 補彈事件在一次裝填中的精確時點依武器 reload action 而異；文字只承諾此效果由下一次裝填事件消耗。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_reload_speed_on_elite_kill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/009ef44a-cf3d-44cf-ac8b-cda57c6fd83d)

圖片僅供技能辨識，不作機制證據。

