# 電流弧(Voltaic Arcs)：原始碼依據

[English](en/cryptic_discharge_generates_arcs.md)

[返回玩家說明](README.md#cryptic_discharge_generates_arcs)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_discharge_generates_arcs)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_discharge_generates_arcs`；名稱鍵：`loc_talent_cryptic_discharge_arc_bonus`；描述鍵：`loc_talent_cryptic_discharge_arc_bonus_desc`。
- 節點：`node_76d47f27-b1fe-4614-a013-9cdcfb6ac12b`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Talent special rule 在 ActionCrypticDischarge 啟動時呼叫 _trigger_arcs_in_front，使用當次消耗的完整充能數乘以每充能 1 道電弧，並以 5 道封頂。
- 每個起始目標需為存活、非 untargetable、敵方陣營，且在前方扁平方向 dot > 0.5 的範圍內；寬相查詢半徑為 12m。程式依 broadphase 結果順序建立電弧，達到上限即停止。
- 每個 root 使用 chain lightning effect：半徑 12m、每次最多 1 個子目標、最大 4 次鏈接；目標附加短暫電擊 buff。鏈接傷害模板的 attack power 設為 0，impact 與後續電擊傷害仍依傷害 profile / 敵人條件計算，不能把每道電弧換成固定生命傷害。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：222–239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L222-L239)
- [scripts/settings/talent/talent_settings_cryptic.lua：90–96](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L90-L96)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua：89–143](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L89-L143)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua：143–188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L143-L188)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/discharge_ability_arc_chain_lightning_source.lua：16–47](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/discharge_ability_arc_chain_lightning_source.lua#L16-L47)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/discharge_ability_arc_chain_lightning_source.lua：100–144](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/discharge_ability_arc_chain_lightning_source.lua#L100-L144)
- [scripts/settings/buff/weapon_buff_templates.lua：2752–2798](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2752-L2798)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua：1820–1822](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1820-L1822)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：222–240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L222-L240)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1032–1054](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1032-L1054)

## 算例條件與待確認事項

- 電弧數以消耗充能計，最多 5 道；實際鏈接目標數受附近可用敵人及鏈接驗證限制。
- 各次傷害依目標與傷害階段計算，來源未提供可套用所有敵人的單一總傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b7638357`。
- 已逐項比對本機同一描述鍵的繁中與英文，觸發、作用方向及數值占位一致；主文補充實際分母、時間與限制，省略細節不列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_discharge_generates_arcs.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/9d074da8-541c-4fec-bc2b-47e53be42bad)

圖片僅供技能辨識，不作機制證據。

