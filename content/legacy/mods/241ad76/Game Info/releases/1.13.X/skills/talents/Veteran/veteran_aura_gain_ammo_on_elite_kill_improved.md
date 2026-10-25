# 生存專家(Survivalist)：原始碼依據

[English](en/veteran_aura_gain_ammo_on_elite_kill_improved.md)

[返回玩家說明](README.md#veteran_aura_gain_ammo_on_elite_kill_improved)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_aura_gain_ammo_on_elite_kill_improved`；名稱鍵：`loc_talent_veteran_elite_kills_grant_ammo_coop_improved`；描述鍵：`loc_talent_veteran_elite_kills_grant_ammo_coop_improved_cd_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1497-L1523)：`aura`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L667-L695)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

coherency priority2替換基礎aura；buff proc由被賦予此buff的擊殺者unit執行，for其coherency集合Ammo.add_to_all_slots(0.005)。cooldown5；check只驗tags，proc_func內才檢查attacking_unit==unit，ProcBuff會在proc_func返回後照樣設active_start_time，因此收到其他合資格死亡事件時可能消耗冷卻而未補彈；不是保證所有全圖精英死亡都給彈。Ammo只以max_ammo_reserve乘percent，floor並保留小數；上限受備用彈藥+彈匣缺額。自身survivalist_passive另於本人擊殺專家／精英時補0.01。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 667–695 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L667-L695)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1542–1596 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1542-L1596)
- [scripts/utilities/ammo.lua，第 494–529 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L529)
- [scripts/extension_systems/buff/buffs/proc_buff.lua，第 311–354 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L311-L354)
- [scripts/settings/talent/talent_settings_veteran.lua，第 105–109 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L105-L109)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 死亡事件接收次序可能先消耗光環冷卻，精確隊伍事件時序未經遊戲內驗證。

## 遊戲本體繁中對照

- 文字來源：本機Steam Build `25606770`，`content/localization/ui`，2026-10-01擷取；不是MOD文字。
- 語系鍵：`loc_talent_veteran_elite_kills_grant_ammo_coop_improved_cd_desc`；hash：`c68ffc9a`；繁中entry_index：`12809`；英文entry_index：`12810`。以資源＋hash配對，已確認兩語系此hash各一筆。
- 繁中問題片段：「發彈藥」；同版英文對照片段：`Replenish {ammo_2:%s} Ammo`。引文保留原始占位符，未冒充遊戲畫面的最終數字。
- 判定：**明確繁中描述錯誤**。單位錯誤：ammo_2使用percentage，繁中卻接固定數量單位發。另少寫隊友擊殺也可觸發，屬不完整，不另外列為錯誤。
- 本項由同一份擷取資源的中英語義差異定位，再核對固定公開版本的格式／機制；不單憑文字與實作的差異判定繁中錯譯。完整文字只留本機，Git僅保存必要短引文與追溯資料。
- [完整比對範圍與版本限制](LOCALIZATION_COMPARISON.md)。

- [公開依據：scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第677–688行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L677-L688)
- [公開依據：scripts/settings/talent/talent_settings_veteran.lua，第105–109行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L105-L109)

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/aura/veteran_aura_gain_ammo_on_elite_kill_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/c2dffa00-cd24-478f-96c7-4007f4239e6a)

圖片僅供技能辨識，不作機制證據。

