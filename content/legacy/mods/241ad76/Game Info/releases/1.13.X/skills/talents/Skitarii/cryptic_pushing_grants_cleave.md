# 電擊破壞協定(Shockline Breach Protocol)：原始碼依據

[English](en/cryptic_pushing_grants_cleave.md)

[返回玩家說明](README.md#cryptic_pushing_grants_cleave)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_pushing_grants_cleave)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_pushing_grants_cleave`；名稱鍵：`loc_talent_cryptic_pushing_grants_cleave`；描述鍵：`loc_talent_cryptic_pushing_grants_cleave_alt_desc`。
- 節點：`node_3d85c249-b115-4ae9-8601-3c529b91c855`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_push_hit觸發proc_stat max_melee_hit_mass_attack_modifier=0.5，active8並允許重新計時；不是直接近戰傷害加50%。

## 原始碼依據

- [scripts/settings/talent/talent_settings_cryptic.lua：424–427](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L424-L427)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2438–2455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2438-L2455)
- [scripts/utilities/attack/damage_profile.lua：37–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L37-L80)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1927–1946](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1927-L1946)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：497–526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L497-L526)

## 算例條件與待確認事項

- **順劈算例**：假設攻擊原本能處理 10 單位敵人質量，效果變成 10 × (1 + 50%) = 15。能多打中幾人仍取決於敵人質量與攻擊本身的限制。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d5aece03`。
- 繁中與英文一致；補充順劈的作用量。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_pushing_grants_cleave.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/dca309fd-773f-4a07-a659-cfb320cd14a9)

圖片僅供技能辨識，不作機制證據。

