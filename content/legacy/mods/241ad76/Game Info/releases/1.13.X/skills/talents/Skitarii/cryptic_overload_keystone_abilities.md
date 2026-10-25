# 動力驅動(Powerdrive)：原始碼依據

[English](en/cryptic_overload_keystone_abilities.md)

[返回玩家說明](README.md#cryptic_overload_keystone_abilities)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_overload_keystone_abilities)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_overload_keystone_abilities`；名稱鍵：`loc_talent_cryptic_overload_keystone_abilities`；描述鍵：`loc_talent_cryptic_overload_keystone_abilities_desc`。
- 節點：`node_1291b67e-1c33-4fc0-833a-7656d99a79d4`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 修正啟用後，能量超載被動才接受 on_combat_ability 事件；檢查 ability_cost 大於0，並依 ability_cost×5 增加層數。設定值為每道充能5層，根鑰石上限30層。
- _add_overload_stack 先將顯示層數與新增數量比較；若總數達到或超過30，呼叫一次超載並清除現有累積，不把溢出部分帶到下一輪。
- 電能發射器在動作開始時以本次消耗數填入 ability_cost。鎖定姿態啟動時傳 floor(0.25)=0，不在一般啟動入口加層；停止分支雖在 super.start 前 return，但移除姿態 buff 時仍會執行下述專用 stop_func 結算。
- 鎖定姿態的 stop_func 另有專用結算：floor(cooldown_percent_used + 0.25) × 5，再經 cryptic_buffs_event_give_overload_keystone_stacks 交給鑰石。不能因 toggle 停止分支沒有 on_combat_ability 就說結束時不會加層。啟動的 ability_cost=floor(0.25)=0；持續與射擊消耗逐次加入 cooldown_percent_used，恢復不扣回計數。
- 弦爪 activation 在 active=false 才發出 on_combat_ability；後續 active=true 的使用雖繼續扣充能，不會再次走此加層入口。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1374–1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1374-L1392)
- [scripts/settings/talent/talent_settings_cryptic.lua：264–272](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L264-L272)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1595–1614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1595-L1614)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1749–1772](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1749-L1772)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua：69–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L69-L80)
- [scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua：40–60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua#L40-L60)
- [scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua：104–113](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua#L104-L113)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：449–459](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L449-L459)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：490–525](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L490-L525)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1658–1681](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1658-L1681)
- [scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua：34–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua#L34-L65)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1374–1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1374-L1392)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1797–1819](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1797-L1819)

## 算例條件與待確認事項

- 靜態推演：根鑰石目前22層，使用消耗2道充能的技能後新增10層；合計32達到30門檻，觸發一次並清空，超出的2層不保留。
- 鎖定姿態結束時另行結算；弦爪持續出招期間的後續消耗不計入。
- 跨過30層只觸發一次並歸零，溢出的層數不留下。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6c9f2d5b`。
- 繁中與英文均概述每份消耗增加5層。固定版一般使用按 ability_cost 計算，鎖定姿態改在結束時按累計消耗取整；弦爪連續使用有只計首次的限制。這是兩種語言均未詳述的實作差異，留待遊戲內實測，不列為繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_overload_keystone_abilities.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/d7c8f168-1f4e-42cc-a3d7-926d3b4382f1)

圖片僅供技能辨識，不作機制證據。

