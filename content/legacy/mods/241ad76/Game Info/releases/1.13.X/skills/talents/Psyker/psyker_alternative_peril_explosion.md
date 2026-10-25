# 結晶意志(Crystalline Will)：原始碼依據

[English](en/psyker_alternative_peril_explosion.md)

[返回玩家說明](README.md#psyker_alternative_peril_explosion)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_alternative_peril_explosion)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_alternative_peril_explosion`；名稱鍵：`loc_talent_psyker_alternative_peril_explosion`；描述鍵：`loc_talent_psyker_alternative_peril_explosion_new_desc`。
- 節點：`node_25ffe424-4f39-4206-8304-66333fe44fa5`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- special rule psyker_no_knock_down_overload讓ActionOverloadExplosion跳過原本instakill。被動on_action_finish確認action_warp_charge_explode/action_complete，後續無elite kill時remove_wounds(1)，current_wounds<=1則instakill。爆炸plasma_overheat profile讀overheat_explosion_damage_modifier，radius模板讀radius_modifier。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3641–3703](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3641-L3703)
- [scripts/settings/talent/talent_settings_psyker.lua：124–127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L124-L127)
- [scripts/extension_systems/weapon/actions/action_overload_explosion.lua：103–141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_explosion.lua#L103-L141)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：9–31](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L9-L31)
- [scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua：575–595](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L575-L595)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2763–2788](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2763-L2788)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1972–1996](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1972-L1996)

## 算例條件與待確認事項

- **傷害與範圍算例**：只比較這兩項修正，原本 100 點爆炸傷害變成 100 × 2 = 200 點；原爆炸半徑 10 公尺變成 10 × 1.25 = 12.5 公尺。實際傷害仍受距離衰減與敵人護甲影響。
- 源碼延遲判斷寫成t <= damage_t（不是>=）；是否會因更新幀延遲而漏結算及連續爆炸殘留旗標，未遊戲實測。
- 傷痕移除對目前生命上限與治療站恢復的完整互動，不從天賦敘述推定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7ea53d48`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_alternative_peril_explosion.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/6b51b11f-eed5-45f3-b539-6b4502778099)

圖片僅供技能辨識，不作機制證據。

