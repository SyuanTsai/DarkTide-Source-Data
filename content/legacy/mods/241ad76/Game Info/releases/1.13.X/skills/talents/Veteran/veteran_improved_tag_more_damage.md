# 集中火力(Focused Fire)：原始碼依據

[English](en/veteran_improved_tag_more_damage.md)

[返回玩家說明](README.md#veteran_improved_tag_more_damage)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_improved_tag_more_damage`；名稱鍵：`loc_talent_veteran_improved_tag_more_damage`；描述鍵：`loc_talent_veteran_improved_tag_more_damage_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1993-L2015)：`keystone_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3075-L3096)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 上限與連動

- veteran_improved_tag_more_damage special rule 將被動 max_stacks 從 4 改為 6；每層時間仍 1.5 秒，目標每層 damage_taken_multiplier 仍 1.05。
- 六層公式 1.05^6=1.340095640625，並非 1+.05×6。Buff 的 multiplicative_multiplier 逐層相乘。
- 若另有 dead_bonus，恢復量上限隨實際標記層數達 .05×6=.30；若另有 dead_coherency_bonus，改發 allied_buff_increased_stacks，max_stacks=6、每層 damage=.025，合計 .15。
- 只提高儲存與相關上限；既有目標不會因自身層數自然增加而自動補強，仍需重新標記。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 3075–3096 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3075-L3096)
- [scripts/settings/talent/talent_settings_veteran.lua，第 40–45 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L40-L45)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3337–3352 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3337-L3352)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3479–3504 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3479-L3504)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3286–3309 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3286-L3309)
- [scripts/extension_systems/buff/buffs/buff.lua，第 689–747 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)
- [scripts/settings/buff/buff_settings.lua，第 763–775 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L775)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3251–3284 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3251-L3284)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_improved_tag_more_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/a95c5ea6-546f-462d-a073-56f9d1a21103)

圖片僅供技能辨識，不作機制證據。

