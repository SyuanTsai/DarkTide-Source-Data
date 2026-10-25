# 過載艾曼納圖斯力場(Overcharged Refraction Emitter)：原始碼依據

[English](en/cryptic_force_field_duration_increase.md)

[返回玩家說明](README.md#cryptic_force_field_duration_increase)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_force_field_duration_increase)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_force_field_duration_increase`；名稱鍵：`loc_talent_cryptic_force_field_duration_increase`；描述鍵：`loc_talent_cryptic_force_field_duration_increase_desc`。
- 節點：`node_c462607d-3464-41ba-b43c-6d210aa1d65f`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 節點啟用 cryptic_force_field_increased_duration_and_extra_explosion，能力選擇12秒的 action_activate_increased_duration，取代原本8秒動作。
- ActionActivateForceShield 在起始時立即爆炸，另記錄 t+total_time×0.5；抵達該時間時追加一次爆炸，finish時再爆炸一次。因此完整12秒的時間點為0、6、12秒，半徑均為5公尺。
- 若提前結束，只會發生已到達時間點的爆炸；例如第4秒結束，finish仍爆炸，但尚未抵達的6秒中點不觸發。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：832–855](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L832-L855)
- [scripts/settings/talent/talent_settings_cryptic.lua：164–181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L164-L181)
- [scripts/settings/ability/ability_templates/cryptic_force_field.lua：27–60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_force_field.lua#L27-L60)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua：49–84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L49-L84)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua：86–125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L86-L125)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1250–1289](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1250-L1289)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：278–298](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L278-L298)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：832–855](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L832-L855)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1889–1911](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1889-L1911)

## 算例條件與待確認事項

- 靜態時間軸：完整12秒持續期間內，0秒啟動爆炸、6秒中點爆炸、12秒結束爆炸；若在第4秒被迫中斷，結束爆炸仍會發生，但中點爆炸不會發生。
- 12秒是設定持續時間；若玩家被特定狀態中斷，實際期間會縮短。
- 此升級增加力場持續時間與爆炸次數，不會把每次爆炸的5公尺半徑或傷害設定一併提高。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`edf9be63`。
- 本分析固定於指定原始碼 SHA；本機 Build 25606770 的繁中說明與來源實作尚未確認為同一 Build。已依來源確認12秒與一次中點爆炸，未將更完整的時間線省略視為翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_force_field_duration_increase.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/e70f3e4b-d2c2-4840-bc29-56ba85dd816d)

圖片僅供技能辨識，不作機制證據。

