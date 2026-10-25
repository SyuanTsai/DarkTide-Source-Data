# 心狠手辣(Hyper-Critical)：原始碼依據

[English](en/broker_passive_melee_crit_instakill.md)

[返回玩家說明](README.md#broker_passive_melee_crit_instakill)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_melee_crit_instakill)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_melee_crit_instakill`；名稱鍵：`loc_talent_broker_passive_melee_crit_instakill`；描述鍵：`loc_talent_broker_passive_melee_crit_instakill_desc`。
- 節點：`node_d20bf7ae-9dcb-4dfe-b765-2c8db80bf91f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_crit_melee後讀HEALTH_ALIVE、人類體型、排除enemy_type captain。threshold=actual_damage_dealt*2，再比較命中後current_health<threshold*.5。
- Attack._execute先_handle_attack扣血，再_handle_buffs發事件，故應使用命中後生命與一次damage比較。

## 原始碼依據

- [scripts/utilities/attack/attack.lua：357–386](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L357-L386)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2140–2194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2140-L2194)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1713–1733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1713-L1733)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1482–1510](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1482-L1510)

## 算例條件與待確認事項

- **生命門檻算例**：敵人原有 190 點生命，這次暴擊造成 100，命中後剩 90；90 < 100，因此處決。原有 200 時剩 100，因 100 不小於 100，不觸發。
- 額外傷害、同幀多次命中及生命縮放可能影響事件讀取值；算例是假設單一命中且傷害一致。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`41e81648`。
- 繁中省略近戰限定，屬不完整；英文的2倍門檻可用命中前生命解釋，不列明確誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_melee_crit_instakill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/83713f05-33fd-41c1-86f2-c536d7a1f06c)

圖片僅供技能辨識，不作機制證據。

