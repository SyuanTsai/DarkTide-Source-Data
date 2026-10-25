# 修復協定(Restoration Protocol)：原始碼依據

[English](en/cryptic_precision_stance_toughness_suppression.md)

[返回玩家說明](README.md#cryptic_precision_stance_toughness_suppression)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_precision_stance_toughness_suppression)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_precision_stance_toughness_suppression`；名稱鍵：`loc_talent_cryptic_precision_stance_toughness_suppression`；描述鍵：`loc_talent_cryptic_precision_stance_toughness_suppression_desc`。
- 節點：`node_1f07ccdc-f96c-4700-ac3f-13fb3244419d`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦透過 cryptic_precision_stance_restores_toughness 特殊規則啟用恢復。姿態切換動作在啟動時呼叫 Suppression.clear_suppression；關閉姿態的分支直接移除姿態效果並返回，不執行這次清除。
- 姿態效果的每秒恢復率設定為0.1。每次更新以 0.1 × dt 作為最大韌性比例，呼叫 Toughness.replenish_percentage；此更新只在效果仍執行且持有遠程武器槽位時進入，換出該槽位會結束姿態效果。
- 韌性擴充將恢復比例乘最大韌性並套用韌性補充修正，以現存韌性缺口為上限；恢復不會溢出滿值。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：319–337](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L319-L337)
- [scripts/settings/talent/talent_settings_cryptic.lua：98–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L98-L109)
- [scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua：40–102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua#L40-L102)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：360–370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L360-L370)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：520–534](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L520-L534)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：319–337](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L319-L337)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：917–939](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L917-L939)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 150、沒有其他恢復加成時，每秒恢復 150 × 10% = 15 點，維持 4 秒可恢復 60 點。
- 10%以最大韌性為基準，不是無條件固定10點；最大韌性不同時，實際點數不同。
- 姿態更新會按遊戲更新時間逐段補充，實際恢復受姿態是否仍啟動、韌性補充修正、恢復限制及缺口影響。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e35e0d88`。
- 繁中在百分比占位之後再寫「點韌性」，英文未加point單位。format_type是percentage且實際replenish_percentage，應為最大韌性的10%，不是固定10點。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_precision_stance_toughness_suppression.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/eb879996-8768-4102-8799-0fecaf6f7a98)

圖片僅供技能辨識，不作機制證據。

