# 電能地雷(Voltaic Shock Mine)：原始碼依據

[English](en/adamant_shock_mine.md)

[返回玩家說明](README.md#adamant_shock_mine)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_shock_mine)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_shock_mine`；名稱鍵：`loc_talent_ability_shock_mine`；描述鍵：`loc_talent_ability_shock_mine_description`。
- 節點：`node_ff1dbe2a-92b6-46f8-9c71-dc777431a537`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 部署狀態ProjectileDamageExtension直接return，因此不是由一般fuse15秒控制已部署地雷。ProximityShockMine開始life_time=150+arming1；第一次掃到HEALTH_ALIVE目標便重設start_time及life_time15，即使該目標已電擊也會開始倒數。
- 每.2秒shuffle半徑3m結果，只有未electrocuted才加shock_mine_interval；模板num_targets_per_trigger3但停止條件為num_added_buffs>3，最多可能處理4個，不把設定3宣稱成硬上限。
- 單次狀態3秒、隨機.3～.8秒傷害；已電擊者不重加，因此一般流程不會用refresh flag不斷重新計時。shock_grenade_stun_interval攻擊8，無甲預設插值ADM.5；正在踉蹌的poxwalker_bomber跳過傷害。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：469–502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L469-L502)
- [scripts/settings/talent/talent_settings_adamant.lua：84–87](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L84-L87)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua：135–146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L135-L146)
- [scripts/settings/projectile/player_projectile_templates.lua：1083–1148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1083-L1148)
- [scripts/settings/buff/weapon_buff_templates.lua：475–510](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L475-L510)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_shock_mine.lua：34–45](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_shock_mine.lua#L34-L45)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_shock_mine.lua：77–216](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_shock_mine.lua#L77-L216)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua：149–168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L149-L168)
- [scripts/settings/buff/weapon_buff_templates.lua：504–537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L504-L537)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua：648–690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L648-L690)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：839–869](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L869)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：469–502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L469-L502)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：382–410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L382-L410)

## 算例條件與待確認事項

- **傷害算例**：電擊每 0.3～0.8 秒隨機結算一次。單計護甲、無其他修正時，無甲基準為 8 × 0.5 = 4 點，防彈與硬殼護甲基準為 8 × 1 = 8 點；跳數不固定，不能直接乘固定次數當總傷害。
- 原文未列地雷的逐跳傷害；本分析不以電擊持續時間乘上固定跳數推算總傷害。
- 部署設定的 life_time=150 與投射物 fuse_time=15 屬不同層級計時欄位；未把它們混成相同的可視持續時間。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d710719f`。
- 繁中把英文 activates as it lands（落地啟動）寫為「落地後立即引爆」，混淆進入持續電擊狀態與立即爆炸。啟動1秒、待機及作用時間細節另依固定來源核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/tactical/adamant_shock_mine.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/db0783ea-1312-4fed-a430-c1be9a87d2e1)

圖片僅供技能辨識，不作機制證據。

