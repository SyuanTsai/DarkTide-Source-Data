# 最大火力(Maximum Firepower)：原始碼依據

[English](en/ogryn_leadbelcher_cooldown_reduction.md)

[返回玩家說明](README.md#ogryn_leadbelcher_cooldown_reduction)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_leadbelcher_cooldown_reduction)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_leadbelcher_cooldown_reduction`；名稱鍵：`loc_talent_ogryn_leadbelcher_grant_cooldown_reduction`；描述鍵：`loc_talent_ogryn_leadbelcher_grant_cooldown_reduction_desc`。
- 節點：`node_efe33c0f-ffa8-441f-bc7a-2e11f76b9d73`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Proc buff 監聽 `on_ammo_consumed` 並檢查 `params.is_leadbelcher_shot`；觸發後加入 `ogryn_no_ammo_consumption_passive_cooldown_buff`。
- 回能 buff `max_stacks=1`、`refresh_duration_on_stack=true`、`duration=2.5`；server timer 從下一秒開始，每個一秒 tick 恢復 1 單位 combat ability resource。ProcBuff 本身沒有 cooldown_duration。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：406–430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L406-L430)
- [scripts/settings/talent/talent_settings_ogryn.lua：263–269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L263-L269)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1984–2040](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1984-L2040)
- [scripts/extension_systems/weapon/actions/action_shoot.lua：481–522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L522)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：150–185](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L185)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1120–1158](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1120-L1158)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：406–430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L406-L430)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：809–834](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L809-L834)

## 算例條件與待確認事項

- **時間算例**：完整收到兩次補回且冷卻尚未完成時，2.5 秒內共推進 2.5 + 2 × 1 = 4.5 秒冷卻。這筆補回按秒結算，不能直接把 2.5 秒當成完整的 5 秒進度。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 2.5 秒是 buff 視窗；實作以每秒 tick 直接恢復 ability resource，並非把「100% × 2.5 秒」一次性結算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5aacc61b`。
- 繁中寫「技能冷卻縮減增加…，持續…秒」，英文寫「…Ability Cooldown Reduction for …s when Lucky Bullet triggers」；兩者都說明幸運子彈觸發時提高技能冷卻恢復，並給出相同持續時間。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_leadbelcher_cooldown_reduction.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/47256097-2109-4fe4-89b7-b4a224ff1200)

圖片僅供技能辨識，不作機制證據。

