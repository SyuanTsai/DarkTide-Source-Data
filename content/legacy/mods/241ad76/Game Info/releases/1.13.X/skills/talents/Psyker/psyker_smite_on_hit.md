# 動能撕裂者(Kinetic Flayer)：原始碼依據

[English](en/psyker_smite_on_hit.md)

[返回玩家說明](README.md#psyker_smite_on_hit)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_smite_on_hit)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_smite_on_hit`；名稱鍵：`loc_talent_psyker_smite_on_hit`；描述鍵：`loc_talent_psyker_smite_on_hit_special_elite_desc`。
- 節點：`node_fbf53cbf-026b-4076-aa50-08813d53dbb6`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 固定 source SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。技能樹將此節點置於 Brain Rupture 閃擊的子項。天賦設定 smite_chance=1、cooldown=12；proc template 對 proc_events.on_hit 使用該 1.0 事件率並設 12 秒 cooldown_duration。自訂 check_proc_func 要求 attack_type 存在、damage 不為 0、目標有 breed 且存活，並至少有 elite/special/monster 標籤；另排除 bomber、prop、living prop。成功後記錄目標，再以 psyker_smite_kill damage profile、damage_type=smite 執行攻擊。共用傷害公式會依 smite damage type 套用 smite_damage_multiplier，因此同時具備 Brain Rupture buff 時，觸發傷害也會進入該倍率結算。檢查完整 check_proc_func 與 proc_func 未找到 critical-peril 或 warp-charge 門檻；文字與程式來源皆為1.13.1；這一處保留待遊戲內確認。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：232–254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L232-L254)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1708–1731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1708-L1731)
- [scripts/settings/talent/talent_settings_psyker.lua：249–252](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L249-L252)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1984–2117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1984-L2117)
- [scripts/utilities/attack/damage_calculation.lua：507–519](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L507-L519)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1708–1731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1708-L1731)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：232–254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L232-L254)

## 算例條件與待確認事項

- 冷卻剛結束，目標存活且有精英標籤，攻擊造成非零傷害。 t=0 秒的合格命中觸發；t=11 秒的合格命中仍在 12 秒冷卻內；t≥12 秒後的下一次合格命中可再次觸發。 觸發受冷卻限制；合格命中的設定事件率為 1.0（100%）。
- 觸發攻擊傷害會依目標、觸發攻擊與 Brain Rupture 傷害倍率計算，沒有單一固定傷害值。
- 固定來源的觸發檢查未實作繁中描述所稱的臨界反噬排除；文字與程式來源皆為1.13.1；此差異待遊戲內核對，不直接判定遊戲文案有錯。
- 靜態原始碼推導，未做遊戲內觸發測試。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`63bc627a`。
- 本機繁中描述稱反噬處於危險線以上時不觸發，但固定來源的完整檢查函式只驗證攻擊、傷害、敵人分類與存活狀態，沒有反噬條件。文字與程式來源皆為1.13.1；此差異仍待遊戲內核對，不單憑此判定翻譯錯誤。另，原始碼參數為 1.0，表示合格命中在冷卻外觸發率 100%。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical_modifier/psyker_smite_on_hit.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/2e792f27-7daf-4ce9-abcc-9d92ded0985c)

圖片僅供技能辨識，不作機制證據。

