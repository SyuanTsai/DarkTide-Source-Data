# 突破重圍(Break the Line)：原始碼依據

[English](en/adamant_charge.md)

[返回玩家說明](README.md#adamant_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_charge`；名稱鍵：`loc_talent_adamant_charge_ability_name`；描述鍵：`loc_ability_adamant_charge_blocking_desc`。
- 節點：`node_db2750a5-ac31-469f-8e7d-294b6c750b35`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 能力使用 20 秒冷卻、單層充能；釋放後進入向前衝鋒，基礎距離 3.75 公尺，路徑打擊半徑 1 公尺。
- 衝鋒期間的被動效果只在衝鋒開始至結束間有效，會加入格擋、抵擋遠程攻擊，以及對網槍與瘟疫獵犬撲擊的閃避判定。
- 衝鋒結束時另對前方 5 公尺內目標執行收尾震撼；若目標原本未踉蹌，通常會被強制造成重度踉蹌 2.5 秒，巨獸與連長例外。
- 收尾時加入 6 秒攻勢增益，將傷害加成設為 25%、衝擊加成設為 50%。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：89–125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L89-L125)
- [scripts/settings/talent/talent_settings_adamant.lua：19–34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua：43–58](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L43-L58)
- [scripts/settings/ability/ability_templates/adamant_charge.lua：53–84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/adamant_charge.lua#L53-L84)
- [scripts/settings/lunge/adamant_lunge_templates.lua：13–78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/adamant_lunge_templates.lua#L13-L78)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：87–140](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L87-L140)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_lunging.lua：314–374](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_lunging.lua#L314-L374)
- [scripts/utilities/attack/damage_calculation.lua：236–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/utilities/attack/stagger_calculation.lua：190–204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L204)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：89–125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L89-L125)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：294–323](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L294-L323)

## 算例條件與待確認事項

- 6 秒攻勢期間內，若未計入其他傷害或衝擊修正，100 點基準傷害→125，100 點基準衝擊→150。
- 衝鋒結束後的傷害與衝擊加成作用於後續攻擊，並非只提高衝鋒本身傷害；實際傷害仍受護甲、命中部位與其他修正影響。收尾強制踉蹌對巨獸與連長另有例外。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；數值與行為按固定來源提交說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b214fa7a`。
- 繁中寫「踉蹌的機率提高」，英文寫「causing high Stagger」。固定來源的收尾效果是對多數未踉蹌目標強制重度踉蹌，並非提高機率；其餘「視為處於格擋狀態」與「count as Blocking」一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability/adamant_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/a0aad2f2-d03d-486c-b583-1307a9780ac2)

圖片僅供技能辨識，不作機制證據。

