# 能量爆發(Burst of Energy)：原始碼依據

[English](en/broker_passive_stun_immunity_on_toughness_broken.md)

[返回玩家說明](README.md#broker_passive_stun_immunity_on_toughness_broken)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_stun_immunity_on_toughness_broken)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_stun_immunity_on_toughness_broken`；名稱鍵：`loc_talent_broker_passive_stun_immunity_on_toughness_broken`；描述鍵：`loc_talent_broker_passive_stun_immunity_on_toughness_broken_desc`。
- 節點：`node_d774a7a8-87a2-4b0e-973e-5f735b67109f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_player_toughness_broken且CheckProcFunctions.is_self，proc_keywords stun_immune active6，serverreplenish.5。
- ProcBuff有cooldown時active期間不能再次啟用；cooling_down使用active_start+active_duration+cooldown，10秒從6秒效果結束後起算。

## 原始碼依據

- [scripts/extension_systems/buff/buffs/proc_buff.lua：150–181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L181)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_broker.lua：354–358](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L354-L358)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1888–1912](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1888-L1912)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1521–1544](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1521-L1544)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：200–230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L200-L230)

## 算例條件與待確認事項

- **恢復與冷卻算例**：最大韌性 100 時，單計本技能由 0 恢復到 50。觸發後先維持 6 秒免暈，再冷卻 10 秒；沒有其他變動時，兩次可觸發時間至少相隔 6 + 10 = 16 秒。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`261ee901`。
- 繁中與英文均列6秒免暈、50%韌性及10秒冷卻；未說明冷卻起算點屬補充，不列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_stun_immunity_on_toughness_broken.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/6f9a1e1d-3722-4f74-98ff-a17aadbd2ce4)

圖片僅供技能辨識，不作機制證據。

