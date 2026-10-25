# 過街老鼠(Alley Rat)：原始碼依據

[English](en/broker_passive_longer_dodges.md)

[返回玩家說明](README.md#broker_passive_longer_dodges)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_longer_dodges)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_longer_dodges`；名稱鍵：`loc_talent_broker_passive_longer_dodges`；描述鍵：`loc_talent_broker_passive_longer_dodges_desc`。
- 節點：`node_f6f53560-cd00-4602-9903-4961484ade18`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings 設 dodge_distance_modifier=0.5；buff template 把此值掛到 stat_buffs.dodge_distance_modifier，buff_settings 將該 stat 分類為 additive_multiplier，因此在基準倍率 1 上增加 0.5，而不是把距離直接乘以 0.5。
- 閃避開始時的距離公式為 base_distance × weapon_distance_scale × buff_distance_modifier × diminishing_return_factor × sticky_factor。Broker archetype 基礎距離為 2.5 m；以無武器覆寫、無衰減且無黏著修正代入，2.5 × 1 × 1.5 × 1 × 1 = 3.75 m。

## 原始碼依據

- [scripts/settings/talent/talent_settings_broker.lua：263–265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L263-L265)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1104–1125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1104-L1125)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1121–1126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1121-L1126)
- [scripts/settings/buff/buff_settings.lua：799–804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L799-L804)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua：114–150](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L114-L150)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua：196–217](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L196-L217)
- [scripts/settings/dodge/archetype_dodge_templates.lua：213–220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/dodge/archetype_dodge_templates.lua#L213-L220)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1104–1126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1104-L1126)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：2140–2167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2140-L2167)

## 算例條件與待確認事項

- **距離算例**：2.5 m × (1 + 0.50) = 3.75 m；若同時有連續閃避衰減 0.8，則 2.5 × 1.5 × 0.8 = 3.0 m。
- 3.75 m 是使用 Broker 基礎距離且沒有武器覆寫、連續閃避衰減或黏著修正的算例；實戰最終距離還會乘上這些因子。
- 此天賦增加距離倍率，不增加閃避速度倍率、可連續閃避次數或判定時間。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`22b08fe3`。
- 繁中「閃避距離」與英文 Dodge Distance 指向同一 stat；程式在基準倍率上增加 50%，實際閃避距離按完整距離公式計算。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_passive_longer_dodges.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/8f760271-d6e2-4a80-88ef-01c7007941dc)

圖片僅供技能辨識，不作機制證據。

