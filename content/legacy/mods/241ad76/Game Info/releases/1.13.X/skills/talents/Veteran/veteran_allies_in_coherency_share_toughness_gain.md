# 天生領袖(Born Leader)：原始碼依據

[English](en/veteran_allies_in_coherency_share_toughness_gain.md)

[返回玩家說明](README.md#veteran_allies_in_coherency_share_toughness_gain)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_allies_in_coherency_share_toughness_gain`；名稱鍵：`loc_talent_veteran_allies_share_toughness`；描述鍵：`loc_talent_veteran_allies_share_toughness_coherency_increase_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L941-L970)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2341-L2361)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

passive 加 coherency_radius_modifier=.5；coherency_radius_modifier 為 additive multiplier，以1為基底，半徑倍率1.5。on_toughness_replenished proc 讀 params.amount，計算 amount×.2，再對其他 in_coherence_units 呼叫 replenish_flat；reason=shared 時直接 return，阻止遞迴分享。Toughness extension 事件中的 amount 是 wanted/requested_amount，而 recovered_amount 是另一欄，因此若請求20但自身只缺2，隊友每人仍收到請求值的20%=4（各自恢復同樣受其缺失量封頂）。[天賦值與半徑](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2341-L2361) → [共享百分比與半徑設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L266-L269) → [韌性分享、協同範圍與防連鎖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2330-L2377) → [amount 與 recovered_amount 的區別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L477-L490)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2341–2361 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2341-L2361)
- [scripts/settings/talent/talent_settings_veteran.lua，第 266–269 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L266-L269)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2330–2377 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2330-L2377)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 477–490 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L477-L490)
- [scripts/settings/buff/buff_settings.lua，第 728–728 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L728-L728)
- [scripts/settings/buff/buff_settings.lua，第 1048–1058 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 253–285 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 296–322 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L296-L322)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua，第 145–161 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L145-L161)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 根據固定 SHA 可確認分享使用事件 amount 而非 recovered_amount；若遊戲設計意圖應依實際恢復量，需由設計方確認。
- 未把具體公尺數寫入主文；該能力只驗證協同成員，不另設此 talent 專屬距離值。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_allies_in_coherency_share_toughness_gain.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/1a08688e-e370-4eac-a27e-fd48da3b3965)

圖片僅供技能辨識，不作機制證據。

