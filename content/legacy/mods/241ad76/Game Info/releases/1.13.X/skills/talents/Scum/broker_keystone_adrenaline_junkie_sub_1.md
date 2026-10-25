# 腎上腺素刺客(Adrenaline Assassin)：原始碼依據

[English](en/broker_keystone_adrenaline_junkie_sub_1.md)

[返回玩家說明](README.md#broker_keystone_adrenaline_junkie_sub_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie_sub_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_adrenaline_junkie_sub_1`；名稱鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_1`；描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_1_desc`。
- 節點：`node_ec8f7ffd-0a53-4d62-b0a7-d1c1e5254bcd`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 升級啟用 special rule broker_keystone_adrenaline_junkie_no_regular_stacks；基礎 regular_grant=1 改為 sub_1_regular_grant=0。
- 當命中為弱點時，proc 設定 stacks_to_grant=regular_grant+sub_1_weakspot_additional_grant=1+2=3；接著不論是否弱點，若 params.is_critical_strike 為真，再加 crit_grant=1。因此弱點暴擊=3+1=4，非弱點暴擊=0+1=1。
- 此升級只替換獲得腎上腺素層數的條件；達 30 層後觸發的狂暴內容與核心相同。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2698–2727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2698-L2727)
- [scripts/settings/talent/talent_settings_broker.lua：464–480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3600–3627](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3600-L3627)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3630–3660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3630-L3660)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：336–370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L336-L370)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3686–3698](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3686-L3698)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2698–2727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2698-L2727)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1788–1810](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1788-L1810)

## 算例條件與待確認事項

- **層數算例**：非弱點非暴擊命中 0 層；非弱點暴擊 0+1=1 層；弱點非暴擊 1+2=3 層；弱點暴擊 1+2+1=4 層。
- 升級條件只計近戰命中；遠程弱點命中不經此 keystone 的 melee-hit 檢查。
- 30 層上限可能使實得層數低於單次命中的計算值；已達上限後不會再提高。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`02bab200`。
- 繁中與英文都表示弱點命中額外給 2 層且一般近戰命中不再給基本層；原核心的暴擊額外層仍由同一處理流程保留。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_adrenaline_junkie_sub_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/f2c76ddc-b60e-49ee-9e7c-1d94981a7448)

圖片僅供技能辨識，不作機制證據。

