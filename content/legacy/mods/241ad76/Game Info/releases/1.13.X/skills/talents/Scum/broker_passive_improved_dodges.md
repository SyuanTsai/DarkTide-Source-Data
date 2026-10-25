# 靈巧(Nimble)：原始碼依據

[English](en/broker_passive_improved_dodges.md)

[返回玩家說明](README.md#broker_passive_improved_dodges)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_improved_dodges)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_improved_dodges`；名稱鍵：`loc_talent_broker_passive_improved_dodges`；描述鍵：`loc_talent_broker_passive_improved_dodges_desc_02`。
- 節點：`node_81fd0da4-87be-4750-a5b7-c51bb4eb9fef`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings 設 dodge_speed_multiplier=1.25、dodge_linger_time=0.15；buff template 將兩值分別掛到 stat_buffs.dodge_speed_multiplier 與 stat_buffs.dodge_linger_time。
- dodge_speed_multiplier 在 buff_settings 登記為 multiplicative_multiplier。閃避狀態更新將基準曲線速度乘上該倍率；估算閃避總時間也逐固定時間步累加位移至目標距離，因此在路徑不變時，時間約按 1/1.25 縮短。
- Dodge.is_dodging 對近戰／擒抱使用 archetype 的基礎 dodge_linger_time，遠程不使用基礎值；兩者之後都加上 stat_buffs.dodge_linger_time。Broker 基礎值為 0.25 秒，因此近戰／擒抱為 0.40 秒，遠程為 0.15 秒。

## 原始碼依據

- [scripts/settings/talent/talent_settings_broker.lua：259–262](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L259-L262)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1066–1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1066-L1102)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1113–1120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1113-L1120)
- [scripts/settings/buff/buff_settings.lua：799–804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L799-L804)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua：114–150](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L114-L150)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua：189–217](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L189-L217)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua：100–127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L100-L127)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua：133–167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L133-L167)
- [scripts/settings/dodge/archetype_dodge_templates.lua：213–220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/dodge/archetype_dodge_templates.lua#L213-L220)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1066–1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1066-L1103)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：434–461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L434-L461)

## 算例條件與待確認事項

- **速度算例**：基準閃避速度 4 m/s 時，4 × 1.25 = 5 m/s；同一段路徑的時間約縮為原來的 0.8 倍。
- **判定時間算例**：Broker 近戰／擒抱為 0.25 + 0.15 = 0.40 秒；遠程判定窗口為 0 + 0.15 = 0.15 秒。
- 速度算例假設只套用此倍率；基礎閃避曲線、武器設定與其他修正會改變實際速度及總動作時間。
- 判定窗口代表攻擊判定將角色視為正在閃避；各攻擊是否採用閃避規則仍由攻擊類型與攻擊邏輯決定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1cc9786f`。
- 繁中與英文都描述閃避速度提高及被視為閃避的時間延長；25% 倍率、0.15 秒加值和各攻擊類型的判定方式均由固定版本程式設定支持。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_passive_improved_dodges.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/4575cb9c-10e2-489c-8b4f-0b8f4eda154d)

圖片僅供技能辨識，不作機制證據。

