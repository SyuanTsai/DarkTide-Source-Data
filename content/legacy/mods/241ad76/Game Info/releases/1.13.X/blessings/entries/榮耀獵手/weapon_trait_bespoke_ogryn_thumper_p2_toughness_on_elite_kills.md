# 榮耀獵手(Gloryhunter)：震盪槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_thumper_p2_toughness_on_elite_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L9-L39)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L14)。
- 適用型號：震盪槍 洛倫茲 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[榮耀獵手玩家說明](README.md)
- 實際綁定型號：震盪槍 洛倫茲 Mk VI。
- 本變體 I–IV：I 20%／II 25%／III 30%／IV 35%。
- 來源變體為 Ogryn Thumper P2；實際 UI 綁定 Rumbler Lorenz Mk VI（ogryn_thumper_p1_m2），trait item 位於 bespoke_thumper_p2。
- 攻擊模式差異：實際綁定 Rumbler Lorenz Mk VI（P1 M2）有腰射／瞄準發射的 projectile action，以及 bash sweeps；throw_type 是 shoot，非獨立手擲。 bash 或彈體爆炸只有在攻擊路徑以同一 item context 送出擊殺事件時符合。
- 腰射／瞄準彈體直接命中與實際撞擊爆炸均保留震盪槽物品；事件處理時仍持用相應武器才可觸發。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
