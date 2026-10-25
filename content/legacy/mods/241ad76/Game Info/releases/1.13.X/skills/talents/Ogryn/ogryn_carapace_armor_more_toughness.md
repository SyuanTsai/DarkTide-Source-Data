# 最堅韌！(Toughest!)：原始碼依據

[English](en/ogryn_carapace_armor_more_toughness.md)

[返回玩家說明](README.md#ogryn_carapace_armor_more_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_carapace_armor_more_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_carapace_armor_more_toughness`；名稱鍵：`loc_talent_ogryn_carapace_armor_more_toughness`；描述鍵：`loc_talent_ogryn_carapace_armor_more_toughness_desc`。
- 節點：`node_f4b9c999-6d19-4a1a-b18e-6f448c4b689a`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 子 buff 在 special rule 為真時啟用 `conditional_stat_buffs.toughness_replenish_modifier=0.025`；每個外部子 buff 疊層各套用一次。麻木本體另外有 `stat_buffs.toughness_replenish_modifier=0.03`。
- 韌性 extension 以 `1 + total_toughness_replenish_stat_buff` 形成 recovery multiplier，因此兩個加法修正相加後再乘基礎恢復量。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1728–1755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1728-L1755)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：600–624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L600-L624)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：228–250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L228-L250)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L270)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1728–1755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1728-L1755)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：786–808](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L786-L808)

## 算例條件與待確認事項

- **算例**：10 層時恢復倍率為 1 + 10 × 5.5% = 1.55；原本恢復 20 點時，理論恢復 31 點，實際不超過缺少的韌性。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 恢復增加只作用於會讀取 toughness_replenish_modifier 的韌性恢復路徑；實際恢復不能超過缺少的韌性。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2fd914ff`。
- 繁中寫「每層…使你獲得…韌性恢復」，英文寫「…grants … Toughness Replenishment per stack」；兩者都把韌性恢復加值連到麻木的每一層。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_carapace_armor_more_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/d6e55419-0e35-49cc-9bd6-163bdff037d4)

圖片僅供技能辨識，不作機制證據。

