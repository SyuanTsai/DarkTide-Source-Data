# 劇毒菌株(Virulent Strain)：原始碼依據

[English](en/broker_passive_toxin_infected_enemies_take_increased_damage.md)

[返回玩家說明](README.md#broker_passive_toxin_infected_enemies_take_increased_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_toxin_infected_enemies_take_increased_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_toxin_infected_enemies_take_increased_damage`；名稱鍵：`loc_talent_broker_passive_toxin_infected_enemies_take_increased_damage`；描述鍵：`loc_talent_broker_passive_toxin_infected_enemies_take_increased_damage_desc`。
- 節點：`node_735140ff-109a-4bc2-a2b9-761614c238cc`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_buff_added/on_buff_stack_added核對toxin keyword，事件由Buff additional_arguments.owner_unit轉送擁有者；不能泛稱隊友施毒均觸發。
- debuff max1/duration5/refresh，damage_taken_modifier=.1；0.1秒之後失去toxin即退出。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3246–3265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3246-L3265)
- [scripts/extension_systems/buff/buff_extension_base.lua：1346–1372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L1346-L1372)
- [scripts/utilities/attack/damage_calculation.lua：587–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3210–3245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3210-L3245)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2285–2321](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2285-L2321)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1169–1195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1169-L1195)

## 算例條件與待確認事項

- **傷害算例**：原本造成 100 點傷害，單計易傷變成 110；若攻擊者另有 25% 增傷，則為 100 × 1.25 × 1.1 = 137.5 點。若目標原本另有同階段 20% 易傷，則該階段為 1 + 20% + 10% = 1.3 倍。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b7e6d44b`。
- 繁中與英文都描述感染後受到傷害增加；提前結束及疊層為補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_toxin_infected_enemies_take_increased_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/90caf35d-4780-4f00-a9cc-636858cd091e)

圖片僅供技能辨識，不作機制證據。

