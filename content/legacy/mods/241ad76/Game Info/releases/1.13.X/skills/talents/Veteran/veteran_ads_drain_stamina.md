# 死亡射手(Deadshot)：原始碼依據

[English](en/veteran_ads_drain_stamina.md)

[返回玩家說明](README.md#veteran_ads_drain_stamina)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_ads_drain_stamina`；名稱鍵：`loc_talent_ranger_ads_drains_stamina_boost`；描述鍵：`loc_talent_veteran_ads_drains_stamina_boost_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1443-L1469)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L248-L278)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

conditional由_is_in_weapon_alternate_fire_with_stamina判斷武器slot、alternate_fire與current_fraction>0；Stamina.drain扣實際耐力點數，不是每秒33%最大耐力。conditional spread=-0.19 recoil=-0.12 sway=0.4；耗盡時另施加一次immediate sway。on_shoot只檢查alternate_fire以扣0.1，非每顆散彈丸。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 248–278 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L248-L278)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1411–1487 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1411-L1487)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2281–2310 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2281-L2310)
- [scripts/utilities/attack/stamina.lua，第 14–42 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L14-L42)
- [scripts/settings/talent/talent_settings_veteran.lua，第 173–180 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L173-L180)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 遊戲本體繁中對照

- 文字來源：本機Steam Build `25606770`，`content/localization/ui`，2026-10-01擷取；不是MOD文字。
- 語系鍵：`loc_talent_veteran_ads_drains_stamina_boost_desc`；hash：`81e6a4bd`；繁中entry_index：`8433`；英文entry_index：`8434`。以資源＋hash配對，已確認兩語系此hash各一筆。
- 繁中問題片段：「後座力減免」；同版英文對照片段：`Sway Reduction`。引文保留原始占位符，未冒充遊戲畫面的最終數字。
- 判定：**明確繁中描述錯誤**。屬性名稱錯譯：同版英文是Sway Reduction；格式參數讀1-sway_modifier，設定sway=.4而recoil=-.12。不是術語風格差異，而是把一個數值套在另一屬性上。
- 本項由同一份擷取資源的中英語義差異定位，再核對固定公開版本的格式／機制；不單憑文字與實作的差異判定繁中錯譯。完整文字只留本機，Git僅保存必要短引文與追溯資料。
- [完整比對範圍與版本限制](LOCALIZATION_COMPARISON.md)。

- [公開依據：scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第248–263行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L248-L263)
- [公開依據：scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第1411–1425行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1411-L1425)
- [公開依據：scripts/settings/talent/talent_settings_veteran.lua，第173–180行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L173-L180)

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_ads_drain_stamina.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/e65e3909-4dac-413f-827d-f5db9138e5e2)

圖片僅供技能辨識，不作機制證據。

