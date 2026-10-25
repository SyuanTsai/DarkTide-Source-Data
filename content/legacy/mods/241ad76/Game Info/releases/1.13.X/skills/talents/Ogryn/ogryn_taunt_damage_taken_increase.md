# 重要干擾(Valuable Distraction)：原始碼依據

[English](en/ogryn_taunt_damage_taken_increase.md)

[返回玩家說明](README.md#ogryn_taunt_damage_taken_increase)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_taunt_damage_taken_increase)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_taunt_damage_taken_increase`；名稱鍵：`loc_talent_ogryn_taunt_damage_taken_increase`；描述鍵：`loc_talent_ogryn_taunt_damage_taken_increase_description`。
- 節點：`node_2eef5b19-a13a-4f02-92f6-850ce20bb84f`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦 special_rule 讓 shout_target_templates.ogryn_shout 對受影響敵人附加 ogryn_taunt_increased_damage_taken_buff；buff duration=15、max_stacks=1、refresh_duration_on_stack=true，stat_buffs.damage_taken_multiplier=1.2。
- 同一 shout target 另附加 taunted，weapon_buff_templates 將其 unique_buff_id 設為 taunted、duration=15。重複施加時 buff_extension_base._handle_unique_buffs 移除舊實例後加入新實例，更新 taunted 時間。
- shout_target_templates 對 daemonhost、mutator daemonhost與ritualist等使用不同排除欄位；ShoutAbility 是套用敵人 buff 的消費端。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：115–145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L115-L145)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：479–488](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L479-L488)
- [scripts/settings/ability/shout_target_templates.lua：67–86](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L67-L86)
- [scripts/extension_systems/ability/utilities/shout_ability.lua：90–161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/utilities/shout_ability.lua#L90-L161)
- [scripts/settings/buff/weapon_buff_templates.lua：1174–1182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1174-L1182)
- [scripts/extension_systems/buff/buff_extension_base.lua：529–557](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L529-L557)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：415–437](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L415-L437)
- [scripts/utilities/attack/damage_calculation.lua：587–626](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L626)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：115–145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L115-L145)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1366–1390](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1366-L1390)

## 算例條件與待確認事項

- **傷害算例**：其他條件固定，原本 100 點傷害變成 100 × 1.2 = 120 點。若敵人同時受到削弱敵人的 15% 承傷加成，兩項處於不同階段，為 100 × 1.15 × 1.2 = 138 點。
- 增傷是受影響敵人承受傷害的1.2倍乘數；最終數字仍受目標及其他傷害修正影響。
- 目標排除設定中的特殊敵人不會套用嘲諷或這項增傷。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`07b19158`。
- 繁中原文說被忠誠守護者影響的敵人「承受所有來源的基礎傷害增加20%」；英文原文同樣說受影響敵人承受所有來源的基礎傷害增加20%。程式套用1.2承傷倍率與15秒重新計時，是原文未展開的計算方式；兩種描述沒有明確衝突，文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_taunt_damage_taken_increase.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/594ab4d6-12e3-4941-bf1a-c5812b128b23)

圖片僅供技能辨識，不作機制證據。

