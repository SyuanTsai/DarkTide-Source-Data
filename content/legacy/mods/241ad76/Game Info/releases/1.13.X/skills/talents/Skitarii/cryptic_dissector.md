# 削切協議(Flensing Protocols)：原始碼依據

[English](en/cryptic_dissector.md)

[返回玩家說明](README.md#cryptic_dissector)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_dissector)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_dissector`；名稱鍵：`loc_talent_cryptic_dissector`；描述鍵：`loc_talent_cryptic_dissector_desc`。
- 節點：`node_99899d45-4249-4113-8f2a-4e126a692a7b`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- cryptic_tree.lua 節點94–124將 cryptic_dissector 設為護教軍鑰石；cryptic_talents.lua 被動掛載 cryptic_dissector。talent_settings_cryptic.lua 基礎上限6、傷害每層0.025、韌性承傷步進0.025、受傷移層1、受傷間隔1秒、精英／專家擊殺補層2並恢復韌性15%。
- 被動初始化時先掛一個底層 stack 作零點，再加入6個可見 stack，因此啟用後從滿層開始。取目前可見層數時以 buff 堆疊數減1；Honed Dissector 修改器會讓邏輯與 buff 上限增加2至8。
- on_damage_taken 僅在受擊單位是本人、生命傷害或韌性傷害至少一項大於0、可見層數大於0且已過 stack_lost_cooldown_end_t 時成立。觸發後將下一次可失層時間設為t+1，最多移除1層。
- on_kill 僅由 elite 或 special tags 且死亡事件成立時進入。補層量是min(2, 缺少層數)，之後不論是否缺層都呼叫 Toughness.replenish_percentage(0.15,false)。韌性 helper 以最大韌性乘15%，並依現有韌性恢復修正套用；實際恢復仍受缺額上限限制。
- cryptic_dissector_stack 每層 damage=0.025，buff 計算依 stack_count 累加；韌性承傷逐層表是1−0.025×i，屬 multiplicative_multiplier。因此6層為 damage +15% 與承傷倍率0.85；上限8時為 damage +20% 與承傷倍率0.80。
- 此根被動也會辨識三個修改器狀態：能力使用時補滿缺少層數；伺服肌腱湧動開啟每層爆擊率與近戰攻速；熟練解剖者提高上限。這些效果在各修改器自己的稿中拆開說明。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：94–124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L94-L124)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1116–1161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1116-L1161)
- [scripts/settings/talent/talent_settings_cryptic.lua：251–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L251-L263)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1365–1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1365-L1392)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1412–1477](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1412-L1477)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1488–1528](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1488-L1528)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：96–117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L117)
- [scripts/utilities/toughness/toughness.lua：16–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–278](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L278)
- [scripts/extension_systems/buff/buffs/buff.lua：689–733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)
- [scripts/settings/buff/buff_settings.lua：763–763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L763)
- [scripts/settings/buff/buff_settings.lua：1001–1004](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1001-L1004)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1116–1161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1116-L1161)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：94–124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L94-L124)

## 算例條件與待確認事項

- 靜態推演：基礎6層時，每層傷害+2.5%按 additive_multiplier 累加為+15%，所以100點基礎傷害在其他條件相同時變成115點；韌性承傷表第6階為1−0.025×6=0.85，所以100點原始韌性傷害變成85點。
- 靜態推演：5層時擊殺精英或專家只補缺少的1層至6層；4層時則補至6層。若只有5層而上限被修改器提高到8，擊殺後為7層。各例都同時恢復最大韌性15%，但只恢復目前缺額。
- 擊殺恢復量以最大韌性為分母，實際恢復不能超過目前缺額。
- 受傷移層有1秒內置間隔；同一秒內多次受傷不會逐次扣層。
- 滿層時擊殺不會超過層數上限，但韌性恢復仍照常觸發。
- 靜態推演依固定原始碼完成，未在遊戲內實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3e2c62db`。
- inventory 的繁中與英文都說明上限6層、每層傷害與韌性減傷2.5%、受傷每秒最多失1層、精英／專家擊殺補2層並恢復15%韌性。固定版支持數值與觸發；啟用時從滿層開始，以及滿層擊殺仍回韌性，是UI未展開的實作細節，不屬誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone/cryptic_dissector.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/856a3399-5f26-40e1-988e-8960086a92c9)

圖片僅供技能辨識，不作機制證據。

