# 爆破小隊(Demolition Team)：原始碼依據

[English](en/veteran_aura_elite_kills_restore_grenade.md)

[返回玩家說明](README.md#veteran_aura_elite_kills_restore_grenade)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_aura_elite_kills_restore_grenade`；名稱鍵：`loc_talent_ranger_grenade_on_elite_kills_coop`；描述鍵：`loc_talent_veteran_grenade_on_elite_kills_coop_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L37-L66)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2196-L2211)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

雖talent.name註解稱你與隊友都獲得，實際proc_func最後只對template_context.unit的ability_extension restore1。擊殺者須在持有者in_coherence_units（含自己）；5%事件機率，無單獨cooldown。需區分此被動與可選光環。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2196–2211 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2196-L2211)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2064–2114 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2064-L2114)
- [scripts/settings/talent/talent_settings_veteran.lua，第 161–163 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L161-L163)
- [scripts/settings/talent/talent_settings_veteran.lua，第 141–147 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L141-L147)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_aura_elite_kills_restore_grenade.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/3ec21db4-4013-4522-850f-14c583e25ea7)

圖片僅供技能辨識，不作機制證據。

