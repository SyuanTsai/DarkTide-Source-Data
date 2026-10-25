# 神經質(Jittery)：原始碼依據

[English](en/broker_passive_improved_dodges_at_full_stamina.md)

[返回玩家說明](README.md#broker_passive_improved_dodges_at_full_stamina)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_improved_dodges_at_full_stamina)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_improved_dodges_at_full_stamina`；名稱鍵：`loc_talent_broker_passive_improved_dodges_at_full_stamina`；描述鍵：`loc_talent_broker_passive_improved_dodges_at_full_stamina_desc`。
- 節點：`node_c8272e59-a92d-4d10-b768-fc7539d3886f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- conditional以stamina_percentage>=.75判斷，dodge_reset_modifier=-.4。重設時間為(archetype.consecutive_dodges_reset+weapon額外)*buff_modifier。

## 原始碼依據

- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua：251–268](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L251-L268)
- [scripts/settings/talent/talent_settings_broker.lua：343–346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L343-L346)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1812–1834](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1812-L1834)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1340–1362](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1340-L1362)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：879–906](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L879-L906)

## 算例條件與待確認事項

- **時間算例**：原本停止連續閃避後需等待 1 秒，變成 1 × (1 − 40%) = 0.6 秒。最大耐力 4 點時，至少保有 4 × 75% = 3 點即可生效。
- 本機文字與原始碼對恰好75%的邊界不同，未做遊戲內驗證。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`abe61ad9`。
- 繁中與英文均寫「超過75%」，固定來源使用包含等於的>=。因兩種文字一致，且實際行為尚待遊戲內核對，記為邊界差異待遊戲內核對，不列繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_improved_dodges_at_full_stamina.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/ab7d66da-9caa-4c94-9ddf-279a30441f67)

圖片僅供技能辨識，不作機制證據。

