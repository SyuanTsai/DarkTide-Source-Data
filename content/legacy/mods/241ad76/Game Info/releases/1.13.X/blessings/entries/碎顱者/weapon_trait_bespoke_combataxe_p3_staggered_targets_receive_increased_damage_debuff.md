# 碎顱者(Skullcrusher)：工兵鏟實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combataxe_p3_staggered_targets_receive_increased_damage_debuff`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua#L414-L474)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p3_buff_templates.lua#L29)。
- 適用型號：工兵鏟 軍務部 Mk I、工兵鏟 軍務部 Mk III、工兵鏟 軍務部 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：工兵鏟 軍務部 Mk I（combataxe_p3_m1）、工兵鏟 軍務部 Mk III（combataxe_p3_m2）、工兵鏟 軍務部 Mk VII（combataxe_p3_m3）。
- 工兵鏟 軍務部 Mk I（combataxe_p3_m1）：特殊攻擊為 axe_stab 揮擊；沒有 M2/M3 的折鏟黏附追加路徑。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。
- 工兵鏟 軍務部 Mk III（combataxe_p3_m2）：特殊輕／重折鏟揮擊分別用 light_shovel_special／heavy_shovel_special；設定 light_shovel_sticky／heavy_shovel_sticky 追加命中，ActionSweep 以近戰 Attack 和原武器物品派發，profile 本身無 skip_on_hit_proc。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。
- 工兵鏟 軍務部 Mk VII（combataxe_p3_m3）：特殊輕／重折鏟揮擊分別用 light_shovel_special／heavy_shovel_special；設定 light_shovel_sticky／heavy_shovel_sticky 追加命中，ActionSweep 以近戰 Attack 和原武器物品派發，profile 本身無 skip_on_hit_proc。 推擊判定：此Mark已配置 push Attack profile；只有其實際 Attack.execute 命中派發 on_hit 時才可按目標 live-stagger／來源物品／持用條件觸發；獨立 push event 本身不等於 on_hit。

[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
