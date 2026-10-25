# 怒不可遏(Furious)：原始碼依據

[English](en/ogryn_more_hits_more_damage.md)

[返回玩家說明](README.md#ogryn_more_hits_more_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_more_hits_more_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_more_hits_more_damage`；名稱鍵：`loc_talent_ogryn_damage_per_enemy_hit_previous`；描述鍵：`loc_talent_ogryn_damage_per_enemy_hit_previous_new_desc`。
- 節點：`node_c3518d3e-c14f-453b-886b-5f8aac1c93c6`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_sweep_finish 每次覆寫 template_data.hits；lerp_t=clamp(hits/10,0,1)，melee_damage 從0插值到 .03×10。沒有到期時間，也不把先前目標數累加。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1774–1818](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1774-L1818)
- [scripts/settings/talent/talent_settings_ogryn.lua：374–379](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L374-L379)
- [scripts/extension_systems/weapon/actions/action_sweep.lua：944–961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961)
- [scripts/utilities/attack/damage_calculation.lua：232–264](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L264)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1263–1279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1263-L1279)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：139–163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L139-L163)

## 算例條件與待確認事項

- **傷害算例**：上一擊命中 4 名敵人，下一擊基礎 100 點變成 100 × (1 + 4 × 3%) = 112 點；命中 10 名或更多則為 130 點。已有同階段 20% 加成、再取得 4 層時為 132 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`cc7b987b`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_more_hits_more_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/aeba8245-43aa-438c-9357-a7ac4556a98d)

圖片僅供技能辨識，不作機制證據。

