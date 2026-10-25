# 天鷹使節(Nuncio-Aquila)：原始碼依據

[English](en/adamant_area_buff_drone.md)

[返回基礎效果](BASE_EFFECTS.md#adamant_area_buff_drone)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`adamant_area_buff_drone`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 這是 adamant_archetype.base_talents 的基礎戰鬥技能，對應玩家能力 adamant_area_buff_drone。能力設定為 1 充能，冷卻與每充能消耗均讀取 60 秒設定。
- 基礎無升級的友方 buff 是 adamant_drone_base_buff，其 update_func 每秒依 dt 以 toughness=0.05 呼叫韌性百分比恢復；敵方 buff 是 adamant_drone_enemy_debuff，damage_taken_multiplier=1.15。其他隊友攻速、復活速度、韌性減傷與敵方近戰削弱掛在獨立 special-rule buff，未併入本基礎效果。
- 部署物以 7.5 公尺半徑分別檢查 allied 與 enemy；友方套用 base buff、敵方套用 damage-taken debuff，離開範圍時移除。部署物跟隨擁有者，來源 lifetime 為 20 秒。
- 100 韌性例子是 100×0.05×20 的理論補充量；韌性上限、進出範圍、受擊與更新時序會限制實際恢復。傷害例子只展示 1.15 倍承傷倍率，不代表實戰最終傷害。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L51-L55)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L503-L541)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L77-L92)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L68-L82)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1177-L1225)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L424-L483)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua#L80-L88)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua#L224-L294)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/adamant_area_buff_drone.lua#L7-L16)

## 算例與待確認事項

- 韌性上限 100、全程在圈內：每秒 100×5%=5 點，20 秒理論補量 100 點，實際仍以缺少的韌性為上限。
- 無其他修正時，100 點來襲傷害乘 1.15 為 115 點。
- 友方每秒恢復 5% 是按韌性上限計的恢復比例，並非額外提高韌性上限。
- 15% 是敵方承受傷害倍率；其他減傷、弱點、護甲、距離與傷害類型仍會參與最終結算。
- 天鷹使節本身的升級特效屬其他節點，這份基礎記錄只涵蓋 base_talents 預設效果。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
