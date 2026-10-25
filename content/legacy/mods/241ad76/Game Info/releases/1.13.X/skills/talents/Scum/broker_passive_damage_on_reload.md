# 狂轟猛射(Unload)：原始碼依據

[English](en/broker_passive_damage_on_reload.md)

[返回玩家說明](README.md#broker_passive_damage_on_reload)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_damage_on_reload)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_damage_on_reload`；名稱鍵：`loc_talent_broker_passive_damage_on_reload`；描述鍵：`loc_talent_broker_passive_damage_on_reload_desc`。
- 節點：`node_ba99146a-4a89-452f-8b02-7d6d871b30dd`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_reload加7秒Buff；on_ammo_consumed僅在手持secondary時累加ammo_usage，refresh_func清零。
- ranged_damage=.02+.02*floor(ammo_spent/(max_ammo_in_clip*.1))，未clamp段數。普通reload事件在refill_ammunition時發出，不必等整段動畫收尾。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2067–2118](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2067-L2118)
- [scripts/extension_systems/weapon/actions/action_reload_state.lua：91–116](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_reload_state.lua#L91-L116)
- [scripts/utilities/attack/damage_calculation.lua：250–284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L250-L284)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2057–2066](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2057-L2066)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2067–2138](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2067-L2138)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1660–1712](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1660-L1712)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：551–577](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L551-L577)

## 算例條件與待確認事項

- **傷害算例**：彈匣容量 100 發，效果內已用 30 發，增傷為 2% + ⌊30 ÷ 10⌋ × 2% = 8%。基礎 100 點變成 108；若同階段已有 25%，則為 100 × (1 + 25% + 8%) = 133 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6645de88`。
- 兩語都提供換彈後按消耗彈藥增傷；重設與整段取整屬補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_damage_on_reload.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/6849ad32-3ebc-4d11-b980-612b4d23fd94)

圖片僅供技能辨識，不作機制證據。

