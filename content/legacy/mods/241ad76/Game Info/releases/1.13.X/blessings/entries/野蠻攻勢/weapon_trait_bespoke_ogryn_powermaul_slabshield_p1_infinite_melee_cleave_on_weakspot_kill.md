# 野蠻攻勢(Brutal Momentum)：作戰大錘&板盾實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_powermaul_slabshield_p1_infinite_melee_cleave_on_weakspot_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1.lua#L101-L140)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1_buff_templates.lua#L21)。
- 適用型號：歐洛克斯Mk II戰槌&Mk III板盾、果羅姆 Mk I 戰槌與 Mk V 板盾。

## 機制與公式

- 持用帶有本trait的武器時啟用近戰弱點傷害屬性與melee_infinite_cleave_on_headshot關鍵字；首擊可享有，沒有疊層或擊殺後倒數。[持用Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L428-L439)。

- 四級對弱點額外部分增加7.5／10／12.5／15%；同階段屬性加算。[弱點結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L713-L782)。

- 同次揮擊已完成擊殺數最多2時，若當前以弱點擊殺且目標非ogryn，回退此目標質量並強制abort_attack=false；合格分支亦不寫回target_index。[質量與目標順位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1416-L1420)。

- 擊殺數在條件判斷後才加1，任何先前擊殺都占用名額，因此只有總序前三次擊殺可回退。[擊殺計數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1449-L1454)。

- DamageProfile依target_index挑選targets設定；前三名皆合格時第四名仍使用原來第一順位，第四次擊殺不再回退，其後才推進順位。[傳入順位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1398-L1420)、[目標設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L22-L26)。

- 假設基本傷害80、未加成弱點額外20，IV級為`80 + 20 × 1.15 = 103`；基本50、額外50時為`50 + 50 × 1.15 = 107.5`。

- 若已有25%同階段加成，原值105，加入IV級成108，相對增幅`(108 − 105) ÷ 105 ≈ 2.86%`。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"unit": "近戰弱點額外傷害百分比", "percent": [7.5, 10, 12.5, 15], "eligible_prior_kills_maximum": 2, "duration_seconds": null, "stacks": null, "exclude_ogryn_hit_mass": true}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
