# 喘息片刻(Catch a Breath)：原始碼依據

[English](en/veteran_replenish_toughness_outside_melee.md)

[返回玩家說明](README.md#veteran_replenish_toughness_outside_melee)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_replenish_toughness_outside_melee`；名稱鍵：`loc_talent_veteran_replenish_toughness_outside_melee`；描述鍵：`loc_talent_veteran_replenish_toughness_outside_melee_hit_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L633-L663)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2379-L2402)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

template 記錄最後一次收到的 melee hit 時刻；只有 t > last_hit_t+5 後才在 server update 以 toughness=.05×dt 呼叫 Toughness.replenish_percentage。settings 中另有 time=.1 與 range=in_melee_range，但這個 buff 的實際 update/條件沒有讀取這兩個欄位，不能據其字面推定額外距離檢查。100 最大韌性時每秒請求 5，2 秒請求 10，實際恢復會封頂至缺失量。[天賦及顯示參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2379-L2402) → [設定值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L127-L132) → [5 秒門檻與每秒恢復](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1675-L1715) → [韌性恢復換算與封頂](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2379–2402 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2379-L2402)
- [scripts/settings/talent/talent_settings_veteran.lua，第 127–132 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L127-L132)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1675–1715 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1675-L1715)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 253–285 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- settings 的 range/time 欄位未由此 buff 消費；目前不能判定它們是留存欄位或供其他路徑使用，故不寫入玩家效果。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_replenish_toughness_outside_melee.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/19c86987-5e48-4eeb-9385-33697b9d99b0)

圖片僅供技能辨識，不作機制證據。

