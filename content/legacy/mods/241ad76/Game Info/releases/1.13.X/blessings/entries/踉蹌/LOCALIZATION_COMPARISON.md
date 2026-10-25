# 踉蹌：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_negate_stagger_reduction_on_weakspot`／hash`98c4c535`；描述鍵`loc_trait_bespoke_negate_stagger_reduction_on_weakspot_desc`／hash`cab0effd`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Falter／踉蹌。

- 文件名稱：踉蹌(Falter)。

- 適用武器：電擊錘、法務官電擊鎚、機動自動槍、步兵鐳射槍；描述鍵`loc_trait_bespoke_negate_stagger_reduction_on_weakspot_desc`／hash`cab0effd`。

- 英文模板：Increased stagger on enemies by {stagger:%s}, on Weakspot hit. Additionally, increases ranged stagger strength by {ranged_stagger:%s}.

- 繁中模板：敵人受到弱點傷害時的踉蹌增加{stagger:%s}，同時遠程攻擊造成的踉蹌增加{ranged_stagger:%s}。

- **靜態重建**：以下只將同一RAW描述中的四級formatter placeholder依來源值代入；標點、單複數及英中原句均保留。

- I — EN: `Increased stagger on enemies by +60%, on Weakspot hit. Additionally, increases ranged stagger strength by +30%.`
  ZH: `敵人受到弱點傷害時的踉蹌增加+60%，同時遠程攻擊造成的踉蹌增加+30%。`
- II — EN: `Increased stagger on enemies by +70%, on Weakspot hit. Additionally, increases ranged stagger strength by +30%.`
  ZH: `敵人受到弱點傷害時的踉蹌增加+70%，同時遠程攻擊造成的踉蹌增加+30%。`
- III — EN: `Increased stagger on enemies by +80%, on Weakspot hit. Additionally, increases ranged stagger strength by +30%.`
  ZH: `敵人受到弱點傷害時的踉蹌增加+80%，同時遠程攻擊造成的踉蹌增加+30%。`
- IV — EN: `Increased stagger on enemies by +90%, on Weakspot hit. Additionally, increases ranged stagger strength by +30%.`
  ZH: `敵人受到弱點傷害時的踉蹌增加+90%，同時遠程攻擊造成的踉蹌增加+30%。`

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 四級顯示值 | Increased stagger on enemies by {stagger:%s}, on Weakspot hit. Additionally, increases ranged stagger strength by {ranged_stagger:%s}. / 敵人受到弱點傷害時的踉蹌增加{stagger:%s}，同時遠程攻擊造成的踉蹌增加{ranged_stagger:%s}。 | 四組階級格式器來源： scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua:164-219； scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua:210-265； scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua:297-352； scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p2.lua:484-539。靜態顯示為 I–IV +60/+70/+80/+90，遠程值為 +30。 | 一致（僅限格式顯示值） | 四級formatter代入值與RAW中的顯示百分數相符；不表示最終踉蹌增幅也是相同比例。 |
| 弱點效果的實際比例 | Increased stagger on enemies by {stagger:%s}, on Weakspot hit. Additionally, increases ranged stagger strength by {ranged_stagger:%s}. / 敵人受到弱點傷害時的踉蹌增加{stagger:%s}，同時遠程攻擊造成的踉蹌增加{ranged_stagger:%s}。 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1839-1848; scripts/extension_systems/buff/buffs/buff.lua:689-747; scripts/utilities/attack/stagger_calculation.lua:15-16,95-122. Own tier replaces the conditional weakspot-reduction multiplier with 0.4/0.3/0.2/0.1 after the mandatory finesse half. | 文件未涵蓋 | RAW未指明+60-90%是以何值為比較基準；實作修改的是踉蹌減免輸入，並非將最終踉蹌乘上+60-90%，故不以最終結果宣稱一致或空泛勘誤。 |
| 弱點條件與先後階段 | Increased stagger on enemies by {stagger:%s}, on Weakspot hit. Additionally, increases ranged stagger strength by {ranged_stagger:%s}. / 敵人受到弱點傷害時的踉蹌增加{stagger:%s}，同時遠程攻擊造成的踉蹌增加{ranged_stagger:%s}。 | scripts/utilities/attack/attack.lua:249-254; scripts/utilities/attack/weakspot.lua:9-42; scripts/utilities/attack/stagger_calculation.lua:15-16,95-122; scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1839-1848. | 文件未涵蓋 | 實作在持用條件下判定有效弱點，先將通用減免乘.5，再套tier乘數；RAW沒有說明持用門檻或這段計算順序。 |
| 遠程+30的作用階段 | Increased stagger on enemies by {stagger:%s}, on Weakspot hit. Additionally, increases ranged stagger strength by {ranged_stagger:%s}. / 敵人受到弱點傷害時的踉蹌增加{stagger:%s}，同時遠程攻擊造成的踉蹌增加{ranged_stagger:%s}。 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1839-1848; scripts/utilities/attack/stagger_calculation.lua:190-212; scripts/settings/buff/buff_settings.lua:940-958,1048-1058. | 文件未涵蓋 | 全部wrapper都保留conditional ranged_impact_modifier=.3；僅attack_type.ranged的impact計算讀取它，然後仍進後續曲線。RAW未說明+30是最終踉蹌成果增幅。 |
| 型號與遠程屬性消費 | Increased stagger on enemies by {stagger:%s}, on Weakspot hit. Additionally, increases ranged stagger strength by {ranged_stagger:%s}. / 敵人受到弱點傷害時的踉蹌增加{stagger:%s}，同時遠程攻擊造成的踉蹌增加{ranged_stagger:%s}。 | scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua:280-1168; scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua:270-1243; scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua:330-1713; scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua:250-420; scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua:195-355. | 文件未涵蓋 | 本項四組共用conditional+.3，但兩電擊錘家族的已綁定攻擊是近戰、push或buff tick，不讀ranged impact；自動槍與鐳射槍的實際遠程攻擊會讀取。RAW未列這些型號路徑差異。 |
| 目標與profile例外 | Increased stagger on enemies by {stagger:%s}, on Weakspot hit. Additionally, increases ranged stagger strength by {ranged_stagger:%s}. / 敵人受到弱點傷害時的踉蹌增加{stagger:%s}，同時遠程攻擊造成的踉蹌增加{ranged_stagger:%s}。 | scripts/utilities/attack/stagger_calculation.lua:95-122; scripts/settings/equipment/weapon_templates/power_mauls/settings_templates/power_maul_damage_profile_templates.lua:1233-1458; scripts/settings/equipment/weapon_templates/combat_axes/settings_templates/combat_axe_damage_profile_templates.lua:776-825; scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_damage_profile_templates.lua:891-935. | 文件未涵蓋 | 忽略減免的profile或目標原生弱點覆寫會走tier乘數之外的原生分支；RAW沒有列這些條件。 |
| 純push與push-follow路徑 | Increased stagger on enemies by {stagger:%s}, on Weakspot hit. Additionally, increases ranged stagger strength by {ranged_stagger:%s}. / 敵人受到弱點傷害時的踉蹌增加{stagger:%s}，同時遠程攻擊造成的踉蹌增加{ranged_stagger:%s}。 | scripts/utilities/attack/push_attack.lua:50-88; scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua:1080-1360. | 文件未涵蓋 | 純push固定torso命中並不是weakspot，也非attack_type.ranged；後續獨立攻擊才按自身profile與命中判定。RAW未分列這些動作。 |
| 特殊攻擊與附加tick | Increased stagger on enemies by {stagger:%s}, on Weakspot hit. Additionally, increases ranged stagger strength by {ranged_stagger:%s}. / 敵人受到弱點傷害時的踉蹌增加{stagger:%s}，同時遠程攻擊造成的踉蹌增加{ranged_stagger:%s}。 | scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua:1081-1168; scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua:1153-1243; scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua:1361-1713; scripts/settings/buff/weapon_buff_templates.lua:570-604,757-790; scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_damage_profile_templates.lua:891-935. | 文件未涵蓋 | 直接special命中按各profile處理；uppercut、指定重型profile與autogun bash有ignore_stagger_reduction例外，buff間隔tick無weakspot命中區。RAW未列模式差異。 |
| 持用、層數、計時與快取 | Increased stagger on enemies by {stagger:%s}, on Weakspot hit. Additionally, increases ranged stagger strength by {ranged_stagger:%s}. / 敵人受到弱點傷害時的踉蹌增加{stagger:%s}，同時遠程攻擊造成的踉蹌增加{ranged_stagger:%s}。 | scripts/extension_systems/weapon/player_unit_weapon_extension.lua:633-693,743-785; scripts/extension_systems/buff/buff_extension_base.lua:318-350; scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1839-1848. | 文件未涵蓋 | 效果是持用屬性，不堆層且沒有本項計時；切換和卸裝會改變屬性供應，待統計快取更新後反映。RAW未涵蓋這些狀態與時點。 |
