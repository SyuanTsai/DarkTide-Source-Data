# 動能共鳴(Kinetic Resonance)：原始碼依據

[English](en/psyker_ability_increase_brain_burst_speed.md)

[返回玩家說明](README.md#psyker_ability_increase_brain_burst_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_ability_increase_brain_burst_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_ability_increase_brain_burst_speed`；名稱鍵：`loc_talent_psyker_ability_increase_brain_burst_speed`；描述鍵：`loc_talent_psyker_ability_increase_brain_burst_speed_desc`。
- 節點：`node_d0f28c39-50b3-4f6f-893f-52e71aaba392`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 固定 source SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。節點掛載 psyker_ability_increase_brain_burst_speed。其 proc buff 監聽 on_combat_ability，觸發後添加 psyker_efficient_smites；該增益持續 10 秒，並給 smite_attack_speed=0.75、warp_charge_amount_smite=0.5。psyker_smite.lua 的鎖定攻擊將 smite_attack_speed 放入 time_scale_stat_buffs；ActionSmiteTargeting 對 kill-charge 設定 charge_time 或預設 3 秒，並以 charge_time ÷ attack_speed 算最大蓄力時間。沒有其他速度修正時 attack_speed=1+0.75=1.75，所以 2÷1.75≈1.1429 秒。WarpCharge.increase_immediate 對 psyker_smite 類 charge template 將 warp_charge_amount_smite 乘入反噬生成倍率，因此 10×0.5=5。此處「50%」描述的是該攻擊所產生反噬量減半。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：402–424](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L402-L424)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1873–1901](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1873-L1901)
- [scripts/settings/talent/talent_settings_psyker.lua：260–264](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L260-L264)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：464–494](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L464-L494)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua：314–322](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L314-L322)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua：574–577](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua#L574-L577)
- [scripts/extension_systems/weapon/actions/action_smite_targeting.lua：153–162](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L153-L162)
- [scripts/utilities/warp_charge.lua：58–69](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L58-L69)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1873–1901](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1873-L1901)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：402–424](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L402-L424)

## 算例條件與待確認事項

- 鎖定充能原需 2 秒，僅計本天賦，其他倍率不變。 2 秒 ÷ (1 + 75%) = 2 ÷ 1.75 ≈ 1.14 秒。 充能速度為原來的 1.75 倍，充能時間約縮短 42.86%。
- 同一招原本會生成 10 點反噬，僅計本天賦。 10 × 0.5 = 5 點反噬。 反噬生成量減半。
- 2 秒與 10 點反噬是用來展示公式的假設值；實際充能時間依使用的鎖定動作與其他速度修正而變，實際反噬量依該次 charge template 與現有倍率而變。
- 10 秒為 buff 設定持續時間；靜態推演，未在遊戲內量測。Build 25606770 與固定來源 SHA 版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ee94ffdd`。
- 本機繁中原文指使用戰鬥技能後加快顱腦崩裂充能並降低反噬；固定來源值為 +75% 速度、生成量 ×0.5、持續 10 秒。速度提升不能直接當作充能秒數減少 75%，此為公式解讀補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical_modifier/psyker_ability_increase_brain_burst_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/6092228c-b394-42c6-831b-da4dc72024b9)

圖片僅供技能辨識，不作機制證據。

