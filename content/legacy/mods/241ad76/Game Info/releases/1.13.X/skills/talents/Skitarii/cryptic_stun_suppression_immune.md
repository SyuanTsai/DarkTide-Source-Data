# 目標殲滅回饋(Target-Neutralization Feedback)：原始碼依據

[English](en/cryptic_stun_suppression_immune.md)

[返回玩家說明](README.md#cryptic_stun_suppression_immune)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_stun_suppression_immune)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_stun_suppression_immune`；名稱鍵：`loc_talent_cryptic_stun_suppression_immune`；描述鍵：`loc_talent_cryptic_stun_suppression_immune_desc`。
- 節點：`node_d994641d-8ecc-44f0-82f9-cb16beef27ec`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_kill + on_weakspot_kill；proc_keywords stun_immune及suppression_immune，沒有傷害倍率或disable immunity。

## 原始碼依據

- [scripts/settings/buff/helper_functions/check_proc_functions.lua：84–95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L84-L95)
- [scripts/settings/talent/talent_settings_cryptic.lua：418–420](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L418-L420)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2368–2387](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2368-L2387)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1873–1887](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1873-L1887)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：783–807](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L783-L807)

## 算例條件與待確認事項

- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`38272d6c`。
- 中英「眩暈／Stun」為概括詞；以實際keyword區分一般受擊僵直與強制控制，不列誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stun_suppression_immune.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/127fa97e-a0cf-4421-bff2-7edb8edaed86)

圖片僅供技能辨識，不作機制證據。

