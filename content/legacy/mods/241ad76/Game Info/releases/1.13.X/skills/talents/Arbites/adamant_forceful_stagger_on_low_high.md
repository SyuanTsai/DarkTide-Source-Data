# 審判之力(Judicial Force)：原始碼依據

[English](en/adamant_forceful_stagger_on_low_high.md)

[返回玩家說明](README.md#adamant_forceful_stagger_on_low_high)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_forceful_stagger_on_low_high)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_forceful_stagger_on_low_high`；名稱鍵：`loc_talent_adamant_forceful_melee`；描述鍵：`loc_talent_adamant_forceful_stagger_on_low_high_desc`。
- 節點：`node_deba29d6-030f-474a-9992-b6c75ee570bf`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- adamant_forceful_stagger 記錄前一幀與目前 stack count。由正數降到 0 且 low timer 到期時爆炸並將 low timer 設為 t+5；由低於 10 升到至少 10 且 high timer 到期時觸發並將 high timer 設為 t+5。
- local settings 以 low_stacks=0、high_stacks=10、internal_cd=5 填入天賦格式值；爆炸模板半徑 2.5，建立呼叫使用 power_level=750，並採 ogryn_charge_finish damage profile。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1603–1625](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1603-L1625)
- [scripts/settings/talent/talent_settings_adamant.lua：268–284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L268-L284)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1451–1475](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1451-L1475)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1435–1449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1435-L1449)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：147–163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L147-L163)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1603–1625](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1603-L1625)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：986–1009](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L986-L1009)

## 算例條件與待確認事項

- 從 9 層升至 10 層觸發高層爆炸；之後若降至 0 層，低層計時器獨立檢查是否已過 5 秒。
- 機制來源固定為公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；繁中、英文模板與程式來源皆為1.13.1；遊戲內最終顯示仍待核對。程式實作和文字措辭如有差異，先列文字與實作差異待核，不直接判為翻譯錯誤。
- 描述寫「使敵人踉蹌」；程式同時以攻擊 profile 建立爆炸。其實際傷害與踉蹌依 profile、目標與共用爆炸結算決定，文字版本待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ef289d31`。
- 繁中與英文都列0／10層震撼與各自冷卻；2.5公尺範圍及門檻穿越判斷屬補充，未列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_forceful_stagger_on_low_high.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/62f41d0b-cd55-459d-b4d7-c8c155da410f)

圖片僅供技能辨識，不作機制證據。

