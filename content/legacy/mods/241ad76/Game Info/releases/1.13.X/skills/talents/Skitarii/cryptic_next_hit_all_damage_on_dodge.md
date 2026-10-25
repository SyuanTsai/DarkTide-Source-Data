# 精準戰鬥探測儀(Precision Combat Augurs)：原始碼依據

[English](en/cryptic_next_hit_all_damage_on_dodge.md)

[返回玩家說明](README.md#cryptic_next_hit_all_damage_on_dodge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_next_hit_all_damage_on_dodge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_next_hit_all_damage_on_dodge`；名稱鍵：`loc_talent_cryptic_next_hit_damage_on_dodge`；描述鍵：`loc_talent_cryptic_next_attack_all_damage_on_dodge_desc`。
- 節點：`node_43262e68-cd8e-491e-8bd5-f0b4164fa561`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 成功閃避加max1的server_only_proc_buff，conditional melee_damage/ranged_damage0.15；on_shoot/on_sweep_finish置attack_boost_active=false並退出。沒有期限。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3766–3798](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3766-L3798)
- [scripts/utilities/attack/damage_calculation.lua：295–319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L319)
- [scripts/settings/talent/talent_settings_cryptic.lua：667–669](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L667-L669)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3754–3765](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3754-L3765)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2730–2745](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2730-L2745)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2455–2479](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2455-L2479)

## 算例條件與待確認事項

- **傷害算例**：基礎傷害 100，生效時為 100 × 1.15 = 115；已有 25% 同階段加成時，100 × (1 + 25% + 15%) = 140。
- 多彈丸/延遲命中的同幀傷害順序需實測；不能承諾每顆後到的投射物都保有加成。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`501926d3`。
- 雙語Next Attack一致；補充揮空/開火消耗與單次儲存。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_next_hit_all_damage_on_dodge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030)｜[圖片附件](https://github.com/user-attachments/assets/a18e19ec-6cad-4a2c-996b-6e7eddf47195)

圖片僅供技能辨識，不作機制證據。

