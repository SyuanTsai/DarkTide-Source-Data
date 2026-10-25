# 鎖定目標(Targets Acquired)：原始碼依據

[English](en/adamant_forceful_offensive.md)

[返回玩家說明](README.md#adamant_forceful_offensive)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_forceful_offensive)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_forceful_offensive`；名稱鍵：`loc_talent_adamant_forceful_ranged`；描述鍵：`loc_talent_adamant_forceful_melee_alt_desc`。
- 節點：`node_adef8607-f04c-4b80-84a9-70247ea03536`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Forceful stack update 在達到 max stacks 時建立即時 adamant_forceful_offensive buff；離開 max 時移除即時 buff 並建立 duration=3 的 offensive_duration buff。
- 兩種 buff 都使用 attack_speed=0.10 與 max_hit_mass_attack_modifier=0.50；它不是按層數遞增的效果，而是滿層門檻 buff。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1626–1650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1626-L1650)
- [scripts/settings/talent/talent_settings_adamant.lua：268–284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L268-L284)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1310–1357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1310-L1357)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1500–1522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1500-L1522)
- [scripts/utilities/action/action_handler.lua：356–428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/utilities/attack/damage_profile.lua：36–62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L62)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1626–1650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1626-L1650)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：937–961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L937-L961)

## 算例條件與待確認事項

- 10 層時啟動 +10% 攻速與 +50% 順劈；離開 10 層後最多再保留 3 秒。
- 機制來源固定為公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；繁中、英文模板與程式來源皆為1.13.1；遊戲內最終顯示仍待核對。程式實作和文字措辭如有差異，先列文字與實作差異待核，不直接判為翻譯錯誤。
- 順劈目標數由武器、攻擊與目標 hit mass 的共用公式計算；+50% stat 不等於保證多命中固定數量敵人。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`57827aa3`。
- 繁中「疊滿層數時（以及後續的 3 秒內）獲得 10% 攻擊速度和 50% 順劈」對應英文 “While at Max Stacks, and for 3s afterwards, Gain 10% Attack Speed and 50% Cleave”；一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_forceful_offensive.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/3ecc49e6-a4c7-4d77-926d-623e4f8f34f6)

圖片僅供技能辨識，不作機制證據。

