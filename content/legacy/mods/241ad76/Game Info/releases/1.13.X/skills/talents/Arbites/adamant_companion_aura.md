# 電子獒犬協同(Companion Aura)：原始碼依據

[English](en/adamant_companion_aura.md)

[返回基礎效果](BASE_EFFECTS.md#adamant_companion_aura)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`adamant_companion_aura`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 基礎 talent adamant_companion_aura 配置 special rule adamant_dog_counts_towards_coherency、被動 adamant_companion_counts_for_coherency，並將 adamant_companion_aura_base 註冊為 coherency aura。此 base aura template 本身沒有 stat_buffs。
- 被動監聽自己的電子獒犬生成事件，將 adamant_companion_coherency_tracking_buff 外掛到該犬；companion_coherency_extension 只有持有 adamant_dog_counts_towards_coherency special rule 時才啟用，否則 disabled=true。
- 另一個技能樹節點 adamant_companion_coherency 才使用含 toughness_damage_taken_modifier 的 adamant_companion_aura（設定值 -0.075）；這份基礎能力稿不把該 7.5% 韌性減傷加到基礎光環。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L60-L62)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L722-L742)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L534-L547)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L613-L654)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/companion_coherency_extension.lua#L26-L33)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L743-L772)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L60-L62)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L548-L564)

## 算例與待確認事項

- 當電子獒犬生成時，基礎被動會讓牠掛上協同追蹤效果，使牠參與協同系統的成員判定。
- 基礎光環模板沒有直接 stat_buffs；不能把技能樹替代光環的 7.5% 韌性減傷寫成基礎效果。
- 此處只說明協同成員資格；盟友實際能否取得各自的協同效果，仍由協同距離及該效果的條件決定。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
