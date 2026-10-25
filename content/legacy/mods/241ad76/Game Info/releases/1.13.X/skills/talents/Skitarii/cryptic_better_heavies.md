# 液壓衝擊(Hydraulic Impact)：原始碼依據

[English](en/cryptic_better_heavies.md)

[返回玩家說明](README.md#cryptic_better_heavies)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_better_heavies)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_better_heavies`；名稱鍵：`loc_talent_cryptic_better_heavies`；描述鍵：`loc_talent_cryptic_better_heavies_desc`。
- 節點：`node_8ed6b0bc-2308-4f95-af4e-4a0c955cd364`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- action kind==windup控制uninterruptible/stun_immune；melee_heavy_damage常駐0.15，共用結算要求melee且profile heavy，未要求auto_completed_action。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：295–315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L315)
- [scripts/settings/talent/talent_settings_cryptic.lua：524–526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L524-L526)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2947–2971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2947-L2971)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2200–2215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2200-L2215)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：890–916](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L890-L916)

## 算例條件與待確認事項

- **傷害算例**：基礎重擊 100、有 25% 同階段傷害加成時，100 × (1 + 25% + 15%) = 140。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`668011b5`。
- 中英一致；補充蓄力保護與重擊增傷的不同條件。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_better_heavies.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/d01cfadc-7ba2-4505-b70a-11c22405645a)

圖片僅供技能辨識，不作機制證據。

