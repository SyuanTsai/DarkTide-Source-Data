# 懲惡揚善(Commendation from Condemnation)：原始碼依據

[English](en/adamant_charge_toughness.md)

[返回玩家說明](README.md#adamant_charge_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_charge_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_charge_toughness`；名稱鍵：`loc_talent_adamant_charge_toughness_name`；描述鍵：`loc_talent_adamant_charge_toughness_alt_description`。
- 節點：`node_b0947b3d-cb39-43c3-8922-1a9c48dfb8d8`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此升級只接受衝鋒能力造成的命中，並檢查目標是否屬精英、專家或巨獸。
- 每個合格目標以單位身分去重；衝鋒結束時計算 20%×合格目標數的韌性與 15%×數量的耐力，再分別封頂 100% 與 75%。
- 結算直接呼叫韌性百分比恢復及耐力百分比增加；若角色目前資源已接近上限，實際增加量受剩餘缺口限制。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：149–175](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L149-L175)
- [scripts/settings/talent/talent_settings_adamant.lua：19–34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：180–237](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L180-L237)
- [scripts/utilities/toughness/toughness.lua：16–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–286](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L286)
- [scripts/utilities/attack/stamina.lua：102–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/settings/talent/talent_settings_adamant.lua：19–34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/utilities/attack/stamina.lua：102–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：149–175](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L149-L175)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1276–1301](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1276-L1301)

## 算例條件與待確認事項

- 3 名不同合格目標：韌性 3×20%=60%；耐力 3×15%=45%。5 名以上仍最多恢復 100% 韌性及 75% 耐力。
- 一次衝鋒中的重複命中同一目標不會再次計數；超過目前缺少的韌性或耐力部分不會形成超額資源。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；數值與行為按固定來源提交說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`af8a4ee4`。
- 繁中「每次擊中精英敵人、專家敵人或巨獸」對應英文「for each Elite, Specialist, or Monstrosity hit」；恢復量與兩項上限的描述一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_charge_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/a0f08b1e-586b-4a65-b271-29d79874f573)

圖片僅供技能辨識，不作機制證據。

