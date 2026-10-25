# 利刃出鞘(Implacable)：原始碼依據

[English](en/ogryn_windup_reduces_damage_taken.md)

[返回玩家說明](README.md#ogryn_windup_reduces_damage_taken)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_windup_reduces_damage_taken)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_windup_reduces_damage_taken`；名稱鍵：`loc_talent_ogryn_windup_reduces_damage_taken`；描述鍵：`loc_talent_ogryn_windup_reduces_damage_taken_desc`。
- 節點：`node_27d9c0ef-dd49-4aaa-a921-1c334c824caf`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- action_settings.kind==windup時damage_taken_multiplier=.85；無持續時間或額外疊層。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：527–547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L527-L547)
- [scripts/utilities/attack/damage_calculation.lua：587–612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：904–930](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L904-L930)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：967–994](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L967-L994)

## 算例條件與待確認事項

- **減傷算例**：只計此效果，100 點傷害變成 100 × 0.85 = 85 點；另有獨立 20% 減傷時為 100 × 0.85 × 0.8 = 68 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fed4526c`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_windup_reduces_damage_taken.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/bb088b60-c1e8-42a7-b68e-3ef59f5d9eb9)

圖片僅供技能辨識，不作機制證據。

