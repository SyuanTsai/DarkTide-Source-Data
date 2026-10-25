# 救贖教範(Salvation Doctrine)：原始碼依據

[English](en/cryptic_revive_speed_and_dr.md)

[返回玩家說明](README.md#cryptic_revive_speed_and_dr)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_revive_speed_and_dr)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_revive_speed_and_dr`；名稱鍵：`loc_talent_cryptic_revive_speed_and_dr`；描述鍵：`loc_talent_cryptic_revive_speed_and_dr_desc`。
- 節點：`node_f274c4fb-a29e-497a-a783-08f5ee20f839`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- _passive_revive_conditional以valid_help_interactions四種類型且interactor:is_interacting判定；revive_speed_modifier常駐0.25，同四種interaction映射此stat。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3007–3024](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3007-L3024)
- [scripts/settings/interaction/interaction_settings.lua：17–26](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/interaction/interaction_settings.lua#L17-L26)
- [scripts/extension_systems/interaction/interactor_extension.lua：134–164](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactor_extension.lua#L134-L164)
- [scripts/utilities/attack/damage_calculation.lua：584–611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L584-L611)
- [scripts/settings/talent/talent_settings_cryptic.lua：531–534](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L531-L534)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3026–3042](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3026-L3042)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2243–2266](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2243-L2266)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1962–1986](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1962-L1986)

## 算例條件與待確認事項

- **時間算例**：原本 4 秒的援助動作，在沒有其他速度加成時為 4 ÷ 1.25 = 3.2 秒。
- **減傷算例**：援助期間原本 100 點傷害變成 100 × 0.75 = 75；停止援助後不再享有這項減傷。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`16a4ff53`。
- 中英僅概括復活/Revive；支援其他援助類型屬補充，不列誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_revive_speed_and_dr.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/a86f113d-1a3e-4fc6-b1d1-24fe727b118d)

圖片僅供技能辨識，不作機制證據。

