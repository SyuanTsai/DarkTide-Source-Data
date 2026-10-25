# 超巨量傷害箱(Bigger Box of Hurt)：原始碼依據

[English](en/ogryn_big_box_of_hurt_more_bombs.md)

[返回玩家說明](README.md#ogryn_big_box_of_hurt_more_bombs)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_big_box_of_hurt_more_bombs)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_big_box_of_hurt_more_bombs`；名稱鍵：`loc_talent_ogryn_big_box_of_hurt_more_bombs`；描述鍵：`loc_talent_ogryn_big_box_of_hurt_more_bombs_desc`。
- 節點：`node_28631a03-da8c-4125-8151-10ac4db22fae`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦定義顯示共享設定中的增加數量為 3；效果將同一設定寫入手雷箱集束數量屬性。
- 手雷箱集束投射物的基礎散出數是 6；投射物生成程式以基礎數量加上持有者的該項增益，計算實際生成數。
- 技能樹把此節點標為 tactical_modifier，並以手雷箱爆炸節點為父節點，因此它依附手雷箱閃擊。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2649–2664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2649-L2664)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3154–3160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3154-L3160)
- [scripts/settings/talent/talent_settings_ogryn.lua：121–123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L121-L123)
- [scripts/settings/projectile/player_projectile_templates.lua：973–1028](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L973-L1028)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua：736–803](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L736-L803)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2126–2145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2126-L2145)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2649–2664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2649-L2664)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2125–2147](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2125-L2147)

## 算例條件與待確認事項

- **數量算例**：手雷箱基礎散出 6 顆；選取此天賦後多 3 顆，合計為 6 + 3 = 9 顆。
- 若「驚喜箱」關鍵字生效，來源程式會從多種子投射物清單選擇類型；沒有該關鍵字時才使用一般集束手雷。
- 總傷害仍取決於散布、命中、爆炸距離、目標護甲與其他傷害修正。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`858b20e9`。
- 同 hash 858b20e9 的繁中與英文都只說釋出 3 顆手雷；天賦設定明確把 3 加到手雷箱的基礎 6 顆，因此本草稿將實際生成數寫為 9 顆。原文沒有重述基礎 6 顆屬資訊省略，不列為誤譯。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/tactical_modifier/ogryn_big_box_of_hurt_more_bombs.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/13c08b08-ef80-4f04-8a70-cddfa4db7389)

圖片僅供技能辨識，不作機制證據。

