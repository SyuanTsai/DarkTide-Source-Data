# 壯膽子彈(Bullet Bravado)：原始碼依據

[English](en/ogryn_ranged_stance_toughness_regen.md)

[返回玩家說明](README.md#ogryn_ranged_stance_toughness_regen)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_ranged_stance_toughness_regen)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_ranged_stance_toughness_regen`；名稱鍵：`loc_talent_ogryn_special_ammo_toughness`；描述鍵：`loc_talent_ogryn_special_ammo_toughness_on_shot_and_reload_desc`。
- 節點：`node_3c6f836b-d499-4457-959c-8c519347d3c3`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 姿態 start_func 在特殊規則啟用時加入 ogryn_ranged_stance_toughness_regen；proc events 分別監聽 on_shoot、on_shoot_projectile、on_reload，前兩類各呼叫 replenish_percentage(...,0.025)，換彈呼叫0.15。
- ActionStanceChange 在 ability buff 已加入後處理 reload_secondary，轉移彈藥並送出 on_reload 事件，所以啟動時的自動裝填也可觸發15%恢復。能力姿態持續12秒。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1527–1552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1527-L1552)
- [scripts/settings/talent/talent_settings_ogryn.lua：194–202](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L194-L202)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua：93–110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L93-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1851–1899](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1851-L1899)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2332–2352](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2332-L2352)
- [scripts/extension_systems/ability/actions/action_stance_change.lua：111–155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_stance_change.lua#L111-L155)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/extension_systems/ability/actions/action_stance_change.lua：102–154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_stance_change.lua#L102-L154)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1527–1552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1527-L1552)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1418–1444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1418-L1444)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、沒有其他加成，射擊 4 次後換彈一次，恢復 100 × (4 × 2.5% + 15%) = 25 點；只缺 10 點就只能補 10 點。
- 射擊恢復來自射擊與發射事件；不同武器可能送出不同事件，實際恢復次數依武器事件流程而定。
- 韌性已滿時，恢復只會補到上限，不會累積溢出。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`626514ed`。
- 繁中原文逐字列出每發子彈恢復2.5%韌性、每次換彈恢復15%；英文原文對應列出每發射擊與每次換彈的相同數值。姿態啟動的自動換彈也會送出換彈事件，是消費端補充；數字與觸發沒有翻譯矛盾。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_ranged_stance_toughness_regen.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/53442500-ad2a-446b-9f9b-0d26aa2438d9)

圖片僅供技能辨識，不作機制證據。

