# 靈能強化(Empowered Psionics)：原始碼依據

[English](en/psyker_empowered_ability.md)

[返回玩家說明](README.md#psyker_empowered_ability)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_empowered_ability)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_empowered_ability`；名稱鍵：`loc_talent_psyker_empowered_ability`；描述鍵：`loc_talent_psyker_empowered_ability_description`。
- 節點：`node_8d367c1d-ce78-44f3-a7b8-6a4b55341929`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 內部charges基礎cap1；on_hit機率.1後再check on_kill，取得+1且clamp上限。無duration，不會自然到期；visual_buff的額外一層與max_stat_stacks=1不能解讀為第二次可用強化。
- smite_damage+.5與同階段damage加算，smite_damage_multiplier=1.5來自顱腦崩裂本身，是另一乘算項。smite_attack_speed+.5由ActionSmiteTargeting使用charge_time/attack_speed，故時間除以1.5；天賦format_values稱施放時間減半，與執行公式有落差。
- Assail強化先由weapon template keyword選擇piercing projectile，普通首目標attack distribution225改350、瞄準380改500；attack/impact cleave由2改4，各命中順序的attack distribution另有不同，不是所有目標固定相同增幅。這些power distribution值需經共用傷害結算，不直接視為最終傷害。
- ActionSpawnProjectile在fire_time付款前發現psyker_empowered_grenade且action_settings.psyker_smite時跳過_pay_for_projectile，但仍_proc_buffs；因此免除本次投擲次數和反噬付款，on_shoot_projectile仍讓內部強化charges減1。技能說明「不耗充能」與扣強化層並不矛盾，兩者是不同資源。
- chain_lightning_damage+2與一般傷害同階段加算；chain_lightning_jump_time_multiplier=.5雖被宣告，但chain_lightning.lua494寫為chain_settings.jump_time or DEFAULT_JUMP_TIME * stat_buff_jump_time。目前快放、蓄力及直接尋敵模板均明定jump_time=.3，因此此路徑取.3，不套用.5；ActionChainLightning以回傳值設下一次跳躍時間。不能把.3×.5=.15當成本版已生效結果。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：616–721](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L616-L721)
- [scripts/settings/talent/talent_settings_psyker.lua：310–315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L310-L315)
- [scripts/settings/talent/talent_settings_psyker.lua：340–341](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L340-L341)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2245–2269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2245-L2269)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2271–2387](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2271-L2387)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2388–2487](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2388-L2487)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua：12–20](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L12-L20)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua：56–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L56-L65)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua：16–34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua#L16-L34)
- [scripts/settings/projectile/player_projectile_templates.lua：567–619](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L567-L619)
- [scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua：288–393](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L288-L393)
- [scripts/extension_systems/weapon/actions/action_spawn_projectile.lua：218–244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L218-L244)
- [scripts/extension_systems/weapon/actions/action_smite_targeting.lua：153–162](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_smite_targeting.lua#L153-L162)
- [scripts/utilities/attack/damage_calculation.lua：507–525](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L507-L525)
- [scripts/utilities/action/chain_lightning.lua：455–497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L455-L497)
- [scripts/extension_systems/weapon/actions/action_chain_lightning.lua：451–475](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L451-L475)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua：82–89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L82-L89)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：616–721](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L616-L721)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1296–1325](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1296-L1325)

## 算例條件與待確認事項

- **顱腦崩裂**：不產生反噬，傷害增加 50%，蓄力速度增加 50%。沒有其他增傷時，100 × 1.5 = 150 點；原本 2 秒蓄力變成 2 ÷ 1.5 ≈ 1.33 秒，約縮短 33.3%。
- **懲戒**：傷害增加 200%。沒有其他增傷時，100 × (1 + 200%) = 300 點。
- **靈能攻擊**：不產生反噬、不消耗投擲次數，並提高傷害與穿透能力；仍會消耗一層靈能強化。穿透容量由 2 提高至 4，是 4 ÷ 2 = 2 倍；實際能貫穿的敵人數量依敵人與命中條件而變。
- **機率算例**：每次皆有空位可儲存時，100 次擊殺的期望取得次數為 100 × 10% = 10 次；不是每十次擊殺保證觸發。
- 強化顱腦崩裂的顯示參數稱施放時間減少50%，執行是速度增加50%（時間÷1.5）；繁中與英文同樣寫時間減少，屬來源差異，版本對應為1.13.1，不列繁中誤譯。
- 蓄力時間仍受其他速度與動作修正影響；傷害算例假設該階段沒有其他加成。靈能攻擊的不同命中順序與護甲仍需分別結算。
- 懲戒傳導加快的顯示值與使用端短路判定不一致；此版本執行路徑未將.5套至明定的.3秒間隔，待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`8b4a7ea9`。
- 繁中與英文都將顱腦崩裂加成稱施放時間減少；固定原始碼實際按蓄力速度+50%計算。雙語一致的跨來源差異留待遊戲內核對；Assail免投擲次數與消耗強化層屬兩種資源，不判為矛盾。 懲戒傳導速度顯示與實際讀取亦有落差：此路徑優先取明定0.3秒，未乘強化倍率。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone/psyker_empowered_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/d3625057-f314-491b-8a34-84789ec38342)

圖片僅供技能辨識，不作機制證據。

