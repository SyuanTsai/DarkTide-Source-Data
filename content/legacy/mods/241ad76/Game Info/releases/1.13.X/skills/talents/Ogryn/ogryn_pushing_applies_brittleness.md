# 蠻橫之力(Brutish Strength)：原始碼依據

[English](en/ogryn_pushing_applies_brittleness.md)

[返回玩家說明](README.md#ogryn_pushing_applies_brittleness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_pushing_applies_brittleness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_pushing_applies_brittleness`；名稱鍵：`loc_talent_ogryn_pushing_applies_brittlenes`；描述鍵：`loc_talent_ogryn_pushing_applies_brittlenes_desc`。
- 節點：`node_11f1b2c0-3982-411e-b0fd-9f51ef609d6c`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_push_hit adds rending_debuff4；通用duration5 max/cap16 refresh .025每層；target rending與attacker rending合算。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3401–3422](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3401-L3422)
- [scripts/settings/talent/talent_settings_ogryn.lua：147–149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L147-L149)
- [scripts/settings/buff/weapon_buff_templates.lua：366–376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376)
- [scripts/utilities/attack/damage_calculation.lua：64–84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L64-L84)
- [scripts/utilities/attack/damage_calculation.lua：629–660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2476–2490](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2476-L2490)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1648–1670](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1648-L1670)

## 算例條件與待確認事項

- **傷害算例**：假設對甲殼護甲的原倍率為 0.5、基礎傷害 100，一次推擊後為 100 × (0.5 + 4 × 2.5%) = 60 點；滿 16 層為 90 點。超過護甲倍率 1 的部分另按超額撕裂規則計算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f63bfc12`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_pushing_applies_brittleness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/024bec9b-772c-4313-b7b8-d119efdcf8f1)

圖片僅供技能辨識，不作機制證據。

