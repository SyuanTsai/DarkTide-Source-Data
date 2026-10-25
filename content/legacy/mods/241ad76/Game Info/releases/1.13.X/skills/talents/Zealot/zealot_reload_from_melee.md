# 自掏腰包(Out of Pocket)：原始碼依據

[English](en/zealot_reload_from_melee.md)

[返回玩家說明](README.md#zealot_reload_from_melee)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_reload_from_melee)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_reload_from_melee`；名稱鍵：`loc_talent_zealot_reload_from_backstab`；描述鍵：`loc_talent_zealot_reload_from_melee_desc`。
- 節點：`node_ce599414-0b4e-4aae-b521-ef5f375e1b74`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_melee_kill後missing_ammo_in_clips*.1加入ammo_pool，floor後transfer_from_reserve_to_clip，扣掉floor數量而非實際移入數，因此備用彈藥不足時不保留未轉入整數額度。Ammo共用free_ammunition_transfer或infinite_ammo模式是例外，不適用一般有限備用彈藥算例。
- 同hash英文明確from your Reserve，繁中卻寫恢復缺失彈藥儲備，顛倒移入方向，屬明確譯義錯誤。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4681–4720](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4681-L4720)
- [scripts/settings/talent/talent_settings_zealot.lua：233–235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L233-L235)
- [scripts/utilities/ammo.lua：202–217](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L202-L217)
- [scripts/utilities/ammo.lua：452–465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L452-L465)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3184–3198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3184-L3198)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：2037–2059](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2037-L2059)

## 算例條件與待確認事項

- **裝填算例**：彈匣上限 30、目前 10 發，缺少 20 發，擊殺後從備用彈藥移入 20 × 10% = 2 發，變成 12 發。下次缺 18 發，計入 1.8 發，本次移入 1 發，剩下的 0.8 累積到後續擊殺。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`730a8c75`。
- 同源英文from your Reserve表明備用彈藥是來源；繁中將彈藥儲備寫成恢復對象。實作transfer_from_reserve_to_clip也確認由備用彈藥移入彈匣。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_reload_from_melee.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/e1dda6ab-d49e-4d08-bd44-f684dae4913f)

圖片僅供技能辨識，不作機制證據。

