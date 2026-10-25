# 敵後行動(Behind the Lines)：原始碼依據

[English](en/zealot_suppress_on_backstab_kill.md)

[返回玩家說明](README.md#zealot_suppress_on_backstab_kill)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_suppress_on_backstab_kill)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_suppress_on_backstab_kill`；名稱鍵：`loc_talent_zealot_suppress_on_backstab_kill`；描述鍵：`loc_talent_zealot_suppress_on_backstab_kill_desc`。
- 節點：`node_09a97b15-e79d-4953-a189-f24beac4a40d`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_kill並且on_heavy_hit、is_backstab；Suppression.apply_area_minion_suppression從持有者position、radius8、suppression200000、falloff=true。該數值是壓制量，不是傷害或持續秒數。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2800–2826](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2800-L2826)
- [scripts/settings/talent/talent_settings_zealot.lua：167–174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L167-L174)
- [scripts/utilities/attack/suppression.lua：87–150](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/suppression.lua#L87-L150)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2481–2503](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2481-L2503)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1890–1915](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1890-L1915)

## 算例條件與待確認事項

- **冷卻算例**：第 0 秒觸發後，第 2 秒再次重擊背刺擊殺不會再觸發；約第 5 秒起才可再次生效。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2ae92ad1`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_suppress_on_backstab_kill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/5d469457-ce3e-4c4f-ac25-c0759b30b61f)

圖片僅供技能辨識，不作機制證據。

