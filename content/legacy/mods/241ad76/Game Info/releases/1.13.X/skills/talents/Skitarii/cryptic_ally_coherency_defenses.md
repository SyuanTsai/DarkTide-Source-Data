# 數據感應協定(Data Sensor Protocol)：原始碼依據

[English](en/cryptic_ally_coherency_defenses.md)

[返回玩家說明](README.md#cryptic_ally_coherency_defenses)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_ally_coherency_defenses)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_ally_coherency_defenses`；名稱鍵：`loc_talent_cryptic_allies_broken`；描述鍵：`loc_talent_cryptic_ally_coherency_defenses_desc`。
- 節點：`node_f7b75f2e-e6df-4be2-855c-c05da6151f7b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 兩個ProcBuff都裝在天賦持有者，cooldown_duration各15；params.attacked_unit是受益者，需coherency且alive且not will_die。
- stamina要求toughness_damage_amount>0，toughness要求damage_amount>0（生命分量）；damage.lua向所有valid_player_units廣播，coherency chain含自己。

## 原始碼依據

- [scripts/extension_systems/coherency/coherency_system.lua：186–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L186-L195)
- [scripts/utilities/attack/damage.lua：154–178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L178)
- [scripts/utilities/attack/damage.lua：202–225](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L202-L225)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：151–174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L174)
- [scripts/settings/talent/talent_settings_cryptic.lua：661–666](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L661-L666)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3717–3753](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3717-L3753)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3685–3716](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3685-L3716)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2697–2729](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2697-L2729)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2372–2397](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2372-L2397)

## 算例條件與待確認事項

- **恢復算例**：受傷者最大耐力 6 格、最大韌性 120，對應恢復 6 × 25% = 1.5 格耐力，或 120 × 25% = 30 點韌性；不是讓全隊同時恢復。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`307b308a`。
- 繁中把they翻成盟友，省掉自己作為受益者，並易誤讀為傷害後讓其他隊友恢復。實際恢復給受傷者本人。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_ally_coherency_defenses.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030)｜[圖片附件](https://github.com/user-attachments/assets/0bbe1f46-d58e-414d-9ab3-1c8ed0170a41)

圖片僅供技能辨識，不作機制證據。

