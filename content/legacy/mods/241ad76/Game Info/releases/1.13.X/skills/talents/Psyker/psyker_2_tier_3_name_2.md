# 靈能學者光環(Psykinetic's Aura)：原始碼依據

[English](en/psyker_2_tier_3_name_2.md)

[返回玩家說明](README.md#psyker_2_tier_3_name_2)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_2_tier_3_name_2)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_2_tier_3_name_2`；名稱鍵：`loc_talent_psyker_elite_kills_give_combat_ability_cd_coherency`；描述鍵：`loc_talent_psyker_cooldown_on_elite_kills_desc`。
- 節點：`node_25cef95d-234f-4299-a964-2ca42056cb5a`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 被動監聽 on_minion_death，僅 tags.elite 或 tags.special 通過；server端再要求 attacking_unit==template_context.unit，接著只在擁有者自己的 buff_extension 加 psyker_cooldown_buff。該buff持續3秒、max_stacks=1、再次套用會重新計時；timer 初始固定時間+1，每次 t>timer 時 timer加1並呼叫 restore_ability_resource("combat_ability",0.5)。因此可直接確認每個tick恢復0.5個冷卻資源單位；按秒間隔推算三秒期間約三次、合計1.5秒冷卻資源，但第三tick與buff到期邊界需遊戲內確認。雖 start_func 保存 coherency_extension，該 proc 路徑沒有使用它來遍歷隊友。 已核對到期更新順序：Buff.update 先執行 duration 檢查，再執行模板的 update_func；即使 duration 檢查在該次更新把效果標為結束，BuffExtensionBase 也要等所有 Buff.update 完成後才移除。因此正常固定更新下，t 超過第三個一秒計時點時，第三次 0.5 秒恢復會先發生，再移除三秒效果。若單次更新時間跨過多個一秒計時點，模板使用單一 if 而非迴圈，不會在同一更新補做多次恢復。

## 原始碼依據

- [scripts/extension_systems/ability/player_unit_ability_extension.lua：839–880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L880)
- [scripts/extension_systems/buff/buff_extension_base.lua：187–206](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L206)
- [scripts/extension_systems/buff/buffs/buff.lua：29–48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L48)
- [scripts/extension_systems/buff/buffs/buff.lua：103–127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L103-L127)
- [scripts/extension_systems/buff/buffs/buff.lua：305–327](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L305-L327)
- [scripts/extension_systems/buff/player_unit_buff_extension.lua：131–145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1414–1433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1414-L1433)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1658–1687](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1658-L1687)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1689–1720](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1689-L1720)
- [scripts/settings/talent/talent_settings_psyker.lua：39–42](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L39-L42)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1414–1433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1414-L1433)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：718–746](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L718-L746)

## 算例條件與待確認事項

- **冷卻算例**：若倒數原剩 20 秒，在正常恢復 1 秒並觸發一次額外恢復後，變成 20 − 1 − 0.5 = 18.5 秒。
- 觸發條件仍是程式碼標記為 elite 或 special 的敵人，且擊殺者為持有者本人。
- 公開原始碼的能力註解提到協同範圍內隊友，但這條恢復流程把資源還給觸發者本人；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 若更新時間一次跨越多個一秒計時點，單次更新最多處理一次；正常固定更新下依據程式順序可推得三次恢復。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`eaf79e38`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。 詳細持續時間／觸發範圍以固定來源推導，仍須同版遊戲核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_2_tier_3_name_2.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/547fa734-789a-404c-9c48-aa1671d3605c)

圖片僅供技能辨識，不作機制證據。

