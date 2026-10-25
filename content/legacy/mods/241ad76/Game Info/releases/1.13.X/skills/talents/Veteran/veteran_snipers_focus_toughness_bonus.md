# 視野狹窄(Tunnel Vision)：原始碼依據

[English](en/veteran_snipers_focus_toughness_bonus.md)

[返回玩家說明](README.md#veteran_snipers_focus_toughness_bonus)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_snipers_focus_toughness_bonus`；名稱鍵：`loc_talent_veteran_snipers_focus_toughness_bonus`；描述鍵：`loc_talent_veteran_snipers_focus_stamina_bonus_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1764-L1786)：`keystone_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2656-L2676)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

特殊規則同時啟用每有效層 toughness_replenish_modifier=0.04，及遠程弱點擊殺分支的 Stamina.add_stamina_percent(unit,0.1)。韌性恢復透過 recover_percentage_toughness 乘上恢復加成；ignore_stat_buffs=true 的呼叫不套用。耐力以最大值乘百分比，補至最大值為止。前者是恢復量加成，不是每層立即回4%韌性；後者只限遠程弱點擊殺。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2656–2676 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2656-L2676)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2755–2802 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2755-L2802)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2803–2883 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2803-L2883)
- [scripts/utilities/attack/stamina.lua，第 102–118 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L118)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 253–285 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 遊戲本體繁中對照

- 文字來源：本機Steam Build `25606770`，`content/localization/ui`，2026-10-01擷取；不是MOD文字。
- 語系鍵：`loc_talent_veteran_snipers_focus_stamina_bonus_desc`；hash：`a8372526`；繁中entry_index：`10826`；英文entry_index：`10827`。以資源＋hash配對，已確認兩語系此hash各一筆。
- 繁中問題片段：「每層專注恢復」；同版英文對照片段：`Toughness Replenishment for each stack`。引文保留原始占位符，未冒充遊戲畫面的最終數字。
- 判定：**明確繁中描述錯誤**。把恢復量修正譯成直接恢復：每層寫入toughness_replenish_modifier=.04，由已存在的恢復事件乘入；不是每層發出一次韌性恢復。遠程擊殺限定的省略另視為不完整。
- 本項由同一份擷取資源的中英語義差異定位，再核對固定公開版本的格式／機制；不單憑文字與實作的差異判定繁中錯譯。完整文字只留本機，Git僅保存必要短引文與追溯資料。
- [完整比對範圍與版本限制](LOCALIZATION_COMPARISON.md)。

- [公開依據：scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第2815–2823行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2815-L2823)
- [公開依據：scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第253–269行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L269)

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_snipers_focus_toughness_bonus.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/62660bca-751b-435a-9d60-48590aadd37f)

圖片僅供技能辨識，不作機制證據。

