# 火力反擊(Counter-Fire)：原始碼依據

[English](en/veteran_combat_ability_ranged_roamer_outlines.md)

[返回玩家說明](README.md#veteran_combat_ability_ranged_roamer_outlines)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_combat_ability_ranged_roamer_outlines`；名稱鍵：`loc_talent_veteran_combat_ability_ranged_enemies_outlines`；描述鍵：`loc_talent_veteran_combat_ability_ranged_enemies_outlines_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L832-L857)：`ability_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L353-L372)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 額外目標與刷新

- 此節點只加入 veteran_combat_ability_ranged_roamer_outlines special rule。_can_show_outline 在規則啟用時接受 breed.volley_fire_target；仍先排除未啟用的 ogryn／monster／captain 類。普通遠程敵人對應例包括 renegade_rifleman 與 cultist_assault。
- _start_outlines 對非 special 候選要求距離平方 <50²；此距離只用於建立可見輪廓清單。stance_master.check_proc_func 的延長判定只有本人擊殺及 _can_show_outline，不要求遠程攻擊、實際輪廓已顯示或符合 50 公尺。
- 符合擊殺時重新加入 stance_master 同名 buff，refresh_duration_on_stack 把有效期重新設為完整 6 秒；ogryn_outlines 對應的 master 複製模板則是 9 秒。
- 節點 name 中的 weakspot 字樣與任何未接入的 format 值，都不能作為新增弱點傷害的依據；可執行效果為目標類型擴充。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 353–372 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L353-L372)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 374–477 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L374-L477)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 129–198 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L129-L198)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 222–223 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L222-L223)
- [scripts/settings/talent/talent_settings_veteran.lua，第 78–99 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L78-L99)
- [scripts/settings/breed/breeds/renegade/renegade_rifleman_breed.lua，第 45–71 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/renegade/renegade_rifleman_breed.lua#L45-L71)
- [scripts/settings/breed/breeds/cultist/cultist_assault_breed.lua，第 45–69 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/cultist/cultist_assault_breed.lua#L45-L69)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_combat_ability_ranged_roamer_outlines.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/ca186661-9499-4f3f-9449-596caa35b7b6)

圖片僅供技能辨識，不作機制證據。

