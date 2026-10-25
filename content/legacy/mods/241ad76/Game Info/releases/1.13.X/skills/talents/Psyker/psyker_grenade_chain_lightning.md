# 懲戒(Smite)：原始碼依據

[English](en/psyker_grenade_chain_lightning.md)

[返回玩家說明](README.md#psyker_grenade_chain_lightning)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_grenade_chain_lightning)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_grenade_chain_lightning`；名稱鍵：`loc_ability_psyker_chain_lightning`；描述鍵：`loc_ability_psyker_chain_lightning_description`。
- 節點：`node_88eb687e-bd2e-449e-b198-1bd2318eeda1`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 固定原始碼 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。懲戒左鍵快速動作與右鍵蓄力動作使用不同連鎖時程。每個表列先限制由準星取得的直接根目標數；後續跳躍是各根目標另行向附近敵人擴展，受獨立 max_jumps_at_time、半徑、角度、視線與存活條件限制。電擊效果是 interval buff：每次 tick 間隔在 0.1–0.3 秒間隨機，平均約 0.2 秒；起始攻擊時間會按目標 hit mass 延後，公式為 clamp((target_hit_mass - 1) × hit_mass_cost, 0, 2)：快速電擊的 hit_mass_cost=0.1，蓄力電擊為0.05。例：hit mass=3 時分別延後0.2秒與0.1秒。直接根目標與後續跳躍的表格時間均相對於動作開始，程式依 time_in_action >= 時間門檻選上限。tick 傷害在伺服器端使用 500 power level、電擊傷害設定與該目標電擊開始後的時間計算；基礎施放在 5 秒內、蓄力施放在 2 秒內把 charge level 從 0 推到 1，傷害設定的 power-level scalar 由 0.4 線性升至 1。反噬在基礎連鎖啟動後先以 0.75%/0.1 秒累積；充能到滿後按 22.5%/秒累積。蓄力前置動作的模板為 0.8 秒充能、完整該階段增加 5%；所有反噬推導假設沒有其他修正，實際動作時長及增益會改變累積值。
- 目前閃擊本身掛載psyker_increased_chain_lightning_size，S333–338為jumps+1、radius+1、angle+0。ChainLightning.targeting_parameters將時間表的max_jumps加上該屬性，radius亦加上1；故後續傳導為6公尺，跳躍上限為1/2/3/4，不能只用武器模板的5公尺與0/1/2/3。直接尋敵模板的radius15亦變16。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：340–372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L340-L372)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：199–230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L199-L230)
- [scripts/settings/talent/talent_settings_psyker.lua：282–304](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L282-L304)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua：12–54](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L12-L54)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua：82–124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L82-L124)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua：447–464](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L447-L464)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua：514–524](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L514-L524)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua：587–605](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L587-L605)
- [scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua：419–439](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L419-L439)
- [scripts/extension_systems/weapon/actions/action_chain_lightning.lua：166–179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L166-L179)
- [scripts/extension_systems/weapon/actions/action_chain_lightning.lua：390–418](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L390-L418)
- [scripts/extension_systems/weapon/actions/action_chain_lightning.lua：430–489](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L430-L489)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：7–47](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L7-L47)
- [scripts/settings/buff/weapon_buff_templates.lua：983–1054](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L983-L1054)
- [scripts/settings/buff/weapon_buff_templates.lua：1088–1123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1088-L1123)
- [scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua：417–462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L417-L462)
- [scripts/utilities/attack/power_level.lua：122–134](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L122-L134)
- [scripts/utilities/warp_charge.lua：116–141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L116-L141)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua：26–41](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L26-L41)
- [scripts/utilities/action/chain_lightning.lua：408–435](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L408-L435)
- [scripts/utilities/action/chain_lightning.lua：456–483](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L456-L483)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2159–2167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2159-L2167)
- [scripts/settings/talent/talent_settings_psyker.lua：333–338](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L333-L338)
- [scripts/utilities/action/chain_lightning.lua：455–497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L455-L497)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：199–230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L199-L230)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：340–372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L340-L372)

## 算例條件與待確認事項

- 作用時間從各自動作開始計；只計準星直接取得的根目標上限，並假設目標符合命中條件。 快速施放：直接目標 0 秒 1 個、1 秒 2 個、2 秒 3 個；其後跳躍上限分別為 0 秒 1 次、1.2 秒 2 次、1.8 秒 3 次、2.7 秒 4 次。蓄力施放：直接目標 0 秒 1 個、0.15 秒 2 個、0.3 秒 3 個；其後跳躍上限分別為 0 秒 1 次、0.4 秒 2 次、0.6 秒 3 次、0.9 秒 4 次。 直接根目標數與各根目標後續跳躍數是兩套上限，不能把 3 個根目標解讀成整次攻擊最多只打 3 個敵人。
- 反噬統計使用無其他修正的基礎連鎖模板，動作從 0 充能開始。 前 0.1 秒累積 0.75%；其後每秒 22.5%。若快速動作維持 0.35 秒，理想化累積為 0.75% + 22.5% × 0.25 = 6.375%。蓄力前置模板完整執行 0.8 秒時，該階段累積 5%。 這是依時間模板推算的反噬增量；離散更新、動作轉換與既有反噬可能令實際值不同。
- 一個電擊 tick 恰在目標受到電擊後 1 秒發生，並假設目標 hit mass=1，故攻擊延遲為 0。 快速施放 charge level = min(1, 1/5)=0.2，power-level scalar = 0.4+(1-0.4)×0.2=0.52；蓄力施放 charge level = min(1, 1/2)=0.5，scalar=0.4+(1-0.4)×0.5=0.7。 例中是用於該次電擊傷害的 power-level scalar，不是最終傷害百分比；最終數字仍要套用傷害曲線與目標護甲。
- 電擊持續存在且 tick 間隔落在模板範圍。 每 tick 隨機間隔 0.1–0.3 秒，平均間隔 0.2 秒，約每秒 5 次；單看區間約為每秒 3.3–10 次。 tick 頻率會波動，不是固定每 0.2 秒必定命中一次。
- 目標時間表是程式中的上限；敵人位置、距離、角度、視線、存活狀態及每條連鎖的可用跳躍會限制實際命中。
- 電擊 tick 受目標 hit mass 延遲、隨機間隔、5 秒／2 秒傷害充能曲線、敵人護甲及其他倍率影響；power-level scalar 不等同最終傷害百分比。
- 反噬百分比由模板與共用反噬更新程式推導；實際值會受角色反噬修正、作用時間、技能中斷及更新幀影響。
- 靜態推演，未做遊戲內測試。文字與程式來源皆為1.13.1；實際表現待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`837f8e7f`。
- 本地繁中說明的鎖定、眩暈、鄰近擴散與蓄力效果均可由固定來源確認；此草稿進一步把直接根目標上限、後續跳躍、電擊 tick 與反噬成本分開說明，沒有把內部時程誤寫成必定命中數。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical/psyker_grenade_chain_lightning.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/981d6617-da53-4f4d-8c85-c2e64dddab43)

圖片僅供技能辨識，不作機制證據。

