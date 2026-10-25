# 求勝心(Competitive Urge)：原始碼依據

[English](en/veteran_ally_kills_increase_damage.md)

[返回玩家說明](README.md#veteran_ally_kills_increase_damage)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_ally_kills_increase_damage`；名稱鍵：`loc_talent_veteran_ally_kills_increase_damage`；描述鍵：`loc_talent_veteran_ally_kills_increase_damage_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1252-L1281)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L775-L830)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

check只排除current_unit==attacking_unit，沒有協同或距離檢查；事件來源是minion_death，特殊非自身歸屬擊殺也可能通過，不把條件寫成只限協同隊友。max_stacks1 refresh_duration_on_stacktrue，三種加成0.2。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 775–830 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L775-L830)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2242–2279 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2242-L2279)
- [scripts/settings/talent/talent_settings_veteran.lua，第 242–248 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L242-L248)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_ally_kills_increase_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/284f479c-7f5d-463f-bf50-1003d34b9f5b)

圖片僅供技能辨識，不作機制證據。

