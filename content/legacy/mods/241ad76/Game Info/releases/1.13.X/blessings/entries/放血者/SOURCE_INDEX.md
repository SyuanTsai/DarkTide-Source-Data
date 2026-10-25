# 放血者：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Chainaxe trait tiers | [Chainaxe trait tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L53-L91) |
| 2H trait tiers | [2H trait tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_2h_p1.lua#L53-L91) |
| Assault chainsword trait tiers | [Assault chainsword trait tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_p1.lua#L329-L367) |
| Chainaxe clone | [Chainaxe clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainaxe_p1_buff_templates.lua#L11) |
| 2H clone | [2H clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_2h_p1_buff_templates.lua#L11) |
| Assault chainsword clone | [Assault chainsword clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_p1_buff_templates.lua#L25) |
| Shared proc template | [Shared proc template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1161-L1175) |
| Melee weapon-special check | [Melee weapon-special check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L384-L386) |
| Positive damage check | [Positive damage check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L465-L467) |
| Event requires special-profile flag | [Event requires special-profile flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L625-L665) |
| Sticky entry gate | [Sticky entry gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L666-L680) |
| Sticky chooses last profile | [Sticky chooses last profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L739-L786) |
| Sticky last-instance calculation | [Sticky last-instance calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/sweep_stickyness.lua#L41-L77) |
| Chainaxe Mk IV settings | [Chainaxe Mk IV settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L61-L180) |
| Chainaxe Mk XII settings | [Chainaxe Mk XII settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m2.lua#L58-L178) |
| Chainaxe profile flags | [Chainaxe profile flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/settings_templates/chain_axe_damage_profile_templates.lua#L232-L541) |
| Chainaxe heavy profile flags | [Chainaxe heavy profile flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/settings_templates/chain_axe_damage_profile_templates.lua#L912-L1209) |
| Tigrus Mk III single normal sticky instance | [Tigrus Mk III single normal sticky instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L103-L118) |
| Tigrus Mk XV two normal light instances | [Tigrus Mk XV two normal light instances](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L67-L81) |
| Tigrus Mk XV normal heavy/active settings | [Tigrus Mk XV normal heavy/active settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L99-L230) |
| 2H light sticky normal/quick-last profile flags | [2H light sticky normal/quick-last profile flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/settings_templates/chain_sword_2h_damage_profile_templates.lua#L621-L983) |
| 2H heavy sticky/quick-last profile flags | [2H heavy sticky/quick-last profile flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/settings_templates/chain_sword_2h_damage_profile_templates.lua#L2217-L2739) |
| Assault Chainsword Mk IV sticky settings | [Assault Chainsword Mk IV sticky settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L273-L415) |
| Assault Chainsword Mk XIIIg sticky settings | [Assault Chainsword Mk XIIIg sticky settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L58-L139) |
| Assault Chainsword profile flags | [Assault Chainsword profile flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/settings_templates/chain_sword_damage_profile_templates.lua#L364-L654) |
| Shared bleed template | [Shared bleed template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L258) |
| Bleed interval/expiry | [Bleed interval/expiry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64) |
| Target stack add/refresh | [Target stack add/refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L457) |
| At-cap refresh | [At-cap refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589) |
| Post-duration removal | [Post-duration removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L647-L662) |
| Stack decrement and duration refresh | [Stack decrement and duration refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L460-L466) |
| Refresh reopens timer | [Refresh reopens timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L630) |
| Bleeding damage profile | [Bleeding damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466) |
| Chainaxe M1 trait import | [Chainaxe M1 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L15) |
| Chainaxe M1 category append | [Chainaxe M1 category append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L2074-L2076) |
| Chainaxe M2 trait import | [Chainaxe M2 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m2.lua#L14) |
| Chainaxe M2 category append | [Chainaxe M2 category append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m2.lua#L1282-L1284) |
| 2H M1 trait import | [2H M1 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L16) |
| 2H M1 category append | [2H M1 category append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L1537-L1539) |
| 2H M2 trait import | [2H M2 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L15) |
| 2H M2 category append | [2H M2 category append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L1538-L1540) |
| Assault Chainsword M1 trait import | [Assault Chainsword M1 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L15) |
| Assault Chainsword M1 category append | [Assault Chainsword M1 category append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L2424-L2426) |
| Assault Chainsword M2 trait import | [Assault Chainsword M2 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L14) |
| Assault Chainsword M2 category append | [Assault Chainsword M2 category append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L2030-L2032) |
| Weapon buff-template registry | [Weapon buff-template registry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_templates.lua#L58-L60) |
| weapon_buff_templates.lua shared bleed consumer | [weapon_buff_templates.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L258) |
| interval_buff.lua shared bleed consumer | [interval_buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L43) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L352-L363) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L460-L466) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L630) |
| buff_extension_base.lua shared bleed consumer | [buff_extension_base.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L205) |
| buff_extension_base.lua shared bleed consumer | [buff_extension_base.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L647-L662) |
| buff_damage_profile_templates.lua shared bleed consumer | [buff_damage_profile_templates.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68) |
| buff_damage_profile_templates.lua shared bleed consumer | [buff_damage_profile_templates.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466) |
| power_level.lua shared bleed consumer | [power_level.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L92) |
| Target application | [Target application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L90) |
| Matching item gate | [Matching item gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Held gate | [Held gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Queued proc | [Queued proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L307-L338) |
| Sticky actual entry | [Sticky actual entry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1110-L1125) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

三份trait literal只覆寫num_stacks_on_proc，format_values.stacks動態讀tier override；三個weapon wrappers僅clone共同base，沒有額外gate。Base檢查同item、damage>0、melee、weapon_special及held-slot；Attack僅對on_weapon_special_hit_proc profile發事件。ActionSweep須abort hit且always_sticky或special_active才開始sticky；最後instance使用last_damage_profile。Mk III普通重擊instances=1，因此唯一hit是無標記quick-last；Mk XV普通輕擊instances=2，首段一般profile雙標、末段quick-last無標；Assault Chainsword P1 inactive時不進sticky迴圈。Target bleed每0.5秒tick、cap16；1.5秒後逐層減1，加層刷新duration但沿用interval phase。當擊傷害先結算，已施加status留在目標身上。

- 每次合格事件新增q層：突擊鏈斧q=10／12／14／16；重型開膛劍q=3／4／5／6；突擊鏈鋸劍q=11／12／13／14。施加後N=min(n+q,16)。

- 目標流血輸入威力：s=N/16，P=500s²(3−2s)。6層P=158.203125，8層P=250，16層P=500；P不是直接扣血值。

- 最後刷新後先等1.5秒，再於期限後的既有跳傷節拍開始退層。設等待節拍相位δ為0至0.5秒，T=1.5+δ+(N−1)×.5秒；8層名義5–5.5秒、16層9–9.5秒，嚴格時間比較及固定更新另有延遲。

- bleeding profile power_distribution.attack=175；護甲倍率unarmored=.5、armored/resistant=.75、player/berserker/void_shield=1、super_armor=.25、disgustingly_resilient=.5，另經PowerLevel與傷害流程。175及P均不保證相同數字的HP傷害。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_199`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_199.png)｜[Issue附件](https://github.com/user-attachments/assets/cb07e9cd-d287-452c-bbcd-827d4808e0df)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 突擊鏈斧等級覆寫 | [突擊鏈斧等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L53-L91) |
| 突擊鏈斧Buff接入 | [突擊鏈斧Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainaxe_p1_buff_templates.lua#L11) |
| UI 突擊鏈斧 | [UI 突擊鏈斧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L4) |
| 突擊鏈斧 奧瑞斯特斯 Mk IV匯入 | [突擊鏈斧 奧瑞斯特斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L15) |
| 突擊鏈斧 奧瑞斯特斯 Mk IV接入 | [突擊鏈斧 奧瑞斯特斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L2074-L2076) |
| 突擊鏈斧 奧瑞斯特斯 Mk XII匯入 | [突擊鏈斧 奧瑞斯特斯 Mk XII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m2.lua#L14) |
| 突擊鏈斧 奧瑞斯特斯 Mk XII接入 | [突擊鏈斧 奧瑞斯特斯 Mk XII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m2.lua#L1282-L1284) |
| 重型開膛劍等級覆寫 | [重型開膛劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_2h_p1.lua#L53-L91) |
| 重型開膛劍Buff接入 | [重型開膛劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_2h_p1_buff_templates.lua#L11) |
| UI 重型開膛劍 | [UI 重型開膛劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L22) |
| 重型開膛劍 泰格魯斯 Mk III匯入 | [重型開膛劍 泰格魯斯 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L16) |
| 重型開膛劍 泰格魯斯 Mk III接入 | [重型開膛劍 泰格魯斯 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L1537-L1539) |
| 重型開膛劍 泰格魯斯 Mk XV匯入 | [重型開膛劍 泰格魯斯 Mk XV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L15) |
| 重型開膛劍 泰格魯斯 Mk XV接入 | [重型開膛劍 泰格魯斯 Mk XV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L1538-L1540) |
| 突擊鏈鋸劍等級覆寫 | [突擊鏈鋸劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_p1.lua#L329-L367) |
| 突擊鏈鋸劍Buff接入 | [突擊鏈鋸劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_p1_buff_templates.lua#L25) |
| UI 突擊鏈鋸劍 | [UI 突擊鏈鋸劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L40) |
| 突擊鏈鋸劍 卡迪亞 Mk IV匯入 | [突擊鏈鋸劍 卡迪亞 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L15) |
| 突擊鏈鋸劍 卡迪亞 Mk IV接入 | [突擊鏈鋸劍 卡迪亞 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L2424-L2426) |
| 突擊鏈鋸劍 卡迪亞 Mk XIIIg匯入 | [突擊鏈鋸劍 卡迪亞 Mk XIIIg匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L14) |
| 突擊鏈鋸劍 卡迪亞 Mk XIIIg接入 | [突擊鏈鋸劍 卡迪亞 Mk XIIIg接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L2030-L2032) |
