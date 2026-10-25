# 腎上腺素狂暴(Adrenaline Frenzy)：原始碼依據

[English](en/broker_keystone_adrenaline_junkie.md)

[返回玩家說明](README.md#broker_keystone_adrenaline_junkie)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_adrenaline_junkie`；名稱鍵：`loc_talent_broker_keystone_adrenaline_junkie`；描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_desc`。
- 節點：`node_887dd932-ea4e-42cb-b294-64f30771d7e0`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 設定為 regular_grant=1、crit_grant=1、adrenaline_duration=2、adrenaline_max_stacks=30、frenzy_duration=10、frenzy_max_stacks=1、melee_attack_speed=0.1、melee_damage=0.25。
- proc check 僅接受 attack_type=melee；一般命中給 1 層，CheckProcFunctions.on_crit 另加 1 層。達到 30 層時 on_reached_max_stack_func 加入 frenzy buff，並將堆疊 buff 的 refresh_duration_on_remove_stack 關閉；條件退出隨後清除該層數 buff。
- adrenaline stack buff 設 refresh_duration_on_stack 與 refresh_duration_on_remove_stack。新層重設共享計時；逾時後內部移除一層並重設計時，因此未命中時逐層每 2 秒衰退。Frenzy buff max_stacks=1 且 refresh_duration_on_stack=true，重觸發可更新其 10 秒持續時間。
- melee_attack_speed 與 melee_damage 在 buff_settings 都是 additive_multiplier。近戰攻擊速度倍率為 1+0.10=1.10；damage_calculation 將近戰傷害項加到傷害倍率總和，所以其他同階段 +20% 時例為 100×(1+0.20+0.25)=145，而非逐項相乘。

## 原始碼依據

- [scripts/settings/talent/talent_settings_broker.lua：464–480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2614–2697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2614-L2697)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3600–3685](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3600-L3685)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3686–3759](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3686-L3759)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3761–3804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3761-L3804)
- [scripts/extension_systems/buff/buffs/buff.lua：29–44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44)
- [scripts/extension_systems/buff/buffs/buff.lua：619–630](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L630)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua：631–663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L663)
- [scripts/settings/buff/buff_settings.lua：863–869](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L863-L869)
- [scripts/utilities/attack/damage_calculation.lua：236–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245)
- [scripts/utilities/attack/damage_calculation.lua：295–320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L320)
- [scripts/utilities/attack/damage_calculation.lua：582–612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L582-L612)
- [scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua：45–51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua#L45-L51)
- [scripts/utilities/action/action_handler.lua：356–428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2614–2697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2614-L2697)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：690–721](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L690-L721)

## 算例條件與待確認事項

- **暴擊算例**：一次一般近戰命中 1 層；若該次暴擊，則 1+1=2 層。
- **狂暴算例**：攻速倍率 1+0.10=1.10，1 秒動作約 1/1.10=0.91 秒；傷害單計此項為 100×(1+0.25)=125，同階段已有 20% 時為 100×(1+0.20+0.25)=145。
- 近戰傷害算例只表達 damage_calculation 的傷害加法修正階段；武器傷害、部位、護甲、暴擊、弱點與承傷修正仍會影響最終數值。
- 實際攻擊時間還受武器動作與其他速度修正影響；0.91 秒是單計 +10% 速度的比例示例。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b4493ff1`。
- 繁中與英文一致描述近戰命中、暴擊額外層、2 秒失層、30 層門檻及 10 秒近戰攻速／傷害增益；實際層數與重新計時細節由固定版本的 buff 消費邏輯補足。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone/broker_keystone_adrenaline_junkie.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/2b18473f-9818-4d07-98ab-b4c7995dbf8d)

圖片僅供技能辨識，不作機制證據。

