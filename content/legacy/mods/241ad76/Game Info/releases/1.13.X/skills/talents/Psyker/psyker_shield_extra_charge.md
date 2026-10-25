# 強化護盾(Bolstered Shield)：原始碼依據

[English](en/psyker_shield_extra_charge.md)

[返回玩家說明](README.md#psyker_shield_extra_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_shield_extra_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_shield_extra_charge`；名稱鍵：`loc_talent_psyker_force_field_charges`；描述鍵：`loc_talent_psyker_force_field_charges_description`。
- 節點：`node_a10c7d87-9c54-4268-b6be-ca862dcc59ae`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 額外充能被動提供 ability_extra_charges=1；基礎 max_charges=1，強化能力 psyker_force_field_improved 因而最多2格。玩家能力擴展把每格費用設為40秒，恢復速率為每秒1資源單位；resource是同一池，charges以floor(resource/cost_per_charge)計算，部分充能保留。設為兩格後最大資源是80單位；在不受修正時，完全空格至第一格40秒、第二格80秒。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1902–1928](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1902-L1928)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：456–463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L456-L463)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua：27–59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L27-L59)
- [scripts/settings/talent/talent_settings_psyker.lua：266–280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L266-L280)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：839–880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L880)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1037–1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1037-L1075)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1323–1348](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1323-L1348)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：734–772](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L772)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1902–1928](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1902-L1928)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1104–1131](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1104-L1131)

## 算例條件與待確認事項

- 兩次充能都用完，恢復1/秒，沒有其它冷卻資源效果。 40單位/格×2格=80單位；80÷1/秒=80秒。 約40秒恢復第一格，約80秒恢復第二格。
- 每格的顯示和恢復仍受任何全局冷卻資源修正、光環、擊殺恢復等影響。
- 此人才額外加一格；不表示每次部署的護盾耐久或持續時間增加。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5d19ee30`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_shield_extra_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/72b10287-7ce1-47a1-a57f-a88c56c51f9f)

圖片僅供技能辨識，不作機制證據。

