# 力量分配致動器(Force Distribution Actuators)：原始碼依據

[English](en/cryptic_push_stagger_stamina.md)

[返回玩家說明](README.md#cryptic_push_stagger_stamina)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_push_stagger_stamina)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_push_stagger_stamina`；名稱鍵：`loc_talent_cryptic_push_stagger_stamina`；描述鍵：`loc_talent_cryptic_push_stagger_stamina_desc`。
- 節點：`node_231eefb6-059b-4bb2-a656-a9bf662486d0`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- current/max>=0.5使push_impact_modifier=0.75有效；按目前耐力動態切換，不是常駐75%武器傷害。

## 原始碼依據

- [scripts/settings/talent/talent_settings_cryptic.lua：620–623](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L620-L623)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3294–3419](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3294-L3419)
- [scripts/utilities/attack/stagger_calculation.lua：190–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L205)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2518–2537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2518-L2537)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：835–863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L835-L863)

## 算例條件與待確認事項

- **衝擊算例**：最大耐力 6 格時，需至少 3 格；假設原推擊衝擊為 100，生效後為 100 × (1 + 75%) = 175。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`19866afe`。
- 雙語門檻與作用一致；補充50%邊界與衝擊含義。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_push_stagger_stamina.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/6d7a17f5-be3e-4659-bc09-84cfb22bd20f)

圖片僅供技能辨識，不作機制證據。

