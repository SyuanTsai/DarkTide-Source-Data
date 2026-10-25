# 背刺者(Backstabber)：原始碼依據

[English](en/zealot_backstab_damage.md)

[返回玩家說明](README.md#zealot_backstab_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_backstab_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_backstab_damage`；名稱鍵：`loc_talent_zealot_increased_backstab_damage`；描述鍵：`loc_talent_zealot_backstab_flanking_damage_all_desc`。
- 節點：`node_36d9319a-e724-493d-baf1-efdbd77f736c`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 模板掛 allow_backstabbing、allow_flanking，各加 backstab_damage/flanking_damage=.25。AttackPositioning 分別只接受 melee/ranged；dot>0.5 對應背後正中左右各60度，dot>0對應後半平面，嚴格邊界不包含。
- 傷害計算先得目前 damage，再加入 damage*(backstab multiplier+profile bonus−1) 或 damage*(flanking multiplier−1)，不是弱點額外部分加成。每次攻擊類型只會符合其中一項，不會同時獲得50%。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4343–4356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4343-L4356)
- [scripts/utilities/attack/attack_positioning.lua：9–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)
- [scripts/utilities/attack/damage_calculation.lua：95–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L95-L109)
- [scripts/utilities/attack/damage_calculation.lua：848–861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L848-L861)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1339–1362](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1339-L1362)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：37–62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L37-L62)

## 算例條件與待確認事項

- **傷害算例**：固定相同武器、護甲及命中部位，沒有其他背刺／側襲加成時，該階段 100 點變成 100 × (1 + 25%) = 125 點。已有 20% 同類加成時，則由 120 點變成 100 × (1 + 20% + 25%) = 145 點，實際增幅約 20.83%。
- 背刺武器原有 damage_profile.backstab_bonus 需納入既有同類加成；範例固定其他條件，未對具名武器實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`cbe3a511`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_backstab_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/86a86e7f-6fc0-4eda-81e8-f13519f3cb8c)

圖片僅供技能辨識，不作機制證據。

