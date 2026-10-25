# 輕蔑之盾(Shield of Contempt)：原始碼依據

[English](en/zealot_ally_damage_taken_reduced.md)

[返回玩家說明](README.md#zealot_ally_damage_taken_reduced)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_ally_damage_taken_reduced)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_ally_damage_taken_reduced`；名稱鍵：`loc_talent_zealot_3_tier_4_ability_3`；描述鍵：`loc_talent_zealot_3_tier_4_ability_3_description`。
- 節點：`node_101154ca-57f6-45a4-beea-41dcd21be41f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_damage_taken由Damage對side.valid_player_units廣播；此模板只查params.damage_amount>0，沒有coherency、距離或持有者相等檢查，並對params.attacked_unit施加防禦buff。生命傷害為0、只有韌性受損時不通過。
- 模板cooldown8而active_duration未設，子效果duration4，兩者計時分離，不能寫成4+8=12秒。子效果damage_taken_multiplier=.4；其max_stacks未設，多名持有者的獨立施加需按共用實例乘算處理。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：527–568](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L527-L568)
- [scripts/settings/talent/talent_settings_zealot.lua：519–523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L519-L523)
- [scripts/utilities/attack/damage.lua：154–180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L180)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：150–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L184)
- [scripts/utilities/attack/damage_calculation.lua：590–610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3149–3173](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3149-L3173)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：569–595](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L569-L595)

## 算例條件與待確認事項

- **減傷算例**：只計這份效果，之後原本 100 點傷害變成 100 × 0.4 = 40 點。第 0 秒觸發時，效果約於第 4 秒結束，約第 8 秒才能再次觸發。
- 本機中英文都限定協同，但固定執行流程沒有協同檢查；文字與程式來源皆為1.13.1；實際行為待遊戲內核對，不列繁中誤譯。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`96972711`。
- 繁中與英文皆指協同成員；固定來源的on_damage_taken廣播及本模板未做協同檢查。這是跨來源範圍差異，實際範圍待遊戲內核對，不單憑此判定翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_ally_damage_taken_reduced.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/42daeb1b-ec7d-4f9b-bc58-f89c1de5d9b4)

圖片僅供技能辨識，不作機制證據。

