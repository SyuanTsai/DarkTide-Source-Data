# 電擊打擊導管(Electro-Strike Conduit)：原始碼依據

[English](en/cryptic_melee_crits_electrocute_first.md)

[返回玩家說明](README.md#cryptic_melee_crits_electrocute_first)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_melee_crits_electrocute_first)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_melee_crits_electrocute_first`；名稱鍵：`loc_talent_cryptic_melee_crits_electrocute_first`；描述鍵：`loc_talent_cryptic_melee_crits_electrocute_first_desc`。
- 節點：`node_b15d80d0-fe7e-4552-a519-65dc496b9157`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_crit_melee AND on_first_target_melee_hit；存活且有buff_system才給cryptic_electrocution_default，該Buff duration3 max1 refresh。

## 原始碼依據

- [scripts/settings/buff/weapon_buff_templates.lua：2619–2674](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2619-L2674)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2456–2474](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2456-L2474)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1947–1956](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1947-L1956)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1374–1403](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1374-L1403)

## 算例條件與待確認事項

- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3fc35e67`。
- 中英一致；補充首名目標存活條件及電擊期限。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_melee_crits_electrocute_first.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/a754db43-e82a-44d0-af91-ea8d874d8c3c)

圖片僅供技能辨識，不作機制證據。

