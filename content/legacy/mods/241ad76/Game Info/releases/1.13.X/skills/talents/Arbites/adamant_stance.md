# 懲戒者姿態(Castigator's Stance)：原始碼依據

[English](en/adamant_stance.md)

[返回玩家說明](README.md#adamant_stance)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_stance)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_stance`；名稱鍵：`loc_talent_adamant_stance_ability_name`；描述鍵：`loc_talent_adamant_stance_ability_power_description`。
- 節點：`node_f1a66593-132e-4464-9c20-c7a7cf79a4b0`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 能力有一層充能、冷卻 50 秒；姿態增益持續 10 秒。姿態動作在伺服器端呼叫最大韌性恢復。
- 姿態增益實際加入移動速度 +15%、威力 +20%、受到傷害倍率 0.3、兩種動作移動懲罰倍率 0；同時封鎖衝刺。
- 姿態結束時另加入 2 秒的傷害減免增益，沿用 0.3 受到傷害倍率。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：195–255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L195-L255)
- [scripts/settings/talent/talent_settings_adamant.lua：35–51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L35-L51)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua：60–75](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L60-L75)
- [scripts/settings/ability/ability_templates/adamant_stance.lua：22–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/adamant_stance.lua#L22-L39)
- [scripts/extension_systems/ability/actions/action_stance_change.lua：177–179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_stance_change.lua#L177-L179)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：706–804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L706-L804)
- [scripts/utilities/attack/power_level.lua：25–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/utilities/attack/damage_calculation.lua：587–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：195–255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L195-L255)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：353–381](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L353-L381)

## 算例條件與待確認事項

- 最大韌性 100、啟動前韌性 40：恢復 100−40=60，啟動後為 100。
- 基準受到傷害 100×0.3=30；相當於減少 70%，仍會受其他減傷或傷害修正影響。
- 受到傷害倍率會與其他防禦修正共同結算；實際承受值可能再受難度、敵人攻擊類型等因素影響。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；數值與行為按固定來源提交說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b712c4e8`。
- 繁中「受到的傷害減少」與英文「Reduced Damage Taken」一致；兩者也都指出姿態有移動加成、動作減速降低、無法衝刺及啟動時恢復全部韌性。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability/adamant_stance.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/4eb18874-83b0-4e2f-bf2b-c91001a15371)

圖片僅供技能辨識，不作機制證據。

