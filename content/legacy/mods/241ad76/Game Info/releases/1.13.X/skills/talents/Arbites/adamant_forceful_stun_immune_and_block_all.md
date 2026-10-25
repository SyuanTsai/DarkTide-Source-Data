# 堅定意志(Adamant Will)：原始碼依據

[English](en/adamant_forceful_stun_immune_and_block_all.md)

[返回玩家說明](README.md#adamant_forceful_stun_immune_and_block_all)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_forceful_stun_immune_and_block_all)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_forceful_stun_immune_and_block_all`；名稱鍵：`loc_talent_adamant_forceful_stamina_block_and_push_alt`；描述鍵：`loc_talent_adamant_forceful_stun_immune_and_block_all_linger_desc`。
- 節點：`node_011c39aa-3025-4c37-b8de-608a36813a25`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent special rule 讓 Forceful stack buff 在 stack_count>=10 時加上 stun_immune buff。由滿層轉為未滿時移除即時 buff，另建 3 秒 linger buff。
- 兩個 buff 都有 stun_immune、slowdown_immune；conditional_keywords_func 只在 block_component.is_perfect_blocking 時提供 block_unblockable。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1547–1561](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1547-L1561)
- [scripts/settings/talent/talent_settings_adamant.lua：268–284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L268-L284)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1310–1357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1310-L1357)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1523–1569](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1523-L1569)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1547–1561](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1547-L1561)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：912–936](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L912-L936)

## 算例條件與待確認事項

- Forceful 從 9 層升到 10 層時啟動；受傷移除一層後，免疫與完美格擋條件效果再保留 3 秒。
- 機制來源固定為公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；繁中、英文模板與程式來源皆為1.13.1；遊戲內最終顯示仍待核對。程式實作和文字措辭如有差異，先列文字與實作差異待核，不直接判為翻譯錯誤。
- 「所有攻擊」受 perfect-block state 與 block_unblockable keyword 共用格擋邏輯限制；此草稿不延伸到其他格擋狀態。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`8e7f2015`。
- 繁中「疊滿層數時（以及後續的 3 秒內）免疫眩暈，且完美格擋能格擋所有攻擊」對應英文 “While at Max Stacks, and for 3s afterwards … your perfect blocks can block all attacks”；條件一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_forceful_stun_immune_and_block_all.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/92922b1c-4991-480e-86af-e050b9faa496)

圖片僅供技能辨識，不作機制證據。

