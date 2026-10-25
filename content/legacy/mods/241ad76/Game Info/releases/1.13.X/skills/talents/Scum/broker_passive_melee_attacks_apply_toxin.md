# 塗讀武裝(Coated Weaponry)：原始碼依據

[English](en/broker_passive_melee_attacks_apply_toxin.md)

[返回玩家說明](README.md#broker_passive_melee_attacks_apply_toxin)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_melee_attacks_apply_toxin)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_melee_attacks_apply_toxin`；名稱鍵：`loc_talent_broker_passive_melee_attacks_apply_toxin`；描述鍵：`loc_talent_broker_passive_melee_attacks_apply_toxin_desc`。
- 節點：`node_82e26378-1ad7-41c9-bd62-db6fee2779f7`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit要求on_crit_melee，add1 neurotoxin_interval_buff3。duration2.6，interval.35，interval_stack_removal=true，cap30，refresh。

## 原始碼依據

- [scripts/settings/buff/weapon_buff_templates.lua：1493–1523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1523)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：25–63](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L25-L63)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2964–2985](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2964-L2985)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2155–2179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2155-L2179)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1279–1305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1279-L1305)

## 算例條件與待確認事項

- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`4108cdaa`。
- 繁中與英文皆為近戰爆擊施加毒素，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_melee_attacks_apply_toxin.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/f92b996b-c59e-4d6b-90ac-a31046be1abd)

圖片僅供技能辨識，不作機制證據。

