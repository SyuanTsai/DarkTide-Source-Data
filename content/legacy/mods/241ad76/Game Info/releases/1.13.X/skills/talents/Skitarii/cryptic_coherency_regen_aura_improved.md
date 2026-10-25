# 復甦(Resurgence)：原始碼依據

[English](en/cryptic_coherency_regen_aura_improved.md)

[返回玩家說明](README.md#cryptic_coherency_regen_aura_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_coherency_regen_aura_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_coherency_regen_aura_improved`；名稱鍵：`loc_talent_cryptic_coherency_regen_aura`；描述鍵：`loc_talent_cryptic_coherency_regen_aura_improved_desc`。
- 節點：`node_e9138b1a-56be-4048-bdfa-e8c1e7ede57d`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦掛載 cryptic_coherency_regen_aura_improved 協同模板和 cryptic_coherency_regen_aura_improved_personal_boost。協同模板使用與基礎版相同的 coherency_id，但優先級1，將 min_toughness_coherency_regen_rate_modifier 設為0.5；韌性擴充從該 additive multiplier 中扣除基值1並在戰鬥中把一般協同恢復倍率乘0.5。個人被動只給施放者 stat_buffs.toughness=25。CoherencySystem 建立 daisy-chain 時包含自身，UnitCoherencyExtension 接收並儲存自身協同進入事件，之後從整個 in_coherence_units 集合啟用鏈中可用的協同光環，因此50%最低恢復率作用於施放者本人及協同鏈內隊友。恢復仍受是否有韌性缺額、韌性恢復延遲、是否停用恢復、武器／移動倍率及其他恢復修正影響。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1034–1058](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1034-L1058)
- [scripts/settings/talent/talent_settings_cryptic.lua：35–38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L35-L38)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：270–297](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L270-L297)
- [scripts/settings/buff/buff_settings.lua：888–888](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L888-L888)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：116–149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L116-L149)
- [scripts/extension_systems/coherency/coherency_system.lua：187–251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L187-L251)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：200–214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L200-L214)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：279–311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1034–1058](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1034-L1058)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：38–62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L38-L62)

## 算例條件與待確認事項

- 一般協同恢復速率為10點/秒時，最低戰鬥中速率為10×0.5=5點/秒；4秒恢復20點，韌性缺額不足時只恢復到上限。
- 50%是一般協同韌性恢復速率的最低倍率，不是每秒恢復最大韌性的50%，也不是一次恢復50點。
- 每位接收者仍受其自身武器、移動、其他恢復修正、恢復延遲與韌性上限影響。
- 個人+25點韌性是施放者的被動加成；協同恢復光環則作用於自身與協同鏈內隊友。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`a053ecfc`。
- 同鍵中英均描述敵人接近時仍可進行協同韌性恢復；程式補明一般恢復速率乘基礎25%／改良50%、本人亦在協同接收集合，以及恢復延遲仍有效。文字未逐一列出不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/aura/cryptic_coherency_regen_aura_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/7090c8fb-aaaa-4015-a5c1-21e7093507be)

圖片僅供技能辨識，不作機制證據。

