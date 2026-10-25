# 碎顱者(Skullcrusher)：廁所鏟實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_club_p1_staggered_targets_receive_increased_damage_debuff`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p1.lua#L201-L261)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p1_buff_templates.lua#L14)。
- 適用型號：廁所鏟 兇殘 Mk III、廁所鏟 兇殘 Mk XIX、廁所鏟 兇殘 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：廁所鏟 兇殘 Mk III（ogryn_club_p1_m1）、廁所鏟 兇殘 Mk XIX（ogryn_club_p1_m2）、廁所鏟 兇殘 Mk V（ogryn_club_p1_m3）。
- 廁所鏟 兇殘 Mk III（ogryn_club_p1_m1）：特殊攻擊為 ogryn_shovel_uppercut_plus 揮擊；M2/M3 的折鏟特殊攻擊不適用。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。
- 廁所鏟 兇殘 Mk XIX（ogryn_club_p1_m2）：特殊輕／重折鏟揮擊用 ogryn_shovel_light_special／ogryn_shovel_heavy_special；額外條件仍是每次 Attack.on_hit 時目標 live-stagger。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。
- 廁所鏟 兇殘 Mk V（ogryn_club_p1_m3）：特殊輕／重折鏟揮擊用 ogryn_shovel_light_special／ogryn_shovel_heavy_special；額外條件仍是每次 Attack.on_hit 時目標 live-stagger。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。

[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
