# 換彈完畢(Reloaded and Ready)：原始碼依據

[English](en/ogryn_reloading_grants_damage.md)

[返回玩家說明](README.md#ogryn_reloading_grants_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_reloading_grants_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_reloading_grants_damage`；名稱鍵：`loc_talent_ogryn_ranged_damage_on_reload`；描述鍵：`loc_talent_ogryn_ranged_damage_on_reload_desc`。
- 節點：`node_a48230be-6330-4e03-871c-0a3881828604`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_reload，active_duration8，ranged_damage .15；不是舊name註解的12%/6s。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2094–2111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2094-L2111)
- [scripts/settings/talent/talent_settings_ogryn.lua：220–223](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L220-L223)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：323–345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L323-L345)
- [scripts/utilities/attack/damage_calculation.lua：278–320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L320)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1089–1109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1089-L1109)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1099–1128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1099-L1128)

## 算例條件與待確認事項

- **傷害算例**：基礎 100 點遠程傷害變成 115 點；同階段已有 20% 加成時為 100 × (1 + 20% + 15%) = 135 點。近戰傷害不受此加成影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`a8bc8a04`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_reloading_grants_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/27fcc279-9828-4df7-b895-04956bb2463b)

圖片僅供技能辨識，不作機制證據。

