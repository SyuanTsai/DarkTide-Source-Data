# 乙太碎片(Ethereal Shards)：原始碼依據

[English](en/psyker_throwing_knives_piercing.md)

[返回玩家說明](README.md#psyker_throwing_knives_piercing)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_throwing_knives_piercing)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_throwing_knives_piercing`；名稱鍵：`loc_talent_psyker_throwing_knives_pierce`；描述鍵：`loc_talent_psyker_throwing_knives_pierce_description`。
- 節點：`node_df9852a3-36e2-40ab-bd6b-c8ce430cfaa4`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 固定 source SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。技能樹節點掛載 psyker_throwing_knives_piercing，該 buff 將 psyker_smite_max_hit_mass_attack_modifier 與 psyker_smite_max_hit_mass_impact_modifier 各設為 +0.5。buff_settings.lua 將這兩項標成 additive_multiplier，因此無其他同項修正時，讀取值是基礎 1 加 0.5，即 1.5。Assail 的基礎 damage profile 有 psyker_smite=true；共用 DamageProfile.max_hit_mass 只對這種 profile 讀取 Psyker 專屬倍率，並分別乘進 attack 與 impact 的最大命中質量。因而該次攻擊所算出的 attack/impact hit-mass 上限各變為原來的 1.5 倍。上限是命中質量，不是目標數；敵人的質量、原 profile 計算結果、其他倍率及 projectile 的 hit-mass 刪除規則共同決定實際穿透數。程式中的 psyker_throwing_knives_pierce profile 是另一個由 psyker_empowered_grenade 關鍵字選出的投射物變體，不能將該變體 profile 單獨誤認為本天賦本身的 +1 目標效果。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：317–339](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L317-L339)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：722–737](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L722-L737)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2781–2788](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2781-L2788)
- [scripts/settings/buff/buff_settings.lua：931–932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L931-L932)
- [scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua：288–320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L288-L320)
- [scripts/utilities/attack/damage_profile.lua：36–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L80)
- [scripts/settings/projectile/player_projectile_templates.lua：567–611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L567-L611)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua：16–34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua#L16-L34)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：722–737](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L722-L737)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：317–339](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L317-L339)

## 算例條件與待確認事項

- 只看同一攻擊、相同其他修正；若其原本計得的 attack hit-mass 上限為 2 個質量單位。 2 × (1 + 0.5) = 3 個質量單位。 上限增加 1 個質量單位；這不等於必定多命中 1 名敵人，因為各目標消耗的質量不同。
- 只看同一攻擊、相同其他修正；若其原本計得的 impact hit-mass 上限為 2 個質量單位。 2 × (1 + 0.5) = 3 個質量單位。 撞擊上限也增加 50%；能否穿過下一名敵人仍取決於該敵人的命中質量及 projectile 設定。
- 2 質量單位是公式示例，不是原始碼宣稱的固定 Assail 實際上限；實際上限還依 power level、charge、damage profile 與其他修正計算。
- 本例明確分開 attack 與 impact 上限；不可只依 buff 名稱或說明文字推成固定穿透目標數。
- 靜態原始碼推導，未做遊戲內穿透測試；Build 25606770 與固定 SHA 版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`392c597f`。
- 繁中原文只說投射物能擊穿額外目標，沒有提供 hit-mass 的量、上限公式或保證增加的目標數。原始碼沒有固定的 +1 目標值；這種省略屬描述不完整。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical_modifier/psyker_throwing_knives_piercing.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/ae86e2bb-6971-4dfe-b678-0aa814ccdfa1)

圖片僅供技能辨識，不作機制證據。

