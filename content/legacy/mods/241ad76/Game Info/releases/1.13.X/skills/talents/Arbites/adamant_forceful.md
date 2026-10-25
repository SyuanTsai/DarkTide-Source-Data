# 堅定不移(Forceful)：原始碼依據

[English](en/adamant_forceful.md)

[返回玩家說明](README.md#adamant_forceful)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_forceful)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_forceful`；名稱鍵：`loc_talent_adamant_forceful`；描述鍵：`loc_talent_adamant_forceful_base_alt_desc`。
- 節點：`node_23717e1a-a7ea-44f6-b168-9bd668cd29a3`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 疊層 proc 排除 companion 命中與 target_number>1 的後續目標，只在 on_staggering_hit 回傳 true 時加層；block event 直接加層。層數模板 max=10、duration=5。
- stack buff 每層 stat_buffs：impact_modifier=0.05、damage_taken_multiplier=0.975。damage_taken_multiplier 在 stat_buff_types 為 multiplicative_multiplier；Buff.stat_buff_stacking_count 依 stack_count 重複套用，通用傷害結算再把 target 的 damage_taken_multiplier 乘入受到傷害。
- 受擊觸發要求 damage>0 或 damage_absorbed>0，且 attack_result 存在並非 blocked；next_allowed_remove_t=t+0.25。wanted_stacks 控制逐層離開，最終降至 0 時 buff 結束。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1495–1530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1495-L1530)
- [scripts/settings/talent/talent_settings_adamant.lua：268–284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L268-L284)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1207–1415](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1207-L1415)
- [scripts/extension_systems/buff/buffs/buff.lua：397–410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L410)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/buff/buff_settings.lua：774–775](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L774-L775)
- [scripts/utilities/attack/damage_calculation.lua：587–615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L615)
- [scripts/extension_systems/buff/buffs/buff.lua：29–44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44)
- [scripts/extension_systems/buff/buff_extension_base.lua：643–660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L643-L660)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1495–1530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1495-L1530)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：156–187](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L156-L187)

## 算例條件與待確認事項

- 10 層：衝擊修正 10 × 0.05 = +0.50；受傷倍率 0.975^10 ≈ 0.776，約 77.6 點傷害／原 100 點。
- 機制來源固定為公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；繁中、英文模板與程式來源皆為1.13.1；遊戲內最終顯示仍待核對。程式實作和文字措辭如有差異，先列文字與實作差異待核，不直接判為翻譯錯誤。
- 乘算算例只計 Forceful 本身；其他傷害修正、傷害類型與遊戲中額外倍率會再進入共用公式。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`bcf0df40`。
- 繁中「使敵人踉蹌或格擋攻擊時會獲得…層數」對應英文 “Staggering Hits and Blocked Attacks grant Stacks”；兩者都寫每層持續、可堆疊與受傷移除，沒有同源中英矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_forceful.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/b838686c-aaa0-49a2-bbea-fc9e074bb6cf)

圖片僅供技能辨識，不作機制證據。

