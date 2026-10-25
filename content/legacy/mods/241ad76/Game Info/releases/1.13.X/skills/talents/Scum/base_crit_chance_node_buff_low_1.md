# 暴擊幾率增幅(Critical Chance Boost)：原始碼依據

[English](en/base_crit_chance_node_buff_low_1.md)

[返回玩家說明](README.md#base_crit_chance_node_buff_low_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#base_crit_chance_node_buff_low_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_crit_chance_node_buff_low_1`；名稱鍵：`loc_talent_crit_chance_low`；描述鍵：`loc_talent_crit_chance_low_desc`。
- 節點：`node_089c4280-425c-40cd-8ec6-0aa812fe11ff`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 單級節點套用player_crit_chance_node_buff_low_1的tier1=.05；CriticalStrike.chance加算後clamp0..1。

## 原始碼依據

- [scripts/settings/buff/player_buff_templates.lua：637–665](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L637-L665)
- [scripts/utilities/attack/critical_strike.lua：13–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/extension_systems/buff/buffs/buff.lua：226–254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L254)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua：2622–2645](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L2622-L2645)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：907–935](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L907-L935)

## 算例條件與待確認事項

- **機率算例**：原本 10% 爆擊率變成 10% + 5% = 15%；原本 25% 則變成 30%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3019333a`。
- 兩語皆描述增加爆擊率，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/stat/base_crit_chance_node_buff_low_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/f936a91e-7097-49cc-b8f5-88dff18117eb)

圖片僅供技能辨識，不作機制證據。

