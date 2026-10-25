# 碎敵信條(Foe-Render Creed)：原始碼依據

[English](en/cryptic_aura_weapon_improved.md)

[返回玩家說明](README.md#cryptic_aura_weapon_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_aura_weapon_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_aura_weapon_improved`；名稱鍵：`loc_talent_cryptic_aura_weapon_improved`；描述鍵：`loc_talent_cryptic_aura_weapon_improved_desc`。
- 節點：`node_9317a30a-682c-4b3f-ac86-83a2bf829f87`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦同時掛載 cryptic_aura_weapon_improved 協同模板和 cryptic_aura_weapon_improved_personal_boost。個人被動給施放者 toughness=25；協同模板給 max_hit_mass_attack_modifier=0.15 與 rending_multiplier=0.075。CoherencySystem 建立每個 daisy-chain 時把單位自身放入鏈中，並將鏈內新增單位通知 UnitCoherencyExtension；後者把進入單位放入 in_coherence_units，從該集合彙整可用協同模板，因此施放者本人與鏈內隊友都收到順劈及撕裂加成。max_hit_mass_attack_modifier 提高攻擊可處理的順劈目標質量；rending_multiplier 增加撕裂乘數。該協同模板 coherency_id 為 cryptic_aura_weapon_improved、priority=2；不因同一來源重複加入而多次套用。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1059–1089](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1059-L1089)
- [scripts/settings/talent/talent_settings_cryptic.lua：27–31](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L27-L31)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：226–251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L226-L251)
- [scripts/settings/buff/buff_settings.lua：860–861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L860-L861)
- [scripts/settings/buff/buff_settings.lua：961–962](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L961-L962)
- [scripts/extension_systems/coherency/coherency_system.lua：187–251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L187-L251)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：200–214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L200-L214)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：279–311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)
- [scripts/utilities/attack/damage_profile.lua：37–88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L37-L88)
- [scripts/utilities/attack/damage_calculation.lua：122–247](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L122-L247)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1059–1089](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1059-L1089)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1600–1624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1600-L1624)

## 算例條件與待確認事項

- **順劈算例**：若攻擊原本能穿透的目標質量總額為10點，增幅後為10 × 1.15 = 11.5點；實際多命中幾名敵人取決於敵人質量與武器限制。
- **撕裂算例**：只比較護甲階段，假設護甲前100點傷害、原護甲倍率0.5，且此護甲類型的撕裂係數為1，結果由100 × 0.5 = 50點變成100 × (0.5 + 0.075) = 57.5點。跨過護甲倍率1時另有換算，不能視為所有命中直接增加7.5%傷害。
- 只有自身獲得+25點韌性；順劈和撕裂加成由協同光環提供給施放者本人及其協同鏈內隊友。
- 15%是順劈最大命中質量加成，並非直接增加15%命中敵人數；實際可命中數還取決於敵人質量與武器攻擊資料。
- 7.5%撕裂是撕裂乘數加成；不等同於直接增加7.5%最終傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6d4feb19`。
- 繁中描述列出自身+25韌性及協同隊友的順劈、撕裂效果。固定來源的協同鏈包含施放者本人，故自身也取得15%順劈最大命中質量與7.5%撕裂；未明寫自身受光環效果屬描述省略。Build 25606770 版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/aura/cryptic_aura_weapon_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/a48f1d74-488a-42d3-a59d-33d55135dad2)

圖片僅供技能辨識，不作機制證據。

