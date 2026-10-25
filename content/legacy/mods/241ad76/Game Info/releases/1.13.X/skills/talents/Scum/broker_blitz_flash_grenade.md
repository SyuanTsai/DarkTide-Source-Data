# 閃光彈(Blinder)：基礎閃擊：原始碼依據

[English](en/broker_blitz_flash_grenade.md)

[返回基礎效果](BASE_EFFECTS.md#broker_blitz_flash_grenade)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`broker_blitz_flash_grenade`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 巢都渣滓 base_talents 預設選入 broker_blitz_flash_grenade，天賦連到 PlayerAbilities.broker_flash_grenade。能力使用 charges，預設最大充能 3，並掛上 quick_flash_grenade 規則與 broker_passive_blitz_charge_on_kill 計數 buff。
- 投擲輸入使用 quick_flash_grenade 武器動作，總動作時間 0.55 秒、0.25 秒時生成 projectile；投射物以碰撞觸發引爆。爆炸範圍半徑 3.5 公尺、近距半徑 2.25 公尺，套用距離衰減並使用閃光彈傷害/踉蹌資料。
- 一般充能來源是近距離擊殺：buff 以 on_close_kill 檢查，只有閃擊充能尚未滿時才把計數加 1；累積到 20 後歸零並補回 1 枚。達到上限時擊殺不會增加計數；若先前已有未完成計數，滿充能期間會保留而不增加。
- 另有一條特定的延遲擊殺路徑：伺服器端先記錄持有閃擊計數 buff 時以副手 needle pistol 命中的存活敵人；該敵人仍帶毒、之後由 toxin 傷害死亡，而且死亡位置與 params.attacking_unit 位置在近距範圍內，才送入同一個近距擊殺補充流程。它不等於任何毒傷擊殺都會回充；距離依該死亡事件的 attacking_unit 計算。
- broker_flash_grenade_cluster_stagger_tracking_buff 只記錄閃光彈使敵人踉蹌的成就資料，並非另一份玩家傷害或充能加成。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L53-L71)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L598-L639)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L211-L226)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/base_template_settings.lua#L223-L273)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1248-L1263)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L129-L159)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1654-L1717)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L197)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L204)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L227-L242)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L103-L154)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L298-L317)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L791)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L205)

## 算例與待確認事項

- 閃擊上限為 3 枚、目前有 2 枚時，累積 20 次有效近距擊殺後補 1 枚，回到 3/3。
- 只計基本 20 次門檻時，每完成一組 20 次有效近距擊殺補 1 枚；未完成計數不會在滿充能時增加。
- 延遲毒殺只適用於先前由副手 needle pistol 命中的目標，死亡需為 toxin 傷害且符合 attacking_unit 的近距位置檢查；不能推成所有毒殺都能補閃擊。
- 傷害半徑與近距傷害曲線不是固定傷害值；敵人種類、護甲、距離及其他傷害修正仍會影響實際結果。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
