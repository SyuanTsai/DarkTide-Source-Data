# 鍍鋅精密塗層(Galvanized Coating)：原始碼依據

[English](en/cryptic_stun_dr_power.md)

[返回玩家說明](README.md#cryptic_stun_dr_power)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_stun_dr_power)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_stun_dr_power`；名稱鍵：`loc_talent_cryptic_stun_dr_power`；描述鍵：`loc_talent_cryptic_stun_dr_power_desc`。
- 節點：`node_44c50f39-8997-4a6f-9676-16bac022defb`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 無條件keywords.stun_immune及damage_taken_multiplier0.85；on_damage_taken要求自己且on_melee_hit，disabled排除，但未檢查damage_amount>0，所以事件包含只扣韌性的近戰命中也可能收費。
- consume_ability_charge_percentage(0.075)以單份resource cost為基準，clamp現有資源，不限制stat啟用。

## 原始碼依據

- [scripts/utilities/attack/damage.lua：154–178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L178)
- [scripts/utilities/attack/damage.lua：202–225](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L202-L225)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1011–1078](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1011-L1078)
- [scripts/utilities/attack/damage_calculation.lua：584–611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L584-L611)
- [scripts/settings/talent/talent_settings_cryptic.lua：527–530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L527-L530)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2972–3024](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2972-L3024)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2216–2242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2216-L2242)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2066–2096](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2066-L2096)

## 算例條件與待確認事項

- **計算算例**：單份電容量的基礎恢復時間為 50 秒，7.5% 等同 50 × 7.5% = 3.75 秒自然恢復量。原本 100 點傷害則變成 100 × 0.85 = 85 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`bb527abc`。
- 原文一致；補充零電容量仍有防禦與單份百分比。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stun_dr_power.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/e3f4e5a5-52c8-489e-a83f-3bf13c80eca8)

圖片僅供技能辨識，不作機制證據。

