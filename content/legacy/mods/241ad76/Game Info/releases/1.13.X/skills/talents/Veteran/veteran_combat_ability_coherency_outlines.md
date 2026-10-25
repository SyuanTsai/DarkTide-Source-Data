# 目標引導增強(Enhanced Target Priority)：原始碼依據

[English](en/veteran_combat_ability_coherency_outlines.md)

[返回玩家說明](README.md#veteran_combat_ability_coherency_outlines)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_combat_ability_coherency_outlines`；名稱鍵：`loc_talent_veteran_combat_ability_coherency_outlines`；描述鍵：`loc_talent_veteran_combat_ability_coherency_outlines_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L781-L803)：`ability_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L406-L429)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 發放時機與接收端判定

- stance_master.start_func 設 apply_outlines=true；refresh_func 也把它設為 true。update_func 只在這個旗標為真時發放，完成後改 false，所以不是每一影格持續分享。
- 迴圈取 in_coherence_units，但明確排除 coherency_unit==owner；其他成員取得 outlines_coherency。它複製一般 outlines，duration 改為 coop_1.outline_short_duration=5、max_stacks=1、refresh_duration_on_stack=true。
- 接收端 _start_outlines 以接收者的位置計算距離，coherency_outline_buff 強制 elite/special 開啟、ranged_roamer/ogryn 關閉。_can_show_outline 先排除未啟用的 ogryn/monster/captain/cultist_captain，再判定 elite/special；非 special 需 distance²/50²<1。
- 候選輪廓清單在開始／重新計時時重建；後來才進入協同範圍的隊友不會在下一次發放前自動取得這次 buff。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 406–429 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L406-L429)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 129–160 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L129-L160)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 270–293 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L270-L293)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 141–198 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L141-L198)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 224–267 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L224-L267)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 375–465 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L375-L465)
- [scripts/settings/talent/talent_settings_veteran.lua，第 78–99 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L78-L99)
- [scripts/settings/talent/talent_settings_veteran.lua，第 158–160 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L158-L160)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_combat_ability_coherency_outlines.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/2afc79fa-02f2-4943-b4e7-abe35435f7bd)

圖片僅供技能辨識，不作機制證據。

