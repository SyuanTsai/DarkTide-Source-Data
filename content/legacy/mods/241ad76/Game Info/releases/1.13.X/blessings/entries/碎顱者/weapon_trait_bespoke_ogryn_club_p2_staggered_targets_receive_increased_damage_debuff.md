# 碎顱者(Skullcrusher)：惡霸棍棒實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_club_p2_staggered_targets_receive_increased_damage_debuff`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L256-L316)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L15)。
- 適用型號：惡霸棍棒 「布倫特專用」 Mk I、惡霸棍棒 「布倫特得意之作」 Mk II、惡霸棍棒 「布倫特猛擊」 Mk IIIb。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：惡霸棍棒 「布倫特專用」 Mk I（ogryn_club_p2_m1）、惡霸棍棒 「布倫特得意之作」 Mk II（ogryn_club_p2_m2）、惡霸棍棒 「布倫特猛擊」 Mk IIIb（ogryn_club_p2_m3）。
- 惡霸棍棒 「布倫特專用」 Mk I（ogryn_club_p2_m1）：兩個 weapon special 動作均以 ogryn_club_special profile 做 slap sweep；各命中獨立走 Attack.on_hit 條件。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。
- 惡霸棍棒 「布倫特得意之作」 Mk II（ogryn_club_p2_m2）：兩個 weapon special 動作均以 ogryn_club_special profile 做 slap sweep；各命中獨立走 Attack.on_hit 條件。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。
- 惡霸棍棒 「布倫特猛擊」 Mk IIIb（ogryn_club_p2_m3）：兩個 weapon special 動作均以 ogryn_club_special profile 做 slap sweep；各命中獨立走 Attack.on_hit 條件。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。

[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
