# 熟練解剖者(Honed Dissector)：原始碼依據

[English](en/cryptic_dissector_max_stacks.md)

[返回玩家說明](README.md#cryptic_dissector_max_stacks)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_dissector_max_stacks)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_dissector_max_stacks`；名稱鍵：`loc_talent_cryptic_dissector_max_stacks`；描述鍵：`loc_talent_cryptic_dissector_max_stacks_desc`。
- 節點：`node_dcc243dd-aaf5-41cd-be8c-5db40d46967f`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings_cryptic.lua將max_stacks設為6、extra_max_stacks設為2。Definition顯示值計算6+2並設 special_rule cryptic_dissector_extra_max_stacks。
- cryptic_dissector start_func檢查此rule，把num_max_stacks設為8；cryptic_dissector_stack start_func同步增加max_stacks與max_stacks_cap 2，確保顯示層與外部受控buff的上限一致。被動初始化用num_max_stacks個stack，所以啟用後直接滿8層。stepped表也依6+2生成8層，傷害每層仍為2.5%、韌性承傷倍率第8階為0.80。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1124–1146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1124-L1146)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1162–1177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1162-L1177)
- [scripts/settings/talent/talent_settings_cryptic.lua：251–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L251-L263)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1369–1391](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1369-L1391)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1488–1528](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1488-L1528)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1162–1177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1162-L1177)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1124–1146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1124-L1146)

## 算例條件與待確認事項

- 靜態推演：6+2=8層；8×2.5%=20%傷害增幅，100點基礎傷害變成120點。韌性承傷倍率為1−0.025×8=0.80，100點原始韌性傷害變成80點。
- 只提高削切協議上限，不提高單層數值，也不更改受傷失層、精英／專家擊殺補層或擊殺韌性恢復規則。
- 傷害算例假設沒有其他傷害修正；韌性算例假設沒有其他減傷。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`52304209`。
- 繁中與英文都說明上限提高到8；固定版基礎6層加2層，文字一致。啟用時初始滿層及其既有每層效果是程式補充，不屬誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_dissector_max_stacks.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/17ab9d2c-793b-40c4-83bd-cb3c4bdee444)

圖片僅供技能辨識，不作機制證據。

