# 振奮彈幕(Inspiring Barrage)：重伐木槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_heavystubber_p2_toughness_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L91-L129)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L22)。
- 適用型號：布蘭克斯樣式重伐木槍、寬口布蘭克斯樣式重伐木槍、災變布蘭克斯樣式重伐木槍。

## 機制與公式

- 每步所需射擊次數q依本變體wrapper或FireStepFunctions計算，向下取整且至少1；換彈期間函式回傳0。

- 共用執行以`shooting_status.num_shots`算`s=floor(h/q)`；on_ammo_consumed只有步數比上次增加才恢復，倍率min(s,5)。超過五步的後續門檻仍觸發。[步數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1907-L1947)；[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1991-L2034)。

- 恢復要求`T×p×min(s,5)`，T為最大韌性、p為本變體四級比例1／2／3／4%；最後截斷至缺額。一般韌性恢復加成被ignore_stat_buffs略過。[恢復](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/shared_buff_functions.lua#L10-L27)；[缺額](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)。

- Counter增加在ActionShoot._prepare_shooting內、早於實際_shoot與耗彈事件；免費射擊也有on_ammo_consumed，並非按命中人數或淨耗彈累積。[準備函式與計數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L402-L479)；[免費事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L522)。

- on_shoot_finish不直接清counter；武器extension依當時spread模板與movement state的num_shots_clear_time重設。[停火清除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L510-L529)。

- 本wrapper改用q=max(1,floor(C×.05))，即5%而非顯示格式中的10%。[5%門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L22-L39)。

- 假設C=100、T=200、IV級p=.04，第5／10／15／20／25次射擊恢復8／16／24／32／40點；第30次仍40點。

- 數值：`{"unit": "每步觸發基礎最大韌性百分比", "base_max_toughness_percent": [1, 2, 3, 4], "max_step_multiplier": 5, "shots_per_step": "max(1,floor(total_clip_capacity*0.05))", "continuous_after_fifth_step": true, "healing_modifiers_ignored": true, "clip_step_percent": 5}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
