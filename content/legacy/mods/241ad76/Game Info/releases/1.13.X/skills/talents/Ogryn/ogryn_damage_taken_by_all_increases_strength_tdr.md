# 相親相愛好夥伴！(No Hurting Friends!)：原始碼依據

[English](en/ogryn_damage_taken_by_all_increases_strength_tdr.md)

[返回玩家說明](README.md#ogryn_damage_taken_by_all_increases_strength_tdr)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_damage_taken_by_all_increases_strength_tdr)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_damage_taken_by_all_increases_strength_tdr`；名稱鍵：`loc_talent_ogryn_damage_taken_by_all_increases_strength_tdr`；描述鍵：`loc_talent_ogryn_damage_taken_by_all_increases_strength_tdr_desc`。
- 節點：`node_a1ee7d5a-d620-416a-854a-96054870ed5d`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_damage_taken檢查attacked_unit是自己或協同單位；damage.lua生命傷害流程與純韌性傷害流程均派發事件。
- child每層power_level_modifier .02，max5 duration10 refresh；滿層子buff toughness_damage_taken_multiplier .85，current_stacks<5即退出。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3681–3743](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3681-L3743)
- [scripts/settings/talent/talent_settings_ogryn.lua：176–181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L176-L181)
- [scripts/utilities/attack/damage.lua：133–178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L133-L178)
- [scripts/utilities/attack/damage.lua：202–229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L202-L229)
- [scripts/utilities/attack/power_level.lua：63–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/utilities/attack/damage_taken_calculation.lua：223–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2685–2716](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2685-L2716)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：913–939](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L913-L939)

## 算例條件與待確認事項

- **威力算例**：只計此加成，威力 500 變成 500 × (1 + 5 × 2%) = 550。威力會影響傷害、衝擊力與順劈；實際傷害還需套用武器曲線與目標護甲，不能一律把最終傷害乘 1.1。
- **減傷算例**：滿層後，此階段原本承受的 100 點韌性傷害變成 100 × 0.85 = 85 點；與另一個獨立 20% 減傷共存時為 68 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`05e8af7e`。
- 繁中多出「生命值受到傷害」限制，同源英文只說Damage Taken；固定程式也明確包含僅扣韌性的事件。此為觸發條件被譯窄，不是未列細節。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_damage_taken_by_all_increases_strength_tdr.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/9af41f8c-0f0e-4b2b-965e-c0d01fea2746)

圖片僅供技能辨識，不作機制證據。

