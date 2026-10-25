# 絕境中繼(Last Stand Relay)：原始碼依據

[English](en/cryptic_crit_chance_based_on_charge.md)

[返回玩家說明](README.md#cryptic_crit_chance_based_on_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_crit_chance_based_on_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_crit_chance_based_on_charge`；名稱鍵：`loc_talent_cryptic_crit_chance_based_on_charge`；描述鍵：`loc_talent_cryptic_crit_chance_based_on_charge_zero_desc`。
- 節點：`node_4d6556fa-f80a-4e6d-9c7d-a217abe950ee`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- conditional當remaining_ability_charges<=0增加0.04；常駐critical_strike_chance0.06。基礎7.5%例取archetype。

## 原始碼依據

- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1058–1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1058-L1075)
- [scripts/settings/archetype/archetypes/cryptic_archetype.lua：14–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L14-L24)
- [scripts/settings/talent/talent_settings_cryptic.lua：589–593](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L589-L593)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3156–3175](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3156-L3175)
- [scripts/utilities/attack/critical_strike.lua：10–38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L10-L38)
- [scripts/settings/archetype/archetypes/cryptic_archetype.lua：25–26](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L25-L26)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2357–2381](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2357-L2381)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：672–701](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L672-L701)

## 算例條件與待確認事項

- **機率算例**：假設原本爆擊率 7.5%，有完整電容量時為 7.5% + 6% = 13.5%；沒有完整一份時為 7.5% + 6% + 4% = 17.5%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`dd636885`。
- 原文一致；補充條件依完整份數，百分比以機率百分點相加。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_crit_chance_based_on_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/5e8556aa-e9d9-4400-a863-bb26a5f11e17)

圖片僅供技能辨識，不作機制證據。

