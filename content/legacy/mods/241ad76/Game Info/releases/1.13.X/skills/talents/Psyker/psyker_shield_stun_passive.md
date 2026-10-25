# 衰弱界線(Enervating Threshold)：原始碼依據

[English](en/psyker_shield_stun_passive.md)

[返回玩家說明](README.md#psyker_shield_stun_passive)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_shield_stun_passive)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_shield_stun_passive`；名稱鍵：`loc_talent_psyker_force_field_stun_increased`；描述鍵：`loc_talent_psyker_force_field_stun_increased_new_description`。
- 節點：`node_959bd205-bf6c-48fc-ab14-f59364fedd6c`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 被動只監聽 on_unit_touch_force_field，並確認觸發護盾的擁有者是天賦持有者。目標tag為special或monster時採special_proc_chance=1；其它目標採proc_chance=0.2。成功後以psyker_shield_stagger profile執行electrocution/push類攻擊並施加psyker_stun_effect。若目標有special tag，另呼叫force_field_health_extension:add_damage(8)；護盾HealthExtension在每個0.33秒允許的受傷窗口固定扣1耐久，所以呼叫值8不等於一次扣8耐久。怪物有100%觸發，但該額外add_damage分支只檢查special。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1351–1374](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1351-L1374)
- [scripts/settings/talent/talent_settings_psyker.lua：342–346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L342-L346)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2491–2538](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2491-L2538)
- [scripts/extension_systems/force_field/force_field_system.lua：185–253](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/force_field_system.lua#L185-L253)
- [scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua：46–99](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua#L46-L99)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1351–1374](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1351-L1374)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1183–1205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1183-L1205)

## 算例條件與待確認事項

- 忽略隨機抽樣誤差，目標確實觸碰/穿越自己的護盾。 一般敵人單次觸發率20%；special或monster標記目標使用100%機率。 一般敵人平均約五次有效觸碰中一次電擊；專家或巨獸每次都會觸發。
- 程式碼按敵人標籤分類；並非所有「精英」敵人都必然是special或monster。
- 事件依護盾接觸/穿越觸發，不等於敵人在任意距離靠近就觸發。
- source標註普通敵人與特殊敵人的具體定義是tag；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`900d2430`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_shield_stun_passive.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/0cacb110-bf24-451f-ad19-f55ee7bd6191)

圖片僅供技能辨識，不作機制證據。

