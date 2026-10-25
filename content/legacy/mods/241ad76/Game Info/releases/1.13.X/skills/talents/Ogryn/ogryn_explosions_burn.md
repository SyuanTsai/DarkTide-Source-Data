# 火力全開(Fire Away)：原始碼依據

[English](en/ogryn_explosions_burn.md)

[返回玩家說明](README.md#ogryn_explosions_burn)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_explosions_burn)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_explosions_burn`；名稱鍵：`loc_talent_ogryn_explosions_burn_name`；描述鍵：`loc_talent_ogryn_explosions_burn_close_desc`。
- 節點：`node_a9fe859e-7658-4005-9c31-aa61e2d76638`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- close_explosion_hit選close_stacks2或stacks1，max8；blacklist powermaul_explosion。使用flamer_assault共用31層曲線，duration4 interval.5 interval_stack_removal；burning profile400×unarmored1.5=600。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2383–2387](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2383-L2387)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2441–2480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2441-L2480)
- [scripts/settings/talent/talent_settings_ogryn.lua：19–23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L19-L23)
- [scripts/settings/buff/weapon_buff_templates.lua：50–78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：19–28](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L19-L28)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：301–328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328)
- [scripts/utilities/attack/damage_calculation.lua：219–227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2113–2135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2113-L2135)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1671–1693](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1671-L1693)

## 算例條件與待確認事項

- **傷害算例**：2 層約造成 7.17 點、8 層約 99.25 點／次；實際值會受護甲與其他增傷影響，也不能把單次傷害當成完整持續期間的總傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2024bc9e`。
- 英文近距離為2層總量，繁中「增加2層」容易讀成1+2；實作close_stacks是替換非相加。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_explosions_burn.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/c78dbead-adf5-4b9e-9629-9a3a0a93ae8c)

圖片僅供技能辨識，不作機制證據。

