# 激鬥戰火(Heat of Battle)：原始碼依據

[English](en/ogryn_blo_wield_speed.md)

[返回玩家說明](README.md#ogryn_blo_wield_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_blo_wield_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_blo_wield_speed`；名稱鍵：`loc_talent_ogryn_blo_wield_speed`；描述鍵：`loc_talent_ogryn_blo_fire_rate_desc`。
- 節點：`node_19d2bd1b-f551-494a-afc5-cb511ae26574`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦格式值為每層 0.015；對應效果為遠程射速，並隨爆限超載的 10 層逐步增加，滿層為 15%。
- 本機 inventory 將 Heat of Battle 翻為「激鬥戰火」；此節點使用遠程射速效果，並非「熱身完畢！」近戰重拳分支。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2665–2684](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2665-L2684)
- [scripts/settings/talent/talent_settings_ogryn.lua：203–210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L203-L210)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3579–3637](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3579-L3637)
- [scripts/extension_systems/weapon/actions/action_shoot.lua：1239–1249](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L1239-L1249)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2665–2684](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2665-L2684)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1928–1951](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1928-L1951)

## 算例條件與待確認事項

- **算例**：6 層增加 9% 遠程射速；滿 10 層增加 15%。若基礎連射間隔為 1 秒，滿層後約為 1 ÷ 1.15 = 0.87 秒。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 「激鬥戰火」節點的實際加成是遠程射速；連射間隔按攻擊速度倒數縮短。
- blo_passive_lerp_value為模組共用比例；多位歐格林同場時的交互更新未實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7290e9ce`。
- 繁中寫「每層額外提高…射速」，英文寫「also grants … Fire Rate per Stack」；兩者都表示此效果依爆限超載層數逐層增加。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_blo_wield_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/a9ec95cc-0b91-4558-81b5-faefcf1207d7)

圖片僅供技能辨識，不作機制證據。

