# 洞察之眼(Piercing Sight)：原始碼依據

[English](en/cryptic_precision_stance_crit_cleave.md)

[返回玩家說明](README.md#cryptic_precision_stance_crit_cleave)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_precision_stance_crit_cleave)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_precision_stance_crit_cleave`；名稱鍵：`loc_talent_cryptic_precision_stance_crit_cleave`；描述鍵：`loc_talent_cryptic_precision_stance_crit_cleave_desc`。
- 節點：`node_bbc91e02-a605-4136-8d58-f767ac08da21`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 基礎模板在進階戰鬥教範關鍵字生效時提供 ranged_max_hit_mass_attack_modifier=0.3 及 ranged_critical_strike_chance=0.15。延遲模板加上兩者的差值0.3與0.15，使總修正分別為0.6及0.3。
- 延遲模板沿用 buff_start_delay=4；啟動時設4秒後的時間點，達標才啟用額外差值。能力中斷時關閉基礎條件並清除計時；重新啟動重新等4秒。
- 遠程穿透數值是 max-hit-mass 攻擊修正，並非保證多穿透固定名敵人；實際可命中目標數仍看武器穿透、目標質量及攻擊設定。遠程爆擊率為機率修正，實際暴擊仍受其他暴擊來源及攻擊判定影響。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：433–473](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L433-L473)
- [scripts/settings/talent/talent_settings_cryptic.lua：125–131](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L125-L131)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：717–738](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L717-L738)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：739–777](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L739-L777)
- [scripts/utilities/attack/damage_profile.lua：37–88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L37-L88)
- [scripts/settings/archetype/archetypes/cryptic_archetype.lua：10–32](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L10-L32)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：433–473](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L433-L473)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2554–2576](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2554-L2576)

## 算例條件與待確認事項

- 進階戰鬥教範剛啟動 遠程穿透修正+30%，遠程爆擊率+15%。
- 進階戰鬥教範連續啟動4秒 遠程穿透修正0.3+0.3=0.6（+60%）；遠程爆擊率0.15+0.15=0.30（+30%）。
- 額外效果在啟動滿4秒後才生效；能力一旦關閉，計時歸零且加成撤除。
- 遠程穿透的百分比不能直接換算為固定額外目標數。
- 繁中與英文都列出啟動初期與4秒後的兩組數值，與來源設定一致；中英均未說明穿透內部以攻擊質量修正計算，屬原文省略。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f7e91cd6`。
- inventory 的中英文均說明啟動時+30%遠程穿透、+15%暴擊，滿4秒後為+60%及+30%；與兩組條件式模板的設定相符。穿透計算方式未載於本地化，但沒有明確相反描述。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_precision_stance_crit_cleave.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/bedef96d-1746-44a5-a482-1abe4e5e15c6)

圖片僅供技能辨識，不作機制證據。

