# 振奮怒火(Stoked Rage)：原始碼依據

[English](en/broker_keystone_adrenaline_junkie_sub_3.md)

[返回玩家說明](README.md#broker_keystone_adrenaline_junkie_sub_3)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie_sub_3)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_adrenaline_junkie_sub_3`；名稱鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_3`；描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_3_desc`。
- 節點：`node_4943dd3d-899a-44ad-a876-da513a6f3b01`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings.broker_keystone_adrenaline_junkie.sub_3_frenzy_duration=20，核心 frenzy_duration=10。Frenzy buff 的 start_func 檢查 extra_duration special rule，將模板持續時間由 10 加到 20（add_duration(20−10)）。
- Frenzy buff max_stacks=1 且 refresh_duration_on_stack=true；再次觸發時重設 start_time，因此延長後的 20 秒計時重新開始，不會疊成兩份狂暴。
- buff stat_buffs 仍使用核心 melee_attack_speed=0.10、melee_damage=0.25。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2769–2797](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2769-L2797)
- [scripts/settings/talent/talent_settings_broker.lua：464–480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3761–3802](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3761-L3802)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buffs/buff.lua：619–630](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L630)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2769–2797](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2769-L2797)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1811–1833](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1811-L1833)

## 算例條件與待確認事項

- **時間算例**：10 秒基礎狂暴加上升級差額 (20−10) 秒，得到 20 秒；在第 18 秒重新觸發時，計時重設，狂暴再持續 20 秒。
- 此升級只改狂暴 buff 時長；觸發頻率仍取決於取得 30 層腎上腺素的速度。
- 實際增益仍受其他同時生效的攻速及傷害修正影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`95b51a39`。
- 繁中與英文均表示狂暴持續時間提升至 20 秒；程式以核心 10 秒及升級 20 秒的差額調整 buff 時長。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_adrenaline_junkie_sub_3.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/72d38f70-b406-41ca-a04b-2bcdadfec50c)

圖片僅供技能辨識，不作機制證據。

