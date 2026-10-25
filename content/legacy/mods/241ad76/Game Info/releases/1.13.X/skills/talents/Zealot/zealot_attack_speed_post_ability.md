# 有信者之怒(Fury of the Faithful)：原始碼依據

[English](en/zealot_attack_speed_post_ability.md)

[返回玩家說明](README.md#zealot_attack_speed_post_ability)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_attack_speed_post_ability)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_attack_speed_post_ability`；名稱鍵：`loc_talent_maniac_attack_speed_after_dash`；描述鍵：`loc_talent_zealot_attack_speed_after_dash_new_desc`。
- 節點：`node_5bf70f4d-96f3-446a-8a74-f4b4db160455`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 能力節點將 PlayerAbilities.zealot_targeted_dash_improved 設為玩家能力並開啟 dash special rule。底層設定 cooldown=30、distance=7、has_target_distance=21、duration=3、toughness=0.5；lunge template 直接設定 restore_toughness=0.5。
- lunge template 延後加入攻速 buff 和近戰 buff。攻速 buff 讀取 +0.2 attack_speed，duration = active_duration 10 + 1 的內部時序餘量。兩個 buff 獨立：攻速 buff 以計時到期；近戰 buff 經 on_hit 事件判定。
- 近戰 buff 的 stat_buffs 是 melee_damage=0.25、melee_critical_strike_chance=1、melee_rending_multiplier=1，duration=3。限定 melee hit；push 效率與 ranged attack 被排除。對帶 keep_buff_ability_active_on_special 的武器特殊動作，程式會依特殊動作啟用、解除與 sweep 黏著狀態決定 buff 是否提早終止。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：383–428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L383-L428)
- [scripts/settings/talent/talent_settings_zealot.lua：304–318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L304-L318)
- [scripts/settings/talent/talent_settings_zealot.lua：420–430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L420-L430)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua：7–36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L7-L36)
- [scripts/settings/lunge/zealot_lunge_templates.lua：79–92](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/zealot_lunge_templates.lua#L79-L92)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1233–1329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1233-L1329)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4135–4155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4135-L4155)
- [scripts/utilities/action/action_handler.lua：356–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：383–428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L383-L428)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：596–626](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L596-L626)

## 算例條件與待確認事項

- **傷害算例**：先只看近戰傷害階段，基礎 100 點變成 100 × 1.25 = 125 點；已有同階段 20% 增傷時則為 145 點。暴擊的額外傷害與撕裂對護甲的影響另算，不能把 125 當成所有武器的最終傷害。
- 程式中的 lunge distance、target distance 是衝刺與選敵設定，不代表可在所有地形穩定移動同樣距離。
- 攻速 buff 的 +1 秒是模板內部 duration；跨版本描述、HUD 顯示與可感知時長仍待遊戲內核對。
- 近戰 buff 的「下一次」應理解為符合 on_melee_hit 篩選的命中；推擊與遠程攻擊不觸發消耗。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f5695318`。
- 繁中與英文皆用同一time欄位；固定來源顯示參數10秒，但buff duration為10+1=11秒，尚未遊戲內確認顯示。兩語效果方向相符，非繁中單方誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability/zealot_attack_speed_post_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/bd841f6f-e0ff-4cfa-a3ac-f7d08bfbc80e)

圖片僅供技能辨識，不作機制證據。

