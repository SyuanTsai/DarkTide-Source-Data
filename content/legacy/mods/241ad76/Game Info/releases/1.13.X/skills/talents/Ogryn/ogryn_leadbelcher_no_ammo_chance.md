# 爆限超載(Burst Limiter Override)：原始碼依據

[English](en/ogryn_leadbelcher_no_ammo_chance.md)

[返回玩家說明](README.md#ogryn_leadbelcher_no_ammo_chance)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_leadbelcher_no_ammo_chance)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_leadbelcher_no_ammo_chance`；名稱鍵：`loc_talent_ogryn_chance_to_not_consume_ammo`；描述鍵：`loc_talent_ogryn_blo_new_alt_desc`。
- 節點：`node_e64ae2d0-e20a-486a-8cf6-9208cb9dd9e6`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- `ogryn_blo_new_passive` 以 `on_ranged_kill` 增加 `ogryn_blo_stacking_buff`；該 buff 的 `max_stacks=10`、`duration=10`、`refresh_duration_on_stack=true`，每層 `ranged_damage=0.02`。
- 射擊開始時以 `free_ammo_proc_chance=0.15` 呼叫 Lucky Strike；`action_weapon_base` 將 `leadbelcher_chance_bonus` 加到輸入機率，並以 PRD coin flip 判定。觸發後 `action_shoot` 走 `ammo_usage=0` 路徑，仍送出 `on_ammo_consumed` 並標記 `is_leadbelcher_shot`。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：362–405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L362-L405)
- [scripts/settings/talent/talent_settings_ogryn.lua：203–210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L203-L210)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3567–3606](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3567-L3606)
- [scripts/extension_systems/weapon/actions/action_weapon_base.lua：186–214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L186-L214)
- [scripts/extension_systems/weapon/actions/action_shoot.lua：132–147](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L132-L147)
- [scripts/extension_systems/weapon/actions/action_shoot.lua：481–522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L522)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：214–224](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L214-L224)
- [scripts/utilities/pseudo_random_distribution.lua：7–33](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/pseudo_random_distribution.lua#L7-L33)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：362–405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L362-L405)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：568–599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L568-L599)

## 算例條件與待確認事項

- **算例**：5 次遠程擊殺增加 10% 遠程傷害；滿 10 層增加 20%，若基礎傷害為 100，則為 100 × 1.20 = 120。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 15% 是傳入 PRD 的基礎機率，實際觸發序列會受 PRD 狀態影響，不是每發互相獨立的固定擲骰。
- blo_passive_lerp_value為模組共用比例；多位歐格林同場時的交互更新未實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1b448166`。
- 繁中寫「遠程攻擊有…機率觸發幸運子彈，且不會消耗彈藥」及「遠程擊殺可提高…遠程傷害」，英文寫「chance of triggering Lucky Bullet and not consuming Ammo」及「gain … Ranged Damage on Ranged Kills」；觸發與擊殺兩部分的條件和效果相符。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone/ogryn_leadbelcher_no_ammo_chance.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/ea712cab-0dd4-47fa-a2c5-98edb7e41783)

圖片僅供技能辨識，不作機制證據。

