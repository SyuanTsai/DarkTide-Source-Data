# 靈活應對(Duck and Dive)：原始碼依據

[English](en/veteran_dodging_grants_stamina.md)

[返回玩家說明](README.md#veteran_dodging_grants_stamina)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_dodging_grants_stamina`；名稱鍵：`loc_talent_ranger_stamina_on_ranged_dodge`；描述鍵：`loc_talent_veteran_stamina_on_ranged_dodge_movement_speed_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1580-L1604)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1750-L1771)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

movement_speed放stat_buffs，常駐而非躲避後短暫獲得。on_ranged_dodge恢復stamina_percent0.3，cooldown_duration3；動作必須真正產生躲避遠程命中事件，不能只按閃避鍵。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1750–1771 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1750-L1771)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1935–1948 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1935-L1948)
- [scripts/utilities/attack/stamina.lua，第 102–119 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/settings/talent/talent_settings_veteran.lua，第 151–154 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L151-L154)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 遊戲本體繁中對照

- 文字來源：本機Steam Build `25606770`，`content/localization/ui`，2026-10-01擷取；不是MOD文字。
- 語系鍵：`loc_talent_veteran_stamina_on_ranged_dodge_movement_speed_desc`；hash：`76c89d3d`；繁中entry_index：`7712`；英文entry_index：`7713`。以資源＋hash配對，已確認兩語系此hash各一筆。
- 繁中問題片段：「耐力消耗」；同版英文對照片段：`Stamina on avoiding Ranged Attacks`。引文保留原始占位符，未冒充遊戲畫面的最終數字。
- 判定：**明確繁中描述錯誤**。資源操作錯譯：實作為Stamina.add_stamina_percent，參數.3；英文Stamina on avoiding與繁中耐力消耗不同。漏寫3秒冷卻屬不完整，不列為另一項錯誤。
- 本項由同一份擷取資源的中英語義差異定位，再核對固定公開版本的格式／機制；不單憑文字與實作的差異判定繁中錯譯。完整文字只留本機，Git僅保存必要短引文與追溯資料。
- [完整比對範圍與版本限制](LOCALIZATION_COMPARISON.md)。

- [公開依據：scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第1935–1948行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1935-L1948)
- [公開依據：scripts/settings/talent/talent_settings_veteran.lua，第151–154行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L151-L154)
- [公開依據：scripts/utilities/attack/stamina.lua，第102–119行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_dodging_grants_stamina.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/8567315b-bea7-4be4-aaec-22d7096945a9)

圖片僅供技能辨識，不作機制證據。

