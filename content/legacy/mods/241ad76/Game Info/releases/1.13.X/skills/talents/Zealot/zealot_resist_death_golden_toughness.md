# 復活(Risen)：原始碼依據

[English](en/zealot_resist_death_golden_toughness.md)

[返回玩家說明](README.md#zealot_resist_death_golden_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_resist_death_golden_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_resist_death_golden_toughness`；名稱鍵：`loc_talent_zealot_resist_death_recuperate`；描述鍵：`loc_talent_resist_death_toughness_desc`。
- 節點：`node_2eb4f6f4-6d27-4ecd-a41c-bac7a014a6c0`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 被動 `zealot_resist_death_golden_toughness` 每次更新檢查 `unkillable`。進入該狀態後首次排定時間為 t+0.75 秒，之後每秒增加一層 `zealot_resist_death_golden_toughness_buff`。
- 子 buff duration=5、max_stacks=8、refresh_duration_on_stack=true；每層提供 `toughness_bonus_flat=5`。疊層 buff 是增加最大韌性的上限，不是另外建立可超上限的韌性池。
- 韌性擴充處理在最大韌性上升時不改變既有 toughness_damage，因此 current_toughness=max_toughness−toughness_damage 會等量增加。最大值下降時則把 damage 減少上限差額（最低歸零），因此已升高的 current_toughness 不會隨該上限下降而一同扣回。
- 8秒基礎無法殺死期間可在約0.75、1.75、2.75…7.75秒增加最多8層；4秒臨時無法殺死期間可在約0.75、1.75、2.75、3.75秒取得4層（+20最大及目前韌性）。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3429–3453](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3429-L3453)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：5102–5142](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L5102-L5142)
- [scripts/settings/talent/talent_settings_zealot.lua：250–270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L250-L270)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：200–209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L200-L209)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：2181–2204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2181-L2204)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1270–1295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1270-L1295)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1990–2012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1990-L2012)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3429–3453](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3429-L3453)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：2181–2204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2181-L2204)

## 算例條件與待確認事項

- **韌性算例**：原本最大韌性 100、目前 60，取得一層後變成最大 105、目前 65。若完整取得 8 層、期間沒有其他變化，就成為 100／140；到期回到上限 100 時，可保留目前 100。若到期前目前只有 70，則保持 70／100。
- 時序為靜態推導；到期保留目前韌性時仍受恢復後的原上限限制。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`568ffaee`。
- 中英文都表示無法殺死期間按秒增加最大韌性、總量上限與5秒加成；韌性上限變化對目前韌性的連動屬實作補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_resist_death_golden_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/439077af-f74c-4c06-8a8a-dbeab52d9a53)

圖片僅供技能辨識，不作機制證據。

