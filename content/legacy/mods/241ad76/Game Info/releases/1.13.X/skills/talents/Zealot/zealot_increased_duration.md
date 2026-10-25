# 大師級隱秘領域(Master-Crafted Shroudfield)：原始碼依據

[English](en/zealot_increased_duration.md)

[返回玩家說明](README.md#zealot_increased_duration)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_increased_duration)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_increased_duration`；名稱鍵：`loc_talent_zealot_increased_stealth_duration`；描述鍵：`loc_talent_zealot_stealth_duration_threat_damage_desc`。
- 節點：`node_374f4845-26ff-40f4-a893-75b4e4ac324d`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此天賦節點指向 PlayerAbilities.zealot_invisibility_improved；ability clone 的 invisibility buff 使用 duration=talent_settings.zealot_increased_duration.duration，設定為 5 秒。節點格式值 duration=2 表示比原本 duration=3 增加 2 秒。
- zealot_invisibility.stop_func 檢查 special_rules.zealot_increased_duration，並在離開隱形時加上 zealot_decrease_threat_increase_backstab_damage。
- 離開潛行後的 buff duration=5、stat_buffs.threat_weight_multiplier=0.25、backstab_damage=0.5。威脅欄位是倍率，0.25 表示保留四分之一威脅權重（降低 75%），不是增加 25% 威脅；背刺傷害則為 +50%。
- 後續 buff max_stacks=1 並 refresh_duration_on_stack=true。再次離開潛行再次施加時可重設其持續時間；此 buff 不修改 combat ability resource 或 invisibility 冷卻。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：452–517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L452-L517)
- [scripts/settings/talent/talent_settings_zealot.lua：157–166](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L157-L166)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua：77–93](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L77-L93)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4313–4335](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4313-L4335)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：454–470](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L454-L470)
- [scripts/utilities/attack/damage_calculation.lua：95–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L95-L109)
- [scripts/utilities/attack/damage_calculation.lua：848–861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L848-L861)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：452–517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L452-L517)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：785–810](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L785-L810)

## 算例條件與待確認事項

- **傷害與威脅算例**：固定其他條件，背刺階段基準 100 點變成 100 × 1.5 = 150；已有同階段 20% 背刺加成時為 170 點。原本威脅權重 100 變成 100 × 0.25 = 25，並不代表敵人鎖定你的機率固定剩 25%。
- threat_weight_multiplier 只描述威脅權重修正，實際敵人選擇目標仍受其 AI、距離、視線和其他威脅來源影響。
- 描述格式的 `{duration}` 是 2 秒增量，buff template 的 duration=5 是延長後總長度；兩者不可混讀。
- inventory 中文將威脅欄寫成「提高」但固定 SHA 的 format 前綴是負號且威脅倍率為 0.25；最終格式化畫面尚未核對；此處記錄數值解讀，不直接提出本地化勘誤。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f25397d4`。
- 同hash英文明為gain帶符號的Threat，繁中預先寫提高；固定來源格式參數是−75%，實作倍率.25，故主文寫降低75%。尚無遊戲內最終格式化畫面，保留為措辭疑點，不當成已證實的遊戲顯示錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_increased_duration.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/064d2729-f3e2-4868-bc34-1bcf434d9f4d)

圖片僅供技能辨識，不作機制證據。

