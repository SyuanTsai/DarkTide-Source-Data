# 失控攻擊(Uncontrolled Aggression)：原始碼依據

[English](en/broker_keystone_adrenaline_junkie_sub_4.md)

[返回玩家說明](README.md#broker_keystone_adrenaline_junkie_sub_4)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie_sub_4)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_adrenaline_junkie_sub_4`；名稱鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_4`；描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_4_desc`。
- 節點：`node_43d2abfa-c6f8-4ab7-8469-148b526040c2`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 核心 adrenaline_duration=2，升級 sub_4_duration=4。stack buff start_func 檢查 stack_extra_duration special rule，加入 4−2=2 秒，因此模板最終 duration 為 4 秒。
- stack buff 保留 refresh_duration_on_stack 與 refresh_duration_on_remove_stack：加層時重設計時；到期被移除一層後重設計時，形成無新層時每 4 秒減一層。到達 30 層時 on_reached_max_stack_func 會停用移除層後的計時重設，條件退出會清掉堆疊 buff 並觸發核心 Frenzy。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2798–2826](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2798-L2826)
- [scripts/settings/talent/talent_settings_broker.lua：464–480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3686–3698](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3686-L3698)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3735–3759](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3735-L3759)
- [scripts/extension_systems/buff/buffs/buff.lua：29–44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44)
- [scripts/extension_systems/buff/buff_extension_base.lua：631–663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L663)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2798–2826](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2798-L2826)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1857–1879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1857-L1879)

## 算例條件與待確認事項

- **計時算例**：若在 0 秒取得 3 層，並且之後沒有新層，4 秒後先失去 1 層，8 秒後再失去 1 層；取得新層會把下一次衰退時間重設為 4 秒。
- 此升級延長每層的共享計時，不提高 30 層上限，也不改變取得層數或狂暴持續時間。
- 到達 30 層會觸發核心的清除流程；此時不再按 4 秒間隔逐層衰退。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fb871cba`。
- 繁中與英文均表示腎上腺素層的持續時間提高至 4 秒；程式把核心 2 秒計時增加到 4 秒，且共享 buff 邏輯在每次移除一層後重新計時。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_adrenaline_junkie_sub_4.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/2b1aa9f6-20e2-4d38-b2fb-6af765a426ca)

圖片僅供技能辨識，不作機制證據。

