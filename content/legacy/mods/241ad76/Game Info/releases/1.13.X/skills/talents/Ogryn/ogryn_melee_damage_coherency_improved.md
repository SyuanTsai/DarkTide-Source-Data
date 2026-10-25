# 破骨者之環(Bonebreaker's Aura)：原始碼依據

[English](en/ogryn_melee_damage_coherency_improved.md)

[返回玩家說明](README.md#ogryn_melee_damage_coherency_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_melee_damage_coherency_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_melee_damage_coherency_improved`；名稱鍵：`loc_talent_damage_aura`；描述鍵：`loc_talent_damage_aura_improved_new`。
- 節點：`node_3f7b629b-0f4b-4b74-9086-17b78f2a31c5`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦格式值使用共享設定 0.1，光環寫入 melee_damage 屬性。
- 強化光環的最大層數為 1、協同優先序為 2；基礎近戰光環值為 0.075、優先序為 1。
- 技能樹將此節點列為光環，並與另外兩種歐格林光環放在 exclusive_group=aura；協同鏈包含持有者本人。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：651–690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L651-L690)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1354–1390](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1354-L1390)
- [scripts/settings/talent/talent_settings_ogryn.lua：298–302](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L298-L302)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：195–218](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L195-L218)
- [scripts/extension_systems/coherency/coherency_system.lua：188–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/utilities/attack/damage_calculation.lua：287–305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L287-L305)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：669–690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L669-L690)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：194–219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L194-L219)

## 算例條件與待確認事項

- **傷害算例**：只計強化光環，沒有其他傷害修正時，100 點近戰傷害變成 100 × (1 + 10%) = 110 點。
- 算例只計此光環的近戰傷害加成；其他傷害修正、敵人護甲、命中部位與最終傷害結算不在公式內。
- 這是 10% 的強化版本，不能同時把基礎 7.5% 當成第二個獨立光環相加。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`68da370d`。
- 同 hash 68da370d 的繁中與英文都寫明你和協同盟友獲得近戰攻擊傷害加成，並指出此節點強化基礎近戰光環；設定值由基礎 7.5% 改為強化版 10%，因此不將兩者相加。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/aura/ogryn_melee_damage_coherency_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/78f209fd-3e8b-456d-954d-c67fdf6e23ee)

圖片僅供技能辨識，不作機制證據。

