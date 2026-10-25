# 烈焰與怒火(Fire and Fury)：原始碼依據

[English](en/zealot_resist_death_fire.md)

[返回玩家說明](README.md#zealot_resist_death_fire)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_resist_death_fire)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_resist_death_fire`；名稱鍵：`loc_talent_zealot_resist_death_fire`；描述鍵：`loc_talent_zealot_resist_death_fire_desc`。
- 節點：`node_9ad99512-0439-46e8-8113-5d7de6d174da`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 被動 `zealot_resist_death_fire` 只處理 melee/ranged `on_hit`，要求目標仍存活且玩家有 `unkillable` 關鍵字；近戰與遠程分別嘗試加3與1層，共用目標上的 `flamer_assault`，talent 上限為12。未滿時只補入不超上限的層數；已滿時呼叫 refresh_duration_of_stacking_buff。
- `flamer_assault` 是 interval buff：單層 duration=4 秒、interval=0.5 秒、refresh_duration_on_stack=true，最多31層。因點燃升級把此 buff 封頂於12層，其他來源可使實際層數不同；每次觸發新增層也重設 buff duration。
- 每次 tick 設 x=current_stack_count/31，smooth=x²×(3−2x)，再送出 power_level=500×smooth 的 `DamageProfileTemplates.burning` 攻擊。燃燒 profile 的 attack power_distribution=400、toughness_multiplier=3、ignore_shield=true，並套用 default target boost curve；因此不能把 layer count 直接換成固定生命值傷害。
- IntervalBuff 在尚未另行指定 start_interval_on_apply 時，第一次 interval 以0.5秒排定，之後每0.5秒呼叫 interval_func；4秒 duration 及持續加層重新計時共同決定 tick 時間窗。
- flamer_assault設interval_stack_removal=true，故4秒不是一次全清；到期之後每tick移除一層。零其他修正的無甲單tick=400*smoothstep(n/31)*1.5，最大31層是共用buffcap，12只是此天賦的加層上限。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3331–3345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3331-L3345)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：5020–5060](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L5020-L5060)
- [scripts/settings/talent/talent_settings_zealot.lua：250–270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L250-L270)
- [scripts/settings/buff/weapon_buff_templates.lua：50–77](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L77)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：10–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L10-L65)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：301–328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：2014–2036](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2014-L2036)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：19–28](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L19-L28)
- [scripts/utilities/attack/power_level.lua：21–23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua：63–94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L94)
- [scripts/settings/damage/power_level_settings.lua：7–29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)
- [scripts/utilities/attack/damage_profile.lua：386–444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L444)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3331–3345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3331-L3345)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：2014–2036](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2014-L2036)

## 算例條件與待確認事項

- **層數算例**：目標原本 0 層，連續 4 次近戰命中可達 4 × 3 = 12 層；接著再命中不會由本天賦升至 15 層。
- **傷害算例**：固定無甲部位、沒有其他修正，3 層單次燃燒傷害為 400 × (3 ÷ 31)² × [3 − 2 × (3 ÷ 31)] × 1.5 ≈ 15.77 點；12 層約 200.11 點。這是單次結算，並非所有敵人的固定每秒傷害。
- 約167是 burn tick 使用的 power_level，不是對所有敵人的固定生命值傷害；profile 會依敵人類型與目標 boost curve 得出實際結果。
- 0.5秒 tick 節奏是程式定時器推導；更新步長可能使實際執行落在定時點之後。
- 「持有無法殺死」是檢查玩家 buff 關鍵字，因此實際上任何授予 `unkillable` 的來源都可能開啟此效果；列出的 Resist Death 子升級與基礎效果只是常見來源。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2ee3f440`。
- 繁中及英文都描述無法殺死期間由武器命中施加燃燒，方向與對象相同。燃燒層數、時長、tick 間隔及 power scaling 為原文未展開的機制細節。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_resist_death_fire.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/f88c569e-c89d-4850-b84b-17c5af69faf0)

圖片僅供技能辨識，不作機制證據。

