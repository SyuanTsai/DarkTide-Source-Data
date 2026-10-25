# 擊殺紀錄(Confirmed Kill)：原始碼依據

[English](en/veteran_elite_kills_replenish_toughness.md)

[返回玩家說明](README.md#veteran_elite_kills_replenish_toughness)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_elite_kills_replenish_toughness`；名稱鍵：`loc_talent_veteran_toughness_on_elite_kill`；描述鍵：`loc_talent_veteran_toughness_on_elite_kill_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1282-L1309)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1480-L1503)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

on_kill過elite/special檢查，立即補0.1並新增獨立effect。effect沒有max_stacks或refresh_on_stack，各instance按dt補0.02共10秒，不能說再次觸發僅重新計時。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1480–1503 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1480-L1503)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1376–1410 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1376-L1410)
- [scripts/settings/talent/talent_settings_veteran.lua，第 116–120 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L116-L120)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 439–481 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L481)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_elite_kills_replenish_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/706a5b5b-5f7b-43bc-bbd0-7debf024671b)

圖片僅供技能辨識，不作機制證據。

