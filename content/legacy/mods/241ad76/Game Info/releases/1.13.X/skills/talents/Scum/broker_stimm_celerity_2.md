# 激勵II(Spur II)：原始碼依據

[English](en/broker_stimm_celerity_2.md)

[返回玩家說明](README.md#broker_stimm_celerity_2)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_stimm_celerity_2)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_stimm_celerity_2`；名稱鍵：`loc_talent_broker_stimm_celerity_a`；描述鍵：`loc_talent_stat_attack_speed / loc_talent_stat_wield_speed / loc_talent_stat_stamina_cost_multiplier`。
- 節點：`node_1431c326-ad53-4c00-afc8-088f0ef8c197`；分類：興奮劑配方；配點成本：2 點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 本配方 cost=max_points，因此只購買一次，並非可重複點選的等級數。已選的前置配方仍同時生效；各節點效果依 stat 類型加算或乘算。
- attack_speed=.04；多個節點保留各自的 .04，總攻速加成為選中數×.04。
- wield_speed=.25，作用於 WIELD_ACTION_KINDS 的 time_scale。
- stamina_cost_multiplier=0.85，multiplicative_multiplier，依 Stamina.drain/drain_percentage 乘算。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4091–4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4128–4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4210–4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/action/action_handler.lua：356–428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/buff/buff_settings.lua：700–700](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L700-L700)
- [scripts/utilities/attack/stamina.lua：14–55](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L14-L55)
- [scripts/settings/buff/buff_settings.lua：983–983](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L983-L983)
- [scripts/settings/talent/talent_settings_broker.lua：508–522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L508-L522)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua：564–588](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L564-L588)

## 算例條件與待確認事項

- **切換算例**：原本可加速的切換動作為 1 秒，僅此項時為 1 ÷ 1.25 = 0.8 秒；I、II 合計為 1 ÷ 1.5 ≈ 0.667 秒。
- **耐力算例**：原消耗 10 點，僅此項時變成 10 × 0.85 = 8.5 點；II、III、IV 都選取時為 10 × 0.85 × 0.85 × 0.8 = 5.78 點。
- **攻速算例**：從激勵I 選到本節點，共增加 8%；原本可加速的 1 秒攻擊動作變成 1 ÷ 1.08 ≈ 0.926 秒。
- 攻擊速度只縮短採用相應速度倍率的動作段，不能保證每種武器的所有動作都同比縮短。
- 同一使用者的配方由 syringe_broker_buff 讀取並共同套用；場域分享時依提供者配方，外部控制的持續時間另按場域設定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`a2530496 / d0347040 / 26fbf08f`。
- 逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_celerity_2.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124)｜[圖片附件](https://github.com/user-attachments/assets/bfb821b6-f80f-4c08-842f-b3f7000ac772)

圖片僅供技能辨識，不作機制證據。

