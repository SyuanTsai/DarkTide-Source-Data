# 碎顱者(Skullcrusher)：作戰大錘&板盾實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_powermaul_slabshield_p1_staggered_targets_receive_increased_damage_debuff`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1.lua#L40-L100)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1_buff_templates.lua#L20)。
- 適用型號：作戰大錘&板盾 歐洛克斯 Mk II & Mk III、作戰大錘&板盾 果羅姆 Mk I & Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：作戰大錘&板盾 歐洛克斯 Mk II & Mk III（ogryn_powermaul_slabshield_p1_m1）、作戰大錘&板盾 果羅姆 Mk I & Mk V（ogryn_powermaul_slabshield_p1_m2）。
- 作戰大錘&板盾 歐洛克斯 Mk II & Mk III（ogryn_powermaul_slabshield_p1_m1）：特殊動作 kind=block，持盾格擋本身不是 Attack 命中；普通攻擊及有 Attack.execute 的推擊仍依各自命中判斷。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。
- 作戰大錘&板盾 果羅姆 Mk I & Mk V（ogryn_powermaul_slabshield_p1_m2）：特殊動作 kind=block，持盾格擋本身不是 Attack 命中；普通攻擊及有 Attack.execute 的推擊仍依各自命中判斷。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。

[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
