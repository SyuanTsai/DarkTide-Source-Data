# 跺殺之靴(Stomping Boots)：原始碼依據

[English](en/ogryn_charge_toughness.md)

[返回玩家說明](README.md#ogryn_charge_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_charge_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_charge_toughness`；名稱鍵：`loc_talent_ogryn_toughness_on_bull_rush`；描述鍵：`loc_talent_ogryn_toughness_on_bull_rush_desc`。
- 節點：`node_6639c593-e867-4ee5-9536-b01124b5aa53`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦被動 ogryn_bull_rush_hits_replenish_toughness 僅接受 damage_type=ogryn_lunge 的 on_hit，並讀取 lunge_character_state.is_lunging；衝鋒狀態內呼叫 Toughness.replenish_percentage，設定值0.1。
- 使用每次 on_hit 事件，不以目標單位去重；本天賦本身沒有額外冷卻。
- talent_settings 中另有名為 combat_ability_3 的獨立能力變體設定，冷卻數值不由此被動節點決定；不在玩家摘要重複該變體冷卻。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1434–1454](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1434-L1454)
- [scripts/settings/talent/talent_settings_ogryn.lua：391–395](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L391-L395)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1819–1847](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1819-L1847)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua：59–74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L59-L74)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1434–1454](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1434-L1454)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1244–1266](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1244-L1266)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、連續撞中 3 次且缺額足夠時，恢復 100 × 10% × 3 = 30 點；若只缺 20 點，就只能補 20 點。其他韌性恢復加成另算。
- 命中必須發生在衝鋒狀態且攻擊傷害類型屬衝鋒；已滿韌性不會保留溢出恢復。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`59b32c78`。
- 繁中原文「每次使用衝鋒成功命中敵人可恢復10%韌性」和英文原文「每名被衝鋒命中的敵人恢復10%韌性」都將恢復綁定在衝鋒命中，數值一致。原文未區分最大韌性百分比或韌性缺口上限，這是恢復函式的實作細節；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_charge_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/0932d1f6-96b1-47d9-ad81-861fe9914d9a)

圖片僅供技能辨識，不作機制證據。

