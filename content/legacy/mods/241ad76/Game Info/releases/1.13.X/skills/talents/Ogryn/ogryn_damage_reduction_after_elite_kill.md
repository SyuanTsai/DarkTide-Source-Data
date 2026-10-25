# 大肌肌(Strongman)：原始碼依據

[English](en/ogryn_damage_reduction_after_elite_kill.md)

[返回玩家說明](README.md#ogryn_damage_reduction_after_elite_kill)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_damage_reduction_after_elite_kill)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_damage_reduction_after_elite_kill`；名稱鍵：`loc_talent_ogryn_damage_reduction_after_elite_kill_name`；描述鍵：`loc_talent_ogryn_damage_reduction_after_elite_kill_desc`。
- 節點：`node_848294a5-dd6e-4636-8990-f059c331ebb3`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_elite_or_special_kill；damage_taken_multiplier .9 active5 allow_proc_while_active。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2727–2745](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2727-L2745)
- [scripts/settings/talent/talent_settings_ogryn.lua：45–48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L45-L48)
- [scripts/utilities/attack/damage_calculation.lua：587–612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1979–2001](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1979-L2001)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1845–1873](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1845-L1873)

## 算例條件與待確認事項

- **減傷算例**：只計此效果，100 點變成 90 點；另有獨立 20% 減傷時為 100 × 0.9 × 0.8 = 72 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fb76eb37`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_damage_reduction_after_elite_kill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/6fbf8a63-5e26-482f-9964-01eb0598b142)

圖片僅供技能辨識，不作機制證據。

