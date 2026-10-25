# 重量級(Heavyweight)：原始碼依據

[English](en/ogryn_ogryn_killer.md)

[返回玩家說明](README.md#ogryn_ogryn_killer)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_ogryn_killer)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_ogryn_killer`；名稱鍵：`loc_talent_ogryn_ogryn_fighter`；描述鍵：`loc_talent_ogryn_ogryn_fighter_desc`。
- 節點：`node_f92c86fb-b19e-47fa-81bc-a78a2d834608`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- buff同時提供 damage_vs_ogryn=.3、damage_vs_chaos_plague_ogryn=.3；前者看ogryn tag，後者看breed name。瘟疫歐格林只有monster/minion tag，因此兩份不重疊。
- 對應承傷倍率 .7 分別看ogryn tag及瘟疫歐格林breed，通用結算與其他減傷倍率相乘。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1121–1130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1121-L1130)
- [scripts/settings/talent/talent_settings_ogryn.lua：325–328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L325-L328)
- [scripts/utilities/attack/damage_calculation.lua：278–282](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L282)
- [scripts/utilities/attack/damage_calculation.lua：392–396](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L392-L396)
- [scripts/utilities/attack/damage_calculation.lua：587–626](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L626)
- [scripts/settings/breed/breeds/chaos/chaos_plague_ogryn_breed.lua：66–69](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_plague_ogryn_breed.lua#L66-L69)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1152–1173](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1152-L1173)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：164–193](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L164-L193)

## 算例條件與待確認事項

- **傷害算例**：只看傷害加成階段，100 × (1 + 30%) = 130 點；同階段原有 20% 增傷時為 150 點。受到原本 100 點傷害時，套用本天賦後為 100 × 0.7 = 70 點，其他減傷另算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d9a22157`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_ogryn_killer.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/c006f0e1-3f32-4dcc-891a-8c44b4ebe6df)

圖片僅供技能辨識，不作機制證據。

