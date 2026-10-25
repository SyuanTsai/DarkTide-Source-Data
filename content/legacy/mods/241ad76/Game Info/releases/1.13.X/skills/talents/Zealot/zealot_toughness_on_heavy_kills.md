# 惡毒贈禮(Vicious Offering)：原始碼依據

[English](en/zealot_toughness_on_heavy_kills.md)

[返回玩家說明](README.md#zealot_toughness_on_heavy_kills)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_toughness_on_heavy_kills)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_toughness_on_heavy_kills`；名稱鍵：`loc_talent_zealot_toughness_on_heavy_kills`；描述鍵：`loc_talent_zealot_toughness_on_heavy_kills_desc`。
- 節點：`node_b71544c5-61d9-4c06-8de3-0b834357c0c9`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- proc事件on_kill後check on_heavy_hit；恢復.1最大韌性。沒有cooldown_duration或max_stacks限制，每次合格事件各自恢復。繁中把Heavy Attack Kill譯為重攻擊命中，改變了必要擊殺條件，屬明確譯義錯誤。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：471–484](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L471-L484)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：438–446](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L438-L446)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2865–2886](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2865-L2886)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：399–425](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L399-L425)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、沒有其他恢復加成時，每次合格擊殺額外補 100 × 10% = 10 點。若只缺 4 點，就只補 4 點；原本的近戰擊殺恢復另計。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d50c0dd8`。
- 同一描述鍵的英文為 Heavy Attack Kill，繁中卻寫命中；固定實作也是 on_kill 再檢查重擊，必要擊殺條件被翻錯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_toughness_on_heavy_kills.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/eb0f681c-574a-447c-b917-9413f146fd72)

圖片僅供技能辨識，不作機制證據。

