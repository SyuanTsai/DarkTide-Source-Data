# 穩定握持(Steady Grip)：原始碼依據

[English](en/ogryn_toughness_while_bracing.md)

[返回玩家說明](README.md#ogryn_toughness_while_bracing)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_toughness_while_bracing)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_toughness_while_bracing`；名稱鍵：`loc_talent_ogryn_toughness_regen_while_bracing`；描述鍵：`loc_talent_ogryn_toughness_regen_while_bracing_or_shooting_desc`。
- 節點：`node_242b8a28-11b1-4dd3-b008-591072dae869`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- server每dt Toughness.replenish_percentage(.125×dt)；braced或shooting/end+.5。is_wielded只用HUD的is_active，server恢復分支沒有該檢查，短暫切武器狀態殘留待實測。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2266–2302](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2266-L2302)
- [scripts/settings/talent/talent_settings_ogryn.lua：249–251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L249-L251)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：764–780](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L764-L780)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1874–1898](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1874-L1898)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 200 時，每秒基礎恢復 200 × 12.5% = 25 點；持續 2 秒共 50 點。韌性恢復加成可再修正恢復量，且不會超過缺少的韌性。
- 切武器時alternate_fire/shooting狀態清理時序未做遊戲實測，不宣稱切換後必定立即停止恢復。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c73dc498`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_toughness_while_bracing.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/ce3b22d4-870e-4496-96fc-33601f9d9a62)

圖片僅供技能辨識，不作機制證據。

