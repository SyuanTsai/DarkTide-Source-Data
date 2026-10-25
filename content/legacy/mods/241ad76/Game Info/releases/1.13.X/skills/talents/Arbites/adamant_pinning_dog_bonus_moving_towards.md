# 不落人後(Not Far Behind)：原始碼依據

[English](en/adamant_pinning_dog_bonus_moving_towards.md)

[返回玩家說明](README.md#adamant_pinning_dog_bonus_moving_towards)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_pinning_dog_bonus_moving_towards)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_pinning_dog_bonus_moving_towards`；名稱鍵：`loc_talent_adamant_pinning_dog_bonus_moving_towards`；描述鍵：`loc_talent_adamant_pinning_dog_bonus_moving_towards_description`。
- 節點：`node_8cd57c7e-dccf-4dd5-9829-c953101e1d34`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- proc buff 監聽 on_player_companion_pounce，收到事件時建立 adamant_pinning_dog_bonus_moving_towards_buff；條件不要求猛撲擊殺或命中。
- 子效果 max_stacks=1、duration=5、refresh_duration_on_stack=true，提供 damage=0.10、movement_speed=0.10。
- 程式碼核對固定至公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；此公開程式碼與本機繁中／英文文字版本對應為1.13.1。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2852–2876](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2852-L2876)
- [scripts/settings/talent/talent_settings_adamant.lua：462–466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L462-L466)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2911–2939](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2911-L2939)
- [scripts/utilities/attack/damage_calculation.lua：587–615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L615)
- [scripts/utilities/attack/damage_calculation.lua：236–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2852–2876](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2852-L2876)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1827–1851](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1827-L1851)

## 算例條件與待確認事項

- 每次猛撲事件建立或重新計時 5 秒效果；其間 100 點基礎傷害單獨套用 +10% 後為 110 點。
- 猛撲事件本身的觸發條件由電子獒犬能力決定；此項效果只依事件啟動。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`478147b4`。
- 繁中「猛撲後移動速度提高 10%，傷害提高 10%，持續 5 秒」對應英文 “Gain 10% Movement Speed and 10% Damage for 5s after Pounce”；一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_pinning_dog_bonus_moving_towards.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/0633a2b7-e8e9-4215-85a9-f54ae4d95809)

圖片僅供技能辨識，不作機制證據。

