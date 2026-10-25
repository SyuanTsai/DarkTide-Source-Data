# 鎖定目標(Focus Target!)：原始碼依據

[English](en/veteran_improved_tag.md)

[返回玩家說明](README.md#veteran_improved_tag)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_improved_tag`；名稱鍵：`loc_talent_veteran_improved_tag`；描述鍵：`loc_talent_veteran_improved_tag_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1913-L1946)：`keystone`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2978-L3020)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 儲存層數與目標層數

- template_data.stacks 是自身儲存量，初始 1，每 1.5 秒增 1，基礎上限 4；stacks_applied 是目前目標已套用的層數，兩者不能混用。on_tag_unit 只接受本人發出的 enemy_over_here_veteran 標記。
- 先設定 remove_t=t+25。同一目標時 stacks_to_apply=stacks-stacks_applied；若差額 <=0，直接返回，所以只刷新標記時間，不降低目標層數，也不重設自身儲存量。若差額 >0，補足新層數並將儲存量重設為 1。更換目標則移除舊外部 buff，對新目標套用目前全部儲存層數，再歸 1。
- 層數自然增加不會自動更新已標記目標。目標死亡不要求 owner 親自擊殺，但必須 params.dying_unit==outlined_unit；處理獎勵後將儲存量提高至 max(目前值,2)。
- 目標 debuff 的 damage_taken_multiplier=1.05，max_stacks=6；Buff 逐層乘算，N 層為 1.05^N。傷害計算在目標承傷階段套用，並不只限標記者的攻擊。4 層=1.21550625 倍。
- 標記 25 秒到期會移除該標記者維持的目標 debuff 與 outlined_unit；到期後才死亡不會發放此標記的死亡獎勵。

## 原始碼依據

- [scripts/settings/talent/talent_settings_veteran.lua，第 40–45 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L40-L45)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2978–3020 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2978-L3020)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3212–3335 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3212-L3335)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3368–3418 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3368-L3418)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3479–3486 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3479-L3486)
- [scripts/settings/buff/buff_settings.lua，第 775–775 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L775-L775)
- [scripts/utilities/attack/damage_calculation.lua，第 587–614 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/extension_systems/smart_tag/smart_tag_extension.lua，第 205–217 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smart_tag/smart_tag_extension.lua#L205-L217)
- [scripts/extension_systems/buff/buffs/buff.lua，第 404–410 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410)
- [scripts/extension_systems/buff/buffs/buff.lua，第 689–747 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 1.5 秒累積與 25 秒到期由伺服器影格更新，顯示時點可能略晚於理論值。多人同時標記同一敵人的共享上限與各自移除順序需另行遊戲實測；算例以一名標記者計算。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone/veteran_improved_tag.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/85048589-7642-40e7-9d4b-ab325da2ea25)

圖片僅供技能辨識，不作機制證據。

