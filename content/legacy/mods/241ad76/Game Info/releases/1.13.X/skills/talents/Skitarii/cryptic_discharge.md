# 電能發射器(Voltaic Emitter)：原始碼依據

[English](en/cryptic_discharge.md)

[返回玩家說明](README.md#cryptic_discharge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_discharge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_discharge`；名稱鍵：`loc_talent_cryptic_discharge`；描述鍵：`loc_talent_cryptic_discharge_desc`。
- 節點：`node_202342c8-045c-486b-aa66-75d636866621`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 玩家能力資料將此技能設為以完整能力充能消耗，最低1份、最高3份；通用成本函式以目前完整充能數夾在1至3之間。故即使其他效果把容量提高到4或5份，單次仍最多扣3份；資源池內不足一份的回充進度不會被這次消耗抹去。能力成本在動作開始時扣除，並在此時送出主動技能事件。
- 這是強化版電能發射器；主放電套用半徑12公尺的電擊爆炸模板，無論本次消耗1、2或3份均用同一半徑。初始爆炸傷害設定的攻擊與衝擊威力分配為0，命中後套用2秒電擊效果，由0.3至0.8秒間隔的後續電擊傷害造成實際生命傷害；實際傷害與跳傷次數依目標和結算而變。
- 消耗至少2份時，動作另在玩家上方1.5公尺處建立半徑30公尺的武器故障爆炸。其傷害威力為0，命中仍呼叫武器故障處理；敵人若有相應武器狀態元件才會呈現故障效果，時間使用敵人種類的設定值，沒有種類設定時預設12秒。
- 消耗至少3份時，取得15秒的命中觸電效果。非擊殺的近戰或遠程命中都可施加目標的2秒觸電效果；效果間隔為0.3至0.8秒，逐跳使用電擊傷害設定。
- 若另有電弧天賦，會依實際消耗份數在玩家前方與視線夾角小於60度的範圍內、12公尺搜尋半徑中最多生成每份一條電弧，且受該天賦的5條上限限制；由於單次成本上限是3份，本技能單次最多生成3條。過載核心的電容量加層仍依實際主動技能成本事件處理。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：105–161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L105-L161)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：93–115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L93-L115)
- [scripts/settings/ability/ability_templates/cryptic_discharge.lua：22–38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_discharge.lua#L22-L38)
- [scripts/extension_systems/weapon/actions/action_ability_base.lua：25–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_ability_base.lua#L25-L39)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1487–1511](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1487-L1511)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua：35–130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L35-L130)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua：137–185](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L137-L185)
- [scripts/settings/talent/talent_settings_cryptic.lua：69–96](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L69-L96)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：252–277](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L252-L277)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：322–336](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L322-L336)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua：551–640](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L551-L640)
- [scripts/settings/buff/weapon_buff_templates.lua：2882–2929](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2882-L2929)
- [scripts/settings/buff/weapon_buff_templates.lua：2948–2994](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2948-L2994)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：778–841](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L778-L841)
- [scripts/utilities/minion_state.lua：111–139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L111-L139)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：773–879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L879)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：105–161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L105-L161)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1713–1743](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1713-L1743)

## 算例條件與待確認事項

- 目前有5份已補滿電容量 按下技能最多消耗3份，剩下2份；若另有未滿下一份的進度，該進度仍保留。主放電半徑仍為12公尺，並取得至少3份才有的15秒命中觸電效果。
- 只有1份已補滿電容量 消耗1份，主放電半徑12公尺；不足一份的回充進度不會被消耗。
- 本次消耗2份 主放電半徑12公尺；另外觸發30公尺武器故障脈衝，但不取得消耗3份才有的15秒攻擊觸電效果。
- 技能資料可確認傷害模板、電擊持續時間與跳傷間隔，不能推出對所有敵人相同的生命傷害總值或固定跳數。
- 武器故障爆炸的傷害威力為0；狀態是否影響目標取決於敵人是否具有相應武器狀態元件，時間可能由敵人種類覆寫預設12秒。
- 5份電容量容量提高不代表本次技能能扣5份；本技能 player ability 的單次成本上限明確為3份。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1ffeaa91`。
- 本機繁中與英文都列出12公尺主放電、2秒觸電、消耗至少2份時30公尺武器故障12秒、消耗至少3份時15秒命中觸電2秒，以及強化版定位。來源碼吻合；單次最多消耗3份和傷害由後續電擊跳傷結算是文字未展開的實作細節。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability/cryptic_discharge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/637d6e54-1c81-434d-b5bc-d779d4d8674b)

圖片僅供技能辨識，不作機制證據。

