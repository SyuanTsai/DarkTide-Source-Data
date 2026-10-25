# 爆擊能量過載(Critical Power Overload)：原始碼依據

[English](en/cryptic_overload_keystone_bigger_explosion.md)

[返回玩家說明](README.md#cryptic_overload_keystone_bigger_explosion)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_overload_keystone_bigger_explosion)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_overload_keystone_bigger_explosion`；名稱鍵：`loc_talent_cryptic_overload_keystone_bigger_explosion`；描述鍵：`loc_talent_cryptic_overload_keystone_bigger_explosion_desc`。
- 節點：`node_18456fa4-d46f-4a4e-ae55-1c1e9c09befd`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 修正的特殊規則會讓能量超載觸發時建立 cryptic_overload_keystone_debuff_explosion。爆炸使用半徑與最小半徑皆為8的模板，目標篩選為敵方 villains，並把 cryptic_overload_keystone_increase_damage_taken_debuff 附加給命中者。
- 附加效果持續8秒、最多1層，帶有 electrocuted keyword，並把 damage_taken_multiplier 設為1.15；同一效果再次套用會重新計時。
- 此爆炸的 damage_type 是 buff；傷害設定的 attack/impact power_distribution 和各護甲傷害修正均為0。因此它不以爆炸本身造成傷害，功能是提供電擊視覺/狀態與承傷倍率。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1284–1305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1284-L1305)
- [scripts/settings/talent/talent_settings_cryptic.lua：264–270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L264-L270)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1540–1548](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1540-L1548)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1809–1821](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1809-L1821)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：299–309](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L299-L309)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua：791–835](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L791-L835)
- [scripts/settings/buff/buff_settings.lua：775–775](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L775-L775)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1284–1305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1284-L1305)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：963–985](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L963-L985)

## 算例條件與待確認事項

- 靜態推演：敵人被電擊效果命中後，若一擊原本會造成100點傷害，且沒有其他修正，將承受115點。這15點來自敵人承傷提高；觸發超載的爆炸本身沒有攻擊傷害。
- 半徑8是固定版設定值；本機文字以近戰範圍描述，沒有列出數值半徑。
- 承傷提高作用於被爆炸命中的敵人，不會提高未被命中的敵人所受傷害。
- 以上為固定版程式碼的靜態推演，未在遊戲內實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`4bcf4f12`。
- 繁中與英文都寫明超載對近距離敵人施加電擊並提高其承受傷害，設定值為15%、8秒。固定版把近戰範圍落實為半徑8的敵人篩選，並以零傷害爆炸施加狀態；UI未寫半徑或爆炸自身不造成傷害屬細節省略，不構成明確翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_overload_keystone_bigger_explosion.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/a59865c6-45fb-4f1e-b360-b8100e541a00)

圖片僅供技能辨識，不作機制證據。

