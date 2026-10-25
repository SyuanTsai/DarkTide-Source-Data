# 飛鏢彈：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
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
| Pellet proc base | [Pellet proc base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2067-L2081) |
| Pellet unit aggregation event | [Pellet unit aggregation event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L696-L721) |
| Damage gate | [Damage gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L465-L467) |
| Wielded condition | [Wielded condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Target application | [Target application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L90) |
| Proc processing | [Proc processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L307-L338) |
| Shared refresh | [Shared refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L457) |
| Cap refresh | [Cap refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589) |
| ogryn_rippergun_p1 tiers | [ogryn_rippergun_p1 tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L361-L399) |
| ogryn_rippergun_p1 wrapper | [ogryn_rippergun_p1 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_rippergun_p1_buff_templates.lua#L35) |
| shotgun_p1 tiers | [shotgun_p1 tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p1.lua#L270-L308) |
| shotgun_p1 wrapper | [shotgun_p1 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p1_buff_templates.lua#L17) |
| shotgun_p2 tiers | [shotgun_p2 tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L219-L257) |
| shotgun_p2 wrapper | [shotgun_p2 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p2_buff_templates.lua#L22) |
| shotgun_p3 tiers | [shotgun_p3 tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L270-L308) |
| shotgun_p3 wrapper | [shotgun_p3 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p3_buff_templates.lua#L21) |
| Critical flag gate | [Critical flag gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L336-L338) |
| Special shell loading | [Special shell loading](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L652-L674) |
| Special firing mode toggle | [Special firing mode toggle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L685-L699) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 四個逐武器trait均覆寫 I–IV num_stacks_on_proc=3／4／5／6；wrapper均clone bleed_on_crit_pellets。

- Base監聽on_pellet_hits，檢查damage>0與is_critical_strike，持用條件在proc處理時檢查。此事件沒有attacking_item、attack_type或weapon_special參數，base也不加item-match或ranged attack_type檢查。

- ActionShootPellets按hit_unit聚合num_hits_per_unit與damage_per_unit，結束射擊的處理後對unit_to_damage_data_index中每個目標各送一次on_pellet_hits。params.number_of_pellets_hit保留彈丸數，但祝福固定增量不讀它。

- BuffUtils施加前要求HEALTH_ALIVE與目標buff extension；沒有第一目標、弱點、擊殺、持續射擊或傷害距離門檻。近戰與DoT的普通on_hit不會產生這個彈丸彙總事件。

- 目標bleed模板上限16、interval=.5、duration=1.5且加層刷新；父target_buff_data31不是實際上限。超過期限後每interval先跳傷再移除1層，最後一層移除時才清除整個buff。

- 重新施加及滿層刷新start_time與_finished=false，不重設既有_next_interval_t；首次退層等待期限後的下一跳傷，因此名義退完時間包含0至0.5秒節拍相位差。

- 傷害使用bleeding profile、attack_type=buff，帶owner_unit與source_item。輸入威力以smoothstep曲線隨層數變動，另經power scaling、護甲及傷害修正。

- 設當前層數n、等級增量q=3／4／5／6，施加後N=min(n+q,16)。IV級期限內連續觸發為0→6→12→16→16。

- 流血輸入威力：s=N/16，P=500s²(3−2s)。4層P=78.125、8層P=250、12層P=421.875、16層P=500。

- 最後刷新後，先等1.5秒，再於期限之後的下一個既有跳傷節拍開始退層。設等待該節拍的名義相位差為δ（0至0.5秒），則N層的名義退完時間T=1.5+δ+(N−1)×.5秒：8層5–5.5秒、16層9–9.5秒。δ=0的理想估算為5／9秒；嚴格時間比較及固定更新另造成延遲。刷新保留原跳傷時程。

- bleeding profile的power_distribution.attack=175，護甲倍率無甲.5、裝甲/抗性.75、狂戰士1、重甲.25、極端耐久.5。P會經PowerLevel縮放與傷害公式；175與P都不是直接保證的扣血值。

- N=6時，P=500×(6/16)²×(3−2×6/16)=158.203125；同次射擊固定增量q=6，不乘number_of_pellets_hit。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_107`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_107.png)｜[Issue附件](https://github.com/user-attachments/assets/ded2c83c-1daf-4bce-9e73-d85c11228095)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 撕裂槍等級覆寫 | [撕裂槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L361-L401) |
| 撕裂槍Buff接入 | [撕裂槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_rippergun_p1_buff_templates.lua#L35-L37) |
| UI 撕裂槍 | [UI 撕裂槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1038) |
| 撕裂槍 碎敵 Mk II匯入 | [撕裂槍 碎敵 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L15) |
| 撕裂槍 碎敵 Mk II接入 | [撕裂槍 碎敵 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L911-L913) |
| 撕裂槍 碎敵 Mk V匯入 | [撕裂槍 碎敵 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L15) |
| 撕裂槍 碎敵 Mk V接入 | [撕裂槍 碎敵 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L906-L908) |
| 撕裂槍 碎敵 Mk VI匯入 | [撕裂槍 碎敵 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L15) |
| 撕裂槍 碎敵 Mk VI接入 | [撕裂槍 碎敵 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L889-L891) |
| 戰鬥霰彈槍等級覆寫 | [戰鬥霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p1.lua#L270-L308) |
| 戰鬥霰彈槍Buff接入 | [戰鬥霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p1_buff_templates.lua#L17) |
| UI 戰鬥霰彈槍 | [UI 戰鬥霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1131) |
| 戰鬥霰彈槍 紮羅娜 Mk VI匯入 | [戰鬥霰彈槍 紮羅娜 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L14) |
| 戰鬥霰彈槍 紮羅娜 Mk VI接入 | [戰鬥霰彈槍 紮羅娜 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L950-L952) |
| 戰鬥霰彈槍 阿格里皮娜 Mk VII匯入 | [戰鬥霰彈槍 阿格里皮娜 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m2.lua#L14) |
| 戰鬥霰彈槍 阿格里皮娜 Mk VII接入 | [戰鬥霰彈槍 阿格里皮娜 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m2.lua#L962-L964) |
| 戰鬥霰彈槍 奧克塔蘭 Mk IX匯入 | [戰鬥霰彈槍 奧克塔蘭 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m3.lua#L14) |
| 戰鬥霰彈槍 奧克塔蘭 Mk IX接入 | [戰鬥霰彈槍 奧克塔蘭 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m3.lua#L964-L966) |
| 雙管霰彈槍等級覆寫 | [雙管霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L219-L257) |
| 雙管霰彈槍Buff接入 | [雙管霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p2_buff_templates.lua#L22) |
| UI 雙管霰彈槍 | [UI 雙管霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1154) |
| 雙管霰彈槍 十字星 Mk XI匯入 | [雙管霰彈槍 十字星 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L17) |
| 雙管霰彈槍 十字星 Mk XI接入 | [雙管霰彈槍 十字星 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L1110-L1112) |
| 雙管霰彈槍 克魯克 Mk IV匯入 | [雙管霰彈槍 克魯克 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L17) |
| 雙管霰彈槍 克魯克 Mk IV接入 | [雙管霰彈槍 克魯克 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L1103-L1105) |
| 獵人霰彈槍等級覆寫 | [獵人霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L270-L308) |
| 獵人霰彈槍Buff接入 | [獵人霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p3_buff_templates.lua#L21) |
| UI 獵人霰彈槍 | [UI 獵人霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1172) |
| 獵人霰彈槍 奧克塔蘭 Mk III匯入 | [獵人霰彈槍 奧克塔蘭 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L14) |
| 獵人霰彈槍 奧克塔蘭 Mk III接入 | [獵人霰彈槍 奧克塔蘭 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L986-L988) |
