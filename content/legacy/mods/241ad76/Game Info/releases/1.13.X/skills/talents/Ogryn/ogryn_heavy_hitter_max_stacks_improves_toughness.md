# 越戰越勇(Unstoppable)：原始碼依據

[English](en/ogryn_heavy_hitter_max_stacks_improves_toughness.md)

[返回玩家說明](README.md#ogryn_heavy_hitter_max_stacks_improves_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_heavy_hitter_max_stacks_improves_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_heavy_hitter_max_stacks_improves_toughness`；名稱鍵：`loc_talent_ogryn_heavy_hitter_max_stacks_improves_toughness`；描述鍵：`loc_talent_ogryn_heavy_hitter_max_stacks_improves_toughness_new_description`。
- 節點：`node_d5ea63a3-b384-492e-bf71-9e415f3d3f50`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 選取 special rule 時，Heavy Hitter root buff 起始即加入此單層 buff；stat 以 lerp 由 0 到 `toughness_melee_replenish × 8`，`toughness_melee_replenish=0.15`。
- 韌性 extension 只在 recovery_type 是 melee_kill 時套用 `toughness_melee_replenish`，並將其與一般 toughness_replenish_modifier 合併為恢復倍率。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：620–650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L620-L650)
- [scripts/settings/talent/talent_settings_ogryn.lua：101–110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：180–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L205)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：281–294](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L281-L294)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：228–250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L228-L250)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：620–650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L620-L650)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2024–2047](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2024-L2047)

## 算例條件與待確認事項

- **算例**：基礎近戰擊殺恢復 10 點時，8 層恢復 10 × (1 + 8 × 15%) = 22 點，仍受缺少韌性限制。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 加成只放大近戰擊殺恢復，不提高其他韌性恢復事件；有效值依目前重拳出擊層數變化。
- 重拳出擊的層數比例heavy_hitter_lerp_value為模組區域共用變數；多位歐格林同場時的更新互動未實測，主頁算例固定單一角色。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e1a057de`。
- 繁中寫「近戰擊殺時額外恢復…韌性」，英文寫「Toughness replenished from Melee Kills for each stack」；兩者都明確限定近戰擊殺恢復。固定來源的韌性恢復程式亦只在近戰擊殺類型套用此加成。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_heavy_hitter_max_stacks_improves_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/82795688-8a0b-4db1-871c-1302a8f33299)

圖片僅供技能辨識，不作機制證據。

