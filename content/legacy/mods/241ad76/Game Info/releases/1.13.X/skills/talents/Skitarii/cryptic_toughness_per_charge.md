# 自我修復教義(Auto-Repair Doctrines)：原始碼依據

[English](en/cryptic_toughness_per_charge.md)

[返回玩家說明](README.md#cryptic_toughness_per_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_toughness_per_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_toughness_per_charge`；名稱鍵：`loc_talent_cryptic_toughness_per_charge`；描述鍵：`loc_talent_cryptic_toughness_per_charge_desc`。
- 節點：`node_04679cd0-b399-4ced-a6e8-e655bf0c3b06`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 每update讀remaining_ability_charges整數，(0.03+0.005n)*dt呼叫replenish_percentage，沒有距離/擊殺/協同條件。

## 原始碼依據

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1058–1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1058-L1075)
- [scripts/settings/talent/talent_settings_cryptic.lua：603–606](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L603-L606)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3228–3249](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3228-L3249)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2427–2447](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2427-L2447)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：645–671](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L645-L671)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 200、保有 3 份時，每秒恢復 200 × (3% + 3 × 0.5%) = 9 點；0 份時仍每秒恢復 200 × 3% = 6 點。
- 韌性恢復以最大值計算，可受恢復加成影響且補到上限為止；算例固定無其他恢復加成。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`04db1c7b`。
- 中英一致；補充以最大韌性與完整電容量為基準。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_toughness_per_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/003d8e80-1bb4-46b0-aad1-e2f6d78be693)

圖片僅供技能辨識，不作機制證據。

