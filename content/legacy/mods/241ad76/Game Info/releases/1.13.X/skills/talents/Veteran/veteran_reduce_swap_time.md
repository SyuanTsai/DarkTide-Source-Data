# 行雲流水(One Motion)：原始碼依據

[English](en/veteran_reduce_swap_time.md)

[返回玩家說明](README.md#veteran_reduce_swap_time)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_reduce_swap_time`；名稱鍵：`loc_talent_veteran_reduce_swap_time`；描述鍵：`loc_talent_veteran_reduce_swap_time_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1415-L1442)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1898-L1924)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

buff.wield_speed=0.5；ActionHandler列wield/unwield/ranged_wield等動作時計算time_scale，total_time/time_scale。talent.name註解25%已過時，執行值50%。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1898–1924 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1898-L1924)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 949–955 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L949-L955)
- [scripts/utilities/action/action_handler.lua，第 345–365 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L345-L365)
- [scripts/utilities/action/action_handler.lua，第 375–400 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L375-L400)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 遊戲本體繁中對照

- 文字來源：本機Steam Build `25606770`，`content/localization/ui`，2026-10-01擷取；不是MOD文字。
- 語系鍵：`loc_talent_veteran_reduce_swap_time_desc`；hash：`8de5cb15`；繁中entry_index：`9185`；英文entry_index：`9186`。以資源＋hash配對，已確認兩語系此hash各一筆。
- 繁中問題片段：「速度縮短為」；同版英文對照片段：`Weapon Swap Speed`。引文保留原始占位符，未冒充遊戲畫面的最終數字。
- 判定：**明確繁中描述錯誤**。把速度加成寫成縮短為某比例：swap_speed格式帶正號，實作wield_speed=.5，時間除以速度倍率。屬計算量與操作錯誤，不是少寫詳細公式。
- 本項由同一份擷取資源的中英語義差異定位，再核對固定公開版本的格式／機制；不單憑文字與實作的差異判定繁中錯譯。完整文字只留本機，Git僅保存必要短引文與追溯資料。
- [完整比對範圍與版本限制](LOCALIZATION_COMPARISON.md)。

- [公開依據：scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第1898–1924行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1898-L1924)
- [公開依據：scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第949–955行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L949-L955)
- [公開依據：scripts/utilities/action/action_handler.lua，第345–365行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L345-L365)
- [公開依據：scripts/utilities/action/action_handler.lua，第375–400行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L375-L400)

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_reduce_swap_time.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/f51a3100-c73f-4d71-833e-a71bb9e002bc)

圖片僅供技能辨識，不作機制證據。

