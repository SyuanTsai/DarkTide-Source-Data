# 奧客(Slippery Customer)：原始碼依據

[English](en/broker_passive_dodge_melee_on_slide.md)

[返回玩家說明](README.md#broker_passive_dodge_melee_on_slide)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_dodge_melee_on_slide)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_dodge_melee_on_slide`；名稱鍵：`loc_talent_broker_passive_dodge_melee_on_slide`；描述鍵：`loc_talent_broker_passive_dodge_melee_on_slide_desc`。
- 節點：`node_5c6828fd-4ac1-427e-bd39-793677a16ccc`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- movement_state.method==sliding啟用count_as_dodge_vs_melee；Dodge.is_dodging在melee或incapacitating_grab類別讀取此keyword。

## 原始碼依據

- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua：103–140](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L103-L140)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1128–1147](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1128-L1147)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1127–1135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1127-L1135)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：490–517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L490-L517)

## 算例條件與待確認事項

- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2eb1aa86`。
- 繁中用「視作閃避成功」、英文為count as Dodging；說明補清楚狀態與實際成功事件的差異，暫不將措辭本身定為明確勘誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_dodge_melee_on_slide.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/a1732698-da8a-42ec-8f53-f0a57c964056)

圖片僅供技能辨識，不作機制證據。

