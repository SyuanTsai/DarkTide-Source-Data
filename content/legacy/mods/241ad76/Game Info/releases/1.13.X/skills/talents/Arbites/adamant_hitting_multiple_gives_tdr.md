# 苛政壓制(Suppression Protocols)：原始碼依據

[English](en/adamant_hitting_multiple_gives_tdr.md)

[返回玩家說明](README.md#adamant_hitting_multiple_gives_tdr)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_hitting_multiple_gives_tdr)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_hitting_multiple_gives_tdr`；名稱鍵：`loc_talent_adamant_hitting_multiple_gives_tdr`；描述鍵：`loc_talent_adamant_hitting_multiple_gives_tdr_desc`。
- 節點：`node_edc914ed-dc63-47f0-b8e5-97a051892616`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit僅檢查target_number==3，無attack_type限制，active_duration5、toughness_damage_taken_multiplier=.8。不隨目標數增加倍率。

## 原始碼依據

- [scripts/utilities/attack/damage_taken_calculation.lua：234–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：303–357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua：251–255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L251-L255)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2621–2641](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2621-L2641)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1407–1433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1407-L1433)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：780–805](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L780-L805)

## 算例條件與待確認事項

- **減傷算例**：單計這項效果，100 點韌性傷害變成 100 × 0.8 = 80 點；另有獨立 10% 韌性減傷時，為 100 × 0.8 × 0.9 = 72 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2e6f11ec`。
- 繁中「一擊…以上」與英文 Hitting…or more…an Attack 一致，門檻及韌性作用對象一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_hitting_multiple_gives_tdr.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/02fd58ae-50fc-461f-879d-70d77a2aff44)

圖片僅供技能辨識，不作機制證據。

