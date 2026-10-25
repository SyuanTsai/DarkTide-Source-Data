# 亞空間加速(Warp Speed)：原始碼依據

[English](en/psyker_overcharge_increased_movement_speed.md)

[返回玩家說明](README.md#psyker_overcharge_increased_movement_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_overcharge_increased_movement_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_overcharge_increased_movement_speed`；名稱鍵：`loc_ability_psyker_overcharge_movement_speed`；描述鍵：`loc_ability_psyker_overcharge_movement_speed_description`。
- 節點：`node_229f2961-ef6f-4ccb-942e-8c4945f1f90f`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦加上 psyker_overcharge_increased_movement_speed 被動；模板設定 conditional_stat_buffs.movement_speed=0.2，只有 buff_extension 回報存在 psyker_overcharge 關鍵字才啟用。這與注視結束時另行建立、持續10秒的傷害buff是分開效果。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：561–581](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L561-L581)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1245–1262](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1245-L1262)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1134–1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1134-L1149)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：561–581](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L561-L581)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：616–638](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L616-L638)

## 算例條件與待確認事項

- 無其他加成，5 × (1 + 20%) = 6 公尺／秒。
- 程式碼證明的是 movement_speed stat 欄位；角色最後位移速度仍可能同時受其它移速來源/上限影響。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5f1da172`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_overcharge_increased_movement_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/f9987bfc-f9d7-48d8-9431-8c361223c50e)

圖片僅供技能辨識，不作機制證據。

