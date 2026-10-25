# 狂熱(Fervor)：原始碼依據

[English](en/broker_stimm_celerity_5c.md)

[返回玩家說明](README.md#broker_stimm_celerity_5c)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_stimm_celerity_5c)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_stimm_celerity_5c`；名稱鍵：`loc_talent_broker_stimm_celerity_c`；描述鍵：`loc_talent_stat_movement_speed / loc_talent_stat_dodge_distance_modifier / loc_talent_stat_dodge_speed_multiplier / loc_talent_stat_dodge_cooldown_reset_modifier`。
- 節點：`node_7cb667f6-6558-44b4-b47d-67abf6bdef36`；分類：興奮劑配方；配點成本：5 點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 本配方 cost=max_points，因此只購買一次，並非可重複點選的等級數。已選的前置配方仍同時生效；各節點效果依 stat 類型加算或乘算。
- movement_speed與dodge_distance_modifier各+.1，dodge_speed_multiplier為multiplicative1.1；dodge_cooldown_reset_modifier=−.1，基底1降為.9，作用consecutive_dodges_cooldown。閃避總時長由距離、速度曲線與fixed steps求取，不能直接宣稱原時長÷1.1。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4091–4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4128–4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4210–4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua：114–145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L114-L145)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua：255–273](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L255-L273)
- [scripts/settings/buff/buff_settings.lua：793–806](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L793-L806)
- [scripts/settings/talent/talent_settings_broker.lua：558–580](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L558-L580)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua：540–563](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L540-L563)

## 算例條件與待確認事項

- **移動算例**：沒有其他加成時，原移速每秒 4 公尺變成 4 × 1.1 = 4.4 公尺；原閃避距離 2.5 公尺變成 2.5 × 1.1 = 2.75 公尺。
- 同一使用者的配方由 syringe_broker_buff 讀取並共同套用；場域分享時依提供者配方，外部控制的持續時間另按場域設定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`090b8be4 / ac38ced9 / f5994101 / 1863559c`。
- 逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_celerity_5c.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124)｜[圖片附件](https://github.com/user-attachments/assets/12ddbfdc-82bd-4ece-ba73-e6550451e5a4)

圖片僅供技能辨識，不作機制證據。

